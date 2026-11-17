import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const storiesN5B: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N5 — 海の日 (A day at the beach)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-16",
    title: "海[うみ]の日[ひ]",
    titleReading: "うみのひ",
    level: "N5",
    summary: "Nikki spends a sunny day at the beach with a friend, eating sandwiches and drinking cold tea.",
    estMinutes: 2,
    tags: ["slice of life", "nature"],
    body: [
      "今日[きょう]は海[うみ]へ行[い]きました。",
      "天気[てんき]がとても良[よ]かったです。空[そら]は青[あお]かったです。",
      "友達[ともだち]と一緒[いっしょ]に水[みず]で遊[あそ]びました。",
      "お昼[ひる]にサンドイッチを食[た]べました。冷[つめ]たいお茶[ちゃ]を飲[の]みました。",
      "夕方[ゆうがた]に帰[かえ]りました。楽[たの]しい一日[いちにち]でした。"
    ],
    translation: [
      "Today I went to the sea.",
      "The weather was very good. The sky was blue.",
      "I played in the water together with my friend.",
      "At noon I ate a sandwich. I drank cold tea.",
      "I went home in the evening. It was a fun day."
    ],
    vocab: [
      { word: "海", reading: "うみ", meaning: "sea; beach" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "良い", reading: "よい", meaning: "good" },
      { word: "空", reading: "そら", meaning: "sky" },
      { word: "青い", reading: "あおい", meaning: "blue" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "水", reading: "みず", meaning: "water" },
      { word: "遊ぶ", reading: "あそぶ", meaning: "to play" },
      { word: "昼", reading: "ひる", meaning: "noon" },
      { word: "冷たい", reading: "つめたい", meaning: "cold (to touch)" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "帰る", reading: "かえる", meaning: "to return" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 花を買う (Buying flowers)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-17",
    title: "花[はな]を買[か]う",
    titleReading: "はなをかう",
    level: "N5",
    summary: "Nikki buys red roses for her mother's birthday and brings them home wrapped.",
    estMinutes: 2,
    tags: ["family", "shopping"],
    body: [
      "今日[きょう]は母[はは]の誕生日[たんじょうび]です。",
      "花屋[はなや]へ行[い]きました。赤[あか]い花[はな]と白[しろ]い花[はな]を見[み]ました。",
      "赤[あか]いバラを三本[さんぼん]買[か]いました。きれいでした。",
      "店[みせ]の人[ひと]が花[はな]を包[つつ]んでくれました。",
      "家[いえ]で母[はは]に渡[わた]しました。母[はは]はとても喜[よろこ]びました。",
      "「ありがとう」と言[い]いました。嬉[うれ]しかったです。"
    ],
    translation: [
      "Today is my mother's birthday.",
      "I went to a flower shop. I saw red flowers and white flowers.",
      "I bought three red roses. They were pretty.",
      "The shopkeeper wrapped the flowers for me.",
      "At home I gave them to my mother. She was very happy.",
      "She said, 'Thank you.' I was happy."
    ],
    vocab: [
      { word: "花", reading: "はな", meaning: "flower" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "母", reading: "はは", meaning: "mother" },
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "赤い", reading: "あかい", meaning: "red" },
      { word: "白い", reading: "しろい", meaning: "white" },
      { word: "見る", reading: "みる", meaning: "to see" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "包む", reading: "つつむ", meaning: "to wrap" },
      { word: "渡す", reading: "わたす", meaning: "to hand over" },
      { word: "喜ぶ", reading: "よろこぶ", meaning: "to rejoice" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 新しい隣の人 (The new neighbor)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-18",
    title: "新[あたら]しい隣[となり]の人[ひと]",
    titleReading: "あたらしいとなりのひと",
    level: "N5",
    summary: "A new family moves in next door. Nikki meets them, exchanges greetings, and shares cookies.",
    estMinutes: 3,
    tags: ["neighborhood", "slice of life"],
    body: [
      "先週[せんしゅう]、隣[となり]の家[いえ]に新[あたら]しい人[ひと]が来[き]ました。",
      "名前[なまえ]は山田[やまだ]さんです。家族[かぞく]と住[す]んでいます。",
      "朝[あさ]、会[あ]った時[とき]、「おはようございます」と言[い]いました。",
      "山田[やまだ]さんはとても親切[しんせつ]です。野菜[やさい]をくれました。",
      "私[わたし]はクッキーを作[つく]りました。山田[やまだ]さんにあげました。",
      "いい隣[となり]ができました。"
    ],
    translation: [
      "Last week, a new person came to the house next door.",
      "The name is Yamada-san. They live with their family.",
      "When we met in the morning, they said, 'Good morning.'",
      "Yamada-san is very kind. They gave me vegetables.",
      "I made cookies. I gave them to Yamada-san.",
      "I got a good neighbor."
    ],
    vocab: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "隣", reading: "となり", meaning: "next door" },
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "会う", reading: "あう", meaning: "to meet" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "野菜", reading: "やさい", meaning: "vegetable" },
      { word: "作る", reading: "つくる", meaning: "to make" },
      { word: "あげる", reading: "あげる", meaning: "to give" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 犬の散歩 (Walking the dog)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-19",
    title: "犬[いぬ]の散歩[さんぽ]",
    titleReading: "いぬのさんぽ",
    level: "N5",
    summary: "Nikki takes her dog Pochi for an evening walk to the park, where he meets another dog.",
    estMinutes: 2,
    tags: ["pets", "daily life"],
    body: [
      "私[わたし]の家[いえ]には犬[いぬ]がいます。名前[なまえ]はポチです。",
      "毎日[まいにち]夕方[ゆうがた]、犬[いぬ]と散歩[さんぽ]します。",
      "公園[こうえん]へ行[い]きます。犬[いぬ]がとても元気[げんき]に走[はし]ります。",
      "他[ほか]の犬[いぬ]に会[あ]いました。ポチはとても嬉[うれ]しかったです。",
      "公園[こうえん]で水[みず]を飲[の]みました。そして、家[いえ]に帰[かえ]りました。",
      "散歩[さんぽ]は毎日[まいにち]楽[たの]しいです。"
    ],
    translation: [
      "My house has a dog. The name is Pochi.",
      "Every evening, I walk with the dog.",
      "We go to the park. The dog runs very energetically.",
      "We met another dog. Pochi was very happy.",
      "We drank water at the park. Then, I returned home.",
      "Walking is fun every day."
    ],
    vocab: [
      { word: "犬", reading: "いぬ", meaning: "dog" },
      { word: "散歩", reading: "さんぽ", meaning: "walk" },
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "元気", reading: "げんき", meaning: "energetic" },
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "会う", reading: "あう", meaning: "to meet" },
      { word: "帰る", reading: "かえる", meaning: "to return" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — お寿司を作る (Making sushi)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-20",
    title: "お寿司[すし]を作[つく]る",
    titleReading: "おすしをつくる",
    level: "N5",
    summary: "On Sunday, Nikki tries making sushi at home, rolls it small, and finds it delicious.",
    estMinutes: 3,
    tags: ["cooking", "food"],
    body: [
      "日曜日[にちようび]に、お寿司[すし]を作[つく]りました。",
      "最初[さいしょ]に、ご飯[はん]を炊[た]きました。",
      "そして、魚[さかな]と野菜[やさい]を切[き]りました。",
      "のりの上[うえ]にご飯[はん]と魚[さかな]を置[お]きました。",
      "巻[ま]いて、小[ちい]さく切[き]りました。とてもきれいでした。",
      "食[た]べてみました。美味[おい]しかったです。"
    ],
    translation: [
      "On Sunday, I made sushi.",
      "First, I cooked rice.",
      "Then, I cut fish and vegetables.",
      "I placed rice and fish on top of nori.",
      "I rolled it and cut it small. It was very pretty.",
      "I tried eating it. It was delicious."
    ],
    vocab: [
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "寿司", reading: "すし", meaning: "sushi" },
      { word: "作る", reading: "つくる", meaning: "to make" },
      { word: "最初", reading: "さいしょ", meaning: "first" },
      { word: "ご飯", reading: "ごはん", meaning: "cooked rice; meal" },
      { word: "魚", reading: "さかな", meaning: "fish" },
      { word: "野菜", reading: "やさい", meaning: "vegetable" },
      { word: "切る", reading: "きる", meaning: "to cut" },
      { word: "上", reading: "うえ", meaning: "top; above" },
      { word: "置く", reading: "おく", meaning: "to place" },
      { word: "巻く", reading: "まく", meaning: "to roll" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 忘れた傘 (Lost umbrella)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-21",
    title: "忘[わす]れた傘[かさ]",
    titleReading: "わすれたかさ",
    level: "N5",
    summary: "On a rainy afternoon, Nikki forgets her umbrella on the train and resolves to look for it tomorrow.",
    estMinutes: 2,
    tags: ["mishap", "weather"],
    body: [
      "午後[ごご]、雨[あめ]が降[ふ]りました。",
      "駅[えき]で電車[でんしゃ]に乗[の]りました。傘[かさ]を忘[わす]れました。",
      "家[いえ]に着[つ]いた時[とき]、傘[かさ]がないと分[わ]かりました。",
      "明日[あした]、駅[えき]へ行[い]って探[さが]します。",
      "もう少[すこ]し気[き]をつけます。"
    ],
    translation: [
      "In the afternoon, it rained.",
      "I got on the train at the station. I forgot my umbrella.",
      "When I arrived home, I realized my umbrella was gone.",
      "Tomorrow, I'll go to the station and look for it.",
      "I'll be a little more careful."
    ],
    vocab: [
      { word: "午後", reading: "ごご", meaning: "afternoon" },
      { word: "雨", reading: "あめ", meaning: "rain" },
      { word: "降る", reading: "ふる", meaning: "to fall (rain)" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "乗る", reading: "のる", meaning: "to ride" },
      { word: "傘", reading: "かさ", meaning: "umbrella" },
      { word: "忘れる", reading: "わすれる", meaning: "to forget" },
      { word: "着く", reading: "つく", meaning: "to arrive" },
      { word: "分かる", reading: "わかる", meaning: "to understand" },
      { word: "明日", reading: "あした", meaning: "tomorrow" },
      { word: "探す", reading: "さがす", meaning: "to search" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 電車が遅れた (Train delay)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-22",
    title: "電車[でんしゃ]が遅[おく]れた",
    titleReading: "でんしゃがおくれた",
    level: "N5",
    summary: "Nikki's morning train is delayed by about five minutes, but she still arrives at work on time.",
    estMinutes: 2,
    tags: ["commute", "morning"],
    body: [
      "今朝[けさ]、電車[でんしゃ]が遅[おく]れました。",
      "駅[えき]でたくさんの人[ひと]が待[ま]っていました。",
      "五分[ごふん]くらい待[ま]ちました。やっと来[き]ました。",
      "電車[でんしゃ]はとても混[こ]んでいました。",
      "会社[かいしゃ]に九時[くじ]に着[つ]きました。間[ま]に合[あ]いました。",
      "明日[あした]は早[はや]く起[お]きます。"
    ],
    translation: [
      "This morning, the train was late.",
      "At the station, many people were waiting.",
      "I waited about five minutes. Finally it came.",
      "The train was very crowded.",
      "I arrived at the company at nine. I made it in time.",
      "Tomorrow I'll wake up early."
    ],
    vocab: [
      { word: "今朝", reading: "けさ", meaning: "this morning" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "遅れる", reading: "おくれる", meaning: "to be late" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "人", reading: "ひと", meaning: "person" },
      { word: "待つ", reading: "まつ", meaning: "to wait" },
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "混む", reading: "こむ", meaning: "to be crowded" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "着く", reading: "つく", meaning: "to arrive" },
      { word: "間に合う", reading: "まにあう", meaning: "to be in time" },
      { word: "早い", reading: "はやい", meaning: "early" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — アイスクリーム屋さん (Ice cream shop)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-23",
    title: "アイスクリーム屋[や]さん",
    titleReading: "あいすくりーむやさん",
    level: "N5",
    summary: "On a hot day Nikki and a friend visit an ice cream shop, choose flavors, and eat in the park.",
    estMinutes: 2,
    tags: ["food", "summer"],
    body: [
      "今日[きょう]はとても暑[あつ]かったです。",
      "友達[ともだち]とアイスクリーム屋[や]さんへ行[い]きました。",
      "店[みせ]には色々[いろいろ]な味[あじ]がありました。",
      "私[わたし]はいちごを選[えら]びました。友達[ともだち]はチョコレートでした。",
      "公園[こうえん]で食[た]べました。冷[つめ]たくて美味[おい]しかったです。",
      "また来週[らいしゅう]行[い]きたいです。"
    ],
    translation: [
      "Today was very hot.",
      "I went to an ice cream shop with my friend.",
      "The shop had various flavors.",
      "I chose strawberry. My friend had chocolate.",
      "We ate in the park. It was cold and delicious.",
      "I want to go again next week."
    ],
    vocab: [
      { word: "暑い", reading: "あつい", meaning: "hot (weather)" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "色々", reading: "いろいろ", meaning: "various" },
      { word: "味", reading: "あじ", meaning: "flavor" },
      { word: "選ぶ", reading: "えらぶ", meaning: "to choose" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "食べる", reading: "たべる", meaning: "to eat" },
      { word: "冷たい", reading: "つめたい", meaning: "cold" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" },
      { word: "行く", reading: "いく", meaning: "to go" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — お母さんを手伝う (Helping mom)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-24",
    title: "お母[かあ]さんを手伝[てつだ]う",
    titleReading: "おかあさんをてつだう",
    level: "N5",
    summary: "Nikki helps her mother clean the room and cook dinner; they eat together happily.",
    estMinutes: 3,
    tags: ["family", "chores"],
    body: [
      "今日[きょう]はお母[かあ]さんを手伝[てつだ]いました。",
      "最初[さいしょ]に、部屋[へや]を掃除[そうじ]しました。",
      "そして、夕方[ゆうがた]に夕[ゆう]ご飯[はん]を作[つく]りました。",
      "お母[かあ]さんは「ありがとう」と言[い]いました。",
      "一緒[いっしょ]に食[た]べました。とても美味[おい]しかったです。",
      "お母[かあ]さんはとても喜[よろこ]びました。私[わたし]も嬉[うれ]しかったです。"
    ],
    translation: [
      "Today I helped my mother.",
      "First, I cleaned the room.",
      "Then, in the evening I made dinner.",
      "My mother said, 'Thank you.'",
      "We ate together. It was very delicious.",
      "My mother was very happy. I was happy too."
    ],
    vocab: [
      { word: "母", reading: "はは", meaning: "mother" },
      { word: "手伝う", reading: "てつだう", meaning: "to help" },
      { word: "最初", reading: "さいしょ", meaning: "first" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "掃除", reading: "そうじ", meaning: "cleaning" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "夕ご飯", reading: "ゆうごはん", meaning: "dinner" },
      { word: "作る", reading: "つくる", meaning: "to make" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "喜ぶ", reading: "よろこぶ", meaning: "to rejoice" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 春の庭 (Garden in spring)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-25",
    title: "春[はる]の庭[にわ]",
    titleReading: "はるのにわ",
    level: "N5",
    summary: "Nikki enjoys a quiet spring afternoon in the garden as flowers bloom and a small bird visits.",
    estMinutes: 2,
    tags: ["nature", "seasons"],
    body: [
      "春[はる]になりました。お庭[にわ]がきれいです。",
      "赤[あか]い花[はな]と白[しろ]い花[はな]が咲[さ]きました。",
      "小[ちい]さい鳥[とり]が来[き]ました。元気[げんき]に鳴[な]いていました。",
      "私[わたし]はベンチに座[すわ]りました。本[ほん]を読[よ]みました。",
      "お茶[ちゃ]を飲[の]みながら、天気[てんき]を楽[たの]しみました。",
      "春[はる]が大好[だいす]きです。"
    ],
    translation: [
      "It became spring. The garden is pretty.",
      "Red flowers and white flowers bloomed.",
      "A small bird came. It was chirping energetically.",
      "I sat on a bench. I read a book.",
      "While drinking tea, I enjoyed the weather.",
      "I love spring."
    ],
    vocab: [
      { word: "春", reading: "はる", meaning: "spring" },
      { word: "庭", reading: "にわ", meaning: "garden" },
      { word: "花", reading: "はな", meaning: "flower" },
      { word: "咲く", reading: "さく", meaning: "to bloom" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "鳥", reading: "とり", meaning: "bird" },
      { word: "鳴く", reading: "なく", meaning: "to chirp; to cry" },
      { word: "座る", reading: "すわる", meaning: "to sit" },
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "楽しむ", reading: "たのしむ", meaning: "to enjoy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — お父さんからの電話 (Phone call from father)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-26",
    title: "お父[とう]さんからの電話[でんわ]",
    titleReading: "おとうさんからのでんわ",
    level: "N5",
    summary: "Nikki receives a warm phone call from her father and they promise to meet next weekend.",
    estMinutes: 2,
    tags: ["family", "evening"],
    body: [
      "夜[よる]、お父[とう]さんから電話[でんわ]がありました。",
      "「元気[げんき]？」とお父[とう]さんが聞[き]きました。",
      "「はい、元気[げんき]です」と私[わたし]は答[こた]えました。",
      "来週[らいしゅう]の週末[しゅうまつ]に会[あ]う約束[やくそく]をしました。",
      "電話[でんわ]のあと、とても嬉[うれ]しかったです。",
      "早[はや]く会[あ]いたいです。"
    ],
    translation: [
      "At night, there was a phone call from my father.",
      "'Are you well?' my father asked.",
      "'Yes, I'm well,' I answered.",
      "We made a promise to meet next weekend.",
      "After the phone call, I was very happy.",
      "I want to see him soon."
    ],
    vocab: [
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "父", reading: "ちち", meaning: "father" },
      { word: "電話", reading: "でんわ", meaning: "phone call" },
      { word: "元気", reading: "げんき", meaning: "well; energetic" },
      { word: "聞く", reading: "きく", meaning: "to ask; to listen" },
      { word: "答える", reading: "こたえる", meaning: "to answer" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" },
      { word: "週末", reading: "しゅうまつ", meaning: "weekend" },
      { word: "会う", reading: "あう", meaning: "to meet" },
      { word: "約束", reading: "やくそく", meaning: "promise" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" },
      { word: "早い", reading: "はやい", meaning: "early; soon" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 家の掃除 (Cleaning the house)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-27",
    title: "家[いえ]の掃除[そうじ]",
    titleReading: "いえのそうじ",
    level: "N5",
    summary: "Nikki spends Sunday cleaning the house from top to bottom and finishes with laundry.",
    estMinutes: 3,
    tags: ["chores", "home"],
    body: [
      "日曜日[にちようび]に、家[いえ]の掃除[そうじ]をしました。",
      "最初[さいしょ]に、窓[まど]を開[あ]けました。いい風[かぜ]が来[き]ました。",
      "床[ゆか]をきれいにしました。机[つくえ]の上[うえ]もきれいにしました。",
      "洗濯[せんたく]もしました。シャツとズボンを洗[あら]いました。",
      "夕方[ゆうがた]、家[いえ]がとてもきれいになりました。",
      "大変[たいへん]でしたが、気持[きも]ちがいいです。"
    ],
    translation: [
      "On Sunday, I cleaned the house.",
      "First, I opened the window. A nice breeze came in.",
      "I cleaned the floor. I also cleaned the top of the desk.",
      "I also did laundry. I washed shirts and pants.",
      "In the evening, the house became very clean.",
      "It was hard work, but I feel good."
    ],
    vocab: [
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "掃除", reading: "そうじ", meaning: "cleaning" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "開ける", reading: "あける", meaning: "to open" },
      { word: "風", reading: "かぜ", meaning: "wind; breeze" },
      { word: "床", reading: "ゆか", meaning: "floor" },
      { word: "机", reading: "つくえ", meaning: "desk" },
      { word: "洗濯", reading: "せんたく", meaning: "laundry" },
      { word: "洗う", reading: "あらう", meaning: "to wash" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "気持ち", reading: "きもち", meaning: "feeling" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 神社へお参り (Visiting a shrine)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-28",
    title: "神社[じんじゃ]へお参[まい]り",
    titleReading: "じんじゃへおまいり",
    level: "N5",
    summary: "Nikki visits a quiet shrine, washes her hands, prays for her family's health, and draws a fortune.",
    estMinutes: 3,
    tags: ["culture", "outing"],
    body: [
      "今日[きょう]、神社[じんじゃ]へ行[い]きました。",
      "入[はい]る前[まえ]に、手[て]を洗[あら]いました。",
      "お祈[いの]りをしました。家族[かぞく]の健康[けんこう]を願[ねが]いました。",
      "おみくじを引[ひ]きました。運[うん]が良[よ]かったです。",
      "階段[かいだん]の前[まえ]で写真[しゃしん]を撮[と]りました。",
      "とても良[よ]い一日[いちにち]でした。"
    ],
    translation: [
      "Today, I went to a shrine.",
      "Before entering, I washed my hands.",
      "I prayed. I wished for my family's health.",
      "I drew a fortune slip. My luck was good.",
      "I took a photo in front of the stairs.",
      "It was a very good day."
    ],
    vocab: [
      { word: "神社", reading: "じんじゃ", meaning: "shrine" },
      { word: "入る", reading: "はいる", meaning: "to enter" },
      { word: "前", reading: "まえ", meaning: "before; front" },
      { word: "手", reading: "て", meaning: "hand" },
      { word: "洗う", reading: "あらう", meaning: "to wash" },
      { word: "お祈り", reading: "おいのり", meaning: "prayer" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "健康", reading: "けんこう", meaning: "health" },
      { word: "願う", reading: "ねがう", meaning: "to wish" },
      { word: "引く", reading: "ひく", meaning: "to draw; to pull" },
      { word: "写真", reading: "しゃしん", meaning: "photo" },
      { word: "撮る", reading: "とる", meaning: "to take (a photo)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 秋の紅葉 (Autumn leaves)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-29",
    title: "秋[あき]の紅葉[こうよう]",
    titleReading: "あきのこうよう",
    level: "N5",
    summary: "Nikki goes to the mountains to see autumn leaves turn red and yellow and shares a bento with a friend.",
    estMinutes: 2,
    tags: ["nature", "seasons"],
    body: [
      "秋[あき]になりました。山[やま]へ行[い]きました。",
      "木[き]の葉[は]が赤[あか]くなったり、黄色[きいろ]くなったりしました。",
      "とてもきれいでした。写真[しゃしん]をたくさん撮[と]りました。",
      "友達[ともだち]とお弁当[べんとう]を食[た]べました。",
      "少[すこ]し寒[さむ]かったですが、楽[たの]しかったです。",
      "来年[らいねん]も行[い]きたいです。"
    ],
    translation: [
      "It became autumn. I went to the mountains.",
      "The leaves turned red and yellow.",
      "It was very beautiful. I took many photos.",
      "I ate a bento with my friend.",
      "It was a bit cold, but it was fun.",
      "I want to go again next year."
    ],
    vocab: [
      { word: "秋", reading: "あき", meaning: "autumn" },
      { word: "山", reading: "やま", meaning: "mountain" },
      { word: "木", reading: "き", meaning: "tree" },
      { word: "葉", reading: "は", meaning: "leaf" },
      { word: "赤い", reading: "あかい", meaning: "red" },
      { word: "黄色", reading: "きいろ", meaning: "yellow" },
      { word: "写真", reading: "しゃしん", meaning: "photo" },
      { word: "撮る", reading: "とる", meaning: "to take (a photo)" },
      { word: "弁当", reading: "べんとう", meaning: "bento; lunch box" },
      { word: "寒い", reading: "さむい", meaning: "cold (weather)" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" },
      { word: "来年", reading: "らいねん", meaning: "next year" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 小さなプレゼント (A small gift)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-30",
    title: "小[ちい]さなプレゼント",
    titleReading: "ちいさなぷれぜんと",
    level: "N5",
    summary: "Nikki gives her friend a handmade keychain; both are happy and share coffee together.",
    estMinutes: 2,
    tags: ["friendship", "crafts"],
    body: [
      "今日[きょう]、友達[ともだち]に小[ちい]さなプレゼントをあげました。",
      "手作[てづく]りのキーホルダーでした。",
      "友達[ともだち]はとても喜[よろこ]びました。",
      "「ありがとう」と言[い]いました。私[わたし]も嬉[うれ]しかったです。",
      "一緒[いっしょ]にコーヒーを飲[の]みました。",
      "小[ちい]さい物[もの]でも、気持[きも]ちが大事[だいじ]です。"
    ],
    translation: [
      "Today, I gave a small present to my friend.",
      "It was a handmade keychain.",
      "My friend was very happy.",
      "She said, 'Thank you.' I was happy too.",
      "We drank coffee together.",
      "Even small things, the feeling is what matters."
    ],
    vocab: [
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "あげる", reading: "あげる", meaning: "to give" },
      { word: "手作り", reading: "てづくり", meaning: "handmade" },
      { word: "喜ぶ", reading: "よろこぶ", meaning: "to rejoice" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "物", reading: "もの", meaning: "thing" },
      { word: "気持ち", reading: "きもち", meaning: "feeling" },
      { word: "大事", reading: "だいじ", meaning: "important" }
    ]
  }
];
