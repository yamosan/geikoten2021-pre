import { GetStaticProps, NextPage } from "next";

import { Department } from "models/department";
import departments from "data/departments";
import Layout from "components/Layout";

type Props = {
  items: Department[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const items: Department[] = departments;
  return { props: { items } };
};

const Departments: NextPage<Props> = ({ items }) => (
  <Layout title="Departments | Next.js + TypeScript Example">
    <h1>Departments</h1>
    {items.map((item) => (
      <div key={item.id}>{item.name}</div>
    ))}
  </Layout>
);

export default Departments;
