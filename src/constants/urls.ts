// TODO: styles/global.css とまとめて解決したい
const BASE_PATH = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_PATH || "" : "";

// SNS urls
export const LINE_URL = "https://lin.ee/r9XIORr";
export const LINE_ICON_URL = "https://scdn.line-apps.com/n/line_add_friends/btn/ja.png";
export const TWITTER_URL = "https://twitter.com/geik0";
export const INSTAGRAM_URL = "https://instagram.com/geikoten2021";

// 芸工祭プレサイト
export const SITE_DOMAIN = "http://geikousai-ncu.com";

// コンテンツ urls
export const TEKIBUSYO_CHART_URL = `${SITE_DOMAIN}${BASE_PATH}/chart/index.html`;
export const GAME_URL = `${SITE_DOMAIN}${BASE_PATH}/game/index.html`;

// 部署配属希望フォーム
export const BUSYO_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScOQvRlDz9_fdiRfGxOH2NlXdHDi1POUw7krV6Cy7cVXO5HFA/viewform";

// ムービー
export const CONCEPT_MOVIE = "https://www.youtube.com/embed/w-tGNmUipk0";
export const DEPARTMENTS_MOVIE = "https://www.youtube.com/embed/whpFjeH0ZqU";
