import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function AsianPage() {
  return <CommunityPageLayout {...communityPageBySlug.asian} />;
}

export default AsianPage;
