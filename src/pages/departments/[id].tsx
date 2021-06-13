import { GetStaticProps, GetStaticPaths } from "next";

import { User, SAMPLE_USER_DATA } from "models/user";
import Layout from "components/Layout";

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      item
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = SAMPLE_USER_DATA.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = SAMPLE_USER_DATA.find((data) => data.id === Number(id));
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
