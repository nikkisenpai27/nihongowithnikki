import type { GrammarData } from "@/lib/types";

// JLPT N1 grammar — Shinzaizen Master style, chunk D.
// Furigana notation: kanji readings inline as 漢字[かんじ].
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// Each contiguous kanji run is given one bracket with its full reading.
// Total: 50 points across 5 categories.
// IDs: gn1-151 .. gn1-200.
// All points are NEW — distinct from chunks A and B.

export const grammarN1D: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // CONTRAST — 12 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-151",
    point: "〜うが",
    reading: "...u ga",
    level: "N1",
    category: "Contrast",
    meaning: "no matter whether one does...; even if one does...",
    structure: "V（意向形）+ う/よう + が",
    explanation:
      "Indicates that regardless of what action is taken or what state arises, the conclusion does not change. A literary and emphatic counterpart to 〜ても, frequently paired with interrogatives such as どんなに, いくら, or 何.",
    formation:
      "V-意向形 + が\n例: 行[い]こうが / 食[た]べようが / なろうが",
    examples: [
      { jp: "どんな困難[こんなん]が待[ま]っていようが、諦[あきら]めない。", en: "No matter what difficulty awaits, I will not give up." },
      { jp: "何[なに]を言[い]われようが、私[わたし]の信念[しんねん]は揺[ゆ]るがない。", en: "No matter what is said to me, my convictions will not waver." }
    ],
    notes:
      "More literary than 〜ても. Often combined with 疑問詞 (何, 誰, どんなに) to mean 'no matter how/what.' Closely related to 〜うが〜まいが and 〜うと.",
    related: ["gn1-152", "gn1-153", "gn1-154"]
  },

  {
    id: "gn1-152",
    point: "〜うが〜まいが",
    reading: "...u ga...mai ga",
    level: "N1",
    category: "Contrast",
    meaning: "whether one does... or does not... (the result is the same)",
    structure: "V（意向形）+ う/よう + が、V（辞書形）+ まい + が",
    explanation:
      "Pairs a volitional form with its negative まい form to indicate that either outcome produces the same result. The speaker emphasizes that the choice is irrelevant to the conclusion.",
    formation:
      "V-意向形 + が、V-辞書形 + まい + が\n例: 行[い]こうが行[い]くまいが / しようがするまいが / 来[こ]ようが来[こ]るまいが",
    examples: [
      { jp: "彼[かれ]が来[こ]ようが来[こ]るまいが、私[わたし]は出発[しゅっぱつ]する。", en: "Whether he comes or not, I am leaving." },
      { jp: "君[きみ]が信[しん]じようが信[しん]じまいが、これは事実[じじつ]だ。", en: "Whether you believe it or not, this is a fact." }
    ],
    notes:
      "Equivalent to 〜ても〜なくても but more formal and literary. The まい form attaches to the dictionary form for vowel-stem verbs (来[く]るまい, するまい) and may also attach to the ます-stem for consonant-stem verbs (書[か]くまい / 書[か]きまい).",
    related: ["gn1-151", "gn1-153", "gn1-154"]
  },

  {
    id: "gn1-153",
    point: "〜うと",
    reading: "...u to",
    level: "N1",
    category: "Contrast",
    meaning: "even if one tries to...; no matter if one...",
    structure: "V（意向形）+ う/よう + と",
    explanation:
      "Equivalent in meaning to 〜うが, indicating that whatever action or state occurs, the conclusion holds. Slightly less formal than 〜うが but still appears frequently in written N1 texts, often with interrogatives.",
    formation:
      "V-意向形 + と\n例: 行[い]こうと / 食[た]べようと / 思[おも]おうと",
    examples: [
      { jp: "いくら勉強[べんきょう]しようと、才能[さいのう]がなければ伸[の]びない。", en: "No matter how much you study, without talent you will not improve." },
      { jp: "何度[なんど]挑戦[ちょうせん]しようと、結果[けっか]は同[おな]じだった。", en: "No matter how many times I tried, the result was the same." }
    ],
    notes:
      "Often paired with いくら, 何度, どんなに. The difference from 〜うが is mostly stylistic—〜うと is slightly softer but still formal. Can also form 〜うと〜まいと.",
    related: ["gn1-151", "gn1-152"]
  },

  {
    id: "gn1-154",
    point: "〜うが〜うが",
    reading: "...u ga...u ga",
    level: "N1",
    category: "Contrast",
    meaning: "whether one does A or does B (either way, the same holds)",
    structure: "V1（意向形）+ う/よう + が、V2（意向形）+ う/よう + が",
    explanation:
      "Lists two different volitional actions to show that whichever is chosen, the conclusion is unchanged. Unlike 〜うが〜まいが, both verbs are positive forms (different actions, not affirmative/negative).",
    formation:
      "V1-意向形 + が、V2-意向形 + が\n例: 行[い]こうが残[のこ]ろうが / 泣[な]こうが怒[いか]ろうが",
    examples: [
      { jp: "転[ころ]ぼうが走[はし]ろうが、とにかくゴールまで行[い]く。", en: "Whether I fall or run, I will reach the goal somehow." },
      { jp: "賛成[さんせい]しようが反対[はんたい]しようが、計画[けいかく]は進[すす]む。", en: "Whether one agrees or opposes, the plan will proceed." }
    ],
    notes:
      "Both verbs are volitional (positive form), which distinguishes it from 〜うが〜まいが. Used to present two alternatives and dismiss both as irrelevant to the outcome.",
    related: ["gn1-151", "gn1-152"]
  },

  {
    id: "gn1-155",
    point: "〜にしろ",
    reading: "...ni shiro",
    level: "N1",
    category: "Contrast",
    meaning: "even if...; even assuming...; whether it be...",
    structure: "V（辞書形）/ N + にしろ",
    explanation:
      "A concessive pattern meaning 'even if / even assuming.' Often follows nouns or dictionary-form verbs to present an extreme or hypothetical case, with the main clause asserting something that holds regardless.",
    formation:
      "N + にしろ / V-辞書形 + にしろ\n例: 学生[がくせい]にしろ / 行[い]くにしろ / 先生[せんせい]にしろ",
    examples: [
      { jp: "親[おや]にしろ、子[こ]にしろ、お互[たが]いの気持[きも]ちを考[かんが]えるべきだ。", en: "Whether parent or child, both should consider each other's feelings." },
      { jp: "簡単[かんたん]なことにしろ、油断[ゆだん]すれば失敗[しっぱい]する。", en: "Even for something simple, you will fail if you let your guard down." }
    ],
    notes:
      "Equivalent to 〜にせよ and 〜でも. More emphatic than 〜ても. When doubled as 〜にしろ〜にしろ it lists multiple items explicitly.",
    related: ["gn1-156"]
  },

  {
    id: "gn1-156",
    point: "〜にせよ",
    reading: "...ni seyo",
    level: "N1",
    category: "Contrast",
    meaning: "even if...; even assuming...; even granting that...",
    structure: "V（辞書形）/ N + にせよ",
    explanation:
      "Functionally identical to 〜にしろ—a concessive meaning 'even if / even granting that.' Often used to acknowledge a condition before asserting a contrary or additional point.",
    formation:
      "N + にせよ / V-辞書形 + にせよ\n例: 先生[せんせい]にせよ / 行[い]くにせよ / 難[むずか]しいにせよ",
    examples: [
      { jp: "忙[いそが]しいにせよ、連絡[れんらく]くらいはできるだろう。", en: "Even if you are busy, you could at least get in touch." },
      { jp: "どんな理由[りゆう]にせよ、暴力[ぼうりょく]は許[ゆる]されない。", en: "Whatever the reason, violence is not tolerated." }
    ],
    notes:
      "Interchangeable with 〜にしろ in most cases. 〜にせよ is considered slightly softer and more polite. Also used doubled as 〜にせよ〜にせよ to list alternatives.",
    related: ["gn1-155"]
  },

  {
    id: "gn1-157",
    point: "〜にあっても",
    reading: "...ni atte mo",
    level: "N1",
    category: "Contrast",
    meaning: "even in/under (a situation); even though one is in...",
    structure: "N + にあっても",
    explanation:
      "Indicates that even within a particular situation, condition, or role, the stated outcome holds. Emphasizes that the circumstance does not change the conclusion. Formal/literary counterpart to 〜でも.",
    formation:
      "N + にあっても\n例: 困難[こんなん]にあっても / 現代[げんだい]にあっても / 戦時[せんじ]にあっても",
    examples: [
      { jp: "この困難[こんなん]な状況[じょうきょう]にあっても、彼[かれ]は希望[きぼう]を捨[す]てない。", en: "Even in this difficult situation, he does not abandon hope." },
      { jp: "現代[げんだい]にあっても、古[ふる]い習慣[しゅうかん]は残[のこ]っている。", en: "Even in modern times, old customs remain." }
    ],
    notes:
      "Formal/literary concessive form of 〜にあって (see gn1-192). The 〜にあって form means 'in/under (a situation)' while 〜にあっても adds the concessive 'even in/under.' Common in essays and formal writing.",
    related: ["gn1-192"]
  },

  {
    id: "gn1-158",
    point: "〜をよそに",
    reading: "...o yoso ni",
    level: "N1",
    category: "Contrast",
    meaning: "ignoring...; disregarding...; in spite of...",
    structure: "N + をよそに",
    explanation:
      "Indicates that someone ignores or disregards something—often others' feelings, expectations, or warnings—and proceeds with an action. Carries a critical tone toward the subject.",
    formation:
      "N + をよそに\n例: 親[おや]の心配[しんぱい]をよそに / 周[まわ]りの批判[ひはん]をよそに / 規則[きそく]をよそに",
    examples: [
      { jp: "親[おや]の心配[しんぱい]をよそに、彼[かれ]は毎晩[まいばん]遅[おそ]くまで遊[あそ]んでいる。", en: "Disregarding his parents' worries, he plays until late every night." },
      { jp: "周[まわ]りの批判[ひはん]をよそに、彼女[かのじょ]は自分[じぶん]の道[みち]を進[すす]んだ。", en: "Ignoring the criticism around her, she pursued her own path." }
    ],
    notes:
      "Carries a negative/critical nuance—the subject ignores something they probably should heed. Similar to 〜を顧みず but focuses on disregarding external feelings/expectations rather than personal risk.",
    related: ["gn1-159", "gn1-160", "gn1-161"]
  },

  {
    id: "gn1-159",
    point: "〜をものともせず",
    reading: "...o mono tomo sezu",
    level: "N1",
    category: "Contrast",
    meaning: "without paying any mind to...; defying (hardship/opposition)",
    structure: "N + をものともせず（に）",
    explanation:
      "Indicates that someone pushes forward without being deterred by a difficulty, obstacle, or opposition. Carries an admiring tone, unlike 〜をよそに.",
    formation:
      "N + をものともせず（に）\n例: 怪我[けが]をものともせず / 猛暑[もうしょ]をものともせず / 批判[ひはん]をものともせず",
    examples: [
      { jp: "怪我[けが]をものともせず、彼[かれ]は最後[さいご]まで試合[しあい]に出[で]た。", en: "Undeterred by his injury, he played until the very end of the match." },
      { jp: "猛暑[もうしょ]をものともせず、ファンは会場[かいじょう]に詰[つ]めかけた。", en: "Braving the fierce heat, fans packed into the venue." }
    ],
    notes:
      "Conveys admiration—overcoming hardship bravely. Differs from 〜をよそに (ignoring external concerns) and 〜を顧みず (not looking back at consequences). The ものとも is a fixed emphatic expression.",
    related: ["gn1-158", "gn1-160", "gn1-161"]
  },

  {
    id: "gn1-160",
    point: "〜を顧みず",
    reading: "...o kaerimizu",
    level: "N1",
    category: "Contrast",
    meaning: "without regard for...; disregarding (risk/consequences)",
    structure: "N + を顧[かえり]みず（に）",
    explanation:
      "Indicates that someone acts without considering or paying attention to something—often risks, consequences, or personal safety. Can be admiring or neutral; 顧みる means 'to look back / consider.'",
    formation:
      "N + を顧[かえり]みず（に）\n例: 危険[きけん]を顧[かえり]みず / 身[み]の安全[あんぜん]を顧[かえり]みず / 後果[こうか]を顧[かえり]みず",
    examples: [
      { jp: "自分[じぶん]の危険[きけん]を顧[かえり]みず、彼[かれ]は川[かわ]に飛[と]び込[こ]んだ。", en: "Without regard for his own danger, he jumped into the river." },
      { jp: "身[み]の安全[あんぜん]を顧[かえり]みず、医師[いし]は患者[かんじゃ]を救[すく]った。", en: "Disregarding their own safety, the doctor saved the patient." }
    ],
    notes:
      "Often used for selfless or heroic acts. 顧みる = 'to look back / consider.' Differs from 〜をものともせず (defying hardship) in focusing on ignoring consequences rather than obstacles.",
    related: ["gn1-158", "gn1-159", "gn1-161"]
  },

  {
    id: "gn1-161",
    point: "〜を不惜（いとわず）",
    reading: "...o itowazu",
    level: "N1",
    category: "Contrast",
    meaning: "without hesitating to...; not begrudging...; ungrudgingly",
    structure: "N + を惜[お]しまず / N + をいとわず（不惜）",
    explanation:
      "Indicates that one does not hesitate or begrudge the noun—often effort, time, or hardship—willingly undertaking it. The kanji form 不惜 is a literary rendering; in modern N1 usage the kana forms いとわず and 惜しまず are common.",
    formation:
      "N + を惜[お]しまず / N + をいとわず\n例: 努力[どりょく]を惜しまず / 苦労[くろう]をいとわず / 時間[じかん]を惜しまず",
    examples: [
      { jp: "苦労[くろう]をいとわず、彼[かれ]は仕事[しごと]に打[う]ち込[こ]んだ。", en: "Without hesitating at hardship, he threw himself into his work." },
      { jp: "努力[どりょく]を惜[お]しまず、彼女[かのじょ]は研究[けんきゅう]を続[つづ]けた。", en: "Sparing no effort, she continued her research." }
    ],
    notes:
      "〜を惜しまず (not sparing) and 〜をいとわず (not hesitating) are similar but subtly different; the literary kanji 不惜 covers both senses. Common in formal writing and biographical praise.",
    related: ["gn1-158", "gn1-159", "gn1-160"]
  },

  {
    id: "gn1-162",
    point: "〜どころか",
    reading: "...dokoro ka",
    level: "N1",
    category: "Contrast",
    meaning: "far from...; rather than...; on the contrary...",
    structure: "N / V（辞書形・た形）/ イ-adj / Na-adj + どころか",
    explanation:
      "Indicates that the actual situation is not merely the negation of what was expected, but the opposite extreme. Strongly emphasizes contrast—what follows is usually surprising or contrary.",
    formation:
      "N + どころか / V-辞書形・た + どころか / イ-adj + どころか / Na-adj + な + どころか\n例: 楽[らく]などころか / 行[い]ったどころか / 簡単[かんたん]などころか",
    examples: [
      { jp: "彼[かれ]は謝[あやま]るどころか、逆[ぎゃく]に文句[もんく]を言[い]ってきた。", en: "Far from apologizing, he actually complained instead." },
      { jp: "この仕事[しごと]は楽[らく]などころか、想像[そうぞう]以上[いじょう]に大変[たいへん]だ。", en: "This job is far from easy—it is tougher than imagined." }
    ],
    notes:
      "Stronger than simple negation—it asserts the opposite. Often used when expectations are completely betrayed. Common in both speech and writing; pairs with 〜ばかりか for layered contrast.",
    related: ["gn1-177"]
  },

  // ───────────────────────────────────────────────────────────
  // PARTICLES — 2 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-163",
    point: "〜とか",
    reading: "...toka",
    level: "N1",
    category: "Particles",
    meaning: "things like...; for example...; such as...",
    structure: "N / V（辞書形・た形）/ イ-adj + とか",
    explanation:
      "An informal particle used to give examples non-exhaustively, similar to 〜や but with a vaguer, more conversational tone. Can follow nouns, verbs, or adjectives and implies an unspoken continuation.",
    formation:
      "N + とか / V-辞書形・た + とか / イ-adj + とか\n例: 寿司[すし]とか / 行[い]くとか / 忙[いそが]しいとか",
    examples: [
      { jp: "休[やす]みの日[ひ]は、本[ほん]を読[よ]んだりとか散歩[さんぽ]したりとかする。", en: "On my days off I do things like reading books and taking walks." },
      { jp: "甘[あま]いものとか辛[から]いものとか、色々[いろいろ]好[す]きだ。", en: "I like all sorts of things—sweet ones, spicy ones, and so on." }
    ],
    notes:
      "Conversational and non-exhaustive. Often combined with 〜たり. Reviewed at N1 for its flexible use across parts of speech. Differs from 〜や in being more colloquial and able to follow verbs/adjectives.",
    related: ["gn1-164"]
  },

  {
    id: "gn1-164",
    point: "〜とか〜とか",
    reading: "...toka...toka",
    level: "N1",
    category: "Particles",
    meaning: "things like A and B; for instance A, B, and so on",
    structure: "N1 + とか、N2 + とか",
    explanation:
      "Lists multiple examples non-exhaustively in a casual register. Equivalent to 〜や〜や but more conversational and flexible—it can attach to verbs and adjectives as well as nouns.",
    formation:
      "N1 + とか、N2 + とか\n例: 寿司[すし]とかラーメンとか / 行[い]くとか行[い]かないとか / 赤[あか]とか青[あお]とか",
    examples: [
      { jp: "寿司[すし]とかラーメンとか、日本[にほん]の料理[りょうり]は美味[おい]しい。", en: "Sushi, ramen, and such—Japanese food is delicious." },
      { jp: "行[い]くとか行[い]かないとか、皆[みな]の意見[いけん]が分[わ]かれている。", en: "Going or not going—everyone's opinions are divided." }
    ],
    notes:
      "More flexible than 〜や〜や (which only takes nouns). Commonly used in speech. The final とか can be omitted for brevity. The pattern also accepts verb phrases, making it broader than 〜や.",
    related: ["gn1-163"]
  },

  // ───────────────────────────────────────────────────────────
  // MODIFIERS — 25 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-165",
    point: "〜といい〜といい",
    reading: "...to ii...to ii",
    level: "N1",
    category: "Modifiers",
    meaning: "both A and B are (equally...); whether A or B, both...",
    structure: "N1 + といい、N2 + といい",
    explanation:
      "Presents two nouns as examples that share a common evaluation (good or bad). The subsequent clause expresses a judgment that applies to both. Often followed by も.",
    formation:
      "N1 + といい、N2 + といい\n例: デザインといい機能[きのう]といい / 声[こえ]といい姿[すがた]といい / 味[あじ]といい値段[ねだん]といい",
    examples: [
      { jp: "デザインといい機能[きのう]といい、この製品[せいひん]は完璧[かんぺき]だ。", en: "Both in design and in function, this product is perfect." },
      { jp: "声[こえ]といい姿[すがた]といい、彼女[かのじょ]は天才的[てんさいてき]だ。", en: "Both her voice and her appearance—she is a genius." }
    ],
    notes:
      "Both items are evaluated together, usually positively or negatively. Differs from 〜なり〜なり (which offers a choice)—here both are cited as examples supporting one judgment.",
    related: ["gn1-166", "gn1-167"]
  },

  {
    id: "gn1-166",
    point: "〜なり〜なり",
    reading: "...nari...nari",
    level: "N1",
    category: "Modifiers",
    meaning: "either A or B; for example A or B",
    structure: "N1 / V（辞書形）+ なり、N2 / V（辞書形）+ なり",
    explanation:
      "Lists two (or more) options from which one may choose, or gives representative examples. Similar to 〜たり〜たり but more concise and slightly formal; the main clause suggests selecting one.",
    formation:
      "N1 + なり、N2 + なり / V1-辞書形 + なり、V2-辞書形 + なり\n例: 先生[せんせい]なり友達[ともだち]なり / 聞[き]くなり相談[そうだん]するなり / 飲[の]むなり食[た]べるなり",
    examples: [
      { jp: "分[わ]からないことがあれば、先生[せんせい]に聞[き]くなり友達[ともだち]に相談[そうだん]するなりする。", en: "If there is something you don't understand, do something like ask the teacher or talk it over with a friend." },
      { jp: "飲[の]むなり食[た]べるなり、好[す]きにしていいよ。", en: "Drink or eat—do whatever you like." }
    ],
    notes:
      "Suggests choosing one of the listed options. Often followed by する / しなさい / 〜てください. Differs from 〜といい〜といい (no choice, both evaluated) and 〜だの〜だの (listing without choice).",
    related: ["gn1-165", "gn1-167"]
  },

  {
    id: "gn1-167",
    point: "〜だの〜だの",
    reading: "...dano...dano",
    level: "N1",
    category: "Modifiers",
    meaning: "things like A and B; A and B and so on (often with mild complaint)",
    structure: "N1 / イ-adj / V（た形）+ だの、N2 / イ-adj / V（た形）+ だの",
    explanation:
      "Lists items non-exhaustively, often with a nuance of enumerating complaints or excess. More colloquial than 〜や〜や and can carry a slightly exasperated or dismissive tone.",
    formation:
      "N1 + だの、N2 + だの / イ-adj + だの / V-た + だの\n例: 果物[くだもの]だのお菓子[かし]だの / 痛[いた]いだの疲[つか]れただの / 雨[あめ]だの風[かぜ]だの",
    examples: [
      { jp: "痛[いた]いだの疲[つか]れただの、言[い]い訳[わけ]ばかりしている。", en: "It hurts, I'm tired, and so on—he makes nothing but excuses." },
      { jp: "果物[くだもの]だのお菓子[かし]だの、買い[かい]すぎてしまった。", en: "Fruit, snacks, and so on—I ended up buying too much." }
    ],
    notes:
      "Often implies the list is excessive or the speaker is mildly annoyed. More emotive than 〜とか〜とか. Can attach to adjectives and verbs in past tense as well as nouns.",
    related: ["gn1-168", "gn1-163"]
  },

  {
    id: "gn1-168",
    point: "〜だの",
    reading: "...dano",
    level: "N1",
    category: "Modifiers",
    meaning: "things like...; for instance... (non-exhaustive listing)",
    structure: "N / V / イ-adj + だの",
    explanation:
      "A single-instance listing particle giving one representative example among others. Similar to 〜とか but with a slightly older, more written feel; often implies an unspoken continuation.",
    formation:
      "N + だの / V + だの / イ-adj + だの\n例: 忙[いそが]しいだの / 雨[あめ]だの / お金[かね]がないだの",
    examples: [
      { jp: "忙[いそが]しいだのお金[かね]がないだの、彼[かれ]はいつも言[い]い訳[わけ]をする。", en: "He is always making excuses—I'm busy, I have no money, and so on." },
      { jp: "雨[あめ]だの風[かぜ]だの、天気[てんき]が悪[わる]い日[ひ]が続[つづ]いた。", en: "Rain, wind, and such—days of bad weather continued." }
    ],
    notes:
      "Can stand alone to give one example implying more follow. The doubled 〜だの〜だの is more common, but the single form appears in lists ending with 〜など or in enumerative strings.",
    related: ["gn1-167"]
  },

  {
    id: "gn1-169",
    point: "〜たる",
    reading: "...taru",
    level: "N1",
    category: "Modifiers",
    meaning: "being (a role/status) as befits; as a...",
    structure: "N + たる",
    explanation:
      "Indicates that someone, holding a particular position or status, should behave in a manner worthy of it. Formal and somewhat literary; implies the duty or dignity attached to the role.",
    formation:
      "N + たる（+ 者[もの]）\n例: 教師[きょうし]たる / リーダーたる / 医者[いしゃ]たる",
    examples: [
      { jp: "教師[きょうし]たる者[もの]は、学生[がくせい]の手本[てほん]でなければならない。", en: "One who is a teacher must be a model for students." },
      { jp: "リーダーたる者[もの]は、決断力[けつだんりょく]が求[もと]められる。", en: "One who is a leader is required to have decisiveness." }
    ],
    notes:
      "Almost always followed by 者[もの] (e.g., 教師たる者). Implies that the role carries responsibility. Differs from 〜である (simple 'is') by emphasizing the dignity/expectation of the role.",
    related: ["gn1-170", "gn1-171", "gn1-174"]
  },

  {
    id: "gn1-170",
    point: "〜なる",
    reading: "...naru",
    level: "N1",
    category: "Modifiers",
    meaning: "which is...; being...; that which is...",
    structure: "N + なる + N",
    explanation:
      "A literary attributive linker equivalent to 〜である / 〜という. Used to modify a noun with a phrase that describes its nature or identity. Common in formal writing and classical-style prose.",
    formation:
      "N + なる + N\n例: 私[わたし]の友人[ゆうじん]なる彼[かれ] / これなる由緒[ゆいしょ] / 神聖[しんせい]なるもの",
    examples: [
      { jp: "私[わたし]の友人[ゆうじん]なる彼[かれ]は、著名[ちょめい]な科学者[かがくしゃ]だ。", en: "My friend, who is a renowned scientist, is someone I know." },
      { jp: "これなる由緒[ゆいしょ]ある建物[たてもの]は、江戸[えど]時代[じだい]のものだ。", en: "This historic building dates from the Edo period." }
    ],
    notes:
      "Classical/literary equivalent of 〜である. Used in formal contexts like history, literature, and official documents. The copula なり (attributive form なる) is the origin; the predicated form is 〜にあり (gn1-173).",
    related: ["gn1-169", "gn1-171", "gn1-173"]
  },

  {
    id: "gn1-171",
    point: "〜なるもの",
    reading: "...naru mono",
    level: "N1",
    category: "Modifiers",
    meaning: "a thing that is...; one which is... (emphatic)",
    structure: "N + なる + もの",
    explanation:
      "Combines 〜なる with もの to emphasize the essence or nature of something. Used to define or highlight what something truly is, often with a philosophical or definitive tone.",
    formation:
      "N + なる + もの\n例: 時[とき]なるもの / 真実[しんじつ]なるもの / 愛なるもの",
    examples: [
      { jp: "時[とき]なるものは、人[ひと]を変[か]える力[ちから]を持[も]っている。", en: "Time—that which is time—has the power to change people." },
      { jp: "真実[しんじつ]なるものは、いつか必[かなら]ず明[あき]らかになる。", en: "That which is the truth will surely come to light someday." }
    ],
    notes:
      "なる + もの highlights the inherent nature. Common in literary or reflective writing. Differs from 〜たるもの (which focuses on a person in a role)—here it can refer to abstract concepts.",
    related: ["gn1-169", "gn1-170"]
  },

  {
    id: "gn1-172",
    point: "〜にある",
    reading: "...ni aru",
    level: "N1",
    category: "Modifiers",
    meaning: "lies in...; consists in...; is found in...",
    structure: "N + に（は）+ ある",
    explanation:
      "Indicates that the essence, cause, or true nature of something resides in the noun that follows. Used to identify where the core of a matter lies. Formal and analytical.",
    formation:
      "N + に（は）ある\n例: 問題[もんだい]の根本[こんぽん]にある / 幸福[こうふく]の秘訣[ひけつ]にある / 目的[もくてき]にある",
    examples: [
      { jp: "問題[もんだい]の根本[こんぽん]は、彼[かれ]の怠慢[たいまん]にある。", en: "The root of the problem lies in his negligence." },
      { jp: "幸福[こうふく]の秘訣[ひけつ]は、小[ちい]さな喜[よろこ]びに感謝[かんしゃ]する心[こころ]にある。", en: "The secret of happiness lies in a heart that is grateful for small joys." }
    ],
    notes:
      "Formal phrasing meaning 'consists in / lies in.' Often pairs with abstract nouns like 本質[ほんしつ], 原因[げんいん], 目的[もくてき]. The predicated form is 〜にあり (see gn1-173).",
    related: ["gn1-173"]
  },

  {
    id: "gn1-173",
    point: "〜にあり",
    reading: "...ni ari",
    level: "N1",
    category: "Modifiers",
    meaning: "lies in...; resides in... (predicated form)",
    structure: "N + にあり",
    explanation:
      "The predicated form of 〜にある, used at the end of a clause to state where the essence or cause lies. Formal and somewhat literary, common in essays and academic writing.",
    formation:
      "N + にあり\n例: 真[しん]の責任[せきにん]は指導[しどう]者[しゃ]にあり / 解決[かいけつ]の鍵[かぎ]は対話[たいわ]にあり / 目的[もくてき]はそこにあり",
    examples: [
      { jp: "真[しん]の責任[せきにん]は、指導[しどう]者[しゃ]にあり。", en: "The true responsibility lies with the leaders." },
      { jp: "解決[かいけつ]の鍵[かぎ]は、対話[たいわ]にあり。", en: "The key to a solution lies in dialogue." }
    ],
    notes:
      "Predicated/literary form of 〜にある. Appears in formal statements and maxims. Often written with は before: 〜は〜にあり. The attributive form is 〜なる (gn1-170) when modifying a noun.",
    related: ["gn1-170", "gn1-172"]
  },

  {
    id: "gn1-174",
    point: "〜たるや",
    reading: "...taru ya",
    level: "N1",
    category: "Modifiers",
    meaning: "as for the... (it is astonishingly...); when it comes to...",
    structure: "N + たるや",
    explanation:
      "A dramatic introducer meaning 'as for N, [astonishing statement].' Sets up a noun for an emphatic or surprising description that follows. Literary and emphatic; the や is an old conjunctive particle.",
    formation:
      "N + たるや\n例: 彼[かれ]の実力[じつりょく]たるや / その景色[けしき]たるや / 状況[じょうきょう]たるや",
    examples: [
      { jp: "彼[かれ]の実力[じつりょく]たるや、プロをも凌[しの]ぐほどだ。", en: "As for his ability, it is enough to surpass even professionals." },
      { jp: "その景色[けしき]たるや、言葉[ことば]では表現[ひょうげん]できないほど美[うつく]しかった。", en: "As for that scenery, it was too beautiful to express in words." }
    ],
    notes:
      "Used to set up a striking or impressive statement about the noun. The や is an old conjunctive particle. Common in literary and journalistic writing for dramatic emphasis.",
    related: ["gn1-169", "gn1-170"]
  },

  {
    id: "gn1-175",
    point: "〜はもとより",
    reading: "...wa moto yori",
    level: "N1",
    category: "Modifiers",
    meaning: "not to mention...; ...as well as; let alone...",
    structure: "N + はもとより",
    explanation:
      "Indicates that the noun is naturally included, and additional items follow in the main clause. Means 'X is of course included, and also Y.' Formal equivalent of 〜はもちろん.",
    formation:
      "N + はもとより\n例: 英語[えいご]はもとより / 都市[とし]はもとより / 親[おや]はもとより",
    examples: [
      { jp: "彼[かれ]は英語[えいご]はもとより、フランス語[ご]も堪能[たんのう]だ。", en: "Not only English, he is also fluent in French." },
      { jp: "都市[とし]はもとより、地方[ちほう]でもインターネットが普及[ふきゅう]した。", en: "Not only in the cities, the Internet spread even in rural areas." }
    ],
    notes:
      "Equivalent to 〜はもちろん / 〜は言うまでもなく. Formal, common in writing. The pattern is additive—X is obvious, and Y is added. Differs from 〜ばかりか in tone (more about natural inclusion).",
    related: ["gn1-176", "gn1-179", "gn1-181"]
  },

  {
    id: "gn1-176",
    point: "〜は言うに及ばず",
    reading: "...wa iu ni oyobazu",
    level: "N1",
    category: "Modifiers",
    meaning: "not to mention...; ...goes without saying, and...",
    structure: "N + は言[い]うに及[およ]ばず",
    explanation:
      "Indicates that the noun is so obviously the case that mentioning it is unnecessary, and something even more notable follows. Formal and emphatic; equivalent to 〜はもちろん.",
    formation:
      "N + は言[い]うに及[およ]ばず\n例: 歌[うた]は言[い]うに及[およ]ばず / 自然[しぜん]は言[い]うに及[およ]ばず / 親[おや]は言[い]うに及[およ]ばず",
    examples: [
      { jp: "彼[かれ]は歌[うた]は言[い]うに及[およ]ばず、ダンスも抜群[ばつぐん]だ。", en: "Not to mention singing, his dancing is also outstanding." },
      { jp: "自然[しぜん]は言[い]うに及[およ]ばず、文化[ぶんか]も豊[ゆた]かな国[くに]だ。", en: "Not to mention nature, it is a country rich in culture as well." }
    ],
    notes:
      "Very formal; common in written evaluations. The literal meaning is 'mentioning it does not reach as far as necessary.' Equivalent to 〜はもとより and 〜は言うまでもない.",
    related: ["gn1-175", "gn1-181"]
  },

  {
    id: "gn1-177",
    point: "〜ばかりか",
    reading: "...bakari ka",
    level: "N1",
    category: "Modifiers",
    meaning: "not only... but also...",
    structure: "N / V（普通形）/ イ-adj / Na-adj + ばかりか",
    explanation:
      "Indicates that not only the stated item is true, but something additional (often greater or surprising) also holds. Stronger and more written than 〜だけでなく.",
    formation:
      "N + ばかりか / V-普通形 + ばかりか / イ-adj + ばかりか / Na-adj + な + ばかりか\n例: 英語[えいご]ばかりか / 面白[おもしろ]いばかりか / 学生[がくせい]であるばかりか",
    examples: [
      { jp: "彼[かれ]は英語[えいご]ばかりか、中国語[ちゅうごくご]も話[はな]せる。", en: "Not only English, he can also speak Chinese." },
      { jp: "その映画[えいが]は面白[おもしろ]いばかりか、教育的[きょういくてき]な価値[かち]もある。", en: "That movie is not only interesting, it also has educational value." }
    ],
    notes:
      "Equivalent to 〜だけでなく but more formal/written. The second clause often states something that exceeds expectations—can be positive or negative. Pairs with 〜どころか for layered contrast.",
    related: ["gn1-162", "gn1-178", "gn1-175"]
  },

  {
    id: "gn1-178",
    point: "〜ばかりでなく",
    reading: "...bakari de naku",
    level: "N1",
    category: "Modifiers",
    meaning: "not only... but also...",
    structure: "N / V（普通形）/ イ-adj / Na-adj + ばかりでなく",
    explanation:
      "A less formal variant of 〜ばかりか, indicating that the stated item is not the only one—something additional also applies. Common in both speech and writing.",
    formation:
      "N + ばかりでなく / V-普通形 + ばかりでなく / イ-adj + ばかりでなく / Na-adj + な + ばかりでなく\n例: 歌手[かしゅ]であるばかりでなく / 安[やす]いばかりでなく / 忙[いそが]しいばかりでなく",
    examples: [
      { jp: "彼[かれ]は歌手[かしゅ]であるばかりでなく、俳優[はいゆう]でもある。", en: "He is not only a singer but also an actor." },
      { jp: "この店[みせ]は安[やす]いばかりでなく、量[りょう]も多[おお]い。", en: "This shop is not only cheap, the portions are also large." }
    ],
    notes:
      "Slightly less formal than 〜ばかりか. The second clause typically adds something parallel or additional. Interchangeable with 〜だけでなく in most everyday contexts.",
    related: ["gn1-177"]
  },

  {
    id: "gn1-179",
    point: "〜はもちろん",
    reading: "...wa mochiron",
    level: "N1",
    category: "Modifiers",
    meaning: "of course...; needless to say...; not only... but also...",
    structure: "N + はもちろん（のこと）",
    explanation:
      "Indicates that the noun is naturally/obviously included, and additional items follow. The standard, moderately formal equivalent of 〜はもとより. Common in both speech and writing.",
    formation:
      "N + はもちろん\n例: スポーツはもちろん / 日本語[にほんご]はもちろん / 社長[しゃちょう]はもちろん",
    examples: [
      { jp: "彼[かれ]はスポーツはもちろん、勉強[べんきょう]もよくできる。", en: "He is good not only at sports but also at studies." },
      { jp: "日本語[にほんご]はもちろん、英語[えいご]も流暢[りゅうちょう]に話[はな]せる。", en: "Not only Japanese, he can also speak English fluently." }
    ],
    notes:
      "Equivalent to 〜はもとより but more common in everyday use. The noun is the 'obvious' case, and the main clause adds the 'surprising additional' case. See also the expanded form 〜はもちろんのこと (gn1-180).",
    related: ["gn1-175", "gn1-180", "gn1-181"]
  },

  {
    id: "gn1-180",
    point: "〜はもちろんのこと",
    reading: "...wa mochiron no koto",
    level: "N1",
    category: "Modifiers",
    meaning: "of course; needless to say (formal expansion)",
    structure: "N + はもちろんのこと",
    explanation:
      "A slightly more formal, expanded version of 〜はもちろん, used in polite writing or speech. Functions identically: the noun is obviously included, with more following.",
    formation:
      "N + はもちろんのこと\n例: 社長[しゃちょう]はもちろんのこと / 都心[としん]はもちろんのこと / 親[おや]はもちろんのこと",
    examples: [
      { jp: "社長[しゃちょう]はもちろんのこと、社員[しゃいん]全員[ぜんいん]が参加[さんか]した。", en: "Not only the president, all employees participated." },
      { jp: "都心[としん]はもちろんのこと、郊外[こうがい]でも混雑[こんざつ]が続[つづ]いた。", en: "Not only the city center, congestion continued even in the suburbs." }
    ],
    notes:
      "A formal expansion of 〜はもちろん. The のこと adds emphasis and formality. Common in news and business writing. Functionally equivalent to 〜はもとより and 〜は言うに及ばず.",
    related: ["gn1-179"]
  },

  {
    id: "gn1-181",
    point: "〜は言うまでもない",
    reading: "...wa iu made mo nai",
    level: "N1",
    category: "Modifiers",
    meaning: "it goes without saying that...; needless to say...",
    structure: "N / Sentence + は言[い]うまでもない",
    explanation:
      "States that something is so obvious it needs no mention. Can conclude a sentence or introduce an obvious point before adding more. Formal and emphatic.",
    formation:
      "N + は言[い]うまでもない / Sentence + のは言[い]うまでもない\n例: 健康[けんこう]の重要性[じゅうようせい]は言[い]うまでもない / 規則[きそく]を守[まも]るのは言[い]うまでもない",
    examples: [
      { jp: "健康[けんこう]の重要性[じゅうようせい]は、言[い]うまでもない。", en: "The importance of health goes without saying." },
      { jp: "規則[きそく]を守[まも]るのは、言[い]うまでもないことだ。", en: "Observing the rules is a matter that goes without saying." }
    ],
    notes:
      "Conclusive form meaning 'it goes without saying.' Can be used as a predicate (〜は言うまでもない) or as a modifier (〜は言うまでもないことだ). Equivalent to 〜は言うに及ばず and 〜はもとより.",
    related: ["gn1-176", "gn1-175", "gn1-183"]
  },

  {
    id: "gn1-182",
    point: "〜に限って",
    reading: "...ni kagitte",
    level: "N1",
    category: "Modifiers",
    meaning: "precisely when/as for...; especially in the case of...",
    structure: "N + に限[かぎ]って",
    explanation:
      "Highlights a specific case, often one that is an exception or contrary to expectation. Can mean 'especially when it comes to N' or 'precisely in N's case (something unexpected happened).'",
    formation:
      "N + に限[かぎ]って\n例: 忙[いそが]しい時に限[かぎ]って / 彼[かれ]に限[かぎ]って / 夏[なつ]に限[かぎ]って",
    examples: [
      { jp: "忙[いそが]しい時に限[かぎ]って、客[きゃく]が来[く]る。", en: "Precisely when I'm busy, customers come." },
      { jp: "彼[かれ]に限[かぎ]って、そんなミスはしないはずだ。", en: "He, of all people, would not make such a mistake." }
    ],
    notes:
      "Two main uses: (1) 'especially/precisely for N' implying N is an exception; (2) 'of all times, precisely when N' implying bad timing. Often carries a sense of irony or special trust.",
    related: ["gn1-187"]
  },

  {
    id: "gn1-183",
    point: "〜までもない",
    reading: "...made mo nai",
    level: "N1",
    category: "Modifiers",
    meaning: "no need to...; not necessary to...",
    structure: "V（辞書形）+ までもない",
    explanation:
      "Indicates that an action is unnecessary—often because it is obvious, already known, or excessive. Formal equivalent of 〜する必要[ひつよう]はない. The phrase 言[い]うまでもない is a fixed expression.",
    formation:
      "V-辞書形 + までもない\n例: 言[い]うまでもない / 行[い]くまでもない / 説明[せつめい]するまでもない",
    examples: [
      { jp: "言[い]うまでもないことだが、安全[あんぜん]が第一[だいいち]だ。", en: "It goes without saying, but safety comes first." },
      { jp: "わざわざ行[い]くまでもない、電話[でんわ]で済[す]ませよう。", en: "There is no need to go out of my way; I'll settle it by phone." }
    ],
    notes:
      "Means 'there is no need to do.' Common in formal speech and writing. The phrase 言うまでもない is a fixed expression meaning 'it goes without saying,' related to gn1-181.",
    related: ["gn1-181"]
  },

  {
    id: "gn1-184",
    point: "〜に足る / 〜に足りる",
    reading: "...ni taru / ...ni tariru",
    level: "N1",
    category: "Modifiers",
    meaning: "worth...; sufficient to...; deserving of...",
    structure: "V（辞書形）/ N + に足[た]る / に足[た]りる",
    explanation:
      "Indicates that something is worthy or sufficient for a certain evaluation or action. Often used with words like 信頼[しんらい], 注目[ちゅうもく], 賞賛[しょうさん]. Formal.",
    formation:
      "V-辞書形 + に足[た]る / N + に足[た]る\n例: 賞賛[しょうさん]に足[た]る / 注目[ちゅうもく]に足[た]りる / 信頼[しんらい]に足[た]る",
    examples: [
      { jp: "彼[かれ]の努力[どりょく]は、賞賛[しょうさん]に足[た]る。", en: "His effort is worthy of praise." },
      { jp: "この問題[もんだい]は注目[ちゅうもく]に足[た]りる重要性[じゅうようせい]を持[も]つ。", en: "This issue holds importance worthy of attention." }
    ],
    notes:
      "〜に足る is more literary; 〜に足りる is slightly more common in speech. Common collocations: 信頼に足る, 注目に足る, 賞賛に足る, 検討[けんとう]に足る. 足る is the literary form of 足りる.",
    related: ["gn1-185"]
  },

  {
    id: "gn1-185",
    point: "〜に忍びない",
    reading: "...ni shinobinai",
    level: "N1",
    category: "Modifiers",
    meaning: "cannot bear to...; feel too sorry/painful to...",
    structure: "V（ます形）+ に忍[しの]びない",
    explanation:
      "Indicates that the speaker cannot bring themselves to do something because it would be too painful, cruel, or pitiable. Empathetic and formal; often used with 見[み]る, 聞[き]く, 別[わか]れる.",
    formation:
      "V-ます形 + に忍[しの]びない\n例: 見[み]るに忍[しの]びない / 聞[き]くに忍[しの]びない / 放[はな]つに忍[しの]びない",
    examples: [
      { jp: "悲[かな]惨[さん]な現場[げんば]は、見[み]るに忍[しの]びない。", en: "The tragic scene is unbearable to look at." },
      { jp: "親[おや]の涙[なみだ]を見[み]るのは、忍[しの]びない。", en: "It is unbearable to see one's parents in tears." }
    ],
    notes:
      "Empathetic expression of 'cannot bear to.' Common collocations: 見るに忍びない, 聞くに忍びない. Differs from 〜にたえない (cannot endure—often sensory overload); 〜に忍びない focuses on compassion.",
    related: ["gn1-184"]
  },

  {
    id: "gn1-186",
    point: "〜の至り",
    reading: "...no itari",
    level: "N1",
    category: "Modifiers",
    meaning: "the height of...; the extreme of... (very...)",
    structure: "N + の至[いた]り",
    explanation:
      "Indicates that something has reached an extreme degree, usually used for strong emotions or states. Formal and somewhat dramatic; common collocations include 若気[わかげ]の至り, 恐縮[きょうしゅく]の至り, 光栄[こうえい]の至り.",
    formation:
      "N + の至[いた]り\n例: 若気[わかげ]の至[いた]り / 光栄[こうえい]の至[いた]り / 恐縮[きょうしゅく]の至[いた]り",
    examples: [
      { jp: "若気[わかげ]の至[いた]りで、取[と]り返[かえ]しのつかないことをした。", en: "In the extremity of youthful folly, I did something I cannot undo." },
      { jp: "ご褒美[ほうび]をいただき、光栄[こうえい]の至[いた]りです。", en: "Receiving this reward is the height of honor for me." }
    ],
    notes:
      "Fixed expression indicating an extreme state. Common phrases: 若気の至り (youthful indiscretion), 恐縮の至り (deeply honored/humbled), 光栄の至り (a great honor). Often used in formal acknowledgments.",
    related: []
  },

  {
    id: "gn1-187",
    point: "〜に照らして",
    reading: "...ni terashite",
    level: "N1",
    category: "Modifiers",
    meaning: "in light of...; considering...; judged against...",
    structure: "N + に照[て]らして",
    explanation:
      "Indicates that something is considered or evaluated in light of a standard, law, precedent, or fact. Formal; common in legal, academic, and analytical writing.",
    formation:
      "N + に照[て]らして（／照[て]らせば）\n例: 法律[ほうりつ]に照[て]らして / 歴史[れきし]に照[て]らして / 事実[じじつ]に照[て]らして",
    examples: [
      { jp: "法律[ほうりつ]に照[て]らして、その行為[こうい]は違法[いほう]だ。", en: "Judged against the law, that act is illegal." },
      { jp: "歴史[れきし]に照[て]らして考[かんが]えると、今回[こんかい]の出来事[できごと]も理解[りかい]できる。", en: "Considering it in light of history, this event too can be understood." }
    ],
    notes:
      "Means 'in light of / judged against.' Common with standards, laws, precedents. Differs from 〜に基づいて (based on) in emphasizing comparison/evaluation rather than direct application.",
    related: ["gn1-188"]
  },

  {
    id: "gn1-188",
    point: "〜を踏まえて",
    reading: "...o fumae te",
    level: "N1",
    category: "Modifiers",
    meaning: "based on...; taking... into consideration; in light of...",
    structure: "N + を踏[ふ]まえて",
    explanation:
      "Indicates that an action or judgment is made taking the noun into account as a foundation. Formal; common in policy, business, and analytical contexts.",
    formation:
      "N + を踏[ふ]まえて（／踏[ふ]まえた + N）\n例: 現状[げんじょう]を踏[ふ]まえて / 過去[かこ]の失敗[しっぱい]を踏[ふ]まえて / データを踏[ふ]まえて",
    examples: [
      { jp: "現状[げんじょう]を踏[ふ]まえて、新[あたら]しい計画[けいかく]を立[た]てる。", en: "Taking the current situation into account, we will draw up a new plan." },
      { jp: "過去[かこ]の失敗[しっぱい]を踏[ふ]まえて、対策[たいさく]を練[ね]った。", en: "Basing ourselves on past failures, we worked out countermeasures." }
    ],
    notes:
      "Means 'taking into consideration / based on.' Common in formal and business Japanese. Similar to 〜に基づいて but emphasizes incorporating prior facts/context into a new decision.",
    related: ["gn1-187", "gn1-189"]
  },

  {
    id: "gn1-189",
    point: "〜をはじめ（とする）",
    reading: "...o hajime (to suru)",
    level: "N1",
    category: "Modifiers",
    meaning: "starting with...; ...and others; ...and so on",
    structure: "N + をはじめ（とする / として）",
    explanation:
      "Introduces a representative, primary item from a group, implying others follow. Used to highlight the most important example while acknowledging the existence of others.",
    formation:
      "N + をはじめ / N + をはじめとする + N\n例: 社長[しゃちょう]をはじめ / 東京[とうきょう]をはじめとする大都市[だいとし] / 先生[せんせい]をはじめとして",
    examples: [
      { jp: "社長[しゃちょう]をはじめ、社員[しゃいん]全員[ぜんいん]が式典[しきてん]に出席[しゅっせき]した。", en: "Starting with the president, all employees attended the ceremony." },
      { jp: "東京[とうきょう]をはじめとする大都市[だいとし]では、人口[じんこう]が減少[げんしょう]している。", en: "In major cities starting with Tokyo, the population is declining." }
    ],
    notes:
      "Highlights a representative example. The form 〜をはじめとする modifies a noun (XをはじめとするY = 'Y, starting with X'). 〜をはじめ alone can conclude a list introduction.",
    related: ["gn1-175"]
  },

  // ───────────────────────────────────────────────────────────
  // CONDITIONALS — 2 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-190",
    point: "〜ことなしに（は）",
    reading: "...koto nashi ni (wa)",
    level: "N1",
    category: "Conditionals",
    meaning: "without doing...; never doing... (and then...)",
    structure: "V（辞書形）+ ことなしに（は）",
    explanation:
      "Indicates that an action is not performed without doing the preceding action—i.e., the first is a necessary condition for the second. Formal and somewhat literary; equivalent to 〜しないで.",
    formation:
      "V-辞書形 + ことなしに（は）\n例: 努力[どりょく]することなしに / 失敗[しっぱい]することなしに / 経験[けいけん]することなしに",
    examples: [
      { jp: "努力[どりょく]することなしに、成功[せいこう]はあり得[え]ない。", en: "Without making an effort, success is impossible." },
      { jp: "失敗[しっぱい]することなしに、本当[ほんとう]の学習[がくしゅう]はない。", en: "Without failing, there is no real learning." }
    ],
    notes:
      "Formal equivalent of 〜しないで / 〜せずに. With は (〜ことなしには) the main clause is negative, meaning 'without X, Y cannot happen.' Similar to 〜なくしては (gn1-191).",
    related: ["gn1-191"]
  },

  {
    id: "gn1-191",
    point: "〜なくして（は）",
    reading: "...naku shite (wa)",
    level: "N1",
    category: "Conditionals",
    meaning: "without...; absent... (something cannot happen)",
    structure: "N + なくして（は）",
    explanation:
      "Indicates that without the noun (an essential condition), the main clause cannot be realized. Stronger and more abstract than 〜なしでは; common in formal and philosophical writing.",
    formation:
      "N + なくして（は）\n例: 愛なくして / 信頼[しんらい]なくして / 自由[じゆう]なくして",
    examples: [
      { jp: "愛なくして、真[しん]の幸福[こうふく]はない。", en: "Without love, there is no true happiness." },
      { jp: "信頼[しんらい]なくして、友情[ゆうじょう]は成[な]り立[た]たない。", en: "Without trust, friendship cannot exist." }
    ],
    notes:
      "Stronger and more literary than 〜なしでは. Almost always paired with a negative main clause. Used for abstract essential conditions like 愛, 信頼, 努力, 自由. Differs from 〜ことなしに in taking a noun rather than a verb.",
    related: ["gn1-190"]
  },

  // ───────────────────────────────────────────────────────────
  // TIME / SEQUENCE — 9 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-192",
    point: "〜にあって",
    reading: "...ni atte",
    level: "N1",
    category: "Time/Sequence",
    meaning: "in/under (a situation); during (a period)",
    structure: "N + にあって",
    explanation:
      "Indicates a particular situation, era, or condition in which something holds. Formal and literary; emphasizes the context. The concessive form is 〜にあっても (gn1-157).",
    formation:
      "N + にあって\n例: 現代[げんだい]にあって / 戦時[せんじ]にあって / この時代[じだい]にあって",
    examples: [
      { jp: "現代[げんだい]にあって、情報[じょうほう]は最[もっと]も重要[じゅうよう]な資源[しげん]だ。", en: "In the modern age, information is the most important resource." },
      { jp: "戦時[せんじ]にあって、人々[ひとびと]は団結[だんけつ]した。", en: "In wartime, the people united." }
    ],
    notes:
      "Formal/literary equivalent of 〜において / 〜の時[とき]. Common in essays and historical writing. The concessive 〜にあっても means 'even in/under such a situation.'",
    related: ["gn1-157"]
  },

  {
    id: "gn1-193",
    point: "〜を限りに",
    reading: "...o kagiri ni",
    level: "N1",
    category: "Time/Sequence",
    meaning: "as of...; from... on; ending with...",
    structure: "N（時間・日）+ を限[かぎ]りに",
    explanation:
      "Indicates that something ends or changes at the specified time—today is the last day, or from this point things differ. Used for endings, departures, or shifts.",
    formation:
      "N（時間・日）+ を限[かぎ]りに\n例: 今日[きょう]を限[かぎ]りに / 今月[こんげつ]を限[かぎ]りに / 今[いま]を限[かぎ]りに",
    examples: [
      { jp: "今日[きょう]を限[かぎ]りに、この店[みせ]は閉店[へいてん]する。", en: "As of today, this shop will close." },
      { jp: "今月[こんげつ]を限[かぎ]りに、喫煙[きつえん]をやめることにした。", en: "As of this month, I have decided to quit smoking." }
    ],
    notes:
      "Indicates a cutoff point—an action ends or a new state begins as of the specified time. Differs from 〜を最[さい]後に (similar but more colloquial). Often used for retirements, closures, last meetings.",
    related: ["gn1-194"]
  },

  {
    id: "gn1-194",
    point: "〜を経て",
    reading: "...o hete",
    level: "N1",
    category: "Time/Sequence",
    meaning: "after passing through...; through (a process)",
    structure: "N + を経[へ]て",
    explanation:
      "Indicates that something is reached after passing through a process, stage, or experience. Formal; common in narratives of development, negotiation, or transition.",
    formation:
      "N + を経[へ]て\n例: 多[おお]くの困難[こんなん]を経[へ]て / 交渉[こうしょう]を経[へ]て / 歳月[さいげつ]を経[へ]て",
    examples: [
      { jp: "多[おお]くの困難[こんなん]を経[へ]て、ついに成功[せいこう]を収[おさ]めた。", en: "After passing through many difficulties, they finally achieved success." },
      { jp: "両国[りょうこく]は交渉[こうしょう]を経[へ]て、合意[ごうい]に達[たっ]した。", en: "After negotiations, the two countries reached an agreement." }
    ],
    notes:
      "Means 'after going through / via.' Used for processes, experiences, stages. Common in formal and journalistic writing. Similar to 〜を通じて but emphasizes sequential process rather than continuity.",
    related: ["gn1-195", "gn1-198"]
  },

  {
    id: "gn1-195",
    point: "〜かたわら",
    reading: "...katawara",
    level: "N1",
    category: "Time/Sequence",
    meaning: "while doing...; besides doing... (two sustained parallel activities)",
    structure: "V（辞書形）/ N + の + かたわら",
    explanation:
      "Indicates that someone engages in one main activity while simultaneously pursuing another (often a side pursuit). Formal; differs from 〜ながら in that both activities are usually substantial and ongoing.",
    formation:
      "V-辞書形 + かたわら / N + の + かたわら\n例: 働[はたら]くかたわら / 家事[かじ]のかたわら / 研究[けんきゅう]するかたわら",
    examples: [
      { jp: "彼[かれ]は会社[かいしゃ]で働[はたら]くかたわら、小説[しょうせつ]も書[か]いている。", en: "While working at a company, he also writes novels." },
      { jp: "母[はは]は家事[かじ]のかたわら、地域[ちいき]の活動[かつどう]にも参加[さんか]している。", en: "While doing housework, my mother also participates in community activities." }
    ],
    notes:
      "Indicates two sustained parallel activities, often a main job and a side pursuit. Differs from 〜ながら (which is for momentary simultaneous actions). Formal/literary tone; both roles persist over time.",
    related: ["gn1-196"]
  },

  {
    id: "gn1-196",
    point: "〜がてら",
    reading: "...gatera",
    level: "N1",
    category: "Time/Sequence",
    meaning: "while doing...; on the occasion of doing... (and also)",
    structure: "V（ます形）/ N + がてら",
    explanation:
      "Indicates that one does something while doing another—often a secondary action done opportunistically during a main outing. Formal/light; common with 散歩[さんぽ], 買い物[かいもの], 出張[しゅっちょう].",
    formation:
      "V-ます形 + がてら / N + がてら\n例: 散歩[さんぽ]がてら / 買[か]い物[もの]がてら / 挨拶[あいさつ]がてら",
    examples: [
      { jp: "散歩[さんぽ]がてら、本屋[ほんや]に寄[よ]ってみた。", en: "While taking a walk, I dropped by a bookstore." },
      { jp: "買[か]い物[もの]がてら、友達[ともだち]の家[いえ]に立ち寄った。", en: "While shopping, I dropped in at a friend's house." }
    ],
    notes:
      "Means 'while doing X, also do Y.' The secondary action is opportunistic, not the main purpose. Differs from 〜かたわら (long-term parallel)—〜がてら is for single occasions and brief side actions.",
    related: ["gn1-195"]
  },

  {
    id: "gn1-197",
    point: "〜か〜ないかのうちに",
    reading: "...ka...nai ka no uchi ni",
    level: "N1",
    category: "Time/Sequence",
    meaning: "just as... was about to / had barely... when...",
    structure: "V（辞書形）+ か、V（ない形）+ ないかのうちに",
    explanation:
      "Indicates that something happens immediately after or simultaneously with the moment an action begins or has barely begun. Conveys a sense of 'no sooner had... than...'. Formal.",
    formation:
      "V-辞書形 + か、V-ない形 + ないかのうちに\n例: 着[つ]くか着[つ]かないかのうちに / 降[ふ]るか降[ふ]らないかのうちに / 始[はじ]まるか始[はじ]まらないかのうちに",
    examples: [
      { jp: "彼[かれ]は席[せき]に着[つ]くか着[つ]かないかのうちに、質問[しつもん]を始[はじ]めた。", en: "No sooner had he taken his seat than he began asking questions." },
      { jp: "雨[あめ]が降[ふ]るか降[ふ]らないかのうちに、試合[しあい]は終[お]わった。", en: "Almost before it had started to rain, the match was over." }
    ],
    notes:
      "Emphasizes immediacy—something happens right at the boundary of an action starting or not. Common in written narratives. Similar to 〜たとたん（に）but more about the borderline moment than immediate sequence.",
    related: ["gn1-198"]
  },

  {
    id: "gn1-198",
    point: "〜を通じて / 〜を通して",
    reading: "...o tsujite / ...o tooshite",
    level: "N1",
    category: "Time/Sequence",
    meaning: "throughout...; over the course of...; through (means)",
    structure: "N（期間／手段）+ を通じて / を通して",
    explanation:
      "Indicates duration throughout an entire period, or a means/method through which something is done. 〜を通じて tends to be more written/formal; 〜を通して slightly more colloquial.",
    formation:
      "N + を通じて / N + を通して\n例: 一年間[いちねんかん]を通じて / その事件[じけん]を通じて / 先輩[せんぱい]を通して",
    examples: [
      { jp: "一年間[いちねんかん]を通じて、彼[かれ]の態度[たいど]は変[か]わらなかった。", en: "Throughout the year, his attitude did not change." },
      { jp: "その事件[じけん]を通じて、多[おお]くのことを学[まな]んだ。", en: "Through that incident, I learned a great deal." }
    ],
    notes:
      "Two main uses: (1) 'throughout a period' (duration); (2) 'through a means/intermediary.' Differs from 〜にわたって in emphasizing continuity through, not just spanning. Both forms are interchangeable in most cases.",
    related: ["gn1-194", "gn1-199"]
  },

  {
    id: "gn1-199",
    point: "〜を皮切りに",
    reading: "...o kawakiri ni",
    level: "N1",
    category: "Time/Sequence",
    meaning: "starting with...; with... as the kickoff",
    structure: "N + を皮切り[かわきり]に（して）",
    explanation:
      "Indicates that something begins with the stated event, with more to follow. Formal; common in news and business contexts to mark the start of a series.",
    formation:
      "N + を皮切り[かわきり]に（して）\n例: 東京[とうきょう]を皮切り[かわきり]に / この大会[たいかい]を皮切り[かわきり]に / 挨拶[あいさつ]を皮切り[かわきり]に",
    examples: [
      { jp: "東京[とうきょう]を皮切り[かわきり]に、全国[ぜんこく]ツアーが始[はじ]まる。", en: "Starting with Tokyo, the nationwide tour begins." },
      { jp: "この大会[たいかい]を皮切り[かわきり]に、各地[かくち]で大会[たいかい]が開[ひら]かれる。", en: "Starting with this tournament, competitions will be held in various places." }
    ],
    notes:
      "Marks the first of a series. Differs from 〜をはじめ (which lists a representative of a group)—〜を皮切りに emphasizes temporal sequence and the start of more to come. Common in formal announcements.",
    related: ["gn1-198", "gn1-200"]
  },

  {
    id: "gn1-200",
    point: "〜を控えて / 〜を控えた",
    reading: "...o hikaete / ...o hikaeta",
    level: "N1",
    category: "Time/Sequence",
    meaning: "with... approaching/just around the corner; just before...",
    structure: "N + を控[ひか]えて（／控[ひか]えた + N）",
    explanation:
      "Indicates that an important event is imminent—just ahead or about to happen. Common with events like 試験[しけん], 試合[しあい], 出産[しゅっさん], 開幕[かいまく]. Can modify a noun or stand alone.",
    formation:
      "N + を控[ひか]えて / N + を控[ひか]えた + N\n例: 試験[しけん]を控[ひか]えて / 出発[しゅっぱつ]を控[ひか]えた空港[くうこう] / 開幕[かいまく]を控[ひか]えて",
    examples: [
      { jp: "試験[しけん]を控[ひか]えて、学生[がくせい]たちは必死[ひっし]に勉強[べんきょう]している。", en: "With exams approaching, students are studying desperately." },
      { jp: "出発[しゅっぱつ]を控[ひか]えた空港[くうこう]は、混雑[こんざつ]していた。", en: "The airport, with departures imminent, was crowded." }
    ],
    notes:
      "Indicates an imminent event—something is just around the corner. Common in news and daily life. The 〜を控えたN form modifies a noun directly (e.g., 試験を控えた学生). Differs from 〜に先立って (before) in focusing on imminence.",
    related: ["gn1-199"]
  }
];
