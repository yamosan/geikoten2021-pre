import type { Department } from "models/department";

// 幹部 --------------------------------------------------------
export const LEADERS: Department[] = [
  {
    id: 1,
    name: "芸工祭長",
    manager: {
      name: "脛骨",
      class: "3O",
    },
    qAndA: [
      {
        content: "どんなお仕事してますか？",
        isAnswer: false,
      },
      {
        content: "椅子に座って偉そうに皆に指示をしているよ！",
        isAnswer: true,
      },
      {
        content: "芸工ネームの由来は？",
        isAnswer: false,
      },
      {
        content: "足フェチに骨の芸工ネームを受け継いで足の骨の名前→脛骨（けいこつ）！",
        isAnswer: true,
      },
      {
        content: "部署って入った方がいいの？",
        isAnswer: false,
      },
      {
        content:
          "もちろん！先輩達と仲良くなれたり、一丸となって一つのものをつくり上げるからその時の達成感は一生の思い出になること間違いなし！",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "フラッッッッシュ！！！🔥🔥🔥🔥",
        isAnswer: true,
      },
    ],
  },
  {
    id: 2,
    name: "副祭長",
    manager: {
      name: "はんぶんこ",
      class: "3O",
    },
    qAndA: [
      {
        content: "どんなお仕事してますか？",
        isAnswer: false,
      },
      {
        content: "芸工祭で必要な事務的なことを広くやってます！祭長を支えてます！",
        isAnswer: true,
      },
      {
        content: "芸工ネームの由来は？",
        isAnswer: false,
      },
      {
        content: "２つ上の先輩のギャグからつけられました",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "最高の芸工祭になるように頑張ります！📷",
        isAnswer: true,
      },
    ],
  },
  {
    id: 3,
    name: "会計",
    manager: {
      name: "グリマネ",
      class: "3O",
    },
    qAndA: [
      {
        content: "どんなお仕事してますか？",
        isAnswer: false,
      },
      {
        content: "芸工祭に関わるお金の管理をしています！予算を組んだり、芸工祭で使われたお金の決算を行います！",
        isAnswer: true,
      },
      {
        content: "芸工ネームの由来は？",
        isAnswer: false,
      },
      {
        content: "手首フェチ＋元水泳部マネージャーでグリップマネージャーです（笑）グリマネって呼んでね",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "みんなで最高の芸工祭をつくろう〜〜！！！！",
        isAnswer: true,
      },
    ],
  },
  {
    id: 4,
    name: "書記",
    manager: {
      name: "サブリナ",
      class: "3N",
    },
    qAndA: [
      {
        content: "どんなお仕事してますか？",
        isAnswer: false,
      },
      {
        content: "芸工祭の会議で議事録をとっています！",
        isAnswer: true,
      },
      {
        content: "芸工ネームの由来は？",
        isAnswer: false,
      },
      {
        content: "家入レオさんが好きなので、そのデビュー曲からつけてもらいました！",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "みんなで芸工祭を盛り上げよう！！！",
        isAnswer: true,
      },
    ],
  },
  {
    id: 5,
    name: "総務",
    manager: {
      name: "シャウエッセン",
      class: "3M",
    },
    qAndA: [
      {
        content: "どんなお仕事してますか？",
        isAnswer: false,
      },
      {
        content: "芸工祭に使うお金を集めてくるお仕事をしてます。ステージにゲストを呼んだりもします。",
        isAnswer: true,
      },
      {
        content: "芸工ネームの由来は？",
        isAnswer: false,
      },
      {
        content: "当時使ってたシャンプーがエッセンシャルだったから",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "ぱしゃり✨",
        isAnswer: true,
      },
    ],
  },
];

// 部署 --------------------------------------------------------
export const DEPARTMENTS: Department[] = [
  {
    id: 6,
    name: "Web",
    manager: {
      name: "212",
      class: "3M",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "Webサイトのデザイン・コーディングや2Dor3Dゲーム制作が出来るよ！VR/AR/インスタレーションの制作も出来るけどオンライン開催になった場合、展示が出来ないかも…！\n他にもプログラムを用いてやりたい事があればできる限りサポートするよ！",
        isAnswer: true,
      },
      {
        content: "デザイン班・コーディング班・コンテンツ班に分かれて活動するのでどれか一つだけの参加でもOK！！",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "部署配属後1ヶ月程勉強会を開くので初心者でも大丈夫！1から教えるのでどの学年・学科からでも大歓迎！",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content:
          "対面開催でもオンライン開催でも勉強会や進捗報告会等は各班週1回ほどのペースで行う予定！それぞれが持って帰って行う作業もあるよ！",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content:
          "対面開催でもオンライン開催でも当日の仕事はほとんどない！対面開催の時だけコンテンツ班はちょっとあるかも…！直前の制作期間が一番忙しい！達成感はめちゃんこあるよ！",
        isAnswer: true,
      },
      {
        content: "まあ正直予定通りコツコツやれば問題ないよ！コツコツやれば問題ないよ…！！！",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content:
          "みんなで協力して作品を作ります！途中で投げ出したり締切を破ったりする事の無い責任感のある子に入ってきて欲しい！",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content:
          "技術的な面の大きい部署だけど分からない事・出来ない事があれば3年生が絶対に助けます！安心して入ってきてね！！",
        isAnswer: true,
      },
    ],
  },
  // ここまでOK --------------------------------------------------------
  {
    id: 7,
    name: "映像",
    manager: {
      name: "風月課長",
      class: "3M",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 8,
    name: "グラフィック",
    manager: {
      name: "ラブマシーン",
      class: "3M",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 9,
    name: "PA",
    manager: {
      name: "ベニ",
      class: "3M",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 10,
    name: "昼ステ",
    manager: {
      name: "おだんござむらい",
      class: "3O",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 11,
    name: "夜ステ",
    manager: {
      name: "マチュピチュ",
      class: "3N",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 12,
    name: "ワークショップ",
    manager: {
      name: "スイレン",
      class: "3M",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 13,
    name: "ディレクション",
    manager: {
      name: "みるみる",
      class: "3N",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 14,
    name: "インテリア",
    manager: {
      name: "ロック・リー",
      class: "3O",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 15,
    name: "エクステリア",
    manager: {
      name: "タピオカ",
      class: "3O",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 16,
    name: "ブース",
    manager: {
      name: "エマ",
      class: "3N",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 17,
    name: "カフェ",
    manager: {
      name: "エイミー",
      class: "3O",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 18,
    name: "バー",
    manager: {
      name: "バサロ",
      class: "3N",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
  {
    id: 19,
    name: "運動家",
    manager: {
      name: "ラモス",
      class: "3O",
    },
    qAndA: [
      {
        content: "何をする部署ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "初心者でも大丈夫ですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "1週間にどのくらい活動がありますか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どの時期が一番忙しいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "どんな子に入ってきてほしいですか？",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
      {
        content: "芸工祭への意気込みをどうぞ！！！！！",
        isAnswer: false,
      },
      {
        content: "",
        isAnswer: true,
      },
    ],
  },
];

export default [...LEADERS, ...DEPARTMENTS];
