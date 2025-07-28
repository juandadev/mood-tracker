import LogMood from "@/components/LogMood/LogMood";
import AverageMood from "@/components/AverageMood/AverageMood";
import TrendsChart from "@/components/TrendsChart/TrendsChart";

export default function Home() {
  return (
    <div className="py-12 pb-0 flex flex-col gap-16">
      <LogMood />
      <div className="flex flex-col gap-8">
        <AverageMood />
        <TrendsChart />
      </div>
    </div>
  );
}
