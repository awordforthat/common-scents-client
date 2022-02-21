import type { NextPage } from "next";

import { Layout } from "../components/layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <h1 className="title">Say Hi!</h1>
      <p className="bodyText">
        Have a bug to report? Incredibly upset with how we parse scent descriptions? Want to shower us in praise for
        having created such a wonderful tool? We&#39;d love to hear from you. Get in touch at
        fake_email_address@fake-domain.com and we&#39;ll get back to you!
      </p>
    </Layout>
  );
};

export default Contact;
