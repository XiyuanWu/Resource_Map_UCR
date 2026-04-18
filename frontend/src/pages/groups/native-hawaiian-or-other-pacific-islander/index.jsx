import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function NativeHawaiianOrOtherPacificIslanderPage() {
  return (
    <CommunityPageLayout
      {...communityPageBySlug["native-hawaiian-or-other-pacific-islander"]}
    />
  );
}

export default NativeHawaiianOrOtherPacificIslanderPage;
