import Link from "next/link";
import "./styles.scss";

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
