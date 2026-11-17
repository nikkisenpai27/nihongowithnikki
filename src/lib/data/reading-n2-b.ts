import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana loanwords, and 々 follow the same 漢字[かんじ] pattern used in
// the sibling reading-n2-a.ts file. See types.ts & furigana.tsx.
// 10 original N2-level reading passages (r-n2-11 .. r-n2-20) on contemporary
// social, political, and economic themes, each with 5 comprehension questions.

export const readingN2B: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n2-11 — The Japanese pension system
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-11",
    title: "年金[ねんきん]制度[せいど]の現状[げんじょう]と課題[かだい]",
    titleReading: "ねんきんせいどのげんじょうとかだい",
    level: "N2",
    summary: "A survey of Japan's public pension system: its postwar origins, the two-tier National Pension and Employees' Pension Insurance structure, demographic pressures, the 2004 macroeconomic-slide reform, young people's distrust, all-generation social security reform, and the sustainability challenge.",
    estMinutes: 10,
    tags: ["social security", "pension", "aging society", "policy"],
    body: [
      "日本[にほん]の公的[こうてき]年金[ねんきん]制度[せいど]は、1941年[ねん]に制定[せいてい]された労働者[ろうどうしゃ]年金[ねんきん]保険[ほけん]に始[はじ]まり、1961年[ねん]に国民[こくみん]年金[ねんきん]法[ほう]が全面[ぜんめん]施行[しこう]されたことで「国民[こくみん]皆[みな]年金[ねんきん]」体制[たいせい]が確立[かくりつ]した。この制度[せいど]は、すべての国民[こくみん]が老後[ろうご]の所得[しょとく]を確保[かくほ]できるよう設計[せっけい]された画期的[かっきてき]な仕組[しく]みであり、戦後[せんご]の貧困[ひんこん]を脱[だっ]却[きゃく]する上[うえ]で不可欠[ふかつけつ]な役割[やくわり]を果[はた]した。以来[いらい]、年金[ねんきん]制度[せいど]は経済[けいざい]社会[しゃかい]の変容[へんよう]に伴[ともな]って何度[なんど]も改定[かいてい]を重[かさ]ね、現在[げんざい]に至[いた]るまで日本[にほん]の社会保障[しゃかいほしょう]の中核[ちゅうかく]であり続[つづ]けている。",
      "現行[げんこう]の年金[ねんきん]制度[せいど]は二[ふた]階[かい]建[だ]て構造[こうぞう]を成[な]している。一[いっ]階[かい]部分[ぶぶん]は20歳[さい]以上[いじょう]のすべての国民[こくみん]が加入[かにゅう]する国民[こくみん]年金[ねんきん]（基礎[きそ]年金[ねんきん]）であり、二[に]階[かい]部分[ぶぶん]は会社員[かいしゃいん]や公務員[こうむいん]が上乗[うわの]せして加入[かにゅう]する厚生[こうせい]年金[ねんきん]である。原則[げんそく]として25年[ねん]以上[いじょう]の加入[かにゅう]期間[きかん]を満[み]たすことで老齢[ろうれい]年金[ねんきん]が受給[じゅきゅう]できる仕組[しく]みだが、少子[しょうし]高齢化[こうれいか]の進展[しんてん]に伴[ともな]い、制度[せいど]の持続[じぞく]可能性[かのうせい]に深刻[しんこく]な懸念[けねん]が抱[いだ]かれるようになった。2017年[ねん]には短[みじか]期間[きかん]加入[かにゅう]者[しゃ]を保護[ほご]するため、受給[じゅきゅう]資格[しかく]期間[きかん]が10年[ねん]に短縮[たんしゅく]された。",
      "最大[さいだい]の課題[かだい]は、人口[じんこう]構造[こうぞう]の変化[へんか]である。2025年[ねん]には団塊[だんかい]の世代[せだい]がすべて後期[こうき]高齢者[こうれいしゃ]となり、現役[げんえき]世代[せだい]2.0人[にん]で高齢者[こうれいしゃ]1人[にん]を支[ささ]える「2025年[ねん]問題[もんだい]」が直面[ちょくめん]する。一方[いっぽう]で、出生[しゅっしょう]率[りつ]は長期[ちょうき]的[てき]に低[てい]水準[すいじゅん]が続[つづ]いており、2040年[ねん]には現役[げんえき]世代[せだい]1.5人[にん]で高齢者[こうれいしゃ]1人[にん]を支[ささ]える状況[じょうきょう]が予測[よそく]されている。現行[げんこう]制度[せいど]は現役[げんえき]世代[せだい]の保険[ほけん]料[りょう]で高齢者[こうれいしゃ]の年金[ねんきん]を賄[まかな]う賦課[ふか]方式[ほうしき]を前提[ぜんてい]としているため、人口[じんこう]動態[どうたい]の変化[へんか]は制度[せいど]の根幹[こんかん]を揺[ゆ]るがす脅威[きょうい]となる。",
      "この危機[きき]に対[たい]し、2004年[ねん]の改革[かいかく]で年金[ねんきん]額[がく]を自動的[じどうてき]に調整[ちょうせい]する「マクロ経済[けいざい]スライド」という仕組[しく]みが導入[どうにゅう]された。これは物価[ぶっか]変動[へんどう]や人口[じんこう]減少[げんしょう]を反映[はんえい]し、給付[きゅうふ]水準[すいじゅん]を段階[だんかい]的[てき]に引[ひ]き下[さ]げることで制度[せいど]の持続[じぞく]性[せい]を確保[かくほ]する仕組[しく]みである。同時[どうじ]に、保険[ほけん]料[りょう]水準[すいじゅん]は18.3%に固定[こてい]され、それ以上[いじょう]引[ひ]き上[あ]げないことが決定[けってい]された。しかし、マクロ経済[けいざい]スライドは完全[かんぜん]に機能[きのう]しておらず、経済[けいざい]低迷[ていめい]時[じ]には給付[きゅうふ]の実質[じっしつ]価値[かち]が目[め]に見[み]えて目減[めべ]りするため、受給[じゅきゅう]者[しゃ]の生活[せいかつ]を圧迫[あっぱく]する結果[けっか]を招[まね]いている。",
      "若者[わかもの]の年金[ねんきん]制度[せいど]に対[たい]する不信[ふしん]感[かん]も深刻[しんこく]である。「将来[しょうらい]自分[じぶん]たちが年金[ねんきん]を受給[じゅきゅう]できるか分[わ]からないのに、なぜ保険[ほけん]料[りょう]を納[おさ]めなければならないのか」という疑問[ぎもん]が広[ひろ]まっている。実際[じっさい]、未納[みのう]者[しゃ]は年々[ねんねん]増加[ぞうか]傾向[けいこう]にあり、学生[がくせい]や非正規[ひせいき]雇用[こよう]者[しゃ]の加入[かにゅう]率[りつ]は低位[ていい]で推移[すいい]している。このまま不信[ふしん]感[かん]が広[ひろ]がれば、制度[せいど]の財政[ざいせい]基盤[きばん]がさらに弱体[じゃくたい]化[か]する悪循環[あくじゅんかん]に陥[おちい]りかねない。若者[わかもの]の信頼[しんらい]を取[と]り戻[もど]すことは喫緊[きゅうきん]の課題[かだい]である。",
      "2018年[ねん]には「全世代[ぜんせだい]社会保障[しゃかいほしょう]改革[かいかく]」が提唱[ていしょう]され、年金[ねんきん]を含[ふく]む社会保障[しゃかいほしょう]制度[せいど]を抜本的[ばっぽんてき]に見直[みなお]す動[うご]きが加速[かそく]した。その核心[かくしん]は、高齢者[こうれいしゃ]偏重[へんちょう]の現行[げんこう]制度[せいど]から、現役[げんえき]世代[せだい]や子[こ]どもにも手[て]を届[とど]ける制度[せいど]への転換[てんかん]にある。具体的[ぐたいてき]には、基礎[きそ]年金[ねんきん]の最低[さいてい]保障[ほしょう]額[がく]の引[ひ]き上[あ]げや、専業[せんぎょう]主婦[しゅふ]制度[せいど]の見直[みなお]しが議論[ぎろん]されている。しかし、改革[かいかく]は既得[きとく]権益[けんえき]の抵抗[ていこう]を受[う]け、政治的[せいじてき]合意[ごうい]形成[けいせい]は難航[なんこう]を極[きわ]めている。",
      "年金[ねんきん]制度[せいど]の持続[じぞく]可能性[かのうせい]を確保[かくほ]するには、給付[きゅうふ]と負担[ふたん]の適正[てきせい]な均衡[きんこう]を図[はか]るだけでなく、経済[けいざい]成長[せいちょう]による税[ぜい]収[しゅう]拡大[かくだい]も不可欠[ふかつけつ]である。また、個人[こじん]的[てき]な資産[しさん]形成[せいちょく]（iDeCoや確定[かくてい]拠出[きょしゅつ]年金[ねんきん]）の充実[じゅうじつ]により、公的[こうてき]年金[ねんきん]への過度[かど]な依存[いぞん]を緩[やわ]らげる必要[ひつよう]もある。結論[けつろん]として、年金[ねんきん]問題[もんだい]は単[たん]なる財政[ざいせい]問題[もんだい]ではなく、世代[せだい]間[かん]の連帯[れんたい]と信頼[しんらい]を問[と]う社会[しゃかい]全体[ぜんたい]の課題[かだい]である。制度[せいど]の改革[かいかく]を先送[さきおく]りすればするほど、次[つぎ]の世代[せだい]への負担[ふたん]は増大[ぞうだい]する。今[いま]こそ、決断[けつだん]が求[もと]められている。"
    ],
    translation: [
      "Japan's public pension system began with the Employees' Pension Insurance enacted in 1941, and with the full enforcement of the National Pension Act in 1961, the framework of \"pensions for all citizens\" was established. This system, designed so that all citizens could secure income in old age, was a groundbreaking arrangement and played an indispensable role in lifting the country out of postwar poverty. Since then, the pension system has undergone repeated revisions in step with changes in the economy and society, and to this day it has remained the core of Japan's social security.",
      "The current pension system has a two-tiered structure. The first tier is the National Pension (basic pension), in which all citizens aged 20 and over enroll, and the second tier is the Employees' Pension Insurance, which salaried workers and civil servants enroll in additionally. As a general rule, those who meet a contribution period of 25 years or more can receive old-age pension benefits. However, with the progress of the declining birthrate and aging population, serious concerns have been raised about the sustainability of the system. In 2017, the eligibility period for benefits was shortened to 10 years to protect short-period contributors.",
      "The greatest challenge is the change in the population structure. By 2025, all of the baby-boomer generation will have become late-stage elderly, confronting the \"2025 problem,\" in which 2.0 working-age people will support one elderly person. Meanwhile, the birthrate has remained at a chronically low level, and it is projected that by 2040, 1.5 working-age people will support one elderly person. Because the current system is based on a pay-as-you-go method in which the working generation's premiums cover the elderly's pensions, demographic shifts pose a threat that shakes the very foundation of the system.",
      "In response to this crisis, the 2004 reform introduced a mechanism called the \"macroeconomic slide,\" which automatically adjusts pension amounts. This system reflects price changes and population decline, gradually lowering benefit levels to ensure the sustainability of the system. At the same time, the premium level was fixed at 18.3%, and a decision was made not to raise it further. However, the macroeconomic slide has not been functioning fully, and during economic downturns the real value of benefits visibly shrinks, leading to results that squeeze recipients' livelihoods.",
      "Young people's distrust of the pension system is also serious. The question \"When it is unclear whether we will be able to receive pensions in the future, why must we pay premiums?\" has spread. In fact, the number of non-payers has been increasing year by year, and enrollment rates among students and non-regular workers remain low. If distrust continues to spread, the system could fall into a vicious cycle in which its fiscal foundation is further weakened. Restoring young people's trust is an urgent task.",
      "In 2018, \"all-generation social security reform\" was proposed, accelerating moves to fundamentally overhaul the social security system, including pensions. Its core lies in shifting from the current system, which is skewed toward the elderly, to one that also reaches the working generation and children. Specifically, raising the minimum guaranteed amount of the basic pension and reviewing the full-time homemaker system are being debated. However, the reform faces resistance from vested interests, and political consensus-building has been extremely difficult.",
      "To ensure the sustainability of the pension system, it is necessary not only to balance benefits and burdens appropriately but also to expand tax revenues through economic growth. It is also necessary to reduce excessive dependence on public pensions by enriching personal asset formation (iDeCo and defined-contribution pensions). In conclusion, the pension issue is not merely a fiscal problem but a society-wide issue that tests intergenerational solidarity and trust. The longer reform is postponed, the greater the burden placed on the next generation. Decisive action is required now."
    ],
    questions: [
      {
        q: "According to the passage, when was the \"pensions for all citizens\" framework established?",
        choices: ["1941, with the Employees' Pension Insurance", "1961, when the National Pension Act was fully enforced", "2004, with the macroeconomic slide reform", "2018, with all-generation social security reform"],
        answerIndex: 1,
        explanation: "The text states that in 1961 the National Pension Act was fully enforced (全面施行), establishing the 国民皆年金 framework."
      },
      {
        q: "What does the passage identify as the greatest challenge facing the pension system?",
        choices: ["Inflation in consumer prices", "Corruption among administrators", "The change in population structure", "Excessive benefits to the young"],
        answerIndex: 2,
        explanation: "The text names 人口構造の変化 (the change in population structure) as the 最大の課題, with demographic shifts threatening the system's foundation."
      },
      {
        q: "What did the 2004 reform introduce to ensure sustainability?",
        choices: ["A doubling of the premium rate", "The macroeconomic slide mechanism", "The abolition of the Employees' Pension", "A shift to a fully funded system"],
        answerIndex: 1,
        explanation: "The 2004 reform introduced the マクロ経済スライド, which adjusts benefits automatically to reflect prices and population decline."
      },
      {
        q: "How does the passage describe young people's attitude toward the pension system?",
        choices: ["Highly trusting and cooperative", "Indifferent because they expect nothing", "Distrustful, with rising non-payment", "Eager to pay more for larger benefits"],
        answerIndex: 2,
        explanation: "The text reports deepening 不信感, increasing 未納者 (non-payers), and low enrollment rates among students and non-regular workers."
      },
      {
        q: "Which N2 grammar point is used to convey \"in step with changes in the economy and society\"?",
        choices: ["〜に違いない", "〜に伴って (in step with / along with)", "〜どころか", "〜上で"],
        answerIndex: 1,
        explanation: "The phrase 経済社会の変容に伴って何度も改定を重ね uses 〜に伴って (along with / in step with)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-12 — Digital addiction
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-12",
    title: "デジタル[でじたる]依存[いぞん]症[しょう]の時代[じだい]",
    titleReading: "でじたるいぞんしょうのじだい",
    level: "N2",
    summary: "An analysis of digital addiction in the smartphone era: rising screen time, withdrawal-like symptoms, the toll on sleep and attention, the particular impact on youth, the attention-economy business model of IT firms, regulatory and detox responses, and the civilizational question of mastering technology.",
    estMinutes: 9,
    tags: ["technology", "mental health", "smartphone", "regulation"],
    body: [
      "現代[げんだい]社会[しゃかい]において、スマートフォンはもはや単[たん]なる通信[つうしん]端末[たんまつ]ではなく、生活[せいかつ]のあらゆる側面[そくめん]に浸透[しんとう]した不可欠[ふかつけつ]な道具[どうぐ]となった。総務省[そうむしょう]の調査[ちょうさ]によれば、日本人[にほんじん]のスマホ[すまほ]普及[ふきゅう]率[りつ]は2023年[ねん]時点[じてん]で90%を超[こ]え、一日[いちにち]の平均[へいきん]使用[しよう]時間[じかん]は3時間[じかん]を上回[うわまわ]る。若者[わかもの]に限[かぎ]れば、この数字[すうじ]はさらに跳[は]ね上[あ]がり、中には6時間[じかん]以上[いじょう]画面[がめん]を凝視[ぎょうし]するユーザー[ゆーざー]も少[すく]なくない。情報[じょうほう]の即時[そくじ]入手[にゅうしゅ]と常時[じょうじ]接続[せつぞく]が可能[かのう]になった反面[はんめん]、その便利[べんり]さの代償[だいしょう]として新[あたら]しい病[やまい]が忍[しの]び寄[よ]っている。",
      "「デジタル[でじたる]依存[いぞん]」という概念[がいねん]は、1990年代[ねんだい]後半[ごはん]にアメリカ[あめりか]の研究者[けんきゅうしゃ]が提唱[ていしょう]したが、当初[とうしょ]はインターネット[いんたーねっと]依存[いぞん]症[しょう]として論[ろん]じられた。しかし今日[きょう]では、ゲーム[げーむ]、SNS、動画[どうが]視聴[しちょう]、オンライン[おんらいん]ショッピング[しょっぴんぐ]など多[おお]岐[き]にわたる依存[いぞん]パターン[ぱたーん]が報告[ほうこく]されている。その特徴[とくちょう]は、強迫[きょうはく]的[てき]に画面[がめん]を確認[かくにん]してしまう、使用[しよう]を控[ひか]えようとしてもできない、使用[しよう]を中断[ちゅうだん]されると不機嫌[ふきげん]や不安[ふあん]を覚[おぼ]える、といった離脱[りだつ]症状[しょうじょう]に類似[るいじ]する反応[はんのう]が現[あらわ]れる点[てん]である。これらは薬物[やくぶつ]依存[いぞん]と神経[しんけい]学的[がくてき]に共通[きょうつう]する側面[そくめん]を持[も]つと指摘[してき]されている。",
      "最[もっと]も顕著[けんちょ]な影響[えいきょう]の一[ひと]つは睡眠[すいみん]である。就寝[しゅうしん]前[まえ]の画面[がめん]使用[しよう]はブルー[ぶるー]ライト[らいと]によるメラトニン[めらとにん]分泌[ぶんぴつ]抑制[よくせい]を引[ひ]き起[お]こし、入眠[にゅうみん]時間[じかん]の延長[えんちょう]と睡眠[すいみん]の質[しつ]低下[ていか]をもたらす。慢性的[まんせいてき]な睡眠[すいみん]不足[ぶそく]は、免疫力[めんえきりょく]低下[ていか]、肥満[ひまん]リスク上昇[じょうしょう]、さらにうつ病[びょう]の発症[はっしょう]率[りつ]上昇[じょうしょう]と直結[ちょっけつ]する。また、絶え間[たえま]ない通知[つうち]による注意[ちゅうい]散漫[さんまん]化[か]は、深[ふか]い集中[しゅうちゅう]を要[よう]する作業[さぎょう]の効率[こうりつ]を削[けず]り落[お]とす。一度[いちど]途切[とぎ]れた集中[しゅうちゅう]を取[と]り戻[もど]すには平均[へいきん]23分[ぷん]を要[よう]するという研究[けんきゅう]もあり、絶え間[たえま]ない通知[つうち]環境[かんきょう]下[か]での生産[せいさん]性[せい]損失[そんしつ]は深刻[しんこく]である。",
      "若者[わかもの]への影響[えいきょう]は一段[いちだん]と深刻[しんこく]である。学校[がっこう]現場[げんば]では「スマホ[すまほ]依存[いぞん]」による学力[がくりょく]低下[ていか]や対人[たいじん]関係[かんけい]の希薄[きはく]化[か]が報告[ほうこく]されている。SNS上[じょう]の「いいね」や閲覧[えつらん]数[すう]は、脳[のう]内[ない]の報酬[ほうしゅ]回路[かいろ]を刺激[しげき]し、ドーパミン[どーぱみん]を分泌[ぶんぴつ]させる。これが浅[あさ]い満足[まんぞく]感[かん]を繰[く]り返[かえ]すうちに、より深[ふか]い実[み]感[かん]を伴[ともな]う現実[げんじつ]体験[たいけん]への動機[どうき]を削[けず]ぎ落[お]とす。さらに、FOMO（見逃[みのが]し恐怖[きょうふ]）により、夜[よる]遅[おそ]くまで通知[つうち]を確認[かくにん]し続[つづ]ける学生[がくせい]も多い。ネットいじめが深刻化[しんこくか]する一方[いっぽう]で、子[こ]どもたちがスマホ[すまほ]を手[て]放[ばな]せないというジレンマ[じれんま]に陥[おちい]っている。",
      "この問題[もんだい]の背景[はいけい]には、IT企業[きぎょう]の「アテンション[あてんしょん]・エコノミー[えこのみー]」と呼[よ]ばれるビジネス[びじねす]モデル[もでる]がある。ユーザー[ゆーざー]の注目[ちゅうもく]を競[きそ]い合[あ]うこれらの企業[きぎょう]は、無限[むげん]スクロール[すくろーる]や自動[じどう]再生[さいせい]、パーソナライズ[ぱーそならいず]された推奨[すいしょう]機能[きのう]など、依存[いぞん]を促[うなが]す設計[せっけい]を意識[いしき]的[てき]に取[と]り入[い]れている。アルゴリズム[あるごりずむ]が最適化[さいてきか]するのはユーザー[ゆーざー]の幸福[こうふく]ではなく滞在[たいざい]時間[じかん]であり、この非対称[ひたいしょう]な構造[こうぞう]を放置[ほうち]すれば、社会的[しゃかいてき]な影響[えいきょう]は増幅[ぞうふく]するばかりである。",
      "解決[かいけつ]策[さく]として注目[ちゅうもく]されるのが「デジタル[でじたる]・デトックス[でとっくす]」である。一定[いってい]期間[きかん]デバイス[でばいす]を遮断[しゃだん]し、現実[げんじつ]の体験[たいけん]や人間[にんげん]関係[かんけい]に意識[いしき]を向[む]ける実践[じっせん]で、欧米[おうべい]ではリトリート[りとりーと]施設[しせつ]も増[ふ]えている。また、OSレベル[れべる]での使用[しよう]時間[じかん]制限[せいげん]機能[きのう]や、アプリ通知[つうち]の最適化[さいてきか]といった技術[ぎじゅつ]的[てき]対処[たいしょ]も進[すす]む。一方[いっぽう]、中国[ちゅうごく]のように未成年[みせいねん]のゲーム[げーむ]使用[しよう]時間[じかん]を法的[ほうてき]に制限[せいげん]する厳格[げんかく]な規制[きせい]の導入[どうにゅう]も論[ろん]じられている。日本[にほん]ではまだ自主[じしゅ]的[てき]対応[たいおう]が中心[ちゅうしん]だが、法規制[ほうきせい]の必要性[ひつようせい]も議論[ぎろん]され始[はじ]めている。",
      "結論[けつろん]として、テクノロジー[てくのろじー]自体[じたい]は善[ぜん]でも悪[あく]でもなく、使[つか]い手[て]の意識[いしき]次第[しだい]で両刃[りょうば]の剣[けん]となる。我々[われわれ]は技術[ぎじゅつ]を支配[しはい]するつもりで手[て]にしたはずが、いつの間[ま]にか支配[しはい]される側[がわ]に回[まわ]っているのではないか。デジタル[でじたる]依存[いぞん]という鏡[かがみ]は、現代[げんだい]人間[にんげん]の欲望[よくぼう]と脆弱[ぜいじゃく]さを浮[う]き彫[ぼ]りにしている。技術[ぎじゅつ]との健全[けんぜん]な距離[きょり]感[かん]を取[と]り戻[もど]すことは、単[たん]なる自己[じこ]管理[かんり]の問題[もんだい]を超[こ]え、現代[げんだい]社会[しゃかい]が直面[ちょくめん]する文明[ぶんめい]論的[ろんてき]な問[とい]なのである。画面[がめん]から目[め]を離[はな]し、もう一度[いちど]周囲[しゅうい]を見[み]渡[わた]すことから始[はじ]めたい。"
    ],
    translation: [
      "In modern society, the smartphone is no longer a mere communication terminal but an indispensable tool that has permeated every aspect of life. According to a Ministry of Internal Affairs survey, the smartphone penetration rate among Japanese exceeded 90% as of 2023, and average daily usage tops three hours. Among young people the figure jumps even higher, and not a few users stare at their screens for more than six hours a day. While instant access to information and constant connectivity have become possible, on the other hand a new illness has crept in as the price of that convenience.",
      "The concept of \"digital addiction\" was proposed by American researchers in the late 1990s, but it was initially discussed as internet addiction disorder. Today, however, diverse patterns of dependence are reported, spanning games, social media, video viewing, online shopping, and more. Its characteristic feature is the appearance of reactions resembling withdrawal symptoms: compulsively checking the screen, being unable to hold back usage even when trying, feeling irritable or anxious when use is interrupted. These are pointed out to share neurological aspects with substance addiction.",
      "One of the most striking effects is on sleep. Screen use before bedtime triggers suppression of melatonin secretion by blue light, leading to extended time to fall asleep and lower sleep quality. Chronic sleep deprivation is directly linked to lowered immunity, increased risk of obesity, and even higher rates of depression onset. Moreover, constant notifications lead to attention fragmentation, chipping away at the efficiency of work requiring deep concentration. One study reports that it takes an average of 23 minutes to regain concentration once broken, so the productivity loss in environments of constant notifications is serious.",
      "The impact on young people is even more serious. School frontlines report academic decline and the thinning of interpersonal relationships due to \"smartphone addiction.\" \"Likes\" and view counts on social media stimulate the brain's reward circuitry and release dopamine. As this shallow satisfaction repeats, it erodes the motivation for deeper, more vivid real experiences. Moreover, driven by FOMO (Fear of Missing Out), many students keep checking notifications late into the night. While online bullying intensifies, children are caught in a dilemma in which they cannot let go of their phones.",
      "Behind this problem lies the business model called the \"attention economy\" of IT companies. These companies, competing for user attention, deliberately incorporate dependency-inducing designs such as infinite scroll, autoplay, and personalized recommendation functions. What algorithms optimize is not user well-being but time-on-platform; if this asymmetric structure is left unaddressed, the social impact will only amplify.",
      "As a solution, attention is being drawn to the \"digital detox.\" A practice of cutting off devices for a fixed period and directing attention to real experiences and relationships, retreat facilities have also grown in Europe and America. Technical countermeasures are also advancing, such as OS-level usage time limit functions and optimization of app notifications. Meanwhile, the introduction of strict regulations legally limiting minors' gaming time, as in China, is also being debated. In Japan, voluntary measures are still central, but the need for legal regulation has begun to be discussed.",
      "In conclusion, technology itself is neither good nor evil; depending on the user's awareness, it becomes a double-edged sword. We took it in hand intending to master it, but before long we may have shifted to the side being mastered. The mirror of digital addiction exposes the desires and fragility of modern humanity. Restoring a healthy sense of distance from technology goes beyond mere self-management; it is a civilizational question that modern society confronts. We wish to begin by lifting our eyes from the screen and looking around once more."
    ],
    questions: [
      {
        q: "According to the survey cited in the passage, what is the smartphone penetration rate among Japanese as of 2023?",
        choices: ["About 50%", "About 70%", "Over 90%", "Exactly 100%"],
        answerIndex: 2,
        explanation: "The text states 普及率は2023年時点で90%を超え — over 90% as of 2023."
      },
      {
        q: "What does the passage describe as a characteristic reaction resembling withdrawal symptoms in digital addiction?",
        choices: ["Feeling calm when away from the device", "Compulsively checking the screen and feeling anxious when interrupted", "Sleeping longer than usual", "Eating more vegetables"],
        answerIndex: 1,
        explanation: "The text lists 強迫的に画面を確認してしまう and 中断されると不機嫌や不安を覚える as reactions resembling 離脱症状."
      },
      {
        q: "According to the passage, how long does it take to regain concentration once it is interrupted?",
        choices: ["About 23 seconds", "About 23 minutes on average", "About 2 hours", "It never returns"],
        answerIndex: 1,
        explanation: "The passage cites research showing that 平均23分を要する to regain concentration once broken."
      },
      {
        q: "What does the passage identify as the core business model driving the design of dependency-inducing apps?",
        choices: ["The subscription model", "The attention economy", "The freemium model", "The hardware model"],
        answerIndex: 1,
        explanation: "The text names the アテンション・エコノミー as the business model in which companies compete for user attention."
      },
      {
        q: "The sentence \"depending on the user's awareness, it becomes a double-edged sword\" uses which N2 pattern?",
        choices: ["〜限り", "〜次第で (depending on)", "〜に伴って", "〜どころか"],
        answerIndex: 1,
        explanation: "使い手の意識次第で両刃の剣となる uses 〜次第で, meaning \"depending on.\""
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-13 — Gender equality
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-13",
    title: "性別[せいべつ]格差[かくさ]の克服[こくふく]に向[む]けて",
    titleReading: "せいべつかくさのこくふくにむけて",
    level: "N2",
    summary: "An examination of Japan's gender gap: its low WEF Gender Gap Index ranking, postwar legal milestones, the Abe-era Womenomics and the missed 30% leadership target, structural barriers in corporate culture, the low male childcare-leave rate, the 2022 legal reforms, and the path to substantive equality.",
    estMinutes: 10,
    tags: ["gender", "workplace", "Womenomics", "social reform"],
    body: [
      "世界[せかい]経済[けいざい]フォーラム[ふぉーらむ]が公表[こうひょう]する「ジェンダー[じぇんだー]・ギャップ[ぎゃっぷ]指数[しすう]」2023年版[ねんばん]において、日本[にほん]は146か国[かこく]中[ちゅう]118位[い]という低迷[ていめい]した順位[じゅんい]を記録[きろく]した。政治[せいじ]分野[ぶんや]や経済[けいざい]進出[しんしゅつ]の指標[しひょう]が際立[はだた]って低[ひく]く、とりわけ国会[こっかい]議員[ぎいん]に占[し]める女性[じょせい]の割合[わりあい]は10%に満[み]たない。この数字[すうじ]は先進[せんしん]国[こく]の中[なか]で最悪[さいあく]水準[すいじゅん]であり、国際社会[こくさいしゃかい]から再三[さいさん]改善[かいぜん]を促[うなが]す勧告[かんこく]を受[う]けている。もはや日本[にほん]は、ジェンダー[じぇんだー]平等[びょうどう]に関[かん]する国際的[こくさいてき]な課題[かだい]国[こく]と見[み]なされているのが現実[げんじつ]である。",
      "歴史[れきし]的に見[み]れば、日本[にほん]の法[ほう]体制[たいせい]は比較[ひかく]的[てき]早[はや]くから女性[じょせい]の権利[けんり]を明文化[めいぶんか]してきた。1947年[ねん]施行[しこう]の日本国[にほんこく]憲法[けんぽう]は第14条[じょう]で「性別[せいべつ]による差別[さべつ]」を禁[きん]じ、同年[どうねん]の民法[みんぽう]改正[かいせい]で家[か]制度[せいど]が廃止[はいし]された。しかし、法[ほう]の理念[りねん]と社会[しゃかい]の実態[じったい]の乖離[かいり]は長期[ちょうき]にわたり解消[かいしょう]されなかった。1985年[ねん]に「雇用[こよう]の分野[ぶんや]における男女[だんじょ]均等[きんこう]機会[きかい]の確保[かくほ]等[とう]に関する[かんする]法律[ほうりつ]」（男女[だんじょ]雇用[こよう]機会[きかい]均等[きんこう]法[ほう]）が制定[せいてい]されたものの、「男[おとこ]は仕事[しごと]、女[おんな]は家庭[かてい]」という性別[せいべつ]役割[やくわり]分業[ぶんぎょう]意識[いしき]は根強[ねづよ]く残[のこ]り続[つづ]けた。",
      "2013年[ねん]、第二[だいに]次[じ]安倍[あべ]政権[せいけん]は「女性[じょせい]が輝[かがや]く日本[にほん]」を掲[かか]げ、いわゆる「ウーマノミクス[うーまのみくす]」を推進[すいしん]した。その目玉[めだま]政策[せいさく]は、2020年[ねん]までに指導[しどう]的地位[ちい]に占[し]める女性[じょせい]の割合[わりあい]を30%にするという目標[もくひょう]であった。しかし、達成[たっせい]期限[きげん]を迎[むか]えた現在[げんざい]も、その達成[たっせい]率[りつ]は企業[きぎょう]の課長[かちょう]級[きゅう]で13%、管理[かんり]職[しょく]全体[ぜんたい]でも約[やく]12%にとどまる。目標[もくひょう]が政策[せいさく]として機能[きのう]しなかった背景[はいけい]には、企業[きぎょう]側[がわ]の意識[いしき]改革[かいかく]の遅[おく]れと、数値[すうち]目標[もくひょう]を逃[のが]れの口実[こうじつ]にする企業[きぎょう]の体質[たいしつ]が指摘[してき]されている。",
      "企業[きぎょう]文化[ぶんか]の変革[へんかく]が進[すす]まない理由[りゆう]は多[おお]岐[き]にわたる。第一[だいいち]に、長時間[ちょうじかん]労働[ろうどう]を美徳[びとく]とする企業[きぎょう]文化[ぶんか]が、家事[かじ]・育児[いくじ]を担[にな]う女性[じょせい]のキャリア[きゃりあ]形成[けいせい]を阻害[そがい]する。第二[だいに]に、いわゆる「マタハラ[またはら]」（マタニティ[まにてぃ]・ハラスメント[はらすめんと]）が依然[いぜん]として後[あと]を絶[た]たず、妊娠[にんしん]を機[き]に退職[たいしょく]を迫[せま]られる女性[じょせい]が多数[たすう]報告[ほうこく]されている。第三[だいさん]に、総合[そうごう]職[しょく]と一般[いっぱん]職[しょく]の区分[くぶん]が実質[じっしつ]的[てき]な男女[だんじょ]分断[ぶんだん]を生[う]み、キャリア[きゃりあ]の選択[せんたく]肢[し]を初期[しょき]段階[だんかい]で狭[せば]めている。これらの構造[こうぞう]的[てき]障壁[しょうへき]は、個[こ]人[じん]の努力[どりょく]だけでは到底[とうてい]乗[の]り越[こ]えられない。",
      "男性[だんせい]の育児[いくじ]参加[さんか]の低[てい]さも、日本[にほん]の特異[とくい]な問題[もんだい]である。厚生[こうせい]労働省[ろうどうしょう]の調査[ちょうさ]によれば、男性[だんせい]の育児[いくじ]休業[きゅうぎょう]取得[しゅとく]率[りつ]は2022年度[ねんど]で約[やく]14%にとどまり、女性[じょせい]の約[やく]80%と比較[ひかく]して大[おお]きな格差[かくさ]が存在[そんざい]する。この背景[はいけい]には、男性[だんせい]が育児[いくじ]休業[きゅうぎょう]を取得[しゅとく]することに対[たい]する職場[しょくば]の偏見[へんけん]と、キャリア[きゃりあ]上[じょう]の不利益[ふりえき]への懸念[けねん]がある。女性[じょせい]の社会[しゃかい]進出[しんしゅつ]を促[うなが]すには、男性[だんせい]の家庭[かてい]進出[しんしゅつ]が不可欠[ふかつけつ]であるという事実[じじつ]を、社会[しゃかい]全体[ぜんたい]が認識[にんしき]しなければならない。男女[だんじょ]が共[とも]に家庭[かてい]と職場[しょくば]を両立[りょうりつ]できる環境[かんきょう]の構築[こうちく]こそが本質[ほんしつ]的[てき]な解決[かいけつ]策[さく]である。",
      "2022年[ねん]には「育児[いくじ]・介護[かいご]休業[きゅうぎょう]法[ほう]」が改正[かいせい]され、2025年[ねん]からは男性[だんせい]の育児[いくじ]休業[きゅうぎょう]取得[しゅとく]を促[うなが]すため、出生[しゅっしょう]時[じ]休業[きゅうぎょう]やパパ[ぱぱ]・バカンス[ばかんす]休暇[きゅうか]の制度化[せいどか]が進[すす]められた。また、企業[きぎょう]に対[たい]し、従業[じゅうぎょう]員[いん]100人[にん]以上[いじょう]の事業[じぎょう]所[しょ]に育児[いくじ]休業[きゅうぎょう]取得[しゅとく]状況[じょうきょう]の公表[こうひょう]義務[ぎむ]が課[か]された。法[ほう]制度[せいど]の後押[あとお]しはあるものの、職場[しょくば]の意識[いしき]改革[かいかく]は法改正[ほうかいせい]の歩[ほ]調[ちょう]に追[お]いついていない。男性[だんせい]が取得[しゅとく]しやすい職場[しょくば]風土[ふうど]を作[つく]るには、経営[けいえい]層[そう]の模範[もはん]的[てき]取得[しゅとく]と、取得[しゅとく]者[しゃ]への同僚[どうりょう]の理解[りかい]が両[りょう]立[りつ]して不可欠[ふかつけつ]となる。",
      "ジェンダー[じぇんだー]平等[びょうどう]の実現[じつげん]は、単[たん]なる女性[じょせい]の権利[けんり]の問題[もんだい]ではない。多様[たよう]な人材[じんざい]が活躍[かつやく]できる社会[しゃかい]は、経済[けいざい]的[てき]にも革新的[かくしんてき]な活力[かつりょく]を生[う]み出[だ]す。国際[こくさい]的[てき]な調査[ちょうさ]でも、経営[けいえい]陣[じん]の多様性[たようせい]が高[たか]い企業[きぎょう]ほど利益[りえき]率[りつ]が高[たか]いとの結果[けっか]が報[ほう]告[こく]されている。制度[せいど]改革[かいかく]はもとより、教育[きょういく]現場[げんば]での無意識[むいしき]的[てき]バイアス[ばいあす]の是正[ぜせい]や、メディア[めでぃあ]の描[えが]く性別[せいべつ]役割[やくわり]像[ぞう]の更新[こうしん]も欠[か]かせない。固定[こてい]観念[かんねん]を捨[す]て、一人[ひとり]一人[ひとり]の個性[こせい]を尊[とうと]ぶ社会[しゃかい]へと脱[だっ]皮[ひ]してこそ、真[しん]の平等[びょうどう]が実[み]を結[むす]ぶのである。"
    ],
    translation: [
      "In the \"Gender Gap Index\" published by the World Economic Forum in its 2023 edition, Japan recorded a stagnant ranking of 118th out of 146 countries. Indicators in political and economic participation were conspicuously low; in particular, the share of women among Diet members falls short of 10%. This figure is among the worst in the developed world, and Japan has received repeated recommendations from the international community urging improvement. The reality is that Japan is now regarded internationally as a country with gender-equality issues.",
      "Viewed historically, Japan's legal system codified women's rights relatively early. The Constitution of Japan, which took effect in 1947, prohibits \"discrimination by sex\" in Article 14, and in the same year the Civil Code was revised to abolish the household system. However, the gap between legal ideals and social reality long remained unresolved. Although the Act on Securing, etc. of Equal Opportunity and Treatment between Men and Women in Employment (Equal Employment Opportunity Act) was enacted in 1985, the consciousness of gendered division of labor—\"men work, women keep the home\"—remained deeply rooted.",
      "In 2013, the second Abe administration launched the so-called \"Womenomics\" under the banner of \"a Japan in which women shine.\" Its flagship policy was the goal of raising the share of women in leadership positions to 30% by 2020. However, even after the deadline has passed, the achievement rate remains at 13% for section-chief-level positions and about 12% for managers overall. Behind the policy's failure, observers point to companies' slow shift in awareness and a corporate habit of treating numerical targets as excuses for avoidance.",
      "Reasons that corporate culture has failed to change are manifold. First, a corporate culture that praises long working hours hampers the career formation of women who bear household and childcare duties. Second, so-called \"maternity harassment\" continues unabated, with many women reporting that they are pressured to resign upon becoming pregnant. Third, the division between career-track and clerical-track positions produces a de facto gender divide, narrowing career options at an early stage. These structural barriers cannot be overcome through individual effort alone.",
      "The low rate of male participation in childcare is also a peculiar Japanese issue. According to a Ministry of Health, Labour and Welfare survey, the rate of male childcare leave uptake in fiscal 2022 stayed at about 14%, a wide gap compared with about 80% for women. Behind this lie workplace prejudice against men taking childcare leave and concerns about career disadvantage. To promote women's social advancement, society as a whole must recognize the fact that male advancement into the home is indispensable. Building an environment in which both men and women can balance home and workplace is the essential solution.",
      "In 2022, the Childcare and Family Care Leave Act was revised, and from 2025, the institutionalization of birth-time leave and \"Papa Vacation\" will be advanced to encourage male childcare leave uptake. In addition, workplaces with 100 or more employees are now required to publish their childcare leave uptake status. Although there is institutional support, workplace awareness reform has not kept pace with the legal revisions. To create a workplace climate in which men can easily take leave, both exemplary uptake by management and colleagues' understanding of those taking leave are indispensable.",
      "Realizing gender equality is not merely a matter of women's rights. A society in which diverse human resources can be active also produces innovative economic vitality. International surveys have reported that companies with more diverse management teams tend to have higher profit margins. Beyond institutional reform, correcting unconscious bias in educational settings and updating the gender-role images depicted by media are also essential. Only by shedding fixed assumptions and molting into a society that respects each individual's character will true equality bear fruit."
    ],
    questions: [
      {
        q: "What ranking did Japan record in the 2023 WEF Gender Gap Index?",
        choices: ["46th of 146 countries", "78th of 146 countries", "118th of 146 countries", "1st of 146 countries"],
        answerIndex: 2,
        explanation: "The text states 146か国中118位 — 118th out of 146 countries in the 2023 edition."
      },
      {
        q: "What was the flagship goal of Womenomics under the second Abe administration?",
        choices: ["50% women in management by 2020", "30% women in leadership positions by 2020", "Equal pay by 2025", "Universal childcare by 2030"],
        answerIndex: 1,
        explanation: "Womenomics aimed for a 30% share of women in leadership positions by 2020, a target the passage notes was not met."
      },
      {
        q: "According to the Ministry of Health, Labour and Welfare survey cited, what was the male childcare leave uptake rate in fiscal 2022?",
        choices: ["About 14%", "About 50%", "About 80%", "About 100%"],
        answerIndex: 0,
        explanation: "The 2022 fiscal-year rate for male childcare leave uptake stayed at about 14%, versus about 80% for women."
      },
      {
        q: "Which of the following is named in the passage as a structural barrier in corporate culture?",
        choices: ["The two-tier career-track/clerical-track division", "Excessive female board representation", "Mandatory paternity leave", "Government-mandated profit sharing"],
        answerIndex: 0,
        explanation: "The text cites the 総合職と一般職の区分 as producing a de facto gender divide that narrows career options early."
      },
      {
        q: "The phrase \"according to a Ministry of Health, Labour and Welfare survey\" uses which N2 pattern?",
        choices: ["〜に比べ (compared to)", "〜によれば (according to)", "〜末に (after much...)", "〜に伴って"],
        answerIndex: 1,
        explanation: "厚生労働省の調査によれば uses 〜によれば, the standard N2 pattern for \"according to.\""
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-14 — The healthcare system
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-14",
    title: "日本[にほん]の医療[いりょう]制度[せいど]の光[ひかり]と影[かげ]",
    titleReading: "にほんのいりょうせいどのひかりとかげ",
    level: "N2",
    summary: "An overview of Japan's universal healthcare system: its 1961 achievement of health insurance for all, the low out-of-pocket design and freedom of choice, mounting fiscal pressure from aging and rising costs, the 2000 long-term care insurance system, regional doctor shortages, the 2024 work-style reform for physicians, and the sustainability challenge.",
    estMinutes: 11,
    tags: ["healthcare", "universal coverage", "aging society", "long-term care"],
    body: [
      "日本[にほん]の医療[いりょう]制度[せいど]は、1961年[ねん]にすべての国民[こくみん]が何[なに]らかの医療[いりょう]保険[ほけん]に加入[かにゅう]する「国民[こくみん]皆[みな]保険[ほけん]」体制[たいせい]を完成[かんせい]させた。これにより、所得[しょとく]に関[かん]わらず誰[だれ]もが医療[いりょう]サービスを利用[りよう]できる社会[しゃかい]が実現[じつげん]した。世界[せかい]保健[ほけん]機関[きかん]が2000年[ねん]に発表[はっぴょう]した医療[いりょう]制度[せいど]評価[ひょうか]で、日本[にほん]は総合[そうごう]評価[ひょうか]1位[い]を獲得[かくとく]した。安価[あんか]でアクセスしやすい医療[いりょう]は、戦後[せんご]日本[にほん]の健康[けんこう]水準[すいじゅん]の向上[こうじょう]と平均[へいきん]寿命[じゅみょう]の延伸[えんしん]に不可欠[ふかつけつ]な役割[やくわり]を果[はた]した。とりわけ乳幼児[にゅうようじ]死亡率[しぼうりつ]の急[きゅう]激[げき]な低下[ていか]は、この制度[せいど]の最大[さいだい]の成果[せいか]の一[ひと]つである。",
      "現行[げんこう]制度[せいど]の特徴[とくちょう]は三[みっ]つある。第一[だいいち]に、医療[いりょう]費[ひ]の自己[じこ]負担[ふたん]が3割[わり]に抑[おさ]えられ、高齢者[こうれいしゃ]は原則[げんそく]として2割[わり]、一定[いってい]以上[いじょう]所得[しょとく]の場合[ばあい]は3割[わり]と、年齢[ねんれい]と所得[しょとく]に応[おう]じた負担[ふたん]調整[ちょうせい]が行[おこな]われている。第二[だいに]に、患者[かんじゃ]は自由[じゆう]に診療[しんりょう]機関[きかん]を選択[せんたく]でき、紹介[しょうかい]状[じょう]なしに大学[だいがく]病院[びょういん]を受診[じゅしん]することも可能[かのう]である。第三[だいさん]に、高度[こうど]な医療[いりょう]技術[ぎじゅつ]が全国[ぜんこく]水準[すいじゅん]で提供[ていきょう]されており、地域[ちいき]間[かん]の医療[いりょう]格差[かくさ]は国際[こくさい]的[てき]に見[み]ても小[しょう]さい。これらの特徴[とくちょう]が相[あい]まって、日本[にほん]は世界[せかい]有数[ゆうすう]の長寿[ちょうじゅ]国[こく]となった。",
      "しかし、その制度[せいど]は現在[げんざい]深刻[しんこく]な財政[ざいせい]圧力[あつりょく]に直面[ちょくめん]している。2022年度[ねんど]の国民[こくみん]医療[いりょう]費[ひ]は約[やく]46兆[ちょう]円[えん]に達[たっ]し、過去[かこ]最高[さいこう]を更新[こうしん]し続[つづ]けている。その背景[はいけい]には、急[きゅう]速[そく]な高齢化[こうれいか]と医療[いりょう]技術[ぎじゅつ]の高度化[こうどか]がある。75歳[さい]以上[いじょう]の後期[こうき]高齢者[こうれいしゃ]1人[にん]当[あ]たりの医療[いりょう]費[ひ]は、現役[げんえき]世代[せだい]の約[やく]5倍[ばい]に上[のぼ]る。現行[げんこう]制度[せいど]では、後期[こうき]高齢者[こうれいしゃ]医療[いりょう]制度[せいど]が独立[どくりつ]して設[もう]けられているものの、その財源[ざいげん]の半[はん]分[ぶん]近[ちか]くは公費[こうひ]（税[ぜい]金[きん]）で賄[まかな]われており、財政[ざいせい]負担[ふたん]の増大[ぞうだい]は避[さ]けられない。",
      "この問題[もんだい]に対[たい]する対策[たいさく]として、2000年[ねん]に介護[かいご]保険[ほけん]制度[せいど]が創設[そうせつ]された。これは要[よう]介護[かいご]状態[じょうたい]となった高齢者[こうれいしゃ]に対[たい]し、在宅[ざいたく]サービスから施設[しせつ]サービスまで包括的[ほうかつてき]な支援[しえん]を提供[ていきょう]する仕組[しく]みである。介護[かいご]保険[ほけん]の導入[どうにゅう]は、家族[かぞく]の負担[ふたん]を社会[しゃかい]全体[ぜんたい]で分[わ]かち合[あ]うという画期的[かっきてき]な転換[てんかん]であった。しかし、要[よう]介護[かいご]認定[にんてい]者[しゃ]数[すう]は年々[ねんねん]増加[ぞうか]し、制度[せいど]の財政[ざいせい]は一段[いちだん]と厳[きび]しさを増[ま]している。2025年[ねん]には団塊[だんかい]の世代[せだい]が75歳[さい]以上[いじょう]となり、介護[かいご]人材[じんざい]不足[ぶそく]は約[やく]32万人[にん]に達[たっ]するという予測[よそく]もある。",
      "地域[ちいき]間[かん]の医療[いりょう]格差[かくさ]も深刻[しんこく]な課題[かだい]である。医師[いし]は都市[とし]部[ぶ]の大学[だいがく]病院[びょういん]に集中[しゅうちゅう]し、地方[ちほう]や離島[りとう]では深刻[しんこく]な医師[いし]不足[ぶそく]に陥[おちい]っている。特に産科[さんか]・小児科[しょうにか]の医師[いし]不足[ぶそく]は深刻[しんこく]で、過疎[かそ]地[ち]では「産[う]める産院[さんいん]がない」という事態[じたい]も報告[ほうこく]されている。患者[かんじゃ]の搬送[はんそう]に数時間[すうじかん]を要[よう]し、結果[けっか]として救命[きゅうめい]率[りつ]の低下[ていか]を招[まね]くケースも少[すく]なくない。地域[ちいき]医療[いりょう]計画[けいかく]に基[もと]づく医師[いし]配置[はいち]の最適化[さいてきか]は急務[きゅうむ]だが、医師[いし]の勤務[きんむ]地[ち]選択[せんたく]の自由[じゆう]と対立[たいりつ]する難題[なんだい]を抱[かか]えている。",
      "2024年[ねん]には医師[いし]の働[はたら]き方[かた]改革[かいかく]が施行[しこう]され、時間[じかん]外[がい]労働[ろうどう]に上限[じょうげん]が設[もう]けられた。これは医師[いし]の過労[かろう]死[し]防止[ぼうし]と女性[じょせい]医師[いし]の活躍[かつやく]促進[そくしん]を目的[もくてき]とするが、現場[げんば]では「医師[いし]不足[ぶそく]が悪化[あっか]する」との懸念[けねん]も強[つよ]い。実際[じっさい]、夜間[やかん]や休日[きゅうじつ]の救急[きゅうきゅう]対応[たいおう]の縮小[しゅくしょう]や、手術[しゅじゅつ]数[すう]の制限[せいげん]に追[お]われている病院[びょういん]もある。規制[きせい]の強化[きょうか]と医療[いりょう]提供[ていきょう]体制[たいせい]の維持[いじ]の両立[りょうりつ]は、簡単[かんたん]には解決[かいけつ]できないジレンマ[じれんま]である。医師[いし]の数[かず]を増[ふ]やすだけでなく、看護[かんご]師[し]や薬剤師[やくざいし]など多[おお]職種[しょくしゅ]連携[れんけい]によるチーム医療[いりょう]の推進[すいしん]が求[もと]められる。",
      "日本[にほん]の医療[いりょう]制度[せいど]は、ユニバーサル[ゆにばーさる]・ヘルス[へるす]・カバレッジ[かばれっじ]（すべての人が適切[てきせつ]な医療[いりょう]にアクセスできる状態[じょうたい]）の国際的[こくさいてき]な範[はん]型[けい]と称[しょう]されてきた。しかし、その持続[じぞく]可能性[かのうせい]を脅[おびや]かす要因[よういん]は増大[ぞうだい]する一方[いっぽう]である。医療[いりょう]費[ひ]の伸[の]びを抑制[よくせい]しつつ、質[しつ]の高[たか]い医療[いりょう]を維持[いじ]するには、予防[よぼう]医療[いりょう]の充実[じゅうじつ]、データ[でーた]ヘルス[へるす]改革[かいかく]、人工[じんこう]知能[ちのう]の活用[かつよう]など、多[おお]角的[かくてき]な取[と]り組[く]みが不可欠[ふかつけつ]である。何[なに]より、制度[せいど]の受益[じゅえき]者[しゃ]である国民[こくみん]自身[じしん]が、自身[じしん]の健康[けんこう]管理[かんり]に主体的[しゅたいてき]に取[と]り組[く]む意識[いしき]を持[も]つことが、制度[せいど]の未来[みらい]を支[ささ]える基盤[きばん]となるであろう。"
    ],
    translation: [
      "Japan's medical system completed the framework of \"health insurance for all citizens\" in 1961, in which all citizens enroll in some form of health insurance. This realized a society where anyone, regardless of income, can access medical services. When the World Health Organization released its health system evaluation in 2000, Japan obtained the top overall ranking. Affordable and accessible medical care played an indispensable role in the postwar improvement of health standards and the extension of average life expectancy in Japan. The dramatic drop in infant mortality in particular is one of the system's greatest achievements.",
      "The current system has three features. First, the out-of-pocket share of medical costs is held to 30%, with elderly paying in principle 20%, or 30% for those above a certain income—adjusted by age and income. Second, patients can freely choose medical institutions and can even visit university hospitals without a referral letter. Third, advanced medical technology is provided at a nationwide standard, and regional medical disparities are small even by international standards. These features combined have made Japan one of the world's leading longevity countries.",
      "However, the system now faces severe fiscal pressure. National medical expenditure in fiscal 2022 reached about 46 trillion yen, continuing to set new record highs. Behind this lie rapid aging and the sophistication of medical technology. The medical expenditure per person aged 75 or older is about five times that of the working generation. Although the current system has an independent Late-Stage Medical Care System for the Elderly, nearly half of its funding is covered by public expenditure (taxes), and growth in fiscal burden is unavoidable.",
      "As a countermeasure, the long-term care insurance system was established in 2000. It is a framework that provides comprehensive support, from in-home services to facility services, to elderly who have fallen into a state requiring care. The introduction of long-term care insurance was a groundbreaking shift in which the burden on families was shared by society as a whole. However, the number of people certified as requiring care increases year by year, and the system's finances are growing even more severe. Projections suggest that by 2025, when the baby-boom generation turns 75 or older, the shortage of long-term care workers will reach about 320,000.",
      "Regional medical disparities are also a serious issue. Physicians concentrate in urban university hospitals, while rural and remote islands fall into severe doctor shortages. The shortage of obstetricians and pediatricians is particularly severe, and in depopulated areas situations are reported where \"there is no maternity ward that can deliver.\" Transporting patients takes several hours, and in some cases this leads to lowered survival rates. Optimizing physician placement based on regional medical plans is an urgent task, but it carries the difficult problem of conflicting with physicians' freedom to choose where to work.",
      "In 2024, work-style reform for physicians was enforced, setting an upper limit on overtime work. It aims to prevent death from overwork among doctors and to promote the active participation of female physicians, but at the frontlines the concern is strong that \"the physician shortage will worsen.\" In fact, some hospitals are forced to shrink nighttime and holiday emergency response and to limit the number of surgeries. Balancing the strengthening of regulation with the maintenance of the medical provision system is a dilemma that cannot be easily solved. Not only must the number of physicians be increased, but the promotion of team medicine through multi-disciplinary collaboration among nurses, pharmacists, and others is sought.",
      "Japan's medical system has been extolled as an international model of universal health coverage (a state in which all people can access appropriate medical care). However, the factors threatening its sustainability continue to grow. To curb the growth of medical costs while maintaining high-quality care, multifaceted efforts are indispensable, including the enrichment of preventive medicine, data health reform, and the use of artificial intelligence. Above all, the awareness of citizens themselves—the beneficiaries of the system—of taking a proactive role in managing their own health will become the foundation that supports the future of the system."
    ],
    questions: [
      {
        q: "According to the passage, when did Japan complete the \"health insurance for all citizens\" framework?",
        choices: ["1947", "1961", "2000", "2024"],
        answerIndex: 1,
        explanation: "The text states that 1961 saw the completion of the 国民皆保険 framework (国民皆保険体制を完成させた)."
      },
      {
        q: "Compared to the working generation, what is the per-person medical expenditure for those aged 75 and above?",
        choices: ["About the same", "About twice as much", "About five times as much", "About ten times as much"],
        answerIndex: 2,
        explanation: "The passage gives 約5倍に上る — about five times the working-generation figure."
      },
      {
        q: "When was the long-term care insurance system established?",
        choices: ["1961", "1985", "2000", "2024"],
        answerIndex: 2,
        explanation: "The 介護保険制度 was created in 2000 as a countermeasure to the rising care burden."
      },
      {
        q: "What is the projected shortage of long-term care workers by 2025, as cited in the passage?",
        choices: ["About 32,000", "About 320,000", "About 3,200,000", "About 32 million"],
        answerIndex: 1,
        explanation: "The passage cites a projection of 約32万人 — about 320,000 long-term care workers short by 2025."
      },
      {
        q: "The phrase \"curbing the growth of medical costs while maintaining high-quality care\" uses which N2 pattern?",
        choices: ["〜限り", "〜次第で", "〜つつ (while doing)", "〜に過ぎない"],
        answerIndex: 2,
        explanation: "医療費の伸びを抑制しつつ、質の高い医療を維持する uses 〜つつ (while doing)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-15 — A startup failure
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-15",
    title: "あるスタートアップ[すたーとあっぷ]の失敗[しっぱい]から学[まな]ぶこと",
    titleReading: "あるすたーとあっぷのしっぱいからまなぶこと",
    level: "N2",
    summary: "A narrative case study of a logistics-AI startup: a promising 2020 founding, a 300-million-yen Series A in 2021, the hidden cracks of poor product-market fit and organizational bloat, the failed Series B in 2022, painful layoffs, the founder's whiteboard reckoning, and the lessons for Japan's startup ecosystem.",
    estMinutes: 9,
    tags: ["startup", "entrepreneurship", "failure", "business"],
    body: [
      "東京[とうきょう]の郊外[こうがい]にある小[ちい]さなシェアオフィス[しぇあおふぃす]で、2020年[ねん]の春[はる]、若[わか]き創業[そうぎょう]者[しゃ]の男[おとこ]が仲間[なかま]3人[にん]と共[とも]に会社[かいしゃ]を立[た]ち上[あ]げた。彼[かれ]は大手[おおて]IT企業[きぎょう]を退職[たいしょく]し、「日本[にほん]の物流[ぶつりゅう]にAIを」という野心的[やしんてき]なビジョン[びじょん]を掲[かか]げた。サービス[さーびす]の狙[ねら]いは、中小[ちゅうしょう]運送[うんそう]会社[がいしゃ]の配送[はいそう]ルート[るーと]最適化[さいてきか]であった。日本[にほん]の運送[うんそう]業[ぎょう]は長年[ながねん]の人手[ひとで]不足[ぶそく]に悩[なや]まされており、ニーズは確[たし]かに存在[そんざい]した。数[すう]か月[げつ]のプロトタイプ[ぷろとたいぷ]開発[かいはつ]を経[へ]て、最初[さいしょ]の顧客[こきゃく]を獲得[かくとく]すると、彼[かれ]らの勢[いきお]いは止[と]まらなかった。",
      "2021年[ねん]秋[あき]、彼[かれ]らは大手[おおて]ベンチャー[べんちゃー]キャピタル[きゃぴたる]から3億[おく]円[えん]のシリーズA資金[しきん]調達[ちょうたつ]に成功[せいこう]した。メディア[めでぃあ]は「次世代[じせだい]のユニコーン[ゆにこーん]企業[きぎょう]」と称[しょう]し、創業[そうぎょう]者[しゃ]はテレビ[てれび]番組[ばんぐみ]にも登場[とうじょう]した。資金[しきん]を得[え]た彼[かれ]らは、開発[かいはつ]部門[ぶもん]と営業[えいぎょう]部門[ぶもん]を急[きゅう]拡[かく]大[だい]し、1年[ねん]で社員[しゃいん]数[すう]は10名[めい]から80名[めい]に膨[ふく]れ上[あ]がった。華[はな]やかなオフィス[おふぃす]、海外[かいがい]出張[しゅっちょう]、頻繁[ひんぱん]な採用[さいよう]イベント[いべんと]、社内[しゃない]報告[ほうこく]会[かい]のたびに拍手[はくしゅ]が響[ひび]いた。外部[がいぶ]から見[み]れば、彼[かれ]らは確[たし]かに「成功[せいこう]への道[みち]」を歩[ある]いているように見[み]えた。",
      "しかし、水面下[すいめんか]で亀裂[きれつ]は広[ひろ]がっていた。最初[さいしょ]の課題[かだい]は、プロダクト[ぷろだくと]・マーケット[まーけっと]・フィット[ふぃっと]の欠如[けつぼ]であった。創業[そうぎょう]者[しゃ]の目[め]は「AI技術[ぎじゅつ]の進化[しんか]」に向[む]けられ、現場[げんば]の運送[うんそう]業者[ぎょうしゃ]の痛[いた]みへの理解[りかい]が浅[あさ]かった。顧客[こきゃく]は高度[こうど]なAI機能[きのう]よりも、既存[きぞん]システムとの親和[しんわ]性[せい]や現場[げんば]での使い易[やす]さを求[もと]めていた。それにもかかわらず、開発[かいはつ]チームは自[みずか]らの技術[ぎじゅつ]的[てき]な関心[かんしん]に基[もと]づき、次々[つぎつぎ]と新機能[しんきのう]を追加[ついか]した。その結果[けっか]、画面[がめん]は複雑化[ふくざつか]し、顧客[こきゃく]の離脱[りだつ]率[りつ]は月[げつ]に5%を超[こ]えるまでに悪化[あっか]した。",
      "二[ふた]つ目[め]の課題[かだい]は、組織[そしき]の肥大化[ひだいか]であった。急[きゅう]激[げき]な採用[さいよう]は企業[きぎょう]文化[ぶんか]の浸透[しんとう]を阻[はば]んだ。中途[ちゅうと]採用[さいよう]者[しゃ]の多く[おおく]は「シリーズAを調達[ちょうたつ]した急成長[きゅうせいちょう]企業[きぎょう]」というブランド[ぶらんど]に惹[ひ]かれて入社[にゅうしゃ]したが、会社[かいしゃ]の理念[りねん]への共感[きょうかん]は薄[うす]かった。各[かく]部門[ぶもん]の目標[もくひょう]もバラバラで、営業[えいぎょう]は「契約[けいやく]数[すう]」、開発[かいはつ]は「リリース[りりーす]機能[きのう]数[すう]」、顧客[こきゃく]対応[たいおう]は「対応[たいおう]時間[じかん]」を追[お]い、全体[ぜんたい]の利益[りえき]には目[め]が届[とど]かなかった。月[げつ]額[がく]の経費[けいひ]は2,000万円[えん]を超[こ]え、3億[おく]円[えん]の資金[しきん]でも運転[うんてん]資金[しきん]の持続[じぞく]期間[きかん]は18か月[かげつ]に満[み]たない。2022年[ねん]春[はる]、シリーズB資金[しきん]調達[ちょうたつ]に向[む]けた説明[せつめい]を重[かさ]ねたが、投資家[とうしか]の反応[はんのう]は冷[つめ]たかった。",
      "投資家[とうしか]から突[つ]きつけられたのは、三[みっ]つの厳[きび]しい問[と]いであった。「本当[ほんとう]にプロダクト[ぷろだくと]・マーケット[まーけっと]・フィット[ふぃっと]は達成[たっせい]されているか」「燃[も]え尽[つ]きる速度[そくど]が高[たか]すぎるのではないか」「粗利[あらり]利益[りえき]率[りつ]はいつ黒字化[くろじか]するのか」。創業[そうぎょう]者[しゃ]は答[こた]えに窮[きゅう]した。投資家[とうしか]の指摘[してき]は的[まと]を射[い]ており、彼[かれ]自身[じしん]、薄々[うすうす]気[き]づいていた事実[じじつ]であった。しかし「次[つぎ]の資金[しきん]調達[ちょうたつ]で2倍[ばい]の評価[ひょうか]額[がく]を」という社内[しゃない]の期待[きたい]に背[そむ]いて、身[み]を引[ひ]く決断[けつだん]はできなかった。結局[けっきょく]、シリーズBは成立[せいりつ]せず、2022年[ねん]秋[あき]、会社[かいしゃ]は40名[めい]へのリストラ[りすとら]を公表[こうひょう]した。",
      "リストラ[りすとら]の発表[はっぴょう]後[ご]、創業[そうぎょう]者[しゃ]は全社員[ぜんしゃいん]の前[まえ]で深[ふか]く頭[あたま]を下[さ]げた。彼[かれ]の目[め]には涙[なみだ]が浮[う]かんでいた。残[のこ]った社員[しゃいん]も、去[さ]った社員[しゃいん]も、心[こころ]に深[ふか]い傷[きず]を負[お]った。その夜[よる]、彼[かれ]は一人[ひとり]でオフィス[おふぃす]に残[のこ]り、白板[はくばん]に向[む]かってこれまでの意思[いし]決定[けってい]を書[か]き出[だ]した。「顧客[こきゃく]ではなく技術[ぎじゅつ]を優先[ゆうせん]した」「規模[きぼ]の拡大[かくだい]を利益[りえき]より優先[ゆうせん]した」「社員[しゃいん]の声[こえ]に耳[みみ]を傾[かたむ]けなかった」。三[みっ]つの後悔[こうかい]を並[なら]べて、彼[かれ]は長[なが]い時間[じかん]それを見[み]つめ続[つづ]けたという。",
      "失敗[しっぱい]から学[まな]ぶべき教訓[きょうくん]は明[あき]らかである。第一[だいいち]に、プロダクト[ぷろだくと]・マーケット[まーけっと]・フィット[ふぃっと]を確認[かくにん]せずに拡大[かくだい]するのは自殺[じさつ]行為[こうい]である。第二[だいに]に、資金[しきん]は有限[ゆうげん]であり、資金[しきん]が続[つづ]く期間[きかん]を常に意識[いしき]する必要[ひつよう]がある。第三[だいさん]に、創業[そうぎょう]者[しゃ]は自[みずか]らの信念[しんねん]に固[かた]執[しゅう]せず、市場[しじょう]からのフィードバック[ふぃーどばっく]に謙虚[けんきょ]でなければならない。日本[にほん]のスタートアップ[すたーとあっぷ]生態系[せいたいけい]では、失敗[しっぱい]を個人[こじん]の能力[のうりょく]不足[ぶそく]と見[み]なす風潮[ふうちょう]が依然[いぜん]として根強[ねづよ]い。しかし、失敗[しっぱい]を恐[おそ]れる社会[しゃかい]からは真[しん]のイノベーション[いのべーしょん]は生[う]まれない。失敗[しっぱい]を率直[そっちょく]に共有[きょうゆう]し、次[つぎ]の世代[せだい]の糧[かて]とする文化[ぶんか]こそが、成熟[せいじゅく]した起業[きぎょう]生態系[せいたいけい]の証[あかし]である。"
    ],
    translation: [
      "In a small shared office in the suburbs of Tokyo, in the spring of 2020, a young male founder launched a company with three partners. He had resigned from a major IT firm and raised an ambitious vision: \"Bring AI to Japanese logistics.\" The service aimed to optimize delivery routes for small and medium-sized transport companies. Japan's transport industry had long been plagued by labor shortages, and the need certainly existed. After several months of prototype development, they acquired their first customers, and their momentum seemed unstoppable.",
      "In the autumn of 2021, they successfully raised 300 million yen in Series A funding from a major venture capital firm. The media called them \"the next-generation unicorn company,\" and the founder appeared on TV programs. With funding in hand, they rapidly expanded the development and sales divisions, and within a year the number of employees swelled from 10 to 80. There was a glamorous office, overseas business trips, frequent hiring events, and applause rang out at every in-house report meeting. From the outside, they did indeed appear to be walking the path to success.",
      "But beneath the surface, cracks were spreading. The first issue was the lack of product-market fit. The founder's eyes were fixed on \"the evolution of AI technology,\" and his understanding of the pain of front-line transport operators was shallow. Customers wanted compatibility with existing systems and usability in the field more than advanced AI functions. Nevertheless, the development team, driven by their own technical interests, added new features one after another. As a result, the interface became complicated, and the customer churn rate worsened to over 5% per month.",
      "The second issue was organizational bloat. Rapid hiring hindered the penetration of corporate culture. Many mid-career hires were attracted by the brand of \"a fast-growing company that raised Series A,\" but their sympathy for the company's philosophy was thin. Each division's goals were also disparate: sales pursued \"number of contracts,\" development pursued \"number of features released,\" and customer support pursued \"response time,\" with no eye on overall profit. Monthly expenses exceeded 20 million yen, and even with 300 million yen in funding the runway fell short of 18 months. In the spring of 2022, they repeated pitches for Series B funding, but investor reactions were cold.",
      "What investors confronted them with were three sharp questions: \"Is product-market fit truly achieved?\" \"Isn't the burn rate too high?\" \"When will the gross margin turn profitable?\" The founder was at a loss for answers. The investors' points hit the mark, and they were facts he himself had faintly perceived. Yet he could not make the decision to step back, betraying the in-house expectation of \"twice the valuation in the next round.\" In the end, Series B did not materialize, and in the autumn of 2022 the company announced a restructuring affecting 40 employees.",
      "After the restructuring announcement, the founder bowed deeply before all employees. Tears welled in his eyes. Both the remaining employees and those who left bore deep wounds in their hearts. That night, he stayed alone in the office and wrote out past decisions on a whiteboard: \"I prioritized technology over customers,\" \"I prioritized scale over profit,\" \"I didn't listen to employees.\" Lining up three regrets, he reportedly stared at them for a long time.",
      "The lessons to learn from the failure are clear. First, expanding without confirming product-market fit is suicidal. Second, capital is finite, and one must always be aware of how long funding will last. Third, founders must not be fixated on their own convictions and must remain humble toward market feedback. In Japan's startup ecosystem, a climate that regards failure as a personal lack of ability remains deeply rooted. However, a society that fears failure cannot produce true innovation. A culture that candidly shares failure and turns it into nourishment for the next generation is itself the mark of a mature entrepreneurial ecosystem."
    ],
    questions: [
      {
        q: "According to the passage, what was the startup's main business?",
        choices: ["Food delivery by drones", "AI-based route optimization for small transport companies", "Online logistics marketplaces only", "Driver recruitment services"],
        answerIndex: 1,
        explanation: "The text describes the service as 中小運送会社の配送ルート最適化 — route optimization for small transport companies using AI."
      },
      {
        q: "What monthly customer churn rate did the company's complicated interface produce?",
        choices: ["About 1%", "About 3%", "Over 5% per month", "Over 20% per month"],
        answerIndex: 2,
        explanation: "The interface complication led to a churn rate that 月に5%を超えるまでに悪化 — over 5% per month."
      },
      {
        q: "What did the founder write on the whiteboard the night of the layoff announcement?",
        choices: ["His three regrets over past decisions", "A new product roadmap", "A list of investors to contact", "A budget for the next quarter"],
        answerIndex: 0,
        explanation: "He wrote out three regrets — prioritizing technology over customers, scale over profit, and ignoring employees' voices."
      },
      {
        q: "Which is NOT one of the three lessons the passage draws from the failure?",
        choices: ["Confirm product-market fit before scaling", "Always track how long funding will last", "Stay fixated on your own convictions", "Stay humble toward market feedback"],
        answerIndex: 2,
        explanation: "The third lesson is the opposite — founders must NOT be fixated on their own convictions (信念に固執せず)."
      },
      {
        q: "The phrase \"despite this, the development team added new features one after another\" uses which N2 pattern?",
        choices: ["〜に違いない", "〜にもかかわらず (despite / in spite of)", "〜どころか", "〜限り"],
        answerIndex: 1,
        explanation: "それにもかかわらず、開発チームは次々と新機能を追加した uses 〜にもかかわらず (despite)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-16 — Decline of traditional crafts
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-16",
    title: "伝統[でんとう]工芸[こうげい]の衰退[すいたい]と再生[さいせい]",
    titleReading: "でんとうこうげいのすいたいとさいせい",
    level: "N2",
    summary: "An analysis of Japan's traditional crafts in crisis: the 1974 Traditional Craft Industry Promotion Act and the 240 designated items, the aging of artisans and lack of successors, competition from cheap imports, the overseas rediscovery of wabi-sabi, the shu-ha-ri-style regeneration efforts, and the case for crafts as living culture rather than dead heritage.",
    estMinutes: 10,
    tags: ["traditional crafts", "culture", "aging society", "industry"],
    body: [
      "日本[にほん]は漆器[しっき]、陶磁器[とうじき]、織物[おりもの]、木工[もっこう]、和紙[わし]、刃物[はもの]など、多[おお]彩[さい]な伝統[でんとう]工芸[こうげい]で知られる国[くに]である。これらは地域[ちいき]ごとの気候[きこう]風土[ふうど]や素材[そざい]に根差[ねざ]し、数百年[すうひゃくねん]の伝統[でんとう]を継承[けいしょう]してきた技術[ぎじゅつ]の結晶[けっしょう]である。京都[きょうと]の西陣[にしじん]織[おり]、輪島[わじま]塗[ぬり]、有田[ありた]焼[やき]、会津[あいず]本郷[ほんごう]焼[やき]、薩摩[さつま]切子[きりこ]など、その名称[めいしょう]を挙[あ]げれば枚挙[まいきょ]に暇[いとま]がない。これらの工芸[こうげい]品[ひん]は単[たん]なる器[うつわ]ではなく、日本[にほん]の美[び]意識[しき]と職人[しょくにん]精神[せいしん]の体現[たいげん]である。",
      "1974年[ねん]、国[くに]は「伝統的[でんとうてき]工芸品[こうげいひん]産業[さんぎょう]振興[しんこう]法[ほう]」を制定[せいてい]し、地域[ちいき]特産[とくさん]の工芸[こうげい]品[ひん]を「伝統的[でんとうてき]工芸品[こうげいひん]」として指定[してい]した。指定[してい]を受[う]けた品[しな]は現在[げんざい]約[やく]240品目[ひんもく]に上[のぼ]り、国[くに]や自治体[じちたい]が技術[ぎじゅつ]伝承[でんしょう]、後継者[こうけいしゃ]育成[いくせい]、需要[じゅよう]開拓[かいたく]を支援[しえん]してきた。伝統[でんとう]的[てき]工芸士[こうげいし]という称号[しょうごう]制度[せいど]も設[もう]けられ、高度[こうど]な技術[ぎじゅつ]を持[も]つ職人[しょくにん]が顕彰[けんしょう]されている。しかし、制度[せいど]の保護[ほご]にもかかわらず、産業[さんぎょう]全体[ぜんたい]は縮小[しゅくしょう]傾向[けいこう]を辿[たど]り続[つづ]けている。",
      "最大[さいだい]の課題[かだい]は後継者[こうけいしゃ]不足[ぶそく]である。伝統[でんとう]工芸[こうげい]の職人[しょくにん]の平均[へいきん]年齢[ねんれい]は60歳[さい]を超[こ]え、約[やく]半数[はんすう]の業界[ぎょうかい]で従事[じゅうじ]者[しゃ]の30%以上[いじょう]が65歳[さい]以上[いじょう]となっている。職人[しょくにん]技術[ぎじゅつ]は長[なが]年[ねん]の徒弟[とてい]制度[せいど]を通[つう]じて体得[たいとく]されるものであり、技[わざ]の習得[しゅうとく]には10年[ねん]以上[いじょう]を要[よう]する場合[ばあい]も珍[めずら]しくない。低[てい]所得[しょとく]と長[なが]期間[きかん]の修業[しゅうぎょう]は若者[わかもの]を遠[とお]ざけ、技術[ぎじゅつ]の継承[けいしょう]の断絶[だんぜつ]が深刻[しんこく]化[か]している。職人[しょくにん]一人[ひとり]の引退[いんたい]が、一[ひと]つの技法[ぎほう]の消滅[しょうめつ]を意味[いみ]する事態[じたい]も珍[めずら]しくない。",
      "第二[だいに]の課題[かだい]は、海外[かいがい]からの廉価[れんか]品[ひん]との競争[きょうそう]である。機械[きかい]生産[せいさん]の中国[ちゅうごく]や東南[とうなん]アジア[あじあ]製品[せいひん]は、外見[がいけん]こそ伝統[でんとう]工芸[こうげい]品[ひん]に似[に]るものの、素材[そざい]も技術[ぎじゅつ]も異[こと]なる。しかし、消費者[しょうひしゃ]の多く[おおく]は見[み]分[わ]けがつかず、低[てい]価格[かかく]に惹[ひ]かれて海外[かいがい]製品[せいひん]を選択[せんたく]しがちである。これは国内[こくない]産[さん]の伝統[でんとう]工芸[こうげい]品[ひん]の市場[しじょう]を直接的[ちょくせつてき]に侵食[しんしょく]する。また、生活[せいかつ]様式[ようしき]の変化[へんか]も需要[じゅよう]を減少[げんしょう]させている。畳[たたみ]の減少[げんしょう]は畳表[たたみおもて]の、着物[きもの]の衰退[すいたい]は西陣[にしじん]織[おり]の、懐石[かいせき]料理[りょうり]の簡素化[かんそか]は漆器[しっき]の、それぞれ需要[じゅよう]を縮小[しゅくしょう]させた。",
      "一方[いっぽう]で、伝統[でんとう]工芸[こうげい]に対[たい]する海外[かいがい]の評価[ひょうか]は高[たか]まりを見[み]せている。明治[めいじ]時代[じだい]のジャポニスム[じゃぽにすむ]に端[はな]を発[はつ]した日本[にほん]美術[びじゅつ]への憧憬[しょうけい]は、今日[きょう]も欧米[おうべい]の博物館[はくぶつかん]や収集家[しゅうしゅうか]に引[ひ]き継[つ]がれている。「わび[わび]・さび[さび]」という言葉[ことば]が国際[こくさい]的[てき]に通用[つうよう]する程[ほど]に、日本[にほん]の美学[びがく]は受容[じゅよう]された。訪日[ほうにち]外国人[がいこくじん]観光客[かんこうきゃく]の増加[ぞうか]は、伝統[でんとう]工芸[こうげい]体験[たいけん]の需要[じゅよう]を喚起[かんき]し、京都[きょうと]や金沢[かなざわ]では職人[しょくにん]工房[こうぼう]見学[けんがく]が人気[にんき]を集[あつ]めている。この対外的[たいがいてき]な関心[かんしん]は、国内[こくない]の再評価[さいひょうか]にも繋[つな]がる可能性[かのうせい]を秘[ひぞ]めている。",
      "再生[さいせい]への取[と]り組[く]みも始[はじ]まっている。京都[きょうと]の織物[おりもの]業者[ぎょうしゃ]は若[わか]いデザイナー[でざいなー]と協働[きょうどう]し、伝統[でんとう]技法[ぎほう]で現代[げんだい]的[てき]なストール[すとーる]やバッグ[ばっぐ]を開発[かいはつ]した。輪島[わじま]塗[ぬり]の職人[しょくにん]は、漆器[しっき]の技術[ぎじゅつ]を活用[かつよう]したスマートフォン[すまーとふぉん]ケース[けーす]を商品[しょうひん]化し、若者[わかもの]層[そう]への販路[はんろ]を開拓[かいたく]した。有田[ありた]焼[やき]の窯元[かまもと]は、コーヒー[こーひー]カップ[かっぷ]や香[こう]容器[ようき]など、現代[げんだい]の生活[せいかつ]に合[あ]う新[あたら]しい製品[せいひん]を提案[ていあん]している。これらの共通[きょうつう]点[てん]は、技術[ぎじゅつ]は守[まも]りつつ、用途[ようと]とデザイン[でざいん]を革新[かくしん]するという「守破離[しゅはり]」の精神[せいしん]である。",
      "伝統[でんとう]工芸[こうげい]の未来[みらい]は、過去[かこ]の模倣[もほう]ではなく、過去[かこ]との対話[たいわ]にある。職人[しょくにん]の技術[ぎじゅつ]は単[たん]なる遺産[いさん]ではなく、今[いま]も息[いき]づく創造[そうぞう]の手段[しゅだん]である。後継者[こうけいしゃ]育成[いくせい]の仕組[しく]みを整備[せいび]し、技術[ぎじゅつ]の経済的[けいざいてき]価値[かち]を正当[せいとう]に評価[ひょうか]する社会[しゃかい]の構築[こうちく]が急務[きゅうむ]である。また、消費者[しょうひしゃ]も「安[やす]さ」よりも「物語[ものがたり]」を買[か]う視点[してん]を持[も]つ必要[ひつよう]がある。一枚[いちまい]の漆器[しっき]、一本[いっぽん]の刃物[はもの]に込[こ]められた時間[じかん]と工夫[くふう]に想[おも]いを馳[はせ]るとき、伝統[でんとう]工芸[こうげい]は「死[し]んだ遺産[いさん]」ではなく「生[い]きた文化[ぶんか]」として、次[つぎ]の世代[せだい]へと引[ひ]き継[つ]がれていくのである。"
    ],
    translation: [
      "Japan is a country known for its diverse traditional crafts—lacquerware, ceramics, textiles, woodworking, washi paper, cutlery, and more. Rooted in the climate, soil, and materials of each region, they are the crystallization of techniques that have inherited centuries of tradition. Listing their names—Nishijin weaving of Kyoto, Wajima lacquerware, Arita ware, Aizu Hongo ware, Satsuma kiriko—would take countless entries. These craft products are not mere vessels; they embody Japan's aesthetic sensibility and artisan spirit.",
      "In 1974, the national government enacted the \"Traditional Craft Industry Promotion Act,\" designating regional specialty craft products as \"Traditional Craft Products.\" The designated items now number about 240, and the national and local governments have supported technical transmission, successor training, and demand development. A title system called \"Traditional Craftsman\" has also been established, honoring artisans with advanced skills. However, despite institutional protection, the industry as a whole continues on a shrinking trajectory.",
      "The greatest challenge is the shortage of successors. The average age of traditional craft artisans exceeds 60, and in about half of the industries more than 30% of practitioners are 65 or older. Artisan skills are acquired through years of the apprentice system, and it is not unusual for the mastery of a technique to take more than 10 years. Low income and long training periods alienate young people, and the disruption of technical transmission is becoming severe. It is not rare for the retirement of one artisan to mean the disappearance of an entire technique.",
      "The second challenge is competition with cheap products from overseas. Machine-produced products from China and Southeast Asia may resemble traditional craft products in appearance, but their materials and techniques differ. However, many consumers cannot distinguish them and tend to choose overseas products drawn by low prices. This directly erodes the market for domestically produced traditional craft products. Moreover, changes in lifestyles have also reduced demand. The decline of tatami reduced demand for tatami mats, the decline of kimono reduced demand for Nishijin weaving, and the simplification of kaiseki cuisine reduced demand for lacquerware.",
      "On the other hand, overseas appreciation of traditional crafts is growing. The admiration for Japanese art that originated in Japonism in the Meiji era continues today in Western museums and collectors. So widely has Japan's aesthetics been accepted that the word \"wabi-sabi\" is internationally understood. The increase in foreign tourists visiting Japan has aroused demand for traditional craft experiences, and visits to artisan workshops are gaining popularity in Kyoto and Kanazawa. This external interest holds the potential to lead to domestic reevaluation.",
      "Efforts toward regeneration have also begun. A textile maker in Kyoto has collaborated with young designers to develop modern stoles and bags using traditional techniques. A Wajima lacquerware artisan has commercialized smartphone cases that utilize lacquerware techniques, opening sales channels to younger demographics. Arita-ware kilns are proposing new products suited to modern life, such as coffee cups and incense containers. The common thread among these is the spirit of \"shu-ha-ri\"—protecting technique while innovating in use and design.",
      "The future of traditional crafts lies not in imitation of the past but in dialogue with it. Artisans' techniques are not mere heritage but a living means of creation. It is an urgent task to organize systems for training successors and to build a society that properly evaluates the economic value of technique. Consumers, too, must cultivate the perspective of buying \"stories\" rather than \"cheapness.\" When we let our thoughts wander to the time and ingenuity embedded in a single piece of lacquerware or a single blade, traditional crafts are passed on to the next generation not as \"dead heritage\" but as \"living culture.\""
    ],
    questions: [
      {
        q: "When was the Traditional Craft Industry Promotion Act enacted?",
        choices: ["1947", "1974", "1989", "2000"],
        answerIndex: 1,
        explanation: "The 伝統的工芸品産業振興法 was enacted in 1974, designating regional craft products as Traditional Craft Products."
      },
      {
        q: "According to the passage, what is the average age of traditional craft artisans?",
        choices: ["About 40", "About 50", "Over 60", "Over 75"],
        answerIndex: 2,
        explanation: "The text states 職人の平均年齢は60歳を超え — the average age exceeds 60."
      },
      {
        q: "Which lifestyle change is cited as having reduced demand for Nishijin weaving?",
        choices: ["The decline of tatami", "The decline of kimono", "The simplification of kaiseki cuisine", "The spread of smartphone cases"],
        answerIndex: 1,
        explanation: "The text pairs 着物の衰退 with 西陣織の需要を縮小 — kimono's decline reduced demand for Nishijin weaving."
      },
      {
        q: "What common spirit is shared by the regeneration efforts described in the passage?",
        choices: ["Pure imitation of classical forms", "The spirit of \"shu-ha-ri\" (protect, break, leave)", "Selling only to tourists", "Abandoning old techniques entirely"],
        answerIndex: 1,
        explanation: "The common thread is the 守破離 spirit — protecting technique while innovating in use and design."
      },
      {
        q: "The phrase \"despite institutional protection, the industry as a whole continues on a shrinking trajectory\" uses which N2 pattern?",
        choices: ["〜に過ぎない", "〜限り", "〜にもかかわらず (despite)", "〜次第で"],
        answerIndex: 2,
        explanation: "制度の保護にもかかわらず uses 〜にもかかわらず, meaning \"despite\" or \"in spite of.\""
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-17 — Japanese foreign policy
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-17",
    title: "日本[にほん]外交[がいこう]の戦略[せんりゃく]と課題[かだい]",
    titleReading: "にほんがいこうのせんりゃくとかだい",
    level: "N2",
    summary: "A survey of postwar Japanese foreign policy: the Yoshida Doctrine and economic-first reconstruction, Article 9 and the Self-Defense Forces, the US-Japan alliance and the Okinawa base burden, the deteriorating East Asian security environment, the 2022 security documents and counterstrike capability, the Free and Open Indo-Pacific and Quad, and the search for a new strategic equilibrium.",
    estMinutes: 11,
    tags: ["foreign policy", "security", "US-Japan alliance", "geopolitics"],
    body: [
      "戦後[せんご]日本[にほん]の外交[がいこう]は、経済[けいざい]復興[ふっこう]を最優先[さいゆうせん]とし、安全保障[あんぜんほしょう]を米国[べいこく]に依存[いぞん]する「吉田[よしだ]ドクトリン[どくりん]」と呼[よ]ばれる戦略[せんりゃく]を基軸[きじく]としてきた。元[もと]首相[しゅしょう]吉田[よしだ]茂[しげる]は、軽[けい]武装[ぶそう]と経済[けいざい]立国[りっこく]を基本[きほん]路線[ろせん]とし、冷戦[れいせん]下[か]で日本[にほん]が西側[にしがわ]陣営[じんえい]に属[ぞく]する位置[いち]を確立[かくりつ]した。この戦略[せんりゃく]は、平和[へいわ]憲法[けんぽう]第9条[じょう]が掲[かか]げる戦争[せんそう]放棄[ほうき]と整合[せいごう]的[てき]であり、戦後[せんご]の焦土[しょうど]から経済[けいざい]大国[たいこく]へと躍進[やくしん]する基盤[きばん]を提供[ていきょう]した。冷戦[れいせん]終結[しゅうけつ]後[ご]も、この基本[きほん]路線[ろせん]は本質的[ほんしつてき]に維持[いじ]され続[つづ]けてきた。",
      "日本国[にほんこく]憲法[けんぽう]第9条[じょう]は「国権[こっけん]の発動[はつどう]たる戦争[せんそう]」と「武力[ぶりょく]による威嚇[いかく]又[また]は武力[ぶりょく]の行使[こうし]」を永[とわ]久[きゅう]に放棄[ほうき]すると規定[きてい]する。しかし、現実[げんじつ]には1954年[ねん]に自衛[じえい]隊[たい]が創設[そうせつ]され、最大[さいだい]約[やく]24万人[にん]の要員[よういん]を擁[よう]する実力[じつりょく]組織[そしき]となった。この「平和[へいわ]憲法[けんぽう]と自衛[じえい]隊[たい]」の並存[へいぞん]は、長年[ながねん]にわたり憲法[けんぽう]解釈[かいしゃく]をめぐる論争[ろんそう]を生[う]み続[つづ]けた。「専守[せんしゅ]防衛[ぼうえい]」という基本[きほん]方針[ほうしん]も、武力[ぶりょく]行使[こうし]の条件[じょうけん]をめぐり、時代[じだい]の変化[へんか]と共[とも]に解釈[かいしゃく]の幅[はば]を拡大[かくだい]させてきた。安全保障[あんぜんほしょう]法制[せいほう]の整備[せいび]は、この微妙[びみょう]な均衡[きんこう]を保[たも]ちつつ新[あたら]しい脅威[きょうい]に対応[たいおう]する試行錯誤[しこうさくご]である。",
      "日米[にちべい]同盟[どうめい]は、日本[にほん]外交[がいこう]の最大[さいだい]の柱[はしら]であり続[つづ]けている。1960年[ねん]の新[しん]・日米[にちべい]安全保障[あんぜんほしょう]条約[じょうやく]調印[ちょういん]以降[いこう]、米軍[べいぐん]の駐留[ちゅうりゅう]と日本[にほん]の提供[ていきょう]する基地[きち]という交換[こうかん]の枠組[わくぐみ]が維持[いじ]されてきた。しかし、この依存[いぞん]構造[こうぞう]には代償[だいしょう]がある。沖縄[おきなわ]に集中[しゅうちゅう]する米軍[べいぐん]基地[きち]の負担[ふたん]は深刻[しんこく]な政治[せいじ]問題[もんだい]であり、在日[ざいにち]米軍[べいぐん]の事件[じけん]・事故[じこ]も社会[しゃかい]問題[もんだい]となっている。また、米国[べいこく]自身[じしん]の戦略[せんりゃく]的[てき]不確実性[ふかくじつせい]——内向[うちむ]き志向[しこう]——は、同盟[どうめい]の信頼[しんらい]性[せい]を試[ため]す新[あたら]しい変数[へんすう]となっている。",
      "近年[きんねん]、東[ひがし]アジア[あじあ]の安全保障[あんぜんほしょう]環境[かんきょう]は劇的[げきてき]に悪化[あっか]した。中国[ちゅうごく]は経済[けいざい]力[りょく]と軍事[ぐんじ]力[りょく]を急[きゅう]速[そく]に拡大[かくだい]し、東シナ[ひがししな]海[うみ]や南[みなみ]シナ[しな]海[うみ]で海洋[かいよう]進出[しんしゅつ]を強[つよ]めている。台湾[たいわん]海峡[かいきょう]の緊張[きんちょう]は高[たか]まり、尖閣[せんかく]諸島[しょとう]を巡[めぐ]る領土[りょうど]問題[もんだい]は火[ひ]種[だね]を残[のこ]した。北朝鮮[きたちょうせん]は核[かく]と弾道[だんどう]ミサイル[みさいる]の開発[かいはつ]を継続[けいぞく]し、日本[にほん]全土[ぜんど]を射程[しゃてい]に収[おさ]めるミサイル[みさいる]を配備[はいび]した。ロシア[ろしあ]によるウクライナ[うくらいな]侵攻[しんこう]は、国際[こくさい]秩序[ちつじょ]の根幹[こんかん]を揺[ゆ]るがし、「今日[きょう]のウクライナ[うくらいな]が明日[あす]の東[ひがし]アジア[あじあ]」という懸念[けねん]を広[ひろ]げた。",
      "この環境[かんきょう]の変化[へんか]に対応[たいおう]するため、2022年[ねん]12月[がつ]、政府[せいふ]は「国家安全保障[あんぜんほしょう]戦略[せんりゃく]」「国家[こっか]防衛[ぼうえい]戦略[せんりゃく]」「防衛[ぼうえい]力[りょく]整備[せいび]計画[けいかく]」の安保3文書[ぶんしょ]を改定[かいてい]した。その核心[かくしん]は、弾道[だんどう]ミサイル[みさいる]に対する「反撃[はんげき]能力[のうりょく]」の保有[ほゆう]と、防衛[ぼうえい]費[ひ]を国内[こくない]総[そう]生産[せいさん]の1%から2%へ引[ひ]き上[あ]げるという目標[もくひょう]である。これは戦後[せんご]日本[にほん]の安全保障[あんぜんほしょう]政策[せいさく]の歴史[れきし]において、概念[がいねん]的[てき]にも財政[ざいせい]的[てき]にも抜本的[ばっぽんてき]な転換[てんかん]を意味する。しかし、財源[ざいげん]を巡[めぐ]る論争[ろんそう]は未[いま]だ決着[けっちゃく]しておらず、「防衛[ぼうえい]増税[ぞうぜい]」への国民[こくみん]的[てき]合意[ごうい]形成[けいせい]は政治的[せいじてき]難題[なんだい]となっている。",
      "外交[がいこう]面[めん]では、日本[にほん]は多国間[たこくかん]枠組[わくぐみ]を重視[じゅうし]している。「自由[じゆう]で開放[かいほう]されたインド[いんど]太平洋[たいへいよう]」構想[こうそう]は、日米[にちべい]豪印[ごういん]のクアッド[くあっど]と共[とも]に、中国[ちゅうごく]の影響力[えいきょうりょく]拡大[かくだい]に対抗[たいこう]する戦略[せんりゃく]枠組[わくぐみ]である。日本[にほん]は東南[とうなん]アジア[あじあ]諸国[しょこく]連合[れんごう]との関係[かんけい]深化[しんか]を図[はか]り、フィリピン[ふぃりぴん]、ベトナム[べとなむ]、インドネシア[いんどねしあ]などとの安全保障[あんぜんほしょう]協力[きょうりょく]を強化[きょうか]している。また、北大西洋[ほくたいせいよう]条約[じょうやく]機構[きこう]との協力[きょうりょく]も拡大[かくだい]し、2023年[ねん]には首脳[しゅのう]会議[かいぎ]に出席[しゅっせき]する日本[にほん]首相[しゅしょう]も現[あらわ]れた。地球[ちきゅう]的[てき]な南[みなみ]への関与[かんよ]も強化[きょうか]し、多層的[たそうてき]な外交[がいこう]網[もう]を構築[こうちく]しつつある。",
      "日本[にほん]外交[がいこう]は戦略[せんりゃく]的[てき]岐路[きろ]に立[た]っている。憲法[けんぽう]第9条[じょう]という理念[りねん]と、現実[げんじつ]の安全保障[あんぜんほしょう]環境[かんきょう]の厳[きび]しさの間[あいだ]で、新[あたら]しい均衡[きんこう]点[てん]を模索[もさく]する必要[ひつよう]がある。「積極的[せっきょくてき]平和[へいわ]主義[しゅぎ]」という理念[りねん]は、外交[がいこう]と防衛[ぼうえい]の総合[そうごう]的[てき]戦略[せんりゃく]としての意味[いみ]を持[も]つが、その具体化[ぐたいか]には国民[こくみん]的[てき]議論[ぎろん]が欠[か]かせない。戦後[せんご]80年[ねん]近[ちか]く保[たも]たれた「軽[けい]武装[ぶそう]・経済[けいざい]立国[りっこく]」モデルは、時代[じだい]の変化[へんか]と共[とも]に再定義[さいていぎ]を迫[せま]られている。独自[どくじ]の戦略[せんりゃく]的[てき]自律[じりつ]を保[たも]ちつつ、同盟[どうめい]と国際[こくさい]協力[きょうりょく]をどう設計[せっけい]するか。これこそが、これからの日本[にほん]外交[がいこう]の核心[かくしん]課題[かだい]である。"
    ],
    translation: [
      "Postwar Japanese diplomacy has been based on the so-called \"Yoshida Doctrine,\" a strategy that prioritized economic reconstruction and relied on the United States for security. Former Prime Minister Shigeru Yoshida made light armament and economic state-building the basic line, establishing Japan's position within the Western camp during the Cold War. This strategy was consistent with the war renunciation proclaimed in Article 9 of the peace constitution, and it provided the foundation for Japan's leap from postwar ashes to an economic powerhouse. Even after the end of the Cold War, this basic line has been essentially maintained.",
      "Article 9 of the Constitution of Japan stipulates the eternal renunciation of \"war as a sovereign right of the nation\" and \"the threat or use of force.\" In reality, however, the Self-Defense Forces were established in 1954, becoming an organization with up to about 240,000 personnel. This coexistence of \"peace constitution and Self-Defense Forces\" has long continued to generate debates over constitutional interpretation. The basic policy of \"exclusively defense-oriented\" has also widened the latitude of interpretation regarding conditions for the use of force as times have changed. The development of security legislation is a trial-and-error effort to respond to new threats while maintaining this delicate balance.",
      "The Japan-US alliance has continued to be the greatest pillar of Japanese diplomacy. Since the signing of the revised Japan-US Security Treaty in 1960, the framework of an exchange—US military stationing and bases provided by Japan—has been maintained. However, this dependency structure comes at a cost. The burden of US bases concentrated in Okinawa is a serious political issue, and incidents and accidents involving US forces stationed in Japan have also become social issues. Moreover, the strategic uncertainty of the United States itself—an inward-looking orientation—has become a new variable testing the reliability of the alliance.",
      "In recent years, the security environment in East Asia has deteriorated dramatically. China has rapidly expanded its economic and military power, intensifying its maritime advance in the East China Sea and South China Sea. Tensions in the Taiwan Strait have risen, and the territorial issue over the Senkaku Islands has remained a flashpoint. North Korea has continued the development of nuclear weapons and ballistic missiles, deploying missiles that cover all of Japan. Russia's invasion of Ukraine shook the foundation of the international order, spreading the concern that \"today's Ukraine may be tomorrow's East Asia.\"",
      "To respond to this change in environment, in December 2022, the government revised the three security documents—the National Security Strategy, the National Defense Strategy, and the Defense Buildup Program. At their core is the possession of \"counterstrike capability\" against ballistic missiles and the goal of raising defense spending from 1% to 2% of gross domestic product. This represents a fundamental conceptual and fiscal turnaround in postwar Japan's security policy. However, debate over funding sources has yet to be settled, and forming national consensus on \"defense tax increases\" has become a political challenge.",
      "On the diplomatic front, Japan places importance on multilateral frameworks. The vision of a \"Free and Open Indo-Pacific,\" together with the Quad comprising Japan, the US, Australia, and India, is a strategic framework to counter the expansion of Chinese influence. Japan is seeking to deepen its relationship with the Association of Southeast Asian Nations and is strengthening security cooperation with the Philippines, Vietnam, Indonesia, and others. Cooperation with the North Atlantic Treaty Organization has also expanded, and in 2023 a Japanese prime minister also appeared at its summit. Engagement with the Global South is also being strengthened, building a multi-layered diplomatic network.",
      "Japanese diplomacy stands at a strategic crossroads. Between the ideal of Article 9 and the harsh reality of the security environment, a new point of equilibrium must be sought. The ideal of \"proactive pacifism\" carries meaning as a comprehensive strategy of diplomacy and defense, but its concrete realization requires national debate. The \"light armament and economic state-building\" model that has persisted for nearly 80 years since the war is being forced to redefine itself with changes in the times. How to design alliances and international cooperation while preserving one's own strategic autonomy—this is the core challenge of Japanese diplomacy going forward."
    ],
    questions: [
      {
        q: "What is the postwar Japanese diplomatic strategy known as, that prioritized economic reconstruction?",
        choices: ["The Yoshida Doctrine", "The Abe Doctrine", "The Miyazawa Doctrine", "The Yoshikawa Doctrine"],
        answerIndex: 0,
        explanation: "The strategy prioritizing economic reconstruction and US security dependence is called the 吉田ドクトリン (Yoshida Doctrine)."
      },
      {
        q: "According to the passage, when were the Self-Defense Forces established?",
        choices: ["1947", "1954", "1960", "2022"],
        answerIndex: 1,
        explanation: "The 自衛隊 were created in 1954, despite Article 9's renunciation of war."
      },
      {
        q: "What is the core change in the 2022 revision of the three security documents?",
        choices: ["Abolishing the Self-Defense Forces", "Possessing counterstrike capability and raising defense spending to 2% of GDP", "Leaving the US-Japan alliance", "Reducing the defense budget to 0.5% of GDP"],
        answerIndex: 1,
        explanation: "The documents introduce 反撃能力 and the goal of raising defense spending to 2% of GDP from 1%."
      },
      {
        q: "Which of the following is named in the passage as a security concern in East Asia?",
        choices: ["Russian expansion into Africa", "North Korea's nuclear and missile development covering all of Japan", "Brazil's military buildup", "India's naval retreat"],
        answerIndex: 1,
        explanation: "The text notes that 北朝鮮は核と弾道ミサイルの開発を継続 and deploys missiles covering all of Japan."
      },
      {
        q: "The phrase \"preserving one's own strategic autonomy, while designing alliances and international cooperation\" uses which N2 pattern?",
        choices: ["〜に過ぎない", "〜限り", "〜つつ (while doing)", "〜に違いない"],
        answerIndex: 2,
        explanation: "戦略的自律を保ちつつ、同盟と国際協力をどう設計するか uses 〜つつ (while doing)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-18 — Immigration reform
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-18",
    title: "移民[いみん]政策[せいさく]の転換[てんかん]と日本[にほん]社会[しゃかい]",
    titleReading: "いみんせいさくのてんかんとにほんしゃかい",
    level: "N2",
    summary: "An examination of Japan's immigration policy in flux: the historically strict stance, the demographic pressure that has made further closure untenable, the 1990 nikkeijin opening, the 2019 Specified Skilled Worker visa, the contested Technical Intern Training Program and its 2024 reform, integration challenges, and the fundamental value choice Japan now faces.",
    estMinutes: 10,
    tags: ["immigration", "demographics", "labor", "policy"],
    body: [
      "日本[にほん]は長年[ながねん]、世界[せかい]でも類[るい]を見[み]ないほど厳格[げんかく]な移民[いみん]政策[せいさく]を維持[いじ]してきた国[くに]である。他[ほか]の先進[せんしん]国[こく]が労働[ろうどう]力[りょく]不足[ぶそく]を補[おぎな]うために移民[いみん]受入[うけいれ]を進[すす]める中[なか]、日本[にほん]は「単一[たんいつ]民族[みんぞく]国家[こっか]」という神話[しんわ]を盾[たて]に、外国人[がいこくじん]労働者[ろうどうしゃ]の定住[ていじゅう]を回避[かいひ]してきた。1990年[ねん]に日系[にっけい]人[じん]に限[かぎ]って就労[しゅうろう]ビザ[びざ]を緩和[かんわ]した以外[いがい]、本格的[ほんかくてき]な労働[ろうどう]移民[いみん]は認[みと]めない建前[たてまえ]を堅持[けんじ]した。しかし、人口[じんこう]動態[どうたい]の変化[へんか]は、この政策[せいさく]の持続[じぞく]可能性[かのうせい]を根本的[こんぽんてき]に揺[ゆる]がしている。",
      "総務省[そうむしょう]の統計[とうけい]によれば、日本[にほん]の人口[じんこう]は2008年[ねん]のピーク時[じ]の1億[おく]2,808万人[にん]から減少[げんしょう]に転[てん]じ、2023年[ねん]には1億[おく]2,435万人[にん]まで縮小[しゅくしょう]した。このままでは2050年代[ねんだい]には1億[おく]人[にん]を割[わ]るとの予測[よそく]もある。労働[ろうどう]力[りょく]人口[じんこう]の減少[げんしょう]は経済[けいざい]成長[せいちょう]の足枷[あしかせ]であり、建設[けんせつ]、介護[かいご]、農業[のうぎょう]、飲食[いんしょく]サービス[さーびす]など、多[おお]くの産業[さんぎょう]で深刻[しんこく]な人手[ひとで]不足[ぶそく]が報告[ほうこく]されている。ある試算[しさん]では、2040年[ねん]には約[やく]1,100万人[にん]の労働[ろうどう]力[りょく]不足[ぶそく]が生[しょう]じるという。この現実[げんじつ]の前[まえ]に、「移民[いみん]なき労働[ろうどう]力[りょく]補充[ほじゅう]」という政策[せいさく]は限界[げんかい]に達[たっ]している。",
      "1989年[ねん]の入国[にゅうこく]管理[かんり]法[ほう]改正[かいせい]（1990年[ねん]施行[しこう]）は、実質[じっしつ]的[てき]に移民[いみん]政策[せいさく]を解禁[かいきん]する最初[さいしょ]の動[うご]きであった。南米[なんべい]（主[おも]にブラジル[ぶらじる]やペルー[ぺるー]）の日系[にっけい]人[じん]に就労[しゅうろう]ビザ[びざ]を無[む]制限[せいげん]で付与[ふよ]し、製造業[せいぞうぎょう]の労働[ろうどう]力[りょく]不足[ぶそく]を補[おぎな]う狙[ねら]いであった。一時[いちじ]的[てき]に30万人[にん]を超[こ]える日系[にっけい]人[じん]が来日[らいにち]したが、2008年[ねん]のリーマン[りーまん]・ショック[しょっく]後[ご]には大[おお]規模[きぼ]な帰国[きこく]が進[すす]んだ。この経験[けいけん]は、経済[けいざい]変動[へんどう]に脆弱[ぜいじゃく]な労働[ろうどう]力[りょく]政策[せいさく]の限界[げんかい]を露呈[ろてい]した。",
      "2019年[ねん]、政府[せいふ]は「特定[とくてい]技能[ぎのう]」ビザ[びざ]を創設[そうせつ]し、本格的[ほんかくてき]に外国人[がいこくじん]労働者[ろうどうしゃ]の受入[うけいれ]を始[はじ]めた。介護[かいご]、宿泊[しゅくはく]、農業[のうぎょう]、飲食[いんしょく]サービス[さーびす]、建設[けんせつ]、造船[ぞうせん]など14分野[ぶんや]で、一定[いってい]の技能[ぎのう]と日本語[にほんご]能力[のうりょく]を持[も]つ外国人[がいこくじん]に就労[しゅうろう]を認[みと]める仕組[しく]みである。「1号[ごう]」は最大[さいだい]5年[ねん]、「2号[ごう]」は家族[かぞく]帯同[たいどう]と無期限[むきげん]更新[こうしん]を認[みと]める点[てん]で、実質[じっしつ]的[てき]な移民[いみん]制度[せいど]への転換[てんかん]であった。政府[せいふ]は当初[とうしょ]、2025年[ねん]までに最大[さいだい]34万人[にん]の受入[うけいれ]を見込[みこ]んだが、実際[じっさい]の取得[しゅとく]者[しゃ]数[すう]は伸[の]び悩[なや]み、政策[せいさく]の不備[ふび]が指摘[してき]されている。",
      "一方[いっぽう]で、「技能[ぎのう]実習[じっしゅう]制度[せいど]」も長年[ながねん]にわたり論[ろん]争[そう]の的[まと]であった。1993年[ねん]に開始[かいし]されたこの制度[せいど]は、発展[はってん]途上[とじょう]国[こく]への技術[ぎじゅつ]移転[いてん]を名目[めいもく]としながら、実態[じったい]は低[てい]賃金[ちんぎん]労働[ろうどう]力[りょく]の供給[きょうきゅう]源[げん]であった。監視[かんし]体制[たいせい]も不十分[ふじゅうぶんであり、失踪[しっそう]や人権[じんけん]侵害[しんがい]が後[あと]を絶[た]たなかった。2024年[ねん]には「技能[ぎのう]実習[じっしゅう]」の廃止[はいし]と「育成[いくせい]就労[しゅうろう]」制度[せいど]への移行[いこう]を含[ふく]む改正[かいせい]が成立[せいりつ]し、監理[かんり]体制[たいせい]の強化[きょうか]が図[はか]られた。しかし、根本的[こんぽんてき]な労働[ろうどう]市場[しじょう]の改革[かいかく]には至[いた]っていない。",
      "移民[いみん]の定住[ていじゅう]には、単[たん]なる労働[ろうどう]力[りょく]受入[うけいれ]を超[こ]えた統合[とうごう]政策[せいさく]が不可欠[ふかつけつ]である。日本語[にほんご]教育[きょういく]、住居[じゅうきょ]確保[かくほ]、子[こ]ども教育[きょういく]、医療[いりょう]アクセス[あくせす]など、生活[せいかつ]基盤[きばん]の整備[せいび]が急務[きゅうむ]である。しかし、現状[げんじょう]は不十分[ふじゅうぶん]である。自治体[じちたい]主導[しゅどう]の多文化[たぶんか]共生[せいめい]事業[じぎょう]は散発[さんぱつ]的[てき]で、地方[ちほう]ごとの格差[かくさ]が大[おお]きい。差別[さべつ]や偏見[へんけん]も依然[いぜん]として根強[ねづよ]く、外国人[がいこくじん]向け[むけ]の入居[にゅうきょ]拒否[きょひ]や職場[しょくば]での嫌[いや]がらせが報告[ほうこく]され続[つづ]けている。移民[いみん]を「労働[ろうどう]力[りょく]」としてのみ捉[とら]え、社会[しゃかい]の構成員[こうせいいん]として包摂[ほうせき]しない姿勢は、長期的[ちょうきてき]な社会[しゃかい]分断[ぶんだん]を招[まね]きかねない。",
      "日本[にほん]は、移民[いみん]を巡[めぐ]る根本[こんぽん]的[てき]な価値[かち]選択[せんたく]を迫[せま]られている。「日本人[にほんじん]」という同質[どうしつ]的[てき]国民[こくみん]概念[がいねん]を維持[いじ]するのか、それとも多文化[たぶんか]共生[せいめい]を新[あたら]しい国家[こっか]像[ぞう]として受容[じゅよう]するのか。ドイツ[どいつ]やカナダ[かなだ]のような移民[いみん]国家[こっか]の経験[けいけん]に学[まな]びつつ、日本[にほん]独自[どくじ]の道[みち]を設計[せっけい]する必要[ひつよう]がある。少子[しょうし]高齢化[こうれいか]という現実[げんじつ]は、移民[いみん]政策[せいさく]を抜本[ばっぽん]的[てき]に見直[みなお]す圧力[あつりょく]となっている。後[のち]の世代[せだい]に開[ひら]かれた、持続[じぞく]可能[かのう]な社会[しゃかい]を残[のこ]すためにも、今[いま]こそ勇気[ゆうき]ある決断[けつだん]が求[もと]められているのである。"
    ],
    translation: [
      "Japan has long maintained an immigration policy as strict as few others in the world. While other developed countries have advanced immigration intake to remedy labor shortages, Japan has shielded itself behind the myth of a \"homogeneous nation-state\" and avoided the settlement of foreign workers. Aside from relaxing work visas for people of Japanese descent in 1990, Japan maintained the facade of not accepting genuine labor immigration. However, demographic changes are fundamentally shaking the sustainability of this policy.",
      "According to Ministry of Internal Affairs statistics, Japan's population peaked at 128.08 million in 2008 and has since declined, shrinking to 124.35 million by 2023. Projections suggest it may fall below 100 million by the 2050s. The decline in the working-age population is a drag on economic growth, and severe labor shortages are reported in many industries—construction, long-term care, agriculture, food service, and others. One estimate suggests that by 2040 there will be a labor shortage of about 11 million. Faced with this reality, the policy of \"labor supplementation without immigration\" has reached its limits.",
      "The 1989 revision of the Immigration Control Act (enforced in 1990) was the first move to effectively open up immigration policy. It granted unlimited work visas to people of Japanese descent (mainly in Brazil and Peru) in South America, aiming to fill the labor shortage in manufacturing. At one time more than 300,000 nikkeijin came to Japan, but after the 2008 Lehman shock, large-scale returns advanced. This experience exposed the vulnerability of a labor policy to economic fluctuations.",
      "In 2019, the government created the \"Specified Skilled Worker\" visa and began accepting foreign workers in earnest. The system allows foreigners with certain skills and Japanese language ability to work in 14 fields including nursing care, lodging, agriculture, food service, construction, and shipbuilding. \"Category 1\" allows up to five years, and \"Category 2\" permits family accompaniment and indefinite renewal—a transition to what is effectively an immigration system. The government initially projected intake of up to 340,000 by 2025, but the actual number of recipients has stalled, and deficiencies in the policy have been pointed out.",
      "On the other hand, the \"Technical Intern Training Program\" has long been a subject of controversy. Launched in 1993 under the nominal aim of technology transfer to developing countries, it was in practice a source of low-wage labor. The monitoring system was also insufficient, and disappearances and human-rights violations persisted. In 2024, a revision was enacted that included the abolition of the technical intern program and the transition to a \"training and employment\" system, aimed at strengthening the supervisory framework. However, it has not led to a fundamental reform of the labor market.",
      "For immigrants to settle, integration policy that goes beyond mere labor intake is indispensable. The development of living foundations—Japanese-language education, housing security, education for children, and medical access—is urgent. However, the present situation is insufficient. Multicultural coexistence projects led by local governments are sporadic, and disparities across regions are large. Discrimination and prejudice remain deeply rooted, and reports continue of rental refusals and workplace harassment against foreigners. The attitude of treating immigrants merely as \"labor\" and not including them as members of society could invite long-term social fragmentation.",
      "Japan is being forced into a fundamental value choice regarding immigration. Will it maintain the homogeneous national concept of \"Japanese people,\" or will it embrace multicultural coexistence as a new national image? While learning from the experiences of immigration countries such as Germany and Canada, Japan must design its own path. The reality of the declining birthrate and aging population has become pressure to fundamentally revise immigration policy. In order to leave behind a sustainable and open society for future generations, courageous decisions are now required."
    ],
    questions: [
      {
        q: "According to the passage, when did Japan's population peak?",
        choices: ["1990", "2008", "2019", "2023"],
        answerIndex: 1,
        explanation: "The text states the population peaked in 2008 at 128.08 million and has since declined."
      },
      {
        q: "What does the passage project as the labor shortage by 2040?",
        choices: ["About 1.1 million", "About 11 million", "About 34 million", "About 110 million"],
        answerIndex: 1,
        explanation: "One estimate cited suggests 約1,100万人 — about 11 million workers short by 2040."
      },
      {
        q: "What was the actual nature of the Technical Intern Training Program, according to the passage?",
        choices: ["A genuine technology-transfer program", "A source of low-wage labor despite its nominal aim", "A scholarship program for foreign students", "An assimilation program for permanent residents"],
        answerIndex: 1,
        explanation: "The text says the program was nominally for technology transfer but 実態は低賃金労働力の供給源 — a source of low-wage labor."
      },
      {
        q: "Which of the following is named as a challenge of immigrant settlement?",
        choices: ["Japanese-language education and housing access", "Excessive voting rights for foreigners", "Mandatory military service", "Free higher education for all"],
        answerIndex: 0,
        explanation: "The passage lists 日本語教育、住居確保、子ども教育、医療アクセス as urgent integration needs."
      },
      {
        q: "The phrase \"the attitude could invite long-term social fragmentation\" uses which N2 pattern?",
        choices: ["〜に過ぎない", "〜限り", "〜かねない (might / could)", "〜に違いない"],
        answerIndex: 2,
        explanation: "長期的な社会分断を招きかねない uses 〜かねない, meaning \"might / could (lead to)\" with a negative nuance."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-19 — The future of energy
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-19",
    title: "日本[にほん]のエネルギー[えねるぎー]未来[みらい]戦略[せんりゃく]",
    titleReading: "にほんのえねるぎーみらいせんりゃく",
    level: "N2",
    summary: "A review of Japan's energy future after Fukushima: the 2011 nuclear shutdown, surging fossil-fuel dependence and LNG imports, the FIT-driven solar boom and the lag in wind and geothermal, the 2017 Hydrogen Basic Strategy, the 2050 carbon-neutrality declaration and Green Growth Strategy, the divisive nuclear-restart debate, and the multi-option energy mix Japan must design.",
    estMinutes: 11,
    tags: ["energy", "nuclear", "renewable", "climate"],
    body: [
      "2011年[ねん]3月[がつ]11日[にち]、東日本[ひがしにほん]大震災[おおしんさい]とそれに伴[ともな]う東京[とうきょう]電力[でんりょく]福島[ふくしま]第一[だいいち]原子力[げんしりょく]発電所[はつでんしょ]事故[じこ]は、日本[にほん]のエネルギー[えねるぎー]政策[せいさく]を根本的[こんぽんてき]に変[か]えた。事故[じこ]前[まえ]、日本[にほん]は電力[でんりょく]の約[やく]30%を原子力[げんしりょく]に依存[いぞん]しており、2050年[ねん]にはその割合[わりあい]を50%にまで拡大[かくだい]する計画[けいかく]さえあった。しかし、事故[じこ]後[ご]、政府[せいふ]はすべての原発[げんぱつ]の運転[うんてん]停止[ていし]を決定[けってい]し、一時[いちじ]的[てき]に国内[こくない]の電力[でんりょく]供給[きょうきゅう]は0%の原発[げんぱつ]依存[いぞん]となった。この決断[けつだん]は、エネルギー[えねるぎー]安全保障[あんぜんほしょう]、経済[けいざい]効率[こうりつ]、環境[かんきょう]負荷[ふか]という「エネルギー[えねるぎー]・トリレンマ[とりれんま]」のバランスを一変[いっぺん]させた。",
      "原発[げんぱつ]の停止[ていし]は、化石[かせき]燃料[ねんりょう]への依存[いぞん]を急[きゅう]激[げき]に増大[ぞうだい]させた。2011年[ねん]以前[いぜん]は約[やく]60%だった化石[かせき]燃料[ねんりょう]の比率[ひりつ]は、2014年[ねん]には88%に跳[は]ね上[あ]がった。日本[にほん]は資源[しげん]小国[しょうこく]であり、石油[せきゆ]、天然[てんねん]ガス[がす]、石炭[せきたん]の大部分[だいぶぶん]を輸入[ゆにゅう]に頼[たよ]っている。液化[えきか]天然[てんねん]ガス[がす]の輸入[ゆにゅう]量[りょう]は世界[せかい]最大[さいだい]であり、燃料[ねんりょう]代[だい]の増加[ぞうか]は電気[でんき]料金[りょうきん]の値上[ねあ]がりとして家庭[かてい]と企業[きぎょう]に直結[ちょっけつ]した。2011年[ねん]から2014年[ねん]にかけて、家庭[かてい]用[よう]電力[でんりょく]料金[りょうきん]は約[やく]20%上昇[じょうしょう]し、電力[でんりょく]会社[がいしゃ]の経営[けいえい]も圧迫[あっぱく]された。資源[しげん]依存[いぞん]の脆弱性[ぜいじゃくせい]は、エネルギー[えねるぎー]安全保障[あんぜんほしょう]の最大[さいだい]の懸念[けねん]となった。",
      "再生[さいせい]可能[かのう]エネルギー[えねるぎー]の導入[どうにゅう]は、この危機[きき]の中[なか]で加速[かそく]した。2012年[ねん]に導入[どうにゅう]された固定[こてい]価格[かかく]買取[かいとり]制度[せいど]は、再生[さいせい]可能[かのう]エネルギー[えねるぎー]の電力[でんりょく]を固定[こてい]価格[かかく]で買い取[かいと]る仕組[しく]みで、太陽[たいよう]光[こう]発電[はつでん]の急[きゅう]激[げき]な普及[ふきゅう]を促[うなが]した。2010年度[ねんど]には電力[でんりょく]供給[きょうきゅう]の1%未満[みまん]だった太陽[たいよう]光[こう]発電[はつでん]は、2022年度[ねんど]には約[やく]10%に達[たっ]した。一方[いっぽう]、風力[ふうりょく]発電[はつでん]、地熱[ちねつ]発電[はつでん]、バイオ[ばいお]マス[ます]発電[はつでん]の導入[どうにゅう]は欧米[おうべい]に比[くら]べ遅[おく]れており、洋上[ようじょう]風力[ふうりょく]などは環境[かんきょう]評価[ひょうか]手続[てつづ]きの長期化[ちょうきか]で計画[けいかく]が難航[なんこう]している。地熱[ちねつ]資源[しげん]は世界[せかい]第三[だいさん]位[い]の埋蔵[まいぞう]量[りょう]を持ちながら、国立[こくりつ]公園[こうえん]内[ない]の開発[かいはつ]制限[せいげん]も活用[かつよう]を妨[さまた]げている。",
      "日本[にほん]独自[どくじ]の戦略[せんりゃく]として注目[ちゅうもく]されるのが「水素[すいそ]社会[しゃかい]」構想[こうそう]である。2017年[ねん]、政府[せいふ]は世界[せかい]で初[はじ]めて「水素[すいそ]基本[きほん]戦略[せんりゃく]」を策定[さくてい]した。水素[すいそ]は燃焼[ねんしょう]時に二酸化[にさんか]炭素[たんそ]を排出[はいしゅつ]しない「究極[きゅうきょく]のクリーン[くりーん]エネルギー[えねるぎー]」と位置[いち]づけられ、燃料[ねんりょう]電池[でんち]自動車[じどうしゃ]の普及[ふきゅう]、家庭[かてい]用[よう]燃料[ねんりょう]電池[でんち]の拡大[かくだい]、水素[すいそ]発電[はつでん]の実証[じっしょう]などが推進[すいしん]された。2023年[ねん]には改正[かいせい]水素[すいそ]基本[きほん]戦略[せんりゃく]が策定[さくてい]され、2040年[ねん]に水素[すいそ]需要[じゅよう]を現在[げんざい]の6倍[ばい]に拡大[かくだい]する目標[もくひょう]も掲[かか]げた。しかし、水素[すいそ]の製造[せいぞう]・輸送[ゆそう]・貯蔵[ちょぞう]インフラ[いんふら]の整備[せいび]は巨額[きょがく]の投資[とうし]を要[よう]し、経済的[けいざいてき]採算性[さいさんせい]の確立[かくりつ]は依然[いぜん]として途上[とじょう]である。",
      "2020年[ねん]10月[がつ]、菅[すが]義偉[よしひで]首相[しゅしょう]（当時[とうじ]）は所信[しょしん]表明[ひょうめい]演説[えんぜつ]で、2050年[ねん]までに温室[おんしつ]効果[こうか]ガス[がす]の排出[はいしゅつ]をゼロにする「カーボン[かーぼん]・ニュートラル[にゅーとらる]」を宣言[せんげん]した。これは地球[ちきゅう]規模[きぼ]の気候[きこう]変動[へんどう]対策[たいさく]への日本[にほん]の責任[せきにん]的[てき]関与[かんよ]を示[しめ]す一方[いっぽう]で、国内[こくない]産業[さんぎょう]の構造[こうぞう]転換[てんかん]を迫[せま]す野心的[やしんてき]な目標[もくひょう]であった。2021年[ねん]には「グリーン[ぐりーん]成長[せいちょう]戦略[せんりゃく]」が策定[さくてい]され、14分野[ぶんや]で官民[かんみん]投資[とうし]目標[もくひょう]が設定[せってい]された。特に自動車[じどうしゃ]、鉄鋼[てっこう]、化学[かがく]など、これまで温室[おんしつ]効果[こうか]ガス[がす]の多[おお]排出[はいしゅつ]産業[さんぎょう]とされた分野[ぶんや]での脱[だつ]炭素[たんそ]化[か]技術[ぎじゅつ]開発[かいはつ]が急務[きゅうむ]となっている。",
      "原子力[げんしりょく]発電[はつでん]の再開[さいかい]をめぐる議論[ぎろん]は、依然[いぜん]として社会[しゃかい]を二分[にぶん]する。政府[せいふ]は2023年[ねん]、最長[さいちょう]で60年[ねん]の原発[げんぱつ]稼働[かどう]を可能[かのう]にする制度[せいど]改正[かいせい]を決定[けってい]し、次世代[じせだい]革新[かくしん]炉[ろ]の開発[かいはつ]にも言及[げんきょう]した。一方[いっぽう]、福島[ふくしま]の経験[けいけん]は安全[あんぜん]性[せい]への不信[ふしん]感[かん]を深[ふか]め、避難[ひなん]指示[しじ]区域[くいき]の復興[ふっこう]は未[いま]だ途上[とじょう]である。原発[げんぱつ]の必要性[ひつようせい]を訴[うった]える経済界[けいざいかい]と、脱[だつ]原発[げんぱつ]を求[もと]める市民[しみん]運動[うんどう]の立場[たちば]は平行[へいこう]線[せん]を辿[たど]っている。この対立[たいりつ]は単[たん]なる政策[せいさく]選択[せんたく]を超[こ]え、リスクと便益[べんえき]の価値[かち]判断[はんだん]をめぐる深[ふか]い分断[ぶんだん]となっている。",
      "日本[にほん]のエネルギー[えねるぎー]未来[みらい]を設計[せっけい]するには、複数[ふくすう]の選択[せんたく]肢[し]を戦略[せんりゃく]的[てき]に組み合[くみあ]わせる必要[ひつよう]がある。再生[さいせい]可能[かのう]エネルギー[えねるぎー]の主力[しゅりょく]電源[でんげん]化[か]、水素[すいそ]とアンモニア[あんもにあ]の燃焼[ねんしょう]技術[ぎじゅつ]、原子力[げんしりょく]の一定[いってい]的[てき]役割[やくわり]、そして需要[じゅよう]側[がわ]の省エネ[しょうえね]と電化[でんか]——これらは相互[そうご]に補完[ほかん]し合[あ]う要素[ようそ]である。また、エネルギー[えねるぎー]の地産[ちさん]地消[ちしょう]を通[つう]じた地域[ちいき]回復力[かいふくりょく]の強化[きょうか]、分散[ぶんさん]型[がた]電源[でんげん]網[もう]の構築[こうちく]も欠[か]かせない。結論[けつろん]として、エネルギー[えねるぎー]政策[せいさく]は環境[かんきょう]と経済[けいざい]、安全[あんぜん]と独立性[どくりつせい]を同時[どうじ]に達成[たっせい]する総合[そうごう]戦略[せんりゃく]でなければならない。後[のち]の世代[せだい]に持続[じぞく]可能[かのう]な地球[ちきゅう]を託[たく]すためにも、今[いま]の選択[せんたく]が未来[みらい]を決[き]めるのである。"
    ],
    translation: [
      "On March 11, 2011, the Great East Japan Earthquake and the resulting TEPCO Fukushima Daiichi nuclear accident fundamentally changed Japan's energy policy. Before the accident, Japan relied on nuclear power for about 30% of its electricity, and there were even plans to expand that share to 50% by 2050. However, after the accident, the government decided to halt the operation of all nuclear plants, and for a time the country's electricity supply became 0% dependent on nuclear power. This decision completely changed the balance of the \"energy trilemma\"—energy security, economic efficiency, and environmental load.",
      "The halt of nuclear plants caused a dramatic increase in dependence on fossil fuels. The share of fossil fuels, about 60% before 2011, jumped to 88% in 2014. Japan is a resource-poor country and relies on imports for most of its oil, natural gas, and coal. It is the world's largest importer of liquefied natural gas, and the rise in fuel costs was directly linked to higher electricity prices for households and companies. From 2011 to 2014, residential electricity rates rose by about 20%, squeezing the management of power companies. The fragility of resource dependency became the biggest concern for energy security.",
      "The introduction of renewable energy accelerated amid this crisis. The feed-in tariff system introduced in 2012, which purchases renewable energy electricity at fixed prices, prompted the rapid spread of solar power generation. Solar power, which accounted for less than 1% of electricity supply in fiscal 2010, reached about 10% by fiscal 2022. On the other hand, the introduction of wind, geothermal, and biomass power lags behind the West, and offshore wind, for example, has stalled in planning due to prolonged environmental assessment procedures. Although geothermal resources hold the third-largest reserves in the world, restrictions on development within national parks also hamper their utilization.",
      "As a uniquely Japanese strategy, attention is being drawn to the vision of a \"hydrogen society.\" In 2017, the government formulated the world's first \"Hydrogen Basic Strategy.\" Hydrogen was positioned as the \"ultimate clean energy\" that does not emit carbon dioxide when combusted, and the spread of fuel cell vehicles, the expansion of residential fuel cells, and the demonstration of hydrogen power generation were promoted. In 2023, a revised Hydrogen Basic Strategy was formulated, also setting a goal to expand hydrogen demand sixfold from current levels by 2040. However, the development of hydrogen production, transport, and storage infrastructure requires enormous investment, and the establishment of economic viability remains a work in progress.",
      "In October 2020, then-Prime Minister Yoshihide Suga declared in his policy speech \"carbon neutrality\"—bringing greenhouse gas emissions to zero by 2050. While demonstrating Japan's responsible engagement in global climate change countermeasures, this was also an ambitious goal forcing structural transformation of domestic industry. In 2021, a \"Green Growth Strategy\" was formulated, setting public-private investment targets in 14 fields. Decarbonization technology development became urgent, especially in fields such as automobiles, steel, and chemicals, which had previously been regarded as high-emission industries.",
      "Debate over the resumption of nuclear power generation continues to divide society. In 2023, the government decided on a regulatory revision enabling nuclear plant operation for up to 60 years, and also referenced the development of next-generation innovative reactors. On the other hand, the experience of Fukushima deepened distrust over safety, and recovery of the evacuation zones remains a work in progress. The stance of the business community, which calls for the necessity of nuclear power, and that of citizens' movements demanding a nuclear phase-out, run on parallel lines. This conflict has gone beyond mere policy choice and become a deep division over value judgments of risk and benefit.",
      "To design Japan's energy future, multiple options must be strategically combined. Making renewable energy the main power source, hydrogen and ammonia combustion technology, a certain role for nuclear power, and energy conservation and electrification on the demand side—these are mutually complementary elements. Strengthening regional resilience through local production and consumption of energy, and building distributed power-source networks, are also indispensable. In conclusion, energy policy must be a comprehensive strategy that simultaneously achieves environment and economy, safety and independence. The choices made now determine the future, in order to entrust a sustainable planet to coming generations."
    ],
    questions: [
      {
        q: "According to the passage, what share of Japan's electricity came from nuclear power before the 2011 accident?",
        choices: ["About 10%", "About 30%", "About 50%", "About 88%"],
        answerIndex: 1,
        explanation: "The text states 約30%を原子力に依存 — about 30% reliance on nuclear power before the accident."
      },
      {
        q: "What did the share of fossil fuels reach in 2014, after the nuclear shutdown?",
        choices: ["60%", "75%", "88%", "100%"],
        answerIndex: 2,
        explanation: "The fossil-fuel share jumped to 88% in 2014, up from about 60% before 2011."
      },
      {
        q: "What is the goal for hydrogen demand by 2040, set in the revised Hydrogen Basic Strategy?",
        choices: ["Twice the current level", "Three times the current level", "Six times the current level", "Ten times the current level"],
        answerIndex: 2,
        explanation: "The 2023 revised strategy sets a goal of 現在の6倍に拡大 — six times the current level by 2040."
      },
      {
        q: "When did Prime Minister Suga declare the 2050 carbon-neutrality target?",
        choices: ["October 2017", "October 2020", "October 2022", "October 2023"],
        answerIndex: 1,
        explanation: "Suga declared カーボン・ニュートラル in his policy speech in October 2020."
      },
      {
        q: "The phrase \"the introduction of wind, geothermal, and biomass power lags behind the West\" uses which N2 pattern?",
        choices: ["〜に比べ (compared to)", "〜限り", "〜に違いない", "〜次第で"],
        answerIndex: 0,
        explanation: "欧米に比べ遅れており uses 〜に比べ, meaning \"compared to\" — the standard N2 comparative pattern."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n2-20 — A whistleblower story
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n2-20",
    title: "ある内部[ないぶ]告発[こくはつ]が変[か]えたもの",
    titleReading: "あるないぶこくはつがかえたもの",
    level: "N2",
    summary: "A composite whistleblower narrative: a mid-career accountant uncovers a multi-year fictitious-transaction scheme, her failed internal report to the ethics committee, her external report to the Securities and Exchange Surveillance Commission, the personal retaliation and forced resignation, the 2020 Whistleblower Protection Act revision that followed, and the cultural shift Japan still needs.",
    estMinutes: 10,
    tags: ["whistleblower", "corporate governance", "ethics", "law"],
    body: [
      "2019年[ねん]の春[はる]、大手[おおて]製造業[せいぞうぎょう]の経理[けいり]部門[ぶもん]に勤[つと]める女性[じょせい]が、社内[しゃない]の帳簿[ちょうぼ]に不可解[ふかかい]な数字[すうじ]を見[み]つけた。彼女[かのじょ]は10年[ねん]以上[いじょう]この会社[かいしゃ]で勤務[きんむ]する中堅[ちゅうけい]社員[しゃいん]で、これまで一度[いちど]も不正[ふせい]を見[み]たことがなかった。海外[かいがい]子会社[こがいしゃ]からの送[おく]り状[じょう]と国内[こくない]の仕訳[しわけ]データを照合[しょうごう]していた時[とき]、数億[すうおく]円[えん]の売上[うりあげ]が架空[かくう]の取引[とりひき]として計上[けいじょう]されている疑[うたが]いに気[き]づいた。最初[さいしょ]は「自分[じぶん]の見間違[みまちが]えかもしれない」と思[おも]った彼女[かのじょ]は、何度[なんど]も確認[かくにん]を重[かさ]ね、最終[さいしゅう]的[てき]に異常[いじょう]を確信[かくしん]するに至[いた]った。",
      "深入[ふかび]りすればするほど、事態[じたい]は複雑[ふくざつ]化[か]した。彼女[かのじょ]が追[お]った架空[かくう]取引[とりひき]は、過去[かこ]3年[ねん]間[かん]にわたり、海外[かいがい]子会社[こがいしゃ]を通[つう]じた在庫[ざいこ]の架空[かくう]購入[こうにゅう]と架空[かくう]売上[うりあげ]を繰[く]り返[かえ]す手口[てぐち]であった。粗利[あらり]利益[りえき]率[りつ]の低下[ていか]を隠蔽[いんぺい]するため、四半期[しきゅう]ごとに架空[かくう]の取引[とりひき]で利益[りえき]を水増[みずま]しし、翌[よく]期[き]に取消[とりけし]す「往復[おうふく]取引[とりひき]」の痕跡[こんせき]が多[おお]数[すう]見[み]つかった。関係[かんけい]する幹部[かんぶ]の名前[なまえ]も浮上[ふじょう]した。彼女[かのじょ]は悩[なや]んだ末[すえ]、まず社内[しゃない]の倫理[りんり]委員会[いいんかい]に内部[ないぶ]通報[つうほう]を行[おこな]うことを決意[けつい]した。「会社[かいしゃ]は自[みずか]ら問題[もんだい]を是正[ぜせい]すべきだ」という考[かんが]えがあった。",
      "しかし、社内[しゃない]通報[つうほう]は期待[きたい]に反[はん]する結果[けっか]に終[お]わった。倫理[りんり]委員会[いいんかい]の担当[たんとう]役員[やくいん]は「君[きみ]の気[き]のせいだ」「会計[かいけい]基準[きじゅん]の解釈[かいしゃく]の相違[そうい]に過[す]ぎない」と彼女[かのじょ]を牽制[けんせい]した。数日[すうじつ]後[ご]、彼女[かのじょ]は上司[じょうし]から呼[よ]び出[だ]され、「余計[よけい]なことに首[くび]を突[つっ]込[こ]まない方[ほう]がいい」と警告[けいこく]を受[う]けた。社内[しゃない]の不祥事[しょうじ]隠蔽[いんぺい]体質[たいしつ]に直面[ちょくめん]した彼女[かのじょ]は、会社[かいしゃ]内部[ないぶ]での解決[かいけつ]を諦[あきら]めざるを得なかった。当時[とうじ]、2006年[ねん]に施行[しこう]された公益[こうえき]通報者[つうほうしゃ]保護[ほご]法の下[もと]で、社外[しゃがい]の「公益[こうえき]通報[つうほう]窓口[まどぐち]」に通報[つうほう]する道[みち]が用意[ようい]されていた。",
      "彼女[かのじょ]は弁護士[べんごし]に相談[そうだん]した上[うえ]で、証券[しょうけん]取引[とりひき]等[とう]監視[かんし]委員会[いいんかい]への公益[こうえき]通報[つうほう]を決意[けつい]した。通報[つうほう]から約[やく]3か月[かげつ]後[ご]、監視[かんし]委員会[いいんかい]は強制[きょうせい]調査[ちょうさ]に乗[の]り出[だ]し、架空[かくう]取引[とりひき]の証拠[しょうこ]を押収[おうしゅう]した。企業[きぎょう]側[がわ]は当初[とうしょ]「事実[じじつ]無根[むこん]」と主張[しゅちょう]したが、証拠[しょうこ]の山[やま]の前[まえ]に沈黙[ちんもく]せざるを得なかった。2020年[ねん]春[はる]、企業[きぎょう]は有価[ゆうか]証券[しょうけん]報告[ほうこく]書[しょ]の虚偽[きょぎ]記載[きさい]を公表[こうひょう]し、過去[かこ]3年[ねん]間[かん]の決算[けっさん]を修正[しゅうせい]した。東京[とうきょう]証券[しょうけん]取引[とりひき]所[しょ]は上場[じょうじょう]廃止[はいし]を検討[けんとう]し、金融[きんゆう]商品[しょうひん]取引[とりひき]法[ほう]に基[もと]づく罰金[ばっきん]も科[か]された。",
      "しかし、彼女[かのじょ]の個人的[こじんてき]な代償[だいしょう]は計[はか]り知れないほど大[おお]きかった。通報[つうほう]後[ご]、彼女[かのじょ]は「重要[じゅうよう]な業務[ぎょうむ]から外[はず]す」という名[な]目[もく]で閑職[かんしょく]に回[まわ]され、同僚[どうりょう]からも「裏切[うらぎ]り者[もの]」として距離[きょり]を置[お]かれた。彼女[かのじょ]が信頼[しんらい]していた上司[じょうし]さえ「君[きみ]の将来[しょうらい]が心配[しんぱい]だ」と冷淡[れいたん]な言葉[ことば]を投[な]げかけた。結局[けっきょく]、彼女[かのじょ]は1年[ねん]後[ご]に退職[たいしょく]に追[お]い込[こ]まれた。彼女[かのじょ]の代わりに昇進[しょうしん]した同僚[どうりょう]たち、解任[かいにん]された役員[やくいん]たち——その後[ご]の彼女[かのじょ]の人生[じんせい]には、仕事[しごと]を失[うしな]った重[おも]い空白[くうはく]が残[のこ]された。",
      "一方[いっぽう]、事件[じけん]は日本[にほん]社会[しゃかい]に大[おお]きな波紋[はもん]を広[ひろ]げた。社外[しゃがい]取締役[とりしまりやく]の責任[せきにん]が問[と]われ、企業[きぎょう]統治[とうち]改革[かいかく]の遅[おく]れが改[あらた]めて浮[う]き彫[ぼ]りになった。経済[けいざい]産業[さんぎょう]省[しょう]と金融[きんゆう]庁[ちょう]は、内部[ないぶ]統制[とうせい]の強化[きょうか]と監査[かんさ]の独立性[どくりつせい]確保[かくほ]を企業[きぎょう]に求[もと]める新[あたら]しい指針[しじん]を公表[こうひょう]した。2020年[ねん]には公益[こうえき]通報者[つうほうしゃ]保護[ほご]法が改正[かいせい]され、事業[じぎょう]者[しゃ]内部[ないぶ]の通報[つうほう]窓口[まどぐち]設置[せっち]義務[ぎむ]や、通報者[つうほうしゃ]への不利益[ふりえき]取扱[とりあつか]いの禁止[きんし]強化[きょうか]が図[はか]られた。2022年[ねん]にはさらに保護[ほご]対象[たいしょう]が拡大[かくだい]され、内部[ないぶ]告発[こくはつ]の環境[かんきょう]は一段[いちだん]と改善[かいぜん]された。",
      "しかし、法律[ほうりつ]の整備[せいび]だけでは十分[じゅうぶん]ではない。日本[にほん]の企業[きぎょう]文化[ぶんか]には、今[いま]も「波風[なみかぜ]を立[た]てない」という美学[びがく]が根[ね]付[つ]いている。「和[わ]」を尊[とうと]ぶあまり、不正[ふせい]を見[み]て見[み]ぬふりをする体質[たいしつ]は、企業[きぎょう]の透明性[とうめいせい]を損[そこ]なう。内部[ないぶ]告発[こくはつ]は「裏切[うらぎ]り」ではなく、企業[きぎょう]の健全性[けんぜんせい]を守[まも]る「最終[さいしゅう]の安全装置」であるという認識[にんしき]が、広[ひろ]く共有[きょうゆう]されなければならない。告発[こくはつ]した彼女[かのじょ]が、自[みずか]らのキャリア[きゃりあ]を犠牲[ぎせい]にしてまで社会[しゃかい]に提示[ていじ]した真実[しんじつ]——その価値[かち]を正[ただ]しく評価[ひょうか]し、勇気[ゆうき]ある行動[こうどう]を支[ささ]える制度[せいど]と文化[ぶんか]の両輪[りょうりん]こそが、これからの日本[にほん]企業[きぎょう]に求[もと]められるのである。"
    ],
    translation: [
      "In the spring of 2019, a woman working in the accounting division of a major manufacturer found inexplicable figures in the company's books. She was a mid-career employee who had worked at the company for more than ten years and had never seen any irregularity before. While reconciling invoices from an overseas subsidiary with domestic journal data, she noticed that hundreds of millions of yen in sales had been recorded as fictitious transactions. At first thinking it \"might be my mistake,\" she repeatedly verified, and finally became convinced of the abnormality.",
      "The deeper she dug, the more complex the situation became. The fictitious transactions she traced were a scheme repeated over three years: fictitious purchases and sales of inventory through an overseas subsidiary. To conceal the decline in gross profit margins, the scheme repeatedly inflated profits with fictitious transactions every quarter and reversed them the following period; numerous traces of such \"round-trip transactions\" were found. The names of involved executives also surfaced. After much agonizing, she decided to first make an internal report to the company's ethics committee. She had the idea that \"the company should correct the problem itself.\"",
      "However, the internal report ended with results contrary to her expectations. The executive in charge of the ethics committee constrained her, saying \"It's your imagination\" and \"It's nothing more than a difference in interpretation of accounting standards.\" A few days later, she was summoned by her boss and warned, \"You'd better not stick your neck into things that don't concern you.\" Confronted with the company's cover-up culture, she had no choice but to abandon hope of resolving the matter internally. At the time, under the Whistleblower Protection Act enforced in 2006, a route was available for reporting to an external \"public-interest reporting window.\"",
      "After consulting with a lawyer, she decided to make a public-interest report to the Securities and Exchange Surveillance Commission. About three months after the report, the Surveillance Commission launched a compulsory investigation and seized evidence of the fictitious transactions. The company initially claimed \"totally groundless,\" but was forced into silence before the mountain of evidence. In the spring of 2020, the company announced false entries in its securities reports and revised its financial statements for the past three years. The Tokyo Stock Exchange considered delisting, and fines were imposed based on the Financial Instruments and Exchange Act.",
      "However, the personal cost she paid was immeasurable. After the report, she was reassigned to a sinecure under the pretext of \"removing her from important duties,\" and colleagues distanced themselves from her as a \"traitor.\" Even the boss she had trusted threw cold words: \"I'm worried about your future.\" In the end, a year later, she was forced to resign. The colleagues who were promoted in her place, the executives who were dismissed—after all this, a heavy void of having lost her work remained in her life.",
      "On the other hand, the case sent major ripples through Japanese society. The responsibility of outside directors was questioned, and the lag in corporate governance reform was freshly exposed. The Ministry of Economy, Trade and Industry and the Financial Services Agency published new guidelines requiring companies to strengthen internal controls and secure the independence of audits. In 2020, the Whistleblower Protection Act was revised to require companies to set up internal reporting windows and strengthen the prohibition of disadvantageous treatment of reporters. In 2022, the protected scope was further expanded, and the environment for internal whistleblowing was further improved.",
      "However, legal preparedness alone is insufficient. In Japanese corporate culture, the aesthetics of \"not making waves\" remain rooted today. Valuing \"harmony\" so much that one turns a blind eye to irregularities—the culture of \"see no evil, speak no evil, hear no evil\"—undermines corporate transparency. The recognition that internal whistleblowing is not \"betrayal\" but the \"final safety device\" protecting corporate soundness must be widely shared. The truth that she presented to society at the cost of her own career—properly evaluating its value, the twin wheels of institutions and culture that support courageous action are what Japanese companies need going forward."
    ],
    questions: [
      {
        q: "According to the passage, when did the accountant first notice the irregularities?",
        choices: ["Spring 2006", "Spring 2019", "Spring 2020", "Spring 2022"],
        answerIndex: 1,
        explanation: "The events begin in 2019年の春 when she first noticed the inexplicable figures in the company's books."
      },
      {
        q: "What did the internal report to the ethics committee result in?",
        choices: ["A swift, formal investigation", "Her being constrained and warned by her boss", "Her immediate promotion", "A public apology from executives"],
        answerIndex: 1,
        explanation: "The committee dismissed her report and her boss warned her 余計なことに首を突っ込まない方がいい."
      },
      {
        q: "Where did she ultimately make her external report?",
        choices: ["A newspaper", "The Securities and Exchange Surveillance Commission", "A labor union", "A competitor company"],
        answerIndex: 1,
        explanation: "After consulting a lawyer, she made a public-interest report to the 証券取引等監視委員会."
      },
      {
        q: "According to the passage, what was revised in 2020 following the case?",
        choices: ["The Companies Act", "The Whistleblower Protection Act", "The Labor Standards Act", "The Financial Instruments and Exchange Act"],
        answerIndex: 1,
        explanation: "The 公益通報者保護法 was revised in 2020 to mandate internal reporting windows and strengthen protection against disadvantageous treatment."
      },
      {
        q: "The phrase \"after much agonizing, she decided to first make an internal report\" uses which N2 pattern?",
        choices: ["〜限り", "〜末（に） (after much ... / at the end of)", "〜次第で", "〜に過ぎない"],
        answerIndex: 1,
        explanation: "悩んだ末、まず社内の倫理委員会に内部通報を行うことを決意した uses 〜末, meaning \"after much agonizing / at the end of.\""
      }
    ]
  }
];
