import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Our Process",
};

export default function ProcessPage() {
  return <ComingSoon title="Our Process" />;
}
