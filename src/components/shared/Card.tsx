// @flow
import * as React from "react";

declare interface CardProps {
  children?: React.ReactNode;
  reverse?: boolean;
}

export const Card = ({ children, reverse }: CardProps): JSX.Element => {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};
