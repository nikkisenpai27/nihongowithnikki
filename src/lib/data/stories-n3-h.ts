import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 N3-level short stories (sx-n3-71 .. sx-n3-80).
// Topics: a museum visit, a power outage, a new neighbor, a summer camp,
// a bicycle race, a missed call, a birthday cake, a traffic jam,
// a letter from home, a starry night.

export const storiesN3H: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 美術館の見学 (A museum visit)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-71",
    title: "美[び]術[じゅつ]館[かん]の見[けん]学[がく]",
    titleReading: "びじゅつかんのけんがく",
    level: "N3",
    summary: "A solo Sunday visit to a city art museum sparks fresh interest in Japanese-style painting and quiet reflection.",
    estMinutes: 5,
    tags: ["museum", "art", "solitude"],
    body: [
      "先[せん]週[しゅう]の日[にち]曜[よう]日[び]、私[わたし]は一[ひと]人[り]で市[し]の美[び]術[じゅつ]館[かん]に行[い]った。最[さい]近[きん]、日[に]本[ほん]画[が]に興[きょう]味[み]を持[も]つようになったからだ。",
      "美[び]術[じゅつ]館[かん]は駅[えき]から徒[と]歩[ほ]十五[じゅうご]分[ふん]の場[ば]所[しょ]にあり、古[ふる]い建[たて]物[もの]を改[かい]装[そう]して作[つく]られたらしい。入[いり]口[ぐち]でチケットを買[か]って中[なか]に入[はい]った。",
      "最[さい]初[しょ]の部[へ]屋[や]には風[ふう]景[けい]画[が]が並[なら]んでいた。どれも百[ひゃく]年[ねん]以[い]上[じょう]前[まえ]の作[さく]品[ひん]で、色[いろ]あせているところもあるが、それがかえって味[あじ]わい深[ぶか]く見[み]えた。",
      "二[ふた]つ目[め]の部[へ]屋[や]には肖[しょう]像[ぞう]画[が]が展[てん]示[じ]されていた。描[か]かれた人[ひと]の表[ひょう]情[じょう]がとてもリアルで、まるでこちらを見[み]ているようだった。",
      "私[わたし]は特[とく]に一[いっ]枚[まい]の絵[え]に心[こころ]を打[う]たれた。夕[ゆう]暮[ぐ]れの海[うみ]を描[えが]いた作[さく]品[ひん]で、静[しず]けさの中[なか]にどこか悲[かな]しさが感[かん]じられた。",
      "館[かん]内[ない]では写[しゃ]真[しん]撮[さつ]影[えい]が禁[きん]止[し]されていたので、絵[え]の前[まえ]でしばらく立[た]ち止[と]まり、心[こころ]に刻[きざ]むことにした。",
      "帰[かえ]りにミュージアムショップで絵[え]葉[は]書[がき]を三[さん]枚[まい]買[か]った。家[いえ]に飾[かざ]れば、あの美[うつく]しい色[いろ]を毎[まい]日[にち]思[おも]い出[だ]せるだろう。"
    ],
    translation: [
      "Last Sunday, I went to the city art museum alone. Recently, I've become interested in Japanese-style painting.",
      "The museum is a fifteen-minute walk from the station, and I heard it was made by renovating an old building. I bought a ticket at the entrance and went inside.",
      "In the first room, landscape paintings were lined up. All were works over a hundred years old, and although some colors had faded, that made them look even more profound.",
      "In the second room, portraits were displayed. The expressions of the people painted were so realistic that it seemed as if they were looking at me.",
      "I was particularly moved by one painting. It depicted the sea at dusk, and within its silence I sensed a kind of sadness.",
      "Photography was forbidden inside the museum, so I stopped in front of the painting for a while and tried to engrave it in my heart.",
      "On my way home, I bought three picture postcards at the museum shop. If I decorate my house with them, I'll be able to recall those beautiful colors every day."
    ],
    vocab: [
      { word: "美術館", reading: "びじゅつかん", meaning: "art museum" },
      { word: "見学", reading: "けんがく", meaning: "study visit" },
      { word: "日本画", reading: "にほんが", meaning: "Japanese-style painting" },
      { word: "興味", reading: "きょうみ", meaning: "interest" },
      { word: "徒歩", reading: "とほ", meaning: "on foot" },
      { word: "改装", reading: "かいそう", meaning: "renovation" },
      { word: "風景画", reading: "ふうけいが", meaning: "landscape painting" },
      { word: "肖像画", reading: "しょうぞうが", meaning: "portrait" },
      { word: "展示", reading: "てんじ", meaning: "display" },
      { word: "夕暮れ", reading: "ゆうぐれ", meaning: "dusk" },
      { word: "禁止", reading: "きんし", meaning: "prohibition" },
      { word: "絵葉書", reading: "えはがき", meaning: "picture postcard" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 停電の夜 (A power outage)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-72",
    title: "停[てい]電[でん]の夜[よる]",
    titleReading: "ていでんのよる",
    level: "N3",
    summary: "A sudden blackout turns an ordinary evening into a quiet, candlelit night away from screens and noise.",
    estMinutes: 5,
    tags: ["blackout", "calm", "everyday"],
    body: [
      "昨[さく]夜[や]、私[わたし]が夕[ゆう]食[しょく]を作[つく]っていた時[とき]、突[とつ]然[ぜん]電[でん]気[き]が消[き]えた。台[だい]所[どころ]だけではなく、町[まち]全[ぜん]体[たい]が真[ま]っ暗[くら]になった。",
      "最[さい]初[しょ]は何[なに]が起[お]きたのか分[わ]からなかったが、すぐに停[てい]電[でん]だと気[き]づいた。冷[れい]蔵[ぞう]庫[こ]もテレビもエアコンも動[うご]かなくなってしまった。",
      "スマートフォンで確[たし]かめてみると、近[きん]所[しょ]の電[でん]線[せん]でトラブルがあったらしい。復[ふっ]旧[きゅう]には二[に]時[じ]間[かん]くらいかかると書[か]かれていた。",
      "私[わたし]は引[ひ]き出[だ]しからろうそくを取[と]り出[だ]して火[ひ]をつけた。明[あか]るくなると、少[すこ]しだけ落[お]ち着[つ]いた気[き]持[も]ちになった。",
      "普[ふ]段[だん]ならネットを見[み]たり動[どう]画[が]を見[み]たりする夜[よる]だが、今[こん]夜[や]はそれができない。しかたなく、本[ほん]を読[よ]むことにした。",
      "ろうそくの光[ひかり]の下[した]で本[ほん]を読[よ]むのは、子[こ]どもの頃[ころ]以[い]来[らい]だった。文[も]字[じ]が見[み]えにくかったが、かえって集[しゅう]中[ちゅう]できた。",
      "二[に]時[じ]間[かん]後[ご]、パッと明[あか]りが戻[もど]った。機[き]械[かい]が一[いっ]斉[せい]に動[うご]き出[だ]した音[おと]がして、日[にち]常[じょう]が帰[かえ]ってきた気[き]がした。",
      "停[てい]電[でん]のおかげで、久[ひさ]しぶりに静[しず]かな夜[よる]を過[す]ごせた。たまにはこういう時[とき]間[かん]も悪[わる]くないと思[おも]った。"
    ],
    translation: [
      "Last night, while I was making dinner, the electricity suddenly went out. Not just the kitchen, but the whole town went pitch black.",
      "At first, I didn't know what had happened, but I soon realized it was a power outage. The refrigerator, TV, and air conditioner all stopped working.",
      "When I checked my smartphone, it said there had been trouble with the power lines nearby. It would take about two hours to restore.",
      "I took candles out of the drawer and lit them. Once it was bright, I felt a little calmer.",
      "Normally, I'd spend the night browsing the internet or watching videos, but tonight I couldn't. With no other choice, I decided to read a book.",
      "Reading a book by candlelight was something I hadn't done since I was a child. The letters were hard to see, but that helped me focus instead.",
      "Two hours later, the lights came back with a pop. The sound of machines starting up at once made me feel like everyday life had returned.",
      "Thanks to the power outage, I was able to spend a quiet night for the first time in a while. I thought such an evening wasn't so bad once in a while."
    ],
    vocab: [
      { word: "停電", reading: "ていでん", meaning: "power outage" },
      { word: "台所", reading: "だいどころ", meaning: "kitchen" },
      { word: "真っ暗", reading: "まっくら", meaning: "pitch black" },
      { word: "冷蔵庫", reading: "れいぞうこ", meaning: "refrigerator" },
      { word: "電線", reading: "でんせん", meaning: "power line" },
      { word: "復旧", reading: "ふっきゅう", meaning: "restoration" },
      { word: "ろうそく", reading: "ろうそく", meaning: "candle" },
      { word: "引き出し", reading: "ひきだし", meaning: "drawer" },
      { word: "動画", reading: "どうが", meaning: "video" },
      { word: "一斉に", reading: "いっせいに", meaning: "all at once" },
      { word: "日常", reading: "にちじょう", meaning: "everyday life" },
      { word: "久しぶり", reading: "ひさしぶり", meaning: "after a long time" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 新しい隣人 (A new neighbor)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-73",
    title: "新[あたら]しい隣[りん]人[じん]",
    titleReading: "あたらしいりんじん",
    level: "N3",
    summary: "A young woman moves in next door, and a small towel-greeting becomes the start of a friendly neighborhood relationship.",
    estMinutes: 4,
    tags: ["neighbor", "greeting", "new-beginnings"],
    body: [
      "先[せん]週[しゅう]の土[ど]曜[よう]日[び]、私[わたし]の隣[となり]の部[へ]屋[や]に新[あたら]しい住[じゅう]人[にん]が越[こ]してきた。午[ご]前[ぜん]中[ちゅう]から荷[に]物[もつ]を運[はこ]ぶ音[おと]が聞[き]こえていた。",
      "夕[ゆう]方[がた]、私[わたし]が帰[き]宅[たく]した時[とき]、廊[ろう]下[か]で若[わか]い女[じょ]性[せい]に会[あ]った。彼[かの]女[じょ]が新[あたら]しい隣[りん]人[じん]だった。",
      "私[わたし]は自[じ]己[こ]紹[しょう]介[かい]をしようと思[おも]い、近[きん]所[しょ]の挨[あい]拶[さつ]のしるしにタオルを一[いっ]本[ぽん]持[も]って彼[かの]女[じょ]のドアをノックした。",
      "彼[かの]女[じょ]は笑[え]顔[がお]でドアを開[あ]けてくれた。「はじめまして、田[た]中[なか]と申[もう]します」と私[わたし]が言[い]うと、彼[かの]女[じょ]も名[な]前[まえ]を教[おし]えてくれた。",
      "話[はなし]を聞[き]くと、彼[かの]女[じょ]は来[らい]月[げつ]から近[きん]所[しょ]の設[せっ]計[けい]事[じ]務[む]所[しょ]で働[はたら]くらしい。デザインの仕[し]事[ごと]をしているとのことだった。",
      "彼[かの]女[じょ]は「何[なに]か分[わ]からないことがあったら、聞[き]いてくださいね」と言[い]ってくれた。とても感[かん]じのいい人[ひと]だと思[おも]った。",
      "その夜[よる]、私[わたし]は実[じっ]家[か]の母[はは]に電[でん]話[わ]で「隣[となり]にいい人[ひと]が越[こ]してきたよ」と報[ほう]告[こく]した。母[はは]も安[あん]心[しん]したようだった。",
      "これからご近[きん]所[しょ]付[つ]き合[あ]いが始[はじ]まる。時[とき]々、おすそ分[わ]けをしたり、お茶[ちゃ]を飲[の]んだりできたらいいなと思[おも]っている。"
    ],
    translation: [
      "Last Saturday, a new resident moved into the apartment next to mine. From the morning, I could hear the sound of them carrying in luggage.",
      "In the evening, when I came home, I met a young woman in the hallway. She was the new neighbor.",
      "I decided to introduce myself, so I took a towel as a small neighborhood greeting and knocked on her door.",
      "She opened the door with a smile. When I said, \"How do you do, I'm Tanaka,\" she told me her name too.",
      "According to her, she'll start working at a nearby design office next month. She said she does design work.",
      "She said, \"If there's anything you don't understand, please ask me.\" I thought she was a very pleasant person.",
      "That night, I called my mother back home and reported, \"A nice person moved in next door.\" My mother seemed relieved too.",
      "From now on, our neighborhood relationship will begin. I hope we can share treats and have tea together from time to time."
    ],
    vocab: [
      { word: "隣人", reading: "りんじん", meaning: "neighbor" },
      { word: "住人", reading: "じゅうにん", meaning: "resident" },
      { word: "引っ越す", reading: "ひっこす", meaning: "to move house" },
      { word: "帰宅", reading: "きたく", meaning: "returning home" },
      { word: "廊下", reading: "ろうか", meaning: "hallway" },
      { word: "自己紹介", reading: "じこしょうかい", meaning: "self-introduction" },
      { word: "挨拶", reading: "あいさつ", meaning: "greeting" },
      { word: "設計", reading: "せっけい", meaning: "design" },
      { word: "事務所", reading: "じむしょ", meaning: "office" },
      { word: "報告", reading: "ほうこく", meaning: "report" },
      { word: "安心", reading: "あんしん", meaning: "relief" },
      { word: "付き合い", reading: "つきあい", meaning: "association" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 夏のキャンプ (A summer camp)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-74",
    title: "夏[なつ]のキャンプ",
    titleReading: "なつのきゃんぷ",
    level: "N3",
    summary: "A university club's summer camp in the mountains brings BBQ, campfire songs, and a sky full of stars.",
    estMinutes: 5,
    tags: ["camp", "summer", "nature"],
    body: [
      "今[こ]年[とし]の夏[なつ]休[やす]み、私[わたし]は大[だい]学[がく]のサークルの友[とも]達[だち]とキャンプに行[い]った。場[ば]所[しょ]は山[やま]の中[なか]にあるキャンプ場[じょう]で、車[くるま]で二[に]時[じ]間[かん]ほどかかった。",
      "着[つ]いた時[とき]は昼[ひる]過[す]ぎだった。私[わたし]たちはすぐにテントを張[は]り始[はじ]めたが、思[おも]ったより難[むずか]しかった。",
      "先[せん]輩[ぱい]が丁[てい]寧[ねい]に教[おし]えてくれたおかげで、なんとか二[に]張[ちょう]のテントを組[く]み立[た]てることができた。次[つぎ]に、焚[たき]火[び]の場[ば]所[しょ]を準[じゅん]備[び]した。",
      "夕[ゆう]方[がた]になると、みんなでBBQを始[はじ]めた。肉[にく]や野[や]菜[さい]を焼[や]く匂[にお]いが漂[ただよ]ってきて、お腹[なか]が一[いっ]層[そう]空[す]いてきた。",
      "夜[よる]は焚[たき]火[び]を囲[かこ]んで、歌[うた]を歌[うた]ったりゲームをしたりした。都[と]会[かい]では絶[ぜっ]対[たい]にできない体[たい]験[けん]だ。",
      "夜[よ]中[なか]、ふと目[め]が覚[さ]めた。テントの外[そと]に出[で]ると、空[そら]には星[ほし]がぎっしりと輝[かがや]いていた。その美[うつく]しさに圧[あっ]倒[とう]された。",
      "翌[よく]朝[あさ]は川[かわ]で魚[さかな]釣[つ]りをした。私[わたし]は一[いっ]匹[ぴき]も釣[つ]れなかったが、友[とも]達[だち]が三[さん]匹[ぴき]釣[つ]ってくれた。それを焼[や]いて朝[ちょう]食[しょく]にした。",
      "帰[かえ]りの車[くるま]の中[なか]で、みんな「また来[こ]よう」と言[い]い合[あ]った。自[し]然[ぜん]の中[なか]で過[す]ごす時[とき]間[かん]は、本[ほん]当[とう]に心[こころ]地[よ]よいものだった。"
    ],
    translation: [
      "This summer vacation, I went camping with friends from my university club. The place was a campsite in the mountains, about a two-hour drive.",
      "When we arrived, it was just past noon. We immediately started pitching tents, but it was harder than we'd expected.",
      "Thanks to a senior carefully teaching us, we somehow managed to set up two tents. Next, we prepared the spot for the campfire.",
      "In the evening, we started a BBQ together. The smell of grilling meat and vegetables drifted over, and we got even hungrier.",
      "At night, we gathered around the campfire, sang songs, and played games. It's an experience you could never have in the city.",
      "In the middle of the night, I woke up. When I stepped outside the tent, the sky was packed with shining stars. I was overwhelmed by the beauty.",
      "The next morning, we went fishing in the river. I didn't catch a single one, but a friend caught three. We grilled them for breakfast.",
      "On the drive home, everyone said, \"Let's come again.\" Spending time in nature was truly refreshing."
    ],
    vocab: [
      { word: "キャンプ", reading: "きゃんぷ", meaning: "camp" },
      { word: "キャンプ場", reading: "きゃんぷじょう", meaning: "campsite" },
      { word: "テント", reading: "てんと", meaning: "tent" },
      { word: "張る", reading: "はる", meaning: "to pitch" },
      { word: "焚き火", reading: "たきび", meaning: "campfire" },
      { word: "匂い", reading: "におい", meaning: "smell" },
      { word: "漂う", reading: "ただよう", meaning: "to drift" },
      { word: "都会", reading: "とかい", meaning: "city" },
      { word: "圧倒される", reading: "あっとうされる", meaning: "to be overwhelmed" },
      { word: "魚釣り", reading: "さかなつり", meaning: "fishing" },
      { word: "自然", reading: "しぜん", meaning: "nature" },
      { word: "心地よい", reading: "こころよい", meaning: "pleasant" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 自転車レース (A bicycle race)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-75",
    title: "自[じ]転[てん]車[しゃ]レース",
    titleReading: "じてんしゃれーす",
    level: "N3",
    summary: "A rider trains through early mornings and joins a town bicycle race, aiming to beat his own best time.",
    estMinutes: 5,
    tags: ["race", "training", "perseverance"],
    body: [
      "来[らい]月[げつ]、町[まち]で自[じ]転[てん]車[しゃ]レースが開[ひら]かれることになった。私[わたし]は三[さん]年[ねん]前[まえ]に一[いっ]度[ど]参[さん]加[か]しただけだが、今[こ]年[とし]も出[で]ることにした。",
      "コースは町[まち]の外[はず]れを一[いっ]周[しゅう]する約[やく]二[に]十[じゅっ]キロで、途[と]中[ちゅう]に坂[さか]がいくつかある。完[かん]走[そう]するには、それなりに準[じゅん]備[び]が必[ひつ]要[よう]だ。",
      "私[わたし]は毎[まい]朝[あさ]五[ご]時[じ]に起[お]きて、近[きん]所[しょ]の川[かわ]沿[ぞい]いを走[はし]ることにした。最[さい]初[しょ]は五[ご]キロがやっとだったが、今[いま]では十[じゅう]五[ご]キロ走[はし]れるようになった。",
      "友[とも]達[だち]の山[やま]田[だ]さんも参[さん]加[か]するそうで、週[しゅう]末[まつ]は一[いっ]緒[しょ]に練[れん]習[しゅう]することになった。彼[かれ]は高[こう]校[こう]時[じ]代[だい]から自[じ]転[てん]車[しゃ]をしていたそうだ。",
      "レースの当[とう]日[じつ]は晴[は]れた。朝[あさ]七[しち]時[じ]にスタート地[ち]点[てん]に集[あつ]まると、約[やく]百[ひゃく]人[にん]の選[せん]手[しゅ]がいた。みんな真[しん]剣[けん]な表[ひょう]情[じょう]をしていた。",
      "スタートの合[あい]図[ず]とともに、一[いっ]斉[せい]に走[はし]り出[だ]した。私[わたし]は前[ぜん]半[はん]は無[む]理[り]をせず、後[こう]半[はん]に力[ちから]を残[のこ]す作[さく]戦[せん]をとった。",
      "最[さい]後[ご]の坂[さか]で足[あし]が棒[ぼう]になりそうだったが、応[おう]援[えん]する声[こえ]に励[はげ]まされてゴールまで走[はし]り抜[ぬ]いた。タイムは去[きょ]年[ねん]より三[さん]分[ぷん]も短[みじか]かった。",
      "順[じゅん]位[い]は十[じゅう]五[ご]位[い]だったが、自[じ]分[ぶん]のベストを出[だ]せたので満[まん]足[ぞく]だ。来[らい]年[ねん]は十[じゅう]位[い]以[い]内[ない]を目[め]指[さ]して、もっと練[れん]習[しゅう]しようと思[おも]う。"
    ],
    translation: [
      "Next month, a bicycle race will be held in town. I had only participated once, three years ago, but I decided to enter again this year.",
      "The course is about twenty kilometers around the outskirts of town, with some slopes along the way. To finish, I need proper preparation.",
      "I decided to wake up at five every morning and ride along the nearby river. At first I could barely manage five kilometers, but now I can ride fifteen.",
      "My friend Yamada is also participating, so we'll practice together on weekends. He's been cycling since high school.",
      "The day of the race was sunny. When I gathered at the start at seven in the morning, about a hundred riders were there. Everyone had serious expressions.",
      "With the starting signal, we all set off at once. I took a strategy of not pushing too hard in the first half and saving energy for the latter half.",
      "On the last slope, my legs felt like sticks, but encouraged by the cheers, I ran through to the goal. My time was three minutes shorter than last year.",
      "I placed fifteenth, but I'm satisfied because I gave my best. I want to practice more and aim for the top ten next year."
    ],
    vocab: [
      { word: "自転車", reading: "じてんしゃ", meaning: "bicycle" },
      { word: "レース", reading: "れーす", meaning: "race" },
      { word: "完走", reading: "かんそう", meaning: "finishing a race" },
      { word: "川沿い", reading: "かわぞい", meaning: "along the river" },
      { word: "選手", reading: "せんしゅ", meaning: "athlete" },
      { word: "合図", reading: "あいず", meaning: "signal" },
      { word: "作戦", reading: "さくせん", meaning: "strategy" },
      { word: "応援", reading: "おうえん", meaning: "cheering" },
      { word: "順位", reading: "じゅんい", meaning: "ranking" },
      { word: "ベスト", reading: "べすと", meaning: "best" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "目指す", reading: "めざす", meaning: "to aim for" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 不在着信 (A missed call)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-76",
    title: "不[ふ]在[ざい]着[ちゃく]信[しん]",
    titleReading: "ふざいちゃくしん",
    level: "N3",
    summary: "Three late-night missed calls from an unknown number turn out to be a clinic reaching out about a forgotten appointment.",
    estMinutes: 4,
    tags: ["phone", "family", "mystery"],
    body: [
      "金[きん]曜[よう]の夜[よる]、私[わたし]はスマートフォンを見[み]ると、知[し]らない番[ばん]号[ごう]からの着[ちゃく]信[しん]が三[さん]件[けん]もあった。どうやら寝[ね]ている間[あいだ]にかかってきたらしい。",
      "折[おり]り返[かえ]しかけ直[なお]そうか迷[まよ]ったが、深[しん]夜[や]に知[し]らない番[ばん]号[ごう]から連[れん]絡[らく]が来[く]るのは不[ふ]審[しん]に思[おも]えた。そのまま一[いっ]晩[ばん]放[ほう]置[ち]した。",
      "翌[よく]朝[あさ]、もう一[いっ]度[ど]番[ばん]号[ごう]を確[たし]かめてみた。市[し]外[がい]局[きょく]番[ばん]からすると、実[じっ]家[か]のある県[けん]の番[ばん]号[ごう]だと分[わ]かった。",
      "もしかすると、何[なに]か急[きゅう]な用[よう]事[じ]があるのかもしれない。私[わたし]はためらいながらも、昼[ひる]過[す]ぎに電[でん]話[わ]をかけ直[なお]した。",
      "三[さん]回[かい]目[め]の呼[よ]び出[だ]しで、女[じょ]性[せい]が出[で]た。「はい、山[やま]本[もと]医[い]院[いん]です」と言[い]う。どうやら病[びょう]院[いん]のようだった。",
      "私[わたし]が「昨[さく]夜[や]着[ちゃく]信[しん]がありました」と説[せつ]明[めい]すると、受[うけ]付[つけ]の人[ひと]が「お母[かあ]様[さま]がご予[よ]約[やく]を忘[わす]れていらっしゃいました」と教[おし]えてくれた。",
      "母[はは]は最[さい]近[きん]耳[みみ]が遠[とお]くなっていて、電[でん]話[わ]をかける時[とき]にもよく間[ま]違[ちが]えるらしい。受[うけ]付[つけ]の人[ひと]がわざわざ連[れん]絡[らく]してくれたのだ。",
      "私[わたし]は母[はは]に電[でん]話[わ]をして、予[よ]約[やく]の時間[じかん]をもう一度[いちど]確[たし]かめた。一件落着[いっけんらくちゃく]だが、見[み]知[し]らぬ番[ばん]号[ごう]も必[かなら]ず確[たし]かめるべきだと学[まな]んだ。"
    ],
    translation: [
      "On Friday night, when I looked at my smartphone, I found three missed calls from an unknown number. It seems they came while I was sleeping.",
      "I hesitated about whether to call back, but a call from an unknown number late at night seemed suspicious. I left it alone for the night.",
      "The next morning, I checked the number again. From the area code, I realized it was from the prefecture where my family home is.",
      "Maybe there's some urgent business. Hesitantly, I called back just after noon.",
      "On the third ring, a woman answered. \"Yes, this is Yamamoto Clinic,\" she said. It seemed to be a clinic.",
      "When I explained, \"I had a missed call last night,\" the receptionist told me, \"Your mother had forgotten her appointment.\"",
      "My mother has become hard of hearing lately, and apparently often dials wrong numbers. The receptionist had taken the trouble to contact me.",
      "I called my mother and reconfirmed the appointment time. The matter was settled, but I learned I should always check unknown numbers too."
    ],
    vocab: [
      { word: "不在着信", reading: "ふざいちゃくしん", meaning: "missed call" },
      { word: "番号", reading: "ばんごう", meaning: "number" },
      { word: "折り返し", reading: "おりかえし", meaning: "in return" },
      { word: "迷う", reading: "まよう", meaning: "to hesitate" },
      { word: "不審", reading: "ふしん", meaning: "suspicious" },
      { word: "放置", reading: "ほうち", meaning: "leaving as is" },
      { word: "市外局番", reading: "しがいきょくばん", meaning: "area code" },
      { word: "県", reading: "けん", meaning: "prefecture" },
      { word: "医院", reading: "いいん", meaning: "clinic" },
      { word: "受付", reading: "うけつけ", meaning: "reception" },
      { word: "一件落着", reading: "いっけんらくちゃく", meaning: "case closed" },
      { word: "間違える", reading: "まちがえる", meaning: "to make a mistake" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 誕生日ケーキ (A birthday cake)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-77",
    title: "誕[たん]生[じょう]日[び]ケーキ",
    titleReading: "たんじょうびけーき",
    level: "N3",
    summary: "A first attempt at baking a strawberry shortcake becomes a heartfelt gift for a younger sister's twentieth birthday.",
    estMinutes: 5,
    tags: ["birthday", "baking", "family"],
    body: [
      "来[らい]週[しゅう]、妹[いもうと]の二[に]十[じゅう]歳[さい]の誕[たん]生[じょう]日[び]を迎[むか]える。私[わたし]は今[こ]年[とし]こそ手[て]作[づく]りのケーキを作[つく]ってあげようと思[おも]い立[た]った。",
      "これまで何[なん]度[ど]か料[りょう]理[り]はしたことがあるが、ケーキを作[つく]るのは初[はじ]めてだ。失[しっ]敗[ぱい]したらどうしようと少[すこ]し心[しん]配[ぱい]だった。",
      "まず、インターネットで簡[かん]単[たん]なショートケーキの作[つく]り方[かた]を調[しら]べた。材[ざい]料[りょう]は卵[たまご]、砂[さ]糖[とう]、小[こ]麦[むぎ]粉[こ]、生[なま]クリームなど、思[おも]ったより少[すく]なかった。",
      "日[にち]曜[よう]日[び]の午[ご]後[ご]、私[わたし]は材[ざい]料[りょう]を揃[そろ]えてキッチンに立[た]った。スポンジを焼[や]くところから始[はじ]めることにした。",
      "卵[らん]白[ぱく]を泡[あわ]立[た]てるのに思[おも]ったより時[じ]間[かん]がかかった。手[て]が痛[いた]くなるほど混[ま]ぜて、やっと固[かた]いメレンゲができた。",
      "オーブンに入[い]れてからは、香[こう]ばしい匂[にお]いがキッチンに広[ひろ]がった。三[さん]十[じゅっ]分[ぷん]後[ご]、きれいな色[いろ]のスポンジが焼[や]き上[あ]がった。",
      "冷[さ]めたスポンジを二[ふた]枚[まい]に切[き]り、間[あいだ]に苺[いちご]とクリームを挟[はさ]んだ。上[うえ]にも苺[いちご]を飾[かざ]って、出[で]来[き]上[あ]がりにした。",
      "誕[たん]生[じょう]日[び]の当[とう]日[じつ]、妹[いもうと]はケーキを見[み]て目[め]を丸[まる]くした。「お兄[にい]ちゃんが作[つく]ってくれたの？」と驚[おどろ]いていた。一[ひと]口[くち]食[た]べると「すごくおいしい！」と笑[え]顔[がお]を見[み]せた。手[て]作[づく]りの贈[おく]り物[もの]は、お金[かね]で買[か]うものとは違[ちが]う温[あたた]かさがあると思[おも]った。"
    ],
    translation: [
      "Next week, my younger sister will turn twenty. I decided that this year I'd make her a homemade cake.",
      "I've cooked several times before, but this is my first time making a cake. I was a bit worried about what would happen if I failed.",
      "First, I looked up a simple shortcake recipe online. The ingredients—eggs, sugar, flour, fresh cream—were fewer than I expected.",
      "On Sunday afternoon, I gathered the ingredients and stood in the kitchen. I decided to start by baking the sponge.",
      "Whipping the egg whites took longer than I expected. I mixed until my hand hurt, and finally got stiff meringue.",
      "Once I put it in the oven, a fragrant smell spread through the kitchen. After thirty minutes, a nicely colored sponge was baked.",
      "After cooling, I cut the sponge in two and sandwiched strawberries and cream between the layers. I decorated the top with strawberries too, and it was done.",
      "On her birthday, my sister's eyes widened when she saw the cake. \"You made this, big brother?\" she said in surprise. After one bite, she smiled and said, \"It's really delicious!\" I thought a homemade gift has a warmth that money can't buy."
    ],
    vocab: [
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "ケーキ", reading: "けーき", meaning: "cake" },
      { word: "手作り", reading: "てづくり", meaning: "homemade" },
      { word: "思い立つ", reading: "おもいたつ", meaning: "to decide to do" },
      { word: "失敗", reading: "しっぱい", meaning: "failure" },
      { word: "ショートケーキ", reading: "しょーとけーき", meaning: "shortcake" },
      { word: "材料", reading: "ざいりょう", meaning: "ingredients" },
      { word: "小麦粉", reading: "こむぎこ", meaning: "flour" },
      { word: "生クリーム", reading: "なまくりーむ", meaning: "fresh cream" },
      { word: "卵白", reading: "らんぱく", meaning: "egg white" },
      { word: "泡立てる", reading: "あわたてる", meaning: "to whip" },
      { word: "飾る", reading: "かざる", meaning: "to decorate" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 交通渋滞 (A traffic jam)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-78",
    title: "交[こう]通[つう]渋[じゅう]滞[たい]",
    titleReading: "こうつうじゅうたい",
    level: "N3",
    summary: "A Monday morning drive to the neighboring prefecture becomes a three-hour ordeal stuck in highway traffic.",
    estMinutes: 5,
    tags: ["traffic", "commute", "reflection"],
    body: [
      "月[げつ]曜[よう]日[び]の朝[あさ]、私[わたし]は仕[し]事[ごと]で隣[となり]の県[けん]まで車[くるま]で行[い]かなければならなかった。いつもなら一[いっ]時[じ]間[かん]半[はん]で着[つ]くはずの道[みち]のりだ。",
      "しかし、高[こう]速[そく]道[どう]路[ろ]に入[はい]ってすぐ、車[くるま]が全[まった]く進[すす]まなくなった。ラジオで聞[き]くと、前[ぜん]方[ぽう]で事[じ]故[こ]が起[お]きたらしい。",
      "一[いっ]時[じ]間[かん]たっても二[に]時[じ]間[かん]たっても、車[くるま]は少[すこ]しずつしか前[まえ]に動[うご]かなかった。私[わたし]はイライラして、何[なん]度[ど]も時[と]計[けい]を見[み]た。",
      "隣[となり]の車[くるま]の運[うん]転[てん]手[しゅ]は窓[まど]を開[あ]けて、外[そと]の様[よう]子[す]を見[み]に行[い]った。他[ほか]の運[うん]転[てん]手[しゅ]たちもクラクションを鳴[な]らしたり、タバコを吸[す]ったりしていた。",
      "私[わたし]はスマートフォンで会[かい]社[しゃ]に連[れん]絡[らく]を入[い]れた。「渋[じゅう]滞[たい]に巻[ま]き込[こ]まれて、少[すこ]し遅[おく]れる」と伝[つた]えると、上[じょう]司[し]は「無[む]理[り]しないで」と言[い]ってくれた。",
      "三[さん]時[じ]間[かん]後[ご]、ようやく車[くるま]が動[うご]き出[だ]した。事[じ]故[こ]現[げん]場[ば]を通[とお]り過[す]ぎると、ロープで囲[かこ]まれた場[ば]所[しょ]に壊[こわ]れた車[くるま]があった。",
      "会[かい]社[しゃ]に着[つ]いたのは昼[ひる]過[す]ぎだった。予[よ]定[てい]より二[に]時[じ]間[かん]遅[おく]れだったが、会[かい]議[ぎ]には間[ま]に合[あ]った。心[こころ]からほっとした。",
      "帰[かえ]りの電[でん]車[しゃ]で、私[わたし]は「車[くるま]で行[い]くべきではなかった」と反[はん]省[せい]した。次[つぎ]は時[じ]間[かん]に余[よ]裕[ゆう]を持[も]って、電[でん]車[しゃ]で行[い]こうと思[おも]う。"
    ],
    translation: [
      "On Monday morning, I had to drive to the neighboring prefecture for work. It's a trip that should normally take an hour and a half.",
      "However, soon after I entered the highway, the cars stopped moving at all. According to the radio, an accident had occurred ahead.",
      "Even after an hour, then two, the cars barely moved forward. I grew irritated and checked my watch over and over.",
      "The driver in the next car opened his window and went to check the situation outside. Other drivers honked their horns or smoked.",
      "I sent a message to my company from my smartphone. When I said, \"I'm caught in traffic and will be a bit late,\" my boss replied, \"Don't push yourself.\"",
      "Three hours later, the cars finally started moving. When I passed the accident site, there was a broken car inside a roped-off area.",
      "I arrived at the office just past noon. I was two hours later than planned, but I made it to the meeting. I was truly relieved.",
      "On the train home, I reflected, \"I shouldn't have gone by car.\" Next time, I'll take the train with plenty of time to spare."
    ],
    vocab: [
      { word: "交通渋滞", reading: "こうつうじゅうたい", meaning: "traffic jam" },
      { word: "高速道路", reading: "こうそくどうろ", meaning: "highway" },
      { word: "進む", reading: "すすむ", meaning: "to advance" },
      { word: "事故", reading: "じこ", meaning: "accident" },
      { word: "運転手", reading: "うんてんしゅ", meaning: "driver" },
      { word: "クラクション", reading: "くらくしょん", meaning: "horn" },
      { word: "巻き込まれる", reading: "まきこまれる", meaning: "to be caught in" },
      { word: "上司", reading: "じょうし", meaning: "boss" },
      { word: "事故現場", reading: "じこげんば", meaning: "accident site" },
      { word: "予定", reading: "よてい", meaning: "schedule" },
      { word: "反省", reading: "はんせい", meaning: "reflection" },
      { word: "余裕", reading: "よゆう", meaning: "margin" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 実家からの手紙 (A letter from home)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-79",
    title: "実[じっ]家[か]からの手[て]紙[がみ]",
    titleReading: "じっかからのてがみ",
    level: "N3",
    summary: "A handwritten letter from the writer's mother, with homemade sweets, prompts a long-overdue promise to visit home.",
    estMinutes: 4,
    tags: ["letter", "family", "nostalgia"],
    body: [
      "先[せん]週[しゅう]、私[わたし]の郵[ゆう]便[びん]受[う]けに一[いっ]通[つう]の手[て]紙[がみ]が入[はい]っていた。見[み]覚[おぼ]えのあるひらがなで、母[はは]の字[じ]だとすぐに分[わ]かった。",
      "実[じっ]家[か]の母[はは]から手[て]紙[がみ]が来[く]るのは珍[めずら]しい。普[ふ]段[だん]は電[でん]話[わ]やLINEで連[れん]絡[らく]を取[と]るからだ。何[なに]かあったのかと心[しん]配[ぱい]になった。",
      "家[いえ]に帰[かえ]って封[ふう]を開[あ]けると、中[なか]にはちり紙[がみ]で包[つつ]んだお菓[か]子[し]と手[て]紙[がみ]が入[はい]っていた。お菓[か]子[し]は母[はは]の手[て]作[づく]りのようだった。",
      "手[て]紙[がみ]には「最[さい]近[きん]寒[さむ]くなったから、体[からだ]に気[き]をつけて」と書[か]かれてあった。また、近[きん]所[しょ]の桜[さくら]の木[き]が大[おお]きくなったことや、父[ちち]が最[さい]近[きん]庭[にわ]仕[し]事[ごと]を始[はじ]めたことも書[か]かれていた。",
      "母[はは]は「会[あ]いたくなったら、いつでも帰[かえ]っておいで」と最[さい]後[ご]に添[そ]えてくれた。その言[こと]葉[ば]を読[よ]んで、胸[むね]が熱[あつ]くなった。",
      "私[わたし]は上[じょう]京[きょう]して五[ご]年[ねん]になるが、両[りょう]親[しん]にはなかなか会[あ]いに行[い]けないでいる。仕[し]事[ごと]が忙[いそが]しいのは本[ほん]当[とう]だが、それを言[い]い訳[わけ]にしている自[じ]分[ぶん]もいる。",
      "その夜[よる]、私[わたし]は母[はは]にお礼[れい]の手[て]紙[がみ]を書[か]くことにした。パソコンで打[う]つのではなく、ペンでゆっくり書[か]いた。",
      "「来[らい]月[げつ]の連[れん]休[きゅう]には、必[かなら]ず帰[き]省[せい]します」と書[か]いた。手[て]紙[がみ]という形[かたち]は、メールにはない温[あたた]かさがあると改[あらた]めて感[かん]じた。"
    ],
    translation: [
      "Last week, a letter was in my mailbox. With familiar hiragana, I knew at once it was my mother's handwriting.",
      "It's rare to get a letter from my mother back home. We usually keep in touch by phone or LINE, so I worried something might have happened.",
      "When I got home and opened it, inside were sweets wrapped in paper and a letter. The sweets seemed homemade by my mother.",
      "The letter said, \"It's gotten cold lately, so take care of your health.\" It also mentioned that the neighbor's cherry tree had grown big and that my father had recently started gardening.",
      "At the end, my mother added, \"Come home whenever you miss us.\" Reading those words warmed my heart.",
      "It's been five years since I came to Tokyo, but I rarely get to visit my parents. It's true that work is busy, but part of me is using that as an excuse.",
      "That night, I decided to write a thank-you letter to my mother. Instead of typing on a computer, I wrote slowly with a pen.",
      "I wrote, \"I'll definitely come home for next month's long weekend.\" I felt anew that a letter has a warmth email lacks."
    ],
    vocab: [
      { word: "実家", reading: "じっか", meaning: "family home" },
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "郵便受け", reading: "ゆうびんうけ", meaning: "mailbox" },
      { word: "見覚え", reading: "みおぼえ", meaning: "familiarity" },
      { word: "珍しい", reading: "めずらしい", meaning: "rare" },
      { word: "ちり紙", reading: "ちりがみ", meaning: "tissue paper" },
      { word: "お菓子", reading: "おかし", meaning: "sweets" },
      { word: "添える", reading: "そえる", meaning: "to add" },
      { word: "上京", reading: "じょうきょう", meaning: "coming to Tokyo" },
      { word: "言い訳", reading: "いいわけ", meaning: "excuse" },
      { word: "帰省", reading: "きせい", meaning: "returning home" },
      { word: "改めて", reading: "あらためて", meaning: "anew" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 星空の夜 (A starry night)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-80",
    title: "星[ほし]空[ぞら]の夜[よる]",
    titleReading: "ほしぞらのよる",
    level: "N3",
    summary: "A friend guides a mountain stargazing trip that reveals constellations, a shooting star, and a vow to return.",
    estMinutes: 5,
    tags: ["stars", "mountain", "nature"],
    body: [
      "先[せん]週[しゅう]末[まつ]、私[わたし]は友[ゆう]人[じん]と一[いっ]緒[しょ]に星[ほし]を見[み]に行[い]った。場[ば]所[しょ]は町[まち]から車[くるま]で一[いっ]時[じ]間[かん]ほどの山[やま]の上[うえ]にあるキャンプ場[じょう]だった。",
      "町[まち]の空[くう]気[き]は汚[よご]れているため、星[ほし]はなかなか見[み]えない。しかし、山[やま]の上[うえ]なら、空[くう]気[き]が澄[す]んでいて、たくさんの星[ほし]が見[み]られるはずだ。",
      "着[つ]いたのは夕[ゆう]方[がた]六[ろく]時[じ]ごろだった。まずテントを張[は]って、簡[かん]単[たん]な夕[ゆう]食[しょく]を作[つく]った。外[そと]で食[た]べる食[しょく]事[じ]は、やはり特[とく]別[べつ]な味[あじ]がした。",
      "九[く]時[じ]を過[す]ぎると、空[そら]が少[すこ]しずつ暗[くら]くなり、星[ほし]が一[ひと]つ、また一[ひと]つと現[あらわ]れ始[はじ]めた。やがて空[そら]全[ぜん]体[たい]に星[ほし]が散[ち]りばめられたようになった。",
      "友[ゆう]人[じん]が星[せい]座[ざ]の名[な]前[まえ]を教[おし]えてくれた。「あれがオリオン座[ざ]、あちらが北[ほく]斗[と]七[しち]星[せい]」と指[ゆび]差[さ]しながら説[せつ]明[めい]してくれた。",
      "私[わたし]たちは寝[ね]袋[ぶくろ]に入[はい]り、仰[あお]向[む]けに寝[ね]転[ころ]がって空[そら]を見[み]上[あ]げた。静[しず]かな夜[よ]風[かぜ]が頬[ほほ]を撫[な]でて、都[と]会[かい]では味[あじ]わえない静[しじ]寂[ま]があった。",
      "突[とつ]然[ぜん]、一[いっ]筋[すじ]の流[なが]れ星[ぼし]が空[そら]を横[よこ]切[ぎ]った。「あっ、流[なが]れ星[ぼし]！」と叫[さけ]ぶと、友[ゆう]人[じん]も「すごい」と声[こえ]を上[あ]げた。願[ねが]い事[ごと]をする間[ま]もなかった。",
      "翌[よく]朝[あさ]、山[やま]を下[お]りながら、私[わたし]は「また来[こ]よう」と心[こころ]に誓[ちか]った。星[ほし]空[ぞら]の美[うつく]しさは、一[いっ]度[ど]見[み]たら忘[わす]れられないものだと実[じっ]感[かん]した。"
    ],
    translation: [
      "Last weekend, I went with a friend to look at the stars. The place was a campsite on a mountain about an hour's drive from town.",
      "The air in town is polluted, so stars are hard to see. But on the mountain, the air is clear, so we should be able to see many stars.",
      "We arrived around six in the evening. First we pitched a tent and made a simple dinner. Eating outdoors did have a special flavor after all.",
      "After nine, the sky gradually darkened, and stars began to appear one by one. Before long, it was as if the whole sky were studded with stars.",
      "My friend taught me the names of the constellations. Pointing, he explained, \"That's Orion, and over there is the Big Dipper.\"",
      "We got into our sleeping bags and lay on our backs looking up at the sky. A quiet night breeze brushed our cheeks, and there was a silence you can't experience in the city.",
      "Suddenly, a single shooting star crossed the sky. \"Ah, a shooting star!\" I cried out, and my friend also exclaimed, \"Amazing.\" There wasn't even time to make a wish.",
      "The next morning, as we came down the mountain, I vowed in my heart, \"Let's come again.\" I truly felt that the beauty of a starry sky is something you can never forget once you've seen it."
    ],
    vocab: [
      { word: "星空", reading: "ほしぞら", meaning: "starry sky" },
      { word: "澄む", reading: "すむ", meaning: "to be clear" },
      { word: "キャンプ場", reading: "きゃんぷじょう", meaning: "campsite" },
      { word: "散りばめる", reading: "ちりばめる", meaning: "to stud" },
      { word: "星座", reading: "せいざ", meaning: "constellation" },
      { word: "北斗七星", reading: "ほくとしちせい", meaning: "Big Dipper" },
      { word: "寝袋", reading: "ねぶくろ", meaning: "sleeping bag" },
      { word: "仰向け", reading: "あおむけ", meaning: "face up" },
      { word: "夜風", reading: "よかぜ", meaning: "night breeze" },
      { word: "静寂", reading: "しじま", meaning: "silence" },
      { word: "流れ星", reading: "ながれぼし", meaning: "shooting star" },
      { word: "実感", reading: "じっかん", meaning: "realization" }
    ]
  }
];
