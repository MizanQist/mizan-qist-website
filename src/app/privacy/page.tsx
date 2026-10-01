import { legal } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";
import { LegalArticle } from "@/components/sections/LegalArticle";

export const metadata = pageMetadata({ title: "Privacy policy", description: "How Mizan Qist Limited handles personal information submitted through this website.", path: "/privacy" });

export default function PrivacyPage() {
  return <LegalArticle doc={legal.privacy} />;
}
