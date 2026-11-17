import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// This file covers N2-level grammar points (Shinzaizen Master style),
// chunk B, IDs gn2-51 .. gn2-100. No lesson field. Distinct from chunk A.

export const grammarN2B: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // CONDITIONALS
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-51",
    point: "〜限り",
    reading: "〜かぎり",
    level: "N2",
    category: "Conditionals",
    meaning: "As long as; while (a condition continues to hold)",
    structure: "V辞書形 + 限り / Vある・いる + 限り / Nの + 限り / Na-adj(である) + 限り / I-adj + 限り",
    explanation:
      "Expresses a continuing condition that guarantees the main clause. As long as the condition holds true, the result stated in the main clause also holds. Often used for promises, reassurances, or warnings.",
    formation:
      "V辞書形 + 限り: 生[い]きている限り\nNの + 限り: 私[わたし]の知[し]る限り\nNa-adj + 限り: 健康[けんこう]である限り\nI-adj + 限り: 暑[あつ]い限り",
    examples: [
      { jp: "私[わたし]が生[い]きている限[かぎ]り、あなたを守[まも]ります。", en: "As long as I live, I will protect you." },
      { jp: "雨[あめ]が降[ふ]らない限[かぎ]り、試合[しあい]は続行[ぞっこう]されます。", en: "As long as it does not rain, the match will continue." }
    ],
    notes:
      "限り emphasizes a continuing state and is slightly more formal/literary than 〜間は. Negative form is 〜ない限り, commonly extended to 〜ない限り〜ない ('unless... not...').",
    related: ["gn2-52", "gn2-55", "gn2-92"]
  },

  {
    id: "gn2-52",
    point: "〜さえ〜ば",
    reading: "〜さえ〜ば",
    level: "N2",
    category: "Conditionals",
    meaning: "As long as; if only (a single necessary condition is met)",
    structure: "N + さえ + V-ば形 / N + さえ + Na-adjなら(ば) / N + さえ + I-adjければ / V-て形 + さえ + いれば",
    explanation:
      "Singling out one essential condition as sufficient for the desired outcome. The particle さえ ('even') marks the indispensable element, followed by a conditional ば-form.",
    formation:
      "N + さえ + Vば: 薬[くすり]さえ飲[の]めば\nN + さえ + ならば: お金[かね]さえあれば\nV-て + さえ + いれば: いて + さえ + いれば",
    examples: [
      { jp: "薬[くすり]さえ飲[の]めば、すぐに治[なお]ります。", en: "As long as you take the medicine, you will recover soon." },
      { jp: "お金[かね]さえあれば何[なに]でも買[か]えるというわけではない。", en: "It is not the case that you can buy anything as long as you have money." }
    ],
    notes:
      "Often interchangeable with 〜だけで ('if only'). 〜さえ〜ば emphasizes 'even just this is enough'; だけで is slightly softer. With verbs, V-てさえいれば is common.",
    related: ["gn2-51", "gn2-85", "gn2-86"]
  },

  {
    id: "gn2-53",
    point: "〜てこそ",
    reading: "〜てこそ",
    level: "N2",
    category: "Conditionals",
    meaning: "Only by doing; it is precisely through doing that",
    structure: "V-て形 + こそ",
    explanation:
      "Emphasizes that the act in the て-clause is the true or essential path to realizing what follows. Implies 'unless you actually do it, you won't understand or achieve it'.",
    formation:
      "V-て + こそ: 失敗[しっぱい]してこそ\nV-て + こそ: 自分[じぶん]でやってこそ",
    examples: [
      { jp: "失敗[しっぱい]してこそ、人[ひと]は成長[せいちょう]できる。", en: "It is precisely through failing that people grow." },
      { jp: "自分[じぶん]でやってこそ、本当[ほんとう]の喜[よろこ]びが分[わ]かる。", en: "Only by doing it yourself can you understand the true joy." }
    ],
    notes:
      "Carries a didactic or emphatic tone, often used in proverbs and advice. Distinct from 〜てこそはじめて ('only after doing, for the first time...').",
    related: ["gn2-51", "gn2-54"]
  },

  {
    id: "gn2-54",
    point: "〜としても",
    reading: "〜としても",
    level: "N2",
    category: "Conditionals",
    meaning: "Even if; supposing that; granting that",
    structure: "V普通形 + としても / N + だとしても / Na-adj(だ) + としても / I-adj + としても",
    explanation:
      "Hypothetical concession: assumes a situation (whether or not it is real) and states that the main clause still holds. Stronger/more formal than 〜ても.",
    formation:
      "V辞書形 + としても: 降[ふ]るとしても\nN + だとしても: 雨[あめ]だとしても\nI-adj + としても: 忙[いそが]しいとしても",
    examples: [
      { jp: "雨[あめ]だとしても、試合[しあい]は行[おこな]われます。", en: "Even if it rains, the match will be held." },
      { jp: "どんなに忙[いそが]しいとしても、毎日[まいにち]少[すこ]しは本[ほん]を読[よ]むようにしている。", en: "No matter how busy I may be, I try to read at least a little every day." }
    ],
    notes:
      "Used for hypothetical concessions, often with たとえ〜としても. Differs from 〜のに (which presupposes the condition is real).",
    related: ["gn2-55", "gn2-68"]
  },

  {
    id: "gn2-55",
    point: "〜ないことには",
    reading: "〜ないことには",
    level: "N2",
    category: "Conditionals",
    meaning: "Unless; without first doing X, (the main clause cannot happen)",
    structure: "V-ない形 + ないことには / N + で(は)ないことには / Na-adj + じゃないことには",
    explanation:
      "States a necessary precondition. Unless the condition is met, the result (usually negative or impossible) cannot be avoided. Often paired with 〜できない / 〜無理だ.",
    formation:
      "V-ない + ないことには: 見[み]てみないことには\nN + でないことには: 資料[しりょう]がないことには",
    examples: [
      { jp: "実際[じっさい]に見[み]てみないことには、評価[ひょうか]できない。", en: "I cannot judge unless I actually try looking at it." },
      { jp: "資料[しりょう]がないことには、プレゼンの準備[じゅんび]ができない。", en: "Without the materials, I cannot prepare the presentation." }
    ],
    notes:
      "The main clause is almost always negative or expresses impossibility. Close in meaning to 〜なければ, but emphasizes the indispensable precondition more strongly.",
    related: ["gn2-51", "gn2-56"]
  },

  {
    id: "gn2-56",
    point: "〜にしろ〜にしろ / 〜にせよ〜にせよ",
    reading: "〜にしろ〜にしろ / 〜にせよ〜にせよ",
    level: "N2",
    category: "Conditionals",
    meaning: "Whether... or; no matter whether A or B",
    structure: "N + にしろ + N + にしろ / V普通形 + にしろ + V普通形 + にしろ (にせよ is more formal)",
    explanation:
      "Lists two alternatives and asserts the main clause holds for both. Often used to present contrasting options or to say 'in either case'. Can be extended with three or more items.",
    formation:
      "N + にしろ + N + にしろ: 土曜[どよう]日にしろ日曜[にちよう]日にしろ\nV辞書形 + にしろ + V-ない + にしろ: 行[い]くにしろ行[い]かないにしろ",
    examples: [
      { jp: "行[い]くにしろ行[い]かないにしろ、早[はや]めに連絡[れんらく]してください。", en: "Whether you go or not, please contact me early." },
      { jp: "土曜[どよう]日にしろ日曜[にちよう]日にしろ、週末[しゅうまつ]は必[かなら]ず家族[かぞく]と過[す]ごす。", en: "Whether Saturday or Sunday, I always spend the weekend with my family." }
    ],
    notes:
      "にしろ is casual-to-formal; にせよ is more written/formal. The pattern can also appear once (〜にしろ) to mean 'even if'.",
    related: ["gn2-54", "gn2-76"]
  },

  // ───────────────────────────────────────────────────────────
  // CAUSE / REASON
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-57",
    point: "〜以上(は)",
    reading: "〜いじょう(は)",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Now that; since; as long as one is in this situation",
    structure: "V普通形 + 以上(は) / N + である以上 / Na-adj + である以上 / I-adj + 以上",
    explanation:
      "Establishes a strong premise (usually the speaker's own decision or a present situation) from which a duty, resolution, or inevitable conclusion follows. Tends to co-occur with べき, なければならない, つもりだ.",
    formation:
      "V-た + 以上(は): 約束[やくそく]した以上(は)\nN + である以上: 学生[がくせい]である以上\nI-adj + 以上: 高[たか]い以上",
    examples: [
      { jp: "約束[やくそく]した以上[いじょう]は、必[かなら]ず守[まも]らなければならない。", en: "Now that I have promised, I must keep it." },
      { jp: "学生[がくせい]である以上[いじょう]、校則[こうそく]に従[したが]うべきだ。", en: "As long as one is a student, one should follow the school rules." }
    ],
    notes:
      "Stronger sense of resolve or obligation than 〜から / 〜ので. Often indicates the speaker's subjective judgment. Contrast with 〜上は (more formal).",
    related: ["gn2-58", "gn2-59"]
  },

  {
    id: "gn2-58",
    point: "〜上は",
    reading: "〜うえは",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Now that; since (one has committed to a course of action)",
    structure: "V-た形 + 上は / V辞書形 + 上は",
    explanation:
      "A formal written-style counterpart of 〜以上は. Indicates that, given the fact that one has already entered into a situation, a strong resolve or obligation follows. Most common with verbs of commitment.",
    formation:
      "V-た + 上は: 選[えら]ばれた上は\nV辞書形 + 上は: 出[で]る上は",
    examples: [
      { jp: "会社[かいしゃ]の代表[だいひょう]として選[えら]ばれた上[うえ]は、最後[さいご]まで責任[せきにん]を持[も]って務[つと]めたい。", en: "Now that I have been chosen as the company representative, I intend to fulfil my duties responsibly to the end." },
      { jp: "試合[しあい]に出[で]る上[うえ]は、優勝[ゆうしょう]を目指[めざ]して頑張[がんば]るつもりだ。", en: "Since I am entering the competition, I intend to aim for the championship." }
    ],
    notes:
      "More书面-formal than 〜以上は. Restricted to contexts where the subject has consciously entered a situation. Cannot be used with mere natural facts like 雨が降った上は (use 以上は instead).",
    related: ["gn2-57", "gn2-91"]
  },

  {
    id: "gn2-59",
    point: "〜あまり(に)",
    reading: "〜あまり(に)",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Due to excessive; because of too much",
    structure: "Nの + あまり(に) / V-た形 + あまり(に) / Na-adjな + あまり(に) / I-adj + あまり(に)",
    explanation:
      "Marks a cause rooted in an extreme degree of some feeling, state, or action. The result is usually unexpected or negative (a loss of control, a mistake, an accident).",
    formation:
      "Nの + あまり: 驚[おどろ]きのあまり\nV-た + あまり: 考[かんが]えすぎたあまり\nNa-adjな + あまり: 熱心[ねっしん]なあまり",
    examples: [
      { jp: "驚[おどろ]きのあまり、言葉[ことば]が出[で]なかった。", en: "I was so surprised that I could not speak." },
      { jp: "彼[かれ]は仕事[しごと]に熱心[ねっしん]なあまり、健康[けんこう]を損[そこ]ねてしまった。", en: "He was so devoted to his work that he damaged his health." }
    ],
    notes:
      "Always implies a result exceeding normal bounds, usually negative. With nouns of emotion (喜び, 悲しみ, 怒り) the pattern 〜のあまり is most common.",
    related: ["gn2-60", "gn2-91"]
  },

  {
    id: "gn2-60",
    point: "〜せいで / 〜せいか",
    reading: "〜せいで / 〜せいか",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Because of; due to (a cause perceived as negative or blameworthy)",
    structure: "Nの + せいで / V普通形 + せいで / Na-adjな + せいで / I-adj + せいで / せいか adds uncertainty",
    explanation:
      "Attributes an undesirable outcome to a specific cause. The cause is presented as responsible for a bad result. せいか hedges, meaning 'perhaps because of'.",
    formation:
      "Nの + せいで: 寒[さむ]さのせいで\nV普通形 + せいで: 忘[わす]れたせいで\n〜せいか (perhaps because)",
    examples: [
      { jp: "寒[さむ]さのせいで、風邪[かぜ]をひいてしまった。", en: "I caught a cold because of the cold weather." },
      { jp: "約束[やくそく]を忘[わす]れたせいで、彼女[かのじょ]に怒[おこ]られた。", en: "I was scolded by her because I forgot our promise." }
    ],
    notes:
      "Almost always used for negative outcomes; for positive attribution use 〜おかげで. せいか ('perhaps due to') softens the claim when one is not certain.",
    related: ["gn2-59", "gn2-91"]
  },

  // ───────────────────────────────────────────────────────────
  // TIME / SEQUENCE
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-61",
    point: "〜次第",
    reading: "〜しだい",
    level: "N2",
    category: "Time/Sequence",
    meaning: "As soon as; immediately upon doing",
    structure: "V-ます形 (stem) + 次第 / N + 次第 ('depending on')",
    explanation:
      "When attached to a verb stem, expresses that as soon as the action completes, the next action will occur. Common in business correspondence. As a noun + 次第 it means 'depending on'.",
    formation:
      "V-ます形 + 次第: 準備[じゅんび]でき次第[しだい]\nN + 次第: 天候[てんこう]次第[しだい] (depending on weather)",
    examples: [
      { jp: "資料[しりょう]が準備[じゅんび]でき次第[しだい]、お送[おく]りします。", en: "As soon as the materials are ready, I will send them." },
      { jp: "到着[とうちゃく]次第[しだい]、ご連絡[れんらく]いたします。", en: "I will contact you as soon as I arrive." }
    ],
    notes:
      "Strictly for actions the speaker will perform upon completion of a precondition; cannot describe past events. The follow-up clause is normally non-past and volitional/intentional.",
    related: ["gn2-62", "gn2-64"]
  },

  {
    id: "gn2-62",
    point: "〜たびに",
    reading: "〜たびに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Every time; whenever",
    structure: "V辞書形 + たびに / Nの + たびに",
    explanation:
      "Marks a recurring event: each time the action in the たびに clause happens, the main clause also happens. Implies a repeated, often slightly increasing or notable, pattern.",
    formation:
      "V辞書形 + たびに: 会[あ]うたびに\nNの + たびに: 出張[しゅっちょう]のたびに",
    examples: [
      { jp: "彼[かれ]は会[あ]うたびに新[あたら]しい話題[わだい]を教[おし]えてくれる。", en: "Every time I meet him, he teaches me a new topic." },
      { jp: "出張[しゅっちょう]のたびに、お土産[みやげ]を買[か]って帰[かえ]る。", en: "Every business trip, I buy souvenirs to bring back." }
    ],
    notes:
      "Cannot be used for one-time events; requires repeated occurrences. Differs from 〜時に ('when'), which may be one-time and does not imply recurrence.",
    related: ["gn2-61", "gn2-66"]
  },

  {
    id: "gn2-63",
    point: "〜つつある",
    reading: "〜つつある",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Is currently in the process of; is changing toward",
    structure: "V-ます形 (stem) + つつある",
    explanation:
      "Describes an ongoing, gradual change in progress. Used mainly with verbs of change (増える, 減る, 変わる, 改善する) to convey a dynamic, evolving situation.",
    formation:
      "V-ます形 + つつある: 減[へ]りつつある\nV-ます形 + つつある: 改善[かいぜん]されつつある",
    examples: [
      { jp: "町[まち]の人口[じんこう]は減[へ]りつつある。", en: "The town's population is gradually decreasing." },
      { jp: "環境問題[かんきょうもんだい]は改善[かいぜん]されつつある。", en: "Environmental problems are gradually improving." }
    ],
    notes:
      "Restricted to verbs expressing change; not used with stative verbs like いる or 分かる. More formal/written than 〜ている for ongoing change.",
    related: ["gn2-67", "gn2-66"]
  },

  {
    id: "gn2-64",
    point: "〜たとたん(に)",
    reading: "〜たとたん(に)",
    level: "N2",
    category: "Time/Sequence",
    meaning: "As soon as; the moment that",
    structure: "V-た形 + とたん(に)",
    explanation:
      "Indicates that one action had barely finished when another (often unexpected) event occurred. Implies immediacy and frequently an element of surprise.",
    formation:
      "V-た + とたん(に): 開[あ]けたとたん(に)\nV-た + とたんに: 立[た]ち上が[あ]がったとたんに",
    examples: [
      { jp: "ドアを開[あ]けたとたん、猫[ねこ]が飛[と]び出[で]してきた。", en: "The moment I opened the door, the cat came darting out." },
      { jp: "立[た]ち上が[あ]がったとたんに、めまいがした。", en: "As soon as I stood up, I felt dizzy." }
    ],
    notes:
      "The main clause must describe an event outside the speaker's control; cannot be used for one's own intentional next action (use 〜てから / 〜次第 instead). Often the second event is unexpected.",
    related: ["gn2-61", "gn2-66"]
  },

  {
    id: "gn2-65",
    point: "〜にあたって / 〜にあたり",
    reading: "〜にあたって / 〜にあたり",
    level: "N2",
    category: "Time/Sequence",
    meaning: "On the occasion of; at the time of (an important event)",
    structure: "N + にあたって / V辞書形 + にあたって (にあたり is the連用形, more formal)",
    explanation:
      "Marks a special, often formal, occasion when something is done. Used for greetings, speeches, and resolutions at significant moments such as departure, marriage, new year, or starting a project.",
    formation:
      "N + にあたって: 新年[しんねん]にあたって\nV辞書形 + にあたって: 迎[むか]えるにあたって\n〜にあたり (formal 連用形)",
    examples: [
      { jp: "新年[しんねん]を迎[むか]えるにあたって、皆様[みなさま]のご健康[けんこう]をお祈[いの]りします。", en: "On the occasion of welcoming the new year, I pray for everyone's good health." },
      { jp: "出発[しゅっぱつ]にあたり、最終確認[さいしゅうかくにん]をお願[ねが]いします。", en: "Prior to departure, please perform a final check." }
    ],
    notes:
      "Highly formal, used in speeches, ceremonies, and official documents. 〜にあたり is the more formal variant. Compare with 〜に先立って (just before).",
    related: ["gn2-66", "gn2-61"]
  },

  {
    id: "gn2-66",
    point: "〜に先立って / 〜に先立ち",
    reading: "〜にさきだって / 〜にさきだち",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Prior to; before doing (something important)",
    structure: "N + に先立って / V辞書形 + に先立って (に先立ち is the 連用形, more formal)",
    explanation:
      "Indicates that an action is carried out in advance of a more important upcoming event. Used in formal contexts: preparation, briefing, ceremony before a main event.",
    formation:
      "N + に先立って: 会議[かいぎ]に先立って\nV辞書形 + に先立って: 食事[しょくじ]するに先立って\n〜に先立ち (formal 連用形)",
    examples: [
      { jp: "会議[かいぎ]に先立[さきだ]って、資料[しりょう]を配布[はいふ]した。", en: "Prior to the meeting, materials were distributed." },
      { jp: "食事[しょくじ]に先立[さきだ]って、手[て]を洗[あら]う。", en: "I wash my hands before eating." }
    ],
    notes:
      "Formal, written-register expression. Often paired with preparation actions (準備, 説明, 打ち合わせ).",
    related: ["gn2-65", "gn2-61"]
  },

  // ───────────────────────────────────────────────────────────
  // CONTRAST
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-67",
    point: "〜つつ",
    reading: "〜つつ",
    level: "N2",
    category: "Contrast",
    meaning: "While doing; although (simultaneous action with contrast)",
    structure: "V-ます形 (stem) + つつ",
    explanation:
      "Has two uses: (1) simultaneous action ('while doing X, doing Y') and (2) concessive ('although doing X, doing Y'). The concessive use implies awareness of contradiction. Formal/literary counterpart of 〜ながら.",
    formation:
      "V-ます形 + つつ: 働[はたら]きつつ\nV-ます形 + つつ: 知[し]りつつ",
    examples: [
      { jp: "働[はたら]きつつ、大学[だいがく]に通[かよ]っている。", en: "While working, I am attending university." },
      { jp: "悪[わる]いと知[し]りつつ、嘘[うそ]をついてしまった。", en: "Although I knew it was wrong, I ended up telling a lie." }
    ],
    notes:
      "In the concessive use, 〜つつ often co-occurs with 〜てしまう in the main clause to express regret. More formal than 〜ながら.",
    related: ["gn2-63", "gn2-68"]
  },

  {
    id: "gn2-68",
    point: "〜といっても",
    reading: "〜といっても",
    level: "N2",
    category: "Contrast",
    meaning: "Even though one says; although it is said that",
    structure: "V普通形/N + といっても / Na-adj + といっても / I-adj + といっても",
    explanation:
      "Acknowledges a stated claim, then qualifies or limits it. The main clause scales down or contradicts the expectation raised by the quoted claim.",
    formation:
      "N + といっても: 春[はる]になったといっても\nV普通形 + といっても: できるといっても\nI-adj + といっても: 高[たか]いといっても",
    examples: [
      { jp: "日本語[にほんご]ができるといっても、簡単[かんたん]な会話[かいわ]だけだ。", en: "Even though I can speak Japanese, it is only simple conversation." },
      { jp: "春[はる]になったといっても、まだ寒[さむ]い日[ひ]が続[つづ]いている。", en: "Even though spring has come, cold days continue." }
    ],
    notes:
      "Useful for self-deprecation and modesty. Common follow-ups include 〜だけだ, 〜にすぎない, 〜ない.",
    related: ["gn2-69", "gn2-54"]
  },

  {
    id: "gn2-69",
    point: "〜どころか",
    reading: "〜どころか",
    level: "N2",
    category: "Contrast",
    meaning: "Far from; on the contrary; not to mention",
    structure: "N + どころか / V普通形 + どころか / Na-adj + どころか / I-adj + どころか",
    explanation:
      "Strongly contradicts an expectation. Used either to deny the expected thing and assert something far from it, or to say the expected thing doesn't even apply, let alone the actual (more extreme) one.",
    formation:
      "N + どころか: 英語[えいご]どころか\nI-adj + どころか: 簡単[かんたん]どころか\nV普通形 + どころか: 休[やす]めるどころか",
    examples: [
      { jp: "彼[かれ]は英語[えいご]どころか、フランス語[ご]まで話[はな]せる。", en: "Far from only English, he can even speak French." },
      { jp: "簡単[かんたん]どころか、とても難[むずか]しい問題[もんだい]だった。", en: "Far from being easy, it was a very difficult problem." }
    ],
    notes:
      "Two main uses: (1) 'far from X, actually Y (more extreme)' and (2) 'far from X, not even X'. Stronger than 〜ばかりか / 〜だけでなく.",
    related: ["gn2-68", "gn2-71"]
  },

  {
    id: "gn2-70",
    point: "〜に比べて / 〜に比べ",
    reading: "〜くらべて / 〜くらべ",
    level: "N2",
    category: "Contrast",
    meaning: "Compared to; in comparison with",
    structure: "N + に比べて / V辞書形 + のに比べて / 〜に比べ (formal連用形)",
    explanation:
      "Compares two things, pointing out a difference in degree or quality. The reference term marked by に is the standard of comparison.",
    formation:
      "N + に比べて: 昨年[さくねん]に比べて\nV辞書形 + の + に比べて: 走[はし]るのに比べて\n〜に比べ (formal連用形)",
    examples: [
      { jp: "昨年[さくねん]に比[くら]べて、今年[ことし]の売上[うりあげ]は２０％増[ふ]えた。", en: "Compared to last year, this year's sales increased by 20%." },
      { jp: "東京[とうきょう]に比[くら]べて、大阪[おおさか]は物価[ぶっか]が少[すこ]し安[やす]い。", en: "Compared to Tokyo, prices in Osaka are a little cheaper." }
    ],
    notes:
      "For comparison of degree/amount. If you want to say 'unlike X, Y is' (qualitative contrast without degree), use 〜と違って instead.",
    related: ["gn2-71", "gn2-68"]
  },

  {
    id: "gn2-71",
    point: "〜にしては",
    reading: "〜にしては",
    level: "N2",
    category: "Contrast",
    meaning: "For; considering; surprisingly, given that",
    structure: "N + にしては / V普通形 + にしては",
    explanation:
      "States that, given the standard normally expected of the category in question, the actual situation is surprising or does not match. Implies an evaluation against a benchmark.",
    formation:
      "N + にしては: 初心者[しょしんしゃ]にしては\nV普通形 + にしては: 休[やす]んだにしては\nV-た + にしては: 久[ひさ]しぶりに会[あ]ったにしては",
    examples: [
      { jp: "初心者[しょしんしゃ]にしては、上手[じょうず]な字[じ]を書[か]く。", en: "For a beginner, he writes characters very well." },
      { jp: "あのレストランにしては、サービスが悪[わる]かった。", en: "For that restaurant, the service was poor." }
    ],
    notes:
      "Always expresses surprise or a gap with expectation. Compare with 〜に比べて (objective degree comparison) and 〜といっても (scaling down a claim).",
    related: ["gn2-70", "gn2-69"]
  },

  // ───────────────────────────────────────────────────────────
  // ASSUMPTION
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-72",
    point: "〜かねない",
    reading: "〜かねない",
    level: "N2",
    category: "Assumption",
    meaning: "Might; is liable to; could well (negative outcome)",
    structure: "V-ます形 (stem) + かねない",
    explanation:
      "Expresses a concern that a undesirable outcome may occur if things continue as they are. The speaker judges the possibility real enough to warrant attention or warning.",
    formation:
      "V-ます形 + かねない: 起[お]こしかねない\nV-ます形 + かねない: し忘[わす]れかねない",
    examples: [
      { jp: "あんなにスピードを出[だ]しては、事故[じこ]を起[お]こしかねない。", en: "Driving that fast, he could well cause an accident." },
      { jp: "油断[ゆだん]していると、大[おお]きなミスをしかねない。", en: "If you let your guard down, you could make a major mistake." }
    ],
    notes:
      "Almost always used for negative potential outcomes. Contrast with 〜かねる ('cannot bring oneself to do', a different sense).",
    related: ["gn2-73", "gn2-93"]
  },

  {
    id: "gn2-73",
    point: "〜とみえる",
    reading: "〜とみえる",
    level: "N2",
    category: "Assumption",
    meaning: "It appears that; one can infer that",
    structure: "V普通形 + とみえる / N + だとみえる / Na-adj + だとみえる / I-adj + とみえる",
    explanation:
      "Expresses a strong inference based on observed evidence. The speaker, having noticed some sign, concludes that the stated situation is most likely the case.",
    formation:
      "V-た + とみえる: 起[お]きていたとみえる\nN + だとみえる: 雨[あめ]だとみえる\nI-adj + とみえる: 寒[さむ]いとみえる",
    examples: [
      { jp: "彼[かれ]は昨夜[さくや]遅[おそ]くまで起[お]きていたとみえる、目[め]が赤[あか]い。", en: "He appears to have stayed up late last night; his eyes are red." },
      { jp: "道[みち]が濡[ぬ]れているところを見[み]ると、夜中[よなか]に雨[あめ]が降[ふ]ったとみえる。", en: "Judging from the wet road, it seems to have rained during the night." }
    ],
    notes:
      "Inference is based on concrete perceptual evidence. More objective/literary than 〜みたいだ. Often paired with ところを見ると ('judging from').",
    related: ["gn2-74", "gn2-76"]
  },

  {
    id: "gn2-74",
    point: "〜にきまっている",
    reading: "〜にきまっている",
    level: "N2",
    category: "Assumption",
    meaning: "Is certain to; definitely; I'm sure",
    structure: "V普通形 + にきまっている / N + にきまっている / Na-adj + にきまっている / I-adj + にきまっている",
    explanation:
      "Expresses the speaker's confident assertion that something must be the case. Stronger than 〜だろう and slightly colloquial.",
    formation:
      "V辞書形 + にきまっている: 成功[せいこう]するにきまっている\nI-adj + にきまっている: 美[うつく]しいにきまっている\nN + にきまっている: 学生[がくせい]にきまっている",
    examples: [
      { jp: "あんなに努力[どりょく]しているのだから、彼[かれ]は成功[せいこう]するにきまっている。", en: "Since he is working that hard, he is sure to succeed." },
      { jp: "このケーキ、おいしいにきまっている。", en: "This cake is bound to be delicious." }
    ],
    notes:
      "Confident subjective judgment; colloquial. The more formal written equivalent is 〜に違いない or 〜に相違ない.",
    related: ["gn2-75", "gn2-76"]
  },

  {
    id: "gn2-75",
    point: "〜に相違ない",
    reading: "〜にそういない",
    level: "N2",
    category: "Assumption",
    meaning: "There is no doubt that; certainly",
    structure: "V普通形 + に相違ない / N + である + に相違ない / Na-adj + である + に相違ない / I-adj + に相違ない",
    explanation:
      "A formal written-style assertion of near-certainty based on reasoning or evidence. Used in investigative, legal, news, and academic registers.",
    formation:
      "N + である + に相違ない: 筆跡[ひっせき]であるに相違ない\nV-た + に相違ない: 降[ふ]ったに相違ない\nI-adj + に相違ない: 大[おお]きいに相違ない",
    examples: [
      { jp: "これが彼[かれ]の筆跡[ひっせき]であるに相違[そうい]ない。", en: "There is no doubt that this is his handwriting." },
      { jp: "被害[ひがい]は甚大[じんだい]であるに相違[そうい]ない。", en: "The damage must surely be enormous." }
    ],
    notes:
      "Highly formal and written. Equivalent to 〜に違いない in meaning but stiffer. Use 〜にきまっている for spoken confidence.",
    related: ["gn2-74", "gn2-76"]
  },

  {
    id: "gn2-76",
    point: "〜に違いない",
    reading: "〜にちがいない",
    level: "N2",
    category: "Assumption",
    meaning: "There is no doubt that; surely; definitely",
    structure: "V普通形 + に違いない / N + に違いない / Na-adj + に違いない / I-adj + に違いない",
    explanation:
      "Expresses a strong conviction based on evidence or reasoning. Used in both speech and writing. Slightly less stiff than 〜に相違ない.",
    formation:
      "V辞書形 + に違いない: 嘘[うそ]に違いない\nN + に違いない: 学生[がくせい]に違いない\nI-adj + に違いない: 嬉[うれ]しいに違いない",
    examples: [
      { jp: "彼[かれ]の言[い]うことは嘘[うそ]に違[ちが]いない。", en: "There is no doubt that what he says is a lie." },
      { jp: "あの笑顔[えがお]を見[み]ると、本当[ほんとう]に嬉[うれ]しいに違[ちが]いない。", en: "Seeing that smile, she must be truly happy." }
    ],
    notes:
      "Conveys speaker certainty based on reasoning. Can occur with nouns directly (学生に違いない), unlike 〜に相違ない which requires である.",
    related: ["gn2-74", "gn2-75"]
  },

  // ───────────────────────────────────────────────────────────
  // PASSIVE / CAUSATIVE
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-77",
    point: "〜（さ）せられる (使役受身)",
    reading: "〜（さ）せられる",
    level: "N2",
    category: "Passive/Causative",
    meaning: "To be made to do something (causative-passive)",
    structure: "Godan V: V-せる + られる ( contracted: V-される形, e.g. 待たされる, 飲ませる→飲まされる) / Ichidan V & する・くる: V-させる + られる (e.g. 食べさせられる, させられる, こさせられる)",
    explanation:
      "Combines causative and passive: the subject is forced by someone else to do an action, often against their will. Frequently expresses a sense of coercion or inconvenience.",
    formation:
      "Godan: 飲[の]む → 飲[の]ませられる / 飲[の]まされる\nGodan: 待[ま]つ → 待[ま]たされる\nIchidan: 食[た]べる → 食[た]べさせられる\nする: する → させられる\nくる: くる → こさせられる",
    examples: [
      { jp: "子供[こども]の時[とき]、母[はは]にピアノを習[なら]わされた。", en: "When I was a child, my mother made me take piano lessons." },
      { jp: "社員[しゃいん]は会議[かいぎ]で長時間[ちょうじかん]立[た]たされた。", en: "Employees were made to stand for a long time at the meeting." }
    ],
    notes:
      "With godan verbs, the contracted form V-される (e.g. 飲まされる, 話される, 待たされる) is more colloquial than the full V-せられる. The subject is the person forced to act; the agent is marked by に.",
    related: ["gn2-78", "gn2-79"]
  },

  {
    id: "gn2-78",
    point: "〜（ら）れる (迷惑の受身 / 持ち主の受身)",
    reading: "〜（ら）れる",
    level: "N2",
    category: "Passive/Causative",
    meaning: "Adversative/suffering passive: one is adversely affected by someone's action",
    structure: "V-れる (godan) / V-られる (ichidan, する→される, くる→こられる); often with intransitive verbs or verbs whose agent acts on something belonging to the subject",
    explanation:
      "A passive construction in which the subject is not the direct patient but someone adversely affected by an event. Used especially with intransitive verbs (雨に降られる) or with verbs acting on someone's possessions (財布を盗まれる).",
    formation:
      "Intransitive V: 降[ふ]る → 降[ふ]られる (雨に降られる)\nTransitive V on possessor: 盗[ぬす]む → 盗[ぬす]まれる (財布[さいふ]を盗[ぬす]まれる)\n犬[いぬ]が死[し]ぬ → 犬[いぬ]に死[し]なれる",
    examples: [
      { jp: "朝[あさ]、早[はや]くに起[お]こされて、眠[ねむ]い。", en: "I was woken up early in the morning, so I'm sleepy." },
      { jp: "急[きゅう]に雨[あめ]に降[ふ]られて、服[ふく]が濡[ぬ]れてしまった。", en: "It suddenly rained on me and my clothes got wet." }
    ],
    notes:
      "Cannot be made into this adversative passive with verbs that already imply an undesirable event the subject cannot be 'further affected' by, nor for the speaker's own deliberate actions. Always carries nuance of annoyance or trouble.",
    related: ["gn2-77", "gn2-79"]
  },

  {
    id: "gn2-79",
    point: "〜（さ）せていただく",
    reading: "〜（さ）せていただく",
    level: "N2",
    category: "Passive/Causative",
    meaning: "Humbly receive permission to do; let me do (humble causative)",
    structure: "V-させて + いただく (causative form of V + いただく)",
    explanation:
      "A humble expression in which the speaker receives the favour of being allowed to perform an action. Common in business and formal settings to soften self-initiated actions and credit the listener (or a third party) with granting permission.",
    formation:
      "V-させて + いただく: 休[やす]ませていただく\nV-させて + いただく: 自己紹介[じこしょうかい]させていただく\nV-させて + いただけますか (request form)",
    examples: [
      { jp: "本日[ほんじつ]は休[やす]ませていただきます。", en: "Please allow me to take the day off today." },
      { jp: "まず、自己紹介[じこしょうかい]させていただきます。", en: "First, please allow me to introduce myself." }
    ],
    notes:
      "Highly polite/humble. Sometimes overused in business Japanese (the so-called させられる・させていただく problem). Pair with 〜ていただけますか to ask the listener's permission directly.",
    related: ["gn2-77", "gn2-82", "gn2-81"]
  },

  // ───────────────────────────────────────────────────────────
  // HONORIFIC
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-80",
    point: "お/ご〜になる (尊敬語)",
    reading: "お/ご〜になる",
    level: "N2",
    category: "Honorific",
    meaning: "Respectful (sonkeigo) pattern: someone of higher status does",
    structure: "お + V-ます形 (stem) + になる / ご + 漢語N + になる",
    explanation:
      "A productive respectful construction that elevates the subject's action. Used with和語 verbs by inserting お before the stem; with漢語 nouns by inserting ご. Apply only to actions of a respected party, never to one's own.",
    formation:
      "お + V-ます形 + になる: お帰[かえ]りになる\nお + V-ます形 + になる: 待[ま]ちになる\nご + 漢語N + になる: ご出張[しゅっちょう]になる\nご + 漢語N + になる: ご購入[こうにゅう]になる",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりました。", en: "The teacher has already gone home." },
      { jp: "社長[しゃちょう]は明日[あした]東京[とうきょう]へご出張[しゅっちょう]になります。", en: "The president will go to Tokyo on business tomorrow." }
    ],
    notes:
      "Do not use this construction for one's own actions or those of one's in-group when addressing an outsider. Some verbs (e.g. 行く, 来る, 言う, 食べる) prefer special尊敬語 verbs instead (いらっしゃる, おっしゃる, 召し上がる).",
    related: ["gn2-81", "gn2-82", "gn2-83"]
  },

  {
    id: "gn2-81",
    point: "お/ご〜する / 〜いたす (謙譲語)",
    reading: "お/ご〜する / 〜いたす",
    level: "N2",
    category: "Honorific",
    meaning: "Humble (kenjougo) pattern: I (or my in-group) do (for a respected party)",
    structure: "お + V-ます形 (stem) + する / ご + 漢語N + する / いたす (humble substitute for する)",
    explanation:
      "A humble construction that lowers the speaker's own action in order to elevate the listener or a respected third party. いたす is the humble equivalent of する and can replace する in ご〜する / お〜する patterns.",
    formation:
      "お + V-ます形 + する: お持[も]ちする\nお + V-ます形 + いたす: お持[も]ちいたす\nご + 漢語N + する: ご案内[あんない]する\nご + 漢語N + いたす: ご案内[あんない]いたす",
    examples: [
      { jp: "私[わたし]がご案内[あんない]いたします。", en: "I will show you around." },
      { jp: "後[のち]ほどお電話[でんわ]します。", en: "I will call you later." }
    ],
    notes:
      "Use only for the speaker's own actions or those of the speaker's in-group directed toward a respected party. With漢語 nouns the prefix is ご; with和語 verbs the prefix is お.",
    related: ["gn2-80", "gn2-82", "gn2-83"]
  },

  {
    id: "gn2-82",
    point: "〜ていただけますか / 〜ていただけませんか",
    reading: "〜ていただけますか / 〜ていただけませんか",
    level: "N2",
    category: "Honorific",
    meaning: "Could you please (do for me); would you kindly",
    structure: "V-て形 + いただけますか / V-て形 + いただけませんか (the latter is softer)",
    explanation:
      "A polite request pattern asking the listener to perform a favour for the speaker. The recipient of the favour is the speaker; the doer is the listener. いただけませんか is slightly more indirect and softer than いただけますか.",
    formation:
      "V-て + いただけますか: 開[あ]けていただけますか\nV-て + いただけませんか: 静[しず]かにしていただけませんか\n〜ていただけると助かります (even softer)",
    examples: [
      { jp: "窓[まど]を開[あ]けていただけますか。", en: "Could you please open the window?" },
      { jp: "少[すこ]し静[しず]かにしていただけませんか。", en: "Would you mind being a little quieter?" }
    ],
    notes:
      "Polite but assumes the listener is not greatly inconvenienced. For heavier requests add 〜ていただけないでしょうか or 〜ていただけるとありがたいのですが.",
    related: ["gn2-79", "gn2-81", "gn2-80"]
  },

  {
    id: "gn2-83",
    point: "特殊な尊敬語・謙譲語 (いらっしゃる、おっしゃる、ご覧になる、召し上がる、伺う、申し上げる、拝見する)",
    reading: "とくしゅなそんけいご・けんじょうご",
    level: "N2",
    category: "Honorific",
    meaning: "Special (suppletive) honorific and humble verbs that replace ordinary verbs entirely",
    structure: "Replace base verb: 行く/来る/いる → いらっしゃる・おいでになる; 言う → おっしゃる; 見る → ご覧[らん]になる; 食べる/飲む → 召[め]し上がる; する → なさる; 行く/来る → 参[まい]る (humble); 言う → 申[もう]す・申し上げる; 聞く/尋ねる → 伺[うかが]う; 会う → お目にかかる; 見る → 拝見[はいけん]する; 知る → 存[ぞん]じる",
    explanation:
      "Japanese has a set of suppletive verbs whose entire form replaces the everyday verb in honorific or humble contexts. They cannot be decomposed into お/ご〜する and must be learned individually.",
    formation:
      "尊敬: 行[い]く → いらっしゃる\n尊敬: 言[い]う → おっしゃる\n尊敬: 見[み]る → ご覧[らん]になる\n尊敬: 食[た]べる → 召[め]し上がる\n謙譲: 行[い]く → 参[まい]る\n謙譲: 言[い]う → 申[もう]し上[あ]げる\n謙譲: 聞[き]く → 伺[うかが]う\n謙譲: 会[あ]う → お目[め]にかかる\n謙譲: 見[み]る → 拝見[はいけん]する",
    examples: [
      { jp: "先生[せんせい]、明日[あした]の会議[かいぎ]にいらっしゃいますか。", en: "Professor, will you be attending tomorrow's meeting?" },
      { jp: "社長[しゃちょう]はこの絵[え]をご覧[らん]になりました。", en: "The president looked at this painting." }
    ],
    notes:
      "Special verbs take irregular conjugations: いらっしゃる/おっしゃる/なさる conjugate as 〜いらっしゃい, 〜おっしゃい, 〜なさい (not 〜り). Mixing suppletive verbs with お〜する (e.g. ×おいらっしゃる) is a common error to avoid.",
    related: ["gn2-80", "gn2-81", "gn2-82"]
  },

  // ───────────────────────────────────────────────────────────
  // PARTICLES
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-84",
    point: "〜こそ",
    reading: "〜こそ",
    level: "N2",
    category: "Particles",
    meaning: "Precisely; exactly; it is X that (emphatic focusing)",
    structure: "N + こそ / V-て形 + こそ (idiomatic: 'only by doing') / 助詞 + こそ (e.g. からこそ)",
    explanation:
      "An emphatic particle that singles out the preceding element as the truly important, decisive, or contrasting one. Often implies 'not anything else, but exactly this'.",
    formation:
      "N + こそ: 今[いま]こそ\nN + こそ: これこそ\nV-て + こそ: やってこそ\n〜から + こそ: 好[す]きだからこそ",
    examples: [
      { jp: "今[いま]こそ、挑戦[ちょうせん]する時[とき]だ。", en: "Now is precisely the time to take up the challenge." },
      { jp: "これこそ私[わたし]が探[さが]していた本[ほん]だ。", en: "This is exactly the book I was looking for." }
    ],
    notes:
      "Stronger than は as a topic marker because it asserts exclusivity. With から it means 'it is precisely because'. Often appears with 〜ば in 〜こそ〜ば for fixed expressions like 'あれこそこれば' (rare).",
    related: ["gn2-85", "gn2-86", "gn2-87"]
  },

  {
    id: "gn2-85",
    point: "〜さえ",
    reading: "〜さえ",
    level: "N2",
    category: "Particles",
    meaning: "Even; just; as little/much as",
    structure: "N + さえ / N + でさえ / V-ます形 (stem) + さえ + する/しない / I-adjく + さえ + ある/ない / Na-adjで + さえ + ある/ない",
    explanation:
      "Highlights an extreme or minimal case: 'even X' (when X is extreme) or 'just X is enough' (when combined with 〜ば). The form でさえ is preferred with nouns in formal contexts.",
    formation:
      "N + さえ: 名前[なまえ]さえ\nN + でさえ: 子供[こども]でさえ\nV-ます形 + さえ + する: 読[よ]みさえすれば\nI-adjく + さえ + ある: よくさえあれば",
    examples: [
      { jp: "子供[こども]でさえできる簡単[かんたん]な問題[もんだい]だ。", en: "It's such an easy problem that even a child can solve it." },
      { jp: "名前[なまえ]さえ書[か]けない。", en: "I can't even write my name." }
    ],
    notes:
      "Closely related to 〜すら (more formal/literary) and 〜も (neutral 'also/even'). In conditionals さえ〜ば conveys 'if only X'.",
    related: ["gn2-52", "gn2-86", "gn2-84"]
  },

  {
    id: "gn2-86",
    point: "〜すら",
    reading: "〜すら",
    level: "N2",
    category: "Particles",
    meaning: "Even (formal/literary); not even",
    structure: "N + すら / N + ですら / V-ます形 (stem) + すら + する/しない",
    explanation:
      "A formal, written-style equivalent of 〜さえ. Marks an extreme case, often in negative sentences to mean 'not even X'.",
    formation:
      "N + すら: 親[おや]すら\nN + ですら: 専家[せんか]ですら\nV-ます形 + すら + しない: 解[と]けすらしない",
    examples: [
      { jp: "親[おや]にすら相談[そうだん]しなかった。", en: "I did not even consult my parents." },
      { jp: "専家[せんか]ですら解[と]けない難問[なんもん]だ。", en: "It is a puzzle that even experts cannot solve." }
    ],
    notes:
      "More literary than さえ. In modern speech さえ is preferred; すら appears in essays, news, and novels. Often co-occurs with negatives.",
    related: ["gn2-85", "gn2-84", "gn2-87"]
  },

  {
    id: "gn2-87",
    point: "〜など / 〜なんて",
    reading: "〜など / 〜なんて",
    level: "N2",
    category: "Particles",
    meaning: "Things like; such as; (casual) the likes of (often with surprise or dismissal)",
    structure: "N + など / N + なんて (casual) / V普通形 + なんて (citation-like)",
    explanation:
      "Marks examples from a wider category, or expresses the speaker's mild surprise, dismissal, or devaluation of the cited item. なんて is the casual spoken counterpart of など.",
    formation:
      "N + など: 寿司[すし]やラーメンなど\nN + なんて (casual): 嘘[うそ]なんて\nV普通形 + なんて: 来[く]るなんて",
    examples: [
      { jp: "寿司[すし]やラーメンなどが好[す]きだ。", en: "I like things like sushi and ramen." },
      { jp: "彼[かれ]が嘘[うそ]をつくだなんて、信[しん]じられない。", en: "I can't believe that he would tell a lie." }
    ],
    notes:
      "など lists examples neutrally; なんて carries the speaker's affective stance (surprise, disdain, humility). など may attach also to verbs and adjectives in written style.",
    related: ["gn2-84", "gn2-85", "gn2-86"]
  },

  // ───────────────────────────────────────────────────────────
  // CONJUNCTIONS
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-88",
    point: "したがって",
    reading: "したがって",
    level: "N2",
    category: "Conjunctions",
    meaning: "Therefore; accordingly (formal logical consequence)",
    structure: "したがって + 文 (used at the head of a sentence to mark consequence)",
    explanation:
      "A formal written conjunction marking a logical conclusion that strictly follows from the preceding statement. Common in manuals, regulations, contracts, and academic writing.",
    formation:
      "文1。したがって、文2。\n[原因[げんいん]・条件[じょうけん]] + したがって + [結果[けっか]]",
    examples: [
      { jp: "この薬[くすり]は副作用[ふくさよう]がある。したがって、医師[いし]の指示[しじ]に従[したが]って服用[ふくよう]すること。", en: "This medicine has side effects. Accordingly, take it following the doctor's instructions." },
      { jp: "規則[きそく]が変更[へんこう]された。したがって、来年度[らいねんど]から新[あたら]しい手続[てつづ]きが必要[ひつよう]だ。", en: "The rules have been changed. Therefore, a new procedure will be required from next fiscal year." }
    ],
    notes:
      "Strictly logical consequence (closer to それゆえ / そのため) — stronger than だから or ですから. Not interchangeable with その結果 when the relation is causal in time rather than logical.",
    related: ["gn2-89", "gn2-90", "gn2-91"]
  },

  {
    id: "gn2-89",
    point: "すなわち",
    reading: "すなわち",
    level: "N2",
    category: "Conjunctions",
    meaning: "Namely; that is to say; in other words",
    structure: "すなわち + N / 文 (used to restate or define the preceding term)",
    explanation:
      "Introduces a definition, restatement, or paraphrase of what came immediately before. Signals that the following content makes the previous one explicit or concrete. Formal written register.",
    formation:
      "文1、すなわち文2。\nN1、すなわちN2。",
    examples: [
      { jp: "彼[かれ]は私[わたし]の母[はは]の弟[おとうと]、すなわち私[わたし]の叔父[おじ]です。", en: "He is my mother's younger brother, that is to say, my uncle." },
      { jp: "日本[にほん]の首都[しゅと]、すなわち東京[とうきょう]に住[す]んでいる。", en: "I live in Japan's capital, namely Tokyo." }
    ],
    notes:
      "More formal than つまり. Used when the speaker defines a term or supplies its concrete content. Sometimes functions like 'i.e.' in English writing.",
    related: ["gn2-88", "gn2-90", "gn2-91"]
  },

  {
    id: "gn2-90",
    point: "ただし",
    reading: "ただし",
    level: "N2",
    category: "Conjunctions",
    meaning: "However; provided that; note that (formal exception)",
    structure: "ただし + 文 (used at the head of a sentence to introduce an exception)",
    explanation:
      "Introduces a condition, restriction, or exception to a preceding statement. Commonly used in regulations, advertisements, and contracts to scope a claim.",
    formation:
      "文1。ただし、文2。\n[一般[いっぱん]的[てき]な条件[じょうけん]] + ただし + [例外[れいがい]・条件[じょうけん]]",
    examples: [
      { jp: "駐車[ちゅうしゃ]は無料[むりょう]です。ただし、２時間[じかん]以内[いない]に限[かぎ]る。", en: "Parking is free. However, it is limited to within two hours." },
      { jp: "全員[ぜんいん]参加[さんか]可能[かのう]。ただし、事前[じぜん]登録[とうろく]が必要[ひつよう]だ。", en: "Everyone may participate. Provided that, however, prior registration is required." }
    ],
    notes:
      "Tighter and more formal than しかし / けれども. It presupposes the preceding statement is broadly true and only carves out a specific exception or condition.",
    related: ["gn2-88", "gn2-89", "gn2-91"]
  },

  {
    id: "gn2-91",
    point: "なぜなら",
    reading: "なぜなら",
    level: "N2",
    category: "Conjunctions",
    meaning: "Because; the reason being (formal; reason follows)",
    structure: "なぜなら + 文 + からだ / ためだ (often with 〜からだ / 〜ためだ at the end of the explanation)",
    explanation:
      "Introduces the reason for a preceding statement in reverse order: the conclusion first, then 'because' followed by the reason. Formal and explanatory; the sentence typically ends with からだ, からです, or ためだ.",
    formation:
      "文1。なぜなら、文2 + からだ/ためだ。\n[結論[けつろん]] + なぜなら + [理由[りゆう]] + からだ。",
    examples: [
      { jp: "旅行[りょこう]は楽[たの]しい。なぜなら、新[あたら]しい発見[はっけん]があるからだ。", en: "Travel is enjoyable. The reason being, there are new discoveries." },
      { jp: "彼[かれ]を信[しん]じない。なぜなら、何度[なんど]も嘘[うそ]をついたからだ。", en: "I do not trust him. Because he has lied many times." }
    ],
    notes:
      "Distinct from 〜から / 〜ので, which put the reason before the conclusion. なぜなら reverses the order. Often paired with なぜなら〜からだ in formal essays and editorials.",
    related: ["gn2-88", "gn2-89", "gn2-90"]
  },

  // ───────────────────────────────────────────────────────────
  // MODIFIERS
  // ───────────────────────────────────────────────────────────

  {
    id: "gn2-92",
    point: "〜限りでは",
    reading: "〜かぎりでは",
    level: "N2",
    category: "Modifiers",
    meaning: "As far as I can; based on the scope of (my knowledge/observation)",
    structure: "Nの + 限りでは / V普通形 + 限りでは",
    explanation:
      "Limits the speaker's assertion to the range of their own knowledge, observation, or investigation. Implies 'within the limits of X, the case is Y'.",
    formation:
      "Nの + 限りでは: 私[わたし]の知[し]る限りでは\nV-た + 限りでは: 聞[き]いた限りでは\nV辞書形 + 限りでは: 見[み]る限りでは",
    examples: [
      { jp: "私[わたし]の知[し]る限[かぎ]りでは、彼[かれ]はまだ独身[どくしん]だ。", en: "As far as I know, he is still single." },
      { jp: "私[わたし]が聞[き]いた限[かぎ]りでは、会議[かいぎ]は延期[えんき]されたそうだ。", en: "As far as I have heard, the meeting has been postponed." }
    ],
    notes:
      "Always expresses the limit of the speaker's information; the main clause carries the assertion made within that scope. Often used to hedge statements about uncertain matters.",
    related: ["gn2-51", "gn2-73"]
  },

  {
    id: "gn2-93",
    point: "〜かねる",
    reading: "〜かねる",
    level: "N2",
    category: "Modifiers",
    meaning: "Cannot bring oneself to do; find it difficult to do (for social/psychological reasons)",
    structure: "V-ます形 (stem) + かねる",
    explanation:
      "Expresses that the speaker is reluctant or unable to do something despite being technically able. Used as a polite refusal in business Japanese and to convey psychological hesitation.",
    formation:
      "V-ます形 + かねる: 応[おう]じかねる\nV-ます形 + かねる: 決[き]めかねる\nV-ます形 + かねない: (negative potential: might happen)",
    examples: [
      { jp: "そのお願[ねが]いには応[おう]じかねます。", en: "I find it difficult to comply with that request." },
      { jp: "すぐに決[き]めかねている。", en: "I am unable to decide right away." }
    ],
    notes:
      "Do NOT confuse with 〜かねない ('might happen', negative possibility), which uses the same stem suffix but has opposite meaning. 〜かねる is polite refusal; 〜かねない is concern about an undesirable outcome.",
    related: ["gn2-72", "gn2-92"]
  },

  {
    id: "gn2-94",
    point: "〜きる / 〜きれない",
    reading: "〜きる / 〜きれない",
    level: "N2",
    category: "Modifiers",
    meaning: "To do completely / to be unable to do completely",
    structure: "V-ます形 (stem) + きる (do completely) / V-ます形 + きれない (cannot do completely)",
    explanation:
      "きる expresses bringing an action to completion or doing it thoroughly; きれない is its negative potential form, expressing that the action cannot be fully completed (often with quantities too large).",
    formation:
      "V-ます形 + きる: 認[みと]めきる\nV-ます形 + きる: 分[わ]かりきる\nV-ます形 + きれない: 読[よ]みきれない\nV-ます形 + きれない: 食[た]べきれない",
    examples: [
      { jp: "彼[かれ]は自分[じぶん]の失敗[しっぱい]を認[みと]めきった。", en: "He completely admitted his failure." },
      { jp: "この本[ほん]は面白[おもしろ]くて、読[よ]みきれないほど長[なが]い。", en: "This book is so interesting and so long that one cannot finish reading it." }
    ],
    notes:
      "Common fixed expressions: 眠りきらない ('not fully rested'), 信じきれない ('cannot fully believe'), 見きれない ('cannot finish watching'). The negative form きれない is far more frequent than the affirmative.",
    related: ["gn2-93", "gn2-95"]
  },

  {
    id: "gn2-95",
    point: "〜っぽい",
    reading: "〜っぽい",
    level: "N2",
    category: "Modifiers",
    meaning: "-ish; tends to be; has a quality of",
    structure: "N + っぽい / V-ます形 (stem) + っぽい / I-adj + っぽい",
    explanation:
      "Forms adjectives that describe a tendency or quality resembling the noun/verb/adjective stem. With nouns it means 'has the quality of / -ish'; with verb stems it means 'tends to do'; with i-adjectives it means 'easily becomes'.",
    formation:
      "N + っぽい: 子供[こども]っぽい\nN + っぽい: 女[おんな]っぽい\nV-ます形 + っぽい: 忘[わす]れっぽい\nI-adj + っぽい: 黒[くろ]っぽい",
    examples: [
      { jp: "彼[かれ]はまだ子供[こども]っぽいところがある。", en: "He still has childish sides." },
      { jp: "最近[さいきん]忘[わす]れっぽくなった。", en: "Lately I've become forgetful." }
    ],
    notes:
      "Conjugates as an i-adjective (っぽく, っぽかった). With nouns of people (子供, 女, 男) it can sound mildly pejorative. With verb stems like 忘れる, 怒る (怒りっぽい), 飽きる (飽きっぽい), it expresses a habitual tendency.",
    related: ["gn2-94", "gn2-67"]
  },

  {
    id: "gn2-96",
    point: "〜てたまらない",
    reading: "〜てたまらない",
    level: "N2",
    category: "Modifiers",
    meaning: "...ing unbearably; ...ing so much I can't stand it",
    structure: "V-て形 + たまらない / Na-adjで + たまらない / I-adjくて + たまらない / N-たい + てたまらない",
    explanation:
      "Expresses an emotion or sensation that has reached an unbearable degree. Used for the speaker's own feelings; with third-person subjects, the form must be 〜てたまらないようだ / 〜てたまらなかったと言っていた.",
    formation:
      "V-て + たまらない: 渇[かわ]いてたまらない\nI-adjくて + たまらない: 暑[あつ]くてたまらない\nNa-adjで + たまらない: 残念[ざんねん]でたまらない\nV-たい + て + たまらない: 食[た]べたくてたまらない",
    examples: [
      { jp: "喉[のど]が渇[かわ]いてたまらない。", en: "I'm thirsty unbearably." },
      { jp: "暑[あつ]くてたまらない。", en: "It's so hot I can't stand it." }
    ],
    notes:
      "Cannot be used directly for another person's internal state (use 〜ようだ / 〜そうだ). Equivalent to 〜てしょうがない / 〜てしかたない, both slightly more colloquial.",
    related: ["gn2-97", "gn2-72"]
  },

  {
    id: "gn2-97",
    point: "〜てならない",
    reading: "〜てならない",
    level: "N2",
    category: "Modifiers",
    meaning: "Cannot help but feel; ...ing so much that I can't contain it",
    structure: "V-て形 + ならない / Na-adjで + ならない / I-adjくて + ならない / V-たい + て + ならない",
    explanation:
      "Expresses a feeling or thought that arises involuntarily and cannot be suppressed. Like 〜てたまらない, restricted to the speaker's own feelings; for others, use 〜ようだ, 〜そうだ, 〜と言っていた.",
    formation:
      "V-て + ならない: 悔[くや]しくてならない\nNa-adjで + ならない: 心配[しんぱい]でならない\nI-adjくて + ならない: 嬉[うれ]しくてならない\nV-たい + て + ならない: 見[み]たくてならない",
    examples: [
      { jp: "故郷[こきょう]の母[はは]が心配[しんぱい]でならない。", en: "I can't help worrying about my mother in my hometown." },
      { jp: "新[あたら]しい仕事[しごと]が始[はじ]まって、不安[ふあん]でならない。", en: "My new job has started and I can't help feeling anxious." }
    ],
    notes:
      "Subtly different from 〜てたまらない: 〜てならない implies the feeling wells up involuntarily, often with a wistful or anxious nuance, whereas 〜てたまらない stresses the unbearable intensity. With verbs of desire (〜たい), both mean 'want to do so badly'.",
    related: ["gn2-96", "gn2-72"]
  },

  {
    id: "gn2-98",
    point: "〜というものだ",
    reading: "〜というものだ",
    level: "N2",
    category: "Modifiers",
    meaning: "It is truly the case that; that is what X really is",
    structure: "V普通形 + というものだ / N + というものだ / Na-adj + というものだ / I-adj + というものだ",
    explanation:
      "Used to assert the essential nature or truth of something, often as a generalization or judgment. Conveys a sense of 'that's how it really is' or 'that's what is meant by X'.",
    formation:
      "V普通形 + というものだ: 報[むく]われるというものだ\nN + というものだ: 愛[あい]というものだ\nI-adj + というものだ: 大変[たいへん]というものだ",
    examples: [
      { jp: "努力[どりょく]すれば報[むく]われるというものだ。", en: "It is the case that effort will be rewarded." },
      { jp: "親[おや]の愛[あい]とは、無条件[むじょうけん]で子[こ]を支[ささ]えるというものだ。", en: "Parental love is, in essence, supporting one's child unconditionally." }
    ],
    notes:
      "Often expresses a value judgment or normative statement, sometimes with a didactic tone. Differs from 〜ということだ ('they say that / it means that'), which reports hearsay or paraphrases rather than asserting essence.",
    related: ["gn2-99", "gn2-68"]
  },

  {
    id: "gn2-99",
    point: "〜にすぎない",
    reading: "〜にすぎない",
    level: "N2",
    category: "Modifiers",
    meaning: "Is nothing more than; is merely; is only",
    structure: "V普通形 + にすぎない / N + にすぎない / Na-adj + にすぎない / I-adj + にすぎない",
    explanation:
      "Limits the significance or extent of something, indicating that it is no more than what is stated. Often used to scale down expectations or to make a modest assessment.",
    formation:
      "N + にすぎない: 一部[いちぶ]にすぎない\nV普通形 + にすぎない: 始[はじ]まったにすぎない\nI-adj + にすぎない: 高[たか]いにすぎない",
    examples: [
      { jp: "これが一部[いちぶ]にすぎない。", en: "This is only a part of it." },
      { jp: "彼[かれ]はただの助手[じょしゅ]にすぎない。", en: "He is merely an assistant." }
    ],
    notes:
      "Stronger and more formal than 〜だけだ. Often used to dismiss overestimation. Common in news and academic writing.",
    related: ["gn2-98", "gn2-68"]
  },

  {
    id: "gn2-100",
    point: "〜やら〜やら",
    reading: "〜やら〜やら",
    level: "N2",
    category: "Modifiers",
    meaning: "Things like A and B (and so on); A and B (intermingled, with a feeling of complexity)",
    structure: "N + やら + N + やら / V辞書形 + やら + V辞書形 + やら / I-adj + やら + I-adj + やら / Na-adj + やら + Na-adj + やら",
    explanation:
      "Lists two (or more) representative items of the same part of speech, suggesting a jumbled or overwhelming mixture. Unlike や, やら carries the speaker's sense of variety, confusion, or emotional load.",
    formation:
      "N + やら + N + やら: 本[ほん]やらノートやら\nV辞書形 + やら + V辞書形 + やら: 泣[な]くやら笑[わら]うやら\nI-adj + やら + I-adj + やら: 嬉[うれ]しいやら恥[は]ずかしいやら",
    examples: [
      { jp: "机[つくえ]の上[うえ]には本[ほん]やらノートやらが散[ち]らかっている。", en: "Books and notebooks and such are scattered on the desk." },
      { jp: "嬉[うれ]しいやら恥[は]ずかしいやら、複雑[ふくざつ]な気持[きも]ちだ。", en: "I feel both happy and embarrassed — a complicated mixture of emotions." }
    ],
    notes:
      "Items joined by やら must be of the same part of speech (N-N, V-V, Adj-Adj). The pattern often conveys the speaker's sense of being overwhelmed by many things at once. Slightly colloquial; common in spoken narratives.",
    related: ["gn2-87", "gn2-98"]
  }
];
