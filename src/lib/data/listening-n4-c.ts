import type { ListeningData } from "@/lib/types";

export const listeningN4C: ListeningData[] = [
  {
    id: "l-n4-21",
    title: "Preparing a Business Presentation",
    level: "N4",
    context: "Two coworkers preparing a presentation in an office meeting room",
    text: "A: 来週[らいしゅう]の発表[はっぴょう]の準備[じゅんび]はどうですか。\nB: 資料[しりょう]はほぼできたんですが、スライドの写真[しゃしん]がまだ足[た]りません。\nA: 何枚[なんまい]くらい必要[ひつよう]ですか。\nB: あと五枚[ごまい]くらい欲[ほ]しいです。グラフも見直[みなお]した方[ほう]がいいでしょうか。\nA: はい、お客様[きゃくさま]に分[わ]かりやすく説明[せつめい]するために、シンプルなグラフがいいですよ。\nB: 分[わ]かりました。明日[あした]までに直[なお]して、先生[せんせい]に見[み]せます。",
    translation: "A: How is the preparation for next week's presentation?\nB: The materials are almost done, but we still don't have enough photos for the slides.\nA: About how many do you need?\nB: I'd like about five more. Should I also revise the graphs?\nA: Yes. In order to explain clearly to the clients, simple graphs are better.\nB: Understood. I'll fix them by tomorrow and show them to the professor.",
    questions: [
      {
        q: "What is still missing for the slides?",
        choices: [
          "The text data",
          "Photos",
          "The title page",
          "The conclusion slide"
        ],
        answerIndex: 1,
        explanation: "B says the photos for the slides are still not enough."
      },
      {
        q: "How many more does B want?",
        choices: ["About 3", "About 5", "About 10", "About 15"],
        answerIndex: 1,
        explanation: "B says he wants about five more."
      },
      {
        q: "What kind of graphs does A recommend?",
        choices: [
          "Colorful ones",
          "Detailed ones",
          "Simple ones",
          "Large ones"
        ],
        answerIndex: 2,
        explanation: "A says simple graphs are easier for the clients to understand."
      },
      {
        q: "When will B finish the revisions?",
        choices: ["Today", "By tomorrow", "By next week", "After the presentation"],
        answerIndex: 1,
        explanation: "B says he will fix them by tomorrow and show them to the professor."
      }
    ],
    estMinutes: 4,
    tags: ["business", "presentation"]
  },
  {
    id: "l-n4-22",
    title: "Renting an Apartment",
    level: "N4",
    context: "A customer and an agent talking at a real estate agency",
    text: "A: いらっしゃいませ。どんなお部屋[へや]をお探[さが]しですか。\nB: 駅[えき]から近[ちか]くて、家賃[やちん]が七万円[しちまんえん]くらいのアパートがいいです。\nA: 広[ひろ]さはどのくらいがいいですか。\nB: 二人[ふたり]で住[す]むので、二DK[にでーけー]以上[いじょう]がいいです。\nA: これが条件[じょうけん]に合[あ]う物件[ぶっけん]です。来週[らいしゅう]見[み]に行[い]きませんか。\nB: いいですね。でも、礼金[れいきん]や敷金[しききん]はいくらかかりますか。\nA: 礼金[れいきん]が一ヶ月[いっかげつ]分[ぶん]、敷金[しききん]が二ヶ月[にかげつ]分[ぶん]です。",
    translation: "A: Welcome. What kind of room are you looking for?\nB: I'd like an apartment close to the station, with rent around 70,000 yen.\nA: How large would you like it?\nB: Since two people will live there, I'd like at least a 2DK.\nA: This is a property that matches your conditions. Would you like to go see it next week?\nB: That sounds good. But how much are the key money and deposit?\nA: Key money is one month's worth, and the deposit is two months' worth.",
    questions: [
      {
        q: "What kind of location does B want?",
        choices: [
          "Close to a park",
          "Close to the station",
          "Close to a school",
          "Close to a hospital"
        ],
        answerIndex: 1,
        explanation: "B says he wants an apartment close to the station."
      },
      {
        q: "How many people will live there?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "B says two people will live there, so he wants at least a 2DK."
      },
      {
        q: "How much is the deposit?",
        choices: [
          "One month's rent",
          "Two months' rent",
          "70,000 yen",
          "Three months' rent"
        ],
        answerIndex: 1,
        explanation: "A says the deposit (shikikin) is two months' worth."
      },
      {
        q: "When will they go see the property?",
        choices: ["Today", "Tomorrow", "Next week", "Next month"],
        answerIndex: 2,
        explanation: "A suggests going to see it next week."
      }
    ],
    estMinutes: 4,
    tags: ["housing", "daily-life"]
  },
  {
    id: "l-n4-23",
    title: "Summer Festival Plans",
    level: "N4",
    context: "Two friends talking about a summer festival",
    text: "A: 今週末[こんしゅうまつ]、町[まち]のお祭[まつ]りに行[い]きませんか。\nB: いいですね。屋台[やたい]もたくさん出[で]るそうですよ。\nA: 金魚[きんぎょ]すくいもしたいです。浴衣[ゆかた]を着[き]て行[い]きましょうか。\nB: 浴衣[ゆかた]は持[も]っていませんが、レンタルできますよ。\nA: じゃ、一緒[いっしょ]に借[か]りましょう。花火[はなび]は何時[なんじ]からですか。\nB: 八時[はちじ]からだそうです。七時[しちじ]に駅[えき]で待[ま]ち合[あ]わせましょう。",
    translation: "A: Shall we go to the town festival this weekend?\nB: Sounds nice. I hear many food stalls will be set up.\nA: I also want to do goldfish scooping. Shall we go in yukata?\nB: I don't have a yukata, but we can rent one.\nA: Then let's rent them together. What time do the fireworks start?\nB: I hear they start at eight. Let's meet at the station at seven.",
    questions: [
      {
        q: "What will there be many of at the festival?",
        choices: ["Food stalls", "Dancers", "Fireworks stands", "Game booths"],
        answerIndex: 0,
        explanation: "B says many yatai (food stalls) will be set up."
      },
      {
        q: "What does B not have?",
        choices: ["Money", "A yukata", "A camera", "Time"],
        answerIndex: 1,
        explanation: "B says he doesn't have a yukata, but can rent one."
      },
      {
        q: "What time do the fireworks start?",
        choices: ["7:00", "7:30", "8:00", "8:30"],
        answerIndex: 2,
        explanation: "B says the fireworks start at eight o'clock."
      },
      {
        q: "Where will they meet?",
        choices: ["At the park", "At the station", "At a shop", "At B's house"],
        answerIndex: 1,
        explanation: "B suggests meeting at the station at seven."
      }
    ],
    estMinutes: 3,
    tags: ["festival", "culture"]
  },
  {
    id: "l-n4-24",
    title: "At the Dentist",
    level: "N4",
    context: "A patient visiting a dentist with a toothache",
    text: "A: 今日[きょう]はどうしましたか。\nB: 昨日[きのう]から右[みぎ]の奥歯[おくば]が痛[いた]くて、夜[よる]眠[ねむ]れません。\nA: どのくらい痛[いた]いですか。\nB: 冷[つめ]たい水[みず]を飲[の]むと、もっと痛[いた]くなります。\nA: 見[み]せてください。虫歯[むしば]が進[すす]んでいますね。今日[きょう]は治療[ちりょう]できますか。\nB: はい、お願[ねが]いします。次[つぎ]の予約[よやく]も取[と]りたいです。",
    translation: "A: What brings you in today?\nB: Since yesterday, my back tooth on the right hurts, and I can't sleep at night.\nA: How painful is it?\nB: When I drink cold water, it hurts more.\nA: Let me see. The cavity has progressed. Can we do the treatment today?\nB: Yes, please. I'd also like to make the next appointment.",
    questions: [
      {
        q: "Which tooth hurts?",
        choices: [
          "Front left tooth",
          "Back right tooth",
          "Front right tooth",
          "Back left tooth"
        ],
        answerIndex: 1,
        explanation: "B says the back tooth on the right (migi no okuba) hurts."
      },
      {
        q: "When does the pain get worse?",
        choices: [
          "When eating sweets",
          "When drinking cold water",
          "When brushing teeth",
          "When lying down"
        ],
        answerIndex: 1,
        explanation: "B says it hurts more when drinking cold water."
      },
      {
        q: "What is the problem?",
        choices: [
          "A cavity has progressed",
          "A broken tooth",
          "Gum inflammation",
          "A missing filling"
        ],
        answerIndex: 0,
        explanation: "A says the cavity (mushiba) has progressed."
      },
      {
        q: "What does B want besides treatment today?",
        choices: [
          "Medicine",
          "A teeth cleaning",
          "The next appointment",
          "A second opinion"
        ],
        answerIndex: 2,
        explanation: "B says he also wants to book the next appointment."
      }
    ],
    estMinutes: 4,
    tags: ["health", "daily-life"]
  },
  {
    id: "l-n4-25",
    title: "Discussing a Personal Budget",
    level: "N4",
    context: "Two friends talking about saving money",
    text: "A: 最近[さいきん]お金[おかね]が足[た]りなくて困[こま]っています。\nB: 何[なに]にお金[おかね]を使[つか]っているんですか。\nA: 携帯[けいたい]と外食[がいしょく]が多[おお]すぎるんです。\nB: 毎月[まいつき]いくら貯金[ちょきん]したいですか。\nA: 三万円[さんまんえん]くらい貯[た]めたいです。\nB: じゃ、食費[しょくひ]を減[へ]らして、お弁当[べんとう]を持[も]って行[い]った方[ほう]がいいですよ。",
    translation: "A: Lately I don't have enough money and I'm in trouble.\nB: What are you spending money on?\nA: My phone and eating out are too much.\nB: How much do you want to save each month?\nA: I want to save about 30,000 yen.\nB: Then you should cut food expenses and bring a bento.",
    questions: [
      {
        q: "What is A's problem?",
        choices: [
          "He is too busy",
          "He doesn't have enough money",
          "He lost his phone",
          "He can't sleep"
        ],
        answerIndex: 1,
        explanation: "A says he doesn't have enough money and is troubled."
      },
      {
        q: "What does A spend too much on?",
        choices: [
          "Phone and eating out",
          "Clothes and games",
          "Transport and coffee",
          "Books and movies"
        ],
        answerIndex: 0,
        explanation: "A says his phone and eating out are too much."
      },
      {
        q: "How much does A want to save each month?",
        choices: ["10,000 yen", "20,000 yen", "30,000 yen", "50,000 yen"],
        answerIndex: 2,
        explanation: "A says he wants to save about 30,000 yen."
      },
      {
        q: "What does B suggest?",
        choices: [
          "Changing phone plans",
          "Cutting food expenses and bringing a bento",
          "Working part-time",
          "Not going out at all"
        ],
        answerIndex: 1,
        explanation: "B suggests cutting food expenses and bringing a bento."
      }
    ],
    estMinutes: 3,
    tags: ["money", "daily-life"]
  },
  {
    id: "l-n4-26",
    title: "Airport Check-in Counter",
    level: "N4",
    context: "A passenger checking in for an international flight",
    text: "A: パスポートを見[み]せてください。目的地[もくてきち]はどこですか。\nB: ロンドンです。この荷物[にもつ]を預[あず]けたいです。\nA: このバッグは十キロ以内[いない]ですか。\nB: はい、九キロです。窓側[まどがわ]の席[せき]に座[すわ]りたいんですが。\nA: まだ空[あ]いていますので、変更[へんこう]できます。お飲[の]み物[もの]はいかがですか。\nB: 水[みず]を頂[いただ]けますか。搭乗口[とうじょうぐち]はどこですか。\nA: 三十番[さんじゅうばん]ゲートです。搭乗[とうじょう]は午後[ごご]四時[よじ]半[はん]からです。",
    translation: "A: Please show me your passport. What is your destination?\nB: London. I'd like to check this luggage.\nA: Is this bag within ten kilograms?\nB: Yes, nine kilos. I'd like to sit by the window, though.\nA: It's still available, so we can change it. Would you like a drink?\nB: May I have water? Where is the boarding gate?\nA: Gate 30. Boarding starts at 4:30 PM.",
    questions: [
      {
        q: "What is B's destination?",
        choices: ["Paris", "London", "New York", "Tokyo"],
        answerIndex: 1,
        explanation: "B says the destination is London."
      },
      {
        q: "How heavy is the bag?",
        choices: ["8 kg", "9 kg", "10 kg", "11 kg"],
        answerIndex: 1,
        explanation: "B says the bag is nine kilograms."
      },
      {
        q: "Which seat does B want?",
        choices: ["Aisle seat", "Window seat", "Front seat", "Emergency row seat"],
        answerIndex: 1,
        explanation: "B says he wants to sit by the window (madogawa)."
      },
      {
        q: "When does boarding start?",
        choices: ["3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"],
        answerIndex: 2,
        explanation: "A says boarding starts at 4:30 PM."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "airport"]
  },
  {
    id: "l-n4-27",
    title: "Volunteer Activity Invitation",
    level: "N4",
    context: "Two acquaintances discussing a park cleanup volunteer event",
    text: "A: 来月[らいげつ]の公園[こうえん]の清掃[せいそう]活動[かつどう]に参加[さんか]しませんか。\nB: いいですね。何時[なんじ]から始[はじ]まりますか。\nA: 午前[ごぜん]九時[くじ]からです。お昼[ひる]には終[お]わりますよ。\nB: 集合場所[しゅうごうばしょ]はどこですか。\nA: 公園[こうえん]の南口[みなみぐち]です。手袋[てぶくろ]を持[も]ってきてください。\nB: 分[わ]かりました。友人[ゆうじん]も誘[さそ]っていいですか。\nA: もちろんです。多[おお]い方[ほう]が助[たす]かります。",
    translation: "A: Won't you join next month's park cleanup volunteer activity?\nB: Sounds nice. What time does it start?\nA: From 9 AM. It finishes by noon.\nB: Where is the meeting place?\nA: The south gate of the park. Please bring gloves.\nB: Understood. Can I invite a friend too?\nA: Of course. The more people, the more helpful.",
    questions: [
      {
        q: "What activity is being organized?",
        choices: [
          "A park cleanup",
          "A charity run",
          "A tree-planting event",
          "A food drive"
        ],
        answerIndex: 0,
        explanation: "A is inviting B to a park cleanup (seisou) activity."
      },
      {
        q: "What time does it start?",
        choices: ["7 AM", "8 AM", "9 AM", "10 AM"],
        answerIndex: 2,
        explanation: "A says it starts at 9 AM."
      },
      {
        q: "What should participants bring?",
        choices: ["Lunch", "Gloves", "A trash bag", "Water"],
        answerIndex: 1,
        explanation: "A asks participants to bring gloves (tebukuro)."
      },
      {
        q: "Where is the meeting place?",
        choices: [
          "The north gate",
          "The south gate",
          "The east gate",
          "The west gate"
        ],
        answerIndex: 1,
        explanation: "A says the meeting place is the south gate of the park."
      }
    ],
    estMinutes: 4,
    tags: ["volunteer", "community"]
  },
  {
    id: "l-n4-28",
    title: "Negotiating a Small Contract",
    level: "N4",
    context: "A client and a vendor negotiating the price of a small project",
    text: "A: この案件[あんけん]の見積[みつも]りを見[み]せていただきました。\nB: いかがでしたか。ご意見[いけん]はありますか。\nA: 金額[きんがく]が少し高[たか]いと思[おも]います。三割引[さんわりびき]にできませんか。\nB: 三割引[さんわりびき]は難[むずか]しいですが、二割引[にわりびき]でしたら可能[かのう]です。\nA: では、二割引[にわりびき]でお願[ねが]いします。契約[けいやく]期間[きかん]は一ヶ年[いっかねん]でいいですか。\nB: はい。来週[らいしゅう]中[ちゅう]に契約書[けいやくしょ]をお送[おく]りします。",
    translation: "A: I looked at the estimate for this project.\nB: How was it? Do you have any opinions?\nA: I think the amount is a bit high. Could you make it 30% off?\nB: 30% off is difficult, but 20% off is possible.\nA: Then, please make it 20% off. Is a one-year contract period okay?\nB: Yes. I will send the contract document within next week.",
    questions: [
      {
        q: "What did A think of the estimate?",
        choices: [
          "It was too low",
          "It was reasonable",
          "It was a bit high",
          "It was perfect"
        ],
        answerIndex: 2,
        explanation: "A says the amount is a bit high."
      },
      {
        q: "What discount did A originally request?",
        choices: ["10% off", "20% off", "30% off", "50% off"],
        answerIndex: 2,
        explanation: "A asks for a 30% discount (san waribiki)."
      },
      {
        q: "What discount did they finally agree on?",
        choices: ["10% off", "20% off", "30% off", "No discount"],
        answerIndex: 1,
        explanation: "B says 20% off is possible, and A agrees."
      },
      {
        q: "How long is the contract period?",
        choices: ["Six months", "One year", "Two years", "Three years"],
        answerIndex: 1,
        explanation: "A asks about a one-year contract, and B agrees."
      }
    ],
    estMinutes: 4,
    tags: ["business", "contract"]
  },
  {
    id: "l-n4-29",
    title: "Booking a Driving School Lesson",
    level: "N4",
    context: "A student booking a lesson at a driving school reception desk",
    text: "A: 教習[きょうしゅう]の予約[よやく]を取[と]りたいんですが。\nB: 何[なに]の教習[きょうしゅう]を受[う]けますか。\nA: 仮免許[かりめんきょ]後[ご]の路上[ろじょう]です。技能[ぎのう]と学科[がっか]がまだ残[のこ]っています。\nB: では、明後日[あさって]の午前[ごぜん]十時[じゅうじ]はいかがですか。\nA: その時間[じかん]は仕事[しごと]があるので、午後[ごご]にしてもいいですか。\nB: 午後[ごご]三時[さんじ]なら空[あ]いています。よろしいですか。\nA: はい、お願[ねが]いします。",
    translation: "A: I'd like to book a lesson.\nB: What lesson will you take?\nA: On-road driving after the provisional license. I still have skills and classroom lessons left.\nB: Then, how about 10 AM the day after tomorrow?\nA: I have work at that time, so could we make it in the afternoon?\nB: 3 PM is available. Is that okay?\nA: Yes, please.",
    questions: [
      {
        q: "What lesson does A want to take?",
        choices: [
          "Classroom lesson only",
          "On-road driving after the provisional license",
          "Simulator lesson",
          "Highway driving lesson"
        ],
        answerIndex: 1,
        explanation: "A says on-road driving (rojou) after the provisional license."
      },
      {
        q: "What lessons does A still have remaining?",
        choices: [
          "Only skills lessons",
          "Only classroom lessons",
          "Both skills and classroom lessons",
          "None"
        ],
        answerIndex: 2,
        explanation: "A says both skills (ginou) and classroom (gakka) lessons remain."
      },
      {
        q: "Why can't A take the morning slot?",
        choices: [
          "He has a class",
          "He has work",
          "He has a doctor's appointment",
          "He is busy with family"
        ],
        answerIndex: 1,
        explanation: "A says he has work at that time."
      },
      {
        q: "What time was finally booked?",
        choices: ["10 AM", "1 PM", "3 PM", "5 PM"],
        answerIndex: 2,
        explanation: "B offers 3 PM in the afternoon, and A accepts."
      }
    ],
    estMinutes: 4,
    tags: ["driving", "school"]
  },
  {
    id: "l-n4-30",
    title: "University Research Project",
    level: "N4",
    context: "Two students discussing a graduation thesis topic",
    text: "A: 卒業論文[そつろんぶん]のテーマが決[き]まりましたか。\nB: まだ迷[まよ]っています。環境問題[かんきょうもんだい]について書[か]こうと思[おも]っています。\nA: いいテーマですね。指導教員[しどうきょういん]はどなたですか。\nB: 山田[やまだ]先生[せんせい]です。来週[らいしゅう]、面談[めんだん]があります。\nA: 面談[めんだん]の前[まえ]に、参考文献[さんこうぶんけん]を集[あつ]めた方[ほう]がいいですよ。\nB: そうですね。図書館[としょかん]で本[ほん]を五冊[ごさつ]借[か]りました。\nA: すごいですね。発表[はっぴょう]の練習[れんしゅう]も忘[わす]れないでください。",
    translation: "A: Have you decided on your graduation thesis theme?\nB: I'm still hesitating. I'm thinking of writing about environmental issues.\nA: That's a good theme. Who is your supervising professor?\nB: Professor Yamada. I have a meeting with him next week.\nA: Before the meeting, you'd better gather reference materials.\nB: You're right. I borrowed five books at the library.\nA: That's impressive. Don't forget to practice your presentation too.",
    questions: [
      {
        q: "What is B's thesis topic?",
        choices: [
          "Environmental issues",
          "Economic history",
          "Information technology",
          "Cultural exchange"
        ],
        answerIndex: 0,
        explanation: "B says he is thinking of writing about environmental issues."
      },
      {
        q: "Who is B's supervising professor?",
        choices: [
          "Professor Tanaka",
          "Professor Yamada",
          "Professor Sato",
          "Professor Suzuki"
        ],
        answerIndex: 1,
        explanation: "B says the supervising professor is Professor Yamada."
      },
      {
        q: "What does A advise B to do before the meeting?",
        choices: [
          "Write the introduction",
          "Gather reference materials",
          "Prepare questions",
          "Make an outline"
        ],
        answerIndex: 1,
        explanation: "A advises gathering reference materials before the meeting."
      },
      {
        q: "How many books did B borrow?",
        choices: ["Three", "Four", "Five", "Six"],
        answerIndex: 2,
        explanation: "B says he borrowed five books at the library."
      }
    ],
    estMinutes: 5,
    tags: ["university", "research"]
  }
];
