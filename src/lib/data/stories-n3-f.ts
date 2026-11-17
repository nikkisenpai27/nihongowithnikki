import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level short stories (sx-n3-51 .. sx-n3-60).
// Topics: a busy market, a quiet library, a noisy neighbor, a peaceful afternoon,
// a challenging exam, a helpful stranger, a forgotten memory, a special dinner,
// a lonely evening, a hopeful morning.

export const storiesN3F: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 賑やかな市場 (A busy market)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-51",
    title: "賑[にぎ]やかな市[いち]場[ば]",
    titleReading: "にぎやかないちば",
    level: "N3",
    summary: "A weekend trip to a lively local market, full of fresh food, haggling, and human warmth.",
    estMinutes: 5,
    tags: ["market", "slice of life", "community"],
    body: [
      "土[ど]曜[よう]日[び]の朝[あさ]、私[わたし]は近[ちか]くの市[いち]場[ば]へ行[い]くことにした。ここは毎週[まいしゅう]末[まつ]に開[ひら]かれる、この町[まち]で一番[いちばん]賑[にぎ]やかな場所[ばしょ]だ。",
      "駅[えき]から歩[ある]いて五分[ごふん]ほどで到着[とうちゃく]した。市[いち]場[ば]の入[い]り口[ぐち]には多[おお]くの人[ひと]が集[あつ]まっていて、話[はな]し声[ごえ]や売[う]り声[ごえ]が聞[き]こえてくる。普段[ふだん]のスーパーとは全[まった]く違[ちが]う雰[ふん]囲[い]気[き]だ。",
      "野[や]菜[さい]売[う]りのおばさんが「今朝[けさ]取[と]れたてだよ」と大[おお]きな声[こえ]で叫[さけ]んでいる。新[あたら]しいキャベツやトマトが山[やま]のように並[なら]んでいて、見[み]た目[め]がとても鮮[あざ]やかだった。",
      "次[つぎ]に、魚[さかな]売[う]りの店[みせ]に立[た]ち止[ど]まった。活[い]きのいい魚[さかな]が氷[こおり]の上[うえ]に並[なら]べられている。店主[てんしゅ]は「これなら新[しん]鮮[せん]だから、今夜[こんや]のお刺[さ]身[み]にどう？」と勧[すす]めてくれた。",
      "値[ね]段[だん]交[こう]渉[しょう]も市[いち]場[ば]ならではの楽[たの]しみだ。少[すこ]しだけ安[やす]くしてもらえないかと頼[たの]んでみると、お店[みせ]の人[ひと]は笑[わら]いながら「じゃあ、おまけしとくよ」と言[い]ってくれた。こういうやりとりがなんだか楽[たの]しい。",
      "一[ひと]通[とお]り買[か]い物[もの]を済[す]ませた後[あと]、市[いち]場[ば]の隅[すみ]にある小[ちい]さな店[みせ]で温[あたた]かいお茶[ちゃ]を飲[の]んだ。周[まわ]りの客[きゃく]たちは互[たが]いに世[せ]間[けん]話[ばなし]を交[か]わしていて、まるで大[たい]家族[かぞく]のようだった。",
      "帰[かえ]り道[みち]、重[おも]い袋[ふくろ]を提[さ]げながら、来[く]週[しゅう]もまた来[き]ようと思[おも]った。冷[れい]蔵[ぞう]庫[こ]のない昔[むかし]から続[つづ]く市[いち]場[ば]の文[ぶん]化[か]は、人[ひと]と人[ひと]を結[むす]ぶ大[おお]きな力[ちから]を持[も]っているのだ。"
    ],
    translation: [
      "On Saturday morning, I decided to go to a nearby market. It opens every weekend and is the liveliest spot in this town.",
      "I arrived after about a five-minute walk from the station. Many people had gathered at the market entrance, and I could hear voices and sellers' shouts. It's a completely different atmosphere from an ordinary supermarket.",
      "An elderly vegetable seller was shouting in a loud voice, \"Freshly picked this morning!\" Fresh cabbage and tomatoes were piled up like mountains, looking very vivid.",
      "Next, I stopped at a fish stall. Lively fish were arranged on ice. The shopkeeper suggested, \"These are really fresh — how about sashimi for tonight?\"",
      "Haggling is also one of the enjoyments unique to the market. When I asked whether the price could come down a little, the shopkeeper laughed and said, \"All right, I'll throw in a little extra.\" This kind of exchange is somehow fun.",
      "After finishing my shopping, I had hot tea at a small shop in the corner of the market. The customers around me exchanged small talk, like one big family.",
      "On the way home, carrying heavy bags, I thought I would come again next week. The market culture, continuing since the days before refrigerators, has a great power to connect people."
    ],
    vocab: [
      { word: "賑やか", reading: "にぎやか", meaning: "lively" },
      { word: "市場", reading: "いちば", meaning: "market" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" },
      { word: "雰囲気", reading: "ふんいき", meaning: "atmosphere" },
      { word: "鮮やか", reading: "あざやか", meaning: "vivid; bright" },
      { word: "新鮮", reading: "しんせん", meaning: "fresh" },
      { word: "値段交渉", reading: "ねだんこうしょう", meaning: "price negotiation" },
      { word: "世間話", reading: "せけんばなし", meaning: "small talk" },
      { word: "結ぶ", reading: "むすぶ", meaning: "to tie; to connect" },
      { word: "文化", reading: "ぶんか", meaning: "culture" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 静かな図書館 (A quiet library)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-52",
    title: "静[しず]かな図[と]書[しょ]館[かん]",
    titleReading: "しずかなとしょかん",
    level: "N3",
    summary: "A peaceful afternoon spent in a city library, where silence settles the mind and time slows down.",
    estMinutes: 4,
    tags: ["library", "reading", "peace"],
    body: [
      "水[すい]曜[よう]日[び]の午[ご]後[ご]、私[わたし]は市[し]立[りつ]図[と]書[しょ]館[かん]を訪[おとず]れた。ここは昔[むかし]から変[か]わらない、私[わたし]のお気[き]に入[い]りの場所[ばしょ]だ。",
      "入[はい]ると、冷[れい]房[ぼう]の涼[すず]しい空気[くうき]と古[ふる]い紙[かみ]の香[かお]りが漂[ただよ]っていた。受[じゅ]付[か]の司[し]書[しょ]が微笑[ほほえ]みながら「いらっしゃいませ」と言[い]ってくれた。",
      "二[に]階[かい]の閲[えつ]覧[らん]室[しつ]に行[い]くと、窓[まど]際[ぎわ]の席[せき]が空[あ]いていた。外[そと]を見[み]ると、大[おお]きな木[き]が風[かぜ]に揺[ゆ]れている。まるで時[とき]が止[と]まったようだ。",
      "周[まわ]りを見[み]渡[わた]すと、学[がく]生[せい]が参[さん]考[こう]書[しょ]を読[よ]んでいたり、お年[とし]寄[よ]りが新[しん]聞[ぶん]を広[ひろ]げていたりする。みんな静[しず]かに、それぞれの時[とき]間[かん]を過[す]ごしている。",
      "私[わたし]は最[さい]近[きん]気[き]になっていた小[しょう]説[せつ]を棚[たな]から取[と]り出[だ]した。ページをめくる音[おと]だけが聞[き]こえるこの空間[くうかん]は、とても心地[ここち]よい。",
      "時[とき]折[おり]、足[あし]音[おと]やページをめくる音[おと]が響[ひび]く。それ以[い]外[がい]は完[かん]全[ぜん]な静[しず]けさで、頭[あたま]の中[なか]が澄[す]んでいくようだった。",
      "図[と]書[しょ]館[かん]は単[たん]なる本[ほん]を借[か]りる場[ば]所[しょ]ではなく、心[こころ]を整[ととの]える場[ば]所[しょ]でもある。家[いえ]で勉[べん]強[きょう]するのもいいが、時[とき]にはこの静[しず]けさの中[なか]で自[じ]分[ぶん]と向[む]き合[あ]うのも大切[たいせつ]だと気[き]づいた。"
    ],
    translation: [
      "On Wednesday afternoon, I visited the city library. It's a place that hasn't changed since long ago, one of my favorites.",
      "When I entered, the cool air from the air conditioning and the scent of old paper drifted about. The librarian at the reception smiled and said, \"Welcome.\"",
      "When I went up to the reading room on the second floor, a window-side seat was free. Looking outside, large trees were swaying in the wind. It was as if time had stopped.",
      "Looking around, students were reading reference books, and elderly people were spreading out newspapers. Everyone was quietly spending their own time.",
      "I took from the shelf a novel that had been on my mind lately. This space where only the sound of turning pages can be heard is very pleasant.",
      "From time to time, footsteps and the sound of turning pages echoed. Other than that, it was perfect silence, and my mind seemed to clear.",
      "The library is not merely a place to borrow books, but also a place to settle the mind. Studying at home is fine too, but I realized that occasionally facing myself in this silence is also important."
    ],
    vocab: [
      { word: "図書館", reading: "としょかん", meaning: "library" },
      { word: "訪れる", reading: "おとずれる", meaning: "to visit" },
      { word: "冷房", reading: "れいぼう", meaning: "air conditioning" },
      { word: "司書", reading: "ししょ", meaning: "librarian" },
      { word: "閲覧室", reading: "えつらんしつ", meaning: "reading room" },
      { word: "参考書", reading: "さんこうしょ", meaning: "reference book" },
      { word: "心地よい", reading: "ここちよい", meaning: "pleasant" },
      { word: "静けさ", reading: "しずけさ", meaning: "silence" },
      { word: "整える", reading: "ととのえる", meaning: "to settle; to arrange" },
      { word: "大切", reading: "たいせつ", meaning: "important" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — うるさい隣人 (A noisy neighbor)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-53",
    title: "うるさい隣[りん]人[じん]",
    titleReading: "うるさいりんじん",
    level: "N3",
    summary: "A noisy neighbor's late-night music becomes a problem until a simple letter opens an unexpected conversation.",
    estMinutes: 5,
    tags: ["neighbor", "conflict", "daily life"],
    body: [
      "引[ひ]っ越[こ]してから三[さん]か月[げつ]になるが、隣[となり]の住[じゅう]人[にん]には少[すこ]し困[こま]っている。夜[よる]になると、大[おお]きな音[おと]で音[おん]楽[がく]を流[なが]すのだ。",
      "最[さい]初[しょ]は我[が]慢[まん]しようと思[おも]っていた。でも、毎[まい]日[にち]続[つづ]くと、だんだん眠[ねむ]れなくなり、翌[よく]日[じつ]の仕[し]事[ごと]に響[ひび]いてしまうようになった。",
      "一[いっ]度[ど]だけ直[ちょく]接[せつ]話[はな]そうとしたが、ドアを開[あ]けても誰[だれ]も出[で]てこない。仕[し]方[かた]なく、管[かん]理[り]会[がい]社[しゃ]に相[そう]談[だん]してみることにした。",
      "管[かん]理[り]人[にん]さんは「もう少[すこ]し様[よう]子[す]を見[み]ましょう」と言[い]ったが、状[じょう]況[きょう]は変[か]わらない。むしろ、週[しゅう]末[まつ]はもっと大[おお]きな音[おと]が聞[き]こえるようになった。",
      "ついに先[せん]週[しゅう]、私[わたし]は手[て]紙[がみ]を書[か]いてポストに入[い]れた。内[ない]容[よう]は出[で]来[き]るだけ丁[てい]寧[ねい]に、でも固[かた]くならないようにした。「夜[よる]は静[しず]かにしていただけると助[たす]かります」と。",
      "翌[よく]朝[あさ]、ドアの前[まえ]に小[ちい]さな袋[ふくろ]が置[お]かれていた。中[なか]には謝[しゃ]罪[ざい]の手[て]紙[がみ]と、手[て]作[づく]りのクッキーが入[はい]っていた。「気[き]づかずに申[もう]し訳[わけ]ありません」と書[か]かれてあった。",
      "それからというもの、夜[よる]は静[しず]かになった。時[とき]々[どき]廊[ろう]下[か]で会[あ]うと、相[あい]手[て]は恥[は]ずかしそうに挨[あい]拶[さつ]する。問[もん]題[だい]は話[はな]し合[あ]うことで解[かい]決[けつ]できることが多[おお]い、と改[あらた]めて感[かん]じた。"
    ],
    translation: [
      "It's been three months since I moved in, but I'm a little troubled by the next-door neighbor. When night falls, they play music at a loud volume.",
      "At first I tried to put up with it. But as it continued every day, I gradually couldn't sleep, and it started to affect my work the next day.",
      "I tried to talk directly just once, but even when I opened the door, no one came out. With no choice, I decided to consult the management company.",
      "The manager said, \"Let's watch the situation a little longer,\" but nothing changed. If anything, even louder sounds began to be heard on weekends.",
      "Finally, last week, I wrote a letter and put it in the mailbox. I made the content as polite as possible, while trying not to be too stern: \"It would help if you could keep things quiet at night.\"",
      "The next morning, a small bag had been placed in front of the door. Inside were a letter of apology and homemade cookies. It read, \"I'm sorry I hadn't noticed.\"",
      "Since then, the nights have been quiet. When we run into each other in the hallway from time to time, the neighbor greets me looking somewhat embarrassed. I felt anew that many problems can be solved by talking them out."
    ],
    vocab: [
      { word: "隣人", reading: "りんじん", meaning: "neighbor" },
      { word: "住人", reading: "じゅうにん", meaning: "resident" },
      { word: "我慢", reading: "がまん", meaning: "patience; endurance" },
      { word: "翌日", reading: "よくじつ", meaning: "the next day" },
      { word: "直接", reading: "ちょくせつ", meaning: "directly" },
      { word: "管理会社", reading: "かんりがいしゃ", meaning: "management company" },
      { word: "相談", reading: "そうだん", meaning: "consultation" },
      { word: "状況", reading: "じょうきょう", meaning: "situation" },
      { word: "丁寧", reading: "ていねい", meaning: "polite" },
      { word: "謝罪", reading: "しゃざい", meaning: "apology" },
      { word: "解決", reading: "かいけつ", meaning: "resolution" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 穏やかな午後 (A peaceful afternoon)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-54",
    title: "穏[おだ]やかな午[ご]後[ご]",
    titleReading: "おだやかなごご",
    level: "N3",
    summary: "A slow Sunday afternoon on the balcony, with coffee, a book, and a visiting cat.",
    estMinutes: 4,
    tags: ["afternoon", "peace", "slice of life"],
    body: [
      "日[にち]曜[よう]日[び]の午[ご]後[ご]、特[とく]に用[よう]事[じ]もなかったので、ベランダに出[で]てみた。空[そら]は澄[す]んでいて、遠[とお]くの山[やま]までよく見[み]えた。",
      "近[ちか]くの公[こう]園[えん]から子[こ]供[ども]たちの笑[わら]い声[ごえ]が聞[き]こえてくる。でも、その音[おと]はうるさくなく、かえってこの町[まち]の穏[おだ]やかさを引[ひ]き立[た]てていた。",
      "私[わたし]はお気[き]に入[い]りの椅[い]子[す]に座[すわ]り、温[あたた]かいコーヒーを飲[の]みながら、読[よ]みかけの本[ほん]を開[あ]けた。時[とき]々[どき]風[かぜ]が吹[ふ]いて、ページがめくれる。それがとても気[き]持[も]ちよかった。",
      "隣[となり]の猫[ねこ]がやって来[き]て、足[あし]元[もと]に丸[まる]まった。名[な]前[まえ]は「ミケ」。飼[か]い主[ぬし]が誰[だれ]か分[わ]からないが、よくこの庭[にわ]に遊[あそ]びに来[く]る。",
      "太[たい]陽[よう]が少[すこ]しずつ西[にし]に傾[かたむ]いていく。その光[ひかり]が木[き]の葉[は]を透[す]かして、地[じ]面[めん]に揺[ゆ]れる影[かげ]を落[お]としていた。見[み]ているだけで心[こころ]が落[お]ち着[つ]く。",
      "スマートフォンを見[み]ることも忘[わす]れて、ただこの時[とき]間[かん]を過[す]ごした。毎[まい]日[にち]忙[いそが]しく過[す]ぎているからこそ、こういう何[なに]もしない午[ご]後[ご]が大切[たいせつ]なのかもしれない。",
      "夕[ゆう]方[がた]が近[ちか]づき、空[そら]が少[すこ]しずつオレンジ色[いろ]に変[か]わってきた。私[わたし]は伸[の]びをして、ゆっくりと家[いえ]の中[なか]へ戻[もど]った。穏[おだ]やかな午[ご]後[ご]は、心[こころ]の栄[えい]養[よう]になってくれた。"
    ],
    translation: [
      "On Sunday afternoon, with no particular errands, I stepped out onto the balcony. The sky was clear, and I could see even the distant mountains well.",
      "I could hear children's laughter from a nearby park. But the sound wasn't noisy; rather, it highlighted the calm of this town.",
      "I sat in my favorite chair and, while sipping warm coffee, opened a book I was in the middle of reading. From time to time the wind blew and turned the pages. That felt very pleasant.",
      "The neighbor's cat came and curled up at my feet. Its name is Mike. I don't know who its owner is, but it often comes to play in this garden.",
      "The sun gradually tilted westward. Its light passed through the leaves and cast swaying shadows on the ground. Just watching it calmed my mind.",
      "Forgetting even to glance at my smartphone, I simply spent this time. It's precisely because we live busily every day that such an afternoon of doing nothing may be important.",
      "As evening approached, the sky slowly turned orange. I stretched and slowly went back inside. The peaceful afternoon had become nourishment for the mind."
    ],
    vocab: [
      { word: "穏やか", reading: "おだやか", meaning: "calm; peaceful" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "引き立てる", reading: "ひきたてる", meaning: "to set off; to highlight" },
      { word: "読みかけ", reading: "よみかけ", meaning: "in the middle of reading" },
      { word: "足元", reading: "あしもと", meaning: "at one's feet" },
      { word: "飼い主", reading: "かいぬし", meaning: "pet owner" },
      { word: "太陽", reading: "たいよう", meaning: "sun" },
      { word: "傾く", reading: "かたむく", meaning: "to tilt" },
      { word: "落ち着く", reading: "おちつく", meaning: "to settle down" },
      { word: "栄養", reading: "えいよう", meaning: "nourishment" },
      { word: "大切", reading: "たいせつ", meaning: "important" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 難しい試験 (A challenging exam)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-55",
    title: "難[むずか]しい試[し]験[けん]",
    titleReading: "むずかしいしけん",
    level: "N3",
    summary: "A student prepares for an important history exam, struggling with the volume of material and finding a new way to study.",
    estMinutes: 5,
    tags: ["exam", "study", "university"],
    body: [
      "来[らい]週[しゅう]、大[だい]学[がく]で重[じゅう]要[よう]な試[し]験[けん]がある。合[ごう]格[かく]しなければ、単[たん]位[い]を取[と]ることができない。そのため、最[さい]近[きん]は毎[まい]日[にち]図[と]書[しょ]館[かん]に通[かよ]っている。",
      "とはいえ、教[きょう]科[か]書[しょ]を見[み]ても内容[ないよう]がなかなか頭[あたま]に入[はい]らない。特[とく]に中[ちゅう]世[せい]の歴[れき]史[し]は範[はん]囲[い]が広[ひろ]く、覚[おぼ]えるべきことが多[おお]すぎる。",
      "昨[さく]夜[や]、友[とも]達[だち]の山[やま]田[だ]さんと一[いっ]緒[しょ]に勉[べん]強[きょう]した。彼[かれ]は歴[れき]史[し]が得[とく]意[い]で、複[ふく]雑[ざつ]な年[ねん]表[ぴょう]を分[わ]かりやすく説[せつ]明[めい]してくれた。「まず流[なが]れをつかむといいよ」と彼[かれ]は言[い]った。",
      "その言[こと]葉[ば]通[とお]り、年[ねん]代[だい]ではなく、それぞれの時[じ]代[だい]の特[とく]徴[ちょう]から先[せん]に覚[おぼ]えることにした。すると、今[いま]までバラバラだった知[ち]識[しき]が、少[すこ]しずつ繋[つな]がってきた。",
      "ただ、一[いっ]度[ど]にたくさん勉[べん]強[きょう]しすぎると、逆[ぎゃく]に忘[わす]れてしまう。そこで、私[わたし]は自[じ]分[ぶん]なりの方[ほう]法[ほう]で、少[すこ]しずつ復[ふく]習[しゅう]することにした。",
      "試[し]験[けん]の前[ぜん]日[じつ]、ついに教[きょう]科[か]書[しょ]を閉[と]じた。これ以[い]上[じょう]やっても仕[し]方[かた]がない。あとは寝[ね]る前[まえ]に軽[かる]く見[み]直[なお]すだけだ。完[かん]璧[ぺき]を目[め]指[ざ]すあまり、調[ちょう]子[し]を崩[くず]したくない。",
      "当[とう]日[じつ]、緊[きん]張[ちょう]しながらも最[さい]後[ご]まで答[こた]えることができた。結[けっ]果[か]はまだ分[わ]からないが、やってきたことは無[む]駄[だ]ではないはずだ。自[じ]分[ぶん]を信[しん]じて、結[けっ]果[か]を待[ま]つだけだ。"
    ],
    translation: [
      "Next week, I have an important exam at university. If I don't pass, I can't earn the credit. So lately I've been going to the library every day.",
      "That said, even when I look at the textbook, the content doesn't easily stick in my head. Medieval history in particular has a wide scope, and there's far too much to memorize.",
      "Last night I studied with my friend Yamada. He's good at history and explained the complicated chronology in an easy-to-understand way. \"It's best to grasp the overall flow first,\" he said.",
      "Following his advice, I decided to memorize the features of each era first, rather than the dates. Then the knowledge that had been scattered began to connect, little by little.",
      "However, studying too much at once makes me forget things, conversely. So I decided to review little by little in my own way.",
      "The day before the exam, I finally closed the textbook. There's no point doing any more. All that's left is a quick review before bed. I don't want to ruin my condition by aiming too hard for perfection.",
      "On the day, although nervous, I managed to answer to the very end. The result isn't known yet, but what I've done shouldn't be wasted. All I can do is believe in myself and wait for the result."
    ],
    vocab: [
      { word: "試験", reading: "しけん", meaning: "exam" },
      { word: "合格", reading: "ごうかく", meaning: "passing" },
      { word: "単位", reading: "たんい", meaning: "academic credit" },
      { word: "教科書", reading: "きょうかしょ", meaning: "textbook" },
      { word: "中世", reading: "ちゅうせい", meaning: "medieval period" },
      { word: "範囲", reading: "はんい", meaning: "scope; range" },
      { word: "得意", reading: "とくい", meaning: "strong point" },
      { word: "年表", reading: "ねんぴょう", meaning: "chronology" },
      { word: "知識", reading: "ちしき", meaning: "knowledge" },
      { word: "復習", reading: "ふくしゅう", meaning: "review" },
      { word: "緊張", reading: "きんちょう", meaning: "nervousness" },
      { word: "無駄", reading: "むだ", meaning: "waste" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 親切な見知らぬ人 (A helpful stranger)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-56",
    title: "親[しん]切[せつ]な見[み]知[し]らぬ人[ひと]",
    titleReading: "しんせつなみしらぬひと",
    level: "N3",
    summary: "Lost in an unfamiliar town, the narrator is helped by a kind older man who shares stories and refuses thanks.",
    estMinutes: 5,
    tags: ["stranger", "kindness", "travel"],
    body: [
      "先[せん]週[しゅう]末[まつ]、私[わたし]は初[はじ]めて行[い]く街[まち]で迷[まよ]ってしまった。スマートフォンの地[ち]図[ず]を見[み]ながら歩[ある]いていたが、どうしても目[もく]的[てき]地[ち]が見[み]つからない。",
      "途[と]方[ほう]に暮[く]れて立[た]ち止[ど]まっていると、年[とし]配[ぱい]の男[おとこ]性[せい]が声[こえ]をかけてきた。「何[なに]かお探[さが]しですか」と。私[わたし]は少[すこ]し警[けい]戒[かい]したが、困[こま]っていたので助[たす]けを求[もと]めることにした。",
      "男[おとこ]性[せい]は私[わたし]の行[い]きたい場[ば]所[しょ]を聞[き]くと、「それなら私[わたし]もその方[ほう]向[こう]だから、一[いっ]緒[しょ]に行[い]きましょう」と言[い]った。声[こえ]は優[やさ]しく、悪[わる]い人[ひと]ではなさそうだった。",
      "歩[ある]きながら、彼[かれ]はこの街[まち]の歴[れき]史[し]について話[はな]してくれた。昔[むかし]はここも賑[にぎ]やかな商[しょう]業[ぎょう]地[ち]だったそうだ。彼[かれ]の話[はなし]を聞[き]いているうちに、目[もく]的[てき]地[ち]への不[ふ]安[あん]は消[き]えていった。",
      "ついに目[もく]的[てき]地[ち]に到着[とうちゃく]した時[とき]、私[わたし]は何[なに]度[ど]もお礼[れい]を言[い]った。彼[かれ]は「いいえ、私[わたし]も楽[たの]しかったですよ」と笑[わら]って言[い]った。そして、名[な]前[まえ]も告[つ]げずに去[さ]っていった。",
      "見[み]知[し]らぬ人[ひと]の優[やさ]しさに触[ふ]れて、私[わたし]は少[すこ]し恥[は]ずかしくなった。普段[ふだん]の私[わたし]は、人[ひと]から話[はな]しかけられると少[すこ]し緊[きん]張[ちょう]してしまうからだ。",
      "その帰[かえ]り道[みち]、私[わたし]も誰[だれ]かの役[やく]に立[た]つ人[ひと]になろうと誓[ちか]った。見[み]知[し]らぬ人[ひと]同[どう]士[し]でも、小[ちい]さな親[しん]切[せつ]が繋[つな]がっていけば、この世[よ]の中[なか]はもっと住[す]みやすくなるはずだ。"
    ],
    translation: [
      "Last weekend, I got lost in a town I was visiting for the first time. I walked while checking my smartphone's map, but I simply couldn't find my destination.",
      "As I stood at a loss, an older man spoke to me: \"Are you looking for something?\" I was a little on guard, but since I was in trouble, I decided to ask for help.",
      "When the man heard where I wanted to go, he said, \"In that case, I'm heading that way too, so let's go together.\" His voice was gentle, and he didn't seem like a bad person.",
      "While walking, he told me about the history of this town. In the past it was also a lively commercial district, he said. As I listened to him, my anxiety about reaching the destination faded away.",
      "When we finally arrived, I thanked him many times. He smiled and said, \"No, I enjoyed it too.\" And he left without even telling me his name.",
      "Touched by the kindness of a stranger, I felt a little ashamed. Normally, I get somewhat nervous when someone speaks to me.",
      "On the way home, I vowed to become someone who can be of use to others. Even among strangers, if small acts of kindness connect with each other, this world should become easier to live in."
    ],
    vocab: [
      { word: "見知らぬ", reading: "みしらぬ", meaning: "unknown; strange" },
      { word: "目的地", reading: "もくてきち", meaning: "destination" },
      { word: "途方に暮れる", reading: "とほうにくれる", meaning: "to be at a loss" },
      { word: "年配", reading: "ねんぱい", meaning: "elderly" },
      { word: "警戒", reading: "けいかい", meaning: "caution" },
      { word: "商業地", reading: "しょうぎょうち", meaning: "commercial district" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" },
      { word: "お礼", reading: "おれい", meaning: "thanks" },
      { word: "触れる", reading: "ふれる", meaning: "to touch; to encounter" },
      { word: "誓う", reading: "ちかう", meaning: "to vow" },
      { word: "同士", reading: "どうし", meaning: "fellow; mutual" },
      { word: "繋がる", reading: "つながる", meaning: "to connect" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 忘れられた記憶 (A forgotten memory)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-57",
    title: "忘[わす]れられた記[き]憶[おく]",
    titleReading: "わすれられたきおく",
    level: "N3",
    summary: "An old photo album reveals a childhood friend the narrator cannot remember, prompting a quiet search for lost memories.",
    estMinutes: 5,
    tags: ["memory", "childhood", "family"],
    body: [
      "実[じつ]家[か]の片[かた]付[づ]けをしていた時[とき]、古[ふる]いアルバムを見[み]つけた。表[ひょう]紙[し]は色[いろ]あせているが、中[なか]には子[こ]供[ども]の頃[ころ]の私[わたし]が写[うつ]っていた。",
      "一[いっ]枚[まい]の写[しゃ]真[しん]が目[め]に留[と]まった。私[わたし]と、もう一[ひと]人[り]の女[おんな]の子[こ]が、大[おお]きな桜[さくら]の木[き]の前[まえ]で笑[わら]っている。しかし、その子[こ]が誰[だれ]なのか、どうしても思[おも]い出[だ]せない。",
      "母[はは]に聞[き]いてみると、「ああ、それは隣[となり]に住[す]んでいたユキちゃんだよ」と教[おし]えてくれた。引[ひ]っ越[こ]す前[まえ]に、よく一[いっ]緒[しょ]に遊[あそ]んだそうだ。でも私[わたし]の記[き]憶[おく]には全[まった]くなかった。",
      "その夜[よる]、私[わたし]はベッドに入[はい]ってからも、ユキちゃんのことを考[かんが]えていた。もしかすると、あの桜[さくら]の下[もと]で何[なに]か誓[ちか]い合[あ]ったのかもしれない。でも、それすらも忘[わす]れてしまった。",
      "人[ひと]の記[き]憶[おく]は不[ふ]思[し]議[ぎ]なものだ。大切[たいせつ]なはずのことでも、時[とき]間[かん]と共[とも]に薄[うす]れていく。逆[ぎゃく]に、どうでもいいようなことまで、鮮[あざ]やかに残[のこ]っていることもある。",
      "翌[よく]日[じつ]、私[わたし]はユキちゃんに会[あ]ってみようと思[おも]い立[た]った。母[はは]に聞[き]いたアドレスに手[て]紙[がみ]を書[か]いた。「昔[むかし]、一[いっ]緒[しょ]に遊[あそ]んだ〇〇です。覚[おぼ]えていますか」と。",
      "返[へん]事[じ]は来[く]るだろうか。来[こ]なくてもいい。ただ、忘[わす]れかけていた記[き]憶[おく]を取[と]り戻[もど]そうとしたこと自[じ]体[たい]が、私[わたし]にとって大切[たいせつ]な一[いっ]歩[ぽ]だったような気[き]がする。"
    ],
    translation: [
      "While tidying up my family home, I found an old album. The cover was faded, but inside were photographs of me as a child.",
      "One photograph caught my eye. Another girl and I were smiling in front of a large cherry tree. But no matter how hard I tried, I couldn't remember who she was.",
      "When I asked my mother, she told me, \"Ah, that's Yuki, who lived next door.\" She said we used to play together a lot before we moved. But it was completely absent from my memory.",
      "That night, even after getting into bed, I kept thinking about Yuki. Perhaps we had made some promise beneath that cherry tree. But even that, I had forgotten.",
      "Human memory is a strange thing. Even things that should be important fade with time. Conversely, even trivial things sometimes remain vividly.",
      "The next day, I had the idea of trying to meet Yuki. I wrote a letter to the address I had gotten from my mother: \"I'm ○○, who played with you long ago. Do you remember?\"",
      "Will a reply come? It's all right if it doesn't. Just the act of trying to recover a forgotten memory felt, to me, like an important step."
    ],
    vocab: [
      { word: "記憶", reading: "きおく", meaning: "memory" },
      { word: "実家", reading: "じっか", meaning: "family home" },
      { word: "片付け", reading: "かたづけ", meaning: "tidying up" },
      { word: "表紙", reading: "ひょうし", meaning: "cover" },
      { word: "桜", reading: "さくら", meaning: "cherry tree" },
      { word: "不思議", reading: "ふしぎ", meaning: "strange; mysterious" },
      { word: "鮮やか", reading: "あざやか", meaning: "vivid" },
      { word: "思い立つ", reading: "おもいたつ", meaning: "to decide to do" },
      { word: "取り戻す", reading: "とりもどす", meaning: "to recover" },
      { word: "自体", reading: "じたい", meaning: "itself" },
      { word: "大切", reading: "たいせつ", meaning: "important" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 特別な夕食 (A special dinner)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-58",
    title: "特[とく]別[べつ]な夕[ゆう]食[しょく]",
    titleReading: "とくべつなゆうしょく",
    level: "N3",
    summary: "A family prepares a special dinner to celebrate the father's sixtieth birthday, discovering what truly makes the evening memorable.",
    estMinutes: 5,
    tags: ["family", "celebration", "cooking"],
    body: [
      "今[こん]月[げつ]、父[ちち]の還[かん]暦[れき]を祝[いわ]うことになった。母[はは]と私[わたし]で、特[とく]別[べつ]な夕[ゆう]食[しょく]を準[じゅん]備[び]することにした。",
      "メニューは父[ちち]が好[す]きなものばかりにした。前[ぜん]菜[さい]はサラダ、メインは牛[ぎゅう]肉[にく]の赤[あか]ワイン煮[に]、そしてデザートは手[て]作[づく]りのプリンだ。",
      "母[はは]は料[りょう]理[り]が得[とく]意[い]なので、牛[ぎゅう]肉[にく]は任[まか]せた。私[わたし]はデザートを担[たん]当[とう]した。初[はじ]めて作[つく]るプリンだったが、レシピを見[み]ながら慎[しん]重[ちょう]に進[すす]めた。",
      "台[だい]所[どこ]には、煮[に]込[こ]む音[おと]と甘[あま]い香[かお]りが漂[ただよ]っていた。時[とき]々[どき]母[はは]と顔[かお]を見[み]合[あ]わせて笑[わら]う。慌[あわ]ただしい日[ひ]々[び]の中[なか]で、こんな穏[おだ]やかな時[とき]間[かん]は久[ひさ]しぶりだった。",
      "父[ちち]が帰[かえ]ってくると、テーブルに並[なら]んだ料[りょう]理[り]を見[み]て驚[おどろ]いたようだった。「これは一[いっ]体[たい]何[なに]の日[ひ]だ？」と父[ちち]は聞[き]いた。私[わたし]たちは笑[わら]いながら「還[かん]暦[れき]おめでとう！」と一[いっ]緒[しょ]に言[い]った。",
      "食[た]べ始[はじ]めると、父[ちち]は「うまい」と何[なに]度[ど]も言[い]った。特[とく]に牛[ぎゅう]肉[にく]が好[す]きなようで、おかわりまでした。その姿[すがた]を見[み]て、準[じゅん]備[び]の苦[く]労[ろう]がすべて報[むく]われたように思[おも]えた。",
      "食[た]後[ご]、父[ちち]は「今[こん]日[にち]は一[いち]番[ばん]いい誕[たん]生[じょう]日[び]だった」と言[い]ってくれた。特[とく]別[べつ]な料[りょう]理[り]もいいが、家[か]族[ぞく]が集[あつ]まるという事[じ]実[じつ]こそが、何[なに]よりも特[とく]別[べつ]なのかもしれない。"
    ],
    translation: [
      "This month, we decided to celebrate my father's sixtieth birthday. My mother and I decided to prepare a special dinner.",
      "The menu consisted only of things my father likes. The appetizer was salad, the main dish was beef stewed in red wine, and dessert was homemade pudding.",
      "Since my mother is good at cooking, I left the beef to her. I took charge of the dessert. It was my first time making pudding, but I proceeded carefully while following the recipe.",
      "In the kitchen, the sound of stewing and a sweet scent drifted about. From time to time my mother and I exchanged glances and laughed. Amid our busy days, it had been a while since we'd had such a calm time.",
      "When my father came home, he seemed surprised to see the dishes lined up on the table. \"What in the world is this day?\" he asked. Laughing, we said together, \"Happy sixtieth birthday!\"",
      "Once we started eating, my father said \"delicious\" many times. He seemed to like the beef in particular, and even had seconds. Seeing him, I felt all the effort of preparation had been rewarded.",
      "After the meal, my father said, \"Today was the best birthday ever.\" Special dishes are nice, but the very fact that the family gathers may be what is most special of all."
    ],
    vocab: [
      { word: "夕食", reading: "ゆうしょく", meaning: "dinner" },
      { word: "還暦", reading: "かんれき", meaning: "60th birthday" },
      { word: "祝う", reading: "いわう", meaning: "to celebrate" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "牛肉", reading: "ぎゅうにく", meaning: "beef" },
      { word: "得意", reading: "とくい", meaning: "strong point" },
      { word: "担当", reading: "たんとう", meaning: "in charge" },
      { word: "慎重", reading: "しんちょう", meaning: "careful" },
      { word: "漂う", reading: "ただよう", meaning: "to drift" },
      { word: "報われる", reading: "むくわれる", meaning: "to be rewarded" },
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 寂しい夕暮れ (A lonely evening)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-59",
    title: "寂[さび]しい夕[ゆう]暮[ぐ]れ",
    titleReading: "さびしいゆうぐれ",
    level: "N3",
    summary: "A canceled meeting leaves the narrator alone in a coffee shop on the evening of the first snow, confronting an unexpected loneliness.",
    estMinutes: 5,
    tags: ["loneliness", "evening", "winter"],
    body: [
      "初[はつ]雪[ゆき]が降[ふ]った日[ひ]の夕[ゆう]方[がた]、私[わたし]は一[ひと]人[り]でコーヒーショップにいた。窓[まど]の外[そと]はもう暗[くら]く、街[まち]の灯[あか]りがぼんやりと滲[にじ]んでいる。",
      "友[とも]達[だち]と待[ま]ち合[あ]わせをしていたが、急[きゅう]用[よう]で来[こ]られなくなったという連[れん]絡[らく]が入[はい]った。仕[し]方[かた]なく、私[わたし]は一[ひと]人[り]でコーヒーを飲[の]むことにした。",
      "店[みせ]の中[なか]はクリスマスの装[そう]飾[しょく]で飾[かざ]られていた。カップルや家[か]族[ぞく]で来[き]た客[きゃく]たちが楽[たの]しそうに話[はな]している。その中[なか]で一[ひと]人[り]座[すわ]っていると、なんだか周[まわ]りから浮[う]いているような気[き]がした。",
      "私[わたし]はスマートフォンを取[と]り出[だ]したが、特[とく]にメッセージも入[はい]っていない。SNSを見[み]ても、みんな楽[たの]しそうな写[しゃ]真[しん]ばかりだ。それが逆[ぎゃく]に寂[さび]しさを引[ひ]き立[た]てた。",
      "コーヒーを飲[の]み終[お]えると、店[みせ]を出[で]た。冷[つめ]たい風[かぜ]が顔[かお]に当[あ]たる。帰[かえ]る家[いえ]はあるが、誰[だれ]も待[ま]ってはくれない。そう思[おも]うと、歩[ある]き方[かた]が重[おも]くなった。",
      "ふと、昔[むかし]の自[じ]分[ぶん]を思[おも]い出[だ]した。一[ひと]人[り]でいることなど平[へい]気[き]だった頃[ころ]。いつからだろう、この寂[さび]しさを感[かん]じるようになったのは。",
      "でも、帰[かえ]り道[みち]で空[そら]を見[み]上[あ]げると、星[ほし]が一[ひと]つ、明[あか]るく光[ひか]っていた。一[ひと]人[り]の夜[よる]も、悪[わる]いことばかりではないのかもしれない。明日[あした]はきっと、もっと暖[あたた]かい日[ひ]になる。"
    ],
    translation: [
      "On the evening of the first snow, I was alone in a coffee shop. Outside the window it was already dark, and the city lights blurred softly.",
      "I had a meeting with a friend, but a message came saying they couldn't make it due to something urgent. With no choice, I decided to drink coffee by myself.",
      "Inside the shop, Christmas decorations were on display. Couples and customers who had come with their families were talking happily. Sitting alone among them, I somehow felt I was standing out.",
      "I took out my smartphone, but there were no particular messages. Even on social media, there were only photos of everyone looking cheerful. That, conversely, highlighted my loneliness.",
      "When I finished my coffee, I left the shop. The cold wind hit my face. I have a home to return to, but no one is waiting for me. Thinking that, my way of walking grew heavy.",
      "Suddenly, I remembered my old self. The days when being alone didn't bother me at all. Since when did I start feeling this loneliness?",
      "But on the way home, when I looked up at the sky, a single star was shining brightly. A night alone may not be entirely a bad thing. Tomorrow will surely be a warmer day."
    ],
    vocab: [
      { word: "夕暮れ", reading: "ゆうぐれ", meaning: "twilight" },
      { word: "初雪", reading: "はつゆき", meaning: "first snow" },
      { word: "滲む", reading: "にじむ", meaning: "to blur; to bleed" },
      { word: "急用", reading: "きゅうよう", meaning: "urgent business" },
      { word: "連絡", reading: "れんらく", meaning: "contact" },
      { word: "装飾", reading: "そうしょく", meaning: "decoration" },
      { word: "飾る", reading: "かざる", meaning: "to decorate" },
      { word: "引き立てる", reading: "ひきたてる", meaning: "to highlight" },
      { word: "平気", reading: "へいき", meaning: "unconcerned" },
      { word: "見上げる", reading: "みあげる", meaning: "to look up" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 希望に満ちた朝 (A hopeful morning)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-60",
    title: "希[き]望[ぼう]に満[み]ちた朝[あさ]",
    titleReading: "きぼうにみちたあさ",
    level: "N3",
    summary: "The first morning at a new job, filled with nervous energy, small rituals, and quiet resolve.",
    estMinutes: 5,
    tags: ["morning", "new beginning", "hope"],
    body: [
      "新[あたら]しい仕[し]事[ごと]の初[しょ]日[にち]の朝[あさ]、私[わたし]は普[ふ]段[だん]より一[ひと]時[じ]間[かん]も早[はや]く目[め]を覚[さ]ました。窓[まど]の外[そと]はまだ薄[うす]暗[ぐら]いが、空[そら]の端[はし]が少[すこ]しずつ明[あか]るくなっている。",
      "昨[ゆう]夜[べ]は緊[きん]張[ちょう]してあまり眠[ねむ]れなかった。でも、不[ふ]思[し]議[ぎ]なことに、体[からだ]は軽[かる]く、心[こころ]は期[き]待[たい]で満[み]ちていた。新[あたら]しい一[いち]日[にち]の始[はじ]まりだ。",
      "キッチンに立[た]ち、温[あたた]かい味[あじ]噌[そ]汁[しる]を作[つく]った。具[ぐ]は昨[さく]夜[や]の残[のこ]りの野[や]菜[さい]だ。わざわざ料[りょう]理[り]をするのは久[ひさ]しぶりだったが、その動[どう]作[さ]がなんだか心[こころ]を落[お]ち着[つ]かせてくれた。",
      "身[み]支[じ]度[たく]を整[ととの]え、玄[げん]関[かん]の前[まえ]で深[しん]呼吸[こきゅう]をした。鏡[かがみ]に映[うつ]る自[じ]分[ぶん]は、少[すこ]し緊[きん]張[ちょう]した顔[かお]をしている。でも、その目[め]には確[たし]かな決[けっ]意[い]があった。",
      "駅[えき]までの道[みち]を歩[ある]いていると、通[つう]学[がく]中[ちゅう]の学[がく]生[せい]たちとすれ違[ちが]った。冷[つめ]たい空気[くうき]の中[なか]、息[いき]が白[しろ]い。誰[だれ]もが自[じ]分[ぶん]の日[ひ]に向[む]かって歩[ある]いている。",
      "電[でん]車[しゃ]の中[なか]で、私[わたし]はこれからの仕[し]事[ごと]について考[かんが]えていた。失[しっ]敗[ぱい]するかもしれない。でも、その失[しっ]敗[ぱい]さえも成[せい]長[ちょう]の糧[かて]になるはずだ。重[おも]いプレッシャーではなく、前[まえ]向[む]きな緊[きん]張[ちょう]感[かん]を感[かん]じていた。",
      "会[かい]社[しゃ]の前[まえ]に立[た]つと、自[じ]分[ぶん]に「頑張[がんば]れる」と言[い]い聞[き]かせた。希[き]望[ぼう]に満[み]ちたこの朝[あさ]の気[き]持[も]ちを、忘[わす]れないようにしよう。これから始[はじ]まる新[あたら]しい章[しょう]が、意[い]味[み]のあるものになりますように。"
    ],
    translation: [
      "On the morning of my first day at a new job, I woke up a full hour earlier than usual. Outside the window it was still dim, but the edge of the sky was slowly getting brighter.",
      "Last night I was nervous and couldn't sleep much. But strangely, my body felt light, and my heart was filled with anticipation. It is the beginning of a new day.",
      "I stood in the kitchen and made hot miso soup. The ingredients were leftover vegetables from last night. Cooking like this was something I hadn't done in a while, but the action somehow settled my mind.",
      "After getting dressed and ready, I took a deep breath in front of the entrance. The person in the mirror had a somewhat nervous face. But in those eyes was a firm resolve.",
      "Walking toward the station, I passed students on their way to school. In the cold air, my breath was white. Everyone was walking toward their own day.",
      "On the train, I thought about the work ahead. I might fail. But even that failure should become food for growth. I felt not heavy pressure, but a forward-looking nervousness.",
      "Standing in front of the company, I told myself, \"You can do this.\" Let me not forget the feeling of this hopeful morning. May the new chapter that's about to begin turn out to be a meaningful one."
    ],
    vocab: [
      { word: "希望", reading: "きぼう", meaning: "hope" },
      { word: "満ちる", reading: "みちる", meaning: "to fill" },
      { word: "緊張", reading: "きんちょう", meaning: "tension" },
      { word: "期待", reading: "きたい", meaning: "expectation" },
      { word: "味噌汁", reading: "みそしる", meaning: "miso soup" },
      { word: "身支度", reading: "みじたく", meaning: "getting dressed and ready" },
      { word: "深呼吸", reading: "しんこきゅう", meaning: "deep breath" },
      { word: "決意", reading: "けつい", meaning: "resolve" },
      { word: "失敗", reading: "しっぱい", meaning: "failure" },
      { word: "成長", reading: "せいちょう", meaning: "growth" },
      { word: "糧", reading: "かて", meaning: "nourishment; food" },
      { word: "言い聞かせる", reading: "いいきかせる", meaning: "to tell oneself" }
    ]
  }
];
