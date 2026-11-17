import type { ListeningData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// 20 N3-level listening dialogues across varied everyday and business settings.
// N3 grammar targets: 〜つもり, 〜ようにする, 〜ことにする, 〜はず, 〜らしい (hearsay),
// 〜方[ほう]がいい, 〜てからでないと, 〜にしたがって, 〜おかげで, 〜ため(に),
// 〜みたい, 〜よう, conditionals, humble/polite forms, 〜かもしれない.

export const listeningN3C: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n3-41 — At the tax office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-41",
    title: "確定申告[かくていしんこく]の相談[そうだん]",
    level: "N3",
    context: "At the tax office — a clerk helps a freelancer with filing",
    text: "A: すみません、今年[ことし]の確定申告[かくていしんこく]について質問[しつもん]があります。\nB: はい、何[なに]でしょうか。\nA: 去年[きょねん]からフリーランスとして働[はたら]いているんですが、経費[けいひ]の計算[けいさん]がよく分[わ]かりません。\nB: 仕事[しごと]に使[つか]ったパソコンや交通費[こうつうひ]は経費[けいひ]として認[みと]められます。\nA: レシートは全部[ぜんぶ]保存[ほぞん]しておいた方[ほう]がいいですか。\nB: はい、万[ばん]が一[いち]のために、五年間[ごねんかん]は保管[ほかん]するようにしてください。\nA: わかりました。ありがとうございます。",
    translation: "A: Excuse me, I have a question about this year's tax filing.\nB: Yes, what is it?\nA: I've been working freelance since last year, but I don't really understand how to calculate expenses.\nB: Computers and transportation costs used for work can be recognized as expenses.\nA: Should I keep all the receipts?\nB: Yes, just in case, please keep them for five years.\nA: Understood. Thank you.",
    questions: [
      {
        q: "Why does A visit the tax office?",
        choices: ["To file taxes for a salaried job", "To ask about filing as a freelancer", "To pay a fine", "To register a new company"],
        answerIndex: 1,
        explanation: "A says フリーランスとして働いているんですが、経費の計算がよく分かりません (working freelance, doesn't understand expense calculation)."
      },
      {
        q: "What can be counted as expenses?",
        choices: ["Food and drinks", "Computer and transportation costs", "Clothing and haircuts", "Rent for home"],
        answerIndex: 1,
        explanation: "B says パソコンや交通費は経費として認められます (computer and transport costs are recognized as expenses)."
      },
      {
        q: "How long should receipts be kept?",
        choices: ["One year", "Three years", "Five years", "Ten years"],
        answerIndex: 2,
        explanation: "B says 五年間は保管するようにしてください (please keep them for five years)."
      },
      {
        q: "Why does B recommend keeping receipts that long?",
        choices: ["For marketing", "Just in case of emergency", "To sell them later", "To give to family"],
        answerIndex: 1,
        explanation: "B says 万が一のために (just in case), using the idiom 万が一 (in case of emergency)."
      }
    ],
    estMinutes: 4,
    tags: ["taxes", "business"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-42 — Discussing a startup idea
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-42",
    title: "スタートアップのアイデア",
    level: "N3",
    context: "At a café — two friends discuss a startup plan",
    text: "A: 来月[らいげつ]から、スマホアプリの会社[かいしゃ]を始[はじ]めるつもりなんだ。\nB: へえ、どんなアプリを作[つく]るの？\nA: 語学[ごがく]を勉強[べんきょう]する人[ひと]が、お互[たが]いに教[おし]え合[あ]うアプリだよ。\nB: それは面白[おもしろ]そうだね。でも、まずは市場[しじょう]調査[ちょうさ]をした方[ほう]がいいんじゃない？\nA: そうだね。来週[らいしゅう]、大学[だいがく]の先生[せんせい]に相談[そうだん]してみるよ。\nB: よかったら、私[わたし]も協力[きょうりょく]するよ。企画書[きかくしょ]を見[み]せてくれたら考[かんが]えるから。",
    translation: "A: From next month, I'm planning to start a smartphone app company.\nB: Wow, what kind of app will you make?\nA: An app where people studying languages teach each other.\nB: That sounds interesting. But shouldn't you do market research first?\nA: You're right. I'll try consulting a university professor next week.\nB: If you'd like, I'll help too. Show me the proposal and I'll think it over.",
    questions: [
      {
        q: "What kind of app does A want to make?",
        choices: ["A gaming app", "A language exchange app", "A shopping app", "A weather app"],
        answerIndex: 1,
        explanation: "A says 語学を勉強する人が、お互いに教え合うアプリ (an app where language learners teach each other)."
      },
      {
        q: "What does B suggest doing first?",
        choices: ["Hiring a programmer", "Doing market research", "Buying ads", "Raising prices"],
        answerIndex: 1,
        explanation: "B says まずは市場調査をした方がいいんじゃない (shouldn't you do market research first)."
      },
      {
        q: "Who will A consult next week?",
        choices: ["A banker", "A lawyer", "A university professor", "An investor"],
        answerIndex: 2,
        explanation: "A says 来週、大学の先生に相談してみる (I'll try consulting a university professor next week)."
      },
      {
        q: "On what condition will B help?",
        choices: ["If A pays him", "After seeing the proposal", "Only on weekends", "If A quits his job"],
        answerIndex: 1,
        explanation: "B says 企画書を見せてくれたら考えるから (I'll think it over if you show me the proposal)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "plans"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-43 — At the car wash
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-43",
    title: "車[くるま]の洗車[せんしゃ]",
    level: "N3",
    context: "At the car wash — a customer and an attendant",
    text: "A: すみません、この車[くるま]を洗[あら]っていただきたいんですが。\nB: はい、コースは三種類[さんしゅるい]あります。早[はや]いコース、標準[ひょうじゅん]、それからワックスがけです。\nA: 標準[ひょうじゅん]でお願[ねが]いします。内側[うちがわ]も掃除[そうじ]してくれますか。\nB: いいえ、内側[うちがわ]は別[べつ]に三百円[さんびゃくえん]かかります。\nA: じゃ、お願[ねが]いします。どのくらい時間[じかん]がかかりますか。\nB: 三十分[さんじゅっぷん]ほどで終[お]わります。あちらでお待[ま]ちください。",
    translation: "A: Excuse me, I'd like to have this car washed.\nB: Yes, we have three courses: a quick course, standard, and a wax course.\nA: Standard, please. Will you also clean the inside?\nB: No, the inside costs an additional 300 yen.\nA: Then please do that too. How long will it take?\nB: It will be done in about thirty minutes. Please wait over there.",
    questions: [
      {
        q: "How many course options are there?",
        choices: ["Two", "Three", "Four", "Five"],
        answerIndex: 1,
        explanation: "B says コースは三種類あります (there are three kinds of courses)."
      },
      {
        q: "Which course does the customer choose?",
        choices: ["Quick", "Standard", "Wax", "Premium"],
        answerIndex: 1,
        explanation: "A says 標準でお願いします (standard, please)."
      },
      {
        q: "How much does interior cleaning cost?",
        choices: ["100 yen", "200 yen", "300 yen", "500 yen"],
        answerIndex: 2,
        explanation: "B says 内側は別に三百円かかります (the inside costs an additional 300 yen)."
      },
      {
        q: "How long will the wash take?",
        choices: ["About 10 minutes", "About 30 minutes", "About an hour", "About two hours"],
        answerIndex: 1,
        explanation: "B says 三十分ほどで終わります (it will finish in about 30 minutes)."
      }
    ],
    estMinutes: 3,
    tags: ["services", "car"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-44 — Talking about a museum visit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-44",
    title: "美術館[びじゅつかん]の展覧会[てんらんかい]",
    level: "N3",
    context: "Two friends talking after a museum visit",
    text: "A: 今日[きょう]の展覧会[てんらんかい]、どうだった？\nB: すごくよかったよ。特[とく]に、あの日本[にほん]の浮世絵[うきよえ]のコーナーが印象[いんしょう]的[てき]だった。\nA: 私[わたし]もそう思[おも]う。でも、人[ひと]が多[おお]すぎて、ゆっくり見[み]られなかったのが残念[ざんねん]だったな。\nB: そうだね。次[つぎ]は平日[へいじつ]に行[い]った方[ほう]がいいかもしれないね。\nA: ええ。来月[らいげつ]別[べつ]の展覧会[てんらんかい]があるそうだから、また一緒[いっしょ]に行[い]こう。",
    translation: "A: How was today's exhibition?\nB: It was really good. Especially the ukiyo-e corner was impressive.\nA: I think so too. But it was a pity that it was too crowded to look carefully.\nB: Right. Maybe it's better to go on a weekday next time.\nA: Yes. I hear there will be another exhibition next month, so let's go together again.",
    questions: [
      {
        q: "What did B find most impressive?",
        choices: ["The modern art section", "The ukiyo-e corner", "The sculpture hall", "The video room"],
        answerIndex: 1,
        explanation: "B says 日本の浮世絵のコーナーが印象的だった (the ukiyo-e corner was impressive)."
      },
      {
        q: "What was disappointing about the visit?",
        choices: ["The price was high", "Too crowded to look carefully", "It was closed", "No photos allowed"],
        answerIndex: 1,
        explanation: "A says 人が多すぎて、ゆっくり見られなかったのが残念だった (it was a pity it was too crowded to look carefully)."
      },
      {
        q: "When does B suggest going next time?",
        choices: ["On a weekend", "On a holiday", "On a weekday", "At night"],
        answerIndex: 2,
        explanation: "B says 次は平日に行った方がいいかもしれない (maybe better to go on a weekday next time)."
      },
      {
        q: "What will they do next month?",
        choices: ["Visit a different museum", "Go to another exhibition together", "Travel abroad", "Buy artwork"],
        answerIndex: 1,
        explanation: "A says 来月別の展覧会があるそうだから、また一緒に行こう (there's another exhibition next month, let's go together)."
      }
    ],
    estMinutes: 4,
    tags: ["art", "friends"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-45 — At the convenience store
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-45",
    title: "コンビニで",
    level: "N3",
    context: "At a convenience store — customer and clerk",
    text: "A: すみません、この切手[きって]を三枚[さんまい]と、ハガキを二枚[にまい]ください。\nB: はい、切手[きって]は八十円[はちじゅうえん]が三枚[さんまい]、ハガキは六十三円[ろくじゅうさんえん]が二枚[にまい]ですね。\nA: あと、このお弁当[べんとう]を温[あたた]めてもらえますか。\nB: はい、少[しょう]々お待[ま]ください。お熱[あつ]いかと思いますので、お気[き]をつけください。\nA: ありがとうございます。あ、ポイントカードはあります。\nB: はい、お預[あず]かりします。ポイントがたまりますので、次回[じかい]お使[つか]いください。",
    translation: "A: Excuse me, three of these stamps and two postcards, please.\nB: Yes, three 80-yen stamps and two 63-yen postcards.\nA: Also, could you heat up this bento?\nB: Yes, please wait a moment. It will be hot, so please be careful.\nA: Thank you. Oh, I have a point card.\nB: Yes, I'll take it. Points will accumulate, so please use them next time.",
    questions: [
      {
        q: "How many stamps does the customer buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "A says 切手を三枚ください (three stamps, please)."
      },
      {
        q: "What does the customer ask to be heated?",
        choices: ["A drink", "A bento", "Bread", "Soup"],
        answerIndex: 1,
        explanation: "A says このお弁当を温めてもらえますか (could you heat up this bento)."
      },
      {
        q: "Why does the clerk warn the customer?",
        choices: ["The bento is hot", "The floor is wet", "The door is closed", "The card is expired"],
        answerIndex: 0,
        explanation: "B says お熱かと思いますので、お気をつけください (it will be hot, please be careful)."
      },
      {
        q: "What does the customer hand over at the end?",
        choices: ["A coupon", "A receipt", "A point card", "An ID"],
        answerIndex: 2,
        explanation: "A says ポイントカードはあります (I have a point card)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "daily"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-46 — Discussing a retirement plan
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-46",
    title: "定年[ていねん]後[ご]の生活[せいかつ]",
    level: "N3",
    context: "A couple discussing retirement plans",
    text: "A: お父[とう]さん、定年[ていねん]まであと三年[さんねん]だね。\nB: ああ、早[はや]いな。定年[ていねん]後[ご]は田舎[いなか]で暮[く]らしたいと思[おも]っているんだ。\nA: ええ？私[わたし]は近[ちか]くに子[こ]どもがいる場所[ばしょ]がいいんじゃないかしら。\nB: そうだね。でも、畑[はたけ]仕事[しごと]もしてみたいし、自然[しぜん]の中[なか]で暮[く]らすのは悪[わる]くないと思[おも]うよ。\nA: じゃ、子[こ]どもたちと相談[そうだん]してから決[き]めましょう。",
    translation: "A: Dear, it's only three more years until your retirement.\nB: Ah, it's going fast. After retirement, I'd like to live in the countryside.\nA: Huh? Wouldn't it be better to be somewhere near our children?\nB: You're right. But I'd also like to try farming, and living close to nature isn't bad.\nA: Then let's decide after talking with the children.",
    questions: [
      {
        q: "How many years until retirement?",
        choices: ["One year", "Two years", "Three years", "Five years"],
        answerIndex: 2,
        explanation: "A says 定年まであと三年だね (three more years until retirement)."
      },
      {
        q: "Where does the husband want to live after retirement?",
        choices: ["In the city", "In the countryside", "Abroad", "Near the office"],
        answerIndex: 1,
        explanation: "B says 定年後は田舎で暮らしたい (I want to live in the countryside after retirement)."
      },
      {
        q: "What does the wife prefer?",
        choices: ["A place near their children", "A big city", "A foreign country", "A mountain village"],
        answerIndex: 0,
        explanation: "A says 近くに子どもがいる場所がいいんじゃないかしら (wouldn't a place near the children be better)."
      },
      {
        q: "What will they do before deciding?",
        choices: ["Visit a realtor alone", "Talk with their children", "Move immediately", "Sell the house first"],
        answerIndex: 1,
        explanation: "A says 子どもたちと相談してから決めましょう (let's decide after consulting the children)."
      }
    ],
    estMinutes: 4,
    tags: ["family", "future"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-47 — At the bike shop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-47",
    title: "自転車[じてんしゃ]屋[や]で",
    level: "N3",
    context: "At a bike shop — customer and mechanic",
    text: "A: すみません、この自転車[じてんしゃ]のブレーキが効[き]かなくなったんです。\nB: どれどれ、見[み]せてください。ああ、パッドがすり減[へ]っていますね。\nA: 直[なお]すのにどのくらいかかりますか。\nB: 部品[ぶひん]を交換[こうかん]すれば、二千円[にせんえん]くらいで直[なお]せます。今日中[きょうじゅう]に終[お]わりますよ。\nA: ありがとうございます。夕方[ゆうがた]に取[と]りに来[き]ます。\nB: はい、準備[じゅんび]しておきます。お名前[なまえ]をここに書[か]いてください。",
    translation: "A: Excuse me, the brakes on this bike have stopped working.\nB: Let me see. Ah, the pads are worn down.\nA: How much will it cost to fix?\nB: If we replace the parts, we can fix it for about 2,000 yen. It'll be done today.\nA: Thank you. I'll come pick it up in the evening.\nB: Yes, I'll have it ready. Please write your name here.",
    questions: [
      {
        q: "What is wrong with the bike?",
        choices: ["The tires are flat", "The brakes don't work", "The chain is broken", "The seat is loose"],
        answerIndex: 1,
        explanation: "A says ブレーキが効かなくなったんです (the brakes have stopped working)."
      },
      {
        q: "What is the cause according to the mechanic?",
        choices: ["The pads are worn", "The cable is cut", "The frame is bent", "The wheel is cracked"],
        answerIndex: 0,
        explanation: "B says パッドがすり減っていますね (the pads are worn down)."
      },
      {
        q: "How much will the repair cost?",
        choices: ["About 1,000 yen", "About 2,000 yen", "About 5,000 yen", "About 10,000 yen"],
        answerIndex: 1,
        explanation: "B says 二千円くらいで直せます (can fix it for about 2,000 yen)."
      },
      {
        q: "When will the customer pick up the bike?",
        choices: ["In the morning", "At noon", "In the evening", "The next day"],
        answerIndex: 2,
        explanation: "A says 夕方に取りに来ます (I'll come pick it up in the evening)."
      }
    ],
    estMinutes: 3,
    tags: ["repair", "bike"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-48 — Talking about a concert
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-48",
    title: "コンサートの話[はなし]",
    level: "N3",
    context: "Two friends discussing a concert",
    text: "A: 昨日[きのう]のコンサート、行[い]った？\nB: うん、行[い]ったよ。ソールドアウトだったけど、最後[さいご]の曲[きょく]は特[とく]によかった。\nA: 私[わたし]も行[い]きたかったんだけど、チケットが売[う]り切[き]れちゃって。\nB: それは残念[ざんねん]だったね。でも、来月[らいげつ]別[べつ]のバンドのライブがあるよ。\nA: え、本当[ほんとう]？詳[くわ]しく教[おし]えて。\nB: うん、今度[こんど]の週末[しゅうまつ]にネットで予約[よやく]してみようと思[おも]っている。",
    translation: "A: Did you go to yesterday's concert?\nB: Yeah, I went. It was sold out, but the last song was especially good.\nA: I wanted to go too, but the tickets were sold out.\nB: That's too bad. But there's another band's live show next month.\nA: Really? Tell me more.\nB: Sure, I'm thinking of trying to book online this weekend.",
    questions: [
      {
        q: "How was yesterday's concert according to B?",
        choices: ["It was empty", "It was sold out", "It was cancelled", "It was free"],
        answerIndex: 1,
        explanation: "B says ソールドアウトだったけど (it was sold out, but)."
      },
      {
        q: "What part did B like most?",
        choices: ["The opening", "The middle section", "The last song", "The encore"],
        answerIndex: 2,
        explanation: "B says 最後の曲は特に良かった (the last song was especially good)."
      },
      {
        q: "Why couldn't A go to the concert?",
        choices: ["She was sick", "Tickets were sold out", "She had to work", "She forgot"],
        answerIndex: 1,
        explanation: "A says チケットが売り切れちゃって (the tickets were sold out)."
      },
      {
        q: "What will B do this weekend?",
        choices: ["Go to a live show", "Book tickets online", "Visit A's house", "Call the band"],
        answerIndex: 1,
        explanation: "B says 今度の週末にネットで予約してみようと思っている (I'm thinking of trying to book online this weekend)."
      }
    ],
    estMinutes: 4,
    tags: ["music", "friends"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-49 — At the flower shop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-49",
    title: "花[はな]屋[や]で",
    level: "N3",
    context: "At a flower shop — customer and florist",
    text: "A: すみません、母[はは]の誕生日[たんじょうび]のプレゼントに花束[はなたば]をお願[ねが]いしたいんですが。\nB: はい、お予算[よさん]はどのくらいですか。\nA: 三千円[さんぜんえん]くらいで、明[あか]るい色[いろ]がいいんですが。\nB: それでは、カーネーションと季節[きせつ]の花[はな]を組[く]み合[あ]わせてみましょうか。\nA: いいですね。あと、メッセージカードもつけてもらえますか。\nB: はい、無料[むりょう]です。お好[この]みの言葉[ことば]をこちらに書[か]いてください。",
    translation: "A: Excuse me, I'd like a bouquet as a birthday present for my mother.\nB: Sure, what's your budget?\nA: Around 3,000 yen, and I'd like bright colors.\nB: Then shall I combine carnations with seasonal flowers?\nA: That sounds nice. Also, could you add a message card?\nB: Yes, it's free. Please write your preferred words here.",
    questions: [
      {
        q: "What is the bouquet for?",
        choices: ["A wedding", "Mother's birthday present", "A funeral", "A shop opening"],
        answerIndex: 1,
        explanation: "A says 母の誕生日のプレゼントに花束をお願いしたい (I'd like a bouquet for my mother's birthday present)."
      },
      {
        q: "What is the customer's budget?",
        choices: ["1,000 yen", "2,000 yen", "3,000 yen", "5,000 yen"],
        answerIndex: 2,
        explanation: "A says 三千円くらいで (around 3,000 yen)."
      },
      {
        q: "What flowers will the florist use?",
        choices: ["Roses and lilies", "Carnations and seasonal flowers", "Tulips and daisies", "Sunflowers only"],
        answerIndex: 1,
        explanation: "B says カーネーションと季節の花を組み合わせてみましょうか (shall I combine carnations with seasonal flowers)."
      },
      {
        q: "How much does the message card cost?",
        choices: ["100 yen", "200 yen", "It is free", "300 yen"],
        answerIndex: 2,
        explanation: "B says 無料です (it is free)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "gift"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-50 — Discussing a diet plan
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-50",
    title: "ダイエットの計画[けいかく]",
    level: "N3",
    context: "Two coworkers discussing a diet",
    text: "A: 田中[たなか]さん、最近[さいきん]少[すこ]しやせましたか。\nB: ええ、二[に]か月[げつ]で三[さん]キロやせたんですよ。\nA: すごい！どうやってやせたんですか。\nB: 毎晩[まいばん]三十分[さんじゅっぷん]散歩[さんぽ]して、甘[あま]いものを控[ひか]えるようにしました。\nA: それだけですか。\nB: ええ、無理[むり]なダイエットは体[からだ]に悪[わる]いと思[おも]ったので、続[つづ]けられることを選[えら]びました。",
    translation: "A: Tanaka-san, have you lost a little weight recently?\nB: Yes, I lost three kilos in two months.\nA: Amazing! How did you lose weight?\nB: I started walking for thirty minutes every night and tried to cut back on sweets.\nA: That's all?\nB: Yes. I thought extreme diets were bad for the body, so I chose things I could keep doing.",
    questions: [
      {
        q: "How much weight did Tanaka lose?",
        choices: ["Two kilos in a month", "Three kilos in two months", "Five kilos in a week", "One kilo in three months"],
        answerIndex: 1,
        explanation: "B says 二か月で三キロやせたんですよ (I lost three kilos in two months)."
      },
      {
        q: "What does she do every night?",
        choices: ["Runs for an hour", "Walks for 30 minutes", "Does yoga for 15 minutes", "Swims for 40 minutes"],
        answerIndex: 1,
        explanation: "B says 毎晩三十分散歩して (walking 30 minutes every night)."
      },
      {
        q: "What did she cut back on?",
        choices: ["Rice", "Meat", "Sweets", "Bread"],
        answerIndex: 2,
        explanation: "B says 甘いものを控えるようにしました (I tried to cut back on sweets)."
      },
      {
        q: "Why did she choose this approach?",
        choices: ["It is the fastest", "Extreme diets are bad for the body", "A doctor told her to", "It is the cheapest"],
        answerIndex: 1,
        explanation: "B says 無理なダイエットは体に悪いと思ったので、続けられることを選びました (extreme diets are bad, so I chose sustainable things)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "lifestyle"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-51 — At the public bath
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-51",
    title: "銭湯[せんとう]で",
    level: "N3",
    context: "At a public bath — a first-time visitor and the attendant",
    text: "A: いらっしゃいませ。四百六十円[よんひゃくろくじゅうえん]になります。\nB: はい。初[はじ]めてなんですが、何[なに]かルールはありますか。\nA: はい、入[はい]る前[まえ]に体[からだ]を洗[あら]ってからお湯[ゆ]に入[はい]ってください。\nB: わかりました。タオルは持[も]ってきています。\nA: お風呂[ふろ]場[ば]の中[なか]では静[しず]かにしてください。他[ほか]のお客様[きゃくさま]の迷惑[めいわく]になりますから。\nB: はい、気[き]をつけます。",
    translation: "A: Welcome. That will be 460 yen.\nB: Here. It's my first time, are there any rules?\nA: Yes, please wash your body before entering the bath.\nB: Understood. I've brought a towel.\nA: Please be quiet inside the bath area, as it will disturb other customers.\nB: Yes, I'll be careful.",
    questions: [
      {
        q: "How much is the entrance fee?",
        choices: ["360 yen", "460 yen", "560 yen", "660 yen"],
        answerIndex: 1,
        explanation: "A says 四百六十円になります (it's 460 yen)."
      },
      {
        q: "What should be done before entering the bath?",
        choices: ["Wash the body", "Change clothes", "Pay extra", "Take off shoes"],
        answerIndex: 0,
        explanation: "A says 入る前に体を洗ってからお湯に入ってください (wash your body before entering)."
      },
      {
        q: "What did the customer bring?",
        choices: ["Soap", "A towel", "Slippers", "A swimsuit"],
        answerIndex: 1,
        explanation: "B says タオルは持ってきています (I've brought a towel)."
      },
      {
        q: "Why should one be quiet inside?",
        choices: ["Echo is loud", "It disturbs other customers", "Attendants need rest", "Phones may ring"],
        answerIndex: 1,
        explanation: "A says 他のお客様の迷惑になりますから (because it will disturb other customers)."
      }
    ],
    estMinutes: 3,
    tags: ["culture", "daily"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-52 — Talking about a photography hobby
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-52",
    title: "写真[しゃしん]趣味[しゅみ]",
    level: "N3",
    context: "Two friends talking about photography",
    text: "A: 山田[やまだ]さん、最近[さいきん]カメラを買[か]ったそうですね。\nB: ええ、先週[せんしゅう]やっと欲[ほ]しかった一眼[いちがん]レフを買[か]いました。\nA: すごい！どんな写真[しゃしん]を撮[と]っているんですか。\nB: 今[いま]は主[おも]に風景[ふうけい]と街[まち]の人[ひと]の様子[ようす]を撮[と]っています。\nA: 上手[じょうず]ですね。今度[こんど]一緒[いっしょ]に撮影[さつえい]に行[い]きませんか。\nB: ぜひ！来月[らいげつ]の初[はじ]めに海[うみ]に行[い]こうと思[おも]っているので、どうですか。",
    translation: "A: Yamada-san, I hear you bought a camera recently.\nB: Yes, last week I finally bought the SLR I'd been wanting.\nA: Wow! What kind of photos are you taking?\nB: Right now I mainly photograph landscapes and people on the street.\nA: You're good. Would you like to go shooting together sometime?\nB: Definitely! I'm thinking of going to the sea at the start of next month, how about it?",
    questions: [
      {
        q: "What did Yamada buy last week?",
        choices: ["A compact camera", "A single-lens reflex camera", "A smartphone", "A video camera"],
        answerIndex: 1,
        explanation: "B says 一眼レフを買いました (bought an SLR camera)."
      },
      {
        q: "What does he mainly photograph now?",
        choices: ["Food and pets", "Landscapes and street people", "Sports events", "Weddings"],
        answerIndex: 1,
        explanation: "B says 主に風景と街の人の様子を撮っています (mainly landscapes and street people)."
      },
      {
        q: "What does A suggest?",
        choices: ["Buying a new lens", "Going shooting together", "Entering a contest", "Selling photos online"],
        answerIndex: 1,
        explanation: "A says 今度一緒に撮影に行きませんか (shall we go shooting together sometime)."
      },
      {
        q: "Where does Yamada plan to go next month?",
        choices: ["To the mountains", "To the sea", "To a foreign country", "To a studio"],
        answerIndex: 1,
        explanation: "B says 来月の初めに海に行こうと思っている (I'm thinking of going to the sea at the start of next month)."
      }
    ],
    estMinutes: 4,
    tags: ["hobby", "camera"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-53 — At the stationery store
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-53",
    title: "文房具[ぶんぼうぐ]屋[や]で",
    level: "N3",
    context: "At a stationery store — customer and clerk",
    text: "A: すみません、このノートと黒[くろ]のボールペンを三本[さんぼん]ください。\nB: はい、ノートは二百円[にひゃくえん]、ボールペンは一本[いっぽん]百二十円[ひゃくにじゅうえん]ですね。\nA: あと、名刺[めいし]ケースはありますか。\nB: はい、こちらの棚[たな]に何種類[なんしゅるい]かあります。お好[この]みの色[いろ]はありますか。\nA: 茶[ちゃ]色[いろ]か紺[こん]がいいんですが。\nB: では、こちらはいかがですか。五百円[ごひゃくえん]です。",
    translation: "A: Excuse me, this notebook and three black ballpoint pens, please.\nB: Yes, the notebook is 200 yen, and the pens are 120 yen each.\nA: Also, do you have business card cases?\nB: Yes, there are several kinds on this shelf. Do you have a preferred color?\nA: I'd like brown or navy.\nB: Then how about this one? It's 500 yen.",
    questions: [
      {
        q: "How many pens does the customer buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "A says ボールペンを三本ください (three pens, please)."
      },
      {
        q: "How much is one pen?",
        choices: ["100 yen", "120 yen", "150 yen", "200 yen"],
        answerIndex: 1,
        explanation: "B says ボールペンは一本百二十円 (the pens are 120 yen each)."
      },
      {
        q: "What else does the customer look for?",
        choices: ["A notebook", "A business card case", "A pencil case", "A folder"],
        answerIndex: 1,
        explanation: "A asks 名刺ケースはありますか (do you have business card cases)."
      },
      {
        q: "What color does the customer want?",
        choices: ["Black or white", "Red or blue", "Brown or navy", "Green or yellow"],
        answerIndex: 2,
        explanation: "A says 茶色か紺がいいんですが (brown or navy would be good)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "office"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-54 — Discussing a language exchange
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-54",
    title: "語学[ごがく]交換[こうかん]",
    level: "N3",
    context: "Two students discussing a language exchange partner",
    text: "A: 李[り]さん、来月[らいげつ]から語学[ごがく]交換[こうかん]の相手[あいて]を探[さが]すつもりなんです。\nB: いいですね。私[わたし]は中国語[ちゅうごくご]を勉強[べんきょう]したいので、誰[だれ]かいませんか。\nA: ちょうど私[わたし]の友人[ゆうじん]が日本語[にほんご]を練習[れんしゅう]したがっているんですよ。\nB: 本当[ほんとう]ですか？週[しゅう]に一回[いっかい]、私[わたし]が中国語[ちゅうごくご]を教[おし]えて、彼[かれ]が日本語[にほんご]を教[おし]えるのはどうですか。\nA: いいですね！彼[かれ]に連絡[れんらく]してみます。",
    translation: "A: Li-san, I'm planning to look for a language exchange partner from next month.\nB: Sounds nice. I want to study Chinese, do you know anyone?\nA: Actually, a friend of mine wants to practice Japanese.\nB: Really? How about once a week — I teach Chinese and he teaches Japanese?\nA: That sounds great! I'll try contacting him.",
    questions: [
      {
        q: "What does A plan to do next month?",
        choices: ["Travel to China", "Look for a language exchange partner", "Start a job", "Move abroad"],
        answerIndex: 1,
        explanation: "A says 来月から語学交換の相手を探すつもりなんです (planning to look for a language exchange partner from next month)."
      },
      {
        q: "What language does B want to study?",
        choices: ["Japanese", "English", "Chinese", "Korean"],
        answerIndex: 2,
        explanation: "B says 中国語を勉強したい (I want to study Chinese)."
      },
      {
        q: "How often would they meet?",
        choices: ["Every day", "Once a week", "Twice a month", "Once a month"],
        answerIndex: 1,
        explanation: "B says 週に一回 (once a week)."
      },
      {
        q: "Who will A contact?",
        choices: ["Her teacher", "Her friend", "Her family", "A classmate"],
        answerIndex: 1,
        explanation: "A says 彼に連絡してみます (I'll try contacting him, referring to the friend)."
      }
    ],
    estMinutes: 4,
    tags: ["language", "study"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-55 — At the coffee shop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-55",
    title: "喫茶店[きっさてん]で",
    level: "N3",
    context: "At a coffee shop — customer and barista",
    text: "A: すみません、ブレンドコーヒーとシュガートーストをお願[ねが]いします。\nB: はい。コーヒーはホットとアイスがありますが、どちらになさいますか。\nA: ホットでお願[ねが]いします。あと、お湯[ゆ]をもう一杯[いっぱい]いただいてもいいですか。\nB: ええ、もちろん。少[しょう]々お待[ま]ください。お水[みず]はセルフサービスになっています。\nA: ありがとうございます。Wi-Fiは使[つか]えますか。\nB: はい、パスワードはメニューの裏[うら]に書[か]いてあります。",
    translation: "A: Excuse me, a blend coffee and sugar toast, please.\nB: Sure. We have hot and iced coffee — which would you like?\nA: Hot, please. Also, may I have another cup of hot water?\nB: Yes, of course. Please wait a moment. Water is self-service.\nA: Thank you. Can I use the Wi-Fi?\nB: Yes, the password is written on the back of the menu.",
    questions: [
      {
        q: "What does the customer order?",
        choices: ["Tea and cake", "Blend coffee and sugar toast", "Latte and sandwich", "Juice and cookie"],
        answerIndex: 1,
        explanation: "A says ブレンドコーヒーとシュガートーストをお願いします (blend coffee and sugar toast, please)."
      },
      {
        q: "Which coffee does the customer choose?",
        choices: ["Iced", "Hot", "Decaf", "Cold brew"],
        answerIndex: 1,
        explanation: "A says ホットでお願いします (hot, please)."
      },
      {
        q: "Where is water available?",
        choices: ["Brought to the table", "Self-service", "Only with purchase", "Not available"],
        answerIndex: 1,
        explanation: "B says お水はセルフサービスになっています (water is self-service)."
      },
      {
        q: "Where is the Wi-Fi password?",
        choices: ["On a sign at the door", "On the back of the menu", "On the receipt", "On the cup"],
        answerIndex: 1,
        explanation: "B says パスワードはメニューの裏に書いてあります (the password is written on the back of the menu)."
      }
    ],
    estMinutes: 3,
    tags: ["cafe", "daily"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-56 — Talking about a garden
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-56",
    title: "庭[にわ]の手入[てい]れ",
    level: "N3",
    context: "A gardener and a homeowner discussing the garden",
    text: "A: お宅[たく]の庭[にわ]、見[み]せていただきましたが、だいぶ荒[あ]れていますね。\nB: ええ、最近[さいきん]忙[いそが]しくて、手入[てい]れができなかったんです。\nA: まず、雑草[ざっそう]を抜[ぬ]いて、枝[えだ]を剪定[せんてい]する必要[ひつよう]があります。\nB: どのくらい時間[じかん]がかかりますか。\nA: 三人[さんにん]で半日[はんじつ]もあれば、きれいになりますよ。\nB: じゃ、お願[ねが]いします。来週[らいしゅう]の土曜日[どようび]はいかがですか。",
    translation: "A: I took a look at your garden — it's quite overgrown.\nB: Yes, I've been busy lately and couldn't tend to it.\nA: First, we need to pull the weeds and prune the branches.\nB: How long will it take?\nA: With three people, half a day should make it look nice.\nB: Then please do it. How about next Saturday?",
    questions: [
      {
        q: "What's the condition of the garden?",
        choices: ["Nicely maintained", "Quite overgrown", "Brand new", "Empty"],
        answerIndex: 1,
        explanation: "A says だいぶ荒れていますね (it's quite overgrown)."
      },
      {
        q: "Why hasn't the homeowner maintained it?",
        choices: ["He has been busy", "He was sick", "He lacked tools", "He was abroad"],
        answerIndex: 0,
        explanation: "B says 最近忙しくて、手入れができなかった (I've been busy and couldn't tend to it)."
      },
      {
        q: "What's the first thing to do?",
        choices: ["Water the plants", "Pull weeds and prune branches", "Plant new flowers", "Build a fence"],
        answerIndex: 1,
        explanation: "A says 雑草を抜いて、枝を剪定する必要がある (we need to pull weeds and prune branches)."
      },
      {
        q: "When does the homeowner suggest doing the work?",
        choices: ["Today", "Tomorrow", "Next Saturday", "Next month"],
        answerIndex: 2,
        explanation: "B says 来週の土曜日はいかがですか (how about next Saturday)."
      }
    ],
    estMinutes: 4,
    tags: ["garden", "services"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-57 — At the shoe repair
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-57",
    title: "靴[くつ]の修繕[しゅうぜん]",
    level: "N3",
    context: "At a shoe repair shop — customer and cobbler",
    text: "A: すみません、この靴[くつ]のかかとがすり減[へ]っているんですが、直[なお]せますか。\nB: はい、見[み]せてください。ゴムソールを取[と]り換[か]えれば、まだ使[つか]えますよ。\nA: いくらくらいかかりますか。\nB: 二千五百円[にせんごひゃくえん]になります。三日[みっか]くらいで直[なお]せます。\nA: じゃ、お願[ねが]いします。領収書[りょうしゅうしょ]ももらえますか。\nB: はい、こちらが引[ひ]き換[か]え券[けん]です。お引[ひ]き取[と]りの際[さい]にお渡[わた]しください。",
    translation: "A: Excuse me, the heels of these shoes are worn down — can you fix them?\nB: Yes, let me see. If we replace the rubber sole, you can still use them.\nA: About how much will it cost?\nB: It will be 2,500 yen. We can fix it in about three days.\nA: Then please go ahead. Can I also get a receipt?\nB: Yes, here's your claim ticket. Please hand it in when you pick them up.",
    questions: [
      {
        q: "What's wrong with the shoes?",
        choices: ["The laces are broken", "The heels are worn", "The leather is torn", "The color faded"],
        answerIndex: 1,
        explanation: "A says かかとがすり減っているんですが (the heels are worn down)."
      },
      {
        q: "What needs to be replaced?",
        choices: ["The laces", "The insole", "The rubber sole", "The buckle"],
        answerIndex: 2,
        explanation: "B says ゴムソールを取り換えれば (if we replace the rubber sole)."
      },
      {
        q: "How much will it cost?",
        choices: ["1,500 yen", "2,000 yen", "2,500 yen", "3,500 yen"],
        answerIndex: 2,
        explanation: "B says 二千五百円になります (it will be 2,500 yen)."
      },
      {
        q: "What does the customer receive?",
        choices: ["A receipt only", "A claim ticket", "New shoes", "A discount coupon"],
        answerIndex: 1,
        explanation: "B says こちらが引き換え券です (here's your claim ticket)."
      }
    ],
    estMinutes: 4,
    tags: ["repair", "services"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-58 — Discussing a move
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-58",
    title: "引越[ひっこ]しの相談[そうだん]",
    level: "N3",
    context: "A couple discussing an upcoming move",
    text: "A: 来月[らいげつ]、引越[ひっこ]すことになったんだけど、どうしようか。\nB: 荷物[にもつ]は多[おお]いから、業者[ぎょうしゃ]に頼[たの]んだ方[ほう]がいいんじゃない？\nA: そうだね。でも、費用[ひよう]が気[き]になるな。\nB: 二[に]、三社[さんしゃ]から見積[みつも]りを取[と]って比[くら]べてみよう。\nA: それから、子[こ]どもの学校[がっこう]の手続[てつづ]きも忘[わす]れないようにしないと。\nB: ええ、来週[らいしゅう]早速[さっそく]、役所[やくしょ]に行[い]って手続[てつづ]きをしよう。",
    translation: "A: We've decided to move next month, but what should we do?\nB: Since we have a lot of stuff, wouldn't it be better to hire movers?\nA: Right. But I'm worried about the cost.\nB: Let's get estimates from two or three companies and compare.\nA: Also, we mustn't forget the paperwork for the kids' school.\nB: Yes, let's go to the city office first thing next week and handle it.",
    questions: [
      {
        q: "When will they move?",
        choices: ["This month", "Next month", "Next year", "Not decided"],
        answerIndex: 1,
        explanation: "A says 来月、引越すことになった (we've decided to move next month)."
      },
      {
        q: "What does B suggest for moving?",
        choices: ["Doing it themselves", "Asking friends", "Hiring movers", "Renting a small truck"],
        answerIndex: 2,
        explanation: "B says 業者に頼んだ方がいいんじゃない (wouldn't it be better to hire movers)."
      },
      {
        q: "What should they get from moving companies?",
        choices: ["Discounts", "Estimates", "Brochures", "References"],
        answerIndex: 1,
        explanation: "B says 二、三社から見積もりを取って比べてみよう (let's get estimates from two or three companies and compare)."
      },
      {
        q: "What does B remind A about?",
        choices: ["Paying rent", "Canceling utilities", "The kids' school paperwork", "Buying new furniture"],
        answerIndex: 2,
        explanation: "A says 子どもの学校の手続きも忘れないようにしないと (we mustn't forget the kids' school paperwork), and B agrees."
      }
    ],
    estMinutes: 4,
    tags: ["moving", "family"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-59 — Talking about a podcast
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-59",
    title: "ポッドキャストの話[はなし]",
    level: "N3",
    context: "Two coworkers discussing podcasts",
    text: "A: 田中[たなか]さん、最近[さいきん]ポッドキャストをよく聴[き]くそうですね。\nB: ええ、通勤[つうきん]中[ちゅう]に日本[にほん]の歴史[れきし]についての番組[ばんぐみ]を聴[き]いています。\nA: 面白[おもしろ]いですか。\nB: ええ、特[とく]に江戸[えど]時代[じだい]の話[はなし]が詳[くわ]しくて、毎回[まいかい]楽[たの]しみです。\nA: 私[わたし]も聴[き]いてみようかな。\nB: お勧[すす]めしますよ。アプリを入[い]れるだけなので、簡単[かんたん]ですから。",
    translation: "A: Tanaka-san, I hear you've been listening to podcasts a lot recently.\nB: Yes, I listen to a show about Japanese history during my commute.\nA: Is it interesting?\nB: Yes, especially the Edo-period stories are detailed, and I look forward to every episode.\nA: Maybe I'll try listening too.\nB: I recommend it. You just install the app, so it's easy.",
    questions: [
      {
        q: "When does Tanaka listen to podcasts?",
        choices: ["Before bed", "During lunch", "During commute", "On weekends"],
        answerIndex: 2,
        explanation: "B says 通勤中に聴いています (I listen during my commute)."
      },
      {
        q: "What's the topic of the podcast?",
        choices: ["Cooking", "Japanese history", "Sports news", "Business tips"],
        answerIndex: 1,
        explanation: "B says 日本の歴史についての番組を聴いています (I listen to a show about Japanese history)."
      },
      {
        q: "What does she especially enjoy?",
        choices: ["Modern stories", "Edo-period stories", "Interview segments", "Music interludes"],
        answerIndex: 1,
        explanation: "B says 特に江戸時代の話が詳しくて (the Edo-period stories are especially detailed)."
      },
      {
        q: "What does B say about starting?",
        choices: ["It costs money", "It requires a class", "It's easy, just install the app", "It needs special equipment"],
        answerIndex: 2,
        explanation: "B says アプリを入れるだけなので、簡単ですから (you just install the app, so it's easy)."
      }
    ],
    estMinutes: 3,
    tags: ["media", "commute"]
  },

  // ───────────────────────────────────────────────────────────
  // l-n3-60 — At the toy store
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-60",
    title: "おもちゃ屋[や]で",
    level: "N3",
    context: "At a toy store — customer and clerk",
    text: "A: すみません、五歳[ごさい]の男[おとこ]の子[こ]の誕生日[たんじょうび]プレゼントを探[さが]しているんですが。\nB: はい、この年齢[ねんれい]なら、ブロックのおもちゃやパズルが人気[にんき]ですよ。\nA: ブロックにしようかな。どれがいいですか。\nB: こちらは電車[でんしゃ]が作[つく]れるセットで、お子様[こさま]に好評[こうひょう]です。\nA: いいですね。これをいただきます。ラッピングはできますか。\nB: はい、無料[むりょう]です。お好[この]みのリボンを選[えら]んでください。",
    translation: "A: Excuse me, I'm looking for a birthday present for a five-year-old boy.\nB: Sure, for this age, block toys and puzzles are popular.\nA: Maybe blocks. Which one is good?\nB: This is a set that can build a train, and it's well received by kids.\nA: That's nice. I'll take this one. Can you gift wrap it?\nB: Yes, it's free. Please choose your preferred ribbon.",
    questions: [
      {
        q: "Who is the gift for?",
        choices: ["A 3-year-old girl", "A 5-year-old boy", "A 7-year-old girl", "A 10-year-old boy"],
        answerIndex: 1,
        explanation: "A says 五歳の男の子の誕生日プレゼント (a birthday present for a five-year-old boy)."
      },
      {
        q: "What toys are popular for that age?",
        choices: ["Dolls and dress-up", "Blocks and puzzles", "Video games", "Model kits"],
        answerIndex: 1,
        explanation: "B says ブロックのおもちゃやパズルが人気ですよ (block toys and puzzles are popular)."
      },
      {
        q: "What can the chosen set build?",
        choices: ["A castle", "A train", "A robot", "A house"],
        answerIndex: 1,
        explanation: "B says 電車が作れるセット (a set that can build a train)."
      },
      {
        q: "How much does gift wrapping cost?",
        choices: ["100 yen", "200 yen", "It is free", "300 yen"],
        answerIndex: 2,
        explanation: "B says 無料です (it is free)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "gift"]
  }
];
