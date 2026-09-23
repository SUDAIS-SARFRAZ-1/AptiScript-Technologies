import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <ComingSoon
      title="Contact Us"
      note="The contact form is being built next — it needs the business email and anti-spam setup confirmed first."
    />
  );
}
