import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SleepIcon from "@/icons/SleepIcon";
import { getLastNDays } from "@/lib/utils";
import { format, isSameDay } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { TrendData } from "@/types";
import { randomUUID } from "node:crypto";
import { MOOD_LEVELS, SLEEP_HOURS } from "@/lib/constants";
import { clsx } from "clsx";

function ChartLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-preset-9 text-neutral-ds-900">
      <SleepIcon size={10} color="#57577b" className="inline mr-1" />
      {children}
    </span>
  );
}

const exampleData: TrendData[] = [
  {
    uuid: randomUUID(),
    date: "2025-07-18",
    sleepHours: 5,
    moodLevel: 2,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-19",
    sleepHours: 7,
    moodLevel: 4,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-20",
    sleepHours: 3,
    moodLevel: 1,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-21",
    sleepHours: 6,
    moodLevel: 3,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-22",
    sleepHours: 8,
    moodLevel: 4,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-23",
    sleepHours: 12,
    moodLevel: 5,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-24",
    sleepHours: 3,
    moodLevel: 2,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-25",
    sleepHours: 7,
    moodLevel: 3,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-26",
    sleepHours: 7,
    moodLevel: 4,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-27",
    sleepHours: 3,
    moodLevel: 1,
  },
  {
    uuid: randomUUID(),
    date: "2025-07-28",
    sleepHours: 9,
    moodLevel: 5,
  },
];

interface ChartDayContentProps {
  date: Date;
}

function ChartDayContent({ date }: ChartDayContentProps) {
  const getData = exampleData.filter((data) => {
    return isSameDay(date, new Date(data.date));
  })[0];

  const MoodIcon = MOOD_LEVELS[getData?.moodLevel]?.Icon;
  const sleepHourClass =
    SLEEP_HOURS[getData?.sleepHours > 9 ? 9 : getData?.sleepHours] || "";
  const moodColorClass = MOOD_LEVELS[getData?.moodLevel]?.colorClass || "";

  return (
    <div className="grid grid-rows-[repeat(4,53px)_68px_42px]">
      <div className="h-full w-10 row-start-1 row-end-6 grid grid-rows-[repeat(4,53px)_68px]">
        <div
          className={clsx(
            "w-full z-[1] relative rounded-full row-end-6",
            sleepHourClass ? "h-[calc(100%-12px)]" : "h-0",
            sleepHourClass,
            moodColorClass,
          )}
        >
          {MoodIcon && (
            <MoodIcon size={30} color="#ffffff" className="mx-auto mt-[5px]" />
          )}
        </div>
      </div>
      <div className="text-center">
        <span className="block text-preset-9 text-neutral-ds-900/70">
          {format(date, "MMM")}
        </span>
        <span className="block text-preset-8 text-neutral-ds-900 mt-[6px]">
          {format(date, "dd")}
        </span>
      </div>
    </div>
  );
}

export default function TrendsChart() {
  const weekDates = useMemo(
    () =>
      getLastNDays(11).map((date) => (
        <ChartDayContent key={`date-${date.toISOString()}`} date={date} />
      )),
    [],
  );

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-5">
          <span className="text-preset-3-mobile text-neutral-ds-900">
            Mood and sleep trends
          </span>
          <div className="flex gap-3 justify-center">
            <div className="grid grid-rows-[repeat(4,53px)_68px_42px] w-24">
              <ChartLabel>9+ hours</ChartLabel>
              <ChartLabel>7-8 hours</ChartLabel>
              <ChartLabel>5-6 hours</ChartLabel>
              <ChartLabel>3-4 hours</ChartLabel>
              <ChartLabel>0-2 hours</ChartLabel>
            </div>
            <div className="flex overflow-x-auto pb-3 w-full">
              <div className="flex gap-3 min-w-max h-[307px] relative">
                <Separator className="absolute m-0 top-[calc(53px*0)] left-0 bg-blue-ds-100" />
                <Separator className="absolute m-0 top-[calc(53px*1)] left-0 bg-blue-ds-100" />
                <Separator className="absolute m-0 top-[calc(53px*2)] left-0 bg-blue-ds-100" />
                <Separator className="absolute m-0 top-[calc(53px*3)] left-0 bg-blue-ds-100" />
                <Separator className="absolute m-0 top-[calc(53px*4)] left-0 bg-blue-ds-100" />
                {weekDates}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
