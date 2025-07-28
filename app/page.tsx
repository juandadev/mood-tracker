import LogMood from "@/components/LogMood/LogMood";
import AverageMood from "@/components/AverageMood/AverageMood";

export default function Home() {
  return (
    <div className="py-12 px-4 flex flex-col gap-16">
      <LogMood />
      <div className="flex flex-col gap-8">
        <AverageMood />
      </div>
    </div>
  );
}
