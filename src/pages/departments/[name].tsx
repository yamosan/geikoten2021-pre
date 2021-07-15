import Image from "components/parts/Image";
import Link from "next/link";
import { getDepartments } from "utils/departments";
import QAndA from "components/QAndA";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Department } from "models/department";
import LinkButton from "components/parts/LinkButton";
import TekibusyoLink from "components/TekibusyoLink";
import Paginator from "components/Paginator";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { BUSYO_FORM } from "constants/urls";
import { use100vh } from "react-div-100vh";

type Props = {
  items: Department[];
  id: number;
};

type Direction = -1 | 0 | 1;

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getDepartments();
  const paths = items.map((item) => ({
    params: { name: item.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const items = await getDepartments();
  const id = items.find((v) => v.name === params?.name).id;
  return { props: { items, id } };
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 2000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const DepartmentId: NextPage<Props> = (props) => {
  const router = useRouter();
  const departments = props.items;
  const [[page, direction], setPage] = useState([props.id - 1, 0]); // TODO: idと配列のずれを無視している為、危険
  const screenHeight = use100vh();

  const getNextPage = useCallback(
    (current, direction) => {
      const offset = (current + direction) % departments.length;
      return offset >= 0 ? offset : departments.length + offset;
    },
    [departments]
  );

  const paginate = useCallback(
    (newDirection: Direction) => {
      const nextPage = getNextPage(page, newDirection);
      setPage([nextPage, newDirection]);
      router.push(`/departments/${departments[nextPage].name}`, undefined, { scroll: false });
    },
    [departments, page, router, getNextPage]
  );

  // 前後のページをプリフェッチ
  useEffect(() => {
    router.prefetch(`/departments/${departments[getNextPage(page, -1)].name}`);
    router.prefetch(`/departments/${departments[getNextPage(page, 1)].name}`);
  }, [departments, page, router, getNextPage]);

  const current = departments[page];
  return (
    <>
      <article className="w-screen relative">
        {/* gallery */}
        <div className="relative overflow-hidden select-none" style={{ height: screenHeight * 0.6 }}>
          <Image src={`/img/contents/departments/q_and_a_bg.png`} alt="背景" layout="fill" objectFit="cover" />
          {/* ヘッダーの高さ分引いたコンテナ */}
          <div className="h-full pt-16 pb-4 z-10">
            <div className="relative h-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`image_${page}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0"
                >
                  <div className="h-full transform rotate-6">
                    <Image
                      src={`/img/contents/departments/${current.name}/main.jpg`}
                      alt={current.name}
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* ページインジケータ */}
          <div className="z-10 absolute top-1/2 left-0 w-full">
            <Paginator onNextClick={() => paginate(1)} onPrevClick={() => paginate(-1)} />
          </div>
        </div>

        <div className="relative w-full z-20 -mt-5">
          <div
            className="w-full pt-6 pb-20 rounded-3xl bg-bg"
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            <AnimatePresence>
              <motion.div key={`chat_${page}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="font-bold text-3xl text-center text-secondary py-1.5">{current.displayName}</h2>
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
                      profileImage={`/img/contents/departments/${current.name}/mini.jpg`}
                      key={i.toString()}
                    />
                  ))}
                </div>
                <div className="text-center text-black font-bold mt-6">
                  <Link href={"/departments"}>一覧へ</Link>
                </div>
                <div className="w-5/6 mx-auto mt-6">
                  <LinkButton href={BUSYO_FORM}>部署配属希望フォームはコチラ</LinkButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="fixed w-full bottom-4 z-30">
          <div className="w-5/6 mx-auto">
            <TekibusyoLink />
          </div>
        </div>
      </article>
    </>
  );
};

export default DepartmentId;
