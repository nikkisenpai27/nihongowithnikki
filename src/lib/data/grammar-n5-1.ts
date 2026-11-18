import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.
//
// JLPT N5 grammar points following Minna no Nihongo Shokyuu I, lessons 1–13.
// ~42 points (2–4 per lesson).

export const grammarN5_1: GrammarData[] = [
  // ───────────────────────── Lesson 1: はじめまして ─────────────────────────
  {
    id: "g-n5-001",
    point: "〜は〜です",
    reading: "〜wa〜desu",
    level: "N5",
    category: "Copula",
    lesson: 1,
    meaning: "A is B (equational / identity statement)",
    structure: "N1 + は + N2 + です",
    explanation:
      "The basic polite equational pattern of Japanese. は marks the topic (pronounced 'wa') and です is the polite copula meaning 'is/am/are'. Use it to state what someone or something is.",
    formation:
      "Affirmative: N は N です\nQuestion: N は N ですか\nNegative: N は N じゃないです / ではありません\nPast: N は N でした",
    examples: [
      { jp: "私[わたし]は学生[がくせい]です。", en: "I am a student." },
      { jp: "田中[たなか]さんは先生[せんせい]です。", en: "Tanaka is a teacher." },
      { jp: "私[わたし]は日本人[にほんじん]です。", en: "I am Japanese." }
    ],
    notes:
      "は is pronounced 'wa' only as a particle. です makes the sentence polite and agrees with the topic's identity.",
    related: ["g-n5-002", "g-n5-003", "g-n5-004"]
  },

  {
    id: "g-n5-002",
    point: "〜じゃないです / 〜ではありません",
    reading: "〜janai desu / 〜dewa arimasen",
    level: "N5",
    category: "Copula",
    lesson: 1,
    meaning: "A is not B (polite negative copula)",
    structure: "N + は + N + じゃないです / ではありません",
    explanation:
      "The polite negative forms of the copula. じゃないです is colloquial-polite and ではありません is more formal. Both deny that the topic equals the noun.",
    formation:
      "Colloquial: N は N じゃないです\nFormal: N は N ではありません\nQuestion: N は N じゃないですか",
    examples: [
      { jp: "私[わたし]は学生[がくせい]じゃないです。", en: "I am not a student." },
      { jp: "これは本[ほん]ではありません。", en: "This is not a book." },
      { jp: "田中[たなか]さんは先生[せんせい]じゃないです。", en: "Tanaka is not a teacher." }
    ],
    notes:
      "ではありません appears in writing and formal speech; じゃないです is common in conversation.",
    related: ["g-n5-001", "g-n5-003"]
  },

  {
    id: "g-n5-003",
    point: "〜ですか",
    reading: "〜desu ka",
    level: "N5",
    category: "Copula",
    lesson: 1,
    meaning: "Is A B? (yes/no question)",
    structure: "N + は + N + ですか",
    explanation:
      "Adding か to the end of a copula sentence forms a yes/no question. Word order does not change; only the final か turns the statement into an inquiry.",
    formation:
      "Affirmative Q: N は N ですか\nNegative Q: N は N じゃないですか",
    examples: [
      { jp: "あなたは日本人[にほんじん]ですか。", en: "Are you Japanese?" },
      { jp: "田中[たなか]さんは先生[せんせい]ですか。", en: "Is Tanaka a teacher?" },
      { jp: "それは車[くるま]ですか。", en: "Is that a car?" }
    ],
    notes:
      "Answer with はい、そうです (yes, that's right) or いいえ、そうじゃありません (no, that's not right).",
    related: ["g-n5-001", "g-n5-002", "g-n5-007"]
  },

  {
    id: "g-n5-004",
    point: "はじめまして",
    reading: "hajimemashite",
    level: "N5",
    category: "Expression",
    lesson: 1,
    meaning: "How do you do? (first-meeting greeting)",
    structure: "はじめまして (+ self-introduction with 〜は〜です)",
    explanation:
      "A fixed expression used the first time you meet someone, immediately before introducing yourself. It is normally followed by どうぞよろしくお願[ねが]いします to close the introduction.",
    formation:
      "はじめまして。\n(+ 私[わたし]は N です。)\n(+ どうぞよろしくお願[ねが]いします。)",
    examples: [
      { jp: "はじめまして。私[わたし]は田中[たなか]です。", en: "How do you do? I am Tanaka." },
      { jp: "はじめまして、どうぞよろしくお願[ねが]いします。", en: "How do you do — please treat me kindly." },
      { jp: "はじめまして、山田[やまだ]です。", en: "How do you do, I'm Yamada." }
    ],
    notes:
      "Used only on first meeting, not when re-greeting someone you already know. Pair with どうぞよろしくお願いします for politeness.",
    related: ["g-n5-001"]
  },

  // ─────────────── Lesson 2: これ/それ/あれ & この/その/あの ───────────────
  {
    id: "g-n5-005",
    point: "これ / それ / あれ / どれ",
    reading: "kore / sore / are / dore",
    level: "N5",
    category: "Demonstratives",
    lesson: 2,
    meaning: "this / that / that over there / which (thing)",
    structure: "これ・それ・あれ + は + N + です / どれ + が + N + ですか",
    explanation:
      "Demonstrative pronouns for things. これ = near the speaker, それ = near the listener, あれ = far from both, どれ = which one. With どれ the subject marker switches to が for the identifying question.",
    formation:
      "これ は N です。\nそれ は N です。\nあれ は N です。\nどれ が N ですか。",
    examples: [
      { jp: "これは本[ほん]です。", en: "This is a book." },
      { jp: "それは車[くるま]です。", en: "That is a car." },
      { jp: "どれがあなたの傘[かさ]ですか。", en: "Which one is your umbrella?" }
    ],
    notes:
      "これ/それ/あれ stand alone as the subject. To modify a noun use この/その/あの (see g-n5-006).",
    related: ["g-n5-006", "g-n5-007", "g-n5-008"]
  },

  {
    id: "g-n5-006",
    point: "この / その / あの / どの + N",
    reading: "kono / sono / ano / dono + N",
    level: "N5",
    category: "Demonstratives",
    lesson: 2,
    meaning: "this N / that N / that N over there / which N",
    structure: "この・その・あの・どの + Noun + は + N + です",
    explanation:
      "The pre-noun modifier forms of the demonstratives. They MUST be followed by a noun, unlike これ/それ/あれ which stand alone. どの is used in questions with が or ですか.",
    formation:
      "この N は N です。\nその N は N です。\nあの N は N です。\nどの N が N ですか。",
    examples: [
      { jp: "この本[ほん]は私[わたし]の本[ほん]です。", en: "This book is my book." },
      { jp: "その車[くるま]は田中[たなか]さんのです。", en: "That car is Tanaka's." },
      { jp: "どの人[ひと]が山田[やまだ]さんですか。", en: "Which person is Yamada?" }
    ],
    notes:
      "Cannot say これ本 — always choose the こそあど form by whether a noun follows.",
    related: ["g-n5-005", "g-n5-007"]
  },

  {
    id: "g-n5-007",
    point: "そうです / そうじゃありません",
    reading: "sou desu / sou ja arimasen",
    level: "N5",
    category: "Expression",
    lesson: 2,
    meaning: "That's right. / That's not right.",
    structure: "そう + です / じゃありません",
    explanation:
      "A short reply used to confirm or deny the content of a copula yes/no question without repeating the noun. そうです agrees; そうじゃありません (or そうではありません) disagrees.",
    formation:
      "Affirmative: そうです。\nNegative: そうじゃありません。/ そうではありません。\nQuestion: そうですか。",
    examples: [
      { jp: "これはあなたの本[ほん]ですか。―はい、そうです。", en: "Is this your book? — Yes, it is." },
      { jp: "あれは田中[たなか]さんの車[くるま]ですか。―いいえ、そうじゃありません。", en: "Is that Tanaka's car? — No, it isn't." },
      { jp: "そうですか。", en: "Is that so? / I see." }
    ],
    notes:
      "Use そうです only when the question is an equational (NはNですか) type. For adjective questions answer with the adjective instead.",
    related: ["g-n5-003", "g-n5-005"]
  },

  {
    id: "g-n5-008",
    point: "だれ / どなた",
    reading: "dare / donata",
    level: "N5",
    category: "Demonstratives",
    lesson: 2,
    meaning: "who (plain) / who (polite)",
    structure: "だれ・どなた + ですか / だれの + N",
    explanation:
      "Interrogative pronouns for people. だれ is the plain form and どなた is its polite counterpart. With the genitive の they ask 'whose'.",
    formation:
      "あの人[ひと]は誰[だれ]ですか。\nどなたですか。\nこれは誰[だれ]の N ですか。",
    examples: [
      { jp: "あの人[ひと]は誰[だれ]ですか。", en: "Who is that person?" },
      { jp: "どなたですか。", en: "May I ask who you are? (polite)" },
      { jp: "これは誰[だれ]の傘[かさ]ですか。", en: "Whose umbrella is this?" }
    ],
    notes:
      "どなた is safer when addressing or referring to someone respectfully. 何[なに]/何[なん] is the parallel question word for things.",
    related: ["g-n5-005", "g-n5-006"]
  },

  // ─────────────── Lesson 3: ここ/そこ/あそこ (locations) ───────────────
  {
    id: "g-n5-009",
    point: "ここ / そこ / あそこ / どこ",
    reading: "koko / soko / asoko / doko",
    level: "N5",
    category: "Demonstratives",
    lesson: 3,
    meaning: "here / there / over there / where (place)",
    structure: "ここ・そこ・あそこ + は + N + です / N + は + ここ・そこ・あそこ・どこ + です",
    explanation:
      "Place demonstratives. ここ = near the speaker, そこ = near the listener, あそこ = far from both, どこ = where. They name a location itself or answer a location question.",
    formation:
      "ここ は N です。\nN は そこ です。\nN は どこ ですか。",
    examples: [
      { jp: "ここは教室[きょうしつ]です。", en: "Here is the classroom." },
      { jp: "あそこは銀行[ぎんこう]です。", en: "Over there is a bank." },
      { jp: "図書館[としょかん]はそこです。", en: "The library is there." }
    ],
    notes:
      "For people/polite direction use こちら/そちら/あちら (g-n5-010). どこ is the question form.",
    related: ["g-n5-010", "g-n5-011"]
  },

  {
    id: "g-n5-010",
    point: "こちら / そちら / あちら / どちら",
    reading: "kochira / sochira / achira / dochira",
    level: "N5",
    category: "Demonstratives",
    lesson: 3,
    meaning: "this way / that way / that way over there / which way (polite)",
    structure: "こちら・そちら・あちら + は + N + です / N + は + どちら + ですか",
    explanation:
      "Polite direction/person demonstratives. Used to point people out respectfully (こちらは田中さんです) or to ask which direction something lies in (駅はどちらですか).",
    formation:
      "こちら は N です。\nそちら は N です。\nN は どちら ですか。",
    examples: [
      { jp: "こちらは田中[たなか]さんです。", en: "This (person) is Mr. Tanaka." },
      { jp: "そちらは誰[だれ]ですか。", en: "Who is that (person) over there?" },
      { jp: "駅[えき]はどちらですか。", en: "Which way is the station?" }
    ],
    notes:
      "Polite equivalents of ここ/そこ/あそこ/どこ. どちら can also mean 'which of two'.",
    related: ["g-n5-009", "g-n5-011"]
  },

  {
    id: "g-n5-011",
    point: "N はどこですか",
    reading: "N wa doko desu ka",
    level: "N5",
    category: "Demonstratives",
    lesson: 3,
    meaning: "Where is N?",
    structure: "Noun + は + どこ + ですか",
    explanation:
      "The standard question pattern for asking the location of a specific person or thing. The answer replaces どこ with a place noun or a ここ/そこ/あそこ word.",
    formation:
      "N は どこ ですか。\n→ N は 場所[ばしょ] です。\n→ N は ここ/そこ/あそこ です。",
    examples: [
      { jp: "トイレはどこですか。", en: "Where is the toilet?" },
      { jp: "駅[えき]はどこですか。", en: "Where is the station?" },
      { jp: "田中[たなか]さんはどこですか。", en: "Where is Tanaka?" }
    ],
    notes:
      "Equivalent to 'where is N'. どこ can be replaced by どちら for a polite direction answer.",
    related: ["g-n5-009", "g-n5-010"]
  },

  // ─────────────── Lesson 4: 何時ですか (time) ───────────────
  {
    id: "g-n5-012",
    point: "〜は何時ですか",
    reading: "〜wa nanji desu ka",
    level: "N5",
    category: "Time",
    lesson: 4,
    meaning: "What time is ~? / What time does ~ start?",
    structure: "N + は + 何時[なんじ] + ですか",
    explanation:
      "Asks the clock time of an event or the current time. 今[いま]何時[なんじ]ですか asks 'what time is it now'. Add から / まで to ask start and end times.",
    formation:
      "今[いま] 何時[なんじ] ですか。\nN は 何時[なんじ] から ですか。\nN は 何時[なんじ] まで ですか。",
    examples: [
      { jp: "今[いま]何時[なんじ]ですか。", en: "What time is it now?" },
      { jp: "日本[にほん]は今[いま]何時[なんじ]ですか。", en: "What time is it in Japan now?" },
      { jp: "会議[かいぎ]は何時[なんじ]からですか。", en: "What time does the meeting start?" }
    ],
    notes:
      "何時 is read なんじ (the なん reading of 何 before じ). For minutes use 何分[なんぷん].",
    related: ["g-n5-013", "g-n5-014"]
  },

  {
    id: "g-n5-013",
    point: "〜に (clock time / day)",
    reading: "〜ni",
    level: "N5",
    category: "Time",
    lesson: 4,
    meaning: "at / on (specific time or day)",
    structure: "Time-N / Day-N + に + (verb)",
    explanation:
      "に marks a specific point in time when an action happens: clock times (六時に), days of the week (日曜日に), dates and years. With relative time words like 今日, 明日, 毎日, に is NOT used.",
    formation:
      "数字 + 時 + に + V\n曜日[ようび] + に + V\n（毎日[まいにち]・今日[きょう]・明日[あした] は に なし）",
    examples: [
      { jp: "私[わたし]は六時[ろくじ]に起[お]きます。", en: "I wake up at six o'clock." },
      { jp: "会社[かいしゃ]は九時[くじ]に始[はじ]まります。", en: "The office starts at nine." },
      { jp: "日曜日[にちようび]に休[やす]みます。", en: "I rest on Sunday." }
    ],
    notes:
      "Never say 毎日に or 今日に — relative time words take no に. Specific clock/day/date nouns take に.",
    related: ["g-n5-012", "g-n5-014", "g-n5-022", "g-n5-034"]
  },

  {
    id: "g-n5-014",
    point: "〜から〜まで",
    reading: "〜kara 〜made",
    level: "N5",
    category: "Time",
    lesson: 4,
    meaning: "from ~ to ~ (time or place span)",
    structure: "N1 + から + N2 + まで",
    explanation:
      "Marks the start (から) and end (まで) of a time range or a spatial span. Either part may be omitted: 〜から alone means 'from ~', 〜まで alone means 'until ~'.",
    formation:
      "Time: N から N まで\nPlace: N から N まで\n片方[かたほう]だけ: N から / N まで",
    examples: [
      { jp: "九時[くじ]から五時[ごじ]まで働[はたら]きます。", en: "I work from nine to five." },
      { jp: "月曜日[げつようび]から金曜日[きんようび]まで学校[がっこう]に行[い]きます。", en: "I go to school from Monday to Friday." },
      { jp: "昼休[ひるやす]みは十二時[じゅうにじ]から一時[いちじ]までです。", en: "Lunch break is from twelve to one." }
    ],
    notes:
      "Can also span places: 東京[とうきょう]から大阪[おおさか]まで. Both particles are common to verbs of duration or motion.",
    related: ["g-n5-012", "g-n5-013"]
  },

  // ─────────────── Lesson 5: どこへ行きますか (verbs ます) ───────────────
  {
    id: "g-n5-015",
    point: "V ます (polite non-past)",
    reading: "V masu",
    level: "N5",
    category: "Verb forms",
    lesson: 5,
    meaning: "polite present / future affirmative verb",
    structure: "Verb-stem + ます",
    explanation:
      "The polite non-past form of verbs, used for habitual actions, general truths, and future intentions. ます carries politeness; the stem carries the meaning.",
    formation:
      "Group I: 書[か]く → 書[か]きます\nGroup II: 食[た]べる → 食[た]べます\nGroup III: する → します, 来[く]る → 来[き]ます\nNegative: V-stem + ません",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]学校[がっこう]に行[い]きます。", en: "I go to school every day." },
      { jp: "田中[たなか]さんは新聞[しんぶん]を読[よ]みます。", en: "Tanaka reads the newspaper." },
      { jp: "私[わたし]はコーヒーを飲[の]みます。", en: "I drink coffee." }
    ],
    notes:
      "ます-form is the safe default in polite speech. Past is ました, negative is ません (see L11/L12).",
    related: ["g-n5-016", "g-n5-018", "g-n5-033", "g-n5-036"]
  },

  {
    id: "g-n5-016",
    point: "〜へ (destination / direction)",
    reading: "〜e",
    level: "N5",
    category: "Particles",
    lesson: 5,
    meaning: "to (destination of motion)",
    structure: "Place-N + へ + motion-verb",
    explanation:
      "へ (written 'he', pronounced 'e') marks the destination or direction of a motion verb such as 行[い]きます, 来[き]ます, 帰[かえ]ります. It can be replaced by に for destination, but へ emphasizes direction.",
    formation:
      "場所[ばしょ] + へ + 行[い]きます / 来[き]ます / 帰[かえ]ります\nどこ + へ + 行[い]きますか。",
    examples: [
      { jp: "私[わたし]は日本[にほん]へ行[い]きます。", en: "I am going to Japan." },
      { jp: "田中[たなか]さんは会社[かいしゃ]へ行[い]きます。", en: "Tanaka goes to the office." },
      { jp: "どこへ行[い]きますか。", en: "Where are you going?" }
    ],
    notes:
      "へ and に are often interchangeable for destinations, but へ stresses the direction of motion. へ is never used for time.",
    related: ["g-n5-015", "g-n5-017", "g-n5-031"]
  },

  {
    id: "g-n5-017",
    point: "〜で (means of transport)",
    reading: "〜de",
    level: "N5",
    category: "Particles",
    lesson: 5,
    meaning: "by (means of transportation)",
    structure: "Vehicle / Route-N + で + motion-verb",
    explanation:
      "で marks the means by which an action (especially motion) is performed. With vehicles it means 'by ~': 電車[でんしゃ]で, 車[くるま]で, バスで. 歩[ある]いて is the special exception meaning 'on foot'.",
    formation:
      "電車[でんしゃ] で 行[い]きます\n車[くるま] で 来[き]ます\nバス で 帰[かえ]ります",
    examples: [
      { jp: "私[わたし]は電車[でんしゃ]で会社[かいしゃ]へ行[い]きます。", en: "I go to the office by train." },
      { jp: "田中[たなか]さんは車[くるま]で来[き]ます。", en: "Tanaka comes by car." },
      { jp: "あなたは何[なに]で学校[がっこう]へ行[い]きますか。", en: "How do you go to school? (by what means)" }
    ],
    notes:
      "Do NOT use に for transport (×電車に). で extends to tools and languages in L6 (g-n5-019).",
    related: ["g-n5-015", "g-n5-016", "g-n5-019"]
  },

  // ─────────────── Lesson 6: 何をしますか (を object, で means) ───────────────
  {
    id: "g-n5-018",
    point: "〜を (direct object)",
    reading: "〜o",
    level: "N5",
    category: "Particles",
    lesson: 6,
    meaning: "(marks the direct object of a verb)",
    structure: "Noun + を + transitive-verb",
    explanation:
      "を (pronounced 'o') marks the noun directly acted upon by a transitive verb: the thing eaten, read, bought, studied. It comes right after the object noun.",
    formation:
      "N + を + 食[た]べます / 飲[の]みます\nN + を + 読[よ]みます / 書[か]きます\nN + を + 買[か]います / します",
    examples: [
      { jp: "私[わたし]はコーヒーを飲[の]みます。", en: "I drink coffee." },
      { jp: "田中[たなか]さんは新聞[しんぶん]を読[よ]みます。", en: "Tanaka reads a newspaper." },
      { jp: "私[わたし]は日本語[にほんご]を勉強[べんきょう]します。", en: "I study Japanese." }
    ],
    notes:
      "を is only used as an object marker (and with verbs of traversing like 通[とお]る). Never as a topic or time marker.",
    related: ["g-n5-015", "g-n5-019", "g-n5-020"]
  },

  {
    id: "g-n5-019",
    point: "〜で (means / tool / language)",
    reading: "〜de",
    level: "N5",
    category: "Particles",
    lesson: 6,
    meaning: "with / by means of / in (a language)",
    structure: "Tool-N / Language-N + で + verb",
    explanation:
      "Beyond transport (L5), で marks the tool or instrument used to perform an action (箸[はし]で食[た]べる) and the language used to do something (日本語[にほんご]で書[か]く).",
    formation:
      "道具[どうぐ] + で + V （箸[はし]で 食[た]べる）\n言語[げんご] + で + V （日本語[にほんご]で 書[か]く）",
    examples: [
      { jp: "私[わたし]は箸[はし]でご飯[はん]を食[た]べます。", en: "I eat rice with chopsticks." },
      { jp: "田中[たなか]さんはペンで手紙[てがみ]を書[か]きます。", en: "Tanaka writes a letter with a pen." },
      { jp: "私[わたし]は日本語[にほんご]で手紙[てがみ]を書[か]きます。", en: "I write a letter in Japanese." }
    ],
    notes:
      "で covers three roles: transport (L5), tool (L6), and language (L6). Context distinguishes them.",
    related: ["g-n5-017", "g-n5-018", "g-n5-020"]
  },

  {
    id: "g-n5-020",
    point: "何をしますか (object question)",
    reading: "nani o shimasu ka",
    level: "N5",
    category: "Particles",
    lesson: 6,
    meaning: "What do you do? / What will you do with N?",
    structure: "何[なに] + を + V-ますか / N + を + 何[なに] + V-ますか",
    explanation:
      "Uses the interrogative 何[なに] with を to ask what action is performed, or what is done to a particular object. The answer replaces 何 with a specific noun.",
    formation:
      "何[なに] を しますか。\nN を 何[なに] に しますか。\n週末[しゅうまつ] に 何[なに] を しますか。",
    examples: [
      { jp: "あなたは何[なに]をしますか。", en: "What do you do?" },
      { jp: "週末[しゅうまつ]に何[なに]をしますか。", en: "What do you do on the weekend?" },
      { jp: "田中[たなか]さんは何[なに]を買[か]いますか。", en: "What does Tanaka buy?" }
    ],
    notes:
      "何 is read なに here. Before で (何で) it becomes なんで meaning 'by what means'.",
    related: ["g-n5-018", "g-n5-019"]
  },

  // ─────────────── Lesson 7: 毎日 (frequency & days) ───────────────
  {
    id: "g-n5-021",
    point: "毎〜 (every ~)",
    reading: "mai~",
    level: "N5",
    category: "Time",
    lesson: 7,
    meaning: "every (day / morning / evening / week)",
    structure: "毎 + time-word",
    explanation:
      "Prefix 每 (まい) forms adverbs meaning 'every ~': 毎日[まいにち] (every day), 毎朝[まいあさ] (every morning), 毎晩[まいばん] (every evening), 毎週[まいしゅう] (every week), 毎年[まいとし] (every year). These take NO に.",
    formation:
      "毎日[まいにち] V\n毎朝[まいあさ] V\n毎晩[まいばん] V\n毎週[まいしゅう] V",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]学校[がっこう]へ行[い]きます。", en: "I go to school every day." },
      { jp: "毎朝[まいあさ]コーヒーを飲[の]みます。", en: "I drink coffee every morning." },
      { jp: "毎晩[まいばん]テレビを見[み]ます。", en: "I watch TV every evening." }
    ],
    notes:
      "毎〜 words are relative time adverbs and NEVER take に (×毎日に). They express habitual repetition.",
    related: ["g-n5-022", "g-n5-023", "g-n5-040"]
  },

  {
    id: "g-n5-022",
    point: "〜曜日に (on a day of the week)",
    reading: "〜youbi ni",
    level: "N5",
    category: "Time",
    lesson: 7,
    meaning: "on (a specific weekday)",
    structure: "曜日[ようび]-N + に + verb",
    explanation:
      "Days of the week (月曜日[げつようび] … 日曜日[にちようび]) are specific time nouns, so they take に when an action happens on them. 何曜日[なにようび]に asks 'on what day'.",
    formation:
      "月曜日[げつようび] に V\n日曜日[にちようび] に V\n何曜日[なにようび] に V ますか。",
    examples: [
      { jp: "日曜日[にちようび]に映画[えいが]を見[み]ます。", en: "On Sunday I watch a movie." },
      { jp: "私[わたし]は月曜日[げつようび]に仕事[しごと]をします。", en: "On Monday I work." },
      { jp: "何曜日[なにようび]に学校[がっこう]へ行[い]きますか。", en: "On what day do you go to school?" }
    ],
    notes:
      "曜日 is read ようび. The full set: 月火水木金土日[げつかすいもくきんどにち].",
    related: ["g-n5-013", "g-n5-021", "g-n5-023"]
  },

  {
    id: "g-n5-023",
    point: "Particles に / で / へ / を (daily-life review)",
    reading: "ni / de / e / o",
    level: "N5",
    category: "Particles",
    lesson: 7,
    meaning: "combined particle use for daily activities",
    structure: "Time + に, Means + で, Destination + へ, Object + を",
    explanation:
      "A consolidated review of the four core particles: に marks time and place, で marks means/tool, へ marks destination, を marks the direct object. One sentence often contains several of them.",
    formation:
      "[Time に] [Means で] [Place へ] 行[い]きます\n[Object を] V ます\n[Time に] [Person と] V ます",
    examples: [
      { jp: "私[わたし]は月曜日[げつようび]に電車[でんしゃ]で学校[がっこう]へ行[い]きます。", en: "On Monday I go to school by train." },
      { jp: "毎日[まいにち]日本語[にほんご]を勉強[べんきょう]します。", en: "Every day I study Japanese." },
      { jp: "日曜日[にちようび]に友達[ともだち]と映画[えいが]を見[み]ます。", en: "On Sunday I watch a movie with a friend." }
    ],
    notes:
      "Typical particle order in a sentence: Time → Place/Destination → Means → Object → Verb. Topic は sits near the front.",
    related: ["g-n5-021", "g-n5-022", "g-n5-035"]
  },

  // ─────────────── Lesson 8: どうですか (い-adjectives) ───────────────
  {
    id: "g-n5-024",
    point: "い-adjective (present affirmative 〜いです)",
    reading: "i-adjective ~i desu",
    level: "N5",
    category: "Adjectives",
    lesson: 8,
    meaning: "polite present affirmative of い-adjectives",
    structure: "い-adj stem + い + です",
    explanation:
      "い-adjectives describe qualities and always end in い in the dictionary form. To make them polite-present, just add です after the full い form: 暑[あつ]いです, 高[たか]いです. The い itself carries the meaning; です only adds politeness.",
    formation:
      "暑[あつ]い → 暑[あつ]いです\n高[たか]い → 高[たか]いです\n新[あたら]しい → 新[あたら]しいです\nいい → いいです / 良[よ]いです",
    examples: [
      { jp: "今日[きょう]は暑[あつ]いです。", en: "Today is hot." },
      { jp: "この本[ほん]は新[あたら]しいです。", en: "This book is new." },
      { jp: "あの車[くるま]は高[たか]いです。", en: "That car is expensive." }
    ],
    notes:
      "いい is irregular: its negative and past are based on よい (よくない, よかった). Other い-adjectives conjugate predictably.",
    related: ["g-n5-025", "g-n5-026", "g-n5-038"]
  },

  {
    id: "g-n5-025",
    point: "い-adjective (negative 〜くないです)",
    reading: "i-adjective ~kunai desu",
    level: "N5",
    category: "Adjectives",
    lesson: 8,
    meaning: "polite negative of い-adjectives",
    structure: "い-adj stem (drop い) + くないです",
    explanation:
      "Drop the final い and add くないです (or more formally くありません) to form the polite negative. The く stem is also the basis for the て-form and adverbial use.",
    formation:
      "暑[あつ]い → 暑[あつ]くないです\n高[たか]い → 高[たか]くないです\nいい → よくないです",
    examples: [
      { jp: "今日[きょう]は暑[あつ]くないです。", en: "Today is not hot." },
      { jp: "この本[ほん]は新[あたら]しくないです。", en: "This book is not new." },
      { jp: "あの車[くるま]は高[たか]くないです。", en: "That car is not expensive." }
    ],
    notes:
      "Formal variant: 〜くありません. いい → よくないです (NOT いくない).",
    related: ["g-n5-024", "g-n5-026"]
  },

  {
    id: "g-n5-026",
    point: "〜くて (い-adjective て-form)",
    reading: "〜kute",
    level: "N5",
    category: "Adjectives",
    lesson: 8,
    meaning: "and (joining two い-adjectives)",
    structure: "い-adj stem (drop い) + くて",
    explanation:
      "The て-form of い-adjectives, used to chain adjectives together meaning 'and'. The last adjective carries the tense. Used for describing multiple qualities of one subject.",
    formation:
      "い-adj (−い) + くて\n例: 大[おお]きい → 大[おお]きくて\n最後[さいご]の形容詞[けいようし] が 時制[じせい] を 持[も]つ",
    examples: [
      { jp: "このりんごは大[おお]きくて、赤[あか]いです。", en: "This apple is big and red." },
      { jp: "日本語[にほんご]は難[むずか]しくて、面白[おもしろ]いです。", en: "Japanese is difficult and interesting." },
      { jp: "今日[きょう]は暑[あつ]くて、忙[いそが]しいです。", en: "Today is hot and busy." }
    ],
    notes:
      "For な-adjectives the て-form is 〜で (静[しず]かで). いい → よくて.",
    related: ["g-n5-024", "g-n5-025", "g-n5-027"]
  },

  // ─────────────── Lesson 9: 好きですか (な-adjectives & が) ───────────────
  {
    id: "g-n5-027",
    point: "な-adjective (〜な N / 〜です)",
    reading: "na-adjective",
    level: "N5",
    category: "Adjectives",
    lesson: 9,
    meaning: "polite present of な-adjectives",
    structure: "な-adj stem + です / な-adj stem + な + N",
    explanation:
      "な-adjectives (静[しず]か, 有名[ゆうめい], 元気[げんき]) take です directly when predicative (静かです) and な when modifying a noun (静かな町). The な is dropped before です.",
    formation:
      "predicate: 静[しず]か + です\nmodifier: 静[しず]か + な + N\nnegative: 静[しず]かじゃないです",
    examples: [
      { jp: "この町[まち]は静[しず]かです。", en: "This town is quiet." },
      { jp: "田中[たなか]さんは親切[しんせつ]な人[ひと]です。", en: "Tanaka is a kind person." },
      { jp: "あの建物[たてもの]は有名[ゆうめい]です。", en: "That building is famous." }
    ],
    notes:
      "Some な-adjectives look like い-adjectives (きれい, 嫌[きら]い) — check the dictionary form. きれい ends in い but is a な-adj.",
    related: ["g-n5-026", "g-n5-028", "g-n5-039"]
  },

  {
    id: "g-n5-028",
    point: "好きです / 嫌いです",
    reading: "suki desu / kirai desu",
    level: "N5",
    category: "Adjectives",
    lesson: 9,
    meaning: "(I) like / (I) dislike",
    structure: "Topic + は + Object + が + 好[す]きです / 嫌[きら]いです",
    explanation:
      "好[す]き and 嫌[きら]い are な-adjectives expressing preference. The liked/disliked thing is marked by が (not を) because the topic is the person who feels the preference.",
    formation:
      "N が 好[す]きです\nN が 嫌[きら]いです\nとても 好[す]きです / 全然[ぜんぜん] 嫌[きら]いです",
    examples: [
      { jp: "私[わたし]は音楽[おんがく]が好[す]きです。", en: "I like music." },
      { jp: "田中[たなか]さんは野菜[やさい]が嫌[きら]いです。", en: "Tanaka dislikes vegetables." },
      { jp: "あなたはどんなスポーツが好[す]きですか。", en: "What kind of sports do you like?" }
    ],
    notes:
      "Although they describe feelings, 好[す]き/嫌[きら]い are な-adjectives, so their modifier form is 好きな N. Very common with とても (very).",
    related: ["g-n5-027", "g-n5-029"]
  },

  {
    id: "g-n5-029",
    point: "〜が (subject of 好き / 上手)",
    reading: "〜ga",
    level: "N5",
    category: "Particles",
    lesson: 9,
    meaning: "marks the thing liked / skill object",
    structure: "Person + は + N + が + 好[す]きです / 上手[じょうず]です",
    explanation:
      "With preference and ability adjectives (好[す]き, 嫌[きら]い, 上手[じょうず], 下手[へた], 分[わ]かる), the subject of the feeling is marked by が, while the experiencer is the topic marked by は.",
    formation:
      "N が 好[す]きです / 嫌[きら]いです\nN が 上手[じょうず]です / 下手[へた]です\nN が 分[わ]かります",
    examples: [
      { jp: "私[わたし]は日本語[にほんご]が上手[じょうず]です。", en: "I am good at Japanese." },
      { jp: "田中[たなか]さんは料理[りょうり]が下手[へた]です。", en: "Tanaka is bad at cooking." },
      { jp: "私[わたし]は犬[いぬ]が好[す]きです。", en: "I like dogs." }
    ],
    notes:
      "This が is sometimes called the 'descriptive subject' が. Do not use を with 好[す]き/上手[じょうず].",
    related: ["g-n5-027", "g-n5-028"]
  },

  // ─────────────── Lesson 10: 家族 (の modifier & family) ───────────────
  {
    id: "g-n5-030",
    point: "N の N (possessive / modifier)",
    reading: "N no N",
    level: "N5",
    category: "Modifying",
    lesson: 10,
    meaning: "N's N / N modifying N",
    structure: "N1 + の + N2",
    explanation:
      "の links two nouns. It expresses possession (私[わたし]の本[ほん] = my book), affiliation (大学[だいがく]の先生[せんせい] = a university teacher), or the material/origin/content of the second noun (日本語[にほんご]の本[ほん] = a Japanese-language book).",
    formation:
      "人[ひと] + の + N (possessive)\n所属[しょぞく] + の + N (affiliation)\n内容[ないよう]/言語[げんご] + の + N",
    examples: [
      { jp: "これは私[わたし]の本[ほん]です。", en: "This is my book." },
      { jp: "田中[たなか]さんは大学[だいがく]の先生[せんせい]です。", en: "Tanaka is a university teacher." },
      { jp: "日本語[にほんご]の本[ほん]はこれです。", en: "The Japanese(-language) book is this one." }
    ],
    notes:
      "When the second noun is understood, の can stand alone: これは私[わたし]のです (This is mine).",
    related: ["g-n5-006", "g-n5-032"]
  },

  {
    id: "g-n5-031",
    point: "〜に あります / います (existence)",
    reading: "〜ni arimasu / imasu",
    level: "N5",
    category: "Verb forms",
    lesson: 10,
    meaning: "(a thing) is at ~ / (a person/animal) is at ~",
    structure: "Subject + は + Place + に + あります / います",
    explanation:
      "Two verbs of existence: あります for non-living things (book, car, building) and います for living beings (people, animals). The place where something exists is marked by に.",
    formation:
      "N は 場所[ばしょ] に あります (non-living)\nN は 場所[ばしょ] に います (living)\n場所[ばしょ] に N が あります / います",
    examples: [
      { jp: "本[ほん]は机[つくえ]の上[うえ]にあります。", en: "The book is on the desk." },
      { jp: "田中[たなか]さんは教室[きょうしつ]にいます。", en: "Tanaka is in the classroom." },
      { jp: "犬[いぬ]は庭[にわ]にいます。", en: "The dog is in the garden." }
    ],
    notes:
      "Choosing あります vs います is the key. Plants are usually あります; robots are あります even though they move.",
    related: ["g-n5-016", "g-n5-015"]
  },

  {
    id: "g-n5-032",
    point: "ご〜 / お〜 (honorific prefix, family)",
    reading: "go~ / o~",
    level: "N5",
    category: "Modifying",
    lesson: 10,
    meaning: "polite prefix for family terms / nouns",
    structure: "ご / お + family-N (referring to others' family)",
    explanation:
      "ご and お are honorific prefixes. When talking about someone else's family, use お父[とう]さん, お母[かあ]さん, ご家族[かぞく]; for your own family use the plain 父[ちち], 毋[はは]. ご is generally used for Chinese-origin words, お for native Japanese words.",
    formation:
      "自分[じぶん]の家族[かぞく]: 父[ちち]・母[はは]・兄[あに]・姉[あね]\n他人[たにん]の家族[かぞく]: お父[とう]さん・お母[かあ]さん・お兄[にい]さん・ご家族[かぞく]",
    examples: [
      { jp: "この人[ひと]は私[わたし]の父[ちち]です。", en: "This person is my father." },
      { jp: "お母[かあ]さんはどこですか。", en: "Where is your mother?" },
      { jp: "ご家族[かぞく]は何人[なんにん]ですか。", en: "How many people are in your family?" }
    ],
    notes:
      "The plain vs. honorific distinction in family terms is essential for polite conversation: 父[ちち] (my father) vs お父[とう]さん (someone else's father).",
    related: ["g-n5-030", "g-n5-008"]
  },

  // ─────────────── Lesson 11: 何時に起きますか (daily routine) ───────────────
  {
    id: "g-n5-033",
    point: "V ます / V ません (daily routine)",
    reading: "V masu / V masen",
    level: "N5",
    category: "Verb forms",
    lesson: 11,
    meaning: "polite present affirmative / negative verb",
    structure: "V-stem + ます / V-stem + ません",
    explanation:
      "Reviews the polite non-past verb pair in the context of daily routines. ます is affirmative ('do'), ません is negative ('do not'). ません is also used for politely refusing invitations.",
    formation:
      "起[お]きます / 起[お]きません\n寝[ね]ます / 寝[ね]ません\n働[はたら]きます / 働[はたら]きません",
    examples: [
      { jp: "私[わたし]は毎朝[まいあさ]六時[ろくじ]に起[お]きます。", en: "I wake up at six every morning." },
      { jp: "田中[たなか]さんは夜[よる]十一時[じゅういちじ]に寝[ね]ます。", en: "Tanaka goes to bed at eleven at night." },
      { jp: "私[わたし]は日曜日[にちようび]に働[はたら]きません。", en: "I don't work on Sunday." }
    ],
    notes:
      "ましょう (let's ~) is the volitional extension of ます, taught later. ませんでした is the past negative (L12).",
    related: ["g-n5-015", "g-n5-034", "g-n5-035", "g-n5-037"]
  },

  {
    id: "g-n5-034",
    point: "〜に (time + verb of routine)",
    reading: "〜ni",
    level: "N5",
    category: "Time",
    lesson: 11,
    meaning: "at (a clock time for a routine action)",
    structure: "Clock-time + に + routine-verb",
    explanation:
      "Applied to daily routines: clock times take に to mark when a habitual action occurs (六時[ろくじ]に起[お]きます). This is the same に as L4 but now bound to verbs of daily life.",
    formation:
      "数字 + 時 + に + V\n六時[ろくじ] に 起[お]きます\n七時[しちじ] に 食[た]べます",
    examples: [
      { jp: "六時[ろくじ]に起[お]きます。", en: "I wake up at six." },
      { jp: "七時[しちじ]に朝[あさ]ご飯[はん]を食[た]べます。", en: "I eat breakfast at seven." },
      { jp: "十時[じゅうじ]に寝[ね]ます。", en: "I go to bed at ten." }
    ],
    notes:
      "Relative time words (今日[きょう], 明日[あした], 毎日[まいにち]) take NO に; specific clock times DO take に.",
    related: ["g-n5-013", "g-n5-033"]
  },

  {
    id: "g-n5-035",
    point: "Particles に / で / へ / を (routine review)",
    reading: "ni / de / e / o",
    level: "N5",
    category: "Particles",
    lesson: 11,
    meaning: "combined particle use for daily routine",
    structure: "Time に, Means で, Destination へ, Object を",
    explanation:
      "Reviews how the four core particles combine in one routine sentence: time of action (に), means (で), destination (へ), and direct object (を). Mastery here underpins all later verb grammar.",
    formation:
      "[Time に] [家[いえ] で] [Object を] V\n[Time に] [Vehicle で] [Place へ] 行[い]きます\n[夜[よる]] [Object を] V",
    examples: [
      { jp: "私[わたし]は七時[しちじ]に家[いえ]で朝[あさ]ご飯[はん]を食[た]べます。", en: "At seven I eat breakfast at home." },
      { jp: "八時[はちじ]に電車[でんしゃ]で会社[かいしゃ]へ行[い]きます。", en: "At eight I go to the office by train." },
      { jp: "夜[よる]日本語[にほんご]を勉強[べんきょう]します。", en: "At night I study Japanese." }
    ],
    notes:
      "家[いえ]で uses で for the place of action (where you eat). 家へ uses へ for destination (where you go).",
    related: ["g-n5-023", "g-n5-033", "g-n5-034"]
  },

  // ─────────────── Lesson 12: 先週何をしましたか (past tense) ───────────────
  {
    id: "g-n5-036",
    point: "V ました (past affirmative)",
    reading: "V mashita",
    level: "N5",
    category: "Tense",
    lesson: 12,
    meaning: "polite past affirmative verb",
    structure: "V-stem + ました",
    explanation:
      "The polite past form of verbs, describing completed actions: 'I went', 'I ate', 'I read'. Formed by replacing ます with ました. Used for past events and completed actions.",
    formation:
      "行[い]きます → 行[い]きました\n食[た]べます → 食[た]べました\n読[よ]みます → 読[よ]みました\nします → しました",
    examples: [
      { jp: "昨日[きのう]、私[わたし]は映画[えいが]を見[み]ました。", en: "Yesterday I watched a movie." },
      { jp: "田中[たなか]さんは新聞[しんぶん]を読[よ]みました。", en: "Tanaka read the newspaper." },
      { jp: "私[わたし]はコーヒーを飲[の]みました。", en: "I drank coffee." }
    ],
    notes:
      "The plain past form differs by verb group (行[い]った, 食[た]べた, した). ました is the polite cover for all groups.",
    related: ["g-n5-015", "g-n5-033", "g-n5-037", "g-n5-038"]
  },

  {
    id: "g-n5-037",
    point: "V ませんでした (past negative)",
    reading: "V masen deshita",
    level: "N5",
    category: "Tense",
    lesson: 12,
    meaning: "polite past negative verb",
    structure: "V-stem + ませんでした",
    explanation:
      "The polite past negative: 'did not ~'. Formed by adding でした after ません. Note the structure is literally 'not + was-doing' rather than a single inflection.",
    formation:
      "行[い]きます → 行[い]きませんでした\n食[た]べます → 食[た]べませんでした\n読[よ]みます → 読[よ]みませんでした\nします → しませんでした",
    examples: [
      { jp: "昨日[きのう]、私[わたし]は学校[がっこう]へ行[い]きませんでした。", en: "Yesterday I did not go to school." },
      { jp: "田中[たなか]さんは仕事[しごと]をしませんでした。", en: "Tanaka did not work." },
      { jp: "私[わたし]は朝[あさ]ご飯[はん]を食[た]べませんでした。", en: "I did not eat breakfast." }
    ],
    notes:
      "Compare with present negative ません (don't ~). The でした ending alone turns any polite negative into past.",
    related: ["g-n5-033", "g-n5-036"]
  },

  {
    id: "g-n5-038",
    point: "い-adjective past 〜かったです",
    reading: "i-adjective ~katta desu",
    level: "N5",
    category: "Tense",
    lesson: 12,
    meaning: "polite past of い-adjectives",
    structure: "い-adj stem (drop い) + かったです",
    explanation:
      "Drop the final い and add かったです to form the polite past of an い-adjective: 暑[あつ]かったです ('was hot'). The です only adds politeness; the tense is on かった.",
    formation:
      "暑[あつ]い → 暑[あつ]かったです\n新[あたら]しい → 新[あたら]しかったです\nいい → 良[よ]かったです (irregular)",
    examples: [
      { jp: "昨日[きのう]は暑[あつ]かったです。", en: "Yesterday was hot." },
      { jp: "この本[ほん]は面白[おもしろ]かったです。", en: "This book was interesting." },
      { jp: "あの旅行[りょこう]は楽[たの]しかったです。", en: "That trip was fun." }
    ],
    notes:
      "いい has the irregular past よかったです (NOT いかった). Negative past is 〜くなかったです.",
    related: ["g-n5-024", "g-n5-036", "g-n5-039"]
  },

  {
    id: "g-n5-039",
    point: "な-adjective / N past 〜でした / じゃなかったです",
    reading: "na-adj / N ~deshita / ~janakatta desu",
    level: "N5",
    category: "Tense",
    lesson: 12,
    meaning: "polite past of な-adjectives and nouns",
    structure: "な-adj stem + でした / N + でした / 〜じゃなかったです",
    explanation:
      "For な-adjectives and nouns, the polite past affirmative uses でした (静[しず]かでした, 学生[がくせい]でした). The past negative is 〜じゃなかったです or 〜ではありませんでした.",
    formation:
      "な-adj: 静[しず]か + でした / 静[しず]か + じゃなかったです\nN: N + でした / N + じゃなかったです",
    examples: [
      { jp: "昔[むかし]、ここは静[しず]かでした。", en: "Long ago this place was quiet." },
      { jp: "田中[たなか]さんは学生[がくせい]でした。", en: "Tanaka was a student." },
      { jp: "昨日[きのう]は休[やす]みじゃなかったです。", en: "Yesterday was not a day off." }
    ],
    notes:
      "な-adjectives and nouns share the same past pattern because they both attach directly to です/でした. Compare with い-adj past かったです.",
    related: ["g-n5-027", "g-n5-038", "g-n5-036"]
  },

  // ─────────────── Lesson 13: 毎日何をしますか (frequency & review) ───────────────
  {
    id: "g-n5-040",
    point: "frequency adverbs: よく / 時々 / あまり〜ない",
    reading: "yoku / tokidoki / amari~nai",
    level: "N5",
    category: "Time",
    lesson: 13,
    meaning: "often / sometimes / not often",
    structure: "よく V-ます / 時々 V-ます / あまり V-ません",
    explanation:
      "Adverbs of frequency describe how often an action happens. よく = often (affirmative), 時々[ときどき] = sometimes, あまり with a negative verb = not often, 全然[ぜんぜん] with a negative = not at all.",
    formation:
      "よく V (affirmative)\n時々[ときどき] V (affirmative)\nあまり V-ません (negative)\n全然[ぜんぜん] V-ません (negative)",
    examples: [
      { jp: "私[わたし]はよく映画[えいが]を見[み]ます。", en: "I often watch movies." },
      { jp: "田中[たなか]さんは時々[ときどき]日本[にほん]へ行[い]きます。", en: "Tanaka sometimes goes to Japan." },
      { jp: "私[わたし]はあまり肉[にく]を食[た]べません。", en: "I don't eat meat very often." }
    ],
    notes:
      "あまり and 全然[ぜんぜん] must be paired with a NEGATIVE verb. よく and 時々 go with affirmative verbs.",
    related: ["g-n5-021", "g-n5-041", "g-n5-042"]
  },

  {
    id: "g-n5-041",
    point: "〜に会う (meet someone)",
    reading: "〜ni au",
    level: "N5",
    category: "Particles",
    lesson: 13,
    meaning: "to meet / see (a person)",
    structure: "Person-N + に + 会[あ]います",
    explanation:
      "会[あ]う ('to meet') takes the person met marked by に, NOT を. The particle に here indicates the counterpart of the meeting. Past tense is 会[あ]いました.",
    formation:
      "人[ひと] に 会[あ]います\n友達[ともだち] に 会[あ]いました\n誰[だれ] に 会[あ]いましたか。",
    examples: [
      { jp: "私[わたし]は明日[あした]友達[ともだち]に会[あ]います。", en: "Tomorrow I will meet a friend." },
      { jp: "昨日[きのう]、田中[たなか]さんに会[あ]いました。", en: "Yesterday I met Tanaka." },
      { jp: "誰[だれ]に会[あ]いましたか。", en: "Who did you meet?" }
    ],
    notes:
      "Always に会う, never を会う. To 'run into by chance' use ふと 会[あ]う / 偶然[ぐうぜん] 会[あ]う.",
    related: ["g-n5-018", "g-n5-015", "g-n5-036"]
  },

  {
    id: "g-n5-042",
    point: "Particles に / で / へ / を (final review)",
    reading: "ni / de / e / o",
    level: "N5",
    category: "Particles",
    lesson: 13,
    meaning: "consolidated use of core N5 particles",
    structure: "Time に, Means で, Destination へ, Object を, Frequency + V",
    explanation:
      "A final consolidated review combining frequency adverbs with the four core particles. By L13 a typical sentence stacks several particles: frequency → time → means → destination → object → verb.",
    formation:
      "[頻度[ひんど]] [Time に] [Means で] [Place へ] V\n[頻度[ひんど]] [Object を] V\n[Time に] [Person に] 会[あ]う",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]電車[でんしゃ]で会社[かいしゃ]へ行[い]きます。", en: "Every day I go to the office by train." },
      { jp: "日曜日[にちようび]に友達[ともだち]と映画[えいが]を見[み]ます。", en: "On Sunday I watch a movie with a friend." },
      { jp: "時々[ときどき]日本語[にほんご]の本[ほん]を読[よ]みます。", en: "Sometimes I read Japanese books." }
    ],
    notes:
      "Particle mastery at N5 is recursive: every later lesson reinforces に/で/へ/を. Frequency adverbs sit before the time phrase.",
    related: ["g-n5-023", "g-n5-035", "g-n5-040"]
  }
];

export const minnaN5LessonTitles: { lesson: number; title: string; topic: string }[] = [
  { lesson: 1, title: "はじめまして", topic: "Greetings & self-introduction (は〜です copula)" },
  { lesson: 2, title: "これ・それ・あれ", topic: "Demonstratives: これ/それ/あれ & この/その/あの" },
  { lesson: 3, title: "ここ・そこ・あそこ", topic: "Place demonstratives & こちら/そちら/あちら" },
  { lesson: 4, title: "何時ですか", topic: "Telling time, 〜から〜まで, に for clock time" },
  { lesson: 5, title: "どこへ行きますか", topic: "Polite verbs (ます), へ destination, で transport" },
  { lesson: 6, title: "何をしますか", topic: "Direct object を, means/tool で, 何を question" },
  { lesson: 7, title: "まいにち", topic: "毎〜 frequency, days of week に, particle review" },
  { lesson: 8, title: "どうですか", topic: "い-adjectives: present, negative, 〜くて" },
  { lesson: 9, title: "好きですか", topic: "な-adjectives, 好き/嫌い, が subject of preference" },
  { lesson: 10, title: "家族", topic: "Possessive/modifying の, family terms, ご/お prefixes" },
  { lesson: 11, title: "何時に起きますか", topic: "Daily routine verbs, time + に, particle review" },
  { lesson: 12, title: "先週何をしましたか", topic: "Past tense: ました/ませんでした, かった/だった" },
  { lesson: 13, title: "毎日何をしますか", topic: "Frequency adverbs, 〜に会う, particle consolidation" }
];
