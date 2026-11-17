import type { ListeningData } from "@/lib/types";

export const listeningN5F: ListeningData[] = [
  {
    id: "l-n5-51",
    title: "百円[ひゃくえん]ショップで買[か]い物[もの]",
    level: "N5",
    context: "At the 100-yen shop buying plates and cups",
    text:
      "A: すみません、この皿[さら]は百円[ひゃくえん]ですか。\n" +
      "B: はい、全部[ぜんぶ]百円[ひゃくえん]です。\n" +
      "A: あの赤[あか]いカップはありますか。\n" +
      "B: ありますよ。あちらにあります。\n" +
      "A: じゃ、三[みっ]つください。\n" +
      "B: はい、ありがとうございます。三百円[さんびゃくえん]です。",
    translation:
      "A: Excuse me, is this plate 100 yen?\n" +
      "B: Yes, everything is 100 yen.\n" +
      "A: Do you have that red cup?\n" +
      "B: Yes. It is over there.\n" +
      "A: Then I'll take three.\n" +
      "B: Thank you. That is 300 yen.",
    questions: [
      {
        q: "How much is one plate?",
        choices: ["50 yen", "100 yen", "200 yen", "300 yen"],
        answerIndex: 1,
        explanation: "The clerk says 全部百円です (Everything is 100 yen)."
      },
      {
        q: "What does the customer want to buy?",
        choices: ["A red plate", "A blue cup", "A red cup", "A yellow plate"],
        answerIndex: 2,
        explanation: "The customer asks あの赤いカップはありますか (Do you have that red cup?)."
      },
      {
        q: "How many cups does the customer buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "The customer says 三つください (I'll take three)."
      },
      {
        q: "How much does the customer pay in total?",
        choices: ["100 yen", "200 yen", "300 yen", "400 yen"],
        answerIndex: 2,
        explanation: "The clerk says 三百円です (300 yen) for three 100-yen cups."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "store"]
  },
  {
    id: "l-n5-52",
    title: "カフェでWi-Fiを聞[き]く",
    level: "N5",
    context: "Asking about Wi-Fi and ordering coffee at a café",
    text:
      "A: すみません、ここにWi-Fiはありますか。\n" +
      "B: はい、あります。パスワードは「cafe123」です。\n" +
      "A: ここで勉強[べんきょう]してもいいですか。\n" +
      "B: はい、どうぞ。コーヒーはいかがですか。\n" +
      "A: じゃ、ホットコーヒーを一[ひと]つください。\n" +
      "B: はい、少々[しょうしょう]お待[ま]ちください。",
    translation:
      "A: Excuse me, is there Wi-Fi here?\n" +
      "B: Yes, there is. The password is \"cafe123\".\n" +
      "A: May I study here?\n" +
      "B: Yes, go ahead. How about some coffee?\n" +
      "A: Then I'll have one hot coffee.\n" +
      "B: Yes, please wait a moment.",
    questions: [
      {
        q: "What is the customer asking about first?",
        choices: ["The menu", "The Wi-Fi", "The price", "The opening hours"],
        answerIndex: 1,
        explanation: "The customer asks ここにWi-Fiはありますか (Is there Wi-Fi here?)."
      },
      {
        q: "What is the Wi-Fi password?",
        choices: ["cafe123", "wifi123", "coffee1", "cafe456"],
        answerIndex: 0,
        explanation: "The clerk says the password is cafe123."
      },
      {
        q: "What does the customer order?",
        choices: ["Iced coffee x2", "Hot coffee x1", "Tea x1", "Hot coffee x2"],
        answerIndex: 1,
        explanation: "The customer says ホットコーヒーを一つください (One hot coffee, please)."
      },
      {
        q: "What does the staff ask the customer to do?",
        choices: ["Pay first", "Order food too", "Wait a moment", "Move seats"],
        answerIndex: 2,
        explanation: "The clerk says 少々お待ちください (Please wait a moment)."
      }
    ],
    estMinutes: 3,
    tags: ["cafe", "wifi"]
  },
  {
    id: "l-n5-53",
    title: "地下鉄[ちかてつ]の改札[かいさつ]で",
    level: "N5",
    context: "Asking about fare, tickets and track at the subway station",
    text:
      "A: すみません、新宿[しんじゅく]までいくらですか。\n" +
      "B: 二百十円[にひゃくじゅうえん]です。\n" +
      "A: 切符[きっぷ]を買[か]いたいです。\n" +
      "B: あの機械[きかい]で買[か]えます。\n" +
      "A: どうも。新宿[しんじゅく]は何番線[なんばんせん]ですか。\n" +
      "B: 三番線[さんばんせん]ですよ。",
    translation:
      "A: Excuse me, how much is it to Shinjuku?\n" +
      "B: It is 210 yen.\n" +
      "A: I want to buy a ticket.\n" +
      "B: You can buy one at that machine.\n" +
      "A: Thanks. Which track is Shinjuku?\n" +
      "B: Track 3.",
    questions: [
      {
        q: "Where does the customer want to go?",
        choices: ["Shibuya", "Shinjuku", "Ueno", "Tokyo"],
        answerIndex: 1,
        explanation: "The customer asks 新宿までいくらですか (How much to Shinjuku?)."
      },
      {
        q: "How much is the fare?",
        choices: ["120 yen", "200 yen", "210 yen", "250 yen"],
        answerIndex: 2,
        explanation: "The clerk says 二百十円です (210 yen)."
      },
      {
        q: "Where can the customer buy a ticket?",
        choices: ["At the counter", "At the machine", "Online", "At the kiosk"],
        answerIndex: 1,
        explanation: "The clerk says あの機械で買えます (You can buy at that machine)."
      },
      {
        q: "Which track goes to Shinjuku?",
        choices: ["Track 1", "Track 2", "Track 3", "Track 4"],
        answerIndex: 2,
        explanation: "The clerk says 三番線ですよ (Track 3)."
      }
    ],
    estMinutes: 2,
    tags: ["station", "transit"]
  },
  {
    id: "l-n5-54",
    title: "新[あたら]しいスマホを買[か]う",
    level: "N5",
    context: "Buying a new smartphone at an electronics shop",
    text:
      "A: すみません、スマホを見[み]たいです。\n" +
      "B: はい、こちらです。白[しろ]と黒[くろ]があります。\n" +
      "A: 白[しろ]はいくらですか。\n" +
      "B: 三万円[さんまんえん]です。\n" +
      "A: 高[たか]いですね。もう少[すこ]し安[やす]いのは？\n" +
      "B: これが二万円[にまんえん]です。",
    translation:
      "A: Excuse me, I'd like to see smartphones.\n" +
      "B: Yes, here they are. We have white and black.\n" +
      "A: How much is the white one?\n" +
      "B: 30,000 yen.\n" +
      "A: That's expensive. Do you have something cheaper?\n" +
      "B: This one is 20,000 yen.",
    questions: [
      {
        q: "What does the customer want to see?",
        choices: ["Cameras", "Laptops", "Smartphones", "Watches"],
        answerIndex: 2,
        explanation: "The customer says スマホを見たいです (I want to see smartphones)."
      },
      {
        q: "What colors are available?",
        choices: ["White and red", "White and black", "Black and blue", "Red and white"],
        answerIndex: 1,
        explanation: "The clerk says 白と黒があります (We have white and black)."
      },
      {
        q: "How much is the white phone?",
        choices: ["20,000 yen", "25,000 yen", "30,000 yen", "35,000 yen"],
        answerIndex: 2,
        explanation: "The clerk says 三万円です (30,000 yen) for the white one."
      },
      {
        q: "How much is the cheaper phone?",
        choices: ["10,000 yen", "15,000 yen", "20,000 yen", "25,000 yen"],
        answerIndex: 2,
        explanation: "The clerk offers これが二万円です (This one is 20,000 yen)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "phone"]
  },
  {
    id: "l-n5-55",
    title: "お寿司[すし]屋[や]さんで",
    level: "N5",
    context: "Ordering sushi at a sushi restaurant",
    text:
      "A: いらっしゃいませ。何名[なんめい]様[さま]ですか。\n" +
      "B: 二人[ふたり]です。\n" +
      "A: こちらへどうぞ。メニューです。\n" +
      "B: はい。このマグロはいくらですか。\n" +
      "A: 一[ひと]つ二百円[にひゃくえん]です。\n" +
      "B: じゃ、マグロを三[みっ]つください。",
    translation:
      "A: Welcome. How many people?\n" +
      "B: Two.\n" +
      "A: Please come this way. Here is the menu.\n" +
      "B: Thanks. How much is this tuna?\n" +
      "A: 200 yen each.\n" +
      "B: Then I'll have three tuna, please.",
    questions: [
      {
        q: "How many people are dining?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "The customer says 二人です (Two people)."
      },
      {
        q: "What does the customer ask the price of?",
        choices: ["Rice", "Soup", "Tuna", "Tea"],
        answerIndex: 2,
        explanation: "The customer asks このマグロはいくらですか (How much is this tuna?)."
      },
      {
        q: "How much is one tuna sushi?",
        choices: ["100 yen", "150 yen", "200 yen", "250 yen"],
        answerIndex: 2,
        explanation: "The server says 一つ二百円です (200 yen each)."
      },
      {
        q: "How many tuna does the customer order?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "The customer says マグロを三つください (Three tuna, please)."
      }
    ],
    estMinutes: 2,
    tags: ["restaurant", "sushi"]
  },
  {
    id: "l-n5-56",
    title: "洗濯[せんたく]について話[はな]す",
    level: "N5",
    context: "Discussing laundry and the rainy weather",
    text:
      "A: 今日[きょう]は洗濯[せんたく]をしますか。\n" +
      "B: はい。でも、雨[あめ]が降[ふ]っています。\n" +
      "A: 大丈夫[だいじょうぶ]です。乾燥機[かんそうき]があります。\n" +
      "B: そうですか。じゃ、お願[ねが]いします。\n" +
      "A: シャツは何枚[なんまい]ですか。\n" +
      "B: 五枚[ごまい]です。",
    translation:
      "A: Are you doing laundry today?\n" +
      "B: Yes. But it's raining.\n" +
      "A: No problem. We have a dryer.\n" +
      "B: Oh, I see. Then please go ahead.\n" +
      "A: How many shirts do you have?\n" +
      "B: Five.",
    questions: [
      {
        q: "What does the speaker plan to do today?",
        choices: ["Clean the room", "Do laundry", "Cook dinner", "Go shopping"],
        answerIndex: 1,
        explanation: "Speaker A asks 今日は洗濯をしますか (Will you do laundry today?)."
      },
      {
        q: "What is the weather like?",
        choices: ["Sunny", "Cloudy", "Raining", "Snowing"],
        answerIndex: 2,
        explanation: "Speaker B says 雨が降っています (It's raining)."
      },
      {
        q: "Why is it fine to do laundry despite the weather?",
        choices: ["The rain will stop", "There is a dryer", "It's not cold", "The shirts dry fast"],
        answerIndex: 1,
        explanation: "Speaker A says 乾燥機があります (There's a dryer)."
      },
      {
        q: "How many shirts does B have?",
        choices: ["Three", "Four", "Five", "Six"],
        answerIndex: 2,
        explanation: "Speaker B says 五枚です (Five shirts)."
      }
    ],
    estMinutes: 2,
    tags: ["home", "laundry"]
  },
  {
    id: "l-n5-57",
    title: "銭湯[せんとう]で",
    level: "N5",
    context: "Asking about fees and entrance at the public bath (sentō)",
    text:
      "A: すみません、入浴[にゅうよく]はいくらですか。\n" +
      "B: 四百七十円[よんひゃくななじゅうえん]です。\n" +
      "A: タオルはありますか。\n" +
      "B: はい、百円[ひゃくえん]で売[う]っています。\n" +
      "A: じゃ、お願[ねが]いします。\n" +
      "B: 男性[だんせい]は右[みぎ]、女性[じょせい]は左[ひだり]です。",
    translation:
      "A: Excuse me, how much is bathing?\n" +
      "B: 470 yen.\n" +
      "A: Do you have towels?\n" +
      "B: Yes, we sell them for 100 yen.\n" +
      "A: Then one, please.\n" +
      "B: Men are on the right, women on the left.",
    questions: [
      {
        q: "How much is bathing at the sentō?",
        choices: ["400 yen", "470 yen", "570 yen", "700 yen"],
        answerIndex: 1,
        explanation: "The clerk says 四百七十円です (470 yen)."
      },
      {
        q: "How much does a towel cost?",
        choices: ["50 yen", "100 yen", "150 yen", "200 yen"],
        answerIndex: 1,
        explanation: "The clerk says 百円で売っています (We sell them for 100 yen)."
      },
      {
        q: "Where should men go?",
        choices: ["Left", "Right", "Straight ahead", "Upstairs"],
        answerIndex: 1,
        explanation: "The clerk says 男性は右 (Men on the right)."
      },
      {
        q: "Where should women go?",
        choices: ["Left", "Right", "Behind the counter", "Downstairs"],
        answerIndex: 0,
        explanation: "The clerk says 女性は左 (Women on the left)."
      }
    ],
    estMinutes: 3,
    tags: ["sentō", "bath"]
  },
  {
    id: "l-n5-58",
    title: "アルバイトの面接[めんせつ]",
    level: "N5",
    context: "A short part-time job interview at a shop",
    text:
      "A: こんにちは。名前[なまえ]を書[か]いてください。\n" +
      "B: はい。田中[たなか]です。\n" +
      "A: 何時[なんじ]から働[はたら]けますか。\n" +
      "B: 午後[ごご]五時[ごじ]から九時[くじ]までです。\n" +
      "A: 土曜日[どようび]は大丈夫[だいじょうぶ]ですか。\n" +
      "B: はい、大丈夫[だいじょうぶ]です。",
    translation:
      "A: Hello. Please write your name.\n" +
      "B: Yes. I'm Tanaka.\n" +
      "A: From what time can you work?\n" +
      "B: From 5 PM to 9 PM.\n" +
      "A: Are Saturdays OK?\n" +
      "B: Yes, that's fine.",
    questions: [
      {
        q: "What does the interviewer ask the applicant to write?",
        choices: ["Their address", "Their name", "Their phone number", "Their experience"],
        answerIndex: 1,
        explanation: "The interviewer says 名前を書いてください (Please write your name)."
      },
      {
        q: "What is the applicant's name?",
        choices: ["Tanaka", "Sato", "Suzuki", "Yamada"],
        answerIndex: 0,
        explanation: "The applicant says 田中です (I'm Tanaka)."
      },
      {
        q: "What hours can the applicant work?",
        choices: ["9 AM to 5 PM", "5 PM to 9 PM", "10 AM to 6 PM", "6 AM to 10 AM"],
        answerIndex: 1,
        explanation: "The applicant says 午後五時から九時までです (From 5 PM to 9 PM)."
      },
      {
        q: "Can the applicant work on Saturday?",
        choices: ["Yes", "No", "Only mornings", "Only evenings"],
        answerIndex: 0,
        explanation: "The applicant answers 大丈夫です (It's fine) about Saturday."
      }
    ],
    estMinutes: 3,
    tags: ["job", "interview"]
  },
  {
    id: "l-n5-59",
    title: "レンタルビデオ屋[や]で",
    level: "N5",
    context: "Renting a movie at a video rental shop",
    text:
      "A: すみません、この映画[えいが]を借[か]りたいです。\n" +
      "B: 会員[かいいん]カードはありますか。\n" +
      "A: ありません。作[つく]れますか。\n" +
      "B: はい。身分証[みぶんしょう]を見[み]せてください。\n" +
      "A: はい。一日[いちにち]いくらですか。\n" +
      "B: 三百円[さんびゃくえん]です。",
    translation:
      "A: Excuse me, I'd like to rent this movie.\n" +
      "B: Do you have a membership card?\n" +
      "A: No. Can I make one?\n" +
      "B: Yes. Please show me your ID.\n" +
      "A: Here. How much is it per day?\n" +
      "B: 300 yen.",
    questions: [
      {
        q: "What does the customer want to do?",
        choices: ["Buy a movie", "Rent a movie", "Return a movie", "Sell a movie"],
        answerIndex: 1,
        explanation: "The customer says この映画を借りたいです (I want to rent this movie)."
      },
      {
        q: "Does the customer have a membership card?",
        choices: ["Yes, but it's expired", "No", "Yes, here it is", "They lost it"],
        answerIndex: 1,
        explanation: "The customer says ありません (I don't have one)."
      },
      {
        q: "What does the staff ask the customer to show?",
        choices: ["A phone number", "An address", "An ID", "A credit card"],
        answerIndex: 2,
        explanation: "The staff says 身分証を見せてください (Please show your ID)."
      },
      {
        q: "How much is the rental per day?",
        choices: ["200 yen", "300 yen", "400 yen", "500 yen"],
        answerIndex: 1,
        explanation: "The staff says 三百円です (300 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["shop", "rental"]
  },
  {
    id: "l-n5-60",
    title: "財布[さいふ]をなくしたと届[とど]ける",
    level: "N5",
    context: "Reporting a lost wallet at the police box",
    text:
      "A: すみません、財布[さいふ]をなくしました。\n" +
      "B: どこでなくしましたか。\n" +
      "A: 駅[えき]の前[まえ]だと思[おも]います。\n" +
      "B: 中[なか]に何[なに]が入[はい]っていましたか。\n" +
      "A: カードと三千円[さんぜんえん]です。\n" +
      "B: じゃ、この紙[かみ]に書[か]いてください。",
    translation:
      "A: Excuse me, I lost my wallet.\n" +
      "B: Where did you lose it?\n" +
      "A: I think in front of the station.\n" +
      "B: What was inside it?\n" +
      "A: Cards and 3,000 yen.\n" +
      "B: Then please write on this paper.",
    questions: [
      {
        q: "What did the person lose?",
        choices: ["A phone", "A wallet", "A bag", "Keys"],
        answerIndex: 1,
        explanation: "The person says 財布をなくしました (I lost my wallet)."
      },
      {
        q: "Where does the person think they lost it?",
        choices: ["At home", "At a shop", "In front of the station", "On the train"],
        answerIndex: 2,
        explanation: "The person says 駅の前だと思います (I think in front of the station)."
      },
      {
        q: "What was inside the wallet?",
        choices: ["Only money", "Cards and 3,000 yen", "Only cards", "Money and a phone"],
        answerIndex: 1,
        explanation: "The person says カードと三千円です (Cards and 3,000 yen)."
      },
      {
        q: "What does the officer ask the person to do?",
        choices: ["Call back later", "Come back tomorrow", "Pay a fee first", "Write on a paper"],
        answerIndex: 3,
        explanation: "The officer says この紙に書いてください (Please write on this paper)."
      }
    ],
    estMinutes: 2,
    tags: ["lost", "police"]
  }
];
