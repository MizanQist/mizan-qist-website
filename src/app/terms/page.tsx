import { legal } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";
import { LegalArticle } from "@/components/sections/LegalArticle";

export const metadata = pageMetadata({ title: "Terms of use", description: "Terms governing use of the Mizan Qist Limited website.", path: "/terms" });

export default function TermsPage() {
  return <LegalArticle doc={legal.terms} />;
}
