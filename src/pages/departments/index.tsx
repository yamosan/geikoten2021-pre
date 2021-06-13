import { GetStaticProps } from "next";

import { User, SAMPLE_USER_DATA } from "models/user";
import Layout from "components/Layout";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Departments | Next.js + TypeScript Example">
    <h1>Departments</h1>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = SAMPLE_USER_DATA;
  return { props: { items } };
};

export default WithStaticProps;
