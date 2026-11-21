import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
//
// JLPT N5 grammar points following Minna no Nihongo Shokyuu I, lessons 1–25.
// ~61 points (2–3 per lesson). One file covering all 25 lessons.

export const grammarN5: GrammarData[] = [
  // ───────────────────────── Lesson 1: 〜は〜です ─────────────────────────
  {
    id: "gmn5-L1-01",
    point: "〜は〜です",
    reading: "〜wa 〜desu",
    level: "N5",
    lesson: 17,
    category: "Copula",
    meaning: "A is B (polite equational statement)",
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
      "は is pronounced 'wa' only as a topic particle. です does not change for person or number.",
    related: ["gmn5-L1-02", "gmn5-L1-03", "gmn5-L10-01"]
  },
  {
    id: "gmn5-L1-02",
    point: "〜じゃないです / 〜ではありません",
    reading: "〜janai desu / 〜dewa arimasen",
    level: "N5",
    lesson: 17,
    category: "Copula",
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
      "ではありません appears in writing and formal speech; じゃないです is common in everyday conversation.",
    related: ["gmn5-L1-01", "gmn5-L1-03", "gmn5-L10-02"]
  },
  {
    id: "gmn5-L1-03",
    point: "〜ですか",
    reading: "〜desu ka",
    level: "N5",
    lesson: 17,
    category: "Copula",
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
    related: ["gmn5-L1-01", "gmn5-L1-02"]
  },

  // ───────────────────────── Lesson 2: これ/それ/あれ ─────────────────────────
  {
    id: "gmn5-L2-01",
    point: "これ / それ / あれ",
    reading: "kore / sore / are",
    level: "N5",
    lesson: 18,
    category: "Particles",
    meaning: "this / that / that over there (demonstrative pronouns)",
    structure: "これ / それ / あれ + です",
    explanation:
      "これ refers to a thing near the speaker, それ to a thing near the listener, and あれ to a thing far from both. They stand alone as pronouns and are followed by です or a particle.",
    formation:
      "これ (near speaker) = this\nそれ (near listener) = that\nあれ (far from both) = that over there\nQuestion: どれ (which one)",
    examples: [
      { jp: "これは本[ほん]です。", en: "This is a book." },
      { jp: "それは私[わたし]の傘[かさ]です。", en: "That is my umbrella." },
      { jp: "あれは学校[がっこう]です。", en: "That over there is a school." }
    ],
    notes:
      "When the speaker and listener are far apart (e.g. on the phone), これ is near the speaker and それ is far from the speaker (often near the listener).",
    related: ["gmn5-L2-02", "gmn5-L2-03", "gmn5-L3-01"]
  },
  {
    id: "gmn5-L2-02",
    point: "この / その / あの + N",
    reading: "kono / sono / ano + N",
    level: "N5",
    lesson: 18,
    category: "Modifying",
    meaning: "this / that / that N (demonstrative modifiers)",
    structure: "この / その / あの + Noun",
    explanation:
      "These are the noun-modifying counterparts of これ / それ / あれ. They cannot stand alone and must always be followed by a noun. The distance distinctions match the pronoun forms.",
    formation:
      "この N (near speaker) = this N\nその N (near listener) = that N\nあの N (far from both) = that N over there\nQuestion: どの N (which N)",
    examples: [
      { jp: "この本[ほん]は私[わたし]のです。", en: "This book is mine." },
      { jp: "その車[くるま]は新[あたら]しいです。", en: "That car is new." },
      { jp: "あの人[ひと]は田中[たなか]さんです。", en: "That person over there is Tanaka." }
    ],
    notes:
      "Compare これは本です (this is a book) with この本は… (this book is…). The modifier form requires a noun to follow.",
    related: ["gmn5-L2-01", "gmn5-L2-03"]
  },
  {
    id: "gmn5-L2-03",
    point: "N1 の N2",
    reading: "N1 no N2",
    level: "N5",
    lesson: 18,
    category: "Modifying",
    meaning: "N2 belonging to / of N1 (possessive の)",
    structure: "Noun1 + の + Noun2",
    explanation:
      "の links two nouns, expressing possession, affiliation, or relationship. The first noun modifies the second. With the question word だれ (who), it becomes だれの (whose).",
    formation:
      "Possession: N の N (田中[たなか]さんの車[くるま] = Tanaka's car)\nAffiliation: N の N (大学[だいがく]の先生[せんせい] = university teacher)\nQuestion: だれの N (whose N)",
    examples: [
      { jp: "これは私[わたし]の本[ほん]です。", en: "This is my book." },
      { jp: "田中[たなか]さんの車[くるま]は新[あたら]しいです。", en: "Tanaka's car is new." },
      { jp: "あれはだれの傘[かさ]ですか。", en: "Whose umbrella is that?" }
    ],
    notes:
      "When the second noun is understood from context, it can be dropped: これは私の（本）です。",
    related: ["gmn5-L2-01", "gmn5-L2-02", "gmn5-L22-01"]
  },

  // ───────────────────────── Lesson 3: ここ/そこ/あそこ ─────────────────────────
  {
    id: "gmn5-L3-01",
    point: "ここ / そこ / あそこ",
    reading: "koko / soko / asoko",
    level: "N5",
    lesson: 18,
    category: "Particles",
    meaning: "here / there / over there (place demonstratives)",
    structure: "ここ / そこ / あそこ + です",
    explanation:
      "Place demonstratives parallel to これ / それ / あれ. ここ is near the speaker, そこ is near the listener, and あそこ is far from both. They indicate locations and are followed by です or a particle such as に or で.",
    formation:
      "ここ (near speaker) = here\nそこ (near listener) = there\nあそこ (far from both) = over there\nQuestion: どこ (where)",
    examples: [
      { jp: "ここは学校[がっこう]です。", en: "Here is a school." },
      { jp: "そこに私[わたし]の本[ほん]があります。", en: "My book is there." },
      { jp: "あそこに郵便局[ゆうびんきょく]があります。", en: "There is a post office over there." }
    ],
    notes:
      "どこ is the question form. Note どこ not どここ. Distinctions shift on the phone the same way as これ/それ/あれ.",
    related: ["gmn5-L2-01", "gmn5-L3-02", "gmn5-L11-01"]
  },
  {
    id: "gmn5-L3-02",
    point: "こちら / そちら / あちら",
    reading: "kochira / sochira / achira",
    level: "N5",
    lesson: 18,
    category: "Particles",
    meaning: "this way / that way / that way over there (polite direction)",
    structure: "こちら / そちら / あちら + です",
    explanation:
      "Polite demonstratives of direction or person. They can replace ここ / そこ / あそこ for places, and also serve as polite ways to refer to people (こちら is 'this person').",
    formation:
      "こちら (near speaker) = this way / this person\nそちら (near listener) = that way / that person\nあちら (far from both) = that way / that person\nQuestion: どちら (which way / who - polite)",
    examples: [
      { jp: "こちらは田中[たなか]さんです。", en: "This is Mr. Tanaka." },
      { jp: "お手洗[てあら]いはあちらです。", en: "The restroom is that way." },
      { jp: "どちらから来[き]ましたか。", en: "Where are you from?" }
    ],
    notes:
      "どちら is the polite equivalent of どこ and だれ. In business contexts こちら is preferred over これ for introducing people.",
    related: ["gmn5-L3-01", "gmn5-L5-02"]
  },

  // ───────────────────────── Lesson 4: 時間 ─────────────────────────
  {
    id: "gmn5-L4-01",
    point: "〜は何時ですか",
    reading: "〜wa nan-ji desu ka",
    level: "N5",
    lesson: 19,
    category: "Copula",
    meaning: "What time is ~?",
    structure: "Topic + は + 何時 + ですか",
    explanation:
      "Used to ask the time. 何時 (なんじ) means 'what time'. Time is read by combining the number with 時 (じ) for hours and 分 (ふん / ぷん) for minutes.",
    formation:
      "Hours: 数字 + 時 (いちじ = 1:00)\nMinutes: 数字 + 分 (さんじゅっぷん = 30 min)\nHalf: はん (さんじはん = 3:30)\nAM: ごぜん / PM: ごご",
    examples: [
      { jp: "今[いま]何時[なんじ]ですか。", en: "What time is it now?" },
      { jp: "試験[しけん]は何時[なんじ]からですか。", en: "What time does the exam start?" },
      { jp: "毎朝[まいあさ]六時[ろくじ]に起[お]きます。", en: "I wake up at six every morning." }
    ],
    notes:
      "Minute readings alternate between ふん and ぷん depending on the preceding number (e.g. いっぷん, にふん, さんぷん, よんぷん, ごふん).",
    related: ["gmn5-L4-02", "gmn5-L5-01"]
  },
  {
    id: "gmn5-L4-02",
    point: "〜から〜まで",
    reading: "〜kara 〜made",
    level: "N5",
    lesson: 19,
    category: "Particles",
    meaning: "from ~ to / until ~ (time or place range)",
    structure: "N1 + から + N2 + まで",
    explanation:
      "から marks the starting point and まで marks the ending point. Together they express a span of time or distance. Either may be omitted if context is clear.",
    formation:
      "Time range: 時間[じかん] から 時間 まで\nPlace range: 場所[ばしょ] から 場所 まで\nFrom only: N から\nUntil only: N まで",
    examples: [
      { jp: "銀行[ぎんこう]は九時[くじ]から三時[さんじ]までです。", en: "The bank is open from 9 to 3." },
      { jp: "月曜日[げつようび]から金曜日[きんようび]まで働[はたら]きます。", en: "I work from Monday to Friday." },
      { jp: "東京[とうきょう]から大阪[おおさか]まで新幹線[しんかんせん]で行[い]きます。", en: "I go from Tokyo to Osaka by Shinkansen." }
    ],
    notes:
      "Both particles can also be used alone: 会社[かいしゃ]までバスで行きます (I go to the company by bus).",
    related: ["gmn5-L4-01", "gmn5-L5-01", "gmn5-L5-02"]
  },

  // ───────────────────────── Lesson 5: 〜へ行きます ─────────────────────────
  {
    id: "gmn5-L5-01",
    point: "〜へ / に 行きます",
    reading: "〜e / ni ikimasu",
    level: "N5",
    lesson: 19,
    category: "Particles",
    meaning: "go to ~ (destination)",
    structure: "Place + へ / に + 行きます / 来ます / 帰ります",
    explanation:
      "へ (pronounced 'e' as a particle) marks the destination of a movement verb such as 行きます (go), 来ます (come), or 帰ります (return). に can replace へ with the same meaning.",
    formation:
      "Destination: 場所[ばしょ] へ 行[い]きます\nAlso valid: 場所 に 行[い]きます\nReturning home: 家[いえ] に 帰[かえ]ります",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]学校[がっこう]へ行[い]きます。", en: "I go to school every day." },
      { jp: "日曜日[にちようび]に映画館[えいがかん]に行[い]きます。", en: "I go to the movie theater on Sunday." },
      { jp: "今晚[こんばん]家[いえ]に帰[かえ]ります。", en: "I will return home tonight." }
    ],
    notes:
      "へ emphasises direction, に emphasises the destination point. In everyday speech に is more common.",
    related: ["gmn5-L4-02", "gmn5-L5-02", "gmn5-L6-01"]
  },
  {
    id: "gmn5-L5-02",
    point: "〜から来ました",
    reading: "〜kara kimashita",
    level: "N5",
    lesson: 19,
    category: "Particles",
    meaning: "I come from ~ (origin / nationality)",
    structure: "Place + から + 来ました",
    explanation:
      "Used to state where one comes from, including country or hometown. から marks the origin and 来ました is the past polite of 来る (to come).",
    formation:
      "From a country: 国[くに] から 来[き]ました\nFrom a city: 都市[とし] から 来[き]ました\nQuestion: どこ から 来[き]ましたか",
    examples: [
      { jp: "私[わたし]は中国[ちゅうごく]から来[き]ました。", en: "I come from China." },
      { jp: "田中[たなか]さんは大阪[おおさか]から来[き]ました。", en: "Tanaka came from Osaka." },
      { jp: "どちらから来[き]ましたか。", en: "Where do you come from?" }
    ],
    notes:
      "Polite question どちらから来ましたか is preferred in business over どこから来ましたか.",
    related: ["gmn5-L3-02", "gmn5-L5-01"]
  },

  // ───────────────────────── Lesson 6: 〜を食べます ─────────────────────────
  {
    id: "gmn5-L6-01",
    point: "〜を〜ます",
    reading: "〜o 〜masu",
    level: "N5",
    lesson: 19,
    category: "Particles",
    meaning: "do ~ to/with (direct object marker)",
    structure: "Noun + を + Verb (masu-form)",
    explanation:
      "を marks the direct object of a transitive verb — the thing that the action is done to. It is pronounced 'o' even though it is written を.",
    formation:
      "Eat: N を 食[た]べます\nDrink: N を 飲[の]みます\nRead: N を 読[よ]みます\nWatch: N を 見[み]ます",
    examples: [
      { jp: "私[わたし]はパンを食[た]べます。", en: "I eat bread." },
      { jp: "毎朝[まいあさ]コーヒーを飲[の]みます。", en: "I drink coffee every morning." },
      { jp: "夜[よる]テレビを見[み]ます。", en: "I watch TV at night." }
    ],
    notes:
      "を only marks the direct object. With movement verbs like 通る (pass through) or 出る (leave), を marks the place passed through or exited.",
    related: ["gmn5-L6-02", "gmn5-L7-01", "gmn5-L12-01"]
  },
  {
    id: "gmn5-L6-02",
    point: "何をしますか",
    reading: "nani o shimasu ka",
    level: "N5",
    lesson: 20,
    category: "Particles",
    meaning: "What will (you) do?",
    structure: "何 + を + しますか",
    explanation:
      "A general question asking what action someone performs. 何 (なに / なん) is the question word for 'what', and します is the polite form of する (to do).",
    formation:
      "Question: 何[なに] を しますか\nPast: 何 を しましたか\nWith time: 時間[じかん] に 何 を しますか",
    examples: [
      { jp: "週末[しゅうまつ]何[なに]をしますか。", en: "What will you do on the weekend?" },
      { jp: "明日[あした]何をしますか。", en: "What will you do tomorrow?" },
      { jp: "暇[ひま]な時[とき]、何をしますか。", en: "What do you do when you are free?" }
    ],
    notes:
      "Before を or で, 何 is usually read なに. Before です or counters it is often なん (e.g. 何時に).",
    related: ["gmn5-L6-01", "gmn5-L7-01"]
  },

  // ───────────────────────── Lesson 7: 〜で (method) ─────────────────────────
  {
    id: "gmn5-L7-01",
    point: "〜で (方法・交通手段)",
    reading: "〜de (method / transport)",
    level: "N5",
    lesson: 20,
    category: "Particles",
    meaning: "by ~ (means of transport or method)",
    structure: "Vehicle / Method + で + 行きます / 帰ります",
    explanation:
      "で marks the means or method used to perform an action. With movement verbs it indicates the vehicle (バスで, 電車で) or method of travel (歩いて).",
    formation:
      "By vehicle: バス / 電車[でんしゃ] / 車[くるま] で 行[い]きます\nOn foot: 歩[ある]いて 行[い]きます\nBy bike: 自転車[じてんしゃ] で 行[い]きます",
    examples: [
      { jp: "私[わたし]はバスで学校[がっこう]へ行[い]きます。", en: "I go to school by bus." },
      { jp: "東京[とうきょう]まで新幹線[しんかんせん]で行[い]きます。", en: "I go to Tokyo by Shinkansen." },
      { jp: "駅[えき]まで歩[ある]いて帰[かえ]ります。", en: "I walk home to the station." }
    ],
    notes:
      "When walking, use 歩いて (the te-form of 歩く) instead of 歩きで. で is dropped for this single exception.",
    related: ["gmn5-L5-01", "gmn5-L7-02", "gmn5-L6-02"]
  },
  {
    id: "gmn5-L7-02",
    point: "〜で (道具・手段)",
    reading: "〜de (tool / instrument)",
    level: "N5",
    lesson: 20,
    category: "Particles",
    meaning: "with ~ (tool or instrument)",
    structure: "Tool + で + Verb",
    explanation:
      "Same particle で, but now marking the tool or instrument used to perform an action: chopsticks, a pen, a language, etc.",
    formation:
      "Tool: はし / ナイフ / 手[て] で 食[た]べます\nLanguage: 日本語[にほんご] で 書[か]きます\nMaterial: 紙[かみ] で 作[つく]ります",
    examples: [
      { jp: "はしでラーメンを食[た]べます。", en: "I eat ramen with chopsticks." },
      { jp: "ボールペンで手紙[てがみ]を書[か]きます。", en: "I write a letter with a ballpoint pen." },
      { jp: "日本語[にほんご]で話[はな]します。", en: "I speak in Japanese." }
    ],
    notes:
      "で also marks the language used (日本語で) and the material something is made of (木でできた家 - a house made of wood).",
    related: ["gmn5-L7-01", "gmn5-L6-01"]
  },

  // ───────────────────────── Lesson 8: i-adjectives ─────────────────────────
  {
    id: "gmn5-L8-01",
    point: "い形容詞 + です",
    reading: "i-keiyoushi + desu",
    level: "N5",
    lesson: 20,
    category: "Adjectives",
    meaning: "is ~ (i-adjective, present affirmative)",
    structure: "い-adj (stem + い) + です",
    explanation:
      "i-adjectives end in い in their dictionary form. The polite present affirmative is formed by simply adding です after the adjective. The い itself is part of the adjective, not the copula.",
    formation:
      "Affirmative: い-adj です (暑[あつ]いです = it's hot)\nNegative: 〜くないです (暑くないです = it's not hot)\nQuestion: い-adj ですか",
    examples: [
      { jp: "今日[きょう]は暑[あつ]いです。", en: "Today is hot." },
      { jp: "この本[ほん]は面白[おもしろ]いです。", en: "This book is interesting." },
      { jp: "その車[くるま]は新[あたら]しいですか。", en: "Is that car new?" }
    ],
    notes:
      "Some adjectives look like i-adjectives but are nouns (きれい, ゆうめい). Check whether い attaches to the stem or is part of the word.",
    related: ["gmn5-L8-02", "gmn5-L8-03", "gmn5-L9-01"]
  },
  {
    id: "gmn5-L8-02",
    point: "い形容詞 〜くないです",
    reading: "i-keiyoushi ~kunai desu",
    level: "N5",
    lesson: 20,
    category: "Adjectives",
    meaning: "is not ~ (i-adjective negative)",
    structure: "い-adj stem + くないです / くありません",
    explanation:
      "To negate an i-adjective, drop the final い and add くないです (colloquial) or くありません (formal). This conjugation is independent of the copula.",
    formation:
      "Colloquial: 〜くないです (暑[あつ]くないです)\nFormal: 〜くありません (暑くありません)\nQuestion: 〜くないですか",
    examples: [
      { jp: "この部屋[へや]は広[ひろ]くないです。", en: "This room is not spacious." },
      { jp: "今日[きょう]は寒[さむ]くありません。", en: "Today is not cold." },
      { jp: "その映画[えいが]は面白[おもしろ]くないですか。", en: "Isn't that movie uninteresting?" }
    ],
    notes:
      "The い in いい (good) changes irregularly: いい → よくないです, not いくないです. Past: よかったです.",
    related: ["gmn5-L8-01", "gmn5-L8-03", "gmn5-L10-03"]
  },
  {
    id: "gmn5-L8-03",
    point: "い形容詞 + 名詞",
    reading: "i-keiyoushi + meishi",
    level: "N5",
    lesson: 21,
    category: "Modifying",
    meaning: "(adj) N (i-adjective modifying a noun)",
    structure: "い-adj (dictionary form) + Noun",
    explanation:
      "i-adjectives can directly modify a noun with no change in form. The dictionary form (ending in い) is placed immediately before the noun.",
    formation:
      "Adj + N: い-adj + N (広[ひろ]い部屋[へや] = spacious room)\nNeg + N: 〜くない + N (広くない部屋 = unspacious room)\nPast + N: 〜かった + N (暑[あつ]かった日[ひ] = hot day)",
    examples: [
      { jp: "これは高[たか]い本[ほん]です。", en: "This is an expensive book." },
      { jp: "私[わたし]は新[あたら]しい車[くるま]を買[か]いました。", en: "I bought a new car." },
      { jp: "小[ちい]さな犬[いぬ]がいます。", en: "There is a small dog." }
    ],
    notes:
      "Some i-adjectives have a 'small な' variant: 小さい / 小さな, 大きい / 大きな. Both forms modify nouns, but 〜な cannot end a predicate.",
    related: ["gmn5-L8-01", "gmn5-L9-02", "gmn5-L22-01"]
  },

  // ───────────────────────── Lesson 9: na-adjectives & 〜が好き ─────────────────────────
  {
    id: "gmn5-L9-01",
    point: "な形容詞 + です",
    reading: "na-keiyoushi + desu",
    level: "N5",
    lesson: 21,
    category: "Adjectives",
    meaning: "is ~ (na-adjective, present affirmative)",
    structure: "na-adj stem + です",
    explanation:
      "na-adjectives behave like nouns. The dictionary form ends in だ (casual) or です (polite) when used as a predicate. The な only appears when the adjective modifies a noun.",
    formation:
      "Affirmative: な-adj(.stem) + です (静[しず]かです = it's quiet)\nNegative: な-adj + じゃないです / ではありません\nQuestion: な-adj + ですか",
    examples: [
      { jp: "この町[まち]は静[しず]かです。", en: "This town is quiet." },
      { jp: "田中[たなか]さんは親切[しんせつ]です。", en: "Tanaka is kind." },
      { jp: "その映画[えいが]は有名[ゆうめい]ですか。", en: "Is that movie famous?" }
    ],
    notes:
      "Some words look like i-adjectives but are na-adjectives (きれい, ゆうめい). The い is part of the kanji reading, not an i-adjective ending.",
    related: ["gmn5-L9-02", "gmn5-L9-03", "gmn5-L8-01"]
  },
  {
    id: "gmn5-L9-02",
    point: "な形容詞 + な + 名詞",
    reading: "na-keiyoushi + na + meishi",
    level: "N5",
    lesson: 21,
    category: "Modifying",
    meaning: "(adj) N (na-adjective modifying a noun)",
    structure: "na-adj stem + な + Noun",
    explanation:
      "When a na-adjective modifies a noun, な is inserted between the stem and the noun. The な form is the connector — never used as a predicate by itself.",
    formation:
      "Affirmative: な-adj + な + N (静[しず]かな町[まち] = quiet town)\nNeg modifier: な-adj + じゃない + N (静かじゃない町)\nPast modifier: な-adj + だった + N (静かだった町)",
    examples: [
      { jp: "静[しず]かな部屋[へや]で勉強[べんきょう]します。", en: "I study in a quiet room." },
      { jp: "田中[たなか]さんは親切[しんせつ]な人[ひと]です。", en: "Tanaka is a kind person." },
      { jp: "きれいな花[はな]を買[か]いました。", en: "I bought beautiful flowers." }
    ],
    notes:
      "Common na-adjectives: 静か (quiet), 親切 (kind), 有名 (famous), きれい (pretty/clean), 元気 (healthy), 暇 (free).",
    related: ["gmn5-L9-01", "gmn5-L9-03", "gmn5-L8-03"]
  },
  {
    id: "gmn5-L9-03",
    point: "〜が好きです / 〜が嫌いです",
    reading: "〜ga suki desu / 〜ga kirai desu",
    level: "N5",
    lesson: 21,
    category: "Adjectives",
    meaning: "(I) like / dislike ~",
    structure: "Noun + が + 好きです / 嫌いです / 上手です / 下手です",
    explanation:
      "Words expressing preference or skill (好き, 嫌い, 上手, 下手) are na-adjective-like and take が (not を) to mark the object of like/dislike. は may replace が to topicalise.",
    formation:
      "Like: N が 好[す]きです\nDislike: N が 嫌[きら]いです\nGood at: N が 上手[じょうず]です\nBad at: N が 下手[へた]です\nDegree: とても / あまり(〜くない)",
    examples: [
      { jp: "私[わたし]は音楽[おんがく]が好[す]きです。", en: "I like music." },
      { jp: "田中[たなか]さんは魚[さかな]が嫌[きら]いです。", en: "Tanaka dislikes fish." },
      { jp: "妹[いもうと]は料理[りょうり]が上手[じょうず]です。", en: "My younger sister is good at cooking." }
    ],
    notes:
      "好き and 嫌い take が because they describe a state of the experiencer, not a transitive action. は can mark the topic instead: 私は音楽は好きです。",
    related: ["gmn5-L9-01", "gmn5-L9-02"]
  },

  // ───────────────────────── Lesson 10: 〜でした (past) ─────────────────────────
  {
    id: "gmn5-L10-01",
    point: "〜でした",
    reading: "〜deshita",
    level: "N5",
    lesson: 21,
    category: "Tense",
    meaning: "was / were (past copula affirmative)",
    structure: "N + は + N + でした",
    explanation:
      "The past affirmative form of the copula です. Used for noun-predicate sentences about the past: identity, nationality, occupation, etc.",
    formation:
      "Affirmative: N は N でした\nQuestion: N は N でしたか\nNegative: N は N じゃなかったです / ではありませんでした",
    examples: [
      { jp: "昨日[きのう]は休[やす]みでした。", en: "Yesterday was a day off." },
      { jp: "私[わたし]は子供[こども]の頃[ころ]学生[がくせい]でした。", en: "I was a student when I was a child." },
      { jp: "あれは何[なん]でしたか。", en: "What was that?" }
    ],
    notes:
      "でした is the past of です. Time words like 昨日, 先週, 去年 often accompany past sentences.",
    related: ["gmn5-L1-01", "gmn5-L10-02", "gmn5-L10-03"]
  },
  {
    id: "gmn5-L10-02",
    point: "〜じゃなかったです / 〜ではありませんでした",
    reading: "〜janakatta desu / 〜dewa arimasen deshita",
    level: "N5",
    lesson: 22,
    category: "Tense",
    meaning: "was not / were not (past copula negative)",
    structure: "N + は + N + じゃなかったです / ではありませんでした",
    explanation:
      "The past negative of the copula. じゃなかったです is colloquial-polite; ではありませんでした is the formal version. Both negate the past identity.",
    formation:
      "Colloquial: N は N じゃなかったです\nFormal: N は N ではありませんでした\nQuestion: N は N じゃなかったですか",
    examples: [
      { jp: "昨日[きのう]は雨[あめ]じゃなかったです。", en: "Yesterday was not rainy." },
      { jp: "私[わたし]は高校生[こうこうせい]ではありませんでした。", en: "I was not a high school student." },
      { jp: "その人[ひと]は先生[せんせい]じゃなかったですか。", en: "Wasn't that person a teacher?" }
    ],
    notes:
      "Add か to form the question. The formal version ではありませんでした is preferred in writing.",
    related: ["gmn5-L1-02", "gmn5-L10-01"]
  },
  {
    id: "gmn5-L10-03",
    point: "い形容詞 〜かったです",
    reading: "i-keiyoushi ~katta desu",
    level: "N5",
    lesson: 22,
    category: "Tense",
    meaning: "was ~ (i-adjective past affirmative)",
    structure: "い-adj stem + かったです",
    explanation:
      "To put an i-adjective in the past affirmative, drop い and add かったです. The です only adds politeness; the conjugation itself is on the adjective.",
    formation:
      "Affirmative: 〜かったです (暑[あつ]かったです = it was hot)\nNegative: 〜くなかったです (暑くなかったです = it wasn't hot)\nQuestion: 〜かったですか",
    examples: [
      { jp: "昨日[きのう]は暑[あつ]かったです。", en: "Yesterday was hot." },
      { jp: "その映画[えいが]は面白[おもしろ]かったです。", en: "That movie was interesting." },
      { jp: "旅行[りょこう]は楽[たの]しかったですか。", en: "Was the trip fun?" }
    ],
    notes:
      "いい (good) conjugates irregularly: よかったです (was good), よくなかったです (was not good).",
    related: ["gmn5-L8-01", "gmn5-L8-02", "gmn5-L10-01"]
  },

  // ───────────────────────── Lesson 11: counters ─────────────────────────
  {
    id: "gmn5-L11-01",
    point: "〜に〜があります / 〜がいます",
    reading: "〜ni 〜ga arimasu / imasu",
    level: "N5",
    lesson: 22,
    category: "Particles",
    meaning: "there is ~ in/at ~ (existence)",
    structure: "Place + に + N + が + あります / います",
    explanation:
      "Used to state that something exists in a place. あります is used for inanimate objects (books, buildings); います is used for living beings (people, animals).",
    formation:
      "Inanimate: 場所[ばしょ] に N が あります\nLiving: 場所 に N が います\nQuestion: 場所 に N が ありますか / いますか",
    examples: [
      { jp: "部屋[へや]に机[つくえ]があります。", en: "There is a desk in the room." },
      { jp: "公園[こうえん]に子供[こども]がいます。", en: "There are children in the park." },
      { jp: "庭[にわ]に犬[いぬ]がいますか。", en: "Is there a dog in the garden?" }
    ],
    notes:
      "Choose あります vs います by animacy. Plants are usually treated as inanimate (木があります). Robots take あります (non-living).",
    related: ["gmn5-L11-02", "gmn5-L11-03", "gmn5-L3-01"]
  },
  {
    id: "gmn5-L11-02",
    point: "助数詞 (〜つ / 個 / 枚 / 人 / はい)",
    reading: "josuushi (tsu / ko / mai / nin / hai)",
    level: "N5",
    lesson: 22,
    category: "Particles",
    meaning: "counters for things and people",
    structure: "Number + counter (+ の + Noun)",
    explanation:
      "Japanese uses different counters depending on the shape or kind of the counted object. 〜つ is a generic counter for small items (1–9); 個 is for small objects; 枚 for flat things; 人 for people; はい for cups.",
    formation:
      "Generic (1–9): 一[ひと]つ、二[ふた]つ…九[ここの]つ\nSmall items: 一[いっ]個、二[に]個…\nFlat objects: 一[いち]枚、二[に]枚…\nPeople: 一[ひと]り、二[ふた]り、三人[さんにん]…\nCups: 一[いっ]ぱい、二[にはい]…",
    examples: [
      { jp: "りんごを三[みっ]つ買[か]いました。", en: "I bought three apples." },
      { jp: "紙[かみ]を二[に]枚ください。", en: "Please give me two sheets of paper." },
      { jp: "この部屋[へや]に五人[ごにん]います。", en: "There are five people in this room." }
    ],
    notes:
      "Many counters have sound changes: 一本[いっぽん], 三本[さんぼん], 八本[はっぽん]. Some numbers take special readings (一人[ひとり], 二人[ふたり]).",
    related: ["gmn5-L11-01", "gmn5-L11-03"]
  },
  {
    id: "gmn5-L11-03",
    point: "〜は〜にあります / 〜にいます",
    reading: "〜wa 〜ni arimasu / imasu",
    level: "N5",
    lesson: 22,
    category: "Particles",
    meaning: "~ is in/at ~ (location statement)",
    structure: "Topic + は + Place + に + あります / います",
    explanation:
      "The reversed counterpart of 〜に〜があります. Here the topic is the thing that exists and the place is specified. This pattern answers 'where is ~?'.",
    formation:
      "Inanimate: N は 場所[ばしょ] に あります\nLiving: N は 場所 に います\nQuestion: N は どこ に ありますか",
    examples: [
      { jp: "私[わたし]の本[ほん]は机[つくえ]の上[うえ]にあります。", en: "My book is on the desk." },
      { jp: "田中[たなか]さんは会社[かいしゃ]にいます。", en: "Tanaka is at the company." },
      { jp: "トイレはどこにありますか。", en: "Where is the toilet?" }
    ],
    notes:
      "Use あります for things and います for people/animals. Compare: 部屋に机があります vs 机は部屋にあります — same fact, different focus.",
    related: ["gmn5-L11-01", "gmn5-L11-02", "gmn5-L3-01"]
  },

  // ───────────────────────── Lesson 12: 〜ました (past verbs) ─────────────────────────
  {
    id: "gmn5-L12-01",
    point: "〜ました",
    reading: "〜mashita",
    level: "N5",
    lesson: 23,
    category: "Tense",
    meaning: "did ~ (past affirmative verb)",
    structure: "Verb stem (masu-form) + ました",
    explanation:
      "The past affirmative form of a masu-verb. Drop ます from the polite non-past and replace it with ました. Used for completed actions in the past.",
    formation:
      "Affirmative: V-ます → V-ました (食[た]べました = ate)\nNegative: V-ませんでした (食べませんでした = didn't eat)\nQuestion: V-ましたか",
    examples: [
      { jp: "私[わたし]は朝[あさ]パンを食[た]べました。", en: "I ate bread this morning." },
      { jp: "昨日[きのう]映画[えいが]を見[み]ました。", en: "I watched a movie yesterday." },
      { jp: "週末[しゅうまつ]何[なに]をしましたか。", en: "What did you do over the weekend?" }
    ],
    notes:
      "Past tense uses time markers like 昨日, 先週, 去年. Verbs do not agree with the subject — no person/number inflection.",
    related: ["gmn5-L6-01", "gmn5-L12-02", "gmn5-L1-01"]
  },
  {
    id: "gmn5-L12-02",
    point: "〜ませんでした",
    reading: "〜masen deshita",
    level: "N5",
    lesson: 23,
    category: "Tense",
    meaning: "did not ~ (past negative verb)",
    structure: "Verb stem (masu-form) + ませんでした",
    explanation:
      "The past negative of a polite verb. Formed by adding でした after ません. Used to deny that an action was performed in the past.",
    formation:
      "Negative: V-ませんでした (食[た]べませんでした = didn't eat)\nQuestion: V-ませんでしたか (didn't you eat?)\nPolite nuance: more formal than casual negative",
    examples: [
      { jp: "私[わたし]は昨夜[さくや]勉強[べんきょう]しませんでした。", en: "I didn't study last night." },
      { jp: "田中[たなか]さんは来[き]ませんでした。", en: "Tanaka didn't come." },
      { jp: "朝[あさ]ごはんを食[た]べませんでしたか。", en: "Didn't you eat breakfast?" }
    ],
    notes:
      "〜ませんでした is the only standard past negative in polite Japanese. Avoid the colloquial 〜なかったです at N5 level.",
    related: ["gmn5-L12-01", "gmn5-L6-01"]
  },

  // ───────────────────────── Lesson 13: 〜たい (want) ─────────────────────────
  {
    id: "gmn5-L13-01",
    point: "〜たいです",
    reading: "〜tai desu",
    level: "N5",
    lesson: 23,
    category: "Want-Desire",
    meaning: "want to ~ (desire for one's own action)",
    structure: "Verb stem (masu-stem) + たいです",
    explanation:
      "たい attaches to the verb stem (the part before ます) to express the speaker's own desire to perform an action. It conjugates as an i-adjective: たくない, たかった.",
    formation:
      "Affirmative: V-stem + たいです (食[た]べたいです = want to eat)\nNegative: V-stem + たくないです (食べたくないです)\nPast: V-stem + たかったです",
    examples: [
      { jp: "私[わたし]は寿司[すし]を食[た]べたいです。", en: "I want to eat sushi." },
      { jp: "今夜[こんや]映画[えいが]を見[み]たいです。", en: "I want to see a movie tonight." },
      { jp: "どこへ行[い]きたいですか。", en: "Where do you want to go?" }
    ],
    notes:
      "たい is generally used for the speaker's own desire. Asking a second person's desire is acceptable but slightly direct; for third parties use 〜たがる at N4 level.",
    related: ["gmn5-L13-02", "gmn5-L6-01", "gmn5-L21-01"]
  },
  {
    id: "gmn5-L13-02",
    point: "〜たくないです / 〜たくありません",
    reading: "〜takunai desu / 〜taku arimasen",
    level: "N5",
    lesson: 23,
    category: "Want-Desire",
    meaning: "do not want to ~ (negative desire)",
    structure: "Verb stem + たくないです / たくありません",
    explanation:
      "The negative of 〜たい. Drop たい and add たくないです (colloquial) or たくありません (formal). たい conjugates like an i-adjective.",
    formation:
      "Colloquial: V-stem + たくないです\nFormal: V-stem + たくありません\nPast neg: V-stem + たくなかったです",
    examples: [
      { jp: "私[わたし]は今日[きょう]働[はたら]きたくないです。", en: "I don't want to work today." },
      { jp: "肉[にく]を食[た]べたくありません。", en: "I don't want to eat meat." },
      { jp: "まだ帰[かえ]りたくないですか。", en: "Don't you want to go home yet?" }
    ],
    notes:
      "Avoid directly asking superiors 〜たくないですか — too blunt. Use 〜ませんか for softer suggestions.",
    related: ["gmn5-L13-01", "gmn5-L21-02"]
  },

  // ───────────────────────── Lesson 14: 〜てください (request) ─────────────────────────
  {
    id: "gmn5-L14-01",
    point: "て形 (テ形)",
    reading: "te-kei",
    level: "N5",
    lesson: 23,
    category: "Verb forms",
    meaning: "te-form (intermediate connective form of verbs)",
    structure: "Verb → te-form (group-dependent conjugation)",
    explanation:
      "The te-form is a versatile intermediate verb form used to connect clauses, make requests (〜てください), describe ongoing actions (〜ている), and form many compound patterns. Conjugation depends on the verb's group.",
    formation:
      "Group I: varies by final kana (書[か]く→書いて, 飲[の]む→飲んで, 話[はな]す→話して)\nGroup II: drop る → て (食[た]べる→食べて, 見[み]る→見て)\nGroup III: する→して, 来[く]る→来[き]て",
    examples: [
      { jp: "私[わたし]は朝[あさ]起[お]きて、顔[かお]を洗[あら]います。", en: "I wake up in the morning and wash my face." },
      { jp: "これを見[み]てください。", en: "Please look at this." },
      { jp: "窓[まど]を開[あ]けて、空[そら]を見[み]ます。", en: "I open the window and look at the sky." }
    ],
    notes:
      "Group I te-form has four endings: 〜って, 〜んで, 〜いて, 〜いで, plus 〜して for す verbs and 〜って for う つ る verbs. Memorise by row.",
    related: ["gmn5-L14-02", "gmn5-L14-03", "gmn5-L15-01", "gmn5-L16-01"]
  },
  {
    id: "gmn5-L14-02",
    point: "〜てください",
    reading: "〜te kudasai",
    level: "N5",
    lesson: 24,
    category: "Suggestions",
    meaning: "please do ~ (soft request)",
    structure: "Verb te-form + ください",
    explanation:
      "Attaching ください to a verb's te-form makes a polite request. It is softer than a direct command but still expects compliance; commonly used for instructions and favours.",
    formation:
      "Affirmative: V-て + ください (書[か]いてください = please write)\nNegative: V-ないで + ください (書かないでください = please don't write)\nPoliter: V-て + いただけますか",
    examples: [
      { jp: "ここに名前[なまえ]を書[か]いてください。", en: "Please write your name here." },
      { jp: "もう一度[いちど]言[い]ってください。", en: "Please say it once more." },
      { jp: "少[すこ]し待[ま]ってください。", en: "Please wait a moment." }
    ],
    notes:
      "〜てください is fine with peers and in service contexts. With superiors use 〜ていただけませんか or 〜ていただけると助かります.",
    related: ["gmn5-L14-01", "gmn5-L14-03", "gmn5-L16-02"]
  },
  {
    id: "gmn5-L14-03",
    point: "〜て、〜ます (動作の連続)",
    reading: "〜te, 〜masu (action sequence)",
    level: "N5",
    lesson: 24,
    category: "Conjunctions",
    meaning: "do ~ and (then) do ~ (sequential actions)",
    structure: "V1 te-form + 、 + V2 (masu-form)",
    explanation:
      "Two or more verbs in the te-form can be joined to describe actions performed in sequence. Only the final verb carries tense; the te-forms are tenseless.",
    formation:
      "Sequence: V1-て、V2-ます\nPast: V1-て、V2-ました\nThree actions: V1-て、V2-て、V3-ます",
    examples: [
      { jp: "朝[あさ]起[お]きて、顔[かお]を洗[あら]って、ごはんを食[た]べます。", en: "I wake up, wash my face, and eat breakfast." },
      { jp: "駅[えき]に行[い]って、切符[きっぷ]を買[か]いました。", en: "I went to the station and bought a ticket." },
      { jp: "家[いえ]に帰[かえ]って、シャワーを浴[あ]びます。", en: "I return home and take a shower." }
    ],
    notes:
      "Avoid using 〜て、… to describe actions by different subjects, which can sound like the same subject did all of them.",
    related: ["gmn5-L14-01", "gmn5-L14-02", "gmn5-L16-01"]
  },

  // ───────────────────────── Lesson 15: 〜てもいいです (permission) ─────────────────────────
  {
    id: "gmn5-L15-01",
    point: "〜てもいいです",
    reading: "〜te mo ii desu",
    level: "N5",
    lesson: 24,
    category: "Permission",
    meaning: "you may ~ (permission granted)",
    structure: "Verb te-form + も + いいです",
    explanation:
      "Used to grant permission or state that an action is permissible. The speaker allows the action. To ask for permission, add か: 〜てもいいですか.",
    formation:
      "Granting: V-て + も + いいです (帰[かえ]ってもいいです = you may go home)\nAsking: V-て + も + いいですか (帰ってもいいですか = may I go home?)\nAnswer yes: いいですよ / どうぞ",
    examples: [
      { jp: "ここでタバコを吸[す]ってもいいです。", en: "You may smoke here." },
      { jp: "写真[しゃしん]を撮[と]ってもいいですか。", en: "May I take a photo?" },
      { jp: "明日[あした]休[やす]んでもいいですか。", en: "May I take tomorrow off?" }
    ],
    notes:
      "In response, いいですよ / どうぞ grants permission; ちょっと… or 〜ないでください softens a refusal.",
    related: ["gmn5-L15-02", "gmn5-L15-03", "gmn5-L14-02"]
  },
  {
    id: "gmn5-L15-02",
    point: "〜てもいいですか",
    reading: "〜te mo ii desu ka",
    level: "N5",
    lesson: 24,
    category: "Permission",
    meaning: "may I ~? (asking permission)",
    structure: "Verb te-form + も + いいですか",
    explanation:
      "The question form of 〜てもいいです. The speaker asks whether an action is allowed. It is the standard polite way to request permission.",
    formation:
      "Question: V-て + も + いいですか\nGranting answer: ええ、いいですよ / どうぞ\nRefusing answer: すみません、ちょっと… / 〜ないでください",
    examples: [
      { jp: "窓[まど]を開[あ]けてもいいですか。", en: "May I open the window?" },
      { jp: "この本[ほん]を借[か]りてもいいですか。", en: "May I borrow this book?" },
      { jp: "ここに座[すわ]ってもいいですか。", en: "May I sit here?" }
    ],
    notes:
      "Polite refusals avoid a flat だめ. Use 申し訳ありませんが… or 〜てはいけません for formal prohibition.",
    related: ["gmn5-L15-01", "gmn5-L15-03"]
  },
  {
    id: "gmn5-L15-03",
    point: "〜てはいけません",
    reading: "〜te wa ikemasen",
    level: "N5",
    lesson: 24,
    category: "Obligation",
    meaning: "must not ~ (prohibition)",
    structure: "Verb te-form + は + いけません",
    explanation:
      "Used to forbid an action. The pattern states that something is not allowed. Stronger than 〜ないでください, it expresses a rule or rule-like prohibition.",
    formation:
      "Prohibition: V-て + は + いけません (入[はい]ってはいけません = do not enter)\nColloquial: V-て + は + だめです (入ってはだめです)\nCasual: V-ちゃだめ",
    examples: [
      { jp: "ここで写真[しゃしん]を撮[と]ってはいけません。", en: "You must not take photos here." },
      { jp: "教室[きょうしつ]でタバコを吸[す]ってはいけません。", en: "You must not smoke in the classroom." },
      { jp: "危[あぶ]ないから、触[さわ]ってはいけません。", en: "It's dangerous, so you must not touch it." }
    ],
    notes:
      "〜てはだめです is the casual equivalent. In signs, often written as 禁止[きんし] (e.g. 駐車禁止[ちゅうしゃきんし]).",
    related: ["gmn5-L15-01", "gmn5-L15-02", "gmn5-L16-02"]
  },

  // ───────────────────────── Lesson 16: 〜てから (sequence) ─────────────────────────
  {
    id: "gmn5-L16-01",
    point: "〜てから",
    reading: "〜te kara",
    level: "N5",
    lesson: 25,
    category: "Conjunctions",
    meaning: "after doing ~ (then ~)",
    structure: "Verb te-form + から + Verb2",
    explanation:
      "Used to express that one action is completed before the next begins. Unlike a simple 〜て sequence, 〜てから emphasises the order and completion of the first action.",
    formation:
      "Sequence: V1-て + から + V2 (食[た]べてから、出[で]かけます = after eating, I go out)\nPast: V1-て + から + V2-ました\nNegative V1: V1-ないで + から (rare — use V1-ないで V2)",
    examples: [
      { jp: "ごはんを食[た]べてから、学校[がっこう]へ行[い]きます。", en: "After eating, I go to school." },
      { jp: "宿題[しゅくだい]をしてから、テレビを見[み]ます。", en: "After doing homework, I watch TV." },
      { jp: "手[て]を洗[あら]ってから、食[た]べましょう。", en: "Let's eat after washing our hands." }
    ],
    notes:
      "〜てから stresses completion. 〜て alone is more neutral. 〜てから cannot join two actions by different subjects.",
    related: ["gmn5-L14-01", "gmn5-L14-03", "gmn5-L20-01"]
  },
  {
    id: "gmn5-L16-02",
    point: "〜ないでください",
    reading: "〜nai de kudasai",
    level: "N5",
    lesson: 25,
    category: "Suggestions",
    meaning: "please do not ~ (negative request)",
    structure: "Verb nai-form + で + ください",
    explanation:
      "The negative counterpart of 〜てください. It politely asks the listener not to do something. Formed from the nai-form (drop ません, add ない) plus でください.",
    formation:
      "Negative request: V-ない + で + ください (書[か]かないでください = please don't write)\nPoliter: V-ないで + いただきたいのですが\nSofter: V-ないで + ほしい",
    examples: [
      { jp: "ここに車[くるま]を止[と]めないでください。", en: "Please don't park here." },
      { jp: "夜[よる]遅[おそ]く電話[でんわ]しないでください。", en: "Please don't call late at night." },
      { jp: "心配[しんぱい]しないでください。", en: "Please don't worry." }
    ],
    notes:
      "Softer than 〜てはいけません. For strangers/rules use the prohibition pattern; for personal favours use 〜ないでください.",
    related: ["gmn5-L14-02", "gmn5-L15-03"]
  },

  // ───────────────────────── Lesson 17: 〜より〜のほうが ─────────────────────────
  {
    id: "gmn5-L17-01",
    point: "N1 より N2 のほうが〜です",
    reading: "N1 yori N2 no hou ga ~desu",
    level: "N5",
    lesson: 25,
    category: "Comparisons",
    meaning: "N2 is more ~ than N1",
    structure: "N1 + より + N2 + のほうが + Adj です",
    explanation:
      "Used to compare two items. より marks the lesser item and のほうが marks the greater one (the one that more strongly has the adjective).",
    formation:
      "Comparison: N1 より N2 のほうが い-adj/な-adj です\nWith verbs: N1 より N2 のほうが 好きです\nReversed: N2 のほうが N1 より〜です",
    examples: [
      { jp: "東京[とうきょう]より大阪[おおさか]のほうが大[おお]きいです。", en: "Osaka is bigger than Tokyo." },
      { jp: "夏[なつ]より冬[ふゆ]のほうが好[す]きです。", en: "I like winter more than summer." },
      { jp: "バスより電車[でんしゃ]のほうが速[はや]いです。", en: "The train is faster than the bus." }
    ],
    notes:
      "The order can be swapped (N2 のほうが N1 より〜です) without changing meaning. のほうが marks the subject that has more of the quality.",
    related: ["gmn5-L17-02", "gmn5-L17-03"]
  },
  {
    id: "gmn5-L17-02",
    point: "N1 と N2 とどちらが〜ですか",
    reading: "N1 to N2 to dochira ga ~desu ka",
    level: "N5",
    lesson: 25,
    category: "Comparisons",
    meaning: "which is more ~, N1 or N2?",
    structure: "N1 + と + N2 + と + どちらが + Adj ですか",
    explanation:
      "A question form used to ask which of two items is more ~. The answer uses のほうが: N2 のほうが〜です.",
    formation:
      "Question: N1 と N2 と どちらが Adj ですか\nAnswer: N のほうが〜です\nPolite Q: どちら / Casual Q: どっち",
    examples: [
      { jp: "肉[にく]と魚[さかな]とどちらが好[す]きですか。", en: "Which do you like better, meat or fish?" },
      { jp: "夏[なつ]と冬[ふゆ]とどちらが暑[あつ]いですか。", en: "Which is hotter, summer or winter?" },
      { jp: "土曜日[どようび]と日曜日[にちようび]とどちらが忙[いそが]しいですか。", en: "Which is busier, Saturday or Sunday?" }
    ],
    notes:
      "For three or more items, use 〜の中[なか]でいちばん instead. どちら is polite; どっち is casual.",
    related: ["gmn5-L17-01", "gmn5-L17-03"]
  },
  {
    id: "gmn5-L17-03",
    point: "〜でいちばん〜です",
    reading: "〜de ichiban ~desu",
    level: "N5",
    lesson: 25,
    category: "Comparisons",
    meaning: "~ is the most ~ in/among ~ (superlative)",
    structure: "Category + の + 中で + N + が + いちばん + Adj です",
    explanation:
      "The superlative pattern. いちばん means 'most' and 〜の中で narrows the comparison set. The noun marked by が is the one that is most ~.",
    formation:
      "In a category: N の 中[なか]で + N が いちばん + Adj です\nOf a group: N の 中で いちばん + Adj な N\nQuestion: N の 中で どれ / だれ / 何 が いちばん〜ですか",
    examples: [
      { jp: "日本[にほん]で富士山[ふじさん]がいちばん高[たか]いです。", en: "Mt. Fuji is the tallest in Japan." },
      { jp: "果物[くだもの]の中[なか]でりんごがいちばん好[す]きです。", en: "Among fruits, I like apples the most." },
      { jp: "クラスでだれがいちばん背[せ]が高[たか]いですか。", en: "Who is the tallest in the class?" }
    ],
    notes:
      "いちばん = 'number one / most'. For places you can drop の中で: 日本でいちばん高い山.",
    related: ["gmn5-L17-01", "gmn5-L17-02"]
  },

  // ───────────────────────── Lesson 18: 〜ています (state) ─────────────────────────
  {
    id: "gmn5-L18-01",
    point: "〜ています (動作の進行)",
    reading: "〜te imasu (action in progress)",
    level: "N5",
    lesson: 25,
    category: "Verb forms",
    meaning: "is ~ing (ongoing action)",
    structure: "Verb te-form + います",
    explanation:
      "Describes an action currently in progress, equivalent to the English present continuous ('is ~ing'). Used for durative verbs like 食べる, 読む, 書く.",
    formation:
      "Present prog: V-て + います (食[た]べています = is eating)\nPast prog: V-て + いました (食べていました = was eating)\nQuestion: V-て + いますか",
    examples: [
      { jp: "私[わたし]は今[いま]ごはんを食[た]べています。", en: "I am eating a meal now." },
      { jp: "田中[たなか]さんは新聞[しんぶん]を読[よ]んでいます。", en: "Tanaka is reading a newspaper." },
      { jp: "雨[あめ]が降[ふ]っています。", en: "It is raining." }
    ],
    notes:
      "Punctual verbs (行く, 来る, 死ぬ) with 〜ています usually describe a resultant state rather than ongoing action — see next point.",
    related: ["gmn5-L18-02", "gmn5-L14-01", "gmn5-L16-01"]
  },
  {
    id: "gmn5-L18-02",
    point: "〜ています (結果の状態)",
    reading: "〜te imasu (resultant state)",
    level: "N5",
    lesson: 25,
    category: "Verb forms",
    meaning: "has ~ed (state resulting from past action)",
    structure: "Verb te-form + います (with punctual verbs)",
    explanation:
      "With punctual verbs (住む, 知る, 結婚する, 持つ), 〜ています expresses a state that continues after the action was completed. The focus is on the present state, not the action.",
    formation:
      "Living: 住[す]んでいます (lives in)\nKnowing: 知[し]っています (knows)\nMarried: 結婚[けっこん]しています (is married)\nHolding: 持[も]っています (has / owns)",
    examples: [
      { jp: "私[わたし]は東京[とうきょう]に住[す]んでいます。", en: "I live in Tokyo." },
      { jp: "その人[ひと]を知[し]っています。", en: "I know that person." },
      { jp: "田中[たなか]さんは結婚[けっこん]しています。", en: "Tanaka is married." }
    ],
    notes:
      "知る only exists in 〜ています form for 'to know': 知っています (knows), 知りません (doesn't know). Avoid 知ります.",
    related: ["gmn5-L18-01", "gmn5-L14-01"]
  },

  // ───────────────────────── Lesson 19: 〜たことがある ─────────────────────────
  {
    id: "gmn5-L19-01",
    point: "〜たことがあります",
    reading: "〜ta koto ga arimasu",
    level: "N5",
    lesson: 25,
    category: "Verb forms",
    meaning: "have experienced ~ (past experience)",
    structure: "Verb ta-form + ことがあります",
    explanation:
      "Used to express that one has experienced an action at least once in the past. The ta-form (past casual) is the verb stem, and こと nominalises it ('the experience of ~ing').",
    formation:
      "Affirmative: V-た + ことがあります (行[い]ったことがあります = have been)\nQuestion: V-た + ことがありますか\nNegative: V-た + ことはありません / がないです",
    examples: [
      { jp: "私[わたし]は日本[にほん]へ行[い]ったことがあります。", en: "I have been to Japan before." },
      { jp: "寿司[すし]を食[た]べたことがありますか。", en: "Have you ever eaten sushi?" },
      { jp: "富士山[ふじさん]に登[のぼ]ったことがあります。", en: "I have climbed Mt. Fuji before." }
    ],
    notes:
      "If asked 〜たことがありますか, answer はい、あります or いいえ、ありません. Do not confuse with 〜ています (current state).",
    related: ["gmn5-L19-02", "gmn5-L18-02", "gmn5-L12-01"]
  },
  {
    id: "gmn5-L19-02",
    point: "〜たことがありません",
    reading: "〜ta koto ga arimasen",
    level: "N5",
    lesson: 25,
    category: "Verb forms",
    meaning: "have never ~ (no experience)",
    structure: "Verb ta-form + ことがありません",
    explanation:
      "The negative counterpart of 〜たことがあります. Used to state that one has never experienced the action. 〜たことはありません emphasises the contrast.",
    formation:
      "Negative: V-た + ことがありません (行[い]ったことがありません = have never been)\nEmphatic: V-た + ことはありません\nOnce only: 一度[いちど]も + V-た + ことがありません",
    examples: [
      { jp: "私[わたし]はフランスへ行[い]ったことがありません。", en: "I have never been to France." },
      { jp: "一度[いちど]もお寿司[すし]を食[た]べたことがありません。", en: "I have never eaten sushi even once." },
      { jp: "あの映画[えいが]を見[み]たことはありません。", en: "I have never seen that movie." }
    ],
    notes:
      "Add 一度も (not even once) for emphasis. For 'never' with a recent context, plain past negative (見ませんでした) is more natural.",
    related: ["gmn5-L19-01", "gmn5-L18-02"]
  },

  // ───────────────────────── Lesson 20: 〜から (reason) ─────────────────────────
  {
    id: "gmn5-L20-01",
    point: "〜から (理由)",
    reading: "〜kara (reason)",
    level: "N5",
    lesson: 25,
    category: "Conjunctions",
    meaning: "because ~ (gives reason)",
    structure: "[Sentence / N / Adj] + から",
    explanation:
      "Attaching から to the end of a clause gives the reason or cause. The reason clause comes first, followed by the result. から can follow any sentence type: nouns, adjectives, or verbs.",
    formation:
      "After N+だ: N だから (雨[あめ]だから = because of rain)\nAfter な-adj+だ: な-adj だから (静[しず]かだから = because it's quiet)\nAfter い-adj: い-adj から (暑[あつ]いから = because it's hot)\nAfter V: V-普通形 から (行[い]くから = because I'll go)",
    examples: [
      { jp: "熱[ねつ]があるから、学校[がっこう]を休[やす]みます。", en: "Because I have a fever, I'll skip school." },
      { jp: "今日[きょう]は日曜日[にちようび]だから、会社[かいしゃ]は休[やす]みです。", en: "Because today is Sunday, the office is closed." },
      { jp: "寒[さむ]いから、窓[まど]を閉[し]めてください。", en: "It's cold, so please close the window." }
    ],
    notes:
      "The order is reason + から + result. In casual speech から can be followed by ね/よ for tone. ので (N4) is the formal equivalent.",
    related: ["gmn5-L16-01", "gmn5-L4-02", "gmn5-L5-02"]
  },
  {
    id: "gmn5-L20-02",
    point: "〜ましょうか",
    reading: "〜mashou ka",
    level: "N5",
    lesson: 25,
    category: "Suggestions",
    meaning: "shall I ~? (offer to do for someone)",
    structure: "Verb stem (masu-stem) + ましょうか",
    explanation:
      "Used to offer help or suggest doing something for the listener. The speaker offers their own action; the listener may accept with はい、お願[ねが]いします.",
    formation:
      "Offer: V-stem + ましょうか (持[も]ちましょうか = shall I carry it?)\nAccept: ええ、お願[ねが]いします\nDecline: いいえ、大丈夫[だいじょうぶ]です",
    examples: [
      { jp: "荷物[にもつ]を持ちましょうか。", en: "Shall I carry your luggage?" },
      { jp: "窓[まど]を開[あ]けましょうか。", en: "Shall I open the window?" },
      { jp: "もう一度[いちど]説明[せつめい]しましょうか。", en: "Shall I explain once more?" }
    ],
    notes:
      "Distinct from 〜ませんか (inviting the listener). 〜ましょうか offers the speaker's own action as a favour.",
    related: ["gmn5-L21-01", "gmn5-L21-02", "gmn5-L23-01"]
  },

  // ───────────────────────── Lesson 21: 〜ましょう (suggestion) ─────────────────────────
  {
    id: "gmn5-L21-01",
    point: "〜ましょう",
    reading: "〜mashou",
    level: "N5",
    lesson: 25,
    category: "Suggestions",
    meaning: "let's ~ (inclusive suggestion)",
    structure: "Verb stem (masu-stem) + ましょう",
    explanation:
      "Used to suggest doing something together with the listener. The volitional form of masu-verbs; replaces ます with ましょう. Softer than a direct proposal.",
    formation:
      "Suggestion: V-stem + ましょう (行[い]きましょう = let's go)\nPoliter: V-ませんか (行きませんか = won't you go?)\nWith object: N を V-stem + ましょう",
    examples: [
      { jp: "一緒[いっしょ]に昼[ひる]ごはんを食[た]べましょう。", en: "Let's eat lunch together." },
      { jp: "そろそろ行[い]きましょう。", en: "Let's go soon." },
      { jp: "明日[あした]また来[き]ましょう。", en: "Let's come again tomorrow." }
    ],
    notes:
      "〜ましょう includes the speaker. 〜ませんか is more polite because it lets the listener decline easily.",
    related: ["gmn5-L21-02", "gmn5-L20-02", "gmn5-L13-01"]
  },
  {
    id: "gmn5-L21-02",
    point: "〜ませんか",
    reading: "〜masen ka",
    level: "N5",
    lesson: 25,
    category: "Suggestions",
    meaning: "won't you ~? / how about ~ (invitation)",
    structure: "Verb stem (masu-stem) + ませんか",
    explanation:
      "Used to invite the listener to do something. Although grammatically a negative question, it functions as a polite invitation that the listener can accept or decline.",
    formation:
      "Invitation: V-stem + ませんか (行[い]きませんか = won't you go?)\nAccept: ええ、行[い]きましょう\nDecline: ちょっと… / すみません、〜",
    examples: [
      { jp: "今度[こんど]一緒[いっしょ]に映画[えいが]を見[み]ませんか。", en: "Would you like to see a movie together sometime?" },
      { jp: "少し休[やす]みませんか。", en: "Shall we take a short break?" },
      { jp: "今晚[こんばん]晩[ばん]ごはんを食[た]べませんか。", en: "Would you like to have dinner tonight?" }
    ],
    notes:
      "〜ませんか is more polite than 〜ましょう because it leaves room for refusal. The standard reply ええ、いいですね accepts.",
    related: ["gmn5-L21-01", "gmn5-L20-02", "gmn5-L13-01"]
  },

  // ───────────────────────── Lesson 22: 〜の (modifier) ─────────────────────────
  {
    id: "gmn5-L22-01",
    point: "N の N (修飾)",
    reading: "N no N (modifying)",
    level: "N5",
    lesson: 25,
    category: "Modifying",
    meaning: "N that is ~ (noun modifying a noun)",
    structure: "Noun1 + の + Noun2",
    explanation:
      "In lesson 22, の is extended beyond simple possession to mark almost any relationship between two nouns: affiliation, location, material, time, apposition. The first noun adds context to the second.",
    formation:
      "Possession: 私[わたし]の車[くるま] (my car)\nAffiliation: 会社[かいしゃ]の人[ひと] (a person from the company)\nLocation: 東京[とうきょう]の大学[だいがく] (a Tokyo university)\nTime: 今日[きょう]の新聞[しんぶん] (today's newspaper)",
    examples: [
      { jp: "これは日本[にほん]の新聞[しんぶん]です。", en: "This is a Japanese newspaper." },
      { jp: "私[わたし]は大学[だいがく]の先生[せんせい]です。", en: "I am a university teacher." },
      { jp: "あの赤[あか]いのは田中[たなか]さんの車[くるま]です。", en: "That red one is Tanaka's car." }
    ],
    notes:
      "When N2 is clear from context, it can be dropped: これ、田中さんのですか (Is this Tanaka's?). The 'one' is implicit.",
    related: ["gmn5-L2-03", "gmn5-L22-02", "gmn5-L9-02"]
  },
  {
    id: "gmn5-L22-02",
    point: "V辞書形 + の (名詞化)",
    reading: "V-jishokei + no (meishika)",
    level: "N5",
    lesson: 25,
    category: "Modifying",
    meaning: "to ~ / ~ing (nominalising a verb with の)",
    structure: "Verb dictionary form + の",
    explanation:
      "の can turn a verb phrase into a noun meaning 'the act of ~ing' or 'the thing that one ~s'. Common with 好き, 上手, 時, etc.",
    formation:
      "Like doing: V-辞書形 + の が 好[す]きです\nGood at: V-辞書形 + の が 上手[じょうず]です\nTo do (is to): S + の は / が…\nWhat to do: 何[なに]を + V-辞書形 + の か",
    examples: [
      { jp: "私[わたし]は本[ほん]を読[よ]むのが好[す]きです。", en: "I like reading books." },
      { jp: "料理[りょうり]を作[つく]るのは楽[たの]しいです。", en: "Cooking is fun." },
      { jp: "彼[かれ]はピアノを弾[ひ]くのが上手[じょうず]です。", en: "He is good at playing the piano." }
    ],
    notes:
      "Compare V辞書形の and V辞書形こと — both nominalise, but の is more colloquial and 感情的/感覚的, while こと is slightly more abstract (e.g. 約束する事). At N5 they are mostly interchangeable.",
    related: ["gmn5-L22-01", "gmn5-L9-03", "gmn5-L13-01"]
  },

  // ───────────────────────── Lesson 23: 〜てあげる/くれる/もらう ─────────────────────────
  {
    id: "gmn5-L23-01",
    point: "〜てあげる",
    reading: "〜te ageru",
    level: "N5",
    lesson: 25,
    category: "Giving-Receiving",
    meaning: "(I) do ~ for (someone)",
    structure: "Verb te-form + あげます",
    explanation:
      "Used when the speaker (or someone in the speaker's in-group) does a favour for someone else. The giver is the subject. Use carefully with superiors — direct 〜てあげる can sound condescending.",
    formation:
      "Give action: V-て + あげます (教[おし]えてあげます = I'll teach for you)\nRecipient: N に V-て + あげます\nPast: V-て + あげました",
    examples: [
      { jp: "私[わたし]は田中[たなか]さんに本[ほん]を貸[か]してあげました。", en: "I lent Tanaka a book." },
      { jp: "友達[ともだち]の荷物[にもつ]を持[も]ってあげます。", en: "I'll carry my friend's luggage." },
      { jp: "妹[いもうと]に日本語[にほんご]を教[おし]えてあげます。", en: "I teach my little sister Japanese." }
    ],
    notes:
      "Toward superiors, use 〜てさしあげる (humble) instead of 〜てあげる. With peers and family 〜てあげる is natural.",
    related: ["gmn5-L23-02", "gmn5-L23-03", "gmn5-L20-02"]
  },
  {
    id: "gmn5-L23-02",
    point: "〜てくれる",
    reading: "〜te kureru",
    level: "N5",
    lesson: 25,
    category: "Giving-Receiving",
    meaning: "(someone) does ~ for me",
    structure: "Verb te-form + くれます",
    explanation:
      "Used when someone else does a favour for the speaker (or the speaker's in-group). The giver is the subject and the receiver is the speaker. Often used to express gratitude.",
    formation:
      "Receive action: N が V-て + くれます (田中[たなか]さんが教[おし]えてくれます = Tanaka teaches me)\nPast: V-て + くれました\nFor me: 私[わたし]に V-て + くれます",
    examples: [
      { jp: "田中[たなか]さんは私[わたし]に日本語[にほんご]を教[おし]えてくれました。", en: "Tanaka taught me Japanese." },
      { jp: "母[はは]はセーターを編[あ]んでくれました。", en: "My mother knitted a sweater for me." },
      { jp: "友達[ともだち]が誕生日[たんじょうび]プレゼントを買[か]ってくれました。", en: "My friend bought me a birthday present." }
    ],
    notes:
      "When the giver is a superior, use 〜てくださる (honourable): 先生が教えてくださいました.",
    related: ["gmn5-L23-01", "gmn5-L23-03", "gmn5-L14-02"]
  },
  {
    id: "gmn5-L23-03",
    point: "〜てもらう",
    reading: "〜te morau",
    level: "N5",
    lesson: 25,
    category: "Giving-Receiving",
    meaning: "(I) have (someone) do ~ for me",
    structure: "N + に + Verb te-form + もらいます",
    explanation:
      "Used when the speaker receives a favour from someone. The speaker is the subject, marked by は, and the giver is marked by に. The viewpoint is from the receiver.",
    formation:
      "Have someone do: N に V-て + もらいます (田中[たなか]さんに教[おし]えてもらいます = I have Tanaka teach me)\nPast: V-て + もらいました\nFor me: 私[わたし]は N に V-て + もらいます",
    examples: [
      { jp: "私[わたし]は田中[たなか]さんに本[ほん]を貸[か]してもらいました。", en: "I had Tanaka lend me a book." },
      { jp: "友達[ともだち]にパソコンを直[なお]してもらいました。", en: "I had my friend fix my computer." },
      { jp: "先生[せんせい]に作文[さくぶん]を見[み]てもらいました。", en: "I had the teacher look over my composition." }
    ],
    notes:
      "The doer is marked by に, the receiver (subject) by は. This pattern highlights the speaker as the beneficiary — softer and more grateful than 〜てくれる.",
    related: ["gmn5-L23-01", "gmn5-L23-02", "gmn5-L20-02"]
  },

  // ───────────────────────── Lesson 24: 〜たら (conditional) ─────────────────────────
  {
    id: "gmn5-L24-01",
    point: "〜たら (条件)",
    reading: "〜tara (conditional)",
    level: "N5",
    lesson: 25,
    category: "Conditionals",
    meaning: "if / when ~ (past conditional)",
    structure: "Verb ta-form + ら + result clause",
    explanation:
      "The たら conditional is formed from the past tense (ta-form) plus ら. It expresses both 'if' (hypothetical) and 'when' (certain future). The result clause can be any sentence type.",
    formation:
      "Verb: V-た + ら (行[い]ったら = if/when I go)\nい-adj: 〜かった + ら (暑[あつ]かったら = if it's hot)\nな-adj/N: 〜だった + ら (静[しず]かだったら / 雨[あめ]だったら)\nNegative: V-なかった + ら",
    examples: [
      { jp: "雨[あめ]が降[ふ]ったら、家[いえ]にいます。", en: "If it rains, I'll stay home." },
      { jp: "安[やす]かったら、買[か]います。", en: "If it's cheap, I'll buy it." },
      { jp: "時間[じかん]があったら、遊[あそ]びに行[い]きます。", en: "If I have time, I'll go hang out." }
    ],
    notes:
      "〜たら is the most versatile N5 conditional. The result clause can be past, present, request, or suggestion. Other conditionals (〜と, 〜ば) are N4.",
    related: ["gmn5-L24-02", "gmn5-L14-01", "gmn5-L25-01"]
  },
  {
    id: "gmn5-L24-02",
    point: "〜たらどうですか",
    reading: "〜tara dou desu ka",
    level: "N5",
    lesson: 25,
    category: "Suggestions",
    meaning: "how about ~ing? / why don't you ~?",
    structure: "Verb ta-form + ら + どうですか",
    explanation:
      "A soft suggestion or advice pattern. 〜たらどうですか asks the listener to consider doing something. Often softened with 〜たらどうでしょう or 〜たらいいですよ.",
    formation:
      "Suggestion: V-た + ら どうですか (休[やす]んだらどうですか = how about taking a rest?)\nAdvice: V-た + ら いいですよ\nPoliter: V-た + ら どうでしょう\nPast advice: V-た + ら よかったです",
    examples: [
      { jp: "もう少[すこ]し休[やす]んだらどうですか。", en: "How about resting a little more?" },
      { jp: "医者[いしゃ]に見[み]てもらったらどうですか。", en: "Why don't you see a doctor?" },
      { jp: "早[はや]く帰[かえ]ったらどうですか。", en: "How about going home early?" }
    ],
    notes:
      "Can sound direct or even critical to superiors. With peers it is a normal suggestion. For superiors use 〜たらよろしいでしょうか or 〜てみてはいかがですか.",
    related: ["gmn5-L24-01", "gmn5-L21-02", "gmn5-L20-02"]
  },

  // ───────────────────────── Lesson 25: casual forms review ─────────────────────────
  {
    id: "gmn5-L25-01",
    point: "普通形 (動詞の辞書形・た形・ない形)",
    reading: "futsuu-kei (verb jisho/ta/nai)",
    level: "N5",
    lesson: 25,
    category: "Verb forms",
    meaning: "casual verb forms (dictionary, past, negative)",
    structure: "Verb plain forms: 辞書形 / た形 / ない形",
    explanation:
      "Lesson 25 reviews the plain (casual) forms of verbs that underlie all conjugations: the dictionary form (辞書形), the past casual (た形), and the negative casual (ない形). These are the building blocks of N4 patterns.",
    formation:
      "Dictionary: Group I V-る (書[か]く), Group II V-る (食[た]べる), する / 来[く]る\nPast (た): 書[か]いた / 食[た]べた / した / 来[き]た\nNegative (ない): 書[か]かない / 食[た]べない / しない / 来[こ]ない",
    examples: [
      { jp: "よく本[ほん]を読[よ]む。", en: "I often read books." },
      { jp: "昨日[きのう]友達[ともだち]に会[あ]った。", en: "I met a friend yesterday." },
      { jp: "今日[きょう]はテレビを見[み]ない。", en: "I won't watch TV today." }
    ],
    notes:
      "Group I casual conjugations follow the same final-kana pattern as the te-form: 書いた (く→いた), 飲んだ (む→んだ), 話した (す→した), 買った (う/つ/る→った).",
    related: ["gmn5-L25-02", "gmn5-L25-03", "gmn5-L14-01", "gmn5-L24-01"]
  },
  {
    id: "gmn5-L25-02",
    point: "普通形 (形容詞・名詞の普通形)",
    reading: "futsuu-kei (adj / noun plain forms)",
    level: "N5",
    lesson: 25,
    category: "Adjectives",
    meaning: "casual adjective and noun forms (だ / だった / じゃない)",
    structure: "Plain forms: い-adj / な-adj + だ / N + だ",
    explanation:
      "Reviews the plain counterparts of polite predicate forms. い-adjectives conjugate on the adjective itself. na-adjectives and nouns attach だ, だった, じゃない, じゃなかった as plain endings.",
    formation:
      "い-adj present: 〜い (暑[あつ]い)\nい-adj past: 〜かった (暑かった)\nい-adj neg: 〜くない (暑くない)\nな-adj/N present: 〜だ (静[しず]かだ / 学生[がくせい]だ)\nな-adj/N past: 〜だった\nな-adj/N neg: 〜じゃない / 〜ではない",
    examples: [
      { jp: "この本[ほん]はとても面白[おもしろ]い。", en: "This book is very interesting." },
      { jp: "昨日[きのう]は暑[あつ]かった。", en: "Yesterday was hot." },
      { jp: "私[わたし]は学生[がくせい]だ。", en: "I am a student." }
    ],
    notes:
      "Plain forms are used with friends and family, in diaries, before と (quoting), before 思う, and in many N4 compound patterns. Add です only for politeness.",
    related: ["gmn5-L25-01", "gmn5-L25-03", "gmn5-L8-01", "gmn5-L9-01"]
  },
  {
    id: "gmn5-L25-03",
    point: "〜と思う (普通形 + と)",
    reading: "〜to omou (futsuu-kei + to)",
    level: "N5",
    lesson: 25,
    category: "Verb forms",
    meaning: "I think that ~ (quoting thought with と)",
    structure: "Plain form + と + 思います",
    explanation:
      "To express one's thought, the quoted clause must be in the plain (casual) form before と. だ/だった/じゃない for nouns; 〜い/〜かった for i-adjectives; plain verb forms for verbs.",
    formation:
      "Noun: N-普通形 と 思[おも]います (学生[がくせい]だと思います)\nな-adj: な-adj だ / だった と 思います\nい-adj: い-adj い/かった と 思います\nVerb: V-普通形 と 思います (行[い]くと思います)",
    examples: [
      { jp: "明日[あした]は雨[あめ]が降[ふ]ると思います。", en: "I think it will rain tomorrow." },
      { jp: "田中[たなか]さんは親切[しんせつ]な人[ひと]だと思います。", en: "I think Tanaka is a kind person." },
      { jp: "この本[ほん]は面白[おもしろ]かったと思います。", en: "I think this book was interesting." }
    ],
    notes:
      "Before と, the です copula is replaced by だ. Avoid 〜だと思いますか as a question about the listener's opinion — use 〜と思いますか only with care.",
    related: ["gmn5-L25-01", "gmn5-L25-02", "gmn5-L1-01"]
  }
];
