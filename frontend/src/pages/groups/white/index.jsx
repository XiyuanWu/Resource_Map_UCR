import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function WhitePage() {
  return <CommunityPageLayout {...communityPageBySlug.white} />;
}

export default WhitePage;
