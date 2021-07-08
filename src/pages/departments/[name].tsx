import Image from "components/parts/Image";
import Link from "next/link";
import { getDepartments } from "utils/departments";
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

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getDepartments();
  const paths = items.map((item) => ({
    params: { name: item.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, { name: string }> = async (ctx) => {
  const name = ctx.params?.name;
  const items = await getDepartments();
  // TODO: idが欠けてたときにスキップしたい
  const current = items.find((v) => v.name === name);
  const next = current.id + 1 <= items.length ? items.find((v) => v.id === current.id + 1) : items[0];
  const prev = current.id - 1 >= 1 ? items.find((v) => v.id === current.id - 1) : items[items.length - 1];
  return { props: { current, prev, next } };
};

const DepartmentId: NextPage<Props> = (props) => {
  const { current, prev, next } = props;

  return (
    <Layout title={`Department Detail | Next.js + TypeScript Example`}>
      <article className="relative">
        <div className="h-96 relative">
          <Image
            src={`/img/contents/departments/q_and_a_bg.png`}
            alt="背景"
            width={375}
            height={520}
            layout="responsive"
          />
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
            <h2 className="font-bold text-3xl text-center text-secondary py-1.5">{current.name}</h2>
            {current.managers.map((manager, i) => (
              <h4 key={i.toString()} className="font-bold text-base text-center text-black">
                {`${manager.class}・${manager.name}`}
              </h4>
            ))}
            <div className="flex flex-col space-y-7 mt-4 bg-white w-11/12 rounded-2xl mx-auto px-5 pt-7 pb-12">
              {current.qAndA.map((v, i) => (
                <QAndA
                  index={i + 1}
                  names={current.managers.map((v) => v.shortenedName || v.name)}
                  question={v.question}
                  answers={v.answers}
                  key={i.toString()}
                />
              ))}
            </div>
            <div className="text-center text-black font-bold mt-6">
              <Link href={"/departments"}>一覧へ</Link>
            </div>
            <div className="w-5/6 mx-auto mt-6">
              <LinkButton href="#">部署配属希望フォームはコチラ</LinkButton>
            </div>
          </div>
        </div>
      </article>
      {/* TODO: スクロールでfade-out */}
      <div className="fixed w-full bottom-4 z-20">
        <div className="w-5/6 mx-auto">
          <TekibusyoLink />
        </div>
      </div>
    </Layout>
  );
};

export default DepartmentId;
