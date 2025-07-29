import VerySadIcon from "@/icons/VerySadIcon";
import { IconProps } from "@/types";
import SadIcon from "@/icons/SadIcon";
import NeutralIcon from "@/icons/NeutralIcon";
import HappyIcon from "@/icons/HappyIcon";
import VeryHappyIcon from "@/icons/VeryHappyIcon";
import React from "react";

export const MOOD_LEVELS: Record<
  number,
  { label: string; Icon: React.ComponentType<IconProps>; colorClass: string }
> = {
  1: {
    label: "Very Sad",
    Icon: VerySadIcon,
    colorClass: "bg-red-ds-300",
  },
  2: {
    label: "Sad",
    Icon: SadIcon,
    colorClass: "bg-indigo-ds-200",
  },
  3: {
    label: "Neutral",
    Icon: NeutralIcon,
    colorClass: "bg-blue-ds-300",
  },
  4: {
    label: "Happy",
    Icon: HappyIcon,
    colorClass: "bg-green-ds-300",
  },
  5: {
    label: "Very Happy",
    Icon: VeryHappyIcon,
    colorClass: "bg-amber-ds-300",
  },
};

export const SLEEP_HOURS: Record<number, string> = {
  0: "",
  1: "row-start-5",
  2: "row-start-5",
  3: "row-start-4",
  4: "row-start-4",
  5: "row-start-3",
  6: "row-start-3",
  7: "row-start-2",
  8: "row-start-2",
  9: "row-start-1",
};
