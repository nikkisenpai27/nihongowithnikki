import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// See src/lib/types.ts and furigana.tsx.
//
// Source: Minna no Nihongo Shokyuu 2, Lessons 26-38 (mapped here as 1-13).
// JLPT N4 grammar points (~36 points across 13 lessons).

export const grammarN4_1: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // LESSON 1 — 〜たり〜たりします / 〜て・〜ないで (means & without doing)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-001",
    point: "〜たり〜たりします",
    reading: "〜tari 〜tari shimasu",
    level: "N4",
    category: "Verb forms",
    lesson: 1,
    meaning: "Listing actions (doing things like A, B, etc.)",
    structure: "V(た形)り、V(た形)り します",
    explanation:
      "Used to list two or more actions in no particular order, implying there are other actions as well. Verbs take the た-form with り attached. The sentence ends with します (or する) to wrap up the list.",
    formation:
      "V(た形) + り\nV(た形) + り + します\n例: 食べる → 食べたり\n読む → 読んだり\nする → したり\n来る → 来たり",
    examples: [
      { jp: "週末[しゅうまつ]は本[ほん]を読[よ]んだり、テレビを見[み]たりします。", en: "On weekends I do things like reading books and watching TV." },
      { jp: "日曜日[にちようび]は掃除[そうじ]したり、洗濯[せんたく]したりします。", en: "On Sundays I do things like cleaning and laundry." },
      { jp: "夜[よる]はお茶[ちゃ]を飲[の]んだり、音楽[おんがく]を聞[き]いたりします。", en: "At night I do things like drinking tea and listening to music." }
    ],
    notes:
      "The list is non-exhaustive; it implies the speaker does other things too. Nouns and い-adjectives can also use this pattern (Nだったり、Adjかったり). The final verb (します/する) agrees with tense.",
    related: ["g-n4-002", "g-n4-003"]
  },

  {
    id: "g-n4-002",
    point: "〜て (means/method)",
    reading: "〜te",
    level: "N4",
    category: "Verb forms",
    lesson: 1,
    meaning: "By means of / by doing (method of action)",
    structure: "V(て形) + V(移動)",
    explanation:
      "Describes the means or method by which an action (usually a movement verb) is performed. The て-form of a verb is followed by a motion verb like 行く, 来る, or 帰る. It can also attach to nouns with particles (Nで).",
    formation:
      "V(て形) + 行く / 来る / 帰る\n例: 歩く → 歩いて行く\n走る → 走って来る\n乗る → 乗って帰る\nN で + V (e.g., バスで行く)",
    examples: [
      { jp: "会社[かいしゃ]まで歩[ある]いて行[い]きます。", en: "I go to the office on foot. (go by walking)" },
      { jp: "駅[えき]からタクシーに乗[の]って帰[かえ]りました。", en: "I came home by taking a taxi from the station." },
      { jp: "ペンで名前[なまえ]を書[か]いてください。", en: "Please write your name with a pen." }
    ],
    notes:
      "When using a noun as the means, use N で (e.g., バスで行く). When using a verb, use the て-form. Common movement verbs: 行く, 来る, 帰る, 戻る.",
    related: ["g-n4-001", "g-n4-003"]
  },

  {
    id: "g-n4-003",
    point: "〜ないで (without doing)",
    reading: "〜naide",
    level: "N4",
    category: "Verb forms",
    lesson: 1,
    meaning: "Doing something without doing X (absence of action)",
    structure: "V(ない形) + で + V(主文)",
    explanation:
      "Indicates that an action is performed without doing another action first. The negative form ない (with で instead of ない) modifies the main verb. It emphasizes the absence of an expected or contrasting action.",
    formation:
      "V(ない形) + で\n例: 食べる → 食べないで\n飲む → 飲まないで\nする → しないで\n来る → 来ないで",
    examples: [
      { jp: "朝[あさ]ごはんを食[た]べないで学校[がっこう]へ行[い]きました。", en: "I went to school without eating breakfast." },
      { jp: "靴[くつ]を脱[ぬ]がないで部屋[へや]に入[はい]らないでください。", en: "Please don't enter the room without taking off your shoes." },
      { jp: "辞書[じしょ]を使[つか]わないで、手紙[てがみ]を書[か]きました。", en: "I wrote the letter without using a dictionary." }
    ],
    notes:
      "〜ないで differs from 〜なくて: 〜ないで means 'without doing' (manner), while 〜なくて means 'not...and/because' (reason). This pattern is reviewed in Lesson 8 alongside obligation forms.",
    related: ["g-n4-001", "g-n4-002", "g-n4-020"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 2 — 〜てから / 〜たあとで / 〜前に (temporal sequence)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-004",
    point: "〜てから",
    reading: "〜te kara",
    level: "N4",
    category: "Sequence",
    lesson: 2,
    meaning: "After doing X (then does Y)",
    structure: "V(て形) + から + V(主文)",
    explanation:
      "Indicates that one action is completed before the next begins, with a clear sequential order. The て-form + から emphasizes that the first action must finish before the second starts. Often used for habitual or necessary sequences.",
    formation:
      "V(て形) + から\n例: 食べる → 食べてから\n飲む → 飲んでから\nする → してから\n来る → 来てから",
    examples: [
      { jp: "ごはんを食[た]べてから、薬[くすり]を飲[の]みます。", en: "After eating, I take my medicine." },
      { jp: "仕事[しごと]が終[お]わってから、飲[の]みに行[い]きます。", en: "After work finishes, I'll go out drinking." },
      { jp: "手[て]を洗[あら]ってから、料理[りょうり]します。", en: "After washing my hands, I cook." }
    ],
    notes:
      "〜てから stresses completion and order. It differs from 〜たあとで in that 〜てから focuses on the immediate sequence of actions performed by the same subject. Cannot be used with nouns directly (use Nのあとで instead).",
    related: ["g-n4-005", "g-n4-006"]
  },

  {
    id: "g-n4-005",
    point: "〜たあとで",
    reading: "〜ta ato de",
    level: "N4",
    category: "Sequence",
    lesson: 2,
    meaning: "After doing X / after X happened",
    structure: "V(た形) + あとで / N の + あとで",
    explanation:
      "Indicates that an action occurs after another action or event has taken place. The た-form + あとで emphasizes the time after completion. Unlike 〜てから, it can be used with nouns (Nのあとで) and focuses on 'after' as a time point.",
    formation:
      "V(た形) + あとで\nN の + あとで\n例: 食べる → 食べたあとで\n見る → 見たあとで\n仕事 → 仕事のあとで\n会議 → 会議のあとで",
    examples: [
      { jp: "映画[えいが]を見[み]たあとで、食事[しょくじ]しました。", en: "After watching the movie, we had a meal." },
      { jp: "仕事[しごと]が終[お]わったあとで、家[いえ]に帰[かえ]ります。", en: "After work is over, I'll go home." },
      { jp: "食事[しょくじ]のあとで、少[すこ]し散歩[さんぽ]します。", en: "After the meal, I take a short walk." }
    ],
    notes:
      "〜たあとで is more about 'after a point in time' and is softer/less strict than 〜てから. It works with both verbs and nouns. Often interchangeable with 〜てから for verbs, but 〜てから implies a tighter causal sequence.",
    related: ["g-n4-004", "g-n4-006"]
  },

  {
    id: "g-n4-006",
    point: "〜前に",
    reading: "〜mae ni",
    level: "N4",
    category: "Sequence",
    lesson: 2,
    meaning: "Before doing X",
    structure: "V(辞書形) + 前[まえ]に / N の + 前[まえ]に",
    explanation:
      "Indicates that an action takes place before another action or event. The verb must be in the dictionary form (辞書形) before 前[まえ]に. With nouns, use Nの前[まえ]に. This is the temporal opposite of 〜たあとで.",
    formation:
      "V(辞書形) + 前に\nN の + 前に\n例: 食べる → 食べる前に\n寝る → 寝る前に\n仕事 → 仕事の前に\n会議 → 会議の前に",
    examples: [
      { jp: "寝[ね]る前[まえ]に、歯[は]を磨[みが]きます。", en: "Before going to bed, I brush my teeth." },
      { jp: "食[た]べる前[まえ]に、手[て]を洗[あら]います。", en: "Before eating, I wash my hands." },
      { jp: "会議[かいぎ]の前[まえ]に、資料[しりょう]をチェックします。", en: "Before the meeting, I check the materials." }
    ],
    notes:
      "The verb before 前[まえ]に must be in the plain dictionary form, NOT the て-form or た-form. Contrast with 〜たあとで (after). Both 前[まえ]に and あとで can take N の.",
    related: ["g-n4-004", "g-n4-005"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 3 — 〜てあげる / 〜てくれる / 〜てもらう (giving/receiving actions)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-007",
    point: "〜てあげる",
    reading: "〜te ageru",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 3,
    meaning: "I (or someone on my side) do a favor for someone else",
    structure: " giver が receiver に V(て形) + あげる",
    explanation:
      "Used when the speaker (or someone on the speaker's side) performs an action as a favor for someone else. The giver is the subject marked by が/は, and the receiver is marked by に. Careful: using this toward a superior can sound condescending.",
    formation:
      " giver が receiver に V(て形) + あげる\n例: 貸す → 貸してあげる\n買う → 買ってあげる\n作る → 作ってあげる\n教える → 教えてあげる",
    examples: [
      { jp: "私[わたし]は友達[ともだち]に本[ほん]を貸[か]してあげました。", en: "I lent a book to my friend." },
      { jp: "母[はは]の誕生日[たんじょうび]にケーキを作[つく]ってあげました。", en: "I made a cake for my mother's birthday." },
      { jp: "私[わたし]は妹[いもうと]の宿題[しゅくだい]を教[おし]えてあげました。", en: "I helped my younger sister with her homework." }
    ],
    notes:
      "Avoid using 〜てあげる toward superiors (use 〜てさしあげる instead) as it can sound arrogant — implying you are bestowing a favor. The receiver (に) cannot be the speaker or someone on the speaker's in-group when the giver is outside.",
    related: ["g-n4-008", "g-n4-009"]
  },

  {
    id: "g-n4-008",
    point: "〜てくれる",
    reading: "〜te kureru",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 3,
    meaning: "Someone does a favor for me (or my in-group)",
    structure: " giver が (receiver に) V(て形) + くれる",
    explanation:
      "Used when someone else performs an action as a favor directed toward the speaker or the speaker's in-group. The giver is the subject; the receiver (often the speaker, hence omitted) is the one who benefits. The direction of the favor is 'toward me'.",
    formation:
      " giver が (私に) V(て形) + くれる\n例: 買う → 買ってくれる\n直す → 直してくれる\n編む → 編んでくれる\n撮る → 撮ってくれる",
    examples: [
      { jp: "友達[ともだち]は私[わたし]にプレゼントを買[か]ってくれました。", en: "My friend bought me a present." },
      { jp: "先生[せんせい]は私[わたし]の作文[さくぶん]を直[なお]してくれました。", en: "The teacher corrected my composition for me." },
      { jp: "母[はは]はセーターを編[あ]んでくれました。", en: "My mother knitted a sweater for me." }
    ],
    notes:
      "When the giver is a superior, use 〜てくださる (honorific). The receiver (the speaker) is often omitted because it is understood. This pattern expresses gratitude that the action was done for the speaker.",
    related: ["g-n4-007", "g-n4-009"]
  },

  {
    id: "g-n4-009",
    point: "〜てもらう",
    reading: "〜te morau",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 3,
    meaning: "I have someone do a favor for me (receive an action)",
    structure: " receiver が giver に V(て形) + もらう",
    explanation:
      "Used when the speaker (or someone) receives a favor done by someone else. The receiver is the subject marked by が/は, and the doer is marked by に. It emphasizes the receiver's perspective of obtaining the favor, often implying gratitude.",
    formation:
      " receiver が giver に V(て形) + もらう\n例: 撮る → 撮ってもらう\n教える → 教えてもらう\n持つ → 持ってもらう\n直す → 直してもらう",
    examples: [
      { jp: "私[わたし]は友達[ともだち]に写真[しゃしん]を撮[と]ってもらいました。", en: "I had my friend take a picture of me." },
      { jp: "私[わたし]は先生[せんせい]に日本語[にほんご]を教[おし]えてもらいました。", en: "I had the teacher teach me Japanese." },
      { jp: "私[わたし]は山田[やまだ]さんに荷物[にもつ]を持[も]ってもらいました。", en: "I had Yamada carry my luggage for me." }
    ],
    notes:
      "The subject is the receiver (the one who benefits), marked by が/は. The doer is marked by に. With superiors, use 〜ていただく (humble). This form focuses on receiving the favor rather than who gives it.",
    related: ["g-n4-007", "g-n4-008"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 4 — 〜ている / 〜てある (states)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-010",
    point: "〜ている (ongoing action)",
    reading: "〜te iru",
    level: "N4",
    category: "Verb forms",
    lesson: 4,
    meaning: "Currently doing / ongoing action in progress",
    structure: "V(て形) + いる",
    explanation:
      "Describes an action that is currently in progress or ongoing at the moment of speech. Used with durative verbs (verbs describing continuous actions). Equivalent to the English present continuous 'is ~ing'.",
    formation:
      "V(て形) + いる\n例: 読む → 読んでいる\n食べる → 食べている\nする → している\n来る → 来ている",
    examples: [
      { jp: "私[わたし]は今[いま]本[ほん]を読[よ]んでいます。", en: "I am reading a book now." },
      { jp: "子供[こども]が公園[こうえん]で遊[あそ]んでいます。", en: "Children are playing in the park." },
      { jp: "雨[あめ]が降[ふ]っています。", en: "It is raining." }
    ],
    notes:
      "Only durative verbs (e.g., 読む, 食べる, する) use 〜ている for ongoing action. Punctual verbs (e.g., 知る, 結婚する, 住む) use 〜ている for resultative states (see g-n4-011). Polite form is 〜ています.",
    related: ["g-n4-011", "g-n4-012"]
  },

  {
    id: "g-n4-011",
    point: "〜ている (resultative state)",
    reading: "〜te iru",
    level: "N4",
    category: "Verb forms",
    lesson: 4,
    meaning: "State resulting from a past action (continuing state)",
    structure: "V(て形) + いる (punctual verbs)",
    explanation:
      "With punctual verbs (verbs describing instantaneous changes), 〜ている expresses a state that resulted from a past action and continues to the present. Examples include 知る (know), 住む (live/reside), 結婚する (be married).",
    formation:
      "V(て形) + いる (punctual/state verbs)\n例: 知る → 知っている (know)\n住む → 住んでいる (live)\n結婚する → 結婚している (be married)\n持つ → 持っている (have)",
    examples: [
      { jp: "私[わたし]は東京[とうきょう]に住[す]んでいます。", en: "I live in Tokyo." },
      { jp: "私[わたし]はこの会社[かいしゃ]を知[し]っています。", en: "I know this company." },
      { jp: "田中[たなか]さんは結婚[けっこん]しています。", en: "Tanaka is married." }
    ],
    notes:
      "The verb type determines meaning: durative verbs → ongoing action (g-n4-010); punctual verbs → resultative state. English often translates this with simple present ('I live') rather than continuous.",
    related: ["g-n4-010", "g-n4-012"]
  },

  {
    id: "g-n4-012",
    point: "〜てある",
    reading: "〜te aru",
    level: "N4",
    category: "Verb forms",
    lesson: 4,
    meaning: "State resulting from someone's intentional action",
    structure: "N が V(て形) + ある (transitive verbs)",
    explanation:
      "Describes a state that exists as the result of someone's intentional action, focusing on the resulting state of an object. Used only with transitive verbs. The object is marked by が (not を), and the agent (doer) is usually omitted.",
    formation:
      "N が V(て形) + ある (transitive verbs)\n例: 開ける → 開けてある\n飾る → 飾ってある\n書く → 書いてある\n冷やす → 冷やしてある",
    examples: [
      { jp: "窓[まど]が開[あ]けてあります。", en: "The window has been opened (and is still open)." },
      { jp: "机[つくえ]の上[うえ]に花[はな]が飾[かざ]ってあります。", en: "Flowers have been placed on the desk." },
      { jp: "冷蔵庫[れいぞうこ]にビールが冷[ひ]やしてあります。", en: "Beer has been chilled in the refrigerator." }
    ],
    notes:
      "Contrast with 〜ている: 〜てある focuses on the object's state (Nが...てある), implying someone did it intentionally. 〜ている (resultative) focuses on the subject's continuous state. Only transitive verbs take 〜てある.",
    related: ["g-n4-010", "g-n4-011"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 5 — 〜ましょうか / 〜てあげましょうか (offering)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-013",
    point: "〜ましょうか",
    reading: "〜mashou ka",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 5,
    meaning: "Shall I do X? (offering assistance)",
    structure: "V(ます形 stem) + ましょうか",
    explanation:
      "Used to offer to do something for someone, politely asking 'Shall I do X?'. The verb takes the ます-stem + ましょうか. It shows willingness to help and invites the listener's confirmation.",
    formation:
      "V(ます形 stem) + ましょうか\n例: 持つ → 持ちましょうか\n閉める → 閉めましょうか\n入れる → 入れましょうか\n切る → 切りましょうか",
    examples: [
      { jp: "荷物[にもつ]を持[も]ちましょうか。", en: "Shall I carry your luggage?" },
      { jp: "窓[まど]を閉[し]めましょうか。", en: "Shall I close the window?" },
      { jp: "お茶[ちゃ]を入[い]れましょうか。", en: "Shall I pour some tea?" }
    ],
    notes:
      "A positive response can be 'ええ、お願[ねが]いします' (Yes, please). A negative response is 'いえ、けっこうです' (No, thank you). More polite offering forms use 〜てあげましょうか (see g-n4-014).",
    related: ["g-n4-014", "g-n4-007"]
  },

  {
    id: "g-n4-014",
    point: "〜てあげましょうか",
    reading: "〜te agemashou ka",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 5,
    meaning: "Shall I do X for you? (offering a favor action)",
    structure: "V(て形) + あげましょうか",
    explanation:
      "Combines the て-form with あげる (to give a favor) in the volitional question form. It offers to perform a favor action for someone, more explicitly framing the action as a favor given to the listener. Slightly more concrete than 〜ましょうか.",
    formation:
      "V(て形) + あげましょうか\n例: 撮る → 撮ってあげましょうか\n手伝う → 手伝ってあげましょうか\n送る → 送ってあげましょうか\n貸す → 貸してあげましょうか",
    examples: [
      { jp: "私[わたし]が写真[しゃしん]を撮[と]ってあげましょうか。", en: "Shall I take a picture for you?" },
      { jp: "手伝[てつだ]ってあげましょうか。", en: "Shall I help you?" },
      { jp: "駅[えき]まで送[おく]ってあげましょうか。", en: "Shall I take you to the station?" }
    ],
    notes:
      "Like 〜てあげる, this can sound slightly presumptuous toward superiors; in formal contexts, use 〜てさしあげましょうか. It emphasizes that the action is a favor being given to the listener.",
    related: ["g-n4-013", "g-n4-007"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 6 — 〜たら / 〜ば / 〜ば...いい (conditionals)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-015",
    point: "〜たら",
    reading: "〜tara",
    level: "N4",
    category: "Conditionals",
    lesson: 6,
    meaning: "If/when X happens (then Y)",
    structure: "V(た形) + ら / Adj(過去) + ら / N だったら",
    explanation:
      "A general-purpose conditional meaning 'if/when X happens, then Y'. Formed by attaching ら to the past tense form. It can express both one-time conditions ('if X') and temporal sequences ('when X'). The most versatile conditional form.",
    formation:
      "V(た形) + ら\nい-Adj(かった) + ら\nな-Adj(だった) + ら\nN(だった) + ら\n例: 降る → 降ったら\n安い → 安かったら\n暇だ → 暇だったら\n学生だ → 学生だったら",
    examples: [
      { jp: "雨[あめ]が降[ふ]ったら、出[で]かけません。", en: "If it rains, I won't go out." },
      { jp: "春[はる]になったら、桜[さくら]が咲[さ]きます。", en: "When spring comes, the cherry blossoms bloom." },
      { jp: "安[やす]かったら、買[か]います。", en: "If it's cheap, I'll buy it." }
    ],
    notes:
      "〜たら is the most flexible conditional; it works with all verb and adjective types and can express both factual and hypothetical conditions. The main clause can be a request, intention, or statement. Contrast with 〜ば (g-n4-016) which is more restrictive.",
    related: ["g-n4-016", "g-n4-017"]
  },

  {
    id: "g-n4-016",
    point: "〜ば",
    reading: "〜ba",
    level: "N4",
    category: "Conditionals",
    lesson: 6,
    meaning: "If X (conditional, general/hypothetical)",
    structure: "V(仮定形) + ば / Adj(仮定形) + ば",
    explanation:
      "A conditional form meaning 'if X, then Y', attached to the hypothetical (仮定形) form. It tends to focus on the condition itself rather than a specific event. The main clause cannot be a direct request or intention when the condition is uncertain.",
    formation:
      "V(仮定形) + ば\nい-Adj(〜けれ) + ば\nな-Adj なら(ば)\nN なら(ば)\n例: 降る → 降れば\n行く → 行けば\nいい → よければ\n暇だ → 暇なら(ば)",
    examples: [
      { jp: "天気[てんき]が良[よ]ければ、海[うみ]へ行[い]きます。", en: "If the weather is good, I'll go to the sea." },
      { jp: "雨[あめ]が降[ふ]れば、試合[しあい]は中止[ちゅうし]です。", en: "If it rains, the match is canceled." },
      { jp: "暇[ひま]であれば、映画[えいが]を見[み]に行[い]きませんか。", en: "If you're free, would you like to go see a movie?" }
    ],
    notes:
      "〜ば emphasizes the condition and is often used for general truths or hypotheticals. It cannot be used for requests/intentions in the main clause if the condition is a specific future event (use 〜たら for that). The ば-form of ある is あれば.",
    related: ["g-n4-015", "g-n4-017"]
  },

  {
    id: "g-n4-017",
    point: "〜ば...いい",
    reading: "〜ba...ii",
    level: "N4",
    category: "Conditionals",
    lesson: 6,
    meaning: "Should do X / it would be good to do X (advice)",
    structure: "V(仮定形) + ば + いい(です)",
    explanation:
      "Expresses advice or recommendation: 'it would be good if you did X' or 'you should do X'. The ば-form is followed by いい (or いいです in polite form). Used to suggest the best course of action.",
    formation:
      "V(仮定形) + ば + いい(です)\n例: 食べる → 食べればいい\n聞く → 聞けばいい\n休む → 休めばいい\n行く → 行けばいい",
    examples: [
      { jp: "もっと野菜[やさい]を食[た]べればいいです。", en: "You should eat more vegetables." },
      { jp: "分[わ]からなければ、先生[せんせい]に聞[き]けばいいです。", en: "If you don't understand, you should ask the teacher." },
      { jp: "疲[つか]れたら、休[やす]めばいいです。", en: "If you're tired, you should rest." }
    ],
    notes:
      "A softer way to give advice compared to imperative forms. The casual form is 〜ばいい; polite is 〜ばいいです. A negative variant 〜なければいい means 'it would be good if you didn't'.",
    related: ["g-n4-015", "g-n4-016"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 7 — 〜ても / 〜て (concession & reason)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-018",
    point: "〜ても",
    reading: "〜te mo",
    level: "N4",
    category: "Conditionals",
    lesson: 7,
    meaning: "Even if X (Y still happens / despite X)",
    structure: "V(て形) + も / Adj(て形) + も",
    explanation:
      "Expresses a concessive condition: 'even if X happens, Y still occurs'. It indicates that the condition does not change the outcome. The て-form + も attaches to verbs, adjectives, and nouns.",
    formation:
      "V(て形) + も\nい-Adj(〜くて) + も\nな-Adj(〜で) + も\nN(〜で) + も\n例: 降る → 降っても\n読む → 読んでも\n高い → 高くても\n学生だ → 学生でも",
    examples: [
      { jp: "雨[あめ]が降[ふ]っても、行[い]きます。", en: "Even if it rains, I'll go." },
      { jp: "何度[なんど]読[よ]んでも、面白[おもしろ]いです。", en: "No matter how many times I read it, it's interesting." },
      { jp: "高[たか]くても、買[か]います。", en: "Even if it's expensive, I'll buy it." }
    ],
    notes:
      "With question words (何, だれ, いつ), it means 'no matter what/who/when': 何度[なんど]読[よ]んでも = 'no matter how many times I read'. Noun/な-adj use 〜でも. Contrast with 〜たら which is a one-time conditional.",
    related: ["g-n4-015", "g-n4-019"]
  },

  {
    id: "g-n4-019",
    point: "〜て (cause/reason)",
    reading: "〜te",
    level: "N4",
    category: "Verb forms",
    lesson: 7,
    meaning: "Reason for apology, thanks, or request",
    structure: "Sentence(理由) + て / V(て形) + [apology/thanks/request]",
    explanation:
      "The て-form can express reason or cause, typically followed by expressions of apology (すみません), gratitude (ありがとう), or a request. The て-clause gives the cause, and the main clause expresses the speaker's response to it.",
    formation:
      "Reason(て形) + すみません / ありがとう / 〜てください\n例: 忙しい → 忙しくてすみません\n遅れる → 遅れてすみません\n来る → 来てくれてありがとう\n危ない → 危なくて、入らないでください",
    examples: [
      { jp: "すみません、少[すこ]し疲[つか]れて。", en: "I'm sorry, I'm a bit tired." },
      { jp: "来[き]てくれてありがとう。", en: "Thank you for coming." },
      { jp: "危[あぶ]なくて、入[はい]らないでください。", en: "It's dangerous, so please don't enter." }
    ],
    notes:
      "When て expresses reason, it is often followed by emotional responses (apology, thanks) or requests. It cannot be followed by volitional/intentional main clauses. This differs from 〜て (means/method) and 〜て (sequence) which are structural, not causal.",
    related: ["g-n4-018", "g-n4-002"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 8 — 〜ないで / 〜なくてもいい / 〜なければならない (obligation)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-020",
    point: "〜ないで (obligation context)",
    reading: "〜naide",
    level: "N4",
    category: "Obligation",
    lesson: 8,
    meaning: "Without doing X (review with obligation set)",
    structure: "V(ない形) + で + V(主文)",
    explanation:
      "Reviewed in Lesson 8 alongside obligation forms. Indicates an action performed without doing another. The negative ない form with で modifies the main verb, emphasizing the absence of an action that might otherwise be expected.",
    formation:
      "V(ない形) + で\n例: 持つ → 持たないで\n書く → 書かないで\n言う → 言わないで\n休む → 休まないで",
    examples: [
      { jp: "傘[かさ]を持[も]たないで、出[で]かけました。", en: "I went out without bringing an umbrella." },
      { jp: "名前[なまえ]を書[か]かないで、提出[ていしゅつ]しないでください。", en: "Please don't submit it without writing your name." },
      { jp: "先生[せんせい]に言[い]わないで、休[やす]みました。", en: "I took a day off without telling the teacher." }
    ],
    notes:
      "Same pattern as g-n4-003, reviewed here alongside 〜なくてもいい and 〜なければならない to contrast obligation/exemption. A command form 〜ないでください means 'please don't do X'.",
    related: ["g-n4-003", "g-n4-021", "g-n4-022"]
  },

  {
    id: "g-n4-021",
    point: "〜なくてもいい",
    reading: "〜nakutemo ii",
    level: "N4",
    category: "Obligation",
    lesson: 8,
    meaning: "Don't have to do X / no need to do X",
    structure: "V(ない形) + くても + いい(です)",
    explanation:
      "Expresses exemption from obligation: 'it is fine even if you don't do X' or 'you don't have to do X'. The negative ない form (with くても) plus いい indicates that not doing the action is acceptable.",
    formation:
      "V(ない形) + くてもいい(です)\n例: 来る → 来なくてもいい\n働く → 働かなくてもいい\n急ぐ → 急がなくてもいい\n行く → 行かなくてもいい",
    examples: [
      { jp: "今日[きょう]は来[こ]なくてもいいです。", en: "You don't have to come today." },
      { jp: "土曜日[どようび]は働[はたら]かなくてもいいです。", en: "You don't have to work on Saturday." },
      { jp: "急[いそ]がなくてもいいですよ。", en: "You don't have to hurry." }
    ],
    notes:
      "The opposite of 〜なければならない (must). Past form: 〜なくてもよかった (didn't have to). Polite variant: 〜なくてもよろしいです. Used to reassure or grant permission not to do something.",
    related: ["g-n4-020", "g-n4-022"]
  },

  {
    id: "g-n4-022",
    point: "〜なければならない",
    reading: "〜nakereba naranai",
    level: "N4",
    category: "Obligation",
    lesson: 8,
    meaning: "Must do X / have to do X (obligation)",
    structure: "V(ない形) + ければ + ならない / なりません",
    explanation:
      "Expresses strong obligation: 'must do X' or 'have to do X'. The negative conditional 〜なければ ('if not') plus ならない ('won't do/become') literally means 'if you don't do X, it won't work', i.e., you must do it.",
    formation:
      "V(ない形) + ければ + ならない / なりません\n例: 起きる → 起きなければならない\n勉強する → 勉強しなければならない\n飲む → 飲まなければならない\n行く → 行かなければならない",
    examples: [
      { jp: "明日[あした]は早[はや]く起[お]きなければなりません。", en: "I must wake up early tomorrow." },
      { jp: "学生[がくせい]はまじめに勉強[べんきょう]しなければなりません。", en: "Students must study seriously." },
      { jp: "薬[くすり]を飲[の]まなければならないです。", en: "I must take the medicine." }
    ],
    notes:
      "Colloquial variant: 〜なきゃいけない / 〜なきゃならない. Another common form: 〜なければいけない (interchangeable). The opposite is 〜なくてもいい (don't have to). Polite form ends with なりません.",
    related: ["g-n4-020", "g-n4-021"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 9 — 〜かもしれません / 〜でしょう / 〜でしょうか (conjecture)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-023",
    point: "〜かもしれません",
    reading: "〜kamo shiremasen",
    level: "N4",
    category: "Conjecture",
    lesson: 9,
    meaning: "Might / perhaps / maybe (uncertain possibility)",
    structure: "V(普通形) + かもしれない / N + かもしれない / Adj + かもしれない",
    explanation:
      "Expresses uncertainty or possibility: 'might', 'perhaps', 'maybe'. The degree of certainty is roughly 50%. It attaches to the plain form of verbs, nouns, and adjectives. More uncertain than 〜でしょう.",
    formation:
      "V(普通形) + かもしれません\nN + かもしれません\nい-Adj(普通形) + かもしれません\nな-Adj(普通形) + かもしれません\n例: 降る → 降るかもしれません\n学生だ → 学生かもしれません\n寒い → 寒いかもしれません",
    examples: [
      { jp: "明日[あした]は雨[あめ]が降[ふ]るかもしれません。", en: "It might rain tomorrow." },
      { jp: "彼[かれ]は来[こ]ないかもしれません。", en: "He might not come." },
      { jp: "これは本物[ほんもの]ではないかもしれません。", en: "This might not be genuine." }
    ],
    notes:
      "Polite form: かもしれません / かもしれませんです. Casual: かもしれない. The certainty is lower than 〜でしょう (~70%) and 〜にちがいない (~90%). It can be used for both present and future conjecture.",
    related: ["g-n4-024", "g-n4-025"]
  },

  {
    id: "g-n4-024",
    point: "〜でしょう",
    reading: "〜deshou",
    level: "N4",
    category: "Conjecture",
    lesson: 9,
    meaning: "Probably / I think (probability conjecture)",
    structure: "V(普通形) + でしょう / N + でしょう / Adj + でしょう",
    explanation:
      "Expresses a probable guess based on reasoning or evidence: 'probably', 'I suppose'. The degree of certainty is around 70%, higher than 〜かもしれません. It attaches to plain forms of verbs, nouns, and adjectives.",
    formation:
      "V(普通形) + でしょう\nN + でしょう\nい-Adj(普通形) + でしょう\nな-Adj(普通形 / な) + でしょう\n例: 晴れる → 晴れるでしょう\n学生だ → 学生でしょう\n寒い → 寒いでしょう",
    examples: [
      { jp: "明日[あした]は晴[は]れるでしょう。", en: "It will probably be sunny tomorrow." },
      { jp: "彼[かれ]はもうすぐ着[つ]くでしょう。", en: "He will probably arrive soon." },
      { jp: "この料理[りょうり]は美味[おい]しいでしょう。", en: "This dish is probably delicious." }
    ],
    notes:
      "〜でしょう replaces です/ます to express the speaker's reasoned guess. Casual form: 〜だろう. It is also used to seek confirmation ('..., right?') with rising intonation. Higher certainty than 〜かもしれません.",
    related: ["g-n4-023", "g-n4-025"]
  },

  {
    id: "g-n4-025",
    point: "〜でしょうか",
    reading: "〜deshou ka",
    level: "N4",
    category: "Conjecture",
    lesson: 9,
    meaning: "I wonder if...? (polite conjecture question)",
    structure: "V(普通形) + でしょうか / N + でしょうか",
    explanation:
      "A polite form used to express wondering or conjecture as a question: 'I wonder if X?'. It softens a direct question and conveys uncertainty. It is NOT a simple yes/no question but rather the speaker's musing about something.",
    formation:
      "V(普通形) + でしょうか\nN + でしょうか\nい-Adj + でしょうか\n例: なる → なるでしょうか\n来る → 来るでしょうか\n学生だ → 学生でしょうか\nいい → いいでしょうか",
    examples: [
      { jp: "明日[あした]の天気[てんき]はどうなるでしょうか。", en: "I wonder what tomorrow's weather will be like." },
      { jp: "彼[かれ]はいつ来[く]るでしょうか。", en: "I wonder when he will come." },
      { jp: "これでいいでしょうか。", en: "I wonder if this is okay." }
    ],
    notes:
      "Unlike 〜ですか (direct question), 〜でしょうか conveys the speaker's uncertainty or politeness. It is often used in self-directed wondering. It can also be a very polite way to ask someone a question.",
    related: ["g-n4-023", "g-n4-024"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 10 — 〜そうだ / 〜ようだ (appearance & conjecture)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-026",
    point: "〜そうだ (appearance)",
    reading: "〜sou da",
    level: "N4",
    category: "Conjecture",
    lesson: 10,
    meaning: "Looks like / appears to be (visual appearance)",
    structure: "V(ます形 stem) + そうだ / Adj(語幹) + そうだ",
    explanation:
      "Expresses appearance based on visual impression: 'looks like', 'seems'. Attached to the stem of verbs (ます-form without ます) or the stem of adjectives. It describes how something looks at the moment of observation.",
    formation:
      "V(ます形 stem) + そうだ\nい-Adj(語幹) + そうだ\nな-Adj(語幹) + そうだ\n例: 降る → 降りそうだ\n美味しい → 美味しそうだ\n面白い → 面白そうだ\n立派だ → 立派そうだ",
    examples: [
      { jp: "このケーキは美味[おい]しそうですね。", en: "This cake looks delicious, doesn't it?" },
      { jp: "雨[あめ]が降[ふ]りそうです。", en: "It looks like it's going to rain." },
      { jp: "あの映画[えいが]は面白[おもしろ]そうです。", en: "That movie looks interesting." }
    ],
    notes:
      "Based on direct visual impression, not on reasoning. Exceptions: いい → よさそう, ない → なさそう. Negative form: V + そうにない ('unlikely to'). Contrast with 〜ようだ (g-n4-027) which is based on reasoning/evidence.",
    related: ["g-n4-027", "g-n4-028"]
  },

  {
    id: "g-n4-027",
    point: "〜ようだ (conjecture)",
    reading: "〜you da",
    level: "N4",
    category: "Conjecture",
    lesson: 10,
    meaning: "Seems like / it appears that (reasoned conjecture)",
    structure: "V(普通形) + ようだ / N の + ようだ / Adj(普通形) + ようだ",
    explanation:
      "Expresses a reasoned conjecture based on evidence or observation: 'it seems that', 'it appears that'. Unlike 〜そうだ (visual), 〜ようだ is based on the speaker's judgment from sensory evidence or circumstances.",
    formation:
      "V(普通形) + ようだ\nN の + ようだ\nい-Adj(普通形) + ようだ\nな-Adj な + ようだ\n例: 学生だ → 学生のようだ\n降った → 降ったようだ\n腐る → 腐っているようだ",
    examples: [
      { jp: "彼[かれ]は学生[がくせい]のようです。", en: "It seems he is a student." },
      { jp: "道路[どうろ]が濡[ぬ]れているところを見[み]ると、夜[よる]に雨[あめ]が降[ふ]ったようです。", en: "Judging from the wet road, it seems it rained during the night." },
      { jp: "この肉[にく]は腐[くさ]っているようです。", en: "This meat seems to be rotten." }
    ],
    notes:
      "Based on evidence/reasoning, not just appearance. Polite form: 〜ようです. Often introduced with 〜ところを見ると ('judging from'). Contrast with 〜そうだ (visual impression) and 〜らしい (typical/hearsay, g-n4-029).",
    related: ["g-n4-026", "g-n4-028", "g-n4-029"]
  },

  {
    id: "g-n4-028",
    point: "〜ようだ (comparison/simile)",
    reading: "〜you da",
    level: "N4",
    category: "Modifying",
    lesson: 10,
    meaning: "Like X / as if X (simile / comparison)",
    structure: "N の + ようだ / V(普通形) + ようだ",
    explanation:
      "Used as a simile or comparison: 'like X', 'as if X'. The noun + のようだ pattern expresses resemblance. With verbs, it expresses 'as if / as though'. Often paired with まるで ('as if') for emphasis.",
    formation:
      "N の + ようだ\nまるで + N のようだ\nV(普通形) + ようだ\n例: 夢 → 夢のようだ\n日本人 → 日本人のようだ\n魚 → 魚のような形",
    examples: [
      { jp: "彼[かれ]は日本人[にほんじん]のように日本語[にほんご]が上手[じょうず]です。", en: "He speaks Japanese well, like a Japanese person." },
      { jp: "まるで夢[ゆめ]のようです。", en: "It's like a dream." },
      { jp: "魚[さかな]のような形[かたち]をしています。", en: "It has a fish-like shape." }
    ],
    notes:
      "When modifying a noun: NのようなN (e.g., 夢[ゆめ]のような日[ひ] 'a dream-like day'). When modifying a verb: Nのように (e.g., 魚[さかな]のように泳[およ]ぐ 'swim like a fish'). まるで intensifies the simile.",
    related: ["g-n4-026", "g-n4-027"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 11 — 〜らしい / 〜って (typical & hearsay)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-029",
    point: "〜らしい",
    reading: "〜rashii",
    level: "N4",
    category: "Conjecture",
    lesson: 11,
    meaning: "Seems/typical of X (conjecture or typical quality)",
    structure: "V(普通形) + らしい / N + らしい",
    explanation:
      "Has two uses: (1) conjecture based on objective evidence ('it seems that'), and (2) typical quality ('typical of X', 'X-like'). With nouns, Nらしい means 'typical of N'. With verbs/sentences, it expresses hearsay-like conjecture.",
    formation:
      "N + らしい (typical of N)\nV(普通形) + らしい (seems that)\nい-Adj(普通形) + らしい\nな-Adj + らしい\n例: 男 → 男らしい\n春 → 春らしい\n病気だ → 病気らしい\n来る → 来るらしい",
    examples: [
      { jp: "彼[かれ]は本当[ほんとう]に男[おとこ]らしいです。", en: "He is really manly. (typical of a man)" },
      { jp: "今日[きょう]は春[はる]らしい天気[てんき]です。", en: "Today is typical spring weather." },
      { jp: "田中[たなか]さんは病気[びょうき]らしいです。", en: "It seems Tanaka is sick." }
    ],
    notes:
      "Two distinct uses: (a) Nらしい = 'typical/characteristic of N' (男[おとこ]らしい, 春[はる]らしい); (b) sentence + らしい = 'seems that' based on evidence. Unlike 〜ようだ, 〜らしい can be based on hearsay or typical patterns.",
    related: ["g-n4-027", "g-n4-030"]
  },

  {
    id: "g-n4-030",
    point: "〜って (hearsay/quotation)",
    reading: "〜tte",
    level: "N4",
    category: "Quotation",
    lesson: 11,
    meaning: "I heard that / they say that (casual hearsay)",
    structure: "Sentence + って",
    explanation:
      "A casual spoken form used to quote hearsay or someone's words: 'I heard that...', 'they say that...'. It is a colloquial replacement for 〜と聞[き]く or 〜と言[い]う. Often used at the end of a sentence for reported speech.",
    formation:
      "Sentence(普通形) + って\n例: 雨だ → 雨だって\n来ない → 来ないって\n学生だ → 学生だって\n行く → 行くって",
    examples: [
      { jp: "天気予報[てんきよほう]によると、明日[あした]は雨[あめ]だって。", en: "According to the weather forecast, they say it will rain tomorrow." },
      { jp: "田中[たなか]さんは来[こ]ないって。", en: "They say Tanaka won't come." },
      { jp: "あの人[ひと]は先生[せんせい]だって。", en: "I heard that person is a teacher." }
    ],
    notes:
      "Casual spoken form; in polite speech use 〜そうです (hearsay) or 〜と聞[き]きました. 〜って can also mark a topic (similar to 〜というのは / 〜とは) or quote someone directly. It is informal and conversational.",
    related: ["g-n4-029", "g-n4-023"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 12 — 〜はずです / 〜はずがありません / 〜はずだった (expectation)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-031",
    point: "〜はずです",
    reading: "〜hazu desu",
    level: "N4",
    category: "Modifying",
    lesson: 12,
    meaning: "Should be / is expected to be (logical expectation)",
    structure: "V(普通形) + はずだ / N の + はずだ / Adj + はずだ",
    explanation:
      "Expresses a strong expectation based on logic, reason, or prior knowledge: 'should be', 'is supposed to be'. The speaker believes something is the case based on evidence. The certainty is high but not absolute.",
    formation:
      "V(普通形) + はずだ\nN の + はずだ\nい-Adj(普通形) + はずだ\nな-Adj な + はずだ\n例: 着く → 着くはずだ\n簡単だ → 簡単なはずだ\n来た → 来たはずだ",
    examples: [
      { jp: "彼[かれ]はもうすぐ着[つ]くはずです。", en: "He should arrive soon." },
      { jp: "この問題[もんだい]は簡単[かんたん]なはずです。", en: "This problem should be easy." },
      { jp: "電車[でんしゃ]はもう来[き]たはずです。", en: "The train should have already arrived." }
    ],
    notes:
      "Based on logical reasoning, not mere conjecture. Polite form: 〜はずです. Negative: 〜はずがありません ('no way', g-n4-032). Past form: 〜はずだった ('was supposed to', g-n4-033). Stronger than 〜でしょう.",
    related: ["g-n4-032", "g-n4-033", "g-n4-024"]
  },

  {
    id: "g-n4-032",
    point: "〜はずがありません",
    reading: "〜hazu ga arimasen",
    level: "N4",
    category: "Modifying",
    lesson: 12,
    meaning: "No way / cannot be (strong negative expectation)",
    structure: "V(普通形) + はずがない / N の + はずがない",
    explanation:
      "The negative form of 〜はずです, expressing strong denial: 'there is no way that...', 'it cannot be that...'. The speaker confidently believes something is NOT the case based on logic or evidence.",
    formation:
      "V(普通形) + はずがない\nN の + はずがない\nい-Adj(普通形) + はずがない\nな-Adj な + はずがない\n例: する → するはずがない\n美味しい → 美味しくないはずがない\n知る → 知らないはずがない",
    examples: [
      { jp: "彼[かれ]がそんなことをするはずがありません。", en: "There's no way he would do such a thing." },
      { jp: "この料理[りょうり]が美味[おい]しくないはずがありません。", en: "There's no way this dish isn't delicious." },
      { jp: "私[わたし]は知[し]らないはずがありません。", en: "There's no way I wouldn't know." }
    ],
    notes:
      "Stronger and more logical than simple negative. Polite: 〜はずがありません. Casual: 〜はずがない. It expresses confident denial based on reasoning, not mere disbelief.",
    related: ["g-n4-031", "g-n4-033"]
  },

  {
    id: "g-n4-033",
    point: "〜はずだった",
    reading: "〜hazu datta",
    level: "N4",
    category: "Modifying",
    lesson: 12,
    meaning: "Was supposed to (past expectation, often unfulfilled)",
    structure: "V(普通形) + はずだった / N の + はずだった",
    explanation:
      "The past form of 〜はずです: 'was supposed to be/do X'. Often implies the expectation was not met (the reality differed from what was expected). Used to express that something should have happened but didn't.",
    formation:
      "V(普通形) + はずだった\nN の + はずだった\nい-Adj(普通形) + はずだった\nな-Adj な + はずだった\n例: 来る → 来るはずだった\n会議だ → 会議のはずだった\n簡単だ → 簡単なはずだった",
    examples: [
      { jp: "彼[かれ]は来[く]るはずだったのに、来[き]ませんでした。", en: "He was supposed to come, but he didn't." },
      { jp: "会議[かいぎ]は昨日[きのう]のはずだった。", en: "The meeting was supposed to be yesterday." },
      { jp: "試合[しあい]は午後[ごご]からのはずだった。", en: "The match was supposed to start in the afternoon." }
    ],
    notes:
      "Often paired with のに ('even though') to express disappointment or surprise that the expectation was not met. Polite form: 〜はずでした. Negative past: 〜はずではなかった ('was not supposed to').",
    related: ["g-n4-031", "g-n4-032"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 13 — 〜ようにする / 〜ようになる / 〜ように (effort & change)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-034",
    point: "〜ようにする",
    reading: "〜you ni suru",
    level: "N4",
    category: "Verb forms",
    lesson: 13,
    meaning: "Try to / make sure to / make an effort to do X",
    structure: "V(辞書形 / ない形) + ようにする",
    explanation:
      "Expresses the speaker's intention or effort to make something happen: 'try to do X', 'make sure to do X'. The verb before ようにする is in the dictionary form (affirmative) or ない-form (negative). It shows deliberate effort over time.",
    formation:
      "V(辞書形) + ようにする\nV(ない形) + ようにする\n例: 運動する → 運動するようにする\n寝る → 寝るようにする\n忘れる → 忘れないようにする\n遅刻する → 遅刻しないようにする",
    examples: [
      { jp: "毎日[まいにち]運動[うんどう]するようにしています。", en: "I make sure to exercise every day." },
      { jp: "忘[わす]れないように、メモします。", en: "I take notes so I won't forget." },
      { jp: "早[はや]く寝[ね]るようにします。", en: "I'll try to go to bed early." }
    ],
    notes:
      "Polite progressive 〜ようにしています emphasizes ongoing habit/effort. The negative form (Vない + ようにする) means 'try not to do X'. Differs from 〜つもり (intention) which is more about a plan, while 〜ようにする is about effort.",
    related: ["g-n4-035", "g-n4-036"]
  },

  {
    id: "g-n4-035",
    point: "〜ようになる",
    reading: "〜you ni naru",
    level: "N4",
    category: "Verb forms",
    lesson: 13,
    meaning: "Come to be able to / reach the point of doing X (change)",
    structure: "V(辞書形 / 可能形 / ない形) + ようになる",
    explanation:
      "Expresses a change in state or ability over time: 'come to be able to do X', 'reach the point of doing X'. Used with potential verbs (可能形) to show acquisition of ability, or with dictionary/ない forms to show a new habit or state.",
    formation:
      "V(可能形) + ようになる (come to be able to)\nV(辞書形) + ようになる (come to do)\nV(ない形) + ようになる (come not to do)\n例: 話せる → 話せるようになる\n泳げる → 泳げるようになる\n食べる → 食べるようになる",
    examples: [
      { jp: "日本語[にほんご]が話[はな]せるようになりました。", en: "I have come to be able to speak Japanese." },
      { jp: "少[すこ]しずつ泳[およ]げるようになりました。", en: "I've gradually come to be able to swim." },
      { jp: "子供[こども]が一人[ひとり]で着替[きが]えられるようになりました。", en: "The child has come to be able to dress by himself." }
    ],
    notes:
      "Focuses on a gradual change to a new state/ability. Often used with potential verbs (可能形) for 'come to be able to'. Negative: Vない + ようになる = 'come not to do X' (e.g., 食[た]べないようになった 'came to not eat').",
    related: ["g-n4-034", "g-n4-036"]
  },

  {
    id: "g-n4-036",
    point: "〜ように (purpose/so that)",
    reading: "〜you ni",
    level: "N4",
    category: "Modifying",
    lesson: 13,
    meaning: "So that / in order that (purpose or desired result)",
    structure: "V(辞書形 / ない形) + ように + V(主文)",
    explanation:
      "Expresses purpose or a desired result: 'so that X', 'in order that X'. The verb before ように is in the dictionary form (affirmative) or ない-form (negative). The main clause describes the action taken to achieve that purpose.",
    formation:
      "V(辞書形) + ように + V(主文)\nV(ない形) + ように + V(主文)\n例: 見える → 見えるように座る\n忘れる → 忘れないようにメモする\n分かる → 分かるように説明する",
    examples: [
      { jp: "よく見[み]えるように、前[まえ]に座[すわ]りました。", en: "I sat in front so I could see well." },
      { jp: "忘[わす]れないように、メモしておきます。", en: "I'll take notes so I won't forget." },
      { jp: "子供[こども]にも分[わ]かるように、簡単[かんたん]に説明[せつめい]しました。", en: "I explained it simply so that even children could understand." }
    ],
    notes:
      "The verb before ように cannot be volitional or past. The main clause describes an action the speaker controls. Contrast with 〜ために (purpose with volitional verbs): 〜ように is used with potential/involuntary verbs (見える, 分かる, 忘れる).",
    related: ["g-n4-034", "g-n4-035"]
  }
];

// ───────────────────────────────────────────────────────────
// Lesson titles for Minna no Nihongo Shokyuu 2 (Lessons 1-13,
// corresponding to book Lessons 26-38).
// ───────────────────────────────────────────────────────────

export const minnaN4LessonTitles: { lesson: number; title: string; topic: string }[] = [
  { lesson: 1, title: "〜たり〜たりします / 〜て・〜ないで", topic: "Listing actions; means/method; without doing" },
  { lesson: 2, title: "〜てから / 〜たあとで / 〜前に", topic: "Temporal sequence: after doing, before doing" },
  { lesson: 3, title: "〜てあげる / 〜てくれる / 〜てもらう", topic: "Giving and receiving of actions/favors" },
  { lesson: 4, title: "〜ている / 〜てある", topic: "Resultative states and resulting states" },
  { lesson: 5, title: "〜ましょうか / 〜てあげましょうか", topic: "Offering assistance politely" },
  { lesson: 6, title: "〜たら / 〜ば / 〜ば...いい", topic: "Conditional forms: if/when, should" },
  { lesson: 7, title: "〜ても / 〜て (reason)", topic: "Concessive 'even if'; reason for apology/thanks/request" },
  { lesson: 8, title: "〜ないで / 〜なくてもいい / 〜なければならない", topic: "Obligation and exemption: without, don't have to, must" },
  { lesson: 9, title: "〜かもしれません / 〜でしょう / 〜でしょうか", topic: "Conjecture: might, probably, I wonder" },
  { lesson: 10, title: "〜そうだ / 〜ようだ", topic: "Appearance 'looks like' and conjecture/seems/comparison" },
  { lesson: 11, title: "〜らしい / 〜って", topic: "Typical/seems; hearsay and quotation" },
  { lesson: 12, title: "〜はずです / 〜はずがありません / 〜はずだった", topic: "Expectation: should be, no way, was supposed to" },
  { lesson: 13, title: "〜ようにする / 〜ようになる / 〜ように", topic: "Effort, change, and purpose: try to, come to be able to, so that" }
];
