import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.
//
// This file covers Minna no Nihongo Shokyuu 1, Lessons 14-25 (JLPT N5).
// IDs continue sequentially from g-n5-041 (lessons 1-13 live in grammar.ts).

export const grammarN5_2: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // LESSON 14 — て形 (te-form conjugation)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-041",
    point: "て形",
    reading: "te-kei",
    level: "N5",
    category: "Verb forms",
    lesson: 14,
    meaning: "Te-form (intermediate connective form of verbs)",
    structure: "Verb → te-form (group-dependent conjugation)",
    explanation:
      "The te-form is a versatile intermediate verb form used to connect clauses, make requests (〜てください), describe ongoing actions (〜ている), and form many compound patterns. Conjugation depends on the verb's group: Group I changes the final kana, Group II drops る, and Group III has fixed irregular forms.",
    formation:
      "Group I: varies by final kana (see g-n5-042)\nGroup II: drop る → て (食[た]べる → 食[た]べて)\nGroup III: する → して, 来[く]る → 来[き]て",
    examples: [
      { jp: "私[わたし]は朝[あさ]起[お]きて、顔[かお]を洗[あら]います。", en: "I wake up in the morning and wash my face." },
      { jp: "これを見[み]てください。", en: "Please look at this." },
      { jp: "窓[まど]を開[あ]けて、空[そら]を見[み]ます。", en: "I open the window and look at the sky." }
    ],
    notes:
      "The te-form is not a complete predicate; it must be followed by another verb or a particle pattern such as ください, いる, から, or も. Many N4 patterns build on the te-form.",
    related: ["g-n5-042", "g-n5-043", "g-n5-044", "g-n5-045", "g-n5-046"]
  },

  {
    id: "g-n5-042",
    point: "五段動詞のて形",
    reading: "godan dōshi no te-kei",
    level: "N5",
    category: "Verb forms",
    lesson: 14,
    meaning: "Te-form of Group I (godan / u-verbs)",
    structure: "Group I verb: change final う-row kana per rule",
    explanation:
      "Group I (五段 / u-verb) te-form conjugation is determined by the verb's final kana. The final sound shifts to an い-row or ん-row variant plus て or で. Memorize the eight endings: く, ぐ, う, つ, る, ぬ, ぶ, む, す.",
    formation:
      "く → いて (書[か]く → 書[か]いて)\nぐ → いで (泳[およ]ぐ → 泳[およ]いで)\nう / つ / る → って (会[あ]う → 会[あ]って, 待[ま]つ → 待[ま]って, 帰[かえ]る → 帰[かえ]って)\nぬ / ぶ / む → んで (死[し]ぬ → 死[し]んで, 遊[あそ]ぶ → 遊[あそ]んで, 飲[の]む → 飲[の]んで)\nす → して (話[はな]す → 話[はな]して)",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]本[ほん]を書[か]いています。", en: "I write a book every day." },
      { jp: "友達[ともだち]と公園[こうえん]で遊[あそ]んでいます。", en: "I am playing with my friend in the park." },
      { jp: "母[はは]に電話[でんわ]をかけて、話[はな]しました。", en: "I called my mother and talked to her." }
    ],
    notes:
      "There is one important exception: 行[い]く → 行[い]って (not 行[い]いて). The う, つ, る endings share the って suffix; the ぬ, ぶ, む endings share the んで suffix.",
    related: ["g-n5-041", "g-n5-043", "g-n5-044"]
  },

  {
    id: "g-n5-043",
    point: "一段動詞のて形",
    reading: "ichidan dōshi no te-kei",
    level: "N5",
    category: "Verb forms",
    lesson: 14,
    meaning: "Te-form of Group II (ichidan / ru-verbs)",
    structure: "Group II verb: drop る → add て",
    explanation:
      "Group II (一段 / ru-verb) te-form conjugation is simple: drop the final る and add て. This group includes verbs such as 食[た]べる, 見[み]る, 起[お]きる, 寝[ね]る, and 教[おし]える.",
    formation:
      "Drop る → て\n食[た]べる → 食[た]べて\n見[み]る → 見[み]て\n起[お]きる → 起[お]きて\n教[おし]える → 教[おし]えて\n寝[ね]る → 寝[ね]て",
    examples: [
      { jp: "私[わたし]はお腹[なか]が空[す]いたので、りんごを食[た]べています。", en: "I am eating an apple because I am hungry." },
      { jp: "テレビを見[み]てから、寝[ね]ます。", en: "I will watch TV and then sleep." },
      { jp: "私[わたし]は友達[ともだち]にスペイン語[ご]を教[おし]えています。", en: "I am teaching Spanish to my friend." }
    ],
    notes:
      "All Group II verbs end in る, but not all る-ending verbs are Group II. For example 入[はい]る, 走[はし]る, 帰[かえ]る, 知[し]る are Group I. When unsure, consult a dictionary.",
    related: ["g-n5-041", "g-n5-042", "g-n5-044"]
  },

  {
    id: "g-n5-044",
    point: "不規則動詞のて形",
    reading: "fukisoku dōshi no te-kei",
    level: "N5",
    category: "Verb forms",
    lesson: 14,
    meaning: "Te-form of Group III (irregular verbs する and 来る)",
    structure: "する → して; 来る → 来て",
    explanation:
      "Group III (不規則) consists of only two irregular verbs: する (do) and 来[く]る (come). Their te-forms must be memorized: する → して and 来[く]る → 来[き]て.",
    formation:
      "する → して\n来[く]る → 来[き]て\n勉強[べんきょう]する → 勉強[べんきょう]して\n持[も]って来[く]る → 持[も]って来[き]て",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]宿題[しゅくだい]をしています。", en: "I do my homework every day." },
      { jp: "友達[ともだち]が私[わたし]の家[いえ]に来[き]ています。", en: "My friend has come to my house." },
      { jp: "今[いま]、日本語[にほんご]を勉強[べんきょう]しています。", en: "I am studying Japanese now." }
    ],
    notes:
      "する forms many compound verbs (勉強する, 運動する, 買い物する); each conjugates like する. The 来 in 来て is read き, not く — the reading changes with conjugation.",
    related: ["g-n5-041", "g-n5-042", "g-n5-043"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 15 — 〜てください (requests), 〜ています (progressive)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-045",
    point: "〜てください",
    reading: "〜te kudasai",
    level: "N5",
    category: "Suggestions",
    lesson: 15,
    meaning: "Please do X (polite request / instruction)",
    structure: "Verb (te-form) + ください",
    explanation:
      "〜てください makes a polite request or instruction: 'please do X'. It is softer than a direct command but still presumes some familiarity. For superiors, more polite forms such as 〜ていただけませんか (N4) are preferred.",
    formation:
      "Affirmative: Te-form + ください\nNegative request: V-ない + でください (食[た]べないでください)",
    examples: [
      { jp: "これをもう一度[いちど]見[み]てください。", en: "Please look at this one more time." },
      { jp: "窓[まど]を閉[し]めてください。", en: "Please close the window." },
      { jp: "ここに名前[なまえ]を書[か]いてください。", en: "Please write your name here." }
    ],
    notes:
      "〜ないでください is the negative request: 'please don't do X'. 〜てください is too direct for superiors; use 〜ていただけませんか (N4) for formal requests.",
    related: ["g-n5-041", "g-n5-046", "g-n5-051", "g-n5-054"]
  },

  {
    id: "g-n5-046",
    point: "〜ています（進行形）",
    reading: "〜te imasu (shinkōkei)",
    level: "N5",
    category: "Verb forms",
    lesson: 15,
    meaning: "Is ~ing (ongoing action)",
    structure: "Verb (te-form) + います",
    explanation:
      "〜ています describes an action currently in progress: 'is ~ing now'. With motion verbs such as 行[い]く, 〜ています can describe a trip away rather than motion in progress (行っています = has gone and is there now).",
    formation:
      "Affirmative: Te-form + います\nNegative: Te-form + いません\nPast: Te-form + いました",
    examples: [
      { jp: "私[わたし]は今[いま]本[ほん]を読[よ]んでいます。", en: "I am reading a book now." },
      { jp: "雨[あめ]が降[ふ]っています。", en: "It is raining." },
      { jp: "田中[たなか]さんは電話[でんわ]をかけています。", en: "Tanaka is making a phone call." }
    ],
    notes:
      "With verbs describing continuous states (住[す]む, 知[し]る, 持[も]つ, 結婚[けっこん]する), 〜ています describes the resulting state rather than an action in progress. See g-n5-047.",
    related: ["g-n5-041", "g-n5-047", "g-n5-045"]
  },

  {
    id: "g-n5-047",
    point: "〜ています（結果の状態）",
    reading: "〜te imasu (kekka no jōtai)",
    level: "N5",
    category: "Verb forms",
    lesson: 15,
    meaning: "Resultant state from a past action",
    structure: "Verb (te-form) + います (with punctual / state verbs)",
    explanation:
      "With verbs describing instantaneous changes (知[し]る, 持[も]つ, 結婚[けっこん]する, 住[す]む, 覚[おぼ]える), 〜ています describes the state resulting from a completed past action rather than an ongoing activity. English often translates it with 'have/has' or 'is (married/living)'.",
    formation:
      "知[し]る → 知[し]っています (know)\n持[も]つ → 持[も]っています (have / possess)\n結婚[けっこん]する → 結婚[けっこん]しています (is married)\n住[す]む → 住[す]んでいます (live / reside)",
    examples: [
      { jp: "私[わたし]は東京[とうきょう]に住[す]んでいます。", en: "I live in Tokyo." },
      { jp: "田中[たなか]さんはもう結婚[けっこん]しています。", en: "Tanaka is already married." },
      { jp: "私[わたし]はその人[ひと]をよく知[し]っています。", en: "I know that person well." }
    ],
    notes:
      "These verbs cannot take 〜ます for the state meaning: 知[し]ります means 'will come to know', not 'know'. Use 〜ています for the present state.",
    related: ["g-n5-041", "g-n5-046", "g-n5-063"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 16 — 〜てもいいですか (permission), 〜てはいけません (prohibition)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-048",
    point: "〜てもいいですか",
    reading: "〜te mo ii desu ka",
    level: "N5",
    category: "Permission",
    lesson: 16,
    meaning: "May I do X? (asking permission)",
    structure: "Verb (te-form) + も + いいですか",
    explanation:
      "〜てもいいですか is used to ask for permission: 'May I do X?'. The reply granting permission is 〜てもいいです (yes, you may), and refusing it is 〜てはいけません (no, you must not).",
    formation:
      "Question: Te-form + もいいですか\nGrant: Te-form + もいいです\nRefuse: Te-form + はいけません",
    examples: [
      { jp: "私[わたし]はここに座[すわ]ってもいいですか。", en: "May I sit here?" },
      { jp: "写真[しゃしん]を撮[と]ってもいいですか。", en: "May I take a photo?" },
      { jp: "この本[ほん]を借[か]りてもいいですか。", en: "May I borrow this book?" }
    ],
    notes:
      "Reply granting permission often adds ええ、いいですよ or どうぞ. To refuse politely, use すみません、〜てはいけません or 〜ないでください.",
    related: ["g-n5-049", "g-n5-053"]
  },

  {
    id: "g-n5-049",
    point: "〜てはいけません",
    reading: "〜te wa ikemasen",
    level: "N5",
    category: "Obligation",
    lesson: 16,
    meaning: "Must not do X (prohibition)",
    structure: "Verb (te-form) + は + いけません",
    explanation:
      "〜てはいけません expresses prohibition: 'you must not do X'. It is the negative counterpart to 〜てもいいです. In casual speech it becomes 〜ちゃいけない or 〜じゃいけない.",
    formation:
      "Polite: Te-form + はいけません\nCasual: Te-form + はいけない\n（食[た]べる → 食[た]べちゃいけない）",
    examples: [
      { jp: "ここでタバコを吸[す]ってはいけません。", en: "You must not smoke here." },
      { jp: "教室[きょうしつ]で話[はな]してはいけません。", en: "You must not talk in the classroom." },
      { jp: "この薬[くすり]を飲[の]んではいけません。", en: "You must not take this medicine." }
    ],
    notes:
      "〜てはいけません is for strong prohibition (rules, laws). For softer 'please don't', use 〜ないでください (g-n5-054).",
    related: ["g-n5-048", "g-n5-053", "g-n5-054"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 17 — 〜ましょうか (offer), 〜ましょう (let's), 〜ませんか (invitation)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-050",
    point: "〜ましょうか",
    reading: "〜mashō ka",
    level: "N5",
    category: "Suggestions",
    lesson: 17,
    meaning: "Shall I do X (for you)? (offer to help)",
    structure: "Verb (masu-stem) + ましょうか",
    explanation:
      "〜ましょうか offers to do something for the listener: 'Shall I do X?'. It signals the speaker's willingness to help. The typical reply is ええ、お願[ねが]いします (yes please) or いいえ、大[だい]丈夫[じょうぶ]です (no thanks).",
    formation:
      "Masu-stem + ましょうか\n（持[も]つ → 持[も]ちましょうか）\n（書[か]く → 書[か]きましょうか）",
    examples: [
      { jp: "私[わたし]が荷物[にもつ]を持[も]ちましょうか。", en: "Shall I carry your luggage?" },
      { jp: "窓[まど]を開[あ]けましょうか。", en: "Shall I open the window?" },
      { jp: "手紙[てがみ]を書[か]きましょうか。", en: "Shall I write the letter?" }
    ],
    notes:
      "〜ましょうか is a polite offer to do something FOR someone. Contrast with 〜ましょう (let's, mutual action) and 〜ませんか (won't you join me in...).",
    related: ["g-n5-051", "g-n5-052", "g-n5-045"]
  },

  {
    id: "g-n5-051",
    point: "〜ましょう",
    reading: "〜mashō",
    level: "N5",
    category: "Suggestions",
    lesson: 17,
    meaning: "Let's do X (proposal)",
    structure: "Verb (masu-stem) + ましょう",
    explanation:
      "〜ましょう proposes a shared action: 'let's do X'. It is the polite volitional form, used to suggest doing something together with the listener.",
    formation:
      "Masu-stem + ましょう\n（行[い]く → 行[い]きましょう）\n（食[た]べる → 食[た]べましょう）",
    examples: [
      { jp: "一緒[いっしょ]に昼[ひる]ごはんを食[た]べましょう。", en: "Let's eat lunch together." },
      { jp: "少[すこ]し休[やす]みましょう。", en: "Let's take a short break." },
      { jp: "明日[あした]また来[き]ましょう。", en: "Let's come again tomorrow." }
    ],
    notes:
      "〜ましょう implies a shared action with the listener; 〜ましょうか offers to do something for the listener. Casual form: 〜よう (e.g., 食[た]べよう).",
    related: ["g-n5-050", "g-n5-052", "g-n5-061"]
  },

  {
    id: "g-n5-052",
    point: "〜ませんか",
    reading: "〜masen ka",
    level: "N5",
    category: "Suggestions",
    lesson: 17,
    meaning: "Won't you do X? (invitation)",
    structure: "Verb (masu-form negative) + か",
    explanation:
      "〜ませんか is used to invite someone to do something together: 'won't you do X?'. It is more polite and indirect than 〜ましょう, leaving room for the listener to decline.",
    formation:
      "Masu-form negative + か\n（行[い]く → 行[い]きませんか）\n（飲[の]む → 飲[の]みませんか）",
    examples: [
      { jp: "私[わたし]と一緒[いっしょ]に晩[ばん]ごはんを食[た]べませんか。", en: "Won't you have dinner with me?" },
      { jp: "今度[こんど]の週末[しゅうまつ]、映画[えいが]を見[み]ませんか。", en: "Won't you see a movie this weekend?" },
      { jp: "少[すこ]し散歩[さんぽ]しませんか。", en: "Won't you take a short walk?" }
    ],
    notes:
      "〜ませんか invites the listener; 〜ましょう is a stronger 'let's'. Reply: ええ、いいですね (yes, that sounds nice) or すみません、ちょっと… (sorry, a bit...).",
    related: ["g-n5-050", "g-n5-051"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 18 — 〜てもいい (grant), 〜ないでください (don't), 〜て cause, adj te-form
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-053",
    point: "〜てもいいです",
    reading: "〜te mo ii desu",
    level: "N5",
    category: "Permission",
    lesson: 18,
    meaning: "You may do X (granting permission)",
    structure: "Verb (te-form) + も + いいです",
    explanation:
      "〜てもいいです grants permission: 'you may do X'. It is the affirmative answer to 〜てもいいですか. In casual speech it becomes 〜てもいい or 〜てもいいよ.",
    formation:
      "Affirmative: Te-form + もいいです\nNegative grant: Te-form + もよくないです (rare)",
    examples: [
      { jp: "ここで写真[しゃしん]を撮[と]ってもいいです。", en: "You may take photos here." },
      { jp: "明日[あした]休[やす]んでもいいです。", en: "You may take a day off tomorrow." },
      { jp: "そのペンを使[つか]ってもいいですよ。", en: "You may use that pen." }
    ],
    notes:
      "〜てもいいです grants permission. Contrast with 〜てはいけません (must not). Often paired with 〜てもいいですか in dialogue.",
    related: ["g-n5-048", "g-n5-049", "g-n5-054"]
  },

  {
    id: "g-n5-054",
    point: "〜ないでください",
    reading: "〜nai de kudasai",
    level: "N5",
    category: "Suggestions",
    lesson: 18,
    meaning: "Please don't do X (negative request)",
    structure: "Verb (nai-form) + で + ください",
    explanation:
      "〜ないでください is the negative form of 〜てください: 'please don't do X'. It is a soft prohibition, gentler than 〜てはいけません (must not).",
    formation:
      "Affirmative request: Te-form + ください\nNegative request: Nai-form + でください\n（食[た]べる → 食[た]べないでください）",
    examples: [
      { jp: "心配[しんぱい]しないでください。", en: "Please don't worry." },
      { jp: "ここに駐車[ちゅうしゃ]しないでください。", en: "Please don't park here." },
      { jp: "私[わたし]を忘[わす]れないでください。", en: "Please don't forget me." }
    ],
    notes:
      "〜ないでください is gentler than 〜てはいけません (which states a rule / law). Use 〜ないでください for personal requests, 〜てはいけません for prohibitions.",
    related: ["g-n5-045", "g-n5-049", "g-n5-053"]
  },

  {
    id: "g-n5-055",
    point: "〜て（原因・理由）",
    reading: "〜te (gen'in / riyū)",
    level: "N5",
    category: "Particles",
    lesson: 18,
    meaning: "Because of X (cause / reason)",
    structure: "Verb / Adj (te-form) + result clause",
    explanation:
      "The te-form can express cause or reason: 'X, and so Y'. It connects a cause (often involuntary, like feelings or natural events) to a resulting state. It cannot be used for the speaker's deliberate actions causing a result.",
    formation:
      "Verb te-form → cause\nい-adj 〜くて → cause\nな-adj 〜で → cause\nN + で → cause",
    examples: [
      { jp: "私[わたし]は嬉[うれ]しくて、泣[な]きました。", en: "I was so happy that I cried." },
      { jp: "雨[あめ]が降[ふ]って、道[みち]が濡[ぬ]れています。", en: "It rained and the road is wet." },
      { jp: "あまりに忙[いそが]しくて、休[やす]めませんでした。", en: "I was so busy I couldn't rest." }
    ],
    notes:
      "The te-form for cause is used with involuntary causes (weather, emotions). For deliberate causes, use 〜から or 〜ので (N4). It cannot end a sentence; a result must follow.",
    related: ["g-n5-041", "g-n5-045", "g-n5-056"]
  },

  {
    id: "g-n5-056",
    point: "い形容詞のて形／な形容詞のて形",
    reading: "i-keiyōshi no te-kei / na-keiyōshi no te-kei",
    level: "N5",
    category: "Verb forms",
    lesson: 18,
    meaning: "Te-form of i-adjectives (〜くて) and na-adjectives (〜で)",
    structure: "い-adj: drop い → くて; な-adj: drop な → で",
    explanation:
      "i-adjectives form their te-form by dropping い and adding くて; na-adjectives drop な and add で. These forms connect adjectives in sequence or express cause (〜くて / 〜で + result).",
    formation:
      "い-adj: 〜い → 〜くて (暑[あつ]い → 暑[あつ]くて)\nな-adj: 〜な → 〜で (静[しず]かな → 静[しず]かで)\nNoun + で (学生[がくせい] → 学生[がくせい]で)",
    examples: [
      { jp: "このりんごは大[おお]きくて、赤[あか]いです。", en: "This apple is big and red." },
      { jp: "この部屋[へや]は静[しず]かで、広[ひろ]いです。", en: "This room is quiet and spacious." },
      { jp: "私[わたし]は頭[あたま]が痛[いた]くて、寝[ね]ています。", en: "I have a headache and am sleeping." }
    ],
    notes:
      "i-adj 〜くて and na-adj 〜で can connect adjectives or express cause / reason. For noun predicates, use N + で. Negative i-adj: 〜なくて; negative na-adj: 〜じゃなくて.",
    related: ["g-n5-041", "g-n5-055", "g-n5-060"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 19 — 〜たことがあります (experience), 〜たり〜たり (listing)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-057",
    point: "〜たことがあります",
    reading: "〜ta koto ga arimasu",
    level: "N5",
    category: "Verb forms",
    lesson: 19,
    meaning: "Have experienced doing X (at least once)",
    structure: "Verb (ta-form) + ことがあります",
    explanation:
      "〜たことがあります expresses past experience: 'I have done X at least once in my life'. Use the plain past (た) form before ことがあります, not the te-form or masu-form.",
    formation:
      "Affirmative: Ta-form + ことがあります\n（行[い]く → 行[い]ったことがあります）\n（食[た]べる → 食[た]べたことがあります）",
    examples: [
      { jp: "私[わたし]は日本[にほん]へ行[い]ったことがあります。", en: "I have been to Japan before." },
      { jp: "寿司[すし]を食[た]べたことがあります。", en: "I have eaten sushi before." },
      { jp: "富士山[ふじさん]に登[のぼ]ったことがあります。", en: "I have climbed Mt. Fuji before." }
    ],
    notes:
      "Use 〜たことがあります for life experiences. To ask 'have you ever...?', use 〜たことがありますか. The negative form is 〜たことがありません (g-n5-058).",
    related: ["g-n5-058", "g-n5-041", "g-n5-046"]
  },

  {
    id: "g-n5-058",
    point: "〜たことがありません",
    reading: "〜ta koto ga arimasen",
    level: "N5",
    category: "Verb forms",
    lesson: 19,
    meaning: "Have never done X",
    structure: "Verb (ta-form) + ことがありません",
    explanation:
      "〜たことがありません is the negative form of 〜たことがあります: 'I have never done X'. It states that you have no experience of the action.",
    formation:
      "Negative: Ta-form + ことがありません\n（行[い]く → 行[い]ったことがありません）\nCasual: Ta-form + ことがない",
    examples: [
      { jp: "私[わたし]は海外[かいがい]へ行[い]ったことがありません。", en: "I have never been abroad." },
      { jp: "あの映画[えいが]を見[み]たことがありません。", en: "I have never seen that movie." },
      { jp: "馬[うま]に乗[の]ったことがありません。", en: "I have never ridden a horse." }
    ],
    notes:
      "To emphasize 'never even once', use 一度[いちど]も + 〜たことがありません. Cannot use the 〜ます form before こと.",
    related: ["g-n5-057", "g-n5-041"]
  },

  {
    id: "g-n5-059",
    point: "〜たり〜たりします",
    reading: "〜tari 〜tari shimasu",
    level: "N5",
    category: "Verb forms",
    lesson: 19,
    meaning: "Do things like X and Y (representative listing)",
    structure: "Verb (ta-form + り) + Verb (ta-form + り) + します",
    explanation:
      "〜たり〜たりします lists representative actions: 'do things like X, Y, and so on'. It implies the list is not exhaustive. Each verb takes the たり form (ta-form + り), and します at the end makes it polite.",
    formation:
      "Affirmative: Ta-form + り, Ta-form + り, ... + します\n（行[い]く → 行[い]ったり）\nPast: ... + しました",
    examples: [
      { jp: "週末[しゅうまつ]は本[ほん]を読[よ]んだり、テレビを見[み]たりします。", en: "On weekends I do things like read books and watch TV." },
      { jp: "昨日[きのう]は友達[ともだち]に会[あ]ったり、買[か]い物[もの]をしたりしました。", en: "Yesterday I met a friend and did some shopping, among other things." },
      { jp: "暇[ひま]な時[とき]は音楽[おんがく]を聞[き]いたり、散歩[さんぽ]したりします。", en: "In my free time I do things like listen to music and take walks." }
    ],
    notes:
      "〜たり suggests the list is non-exhaustive: 'among other things'. With only one action, it means 'sometimes do, sometimes don't': 本[ほん]を読[よ]んだりします.",
    related: ["g-n5-060", "g-n5-057", "g-n5-041"]
  },

  {
    id: "g-n5-060",
    point: "〜だったり／〜かったり（名詞・形容詞）",
    reading: "〜dattari / 〜kattari (meishi / keiyōshi)",
    level: "N5",
    category: "Verb forms",
    lesson: 19,
    meaning: "Sometimes X, sometimes Y (states)",
    structure: "N / な-adj + だったり; い-adj (〜かったり)",
    explanation:
      "〜だったり and 〜かったり list varying states for nouns, な-adjectives, and い-adjectives: 'sometimes X, sometimes Y'. They are the noun/adjective equivalents of the verb 〜たり〜たり pattern.",
    formation:
      "Noun: N + だったり (学生[がくせい] → 学生[がくせい]だったり)\nな-adj: な-adj + だったり (静[しず]か → 静[しず]かだったり)\nい-adj: stem + かったり (暑[あつ]い → 暑[あつ]かったり)",
    examples: [
      { jp: "この店[みせ]は時[とき]によって、賑[にぎ]やかだったり、静[しず]かだったりします。", en: "Depending on the time, this shop is sometimes lively, sometimes quiet." },
      { jp: "春[はる]の天気[てんき]は暖[あたた]かかったり、寒[さむ]かったりします。", en: "Spring weather is sometimes warm, sometimes cold." },
      { jp: "彼[かれ]は学生[がくせい]だったり、会社員[かいしゃいん]だったりします。", en: "He is sometimes a student, sometimes an office worker." }
    ],
    notes:
      "Combine with します / でした at the end. だったり is for nouns / な-adjectives; かったり is for い-adjectives. Like 〜たり, the list is non-exhaustive.",
    related: ["g-n5-059", "g-n5-057", "g-n5-056"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 20 — 〜つもりです (intention), もう / まだ (completion)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-061",
    point: "〜つもりです",
    reading: "〜tsumori desu",
    level: "N5",
    category: "Modifying",
    lesson: 20,
    meaning: "Intend to do X",
    structure: "Verb (plain form) + つもりです",
    explanation:
      "〜つもりです expresses the speaker's firm intention or plan to do something: 'I intend to do X'. Use the plain (dictionary) form for affirmative intention, and 〜ない for negative intention. It refers to future plans, not past ones.",
    formation:
      "Affirmative: V (plain) + つもりです\n（行[い]く → 行[い]くつもりです）\nNegative: V-ない + つもりです",
    examples: [
      { jp: "私[わたし]は来年[らいねん]日本[にほん]へ行[い]くつもりです。", en: "I intend to go to Japan next year." },
      { jp: "今度[こんど]の休[やす]みは山[やま]に登[のぼ]るつもりです。", en: "I plan to climb a mountain on the next holiday." },
      { jp: "明日[あした]は早[はや]く起[お]きるつもりです。", en: "I intend to wake up early tomorrow." }
    ],
    notes:
      "〜つもりです expresses YOUR intention; you cannot directly state another person's つもり (use 〜たがる or 〜でしょう). Past tense 〜つもりでした means 'had intended to' but didn't.",
    related: ["g-n5-062", "g-n5-063", "g-n5-051"]
  },

  {
    id: "g-n5-062",
    point: "〜つもりはありません",
    reading: "〜tsumori wa arimasen",
    level: "N5",
    category: "Modifying",
    lesson: 20,
    meaning: "Do not intend to do X",
    structure: "Verb (plain) + つもりはありません",
    explanation:
      "〜つもりはありません is the negative form of 〜つもりです, expressing that you do NOT intend to do something. The は emphasizes the negation: 'I have no intention of...'.",
    formation:
      "Polite negative: V (plain) + つもりはありません\nCasual: V (plain) + つもりはない",
    examples: [
      { jp: "私[わたし]はもうお酒[さけ]を飲[の]むつもりはありません。", en: "I do not intend to drink alcohol anymore." },
      { jp: "今日[きょう]はもう出[で]かけるつもりはありません。", en: "I have no intention of going out today." },
      { jp: "彼[かれ]とは話[はな]すつもりはありません。", en: "I do not intend to talk to him." }
    ],
    notes:
      "There are two negative forms: 〜ないつもりです (don't intend to do X) and 〜つもりはありません (have no intention of doing X). They are mostly interchangeable, but 〜つもりはありません sounds stronger.",
    related: ["g-n5-061", "g-n5-051"]
  },

  {
    id: "g-n5-063",
    point: "もう〜ました／まだ〜ていません",
    reading: "mō 〜mashita / mada 〜te imasen",
    level: "N5",
    category: "Verb forms",
    lesson: 20,
    meaning: "Already did X / have not done X yet",
    structure: "もう + V-ました; まだ + V (te-form) + いません",
    explanation:
      "もう + past verb means 'already did X'; まだ + 〜ていません means 'have not done X yet'. Together they form the already / not-yet contrast for completed actions, often used in dialogue.",
    formation:
      "Already: もう + V-ました\n（食[た]べる → もう食[た]べました）\nNot yet: まだ + Te-form + いません",
    examples: [
      { jp: "私[わたし]はもう昼[ひる]ごはんを食[た]べました。", en: "I have already eaten lunch." },
      { jp: "私[わたし]はまだ宿題[しゅくだい]をやっていません。", en: "I have not done my homework yet." },
      { jp: "A: もう終[お]わりましたか。 B: いいえ、まだ終[お]わっていません。", en: "A: Have you finished? B: No, I haven't finished yet." }
    ],
    notes:
      "もう with non-past means 'soon / any moment' (もう来[き]ます = coming soon). まだ + V-ます (non-past) means 'still doing'. まだ + 〜ていません specifically means 'not yet done'.",
    related: ["g-n5-046", "g-n5-047", "g-n5-061"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 21 — 〜と思います (opinion), 〜と言っていました (hearsay)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-064",
    point: "〜と思います",
    reading: "〜to omoimasu",
    level: "N5",
    category: "Quotation",
    lesson: 21,
    meaning: "I think that... (opinion)",
    structure: "Plain sentence + と + 思います",
    explanation:
      "〜と思います expresses the speaker's opinion or thought: 'I think that...'. Use the plain form before と, then 思います. For polite quotation, use 思います; the casual form is 思う.",
    formation:
      "Affirmative: Plain sentence + と + 思います\nNegative: Plain negative + と + 思いません\nPast: Plain + と + 思いました",
    examples: [
      { jp: "明日[あした]は雨[あめ]が降[ふ]ると思[おも]います。", en: "I think it will rain tomorrow." },
      { jp: "この本[ほん]はとても面白[おもしろ]いと思[おも]います。", en: "I think this book is very interesting." },
      { jp: "田中[たなか]さんはもう来[き]たと思[おも]います。", en: "I think Tanaka has already come." }
    ],
    notes:
      "You can state your own opinion with 〜と思います, but for third-person thoughts you must use 〜と思っている (g-n5-065). The subject 私[わたし]は is usually omitted when context is clear.",
    related: ["g-n5-065", "g-n5-066", "g-n5-067"]
  },

  {
    id: "g-n5-065",
    point: "〜と言っていました",
    reading: "〜to itte imashita",
    level: "N5",
    category: "Quotation",
    lesson: 21,
    meaning: "Said that... (hearsay / quotation)",
    structure: "Plain sentence + と + 言っていました",
    explanation:
      "〜と言っていました reports what someone said in the past: '(someone) said that...'. Use the plain form before と, then 言っていました (past progressive of 言う). For an ongoing or recent quote, use 〜と言っています.",
    formation:
      "Past: Plain sentence + と + 言っていました\nPresent: Plain + と + 言っています\n（田中[たなか]さんは来[く]ると言[い]っていました）",
    examples: [
      { jp: "田中[たなか]さんは明日[あした]来[く]ると言[い]っていました。", en: "Tanaka said that he would come tomorrow." },
      { jp: "先生[せんせい]はテストが難[むずか]しいと言[い]っていました。", en: "The teacher said that the test would be difficult." },
      { jp: "母[はは]は早[はや]く帰[かえ]ると言[い]っていました。", en: "My mother said she would come home early." }
    ],
    notes:
      "〜と言っていました reports a past statement. 〜と言っています can mean either a recent statement or an ongoing claim. Quoted questions keep their question form inside と.",
    related: ["g-n5-064", "g-n5-066"]
  },

  {
    id: "g-n5-066",
    point: "〜と（引用）",
    reading: "〜to (in'yō)",
    level: "N5",
    category: "Particles",
    lesson: 21,
    meaning: "Quotative particle (marks quoted speech / thought)",
    structure: "Plain sentence + と + 言う / 思う / 聞く etc.",
    explanation:
      "The quotative particle と marks the content of speech, thought, or belief. It precedes verbs such as 言[い]う (say), 思[おも]う (think), 聞[き]く (hear / ask), and 書[か]く (write). The quoted clause is always in the plain form.",
    formation:
      "Quoted statement + と + V (言[い]う / 思[おも]う / 聞[き]く)\n（「はい」と言[い]う → 「はい」と言[い]う）",
    examples: [
      { jp: "私[わたし]は田中[たなか]さんに「おはよう」と言[い]いました。", en: "I said 'good morning' to Tanaka." },
      { jp: "彼[かれ]は何[なに]を言[い]っていますか。", en: "What is he saying?" },
      { jp: "天気[てんき]予報[よほう]は明日[あした]晴[は]れると言[い]っています。", en: "The weather forecast says it will be sunny tomorrow." }
    ],
    notes:
      "と quotations take the plain form. Direct quotations keep quotation marks: 「...」と. Indirect quotations drop the marks and use the plain form.",
    related: ["g-n5-064", "g-n5-065"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 22 — 〜でしょう (probability), 〜たほうがいい (advice)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-067",
    point: "〜でしょう",
    reading: "〜deshō",
    level: "N5",
    category: "Suggestions",
    lesson: 22,
    meaning: "Probably / I suppose (guess)",
    structure: "Plain sentence + でしょう (N / な-adj drop だ)",
    explanation:
      "〜でしょう expresses a guess or probability: 'probably', 'I suppose'. With verbs and い-adjectives, use the plain form + でしょう; with nouns and な-adjectives, drop だ and add でしょう. It is the polite equivalent of 〜だろう.",
    formation:
      "Verb plain + でしょう\nい-adj plain + でしょう\nNoun + でしょう (drop だ)\nな-adj + でしょう (drop だ)",
    examples: [
      { jp: "明日[あした]は雨[あめ]が降[ふ]るでしょう。", en: "It will probably rain tomorrow." },
      { jp: "この仕事[しごと]は大変[たいへん]でしょう。", en: "This work is probably tough." },
      { jp: "田中[たなか]さんはもうすぐ来[き]るでしょう。", en: "Tanaka will probably come soon." }
    ],
    notes:
      "〜でしょう softens assertions and is common in forecasts. As a question (〜でしょう？), it seeks confirmation: 'right?'. Plain form: 〜だろう (g-n5-069).",
    related: ["g-n5-068", "g-n5-064", "g-n5-069"]
  },

  {
    id: "g-n5-068",
    point: "〜たほうがいいです",
    reading: "〜ta hō ga ii desu",
    level: "N5",
    category: "Suggestions",
    lesson: 22,
    meaning: "You had better do X (advice)",
    structure: "Verb (ta-form) + ほうがいいです",
    explanation:
      "〜たほうがいいです gives advice: 'you had better do X'. It implies that doing X is the better option among choices. Use the past (た) form before ほう, then がいいです.",
    formation:
      "Affirmative: Ta-form + ほうがいいです\n（行[い]く → 行[い]ったほうがいいです）\nNegative: Nai-form + ほうがいいです",
    examples: [
      { jp: "熱[ねつ]があるので、休[やす]んだほうがいいです。", en: "Since you have a fever, you had better rest." },
      { jp: "もっと日本語[にほんご]を勉強[べんきょう]したほうがいいです。", en: "You had better study Japanese more." },
      { jp: "お医者[いしゃ]さんに行[い]ったほうがいいですよ。", en: "You had better go see a doctor." }
    ],
    notes:
      "〜たほうがいいです gives advice. The negative form 〜ないほうがいいです means 'you had better not'. To soften, add 〜と思う: 〜たほうがいいと思[おも]います.",
    related: ["g-n5-067", "g-n5-064", "g-n5-045"]
  },

  {
    id: "g-n5-069",
    point: "〜だろう（普通形）",
    reading: "〜darō (futsūkei)",
    level: "N5",
    category: "Suggestions",
    lesson: 22,
    meaning: "Probably (plain / casual guess)",
    structure: "Plain sentence + だろう",
    explanation:
      "〜だろう is the casual form of 〜でしょう, expressing a guess or probability: 'probably'. It is used in informal speech and written predictions. With nouns / な-adjectives, drop だ and add だろう.",
    formation:
      "Verb plain + だろう\nい-adj plain + だろう\nNoun + だろう (drop だ)\nな-adj + だろう (drop だ)",
    examples: [
      { jp: "明日[あした]は晴[は]れるだろう。", en: "It will probably be sunny tomorrow." },
      { jp: "彼[かれ]はもうすぐ来[く]るだろう。", en: "He will probably come soon." },
      { jp: "この本[ほん]は面白[おもしろ]いだろう。", en: "This book is probably interesting." }
    ],
    notes:
      "〜だろう is the plain form of 〜でしょう. To soften it, add 〜と思う: 〜だろうと思[おも]う ('I think probably...'). Often used in forecasts and written Japanese.",
    related: ["g-n5-067", "g-n5-064"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 23 — 〜時に / 〜た時 (when), 〜になる (become), comparison
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-070",
    point: "〜時に／〜る時",
    reading: "〜toki ni / 〜ru toki",
    level: "N5",
    category: "Modifying",
    lesson: 23,
    meaning: "When X happens (present / future time)",
    structure: "Verb (plain) + 時に; Noun + の + 時に",
    explanation:
      "〜時に means 'when' or 'at the time of'. With the plain (dictionary) form of a verb, it refers to a future or habitual time: 'when(ever) you do X'. With nouns, use N + の + 時に.",
    formation:
      "Verb plain + 時に\n（行[い]く時[とき]に）\nNoun + の + 時に\n（学生[がくせい]の時[とき]に）",
    examples: [
      { jp: "私[わたし]は出[で]かける時[とき]に、鍵[かぎ]をかけます。", en: "I lock the door when I go out." },
      { jp: "学生[がくせい]の時[とき]に、よく勉強[べんきょう]しました。", en: "When I was a student, I studied a lot." },
      { jp: "日本人[にほんじん]は食[た]べる時[とき]に、「いただきます」と言[い]います。", en: "Japanese people say 'itadakimasu' when they eat." }
    ],
    notes:
      "〜る時に refers to time before or at the start of the action. Contrast with 〜た時に (g-n5-071), which refers to time after the action. 〜時に emphasizes a specific point; 〜時 is more general.",
    related: ["g-n5-071", "g-n5-072", "g-n5-075"]
  },

  {
    id: "g-n5-071",
    point: "〜た時に",
    reading: "〜ta toki ni",
    level: "N5",
    category: "Modifying",
    lesson: 23,
    meaning: "When X has happened / after doing X",
    structure: "Verb (ta-form) + 時に",
    explanation:
      "〜た時に refers to a time AFTER the action has been completed: 'when X has happened' or 'after doing X'. The た-form emphasizes that the action is finished before the next event.",
    formation:
      "Verb ta-form + 時に\n（食[た]べた時[とき]に）\n（着[つ]いた時[とき]に）",
    examples: [
      { jp: "ご飯[はん]を食[た]べた時[とき]に、薬[くすり]を飲[の]みます。", en: "I take medicine when I have eaten (after eating)." },
      { jp: "家[いえ]に帰[かえ]った時[とき]に、電話[でんわ]をします。", en: "I will call when I get home." },
      { jp: "会議[かいぎ]が終[お]わった時[とき]に、報告[ほうこく]します。", en: "I will report when the meeting is over." }
    ],
    notes:
      "〜た時に implies the action is completed first; 〜る時に does not. Compare: 出[で]かける時に (when about to leave) vs 出[で]かけた時に (after having left).",
    related: ["g-n5-070", "g-n5-072", "g-n5-076"]
  },

  {
    id: "g-n5-072",
    point: "〜になります",
    reading: "〜ni narimasu",
    level: "N5",
    category: "Modifying",
    lesson: 23,
    meaning: "Becomes X (change of state)",
    structure: "Noun + に + なります",
    explanation:
      "〜になります expresses a change of state: 'becomes X'. The noun before に is the result. For な-adjectives, use 〜に + なります (e.g., 元気になります); for い-adjectives, change い → く + なります (e.g., 暑[あつ]くなります).",
    formation:
      "Noun + になります\n（春[はる] → 春[はる]になります）\nな-adj + になります (元気[げんき]な → 元気[げんき]に)\nい-adj: 〜く + なります (暑[あつ]い → 暑[あつ]く)",
    examples: [
      { jp: "来年[らいねん]、私[わたし]は二十歳[はたち]になります。", en: "Next year I will turn twenty." },
      { jp: "春[はる]になると、暖[あたた]かくなります。", en: "When spring comes, it becomes warm." },
      { jp: "病気[びょうき]になって、会社[かいしゃ]を休[やす]みました。", en: "I became sick and took a day off work." }
    ],
    notes:
      "〜になります is the change-of-state counterpart of 〜です (state). For い-adjectives use 〜く + なります; for な-adjectives use 〜に + なります. Contrast with 〜にします (make it X).",
    related: ["g-n5-070", "g-n5-071", "g-n5-073"]
  },

  {
    id: "g-n5-073",
    point: "〜と〜とどちらが〜ですか",
    reading: "〜to 〜to dochira ga 〜desu ka",
    level: "N5",
    category: "Modifying",
    lesson: 23,
    meaning: "Which is more..., N1 or N2?",
    structure: "N1 + と + N2 + と + どちらが + Adj + ですか",
    explanation:
      "〜と〜とどちらが〜ですか asks which of two things is more [adjective]: 'which is more X, A or B?'. The answer uses N + のほうが: 'A is more X'. Used for two-item comparisons.",
    formation:
      "Question: N1 + と + N2 + と + どちらが + Adj + ですか\nAnswer: N + の + ほうが + Adj + です",
    examples: [
      { jp: "肉[にく]と魚[さかな]とどちらが好[す]きですか。", en: "Which do you like better, meat or fish?" },
      { jp: "夏[なつ]と冬[ふゆ]とどちらが寒[さむ]いですか。", en: "Which is colder, summer or winter?" },
      { jp: "新幹線[しんかんせん]と飛行機[ひこうき]とどちらが速[はや]いですか。", en: "Which is faster, the shinkansen or a plane?" }
    ],
    notes:
      "Use どちらが for two-choice comparisons. For three or more, use 〜の中[なか]で + 何[なに] / 誰[だれ]が一番[いちばん]〜ですか. Reply: N + のほうが.",
    related: ["g-n5-072", "g-n5-070"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 24 — 〜てから (after), 〜前に / 〜た後で (before / after)
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-074",
    point: "〜てから",
    reading: "〜te kara",
    level: "N5",
    category: "Verb forms",
    lesson: 24,
    meaning: "After doing X, then...",
    structure: "Verb (te-form) + てから + next action",
    explanation:
      "〜てから indicates that action B happens AFTER action A is completed. The order is strictly sequential: 'do A, and then do B'. It emphasizes that A must finish before B starts.",
    formation:
      "Te-form + てから + next clause\n（食[た]べてから、寝[ね]る）\n（洗[あら]ってから、着[き]る）",
    examples: [
      { jp: "手[て]を洗[あら]ってから、食[た]べます。", en: "I wash my hands and then eat." },
      { jp: "宿題[しゅくだい]をしてから、遊[あそ]びます。", en: "I will play after doing my homework." },
      { jp: "日本[にほん]に来[き]てから、日本語[にほんご]を勉強[べんきょう]し始[はじ]めました。", en: "I started studying Japanese after coming to Japan." }
    ],
    notes:
      "〜てから emphasizes sequence and completion; 〜て alone is less strict about ordering. For nouns, use N + の + あとで (g-n5-076).",
    related: ["g-n5-075", "g-n5-076", "g-n5-041"]
  },

  {
    id: "g-n5-075",
    point: "〜前に／〜る前に",
    reading: "〜mae ni / 〜ru mae ni",
    level: "N5",
    category: "Modifying",
    lesson: 24,
    meaning: "Before doing X",
    structure: "Verb (plain) + 前に; Noun + の + 前に",
    explanation:
      "〜前に means 'before doing X': the action before 前に happens first, then the main action. With verbs, use the plain (dictionary) form before 前に; with nouns, use N + の + 前に.",
    formation:
      "Verb plain + 前に\n（食[た]べる前[まえ]に）\nNoun + の + 前に\n（会議[かいぎ]の前[まえ]に）",
    examples: [
      { jp: "食[た]べる前[まえ]に、手[て]を洗[あら]います。", en: "I wash my hands before eating." },
      { jp: "寝[ね]る前[まえ]に、本[ほん]を読[よ]みます。", en: "I read a book before sleeping." },
      { jp: "会議[かいぎ]の前[まえ]に、資料[しりょう]を準備[じゅんび]します。", en: "I prepare materials before the meeting." }
    ],
    notes:
      "〜る前に = before doing X; 〜た後に = after doing X. They are mirror opposites. The verb before 前に is always in the plain non-past form, never past.",
    related: ["g-n5-074", "g-n5-076"]
  },

  {
    id: "g-n5-076",
    point: "〜た後で／〜の後で",
    reading: "〜ta ato de / 〜no ato de",
    level: "N5",
    category: "Modifying",
    lesson: 24,
    meaning: "After doing X",
    structure: "Verb (ta-form) + 後で; Noun + の + 後で",
    explanation:
      "〜た後で means 'after doing X': the action after 後で happens after the first action is completed. With verbs, use the ta-form before 後で; with nouns, use N + の + 後で.",
    formation:
      "Verb ta-form + 後で\n（食[た]べた後[あと]で）\nNoun + の + 後で\n（会議[かいぎ]の後[あと]で）",
    examples: [
      { jp: "ご飯[はん]を食[た]べた後[あと]で、薬[くすり]を飲[の]みます。", en: "I take medicine after eating a meal." },
      { jp: "仕事[しごと]が終[お]わった後[あと]で、飲[の]みに行[い]きます。", en: "After work ends, I will go for drinks." },
      { jp: "会議[かいぎ]の後[あと]で、報告[ほうこく]します。", en: "I will report after the meeting." }
    ],
    notes:
      "〜た後で emphasizes that the first action is completed. The で can sometimes be dropped in casual speech: 〜た後. Contrast with 〜てから (g-n5-074), which is more emphatic about immediate sequence.",
    related: ["g-n5-074", "g-n5-075"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 25 — 〜ができます (ability), 〜が分かります / 〜が好きです, 〜は〜が
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-077",
    point: "〜ができます",
    reading: "〜ga dekimasu",
    level: "N5",
    category: "Modifying",
    lesson: 25,
    meaning: "Can do X (ability)",
    structure: "Noun + が + できます",
    explanation:
      "〜ができます expresses ability or possibility: 'can do X'. The noun before が is the activity or skill (e.g., 料理, ピアノ, スポーツ, 日本語). It is the noun-based counterpart of the verb potential form.",
    formation:
      "Affirmative: N + が + できます\nNegative: N + が + できません\n（料理[りょうり]ができます）",
    examples: [
      { jp: "私[わたし]は料理[りょうり]ができます。", en: "I can cook." },
      { jp: "田中[たなか]さんは英語[えいご]ができます。", en: "Tanaka can do English (is good at English)." },
      { jp: "あなたはピアノができますか。", en: "Can you play the piano?" }
    ],
    notes:
      "〜ができます takes a NOUN (料理, スポーツ, 運転). For verbs, use the potential form (e.g., 食[た]べられる) or 〜ことができます (N4). 〜が上手[じょうず]です (g-n5-079) expresses 'good at'.",
    related: ["g-n5-078", "g-n5-079", "g-n5-080"]
  },

  {
    id: "g-n5-078",
    point: "〜が分かります",
    reading: "〜ga wakarimasu",
    level: "N5",
    category: "Particles",
    lesson: 25,
    meaning: "Understand X",
    structure: "Noun + が + 分かります",
    explanation:
      "〜が分かります means 'understand X'. The object of 分かる is marked by が, not を. Common objects include languages (日本語, 英語), people (人), and topics (こと, 意味).",
    formation:
      "Affirmative: N + が + 分かります\nNegative: N + が + 分かりません\n（日本語[にほんご]が分[わ]かります）",
    examples: [
      { jp: "私[わたし]は日本語[にほんご]が少[すこ]し分[わ]かります。", en: "I understand a little Japanese." },
      { jp: "田中[たなか]さんはスペイン語[ご]が分[わ]かりません。", en: "Tanaka does not understand Spanish." },
      { jp: "この漢字[かんじ]の意味[いみ]が分[わ]かりますか。", en: "Do you understand the meaning of this kanji?" }
    ],
    notes:
      "分かる takes が, not を: ◯ 日本語[にほんご]が分[わ]かる, ✗ 日本語を分かる. 〜ができます implies skill; 〜が分かります implies comprehension.",
    related: ["g-n5-077", "g-n5-079", "g-n5-080"]
  },

  {
    id: "g-n5-079",
    point: "〜が上手です／〜が好きです",
    reading: "〜ga jōzu desu / 〜ga suki desu",
    level: "N5",
    category: "Particles",
    lesson: 25,
    meaning: "Is good at X / likes X",
    structure: "Noun + が + 上手です / 好きです",
    explanation:
      "〜が上手です means 'good at X'; 〜が好きです means 'likes X'. Both use が to mark the object of skill or liking. The opposites are 〜が下手です (bad at) and 〜が嫌いです (dislikes).",
    formation:
      "Good at: N + が + 上手[じょうず]です\nLikes: N + が + 好[す]きです\nBad at: N + が + 下手[へた]です\nDislikes: N + が + 嫌[きら]いです",
    examples: [
      { jp: "私[わたし]は料理[りょうり]が上手[じょうず]です。", en: "I am good at cooking." },
      { jp: "田中[たなか]さんは音楽[おんがく]が好[す]きです。", en: "Tanaka likes music." },
      { jp: "私[わたし]は野菜[やさい]が嫌[きら]いです。", en: "I dislike vegetables." }
    ],
    notes:
      "上手, 下手, 好き, 嫌い are な-adjectives that take が (not を) for their object: ◯ 料理[りょうり]が好き, ✗ 料理を好き. They can also be predicated of others: 彼[かれ]は料理が上手です.",
    related: ["g-n5-077", "g-n5-078", "g-n5-080"]
  },

  {
    id: "g-n5-080",
    point: "〜は〜が〜です",
    reading: "〜wa 〜ga 〜desu",
    level: "N5",
    category: "Particles",
    lesson: 25,
    meaning: "As for X, (subject) is ... (topic-subject pattern)",
    structure: "N1 + は + N2 + が + Adjective / Noun + です",
    explanation:
      "The 〜は〜が pattern splits the topic (は) and subject (が) to express attributes of the topic: 'as for X, (its) Y is...'. It is commonly used for body parts, family members, abilities, likes, and possessions.",
    formation:
      "Topic + は + Subject + が + Adj / N + です\n（象[ぞう]は鼻[はな]が長[なが]い）\n（私[わたし]は妹[いもうと]がいます）",
    examples: [
      { jp: "私[わたし]は頭[あたま]が痛[いた]いです。", en: "I have a headache (as for me, my head hurts)." },
      { jp: "象[ぞう]は鼻[はな]が長[なが]いです。", en: "Elephants have long trunks (as for elephants, their noses are long)." },
      { jp: "田中[たなか]さんは英語[えいご]が上手[じょうず]です。", en: "Tanaka is good at English (as for Tanaka, his English is good)." }
    ],
    notes:
      "The は〜が pattern is used when the subject (が) is a part or attribute of the topic (は). Common with body parts (頭, 目, 足), family (兄, 妹), abilities (料理, スポーツ), and likes (音楽, 本).",
    related: ["g-n5-077", "g-n5-078", "g-n5-079"]
  }
];

// ───────────────────────────────────────────────────────────
// Minna no Nihongo Shokyuu 1 — Lesson titles for lessons 14-25
// ───────────────────────────────────────────────────────────

export const minnaN5LessonTitles2: { lesson: number; title: string; topic: string }[] = [
  { lesson: 14, title: "て形の作り方", topic: "Te-form conjugation (verb groups I, II, III)" },
  { lesson: 15, title: "〜てください・〜ています", topic: "Requests and progressive / state actions" },
  { lesson: 16, title: "〜てもいいですか・〜てはいけません", topic: "Asking permission and prohibition" },
  { lesson: 17, title: "〜ましょうか・〜ましょう・〜ませんか", topic: "Offers, proposals, and invitations" },
  { lesson: 18, title: "〜てもいい・〜ないでください・て形（原因・形容詞）", topic: "Granting permission, negative requests, cause, adjective te-forms" },
  { lesson: 19, title: "〜たことがあります・〜たり〜たりします", topic: "Past experience and listing actions / states" },
  { lesson: 20, title: "〜つもりです・もう／まだ", topic: "Intention, already, and not-yet completion" },
  { lesson: 21, title: "〜と思います・〜と言っていました", topic: "Opinion and hearsay (quotation)" },
  { lesson: 22, title: "〜でしょう・〜たほうがいいです", topic: "Conjecture (probability) and advice" },
  { lesson: 23, title: "〜時に・〜になる・どちらが〜ですか", topic: "Time clauses, change of state, two-way comparison" },
  { lesson: 24, title: "〜てから・〜前に・〜た後で", topic: "Sequence: after, before, and after doing" },
  { lesson: 25, title: "〜ができます・〜が分かります・〜は〜が〜", topic: "Ability, understanding, likes, and the topic-subject pattern" }
];
