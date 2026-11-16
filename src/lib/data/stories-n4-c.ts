import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const storiesN4C: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n4-31 — 山登りの失敗 (A hiking trip gone wrong)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-31",
    title: "山登[やまのぼ]りの失敗[しっぱい]",
    titleReading: "やまのぼりのしっぱい",
    level: "N4",
    summary: "A hiking trip goes wrong when friends get lost, but kindness from a stranger helps them return safely.",
    estMinutes: 4,
    tags: ["hiking", "travel", "kindness", "mistake"],
    body: [
      "先週末[せんしゅうまつ]、友達[ともだち]と一緒[いっしょ]に山登[やまのぼ]りに行[い]きました。",
      "天気[てんき]はとても良[よ]くて、景色[けしき]がきれいでした。",
      "でも、道[みち]に迷[まよ]ってしまいました。",
      "携帯[けいたい]の電池[でんち]がなくなって、連絡[れんらく]できませんでした。",
      "三時間[さんじかん]ぐらい歩[ある]いて、やっと山小屋[やまごや]を見[み]つけました。",
      "山小屋[やまごや]のおじいさんは親切[しんせつ]にしてくれました。",
      "お茶[ちゃ]とおにぎりをくれて、少[すこ]し休[やす]みました。",
      "次[つぎ]の日[ひ]、無事[ぶじ]に家[いえ]に帰[かえ]ることができました。",
      "次[つぎ]はもっと準備[じゅんび]してから行[い]こうと思[おも]います。"
    ],
    translation: [
      "Last weekend, I went hiking with my friend.",
      "The weather was very nice and the scenery was beautiful.",
      "But we ended up getting lost on the trail.",
      "My phone battery died, so I couldn't contact anyone.",
      "After walking for about three hours, we finally found a mountain hut.",
      "The old man at the hut was kind to us.",
      "He gave us tea and rice balls, and we rested a little.",
      "The next day, we were able to return home safely.",
      "Next time, I think I'll prepare more before going."
    ],
    vocab: [
      { word: "山登り", reading: "やまのぼり", meaning: "mountain climbing, hiking" },
      { word: "失敗", reading: "しっぱい", meaning: "failure, mistake" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "景色", reading: "けしき", meaning: "scenery, view" },
      { word: "道", reading: "みち", meaning: "road, path" },
      { word: "迷う", reading: "まよう", meaning: "to get lost" },
      { word: "携帯", reading: "けいたい", meaning: "mobile phone" },
      { word: "電池", reading: "でんち", meaning: "battery" },
      { word: "連絡", reading: "れんらく", meaning: "contact, communication" },
      { word: "山小屋", reading: "やまごや", meaning: "mountain hut" },
      { word: "親切", reading: "しんせつ", meaning: "kind, helpful" },
      { word: "無事", reading: "ぶじ", meaning: "safe, without incident" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "友達", reading: "ともだち", meaning: "friend" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-32 — オンラインの授業 (The online class)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-32",
    title: "オンラインの授業[じゅぎょう]",
    titleReading: "オンラインのじゅぎょう",
    level: "N4",
    summary: "Online classes seem convenient at first, but a student finds both challenges and small joys in remote learning.",
    estMinutes: 4,
    tags: ["school", "online", "study", "daily-life"],
    body: [
      "今月[こんげつ]から、大学[だいがく]の授業[じゅぎょう]がオンラインになりました。",
      "最初[さいしょ]は便利[べんり]だと思[おも]っていました。",
      "でも、朝[あさ]起[お]きるのが難[むずか]しいです。",
      "ベッドの上[うえ]で授業[じゅぎょう]を受[う]けると、すぐ眠[ねむ]くなります。",
      "先生[せんせい]の声[こえ]が時々[ときどき]止[と]まって、聞[き]こえません。",
      "友達[ともだち]と話[はな]せないのが寂[さび]しいです。",
      "先週[せんしゅう]、ニキさんと一緒[いっしょ]にオンラインで勉強[べんきょう]しました。",
      "互[たが]いに質問[しつもん]して、楽[たの]しく学[まな]べました。",
      "来月[らいげつ]は学校[がっこう]に行[い]けるようになるといいなと思[おも]います。"
    ],
    translation: [
      "From this month, my university classes became online.",
      "At first, I thought it was convenient.",
      "But waking up in the morning is hard.",
      "When I take classes on my bed, I get sleepy right away.",
      "The teacher's voice sometimes stops and I can't hear it.",
      "It's lonely not being able to talk with friends.",
      "Last week, I studied online together with Nikki.",
      "We asked each other questions and had fun learning.",
      "I hope I can go to school next month."
    ],
    vocab: [
      { word: "オンライン", reading: "オンライン", meaning: "online" },
      { word: "授業", reading: "じゅぎょう", meaning: "class, lesson" },
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "最初", reading: "さいしょ", meaning: "first, beginning" },
      { word: "便利", reading: "べんり", meaning: "convenient" },
      { word: "難しい", reading: "むずかしい", meaning: "difficult" },
      { word: "眠い", reading: "ねむい", meaning: "sleepy" },
      { word: "先生", reading: "せんせい", meaning: "teacher" },
      { word: "声", reading: "こえ", meaning: "voice" },
      { word: "時々", reading: "ときどき", meaning: "sometimes" },
      { word: "寂しい", reading: "さびしい", meaning: "lonely" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "質問", reading: "しつもん", meaning: "question" },
      { word: "学校", reading: "がっこう", meaning: "school" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-33 — 犬を飼うことにした (Adopting a shelter dog)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-33",
    title: "犬[いぬ]を飼[か]うことにした",
    titleReading: "いぬをかうことにした",
    level: "N4",
    summary: "A family adopts a shy shelter dog named Momo, who slowly becomes a beloved member of the family.",
    estMinutes: 5,
    tags: ["pets", "family", "kindness", "daily-life"],
    body: [
      "先週[せんしゅう]、犬[いぬ]を飼[か]うことにしました。",
      "保護施設[ほごしせつ]に行[い]きました。",
      "そこにはたくさんの犬[いぬ]がいました。",
      "小[ちい]さい犬[いぬ]が私[わたし]を見[み]て、尻尾[しっぽ]を振[ふ]りました。",
      "名前[なまえ]は「モモ」にしました。",
      "家[いえ]に連[つ]れて帰[かえ]ると、少[すこ]し怖[こわ]がっていました。",
      "ゆっくり部屋[へや]を見[み]て、やっと安心[あんしん]しました。",
      "毎朝[まいあさ]、モモと一緒[いっしょ]に公園[こうえん]を散歩[さんぽ]します。",
      "モモは家族[かぞく]の大切[たいせつ]な一員[いちいん]になりました。"
    ],
    translation: [
      "Last week, we decided to get a dog.",
      "We went to an animal shelter.",
      "There were many dogs there.",
      "A small dog looked at me and wagged its tail.",
      "We named her Momo.",
      "When we brought her home, she was a little scared.",
      "She looked around the room slowly and finally relaxed.",
      "Every morning, I walk with Momo in the park.",
      "Momo has become an important member of our family."
    ],
    vocab: [
      { word: "犬", reading: "いぬ", meaning: "dog" },
      { word: "飼う", reading: "かう", meaning: "to keep (a pet)" },
      { word: "保護施設", reading: "ほごしせつ", meaning: "shelter facility" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "尻尾", reading: "しっぽ", meaning: "tail" },
      { word: "振る", reading: "ふる", meaning: "to wave, to swing" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "連れて帰る", reading: "つれてかえる", meaning: "to bring (someone) home" },
      { word: "怖がる", reading: "こわがる", meaning: "to be scared" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "安心", reading: "あんしん", meaning: "relief, peace of mind" },
      { word: "散歩", reading: "さんぽ", meaning: "walk, stroll" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "大切", reading: "たいせつ", meaning: "important, precious" },
      { word: "一員", reading: "いちいん", meaning: "member" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-34 — 文化の違い (A cultural difference)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-34",
    title: "文化[ぶんか]の違[ちが]い",
    titleReading: "ぶんかのちがい",
    level: "N4",
    summary: "A visitor to Japan notices and learns to appreciate cultural differences, from shoes to table manners.",
    estMinutes: 4,
    tags: ["culture", "Japan", "manners", "reflection"],
    body: [
      "日本[にほん]に来[き]てから、多[おお]くの文化[ぶんか]の違[ちが]いに驚[おどろ]きました。",
      "例[たと]えば、靴[くつ]を脱[ぬ]ぐ習慣[しゅうかん]があります。",
      "外国[がいこく]では、家[いえ]の中[なか]で靴[くつ]を履[は]いたままです。",
      "最初[さいしょ]は変[へん]だと思[おも]いました。",
      "でも、今[いま]はとてもきれいだと思[おも]います。",
      "食事[しょくじ]のマナーも違[ちが]います。",
      "日本[にほん]では、麺[めん]を食[た]べる時[とき]に音[おと]を出[だ]しても大丈夫[だいじょうぶ]です。",
      "私[わたし]の国[くに]では、音[おと]を出[だ]すのは失礼[しつれい]です。",
      "違[ちが]いを知[し]るのは面白[おもしろ]いですね。"
    ],
    translation: [
      "Since coming to Japan, I've been surprised by many cultural differences.",
      "For example, there is a custom of taking off shoes.",
      "In foreign countries, people wear shoes inside the house.",
      "At first, I thought it was strange.",
      "But now I think it's very clean.",
      "Table manners are also different.",
      "In Japan, it's okay to make noise when eating noodles.",
      "In my country, making noise is rude.",
      "It's interesting to learn about differences."
    ],
    vocab: [
      { word: "文化", reading: "ぶんか", meaning: "culture" },
      { word: "違い", reading: "ちがい", meaning: "difference" },
      { word: "驚く", reading: "おどろく", meaning: "to be surprised" },
      { word: "習慣", reading: "しゅうかん", meaning: "custom, habit" },
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "靴", reading: "くつ", meaning: "shoes" },
      { word: "脱ぐ", reading: "ぬぐ", meaning: "to take off (shoes, clothes)" },
      { word: "履く", reading: "はく", meaning: "to wear (shoes)" },
      { word: "変", reading: "へん", meaning: "strange, odd" },
      { word: "食事", reading: "しょくじ", meaning: "meal" },
      { word: "麺", reading: "めん", meaning: "noodles" },
      { word: "失礼", reading: "しつれい", meaning: "rude, impolite" },
      { word: "面白い", reading: "おもしろい", meaning: "interesting" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-35 — 古いカメラ (The old camera)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-35",
    title: "古[ふる]いカメラ",
    titleReading: "ふるいカメラ",
    level: "N4",
    summary: "A grandchild receives an old film camera from their grandfather and discovers the warmth of analog photography.",
    estMinutes: 4,
    tags: ["hobby", "family", "photography", "nostalgia"],
    body: [
      "祖父[そふ]の家[いえ]から古[ふる]いカメラをもらいました。",
      "三十年前[さんじゅうねんまえ]のカメラです。",
      "最初[さいしょ]、使[つか]い方[かた]がわかりませんでした。",
      "父[ちち]に聞[き]いて、教[おし]えてもらいました。",
      "フィルムを入[い]れて、写真[しゃしん]を撮[と]ってみました。",
      "写真[しゃしん]を現像[げんぞう]するのに一週間[いっしゅうかん]かかりました。",
      "出[で]てきた写真[しゃしん]はとてもきれいでした。",
      "デジカメと違[ちが]って、温[あたた]かい色[いろ]が出[で]ます。",
      "今度[こんど]、ニキさんの写真[しゃしん]を撮[と]ろうと思[おも]います。"
    ],
    translation: [
      "I received an old camera from my grandfather's house.",
      "It is a camera from thirty years ago.",
      "At first, I didn't know how to use it.",
      "I asked my father and he taught me.",
      "I put in film and tried taking photos.",
      "It took a week to develop the photos.",
      "The photos that came out were very beautiful.",
      "Unlike digital cameras, it produces warm colors.",
      "Next time, I want to take Nikki's photo."
    ],
    vocab: [
      { word: "祖父", reading: "そふ", meaning: "grandfather" },
      { word: "古い", reading: "ふるい", meaning: "old" },
      { word: "カメラ", reading: "カメラ", meaning: "camera" },
      { word: "使い方", reading: "つかいかた", meaning: "how to use" },
      { word: "父", reading: "ちち", meaning: "father (one's own)" },
      { word: "教える", reading: "おしえる", meaning: "to teach, to tell" },
      { word: "フィルム", reading: "フィルム", meaning: "film" },
      { word: "写真", reading: "しゃしん", meaning: "photograph" },
      { word: "撮る", reading: "とる", meaning: "to take (a photo)" },
      { word: "現像", reading: "げんぞう", meaning: "developing (film)" },
      { word: "一週間", reading: "いっしゅうかん", meaning: "one week" },
      { word: "違う", reading: "ちがう", meaning: "to differ" },
      { word: "温かい", reading: "あたたかい", meaning: "warm" },
      { word: "色", reading: "いろ", meaning: "color" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-36 — サークルに入った (Joining a club)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-36",
    title: "サークルに入[はい]った",
    titleReading: "サークルにはいった",
    level: "N4",
    summary: "Joining a university photo club brings new friends, new skills, and a chance to exhibit work.",
    estMinutes: 4,
    tags: ["school", "club", "photography", "friendship"],
    body: [
      "大学[だいがく]で写真[しゃしん]サークルに入[はい]りました。",
      "毎週[まいしゅう]金曜日[きんようび]に集[あつ]まります。",
      "先輩[せんぱい]たちがとても親切[しんせつ]です。",
      "先週[せんしゅう]、公園[こうえん]で撮影会[さつえいかい]がありました。",
      "みんなで色々[いろいろ]な写真[しゃしん]を撮[と]りました。",
      "私[わたし]は花[はな]の写真[しゃしん]を撮[と]るのが好[す]きです。",
      "先輩[せんぱい]が上手[じょうず]に撮[と]る方法[ほうほう]を教[おし]えてくれました。",
      "来月[らいげつ]、みんなの写真[しゃしん]を展示[てんじ]する予定[よてい]です。",
      "写真[しゃしん]を通[とお]して、新[あたら]しい友達[ともだち]ができました。"
    ],
    translation: [
      "I joined a photography circle at university.",
      "We gather every Friday.",
      "The senior members are very kind.",
      "Last week, we had a photo session at the park.",
      "We took various photos together.",
      "I like taking photos of flowers.",
      "A senior member taught me how to take good photos.",
      "Next month, we plan to exhibit everyone's photos.",
      "Through photography, I made new friends."
    ],
    vocab: [
      { word: "サークル", reading: "サークル", meaning: "club, circle (university)" },
      { word: "写真", reading: "しゃしん", meaning: "photograph" },
      { word: "入る", reading: "はいる", meaning: "to join, to enter" },
      { word: "毎週", reading: "まいしゅう", meaning: "every week" },
      { word: "金曜日", reading: "きんようび", meaning: "Friday" },
      { word: "集まる", reading: "あつまる", meaning: "to gather" },
      { word: "先輩", reading: "せんぱい", meaning: "senior member" },
      { word: "親切", reading: "しんせつ", meaning: "kind, helpful" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "撮影会", reading: "さつえいかい", meaning: "photo session" },
      { word: "色々", reading: "いろいろ", meaning: "various" },
      { word: "上手", reading: "じょうず", meaning: "good at, skillful" },
      { word: "方法", reading: "ほうほう", meaning: "method, way" },
      { word: "展示", reading: "てんじ", meaning: "exhibition, display" },
      { word: "予定", reading: "よてい", meaning: "plan, schedule" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-37 — 遠くに住む友達 (A long-distance friend)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-37",
    title: "遠[とお]くに住[す]む友達[ともだち]",
    titleReading: "とおくにすむともだち",
    level: "N4",
    summary: "Two best friends stay close across oceans and time zones through weekly video calls and shared goals.",
    estMinutes: 5,
    tags: ["friendship", "distance", "language", "hope"],
    body: [
      "私[わたし]の親友[しんゆう]は今[いま]アメリカに住[す]んでいます。",
      "高校[こうこう]を卒業[そつぎょう]して、向[む]こうへ行[い]きました。",
      "時差[じさ]が十四時間[じゅうよじかん]もあります。",
      "でも、毎週[まいしゅう]ビデオ通話[つうわ]をします。",
      "日本[にほん]の夜[よる]はアメリカの朝[あさ]です。",
      "彼女[かのじょ]は日本語[にほんご]を忘[わす]れないように勉強[べんきょう]しています。",
      "私[わたし]は英語[えいご]を少[すこ]しずつ練習[れんしゅう]しています。",
      "来年[らいねん]の夏[なつ]、日本[にほん]に会[あ]いに来[く]る予定[よてい]です。",
      "遠[とお]くても、心[こころ]はいつも一緒[いっしょ]です。"
    ],
    translation: [
      "My best friend now lives in America.",
      "She went there after graduating from high school.",
      "The time difference is as much as fourteen hours.",
      "But we have a video call every week.",
      "Night in Japan is morning in America.",
      "She studies Japanese so she won't forget it.",
      "I am practicing English little by little.",
      "Next summer, she plans to come to Japan to see me.",
      "Even though we're far apart, our hearts are always together."
    ],
    vocab: [
      { word: "親友", reading: "しんゆう", meaning: "best friend" },
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "高校", reading: "こうこう", meaning: "high school" },
      { word: "卒業", reading: "そつぎょう", meaning: "graduation" },
      { word: "時差", reading: "じさ", meaning: "time difference" },
      { word: "十四時間", reading: "じゅうよじかん", meaning: "fourteen hours" },
      { word: "毎週", reading: "まいしゅう", meaning: "every week" },
      { word: "通話", reading: "つうわ", meaning: "phone call" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "朝", reading: "あさ", meaning: "morning" },
      { word: "忘れる", reading: "わすれる", meaning: "to forget" },
      { word: "英語", reading: "えいご", meaning: "English (language)" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "夏", reading: "なつ", meaning: "summer" },
      { word: "心", reading: "こころ", meaning: "heart, mind" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-38 — デリバリーアプリの便利さ (The convenience of delivery apps)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-38",
    title: "デリバリーアプリの便利[べんり]さ",
    titleReading: "デリバリーアプリのべんりさ",
    level: "N4",
    summary: "Delivery apps make busy days easier, but overspending prompts a return to home cooking.",
    estMinutes: 3,
    tags: ["food", "technology", "daily-life", "money"],
    body: [
      "最近[さいきん]、デリバリーアプリを使[つか]うようになりました。",
      "スマホで注文[ちゅうもん]すると、三十分[さんじゅっぷん]ぐらいで届[とど]きます。",
      "忙[いそが]しい日は料理[りょうり]する時間[じかん]がありません。",
      "そんな時[とき]に、アプリがとても便利[べんり]です。",
      "先週[せんしゅう]は毎日[まいにち]デリバリーを頼[たの]みました。",
      "ニキさんも一緒[いっしょ]に頼[たの]むことがあります。",
      "でも、お金[かね]が少[すこ]し使[つか]いすぎになりました。",
      "今週[こんしゅう]からは、自分[じぶん]で料理[りょうり]しようと思[おも]っています。",
      "便利[べんり]すぎるのも困[こま]りますね。"
    ],
    translation: [
      "Recently, I started using delivery apps.",
      "When I order on my phone, it arrives in about thirty minutes.",
      "On busy days, I don't have time to cook.",
      "At such times, the app is very convenient.",
      "Last week, I ordered delivery every day.",
      "Sometimes I order together with Nikki.",
      "But I ended up spending a little too much money.",
      "From this week, I plan to cook for myself.",
      "Being too convenient can also be a problem."
    ],
    vocab: [
      { word: "デリバリー", reading: "デリバリー", meaning: "delivery" },
      { word: "アプリ", reading: "アプリ", meaning: "app" },
      { word: "最近", reading: "さいきん", meaning: "recently" },
      { word: "使う", reading: "つかう", meaning: "to use" },
      { word: "注文", reading: "ちゅうもん", meaning: "order" },
      { word: "三十分", reading: "さんじゅっぷん", meaning: "thirty minutes" },
      { word: "届く", reading: "とどく", meaning: "to be delivered, to arrive" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" },
      { word: "料理", reading: "りょうり", meaning: "cooking, dish" },
      { word: "便利", reading: "べんり", meaning: "convenient" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "頼む", reading: "たのむ", meaning: "to request, to order" },
      { word: "お金", reading: "おかね", meaning: "money" },
      { word: "自分", reading: "じぶん", meaning: "oneself" },
      { word: "困る", reading: "こまる", meaning: "to be troubled" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-39 — 静かな日曜日 (A quiet Sunday)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-39",
    title: "静[しず]かな日曜日[にちようび]",
    titleReading: "しずかなにちようび",
    level: "N4",
    summary: "A slow Sunday of coffee, books, and a quiet park walk reminds the narrator to value rest.",
    estMinutes: 3,
    tags: ["rest", "daily-life", "nature", "reflection"],
    body: [
      "今日[きょう]はとても静[しず]かな日曜日[にちようび]でした。",
      "朝[あさ]、ゆっくり起[お]きて、コーヒーを淹[い]れました。",
      "窓[まど]の外[そと]で鳥[とり]が歌[うた]っていました。",
      "午前中[ごぜんちゅう]、本[ほん]を三時間[さんじかん]ぐらい読[よ]みました。",
      "お昼[ひる]に、簡単[かんたん]なサンドイッチを作[つく]りました。",
      "午後[ごご]は近[ちか]くの公園[こうえん]を散歩[さんぽ]しました。",
      "公園[こうえん]には人[ひと]が少[すく]なくて、静[しず]かでした。",
      "家[いえ]に帰[かえ]って、少[すこ]しだけ昼寝[ひるね]をしました。",
      "ゆっくりした一日[いちにち]がとても大事[だいじ]だと思[おも]いました。"
    ],
    translation: [
      "Today was a very quiet Sunday.",
      "In the morning, I woke up slowly and made coffee.",
      "Outside the window, birds were singing.",
      "In the morning, I read a book for about three hours.",
      "For lunch, I made a simple sandwich.",
      "In the afternoon, I walked in a nearby park.",
      "There were few people in the park, and it was quiet.",
      "I went home and took a short nap.",
      "I thought a relaxed day is very important."
    ],
    vocab: [
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "朝", reading: "あさ", meaning: "morning" },
      { word: "淹れる", reading: "いれる", meaning: "to make (coffee, tea)" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "外", reading: "そと", meaning: "outside" },
      { word: "鳥", reading: "とり", meaning: "bird" },
      { word: "歌う", reading: "うたう", meaning: "to sing" },
      { word: "午前中", reading: "ごぜんちゅう", meaning: "in the morning" },
      { word: "本", reading: "ほん", meaning: "book" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "お昼", reading: "おひる", meaning: "noon, lunch" },
      { word: "簡単", reading: "かんたん", meaning: "simple, easy" },
      { word: "散歩", reading: "さんぽ", meaning: "walk, stroll" },
      { word: "大事", reading: "だいじ", meaning: "important" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-40 — 子供の時の場所 (Revisiting a childhood place)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-40",
    title: "子供[こども]の時[とき]の場所[ばしょ]",
    titleReading: "こどものときのばしょ",
    level: "N4",
    summary: "Returning to a childhood park after ten years brings memories, surprises, and a sense of home.",
    estMinutes: 4,
    tags: ["nostalgia", "family", "childhood", "home"],
    body: [
      "十年[じゅうねん]ぶりに実家[じっか]に帰[かえ]りました。",
      "小[ちい]さい時[とき]に遊[あそ]んだ公園[こうえん]に行[い]きました。",
      "公園[こうえん]はずいぶん小[ちい]さくなりました。",
      "でも、ブランコは同[おな]じ場所[ばしょ]にありました。",
      "母[はは]と一緒[いっしょ]に、昔[むかし]の話[はなし]をしました。",
      "隣[となり]のおばあさんはまだ元気[げんき]でした。",
      "私[わたし]のことを覚[おぼ]えていてくれました。",
      "昔[むかし]の友達[ともだち]には会[あ]えませんでした。",
      "でも、この場所[ばしょ]は私[わたし]の心[こころ]の中[なか]で特別[とくべつ]です。"
    ],
    translation: [
      "I went back to my family home for the first time in ten years.",
      "I went to the park I played at as a child.",
      "The park had become much smaller.",
      "But the swings were in the same place.",
      "I talked about the old days with my mother.",
      "The grandmother next door was still healthy.",
      "She remembered me.",
      "I couldn't meet my old friends.",
      "But this place is special in my heart."
    ],
    vocab: [
      { word: "十年", reading: "じゅうねん", meaning: "ten years" },
      { word: "実家", reading: "じっか", meaning: "family home, parents' house" },
      { word: "帰る", reading: "かえる", meaning: "to return" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "遊ぶ", reading: "あそぶ", meaning: "to play" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "同じ", reading: "おなじ", meaning: "same" },
      { word: "場所", reading: "ばしょ", meaning: "place" },
      { word: "母", reading: "はは", meaning: "mother (one's own)" },
      { word: "昔", reading: "むかし", meaning: "old times, past" },
      { word: "話", reading: "はなし", meaning: "talk, story" },
      { word: "隣", reading: "となり", meaning: "next door, neighbor" },
      { word: "元気", reading: "げんき", meaning: "healthy, energetic" },
      { word: "覚える", reading: "おぼえる", meaning: "to remember, to memorize" },
      { word: "特別", reading: "とくべつ", meaning: "special" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-41 — 昇進することになった (The job promotion)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-41",
    title: "昇進[しょうしん]することになった",
    titleReading: "しょうしんすることになった",
    level: "N4",
    summary: "A promotion at work brings happiness and nerves, with support from Nikki and proud parents.",
    estMinutes: 4,
    tags: ["work", "achievement", "family", "nervous"],
    body: [
      "先週[せんしゅう]、会社[かいしゃ]で昇進[しょうしん]することになりました。",
      "来月[らいげつ]から課長[かちょう]になります。",
      "とても嬉[うれ]しいですが、少[すこ]し緊張[きんちょう]しています。",
      "責任[せきにん]がもっと大[おお]きくなります。",
      "まず、部下[ぶか]を六人[ろくにん]管理[かんり]することになります。",
      "ニキさんがお祝[いわ]いのメッセージをくれました。",
      "両親[りょうしん]に電話[でんわ]して、知[し]らせました。",
      "父[ちち]はとても喜[よろこ]んでくれました。",
      "新[あたら]しい役割[やくわり]で頑張[がんば]ろうと思[おも]います。"
    ],
    translation: [
      "Last week, I was promoted at my company.",
      "From next month, I will become a section chief.",
      "I'm very happy, but a little nervous.",
      "My responsibilities will become bigger.",
      "First, I will manage six subordinates.",
      "Nikki sent me a congratulatory message.",
      "I called my parents and told them.",
      "My father was very happy for me.",
      "I want to work hard in my new role."
    ],
    vocab: [
      { word: "昇進", reading: "しょうしん", meaning: "promotion" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "来月", reading: "らいげつ", meaning: "next month" },
      { word: "課長", reading: "かちょう", meaning: "section chief" },
      { word: "嬉しい", reading: "うれしい", meaning: "happy, glad" },
      { word: "緊張", reading: "きんちょう", meaning: "nervous, tension" },
      { word: "責任", reading: "せきにん", meaning: "responsibility" },
      { word: "部下", reading: "ぶか", meaning: "subordinate" },
      { word: "六人", reading: "ろくにん", meaning: "six people" },
      { word: "管理", reading: "かんり", meaning: "management" },
      { word: "お祝い", reading: "おいわい", meaning: "celebration, congratulation" },
      { word: "両親", reading: "りょうしん", meaning: "parents" },
      { word: "電話", reading: "でんわ", meaning: "phone call" },
      { word: "喜ぶ", reading: "よろこぶ", meaning: "to be delighted" },
      { word: "役割", reading: "やくわり", meaning: "role" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-42 — 小さな嘘が大きくなった (A small lie that grew)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-42",
    title: "小[ちい]さな嘘[うそ]が大[おお]きくなった",
    titleReading: "ちいさなうそがおおきくなった",
    level: "N4",
    summary: "A small lie to skip a dinner unravels when the friend shows up at the same restaurant.",
    estMinutes: 4,
    tags: ["friendship", "honesty", "mistake", "apology"],
    body: [
      "先週[せんしゅう]、友達[ともだち]に小[ちい]さな嘘[うそ]をつきました。",
      "「忙[いそが]しいから、ご飯[はん]に行[い]けない」と言[い]いました。",
      "実[じつ]は、家[いえ]で映画[えいが]を見[み]たかったのです。",
      "でも、その夜[よる]、友達[ともだち]は同[おな]じレストランに来[き]ました。",
      "私[わたし]はすぐに見[み]つかりました。",
      "友達[ともだち]はとても怒[おこ]りました。",
      "次[つぎ]の日[ひ]、ちゃんと謝[あやま]りました。",
      "友達[ともだち]は許[ゆる]してくれました。",
      "嘘[うそ]はすぐに大[おお]きくなるとわかりました。"
    ],
    translation: [
      "Last week, I told a small lie to my friend.",
      "I said, \"I'm busy, so I can't go out to eat.\"",
      "Actually, I wanted to watch a movie at home.",
      "But that night, my friend came to the same restaurant.",
      "I was found right away.",
      "My friend was very angry.",
      "The next day, I apologized properly.",
      "My friend forgave me.",
      "I learned that lies quickly grow bigger."
    ],
    vocab: [
      { word: "嘘", reading: "うそ", meaning: "lie" },
      { word: "小さな", reading: "ちいさな", meaning: "small" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" },
      { word: "ご飯", reading: "ごはん", meaning: "meal, rice" },
      { word: "実は", reading: "じつは", meaning: "actually, in fact" },
      { word: "映画", reading: "えいが", meaning: "movie" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "同じ", reading: "おなじ", meaning: "same" },
      { word: "一目", reading: "ひとめ", meaning: "one glance" },
      { word: "怒る", reading: "おこる", meaning: "to get angry" },
      { word: "謝る", reading: "あやまる", meaning: "to apologize" },
      { word: "許す", reading: "ゆるす", meaning: "to forgive" },
      { word: "大きい", reading: "おおきい", meaning: "big" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-43 — パン屋が閉店することになった (The local bakery closing)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-43",
    title: "パン屋[や]が閉店[へいてん]することになった",
    titleReading: "パンやがへいてんすることになった",
    level: "N4",
    summary: "A beloved local bakery prepares to close after thirty years, leaving warm memories behind.",
    estMinutes: 5,
    tags: ["community", "nostalgia", "food", "goodbye"],
    body: [
      "近[ちか]くのパン屋[や]が来月[らいげつ]で閉店[へいてん]することになりました。",
      "そのパン屋[や]は三十年[さんじゅうねん]も続[つづ]いています。",
      "私[わたし]は子供[こども]の時[とき]からそこでパンを買[か]っていました。",
      "おじいさん店主[てんしゅ]はとても親切[しんせつ]でした。",
      "毎朝[まいあさ]、焼[や]きたてのパンを並[なら]べていました。",
      "先週[せんしゅう]、お別[わか]れにパンを買[か]いに行[い]きました。",
      "おじいさんは「ありがとう」と言[い]ってくれました。",
      "ニキさんも一緒[いっしょ]に行[い]きました。",
      "パン屋[や]はなくなっても、思[おも]い出[で]は残[のこ]ります。"
    ],
    translation: [
      "The bakery nearby will close at the end of next month.",
      "The bakery has been running for thirty years.",
      "I have been buying bread there since I was a child.",
      "The grandfather shopkeeper was very kind.",
      "Every morning, he lined up freshly baked bread.",
      "Last week, I went to buy bread to say goodbye.",
      "The old man said \"thank you\" to me.",
      "Nikki went together with me.",
      "Even though the bakery will be gone, the memories remain."
    ],
    vocab: [
      { word: "パン屋", reading: "ぱんや", meaning: "bakery" },
      { word: "近く", reading: "ちかく", meaning: "nearby" },
      { word: "来月", reading: "らいげつ", meaning: "next month" },
      { word: "閉店", reading: "へいてん", meaning: "store closing" },
      { word: "三十年", reading: "さんじゅうねん", meaning: "thirty years" },
      { word: "続く", reading: "つづく", meaning: "to continue" },
      { word: "子供", reading: "こども", meaning: "child" },
      { word: "買う", reading: "かう", meaning: "to buy" },
      { word: "店主", reading: "てんしゅ", meaning: "shopkeeper" },
      { word: "毎朝", reading: "まいあさ", meaning: "every morning" },
      { word: "焼きたて", reading: "やきたて", meaning: "freshly baked" },
      { word: "並べる", reading: "ならべる", meaning: "to line up, to display" },
      { word: "お別れ", reading: "おわかれ", meaning: "parting, farewell" },
      { word: "思い出", reading: "おもいで", meaning: "memory" },
      { word: "残る", reading: "のこる", meaning: "to remain" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-44 — 予想外のお客さん (An unexpected guest)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-44",
    title: "予想外[よそうがい]のお客[きゃく]さん",
    titleReading: "よそうがいのおきゃくさん",
    level: "N4",
    summary: "An unexpected lost traveler rings the doorbell and turns an ordinary evening into a pleasant encounter.",
    estMinutes: 4,
    tags: ["stranger", "kindness", "travel", "evening"],
    body: [
      "昨日[きのう]の夜[よる]、ドアベルが鳴[な]りました。",
      "ドアを開[あ]けると、見知[みし]らぬ男[おとこ]の人[ひと]が立[た]っていました。",
      "「道[みち]に迷[まよ]いました」と言[い]いました。",
      "彼[かれ]は旅行中[りょこうちゅう]で、ホテルが見[み]つからないと言[い]いました。",
      "私[わたし]は地図[ちず]を見[み]せて、道[みち]を教[おし]えました。",
      "お茶[ちゃ]を出[だ]して、少[すこ]しお話[はなし]しました。",
      "彼[かれ]は北海道[ほっかいどう]から来[き]たそうです。",
      "三十分[さんじゅっぷん]ぐらいして、彼[かれ]はホテルに向[む]かいました。",
      "急[きゅう]なお客[きゃく]さんでしたが、楽[たの]しい夜[よる]でした。"
    ],
    translation: [
      "Last night, the doorbell rang.",
      "When I opened the door, an unfamiliar man was standing there.",
      "He said, \"I got lost.\"",
      "He was traveling and said he couldn't find his hotel.",
      "I showed him a map and gave him directions.",
      "I served tea and we talked a little.",
      "I heard he came from Hokkaido.",
      "After about thirty minutes, he headed to his hotel.",
      "He was a sudden visitor, but it was a fun night."
    ],
    vocab: [
      { word: "予想外", reading: "よそうがい", meaning: "unexpected" },
      { word: "昨日", reading: "きのう", meaning: "yesterday" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "鳴る", reading: "なる", meaning: "to ring" },
      { word: "開ける", reading: "あける", meaning: "to open" },
      { word: "見知らぬ", reading: "みしらぬ", meaning: "unfamiliar, unknown" },
      { word: "男", reading: "おとこ", meaning: "man" },
      { word: "立つ", reading: "たつ", meaning: "to stand" },
      { word: "迷う", reading: "まよう", meaning: "to get lost" },
      { word: "旅行", reading: "りょこう", meaning: "travel, trip" },
      { word: "地図", reading: "ちず", meaning: "map" },
      { word: "教える", reading: "おしえる", meaning: "to teach, to tell" },
      { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" },
      { word: "急", reading: "きゅう", meaning: "sudden" },
      { word: "向かう", reading: "むかう", meaning: "to head toward" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n4-45 — 未来の計画 (Planning for the future)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-45",
    title: "未来[みらい]の計画[けいかく]",
    titleReading: "みらいのけいかく",
    level: "N4",
    summary: "Facing two appealing paths after graduation, a student seeks advice and learns not to rush the decision.",
    estMinutes: 5,
    tags: ["future", "decision", "advice", "school"],
    body: [
      "来年[らいねん]、何[なに]をするか考[かんが]えています。",
      "一[ひと]つ目[め]の選択[せんたく]は、大学院[だいがくいん]に行[い]くことです。",
      "もう一[ひと]つは、外国[がいこく]で働[はたら]くことです。",
      "両方[りょうほう]とも興味[きょうみ]があります。",
      "でも、決[き]めるのは難[むずか]しいです。",
      "先週[せんしゅう]、先生[せんせい]に相談[そうだん]しました。",
      "先生[せんせい]は「両方[りょうほう]の良[よ]い所[ところ]を書[か]いて比[くら]べてみて」と言[い]いました。",
      "ニキさんも「焦[あせ]らなくていいよ」と言[い]ってくれました。",
      "ゆっくり考[かんが]えて、来年[らいねん]決[き]めるつもりです。"
    ],
    translation: [
      "I am thinking about what to do next year.",
      "The first option is to go to graduate school.",
      "The other is to work abroad.",
      "I am interested in both.",
      "But deciding is hard.",
      "Last week, I consulted my teacher.",
      "The teacher said, \"Write down the good points of both and compare them.\"",
      "Nikki also told me, \"You don't have to rush.\"",
      "I plan to think carefully and decide next year."
    ],
    vocab: [
      { word: "未来", reading: "みらい", meaning: "future" },
      { word: "計画", reading: "けいかく", meaning: "plan" },
      { word: "考える", reading: "かんがえる", meaning: "to think, to consider" },
      { word: "一つ目", reading: "ひとつめ", meaning: "first (of options)" },
      { word: "選択", reading: "せんたく", meaning: "choice, option" },
      { word: "大学院", reading: "だいがくいん", meaning: "graduate school" },
      { word: "外国", reading: "がいこく", meaning: "foreign country" },
      { word: "働く", reading: "はたらく", meaning: "to work" },
      { word: "両方", reading: "りょうほう", meaning: "both" },
      { word: "興味", reading: "きょうみ", meaning: "interest" },
      { word: "決める", reading: "きめる", meaning: "to decide" },
      { word: "難しい", reading: "むずかしい", meaning: "difficult" },
      { word: "相談", reading: "そうだん", meaning: "consultation" },
      { word: "比べる", reading: "くらべる", meaning: "to compare" },
      { word: "焦る", reading: "あせる", meaning: "to rush, to be impatient" }
    ]
  }
];
