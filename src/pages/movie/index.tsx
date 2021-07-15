import FirstView from "components/parts/FirstView";
import Section from "components/Section";
import { CONCEPT_MOVIE, DEPARTMENTS_MOVIE } from "constants/urls";
import type { NextPage } from "next";

const Movie: NextPage = () => {
  return (
    <>
      <FirstView index="03" title="ムービー" src="/img/contents/movie/hero.png" />
      <div className="w-5/6 mx-auto pb-20">
        <p className="text-black text-sm font-medium leading-6 pt-6">
          映像部署が制作したムービーです。
          <br />
          <span className="highlight">見なきゃ損！</span>
        </p>
        <Section heading="コンセプトムービー" className="pt-8">
          <div className="bg-gray w-full relative" style={{ paddingTop: `${(9 / 16) * 100}%` }}>
            <iframe
              src={CONCEPT_MOVIE}
              title="concept_movie"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 m-0 w-full h-full"
            />
          </div>
        </Section>
        <Section heading="部署長紹介" className="pt-16">
          <div className="bg-gray w-full relative" style={{ paddingTop: `${(9 / 16) * 100}%` }}>
            <iframe
              src={DEPARTMENTS_MOVIE}
              title="concept_movie"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-0 left-0 m-0 w-full h-full"
            />
          </div>
        </Section>
      </div>
    </>
  );
};

export default Movie;
