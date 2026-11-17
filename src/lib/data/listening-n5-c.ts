import type { ListeningData } from "@/lib/types";

export const listeningN5C: ListeningData[] = [
  {
    id: "l-n5-21",
    title: "パン屋[や]でパンを買[か]う",
    level: "N5",
    context: "At the bakery buying bread",
    text:
      "A: すみません、このパンはいくらですか。\n" +
      "B: これ一[ひと]つ百五十円[ひゃくごじゅうえん]です。\n" +
      "A: あのチョコパンはいくらですか。\n" +
      "B: それは二百円[にひゃくえん]です。\n" +
      "A: じゃ、チョコパンを二[ふた]つください。\n" +
      "B: ありがとうございます。四百円[よんひゃくえん]いただきます。",
    translation:
      "A: Excuse me, how much is this bread?\n" +
      "B: This is 150 yen each.\n" +
      "A: How much is that chocolate bread?\n" +
      "B: That is 200 yen.\n" +
      "A: Then, I'll take two chocolate breads, please.\n" +
      "B: Thank you. That will be 400 yen.",
    questions: [
      {
        q: "How much is one chocolate bread?",
        choices: ["100 yen", "200 yen", "400 yen", "150 yen"],
        answerIndex: 1,
        explanation: "The clerk says それは二百円です (That is 200 yen) about the chocolate bread."
      },
      {
        q: "What does the customer buy?",
        choices: ["Plain bread", "Two chocolate breads", "One chocolate bread", "Two plain breads"],
        answerIndex: 1,
        explanation: "The customer says チョコパンを二つください (two chocolate breads, please)."
      },
      {
        q: "How much does the customer pay in total?",
        choices: ["200 yen", "300 yen", "400 yen", "500 yen"],
        answerIndex: 2,
        explanation: "The clerk says 四百円いただきます (400 yen, please) for two 200-yen breads."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "numbers"]
  },
  {
    id: "l-n5-22",
    title: "バスの切符[きっぷ]を聞[き]く",
    level: "N5",
    context: "Asking about a bus ticket",
    text:
      "A: すみません、バスの切符[きっぷ]はどこで買[か]えますか。\n" +
      "B: 駅[えき]の前[まえ]の売店[ばいてん]で買[か]えます。\n" +
      "A: 一枚[いちまい]いくらですか。\n" +
      "B: 大人[おとな]は二百円[にひゃくえん]、子[こ]どもは百円[ひゃくえん]です。\n" +
      "A: 子[こ]どもの切符[きっぷ]を二枚[にまい]ください。\n" +
      "B: はい、二百円[にひゃくえん]です。",
    translation:
      "A: Excuse me, where can I buy bus tickets?\n" +
      "B: You can buy them at the shop in front of the station.\n" +
      "A: How much is one ticket?\n" +
      "B: Adults are 200 yen, children are 100 yen.\n" +
      "A: Two children's tickets, please.\n" +
      "B: Yes, that's 200 yen.",
    questions: [
      {
        q: "Where can you buy bus tickets?",
        choices: ["At the station shop", "On the bus", "At a convenience store", "At the post office"],
        answerIndex: 0,
        explanation: "The clerk says 駅の前の売店で買えます (you can buy them at the shop in front of the station)."
      },
      {
        q: "How much is an adult ticket?",
        choices: ["100 yen", "200 yen", "300 yen", "500 yen"],
        answerIndex: 1,
        explanation: "The clerk says 大人は二百円です (adults are 200 yen)."
      },
      {
        q: "What does the customer buy?",
        choices: ["One adult ticket", "Two adult tickets", "Two children's tickets", "One child ticket"],
        answerIndex: 2,
        explanation: "The customer says 子どもの切符を二枚ください (two children's tickets, please)."
      }
    ],
    estMinutes: 2,
    tags: ["transport", "shopping"]
  },
  {
    id: "l-n5-23",
    title: "公園[こうえん]で子[こ]どもを見[み]る",
    level: "N5",
    context: "At the park watching kids play",
    text:
      "A: 公園[こうえん]で子[こ]どもたちが遊[あそ]んでいますね。\n" +
      "B: はい、元気[げんき]ですね。男[おとこ]の子[こ]はボールで遊[あそ]んでいます。\n" +
      "A: 女[おんな]の子[こ]は何[なに]をしていますか。\n" +
      "B: 女[おんな]の子[こ]は木[き]の下[した]で本[ほん]を読[よ]んでいます。\n" +
      "A: あ、犬[いぬ]も走[はし]っています。\n" +
      "B: かわいい犬[いぬ]ですね。",
    translation:
      "A: The children are playing in the park.\n" +
      "B: Yes, they're so energetic. The boys are playing with a ball.\n" +
      "A: What are the girls doing?\n" +
      "B: The girls are reading books under a tree.\n" +
      "A: Oh, a dog is also running.\n" +
      "B: What a cute dog.",
    questions: [
      {
        q: "What are the boys doing?",
        choices: ["Reading books", "Playing with a ball", "Running with a dog", "Climbing a tree"],
        answerIndex: 1,
        explanation: "Speaker B says 男の子はボールで遊んでいます (the boys are playing with a ball)."
      },
      {
        q: "What are the girls doing?",
        choices: ["Playing with a ball", "Feeding a dog", "Reading under a tree", "Running around"],
        answerIndex: 2,
        explanation: "Speaker B says 女の子は木の下で本を読んでいます (the girls are reading books under a tree)."
      },
      {
        q: "What other animal is in the park?",
        choices: ["A cat", "A dog", "A bird", "A rabbit"],
        answerIndex: 1,
        explanation: "Speaker A says 犬も走っています (a dog is also running)."
      }
    ],
    estMinutes: 3,
    tags: ["daily-life", "actions"]
  },
  {
    id: "l-n5-24",
    title: "ペットの猫[ねこ]の話[はなし]",
    level: "N5",
    context: "Talking about a pet cat",
    text:
      "A: 田中[たなか]さん、ペットを飼[か]っていますか。\n" +
      "B: はい、猫[ねこ]を一匹[いっぴき]飼[か]っています。\n" +
      "A: 猫[ねこ]の名前[なまえ]は何[なん]ですか。\n" +
      "B: ミケです。白[しろ]い猫[ねこ]で、三歳[さんさい]です。\n" +
      "A: かわいいですね。毎日[まいにち]何[なに]をあげますか。\n" +
      "B: 猫[ねこ]のエサと水[みず]をあげます。",
    translation:
      "A: Tanaka-san, do you keep a pet?\n" +
      "B: Yes, I have one cat.\n" +
      "A: What is the cat's name?\n" +
      "B: Mike. It's a white cat, three years old.\n" +
      "A: How cute. What do you give it every day?\n" +
      "B: I give it cat food and water.",
    questions: [
      {
        q: "What pet does Tanaka have?",
        choices: ["A dog", "A cat", "A bird", "A fish"],
        answerIndex: 1,
        explanation: "Tanaka says 猫を一匹飼っています (I have one cat)."
      },
      {
        q: "What is the cat's name?",
        choices: ["Tama", "Mike", "Kuro", "Shiro"],
        answerIndex: 1,
        explanation: "Tanaka says ミケです (it's Mike)."
      },
      {
        q: "How old is the cat?",
        choices: ["Two years old", "Three years old", "Four years old", "Five years old"],
        answerIndex: 1,
        explanation: "Tanaka says 三歳です (three years old)."
      }
    ],
    estMinutes: 2,
    tags: ["pets", "daily-life"]
  },
  {
    id: "l-n5-25",
    title: "靴屋[くつや]で靴[くつ]を買[か]う",
    level: "N5",
    context: "At the shoe store buying shoes",
    text:
      "A: すみません、靴[くつ]を見[み]たいです。\n" +
      "B: どんな色[いろ]がいいですか。\n" +
      "A: 黒[くろ]い靴[くつ]がいいです。\n" +
      "B: これはどうですか。二十四[にじゅうよん]センチです。\n" +
      "A: ちょっと大[おお]きいです。もう少[すこ]し小[ちい]さいのはありますか。\n" +
      "B: はい、二十三[にじゅうさん]センチがあります。どうぞ。",
    translation:
      "A: Excuse me, I'd like to see shoes.\n" +
      "B: What color would you like?\n" +
      "A: Black shoes, please.\n" +
      "B: How about these? They're 24 centimeters.\n" +
      "A: They're a little big. Do you have slightly smaller ones?\n" +
      "B: Yes, we have 23 centimeters. Here you go.",
    questions: [
      {
        q: "What color shoes does the customer want?",
        choices: ["White", "Red", "Black", "Brown"],
        answerIndex: 2,
        explanation: "The customer says 黒い靴がいいです (black shoes, please)."
      },
      {
        q: "What was the first size shown?",
        choices: ["23 cm", "24 cm", "25 cm", "26 cm"],
        answerIndex: 1,
        explanation: "The clerk says 二十四センチです (24 cm) about the first pair."
      },
      {
        q: "Why does the customer want a different size?",
        choices: ["Too small", "Too expensive", "Too big", "Wrong color"],
        answerIndex: 2,
        explanation: "The customer says ちょっと大きいです (they're a little big)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "descriptions"]
  },
  {
    id: "l-n5-26",
    title: "お店[みせ]で両替[りょうがえ]する",
    level: "N5",
    context: "Asking for change at a shop",
    text:
      "A: すみません、千円[せんえん]を両替[りょうがえ]できますか。\n" +
      "B: はい、どうぞ。百円玉[ひゃくえんだま]でいいですか。\n" +
      "A: すみません、五百円玉[ごひゃくえんだま]と百円玉[ひゃくえんだま]をください。\n" +
      "B: 五百円玉[ごひゃくえんだま]一[ひと]つと百円玉[ひゃくえんだま]五枚[ごまい]ですね。\n" +
      "A: はい、そうです。ありがとうございます。",
    translation:
      "A: Excuse me, can you change 1000 yen?\n" +
      "B: Yes, here. Are 100-yen coins okay?\n" +
      "A: Sorry, I'd like a 500-yen coin and 100-yen coins.\n" +
      "B: One 500-yen coin and five 100-yen coins, right?\n" +
      "A: Yes, that's right. Thank you.",
    questions: [
      {
        q: "What does the customer want to do?",
        choices: ["Buy something", "Exchange 1000 yen", "Pay a bill", "Withdraw money"],
        answerIndex: 1,
        explanation: "The customer says 千円を両替できますか (can you change 1000 yen?)."
      },
      {
        q: "How does the customer want the change?",
        choices: ["All 100-yen coins", "All 500-yen coins", "One 500-yen coin and five 100-yen coins", "One 1000-yen bill"],
        answerIndex: 2,
        explanation: "The customer asks for 五百円玉と百円玉, and the clerk confirms one 500-yen coin and five 100-yen coins."
      },
      {
        q: "How many 100-yen coins does the customer receive?",
        choices: ["Three", "Four", "Five", "Six"],
        answerIndex: 2,
        explanation: "The clerk says 百円玉五枚ですね (five 100-yen coins, right)."
      }
    ],
    estMinutes: 3,
    tags: ["money", "shopping"]
  },
  {
    id: "l-n5-27",
    title: "花屋[はなや]で花[はな]を買[か]う",
    level: "N5",
    context: "At the flower shop buying flowers",
    text:
      "A: すみません、花[はな]を見[み]せてください。\n" +
      "B: この赤[あか]いバラはどうですか。一本[いっぽん]三百円[さんびゃくえん]です。\n" +
      "A: きれいですね。三本[さんぼん]ください。\n" +
      "B: ありがとうございます。九百円[きゅうひゃくえん]です。\n" +
      "A: はい、千円[せんえん]です。\n" +
      "B: 百円[ひゃくえん]のおつりです。ありがとうございました。",
    translation:
      "A: Excuse me, please show me flowers.\n" +
      "B: How about these red roses? They're 300 yen each.\n" +
      "A: They're beautiful. I'll take three.\n" +
      "B: Thank you. That's 900 yen.\n" +
      "A: Here, 1000 yen.\n" +
      "B: Here's 100 yen change. Thank you very much.",
    questions: [
      {
        q: "What flowers does the customer look at?",
        choices: ["White lilies", "Red roses", "Yellow tulips", "Pink carnations"],
        answerIndex: 1,
        explanation: "The clerk says この赤いバラはどうですか (how about these red roses?)."
      },
      {
        q: "How much is one rose?",
        choices: ["200 yen", "300 yen", "500 yen", "900 yen"],
        answerIndex: 1,
        explanation: "The clerk says 一本三百円です (300 yen each)."
      },
      {
        q: "How much change does the customer receive?",
        choices: ["50 yen", "100 yen", "200 yen", "300 yen"],
        answerIndex: 1,
        explanation: "The clerk says 百円のおつりです (here's 100 yen change) from the 1000-yen payment for 900 yen."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "numbers"]
  },
  {
    id: "l-n5-28",
    title: "クラスメートと宿題[しゅくだい]",
    level: "N5",
    context: "Discussing homework with a classmate",
    text:
      "A: 田中[たなか]さん、昨日[きのう]の宿題[しゅくだい]は終[お]わりましたか。\n" +
      "B: いいえ、まだ終[お]わりません。難[むずか]しかったです。\n" +
      "A: 私[わたし]も終[お]わりません。何[なん]ページまでやりましたか。\n" +
      "B: 三[さん]ページまでやりました。四[よん]ページから難[むずか]しいです。\n" +
      "A: じゃ、一緒[いっしょ]にやりましょう。\n" +
      "B: はい、お願[ねが]いします。",
    translation:
      "A: Tanaka-san, did you finish yesterday's homework?\n" +
      "B: No, not yet. It was difficult.\n" +
      "A: I haven't finished either. Up to what page did you do?\n" +
      "B: I did up to page 3. From page 4 it's difficult.\n" +
      "A: Then let's do it together.\n" +
      "B: Yes, please.",
    questions: [
      {
        q: "Did Tanaka finish yesterday's homework?",
        choices: ["Yes, completely", "No, not yet", "Almost done", "He didn't start it"],
        answerIndex: 1,
        explanation: "Tanaka says まだ終わりません (I haven't finished yet)."
      },
      {
        q: "Why didn't Tanaka finish?",
        choices: ["It was too long", "He forgot it", "It was difficult", "He was busy"],
        answerIndex: 2,
        explanation: "Tanaka says 難しかったです (it was difficult)."
      },
      {
        q: "What do they decide to do?",
        choices: ["Ask the teacher", "Do it together", "Skip it", "Do it tomorrow"],
        answerIndex: 1,
        explanation: "Speaker A says 一緒にやりましょう (let's do it together), and Tanaka agrees."
      }
    ],
    estMinutes: 3,
    tags: ["school", "study"]
  },
  {
    id: "l-n5-29",
    title: "バス停[てい]で待[ま]つ",
    level: "N5",
    context: "Waiting at the bus stop",
    text:
      "A: すみません、次[つぎ]のバスは何時[なんじ]に来[き]ますか。\n" +
      "B: 三時[さんじ]十五分[じゅうごふん]に来[き]ます。\n" +
      "A: あとどのくらい待[ま]ちますか。\n" +
      "B: 十分[じゅっぷん]ぐらい待[ま]ちます。\n" +
      "A: 駅[えき]までいくらですか。\n" +
      "B: 二百円[にひゃくえん]です。",
    translation:
      "A: Excuse me, what time does the next bus come?\n" +
      "B: It comes at 3:15.\n" +
      "A: How much longer do we wait?\n" +
      "B: About 10 minutes.\n" +
      "A: How much is it to the station?\n" +
      "B: 200 yen.",
    questions: [
      {
        q: "What time does the next bus come?",
        choices: ["3:05", "3:10", "3:15", "3:20"],
        answerIndex: 2,
        explanation: "Speaker B says 三時十五分に来ます (it comes at 3:15)."
      },
      {
        q: "How long do they have to wait?",
        choices: ["About 5 minutes", "About 10 minutes", "About 15 minutes", "About 20 minutes"],
        answerIndex: 1,
        explanation: "Speaker B says 十分ぐらい待ちます (we wait about 10 minutes)."
      },
      {
        q: "How much is it to the station?",
        choices: ["100 yen", "150 yen", "200 yen", "250 yen"],
        answerIndex: 2,
        explanation: "Speaker B says 二百円です (200 yen) about the fare to the station."
      }
    ],
    estMinutes: 2,
    tags: ["transport", "time"]
  },
  {
    id: "l-n5-30",
    title: "テレビの野球[やきゅう]の試合[しあい]",
    level: "N5",
    context: "Talking about a baseball game on TV",
    text:
      "A: 今[いま]テレビで野球[やきゅう]の試合[しあい]をしています。\n" +
      "B: どのチームが勝[か]っていますか。\n" +
      "A: タイガースが勝[か]っています。三対二[さんたいに]です。\n" +
      "B: おもしろいですね。私[わたし]も見[み]たいです。\n" +
      "A: じゃ、一緒[いっしょ]に見[み]ましょう。ジュースでも飲[の]みましょう。\n" +
      "B: いいですね。",
    translation:
      "A: A baseball game is on TV right now.\n" +
      "B: Which team is winning?\n" +
      "A: The Tigers are winning. It's 3 to 2.\n" +
      "B: That's interesting. I want to watch too.\n" +
      "A: Then let's watch together. Let's have some juice or something.\n" +
      "B: Sounds good.",
    questions: [
      {
        q: "What is on TV?",
        choices: ["A soccer game", "A baseball game", "A movie", "The news"],
        answerIndex: 1,
        explanation: "Speaker A says テレビで野球の試合をしています (a baseball game is on TV)."
      },
      {
        q: "Which team is winning?",
        choices: ["The Lions", "The Tigers", "The Giants", "The Eagles"],
        answerIndex: 1,
        explanation: "Speaker A says タイガースが勝っています (the Tigers are winning)."
      },
      {
        q: "What is the score?",
        choices: ["2-1", "3-1", "3-2", "4-2"],
        answerIndex: 2,
        explanation: "Speaker A says 三対二です (it's 3 to 2)."
      },
      {
        q: "What do they decide to do?",
        choices: ["Watch together and drink juice", "Go to the stadium", "Turn off the TV", "Call a friend"],
        answerIndex: 0,
        explanation: "Speaker A says 一緒に見ましょう。ジュースでも飲みましょう (let's watch together and drink juice), and B agrees."
      }
    ],
    estMinutes: 3,
    tags: ["leisure", "sports"]
  }
];
