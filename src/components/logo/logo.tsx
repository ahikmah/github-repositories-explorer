import React from "react";

import LogoImage from "src/assets/octocat.png";

interface LogoProps {
  width?: string;
  height?: string;
  className?: string;
}

export function Logo({
  width = "100px",
  height = "100px",
  className,
}: LogoProps): React.JSX.Element {
  return (
    <div className={className}>
      <img alt="Octocat Logo" src={LogoImage} style={{ width, height }} />
    </div>
  );
}
