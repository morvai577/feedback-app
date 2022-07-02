// @flow
import * as React from "react";

type Props = {
  children?: React.ReactNode;
  version?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
};

export const Button = ({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}: Props) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};
