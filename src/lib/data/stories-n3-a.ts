import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN3A: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 新しい仕事 (A new job)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-01",
    title: "新[あたら]しい仕事[しごと]",
    titleReading: "あたらしいしごと",
    level: "N3",
    summary: "Nikki starts a new job at a Tokyo design firm and learns to balance unfamiliar tasks with supportive colleagues.",
    estMinutes: 5,
    tags: ["work", "beginnings"],
    body: [
      "先週[せんしゅう]から、都内[とない]のデザイン会社[かいしゃ]で働[はたら]き始[はじ]めました。長年[ながねん]望[のぞ]んでいたチャンスがついに巡[めぐ]ってきたのです。",
      "入社初日[にゅうしゃしょにち]、緊張[きんちょう]しながら受付[うけつけ]を済[す]ませると、担当[たんとう]の先輩[せんぱい]が笑顔[えがお]で迎[むか]えてくれました。",
      "任[まか]された仕事[しごと]は、想像[そうぞう]していたより難[むずか]しく、初[はじ]めは失敗[しっぱい]ばかりしていました。",
      "それでも、先輩[せんぱい]が一[ひと]つ一[ひと]つ丁寧[ていねい]に教[おし]えてくれるおかげで、少[すこ]しずつ自信[じしん]が持[も]てるようになりました。",
      "同僚[どうりょう]たちとは昼休[ひるやす]みに一緒[いっしょ]に食事[しょくじ]をすることが多[おお]く、自然[しぜん]に打[う]ち解[と]けるようになりました。",
      "一方[いっぽう]で、毎晩[まいばん]資料[しりょう]を読[よ]み込[こ]む日[ひ]々が続[つづ]き、慣[な]れるまでにはもう少[すこ]し時間[じかん]がかかりそうです。",
      "けれど、新[あたら]しい環境[かんきょう]に身[み]を置[お]くことで自分[じぶん]も成長[せいちょう]できる気[き]がして、毎朝[まいあさ]気持[きも]ちを引[ひ]き締[し]めて出[で]かけています。"
    ],
    translation: [
      "Since last week, I started working at a design firm in central Tokyo. A chance I had hoped for, for years, had finally come around.",
      "On my first day, I completed reception while feeling nervous, and the senior colleague in charge welcomed me with a smile.",
      "The work entrusted to me was harder than I had imagined, and at first I kept making mistakes one after another.",
      "Even so, thanks to my senior teaching me carefully step by step, I gradually came to feel more confident.",
      "I often have lunch with my colleagues, and we naturally grew closer.",
      "On the other hand, the days of poring over documents every night continue, and it seems it will take a little more time to get used to things.",
      "But I feel that by placing myself in a new environment I too can grow, so every morning I brace myself and head out."
    ],
    vocab: [
      { word: "新しい", reading: "あたらしい", meaning: "new" },
      { word: "仕事", reading: "しごと", meaning: "work; job" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "働く", reading: "はたらく", meaning: "to work" },
      { word: "先週", reading: "せんしゅう", meaning: "last week" },
      { word: "緊張", reading: "きんちょう", meaning: "nervousness" },
      { word: "先輩", reading: "せんぱい", meaning: "senior colleague" },
      { word: "想像", reading: "そうぞう", meaning: "imagination" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "慣れる", reading: "なれる", meaning: "to get used to" },
      { word: "担当", reading: "たんとう", meaning: "in charge" },
      { word: "資料", reading: "しりょう", meaning: "materials" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 文化祭の日 (A cultural festival)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-02",
    title: "文化祭[ぶんかさい]の日[ひ]",
    titleReading: "ぶんかさいのひ",
    level: "N3",
    summary: "Nikki helps prepare a class booth for the university cultural festival and finds unexpected joy in teamwork.",
    estMinutes: 5,
    tags: ["school", "festival"],
    body: [
      "今週[こんしゅう]末[まつ]、大学[だいがく]の文化祭[ぶんかさい]が開[ひら]かれることになりました。私[わたし]たちの学科[がっか]は抹茶[まっちゃ]カフェを出[で]すことになっています。",
      "準備[じゅんび]は一[いっ]ヶ月[かげつ]前[まえ]から始[はじ]まり、教室[きょうしつ]の装飾[そうしょく]からメニューの考案[こうあん]まで、すべて学生[がくせい]の手[て]で進[すす]められました。",
      "私[わたし]は受付[うけつけ]と案内[あんない]を担当[たんとう]することになり、前日[ぜんじつ]は遅[おそ]くまで看板[かんばん]を書[か]いていました。",
      "当日[とうじつ]、天気[てんき]に恵[めぐ]まれたおかげで、予想[よそう]より多[おお]くのお客[きゃく]さんが来[き]てくれました。",
      "忙[いそが]しい合間[あいま]に、友達[ともだち]と交代[こうたい]で他[ほか]の学科[がっか]の屋台[やたい]を回[まわ]りました。どれも工夫[くふう]されていて、感心[かんしん]するばかりでした。",
      "閉会[へいかい]後[ご]、片付[かたづ]けが終[お]わると、クラス全員[ぜんいん]で拍手[はくしゅ]し合[あ]いました。疲[つか]れたけれど、達成感[たっせいかん]で胸[むね]がいっぱいでした。",
      "来年[らいねん]もまた、この仲間[なかま]たちと何[なに]かを一[ひと]つに作[つく]り上[あ]げたいと強[つよ]く思[おも]った一日[いちにち]でした。"
    ],
    translation: [
      "This weekend, the university cultural festival will be held. Our department is set to run a matcha café.",
      "Preparation began a month ago, and everything from classroom decoration to menu planning was carried out by students themselves.",
      "I was assigned to reception and guiding, and the day before I was writing signs until late.",
      "On the day, thanks to good weather, more guests came than expected.",
      "In between busy moments, friends and I took turns visiting other departments' stalls. Each was cleverly done, and I was nothing but impressed.",
      "After the closing, when cleanup was done, the whole class applauded each other. We were tired, but our hearts were full of accomplishment.",
      "It was a day that made me strongly wish to build something together again with these friends next year."
    ],
    vocab: [
      { word: "文化祭", reading: "ぶんかさい", meaning: "cultural festival" },
      { word: "学科", reading: "がっか", meaning: "department; course" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "装飾", reading: "そうしょく", meaning: "decoration" },
      { word: "担当", reading: "たんとう", meaning: "in charge" },
      { word: "看板", reading: "かんばん", meaning: "signboard" },
      { word: "予想", reading: "よそう", meaning: "expectation" },
      { word: "屋台", reading: "やたい", meaning: "stall; stand" },
      { word: "工夫", reading: "くふう", meaning: "ingenuity" },
      { word: "達成感", reading: "たっせいかん", meaning: "sense of accomplishment" },
      { word: "片付ける", reading: "かたづける", meaning: "to tidy up" },
      { word: "仲間", reading: "なかま", meaning: "companion; teammate" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 雨の夕方 (A rainy evening)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-03",
    title: "雨[あめ]の夕方[ゆうがた]",
    titleReading: "あめのゆうがた",
    level: "N3",
    summary: "Caught in sudden rain on the way home, Nikki takes shelter at the station and savors a quiet shared moment.",
    estMinutes: 4,
    tags: ["weather", "reflection"],
    body: [
      "夕方[ゆうがた]になって、突然[とつぜん]雨[あめ]が降[ふ]り始[はじ]めました。傘[かさ]を持[も]っていなかった私[わたし]は、駅[えき]前[まえ]の屋根[やね]の下[した]に逃[に]げ込[こ]みました。",
      "降[ふ]り方[かた]が次第[しだい]に激[はげ]しくなり、足元[あしもと]に水[みず]たまりができ始[はじ]めました。",
      "側[そば]にいた年配[ねんぱい]の女性[じょせい]が、困[こま]った顔[かお]で空[そら]を見上[みあ]げていました。私[わたし]は持[も]っていたタオルを差[さ]し出[だ]しました。",
      "彼女[かのじょ]は「ありがとう」と言[い]って、少[すこ]しはにかんだ笑顔[えがお]を見[み]せてくれました。それだけで気持[きも]ちが軽[かる]くなりました。",
      "雨[あめ]は小[こ]一時間[いちじかん]続[つづ]いた後[のち]、ようやく上[あ]がり始[はじ]めました。街[まち]の灯[あか]りが濡[ぬ]れた路面[ろめん]に反射[はんしゃ]して、美[うつく]しく光[ひか]っていました。",
      "帰[かえ]り道[みち]、冷[つめ]たい風[かぜ]が吹[ふ]いていたものの、心[こころ]の中[なか]はなぜか温[あたた]かかったです。",
      "思[おも]いがけない雨[あめ]のせいで予定[よてい]は狂[くる]ったけれど、こういう静[しず]かな時間[じかん]も悪[わる]くないと思[おも]いました。"
    ],
    translation: [
      "In the evening, rain suddenly started falling. I hadn't brought an umbrella, so I ducked under the roof in front of the station.",
      "The rain gradually grew heavier, and puddles began forming at our feet.",
      "An elderly woman next to me was looking up at the sky with a troubled face. I offered her the towel I had.",
      "She said \"thank you\" and showed me a slightly shy smile. Just that lightened my mood.",
      "After continuing for a little under an hour, the rain finally began to let up. The town's lights reflected on the wet road and shone beautifully.",
      "On the way home, though a cold wind was blowing, for some reason I felt warm inside.",
      "The unexpected rain threw off my plans, but I thought such a quiet moment wasn't so bad."
    ],
    vocab: [
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "突然", reading: "とつぜん", meaning: "sudden; suddenly" },
      { word: "屋根", reading: "やね", meaning: "roof" },
      { word: "激しい", reading: "はげしい", meaning: "intense" },
      { word: "足元", reading: "あしもと", meaning: "feet; underfoot" },
      { word: "年配", reading: "ねんぱい", meaning: "elderly" },
      { word: "反射", reading: "はんしゃ", meaning: "reflection" },
      { word: "路面", reading: "ろめん", meaning: "road surface" },
      { word: "予定", reading: "よてい", meaning: "plan; schedule" },
      { word: "思いがけない", reading: "おもいがけない", meaning: "unexpected" },
      { word: "狂う", reading: "くるう", meaning: "to go wrong" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 思いがけない誕生日 (A surprise party)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-04",
    title: "思[おも]いがけない誕生日[たんじょうび]",
    titleReading: "おもいがけないたんじょうび",
    level: "N3",
    summary: "Friends throw Nikki a surprise birthday party and remind her how much she is cared for.",
    estMinutes: 5,
    tags: ["friends", "birthday"],
    body: [
      "先週[せんしゅう]の金曜日[きんようび]、私[わたし]はいつもより早[はや]く帰宅[きたく]しました。一日中[いちにちじゅう]なんとなく体[からだ]が重[おも]く感[かん]じていたからです。",
      "部屋[へや]の電気[でんき]を点[つ]けた瞬間[しゅんかん]、大勢[おおぜい]の人[ひと]が「誕生日[たんじょうび]おめでとう！」と叫[さけ]びました。",
      "目[め]の前[まえ]には、色[いろ]とりどりの風船[ふうせん]と手作[てづく]りのケーキがありました。あまりの驚[おどろ]きに、声[こえ]が出[で]ませんでした。",
      "仲良[なかよ]しの友達[ともだち]が「秘密[ひみつ]に準備[じゅんび]していたんだよ」と教[おし]えてくれました。みんなの顔[かお]を見[み]わたすと、自然[しぜん]と涙[なみだ]がこぼれました。",
      "当日[とうじつ]まで気付[きづ]かなかった自分[じぶん]も不思議[ふしぎ]でしたが、それほどうまく隠[かく]していたみんなの努[つと]めにも感動[かんどう]しました。",
      "プレゼントを一[ひと]つずつ開[あ]けながら、それぞれに込[こ]められた思[おも]いを聞[き]いているうちに、夜[よる]が更[ふ]けていきました。",
      "来年[らいねん]は私[わたし]が誰[だれ]かを驚[おどろ]かせる番[ばん]だと決[き]めて、そっと計画[けいかく]を思[おも]い描[えが]きました。"
    ],
    translation: [
      "Last Friday, I came home earlier than usual. I had been feeling vaguely heavy all day long.",
      "The moment I turned on the light, a large crowd shouted \"Happy Birthday!\"",
      "Before my eyes were colorful balloons and a handmade cake. I was so surprised I couldn't speak.",
      "A close friend told me, \"We prepared it in secret.\" Looking around at everyone's faces, tears came naturally.",
      "It was strange that I hadn't noticed, but I was also moved by how well everyone had hidden it.",
      "As I opened the presents one by one, hearing the thought put into each, the night grew late.",
      "I decided that next year it is my turn to surprise someone, and quietly pictured the plan."
    ],
    vocab: [
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "驚き", reading: "おどろき", meaning: "surprise" },
      { word: "大勢", reading: "おおぜい", meaning: "many people" },
      { word: "風船", reading: "ふうせん", meaning: "balloon" },
      { word: "手作り", reading: "てづくり", meaning: "handmade" },
      { word: "秘密", reading: "ひみつ", meaning: "secret" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "不思議", reading: "ふしぎ", meaning: "strange; mysterious" },
      { word: "感動", reading: "かんどう", meaning: "being moved" },
      { word: "計画", reading: "けいかく", meaning: "plan" },
      { word: "思い描く", reading: "おもいえがく", meaning: "to picture; imagine" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 難しい決断 (A difficult decision)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-05",
    title: "難[むずか]しい決断[けつだん]",
    titleReading: "むずかしいけつだん",
    level: "N3",
    summary: "Nikki weighs a job offer from abroad against staying close to family and finally makes a choice.",
    estMinutes: 5,
    tags: ["decision", "career"],
    body: [
      "先月[せんげつ]、海外[かいがい]の会社[かいしゃ]から勤務[きんむ]の打[う]ち話[ばなし]を受[う]けました。給料[きゅうりょう]も条件[じょうけん]も悪[わる]くありません。",
      "けれど、母[はは]が最近[さいきん]体調[たいちょう]を崩[くず]しており、遠[とお]く離[はな]れた国[くに]で暮[く]らすことに迷[まよ]いがありました。",
      "友達[ともだち]に相談[そうだん]すると、「最後[さいご]に決[き]めるのは君[きみ]だよ」と言[い]われました。的[まと]を射[い]る言葉[ことば]でした。",
      "先輩[せんぱい]は「若[わか]いうちに挑戦[ちょうせん]した方[ほう]がいい」と励[はげ]ましてくれました。確[たし]かにその通[とお]りだと思[おも]います。",
      "けれど、家族[かぞく]のそばにいることの大[おお]きさも、今回[こんかい]初[はじ]めて実感[じっかん]しました。",
      "一週間[いっしゅうかん]ほど考[かんが]え抜[ぬ]いた末[すえ]、私[わたし]は一旦[いったん]国内[こくない]で経験[けいけん]を積[つ]むことにしました。",
      "母[はは]は「いつでも応援[おうえん]しているよ」と静[しず]かに言[い]ってくれました。その一言[ひとこと]で、迷[まよ]いが消[き]えました。",
      "決断[けつだん]は難[むずか]しいものの、自分[じぶん]の価値観[かちかん]に従[したが]って選[えら]ぶことが何[なに]より大切[たいせつ]だと学[まな]びました。"
    ],
    translation: [
      "Last month, I received an offer to work at a company overseas. The salary and conditions are not bad either.",
      "But my mother's health has been failing recently, and I hesitated about living in a faraway country.",
      "When I consulted a friend, I was told, \"You are the one who has to decide in the end.\" It was right on target.",
      "A senior colleague encouraged me, \"It is better to take on challenges while you are young.\" I think that is true.",
      "But for the first time, I also felt the magnitude of being near my family.",
      "After thinking it through for about a week, I decided to first gain experience in the country.",
      "My mother quietly said, \"I will support you always.\" With that one phrase, my hesitation vanished.",
      "Decisions are difficult, but I learned that choosing according to my own values matters most."
    ],
    vocab: [
      { word: "海外", reading: "かいがい", meaning: "overseas" },
      { word: "勤務", reading: "きんむ", meaning: "work; employment" },
      { word: "給料", reading: "きゅうりょう", meaning: "salary" },
      { word: "条件", reading: "じょうけん", meaning: "condition" },
      { word: "体調", reading: "たいちょう", meaning: "health condition" },
      { word: "相談", reading: "そうだん", meaning: "consultation" },
      { word: "挑戦", reading: "ちょうせん", meaning: "challenge" },
      { word: "実感", reading: "じっかん", meaning: "realization" },
      { word: "経験", reading: "けいけん", meaning: "experience" },
      { word: "応援", reading: "おうえん", meaning: "support; cheer" },
      { word: "決断", reading: "けつだん", meaning: "decision" },
      { word: "価値観", reading: "かちかん", meaning: "values" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 電車での出会い (A train encounter)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-06",
    title: "電車[でんしゃ]での出会[であ]い",
    titleReading: "でんしゃでのであい",
    level: "N3",
    summary: "A small conversation with an elderly passenger on a delayed last train brightens Nikki's tiring day.",
    estMinutes: 4,
    tags: ["travel", "encounter"],
    body: [
      "昨夜[さくや]、終電[しゅうでん]に乗[の]っていた時[とき]のことです。電車[でんしゃ]は遅[おく]れていて、車内[しゃない]は疲[つか]れた人[ひと]でいっぱいでした。",
      "私[わたし]の隣[となり]に、小[ちい]さな花束[はなたば]を持[も]ったおばあさんが座[すわ]りました。優[やさ]しい香[かお]りが漂[ただよ]ってきました。",
      "ふと目[め]が合[あ]うと、彼女[かのじょ]は「孫[まご]の卒業式[そつぎょうしき]だったの」と嬉[うれ]しそうに話[はな]し始[はじ]めました。",
      "私[わたし]は相槌[あいづち]を打[う]ちながら聞[き]いていました。話[はなし]は次第[しだい]に、彼女[かのじょ]の若[わか]い頃[ころ]の海[うみ]の町[まち]の思[おも]い出[で]へと広[ひろ]がっていきました。",
      "「若[わか]いうちは何[なん]でも新[あたら]しく見[み]えるからいいよ」という言葉[ことば]が、不思議[ふしぎ]なほど心[こころ]に残[のこ]りました。",
      "駅[えき]に着[つ]くと、彼女[かのじょ]は「ありがとう、楽[たの]しかったよ」と言[い]って降[お]りていきました。短[みじか]い時間[じかん]でしたが、温[あたた]かい気持[きも]ちが残[のこ]りました。",
      "家[いえ]に帰[かえ]るまでの道[みち]のりが、いつもより少[すこ]しだけ軽[かる]く感[かん]じられました。"
    ],
    translation: [
      "It was last night when I was on the last train. The train was delayed, and the car was full of tired people.",
      "Next to me sat an old woman holding a small bouquet. A gentle scent drifted over.",
      "When our eyes happened to meet, she began talking happily, \"It was my grandchild's graduation ceremony.\"",
      "I listened while nodding along. The talk gradually expanded into memories of the seaside town of her youth.",
      "The words \"When you are young, everything looks new, which is wonderful\" stayed in my heart strangely strongly.",
      "When we arrived at the station, she said, \"Thank you, that was fun,\" and got off. It was a short time, but a warm feeling remained.",
      "The walk home felt just a little lighter than usual."
    ],
    vocab: [
      { word: "終電", reading: "しゅうでん", meaning: "last train" },
      { word: "車内", reading: "しゃない", meaning: "inside the vehicle" },
      { word: "花束", reading: "はなたば", meaning: "bouquet" },
      { word: "漂う", reading: "ただよう", meaning: "to drift; waft" },
      { word: "孫", reading: "まご", meaning: "grandchild" },
      { word: "卒業式", reading: "そつぎょうしき", meaning: "graduation ceremony" },
      { word: "相槌", reading: "あいづち", meaning: "back-channel nodding" },
      { word: "思い出", reading: "おもいで", meaning: "memory" },
      { word: "不思議", reading: "ふしぎ", meaning: "mysterious; strange" },
      { word: "駅", reading: "えき", meaning: "station" },
      { word: "道のり", reading: "みちのり", meaning: "distance; journey" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 料理の失敗 (A cooking disaster)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-07",
    title: "料理[りょうり]の失敗[しっぱい]",
    titleReading: "りょうりのしっぱい",
    level: "N3",
    summary: "Nikki tries to recreate her grandmother's curry recipe and learns that cooking is harder than it looks.",
    estMinutes: 4,
    tags: ["cooking", "family"],
    body: [
      "週末[しゅうまつ]、祖母[そぼ]の味[あじ]を再現[さいげん]しようと、初[はじ]めて一人[ひとり]でカレーを作[つく]ることにしました。",
      "レシピを見[み]ながら進[すす]めていたものの、野菜[やさい]の大[おお]きさが不揃[ふぞろ]いで、火[ひ]の通[とお]りにもむらが出[で]てしまいました。",
      "焦[こ]げ付[つ]かないように注意[ちゅうい]していたつもりでしたが、鍋[なべ]の底[そこ]が見事[みごと]に焦[こ]げてしまいました。",
      "何[なん]とか完成[かんせい]させたものの、味[あじ]は薄[うす]く、決[き]め手[て]が足[た]りないような感[かん]じでした。",
      "祖母[そぼ]に電話[でんわ]すると、「焦[あせ]らず、一度[いちど]に全部[ぜんぶ]やろうとしないことが大切[たいせつ]だよ」と笑[わら]っていました。",
      "失敗[しっぱい]のおかげで、工程[こうてい]ごとに段取[だんど]りを考[かんが]える大切[たいせつ]さが身[み]に染[し]みて分[わ]かりました。",
      "次回[じかい]は必[かなら]ず、祖父[そふ]も喜[よろこ]ぶ味[あじ]に近[ちか]づけると信[しん]じて、もう一度[いちど]挑戦[ちょうせん]するつもりです。"
    ],
    translation: [
      "On the weekend, to recreate my grandmother's flavor, I decided to make curry on my own for the first time.",
      "Although I proceeded while consulting the recipe, the vegetables were uneven in size, and the heat did not pass through evenly.",
      "I had meant to be careful not to let it burn, but the bottom of the pot burned spectacularly.",
      "I managed to finish it, but the taste was thin, as if a decisive element was lacking.",
      "When I called my grandmother, she laughed and said, \"Do not rush, and do not try to do everything at once. That is what matters.\"",
      "Thanks to the failure, the importance of planning each step thoroughly sank in.",
      "Next time I am sure I can get closer to the taste my grandfather would also love, and I plan to try again."
    ],
    vocab: [
      { word: "料理", reading: "りょうり", meaning: "cooking" },
      { word: "失敗", reading: "しっぱい", meaning: "failure" },
      { word: "祖母", reading: "そぼ", meaning: "grandmother" },
      { word: "再現", reading: "さいげん", meaning: "reproduction" },
      { word: "野菜", reading: "やさい", meaning: "vegetable" },
      { word: "不揃い", reading: "ふぞろい", meaning: "uneven" },
      { word: "焦げる", reading: "こげる", meaning: "to burn" },
      { word: "注意", reading: "ちゅうい", meaning: "caution; attention" },
      { word: "工程", reading: "こうてい", meaning: "process; step" },
      { word: "段取り", reading: "だんどり", meaning: "planning; staging" },
      { word: "挑戦", reading: "ちょうせん", meaning: "challenge" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 久しぶりの再会 (A long-lost friend)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-08",
    title: "久[ひさ]しぶりの再会[さいかい]",
    titleReading: "ひさしぶりのさいかい",
    level: "N3",
    summary: "Nikki reunites with a childhood friend after ten years apart and rediscovers how deep old bonds can be.",
    estMinutes: 5,
    tags: ["friends", "reunion"],
    body: [
      "先週[せんしゅう]、十年[じゅうねん]ぶりに幼[おさな]なじみの美香[みか]と再会[さいかい]しました。彼女[かのじょ]が転校[てんこう]して以来[いらい]、連絡[れんらく]を取[と]る機会[きかい]がありませんでした。",
      "待[ま]ち合[あ]わせたカフェは、昔[むかし]二人[ふたり]でよく通[かよ]った店[みせ]でした。扉[とびら]を開[あ]けると、彼女[かのじょ]はすぐに分[わ]かりました。",
      "美香[みか]は少[すこ]し大人[おとな]びて見[み]えましたが、笑[わら]った顔[かお]は昔[むかし]のままでした。私[わたし]の胸[むね]が熱[あつ]くなりました。",
      "近況[きんきょう]を報告[ほうこく]し合[あ]った後[のち]、話[はなし]は自然[しぜん]と子供[こども]の時[とき]の思[おも]い出[で]に戻[もど]りました。",
      "「あの夏[なつ]に一緒[いっしょ]に見[み]た花火[はなび]が忘[わす]れられない」と彼女[かのじょ]が言[い]うと、私[わたし]も同[おな]じことを思[おも]い出[だ]していました。",
      "久[ひさ]しぶりなのに、話[はな]し始[はじ]めると時間[じかん]が経[た]つのを忘[わす]れるほどでした。別[わか]れ際[ぎわ]に、今度[こんど]はもっと早[はや]く会[あ]おうと約束[やくそく]しました。",
      "家[いえ]に帰[かえ]ると、胸[むね]の中[なか]に温[あたた]かいものが広[ひろ]がっていました。続[つづ]くはずだった友情[ゆうじょう]が、十年[じゅうねん]の空白[くうはく]を越[こ]えて戻[もど]ってきたのです。"
    ],
    translation: [
      "Last week, I reunited with my childhood friend Mika for the first time in ten years. Since she transferred schools, I hadn't had a chance to contact her.",
      "The café we met at was the same shop we used to frequent together. When I opened the door, I recognized her at once.",
      "Mika looked slightly more grown-up, but her smiling face was just like before. My chest grew hot.",
      "After exchanging updates, the talk naturally returned to childhood memories.",
      "She said, \"The fireworks we saw together that summer are unforgettable,\" and I was remembering the very same thing.",
      "Even though it had been a long time, once we started talking I forgot the passage of time. At parting, we promised to meet again sooner next time.",
      "When I got home, something warm spread through my chest. The friendship that should have continued had come back across the ten-year gap."
    ],
    vocab: [
      { word: "再会", reading: "さいかい", meaning: "reunion" },
      { word: "幼なじみ", reading: "おさななじみ", meaning: "childhood friend" },
      { word: "転校", reading: "てんこう", meaning: "school transfer" },
      { word: "連絡", reading: "れんらく", meaning: "contact" },
      { word: "近況", reading: "きんきょう", meaning: "recent news" },
      { word: "報告", reading: "ほうこく", meaning: "report" },
      { word: "思い出", reading: "おもいで", meaning: "memory" },
      { word: "花火", reading: "はなび", meaning: "fireworks" },
      { word: "約束", reading: "やくそく", meaning: "promise" },
      { word: "友情", reading: "ゆうじょう", meaning: "friendship" },
      { word: "空白", reading: "くうはく", meaning: "blank; gap" },
      { word: "続く", reading: "つづく", meaning: "to continue" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 静かな朝 (A quiet morning)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-09",
    title: "静[しず]かな朝[あさ]",
    titleReading: "しずかなあさ",
    level: "N3",
    summary: "Nikki wakes before dawn, savors the stillness of an unhurried morning, and sets a calm tone for the day.",
    estMinutes: 4,
    tags: ["morning", "mindfulness"],
    body: [
      "今朝[けさ]、目覚[めざ]まし時計[どけい]が鳴[な]る前[まえ]に目[め]が覚[さ]めました。外[そと]はまだ暗[くら]く、街[まち]は息[いき]を潜[ひそ]めたようでした。",
      "起[お]き出[だ]して窓[まど]を開[あ]けると、冷[つめ]たい空気[くうき]が頬[ほお]を撫[な]でるように流[なが]れ込[こ]んで来[き]ました。",
      "台所[だいどころ]で湯[ゆ]を沸[わ]かしている間[あいだ]に、少[すこ]しだけストレッチをして体[からだ]を覚[さ]ましました。",
      "椅子[いす]に座[すわ]り、湯気[ゆげ]の立[た]つお茶[ちゃ]を両手[りょうて]で包[つつ]むように持[も]ちました。静[しず]けさの中[なか]で、呼吸[こきゅう]の音[おと]だけが聞[き]こえました。",
      "何[なに]も考[かんが]えない時間[じかん]が、これほど贅沢[ぜいたく]なものだということを、改[あらた]めて実感[じっかん]しました。",
      "空[そら]が少[すこ]しずつ白[しろ]み始[はじ]め、鳥[とり]の声[こえ]が聞[き]こえ始[はじ]めた頃[ころ]、私[わたし]は静[しず]かに今日[きょう]の予定[よてい]を頭[あたま]の中[なか]で並[なら]べました。",
      "いつも慌[あわ]ただしい朝[あさ]ですが、今日[きょう]は一[ひと]足[あし]早[はや]く始[はじ]めたおかげで、心[こころ]に余裕[よゆう]が生[う]まれました。"
    ],
    translation: [
      "This morning, I woke up before the alarm clock rang. Outside was still dark, and the town seemed to be holding its breath.",
      "When I got up and opened the window, cool air flowed in as if stroking my cheeks.",
      "While boiling water in the kitchen, I did a little stretching to wake my body.",
      "I sat in a chair and held the steaming tea in both hands as if wrapping it. In the silence, only the sound of my breathing could be heard.",
      "I realized anew that time thinking of nothing could be so luxurious.",
      "As the sky gradually began to lighten and birdsong began, I quietly arranged today's schedule in my head.",
      "My mornings are usually hectic, but thanks to starting a step earlier today, I gained some mental leeway."
    ],
    vocab: [
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "目覚まし時計", reading: "めざましどけい", meaning: "alarm clock" },
      { word: "空気", reading: "くうき", meaning: "air" },
      { word: "頬", reading: "ほお", meaning: "cheek" },
      { word: "台所", reading: "だいどころ", meaning: "kitchen" },
      { word: "湯気", reading: "ゆげ", meaning: "steam" },
      { word: "呼吸", reading: "こきゅう", meaning: "breathing" },
      { word: "贅沢", reading: "ぜいたく", meaning: "luxury" },
      { word: "実感", reading: "じっかん", meaning: "realization" },
      { word: "慌ただしい", reading: "あわただしい", meaning: "hectic; busy" },
      { word: "余裕", reading: "よゆう", meaning: "leeway; composure" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 近所のトラブル (A neighborhood dispute)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-10",
    title: "近所[きんじょ]のトラブル",
    titleReading: "きんじょのとらぶる",
    level: "N3",
    summary: "A late-night noise dispute tests Nikki's patience, but a calm conversation brings unexpected understanding.",
    estMinutes: 5,
    tags: ["community", "conflict"],
    body: [
      "先週[せんしゅう]の深夜[しんや]、上[うえ]の階[かい]から大[おお]きな音[おと]が聞[き]こえ始[はじ]め、私[わたし]は眠[ねむ]れなくなりました。",
      "翌朝[よくあさ]、管理会社[かんりがいしゃ]に連絡[れんらく]しましたが、相手[あいて]には直接[ちょくせつ]話[はな]した方[ほう]がいいと勧[すす]められました。",
      "最初[さいしょ]は怒[いか]っていましたが、夜[よる]にもう一度[いちど]考[かんが]えてみると、相手[あいて]にも事情[じじょう]があるかもしれないと思[おも]い直[なお]しました。",
      "意[い]を決[けっ]して訪[たず]ねると、出[で]てきたのは小[ちい]さな子供[こども]を抱[だ]いた若[わか]い母親[ははおや]でした。",
      "「赤[あか]ちゃんが夜[よる]泣[な]いてしまって、私[わたし]も寝不足[ねぶそく]なんです」と彼女[かのじょ]は申[もう]し訳[わけ]なさそうに言[い]いました。",
      "私[わたし]は怒[いか]りがすっと引[ひ]きました。それからは、互[たが]いに歩[あゆ]み寄[よ]る方法[ほうほう]を一緒[いっしょ]に考[かんが]えることになりました。",
      "今[いま]では、玄関[げんかん]で会[あ]うと笑顔[えがお]で挨拶[あいさつ]し合[あ]う関係[かんけい]になりました。トラブルがきっかけで、かえって近[ちか]くなれた気[き]がします。"
    ],
    translation: [
      "Late at night last week, loud sounds started coming from the floor above, and I could no longer sleep.",
      "The next morning I contacted the management company, but they recommended I talk to the other party directly.",
      "At first I was angry, but reconsidering it that night, I thought the other party might have their own circumstances.",
      "When I steeled myself and visited, the person who came out was a young mother holding a small child.",
      "She said apologetically, \"The baby cries at night, and I am also sleep-deprived.\"",
      "My anger melted away. From then on, we agreed to think together about ways to meet each other halfway.",
      "Now, when we meet at the entrance, we exchange smiles and greetings. I feel that thanks to the trouble, we actually grew closer."
    ],
    vocab: [
      { word: "深夜", reading: "しんや", meaning: "late night" },
      { word: "管理会社", reading: "かんりがいしゃ", meaning: "management company" },
      { word: "直接", reading: "ちょくせつ", meaning: "directly" },
      { word: "事情", reading: "じじょう", meaning: "circumstances" },
      { word: "訪ねる", reading: "たずねる", meaning: "to visit" },
      { word: "抱く", reading: "だく", meaning: "to hold; embrace" },
      { word: "母親", reading: "ははおや", meaning: "mother" },
      { word: "寝不足", reading: "ねぶそく", meaning: "lack of sleep" },
      { word: "申し訳ない", reading: "もうしわけない", meaning: "apologetic; sorry" },
      { word: "歩み寄る", reading: "あゆみよる", meaning: "to compromise" },
      { word: "玄関", reading: "げんかん", meaning: "entryway" },
      { word: "関係", reading: "かんけい", meaning: "relationship" }
    ]
  }
];
