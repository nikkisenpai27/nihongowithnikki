import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN3E: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 古い本屋での出会い (A bookshop encounter)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-41",
    title: "古[ふる]い本屋[ほんや]での出会[であ]い",
    titleReading: "ふるいほんやでのであい",
    level: "N3",
    summary: "A reader chats with a stranger at an old bookshop and ends up making a new friend over coffee.",
    estMinutes: 4,
    tags: ["bookshop", "encounter", "friendship"],
    body: [
      "先週[せんしゅう]の土曜日[どようび]、私[わたし]は近[ちか]くの古[ふる]い本屋[ほんや]に行[い]った。",
      "狭[せま]い店内[てんない]には、古[ふる]い紙[かみ]の匂[にお]いがしていた。",
      "奥[おく]の棚[たな]を見[み]ていると、一人[ひとり]の女性[じょせい]が話[はな]しかけてきた。",
      "彼女[かのじょ]は私[わたし]が持[も]っていた本[ほん]に気付[きづ]いたようだった。",
      "「その本[ほん]、私[わたし]も読[よ]んだことがあります」と彼女[かのじょ]は言[い]った。",
      "私[わたし]たちはコーヒーを飲[の]みながら、本[ほん]の話[はなし]で盛[も]り上[あ]がった。",
      "新[あたら]しい友達[ともだち]ができて、私[わたし]はとても嬉[うれ]しかった。"
    ],
    translation: [
      "Last Saturday, I went to an old bookstore nearby.",
      "The narrow interior of the store smelled of old paper.",
      "As I was looking at the shelves in the back, a woman started talking to me.",
      "She seemed to have noticed the book I was holding.",
      "\"I have read that book too,\" she said.",
      "We drank coffee and the conversation grew lively as we talked about books.",
      "I had made a new friend, and I was very glad."
    ],
    vocab: [
      { word: "古い", reading: "ふるい", meaning: "old" },
      { word: "本屋", reading: "ほんや", meaning: "bookstore" },
      { word: "狭い", reading: "せまい", meaning: "narrow, cramped" },
      { word: "店内", reading: "てんない", meaning: "inside a store" },
      { word: "匂い", reading: "におい", meaning: "smell" },
      { word: "棚", reading: "たな", meaning: "shelf" },
      { word: "気付く", reading: "きづく", meaning: "to notice" },
      { word: "盛り上がる", reading: "もりあがる", meaning: "to liven up" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy, glad" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 雨の通勤 (A rainy commute)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-42",
    title: "雨[あめ]の通[つう]勤[きん]",
    titleReading: "あめのつうきん",
    level: "N3",
    summary: "On a rainy morning, a tired commuter is saved by a colleague's small act of kindness.",
    estMinutes: 5,
    tags: ["commute", "rain", "kindness"],
    body: [
      "今朝[けさ]は起[お]きる時[とき]、外[そと]がまだ暗[くら]かった。",
      "窓[まど]を開[あ]けると、冷[つめ]たい雨[あめ]が静[しず]かに降[ふ]っていた。",
      "電車[でんしゃ]に乗[の]ると、傘[かさ]を持[も]った人[ひと]で混[こ]んでいた。",
      "隣[となり]の人[ひと]は濡[ぬ]れた鞄[かばん]を膝[ひざ]の上[うえ]に置[お]いていた。",
      "遅[おく]れそうになったが、なんとか間[ま]に合[あ]った。",
      "会社[かいしゃ]に着[つ]いた時[とき]、靴[くつ]が濡[ぬ]れて気持[きも]ちが悪[わる]かった。",
      "でも、同僚[どうりょう]が温[あたた]かいお茶[ちゃ]を入[い]れてくれた。",
      "その小[ちい]さな優[やさ]しさに救[すく]われた一日[いちにち]だった。"
    ],
    translation: [
      "When I woke up this morning, it was still dark outside.",
      "When I opened the window, cold rain was falling quietly.",
      "When I got on the train, it was crowded with people holding umbrellas.",
      "The person next to me had placed a wet bag on his lap.",
      "I almost ran late, but I somehow made it in time.",
      "When I arrived at the office, my shoes were wet and it felt unpleasant.",
      "But a colleague made me a warm cup of tea.",
      "It was a day saved by that small kindness."
    ],
    vocab: [
      { word: "通勤", reading: "つうきん", meaning: "commute" },
      { word: "暗い", reading: "くらい", meaning: "dark" },
      { word: "冷たい", reading: "つめたい", meaning: "cold" },
      { word: "混む", reading: "こむ", meaning: "to be crowded" },
      { word: "濡れる", reading: "ぬれる", meaning: "to get wet" },
      { word: "鞄", reading: "かばん", meaning: "bag" },
      { word: "膝", reading: "ひざ", meaning: "knee" },
      { word: "遅れる", reading: "おくれる", meaning: "to be late" },
      { word: "間に合う", reading: "まにあう", meaning: "to be in time" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "救う", reading: "すくう", meaning: "to save, rescue" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 先生の助言 (A teacher's advice)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-43",
    title: "先生[せんせい]の助言[じょげん]",
    titleReading: "せんせいのじょげん",
    level: "N3",
    summary: "A college student unsure about the future receives calm advice from a trusted teacher.",
    estMinutes: 4,
    tags: ["teacher", "advice", "future"],
    body: [
      "大学[だいがく]の時[とき]、私[わたし]は進路[しんろ]に迷[まよ]っていた。",
      "就職[しゅうしょく]するか、大学院[だいがくいん]に進[すす]むか決[き]められなかった。",
      "悩[なや]んだ末[すえ]、私[わたし]は担当[たんとう]の田中[たなか]先生[せんせい]に相談[そうだん]した。",
      "先生[せんせい]は静[しず]かに私[わたし]の話[はなし]を聞[き]いてくれた。",
      "「焦[あせ]る必要[ひつよう]はない。自分[じぶん]の心[こころ]に正直[しょうじき]になりなさい」と言[い]った。",
      "その言葉[ことば]は、私[わたし]の胸[むね]に深[ふか]く残[のこ]った。",
      "今[いま]でも迷[まよ]う時[とき]、その言葉[ことば]を思[おも]い出[だ]す。"
    ],
    translation: [
      "In college, I was lost about my future path.",
      "I could not decide whether to get a job or go on to graduate school.",
      "After much worry, I consulted my teacher in charge, Mr. Tanaka.",
      "The teacher quietly listened to my story.",
      "\"There is no need to rush. Be honest with your own heart,\" he said.",
      "Those words remained deep in my chest.",
      "Even now, when I hesitate, I remember those words."
    ],
    vocab: [
      { word: "助言", reading: "じょげん", meaning: "advice" },
      { word: "進路", reading: "しんろ", meaning: "future course, career path" },
      { word: "迷う", reading: "まよう", meaning: "to hesitate, be lost" },
      { word: "就職", reading: "しゅうしょく", meaning: "finding a job" },
      { word: "大学院", reading: "だいがくいん", meaning: "graduate school" },
      { word: "悩む", reading: "なやむ", meaning: "to worry" },
      { word: "相談", reading: "そうだん", meaning: "consultation" },
      { word: "焦る", reading: "あせる", meaning: "to be impatient" },
      { word: "正直", reading: "しょうじき", meaning: "honest" },
      { word: "胸", reading: "むね", meaning: "chest, heart" },
      { word: "思い出す", reading: "おもいだす", meaning: "to recall" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 友達の秘密 (A friend's secret)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-44",
    title: "友達[ともだち]の秘密[ひみつ]",
    titleReading: "ともだちのひみつ",
    level: "N3",
    summary: "A best friend quietly confesses her plan to study abroad, and the narrator promises to watch over the dream.",
    estMinutes: 5,
    tags: ["friend", "secret", "study abroad"],
    body: [
      "先月[せんげつ]、親友[しんゆう]の美咲[みさき]が私[わたし]に秘密[ひみつ]を打[う]ち明[あ]けた。",
      "彼女[かのじょ]は来年[らいねん]海外[かいがい]に留学[りゅうがく]するつもりだと言[い]った。",
      "でも、両親[りょうしん]にはまだ話[はな]していないそうだ。",
      "私[わたし]は驚[おどろ]きながらも、彼女[かのじょ]の決意[けつい]を応援[おうえん]した。",
      "「いつかきっと伝[つた]えるから」と彼女[かのじょ]は微笑[ほほえ]んだ。",
      "それ以来[いらい]、私[わたし]は彼女[かのじょ]の夢[ゆめ]をそっと見守[みまも]っている。",
      "友達[ともだち]の秘密[ひみつ]を守[まも]るのは少[すこ]し重[おも]いけれど、悪[わる]くない。"
    ],
    translation: [
      "Last month, my best friend Misaki confided a secret to me.",
      "She said she planned to study abroad next year.",
      "But she had not told her parents yet, she said.",
      "I was surprised, but I supported her decision.",
      "\"I will definitely tell them someday,\" she smiled.",
      "Since then, I have been quietly watching over her dream.",
      "Keeping a friend's secret is a little heavy, but it is not bad."
    ],
    vocab: [
      { word: "秘密", reading: "ひみつ", meaning: "secret" },
      { word: "親友", reading: "しんゆう", meaning: "best friend" },
      { word: "打ち明ける", reading: "うちあける", meaning: "to confide" },
      { word: "海外", reading: "かいがい", meaning: "overseas" },
      { word: "留学", reading: "りゅうがく", meaning: "studying abroad" },
      { word: "両親", reading: "りょうしん", meaning: "parents" },
      { word: "驚く", reading: "おどろく", meaning: "to be surprised" },
      { word: "決意", reading: "けつい", meaning: "determination" },
      { word: "応援", reading: "おうえん", meaning: "support, cheering" },
      { word: "伝える", reading: "つたえる", meaning: "to convey" },
      { word: "見守る", reading: "みまもる", meaning: "to watch over" },
      { word: "守る", reading: "まもる", meaning: "to protect, to keep" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 朝の習慣 (A morning ritual)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-45",
    title: "朝[あさ]の習慣[しゅうかん]",
    titleReading: "あさのしゅうかん",
    level: "N3",
    summary: "A narrator describes a quiet fifteen-minute morning ritual that sets the tone for the whole day.",
    estMinutes: 4,
    tags: ["morning", "habit", "coffee"],
    body: [
      "毎朝[まいあさ]、私[わたし]は六[ろく]時[じ]に起[お]きる。",
      "まず、キッチンに立[た]ち、お湯[ゆ]を沸[わ]かす。",
      "一[いっ]杯[ぱい]のコーヒーを淹[い]れるのが私[わたし]の日課[にっか]だ。",
      "窓[まど]のそばに座[すわ]り、少[すこ]しずつ冷[さ]めていくコーヒーを味[あじ]わう。",
      "静[しず]かな時間[じかん]が心[こころ]を整[ととの]えてくれる。",
      "新聞[しんぶん]を広[ひろ]げ、昨日[きのう]の出来事[できごと]に目[め]を通[とお]す。",
      "この十五[じゅうご]分[ふん]が、私[わたし]の一日[いちにち]を決[き]める。"
    ],
    translation: [
      "Every morning, I wake up at six o'clock.",
      "First, I stand in the kitchen and boil water.",
      "Making a cup of coffee is my daily routine.",
      "I sit by the window and savor the coffee as it slowly cools.",
      "The quiet time settles my mind.",
      "I spread out the newspaper and glance through yesterday's events.",
      "These fifteen minutes decide how my whole day will go."
    ],
    vocab: [
      { word: "習慣", reading: "しゅうかん", meaning: "habit" },
      { word: "沸かす", reading: "わかす", meaning: "to boil (water)" },
      { word: "淹れる", reading: "いれる", meaning: "to make (tea or coffee)" },
      { word: "日課", reading: "にっか", meaning: "daily routine" },
      { word: "座る", reading: "すわる", meaning: "to sit" },
      { word: "味わう", reading: "あじわう", meaning: "to savor" },
      { word: "整える", reading: "ととのえる", meaning: "to settle, to organize" },
      { word: "広げる", reading: "ひろげる", meaning: "to spread out" },
      { word: "出来事", reading: "できごと", meaning: "event, happening" },
      { word: "目を通す", reading: "めをとおす", meaning: "to glance through" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 道に迷った日 (A lost direction)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-46",
    title: "道[みち]に迷[まよ]った日[ひ]",
    titleReading: "みちにまよったひ",
    level: "N3",
    summary: "Lost in an unfamiliar town after a dead phone battery, the narrator is helped by a kindly baker.",
    estMinutes: 5,
    tags: ["lost", "kindness", "town"],
    body: [
      "先週[せんしゅう]の日曜日[にちようび]、私[わたし]は新[あたら]しい町[まち]を歩[ある]いていた。",
      "スマートフォンの地図[ちず]を見[み]ながら進[すす]んでいたが、電池[でんち]が切[き]れてしまった。",
      "周[まわ]りに人[ひと]はおらず、少[すこ]し不安[ふあん]になった。",
      "しばらく歩[ある]くと、小[ちい]さいパン屋[や]を見[み]つけた。",
      "店主[てんしゅ]に駅[えき]までの道[みち]を聞[き]くと、親切[しんせつ]に教[おし]えてくれた。",
      "「次[つぎ]の信号[しんごう]を左[ひだり]に曲[ま]がるんだよ」と笑顔[えがお]で言[い]った。",
      "おかげで無事[ぶじ]に駅[えき]に着[つ]くことができた。"
    ],
    translation: [
      "Last Sunday, I was walking through a town I did not know.",
      "I was moving forward while checking the map on my smartphone, but the battery died.",
      "There was no one around, and I felt a little anxious.",
      "After walking for a while, I found a small bakery.",
      "When I asked the owner the way to the station, he kindly told me.",
      "\"Turn left at the next traffic light,\" he said with a smile.",
      "Thanks to him, I was able to reach the station safely."
    ],
    vocab: [
      { word: "迷う", reading: "まよう", meaning: "to get lost" },
      { word: "地図", reading: "ちず", meaning: "map" },
      { word: "進む", reading: "すすむ", meaning: "to move forward" },
      { word: "電池", reading: "でんち", meaning: "battery" },
      { word: "切れる", reading: "きれる", meaning: "to run out" },
      { word: "不安", reading: "ふあん", meaning: "anxiety" },
      { word: "店主", reading: "てんしゅ", meaning: "shop owner" },
      { word: "親切", reading: "しんせつ", meaning: "kind, kindness" },
      { word: "信号", reading: "しんごう", meaning: "traffic light" },
      { word: "曲がる", reading: "まがる", meaning: "to turn" },
      { word: "無事", reading: "ぶじ", meaning: "safely" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 温かい歓迎 (A warm welcome)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-47",
    title: "温[あたた]かい歓迎[かんげい]",
    titleReading: "あたたかいかんげい",
    level: "N3",
    summary: "On the first day at a new office after a transfer, a worker is greeted with flowers and friendly smiles.",
    estMinutes: 4,
    tags: ["workplace", "welcome", "new start"],
    body: [
      "新[あたら]しい職場[しょくば]に転勤[てんきん]した初日[しょにち]、私[わたし]は緊張[きんちょう]していた。",
      "オフィスに入[はい]ると、同僚[どうりょう]たちが笑顔[えがお]で迎[むか]えてくれた。",
      "「ようこそ!何[なに]か分[わ]からないことがあれば、いつでも聞[き]いてね」。",
      "デスクには花[はな]と小[ちい]さな手紙[てがみ]が置[お]かれていた。",
      "「一緒[いっしょ]に頑張[がんば]りましょう」と書[か]いてあった。",
      "その日[ひ]のランチは、皆[みな]で近[ちか]くのレストランに行[い]った。",
      "思[おも]ったよりも早[はや]く、新[あたら]しい場所[ばしょ]に慣[な]れていけそうだ。"
    ],
    translation: [
      "On my first day at my new workplace after a transfer, I was nervous.",
      "When I entered the office, my colleagues welcomed me with smiles.",
      "\"Welcome! If there is anything you don't understand, ask us anytime.\"",
      "On my desk, flowers and a small letter had been placed.",
      "\"Let's do our best together,\" it said.",
      "That day's lunch, we all went to a nearby restaurant.",
      "It seems I will get used to the new place faster than I expected."
    ],
    vocab: [
      { word: "歓迎", reading: "かんげい", meaning: "welcome" },
      { word: "職場", reading: "しょくば", meaning: "workplace" },
      { word: "転勤", reading: "てんきん", meaning: "job transfer" },
      { word: "初日", reading: "しょにち", meaning: "first day" },
      { word: "緊張", reading: "きんちょう", meaning: "tension, nervousness" },
      { word: "迎える", reading: "むかえる", meaning: "to welcome" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "頑張る", reading: "がんばる", meaning: "to do one's best" },
      { word: "慣れる", reading: "なれる", meaning: "to get used to" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 寒い夜の出来事 (A cold night)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-48",
    title: "寒[さむ]い夜[よる]の出来事[できごと]",
    titleReading: "さむいよるのできごと",
    level: "N3",
    summary: "Caught in sudden snow on the way home, the narrator lends a scarf to a shivering old woman at the bus stop.",
    estMinutes: 5,
    tags: ["winter", "snow", "kindness"],
    body: [
      "昨夜[さくや]、私[わたし]は帰宅[きたく]する途中[とちゅう]、突然[とつぜん]雪[ゆき]が降[ふ]り出[だ]した。",
      "風[かぜ]が強[つよ]く、体[からだ]が芯[しん]から冷[ひ]えた。",
      "バス停[てい]で待[ま]っていたが、バスはなかなか来[こ]なかった。",
      "隣[となり]にいたお婆[ばあ]さんが小[ちい]さく震[ふる]えていた。",
      "私[わたし]は自分[じぶん]のマフラーを彼女[かのじょ]に貸[か]した。",
      "彼女[かのじょ]は「ありがとう」と優[やさ]しく微笑[ほほえ]んだ。",
      "ようやくバスが到着[とうちゃく]した時[とき]、二人[ふたり]はほっとした。"
    ],
    translation: [
      "Last night, on my way home, snow suddenly started to fall.",
      "The wind was strong, and my body grew cold to the core.",
      "I waited at the bus stop, but the bus did not come for a long time.",
      "An old woman next to me was shivering slightly.",
      "I lent her my scarf.",
      "She smiled gently and said, \"Thank you.\"",
      "When the bus finally arrived, we both felt relieved."
    ],
    vocab: [
      { word: "昨夜", reading: "さくや", meaning: "last night" },
      { word: "帰宅", reading: "きたく", meaning: "returning home" },
      { word: "途中", reading: "とちゅう", meaning: "on the way" },
      { word: "突然", reading: "とつぜん", meaning: "suddenly" },
      { word: "芯", reading: "しん", meaning: "core" },
      { word: "冷える", reading: "ひえる", meaning: "to grow cold" },
      { word: "震える", reading: "ふるえる", meaning: "to shiver" },
      { word: "貸す", reading: "かす", meaning: "to lend" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 分かち合う夢 (A shared dream)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-49",
    title: "分[わ]かち合[あ]う夢[ゆめ]",
    titleReading: "わかちあうゆめ",
    level: "N3",
    summary: "A husband and wife quietly nurture their shared dream of opening a small cafe, one weekend at a time.",
    estMinutes: 5,
    tags: ["couple", "dream", "cafe"],
    body: [
      "私[わたし]と妻[つま]には、一[ひと]つの共通[きょうつう]の夢[ゆめ]がある。",
      "それはいつか小[ちい]さなカフェを開[ひら]くことだ。",
      "週末[しゅうまつ]ごとに、二人[ふたり]でメニューを考[かんが]える。",
      "「手作[てづく]りのケーキと美味[おい]しいコーヒーがいいね」と妻[つま]は言[い]う。",
      "まだ資金[しきん]が足[た]りないが、少[すこ]しずつ貯金[ちょきん]している。",
      "夢[ゆめ]を語[かた]り合[あ]う時間[じかん]が、二人[ふたり]を強[つよ]くする。",
      "いつか必[かなら]ず、その扉[とびら]を開[あ]ける日[ひ]が来[く]ると信[しん]じている。"
    ],
    translation: [
      "My wife and I have one dream in common.",
      "It is to open a small cafe someday.",
      "Every weekend, we think about the menu together.",
      "\"Handmade cake and delicious coffee would be nice,\" my wife says.",
      "We do not have enough funds yet, but we save little by little.",
      "The time we spend talking about our dream strengthens us.",
      "I believe that someday the day will surely come when we open that door."
    ],
    vocab: [
      { word: "分かち合う", reading: "わかちあう", meaning: "to share" },
      { word: "共通", reading: "きょうつう", meaning: "common, shared" },
      { word: "開く", reading: "ひらく", meaning: "to open (a shop)" },
      { word: "週末", reading: "しゅうまつ", meaning: "weekend" },
      { word: "考える", reading: "かんがえる", meaning: "to think" },
      { word: "手作り", reading: "てづくり", meaning: "handmade" },
      { word: "資金", reading: "しきん", meaning: "funds" },
      { word: "貯金", reading: "ちょきん", meaning: "savings" },
      { word: "語り合う", reading: "かたりあう", meaning: "to talk together" },
      { word: "扉", reading: "とびら", meaning: "door" },
      { word: "信じる", reading: "しんじる", meaning: "to believe" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — ささやかな贈り物 (A simple gift)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-50",
    title: "ささやかな贈[おく]り物[もの]",
    titleReading: "ささやかなおくりもの",
    level: "N3",
    summary: "For her mother's birthday, a daughter knits a scarf by hand and learns the value of a heartfelt gift.",
    estMinutes: 5,
    tags: ["birthday", "gift", "family"],
    body: [
      "母[はは]の誕生日[たんじょうび]に、私[わたし]は手作[てづく]りのマフラーを贈[おく]った。",
      "編[あ]むのは初[はじ]めてで、何度[なんど]も失敗[しっぱい]した。",
      "三週間[さんしゅうかん]かけて、ようやく完成[かんせい]した。",
      "母[はは]は包[つつ]みを開[あ]けた瞬間[しゅんかん]、目[め]を丸[まる]くした。",
      "「こんなに素晴[すば]らしいものをもらったことはないよ」と涙[なみだ]を浮[う]かべた。",
      "私[わたし]は少[すこ]し照[て]れくさかったが、とても嬉[うれ]しかった。",
      "高[たか]いプレゼントじゃなくても、心[こころ]がこもっていれば十分[じゅうぶん]だ。"
    ],
    translation: [
      "On my mother's birthday, I gave her a handmade scarf.",
      "It was my first time knitting, and I failed many times.",
      "After three weeks, I finally completed it.",
      "The moment my mother opened the wrapping, her eyes widened.",
      "\"I have never received such a wonderful thing,\" she said, with tears in her eyes.",
      "I was a little shy, but I was very happy.",
      "Even if it is not an expensive present, if it comes from the heart, it is enough."
    ],
    vocab: [
      { word: "ささやか", reading: "ささやか", meaning: "modest, simple" },
      { word: "贈り物", reading: "おくりもの", meaning: "gift" },
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "手作り", reading: "てづくり", meaning: "handmade" },
      { word: "編む", reading: "あむ", meaning: "to knit" },
      { word: "失敗", reading: "しっぱい", meaning: "failure" },
      { word: "完成", reading: "かんせい", meaning: "completion" },
      { word: "包み", reading: "つつみ", meaning: "wrapping" },
      { word: "瞬間", reading: "しゅんかん", meaning: "moment" },
      { word: "素晴らしい", reading: "すばらしい", meaning: "wonderful" },
      { word: "涙", reading: "なみだ", meaning: "tears" },
      { word: "十分", reading: "じゅうぶん", meaning: "enough" }
    ]
  }
];
