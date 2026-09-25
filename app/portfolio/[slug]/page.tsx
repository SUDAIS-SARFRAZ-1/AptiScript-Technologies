import { ComingSoon } from "@/components/ui/ComingSoon";

type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  return <ComingSoon title={slug} note="Case study details are coming soon." />;
}
