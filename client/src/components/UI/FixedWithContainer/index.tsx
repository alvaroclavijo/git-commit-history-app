import React, { ReactNode } from "react";

import classes from "./styles.module.css";

interface FixedWidthContainerProps {
  children: ReactNode;
  className?: string;
}

const FixedWidthContainer: React.FC<FixedWidthContainerProps> = ({
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

export default FixedWidthContainer;