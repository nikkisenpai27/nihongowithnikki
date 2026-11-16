import type { VocabData } from "@/lib/types";

// JLPT N5 vocabulary — Minna no Nihongo Shokyuu 1, Lessons 18-25.
// Furigana notation: kanji readings inline as 漢字[かんじ].
// Total: 269 words (33 + 34 + 34 + 34 + 33 + 34 + 33 + 34).
// IDs: vmn5-L<lesson>-<nn>.

export const vocabN5C: VocabData[] = [
  // ============================================================
  // Lesson 18 — State (ています, てある, まだ, もう) — 33 words
  // ============================================================
  {
    id: "vmn5-L18-01",
    word: "知る",
    reading: "しる",
    romaji: "shiru",
    meaning: "to know (to get to know)",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "私[わたし]はその人[ひと]を知[し]っています。",
      en: "I know that person."
    }
  },
  {
    id: "vmn5-L18-02",
    word: "住む",
    reading: "すむ",
    romaji: "sumu",
    meaning: "to live, to reside",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "大[おお]阪[さか]に住[す]んでいます。",
      en: "I live in Osaka."
    }
  },
  {
    id: "vmn5-L18-03",
    word: "働く",
    reading: "はたらく",
    romaji: "hataraku",
    meaning: "to work",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "父[ちち]は銀[ぎん]行[こう]で働[はたら]いています。",
      en: "My father works at a bank."
    }
  },
  {
    id: "vmn5-L18-04",
    word: "結婚する",
    reading: "けっこんする",
    romaji: "kekkonsuru",
    meaning: "to marry",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "姉[あね]は結[けっ]婚[こん]しています。",
      en: "My older sister is married."
    }
  },
  {
    id: "vmn5-L18-05",
    word: "持つ",
    reading: "もつ",
    romaji: "motsu",
    meaning: "to hold, to possess",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "私[わたし]は車[くるま]を持[も]っています。",
      en: "I have a car."
    }
  },
  {
    id: "vmn5-L18-06",
    word: "開ける",
    reading: "あける",
    romaji: "akeru",
    meaning: "to open (transitive)",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "窓[まど]が開[あ]けてあります。",
      en: "The window has been left open."
    }
  },
  {
    id: "vmn5-L18-07",
    word: "閉める",
    reading: "しめる",
    romaji: "shimeru",
    meaning: "to close (transitive)",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "ドアが閉[し]めてあります。",
      en: "The door has been closed."
    }
  },
  {
    id: "vmn5-L18-08",
    word: "つける",
    reading: "つける",
    romaji: "tsukeru",
    meaning: "to turn on, to attach",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "テレビがつけてあります。",
      en: "The TV has been left on."
    }
  },
  {
    id: "vmn5-L18-09",
    word: "消す",
    reading: "けす",
    romaji: "kesu",
    meaning: "to turn off, to erase",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "電[でん]気[き]が消[け]してあります。",
      en: "The light has been turned off."
    }
  },
  {
    id: "vmn5-L18-10",
    word: "座る",
    reading: "すわる",
    romaji: "suwaru",
    meaning: "to sit",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "男[おとこ]の人が椅[いす]子[こ]に座[すわ]っています。",
      en: "A man is sitting on a chair."
    }
  },
  {
    id: "vmn5-L18-11",
    word: "立つ",
    reading: "たつ",
    romaji: "tatsu",
    meaning: "to stand",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "女[おんな]の人が立[た]っています。",
      en: "A woman is standing."
    }
  },
  {
    id: "vmn5-L18-12",
    word: "もう",
    reading: "もう",
    romaji: "mou",
    meaning: "already",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "もう昼[ひる]ごはんを食[た]べました。",
      en: "I have already eaten lunch."
    }
  },
  {
    id: "vmn5-L18-13",
    word: "まだ",
    reading: "まだ",
    romaji: "mada",
    meaning: "still, not yet",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "まだ宿[しゅく]題[だい]をしていません。",
      en: "I have not done my homework yet."
    }
  },
  {
    id: "vmn5-L18-14",
    word: "ずっと",
    reading: "ずっと",
    romaji: "zutto",
    meaning: "all along, for a long time",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "十[じゅう]年[ねん]ずっとここに住[す]んでいます。",
      en: "I have lived here for ten years."
    }
  },
  {
    id: "vmn5-L18-15",
    word: "そろそろ",
    reading: "そろそろ",
    romaji: "sorosoro",
    meaning: "soon, it is about time",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "そろそろ帰[かえ]りましょう。",
      en: "It is about time to go home."
    }
  },
  {
    id: "vmn5-L18-16",
    word: "だんだん",
    reading: "だんだん",
    romaji: "dandan",
    meaning: "gradually",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "だんだん寒[さむ]くなりました。",
      en: "It has gradually become cold."
    }
  },
  {
    id: "vmn5-L18-17",
    word: "とうとう",
    reading: "とうとう",
    romaji: "toutou",
    meaning: "finally, at last",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "とうとう冬[ふゆ]が来[き]ました。",
      en: "Winter has finally come."
    }
  },
  {
    id: "vmn5-L18-18",
    word: "つい",
    reading: "つい",
    romaji: "tsui",
    meaning: "just now, recently",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "ついこの間[あいだ]会[あ]いました。",
      en: "I met him just the other day."
    }
  },
  {
    id: "vmn5-L18-19",
    word: "最近",
    reading: "さいきん",
    romaji: "saikin",
    meaning: "recently",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "最[さい]近[きん]忙[いそが]しいです。",
      en: "I have been busy recently."
    }
  },
  {
    id: "vmn5-L18-20",
    word: "もうすぐ",
    reading: "もうすぐ",
    romaji: "mousugu",
    meaning: "very soon",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "もうすぐお盆[ぼん]休[やす]みです。",
      en: "The Bon holiday is very soon."
    }
  },
  {
    id: "vmn5-L18-21",
    word: "いつか",
    reading: "いつか",
    romaji: "itsuka",
    meaning: "someday",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "いつか日[に]本[ほん]に行[い]きたいです。",
      en: "I want to go to Japan someday."
    }
  },
  {
    id: "vmn5-L18-22",
    word: "初めて",
    reading: "はじめて",
    romaji: "hajimete",
    meaning: "for the first time",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "adverb",
    example: {
      jp: "初[はじ]めておすしを食[た]べました。",
      en: "I ate sushi for the first time."
    }
  },
  {
    id: "vmn5-L18-23",
    word: "もう一度",
    reading: "もういちど",
    romaji: "mouichido",
    meaning: "once more",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "expression",
    example: {
      jp: "もう一[いち]度[ど]言[い]ってください。",
      en: "Please say it once more."
    }
  },
  {
    id: "vmn5-L18-24",
    word: "どのくらい",
    reading: "どのくらい",
    romaji: "donokurai",
    meaning: "how long, how much",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "expression",
    example: {
      jp: "日[に]本[ほん]にどのくらい住[す]んでいますか。",
      en: "How long have you lived in Japan?"
    }
  },
  {
    id: "vmn5-L18-25",
    word: "週間",
    reading: "しゅうかん",
    romaji: "shuukan",
    meaning: "~ weeks (counter)",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "counter",
    example: {
      jp: "二[に]週[しゅう]間[かん]休[やす]みます。",
      en: "I will take two weeks off."
    }
  },
  {
    id: "vmn5-L18-26",
    word: "か月",
    reading: "かげつ",
    romaji: "kagetsu",
    meaning: "~ months (counter)",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "counter",
    example: {
      jp: "三[さん]か月[げつ]練[れん]習[しゅう]しています。",
      en: "I have been practicing for three months."
    }
  },
  {
    id: "vmn5-L18-27",
    word: "年",
    reading: "ねん",
    romaji: "nen",
    meaning: "~ years (counter)",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "counter",
    example: {
      jp: "五[ご]年[ねん]働[はたら]いています。",
      en: "I have been working for five years."
    }
  },
  {
    id: "vmn5-L18-28",
    word: "会社員",
    reading: "かいしゃいん",
    romaji: "kaishain",
    meaning: "company employee",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "父[ちち]は会[かい]社[しゃ]員[いん]です。",
      en: "My father is a company employee."
    }
  },
  {
    id: "vmn5-L18-29",
    word: "警察",
    reading: "けいさつ",
    romaji: "keisatsu",
    meaning: "police",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "警[けい]察[さつ]に聞[き]きました。",
      en: "I asked the police."
    }
  },
  {
    id: "vmn5-L18-30",
    word: "病院",
    reading: "びょういん",
    romaji: "byouin",
    meaning: "hospital",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "母[はは]は病[びょう]院[いん]で働[はたら]いています。",
      en: "My mother works at a hospital."
    }
  },
  {
    id: "vmn5-L18-31",
    word: "工場",
    reading: "こうじょう",
    romaji: "koujou",
    meaning: "factory",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "兄[あに]は工[こう]場[じょう]で働[はたら]いています。",
      en: "My older brother works at a factory."
    }
  },
  {
    id: "vmn5-L18-32",
    word: "銀行",
    reading: "ぎんこう",
    romaji: "ginkou",
    meaning: "bank",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "銀[ぎん]行[こう]は九[く]時[じ]に開[あ]きます。",
      en: "The bank opens at nine."
    }
  },
  {
    id: "vmn5-L18-33",
    word: "結婚式",
    reading: "けっこんしき",
    romaji: "kekkonshiki",
    meaning: "wedding ceremony",
    level: "N5",
    theme: "State",
    lesson: 18,
    partOfSpeech: "noun",
    example: {
      jp: "来[らい]月[げつ]結[けっ]婚[こん]式[しき]に出[しゅっ]席[せき]します。",
      en: "I will attend a wedding ceremony next month."
    }
  },

  // ============================================================
  // Lesson 19 — Experience (たことがある, こと) — 34 words
  // ============================================================
  {
    id: "vmn5-L19-01",
    word: "思う",
    reading: "おもう",
    romaji: "omou",
    meaning: "to think",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "私[わたし]はそう思[おも]います。",
      en: "I think so."
    }
  },
  {
    id: "vmn5-L19-02",
    word: "言う",
    reading: "いう",
    romaji: "iu",
    meaning: "to say",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "先[せん]生[せい]がそう言[い]いました。",
      en: "The teacher said so."
    }
  },
  {
    id: "vmn5-L19-03",
    word: "教える",
    reading: "おしえる",
    romaji: "oshieru",
    meaning: "to teach, to tell",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "私[わたし]は日[に]本[ほん]語[ご]を教[おし]えたことがあります。",
      en: "I have taught Japanese before."
    }
  },
  {
    id: "vmn5-L19-04",
    word: "習う",
    reading: "ならう",
    romaji: "narau",
    meaning: "to learn (from someone)",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "ピアノを習[なら]ったことがあります。",
      en: "I have taken piano lessons."
    }
  },
  {
    id: "vmn5-L19-05",
    word: "練習する",
    reading: "れんしゅうする",
    romaji: "renshuusuru",
    meaning: "to practice",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "毎[まい]日[にち]サッカーを練[れん]習[しゅう]しています。",
      en: "I practice soccer every day."
    }
  },
  {
    id: "vmn5-L19-06",
    word: "集める",
    reading: "あつめる",
    romaji: "atsumeru",
    meaning: "to collect",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "切[きっ]手[て]を集[あつ]めたことがあります。",
      en: "I have collected stamps before."
    }
  },
  {
    id: "vmn5-L19-07",
    word: "暗記する",
    reading: "あんきする",
    romaji: "ankisuru",
    meaning: "to memorize",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "漢[かん]字[じ]を暗[あん]記[き]しました。",
      en: "I memorized kanji."
    }
  },
  {
    id: "vmn5-L19-08",
    word: "計算する",
    reading: "けいさんする",
    romaji: "keisansuru",
    meaning: "to calculate",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "計[けい]算[さん]したことがあります。",
      en: "I have done calculations before."
    }
  },
  {
    id: "vmn5-L19-09",
    word: "送る",
    reading: "おくる",
    romaji: "okuru",
    meaning: "to send",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "友[とも]達[だち]に手[て]紙[がみ]を送[おく]ったことがあります。",
      en: "I have sent a letter to a friend."
    }
  },
  {
    id: "vmn5-L19-10",
    word: "もらう",
    reading: "もらう",
    romaji: "morau",
    meaning: "to receive",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "プレゼントをもらったことがあります。",
      en: "I have received a present."
    }
  },
  {
    id: "vmn5-L19-11",
    word: "思い出す",
    reading: "おもいだす",
    romaji: "omoidasu",
    meaning: "to recall",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "昔[むかし]のことを思[おも]い出[だ]しました。",
      en: "I recalled old times."
    }
  },
  {
    id: "vmn5-L19-12",
    word: "忘れる",
    reading: "わすれる",
    romaji: "wasureru",
    meaning: "to forget",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "名[な]前[まえ]を忘[わす]れたことがあります。",
      en: "I have forgotten a name."
    }
  },
  {
    id: "vmn5-L19-13",
    word: "覚える",
    reading: "おぼえる",
    romaji: "oboeru",
    meaning: "to memorize, to remember",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "歌[うた]を覚[おぼ]えたことがあります。",
      en: "I have memorized a song."
    }
  },
  {
    id: "vmn5-L19-14",
    word: "経験",
    reading: "けいけん",
    romaji: "keiken",
    meaning: "experience",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "いろいろな経[けい]験[けん]をしました。",
      en: "I had various experiences."
    }
  },
  {
    id: "vmn5-L19-15",
    word: "旅行",
    reading: "りょこう",
    romaji: "ryokou",
    meaning: "travel, trip",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "海[かい]外[がい]旅[りょ]行[こう]をしたことがあります。",
      en: "I have traveled abroad."
    }
  },
  {
    id: "vmn5-L19-16",
    word: "海",
    reading: "うみ",
    romaji: "umi",
    meaning: "sea",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "海[うみ]で泳[およ]いだことがあります。",
      en: "I have swum in the sea."
    }
  },
  {
    id: "vmn5-L19-17",
    word: "山",
    reading: "やま",
    romaji: "yama",
    meaning: "mountain",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "山[やま]に登[のぼ]ったことがあります。",
      en: "I have climbed a mountain."
    }
  },
  {
    id: "vmn5-L19-18",
    word: "川",
    reading: "かわ",
    romaji: "kawa",
    meaning: "river",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "川[かわ]で釣[つ]りをしたことがあります。",
      en: "I have fished in a river."
    }
  },
  {
    id: "vmn5-L19-19",
    word: "富士山",
    reading: "ふじさん",
    romaji: "fujisan",
    meaning: "Mt. Fuji",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "富[ふ]士[じ]山[さん]に登[のぼ]ったことがあります。",
      en: "I have climbed Mt. Fuji."
    }
  },
  {
    id: "vmn5-L19-20",
    word: "北海道",
    reading: "ほっかいどう",
    romaji: "hokkaidou",
    meaning: "Hokkaido",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "北[ほっ]海[かい]道[どう]に行[い]ったことがあります。",
      en: "I have been to Hokkaido."
    }
  },
  {
    id: "vmn5-L19-21",
    word: "沖縄",
    reading: "おきなわ",
    romaji: "okinawa",
    meaning: "Okinawa",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "沖[おき]縄[なわ]でダイビングをしたことがあります。",
      en: "I have dived in Okinawa."
    }
  },
  {
    id: "vmn5-L19-22",
    word: "京都",
    reading: "きょうと",
    romaji: "kyouto",
    meaning: "Kyoto",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "京[きょう]都[と]でお寺[てら]を見[み]たことがあります。",
      en: "I have seen temples in Kyoto."
    }
  },
  {
    id: "vmn5-L19-23",
    word: "外国",
    reading: "がいこく",
    romaji: "gaikoku",
    meaning: "foreign country",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "外[がい]国[こく]に行[い]ったことがあります。",
      en: "I have been to a foreign country."
    }
  },
  {
    id: "vmn5-L19-24",
    word: "書類",
    reading: "しょるい",
    romaji: "shorui",
    meaning: "document",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "書[しょ]類[るい]を市[し]役[やく]所[しょ]に送[おく]りました。",
      en: "I sent documents to the city hall."
    }
  },
  {
    id: "vmn5-L19-25",
    word: "スープ",
    reading: "スープ",
    romaji: "suupu",
    meaning: "soup",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "このスープを食[た]べたことがあります。",
      en: "I have had this soup before."
    }
  },
  {
    id: "vmn5-L19-26",
    word: "ほか",
    reading: "ほか",
    romaji: "hoka",
    meaning: "other",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "ほかに何[なに]をしたことがありますか。",
      en: "What else have you done?"
    }
  },
  {
    id: "vmn5-L19-27",
    word: "市役所",
    reading: "しやくしょ",
    romaji: "shiyakusho",
    meaning: "city hall",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "市[し]役[やく]所[しょ]に行[い]ったことがあります。",
      en: "I have been to the city hall."
    }
  },
  {
    id: "vmn5-L19-28",
    word: "遅く",
    reading: "おそく",
    romaji: "osoku",
    meaning: "late (at night)",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "adverb",
    example: {
      jp: "遅[おそ]くまで勉[べん]強[きょう]したことがあります。",
      en: "I have studied until late."
    }
  },
  {
    id: "vmn5-L19-29",
    word: "さっき",
    reading: "さっき",
    romaji: "sakki",
    meaning: "a while ago",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "adverb",
    example: {
      jp: "さっきお弁[べん]当[とう]を食[た]べました。",
      en: "I ate a bento a while ago."
    }
  },
  {
    id: "vmn5-L19-30",
    word: "一度",
    reading: "いちど",
    romaji: "ichido",
    meaning: "once, one time",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "一[いち]度[ど]だけ行[い]ったことがあります。",
      en: "I have been there only once."
    }
  },
  {
    id: "vmn5-L19-31",
    word: "二度",
    reading: "にど",
    romaji: "nido",
    meaning: "twice",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "二[に]度[ど]行[い]ったことがあります。",
      en: "I have been there twice."
    }
  },
  {
    id: "vmn5-L19-32",
    word: "何度も",
    reading: "なんども",
    romaji: "nandomo",
    meaning: "many times",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "adverb",
    example: {
      jp: "何[なん]度[ど]も見[み]たことがあります。",
      en: "I have seen it many times."
    }
  },
  {
    id: "vmn5-L19-33",
    word: "一度も",
    reading: "いちども",
    romaji: "ichidomo",
    meaning: "not even once",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "adverb",
    example: {
      jp: "一[いち]度[ど]も行[い]ったことがありません。",
      en: "I have never been there."
    }
  },
  {
    id: "vmn5-L19-34",
    word: "こと",
    reading: "こと",
    romaji: "koto",
    meaning: "experience (as in たことがある)",
    level: "N5",
    theme: "Experience",
    lesson: 19,
    partOfSpeech: "noun",
    example: {
      jp: "富[ふ]士[じ]山[さん]に登[のぼ]ったことがあります。",
      en: "I have climbed Mt. Fuji."
    }
  },

  // ============================================================
  // Lesson 20 — Reason (から, ので, だから) — 34 words
  // ============================================================
  {
    id: "vmn5-L20-01",
    word: "疲れる",
    reading: "つかれる",
    romaji: "tsukareru",
    meaning: "to get tired",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "働[はたら]いたから疲[つか]れました。",
      en: "I am tired because I worked."
    }
  },
  {
    id: "vmn5-L20-02",
    word: "がんばる",
    reading: "がんばる",
    romaji: "ganbaru",
    meaning: "to do one's best",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "試[し]験[けん]だからがんばります。",
      en: "I will do my best because there is an exam."
    }
  },
  {
    id: "vmn5-L20-03",
    word: "準備する",
    reading: "じゅんびする",
    romaji: "junbisuru",
    meaning: "to prepare",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "パーティーをするので準[じゅん]備[び]しています。",
      en: "I am preparing because we will have a party."
    }
  },
  {
    id: "vmn5-L20-04",
    word: "遅刻する",
    reading: "ちこくする",
    romaji: "chikokusuru",
    meaning: "to be late (for an appointment)",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "バスが遅[おく]れたので遅[ち]刻[こく]しました。",
      en: "I was late because the bus was delayed."
    }
  },
  {
    id: "vmn5-L20-05",
    word: "遠慮する",
    reading: "えんりょする",
    romaji: "enryosuru",
    meaning: "to hold back, to be modest",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "遠[えん]慮[りょ]しないで食[た]べてください。",
      en: "Please eat without holding back."
    }
  },
  {
    id: "vmn5-L20-06",
    word: "料理する",
    reading: "りょうりする",
    romaji: "ryourisuru",
    meaning: "to cook",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "お腹[なか]がすいたので料[りょう]理[り]します。",
      en: "I will cook because I am hungry."
    }
  },
  {
    id: "vmn5-L20-07",
    word: "相談する",
    reading: "そうだんする",
    romaji: "soudansuru",
    meaning: "to consult",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "分[わ]からないので先[せん]生[せい]に相[そう]談[だん]します。",
      en: "I will consult the teacher because I do not understand."
    }
  },
  {
    id: "vmn5-L20-08",
    word: "約束する",
    reading: "やくそくする",
    romaji: "yakusokusuru",
    meaning: "to promise",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "友[とも]達[だち]と約[やく]束[そく]したから行[い]きます。",
      en: "I will go because I promised my friend."
    }
  },
  {
    id: "vmn5-L20-09",
    word: "忘れる",
    reading: "わすれる",
    romaji: "wasureru",
    meaning: "to forget",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "忙[いそが]しかったので忘[わす]れました。",
      en: "I forgot because I was busy."
    }
  },
  {
    id: "vmn5-L20-10",
    word: "怒る",
    reading: "おこる",
    romaji: "okoru",
    meaning: "to get angry",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "嘘[うそ]をついたので怒[おこ]りました。",
      en: "I got angry because he lied."
    }
  },
  {
    id: "vmn5-L20-11",
    word: "泣く",
    reading: "なく",
    romaji: "naku",
    meaning: "to cry",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "転[ころ]んだので泣[な]きました。",
      en: "I cried because I fell."
    }
  },
  {
    id: "vmn5-L20-12",
    word: "笑う",
    reading: "わらう",
    romaji: "warau",
    meaning: "to laugh",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "面[おも]白[しろ]かったので笑[わら]いました。",
      en: "I laughed because it was funny."
    }
  },
  {
    id: "vmn5-L20-13",
    word: "喜ぶ",
    reading: "よろこぶ",
    romaji: "yorokobu",
    meaning: "to be glad",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "プレゼントをもらったので喜[よろこ]びました。",
      en: "He was glad because he got a present."
    }
  },
  {
    id: "vmn5-L20-14",
    word: "約束",
    reading: "やくそく",
    romaji: "yakusoku",
    meaning: "promise",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "約[やく]束[そく]を守[まも]りました。",
      en: "I kept the promise."
    }
  },
  {
    id: "vmn5-L20-15",
    word: "趣味",
    reading: "しゅみ",
    romaji: "shumi",
    meaning: "hobby",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "趣[しゅ]味[み]は本[ほん]を読[よ]むことです。",
      en: "My hobby is reading books."
    }
  },
  {
    id: "vmn5-L20-16",
    word: "野球",
    reading: "やきゅう",
    romaji: "yakyuu",
    meaning: "baseball",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "野[や]球[きゅう]を見[み]に行[い]きます。",
      en: "I will go watch baseball."
    }
  },
  {
    id: "vmn5-L20-17",
    word: "サッカー",
    reading: "サッカー",
    romaji: "sakkaa",
    meaning: "soccer",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "サッカーが好[す]きだからよく見[み]ます。",
      en: "I watch soccer often because I like it."
    }
  },
  {
    id: "vmn5-L20-18",
    word: "大切",
    reading: "たいせつ",
    romaji: "taisetsu",
    meaning: "important",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "健[けん]康[こう]が大[たい]切[せつ]だから気[き]をつけてください。",
      en: "Health is important, so please take care."
    }
  },
  {
    id: "vmn5-L20-19",
    word: "無理",
    reading: "むり",
    romaji: "muri",
    meaning: "impossible, unreasonable",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "無[む]理[り]をしないでください。",
      en: "Please do not overdo it."
    }
  },
  {
    id: "vmn5-L20-20",
    word: "それで",
    reading: "それで",
    romaji: "sorede",
    meaning: "therefore, so",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "conjunction",
    example: {
      jp: "頭[あたま]が痛[いた]いです。それで休[やす]みます。",
      en: "I have a headache. So I will rest."
    }
  },
  {
    id: "vmn5-L20-21",
    word: "それに",
    reading: "それに",
    romaji: "soreni",
    meaning: "moreover, besides",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "conjunction",
    example: {
      jp: "安[やす]いです。それに便[べん]利[り]です。",
      en: "It is cheap. Moreover it is convenient."
    }
  },
  {
    id: "vmn5-L20-22",
    word: "だって",
    reading: "だって",
    romaji: "datte",
    meaning: "because (casual)",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "conjunction",
    example: {
      jp: "だって疲[つか]れたから。",
      en: "Because I am tired."
    }
  },
  {
    id: "vmn5-L20-23",
    word: "だから",
    reading: "だから",
    romaji: "dakara",
    meaning: "therefore, so",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "conjunction",
    example: {
      jp: "雨[あめ]だから行[い]きません。",
      en: "I will not go because it is raining."
    }
  },
  {
    id: "vmn5-L20-24",
    word: "なので",
    reading: "なので",
    romaji: "nanode",
    meaning: "because (polite)",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "conjunction",
    example: {
      jp: "雨[あめ]なので休[やす]みます。",
      en: "I will rest because it is raining."
    }
  },
  {
    id: "vmn5-L20-25",
    word: "途中",
    reading: "とちゅう",
    romaji: "tochuu",
    meaning: "on the way, midway",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "途[と]中[ちゅう]で雨[あめ]が降[ふ]りました。",
      en: "It rained on the way."
    }
  },
  {
    id: "vmn5-L20-26",
    word: "用事",
    reading: "ようじ",
    romaji: "youji",
    meaning: "errand, business",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "用[よう]事[じ]があるから行[い]けません。",
      en: "I cannot go because I have an errand."
    }
  },
  {
    id: "vmn5-L20-27",
    word: "都合",
    reading: "つごう",
    romaji: "tsugou",
    meaning: "convenience, circumstances",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "都[つ]合[ごう]が悪[わる]いです。",
      en: "My schedule is bad."
    }
  },
  {
    id: "vmn5-L20-28",
    word: "理由",
    reading: "りゆう",
    romaji: "riyuu",
    meaning: "reason",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "理[り]由[ゆう]を教[おし]えてください。",
      en: "Please tell me the reason."
    }
  },
  {
    id: "vmn5-L20-29",
    word: "訳",
    reading: "わけ",
    romaji: "wake",
    meaning: "reason, meaning",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "訳[わけ]が分[わ]かりません。",
      en: "I do not understand the reason."
    }
  },
  {
    id: "vmn5-L20-30",
    word: "体",
    reading: "からだ",
    romaji: "karada",
    meaning: "body",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "体[からだ]が大[たい]切[せつ]です。",
      en: "The body is important."
    }
  },
  {
    id: "vmn5-L20-31",
    word: "頭",
    reading: "あたま",
    romaji: "atama",
    meaning: "head",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "頭[あたま]が痛[いた]いので休[やす]みます。",
      en: "I will rest because I have a headache."
    }
  },
  {
    id: "vmn5-L20-32",
    word: "腹",
    reading: "はら",
    romaji: "hara",
    meaning: "stomach, belly",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "腹[はら]がすいたから食[た]べます。",
      en: "I will eat because I am hungry."
    }
  },
  {
    id: "vmn5-L20-33",
    word: "のど",
    reading: "のど",
    romaji: "nodo",
    meaning: "throat",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "のどが渇[かわ]いたから水[みず]を飲[の]みます。",
      en: "I am thirsty so I will drink water."
    }
  },
  {
    id: "vmn5-L20-34",
    word: "風邪",
    reading: "かぜ",
    romaji: "kaze",
    meaning: "cold (illness)",
    level: "N5",
    theme: "Reason",
    lesson: 20,
    partOfSpeech: "noun",
    example: {
      jp: "風[か]邪[ぜ]をひいたから休[やす]みます。",
      en: "I will rest because I caught a cold."
    }
  },

  // ============================================================
  // Lesson 21 — Suggestion (ましょう, ませんか, か) — 34 words
  // ============================================================
  {
    id: "vmn5-L21-01",
    word: "提案する",
    reading: "ていあんする",
    romaji: "teiansuru",
    meaning: "to propose, to suggest",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "私[わたし]が提[てい]案[あん]しましょうか。",
      en: "Shall I make a suggestion?"
    }
  },
  {
    id: "vmn5-L21-02",
    word: "招待する",
    reading: "しょうたいする",
    romaji: "shoutaisuru",
    meaning: "to invite",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "友[とも]達[だち]を招[しょう]待[たい]しました。",
      en: "I invited my friend."
    }
  },
  {
    id: "vmn5-L21-03",
    word: "誘う",
    reading: "さそう",
    romaji: "sasou",
    meaning: "to invite (out)",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "映[えい]画[が]に誘[さそ]いました。",
      en: "I invited him to a movie."
    }
  },
  {
    id: "vmn5-L21-04",
    word: "受ける",
    reading: "うける",
    romaji: "ukeru",
    meaning: "to accept, to take",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "招[しょう]待[たい]を受[う]けました。",
      en: "I accepted the invitation."
    }
  },
  {
    id: "vmn5-L21-05",
    word: "断る",
    reading: "ことわる",
    romaji: "kotowaru",
    meaning: "to decline",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "用[よう]事[じ]があるので断[ことわ]りました。",
      en: "I declined because I have an errand."
    }
  },
  {
    id: "vmn5-L21-06",
    word: "一緒に",
    reading: "いっしょに",
    romaji: "isshoni",
    meaning: "together",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "一[いっ]緒[しょ]に食[た]べませんか。",
      en: "Will you eat with me?"
    }
  },
  {
    id: "vmn5-L21-07",
    word: "ましょう",
    reading: "ましょう",
    romaji: "mashou",
    meaning: "let us (do)",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "一[いっ]緒[しょ]に行[い]きましょう。",
      en: "Let us go together."
    }
  },
  {
    id: "vmn5-L21-08",
    word: "ませんか",
    reading: "ませんか",
    romaji: "masenka",
    meaning: "shall we? (invitation)",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "expression",
    example: {
      jp: "お茶[ちゃ]を飲[の]みませんか。",
      en: "Will you have some tea?"
    }
  },
  {
    id: "vmn5-L21-09",
    word: "きっと",
    reading: "きっと",
    romaji: "kitto",
    meaning: "surely, certainly",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "きっと来[き]てくださいね。",
      en: "Please be sure to come."
    }
  },
  {
    id: "vmn5-L21-10",
    word: "たぶん",
    reading: "たぶん",
    romaji: "tabun",
    meaning: "perhaps, maybe",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "たぶん行[い]けると思[おも]います。",
      en: "I think I can probably go."
    }
  },
  {
    id: "vmn5-L21-11",
    word: "もし",
    reading: "もし",
    romaji: "moshi",
    meaning: "if (hypothetical)",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "conjunction",
    example: {
      jp: "もし時[じ]間[かん]があれば来[き]てください。",
      en: "If you have time, please come."
    }
  },
  {
    id: "vmn5-L21-12",
    word: "上手",
    reading: "じょうず",
    romaji: "jouzu",
    meaning: "skillful, good at",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "料[りょう]理[り]が上[じょう]手[ず]ですね。",
      en: "You are good at cooking."
    }
  },
  {
    id: "vmn5-L21-13",
    word: "下手",
    reading: "へた",
    romaji: "heta",
    meaning: "unskillful, poor at",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "私[わたし]は歌[うた]が下[へ]手[た]です。",
      en: "I am bad at singing."
    }
  },
  {
    id: "vmn5-L21-14",
    word: "大変",
    reading: "たいへん",
    romaji: "taihen",
    meaning: "very, tough",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "この仕[し]事[ごと]は大[たい]変[へん]です。",
      en: "This work is tough."
    }
  },
  {
    id: "vmn5-L21-15",
    word: "とても",
    reading: "とても",
    romaji: "totemo",
    meaning: "very",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "とてもいいです。教[おし]えましょうか。",
      en: "It is very good. Shall I teach you?"
    }
  },
  {
    id: "vmn5-L21-16",
    word: "そんなに",
    reading: "そんなに",
    romaji: "sonnani",
    meaning: "so much, not so",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "そんなに難[むずか]しくないですよ。",
      en: "It is not that difficult."
    }
  },
  {
    id: "vmn5-L21-17",
    word: "きれい",
    reading: "きれい",
    romaji: "kirei",
    meaning: "pretty, clean",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "きれいな花[はな]ですね。買[か]いましょう。",
      en: "What a pretty flower. Let us buy it."
    }
  },
  {
    id: "vmn5-L21-18",
    word: "静か",
    reading: "しずか",
    romaji: "shizuka",
    meaning: "quiet",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "静[しず]かな店[みせ]に行[い]きませんか。",
      en: "Will you go to a quiet restaurant?"
    }
  },
  {
    id: "vmn5-L21-19",
    word: "賑やか",
    reading: "にぎやか",
    romaji: "nigiyaka",
    meaning: "lively, bustling",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "賑[にぎ]やかな町[まち]が好[す]きです。",
      en: "I like lively towns."
    }
  },
  {
    id: "vmn5-L21-20",
    word: "展示会",
    reading: "てんじかい",
    romaji: "tenjikai",
    meaning: "exhibition",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "展[てん]示[じ]会[かい]を見[み]に行[い]きませんか。",
      en: "Will you go see the exhibition?"
    }
  },
  {
    id: "vmn5-L21-21",
    word: "食事",
    reading: "しょくじ",
    romaji: "shokuji",
    meaning: "meal",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "一[いっ]緒[しょ]に食[しょく]事[じ]をしませんか。",
      en: "Will you have a meal with me?"
    }
  },
  {
    id: "vmn5-L21-22",
    word: "食べ物",
    reading: "たべもの",
    romaji: "tabemono",
    meaning: "food",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "食[た]べ物[もの]がとてもおいしいです。",
      en: "The food is very delicious."
    }
  },
  {
    id: "vmn5-L21-23",
    word: "飲み物",
    reading: "のみもの",
    romaji: "nomimono",
    meaning: "drink, beverage",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "飲[の]み物[もの]は何[なに]がいいですか。",
      en: "What drink would you like?"
    }
  },
  {
    id: "vmn5-L21-24",
    word: "鳥",
    reading: "とり",
    romaji: "tori",
    meaning: "bird",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "あの鳥[とり]を見[み]ましょう。",
      en: "Let us look at that bird."
    }
  },
  {
    id: "vmn5-L21-25",
    word: "部屋",
    reading: "へや",
    romaji: "heya",
    meaning: "room",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "この部[へ]屋[や]はきれいですね。",
      en: "This room is pretty, is it not?"
    }
  },
  {
    id: "vmn5-L21-26",
    word: "一人で",
    reading: "ひとりで",
    romaji: "hitoride",
    meaning: "alone, by oneself",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "一[ひと]人[り]で行[い]きますか。",
      en: "Will you go alone?"
    }
  },
  {
    id: "vmn5-L21-27",
    word: "みんなで",
    reading: "みんなで",
    romaji: "minnade",
    meaning: "all together",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "adverb",
    example: {
      jp: "みんなで写[しゃ]真[しん]を撮[と]りましょう。",
      en: "Let us take a photo together."
    }
  },
  {
    id: "vmn5-L21-28",
    word: "パーティー",
    reading: "パーティー",
    romaji: "paatii",
    meaning: "party",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "パーティーをしましょうか。",
      en: "Shall we have a party?"
    }
  },
  {
    id: "vmn5-L21-29",
    word: "映画館",
    reading: "えいがかん",
    romaji: "eigakan",
    meaning: "movie theater",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "映[えい]画[が]館[かん]に行[い]きませんか。",
      en: "Will you go to the movie theater?"
    }
  },
  {
    id: "vmn5-L21-30",
    word: "美術館",
    reading: "びじゅつかん",
    romaji: "bijutsukan",
    meaning: "art museum",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "美[び]術[じゅつ]館[かん]を見[み]ましょう。",
      en: "Let us see the art museum."
    }
  },
  {
    id: "vmn5-L21-31",
    word: "博物館",
    reading: "はくぶつかん",
    romaji: "hakubutsukan",
    meaning: "museum",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "博[はく]物[ぶつ]館[かん]で会[かい]いましょう。",
      en: "Let us meet at the museum."
    }
  },
  {
    id: "vmn5-L21-32",
    word: "喫茶店",
    reading: "きっさてん",
    romaji: "kissaten",
    meaning: "cafe",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "喫[きっ]茶[さ]店[てん]でお茶[ちゃ]を飲[の]みましょう。",
      en: "Let us drink tea at a cafe."
    }
  },
  {
    id: "vmn5-L21-33",
    word: "レストラン",
    reading: "レストラン",
    romaji: "resutoran",
    meaning: "restaurant",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "noun",
    example: {
      jp: "レストランで食[しょく]事[じ]をしませんか。",
      en: "Will you have a meal at a restaurant?"
    }
  },
  {
    id: "vmn5-L21-34",
    word: "か",
    reading: "か",
    romaji: "ka",
    meaning: "question particle",
    level: "N5",
    theme: "Suggestion",
    lesson: 21,
    partOfSpeech: "particle",
    example: {
      jp: "一[いっ]緒[しょ]に行[い]きませんか。",
      en: "Will you go together?"
    }
  },

  // ============================================================
  // Lesson 22 — Modifiers (の, たい, ながら) — 33 words
  // ============================================================
  {
    id: "vmn5-L22-01",
    word: "心配する",
    reading: "しんぱいする",
    romaji: "shinpaisuru",
    meaning: "to worry",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "母[はは]を心[しん]配[ぱい]しています。",
      en: "I am worrying about my mother."
    }
  },
  {
    id: "vmn5-L22-02",
    word: "紹介する",
    reading: "しょうかいする",
    romaji: "shoukaisuru",
    meaning: "to introduce",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "友[とも]達[だち]を紹[しょう]介[かい]します。",
      en: "I will introduce my friend."
    }
  },
  {
    id: "vmn5-L22-03",
    word: "説明する",
    reading: "せつめいする",
    romaji: "setsumeisuru",
    meaning: "to explain",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "写[しゃ]真[しん]を見[み]ながら説[せつ]明[めい]します。",
      en: "I will explain while looking at the photo."
    }
  },
  {
    id: "vmn5-L22-04",
    word: "質問する",
    reading: "しつもんする",
    romaji: "shitsumonsuru",
    meaning: "to ask a question",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "質[しつ]問[もん]してもいいですか。",
      en: "May I ask a question?"
    }
  },
  {
    id: "vmn5-L22-05",
    word: "遅れる",
    reading: "おくれる",
    romaji: "okureru",
    meaning: "to be late, to be delayed",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "バスが遅[おく]れました。",
      en: "The bus was late."
    }
  },
  {
    id: "vmn5-L22-06",
    word: "思う",
    reading: "おもう",
    romaji: "omou",
    meaning: "to think",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "私[わたし]はそう思[おも]います。",
      en: "I think so."
    }
  },
  {
    id: "vmn5-L22-07",
    word: "言う",
    reading: "いう",
    romaji: "iu",
    meaning: "to say",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "そう言[い]いました。",
      en: "I said so."
    }
  },
  {
    id: "vmn5-L22-08",
    word: "約束する",
    reading: "やくそくする",
    romaji: "yakusokusuru",
    meaning: "to promise",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "verb (suru)",
    example: {
      jp: "先[せん]生[せい]と約[やく]束[そく]しました。",
      en: "I made a promise with my teacher."
    }
  },
  {
    id: "vmn5-L22-09",
    word: "たい",
    reading: "たい",
    romaji: "tai",
    meaning: "want to (do)",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "auxiliary adjective",
    example: {
      jp: "私[わたし]は日[に]本[ほん]へ行[い]きたいです。",
      en: "I want to go to Japan."
    }
  },
  {
    id: "vmn5-L22-10",
    word: "ながら",
    reading: "ながら",
    romaji: "nagara",
    meaning: "while doing",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "particle",
    example: {
      jp: "音[おん]楽[がく]を聴[き]きながら勉[べん]強[きょう]します。",
      en: "I study while listening to music."
    }
  },
  {
    id: "vmn5-L22-11",
    word: "の",
    reading: "の",
    romaji: "no",
    meaning: "one (noun substitution)",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "particle",
    example: {
      jp: "この赤[あか]いのが私[わたし]のです。",
      en: "This red one is mine."
    }
  },
  {
    id: "vmn5-L22-12",
    word: "心配",
    reading: "しんぱい",
    romaji: "shinpai",
    meaning: "worry",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "心[しん]配[ぱい]があります。",
      en: "I have worries."
    }
  },
  {
    id: "vmn5-L22-13",
    word: "習慣",
    reading: "しゅうかん",
    romaji: "shuukan",
    meaning: "custom, habit",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "朝[あさ]早[はや]く起[お]きるのが習[しゅう]慣[かん]です。",
      en: "It is my habit to wake up early."
    }
  },
  {
    id: "vmn5-L22-14",
    word: "法律",
    reading: "ほうりつ",
    romaji: "houritsu",
    meaning: "law",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "法[ほう]律[りつ]を守[まも]らなければなりません。",
      en: "We must obey the law."
    }
  },
  {
    id: "vmn5-L22-15",
    word: "世界",
    reading: "せかい",
    romaji: "sekai",
    meaning: "world",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "世[せ]界[かい]は広[ひろ]いです。",
      en: "The world is wide."
    }
  },
  {
    id: "vmn5-L22-16",
    word: "時代",
    reading: "じだい",
    romaji: "jidai",
    meaning: "era, age",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "江[え]戸[ど]時[じ]代[だい]に興[きょう]味[み]があります。",
      en: "I am interested in the Edo era."
    }
  },
  {
    id: "vmn5-L22-17",
    word: "故障",
    reading: "こしょう",
    romaji: "koshou",
    meaning: "breakdown",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "車[くるま]が故[こ]障[しょう]しました。",
      en: "My car broke down."
    }
  },
  {
    id: "vmn5-L22-18",
    word: "説明",
    reading: "せつめい",
    romaji: "setsumei",
    meaning: "explanation",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "説[せつ]明[めい]が難[むずか]しいです。",
      en: "The explanation is difficult."
    }
  },
  {
    id: "vmn5-L22-19",
    word: "原因",
    reading: "げんいん",
    romaji: "gen'in",
    meaning: "cause",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "原[げん]因[いん]を調[しら]べました。",
      en: "I investigated the cause."
    }
  },
  {
    id: "vmn5-L22-20",
    word: "理由",
    reading: "りゆう",
    romaji: "riyuu",
    meaning: "reason",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "理[り]由[ゆう]を言[い]ってください。",
      en: "Please state the reason."
    }
  },
  {
    id: "vmn5-L22-21",
    word: "結果",
    reading: "けっか",
    romaji: "kekka",
    meaning: "result",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "結[けっ]果[か]を待[ま]っています。",
      en: "I am waiting for the result."
    }
  },
  {
    id: "vmn5-L22-22",
    word: "場所",
    reading: "ばしょ",
    romaji: "basho",
    meaning: "place",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "いい場[ば]所[しょ]ですね。",
      en: "It is a nice place."
    }
  },
  {
    id: "vmn5-L22-23",
    word: "時間",
    reading: "じかん",
    romaji: "jikan",
    meaning: "time",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "時[じ]間[かん]がありません。",
      en: "There is no time."
    }
  },
  {
    id: "vmn5-L22-24",
    word: "目的",
    reading: "もくてき",
    romaji: "mokuteki",
    meaning: "purpose",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "目[もく]的[てき]は何[なん]ですか。",
      en: "What is the purpose?"
    }
  },
  {
    id: "vmn5-L22-25",
    word: "内容",
    reading: "ないよう",
    romaji: "naiyou",
    meaning: "content",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "内[ない]容[よう]を説[せつ]明[めい]します。",
      en: "I will explain the content."
    }
  },
  {
    id: "vmn5-L22-26",
    word: "問題",
    reading: "もんだい",
    romaji: "mondai",
    meaning: "problem, question",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "問[もん]題[だい]があります。",
      en: "There is a problem."
    }
  },
  {
    id: "vmn5-L22-27",
    word: "答え",
    reading: "こたえ",
    romaji: "kotae",
    meaning: "answer",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "答[こた]えが分[わ]かりません。",
      en: "I do not know the answer."
    }
  },
  {
    id: "vmn5-L22-28",
    word: "質問",
    reading: "しつもん",
    romaji: "shitsumon",
    meaning: "question",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "質[しつ]問[もん]があります。",
      en: "I have a question."
    }
  },
  {
    id: "vmn5-L22-29",
    word: "性格",
    reading: "せいかく",
    romaji: "seikaku",
    meaning: "personality",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "性[せい]格[かく]がいい人[ひと]です。",
      en: "He has a good personality."
    }
  },
  {
    id: "vmn5-L22-30",
    word: "宗教",
    reading: "しゅうきょう",
    romaji: "shuukyou",
    meaning: "religion",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "宗[しゅう]教[きょう]について話[はな]します。",
      en: "I will talk about religion."
    }
  },
  {
    id: "vmn5-L22-31",
    word: "政治",
    reading: "せいじ",
    romaji: "seiji",
    meaning: "politics",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "政[せい]治[じ]に興[きょう]味[み]があります。",
      en: "I am interested in politics."
    }
  },
  {
    id: "vmn5-L22-32",
    word: "文化",
    reading: "ぶんか",
    romaji: "bunka",
    meaning: "culture",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "日[に]本[ほん]の文[ぶん]化[か]を勉[べん]強[きょう]しています。",
      en: "I am studying Japanese culture."
    }
  },
  {
    id: "vmn5-L22-33",
    word: "生活",
    reading: "せいかつ",
    romaji: "seikatsu",
    meaning: "life, living",
    level: "N5",
    theme: "Modifiers",
    lesson: 22,
    partOfSpeech: "noun",
    example: {
      jp: "日[に]本[ほん]の生[せい]活[かつ]に慣[な]れました。",
      en: "I got used to life in Japan."
    }
  },

  // ============================================================
  // Lesson 23 — Giving/receiving (あげる, くれる, もらう) — 34 words
  // ============================================================
  {
    id: "vmn5-L23-01",
    word: "あげる",
    reading: "あげる",
    romaji: "ageru",
    meaning: "to give (to others)",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "友[とも]達[だち]に本[ほん]をあげました。",
      en: "I gave a book to my friend."
    }
  },
  {
    id: "vmn5-L23-02",
    word: "くれる",
    reading: "くれる",
    romaji: "kureru",
    meaning: "to give (to me)",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "母[はは]は私[わたし]に靴[くつ]をくれました。",
      en: "My mother gave me shoes."
    }
  },
  {
    id: "vmn5-L23-03",
    word: "もらう",
    reading: "もらう",
    romaji: "morau",
    meaning: "to receive",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "友[とも]達[だち]からプレゼントをもらいました。",
      en: "I received a present from my friend."
    }
  },
  {
    id: "vmn5-L23-04",
    word: "貸す",
    reading: "かす",
    romaji: "kasu",
    meaning: "to lend",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "私[わたし]は本[ほん]を貸[か]しました。",
      en: "I lent a book."
    }
  },
  {
    id: "vmn5-L23-05",
    word: "借りる",
    reading: "かりる",
    romaji: "kariru",
    meaning: "to borrow",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "図[と]書[しょ]館[かん]で本[ほん]を借[か]りました。",
      en: "I borrowed a book at the library."
    }
  },
  {
    id: "vmn5-L23-06",
    word: "預かる",
    reading: "あずかる",
    romaji: "azukaru",
    meaning: "to keep, to take care of",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "荷[に]物[もつ]を預[あず]かりました。",
      en: "I took care of the luggage."
    }
  },
  {
    id: "vmn5-L23-07",
    word: "直す",
    reading: "なおす",
    romaji: "naosu",
    meaning: "to fix, to repair",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "時[と]計[けい]を直[なお]しました。",
      en: "I fixed the watch."
    }
  },
  {
    id: "vmn5-L23-08",
    word: "探す",
    reading: "さがす",
    romaji: "sagasu",
    meaning: "to look for, to search",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "鍵[かぎ]を探[さが]しています。",
      en: "I am looking for the key."
    }
  },
  {
    id: "vmn5-L23-09",
    word: "見つける",
    reading: "みつける",
    romaji: "mitsukeru",
    meaning: "to find",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "財[さい]布[ふ]を見[み]つけました。",
      en: "I found the wallet."
    }
  },
  {
    id: "vmn5-L23-10",
    word: "教える",
    reading: "おしえる",
    romaji: "oshieru",
    meaning: "to teach, to tell",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "先[せん]生[せい]が私[わたし]に漢[かん]字[じ]を教[おし]えてくれました。",
      en: "The teacher taught me kanji."
    }
  },
  {
    id: "vmn5-L23-11",
    word: "習う",
    reading: "ならう",
    romaji: "narau",
    meaning: "to learn (from someone)",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "私[わたし]は先[せん]生[せい]に日[に]本[ほん]語[ご]を習[なら]いました。",
      en: "I learned Japanese from my teacher."
    }
  },
  {
    id: "vmn5-L23-12",
    word: "思い出す",
    reading: "おもいだす",
    romaji: "omoidasu",
    meaning: "to recall",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "名[な]前[まえ]を思[おも]い出[だ]しました。",
      en: "I recalled the name."
    }
  },
  {
    id: "vmn5-L23-13",
    word: "忘れる",
    reading: "わすれる",
    romaji: "wasureru",
    meaning: "to forget",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "傘[かさ]を忘[わす]れました。",
      en: "I forgot my umbrella."
    }
  },
  {
    id: "vmn5-L23-14",
    word: "贈り物",
    reading: "おくりもの",
    romaji: "okurimono",
    meaning: "present, gift",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "誕[たん]生[じょう]日[び]に贈[おく]り物[もの]をもらいました。",
      en: "I received a gift on my birthday."
    }
  },
  {
    id: "vmn5-L23-15",
    word: "プレゼント",
    reading: "プレゼント",
    romaji: "purezento",
    meaning: "present",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "友[とも]達[だち]にプレゼントをあげました。",
      en: "I gave a present to my friend."
    }
  },
  {
    id: "vmn5-L23-16",
    word: "お土産",
    reading: "おみやげ",
    romaji: "omiyage",
    meaning: "souvenir",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "旅[りょ]行[こう]のお土産[みやげ]をもらいました。",
      en: "I received a souvenir from the trip."
    }
  },
  {
    id: "vmn5-L23-17",
    word: "故障",
    reading: "こしょう",
    romaji: "koshou",
    meaning: "breakdown",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "パソコンが故[こ]障[しょう]しました。",
      en: "My computer broke down."
    }
  },
  {
    id: "vmn5-L23-18",
    word: "修理",
    reading: "しゅうり",
    romaji: "shuuri",
    meaning: "repair",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "修[しゅう]理[り]してもらいました。",
      en: "I had it repaired."
    }
  },
  {
    id: "vmn5-L23-19",
    word: "地図",
    reading: "ちず",
    romaji: "chizu",
    meaning: "map",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "地[ち]図[ず]を貸[か]してください。",
      en: "Please lend me a map."
    }
  },
  {
    id: "vmn5-L23-20",
    word: "道",
    reading: "みち",
    romaji: "michi",
    meaning: "road, way",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "道[みち]を教[おし]えてくれました。",
      en: "He told me the way."
    }
  },
  {
    id: "vmn5-L23-21",
    word: "迷う",
    reading: "まよう",
    romaji: "mayou",
    meaning: "to get lost",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "道[みち]に迷[まよ]いました。",
      en: "I got lost."
    }
  },
  {
    id: "vmn5-L23-22",
    word: "手紙",
    reading: "てがみ",
    romaji: "tegami",
    meaning: "letter",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "友[とも]達[だち]から手[て]紙[がみ]をもらいました。",
      en: "I got a letter from my friend."
    }
  },
  {
    id: "vmn5-L23-23",
    word: "荷物",
    reading: "にもつ",
    romaji: "nimotsu",
    meaning: "luggage",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "荷[に]物[もつ]を預[あず]かりました。",
      en: "I kept the luggage."
    }
  },
  {
    id: "vmn5-L23-24",
    word: "財布",
    reading: "さいふ",
    romaji: "saifu",
    meaning: "wallet",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "財[さい]布[ふ]を落[お]としました。",
      en: "I dropped my wallet."
    }
  },
  {
    id: "vmn5-L23-25",
    word: "鍵",
    reading: "かぎ",
    romaji: "kagi",
    meaning: "key",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "鍵[かぎ]を借[か]りました。",
      en: "I borrowed the key."
    }
  },
  {
    id: "vmn5-L23-26",
    word: "傘",
    reading: "かさ",
    romaji: "kasa",
    meaning: "umbrella",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "傘[かさ]を貸[か]してください。",
      en: "Please lend me an umbrella."
    }
  },
  {
    id: "vmn5-L23-27",
    word: "消しゴム",
    reading: "けしゴム",
    romaji: "keshigomu",
    meaning: "eraser",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "消[け]しゴムを借[か]りました。",
      en: "I borrowed an eraser."
    }
  },
  {
    id: "vmn5-L23-28",
    word: "辞書",
    reading: "じしょ",
    romaji: "jisho",
    meaning: "dictionary",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "辞[じ]書[しょ]をあげましょうか。",
      en: "Shall I give you a dictionary?"
    }
  },
  {
    id: "vmn5-L23-29",
    word: "時計",
    reading: "とけい",
    romaji: "tokei",
    meaning: "clock, watch",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "時[と]計[けい]をもらいました。",
      en: "I received a watch."
    }
  },
  {
    id: "vmn5-L23-30",
    word: "眼鏡",
    reading: "めがね",
    romaji: "megane",
    meaning: "glasses",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "眼[め]鏡[がね]をなくしました。",
      en: "I lost my glasses."
    }
  },
  {
    id: "vmn5-L23-31",
    word: "カメラ",
    reading: "カメラ",
    romaji: "kamera",
    meaning: "camera",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "カメラを貸[か]してくれました。",
      en: "He lent me a camera."
    }
  },
  {
    id: "vmn5-L23-32",
    word: "携帯",
    reading: "けいたい",
    romaji: "keitai",
    meaning: "cell phone (abbreviation)",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "携[けい]帯[たい]を見[み]せてください。",
      en: "Please show me your cell phone."
    }
  },
  {
    id: "vmn5-L23-33",
    word: "試合",
    reading: "しあい",
    romaji: "shiai",
    meaning: "match, game",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "試[し]合[あい]のチケットをもらいました。",
      en: "I got a ticket for the match."
    }
  },
  {
    id: "vmn5-L23-34",
    word: "誕生日",
    reading: "たんじょうび",
    romaji: "tanjoubi",
    meaning: "birthday",
    level: "N5",
    theme: "Giving/receiving",
    lesson: 23,
    partOfSpeech: "noun",
    example: {
      jp: "誕[たん]生[じょう]日[び]に何[なに]をもらいましたか。",
      en: "What did you get on your birthday?"
    }
  },

  // ============================================================
  // Lesson 24 — Conditional (たら, ば, と, なら) — 33 words
  // ============================================================
  {
    id: "vmn5-L24-01",
    word: "降る",
    reading: "ふる",
    romaji: "furu",
    meaning: "to fall (rain, snow)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "雨[あめ]が降[ふ]ったら行[い]きません。",
      en: "If it rains, I will not go."
    }
  },
  {
    id: "vmn5-L24-02",
    word: "咲く",
    reading: "さく",
    romaji: "saku",
    meaning: "to bloom",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "花[はな]が咲[さ]くと、春[はる]です。",
      en: "When flowers bloom, it is spring."
    }
  },
  {
    id: "vmn5-L24-03",
    word: "開く",
    reading: "あく",
    romaji: "aku",
    meaning: "to open (intransitive)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "店[みせ]が開[あ]いたら入[はい]りましょう。",
      en: "When the shop opens, let us go in."
    }
  },
  {
    id: "vmn5-L24-04",
    word: "閉まる",
    reading: "しまう",
    romaji: "shimaru",
    meaning: "to close (intransitive)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "ドアが閉[し]まると、静[しず]かになります。",
      en: "When the door closes, it becomes quiet."
    }
  },
  {
    id: "vmn5-L24-05",
    word: "開ける",
    reading: "あける",
    romaji: "akeru",
    meaning: "to open (transitive)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "窓[まど]を開[あ]けると涼[すず]しいです。",
      en: "When you open the window, it is cool."
    }
  },
  {
    id: "vmn5-L24-06",
    word: "閉める",
    reading: "しめる",
    romaji: "shimeru",
    meaning: "to close (transitive)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "ドアを閉[し]めると静[しず]かです。",
      en: "When you close the door, it is quiet."
    }
  },
  {
    id: "vmn5-L24-07",
    word: "漏れる",
    reading: "もれる",
    romaji: "moreru",
    meaning: "to leak",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "水[みず]が漏[も]れたら大[たい]変[へん]です。",
      en: "If water leaks, it is a problem."
    }
  },
  {
    id: "vmn5-L24-08",
    word: "乗る",
    reading: "のる",
    romaji: "noru",
    meaning: "to get on, to ride",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "バスに乗[の]ったら、すぐ座[すわ]りました。",
      en: "When I got on the bus, I sat down right away."
    }
  },
  {
    id: "vmn5-L24-09",
    word: "降りる",
    reading: "おりる",
    romaji: "oriru",
    meaning: "to alight, to get off",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "駅[えき]で降[お]りたら、雨[あめ]が降[ふ]っていました。",
      en: "When I got off at the station, it was raining."
    }
  },
  {
    id: "vmn5-L24-10",
    word: "着く",
    reading: "つく",
    romaji: "tsuku",
    meaning: "to arrive",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "京[きょう]都[と]に着[つ]いたら電[でん]話[わ]します。",
      en: "When I arrive in Kyoto, I will call."
    }
  },
  {
    id: "vmn5-L24-11",
    word: "急ぐ",
    reading: "いそぐ",
    romaji: "isogu",
    meaning: "to hurry",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "急[いそ]がないと、遅[おく]れますよ。",
      en: "If you do not hurry, you will be late."
    }
  },
  {
    id: "vmn5-L24-12",
    word: "遅れる",
    reading: "おくれる",
    romaji: "okureru",
    meaning: "to be late, to be delayed",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "遅[おく]れたら、連[れん]絡[らく]してください。",
      en: "If you are late, please contact me."
    }
  },
  {
    id: "vmn5-L24-13",
    word: "見つかる",
    reading: "みつかる",
    romaji: "mitsukaru",
    meaning: "to be found",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "鍵[かぎ]が見[み]つかったら、教[おし]えてください。",
      en: "If the key is found, please tell me."
    }
  },
  {
    id: "vmn5-L24-14",
    word: "売れる",
    reading: "うれる",
    romaji: "ureru",
    meaning: "to sell well (intransitive)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "この本[ほん]はよく売[う]れます。",
      en: "This book sells well."
    }
  },
  {
    id: "vmn5-L24-15",
    word: "売る",
    reading: "うる",
    romaji: "uru",
    meaning: "to sell (transitive)",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "安[やす]く売[う]れば、買[か]います。",
      en: "If you sell it cheap, I will buy it."
    }
  },
  {
    id: "vmn5-L24-16",
    word: "試合",
    reading: "しあい",
    romaji: "shiai",
    meaning: "match, game",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "試[し]合[あい]に勝[か]ったら、うれしいです。",
      en: "If we win the match, I will be happy."
    }
  },
  {
    id: "vmn5-L24-17",
    word: "雨",
    reading: "あめ",
    romaji: "ame",
    meaning: "rain",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "雨[あめ]なら、家[いえ]にいます。",
      en: "If it rains, I will stay home."
    }
  },
  {
    id: "vmn5-L24-18",
    word: "雪",
    reading: "ゆき",
    romaji: "yuki",
    meaning: "snow",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "雪[ゆき]が降[ふ]ると、寒[さむ]いです。",
      en: "When it snows, it is cold."
    }
  },
  {
    id: "vmn5-L24-19",
    word: "風",
    reading: "かぜ",
    romaji: "kaze",
    meaning: "wind",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "風[かぜ]が強[つよ]いと、寒[さむ]いです。",
      en: "When the wind is strong, it is cold."
    }
  },
  {
    id: "vmn5-L24-20",
    word: "天気",
    reading: "てんき",
    romaji: "tenki",
    meaning: "weather",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "天[てん]気[き]がよければ、出[で]かけましょう。",
      en: "If the weather is good, let us go out."
    }
  },
  {
    id: "vmn5-L24-21",
    word: "季節",
    reading: "きせつ",
    romaji: "kisetsu",
    meaning: "season",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "季[き]節[せつ]によって、花[はな]が違[ちが]います。",
      en: "Flowers differ by season."
    }
  },
  {
    id: "vmn5-L24-22",
    word: "春",
    reading: "はる",
    romaji: "haru",
    meaning: "spring",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "春[はる]になると、桜[さくら]が咲[さ]きます。",
      en: "When spring comes, cherry blossoms bloom."
    }
  },
  {
    id: "vmn5-L24-23",
    word: "夏",
    reading: "なつ",
    romaji: "natsu",
    meaning: "summer",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "夏[なつ]は暑[あつ]いので、水[みず]を飲[の]みます。",
      en: "Summer is hot, so I drink water."
    }
  },
  {
    id: "vmn5-L24-24",
    word: "秋",
    reading: "あき",
    romaji: "aki",
    meaning: "autumn",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "秋[あき]になると、涼[すず]しいです。",
      en: "When autumn comes, it is cool."
    }
  },
  {
    id: "vmn5-L24-25",
    word: "冬",
    reading: "ふゆ",
    romaji: "fuyu",
    meaning: "winter",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "冬[ふゆ]は寒[さむ]いです。",
      en: "Winter is cold."
    }
  },
  {
    id: "vmn5-L24-26",
    word: "花",
    reading: "はな",
    romaji: "hana",
    meaning: "flower",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "花[はな]が咲[さ]けば、きれいです。",
      en: "If flowers bloom, it is pretty."
    }
  },
  {
    id: "vmn5-L24-27",
    word: "桜",
    reading: "さくら",
    romaji: "sakura",
    meaning: "cherry blossom",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "桜[さくら]を見[み]に行[い]きましょう。",
      en: "Let us go see cherry blossoms."
    }
  },
  {
    id: "vmn5-L24-28",
    word: "駅",
    reading: "えき",
    romaji: "eki",
    meaning: "station",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "駅[えき]に着[つ]いたら、連[れん]絡[らく]します。",
      en: "When I arrive at the station, I will contact you."
    }
  },
  {
    id: "vmn5-L24-29",
    word: "バス",
    reading: "バス",
    romaji: "basu",
    meaning: "bus",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "バスが来[き]たら、乗[の]ります。",
      en: "When the bus comes, I will get on."
    }
  },
  {
    id: "vmn5-L24-30",
    word: "電車",
    reading: "でんしゃ",
    romaji: "densha",
    meaning: "train",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "電[でん]車[しゃ]が込[こ]むと、座[すわ]れません。",
      en: "When the train is crowded, I cannot sit."
    }
  },
  {
    id: "vmn5-L24-31",
    word: "飛行機",
    reading: "ひこうき",
    romaji: "hikouki",
    meaning: "airplane",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "飛[ひ]行[こう]機[き]で行[い]くなら、早[はや]いです。",
      en: "If you go by plane, it is fast."
    }
  },
  {
    id: "vmn5-L24-32",
    word: "船",
    reading: "ふね",
    romaji: "fune",
    meaning: "boat",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "船[ふね]に乗[の]ると、気[き]持[も]ちがいいです。",
      en: "When you ride a boat, it feels good."
    }
  },
  {
    id: "vmn5-L24-33",
    word: "時間",
    reading: "じかん",
    romaji: "jikan",
    meaning: "time",
    level: "N5",
    theme: "Conditional",
    lesson: 24,
    partOfSpeech: "noun",
    example: {
      jp: "時[じ]間[かん]があれば、手[て]伝[つだ]います。",
      en: "If I have time, I will help."
    }
  },

  // ============================================================
  // Lesson 25 — Polite/casual review (です/ます, casual forms, だ) — 34 words
  // ============================================================
  {
    id: "vmn5-L25-01",
    word: "だ",
    reading: "だ",
    romaji: "da",
    meaning: "copula (casual です)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "copula",
    example: {
      jp: "私[わたし]は学[がく]生[せい]だ。",
      en: "I am a student."
    }
  },
  {
    id: "vmn5-L25-02",
    word: "です",
    reading: "です",
    romaji: "desu",
    meaning: "copula (polite)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "copula",
    example: {
      jp: "私[わたし]は学[がく]生[せい]です。",
      en: "I am a student."
    }
  },
  {
    id: "vmn5-L25-03",
    word: "ます",
    reading: "ます",
    romaji: "masu",
    meaning: "polite verb ending",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "auxiliary verb",
    example: {
      jp: "毎[まい]日[にち]コーヒーを飲[の]みます。",
      en: "I drink coffee every day."
    }
  },
  {
    id: "vmn5-L25-04",
    word: "じゃ",
    reading: "じゃ",
    romaji: "ja",
    meaning: "then (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "じゃ、また明日[あした]。",
      en: "Well then, see you tomorrow."
    }
  },
  {
    id: "vmn5-L25-05",
    word: "では",
    reading: "では",
    romaji: "dewa",
    meaning: "then (polite)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "では、失[しつ]礼[れい]します。",
      en: "Well then, excuse me."
    }
  },
  {
    id: "vmn5-L25-06",
    word: "けど",
    reading: "けど",
    romaji: "kedo",
    meaning: "but (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "行[い]きたいけど、時[じ]間[かん]がない。",
      en: "I want to go, but I do not have time."
    }
  },
  {
    id: "vmn5-L25-07",
    word: "けれど",
    reading: "けれど",
    romaji: "keredo",
    meaning: "but (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "高[たか]いけれど、いいバッグだ。",
      en: "It is expensive, but it is a good bag."
    }
  },
  {
    id: "vmn5-L25-08",
    word: "けれども",
    reading: "けれども",
    romaji: "keredomo",
    meaning: "however",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "雨[あめ]けれども、行[い]く。",
      en: "It is raining, but I will go."
    }
  },
  {
    id: "vmn5-L25-09",
    word: "だけど",
    reading: "だけど",
    romaji: "dakedo",
    meaning: "but (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "忙[いそが]しいだけど、楽[たの]しい。",
      en: "I am busy, but it is fun."
    }
  },
  {
    id: "vmn5-L25-10",
    word: "しかし",
    reading: "しかし",
    romaji: "shikashi",
    meaning: "however",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "しかし、それは難[むずか]しいです。",
      en: "However, that is difficult."
    }
  },
  {
    id: "vmn5-L25-11",
    word: "そして",
    reading: "そして",
    romaji: "soshite",
    meaning: "and then",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "食[た]べて、そして寝[ね]た。",
      en: "I ate, and then slept."
    }
  },
  {
    id: "vmn5-L25-12",
    word: "それから",
    reading: "それから",
    romaji: "sorekara",
    meaning: "after that",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "それから、どうした？",
      en: "Then what did you do?"
    }
  },
  {
    id: "vmn5-L25-13",
    word: "それで",
    reading: "それで",
    romaji: "sorede",
    meaning: "so, therefore",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "それで、大[だい]丈[じょう]夫[ぶ]？",
      en: "So, are you OK?"
    }
  },
  {
    id: "vmn5-L25-14",
    word: "だから",
    reading: "だから",
    romaji: "dakara",
    meaning: "so (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "だから、行[い]かない。",
      en: "So I will not go."
    }
  },
  {
    id: "vmn5-L25-15",
    word: "ですから",
    reading: "ですから",
    romaji: "desukara",
    meaning: "so (polite)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "ですから、お願[ねが]いします。",
      en: "So, please."
    }
  },
  {
    id: "vmn5-L25-16",
    word: "ところで",
    reading: "ところで",
    romaji: "tokorode",
    meaning: "by the way",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "ところで、元[げん]気[き]？",
      en: "By the way, how are you?"
    }
  },
  {
    id: "vmn5-L25-17",
    word: "さて",
    reading: "さて",
    romaji: "sate",
    meaning: "well then",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "conjunction",
    example: {
      jp: "さて、始[はじ]めよう。",
      en: "Well then, let us start."
    }
  },
  {
    id: "vmn5-L25-18",
    word: "実は",
    reading: "じつは",
    romaji: "jitsuwa",
    meaning: "actually, to tell the truth",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adverb",
    example: {
      jp: "実[じつ]は、私[わたし]も行[い]きたい。",
      en: "Actually, I want to go too."
    }
  },
  {
    id: "vmn5-L25-19",
    word: "予定",
    reading: "よてい",
    romaji: "yotei",
    meaning: "plan, schedule",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "noun",
    example: {
      jp: "明日[あした]の予[よ]定[てい]は？",
      en: "What is your plan for tomorrow?"
    }
  },
  {
    id: "vmn5-L25-20",
    word: "暇",
    reading: "ひま",
    romaji: "hima",
    meaning: "free time, leisure",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "今[いま]暇[ひま]だ。",
      en: "I am free now."
    }
  },
  {
    id: "vmn5-L25-21",
    word: "急に",
    reading: "きゅうに",
    romaji: "kyuuni",
    meaning: "suddenly",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adverb",
    example: {
      jp: "急[きゅう]に雨[あめ]が降[ふ]った。",
      en: "It suddenly rained."
    }
  },
  {
    id: "vmn5-L25-22",
    word: "急ぐ",
    reading: "いそぐ",
    romaji: "isogu",
    meaning: "to hurry",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "verb (godan)",
    example: {
      jp: "急[いそ]ごう。",
      en: "Let us hurry."
    }
  },
  {
    id: "vmn5-L25-23",
    word: "予定通り",
    reading: "よていどおり",
    romaji: "yoteidoori",
    meaning: "as planned",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adverb",
    example: {
      jp: "予[よ]定[てい]通[どお]りに進[すす]む。",
      en: "It goes as planned."
    }
  },
  {
    id: "vmn5-L25-24",
    word: "元気",
    reading: "げんき",
    romaji: "genki",
    meaning: "healthy, energetic",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "元[げん]気[き]？",
      en: "How are you? (casual)"
    }
  },
  {
    id: "vmn5-L25-25",
    word: "大丈夫",
    reading: "だいじょうぶ",
    romaji: "daijoubu",
    meaning: "fine, OK",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "大[だい]丈[じょう]夫[ぶ]だよ。",
      en: "It is OK."
    }
  },
  {
    id: "vmn5-L25-26",
    word: "いい",
    reading: "いい",
    romaji: "ii",
    meaning: "good (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (i)",
    example: {
      jp: "これでいい。",
      en: "This is fine."
    }
  },
  {
    id: "vmn5-L25-27",
    word: "よい",
    reading: "よい",
    romaji: "yoi",
    meaning: "good (formal)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (i)",
    example: {
      jp: "よい天[てん]気[き]だ。",
      en: "It is good weather."
    }
  },
  {
    id: "vmn5-L25-28",
    word: "悪い",
    reading: "わるい",
    romaji: "warui",
    meaning: "bad",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (i)",
    example: {
      jp: "天[てん]気[き]が悪[わる]い。",
      en: "The weather is bad."
    }
  },
  {
    id: "vmn5-L25-29",
    word: "暇な",
    reading: "ひまな",
    romaji: "himana",
    meaning: "free (na-adjective form)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adjective (na)",
    example: {
      jp: "暇[ひま]な時[とき]、遊[あそ]ぼう。",
      en: "When you are free, let us hang out."
    }
  },
  {
    id: "vmn5-L25-30",
    word: "久しぶり",
    reading: "ひさしぶり",
    romaji: "hisashiburi",
    meaning: "it has been a while",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "expression",
    example: {
      jp: "お久[ひさ]しぶり！",
      en: "Long time no see!"
    }
  },
  {
    id: "vmn5-L25-31",
    word: "また",
    reading: "また",
    romaji: "mata",
    meaning: "again",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "adverb",
    example: {
      jp: "また来[き]てね。",
      en: "Come again."
    }
  },
  {
    id: "vmn5-L25-32",
    word: "またね",
    reading: "またね",
    romaji: "matane",
    meaning: "see you (casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "expression",
    example: {
      jp: "じゃ、またね。",
      en: "See you."
    }
  },
  {
    id: "vmn5-L25-33",
    word: "さようなら",
    reading: "さようなら",
    romaji: "sayounara",
    meaning: "goodbye",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "expression",
    example: {
      jp: "さようなら、また会[あ]いましょう。",
      en: "Goodbye, let us meet again."
    }
  },
  {
    id: "vmn5-L25-34",
    word: "くれる",
    reading: "くれる",
    romaji: "kureru",
    meaning: "to give (to me; casual)",
    level: "N5",
    theme: "Polite/casual review",
    lesson: 25,
    partOfSpeech: "verb (ichidan)",
    example: {
      jp: "これ、くれる？",
      en: "Will you give this to me?"
    }
  }
];
