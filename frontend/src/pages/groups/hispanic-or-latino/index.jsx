import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function HispanicOrLatinoPage() {
  return <CommunityPageLayout {...communityPageBySlug["hispanic-or-latino"]} />;
}

export default HispanicOrLatinoPage;
