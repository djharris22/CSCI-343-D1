import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

export default function SportsNewsScreen() {
  const type = "Sports";
  const displayedNews = NEWS.filter((newsItem) => {
    return newsItem.type === type;
  })
  return <List items={displayedNews} />
}
