import type { ListeningData } from "@/lib/types";

export const listeningN4I: ListeningData[] = [
  {
    id: "l-n4-81",
    title: "At the Furniture Store",
    level: "N4",
    context: "A customer looks for a desk at a furniture store",
    text: "A: すみません、新[あたら]しい机[つくえ]を探[さが]しています。\nB: いらっしゃいませ。どのような机[つくえ]をお探[さが]しですか。\nA: 家[いえ]で仕事[しごと]をするので、大[おお]きいのがいいです。\nB: それでは、こちらはいかがですか。木[き]で作[つく]っています。\nA: かわいいですが、もう少[すこ]し安[やす]いのはありますか。\nB: はい、こちらは同[おな]じ大[おお]きさで、一万八千円[いちまんはっせんえん]です。\nA: じゃ、これにします。明日[あした]届[とど]きますか。\nB: はい、明日[あした]の午後[ごご]にお届[とど]けできます。",
    translation: "A: Excuse me, I'm looking for a new desk.\nB: Welcome. What kind of desk are you looking for?\nA: I work at home, so a large one would be good.\nB: Then how about this one? It's made of wood.\nA: It's cute, but do you have anything a little cheaper?\nB: Yes, this one is the same size and costs eighteen thousand yen.\nA: Then I'll take this one. Will it arrive tomorrow?\nB: Yes, we can deliver it tomorrow afternoon.",
    questions: [
      {
        q: "Why does the customer want a large desk?",
        choices: ["For a child's room", "To work at home", "For a shop", "For a school"],
        answerIndex: 1,
        explanation: "A says they work at home, so a large desk is good (家で仕事をするので)."
      },
      {
        q: "What is the first desk made of?",
        choices: ["Plastic", "Metal", "Wood", "Glass"],
        answerIndex: 2,
        explanation: "B explains the first desk is made of wood (木で作っています)."
      },
      {
        q: "How much is the cheaper desk?",
        choices: ["Eight thousand yen", "Ten thousand yen", "Eighteen thousand yen", "Twenty thousand yen"],
        answerIndex: 2,
        explanation: "B says the cheaper one costs eighteen thousand yen (一万八千円)."
      },
      {
        q: "When will the desk be delivered?",
        choices: ["This afternoon", "Tomorrow morning", "Tomorrow afternoon", "Next week"],
        answerIndex: 2,
        explanation: "B confirms delivery tomorrow afternoon (明日の午後にお届けできます)."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "home"]
  },
  {
    id: "l-n4-82",
    title: "Discussing a Freelance Contract",
    level: "N4",
    context: "A client offers a freelance project and discusses conditions",
    text: "A: 今度[こんど]のプロジェクト、フリーランスで参加[さんか]してもらいたいんですが。\nB: ありがとうございます。条件[じょうけん]を教[おし]えてください。\nA: 期間[きかん]は三か月[さんかげつ]で、報酬[ほうしゅう]は月[つき]二十万円[にじゅうまんえん]です。\nB: 仕事[しごと]の内容[ないよう]は何[なに]ですか。\nA: ウェブサイトのデザインと更新[こうしん]です。\nB: 分[わ]かりました。契約書[けいやくしょ]はいつもらえますか。\nA: 来週[らいしゅう]の月曜日[げつようび]にメールでお送[おく]りします。\nB: では、よく読[よ]んでからサインします。",
    translation: "A: For the next project, I'd like you to join as a freelancer.\nB: Thank you. Please tell me the conditions.\nA: The period is three months, and the pay is two hundred thousand yen per month.\nB: What is the content of the work?\nA: Website design and updates.\nB: Understood. When can I receive the contract?\nA: I'll send it by email next Monday.\nB: Then I'll read it carefully before signing.",
    questions: [
      {
        q: "How does the client want B to join the project?",
        choices: ["As a full-time employee", "As a freelancer", "As an intern", "As a manager"],
        answerIndex: 1,
        explanation: "A asks B to join as a freelancer (フリーランスで参加してもらいたい)."
      },
      {
        q: "How long is the project period?",
        choices: ["One month", "Two months", "Three months", "Six months"],
        answerIndex: 2,
        explanation: "A says the period is three months (期間は三か月)."
      },
      {
        q: "What is the monthly pay?",
        choices: ["One hundred thousand yen", "One hundred fifty thousand yen", "Two hundred thousand yen", "Three hundred thousand yen"],
        answerIndex: 2,
        explanation: "A states the pay is two hundred thousand yen per month (月二十万円)."
      },
      {
        q: "When will B receive the contract?",
        choices: ["Today", "Tomorrow", "Next Monday", "Next month"],
        answerIndex: 2,
        explanation: "A will send the contract by email next Monday (来週の月曜日にメールでお送りします)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "contract"]
  },
  {
    id: "l-n4-83",
    title: "At the Wedding Planner",
    level: "N4",
    context: "A couple visits a wedding planner to choose a venue",
    text: "A: 来月[らいげつ]結婚[けっこん]することになりました。\nB: おめでとうございます。お式[しき]はいつですか。\nA: 十月[じゅうがつ]の十五日[じゅうごにち]を考[かんが]えています。\nB: 何人[なんにん]ぐらい招待[しょうたい]しますか。\nA: まだ決[き]めていませんが、五十人[ごじゅうにん]くらいでしょう。\nB: では、この会場[かいじょう]はいかがですか。百人[ひゃくにん]まで入[はい]れます。\nA: いいですね。料金[りょうきん]はいくらですか。\nB: 一人[ひとり]一万五千円[いちまんごせんえん]です。食事[しょくじ]もついています。\nA: じゃ、ここにしましょう。",
    translation: "A: We've decided to get married next month.\nB: Congratulations. When is the ceremony?\nA: We're considering October 15th.\nB: About how many people will you invite?\nA: We haven't decided yet, but around fifty.\nB: Then how about this venue? It can hold up to a hundred people.\nA: Sounds good. How much is the fee?\nB: Fifteen thousand yen per person, and meals are included.\nA: Then let's go with this place.",
    questions: [
      {
        q: "When is the wedding planned?",
        choices: ["Next month", "This summer", "October 15th", "December"],
        answerIndex: 2,
        explanation: "A is considering October 15th for the ceremony (十月の十五日を考えています)."
      },
      {
        q: "About how many guests will be invited?",
        choices: ["Around thirty", "Around fifty", "Around a hundred", "Around a hundred and fifty"],
        answerIndex: 1,
        explanation: "A estimates around fifty guests (五十人くらいでしょう)."
      },
      {
        q: "How many people can the venue hold?",
        choices: ["Fifty", "Eighty", "A hundred", "Two hundred"],
        answerIndex: 2,
        explanation: "B says the venue can hold up to a hundred people (百人まで入れます)."
      },
      {
        q: "What is included in the per-person fee?",
        choices: ["Drinks only", "A hotel room", "Meals", "Transportation"],
        answerIndex: 2,
        explanation: "B notes meals are included in the fifteen thousand yen per person (食事もついています)."
      }
    ],
    estMinutes: 5,
    tags: ["events", "planning"]
  },
  {
    id: "l-n4-84",
    title: "Talking About a Retirement Plan",
    level: "N4",
    context: "A senior employee discusses retirement plans with a colleague",
    text: "A: 来年[らいねん]、定年[ていねん]で退職[たいしょく]するつもりです。\nB: そうですか。長[なが]い間[あいだ]、働[はたら]きましたね。\nA: はい、四十年[よんじゅうねん]働[はたら]きました。ゆっくり休[やす]みたいです。\nB: 退職後[たいしょくご]は何[なに]をする予定[よてい]ですか。\nA: 田舎[いなか]に引[ひ]っ越[こ]して、畑[はたけ]をしたいです。\nB: それはいいですね。奥[おく]さんは賛成[さんせい]していますか。\nA: はい、妻[つま]も楽[たの]しみにしています。\nB: 健康[けんこう]に気[き]をつけて、ゆっくりしてください。",
    translation: "A: Next year I plan to retire at the mandatory age.\nB: I see. You've worked for a long time.\nA: Yes, I've worked for forty years. I want to rest properly.\nB: What do you plan to do after retirement?\nA: I'd like to move to the countryside and grow vegetables.\nB: That sounds nice. Does your wife agree?\nA: Yes, my wife is looking forward to it too.\nB: Take care of your health and take it easy.",
    questions: [
      {
        q: "When does A plan to retire?",
        choices: ["This year", "Next year", "In three years", "In five years"],
        answerIndex: 1,
        explanation: "A plans to retire next year at the mandatory age (来年、定年で退職するつもり)."
      },
      {
        q: "How long has A worked?",
        choices: ["Thirty years", "Thirty-five years", "Forty years", "Forty-five years"],
        answerIndex: 2,
        explanation: "A has worked for forty years (四十年働きました)."
      },
      {
        q: "What does A want to do after retiring?",
        choices: ["Travel abroad", "Move to the countryside and farm", "Start a company", "Teach at a school"],
        answerIndex: 1,
        explanation: "A wants to move to the countryside and grow vegetables (田舎に引っ越して、畑をしたい)."
      },
      {
        q: "How does A's wife feel about the plan?",
        choices: ["She's worried", "She disagrees", "She's looking forward to it", "She hasn't heard about it"],
        answerIndex: 2,
        explanation: "A says his wife is also looking forward to it (妻も楽しみにしています)."
      }
    ],
    estMinutes: 4,
    tags: ["work", "life"]
  },
  {
    id: "l-n4-85",
    title: "A Real-Estate Viewing",
    level: "N4",
    context: "An agent shows an apartment to a prospective tenant",
    text: "A: こちらがご案内[あんない]する部屋[へや]です。\nB: きれいですね。広[ひろ]さはどのくらいですか。\nA: 六十平米[ろくじゅうへいべい]です。南向[みなみむ]きで日[ひ]がよく入[はい]ります。\nB: 家賃[やちん]はいくらですか。\nA: 月[つき]八万円[はちまんえん]です。共益費[きょうえきひ]は別[べつ]で一万円[いちまんえん]です。\nB: 駅[えき]から遠[とお]くないですか。\nA: 徒歩[とほ]で十分[じゅっぷん]です。コンビニも近[ちか]くにあります。\nB: いいですね。家族[かぞく]と相談[そうだん]してから連絡[れんらく]します。",
    translation: "A: This is the room I'm showing you.\nB: It's nice. How large is it?\nA: Sixty square meters. It faces south, so it gets good sunlight.\nB: How much is the rent?\nA: Eighty thousand yen per month. The common-area fee is separate, at ten thousand yen.\nB: Is it far from the station?\nA: It's a ten-minute walk. There's also a convenience store nearby.\nB: Sounds good. I'll contact you after discussing with my family.",
    questions: [
      {
        q: "How large is the apartment?",
        choices: ["Forty square meters", "Fifty square meters", "Sixty square meters", "Eighty square meters"],
        answerIndex: 2,
        explanation: "A says the room is sixty square meters (六十平米)."
      },
      {
        q: "Why does the apartment get good sunlight?",
        choices: ["It's on a high floor", "It faces south", "It has big windows", "There are no tall buildings around"],
        answerIndex: 1,
        explanation: "A explains it faces south, so it gets good sunlight (南向きで日がよく入ります)."
      },
      {
        q: "How much is the monthly rent excluding the common-area fee?",
        choices: ["Fifty thousand yen", "Seventy thousand yen", "Eighty thousand yen", "Ninety thousand yen"],
        answerIndex: 2,
        explanation: "A says the rent is eighty thousand yen per month (月八万円)."
      },
      {
        q: "How far is the apartment from the station?",
        choices: ["Five minutes by foot", "Ten minutes by foot", "Five minutes by bus", "Ten minutes by train"],
        answerIndex: 1,
        explanation: "A says it's a ten-minute walk from the station (徒歩で十分)."
      }
    ],
    estMinutes: 4,
    tags: ["housing", "city"]
  },
  {
    id: "l-n4-86",
    title: "Returning a Defective Product",
    level: "N4",
    context: "A customer returns a faulty item at an electronics store",
    text: "A: すみません、これを返品[へんぴん]したいんですが。\nB: どうしましたか。壊[こわ]れていましたか。\nA: はい、昨日[きのう]買[か]ったら、家[いえ]で動[うご]かなかったんです。\nB: レシートはありますか。\nA: はい、これです。交換[こうかん]はできますか。\nB: 同[おな]じ商品[しょうひん]があるか確認[かくにん]します。少々[しょうしょう]お待[ま]ちください。\nA: はい、待[ま]ちます。\nB: 申[もう]し訳[わけ]ありませんが、今[いま]は在庫[ざいこ]がありません。\nA: じゃ、返金[へんきん]してください。",
    translation: "A: Excuse me, I'd like to return this.\nB: What happened? Was it broken?\nA: Yes, I bought it yesterday and it didn't work at home.\nB: Do you have the receipt?\nA: Yes, here it is. Can I exchange it?\nB: I'll check if we have the same product. Please wait a moment.\nA: Yes, I'll wait.\nB: I'm sorry, but we're out of stock right now.\nA: Then please give me a refund.",
    questions: [
      {
        q: "What does the customer want to do first?",
        choices: ["Get a refund", "Exchange the product", "Buy a warranty", "Complain about staff"],
        answerIndex: 1,
        explanation: "A initially wants to return the item and asks about an exchange (これを返品したい / 交換はできますか)."
      },
      {
        q: "When did the customer buy the product?",
        choices: ["Today", "Yesterday", "Last week", "Last month"],
        answerIndex: 1,
        explanation: "A bought it yesterday and it didn't work at home (昨日買ったら)."
      },
      {
        q: "Why can't the customer exchange the product?",
        choices: ["There's no receipt", "The product is too old", "It's out of stock", "The store is closing"],
        answerIndex: 2,
        explanation: "B says there's no stock right now (今は在庫がありません)."
      },
      {
        q: "What does the customer finally decide to do?",
        choices: ["Wait for new stock", "Get a refund", "Take the broken item home", "Buy a different brand"],
        answerIndex: 1,
        explanation: "A finally asks for a refund (返金してください)."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "customer-service"]
  },
  {
    id: "l-n4-87",
    title: "At the Glasses Repair Shop",
    level: "N4",
    context: "A customer brings broken glasses to a repair shop",
    text: "A: すみません、眼鏡[めがね]が壊[こわ]れてしまったんですが。\nB: どうなりましたか。\nA: 子供[こども]が踏[ふ]んで、枠[わく]が曲[まが]ってしまったんです。\nB: ちょっと見[み]せてください。うん、この部分[ぶぶん]は直[なお]せそうです。\nA: いくらくらいかかりますか。\nB: 三千円[さんぜんえん]くらいで直[なお]せると思[おも]います。\nA: いつできますか。\nB: 明後日[あさって]の午後[ごご]にお渡[わた]しできます。\nA: じゃ、お願[ねが]いします。",
    translation: "A: Excuse me, my glasses broke.\nB: What happened?\nA: My child stepped on them and the frame got bent.\nB: Let me see. Hmm, this part looks fixable.\nA: About how much will it cost?\nB: I think it can be fixed for about three thousand yen.\nA: When will it be ready?\nB: I can hand it over the day after tomorrow in the afternoon.\nA: Then please go ahead.",
    questions: [
      {
        q: "How did the glasses break?",
        choices: ["They fell on the floor", "A child stepped on them", "They were sat on", "They got crushed in a bag"],
        answerIndex: 1,
        explanation: "A explains a child stepped on them and bent the frame (子供が踏んで)."
      },
      {
        q: "What part of the glasses can be fixed?",
        choices: ["The lenses", "The frame", "The case", "The screws"],
        answerIndex: 1,
        explanation: "B says the bent frame looks fixable (この部分は直せそうです)."
      },
      {
        q: "About how much will the repair cost?",
        choices: ["One thousand yen", "Two thousand yen", "Three thousand yen", "Five thousand yen"],
        answerIndex: 2,
        explanation: "B estimates about three thousand yen (三千円くらいで直せる)."
      },
      {
        q: "When can the customer pick up the glasses?",
        choices: ["Tomorrow morning", "Tomorrow afternoon", "The day after tomorrow afternoon", "Next week"],
        answerIndex: 2,
        explanation: "B says they can hand them over the day after tomorrow in the afternoon (明後日の午後にお渡しできます)."
      }
    ],
    estMinutes: 4,
    tags: ["repair", "daily-life"]
  },
  {
    id: "l-n4-88",
    title: "Joining a Photography Club",
    level: "N4",
    context: "A visitor asks about joining an amateur photography club",
    text: "A: この写真[しゃしん]クラブに入[はい]りたいんですが。\nB: ようこそ。初心者[しょしんしゃ]でも大丈夫[だいじょうぶ]ですよ。\nA: 写真[しゃしん]を撮[と]るのは好[す]きですが、上手[じょうず]じゃありません。\nB: 毎週[まいしゅう]土曜日[どようび]に集[あつ]まって、色々[いろいろ]な場所[ばしょ]で撮[と]ります。\nA: 会費[かいひ]はいくらですか。\nB: 月[つき]二千円[にせんえん]です。カメラは自分[じぶん]で用意[ようい]してください。\nA: 来週[らいしゅう]の土曜日[どようび]に行[い]ってもいいですか。\nB: はい、ぜひ来[き]てください。九時[くじ]に駅前[えきまえ]に集合[しゅうごう]します。",
    translation: "A: I'd like to join this photography club.\nB: Welcome. Beginners are fine too.\nA: I like taking photos, but I'm not very good.\nB: We gather every Saturday and shoot in various places.\nA: How much is the membership fee?\nB: Two thousand yen per month. Please bring your own camera.\nA: Can I come next Saturday?\nB: Yes, please do come. We meet at nine in front of the station.",
    questions: [
      {
        q: "Who can join the photography club?",
        choices: ["Only professionals", "Only club members' friends", "Beginners too", "Only people with expensive cameras"],
        answerIndex: 2,
        explanation: "B says beginners are welcome (初心者でも大丈夫)."
      },
      {
        q: "When does the club usually meet?",
        choices: ["Every Sunday", "Every Saturday", "Every Wednesday evening", "Once a month"],
        answerIndex: 1,
        explanation: "B says they gather every Saturday (毎週土曜日に集まって)."
      },
      {
        q: "What does each member need to bring?",
        choices: ["A notebook", "A tripod", "A camera", "A laptop"],
        answerIndex: 2,
        explanation: "B asks members to bring their own camera (カメラは自分で用意してください)."
      },
      {
        q: "Where does the club meet at nine?",
        choices: ["At the park", "At the station entrance", "In front of the station", "At the camera shop"],
        answerIndex: 2,
        explanation: "B says they meet at nine in front of the station (九時に駅前に集合します)."
      }
    ],
    estMinutes: 4,
    tags: ["hobby", "weekend"]
  },
  {
    id: "l-n4-89",
    title: "At the Music School",
    level: "N4",
    context: "A student inquires about piano lessons at a music school",
    text: "A: ピアノを習[なら]いたいんですが。\nB: いらっしゃいませ。前[まえ]に習[なら]ったことはありますか。\nA: 子[こ]どもの時[とき]に少[すこ]し習[なら]いましたが、忘[わす]れてしまいました。\nB: では、初級[しょきゅう]クラスから始[はじ]めましょう。\nA: 一回[いっかい]の授業[じゅぎょう]はどのくらいですか。\nB: 四十五分[よんじゅうごふん]で、月[つき]に四回[よんかい]です。\nA: 月謝[げっしゃ]はいくらですか。\nB: 一万円[いちまんえん]です。体験[たいけん]レッスンもできますよ。\nA: じゃ、まず体験[たいけん]レッスンをお願[ねが]いします。",
    translation: "A: I'd like to learn the piano.\nB: Welcome. Have you taken lessons before?\nA: I learned a little as a child, but I've forgotten.\nB: Then let's start from the beginner class.\nA: How long is each lesson?\nB: Forty-five minutes, four times a month.\nA: How much is the monthly fee?\nB: Ten thousand yen. You can also take a trial lesson.\nA: Then please start with a trial lesson.",
    questions: [
      {
        q: "What does the student want to learn?",
        choices: ["The guitar", "The violin", "The piano", "The drums"],
        answerIndex: 2,
        explanation: "A says they want to learn the piano (ピアノを習いたい)."
      },
      {
        q: "What class does B suggest?",
        choices: ["Advanced", "Intermediate", "Beginner", "Adult-only"],
        answerIndex: 2,
        explanation: "B suggests starting from the beginner class (初級クラスから始めましょう)."
      },
      {
        q: "How often are the lessons per month?",
        choices: ["Two", "Three", "Four", "Five"],
        answerIndex: 2,
        explanation: "B says lessons are four times a month (月に四回)."
      },
      {
        q: "What does the student decide to do first?",
        choices: ["Pay the monthly fee", "Buy a piano", "Take a trial lesson", "Sign a contract"],
        answerIndex: 2,
        explanation: "A asks for a trial lesson first (まず体験レッスンをお願いします)."
      }
    ],
    estMinutes: 4,
    tags: ["learning", "music"]
  },
  {
    id: "l-n4-90",
    title: "Planning a Home Renovation",
    level: "N4",
    context: "A homeowner discusses renovation plans with a contractor",
    text: "A: 来月[らいげつ]、家[いえ]をリフォームするつもりです。\nB: どのようなことをしたいですか。\nA: 台所[だいどころ]と風呂場[ふろば]を新[あたら]しくしたいです。\nB: 予算[よさん]はどのくらいですか。\nA: 百五十万円[ひゃくごじゅうまんえん]くらいです。\nB: それなら、台所[だいどころ]はできると思[おも]いますが、風呂場[ふろば]は少[すこ]し足[た]りないかもしれません。\nA: じゃ、風呂場[ふろば]は来年[らいねん]にします。\nB: 分[わ]かりました。来週[らいしゅう]、見積[みつ]もりをお持[も]ちします。",
    translation: "A: Next month I plan to renovate my house.\nB: What kind of work do you want to do?\nA: I'd like to redo the kitchen and the bathroom.\nB: What's your budget?\nA: Around one million five hundred thousand yen.\nB: With that, I think we can do the kitchen, but it might be a little short for the bathroom.\nA: Then I'll leave the bathroom for next year.\nB: Understood. I'll bring an estimate next week.",
    questions: [
      {
        q: "When does A plan to renovate the house?",
        choices: ["This month", "Next month", "Next year", "In two years"],
        answerIndex: 1,
        explanation: "A plans to renovate next month (来月、家をリフォームするつもり)."
      },
      {
        q: "Which two rooms does A want to redo?",
        choices: ["Living room and bedroom", "Kitchen and bathroom", "Kitchen and bedroom", "Bathroom and hallway"],
        answerIndex: 1,
        explanation: "A wants to redo the kitchen and the bathroom (台所と風呂場を新しくしたい)."
      },
      {
        q: "What is A's budget?",
        choices: ["One million yen", "One million two hundred thousand yen", "One million five hundred thousand yen", "Two million yen"],
        answerIndex: 2,
        explanation: "A says the budget is around one million five hundred thousand yen (百五十万円くらい)."
      },
      {
        q: "What does A decide about the bathroom?",
        choices: ["To renovate it now", "To do it cheaper", "To postpone it to next year", "To do it himself"],
        answerIndex: 2,
        explanation: "A decides to leave the bathroom for next year (風呂場は来年にします)."
      }
    ],
    estMinutes: 4,
    tags: ["home", "planning"]
  }
];
