import React from "react";
import "./styles.scss";
import Link from "next/link";
type Props = {};

export default function Footer(props: Props) {
  return (
    <footer>
      <div className="f-col">
        <Link href={"/about"}>About</Link>
        <Link href={"/chat"}>Chat</Link>
        <Link href={"/contact"}>Contact us</Link>
        <Link href={"/disclaimer"}>Disclaimer</Link>
      </div>
    </footer>
  );
}
