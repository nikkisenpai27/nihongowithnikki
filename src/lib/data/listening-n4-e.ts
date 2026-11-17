import type { ListeningData } from "@/lib/types";

export const listeningN4E: ListeningData[] = [
  {
    id: "l-n4-41",
    title: "At the Tax Office",
    level: "N4",
    context: "A taxpayer visits the tax office to file a return",
    text: "A: いらっしゃいませ。本日[ほんじつ]は確定[かくてい]申告[しんこく]ですね。\nB: はい。去年[きょねん]の収入[しゅうにゅう]を申告[しんこく]したいです。\nA: 収入[しゅうにゅう]証明[しょうめい]書[しょ]を持[も]っていらっしゃいますか。\nB: はい、これです。会社[かいしゃ]からもらいました。\nA: 控除[こうじょ]を受[う]けるなら、領収[りょうしゅう]書[しょ]も必要[ひつよう]です。\nB: 医療[いりょう]費[ひ]の領収[りょうしゅう]書[しょ]があるんですが、大丈夫[だいじょうぶ]ですか。\nA: はい、結構[けっこう]です。後[あと]で確認[かくにん]します。\nB: 申告[しんこく]しながら、税金[ぜいきん]が戻[もど]るかもしれません。",
    translation: "A: Welcome. You are here to file your tax return today, right?\nB: Yes. I would like to declare last year's income.\nA: Do you have your income certificate with you?\nB: Yes, here it is. I received it from my company.\nA: If you wish to claim deductions, receipts are also necessary.\nB: I have medical expense receipts. Is that OK?\nA: Yes, that is fine. I will check them later.\nB: While filing, my taxes might be refunded.",
    questions: [
      {
        q: "Why did B come to the tax office?",
        choices: ["To get a passport", "To file his tax return", "To pay a fine", "To apply for insurance"],
        answerIndex: 1,
        explanation: "B says he wants to declare last year's income (収入を申告)."
      },
      {
        q: "What does A say is necessary to claim deductions?",
        choices: ["A passport", "A photo", "Receipts", "A bank card"],
        answerIndex: 2,
        explanation: "A says that if claiming deductions, receipts (領収書) are necessary."
      },
      {
        q: "What kind of receipts does B have?",
        choices: ["Hotel receipts", "Medical expense receipts", "Restaurant receipts", "School receipts"],
        answerIndex: 1,
        explanation: "B says he has medical expense receipts (医療費の領収書)."
      }
    ],
    estMinutes: 4,
    tags: ["taxes", "office"]
  },
  {
    id: "l-n4-42",
    title: "Discussing a Marketing Campaign",
    level: "N4",
    context: "Two coworkers plan a new advertising campaign",
    text: "A: 来週[らいしゅう]の新[あたら]しいキャンペーンについて話[はな]したいです。\nB: いいですね。ターゲットは若者[わかもの]ですか。\nA: はい、SNSを使[つか]いながら宣伝[せんでん]するつもりです。\nB: なるほど。インフルエンサーと提携[ていけい]したらどうですか。\nA: それはいい考[かんが]えかもしれません。予算[よさん]はどのくらいですか。\nB: 三十万[さんじゅうまん]円[えん]ぐらいなら出[だ]せると思[おも]います。\nA: では、来月[らいげつ]までに計画[けいかく]を作[つく]りましょう。\nB: 分[わ]かりました。私[わたし]が担当[たんとう]します。",
    translation: "A: I would like to talk about next week's new campaign.\nB: Sounds good. Is the target young people?\nA: Yes, we plan to advertise while using social media.\nB: I see. How about partnering with influencers?\nA: That might be a good idea. How much is the budget?\nB: I think we can provide about 300,000 yen.\nA: Then let us make a plan by next month.\nB: Understood. I will take charge.",
    questions: [
      {
        q: "Who is the campaign's target audience?",
        choices: ["Children", "Young people", "Seniors", "Foreign tourists"],
        answerIndex: 1,
        explanation: "B asks if the target is young people (若者), and A confirms."
      },
      {
        q: "How does A plan to advertise?",
        choices: ["On TV", "In newspapers", "Using social media", "On the radio"],
        answerIndex: 2,
        explanation: "A says they plan to advertise while using SNS (social media)."
      },
      {
        q: "How much budget does B think they can provide?",
        choices: ["100,000 yen", "200,000 yen", "300,000 yen", "500,000 yen"],
        answerIndex: 2,
        explanation: "B says they can provide about 300,000 yen (三十万円)."
      },
      {
        q: "What will B do for the campaign?",
        choices: ["Design the logo", "Take charge", "Contact influencers", "Set the budget"],
        answerIndex: 1,
        explanation: "B says he will take charge (私が担当します)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "marketing"]
  },
  {
    id: "l-n4-43",
    title: "Embassy Visa Interview",
    level: "N4",
    context: "A student applies for a visa at the Japanese embassy",
    text: "A: 今日[きょう]はビザの申請[しんせい]ですね。パスポートを見[み]せてください。\nB: はい、これです。\nA: 日本[にほん]へ行[い]く目的[もくてき]は何[なん]ですか。\nB: 留学[りゅうがく]するためです。大学[だいがく]で日本語[にほんご]を勉強[べんきょう]します。\nA: いつまで滞在[たいざい]する予定[よてい]ですか。\nB: 二年間[にねんかん]の予定[よてい]です。\nA: 生活費[せいかつひ]はどうしますか。\nB: 親[おや]が送[おく]ってくれます。もし足[た]りなかったら、アルバイトをするかもしれません。\nA: 分[わ]かりました。来週[らいしゅう]結果[けっか]をお知[し]らせします。",
    translation: "A: You are applying for a visa today. Please show your passport.\nB: Yes, here it is.\nA: What is your purpose for going to Japan?\nB: To study abroad. I will study Japanese at a university.\nA: How long do you plan to stay?\nB: For two years.\nA: How will you cover living expenses?\nB: My parents will send money. If it is not enough, I might work part-time.\nA: Understood. I will inform you of the results next week.",
    questions: [
      {
        q: "What is B's purpose for going to Japan?",
        choices: ["To work", "To travel", "To study abroad", "To visit family"],
        answerIndex: 2,
        explanation: "B says he is going to study abroad (留学するため)."
      },
      {
        q: "How long does B plan to stay in Japan?",
        choices: ["One year", "Two years", "Three years", "Five years"],
        answerIndex: 1,
        explanation: "B says he plans to stay for two years (二年間)."
      },
      {
        q: "What might B do if his money is not enough?",
        choices: ["Return home", "Borrow money", "Work part-time", "Ask the embassy"],
        answerIndex: 2,
        explanation: "B says if money is not enough, he might work part-time (アルバイトをするかもしれません)."
      }
    ],
    estMinutes: 4,
    tags: ["visa", "embassy"]
  },
  {
    id: "l-n4-44",
    title: "Discussing a Startup Idea",
    level: "N4",
    context: "Two friends discuss launching a new app",
    text: "A: 最近[さいきん]、新[あたら]しいアプリを作[つく]りたいと思[おも]っています。\nB: どんなアプリですか。\nA: 語学[ごがく]学習[がくしゅう]をしながら、友達[ともだち]と話[はな]せるアプリです。\nB: 面白[おもしろ]いかもしれませんね。市場[しじょう]は大[おお]きいですか。\nA: はい、需要[じゅよう]は高[たか]いと思[おも]います。\nB: 資金[しきん]はどうしますか。\nA: 投資家[とうしか]を探[さが]すつもりです。もし興味[きょうみ]があれば、一緒[いっしょ]にやりませんか。\nB: 考[かんが]えさせてもらえますか。来週[らいしゅう]までに返事[へんじ]します。",
    translation: "A: Recently, I have been thinking of creating a new app.\nB: What kind of app?\nA: An app where you can talk with friends while studying languages.\nB: That might be interesting. Is the market big?\nA: Yes, I think the demand is high.\nB: How about funding?\nA: I plan to look for investors. If you are interested, would you like to do it together?\nB: Could you let me think about it? I will reply by next week.",
    questions: [
      {
        q: "What kind of app does A want to create?",
        choices: ["A cooking app", "A language learning app", "A gaming app", "A travel app"],
        answerIndex: 1,
        explanation: "A wants to make an app to talk with friends while studying languages (語学学習しながら)."
      },
      {
        q: "How does A plan to get funding?",
        choices: ["From a bank loan", "From family", "By finding investors", "From the government"],
        answerIndex: 2,
        explanation: "A says he plans to look for investors (投資家を探す)."
      },
      {
        q: "What does B say at the end?",
        choices: ["He will join immediately", "He needs more details", "He will think and reply next week", "He has no interest"],
        answerIndex: 2,
        explanation: "B asks to think about it and will reply by next week (来週までに返事)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "technology"]
  },
  {
    id: "l-n4-45",
    title: "At the Car Dealership",
    level: "N4",
    context: "A customer looks for a family car at a dealership",
    text: "A: すみません、新[あたら]しい車[くるま]を見[み]たいんですが。\nB: いらっしゃいませ。どんな車[くるま]をお探[さが]しですか。\nA: 家族[かぞく]が多[おお]いので、大[おお]きい車[くるま]がいいです。\nB: こちらのミニバンはいかがですか。七人乗[ななにんの]りです。\nA: いいですね。燃費[ねんぴ]はどうですか。\nB: 一[いち]リットルで十[じゅう]キロ走[はし]れます。試乗[しじょう]してみたらどうですか。\nA: はい、お願[ねが]いします。もし気[き]に入[い]ったら、買[か]うかもしれません。\nB: 分[わ]かりました。ご案内[あんない]します。",
    translation: "A: Excuse me, I would like to see a new car.\nB: Welcome. What kind of car are you looking for?\nA: I have a big family, so a large car would be good.\nB: How about this minivan? It seats seven people.\nA: Sounds nice. How is the fuel efficiency?\nB: It can run 10 km per liter. How about taking a test drive?\nA: Yes, please. If I like it, I might buy it.\nB: Understood. I will guide you.",
    questions: [
      {
        q: "Why does A want a big car?",
        choices: ["He has many friends", "His family is large", "He drives a lot", "He has lots of luggage"],
        answerIndex: 1,
        explanation: "A says he has a big family (家族が多い)."
      },
      {
        q: "How many people does the minivan seat?",
        choices: ["Five", "Six", "Seven", "Eight"],
        answerIndex: 2,
        explanation: "B says the minivan seats seven people (七人乗り)."
      },
      {
        q: "What might A do if he likes the car?",
        choices: ["Buy it immediately", "Test drive it again", "Buy it", "Recommend it to friends"],
        answerIndex: 2,
        explanation: "A says if he likes it, he might buy it (買うかもしれません)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "cars"]
  },
  {
    id: "l-n4-46",
    title: "Planning a Team-Building Event",
    level: "N4",
    context: "Two coworkers plan a team-building outing",
    text: "A: 来月[らいげつ]のチームビルディングについて話[はな]したいです。\nB: いいですね。どこへ行[い]きましょうか。\nA: 山[やま]へ行[い]って、キャンプをしながら交流[こうりゅう]するのはどうですか。\nB: いい考[かんが]えですが、天気[てんき]が心配[しんぱい]です。\nA: 雨[あめ]が降[ふ]ったら、温泉[おんせん]に行[い]くことにしましょう。\nB: 分[わ]かりました。予算[よさん]は一人[ひとり]一万[いちまん]円[えん]です。\nA: では、ホテルを予約[よやく]しておきます。\nB: お願[ねが]いします。楽[たの]しみですね。",
    translation: "A: I would like to talk about next month's team-building event.\nB: Sounds good. Where should we go?\nA: How about going to the mountains and interacting while camping?\nB: Good idea, but I am worried about the weather.\nA: If it rains, let us go to a hot spring instead.\nB: Understood. The budget is 10,000 yen per person.\nA: Then I will go ahead and book a hotel.\nB: Please do. I am looking forward to it.",
    questions: [
      {
        q: "Where does A suggest going?",
        choices: ["To the beach", "To the mountains", "To a city", "To a museum"],
        answerIndex: 1,
        explanation: "A suggests going to the mountains (山へ行って)."
      },
      {
        q: "What will they do if it rains?",
        choices: ["Cancel the event", "Go to a museum", "Go to a hot spring", "Stay at the office"],
        answerIndex: 2,
        explanation: "A says if it rains, they will go to a hot spring (温泉に行く)."
      },
      {
        q: "What is the budget per person?",
        choices: ["5,000 yen", "10,000 yen", "15,000 yen", "20,000 yen"],
        answerIndex: 1,
        explanation: "B says the budget is 10,000 yen per person (一人一万円)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "events"]
  },
  {
    id: "l-n4-47",
    title: "At the Immigration Office",
    level: "N4",
    context: "A foreign resident renews a residence card",
    text: "A: 今日[きょう]は在留[ざいりゅう]カードの更新[こうしん]ですね。\nB: はい。期限[きげん]が来週[らいしゅう]切[き]れるので、慌[あわ]てて来[き]ました。\nA: 大丈夫[だいじょうぶ]ですよ。書類[しょるい]は揃[そろ]っていますか。\nB: はい、写真[しゃしん]とパスポートを持[も]ってきました。\nA: 仕事[しごと]は続[つづ]けていますか。\nB: はい、同[おな]じ会社[かいしゃ]で働[はたら]いています。\nA: では、こちらに署名[しょめい]してください。来月[らいげつ]の十五日[じゅうごにち]に受[う]け取[と]れます。\nB: ありがとうございます。引[ひ]っ越[こ]したら、住所[じゅうしょ]を変[か]えなきゃいけませんね。",
    translation: "A: You are here to renew your residence card today, right?\nB: Yes. It expires next week, so I came in a hurry.\nA: Do not worry. Do you have all your documents ready?\nB: Yes, I brought my photo and passport.\nA: Are you still working?\nB: Yes, I am working at the same company.\nA: Then please sign here. You can pick it up on the 15th of next month.\nB: Thank you. If I move, I will have to change my address.",
    questions: [
      {
        q: "Why did B come to the immigration office?",
        choices: ["To apply for a visa", "To renew his residence card", "To register an address", "To report a job change"],
        answerIndex: 1,
        explanation: "B came to renew his residence card (在留カードの更新)."
      },
      {
        q: "What did B bring with him?",
        choices: ["A photo and bank card", "A photo and passport", "A passport and visa", "A photo and contract"],
        answerIndex: 1,
        explanation: "B says he brought his photo and passport (写真とパスポート)."
      },
      {
        q: "When can B pick up the new card?",
        choices: ["Next week", "This month's end", "The 15th of next month", "In two months"],
        answerIndex: 2,
        explanation: "A says he can pick it up on the 15th of next month (来月の十五日)."
      },
      {
        q: "What will B have to do if he moves?",
        choices: ["Apply again", "Pay a fee", "Change his address", "Visit the embassy"],
        answerIndex: 2,
        explanation: "B says if he moves, he will have to change his address (住所を変えなきゃ)."
      }
    ],
    estMinutes: 4,
    tags: ["immigration", "office"]
  },
  {
    id: "l-n4-48",
    title: "Discussing a Patent",
    level: "N4",
    context: "Two engineers discuss filing a patent",
    text: "A: 新[あたら]しい技術[ぎじゅつ]の特許[とっきょ]を取[と]りたいと思[おも]っています。\nB: それは大事[だいじ]ですね。いつ出願[しゅつがん]しますか。\nA: 来月[らいげつ]にするつもりですが、書類[しょるい]が複雑[ふくざつ]です。\nB: 弁理士[べんりし]に依頼[いらい]したらどうですか。\nA: そうかもしれません。費用[ひよう]はどのくらいですか。\nB: 二十万[にじゅうまん]円[えん]ぐらいかかると思[おも]います。\nA: 高[たか]いですが、特許[とっきょ]が認[みと]められれば価値[かち]があります。\nB: はい。慎重[しんちょう]に進[すす]めましょう。",
    translation: "A: I am thinking of getting a patent for a new technology.\nB: That is important. When will you file?\nA: I plan to do it next month, but the paperwork is complicated.\nB: How about asking a patent attorney to handle it?\nA: That might be true. How much would it cost?\nB: I think it would cost about 200,000 yen.\nA: It is expensive, but if the patent is granted, it will be worth it.\nB: Yes. Let us proceed carefully.",
    questions: [
      {
        q: "What does A want to obtain?",
        choices: ["A new technology", "A patent", "A license", "A trademark"],
        answerIndex: 1,
        explanation: "A says he wants to get a patent for a new technology (特許を取りたい)."
      },
      {
        q: "What does B suggest?",
        choices: ["Hiring an assistant", "Filing online", "Asking a patent attorney", "Waiting a year"],
        answerIndex: 2,
        explanation: "B suggests asking a patent attorney (弁理士に依頼)."
      },
      {
        q: "How much does B think it will cost?",
        choices: ["100,000 yen", "200,000 yen", "300,000 yen", "500,000 yen"],
        answerIndex: 1,
        explanation: "B says it would cost about 200,000 yen (二十万円)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "law"]
  },
  {
    id: "l-n4-49",
    title: "At the Notary Public",
    level: "N4",
    context: "A client gets a contract notarized",
    text: "A: 今日[きょう]は契約[けいやく]書[しょ]の認証[にんしょう]ですね。\nB: はい。この書類[しょるい]を確認[かくにん]していただけますか。\nA: はい、見[み]せてください。内容[ないよう]は明確[めいかく]ですね。\nB: 印鑑[いんかん]はこれでよろしいですか。\nA: はい、結構[けっこう]です。署名[しょめい]と押印[おういん]をお願[ねが]いします。\nB: これで完成[かんせい]ですか。\nA: はい。後[あと]で正式[せいしき]な文書[ぶんしょ]を発送[はっそう]します。\nB: 分[わ]かりました。ありがとうございます。\nA: もし不明[ふめい]な点[てん]があれば、いつでもご連絡[れんらく]ください。",
    translation: "A: You are here to have a contract notarized today, right?\nB: Yes. Could you check this document for me?\nA: Yes, please show me. The contents are clear.\nB: Is this seal acceptable?\nA: Yes, that is fine. Please sign and stamp here.\nB: Is it complete now?\nA: Yes. I will send the official document later.\nB: Understood. Thank you.\nA: If you have any unclear points, please contact me anytime.",
    questions: [
      {
        q: "Why did B visit the notary public?",
        choices: ["To translate a document", "To notarize a contract", "To file a lawsuit", "To register a company"],
        answerIndex: 1,
        explanation: "B is there to have a contract notarized (契約書の認証)."
      },
      {
        q: "What does A ask B to do?",
        choices: ["Sign and stamp", "Bring another document", "Pay a fee", "Show ID"],
        answerIndex: 0,
        explanation: "A asks B to sign and stamp (署名と押印)."
      },
      {
        q: "When will the official document be sent?",
        choices: ["Immediately", "The same day", "Later", "In one month"],
        answerIndex: 2,
        explanation: "A says he will send the official document later (後で正式な文書を発送)."
      }
    ],
    estMinutes: 4,
    tags: ["legal", "office"]
  },
  {
    id: "l-n4-50",
    title: "Discussing a Company Merger",
    level: "N4",
    context: "Two managers discuss a possible company merger",
    text: "A: 来年[らいねん]、あの会社[かいしゃ]と合併[がっぺい]するかもしれないと聞[き]きました。\nB: 本当[ほんとう]ですか。大[おお]きな変化[へんか]ですね。\nA: はい。もし合併[がっぺい]すれば、市場[しじょう]シェアが増[ふ]えると思[おも]います。\nB: しかし、社員[しゃいん]が不安[ふあん]かもしれません。\nA: そうですね。説明会[せつめいかい]を開[ひら]きながら、丁寧[ていねい]に説明[せつめい]しましょう。\nB: いいですね。私[わたし]が準備[じゅんび]します。\nA: ありがとうございます。来週[らいしゅう]までに資料[しりょう]を作[つく]ってください。\nB: 分[わ]かりました。全力[ぜんりょく]でやります。",
    translation: "A: I heard we might merge with that company next year.\nB: Really? That is a big change.\nA: Yes. If we merge, I think our market share will increase.\nB: However, employees might feel anxious.\nA: That is true. Let us hold explanatory meetings and explain things carefully as we go.\nB: Good idea. I will prepare them.\nA: Thank you. Please prepare the materials by next week.\nB: Understood. I will do my best.",
    questions: [
      {
        q: "What did A hear about?",
        choices: ["A new product launch", "A possible merger", "A staff reduction", "An office relocation"],
        answerIndex: 1,
        explanation: "A heard the company might merge with another company next year (合併するかもしれない)."
      },
      {
        q: "What is B worried about?",
        choices: ["Losing money", "Employees being anxious", "Losing clients", "Delays"],
        answerIndex: 1,
        explanation: "B worries that employees might feel anxious (社員が不安)."
      },
      {
        q: "What does A ask B to do?",
        choices: ["Hold a meeting", "Prepare materials by next week", "Talk to employees", "Contact the other company"],
        answerIndex: 1,
        explanation: "A asks B to prepare materials by next week (来週までに資料を作って)."
      },
      {
        q: "How does B respond at the end?",
        choices: ["He will do his best", "He needs more time", "He declines", "He asks for help"],
        answerIndex: 0,
        explanation: "B says he will do his best (全力でやります)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "merger"]
  }
];
