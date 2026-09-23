import { ComingSoon } from "@/components/ui/ComingSoon";

export default async function PortfolioDetailPage(props: PageProps<"/portfolio/[slug]">) {
  const { slug } = await props.params;
  return <ComingSoon title={slug} note="Case study details are coming soon." />;
}
