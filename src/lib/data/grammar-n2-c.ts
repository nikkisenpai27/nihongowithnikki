import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 悩[なや]んだ, 滑[すべ]る.
//
// This file covers N2-level grammar points (Shinzaizen Master 文法 style),
// chunk C, IDs gn2-101 .. gn2-150. Distinct from chunks A and B.
// Focuses on NEW points: あげく/末/たところ/つもり/はず/べき/わけ〜/にしては/
// にとって/として/について/に対する/に関する/をめぐって/をもとに/に基づいた/
// suffixes (向け/向き/用/調/中/製/風/っぽい/気味/がち/的)/honorifics/causative-passive/
// conjunctions/〜たところで/〜に応じて/〜際に/〜最中に/〜ついでに/〜たびに etc.

export const grammarN2C: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // TIME / SEQUENCE
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-101",
    point: "〜あげく",
    reading: "〜あげく",
    level: "N2",
    category: "Time/Sequence",
    meaning: "After a long process; in the end (after struggling)",
    structure: "V-た形 + あげく / Nの + あげく",
    explanation:
      "Marks the final result reached after a lengthy or troublesome process of consideration, conflict, or action. The outcome is often negative or reluctantly chosen.",
    formation:
      "V-た + あげく: 悩[なや]んだあげく\nNの + あげく: 議論[ぎろん]のあげく",
    examples: [
      { jp: "散々[さんざん]悩[なや]んだあげく、会社[かいしゃ]を辞[や]めることにした。", en: "After agonizing for a long time, I decided to quit the company." },
      { jp: "長[なが]い議論[ぎろん]のあげく、計画[けいかく]は中止[ちゅうし]された。", en: "After lengthy discussion, the plan was canceled." }
    ],
    notes:
      "Strongly collocates with words of distress or sustained effort (散々、長い、悩む、議論). Often carries a negative or resigned nuance; more colloquial than 〜末に.",
    related: ["gn2-102"]
  },

  {
    id: "gn2-102",
    point: "〜末（に）",
    reading: "〜すえ（に）",
    level: "N2",
    category: "Time/Sequence",
    meaning: "At the end of; after going through (a process)",
    structure: "Nの + 末(に) / V-た形 + 末(に)",
    explanation:
      "Indicates that, after a prolonged period of effort or deliberation, a final resolution is reached. More formal and written-style than 〜あげく, and tends to be neutral or positive.",
    formation:
      "Nの + 末に: 検討[けんとう]の末[すえ]に\nV-た + 末に: 考[かんが]えた末[すえ]に",
    examples: [
      { jp: "検討[けんとう]の末[すえ]に、新[あたら]しい方針[ほうしん]を決[き]めた。", en: "After consideration, we decided on a new policy." },
      { jp: "苦[くる]しい修行[しゅぎょう]の末[すえ]、彼[かれ]は名人[めいじん]と呼[よ]ばれるようになった。", en: "After harsh training, he came to be called a master." }
    ],
    notes:
      "Pairs naturally with words of effort or deliberation (研究、検討、苦労、議論). Common in formal writing and news; cannot be used for trivial or short actions.",
    related: ["gn2-101"]
  },

  {
    id: "gn2-103",
    point: "〜たところ",
    reading: "〜たところ",
    level: "N2",
    category: "Time/Sequence",
    meaning: "When I tried ~; just did ~ and (found/realized)",
    structure: "V-た形 + ところ",
    explanation:
      "Used when the speaker has just performed an action and then discovers or notices the result. The following clause reports a new finding or outcome, not the speaker's own intention.",
    formation:
      "V-た + ところ: 相談[そうだん]したところ\nV-た + ところ + discovered result: 調[しら]べてみたところ",
    examples: [
      { jp: "先生[せんせい]に相談[そうだん]したところ、すぐに解決[かいけつ]した。", en: "When I consulted my teacher, the matter was resolved right away." },
      { jp: "調[しら]べてみたところ、意外[いがい]な事実[じじつ]がわかった。", en: "When I looked into it, I discovered an unexpected fact." }
    ],
    notes:
      "The second clause must report something the speaker has newly learned; it cannot state the speaker's own intentional future action. Often followed by 〜がわかった / 〜ことがわかった.",
    related: ["gn2-144"]
  },

  {
    id: "gn2-147",
    point: "〜際（に）",
    reading: "〜さい（に）",
    level: "N2",
    category: "Time/Sequence",
    meaning: "On the occasion of; when doing",
    structure: "Nの + 際(に) / V辞書形 + 際(に) / V-た形 + 際(に)",
    explanation:
      "A formal expression marking a particular occasion or moment when something happens. Slightly stiffer than 〜時に and common in instructions, notices, and business contexts.",
    formation:
      "Nの + 際に: 外出[がいしゅつ]の際[さい]に\nV辞書形 + 際に: 申[もう]し込[こ]む際[さい]に",
    examples: [
      { jp: "外出[がいしゅつ]する際[さい]に、鍵[かぎ]を忘[わす]れないでください。", en: "Please do not forget your key when you go out." },
      { jp: "面接[めんせつ]の際[さい]に、礼儀[れいぎ]を忘[わす]れてはいけない。", en: "You must not forget your manners during the interview." }
    ],
    notes:
      "Often seen in written notices and formal speech. Distinct from 〜時に in that it implies a significant or special occasion rather than routine timing.",
    related: ["gn2-148", "gn2-149"]
  },

  {
    id: "gn2-148",
    point: "〜最中に",
    reading: "〜さいちゅうに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "In the middle of; right during (an action)",
    structure: "Nの + 最中に / V-ている + 最中に",
    explanation:
      "Marks the peak or middle point of an ongoing action or event, during which another (often interrupting) event occurs.",
    formation:
      "Nの + 最中に: 会議[かいぎ]の最中[さいちゅう]に\nV-ている + 最中に: 食[た]べている最中[さいちゅう]に",
    examples: [
      { jp: "会議[かいぎ]の最中[さいちゅう]に、電話[でんわ]が鳴[な]った。", en: "Right in the middle of the meeting, the phone rang." },
      { jp: "食事[しょくじ]の最中[さいちゅう]に、地震[じしん]が起[お]きた。", en: "An earthquake occurred right in the middle of the meal." }
    ],
    notes:
      "Implies an interruption or notable event during the height of an activity. Differs from 〜中, which simply means 'during'.",
    related: ["gn2-147", "gn2-125"]
  },

  {
    id: "gn2-149",
    point: "〜ついでに",
    reading: "〜ついでに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Taking the opportunity; while one is at it",
    structure: "V辞書形 + ついでに / V-た形 + ついでに / Nの + ついでに",
    explanation:
      "Expresses doing an additional, secondary action while already doing the main one. The subsidiary action is not the primary purpose but a convenient addition.",
    formation:
      "V辞書形 + ついでに: 買[か]い物[もの]に行[い]くついでに\nNの + ついでに: 散歩[さんぽ]のついでに",
    examples: [
      { jp: "買[か]い物[もの]に行[い]くついでに、郵便局[ゆうびんきょく]に寄[よ]った。", en: "While going shopping, I dropped by the post office." },
      { jp: "散歩[さんぽ]のついでに、パンを買[か]ってきた。", en: "While taking a walk, I bought some bread." }
    ],
    notes:
      "The main action and the subsidiary action should be related in location or timing. Do not use when the secondary action is the real goal.",
    related: ["gn2-147"]
  },

  {
    id: "gn2-150",
    point: "〜たびに",
    reading: "〜たびに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Every time; whenever",
    structure: "V辞書形 + たびに / Nの + たびに",
    explanation:
      "Indicates that whenever a particular event occurs, a certain consequence or reaction follows. Suggests repetition over time.",
    formation:
      "V辞書形 + たびに: 会[あ]うたびに\nNの + たびに: 出張[しゅっちょう]のたびに",
    examples: [
      { jp: "彼[かれ]は会[あ]うたびに、髪[かみ]型[がた]が変[か]わる。", en: "Every time I meet him, his hairstyle has changed." },
      { jp: "この写真[しゃしん]を見[み]るたびに、子[こ]どもの頃[ころ]を思[おも]い出[だ]す。", en: "Every time I see this photo, I remember my childhood." }
    ],
    notes:
      "Implies a repeated, predictable correlation. Differs from 〜時に in that it stresses recurrence and the inevitability of the second event.",
    related: ["gn2-103"]
  },

  // ───────────────────────────────────────────────────────────
  // ASSUMPTION
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-104",
    point: "〜つもり",
    reading: "〜つもり",
    level: "N2",
    category: "Assumption",
    meaning: "Intend to; plan to; (believe one) has done",
    structure: "V辞書形 + つもり(だ) / V-ている + つもり(だ) / V-た形 + つもり(だ)",
    explanation:
      "Expresses the speaker's intention, plan, or self-perception. With V-た it conveys the speaker's belief (sometimes mistaken) that they have done something properly.",
    formation:
      "V辞書形 + つもり: 留学[りゅうがく]するつもり\nV-た + つもり: よく説明[せつめい]したつもり",
    examples: [
      { jp: "来年[らいねん]日本[にほん]に留学[りゅうがく]するつもりだ。", en: "I intend to study abroad in Japan next year." },
      { jp: "よく説明[せつめい]したつもりだが、伝[つた]わっただろうか。", en: "I think I explained it well, but did it get through?" }
    ],
    notes:
      "Cannot be used for someone else's intention directly (use 〜ようだ / 〜と言っている instead). The V-た form may carry a self-justifying tone.",
    related: ["gn2-105", "gn2-107"]
  },

  {
    id: "gn2-105",
    point: "〜はず（だ）",
    reading: "〜はず（だ）",
    level: "N2",
    category: "Assumption",
    meaning: "Should be; expected to (based on reasoning)",
    structure: "V普通形 + はず(だ) / Naな + はず(だ) / Nの + はず(だ) / I-adj + はず(だ)",
    explanation:
      "Expresses a strong expectation grounded in objective facts or logic. The speaker reasons that something must be the case based on available information.",
    formation:
      "V辞書形 + はず: 着[つ]いているはず\nNの + はず: 母[はは]のはず\nNaな + はず: 上手[じょうず]なはず",
    examples: [
      { jp: "彼[かれ]はもう着[つ]いているはずだ。", en: "He should already have arrived." },
      { jp: "このケーキはおいしいはずだ。母[はは]が作[つく]ったから。", en: "This cake should be delicious because my mother made it." }
    ],
    notes:
      "Differs from 〜だろう (subjective guess) by requiring a logical basis. Cannot be used for the speaker's own intentional future action (use 〜つもり instead).",
    related: ["gn2-104", "gn2-106", "gn2-108"]
  },

  {
    id: "gn2-106",
    point: "〜はずがない",
    reading: "〜はずがない",
    level: "N2",
    category: "Assumption",
    meaning: "Cannot be; it is impossible that",
    structure: "V普通形 + はずがない / Naな + はずがない / Nの + はずがない",
    explanation:
      "Strongly denies a possibility based on logical reasoning. The speaker is confident that something cannot be the case.",
    formation:
      "V普通形 + はずがない: 嘘[うそ]をつくはずがない\nNaな + はずがない: 上手[じょうず]なはずがない",
    examples: [
      { jp: "彼[かれ]が嘘[うそ]をつくはずがない。", en: "He cannot possibly lie." },
      { jp: "こんな簡単[かんたん]な問題[もんだい]がわからないはずがない。", en: "It is impossible that you do not understand such a simple problem." }
    ],
    notes:
      "Stronger than 〜ないだろう. Conveys the speaker's firm denial based on reason. Colloquial variant: 〜っこない.",
    related: ["gn2-105"]
  },

  {
    id: "gn2-107",
    point: "〜べき（だ）",
    reading: "〜べき（だ）",
    level: "N2",
    category: "Assumption",
    meaning: "Should; ought to (moral/ethical judgment)",
    structure: "V辞書形 + べき(だ) / する → すべき(だ) / N + である + べき(だ)",
    explanation:
      "Expresses what the speaker judges to be proper, right, or desirable from an objective or ethical standpoint. Often used for advice, criticism, or general moral statements.",
    formation:
      "V辞書形 + べき: 勉強[べんきょう]するべき\nする → すべき: すべきだ\nV辞書形 + べきだった: 来[く]るべきだった",
    examples: [
      { jp: "学生[がくせい]はもっと勉強[べんきょう]すべきだ。", en: "Students should study more." },
      { jp: "若者[わかもの]は老人[ろうじん]を尊敬[そんけい]すべきだ。", en: "Young people should respect the elderly." }
    ],
    notes:
      "Both するべき and すべき are acceptable; すべき is slightly more formal. 〜べきだった conveys regret over what should have been done. Carries a tone of moral judgment, unlike 〜ほうがいい (mere recommendation).",
    related: ["gn2-104", "gn2-105"]
  },

  // ───────────────────────────────────────────────────────────
  // CAUSE / REASON
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-108",
    point: "〜わけだ",
    reading: "〜わけだ",
    level: "N2",
    category: "Cause/Reason",
    meaning: "No wonder; that is why; naturally (it follows that)",
    structure: "V普通形 + わけだ / Naな + わけだ / Nな + わけだ / Nである + わけだ",
    explanation:
      "Expresses a conclusion the speaker has reached or accepted based on the situation described. It restates the natural consequence of given facts.",
    formation:
      "V普通形 + わけだ: 上手[じょうず]なわけだ\nNaな + わけだ: 元気[げんき]なわけだ\nNな + わけだ: 学生[がくせい]なわけだ",
    examples: [
      { jp: "日本[にほん]に10年[じゅうねん]住[す]んでいるなら、日本語[にほんご]が上手[じょうず]なわけだ。", en: "If you have lived in Japan for ten years, no wonder your Japanese is good." },
      { jp: "道具[どうぐ]が壊[こわ]れていたのか、動[うご]かなかったわけだ。", en: "So the tool was broken? That explains why it did not move." }
    ],
    notes:
      "Differs from 〜はずだ (future-oriented expectation). 〜わけだ is past/present-oriented acceptance of a reason. Often translates to 'so that's why...'.",
    related: ["gn2-109", "gn2-110"]
  },

  // ───────────────────────────────────────────────────────────
  // CONTRAST
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-111",
    point: "〜にしては",
    reading: "〜にしては",
    level: "N2",
    category: "Contrast",
    meaning: "For ~; considering that (it is unusually)",
    structure: "V普通形 + にしては / N + にしては / Naな + にしては",
    explanation:
      "Used when the actual state is inconsistent with what one would expect given the condition. Expresses a gap between expectation and reality.",
    formation:
      "N + にしては: 初心者[しょしんしゃ]にしては\nV普通形 + にしては: 留学[りゅうがく]したにしては\nNaな + にしては: 静[しず]かなにしては",
    examples: [
      { jp: "初心者[しょしんしゃ]にしては、上手[じょうず]にスキーを滑[すべ]る。", en: "For a beginner, he skis remarkably well." },
      { jp: "あのレストランは安[やす]いにしては、おいしい。", en: "Considering how cheap it is, that restaurant is delicious." }
    ],
    notes:
      "Always implies the result is contrary to expectation. Compare with 〜割りに (similar but more colloquial) and 〜だけあって (positive consistency with expectation).",
    related: ["gn2-112"]
  },

  // ───────────────────────────────────────────────────────────
  // MODIFIERS
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-109",
    point: "〜わけではない",
    reading: "〜わけではない",
    level: "N2",
    category: "Modifiers",
    meaning: "It is not that; not necessarily (partial denial)",
    structure: "V普通形 + わけではない / Naな + わけではない / Nな + わけではない",
    explanation:
      "Used to deny part of what might be inferred, without denying it completely. Often softens a statement by clarifying what is not meant.",
    formation:
      "V普通形 + わけではない: 嫌[きら]いなわけではない\nNaな + わけではない: 上手[じょうず]なわけではない\nV-ている + わけではない: わかっているわけではない",
    examples: [
      { jp: "日本語[にほんご]が嫌[きら]いなわけではないが、勉強[べんきょう]が難[むずか]しい。", en: "It is not that I dislike Japanese, but studying it is hard." },
      { jp: "全然[ぜんぜん]わからないわけではない。", en: "It is not that I do not understand at all." }
    ],
    notes:
      "Partial negation, often followed by 〜が / 〜けれど. Distinct from simple 〜ない (full denial). Often used in explanations and corrections.",
    related: ["gn2-108", "gn2-110"]
  },

  {
    id: "gn2-110",
    point: "〜わけにはいかない",
    reading: "〜わけにはいかない",
    level: "N2",
    category: "Modifiers",
    meaning: "Cannot (for social / moral reasons); cannot afford to",
    structure: "V辞書形 + わけにはいかない / V-ない形 + わけにはいかない",
    explanation:
      "Expresses that one cannot do (or cannot avoid doing) something due to social, moral, or external obligations rather than lack of ability.",
    formation:
      "V辞書形 + わけにはいかない: 休[やす]むわけにはいかない\nV-ない + わけにはいかない: 行[い]かないわけにはいかない",
    examples: [
      { jp: "仕事[しごと]があるので、休[やす]むわけにはいかない。", en: "I have work, so I cannot afford to take a day off." },
      { jp: "約束[やくそく]したので、行[い]かないわけにはいかない。", en: "I promised, so I cannot help but go." }
    ],
    notes:
      "With the negative form (V-ない + わけにはいかない), it means 'cannot help but do' (= must do). Differs from 〜できない (objective impossibility).",
    related: ["gn2-108", "gn2-109"]
  },

  {
    id: "gn2-112",
    point: "〜にしてみれば",
    reading: "〜にしてみれば",
    level: "N2",
    category: "Modifiers",
    meaning: "From ~'s point of view; if one were in ~'s position",
    structure: "N + にしてみれば / N + にしてみたら",
    explanation:
      "Takes the perspective of a particular person, emphasizing how the situation looks or feels from their standpoint.",
    formation:
      "N + にしてみれば: 親[おや]にしてみれば\nN + にしてみたら: 学生[がくせい]にしてみたら",
    examples: [
      { jp: "親[おや]にしてみれば、子[こ]どもの健康[けんこう]が一番[いちばん]大事[だいじ]だ。", en: "From a parent's perspective, a child's health is the most important thing." },
      { jp: "学生[がくせい]にしてみれば、休[やす]みがもっと欲[ほ]しい。", en: "From a student's perspective, they would want more days off." }
    ],
    notes:
      "Similar to 〜にとって but emphasizes the subjective standpoint (putting oneself in their shoes). Often used when acknowledging a viewpoint different from one's own.",
    related: ["gn2-111", "gn2-113"]
  },

  {
    id: "gn2-116",
    point: "〜に対する",
    reading: "〜にたいする",
    level: "N2",
    category: "Modifiers",
    meaning: "Towards; directed at (modifying a noun)",
    structure: "N + に対する + N",
    explanation:
      "A noun-modifier form indicating that the following noun is directed toward, or addressed to, the preceding noun. The predicate form is 〜に対して.",
    formation:
      "N + に対する + N: 先生[せんせい]に対する質問[しつもん]\nN + に対して: 親[おや]に対して感謝[かんしゃ]する",
    examples: [
      { jp: "先生[せんせい]に対する質問[しつもん]を用意[ようい]した。", en: "I prepared questions directed at my teacher." },
      { jp: "親[おや]に対する感謝[かんしゃ]を忘[わす]れてはいけない。", en: "You must not forget your gratitude toward your parents." }
    ],
    notes:
      "The 〜に対して form acts as a predicate or adverbial, while 〜に対する modifies a following noun. Used widely in formal writing.",
    related: ["gn2-117", "gn2-115"]
  },

  {
    id: "gn2-117",
    point: "〜に関する",
    reading: "〜にかんする",
    level: "N2",
    category: "Modifiers",
    meaning: "Concerning; related to (modifying a noun)",
    structure: "N + に関する + N",
    explanation:
      "A formal noun-modifier indicating the topic or scope of the following noun. The predicate form is 〜に関して.",
    formation:
      "N + に関する + N: 環境[かんきょう]に関する問題[もんだい]\nN + に関して: 歴史[れきし]に関して",
    examples: [
      { jp: "環境[かんきょう]に関する問題[もんだい]を議論[ぎろん]した。", en: "We discussed issues concerning the environment." },
      { jp: "この本[ほん]は歴史[れきし]に関する本[ほん]だ。", en: "This is a book related to history." }
    ],
    notes:
      "More formal than 〜について. Common in academic, business, and legal writing. The 〜に関して form acts as predicate or adverbial.",
    related: ["gn2-116", "gn2-118"]
  },

  {
    id: "gn2-120",
    point: "〜に基づいた",
    reading: "〜にもとづいた",
    level: "N2",
    category: "Modifiers",
    meaning: "Based on; grounded in (modifying a noun)",
    structure: "N + に基づいた + N / N + に基づいて + V / N + に基づく + N",
    explanation:
      "Indicates that an action or thing is carried out strictly according to a rule, plan, fact, or principle. Formal and written-style.",
    formation:
      "N + に基づいて + V: 法律[ほうりつ]に基[もとづ]いて\nN + に基づく + N: 計画[けいかく]に基[もとづ]く行動[こうどう]\nN + に基づいた + N: 事実[じじつ]に基[もとづ]いた報告[ほうこく]",
    examples: [
      { jp: "法律[ほうりつ]に基[もとづ]いて処罰[しょばつ]される。", en: "He will be punished in accordance with the law." },
      { jp: "計画[けいかく]に基[もとづ]いた行動[こうどう]が大切[たいせつ]だ。", en: "Acting based on the plan is important." }
    ],
    notes:
      "Used with official or authoritative bases (法律, 計画, 事実, ルール, データ). More formal than 〜をもとに; not used with creative inspiration.",
    related: ["gn2-119"]
  },

  {
    id: "gn2-121",
    point: "〜向け",
    reading: "〜むけ",
    level: "N2",
    category: "Modifiers",
    meaning: "Intended for; aimed at (a target audience)",
    structure: "N + 向け(の) + N",
    explanation:
      "Indicates the intended target group or destination for which a product, content, or service is designed.",
    formation:
      "N + 向け(の) + N: 子供[こども]向けの番組[ばんぐみ]\nN + 向け + だ: 海外[かいがい]向けだ",
    examples: [
      { jp: "この番組[ばんぐみ]は子供[こども]向けに作[つく]られた。", en: "This program was made for children." },
      { jp: "海外[かいがい]向けの製品[せいひん]を輸出[ゆしゅつ]する。", en: "We export products intended for overseas markets." }
    ],
    notes:
      "Focuses on the producer's intended target or market. Differs from 〜向き (suitability from the user's side) and 〜用 (specific concrete purpose).",
    related: ["gn2-122", "gn2-123"]
  },

  {
    id: "gn2-122",
    point: "〜向き",
    reading: "〜むき",
    level: "N2",
    category: "Modifiers",
    meaning: "Suitable for; appropriate for",
    structure: "N + 向き(の) + N / N + 向き + だ",
    explanation:
      "Indicates that something is well-suited or appropriate for a particular group, purpose, or condition.",
    formation:
      "N + 向き(の) + N: 冬[ふゆ]向きのスポーツ\nN + 向き + だ: 日本人[にほんじん]向きだ",
    examples: [
      { jp: "この料理[りょうり]は日本人[にほんじん]向きだ。", en: "This dish is suited to Japanese tastes." },
      { jp: "冬[ふゆ]向きのスポーツを楽[たの]しむ。", en: "I enjoy sports suited for winter." }
    ],
    notes:
      "Focuses on inherent suitability rather than producer intent. Compare with 〜向け (intended target) and 〜用 (concrete purpose).",
    related: ["gn2-121", "gn2-123"]
  },

  {
    id: "gn2-123",
    point: "〜用",
    reading: "〜よう",
    level: "N2",
    category: "Modifiers",
    meaning: "For the use of; for the purpose of",
    structure: "N + 用(の) + N",
    explanation:
      "Marks a concrete purpose, user, or function for which something is intended. Common with everyday objects and tools.",
    formation:
      "N + 用(の) + N: 赤[あか]ちゃん用[よう]の服[ふく]\nN + 用 + だ: 海外[かいがい]旅行[りょこう]用[よう]だ",
    examples: [
      { jp: "赤[あか]ちゃん用[よう]の服[ふく]を買[か]った。", en: "I bought clothes for babies." },
      { jp: "これは海外[かいがい]旅行[りょこう]用[よう]のバッグだ。", en: "This is a bag for overseas travel." }
    ],
    notes:
      "Concrete and tangible purpose; narrower than 〜向け. Often attached to user names (子供用) or purpose nouns (勉強用、業務用).",
    related: ["gn2-121", "gn2-122"]
  },

  {
    id: "gn2-124",
    point: "〜調",
    reading: "〜ちょう",
    level: "N2",
    category: "Modifiers",
    meaning: "In the style / tone of; -style",
    structure: "N + 調(の) + N / N + 調 + だ",
    explanation:
      "Indicates a characteristic tone, style, or mannerism associated with a place, group, or genre.",
    formation:
      "N + 調 + だ: 大阪[おおさか]調[ちょう]だ\nN + 調の + N: 関西[かんさい]調[ちょう]のジョーク",
    examples: [
      { jp: "彼[かれ]の話[はな]し方[かた]は大阪[おおさか]調[ちょう]だ。", en: "His way of speaking is in the Osaka style." },
      { jp: "関西[かんさい]調[ちょう]のジョークが好[す]きだ。", en: "I like Kansai-style jokes." }
    ],
    notes:
      "Common with place names (大阪調、京都調) or genre/style names. Suggests a recognizable mannerism rather than authentic origin.",
    related: ["gn2-127"]
  },

  {
    id: "gn2-125",
    point: "〜中",
    reading: "〜ちゅう / 〜じゅう",
    level: "N2",
    category: "Modifiers",
    meaning: "During; in the middle of; throughout",
    structure: "N + 中(ちゅう) / N + 中(じゅう) / V-ている + 中",
    explanation:
      "Indicates an ongoing state or something spanning a whole period or area. ちゅう = 'during'; じゅう = 'throughout (the entire span)'.",
    formation:
      "N + 中(ちゅう): 授業[じゅぎょう]中[ちゅう]\nN + 中(じゅう): 一日[いちにち]中[じゅう]\nV-ている + 中: 考[かんが]えている中",
    examples: [
      { jp: "授業[じゅぎょう]中[ちゅう]は話[はな]してはいけない。", en: "You must not talk during class." },
      { jp: "一日[いちにち]中[じゅう]雨[あめ]が降[ふ]った。", en: "It rained all day long." }
    ],
    notes:
      "Reading depends on meaning: ちゅう for 'during (a state)', じゅう for 'throughout (entire span)'. Attached to nouns denoting activities, periods, or places.",
    related: ["gn2-148"]
  },

  {
    id: "gn2-126",
    point: "〜製",
    reading: "〜せい",
    level: "N2",
    category: "Modifiers",
    meaning: "Made in; manufactured by; made of (material)",
    structure: "N + 製(の) + N",
    explanation:
      "Indicates the country, company, or material of which something is made or manufactured.",
    formation:
      "N + 製 + だ: 日本[にほん]製[せい]だ\nN + 製の + N: 紙[かみ]製[せい]の箱[はこ]",
    examples: [
      { jp: "この車[くるま]は日本[にほん]製[せい]だ。", en: "This car is made in Japan." },
      { jp: "紙[かみ]製[せい]の箱[はこ]はリサイクルできる。", en: "Paper-made boxes can be recycled." }
    ],
    notes:
      "Common with country names (日本製、ドイツ製), company names (トヨタ製), or material names (プラスチック製、木製).",
    related: ["gn2-127"]
  },

  {
    id: "gn2-127",
    point: "〜風",
    reading: "〜ふう",
    level: "N2",
    category: "Modifiers",
    meaning: "In the style of; -style",
    structure: "N + 風(の) + N / N + 風 + に",
    explanation:
      "Indicates something is made or done in the style or manner characteristic of a culture, country, or tradition.",
    formation:
      "N + 風(の) + N: 中華[ちゅうか]風[ふう]の料理[りょうり]\nN + 風 + に: 日本[にほん]風[ふう]に",
    examples: [
      { jp: "中華[ちゅうか]風[ふう]の料理[りょうり]を作[つく]った。", en: "I made a Chinese-style dish." },
      { jp: "日本[にほん]風[ふう]の建物[たてもの]が好[す]きだ。", en: "I like Japanese-style buildings." }
    ],
    notes:
      "Used with culture/country/style names (日本風、西洋風、和風). Compare with 〜調 (recognizable tone) and 〜式 (system/method style).",
    related: ["gn2-124", "gn2-126"]
  },

  {
    id: "gn2-128",
    point: "〜っぽい",
    reading: "〜っぽい",
    level: "N2",
    category: "Modifiers",
    meaning: "-ish; seems like; has a tendency to be",
    structure: "N + っぽい / V-ます形 + っぽい / Na語幹 + っぽい",
    explanation:
      "Indicates that something has a strong characteristic or tendency of the noun, verb, or adjective. Often carries a mildly negative nuance.",
    formation:
      "N + っぽい: 子[こ]どもっぽい\nV-ます + っぽい: 忘[わす]れっぽい\nNa語幹 + っぽい: いろっぽい",
    examples: [
      { jp: "彼[かれ]はまだ子[こ]どもっぽい。", en: "He is still childish." },
      { jp: "最近[さいきん]忘[わす]れっぽくなった。", en: "I have become forgetful lately." }
    ],
    notes:
      "Conjugates as an い-adjective. Frequently has a negative implication (大人っぽい is one of the few positive uses). Common with N (子どもっぽい、男っぽい) and V-ます (怒りっぽい、飽きっぽい).",
    related: ["gn2-129", "gn2-130", "gn2-131"]
  },

  {
    id: "gn2-129",
    point: "〜気味",
    reading: "〜ぎみ",
    level: "N2",
    category: "Modifiers",
    meaning: "Slightly; -ish; somewhat (a touch of)",
    structure: "N + 気味(の) / V-ます形 + 気味",
    explanation:
      "Indicates a slight tendency or feeling of something, often used of physical or emotional states.",
    formation:
      "N + 気味(の): 風邪[かぜ]気味[ぎみ]\nV-ます + 気味: 疲[つか]れ気味[ぎみ]\nV-ます + 気味 + だ: 太[ふと]り気味[ぎみ]だ",
    examples: [
      { jp: "少[すこ]し風邪[かぜ]気味[ぎみ]だ。", en: "I feel slightly like I am catching a cold." },
      { jp: "最近[さいきん]疲[つか]れ気味[ぎみ]だ。", en: "I have been feeling a bit tired lately." }
    ],
    notes:
      "Conjugates as a noun (気味のN, 気味だ). Implies a mild but noticeable state, not yet severe. Often used with health-related words (風邪気味、疲れ気味、太り気味).",
    related: ["gn2-128", "gn2-130"]
  },

  {
    id: "gn2-130",
    point: "〜がち",
    reading: "〜がち",
    level: "N2",
    category: "Modifiers",
    meaning: "Tends to; prone to; often (negative tendency)",
    structure: "N + がち(の) / V-ます形 + がち",
    explanation:
      "Indicates that something tends to happen frequently, usually with a negative or undesirable implication.",
    formation:
      "N + がち(の): 遅刻[ちこく]がち\nV-ます + がち: 風邪[かぜ]をひきがち\nN + がち + だ: 不足[ふそく]がちだ",
    examples: [
      { jp: "冬[ふゆ]は風邪[かぜ]をひきがちだ。", en: "In winter I tend to catch colds." },
      { jp: "彼[かれ]は遅刻[ちこく]しがちだ。", en: "He tends to be late." }
    ],
    notes:
      "More formal/written than 〜やすい. Almost always negative or undesirable. Often seen in advice, warnings, or written reports (忘れがち、遅れがち、しがち).",
    related: ["gn2-128", "gn2-129", "gn2-131"]
  },

  {
    id: "gn2-131",
    point: "〜的",
    reading: "〜てき",
    level: "N2",
    category: "Modifiers",
    meaning: "-like; -al; -ic (forming na-adjectives)",
    structure: "N + 的(な) + N / N + 的 + に / N + 的 + だ",
    explanation:
      "Forms a na-adjective or adverb indicating 'having the nature of' or 'related to' the noun. Highly productive with abstract nouns of Chinese origin.",
    formation:
      "N + 的(な) + N: 科学的[かがくてき]な根拠[こんきょ]\nN + 的 + に: 積極的[せっきょくてき]に\nN + 的 + だ: 楽観的[らっかんてき]だ",
    examples: [
      { jp: "彼[かれ]は非常に積極的[せっきょくてき]な性格[せいかく]だ。", en: "He has a very proactive personality." },
      { jp: "科学的[かがくてき]な根拠[こんきょ]が必要[ひつよう]だ。", en: "We need scientific evidence." }
    ],
    notes:
      "Common with abstract nouns (科学的、教育的、消極的、効果的、基本的). Forms na-adjectives. Cannot attach to native Japanese nouns (✗山의, ✗水の的).",
    related: ["gn2-128", "gn2-130"]
  },

  {
    id: "gn2-137",
    point: "〜てたまらない",
    reading: "〜てたまらない",
    level: "N2",
    category: "Modifiers",
    meaning: "Unbearably; cannot stand (a feeling or sensation)",
    structure: "V-て形 + たまらない / A-くて + たまらない / Naで + たまらない",
    explanation:
      "Expresses that a feeling, sensation, or state is unbearably strong and the speaker cannot endure it.",
    formation:
      "V-て + たまらない: 渇[かわ]いてたまらない\nA-くて + たまらない: 暑[あつ]くてたまらない\nNaで + たまらない: 残念[ざんねん]でたまらない",
    examples: [
      { jp: "のどが渇[かわ]いてたまらない。", en: "I am unbearably thirsty." },
      { jp: "今日[きょう]は暑[あつ]くてたまらない。", en: "It is so hot today I cannot stand it." }
    ],
    notes:
      "Used for first-person feelings. For third-person, add 〜そうだ / 〜ようだ / 〜らしい (彼は嬉しくてたまらないようだ). Colloquial variants: 〜てしょうがない / 〜てしかたがない.",
    related: ["gn2-128"]
  },

  // ───────────────────────────────────────────────────────────
  // HONORIFIC
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-132",
    point: "お〜になる",
    reading: "お〜になる",
    level: "N2",
    category: "Honorific",
    meaning: "Respectful form (sonkeigo) of someone's action",
    structure: "お + V-ます形 + になる / ご + 漢語N + になる",
    explanation:
      "A respectful (sonkeigo) pattern used to describe the actions of a superior or respected person. Lifts the verb's politeness level without humility.",
    formation:
      "お + V-ます + になる: お帰[かえ]りになる\nご + 漢語N + になる: ご到着[とうちゃく]になる\nお + V-ます + になりました: お休[やす]みになりました",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりました。", en: "The teacher has already gone home." },
      { jp: "社長[しゃちょう]がご到着[とうちゃく]になりました。", en: "The president has arrived." }
    ],
    notes:
      "Used only for the respected person's actions, never for one's own. Sino-Japanese nouns take ご (ご到着になる); native verbs take お (お帰りになる). Do not use irregular forms like 〜ていらっしゃる interchangeably.",
    related: ["gn2-133", "gn2-135"]
  },

  {
    id: "gn2-133",
    point: "お〜する",
    reading: "お〜する",
    level: "N2",
    category: "Honorific",
    meaning: "Humble form (kenjougo) of one's own action toward a superior",
    structure: "お + V-ます形 + する / ご + 漢語N + する",
    explanation:
      "A humble (kenjougo) pattern used when the speaker performs an action for or towards a respected person, lowering the speaker's own action to show respect.",
    formation:
      "お + V-ます + する: お見[み]せする\nご + 漢語N + する: ご連絡[れんらく]する\nお + V-ます + します: お持[も]ちします",
    examples: [
      { jp: "先生[せんせい]にお手紙[てがみ]をお見[み]せしました。", en: "I showed the letter to my teacher." },
      { jp: "後[のち]ほどご連絡[れんらく]します。", en: "I will contact you later." }
    ],
    notes:
      "Used only for the speaker's (or in-group's) actions toward a respected person. More polite variant: 〜いたします (お〜いたします). Sino-Japanese nouns take ご.",
    related: ["gn2-132", "gn2-134", "gn2-135"]
  },

  {
    id: "gn2-134",
    point: "〜（さ）せていただく",
    reading: "〜（さ）せていただく",
    level: "N2",
    category: "Honorific",
    meaning: "Humbly receive permission to do; allow me to do",
    structure: "V-させる(使役) + て + いただく / 一段V: V-させる / 五段V: V-せる",
    explanation:
      "A very polite humble pattern in which the speaker receives the favor of being allowed to perform an action. Common in business and formal speech.",
    formation:
      "一段V-させる + て + いただく: 食[た]べさせていただく\n五段V-せる + て + いただく: 休[やす]ませていただく\nする → させていただく: 自己紹介[じこしょうかい]させていただく",
    examples: [
      { jp: "まず、自己紹介[じこしょうかい]させていただきます。", en: "First, allow me to introduce myself." },
      { jp: "今日[きょう]は休[やす]ませていただきます。", en: "Please allow me to take the day off today." }
    ],
    notes:
      "Strongly implies gratitude for permission. Extremely common in business Japanese. Avoid overuse in casual contexts. Polite variant: 〜させていただけますでしょうか (request form).",
    related: ["gn2-133", "gn2-135"]
  },

  {
    id: "gn2-135",
    point: "お〜いただく",
    reading: "お〜いただく",
    level: "N2",
    category: "Honorific",
    meaning: "Receive the favor of someone doing (for the speaker)",
    structure: "お + V-ます形 + いただく / ご + 漢語N + いただく",
    explanation:
      "A humble pattern expressing that the speaker receives the favor of someone (usually a superior) doing an action for them.",
    formation:
      "お + V-ます + いただく: お越[こ]しいただく\nご + 漢語N + いただく: ご確認[かくにん]いただく\nお + V-ます + いただき: お待[ま]ちいただき",
    examples: [
      { jp: "お忙[いそが]しいところお越[こ]しいただき、ありがとうございます。", en: "Thank you for taking the time to come despite being busy." },
      { jp: "後[のち]ほどご確認[かくにん]いただきますようお願[ねが]いします。", en: "Please confirm it later." }
    ],
    notes:
      "Polite request pattern: お/ご〜いただきますようお願いします. Different from 〜てもらう in formality. The agent (the one who performs the action) is the respected person.",
    related: ["gn2-132", "gn2-133", "gn2-134"]
  },

  // ───────────────────────────────────────────────────────────
  // PASSIVE / CAUSATIVE
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-136",
    point: "〜させられる",
    reading: "〜させられる",
    level: "N2",
    category: "Passive/Causative",
    meaning: "Be made to do; be forced to do (causative-passive)",
    structure: "V-させる(使役) + られる(受身) / 一段V: V-させられる / 五段V: V-される / する → させられる",
    explanation:
      "The causative-passive form indicating that someone was made or compelled to do something, often against their will. Conveys a sense of being pressured.",
    formation:
      "一段V-させる + られる: 食[た]べさせられる\n五段V-される (shortened): 飲[の]まされる\nする → させられる: させられる",
    examples: [
      { jp: "子[こ]どもの頃[ころ]、毎日[まいにち]勉強[べんきょう]させられた。", en: "When I was a child, I was made to study every day." },
      { jp: "無理[むり]に仕事[しごと]をさせられた。", en: "I was forced to do the work against my will." }
    ],
    notes:
      "Common in past tense to express past hardship. The short form for 五段 verbs (V-される: 飲まされる, 書かされる) is more colloquial. Strongly implies reluctance.",
    related: []
  },

  // ───────────────────────────────────────────────────────────
  // PARTICLES
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-113",
    point: "〜にとって",
    reading: "〜にとって",
    level: "N2",
    category: "Particles",
    meaning: "To; for (someone's standpoint)",
    structure: "N + にとって(の)",
    explanation:
      "Marks the person for whom something is the case, important, or relevant. Used with evaluative predicates (大切、重要、難しい).",
    formation:
      "N + にとって + だ: 私[わたし]にとって\nN + にとっての + N: 親[おや]にとっての喜[よろこ]び\nN + にとって + 重要[じゅうよう]だ: 学生[がくせい]にとって重要[じゅうよう]",
    examples: [
      { jp: "私[わたし]にとって、家族[かぞく]が一番[いちばん]大切[たいせつ]だ。", en: "To me, my family is the most important thing." },
      { jp: "この試合[しあい]は彼[かれ]にとってとても重要[じゅうよう]だ。", en: "This match is very important for him." }
    ],
    notes:
      "Always takes an evaluative or judgment predicate. Cannot be used with action verbs directly (✗私にとって買う). Compare with 〜に対して (direction).",
    related: ["gn2-112", "gn2-114"]
  },

  {
    id: "gn2-114",
    point: "〜として",
    reading: "〜として",
    level: "N2",
    category: "Particles",
    meaning: "As; in the capacity of",
    structure: "N + として(の) + N / N + として + だ",
    explanation:
      "Marks the role, capacity, status, or qualification in which someone or something acts or is recognized.",
    formation:
      "N + として + だ: 留学生[りゅうがくせい]として\nN + としての + N: 親[おや]としての責任[せきにん]\nN + として + V: 観光地[かんこうち]として有名[ゆうめい]",
    examples: [
      { jp: "留学生[りゅうがくせい]として日本[にほん]に来[き]た。", en: "I came to Japan as an international student." },
      { jp: "この町[まち]は観光地[かんこうち]として有名[ゆうめい]だ。", en: "This town is famous as a tourist destination." }
    ],
    notes:
      "Often takes の when modifying a noun (〜としてのN). Multiple roles can be stacked with も (〜としても〜としても). Differs from 〜にとって (perspective/evaluation).",
    related: ["gn2-113", "gn2-115"]
  },

  {
    id: "gn2-115",
    point: "〜について",
    reading: "〜について",
    level: "N2",
    category: "Particles",
    meaning: "About; regarding",
    structure: "N + について(の) + N / N + について + V",
    explanation:
      "Marks the topic of an action such as thinking, speaking, writing, or researching. A standard particle for indicating the subject matter.",
    formation:
      "N + について + V: 文化[ぶんか]について研究[けんきゅう]する\nN + についての + N: 将来[しょうらい]についての相談[そうだん]\nN + につき (formal): 一人[ひとり]につき",
    examples: [
      { jp: "日本[にほん]の文化[ぶんか]について研究[けんきゅう]している。", en: "I am researching Japanese culture." },
      { jp: "先生[せんせい]に将来[しょうらい]について相談[そうだん]した。", en: "I consulted my teacher about my future." }
    ],
    notes:
      "More formal variant: 〜につきましては. The form 〜につき means 'per' in distribution contexts (一人につき500円). Common with verbs of cognition/speech (考える、話す、書く、調べる).",
    related: ["gn2-114", "gn2-116"]
  },

  {
    id: "gn2-118",
    point: "〜をめぐって",
    reading: "〜をめぐって",
    level: "N2",
    category: "Particles",
    meaning: "Concerning; regarding (with controversy / multiple views)",
    structure: "N + をめぐって + V / N + をめぐる + N",
    explanation:
      "Used when there is discussion, conflict, or various opinions surrounding a topic. Implies the topic is contested or has multiple angles.",
    formation:
      "N + をめぐって + V: 法律[ほうりつ]をめぐって議論[ぎろん]する\nN + をめぐる + N: 問題[もんだい]をめぐる意見[いけん]",
    examples: [
      { jp: "新[あたら]しい法律[ほうりつ]をめぐって議論[ぎろん]が続[つづ]いている。", en: "Debate continues over the new law." },
      { jp: "この問題[もんだい]をめぐる意見[いけん]が分[わ]かれている。", en: "Opinions are divided over this issue." }
    ],
    notes:
      "Implies multiple perspectives or controversy, unlike 〜について (neutral topic). Often collocates with 議論、対立、論争、意見が分かれる. The noun-modifier form is 〜をめぐる.",
    related: ["gn2-117", "gn2-115"]
  },

  {
    id: "gn2-119",
    point: "〜をもとに",
    reading: "〜をもとに",
    level: "N2",
    category: "Particles",
    meaning: "Based on; using as material",
    structure: "N + をもとに(して) + V / N + をもとにした + N",
    explanation:
      "Indicates that something is created or done using a particular source, material, or foundation. More concrete and casual than 〜に基づいて.",
    formation:
      "N + をもとに(して) + V: 実話[じつわ]をもとにして\nN + をもとにした + N: データをもとにした計画[けいかく]",
    examples: [
      { jp: "実話[じつわ]をもとに映画[えいが]を作[つく]った。", en: "I made a movie based on a true story." },
      { jp: "データをもとに計画[けいかく]を立[た]てた。", en: "We made a plan based on the data." }
    ],
    notes:
      "Used with concrete sources (実話、データ、小説、事実). More casual and creative-tone than 〜に基づいて, which is used with official/authoritative bases. The noun-modifier form is 〜をもとにした.",
    related: ["gn2-120"]
  },

  {
    id: "gn2-146",
    point: "〜に限って",
    reading: "〜にかぎって",
    level: "N2",
    category: "Particles",
    meaning: "Just at that time; only ~ (ironic emphasis)",
    structure: "N + に限って / V-ている + に限って",
    explanation:
      "Indicates that something (often undesirable) happens precisely at a particular time or with a particular person. Often carries a sense of bad timing.",
    formation:
      "N + に限って: 忙[いそが]しい日に限[かぎ]って\nN + に限って + 〜ない (trust): 彼[かれ]に限[かぎ]って嘘[うそ]はつかない\n時間[じかん] + に限って: 夜[よる]に限[かぎ]って",
    examples: [
      { jp: "忙[いそが]しい日に限[かぎ]って、客[きゃく]が多[おお]い。", en: "Just on busy days, there are many customers." },
      { jp: "あの人[ひと]に限[かぎ]って、嘘[うそ]はつかないだろう。", en: "He is the last person who would lie (lit. limited to that person, no lies)." }
    ],
    notes:
      "Two main uses: (1) timing of bad luck (precisely when...); (2) trust expression (only ~ would never do ~). Distinct from 〜に限り (limiting scope) and 〜に限らず (not limited to).",
    related: ["gn2-111"]
  },

  // ───────────────────────────────────────────────────────────
  // CONJUNCTIONS
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-138",
    point: "しかも",
    reading: "しかも",
    level: "N2",
    category: "Conjunctions",
    meaning: "Moreover; furthermore; and what is more",
    structure: "S1。しかも、S2",
    explanation:
      "Adds a related, often reinforcing, piece of information to the previous sentence. Used to pile on positive or negative traits.",
    formation:
      "S1。しかも、S2: 安[やす]い。しかも、おいしい。\nClause + しかも + Clause: 頭[あたま]がいい。しかも、親切[しんせつ]だ",
    examples: [
      { jp: "あの店[みせ]は安[やす]い。しかも、品質[ひんしつ]がいい。", en: "That shop is cheap. Moreover, the quality is good." },
      { jp: "彼[かれ]は頭[あたま]がいい。しかも、親切[しんせつ]だ。", en: "He is smart. Furthermore, he is kind." }
    ],
    notes:
      "Used at the start of a sentence to add new information that strengthens or complements the previous one. Similar to その上 but slightly more formal. Can convey a sense of 'on top of all that'.",
    related: ["gn2-139"]
  },

  {
    id: "gn2-139",
    point: "その結果",
    reading: "そのけっか",
    level: "N2",
    category: "Conjunctions",
    meaning: "As a result; consequently",
    structure: "S1。その結果、S2",
    explanation:
      "Used at the beginning of a sentence to introduce the outcome or consequence of the action described in the previous sentence.",
    formation:
      "S1。その結果[けっか]、S2: 練習[れんしゅう]した。その結果[けっか]、勝[か]った。\nClause + その結果 + Clause",
    examples: [
      { jp: "毎日[まいにち]練習[れんしゅう]した。その結果[けっか]、試合[しあい]に勝[か]った。", en: "I practiced every day. As a result, I won the match." },
      { jp: "排気[はいき]ガスが増[ふ]えた。その結果[けっか]、環境[かんきょう]が悪化[あっか]した。", en: "Exhaust gas increased. As a result, the environment deteriorated." }
    ],
    notes:
      "Common in written/ explanatory texts. Implies a clear cause-and-effect relationship. More formal than だから / なので. Often paired with past tense.",
    related: ["gn2-138"]
  },

  {
    id: "gn2-140",
    point: "つまり",
    reading: "つまり",
    level: "N2",
    category: "Conjunctions",
    meaning: "In other words; that is to say; namely",
    structure: "S1。つまり、S2",
    explanation:
      "Introduces a summary, simplification, or restatement of what was said before, making the meaning clearer or more concise.",
    formation:
      "S1。つまり、S2: 毎月[まいつき]貯金[ちょきん]している。つまり、準備[じゅんび]だ。\nClause + つまり + Clause",
    examples: [
      { jp: "彼[かれ]は私[わたし]の母[はは]の弟[おとうと]だ。つまり、私[わたし]のおじだ。", en: "He is my mother's younger brother. In other words, he is my uncle." },
      { jp: "毎月[まいつき]貯金[ちょきん]している。つまり、将来[しょうらい]の準備[じゅんび]だ。", en: "I save money every month. That is to say, I am preparing for the future." }
    ],
    notes:
      "Used to clarify or rephrase. Similar to すなわち but more colloquial. Can also mean 'eventually / after all' when summarizing a sequence (つまり、こういうことだ).",
    related: ["gn2-143"]
  },

  {
    id: "gn2-141",
    point: "なぜなら",
    reading: "なぜなら",
    level: "N2",
    category: "Conjunctions",
    meaning: "Because; the reason is",
    structure: "S1。なぜなら、S2 + からだ",
    explanation:
      "Introduces the reason for the statement made in the previous sentence. The reason clause typically ends with 〜からだ / 〜だから.",
    formation:
      "S1。なぜなら、S2 + からだ: 行[い]きたくない。なぜなら、お金[かね]がないからだ。\nClause + なぜなら + Clause + から",
    examples: [
      { jp: "旅行[りょこう]には行[い]きたくない。なぜなら、お金[かね]がないからだ。", en: "I do not want to go on the trip. Because I have no money." },
      { jp: "彼[かれ]は怒[おこ]っている。なぜなら、嘘[うそ]をつかれたからだ。", en: "He is angry. Because he was lied to." }
    ],
    notes:
      "Always post-explains the reason (unlike 〜から / 〜ので which come before the main clause). Often paired with 〜からだ. Formal and written-style.",
    related: ["gn2-139"]
  },

  {
    id: "gn2-142",
    point: "ただし",
    reading: "ただし",
    level: "N2",
    category: "Conjunctions",
    meaning: "However; provided that; but",
    structure: "S1。ただし、S2",
    explanation:
      "Adds an exception, condition, or restriction to the previous statement. Common in rules, notices, and contracts.",
    formation:
      "S1。ただし、S2: 無料[むりょう]だ。ただし、2時間[じかん]までだ。\nClause + ただし + Clause",
    examples: [
      { jp: "駐車[ちゅうしゃ]は無料[むりょう]だ。ただし、2時間[じかん]までだ。", en: "Parking is free. However, only up to two hours." },
      { jp: "火曜日[かようび]は休[やす]みだ。ただし、第[だい]一週目[いっしゅうめ]は営業[えいぎょう]する。", en: "Tuesdays are holidays. However, the first week is open for business." }
    ],
    notes:
      "Adds a partial exception or condition rather than contradicting the previous sentence. More formal than しかし / けれども. Very common in written rules and announcements.",
    related: ["gn2-138"]
  },

  {
    id: "gn2-143",
    point: "すなわち",
    reading: "すなわち",
    level: "N2",
    category: "Conjunctions",
    meaning: "That is to say; namely; i.e.",
    structure: "S1。すなわち、S2",
    explanation:
      "Introduces a definition, equivalent term, or restatement in more formal or precise language. More written and formal than つまり.",
    formation:
      "S1。すなわち、S2: 首都[しゅと]、すなわち東京[とうきょう]\nN1 + すなわち + N2",
    examples: [
      { jp: "彼[かれ]は私[わたし]の父[ちち]の兄[あに]だ。すなわち、私[わたし]のおじだ。", en: "He is my father's older brother. That is to say, my uncle." },
      { jp: "日本[にほん]の首都[しゅと]、すなわち東京[とうきょう]に住[す]んでいる。", en: "I live in the capital of Japan, namely Tokyo." }
    ],
    notes:
      "Used for definition or explicit equivalence. More formal/literary than つまり. Common in academic, legal, and explanatory writing. Can be inserted between noun phrases.",
    related: ["gn2-140"]
  },

  // ───────────────────────────────────────────────────────────
  // CONDITIONALS
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-144",
    point: "〜たところで",
    reading: "〜たところで",
    level: "N2",
    category: "Conditionals",
    meaning: "Even if one tries; even if (something happens)",
    structure: "V-た形 + ところで + V(可能性を表す否定形)",
    explanation:
      "Expresses that even if an action is carried out, the expected or desired outcome will not follow. Used to convey futility or low expectation.",
    formation:
      "V-た + ところで + 〜ない: 急[いそ]いだところで、間[ま]に合[あ]わない\nV-た + ところで + 〜だろう(低期待): 謝[あやま]ったところで、許[ゆる]されないだろう",
    examples: [
      { jp: "今[いま]急[いそ]いだところで、間[ま]に合[あ]わない。", en: "Even if I hurry now, I will not make it in time." },
      { jp: "いくら謝[あやま]ったところで、許[ゆる]されないだろう。", en: "No matter how much I apologize, I probably will not be forgiven." }
    ],
    notes:
      "The main clause is typically negative or expresses a low expectation. Often paired with いくら / どんなに for emphasis. Differs from 〜ても (general concession) by stressing futility.",
    related: ["gn2-103", "gn2-145"]
  },

  {
    id: "gn2-145",
    point: "〜に応じて",
    reading: "〜におうじて",
    level: "N2",
    category: "Conditionals",
    meaning: "In accordance with; in response to",
    structure: "N + に応じて + V / N + に応じた + N",
    explanation:
      "Indicates that an action or response varies according to changing conditions, such as income, situation, demand, or ability.",
    formation:
      "N + に応じて + V: 収入[しゅうにゅう]に応[おう]じて払[はら]う\nN + に応じた + N: 状況[じょうきょう]に応[おう]じた対応[たいおう]\nN + に応じて + 変わる: 需要[じゅよう]に応[おう]じて変[か]わる",
    examples: [
      { jp: "収入[しゅうにゅう]に応[おう]じて、税金[ぜいきん]を払[はら]う。", en: "I pay taxes in accordance with my income." },
      { jp: "状況[じょうきょう]に応[おう]じて、計画[けいかく]を変[か]える。", en: "We will change the plan according to the circumstances." }
    ],
    notes:
      "Implies proportional or responsive variation. Common with 状況、収入、需要、能力、結果. The noun-modifier form is 〜に応じた. Formal/written style.",
    related: ["gn2-144"]
  }
];
