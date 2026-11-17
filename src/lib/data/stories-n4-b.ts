import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana and punctuation have no brackets. Katakana in titleReading is rendered
// as hiragana (e.g. カフェ → かふぇ) to match the all-kana reading convention.

export const storiesN4B: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N4 — カフェでのアルバイト (Part-time job at a cafe)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-16",
    title: "カフェでのアルバイト",
    titleReading: "かふぇでのあるばいと",
    level: "N4",
    summary: "Nikki starts a part-time job at a cafe near the station and learns the work with help from a senior colleague.",
    estMinutes: 3,
    tags: ["work", "slice of life"],
    body: [
      "先週[せんしゅう]から、カフェでアルバイトを始[はじ]めました。",
      "店[みせ]は駅[えき]の近[ちか]くにあります。朝[あさ]はとても忙[いそが]しいです。",
      "仕事[しごと]はコーヒーを作[つく]ったり、お客様[きゃくさま]に注文[ちゅうもん]を取[と]ったりすることです。",
      "最初[さいしょ]は難[むずか]しかったですが、先輩[せんぱい]が丁寧[ていねい]に教[おし]えてくれました。",
      "今[いま]は笑顔[えがお]で「いらっしゃいませ」と言[い]えます。",
      "同[おな]じ時間[じかん]に働[はたら]く人[ひと]たちはみんな親切[しんせつ]です。休[やす]み時間[じかん]に一緒[いっしょ]に話[はな]します。",
      "来月[らいげつ]は、お店[みせ]のイベントを手伝[てつだ]う予定[よてい]です。",
      "この仕事[しごと]がとても好[す]きになりました。"
    ],
    translation: [
      "From last week, I started a part-time job at a cafe.",
      "The shop is near the station. Mornings are very busy.",
      "My work is making coffee and taking orders from customers.",
      "At first it was hard, but a senior colleague taught me carefully.",
      "Now I can say \"welcome\" with a smile.",
      "The people working the same hours are all kind. We talk together during break time.",
      "Next month, I plan to help out at a shop event.",
      "I have come to like this job very much."
    ],
    vocab: [
      { word: "アルバイト", reading: "あるばいと", meaning: "part-time job" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" },
      { word: "仕事", reading: "しごと", meaning: "work" },
      { word: "注文", reading: "ちゅうもん", meaning: "order" },
      { word: "お客様", reading: "おきゃくさま", meaning: "customer" },
      { word: "先輩", reading: "せんぱい", meaning: "senior colleague" },
      { word: "丁寧", reading: "ていねい", meaning: "polite; careful" },
      { word: "教える", reading: "おしえる", meaning: "to teach" },
      { word: "笑顔", reading: "えがお", meaning: "smile" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "手伝う", reading: "てつだう", meaning: "to help" },
      { word: "予定", reading: "よてい", meaning: "plan" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 東京への引越し (Moving to Tokyo)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-17",
    title: "東京[とうきょう]への引越[ひっこ]し",
    titleReading: "とうきょうへのひっこし",
    level: "N4",
    summary: "Nikki decides to move to Tokyo for work, hunts for an apartment, and settles into a new life with friends' help.",
    estMinutes: 4,
    tags: ["moving", "slice of life"],
    body: [
      "今度[こんど]、東京[とうきょう]へ引越[ひっこ]すことにしました。",
      "仕事[しごと]のため、大[おお]きな町[まち]に住[す]むことにしました。",
      "アパートを探[さが]すのは大変[たいへん]でした。家賃[やちん]が高[たか]いからです。",
      "やっと、駅[えき]から歩[ある]いて十分[じゅっぷん]の所[ところ]を見[み]つけました。",
      "引越[ひっこ]しの日[ひ]は、友達[ともだち]が手伝[てつだ]ってくれました。箱[はこ]を運[はこ]んだり、掃除[そうじ]をしたりしました。",
      "新[あたら]しい部屋[へや]は小[ちい]さいですが、日当[ひあ]たりがいいです。",
      "近[ちか]くにスーパーとコンビニがあるので便利[べんり]です。",
      "来週[らいしゅう]から、新[あたら]しい生活[せいかつ]が始[はじ]まります。ワクワクしています。"
    ],
    translation: [
      "I have decided to move to Tokyo soon.",
      "For work, I decided to live in a big city.",
      "Looking for an apartment was hard. The rent is high.",
      "Finally, I found a place a ten-minute walk from the station.",
      "On moving day, my friends helped me. We carried boxes and cleaned.",
      "The new room is small, but it gets good sunlight.",
      "There is a supermarket and a convenience store nearby, so it is convenient.",
      "From next week, my new life begins. I am excited."
    ],
    vocab: [
      { word: "引越し", reading: "ひっこし", meaning: "moving house" },
      { word: "町", reading: "まち", meaning: "town" },
      { word: "住む", reading: "すむ", meaning: "to live" },
      { word: "アパート", reading: "あぱーと", meaning: "apartment" },
      { word: "探す", reading: "さがす", meaning: "to search" },
      { word: "大変", reading: "たいへん", meaning: "hard; tough" },
      { word: "家賃", reading: "やちん", meaning: "rent" },
      { word: "歩く", reading: "あるく", meaning: "to walk" },
      { word: "十分", reading: "じゅっぷん", meaning: "ten minutes" },
      { word: "手伝う", reading: "てつだう", meaning: "to help" },
      { word: "部屋", reading: "へや", meaning: "room" },
      { word: "便利", reading: "べんり", meaning: "convenient" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 健康な生活 (A healthy lifestyle change)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-18",
    title: "健康[けんこう]な生活[せいかつ]",
    titleReading: "けんこうなせいかつ",
    level: "N4",
    summary: "Nikki changes her lifestyle for better health: morning runs, more vegetables, less alcohol, and weekly hot springs.",
    estMinutes: 3,
    tags: ["health", "lifestyle"],
    body: [
      "最近[さいきん]、健康[けんこう]のために生活[せいかつ]を変[か]えました。",
      "毎朝[まいあさ]、早[はや]く起[お]きて公園[こうえん]を走[はし]るようにしています。",
      "食[た]べるものも気[き]をつけるようになりました。野菜[やさい]を多[おお]く食[た]べます。",
      "夜[よる]はスマホを見[み]ないで、本[ほん]を読[よ]むようにしています。",
      "お酒[さけ]を飲[の]む回数[かいすう]も減[へ]りました。",
      "始[はじ]めは大変[たいへん]でしたが、今[いま]は体[からだ]が軽[かる]く感[かん]じます。",
      "週[しゅう]に一度[いちど]は、温泉[おんせん]に行[い]ってリラックスします。",
      "健康[けんこう]な生活[せいかつ]は難[むずか]しくないと分[わ]かりました。"
    ],
    translation: [
      "Recently, I changed my lifestyle for my health.",
      "Every morning, I make sure to wake up early and run in the park.",
      "I have also started paying attention to what I eat. I eat lots of vegetables.",
      "At night, I try to read books instead of looking at my phone.",
      "The number of times I drink alcohol has also decreased.",
      "It was hard at first, but now my body feels light.",
      "Once a week, I go to a hot spring to relax.",
      "I realized that a healthy lifestyle is not so difficult."
    ],
    vocab: [
      { word: "健康", reading: "けんこう", meaning: "health" },
      { word: "生活", reading: "せいかつ", meaning: "lifestyle" },
      { word: "毎朝", reading: "まいあさ", meaning: "every morning" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "野菜", reading: "やさい", meaning: "vegetable" },
      { word: "お酒", reading: "おさけ", meaning: "alcohol" },
      { word: "回数", reading: "かいすう", meaning: "number of times" },
      { word: "減る", reading: "へる", meaning: "to decrease" },
      { word: "体", reading: "からだ", meaning: "body" },
      { word: "温泉", reading: "おんせん", meaning: "hot spring" },
      { word: "難しい", reading: "むずかしい", meaning: "difficult" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 壊れたスマホ (The broken phone)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-19",
    title: "壊[こわ]れたスマホ",
    titleReading: "こわれたすまほ",
    level: "N4",
    summary: "Nikki drops her phone and breaks the screen, then decides to buy a new one with help from a shop clerk.",
    estMinutes: 3,
    tags: ["mishap", "shopping"],
    body: [
      "先週[せんしゅう]、スマホを落[お]としてしまいました。",
      "画面[がめん]が割[わ]れて、何[なに]も見[み]えなくなりました。",
      "すぐに修理屋[しゅうりや]に行[い]きましたが、直[なお]す費用[ひよう]は一万円[いちまんえん]以上[いじょう]でした。",
      "新[あたら]しいスマホを買[か]うことにしました。",
      "データは全部[ぜんぶ]残[のこ]っていたので、安心[あんしん]しました。",
      "店員[てんいん]が設定[せってい]を手伝[てつだ]ってくれました。アプリも入[い]れ直[なお]しました。",
      "今[いま]は新[あたら]しいスマホが便利[べんり]で、写真[しゃしん]もきれいに撮[と]れます。",
      "これからは、もっと気[き]をつけて使[つか]おうと思[おも]います。"
    ],
    translation: [
      "Last week, I accidentally dropped my phone.",
      "The screen cracked and I could not see anything.",
      "I went to a repair shop right away, but fixing it would cost over ten thousand yen.",
      "I decided to buy a new phone.",
      "All my data was still there, so I was relieved.",
      "A clerk helped me with the settings. I also reinstalled the apps.",
      "Now my new phone is convenient, and it takes nice photos.",
      "From now on, I plan to use it more carefully."
    ],
    vocab: [
      { word: "壊れる", reading: "こわれる", meaning: "to break" },
      { word: "落とす", reading: "おとす", meaning: "to drop" },
      { word: "画面", reading: "がめん", meaning: "screen" },
      { word: "割れる", reading: "われる", meaning: "to crack" },
      { word: "修理屋", reading: "しゅうりや", meaning: "repair shop" },
      { word: "直す", reading: "なおす", meaning: "to fix" },
      { word: "費用", reading: "ひよう", meaning: "cost" },
      { word: "残る", reading: "のこる", meaning: "to remain" },
      { word: "安心", reading: "あんしん", meaning: "relief" },
      { word: "店員", reading: "てんいん", meaning: "shop clerk" },
      { word: "設定", reading: "せってい", meaning: "setting" },
      { word: "便利", reading: "べんり", meaning: "convenient" },
      { word: "撮る", reading: "とる", meaning: "to take (photo)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 同僚のサプライズパーティー (Surprise party for a colleague)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-20",
    title: "同僚[どうりょう]のサプライズパーティー",
    titleReading: "どうりょうのさぷらいずぱーてぃー",
    level: "N4",
    summary: "Coworkers plan a surprise party for Yamada-san, who is getting married next month, and celebrate together.",
    estMinutes: 3,
    tags: ["workplace", "celebration"],
    body: [
      "来月[らいげつ]、会社[かいしゃ]の同僚[どうりょう]の山田[やまだ]さんが結婚[けっこん]します。",
      "みんなで、山田[やまだ]さんにサプライズパーティーを開[ひら]くことにしました。",
      "私[わたし]はプレゼントを買[か]いに行[い]きました。ハンカチとネクタイを選[えら]びました。",
      "田中[たなか]さんはケーキを予約[よやく]してくれました。",
      "当日[とうじつ]は、山田[やまだ]さんに「会議[かいぎ]がある」と嘘[うそ]をつきました。",
      "山田[やまだ]さんが部屋[へや]に入[はい]った時[とき]、みんなで「おめでとう」と言[い]いました。",
      "山田[やまだ]さんはとても驚[おどろ]いて、涙[なみだ]が出[で]ました。",
      "一緒[いっしょ]に写真[しゃしん]を撮[と]って、楽[たの]しい時間[じかん]を過[す]ごしました。"
    ],
    translation: [
      "Next month, my colleague Yamada-san is getting married.",
      "We all decided to throw a surprise party for Yamada-san.",
      "I went to buy a present. I chose a handkerchief and a tie.",
      "Tanaka-san reserved a cake for us.",
      "On the day, we told Yamada-san a lie that there was a meeting.",
      "When Yamada-san entered the room, we all said \"congratulations.\"",
      "Yamada-san was very surprised and shed tears.",
      "We took photos together and spent a fun time."
    ],
    vocab: [
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "結婚", reading: "けっこん", meaning: "marriage" },
      { word: "サプライズ", reading: "さぷらいず", meaning: "surprise" },
      { word: "開く", reading: "ひらく", meaning: "to hold (event)" },
      { word: "選ぶ", reading: "えらぶ", meaning: "to choose" },
      { word: "予約", reading: "よやく", meaning: "reservation" },
      { word: "当日", reading: "とうじつ", meaning: "the day" },
      { word: "会議", reading: "かいぎ", meaning: "meeting" },
      { word: "嘘", reading: "うそ", meaning: "lie" },
      { word: "驚く", reading: "おどろく", meaning: "to be surprised" },
      { word: "涙", reading: "なみだ", meaning: "tears" },
      { word: "過ごす", reading: "すごす", meaning: "to spend (time)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 趣味のガーデニング (Gardening as a hobby)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-21",
    title: "趣味[しゅみ]のガーデニング",
    titleReading: "しゅみのがーでにんぐ",
    level: "N4",
    summary: "Nikki starts gardening on her balcony, growing herbs and tomatoes, and finds calm in tending plants.",
    estMinutes: 3,
    tags: ["hobby", "nature"],
    body: [
      "最近[さいきん]、ガーデニングを始[はじ]めました。",
      "家[いえ]のベランダに小[ちい]さなプランターを置[お]きました。",
      "最初[さいしょ]は、ハーブとトマトを育[そだ]てることにしました。",
      "毎朝[まいあさ]、水[みず]をやって、成長[せいちょう]を見[み]るのが楽[たの]しみです。",
      "一週間[いっしゅうかん]で、小[ちい]さな芽[め]が出[で]ました。嬉[うれ]しくなりました。",
      "ネットで育[そだ]て方[かた]を調[しら]べながら、少[すこ]しずつ覚[おぼ]えています。",
      "植物[しょくぶつ]を育[そだ]てると、心[こころ]が穏[おだ]やかになります。",
      "来月[らいげつ]は、花[はな]の種[たね]も買[か]ってみようと思[おも]っています。"
    ],
    translation: [
      "Recently, I started gardening.",
      "I placed a small planter on the balcony of my house.",
      "First, I decided to grow herbs and tomatoes.",
      "Every morning I water them, and watching them grow is my joy.",
      "In a week, small sprouts came out. I was happy.",
      "I look up how to grow them online and remember little by little.",
      "When I grow plants, my mind becomes calm.",
      "Next month, I plan to try buying flower seeds too."
    ],
    vocab: [
      { word: "趣味", reading: "しゅみ", meaning: "hobby" },
      { word: "ベランダ", reading: "べらんだ", meaning: "balcony" },
      { word: "育てる", reading: "そだてる", meaning: "to grow" },
      { word: "成長", reading: "せいちょう", meaning: "growth" },
      { word: "楽しみ", reading: "たのしみ", meaning: "something to look forward to" },
      { word: "芽", reading: "め", meaning: "sprout" },
      { word: "調べる", reading: "しらべる", meaning: "to look up" },
      { word: "少しずつ", reading: "すこしずつ", meaning: "little by little" },
      { word: "覚える", reading: "おぼえる", meaning: "to remember" },
      { word: "植物", reading: "しょくぶつ", meaning: "plant" },
      { word: "穏やか", reading: "おだやか", meaning: "calm" },
      { word: "種", reading: "たね", meaning: "seed" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 田舎への電車の旅 (A train journey to the countryside)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-22",
    title: "田舎[いなか]への電車[でんしゃ]の旅[たび]",
    titleReading: "いなかへのでんしゃのたび",
    level: "N4",
    summary: "Nikki takes a train to the countryside to visit a friend's family home and enjoys homemade food and quiet stars.",
    estMinutes: 4,
    tags: ["travel", "nature"],
    body: [
      "週末[しゅうまつ]、電車[でんしゃ]で田舎[いなか]に行[い]きました。",
      "友達[ともだち]の実家[じっか]に遊[あそ]びに行[い]きました。",
      "電車[でんしゃ]は、だんだん景色[けしき]が変[か]わっていきました。",
      "山[やま]や川[かわ]が見[み]えて、心[こころ]が落[お]ち着[つ]きました。",
      "二時間[にじかん]後[ご]、小[ちい]さな駅[えき]に着[つ]きました。友達[ともだち]が迎[むか]えに来[き]てくれました。",
      "友達[ともだち]のお母[かあ]さんは、手作[てづく]りの料理[りょうり]を出[だ]してくれました。",
      "どれも美味[おい]しくて、お腹[なか]がいっぱいになりました。",
      "夜[よる]は静[しず]かで、星[ほし]がたくさん見[み]えました。",
      "とてもリラックスできた旅[たび]でした。"
    ],
    translation: [
      "On the weekend, I went to the countryside by train.",
      "I went to visit my friend's family home.",
      "The scenery outside the train gradually changed.",
      "I saw mountains and rivers, and my heart settled down.",
      "After two hours, we arrived at a small station. My friend came to pick me up.",
      "My friend's mother served us homemade dishes.",
      "Everything was delicious, and my stomach got full.",
      "The night was quiet, and I could see many stars.",
      "It was a very relaxing trip."
    ],
    vocab: [
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "田舎", reading: "いなか", meaning: "countryside" },
      { word: "実家", reading: "じっか", meaning: "family home" },
      { word: "遊ぶ", reading: "あそぶ", meaning: "to hang out" },
      { word: "景色", reading: "けしき", meaning: "scenery" },
      { word: "落ち着く", reading: "おちつく", meaning: "to settle down" },
      { word: "迎えに来る", reading: "むかえにくる", meaning: "to come pick up" },
      { word: "手作り", reading: "てづくり", meaning: "handmade" },
      { word: "料理", reading: "りょうり", meaning: "dish" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "静か", reading: "しずか", meaning: "quiet" },
      { word: "星", reading: "ほし", meaning: "star" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 風邪をひいた (Dealing with a cold)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-23",
    title: "風邪[かぜ]をひいた",
    titleReading: "かぜをひいた",
    level: "N4",
    summary: "Nikki catches a cold, visits the hospital for medicine, rests at home, and recovers after a few days.",
    estMinutes: 3,
    tags: ["health", "daily life"],
    body: [
      "月曜日[げつようび]に、喉[のど]が痛[いた]くなりました。",
      "火曜日[かようび]の朝[あさ]、熱[ねつ]があって、会社[かいしゃ]を休[やす]みました。",
      "病院[びょういん]に行[い]って、薬[くすり]をもらいました。",
      "家[いえ]で温[あたた]かいお茶[ちゃ]を飲[の]んで、一日中[いちにちじゅう]寝[ね]ていました。",
      "友達[ともだち]が「お大事[だいじ]に」とメールをくれました。",
      "三日後[みっかご]、やっと熱[ねつ]が下[さ]がりました。",
      "まだ咳[せき]が出[で]ますが、だいぶ元気[げんき]になりました。",
      "これからは、手[て]を洗[あら]うことをもっと丁寧[ていねい]にしようと思[おも]います。"
    ],
    translation: [
      "On Monday, my throat started to hurt.",
      "On Tuesday morning, I had a fever and took a day off from work.",
      "I went to the hospital and got some medicine.",
      "At home I drank warm tea and slept all day long.",
      "A friend sent me a message saying \"take care.\"",
      "After three days, my fever finally went down.",
      "I still have a cough, but I am much better now.",
      "From now on, I will try to wash my hands more carefully."
    ],
    vocab: [
      { word: "風邪", reading: "かぜ", meaning: "cold (illness)" },
      { word: "喉", reading: "のど", meaning: "throat" },
      { word: "痛い", reading: "いたい", meaning: "painful" },
      { word: "熱", reading: "ねつ", meaning: "fever" },
      { word: "休む", reading: "やすむ", meaning: "to take a day off" },
      { word: "病院", reading: "びょういん", meaning: "hospital" },
      { word: "薬", reading: "くすり", meaning: "medicine" },
      { word: "温かい", reading: "あたたかい", meaning: "warm" },
      { word: "一日中", reading: "いちにちじゅう", meaning: "all day long" },
      { word: "お大事に", reading: "おだいじに", meaning: "take care (greeting)" },
      { word: "下がる", reading: "さがる", meaning: "to go down" },
      { word: "咳", reading: "せき", meaning: "cough" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 新しい語学パートナー (The new language exchange partner)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-24",
    title: "新[あたら]しい語学[ごがく]パートナー",
    titleReading: "あたらしいごがくぱーとなー",
    level: "N4",
    summary: "Nikki finds a new language exchange partner from America and they meet weekly at a cafe to teach each other.",
    estMinutes: 3,
    tags: ["language study", "friendship"],
    body: [
      "先週[せんしゅう]、新[あたら]しい語学[ごがく]パートナーができました。",
      "名前[なまえ]はマイクで、アメリカから来[き]ました。",
      "私[わたし]は日本語[にほんご]を教[おし]えて、マイクは英語[えいご]を教[おし]えてくれます。",
      "毎週[まいしゅう]土曜日[どようび]に、カフェで一時間[いちじかん]くらい話[はな]します。",
      "最初[さいしょ]は、英語[えいご]を話[はな]すのが緊張[きんちょう]しました。",
      "でも、マイクはゆっくり話[はな]してくれるので、分[わ]かりやすいです。",
      "最近[さいきん]、少[すこ]しずつ英語[えいご]が話[はな]せるようになりました。",
      "来月[らいげつ]は、一緒[いっしょ]に映画[えいが]を見[み]に行[い]く予定[よてい]です。",
      "語学[ごがく]の勉強[べんきょう]は、友達[ともだち]ができるのも楽[たの]しいところです。"
    ],
    translation: [
      "Last week, I got a new language exchange partner.",
      "His name is Mike, and he came from America.",
      "I teach Japanese, and Mike teaches me English.",
      "Every Saturday, we talk for about an hour at a cafe.",
      "At first, I was nervous speaking English.",
      "But Mike speaks slowly, so it is easy to understand.",
      "Recently, I have become able to speak English little by little.",
      "Next month, we plan to go see a movie together.",
      "The fun part of studying a language is making friends."
    ],
    vocab: [
      { word: "語学", reading: "ごがく", meaning: "language study" },
      { word: "パートナー", reading: "ぱーとなー", meaning: "partner" },
      { word: "教える", reading: "おしえる", meaning: "to teach" },
      { word: "毎週", reading: "まいしゅう", meaning: "every week" },
      { word: "土曜日", reading: "どようび", meaning: "Saturday" },
      { word: "緊張", reading: "きんちょう", meaning: "nervous" },
      { word: "ゆっくり", reading: "ゆっくり", meaning: "slowly" },
      { word: "分かりやすい", reading: "わかりやすい", meaning: "easy to understand" },
      { word: "映画", reading: "えいが", meaning: "movie" },
      { word: "予定", reading: "よてい", meaning: "plan" },
      { word: "勉強", reading: "べんきょう", meaning: "study" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 結婚式への招待状 (A wedding invitation)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-25",
    title: "結婚式[けっこんしき]への招待状[しょうたいじょう]",
    titleReading: "けっこんしきへのしょうたいじょう",
    level: "N4",
    summary: "Nikki receives a wedding invitation from a college friend and goes shopping for a dress to wear in Kyoto.",
    estMinutes: 4,
    tags: ["celebration", "shopping"],
    body: [
      "先週[せんしゅう]、大学[だいがく]の友達[ともだち]から結婚式[けっこんしき]の招待状[しょうたいじょう]が届[とど]きました。",
      "来月[らいげつ]、京都[きょうと]で結婚式[けっこんしき]があります。",
      "招待状[しょうたいじょう]をもらって、とても嬉[うれ]しくなりました。",
      "でも、何[なに]を着[き]ていけばいいか迷[まよ]っています。",
      "先週末[せんしゅうまつ]、友達[ともだち]と一緒[いっしょ]に、服[ふく]を買[か]いに行[い]きました。",
      "深[ふか]い青色[あおいろ]のドレスを見[み]つけました。似合[にあ]うと思[おも]いました。",
      "式[しき]の後[ご]、披露宴[ひろうえん]にも出席[しゅっせき]します。",
      "友達[ともだち]の幸[しあわ]せな姿[すがた]を見[み]るのが楽[たの]しみです。"
    ],
    translation: [
      "Last week, a wedding invitation arrived from a college friend.",
      "Next month, there will be a wedding in Kyoto.",
      "I was very happy to receive the invitation.",
      "But I am still unsure what to wear.",
      "Last weekend, I went shopping for clothes with a friend.",
      "I found a deep blue dress. I thought it suited me.",
      "After the ceremony, I will also attend the reception.",
      "I am looking forward to seeing my friend's happy face."
    ],
    vocab: [
      { word: "結婚式", reading: "けっこんしき", meaning: "wedding" },
      { word: "招待状", reading: "しょうたいじょう", meaning: "invitation" },
      { word: "届く", reading: "とどく", meaning: "to arrive" },
      { word: "嬉しい", reading: "うれしい", meaning: "glad" },
      { word: "着る", reading: "きる", meaning: "to wear" },
      { word: "迷う", reading: "まよう", meaning: "to hesitate" },
      { word: "服", reading: "ふく", meaning: "clothes" },
      { word: "深い", reading: "ふかい", meaning: "deep" },
      { word: "似合う", reading: "にあう", meaning: "to suit" },
      { word: "披露宴", reading: "ひろうえん", meaning: "wedding reception" },
      { word: "出席", reading: "しゅっせき", meaning: "attendance" },
      { word: "幸せ", reading: "しあわせ", meaning: "happiness" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — イベントでのボランティア (Volunteering at an event)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-26",
    title: "イベントでのボランティア",
    titleReading: "いべんとでのぼらんてぃあ",
    level: "N4",
    summary: "Nikki volunteers at a local festival, guiding foreign tourists in English and feeling useful to others.",
    estMinutes: 4,
    tags: ["community", "volunteering"],
    body: [
      "日曜日[にちようび]に、町[まち]のお祭[まつ]りでボランティアをしました。",
      "朝[あさ]八時[はちじ]に集合[しゅうごう]して、役割[やくわり]をもらいました。",
      "私[わたし]は、外国[がいこく]人[ひと]の観光客[かんこうきゃく]に道[みち]を案内[あんない]する係[かかり]でした。",
      "最初[さいしょ]は、英語[えいご]で話[はな]すのが少[すこ]し緊張[きんちょう]しました。",
      "でも、みんなが「ありがとう」と笑顔[えがお]で言[い]ってくれました。",
      "昼[ひる]には、お弁当[べんとう]をもらいました。とても美味[おい]しかったです。",
      "夕方[ゆうがた]まで働[はたら]いて、足[あし]が痛[いた]くなりました。",
      "でも、人[ひと]の役[やく]に立[た]って、気分[きぶん]がよかったです。",
      "来年[らいねん]もまた参加[さんか]したいと思[おも]っています。"
    ],
    translation: [
      "On Sunday, I volunteered at a town festival.",
      "We gathered at eight in the morning and were given our roles.",
      "My role was to guide foreign tourists along the way.",
      "At first, I was a little nervous speaking English.",
      "But everyone said \"thank you\" with a smile.",
      "At noon, we received a bento box. It was very delicious.",
      "We worked until evening, and my legs started to hurt.",
      "But I felt good being helpful to others.",
      "I would like to participate again next year."
    ],
    vocab: [
      { word: "お祭り", reading: "おまつり", meaning: "festival" },
      { word: "ボランティア", reading: "ぼらんてぃあ", meaning: "volunteer" },
      { word: "集合", reading: "しゅうごう", meaning: "gathering" },
      { word: "役割", reading: "やくわり", meaning: "role" },
      { word: "外国人", reading: "がいこくじん", meaning: "foreigner" },
      { word: "観光客", reading: "かんこうきゃく", meaning: "tourist" },
      { word: "案内", reading: "あんない", meaning: "guidance" },
      { word: "係", reading: "かかり", meaning: "person in charge" },
      { word: "緊張", reading: "きんちょう", meaning: "nervous" },
      { word: "笑顔", reading: "えがお", meaning: "smile" },
      { word: "お弁当", reading: "おべんとう", meaning: "bento box" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "役に立つ", reading: "やくにたつ", meaning: "to be helpful" },
      { word: "参加", reading: "さんか", meaning: "participation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 停電 (A power outage)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-27",
    title: "停電[ていでん]",
    titleReading: "ていでん",
    level: "N4",
    summary: "A sudden power outage leaves the town in darkness; Nikki and her cat wait together until the lights return.",
    estMinutes: 3,
    tags: ["daily life", "slice of life"],
    body: [
      "昨日[きのう]の夜[よる]、突然[とつぜん]、電気[でんき]が消[き]えました。",
      "最初[さいしょ]は停電[ていでん]だと思[おも]いませんでした。",
      "窓[まど]から外[そと]を見[み]ると、町[まち]全体[ぜんたい]が暗[くら]くなっていました。",
      "スマホのライトをつけて、ロウソクを探[さが]しました。",
      "ニキは少[すこ]し怖[こわ]がって、私[わたし]のそばに来[き]ました。",
      "暗[くら]い中[なか]で、本[ほん]を読[よ]むことができませんでした。",
      "ニキと一緒[いっしょ]に、おしゃべりをしながら待[ま]ちました。",
      "二時間[にじかん]後[ご]、やっと電気[でんき]が戻[もど]って、安心[あんしん]しました。"
    ],
    translation: [
      "Last night, the electricity suddenly went out.",
      "At first, I did not think it was a power outage.",
      "When I looked outside from the window, the whole town had gone dark.",
      "I turned on my phone's flashlight and looked for candles.",
      "Nikki was a little scared and came near me.",
      "In the dark, I could not read a book.",
      "I waited while chatting with Nikki.",
      "After two hours, the power finally came back and I was relieved."
    ],
    vocab: [
      { word: "停電", reading: "ていでん", meaning: "power outage" },
      { word: "突然", reading: "とつぜん", meaning: "suddenly" },
      { word: "電気", reading: "でんき", meaning: "electricity" },
      { word: "消える", reading: "きえる", meaning: "to go out" },
      { word: "窓", reading: "まど", meaning: "window" },
      { word: "全体", reading: "ぜんたい", meaning: "whole" },
      { word: "暗い", reading: "くらい", meaning: "dark" },
      { word: "探す", reading: "さがす", meaning: "to search" },
      { word: "怖がる", reading: "こわがる", meaning: "to be scared" },
      { word: "読む", reading: "よむ", meaning: "to read" },
      { word: "待つ", reading: "まつ", meaning: "to wait" },
      { word: "戻る", reading: "もどる", meaning: "to return" },
      { word: "安心", reading: "あんしん", meaning: "relief" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 中古車を買う (Buying a used car)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-28",
    title: "中古車[ちゅうこしゃ]を買[か]う",
    titleReading: "ちゅうこしゃをかう",
    level: "N4",
    summary: "Nikki decides to buy a used car, visits a shop a friend recommended, and picks a small, fuel-efficient one.",
    estMinutes: 4,
    tags: ["shopping", "daily life"],
    body: [
      "先月[せんげつ]、車[くるま]を買[か]うことにしました。",
      "新[あたら]しい車[くるま]は高[たか]かったので、中古車[ちゅうこしゃ]を探[さが]すことにしました。",
      "友達[ともだち]が紹介[しょうかい]してくれたお店[みせ]に行[い]きました。",
      "お店[みせ]には、いろいろな車[くるま]がありました。",
      "店員[てんいん]が、それぞれの車[くるま]の特徴[とくちょう]を説明[せつめい]してくれました。",
      "私[わたし]は、小[ちい]さくて燃費[ねんぴ]がいい車[くるま]を選[えら]びました。",
      "試運転[しうんてん]もして、運転[うんてん]しやすいと感[かん]じました。",
      "来週[らいしゅう]、車[くるま]が家[いえ]に届[とど]く予定[よてい]です。",
      "週末[しゅうまつ]に、友達[ともだち]を乗[の]せてドライブに行[い]くつもりです。"
    ],
    translation: [
      "Last month, I decided to buy a car.",
      "New cars were expensive, so I decided to look for a used one.",
      "I went to a shop a friend introduced to me.",
      "There were various cars at the shop.",
      "A clerk explained the features of each car to me.",
      "I chose a small car with good fuel efficiency.",
      "I also took a test drive and felt it was easy to drive.",
      "Next week, the car is scheduled to be delivered to my house.",
      "On the weekend, I plan to take my friends for a drive."
    ],
    vocab: [
      { word: "中古車", reading: "ちゅうこしゃ", meaning: "used car" },
      { word: "高い", reading: "たかい", meaning: "expensive" },
      { word: "探す", reading: "さがす", meaning: "to search" },
      { word: "紹介", reading: "しょうかい", meaning: "introduction" },
      { word: "店", reading: "みせ", meaning: "shop" },
      { word: "店員", reading: "てんいん", meaning: "clerk" },
      { word: "特徴", reading: "とくちょう", meaning: "feature" },
      { word: "説明", reading: "せつめい", meaning: "explanation" },
      { word: "小さい", reading: "ちいさい", meaning: "small" },
      { word: "燃費", reading: "ねんぴ", meaning: "fuel efficiency" },
      { word: "選ぶ", reading: "えらぶ", meaning: "to choose" },
      { word: "試運転", reading: "しうんてん", meaning: "test drive" },
      { word: "運転", reading: "うんてん", meaning: "driving" },
      { word: "届く", reading: "とどく", meaning: "to be delivered" },
      { word: "週末", reading: "しゅうまつ", meaning: "weekend" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 町内会 (The neighborhood association)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-29",
    title: "町内会[ちょうないかい]",
    titleReading: "ちょうないかい",
    level: "N4",
    summary: "Nikki attends her first neighborhood association meeting, learns local rules, and meets a kind neighbor.",
    estMinutes: 4,
    tags: ["community", "daily life"],
    body: [
      "引越[ひっこ]してから、初[はじ]めて町内会[ちょうないかい]の集[あつ]まりに参加[さんか]しました。",
      "会場[かいじょう]は、近[ちか]くの公民館[こうみんかん]でした。",
      "町長[ちょうちょう]が、地域[ちいき]のルールやゴミの日[ひ]を説明[せつめい]しました。",
      "隣[となり]に住[す]むおばあさんが、親切[しんせつ]に話[はな]しかけてくれました。",
      "「何[なに]かあったら、遠慮[えんりょ]しないで言[い]ってね」と言[い]われました。",
      "みんなで、お茶[ちゃ]とお菓子[かし]を食[た]べながら歓談[かんだん]しました。",
      "知[し]らない人[ひと]が多[おお]かったですが、少[すこ]しずつ顔[かお]を覚[おぼ]えました。",
      "来月[らいげつ]は、町内会[ちょうないかい]の掃除[そうじ]の当番[とうばん]があるそうです。",
      "新[あたら]しい町[まち]での生活[せいかつ]が、少[すこ]しずつ始[はじ]まっています。"
    ],
    translation: [
      "After moving, I participated in a neighborhood association meeting for the first time.",
      "The venue was a nearby community center.",
      "The neighborhood head explained the local rules and garbage days.",
      "An old woman living next door kindly spoke to me.",
      "She told me, \"If anything happens, don't hesitate to tell me.\"",
      "We all had tea and sweets while chatting together.",
      "There were many people I did not know, but I gradually remembered their faces.",
      "I hear there is a cleaning duty for the association next month.",
      "My life in the new town is slowly beginning."
    ],
    vocab: [
      { word: "町内会", reading: "ちょうないかい", meaning: "neighborhood association" },
      { word: "集まり", reading: "あつまり", meaning: "gathering" },
      { word: "参加", reading: "さんか", meaning: "participation" },
      { word: "会場", reading: "かいじょう", meaning: "venue" },
      { word: "公民館", reading: "こうみんかん", meaning: "community center" },
      { word: "地域", reading: "ちいき", meaning: "area" },
      { word: "説明", reading: "せつめい", meaning: "explanation" },
      { word: "隣", reading: "となり", meaning: "next door" },
      { word: "親切", reading: "しんせつ", meaning: "kind" },
      { word: "遠慮", reading: "えんりょ", meaning: "hesitation" },
      { word: "歓談", reading: "かんだん", meaning: "chatting" },
      { word: "掃除", reading: "そうじ", meaning: "cleaning" },
      { word: "当番", reading: "とうばん", meaning: "duty" },
      { word: "生活", reading: "せいかつ", meaning: "life" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N4 — 懐かしい帰省 (A nostalgic visit home)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n4-30",
    title: "懐[なつ]かしい帰省[きせい]",
    titleReading: "なつかしいきせい",
    level: "N4",
    summary: "Nikki visits her family home for the first time in two years during Obon and shares warm memories with her family.",
    estMinutes: 4,
    tags: ["family", "nostalgia"],
    body: [
      "お盆[ぼん]に、二年[にねん]ぶりに実家[じっか]に帰[かえ]りました。",
      "両親[りょうしん]が駅[えき]まで迎[むか]えに来[き]てくれました。",
      "母[はは]が、私[わたし]の好[す]きな料理[りょうり]をたくさん作[つく]ってくれました。",
      "弟[おとうと]も帰[かえ]っていて、家族[かぞく]四人[よにん]で食事[しょくじ]をしました。",
      "食後[しょくご]、みんなで古[ふる]いアルバムを見[み]ました。",
      "子[こ]どもの時[とき]の写真[しゃしん]を見[み]て、懐[なつ]かしくなりました。",
      "翌日[よくじつ]は、子[こ]どもの頃[ころ]よく行[い]った公園[こうえん]を散歩[さんぽ]しました。",
      "何[なに]も変[か]わっていないようで、少[すこ]しずつ変[か]わっていました。",
      "実家[じっか]に帰[かえ]ると、心[こころ]が温[あたた]かくなります。"
    ],
    translation: [
      "During Obon, I went back to my family home for the first time in two years.",
      "My parents came to pick me up at the station.",
      "My mother made lots of my favorite dishes.",
      "My younger brother had also come home, and the four of us had a meal together.",
      "After the meal, we all looked at an old photo album.",
      "Looking at photos from my childhood, I felt nostalgic.",
      "The next day, I took a walk in the park I often went to as a child.",
      "It seemed like nothing had changed, but it had changed little by little.",
      "Going back to my family home warms my heart."
    ],
    vocab: [
      { word: "お盆", reading: "おぼん", meaning: "Obon holiday" },
      { word: "実家", reading: "じっか", meaning: "family home" },
      { word: "両親", reading: "りょうしん", meaning: "parents" },
      { word: "迎えに来る", reading: "むかえにくる", meaning: "to come pick up" },
      { word: "母", reading: "はは", meaning: "mother" },
      { word: "弟", reading: "おとうと", meaning: "younger brother" },
      { word: "家族", reading: "かぞく", meaning: "family" },
      { word: "食事", reading: "しょくじ", meaning: "meal" },
      { word: "食後", reading: "しょくご", meaning: "after a meal" },
      { word: "古い", reading: "ふるい", meaning: "old" },
      { word: "懐かしい", reading: "なつかしい", meaning: "nostalgic" },
      { word: "翌日", reading: "よくじつ", meaning: "the next day" },
      { word: "散歩", reading: "さんぽ", meaning: "walk" },
      { word: "変わる", reading: "かわる", meaning: "to change" }
    ]
  }
];
