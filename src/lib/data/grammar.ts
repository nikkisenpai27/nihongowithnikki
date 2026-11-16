import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const grammarData: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // N5 GRAMMAR POINTS
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n5-001",
    point: "〜は〜です",
    reading: "〜wa〜desu",
    level: "N5",
    category: "Copula",
    meaning: "A is B (equational statement)",
    structure: "Noun + は + Noun + です",
    explanation:
      "The basic equational sentence pattern in polite Japanese. は marks the topic and です is the polite copula ('is/am/are'). Use this to state what something or someone is.",
    formation:
      "Affirmative: N + は + N + です\nNegative: N + は + N + じゃないです / ではありません\nQuestion: N + は + N + ですか\nPast: N + は + N + でした",
    examples: [
      { jp: "私[わたし]は学生[がくせい]です。", en: "I am a student." },
      { jp: "田中[たなか]さんは先生[せんせい]です。", en: "Tanaka is a teacher." },
      { jp: "これは本[ほん]です。", en: "This is a book." },
      { jp: "私[わたし]は日本人[にほんじん]です。", en: "I am Japanese." }
    ],
    notes:
      "は is pronounced 'wa' when used as a particle. です makes the sentence polite and agrees with the topic's identity.",
    related: ["g-n5-002", "g-n5-003"]
  },

  {
    id: "g-n5-002",
    point: "〜じゃないです / 〜ではないです",
    reading: "〜janai desu / 〜dewa nai desu",
    level: "N5",
    category: "Copula",
    meaning: "A is not B (negative copula)",
    structure: "Noun + は + Noun + じゃないです / ではありません",
    explanation:
      "The negative form of the copula です. じゃないです is common in spoken Japanese; ではありません is more formal. Use it to state that something is NOT something else.",
    formation:
      "Casual polite: N + は + N + じゃないです\nFormal: N + は + N + ではありません\nPast negative: N + は + N + じゃなかったです / ではありませんでした",
    examples: [
      { jp: "私[わたし]は学生[がくせい]じゃないです。", en: "I am not a student." },
      { jp: "田中[たなか]さんは先生[せんせい]じゃないです。", en: "Tanaka is not a teacher." },
      { jp: "これは本[ほん]ではありません。", en: "This is not a book." },
      { jp: "私[わたし]は日本人[にほんじん]じゃないです。", en: "I am not Japanese." }
    ],
    notes:
      "じゃないです is the spoken form; ではありません is more formal/written. Both can be made polite with です or used as じゃありません.",
    related: ["g-n5-001"]
  },

  {
    id: "g-n5-003",
    point: "〜か",
    reading: "〜ka",
    level: "N5",
    category: "Particles",
    meaning: "Question marker",
    structure: "Sentence + か",
    explanation:
      "Adding か to the end of a sentence turns it into a yes/no question. A question mark is optional in formal writing because か itself signals the question.",
    formation:
      "Affirmative Q: N + は + N + ですか\nNegative Q: N + は + N + じゃないですか\nWith verbs: V-ます + か",
    examples: [
      { jp: "あなたは学生[がくせい]ですか。", en: "Are you a student?" },
      { jp: "これは本[ほん]ですか。", en: "Is this a book?" },
      { jp: "田中[たなか]さんは先生[せんせい]ですか。", en: "Is Tanaka a teacher?" },
      { jp: "今日[きょう]は月曜日[げつようび]ですか。", en: "Is today Monday?" }
    ],
    notes:
      "か can also be used in embedded questions (e.g., 何[なに]を買[か]うか - 'what to buy'). In casual speech, rising intonation alone can mark a question.",
    related: ["g-n5-001", "g-n5-002"]
  },

  {
    id: "g-n5-004",
    point: "この / その / あの / どの",
    reading: "kono / sono / ano / dono",
    level: "N5",
    category: "Modifying",
    meaning: "This / That / That over there / Which + noun",
    structure: "この / その / あの / どの + Noun",
    explanation:
      "These pre-noun demonstratives specify which thing you are talking about. They must always be followed by a noun, unlike これ/それ/あれ which stand alone.",
    formation:
      "この (this - near speaker)\nその (that - near listener)\nあの (that over there - far from both)\nどの (which)",
    examples: [
      { jp: "この本[ほん]は私[わたし]のです。", en: "This book is mine." },
      { jp: "その人[ひと]は誰[だれ]ですか。", en: "Who is that person?" },
      { jp: "あの建物[たてもの]は学校[がっこう]です。", en: "That building over there is a school." },
      { jp: "どのペンを使[つか]いますか。", en: "Which pen will you use?" }
    ],
    notes:
      "These differ from これ/それ/あれ which stand alone without a noun. The choice depends on distance from speaker and listener.",
    related: ["g-n5-005", "g-n5-008"]
  },

  {
    id: "g-n5-005",
    point: "ここ / そこ / あそこ / どこ",
    reading: "koko / soko / asoko / doko",
    level: "N5",
    category: "Modifying",
    meaning: "Here / There / Over there / Where (place)",
    structure: "ここ / そこ / あそこ / どこ",
    explanation:
      "Place demonstratives that indicate location. ここ is near the speaker, そこ near the listener, あそこ far from both, and どこ means 'where'.",
    formation:
      "ここ (here - near speaker)\nそこ (there - near listener)\nあそこ (over there - far from both)\nどこ (where)",
    examples: [
      { jp: "ここに座[すわ]ってください。", en: "Please sit here." },
      { jp: "そこに猫[ねこ]がいます。", en: "There is a cat there (by you)." },
      { jp: "あそこに学校[がっこう]があります。", en: "There is a school over there." },
      { jp: "トイレはどこですか。", en: "Where is the toilet?" }
    ],
    notes:
      "These are standalone place pronouns, unlike この/その/あの which need a noun. Use に with existence verbs (あります/います).",
    related: ["g-n5-004"]
  },

  {
    id: "g-n5-006",
    point: "〜も",
    reading: "〜mo",
    level: "N5",
    category: "Particles",
    meaning: "Also / too / as well",
    structure: "Noun + も",
    explanation:
      "The particle も replaces は, が, or を to mean 'also' or 'too'. When も is used, the previous topic/subject/object particle is dropped.",
    formation:
      "N + も (replaces は / が / を)\nWith other particles: N + にも / N + とも / N + からも\nNegative: N + も + ない (not... either)",
    examples: [
      { jp: "私[わたし]も学生[がくせい]です。", en: "I am also a student." },
      { jp: "田中[たなか]さんも先生[せんせい]です。", en: "Tanaka is also a teacher." },
      { jp: "これも本[ほん]です。", en: "This is also a book." },
      { jp: "私[わたし]はリンゴも食[た]べます。", en: "I will also eat an apple." }
    ],
    notes:
      "も replaces は/が/を but follows other particles like に, で, と (e.g., 日本[にほん]にも行[い]きます). In negative sentences it means 'not... either'.",
    related: ["g-n5-001"]
  },

  {
    id: "g-n5-007",
    point: "〜と",
    reading: "〜to",
    level: "N5",
    category: "Particles",
    meaning: "And (connecting nouns)",
    structure: "Noun + と + Noun",
    explanation:
      "The particle と connects nouns in an exhaustive 'and' list. It implies the list is complete, unlike や which is non-exhaustive.",
    formation:
      "N1 + と + N2 (and)\nN1 + と + N2 + と + N3 (lists multiple)\nQuestion: N1 + と + N2 + と、どちらが〜ですか",
    examples: [
      { jp: "私[わたし]はリンゴとバナナを食[た]べます。", en: "I eat apples and bananas." },
      { jp: "田中[たなか]さんと山田[やまだ]さんが来[き]ました。", en: "Tanaka and Yamada came." },
      { jp: "机[つくえ]の上[うえ]に本[ほん]とペンがあります。", en: "There is a book and a pen on the desk." },
      { jp: "私[わたし]は犬[いぬ]と猫[ねこ]を飼[か]っています。", en: "I keep a dog and a cat." }
    ],
    notes:
      "Use や instead of と when the list is incomplete (e.g., 'apples and bananas, among other things'). と also means 'with' (e.g., 友達[ともだち]と行[い]く - 'go with a friend').",
    related: []
  },

  {
    id: "g-n5-008",
    point: "〜の",
    reading: "〜no",
    level: "N5",
    category: "Particles",
    meaning: "Possessive / noun modifier ('s / of)",
    structure: "Noun + の + Noun",
    explanation:
      "の connects two nouns to show possession or modification. It can mean 's (possessive) or describe a noun with another noun (e.g., 'Japanese book').",
    formation:
      "N1 + の + N2 (N2 belonging to / related to N1)\nPossessive pronoun: 私[わたし]の = mine\nQuestion: 誰[だれ]の = whose",
    examples: [
      { jp: "私[わたし]の車[くるま]です。", en: "It is my car." },
      { jp: "田中[たなか]さんの本[ほん]はこれです。", en: "Tanaka's book is this one." },
      { jp: "日本[にほん]の料理[りょうり]を食[た]べます。", en: "I eat Japanese food." },
      { jp: "これは私[わたし]のです。", en: "This is mine." }
    ],
    notes:
      "の can stand alone as a pronoun when the noun it represents is understood from context. It can also link long modifier phrases to a noun.",
    related: ["g-n5-001", "g-n5-017"]
  },

  {
    id: "g-n5-009",
    point: "〜に",
    reading: "〜ni",
    level: "N5",
    category: "Particles",
    meaning: "Target of time / place / direction",
    structure: "Noun (time/place) + に",
    explanation:
      "に marks the specific time something happens, the destination of a movement verb, or the location of an existence verb (あります/います).",
    formation:
      "Specific time: N + に (七時[しちじ]に)\nDestination: N + に (行[い]く / 来[く]る / 帰[かえ]る)\nExistence location: N + に (あります / います)\nIndirect object: N + に (会[あ]う, 上[あ]げる)",
    examples: [
      { jp: "私[わたし]は朝[あさ]七時[しちじ]に起[お]きます。", en: "I wake up at 7 a.m." },
      { jp: "日本[にほん]に行[い]きます。", en: "I will go to Japan." },
      { jp: "部屋[へや]に猫[ねこ]がいます。", en: "There is a cat in the room." },
      { jp: "月曜日[げつようび]に会[あ]いましょう。", en: "Let's meet on Monday." }
    ],
    notes:
      "に is NOT used with relative time words like 今日[きょう], 明日[あした], 毎日[まいにち] (e.g., 今日行[い]きます, not 今日に行[い]きます).",
    related: ["g-n5-010", "g-n5-019"]
  },

  {
    id: "g-n5-010",
    point: "〜で",
    reading: "〜de",
    level: "N5",
    category: "Particles",
    meaning: "Means / place of action / context",
    structure: "Noun + で",
    explanation:
      "で marks the means or tool used for an action, the place where an action occurs, or the context (e.g., language used).",
    formation:
      "Means: N + で (by means of)\nPlace of action: N + で (at)\nMaterial: N + で (made of)\nNumber of people: N人[にん]で",
    examples: [
      { jp: "私[わたし]はバスで学校[がっこう]に行[い]きます。", en: "I go to school by bus." },
      { jp: "図書館[としょかん]で本[ほん]を読[よ]みます。", en: "I read books at the library." },
      { jp: "日本語[にほんご]で話[はな]します。", en: "I speak in Japanese." },
      { jp: "この机[つくえ]は木[き]でできています。", en: "This desk is made of wood." }
    ],
    notes:
      "で marks the place where an ACTION happens, while に marks where something EXISTS (あります/います). で also indicates means/tools.",
    related: ["g-n5-009"]
  },

  {
    id: "g-n5-011",
    point: "〜ます / 〜ません",
    reading: "〜masu / 〜masen",
    level: "N5",
    category: "Verb forms",
    meaning: "Polite present/future affirmative and negative",
    structure: "Verb (masu-stem) + ます / ません",
    explanation:
      "The polite non-past form of verbs. ます is affirmative ('do/will do') and ません is negative ('do not/will not do'). It applies to all verb groups.",
    formation:
      "Group I (5段): change final う to い + ます (書[か]く → 書[か]きます, 待[ま]つ → 待[ま]ちます)\nGroup II (1段): drop る + ます (食[た]べる → 食[た]べます)\nGroup III: する → します / 来[く]る → 来[き]ます",
    examples: [
      { jp: "私[わたし]は毎日[まいにち]日本語[にほんご]を勉強[べんきょう]します。", en: "I study Japanese every day." },
      { jp: "私[わたし]はコーヒーを飲[の]みます。", en: "I drink coffee." },
      { jp: "私[わたし]は肉[にく]を食[た]べません。", en: "I do not eat meat." },
      { jp: "田中[たなか]さんは来[き]ますか。", en: "Will Tanaka come?" }
    ],
    notes:
      "To form the masu-stem of Group I verbs, change the final u-vowel sound to an i-vowel sound (く → き, つ → ち, す → し). ません is the negative of ます.",
    related: ["g-n5-012", "g-n5-013"]
  },

  {
    id: "g-n5-012",
    point: "〜ました / 〜ませんでした",
    reading: "〜mashita / 〜masen deshita",
    level: "N5",
    category: "Tense",
    meaning: "Polite past affirmative and negative",
    structure: "Verb (masu-stem) + ました / ませんでした",
    explanation:
      "The polite past forms of verbs. ました means 'did' and ませんでした means 'did not do'. They are the past tense of ます and ません.",
    formation:
      "Affirmative: stem + ました (食[た]べます → 食[た]べました)\nNegative: stem + ませんでした (食[た]べません → 食[た]べませんでした)\nQuestion: stem + ましたか",
    examples: [
      { jp: "私[わたし]は昨日[きのう]映画[えいが]を見[み]ました。", en: "I watched a movie yesterday." },
      { jp: "田中[たなか]さんは来[き]ました。", en: "Tanaka came." },
      { jp: "私[わたし]は朝[あさ]ごはんを食[た]べませんでした。", en: "I did not eat breakfast." },
      { jp: "雨[あめ]が降[ふ]りましたか。", en: "Did it rain?" }
    ],
    notes:
      "でした is the past of です, used with nouns/な-adjectives; ました/ませんでした are used with verbs. To ask a past question, use ましたか.",
    related: ["g-n5-011", "g-n5-001"]
  },

  {
    id: "g-n5-013",
    point: "〜て form",
    reading: "〜te",
    level: "N5",
    category: "Verb forms",
    meaning: "Te-form (connective / intermediate form)",
    structure: "Verb (te-form)",
    explanation:
      "The te-form is a versatile intermediate verb form used to connect verbs, make requests (〜てください), describe ongoing actions (〜ている), and form many compound patterns.",
    formation:
      "Group I: く→いて, ぐ→いで, う/つ/る→って, ぬ/ぶ/む→んで, す→して\nGroup II: drop る → て (食[た]べる → 食[た]べて)\nGroup III: する → して, 来[く]る → 来[き]て",
    examples: [
      { jp: "私[わたし]は朝[あさ]起[お]きて、顔[かお]を洗[あら]います。", en: "I wake up in the morning and wash my face." },
      { jp: "これを見[み]てください。", en: "Please look at this." },
      { jp: "私[わたし]は友達[ともだち]に電話[でんわ]して、話[はな]しました。", en: "I called my friend and talked." },
      { jp: "窓[まど]を開[あ]けてください。", en: "Please open the window." }
    ],
    notes:
      "The te-form alone is not a complete sentence; it links to a following verb. For requests, add ください. Many N4 patterns build on the te-form.",
    related: ["g-n5-011", "g-n5-014"]
  },

  {
    id: "g-n5-014",
    point: "〜ている",
    reading: "〜te iru",
    level: "N5",
    category: "Verb forms",
    meaning: "Progressive / state of being -ing",
    structure: "Verb (te-form) + いる",
    explanation:
      "〜ている describes an ongoing action ('is ~ing') or a continuing state resulting from a past action (e.g., 'is married', 'is wearing'). With ます it becomes 〜ています.",
    formation:
      "Affirmative: Te-form + いる / います\nNegative: Te-form + いない / いません\nPast: Te-form + いた / いました",
    examples: [
      { jp: "私[わたし]は今[いま]本[ほん]を読[よ]んでいます。", en: "I am reading a book now." },
      { jp: "雨[あめ]が降[ふ]っています。", en: "It is raining." },
      { jp: "田中[たなか]さんは東京[とうきょう]に住[す]んでいます。", en: "Tanaka lives in Tokyo." },
      { jp: "私[わたし]は猫[ねこ]を飼[か]っています。", en: "I have a cat (as a pet)." }
    ],
    notes:
      "For punctual verbs like 知[し]る, 持[も]つ, 結婚[けっこん]する, 〜ている describes the resulting state rather than an ongoing action.",
    related: ["g-n5-013"]
  },

  {
    id: "g-n5-015",
    point: "〜たい",
    reading: "〜tai",
    level: "N5",
    category: "Want/Desire",
    meaning: "Want to do (verb)",
    structure: "Verb (masu-stem) + たい",
    explanation:
      "〜たい attaches to a verb stem to express the speaker's own desire to do something. It conjugates like an い-adjective.",
    formation:
      "Affirmative: stem + たい (食[た]べる → 食[た]べたい)\nNegative: stem + たくない\nPast: stem + たかった / たくなかった\nPolite: stem + たいです",
    examples: [
      { jp: "私[わたし]は寿司[すし]を食[た]べたいです。", en: "I want to eat sushi." },
      { jp: "日本[にほん]に行[い]きたいです。", en: "I want to go to Japan." },
      { jp: "私[わたし]は今日[きょう]は何[なに]もしたくないです。", en: "I do not want to do anything today." },
      { jp: "本[ほん]を読[よ]みたかったです。", en: "I wanted to read a book." }
    ],
    notes:
      "〜たい usually expresses your OWN desire. To ask someone else's desire, use 〜たいですか, but it can sound direct; 〜たがる is used for third person (N4).",
    related: ["g-n5-011"]
  },

  {
    id: "g-n5-016",
    point: "〜ない",
    reading: "〜nai",
    level: "N5",
    category: "Verb forms",
    meaning: "Plain negative ('do not')",
    structure: "Verb (nai-form) + ない",
    explanation:
      "〜ない is the plain (casual) negative form of verbs. It is the base for many N4 patterns like 〜なければならない and 〜なくてもいい.",
    formation:
      "Group I: change final う-vowel to あ-vowel + ない (書[か]く → 書[か]かない, 待[ま]つ → 待[ま]たない, 買[か]う → 買[か]わない)\nGroup II: drop る + ない (食[た]べる → 食[た]べない)\nGroup III: する → しない, 来[く]る → 来[こ]ない",
    examples: [
      { jp: "私[わたし]は肉[にく]を食[た]べない。", en: "I do not eat meat." },
      { jp: "今日[きょう]は学校[がっこう]に行[い]かない。", en: "I will not go to school today." },
      { jp: "私[わたし]はテレビを見[み]ない。", en: "I do not watch TV." },
      { jp: "田中[たなか]さんは来[こ]ない。", en: "Tanaka will not come." }
    ],
    notes:
      "Group I verbs ending in う (e.g., 買[か]う) become わない, not あない. The negative of ある is simply ない (irregular).",
    related: ["g-n5-011"]
  },

  {
    id: "g-n5-017",
    point: "〜の (nominalizer)",
    reading: "〜no",
    level: "N5",
    category: "Modifying",
    meaning: "Noun phrase nominalizer ('the one that...')",
    structure: "Sentence (plain) + の / Verb + の",
    explanation:
      "の nominalizes a phrase, turning it into a noun meaning 'the one that...' or 'the fact that...'. It allows a verb or sentence to be used as a noun.",
    formation:
      "Verb (plain) + の\nい-adj + の\nな-adj + な + の\nN + の (when comparing selection)",
    examples: [
      { jp: "私[わたし]が買[か]ったのはこれです。", en: "The one I bought is this." },
      { jp: "走[はし]るのが好[す]きです。", en: "I like running." },
      { jp: "一番[いちばん]安[やす]いのがこれです。", en: "The cheapest one is this." },
      { jp: "日本[にほん]で食[た]べたのは寿司[すし]でした。", en: "What I ate in Japan was sushi." }
    ],
    notes:
      "When の means 'the one that...', it acts as a nominalizer. In spoken Japanese, の is often shortened to ん (e.g., 買[か]ったんですが).",
    related: ["g-n5-008"]
  },

  {
    id: "g-n5-018",
    point: "〜から",
    reading: "〜kara",
    level: "N5",
    category: "Conjunctions",
    meaning: "Because / since",
    structure: "Sentence (plain or polite) + から",
    explanation:
      "から gives the reason or cause for something. It can follow either plain or polite form, and the reason clause comes before the result clause.",
    formation:
      "Plain: 原因[げんいん] + から\nPolite: 〜ます + から / 〜です + から\nNoun: N + だから\nな-adj: な-adj + だから",
    examples: [
      { jp: "寒[さむ]いから、家[いえ]にいます。", en: "Because it's cold, I'll stay home." },
      { jp: "田中[たなか]さんは忙[いそが]しいから、来[こ]ないでしょう。", en: "Tanaka is busy, so he probably won't come." },
      { jp: "雨[あめ]だから、外出[がいしゅつ]しません。", en: "Because it's raining, I won't go out." },
      { jp: "明日[あした]は試験[しけん]があるから、勉強[べんきょう]します。", en: "Because I have a test tomorrow, I'll study." }
    ],
    notes:
      "から can follow either polite or plain form, while ので (N4) is more formal and follows the plain form. The reason clause precedes the result.",
    related: ["g-n5-019"]
  },

  {
    id: "g-n5-019",
    point: "〜まで",
    reading: "〜made",
    level: "N5",
    category: "Particles",
    meaning: "Until / as far as / up to",
    structure: "Noun + まで",
    explanation:
      "まで indicates a limit in time or space: 'until' a time, or 'as far as' a place. Combined with から it forms 'from... to...'.",
    formation:
      "Time/place limit: N + まで\nFrom-to: N + から + N + まで\nExtent (even): N + まで (e.g., 子供[こども]まで)",
    examples: [
      { jp: "私[わたし]は九時[くじ]まで働[はたら]きます。", en: "I work until 9 o'clock." },
      { jp: "駅[えき]まで歩[ある]きます。", en: "I walk as far as the station." },
      { jp: "月曜日[げつようび]から金曜日[きんようび]まで学校[がっこう]です。", en: "From Monday to Friday I have school." },
      { jp: "田中[たなか]さんは夜[よる]遅[おそ]くまで起[お]きています。", en: "Tanaka stays up late at night." }
    ],
    notes:
      "まで (until) describes a continuous duration; までに (by) describes a deadline for a one-time action and is taught in N4.",
    related: ["g-n5-009", "g-n5-018"]
  },

  {
    id: "g-n5-020",
    point: "〜より〜のほうが",
    reading: "〜yori 〜no hou ga",
    level: "N5",
    category: "Comparisons",
    meaning: "B is more... than A",
    structure: "N1 + より + N2 + のほうが + Adjective",
    explanation:
      "This pattern compares two things. N1 is the standard of comparison and N2 is the one that is more (adjective). It can be reversed for emphasis.",
    formation:
      "N1 + より + N2 + のほうが + Adj + です\nN1 + より + N2 + のほうが + Adj\nQuestion: N1 + と + N2 + と、どちらが〜ですか",
    examples: [
      { jp: "肉[にく]より魚[さかな]のほうが好[す]きです。", en: "I like fish more than meat." },
      { jp: "夏[なつ]より冬[ふゆ]のほうが好[す]きです。", en: "I like winter more than summer." },
      { jp: "バスより電車[でんしゃ]のほうが速[はや]いです。", en: "The train is faster than the bus." },
      { jp: "田中[たなか]さんより山田[やまだ]さんのほうが背[せ]が高[たか]いです。", en: "Yamada is taller than Tanaka." }
    ],
    notes:
      "のほう can be dropped (肉[にく]より魚[さかな]が好[す]きです). The question form uses どちらが ('which is more...').",
    related: ["g-n5-021"]
  },

  {
    id: "g-n5-021",
    point: "一番",
    reading: "ichiban",
    level: "N5",
    category: "Comparisons",
    meaning: "The most / number one",
    structure: "一番 + Adjective / 一番 + Noun",
    explanation:
      "一番 marks the superlative — the most or best among a group. It precedes an adjective or noun to mean 'most ~'.",
    formation:
      "一番 + Adj + です\nN + の中[なか]で + 一番 + Adj\nQuestion: 一番 + Adj + のは + 何[なに]/誰[だれ]ですか",
    examples: [
      { jp: "一番[いちばん]好[す]きな季節[きせつ]は秋[あき]です。", en: "My favorite season is autumn." },
      { jp: "田中[たなか]さんはクラスで一番[いちばん]背[せ]が高[たか]いです。", en: "Tanaka is the tallest in the class." },
      { jp: "私[わたし]は果物[くだもの]の中[なか]でリンゴが一番[いちばん]好[す]きです。", en: "Among fruits, I like apples the most." },
      { jp: "一番[いちばん]安[やす]いのはどれですか。", en: "Which one is the cheapest?" }
    ],
    notes:
      "一番 literally means 'number one'. For asking what or who is the most, use 一番 + Adj + のは何[なに]/誰[だれ]ですか.",
    related: ["g-n5-020"]
  },

  {
    id: "g-n5-022",
    point: "〜ましょう",
    reading: "〜mashou",
    level: "N5",
    category: "Suggestions",
    meaning: "Let's do (volitional)",
    structure: "Verb (masu-stem) + ましょう",
    explanation:
      "The polite volitional form, used to suggest or propose an action including the speaker: 'let's do X'. It can also express a mild offer to do something for someone.",
    formation:
      "Affirmative: stem + ましょう (食[た]べる → 食[た]べましょう)\nGroup I: masu-stem + ましょう (書[か]く → 書[か]きましょう)\nGroup III: する → しましょう, 来[く]る → 来[き]ましょう",
    examples: [
      { jp: "一緒[いっしょ]に食[た]べましょう。", en: "Let's eat together." },
      { jp: "早[はや]く帰[かえ]りましょう。", en: "Let's go home early." },
      { jp: "私[わたし]が手伝[てつだ]いましょう。", en: "I'll help you." },
      { jp: "明日[あした]また会[あ]いましょう。", en: "Let's meet again tomorrow." }
    ],
    notes:
      "ましょう can also be a polite offer ('I'll do X for you'). For 'shall we?', use 〜ましょうか. For 'won't you?', use 〜ませんか.",
    related: ["g-n5-023", "g-n5-011"]
  },

  {
    id: "g-n5-023",
    point: "〜ましょうか",
    reading: "〜mashou ka",
    level: "N5",
    category: "Suggestions",
    meaning: "Shall we...? / Shall I do ...?",
    structure: "Verb (masu-stem) + ましょうか",
    explanation:
      "Adding か to ましょう makes a suggestion question: 'shall we do X?'. It can also offer to do something for the listener: 'shall I do X for you?'.",
    formation:
      "stem + ましょう + か\nResponse (accept): ええ、そうしましょう\nResponse (decline): いいえ、けっこうです",
    examples: [
      { jp: "一緒[いっしょ]に行[い]きましょうか。", en: "Shall we go together?" },
      { jp: "窓[まど]を開[あ]けましょうか。", en: "Shall I open the window?" },
      { jp: "私[わたし]が荷物[にもつ]を持[も]ちましょうか。", en: "Shall I carry your luggage?" },
      { jp: "ちょっと休[やす]みましょうか。", en: "Shall we take a short break?" }
    ],
    notes:
      "When offering to do something for the listener, accept with ええ、お願[ねが]いします or decline with いいえ、大丈夫[だいじょうぶ]です.",
    related: ["g-n5-022"]
  },

  {
    id: "g-n5-024",
    point: "い-adjectives",
    reading: "i-keiyoushi",
    level: "N5",
    category: "Adjectives",
    meaning: "Adjectives ending in い (e.g., 高[たか]い, 大[おお]きい)",
    structure: "Stem + い / くない / かった / くなかった",
    explanation:
      "い-adjectives end in い and modify nouns directly. They conjugate by changing the final い: 〜くない (negative), 〜かった (past), 〜くなかった (past negative).",
    formation:
      "Present: 高[たか]い\nNegative: 高[たか]くない\nPast: 高[たか]かった\nPast neg: 高[たか]くなかった\nAdverb: 高[たか]く\nPolite: add です (高[たか]いです)",
    examples: [
      { jp: "この本[ほん]は高[たか]いです。", en: "This book is expensive." },
      { jp: "その部屋[へや]は広[ひろ]くないです。", en: "That room is not spacious." },
      { jp: "昨日[きのう]は暑[あつ]かったです。", en: "Yesterday was hot." },
      { jp: "私[わたし]は大[おお]きい車[くるま]を買[か]いました。", en: "I bought a big car." }
    ],
    notes:
      "いい (good) is irregular: it conjugates from よい → よくない, よかった, よくなかった. です after an い-adjective is optional politeness, not part of conjugation.",
    related: ["g-n5-025"]
  },

  {
    id: "g-n5-025",
    point: "な-adjectives",
    reading: "na-keiyoushi",
    level: "N5",
    category: "Adjectives",
    meaning: "Adjectives taking な (e.g., 静[しず]か, 元気[げんき])",
    structure: "Stem + な + Noun / です / だった",
    explanation:
      "な-adjectives use な before a noun and です in the predicate. Their conjugation follows the copula (です → じゃない, だった) rather than conjugating themselves.",
    formation:
      "Present: 静[しず]かです\nNegative: 静[しず]かじゃないです / ではありません\nPast: 静[しず]かでした / だった\nNoun modifier: 静[しず]かな + N",
    examples: [
      { jp: "この町[まち]は静[しず]かです。", en: "This town is quiet." },
      { jp: "田中[たなか]さんは元気[げんき]じゃないです。", en: "Tanaka is not well." },
      { jp: "昔[むかし]は賑[にぎ]やかでした。", en: "It used to be lively." },
      { jp: "彼[かれ]は親切[しんせつ]な人[ひと]です。", en: "He is a kind person." }
    ],
    notes:
      "な-adjectives don't conjugate themselves; the copula does. Drop な when using です, but keep it before a noun (静[しず]かな人[ひと]).",
    related: ["g-n5-024", "g-n5-001"]
  },

  {
    id: "g-n5-026",
    point: "〜を",
    reading: "〜wo",
    level: "N5",
    category: "Particles",
    meaning: "Direct object marker",
    structure: "Noun + を + Transitive verb",
    explanation:
      "を marks the direct object of a transitive verb — the thing that receives the action. It is also used with verbs of movement through a place (を歩[ある]く, を通[とお]る).",
    formation:
      "Direct object: N + を + V (本[ほん]を読[よ]む)\nRoute: N + を + V of motion (道[みち]を歩[ある]く)\nDeparture: N + を + 出[で]る",
    examples: [
      { jp: "私[わたし]は本[ほん]を読[よ]みます。", en: "I read a book." },
      { jp: "私[わたし]はコーヒーを飲[の]みます。", en: "I drink coffee." },
      { jp: "私[わたし]は毎日[まいにち]日本語[にほんご]を勉強[べんきょう]します。", en: "I study Japanese every day." },
      { jp: "私[わたし]は公園[こうえん]を散歩[さんぽ]します。", en: "I walk through the park." }
    ],
    notes:
      "を is pronounced 'o' (not 'wo'). It can be omitted in casual speech when the object is obvious from context. を also marks a place moved through or departed from.",
    related: ["g-n5-027", "g-n5-009"]
  },

  {
    id: "g-n5-027",
    point: "〜が",
    reading: "〜ga",
    level: "N5",
    category: "Particles",
    meaning: "Subject marker / new information",
    structure: "Noun + が + Verb/Adjective",
    explanation:
      "が marks the grammatical subject, especially for new information or to emphasize 'who/what'. Contrast with は which marks an already-known topic.",
    formation:
      "Subject: N + が (雨[あめ]が降[ふ]る)\nPreference object: N + が (好[す]き, 嫌[きら]い, 上手[じょうず])\nAbility object: N + が (分[わ]かる, できる)\nDiscovery: N + が + V (猫[ねこ]がいる)",
    examples: [
      { jp: "雨[あめ]が降[ふ]っています。", en: "It is raining." },
      { jp: "私[わたし]は猫[ねこ]が好[す]きです。", en: "I like cats." },
      { jp: "田中[たなか]さんが来[き]ました。", en: "Tanaka came. (emphasizing who)" },
      { jp: "私[わたし]は日本語[にほんご]が分[わ]かります。", en: "I understand Japanese." }
    ],
    notes:
      "は marks the topic (old info), が marks the subject (new info). Verbs of liking, understanding, ability (好[す]き, 分[わ]かる, できる) take が, not を.",
    related: ["g-n5-001", "g-n5-026"]
  },

  {
    id: "g-n5-028",
    point: "〜ね / 〜よ",
    reading: "〜ne / 〜yo",
    level: "N5",
    category: "Particles",
    meaning: "Sentence-ending particles (seeking agreement / asserting)",
    structure: "Sentence + ね / よ",
    explanation:
      "ね seeks agreement or confirmation ('..., right?'), while よ asserts new information the listener doesn't know ('..., you know'). They can combine as よね ('..., right?').",
    formation:
      "Agreement: Sentence + ね\nAssertion: Sentence + よ\nBoth: Sentence + よね\nAfter nouns: N + だね / N + だよ",
    examples: [
      { jp: "いい天気[てんき]ですね。", en: "Nice weather, isn't it?" },
      { jp: "これは美味[おい]しいですよ。", en: "This is delicious, you know." },
      { jp: "田中[たなか]さんも来[き]ますよね。", en: "Tanaka is coming too, right?" },
      { jp: "明日[あした]は休[やす]みですね。", en: "Tomorrow is a day off, isn't it?" }
    ],
    notes:
      "ね softens a statement by inviting agreement; よ can sound assertive. Combined よね is common when you are fairly sure but still want confirmation.",
    related: ["g-n5-003"]
  },

  {
    id: "g-n5-029",
    point: "〜ませんか",
    reading: "〜masen ka",
    level: "N5",
    category: "Suggestions",
    meaning: "Won't you...? / Would you like to...?",
    structure: "Verb (masu-stem) + ませんか",
    explanation:
      "〜ませんか is a polite invitation: 'won't you do X?' or 'would you like to do X?'. Despite using the negative form, it is an affirmative invitation, not a refusal.",
    formation:
      "stem + ません + か\n(e.g., 食[た]べる → 食[た]べませんか)\nResponse: ええ、食[た]べましょう / いいえ、ちょっと…",
    examples: [
      { jp: "一緒[いっしょ]に食[た]べませんか。", en: "Would you like to eat together?" },
      { jp: "今度[こんど]映画[えいが]を見[み]に行[い]きませんか。", en: "Would you like to go see a movie sometime?" },
      { jp: "コーヒーを飲[の]みませんか。", en: "Won't you have some coffee?" },
      { jp: "週末[しゅうまつ]に会[あ]いませんか。", en: "Won't we meet on the weekend?" }
    ],
    notes:
      "〜ませんか invites the listener; 〜ましょう ('let's') includes the speaker. The negative form makes the invitation softer and less pushy.",
    related: ["g-n5-022", "g-n5-023"]
  },

  {
    id: "g-n5-030",
    point: "〜てください",
    reading: "〜te kudasai",
    level: "N5",
    category: "Suggestions",
    meaning: "Please do...",
    structure: "Verb (te-form) + ください",
    explanation:
      "〜てください makes a polite request or instruction: 'please do X'. It is softer than a direct command but still presumes some familiarity.",
    formation:
      "Affirmative: Te-form + ください\nNegative request: V-ない + でください (don't do X)",
    examples: [
      { jp: "これを見[み]てください。", en: "Please look at this." },
      { jp: "窓[まど]を閉[し]めてください。", en: "Please close the window." },
      { jp: "ここに名前[なまえ]を書[か]いてください。", en: "Please write your name here." },
      { jp: "心配[しんぱい]しないでください。", en: "Please don't worry." }
    ],
    notes:
      "〜ないでください is the negative request. 〜てください is too direct for superiors; use 〜ていただけませんか (N4) for formal requests.",
    related: ["g-n5-013", "g-n5-023"]
  },

  // ───────────────────────────────────────────────────────────
  // N4 GRAMMAR POINTS
  // ───────────────────────────────────────────────────────────

  {
    id: "g-n4-001",
    point: "〜ているところだ",
    reading: "〜te iru tokoro da",
    level: "N4",
    category: "Verb forms",
    meaning: "In the middle of doing / right now doing",
    structure: "Verb (te-form) + ている + ところだ",
    explanation:
      "〜ているところだ emphasizes that someone is right in the middle of an action at this very moment. It highlights the timing — 'be just doing X right now'.",
    formation:
      "Affirmative: Te-form + ているところです\nPast: Te-form + ているところでした\nQuestion: Te-form + ているところですか",
    examples: [
      { jp: "今[いま]、お風呂[ふろ]に入[はい]っているところです。", en: "I'm right in the middle of taking a bath." },
      { jp: "田中[たなか]さんは電話[でんわ]をかけているところです。", en: "Tanaka is on the phone right now." },
      { jp: "私[わたし]はただいまレポートを書[か]いているところです。", en: "I am currently writing a report." },
      { jp: "今[いま]、食[た]べているところでした。", en: "I was just eating." }
    ],
    notes:
      "ところ emphasizes the moment of action. 〜たところだ (just did), 〜ているところだ (doing now), and 〜ようとするところだ (about to do) describe different timings.",
    related: ["g-n5-014"]
  },

  {
    id: "g-n4-002",
    point: "〜たことがある",
    reading: "〜ta koto ga aru",
    level: "N4",
    category: "Tense",
    meaning: "Have experienced doing (before)",
    structure: "Verb (ta-form) + ことがある",
    explanation:
      "〜たことがある expresses past experience: 'have done X at least once'. Use the plain past (た) form before ことがある, not the te-form.",
    formation:
      "Affirmative: Ta-form + ことがある / あります\nNegative: Ta-form + ことはない / ありません\nQuestion: Ta-form + ことがありますか",
    examples: [
      { jp: "私[わたし]は日本[にほん]に行[い]ったことがあります。", en: "I have been to Japan before." },
      { jp: "寿司[すし]を食[た]べたことがありますか。", en: "Have you ever eaten sushi?" },
      { jp: "彼[かれ]は海外[かいがい]へ行[い]ったことがありません。", en: "He has never been abroad." },
      { jp: "私[わたし]はあの映画[えいが]を見[み]たことがある。", en: "I have seen that movie." }
    ],
    notes:
      "Use たことがある for experiences. To say 'never', use 〜たことがない. Contrast with 〜ている (current state) and 〜た (one-time past).",
    related: ["g-n5-012"]
  },

  {
    id: "g-n4-003",
    point: "〜てから",
    reading: "〜te kara",
    level: "N4",
    category: "Verb forms",
    meaning: "After doing X, then...",
    structure: "Verb (te-form) + てから + next action",
    explanation:
      "〜てから indicates that action B happens AFTER action A is completed. The order is strictly sequential: 'do A, and then do B'.",
    formation:
      "Te-form + てから + next clause\n(e.g., 食[た]べてから、寝[ね]る)\nWith nouns: N + の + あとで",
    examples: [
      { jp: "手[て]を洗[あら]ってから、食[た]べます。", en: "I wash my hands and then eat." },
      { jp: "宿題[しゅくだい]をしてから、遊[あそ]びます。", en: "I'll play after doing my homework." },
      { jp: "日本[にほん]に来[き]てから、日本語[にほんご]を勉強[べんきょう]し始[はじ]めました。", en: "I started studying Japanese after coming to Japan." },
      { jp: "シャワーを浴[あ]びてから、寝[ね]ます。", en: "I'll take a shower and then sleep." }
    ],
    notes:
      "〜てから emphasizes sequence and completion; 〜て alone is less strict about ordering. 〜てから is less natural for habitual actions.",
    related: ["g-n5-013", "g-n5-018"]
  },

  {
    id: "g-n4-004",
    point: "〜てみる",
    reading: "〜te miru",
    level: "N4",
    category: "Verb forms",
    meaning: "Try doing X (to see how it is)",
    structure: "Verb (te-form) + てみる",
    explanation:
      "〜てみる means to do something as a trial to see what happens or what it's like. It implies doing an action in order to experience or test the result.",
    formation:
      "Affirmative: Te-form + みる / みます\nPast: Te-form + みた / みました\nVolitional: Te-form + みよう / みましょう",
    examples: [
      { jp: "この料理[りょうり]を食[た]べてみてください。", en: "Please try eating this dish." },
      { jp: "私[わたし]も日本語[にほんご]で話[はな]してみます。", en: "I'll also try speaking in Japanese." },
      { jp: "一度[いちど]あの店[みせ]に行[い]ってみた。", en: "I tried going to that shop once." },
      { jp: "靴[くつ]を履[は]いてみてください。", en: "Please try on the shoes." }
    ],
    notes:
      "〜てみる = try by doing (to experience). Contrast with 〜ようとする (try / attempt, possibly failing). Use 〜てみたい for 'want to try'.",
    related: ["g-n5-013"]
  },

  {
    id: "g-n4-005",
    point: "〜ことにする",
    reading: "〜koto ni suru",
    level: "N4",
    category: "Verb forms",
    meaning: "Decide to do X (one's own decision)",
    structure: "Verb (plain) + ことにする",
    explanation:
      "〜ことにする expresses that the speaker has personally decided to do something. With する in past tense, it means 'have decided to' (already decided).",
    formation:
      "Affirmative: V-plain + ことにする / します\nNegative: V-ない + ことにする\nPast: V-plain + ことにした / しました",
    examples: [
      { jp: "毎日[まいにち]走[はし]ることにしました。", en: "I decided to run every day." },
      { jp: "来年[らいねん]日本[にほん]へ行[い]くことにします。", en: "I've decided to go to Japan next year." },
      { jp: "お酒[さけ]を飲[の]まないことにした。", en: "I decided not to drink alcohol." },
      { jp: "明日[あした]から早[はや]く起[お]きることにします。", en: "I'll decide to wake up early from tomorrow." }
    ],
    notes:
      "〜ことにする is the speaker's OWN decision; 〜ことになる means a decision made by others or by circumstances (often feels passive).",
    related: ["g-n4-006"]
  },

  {
    id: "g-n4-006",
    point: "〜ことになる",
    reading: "〜koto ni naru",
    level: "N4",
    category: "Verb forms",
    meaning: "It has been decided that / it is arranged that",
    structure: "Verb (plain) + ことになる",
    explanation:
      "〜ことになる indicates that a decision has been made (usually by others or by circumstance), and the speaker is reporting it. It often feels like a passive decision.",
    formation:
      "Affirmative: V-plain + ことになる / なります\nNegative: V-ない + ことになる\nPast: V-plain + ことになった / なりました",
    examples: [
      { jp: "来月[らいげつ]東京[とうきょう]へ転勤[てんきん]することになりました。", en: "It has been decided that I'll be transferred to Tokyo next month." },
      { jp: "会議[かいぎ]は金曜日[きんようび]に行[おこな]われることになった。", en: "It was decided the meeting will be held on Friday." },
      { jp: "来年[らいねん]結婚[けっこん]することになります。", en: "It's been decided that I'll marry next year." },
      { jp: "会社[かいしゃ]を辞[や]めることになりました。", en: "It's been decided that I'll leave the company." }
    ],
    notes:
      "〜ことになる focuses on the outcome of a decision (often by others); 〜ことにする emphasizes the speaker's personal decision.",
    related: ["g-n4-005"]
  },

  {
    id: "g-n4-007",
    point: "〜かもしれません",
    reading: "〜kamo shiremasen",
    level: "N4",
    category: "Modifying",
    meaning: "Maybe / might / perhaps",
    structure: "Sentence (plain) + かもしれません",
    explanation:
      "〜かもしれません expresses possibility or conjecture: 'maybe X is the case', 'might happen'. It can attach to nouns, adjectives, and verbs in plain form.",
    formation:
      "N + かもしれません\nい-adj + かもしれません\nな-adj + かもしれない (stem + かも)\nV-plain + かもしれません\nCasual: かもしれない",
    examples: [
      { jp: "明日[あした]は雨[あめ]かもしれません。", en: "It might rain tomorrow." },
      { jp: "田中[たなか]さんはもう家[いえ]に帰[かえ]ったかもしれません。", en: "Tanaka might have already gone home." },
      { jp: "これ、田中[たなか]さんの本[ほん]かもしれません。", en: "This might be Tanaka's book." },
      { jp: "電車[でんしゃ]が遅[おく]れているかもしれません。", en: "The train might be delayed." }
    ],
    notes:
      "かもしれません expresses about 50% certainty. It is more uncertain than 〜でしょう/〜だろう and softer than 〜はずだ.",
    related: ["g-n4-018", "g-n4-019"]
  },

  {
    id: "g-n4-008",
    point: "〜なければならない",
    reading: "〜nakereba naranai",
    level: "N4",
    category: "Obligation",
    meaning: "Must / have to do",
    structure: "Verb (nai-form without ない) + なければ + ならない / いけない",
    explanation:
      "〜なければならない expresses obligation: 'must do X', 'have to do X'. The negative conditional 〜なければ ('if not') is followed by ならない or いけない ('it won't do').",
    formation:
      "Polite: V-ない (drop ない) + なければなりません\nPlain: V-ない (drop ない) + なければならない\nAlt: V-ない + といけない (must, or else)\nCasual: V-なければ",
    examples: [
      { jp: "私[わたし]は明日[あした]早[はや]く起[お]きなければなりません。", en: "I must wake up early tomorrow." },
      { jp: "学生[がくせい]はもっと勉強[べんきょう]しなければならない。", en: "Students must study more." },
      { jp: "薬[くすり]を飲[の]まなければなりませんか。", en: "Do I have to take the medicine?" },
      { jp: "レポートを今日[きょう]までに出[だ]さなければならない。", en: "I have to submit the report by today." }
    ],
    notes:
      "Both ならない and いけない are common; いけない is slightly more colloquial. In casual speech, 〜なきゃ or 〜ないと are shortened forms.",
    related: ["g-n4-009", "g-n5-016"]
  },

  {
    id: "g-n4-009",
    point: "〜なくてもいい",
    reading: "〜nakutemo ii",
    level: "N4",
    category: "Permission",
    meaning: "Don't have to / need not",
    structure: "Verb (nai-form without ない) + なくても + いい",
    explanation:
      "〜なくてもいい expresses lack of obligation: 'don't have to do X', 'it's okay not to do X'. It is the opposite of 〜なければならない.",
    formation:
      "Polite: V-ない (drop ない) + なくてもいいです\nPlain: V-ない (drop ない) + なくてもいい\nQuestion: 〜なくてもいいですか",
    examples: [
      { jp: "明日[あした]は来[こ]なくてもいいです。", en: "You don't have to come tomorrow." },
      { jp: "急[いそ]がなくてもいいですよ。", en: "You don't need to hurry." },
      { jp: "今日[きょう]は宿題[しゅくだい]をしなくてもいいです。", en: "I don't have to do homework today." },
      { jp: "無理[むり]をしなくてもいいですよ。", en: "You don't have to push yourself." }
    ],
    notes:
      "〜なくてもいい means 'not necessary'; 〜なければならない means 'necessary'. To grant permission, it can be a statement to the listener.",
    related: ["g-n4-008", "g-n5-016"]
  },

  {
    id: "g-n4-010",
    point: "〜たら",
    reading: "〜tara",
    level: "N4",
    category: "Conditionals",
    meaning: "If / when (conditional)",
    structure: "Verb (ta-form) + ら",
    explanation:
      "〜たら is a versatile conditional meaning 'if/when X happens'. It attaches to the past tense form. It can express a one-time condition, a discovery, or a sequence.",
    formation:
      "V-plain past + ら (食[た]べた → 食[た]べたら)\nい-adj + かったら (高[たか]い → 高[たか]かったら)\nN + だったら / なら\nな-adj + だったら",
    examples: [
      { jp: "雨[あめ]が降[ふ]ったら、試合[しあい]は中止[ちゅうし]です。", en: "If it rains, the game will be cancelled." },
      { jp: "日本[にほん]に行[い]ったら、寿司[すし]を食[た]べたい。", en: "When I go to Japan, I want to eat sushi." },
      { jp: "明日[あした]天気[てんき]がよかったら、海[うみ]へ行[い]きます。", en: "If the weather is good tomorrow, I'll go to the beach." },
      { jp: "家[いえ]に帰[かえ]ったら、電話[でんわ]してください。", en: "When you get home, please call me." }
    ],
    notes:
      "〜たら is the most flexible conditional. It can describe a real condition, a discovery ('when I did X, I found...'), or a past counterfactual.",
    related: ["g-n4-011", "g-n4-012"]
  },

  {
    id: "g-n4-011",
    point: "〜ば",
    reading: "〜ba",
    level: "N4",
    category: "Conditionals",
    meaning: "If (general conditional)",
    structure: "Verb (ba-form) + ば",
    explanation:
      "〜ば is a general conditional meaning 'if'. It tends to describe general or hypothetical conditions and is often used for repeated/habitual or logical conditions.",
    formation:
      "Group I: change final う-vowel to え-vowel + ば (書[か]く → 書[か]けば)\nGroup II: drop る + れば (食[た]べる → 食[た]べれば)\nGroup III: する → すれば, 来[く]る → 来[く]れば\nい-adj: drop い + ければ\nN / な-adj: なら / であれば",
    examples: [
      { jp: "雨[あめ]が降[ふ]れば、試合[しあい]は中止[ちゅうし]です。", en: "If it rains, the game will be cancelled." },
      { jp: "暇[ひま]なら、遊[あそ]びに来[き]てください。", en: "If you are free, please come visit." },
      { jp: "春[はる]になれば、花[はな]が咲[さ]く。", en: "When spring comes, flowers bloom." },
      { jp: "お金[かね]があれば、旅行[りょこう]に行[い]きたい。", en: "If I had money, I'd like to go on a trip." }
    ],
    notes:
      "〜ば cannot be used for the speaker's own volitional action in the condition (e.g., 行[い]けば行[い]きます is wrong). 〜なら or 〜たら work better in those cases.",
    related: ["g-n4-010", "g-n4-012"]
  },

  {
    id: "g-n4-012",
    point: "〜と (conditional)",
    reading: "〜to",
    level: "N4",
    category: "Conditionals",
    meaning: "If / when (general truth, discovery)",
    structure: "Verb (plain) + と",
    explanation:
      "〜と describes a natural or habitual consequence: 'when/whenever X happens, Y happens'. It is also used for discoveries ('when I did X, I found that...').",
    formation:
      "V-plain (present) + と (書[か]く → 書[か]くと)\nい-adj + と\nN / な-adj + だ + と / + だと\nPast + と (discovery: 見[み]たと、思[おも]った...)",
    examples: [
      { jp: "春[はる]になると、花[はな]が咲[さ]く。", en: "When spring comes, flowers bloom." },
      { jp: "このボタンを押[お]すと、ドアが開[あ]きます。", en: "If you press this button, the door opens." },
      { jp: "右[みぎ]に曲[ま]がると、駅[えき]があります。", en: "When you turn right, there's a station." },
      { jp: "彼[かれ]は私[わたし]を見[み]ると、笑[わら]った。", en: "When he saw me, he smiled." }
    ],
    notes:
      "〜と implies an automatic/natural result, so it cannot be followed by the speaker's intention, request, or invitation (e.g., 春[はる]になると、行[い]きましょう is wrong).",
    related: ["g-n4-010", "g-n4-011"]
  },

  {
    id: "g-n4-013",
    point: "〜ても",
    reading: "〜temo",
    level: "N4",
    category: "Conditionals",
    meaning: "Even if / no matter if",
    structure: "Verb (te-form) + も",
    explanation:
      "〜ても means 'even if X happens, Y still happens'. It expresses that the result does not change regardless of the condition.",
    formation:
      "V-te + も (食[た]べる → 食[た]べても)\nい-adj + くても (高[たか]い → 高[たか]くても)\nN / な-adj + でも\nNegative: V-ない + なくても",
    examples: [
      { jp: "雨[あめ]が降[ふ]っても、行[い]きます。", en: "Even if it rains, I will go." },
      { jp: "何度[なんど]読[よ]んでも、面白[おもしろ]い。", en: "No matter how many times I read it, it's interesting." },
      { jp: "忙[いそが]しくても、休[やす]まない。", en: "Even if I'm busy, I don't rest." },
      { jp: "高[たか]くても、買[か]いたい。", en: "Even if it's expensive, I want to buy it." }
    ],
    notes:
      "〜ても implies the result is unchanged despite the condition. Contrast with 〜たら/〜ば (hypothetical condition) and 〜と (automatic result).",
    related: ["g-n4-010"]
  },

  {
    id: "g-n4-014",
    point: "〜ながら",
    reading: "〜nagara",
    level: "N4",
    category: "Modifying",
    meaning: "While doing / doing simultaneously",
    structure: "Verb (masu-stem) + ながら",
    explanation:
      "〜ながら indicates two actions performed simultaneously by the same subject. The main action (the more important one) comes after ながら.",
    formation:
      "V-ます stem + ながら (食[た]べる → 食[た]べながら)\nBoth verbs must be same subject\nMain action follows ながら",
    examples: [
      { jp: "音楽[おんがく]を聞[き]きながら、勉強[べんきょう]します。", en: "I study while listening to music." },
      { jp: "歩[ある]きながら、話[はな]す。", en: "I talk while walking." },
      { jp: "テレビを見[み]ながら、ご飯[はん]を食[た]べる。", en: "I eat while watching TV." },
      { jp: "田中[たなか]さんは涙[なみだ]を流[なが]しながら、話[はな]した。", en: "Tanaka spoke while shedding tears." }
    ],
    notes:
      "The verb before ながら is the secondary action; the verb after is the main action. Both must share the same subject. 〜ながら also attaches to some nouns (昔[むか]しながら).",
    related: []
  },

  {
    id: "g-n4-015",
    point: "〜し",
    reading: "〜shi",
    level: "N4",
    category: "Conjunctions",
    meaning: "And moreover / listing reasons",
    structure: "Clause + し、Clause + し",
    explanation:
      "〜し lists two or more reasons, states, or qualities, often implying 'and what's more'. It can stack multiple reasons to support a conclusion.",
    formation:
      "Plain form + し (V / い-adj)\nN + だ + し / な-adj + だ + し\nMultiple clauses: ...し、...し、…\nFinal clause: the conclusion",
    examples: [
      { jp: "この部屋[へや]は広[ひろ]いし、明[あか]るいし、いい部屋[へや]だ。", en: "This room is spacious, bright, and overall a good room." },
      { jp: "田中[たなか]さんは頭[あたま]もいいし、性格[せいかく]もいい。", en: "Tanaka is smart and also has a good personality." },
      { jp: "お金[かね]もないし、暇[ひま]もないし、旅行[りょこう]に行[い]けない。", en: "I have no money and no free time, so I can't travel." },
      { jp: "寒[さむ]いし、雨[あめ]も降[ふ]っているし、出[で]かけたくない。", en: "It's cold and raining, so I don't want to go out." }
    ],
    notes:
      "〜し lists reasons or qualities with the nuance 'besides that...'. The final clause often states a conclusion. It can also mean 'besides' in a single clause.",
    related: ["g-n5-018"]
  },

  {
    id: "g-n4-016",
    point: "〜そうだ (様態)",
    reading: "〜sou da (youtai)",
    level: "N4",
    category: "Modifying",
    meaning: "Looks like / seems (based on appearance)",
    structure: "Verb (masu-stem) + そうだ / い-adj (stem) + そうだ",
    explanation:
      "〜そうだ (様態) expresses how something looks based on direct visual observation: 'looks like X', 'seems about to X'. It is based on appearance, not fact.",
    formation:
      "V-ます stem + そうだ (降[ふ]る → 降[ふ]りそう)\nい-adj stem + そうだ (美味[おい]しい → 美味[おい]しそう)\nな-adj stem + そうだ (元気[げんき] → 元気[げんき]そう)\nN + そう = NO (use ようだ)\nいい → よさそう, ない → なさそう",
    examples: [
      { jp: "このケーキは美味[おい]しそうだ。", en: "This cake looks delicious." },
      { jp: "空[そら]が暗[くら]くなって、雨[あめ]が降[ふ]りそうだ。", en: "The sky has gotten dark; it looks like it will rain." },
      { jp: "彼[かれ]はとても嬉[うれ]しそうだ。", en: "He looks very happy." },
      { jp: "この問題[もんだい]は難[むずか]しそうだ。", en: "This problem looks difficult." }
    ],
    notes:
      "〜そうだ (様態) is based on appearance. It does NOT attach directly to nouns (use ようだ/らしい instead). いい becomes よさそう; ない becomes なさそう.",
    related: ["g-n4-017", "g-n4-018"]
  },

  {
    id: "g-n4-017",
    point: "〜そうだ (伝聞)",
    reading: "〜sou da (denbun)",
    level: "N4",
    category: "Modifying",
    meaning: "I heard that / it is said that (hearsay)",
    structure: "Sentence (plain) + そうだ",
    explanation:
      "〜そうだ (伝聞) reports information heard from someone else: 'I heard that...'. It attaches to the plain form of a complete sentence and reports hearsay.",
    formation:
      "V-plain + そうだ / そうです\nい-adj plain + そうだ\nな-adj plain (だ→) + そうだ\nN + だ + そうだ (田中[たなか]さんは学生[がくせい]だそうだ)\nNote: NO negative 〜ません, 〜です before そうだ",
    examples: [
      { jp: "天気予報[てんきよほう]によると、明日[あした]は雨[あめ]が降[ふ]るそうだ。", en: "According to the forecast, it will rain tomorrow." },
      { jp: "田中[たなか]さんは来月[らいげつ]結婚[けっこん]するそうだ。", en: "I heard Tanaka is getting married next month." },
      { jp: "新聞[しんぶん]によると、来週[らいしゅう]台風[たいふう]が来[く]るそうだ。", en: "According to the newspaper, a typhoon will come next week." },
      { jp: "彼[かれ]の話[はなし]では、仕事[しごと]は順調[じゅんちょう]だそうだ。", en: "According to him, work is going smoothly." }
    ],
    notes:
      "〜そうだ (伝聞) reports hearsay and is not conjugated for tense/negative itself. It is often introduced by '...によると' (according to...).",
    related: ["g-n4-016", "g-n4-018"]
  },

  {
    id: "g-n4-018",
    point: "〜ようだ",
    reading: "〜you da",
    level: "N4",
    category: "Modifying",
    meaning: "Seems / appears to be (conjecture based on evidence)",
    structure: "Sentence (plain) + ようだ / N + の + ようだ",
    explanation:
      "〜ようだ expresses a conjecture based on observed evidence: 'it seems that...'. It can also mean 'like a...' when attached to N + のようだ.",
    formation:
      "V-plain + ようだ / ようです\nい-adj plain + ようだ\nな-adj plain (だ→な) + ようだ\nN + の + ようだ\nN + の + ように + V/Adj",
    examples: [
      { jp: "空[そら]が暗[くら]いから、もうすぐ雨[あめ]が降[ふ]るようだ。", en: "The sky is dark, so it seems it will rain soon." },
      { jp: "彼[かれ]は何[なに]も言[い]わないところを見[み]ると、本当[ほんとう]のことを知[し]らないようだ。", en: "Judging from him saying nothing, he seems not to know the truth." },
      { jp: "このレストランは人気[にんき]があるようで、いつも混[こ]んでいる。", en: "This restaurant seems popular; it's always crowded." },
      { jp: "田中[たなか]さんはまだ来[き]ていないようだ。", en: "It seems Tanaka hasn't arrived yet." }
    ],
    notes:
      "〜ようだ is based on subjective judgment from evidence. Contrast with 〜そうだ (visual appearance) and 〜らしい (objective/typical inference).",
    related: ["g-n4-016", "g-n4-019"]
  },

  {
    id: "g-n4-019",
    point: "〜らしい",
    reading: "〜rashii",
    level: "N4",
    category: "Modifying",
    meaning: "Seems / appears to be / typical of",
    structure: "Sentence (plain) + らしい / N + らしい",
    explanation:
      "〜らしい expresses inference based on objective evidence or hearsay: 'it seems that...'. It also expresses typical characteristics: 'like a true N'.",
    formation:
      "V-plain + らしい / らしいです\nい-adj plain + らしい\nな-adj (だ→) + らしい\nN + らしい (typical of N)",
    examples: [
      { jp: "田中[たなか]さんは来[こ]ないらしい。", en: "It seems Tanaka won't come." },
      { jp: "明日[あした]は雨[あめ]らしい。", en: "It seems it will rain tomorrow." },
      { jp: "彼[かれ]は学生[がくせい]らしい。", en: "He seems to be (a typical) student." },
      { jp: "この町[まち]は昔[むかし]静[しず]かだったらしい。", en: "It seems this town used to be quiet." }
    ],
    notes:
      "〜らしい is more objective than 〜ようだ. When attached to a noun, 'N + らしい' means 'typical/characteristic of N' (e.g., 男[おとこ]らしい = manly).",
    related: ["g-n4-018", "g-n4-016"]
  },

  {
    id: "g-n4-020",
    point: "〜てあげる",
    reading: "〜te ageru",
    level: "N4",
    category: "Giving/Receiving",
    meaning: "Do (something) for someone",
    structure: "Verb (te-form) + てあげる",
    explanation:
      "〜てあげる means the speaker (or someone) does a favor for someone else. The giver is the subject and the receiver is marked by に. It can sound patronizing toward superiors.",
    formation:
      "Te-form + あげる / あげます\nPast: Te-form + あげた\nHumble variant: Te-form + さしあげる (for superiors)",
    examples: [
      { jp: "私[わたし]は田中[たなか]さんに本[ほん]を貸[か]してあげた。", en: "I lent a book to Tanaka (as a favor)." },
      { jp: "私[わたし]が荷物[にもつ]を持[も]ってあげましょう。", en: "I'll carry your luggage for you." },
      { jp: "私[わたし]は妹[いもうと]に日本語[にほんご]を教[おし]えてあげた。", en: "I taught Japanese to my younger sister." },
      { jp: "友達[ともだち]の代[か]わりに掃除[そうじ]をしてあげた。", en: "I cleaned in place of my friend." }
    ],
    notes:
      "〜てあげる implies doing something FOR someone. Avoid using it directly to superiors, as it sounds condescending. Use 〜てさしあげる or 〜てもらえませんか instead.",
    related: ["g-n4-021", "g-n4-022"]
  },

  {
    id: "g-n4-021",
    point: "〜てもらう",
    reading: "〜te morau",
    level: "N4",
    category: "Giving/Receiving",
    meaning: "Have someone do (something) for me",
    structure: "Person + に + Verb (te-form) + てもらう",
    explanation:
      "〜てもらう means the speaker receives a favor done by someone else. The doer is marked by に and the receiver (usually the speaker) is the subject.",
    formation:
      "N(に) + Te-form + もらう / もらいます\nPast: Te-form + もらった\nCausative: 〜てもらう (have someone do)",
    examples: [
      { jp: "私[わたし]は田中[たなか]さんに本[ほん]を貸[か]してもらった。", en: "I had Tanaka lend me a book." },
      { jp: "私[わたし]は友達[ともだち]に写真[しゃしん]を撮[と]ってもらった。", en: "I had my friend take a photo of me." },
      { jp: "私[わたし]は先生[せんせい]に日本語[にほんご]を教[おし]えてもらっています。", en: "I have the teacher teach me Japanese." },
      { jp: "田中[たなか]さんにこの自転車[じてんしゃ]を直[なお]してもらった。", en: "I had Tanaka fix this bicycle." }
    ],
    notes:
      "〜てもらう focuses on the receiver's gratitude. The doer is marked by に, and the receiver is the subject (usually 私[わたし]). Polite form: 〜ていただく.",
    related: ["g-n4-020", "g-n4-022"]
  },

  {
    id: "g-n4-022",
    point: "〜てくれる",
    reading: "〜te kureru",
    level: "N4",
    category: "Giving/Receiving",
    meaning: "Someone does (something) for me",
    structure: "Person + が + Verb (te-form) + てくれる",
    explanation:
      "〜てくれる means someone does a favor for the speaker (or the speaker's in-group). The doer is the subject marked by が, and the receiver is implicit (usually me).",
    formation:
      "N(が) + Te-form + くれる / くれます\nPast: Te-form + くれた\nHumble/receiving: 〜てくださる (from superiors)",
    examples: [
      { jp: "田中[たなか]さんは私[わたし]に本[ほん]を貸[か]してくれた。", en: "Tanaka lent me a book (as a favor)." },
      { jp: "友達[ともだち]が私[わたし]を駅[えき]まで送[おく]ってくれた。", en: "My friend took me to the station." },
      { jp: "母[はは]は美味[おい]しい料理[りょうり]を作[つく]ってくれた。", en: "My mother made delicious food for me." },
      { jp: "田中[たなか]さんは私[わたし]のために買[か]い物[もの]をしてくれた。", en: "Tanaka did the shopping for me." }
    ],
    notes:
      "〜てくれる is the giver-doing-for-me form. From superiors, use 〜てくださる. When asking for a favor, 〜てくれますか means 'will you do X for me?'.",
    related: ["g-n4-020", "g-n4-021"]
  },

  {
    id: "g-n4-023",
    point: "〜させる (causative)",
    reading: "〜saseru",
    level: "N4",
    category: "Verb forms",
    meaning: "Make / let someone do (causative)",
    structure: "Verb (causative form) + させる",
    explanation:
      "〜させる is the causative form: 'make/let someone do X'. The one being caused is marked by に (for action) or を (for state). It can mean force or permission depending on context.",
    formation:
      "Group I: change final う-vowel to あ-vowel + せる (書[か]く → 書[か]かせる)\nGroup II: drop る + させる (食[た]べる → 食[た]べさせる)\nGroup III: する → させる, 来[く]る → 来[こ]させる",
    examples: [
      { jp: "母[はは]は私[わたし]に野菜[やさい]を食[た]べさせた。", en: "My mother made me eat vegetables." },
      { jp: "先生[せんせい]は学生[がくせい]に本[ほん]を読[よ]ませた。", en: "The teacher made the students read the book." },
      { jp: "私[わたし]は子供[こども]を早[はや]く寝[ね]させた。", en: "I let my child sleep early." },
      { jp: "田中[たなか]さんは部下[ぶか]に仕事[しごと]をやらせた。", en: "Tanaka let his subordinate do the work." }
    ],
    notes:
      "〜させる can mean 'force to do' or 'allow to do' depending on context. The causative-passive 〜させられる (being made to do) expresses being forced.",
    related: ["g-n4-024", "g-n4-025"]
  },

  {
    id: "g-n4-024",
    point: "〜させられる (causative-passive)",
    reading: "〜saserareru",
    level: "N4",
    category: "Verb forms",
    meaning: "Be made to do (causative-passive)",
    structure: "Verb (causative form) + される / させられる",
    explanation:
      "〜させられる is the causative-passive: the subject is made to do something by someone else. It expresses being forced or compelled to do an action.",
    formation:
      "Group I: a-stem + される (書[か]く → 書[か]かされる)\nGroup II: drop る + させられる (食[た]べる → 食[た]べさせられる)\nGroup III: する → させられる, 来[く]る → 来[こ]させられる",
    examples: [
      { jp: "私[わたし]は母[はは]に野菜[やさい]を食[た]べさせられた。", en: "I was made to eat vegetables by my mother." },
      { jp: "私[わたし]は先生[せんせい]に長[なが]い文章[ぶんしょう]を暗唱[あんしょう]させられた。", en: "I was made to recite a long passage by the teacher." },
      { jp: "田中[たなか]さんは上司[じょうし]に無理[むり]な仕事[しごと]をさせられた。", en: "Tanaka was made to do unreasonable work by his boss." },
      { jp: "私[わたし]は昨日[きのう]残業[ざんぎょう]させられた。", en: "I was made to work overtime yesterday." }
    ],
    notes:
      "〜させられる combines causative + passive and feels unpleasant ('be forced to do'). For す-ending Group I verbs, the full させられる form is preferred.",
    related: ["g-n4-023", "g-n4-025"]
  },

  {
    id: "g-n4-025",
    point: "〜られる / 〜れる (passive)",
    reading: "〜rareru / 〜reru",
    level: "N4",
    category: "Verb forms",
    meaning: "Be done to / passive voice",
    structure: "Verb (passive form) + られる / れる",
    explanation:
      "〜られる/〜れる is the passive voice: the subject receives the action. It is used for direct passive, the 'suffering passive' (adversity), and the respectful form (sonkeigo).",
    formation:
      "Group I: change final う-vowel to あ-vowel + れる (書[か]く → 書[か]かれる)\nGroup II: drop る + られる (食[た]べる → 食[た]べられる)\nGroup III: する → される, 来[く]る → 来[こ]られる",
    examples: [
      { jp: "私[わたし]は犬[いぬ]に噛[か]まれた。", en: "I was bitten by a dog." },
      { jp: "この本[ほん]はたくさんの人[ひと]に読[よ]まれている。", en: "This book is read by many people." },
      { jp: "田中[たなか]さんはみんなに信[しん]じられている。", en: "Tanaka is trusted by everyone." },
      { jp: "私[わたし]は雨[あめ]に降[ふ]られた。", en: "I was caught in the rain. (suffering passive)" }
    ],
    notes:
      "The doer is marked by に. The 'suffering passive' (迷惑[めいわく]の受身[うけみ]) expresses annoyance at something that happened to you (e.g., 雨に降られた).",
    related: ["g-n4-023", "g-n4-024"]
  },

  {
    id: "g-n4-026",
    point: "〜ようにする",
    reading: "〜you ni suru",
    level: "N4",
    category: "Verb forms",
    meaning: "Try to / make sure to do",
    structure: "Verb (plain) + ようにする",
    explanation:
      "〜ようにする means to make an effort or habit of doing something: 'try to do X', 'make sure to do X'. It expresses intention toward a goal.",
    formation:
      "Affirmative: V-plain (non-past) + ようにする / します\nNegative: V-ない + ようにする\nPast: V-plain + ようにした (made sure to)",
    examples: [
      { jp: "毎日[まいにち]運動[うんどう]するようにしています。", en: "I make sure to exercise every day." },
      { jp: "忘[わす]れないように、メモしておきます。", en: "I'll write it down so I don't forget." },
      { jp: "早[はや]く寝[ね]るようにします。", en: "I'll try to sleep early." },
      { jp: "遅[おく]れないように気[き]をつけてください。", en: "Please be careful not to be late." }
    ],
    notes:
      "〜ようにする expresses effort/habit, while 〜ようになる (next entry) describes a change of state. Negative form 〜ないようにする = 'make sure not to'.",
    related: ["g-n4-027"]
  },

  {
    id: "g-n4-027",
    point: "〜ようになる",
    reading: "〜you ni naru",
    level: "N4",
    category: "Verb forms",
    meaning: "Come to be / reach the state of doing",
    structure: "Verb (plain) + ようになる",
    explanation:
      "〜ようになる expresses a gradual change in state or ability: 'come to do X', 'reach the point where...'. It often describes learning a new ability or habit.",
    formation:
      "Affirmative: V-plain (non-past) + ようになる / なります\nNegative: V-ない + ようになる\nPast: V-plain + ようになった (came to be)",
    examples: [
      { jp: "日本語[にほんご]が話[はな]せるようになりました。", en: "I have come to be able to speak Japanese." },
      { jp: "最近[さいきん]、日本[にほん]の食[た]べ物[もの]が食[た]べられるようになった。", en: "Recently I've come to be able to eat Japanese food." },
      { jp: "毎日[まいにち]練習[れんしゅう]して、泳[およ]げるようになった。", en: "I practiced every day and came to be able to swim." },
      { jp: "子供[こども]が一人[ひとり]で着替[きが]えられるようになった。", en: "My child has come to be able to dress himself." }
    ],
    notes:
      "〜ようになる describes a change of state/ability, often with potential verbs (〜られる). Contrast with 〜ようにする (effort to do).",
    related: ["g-n4-026"]
  },

  {
    id: "g-n4-028",
    point: "〜はずだ",
    reading: "〜hazu da",
    level: "N4",
    category: "Modifying",
    meaning: "Should be / is expected to be",
    structure: "Sentence (plain) + はずだ",
    explanation:
      "〜はずだ expresses a strong expectation based on reason or evidence: 'should be', 'is supposed to be'. It implies the speaker's logical judgment, not visual appearance.",
    formation:
      "V-plain + はずだ / はずです\nい-adj plain + はずだ\nな-adj plain (だ→な) + はずだ\nN + の + はずだ\nNegative: 〜ないはずだ",
    examples: [
      { jp: "田中[たなか]さんはもうすぐ着[つ]くはずだ。", en: "Tanaka should arrive soon." },
      { jp: "この時計[とけい]は壊[こわ]れているはずだ。", en: "This clock should be broken." },
      { jp: "彼[かれ]はもう食[た]べたはずだ。", en: "He should have already eaten." },
      { jp: "一時間[いちじかん]も待[ま]ったから、もう来[き]ているはずだ。", en: "I waited an hour, so he should be here by now." }
    ],
    notes:
      "〜はずだ is a strong logical expectation. Contrast with 〜だろう (weaker guess) and 〜そうだ (visual appearance). Negation: 〜ないはずだ = 'should not be'.",
    related: ["g-n4-029"]
  },

  {
    id: "g-n4-029",
    point: "〜つもりだ",
    reading: "〜tsumori da",
    level: "N4",
    category: "Modifying",
    meaning: "Intend to / plan to do",
    structure: "Verb (plain) + つもりだ",
    explanation:
      "〜つもりだ expresses the speaker's intention or plan: 'I intend to do X'. It is mainly used for the speaker's own intentions, not usually for third person.",
    formation:
      "Affirmative: V-plain (non-past) + つもりだ / つもりです\nNegative: V-ない + つもりだ (don't intend to)\nPast intention: V-plain + つもりだった (was going to)",
    examples: [
      { jp: "来年[らいねん]日本[にほん]へ行[い]くつもりだ。", en: "I intend to go to Japan next year." },
      { jp: "私[わたし]は大学[だいがく]で日本語[にほんご]を勉強[べんきょう]するつもりです。", en: "I plan to study Japanese at university." },
      { jp: "今日[きょう]は何[なに]もしないつもりだ。", en: "I intend to do nothing today." },
      { jp: "私[わたし]はもうお酒[さけ]を飲[の]まないつもりだ。", en: "I intend to not drink alcohol anymore." }
    ],
    notes:
      "〜つもりだ is mainly for the speaker's own intention. For third person, use 〜つもりらしい/〜つもりようだ or 〜たがる. Past form 〜つもりだった = 'was planning to'.",
    related: ["g-n4-028"]
  },

  {
    id: "g-n4-030",
    point: "〜ために",
    reading: "〜tame ni",
    level: "N4",
    category: "Conjunctions",
    meaning: "In order to / for the purpose of / because of",
    structure: "Verb (plain) + ために / Noun + の + ために",
    explanation:
      "〜ために expresses purpose ('in order to do X') or cause/benefit ('because of N', 'for the sake of N'). The subject of the purpose clause and main clause should match.",
    formation:
      "Purpose: V-plain (non-past) + ために\nCause/benefit: N + の + ために\n(e.g., 勉強[べんきょう]するために, 仕事[しごと]のために)",
    examples: [
      { jp: "日本[にほん]へ行[い]くために、お金[かね]を貯[た]めている。", en: "I'm saving money in order to go to Japan." },
      { jp: "勉強[べんきょう]するために、図書館[としょかん]へ行[い]った。", en: "I went to the library to study." },
      { jp: "仕事[しごと]のために、東京[とうきょう]へ引[ひ]っ越[こ]した。", en: "I moved to Tokyo for my work." },
      { jp: "健康[けんこう]のために、毎日[まいにち]運動[うんどう]する。", en: "I exercise every day for my health." }
    ],
    notes:
      "〜ために (purpose) requires same subject in both clauses and non-past verb form. With a noun + のために, it expresses benefit/cause rather than purpose.",
    related: ["g-n4-029"]
  },

  {
    id: "g-n4-031",
    point: "〜ておく",
    reading: "〜te oku",
    level: "N4",
    category: "Verb forms",
    meaning: "Do in advance / leave as is for later",
    structure: "Verb (te-form) + ておく",
    explanation:
      "〜ておく means to do something in advance for future convenience, or to leave something in a certain state for later. It implies preparation or taking care of something now.",
    formation:
      "Affirmative: Te-form + おく / おきます\nPast: Te-form + おいた / おきました\nCasual: Te-form + とく / ときます (ておく → とく)",
    examples: [
      { jp: "明日[あした]の準備[じゅんび]をしておく。", en: "I'll do tomorrow's preparations in advance." },
      { jp: "田中[たなか]さんに伝[つた]えておきます。", en: "I'll let Tanaka know in advance." },
      { jp: "お客[きゃく]さんが来[く]る前[まえ]に、部屋[へや]を掃除[そうじ]しておいた。", en: "I cleaned the room before the guests came." },
      { jp: "買[か]い物[もの]をしておこう。", en: "Let's do the shopping in advance." }
    ],
    notes:
      "〜ておく = do in advance / leave something as-is for later. In casual speech, it contracts to 〜とく (e.g., しとく, 買[か]っとく).",
    related: ["g-n5-013"]
  },

  {
    id: "g-n4-032",
    point: "〜っぱなし",
    reading: "〜ppanashi",
    level: "N4",
    category: "Verb forms",
    meaning: "Leave (something) on / doing",
    structure: "Verb (masu-stem) + っぱなし / Noun + っぱなし",
    explanation:
      "〜っぱなし means leaving something in an ongoing state (often negatively), such as leaving the TV on, the water running, or doing something continuously without rest.",
    formation:
      "V-ます stem + っぱなし (つける → つけっぱなし)\nN + っぱなし (靴[くつ]っぱなし)\nOften followed by にする / にする / だ",
    examples: [
      { jp: "テレビをつけっぱなしにしないで。", en: "Don't leave the TV on." },
      { jp: "水道[すいどう]を出[だ]しっぱなしにしないでください。", en: "Please don't leave the water running." },
      { jp: "彼[かれ]は靴[くつ]を履[は]きっぱなしで寝[ね]てしまった。", en: "He fell asleep with his shoes still on." },
      { jp: "窓[まど]を開[あ]けっぱなしにした。", en: "I left the window open." }
    ],
    notes:
      "〜っぱなし often carries a negative nuance of negligence or carelessness. It can also describe continuous action (立[た]ちっぱなし = standing the whole time).",
    related: []
  },

  {
    id: "g-n4-033",
    point: "〜ざるをえない",
    reading: "〜zaru o enai",
    level: "N4",
    category: "Obligation",
    meaning: "Have no choice but to / cannot help doing",
    structure: "Verb (nai-form without ない) + ざるをえない",
    explanation:
      "〜ざるをえない expresses unavoidable obligation: 'have no choice but to do X', 'cannot help doing X'. It conveys that there is no alternative.",
    formation:
      "V-ない (drop ない) + ずるをえない / ざるをえません\nNote: する → せざるをえない (special form)\nPast: 〜ざるをえなかった",
    examples: [
      { jp: "こんな状況[じょうきょう]では、辞[や]めざるをえない。", en: "In this situation, I have no choice but to quit." },
      { jp: "仕事[しごと]だから、行[い]かざるをえない。", en: "It's work, so I have no choice but to go." },
      { jp: "言[い]わないでおいたが、結局[けっきょく]言[い]わざるをえなかった。", en: "I tried not to say it, but in the end I couldn't help saying it." },
      { jp: "高[たか]くても買[か]わざるをえない。", en: "Even if it's expensive, I have no choice but to buy it." }
    ],
    notes:
      "〜ざるをえない expresses unavoidable necessity, similar to 〜なければならない but stronger ('no other way'). The verb する becomes せざるをえない (not しざる).",
    related: ["g-n4-008"]
  },

  {
    id: "g-n4-034",
    point: "〜どころか",
    reading: "〜dokoro ka",
    level: "N4",
    category: "Conjunctions",
    meaning: "Far from / let alone / on the contrary",
    structure: "Noun / Sentence (plain) + どころか",
    explanation:
      "〜どころか emphasizes that not only is X not the case, but the opposite (or something even more extreme) is true: 'far from X', 'let alone X'.",
    formation:
      "N + どころか\nV-plain + どころか\nい-adj + どころか\nな-adj (だ→) + どころか\nOften followed by a stronger negative statement",
    examples: [
      { jp: "彼[かれ]は漢字[かんじ]どころか、ひらがなも書[か]けない。", en: "Far from kanji, he can't even write hiragana." },
      { jp: "忙[いそが]しくて、旅行[りょこう]どころか、休[やす]む暇[ひま]もない。", en: "I'm so busy that far from traveling, I don't even have time to rest." },
      { jp: "病気[びょうき]で、歩[ある]けるどころか、起[お]きることもできない。", en: "He's so sick that far from walking, he can't even get up." },
      { jp: "彼[かれ]は英語[えいご]どころか、日本語[にほんご]も話[はな]せる。", en: "Far from just English, he can even speak Japanese." }
    ],
    notes:
      "〜どころか introduces a counter-expectation, often followed by も...ない ('not even...'). It can be positive ('not only X, but even Y') or negative ('far from X').",
    related: []
  }
];

export const grammarCategories: { name: string; jp: string }[] = [
  { name: "Particles", jp: "助詞" },
  { name: "Verb forms", jp: "動詞活用" },
  { name: "Copula", jp: "名詞述語" },
  { name: "Adjectives", jp: "形容詞" },
  { name: "Conditionals", jp: "条件" },
  { name: "Giving/Receiving", jp: "授受表現" },
  { name: "Comparisons", jp: "比較" },
  { name: "Modifying", jp: "修飾・推量" },
  { name: "Tense", jp: "時制" },
  { name: "Conjunctions", jp: "接続" },
  { name: "Suggestions", jp: "提案" },
  { name: "Permission", jp: "許可" },
  { name: "Obligation", jp: "義務" },
  { name: "Want/Desire", jp: "希望" }
];
