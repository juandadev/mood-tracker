import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SleepIcon from "@/icons/SleepIcon";
import { getCurrentWeekDates } from "@/lib/utils";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

function ChartLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-preset-9 text-neutral-ds-900">
      <SleepIcon size={10} color="#57577b" className="inline mr-1" />
      {children}
    </span>
  );
}

interface ChartDayContentProps {
  date: Date;
}

function ChartDayContent({ date }: ChartDayContentProps) {
  return (
    <div className="grid grid-rows-[repeat(4,53px)_68px_42px]">
      <div className="h-full w-10 row-start-1 row-end-6 pb-3"></div>
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
      getCurrentWeekDates().map((date) => (
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
          <div className="flex justify-center">
            <div className="grid grid-rows-[repeat(4,53px)_68px_42px] w-20">
              <ChartLabel>9+ hours</ChartLabel>
              <ChartLabel>7-8 hours</ChartLabel>
              <ChartLabel>5-6 hours</ChartLabel>
              <ChartLabel>3-4 hours</ChartLabel>
              <ChartLabel>0-2 hours</ChartLabel>
            </div>
            <div className="flex overflow-x-auto pb-3">
              <div className="flex gap-3 min-w-max h-[307px] relative">
                <Separator className="absolute m-0 top-[calc(53px*0)] left-0" />
                <Separator className="absolute m-0 top-[calc(53px*1)] left-0" />
                <Separator className="absolute m-0 top-[calc(53px*2)] left-0" />
                <Separator className="absolute m-0 top-[calc(53px*3)] left-0" />
                <Separator className="absolute m-0 top-[calc(53px*4)] left-0" />
                {weekDates}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
