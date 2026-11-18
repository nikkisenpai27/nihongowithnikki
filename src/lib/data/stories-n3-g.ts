import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 N3-level short stories (sx-n3-61 .. sx-n3-70).
// Topics: a wedding invitation, a lost cat, a train delay, a cooking competition,
// a first date, a broken phone, a garden party, a job interview, a snow day,
// a farewell party.

export const storiesN3G: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 結婚式の招待状 (A wedding invitation)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-61",
    title: "結[けっ]婚[こん]式[しき]の招[しょう]待[たい]状[じょう]",
    titleReading: "けっこんしきのしょうたいじょう",
    level: "N3",
    summary: "A wedding invitation from an old college friend brings back memories and prompts a careful day-of celebration.",
    estMinutes: 5,
    tags: ["wedding", "invitation", "friendship"],
    body: [
      "先[せん]週[しゅう]、私[わたし]は大[だい]学[がく]時[じ]代[だい]の友[ゆう]人[じん]から結[けっ]婚[こん]式[しき]の招[しょう]待[たい]状[じょう]を受[う]け取[と]った。五[ご]年[ねん]ぶりの連[れん]絡[らく]だったが、嬉[うれ]しかった。",
      "彼[かれ]とは大[だい]学[がく]のサークルで知[し]り合[あ]った。いつも一[いっ]緒[しょ]に食[しょく]事[じ]をしたり、勉[べん]強[きょう]したりしていた親[した]しい友[ゆう]人[じん]だ。",
      "式[しき]は来[らい]月[げつ]、都[と]内[ない]のホテルで開[ひら]かれるらしい。招[しょう]待[たい]状[じょう]には日[ひ]付[づけ]と場[ば]所[しょ]が丁[てい]寧[ねい]に書[か]かれていた。",
      "ただ、出[しゅっ]席[せき]の返[へん]事[じ]は今[こん]週[しゅう]末[まつ]までに送[おく]らなければならない。失[しつ]礼[れい]にならないように、その日[ひ]の夜[よる]に返[へん]信[しん]を出[だ]した。",
      "次[つぎ]に考[かんが]えたのは、贈[おく]る祝[いわ]い金[きん]の金[きん]額[がく]だ。結[けっ]婚[こん]式[しき]では現[げん]金[きん]を贈[おく]るのが普[ふ]通[つう]だが、金額[きんがく]は関[かん]係[けい]によって決[き]まっている。友[ゆう]人[じん]の場[ば]合[あい]は三[さん]万[まん]円[えん]が一[いっ]般[ぱん]的[てき]だ。",
      "式[しき]の当[とう]日[じつ]、私[わたし]は新[あたら]しいスーツを着[き]て会[かい]場[じょう]へ向[む]かった。会[かい]場[じょう]には多[おお]くの客[きゃく]が集[あつ]まっていて、華[はな]やかな音[おん]楽[がく]が流[なが]れていた。",
      "花[はな]嫁[よめ]がドレス姿[すがた]で入[にゅう]場[じょう]してきた時[とき]、会[かい]場[じょう]が一[いっ]瞬[しゅん]静[しず]かになった。その美[うつく]しい姿[すがた]を見[み]て、友[ゆう]人[じん]の幸[しあわ]せを心[こころ]から祈[いの]った。"
    ],
    translation: [
      "Last week, I received a wedding invitation from my college friend. It was the first contact in five years, and I was glad.",
      "I got to know him through a university club. He was a close friend with whom I always shared meals and studied.",
      "The wedding will be held next month at a hotel in Tokyo. The invitation politely listed the date and location.",
      "However, I had to send my RSVP by this weekend. To avoid being rude, I sent my reply that very night.",
      "Next, I thought about the amount of congratulatory money to give. It's customary to give cash at weddings, but the amount depends on the relationship. For a friend, thirty thousand yen is typical.",
      "On the day of the wedding, I wore a new suit and headed to the venue. Many guests had gathered, and gorgeous music played.",
      "When the bride entered in her dress, the hall fell silent for a moment. Seeing her beautiful figure, I prayed for my friend's happiness from the bottom of my heart."
    ],
    vocab: [
      { word: "結婚式", reading: "けっこんしき", meaning: "wedding ceremony" },
      { word: "招待状", reading: "しょうたいじょう", meaning: "invitation" },
      { word: "大学時代", reading: "だいがくじだい", meaning: "college days" },
      { word: "友人", reading: "ゆうじん", meaning: "friend" },
      { word: "連絡", reading: "れんらく", meaning: "contact" },
      { word: "出席", reading: "しゅっせき", meaning: "attendance" },
      { word: "返事", reading: "へんじ", meaning: "reply" },
      { word: "失礼", reading: "しつれい", meaning: "rude; impolite" },
      { word: "祝い金", reading: "いわいきん", meaning: "congratulatory money" },
      { word: "現金", reading: "げんきん", meaning: "cash" },
      { word: "一般的", reading: "いっぱんてき", meaning: "typical" },
      { word: "花嫁", reading: "はなよめ", meaning: "bride" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 迷い猫 (A lost cat)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-62",
    title: "迷[まよ]い猫[ねこ]",
    titleReading: "まよいねこ",
    level: "N3",
    summary: "A stray cat appears in the garden, and a small act of kindness leads to an unexpected friendship.",
    estMinutes: 4,
    tags: ["cat", "kindness", "neighborhood"],
    body: [
      "先[せん]週[しゅう]の月[げつ]曜[よう]日[び]、私[わたし]の庭[にわ]に一[いっ]匹[ぴき]の猫[ねこ]がやって来[き]た。首[くび]輪[わ]がないので、どこかの家[いえ]の猫[ねこ]かもしれないと思[おも]った。",
      "猫[ねこ]はとても痩[や]せていて、お腹[なか]を空[す]かせているようだった。とりあえず、お水[みず]と餌[えさ]を庭[にわ]に置[お]いてあげた。",
      "翌[よく]日[じつ]、猫[ねこ]はまたやって来[き]た。どうやら迷[まい]子[ご]になっているらしい。私[わたし]の近[きん]所[しょ]にはこんな猫[ねこ]はいなかったはずだ。",
      "近[きん]所[しょ]の人[ひと]に聞[き]いてみたが、誰[だれ]も知[し]らないと言[い]った。そこで、私[わたし]は猫[ねこ]の写[しゃ]真[しん]を撮[と]って、掲[けい]示[じ]板[ばん]に貼[は]ることにした。",
      "三[さん]日[にち]後[ご]、ある女[じょ]性[せい]から電[でん]話[わ]がかかってきた。「その猫[ねこ]はうちのミイです」と言[い]う。彼[かの]女[じょ]は声[こえ]を震[ふる]わせて喜[よろこ]んでいた。",
      "その日[ひ]の午[ご]後[ご]、彼[かの]女[じょ]が私[わたし]の家[いえ]まで迎[むか]えに来[き]た。猫[ねこ]は彼[かの]女[じょ]を見[み]るなり、嬉[うれ]しそうに鳴[な]いた。やはり飼[か]い主[ぬし]だったのだ。",
      "迷[まよ]った猫[ねこ]が無[ぶ]事[じ]に家[いえ]に帰[かえ]れてよかった。この出[で]来[き]事[ごと]をきっかけに、私[わたし]と彼[かの]女[じょ]は時[とき]々手[て]紙[がみ]を交[こう]換[かん]している。"
    ],
    translation: [
      "Last Monday, a cat came to my garden. It had no collar, so I thought it might be someone's cat from somewhere.",
      "The cat was very thin and seemed hungry. For the time being, I put out some water and food in the garden.",
      "The next day, the cat came again. It seemed to be lost. I was sure no cat like this lived in my neighborhood.",
      "I asked people nearby, but no one knew it. So I decided to take a photo of the cat and post it on the bulletin board.",
      "Three days later, a woman called me. \"That cat is our Mie,\" she said. She was overjoyed, her voice trembling.",
      "That afternoon, she came to my house to pick up the cat. As soon as the cat saw her, it meowed happily. She was indeed the owner.",
      "I was glad the lost cat made it home safely. Thanks to this incident, she and I still exchange letters from time to time."
    ],
    vocab: [
      { word: "迷い猫", reading: "まよいねこ", meaning: "stray cat" },
      { word: "一匹", reading: "いっぴき", meaning: "one (small animal)" },
      { word: "首輪", reading: "くびわ", meaning: "collar" },
      { word: "痩せる", reading: "やせる", meaning: "to lose weight" },
      { word: "迷子", reading: "まいご", meaning: "lost child or pet" },
      { word: "近所", reading: "きんじょ", meaning: "neighborhood" },
      { word: "掲示板", reading: "けいじばん", meaning: "bulletin board" },
      { word: "電話", reading: "でんわ", meaning: "phone call" },
      { word: "飼い主", reading: "かいぬし", meaning: "pet owner" },
      { word: "無事", reading: "ぶじ", meaning: "safe" },
      { word: "出来事", reading: "できごと", meaning: "incident" },
      { word: "交換", reading: "こうかん", meaning: "exchange" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 電車の遅延 (A train delay)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-63",
    title: "電[でん]車[しゃ]の遅[ち]延[えん]",
    titleReading: "でんしゃのちえん",
    level: "N3",
    summary: "A Monday morning commute turns into an unexpected wait, testing patience and revealing small kindnesses.",
    estMinutes: 5,
    tags: ["train", "commute", "delay"],
    body: [
      "月[げつ]曜[よう]日[び]の朝[あさ]、私[わたし]はいつものように駅[えき]へ向[む]かった。しかし、ホームには普[ふ]段[だん]の倍[ばい]の人[ひと]がいた。",
      "駅[えき]のアナウンスによると、線[せん]路[ろ]にトラブルがあったらしい。電[でん]車[しゃ]は遅[ち]延[えん]していて、復[ふっ]旧[きゅう]のめどが立[た]たないとのことだった。",
      "私[わたし]は職[しょく]場[ば]に連[れん]絡[らく]することにした。スマートフォンでメッセージを送[おく]り、「電[でん]車[しゃ]が遅[おく]れています」と伝[つた]えた。",
      "周[まわ]りを見[み]渡[わた]すと、本[ほん]を読[よ]んでいる人[ひと]もいれば、イライラして時[と]計[けい]を見[み]ている人[ひと]もいた。皆[みな]、それぞれの時[とき]間[かん]を過[す]ごしている。",
      "三[さん]十[じゅう]分[ふん]待[ま]っても電[でん]車[しゃ]は来[こ]なかった。ようやくアナウンスが流[なが]れ、「まもなく運[うん]転[てん]を再[さい]開[かい]します」と告[つ]げた。",
      "電[でん]車[しゃ]が到[とう]着[ちゃく]した時[とき]、ホームの人[ひと]が一[いっ]斉[せい]に乗[の]り込[こ]んだ。私[わたし]はやっと席[せき]に座[すわ]ることができた。しかし、すでに遅[ち]刻[こく]の時[とき]間[かん]だった。",
      "会[がい]社[しゃ]に着[つ]くと、上[じょう]司[し]は「気[き]をつけて来[き]てくれただけで十[じゅう]分[ぶん]だ」と言[い]ってくれた。日[に]本[ほん]の通[つう]勤[きん]電[でん]車[しゃ]は、時[とき]には予[よ]測[そく]できない。でも、そういう日[ひ]もある。"
    ],
    translation: [
      "On Monday morning, I headed to the station as usual. However, there were twice as many people on the platform as usual.",
      "According to the station announcement, there seemed to be trouble on the tracks. Trains were delayed, and restoration wasn't yet in sight.",
      "I decided to contact my workplace. I sent a message on my smartphone: \"My train is running late.\"",
      "Looking around, some people were reading books, while others were impatiently checking their watches. Everyone was spending their time in their own way.",
      "Thirty minutes passed and the train still hadn't come. Finally, an announcement came: \"Service will resume shortly.\"",
      "When the train arrived, people on the platform rushed in all at once. I finally got a seat. But it was already past the time I should have arrived.",
      "When I reached the office, my boss said, \"The fact that you came carefully is enough.\" Japanese commuter trains are sometimes unpredictable. But such days happen."
    ],
    vocab: [
      { word: "遅延", reading: "ちえん", meaning: "delay" },
      { word: "普段", reading: "ふだん", meaning: "usual" },
      { word: "線路", reading: "せんろ", meaning: "railroad tracks" },
      { word: "復旧", reading: "ふっきゅう", meaning: "restoration" },
      { word: "職場", reading: "しょくば", meaning: "workplace" },
      { word: "見渡す", reading: "みわたす", meaning: "to look around" },
      { word: "一斉に", reading: "いっせいに", meaning: "all at once" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" },
      { word: "遅刻", reading: "ちこく", meaning: "lateness" },
      { word: "上司", reading: "じょうし", meaning: "boss" },
      { word: "通勤", reading: "つうきん", meaning: "commuting" },
      { word: "予測", reading: "よそく", meaning: "prediction" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 料理コンテスト (A cooking competition)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-64",
    title: "料[りょう]理[り]コンテスト",
    titleReading: "りょうりこんてすと",
    level: "N3",
    summary: "A neighborhood cooking contest challenges the narrator to prepare a vegetable curry under time pressure.",
    estMinutes: 5,
    tags: ["cooking", "contest", "community"],
    body: [
      "先[せん]週[しゅう]の日[にち]曜[よう]日[び]、私[わたし]は町[ちょう]内[ない]会[かい]の料[りょう]理[り]コンテストに参[さん]加[か]した。テーマは「家[か]庭[てい]の味[あじ]」だった。",
      "私[わたし]は野[や]菜[さい]たっぷりのカレーを作[つく]ることにした。前[ぜん]日[じつ]の夜[よる]、必[ひつ]要[よう]な食[しょく]材[ざい]をすべて揃[そろ]えておいた。",
      "当[とう]日[じつ]は午[ご]前[ぜん]中[ちゅう]から会[かい]場[じょう]が賑[にぎ]やかだった。参[さん]加[か]者[しゃ]は各[かく]自[じ]の調[ちょう]理[り]台[だい]で、真[しん]剣[けん]な表[ひょう]情[じょう]で作[さ]業[ぎょう]を始[はじ]めた。",
      "制[せい]限[げん]時[じ]間[かん]は二[に]時[じ]間[かん]だけだった。私[わたし]は野[や]菜[さい]を切[き]り、鍋[なべ]で煮[に]込[こ]みながら、スパイスのバランスを何[なん]度[ど]も確[たし]かめた。",
      "途[と]中[ちゅう]でご飯[はん]を炊[た]き忘[わす]れそうになったが、すぐに気[き]づいて事[こと]なきを得[え]た。焦[あせ]りは失[しっ]敗[ぱい]のもとだ。",
      "審[しん]査[さ]員[いん]が私[わたし]のカレーを一[ひと]口[くち]食[た]べた時[とき]、「香[かお]りがいい」と頷[うなず]いてくれた。その瞬[しゅん]間[かん]、緊[きん]張[ちょう]が少[すこ]し和[やわ]らいだ。",
      "結[けっ]果[か]、私[わたし]は一[いっ]位[い]にはなれなかったが、「特[とく]別[べつ]賞[しょう]」をもらった。ただ勝[か]つことだけが目[もく]的[てき]ではないと分[わ]かった。"
    ],
    translation: [
      "Last Sunday, I took part in a cooking contest organized by the neighborhood association. The theme was \"home-style flavor.\"",
      "I decided to make a vegetable-rich curry. The night before, I gathered all the necessary ingredients.",
      "On the day, the venue was lively from the morning. Participants started working at their own cooking stations with serious faces.",
      "The time limit was only two hours. I cut vegetables, simmered them in a pot, and repeatedly checked the balance of spices.",
      "Midway through, I almost forgot to cook the rice, but I noticed right away and avoided disaster. Hurrying leads to failure.",
      "When a judge tasted my curry and said, \"It has a wonderful aroma,\" nodding, my tension eased a little at that moment.",
      "In the end, I didn't win first place, but I received a \"special prize.\" I realized that winning isn't the only purpose."
    ],
    vocab: [
      { word: "料理", reading: "りょうり", meaning: "cooking" },
      { word: "コンテスト", reading: "こんてすと", meaning: "contest" },
      { word: "町内会", reading: "ちょうないかい", meaning: "neighborhood association" },
      { word: "参加", reading: "さんか", meaning: "participation" },
      { word: "食材", reading: "しょくざい", meaning: "ingredients" },
      { word: "制限時間", reading: "せいげんじかん", meaning: "time limit" },
      { word: "煮込む", reading: "にこむ", meaning: "to simmer" },
      { word: "審査員", reading: "しんさいん", meaning: "judge" },
      { word: "頷く", reading: "うなずく", meaning: "to nod" },
      { word: "緊張", reading: "きんちょう", meaning: "tension" },
      { word: "特別賞", reading: "とくべつしょう", meaning: "special prize" },
      { word: "目的", reading: "もくてき", meaning: "purpose" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 初めてのデート (A first date)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-65",
    title: "初[はじ]めてのデート",
    titleReading: "はじめてのでーと",
    level: "N3",
    summary: "A nervous first date with a coworker unfolds over lunch and a park walk, slowly melting the awkward silence.",
    estMinutes: 4,
    tags: ["date", "romance", "slice of life"],
    body: [
      "先[せん]週[しゅう]末[まつ]、私[わたし]は初[はじ]めてのデートに出[で]かけた。相[あい]手[て]は同[おな]じ職[しょく]場[ば]の山[やま]田[だ]さんだ。",
      "約[やく]束[そく]の場[ば]所[しょ]は駅[えき]の前[まえ]だった。私[わたし]は少[すこ]し早[はや]めに着[つ]いて、緊[きん]張[ちょう]しながら待[ま]った。",
      "山[やま]田[だ]さんは時[とき]間[かん]通[とお]りに現[あらわ]れた。笑[え]顔[がお]で「おはようございます」と言[い]ってくれた。その笑[え]顔[がお]で少[すこ]し安[あん]心[しん]した。",
      "私[わたし]たちはイタリア料[りょう]理[り]の店[みせ]に入[はい]った。メニューが多[おお]くて迷[まよ]ったが、山[やま]田[だ]さんが「これがお勧[すす]めだよ」と助[じょ]言[げん]してくれた。",
      "食[しょく]事[じ]中[ちゅう]、最[さい]初[しょ]は会[かい]話[わ]が続[つづ]かなかった。でも、共[きょう]通[つう]の趣[しゅ]味[み]が分[わ]かると、次[し]第[だい]に話[はなし]が弾[はず]んできた。",
      "食[た]べた後[あと]、近[ちか]くの公[こう]園[えん]を散[さん]歩[ぽ]した。風[かぜ]が心[ここ]地[ち]よく、木[き]々の緑[みどり]がきれいだった。二[ふた]人[り]の間[あいだ]に沈[ちん]黙[もく]はなかった。",
      "別[わか]れる時[とき]、「また会[あ]いましょう」と言[い]った。山[やま]田[だ]さんも頷[うなず]いてくれた。次[つぎ]の週[しゅう]末[まつ]、また会[あ]う約[やく]束[そく]をした。"
    ],
    translation: [
      "Last weekend, I went on my first date. My partner was Yamada-san from the same workplace.",
      "The meeting place was in front of the station. I arrived a little early and waited nervously.",
      "Yamada-san appeared right on time. She smiled and said, \"Good morning.\" That smile put me a little at ease.",
      "We went into an Italian restaurant. The menu was extensive, and I was unsure, but Yamada-san advised, \"This one's recommended.\"",
      "At first, during the meal, our conversation didn't continue smoothly. But once we discovered shared hobbies, the talk gradually became lively.",
      "After eating, we walked in a nearby park. The breeze was pleasant, and the green of the trees was beautiful. There was no silence between us.",
      "When we parted, I said, \"Let's meet again.\" Yamada-san nodded too. We promised to meet again next weekend."
    ],
    vocab: [
      { word: "初めて", reading: "はじめて", meaning: "first time" },
      { word: "相手", reading: "あいて", meaning: "partner" },
      { word: "約束", reading: "やくそく", meaning: "promise" },
      { word: "緊張", reading: "きんちょう", meaning: "nervousness" },
      { word: "現れる", reading: "あらわれる", meaning: "to appear" },
      { word: "笑顔", reading: "えがお", meaning: "smile" },
      { word: "お勧め", reading: "おすすめ", meaning: "recommendation" },
      { word: "会話", reading: "かいわ", meaning: "conversation" },
      { word: "共通", reading: "きょうつう", meaning: "common" },
      { word: "趣味", reading: "しゅみ", meaning: "hobby" },
      { word: "散歩", reading: "さんぽ", meaning: "walk" },
      { word: "沈黙", reading: "ちんもく", meaning: "silence" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 壊れたスマホ (A broken phone)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-66",
    title: "壊[こわ]れたスマホ",
    titleReading: "こわれたすまほ",
    level: "N3",
    summary: "A dropped phone cracks the screen, leading to repair costs, data worries, and a lesson about backups.",
    estMinutes: 4,
    tags: ["phone", "technology", "regret"],
    body: [
      "昨[さく]夜[や]、私[わたし]はうっかりスマートフォンを落[お]としてしまった。画[が]面[めん]が割[わ]れて、電[でん]源[げん]が入[はい]らなくなった。",
      "今[け]朝[さ]、すぐに修[しゅう]理[り]店[てん]へ行[い]った。店[てん]員[いん]は画[が]面[めん]を見[み]て、「これは修[しゅう]理[り]が必[ひつ]要[よう]ですね」と言[い]った。",
      "修[しゅう]理[り]費[ひ]を聞[き]くと、予[よ]想[そう]よりずっと高[たか]かった。新[あたら]しい機[き]種[しゅ]を買[か]った方[ほう]が安[やす]いくらいだった。",
      "結[けっ]局[きょく]、私[わたし]は新[あたら]しいスマートフォンを買[か]うことにした。データを移[い]行[こう]するのに、何[なん]時[じ]間[かん]もかかった。",
      "連[れん]絡[らく]先[さき]を失[うしな]った人[ひと]もいた。仕[し]方[かた]なく、SNSで「番[ばん]号[ごう]が変[か]わりました」と投[とう]稿[こう]した。",
      "古[ふる]いスマートフォンには、思[おも]い出[で]の写[しゃ]真[しん]も入[はい]っていた。バックアップを取[と]っていなかったことを後[こう]悔[かい]した。",
      "これからは、定[てい]期[き]的[てき]にデータを保[ほ]存[ぞん]しようと思[おも]う。失[うしな]って初[はじ]めて、その大[たい]切[せつ]さが分[わ]かるものだ。"
    ],
    translation: [
      "Last night, I accidentally dropped my smartphone. The screen cracked, and it wouldn't turn on.",
      "This morning, I went straight to a repair shop. The clerk looked at the screen and said, \"This needs repair.\"",
      "When I asked about the repair cost, it was much higher than expected. It was almost cheaper to buy a new model.",
      "In the end, I decided to buy a new smartphone. Transferring the data took hours.",
      "I lost some contacts too. With no other choice, I posted on social media: \"My number has changed.\"",
      "The old smartphone had photos with memories in it too. I regretted not having made a backup.",
      "From now on, I'll save my data regularly. It's only after losing something that you understand its importance."
    ],
    vocab: [
      { word: "画面", reading: "がめん", meaning: "screen" },
      { word: "割れる", reading: "われる", meaning: "to crack" },
      { word: "電源", reading: "でんげん", meaning: "power" },
      { word: "修理", reading: "しゅうり", meaning: "repair" },
      { word: "必要", reading: "ひつよう", meaning: "necessary" },
      { word: "修理費", reading: "しゅうりひ", meaning: "repair cost" },
      { word: "予想", reading: "よそう", meaning: "expectation" },
      { word: "機種", reading: "きしゅ", meaning: "model" },
      { word: "移行", reading: "いこう", meaning: "migration" },
      { word: "連絡先", reading: "れんらくさき", meaning: "contact" },
      { word: "投稿", reading: "とうこう", meaning: "post" },
      { word: "後悔", reading: "こうかい", meaning: "regret" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 庭のパーティー (A garden party)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-67",
    title: "庭[にわ]のパーティー",
    titleReading: "にわのぱーてぃー",
    level: "N3",
    summary: "A neighborhood garden party brings families together with food, lanterns, and new friendships.",
    estMinutes: 5,
    tags: ["party", "garden", "community"],
    body: [
      "先[せん]週[しゅう]の日[にち]曜[よう]日[び]、私[わたし]たちの町[ちょう]内[ない]で庭[にわ]のパーティーが開[ひら]かれた。各[かく]家[か]が料[りょう]理[り]や飲[の]み物[もの]を持[も]ち寄[よ]った。",
      "主[しゅ]人[じん]の家[いえ]の広[ひろ]い庭[にわ]が会[かい]場[じょう]になった。芝[しば]生[ふ]の上[うえ]にテーブルが並[なら]べられ、色[いろ]とりどりの料[りょう]理[り]が所[ところ]狭[せま]しと並[なら]んだ。",
      "子[こ]供[ども]たちは元[げん]気[き]に走[はし]り回[まわ]っていた。大[おお]人[ひと]は木[き]陰[かげ]で涼[すず]みながら、お酒[さけ]を飲[の]んだりお菓[か]子[し]を食[た]べたりした。",
      "私[わたし]は自[じ]家[か]製[せい]のクッキーを持[も]っていった。隣[となり]の田[た]中[なか]さんが「とても美味[おい]しい」と言[い]ってくれた。",
      "庭[にわ]には色[いろ]々な花[はな]が咲[さ]いていた。その香[かお]りが風[かぜ]に乗[の]って漂[ただよ]ってくる。まるで外[がい]国[こく]にいるかのような雰[ふん]囲[い]気[き]だった。",
      "夕[ゆう]方[がた]になると、ランタンに灯[あか]りが点[と]された。柔[やわ]らかい光[ひかり]が庭[にわ]を包[つつ]み、夜[よる]のパーティーが始[はじ]まった。",
      "帰[かえ]る時[とき]、私[わたし]は新[あたら]しい友[とも]達[だち]が何[なん]人[にん]かできたことに気[き]づいた。小[ちい]さな集[あつ]まりでも、人[ひと]と人[ひと]が繋[つな]がる楽[たの]しさを知[し]った。"
    ],
    translation: [
      "Last Sunday, a garden party was held in our neighborhood. Each household brought food and drinks.",
      "The host's spacious garden became the venue. Tables were set up on the lawn, and colorful dishes crowded the space.",
      "Children were running around energetically. Adults relaxed in the shade of trees, drinking sake and eating snacks.",
      "I brought homemade cookies. The neighbor, Tanaka-san, said, \"These are very delicious.\"",
      "Various flowers were blooming in the garden. Their fragrance drifted on the breeze. It was like being in a foreign country.",
      "As evening came, lanterns were lit. Soft light wrapped the garden, and the night party began.",
      "When going home, I realized I had made a few new friends. Even a small gathering taught me the joy of people connecting with each other."
    ],
    vocab: [
      { word: "庭", reading: "にわ", meaning: "garden" },
      { word: "町内", reading: "ちょうない", meaning: "neighborhood" },
      { word: "持ち寄る", reading: "もちよる", meaning: "to bring (each)" },
      { word: "芝生", reading: "しばふ", meaning: "lawn" },
      { word: "木陰", reading: "きかげ", meaning: "shade of a tree" },
      { word: "自家製", reading: "じかせい", meaning: "homemade" },
      { word: "隣", reading: "となり", meaning: "neighbor" },
      { word: "美味しい", reading: "おいしい", meaning: "delicious" },
      { word: "香り", reading: "かおり", meaning: "fragrance" },
      { word: "漂う", reading: "ただよう", meaning: "to drift" },
      { word: "雰囲気", reading: "ふんいき", meaning: "atmosphere" },
      { word: "繋がる", reading: "つながる", meaning: "to connect" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 就職面接 (A job interview)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-68",
    title: "就[しゅう]職[しょく]面[めん]接[せつ]",
    titleReading: "しゅうしょくめんせつ",
    level: "N3",
    summary: "A carefully prepared job interview tests honesty and composure, ending in a long-awaited offer.",
    estMinutes: 5,
    tags: ["interview", "job", "preparation"],
    body: [
      "先[せん]週[しゅう]の金[きん]曜[よう]日[び]、私[わたし]は希[き]望[ぼう]する会[がい]社[しゃ]の面[めん]接[せつ]を受[う]けた。準[じゅん]備[び]には一[いっ]週[しゅう]間[かん]以[い]上[じょう]かけた。",
      "前[ぜん]日[じつ]、履[り]歴[れき]書[しょ]をもう一[いっ]度[ど]見[み]直[なお]した。志[し]望[ぼう]動[どう]機[き]を丁[てい]寧[ねい]に書[か]き直[なお]し、自[じ]分[ぶん]の言[こと]葉[ば]で語[かた]れるようにした。",
      "当[とう]日[じつ]は暗[くら]い色[いろ]のスーツを着[き]て、髪[かみ]をきちんと整[ととの]えた。靴[くつ]も磨[みが]いて、清[せい]潔[けつ]な印[いん]象[しょう]を心[こころ]がけた。",
      "面[めん]接[せつ]室[しつ]に入[はい]ると、三[さん]人[にん]の面[めん]接[せつ]官[かん]がいた。最[さい]初[しょ]は緊[きん]張[ちょう]したが、深[しん]呼[こ]吸[きゅう]をして落[お]ち着[つ]いた。",
      "質[しつ]問[もん]は予[よ]想[そう]より難[むずか]しかった。「過[か]去[こ]の失[しっ]敗[ぱい]から何[なに]を学[まな]びましたか」と聞[き]かれた時[とき]、少[すこ]し考[かんが]え込[こ]んでしまった。",
      "でも、正[しょう]直[じき]に答[こた]えることにした。自[じ]分[ぶん]の弱[よわ]さを認[みと]めることも大[たい]切[せつ]だと思[おも]ったからだ。",
      "一[いっ]週[しゅう]間[かん]後[ご]、会[がい]社[しゃ]から採[さい]用[よう]の通[つう]知[ち]が届[とど]いた。嬉[うれ]しかった。準[じゅん]備[び]を怠[おこた]らなかったことが、結[けっ]果[か]につながったのだと思[おも]う。"
    ],
    translation: [
      "Last Friday, I had an interview at the company I hoped to join. I spent over a week preparing.",
      "The day before, I reviewed my resume once more. I carefully rewrote my motivation, so I could speak in my own words.",
      "On the day, I wore a dark-colored suit and fixed my hair neatly. I polished my shoes too, aiming to give a clean impression.",
      "When I entered the interview room, three interviewers were there. At first I was nervous, but I took deep breaths and calmed down.",
      "The questions were harder than expected. When asked, \"What have you learned from past failures?\", I thought for a moment.",
      "However, I decided to answer honestly. Acknowledging one's own weaknesses is also important, I thought.",
      "A week later, a notice of hiring arrived from the company. I was delighted. Not neglecting preparation had led to this result, I believe."
    ],
    vocab: [
      { word: "面接", reading: "めんせつ", meaning: "interview" },
      { word: "希望", reading: "きぼう", meaning: "hope" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "履歴書", reading: "りれきしょ", meaning: "resume" },
      { word: "志望動機", reading: "しぼうどうき", meaning: "motivation for applying" },
      { word: "丁寧", reading: "ていねい", meaning: "polite" },
      { word: "清潔", reading: "せいけつ", meaning: "clean" },
      { word: "面接官", reading: "めんせつかん", meaning: "interviewer" },
      { word: "深呼吸", reading: "しんこきゅう", meaning: "deep breath" },
      { word: "失敗", reading: "しっぱい", meaning: "failure" },
      { word: "正直", reading: "しょうじき", meaning: "honest" },
      { word: "採用", reading: "さいよう", meaning: "hiring" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 雪の日 (A snow day)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-69",
    title: "雪[ゆき]の日[ひ]",
    titleReading: "ゆきのひ",
    level: "N3",
    summary: "A heavy snowfall halts the city, turning an ordinary weekday into a quiet, reflective day at home.",
    estMinutes: 4,
    tags: ["snow", "winter", "rest"],
    body: [
      "昨日[きのう]は大[おお]雪[ゆき]が降[ふ]った。朝[あさ]起[お]きると、外[そと]はすっかり白[しろ]い世[せ]界[かい]になっていた。",
      "電[でん]車[しゃ]は止[と]まり、道[どう]路[ろ]は凍[こお]っていた。学[がっ]校[こう]も会[がい]社[しゃ]も休[やす]みになった。珍[めずら]しいことだ。",
      "私[わたし]は家[いえ]でゆっくり過[す]ごすことにした。コーヒーを飲[の]みながら、読[よ]みかけの本[ほん]を読[よ]んだ。",
      "窓[まど]の外[そと]を見[み]ると、子[こ]供[ども]たちが雪[ゆき]だるまを作[つく]っている。元[げん]気[き]な声[こえ]が聞[き]こえてきて、なんだか嬉[うれ]しくなった。",
      "昼[ひる]過[す]ぎ、雪[ゆき]は小[こ]降[ぶ]りになった。私[わたし]は近[きん]所[しょ]の除[じょ]雪[せつ]を手[て]伝[つだ]うことにした。隣[となり]のお年[とし]寄[よ]りも助[たす]かると言[い]った。",
      "雪[ゆき]かきは思[おも]ったより重[じゅう]労[ろう]働[どう]だった。でも、終[お]わった後[あと]の達[たっ]成[せい]感[かん]は格[かく]別[べつ]だった。",
      "夕[ゆう]方[がた]、空[そら]が晴[は]れて美[うつく]しい夕[ゆう]焼[や]けが見[み]えた。雪[ゆき]の日[ひ]も悪[わる]くないと思[おも]った。たまにはこういう日[ひ]が必[ひつ]要[よう]だ。"
    ],
    translation: [
      "Yesterday, heavy snow fell. When I woke up in the morning, the outside had become a completely white world.",
      "Trains had stopped, and roads were frozen. Both schools and offices were closed. It was a rare event.",
      "I decided to spend the day relaxing at home. While drinking coffee, I read a book I was in the middle of.",
      "Looking out the window, children were building snowmen. I heard their energetic voices and felt somehow happy.",
      "In the early afternoon, the snow lightened. I decided to help with snow removal in the neighborhood. The elderly neighbor said it was a great help.",
      "Shoveling snow was harder labor than I expected. But the sense of accomplishment afterward was exceptional.",
      "In the evening, the sky cleared and I saw a beautiful sunset. I thought a snowy day wasn't bad either. Such days are needed once in a while."
    ],
    vocab: [
      { word: "大雪", reading: "おおゆき", meaning: "heavy snow" },
      { word: "凍る", reading: "こおる", meaning: "to freeze" },
      { word: "珍しい", reading: "めずらしい", meaning: "rare" },
      { word: "雪だるま", reading: "ゆきだるま", meaning: "snowman" },
      { word: "小降り", reading: "こぶり", meaning: "light precipitation" },
      { word: "除雪", reading: "じょせつ", meaning: "snow removal" },
      { word: "年寄り", reading: "としより", meaning: "elderly" },
      { word: "雪かき", reading: "ゆきかき", meaning: "snow shoveling" },
      { word: "重労働", reading: "じゅうろうどう", meaning: "heavy labor" },
      { word: "達成感", reading: "たっせいかん", meaning: "sense of accomplishment" },
      { word: "格別", reading: "かくべつ", meaning: "exceptional" },
      { word: "夕焼け", reading: "ゆうやけ", meaning: "sunset glow" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 送別会 (A farewell party)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-70",
    title: "送[そう]別[べつ]会[かい]",
    titleReading: "そうべつかい",
    level: "N3",
    summary: "Colleagues gather to send off a beloved coworker transferring to another branch, with speeches, gifts, and warm wishes.",
    estMinutes: 5,
    tags: ["farewell", "coworker", "celebration"],
    body: [
      "金[きん]曜[よう]日[び]の夜[よる]、私[わたし]たちは田[た]中[なか]さんの送[そう]別[べつ]会[かい]を開[ひら]いた。彼[かれ]は来[らい]月[げつ]、別[べつ]の支[し]社[しゃ]へ転[てん]勤[きん]することになった。",
      "会[かい]場[じょう]は会[がい]社[しゃ]の近[ちか]くの居[い]酒[ざか]屋[や]だった。参[さん]加[か]者[しゃ]は二[に]十[じゅう]人[にん]ほどで、田[た]中[なか]さんの人[にん]望[ぼう]の厚[あつ]さが分[わ]かった。",
      "最[さい]初[しょ]に上[じょう]司[し]が挨[あい]拶[さつ]した。「田[た]中[なか]さんはいつも真[ま]面[じ]目[め]で、頼[たよ]りになる人[ひと]だ」と褒[ほ]めた。",
      "その後[のち]、一[ひと]人[り]ずつ短[みじか]いスピーチをした。私[わたし]は田[た]中[なか]さんと初[はじ]めて仕[し]事[ごと]をした時[とき]の思[おも]い出[で]を語[かた]った。",
      "田[た]中[なか]さんは最[さい]後[ご]に「皆[みな]さん、本[ほん]当[とう]にありがとう。新[あたら]しい場[ば]所[しょ]でも頑[がん]張[ば]ります」と言[い]った。目[め]が少[すこ]し潤[うる]んでいた。",
      "私[わたし]たちは田[た]中[なか]さんに色[いろ]紙[がみ]と記[き]念[ねん]品[ひん]を贈[おく]った。みんなで記[き]念[ねん]写[しゃ]真[しん]を撮[と]って、楽[たの]しい時[とき]間[かん]を過[す]ごした。",
      "別[わか]れは寂[さび]しいが、また会[あ]える日[ひ]を楽[たの]しみにしている。田[た]中[なか]さんの新[あたら]しい門[かど]出[で]を心[こころ]から祈[いの]っている。"
    ],
    translation: [
      "On Friday night, we held a farewell party for Tanaka-san. He will transfer to another branch office next month.",
      "The venue was an izakaya near the office. There were about twenty participants, and I understood how popular Tanaka-san was.",
      "First, the boss gave a speech. He praised him: \"Tanaka-san is always serious and reliable.\"",
      "After that, each of us gave a short speech. I talked about the memory of working with him for the first time.",
      "Tanaka-san spoke last: \"Thank you all, really. I'll do my best at the new place too.\" His eyes were slightly wet.",
      "We presented Tanaka-san with a message board and a commemorative gift. We all took a group photo and had an enjoyable time.",
      "Partings are sad, but I look forward to the day we can meet again. I pray from my heart for his new departure."
    ],
    vocab: [
      { word: "送別会", reading: "そうべつかい", meaning: "farewell party" },
      { word: "転勤", reading: "てんきん", meaning: "transfer" },
      { word: "居酒屋", reading: "いざかや", meaning: "izakaya" },
      { word: "人望", reading: "にんぼう", meaning: "popularity" },
      { word: "挨拶", reading: "あいさつ", meaning: "greeting" },
      { word: "真面目", reading: "まじめ", meaning: "serious" },
      { word: "頼りになる", reading: "たよりになる", meaning: "reliable" },
      { word: "思い出", reading: "おもいで", meaning: "memory" },
      { word: "色紙", reading: "いろがみ", meaning: "message board" },
      { word: "記念品", reading: "きねんひん", meaning: "commemorative gift" },
      { word: "別れ", reading: "わかれ", meaning: "parting" },
      { word: "門出", reading: "かどで", meaning: "departure" }
    ]
  }
];
