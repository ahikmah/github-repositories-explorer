import { Icon } from "@iconify/react";

interface IconifyProps {
  icon: string;
  size?: string | number;
}

export const Iconify = ({ icon, size = 14 }: IconifyProps) => {
  return (
    <Icon
      icon={icon}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
