"use client";
import MainLayout from "@/layouts/MainLayout";
import "./styles.scss";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Check, ExpandMore, LocalShipping } from "@mui/icons-material";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { apiInstance } from "@/lib/api/apiInstance";
import { UserAuth } from "@/components/context/AuthContext";
import { redirect } from "next/navigation";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 7,
    borderRadius: 1,
    marginTop: "22px",
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 25,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 25,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [value, setValue] = useState("All");
  const [filteredData, setFilteredData] = useState<Array<any>>([]);

  const state = useSelector((state: any) => state);

  const data = state.data.items;

  const dispatch = useDispatch();

  const context: any = UserAuth();

  const steps = [
    "Waiting for details",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];

  type Item = {
    _id: string;
    status: any;
    last_modified: string;
    company_name: string;
    image: string;
    last_location: string;
    tracking_number: string;
    carrier: string;
    tracking_link: string;
  };

  const filterOptions = [
    { value: "All", name: "All" },
    { value: "Shipped", name: "Shipped" },
    { value: "Out for delivery", name: "Out for delivery" },
    { value: "Delivered", name: "Delivered" },
  ];

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (value === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((e: any) => e.status === value));
    }
  }, [value]);

  if (!context.user) {
    return redirect("/login");
  }

  return (
    <div className="home">
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          background: "#784af4",
          color: "white",
          display: "flex",
          width: "100%",
        }}
      >
        {filterOptions.map((o, i) => (
          <ToggleButton key={i} style={{ color: "white" }} value={o.value}>
            {o.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {filteredData.length >= 1 ? (
        filteredData.map((item: Item, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {item.image ? (
                  <Image
                    width={151}
                    src={item.image}
                    alt="Live from space album cover"
                  />
                ) : (
                  <LocalShipping style={{ fontSize: "5em" }} />
                )}
              </div>

              <CardContent
                sx={{
                  flex: "1",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant={"h2"}
                  style={{
                    fontSize: "2em",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {item.company_name}
                </Typography>
                <Stepper
                  alternativeLabel
                  activeStep={steps.findIndex((step) => step == item.status)}
                  connector={<QontoConnector />}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <Typography>{label}</Typography>
                      <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.last_location}
                </Typography>
              </CardContent>
            </AccordionSummary>
            <AccordionDetails>
              <div className="container">
                <div className="column">
                  <span>Tracking ID:</span>
                  {item.tracking_number ? (
                    <a href={item.tracking_link}>{item.tracking_number}</a>
                  ) : (
                    "N/A"
                  )}
                  <span>Last updated:</span>{" "}
                  {item.last_modified ? item.last_modified : "N/A"}
                </div>
                <div className="column">
                  <span>Carrier:</span> {item.carrier ? item.carrier : "N/A"}
                  <span>Last Location: </span>{" "}
                  {item.last_location ? item.last_location : "N/A"}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography style={{ margin: "50px", fontSize: "2em" }}>
              No Data
            </Typography>
          </AccordionSummary>
        </Accordion>
      )}
      {/* <h2> Track My Package</h2>
        <Input
          value={trackingNumber}
          placeholder="#Tracking ID"
          type="text"
          onChange={setTrackingNumber}
        /> */}
      {/* <Button onClick={() => track()}>Track</Button> */}
    </div>
  );
}
