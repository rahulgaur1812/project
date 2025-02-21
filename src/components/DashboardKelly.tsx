"use client";

import * as React from "react";
import { DashboardBackground } from "./DashboardBackground";
import { DashboardLogo } from "./DashboardLogo";

const DashboardKelly: React.FC = () => {
  return (
    <main className="flex relative flex-col items-start px-20 pt-9 w-full min-h-[2171px] pb-[2117px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <DashboardBackground />
      <DashboardLogo />
    </main>
  );
};

export default DashboardKelly;
