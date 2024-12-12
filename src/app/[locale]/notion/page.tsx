import { getNotionPage } from "@/packages/notion";
import { NotionPageRenderer } from "@/packages/notion/_components/notion-renderer";

export default async function NotionPage() {
  const markdown = await getNotionPage("15acabab-cfef-801b-8399-fc973cd4d62e");

  return <NotionPageRenderer markdown={markdown} />;
}
