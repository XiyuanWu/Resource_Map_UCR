import CommunityPageLayout from "../../../components/CommunityPageLayout";
import { communityPageBySlug } from "../../../data/communityPages";

function BlackOrAfricanAmericanPage() {
  return (
    <CommunityPageLayout
      {...communityPageBySlug["black-or-african-american"]}
    />
  );
}

export default BlackOrAfricanAmericanPage;
