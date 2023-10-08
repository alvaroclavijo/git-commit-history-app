import React, { ReactNode } from "react";

import classes from "./styles.module.css";

interface RoundedContainerProps {
  children: ReactNode;
  className?: string;
}

const RoundedContainer: React.FC<RoundedContainerProps> = ({
  children,
  className,
}) => {
  const defaultClassName = classes.container;

  return (
    <div
      className={`${defaultClassName} ${className}`}
    >
      {children}
    </div>
  );
};

export default RoundedContainer;