import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TAIGAUTO privacy policy for website visitors and automotive component inquiries."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16">
      <div className="container-page max-w-3xl">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>
        <div className="mt-8 space-y-5 leading-8 text-ink/70">
          <p>TAIGAUTO CO., LTD. collects information you choose to submit through contact forms, email, or component inquiry requests. This may include your name, email address, company information, and message details.</p>
          <p>We use this information to respond to inquiries, discuss automotive component categories and sourcing opportunities, improve our services, and communicate about trade partnerships. We do not sell personal information.</p>
          <p>Website analytics, cookies, and server logs may be used to understand traffic and improve performance. You can control cookies through your browser settings.</p>
          <p>To request access, correction, or deletion of your information, contact info@taigauto.org.</p>
        </div>
      </div>
    </section>
  );
}
