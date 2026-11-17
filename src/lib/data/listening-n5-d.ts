import type { ListeningData } from "@/lib/types";

export const listeningN5D: ListeningData[] = [
  {
    id: "l-n5-31",
    title: "本屋[ほんや]で辞書[じしょ]を買[か]う",
    level: "N5",
    context: "At the bookstore buying a dictionary",
    text:
      "A: すみません、辞書[じしょ]はどこですか。\n" +
      "B: 辞書[じしょ]はあちらの棚[たな]です。\n" +
      "A: 日本語[にほんご]の辞書[じしょ]はありますか。\n" +
      "B: はい、この棚[たな]にあります。大[おお]きいのと小[ちい]さいのがあります。\n" +
      "A: 小[ちい]さいのをください。いくらですか。\n" +
      "B: 千五百円[せんごひゃくえん]です。",
    translation:
      "A: Excuse me, where are the dictionaries?\n" +
      "B: The dictionaries are on that shelf over there.\n" +
      "A: Do you have a Japanese dictionary?\n" +
      "B: Yes, they are on this shelf. We have big ones and small ones.\n" +
      "A: I will take a small one, please. How much is it?\n" +
      "B: It is 1,500 yen.",
    questions: [
      {
        q: "What is the customer looking for?",
        choices: ["A magazine", "A dictionary", "A notebook", "A newspaper"],
        answerIndex: 1,
        explanation: "The customer asks 辞書はどこですか (Where are the dictionaries?)."
      },
      {
        q: "Where are the dictionaries?",
        choices: ["In the back room", "On the second floor", "On the shelf over there", "Next to the register"],
        answerIndex: 2,
        explanation: "The clerk says あちらの棚です (On that shelf over there)."
      },
      {
        q: "Which dictionary does the customer buy?",
        choices: ["A big one", "An English one", "A small one", "An expensive one"],
        answerIndex: 2,
        explanation: "The customer says 小さいのをください (I'll take a small one)."
      },
      {
        q: "How much is the dictionary?",
        choices: ["1,000 yen", "1,500 yen", "2,000 yen", "500 yen"],
        answerIndex: 1,
        explanation: "The clerk says 千五百円です (It is 1,500 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "store"]
  },
  {
    id: "l-n5-32",
    title: "近[ちか]くのレストランを聞[き]く",
    level: "N5",
    context: "Asking a stranger about a nearby restaurant",
    text:
      "A: すみません、近[ちか]くにレストランはありますか。\n" +
      "B: はい、駅[えき]の前[まえ]にありますよ。\n" +
      "A: 駅[えき]まで遠[とお]いですか。\n" +
      "B: いいえ、歩[ある]いて五分[ごふん]ぐらいです。\n" +
      "A: どうもありがとうございます。\n" +
      "B: いえいえ。",
    translation:
      "A: Excuse me, is there a restaurant nearby?\n" +
      "B: Yes, there is one in front of the station.\n" +
      "A: Is the station far?\n" +
      "B: No, it is about a five-minute walk.\n" +
      "A: Thank you very much.\n" +
      "B: You are welcome.",
    questions: [
      {
        q: "What is the person looking for?",
        choices: ["A hotel", "A convenience store", "A restaurant", "A bank"],
        answerIndex: 2,
        explanation: "The person asks 近くにレストランはありますか (Is there a restaurant nearby?)."
      },
      {
        q: "Where is the restaurant?",
        choices: ["Behind the station", "Next to the bank", "In front of the station", "Inside the station"],
        answerIndex: 2,
        explanation: "The stranger says 駅の前にありますよ (It is in front of the station)."
      },
      {
        q: "How far is the station on foot?",
        choices: ["About one minute", "About three minutes", "About five minutes", "About ten minutes"],
        answerIndex: 2,
        explanation: "The stranger says 歩いて五分ぐらいです (It is about a five-minute walk)."
      }
    ],
    estMinutes: 2,
    tags: ["directions", "town"]
  },
  {
    id: "l-n5-33",
    title: "ガソリンスタンドで",
    level: "N5",
    context: "At the gas station",
    text:
      "A: いらっしゃいませ。何[なに]を入[い]れますか。\n" +
      "B: レギュラーを満[まん]タンにしてください。\n" +
      "A: はい。オイルも変[か]えますか。\n" +
      "B: いいえ、ガソリンだけです。\n" +
      "A: ガソリンは三千円[さんぜんえん]です。ありがとうございました。\n" +
      "B: ありがとうございます。",
    translation:
      "A: Welcome. What would you like to put in?\n" +
      "B: Please fill it up with regular.\n" +
      "A: Sure. Would you like to change the oil too?\n" +
      "B: No, just gas please.\n" +
      "A: The gas is 3,000 yen. Thank you very much.\n" +
      "B: Thank you.",
    questions: [
      {
        q: "What does the customer ask for?",
        choices: ["Just oil", "Premium gas only", "Regular gas, full tank", "A car wash"],
        answerIndex: 2,
        explanation: "The customer says レギュラーを満タンにしてください (Fill it up with regular)."
      },
      {
        q: "Does the customer change the oil?",
        choices: ["Yes, please", "No, just gas", "Yes, and the tires", "Only the oil filter"],
        answerIndex: 1,
        explanation: "The customer says いいえ、ガソリンだけです (No, just gas please)."
      },
      {
        q: "How much is the gas?",
        choices: ["1,000 yen", "2,000 yen", "3,000 yen", "5,000 yen"],
        answerIndex: 2,
        explanation: "The attendant says ガソリンは三千円です (The gas is 3,000 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["service", "car"]
  },
  {
    id: "l-n5-34",
    title: "夏休[なつやす]みの予定[よてい]",
    level: "N5",
    context: "Talking about summer vacation plans",
    text:
      "A: 夏休[なつやす]みはどこへ行[い]きますか。\n" +
      "B: 海[うみ]へ行[い]きます。家族[かぞく]と一緒[いっしょ]に。\n" +
      "A: いいですね。何日[なんにち]ぐらい行[い]きますか。\n" +
      "B: 一週間[いっしゅうかん]ぐらいです。\n" +
      "A: 楽[たの]しんでください。\n" +
      "B: ありがとう。あなたは？",
    translation:
      "A: Where are you going for summer vacation?\n" +
      "B: I am going to the sea, with my family.\n" +
      "A: That is nice. About how many days will you go?\n" +
      "B: About a week.\n" +
      "A: Have fun.\n" +
      "B: Thanks. And you?",
    questions: [
      {
        q: "Where is B going for summer vacation?",
        choices: ["To the mountains", "To the sea", "To Tokyo", "Abroad"],
        answerIndex: 1,
        explanation: "B says 海へ行きます (I am going to the sea)."
      },
      {
        q: "Who is B going with?",
        choices: ["Friends", "Alone", "Family", "Classmates"],
        answerIndex: 2,
        explanation: "B says 家族と一緒に (With my family)."
      },
      {
        q: "About how long will B go?",
        choices: ["About three days", "About a week", "About two weeks", "About a month"],
        answerIndex: 1,
        explanation: "B says 一週間ぐらいです (About a week)."
      }
    ],
    estMinutes: 2,
    tags: ["travel", "plans"]
  },
  {
    id: "l-n5-35",
    title: "薬局[やっきょく]で薬[くすり]を買[か]う",
    level: "N5",
    context: "At the drugstore buying medicine",
    text:
      "A: すみません、風邪[かぜ]の薬[くすり]はありますか。\n" +
      "B: はい、あります。のどは痛[いた]みますか。\n" +
      "A: はい、のどが痛[いた]いです。熱[ねつ]も少[すこ]しあります。\n" +
      "B: じゃ、この薬[くすり]を一日[いちにち]三回[さんかい]飲[の]んでください。\n" +
      "A: いくらですか。\n" +
      "B: 八百円[はっぴゃくえん]です。",
    translation:
      "A: Excuse me, do you have cold medicine?\n" +
      "B: Yes, we do. Does your throat hurt?\n" +
      "A: Yes, my throat hurts. I also have a slight fever.\n" +
      "B: Then please take this medicine three times a day.\n" +
      "A: How much is it?\n" +
      "B: 800 yen.",
    questions: [
      {
        q: "What does the customer want to buy?",
        choices: ["Cold medicine", "Cough drops", "Bandages", "Eye drops"],
        answerIndex: 0,
        explanation: "The customer asks 風邪の薬はありますか (Do you have cold medicine?)."
      },
      {
        q: "What symptoms does the customer have?",
        choices: ["Headache only", "Sore throat and slight fever", "Stomachache and fever", "Cough only"],
        answerIndex: 1,
        explanation: "The customer says のどが痛い and 熱も少しあります (throat hurts and slight fever)."
      },
      {
        q: "How often should the customer take the medicine?",
        choices: ["Once a day", "Twice a day", "Three times a day", "Only at night"],
        answerIndex: 2,
        explanation: "The pharmacist says 一日三回飲んでください (Take it three times a day)."
      },
      {
        q: "How much is the medicine?",
        choices: ["500 yen", "800 yen", "1,000 yen", "1,200 yen"],
        answerIndex: 1,
        explanation: "The pharmacist says 八百円です (It is 800 yen)."
      }
    ],
    estMinutes: 3,
    tags: ["health", "drugstore"]
  },
  {
    id: "l-n5-36",
    title: "観光客[かんこうきゃく]に駅[えき]を教[おし]える",
    level: "N5",
    context: "Helping a tourist find the station",
    text:
      "A: すみません、駅[えき]はどこですか。\n" +
      "B: あの大[おお]きい道[みち]を右[みぎ]へ行[い]ってください。\n" +
      "A: 右[みぎ]ですね。遠[とお]いですか。\n" +
      "B: いいえ、近[ちか]いです。三分[さんぷん]ぐらいです。\n" +
      "A: ありがとう。助[たす]かりました。\n" +
      "B: いいえ。",
    translation:
      "A: Excuse me, where is the station?\n" +
      "B: Please go down that big road to the right.\n" +
      "A: To the right. Is it far?\n" +
      "B: No, it is close. About three minutes.\n" +
      "A: Thanks. You really helped me.\n" +
      "B: Not at all.",
    questions: [
      {
        q: "What is the tourist looking for?",
        choices: ["A hotel", "A bus stop", "The station", "A restaurant"],
        answerIndex: 2,
        explanation: "The tourist asks 駅はどこですか (Where is the station?)."
      },
      {
        q: "Which direction should the tourist go first?",
        choices: ["Left", "Right", "Straight", "Back"],
        answerIndex: 1,
        explanation: "The helper says 右へ行ってください (Go to the right)."
      },
      {
        q: "How long does it take to get there?",
        choices: ["About one minute", "About three minutes", "About ten minutes", "About fifteen minutes"],
        answerIndex: 1,
        explanation: "The helper says 三分ぐらいです (About three minutes)."
      }
    ],
    estMinutes: 2,
    tags: ["directions", "tourist"]
  },
  {
    id: "l-n5-37",
    title: "学校[がっこう]の食堂[しょくどう]で昼[ひる]ご飯[はん]",
    level: "N5",
    context: "At the school cafeteria choosing lunch",
    text:
      "A: 今日[きょう]は何[なに]を食[た]べますか。\n" +
      "B: カレーを食[た]べます。Aさんは？\n" +
      "A: 私[わたし]はうどんを食[た]べます。\n" +
      "B: 飲[の]み物[もの]は何[なに]にしますか。\n" +
      "A: お茶[ちゃ]をください。Bさんは？\n" +
      "B: 私[わたし]はコーヒーを飲[の]みます。",
    translation:
      "A: What are you eating today?\n" +
      "B: I will eat curry. What about you, A?\n" +
      "A: I will eat udon.\n" +
      "B: What would you like to drink?\n" +
      "A: Tea, please. And you, B?\n" +
      "B: I will drink coffee.",
    questions: [
      {
        q: "What will A eat?",
        choices: ["Curry", "Udon", "Sushi", "Bread"],
        answerIndex: 1,
        explanation: "A says うどんを食べます (I will eat udon)."
      },
      {
        q: "What will B eat?",
        choices: ["Udon", "Rice", "Curry", "Noodles"],
        answerIndex: 2,
        explanation: "B says カレーを食べます (I will eat curry)."
      },
      {
        q: "What will A drink?",
        choices: ["Coffee", "Juice", "Water", "Tea"],
        answerIndex: 3,
        explanation: "A says お茶をください (Tea, please)."
      },
      {
        q: "What will B drink?",
        choices: ["Tea", "Coffee", "Milk", "Cola"],
        answerIndex: 1,
        explanation: "B says コーヒーを飲みます (I will drink coffee)."
      }
    ],
    estMinutes: 2,
    tags: ["food", "school"]
  },
  {
    id: "l-n5-38",
    title: "好[す]きなテレビ番組[ばんぐみ]",
    level: "N5",
    context: "Discussing a favorite TV show",
    text:
      "A: 毎晩[まいばん]テレビを見[み]ますか。\n" +
      "B: はい、見[み]ます。ドラマが好[す]きです。\n" +
      "A: 何時[なんじ]から見[み]ますか。\n" +
      "B: 夜[よる]九時[くじ]から十時[じゅうじ]まで見[み]ます。\n" +
      "A: あ、私[わたし]もそのドラマを見[み]ます。とても面白[おもしろ]いですね。",
    translation:
      "A: Do you watch TV every night?\n" +
      "B: Yes, I do. I like dramas.\n" +
      "A: From what time do you watch?\n" +
      "B: I watch from 9 to 10 at night.\n" +
      "A: Oh, I watch that drama too. It is very interesting, isn't it?",
    questions: [
      {
        q: "What kind of TV does B like?",
        choices: ["News", "Dramas", "Sports", "Cooking shows"],
        answerIndex: 1,
        explanation: "B says ドラマが好きです (I like dramas)."
      },
      {
        q: "From what time does B watch TV?",
        choices: ["7 PM", "8 PM", "9 PM", "10 PM"],
        answerIndex: 2,
        explanation: "B says 夜九時から見ます (I watch from 9 PM)."
      },
      {
        q: "Until what time does B watch?",
        choices: ["9 PM", "10 PM", "11 PM", "Midnight"],
        answerIndex: 1,
        explanation: "B says 十時まで見ます (I watch until 10 PM)."
      },
      {
        q: "What does A think of the drama?",
        choices: ["Boring", "Scary", "Very interesting", "Too long"],
        answerIndex: 2,
        explanation: "A says とても面白いですね (It is very interesting)."
      }
    ],
    estMinutes: 2,
    tags: ["hobby", "media"]
  },
  {
    id: "l-n5-39",
    title: "タクシーの運転手[うんてんしゅ]に道[みち]を教[おし]える",
    level: "N5",
    context: "Giving directions to a taxi driver",
    text:
      "A: すみません、駅[えき]の前[まえ]のホテルへ行[い]ってください。\n" +
      "B: はい、わかりました。\n" +
      "A: この道[みち]を真[ま]っ直[す]ぐ行[い]って、二[ふた]つ目[め]の角[かど]を左[ひだり]に曲[ま]がってください。\n" +
      "B: 真っ直ぐで、二つ目を左ですね。\n" +
      "A: はい、そこに白[しろ]い建物[たてもの]があります。",
    translation:
      "A: Excuse me, please go to the hotel in front of the station.\n" +
      "B: Yes, understood.\n" +
      "A: Please go straight down this road, and turn left at the second corner.\n" +
      "B: Straight, and left at the second one, right.\n" +
      "A: Yes, there is a white building there.",
    questions: [
      {
        q: "Where does the passenger want to go?",
        choices: ["A hotel in front of the station", "A school near the park", "A hospital downtown", "A bank by the river"],
        answerIndex: 0,
        explanation: "The passenger says 駅の前のホテルへ行ってください (Please go to the hotel in front of the station)."
      },
      {
        q: "What should the driver do first?",
        choices: ["Turn right", "Turn left", "Go straight", "Stop here"],
        answerIndex: 2,
        explanation: "The passenger says この道を真っ直ぐ行って (Go straight down this road)."
      },
      {
        q: "Where should the driver turn left?",
        choices: ["At the first corner", "At the second corner", "At the traffic light", "At the third corner"],
        answerIndex: 1,
        explanation: "The passenger says 二つ目の角を左に曲がってください (Turn left at the second corner)."
      },
      {
        q: "What is at the destination?",
        choices: ["A red building", "A white building", "A tall tower", "A small shop"],
        answerIndex: 1,
        explanation: "The passenger says そこに白い建物があります (There is a white building there)."
      }
    ],
    estMinutes: 3,
    tags: ["directions", "taxi"]
  },
  {
    id: "l-n5-40",
    title: "新[あたら]しい趣味[しゅみ]：写真[しゃしん]",
    level: "N5",
    context: "Talking about a new hobby (photography)",
    text:
      "A: 最近[さいきん]何[なに]か新[あたら]しいことをしていますか。\n" +
      "B: はい、写真[しゃしん]を撮[と]り始[はじ]めました。\n" +
      "A: いいですね。何[なに]を撮[と]りますか。\n" +
      "B: 公園[こうえん]で花[はな]や鳥[とり]を撮[と]ります。\n" +
      "A: 写真[しゃしん]を見[み]せてください。\n" +
      "B: はい、これです。",
    translation:
      "A: Are you doing anything new lately?\n" +
      "B: Yes, I started taking photos.\n" +
      "A: That is nice. What do you shoot?\n" +
      "B: I take pictures of flowers and birds in the park.\n" +
      "A: Please show me your photos.\n" +
      "B: Sure, here they are.",
    questions: [
      {
        q: "What new hobby did B start?",
        choices: ["Painting", "Cooking", "Photography", "Running"],
        answerIndex: 2,
        explanation: "B says 写真を撮り始めました (I started taking photos)."
      },
      {
        q: "What does B photograph?",
        choices: ["Cars and trains", "Flowers and birds", "People and food", "Buildings and streets"],
        answerIndex: 1,
        explanation: "B says 花や鳥を撮ります (I take pictures of flowers and birds)."
      },
      {
        q: "Where does B take photos?",
        choices: ["At the station", "At school", "In the park", "At home"],
        answerIndex: 2,
        explanation: "B says 公園で...撮ります (I take pictures in the park)."
      },
      {
        q: "What does A ask B to do?",
        choices: ["Take a photo of A", "Show the photos", "Go to the park together", "Buy a new camera"],
        answerIndex: 1,
        explanation: "A says 写真を見せてください (Please show me your photos)."
      }
    ],
    estMinutes: 2,
    tags: ["hobby", "free-time"]
  }
];
