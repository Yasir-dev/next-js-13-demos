import React from "react";

type Props = {
  children: JSX.Element;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      ❤️common layout for dashboard❤️
      {children}
    </>
  );
}
