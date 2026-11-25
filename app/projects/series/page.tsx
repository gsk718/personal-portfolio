import type { Metadata } from "next";
import { SeriesPage } from "@/components/portfolio";

export const metadata: Metadata = {
  title: "Series — Gaurav Kumar",
  description: "Series is a mobile application for discovering and tracking TV shows and movies.",
};

export default function Page() {
  return <SeriesPage />;
}
