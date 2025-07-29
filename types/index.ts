import React from "react";

export interface IconProps extends React.ComponentProps<"svg"> {
  size: number;
  color?: string;
}

export interface TrendData {
  uuid: string;
  date: string;
  sleepHours: number;
  moodLevel: number;
}
