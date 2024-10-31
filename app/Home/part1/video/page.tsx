import { getKbArticlesByCode } from "@/lib/kb";

const VideoPage = async () => {
  const { article } = await getKbArticlesByCode("Home/part1/video");
  
  // Add null checks and defensive programming
  if (!article || article.length === 0) {
    return <div>Loading...</div>;
  }

  // Safely access image URL with fallback
  const imageUrl = article[0]?.image?.url 
    ? `https://khas-dayan.api.erxes.io/api/read-file?key=${article[0].image.url}`
    : '/default-video-thumbnail.jpg';  // Add a fallback image to your public folder

  return (
    <div>
      <img 
        src={imageUrl} 
        alt="Video thumbnail"
        onError={(e) => {
          e.currentTarget.src = '/default-video-thumbnail.jpg';  // Fallback if image fails to load
        }}
      />
      {/* ... rest of your component */}
    </div>
  );
}; 

export default VideoPage;