import Link from "next/link";
import "./styles.scss";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Accordion,
  AccordionSummary,
  Typography,
  Grid,
} from "@mui/material";
import { UserAuth } from "../context/AuthContext";

export default function Header() {
  const user = UserAuth();

  return (
    <header>
      <div>
        <Link href={"/"}>MyPackage</Link>
      </div>
      <div>
        {user ? (
          <Link href={"/profile"}>Profile</Link>
        ) : (
          <Link href={"/login"}>Login / Sign Up</Link>
        )}
      </div>
    </header>
  );
}
