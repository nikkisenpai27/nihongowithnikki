import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. See src/lib/types.ts and furigana.tsx.

export const storiesN4A: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N4 — 新しい仕事 (Starting a new job)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-01",
    title: "新[あたら]しい仕事[しごと]",
    titleReading: "あたらしいしごと",
    level: "N4",
    summary: "Nikki starts a new job at a small Tokyo company and slowly gets used to the work.",
    estMinutes: 4,
    tags: ["work", "slice of life"],
    body: [
      "先週[せんしゅう]、東京[とうきょう]の小[ちい]さい会社[かいしゃ]で働[はたら]くことになりました。",
      "月曜日[げつようび]の朝[あさ]、早[はや]く家[いえ]を出[で]ました。",
      "会社[かいしゃ]の人[ひと]たちが親切[しんせつ]で、たくさん教[おし]えてくれました。",
      "最初[さいしょ]は仕事[しごと]のやり方[かた]が分[わ]かりませんでしたが、先輩[せんぱい]が丁寧[ていねい]に説明[せつめい]してくれました。",
      "毎朝[まいあさ]、電車[でんしゃ]に乗[の]りながら、会社[かいしゃ]のマニュアルを読[よ]むことにしました。",
      "仕事[しごと]は難[むずか]しいですが、少[すこ]しずつ慣[な]れるようになっています。",
      "来月[らいげつ]からは一人[ひとり]で担当[たんとう]できるかもしれません。頑張[がんば]ります。"
    ],
    translation: [
      "Last week, it was decided that I would work at a small company in Tokyo.",
      "On Monday morning, I left home early.",
      "The people at the company were kind and taught me many things.",
      "At first I didn't understand how to do the work, but a senior colleague carefully explained it to me.",
      "Every morning, I decided to read the company manual while riding the train.",
      "The work is difficult, but I'm gradually getting used to it.",
      "From next month I might be able to handle things on my own. I'll do my best."
    ],
    vocab: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "仕事", reading: "しごと", meaning: "work; job" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "働く", reading: "はたらく", meaning: "to work" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "先輩", reading: "せんぱい", meaning: "senior colleague" },
      { word: "説明", reading: "せつめい", meaning: "explanation" },
      { word: "乗る", reading: "のる", meaning: "to ride" },
      { word: "慣れる", reading: "なれる", meaning: "to get used to" },
      { word: "担当", reading: "たんとう", meaning: "to be in charge" },
      { word: "頑張る", reading: "がんばる", meaning: "to do one's best" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 大学生活 (University life)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-02",
    title: "大学生活[だいがくせいかつ]",
    titleReading: "だいがくせいかつ",
    level: "N4",
    summary: "Nikki enters university and adjusts to a busy but enjoyable campus life.",
    estMinutes: 4,
    tags: ["school", "slice of life"],
    body: [
      "今年[ことし]、私[わたし]は大学[だいがく]に入[はい]りました。新[あたら]しい生活[せいかつ]が始[はじ]まります。",
      "キャンパスは広[ひろ]くて、図書館[としょかん]がとても大[おお]きいです。",
      "授業[じゅぎょう]は週[しゅう]に五日[いつか]あります。毎日[まいにち]たくさん勉強[べんきょう]しなければなりません。",
      "友達[ともだち]ができました。一緒[いっしょ]に昼[ひる]ご飯[はん]を食[た]べながら、色[いろ]々な話[はなし]をします。",
      "来週[らいしゅう]は初[はじ]めてのテストがあります。合格[ごうかく]できるかどうか分[わ]かりません。",
      "もし不合格[ふごうかく]になったら、もっと真面目[まじめ]に勉強[べんきょう]するつもりです。",
      "大学生活[だいがくせいかつ]は忙[いそが]しいかもしれませんが、楽[たの]しい日々[ひび]になりそうです。"
    ],
    translation: [
      "This year, I entered university. A new life begins.",
      "The campus is large, and the library is very big.",
      "I have classes five days a week. I have to study a lot every day.",
      "I made friends. While eating lunch together, we talk about various things.",
      "Next week I have my first test. I don't know whether I can pass.",
      "If I fail, I plan to study more seriously.",
      "University life might be busy, but it seems it will become fun days."
    ],
    vocab: [
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "生活", reading: "せいかつ", meaning: "daily life" },
      { word: "今年", reading: "ことし", meaning: "this year" },
      { word: "図書館", reading: "としょかん", meaning: "library" },
      { word: "授業", reading: "じゅぎょう", meaning: "class; lesson" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "昼ご飯", reading: "ひるごはん", meaning: "lunch" },
      { word: "初めて", reading: "はじめて", meaning: "for the first time" },
      { word: "合格", reading: "ごうかく", meaning: "passing (an exam)" },
      { word: "不合格", reading: "ふごうかく", meaning: "failing (an exam)" },
      { word: "真面目", reading: "まじめ", meaning: "serious" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 就職の面接 (A job interview)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-03",
    title: "就職[しゅうしょく]の面接[めんせつ]",
    titleReading: "しゅうしょくのめんせつ",
    level: "N4",
    summary: "Nikki attends her first job interview and tries to answer honestly in her own words.",
    estMinutes: 4,
    tags: ["work", "interview"],
    body: [
      "先週[せんしゅう]の水曜日[すいようび]、面接[めんせつ]を受[う]けに行[い]きました。",
      "前[まえ]の晩[ばん]、服[ふく]を準備[じゅんび]して、早[はや]く寝[ね]ることにしました。",
      "会社[かいしゃ]に着[つ]いた時[とき]、緊張[きんちょう]していました。でも、受付[うけつけ]の人[ひと]が優[やさ]しくて、少[すこ]し安心[あんしん]しました。",
      "面接官[めんせつかん]は三人[さんにん]でした。質問[しつもん]がたくさんありました。",
      "「どうしてこの会社[かいしゃ]を選[えら]びましたか」と聞[き]かれました。正直[しょうじき]に答[こた]えました。",
      "答[こた]えながら、自分[じぶん]の言葉[ことば]で話[はな]すようにしました。",
      "面接[めんせつ]が終[お]わった後[あと]、手紙[てがみ]を書[か]くことにしました。結果[けっか]を待[ま]つ間[あいだ]も頑張[がんば]ります。"
    ],
    translation: [
      "Last Wednesday, I went to attend an interview.",
      "The night before, I prepared my clothes and decided to sleep early.",
      "When I arrived at the company, I was nervous. But the receptionist was kind, and I felt a bit relieved.",
      "There were three interviewers. There were many questions.",
      "I was asked, \"Why did you choose this company?\" I answered honestly.",
      "While answering, I tried to speak in my own words.",
      "After the interview finished, I decided to write a letter. I'll keep doing my best while waiting for the result."
    ],
    vocab: [
      { word: "面接", reading: "めんせつ", meaning: "interview" },
      { word: "就職", reading: "しゅうしょく", meaning: "job hunting" },
      { word: "水曜日", reading: "すいようび", meaning: "Wednesday" },
      { word: "受ける", reading: "うける", meaning: "to take (an interview)" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "緊張", reading: "きんちょう", meaning: "nervous" },
      { word: "受付", reading: "うけつけ", meaning: "reception" },
      { word: "安心", reading: "あんしん", meaning: "relief" },
      { word: "質問", reading: "しつもん", meaning: "question" },
      { word: "選ぶ", reading: "えらぶ", meaning: "to choose" },
      { word: "正直", reading: "しょうじき", meaning: "honest" },
      { word: "結果", reading: "けっか", meaning: "result" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 一人暮らし (Living alone)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-04",
    title: "一人暮[ひとりぐ]らし",
    titleReading: "ひとりぐらし",
    level: "N4",
    summary: "Nikki begins living alone and learns to cook, clean, and enjoy the quiet life.",
    estMinutes: 4,
    tags: ["slice of life", "independent living"],
    body: [
      "四月[しがつ]から一人暮[ひとりぐ]らしを始[はじ]めました。",
      "アパートは小[ちい]さいですが、静[しず]かで気[き]に入[い]っています。",
      "最初[さいしょ]は料理[りょうり]ができませんでした。でも、最近[さいきん]は少[すこ]しずつ上手[じょうず]になっています。",
      "毎晩[まいばん]、自分[じぶん]で料理[りょうり]を作[つく]りながら、音楽[おんがく]を聞[き]いています。",
      "掃除[そうじ]も洗濯[せんたく]も自分[じぶん]でしなければなりません。",
      "一人[ひとり]で暮[く]らすと、自由[じゆう]ですが、たまに寂[さび]しいかもしれません。",
      "でも、この生活[せいかつ]は私[わたし]に合[あ]っているように思[おも]います。"
    ],
    translation: [
      "From April, I started living alone.",
      "The apartment is small, but it's quiet and I like it.",
      "At first I couldn't cook. But lately, I'm gradually getting better.",
      "Every evening, while making my own meal, I listen to music.",
      "I have to do the cleaning and laundry myself.",
      "Living alone is free, but it might be lonely sometimes.",
      "But I think this lifestyle suits me."
    ],
    vocab: [
      { word: "一人暮らし", reading: "ひとりぐらし", meaning: "living alone" },
      { word: "四月", reading: "しがつ", meaning: "April" },
      { word: "始める", reading: "はじめる", meaning: "to start" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "気に入る", reading: "きにいる", meaning: "to like; be pleased with" },
      { word: "料理", reading: "りょうり", meaning: "cooking" },
      { word: "上手", reading: "じょうず", meaning: "good at" },
      { word: "音楽", reading: "おんがく", meaning: "music" },
      { word: "掃除", reading: "そうじ", meaning: "cleaning" },
      { word: "洗濯", reading: "せんたく", meaning: "laundry" },
      { word: "自由", reading: "じゆう", meaning: "free; freedom" },
      { word: "寂しい", reading: "さびしい", meaning: "lonely" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 難しいお客さん (A difficult customer)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-05",
    title: "難[むずか]しいお客[きゃく]さん",
    titleReading: "むずかしいおきゃくさん",
    level: "N4",
    summary: "Nikki helps a vague customer at the bookstore and learns the value of honesty.",
    estMinutes: 4,
    tags: ["work", "communication"],
    body: [
      "私[わたし]は本屋[ほんや]で働[はたら]いています。先週[せんしゅう]、少[すこ]し難[むずか]しいお客[きゃく]さんが来[き]ました。",
      "お客[きゃく]さんは「あの本[ほん]はありますか」と聞[き]きました。でも、名前[なまえ]を言[い]いませんでした。",
      "私[わたし]は「どんな本[ほん]ですか」と聞[き]きました。表紙[ひょうし]の色[いろ]だけ教[おし]えてくれました。",
      "もし分[わ]からなかったら、困[こま]ると思[おも]いました。でも、静[しず]かに話[はなし]を聞[き]くことにしました。",
      "たくさん探[さが]しましたが、見[み]つかりませんでした。",
      "「ありません」と言[い]ったら、お客[きゃく]さんは怒[おこ]るかもしれません。でも、正直[しょうじき]に言[い]いました。",
      "すると、お客[きゃく]さんは「ありがとう、また来[き]ます」と言[い]って帰[かえ]りました。",
      "正直[しょうじき]に話[はな]すことが一番[いちばん]大切[たいせつ]だと分[わ]かりました。"
    ],
    translation: [
      "I work at a bookstore. Last week, a somewhat difficult customer came in.",
      "The customer asked, \"Do you have that book?\" But he didn't say the name.",
      "I asked, \"What kind of book is it?\" He only told me the color of the cover.",
      "I thought if I couldn't figure it out, I'd be in trouble. But I decided to listen quietly.",
      "I searched a lot, but couldn't find it.",
      "If I said \"We don't have it,\" the customer might get angry. But I said it honestly.",
      "Then the customer said, \"Thank you, I'll come again,\" and left.",
      "I learned that speaking honestly is the most important thing."
    ],
    vocab: [
      { word: "本屋", reading: "ほんや", meaning: "bookstore" },
      { word: "働く", reading: "はたらく", meaning: "to work" },
      { word: "お客さん", reading: "おきゃくさん", meaning: "customer" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "表紙", reading: "ひょうし", meaning: "cover (of a book)" },
      { word: "探す", reading: "さがす", meaning: "to search" },
      { word: "見つかる", reading: "みつかる", meaning: "to be found" },
      { word: "怒る", reading: "おこる", meaning: "to get angry" },
      { word: "正直", reading: "しょうじき", meaning: "honest" },
      { word: "大切", reading: "たいせつ", meaning: "important" },
      { word: "一番", reading: "いちばん", meaning: "the most" },
      { word: "帰る", reading: "かえる", meaning: "to go home" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 海外旅行の計画 (Planning a trip abroad)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-06",
    title: "海外旅行[かいがいりょこう]の計画[けいかく]",
    titleReading: "かいがいりょこうのけいかく",
    level: "N4",
    summary: "Nikki plans her first overseas trip to Korea with a friend.",
    estMinutes: 4,
    tags: ["travel", "planning"],
    body: [
      "来月[らいげつ]、友達[ともだち]と一緒[いっしょ]に韓国[かんこく]へ行[い]く予定[よてい]です。",
      "飛行機[ひこうき]のチケットはもう予約[よやく]しました。でも、ホテルはまだです。",
      "ホテルは駅[えき]の近[ちか]くにした方[ほう]がいいと思[おも]います。もし遠[とお]かったら、大変[たいへん]だからです。",
      "友達[ともだち]は「美味[おい]しいものをたくさん食[た]べたい」と言[い]っています。",
      "私[わたし]たちは毎日[まいにち]、計画[けいかく]を立[た]てながら、地図[ちず]を見[み]ています。",
      "旅[たび]の言葉[ことば]を少[すこ]し勉強[べんきょう]するようにしています。そうすれば、もっと楽[たの]しめるかもしれません。",
      "初[はじ]めての海外旅行[かいがいりょこう]なので、とても楽[たの]しみです。"
    ],
    translation: [
      "Next month, I plan to go to Korea with a friend.",
      "I've already booked the plane tickets. But not the hotel yet.",
      "I think it's better to choose a hotel near the station. Because if it's far, it would be tough.",
      "My friend says, \"I want to eat a lot of delicious things.\"",
      "Every day, while making plans, we look at the map.",
      "I'm trying to study a bit of travel language. If I do, I might enjoy it more.",
      "It's my first overseas trip, so I'm really looking forward to it."
    ],
    vocab: [
      { word: "海外旅行", reading: "かいがいりょこう", meaning: "overseas trip" },
      { word: "計画", reading: "けいかく", meaning: "plan" },
      { word: "韓国", reading: "かんこく", meaning: "Korea" },
      { word: "予定", reading: "よてい", meaning: "schedule; plan" },
      { word: "飛行機", reading: "ひこうき", meaning: "airplane" },
      { word: "予約", reading: "よやく", meaning: "reservation" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "近く", reading: "ちかく", meaning: "nearby" },
      { word: "大変", reading: "たいへん", meaning: "tough; difficult" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "地図", reading: "ちず", meaning: "map" },
      { word: "楽しみ", reading: "たのしみ", meaning: "looking forward to" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 大学の文化祭 (A cultural festival)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-07",
    title: "大学[だいがく]の文化祭[ぶんかさい]",
    titleReading: "だいがくのぶんかさい",
    level: "N4",
    summary: "Nikki's class prepares an okonomiyaki stall for the university cultural festival.",
    estMinutes: 4,
    tags: ["school", "festival"],
    body: [
      "来週[らいしゅう]の週末[しゅうまつ]、大学[だいがく]で文化祭[ぶんかさい]があります。",
      "私[わたし]たちのクラスは、お好[この]み焼[や]きの店[みせ]を出[だ]すことになりました。",
      "準備[じゅんび]は大変[たいへん]ですが、みんなで協力[きょうりょく]しながら作[つく]っています。",
      "私[わたし]は看板[かんばん]を書[か]くことになりました。絵[え]を描[か]くのは好[す]きですから。",
      "もし天気[てんき]が良[よ]かったら、外[そと]で食[た]べる人[ひと]も多[おお]いかもしれません。",
      "みんなに「美味[おい]しい」と言[い]ってもらえるように、練習[れんしゅう]しています。",
      "文化祭[ぶんかさい]が終[お]わったら、写真[しゃしん]を見[み]ながら思[おも]い出[で]を話[はな]すつもりです。"
    ],
    translation: [
      "Next weekend, there will be a cultural festival at the university.",
      "Our class decided to run an okonomiyaki stall.",
      "Preparation is tough, but we're making it while cooperating together.",
      "I was assigned to write the signboard. Because I like drawing pictures.",
      "If the weather is good, there might be many people eating outside.",
      "We're practicing so that everyone will say \"It's delicious.\"",
      "After the festival finishes, I plan to look at photos and talk about memories."
    ],
    vocab: [
      { word: "文化祭", reading: "ぶんかさい", meaning: "cultural festival" },
      { word: "週末", reading: "しゅうまつ", meaning: "weekend" },
      { word: "お好み焼き", reading: "おこのみやき", meaning: "okonomiyaki" },
      { word: "店", reading: "みせ", meaning: "shop; stall" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "協力", reading: "きょうりょく", meaning: "cooperation" },
      { word: "看板", reading: "かんばん", meaning: "signboard" },
      { word: "絵", reading: "え", meaning: "picture" },
      { word: "描く", reading: "かく", meaning: "to draw" },
      { word: "天気", reading: "てんき", meaning: "weather" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "思い出", reading: "おもいで", meaning: "memory" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 小説を読む (Reading a novel)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-08",
    title: "小説[しょうせつ]を読[よ]む",
    titleReading: "しょうせつをよむ",
    level: "N4",
    summary: "Nikki reads her first Japanese novel and finds her understanding slowly growing.",
    estMinutes: 4,
    tags: ["reading", "language learning"],
    body: [
      "最近[さいきん]、日本[にほん]の小説[しょうせつ]を読[よ]み始[はじ]めました。",
      "最初[さいしょ]は漢字[かんじ]が多[おお]くて難[むずか]しかったです。でも、毎日[まいにち]少[すこ]しずつ読[よ]むようにしました。",
      "辞書[じしょ]で言葉[ことば]を調[しら]べながら、ゆっくり読[よ]んでいます。",
      "物語[ものがたり]は少[すこ]し悲[かな]しいですが、心[こころ]に残[のこ]る言葉[ことば]がたくさんあります。",
      "読[よ]んでいるうちに、少[すこ]しずつ日本語[にほんご]が分[わ]かるようになってきました。",
      "来月[らいげつ]には、もう一冊[いっさつ]読[よ]めるかもしれません。",
      "本[ほん]を読[よ]むことは、私[わたし]にとって大切[たいせつ]な時間[じかん]になったようです。"
    ],
    translation: [
      "Lately, I started reading a Japanese novel.",
      "At first it was difficult because there were many kanji. But I made sure to read a little every day.",
      "While looking up words in the dictionary, I'm reading slowly.",
      "The story is a bit sad, but there are many words that stay in the heart.",
      "While reading, I've gradually come to understand Japanese better.",
      "By next month, I might be able to read another book.",
      "Reading books seems to have become an important time for me."
    ],
    vocab: [
      { word: "小説", reading: "しょうせつ", meaning: "novel" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "最近", reading: "さいきん", meaning: "recently" },
      { word: "漢字", reading: "かんじ", meaning: "kanji" },
      { word: "辞書", reading: "じしょ", meaning: "dictionary" },
      { word: "言葉", reading: "ことば", meaning: "word; language" },
      { word: "調べる", reading: "しらべる", meaning: "to look up" },
      { word: "物語", reading: "ものがたり", meaning: "story; tale" },
      { word: "悲しい", reading: "かなしい", meaning: "sad" },
      { word: "心", reading: "こころ", meaning: "heart" },
      { word: "残る", reading: "のこる", meaning: "to remain" },
      { word: "大切", reading: "たいせつ", meaning: "important" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — うるさい隣の人 (The noisy neighbor)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-09",
    title: "うるさい隣[となり]の人[ひと]",
    titleReading: "うるさいとなりのひと",
    level: "N4",
    summary: "Nikki deals with a noisy neighbor by writing a polite letter instead of getting angry.",
    estMinutes: 4,
    tags: ["neighbors", "communication"],
    body: [
      "最近[さいきん]、隣[となり]の部屋[へや]の人[ひと]が夜[よる]遅[おそ]くまで音楽[おんがく]を聞[き]いています。",
      "私[わたし]は寝[ね]る前[まえ]、静[しず]かにしたいんです。でも、なかなか眠[ねむ]れません。",
      "先週[せんしゅう]、一度[いちど]静[しず]かにしてもらいました。でも、また始[はじ]まりました。",
      "もう一度[いちど]、話[はな]してみることにしました。怒[おこ]っても、上手[うま]くいかないかもしれませんから。",
      "だから、今度[こんど]は手紙[てがみ]を書[か]くことにしました。丁寧[ていねい]に、自分[じぶん]の気持[きも]ちを書[か]きました。",
      "翌日[よくじつ]、隣[となり]の人[ひと]は「すみません」と謝[あやま]ってくれました。それからは静[しず]かになりました。",
      "怒[おこ]る前[まえ]に、言葉[ことば]で伝[つた]えることが大切[たいせつ]だと分[わ]かりました。"
    ],
    translation: [
      "Lately, the person in the next room listens to music late into the night.",
      "I want it quiet before sleeping. But I can't fall asleep.",
      "Last week, I asked them once to be quiet. But it started again.",
      "I decided to try talking once more. Because even if I get angry, it might not go well.",
      "So, this time I decided to write a letter. I wrote my feelings politely.",
      "The next day, the neighbor apologized saying, \"I'm sorry.\" Since then it's been quiet.",
      "I learned that before getting angry, conveying with words is important."
    ],
    vocab: [
      { word: "隣", reading: "となり", meaning: "next door" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "遅く", reading: "おそく", meaning: "late" },
      { word: "音楽", reading: "おんがく", meaning: "music" },
      { word: "寝る", reading: "ねる", meaning: "to sleep" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "眠れる", reading: "ねむれる", meaning: "to be able to sleep" },
      { word: "怒る", reading: "おこる", meaning: "to get angry" },
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "丁寧", reading: "ていねい", meaning: "polite" },
      { word: "翌日", reading: "よくじつ", meaning: "next day" },
      { word: "謝る", reading: "あやまって", meaning: "to apologize" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 料理を習う (Learning to cook properly)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-10",
    title: "料理[りょうり]を習[なら]う",
    titleReading: "りょうりをならう",
    level: "N4",
    summary: "Nikki joins a Saturday cooking class and slowly becomes able to cook on her own.",
    estMinutes: 4,
    tags: ["cooking", "learning"],
    body: [
      "最近[さいきん]、料理教室[りょうりきょうしつ]に通[かよ]い始[はじ]めました。毎週[まいしゅう]土曜日[どようび]のクラスです。",
      "先生[せんせい]はとても上手[じょうず]で、優[やさ]しい人[ひと]です。まず、包丁[ほうちょう]の使[つか]い方[かた]を教[おし]えてくれました。",
      "最初[さいしょ]は危[あぶ]なくて、とても緊張[きんちょう]しました。",
      "でも、先生[せんせい]がそばにいて、見[み]ながら教[おし]えてくれるので、安心[あんしん]です。",
      "今[いま]は、簡単[かんたん]な料理[りょうり]なら一人[ひとり]で作[つく]れるようになりました。",
      "来月[らいげつ]は、家族[かぞく]に料理[りょうり]を作[つく]ってあげるつもりです。きっと喜[よろこ]ぶかもしれません。",
      "料理[りょうり]ができるようになると、生活[せいかつ]がもっと楽[たの]しくなると思[おも]いました。"
    ],
    translation: [
      "Lately, I started going to a cooking class. It's a class every Saturday.",
      "The teacher is very skilled and a kind person. First, she taught me how to use a kitchen knife.",
      "At first it was dangerous, and I was very nervous.",
      "But the teacher is beside me, teaching while watching, so I feel safe.",
      "Now, I can make simple dishes on my own.",
      "Next month, I plan to cook for my family. They might be really happy.",
      "I thought that once I can cook, life becomes more fun."
    ],
    vocab: [
      { word: "料理", reading: "りょうり", meaning: "cooking" },
      { word: "習う", reading: "ならう", meaning: "to learn" },
      { word: "料理教室", reading: "りょうりきょうしつ", meaning: "cooking class" },
      { word: "通う", reading: "かよう", meaning: "to commute (to class)" },
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "上手", reading: "じょうず", meaning: "skilled" },
      { word: "包丁", reading: "ほうちょう", meaning: "kitchen knife" },
      { word: "使い方", reading: "つかいかた", meaning: "way of using" },
      { word: "危ない", reading: "あぶない", meaning: "dangerous" },
      { word: "緊張", reading: "きんちょう", meaning: "nervous" },
      { word: "簡単", reading: "かんたん", meaning: "simple" },
      { word: "家族", reading: "かぞく", meaning: "family" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 古い友情 (An old friendship rekindled)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-11",
    title: "古[ふる]い友情[ゆうじょう]",
    titleReading: "ふるいゆうじょう",
    level: "N4",
    summary: "Nikki reunites with a high school friend after ten years and decides to meet monthly.",
    estMinutes: 4,
    tags: ["friendship", "reunion"],
    body: [
      "高校時代[こうこうじだい]の友達[ともだち]と、十年[じゅうねん]ぶりに会[あ]うことになりました。",
      "彼女[かのじょ]は今[いま]、大阪[おおさか]に住[す]んでいます。私[わたし]はずっと東京[とうきょう]にいました。",
      "待[ま]ち合[あ]わせの場所[ばしょ]で、彼女[かのじょ]を見[み]つけた時[とき]、すぐに分[わ]かりました。",
      "でも、少[すこ]し変[か]わっていました。髪[かみ]が短[みじか]くなって、大人[おとな]っぽくなりました。",
      "一緒[いっしょ]に食事[しょくじ]をしながら、昔[むかし]の話[はなし]で盛[も]り上[あ]がりました。",
      "もし連絡[れんらく]を取[と]っていなかったら、この日[ひ]は来[こ]なかったかもしれません。",
      "来月[らいげつ]からは、毎月[まいつき]一度[いちど]会[あ]うことにしました。大切[たいせつ]な友情[ゆうじょう]ですから。"
    ],
    translation: [
      "I was to meet a high school friend for the first time in ten years.",
      "She now lives in Osaka. I had been in Tokyo all along.",
      "When I found her at the meeting place, I recognized her right away.",
      "But she had changed a bit. Her hair was shorter, and she looked more grown up.",
      "While having a meal together, we got excited about old stories.",
      "If we hadn't kept in touch, this day might not have come.",
      "From next month, we decided to meet once a month. Because it's a precious friendship."
    ],
    vocab: [
      { word: "友情", reading: "ゆうじょう", meaning: "friendship" },
      { word: "高校時代", reading: "こうこうじだい", meaning: "high school days" },
      { word: "十年", reading: "じゅうねん", meaning: "ten years" },
      { word: "大阪", reading: "おおさか", meaning: "Osaka" },
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "待ち合わせ", reading: "まちあわせ", meaning: "meeting appointment" },
      { word: "場所", reading: "ばしょ", meaning: "place" },
      { word: "髪", reading: "かみ", meaning: "hair" },
      { word: "短い", reading: "みじかい", meaning: "short" },
      { word: "大人", reading: "おとな", meaning: "adult" },
      { word: "食事", reading: "しょくじ", meaning: "meal" },
      { word: "連絡", reading: "れんらく", meaning: "contact" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 雨の夜の通勤 (A rainy evening commute)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-12",
    title: "雨[あめ]の夜[よる]の通勤[つうきん]",
    titleReading: "あめのよるのつうきん",
    level: "N4",
    summary: "Nikki gets caught in heavy rain after work and runs to the station with a colleague.",
    estMinutes: 4,
    tags: ["weather", "commute"],
    body: [
      "昨日[きのう]の夜[よる]、仕事[しごと]が終[お]わった時[とき]、外[そと]は大雨[おおあめ]でした。",
      "傘[かさ]を持[も]っていなかったので、困[こま]ってしまいました。",
      "もし電車[でんしゃ]に乗[の]れなかったら、タクシーを使[つか]うかもしれません。でも、高[たか]いんです。",
      "同僚[どうりょう]が「一緒[いっしょ]に駅[えき]まで走[はし]りましょう」と言[い]ってくれました。",
      "二人[ふたり]で傘[かさ]もないまま、雨[あめ]の中[なか]を走[はし]りました。服[ふく]が濡[ぬ]れてしまいました。",
      "駅[えき]に着[つ]いた時[とき]、私[わたし]たちはお互[たが]いに見[み]て、笑[わら]ってしまいました。",
      "雨[あめ]の夜[よる]でしたが、温[あたた]かい気持[きも]ちになれました。"
    ],
    translation: [
      "Yesterday evening, when work finished, outside was heavy rain.",
      "I hadn't brought an umbrella, so I ended up in trouble.",
      "If I couldn't get on the train, I might take a taxi. But it's expensive.",
      "A colleague said, \"Let's run to the station together.\"",
      "Without umbrellas, the two of us ran through the rain. Our clothes got wet.",
      "When we arrived at the station, we looked at each other and ended up laughing.",
      "It was a rainy evening, but I was able to feel warm in heart."
    ],
    vocab: [
      { word: "雨", reading: "あめ", meaning: "rain" },
      { word: "夜", reading: "よる", meaning: "night" },
      { word: "通勤", reading: "つうきん", meaning: "commute" },
      { word: "大雨", reading: "おおあめ", meaning: "heavy rain" },
      { word: "傘", reading: "かさ", meaning: "umbrella" },
      { word: "困る", reading: "こまる", meaning: "to be in trouble" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "服", reading: "ふく", meaning: "clothes" },
      { word: "濡れる", reading: "ぬれる", meaning: "to get wet" },
      { word: "笑う", reading: "わらう", meaning: "to laugh" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 美術館へ行く (Visiting a museum)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-13",
    title: "美術館[びじゅつかん]へ行[い]く",
    titleReading: "びじゅつかんへいく",
    level: "N4",
    summary: "Nikki visits an art museum with a friend and finds a painting that stays in her heart.",
    estMinutes: 4,
    tags: ["art", "outing"],
    body: [
      "日曜日[にちようび]、友達[ともだち]と一緒[いっしょ]に美術館[びじゅつかん]へ行[い]きました。",
      "美術館[びじゅつかん]は静[しず]かで、空気[くうき]が綺麗[きれい]でした。窓[まど]から光[ひかり]が入[はい]っていました。",
      "たくさんの絵[え]がありました。特[とく]に、海[うみ]の絵[え]が心[こころ]に残[のこ]りました。",
      "私[わたし]たちは絵[え]を見[み]ながら、お互[たが]いの感想[かんそう]を話[はな]し合[あ]いました。",
      "解説[かいせつ]を読[よ]むと、絵[え]の意味[いみ]がもっと分[わ]かるようになりました。",
      "来月[らいげつ]、別[べつ]の展覧会[てんらんかい]があるかもしれません。もし時間[じかん]があったら、また行[い]きたいです。",
      "美術館[びじゅつかん]に行[い]くと、心[こころ]が落[お]ち着[つ]くようになります。これからも時々[ときどき]行[い]くつもりです。"
    ],
    translation: [
      "On Sunday, I went to an art museum with a friend.",
      "The museum was quiet, and the air felt clean. Light came in through the windows.",
      "There were many paintings. Especially, the painting of the sea stayed in my heart.",
      "While looking at the paintings, we discussed our impressions with each other.",
      "When I read the explanation, I came to understand the meaning of the paintings more.",
      "Next month, there might be another exhibition. If I have time, I want to go again.",
      "When I go to the museum, my heart becomes calm. I plan to go sometimes from now on too."
    ],
    vocab: [
      { word: "美術館", reading: "びじゅつかん", meaning: "art museum" },
      { word: "日曜日", reading: "にちようび", meaning: "Sunday" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "空気", reading: "くうき", meaning: "air" },
      { word: "綺麗", reading: "きれい", meaning: "beautiful; clean" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "光", reading: "ひかり", meaning: "light" },
      { word: "特に", reading: "とくに", meaning: "especially" },
      { word: "海", reading: "うみ", meaning: "sea" },
      { word: "感想", reading: "かんそう", meaning: "impression" },
      { word: "解説", reading: "かいせつ", meaning: "explanation" },
      { word: "展覧会", reading: "てんらんかい", meaning: "exhibition" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 小さな誤解 (A small misunderstanding)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-14",
    title: "小[ちい]さな誤解[ごかい]",
    titleReading: "ちいさなごかい",
    level: "N4",
    summary: "A short email causes a small misunderstanding between Nikki and a colleague.",
    estMinutes: 4,
    tags: ["work", "communication"],
    body: [
      "先週[せんしゅう]、同僚[どうりょう]と少[すこ]し誤解[ごかい]がありました。",
      "私[わたし]が送[おく]ったメールの言葉[ことば]が少[すこ]し冷[つめ]たかったようです。",
      "彼[かれ]は「怒[おこ]っているのかな」と思[おも]ったそうです。でも、私[わたし]はただ忙[いそが]しかっただけです。",
      "翌日[よくじつ]、彼[かれ]から「どうしたの」と聞[き]かれました。その時[とき]、やっと分[わ]かりました。",
      "もし聞[き]いていなかったら、この誤解[ごかい]はずっと続[つづ]いていたかもしれません。",
      "私[わたし]は正直[しょうじき]に「ごめんなさい、忙[いそが]しかっただけです」と説明[せつめい]しました。",
      "彼[かれ]は笑[わら]って「分[わ]かった」と言[い]ってくれました。",
      "小[ちい]さなことでも、言葉[ことば]で伝[つた]えるようにしようと思[おも]いました。"
    ],
    translation: [
      "Last week, there was a small misunderstanding with a colleague.",
      "It seems the words in the email I sent were a bit cold.",
      "He thought, \"Maybe she's angry,\" I heard. But I was just busy.",
      "The next day, he asked me, \"What's wrong?\" Then I finally understood.",
      "If he hadn't asked, this misunderstanding might have continued forever.",
      "I honestly explained, \"I'm sorry, I was just busy.\"",
      "He smiled and said, \"I understand.\"",
      "I thought, even small things, I should try to convey with words."
    ],
    vocab: [
      { word: "誤解", reading: "ごかい", meaning: "misunderstanding" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "送る", reading: "おくる", meaning: "to send" },
      { word: "冷たい", reading: "つめたい", meaning: "cold" },
      { word: "怒る", reading: "おこる", meaning: "to get angry" },
      { word: "翌日", reading: "よくじつ", meaning: "next day" },
      { word: "続く", reading: "つづく", meaning: "to continue" },
      { word: "正直", reading: "しょうじき", meaning: "honest" },
      { word: "説明", reading: "せつめい", meaning: "explanation" },
      { word: "笑う", reading: "わらう", meaning: "to laugh; smile" },
      { word: "伝える", reading: "つたえる", meaning: "to convey" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 試験の準備 (Preparing for an exam)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-15",
    title: "試験[しけん]の準備[じゅんび]",
    titleReading: "しけんのじゅんび",
    level: "N4",
    summary: "Nikki prepares for next month's Japanese exam with a steady study routine.",
    estMinutes: 4,
    tags: ["study", "exam"],
    body: [
      "来月[らいげつ]、日本語[にほんご]の試験[しけん]があります。だから、毎日[まいにち]勉強[べんきょう]しています。",
      "まず、文法[ぶんぽう]を復習[ふくしゅう]することにしました。文法[ぶんぽう]は一番[いちばん]大切[たいせつ]だと思[おも]うからです。",
      "毎晩[まいばん]、単語[たんご]を三十個[さんじゅっこ]ずつ覚[おぼ]えるようにしています。",
      "もし時間[じかん]があったら、過去問[かこもん]も解[と]くつもりです。",
      "勉強[べんきょう]しながら、好[す]きなお茶[ちゃ]を飲[の]むようにしています。そうすると、リラックスできるからです。",
      "時々[ときどき]、友達[ともだち]と一緒[いっしょ]に勉強[べんきょう]します。分[わ]からない所[ところ]は教[おし]え合[あ]います。",
      "試験[しけん]に合格[ごうかく]できるかどうか分[わ]かりませんが、最後[さいご]まで頑張[がんば]るつもりです。"
    ],
    translation: [
      "Next month, I have a Japanese exam. So I'm studying every day.",
      "First, I decided to review grammar. Because I think grammar is the most important.",
      "Every night, I try to memorize thirty vocabulary words at a time.",
      "If I have time, I plan to solve past exam questions too.",
      "While studying, I try to drink my favorite tea. Doing so helps me relax.",
      "Sometimes I study with a friend. We teach each other the parts we don't understand.",
      "I don't know whether I can pass the exam, but I plan to do my best until the end."
    ],
    vocab: [
      { word: "試験", reading: "しけん", meaning: "exam" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "日本語", reading: "にほんご", meaning: "Japanese language" },
      { word: "勉強", reading: "べんきょう", meaning: "study" },
      { word: "文法", reading: "ぶんぽう", meaning: "grammar" },
      { word: "復習", reading: "ふくしゅう", meaning: "review" },
      { word: "単語", reading: "たんご", meaning: "vocabulary word" },
      { word: "覚える", reading: "おぼえる", meaning: "to memorize" },
      { word: "過去問", reading: "かこもん", meaning: "past exam questions" },
      { word: "解く", reading: "とく", meaning: "to solve" },
      { word: "教え合う", reading: "おしえあう", meaning: "to teach each other" },
      { word: "合格", reading: "ごうかく", meaning: "passing (an exam)" }
    ]
  }
];
