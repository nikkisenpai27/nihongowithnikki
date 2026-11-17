import type { ListeningData } from "@/lib/types";

export const listeningN5E: ListeningData[] = [
  {
    id: "l-n5-41",
    title: "切符[きっぷ]売[う]り機[き]で切符[きっぷ]を買[か]う",
    level: "N5",
    context: "At the ticket machine buying a train ticket",
    text:
      "A: すみません、切符[きっぷ]はどこで買[か]えますか。\n" +
      "B: あちらの機械[きかい]で買[か]えます。\n" +
      "A: 大人[おとな]一枚[いちまい]いくらですか。\n" +
      "B: 二百三十円[にひゃくさんじゅうえん]です。\n" +
      "A: じゃ、このボタンを押[お]せばいいですか。\n" +
      "B: はい、それからお金[かね]を入[い]れてください。",
    translation:
      "A: Excuse me, where can I buy a ticket?\n" +
      "B: You can buy one at that machine over there.\n" +
      "A: How much is one adult ticket?\n" +
      "B: It is 230 yen.\n" +
      "A: Then, should I press this button?\n" +
      "B: Yes, and then please insert money.",
    questions: [
      {
        q: "Where can the person buy a ticket?",
        choices: ["At the counter", "At the convenience store", "At the machine over there", "Online"],
        answerIndex: 2,
        explanation: "B says あちらの機械で買えます (You can buy at that machine over there)."
      },
      {
        q: "How much is one adult ticket?",
        choices: ["200 yen", "230 yen", "320 yen", "250 yen"],
        answerIndex: 1,
        explanation: "B says 二百三十円です (It is 230 yen)."
      },
      {
        q: "What should the person do after pressing the button?",
        choices: ["Show ID", "Insert money", "Sign the paper", "Take a receipt"],
        answerIndex: 1,
        explanation: "B says お金を入れてください (Please insert money)."
      },
      {
        q: "How many tickets is the person buying?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 0,
        explanation: "The person asks 大人一枚いくらですか (How much is one adult ticket?)."
      }
    ],
    estMinutes: 2,
    tags: ["station", "shopping"]
  },
  {
    id: "l-n5-42",
    title: "新[あたら]しい自転車[じてんしゃ]を買[か]う",
    level: "N5",
    context: "At a bicycle shop buying a new bicycle",
    text:
      "A: すみません、自転車[じてんしゃ]を見[み]たいです。\n" +
      "B: こちらが新[あたら]しい自転車[じてんしゃ]です。\n" +
      "A: この白[しろ]いのはいくらですか。\n" +
      "B: 一万五千円[いちまんごせんえん]です。\n" +
      "A: ちょっと高[たか]いですね。もっと安[やす]いのはありますか。\n" +
      "B: はい、この青[あお]いのは九千円[きゅうせんえん]です。",
    translation:
      "A: Excuse me, I would like to see the bicycles.\n" +
      "B: These here are the new bicycles.\n" +
      "A: How much is this white one?\n" +
      "B: It is 15,000 yen.\n" +
      "A: It is a little expensive. Do you have a cheaper one?\n" +
      "B: Yes, this blue one is 9,000 yen.",
    questions: [
      {
        q: "What does the customer want to see?",
        choices: ["Motorcycles", "Bicycles", "Cars", "Scooters"],
        answerIndex: 1,
        explanation: "The customer says 自転車を見たいです (I want to see the bicycles)."
      },
      {
        q: "How much is the white bicycle?",
        choices: ["9,000 yen", "10,000 yen", "15,000 yen", "5,000 yen"],
        answerIndex: 2,
        explanation: "B says 一万五千円です (It is 15,000 yen)."
      },
      {
        q: "Why does the customer want a different bicycle?",
        choices: ["It is too heavy", "It is a little expensive", "It is the wrong size", "It is broken"],
        answerIndex: 1,
        explanation: "The customer says ちょっと高いですね (It is a little expensive)."
      },
      {
        q: "Which bicycle is cheaper?",
        choices: ["The white one", "The red one", "The blue one", "The black one"],
        answerIndex: 2,
        explanation: "B says この青いのは九千円です (This blue one is 9,000 yen)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "transport"]
  },
  {
    id: "l-n5-43",
    title: "野菜[やさい]屋[や]で野菜[やさい]を買[か]う",
    level: "N5",
    context: "At the vegetable shop buying vegetables",
    text:
      "A: この野菜[やさい]はいくらですか。\n" +
      "B: 一[ひと]つ三百円[さんびゃくえん]です。\n" +
      "A: じゃ、これを三[みっ]つください。\n" +
      "B: はい、九百円[きゅうひゃくえん]ですね。\n" +
      "A: この赤[あか]い野菜[やさい]も一[ひと]つください。\n" +
      "B: ありがとうございます。全部[ぜんぶ]で千二百円[せんにひゃくえん]です。",
    translation:
      "A: How much is this vegetable?\n" +
      "B: One is 300 yen.\n" +
      "A: Then, please give me three of these.\n" +
      "B: All right, that is 900 yen.\n" +
      "A: Please give me one of this red vegetable too.\n" +
      "B: Thank you. The total is 1,200 yen.",
    questions: [
      {
        q: "How much is one vegetable?",
        choices: ["100 yen", "200 yen", "300 yen", "500 yen"],
        answerIndex: 2,
        explanation: "B says 一つ三百円です (One is 300 yen)."
      },
      {
        q: "How many of the first vegetable does the customer buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "The customer says これを三つください (Please give me three of these)."
      },
      {
        q: "What is the total price?",
        choices: ["900 yen", "1,000 yen", "1,200 yen", "1,500 yen"],
        answerIndex: 2,
        explanation: "B says 全部で千二百円です (The total is 1,200 yen)."
      },
      {
        q: "What color is the extra vegetable the customer buys?",
        choices: ["Green", "Red", "Yellow", "White"],
        answerIndex: 1,
        explanation: "The customer says この赤い野菜も一つください (Please give me one of this red vegetable too)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "food"]
  },
  {
    id: "l-n5-44",
    title: "荷物[にもつ]の配達[はいたつ]を聞[き]く",
    level: "N5",
    context: "Asking a delivery service about a package",
    text:
      "A: 荷物[にもつ]はいつ来[き]ますか。\n" +
      "B: 今日[きょう]の午後[ごご]に届[とど]きます。\n" +
      "A: 何時[なんじ]ごろですか。\n" +
      "B: 三時[さんじ]から五時[ごじ]の間[あいだ]です。\n" +
      "A: わかりました。待[ま]っています。\n" +
      "B: はい、ありがとうございます。",
    translation:
      "A: When will the package arrive?\n" +
      "B: It will arrive this afternoon.\n" +
      "A: Around what time?\n" +
      "B: Between 3 and 5 o'clock.\n" +
      "A: I understand. I will wait.\n" +
      "B: Yes, thank you.",
    questions: [
      {
        q: "When will the package arrive?",
        choices: ["This morning", "This afternoon", "Tomorrow morning", "Tomorrow evening"],
        answerIndex: 1,
        explanation: "B says 今日の午後に届きます (It will arrive this afternoon)."
      },
      {
        q: "Around what time will the package arrive?",
        choices: ["Between 1 and 2", "Between 3 and 5", "Between 6 and 8", "Between 9 and 11"],
        answerIndex: 1,
        explanation: "B says 三時から五時の間です (Between 3 and 5 o'clock)."
      },
      {
        q: "What will the customer do?",
        choices: ["Go to the office", "Call again later", "Wait", "Cancel the order"],
        answerIndex: 2,
        explanation: "The customer says 待っています (I will wait)."
      }
    ],
    estMinutes: 2,
    tags: ["delivery", "daily-life"]
  },
  {
    id: "l-n5-45",
    title: "店[みせ]でトイレを聞[き]く",
    level: "N5",
    context: "Asking for the bathroom at a store",
    text:
      "A: すみません、トイレはどこですか。\n" +
      "B: 二階[にかい]にあります。\n" +
      "A: あちらですか。\n" +
      "B: いいえ、あそこの階段[かいだん]を上[あ]がってください。\n" +
      "A: わかりました。ありがとうございます。\n" +
      "B: いえいえ。",
    translation:
      "A: Excuse me, where is the bathroom?\n" +
      "B: It is on the second floor.\n" +
      "A: Is it over there?\n" +
      "B: No, please go up the stairs over there.\n" +
      "A: I understand. Thank you.\n" +
      "B: You are welcome.",
    questions: [
      {
        q: "Where is the bathroom?",
        choices: ["On the first floor", "On the second floor", "In the back", "Outside the store"],
        answerIndex: 1,
        explanation: "B says 二階にあります (It is on the second floor)."
      },
      {
        q: "Is the bathroom in the direction A first thought?",
        choices: ["Yes, it is", "No, it is not", "Maybe", "B does not answer"],
        answerIndex: 1,
        explanation: "B says いいえ (No) to A's question あちらですか."
      },
      {
        q: "What should A do to reach the bathroom?",
        choices: ["Take the elevator", "Go up the stairs", "Go outside", "Turn left at the door"],
        answerIndex: 1,
        explanation: "B says あそこの階段を上がってください (Please go up the stairs over there)."
      }
    ],
    estMinutes: 2,
    tags: ["store", "directions"]
  },
  {
    id: "l-n5-46",
    title: "学園祭[がくえんさい]の準備[じゅんび]",
    level: "N5",
    context: "Two students preparing for the school festival",
    text:
      "A: 明日[あした]の学園祭[がくえんさい]の準備[じゅんび]をしましょう。\n" +
      "B: はい、何[なに]をしましょうか。\n" +
      "A: 机[つくえ]を並[なら]べてください。\n" +
      "B: わかりました。私[わたし]は料理[りょうり]を作[つく]ります。\n" +
      "A: ありがとう。六時[ろくじ]に始[はじ]めましょう。\n" +
      "B: はい、そうしましょう。",
    translation:
      "A: Let's prepare for tomorrow's school festival.\n" +
      "B: Sure, what shall we do?\n" +
      "A: Please arrange the desks.\n" +
      "B: All right. I will make the food.\n" +
      "A: Thanks. Let's start at 6 o'clock.\n" +
      "B: Yes, let's do that.",
    questions: [
      {
        q: "What are they preparing for?",
        choices: ["A birthday party", "Tomorrow's school festival", "A sports day", "An exam"],
        answerIndex: 1,
        explanation: "A says 明日の学園祭の準備をしましょう (Let's prepare for tomorrow's school festival)."
      },
      {
        q: "What does A ask B to do?",
        choices: ["Cook the food", "Arrange the desks", "Clean the room", "Buy drinks"],
        answerIndex: 1,
        explanation: "A says 机を並べてください (Please arrange the desks)."
      },
      {
        q: "What will B do?",
        choices: ["Arrange the desks", "Make the food", "Send invitations", "Set up the stage"],
        answerIndex: 1,
        explanation: "B says 私は料理を作ります (I will make the food)."
      },
      {
        q: "When will they start?",
        choices: ["At 5 o'clock", "At 6 o'clock", "At 7 o'clock", "At 8 o'clock"],
        answerIndex: 1,
        explanation: "A says 六時に始めましょう (Let's start at 6 o'clock)."
      }
    ],
    estMinutes: 3,
    tags: ["school", "event"]
  },
  {
    id: "l-n5-47",
    title: "写真屋[しゃしんや]で写真[しゃしん]を印刷[いんさつ]する",
    level: "N5",
    context: "At the photo shop getting photos printed",
    text:
      "A: すみません、写真[しゃしん]を印刷[いんさつ]したいです。\n" +
      "B: はい、何枚[なんまい]ですか。\n" +
      "A: 十枚[じゅうまい]ください。\n" +
      "B: そうですね、一時間[いちじかん]ぐらいかかります。\n" +
      "A: わかりました。いつできあがりますか。\n" +
      "B: 三時[さんじ]ごろにできます。",
    translation:
      "A: Excuse me, I would like to print photos.\n" +
      "B: Sure, how many copies?\n" +
      "A: Ten copies, please.\n" +
      "B: Let me see, it will take about one hour.\n" +
      "A: I see. When will they be ready?\n" +
      "B: Around 3 o'clock.",
    questions: [
      {
        q: "What does the customer want to do?",
        choices: ["Buy a camera", "Print photos", "Take a passport photo", "Repair a camera"],
        answerIndex: 1,
        explanation: "The customer says 写真を印刷したいです (I would like to print photos)."
      },
      {
        q: "How many copies does the customer want?",
        choices: ["Five", "Eight", "Ten", "Twelve"],
        answerIndex: 2,
        explanation: "The customer says 十枚ください (Ten copies, please)."
      },
      {
        q: "How long will it take?",
        choices: ["About thirty minutes", "About one hour", "About two hours", "About one day"],
        answerIndex: 1,
        explanation: "B says 一時間ぐらいかかります (It will take about one hour)."
      },
      {
        q: "When will the photos be ready?",
        choices: ["Around 1 o'clock", "Around 2 o'clock", "Around 3 o'clock", "Around 5 o'clock"],
        answerIndex: 2,
        explanation: "B says 三時ごろにできます (Around 3 o'clock they will be ready)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "services"]
  },
  {
    id: "l-n5-48",
    title: "定期券[ていきけん]を買[か]う",
    level: "N5",
    context: "At the station buying a commuter train pass",
    text:
      "A: すみません、定期券[ていきけん]を買[か]いたいです。\n" +
      "B: どこからどこまでですか。\n" +
      "A: 新宿[しんじゅく]から東京[とうきょう]までです。\n" +
      "B: 一ヶ月[いっかげつ]で一万円[いちまんえん]です。\n" +
      "A: じゃ、これにしてください。\n" +
      "B: はい、ありがとうございます。",
    translation:
      "A: Excuse me, I would like to buy a commuter pass.\n" +
      "B: From where to where?\n" +
      "A: From Shinjuku to Tokyo.\n" +
      "B: It is 10,000 yen for one month.\n" +
      "A: Then, please make it this one.\n" +
      "B: Yes, thank you.",
    questions: [
      {
        q: "What does the customer want to buy?",
        choices: ["A single ticket", "A commuter pass", "A discount card", "A reserved seat"],
        answerIndex: 1,
        explanation: "The customer says 定期券を買いたいです (I would like to buy a commuter pass)."
      },
      {
        q: "What route does the customer need?",
        choices: ["Tokyo to Osaka", "Shinjuku to Tokyo", "Tokyo to Shinjuku", "Shibuya to Tokyo"],
        answerIndex: 1,
        explanation: "The customer says 新宿から東京までです (From Shinjuku to Tokyo)."
      },
      {
        q: "How much is the pass for one month?",
        choices: ["8,000 yen", "9,000 yen", "10,000 yen", "12,000 yen"],
        answerIndex: 2,
        explanation: "B says 一ヶ月で一万円です (It is 10,000 yen for one month)."
      }
    ],
    estMinutes: 2,
    tags: ["station", "transport"]
  },
  {
    id: "l-n5-49",
    title: "ラーメン屋[や]で注文[ちゅうもん]する",
    level: "N5",
    context: "Ordering at a ramen shop",
    text:
      "A: いらっしゃいませ。何[なに]にしますか。\n" +
      "B: ラーメンを一[ひと]つください。\n" +
      "A: 大[おお]きいのと小[ちい]さいのがあります。\n" +
      "B: 大[おお]きいのをください。\n" +
      "A: 飲[の]み物[もの]はいかがですか。\n" +
      "B: じゃ、お茶[ちゃ]をください。",
    translation:
      "A: Welcome. What would you like?\n" +
      "B: One ramen, please.\n" +
      "A: We have large and small sizes.\n" +
      "B: The large one, please.\n" +
      "A: How about a drink?\n" +
      "B: Then, tea please.",
    questions: [
      {
        q: "What does the customer order?",
        choices: ["Udon", "Ramen", "Soba", "Curry"],
        answerIndex: 1,
        explanation: "The customer says ラーメンを一つください (One ramen, please)."
      },
      {
        q: "What size does the customer choose?",
        choices: ["Small", "Medium", "Large", "Extra large"],
        answerIndex: 2,
        explanation: "The customer says 大きいのをください (The large one, please)."
      },
      {
        q: "What sizes does the shop offer?",
        choices: ["Small and medium", "Medium and large", "Large and small", "Only one size"],
        answerIndex: 2,
        explanation: "A says 大きいのと小さいのがあります (We have large and small)."
      },
      {
        q: "What drink does the customer order?",
        choices: ["Water", "Tea", "Coffee", "Juice"],
        answerIndex: 1,
        explanation: "The customer says お茶をください (Tea, please)."
      }
    ],
    estMinutes: 2,
    tags: ["restaurant", "food"]
  },
  {
    id: "l-n5-50",
    title: "風邪[かぜ]の話[はなし]",
    level: "N5",
    context: "Two friends talking about a cold",
    text:
      "A: 元気[げんき]がありませんね。どうしましたか。\n" +
      "B: 風邪[かぜ]をひきました。\n" +
      "A: 大変[たいへん]ですね。薬[くすり]を飲[の]みましたか。\n" +
      "B: はい、でも熱[ねつ]があります。\n" +
      "A: じゃ、今日[きょう]は休[やす]んでください。\n" +
      "B: ありがとうございます。",
    translation:
      "A: You don't look well. What's wrong?\n" +
      "B: I caught a cold.\n" +
      "A: That's tough. Did you take medicine?\n" +
      "B: Yes, but I have a fever.\n" +
      "A: Then, please rest today.\n" +
      "B: Thank you.",
    questions: [
      {
        q: "What is wrong with B?",
        choices: ["B has a headache", "B caught a cold", "B has a stomachache", "B is tired"],
        answerIndex: 1,
        explanation: "B says 風邪をひきました (I caught a cold)."
      },
      {
        q: "Did B take medicine?",
        choices: ["Yes, B did", "No, B did not", "B will take it later", "B forgot"],
        answerIndex: 0,
        explanation: "B answers はい (Yes) to the question 薬を飲みましたか."
      },
      {
        q: "What symptom does B still have?",
        choices: ["A cough", "A fever", "A sore throat", "A runny nose"],
        answerIndex: 1,
        explanation: "B says 熱があります (I have a fever)."
      },
      {
        q: "What does A tell B to do today?",
        choices: ["Go to the hospital", "Take more medicine", "Rest", "Go to work"],
        answerIndex: 2,
        explanation: "A says 今日は休んでください (Please rest today)."
      }
    ],
    estMinutes: 2,
    tags: ["health", "friends"]
  }
];
