import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-16 pb-10 text-center text-sm text-neutral-ds-600 space-y-2">
      <Separator className="bg-neutral-ds-900/10 mb-6" />
      <p>
        Made with 💙 by{" "}
        <a
          href="https://juanda.dev"
          className="underline hover:text-blue-ds-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Juan Daniel Martínez
        </a>
      </p>
      <p>
        Spot something weird?{" "}
        <a
          href="https://github.com/juandadev/mood-tracker/issues"
          className="underline hover:text-current/70"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report it here
        </a>
        .
      </p>
      <nav className="flex justify-center gap-4 text-sm">
        <a href="/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        <a href="/about" className="hover:underline">
          About
        </a>
      </nav>
      <p className="text-xs text-neutral-ds-900/50">
        @ {new Date().getFullYear()} Mood Tracker. All rights reserved.
      </p>
      <p className="text-xs italic">
        This app is not a substitute for professional health advice.
      </p>
    </footer>
  );
}
