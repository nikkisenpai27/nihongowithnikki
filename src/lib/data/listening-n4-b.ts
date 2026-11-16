import type { ListeningData } from "@/lib/types";

export const listeningN4B: ListeningData[] = [
  {
    id: "l-n4-11",
    title: "Job Interview",
    level: "N4",
    context: "A job interview at an office",
    text: "A: はじめまして。自己紹介[じこしょうかい]をお願[ねが]いします。\nB: はい。田中[たなか]と申[もう]します。今[いま]、大学[だいがく]で経営学[けいえいがく]を勉強[べんきょう]しています。\nA: どうしてこの会社[かいしゃ]で働[はたら]きたいですか。\nB: 御社[おんしゃ]の製品[せいひん]に前[まえ]から興味[きょうみ]があったからです。\nA: あなたの長所[ちょうしょ]は何[なん]ですか。\nB: 諦[あきら]めないことと、チームの仲間[なかま]と協力[きょうりょく]できることです。\nA: ありがとうございました。後[あと]で結果[けっか]をご連絡[れんらく]します。",
    translation: "A: Nice to meet you. Please introduce yourself.\nB: Yes. My name is Tanaka. I am currently studying business administration at university.\nA: Why do you want to work at this company?\nB: Because I have been interested in your company's products for a long time.\nA: What is your strength?\nB: Not giving up, and being able to cooperate with my team members.\nA: Thank you. We will contact you later with the results.",
    questions: [
      {
        q: "Why does the applicant want to work at this company?",
        choices: [
          "Because the salary is high",
          "Because he is interested in the products",
          "Because the office is close to home",
          "Because a friend works there"
        ],
        answerIndex: 1,
        explanation: "B says he has been interested in the company's products for a long time."
      },
      {
        q: "What is the applicant's strength?",
        choices: [
          "Speaking English well",
          "Writing computer programs",
          "Not giving up and teamwork",
          "Always being on time"
        ],
        answerIndex: 2,
        explanation: "B lists not giving up and cooperating with team members as his strengths."
      },
      {
        q: "What will happen after the interview?",
        choices: [
          "B will start working tomorrow",
          "B will receive the results later",
          "B will take a written test",
          "B will visit the office again"
        ],
        answerIndex: 1,
        explanation: "A says they will contact B later with the results."
      }
    ],
    estMinutes: 4,
    tags: ["business", "interview"]
  },
  {
    id: "l-n4-12",
    title: "Wrong Meeting Time",
    level: "N4",
    context: "Two coworkers confirming a meeting time",
    text: "A: 明日[あした]の打[う]ち合[あ]わせの時間[じかん]は何時[なんじ]でしたっけ。\nB: 三時[さんじ]ですよ。\nA: えっ、私[わたし]は四時[よじ]だと聞[き]いていました。\nB: すみません。メールの時間[じかん]が間違[まちが]っていました。\nA: それで、正[ただ]しい時間[じかん]はどちらですか。\nB: 三時[さんじ]が正[ただ]しいです。四時[よじ]ではありません。\nA: 分[わ]かりました。じゃ、明日[あした]三時[さんじ]にします。",
    translation: "A: What time was tomorrow's meeting again?\nB: It's at three o'clock.\nA: Huh, I heard it was four o'clock.\nB: I'm sorry. The time in the email was wrong.\nA: So which is the correct time?\nB: Three o'clock is correct. It's not four.\nA: I see. Then let's make it three o'clock tomorrow.",
    questions: [
      {
        q: "What time did A originally think the meeting was?",
        choices: ["2:00", "3:00", "4:00", "5:00"],
        answerIndex: 2,
        explanation: "A says they heard the meeting was at four o'clock."
      },
      {
        q: "What is the correct meeting time?",
        choices: ["2:00", "3:00", "4:00", "5:00"],
        answerIndex: 1,
        explanation: "B confirms that three o'clock is the correct time."
      },
      {
        q: "What caused the confusion?",
        choices: [
          "The meeting room was changed",
          "The time written in the email was wrong",
          "The meeting date was wrong",
          "A did not receive the email"
        ],
        answerIndex: 1,
        explanation: "B admits that the time written in the email was a mistake."
      }
    ],
    estMinutes: 3,
    tags: ["work", "schedule"]
  },
  {
    id: "l-n4-13",
    title: "Making Curry",
    level: "N4",
    context: "Two roommates planning dinner",
    text: "A: 今晩[こんばん]の夕食[ゆうしょく]は何[なに]を作[つく]りますか。\nB: カレーを作[つく]ろうと思[おも]っています。\nA: いいですね。材料[ざいりょう]は何[なに]が必要[ひつよう]ですか。\nB: 玉葱[たまねぎ]、人参[にんじん]、牛肉[ぎゅうにく]、それからカレールーです。\nA: 作[つく]り方[かた]は難[むずか]しいですか。\nB: いいえ。野菜[やさい]を切[き]って、水[みず]と一緒[いっしょ]に煮[に]るだけです。三十分[さんじゅっぷん]でできますよ。",
    translation: "A: What are we making for dinner tonight?\nB: I'm thinking of making curry.\nA: Sounds good. What ingredients do we need?\nB: Onion, carrot, beef, and curry roux.\nA: Is the recipe difficult?\nB: No. We just cut the vegetables and simmer them with water. It's done in thirty minutes.",
    questions: [
      {
        q: "What are they making for dinner?",
        choices: ["Sushi", "Curry", "Ramen", "Salad"],
        answerIndex: 1,
        explanation: "B says they are thinking of making curry."
      },
      {
        q: "Which ingredient is NOT needed?",
        choices: ["Onion", "Carrot", "Beef", "Potato"],
        answerIndex: 3,
        explanation: "The listed ingredients are onion, carrot, beef, and curry roux. Potato is not mentioned."
      },
      {
        q: "How long does it take to make the curry?",
        choices: ["15 minutes", "30 minutes", "1 hour", "45 minutes"],
        answerIndex: 1,
        explanation: "B says the curry can be made in thirty minutes."
      }
    ],
    estMinutes: 4,
    tags: ["cooking", "food"]
  },
  {
    id: "l-n4-14",
    title: "Trip to Kyoto",
    level: "N4",
    context: "Two friends talking about a recent trip",
    text: "A: 先週[せんしゅう]、京都[きょうと]へ行[い]きましたか。\nB: はい、行[い]きました。とても楽[たの]しかったです。\nA: 何[なに]が一番[いちばん]良[よ]かったですか。\nB: 金閣寺[きんかくじ]がきれいで、写真[しゃしん]をたくさん撮[と]りました。\nA: 食[た]べ物[もの]はどうでしたか。\nB: 抹茶[まっちゃ]のアイスが美味[おい]しかったです。また行[い]きたいです。",
    translation: "A: Did you go to Kyoto last week?\nB: Yes, I did. It was very fun.\nA: What was the best part?\nB: Kinkaku-ji was beautiful, and I took a lot of photos.\nA: How was the food?\nB: The matcha ice cream was delicious. I want to go again.",
    questions: [
      {
        q: "Where did B go last week?",
        choices: ["Tokyo", "Osaka", "Kyoto", "Hokkaido"],
        answerIndex: 2,
        explanation: "B confirms they went to Kyoto last week."
      },
      {
        q: "What did B take many pictures of?",
        choices: ["Kinkaku-ji", "Food", "People on the street", "The hotel"],
        answerIndex: 0,
        explanation: "B says Kinkaku-ji was beautiful and took many photos of it."
      },
      {
        q: "What did B enjoy eating?",
        choices: ["Sushi", "Matcha ice cream", "Ramen", "Tempura"],
        answerIndex: 1,
        explanation: "B says the matcha ice cream was delicious."
      }
    ],
    estMinutes: 3,
    tags: ["travel", "food"]
  },
  {
    id: "l-n4-15",
    title: "Buying a Phone",
    level: "N4",
    context: "At an electronics store",
    text: "A: いらっしゃいませ。何[なに]をお探[さが]しですか。\nB: 新[あたら]しいスマートフォンを買[か]いたいです。\nA: こちらが今週[こんしゅう]の新作[しんさく]です。カメラがとてもいいですよ。\nB: 値段[ねだん]はいくらですか。\nA: 八万円[はちまんえん]です。でも、今[いま]なら二万円[にまんえん]安[やす]くなります。\nB: じゃ、これにします。",
    translation: "A: Welcome. What are you looking for?\nB: I'd like to buy a new smartphone.\nA: This is this week's new model. The camera is very good.\nB: How much is it?\nA: It's 80,000 yen. But right now you can get 20,000 yen off.\nB: Then I'll take this one.",
    questions: [
      {
        q: "What does B want to buy?",
        choices: ["A camera", "A smartphone", "A laptop", "A television"],
        answerIndex: 1,
        explanation: "B says they want to buy a new smartphone."
      },
      {
        q: "What is the strong point of the new model?",
        choices: ["A large screen", "A good camera", "Long battery life", "Light weight"],
        answerIndex: 1,
        explanation: "A says the camera of the new model is very good."
      },
      {
        q: "How much will B pay with the discount?",
        choices: ["80,000 yen", "70,000 yen", "60,000 yen", "50,000 yen"],
        answerIndex: 2,
        explanation: "The original price is 80,000 yen minus a 20,000 yen discount, so 60,000 yen."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "technology"]
  },
  {
    id: "l-n4-16",
    title: "Eco-Friendly Habits",
    level: "N4",
    context: "Two coworkers chatting about the environment",
    text: "A: 環境[かんきょう]のために、毎日[まいにち]何[なに]かしていますか。\nB: はい。買[か]い物[もの]の時[とき]は、自分[じぶん]の袋[ふくろ]を持[も]って行[い]きます。\nA: いいですね。私[わたし]は自転車[じてんしゃ]で会社[かいしゃ]に行[い]っています。\nB: それはいいですね。電気[でんき]もこまめに消[け]していますか。\nA: はい。使[つか]わない時[とき]は必[かなら]ず消[け]します。\nB: 一緒[いっしょ]に頑張[がんば]りましょう。",
    translation: "A: Do you do anything for the environment every day?\nB: Yes. When I go shopping, I bring my own bag.\nA: That's nice. I ride a bicycle to work.\nB: That's great. Do you also turn off the lights diligently?\nA: Yes. When I'm not using electricity, I always turn it off.\nB: Let's keep trying together.",
    questions: [
      {
        q: "What does B do for the environment?",
        choices: [
          "Rides a bike to work",
          "Brings a personal bag when shopping",
          "Turns off the lights",
          "Recycles plastic bottles"
        ],
        answerIndex: 1,
        explanation: "B says they bring their own bag when shopping."
      },
      {
        q: "How does A commute to work?",
        choices: ["By car", "By train", "By bicycle", "On foot"],
        answerIndex: 2,
        explanation: "A says they ride a bicycle to the company."
      },
      {
        q: "What does A always do?",
        choices: [
          "Turns off electricity when not using it",
          "Uses public transportation",
          "Buys eco-friendly products",
          "Plants trees on weekends"
        ],
        answerIndex: 0,
        explanation: "A says they always turn off electricity when not using it."
      }
    ],
    estMinutes: 4,
    tags: ["environment", "daily-life"]
  },
  {
    id: "l-n4-17",
    title: "Customer Support Call",
    level: "N4",
    context: "A phone call to a customer support center",
    text: "A: お電話[でんわ]ありがとうございます。カスタマーサポートです。\nB: すみません。先週[せんしゅう]買[か]った時計[とけい]が壊[こわ]れています。\nA: 申[もう]し訳[わけ]ございません。注文番号[ちゅうもんばんごう]を教[おし]えてください。\nB: 五百二十三[ごひゃくにじゅうさん]です。\nA: 確認[かくにん]しました。新[あたら]しいものを来週[らいしゅう]送[おく]ります。\nB: はい、よろしくお願[ねが]いします。",
    translation: "A: Thank you for calling. This is customer support.\nB: Excuse me. The watch I bought last week is broken.\nA: We are very sorry. Please tell me your order number.\nB: It's five hundred twenty-three.\nA: I've confirmed it. We will send a new one next week.\nB: Yes, thank you very much.",
    questions: [
      {
        q: "What is broken?",
        choices: ["A phone", "A watch", "A computer", "A television"],
        answerIndex: 1,
        explanation: "B says the watch they bought last week is broken."
      },
      {
        q: "When did B buy the item?",
        choices: ["Yesterday", "Last week", "Last month", "Today"],
        answerIndex: 1,
        explanation: "B says they bought the watch last week."
      },
      {
        q: "When will the new item be sent?",
        choices: ["Tomorrow", "This week", "Next week", "Next month"],
        answerIndex: 2,
        explanation: "A says they will send the new item next week."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "customer-service"]
  },
  {
    id: "l-n4-18",
    title: "Future Career Plans",
    level: "N4",
    context: "Two students discussing plans after graduation",
    text: "A: 卒業[そつぎょう]したら、どうする予定[よてい]ですか。\nB: できれば、ITの会社[かいしゃ]で働[はたら]きたいです。\nA: どんな仕事[しごと]がいいですか。\nB: プログラマーになりたいです。コードを書[か]くのが好[す]きですから。\nA: 資格[しかく]は持[も]っていますか。\nB: はい、ITの資格[しかく]を去年[きょねん]取[と]りました。\nA: すごいですね。応援[おうえん]しています。",
    translation: "A: What are your plans after graduation?\nB: If possible, I want to work at an IT company.\nA: What kind of work would you like?\nB: I want to become a programmer, because I like writing code.\nA: Do you have any qualifications?\nB: Yes, I got an IT qualification last year.\nA: That's impressive. I'm cheering for you.",
    questions: [
      {
        q: "What does B want to do after graduation?",
        choices: [
          "Study abroad",
          "Work at an IT company",
          "Open a restaurant",
          "Become a teacher"
        ],
        answerIndex: 1,
        explanation: "B says they want to work at an IT company if possible."
      },
      {
        q: "What specific job does B want?",
        choices: ["Designer", "Programmer", "Salesperson", "Manager"],
        answerIndex: 1,
        explanation: "B wants to become a programmer because they like writing code."
      },
      {
        q: "What qualification does B have?",
        choices: [
          "An English qualification",
          "An IT qualification",
          "A cooking license",
          "An accounting certificate"
        ],
        answerIndex: 1,
        explanation: "B got an IT qualification last year."
      }
    ],
    estMinutes: 4,
    tags: ["career", "future"]
  },
  {
    id: "l-n4-19",
    title: "At the Hair Salon",
    level: "N4",
    context: "A customer at a hair salon",
    text: "A: いらっしゃいませ。今日[きょう]はどうしますか。\nB: 髪[かみ]を短[みじか]く切[き]ってください。\nA: どのくらい短[みじか]くしますか。\nB: 肩[かた]くらいで、前髪[まえがみ]も揃[そろ]えてください。\nA: 色[いろ]は変[か]えますか。\nB: いいえ、変[か]えません。そのままでいいです。\nA: 分[わ]かりました。では、お願[ねが]いします。",
    translation: "A: Welcome. What would you like to do today?\nB: Please cut my hair shorter.\nA: How short would you like it?\nB: About shoulder length, and please trim my bangs too.\nA: Would you like to change the color?\nB: No, I won't change it. It's fine as is.\nA: I understand. Then, please leave it to me.",
    questions: [
      {
        q: "How does B want their hair cut?",
        choices: ["Longer", "Shorter", "The same length", "Curly"],
        answerIndex: 1,
        explanation: "B asks to have their hair cut shorter."
      },
      {
        q: "How short should the hair be?",
        choices: [
          "Above the ears",
          "Shoulder length",
          "Very short all over",
          "Chin length"
        ],
        answerIndex: 1,
        explanation: "B says about shoulder length."
      },
      {
        q: "Will B change the hair color?",
        choices: [
          "Yes, to black",
          "Yes, to brown",
          "No, keep it the same",
          "Yes, to blonde"
        ],
        answerIndex: 2,
        explanation: "B says they will not change the color and it's fine as is."
      }
    ],
    estMinutes: 3,
    tags: ["daily-life", "salon"]
  },
  {
    id: "l-n4-20",
    title: "A Book Recommendation",
    level: "N4",
    context: "Two friends talking about books",
    text: "A: 最近[さいきん]いい本[ほん]を読[よ]みましたか。\nB: はい。『日本[にほん]の文化[ぶんか]』という本[ほん]を読[よ]みました。\nA: どうでしたか。\nB: とても面白[おもしろ]かったです。特[とく]に茶道[さどう]の章[しょう]がよかったです。\nA: 私[わたし]も読[よ]みたいです。図書館[としょかん]にありますか。\nB: たぶんありますよ。来週[らいしゅう]一緒[いっしょ]に探[さが]しに行[い]きましょう。",
    translation: "A: Have you read any good books recently?\nB: Yes. I read a book called \"Japanese Culture.\"\nA: How was it?\nB: It was very interesting. Especially the chapter on tea ceremony was good.\nA: I want to read it too. Is it at the library?\nB: Probably. Let's go look for it together next week.",
    questions: [
      {
        q: "What kind of book did B read?",
        choices: [
          "A novel",
          "A book about Japanese culture",
          "A cookbook",
          "A business book"
        ],
        answerIndex: 1,
        explanation: "B read a book titled \"Japanese Culture.\""
      },
      {
        q: "Which chapter did B like best?",
        choices: [
          "The chapter on food",
          "The chapter on tea ceremony",
          "The chapter on fashion",
          "The chapter on music"
        ],
        answerIndex: 1,
        explanation: "B especially liked the chapter on tea ceremony."
      },
      {
        q: "Where will they look for the book?",
        choices: ["At a bookstore", "Online", "At the library", "At school"],
        answerIndex: 2,
        explanation: "A asks if it's at the library, and they plan to look for it there together."
      }
    ],
    estMinutes: 4,
    tags: ["reading", "culture"]
  }
];
