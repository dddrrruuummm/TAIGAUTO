"use client";
import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";

export function PartsInquiry({ email }: { email: string }) {
  const params = useSearchParams();
  const brand = params.get("brand") || "";
  const topic = params.get("topic") || "";
  const initialTopic = [brand, topic].filter(Boolean).join(" — ").slice(0, 200);
  return <InquiryForm key={initialTopic} email={email} subject="TAIGAUTO parts inquiry" topicLabel="Brand & part family" initialTopic={initialTopic} messagePlaceholder="Include your vehicle make, model, year, part number or reference, preferred finish, quantity, destination, and timing." />;
}
