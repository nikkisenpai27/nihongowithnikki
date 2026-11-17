import type { ListeningData } from "@/lib/types";

export const listeningN5J: ListeningData[] = [
  {
    id: "l-n5-91",
    title: "両替所[りょうがえしょ]で",
    level: "N5",
    context: "At the currency exchange",
    text:
      "A: すみません、ここでドルを円[えん]に換[か]えられますか。\n" +
      "B: はい、できます。いくら換[か]えますか。\n" +
      "A: 百[ひゃく]ドルをお願[ねが]いします。\n" +
      "B: 今日[きょう]のレートは一[いち]ドル百五十円[ひゃくごじゅうえん]です。\n" +
      "A: じゃ、お願[ねが]いします。手数料[てすうりょう]はいくらですか。\n" +
      "B: 手数料[てすうりょう]は五百円[ごひゃくえん]です。",
    translation:
      "A: Excuse me, can I exchange dollars for yen here?\n" +
      "B: Yes, you can. How much will you exchange?\n" +
      "A: One hundred dollars, please.\n" +
      "B: Today's rate is 150 yen per dollar.\n" +
      "A: Then, please. How much is the fee?\n" +
      "B: The fee is 500 yen.",
    questions: [
      {
        q: "What does A want to do?",
        choices: ["Open an account", "Exchange dollars for yen", "Withdraw yen", "Send money abroad"],
        answerIndex: 1,
        explanation: "A asks ドルを円に換えられますか (Can I exchange dollars for yen?)."
      },
      {
        q: "How much does A exchange?",
        choices: ["50 dollars", "100 dollars", "150 dollars", "500 dollars"],
        answerIndex: 1,
        explanation: "A says 百ドルをお願いします (One hundred dollars, please)."
      },
      {
        q: "What is today's rate?",
        choices: ["100 yen per dollar", "120 yen per dollar", "150 yen per dollar", "200 yen per dollar"],
        answerIndex: 2,
        explanation: "B says 一ドル百五十円です (It is 150 yen per dollar)."
      },
      {
        q: "How much is the fee?",
        choices: ["100 yen", "300 yen", "500 yen", "1,000 yen"],
        answerIndex: 2,
        explanation: "B says 手数料は五百円です (The fee is 500 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["bank", "money"]
  },
  {
    id: "l-n5-92",
    title: "誕生日[たんじょうび]プレゼントを買[か]う",
    level: "N5",
    context: "Buying a birthday gift",
    text:
      "A: 来週[らいしゅう]、友達[ともだち]の誕生日[たんじょうび]です。プレゼントを買[か]いたいです。\n" +
      "B: いいですね。何[なに]がいいですか。\n" +
      "A: 本[ほん]か花[はな]はどうですか。\n" +
      "B: 花[はな]もいいですが、本[ほん]がいいと思[おも]います。\n" +
      "A: じゃ、この本[ほん]をください。いくらですか。\n" +
      "B: 千円[せんえん]です。",
    translation:
      "A: Next week is my friend's birthday. I want to buy a present.\n" +
      "B: That is nice. What would be good?\n" +
      "A: How about a book or flowers?\n" +
      "B: Flowers are nice too, but I think a book is better.\n" +
      "A: Then I will take this book. How much is it?\n" +
      "B: It is 1,000 yen.",
    questions: [
      {
        q: "What is happening next week?",
        choices: ["A school festival", "A friend's birthday", "A holiday", "A trip"],
        answerIndex: 1,
        explanation: "A says 来週、友達の誕生日です (Next week is my friend's birthday)."
      },
      {
        q: "What does A suggest first?",
        choices: ["A book or flowers", "A bag or a wallet", "A CD or a DVD", "Sweets or tea"],
        answerIndex: 0,
        explanation: "A says 本か花はどうですか (How about a book or flowers?)."
      },
      {
        q: "What does B think is better?",
        choices: ["Flowers", "A book", "A card", "Sweets"],
        answerIndex: 1,
        explanation: "B says 本がいいと思います (I think a book is better)."
      },
      {
        q: "How much is the book?",
        choices: ["800 yen", "1,000 yen", "1,200 yen", "1,500 yen"],
        answerIndex: 1,
        explanation: "B says 千円です (It is 1,000 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "friends"]
  },
  {
    id: "l-n5-93",
    title: "公園[こうえん]の入[い]り口[ぐち]で",
    level: "N5",
    context: "At the park entrance",
    text:
      "A: 公園[こうえん]の入[い]り口[ぐち]はどこですか。\n" +
      "B: あちらです。入場料[にゅうじょうりょう]は三百円[さんびゃくえん]です。\n" +
      "A: 子供[こども]も三百円[さんびゃくえん]ですか。\n" +
      "B: いいえ、子供[こども]は百円[ひゃくえん]です。\n" +
      "A: じゃ、大人[おとな]二[に]人[にん]と子供[こども]一人[ひとり]をください。\n" +
      "B: はい、七百円[ななひゃくえん]です。",
    translation:
      "A: Where is the park entrance?\n" +
      "B: It is over there. The entrance fee is 300 yen.\n" +
      "A: Is it 300 yen for children too?\n" +
      "B: No, children are 100 yen.\n" +
      "A: Then two adults and one child, please.\n" +
      "B: Sure, that is 700 yen.",
    questions: [
      {
        q: "What is A looking for?",
        choices: ["The park exit", "The park entrance", "A parking lot", "A rest area"],
        answerIndex: 1,
        explanation: "A asks 公園の入り口はどこですか (Where is the park entrance?)."
      },
      {
        q: "How much is the adult entrance fee?",
        choices: ["100 yen", "200 yen", "300 yen", "500 yen"],
        answerIndex: 2,
        explanation: "B says 入場料は三百円です (The entrance fee is 300 yen)."
      },
      {
        q: "How much is the fee for a child?",
        choices: ["100 yen", "200 yen", "300 yen", "Free"],
        answerIndex: 0,
        explanation: "B says 子供は百円です (Children are 100 yen)."
      },
      {
        q: "How much does A pay in total?",
        choices: ["500 yen", "600 yen", "700 yen", "800 yen"],
        answerIndex: 2,
        explanation: "B says 七百円です (It is 700 yen). 2 x 300 + 1 x 100 = 700."
      }
    ],
    estMinutes: 2,
    tags: ["park", "money"]
  },
  {
    id: "l-n5-94",
    title: "学[がっ]校[こう]の給食[きゅうしょく]の話[はなし]",
    level: "N5",
    context: "Talking about school lunch",
    text:
      "A: 今日[きょう]の学[がっ]校[こう]の給食[きゅうしょく]は何[なん]ですか。\n" +
      "B: カレーとサラダです。\n" +
      "A: あ、カレーは好[す]きです。牛乳[ぎゅうにゅう]もありますか。\n" +
      "B: はい、毎日[まいにち]牛乳[ぎゅうにゅう]がありますよ。\n" +
      "A: いいですね。昨日[きのう]は何[なん]でしたか。\n" +
      "B: 昨日[きのう]はパンとスープでした。",
    translation:
      "A: What is today's school lunch?\n" +
      "B: Curry and salad.\n" +
      "A: Oh, I like curry. Is there milk too?\n" +
      "B: Yes, there is milk every day.\n" +
      "A: That is nice. What was it yesterday?\n" +
      "B: Yesterday it was bread and soup.",
    questions: [
      {
        q: "What is today's school lunch?",
        choices: ["Bread and soup", "Curry and salad", "Rice and fish", "Noodles and eggs"],
        answerIndex: 1,
        explanation: "B says カレーとサラダです (Curry and salad)."
      },
      {
        q: "What does A think of curry?",
        choices: ["A likes it", "A hates it", "A has never tried it", "A is allergic to it"],
        answerIndex: 0,
        explanation: "A says カレーは好きです (I like curry)."
      },
      {
        q: "How often is milk served?",
        choices: ["Only on Mondays", "Twice a week", "Every day", "Only on Fridays"],
        answerIndex: 2,
        explanation: "B says 毎日牛乳がありますよ (There is milk every day)."
      },
      {
        q: "What was yesterday's lunch?",
        choices: ["Curry and salad", "Rice and milk", "Bread and soup", "Sandwich and juice"],
        answerIndex: 2,
        explanation: "B says 昨日はパンとスープでした (Yesterday was bread and soup)."
      }
    ],
    estMinutes: 2,
    tags: ["school", "food"]
  },
  {
    id: "l-n5-95",
    title: "駅[えき]の案内[あんない]所[しょ]で",
    level: "N5",
    context: "At the train information desk",
    text:
      "A: すみません、次[つぎ]の大[おお]阪[さか]行[ゆ]きの電[でん]車[しゃ]は何時[なんじ]ですか。\n" +
      "B: 十[じゅう]時[じ]半[はん]です。\n" +
      "A: 何[なん]番[ばん]線[せん]から出[で]ますか。\n" +
      "B: 三[さん]番[ばん]線[せん]から出[で]ます。\n" +
      "A: 切符[きっぴ]はどこで買[か]えますか。\n" +
      "B: あそこの窓口[まどぐち]で買[か]えます。",
    translation:
      "A: Excuse me, what time is the next train bound for Osaka?\n" +
      "B: It is at ten thirty.\n" +
      "A: Which track does it leave from?\n" +
      "B: It leaves from track three.\n" +
      "A: Where can I buy a ticket?\n" +
      "B: You can buy one at the window over there.",
    questions: [
      {
        q: "Where is the train bound for?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
        answerIndex: 1,
        explanation: "A asks 大阪行きの電車 (the train bound for Osaka)."
      },
      {
        q: "What time is the next train?",
        choices: ["10:00", "10:30", "11:00", "11:30"],
        answerIndex: 1,
        explanation: "B says 十時半です (It is ten thirty)."
      },
      {
        q: "Which track does the train leave from?",
        choices: ["Track one", "Track two", "Track three", "Track four"],
        answerIndex: 2,
        explanation: "B says 三番線から出ます (It leaves from track three)."
      },
      {
        q: "Where can A buy a ticket?",
        choices: ["At the machine", "At the window", "At the convenience store", "Online"],
        answerIndex: 1,
        explanation: "B says 窓口で買えます (You can buy one at the window)."
      }
    ],
    estMinutes: 2,
    tags: ["station", "travel"]
  },
  {
    id: "l-n5-96",
    title: "道[みち]が込[こ]んでいる",
    level: "N5",
    context: "A traffic jam",
    text:
      "A: 今日[きょう]は道[みち]が込[こ]んでいますね。\n" +
      "B: はい、車[くるま]が多[おお]いです。事故[じこ]がありました。\n" +
      "A: そうですね。学[がっ]校[こう]に遅[おく]れますか。\n" +
      "B: 多[おお]分[ぶん]、十分[じゅっぷん]ぐらい遅[おく]れます。\n" +
      "A: じゃ、先[せん]生[せい]に連絡[れんらく]してください。\n" +
      "B: はい、今[いま]メッセージを送[おく]ります。",
    translation:
      "A: The road is crowded today, isn't it.\n" +
      "B: Yes, there are many cars. There was an accident.\n" +
      "A: Right. Will we be late for school?\n" +
      "B: Probably about ten minutes late.\n" +
      "A: Then please contact the teacher.\n" +
      "B: Yes, I will send a message now.",
    questions: [
      {
        q: "How is the road today?",
        choices: ["Empty", "Crowded", "Closed", "Wet"],
        answerIndex: 1,
        explanation: "A says 道が込んでいますね (The road is crowded)."
      },
      {
        q: "Why is the road crowded?",
        choices: ["A festival", "An accident", "Heavy rain", "Roadwork"],
        answerIndex: 1,
        explanation: "B says 事故がありました (There was an accident)."
      },
      {
        q: "How late will they be?",
        choices: ["About 5 minutes", "About 10 minutes", "About 30 minutes", "About an hour"],
        answerIndex: 1,
        explanation: "B says 十分ぐらい遅れます (About ten minutes late)."
      },
      {
        q: "What will B do now?",
        choices: ["Call a taxi", "Send a message to the teacher", "Go back home", "Run to school"],
        answerIndex: 1,
        explanation: "B says 今メッセージを送ります (I will send a message now)."
      }
    ],
    estMinutes: 2,
    tags: ["transport", "school"]
  },
  {
    id: "l-n5-97",
    title: "中[ちゅう]古[こ]屋[や]でカメラを買[か]う",
    level: "N5",
    context: "At the second-hand shop",
    text:
      "A: すみません、この古[ふる]いカメラはいくらですか。\n" +
      "B: 二千円[にせんえん]です。まだ使[つか]えますよ。\n" +
      "A: ちょっと高[たか]いです。千五百円[せんごひゃくえん]はどうですか。\n" +
      "B: じゃ、千八百円[せんはっぴゃくえん]でどうですか。\n" +
      "A: はい、それで買[か]います。\n" +
      "B: ありがとうございます。",
    translation:
      "A: Excuse me, how much is this old camera?\n" +
      "B: It is 2,000 yen. You can still use it.\n" +
      "A: That is a bit expensive. How about 1,500 yen?\n" +
      "B: Then how about 1,800 yen?\n" +
      "A: Yes, I will buy it for that.\n" +
      "B: Thank you.",
    questions: [
      {
        q: "What does A want to buy?",
        choices: ["A new camera", "An old camera", "A phone", "A lens"],
        answerIndex: 1,
        explanation: "A asks この古いカメラはいくらですか (How much is this old camera?)."
      },
      {
        q: "What is the first price B says?",
        choices: ["1,500 yen", "1,800 yen", "2,000 yen", "2,500 yen"],
        answerIndex: 2,
        explanation: "B says 二千円です (It is 2,000 yen)."
      },
      {
        q: "What price does A offer?",
        choices: ["1,200 yen", "1,500 yen", "1,800 yen", "1,900 yen"],
        answerIndex: 1,
        explanation: "A says 千五百円はどうですか (How about 1,500 yen?)."
      },
      {
        q: "What is the final price?",
        choices: ["1,500 yen", "1,700 yen", "1,800 yen", "2,000 yen"],
        answerIndex: 2,
        explanation: "B offers 千八百円 (1,800 yen) and A agrees."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "bargaining"]
  },
  {
    id: "l-n5-98",
    title: "お正月[しょうがつ]の計画[けいかく]",
    level: "N5",
    context: "A New Year's plan",
    text:
      "A: お正月[しょうがつ]は何[なに]をしますか。\n" +
      "B: 実家[じっか]へ帰[かえ]ります。\n" +
      "A: いいですね。何[なに]をしますか。\n" +
      "B: おせち料理[りょうり]を食[た]べて、神社[じんじゃ]へ行[い]きます。\n" +
      "A: 私[わたし]は家[いえ]でゆっくり休[やす]みます。\n" +
      "B: それもいいですね。",
    translation:
      "A: What will you do for New Year's?\n" +
      "B: I will go back to my family home.\n" +
      "A: That is nice. What will you do?\n" +
      "B: I will eat osechi dishes and go to a shrine.\n" +
      "A: I will rest quietly at home.\n" +
      "B: That is nice too.",
    questions: [
      {
        q: "What is the topic?",
        choices: ["Summer vacation", "New Year's plans", "A birthday party", "A school trip"],
        answerIndex: 1,
        explanation: "A asks お正月は何をしますか (What will you do for New Year's?)."
      },
      {
        q: "Where will B go?",
        choices: ["To Tokyo", "To a hotel", "Back to the family home", "Abroad"],
        answerIndex: 2,
        explanation: "B says 実家へ帰ります (I will go back to my family home)."
      },
      {
        q: "What will B eat?",
        choices: ["Sushi and tempura", "Osechi dishes", "Curry and rice", "Bread and soup"],
        answerIndex: 1,
        explanation: "B says おせち料理を食べて (I will eat osechi dishes)."
      },
      {
        q: "What will A do?",
        choices: ["Go to a shrine", "Travel abroad", "Rest at home", "Work part-time"],
        answerIndex: 2,
        explanation: "A says 家でゆっくり休みます (I will rest quietly at home)."
      }
    ],
    estMinutes: 2,
    tags: ["holiday", "family"]
  },
  {
    id: "l-n5-99",
    title: "自[じ]動[どう]販売[はんばい]機[き]の前[まえ]で",
    level: "N5",
    context: "At the vending machine",
    text:
      "A: すみません、この自[じ]動[どう]販売[はんばい]機[き]の使[つか]い方[かた]がわかりません。\n" +
      "B: まずお金[かね]を入[い]れてください。\n" +
      "A: いくら入[い]れますか。\n" +
      "B: 飲[の]み物[もの]は百二十円[ひゃくにじゅうえん]です。\n" +
      "A: じゃ、百二十円[ひゃくにじゅうえん]を入[い]れました。\n" +
      "B: はい、このボタンを押[お]してください。",
    translation:
      "A: Excuse me, I do not know how to use this vending machine.\n" +
      "B: First, please put in money.\n" +
      "A: How much should I put in?\n" +
      "B: Drinks are 120 yen.\n" +
      "A: Then I have put in 120 yen.\n" +
      "B: Good, please press this button.",
    questions: [
      {
        q: "What does A not understand?",
        choices: ["The train schedule", "How to use the vending machine", "The map", "The price tag"],
        answerIndex: 1,
        explanation: "A says 自動販売機の使い方がわかりません (I do not know how to use this vending machine)."
      },
      {
        q: "What should A do first?",
        choices: ["Press a button", "Put in money", "Choose a drink", "Ask the staff"],
        answerIndex: 1,
        explanation: "B says まずお金を入れてください (First, please put in money)."
      },
      {
        q: "How much is a drink?",
        choices: ["100 yen", "110 yen", "120 yen", "150 yen"],
        answerIndex: 2,
        explanation: "B says 飲み物は百二十円です (Drinks are 120 yen)."
      },
      {
        q: "What should A do after putting in money?",
        choices: ["Take the change", "Press the button", "Open the door", "Wait for the staff"],
        answerIndex: 1,
        explanation: "B says このボタンを押してください (Please press this button)."
      }
    ],
    estMinutes: 2,
    tags: ["daily-life", "shopping"]
  },
  {
    id: "l-n5-100",
    title: "好[す]きな季節[きせつ]の話[はなし]",
    level: "N5",
    context: "Talking about a favorite season",
    text:
      "A: どの季節[きせつ]が一番[いちばん]好[す]きですか。\n" +
      "B: 私[わたし]は秋[あき]が好[す]きです。\n" +
      "A: どうしてですか。\n" +
      "B: 涼[すず]しくて、紅葉[もみじ]がきれいだからです。\n" +
      "A: 私[わたし]は春[はる]が好[す]きです。花[はな]が咲[さ]きますから。\n" +
      "B: どちらもいいですね。",
    translation:
      "A: Which season do you like best?\n" +
      "B: I like autumn.\n" +
      "A: Why?\n" +
      "B: Because it is cool and the autumn leaves are beautiful.\n" +
      "A: I like spring. Because flowers bloom.\n" +
      "B: Both are nice.",
    questions: [
      {
        q: "What season does B like best?",
        choices: ["Spring", "Summer", "Autumn", "Winter"],
        answerIndex: 2,
        explanation: "B says 秋が好きです (I like autumn)."
      },
      {
        q: "Why does B like it?",
        choices: ["It is warm", "It is cool and leaves are beautiful", "There is snow", "There are fireworks"],
        answerIndex: 1,
        explanation: "B says 涼しくて、紅葉がきれいだからです (Because it is cool and the autumn leaves are beautiful)."
      },
      {
        q: "What season does A like?",
        choices: ["Spring", "Summer", "Autumn", "Winter"],
        answerIndex: 0,
        explanation: "A says 春が好きです (I like spring)."
      },
      {
        q: "Why does A like that season?",
        choices: ["Flowers bloom", "It is hot", "Leaves change color", "It snows"],
        answerIndex: 0,
        explanation: "A says 花が咲きますから (Because flowers bloom)."
      }
    ],
    estMinutes: 2,
    tags: ["seasons", "nature"]
  }
];
