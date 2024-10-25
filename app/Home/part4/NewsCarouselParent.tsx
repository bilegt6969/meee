import { getKbArticlesByCode } from "@/lib/kb";
import { NewsCarouselChild } from "./NewsCarouselChild"; // Updated import

export default async function NewsCarouselParent() {
  // Fetch articles on the server side
  const { article } = await getKbArticlesByCode("News");

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
