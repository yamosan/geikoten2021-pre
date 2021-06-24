import { GetStaticProps, NextPage } from "next";

import { Department } from "models/department";
import Layout from "components/layouts";

type Props = {
  items: Department[];
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const items: Department[] = departments; // TODO: data/departments配下のjson全てを読み込み
//   return { props: { items } };
// };

const Departments: NextPage<Props> = ({ items }) => (
  <Layout title="Departments | Next.js + TypeScript Example">
    <h1>Departments</h1>
    {items.map((item) => (
      <div key={item.id}>{item.name}</div>
    ))}
  </Layout>
);

export default Departments;
