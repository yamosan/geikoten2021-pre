import FirstView from "components/parts/FirstView";
import Section from "components/Section";
import type { NextPage } from "next";

const Movie: NextPage = () => (
  <>
    <FirstView index="03" title="ムービー" src="/img/contents/movie/hero.png" />
    <div className="w-5/6 mx-auto pb-20">
      <p className="text-black text-sm font-medium leading-6 pt-6">
        映像部署が制作したムービーです。
        <br />
        <span className="highlight">見なきゃ損！</span>
      </p>
      <Section heading="コンセプトムービー" className="pt-8">
        <div className="w-full h-44 bg-gray"></div>
      </Section>
      <Section heading="部署長紹介" className="pt-16">
        <div className="w-full h-44 bg-gray"></div>
      </Section>
    </div>
  </>
);

export default Movie;
