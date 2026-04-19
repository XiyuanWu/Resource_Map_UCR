import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function UmmahMuslimPage() {
  return <CommunityPageLayout {...communityPageBySlug["ummah-muslim"]} />;
}

export default UmmahMuslimPage;
