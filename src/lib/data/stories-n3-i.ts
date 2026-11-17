import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level short stories (sx-n3-81 .. sx-n3-90).
// Topics: a volunteer day, a hot spring trip, a school reunion, a new recipe,
// a rainy Sunday, a lost key, a concert ticket, a morning jog, a kind gesture,
// a sunset walk.

export const storiesN3I: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 地域のボランティアの日 (A volunteer day)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-81",
    title: "地[ち]域[いき]のボランティアの日[ひ]",
    titleReading: "ちいきのぼらんてぃあのひ",
    level: "N3",
    summary: "A weekend spent volunteering at a community cleanup, sorting donations, and bonding with neighbors over lunch.",
    estMinutes: 5,
    tags: ["volunteer", "community", "weekend"],
    body: [
      "土[ど]曜[よう]日[び]の朝[あさ]、私[わたし]は地[ち]域[いき]のボランティアに参加[さんか]することにしていた。前[まえ]から一[いち]度[ど]やってみようと思[おも]っていたのだ。",
      "集[しゅう]合[ごう]場[ば]所[しょ]に着[つ]くと、もう十[じゅう]人[にん]ほどの人[ひと]が集[あつ]まっていた。年[ねん]齢[れい]も職[しょく]業[ぎょう]も違[ちが]う人[ひと]ばかりで、少[すこ]し緊[きん]張[ちょう]した。",
      "今[こん]日[にち]の仕[し]事[ごと]は、公[こう]園[えん]の清[せい]掃[そう]と寄[き]付[ふ]された物[もの]の仕[し]分[わ]けだった。リーダーが流[なが]れるように指示[しじ]を出[だ]してくれるので、やりやすい。",
      "私[わたし]は二[ふた]人[り]の大[だい]学[がく]生[せい]とペアになった。初[はじ]めはぎこちなかったが、作業[さぎょう]を進[すす]めるうちに、だんだん打[う]ち解[と]けていった。",
      "昼[ひる]休[やす]みには、みんなで持[も]ち寄[よ]ったおにぎりを食[た]べた。誰[だれ]かが冗[じょう]談[だん]を言[い]うたびに、笑[わら]いが起[お]きた。こういう時[とき]間[かん]は普段[ふだん]なかなかない。",
      "午[ご]後[ご]は古[ふる]着[ぎ]を箱[はこ]に詰[つ]める仕[し]事[ごと]だった。一[いち]枚[まい]一[いち]枚[まい]確[たし]かめながら詰[つ]めていくと、思[おも]ったより時[じ]間[かん]がかかった。",
      "終[お]わった時[とき]、体[からだ]は疲[つか]れていたが、心[こころ]はどこか軽[かる]かった。誰[だれ]かの役[やく]に立[た]ったという実[じつ]感[かん]が、疲[つか]れを上[うわ]回[まわ]るほど嬉[うれ]しかったのだ。",
      "帰[かえ]り道[みち]、来[らい]月[げつ]も参加[さんか]しようと決[き]めた。小[ちい]さな行[こう]動[どう]でも続[つづ]けていけば、きっと何[なに]かが変[か]わるはずだ。"
    ],
    translation: [
      "On Saturday morning, I had decided to take part in a community volunteer activity. I had been thinking for a while about trying it once.",
      "When I arrived at the meeting place, about ten people had already gathered. They were all of different ages and occupations, so I felt a little nervous.",
      "Today's tasks were cleaning the park and sorting donated items. The leader gave instructions smoothly, so it was easy to work.",
      "I was paired with two university students. At first we were awkward, but as we proceeded with the work, we gradually warmed up to each other.",
      "During the lunch break, we all ate rice balls we had brought. Every time someone made a joke, laughter broke out. I rarely have this kind of time normally.",
      "In the afternoon, the task was to pack old clothes into boxes. Checking each piece one by one as I packed, it took more time than I expected.",
      "When we finished, my body was tired, but my heart felt somehow lighter. The sense of having helped someone was enough to outweigh the fatigue.",
      "On the way home, I decided to participate again next month. Even small actions, if continued, should surely change something."
    ],
    vocab: [
      { word: "地域", reading: "ちいき", meaning: "community; region" },
      { word: "ボランティア", reading: "ぼらんてぃあ", meaning: "volunteer" },
      { word: "参加", reading: "さんか", meaning: "participation" },
      { word: "清掃", reading: "せいそう", meaning: "cleaning" },
      { word: "寄付", reading: "きふ", meaning: "donation" },
      { word: "仕分け", reading: "しわけ", meaning: "sorting" },
      { word: "指示", reading: "しじ", meaning: "instructions" },
      { word: "打ち解ける", reading: "うちとける", meaning: "to open up; warm up" },
      { word: "持ち寄る", reading: "もちよる", meaning: "to bring (food) together" },
      { word: "実感", reading: "じつかん", meaning: "real sense; actual feeling" },
      { word: "上回る", reading: "うわまわる", meaning: "to exceed; surpass" },
      { word: "行動", reading: "こうどう", meaning: "action" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 温泉旅行 (A hot spring trip)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-82",
    title: "温[おん]泉[せん]旅[り]行[こう]",
    titleReading: "おんせんりこう",
    level: "N3",
    summary: "A relaxing weekend getaway to a mountain hot spring inn with an old college friend, full of good food and warm conversation.",
    estMinutes: 5,
    tags: ["hot spring", "travel", "friendship"],
    body: [
      "先[せん]週[しゅう]末[まつ]、大[だい]学[がく]時[じ]代[だい]の友[とも]達[だち]と温[おん]泉[せん]に行[い]った。半[はん]年[とし]ぶりに会[あ]った彼[かれ]と、ゆっくり話[はな]せる機[き]会[かい]が欲[ほ]しかったのだ。",
      "電[でん]車[しゃ]で二[に]時[じ]間[かん]ほど揺[ゆ]られて着[つ]いた宿[やど]は、山[やま]の中[なか]にあった。窓[まど]から見[み]える紅[こう]葉[よう]がとてもきれいで、思[おも]わず見[み]とれてしまった。",
      "チェックインの後[あと]、先[さき]に露[ろ]天[てん]風[ぶ]呂[ろ]に行[い]った。冷[つめ]たい空気[くうき]の中[なか]で温[あたた]かいお湯[ゆ]に浸[つ]かると、日[ひ]々[び]の疲[つか]れが溶[と]けていくようだった。",
      "湯[ゆ]上[あ]がりには、浴[ゆ]衣[かた]に着[き]替[が]えて大[おお]広[ひろ]間[ま]で夕[ゆう]食[しょく]を取[と]った。地[じ]元[もと]の山[さん]菜[さい]や川[かわ]魚[ぎょ]を使[つか]った料[りょう]理[り]が次[つぎ]々[つぎ]と運[はこ]ばれてきて、どれも絶[ぜっ]品[ぴん]だった。",
      "食[た]べ終[お]わった後[あと]、私[わたし]たちは部[へ]屋[や]でお茶[ちゃ]を飲[の]みながら昔[むかし]話[ばなし]をした。「あの時[とき]は大[たい]変[へん]だったね」と笑[わら]い合[あ]ううちに、時[じ]間[かん]はあっという間[ま]に過[す]ぎていった。",
      "夜[よる]遅[おそ]くまで話[はな]していたせいで、翌[よく]朝[あさ]は少[すこ]し寝[ね]坊[ぼう]した。朝[あさ]風[ぶ]呂[ろ]に浸[つ]かって目[め]を覚[さ]まし、最[さい]後[ご]の料[りょう]理[り]を味[あじ]わう。",
      "チェックアウトの際[さい]、女[おか]将[み]が「またいらしてくださいね」と深[ふか]く頭[あたま]を下[さ]げてくれた。その温[あたた]かさに、もう一[いち]度[ど]来[き]たくなった。",
      "帰[かえ]りの電[でん]車[しゃ]の中[なか]で、私[わたし]は窓[まど]の外[そと]を眺[なが]めながら思[おも]った。たまにはこうして何[なに]もかも忘[わす]れて、自[じ]分[ぶん]を休[やす]める時[じ]間[かん]が大[たい]切[せつ]なのだと。"
    ],
    translation: [
      "Last weekend, I went to a hot spring with a friend from my college days. I had wanted a chance to talk with him at leisure for the first time in half a year.",
      "The inn I reached after about a two-hour train ride was in the mountains. The autumn leaves visible from the window were so beautiful that I couldn't help gazing at them.",
      "After check-in, I went to the open-air bath first. Soaking in the hot water in the cool air, my daily fatigue seemed to melt away.",
      "After the bath, I changed into a yukata and had dinner in a large banquet hall. Dishes made with local wild vegetables and river fish came out one after another, all of them exquisite.",
      "After eating, we had tea in the room and talked about old times. Laughing together about how hard things were back then, time flew by in a flash.",
      "Because we had talked until late at night, I overslept a little the next morning. I soaked in the morning bath to wake up and savored the final meal.",
      "At check-out, the proprietress bowed deeply and said, \"Please come again.\" Her warmth made me want to return once more.",
      "On the train back, gazing out the window, I thought: occasionally forgetting everything and giving yourself time to rest like this is important."
    ],
    vocab: [
      { word: "温泉", reading: "おんせん", meaning: "hot spring" },
      { word: "旅行", reading: "りこう", meaning: "trip; travel" },
      { word: "露天風呂", reading: "ろてんぶろ", meaning: "open-air bath" },
      { word: "湯上がり", reading: "ゆあがり", meaning: "right after a bath" },
      { word: "浴衣", reading: "ゆかた", meaning: "yukata; informal summer kimono" },
      { word: "大広間", reading: "おおひろま", meaning: "large banquet hall" },
      { word: "山菜", reading: "さんさい", meaning: "wild mountain vegetables" },
      { word: "絶品", reading: "ぜっぴん", meaning: "exquisite dish" },
      { word: "昔話", reading: "むかしばなし", meaning: "old stories; reminiscing" },
      { word: "寝坊", reading: "ねぼう", meaning: "oversleeping" },
      { word: "女将", reading: "おかみ", meaning: "proprietress (of an inn)" },
      { word: "眺める", reading: "ながめる", meaning: "to gaze at" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 同窓会の夜 (A school reunion night)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-83",
    title: "同[どう]窓[そう]会[かい]の夜[よる]",
    titleReading: "どうそうかいのよる",
    level: "N3",
    summary: "A ten-year junior high reunion that brings old faces back together, with nostalgia, surprises, and a renewed sense of connection.",
    estMinutes: 5,
    tags: ["reunion", "school", "nostalgia"],
    body: [
      "十[じゅう]年[ねん]ぶりの同[どう]窓[そう]会[かい]に出席[しゅっせき]するため、私[わたし]は中[ちゅう]学[がく]校[こう]のあった町[まち]のレストランに向[む]かった。",
      "会[かい]場[じょう]に入[はい]ると、見[み]知[し]らぬ大[おとな]人[おとな]ばかりに見[み]えた。でも、よく見[み]ると、どの顔[かお]にも昔[むかし]の面[おも]影[かげ]が残[のこ]っていた。",
      "懐[なつ]かしい名[な]前[まえ]を呼[よ]ばれて、私[わたし]も「あ、あの時[とき]の！」と声[こえ]を上[あ]げてしまった。あんなに小[ちい]さかった子[こ]が、今[いま]は立[りっ]派[ぱ]な社[しゃ]会[かい]人[じん]になっている。",
      "食[しょく]事[じ]が始[はじ]まると、話[はな]は止[と]まらなかった。当[とう]時[じ]の先[せん]生[せい]の話[はなし]や、文[ぶん]化[か]祭[さい]の失[しっ]敗[ぱい]談[だん]など、話[わ]題[だい]は次[つぎ]から次[つぎ]へと出[で]てきた。",
      "ひとりの友[とも]達[だち]が「実[じつ]は今[いま]、子[こ]どもがいて」と言[い]って写[しゃ]真[しん]を見[み]せてくれた。私[わたし]たちが大[おとな]人[おとな]になったことを、改[あらた]めて実[じつ]感[かん]した瞬[しゅん]間[かん]だった。",
      "二[に]時[じ]間[かん]があっという間[ま]に過[す]ぎ、気[き]がつけば店[みせ]を出[で]る時[じ]間[かん]になっていた。名[な]残[ごり]惜[お]しいまま、私[わたし]たちは外[そと]で一[いち]枚[まい]写[しゃ]真[しん]を撮[と]った。",
      "帰[かえ]り道[みち]、自[じ]分[ぶん]の十[じゅう]代[だい]を思[おも]い出[だ]しながら歩[ある]いた。失[うしな]われた時[じ]間[かん]は戻[もど]らないが、こうして再[さい]会[かい]できるのは奇[き]跡[せき]のようだと感[かん]じた。",
      "家[いえ]に着[つ]いた後[あと]、SNSでみんなと繋[つな]がった。十[じゅう]年[ねん]前[まえ]にはなかった仕[し]組[く]みが、再[さい]会[かい]のきっかけになる。これからも、この縁[えにし]を大[たい]切[せつ]にしていきたい。"
    ],
    translation: [
      "To attend my ten-year school reunion, I headed to a restaurant in the town where my junior high school had been.",
      "When I entered the venue, everyone seemed like unfamiliar adults at first. But looking closer, every face still held traces of the past.",
      "Hearing a nostalgic name called out, I couldn't help exclaiming, \"Ah, it's you from back then!\" The child who had been so small was now a proper working adult.",
      "Once dinner started, the conversation never stopped. Talk of teachers from those days and mishaps at the culture festival — one topic after another came up.",
      "One friend said, \"Actually, I have a child now,\" and showed us a photo. It was a moment that made me truly realize we had grown up.",
      "Two hours flew by, and before I knew it, it was time to leave the restaurant. Reluctant to part, we took a group photo outside.",
      "On the way home, I walked while recalling my teens. Lost time never returns, but being able to reunite like this felt like a miracle.",
      "After getting home, I connected with everyone on social media. Tools that didn't exist ten years ago now serve as a chance to reunite. I want to cherish this bond going forward."
    ],
    vocab: [
      { word: "同窓会", reading: "どうそうかい", meaning: "class reunion" },
      { word: "出席", reading: "しゅっせき", meaning: "attendance" },
      { word: "面影", reading: "おもかげ", meaning: "vestige; trace of the past" },
      { word: "懐かしい", reading: "なつかしい", meaning: "nostalgic" },
      { word: "立派", reading: "りっぱ", meaning: "fine; respectable" },
      { word: "社会人", reading: "しゃかいじん", meaning: "working adult" },
      { word: "失敗談", reading: "しっぱいだん", meaning: "story of failure" },
      { word: "実感", reading: "じつかん", meaning: "real feeling" },
      { word: "名残惜しい", reading: "なごりおしい", meaning: "reluctant to part" },
      { word: "再会", reading: "さいかい", meaning: "reunion" },
      { word: "奇跡", reading: "きせき", meaning: "miracle" },
      { word: "縁", reading: "えにし", meaning: "bond; tie" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 新しい料理の挑戦 (A new recipe challenge)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-84",
    title: "新[あたら]しい料[りょう]理[り]の挑[ちょう]戦[せん]",
    titleReading: "あたらしいりょうりのちょうせん",
    level: "N3",
    summary: "A weekend attempt at a Spanish-style omelet rice found in a cookbook, from gathering ingredients to a surprisingly satisfying first bite.",
    estMinutes: 6,
    tags: ["cooking", "challenge", "weekend"],
    body: [
      "今[こん]週[しゅう]末[まつ]、私[わたし]は今[いま]まで作[つく]ったことのない料[りょう]理[り]に挑[ちょう]戦[せん]することにした。料[りょう]理[り]の本[ほん]で見[み]つけた、スペイン風[ふう]のオムライスだ。",
      "材[ざい]料[りょう]は多[おお]かったが、前[まえ]の日[ひ]に全[すべ]て買[か]い揃[そろ]えておいた。準[じゅん]備[び]をしておけば、当日[とうじつ]は慌[あわ]てずに済[す]むはずだと考[かんが]えたからだ。",
      "まず、玉[たま]葱[ねぎ]をみじん切りにし、ベーコンと一[いっ]緒[しょ]に炒[いた]めた。香[こう]ばしい匂[にお]いがキッチンに広[ひろ]がり、手[て]応[ごた]えを感[かん]じ始[はじ]めた。",
      "次[つぎ]に、卵[たまご]を二[に]個[こ]割[わ]って溶[と]き、フライパンで薄[うす]く焼[や]いた。卵[たまご]を焼[や]き過[す]ぎないように注[ちゅう]意[い]しながら、トマトソースを別[べつ]に作[つく]り始[はじ]めた。",
      "ソースが煮[に]詰[つ]まってきた頃[ころ]、いよいよ仕[し]上[あ]げの段[だん]階[かい]に入[はい]った。ご飯[はん]をお皿[さら]に盛[も]り、その上[うえ]に卵[たまご]をかぶせ、最[さい]後[ご]にソースを流[なが]し込[こ]む。",
      "出[で]来[き]上[あ]がったオムライスは、見[み]た目[め]は本[ほん]の写[しゃ]真[しん]と少[すこ]し違[ちが]ったが、それなりにきれいだった。自[じ]分[ぶん]で言[い]うのもなんだが、少[すこ]し誇[ほこ]らしかった。",
      "実[じつ]際[さい]に食[た]べてみると、味[あじ]は思[おも]ったより良[よ]かった。ソースの酸[さん]味[み]と卵[たまご]の甘[あま]さがバランスよく合[あ]って、久[ひさ]しぶりに満[まん]足[ぞく]できる一[ひと]皿[さら]になった。",
      "今[こん]回[かい]の成[せい]功[こう]で自[じ]信[しん]がついた。次[つぎ]はもっと難[むずか]しい料[りょう]理[り]に挑[ちょう]戦[せん]してみよう。料[りょう]理[り]の世[せ]界[かい]は、やればやるほど奥[おく]が深[ふか]いと実[じつ]感[かん]している。"
    ],
    translation: [
      "This weekend, I decided to challenge myself with a dish I had never made before: a Spanish-style omelet rice I found in a cookbook.",
      "There were many ingredients, but I had bought them all the day before. I figured that if I prepared in advance, I wouldn't have to rush on the day.",
      "First, I finely chopped an onion and sautéed it with bacon. A savory aroma spread through the kitchen, and I began to feel a sense of accomplishment.",
      "Next, I cracked two eggs, beat them, and fried them thinly in a pan. While being careful not to overcook the eggs, I started making tomato sauce separately.",
      "When the sauce had reduced, I finally moved to the finishing stage. I plated rice, covered it with egg, and last poured the sauce over it.",
      "The finished omelet rice looked slightly different from the photo in the book, but it was reasonably attractive. It may be immodest to say so myself, but I felt a bit proud.",
      "When I actually tasted it, the flavor was better than I expected. The acidity of the sauce and the sweetness of the eggs balanced well, making it a satisfying dish I hadn't had in a while.",
      "This success gave me confidence. Next time I'll try an even more challenging dish. The world of cooking, I realize, is the more you do it, the deeper it gets."
    ],
    vocab: [
      { word: "挑戦", reading: "ちょうせん", meaning: "challenge" },
      { word: "材料", reading: "ざいりょう", meaning: "ingredients" },
      { word: "買い揃える", reading: "かいそろえる", meaning: "to buy all together" },
      { word: "玉葱", reading: "たまねぎ", meaning: "onion" },
      { word: "みじん切り", reading: "みじんぎり", meaning: "finely chopped" },
      { word: "香ばしい", reading: "こうばしい", meaning: "savory; fragrant" },
      { word: "手応え", reading: "てごたえ", meaning: "sense of accomplishment" },
      { word: "煮詰まる", reading: "につまる", meaning: "to reduce (sauce)" },
      { word: "酸味", reading: "さんみ", meaning: "acidity" },
      { word: "誇らしい", reading: "ほこらしい", meaning: "proud" },
      { word: "満足", reading: "まんぞく", meaning: "satisfaction" },
      { word: "奥が深い", reading: "おくがふかい", meaning: "profound; deep" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 雨の日曜日 (A rainy Sunday)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-85",
    title: "雨[あめ]の日[にち]曜[よう]日[び]",
    titleReading: "あめのにちようび",
    level: "N3",
    summary: "A quiet rainy Sunday spent indoors with old photo albums, simple udon, and overdue letters — a gentle reset for the mind.",
    estMinutes: 4,
    tags: ["rainy day", "quiet", "introspection"],
    body: [
      "朝[あさ]起[お]きると、窓[まど]の外[そと]は薄[うす]暗[ぐら]かった。雨[あめ]がしとしとと降[ふ]っていて、今日[きょう]は一[いち]日[にち]家[いえ]にいようと決[き]めた。",
      "久[ひさ]しぶりに、慌[あわ]ただしい朝[あさ]の準[じゅん]備[び]をしなくて済[す]む。ゆっくりコーヒーを入[い]れ、窓[まど]際[ぎわ]に座[すわ]って外[そと]を眺[なが]めた。こういう時[とき]の静[しず]けさが好[す]きだ。",
      "しばらく本[ほん]を読[よ]んでいたが、ふと昔[むかし]のアルバムを見[み]たくなった。本[ほん]棚[だな]の奥[おく]から取[と]り出[だ]し、埃[ほこり]を払[はら]って一[ひと]ページずつめくっていく。",
      "写[しゃ]真[しん]には、子[こ]どもの頃[ころ]の私[わたし]や、もう会[あ]えなくなった祖[そ]父[ふ]が写[うつ]っていた。あの頃[ころ]は何[なに]も知[し]らず、ただ毎[まい]日[にち]が楽[たの]しかった。懐[なつ]かしさで胸[むね]がいっぱいになった。",
      "昼[ひる]には、簡[かん]単[たん]なうどんを作[つく]って食[た]べた。外[そと]の雨[あま]音[おと]を聞[き]きながら食[た]べるうどんは、いつもより美[おい]しく感[かん]じられた。",
      "午[ご]後[ご]は、ずっと後[あと]回[まわ]しにしていた手[て]紙[がみ]を書[か]いた。普段[ふだん]は電[でん]子[し]メールで済[す]ませてしまうが、たまにはこうして手[て]書[が]きで伝[つた]えるのも悪[わる]くない。",
      "夕[ゆう]方[がた]になり、雨[あめ]は少[すこ]し強[つよ]くなった。暗[くら]い窓[まど]ガラスに映[うつ]る自[じ]分[ぶん]の顔[かお]を見[み]て、何[なに]だか穏[おだ]やかな気[き]分[ぶん]になった。",
      "一[いち]日[にち]外[そと]に出[で]なかった私[わたし]だが、心[こころ]は十[じゅう]分[ぶん]休[やす]まった。雨[あめ]の日[ひ]は、自[じ]分[ぶん]と向[む]き合[あ]うための大[たい]切[せつ]な時[じ]間[かん]をくれるのだと気[き]づいた。"
    ],
    translation: [
      "When I woke up in the morning, it was dim outside the window. Rain was falling softly, and I decided to stay home all day today.",
      "For the first time in a while, I didn't have to rush through morning preparations. I slowly made coffee and sat by the window, gazing outside. I love the silence at such times.",
      "I read for a while, but suddenly felt like looking at an old photo album. I took it out from the back of the bookshelf, brushed off the dust, and turned the pages one by one.",
      "The photos showed me as a child and my grandfather, whom I can no longer meet. Back then I knew nothing and every day was just fun. Nostalgia filled my heart.",
      "At noon, I made and ate simple udon. Eating udon while listening to the rain outside felt more delicious than usual.",
      "In the afternoon, I wrote letters I had long put off. Normally I'd just send an email, but occasionally conveying things in handwriting isn't bad either.",
      "As evening came, the rain grew a little stronger. Seeing my face reflected in the dark window glass, I felt somehow calm.",
      "Though I hadn't stepped outside all day, my heart was well rested. I realized that rainy days give us precious time to face ourselves."
    ],
    vocab: [
      { word: "しとしと", reading: "しとしと", meaning: "softly (of rain)" },
      { word: "慌ただしい", reading: "あわただしい", meaning: "busy; hurried" },
      { word: "眺める", reading: "ながめる", meaning: "to gaze at" },
      { word: "埃", reading: "ほこり", meaning: "dust" },
      { word: "払う", reading: "はらう", meaning: "to brush off" },
      { word: "祖父", reading: "そふ", meaning: "grandfather" },
      { word: "懐かしさ", reading: "なつかしさ", meaning: "nostalgia" },
      { word: "雨音", reading: "あまおと", meaning: "sound of rain" },
      { word: "後回し", reading: "あとまわし", meaning: "postponement" },
      { word: "手書き", reading: "てがき", meaning: "handwriting" },
      { word: "穏やか", reading: "おだやか", meaning: "calm" },
      { word: "向き合う", reading: "むきあう", meaning: "to face each other" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — なくした鍵 (A lost key)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-86",
    title: "なくした鍵[かぎ]",
    titleReading: "なくしたかぎ",
    level: "N3",
    summary: "The panic of a missing spare key, retraced steps, relief from a convenience store clerk, and a vow to never let it happen again.",
    estMinutes: 4,
    tags: ["lost item", "everyday life", "lesson"],
    body: [
      "帰[き]宅[たく]しようとポケットを探[さが]したが、鍵[かぎ]がない。昨[さく]夜[や]入[い]れたはずの場[ば]所[しょ]に、それはなかった。",
      "まさか落[お]としたのだろうか。心[しん]臓[ぞう]が大[おお]きく鳴[な]った。備[そな]え付[つ]けの鍵[かぎ]をなくしたとなると、管[かん]理[り]会[がい]社[しゃ]に連[れん]絡[らく]しなければならない。",
      "昨[さく]日[じつ]の行[こう]動[どう]を思[おも]い出[だ]してみた。朝[あさ]、ゴミを出[だ]した後[あと]、コンビニに寄[よ]って、それから会[かい]社[しゃ]に直[ちょっ]行[こう]したのだ。",
      "まずはコンビニに電[でん]話[わ]をかけてみた。店[てん]員[いん]が「お預[あず]かりしていますよ」と言[い]ってくれた時[とき]の安[あん]心[しん]感[かん]は、言[こと]葉[ば]では表[あらわ]せないほどだった。",
      "すぐに取[と]りに行[い]った。店[てん]員[いん]は笑[わら]いながら「落[お]とし物[もの]はよくありますよ」と言[い]ってくれたが、私[わたし]にとっては大[おお]きな問[もん]題[だい]だったのだ。",
      "帰[き]宅[たく]後[ご]、鍵[かぎ]を首[くび]から下[さ]げるストラップを買[か]うことにした。これからは絶[ぜっ]対[たい]になくさないようにしようと、自[じ]分[ぶん]に誓[ちか]った。",
      "一[いっ]方[ぽう]で、こんな小[ちい]さな出[で]来[き]事[ごと]で大[おお]きく慌[あわ]ててしまった自[じ]分[ぶん]が少[すこ]し恥[は]ずかしくもあった。もっと落[お]ち着[つ]いて対[たい]処[しょ]できるようになりたい。",
      "晩[ばん]ご飯[はん]を食[た]べながら、今[こん]日[にち]の出[で]来[き]事[ごと]を振[ふり]返[かえ]った。普[ふ]段[だん]から大[たい]切[せつ]にしているつもりのものでも、気[き]が緩[ゆる]んだ一[いっ]瞬[しゅん]で失[うしな]うことがある。油[ゆ]断[だん]は禁[きん]物[もつ]だと痛[つう]感[かん]した。"
    ],
    translation: [
      "I searched my pockets to head home, but my key was gone. It wasn't in the place I was sure I had put it last night.",
      "Could I have dropped it? My heart pounded loudly. Losing the spare key would mean I had to contact the management company.",
      "I tried to recall yesterday's actions. After taking out the trash in the morning, I stopped by a convenience store, and then went straight to the office.",
      "First, I called the convenience store. When the clerk said, \"We're holding it for you,\" the relief I felt was beyond words.",
      "I went right away to pick it up. The clerk laughed and said, \"Lost items happen often,\" but to me it had been a big problem.",
      "After getting home, I decided to buy a strap to hang the key around my neck. I vowed to myself never to lose it again.",
      "On the other hand, I also felt a bit embarrassed at myself for panicking so much over such a small incident. I want to be able to handle things more calmly.",
      "While eating dinner, I reflected on today's events. Even things I think I cherish can be lost in a moment of carelessness. I keenly felt that carelessness is the enemy."
    ],
    vocab: [
      { word: "帰宅", reading: "きたく", meaning: "returning home" },
      { word: "心臓", reading: "しんぞう", meaning: "heart" },
      { word: "備え付け", reading: "そなえつけ", meaning: "built-in; provided" },
      { word: "管理会社", reading: "かんりがいしゃ", meaning: "management company" },
      { word: "直行", reading: "ちょっこう", meaning: "going directly" },
      { word: "預かる", reading: "あずかる", meaning: "to keep; take care of" },
      { word: "安心感", reading: "あんしんかん", meaning: "sense of relief" },
      { word: "落とし物", reading: "おとしもの", meaning: "lost item" },
      { word: "誓う", reading: "ちかう", meaning: "to vow" },
      { word: "振り返る", reading: "ふりかえる", meaning: "to look back" },
      { word: "油断", reading: "ゆだん", meaning: "carelessness" },
      { word: "痛感", reading: "つうかん", meaning: "to keenly feel" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 音楽会のチケット (A concert ticket)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-87",
    title: "音[おん]楽[がく]会[かい]のチケット",
    titleReading: "おんがくかいのちけっと",
    level: "N3",
    summary: "A long-awaited concert, from a fiercely contested ticket to the encore that unites the whole venue in song.",
    estMinutes: 5,
    tags: ["music", "concert", "live"],
    body: [
      "半[はん]年[とし]前[まえ]から楽[たの]しみにしていたコンサートの日[ひ]が、ついにやってきた。チケットは発[はっ]売[ばい]開[かい]始[し]と同[どう]時[じ]に取[と]った。競[きょう]争[そう]が激[はげ]しかったのだ。",
      "会[かい]場[じょう]に着[つ]いた時[とき]、入[い]り口[ぐち]には既[すで]に長[なが]い列[れつ]ができていた。みんなの顔[かお]に期[き]待[たい]が溢[あふ]れていて、その空気[くうき]だけで胸[むね]が高[たか]鳴[な]った。",
      "中[なか]に入[はい]ると、豪[ごう]華[か]な照[しょう]明[めい]と大[おお]きなステージが目[め]に飛[と]び込[こ]んで来[き]た。自[じ]分[ぶん]の席[せき]は前[まえ]から五[ご]列[れつ]目[め]で、よい位[い]置[ち]だった。",
      "開[かい]演[えん]の時[じ]間[かん]になると、会[かい]場[じょう]の照[しょう]明[めい]が一[いっ]瞬[しゅん]にして暗[くら]くなった。観[かん]客[きゃく]たちは息[いき]を呑[の]み、ステージを凝[ぎょう]視[し]した。",
      "音[おん]楽[がく]が始[はじ]まると、あっという間[ま]に時[じ]間[かん]を忘[わす]れてしまった。アーティストの声[こえ]は生[なま]で聴[き]くと全[まった]く違[ちが]う。胸[むね]に直[じか]に響[ひび]いてくる。",
      "一[いっ]曲[きょく]終[お]わるごとに、大[おお]きな拍[はく]手[しゅ]が起[お]きた。私[わたし]も手[て]が痛[いた]くなるほど拍[はく]手[しゅ]した。周[まわ]りには涙[なみだ]を浮[う]かべている人[ひと]もいた。",
      "アンコールでは、会[かい]場[じょう]全[ぜん]体[たい]が一[いっ]つになって歌[うた]った。その瞬[しゅん]間[かん]、私[わたし]は自[じ]分[ぶん]が大[おお]きなものの一部[いちぶ]になったような気[き]がした。",
      "帰[かえ]り道[みち]、耳[みみ]にはまだ音[おん]楽[がく]が残[のこ]っていた。チケットは高[たか]かったが、この感[かん]動[どう]を得[え]られたなら、十[じゅう]分[ぶん]に価[かち]がある。又[また]機[き]会[かい]があれば、必[かなら]ず行[い]きたい。"
    ],
    translation: [
      "The day of the concert I had been looking forward to for half a year had finally come. I had bought the ticket the moment sales began. The competition was fierce.",
      "When I arrived at the venue, a long line had already formed at the entrance. Anticipation overflowed on everyone's face, and that atmosphere alone made my heart race.",
      "Going inside, gorgeous lighting and a large stage jumped into view. My seat was five rows from the front, a good position.",
      "When the start time came, the venue's lighting went dark in an instant. The audience held their breath and stared at the stage.",
      "Once the music started, I forgot the time in a flash. Hearing the artist's voice live is completely different. It resonated directly in my chest.",
      "After each song ended, loud applause broke out. I clapped until my hands hurt. There were also people around me with tears in their eyes.",
      "During the encore, the whole venue became one and sang together. In that moment, I felt I had become part of something larger.",
      "On the way home, the music still lingered in my ears. The ticket was expensive, but being able to feel this emotion made it well worth it. If there's another chance, I'll definitely go."
    ],
    vocab: [
      { word: "音楽会", reading: "おんがくかい", meaning: "concert" },
      { word: "発売", reading: "はつばい", meaning: "sale; release" },
      { word: "競争", reading: "きょうそう", meaning: "competition" },
      { word: "激しい", reading: "はげしい", meaning: "fierce; intense" },
      { word: "豪華", reading: "ごうか", meaning: "gorgeous" },
      { word: "開演", reading: "かいえん", meaning: "start of performance" },
      { word: "凝視", reading: "ぎょうし", meaning: "staring intently" },
      { word: "一曲", reading: "いっきょく", meaning: "one song" },
      { word: "拍手", reading: "はくしゅ", meaning: "applause" },
      { word: "アンコール", reading: "あんこーる", meaning: "encore" },
      { word: "感動", reading: "かんどう", meaning: "deep emotion" },
      { word: "価値", reading: "かち", meaning: "value" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 朝のジョギング (A morning jog)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-88",
    title: "朝[あさ]のジョギング",
    titleReading: "あさのじょぎんぐ",
    level: "N3",
    summary: "A cool early-morning jog that clears the head, brings small greetings from neighbors, and makes breakfast taste better than ever.",
    estMinutes: 4,
    tags: ["jogging", "health", "morning"],
    body: [
      "最[さい]近[きん]、健[けん]康[こう]のため朝[あさ]のジョギングを始[はじ]めた。最[さい]初[しょ]は三日[みっか]でやめてしまうと思[おも]っていたが、意[い]外[がい]にも続[つづ]いている。",
      "今[こん]日[にち]も五[ご]時[じ]半[はん]に目[め]覚[ざ]ましとともに起[お]きた。外[そと]はまだ薄[うす]暗[ぐら]いが、鳥[とり]の声[こえ]だけが聞[き]こえる。空気[くうき]がひんやりとしている。",
      "伸[の]びをして準[じゅん]備[び]体[たい]操[そう]を済[す]ませてから、ゆっくりと走[はし]り始[はじ]めた。最[さい]初[しょ]は息[いき]が切[き]れやすいが、少[すこ]しずつペースがつかめてくる。",
      "公[こう]園[えん]を二[に]周[しゅう]する頃[ころ]には、汗[あせ]がにじみ始[はじ]める。深[しん]呼[こ]吸[きゅう]を繰[く]り返[かえ]しながら走[はし]ると、頭[あたま]がすっきりしてくる。",
      "途[と]中[ちゅう]、犬[いぬ]の散[さん]歩[ぽ]をしている人[ひと]や、同[どう]じように走[はし]っている人[ひと]に会[あ]う。朝[あさ]の挨[あい]拶[さつ]を交[か]わすだけでも、なんだか気[き]分[ぶん]が良[よ]くなる。",
      "三[さん]十[じゅう]分[ぷん]ほど走[はし]った後[あと]、家[いえ]の近[ちか]くの自[じ]動[どう]販[はん]売[ばい]機[き]で冷[つめ]たい水[みず]を買[か]った。一[ひと]口[くち]飲[の]むと、体[からだ]の隅[すみ]まで水[みず]が行[い]くのが分[わ]かる。",
      "シャワーを浴[あ]びた後[あと]の朝[ちょう]食[しょく]は格[かく]別[べつ]に美[おい]しい。運[うん]動[どう]した後[あと]だけあって、何[なに]を食[た]べてもよく味[あじ]がする。",
      "今[こん]日[にち]も一[いち]日[にち]、健[けん]康[こう]に過[す]ごせそうだ。習[しゅう]慣[かん]になると、朝[あさ]走[はし]らない日[ひ]はかえって調[ちょう]子[し]が出[で]ない。これからも続[つづ]けていきたい。"
    ],
    translation: [
      "Recently, for my health, I started jogging in the morning. At first I thought I'd quit after three days, but surprisingly I'm still going.",
      "Today too, I woke up at 5:30 with the alarm. Outside was still dim, but I could hear only birds. The air was cool.",
      "After stretching and warming up, I started running slowly. At first I get out of breath easily, but gradually I find my pace.",
      "By the time I do two laps around the park, sweat begins to seep. Repeating deep breaths while running clears my head.",
      "Along the way, I meet people walking dogs and others running like me. Even just exchanging morning greetings makes me feel better.",
      "After running for about thirty minutes, I bought cold water from a vending machine near my house. Taking one sip, I can feel the water reach every corner of my body.",
      "Breakfast after a shower is exceptionally delicious. Just because I exercised, anything tastes better.",
      "Today too I'll likely spend the day healthily. Once it becomes a habit, days I don't run in the morning feel off instead. I want to keep it up."
    ],
    vocab: [
      { word: "ジョギング", reading: "じょぎんぐ", meaning: "jogging" },
      { word: "意外にも", reading: "いがいにも", meaning: "surprisingly" },
      { word: "目覚まし", reading: "めざまし", meaning: "alarm clock" },
      { word: "準備体操", reading: "じゅんびたいそう", meaning: "warm-up exercises" },
      { word: "息が切れる", reading: "いきがきれる", meaning: "to be out of breath" },
      { word: "深呼吸", reading: "しんこきゅう", meaning: "deep breath" },
      { word: "挨拶", reading: "あいさつ", meaning: "greeting" },
      { word: "自動販売機", reading: "じどうはんばいき", meaning: "vending machine" },
      { word: "隅", reading: "すみ", meaning: "corner" },
      { word: "格別", reading: "かくべつ", meaning: "exceptional" },
      { word: "習慣", reading: "しゅうかん", meaning: "habit" },
      { word: "調子", reading: "ちょうし", meaning: "condition; shape" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 親切な仕草 (A kind gesture)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-89",
    title: "親[しん]切[せつ]な仕[し]草[ぐさ]",
    titleReading: "しんせつなしぐさ",
    level: "N3",
    summary: "A stranger's small kindness after a fall at the station leaves a warmth that lingers, and a quiet resolve to pass it on.",
    estMinutes: 4,
    tags: ["kindness", "stranger", "everyday life"],
    body: [
      "昨[さく]日[じつ]、駅[えき]の階[かい]段[だん]で転[ころ]んでしまった。大[おお]きな荷[に]物[もつ]を持[も]っていて、足[あし]元[もと]がおぼつかなかったのだ。",
      "周[まわ]りの人[ひと]たちは驚[おどろ]いて振[ふり]返[かえ]った。私[わたし]は恥[は]ずかしくて、早[はや]く立[た]ち上[あ]がろうとしたが、思[おも]ったように体[からだ]が動[うご]かなかった。",
      "その時[とき]、近[ちか]くにいた若[わか]い女[じょ]性[せい]が駆[か]け寄[よ]ってきた。「大[だい]丈[じょう]夫[ぶ]ですか」と声[こえ]をかけてくれ、荷[に]物[もつ]を拾[ひろ]い集[あつ]めてくれた。",
      "彼[かの]女[じょ]は私[わたし]を支[ささ]えながら、ベンチまで案[あん]内[ない]してくれた。それから、自[じ]分[ぶん]の持[も]っていた水[みず]の一[いっ]本[ぽん]を差[さ]し出[だ]して、「少[すこ]し休[やす]んでくださいね」と言[い]った。",
      "しばらく休[やす]んでいると、痛[いた]みも少[すこ]しずつ引[ひ]いていった。私[わたし]が「もう大[だい]丈[じょう]夫[ぶ]です」と言[い]うと、彼[かの]女[じょ]はほっとしたように笑[わら]った。",
      "名[な]前[まえ]も聞[き]かぬまま、彼[かの]女[じょ]は「お気[き]をつけて」と言[い]って去[さ]っていった。その後[うし]ろ姿[すがた]を見[み]送[おく]りながら、胸[むね]が温[あたた]かくなった。",
      "見[み]知[し]らぬ人[ひと]に親[しん]切[せつ]にされるというのは、ただ助[たす]かるだけではなく、人[ひと]への信[しん]頼[らい]を取[とり]戻[もど]させてくれる。",
      "私[わたし]も、誰[だれ]かが困[こま]っている時[とき]には、同[おな]じように手[て]を差[さ]し伸[の]べようと思[おも]った。小[ちい]さな親[しん]切[せつ]が、どこかで連[れん]鎖[さ]して広[ひろ]がっていけばいい。"
    ],
    translation: [
      "Yesterday, I fell down the stairs at the station. I was carrying a big bag and my footing was unsteady.",
      "People around me looked back in surprise. I was embarrassed and tried to stand up quickly, but my body didn't move as I wanted.",
      "Just then, a young woman nearby ran over. She asked, \"Are you alright?\" and gathered my belongings for me.",
      "Supporting me, she guided me to a bench. Then she offered one of the bottles of water she had, saying, \"Please rest a little.\"",
      "As I rested, the pain gradually subsided. When I said, \"I'm alright now,\" she smiled with relief.",
      "Without even asking her name, she said, \"Take care,\" and left. Watching her back, my chest grew warm.",
      "Being treated kindly by a stranger isn't just about being helped; it restores your trust in people.",
      "I too, when someone is in trouble, want to reach out in the same way. I hope small kindnesses will spread, chained somewhere."
    ],
    vocab: [
      { word: "親切", reading: "しんせつ", meaning: "kindness" },
      { word: "転ぶ", reading: "ころぶ", meaning: "to fall" },
      { word: "荷物", reading: "にもつ", meaning: "baggage" },
      { word: "足元", reading: "あしもと", meaning: "footing" },
      { word: "おぼつかない", reading: "おぼつかない", meaning: "unsteady; uncertain" },
      { word: "振り返る", reading: "ふりかえる", meaning: "to look back" },
      { word: "駆け寄る", reading: "かけよる", meaning: "to run over" },
      { word: "案内", reading: "あんない", meaning: "guidance" },
      { word: "差し出す", reading: "さしだす", meaning: "to offer; present" },
      { word: "見知らぬ", reading: "みしらぬ", meaning: "unknown; stranger" },
      { word: "取り戻す", reading: "とりもどす", meaning: "to recover" },
      { word: "差し伸べる", reading: "さしのべる", meaning: "to extend (a hand)" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 夕焼け散歩 (A sunset walk)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-90",
    title: "夕[ゆう]焼[や]け散[さん]歩[ぽ]",
    titleReading: "ゆうやけさんぽ",
    level: "N3",
    summary: "A peaceful evening stroll along the river at sunset, watching the sky shift colors and slowly untangle the day's thoughts.",
    estMinutes: 4,
    tags: ["sunset", "walk", "reflection"],
    body: [
      "夕[ゆう]方[がた]、最[さい]後[ご]の仕[し]事[ごと]を終[お]えた私[わたし]は、そのまま川[かわ]沿[ぞい]の道[みち]を歩[ある]くことにした。夕[ゆう]焼[や]けが空[そら]を赤[あか]く染[そ]めている。",
      "風[かぜ]は少[すこ]し冷[つめ]たいが、気[き]持[も]ちがいい。一[いち]日[にち]の疲[つか]れが、一[いっ]歩[ぽ]ずつ抜[ぬ]けていくような感[かん]じがする。",
      "道[みち]には、同[おな]じように散[さん]歩[ぽ]する人[ひと]や、自[じ]転[てん]車[しゃ]に乗[の]った子[こ]どもたちがいる。みんな、ゆっくりとした足[あし]取[どり]で、それぞれの家[いえ]へと向[む]かっている。",
      "川[かわ]面[も]に映[うつ]る空[そら]は、オレンジ色[いろ]から紫[むらさき]色[いろ]へと変[か]わっていく。その色[いろ]の変[へん]化[か]を目[め]で追[お]うだけで、時[じ]間[かん]がもったいないような気[き]がしてくる。",
      "ふと足[あし]を止[と]めて、空[そら]を見上[みあ]げた。時[とき]折[おり]、飛[と]んでいく鳥[とり]の影[かげ]が、赤[あか]い空[そら]を切[き]り取[と]るように横[よこ]切[ぎ]っていく。",
      "何[なに]げない景[けい]色[しき]だが、毎[まい]日[にち]見[み]ていれば、決[けっ]して当[あた]り前[まえ]ではないことが分[わ]かる。今[こん]日[にち]の夕[ゆう]焼[や]けは、昨[きのう]日[び]と少[すこ]し違[ちが]う。",
      "歩[ある]きながら、今[こん]日[にち]一[いち]日[にち]のことを振[ふり]返[かえ]った。良[よ]かったこと、後[こう]悔[かい]したこと、そして明日[あした]やるべきこと。歩[ある]くリズムに合[あ]わせて、考[かんが]えが整理[せいり]されていく。",
      "家[いえ]に着[つ]く頃[ころ]には、空[そら]はすっかり暗[くら]くなっていた。でも、心[こころ]は不[ふ]思[し]議[ぎ]と軽[かる]かった。毎[まい]日[にち]少[すこ]しの散[さん]歩[ぽ]でも、きっと心[こころ]の健[けん]康[こう]にいいのだろう。"
    ],
    translation: [
      "In the evening, having finished my last work, I decided to walk along the riverside path. The sunset glow was dyeing the sky red.",
      "The wind was a bit cold but felt good. I felt like my day's fatigue was seeping out step by step.",
      "On the path were people walking similarly and children on bicycles. Everyone, with slow steps, was heading to their respective homes.",
      "The sky reflected on the river's surface was changing from orange to purple. Just watching the colors change made me feel that time was precious.",
      "I suddenly stopped and looked up at the sky. From time to time, the shadow of a flying bird crossed the red sky as if cutting out a piece.",
      "It's an unremarkable scene, but watching it every day, I realize it's never the same. Today's sunset is a little different from yesterday's.",
      "Walking, I reflected on today's events: good things, regrets, and what I should do tomorrow. In rhythm with my walking, my thoughts became organized.",
      "By the time I got home, the sky was completely dark. But strangely, my heart was light. Even a short walk every day must be good for mental health."
    ],
    vocab: [
      { word: "夕焼け", reading: "ゆうやけ", meaning: "sunset glow" },
      { word: "散歩", reading: "さんぽ", meaning: "walk; stroll" },
      { word: "川沿い", reading: "かわぞい", meaning: "along the river" },
      { word: "染める", reading: "そめる", meaning: "to dye" },
      { word: "足取り", reading: "あしどり", meaning: "gait; pace" },
      { word: "川面", reading: "かわも", meaning: "surface of the river" },
      { word: "紫色", reading: "むらさきいろ", meaning: "purple" },
      { word: "見上げる", reading: "みあげる", meaning: "to look up" },
      { word: "横切る", reading: "よこぎる", meaning: "to cross" },
      { word: "何げない", reading: "なにげない", meaning: "casual; unremarkable" },
      { word: "振り返る", reading: "ふりかえる", meaning: "to look back" },
      { word: "整理", reading: "せいり", meaning: "organization" }
    ]
  }
];
