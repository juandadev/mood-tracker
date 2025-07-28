import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const today = new Date();

export default function LogMood() {
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-2xl font-bold text-blue-ds-600">
          Hello there!
        </span>
        <h1 className="text-preset-1-mobile text-neutral-ds-900">
          How are you feeling today?
        </h1>
        <span className="text-preset-6 text-neutral-ds-600">
          {format(today, "EEEE, MMMM do, yyyy")}
        </span>
      </div>
      <Button className="">Log today&apos;s mood</Button>
    </div>
  );
}
