import type { ListeningData } from "@/lib/types";

export const listeningN5I: ListeningData[] = [
  {
    id: "l-n5-81",
    title: "お土産[みやげ]屋[や]さんで",
    level: "N5",
    context: "At the gift shop",
    text:
      "A: すみません、このお土産[みやげ]はいくらですか。\n" +
      "B: 千五百円[せんごひゃくえん]です。\n" +
      "A: じゃ、これを三[さん]つください。\n" +
      "B: はい、四千五百円[よんせんごひゃくえん]ですね。\n" +
      "A: 箱[はこ]に入[い]れてもらえますか。\n" +
      "B: はい、すぐ包[つつ]みます。",
    translation:
      "A: Excuse me, how much is this souvenir?\n" +
      "B: It is 1,500 yen.\n" +
      "A: Then I will take three of these, please.\n" +
      "B: Yes, that is 4,500 yen.\n" +
      "A: Could you put them in a box?\n" +
      "B: Yes, I will wrap them right away.",
    questions: [
      {
        q: "What is A asking about first?",
        choices: ["The price of a souvenir", "The shop location", "The box color", "A train ticket"],
        answerIndex: 0,
        explanation: "A asks このお土産はいくらですか (How much is this souvenir?)."
      },
      {
        q: "How much is one souvenir?",
        choices: ["1,000 yen", "1,500 yen", "2,000 yen", "3,000 yen"],
        answerIndex: 1,
        explanation: "B says 千五百円です (It is 1,500 yen)."
      },
      {
        q: "How many does A buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "A says これを三つください (I will take three of these)."
      },
      {
        q: "What does A ask at the end?",
        choices: ["To get a discount", "To wrap the items", "To put them in a box", "To carry them home"],
        answerIndex: 2,
        explanation: "A asks 箱に入れてもらえますか (Could you put them in a box?)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "souvenir"]
  },
  {
    id: "l-n5-82",
    title: "夏[なつ]の祭[まつ]り",
    level: "N5",
    context: "A summer festival",
    text:
      "A: 今週[こんしゅう]の週末[しゅうまつ]、祭[まつ]りへ行[い]きませんか。\n" +
      "B: いいですね。何時[なんじ]に会[あ]いましょうか。\n" +
      "A: 六時[ろくじ]に駅[えき]で会[あ]いましょう。\n" +
      "B: 浴衣[ゆかた]を着[き]ていきますか。\n" +
      "A: はい、着[き]ていきます。花火[はなび]も見[み]ますよ。\n" +
      "B: 楽[たの]しみですね。",
    translation:
      "A: Would you like to go to the festival this weekend?\n" +
      "B: Sounds good. What time shall we meet?\n" +
      "A: Let's meet at the station at six o'clock.\n" +
      "B: Will you wear a yukata?\n" +
      "A: Yes, I will wear one. We will also see fireworks.\n" +
      "B: I'm looking forward to it.",
    questions: [
      {
        q: "When is the festival?",
        choices: ["This weekend", "Next weekend", "Tonight", "Tomorrow morning"],
        answerIndex: 0,
        explanation: "A says 今週の週末、祭りへ行きませんか (Would you like to go to the festival this weekend?)."
      },
      {
        q: "Where will they meet?",
        choices: ["At the park", "At the station", "At the shrine", "At A's house"],
        answerIndex: 1,
        explanation: "A says 六時に駅で会いましょう (Let's meet at the station at six)."
      },
      {
        q: "What time will they meet?",
        choices: ["Five o'clock", "Six o'clock", "Seven o'clock", "Eight o'clock"],
        answerIndex: 1,
        explanation: "A says 六時に駅で会いましょう (meet at six o'clock at the station)."
      },
      {
        q: "What will A wear?",
        choices: ["A suit", "A kimono", "A yukata", "A T-shirt"],
        answerIndex: 2,
        explanation: "B asks 浴衣を着ていきますか and A answers 着ていきます (Yes, I will wear a yukata)."
      }
    ],
    estMinutes: 3,
    tags: ["festival", "plans"]
  },
  {
    id: "l-n5-83",
    title: "お茶[ちゃ]屋[や]さんで",
    level: "N5",
    context: "At the tea shop",
    text:
      "A: すみません、緑茶[りょくちゃ]はありますか。\n" +
      "B: はい、この瓶[びん]のは九百円[きゅうひゃくえん]です。\n" +
      "A: もう少[すこ]し安[やす]いのはありますか。\n" +
      "B: これが五百円[ごひゃくえん]です。\n" +
      "A: じゃ、それを二[ふた]つください。\n" +
      "B: ありがとうございます。千円[せんえん]ですね。",
    translation:
      "A: Excuse me, do you have green tea?\n" +
      "B: Yes, this bottle one is 900 yen.\n" +
      "A: Do you have anything a little cheaper?\n" +
      "B: This one is 500 yen.\n" +
      "A: Then I will take two of those, please.\n" +
      "B: Thank you very much. That is 1,000 yen.",
    questions: [
      {
        q: "What is A looking for?",
        choices: ["Black tea", "Green tea", "Coffee", "Water"],
        answerIndex: 1,
        explanation: "A asks 緑茶はありますか (Do you have green tea?)."
      },
      {
        q: "How much is the bottle tea?",
        choices: ["500 yen", "700 yen", "900 yen", "1,000 yen"],
        answerIndex: 2,
        explanation: "B says この瓶のは九百円です (This bottle one is 900 yen)."
      },
      {
        q: "How much is the cheaper tea?",
        choices: ["300 yen", "500 yen", "700 yen", "900 yen"],
        answerIndex: 1,
        explanation: "B says これが五百円です (This one is 500 yen)."
      },
      {
        q: "How many does A buy?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "A says それを二つください (I will take two of those), and the total is 千円 (1,000 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "tea"]
  },
  {
    id: "l-n5-84",
    title: "週末[しゅうまつ]の旅行[りょこう]の計画[けいかく]",
    level: "N5",
    context: "A weekend trip plan",
    text:
      "A: 来週[らいしゅう]の週末[しゅうまつ]、どこへ行[い]きますか。\n" +
      "B: 海[うみ]へ行[い]きたいです。\n" +
      "A: いいですね。誰[だれ]と行[い]きますか。\n" +
      "B: 家族[かぞく]と行[い]きます。\n" +
      "A: 何日[なんにち]ぐらい行[い]きますか。\n" +
      "B: 二日[ふつか]だけ行[い]きます。",
    translation:
      "A: Where will you go next weekend?\n" +
      "B: I want to go to the sea.\n" +
      "A: That sounds nice. Who will you go with?\n" +
      "B: I will go with my family.\n" +
      "A: About how many days will you go?\n" +
      "B: I will go for just two days.",
    questions: [
      {
        q: "When is the trip?",
        choices: ["This weekend", "Next weekend", "Next month", "Next summer"],
        answerIndex: 1,
        explanation: "A says 来週の週末 (next weekend)."
      },
      {
        q: "Where does B want to go?",
        choices: ["To the mountains", "To the sea", "To a temple", "To a hot spring"],
        answerIndex: 1,
        explanation: "B says 海へ行きたいです (I want to go to the sea)."
      },
      {
        q: "Who will B go with?",
        choices: ["Alone", "Friends", "Family", "Classmates"],
        answerIndex: 2,
        explanation: "B says 家族と行きます (I will go with my family)."
      },
      {
        q: "How many days will B go?",
        choices: ["One day", "Two days", "Three days", "Four days"],
        answerIndex: 1,
        explanation: "B says 二日だけ行きます (I will go for just two days)."
      }
    ],
    estMinutes: 2,
    tags: ["travel", "plans"]
  },
  {
    id: "l-n5-85",
    title: "自転車[じてんしゃ]の駐輪場[ちゅうりんじょう]",
    level: "N5",
    context: "At the bicycle parking",
    text:
      "A: すみません、自転車[じてんしゃ]はここに置[お]いてもいいですか。\n" +
      "B: いいえ、ここは駐輪場[ちゅうりんじょう]じゃありません。\n" +
      "A: じゃ、どこに置[お]けますか。\n" +
      "B: 駅[えき]の南口[みなみぐち]にあります。\n" +
      "A: いくらですか。\n" +
      "B: 一日[いちにち]百円[ひゃくえん]です。",
    translation:
      "A: Excuse me, may I leave my bicycle here?\n" +
      "B: No, this is not a bicycle parking area.\n" +
      "A: Then where can I park it?\n" +
      "B: There is one at the south exit of the station.\n" +
      "A: How much is it?\n" +
      "B: It is 100 yen per day.",
    questions: [
      {
        q: "What does A want to do?",
        choices: ["Rent a bicycle", "Park a bicycle", "Buy a bicycle", "Fix a bicycle"],
        answerIndex: 1,
        explanation: "A asks 自転車はここに置いてもいいですか (May I leave my bicycle here?)."
      },
      {
        q: "Can A park the bicycle here?",
        choices: ["Yes, for free", "Yes, for 100 yen", "No", "Only for one hour"],
        answerIndex: 2,
        explanation: "B says ここは駐輪場じゃありません (This is not a bicycle parking area)."
      },
      {
        q: "Where can A park?",
        choices: ["At the north exit", "At the south exit of the station", "In front of the shop", "Behind the bank"],
        answerIndex: 1,
        explanation: "B says 駅の南口にあります (There is one at the south exit of the station)."
      },
      {
        q: "How much does parking cost per day?",
        choices: ["50 yen", "100 yen", "200 yen", "500 yen"],
        answerIndex: 1,
        explanation: "B says 一日百円です (It is 100 yen per day)."
      }
    ],
    estMinutes: 2,
    tags: ["bicycle", "parking"]
  },
  {
    id: "l-n5-86",
    title: "図書館[としょかん]カードを作[つく]る",
    level: "N5",
    context: "Getting a library card",
    text:
      "A: すみません、図書館[としょかん]カードを作[つく]りたいです。\n" +
      "B: はい、ここに名前[なまえ]と住所[じゅうしょ]を書[か]いてください。\n" +
      "A: 電話[でんわ]番号[ばんごう]も書[か]きますか。\n" +
      "B: はい、お願[ねが]いします。\n" +
      "A: 何時[なんじ]まで借[か]りられますか。\n" +
      "B: 夜[よる]の七時[しちじ]までです。",
    translation:
      "A: Excuse me, I would like to make a library card.\n" +
      "B: Yes, please write your name and address here.\n" +
      "A: Should I also write my phone number?\n" +
      "B: Yes, please.\n" +
      "A: Until what time can I borrow books?\n" +
      "B: Until 7 o'clock in the evening.",
    questions: [
      {
        q: "What does A want to make?",
        choices: ["A library card", "A phone card", "A train pass", "A membership card"],
        answerIndex: 0,
        explanation: "A says 図書館カードを作りたいです (I would like to make a library card)."
      },
      {
        q: "What should A write?",
        choices: ["Name only", "Address only", "Name and address", "Name and age"],
        answerIndex: 2,
        explanation: "B says ここに名前と住所を書いてください (Please write your name and address here)."
      },
      {
        q: "Should A also write a phone number?",
        choices: ["Yes", "No", "Only if asked", "Only the area code"],
        answerIndex: 0,
        explanation: "When A asks 電話番号も書きますか, B replies はい、お願いします (Yes, please)."
      },
      {
        q: "Until what time can books be borrowed?",
        choices: ["5 PM", "6 PM", "7 PM", "8 PM"],
        answerIndex: 2,
        explanation: "B says 夜の七時までです (Until 7 o'clock in the evening)."
      }
    ],
    estMinutes: 3,
    tags: ["library", "forms"]
  },
  {
    id: "l-n5-87",
    title: "ファストフードの店[みせ]で",
    level: "N5",
    context: "At the fast-food counter",
    text:
      "A: すみません、ハンバーガーを一[ひと]つください。\n" +
      "B: セットにしますか。\n" +
      "A: はい、ポテトとコーラでお願[ねが]いします。\n" +
      "B: こちらで食[た]べますか。\n" +
      "A: はい、ここで食[た]べます。\n" +
      "B: はい、七百円[ななひゃくえん]です。",
    translation:
      "A: Excuse me, one hamburger, please.\n" +
      "B: Will you make it a set?\n" +
      "A: Yes, with fries and cola, please.\n" +
      "B: Will you eat here?\n" +
      "A: Yes, I will eat here.\n" +
      "B: Yes, that is 700 yen.",
    questions: [
      {
        q: "What does A order first?",
        choices: ["A pizza", "A hamburger", "A sandwich", "A salad"],
        answerIndex: 1,
        explanation: "A says ハンバーガーを一つください (One hamburger, please)."
      },
      {
        q: "What does A add to make a set?",
        choices: ["Soup and tea", "Fries and cola", "Rice and water", "Salad and juice"],
        answerIndex: 1,
        explanation: "A says ポテトとコーラでお願いします (With fries and cola, please)."
      },
      {
        q: "Where will A eat?",
        choices: ["At the shop", "In the park", "At home", "On the train"],
        answerIndex: 0,
        explanation: "B asks こちらで食べますか and A replies ここで食べます (I will eat here)."
      },
      {
        q: "How much is the total?",
        choices: ["500 yen", "600 yen", "700 yen", "800 yen"],
        answerIndex: 2,
        explanation: "B says 七百円です (That is 700 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["food", "ordering"]
  },
  {
    id: "l-n5-88",
    title: "今朝[けさ]の朝[あさ]の準備[じゅんび]",
    level: "N5",
    context: "A morning routine",
    text:
      "A: 今朝[けさ]、何時[なんじ]に起[お]きましたか。\n" +
      "B: 六時[ろくじ]に起[お]きました。\n" +
      "A: すぐ朝[あさ]ごはんを食[た]べましたか。\n" +
      "B: いいえ、先[まず]ず顔[かお]を洗[あら]いました。\n" +
      "A: それから何[なに]をしましたか。\n" +
      "B: 七時[しちじ]に家[いえ]を出[で]ました。",
    translation:
      "A: What time did you get up this morning?\n" +
      "B: I got up at six o'clock.\n" +
      "A: Did you eat breakfast right away?\n" +
      "B: No, first I washed my face.\n" +
      "A: What did you do after that?\n" +
      "B: I left home at seven o'clock.",
    questions: [
      {
        q: "What time did B get up?",
        choices: ["Five o'clock", "Six o'clock", "Seven o'clock", "Eight o'clock"],
        answerIndex: 1,
        explanation: "B says 六時に起きました (I got up at six o'clock)."
      },
      {
        q: "Did B eat breakfast right away?",
        choices: ["Yes", "No", "Only coffee", "Only juice"],
        answerIndex: 1,
        explanation: "B answers いいえ (No) to A's question about eating breakfast right away."
      },
      {
        q: "What did B do first?",
        choices: ["Ate breakfast", "Washed face", "Brushed teeth", "Read a book"],
        answerIndex: 1,
        explanation: "B says 先ず顔を洗いました (First I washed my face)."
      },
      {
        q: "When did B leave home?",
        choices: ["At six", "At six-thirty", "At seven", "At seven-thirty"],
        answerIndex: 2,
        explanation: "B says 七時に家を出ました (I left home at seven o'clock)."
      }
    ],
    estMinutes: 3,
    tags: ["routine", "morning"]
  },
  {
    id: "l-n5-89",
    title: "携帯[けいたい]電話[でんわ]の店[みせ]で",
    level: "N5",
    context: "At the mobile phone shop",
    text:
      "A: すみません、新[あたら]しい携帯[けいたい]を見[み]たいです。\n" +
      "B: はい、こちらはどうですか。\n" +
      "A: いくらですか。\n" +
      "B: 三万[さんまん]円[えん]です。\n" +
      "A: 少[すこ]し高[たか]いですね。もう少[すこ]し安[やす]いのはありますか。\n" +
      "B: はい、これが二万[にまん]円[えん]です。",
    translation:
      "A: Excuse me, I would like to see a new mobile phone.\n" +
      "B: Yes, how about this one?\n" +
      "A: How much is it?\n" +
      "B: It is 30,000 yen.\n" +
      "A: It is a little expensive. Do you have anything cheaper?\n" +
      "B: Yes, this one is 20,000 yen.",
    questions: [
      {
        q: "What does A want to see?",
        choices: ["A new camera", "A new mobile phone", "A new computer", "A new watch"],
        answerIndex: 1,
        explanation: "A says 新しい携帯を見たいです (I would like to see a new mobile phone)."
      },
      {
        q: "How much is the first phone?",
        choices: ["20,000 yen", "25,000 yen", "30,000 yen", "35,000 yen"],
        answerIndex: 2,
        explanation: "B says 三万円です (It is 30,000 yen)."
      },
      {
        q: "What does A think of the price?",
        choices: ["It is cheap", "It is just right", "It is a little expensive", "It is too small"],
        answerIndex: 2,
        explanation: "A says 少し高いですね (It is a little expensive)."
      },
      {
        q: "How much is the cheaper phone?",
        choices: ["15,000 yen", "20,000 yen", "25,000 yen", "28,000 yen"],
        answerIndex: 1,
        explanation: "B says これが二万円です (This one is 20,000 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "phone"]
  },
  {
    id: "l-n5-90",
    title: "カレーを作[つく]る時[とき]の失敗[しっぱい]",
    level: "N5",
    context: "A cooking mistake",
    text:
      "A: 今晩[こんばん]、何[なに]を作[つく]りますか。\n" +
      "B: カレーを作[つく]ります。\n" +
      "A: あ、塩[しお]を入[い]れましたか。\n" +
      "B: あ、忘[わす]れました。\n" +
      "A: 大丈夫[だいじょうぶ]ですか。\n" +
      "B: はい、今[いま]入[い]れます。",
    translation:
      "A: What will you make tonight?\n" +
      "B: I will make curry.\n" +
      "A: Oh, did you put in salt?\n" +
      "B: Ah, I forgot.\n" +
      "A: Is it okay?\n" +
      "B: Yes, I will add it now.",
    questions: [
      {
        q: "What will B make tonight?",
        choices: ["Curry", "Sushi", "Ramen", "Soup"],
        answerIndex: 0,
        explanation: "B says カレーを作ります (I will make curry)."
      },
      {
        q: "What did B forget?",
        choices: ["The water", "The salt", "The rice", "The vegetables"],
        answerIndex: 1,
        explanation: "When A asks 塩を入れましたか (Did you put in salt?), B replies 忘れました (I forgot)."
      },
      {
        q: "Is it okay?",
        choices: ["No, it is ruined", "Yes, B can fix it", "No, they must start over", "Yes, no salt is fine"],
        answerIndex: 1,
        explanation: "B says 大丈夫ですか answered with はい、今入れます (Yes, I will add it now), so it can be fixed."
      },
      {
        q: "What will B do now?",
        choices: ["Throw it away", "Add the salt now", "Make a new dish", "Wait a while"],
        answerIndex: 1,
        explanation: "B says 今入れます (I will add it now)."
      }
    ],
    estMinutes: 2,
    tags: ["cooking", "home"]
  }
];
