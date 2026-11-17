import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN5A: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N5 — 朝の時間 (Morning routine)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-01",
    title: "朝[あさ]の時間[じかん]",
    titleReading: "あさのじかん",
    level: "N5",
    summary: "Nikki walks through her calm morning routine, from waking up to leaving for school.",
    estMinutes: 2,
    tags: ["slice of life", "morning"],
    body: [
      "毎朝[まいあさ]六時[ろくじ]に起[お]きます。",
      "最初[さいしょ]に、窓[まど]を開[あ]けます。きれいな空[そら]を見[み]ます。",
      "顔[かお]を洗[あら]って、歯[は]を磨[みが]きます。それから、お茶[ちゃ]を飲[の]みます。",
      "朝[あさ]ご飯[はん]はご飯[はん]と卵[たまご]です。美味[おい]しいです。",
      "七時半[しちじはん]に家[いえ]を出[で]ます。駅[えき]まで歩[ある]きます。",
      "今日[きょう]もいい一日[いちにち]になります。"
    ],
    translation: [
      "Every morning I wake up at six o'clock.",
      "First, I open the window. I look at the beautiful sky.",
      "I wash my face and brush my teeth. Then I drink tea.",
      "Breakfast is rice and egg. It is delicious.",
      "I leave the house at seven thirty. I walk to the station.",
      "Today too will be a good day."
    ],
    vocab: [
      { word: "朝", reading: "あさ", meaning: "morning" },
      { word: "毎朝", reading: "まいあさ", meaning: "every morning" },
      { word: "起きる", reading: "おきる", meaning: "to wake up" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "開ける", reading: "あける", meaning: "to open" },
      { word: "顔", reading: "かお", meaning: "face" },
      { word: "洗う", reading: "あらう", meaning: "to wash" },
      { word: "歯", reading: "は", meaning: "tooth" },
      { word: "磨く", reading: "みがく", meaning: "to brush" },
      { word: "朝ご飯", reading: "あさごはん", meaning: "breakfast" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "歩く", reading: "あるく", meaning: "to walk" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 学校の昼ご飯 (School lunch)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-02",
    title: "学校[がっこう]の昼[ひる]ご飯[はん]",
    titleReading: "がっこうのひるごはん",
    level: "N5",
    summary: "Nikki has curry for school lunch and chats with her friend Mira at the table.",
    estMinutes: 2,
    tags: ["school", "food"],
    body: [
      "今日[きょう]の昼[ひる]ご飯[はん]は学校[がっこう]で食[た]べます。",
      "メニューはカレーとサラダです。私[わたし]はカレーが好[す]きです。",
      "友達[ともだち]のミラと一緒[いっしょ]に食[た]べました。ミラはパンを食[た]べました。",
      "「美味[おい]しい？」とミラに聞[き]きました。「はい、とても」とミラは答[こた]えました。",
      "食[た]べた後[あと]で、牛乳[ぎゅうにゅう]を飲[の]みました。",
      "学校[がっこう]の昼[ひる]ご飯[はん]はいつも楽[たの]しいです。"
    ],
    translation: [
      "Today I eat lunch at school.",
      "The menu is curry and salad. I like curry.",
      "I ate together with my friend Mira. Mira ate bread.",
      "I asked Mira, 'Is it delicious?' 'Yes, very,' Mira answered.",
      "After eating, I drank milk.",
      "School lunch is always fun."
    ],
    vocab: [
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "昼ご飯", reading: "ひるごはん", meaning: "lunch" },
      { word: "食べる", reading: "たべる", meaning: "to eat" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "聞く", reading: "きく", meaning: "to ask; to listen" },
      { word: "答える", reading: "こたえる", meaning: "to answer" },
      { word: "牛乳", reading: "ぎゅうにゅう", meaning: "milk" },
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 迷子の猫 (A lost cat)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-03",
    title: "迷子[まいご]の猫[ねこ]",
    titleReading: "まいごのねこ",
    level: "N5",
    summary: "Nikki finds a small, cold cat outside her house and helps it find its owner.",
    estMinutes: 3,
    tags: ["animals", "kindness"],
    body: [
      "夜[よる]、家[いえ]の前[まえ]に小[ちい]さい猫[ねこ]がいました。",
      "猫[ねこ]はとても寒[さむ]そうでした。名前[なまえ]がありませんでした。",
      "私[わたし]は猫[ねこ]にミルクをあげました。猫[ねこ]は喜[よろこ]びました。",
      "「どこから来[き]たの？」と聞[き]きました。猫[ねこ]はニャーと鳴[な]きました。",
      "次[つぎ]の日[ひ]、近所[きんじょ]の人[ひと]に聞[き]きました。「この猫[ねこ]を知[し]っていますか？」",
      "猫[ねこ]の飼[か]い主[ぬし]が見[み]つかりました。嬉[うれ]しかったです。"
    ],
    translation: [
      "At night, there was a small cat in front of my house.",
      "The cat seemed very cold. It did not have a name.",
      "I gave the cat milk. The cat was happy.",
      "I asked, 'Where did you come from?' The cat meowed, 'Meow.'",
      "The next day, I asked a neighbor, 'Do you know this cat?'",
      "The cat's owner was found. I was glad."
    ],
    vocab: [
      { word: "迷子", reading: "まいご", meaning: "lost one (child or pet)" },
      { word: "猫", reading: "ねこ", meaning: "cat" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "寒い", reading: "さむい", meaning: "cold (weather)" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "喜ぶ", reading: "よろこぶ", meaning: "to be glad" },
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "鳴く", reading: "なく", meaning: "(animal) to cry" },
      { word: "近所", reading: "きんじょ", meaning: "neighborhood" },
      { word: "飼い主", reading: "かいぬし", meaning: "pet owner" },
      { word: "嬉しい", reading: "うれしい", meaning: "glad" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 雨の日の散歩 (Rainy day walk)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-04",
    title: "雨[あめ]の日[ひ]の散歩[さんぽ]",
    titleReading: "あめのひのさんぽ",
    level: "N5",
    summary: "Nikki takes a quiet walk under a red umbrella and finds calm in the rain.",
    estMinutes: 2,
    tags: ["weather", "slice of life"],
    body: [
      "今日[きょう]は雨[あめ]が降[ふ]っています。でも、散歩[さんぽ]に行[い]きます。",
      "赤[あか]い傘[かさ]をさして、ゆっくり歩[ある]きます。",
      "公園[こうえん]の木[き]がきれいです。雨[あめ]に濡[ぬ]れています。",
      "静[しず]かです。雨[あめ]の音[おと]だけが聞[き]こえます。",
      "家[いえ]に帰[かえ]って、温[あたた]かいお茶[ちゃ]を飲[の]みました。",
      "雨[あめ]の日[ひ]も悪[わる]くないです。"
    ],
    translation: [
      "Today it is raining. But I will go for a walk.",
      "I open a red umbrella and walk slowly.",
      "The trees in the park are beautiful. They are wet from the rain.",
      "It is quiet. Only the sound of rain can be heard.",
      "I returned home and drank warm tea.",
      "Rainy days are not bad either."
    ],
    vocab: [
      { word: "雨", reading: "あめ", meaning: "rain" },
      { word: "散歩", reading: "さんぽ", meaning: "walk; stroll" },
      { word: "降る", reading: "ふる", meaning: "to fall (rain)" },
      { word: "傘", reading: "かさ", meaning: "umbrella" },
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "木", reading: "き", meaning: "tree" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "音", reading: "おと", meaning: "sound" },
      { word: "温かい", reading: "あたたかい", meaning: "warm" },
      { word: "飲む", reading: "のむ", meaning: "to drink" },
      { word: "悪い", reading: "わるい", meaning: "bad" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 誕生日のサプライズ (Birthday surprise)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-05",
    title: "誕生日[たんじょうび]のサプライズ",
    titleReading: "たんじょうびのさぷらいず",
    level: "N5",
    summary: "Nikki comes home from school to a surprise birthday party thrown by her friends.",
    estMinutes: 2,
    tags: ["celebration", "friendship"],
    body: [
      "今日[きょう]は私[わたし]の誕生日[たんじょうび]です。",
      "朝[あさ]、母[はは]が「誕生日[たんじょうび]おめでとう」と言[い]いました。",
      "学校[がっこう]から帰[かえ]ると、部屋[へや]が暗[くら]いです。",
      "電気[でんき]をつけると、友達[ともだち]がいました。「サプライズ！」",
      "ケーキとプレゼントがありました。とても嬉[うれ]しかったです。",
      "みんなで歌[うた]を歌[うた]いました。最高[さいこう]の誕生日[たんじょうび]でした。"
    ],
    translation: [
      "Today is my birthday.",
      "In the morning, my mother said, 'Happy birthday.'",
      "When I returned from school, my room was dark.",
      "When I turned on the light, my friends were there. 'Surprise!'",
      "There was cake and presents. I was very happy.",
      "Everyone sang a song together. It was the best birthday."
    ],
    vocab: [
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "母", reading: "はは", meaning: "mother (one's own)" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "帰る", reading: "かえる", meaning: "to return" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "暗い", reading: "くらい", meaning: "dark" },
      { word: "電気", reading: "でんき", meaning: "light; electricity" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" },
      { word: "歌", reading: "うた", meaning: "song" },
      { word: "最高", reading: "さいこう", meaning: "the best" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — コンビニへ行く (Convenience store trip)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-06",
    title: "コンビニへ行[い]く",
    titleReading: "こんびにへいく",
    level: "N5",
    summary: "Hungry in the evening, Nikki walks to the convenience store for a small dinner.",
    estMinutes: 2,
    tags: ["shopping", "food"],
    body: [
      "夜[よる]八時[はちじ]に、お腹[なか]が空[す]きました。",
      "近[ちか]くのコンビニへ歩[ある]いて行[い]きました。",
      "おにぎり二個[にこ]とお茶[ちゃ]を買[か]いました。",
      "店[みせ]の人[ひと]が「いらっしゃいませ」と言[い]いました。",
      "レジで三百円[さんびゃくえん]を払[はら]いました。",
      "家[いえ]で食[た]べました。美味[おい]しかったです。"
    ],
    translation: [
      "At eight in the evening, I got hungry.",
      "I walked to a nearby convenience store.",
      "I bought two rice balls and tea.",
      "The shop staff said, 'Welcome.'",
      "I paid three hundred yen at the register.",
      "I ate at home. It was delicious."
    ],
    vocab: [
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "八時", reading: "はちじ", meaning: "eight o'clock" },
      { word: "お腹", reading: "おなか", meaning: "stomach" },
      { word: "近く", reading: "ちかく", meaning: "nearby" },
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "円", reading: "えん", meaning: "yen" },
      { word: "払う", reading: "はらう", meaning: "to pay" },
      { word: "食べる", reading: "たべる", meaning: "to eat" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 昔の友達に会う (Meeting an old friend)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-07",
    title: "昔[むかし]の友達[ともだち]に会[あ]う",
    titleReading: "むかしのともだちにあう",
    level: "N5",
    summary: "Nikki runs into her elementary school friend Yuki in front of the station.",
    estMinutes: 3,
    tags: ["friendship", "slice of life"],
    body: [
      "日曜日[にちようび]に、駅前[えきまえ]で昔[むかし]の友達[ともだち]に会[あ]いました。",
      "名前[なまえ]はユウキです。小学校[しょうがっこう]の時[とき]の友達[ともだち]です。",
      "五年[ごねん]ぐらい会[あ]いませんでした。ユウキは大[おお]きくなりました。",
      "一緒[いっしょ]にコーヒーを飲[の]みました。学校[がっこう]の話[はなし]をしました。",
      "「また会[あ]いましょう」とユウキは言[い]いました。",
      "昔[むかし]の友達[ともだち]に会[あ]えて、嬉[うれ]しかったです。"
    ],
    translation: [
      "On Sunday, I met an old friend in front of the station.",
      "His name is Yuki. He is a friend from elementary school.",
      "We had not met for about five years. Yuki has grown.",
      "We drank coffee together. We talked about school.",
      "Yuki said, 'Let's meet again.'",
      "I was happy to meet an old friend."
    ],
    vocab: [
      { word: "昔", reading: "むかし", meaning: "old times; past" },
      { word: "友達", reading: "ともだち", meaning: "friend" },
      { word: "会う", reading: "あう", meaning: "to meet" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "駅前", reading: "えきまえ", meaning: "in front of the station" },
      { word: "小学校", reading: "しょうがっこう", meaning: "elementary school" },
      { word: "五年", reading: "ごねん", meaning: "five years" },
      { word: "大きい", reading: "おおきい", meaning: "big" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "話", reading: "はなし", meaning: "talk; story" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — カレーを作る (Cooking curry)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-08",
    title: "カレーを作[つく]る",
    titleReading: "かれーをつくる",
    level: "N5",
    summary: "Nikki cooks curry for the family dinner, following each step with care.",
    estMinutes: 3,
    tags: ["cooking", "family"],
    body: [
      "今日[きょう]は家族[かぞく]の晩[ばん]ご飯[はん]にカレーを作[つく]ります。",
      "たまねぎとにんじんとじゃがいもを切[き]ります。肉[にく]も切[き]ります。",
      "鍋[なべ]で肉[にく]を焼[や]きます。いい匂[にお]いがします。",
      "水[みず]と野菜[やさい]を入[い]れて、三十分[さんじゅっぷん]煮[に]ます。",
      "最後[さいご]にルーを入[い]れます。とろとろになります。",
      "みんなで食[た]べました。「とても美味[おい]しい」と言[い]いました。"
    ],
    translation: [
      "Today I will make curry for the family dinner.",
      "I cut onion, carrot, and potato. I also cut meat.",
      "I fry the meat in a pot. A nice smell rises.",
      "I add water and vegetables and simmer for thirty minutes.",
      "Finally I add the roux. It becomes thick.",
      "We all ate together. They said, 'It is very delicious.'"
    ],
    vocab: [
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "晩ご飯", reading: "ばんごはん", meaning: "dinner" },
      { word: "作る", reading: "つくる", meaning: "to make; to cook" },
      { word: "切る", reading: "きる", meaning: "to cut" },
      { word: "肉", reading: "にく", meaning: "meat" },
      { word: "鍋", reading: "なべ", meaning: "pot" },
      { word: "焼く", reading: "やく", meaning: "to fry; to cook" },
      { word: "野菜", reading: "やさい", meaning: "vegetable" },
      { word: "入れる", reading: "いれる", meaning: "to put in" },
      { word: "三十分", reading: "さんじゅっぷん", meaning: "thirty minutes" },
      { word: "煮る", reading: "にる", meaning: "to simmer" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 図書館で勉強する (Library study)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-09",
    title: "図書館[としょかん]で勉強[べんきょう]する",
    titleReading: "としょかんでべんきょうする",
    level: "N5",
    summary: "Nikki spends a quiet Saturday afternoon studying Japanese at the library.",
    estMinutes: 3,
    tags: ["study", "school"],
    body: [
      "土曜日[どようび]の午後[ごご]、図書館[としょかん]へ行[い]きました。",
      "図書館[としょかん]はとても静[しず]かです。いい場所[ばしょ]です。",
      "日本語[にほんご]の本[ほん]を借[か]りました。少[すこ]し読[よ]みました。",
      "机[つくえ]でノートに書[か]きました。漢字[かんじ]の練習[れんしゅう]です。",
      "二時間[にじかん]ぐらい勉強[べんきょう]しました。よく分[わ]かりました。",
      "帰[かえ]りに本[ほん]を返[かえ]しました。また来[き]ます。"
    ],
    translation: [
      "On Saturday afternoon, I went to the library.",
      "The library is very quiet. It is a good place.",
      "I borrowed a Japanese book. I read a little.",
      "I wrote in my notebook at a desk. It was kanji practice.",
      "I studied for about two hours. I understood well.",
      "On the way home I returned the book. I will come again."
    ],
    vocab: [
      { word: "図書館", reading: "としょかん", meaning: "library" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "午後", reading: "ごご", meaning: "afternoon" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "場所", reading: "ばしょ", meaning: "place" },
      { word: "日本語", reading: "にほんご", meaning: "Japanese language" },
      { word: "借りる", reading: "かりる", meaning: "to borrow" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "漢字", reading: "かんじ", meaning: "kanji" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "返す", reading: "かえす", meaning: "to return (a thing)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 山への旅行 (Weekend trip to the mountains)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-10",
    title: "山[やま]への旅行[りょこう]",
    titleReading: "やまへのりょこう",
    level: "N5",
    summary: "Nikki takes a weekend trip to the mountains with her family.",
    estMinutes: 3,
    tags: ["travel", "nature"],
    body: [
      "土曜日[どようび]に、家族[かぞく]と山[やま]へ行[い]きました。",
      "電車[でんしゃ]で二時間[にじかん]です。窓[まど]から山[やま]が見[み]えました。",
      "山[やま]の空気[くうき]はとてもきれいです。鳥[とり]の声[こえ]が聞[き]こえます。",
      "山[やま]の上[うえ]まで登[のぼ]りました。大変[たいへん]でしたが、気持[きも]ちよかったです。",
      "お弁当[べんとう]を食[た]べました。温[あたた]かいお茶[ちゃ]も飲[の]みました。",
      "帰[かえ]りの電車[でんしゃ]で寝[ね]ました。楽[たの]しい旅行[りょこう]でした。"
    ],
    translation: [
      "On Saturday, I went to the mountains with my family.",
      "It is two hours by train. From the window, I could see the mountains.",
      "The mountain air is very clean. I can hear birds' voices.",
      "We climbed to the top of the mountain. It was tough, but it felt good.",
      "We ate lunch boxes. We also drank warm tea.",
      "On the train home, I slept. It was a fun trip."
    ],
    vocab: [
      { word: "山", reading: "やま", meaning: "mountain" },
      { word: "旅行", reading: "りょこう", meaning: "trip; travel" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "二時間", reading: "にじかん", meaning: "two hours" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "空気", reading: "くうき", meaning: "air" },
      { word: "鳥", reading: "とり", meaning: "bird" },
      { word: "登る", reading: "のぼる", meaning: "to climb" },
      { word: "弁当", reading: "べんとう", meaning: "lunch box" },
      { word: "寝る", reading: "ねる", meaning: "to sleep" },
      { word: "楽しい", reading: "たのしい", meaning: "fun" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 新しい靴 (New shoes)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-11",
    title: "新[あたら]しい靴[くつ]",
    titleReading: "あたらしいくつ",
    level: "N5",
    summary: "Nikki buys a pair of light white shoes and looks forward to wearing them to school.",
    estMinutes: 2,
    tags: ["shopping", "school"],
    body: [
      "日曜日[にちようび]に、新[あたら]しい靴[くつ]を買[か]いました。",
      "白[しろ]い靴[くつ]です。とても軽[かる]いです。",
      "店[みせ]の人[ひと]が「似合[にあ]いますよ」と言[い]いました。",
      "家[いえ]で靴[くつ]をはいて、鏡[かがみ]を見[み]ました。",
      "明日[あした]、学校[がっこう]へはいて行[い]きます。",
      "新[あたら]しい靴[くつ]で歩[ある]くのが楽[たの]しみです。"
    ],
    translation: [
      "On Sunday, I bought new shoes.",
      "They are white shoes. They are very light.",
      "The shop staff said, 'They suit you.'",
      "At home, I put on the shoes and looked in the mirror.",
      "Tomorrow, I will wear them to school.",
      "I am looking forward to walking in my new shoes."
    ],
    vocab: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "靴", reading: "くつ", meaning: "shoes" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "白い", reading: "しろい", meaning: "white" },
      { word: "軽い", reading: "かるい", meaning: "light" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "似合う", reading: "にあう", meaning: "to suit" },
      { word: "言う", reading: "いう", meaning: "to say" },
      { word: "鏡", reading: "かがみ", meaning: "mirror" },
      { word: "明日", reading: "あした", meaning: "tomorrow" },
      { word: "楽しみ", reading: "たのしみ", meaning: "looking forward to" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 夏祭り (Summer festival)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-12",
    title: "夏祭[なつまつ]り",
    titleReading: "なつまつり",
    level: "N5",
    summary: "Nikki wears a yukata and enjoys food, music, and fireworks at the town summer festival.",
    estMinutes: 3,
    tags: ["festival", "culture"],
    body: [
      "八月[はちがつ]に、町[まち]で夏祭[なつまつ]りがありました。",
      "私[わたし]は浴衣[ゆかた]を着[き]ました。姉[あね]も着[き]ました。",
      "会場[かいじょう]は人[ひと]でいっぱいでした。音楽[おんがく]が聞[き]こえます。",
      "たこやきを食[た]べました。熱[あつ]かったですが、美味[おい]しかったです。",
      "花火[はなび]が夜[よる]の空[そら]にあがりました。きれいでした。",
      "来年[らいねん]も行[い]きたいです。"
    ],
    translation: [
      "In August, there was a summer festival in town.",
      "I wore a yukata. My older sister also wore one.",
      "The venue was full of people. Music could be heard.",
      "I ate takoyaki. It was hot, but delicious.",
      "Fireworks went up into the night sky. It was beautiful.",
      "I want to go again next year."
    ],
    vocab: [
      { word: "夏祭り", reading: "なつまつり", meaning: "summer festival" },
      { word: "八月", reading: "はちがつ", meaning: "August" },
      { word: "町", reading: "まち", meaning: "town" },
      { word: "浴衣", reading: "ゆかた", meaning: "yukata (summer kimono)" },
      { word: "着る", reading: "きる", meaning: "to wear (clothes)" },
      { word: "姉", reading: "あね", meaning: "older sister" },
      { word: "会場", reading: "かいじょう", meaning: "venue" },
      { word: "音楽", reading: "おんがく", meaning: "music" },
      { word: "熱い", reading: "あつい", meaning: "hot (thing)" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "花火", reading: "はなび", meaning: "fireworks" },
      { word: "来年", reading: "らいねん", meaning: "next year" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — おばあちゃんが来る (Grandmother's visit)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-13",
    title: "おばあちゃんが来[き]る",
    titleReading: "おばあちゃんがくる",
    level: "N5",
    summary: "Nikki prepares the house and her heart for her grandmother's visit from the countryside.",
    estMinutes: 2,
    tags: ["family", "slice of life"],
    body: [
      "今週[こんしゅう]の土曜日[どようび]に、おばあちゃんが家[いえ]に来[き]ます。",
      "おばあちゃんは田舎[いなか]に住[す]んでいます。遠[とお]いです。",
      "私[わたし]は部屋[へや]をきれいに掃除[そうじ]しました。",
      "おばあちゃんはいつも優[やさ]しいです。お話[はなし]が好[す]きです。",
      "一緒[いっしょ]に晩[ばん]ご飯[はん]を作[つく]ります。おばあちゃんの味噌汁[みそしる]が好[す]きです。",
      "早[はや]く会[あ]いたいです。"
    ],
    translation: [
      "This Saturday, my grandmother is coming to our house.",
      "My grandmother lives in the countryside. It is far.",
      "I cleaned my room neatly.",
      "Grandma is always kind. She likes to talk.",
      "We will cook dinner together. I like grandma's miso soup.",
      "I want to see her soon."
    ],
    vocab: [
      { word: "来る", reading: "くる", meaning: "to come" },
      { word: "今週", reading: "こんしゅう", meaning: "this week" },
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "田舎", reading: "いなか", meaning: "countryside" },
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "遠い", reading: "とおい", meaning: "far" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "掃除", reading: "そうじ", meaning: "cleaning" },
      { word: "優しい", reading: "やさしい", meaning: "gentle; kind" },
      { word: "一緒", reading: "いっしょ", meaning: "together" },
      { word: "味噌汁", reading: "みそしる", meaning: "miso soup" },
      { word: "会う", reading: "あう", meaning: "to meet" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 運動会 (Sports day)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-14",
    title: "運動会[うんどうかい]",
    titleReading: "うんどうかい",
    level: "N5",
    summary: "Nikki runs, cheers, and shares a sunny school sports day with her family.",
    estMinutes: 3,
    tags: ["school", "sports"],
    body: [
      "今日[きょう]は学校[がっこう]の運動会[うんどうかい]です。",
      "朝[あさ]から空[そら]が青[あお]いです。いい天気[てんき]です。",
      "最初[さいしょ]の種目[しゅもく]は百[ひゃく]メートル走[そう]です。速[はや]く走[はし]りました。",
      "次[つぎ]に、綱引[つなひ]きをしました。赤組[あかぐみ]が勝[か]ちました。",
      "お母[かあ]さんが写真[しゃしん]を撮[と]ってくれました。",
      "とても疲[つか]れましたが、最高[さいこう]の日[ひ]でした。"
    ],
    translation: [
      "Today is the school sports day.",
      "From the morning, the sky is blue. The weather is good.",
      "The first event is the 100-meter dash. I ran fast.",
      "Next, we had a tug of war. The red team won.",
      "My mother took photos for me.",
      "I was very tired, but it was the best day."
    ],
    vocab: [
      { word: "運動会", reading: "うんどうかい", meaning: "sports day" },
      { word: "学校", reading: "がっこう", meaning: "school" },
      { word: "空", reading: "そら", meaning: "sky" },
      { word: "青い", reading: "あおい", meaning: "blue" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "種目", reading: "しゅもく", meaning: "event (sports)" },
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "綱引き", reading: "つなひき", meaning: "tug of war" },
      { word: "赤組", reading: "あかぐみ", meaning: "red team" },
      { word: "勝つ", reading: "かつ", meaning: "to win" },
      { word: "写真", reading: "しゃしん", meaning: "photograph" },
      { word: "撮る", reading: "とる", meaning: "to take (a photo)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N5 — 初雪 (First snow)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n5-15",
    title: "初雪[はつゆき]",
    titleReading: "はつゆき",
    level: "N5",
    summary: "Nikki wakes to the year's first snow and plays outside with a friend.",
    estMinutes: 2,
    tags: ["weather", "winter"],
    body: [
      "今朝[けさ]起[お]きたら、外[そと]が白[しろ]いです。",
      "雪[ゆき]が降[ふ]っています。今年[ことし]の初雪[はつゆき]です。",
      "私[わたし]は手袋[てぶくろ]をはめて、外[そと]へ出[で]ました。",
      "庭[にわ]で小[ちい]さい雪[ゆき]だるまを作[つく]りました。",
      "友達[ともだち]と雪合戦[ゆきがっせん]をしました。楽[たの]しかったです。",
      "夜[よる]、雪[ゆき]は止[や]みました。また冬[ふゆ]が来[き]ます。"
    ],
    translation: [
      "When I woke up this morning, the outside was white.",
      "It is snowing. It is the first snow of this year.",
      "I put on gloves and went outside.",
      "In the yard, I made a small snowman.",
      "I had a snowball fight with my friend. It was fun.",
      "At night, the snow stopped. Winter comes again."
    ],
    vocab: [
      { word: "初雪", reading: "はつゆき", meaning: "first snow" },
      { word: "今朝", reading: "けさ", meaning: "this morning" },
      { word: "起きる", reading: "おきる", meaning: "to wake up" },
      { word: "雪", reading: "ゆき", meaning: "snow" },
      { word: "降る", reading: "ふる", meaning: "to fall (snow, rain)" },
      { word: "外", reading: "そと", meaning: "outside" },
      { word: "白い", reading: "しろい", meaning: "white" },
      { word: "手袋", reading: "てぶくろ", meaning: "gloves" },
      { word: "庭", reading: "にわ", meaning: "yard" },
      { word: "雪合戦", reading: "ゆきがっせん", meaning: "snowball fight" },
      { word: "冬", reading: "ふゆ", meaning: "winter" },
      { word: "来る", reading: "くる", meaning: "to come" }
    ]
  }
];
