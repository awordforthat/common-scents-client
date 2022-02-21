import { useRouter } from "next/router";

import { Layout } from "../../components/layout";

const Scent = () => {
  const router = useRouter();
  const { scent } = router.query;
  return (
    <Layout>
      <h1 className="title">Scent: {scent}</h1>
    </Layout>
  );
};

export default Scent;
