import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// This file covers Shin-Zaizen Master 語法 N3-level grammar points (chunk A),
// grouped chapter-wise by category. IDs follow the pattern gn3-01..gn3-50.

export const grammarN3A: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // CHAPTER 1 — Conditionals (条件・仮定)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-01",
    point: "〜限り",
    reading: "〜かぎり",
    level: "N3",
    category: "Conditionals",
    meaning: "As long as... / while... continues",
    structure: "V-辞書形 / V-ている / N + である + 限り",
    explanation:
      "〜限り indicates a continuing condition that maintains a certain state: as long as X continues, Y will also continue. It expresses a guarantee based on the persistence of the stated condition.",
    formation:
      "V-辞書形 + 限り (生[い]きている限り)\nV-ている + 限り (働[はたら]いている限り)\nN + である限り (学生[がくせい]である限り)\n否定形 + 限り (行[い]かない限り)",
    examples: [
      { jp: "私[わたし]が生[い]きている限[かぎ]り、あなたを守[まも]ります。", en: "As long as I am alive, I will protect you." },
      { jp: "雨[あめ]が降[ふ]らない限[かぎ]り、試合[しあい]は続[つづ]けられます。", en: "As long as it does not rain, the match will continue." }
    ],
    notes: "〜ない限り means \"unless\"; 〜限り(では) is a separate pattern meaning \"as far as I can judge\".",
    related: ["gn3-02", "gn3-03"]
  },

  {
    id: "gn3-02",
    point: "〜ない限り",
    reading: "〜ないかぎり",
    level: "N3",
    category: "Conditionals",
    meaning: "Unless... / as long as... not",
    structure: "V-ない形 + 限り",
    explanation:
      "〜ない限り expresses a negative condition: unless X happens, Y will not happen. It is very often paired with a negative predicate in the main clause.",
    formation:
      "V-ない形 + 限り (行[い]かない限り)\nい-adj くない + 限り (寒[さむ]くない限り)\nN / な-adj ではない + 限り (問題[もんだい]ではない限り)",
    examples: [
      { jp: "薬[くすり]を飲[の]まない限[かぎ]り、病気[びょうき]は治[なお]りません。", en: "Unless you take the medicine, your illness will not cure." },
      { jp: "試験[しけん]に合格[ごうかく]しない限[かぎ]り、卒業[そつぎょう]できません。", en: "Unless you pass the exam, you cannot graduate." }
    ],
    notes: "Frequently paired with 〜ない in the main clause to express the double-negative \"only if X happens will Y occur\".",
    related: ["gn3-01", "gn3-03"]
  },

  {
    id: "gn3-03",
    point: "〜とすれば / 〜としたら",
    reading: "〜とすれば / 〜としたら",
    level: "N3",
    category: "Conditionals",
    meaning: "If one assumes that... / supposing that...",
    structure: "普通体 + とすれば / としたら",
    explanation:
      "〜とすれば and 〜としたら mark a hypothetical assumption: if we suppose X is the case, then what follows? Used to consider the consequences of an imagined situation.",
    formation:
      "V普通体 + とすれば (行[い]くとすれば)\nい-adj + とすれば (高[たか]いとすれば)\nN / な-adj + だ + とすれば (学生[がくせい]だとすれば)",
    examples: [
      { jp: "海外[かいがい]に行[い]くとすれば、どこに行[い]きたいですか。", en: "If you were to go abroad, where would you like to go?" },
      { jp: "彼[かれ]の話[はなし]が本当[ほんとう]だとしたら、大変[たいへん]なことだ。", en: "If his story is true, it is a serious matter." }
    ],
    notes: "〜とすると focuses on the immediate consequence, whereas 〜としたら asks about an imagined scenario.",
    related: ["gn3-01", "gn3-02", "gn3-04"]
  },

  {
    id: "gn3-04",
    point: "〜ものなら",
    reading: "〜ものなら",
    level: "N3",
    category: "Conditionals",
    meaning: "If at all possible... / if one could only...",
    structure: "V-可能形 + ものなら",
    explanation:
      "〜ものなら expresses a wish to do something if it is at all possible, often implying that the action is difficult. Used with the potential form for the nuance of \"if I could only...\".",
    formation:
      "V-可能形 + ものなら (戻[もど]れるものなら)\nV-辞書形 + ものなら (やるものなら — \"if you dare\")",
    examples: [
      { jp: "戻[もど]れるものなら、子[こ]どもの頃[ころ]に戻[もど]りたい。", en: "If I could go back, I would like to return to my childhood." },
      { jp: "行[い]けるものなら、宇宙[うちゅう]に行[い]ってみたい。", en: "If I could, I would like to try going to space." }
    ],
    notes: "Often used with verbs like 戻る, やめる, 逃げる, expressing a wistful wish about something difficult or impossible.",
    related: ["gn3-01", "gn3-03"]
  },

  {
    id: "gn3-05",
    point: "〜次第で",
    reading: "〜しだいで",
    level: "N3",
    category: "Conditionals",
    meaning: "Depending on... / according to...",
    structure: "N + 次第で",
    explanation:
      "〜次第で indicates that the outcome varies depending on the preceding noun: depending on X, the result changes. Used for situations where the result hinges on a choice, method, or condition.",
    formation:
      "N + 次第で (努力[どりょく]次第で)\nN + 次第だから (天候[てんこう]次第だから)\nN + 次第では (言[い]い方[かた]次第では)",
    examples: [
      { jp: "努力[どりょく]次第[しだい]で、人生[じんせい]は変[か]わる。", en: "Depending on your effort, your life can change." },
      { jp: "言[い]い方[かた]次第[しだい]で、相手[あいて]の反応[はんのう]も違[ちが]う。", en: "Depending on how you say it, the other person's reaction also differs." }
    ],
    notes: "〜次第 alone after V-ます (帰り次第) is a separate pattern meaning \"as soon as\" — do not confuse the two.",
    related: ["gn3-15", "gn3-03"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 2 — Cause/Reason (原因・理由)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-06",
    point: "〜おかげで",
    reading: "〜おかげで",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Thanks to... / because of (positive outcome)",
    structure: "普通体 + おかげで / N + の + おかげで",
    explanation:
      "〜おかげで expresses gratitude for a cause that led to a good result. The outcome in the main clause is positive; using it with a negative result sounds sarcastic or blaming.",
    formation:
      "V普通体 + おかげで (手伝[てつだ]ってくれたおかげで)\nい-adj + おかげで (寒[さむ]かったおかげで)\nN + の + おかげで (先生[せんせい]のおかげで)",
    examples: [
      { jp: "先生[せんせい]のおかげで、試験[しけん]に合格[ごうかく]できた。", en: "Thanks to my teacher, I was able to pass the exam." },
      { jp: "雨[あめ]が降[ふ]ったおかげで、涼[すず]しくなった。", en: "Thanks to the rain, it became cool." }
    ],
    notes: "Used sarcastically, it implies blame as in 彼[かれ]のおかげで失敗[しっぱい]した (Thanks to him, I failed).",
    related: ["gn3-07", "gn3-08"]
  },

  {
    id: "gn3-07",
    point: "〜せいで",
    reading: "〜せいで",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Because of... (negative outcome) / due to",
    structure: "普通体 + せいで / N + の + せいで",
    explanation:
      "〜せいで attributes a negative outcome to a cause: because of X, something bad happened. Used to assign blame for an undesirable result.",
    formation:
      "V普通体 + せいで (寝坊[ねぼう]したせいで)\nい-adj + せいで (暑[あつ]かったせいで)\nN + の + せいで (雨[あめ]のせいで)",
    examples: [
      { jp: "雨[あめ]のせいで、試合[しあい]は中止[ちゅうし]になった。", en: "Because of the rain, the match was canceled." },
      { jp: "彼[かれ]の嘘[うそ]のせいで、私[わたし]まで困[こま]った。", en: "Because of his lie, even I got into trouble." }
    ],
    notes: "Always followed by a negative outcome; pair with 〜おかげで for the positive counterpart.",
    related: ["gn3-06", "gn3-08"]
  },

  {
    id: "gn3-08",
    point: "〜ため(に)",
    reading: "〜ために",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Because of... / for the sake of...",
    structure: "普通体 + ために / N + の + ために",
    explanation:
      "〜ために expresses either a cause (because of X, Y happened) or a purpose (in order to do X). When expressing cause, both clauses share the speaker's viewpoint and the result is usually objective.",
    formation:
      "V-辞書形 + ために (行[い]くために — purpose)\nV-た形 + ために (遅[おく]れたために — cause)\nN + の + ために (子供[こども]のために)\nい-adj + ために (高[たか]かったために)",
    examples: [
      { jp: "家族[かぞく]のために働[はたら]いている。", en: "I am working for the sake of my family." },
      { jp: "雪[ゆき]が降[ふ]ったために、電車[でんしゃ]が遅[おく]れた。", en: "Because it snowed, the train was delayed." }
    ],
    notes: "For the purpose reading, the subject of both clauses must be the same and the main clause shows a volitional action.",
    related: ["gn3-06", "gn3-07", "gn3-09"]
  },

  {
    id: "gn3-09",
    point: "〜ばかりに",
    reading: "〜ばかりに",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Just because... (with regrettable result)",
    structure: "普通体 + ばかりに",
    explanation:
      "〜ばかりに expresses regret that a single small cause led to a bad outcome: just because of X, this unfortunate thing happened. The speaker feels the cause was disproportionate to the result.",
    formation:
      "V-た形 + ばかりに (油断[ゆだん]したばかりに)\nい-adj + ばかりに (高[たか]すぎたばかりに)\nN + である + ばかりに (子供[こども]であるばかりに)",
    examples: [
      { jp: "油断[ゆだん]したばかりに、試合[しあい]に負[ま]けてしまった。", en: "Just because I was careless, I ended up losing the match." },
      { jp: "一言[ひとこと]言[い]ったばかりに、大[おお]きな喧嘩[けんか]になった。", en: "Just because I said one word, it turned into a big fight." }
    ],
    notes: "Always expresses a negative, regretful outcome; distinguish from 〜ばかり (just finished / only).",
    related: ["gn3-06", "gn3-07", "gn3-08"]
  },

  {
    id: "gn3-10",
    point: "〜だけあって / 〜だけに",
    reading: "〜だけあって / 〜だけに",
    level: "N3",
    category: "Cause/Reason",
    meaning: "As one would expect / precisely because",
    structure: "普通体 + だけあって / だけに",
    explanation:
      "〜だけあって means \"as expected of X\" — acknowledging that a result is fitting given the cause. 〜だけに means \"precisely because of X, even more so\" — used when the result is intensified by the cause.",
    formation:
      "N + だけあって (料理人[りょうりにん]だけあって)\nV普通体 + だけに (優勝[ゆうしょう]しtだけに)\nい-adj + だけに (高[たか]かっただけに)\nN + だっただけに (医者[いしゃ]だっただけに)",
    examples: [
      { jp: "プロの料理人[りょうりにん]だけあって、料理[りょうり]が上手[じょうず]だ。", en: "As expected of a professional chef, his cooking is excellent." },
      { jp: "期待[きたい]していただけに、落胆[らくたん]も大[おお]きかった。", en: "Precisely because he had high hopes, his disappointment was also great." }
    ],
    notes: "〜だけあって praises expected ability; 〜だけに emphasizes the proportionate scale of the result.",
    related: ["gn3-06", "gn3-07", "gn3-08"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 3 — Time/Sequence (時間・順序)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-11",
    point: "〜うちに",
    reading: "〜うちに",
    level: "N3",
    category: "Time/Sequence",
    meaning: "While... / before a state changes",
    structure: "V-辞書形 / V-ている / い-adj / N + の + うちに",
    explanation:
      "〜うちに expresses an action done while a certain state continues: while X is still the case, do Y. Often used to urge doing something before the state ends.",
    formation:
      "V-辞書形 + うちに (行[い]かないうちに)\nV-ている + うちに (元気[げんき]なうちに)\nい-adj + うちに (若[わか]いうちに)\nN + の + うちに (昼[ひる]のうちに)",
    examples: [
      { jp: "若[わか]いうちに、色[いろ]んなことを経験[けいけん]した方[ほう]がいい。", en: "While you are young, you had better experience many things." },
      { jp: "暗[くら]くならないうちに、帰[かえ]りましょう。", en: "Let's go home before it gets dark." }
    ],
    notes: "〜ないうちに = before X happens; 〜ているうちに = while X continues. Different from 〜間(に) which implies a longer, more neutral span.",
    related: ["gn3-12", "gn3-13"]
  },

  {
    id: "gn3-12",
    point: "〜際に / 〜際は",
    reading: "〜さいに / さいは",
    level: "N3",
    category: "Time/Sequence",
    meaning: "When... / on the occasion of...",
    structure: "V-辞書形 / V-た形 / N + の + 際(に)",
    explanation:
      "〜際に is a formal expression for when or at the time of, often used in instructions, manuals, or formal writing. It is more stiff and polite than 〜時.",
    formation:
      "V-辞書形 + 際に (行[い]く際に)\nV-た形 + 際に (帰[かえ]った際に)\nN + の + 際に (退室[たいしつ]の際に)",
    examples: [
      { jp: "お帰[かえ]りの際[さい]に、忘[わす]れ物[もの]がないか確[たし]かめてください。", en: "When leaving, please check that you have not forgotten anything." },
      { jp: "何[なに]かあった際[さい]は、すぐ連絡[れんらく]してください。", en: "If anything happens, please contact me immediately." }
    ],
    notes: "Used in formal contexts such as announcements, manuals, and business letters; equivalent to 〜時(に) but stiffer.",
    related: ["gn3-11", "gn3-13"]
  },

  {
    id: "gn3-13",
    point: "〜最中に",
    reading: "〜さいちゅうに",
    level: "N3",
    category: "Time/Sequence",
    meaning: "In the middle of / right during",
    structure: "V-ている / N + の + 最中に",
    explanation:
      "〜最中に expresses that something happened right in the middle of an action or event, often with a sense of interruption at the peak moment.",
    formation:
      "V-ている + 最中に (食[た]べている最中に)\nN + の + 最中に (会議[かいぎ]の最中に)",
    examples: [
      { jp: "食[た]べている最中[さいちゅう]に、地震[じしん]が起[お]きた。", en: "Right while we were eating, an earthquake occurred." },
      { jp: "会議[かいぎ]の最中[さいちゅう]に、電話[でんわ]が鳴[な]った。", en: "Right in the middle of the meeting, the phone rang." }
    ],
    notes: "Implies the peak moment of an ongoing activity; different from 〜途中で which simply means \"during\".",
    related: ["gn3-11", "gn3-12", "gn3-14"]
  },

  {
    id: "gn3-14",
    point: "〜たびに",
    reading: "〜たびに",
    level: "N3",
    category: "Time/Sequence",
    meaning: "Every time... / whenever",
    structure: "V-辞書形 / N + の + たびに",
    explanation:
      "〜たびに expresses that something happens every single time the stated event occurs, often with a sense of repetition or accumulation.",
    formation:
      "V-辞書形 + たびに (会[あ]うたびに)\nN + の + たびに (試験[しけん]のたびに)",
    examples: [
      { jp: "彼[かれ]に会[あ]うたびに、元気[げんき]になる。", en: "Every time I meet him, I feel energized." },
      { jp: "旅行[りょこう]のたびに、写真[しゃしん]をたくさん撮[と]る。", en: "Every time I travel, I take many photos." }
    ],
    notes: "Often used with verbs of repetition; different from 〜時に which simply means \"when\".",
    related: ["gn3-11", "gn3-13", "gn3-15"]
  },

  {
    id: "gn3-15",
    point: "〜次第",
    reading: "〜しだい",
    level: "N3",
    category: "Time/Sequence",
    meaning: "As soon as... / immediately upon",
    structure: "V-ます形 + 次第",
    explanation:
      "〜次第 (after the V-ます stem) means as soon as X happens, do Y. Used in formal or business contexts to indicate immediate subsequent action.",
    formation:
      "V-ます形 + 次第 (帰[かえ]り次第)\nV-ます形 + 次第、〜する (分[わ]かり次第連絡[れんらく]する)\nV-ます形 + 次第、〜ます (到着[とうちゃく]次第ご報告[ほうこく]します)",
    examples: [
      { jp: "分[わ]かり次第[しだい]、連絡[れんらく]します。", en: "As soon as I find out, I will contact you." },
      { jp: "到着[とうちゃく]次第[しだい]、ご報告[ほうこく]いたします。", en: "As soon as I arrive, I will report to you." }
    ],
    notes: "Polite and business register; do not confuse with N + 次第で (gn3-05) which means \"depending on\".",
    related: ["gn3-05", "gn3-11", "gn3-14"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 4 — Contrast (逆接・対比)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-16",
    point: "〜のに",
    reading: "〜のに",
    level: "N3",
    category: "Contrast",
    meaning: "Even though... / despite",
    structure: "普通体 + のに",
    explanation:
      "〜のに expresses contrast, complaint, or surprise: even though X, Y (unexpectedly). Compared to 〜が/けど, it carries a sense of dissatisfaction, regret, or unexpectedness.",
    formation:
      "V普通体 + のに (行[い]ったのに)\nい-adj + のに (寒[さむ]いのに)\nな-adj + な + のに (静[しず]かなのに)\nN + な + のに (学生[がくせい]なのに)",
    examples: [
      { jp: "雨[あめ]が降[ふ]っているのに、彼[かれ]は傘[かさ]を差[さ]さずに出[で]かけた。", en: "Even though it was raining, he went out without an umbrella." },
      { jp: "一生懸命[いっしょうけんめい]勉強[べんきょう]したのに、試験[しけん]に落[お]ちた。", en: "Even though I studied hard, I failed the exam." }
    ],
    notes: "Frequently conveys complaint or regret; for nouns and な-adjectives, use な + のに rather than だ + のに.",
    related: ["gn3-17", "gn3-18", "gn3-19"]
  },

  {
    id: "gn3-17",
    point: "〜にもかかわらず",
    reading: "〜にもかかわらず",
    level: "N3",
    category: "Contrast",
    meaning: "Despite / in spite of",
    structure: "普通体 + にもかかわらず / N + にもかかわらず",
    explanation:
      "〜にもかかわらず is a formal expression for despite — used when an unexpected result occurs contrary to expectation. It is more formal and objective than 〜のに.",
    formation:
      "V普通体 + にもかかわらず (行[い]ったにもかかわらず)\nい-adj + にもかかわらず (難[むずか]しいにもかかわらず)\nN + にもかかわらず (雨[あめ]にもかかわらず)\nN / な-adj + である + にもかかわらず",
    examples: [
      { jp: "悪[わる]天候[てんこう]にもかかわらず、試合[しあい]は行[おこな]われた。", en: "Despite the bad weather, the match was held." },
      { jp: "彼[かれ]は病気[びょうき]にもかかわらず、会社[かいしゃ]に来[き]た。", en: "Despite being sick, he came to the office." }
    ],
    notes: "More formal and written-style than 〜のに; commonly used in news, business, and essays.",
    related: ["gn3-16", "gn3-18", "gn3-19"]
  },

  {
    id: "gn3-18",
    point: "〜くせに",
    reading: "〜くせに",
    level: "N3",
    category: "Contrast",
    meaning: "Even though... (with criticism)",
    structure: "普通体 + くせに",
    explanation:
      "〜くせに expresses complaint or criticism: even though X, Y — with the speaker's negative judgment of the subject. Colloquial and slightly derogatory.",
    formation:
      "V普通体 + くせに (知[し]っているくせに)\nい-adj + くせに (忙[いそが]しいくせに)\nな-adj + な + くせに (下手[へた]なくせに)\nN + の + くせに (学生[がくせい]のくせに)",
    examples: [
      { jp: "知[し]っているくせに、教[おし]えてくれない。", en: "Even though he knows, he won't tell me." },
      { jp: "下手[へた]なくせに、大[おお]きな口[くち]を叩[たた]く。", en: "Even though he is bad at it, he talks big." }
    ],
    notes: "Has a critical, blaming nuance — avoid in formal or polite contexts. Close in meaning to 〜のに but more emotional.",
    related: ["gn3-16", "gn3-17", "gn3-19"]
  },

  {
    id: "gn3-19",
    point: "〜一方(で)",
    reading: "〜いっぽう(で)",
    level: "N3",
    category: "Contrast",
    meaning: "On the other hand / while",
    structure: "V-辞書形 / V-ている / N + の + 一方(で)",
    explanation:
      "〜一方(で) presents two contrasting or coexisting aspects: on one hand X, on the other hand Y. Used for an objective comparison of two sides of the same subject or situation.",
    formation:
      "V-辞書形 + 一方で (増[ふ]える一方で)\nV-ている + 一方で (減[へ]っている一方で)\nN + の + 一方で (仕事[しごと]の一方で)",
    examples: [
      { jp: "都市[とし]の人口[じんこう]は増[ふ]える一方[いっぽう]で、地方[ちほう]は減[へ]っている。", en: "On one hand the city population is increasing; on the other, rural areas are decreasing." },
      { jp: "彼[かれ]は仕事[しごと]ができる一方[いっぽう]で、家庭[かてい]を顧[かえり]みない。", en: "On one hand he is capable at work; on the other, he neglects his family." }
    ],
    notes: "Used for two contrasting facts about the same subject; also expresses \"continuing to X\" (増える一方 = keep increasing).",
    related: ["gn3-16", "gn3-17", "gn3-20"]
  },

  {
    id: "gn3-20",
    point: "〜とはいえ",
    reading: "〜とはいえ",
    level: "N3",
    category: "Contrast",
    meaning: "Although / that being said",
    structure: "普通体 + とはいえ",
    explanation:
      "〜とはいえ concedes a point but introduces a contrasting reality: even though X is true, still Y. More formal and literary than 〜のに or 〜けれども.",
    formation:
      "V普通体 + とはいえ (行[い]ったとはいえ)\nい-adj + とはいえ (高[たか]いとはいえ)\nN + とはいえ (子供[こども]とはいえ)\nN / な-adj + である + とはいえ (春[はる]であるとはいえ)",
    examples: [
      { jp: "春[はる]とはいえ、まだ寒[さむ]い日[ひ]が続[つづ]いている。", en: "Even though it is spring, cold days continue." },
      { jp: "努力[どりょく]したとはいえ、結果[けっか]が出[で]ないのは残念[ざんねん]だ。", en: "Although I tried hard, it is a pity there are no results." }
    ],
    notes: "Used in written and formal contexts; acknowledges a fact but emphasizes the unexpected persistence of the contrast.",
    related: ["gn3-16", "gn3-17", "gn3-19"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 5 — Assumption (推量・判断)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-21",
    point: "〜に違いない",
    reading: "〜にちがいない",
    level: "N3",
    category: "Assumption",
    meaning: "There is no doubt that... / must be",
    structure: "普通体 + に違いない",
    explanation:
      "〜に違いない expresses strong conviction: there is no doubt that X. The speaker is confident in their inference, usually based on observed evidence.",
    formation:
      "V普通体 + に違いない (行[い]ったに違いない)\nい-adj + に違いない (高[たか]いに違いない)\nN + に違いない (彼[かれ]に違いない)\nN / な-adj + である + に違いない",
    examples: [
      { jp: "彼[かれ]の嬉[うれ]しそうな顔[かお]を見[み]るに、合格[ごうかく]したに違[ちが]いない。", en: "Judging from his happy face, he must have passed." },
      { jp: "あの音[おと]は雷[かみなり]に違[ちが]いない。", en: "That sound must be thunder." }
    ],
    notes: "Stronger than 〜だろう; used when the speaker has evidence supporting their conclusion.",
    related: ["gn3-22", "gn3-23", "gn3-24"]
  },

  {
    id: "gn3-22",
    point: "〜はずだ",
    reading: "〜はずだ",
    level: "N3",
    category: "Assumption",
    meaning: "Should be / is expected to be",
    structure: "普通体 + はずだ",
    explanation:
      "〜はずだ expresses a logical expectation based on reason or knowledge: X should be the case, given what I know. The speaker is reasoning from background facts.",
    formation:
      "V普通体 + はずだ (来[く]るはずだ)\nい-adj + はずだ (高[たか]いはずだ)\nな-adj + な + はずだ (静[しず]かなはずだ)\nN + の + はずだ (学生[がくせい]のはずだ)",
    examples: [
      { jp: "彼[かれ]はもうすぐ着[つ]くはずだ。", en: "He should arrive soon." },
      { jp: "この問題[もんだい]は簡単[かんたん]なはずだ。", en: "This problem should be easy." }
    ],
    notes: "Different from 〜に違いない: はず is based on reasoning, whereas に違いない is based on confident inference.",
    related: ["gn3-21", "gn3-23", "gn3-24"]
  },

  {
    id: "gn3-23",
    point: "〜に決まっている",
    reading: "〜にきまっている",
    level: "N3",
    category: "Assumption",
    meaning: "Definitely / surely",
    structure: "普通体 + に決まっている",
    explanation:
      "〜に決まっている expresses the speaker's strong, confident prediction: it is certain that X. Colloquial and emphatic, equivalent to 〜に違いない in meaning but more spoken.",
    formation:
      "V普通体 + に決まっている (来[く]るに決まっている)\nい-adj + に決まっている (面白[おもしろ]いに決まっている)\nな-adj + な + に決まっている (元気[げんき]なに決まっている)\nN + に決まっている (学生[がくせい]に決まっている)",
    examples: [
      { jp: "彼[かれ]は絶対[ぜったい]に怒[おこ]るに決[きま]っている。", en: "He will definitely get angry." },
      { jp: "そんなこと言[い]ったら、笑[わら]われるに決[きま]っている。", en: "If you say that, you will surely be laughed at." }
    ],
    notes: "Used in casual speech for confident predictions; equivalent in meaning to 〜に違いない but more colloquial.",
    related: ["gn3-21", "gn3-22", "gn3-24"]
  },

  {
    id: "gn3-24",
    point: "〜かもしれない",
    reading: "〜かもしれない",
    level: "N3",
    category: "Assumption",
    meaning: "Might / may / perhaps",
    structure: "普通体 + かもしれない",
    explanation:
      "〜かもしれない expresses possibility: X might be the case. Less certain than 〜だろう, it is used when the speaker considers several possibilities.",
    formation:
      "V普通体 + かもしれない (来[く]るかもしれない)\nい-adj + かもしれない (高[たか]いかもしれない)\nな-adj + かもしれない (静[しず]かかもしれない)\nN + かもしれない (雨[あめ]かもしれない)",
    examples: [
      { jp: "明日[あした]は雪[ゆき]が降[ふ]るかもしれない。", en: "It might snow tomorrow." },
      { jp: "彼[かれ]はもう来[こ]ないかもしれない。", en: "He might not come anymore." }
    ],
    notes: "For な-adjectives and nouns, drop だ: 静かかもしれない (not 静かだかもしれない).",
    related: ["gn3-21", "gn3-22", "gn3-23", "gn3-25"]
  },

  {
    id: "gn3-25",
    point: "〜っぽい",
    reading: "〜っぽい",
    level: "N3",
    category: "Assumption",
    meaning: "Seems like / -ish / prone to",
    structure: "N / い-adj(い) / V-ます + っぽい",
    explanation:
      "〜っぽい attaches to nouns, adjective stems, and verb stems to mean has the quality of, is prone to, or is -ish. Colloquial and slightly informal.",
    formation:
      "N + っぽい (子供[こども]っぽい)\nい-adj (stem) + っぽい (白[しろ]っぽい)\nV-ます + っぽい (忘[わす]れっぽい)\nな-adj (stem) + っぽい (面倒[めんどう]っぽい — rare)",
    examples: [
      { jp: "彼[かれ]は子供[こども]っぽい性格[せいかく]だ。", en: "He has a childish personality." },
      { jp: "最近[さいきん]忘[わす]れっぽくなった。", en: "Recently I have become forgetful." }
    ],
    notes: "With verbs (忘れる, 飽きる) it means prone to; different from 〜みたい which is a simple comparison.",
    related: ["gn3-21", "gn3-24"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 6 — Passive/Causative (受身・使役)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-26",
    point: "〜(さ)せられる",
    reading: "〜(さ)せられる",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Be made to do something (causative-passive)",
    structure: "V-使役受身形 (Group I: 書かされる; Group II: 食べさせられる)",
    explanation:
      "〜(さ)せられる is the causative-passive form: be made or forced to do X by someone. Often used to express the speaker's discomfort at being compelled to do something.",
    formation:
      "Group I: 書[か]く → 書[か]かされる, 飲[の]む → 飲[の]まされる\nGroup II: 食[た]べる → 食[た]べさせられる\nIrregular: する → させられる, 来[く]る → 来[こ]させられる",
    examples: [
      { jp: "子供[こども]の頃[ころ]、野菜[やさい]を食[た]べさせられた。", en: "When I was a child, I was made to eat vegetables." },
      { jp: "部長[ぶちょう]に長[なが]い挨拶[あいさつ]を聞[き]かされた。", en: "I was made to listen to the department head's long speech." }
    ],
    notes: "Group I verbs have a contracted 5-syllable form (書かされる) and the regular 書かせられる; the contracted form is preferred in modern speech.",
    related: ["gn3-27", "gn3-28"]
  },

  {
    id: "gn3-27",
    point: "〜させていただく",
    reading: "〜させていただく",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Humbly receive permission to do / be allowed to do",
    structure: "V-させて + いただく",
    explanation:
      "〜させていただく is a humble expression meaning I humbly receive permission to do X. Used in business or formal contexts to express doing something with the listener's indulgence.",
    formation:
      "V-させて + いただく (参加[さんか]させていただく)\nV-させて + いただきます (休[やす]ませていただきます)\nV-て + いただく (教[おし]えていただく — receive a favor)",
    examples: [
      { jp: "明日[あした]から休[やす]ませていただきます。", en: "Please allow me to take a break starting tomorrow." },
      { jp: "私[わたし]からご説明[せつめい]させていただきます。", en: "Allow me to explain." }
    ],
    notes: "Heavily used in business Japanese; some style guides recommend the simpler 〜します in casual business contexts to avoid overuse.",
    related: ["gn3-26", "gn3-30", "gn3-32"]
  },

  {
    id: "gn3-28",
    point: "迷惑の受身",
    reading: "めいわくのうけみ",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Indirect / suffering passive",
    structure: "V-受身形 (Group I: 降られる, 泣かれる; Group II: 食べられる)",
    explanation:
      "迷惑の受身 (indirect/suffering passive) is a uniquely Japanese passive in which the subject is affected, usually negatively, by someone else's action — even when they are not the direct object. Often used with intransitive verbs.",
    formation:
      "Group I: 降[ふ]る → 降[ふ]られる, 泣[な]く → 泣[な]かれる\nGroup II: 来[く]る → 来[こ]られる\nWith transitives: 友達[ともだち]にケーキを食[た]べられた",
    examples: [
      { jp: "友達[ともだち]に来[こ]られて、勉強[べんきょう]できなかった。", en: "A friend came over (and bothered me), so I couldn't study." },
      { jp: "雨[あめ]に降[ふ]られて、服[ふく]が濡[ぬ]れた。", en: "I was rained on and my clothes got wet." }
    ],
    notes: "The subject is not the direct object — they are inconvenienced by someone else's action; difficult to translate directly into English.",
    related: ["gn3-26", "gn3-29"]
  },

  {
    id: "gn3-29",
    point: "〜(ら)れる (自発)",
    reading: "〜(ら)れる (じはつ)",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Spontaneous feeling / spontaneously",
    structure: "V-受身形 (Group I: 思われる, 思い出される; Group II: 感じられる)",
    explanation:
      "The spontaneous use of the passive expresses a feeling or thought that arises naturally without conscious effort: X comes to mind, X is felt. Often used with verbs of thinking, feeling, and memory.",
    formation:
      "Group I: 思[おも]う → 思[おも]われる, 思[おも]い出[だ]す → 思[おも]い出[だ]される\nGroup II: 感[かん]じる → 感[かん]じられる",
    examples: [
      { jp: "昔[むかし]のことが思[おも]い出[だ]される。", en: "Old memories come to mind." },
      { jp: "彼[かれ]の気持[きも]ちが深[ふか]く感[かん]じられた。", en: "His feelings were deeply felt." }
    ],
    notes: "The subject is usually a feeling, memory, or the speaker; common with verbs of perception and memory.",
    related: ["gn3-26", "gn3-28"]
  },

  {
    id: "gn3-30",
    point: "〜せてほしい",
    reading: "〜せてほしい",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Want (you) to let me do X",
    structure: "V-させて + ほしい",
    explanation:
      "〜せてほしい expresses a request to be allowed to do something: I want you to let me do X. Often used toward superiors or in slightly softened requests.",
    formation:
      "V-て + ほしい (やってほしい)\nV-させて + ほしい (やらせてほしい)\nV-させて + ほしいんですが (帰[かえ]らせてほしいんですが — softened)",
    examples: [
      { jp: "私[わたし]にやらせてほしい。", en: "Please let me do it." },
      { jp: "今日[きょう]は早[はや]く帰[かえ]らせてほしい。", en: "Please let me go home early today." }
    ],
    notes: "A more direct request than 〜させていただけますか; often softened with 〜んですが in real speech.",
    related: ["gn3-26", "gn3-27"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 7 — Honorific (敬語)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-31",
    point: "お/ご〜になる",
    reading: "お/ご〜になる",
    level: "N3",
    category: "Honorific",
    meaning: "Respectful (sonkeigo) verb form",
    structure: "お + V-ます形 + になる / ご + 漢語N + になる",
    explanation:
      "お〜になる is a sonkeigo (respectful) pattern that elevates the subject's action. Used when speaking respectfully about a superior's actions.",
    formation:
      "お + V-ます + になる (お書[か]きになる, お休[やす]みになる)\nご + 漢語N + になる (ご利用[りよう]になる, ご出席[しゅっせき]になる)\n特殊[とくしゅ]: おいでになる (来る/行く/いる), ご覧[らん]になる (見る)",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりました。", en: "The teacher has already gone home." },
      { jp: "こちらをご覧[らん]になってください。", en: "Please take a look at this." }
    ],
    notes: "Do not use for one's own actions; for special verbs (言う, 見る, 来る) prefer the dedicated respectful forms (おっしゃる, ご覧になる, おいでになる).",
    related: ["gn3-32", "gn3-33", "gn3-34"]
  },

  {
    id: "gn3-32",
    point: "お〜する / ご〜する",
    reading: "お〜する / ご〜する",
    level: "N3",
    category: "Honorific",
    meaning: "Humble (kenjougo) verb form",
    structure: "お + V-ます形 + する / ご + 漢語N + する",
    explanation:
      "お〜する is a humble (kenjougo) pattern that lowers the speaker's own action when relating to a superior. Used to show respect by humbling oneself.",
    formation:
      "お + V-ます + する (お手伝[てつだ]いする, お持[も]ちする)\nご + 漢語N + する (ご紹介[しょうかい]する, ご案内[あんない]する)\n特殊[とくしゅ]: 申[もう]す (言う), 伺[うかが]う (行く/聞く), 拝見[はいけん]する (見る)",
    examples: [
      { jp: "私[わたし]がお荷物[にもつ]をお持[も]ちします。", en: "I will carry your luggage." },
      { jp: "後[のち]ほどご連絡[れんらく]します。", en: "I will contact you later." }
    ],
    notes: "Use only for one's own actions toward a superior; for special verbs (言う, 行く, 見る) prefer the dedicated humble forms (申す, 伺う, 拝見する).",
    related: ["gn3-31", "gn3-33", "gn3-34"]
  },

  {
    id: "gn3-33",
    point: "〜ていただけますか",
    reading: "〜ていただけますか",
    level: "N3",
    category: "Honorific",
    meaning: "Could you please (do X for me)",
    structure: "V-て形 + いただけますか",
    explanation:
      "〜ていただけますか is a polite request pattern: could you kindly do X for me? More polite than 〜てください, it is used in business or with superiors.",
    formation:
      "V-て + いただけますか (教[おし]えていただけますか)\nV-て + いただけませんか (more indirect)\nV-て + いただけると助[たす]かります (would appreciate)",
    examples: [
      { jp: "少[すこ]し待[ま]っていただけますか。", en: "Could you wait a little?" },
      { jp: "お名前[なまえ]を書[か]いていただけませんか。", en: "Could you write your name?" }
    ],
    notes: "Even more polite variant: 〜ていただけないでしょうか; avoids direct imperative and is ideal for business settings.",
    related: ["gn3-31", "gn3-32", "gn3-34"]
  },

  {
    id: "gn3-34",
    point: "〜ております",
    reading: "〜ております",
    level: "N3",
    category: "Honorific",
    meaning: "Humble form of 〜ている",
    structure: "V-て形 + おります",
    explanation:
      "〜ております is the humble form of 〜ている, used in polite speech to humbly describe the speaker's own ongoing state or action.",
    formation:
      "V-て + おります (待[ま]っております, 住[す]んでおります)\nV-て + おりまして (more polite conjunction form)\nV-て + おりました (past humble)",
    examples: [
      { jp: "今[いま]、待[ま]っております。", en: "I am waiting now." },
      { jp: "東京[とうきょう]に住[す]んでおります。", en: "I live in Tokyo." }
    ],
    notes: "Replaces 〜ています when speaking humbly; do not use for the listener's actions — use 〜ていらっしゃいます instead.",
    related: ["gn3-31", "gn3-32", "gn3-33"]
  },

  {
    id: "gn3-35",
    point: "〜てくださる",
    reading: "〜てくださる",
    level: "N3",
    category: "Honorific",
    meaning: "Someone (superior) does X for me",
    structure: "V-て形 + くださる (respectful) / V-て + ください (request)",
    explanation:
      "〜てくださる is the respectful form of 〜てくれる, meaning X (someone of higher status) does a favor for me. The imperative 〜てください is used to make a polite request.",
    formation:
      "V-て + くださる (教[おし]えてくださる)\nV-て + ください (imperative request — please do X)\nV-て + くださいました (past polite favor)",
    examples: [
      { jp: "先生[せんせい]が説[せつ]明[めい]してくださった。", en: "The teacher explained (for me)." },
      { jp: "これを見[み]てください。", en: "Please look at this." }
    ],
    notes: "〜てください is the imperative form for requests; 〜てくださる describes past or ongoing favors from a superior.",
    related: ["gn3-31", "gn3-32", "gn3-33", "gn3-34"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 8 — Particles (助詞)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-36",
    point: "〜さえ / 〜すら",
    reading: "〜さえ / 〜すら",
    level: "N3",
    category: "Particles",
    meaning: "Even (to the extent of)",
    structure: "N + さえ / すら; N + でさえ / ですら",
    explanation:
      "〜さえ and 〜すら mean even — indicating an extreme case: even X (let alone lesser things). すら is more literary and formal than さえ.",
    formation:
      "N + さえ (子供[こども]さえ)\nN + で + さえ (子供[こども]でさえ)\nN + すら / ですら (専門家[せんもんか]ですら)\n助詞 + さえ (にさえ, とさえ)",
    examples: [
      { jp: "子供[こども]でさえ分[わ]かる問題[もんだい]だ。", en: "Even a child can understand this problem." },
      { jp: "専門家[せんもんか]ですら解[と]けない。", en: "Even an expert cannot solve it." }
    ],
    notes: "For the conditional \"as long as X, then Y\" use 〜さえ〜ば (e.g., さえあれば); すら is more literary, さえ is common.",
    related: ["gn3-37", "gn3-38"]
  },

  {
    id: "gn3-37",
    point: "〜こそ",
    reading: "〜こそ",
    level: "N3",
    category: "Particles",
    meaning: "Precisely / exactly / it is X that",
    structure: "N + こそ; V-て + こそ; 〜ばこそ",
    explanation:
      "〜こそ emphasizes the preceding element: it is precisely X that. Often used to stress the importance or unique quality of something, or to reinforce a reason.",
    formation:
      "N + こそ (私[わたし]こそ)\n助詞 + こそ (からこそ, こそが)\nV-て + こそ (やってこそ)\n〜ば + こそ (because precisely)",
    examples: [
      { jp: "今度[こんど]こそ、勝[か]つぞ！", en: "This time for sure, I will win!" },
      { jp: "あなたがいてこそ、この仕事[しごと]は成[な]り立[た]つ。", en: "It is precisely because you are here that this work functions." }
    ],
    notes: "Stronger than simple emphasis; often used in greetings as 私こそ (I am the one who should say that).",
    related: ["gn3-36", "gn3-38"]
  },

  {
    id: "gn3-38",
    point: "〜でも",
    reading: "〜でも",
    level: "N3",
    category: "Particles",
    meaning: "Even / or something / even if",
    structure: "N + でも; 疑問詞 + でも",
    explanation:
      "〜でも has two main uses: (1) even — pointing to an extreme representative example; (2) or something — suggesting one unspecified option among many. With interrogative words it means any/no matter what.",
    formation:
      "N + でも (子供[こども]でも)\n疑問詞 + でも (何[なに]でも, だれでも)\nN + でも + V (お茶[ちゃ]でも飲[の]もう)",
    examples: [
      { jp: "お茶[ちゃ]でも飲[の]みに行[い]きませんか。", en: "Won't you go for tea or something?" },
      { jp: "子供[こども]でもできる。", en: "Even a child can do it." }
    ],
    notes: "In suggestions (お茶でも) it implies \"for instance, X\"; in abilities (子供でも) it implies \"even X\".",
    related: ["gn3-36", "gn3-39"]
  },

  {
    id: "gn3-39",
    point: "〜なんて",
    reading: "〜なんて",
    level: "N3",
    category: "Particles",
    meaning: "Such a thing as / things like (often dismissive or surprised)",
    structure: "N / 普通体 + なんて",
    explanation:
      "〜なんて is a colloquial quoting particle meaning such a thing as X — often used with surprise, dismissal, or modesty. Equivalent to 〜など but more emotional and spoken.",
    formation:
      "N + なんて (私[わたし]なんて)\n普通体 + なんて (行[い]くなんて)\nい-adj + なんて (高[たか]いなんて)",
    examples: [
      { jp: "私[わたし]なんて、まだまだです。", en: "As for someone like me, I am still inexperienced." },
      { jp: "あの学生[がくせい]が試験[しけん]に合格[ごうかく]したなんて、信[しん]じられない。", en: "I can't believe that that student passed the exam." }
    ],
    notes: "More colloquial and emotional than 〜など; often conveys surprise, disbelief, or modesty.",
    related: ["gn3-36", "gn3-40"]
  },

  {
    id: "gn3-40",
    point: "〜やら〜やら",
    reading: "〜やら〜やら",
    level: "N3",
    category: "Particles",
    meaning: "Things like X and Y (among others)",
    structure: "N + やら + N + やら; V-辞書形 + やら + V + やら",
    explanation:
      "〜やら〜やら lists multiple items in a non-exhaustive way: things like X and Y (and so on). Often used when the speaker feels overwhelmed by the variety or emotional mix.",
    formation:
      "N + やら + N + やら (泣[な]くやら騒[さわ]ぐやら)\nV-辞書形 + やら + V-辞書形 + やら (帰[かえ]るやら食[た]うやら)\nい-adj + やら + い-adj + やら (嬉[うれ]しいやら悲[かな]しいやら)",
    examples: [
      { jp: "嬉[うれ]しいやら恵[めぐ]ましいやらで、涙[なみだ]が出[で]た。", en: "I was happy and blessed and more, and tears came out." },
      { jp: "泣[な]くやら騒[さわ]ぐやら、大変[たいへん]だった。", en: "Crying and screaming and more — it was terrible." }
    ],
    notes: "Similar to 〜とか〜とか but with a stronger sense of being overwhelmed by the variety or emotion.",
    related: ["gn3-36", "gn3-39"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 9 — Conjunctions (接続詞)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-41",
    point: "それで",
    reading: "それで",
    level: "N3",
    category: "Conjunctions",
    meaning: "And so / therefore (consequence)",
    structure: "sentence + それで、+ sentence",
    explanation:
      "それで connects two sentences where the second is a natural consequence of the first: and so. Used for objective cause-and-result chains in narration.",
    formation:
      "文 + それで + 文 (雨[あめ]が降[ふ]った。それで、試合[しあい]は中止[ちゅうし]になった。)",
    examples: [
      { jp: "昨日[きのう]は熱[ねつ]があった。それで、会社[かいしゃ]を休[やす]んだ。", en: "Yesterday I had a fever. And so, I took the day off work." },
      { jp: "彼[かれ]は遅[おく]れた。それで、先生[せんせい]に怒[おこ]られた。", en: "He was late. And so, the teacher scolded him." }
    ],
    notes: "Different from そこで which marks a situational response (so then I did X); それで is purely consequential.",
    related: ["gn3-42", "gn3-43"]
  },

  {
    id: "gn3-42",
    point: "そこで",
    reading: "そこで",
    level: "N3",
    category: "Conjunctions",
    meaning: "Then / so (in response to a situation)",
    structure: "sentence + そこで、+ sentence",
    explanation:
      "そこで introduces an action taken in response to the preceding situation: so then (I did X). Different from それで in that the response is an active step taken by the speaker or subject.",
    formation:
      "文 + そこで + 文 (道[みち]に迷[まよ]った。そこで、地図[ちず]を見[み]た。)",
    examples: [
      { jp: "道[みち]に迷[まよ]った。そこで、地図[ちず]を見[み]た。", en: "I got lost. So then, I looked at a map." },
      { jp: "財布[さいふ]を忘[わす]れた。そこで、友達[ともだち]に借[か]りた。", en: "I forgot my wallet. So then, I borrowed from a friend." }
    ],
    notes: "そこで implies an active problem-solving response, whereas それで simply states the natural consequence.",
    related: ["gn3-41", "gn3-43"]
  },

  {
    id: "gn3-43",
    point: "ただし",
    reading: "ただし",
    level: "N3",
    category: "Conjunctions",
    meaning: "However / provided that (exception)",
    structure: "sentence + ただし、+ sentence",
    explanation:
      "ただし introduces an exception, condition, or supplementary rule to a preceding statement: however, note that. Used in formal writing, signs, and rules to specify a condition.",
    formation:
      "文 + ただし + 文 (駐車[ちゅうしゃ]可[か]。ただし、30分[さんじっぷん]まで。)",
    examples: [
      { jp: "駐車[ちゅうしゃ]可能[かのう]。ただし、30分[さんじっぷん]まで。", en: "Parking allowed. However, only up to 30 minutes." },
      { jp: "返品[へんぴん]可[か]。ただし、未使用[みしよう]に限[かぎ]る。", en: "Returns accepted. However, only if unused." }
    ],
    notes: "Used in signs, manuals, and rules; different from しかし (general but), ただし adds a specific condition or exception.",
    related: ["gn3-41", "gn3-42", "gn3-44"]
  },

  {
    id: "gn3-44",
    point: "つまり",
    reading: "つまり",
    level: "N3",
    category: "Conjunctions",
    meaning: "In other words / that is to say",
    structure: "sentence + つまり、+ sentence",
    explanation:
      "つまり introduces a summary or restatement: in other words. Used to clarify or rephrase the preceding content more concisely, often drawing a conclusion.",
    formation:
      "文 + つまり + 文 (彼[かれ]は私[わたし]の母[はは]の弟[おとうと]だ。つまり、叔父[おじ]だ。)",
    examples: [
      { jp: "彼[かれ]は私[わたし]の母[はは]の弟[おとうと]だ。つまり、私[わたし]の叔父[おじ]だ。", en: "He is my mother's younger brother. In other words, he's my uncle." },
      { jp: "每[まい]日[にち]残業[ざんぎょう]している。つまり、働[はたら]きすぎだ。", en: "I'm doing overtime every day. In other words, I'm overworked." }
    ],
    notes: "Similar to すなわち but more colloquial; used for clarifying, summarizing, or drawing a conclusion.",
    related: ["gn3-41", "gn3-43", "gn3-45"]
  },

  {
    id: "gn3-45",
    point: "なぜなら",
    reading: "なぜなら",
    level: "N3",
    category: "Conjunctions",
    meaning: "Because / the reason being",
    structure: "sentence + なぜなら、+ sentence + から/のだ",
    explanation:
      "なぜなら introduces the reason for a preceding statement: the reason is because. The reason clause typically ends with から or のだ. Formal and literary in register.",
    formation:
      "文 + なぜなら + 文 + から/のだ (行[い]かない。なぜなら、忙[いそが]しいからだ。)",
    examples: [
      { jp: "海[うみ]に行[い]かない。なぜなら、忙[いそが]しいからだ。", en: "I won't go to the beach. Because I'm busy." },
      { jp: "この計画[けいかく]には反対[はんたい]だ。なぜなら、費用[ひよう]がかかりすぎるからだ。", en: "I oppose this plan. Because it costs too much." }
    ],
    notes: "Word order is opposite to 〜から: state the conclusion first, then the reason with なぜなら. Formal and written in register.",
    related: ["gn3-41", "gn3-43", "gn3-44"]
  },

  // ───────────────────────────────────────────────────────────
  // CHAPTER 10 — Modifiers (修飾)
  // ───────────────────────────────────────────────────────────

  {
    id: "gn3-46",
    point: "〜という",
    reading: "〜という",
    level: "N3",
    category: "Modifiers",
    meaning: "Called / that is (naming or quoting)",
    structure: "N + という + N; sentence + という + N",
    explanation:
      "〜という connects two nouns where the first names or defines the second: a X called... or the fact that. Used for definitions, quotations, and naming something specifically.",
    formation:
      "N + という + N (田中[たなか]という人[ひと])\n文 + という + N (彼[かれ]が来[く]るという話[はなし])\nN + という + 抽象[ちゅうしょう]N (問題[もんだい]という事実[じじつ])",
    examples: [
      { jp: "田中[たなか]という人[ひと]に会[あ]った。", en: "I met a person called Tanaka." },
      { jp: "彼[かれ]が来[く]るという噂[うわさ]を聞[き]いた。", en: "I heard a rumor that he is coming." }
    ],
    notes: "Different from 〜といった (which lists examples); という names a specific identity, content, or quotation.",
    related: ["gn3-47", "gn3-48"]
  },

  {
    id: "gn3-47",
    point: "〜といった",
    reading: "〜といった",
    level: "N3",
    category: "Modifiers",
    meaning: "Such as / things like",
    structure: "N + といった + N; N1 + や + N2 + といった + N",
    explanation:
      "〜といった lists examples non-exhaustively: things such as X, Y. Similar to 〜ような but with explicit non-exhaustiveness, indicating these are just representatives.",
    formation:
      "N + といった + N (寿司[すし]といった日本料理[にほんりょうり])\nN1 + や + N2 + といった + N (寿司[すし]やラーメンといった料理[りょうり])",
    examples: [
      { jp: "寿司[すし]やラーメンといった日本料理[にほんりょうり]が好[す]きだ。", en: "I like Japanese food such as sushi and ramen." },
      { jp: "東京[とうきょう]や大阪[おおさか]といった大都市[だいとし]に住[す]みたい。", en: "I'd like to live in big cities such as Tokyo and Osaka." }
    ],
    notes: "Used to give representative examples; different from 〜という which names a specific thing rather than examples.",
    related: ["gn3-46", "gn3-48"]
  },

  {
    id: "gn3-48",
    point: "〜ように",
    reading: "〜ように",
    level: "N3",
    category: "Modifiers",
    meaning: "So that / in such a way that",
    structure: "V-辞書形 / V-ない形 + ように",
    explanation:
      "〜ように expresses purpose or manner: so that X (can) happen, or in such a way that X. Often used with potential or intransitive verbs for the purpose reading.",
    formation:
      "V-辞書形 + ように (聞[き]こえるように)\nV-ない形 + ように (忘[わす]れないように)\nV-辞書形 + ように + V (書[か]くように書[か]く — write in such a way)",
    examples: [
      { jp: "よく聞[き]こえるように、前[まえ]に座[すわ]った。", en: "I sat in the front so that I could hear well." },
      { jp: "忘[わす]れないように、メモしておいた。", en: "I made a note so that I wouldn't forget." }
    ],
    notes: "For purpose, often followed by 〜た / 〜ている (the action taken to achieve it); different from 〜ために which requires a volitional verb.",
    related: ["gn3-46", "gn3-47", "gn3-49"]
  },

  {
    id: "gn3-49",
    point: "〜ことから",
    reading: "〜ことから",
    level: "N3",
    category: "Modifiers",
    meaning: "From the fact that / judging from / because",
    structure: "普通体 + ことから",
    explanation:
      "〜ことから expresses a basis for a judgment or a naming: from the fact that X, we conclude/named. Used when deriving a conclusion, origin, or label from evidence.",
    formation:
      "V普通体 + ことから (形[かたち]が星[ほし]であることから)\nい-adj + ことから (高[たか]いことから)\nN + である + ことから (学生[がくせい]であることから)\nN + の + ことから (態度[たいど]のことから)",
    examples: [
      { jp: "星[ほし]の形[かたち]をしていることから、「星型[ほしがた]」と呼[よ]ばれる。", en: "From the fact that it has a star shape, it is called a \"star shape\"." },
      { jp: "彼[かれ]の目[め]つきから、怒[おこ]っていることから分[わ]かった。", en: "From his glaring eyes, I could tell he was angry." }
    ],
    notes: "Often used in explanations of etymology or naming; more formal and written than the simple 〜から.",
    related: ["gn3-46", "gn3-47", "gn3-50"]
  },

  {
    id: "gn3-50",
    point: "〜ということは",
    reading: "〜ということは",
    level: "N3",
    category: "Modifiers",
    meaning: "The fact that... means... / that is to say",
    structure: "sentence + ということは、+ sentence",
    explanation:
      "〜ということは introduces a conclusion drawn from a stated fact: the fact that X means Y. Used to emphasize the implication of something the speaker or listener has just stated.",
    formation:
      "文 + ということは + 文 (彼[かれ]が来[こ]ないということは、忙[いそが]しいのだろう。)",
    examples: [
      { jp: "彼[かれ]が来[こ]ないということは、忙[いそが]しいのだろう。", en: "The fact that he isn't coming means he must be busy." },
      { jp: "雨[あめ]が降[ふ]ったということは、空気[くうき]が綺麗[きれい]になったはずだ。", en: "The fact that it rained means the air should be cleaner." }
    ],
    notes: "Used to draw an inference; different from つまり (which simply restates) — ということは emphasizes the implication of a known fact.",
    related: ["gn3-44", "gn3-46", "gn3-49"]
  }
];
