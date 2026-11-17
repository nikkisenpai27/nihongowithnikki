import type { ListeningData } from "@/lib/types";

export const listeningN5H: ListeningData[] = [
  {
    id: "l-n5-71",
    title: "ケーキ屋[や]で",
    level: "N5",
    context: "At the cake shop",
    text:
      "A: いらっしゃいませ。何[なに]にしますか。\n" +
      "B: ケーキをください。\n" +
      "A: どんなケーキがいいですか。\n" +
      "B: 苺[いちご]のケーキをください。\n" +
      "A: はい。この小[ちい]さいのでいいですか。\n" +
      "B: はい、それをください。いくらですか。\n" +
      "A: 四百五十円[よんひゃくごじゅうえん]です。",
    translation:
      "A: Welcome. What would you like?\n" +
      "B: A cake, please.\n" +
      "A: What kind of cake would you like?\n" +
      "B: A strawberry cake, please.\n" +
      "A: Sure. Is this small one okay?\n" +
      "B: Yes, that one please. How much is it?\n" +
      "A: It is 450 yen.",
    questions: [
      {
        q: "What does B want to buy?",
        choices: ["Bread", "Cake", "Cookies", "Juice"],
        answerIndex: 1,
        explanation: "B says ケーキをください (A cake, please)."
      },
      {
        q: "What flavor does B want?",
        choices: ["Chocolate", "Vanilla", "Strawberry", "Matcha"],
        answerIndex: 2,
        explanation: "B says 苺のケーキをください (A strawberry cake, please)."
      },
      {
        q: "What size does B choose?",
        choices: ["Large", "Small", "Medium", "Two pieces"],
        answerIndex: 1,
        explanation: "B agrees to この小さいの (this small one)."
      },
      {
        q: "How much is the cake?",
        choices: ["350 yen", "450 yen", "550 yen", "500 yen"],
        answerIndex: 1,
        explanation: "A says 四百五十円です (It is 450 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["food", "shopping"]
  },
  {
    id: "l-n5-72",
    title: "寒[さむ]い朝[あさ]の話[はなし]",
    level: "N5",
    context: "A cold morning chat",
    text:
      "A: 今朝[けさ]、とても寒[さむ]いですね。\n" +
      "B: はい、寒[さむ]いですね。コートを着[き]ていますか。\n" +
      "A: はい、着[き]ています。手[て]も冷[つめ]たいです。\n" +
      "B: じゃ、お茶[ちゃ]でも飲[の]みましょう。\n" +
      "A: いいですね。暖[あたた]かいお茶[ちゃ]がいいです。\n" +
      "B: はい、すぐ持[も]って来[き]ます。",
    translation:
      "A: This morning is very cold, isn't it?\n" +
      "B: Yes, it is cold. Are you wearing a coat?\n" +
      "A: Yes, I am. My hands are also cold.\n" +
      "B: Then let's drink some tea.\n" +
      "A: That sounds good. Warm tea would be nice.\n" +
      "B: Yes, I will bring it right away.",
    questions: [
      {
        q: "How is the morning?",
        choices: ["Hot", "Warm", "Very cold", "Cool"],
        answerIndex: 2,
        explanation: "A says 今朝、とても寒いですね (This morning is very cold)."
      },
      {
        q: "Is A wearing a coat?",
        choices: ["Yes, he is", "No, he is not", "He is not sure", "Only a shirt"],
        answerIndex: 0,
        explanation: "A says はい、着ています (Yes, I am wearing one)."
      },
      {
        q: "What else is cold on A?",
        choices: ["Feet", "Hands", "Nose", "Ears"],
        answerIndex: 1,
        explanation: "A says 手も冷たいです (My hands are also cold)."
      },
      {
        q: "What will B bring?",
        choices: ["Cold juice", "Warm tea", "Hot coffee", "Cold water"],
        answerIndex: 1,
        explanation: "B agrees to bring 暖かいお茶 (warm tea)."
      }
    ],
    estMinutes: 2,
    tags: ["weather", "daily-life"]
  },
  {
    id: "l-n5-73",
    title: "コンビニで払[はら]う",
    level: "N5",
    context: "Paying at the convenience store",
    text:
      "A: いらっしゃいませ。\n" +
      "B: これとこれをください。\n" +
      "A: はい。六百八十円[ろっぴゃくはちじゅうえん]です。\n" +
      "B: じゃ、千円[せんえん]で払[はら]います。\n" +
      "A: はい。お釣[つ]りは三百二十円[さんびゃくにじゅうえん]です。\n" +
      "B: あ、袋[ふくろ]をください。\n" +
      "A: はい、ありがとうございます。",
    translation:
      "A: Welcome.\n" +
      "B: I will take this and this.\n" +
      "A: Sure. That is 680 yen.\n" +
      "B: Then I will pay with 1,000 yen.\n" +
      "A: Sure. Your change is 320 yen.\n" +
      "B: Oh, please give me a bag.\n" +
      "A: Here you go, thank you.",
    questions: [
      {
        q: "What is the total price?",
        choices: ["580 yen", "680 yen", "780 yen", "860 yen"],
        answerIndex: 1,
        explanation: "A says 六百八十円です (It is 680 yen)."
      },
      {
        q: "How does B pay?",
        choices: ["With a card", "With 500 yen", "With 1,000 yen", "With 2,000 yen"],
        answerIndex: 2,
        explanation: "B says 千円で払います (I will pay with 1,000 yen)."
      },
      {
        q: "What is the change?",
        choices: ["220 yen", "300 yen", "320 yen", "420 yen"],
        answerIndex: 2,
        explanation: "A says お釣りは三百二十円です (Your change is 320 yen)."
      },
      {
        q: "What does B ask for at the end?",
        choices: ["A receipt", "A bag", "A smaller bill", "Another item"],
        answerIndex: 1,
        explanation: "B says 袋をください (Please give me a bag)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "payment"]
  },
  {
    id: "l-n5-74",
    title: "友達[ともだち]が来[く]る",
    level: "N5",
    context: "A friend coming to visit",
    text:
      "A: 今週[こんしゅう]の週末[しゅうまつ]、友達[ともだち]が来[き]ます。\n" +
      "B: そうですか。どこから来[き]ますか。\n" +
      "A: 大阪[おおさか]から来[き]ます。\n" +
      "B: 何[なに]をしますか。\n" +
      "A: 一緒[いっしょ]に食事[しょくじ]をして、町[まち]を見[み]ます。\n" +
      "B: 楽[たの]しそうですね。",
    translation:
      "A: This weekend, a friend is coming.\n" +
      "B: Is that so. Where are they coming from?\n" +
      "A: They are coming from Osaka.\n" +
      "B: What will you do?\n" +
      "A: We will eat together and see the town.\n" +
      "B: That sounds fun.",
    questions: [
      {
        q: "Who is coming to visit?",
        choices: ["A cousin", "A friend", "A teacher", "A sister"],
        answerIndex: 1,
        explanation: "A says 友達が来ます (A friend is coming)."
      },
      {
        q: "When is the friend coming?",
        choices: ["This week", "This weekend", "Next weekend", "Next month"],
        answerIndex: 1,
        explanation: "A says 今週の週末 (this weekend)."
      },
      {
        q: "Where is the friend coming from?",
        choices: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
        answerIndex: 2,
        explanation: "A says 大阪から来ます (Coming from Osaka)."
      },
      {
        q: "What will A and the friend do?",
        choices: ["Watch a movie", "Eat together and see the town", "Go shopping only", "Stay home"],
        answerIndex: 1,
        explanation: "A says 一緒に食事をして、町を見ます (Eat together and see the town)."
      }
    ],
    estMinutes: 2,
    tags: ["friends", "plans"]
  },
  {
    id: "l-n5-75",
    title: "バスの切符[きっぴ]を買[か]う",
    level: "N5",
    context: "At the bus ticket window",
    text:
      "A: すみません、バスの切符[きっぴ]をください。\n" +
      "B: どこまで行[い]きますか。\n" +
      "A: 空港[くうこう]まで行[い]きます。\n" +
      "B: はい。大人[おとな]一枚[いちまい]ですね。千三百円[せんさんびゃくえん]です。\n" +
      "A: じゃ、これを二枚[にまい]ください。\n" +
      "B: はい。二千六百円[にせんろっぴゃくえん]です。",
    translation:
      "A: Excuse me, a bus ticket please.\n" +
      "B: Where are you going?\n" +
      "A: I am going to the airport.\n" +
      "B: Sure. One adult ticket, right? It is 1,300 yen.\n" +
      "A: Then I will take two.\n" +
      "B: Sure. That is 2,600 yen.",
    questions: [
      {
        q: "What is A buying?",
        choices: ["A train ticket", "A bus ticket", "A plane ticket", "A ferry ticket"],
        answerIndex: 1,
        explanation: "A says バスの切符をください (A bus ticket, please)."
      },
      {
        q: "Where is A going?",
        choices: ["The station", "The airport", "The harbor", "The hotel"],
        answerIndex: 1,
        explanation: "A says 空港まで行きます (Going to the airport)."
      },
      {
        q: "How many tickets does A buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "A says これを二枚ください (I will take two)."
      },
      {
        q: "What is the total price?",
        choices: ["1,300 yen", "2,300 yen", "2,500 yen", "2,600 yen"],
        answerIndex: 3,
        explanation: "B says 二千六百円です (It is 2,600 yen). Two tickets at 1,300 each."
      }
    ],
    estMinutes: 3,
    tags: ["travel", "station"]
  },
  {
    id: "l-n5-76",
    title: "雨[あめ]の日[ひ]",
    level: "N5",
    context: "A rainy day",
    text:
      "A: 今朝[けさ]から雨[あめ]が降[ふ]っていますね。\n" +
      "B: はい。傘[かさ]を持[も]っていますか。\n" +
      "A: いいえ、持[も]っていません。\n" +
      "B: じゃ、この傘[かさ]を使[つか]ってください。\n" +
      "A: ありがとう。いつ返[かえ]せばいいですか。\n" +
      "B: 明日[あした]でいいですよ。",
    translation:
      "A: It has been raining since this morning.\n" +
      "B: Yes. Do you have an umbrella?\n" +
      "A: No, I do not.\n" +
      "B: Then please use this umbrella.\n" +
      "A: Thanks. When should I return it?\n" +
      "B: Tomorrow is fine.",
    questions: [
      {
        q: "What is the weather?",
        choices: ["Sunny", "Raining", "Snowing", "Windy"],
        answerIndex: 1,
        explanation: "A says 雨が降っていますね (It is raining)."
      },
      {
        q: "Does A have an umbrella?",
        choices: ["Yes, he does", "No, he does not", "He forgot it at home", "He will buy one"],
        answerIndex: 1,
        explanation: "A says いいえ、持っていません (No, I do not have one)."
      },
      {
        q: "What does B lend to A?",
        choices: ["A coat", "A towel", "An umbrella", "A raincoat"],
        answerIndex: 2,
        explanation: "B says この傘を使ってください (Please use this umbrella)."
      },
      {
        q: "When should A return it?",
        choices: ["Today", "Tonight", "This week", "Tomorrow"],
        answerIndex: 3,
        explanation: "B says 明日でいいですよ (Tomorrow is fine)."
      }
    ],
    estMinutes: 2,
    tags: ["weather", "daily-life"]
  },
  {
    id: "l-n5-77",
    title: "ラーメン屋[や]で",
    level: "N5",
    context: "At the noodle shop",
    text:
      "A: いらっしゃいませ。何[なに]にしますか。\n" +
      "B: ラーメンをください。\n" +
      "A: 大[おお]きいのと小[ちい]さいのがあります。\n" +
      "B: 大[おお]きいのをください。\n" +
      "A: 飲[の]み物[もの]は何[なに]にしますか。\n" +
      "B: 冷[つめ]たいお茶[ちゃ]をください。",
    translation:
      "A: Welcome. What would you like?\n" +
      "B: Ramen, please.\n" +
      "A: We have a large and a small one.\n" +
      "B: A large one, please.\n" +
      "A: What would you like to drink?\n" +
      "B: Cold tea, please.",
    questions: [
      {
        q: "What does B order to eat?",
        choices: ["Udon", "Soba", "Ramen", "Curry"],
        answerIndex: 2,
        explanation: "B says ラーメンをください (Ramen, please)."
      },
      {
        q: "What size does B choose?",
        choices: ["Large", "Small", "Medium", "Half size"],
        answerIndex: 0,
        explanation: "B says 大きいのをください (A large one, please)."
      },
      {
        q: "What does B order to drink?",
        choices: ["Hot tea", "Cold tea", "Water", "Cola"],
        answerIndex: 1,
        explanation: "B says 冷たいお茶をください (Cold tea, please)."
      },
      {
        q: "What sizes does the shop offer?",
        choices: ["Small and medium", "Large and small", "Medium and large", "Only one size"],
        answerIndex: 1,
        explanation: "A says 大きいのと小さいのがあります (We have a large and a small one)."
      }
    ],
    estMinutes: 2,
    tags: ["food", "restaurant"]
  },
  {
    id: "l-n5-78",
    title: "新[あたら]しいマンション",
    level: "N5",
    context: "A new apartment building",
    text:
      "A: あの新[あたら]しい建物[たてもの]は何[なん]ですか。\n" +
      "B: あれは新[あたら]しいマンションです。\n" +
      "A: いつできましたか。\n" +
      "B: 先月[せんげつ]できました。\n" +
      "A: 何人[なんにん]ぐらい住[す]んでいますか。\n" +
      "B: まだ少[すく]ないです。十人[じゅうにん]ぐらいです。",
    translation:
      "A: What is that new building?\n" +
      "B: That is a new apartment building.\n" +
      "A: When was it built?\n" +
      "B: It was built last month.\n" +
      "A: About how many people live there?\n" +
      "B: Still few. About 10 people.",
    questions: [
      {
        q: "What is the new building?",
        choices: ["A school", "An apartment building", "A hospital", "A shop"],
        answerIndex: 1,
        explanation: "B says あれは新しいマンションです (That is a new apartment building)."
      },
      {
        q: "When was it built?",
        choices: ["This month", "Last month", "Last year", "Two months ago"],
        answerIndex: 1,
        explanation: "B says 先月できました (It was built last month)."
      },
      {
        q: "About how many people live there now?",
        choices: ["About 5", "About 10", "About 20", "About 50"],
        answerIndex: 1,
        explanation: "B says 十人ぐらいです (About 10 people)."
      },
      {
        q: "How does B describe the number of residents?",
        choices: ["Many", "Few", "A lot", "Almost full"],
        answerIndex: 1,
        explanation: "B says まだ少ないです (Still few)."
      }
    ],
    estMinutes: 2,
    tags: ["town", "housing"]
  },
  {
    id: "l-n5-79",
    title: "ホームで電車[でんしゃ]を待[ま]つ",
    level: "N5",
    context: "On the train platform",
    text:
      "A: すみません、次[つぎ]の電車[でんしゃ]は何時[なんじ]ですか。\n" +
      "B: 十時[じゅうじ]十五分[じゅうごふん]です。\n" +
      "A: この電車[でんしゃ]はどこへ行[い]きますか。\n" +
      "B: 東京[とうきょう]へ行[い]きます。\n" +
      "A: ありがとう。もうすぐ来[き]ますか。\n" +
      "B: はい、あと三分[さんぷん]です。",
    translation:
      "A: Excuse me, what time is the next train?\n" +
      "B: It is 10:15.\n" +
      "A: Where does this train go?\n" +
      "B: It goes to Tokyo.\n" +
      "A: Thanks. Will it come soon?\n" +
      "B: Yes, in three more minutes.",
    questions: [
      {
        q: "What time is the next train?",
        choices: ["10:05", "10:15", "10:30", "10:50"],
        answerIndex: 1,
        explanation: "B says 十時十五分です (It is 10:15)."
      },
      {
        q: "Where does the train go?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
        answerIndex: 0,
        explanation: "B says 東京へ行きます (It goes to Tokyo)."
      },
      {
        q: "How soon will the train arrive?",
        choices: ["In one minute", "In two minutes", "In three minutes", "In five minutes"],
        answerIndex: 2,
        explanation: "B says あと三分です (In three more minutes)."
      },
      {
        q: "What is A waiting for?",
        choices: ["A bus", "A taxi", "A train", "A friend"],
        answerIndex: 2,
        explanation: "A asks about 次の電車 (the next train)."
      }
    ],
    estMinutes: 2,
    tags: ["travel", "station"]
  },
  {
    id: "l-n5-80",
    title: "宿題[しゅくだい]の期日[きじつ]",
    level: "N5",
    context: "A homework deadline",
    text:
      "A: 宿題[しゅくだい]はいつまでですか。\n" +
      "B: 金[きん]曜[よう]日[び]までです。\n" +
      "A: じゃ、まだ三日[みっか]ありますね。\n" +
      "B: はい。でも、難[むずか]しいですか。\n" +
      "A: はい、とても難[むずか]しいです。\n" +
      "B: じゃ、一緒[いっしょ]にやりましょう。",
    translation:
      "A: When is the homework due?\n" +
      "B: It is due by Friday.\n" +
      "A: Then we still have three days.\n" +
      "B: Yes. But is it difficult?\n" +
      "A: Yes, it is very difficult.\n" +
      "B: Then let's do it together.",
    questions: [
      {
        q: "When is the homework due?",
        choices: ["Wednesday", "Thursday", "Friday", "Saturday"],
        answerIndex: 2,
        explanation: "B says 金曜日までです (It is due by Friday)."
      },
      {
        q: "How many days are left?",
        choices: ["Two", "Three", "Four", "Five"],
        answerIndex: 1,
        explanation: "A says まだ三日ありますね (We still have three days)."
      },
      {
        q: "Is the homework difficult?",
        choices: ["Not at all", "A little", "Yes, very", "It is easy"],
        answerIndex: 2,
        explanation: "A says とても難しいです (It is very difficult)."
      },
      {
        q: "What does B suggest?",
        choices: ["Doing it alone", "Asking the teacher", "Doing it together", "Skipping it"],
        answerIndex: 2,
        explanation: "B says 一緒にやりましょう (Let's do it together)."
      }
    ],
    estMinutes: 2,
    tags: ["school", "deadline"]
  }
];
