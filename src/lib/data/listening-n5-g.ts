import type { ListeningData } from "@/lib/types";

export const listeningN5G: ListeningData[] = [
  {
    id: "l-n5-61",
    title: "駅[えき]の改札口[かいさつぐち]で",
    level: "N5",
    context: "At the train ticket gate",
    text:
      "A: すみません、切符[きっぴ]はどこで買[か]いますか。\n" +
      "B: あそこの機械[きかい]で買[か]えますよ。\n" +
      "A: 次[つぎ]の駅[えき]までいくらですか。\n" +
      "B: 二百円[にひゃくえん]です。\n" +
      "A: じゃ、これを買[か]います。入[い]り口[ぐち]はどこですか。\n" +
      "B: あちらの赤[あか]いドアです。",
    translation:
      "A: Excuse me, where can I buy a ticket?\n" +
      "B: You can buy one at that machine over there.\n" +
      "A: How much is it to the next station?\n" +
      "B: It is 200 yen.\n" +
      "A: Then I will buy this one. Where is the entrance?\n" +
      "B: It is that red door over there.",
    questions: [
      {
        q: "What is A looking for?",
        choices: ["A train", "A ticket", "A machine", "A door"],
        answerIndex: 1,
        explanation: "A asks 切符はどこで買いますか (Where can I buy a ticket?)."
      },
      {
        q: "Where can A buy a ticket?",
        choices: ["At the machine over there", "At the counter", "At the convenience store", "At the window"],
        answerIndex: 0,
        explanation: "B says あそこの機械で買えますよ (You can buy one at that machine over there)."
      },
      {
        q: "How much is it to the next station?",
        choices: ["100 yen", "200 yen", "300 yen", "500 yen"],
        answerIndex: 1,
        explanation: "B says 二百円です (It is 200 yen)."
      },
      {
        q: "What color is the door at the entrance?",
        choices: ["Blue", "Green", "Red", "White"],
        answerIndex: 2,
        explanation: "B says あちらの赤いドアです (It is that red door)."
      }
    ],
    estMinutes: 2,
    tags: ["station", "ticket"]
  },
  {
    id: "l-n5-62",
    title: "学校[がっこう]の旅行[りょこう]の話[はなし]",
    level: "N5",
    context: "Talking about a school trip",
    text:
      "A: 来週[らいしゅう]、学校[がっこう]の旅行[りょこう]はどこへ行[い]きますか。\n" +
      "B: 京[きょう]都[と]へ行[い]きます。\n" +
      "A: いいですね。何日[なんにち]ぐらい行[い]きますか。\n" +
      "B: 三日間[みっかかん]行[い]きます。\n" +
      "A: 何[なに]を持[も]って行[い]きますか。\n" +
      "B: カメラとお土産[みやげ]のお金[かね]を持[も]って行[い]きます。",
    translation:
      "A: Next week, where is the school trip going?\n" +
      "B: We are going to Kyoto.\n" +
      "A: That is nice. About how many days will you go?\n" +
      "B: We will go for three days.\n" +
      "A: What will you bring?\n" +
      "B: I will bring a camera and money for souvenirs.",
    questions: [
      {
        q: "When is the school trip?",
        choices: ["This week", "Next week", "Next month", "Tomorrow"],
        answerIndex: 1,
        explanation: "A says 来週、学校の旅行はどこへ行きますか (Next week, where is the school trip going?)."
      },
      {
        q: "Where is the school trip going?",
        choices: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
        answerIndex: 1,
        explanation: "B says 京都へ行きます (We are going to Kyoto)."
      },
      {
        q: "How many days is the trip?",
        choices: ["Two days", "Three days", "Five days", "A week"],
        answerIndex: 1,
        explanation: "B says 三日間行きます (We will go for three days)."
      },
      {
        q: "What is B bringing?",
        choices: ["A phone and snacks", "A camera and money for souvenirs", "A book and a notebook", "Clothes and a toothbrush"],
        answerIndex: 1,
        explanation: "B says カメラとお土産のお金を持って行きます (I will bring a camera and money for souvenirs)."
      }
    ],
    estMinutes: 2,
    tags: ["travel", "school"]
  },
  {
    id: "l-n5-63",
    title: "アイスクリーム屋[や]で",
    level: "N5",
    context: "At the ice cream shop",
    text:
      "A: いらっしゃいませ。何[なに]にしますか。\n" +
      "B: アイスクリームをください。\n" +
      "A: 何[なに]の味[あじ]がいいですか。\n" +
      "B: 苺[いちご]の小[ちい]さいのをください。\n" +
      "A: はい。三百円[さんびゃくえん]です。\n" +
      "B: はい、ありがとう。",
    translation:
      "A: Welcome. What would you like?\n" +
      "B: Ice cream, please.\n" +
      "A: What flavor would you like?\n" +
      "B: A small strawberry one, please.\n" +
      "A: Sure. That is 300 yen.\n" +
      "B: Here, thanks.",
    questions: [
      {
        q: "What does B want?",
        choices: ["Juice", "Ice cream", "Cake", "Coffee"],
        answerIndex: 1,
        explanation: "B says アイスクリームをください (Ice cream, please)."
      },
      {
        q: "What flavor does B want?",
        choices: ["Chocolate", "Vanilla", "Strawberry", "Matcha"],
        answerIndex: 2,
        explanation: "B says 苺の小さいのをください (A small strawberry one, please)."
      },
      {
        q: "What size does B want?",
        choices: ["Big", "Small", "Medium", "Two scoops"],
        answerIndex: 1,
        explanation: "B says 小さいのをください (A small one, please)."
      },
      {
        q: "How much is it?",
        choices: ["200 yen", "300 yen", "400 yen", "500 yen"],
        answerIndex: 1,
        explanation: "A says 三百円です (It is 300 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["food", "shopping"]
  },
  {
    id: "l-n5-64",
    title: "ゴミの分別[ぶんべつ]",
    level: "N5",
    context: "Sorting garbage",
    text:
      "A: このゴミはどこへ捨[す]てますか。\n" +
      "B: 燃[も]えるゴミは月[げつ]曜[よう]日[び]と木[もく]曜[よう]日[び]です。\n" +
      "A: じゃ、この紙[かみ]は燃[も]えるゴミですね。\n" +
      "B: はい、そうです。ペットボトルは別[べつ]の箱[はこ]に入[い]れてください。\n" +
      "A: わかりました。ありがとう。\n" +
      "B: いいえ。",
    translation:
      "A: Where do I throw away this garbage?\n" +
      "B: Burnable garbage is collected on Monday and Thursday.\n" +
      "A: So this paper is burnable garbage, right?\n" +
      "B: Yes, that is right. Please put plastic bottles in a separate box.\n" +
      "A: Understood. Thanks.\n" +
      "B: You are welcome.",
    questions: [
      {
        q: "What days is burnable garbage collected?",
        choices: ["Monday and Tuesday", "Monday and Thursday", "Wednesday and Friday", "Tuesday and Saturday"],
        answerIndex: 1,
        explanation: "B says 燃えるゴミは月曜日と木曜日です (Burnable garbage is on Monday and Thursday)."
      },
      {
        q: "What is the paper?",
        choices: ["Burnable garbage", "Plastic bottle garbage", "Non-burnable garbage", "Glass garbage"],
        answerIndex: 0,
        explanation: "B says この紙は燃えるゴミですね (This paper is burnable garbage, right?)."
      },
      {
        q: "Where should plastic bottles go?",
        choices: ["In the burnable box", "In a separate box", "In the paper box", "Outside the house"],
        answerIndex: 1,
        explanation: "B says ペットボトルは別の箱に入れてください (Put plastic bottles in a separate box)."
      }
    ],
    estMinutes: 2,
    tags: ["daily-life", "rules"]
  },
  {
    id: "l-n5-65",
    title: "文房具屋[ぶんぼうぐや]で",
    level: "N5",
    context: "At the stationery store",
    text:
      "A: すみません、ノートはありますか。\n" +
      "B: はい、あります。何[なん]色[いろ]がいいですか。\n" +
      "A: 赤[あか]いノートをください。鉛筆[えんぴつ]も三本[さんぼん]ください。\n" +
      "B: はい。ノートは二百円[にひゃくえん]、鉛筆[えんぴつ]は一本[いっぽん]八十円[はちじゅうえん]です。\n" +
      "A: じゃ、これをください。\n" +
      "B: ありがとうございます。四百四十円[よんひゃくよんじゅうえん]です。",
    translation:
      "A: Excuse me, do you have notebooks?\n" +
      "B: Yes, we do. What color would you like?\n" +
      "A: A red notebook, please. And three pencils too.\n" +
      "B: Sure. The notebook is 200 yen, and a pencil is 80 yen each.\n" +
      "A: Then I will take these.\n" +
      "B: Thank you. That is 440 yen.",
    questions: [
      {
        q: "What does A want to buy?",
        choices: ["A notebook and pens", "A notebook and pencils", "Just a notebook", "Pencils only"],
        answerIndex: 1,
        explanation: "A asks for ノート and 鉛筆も三本 (a notebook and three pencils)."
      },
      {
        q: "What color notebook does A want?",
        choices: ["Blue", "Red", "Black", "Green"],
        answerIndex: 1,
        explanation: "A says 赤いノートをください (A red notebook, please)."
      },
      {
        q: "How many pencils does A buy?",
        choices: ["Two", "Three", "Four", "Five"],
        answerIndex: 1,
        explanation: "A says 鉛筆も三本ください (Three pencils too, please)."
      },
      {
        q: "How much is the total?",
        choices: ["240 yen", "440 yen", "540 yen", "640 yen"],
        answerIndex: 1,
        explanation: "B says 四百四十円です (It is 440 yen). 200 + 3 x 80 = 440."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "school"]
  },
  {
    id: "l-n5-66",
    title: "ペットの犬[いぬ]の話[はなし]",
    level: "N5",
    context: "Talking about a pet dog",
    text:
      "A: 家[いえ]に犬[いぬ]がいますか。\n" +
      "B: はい、います。二[に]匹[ひき]います。\n" +
      "A: どんな犬[いぬ]ですか。\n" +
      "B: 白[しろ]くて小[ちい]さい犬[いぬ]です。\n" +
      "A: 名前[なまえ]は何[なん]ですか。\n" +
      "B: モモとコタロウです。",
    translation:
      "A: Do you have a dog at home?\n" +
      "B: Yes, I do. I have two.\n" +
      "A: What kind of dog are they?\n" +
      "B: They are small white dogs.\n" +
      "A: What are their names?\n" +
      "B: Momo and Kotaro.",
    questions: [
      {
        q: "What pet does B have?",
        choices: ["A cat", "A dog", "A bird", "A fish"],
        answerIndex: 1,
        explanation: "B says 家に犬がいます (I have a dog at home)."
      },
      {
        q: "How many does B have?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "B says 二匹います (I have two)."
      },
      {
        q: "What kind of dogs are they?",
        choices: ["Big and black", "Small and white", "Small and brown", "Big and white"],
        answerIndex: 1,
        explanation: "B says 白くて小さい犬です (They are small white dogs)."
      },
      {
        q: "What are the dogs' names?",
        choices: ["Momo and Hana", "Momo and Kotaro", "Kotaro and Taro", "Pochi and Momo"],
        answerIndex: 1,
        explanation: "B says モモとコタロウです (Momo and Kotaro)."
      }
    ],
    estMinutes: 2,
    tags: ["pets", "family"]
  },
  {
    id: "l-n5-67",
    title: "床屋[とこや]で髪[かみ]を切[き]る",
    level: "N5",
    context: "At the barbershop",
    text:
      "A: いらっしゃいませ。今日[きょう]はどうしますか。\n" +
      "B: 少[すこ]し短[みじか]くしてください。\n" +
      "A: はい。前[まえ]はどうしますか。\n" +
      "B: 前[まえ]は切[き]らないでください。\n" +
      "A: わかりました。シャンプーもしますか。\n" +
      "B: はい、お願[ねが]いします。",
    translation:
      "A: Welcome. What would you like today?\n" +
      "B: Please cut it a little shorter.\n" +
      "A: Sure. How about the front?\n" +
      "B: Please do not cut the front.\n" +
      "A: Understood. Would you like a shampoo too?\n" +
      "B: Yes, please.",
    questions: [
      {
        q: "What does B want done?",
        choices: ["A longer cut", "A shorter cut", "No cut at all", "A shave"],
        answerIndex: 1,
        explanation: "B says 少し短くしてください (Please cut it a little shorter)."
      },
      {
        q: "What about the front of the hair?",
        choices: ["Cut it short", "Do not cut it", "Cut a little", "Cut a lot"],
        answerIndex: 1,
        explanation: "B says 前は切らないでください (Please do not cut the front)."
      },
      {
        q: "Does B want a shampoo?",
        choices: ["Yes, please", "No, thanks", "Only water", "Only conditioner"],
        answerIndex: 0,
        explanation: "B says はい、お願いします (Yes, please) to the shampoo question."
      }
    ],
    estMinutes: 2,
    tags: ["service", "grooming"]
  },
  {
    id: "l-n5-68",
    title: "信[しん]号[ごう]を道[みち]じる",
    level: "N5",
    context: "Asking directions using traffic lights",
    text:
      "A: すみません、郵便局[ゆうびんきょく]はどこですか。\n" +
      "B: この道[みち]を真[ま]っ直[す]ぐ行[い]ってください。\n" +
      "A: 信[しん]号[ごう]はありますか。\n" +
      "B: はい、二[ふた]つ目[め]の信[しん]号[ごう]を右[みぎ]に曲[ま]がってください。\n" +
      "A: 右[みぎ]ですね。ありがとう。\n" +
      "B: いいえ。",
    translation:
      "A: Excuse me, where is the post office?\n" +
      "B: Please go straight down this road.\n" +
      "A: Is there a traffic light?\n" +
      "B: Yes, please turn right at the second traffic light.\n" +
      "A: To the right. Thanks.\n" +
      "B: You are welcome.",
    questions: [
      {
        q: "What is A looking for?",
        choices: ["A bank", "A post office", "A station", "A school"],
        answerIndex: 1,
        explanation: "A asks 郵便局はどこですか (Where is the post office?)."
      },
      {
        q: "Which direction should A go first?",
        choices: ["Left", "Right", "Straight", "Back"],
        answerIndex: 2,
        explanation: "B says この道を真っ直ぐ行ってください (Go straight down this road)."
      },
      {
        q: "Where should A turn right?",
        choices: ["At the first traffic light", "At the second traffic light", "At the third traffic light", "At the corner"],
        answerIndex: 1,
        explanation: "B says 二つ目の信号を右に曲がってください (Turn right at the second traffic light)."
      }
    ],
    estMinutes: 2,
    tags: ["directions", "town"]
  },
  {
    id: "l-n5-69",
    title: "おもちゃ屋[や]で",
    level: "N5",
    context: "At the toy store",
    text:
      "A: すみません、おもちゃはどこですか。\n" +
      "B: 二[に]階[かい]にあります。\n" +
      "A: ありがとうございます。おもちゃの車[くるま]はありますか。\n" +
      "B: はい、あちらの棚[たな]にありますよ。\n" +
      "A: この赤[あか]い車[くるま]をください。いくらですか。\n" +
      "B: 千二百円[せんにひゃくえん]です。",
    translation:
      "A: Excuse me, where are the toys?\n" +
      "B: They are on the second floor.\n" +
      "A: Thank you. Do you have toy cars?\n" +
      "B: Yes, they are on that shelf over there.\n" +
      "A: I will take this red car. How much is it?\n" +
      "B: It is 1,200 yen.",
    questions: [
      {
        q: "Where are the toys?",
        choices: ["On the first floor", "On the second floor", "On the third floor", "In the basement"],
        answerIndex: 1,
        explanation: "B says 二階にあります (They are on the second floor)."
      },
      {
        q: "What is A looking for?",
        choices: ["Toy cars", "Toy trains", "Dolls", "Balls"],
        answerIndex: 0,
        explanation: "A asks おもちゃの車はありますか (Do you have toy cars?)."
      },
      {
        q: "Where are the toy cars?",
        choices: ["On the counter", "On that shelf", "In the box", "Near the door"],
        answerIndex: 1,
        explanation: "B says あちらの棚にありますよ (They are on that shelf over there)."
      },
      {
        q: "How much is the red car?",
        choices: ["1,000 yen", "1,200 yen", "1,500 yen", "2,000 yen"],
        answerIndex: 1,
        explanation: "B says 千二百円です (It is 1,200 yen)."
      }
    ],
    estMinutes: 2,
    tags: ["shopping", "store"]
  },
  {
    id: "l-n5-70",
    title: "運動会[うんどうかい]の話[はなし]",
    level: "N5",
    context: "Talking about a sports festival",
    text:
      "A: 来週[らいしゅう]、運動会[うんどうかい]がありますか。\n" +
      "B: はい、土[ど]曜[よう]日[び]にあります。\n" +
      "A: 何[なに]をしますか。\n" +
      "B: 走[はし]ったり、ボールを使[つか]うゲームをします。\n" +
      "A: 楽[たの]しみですね。家族[かぞく]も来[き]ますか。\n" +
      "B: はい、母[はは]と父[ちち]が来[き]ます。",
    translation:
      "A: Is there a sports festival next week?\n" +
      "B: Yes, it is on Saturday.\n" +
      "A: What do you do?\n" +
      "B: We run and play games with balls.\n" +
      "A: That sounds fun. Will your family come too?\n" +
      "B: Yes, my mother and father are coming.",
    questions: [
      {
        q: "When is the sports festival?",
        choices: ["This Saturday", "Next Saturday", "Next Sunday", "Next Friday"],
        answerIndex: 1,
        explanation: "A says 来週 and B says 土曜日にあります (It is on Saturday next week)."
      },
      {
        q: "What do they do at the sports festival?",
        choices: ["Run and play ball games", "Swim and dive", "Dance and sing", "Cook and eat"],
        answerIndex: 0,
        explanation: "B says 走ったり、ボールを使うゲームをします (We run and play games with balls)."
      },
      {
        q: "Who is coming from B's family?",
        choices: ["Mother and father", "Sister and brother", "Grandparents", "Mother only"],
        answerIndex: 0,
        explanation: "B says 母と父が来ます (My mother and father are coming)."
      },
      {
        q: "How does A feel about the festival?",
        choices: ["Bored", "Worried", "Looking forward to it", "Tired"],
        answerIndex: 2,
        explanation: "A says 楽しみですね (I am looking forward to it)."
      }
    ],
    estMinutes: 2,
    tags: ["school", "event"]
  }
];
