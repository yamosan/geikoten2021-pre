import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Department } from "models/department";
import departments from "data/departments";
import Layout from "components/Layout";

type Props = {
  item: Department;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = departments.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  const id = params?.id;
  const item = departments.find((data) => data.id === Number(id));
  return { props: { item } };
};

const DepartmentId: NextPage<Props> = ({ item }) => {
  return <Layout title={`${item ? item.name : "Department Detail"} | Next.js + TypeScript Example`}>item</Layout>;
};

export default DepartmentId;
