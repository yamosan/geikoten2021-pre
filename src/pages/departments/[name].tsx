import Image from "next/image";
import Link from "next/link";
import Layout from "components/layouts";
import QAndA from "components/QAndA";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Department } from "models/department";
import LinkButton from "components/parts/LinkButton";
import TekibusyoLink from "components/TekibusyoLink";

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
  {
    id: 2,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = _items.map((item) => ({
    params: { name: item.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Department, { name: string }> = async (ctx) => {
  const name = ctx.params?.name;
  // const items: Department[] = departments; // TODO: data/departments配下のjson全てを読み込み
  // const item = items.find(v => v.id === id)

  const item = _items.find((v) => v.name === name);
  return { props: item };
};

const DepartmentId: NextPage<Department> = (props) => {
  return (
    <Layout title={`Department Detail | Next.js + TypeScript Example`}>
      <article className="relative">
        <div className="h-96 relative">
          <Image src={`/img/photo_bg.png`} alt="背景" width={375} height={520} layout="responsive" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 transform rotate-6">
              <Image src={`/img/managers/${props.name}.png`} alt={props.name} width={254} height={382} layout="fixed" />
            </div>
          </div>
        </div>

        {/* TODO: ↓ずらしてスクロールできるようにする */}
        {/* fixedとmt-96 */}
        <div className="relative mt-0">
          <div className="w-full bg-bg rounded-3xl pt-6 pb-10">
            <h2 className="font-medium text-2xl text-center text-secondary py-0.5">{props.name}</h2>
            <h4 className="font-medium text-base text-center text-black">{`${props.manager.class}・${props.manager.name}`}</h4>
            <div className="mt-4 bg-white w-11/12 rounded-2xl mx-auto px-5 pt-7 pb-12">
              {props.qAndA.map((v, i) => (
                <QAndA index={i + 1} question={v.question} answers={v.answers} key={i.toString()} />
              ))}
            </div>
            <div className="text-center text-black mt-6">
              <Link href={"/departments"}>一覧へ</Link>
            </div>
            <div className="w-5/6 mx-auto mt-6">
              <LinkButton href="#">部署配属希望フォームはコチラ</LinkButton>
            </div>
          </div>
        </div>
      </article>
      {/* TODO: スクロールでfade-out */}
      <div className="fixed w-full bottom-4">
        <div className="w-5/6 mx-auto">
          <TekibusyoLink />
        </div>
      </div>
    </Layout>
  );
};

export default DepartmentId;
