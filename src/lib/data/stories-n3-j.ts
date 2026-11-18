import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level short stories (sx-n3-91 .. sx-n3-100).
// Topics: a childhood memory, a bus journey, a new camera, a quiet cafe,
// a farm visit, a swimming pool, a grandfather's watch, a street festival,
// a library card, a first snowfall.

export const storiesN3J: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 子どもの頃の思い出 (A childhood memory)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-91",
    title: "子[こ]どもの時[とき]の思[おも]い出[で]",
    titleReading: "こどものときのおもいで",
    level: "N3",
    summary: "An old photo album brings back the carefree days of childhood — parks, bug hunts, and forgotten feelings.",
    estMinutes: 4,
    tags: ["childhood", "memory", "slice of life"],
    body: [
      "昔[むかし]のアルバムを開[あ]けてみると、色[いろ]あせた写真[しゃしん]がたくさん出[で]てきた。子[こ]どもの頃[ころ]の私[わたし]が、笑[わら]ってカメラを見[み]つめている。",
      "写真[しゃしん]の中[なか]の私[わたし]は毎日[まいにち]を全[まった]く心配[しんぱい]なしに過[す]ごしていたように見[み]える。当時[とうじ]の私[わたし]には時間[じかん]が無限[むげん]にあるように思[おも]えたのだ。",
      "一番[いちばん]記憶[きおく]に残[のこ]っているのは、近所[きんじょ]の公園[こうえん]で友達[ともだち]と遊[あそ]んだ日[ひ]々だ。私[わたし]たちは毎日[まいにち]夕方[ゆうがた]まで走[はし]り回[まわ]って、泥[どろ]だらけになって帰[かえ]った。",
      "特[とく]に楽[たの]しかったのは、夏[なつ]の終[お]わりにやった虫取[むしと]りだ。カブト虫[むし]やクワガタを探[さが]して、林[はやし]の中[なか]を歩[ある]き回[まわ]ったものだ。",
      "あの時代[じだい]に戻[もど]れるわけではないが、このアルバムを見[み]るだけで心[こころ]が温[あたた]かくなる。大人[おとな]になってからは忘[わす]れていた感情[かんじょう]が再[ふたた]び湧[わ]いてくる。",
      "写真[しゃしん]を閉[と]じた後[あと]、私[わたし]は窓[まど]の外[そと]を眺[なが]めた。あの頃[ころ]の自分[じぶん]のように、今日[きょう]も素直[すなお]に喜[よろこ]ぶ心[こころ]を忘[わす]れないようにしようと思[おも]った。"
    ],
    translation: [
      "When I opened the old album, many faded photos fell out. The childhood me was smiling into the camera.",
      "The me in the photos seemed to live each day without any worry at all. Back then, time felt infinite to me.",
      "What I remember most clearly are the days I played with friends at the neighborhood park. We ran around until evening every day, and came home covered in mud.",
      "What was especially fun was bug catching at the end of summer. We used to search for beetles and stag beetles, walking all through the woods.",
      "I can't go back to that era, but just looking at this album warms my heart. Feelings I had forgotten since becoming an adult come welling up again.",
      "After closing the album, I gazed out the window. I told myself to keep a heart that rejoices honestly, just like I did back then."
    ],
    vocab: [
      { word: "思い出", reading: "おもいで", meaning: "memory" },
      { word: "アルバム", reading: "あるばむ", meaning: "photo album" },
      { word: "色あせる", reading: "いろあせる", meaning: "to fade (in color)" },
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "心配", reading: "しんぱい", meaning: "worry" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "夕方", reading: "ゆうがた", meaning: "evening" },
      { word: "虫取り", reading: "むしとり", meaning: "bug catching" },
      { word: "記憶", reading: "きおく", meaning: "memory; recollection" },
      { word: "感情", reading: "かんじょう", meaning: "emotion" },
      { word: "素直", reading: "すなお", meaning: "honest; obedient" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — バスの旅 (A bus journey)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-92",
    title: "バスの旅[たび]",
    titleReading: "ばすのたび",
    level: "N3",
    summary: "A three-hour long-distance bus ride turns delightful thanks to scenery and an elderly seatmate's stories.",
    estMinutes: 5,
    tags: ["travel", "slice of life", "conversation"],
    body: [
      "今朝[けさ]、私[わたし]は久[ひさ]しぶりに長距離[ちょうきょり]バスに乗[の]った。目的地[もくてきち]までは三時間[さんじかん]ほどかかると聞[き]いていた。",
      "バスが動[うご]き出[だ]すと、窓[まど]の外[そと]の町[まち]の風景[ふうけい]がゆっくりと流[なが]れていった。普段[ふだん]見慣[みな]れない田舎[いなか]の道[みち]に、心[こころ]が少[すこ]し落[お]ち着[つ]いた。",
      "途中[とちゅう]、隣[となり]の席[せき]に座[すわ]ったお年寄[としよ]りが話[はな]しかけてきた。「どこまで行[い]くの？」と聞[き]かれ、私[わたし]は終点[しゅうてん]までだと答[こた]えた。",
      "彼女[かのじょ]は若[わか]い頃[ころ]にこの地方[ちほう]に住[す]んでいたそうで、窓[まど]から見[み]える山[やま]や川[かわ]について色[いろ]々な話[はなし]をしてくれた。話[はなし]を聞[き]いているうちに、時間[じかん]が経[た]つのが早[はや]く感[かん]じられた。",
      "二時間[にじかん]ほど経[た]った後[あと]、バスは小[ちい]さな休憩所[きゅうけいしょ]に停[と]まった。私[わたし]たちは外[そと]に出[で]て、温[あたた]かいお茶[ちゃ]を買[か]って少[すこ]し体[からだ]を休[やす]めた。",
      "最後[さいご]の一時間[いちじかん]は山道[やまみち]だった。道[みち]は曲[ま]がりくねっていて、少[すこ]し気分[きぶん]が悪[わる]くなったが、窓[まど]から見[み]えた夕日[ゆうひ]があまりにも美[うつく]しかったので、それだけで我慢[がまん]できた。",
      "終点[しゅうてん]に到着[とうちゃく]した時[とき]、外[そと]の空気[くうき]はひんやりとしていた。思[おも]ったより長[なが]い旅[たび]だったが、隣[となり]の人[ひと]との会話[かいわ]や窓[まど]の風景[ふうけい]のおかげで、とても楽[たの]しい時間[じかん]を過[す]ごせた。"
    ],
    translation: [
      "This morning, I rode a long-distance bus for the first time in a while. I had heard it would take about three hours to reach my destination.",
      "As the bus began to move, the scenery of the town outside the window flowed slowly by. The unfamiliar country roads settled my mind a little.",
      "On the way, an elderly person sitting next to me started a conversation. When asked, \"How far are you going?\" I answered that I was going to the final stop.",
      "She had lived in this region when she was young, and she told me various stories about the mountains and rivers visible from the window. While listening to her, time seemed to pass quickly.",
      "After about two hours, the bus stopped at a small rest area. We went outside, bought hot tea, and rested our bodies a little.",
      "The last hour was a mountain road. The road twisted and turned, and I felt a bit sick, but the sunset I saw from the window was so beautiful that I could bear it.",
      "When I arrived at the final stop, the air outside was cool. It was a longer journey than I had expected, but thanks to the conversation with my neighbor and the scenery from the window, I had a very enjoyable time."
    ],
    vocab: [
      { word: "旅", reading: "たび", meaning: "trip; journey" },
      { word: "距離", reading: "きょり", meaning: "distance" },
      { word: "目的地", reading: "もくてきち", meaning: "destination" },
      { word: "風景", reading: "ふうけい", meaning: "scenery" },
      { word: "年寄り", reading: "としより", meaning: "elderly person" },
      { word: "終点", reading: "しゅうてん", meaning: "final stop" },
      { word: "休憩所", reading: "きゅうけいしょ", meaning: "rest area" },
      { word: "山道", reading: "やまみち", meaning: "mountain road" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" },
      { word: "会話", reading: "かいわ", meaning: "conversation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 新しいカメラ (A new camera)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-93",
    title: "新[あたら]しいカメラ",
    titleReading: "あたらしいかめら",
    level: "N3",
    summary: "A long-awaited new camera opens the eyes to small beauties — autumn light, flowers, and laughing children.",
    estMinutes: 5,
    tags: ["hobby", "photography", "autumn"],
    body: [
      "先週[せんしゅう]、私[わたし]は念願[ねんがん]の新[あたら]しいカメラを買[か]った。長[なが]い間[あいだ]貯金[ちょきん]していたので、手[て]にした時[とき]の喜[よろこ]びは格別[かくべつ]だった。",
      "早速[さっそく]その日[ひ]の夕方[ゆうがた]、近所[きんじょ]の公園[こうえん]へ試写[ししゃ]に行[い]った。秋[あき]の夕日[ゆうひ]が木[き]々を染[そ]めていて、まるで絵画[かいが]のような風景[ふうけい]が広[ひろ]がっていた。",
      "まず、池[いけ]のほとりに咲[さ]いていた花[はな]を写[うつ]してみた。ピントを合[あ]わせるのが難[むずか]しくて何度[なんど]もやり直[なお]したが、うまく撮[と]れた時[とき]は嬉[うれ]しかった。",
      "次[つぎ]に、子[こ]どもたちが走[はし]り回[まわ]っている様子[ようす]を写[うつ]した。動[うご]くものを撮[と]るのはさらに難[むずか]しかったが、自然[しぜん]な笑顔[えがお]を切[き]り取[と]ることができた。",
      "家[いえ]に帰[かえ]ってパソコンで写真[しゃしん]を見[み]てみると、思[おも]ったよりきれいに撮[と]れていた。粒[つぶ]の荒[あら]い部分[ぶぶん]もあったが、それが逆[ぎゃく]に趣[おもむき]を感[かん]じさせた。",
      "カメラを通[とお]して世界[せかい]を見[み]ることで、普段[ふだん]気[き]づかない細[こま]かいところに目[め]が行[い]くようになった。空[そら]の色[いろ]や木[こ]の葉[は]の形[かたち]まで、全[すべ]てが新[あたら]しく見[み]える。",
      "今後[こんご]も毎日[まいにち]一枚[いちまい]は写[うつ]そうと思[おも]っている。こうして少[すこ]しずつ撮[と]り貯[だ]めていけば、自分[じぶん]だけの写真日記[しゃしんにっき]ができあがるはずだ。"
    ],
    translation: [
      "Last week, I bought the new camera I had long wanted. Since I had been saving up for a long time, the joy of holding it was exceptional.",
      "That very evening, I went to a nearby park for a test shoot. The autumn sunset was dyeing the trees, and a scene like a painting spread out before me.",
      "First, I tried photographing a flower blooming by the pond. Focusing was difficult and I redid it many times, but I was happy when I finally got a good shot.",
      "Next, I shot the children running around. Capturing moving things was even harder, but I was able to capture their natural smiles.",
      "When I got home and looked at the photos on my computer, they had come out more beautifully than I expected. Some parts were grainy, but that conversely gave them a certain charm.",
      "By looking at the world through a camera, I've started noticing small things I usually overlook. Even the color of the sky and the shape of leaves all look new.",
      "From now on, I plan to take at least one shot every day. If I keep accumulating them little by little, I should end up with a photo diary all my own."
    ],
    vocab: [
      { word: "念願", reading: "ねんがん", meaning: "long-cherished desire" },
      { word: "貯金", reading: "ちょきん", meaning: "savings" },
      { word: "格別", reading: "かくべつ", meaning: "exceptional" },
      { word: "試写", reading: "ししゃ", meaning: "test shot" },
      { word: "絵画", reading: "かいが", meaning: "painting" },
      { word: "ピント", reading: "ぴんと", meaning: "focus" },
      { word: "切り取る", reading: "きりとる", meaning: "to cut out; to capture" },
      { word: "趣", reading: "おもむき", meaning: "charm; atmosphere" },
      { word: "写真日記", reading: "しゃしんにっき", meaning: "photo diary" },
      { word: "撮り貯める", reading: "とりだめる", meaning: "to stockpile (photos)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 静かなカフェ (A quiet cafe)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-94",
    title: "静[しず]かなカフェ",
    titleReading: "しずかなかふぇ",
    level: "N3",
    summary: "A tucked-away wooden cafe with hand-drip coffee becomes a quiet refuge that stops time on a busy day.",
    estMinutes: 4,
    tags: ["cafe", "slice of life", "relaxation"],
    body: [
      "先週末[せんしゅうまつ]、私[わたし]は町[まち]の外[はず]れにある静[しず]かなカフェを見[み]つけた。大通[おおどお]りから少[すこ]し入[はい]った路地裏[ろじうら]にあって、目立[めだ]たない看板[かんばん]がかかっている。",
      "ドアを開[あ]けると、コーヒーの香気[こうき]がふわっと漂[ただよ]ってきた。店内[てんない]は木造[もくぞう]で温[あたた]かみがあり、客[きゃく]は私[わたし]を含[ふく]めて三人[さんにん]だけだった。",
      "窓際[まどぎわ]の席[せき]に座[すわ]り、メニューを見[み]た。ハンドドリップのコーヒーがいくつか並[なら]んでいて、どれにするか迷[まよ]ってしまった。結局[けっきょく]、ブラジル産[さん]のコーヒーを選[えら]んだ。",
      "待[ま]っている間[あいだ]、本[ほん]を読[よ]もうとしたが、静[しず]かすぎて逆[ぎゃく]に集中[しゅうちゅう]できた。時[とき]々コーヒーを淹[い]れる音[おと]だけが聞[き]えてきて、それがかえって落[お]ち着[つ]いた。",
      "店[みせ]の人[ひと]がコーヒーを持[も]ってきてくれた。「ゆっくり味[あじ]わってくださいね」と笑顔[えがお]で言[い]った。一[ひと]口[くち]飲[の]むと、程[ほど]よい苦[にが]みと甘[あま]みが広[ひろ]がった。",
      "二時間[にじかん]ほどそこで過[す]ごしたが、あっという間[ま]に過[す]ぎた。家[いえ]に帰[かえ]る前[まえ]に、お店[みせ]の人[ひと]に「また来[き]ます」と伝[つた]えた。彼女[かのじょ]は嬉[うれ]しそうにうなずいていた。",
      "このカフェは私[わたし]の新[あたら]しいお気[き]に入[い]りになった。忙[いそが]しい日[ひ]々の中[なか]で、少[すこ]しだけ時間[じかん]を止[と]めてくれる大切[たいせつ]な場所[ばしょ]だ。"
    ],
    translation: [
      "Last weekend, I found a quiet cafe on the outskirts of town. It sits in a back alley just off the main street, with an unobtrusive sign hanging outside.",
      "When I opened the door, the fragrance of coffee drifted softly toward me. The interior was wooden and warm, and there were only three customers including me.",
      "I sat by the window and looked at the menu. Several hand-drip coffees were listed, and I couldn't decide which to choose. In the end, I picked a Brazilian coffee.",
      "While waiting, I tried to read a book, but it was so quiet that I could actually concentrate. Only the sound of coffee brewing reached my ears from time to time, and that was calming in its own way.",
      "The shopkeeper brought the coffee. \"Please take your time and savor it,\" she said with a smile. With one sip, a pleasant balance of bitterness and sweetness spread through my mouth.",
      "I spent about two hours there, but it passed in a flash. Before heading home, I told the shopkeeper, \"I'll come again.\" She nodded happily.",
      "This cafe has become my new favorite. Amid busy days, it's a precious place that stops time, even just a little."
    ],
    vocab: [
      { word: "路地裏", reading: "ろじうら", meaning: "back alley" },
      { word: "看板", reading: "かんばん", meaning: "signboard" },
      { word: "香気", reading: "こうき", meaning: "fragrance" },
      { word: "漂う", reading: "ただよう", meaning: "to drift (scent)" },
      { word: "木造", reading: "もくぞう", meaning: "wooden structure" },
      { word: "ハンドドリップ", reading: "はんどどりっぷ", meaning: "hand drip (coffee)" },
      { word: "集中", reading: "しゅうちゅう", meaning: "concentration" },
      { word: "程よい", reading: "ほどよい", meaning: "moderate; just right" },
      { word: "苦み", reading: "にがみ", meaning: "bitterness" },
      { word: "お気に入り", reading: "おきにいり", meaning: "favorite" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 農場を訪ねる (A farm visit)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-95",
    title: "農場[のうじょう]を訪[たず]ねる",
    titleReading: "のうじょうをたずねる",
    level: "N3",
    summary: "A family strawberry-picking trip to a suburban fruit farm — fresh berries, condensed milk, and homemade jam.",
    estMinutes: 5,
    tags: ["family", "farm", "food"],
    body: [
      "先週末[せんしゅうまつ]、家族[かぞく]で市[し]郊外[こうがい]にある果物[くだもの]農場[のうじょう]へ行[い]った。いちご狩[が]りができると聞[き]いて、子[こ]どもたちがとても喜[よろこ]んだのだ。",
      "農場[のうじょう]に着[つ]くと、大[おお]きなビニールハウスがいくつも並[なら]んでいた。中[なか]に入[はい]ると、甘[あま]いいちごの香[かお]りが鼻[はな]をくすぐった。",
      "スタッフの人[ひと]がいちごの選[えら]び方[かた]を教[おし]えてくれた。「赤[あか]くてつやのあるものが甘[あま]いですよ」と言[い]った。私[わたし]たちはその教[おし]えに従[したが]って、一[ひと]つ一[ひと]つ丁寧[ていねい]に選[えら]んだ。",
      "皿[さら]に取[と]ったいちごを練乳[ねんにゅう]につけて食[た]べた。甘[あま]さと酸味[さんみ]のバランスが完璧[かんぺき]で、子[こ]どもたちが大[おお]きな笑顔[えがお]を見[み]せていた。",
      "摘[つ]み取[と]りが終[お]わった後[あと]、農場[のうじょう]の隅[すみ]にある売店[ばいてん]で、いちごジャムやジュースを買[か]った。どれも手作[てづく]りで、素朴[そぼく]な味[あじ]がした。",
      "帰[かえ]りに、農場[のうじょう]の人[ひと]が「また来年[らいねん]も待[ま]ってますよ」と声[こえ]をかけてくれた。自分[じぶん]で食[た]べ物[もの]を収穫[しゅうかく]する大変[たいへん]さが少[すこ]し分[わ]かったような気[き]がした。",
      "夜[よる]、家[いえ]で食[た]べたケーキにあの農場[のうじょう]のいちごジャムをのせた。一番[いちばん]おいしいジャムだと家族[かぞく]全員[ぜんいん]が言[い]って、来年[らいねん]も必[かなら]ず行[い]こうと約束[やくそく]した。"
    ],
    translation: [
      "Last weekend, my family went to a fruit farm in the city suburbs. The children were delighted to hear that we could pick strawberries.",
      "When we arrived at the farm, several large greenhouses stood in a row. As we stepped inside, the sweet scent of strawberries tickled our noses.",
      "A staff member taught us how to choose strawberries. \"The red, glossy ones are sweet,\" she said. Following that advice, we carefully selected them one by one.",
      "We dipped the strawberries we had picked onto our plates in condensed milk and ate them. The balance of sweetness and sourness was perfect, and the children showed big smiles.",
      "After finishing the picking, we bought strawberry jam and juice at the shop in the corner of the farm. Everything was homemade and had a simple, honest flavor.",
      "On our way back, a farm worker called out, \"We'll be waiting for you again next year.\" I felt I understood a little of how hard it is to harvest food with one's own hands.",
      "That night, at home, we put jam from that farm on the cake we ate. The whole family said it was the best jam, and we promised to definitely go again next year."
    ],
    vocab: [
      { word: "農場", reading: "のうじょう", meaning: "farm" },
      { word: "郊外", reading: "こうがい", meaning: "suburb" },
      { word: "いちご狩り", reading: "いちごがり", meaning: "strawberry picking" },
      { word: "ビニールハウス", reading: "びにーるはうす", meaning: "greenhouse" },
      { word: "鼻をくすぐる", reading: "はなをくすぐる", meaning: "to tickle the nose" },
      { word: "つや", reading: "つや", meaning: "luster; gloss" },
      { word: "練乳", reading: "ねんにゅう", meaning: "condensed milk" },
      { word: "酸味", reading: "さんみ", meaning: "sourness" },
      { word: "収穫", reading: "しゅうかく", meaning: "harvest" },
      { word: "売店", reading: "ばいてん", meaning: "shop; stall" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — プールのある日 (A swimming pool)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-96",
    title: "プールのある日[ひ]",
    titleReading: "ぷーるのあるひ",
    level: "N3",
    summary: "A hot summer day at the city pool with a friend — warm-ups, laps, a race lost, and cold juice by the side.",
    estMinutes: 5,
    tags: ["summer", "sports", "friendship"],
    body: [
      "昨日[きのう]はとても暑[あつ]かったので、友達[ともだち]と一緒[いっしょ]に市営[しえい]プールに行[い]った。夏休[なつやす]み中[ちゅう]だけあって、駐車場[ちゅうしゃじょう]は車[くるま]でいっぱいだった。",
      "プールサイドに出[で]ると、子[こ]どもの笑[わら]い声[ごえ]と水音[みずおと]が響[ひび]いていた。空[そら]は青[あお]く晴[は]れ渡[わた]っていて、まるで夏[なつ]のポスターのような場面[ばめん]だった。",
      "私[わたし]たちはまず浅[あさ]いプールで準備運動[じゅんびうんどう]をした。しばらく泳[およ]いでいなかったので、体[からだ]を慣[な]らす必要[ひつよう]があったのだ。",
      "その後[あと]、25メートルプールで何度[なんど]か往復[おうふく]して泳[およ]いだ。水[みず]の抵抗[ていこう]を感[かん]じながら腕[うで]を動[うご]かすと、少[すこ]しずつ感覚[かんかく]が戻[もど]ってきた。",
      "友達[ともだち]と競争[きょうそう]して泳[およ]いだら、結局[けっきょく]負[ま]けてしまった。彼[かれ]は学生[がくせい]時代[じだい]に水泳部[すいえいぶ]だったそうで、実力[じつりょく]が違[ちが]った。",
      "一時間[いちじかん]ほど泳[およ]いだ後[あと]、プールサイドで冷[つめ]たいジュースを飲[の]んで休[やす]んだ。風[かぜ]が心地[ここち]よくて、そのままずっと寝[ね]転[ころ]んでいたい気分[きぶん]だった。",
      "帰[かえ]る頃[ころ]には体[からだ]が少[すこ]し重[おも]くなっていたが、心[こころ]はすっきりしていた。夏[なつ]はプールに限[かぎ]ると友達[ともだち]と言[い]い合[あ]いながら帰[かえ]った。"
    ],
    translation: [
      "It was so hot yesterday that I went to the city pool with a friend. As expected for summer vacation, the parking lot was full of cars.",
      "When we stepped out to the poolside, the sound of children's laughter and splashing water echoed around. The sky was blue and clear — a scene like a summer poster.",
      "We first did warm-up exercises in the shallow pool. I hadn't swum in a while, so I needed to get my body used to the water.",
      "After that, we swam back and forth several times in the 25-meter pool. As I moved my arms while feeling the resistance of the water, the sensation gradually came back.",
      "When I raced my friend, I ended up losing. He had been on the swimming team in his student days, so his ability was simply different.",
      "After swimming for about an hour, we drank cold juice and rested by the poolside. The breeze felt so pleasant that I felt like just lying there forever.",
      "By the time we headed home, my body had grown a bit heavy, but my mind was refreshed. As we walked back, we agreed that summer is best spent at the pool."
    ],
    vocab: [
      { word: "市営", reading: "しえい", meaning: "city-run" },
      { word: "プールサイド", reading: "ぷーるさいど", meaning: "poolside" },
      { word: "響く", reading: "ひびく", meaning: "to resound" },
      { word: "晴れ渡る", reading: "はれわたる", meaning: "to clear up completely" },
      { word: "準備運動", reading: "じゅんびうんどう", meaning: "warm-up exercise" },
      { word: "慣らす", reading: "ならす", meaning: "to accustom" },
      { word: "往復", reading: "おうふく", meaning: "round trip" },
      { word: "抵抗", reading: "ていこう", meaning: "resistance" },
      { word: "競争", reading: "きょうそう", meaning: "competition" },
      { word: "実力", reading: "じつりょく", meaning: "ability; skill" },
      { word: "心地よい", reading: "ここちよい", meaning: "pleasant" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 祖父の古い時計 (A grandfather's watch)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-97",
    title: "祖父[そふ]の古[ふる]い時計[とけい]",
    titleReading: "そふのふるいとけい",
    level: "N3",
    summary: "A grandfather's old wristwatch, left behind and repaired, ticks again with the same rhythm — and old memories.",
    estMinutes: 5,
    tags: ["family", "memory", "heirloom"],
    body: [
      "先週[せんしゅう]、実家[じっか]に帰[かえ]った時[とき]、母[はは]が一[ひと]つの箱[はこ]を私[わたし]に渡[わた]してくれた。中[なか]には祖父[そふ]が使[つか]っていた古[ふる]い腕時計[うでどけい]が入[はい]っていた。",
      "祖父[そふ]は五年前[ごねんまえ]に亡[な]くなったが、その時計[とけい]は私[わたし]にくれると遺[のこ]していたそうだ。子[こ]どもの頃[ころ]、私[わたし]はよくその時計[とけい]の音[おと]を聞[き]かせてもらっていた。",
      "箱[はこ]から取[と]り出[だ]してみると、時計[とけい]は動[うご]いていなかった。長[なが]い間[あいだ]使[つか]われていなかったのだ。ガラスには少[すこ]し傷[きず]があったが、本体[ほんたい]はきれいなままだった。",
      "早速[さっそく]近所[きんじょ]の修理店[しゅうりてん]に持[も]っていった。店[みせ]の主[ぬし]は時計[とけい]を手[て]に取[と]って、「これはなかなかの名器[めいき]ですね」と言[い]った。",
      "三日後[みっかご]、店[みせ]から電話[でんわ]がかかってきた。「無事[ぶじ]に動[うご]くようになりました」という知[ち]らせだった。私[わたし]は嬉[うれ]しくて、すぐに取[と]りに行[い]った。",
      "時計[とけい]を手首[てくび]に巻[ま]くと、昔[むかし]と同[おな]じリズムで時計[とけい]が動[うご]き始[はじ]めた。その音[おと]を聞[き]いた瞬間[しゅんかん]、祖父[そふ]の優[やさ]しい笑顔[えがお]が浮[う]かんできた。",
      "今[いま]、私[わたし]は毎日[まいにち]この時計[とけい]を身[み]につけている。ただの時計[とけい]ではなく、祖父[そふ]からの大切[たいせつ]なメッセージのように感[かん]じられるからだ。"
    ],
    translation: [
      "Last week, when I went back to my family home, my mother handed me a box. Inside was an old wristwatch that my grandfather had used.",
      "My grandfather passed away five years ago, but he had left instructions that the watch should be given to me. When I was a child, he often let me listen to the sound of that watch.",
      "When I took it out of the box, the watch was not running. It had not been used for a long time. The glass had a few scratches, but the body itself was still clean.",
      "I took it right away to a repair shop nearby. The owner of the shop held the watch and said, \"This is quite a fine piece.\"",
      "Three days later, the shop called me. It was news that the watch was working again, safe and sound. I was so happy I went to pick it up immediately.",
      "When I strapped the watch to my wrist, it started moving with the same rhythm as in the old days. The moment I heard that sound, my grandfather's gentle smile came to mind.",
      "Now I wear this watch every day. It feels less like a mere watch and more like an important message from my grandfather."
    ],
    vocab: [
      { word: "実家", reading: "じっか", meaning: "family home" },
      { word: "祖父", reading: "そふ", meaning: "grandfather" },
      { word: "腕時計", reading: "うでどけい", meaning: "wristwatch" },
      { word: "遺す", reading: "のこす", meaning: "to leave behind" },
      { word: "本体", reading: "ほんたい", meaning: "main body" },
      { word: "修理店", reading: "しゅうりてん", meaning: "repair shop" },
      { word: "名器", reading: "めいき", meaning: "fine piece; masterpiece" },
      { word: "無事", reading: "ぶじ", meaning: "safely" },
      { word: "手首", reading: "てくび", meaning: "wrist" },
      { word: "瞬間", reading: "しゅんかん", meaning: "moment" },
      { word: "身につける", reading: "みにつける", meaning: "to wear; to acquire" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 町のお祭り (A street festival)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-98",
    title: "町[まち]のお祭[まつ]り",
    titleReading: "まちのおまつり",
    level: "N3",
    summary: "A lively local shrine festival at night — yakisoba, shooting gallery, bon dancing, and goldfish scooping.",
    estMinutes: 5,
    tags: ["festival", "summer", "community"],
    body: [
      "昨日[きのう]の夜[よる]、私[わたし]は町[まち]で開[ひら]かれたお祭[まつ]りに行[い]った。毎年[まいとし]この時期[じき]に開[ひら]かれる神社[じんじゃ]のお祭[まつ]りで、地元[じもと]の人[ひと]にとっては一年[いちねん]で最[もっと]も楽[たの]しい場所[ばしょ]だ。",
      "会場[かいじょう]に近[ちか]づくと、屋台[やたい]から上[あ]がる煙[けむり]と食[た]べ物[もの]のいい匂[にお]いが漂[ただよ]ってきた。子[こ]どもたちの笑[わら]い声[ごえ]と祭[まつ]り囃子[ばやし]の音[おと]が響[ひび]いていた。",
      "まず、焼[や]きそばを買[か]って食[た]べた。屋台[やたい]の親父[おやじ]さんが大[おお]きな鉄板[てっぱん]で一気[いっき]に作[つく]ってくれたもので、熱[あつ]々でとてもおいしかった。",
      "次[つぎ]に、射的[しゃてき]に挑戦[ちょうせん]した。十発[じゅっぱつ]打[う]って二個[にこ]景品[けいひん]をもらった。狙[ねら]った的[まと]に当[あ]たった時[とき]の気分[きぶん]は、子[こ]どもの頃[ころ]を思[おも]い出[だ]させてくれた。",
      "神社[じんじゃ]の前[まえ]では、地元[じもと]の人[ひと]たちが盆踊[ぼんおど]りをしていた。輪[わ]になって踊[おど]る人[ひと]たちの顔[かお]はどれも楽[たの]しそうで、私[わたし]もつられて一緒[いっしょ]に踊[おど]ってしまった。",
      "夜[よる]の九時[くじ]を過[す]ぎると、人[ひと]は少[すこ]しずつ減[へ]っていった。最後[さいご]に金魚[きんぎょ]すくいを一回[いっかい]やって、小[ちい]さな金魚[きんぎょ]を二匹[にひき]もらって帰[かえ]った。",
      "家[いえ]に帰[かえ]る途中[とちゅう]、祭[まつ]り囃子[ばやし]の音[おと]がだんだん遠[とお]くなっていった。毎年[まいとし]のことながら、このお祭[まつ]りは町[まち]の人[ひと]たちを一[ひと]つにする大[おお]きな力[ちから]を持[も]っていると思[おも]った。"
    ],
    translation: [
      "Last night, I went to a festival held in town. It is a shrine festival held every year around this time, and for locals it is the most enjoyable place of the year.",
      "As I approached the grounds, smoke rising from food stalls and the delicious smell of food drifted toward me. The laughter of children and the sound of festival music echoed around.",
      "First, I bought yakisoba and ate it. The stallkeeper had cooked it all at once on a large iron griddle, and it was piping hot and very tasty.",
      "Next, I tried the shooting gallery. I fired ten shots and won two prizes. The feeling of hitting the target I aimed at reminded me of my childhood.",
      "In front of the shrine, local people were doing bon dancing. The faces of the people dancing in a circle all looked so cheerful that I, too, was drawn in and ended up dancing with them.",
      "Once it was past nine at night, the crowd gradually thinned. Finally, I tried goldfish scooping once and took home two small goldfish.",
      "On the way home, the sound of the festival music grew fainter and fainter. It happens every year, but I felt that this festival has a great power to bring the people of the town together."
    ],
    vocab: [
      { word: "神社", reading: "じんじゃ", meaning: "Shinto shrine" },
      { word: "地元", reading: "じもと", meaning: "local" },
      { word: "屋台", reading: "やたい", meaning: "food stall" },
      { word: "祭り囃子", reading: "まつりばやし", meaning: "festival music" },
      { word: "鉄板", reading: "てっぱん", meaning: "iron griddle" },
      { word: "射的", reading: "しゃてき", meaning: "shooting gallery" },
      { word: "景品", reading: "けいひん", meaning: "prize" },
      { word: "盆踊り", reading: "ぼんおどり", meaning: "bon dance" },
      { word: "金魚すくい", reading: "きんぎょすくい", meaning: "goldfish scooping" },
      { word: "輪", reading: "わ", meaning: "circle; ring" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 図書館カード (A library card)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-99",
    title: "図書館[としょかん]カード",
    titleReading: "としょかんかーど",
    level: "N3",
    summary: "A new library card at a new city library opens the door to novels, quiet reading, and a fresh start.",
    estMinutes: 6,
    tags: ["library", "books", "new beginning"],
    body: [
      "先週[せんしゅう]、私[わたし]は引越[ひっこ]し後[ご]初[はじ]めて市立[しりつ]図書館[としょかん]に行[い]った。新[あたら]しいカードを作[つく]る必要[ひつよう]があったので、受付[うけつけ]で手続[てつづ]きをした。",
      "カードは無料[むりょう]で作[つく]れたが、身分証[みぶんしょう]の提出[ていしゅつ]が求[もと]められた。運転免許[うんてんめんきょ]を見[み]せると、職員[しょくいん]は快[かい]く受[う]け付[つ]けてくれた。",
      "カードを手[て]にして、さっそく二階[にかい]の小説[しょうせつ]コーナーへ行[い]った。本棚[ほんだな]がずらりと並[なら]んでいて、どの本[ほん]から読[よ]むべきか迷[まよ]ってしまった。",
      "最終的[さいしゅうてき]に、直木賞[なおきしょう]受賞作[じゅしょうさく]を二冊[にさつ]選[えら]んだ。一冊[いっさつ]は懸疑小説[けんぎしょうせつ]で、もう一冊[いっさつ]は人情物[にんじょうもの]だった。",
      "カードで貸出[かしだし]手続[てつづ]きをした後[あと]、一階[いっかい]の読書[どくしょ]コーナーに座[すわ]って少[すこ]し読[よ]み始[はじ]めた。静[しず]かで集中[しゅうちゅう]しやすい環境[かんきょう]がとても心地[ここち]よかった。",
      "本[ほん]は二週間[にしゅうかん]借[か]りられるそうだ。返却日[へんきゃくび]はカード裏[うら]に印刷[いんさつ]されると職員[しょくいん]が説明[せつめい]してくれた。これからはここに通[かよ]うのが習慣[しゅうかん]になりそうだ。",
      "家[いえ]に帰[かえ]って、机[つくえ]の上[うえ]に本[ほん]を置[お]いた。新[あたら]しい図書館[としょかん]カードは、新[あたら]しい生活[せいかつ]を始[はじ]める私[わたし]にとって、本[ほん]の世界[せかい]へ誘[いざな]ってくれる大切[たいせつ]な鍵[かぎ]のように思[おも]えた。"
    ],
    translation: [
      "Last week, I went to the municipal library for the first time since moving. I needed to make a new card, so I completed the paperwork at the reception desk.",
      "The card was free to make, but I was asked to present an ID. When I showed my driver's license, the staff member gladly accepted it.",
      "With card in hand, I went straight to the novel section on the second floor. Bookshelves stretched out in rows, and I couldn't decide which book to read first.",
      "In the end, I chose two Naoki Prize-winning novels. One was a mystery, and the other was a human-interest story.",
      "After completing the lending procedure with my card, I sat down in the reading area on the first floor and began to read a little. The quiet, easy-to-concentrate environment was very pleasant.",
      "I was told the books can be borrowed for two weeks. A staff member explained that the due date would be printed on the back of the card. It looks like coming here will become a habit.",
      "When I got home, I placed the books on my desk. To me, starting a new life, the new library card felt like a precious key inviting me into the world of books."
    ],
    vocab: [
      { word: "図書館", reading: "としょかん", meaning: "library" },
      { word: "市立", reading: "しりつ", meaning: "municipal; city-run" },
      { word: "身分証", reading: "みぶんしょう", meaning: "identification" },
      { word: "提出", reading: "ていしゅつ", meaning: "submission" },
      { word: "免許", reading: "めんきょ", meaning: "license" },
      { word: "職員", reading: "しょくいん", meaning: "staff member" },
      { word: "小説", reading: "しょうせつ", meaning: "novel" },
      { word: "直木賞", reading: "なおきしょう", meaning: "Naoki Prize (literary award)" },
      { word: "貸出", reading: "かしだし", meaning: "lending" },
      { word: "環境", reading: "かんきょう", meaning: "environment" },
      { word: "習慣", reading: "しゅうかん", meaning: "habit" },
      { word: "返却", reading: "へんきゃく", meaning: "return (of borrowed item)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 初雪の日 (A first snowfall)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-100",
    title: "初雪[はつゆき]の日[ひ]",
    titleReading: "はつゆきのひ",
    level: "N3",
    summary: "An unexpected first snowfall transforms the morning commute and reminds the narrator of childhood wonder.",
    estMinutes: 5,
    tags: ["winter", "snow", "reflection"],
    body: [
      "今朝[けさ]起[お]きると、窓[まど]の外[そと]が真[ま]っ白[しろ]になっていた。天気予報[てんきよほう]では昨夜[ゆうべ]から雪[ゆき]が降[ふ]ると言[い]っていたが、これほどとは思[おも]わなかった。",
      "急[いそ]いで窓[まど]を開[あ]けてみると、冷[つめ]たい空気[くうき]と共[とも]に雪[ゆき]の音[おと]が入[はい]ってきた。今年[ことし]初[はじ]めての雪[ゆき]、つまり初雪[はつゆき]だった。",
      "通勤[つうきん]の準備[じゅんび]をして外[そと]に出[で]ると、道[みち]にはうっすらと雪[ゆき]が積[つ]もっていた。普段[ふだん]の通勤路[つうきんろ]が、別[べつ]の世界[せかい]のように見[み]えた。",
      "電車[でんしゃ]に乗[の]ると、他[ほか]の乗客[じょうきゃく]も窓[まど]の雪[ゆき]を眺[なが]めていた。誰[だれ]もが少[すこ]しうれしそうで、静[しず]かな興奮[こうふん]が車内[しゃない]に漂[ただよ]っていた。",
      "会社[かいしゃ]に着[つ]いた後[あと]、同僚[どうりょう]と「子[こ]どもの頃[ころ]は雪[ゆき]が降[ふ]るのを待[ま]っていたね」と話[はな]し合[あ]った。大人[おとな]になってからは雪[ゆき]の不便[ふべん]さばかり気[き]になるが、子[こ]どもの頃[ころ]は純粋[じゅんすい]に楽[たの]しかった。",
      "仕事[しごと]が終[お]わる頃[ころ]には雪[ゆき]は止[や]んでいたが、夜[よる]の街[まち]はまだ白[しろ]く輝[かがや]いていた。街灯[がいとう]に照[て]らされた雪[ゆき]は、どこか夢[ゆめ]のように美[うつく]しかった。",
      "家[いえ]に帰[かえ]って温[あたた]かいココアを飲[の]みながら、今日[きょう]の出来事[できごと]を振[ふり]り返[かえ]った。冬[ふゆ]の寒[さむ]さは嫌[いや]だが、初雪[はつゆき]の美[うつく]しさだけは毎年[まいとし]楽[たの]しみにしている。"
    ],
    translation: [
      "When I woke up this morning, the world outside the window had turned pure white. The weather forecast had said it would snow from last night, but I hadn't expected this much.",
      "I hurriedly opened the window, and along with the cold air, the sound of snow came in. It was the first snow of the year — in other words, the first snowfall.",
      "After getting ready for work and stepping outside, a thin layer of snow had accumulated on the roads. My usual commute route looked like a different world.",
      "When I got on the train, the other passengers were also gazing at the snow out the windows. Everyone looked a little happy, and a quiet excitement drifted through the car.",
      "After arriving at the office, my coworker and I talked about how, \"When we were kids, we used to wait for the snow to fall.\" As adults we mostly notice the inconvenience of snow, but as children it was purely fun.",
      "By the time work ended, the snow had stopped, but the town at night still gleamed white. The snow lit by the street lamps was beautiful, somehow like a dream.",
      "When I got home, I drank hot cocoa and looked back on the events of the day. I dislike the cold of winter, but the beauty of the first snowfall is something I look forward to every year."
    ],
    vocab: [
      { word: "初雪", reading: "はつゆき", meaning: "first snow of the season" },
      { word: "真っ白", reading: "まっしろ", meaning: "pure white" },
      { word: "予報", reading: "よほう", meaning: "forecast" },
      { word: "積もる", reading: "つもる", meaning: "to accumulate (snow)" },
      { word: "通勤路", reading: "つうきんろ", meaning: "commute route" },
      { word: "乗客", reading: "じょうきゃく", meaning: "passenger" },
      { word: "興奮", reading: "こうふん", meaning: "excitement" },
      { word: "不便", reading: "ふべん", meaning: "inconvenience" },
      { word: "純粋", reading: "じゅんすい", meaning: "pure" },
      { word: "輝く", reading: "かがやく", meaning: "to shine; to gleam" },
      { word: "街灯", reading: "がいとう", meaning: "street lamp" },
      { word: "振り返る", reading: "ふりかえる", meaning: "to look back" }
    ]
  }
];
