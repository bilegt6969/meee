import { getKbArticlesByCode } from "@/lib/kb";
import { NewsCarouselChild } from "./NewsCarouselChild"; // Updated import
import { cookies } from "next/headers";

export default async function NewsCarouselParent() {
  // Fetch articles on the server side
 const cookieStore = cookies();
  const currentLanguage = (await cookieStore).get("language")?.value ?? "MNG";
  const {article} = await getKbArticlesByCode(currentLanguage==="MNG" ? "News-MNG" : "News");
  const articles = article.map((item) => ({
    ...item,
    image: { url: item.image?.url || '' } // Ensure image.url is always a string
  }));

  return (
    <div>
      <NewsCarouselChild articles={articles} />
    </div>
  );
}
