// Server component
import { getKbArticlesByCode } from '@/lib/kb';
import TimelineScroll from './TimelineScroll';

const Timeline = async () => {
  // Fetch data on the server
  const timelineData = await getKbArticlesByCode('TIMELINE_DATA');
  
  return <TimelineScroll timelineData={timelineData} />;
};

export default Timeline; 