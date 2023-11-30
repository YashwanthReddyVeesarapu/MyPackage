import React from "react";
import "./styles.scss";
import Link from "next/link";
type Props = {};

export default function Footer(props: Props) {
  return <footer>
    <div>
        <Link href = {"/about"}>About</Link>
      </div>
      <div>
        <Link href={'/chat'}>Chat</Link>
      </div>
      <div>
        <Link href={'/contact'}>Contact us</Link>
      </div>
  </footer>;
}
