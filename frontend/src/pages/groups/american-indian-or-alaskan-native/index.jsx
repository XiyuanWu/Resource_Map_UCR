import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function AmericanIndianOrAlaskanNativePage() {
  return (
    <CommunityPageLayout
      {...communityPageBySlug["american-indian-or-alaskan-native"]}
    />
  );
}

export default AmericanIndianOrAlaskanNativePage;
