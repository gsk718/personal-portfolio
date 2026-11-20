import type { Metadata } from "next";
import { AlphaWatchPage } from "@/components/portfolio";

export const metadata: Metadata = {
  title: "AlphaWatch — Gaurav Kumar",
  description: "Project overview for AlphaWatch, a stock market analysis application.",
};

export default function Page() {
  return <AlphaWatchPage />;
}
