import { getKbArticlesByCode } from "@/lib/kb";

export default async function handler(req, res) {
  const { code } = req.query; // Assuming you want to fetch articles based on a code
  const articles = await getKbArticlesByCode(code);
  res.status(200).json(articles);
}
