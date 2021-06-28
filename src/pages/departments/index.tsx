import { GetStaticProps } from "next";
import Layout from "components/layouts";
import FirstView from "components/parts/FirstView";
import TekibusyoLink from "components/TekibusyoLink";
import QAndAPageLink from "components/QAndAPageLink";
import Section from "components/Section";
import PictureFrameList from "components/PictureFrameList";
import LinkButton from "components/parts/LinkButton";
import type { NextPage } from "next";
import type { Department } from "models/department";

type Props = {
  items: Department[];
};

const _items: Department[] = [
  {
    id: 1,
    name: "芸工祭長",
    manager: {
      name: "脛骨",
      class: "3O",
    },
    qAndA: [
      {
        question: "どんなお仕事してますか？",
        answers: [
          {
            content: "椅子に座って偉そうに皆に指示をしているよ！",
          },
        ],
      },
    ],
  },
];

export const getStaticProps: GetStaticProps<Props> = async () => {
  // const items: Department[] = departments; // TODO: data/departments配下のjson全てを読み込み
  return { props: { items: _items } };
};

const Departments: NextPage<Props> = ({ items }) => (
  <Layout title="Departments | Next.js + TypeScript Example">
    <FirstView index="01" title="部署紹介" />
    <div className="w-5/6 mx-auto pt-8">
      <p className="text-black text-sm font-normal leading-6">
        芸工祭には全部で19の部署長と幹部が居ます。
        <br />
        <span className="highlight">気になる部署</span>に所属して、みんなで芸工祭を盛り上げよう！
      </p>
      <div className="flex flex-col gap-3 pt-6">
        <TekibusyoLink />
        <QAndAPageLink />
      </div>
      <Section heading="幹部" className="pt-12">
        <PictureFrameList departments={items} />
      </Section>
      <Section heading="部署" className="pt-12">
        <PictureFrameList departments={items} />
      </Section>
      <div className="py-10">
        <LinkButton href="#">部署配属希望フォームはコチラ</LinkButton>
      </div>
    </div>
  </Layout>
);

export default Departments;
