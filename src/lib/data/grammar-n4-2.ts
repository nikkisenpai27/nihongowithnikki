import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.
//
// This file covers Minna no Nihongo Shokyuu 2 (N4) lessons 14-25.
// IDs continue from g-n4-041.

export const grammarN4_2: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // LESSON 14 — deciding / being decided
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-041",
    point: "〜ことにする",
    reading: "〜koto ni suru",
    level: "N4",
    category: "Verb forms",
    lesson: 14,
    meaning: "Decide to do something (one's own decision)",
    structure: "V-辞書形 / V-ない形 + ことにする",
    explanation:
      "〜ことにする expresses a personal decision to do (or not do) something: 'I have decided to...'. The subject is usually the speaker or a decision-maker who actively makes the choice.",
    formation:
      "Affirmative: V-辞書形 + ことにする (行[い]くことにする)\nNegative: V-ない形 + ことにする (食[た]べないことにする)\nPast: V-辞書形 + ことにした\nHabit/rule: V-辞書形 + ことにしている",
    examples: [
      { jp: "来年[らいねん]、日本[にほん]へ行[い]くことにしました。", en: "I decided to go to Japan next year." },
      { jp: "毎日[まいにち]散歩[さんぽ]することにしています。", en: "I make it a rule to take a walk every day." },
      { jp: "お酒[さけ]を飲[の]まないことにしました。", en: "I decided not to drink alcohol." }
    ],
    notes:
      "ことにする emphasizes the act of deciding, whereas ことになる (L14) emphasizes the resulting state reached, often by a group or externally. ことにした is the past act of deciding.",
    related: ["g-n4-042", "g-n4-043"]
  },

  {
    id: "g-n4-042",
    point: "〜ことになる",
    reading: "〜koto ni naru",
    level: "N4",
    category: "Verb forms",
    lesson: 14,
    meaning: "Be decided / scheduled to (result of a decision)",
    structure: "V-辞書形 / V-ない形 + ことになる",
    explanation:
      "〜ことになる indicates that a decision has been made (often by a group, organization, or circumstance) and something is now scheduled or arranged as a result: 'it has been decided that...'. The speaker is usually not the sole decider.",
    formation:
      "Affirmative: V-辞書形 + ことになる (行[い]くことになる)\nNegative: V-ない形 + ことになる (行[い]かないことになる)\nPast: V-辞書形 + ことになった (it was decided)\nStanding rule: V-辞書形 + ことになっている",
    examples: [
      { jp: "来月[らいげつ]大阪[おおさか]へ転勤[てんきん]することになりました。", en: "It has been decided that I will be transferred to Osaka next month." },
      { jp: "来週[らいしゅう]会議[かいぎ]があることになっています。", en: "It is arranged that there is a meeting next week." },
      { jp: "日本[にほん]で働[はたら]くことになりました。", en: "It has been decided that I will work in Japan." }
    ],
    notes:
      "ことになる often conveys an externally or collectively reached decision, contrasting with ことにする (subjective decision). ことになっている implies a standing arrangement or rule that is in effect.",
    related: ["g-n4-041", "g-n4-043"]
  },

  {
    id: "g-n4-043",
    point: "〜ことにしている",
    reading: "〜koto ni shite iru",
    level: "N4",
    category: "Verb forms",
    lesson: 14,
    meaning: "Make it a habit / rule to do something",
    structure: "V-辞書形 / V-ない形 + ことにしている",
    explanation:
      "〜ことにしている expresses a personal rule or habit that the speaker has decided on and continues to follow: 'I make it a point to...'. It emphasizes an ongoing custom resulting from a past decision.",
    formation:
      "Affirmative: V-辞書形 + ことにしている (起[お]きることにしている)\nNegative: V-ない形 + ことにしている (食[た]べないことにしている)\nPast habit: V-辞書形 + ことにしていた",
    examples: [
      { jp: "毎朝[まいあさ]早[はや]く起[お]きることにしています。", en: "I make it a rule to get up early every morning." },
      { jp: "夜[よる]は甘[あま]いものを食[た]べないことにしています。", en: "I make it a rule not to eat sweets at night." },
      { jp: "週末[しゅうまつ]は必[かなら]ず両親[りょうしん]に電話[でんわ]することにしています。", en: "I make it a point to always call my parents on weekends." }
    ],
    notes:
      "ことにしている shows a custom maintained from a personal decision, distinct from ことにする (the one-time act of deciding) and ことになっている (an externally set rule).",
    related: ["g-n4-041", "g-n4-042"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 15 — listing reasons with 〜し
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-044",
    point: "〜し (理由の列举)",
    reading: "〜shi",
    level: "N4",
    category: "Conjunctions",
    lesson: 15,
    meaning: "And / besides (listing a reason)",
    structure: "V / い-adj / な-adj + な / N + だ (plain) + し",
    explanation:
      "〜し is used to list two or more reasons, states, or characteristics, often implying an unstated conclusion. Each clause ends in し and the final clause carries the main statement.",
    formation:
      "V-plain + し (降[ふ]っているし)\nい-adj + し (安[やす]いし)\nな-adj + な + し (静[しず]かだし)\nNoun + だ + し / Noun + で + し (学生[がくせい]だし)",
    examples: [
      { jp: "雨[あめ]も降[ふ]っているし、今日[きょう]は休[やす]みます。", en: "It's raining, so I'll take the day off today." },
      { jp: "この店[みせ]は安[やす]いし、おいしいです。", en: "This restaurant is cheap and tasty." },
      { jp: "仕事[しごと]も忙[いそが]しいし、疲[つか]れているし、行[い]けません。", en: "Work is busy and I'm tired, so I can't go." }
    ],
    notes:
      "し enumerates reasons; the speaker often implies 'and so...' even without stating the conclusion explicitly. The plain form attaches before し.",
    related: ["g-n4-045", "g-n4-046"]
  },

  {
    id: "g-n4-045",
    point: "〜し、〜し (複数理由)",
    reading: "〜shi, 〜shi",
    level: "N4",
    category: "Conjunctions",
    lesson: 15,
    meaning: "Among other things; (reason 1), (reason 2), so...",
    structure: "Clause A + し、Clause B + し + main clause",
    explanation:
      "When two or more し clauses precede the main clause, it emphasizes multiple reasons leading to a conclusion: 'both because X and because Y, therefore...'. It implies there may be further unstated reasons.",
    formation:
      "Clause A + し、Clause B + し + Conclusion\nCan extend with three or more し clauses\nPlain form attaches before each し",
    examples: [
      { jp: "このアパートは駅[えき]から近[ちか]いし、日当[ひあ]たりもいいし、とても便利[べんり]です。", en: "This apartment is close to the station and gets good sunlight, so it's very convenient." },
      { jp: "彼[かれ]は頭[あたま]もいいし、性格[せいかく]もいいし、人気[にんき]があります。", en: "He is smart and has a good personality, so he is popular." },
      { jp: "薬[くすり]も飲[の]んだし、早[はや]く寝[ね]たし、もう大丈夫[だいじょうぶ]です。", en: "I took medicine and went to bed early, so I'm fine now." }
    ],
    notes:
      "Using two or more し clauses softens the reasoning, suggesting these are merely representative reasons among others. The conclusion often carries the main communicative intent.",
    related: ["g-n4-044", "g-n4-046"]
  },

  {
    id: "g-n4-046",
    point: "〜し (文末・追加理由)",
    reading: "〜shi",
    level: "N4",
    category: "Conjunctions",
    lesson: 15,
    meaning: "Besides / what's more (sentence-final softener)",
    structure: "Sentence (plain) + し",
    explanation:
      "A single し at the end of a sentence lists one reason while implying others: 'besides, ... / ...among other things'. It often softens the statement or invites the listener's agreement.",
    formation:
      "V-plain + し\nい-adj + し\nな-adj + な + し\nNoun + だ + し",
    examples: [
      { jp: "時間[じかん]もないし、帰[かえ]りましょう。", en: "We don't have time either, so let's go home." },
      { jp: "お金[かね]もないし、旅行[りょこう]は無理[むり]です。", en: "I don't have money either, so traveling is out of the question." },
      { jp: "まあ、悪[わる]くないし、いいんじゃないですか。", en: "Well, it's not bad, so isn't it fine?" }
    ],
    notes:
      "Sentence-final し can function as a softener that conveys 'well, at least...' or 'besides...'. It is common in casual speech and leaves part of the reasoning to context.",
    related: ["g-n4-044", "g-n4-045"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 16 — simultaneous & durational
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-047",
    point: "〜ながら",
    reading: "〜nagara",
    level: "N4",
    category: "Verb forms",
    lesson: 16,
    meaning: "While doing; two actions at the same time",
    structure: "V-ます stem + ながら",
    explanation:
      "〜ながら attaches to the ます stem of a verb and expresses two actions performed at the same time by the same subject. The ながら clause describes an ongoing background action.",
    formation:
      "V-ます stem + ながら + main verb (聞[き]きながら)\nBoth actions share the same subject\nCannot be used for sequential actions",
    examples: [
      { jp: "音楽[おんがく]を聞[き]きながら勉強[べんきょう]します。", en: "I study while listening to music." },
      { jp: "歩[ある]きながら電話[でんわ]しないでください。", en: "Please don't talk on the phone while walking." },
      { jp: "母[はは]はいつも笑顔[えがお]でテレビを見[み]ながらご飯[はん]を食[た]べます。", en: "My mother always eats while watching TV with a smile." }
    ],
    notes:
      "The main verb usually expresses the more important or longer action. ながら implies simultaneous actions by one subject; for actions of different subjects or during a state, use 〜間に or 〜間.",
    related: ["g-n4-048", "g-n4-049"]
  },

  {
    id: "g-n4-048",
    point: "〜間に",
    reading: "〜aida ni",
    level: "N4",
    category: "Modifying",
    lesson: 16,
    meaning: "During (a time span); while (something happens)",
    structure: "V-辞書形 / V-ている / N の + 間に",
    explanation:
      "〜間に marks an action or event that occurs within a bounded time span created by another ongoing action or state: 'while X is happening, Y occurs (once)'. The sub-event is a one-time event inside the duration.",
    formation:
      "V-辞書形 + 間に (寝[ね]ている間[あいだ]に)\nV-ている + 間に\nN + の + 間に (留守[るす]の間[あいだ]に)\nAllows different subjects in the two clauses",
    examples: [
      { jp: "私[わたし]が寝[ね]ている間[あいだ]に泥棒[どろぼう]が入[はい]りました。", en: "While I was sleeping, a thief broke in." },
      { jp: "日本[にほん]にいる間[あいだ]に富士山[ふじさん]に登[のぼ]りたいです。", en: "While I'm in Japan, I want to climb Mt. Fuji." },
      { jp: "料理[りょうり]の間[あいだ]に電話[でんわ]がありました。", en: "There was a phone call while I was cooking." }
    ],
    notes:
      "間に indicates a punctual event within a continuous state. Contrast with 間 (without に), which describes a continuous action lasting the whole duration.",
    related: ["g-n4-047", "g-n4-049"]
  },

  {
    id: "g-n4-049",
    point: "〜間",
    reading: "〜aida",
    level: "N4",
    category: "Modifying",
    lesson: 16,
    meaning: "During (the whole duration of); while",
    structure: "V-辞書形 / V-ている / N の + 間",
    explanation:
      "〜間 expresses a continuous state or action that lasts for the entire duration of another action or time period: 'while X is happening, Y continues throughout'. The two actions run parallel in time.",
    formation:
      "V-辞書形 + 間 (夏休[なつやす]みの間[あいだ])\nV-ている + 間\nN + の + 間\nThe main action continues throughout the whole span",
    examples: [
      { jp: "夏休[なつやす]みの間[あいだ]、毎日[まいにち]泳[およ]いでいました。", en: "During summer vacation, I swam every day." },
      { jp: "父[ちち]が生[い]きている間[あいだ]、優[やさ]しくしたいです。", en: "While my father is alive, I want to be kind to him." },
      { jp: "私[わたし]が留守[るす]の間[あいだ]、猫[ねこ]が部屋[へや]で寝[ね]ていました。", en: "While I was out, the cat slept in the room." }
    ],
    notes:
      "間 (without に) implies the main action or state persists throughout the entire duration. Use 間に when an event occurs once within that span rather than continuously.",
    related: ["g-n4-047", "g-n4-048"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 17 — requests with くれる / もらう
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-050",
    point: "〜てくれる? / 〜てくれない?",
    reading: "〜te kureru? / 〜te kurenai?",
    level: "N4",
    category: "Giving/Receiving",
    lesson: 17,
    meaning: "Will you ... for me? (casual request)",
    structure: "V-て + くれる? / くれない?",
    explanation:
      "〜てくれる? is a casual, informal way to ask someone to do something for you: 'will you do X for me?'. It is used between friends or people of equal status and sounds soft and natural.",
    formation:
      "V-て + くれる?\nV-て + くれない?\nPast: V-て + くれた? (did you ... for me?)",
    examples: [
      { jp: "窓[まど]を閉[し]めてくれる?", en: "Will you close the window for me?" },
      { jp: "ちょっと手伝[てつだ]ってくれない?", en: "Won't you help me a bit?" },
      { jp: "本[ほん]を貸[か]してくれる?", en: "Will you lend me the book?" }
    ],
    notes:
      "くれる? is casual and direct; for polite requests use 〜てもらえませんか or 〜てくれませんか (L17). Rising intonation is what makes it a request.",
    related: ["g-n4-051", "g-n4-052"]
  },

  {
    id: "g-n4-051",
    point: "〜てもらえませんか",
    reading: "〜te moraemasen ka",
    level: "N4",
    category: "Giving/Receiving",
    lesson: 17,
    meaning: "Could you please do X for me? (polite request)",
    structure: "V-て + もらえませんか",
    explanation:
      "〜てもらえませんか is a polite way to make a request, literally 'couldn't I receive the favor of you doing X?'. It is soft, respectful, and commonly used with strangers, superiors, or in service settings.",
    formation:
      "V-て + もらえませんか\nV-て + もらえる? (casual)\nV-て + いただけませんか (more formal/humble)",
    examples: [
      { jp: "窓[まど]を閉[し]めてもらえませんか。", en: "Could you close the window for me?" },
      { jp: "写真[しゃしん]を撮[と]ってもらえませんか。", en: "Could you take a photo for me?" },
      { jp: "この漢字[かんじ]を読[よ]んでもらえませんか。", en: "Could you read this kanji for me?" }
    ],
    notes:
      "てもらえませんか frames the request as receiving a favor, making it softer and more polite than 〜てください. For even greater formality, use 〜ていただけませんか.",
    related: ["g-n4-050", "g-n4-052"]
  },

  {
    id: "g-n4-052",
    point: "〜てくれませんか",
    reading: "〜te kuremasen ka",
    level: "N4",
    category: "Giving/Receiving",
    lesson: 17,
    meaning: "Won't you please ... for me? (polite request)",
    structure: "V-て + くれませんか",
    explanation:
      "〜てくれませんか is a polite request form similar to 〜てもらえませんか but slightly more direct because it uses くれる (someone does for me) rather than もらう (I receive). It means 'won't you do X for me?'.",
    formation:
      "V-て + くれませんか\nV-て + くれますか (neutral polite)\nV-て + くださいませんか (very polite)",
    examples: [
      { jp: "少[すこ]し待[ま]ってくれませんか。", en: "Won't you wait a moment for me?" },
      { jp: "名前[なまえ]を書[か]いてくれませんか。", en: "Won't you write your name for me?" },
      { jp: "水[みず]を持[も]ってきてくれませんか。", en: "Won't you bring me some water?" }
    ],
    notes:
      "くれませんか is slightly more direct than もらえませんか but still polite. 〜てくださいませんか is even softer and more formal, often used in business or service contexts.",
    related: ["g-n4-050", "g-n4-051"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 18 — causative
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-053",
    point: "〜させる (使役)",
    reading: "〜saseru",
    level: "N4",
    category: "Causative",
    lesson: 18,
    meaning: "Make / let someone do something (causative)",
    structure: "V-causative (Group 1: 〜せる / Group 2: 〜させる)",
    explanation:
      "The causative form expresses making or letting someone do an action. The subject (causer) causes the object (causee) to perform the verb. Whether it means 'make' or 'let' depends on context.",
    formation:
      "Group 1: V-ない → せる (書[か]く → 書[か]かせる)\nGroup 2: V stem + させる (食[た]べる → 食[た]べさせる)\nIrregular: する → させる, 来[く]る → 来[こ]させる",
    examples: [
      { jp: "母[はは]は子供[こども]に野菜[やさい]を食[た]べさせました。", en: "The mother made the child eat vegetables." },
      { jp: "先生[せんせい]は学生[がくせい]に本[ほん]を読[よ]ませます。", en: "The teacher makes the students read a book." },
      { jp: "私[わたし]は弟[おとうと]を遊[あそ]ばせました。", en: "I let my younger brother play." }
    ],
    notes:
      "When the verb is transitive, the causee is marked by に; when intransitive, by を. 〜させる can mean coercive ('make') or permissive ('let'), disambiguated by context.",
    related: ["g-n4-054", "g-n4-055", "g-n4-056"]
  },

  {
    id: "g-n4-054",
    point: "〜させられる (使役受身)",
    reading: "〜saserareru",
    level: "N4",
    category: "Causative",
    lesson: 18,
    meaning: "Be made to do something (causative-passive)",
    structure: "V-causative-passive (Group 1: 〜される / Group 2: 〜させられる)",
    explanation:
      "The causative-passive expresses being forced or made to do something by someone else: 'I was made to do X'. The subject is the one being compelled, often with a nuance of suffering or reluctance.",
    formation:
      "Group 1: V-ない → される (書[か]く → 書[か]かされる)\nGroup 2: V stem + させられる (食[た]べる → 食[た]べさせられる)\nIrregular: する → させられる, 来[く]る → 来[こ]させられる",
    examples: [
      { jp: "子供[こども]の時[とき]、毎日[まいにち]勉強[べんきょう]させられました。", en: "When I was a child, I was made to study every day." },
      { jp: "飲[の]み会[かい]で歌[うた]を歌[うた]わされました。", en: "At the drinking party, I was made to sing a song." },
      { jp: "長[なが]い話[はなし]を聞[き]かされました。", en: "I was made to listen to a long story." }
    ],
    notes:
      "The causative-passive always carries a nuance of being compelled against one's will, often with mild complaining. Group 1 verbs contract: 書かせられる → 書かされる.",
    related: ["g-n4-053", "g-n4-055"]
  },

  {
    id: "g-n4-055",
    point: "〜させてください",
    reading: "〜sasete kudasai",
    level: "N4",
    category: "Causative",
    lesson: 18,
    meaning: "Please let me do X (request for permission to act)",
    structure: "V-causative て-form (させて) + ください",
    explanation:
      "〜させてください is used to ask for permission to do something, literally 'please let me do X'. It is a polite self-directed causative request, common when seeking approval to act.",
    formation:
      "Group 1: V-せる て-form (休[やす]ませて)\nGroup 2: V stem + させて (食[た]べさせて)\nIrregular: させてください, 来[こ]させてください",
    examples: [
      { jp: "ここで少[すこ]し休[やす]ませてください。", en: "Please let me rest here a little." },
      { jp: "今日[きょう]は早[はや]く帰[かえ]らせてください。", en: "Please let me go home early today." },
      { jp: "私[わたし]にこの仕事[しごと]をやらせてください。", en: "Please let me do this work." }
    ],
    notes:
      "させてください frames the speaker as the causee requesting permission from a superior or group. It is more humble than 〜たい or 〜てもいいですか when seeking approval to act.",
    related: ["g-n4-053", "g-n4-054", "g-n4-056"]
  },

  {
    id: "g-n4-056",
    point: "〜させてもらう / 〜させていただく",
    reading: "〜sasete morau / 〜sasete itadaku",
    level: "N4",
    category: "Causative",
    lesson: 18,
    meaning: "Have someone let me do X (receive permission)",
    structure: "V-causative て-form (させて) + もらう / いただく",
    explanation:
      "〜させてもらう expresses that the speaker receives permission to do something: 'I'll have you let me do X' / 'I'll take the liberty of doing X'. The humble 〜させていただく form is very common in business Japanese.",
    formation:
      "V-て (causative させて) + もらう\nV-て (causative させて) + いただく (humble)\nPast: させてもらった / させていただいた",
    examples: [
      { jp: "まず自己紹介[じこしょうかい]させてもらいます。", en: "First, let me introduce myself." },
      { jp: "明日[あした]休[やす]ませていただきます。", en: "I will take tomorrow off (with your permission)." },
      { jp: "この件[けん]について説明[せつめい]させてもらいました。", en: "I have taken the liberty of explaining this matter." }
    ],
    notes:
      "させていただく is the humble, highly polite version used in formal or business contexts. Overusing it can sound stiff; for routine actions, the plain causative or potential is often more natural.",
    related: ["g-n4-053", "g-n4-054", "g-n4-055"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 19 — passive & potential
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-057",
    point: "〜れる/〜られる (直接受身)",
    reading: "〜reru/〜rareru",
    level: "N4",
    category: "Passive",
    lesson: 19,
    meaning: "Be done; passive voice (direct passive)",
    structure: "V-passive: Group 1 〜れる / Group 2 〜られる / する→される",
    explanation:
      "The direct passive expresses that an action is done to the subject by an agent: 'X is done (by someone)'. The agent is marked by に. Used for transitive verbs with a clear patient as the subject.",
    formation:
      "Group 1: V-ない → れる (書[か]く → 書[か]かれる)\nGroup 2: V stem + られる (食[た]べる → 食[た]べられる)\nIrregular: する → される, 来[く]る → 来[こ]られる",
    examples: [
      { jp: "この手紙[てがみ]は昨日[きのう]書[か]かれました。", en: "This letter was written yesterday." },
      { jp: "弟[おとうと]は父[ちち]に褒[ほ]められました。", en: "My younger brother was praised by my father." },
      { jp: "会議[かいぎ]は明日[あした]開[ひら]かれます。", en: "The meeting will be held tomorrow." }
    ],
    notes:
      "In the direct passive, the subject is the patient of the action. The agent (doer) is marked by に and is often omitted when unimportant.",
    related: ["g-n4-058", "g-n4-059", "g-n4-060"]
  },

  {
    id: "g-n4-058",
    point: "〜れる/〜られる (迷惑の受身)",
    reading: "〜reru/〜rareru",
    level: "N4",
    category: "Passive",
    lesson: 19,
    meaning: "Have something done to one's belongings (suffering passive)",
    structure: "N(possessor) は N(possessed) を V-passive (by に)",
    explanation:
      "The suffering passive (迷惑の受身) describes something undesirable happening to the subject, often to something they possess: 'I had my X verb-ed (and suffered)'. Even intransitive verbs can be used this way.",
    formation:
      "Subject (owner) は/が Object を V-passive\nWith intransitive verbs: Subject が V-passive (雨[あめ]に降[ふ]られる)\nOften implies annoyance or harm",
    examples: [
      { jp: "私[わたし]は妹[いもうと]にケーキを食[た]べられました。", en: "My younger sister ate my cake (and I suffered)." },
      { jp: "私[わたし]は雨[あめ]に降[ふ]られました。", en: "I got rained on." },
      { jp: "昨夜[さくや]隣[となり]の人[ひと]の赤[あか]ちゃんに泣[な]かれました。", en: "Last night, my neighbor's baby cried and bothered me." }
    ],
    notes:
      "This 'possessor passive' or 'suffering passive' conveys that the subject was adversely affected, even with intransitive verbs like 泣[な]く or 降[ふ]る. There is no direct English equivalent.",
    related: ["g-n4-057", "g-n4-059", "g-n4-060"]
  },

  {
    id: "g-n4-059",
    point: "〜られる (可能・一段動詞)",
    reading: "〜rareru",
    level: "N4",
    category: "Verb forms",
    lesson: 19,
    meaning: "Can do; be able to do (potential, Group 2 & 来る)",
    structure: "Group 2: V stem + られる / 来る → 来られる",
    explanation:
      "The potential form expresses ability or capability to do something: 'can do X'. For Group 2 (ru-verbs), attach られる to the stem; for the irregular 来る, it becomes 来られる. Group 1 uses the 〜える ending.",
    formation:
      "Group 2: V stem + られる (食[た]べる → 食[た]べられる)\n来[く]る → 来[こ]られる\nする → できる (potential is irregular)\nGroup 1: V-ない → える (書[か]く → 書[か]ける)",
    examples: [
      { jp: "寿司[すし]が食[た]べられます。", en: "I can eat sushi." },
      { jp: "この映画[えいが]は子供[こども]でも見[み]られます。", en: "Even children can watch this movie." },
      { jp: "来年[らいねん]日本[にほん]へ来[こ]られますか。", en: "Will you be able to come to Japan next year?" }
    ],
    notes:
      "In casual speech, られる is often shortened to れる (食[た]べれる) — the so-called ら抜[ぬ]き言葉[ことば]. This is common but considered informal and non-standard in writing.",
    related: ["g-n4-057", "g-n4-058", "g-n4-060", "g-n4-061"]
  },

  {
    id: "g-n4-060",
    point: "〜される (するの受身)",
    reading: "〜sareru",
    level: "N4",
    category: "Passive",
    lesson: 19,
    meaning: "Be done; passive of する (irregular)",
    structure: "する → される (passive) / N + される",
    explanation:
      "The verb する has an irregular passive form される: 'to be done / to be carried out'. It is used with noun + する verbal nouns (e.g., 発表する → 発表される).",
    formation:
      "する → される\nN + される (発表[はっぴょう]される, 準備[じゅんび]される)\nPast: された\nNegative: されない",
    examples: [
      { jp: "発表[はっぴょう]は明日[あした]されます。", en: "The presentation will be given tomorrow." },
      { jp: "この仕事[しごと]は早[はや]くされました。", en: "This work was done quickly." },
      { jp: "会議[かいぎ]の準備[じゅんび]がされています。", en: "Meeting preparations are being made." }
    ],
    notes:
      "される is the passive of する; the causative is させる. Many Sino-Japanese verbal nouns take this pattern (e.g., 説明[せつめい]される, 検査[けんさ]される).",
    related: ["g-n4-057", "g-n4-058", "g-n4-059"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 20 — ability
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-061",
    point: "〜ことができる",
    reading: "〜koto ga dekiru",
    level: "N4",
    category: "Verb forms",
    lesson: 20,
    meaning: "Can do; be able to do (formal potential)",
    structure: "V-辞書形 + ことができる",
    explanation:
      "〜ことができる is a formal way to express ability or possibility: 'can do X' / 'it is possible to do X'. It is commonly used in writing, formal speech, and to describe general capability.",
    formation:
      "V-辞書形 + ことができる (話[はな]すことができる)\nNegative: V-辞書形 + ことができない\nPast: V-辞書形 + ことができた",
    examples: [
      { jp: "私[わたし]は日本語[にほんご]を話[はな]すことができます。", en: "I can speak Japanese." },
      { jp: "ここで車[くるま]を止[と]めることができますか。", en: "Can I park a car here?" },
      { jp: "この店[みせ]ではクレジットカードを使[つか]うことができません。", en: "You cannot use credit cards at this shop." }
    ],
    notes:
      "〜ことができる is more formal and objective than the conjugated potential form (話[はな]せる). In casual speech, the potential form is preferred. Do not use it with verbs that already imply ability.",
    related: ["g-n4-059", "g-n4-062", "g-n4-063"]
  },

  {
    id: "g-n4-062",
    point: "〜できる (可能)",
    reading: "〜dekiru",
    level: "N4",
    category: "Verb forms",
    lesson: 20,
    meaning: "Can / be possible (potential verb できる)",
    structure: "Noun + が + できる",
    explanation:
      "できる is the potential verb meaning 'can / be possible'. It attaches directly to a noun marked by が, expressing ability in a skill or the possibility of an event: 'can do X / X is possible'.",
    formation:
      "N + が + できる (料理[りょうり]ができる)\nN + が + できない (negative)\nPast: N + が + できた\nCommon nouns: 料理, 運転[うんてん], 英語[えいご]",
    examples: [
      { jp: "料理[りょうり]ができますか。", en: "Can you cook?" },
      { jp: "この公園[こうえん]でバーベキューができます。", en: "You can have a barbecue in this park." },
      { jp: "彼[かれ]は英語[えいご]ができます。", en: "He can do English (is good at English)." }
    ],
    notes:
      "できる attaches to nouns of activity or skill (料理, スポーツ, 運転). It is also used for events being possible (会議[かいぎ]ができる). Contrast with 〜ことができる which attaches to verbs.",
    related: ["g-n4-059", "g-n4-061", "g-n4-063"]
  },

  {
    id: "g-n4-063",
    point: "〜ことができる vs 可能形",
    reading: "〜koto ga dekiru / kanou-kei",
    level: "N4",
    category: "Verb forms",
    lesson: 20,
    meaning: "Formal potential 〜ことができる vs potential verb form",
    structure: "V-辞書形 + ことができる  vs  V-potential",
    explanation:
      "〜ことができる and the conjugated potential form (e.g., 話せる) are largely interchangeable, but differ in register and nuance: 〜ことができる is formal/written and objective; the potential form is more conversational and subjective.",
    formation:
      "Formal: V-辞書形 + ことができる (話[はな]すことができる)\nConversational: V-potential (話[はな]せる)\nBoth negative: できない / 話[はな]せない",
    examples: [
      { jp: "日本語[にほんご]を話[はな]すことができます。／日本語[にほんご]が話[はな]せます。", en: "I can speak Japanese. (formal / casual)" },
      { jp: "この漢字[かんじ]を読[よ]むことができます。／この漢字[かんじ]が読[よ]めます。", en: "I can read this kanji. (formal / casual)" },
      { jp: "来週[らいしゅう]来[く]ることができません。／来週[らいしゅう]来[こ]られません。", en: "I can't come next week. (formal / casual)" }
    ],
    notes:
      "Choose 〜ことができる for formal, written, or objective contexts (resumes, announcements) and the potential form for spoken, personal contexts. The particle often shifts を → が with the potential form.",
    related: ["g-n4-059", "g-n4-061", "g-n4-062"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 21 — conditionals review
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-064",
    point: "〜ば (条件・復習)",
    reading: "〜ba",
    level: "N4",
    category: "Conditionals",
    lesson: 21,
    meaning: "If ... (conditional ば-form, review)",
    structure: "V-ば / い-adj-ければ / な-adj + なら(ば) / N + なら(ば)",
    explanation:
      "〜ば is a conditional form expressing 'if X happens, then Y': it presents a condition for the consequent. It can describe hypothetical, general, or one-time conditions and is neutral about whether X will actually occur.",
    formation:
      "Group 1: V-ない → えば (書[か]く → 書[か]けば)\nGroup 2: V stem + れば (食[た]べる → 食[た]べれば)\nIrregular: する → すれば, 来[く]る → 来[く]れば\nい-adj: drop い + ければ (安[やす]い → 安[やす]ければ)",
    examples: [
      { jp: "天気[てんき]がよければ、出[で]かけましょう。", en: "If the weather is good, let's go out." },
      { jp: "安[やす]ければ買[か]います。", en: "If it's cheap, I'll buy it." },
      { jp: "時間[じかん]があれば、手伝[てつだ]います。", en: "If I have time, I'll help." }
    ],
    notes:
      "〜ば cannot be followed directly by a volitional, request, or invitation (× 行[い]けば行[い]きましょう). For those, use 〜たら. 〜ば is most neutral and common in written or logical conditions.",
    related: ["g-n4-065", "g-n4-066"]
  },

  {
    id: "g-n4-065",
    point: "〜なら",
    reading: "〜nara",
    level: "N4",
    category: "Conditionals",
    lesson: 21,
    meaning: "If / given that; as for (conditional なら)",
    structure: "N / な-adj (plain) + なら（ば） / V-plain + なら",
    explanation:
      "〜なら presents a condition based on the listener's information or a shared context: 'if it's the case that... / as for X'. It often builds on something the other person just said and offers a suggestion or consequence.",
    formation:
      "N + なら (学生[がくせい]なら)\nな-adj + なら (静[しず]かなら)\nい-adj + なら (寒[さむ]いなら)\nV-plain + なら (行[い]くなら)\nFormal: ならば",
    examples: [
      { jp: "日本[にほん]へ行[い]くなら、新幹線[しんかんせん]が便利[べんり]です。", en: "If you're going to Japan, the shinkansen is convenient." },
      { jp: "お酒[さけ]を飲[の]むなら、車[くるま]を運転[うんてん]しないでください。", en: "If you're going to drink, please don't drive." },
      { jp: "学生[がくせい]なら、割引[わりびき]があります。", en: "If you're a student, there's a discount." }
    ],
    notes:
      "〜なら takes up information already known or assumed and gives a consequent suggestion. It cannot express a general conditional truth like 〜と; it focuses on a specific, contextual 'if'.",
    related: ["g-n4-064", "g-n4-066"]
  },

  {
    id: "g-n4-066",
    point: "〜と (条件・復習)",
    reading: "〜to",
    level: "N4",
    category: "Conditionals",
    lesson: 21,
    meaning: "Whenever / if (general & natural conditional, review)",
    structure: "V-辞書形/た / い-adj / な-adj + だ / N + だ + と",
    explanation:
      "〜と expresses a conditional relationship where the consequent naturally or inevitably follows the condition: 'when/whenever/if X, then Y'. It commonly describes natural laws, habits, or sequential events, and the consequent cannot be a volitional act.",
    formation:
      "V-辞書形 + と (春[はる]になると桜[さくら]が咲[さ]く)\nV-た + と (右[みぎ]に曲[ま]がると駅[えき]がある)\nい-adj + と (寒[さむ]いと風邪[かぜ]をひく)\nN / な-adj + だ + と",
    examples: [
      { jp: "春[はる]になると、桜[さくら]が咲[さ]きます。", en: "When spring comes, cherry blossoms bloom." },
      { jp: "このボタンを押[お]すと、ドアが開[あ]きます。", en: "When you press this button, the door opens." },
      { jp: "右[みぎ]に曲[ま]がると、郵便局[ゆうびんきょく]があります。", en: "When you turn right, there's a post office." }
    ],
    notes:
      "〜と describes inevitable or habitual outcomes, so the consequent cannot be a command, request, or intention (× 雨[あめ]が降[ふ]ると行[い]きません). For those, use 〜たら or 〜ば.",
    related: ["g-n4-064", "g-n4-065"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 22 — hearsay
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-067",
    point: "〜って (伝聞・カジュアル)",
    reading: "〜tte",
    level: "N4",
    category: "Conjecture",
    lesson: 22,
    meaning: "I heard that...; they say... (casual hearsay)",
    structure: "Sentence (plain) + って",
    explanation:
      "〜って is a casual quoting/hearsay particle meaning 'I heard that... / they say that...'. It is the colloquial equivalent of 〜と聞いた or 〜そうです (伝聞), used in everyday conversation.",
    formation:
      "Sentence (plain) + って\nCan follow N, な-adj (だ→), plain verb/adj forms\nOften paired with 聞[き]いた, 言[い]っていた (optional)",
    examples: [
      { jp: "田中[たなか]さんは来年[らいねん]結婚[けっこん]するって。", en: "I heard Tanaka is getting married next year." },
      { jp: "明日[あした]は雨[あめ]が降[ふ]るって聞[き]いたよ。", en: "I heard it will rain tomorrow." },
      { jp: "あの店[みせ]はおいしいって。", en: "They say that restaurant is good." }
    ],
    notes:
      "って is casual spoken hearsay; in writing or formal speech use 〜そうです (伝聞) or 〜ということです. It can also mean 'called' (田中[たなか]って人[ひと]) or mark a topic (これって何[なに]?).",
    related: ["g-n4-068", "g-n4-069"]
  },

  {
    id: "g-n4-068",
    point: "〜そうです (伝聞)",
    reading: "〜sou desu",
    level: "N4",
    category: "Conjecture",
    lesson: 22,
    meaning: "I heard that... / it is said that... (hearsay)",
    structure: "Sentence (plain) + そうです",
    explanation:
      "〜そうです (伝聞) reports information obtained from someone else or a source: 'I hear that... / it is said that...'. It attaches to the plain form and indicates the speaker did not witness the event directly.",
    formation:
      "V-plain + そうです (行[い]くそうです / 行[い]ったそうです)\nい-adj + そうです (高[たか]いそうです)\nな-adj (だ→) + そうです (静[しず]かだそうです)\nN (だ→) + そうです (雨[あめ]だそうです)",
    examples: [
      { jp: "天気[てんき]予報[よほう]によると、明日[あした]は雨[あめ]が降[ふ]るそうです。", en: "According to the weather forecast, it will rain tomorrow." },
      { jp: "田中[たなか]さんは来月[らいげつ]転勤[てんきん]するそうです。", en: "I heard that Tanaka will be transferred next month." },
      { jp: "あの映画[えいが]はとても面白[おもしろ]いそうです。", en: "I hear that movie is very interesting." }
    ],
    notes:
      "Hearsay 〜そうです attaches to the plain form, in contrast to conjecture 〜そうです (様態) which attaches to the V-stem or い-adj stem. Add 〜によると or 〜の話[はなし]では to indicate the source.",
    related: ["g-n4-067", "g-n4-069"]
  },

  {
    id: "g-n4-069",
    point: "〜ということだ",
    reading: "〜to iu koto da",
    level: "N4",
    category: "Conjecture",
    lesson: 22,
    meaning: "It means that... / the report is that... (formal hearsay)",
    structure: "Sentence (plain) + ということだ",
    explanation:
      "〜ということだ is a formal hearsay expression used in news, reports, and writing: 'it is reported that... / this means that...'. It conveys both reported information and an explanatory conclusion.",
    formation:
      "V-plain + ということだ\nい-adj + ということだ\nな-adj / N (だ) + ということだ\nOften follows 〜によると",
    examples: [
      { jp: "ニュースによると、明日[あした]からストライキが始[はじ]まるということです。", en: "According to the news, a strike will start from tomorrow." },
      { jp: "彼[かれ]は来月[らいげつ]帰国[きこく]するということです。", en: "I heard that he will return to his country next month." },
      { jp: "このマークは「禁煙[きんえん]」だということです。", en: "This mark means 'no smoking'." }
    ],
    notes:
      "〜ということだ can report hearsay OR explain meaning ('means that...'). It is more formal than 〜そうです (伝聞) and common in news, official notices, and written explanations.",
    related: ["g-n4-067", "g-n4-068"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 23 — purpose & cause
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-070",
    point: "〜ために (目的)",
    reading: "〜tame ni",
    level: "N4",
    category: "Purpose",
    lesson: 23,
    meaning: "In order to; for the purpose of",
    structure: "V-辞書形 + ために / N の + ために",
    explanation:
      "〜ために expresses purpose or objective: 'in order to do X / for the purpose of X'. The main clause describes an action taken to achieve that goal, and the subject of both clauses should match.",
    formation:
      "V-辞書形 + ために (行[い]くために)\nN の + ために (家族[かぞく]のために)\nCannot use V-て or V-plain past for purpose",
    examples: [
      { jp: "日本[にほん]へ行[い]くために、お金[かね]を貯[た]めています。", en: "I'm saving money in order to go to Japan." },
      { jp: "健康[けんこう]のために、毎日[まいにち]運動[うんどう]します。", en: "For my health, I exercise every day." },
      { jp: "試験[しけん]に合格[ごうかく]するために、一生懸命[いっしょうけんめい]勉強[べんきょう]しています。", en: "I'm studying hard in order to pass the exam." }
    ],
    notes:
      "ため (purpose) requires V-辞書形 or N のため. The subject of the purpose clause and the main clause must match. Contrast with 〜ように (L23) which allows different subjects or states.",
    related: ["g-n4-071", "g-n4-072"]
  },

  {
    id: "g-n4-071",
    point: "〜ように",
    reading: "〜you ni",
    level: "N4",
    category: "Purpose",
    lesson: 23,
    meaning: "So that; in such a way that",
    structure: "V-辞書形 / V-ない形 / V-potential + ように / N の + ように",
    explanation:
      "〜ように expresses an indirect purpose or desired state: 'so that X will happen / in such a way that...'. Unlike 〜ために, the subjects can differ, and it often describes a change of state or habitual goal.",
    formation:
      "V-辞書形 + ように (忘[わす]れないように)\nV-ない形 + ように (風邪[かぜ]をひかないように)\nV-potential + ように (話[はな]せるように)\nN の + ように (子供[こども]のように)",
    examples: [
      { jp: "忘[わす]れないように、メモしておきました。", en: "I made a note so that I wouldn't forget." },
      { jp: "日本語[にほんご]が話[はな]せるように、毎日[まいにち]練習[れんしゅう]しています。", en: "I practice every day so that I can speak Japanese." },
      { jp: "風邪[かぜ]をひかないように、気[き]をつけてください。", en: "Please be careful so that you don't catch a cold." }
    ],
    notes:
      "ように is used when the goal is a state or potential, when subjects differ, or when the result is not directly controllable. 〜ために is for direct, intentional actions by the same subject.",
    related: ["g-n4-070", "g-n4-072"]
  },

  {
    id: "g-n4-072",
    point: "〜ために (原因)",
    reading: "〜tame ni",
    level: "N4",
    category: "Purpose",
    lesson: 23,
    meaning: "Because of; due to (cause / reason)",
    structure: "N の + ために / V-た + ために",
    explanation:
      "〜ために can also express cause or reason: 'because of X / due to X'. It is formal and common in writing, describing an objective cause producing a result (often negative).",
    formation:
      "N の + ために (病気[びょうき]のために)\nV-た + ために (雨[あめ]が降[ふ]ったために)\nFormal register; often written",
    examples: [
      { jp: "病気[びょうき]のために、学校[がっこう]を休[やす]みました。", en: "I was absent from school due to illness." },
      { jp: "雪[ゆき]のために、電車[でんしゃ]が遅[おく]れました。", en: "The train was delayed due to snow." },
      { jp: "台風[たいふう]のために、飛行機[ひこうき]が飛[と]びませんでした。", en: "Due to the typhoon, planes did not fly." }
    ],
    notes:
      "This ため expresses cause, distinguished from purpose-ため by context and form: cause-ため typically takes N のため or V-た ため, often describes negative outcomes, and is more common in formal writing.",
    related: ["g-n4-070", "g-n4-071"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 24 — preparation & resultant state
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-073",
    point: "〜ておく",
    reading: "〜te oku",
    level: "N4",
    category: "Verb forms",
    lesson: 24,
    meaning: "Do something in advance / leave it done",
    structure: "V-て + おく",
    explanation:
      "〜ておく means to do something in preparation for a future need or to leave something as it is: 'do X in advance / do X and leave it'. It implies the action creates a state that will be useful later.",
    formation:
      "V-て + おく (買[か]っておく)\nPolite: V-て + おきます\nPast: V-て + おいた\nVolitional: V-て + おこう\nCasual contraction: V-とく (買[か]っとく)",
    examples: [
      { jp: "明日[あした]の会議[かいぎ]のために資料[しりょう]をコピーしておきます。", en: "I'll copy the materials in advance for tomorrow's meeting." },
      { jp: "先[さき]に電気[でんき]をつけておきました。", en: "I turned the light on in advance." },
      { jp: "部屋[へや]をきれいに掃除[そうじ]しておきました。", en: "I cleaned the room in advance." }
    ],
    notes:
      "ておく conveys preparation or leaving a result for future use. In casual speech it often contracts to 〜とく (買[か]っとく). Distinguish from 〜てある (state) and 〜てしまう (completion).",
    related: ["g-n4-074", "g-n4-075", "g-n4-076"]
  },

  {
    id: "g-n4-074",
    point: "〜てある",
    reading: "〜te aru",
    level: "N4",
    category: "Verb forms",
    lesson: 24,
    meaning: "Has been done; is in a resultant state",
    structure: "V-て + ある (transitive verbs only)",
    explanation:
      "〜てある expresses a state resulting from a deliberate past action: 'X has been done (and is now in that state)'. The object becomes the subject marked by が, and the doer is usually unspecified.",
    formation:
      "Transitive V-て + ある (開[あ]けてある)\nObject が V-てある\nPolite: V-て + あります\nNegative: V-て + ない (state is not there)",
    examples: [
      { jp: "窓[まど]が開[あ]けてあります。", en: "The window has been opened (and is open)." },
      { jp: "机[つくえ]に花[はな]が飾[かざ]ってあります。", en: "Flowers have been arranged on the desk." },
      { jp: "ピザが頼[たの]んであります。", en: "A pizza has been ordered (and the order stands)." }
    ],
    notes:
      "〜てある focuses on the resultant state of a transitive verb done by someone; the object takes が. Compare 〜ている (state of intransitive verbs, e.g., 窓[まど]が開[あ]いている) and 〜ておく (action of preparing).",
    related: ["g-n4-073", "g-n4-075", "g-n4-076"]
  },

  {
    id: "g-n4-075",
    point: "〜てしまう",
    reading: "〜te shimau",
    level: "N4",
    category: "Verb forms",
    lesson: 24,
    meaning: "Finish doing / do completely (often with regret)",
    structure: "V-て + しまう",
    explanation:
      "〜てしまう expresses completing an action fully, often with a nuance of regret, accident, or unintended result: 'I ended up doing X / did X completely'. It can describe both intentional completion and unfortunate outcomes.",
    formation:
      "V-て + しまう (食[た]べてしまう)\nPolite: V-て + しまいます\nPast: V-て + しまった\nCasual contraction: V-ちゃう / V-ちゃった (食[た]べちゃう)",
    examples: [
      { jp: "ケーキを全部[ぜんぶ]食[た]べてしまいました。", en: "I ate the whole cake (regretfully)." },
      { jp: "約束[やくそく]を忘[わす]れてしまいました。", en: "I ended up forgetting the promise." },
      { jp: "この本[ほん]はもう読[よ]んでしまいました。", en: "I've already finished reading this book." }
    ],
    notes:
      "〜てしまう conveys either completion ('I finished doing') or regret ('I accidentally did'). In casual speech it contracts to 〜ちゃう / 〜ちゃった (食[た]べてしまう → 食[た]べちゃう).",
    related: ["g-n4-073", "g-n4-074", "g-n4-076"]
  },

  {
    id: "g-n4-076",
    point: "〜たまま",
    reading: "〜ta mama",
    level: "N4",
    category: "Verb forms",
    lesson: 24,
    meaning: "Leaving something as it is; remaining in a state",
    structure: "V-た + まま / N の + まま / な-adj + な + まま",
    explanation:
      "〜まま expresses that something remains in a certain state without being changed or restored: 'left as it is / still in the state of...'. It implies the state persists when normally it would be changed.",
    formation:
      "V-た + まま (開[あ]けたまま)\nN の + まま (昔[むかし]のまま)\nな-adj + な + まま (静[しず]かなまま)\nい-adj + まま (寒[さむ]いまま)",
    examples: [
      { jp: "窓[まど]を開[あ]けたまま寝[ね]ました。", en: "I slept with the window left open." },
      { jp: "靴[くつ]を履[は]いたまま部屋[へや]に入[はい]らないでください。", en: "Please don't enter the room with your shoes still on." },
      { jp: "昔[むかし]のままの町並[まちな]みが残[のこ]っています。", en: "The streetscape remains as it was in the old days." }
    ],
    notes:
      "〜まま emphasizes that a state continues without the expected change. The verb is always in た-form (たまま) for actions, or N のまま for nouns. It often contrasts with what should normally be done.",
    related: ["g-n4-073", "g-n4-074", "g-n4-075"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 25 — explanatory & honorific basics
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-077",
    point: "〜のだ / 〜んです",
    reading: "〜no da / 〜n desu",
    level: "N4",
    category: "Modifying",
    lesson: 25,
    meaning: "It is that...; the fact is... (explanatory の)",
    structure: "Sentence (plain) + のだ / んです",
    explanation:
      "〜のだ (casual) / 〜んです (polite) adds an explanatory nuance: 'the situation is that... / it is that...'. It provides background, reason, or shared understanding, often softening or emphasizing the statement.",
    formation:
      "V-plain + のだ / んです (行[い]くんです)\nい-adj + のだ / んです (寒[さむ]いんです)\nな-adj + な + のだ / んです (静[しず]かなんです)\nN + な + のだ / んです (学生[がくせい]なんです)",
    examples: [
      { jp: "頭[あたま]が痛[いた]いんです。", en: "I have a headache (that's why / explaining)." },
      { jp: "明日[あした]は休[やす]みなんで、行[い]けません。", en: "Tomorrow is my day off, so I can't go." },
      { jp: "私[わたし]は日本人[にほんじん]なんです。", en: "I'm Japanese (explaining / contrary to expectation)." }
    ],
    notes:
      "〜んです is the contracted polite form of 〜のだ. It signals explanation, background, or emphasis and is heavily used in conversation to give reasons, ask for clarification, or show engagement.",
    related: ["g-n4-078", "g-n4-079"]
  },

  {
    id: "g-n4-078",
    point: "〜んですか",
    reading: "〜n desu ka",
    level: "N4",
    category: "Modifying",
    lesson: 25,
    meaning: "Why? / How come?; seeking an explanation",
    structure: "Sentence (plain) + んですか / のですか",
    explanation:
      "〜んですか asks for an explanation or background behind a situation: 'what's the reason? / how come?'. It shows the speaker's curiosity, concern, or expectation that something underlies the observed fact.",
    formation:
      "V-plain + んですか (行[い]くんですか)\nい-adj + んですか (寒[さむ]いんですか)\nな-adj + な + んですか (静[しず]かなんですか)\nN + な + んですか (学生[がくせい]なんですか)",
    examples: [
      { jp: "どうして遅[おく]れたんですか。", en: "Why were you late? (seeking explanation)" },
      { jp: "顔色[かおいろ]が悪[わる]いんですが、大丈夫[だいじょうぶ]ですか。", en: "You look pale; are you okay?" },
      { jp: "この漢字[かんじ]はどう読[よ]むんですか。", en: "How do you read this kanji? (asking for clarification)" }
    ],
    notes:
      "〜んですか requests an explanatory answer rather than a yes/no. It signals engagement and is softer and more natural than a blunt 〜か question for seeking reasons.",
    related: ["g-n4-077", "g-n4-079"]
  },

  {
    id: "g-n4-079",
    point: "〜でしょうか",
    reading: "〜deshou ka",
    level: "N4",
    category: "Honorific",
    lesson: 25,
    meaning: "I wonder if...?; perhaps...? (polite, soft conjecture)",
    structure: "Sentence (polite/plain) + でしょうか / N + でしょうか",
    explanation:
      "〜でしょうか is a polite, soft form used for conjecture or a gentle question: 'I wonder if... / could it be that...?'. It softens ですか and sounds more hesitant, considerate, or speculative.",
    formation:
      "N + でしょうか (雨[あめ]でしょうか)\nな-adj + でしょうか (静[しず]かでしょうか)\nい-adj + でしょうか (寒[さむ]いでしょうか)\nV-ます + でしょうか (行[い]きましょうか)",
    examples: [
      { jp: "明日[あした]は晴[は]れるでしょうか。", en: "I wonder if it will be clear tomorrow." },
      { jp: "これは田中[たなか]さんの傘[かさ]でしょうか。", en: "Could this be Tanaka's umbrella?" },
      { jp: "何時[なんじ]ごろ着[つ]くでしょうか。", en: "I wonder around what time (we/you) will arrive." }
    ],
    notes:
      "でしょうか softens ですか and is used when the speaker is uncertain or wants to sound gentle. It can also be a humble way to offer help (何[なに]かお探[さが]しでしょうか — 'are you looking for something?').",
    related: ["g-n4-077", "g-n4-078", "g-n4-080"]
  },

  {
    id: "g-n4-080",
    point: "〜お〜になる / 〜ご〜する",
    reading: "o〜ni naru / go〜suru",
    level: "N4",
    category: "Honorific",
    lesson: 25,
    meaning: "Honorific and humble verb forms (respectful & humble speech)",
    structure: "お + V-ます stem + になる (honorific) / お + V-ます stem + する (humble)",
    explanation:
      "お〜になる elevates the subject (honorific/尊敬), used for the listener's or a third party's actions. お〜する / ご〜する lowers the speaker's action (humble/謙譲), used for the speaker's actions toward a respected party.",
    formation:
      "Honorific: お + V-ます stem + になる (お帰[かえ]りになる)\nHumble: お + V-ます stem + する (お持[も]ちする)\nHumble (漢語): ご + N + する (ご連絡[れんらく]する)\nSpecial: いらっしゃる, 申[もう]す, いただく",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりましたか。", en: "Has the teacher already gone home?" },
      { jp: "後[あと]でご連絡[れんらく]します。", en: "I will contact you later (humbly)." },
      { jp: "私[わたし]がお持[も]ちします。", en: "I will carry it (humbly)." }
    ],
    notes:
      "Honorific お〜になる respects the subject; humble お〜する lowers the speaker. It is formed with the ます stem of verbs. Many verbs have special suppletive forms (e.g., 行[い]く → いらっしゃる / 参[まい]る, 言[い]う → おっしゃる / 申[もう]す).",
    related: ["g-n4-077", "g-n4-078", "g-n4-079"]
  }
];

export const minnaN4LessonTitles2: { lesson: number; title: string; topic: string }[] = [
  { lesson: 14, title: "第14課", topic: "決定: ことにする・ことになる" },
  { lesson: 15, title: "第15課", topic: "理由列举: 〜し・〜し、〜し" },
  { lesson: 16, title: "第16課", topic: "同時・期間: ながら・間に・間" },
  { lesson: 17, title: "第17課", topic: "依頼: てくれる?・てもらえませんか" },
  { lesson: 18, title: "第18課", topic: "使役: させる・させられる" },
  { lesson: 19, title: "第19課", topic: "受身・可能: れる・られる" },
  { lesson: 20, title: "第20課", topic: "能力: ことができる・できる" },
  { lesson: 21, title: "第21課", topic: "条件・復習: ば・なら・と" },
  { lesson: 22, title: "第22課", topic: "伝聞: って・そうです・ということだ" },
  { lesson: 23, title: "第23課", topic: "目的・原因: ために・ように" },
  { lesson: 24, title: "第24課", topic: "準備・状態: ておく・てある・てしまう" },
  { lesson: 25, title: "第25課", topic: "説明・敬語: のだ・でしょうか・お〜になる" }
];
