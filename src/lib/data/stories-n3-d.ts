import type { StoryData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of consecutive kanji attaches as
// furigana to that whole run. Kana and punctuation have no brackets.
// titleReading is full kana with NO brackets. See src/lib/types.ts.

export const storiesN3D: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // N3 — 古い写真 (An old photograph)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-31",
    title: "古[ふる]い写真[しゃしん]",
    titleReading: "ふるいしゃしん",
    level: "N3",
    summary: "A faded photograph found in an old album reveals a younger, smiling mother by the sea.",
    estMinutes: 5,
    tags: ["nostalgia", "family", "photo", "memories"],
    body: [
      "箱[はこ]の奥[おく]から、古[ふる]いアルバムが一[ひと]つ出[で]てきた。",
      "最[さい]後[ご]のページに、色[いろ]あせた写真[しゃしん]が挟[はさ]まれていた。",
      "写真[しゃしん]の中[なか]で、若[わか]い頃[ころ]の母[はは]が海[うみ]の前[まえ]で笑[わら]っていた。",
      "私[わたし]はその写真[しゃしん]を見[み]るまで、母[はは]がこんなに元気[げんき]だったと知[し]らなかった。",
      "母[はは]に聞[き]くと、二十年[にじゅうねん]前[まえ]に初[はじ]めて海[うみ]へ行[い]った時[とき]のものらしい。",
      "当[とう]時[じ]、母[はは]はまだ学[がく]生[せい]で、未[み]来[らい]に夢[ゆめ]を抱[いだ]いていたそうだ。",
      "私[わたし]はその写真[しゃしん]を額縁[がくぶち]に入[い]れて、机[つくえ]の上[うえ]に飾[かざ]ることにした。",
      "今[いま]でもその笑顔[えがお]を見[み]るたびに、私[わたし]も前[まえ]を向[む]こうと思[おも]う。"
    ],
    translation: [
      "From the back of a box, an old album came out.",
      "On the last page, a faded photograph was tucked in.",
      "In the photo, my mother as a young woman was smiling in front of the sea.",
      "Until I saw that photo, I had not known my mother was ever this lively.",
      "When I asked her, she said it was apparently from twenty years ago, when she first went to the sea.",
      "At the time, my mother was still a student and held dreams for the future.",
      "I decided to put the photo in a frame and decorate my desk with it.",
      "Even now, every time I see that smile, I too try to look forward."
    ],
    vocab: [
      { word: "箱", reading: "はこ", meaning: "box" },
      { word: "奥", reading: "おく", meaning: "back, inner part" },
      { word: "アルバム", reading: "あるばむ", meaning: "album" },
      { word: "色あせる", reading: "いろあせる", meaning: "to fade" },
      { word: "挟む", reading: "はさむ", meaning: "to tuck, insert" },
      { word: "若い", reading: "わかい", meaning: "young" },
      { word: "頃", reading: "ころ", meaning: "time, when" },
      { word: "元気", reading: "げんき", meaning: "energetic, healthy" },
      { word: "未来", reading: "みらい", meaning: "future" },
      { word: "夢", reading: "ゆめ", meaning: "dream" },
      { word: "額縁", reading: "がくぶち", meaning: "picture frame" },
      { word: "笑顔", reading: "えがお", meaning: "smile" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 常連の客 (A coffee shop regular)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-32",
    title: "常[じょう]連[れん]の客[きゃく]",
    titleReading: "じょうれんのきゃく",
    level: "N3",
    summary: "A regular customer who visits the coffee shop every morning suddenly stops coming for a week.",
    estMinutes: 4,
    tags: ["routine", "cafe", "people", "daily life"],
    body: [
      "毎[まい]日[にち]朝[あさ]七[しち]時[じ]になると、彼[かれ]は必[かなら]ず店[みせ]に現[あらわ]れる。",
      "同[おな]じ席[せき]に座[すわ]り、同[おな]じブレンドコーヒーを頼[たの]む。",
      "店[みせ]の人[ひと]たちは彼[かれ]を「山[やま]田[だ]さん」と呼[よ]んでいる。",
      "彼[かれ]は本[ほん]を読[よ]みながら、ゆっくりとコーヒーを味[あじ]わう。",
      "ある日[ひ]、山[やま]田[だ]さんは店[みせ]に来[こ]なかった。",
      "翌[よく]日[じつ]も、その翌[よく]日[じつ]も、席[せき]は空[あ]いたままだった。",
      "一[いっ]週[しゅう]間[かん]後[ご]、彼[かれ]はようやく現[あらわ]れた。",
      "「しばらく休[やす]んでいたよ」と彼[かれ]は笑[わら]いながら言[い]った。"
    ],
    translation: [
      "Every day when it reaches seven in the morning, he always appears at the shop.",
      "He sits in the same seat and orders the same blend coffee.",
      "The shop staff call him Yamada-san.",
      "He reads a book while slowly savoring his coffee.",
      "One day, Yamada-san did not come to the shop.",
      "The next day, and the day after that, his seat remained empty.",
      "A week later, he finally appeared.",
      "I was resting for a while, he said with a laugh."
    ],
    vocab: [
      { word: "毎日", reading: "まいにち", meaning: "every day" },
      { word: "現れる", reading: "あらわれる", meaning: "to appear" },
      { word: "必ず", reading: "かならず", meaning: "always, surely" },
      { word: "席", reading: "せき", meaning: "seat" },
      { word: "頼む", reading: "たのむ", meaning: "to order, request" },
      { word: "呼ぶ", reading: "よぶ", meaning: "to call" },
      { word: "味わう", reading: "あじわう", meaning: "to savor" },
      { word: "翌日", reading: "よくじつ", meaning: "the next day" },
      { word: "空く", reading: "あく", meaning: "to become empty" },
      { word: "ようやく", reading: "ようやく", meaning: "finally" },
      { word: "休む", reading: "やすむ", meaning: "to rest" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 子供の質問 (A child's question)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-33",
    title: "子[こ]供[ども]の質[しつ]問[もん]",
    titleReading: "こどものしつもん",
    level: "N3",
    summary: "A son's curious question about why stars shine leads mother and child to a small discovery together.",
    estMinutes: 5,
    tags: ["family", "curiosity", "science", "children"],
    body: [
      "夜[よる]、息子[むすこ]が急[きゅう]に変[へん]な質[しつ]問[もん]をしてきた。",
      "「お母[かあ]さん、星[ほし]はどうして光[ひか]るの？」",
      "私[わたし]は少[すこ]し困[こま]って、本[ほん]で調[しら]べることにした。",
      "すると、星[ほし]は自[じ]分[ぶん]で光[ひか]るのではなく、太[たい]陽[よう]の光[ひかり]を反[はん]射[しゃ]していることが分[わ]かった。",
      "息子[むすこ]は目[め]を丸[まる]くして、「じゃあ、夜[よる]も太[たい]陽[よう]があるの？」と聞[き]いた。",
      "私[わたし]は笑[わら]いながら、地[ち]球[きゅう]の裏[うら]側[がわ]にあると説[せつ]明[めい]した。",
      "息子[むすこ]はなるほどと言[い]いながら、また空[そら]を見上[みあ]げた。",
      "子[こ]供[ども]の質[しつ]問[もん]は、時[とき]に大[おお]人[ひと]にも新[あたら]しい発[はっ]見[けん]をくれる。"
    ],
    translation: [
      "At night, my son suddenly asked me a strange question.",
      "Mom, why do the stars shine?",
      "I was a little stuck and decided to look it up in a book.",
      "Then I learned that stars do not shine by themselves, but reflect the light of the sun.",
      "My son's eyes went round and he asked, Then is there also a sun at night?",
      "Laughing, I explained that it is on the other side of the earth.",
      "Saying I see, my son looked up at the sky again.",
      "A child's question sometimes gives adults a new discovery too."
    ],
    vocab: [
      { word: "息子", reading: "むすこ", meaning: "son" },
      { word: "急に", reading: "きゅうに", meaning: "suddenly" },
      { word: "質問", reading: "しつもん", meaning: "question" },
      { word: "困る", reading: "こまる", meaning: "to be troubled" },
      { word: "調べる", reading: "しらべる", meaning: "to look up, investigate" },
      { word: "太陽", reading: "たいよう", meaning: "sun" },
      { word: "反射", reading: "はんしゃ", meaning: "reflection" },
      { word: "説明", reading: "せつめい", meaning: "explanation" },
      { word: "見上げる", reading: "みあげる", meaning: "to look up" },
      { word: "発見", reading: "はっけん", meaning: "discovery" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 仕事の締め切り (A work deadline)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-34",
    title: "仕[し]事[ごと]の締[し]め切[き]り",
    titleReading: "しごとのしめきり",
    level: "N3",
    summary: "Facing a Monday-morning deadline, a worker pushes through a long Friday night with a colleague's help.",
    estMinutes: 5,
    tags: ["work", "deadline", "effort", "achievement"],
    body: [
      "金[きん]曜[よう]日[び]の夜[よる]、私[わたし]はまだ報[ほう]告[こく]書[しょ]を書[か]いていた。",
      "締[し]め切[き]りは月[げつ]曜[よう]日[び]の朝[あさ]なので、残[ざん]業[ぎょう]するしかなかった。",
      "同[どう]僚[りょう]の田[た]中[なか]さんも残[ざん]業[ぎょう]していて、コーヒーを持[も]ってきてくれた。",
      "「もう少[すこ]しだね」と彼[かれ]は優[やさ]しく声[こえ]をかけてくれた。",
      "私[わたし]はそれに励[はげ]まされ、もう一[いっ]度[ど]パソコンに向[む]かった。",
      "夜[よる]の十[じゅう]一[いち]時[じ]になって、ようやく最[さい]後[ご]のページが完[かん]成[せい]した。",
      "翌[よく]朝[あさ]、報[ほう]告[こく]書[しょ]を部[ぶ]長[ちょう]に提[てい]出[しゅつ]すると、好[こう]評[ひょう]だった。",
      "大[たい]変[へん]だったが、やり切[き]った達[たっ]成[せい]感[かん]があった。"
    ],
    translation: [
      "On Friday night, I was still writing the report.",
      "The deadline was Monday morning, so I had no choice but to work overtime.",
      "My colleague Tanaka-san was also working overtime and brought me coffee.",
      "Just a little more, he said kindly to encourage me.",
      "Encouraged by that, I faced the computer once more.",
      "At eleven at night, I finally completed the last page.",
      "The next morning, when I submitted the report to the department head, it was well received.",
      "It was tough, but I felt a sense of accomplishment that I had finished it."
    ],
    vocab: [
      { word: "報告書", reading: "ほうこくしょ", meaning: "report" },
      { word: "締め切り", reading: "しめきり", meaning: "deadline" },
      { word: "残業", reading: "ざんぎょう", meaning: "overtime work" },
      { word: "同僚", reading: "どうりょう", meaning: "colleague" },
      { word: "優しい", reading: "やさしい", meaning: "kind" },
      { word: "励まされる", reading: "はげまされる", meaning: "to be encouraged" },
      { word: "完成", reading: "かんせい", meaning: "completion" },
      { word: "提出", reading: "ていしゅつ", meaning: "submission" },
      { word: "部長", reading: "ぶちょう", meaning: "department head" },
      { word: "好評", reading: "こうひょう", meaning: "well-received" },
      { word: "達成感", reading: "たっせいかん", meaning: "sense of accomplishment" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 盗んだひととき (A stolen moment)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-35",
    title: "盗[ぬす]んだひととき",
    titleReading: "ぬすんだひととき",
    level: "N3",
    summary: "Amid busy days, a brief ten minutes stolen on a park bench quietly lighten the heart.",
    estMinutes: 4,
    tags: ["solitude", "peace", "nature", "reflection"],
    body: [
      "忙[いそが]しい日[ひ]々[び]の中[なか]で、少[すこ]しだけ時[じ]間[かん]を盗[ぬす]んだ。",
      "公[こう]園[えん]のベンチに座[すわ]り、ただ空[そら]を見上[みあ]げていた。",
      "風[かぜ]が頬[ほほ]を撫[な]で、鳥[とり]の声[こえ]が聞[き]こえてきた。",
      "スマートフォンも消[け]して、誰[だれ]とも話[はな]さなかった。",
      "たった十[じゅう]分[ぷん]だったが、心[こころ]がすっと軽[かる]くなった。",
      "日[ひ]々[び]に追[お]われる生[せい]活[かつ]の中[なか]で、このような時[じ]間[かん]は貴[き]重[ちょう]だ。",
      "私[わたし]はまた明[あ]日[した]も、このひとときを盗[ぬす]もうと決[き]めた。",
      "誰[だれ]も知[し]らない、私[わたし]だけの小[ちい]さな秘[ひ]密[みつ]だった。"
    ],
    translation: [
      "Amid busy days, I stole just a little time.",
      "I sat on a bench in the park and simply looked up at the sky.",
      "The wind stroked my cheeks, and the voices of birds reached me.",
      "I turned off my phone and spoke to no one.",
      "It was only ten minutes, but my heart became lighter at once.",
      "In a life chased by daily tasks, such time is precious.",
      "I decided to steal this moment again tomorrow.",
      "It was a small secret that no one knew, mine alone."
    ],
    vocab: [
      { word: "忙しい", reading: "いそがしい", meaning: "busy" },
      { word: "盗む", reading: "ぬすむ", meaning: "to steal" },
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "頬", reading: "ほほ", meaning: "cheek" },
      { word: "撫でる", reading: "なでる", meaning: "to stroke" },
      { word: "軽い", reading: "かるい", meaning: "light" },
      { word: "追われる", reading: "おわれる", meaning: "to be chased" },
      { word: "生活", reading: "せいかつ", meaning: "daily life" },
      { word: "貴重", reading: "きちょう", meaning: "precious" },
      { word: "秘密", reading: "ひみつ", meaning: "secret" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 勇敢な試み (A brave attempt)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-36",
    title: "勇[ゆう]敢[かん]な試[こころ]み",
    titleReading: "ゆうかんなこころみ",
    level: "N3",
    summary: "A shy employee takes on the company presentation, practices nightly, and finally speaks to applause.",
    estMinutes: 5,
    tags: ["courage", "presentation", "growth", "work"],
    body: [
      "私[わたし]はずっと人[ひと]前[まえ]で話[はな]すのが苦[にが]手[て]だった。",
      "しかし、今[こん]度[ど]の会[かい]社[しゃ]のプレゼンを私[わたし]が担[にな]うことになった。",
      "準[じゅん]備[び]は大[たい]変[へん]だったが、毎[まい]晩[ばん]鏡[かがみ]の前[まえ]で練[れん]習[しゅう]した。",
      "当[とう]日[じつ]、足[あし]が震[ふる]えながらもマイクを握[にぎ]った。",
      "最[さい]初[しょ]は声[こえ]が小[ちい]さかったが、次[し]第[だい]に自[じ]信[しん]が持[も]てた。",
      "話[はな]し終[お]わると、会[かい]場[じょう]から大[おお]きな拍[はく]手[しゅ]が起[お]きた。",
      "上[じょう]司[し]が「よくやった」と笑顔[えがお]で褒[ほ]めてくれた。",
      "失[しっ]敗[ぱい]するかもしれないという恐[おそ]れを越[こ]えて、本[ほん]当[とう]に良[よ]かった。"
    ],
    translation: [
      "I had always been bad at speaking in front of people.",
      "However, I ended up taking charge of the next company presentation.",
      "Preparation was tough, but every night I practiced in front of a mirror.",
      "On the day, my legs trembling, I gripped the microphone.",
      "At first my voice was small, but gradually I gained confidence.",
      "When I finished speaking, loud applause rose from the hall.",
      "My boss praised me with a smile, saying well done.",
      "I was truly glad that I overcame the fear that I might fail."
    ],
    vocab: [
      { word: "勇敢", reading: "ゆうかん", meaning: "brave" },
      { word: "試み", reading: "こころみ", meaning: "attempt" },
      { word: "苦手", reading: "にがて", meaning: "bad at" },
      { word: "会社", reading: "かいしゃ", meaning: "company" },
      { word: "準備", reading: "じゅんび", meaning: "preparation" },
      { word: "練習", reading: "れんしゅう", meaning: "practice" },
      { word: "震える", reading: "ふるえる", meaning: "to tremble" },
      { word: "自信", reading: "じしん", meaning: "confidence" },
      { word: "拍手", reading: "はくしゅ", meaning: "applause" },
      { word: "上司", reading: "じょうし", meaning: "boss" },
      { word: "褒める", reading: "ほめる", meaning: "to praise" },
      { word: "恐れ", reading: "おそれ", meaning: "fear" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 静かな勝利 (A quiet victory)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-37",
    title: "静[しず]かな勝[しょう]利[り]",
    titleReading: "しずかなしょうり",
    level: "N3",
    summary: "After half a year of morning runs, a runner finally completes ten kilometers and savors a private triumph.",
    estMinutes: 4,
    tags: ["running", "self-improvement", "achievement", "habit"],
    body: [
      "私[わたし]は毎[まい]朝[あさ]、公[こう]園[えん]を走[はし]ることにしている。",
      "半[はん]年[とし]前[まえ]は一[いっ]キロも走[はし]れなかった。",
      "しかし、少[すこ]しずつ距[きょ]離[り]を伸[の]ばし、今[いま]では五[ご]キロ走[はし]れる。",
      "今[きょう]日[じつ]、初[はじ]めて十[じゅう]キロを完[かん]走[そう]した。",
      "誰[だれ]も見[み]ていなかったが、心[こころ]の中[なか]でガッツポーズが出[で]た。",
      "大[おお]きな大[たい]会[かい]で優[ゆう]勝[しょう]したわけではない。",
      "それでも、自[じ]分[ぶん]に勝[か]ったという実[じっ]感[かん]があった。",
      "静[しず]かな勝[しょう]利[り]だが、私[わたし]にとっては大[おお]きな一[いっ]歩[ぽ]だった。"
    ],
    translation: [
      "I make it a habit to run in the park every morning.",
      "Half a year ago, I could not even run one kilometer.",
      "But I gradually extended the distance, and now I can run five kilometers.",
      "Today, I completed ten kilometers for the first time.",
      "No one was watching, but inside my heart I made a fist-pump.",
      "It is not that I won a big tournament.",
      "Even so, I had the real feeling that I had beaten myself.",
      "It was a quiet victory, but for me it was a big step."
    ],
    vocab: [
      { word: "公園", reading: "こうえん", meaning: "park" },
      { word: "走る", reading: "はしる", meaning: "to run" },
      { word: "半年", reading: "はんとし", meaning: "half a year" },
      { word: "距離", reading: "きょり", meaning: "distance" },
      { word: "伸ばす", reading: "のばす", meaning: "to extend" },
      { word: "完走", reading: "かんそう", meaning: "completing a run" },
      { word: "大会", reading: "たいかい", meaning: "tournament" },
      { word: "優勝", reading: "ゆうしょう", meaning: "championship" },
      { word: "実感", reading: "じっかん", meaning: "real feeling" },
      { word: "勝利", reading: "しょうり", meaning: "victory" },
      { word: "一歩", reading: "いっぽ", meaning: "one step" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 予期せぬ客 (An unexpected guest)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-38",
    title: "予[よ]期[き]せぬ客[きゃく]",
    titleReading: "よきせぬきゃく",
    level: "N3",
    summary: "On a rainy night, a soaking-wet cat appears at the door and gradually becomes part of the family.",
    estMinutes: 5,
    tags: ["cat", "rainy night", "kindness", "family"],
    body: [
      "雨[あめ]の夜[よる]、ドアをノックする音[おと]が聞[き]こえた。",
      "ドアを開[あ]けると、ずぶ濡[ぬ]れの猫[ねこ]が立[た]っていた。",
      "私[わたし]は驚[おどろ]いたが、タオルで体[からだ]を拭[ぬぐ]うことにした。",
      "猫[ねこ]はお腹[なか]が空[す]いていたらしく、食[た]べ物[もの]をあげると夢[む]中[ちゅう]で食[た]べた。",
      "翌[よく]朝[あさ]、猫[ねこ]はもういなくなっていた。",
      "少[すこ]し寂[さび]しかったが、また来[く]るかもしれないと思[おも]った。",
      "一[いっ]週[しゅう]間[かん]後[ご]、同[おな]じ時[じ]間[かん]にまたドアがノックされた。",
      "あの時[とき]から、猫[ねこ]は私[わたし]の家[いえ]の新[あたら]しい家[か]族[ぞく]になった。"
    ],
    translation: [
      "On a rainy night, I heard the sound of someone knocking on the door.",
      "When I opened the door, a soaking-wet cat was standing there.",
      "I was surprised, but decided to wipe its body with a towel.",
      "The cat seemed hungry, and when I gave it food, it ate eagerly.",
      "The next morning, the cat was already gone.",
      "I felt a little lonely, but thought it might come again.",
      "A week later, the door was knocked at the same time.",
      "Since then, the cat became a new member of my family."
    ],
    vocab: [
      { word: "予期", reading: "よき", meaning: "expectation" },
      { word: "ノック", reading: "のっく", meaning: "knock" },
      { word: "ずぶ濡れ", reading: "ずぶぬれ", meaning: "soaking wet" },
      { word: "驚く", reading: "おどろく", meaning: "to be surprised" },
      { word: "拭う", reading: "ぬぐう", meaning: "to wipe" },
      { word: "お腹", reading: "おなか", meaning: "stomach" },
      { word: "夢中", reading: "むちゅう", meaning: "absorbed" },
      { word: "寂しい", reading: "さびしい", meaning: "lonely" },
      { word: "家族", reading: "かぞく", meaning: "family" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 長い旅 (A long journey)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-39",
    title: "長[なが]い旅[たび]",
    titleReading: "ながいたび",
    level: "N3",
    summary: "After graduation, a young traveler spends a year wandering at home and abroad and returns changed.",
    estMinutes: 6,
    tags: ["travel", "growth", "culture", "adventure"],
    body: [
      "大[だい]学[がく]を卒[そつ]業[ぎょう]してから、一[いっ]年[ねん]間[かん]の旅[たび]に出[で]ることにした。",
      "最[さい]初[しょ]は国[こく]内[ない]を回[まわ]り、その後[ご]海[かい]外[がい]へ渡[わた]った。",
      "途[と]中[ちゅう]、言[こと]葉[ば]が通[つう]じなくて困[こま]ったこともあった。",
      "しかし、現[げん]地[ち]の人[ひと]たちは温[あたた]かく迎[むか]えてくれた。",
      "様[さま]々[ざま]な文[ぶん]化[か]に触[ふ]れ、自[じ]分[ぶん]の世[せ]界[かい]が広[ひろ]がった。",
      "一[いっ]年[ねん]後[ご]、家[いえ]に帰[かえ]ったとき、私[わたし]は少[すこ]し変[か]わっていた。",
      "旅[たび]で得[え]た経[けい]験[けん]は、本[ほん]では学[まな]べないものだった。",
      "今[いま]でも、あの長[なが]い旅[たび]を思[おも]い出[だ]すと胸[むね]が熱[あつ]くなる。"
    ],
    translation: [
      "After graduating from university, I decided to set out on a one-year journey.",
      "At first I traveled within the country, and after that I crossed overseas.",
      "Along the way, there were times I had trouble because the language did not get through.",
      "However, the local people warmly welcomed me.",
      "Touching various cultures, my world expanded.",
      "A year later, when I returned home, I had changed a little.",
      "The experience I gained on the journey was something I could not learn from books.",
      "Even now, when I recall that long journey, my chest grows hot."
    ],
    vocab: [
      { word: "大学", reading: "だいがく", meaning: "university" },
      { word: "卒業", reading: "そつぎょう", meaning: "graduation" },
      { word: "国内", reading: "こくない", meaning: "domestic" },
      { word: "海外", reading: "かいがい", meaning: "overseas" },
      { word: "途中", reading: "とちゅう", meaning: "along the way" },
      { word: "言葉", reading: "ことば", meaning: "language" },
      { word: "現地", reading: "げんち", meaning: "local" },
      { word: "文化", reading: "ぶんか", meaning: "culture" },
      { word: "経験", reading: "けいけん", meaning: "experience" },
      { word: "学ぶ", reading: "まなぶ", meaning: "to learn" },
      { word: "胸", reading: "むね", meaning: "chest" },
      { word: "熱くなる", reading: "あつくなる", meaning: "to grow hot" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // N3 — 優しい知らせ (A gentle reminder)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n3-40",
    title: "優[やさ]しい知[し]らせ",
    titleReading: "やさしいしらせ",
    level: "N3",
    summary: "A short letter from mother gently reminds an overworked child that resting is important too.",
    estMinutes: 5,
    tags: ["family", "rest", "kindness", "letter"],
    body: [
      "朝[あさ]、机[つくえ]の上[うえ]に一[いっ]通[つう]の手[て]紙[がみ]が置[お]かれていた。",
      "母[はは]からで、「今[きょう]日[にち]はゆっくり休[やす]んでね」と書[か]いてあった。",
      "最[さい]近[きん]、私[わたし]は仕[し]事[ごと]が忙[いそが]しくて疲[つか]れていた。",
      "母[はは]はそれを心[しん]配[ぱい]して、わざわざ手[て]紙[がみ]を書[か]いてくれたらしい。",
      "私[わたし]は手[て]紙[がみ]を読[よ]んで、目[め]が少[すこ]し熱[あつ]くなった。",
      "たまには休[やす]むことも大[たい]切[せつ]だと、優[やさ]しく思[おも]い出[だ]させてくれた。",
      "私[わたし]はその日[ひ]、仕[し]事[ごと]を早[はや]めに切[き]り上[あ]げることにした。",
      "母[はは]に電[でん]話[わ]をかけ、「ありがとう」と伝[つた]えた。"
    ],
    translation: [
      "In the morning, a letter had been placed on the desk.",
      "It was from my mother, and it said, Take a good rest today.",
      "Recently I had been busy with work and tired.",
      "Apparently my mother was worried about that and took the trouble to write me a letter.",
      "Reading the letter, my eyes grew a little hot.",
      "It gently reminded me that resting once in a while is also important.",
      "That day, I decided to wrap up work a little early.",
      "I called my mother and told her, Thank you."
    ],
    vocab: [
      { word: "手紙", reading: "てがみ", meaning: "letter" },
      { word: "置く", reading: "おく", meaning: "to place" },
      { word: "最近", reading: "さいきん", meaning: "recently" },
      { word: "忙しい", reading: "いそがしい", meaning: "busy" },
      { word: "疲れる", reading: "つかれる", meaning: "to be tired" },
      { word: "心配", reading: "しんぱい", meaning: "worry" },
      { word: "思い出させる", reading: "おもいださせる", meaning: "to remind" },
      { word: "大切", reading: "たいせつ", meaning: "important" },
      { word: "切り上げる", reading: "きりあげる", meaning: "to wrap up early" },
      { word: "電話", reading: "でんわ", meaning: "phone" },
      { word: "伝える", reading: "つたえる", meaning: "to convey" }
    ]
  }
];
