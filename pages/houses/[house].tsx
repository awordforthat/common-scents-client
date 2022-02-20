import { useRouter } from "next/router";

import Layout from "../../components/layout";

const House = () => {
  const router = useRouter();
  const { house } = router.query;
  return (
    <Layout navbarStyle="mobileSmall">
      <h1 className="title">House: {house}</h1>
    </Layout>
  );
};

export default House;
