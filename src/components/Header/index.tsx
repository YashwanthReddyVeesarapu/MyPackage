import Link from "next/link";
import "./styles.scss";
import {Card,CardMedia,CardContent,CardActionArea,Accordion,AccordionSummary,Typography,Grid} from '@mui/material';

export default function Header() {
  return (
    <header>
      <div>
        <Link href={"/"}>MyPackage</Link>
      </div>
      <div>
        <Link href={"/profile"}>Profile</Link>
      </div>
      
    </header>
  );
}
