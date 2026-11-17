import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const storiesOriginal: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N5 — 朝の生活 (Morning routine)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-01",
    title: "朝[あさ]の生活[せいかつ]",
    titleReading: "あさのせいかつ",
    level: "N5",
    summary: "Nikki describes her simple morning routine from waking up to leaving the house.",
    estMinutes: 2,
    tags: ["slice of life", "morning"],
    body: [
      "毎朝[まいあさ]六時[ろくじ]に起[お]きます。",
      "最初[さいしょ]に、顔[かお]を洗[あら]います。そして、歯[は]を磨[みが]きます。",
      "朝[あさ]ご飯[はん]はパンとコーヒーです。パンが好[す]きです。",
      "八時[はちじ]に家[いえ]を出[で]ます。駅[えき]まで歩[ある]いて行[い]きます。",
      "毎日[まいにち]元気[げんき]です。いい一日[いちにち]になります。"
    ],
    translation: [
      "Every morning I wake up at six o'clock.",
      "First, I wash my face. Then, I brush my teeth.",
      "Breakfast is bread and coffee. I like bread.",
      "I leave the house at eight. I walk to the station.",
      "I'm energetic every day. It will be a good day."
    ],
    vocab: [
      { word: "朝", reading: "あさ", meaning: "morning" },
      { word: "生活", reading: "せいかつ", meaning: "daily life" },
      { word: "毎朝", reading: "まいあさ", meaning: "every morning" },
      { word: "起きる", reading: "おきる", meaning: "to wake up" },
      { word: "顔", reading: "かお", meaning: "face" },
      { word: "洗う", reading: "あらう", meaning: "to wash" },
      { word: "歯", reading: "は", meaning: "tooth" },
      { word: "磨く", reading: "みがく", meaning: "to brush" },
      { word: "朝ご飯", reading: "あさごはん", meaning: "breakfast" },
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "元気", reading: "げんき", meaning: "energetic; healthy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 新しい友達 (Meeting a new friend)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-02",
    title: "新[あたら]しい友達[ともだち]",
    titleReading: "あたらしいともだち",
    level: "N5",
    summary: "Nikki meets a new friend named Haru at a small cafe near her house.",
    estMinutes: 3,
    tags: ["friendship", "slice of life"],
    body: [
      "日曜日[にちようび]に、カフェへ行[い]きました。",
      "カフェで女[おんな]の人[ひと]がいました。名前[なまえ]はハルです。",
      "ハルは東京[とうきょう]から来[き]ました。日本[にほん]の写真[しゃしん]を見[み]せました。",
      "二人[ふたり]でコーヒーを飲[の]みました。とても楽[たの]しかったです。",
      "来週[らいしゅう]、一緒[いっしょ]に公園[こうえん]へ行[い]きます。",
      "新[あたら]しい友達[ともだち]ができました。嬉[うれ]しいです。"
    ],
    translation: [
      "On Sunday, I went to a cafe.",
      "At the cafe there was a woman. Her name is Haru.",
      "Haru came from Tokyo. She showed me photos of Japan.",
      "The two of us drank coffee together. It was very fun.",
      "Next week, we will go to the park together.",
      "I made a new friend. I'm happy."
    ],
    vocab: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "行く", reading: "いく", meaning: "to go" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "東京", reading: "とうきょう", meaning: "Tokyo" },
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "写真", reading: "しゃしん", meaning: "photograph" },
      { word: "見せる", reading: "みせる", meaning: "to show" },
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" },
      { word: "来週", reading: "らいしゅう", meaning: "next week" },
      { word: "一緒", reading: "いっしょ", meaning: "together" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — コンビニへの買い物 (Trip to the convenience store)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-03",
    title: "コンビニへの買[か]い物[もの]",
    titleReading: "こんびにえのかいもの",
    level: "N5",
    summary: "Nikki walks to the convenience store to buy a few small things for the evening.",
    estMinutes: 2,
    tags: ["slice of life", "shopping"],
    body: [
      "夜[よる]七時[しちじ]に、お腹[なか]が空[す]きました。",
      "近[ちか]くのコンビニへ行[い]きました。歩[ある]いて三分[さんぷん]です。",
      "おにぎりとお茶[ちゃ]を買[か]いました。全部[ぜんぶ]で三百円[さんびゃくえん]でした。",
      "店[みせ]の人[ひと]はとても親切[しんせつ]でした。「ありがとうございます」と言[い]いました。",
      "家[いえ]に帰[かえ]って、おにぎりを食[た]べました。美味[おい]しかったです。"
    ],
    translation: [
      "At seven in the evening, I got hungry.",
      "I went to a nearby convenience store. It is a three-minute walk.",
      "I bought a rice ball and tea. Altogether it was 300 yen.",
      "The shop staff was very kind. They said, 'Thank you very much.'",
      "I went home and ate the rice ball. It was delicious."
    ],
    vocab: [
      { word: "買い物", reading: "かいもの", meaning: "shopping" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "七時", reading: "しちじ", meaning: "seven o'clock" },
      { word: "お腹", reading: "おなか", meaning: "stomach" },
      { word: "空く", reading: "すく", meaning: "to become empty (stomach)" },
      { word: "近く", reading: "ちかく", meaning: "nearby" },
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "帰る", reading: "かえる", meaning: "to return" },
      { word: "食べる", reading: "たべる", meaning: "to eat" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 学校の一日 (A day at school)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-04",
    title: "学校[がっこう]の一日[いちにち]",
    titleReading: "がっこうのいちにち",
    level: "N5",
    summary: "Nikki describes a typical day as a high school student, from morning classes to the library.",
    estMinutes: 3,
    tags: ["school", "slice of life"],
    body: [
      "私[わたし]は高校生[こうこうせい]です。毎日[まいにち]学校[がっこう]へ行[い]きます。",
      "八時[はちじ]に授業[じゅぎょう]が始[はじ]まります。朝[あさ]は日本語[にほんご]のクラスです。",
      "昼[ひる]ご飯[はん]は友達[ともだち]と一緒[いっしょ]に食[た]べます。楽[たの]しい時間[じかん]です。",
      "午後[ごご]に数学[すうがく]があります。ちょっと難[むずか]しいですが、頑張[がんば]ります。",
      "三時[さんじ]に授業[じゅぎょう]が終[お]わります。それから、図書館[としょかん]で本[ほん]を読[よ]みます。",
      "五時[ごじ]に家[いえ]に帰[かえ]ります。学校[がっこう]の一日[いちにち]は長[なが]いですが、楽[たの]しいです。"
    ],
    translation: [
      "I am a high school student. I go to school every day.",
      "Classes start at eight. In the morning I have Japanese class.",
      "I eat lunch together with my friends. It is a fun time.",
      "In the afternoon I have math. It is a little difficult, but I do my best.",
      "Classes end at three. After that, I read a book in the library.",
      "I return home at five. A school day is long, but fun."
    ],
    vocab: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "一日", reading: "いちにち", meaning: "one day" },
      { word: "高校生", reading: "こうこうせい", meaning: "high school student" },
      { word: "授業", reading: "じゅぎょう", meaning: "class; lesson" },
      { word: "始まる", reading: "はじまる", meaning: "to begin" },
      { word: "日本語", reading: "にほんご", meaning: "Japanese language" },
      { word: "昼ご飯", reading: "ひるごはん", meaning: "lunch" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" },
      { word: "数学", reading: "すうがく", meaning: "mathematics" },
      { word: "難しい", reading: "むずかしい", meaning: "difficult" },
      { word: "頑張る", reading: "がんばる", meaning: "to do one's best" },
      { word: "終わる", reading: "おわる", meaning: "to end" },
      { word: "図書館", reading: "としょかん", meaning: "library" },
      { word: "帰る", reading: "かえる", meaning: "to return" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 晩ご飯を作る (Cooking dinner)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-05",
    title: "晩[ばん]ご飯[はん]を作[つく]る",
    titleReading: "ばんごはんをつくる",
    level: "N5",
    summary: "Nikki cooks a simple dinner of curry rice and shares it with her roommate.",
    estMinutes: 2,
    tags: ["cooking", "slice of life"],
    body: [
      "今日[きょう]の晩[ばん]ご飯[はん]はカレーライスです。",
      "最初[さいしょ]に、野菜[やさい]を切[き]ります。たまねぎとにんじんです。",
      "次[つぎ]に、肉[にく]を焼[や]きます。いい匂[にお]いがします。",
      "そして、水[みず]とルーを入[い]れます。三十分[さんじゅっぷん]待[ま]ちます。",
      "ルームメイトのミラと一緒[いっしょ]に食[た]べました。「美味[おい]しい！」と言[い]いました。",
      "料理[りょうり]は楽[たの]しいです。明日[あした]も作[つく]りたいです。"
    ],
    translation: [
      "Tonight's dinner is curry rice.",
      "First, I cut the vegetables. Onion and carrot.",
      "Next, I grill the meat. It smells good.",
      "Then, I add water and curry roux. I wait thirty minutes.",
      "I ate together with my roommate Mira. She said, 'Delicious!'",
      "Cooking is fun. I want to make it again tomorrow."
    ],
    vocab: [
      { word: "晩ご飯", reading: "ばんごはん", meaning: "dinner" },
      { word: "作る", reading: "つくる", meaning: "to make; to cook" },
      { word: "今日", reading: "きょう", meaning: "today" },
      { word: "野菜", reading: "やさい", meaning: "vegetable" },
      { word: "切る", reading: "きる", meaning: "to cut" },
      { word: "肉", reading: "にく", meaning: "meat" },
      { word: "焼く", reading: "やく", meaning: "to grill; to bake" },
      { word: "匂い", reading: "におい", meaning: "smell" },
      { word: "水", reading: "みず", meaning: "water" },
      { word: "入れる", reading: "いれる", meaning: "to put in" },
      { word: "待つ", reading: "まつ", meaning: "to wait" },
      { word: "料理", reading: "りょうり", meaning: "cooking; dish" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 公園で遊ぶ (A visit to the park)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-06",
    title: "公園[こうえん]で遊[あそ]ぶ",
    titleReading: "こうえんであそぶ",
    level: "N5",
    summary: "Nikki spends a calm afternoon at the park watching children play and reading a book.",
    estMinutes: 2,
    tags: ["slice of life", "nature"],
    body: [
      "土曜日[どようび]の午後[ごご]、公園[こうえん]へ行[い]きました。",
      "公園[こうえん]に子供[こども]がたくさんいました。犬[いぬ]もいました。",
      "子供[こども]たちは元気[げんき]に遊[あそ]んでいました。笑顔[えがお]がとても可愛[かわい]かったです。",
      "私[わたし]はベンチに座[すわ]って、本[ほん]を読[よ]みました。風[かぜ]が気持[きも]ちよかったです。",
      "五時[ごじ]に家[いえ]に帰[かえ]りました。また来週[らいしゅう]来[き]たいです。"
    ],
    translation: [
      "On Saturday afternoon, I went to the park.",
      "There were many children in the park. There were dogs too.",
      "The children were playing energetically. Their smiling faces were very cute.",
      "I sat on a bench and read a book. The wind felt nice.",
      "I returned home at five. I want to come again next week."
    ],
    vocab: [
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "遊ぶ", reading: "あそぶ", meaning: "to play" },
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "午後", reading: "ごご", meaning: "afternoon" },
      { word: "子供", reading: "こども", meaning: "child" },
      { word: "犬", reading: "いぬ", meaning: "dog" },
      { word: "元気", reading: "げんき", meaning: "energetic" },
      { word: "笑顔", reading: "えがお", meaning: "smiling face" },
      { word: "可愛い", reading: "かわいい", meaning: "cute" },
      { word: "座る", reading: "すわる", meaning: "to sit" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "風", reading: "かぜ", meaning: "wind" },
      { word: "気持ち", reading: "きもち", meaning: "feeling" },
      { word: "帰る", reading: "かえる", meaning: "to return" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 雨の日 (A rainy day)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-07",
    title: "雨[あめ]の日[ひ]",
    titleReading: "あめのひ",
    level: "N4",
    summary: "Nikki spends a quiet rainy day indoors, drinking tea and listening to the rain while thinking about her week.",
    estMinutes: 4,
    tags: ["slice of life", "weather"],
    body: [
      "今日[きょう]は雨[あめ]が降[ふ]っています。空[そら]は灰色[はいいろ]です。",
      "朝[あさ]からずっと家[いえ]にいます。窓[まど]のそばに座[すわ]っています。",
      "雨[あめ]の音[おと]を聞[き]きながら、温[あたた]かいお茶[ちゃ]を飲[の]んでいます。",
      "昨日[きのう]はとても忙[いそが]しかったです。だから、今日[きょう]はゆっくり休[やす]んでいます。",
      "本[ほん]を読[よ]もうと思[おも]いましたが、ちょっと眠[ねむ]くなりました。",
      "夕方[ゆうがた]になったら、雨[あめ]が止[や]むかもしれません。",
      "雨[あめ]の日[ひ]も悪[わる]くないと思[おも]います。静[しず]かで落[お]ち着[つ]きます。"
    ],
    translation: [
      "Today it is raining. The sky is gray.",
      "I have been at home all morning. I am sitting by the window.",
      "While listening to the sound of the rain, I am drinking warm tea.",
      "Yesterday was very busy. So today I am resting slowly.",
      "I thought I would read a book, but I got a little sleepy.",
      "When evening comes, the rain might stop.",
      "I think rainy days are not bad either. It is quiet and calming."
    ],
    vocab: [
      { word: "雨", reading: "あめ", meaning: "rain" },
      { word: "降る", reading: "ふる", meaning: "to fall (rain)" },
      { word: "空", reading: "そら", meaning: "sky" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "音", reading: "おと", meaning: "sound" },
      { word: "聞く", reading: "きく", meaning: "to listen" },
      { word: "温かい", reading: "あたたかい", meaning: "warm" },
      { word: "昨日", reading: "きのう", meaning: "yesterday" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" },
      { word: "休む", reading: "やすむ", meaning: "to rest" },
      { word: "眠い", reading: "ねむい", meaning: "sleepy" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "止む", reading: "やむ", meaning: "to stop (rain)" },
      { word: "静か", reading: "しずか", meaning: "quiet" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 誕生日パーティー (A birthday party)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-08",
    title: "誕生日[たんじょうび]パーティー",
    titleReading: "たんじょうびぱーてぃー",
    level: "N4",
    summary: "Nikki throws a small birthday party for her friend Leo and gives him a handmade gift.",
    estMinutes: 4,
    tags: ["celebration", "friendship"],
    body: [
      "今日[きょう]は友達[ともだち]のレオの誕生日[たんじょうび]です。",
      "私[わたし]はレオにプレゼントをあげました。手作[てづく]りのマフラーです。",
      "夜[よる]七時[しちじ]に、みんなで家[いえ]に集[あつ]まりました。",
      "私[わたし]はケーキを焼[や]きました。苺[いちご]がのっています。",
      "レオはケーキを見[み]て、とても驚[おどろ]きました。",
      "みんなで「誕生日[たんじょうび]おめでとう！」と歌[うた]いました。",
      "レオは笑[わら]って、「ありがとう」と言[い]いました。嬉[うれ]しそうでした。",
      "いい夜[よる]でした。来年[らいねん]も一緒[いっしょ]にお祝[いわ]いしたいです。"
    ],
    translation: [
      "Today is my friend Leo's birthday.",
      "I gave Leo a present. It is a handmade scarf.",
      "At seven in the evening, everyone gathered at my house.",
      "I baked a cake. Strawberries are on top.",
      "When Leo saw the cake, he was very surprised.",
      "Everyone sang, 'Happy Birthday!'",
      "Leo smiled and said, 'Thank you.' He looked happy.",
      "It was a good night. I want to celebrate together again next year."
    ],
    vocab: [
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "あげる", reading: "あげる", meaning: "to give" },
      { word: "手作り", reading: "てづくり", meaning: "handmade" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "集まる", reading: "あつまる", meaning: "to gather" },
      { word: "焼く", reading: "やく", meaning: "to bake" },
      { word: "苺", reading: "いちご", meaning: "strawberry" },
      { word: "驚く", reading: "おどろく", meaning: "to be surprised" },
      { word: "歌う", reading: "うたう", meaning: "to sing" },
      { word: "笑う", reading: "わらう", meaning: "to laugh; to smile" },
      { word: "来年", reading: "らいねん", meaning: "next year" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "お祝い", reading: "おいわい", meaning: "celebration" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 電車の旅 (A train journey)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-09",
    title: "電車[でんしゃ]の旅[たび]",
    titleReading: "でんしゃのたび",
    level: "N4",
    summary: "Nikki takes a long train ride to a small seaside town and enjoys the views along the way.",
    estMinutes: 5,
    tags: ["travel", "slice of life"],
    body: [
      "先週[せんしゅう]、私[わたし]は電車[でんしゃ]で小[ちい]さな町[まち]へ行[い]きました。",
      "駅[えき]で切符[きっぷ]を買[か]いました。窓側[まどがわ]の席[せき]が取[と]れました。",
      "電車[でんしゃ]が出[で]ると、すぐに窓[まど]の外[そと]の景色[けしき]が変[か]わりました。",
      "しばらくすると、海[うみ]が見[み]えてきました。とても綺麗[きれい]でした。",
      "隣[となり]に座[すわ]っていたお婆[ばあ]さんと話[はな]しました。親切[しんせつ]な人[ひと]でした。",
      "お婆[ばあ]さんは、この町[まち]で生[う]まれたそうです。",
      "三時間後[さんじかんご]に、町[まち]に着[つ]きました。駅[えき]の外[そと]は涼[すず]しかったです。",
      "この旅[たび]は一生[いっしょう]の思[おも]い出[で]になると思[おも]います。"
    ],
    translation: [
      "Last week, I went by train to a small town.",
      "I bought a ticket at the station. I was able to get a window seat.",
      "When the train departed, the scenery outside changed right away.",
      "After a while, the sea came into view. It was very beautiful.",
      "I talked with an old woman sitting next to me. She was a kind person.",
      "I heard that she was born in this town.",
      "Three hours later, I arrived at the town. Outside the station it was cool.",
      "I think this trip will become a lifelong memory."
    ],
    vocab: [
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "旅", reading: "たび", meaning: "journey; trip" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "切符", reading: "きっぷ", meaning: "ticket" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "席", reading: "せき", meaning: "seat" },
      { word: "出る", reading: "でる", meaning: "to depart; to leave" },
      { word: "景色", reading: "けしき", meaning: "scenery" },
      { word: "海", reading: "うみ", meaning: "sea" },
      { word: "綺麗", reading: "きれい", meaning: "beautiful; clean" },
      { word: "隣", reading: "となり", meaning: "next to" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "着く", reading: "つく", meaning: "to arrive" },
      { word: "思い出", reading: "おもいで", meaning: "memory" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 日本語を勉強する (Learning Japanese)
  // ───────────────────────────────────────────────────────────
  {
    id: "s-10",
    title: "日本語[にほんご]を勉強[べんきょう]する",
    titleReading: "にほんごをべんきょうする",
    level: "N4",
    summary: "Nikki helps her friend Emma study Japanese, and they discover that learning together is more fun.",
    estMinutes: 4,
    tags: ["learning", "friendship"],
    body: [
      "私[わたし]の友達[ともだち]エマは、日本語[にほんご]を勉強[べんきょう]しています。",
      "エマは漢字[かんじ]が難[むずか]しいと言[い]いました。",
      "私[わたし]はエマに、簡単[かんたん]な漢字[かんじ]から始[はじ]めることを教[おし]えました。",
      "一緒[いっしょ]に、毎日[まいにち]三[みっ]つずつ漢字[かんじ]を覚[おぼ]えることにしました。",
      "一週間後[いっしゅうかんご]、エマは二十個[にじゅっこ]の漢字[かんじ]が読[よ]めるようになりました。",
      "エマはとても嬉[うれ]しそうでした。「日本語[にほんご]がもっと好[す]きになった」と言[い]いました。",
      "勉強[べんきょう]は一人[ひとり]ですると大変[たいへん]ですが、一緒[いっしょ]だと楽[たの]しいです。",
      "私[わたし]たちはこれからも頑張[がんば]ります。"
    ],
    translation: [
      "My friend Emma is studying Japanese.",
      "Emma said that kanji is difficult.",
      "I taught Emma to start with simple kanji.",
      "Together, we decided to memorize three kanji each day.",
      "After one week, Emma became able to read twenty kanji.",
      "Emma looked very happy. She said, 'I've come to like Japanese more.'",
      "Studying alone is hard, but together it is fun.",
      "We will keep doing our best from now on."
    ],
    vocab: [
      { word: "日本語", reading: "にほんご", meaning: "Japanese language" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "漢字", reading: "かんじ", meaning: "kanji" },
      { word: "難しい", reading: "むずかしい", meaning: "difficult" },
      { word: "簡単", reading: "かんたん", meaning: "simple; easy" },
      { word: "始める", reading: "はじめる", meaning: "to begin" },
      { word: "教える", reading: "おしえる", meaning: "to teach" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "覚える", reading: "おぼえる", meaning: "to memorize" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy; glad" },
      { word: "頑張る", reading: "がんばる", meaning: "to do one's best" }
    ]
  }
];
