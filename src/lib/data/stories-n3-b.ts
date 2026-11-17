import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN3B: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 頂上からの景色 (View from the summit)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-11",
    title: "頂上[ちょうじょう]からの景色[けしき]",
    titleReading: "ちょうじょうからのけしき",
    level: "N3",
    summary: "A tiring mountain climb is rewarded by a sunrise and a sea of clouds above the summit.",
    estMinutes: 5,
    tags: ["hiking", "nature", "perseverance", "friendship"],
    body: [
      "先週末[せんしゅうまつ]、友人[ゆうじん]と一緒[いっしょ]に標高[ひょうこう]二千[にせん]メートルの山[やま]に登[のぼ]ることにした。",
      "朝[あさ]五時[ごじ]に山[やま]のふもとを出発[しゅっぱつ]した。空[そら]はまだ暗[くら]く、星[ほし]がきれいに見[み]えていた。",
      "登[のぼ]り始[はじ]めてから一時間[いちじかん]ほどで、足[あし]が痛[いた]くなってきた。それでも、頂上[ちょうじょう]に立[た]つまでは休[やす]むわけにはいかないと思[おも]った。",
      "途中[とちゅう]、息[いき]を切[き]らしながら水[みず]を飲[の]んでいると、年配[ねんぱい]の男性[だんせい]が「あと少[すこ]しですよ」と笑顔[えがお]で声[こえ]をかけてくれた。その一言[ひとこと]で、少[すこ]し元気[げんき]が出[で]た。",
      "日[ひ]が昇[のぼ]るころ、ようやく頂上[ちょうじょう]に到着[とうちゃく]した。雲[くも]の海[うみ]が広[ひろ]がっていて、その美[うつく]しさに言葉[ことば]が出[で]なかった。",
      "友人[ゆうじん]は「苦[くる]しかった分[ぶん]、景色[けしき]が素晴[すば]らしいね」と言[い]った。確[たし]かに、苦労[くろう]したからこそ、この景色[けしき]は忘[わす]れられないのだろう。",
      "山[やま]を下[お]りながら、来月[らいげつ]も別[べつ]の山[やま]に挑戦[ちょうせん]しようかと話[はな]し合[あ]った。"
    ],
    translation: [
      "Last weekend, a friend and I decided to climb a 2,000-meter mountain.",
      "We set out from the foot of the mountain at five in the morning. The sky was still dark, and the stars were beautifully visible.",
      "About an hour after we started climbing, my legs began to hurt. Even so, I felt I could not afford to rest until I stood at the summit.",
      "On the way, as I caught my breath and drank water, an older man called out with a smile, \"Just a little more to go.\" With that one remark, I felt a bit more energized.",
      "Around sunrise, we finally reached the summit. A sea of clouds spread out before us, and its beauty left me speechless.",
      "My friend said, \"The view is wonderful precisely because it was tough.\" Indeed, it must be because we struggled that this scenery is unforgettable.",
      "As we descended the mountain, we discussed whether to challenge a different peak next month."
    ],
    vocab: [
      { word: "頂上", reading: "ちょうじょう", meaning: "summit" },
      { word: "標高", reading: "ひょうこう", meaning: "altitude" },
      { word: "出発", reading: "しゅっぱつ", meaning: "departure" },
      { word: "暗い", reading: "くらい", meaning: "dark" },
      { word: "痛い", reading: "いたい", meaning: "painful" },
      { word: "年配", reading: "ねんぱい", meaning: "elderly" },
      { word: "笑顔", reading: "えがお", meaning: "smile" },
      { word: "到着", reading: "とうちゃく", meaning: "arrival" },
      { word: "素晴らしい", reading: "すばらしい", meaning: "wonderful" },
      { word: "苦労", reading: "くろう", meaning: "hardship" },
      { word: "挑戦", reading: "ちょうせん", meaning: "challenge" },
      { word: "言葉", reading: "ことば", meaning: "words" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 落とした財布 (The lost wallet)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-12",
    title: "落[お]とした財布[さいふ]",
    titleReading: "おとしたさいふ",
    level: "N3",
    summary: "A wallet lost on the train is returned untouched, with a kind note from a stranger.",
    estMinutes: 4,
    tags: ["loss", "kindness", "stranger", "gratitude"],
    body: [
      "先週[せんしゅう]、電車[でんしゃ]の中[なか]で財布[さいふ]を落[お]としてしまったことに気[き]づいた。",
      "駅員[えきいん]に相談[そうだん]したが、見[み]つからなかった。カードも現金[げんきん]も全部[ぜんぶ]入[はい]っていたので、どうしようかと慌[あわ]てた。",
      "翌日[よくじつ]、警察[けいさつ]から電話[でんわ]がかかってきた。誰[だれ]かが財布[さいふ]を届[とど]けてくれたらしい。",
      "受付[うけつけ]で財布[さいふ]を受[う]け取[と]ると、中身[なかみ]は一[ひと]つも減[へ]っていなかった。",
      "届[とど]けてくれた人[ひと]の手紙[てがみ]が入[はい]っていて、「困[こま]っているだろうと思[おも]いました」と書[か]かれていた。",
      "お礼[れい]を言[い]いたくて、手紙[てがみ]の住所[じゅうしょ]へお礼状[れいじょう]を出[だ]した。良[よ]いことをした人[ひと]に、ちゃんと感謝[かんしゃ]の気持[きも]ちが届[とど]くように。",
      "この出来事[できごと]のおかげで、見知[みし]らぬ人[ひと]の優[やさ]しさを信[しん]じられるようになった。"
    ],
    translation: [
      "Last week, I realized I had dropped my wallet on the train.",
      "I asked the station staff for help, but it was not found. Since my cards and cash were all inside, I panicked, wondering what to do.",
      "The next day, the police called. Apparently someone had turned in my wallet.",
      "When I received it at the desk, nothing inside was missing.",
      "A letter from the person who had turned it in was enclosed, saying, \"I thought you must be worried.\"",
      "Wanting to thank them, I sent a thank-you letter to the address on the note, so that my gratitude would properly reach the person who did a good deed.",
      "Thanks to this incident, I have come to be able to trust the kindness of strangers."
    ],
    vocab: [
      { word: "財布", reading: "さいふ", meaning: "wallet" },
      { word: "電車", reading: "でんしゃ", meaning: "train" },
      { word: "相談", reading: "そうだん", meaning: "consultation" },
      { word: "現金", reading: "げんきん", meaning: "cash" },
      { word: "全部", reading: "ぜんぶ", meaning: "all, entirely" },
      { word: "翌日", reading: "よくじつ", meaning: "the next day" },
      { word: "警察", reading: "けいさつ", meaning: "police" },
      { word: "中身", reading: "なかみ", meaning: "contents" },
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "住所", reading: "じゅうしょ", meaning: "address" },
      { word: "感謝", reading: "かんしゃ", meaning: "gratitude" },
      { word: "優しさ", reading: "やさしさ", meaning: "kindness" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 母への誕生日の手紙 (A birthday letter to my mother)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-13",
    title: "母[はは]への誕生日[たんじょうび]の手紙[てがみ]",
    titleReading: "ははへのたんじょうびのてがみ",
    level: "N3",
    summary: "Turning away from a yearly gift, a daughter writes an honest birthday letter to her mother.",
    estMinutes: 5,
    tags: ["family", "letter", "gratitude", "birthday"],
    body: [
      "来週[らいしゅう]、母[はは]の六十歳[ろくじゅっさい]の誕生日[たんじょうび]を迎[むか]える。毎年[まいとし]プレゼントを贈[おく]ってきたが、今年[ことし]は少[すこ]し変[か]えたことにした。",
      "実家[じっか]を離[はな]れてから十年[じゅうねん]になる。忙[いそが]しさにかまけて、母[はは]とゆっくり話[はな]す機会[きかい]が減[へ]っていた。",
      "そこで、自分[じぶん]の気持[きも]ちを素直[すなお]に伝[つた]える手紙[てがみ]を書[か]くことにした。最初[さいしょ]は恥[は]ずかしくて、なかなか筆[ふで]が進[すす]まなかった。",
      "子供[こども]の頃[ころ]、母[はは]は毎朝[まいあさ]早[はや]く起[お]きて弁当[べんとう]を作[つく]ってくれた。その時[とき]は当[あた]り前[まえ]だと思[おも]っていた。",
      "大人[おとな]になってやっと、その裏[うら]にある愛情[あいじょう]に気[き]がついた。今[いま]思[おも]えば、感謝[かんしゃ]してもしきれないほどだ。",
      "手紙[てがみ]の最後[さいご]には、「これからも元気[げんき]でいてください」と書[か]き添[そ]えた。言葉[ことば]は少[すく]なくても、心[こころ]は込[こ]めたつもりだ。",
      "誕生日[たんじょうび]の朝[あさ]、この手紙[てがみ]が母[はは]の心[こころ]に届[とど]くことを願[ねが]っている。"
    ],
    translation: [
      "Next week, my mother turns sixty. I have sent a present every year, but this year I decided to do things a little differently.",
      "It has been ten years since I left my family home. Caught up in busyness, the chances to talk with my mother at length had decreased.",
      "So I decided to write a letter that honestly conveys my feelings. At first I was embarrassed, and the pen would not move forward.",
      "When I was a child, my mother woke up early every morning to make my lunch. Back then, I took it for granted.",
      "Only after becoming an adult did I notice the love behind it. Thinking about it now, I could not thank her enough no matter how much I tried.",
      "At the end of the letter, I added, \"Please stay well from now on, too.\" The words are few, but I did my best to put my heart into them.",
      "On the morning of her birthday, I hope this letter reaches my mother's heart."
    ],
    vocab: [
      { word: "母", reading: "はは", meaning: "mother (one's own)" },
      { word: "誕生日", reading: "たんじょうび", meaning: "birthday" },
      { word: "実家", reading: "じっか", meaning: "family home" },
      { word: "機会", reading: "きかい", meaning: "opportunity" },
      { word: "素直", reading: "すなお", meaning: "honest, obedient" },
      { word: "弁当", reading: "べんとう", meaning: "boxed lunch" },
      { word: "当たり前", reading: "あたりまえ", meaning: "natural, taken for granted" },
      { word: "愛情", reading: "あいじょう", meaning: "love, affection" },
      { word: "感謝", reading: "かんしゃ", meaning: "gratitude" },
      { word: "筆", reading: "ふで", meaning: "writing brush, pen" },
      { word: "心", reading: "こころ", meaning: "heart" },
      { word: "願う", reading: "ねがう", meaning: "to wish, pray" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 破られた約束 (A broken promise)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-14",
    title: "破[やぶ]られた約束[やくそく]",
    titleReading: "やぶられたやくそく",
    level: "N3",
    summary: "A high-school promise to travel together after graduation quietly slips away into silence.",
    estMinutes: 4,
    tags: ["friendship", "promise", "loss", "growing up"],
    body: [
      "高校時代[こうこうじだい]の親友[しんゆう]と「卒業[そつぎょう]したら一緒[いっしょ]に旅行[りょこう]に行[い]こう」と約束[やくそく]した。",
      "しかし、大学[だいがく]に進学[しんがく]してからは、お互[たが]いに忙[いそが]しくなり、連絡[れんらく]も次第[しだい]に減[へ]っていった。",
      "先月[せんげつ]、ようやく時間[じかん]ができたので、約束[やくそく]を果[は]たそうと彼[かれ]に連絡[れんらく]した。",
      "ところが、彼[かれ]は「もう予定[よてい]が入[はい]っている」と冷[つめ]たい返事[へんじ]しか返[かえ]してこなかった。",
      "あの日[ひ]の誓[ちか]いは、ただの言葉[ことば]にすぎなかったのかと考[かんが]えると、胸[むね]が痛[いた]んだ。",
      "それでも、怒[おこ]るよりも、彼[かれ]の立場[たちば]を考[かんが]えるようにした。大人[おとな]になるというのは、そういうことかもしれない。",
      "いつかまた、心[こころ]から笑[わら]い合[あ]える日[ひ]が来[く]ることを信[しん]じている。"
    ],
    translation: [
      "In high school, my best friend and I promised, \"Once we graduate, let's go on a trip together.\"",
      "However, after entering university, we both became busy, and our contact gradually decreased.",
      "Last month, I finally had time, so I contacted him to fulfill our promise.",
      "But he only replied coldly, \"I already have plans.\"",
      "When I thought that the vow of that day might have been nothing more than words, my chest ached.",
      "Even so, rather than getting angry, I tried to consider his position. Growing up may be that kind of thing.",
      "I believe that one day a day will come when we can laugh together from the heart again."
    ],
    vocab: [
      { word: "親友", reading: "しんゆう", meaning: "best friend" },
      { word: "約束", reading: "やくそく", meaning: "promise" },
      { word: "旅行", reading: "りょこう", meaning: "travel" },
      { word: "進学", reading: "しんがく", meaning: "going on to higher education" },
      { word: "連絡", reading: "れんらく", meaning: "contact" },
      { word: "次第に", reading: "しだいに", meaning: "gradually" },
      { word: "予定", reading: "よてい", meaning: "plan, schedule" },
      { word: "冷たい", reading: "つめたい", meaning: "cold" },
      { word: "返事", reading: "へんじ", meaning: "reply" },
      { word: "誓い", reading: "ちかい", meaning: "vow" },
      { word: "立場", reading: "たちば", meaning: "position, standpoint" },
      { word: "笑い合う", reading: "わらいあう", meaning: "to laugh together" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 偶然の再会 (A chance reunion)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-15",
    title: "偶然[ぐうぜん]の再会[さいかい]",
    titleReading: "ぐうぜんのさいかい",
    level: "N3",
    summary: "A tap on the shoulder in the street turns into an unexpected reunion with a middle-school friend.",
    estMinutes: 5,
    tags: ["reunion", "friendship", "chance", "city"],
    body: [
      "昨日[きのう]、街[まち]を歩[ある]いていると、誰[だれ]かに肩[かた]を叩[たた]かれた。",
      "振[ふ]り返[かえ]ると、そこには十年[じゅうねん]ぶりの中学時代[ちゅうがくじだい]の同級生[どうきゅうせい]が立[た]っていた。",
      "彼女[かのじょ]は私[わたし]の名前[なまえ]を呼[よ]ぶなり、抱[だ]きついてきた。周[まわ]りの目[め]を気[き]にする余裕[よゆう]などなかったらしい。",
      "近[ちか]くのカフェでコーヒーを飲[の]みながら、互[たが]いの近況[きんきょう]を報告[ほうこく]し合[あ]った。",
      "彼女[かのじょ]は今[いま]、海外[かいがい]で写真家[しゃしんか]として働[はたら]いているらしい。話[はな]し方[かた]にも、以前[いぜん]より自信[じしん]が漂[ただよ]っていた。",
      "別[わか]れ際[ぎわ]に、「もっと早[はや]く連絡[れんらく]すればよかった」と彼女[かのじょ]は言[い]った。私[わたし]も同感[どうかん]だった。",
      "偶然[ぐうぜん]の出会[であ]いが、忘[わす]れていた友情[ゆうじょう]を再[ふたた]び育[はぐく]んでくれた気[き]がする。"
    ],
    translation: [
      "Yesterday, as I was walking through town, someone tapped me on the shoulder.",
      "When I turned around, a middle-school classmate I had not seen in ten years was standing there.",
      "As soon as she called my name, she hugged me. She seemed to have no room to care about the eyes around us.",
      "At a nearby café, over coffee, we reported our recent news to each other.",
      "She apparently works abroad now as a photographer. Even the way she talked seemed to carry more confidence than before.",
      "At parting, she said, \"I should have contacted you sooner.\" I felt the same way.",
      "I have a feeling that this chance encounter nurtured again the friendship we had forgotten."
    ],
    vocab: [
      { word: "偶然", reading: "ぐうぜん", meaning: "chance, coincidental" },
      { word: "振り返る", reading: "ふりかえる", meaning: "to turn around" },
      { word: "同級生", reading: "どうきゅうせい", meaning: "classmate" },
      { word: "名前", reading: "なまえ", meaning: "name" },
      { word: "近況", reading: "きんきょう", meaning: "recent news" },
      { word: "報告", reading: "ほうこく", meaning: "report" },
      { word: "海外", reading: "かいがい", meaning: "overseas" },
      { word: "写真家", reading: "しゃしんか", meaning: "photographer" },
      { word: "自信", reading: "じしん", meaning: "confidence" },
      { word: "友情", reading: "ゆうじょう", meaning: "friendship" },
      { word: "別れ際", reading: "わかれぎわ", meaning: "moment of parting" },
      { word: "同感", reading: "どうかん", meaning: "agreement, sympathy" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 夏祭りの夜 (The night of the summer festival)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-16",
    title: "夏祭[なつまつ]りの夜[よる]",
    titleReading: "なつまつりのよる",
    level: "N3",
    summary: "A yukata, food stalls, bon dance, and fireworks fill one unforgettable summer night at the shrine.",
    estMinutes: 5,
    tags: ["festival", "summer", "fireworks", "tradition"],
    body: [
      "毎年[まいとし]八月[はちがつ]、地元[じもと]の神社[じんじゃ]で夏祭[なつまつ]りが開[ひら]かれる。今年[ことし]も浴衣[ゆかた]を着[き]て出[で]かけた。",
      "神社[じんじゃ]の参道[さんどう]には屋台[やたい]が並[なら]び、焼[や]きそばやりんご飴[あめ]の香[かお]りが漂[ただよ]っていた。",
      "人混[ひとご]みの中[なか]をかき分[わ]けて進[すす]むと、遠[とお]くから祭[まつ]り囃子[ばやし]が聞[き]こえてきた。",
      "友人[ゆうじん]と合流[ごうりゅう]し、一緒[いっしょ]に盆踊[ぼんおど]りの輪[わ]に加[くわ]わった。上手[じょうず]ではないが、笑[わら]いながら踊[おど]るのは楽[たの]しかった。",
      "屋台[やたい]で買[か]った金魚[きんぎょ]すくいに挑戦[ちょうせん]したが、三匹[さんびき]しかすくえなかった。それでも、十分[じゅうぶん]に満足[まんぞく]だった。",
      "花火[はなび]が打[う]ち上[あ]がると、周[まわ]りの人[ひと]たちが一斉[いっせい]に歓声[かんせい]を上[あ]げた。その瞬間[しゅんかん]、夏[なつ]の暑[あつ]ささえ忘[わす]れた。",
      "帰[かえ]り道[みち]、来年[らいねん]もまた来[き]ようと約束[やくそく]し合[あ]った。夏[なつ]の夜[よる]の思[おも]い出[で]が、また一[ひと]つ増[ふ]えた。"
    ],
    translation: [
      "Every August, a summer festival is held at the local shrine. This year too, I put on a yukata and went out.",
      "Food stalls lined the shrine's approach, and the scent of yakisoba and candied apples drifted through the air.",
      "Pushing through the crowd and moving forward, festival music could be heard from afar.",
      "I joined up with a friend and joined the circle of bon dance. I am not good at it, but dancing while laughing was fun.",
      "I tried goldfish scooping bought at a stall, but I could only scoop up three. Even so, I was satisfied enough.",
      "When fireworks went up, the people around raised a cheer all at once. In that moment, I even forgot the summer heat.",
      "On the way home, we promised each other to come again next year. Another memory of a summer night was added."
    ],
    vocab: [
      { word: "夏祭り", reading: "なつまつり", meaning: "summer festival" },
      { word: "神社", reading: "じんじゃ", meaning: "shrine" },
      { word: "浴衣", reading: "ゆかた", meaning: "yukata (summer kimono)" },
      { word: "参道", reading: "さんどう", meaning: "shrine approach" },
      { word: "屋台", reading: "やたい", meaning: "food stall" },
      { word: "人混み", reading: "ひとごみ", meaning: "crowd" },
      { word: "盆踊り", reading: "ぼんおどり", meaning: "bon dance" },
      { word: "金魚", reading: "きんぎょ", meaning: "goldfish" },
      { word: "花火", reading: "はなび", meaning: "fireworks" },
      { word: "歓声", reading: "かんせい", meaning: "cheer" },
      { word: "瞬間", reading: "しゅんかん", meaning: "moment" },
      { word: "満足", reading: "まんぞく", meaning: "satisfaction" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 病床の猫 (A cat on the sickbed)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-17",
    title: "病床[びょうしょう]の猫[ねこ]",
    titleReading: "びょうしょうのねこ",
    level: "N3",
    summary: "An aging cat loses her appetite, and daily care slowly brings her energy back to the window.",
    estMinutes: 5,
    tags: ["pet", "illness", "care", "family"],
    body: [
      "我[わ]が家[や]の猫[ねこ]の「ミミ」は、この春[はる]から食欲[しょくよく]がなくなり、元気[げんき]が消[き]えていった。",
      "最初[さいしょ]は季節[きせつ]の変[か]わり目[め]のせいだと思[おも]っていた。だが、数日[すうじつ]経[た]っても回復[かいふく]する気配[けはい]がない。",
      "獣医[じゅうい]さんに診[み]てもらうと、「年[とし]を取[と]っているので、慎重[しんちょう]に経過[けいか]を見守[みまも]る必要[ひつよう]がある」と言[い]われた。",
      "毎日[まいにち]ミルクを温[あたた]めて飲[の]ませ、夜[よる]はこたつの中[なか]で一緒[いっしょ]に眠[ねむ]ることにした。",
      "一週間[いっしゅうかん]が過[す]ぎた頃[ころ]、ミミが少[すこ]しずつ動[うご]き始[はじ]めた。その小[ちい]さな変化[へんか]に、胸[むね]が熱[あつ]くなった。",
      "病気[びょうき]になって初[はじ]めて、当[あた]り前[まえ]の日常[にちじょう]がどれほど貴重[きちょう]かを実感[じっかん]した。",
      "今[いま]はすっかり元気[げんき]になり、窓辺[まどべ]で日向[ひなた]ぼっこをしている。この穏[おだ]やかな毎日[まいにち]がずっと続[つづ]くことを願[ねが]っている。"
    ],
    translation: [
      "Our cat Mimi lost her appetite starting this spring, and her energy faded away.",
      "At first I thought it was due to the changing of seasons. But even after several days passed, there was no sign of recovery.",
      "When the vet examined her, I was told, \"She is getting old, so we need to carefully watch how things progress.\"",
      "Every day I warmed milk and had her drink it, and at night I decided to sleep together with her in the kotatsu.",
      "Around the time a week had passed, Mimi began to move little by little. At that small change, my chest grew hot.",
      "Only after she got sick did I truly realize how precious the ordinary days were.",
      "Now she is fully recovered and is sunbathing by the window. I hope these peaceful days continue forever."
    ],
    vocab: [
      { word: "食欲", reading: "しょくよく", meaning: "appetite" },
      { word: "季節", reading: "きせつ", meaning: "season" },
      { word: "数日", reading: "すうじつ", meaning: "several days" },
      { word: "回復", reading: "かいふく", meaning: "recovery" },
      { word: "獣医", reading: "じゅうい", meaning: "veterinarian" },
      { word: "慎重", reading: "しんちょう", meaning: "careful, cautious" },
      { word: "見守る", reading: "みまもる", meaning: "to watch over" },
      { word: "日常", reading: "にちじょう", meaning: "everyday life" },
      { word: "貴重", reading: "きちょう", meaning: "precious" },
      { word: "実感", reading: "じっかん", meaning: "realization, true feeling" },
      { word: "穏やか", reading: "おだやか", meaning: "calm, peaceful" },
      { word: "日向ぼっこ", reading: "ひなたぼっこ", meaning: "sunbathing" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 進路の岐路 (A fork in the career path)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-18",
    title: "進路[しんろ]の岐路[きろ]",
    titleReading: "しんろのきろ",
    level: "N3",
    summary: "At thirty, a stable job no longer feels rewarding, so a designer chooses fulfillment over safety.",
    estMinutes: 6,
    tags: ["career", "decision", "change", "courage"],
    body: [
      "三十歳[さんじゅっさい]を迎[むか]える春[はる]、私[わたし]は転職[てんしょく]するか迷[まよ]っていた。",
      "現在[げんざい]の会社[かいしゃ]は安定[あんてい]しているが、やりがいを感[かん]じられなくなっていた。",
      "一方[いっぽう]、新[あたら]しい会社[かいしゃ]は給料[きゅうりょう]が低[ひく]いものの、夢[ゆめ]だったデザインの仕事[しごと]ができる。",
      "何度[なんど]も悩[なや]んだ末[すえ]、ついに決心[けっしん]した。「安定[あんてい]よりも、心[こころ]の充実[じゅうじつ]を選[えら]ぼう。」",
      "上司[じょうし]に退職[たいしょく]の意[い]を伝[つた]えると、「もったいない」と惜[お]しまれた。それでも、私[わたし]の決意[けつい]は揺[ゆ]るがなかった。",
      "最後[さいご]の出勤日[しゅっきんび]、同僚[どうりょう]たちが集[あつ]まって送別会[そうべつかい]を開[ひら]いてくれた。",
      "新[あたら]しい道[みち]には不安[ふあん]もあるが、自分[じぶん]の選[えら]んだ道[みち]を信[しん]じて歩[ある]き続[つづ]けるつもりだ。"
    ],
    translation: [
      "In the spring when I turned thirty, I was hesitating over whether to change jobs.",
      "My current company is stable, but I had stopped feeling the work was rewarding.",
      "On the other hand, the new company's salary is low, but I could do the design work I had dreamed of.",
      "After worrying many times, I finally made up my mind. \"Rather than stability, let me choose fulfillment of the heart.\"",
      "When I told my boss of my intention to resign, he regretted it, saying it was a waste. Even so, my resolve did not waver.",
      "On my last work day, my colleagues gathered and held a farewell party for me.",
      "There is anxiety on the new path too, but I intend to keep walking, trusting the path I chose."
    ],
    vocab: [
      { word: "進路", reading: "しんろ", meaning: "course, career path" },
      { word: "転職", reading: "てんしょく", meaning: "job change" },
      { word: "安定", reading: "あんてい", meaning: "stability" },
      { word: "給料", reading: "きゅうりょう", meaning: "salary" },
      { word: "充実", reading: "じゅうじつ", meaning: "fulfillment" },
      { word: "上司", reading: "じょうし", meaning: "boss" },
      { word: "退職", reading: "たいしょく", meaning: "resignation" },
      { word: "決意", reading: "けつい", meaning: "resolve" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "送別会", reading: "そうべつかい", meaning: "farewell party" },
      { word: "不安", reading: "ふあん", meaning: "anxiety" },
      { word: "揺るがない", reading: "ゆるがない", meaning: "unwavering" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 懐かしい歌 (A nostalgic song)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-19",
    title: "懐[なつ]かしい歌[うた]",
    titleReading: "なつかしいうた",
    level: "N3",
    summary: "An old song on the radio brings back a mother's hummed melody and the courage to stand up again.",
    estMinutes: 5,
    tags: ["music", "memory", "family", "courage"],
    body: [
      "ラジオから流[なが]れてきた古[ふる]い歌[うた]に、私[わたし]は足[あし]を止[と]めた。",
      "そのメロディは、子供[こども]の頃[ころ]に母[はは]がよく口[くち]ずさんでいたものだった。久[ひさ]しぶりに聞[き]くと、なぜか涙[なみだ]が出[で]そうになった。",
      "歌詞[かし]は特[とく]に難[むずか]しいものではなかった。「花[はな]は散[ち]っても、また咲[さ]く」という単純[たんじゅん]な一文[いちぶん]が、今[いま]の私[わたし]には深[ふか]く響[ひび]いた。",
      "最近[さいきん]失敗[しっぱい]ばかりして、自分[じぶん]に自信[じしん]をなくしかけていた。だが、この歌[うた]は「立[た]ち上[あ]がれる」と教[おし]えてくれた。",
      "帰宅[きたく]してから、母[はは]に電話[でんわ]をかけた。「あの歌[うた]、覚[おぼ]えてる？」と聞[き]くと、母[はは]は笑[わら]いながら歌[うた]い始[はじ]めた。",
      "受話器越[じゅわきご]しの声[こえ]は少[すこ]し弱[よわ]っていたが、温[あたた]かさは昔[むかし]のままだった。",
      "一[ひと]つの歌[うた]が、忘[わす]れていた勇気[ゆうき]を呼[よ]び戻[もど]してくれた。明日[あした]からまた、前[まえ]を向[む]いて歩[ある]こうと思[おも]う。"
    ],
    translation: [
      "I stopped walking at an old song drifting from the radio.",
      "The melody was one my mother used to hum when I was a child. Hearing it for the first time in a while, for some reason tears almost came to my eyes.",
      "The lyrics were not especially difficult. A single simple line, \"Even if flowers scatter, they bloom again,\" resonated deeply with me now.",
      "Lately I had been failing at things and was about to lose confidence in myself. But this song taught me, \"You can stand back up.\"",
      "After getting home, I called my mother. When I asked, \"Do you remember that song?\", she started singing with a laugh.",
      "Her voice through the receiver had weakened a little, but the warmth was the same as long ago.",
      "A single song brought back the courage I had forgotten. From tomorrow I will walk forward again, I think."
    ],
    vocab: [
      { word: "懐かしい", reading: "なつかしい", meaning: "nostalgic" },
      { word: "流れる", reading: "ながれる", meaning: "to flow, to drift" },
      { word: "口ずさむ", reading: "くちずさむ", meaning: "to hum" },
      { word: "歌詞", reading: "かし", meaning: "lyrics" },
      { word: "散る", reading: "ちる", meaning: "to scatter (flowers)" },
      { word: "咲く", reading: "さく", meaning: "to bloom" },
      { word: "響く", reading: "ひびく", meaning: "to resonate" },
      { word: "失敗", reading: "しっぱい", meaning: "failure" },
      { word: "勇気", reading: "ゆうき", meaning: "courage" },
      { word: "帰宅", reading: "きたく", meaning: "returning home" },
      { word: "受話器越し", reading: "じゅわきごし", meaning: "through the receiver" },
      { word: "呼び戻す", reading: "よびもどす", meaning: "to call back, restore" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 庭に咲く花 (Flowers blooming in the garden)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-20",
    title: "庭[にわ]に咲[さ]く花[はな]",
    titleReading: "にわにさくはな",
    level: "N3",
    summary: "A weed-filled garden becomes a bloom of color through daily watering, weeding, and patience.",
    estMinutes: 5,
    tags: ["garden", "patience", "nature", "effort"],
    body: [
      "引[ひ]っ越[こ]してきた時[とき]、庭[にわ]は雑草[ざっそう]だらけで、何[なに]も咲[さ]いていなかった。",
      "退屈[たいくつ]しのぎに、土[つち]を耕[たがや]し、花[はな]の種[たね]をまくことにした。最初[さいしょ]はうまく育[そだ]つかどうか分[わ]からなかった。",
      "毎朝[まいあさ]水[みず]をやり、雑草[ざっそう]を抜[ぬ]き続[つづ]けるうちに、少[すこ]しずつ芽[め]が出[で]始[はじ]めた。",
      "ある朝[あさ]、薔薇[ばら]のつぼみがほころび始[はじ]めた。その小[ちい]さな変化[へんか]を見[み]た時[とき]、育[そだ]ててよかったと実感[じっかん]した。",
      "夏[なつ]になると、色[いろ]とりどりの花[はな]が一斉[いっせい]に咲[さ]き誇[ほこ]り、近所[きんじょ]の人[ひと]から褒[ほ]められるようになった。",
      "植木[うえき]に水[みず]をやりながら思[おも]う。花[はな]は、手[て]をかければかけるほど、それに応[こた]えて美[うつく]しくなる。",
      "来年[らいねん]はさらに種類[しゅるい]を増[ふ]やし、季節[きせつ]ごとに違[ちが]う景色[けしき]を楽[たの]しめる庭[にわ]にしたい。"
    ],
    translation: [
      "When I moved in, the garden was full of weeds, and nothing was blooming.",
      "As a way to pass the time, I decided to till the soil and sow flower seeds. At first I did not know whether they would grow well.",
      "In the process of watering every morning and continuing to pull weeds, sprouts began to appear little by little.",
      "One morning, a rose bud began to open. When I saw that small change, I truly felt glad I had raised them.",
      "When summer came, flowers of various colors bloomed all at once in pride, and I began to be praised by neighbors.",
      "While watering the plants, I think. The more care you give flowers, the more they respond by becoming beautiful.",
      "Next year I want to increase the varieties further and make a garden where I can enjoy different scenery each season."
    ],
    vocab: [
      { word: "庭", reading: "にわ", meaning: "garden" },
      { word: "雑草", reading: "ざっそう", meaning: "weed" },
      { word: "退屈", reading: "たいくつ", meaning: "boredom" },
      { word: "耕す", reading: "たがやす", meaning: "to till" },
      { word: "種", reading: "たね", meaning: "seed" },
      { word: "芽", reading: "め", meaning: "sprout, bud" },
      { word: "薔薇", reading: "ばら", meaning: "rose" },
      { word: "変化", reading: "へんか", meaning: "change" },
      { word: "近所", reading: "きんじょ", meaning: "neighborhood" },
      { word: "褒める", reading: "ほめる", meaning: "to praise" },
      { word: "種類", reading: "しゅるい", meaning: "kind, variety" },
      { word: "応える", reading: "こたえる", meaning: "to respond, to answer" }
    ]
  }
];
