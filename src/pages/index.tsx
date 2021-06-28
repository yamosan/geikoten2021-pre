import type { NextPage } from "next";
import Layout from "components/layouts";

// const titles = ["部署紹介", "部署ブログ", "ムービー", "ゲーム"];

// const departmentList = [
//   { department: "芸工祭長", manager: "3O・脛骨" },
//   { department: "芸工祭長", manager: "3O・脛骨" },
//   { department: "芸工祭長", manager: "3O・脛骨" },
//   { department: "芸工祭長", manager: "3O・脛骨" },
//   { department: "芸工祭長", manager: "3O・脛骨" },
//   { department: "芸工祭長", manager: "3O・脛骨" },
//   { department: "芸工祭長", manager: "3O・脛骨" },
// ];

// const qAndA = {
//   question: "どんなお仕事してますか？",
//   answers: [
//     {
//       content: "椅子に座って偉そうに皆に指示をしているよ！",
//     },
//     {
//       content:
//         "もちろん！先輩達と仲良くなれたり、一丸となって一つのものをつくり上げるからその時の達成感は一生の思い出になること間違いなし！！",
//       highlight: ["思い出になる"],
//     },
//   ],
// };

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="w-5/6 mx-auto">
      {/* <div className="h-10"></div>

      <TekibusyoLink />
      <div className="h-10"></div>

      <QAndAPageLink /> */}

      {/* <div className="flex flex-col gap-12">
        <QAndA index={1} {...qAndA} />
      </div> */}

      {/* <div className="w-5/6 mx-auto">
        <Heading>幹部</Heading>
      </div> */}
      {/* <FirstView index="01" title="部署紹介" /> */}

      {/* <section>
        <News text="『部署配属希望』受付開始！〆切は7/7まで" date="2021.6.30" />
      </section>
      <div className="w-full h-5"></div>
      <section className="flex flex-col items-center bg-white p-5">
        <h3 className="text-black text-xs mb-5">＼ おすすめコンテンツ ／</h3>
        <CardList titles={titles} />
      </section> */}
    </div>
  </Layout>
);

export default IndexPage;
