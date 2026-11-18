import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches as furigana to that run.
// Adjacent kanji compounds may carry one furigana (e.g. 外交[がいこう]) or be split
// when okurigana intervenes (e.g. 一[いっ]方[ぽう]). 々 is not in the kanji range
// and is therefore left without its own bracket; for words like 我々 we write 我[われ]々
// so the ruby attaches to the kanji portion. See src/lib/types.ts & furigana.tsx.
// 10 original N1 stories: sx-n1-11 .. sx-n1-20.

export const storiesN1B: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-11 — A diplomatic breakthrough
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-11",
    title: "「凍結[とうけつ]」を解[と]いた外交[がいこう]の一手[いって]",
    titleReading: "とうけつをといたがいこうのいって",
    level: "N1",
    summary: "After half a century of frozen relations, two estranged neighbors reach a historic agreement through third-party mediation, reigniting hopes for regional stability even as domestic backlash looms.",
    estMinutes: 7,
    tags: ["diplomacy", "peace", "negotiation"],
    body: [
      "半[はん]世紀[せいき]にわたり対話[たいわ]の扉[とびら]が閉[と]ざされていた両国[りょうこく]が、第三者[だいさんしゃ]の仲介[ちゅうかい]を経[へ]て歴史[れきし]的[てき]合意[ごうい]に達[たっ]した。",
      "周辺[しゅうへん]諸国[しょこく]はもとより、遠[とお]く離[はな]れた地[ち]の首脳[しゅのう]らもこの知[し]らせに息[いき]を呑[の]んだ。",
      "交渉[こうしょう]が暗礁[あんしょう]に乗[の]り上[あ]げることは想像[そうぞう]に難[かた]くなかった。紛争[ふんそう]の根[ね]は深[ふか]く、互[たが]いの不信[ふしん]は骨[ほね]の髄[ずい]まで染[し]みていたからである。",
      "仲介[ちゅうかい]者[しゃ]は感情[かんじょう]の爆発[ばくはつ]を避[さ]けるべく、非公開[ひこうかい]の会合[かいごう]を幾度[いくど]となく設[もう]けた。",
      "双方[そうほう]が歩[あゆ]み寄[よ]りを見[み]せたのは、経済[けいざい]的[てき]疲弊[ひひい]がもはや看過[かんか]できない段階[だんかい]に達[たっ]していたからにほかならない。",
      "合意[ごうい]文書[ぶんしょ]には、領土[りょうど]をめぐる暫定[ざんてい]的[てき]共同[きょうどう]管理[かんり]の枠組[わくぐみ]が盛[も]り込[こ]まれた。",
      "調印[ちょういん]の瞬間[しゅんかん]、会場[かいじょう]を包[つつ]んだ緊張[きんちょう]が一陣[いちじん]の風[かぜ]に溶[と]けたかのようであった。",
      "しかしながら、合意[ごうい]はあくまで出発点[しゅっぱつてん]に過[す]ぎず、国内[こくない]の反発[はんぱつ]を抑[おさ]え込[こ]むことが次[つぎ]なる課題[かだい]として立[た]ち塞[ふさ]がる。",
      "それでも、この一手[いって]が未来[みらい]世代[せだい]に開[ひら]く道[みち]の広[ひろ]さを、我[われ]々は軽視[けいし]してはなるまい。"
    ],
    translation: [
      "After half a century during which the door to dialogue had remained shut, the two nations reached a historic agreement through third-party mediation.",
      "Not only neighboring states but even leaders in distant lands held their breath at the news.",
      "It required little imagination to suppose that the negotiations would run aground; the roots of the conflict ran deep, and mutual distrust had seeped into the very marrow of both sides.",
      "To forestall emotional outbursts, the mediator convened private gatherings on countless occasions.",
      "The willingness both sides showed to compromise was attributable to nothing other than the fact that economic exhaustion had reached a stage no longer to be overlooked.",
      "The agreement document incorporated a framework for provisional joint administration of the disputed territory.",
      "At the moment of signing, the tension enveloping the hall seemed to dissolve into a single gust of wind.",
      "Nevertheless, the agreement is no more than a starting point, and containing the domestic backlash stands as the next challenge blocking the way forward.",
      "Even so, the breadth of the path that this single move opens for future generations is something we should not underestimate."
    ],
    vocab: [
      { word: "凍結", reading: "とうけつ", meaning: "freezing (of relations)" },
      { word: "外交", reading: "がいこう", meaning: "diplomacy" },
      { word: "仲介", reading: "ちゅうかい", meaning: "mediation" },
      { word: "暗礁", reading: "あんしょう", meaning: "hidden reef; impasse" },
      { word: "疲弊", reading: "ひひい", meaning: "exhaustion" },
      { word: "看過", reading: "かんか", meaning: "overlooking" },
      { word: "暫定", reading: "ざんてい", meaning: "provisional" },
      { word: "枠組み", reading: "わくぐみ", meaning: "framework" },
      { word: "調印", reading: "ちょういん", meaning: "signing" },
      { word: "反発", reading: "はんぱつ", meaning: "backlash; resistance" },
      { word: "出発点", reading: "しゅっぱつてん", meaning: "starting point" },
      { word: "軽視", reading: "けいし", meaning: "underestimation; neglect" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-12 — A bioethical controversy
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-12",
    title: "胚[はい]の編集[へんしゅう]が孕[はら]む倫理[りんり]の深淵[しんえん]",
    titleReading: "はいのへんしゅうがはらむりんりのしんえん",
    level: "N1",
    summary: "The advent of embryo gene-editing forces humanity to confront whether eradicating hereditary disease can be severed from the specter of eugenics, and whether future generations can be spared a responsibility we ourselves are not entitled to assume.",
    estMinutes: 8,
    tags: ["bioethics", "genetics", "morality"],
    body: [
      "遺伝[いでん]子[し]を自由[じゆう]に書[か]き換[か]える技術[ぎじゅつ]の出現[しゅつげん]は、人類[じんるい]に禁断[きんだん]の果実[かじつ]を差[さ]し出[だ]したとも言[い]える。",
      "胚[はい]の段階[だんかい]でDNAを改変[かいへん]すれば、その変化[へんか]は子[こ]や孫[まご]の世代[せだい]にまで受[う]け継[つ]がれる。",
      "重篤[じゅうとく]な疾患[しっかん]を根絶[こんぜつ]できるという恩恵[おんけい]は、確[たし]かに人[ひと]を魅了[みりょう]してやまない。",
      "にもかかわらず、医療[いりょう]以外[いがい]の目的[もくてき]で人間[にんげん]を設計[せっけい]することは、優生[ゆうせい]思想[しそう]の再生産[さいせいさん]に直結[ちょっけつ]しかねない。",
      "誰[だれ]が「正常[せいじょう]」を定義[ていぎ]し、誰[だれ]が「異常[いじょう]」と断[だん]ずるのか。その境界[きょうかい]は常[つね]に権力[けんりょく]と結託[けったく]してきた。",
      "被験者[ひけんしゃ]となる胚[はい]自体[じたい]が同意[どうい]を与[あた]え得[う]ない以上[いじょう]、この技術[ぎじゅつ]を濫用[らんよう]すれば我[われ]々は重大[じゅうだい]な倫理[りんり]的[てき]責任[せきにん]を問[と]われずにはおかない。",
      "国際[こくさい]的[てき]な規制[きせい]枠組[わくぐみ]の不在[ふざい]は、技術[ぎじゅつ]先進[せんしん]国[こく]が独走[どくそう]する構造[こうぞう]を許[ゆる]す結果[けっか]を招[まね]いている。",
      "一[いっ]部[ぶ]の科学者[かがくしゃ]は自己[じこ]規制[きせい]を強調[きょうちょう]するものの、利益[りえき]を追[お]う市場[しじょう]の論理[ろんり]が彼[かれ]らの良識[りょうしき]を凌駕[りょうが]する恐[おそ]れがある。",
      "我[われ]々は今[いま]、安易[あんい]な進歩[しんぽ]至上[しじょう]主義[しゅぎ]から一歩[いっぽ]退[さが]り、人間[にんげん]の尊厳[そんげん]とは何[なに]かを問[と]い直[なお]す時[とき]に直面[ちょくめん]している。"
    ],
    translation: [
      "The emergence of technology that freely rewrites genes can be said to have offered humanity a forbidden fruit.",
      "If DNA is altered at the embryonic stage, the change will be inherited by the generations of one's children and grandchildren.",
      "The benefit of being able to eradicate serious diseases is undeniably fascinating beyond words.",
      "Nevertheless, designing human beings for non-medical purposes may well amount to the reproduction of eugenic ideology.",
      "Who defines 'normal,' and who pronounces 'abnormal'? That boundary has always been complicit with power.",
      "Insofar as the embryo serving as a subject cannot possibly give consent, the abuse of this technology will not fail to call us to account for grave ethical responsibility.",
      "The absence of an international regulatory framework invites the consequence of allowing technologically advanced nations to run alone.",
      "Although some scientists emphasize self-regulation, the profit-driven logic of the market threatens to override their good sense.",
      "We now face a moment in which we must step back from an easy faith in progress for its own sake and ask anew what human dignity truly amounts to."
    ],
    vocab: [
      { word: "胚", reading: "はい", meaning: "embryo" },
      { word: "遺伝子", reading: "いでんし", meaning: "gene" },
      { word: "改変", reading: "かいへん", meaning: "modification" },
      { word: "疾患", reading: "しっかん", meaning: "disease" },
      { word: "根絶", reading: "こんぜつ", meaning: "eradication" },
      { word: "優生思想", reading: "ゆうせいしそう", meaning: "eugenics" },
      { word: "再生産", reading: "さいせいさん", meaning: "reproduction" },
      { word: "直結", reading: "ちょっけつ", meaning: "direct connection" },
      { word: "結託", reading: "けったく", meaning: "collusion" },
      { word: "濫用", reading: "らんよう", meaning: "abuse" },
      { word: "良識", reading: "りょうしき", meaning: "good sense" },
      { word: "凌駕", reading: "りょうが", meaning: "surpassing" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-13 — A post-war reconciliation
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-13",
    title: "銃弾[じゅうだん]の跡[あと]に芽吹[めぶ]く和解[わかい]",
    titleReading: "じゅうだんのあとにめぶくわかい",
    level: "N1",
    summary: "Two men who once aimed rifles at each other on the same battlefield sit at one table half a century later, and the trembling handshake they exchange opens the first crack in a long chain of hatred.",
    estMinutes: 7,
    tags: ["war", "reconciliation", "memory"],
    body: [
      "戦場[せんじょう]で銃[じゅう]を向[む]けた二人[ふたり]の男[おとこ]が、半[はん]世紀[せいき]を経[へ]て一[ひと]つのテーブルを囲[かこ]んだ。",
      "当時[とうじ]の記憶[きおく]は、両者[りょうしゃ]にとって逃[のが]れ難[がた]い悪夢[あくむ]として胸[むね]の奥[おく]に刻[きざ]まれていた。",
      "一[いっ]方[ぽう]は村[むら]を焼[や]かれた側[がわ]の生[いき]残[のこ]り、もう一[いっ]方[ぽう]は命令[めいれい]に従[したが]った若[わか]き兵士[へいし]であった。",
      "初[はじ]めの対面[たいめん]は沈黙[ちんもく]に支配[しはい]され、言葉[ことば]は喉[のど]の奥[おく]で凍[こお]り付[つ]いたままだった。",
      "それでも、一[いっ]方[ぽう]が差[さ]し出[だ]した手[て]を、もう一[いっ]方[ぽう]が握[にぎ]り返[かえ]した瞬間[しゅんかん]、長[なが]い憎悪[ぞうお]の連鎖[れんさ]に亀裂[きれつ]が入[はい]った。",
      "謝罪[しゃざい]は言葉[ことば]に尽[つ]くせぬものの、その眼差[まなざ]しには偽[いつわ]りがなく、双方[そうほう]の心[こころ]の壁[かべ]を崩[くず]すに足[た]りた。",
      "国家[こっか]の公式[こうしき]謝罪[しゃざい]が法[ほう]的[てき]枠組[わくぐみ]の中[なか]で協議[きょうぎ]されるのに対[たい]し、個人[こじん]と個人[こじん]の間[あいだ]の和解[わかい]は、身体[しんたい]の震[ふる]えを伴[ともな]う生[なま]の現場[げんば]である。",
      "二人[ふたり]が語[かた]り合[あ]ったのは、政治[せいじ]的[てき]立場[たちば]ではなく、失[うしな]った家族[かぞく]の名前[なまえ]であった。それらの名前[なまえ]が、過去[かこ]を未来[みらい]へと繋[つな]ぐ架[か]け橋[はし]となった。",
      "和解[わかい]とは、過去[かこ]を消[け]すことではなく、過去[かこ]を背負[せお]ったまま歩[ある]き出[だ]す覚悟[かくご]を互[たが]いに認[みと]め合[あ]う作業[さぎょう]にほかならない。",
      "銃[じゅう]声[せい]が止[や]んだ地[ち]に春[はる]の風[かぜ]が吹[ふ]き、その風[かぜ]が運[はこ]ぶ記憶[きおく]の重[おも]さを、後世[こうせい]に伝[つた]えずにはおかない。"
    ],
    translation: [
      "Two men who had aimed guns at each other on the battlefield came, half a century later, to share a single table.",
      "The memories of that time remained engraved in the depths of their chests as nightmares from which neither could escape.",
      "One was a survivor of the side whose village had been burned; the other, a young soldier who had followed orders.",
      "Their first encounter was dominated by silence, and words remained frozen at the back of their throats.",
      "Even so, the instant one returned the grip of the hand the other had extended, a crack opened in the long chain of hatred.",
      "Though no words could exhaust the apology, the gaze that accompanied it was free of falsehood and sufficed to fell the walls in both hearts.",
      "Whereas state-level apologies are deliberated within a legal framework, reconciliation between individuals is a living site accompanied by the trembling of the body itself.",
      "What the two spoke of was not political stance but the names of lost family. Those names became the bridge connecting past to future.",
      "Reconciliation is nothing other than the labor of mutually acknowledging the resolve to set out walking while shouldering the past, rather than erasing it.",
      "Where the sound of gunfire has ceased, a spring wind now blows, and the weight of the memory that wind carries cannot fail to be handed down to later generations."
    ],
    vocab: [
      { word: "銃弾", reading: "じゅうだん", meaning: "bullet" },
      { word: "芽吹く", reading: "めぶく", meaning: "to bud; to sprout" },
      { word: "和解", reading: "わかい", meaning: "reconciliation" },
      { word: "悪夢", reading: "あくむ", meaning: "nightmare" },
      { word: "憎悪", reading: "ぞうお", meaning: "hatred" },
      { word: "連鎖", reading: "れんさ", meaning: "chain" },
      { word: "亀裂", reading: "きれつ", meaning: "crack; fissure" },
      { word: "謝罪", reading: "しゃざい", meaning: "apology" },
      { word: "偽り", reading: "いつわり", meaning: "falsehood; lie" },
      { word: "架け橋", reading: "かけはし", meaning: "bridge" },
      { word: "背負う", reading: "せおう", meaning: "to bear; to carry on the back" },
      { word: "覚悟", reading: "かくご", meaning: "resolve; preparedness" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-14 — An educational philosophy
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-14",
    title: "試[こころ]みる力[ちから]を養[やしな]う教育[きょういく]",
    titleReading: "こころみるちからをやしなうきょういく",
    level: "N1",
    summary: "A reform-minded educator argues that the classroom which never mocks failure is the only soil in which genuine learning takes root, and that the role of a teacher is to pose questions together with students rather than to inject knowledge into them.",
    estMinutes: 6,
    tags: ["education", "reform", "experiential learning"],
    body: [
      "試[こころ]みて失敗[しっぱい]する者[もの]を笑[わら]わぬ教室[きょうしつ]こそ、真[しん]の学[まな]びを生[しょう]じさせる土壌[どじょう]である。",
      "かつての学校[がっこう]は、正解[せいかい]を暗記[あんき]する者[もの]を優[やさ]秀[しゅう]と称[しょう]する構造[こうぞう]に貫[つらぬ]かれていた。",
      "しかしながら、社会[しゃかい]が複雑[ふくざつ]化[か]するにつれ、与[あた]えられた正解[せいかい]をなぞるだけの人材[じんざい]は用[もち]を成[な]さなくなった。",
      "教師[きょうし]たる者[もの]は、知識[ちしき]を注入[ちゅうにゅう]する装置[そうち]であってはならず、問[とい]いを共[とも]に立[た]てる仲間[なかま]であるべきだ。",
      "ある学校[がっこう]では、地域[ちいき]の課題[かだい]を授業[じゅぎょう]に取[と]り入[い]れ、生徒[せいと]らが自[みずか]ら調査[ちょうさ]と提言[ていげん]を繰[く]り返[かえ]す手法[しゅほう]を採用[さいよう]した。",
      "最初[さいしょ]は戸惑[とまど]う生徒[せいと]もいたものの、次第[しだい]に自[じ]分[ぶん]の言葉[ことば]で語[かた]り始[はじ]める姿[すがた]が見[み]られるようになった。",
      "評価[ひょうか]の指標[しひょう]も、テストの点数[てんすう]から、過程[かてい]にどれだけ深[ふか]く関[かか]わったかに移行[いこう]した。",
      "もとより、制度[せいど]を一変[いっへん]させるには時間[じかん]がかかる。親[おや]の不安[ふあん]や受験[じゅけん]の圧力[あつりょく]は依然[いぜん]として重[おも]しとしてのしかかる。",
      "それでも、子[こ]どもが問[とい]いを立[た]てる力[ちから]を育[いく]む教育[きょういく]こそ、不確実[ふかくじつ]な未来[みらい]に立[た]ち向[む]かうための最大[さいだい]の武器[ぶき]であると言[い]わずにはおかない。"
    ],
    translation: [
      "A classroom that never laughs at those who attempt and fail is the only soil in which genuine learning arises.",
      "Schools of the past were pervaded by a structure that praised as excellent those who memorized correct answers.",
      "Yet as society grew more complex, talent that merely traced given answers ceased to serve any purpose.",
      "One who is a teacher must not be a device for injecting knowledge; rather, a teacher ought to be a companion who poses questions together with students.",
      "At one school, regional issues were brought into the classroom, and a method was adopted in which students themselves repeatedly conducted investigations and made proposals.",
      "Although some students were bewildered at first, gradually they came to be seen speaking in their own words.",
      "Indicators of evaluation also shifted from test scores to how deeply one engaged with the process.",
      "Needless to say, transforming a system takes time; parental anxiety and examination pressure remain a heavy weight upon it.",
      "Even so, an education that cultivates in children the power to pose questions is, one cannot but say, the greatest weapon for facing an uncertain future."
    ],
    vocab: [
      { word: "試みる", reading: "こころみる", meaning: "to attempt" },
      { word: "養う", reading: "やしなう", meaning: "to cultivate; to nourish" },
      { word: "土壌", reading: "どじょう", meaning: "soil" },
      { word: "注入", reading: "ちゅうにゅう", meaning: "injection" },
      { word: "仲間", reading: "なかま", meaning: "companion" },
      { word: "提言", reading: "ていげん", meaning: "proposal" },
      { word: "戸惑う", reading: "とまどう", meaning: "to be bewildered" },
      { word: "指標", reading: "しひょう", meaning: "indicator" },
      { word: "移行", reading: "いこう", meaning: "transition" },
      { word: "一変", reading: "いっへん", meaning: "complete change" },
      { word: "依然", reading: "いぜん", meaning: "still; as before" },
      { word: "育む", reading: "いくむ", meaning: "to nurture" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-15 — A linguistic discovery
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-15",
    title: "消[き]えゆく言語[げんご]が語[かた]る人類[じんるい]の記憶[きおく]",
    titleReading: "きえゆくげんごがかたるじんるいのきおく",
    level: "N1",
    summary: "A linguist recording a language spoken by only four elders in a near-polar village discovers that it is an isolate whose vocabulary carries traces of southern flora and fauna, suggesting an ancient migration hidden from written history.",
    estMinutes: 8,
    tags: ["linguistics", "endangered language", "migration"],
    body: [
      "北[きた]の極地[きょくち]に近[ちか]い村[むら]で、わずか四[よ]人[にん]の高齢[こうれい]者[しゃ]しか話[はな]せない言語[げんご]が記録[きろく]され始[はじ]めた。",
      "言語[げんご]学者[がくしゃ]は数[すう]年[ねん]にわたり、その語彙[ごい]と文法[ぶんぽう]を一[ひと]つ一[ひと]つ書[か]き留[と]めた。",
      "当初[とうしょ]、周辺[しゅうへん]の言語[げんご]群[ぐん]との類似性[るいじせい]が見出[みいだ]されるものと予想[よそう]されていた。",
      "しかしながら、解析[かいせき]が進[すす]むにつれ、その言語[げんご]が既知[きち]のどの系統[けいとう]にも属[ぞく]さない孤立語[こりつご]であることが判明[はんめい]した。",
      "特[とく]に注目[ちゅうもく]を集[あつ]めたのは、動植物[どうしょくぶつ]の名称[めいしょう]に、遠[とお]く南方[なんぽう]の地域[ちいき]の生物[せいぶつ]を示[しめ]す語[ご]が混[ま]じっていた点[てん]である。",
      "この発見[はっけん]は、話[はな]し手[て]たちの祖先[そせん]が、かつて南方[なんぽう]から長[なが]い旅[たび]を経[へ]て北上[ほくじょう]した可能性[かのうせい]を示唆[しさ]している。",
      "言語[げんご]とは、単[たん]なる意思[いし]伝達[でんたつ]の道具[どうぐ]ではなく、民族[みんぞく]の記憶[きおく]を畳[たた]み込[こ]んだ生[なま]の化石[かせき]である。",
      "最後[さいご]の話[はな]し手[て]が死[し]ねば、その記憶[きおく]は二[に]度[ど]と取[と]り戻[もど]せず、人類[じんるい]の多様性[たようせい]は不可逆[ふかぎゃく]に縮小[しゅくしょう]する。",
      "学者[がくしゃ]は記録[きろく]を続[つづ]ける一方[いっぽう]で、若[わか]い世代[せだい]にその言語[げんご]を引[ひ]き継[つ]ぐ手立[てだ]てを講[こう]じている。",
      "それが徒[むだ]に終[お]わる可能性[かのうせい]も高[たか]いが、それでも挑[いど]まざるを得[え]ないのは、消[き]えゆく声[こえ]を黙殺[もくさつ]することが学者[がくしゃ]の良心[りょうしん]に反[はん]するからである。"
    ],
    translation: [
      "In a village near the northern polar region, a language spoken by only four elders began to be recorded.",
      "Over several years, linguists committed its vocabulary and grammar to writing one item at a time.",
      "Initially, it was expected that similarities with surrounding language groups would be found.",
      "However, as analysis progressed, it became clear that the language was an isolate belonging to no known lineage.",
      "What drew particular attention was that among the names for flora and fauna were words denoting creatures of distant southern regions.",
      "This finding suggests the possibility that the ancestors of the speakers once journeyed northward from the south over a long migration.",
      "Language is not merely a tool for communicating intent; it is a living fossil in which the memory of a people is folded.",
      "Once the last speaker dies, that memory can never be recovered, and the diversity of humanity will irreversibly shrink.",
      "While continuing to record, scholars are also devising means to pass the language on to younger generations.",
      "The likelihood that such efforts will end in vain is high, yet they cannot refrain from taking up the challenge, for to ignore a vanishing voice would violate a scholar's conscience."
    ],
    vocab: [
      { word: "極地", reading: "きょくち", meaning: "polar region" },
      { word: "語彙", reading: "ごい", meaning: "vocabulary" },
      { word: "類似性", reading: "るいじせい", meaning: "similarity" },
      { word: "系統", reading: "けいとう", meaning: "lineage" },
      { word: "孤立語", reading: "こりつご", meaning: "language isolate" },
      { word: "示唆", reading: "しさ", meaning: "suggestion; hint" },
      { word: "祖先", reading: "そせん", meaning: "ancestor" },
      { word: "不可逆", reading: "ふかぎゃく", meaning: "irreversible" },
      { word: "縮小", reading: "しゅくしょう", meaning: "reduction" },
      { word: "徒", reading: "むだ", meaning: "in vain" },
      { word: "黙殺", reading: "もくさつ", meaning: "ignoring; silencing" },
      { word: "良心", reading: "りょうしん", meaning: "conscience" },
      { word: "講じる", reading: "こうじる", meaning: "to take (measures)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-16 — A neuroscientific breakthrough
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-16",
    title: "記憶[きおく]を編[あ]み直[なお]す神経[しんけい]科学[かがく]",
    titleReading: "きおくをあみなおすしんけいかがく",
    level: "N1",
    summary: "The discovery that memories are rewritten each time they are recalled opens new therapeutic possibilities for trauma while raising the question of whether a self stripped of its past can preserve its continuity.",
    estMinutes: 8,
    tags: ["neuroscience", "memory", "ethics"],
    body: [
      "長[なが]い間[あいだ]、記憶[きおく]は一度[いちど]固定[こてい]されれば不変[ふへん]であると信[しん]じられてきた。",
      "しかし、最新[さいしん]の研究[けんきゅう]は、記憶[きおく]が呼[よ]び起[お]こされるたびに再[さい]構築[こうちく]されるという動態[どうたい]を明[あき]らかにした。",
      "この過程[かてい]は「再固定[さいこてい]」と呼[よ]ばれ、記憶[きおく]の本体[ほんたい]が神経[しんけい]細胞[さいぼう]間[かん]の結合[けつごう]強度[きょうど]に依存[いぞん]することを示[しめ]している。",
      "実験[じっけん]では、恐怖[きょうふ]記憶[きおく]を意図[いと]的[てき]に喚起[かんき]した直後[ちょくご]に干渉[かんしょう]を加[くわ]えることで、その記憶[きおく]の情動[じょうどう]的[てき]反応[はんのう]を減弱[げんじゃく]させることができた。",
      "これは、外傷[がいしょう]後[ご]の心的[しんてき]外傷[がいしょう]に苦[くる]しむ患者[かんじゃ]に対[たい]する新[あたら]しい治療[ちりょう]の道[みち]を開[ひら]くものと期待[きたい]されている。",
      "一[いっ]方[ぽう]で、記憶[きおく]の改変[かいへん]は人格[じんかく]の同一性[どういつせい]を揺[ゆる]がす可能性[かのうせい]を孕[はら]んでおり、倫理[りんり]的[てき]議論[ぎろん]を不可欠[ふかけつ]にする。",
      "薬物[やくぶつ]を用[もち]いて記憶[きおく]を意図[いと]的[てき]に消去[しょうきょ]することは、技術[ぎじゅつ]的[てき]に可能[かのう]になりつつある。",
      "しかしながら、過去[かこ]を失[うしな]った人間[にんげん]が同一[どういつ]の人格[じんかく]を維持[いじ]できるかは、哲学[てつがく]的[てき]に未解決[みかいけつ]な問[とい]いである。",
      "記憶[きおく]とは過去[かこ]を写[うつ]す鏡[かがみ]であると同時[どうじ]に、現在[げんざい]を形作[かたちづく]る工具[こうぐ]でもある。",
      "その両義性[りょうぎせい]を踏[ふ]まえた上[うえ]で、科学[かがく]は人間[にんげん]とは何[なに]かという根源的[こんげんてき]な問[とい]いと向[む]き合[あ]わずにはおかない。"
    ],
    translation: [
      "For a long time, memory was believed to be immutable once it had been consolidated.",
      "Recent research, however, has revealed the dynamic property that memory is reconstructed each time it is recalled.",
      "This process is called 'reconsolidation,' and it shows that the substance of memory depends on the strength of the connections between neurons.",
      "In experiments, by deliberately evoking a fear memory and immediately introducing interference, the emotional response of that memory could be attenuated.",
      "This is expected to open a new therapeutic path for patients suffering from post-traumatic stress.",
      "At the same time, modifying memory harbors the possibility of shaking the identity of personality, making ethical debate indispensable.",
      "Using drugs to deliberately erase memory is becoming technically possible.",
      "Yet whether a human being who has lost the past can maintain an identical personality is a philosophically unresolved question.",
      "Memory is at once a mirror that reflects the past and a tool that shapes the present.",
      "In light of that ambiguity, science cannot fail to confront the fundamental question of what a human being is."
    ],
    vocab: [
      { word: "再構築", reading: "さいこうちく", meaning: "reconstruction" },
      { word: "再固定", reading: "さいこてい", meaning: "reconsolidation" },
      { word: "動態", reading: "どうたい", meaning: "dynamics" },
      { word: "結合", reading: "けつごう", meaning: "binding; connection" },
      { word: "強度", reading: "きょうど", meaning: "strength" },
      { word: "喚起", reading: "かんき", meaning: "evocation" },
      { word: "干渉", reading: "かんしょう", meaning: "interference" },
      { word: "減弱", reading: "げんじゃく", meaning: "attenuation" },
      { word: "外傷", reading: "がいしょう", meaning: "trauma" },
      { word: "改変", reading: "かいへん", meaning: "modification" },
      { word: "同一性", reading: "どういつせい", meaning: "identity" },
      { word: "未解決", reading: "みかいけつ", meaning: "unresolved" },
      { word: "両義性", reading: "りょうぎせい", meaning: "ambiguity" },
      { word: "根源的", reading: "こんげんてき", meaning: "fundamental" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-17 — A climate justice movement
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-17",
    title: "海[うみ]に沈[しず]む島[しま]が叫[さけ]ぶ気候[きこう]正義[せいぎ]",
    titleReading: "うみにしずむしまがさけぶきこうせいぎ",
    level: "N1",
    summary: "A small island nation facing rising seas takes major emitter states to court, and a partial verdict in its favor gives the first concrete outline of climate responsibility under international law.",
    estMinutes: 7,
    tags: ["climate", "justice", "lawsuit"],
    body: [
      "太平洋[たいへいよう]の小[ちい]さな島国[とうこく]が、海面[かいめん]の上昇[じょうしょう]に伴[ともな]う国土[こくど]の浸水[しんすい]に直面[ちょくめん]している。",
      "島[しま]の住民[じゅうみん]らは、数[すう]十年[じゅうねん]後[ご]には祖先[そせん]の墓[はか]すら海中[かいちゅう]に没[ぼっ]する恐[おそ]れを抱[いだ]いている。",
      "この危機[きき]は、もはや一部[いちぶ]の地域[ちいき]の不幸[ふこう]ではなく、地球[ちきゅう]規模[きぼ]の不正義[ふせいぎ]の縮図[しゅくず]である。",
      "島[しま]の代表[だいひょう]は、主要[しゅよう]排出[はいしゅつ]国[こく]を相手[あいて]に提訴[ていそ]し、過去[かこ]の排出[はいしゅつ]に対[たい]する責任[せきにん]を問[と]うた。",
      "法廷[ほうてい]では、科学的[かがくてき]証拠[しょうこ]が積[つ]み重[かさ]ねられ、島[しま]の喪失[そうしつ]と排出[はいしゅつ]の因果関係[いんがかんけい]が明[あき]らかにされた。",
      "被告[ひこく]側[がわ]は経済的[けいざいてき]発展[はってん]の優先[ゆうせん]を主張[しゅちょう]したものの、生存権[せいぞんけん]を脅[おびや]かす発展[はってん]の正当性[せいとうせい]は問[と]い直[なお]さざるを得[え]ない。",
      "判決[はんけつ]は一部[いちぶ]の島[しま]側[がわ]の主張[しゅちょう]を認[みと]めるものとなり、国際法[こくさいほう]における気候責任[きこうせきにん]の輪郭[りんかく]を初[はじ]めて具体化[ぐたいか]した。",
      "もとより、一[ひと]つの判決[はんけつ]が海面[かいめん]の上昇[じょうしょう]を食[く]い止[と]めるわけではない。",
      "それでも、声[こえ]なき島[しま]の叫[さけ]びが法廷[ほうてい]という場[ば]で公式[こうしき]に聞[き]かれたという事実[じじつ]は、未来[みらい]の気候政策[きこうせいさく]を変容[へんよう]させる力[ちから]を孕[はら]んでいる。",
      "我[われ]々は今[いま]、世代間[せだいかん]の正義[せいぎ]という問[とい]いの前[まえ]に立[た]たされている。答[こた]えを先送[さきおく]りすれば、海[うみ]は容赦[ようしゃ]なく我[われ]々の足元[あしもと]に迫[せま]る。"
    ],
    translation: [
      "A small island nation in the Pacific is confronting the inundation of its territory brought about by rising sea levels.",
      "Residents of the island harbor the fear that within decades even the graves of their ancestors may sink beneath the sea.",
      "This crisis is no longer a misfortune of one region but an epitome of injustice on a planetary scale.",
      "The island's representatives sued the major emitting states and called them to account for past emissions.",
      "In court, scientific evidence was accumulated, and the causal relationship between the loss of the island and the emissions was made plain.",
      "Although the defense argued for the priority of economic development, the legitimacy of a development that threatens the right to life cannot but be reconsidered.",
      "The verdict recognized part of the island's claims and, for the first time, gave concrete form to the outline of climate responsibility within international law.",
      "Needless to say, a single verdict will not halt the rise of the sea.",
      "Even so, the fact that the cry of the voiceless island was officially heard in a court of law carries a power capable of transforming future climate policy.",
      "We now stand before the question of justice between generations. Should we postpone an answer, the sea will mercilessly encroach upon our very feet."
    ],
    vocab: [
      { word: "浸水", reading: "しんすい", meaning: "flooding" },
      { word: "没する", reading: "ぼっする", meaning: "to sink; to submerge" },
      { word: "縮図", reading: "しゅくず", meaning: "epitome; miniature" },
      { word: "提訴", reading: "ていそ", meaning: "lawsuit; filing" },
      { word: "排出", reading: "はいしゅつ", meaning: "emission" },
      { word: "因果関係", reading: "いんがかんけい", meaning: "causal relationship" },
      { word: "正当性", reading: "せいとうせい", meaning: "legitimacy" },
      { word: "判決", reading: "はんけつ", meaning: "verdict" },
      { word: "輪郭", reading: "りんかく", meaning: "outline" },
      { word: "容赦", reading: "ようしゃ", meaning: "mercy" },
      { word: "足元", reading: "あしもと", meaning: "footing; beneath one's feet" },
      { word: "先送り", reading: "さきおくり", meaning: "postponement" },
      { word: "生存権", reading: "せいぞんけん", meaning: "right to life" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-18 — A post-human debate
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-18",
    title: "「人間[にんげん]」の輪郭[りんかく]が溶[と]ける先[さき]へ",
    titleReading: "にんげんのりんかくがとけるさきへ",
    level: "N1",
    summary: "As organs are replaced, genes optimized, and brains wired to the cloud, the very definition of the human begins to dissolve, and the debate over enhancement reopens the oldest question of what we are.",
    estMinutes: 8,
    tags: ["transhumanism", "ethics", "technology"],
    body: [
      "臓器[ぞうき]を機械[きかい]に置[お]き換[か]え、遺伝[いでん]子[し]を最適化[さいてきか]し、脳[のう]を雲[くも]に接続[せつぞく]する――技術[ぎじゅつ]は人間[にんげん]の定義[ていぎ]そのものを揺[ゆる]がしている。",
      "「ポストヒューマン」という概念[がいねん]は、人間[にんげん]の能力[のうりょく]の限界[げんかい]を超[こ]えた存在[そんざい]を指[さ]す。",
      "支持[しじ]者[しゃ]は、病[やまい]や老[おい]いから解放[かいほう]される未来[みらい]を描[えが]き、人類[じんるい]の新[あたら]しい段階[だんかい]へと向[む]かう一歩[いっぽ]と位置付[いちづ]ける。",
      "一[いっ]方[ぽう]で、批判派[ひはんは]は、強化[きょうか]の恩恵[おんけい]が富[とみ]める者[もの]に集中[しゅうちゅう]し、新[あたら]しい階層[かいそう]分化[ぶんか]が生[しょう]じると警告[けいこく]する。",
      "人間[にんげん]の尊厳[そんげん]とは、能力[のうりょく]の高[たか]さに依存[いぞん]するものではなく、むしろ弱[よわ]さや限界[げんかい]のうちにこそ宿[やど]るという立場[たちば]も根強[ねづよ]い。",
      "痛[いた]みを感[かん]じる能力[のうりょく]を失[うしな]った者[もの]が、他者[たしゃ]の痛[いた]みを理解[りかい]できるか。倫理[りんり]の根源[こんげん]を成[な]す共感性[きょうかんせい]は、身体[しんたい]の脆弱性[ぜいじゃくせい]と結[むす]び付[つ]いているからである。",
      "さらに、意識[いしき]をデジタル化[でじたるか]して転送[てんそう]する技術[ぎじゅつ]が現実[げんじつ]のものとなれば、「自己[じこ]」の連続性[れんぞくせい]は根本的[こんぽんてき]に解体[かいたい]される。",
      "人間[にんげん]とは何[なに]かという問[とい]いに、容易[ようい]な答[こた]えは存在[そんざい]しない。",
      "とはいえ、技術[ぎじゅつ]が急速[きゅうそく]に進[すす]む中[なか]で、我[われ]々は答[こた]えを保留[ほりゅう]する特権[とっけん]すら失[うしな]いつつある。",
      "ポストヒューマンの時代[じだい]に突入[とつにゅう]する前[まえ]に、我[われ]々は人間[にんげん]という種[しゅ]が積[つ]み上[あ]げてきた哲学的[てつがくてき]遺産[いさん]を再点検[さいてんけん]せずにはおかない。"
    ],
    translation: [
      "Replacing organs with machines, optimizing genes, connecting the brain to the cloud — technology is shaking the very definition of the human.",
      "The concept of the 'posthuman' denotes a being that has surpassed the limits of human capability.",
      "Supporters depict a future liberated from illness and old age, and frame it as a step toward a new stage of humanity.",
      "Critics, on the other hand, warn that the benefits of enhancement will concentrate among the wealthy and that a new stratification will arise.",
      "The position that human dignity does not depend on the height of one's abilities but rather lodges precisely within weakness and limit also runs deep.",
      "Can one who has lost the capacity to feel pain understand the pain of another? The empathy that constitutes the root of ethics is bound up with the vulnerability of the body.",
      "Furthermore, should the technology to digitize and transfer consciousness become real, the continuity of the 'self' would be fundamentally dismantled.",
      "There is no easy answer to the question of what a human being is.",
      "That said, as technology advances rapidly, we are losing even the privilege of withholding an answer.",
      "Before entering the era of the posthuman, we cannot fail to reexamine the philosophical heritage that the human species has accumulated."
    ],
    vocab: [
      { word: "輪郭", reading: "りんかく", meaning: "outline" },
      { word: "解放", reading: "かいほう", meaning: "liberation" },
      { word: "限界", reading: "げんかい", meaning: "limit" },
      { word: "階層", reading: "かいそう", meaning: "class; stratum" },
      { word: "分化", reading: "ぶんか", meaning: "differentiation" },
      { word: "脆弱性", reading: "ぜいじゃくせい", meaning: "vulnerability" },
      { word: "共感性", reading: "きょうかんせい", meaning: "empathy" },
      { word: "連続性", reading: "れんぞくせい", meaning: "continuity" },
      { word: "解体", reading: "かいたい", meaning: "dismantling" },
      { word: "容易", reading: "ようい", meaning: "easy" },
      { word: "保留", reading: "ほりゅう", meaning: "reservation; holding" },
      { word: "特権", reading: "とっけん", meaning: "privilege" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-19 — An archaeological revelation
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-19",
    title: "砂[すな]の下[した]に眠[ねむ]る王[おう]の真名[まな]",
    titleReading: "すなのしたにねむるおうのまな",
    level: "N1",
    summary: "A stone monument unearthed in a corner of the desert bears the name of a king erased from official history, revealing that he saved his people from famine and that later dynasties expunged him to protect their own legitimacy.",
    estMinutes: 8,
    tags: ["archaeology", "history", "discovery"],
    body: [
      "砂漠[さばく]の一角[いっかく]で発掘[はっくつ]された石碑[せきひ]が、古代王朝[こだいおうちょう]の系図[けいず]を根底[こんてい]から覆[くつがえ]した。",
      "砂[すな]に埋[う]もれた遺構[いこう]は、長[なが]い間[あいだ]盗掘[とうくつ]者[しゃ]の手[て]を免[まぬが]れていた奇跡的[きせきてき]な遺物[いぶつ]であった。",
      "碑文[ひぶん]には、正史[せいし]においては存在[そんざい]しないとされてきた「失[うしな]われた王[おう]」の名[な]が刻[きざ]まれていた。",
      "その王[おう]は、王朝[おうちょう]の最[もっと]も動揺[どうよう]した時期[じき]に即位[そくい]し、わずか七[しち]年[ねん]で姿[すがた]を消[け]したと記[しる]されていた。",
      "文字[もじ]の解読[かいどく]には数多[あまた]の専門家[せんもんか]が総力[そうりょく]を挙[あ]げ、比較言語学[ひかくげんごがく]の手法[しゅほう]が動員[どういん]された。",
      "解読[かいどく]の結果[けっか]、この王[おう]が当時[とうじ]の旱魃[かんばつ]に直面[ちょくめん]し、灌漑制度[かんがいせいど]を整備[せいび]して民衆[みんしゅう]を飢饉[ききん]から救[すく]ったことが判明[はんめい]した。",
      "後[のち]の王朝[おうちょう]がこの記録[きろく]を抹消[まっしょう]したのは、自[みずか]らの正統性[せいとうせい]を揺[ゆる]がす畏[おそれ]があったからに相違[そうい]ない。",
      "歴史[れきし]とは勝者[しょうしゃ]が書[か]くものと言[い]われるが、砂[すな]は敗者[はいしゃ]の声[こえ]をも保存[ほぞん]し得[う]る沈黙[ちんもく]の記録者[きろくしゃ]であった。",
      "発掘[はっくつ]チームは、碑文[ひぶん]の内容[ないよう]を公開[こうかい]するに当[あ]たり、地元[じもと]の研究者[けんきゅうしゃ]と共[とも]に文脈[ぶんめき]を慎重[しんちょう]に検証[けんしょう]した。",
      "一枚[いちまい]の石碑[せきひ]が歴史[れきし]を書[か]き換[か]える力[ちから]を持[も]つという事実[じじつ]は、過去[かこ]が決[けっ]して固定[こてい]されたものではないことを我[われ]々に示[しめ]さずにはおかない。"
    ],
    translation: [
      "A stone monument excavated in a corner of the desert overturned the genealogy of the ancient dynasty at its roots.",
      "The ruins buried in sand were a miraculous artifact that had long escaped the hands of looters.",
      "The inscription bore the name of a 'lost king' who was said not to exist in the official histories.",
      "It was recorded that this king ascended the throne during the dynasty's most turbulent period and vanished within a mere seven years.",
      "A great many specialists marshaled all their strength to decipher the characters, and the methods of comparative linguistics were brought to bear.",
      "As a result of the decipherment, it became clear that this king had faced the drought of his time, developed an irrigation system, and saved the populace from famine.",
      "There can be no doubt that later dynasties expunged this record out of fear that it would shake their own legitimacy.",
      "History is said to be written by the victors, yet sand proved to be a silent recorder capable of preserving even the voices of the defeated.",
      "In preparing to make the contents of the inscription public, the excavation team carefully verified its context together with local researchers.",
      "The fact that a single stone monument can possess the power to rewrite history cannot fail to show us that the past is never a fixed thing."
    ],
    vocab: [
      { word: "石碑", reading: "せきひ", meaning: "stone monument" },
      { word: "発掘", reading: "はっくつ", meaning: "excavation" },
      { word: "遺構", reading: "いこう", meaning: "ruins" },
      { word: "遺物", reading: "いぶつ", meaning: "artifact" },
      { word: "系図", reading: "けいず", meaning: "genealogy" },
      { word: "即位", reading: "そくい", meaning: "enthronement" },
      { word: "旱魃", reading: "かんばつ", meaning: "drought" },
      { word: "灌漑", reading: "かんがい", meaning: "irrigation" },
      { word: "飢饉", reading: "ききん", meaning: "famine" },
      { word: "抹消", reading: "まっしょう", meaning: "erasure" },
      { word: "正統性", reading: "せいとうせい", meaning: "legitimacy" },
      { word: "畏", reading: "おそれ", meaning: "fear" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "慎重", reading: "しんちょう", meaning: "careful" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-20 — A social revolution
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-20",
    title: "声[こえ]なき者[もの]が覆[くつがえ]す秩序[ちつじょ]",
    titleReading: "こえなきものがくつがえすちつじょ",
    level: "N1",
    summary: "Without a single cry, the marginalized who had long been pushed to the periphery sit down and quietly overturn an existing order, proving that the determination to keep sitting can succeed where weapons cannot.",
    estMinutes: 7,
    tags: ["revolution", "protest", "social change"],
    body: [
      "政治家[せいじか]も新聞[しんぶん]も予期[よき]せぬ瞬間[しゅんかん]に、街[まち]は静[しず]かに、しかし確実[かくじつ]に変[か]わり始[はじ]めた。",
      "長[なが]く周縁[しゅうえん]に追[お]われてきた人[ひと]びとが、声[こえ]を上[あ]げるでもなく、ただ座[すわ]り込[こ]むことで既存[きぞん]の秩序[ちつじょ]を揺[ゆる]がした。",
      "彼[かれ]らの沈黙[ちんもく]は、言葉[ことば]で語[かた]り得[う]る以上[いじょう]のものを訴[うった]えていた。",
      "警察[けいさつ]が動[うご]き出[だ]すよりも速[はや]く、群衆[ぐんしゅう]の意思[いし]は波[なみ]のように広[ひろ]がった。",
      "政府内部[せいふないぶ]にも亀裂[きれつ]が走[はし]り、強硬派[きょうこうは]と対話派[たいわは]が鋭[するど]く対立[たいりつ]した。",
      "三日[みっか]を経[へ]て、政府[せいふ]は譲歩[じょうほ]を発表[はっぴょう]せざるを得[え]なくなった。これは、軍事的[ぐんじてき]な力[ちから]では鎮[しず]められぬ波[なみ]であることを悟[さと]ったからである。",
      "暴力[ぼうりょく]を一切[いっさい]用[もち]いずに王[おう]を退[しりぞ]けたこの革命[かくめい]は、歴史[れきし]に新[あたら]しい一章[いっしょう]を刻[きざ]んだ。",
      "もとより、秩序[ちつじょ]が覆[くつがえ]るだけでは革命[かくめい]は完結[かんけつ]しない。次[つぎ]の世代[せだい]が新[あたら]しい制度[せいど]を築[きず]く作業[さぎょう]は、より困難[こんなん]を極[きわ]める。",
      "それでも、声[こえ]なき者[もの]が自[みずか]らの存在[そんざい]を証明[しょうめい]したこの日[ひ]は、未来[みらい]の社会[しゃかい]を規定[きてい]する原点[げんてん]として記憶[きおく]されよう。",
      "真[しん]の変革[へんかく]は、槍[やり]や剣[けん]ではなく、座[すわ]り続[つづ]ける人[ひと]の決意[けつい]のうちに生[しょう]じることを、歴史[れきし]は繰[く]り返[かえ]し教[おし]えている。"
    ],
    translation: [
      "At a moment unforeseen by politicians and newspapers alike, the town began to change quietly, yet unmistakably.",
      "Those who had long been relegated to the periphery shook the existing order not by raising their voices but simply by sitting down.",
      "Their silence conveyed more than words could possibly express.",
      "Faster than the police could mobilize, the will of the crowd spread like a wave.",
      "A fissure ran through the interior of the government as well, and hardliners and dialogue advocates clashed sharply.",
      "After three days, the government was forced to announce concessions, having realized that this was a wave no military force could suppress.",
      "This revolution, which drove the king from power without employing any violence whatsoever, carved a new chapter into history.",
      "Needless to say, revolution does not end with the overturning of order; the labor of the next generation building a new system proves even more arduous.",
      "Even so, the day on which the voiceless proved their own existence will surely be remembered as the point of origin that defines the society to come.",
      "History repeatedly teaches us that genuine transformation arises not from spears or swords, but from the resolve of those who keep sitting."
    ],
    vocab: [
      { word: "周縁", reading: "しゅうえん", meaning: "periphery" },
      { word: "秩序", reading: "ちつじょ", meaning: "order" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" },
      { word: "群衆", reading: "ぐんしゅう", meaning: "crowd" },
      { word: "警察", reading: "けいさつ", meaning: "police" },
      { word: "亀裂", reading: "きれつ", meaning: "crack; fissure" },
      { word: "強硬派", reading: "きょうこうは", meaning: "hardliners" },
      { word: "譲歩", reading: "じょうほ", meaning: "concession" },
      { word: "鎮める", reading: "しずめる", meaning: "to suppress; to calm" },
      { word: "悟る", reading: "さとる", meaning: "to realize" },
      { word: "退く", reading: "しりぞく", meaning: "to step down; to retreat" },
      { word: "完結", reading: "かんけつ", meaning: "completion" }
    ]
  }
];
