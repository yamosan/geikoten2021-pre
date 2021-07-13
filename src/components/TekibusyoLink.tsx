import React from "react";
import TekibusyoChartIcon from "components/parts/TekibusyoChartIcon";
import Arrow from "components/parts/Arrow";
import Link from "next/link";
import { TEKIBUSYO_CHART_URL } from "constants/urls";

const TekibusyoLink = () => {
  return (
    <Link href={TEKIBUSYO_CHART_URL}>
      <a className="relative flex items-center bg-white border-2 border-secondary rounded-md pl-12">
        <div className="absolute -top-4 -left-4">
          <TekibusyoChartIcon />
        </div>
        {/* TODO: font-sizeをtailwindで指定したい */}
        <p
          className="w-max flex flex-col mx-auto font-bold text-xs text-secondary text-left py-2.5"
          style={{ fontSize: "min(0.75rem, 3vw)" }}
        >
          どの部署に入ろうか悩んでいる人は、<span className="inline-block">適部署チャートで診断してみよう！</span>
        </p>
        <div className="mr-2">
          <Arrow color="primary" size="large" />
        </div>
      </a>
    </Link>
  );
};

export default TekibusyoLink;
