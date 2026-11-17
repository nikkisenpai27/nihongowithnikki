import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const storiesN5C: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n5-31 — 温泉旅行 (Hot spring trip)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-31",
    title: "温泉[おんせん]旅行[りょこう]",
    titleReading: "おんせんりょこう",
    level: "N5",
    summary: "Nikki goes on a relaxing family trip to a hot spring and looks up at the stars.",
    estMinutes: 3,
    tags: ["travel", "family", "hot-spring"],
    body: [
      "先週[せんしゅう]、家族[かぞく]と 温泉[おんせん]に 行[い]きました。",
      "温泉[おんせん]の お湯[ゆ]は とても 熱[あつ]かったです。",
      "お風呂[ふろ]の あと、ご飯[はん]を 食[た]べました。",
      "魚[さかな]の 料理[りょうり]が 美味[おい]しかったです。",
      "夜[よる]、星[ほし]が きれいに 見[み]えました。"
    ],
    translation: [
      "Last week, I went to a hot spring with my family.",
      "The hot spring water was very hot.",
      "After the bath, I ate a meal.",
      "The fish dish was delicious.",
      "At night, the stars looked beautiful."
    ],
    vocab: [
      { word: "温泉", reading: "おんせん", meaning: "hot spring" },
      { word: "旅行", reading: "りょこう", meaning: "trip" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "お湯", reading: "おゆ", meaning: "hot water" },
      { word: "熱い", reading: "あつい", meaning: "hot" },
      { word: "お風呂", reading: "おふろ", meaning: "bath" },
      { word: "ご飯", reading: "ごはん", meaning: "meal" },
      { word: "魚", reading: "さかな", meaning: "fish" },
      { word: "料理", reading: "りょうり", meaning: "dish" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "星", reading: "ほし", meaning: "star" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-32 — 学校の近くのパン屋 (Bakery near school)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-32",
    title: "学校[がっこう]の 近[ちか]くの パン屋[や]",
    titleReading: "がっこうのちかくのぱんや",
    level: "N5",
    summary: "A student visits a warm little bakery near school every morning before class.",
    estMinutes: 3,
    tags: ["school", "food", "daily-life"],
    body: [
      "学校[がっこう]の 近[ちか]くに パン屋[や]が あります。",
      "毎朝[まいあさ]、そこで パンを 買[か]います。",
      "店[みせ]の 人[ひと]は とても 親切[しんせつ]です。",
      "あんパンが 一番[いちばん] 好[す]きです。",
      "今日[きょう]も 新[あたら]しい パンを 食[た]べました。",
      "明日[あした]も 行[い]きます。"
    ],
    translation: [
      "There is a bakery near my school.",
      "Every morning, I buy bread there.",
      "The shop person is very kind.",
      "Anpan is my favorite.",
      "Today, I also ate a new kind of bread.",
      "I will go again tomorrow."
    ],
    vocab: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "近く", reading: "ちかく", meaning: "nearby" },
      { word: "パン屋", reading: "ぱんや", meaning: "bakery" },
      { word: "毎朝", reading: "まいあさ", meaning: "every morning" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "一番", reading: "いちばん", meaning: "most" },
      { word: "好き", reading: "すき", meaning: "like" },
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "明日", reading: "あした", meaning: "tomorrow" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-33 — 自転車の練習 (Learning to ride a bike)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-33",
    title: "自転車[じてんしゃ]の 練習[れんしゅう]",
    titleReading: "じてんしゃのれんしゅう",
    level: "N5",
    summary: "A child practices riding a bicycle with their father and slowly gets better.",
    estMinutes: 3,
    tags: ["family", "practice", "childhood"],
    body: [
      "先週[せんしゅう]、自転車[じてんしゃ]に 乗[の]る 練習[れんしゅう]を しました。",
      "最初[さいしょ]、怖[こわ]かったです。",
      "父[ちち]が 一緒[いっしょ]に 走[はし]って くれました。",
      "何度[なんど]も 転[ころ]びました。",
      "でも、少[すこ]し ずつ 上手[じょうず]に なりました。",
      "今[いま]は 一人[ひとり]で 乗[の]れます。"
    ],
    translation: [
      "Last week, I practiced riding a bicycle.",
      "At first, it was scary.",
      "My father ran together with me.",
      "I fell many times.",
      "But little by little, I got better.",
      "Now I can ride by myself."
    ],
    vocab: [
      { word: "自転車", reading: "じてんしゃ", meaning: "bicycle" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "最初", reading: "さいしょ", meaning: "first" },
      { word: "怖い", reading: "こわい", meaning: "scary" },
      { word: "父", reading: "ちち", meaning: "father" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "何度", reading: "なんど", meaning: "many times" },
      { word: "転ぶ", reading: "ころぶ", meaning: "to fall" },
      { word: "上手", reading: "じょうず", meaning: "good at" },
      { word: "一人", reading: "ひとり", meaning: "alone" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-34 — 友達とピクニック (Picnic with friends)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-34",
    title: "友達[ともだち]と ピクニック",
    titleReading: "ともだちとぴくにっく",
    level: "N5",
    summary: "Friends bring lunch boxes to the park and enjoy a sunny picnic together.",
    estMinutes: 3,
    tags: ["friends", "park", "outdoor"],
    body: [
      "日曜日[にちようび]、友達[ともだち]と 公園[こうえん]で ピクニックを しました。",
      "お弁当[べんとう]を 持[も]って 行[い]きました。",
      "芝生[しばふ]に 座[すわ]って、話[はな]しました。",
      "天気[てんき]が とても 良[よ]かったです。",
      "鳥[とり]が 上[うえ]を 飛[と]んで いました。",
      "また 来週[らいしゅう]も 行[い]きます。"
    ],
    translation: [
      "On Sunday, I had a picnic with friends at the park.",
      "We brought lunch boxes.",
      "We sat on the grass and talked.",
      "The weather was very good.",
      "Birds were flying above us.",
      "We will go again next week."
    ],
    vocab: [
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "ピクニック", reading: "ぴくにっく", meaning: "picnic" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "お弁当", reading: "おべんとう", meaning: "lunch box" },
      { word: "持つ", reading: "もつ", meaning: "to carry" },
      { word: "芝生", reading: "しばふ", meaning: "lawn" },
      { word: "座る", reading: "すわる", meaning: "to sit" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "鳥", reading: "とり", meaning: "bird" },
      { word: "飛ぶ", reading: "とぶ", meaning: "to fly" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-35 — ペットの鳥 (The pet bird)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-35",
    title: "ペットの 鳥[とり]",
    titleReading: "ぺっとのとり",
    level: "N5",
    summary: "A small pet bird named Pii-chan sings every morning and brightens the home.",
    estMinutes: 3,
    tags: ["pets", "home", "daily-life"],
    body: [
      "私[わたし]の 家[いえ]には 小[ちい]さい 鳥[とり]が います。",
      "名前[なまえ]は「ぴーちゃん」です。",
      "毎朝[まいあさ]、鳥[とり]は 歌[うた]を 歌[うた]います。",
      "元気[げんき]な 鳥[とり]です。",
      "ご飯[はん]の 時[とき]、いっしょに 食[た]べます。",
      "とても 可愛[かわい]いです。"
    ],
    translation: [
      "There is a small bird in my house.",
      "Its name is Pii-chan.",
      "Every morning, the bird sings a song.",
      "It is an energetic bird.",
      "At mealtime, we eat together.",
      "It is very cute."
    ],
    vocab: [
      { word: "ペット", reading: "ぺっと", meaning: "pet" },
      { word: "鳥", reading: "とり", meaning: "bird" },
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "毎朝", reading: "まいあさ", meaning: "every morning" },
      { word: "歌", reading: "うた", meaning: "song" },
      { word: "歌う", reading: "うたう", meaning: "to sing" },
      { word: "元気", reading: "げんき", meaning: "energetic" },
      { word: "時", reading: "とき", meaning: "time" },
      { word: "可愛い", reading: "かわいい", meaning: "cute" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-36 — 英語の勉強 (Studying English)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-36",
    title: "英語[えいご]の 勉強[べんきょう]",
    titleReading: "えいごのべんきょう",
    level: "N5",
    summary: "A student studies English every day and is now able to write a short letter.",
    estMinutes: 3,
    tags: ["study", "language", "school"],
    body: [
      "毎日[まいにち]、英語[えいご]を 勉強[べんきょう]して います。",
      "最初[さいしょ]は 難[むずか]しかったです。",
      "でも、少[すこ]し ずつ 分[わ]かるように なりました。",
      "学校[がっこう]の 先生[せんせい]が 親切[しんせつ]です。",
      "今[いま]、簡単[かんたん]な 英語[えいご]で 手紙[てがみ]が 書[か]けます。",
      "もっと 上手[じょうず]に なりたいです。"
    ],
    translation: [
      "Every day, I am studying English.",
      "At first, it was difficult.",
      "But little by little, I came to understand.",
      "My school teacher is kind.",
      "Now, I can write a short letter in English.",
      "I want to become better."
    ],
    vocab: [
      { word: "英語", reading: "えいご", meaning: "English" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "最初", reading: "さいしょ", meaning: "first" },
      { word: "難しい", reading: "むずかしい", meaning: "difficult" },
      { word: "分かる", reading: "わかる", meaning: "to understand" },
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "簡単", reading: "かんたん", meaning: "simple" },
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "書く", reading: "かく", meaning: "to write" },
      { word: "上手", reading: "じょうず", meaning: "good at" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-37 — 病院に行く (A doctor's visit)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-37",
    title: "病院[びょういん]に 行[い]く",
    titleReading: "びょういんにいく",
    level: "N5",
    summary: "After a headache, a kind doctor gives medicine and the student rests at home.",
    estMinutes: 3,
    tags: ["health", "daily-life", "family"],
    body: [
      "先週[せんしゅう]、頭[あたま]が 痛[いた]かったです。",
      "病院[びょういん]に 行[い]きました。",
      "お医者[いしゃ]さんは とても 親切[しんせつ]でした。",
      "薬[くすり]を もらいました。",
      "家[いえ]で 休[やす]みました。",
      "今[いま]は もう 元気[げんき]です。"
    ],
    translation: [
      "Last week, my head hurt.",
      "I went to the hospital.",
      "The doctor was very kind.",
      "I received medicine.",
      "I rested at home.",
      "Now I am already well."
    ],
    vocab: [
      { word: "病院", reading: "びょういん", meaning: "hospital" },
      { word: "頭", reading: "あたま", meaning: "head" },
      { word: "痛い", reading: "いたい", meaning: "painful" },
      { word: "医者", reading: "いしゃ", meaning: "doctor" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "薬", reading: "くすり", meaning: "medicine" },
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "休む", reading: "やすむ", meaning: "to rest" },
      { word: "元気", reading: "げんき", meaning: "well" },
      { word: "今", reading: "いま", meaning: "now" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-38 — 本を買う (Buying a book)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-38",
    title: "本[ほん]を 買[か]う",
    titleReading: "ほんをかう",
    level: "N5",
    summary: "A relaxing Sunday trip to the bookstore to find a fun Japanese novel.",
    estMinutes: 3,
    tags: ["shopping", "books", "leisure"],
    body: [
      "日曜日[にちようび]、本屋[ほんや]に 行[い]きました。",
      "たくさん 本[ほん]が ありました。",
      "日本[にほん]の 小説[しょうせつ]を 見[み]ました。",
      "一[ひと]つ 買[か]いました。",
      "家[いえ]に 帰[かえ]って、すぐ 読[よ]みました。",
      "とても 面白[おもしろ]かったです。"
    ],
    translation: [
      "On Sunday, I went to the bookstore.",
      "There were many books.",
      "I looked at a Japanese novel.",
      "I bought one.",
      "I went home and read it right away.",
      "It was very interesting."
    ],
    vocab: [
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "本屋", reading: "ほんや", meaning: "bookstore" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "日本", reading: "にほん", meaning: "Japan" },
      { word: "小説", reading: "しょうせつ", meaning: "novel" },
      { word: "見る", reading: "みる", meaning: "to look" },
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "帰る", reading: "かえる", meaning: "to return" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "面白い", reading: "おもしろい", meaning: "interesting" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-39 — コーヒーショップ (The coffee shop)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-39",
    title: "コーヒーショップ",
    titleReading: "こーひーしょっぷ",
    level: "N5",
    summary: "A quiet coffee shop near the station is a favorite place to read every day.",
    estMinutes: 3,
    tags: ["daily-life", "cafe", "leisure"],
    body: [
      "駅[えき]の 前[まえ]に コーヒーショップが あります。",
      "毎日[まいにち]、コーヒーを 飲[の]みに 行[い]きます。",
      "店[みせ]は とても 静[しず]かです。",
      "そこで 本[ほん]を 読[よ]みます。",
      "コーヒーは いつも 美味[おい]しいです。",
      "好[す]きな 場所[ばしょ]です。"
    ],
    translation: [
      "There is a coffee shop in front of the station.",
      "Every day, I go to drink coffee.",
      "The shop is very quiet.",
      "I read a book there.",
      "The coffee is always delicious.",
      "It is my favorite place."
    ],
    vocab: [
      { word: "コーヒーショップ", reading: "こーひーしょっぷ", meaning: "coffee shop" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "前", reading: "まえ", meaning: "front" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "好き", reading: "すき", meaning: "like" },
      { word: "場所", reading: "ばしょ", meaning: "place" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-40 — 引っ越し (Moving to a new apartment)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-40",
    title: "新[あたら]しい アパートへの 引越[ひっこ]し",
    titleReading: "あたらしいあぱーとへのひっこし",
    level: "N5",
    summary: "Moving into a bright new apartment with a big park nearby brings new beginnings.",
    estMinutes: 3,
    tags: ["home", "moving", "life"],
    body: [
      "先月[せんげつ]、新[あたら]しい アパートに 引越[ひっこ]しました。",
      "新[あたら]しい 部屋[へや]は 広[ひろ]いです。",
      "窓[まど]から 太陽[たいよう]が 見[み]えます。",
      "近[ちか]くに 大[おお]きい 公園[こうえん]が あります。",
      "隣[となり]の 人[ひと]も 親切[しんせつ]です。",
      "新[あたら]しい 生活[せいかつ]が 楽[たの]しみです。"
    ],
    translation: [
      "Last month, I moved to a new apartment.",
      "The new room is spacious.",
      "I can see the sun from the window.",
      "There is a big park nearby.",
      "The next-door neighbor is also kind.",
      "I am looking forward to my new life."
    ],
    vocab: [
      { word: "引越し", reading: "ひっこし", meaning: "moving" },
      { word: "アパート", reading: "あぱーと", meaning: "apartment" },
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "広い", reading: "ひろい", meaning: "spacious" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "太陽", reading: "たいよう", meaning: "sun" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "隣", reading: "となり", meaning: "next door" },
      { word: "生活", reading: "せいかつ", meaning: "life" },
      { word: "楽しみ", reading: "たのしみ", meaning: "looking forward to" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-41 — 夏休みの宿題 (Summer homework)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-41",
    title: "夏休[なつやす]みの 宿題[しゅくだい]",
    titleReading: "なつやすみのしゅくだい",
    level: "N5",
    summary: "A student works steadily through summer homework with help from friends.",
    estMinutes: 3,
    tags: ["school", "study", "summer"],
    body: [
      "夏休[なつやす]みに 宿題[しゅくだい]が たくさん あります。",
      "毎日[まいにち]、本[ほん]を 読[よ]んで います。",
      "日記[にっき]を 書[か]いて います。",
      "算数[さんすう]も 勉強[べんきょう]して います。",
      "時々[ときどき]、友達[ともだち]と 一緒[いっしょ]に します。",
      "来週[らいしゅう]で 全部[ぜんぶ] 終[お]わります。"
    ],
    translation: [
      "I have a lot of homework for summer vacation.",
      "Every day, I am reading books.",
      "I am writing a diary.",
      "I am also studying arithmetic.",
      "Sometimes, I do it together with friends.",
      "Everything will finish by next week."
    ],
    vocab: [
      { word: "夏休み", reading: "なつやすみ", meaning: "summer vacation" },
      { word: "宿題", reading: "しゅくだい", meaning: "homework" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "日記", reading: "にっき", meaning: "diary" },
      { word: "書く", reading: "かく", meaning: "to write" },
      { word: "算数", reading: "さんすう", meaning: "arithmetic" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "時々", reading: "ときどき", meaning: "sometimes" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-42 — いとこの訪問 (A visit from cousin)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-42",
    title: "いとこの 訪問[ほうもん]",
    titleReading: "いとこのほうもん",
    level: "N5",
    summary: "A cousin who lives in Tokyo visits and shares a fun evening of dinner and photos.",
    estMinutes: 3,
    tags: ["family", "visit", "tokyo"],
    body: [
      "先週[せんしゅう]、いとこが 私[わたし]の 家[いえ]に 来[き]ました。",
      "いとこは 東京[とうきょう]に 住[す]んで います。",
      "一緒[いっしょ]に ご飯[はん]を 食[た]べました。",
      "楽[たの]しい 話[はなし]を しました。",
      "写真[しゃしん]を たくさん 撮[と]りました。",
      "また 会[あ]いたいです。"
    ],
    translation: [
      "Last week, my cousin came to my house.",
      "My cousin lives in Tokyo.",
      "We ate a meal together.",
      "We had a fun talk.",
      "We took many photos.",
      "I want to meet again."
    ],
    vocab: [
      { word: "いとこ", reading: "いとこ", meaning: "cousin" },
      { word: "訪問", reading: "ほうもん", meaning: "visit" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" },
      { word: "私", reading: "わたし", meaning: "I" },
      { word: "家", reading: "いえ", meaning: "house" },
      { word: "東京", reading: "とうきょう", meaning: "Tokyo" },
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "ご飯", reading: "ごはん", meaning: "meal" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" },
      { word: "写真", reading: "しゃしん", meaning: "photo" },
      { word: "会う", reading: "あう", meaning: "to meet" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-43 — 車を洗う (Washing the car)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-43",
    title: "車[くるま]を 洗[あら]う",
    titleReading: "くるまをあらう",
    level: "N5",
    summary: "A father and child wash the family car together on a sunny Sunday morning.",
    estMinutes: 3,
    tags: ["family", "car", "chore"],
    body: [
      "日曜日[にちようび]の 朝[あさ]、父[ちち]と 一緒[いっしょ]に 車[くるま]を 洗[あら]いました。",
      "水[みず]を かけて、せっけんを 使[つか]いました。",
      "車[くるま]が とても きれいに なりました。",
      "父[ちち]が「よく できた」と 言[い]いました。",
      "私[わたし]は とても 嬉[うれ]しかったです。",
      "また 来月[らいげつ]も 洗[あら]います。"
    ],
    translation: [
      "On Sunday morning, I washed the car with my father.",
      "We poured water and used soap.",
      "The car became very clean.",
      "My father said, \"You did well.\"",
      "I was very happy.",
      "I will wash it again next month."
    ],
    vocab: [
      { word: "車", reading: "くるま", meaning: "car" },
      { word: "洗う", reading: "あらう", meaning: "to wash" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "朝", reading: "あさ", meaning: "morning" },
      { word: "父", reading: "ちち", meaning: "father" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "水", reading: "みず", meaning: "water" },
      { word: "使う", reading: "つかう", meaning: "to use" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" },
      { word: "来月", reading: "らいげつ", meaning: "next month" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-44 — 川の散歩 (The river walk)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-44",
    title: "川[かわ]の 散歩[さんぽ]",
    titleReading: "かわのさんぽ",
    level: "N5",
    summary: "An evening walk by the river brings fresh air, birds, and a friendly dog.",
    estMinutes: 3,
    tags: ["nature", "walk", "evening"],
    body: [
      "毎夕方[まいゆうがた]、川[かわ]の 近[ちか]くを 散歩[さんぽ]します。",
      "水[みず]が きれいに 流[なが]れて います。",
      "鳥[とり]が 遊[あそ]んで います。",
      "風[かぜ]が 気持[きも]ちいいです。",
      "時々[ときどき]、犬[いぬ]と 会[あ]います。",
      "散歩[さんぽ]の あと、元気[げんき]に なります。"
    ],
    translation: [
      "Every evening, I walk near the river.",
      "The water flows cleanly.",
      "Birds are playing.",
      "The wind feels pleasant.",
      "Sometimes, I meet a dog.",
      "After the walk, I feel energetic."
    ],
    vocab: [
      { word: "川", reading: "かわ", meaning: "river" },
      { word: "散歩", reading: "さんぽ", meaning: "walk" },
      { word: "毎夕方", reading: "まいゆうがた", meaning: "every evening" },
      { word: "水", reading: "みず", meaning: "water" },
      { word: "流れる", reading: "ながれる", meaning: "to flow" },
      { word: "鳥", reading: "とり", meaning: "bird" },
      { word: "遊ぶ", reading: "あそぶ", meaning: "to play" },
      { word: "風", reading: "かぜ", meaning: "wind" },
      { word: "気持ちいい", reading: "きもちいい", meaning: "pleasant" },
      { word: "時々", reading: "ときどき", meaning: "sometimes" },
      { word: "犬", reading: "いぬ", meaning: "dog" },
      { word: "元気", reading: "げんき", meaning: "energetic" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n5-45 — 親切な人 (A kind stranger)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-45",
    title: "親切[しんせつ]な 人[ひと]",
    titleReading: "しんせつなひと",
    level: "N5",
    summary: "Lost at the station, a kind stranger helps find the way and inspires kindness.",
    estMinutes: 3,
    tags: ["kindness", "station", "daily-life"],
    body: [
      "先週[せんしゅう]、駅[えき]で 迷[まよ]いました。",
      "道[みち]が 分[わ]かりませんでした。",
      "ある 人[ひと]が 助[たす]けて くれました。",
      "一緒[いっしょ]に 駅[えき]まで 歩[ある]きました。",
      "とても 親切[しんせつ]な 人[ひと]でした。",
      "私[わたし]も 誰[だれ]かを 助[たす]けたいです。"
    ],
    translation: [
      "Last week, I got lost at the station.",
      "I did not know the way.",
      "A certain person helped me.",
      "We walked together to the station.",
      "It was a very kind person.",
      "I also want to help someone."
    ],
    vocab: [
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "人", reading: "ひと", meaning: "person" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "迷う", reading: "まよう", meaning: "to get lost" },
      { word: "道", reading: "みち", meaning: "way" },
      { word: "分かる", reading: "わかる", meaning: "to understand" },
      { word: "助ける", reading: "たすける", meaning: "to help" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "私", reading: "わたし", meaning: "I" },
      { word: "誰", reading: "だれ", meaning: "someone" }
    ]
  }
];
