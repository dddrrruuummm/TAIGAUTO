import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {alternates:{canonical:"/contact"},
  title: "Contact",
  description: "Contact TAIGAUTO CO., LTD. to discuss BRABUS and MANSORY modification parts, vehicle fitment requirements, and automotive component sourcing."
};

export default function ContactPage() {
  return <ContactSection page />;
}
