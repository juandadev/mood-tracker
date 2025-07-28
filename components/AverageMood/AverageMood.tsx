import { Card, CardContent } from "@/components/ui/card";

export default function AverageMood() {
  return (
    <Card>
      <CardContent>
        {/* Average Mood */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-preset-5">Average Mood</span>
              <span className="text-preset-7 ml-1">(Last 5 Check-ins)</span>
            </div>
            <div className="flex flex-col py-10 px-4 rounded-2xl bg-blue-ds-100 gap-3 card-bg-1">
              <span className="text-preset-4 text-neutral-ds-900">
                Keep tracking!
              </span>
              <span className="text-preset-7 text-neutral-ds-900">
                Log 5 check-ins to see your average mood.
              </span>
            </div>
          </div>

          {/* Average Sleep */}
          <div className="flex flex-col gap-3">
            <div>
              <span className="text-preset-5">Average Sleep</span>
              <span className="text-preset-7 ml-1">(Last 5 Check-ins)</span>
            </div>
            <div className="flex flex-col py-10 px-4 rounded-2xl bg-blue-ds-100 gap-3 card-bg-1">
              <span className="text-preset-4 text-neutral-ds-900">
                Not enough data yet!
              </span>
              <span className="text-preset-7 text-neutral-ds-900">
                Track 5 nights to view average sleep.
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
