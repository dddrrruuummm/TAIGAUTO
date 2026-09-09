import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TAIGAUTO CO., LTD. to discuss automotive component sourcing, supplier coordination, and trade opportunities."
};

export default function ContactPage() {
  return <ContactSection />;
}
