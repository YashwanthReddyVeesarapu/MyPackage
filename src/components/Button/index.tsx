import React from "react";
import "./styles.scss";

type Props = {
  children: string;
  className?: string;
  onClick: any;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
