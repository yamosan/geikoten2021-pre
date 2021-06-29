import Image from "next/image";
import Link from "next/link";
import Layout from "components/layouts";
import QAndA from "components/QAndA";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Department } from "models/department";
import LinkButton from "components/parts/LinkButton";
import TekibusyoLink from "components/TekibusyoLink";
import Paginator from "components/Paginator";

type Props = {
  current: Department;
  prev: Department;
  next: Department;
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
  {
    id: 2,
    name: "副祭長",
    manager: {
      name: "副祭長",
      class: "3O",
    },
    qAndA: [
      {
        question: "どんなお仕事",
        answers: [
          {
            content: "椅子に座って偉そうに皆に指示をしているよ！",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "書記",
    manager: {
      name: "書記",
      class: "3O",
    },
    qAndA: [
      {
        question: "お仕事してますか？",
        answers: [
          {
            content: "椅子に座って偉そうに皆に指示をしているよ！",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "総務",
    manager: {
      name: "総務",
      class: "3O",
    },
    qAndA: [
      {
        question: "どんなお仕事しか？",
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

export const getStaticProps: GetStaticProps<Props, { name: string }> = async (ctx) => {
  const name = ctx.params?.name;
  // const items: Department[] = departments; // TODO: data/departments配下のjson全てを読み込み
  // const item = items.find(v => v.id === id)
  const current = _items.find((v) => v.name === name);
  const next = current.id + 1 <= _items.length ? _items.find((v) => v.id === current.id + 1) : _items[0];
  const prev = current.id - 1 >= 1 ? _items.find((v) => v.id === current.id - 1) : _items[_items.length - 1];
  return { props: { current, prev, next } };
};

const DepartmentId: NextPage<Props> = (props) => {
  const { current, prev, next } = props;

  return (
    <Layout title={`Department Detail | Next.js + TypeScript Example`}>
      <article className="relative">
        <div className="h-96 relative">
          <Image src={`/img/photo_bg.png`} alt="背景" width={375} height={520} layout="responsive" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 transform rotate-6">
              <Image
                src={`/img/managers/${current.name}.png`}
                alt={current.name}
                width={254}
                height={382}
                layout="fixed"
              />
            </div>
          </div>
          <div className="absolute top-56 left-0 w-full">
            <Paginator next={`/departments/${next.name}`} prev={`/departments/${prev.name}`} />
          </div>
        </div>

        {/* TODO: ↓ずらしてスクロールできるようにする */}
        {/* fixedとmt-96 */}
        <div className="relative mt-0">
          <div className="w-full bg-bg rounded-3xl pt-6 pb-20">
            <h2 className="font-medium text-2xl text-center text-secondary py-0.5">{current.name}</h2>
            <h4 className="font-medium text-base text-center text-black">{`${current.manager.class}・${current.manager.name}`}</h4>
            <div className="mt-4 bg-white w-11/12 rounded-2xl mx-auto px-5 pt-7 pb-12">
              {current.qAndA.map((v, i) => (
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
