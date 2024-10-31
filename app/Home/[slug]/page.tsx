import NewsContent from './NewsContent';

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

// Server Component
export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  return <NewsContent slug={resolvedParams.slug} />;
}