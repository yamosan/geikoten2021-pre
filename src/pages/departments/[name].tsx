import Image from "components/parts/Image";
import Link from "next/link";
import { getDepartments } from "utils/departments";
import QAndA from "components/QAndA";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { Department } from "models/department";
import LinkButton from "components/parts/LinkButton";
import TekibusyoLink from "components/TekibusyoLink";
import Paginator from "components/Paginator";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  items: Department[];
};

type Direction = -1 | 0 | 1;

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getDepartments();
  const paths = items.map((item) => ({
    params: { name: item.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const items = await getDepartments();
  return { props: { items } };
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

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const DepartmentId: NextPage<Props> = (props) => {
  const router = useRouter();
  const departments = props.items;
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: Direction) => {
      const offset = (page + newDirection) % departments.length;
      const nextPage = offset >= 0 ? offset : departments.length + offset;
      setPage([nextPage, newDirection]);
      router.push(`/departments/${departments[nextPage].name}`, undefined, { scroll: false });
    },
    [departments, page, router]
  );

  const current = departments[page];
  return (
    <>
      <article className="w-screen relative">
        {/* gallery */}
        <div className="relative overflow-hidden" style={{ height: "62vh" }}>
          <Image
            src={`/img/contents/departments/q_and_a_bg.png`}
            alt="背景"
            width={375}
            height={520}
            layout="responsive"
          />
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
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
              className="absolute top-0 left-0 right-0 bottom-0"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 transform rotate-6">
                  <Image
                    src={`/img/contents/departments/${current.name}/main.png`}
                    alt={current.name}
                    width={254}
                    height={382}
                    layout="fixed"
                    priority={true}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="z-10 absolute top-56 left-0 w-full">
            <Paginator onNextClick={() => paginate(1)} onPrevClick={() => paginate(-1)} />
          </div>
        </div>

        {/* TODO: ↓ずらしてスクロールできるようにする */}
        {/* fixedとmt-96 */}
        <div className="relative z-10 -mt-10">
          <div className="w-full pt-6 pb-20 rounded-3xl bg-bg">
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

        {/* TODO: スクロールでfade-out */}
        <div className="fixed w-full bottom-4 z-20">
          <div className="w-5/6 mx-auto">
            <TekibusyoLink />
          </div>
        </div>
      </article>
    </>
  );
};

export default DepartmentId;
