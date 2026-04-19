import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function AmericanIndianPage() {
  return <CommunityPageLayout {...communityPageBySlug["american-indian"]} />;
}

export default AmericanIndianPage;
