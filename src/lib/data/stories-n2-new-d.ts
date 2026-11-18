import type { StoryData } from "@/lib/types";

// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜にもかかわらず, 〜に先立って, 〜上で, 〜際, 〜おそれがある,
// 〜かねない, 〜つつある, 〜に過ぎない, 〜にかけては, 〜において, 〜にとって,
// 〜どころか, 〜に違いない, 〜次第, 〜限り, 〜からこそ, etc.

export const storiesN2NewD: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-31 — A space mission (火星への旅)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-31",
    title: "火星[かせい]への旅[たび]",
    titleReading: "かせいへのたび",
    level: "N2",
    summary: "The international space agency announces a manned mission to Mars, the culmination of a decade of research and the most ambitious endeavor humanity has ever attempted.",
    estMinutes: 6,
    tags: ["space", "science", "exploration"],
    body: [
      "国際宇宙局[こくさいうちゅうきょく]は先週[せんしゅう]、火星[かせい]への有人探査計画[ゆうじんたんさけいかく]を正式[せいしき]に発表[はっぴょう]した。",
      "この計画[けいかく]は、過去十年[かこじゅうねん]にわたる研究[けんきゅう]の集大成[しゅうたいせい]であり、人類史上[じんるいしじょう]最[もっと]も野心的[やしんてき]なミッションと言[い]われている。",
      "搭乗[とうじょう]する六名[ろくめい]の宇宙飛行士[うちゅうひこうし]は、厳[きび]しい訓練[くんれん]を経[へ]て選抜[せんばつ]された精鋭[せいえい]ばかりである。",
      "彼[かれ]らは往復約二年[おうふくやくにねん]に及[およ]ぶ長期滞在[ちょうきたいざい]に耐[た]えうるだけの体力[たいりょく]と精神力[せいしんりょく]を備[そな]えている。",
      "一方[いっぽう]で、莫大[ばくだい]な予算[よさん]が必要[ひつよう]となるため、各国政府間[かっこくせいふかん]の調整[ちょうせい]が難航[なんこう]している側面[そくめん]もある。",
      "それにもかかわらず、科学者[かがくしゃ]たちはこの計画[けいかく]が人類[じんるい]の未来[みらい]を大[おお]きく変[か]えると信[しん]じている。",
      "打[う]ち上[あ]げまで残[のこ]り三年[さんねん]、関係者[かんけいしゃ]は最終段階[さいしゅうだんかい]の準備[じゅんび]に追[お]われている。"
    ],
    translation: [
      "Last week, the international space agency officially announced a manned exploration plan to Mars.",
      "This plan is the culmination of a decade of research and is said to be the most ambitious mission in human history.",
      "The six astronauts on board are all elite members selected through rigorous training.",
      "They possess the physical strength and mental fortitude to endure a round trip of about two years.",
      "On the other hand, because an enormous budget is required, coordination between the governments of each country is struggling in some respects.",
      "Despite this, scientists believe that this plan will greatly change the future of humanity.",
      "With three years left until launch, those involved are busy with the final stage of preparation."
    ],
    vocab: [
      { word: "宇宙局", reading: "うちゅうきょく", meaning: "space agency" },
      { word: "有人探査", reading: "ゆうじんたんさ", meaning: "manned exploration" },
      { word: "集大成", reading: "しゅうたいせい", meaning: "culmination; comprehensive compilation" },
      { word: "野心的", reading: "やしんてき", meaning: "ambitious" },
      { word: "搭乗", reading: "とうじょう", meaning: "boarding; embarkation" },
      { word: "飛行士", reading: "ひこうし", meaning: "pilot; astronaut" },
      { word: "訓練", reading: "くんれん", meaning: "training" },
      { word: "選抜", reading: "せんばつ", meaning: "selection" },
      { word: "精鋭", reading: "せいえい", meaning: "elite; crack troops" },
      { word: "往復", reading: "おうふく", meaning: "round trip" },
      { word: "長期滞在", reading: "ちょうきたいざい", meaning: "long-term stay" },
      { word: "莫大", reading: "ばくだい", meaning: "enormous; huge" },
      { word: "難航", reading: "なんこう", meaning: "struggling; rough going" },
      { word: "最終段階", reading: "さいしゅうだんかい", meaning: "final stage" },
      { word: "関係者", reading: "かんけいしゃ", meaning: "those concerned; involved parties" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-32 — A genetic discovery (遺伝子の謎)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-32",
    title: "遺伝子[いでんし]の謎[なぞ]",
    titleReading: "いでんしのなぞ",
    level: "N2",
    summary: "A research team identifies a gene that influences lifespan, a finding hailed as groundbreaking in the study of aging, even as ethical questions and cautionary voices surround it.",
    estMinutes: 5,
    tags: ["genetics", "science", "medicine"],
    body: [
      "研究[けんきゅう]チームは先月[せんげつ]、寿命[じゅみょう]を左右[さゆう]する特定[とくてい]の遺伝子[いでんし]を特定[とくてい]したと発表[はっぴょう]した。",
      "この発見[はっけん]は、老化[ろうか]のメカニズムを解明[かいめい]する上[うえ]で画期的[かっきてき]な進歩[しんぽ]と評価[ひょうか]されている。",
      "実験[じっけん]では、当該遺伝子[とうがいいでんし]を操作[そうさ]したマウスの寿命[じゅみょう]が平均[へいきん]で約三割[やくさんわり]延[の]びたという。",
      "ただし、人間[にんげん]への応用[おうよう]には依然[いぜん]として多[おお]くの課題[かだい]が残[のこ]されている。",
      "倫理的[りんりてき]な懸念[けねん]も指摘[してき]されており、安易[あんい]な遺伝子操作[いでんしそうさ]には慎重[しんちょう]な議論[ぎろん]が必要[ひつよう]だ。",
      "一部[いちぶ]の専門家[せんもんか]は、結果[けっか]を過大評価[かだいひょうか]すべきでないと警告[けいこく]している。",
      "それでも、この研究[けんきゅう]が将来[しょうらい]の医療[いりょう]に与[あた]える影響[えいきょう]は計[はか]り知[し]れない。",
      "次[つぎ]なる段階[だんかい]では、臨床試験[りんしょうしけん]を経[へ]て安全性[あんぜんせい]の確認[かくにん]が行[おこな]われる予定[よてい]である。"
    ],
    translation: [
      "Last month, the research team announced that it had identified a specific gene that influences lifespan.",
      "This discovery is regarded as a groundbreaking advance in elucidating the mechanism of aging.",
      "In experiments, the lifespan of mice whose genes were manipulated reportedly increased by about thirty percent on average.",
      "However, many challenges still remain for application to humans.",
      "Ethical concerns have also been pointed out, and careful discussion is required for facile gene manipulation.",
      "Some experts warn that the results should not be overestimated.",
      "Even so, the impact this research will have on future medicine is immeasurable.",
      "In the next stage, safety will be confirmed through clinical trials."
    ],
    vocab: [
      { word: "遺伝子", reading: "いでんし", meaning: "gene" },
      { word: "寿命", reading: "じゅみょう", meaning: "lifespan" },
      { word: "左右", reading: "さゆう", meaning: "to influence; left and right" },
      { word: "解明", reading: "かいめい", meaning: "elucidation" },
      { word: "画期的", reading: "かっきてき", meaning: "groundbreaking; epoch-making" },
      { word: "操作", reading: "そうさ", meaning: "manipulation" },
      { word: "応用", reading: "おうよう", meaning: "application" },
      { word: "懸念", reading: "けねん", meaning: "concern; apprehension" },
      { word: "慎重", reading: "しんちょう", meaning: "careful; prudent" },
      { word: "過大評価", reading: "かだいひょうか", meaning: "overestimation" },
      { word: "臨床試験", reading: "りんしょうしけん", meaning: "clinical trial" },
      { word: "安全性", reading: "あんぜんせい", meaning: "safety" },
      { word: "影響", reading: "えいきょう", meaning: "influence; impact" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-33 — A corporate merger (巨大企業の合併)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-33",
    title: "巨大企業[きょだいきぎょう]の合併[がっぺい]",
    titleReading: "きょだいきぎょうのがっぺい",
    level: "N2",
    summary: "Two major IT companies announce a merger that will create the country's largest firm, triggering stock surges, antitrust scrutiny, and anxiety among employees over looming job cuts.",
    estMinutes: 6,
    tags: ["business", "merger", "economy"],
    body: [
      "二[ふた]つの大手[おおて]IT企業[きぎょう]が合併[がっぺい]するという報道[ほうどう]が昨日[きのう]発表[はっぴょう]された。",
      "合併後[がっぺいご]の新会社[しんがいしゃ]は国内最大[こくないさいだい]の規模[きぼ]となり、市場[しじょう]シェアの三割[さんわり]を占[し]めると見[み]られている。",
      "経営陣[けいえいじん]は記者会見[きしゃかいけん]で、シナジー効果[こうか]を最大限[さいだいげん]に活[い]かすと強調[きょうちょう]した。",
      "一方[いっぽう]、競争[きょうそう]の減少[げんしょう]が消費者[しょうひしゃ]に不利益[ふりえき]をもたらすという懸念[けねん]の声[こえ]も上[あ]がっている。",
      "公正取引委員会[こうせいとりひきいいんかい]は、独占禁止法[どくせんきんしほう]に照[て]らして審査[しんさ]を開始[かいし]する方針[ほうしん]である。",
      "従業員[じゅうぎょういん]の間[あいだ]では、大規模[だいきぼ]な人員削減[じんいんさくげん]への不安[ふあん]が広[ひろ]がっている。",
      "それでも、株価[かぶか]は合併発表直後[がっぺいはっぴょうちょくご]に急上昇[きゅうじょうしょう]し、市場[しじょう]の期待[きたい]の大[おお]きさを示[しめ]した。",
      "今後数か月[こんごすうかげつ]は、統合[とうごう]プロセスを巡[めぐ]る議論[ぎろん]が続[つづ]くことだろう。"
    ],
    translation: [
      "Yesterday, it was reported that two major IT companies will merge.",
      "The new company after the merger is expected to become the largest in the country, holding thirty percent of the market share.",
      "At a press conference, the management emphasized that they will maximize the synergy effect.",
      "On the other hand, voices of concern have emerged that a decline in competition will disadvantage consumers.",
      "The Fair Trade Commission plans to begin a review in light of the antitrust law.",
      "Among employees, anxiety is spreading over large-scale personnel cuts.",
      "Even so, stock prices surged immediately after the merger announcement, showing the magnitude of market expectations.",
      "For the next several months, debate over the integration process will likely continue."
    ],
    vocab: [
      { word: "合併", reading: "がっぺい", meaning: "merger" },
      { word: "大手", reading: "おおて", meaning: "major company" },
      { word: "規模", reading: "きぼ", meaning: "scale" },
      { word: "経営陣", reading: "けいえいじん", meaning: "management" },
      { word: "効果", reading: "こうか", meaning: "effect" },
      { word: "競争", reading: "きょうそう", meaning: "competition" },
      { word: "不利益", reading: "ふりえき", meaning: "disadvantage" },
      { word: "公正取引委員会", reading: "こうせいとりひきいいんかい", meaning: "Fair Trade Commission" },
      { word: "独占禁止法", reading: "どくせんきんしほう", meaning: "antitrust law" },
      { word: "従業員", reading: "じゅうぎょういん", meaning: "employee" },
      { word: "人員削減", reading: "じんいんさくげん", meaning: "personnel reduction" },
      { word: "株価", reading: "かぶか", meaning: "stock price" },
      { word: "統合", reading: "とうごう", meaning: "integration" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-34 — A religious pilgrimage (巡礼の道)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-34",
    title: "巡礼[じゅんれい]の道[みち]",
    titleReading: "じゅんれいのみち",
    level: "N2",
    summary: "The Shikoku eighty-eight temple pilgrimage, a tradition stretching back a thousand years, now draws not only believers but also secular walkers seeking time to face themselves.",
    estMinutes: 6,
    tags: ["religion", "pilgrimage", "culture"],
    body: [
      "四国八十八か所[しこくはちじゅうはちかしょ]の巡礼[じゅんれい]は、千年前[せんねんまえ]から続[つづ]く伝統的[でんとうてき]な宗教行事[しゅうきょうぎょうじ]である。",
      "信者[しんじゃ]たちは約千二百キロ[やくせんにひゃくきろ]に及[およ]ぶ行程[こうてい]を歩[ある]き、各寺院[かくじいん]で礼拝[らいはい]を捧[ささ]げる。",
      "この旅[たび]は単[たん]なる物理的[ぶつりてき]な移動[いどう]ではなく、内面的[ないめんてき]な修行[しゅぎょう]としての意味[いみ]を持[も]つ。",
      "最近[さいきん]では、宗教的[しゅうきょうてき]な動機[どうき]を持[も]たない歩行者[ほこうしゃ]も増[ふ]えているという。",
      "彼[かれ]らは現代社会[げんだいしゃかい]の喧騒[けんそう]から離[はな]れ、自己[じこ]と向[む]き合[あ]う時間[じかん]を求[もと]めている。",
      "沿道[えんどう]の住民[じゅうみん]は巡礼者[じゅんれいしゃ]に温[あたた]かい接待[せったい]を提供[ていきょう]し、お接待[せったい]と呼[よ]ばれる文化[ぶんか]を育[はぐく]んできた。",
      "そのもてなしの精神[せいしん]は、地域社会[ちいきしゃかい]の結束[けっそく]を象徴[しょうちょう]している。",
      "巡礼[じゅんれい]の道[みち]は今[いま]も、訪[おとず]れる人々[ひとびと]の心[こころ]に深[ふか]い感銘[かんめい]を刻[きざ]み続[つづ]けている。"
    ],
    translation: [
      "The Shikoku eighty-eight temple pilgrimage is a traditional religious event that has continued for a thousand years.",
      "Believers walk a course of about one thousand two hundred kilometers, offering worship at each temple.",
      "This journey is not mere physical movement; it carries meaning as an inner ascetic practice.",
      "Recently, the number of walkers without religious motives has also been increasing.",
      "They seek time to face themselves, away from the bustle of modern society.",
      "Residents along the route have offered warm hospitality to pilgrims, nurturing a culture called osettai.",
      "The spirit of that hospitality symbolizes the unity of the local community.",
      "The path of pilgrimage continues to engrave deep impressions in the hearts of those who visit."
    ],
    vocab: [
      { word: "巡礼", reading: "じゅんれい", meaning: "pilgrimage" },
      { word: "宗教行事", reading: "しゅうきょうぎょうじ", meaning: "religious event" },
      { word: "信者", reading: "しんじゃ", meaning: "believer" },
      { word: "礼拝", reading: "らいはい", meaning: "worship" },
      { word: "物理的", reading: "ぶつりてき", meaning: "physical" },
      { word: "修行", reading: "しゅぎょう", meaning: "ascetic practice" },
      { word: "動機", reading: "どうき", meaning: "motive" },
      { word: "喧騒", reading: "けんそう", meaning: "bustle; clamor" },
      { word: "沿道", reading: "えんどう", meaning: "along the route" },
      { word: "接待", reading: "せったい", meaning: "hospitality (to pilgrims)" },
      { word: "結束", reading: "けっそく", meaning: "unity; solidarity" },
      { word: "象徴", reading: "しょうちょう", meaning: "symbol" },
      { word: "感銘", reading: "かんめい", meaning: "deep impression" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-35 — A political assassination (政治家の暗殺)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-35",
    title: "政治家[せいじか]の暗殺[あんさつ]",
    titleReading: "せいじかのあんさつ",
    level: "N2",
    summary: "A prominent opposition politician who campaigned against corruption is assassinated in the capital's square, sparking public unease and an investigation that may shake the nation's stability.",
    estMinutes: 7,
    tags: ["politics", "crime", "assassination"],
    body: [
      "昨夜[さくや]、首都[しゅと]の広場[ひろば]で野党[やとう]の有力[ゆうりょく]な政治家[せいじか]が暗殺[あんさつ]される事件[じけん]が発生[はっせい]した。",
      "容疑者[ようぎしゃ]は現場[げんば]で逮捕[たいほ]され、動機[どうき]についての取[と]り調[しら]べが行[おこな]われている。",
      "被害者[ひがいしゃ]は汚職撲滅[おしょくぼくめつ]を掲[かか]げ、国民[こくみん]から広[ひろ]く支持[しじ]を集[あつ]めていた人物[じんぶつ]である。",
      "この事件[じけん]を受[う]けて、与野党双方[よやとうそうほう]が政治[せいじ]の暴力[ぼうりょく]を非難[ひなん]する声明[せいめい]を発表[はっぴょう]した。",
      "一部[いちぶ]の専門家[せんもんか]は、背後[はいご]に組織的[そしきてき]な関与[かんよ]がある可能性[かのうせい]を指摘[してき]している。",
      "警察[けいさつ]は捜査[そうさ]の全容解明[ぜんようかいめい]に全力[ぜんりょく]を挙[あ]げると公約[こうやく]した。",
      "国民[こくみん]の間[あいだ]には動揺[どうよう]が広[ひろ]がり、民主主義[みんしゅしゅぎ]の根幹[こんかん]が揺[ゆ]らいでいるとの声[こえ]もある。",
      "政府[せいふ]は国民[こくみん]の安全[あんぜん]を確保[かくほ]するため、警戒[けいかい]レベルを引[ひ]き上[あ]げた。",
      "今後[こんご]の捜査[そうさ]の行方[ゆくえ]は、国[くに]の政治的安定[せいじてきあんてい]に直結[ちょっけつ]すると見[み]られている。"
    ],
    translation: [
      "Last night, a prominent opposition politician was assassinated in the capital's square.",
      "The suspect was arrested at the scene, and questioning about the motive is underway.",
      "The victim was a figure who had advocated the eradication of corruption and had gathered broad support from the public.",
      "In response to this incident, both ruling and opposition parties issued statements condemning political violence.",
      "Some experts point out the possibility of organized involvement behind the scenes.",
      "The police pledged to devote every effort to clarifying the full scope of the investigation.",
      "Anxiety is spreading among the public, and some voices say the very foundation of democracy is wavering.",
      "The government raised the alert level in order to secure the safety of citizens.",
      "The course of the investigation going forward is seen as directly tied to the country's political stability."
    ],
    vocab: [
      { word: "暗殺", reading: "あんさつ", meaning: "assassination" },
      { word: "野党", reading: "やとう", meaning: "opposition party" },
      { word: "容疑者", reading: "ようぎしゃ", meaning: "suspect" },
      { word: "汚職撲滅", reading: "おしょくぼくめつ", meaning: "eradication of corruption" },
      { word: "与野党", reading: "よやとう", meaning: "ruling and opposition parties" },
      { word: "暴力", reading: "ぼうりょく", meaning: "violence" },
      { word: "関与", reading: "かんよ", meaning: "involvement" },
      { word: "捜査", reading: "そうさ", meaning: "investigation" },
      { word: "全容解明", reading: "ぜんようかいめい", meaning: "full clarification" },
      { word: "動揺", reading: "どうよう", meaning: "agitation; turmoil" },
      { word: "民主主義", reading: "みんしゅしゅぎ", meaning: "democracy" },
      { word: "根幹", reading: "こんかん", meaning: "foundation" },
      { word: "警戒", reading: "けいかい", meaning: "vigilance" },
      { word: "直結", reading: "ちょっけつ", meaning: "direct connection" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-36 — A sports scandal (スポーツの汚職)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-36",
    title: "スポーツの汚職[おしょく]",
    titleReading: "すぽーつのおしょく",
    level: "N2",
    summary: "Large-scale match-fixing allegations surface in the professional soccer league, with arrests of players suspected of gambling involvement, leaving fans betrayed and sponsors wary.",
    estMinutes: 6,
    tags: ["sports", "scandal", "corruption"],
    body: [
      "プロサッカーリーグで大規模[だいきぼ]な八百長疑惑[やおちょうぎわく]が浮上[ふじょう]し、関係者[かんけいしゃ]が騒然[そうぜん]としている。",
      "複数[ふくすう]の選手[せんしゅ]が賭博関与[とばくかんよ]を疑[うたが]われ、すでに三名[さんめい]が逮捕[たいほ]されたという。",
      "リーグの理事長[りじちょう]は緊急会見[きんきゅうかいけん]を開[ひら]き、厳正[げんせい]な対応[たいおう]を約束[やくそく]した。",
      "一方[いっぽう]、長年[ながねん]リーグを応援[おうえん]してきたファンは裏切[うらぎ]られた思[おも]いを吐露[とろ]している。",
      "問題[もんだい]の試合[しあい]は三年前[さんねんまえ]にさかのぼり、組織的[そしきてき]な操作[そうさ]が行[おこな]われていたと見[み]られている。",
      "スポンサー企業[きぎょう]の一部[いちぶ]は契約解除[けいやくかいじょ]を検討[けんとう]し始[はじ]めたとの報道[ほうどう]もある。",
      "信頼回復[しんらいかいふく]には長[なが]い道[みち]のりが必要[ひつよう]だと、識者[しきしゃ]は口[くち]を揃[そろ]えて指摘[してき]する。",
      "今後[こんご]、厳格[げんかく]な監視体制[かんしたいせい]の構築[こうちく]が急務[きゅうむ]とされている。"
    ],
    translation: [
      "Large-scale match-fixing allegations have surfaced in the professional soccer league, throwing those involved into an uproar.",
      "Multiple players are suspected of involvement in gambling, and three have already reportedly been arrested.",
      "The league chairman held an emergency press conference and promised a strict response.",
      "On the other hand, fans who have supported the league for years are confessing feelings of betrayal.",
      "The matches in question date back three years, and systematic manipulation is believed to have taken place.",
      "There are also reports that some sponsor companies have begun considering contract cancellations.",
      "Experts unanimously point out that a long road lies ahead for restoring trust.",
      "Going forward, the construction of a strict monitoring regime has become an urgent task."
    ],
    vocab: [
      { word: "八百長", reading: "やおちょう", meaning: "match fixing" },
      { word: "疑惑", reading: "ぎわく", meaning: "suspicion" },
      { word: "賭博", reading: "とばく", meaning: "gambling" },
      { word: "理事長", reading: "りじちょう", meaning: "chairman" },
      { word: "厳正", reading: "げんせい", meaning: "strict; impartial" },
      { word: "裏切る", reading: "うらぎる", meaning: "to betray" },
      { word: "吐露", reading: "とろ", meaning: "confession; pouring out" },
      { word: "契約解除", reading: "けいやくかいじょ", meaning: "contract cancellation" },
      { word: "信頼回復", reading: "しんらいかいふく", meaning: "restoration of trust" },
      { word: "識者", reading: "しきしゃ", meaning: "expert; informed person" },
      { word: "監視体制", reading: "かんしたいせい", meaning: "monitoring system" },
      { word: "構築", reading: "こうちく", meaning: "construction; building" },
      { word: "急務", reading: "きゅうむ", meaning: "urgent task" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-37 — An architectural marvel (奇跡の建築)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-37",
    title: "奇跡[きせき]の建築[けんちく]",
    titleReading: "きせきのけんちく",
    level: "N2",
    summary: "In the middle of a desert, the world's largest retractable dome is completed after five years of construction, blending cutting-edge technology with a philosophy of environmental coexistence.",
    estMinutes: 6,
    tags: ["architecture", "technology", "design"],
    body: [
      "砂漠[さばく]の中央[ちゅうおう]に、世界最大[せかいさいだい]の可動式[かどうしき]ドーム建築[けんちく]が完成[かんせい]した。",
      "この建造物[けんぞうぶつ]は、過酷[かこく]な気候[きこう]から内部空間[ないぶくうかん]を守[まも]るために設計[せっけい]された。",
      "ドームは気温[きおん]に応[おう]じて開閉[かいへい]し、自然換気[しぜんかんき]と温度調節[おんどちょうせつ]を同時[どうじ]に実現[じつげん]する。",
      "設計[せっけい]を手[て]がけた建築家[けんちくか]は、環境[かんきょう]との共生[きょうせい]を理念[りねん]に掲[かか]げている。",
      "建設[けんせつ]には最先端[さいせんたん]の技術[ぎじゅつ]が投入[とうにゅう]され、工期[こうき]は約五年[やくごねん]に及[およ]んだ。",
      "完成式典[かんせいしきてん]には多[おお]くの来賓[らいひん]が招[まね]かれ、その美[うつく]しさに息[いき]を呑[の]んだという。",
      "一部[いちぶ]の批評家[ひひょうか]は、維持費[いじひ]の高[たか]さに懸念[けねん]を示[しめ]している。",
      "それでも、この建築[けんちく]は未来[みらい]の都市設計[としせっけい]の一[ひと]つの模範[もはん]と評価[ひょうか]されている。"
    ],
    translation: [
      "In the middle of the desert, the world's largest retractable dome building has been completed.",
      "This structure was designed to protect the interior space from the harsh climate.",
      "The dome opens and closes in response to the temperature, simultaneously achieving natural ventilation and temperature control.",
      "The architect who handled the design holds up coexistence with the environment as a principle.",
      "Cutting-edge technology was poured into the construction, and the work period spanned about five years.",
      "Many guests were invited to the completion ceremony, and they reportedly gasped at its beauty.",
      "Some critics express concern about the high maintenance costs.",
      "Even so, this building is evaluated as one model for future urban design."
    ],
    vocab: [
      { word: "砂漠", reading: "さばく", meaning: "desert" },
      { word: "可動式", reading: "かどうしき", meaning: "retractable; movable" },
      { word: "建造物", reading: "けんぞうぶつ", meaning: "structure; building" },
      { word: "過酷", reading: "かこく", meaning: "harsh; severe" },
      { word: "開閉", reading: "かいへい", meaning: "opening and closing" },
      { word: "換気", reading: "かんき", meaning: "ventilation" },
      { word: "建築家", reading: "けんちくか", meaning: "architect" },
      { word: "共生", reading: "きょうせい", meaning: "coexistence" },
      { word: "最先端", reading: "さいせんたん", meaning: "cutting edge" },
      { word: "工期", reading: "こうき", meaning: "construction period" },
      { word: "来賓", reading: "らいひん", meaning: "guest" },
      { word: "維持費", reading: "いじひ", meaning: "maintenance cost" },
      { word: "模範", reading: "もはん", meaning: "model; exemplar" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-38 — A culinary revolution (料理の革命)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-38",
    title: "料理[りょうり]の革命[かくめい]",
    titleReading: "りょうりのかくめい",
    level: "N2",
    summary: "A young chef fuses molecular gastronomy with traditional technique, drawing a six-month reservation wait and igniting a debate between innovation and the soul of artisanal cooking.",
    estMinutes: 5,
    tags: ["food", "culinary", "innovation"],
    body: [
      "若手[わかて]シェフが、分子[ぶんし]ガストロノミーを応用[おうよう]した新[あたら]しい料理[りょうり]を発表[はっぴょう]した。",
      "彼[かれ]の店[みせ]は予約[よやく]が半年待[はんとしま]ちとなり、食通[しょくつう]の間[あいだ]で話題[わだい]を呼[よ]んでいる。",
      "従来[じゅうらい]の調理法[ちょうりほう]に科学的[かがくてき]アプローチを融合[ゆうごう]させ、味覚[みかく]の常識[じょうしき]を覆[くつがえ]した。",
      "一方[いっぽう]で、伝統[でんとう]を重[おも]んじる料理人[りょうりにん]はこうした手法[しゅほう]に懐疑的[かいぎてき]である。",
      "彼[かれ]らは、料理[りょうり]の魂[たましい]は職人[しょくにん]の手[て]による温[ぬく]もりにあると主張[しゅちょう]する。",
      "この論争[ろんそう]は、革新[かくしん]と伝統[でんとう]の永遠[えいえん]の対立[たいりつ]を象徴[しょうちょう]している。",
      "それにもかかわらず、若者[わかもの]の間[あいだ]では新[あたら]しい料理[りょうり]が爆発的[ばくはつてき]な人気[にんき]を集[あつ]めている。",
      "食文化[しょくぶんか]は時代[じだい]とともに変化[へんか]し、次世代[じせだい]へと受[う]け継[つ]がれていくものだ。"
    ],
    translation: [
      "A young chef has announced a new cuisine that applies molecular gastronomy.",
      "His restaurant now has a six-month wait for reservations, generating buzz among food connoisseurs.",
      "By fusing a scientific approach with conventional cooking methods, he overturned common sense about taste.",
      "On the other hand, chefs who value tradition remain skeptical of such methods.",
      "They argue that the soul of cooking lies in the warmth brought by the hands of artisans.",
      "This debate symbolizes the eternal conflict between innovation and tradition.",
      "Despite that, the new cuisine is gathering explosive popularity among young people.",
      "Food culture changes with the times and is passed down to the next generation."
    ],
    vocab: [
      { word: "若手", reading: "わかて", meaning: "young; junior" },
      { word: "応用", reading: "おうよう", meaning: "application" },
      { word: "食通", reading: "しょくつう", meaning: "food connoisseur" },
      { word: "従来", reading: "じゅうらい", meaning: "conventional; hitherto" },
      { word: "調理法", reading: "ちょうりほう", meaning: "cooking method" },
      { word: "融合", reading: "ゆうごう", meaning: "fusion" },
      { word: "味覚", reading: "みかく", meaning: "taste" },
      { word: "常識", reading: "じょうしき", meaning: "common sense" },
      { word: "懐疑的", reading: "かいぎてき", meaning: "skeptical" },
      { word: "職人", reading: "しょくにん", meaning: "artisan; craftsman" },
      { word: "革新", reading: "かくしん", meaning: "innovation" },
      { word: "対立", reading: "たいりつ", meaning: "conflict; opposition" },
      { word: "次世代", reading: "じせだい", meaning: "next generation" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-39 — A fashion controversy (ファッションの論争)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-39",
    title: "ファッションの論争[ろんそう]",
    titleReading: "ふぁっしょんのろんそう",
    level: "N2",
    summary: "A famous brand releases a collection incorporating elements of a specific ethnic group's traditional clothing and faces accusations of cultural appropriation, igniting fierce debate on social media.",
    estMinutes: 6,
    tags: ["fashion", "controversy", "culture"],
    body: [
      "有名[ゆうめい]ブランドが発表[はっぴょう]した新作[しんさく]コレクションが、文化的不敬意[ぶんかてきふけいい]だと批判[ひはん]を浴[あ]びている。",
      "デザインには特定民族[とくていみんぞく]の伝統衣装[でんとういしょう]の要素[ようそ]が取[と]り入[い]れられていた。",
      "批評家[ひひょうか]は、配慮[はいりょ]のない文化的挪用[ぶんかてきだよう]だと声[こえ]を荒[あら]げて非難[ひなん]した。",
      "一方[いっぽう]、ブランド側[がわ]は敬意[けいい]を持[も]って制作[せいさく]したと反論[はんろん]している。",
      "議論[ぎろん]は過熱[かねつ]し、SNS上[じょう]で激[はげ]しい応酬[おうしゅう]が続[つづ]いている。",
      "この件[けん]は、グローバル化[か]する世界[せかい]での文化[ぶんか]の取[と]り扱[あつか]いという難題[なんだい]を浮[う]き彫[ぼ]りにした。",
      "専門家[せんもんか]は、対話[たいわ]と理解[りかい]が不可欠[ふかけつ]だと強調[きょうちょう]している。",
      "今後[こんご]、業界全体[ぎょうかいぜんたい]でガイドラインの策定[さくてい]が求[もと]められる声[こえ]が高[たか]まっている。"
    ],
    translation: [
      "A new collection released by a famous brand is being showered with criticism as culturally disrespectful.",
      "The design had incorporated elements of a specific ethnic group's traditional clothing.",
      "Critics raised their voices in condemnation, calling it inconsiderate cultural appropriation.",
      "On the other hand, the brand side argues that it was produced with respect.",
      "The debate has overheated, and fierce exchanges continue on social media.",
      "This matter highlighted the difficult issue of how culture should be handled in a globalizing world.",
      "Experts emphasize that dialogue and understanding are indispensable.",
      "Going forward, voices calling for industry-wide guidelines to be drafted are growing louder."
    ],
    vocab: [
      { word: "不敬意", reading: "ふけいい", meaning: "disrespect" },
      { word: "民族", reading: "みんぞく", meaning: "ethnic group" },
      { word: "伝統衣装", reading: "でんとういしょう", meaning: "traditional clothing" },
      { word: "配慮", reading: "はいりょ", meaning: "consideration" },
      { word: "挪用", reading: "だよう", meaning: "appropriation" },
      { word: "批評家", reading: "ひひょうか", meaning: "critic" },
      { word: "敬意", reading: "けいい", meaning: "respect" },
      { word: "反論", reading: "はんろん", meaning: "rebuttal; counterargument" },
      { word: "過熱", reading: "かねつ", meaning: "overheating" },
      { word: "応酬", reading: "おうしゅう", meaning: "exchange; retort" },
      { word: "不可欠", reading: "ふかけつ", meaning: "indispensable" },
      { word: "策定", reading: "さくてい", meaning: "formulation; drafting" }
    ]
  },
  // ───────────────────────────────────────────────────────────
  // sx-n2n-40 — A music festival (音楽祭の夜)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-40",
    title: "音楽祭[おんがくさい]の夜[よる]",
    titleReading: "おんがくさいのよる",
    level: "N2",
    summary: "At summer's end, the country's largest music festival draws more than a hundred thousand spectators to a seaside venue for three days, headlined by a stunning newcomer band performance.",
    estMinutes: 6,
    tags: ["music", "festival", "events"],
    body: [
      "夏[なつ]の終[お]わりに、国内最大[こくないさいだい]の音楽祭[おんがくさい]が海辺[うみべ]の会場[かいじょう]で開催[かいさい]された。",
      "三日間[みっかかん]にわたるイベントには、国内外[こくないがい]から十万人以上[じゅうまんにんいじょう]の観客[かんきゃく]が集[あつ]まった。",
      "多様[たよう]なジャンルのアーティストが出演[しゅつえん]し、会場[かいじょう]は終始[しゅうし]熱気[ねっき]に包[つつ]まれた。",
      "特[とく]に注目[ちゅうもく]を集[あつ]めたのは、新人[しんじん]バンドの圧巻[あっかん]のパフォーマンスであった。",
      "彼[かれ]らの演奏[えんそう]は観客[かんきゃく]の心[こころ]を揺[ゆ]さぶり、スタンディングオベーションを引[ひ]き出[だ]した。",
      "一方[いっぽう]、会場外[かいじょうがい]では交通渋滞[こうつうじゅうたい]やごみ問題[もんだい]など、課題[かだい]も浮上[ふじょう]した。",
      "主催者[しゅさいしゃ]は来年[らいねん]に向[む]けて改善策[かいぜんさく]を講[こう]じる意向[いこう]を示[しめ]している。",
      "音楽[おんがく]の力[ちから]は、人々[ひとびと]の心[こころ]を一[ひと]つにする魔法的[まほうてき]な力[ちから]を持[も]っている。",
      "来年[らいねん]の音楽祭[おんがくさい]も、多[おお]くの期待[きたい]を集[あつ]めることだろう。"
    ],
    translation: [
      "At the end of summer, the country's largest music festival was held at a seaside venue.",
      "The three-day event drew an audience of more than one hundred thousand from home and abroad.",
      "Artists of diverse genres performed, and the venue was enveloped in excitement from start to finish.",
      "What drew particular attention was the stunning performance by a newcomer band.",
      "Their playing shook the hearts of the audience and drew a standing ovation.",
      "On the other hand, issues such as traffic congestion and garbage problems also surfaced outside the venue.",
      "The organizers indicate their intention to take improvement measures for next year.",
      "The power of music has a magical power to unite people's hearts.",
      "Next year's music festival will surely gather high expectations as well."
    ],
    vocab: [
      { word: "音楽祭", reading: "おんがくさい", meaning: "music festival" },
      { word: "海辺", reading: "うみべ", meaning: "seaside" },
      { word: "開催", reading: "かいさい", meaning: "holding; hosting" },
      { word: "国内外", reading: "こくないがい", meaning: "domestic and foreign" },
      { word: "多様", reading: "たよう", meaning: "diverse" },
      { word: "出演", reading: "しゅつえん", meaning: "performance; appearance" },
      { word: "終始", reading: "しゅうし", meaning: "throughout; from beginning to end" },
      { word: "熱気", reading: "ねっき", meaning: "excitement; enthusiasm" },
      { word: "注目", reading: "ちゅうもく", meaning: "attention" },
      { word: "圧巻", reading: "あっかん", meaning: "highlight; masterpiece" },
      { word: "演奏", reading: "えんそう", meaning: "musical performance" },
      { word: "交通渋滞", reading: "こうつうじゅうたい", meaning: "traffic congestion" },
      { word: "改善策", reading: "かいぜんさく", meaning: "improvement measure" },
      { word: "主催者", reading: "しゅさいしゃ", meaning: "organizer" }
    ]
  }
];
