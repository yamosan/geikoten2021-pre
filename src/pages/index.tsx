import type { NextPage } from "next";
import Image from "components/parts/Image";
import SnsLinks from "components/SnsLinks";
import News from "components/News";
import ContentsNav from "components/ContentsNav";
import Div100vh from "react-div-100vh";
import FadeInWhenVisible from "components/parts/FadeInWhenVisible";
import ImageSlider from "components/ImageSlider";

const IndexPage: NextPage = () => (
  <>
    <section className="overflow-hidden">
      <Div100vh className="relative">
        <ImageSlider />

        {/* TODO: フレーム */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/img/logo.png" alt="芸工展ロゴ" width={187} height={192} />
        </div>

        <div className="absolute bottom-0 h-6 w-full bg-bg">
          <div className="relative">
            <div className="absolute w-full h-6 bg-bg transform -skew-y-2 -translate-y-3"></div>
          </div>
        </div>
      </Div100vh>
    </section>

    <section>
      <News text="『部署配属希望』受付開始！〆切は7/7まで" date="2021.6.30" />
    </section>

    <section className="flex flex-col items-center bg-white p-5 mt-5">
      <h3 className="font-bold text-black text-xs mb-5">＼ おすすめコンテンツ ／</h3>
      <ContentsNav />
    </section>

    <section className="mt-16 flex flex-col items-center">
      <FadeInWhenVisible>
        <h2 className="font-genuine text-primary tracking-wider text-5xl text-center">ABOUT</h2>
        <h4 className="font-bold text-black text-xs text-center -mt-1">芸工展とは？</h4>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <p className="w-10/12 font-medium text-black text-sm text-center leading-7 mx-auto pt-5">
          芸工生が力を尽くして生み出した作品、見て思わず笑ってしまうステージ企画、オンラインだからこそ味わえるCGの世界など見どころ満載です！
          <span className="inline-block highlight">芸工生全員で作る一つの作品</span>で、 <br />
          コロナの時期だからこそ自分達の能力を
          <br />
          存分に活かして出来る芸工展です！
          <br />
          みんなで盛り上げよう！
        </p>
      </FadeInWhenVisible>
    </section>

    <section className="my-16 flex flex-col items-center">
      <FadeInWhenVisible>
        <h2 className="font-genuine text-primary tracking-wider text-5xl text-center">THEME</h2>
        <h4 className="font-bold text-black text-xs text-center -mt-1">今年のテーマ</h4>
      </FadeInWhenVisible>
      <div className="w-full py-4">
        <Image src="/img/theme.png" alt="今年のテーマ" layout="responsive" width={378} height={188} />
      </div>
      <div className="w-10/12 font-medium text-black text-sm text-center leading-7">
        <FadeInWhenVisible>
          <p className="font-medium pt-4">
            今年の芸工展のテーマにはカメラのフラッシュ機能に擬えて、芸工展を大学生の一つの大きな思い出としてフラッシュを焚いて、一人一人の人生に保存してほしいという思いを込めました。
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p className="font-medium pt-8">
            また、「FUllUSH」には「輝く、駆け抜ける」という意味の「FLASH」や、「元気のある様」という意味の「FULL
            FLUSH」という言葉も含まれています。芸工生の皆、大学生らしく元気に駆け抜けて行こう！
          </p>
        </FadeInWhenVisible>
      </div>
    </section>

    <SnsLinks />
  </>
);
export default IndexPage;
