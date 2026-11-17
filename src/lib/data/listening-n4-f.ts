import type { ListeningData } from "@/lib/types";

export const listeningN4F: ListeningData[] = [
  {
    id: "l-n4-51",
    title: "At the Pharmacy with a Prescription",
    level: "N4",
    context: "A patient brings a prescription to a pharmacy",
    text: "A: すみません、この処方箋[しょほうせん]でお薬[くすり]を出[だ]していただけますか。\nB: はい、お見[み]せください。少[すこ]し時間[じかん]がかかりますが、よろしいですか。\nA: はい、待[ま]っています。何分[なんぷん]くらいですか。\nB: 十分[じゅっぷん]ほどでできます。お飲[の]みになる時間[じかん]は食後[しょくご]でよろしいでしょうか。\nA: はい、食後[しょくご]に三回[さんかい]飲[の]むように先生[せんせい]に言[い]われました。\nB: 分[わ]かりました。このお薬[くすり]は眠気[ねむけ]が出[で]ることがありますので、運転[うんてん]は避[さ]けてください。\nA: 分[わ]かりました。ありがとうございます。",
    translation: "A: Excuse me, could you fill this prescription?\nB: Yes, please show me. It will take a little time, is that alright?\nA: Yes, I'll wait. About how many minutes will it take?\nB: It should be ready in about ten minutes. Should the medication be taken after meals?\nA: Yes, the doctor told me to take it three times after meals.\nB: Understood. This medicine may cause drowsiness, so please avoid driving.\nA: I understand. Thank you.",
    questions: [
      {
        q: "How long will it take to fill the prescription?",
        choices: ["About 2 minutes", "About 5 minutes", "About 10 minutes", "About 30 minutes"],
        answerIndex: 2,
        explanation: "B says it will be ready in about ten minutes (十分ほど)."
      },
      {
        q: "When should the patient take the medicine?",
        choices: ["Before meals", "After meals", "Before sleeping", "On an empty stomach"],
        answerIndex: 1,
        explanation: "The doctor told the patient to take it three times after meals (食後に三回)."
      },
      {
        q: "What side effect does the pharmacist warn about?",
        choices: ["Headache", "Stomach pain", "Drowsiness", "Fever"],
        answerIndex: 2,
        explanation: "B warns that the medicine may cause drowsiness (眠気)."
      },
      {
        q: "What does the pharmacist tell the patient to avoid?",
        choices: ["Drinking tea", "Driving", "Walking", "Eating fish"],
        answerIndex: 1,
        explanation: "Because of drowsiness, the patient is told to avoid driving (運転は避けてください)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "pharmacy"]
  },
  {
    id: "l-n4-52",
    title: "Joining a Conference Call",
    level: "N4",
    context: "A team member joins a late conference call",
    text: "A: おはようございます。遅[おく]れてすみません、電車[でんしゃ]が遅延[ちえん]しました。\nB: 大丈夫[だいじょうぶ]です。今[いま]、東京[とうきょう]支社[ししゃ]の報告[ほうこく]を聞[き]いているところです。\nA: そうですか。何[なに]か手伝[てつだ]うことはありますか。\nB: ええ、来月[らいげつ]の計画[けいかく]について意見[いけん]を聞[き]かせてください。\nA: 分[わ]かりました。資料[しりょう]を画面[がめん]に共有[きょうゆう]してもいいですか。\nB: はい、お願[ねが]いします。皆[みな]さん、見[み]えますか。\nA: はい、見[み]えます。では、説明[せつめい]を始[はじ]めます。",
    translation: "A: Good morning. Sorry I'm late, my train was delayed.\nB: That's fine. We're currently listening to the Tokyo branch's report.\nA: I see. Is there anything I can help with?\nB: Yes, please share your opinion about next month's plan.\nA: Understood. May I share the materials on the screen?\nB: Yes, please. Can everyone see it?\nA: Yes, I can see it. Then, I'll start the explanation.",
    questions: [
      {
        q: "Why was A late to the call?",
        choices: ["Traffic jam", "Train delay", "Overslept", "Forgot the time"],
        answerIndex: 1,
        explanation: "A explains that the train was delayed (電車が遅延しました)."
      },
      {
        q: "What is the team doing when A joins?",
        choices: ["Having lunch", "Listening to the Tokyo branch's report", "Reviewing a contract", "Watching a video"],
        answerIndex: 1,
        explanation: "B says they are listening to the Tokyo branch's report (東京支社の報告)."
      },
      {
        q: "What does A offer to share on screen?",
        choices: ["A photo", "Materials", "A video", "An email"],
        answerIndex: 1,
        explanation: "A asks to share the materials on screen (資料を画面に共有)."
      }
    ],
    estMinutes: 3,
    tags: ["business", "office"]
  },
  {
    id: "l-n4-53",
    title: "At the Insurance Office",
    level: "N4",
    context: "A customer asks about insurance plans",
    text: "A: すみません、医療保険[いりょうほけん]について相談[そうだん]したいのですが。\nB: いらっしゃいませ。こちらに座[すわ]ってください。何[なに]かご希望[きぼう]はありますか。\nA: 月[つき]の保険料[ほけんりょう]を五千円[ごせんえん]以内[いない]にしたいんですが。\nB: それでは、このプランがおすすめです。入院[にゅういん]の時[とき]に一日[いちにち]一万[いちまん]円[えん]が出[で]ます。\nA: 家族[かぞく]も入[はい]れますか。\nB: はい、ご家族[かぞく]も同[おな]じプランで加入[かにゅう]できます。\nA: そうですか。一度[いちど]家[いえ]に帰[かえ]って妻[つま]と相談[そうだん]してから決[き]めたいです。",
    translation: "A: Excuse me, I'd like to consult about medical insurance.\nB: Welcome. Please have a seat here. Do you have any preferences?\nA: I'd like to keep the monthly premium within 5,000 yen.\nB: In that case, I recommend this plan. If hospitalized, it pays 10,000 yen per day.\nA: Can family members join too?\nB: Yes, your family can enroll in the same plan.\nA: I see. I'd like to decide after going home and consulting with my wife.",
    questions: [
      {
        q: "What is the customer's budget for monthly premium?",
        choices: ["Under 3,000 yen", "Under 5,000 yen", "Under 10,000 yen", "Under 20,000 yen"],
        answerIndex: 1,
        explanation: "A wants to keep the monthly premium within 5,000 yen (五千円以内)."
      },
      {
        q: "How much does the recommended plan pay per day if hospitalized?",
        choices: ["5,000 yen", "8,000 yen", "10,000 yen", "15,000 yen"],
        answerIndex: 2,
        explanation: "B says it pays 10,000 yen per day of hospitalization (一日一万円)."
      },
      {
        q: "What will A do before deciding?",
        choices: ["Sign immediately", "Compare other companies", "Consult with his wife", "Ask his parents"],
        answerIndex: 2,
        explanation: "A says he wants to go home and consult with his wife (妻と相談)."
      }
    ],
    estMinutes: 4,
    tags: ["insurance", "business"]
  },
  {
    id: "l-n4-54",
    title: "Discussing a Remote-Work Policy",
    level: "N4",
    context: "Two coworkers discuss the new remote-work policy",
    text: "A: 来月[らいげつ]から在宅[ざいたく]勤務[きんむ]が認[みと]められるそうですね。\nB: ええ、週[しゅう]に二日[ふつか]まで家[いえ]で働[はたら]けるみたいです。\nA: それは助[たす]かります。通勤[つうきん]時間[じかん]が長[なが]いので。\nB: 私[わたし]もそうです。でも、部長[ぶちょう]の許可[きょか]が必要[ひつよう]ですよね。\nA: はい、申[もう]し込[こ]み書[しょ]を出[だ]さなければなりません。\nB: いつまでに提出[ていしゅつ]しなければならないんですか。\nA: 来週[らいしゅう]の金曜日[きんようび]までだそうです。忘[わす]れないようにしましょう。",
    translation: "A: I heard remote work will be allowed starting next month.\nB: Yes, it seems we can work from home up to two days a week.\nA: That helps. My commute is long.\nB: Same here. But we need the department head's permission, right?\nA: Yes, we have to submit an application form.\nB: By when do we have to submit it?\nA: It seems by next Friday. Let's make sure we don't forget.",
    questions: [
      {
        q: "How many days per week can employees work from home?",
        choices: ["One day", "Two days", "Three days", "Five days"],
        answerIndex: 1,
        explanation: "B says up to two days a week (週に二日まで)."
      },
      {
        q: "What do employees need to submit?",
        choices: ["A report", "A resume", "An application form", "A receipt"],
        answerIndex: 2,
        explanation: "A says they must submit an application form (申し込み書)."
      },
      {
        q: "By when must the form be submitted?",
        choices: ["This Friday", "Next Friday", "Next Monday", "End of the month"],
        answerIndex: 1,
        explanation: "A says by next Friday (来週の金曜日まで)."
      },
      {
        q: "Whose permission is required for remote work?",
        choices: ["The CEO's", "The department head's", "The HR manager's", "No permission needed"],
        answerIndex: 1,
        explanation: "B confirms they need the department head's permission (部長の許可)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "office"]
  },
  {
    id: "l-n4-55",
    title: "At the Lawyer's Office",
    level: "N4",
    context: "A client consults a lawyer about a contract issue",
    text: "A: 先生[せんせい]、この契約書[けいやくしょ]について相談[そうだん]があります。\nB: どうしましたか。どの部分[ぶぶん]が気[き]になりますか。\nA: 三条[さんじょう]の内容[ないよう]が分[わ]かりにくいんです。\nB: ここですね。違約金[いやくきん]について書[か]いてあります。\nA: いくら払[はら]わなければならないんですか。\nB: 契約[けいやく]を破[やぶ]った場合[ばあい]、五十万[ごじゅうまん]円[えん]になります。\nA: それは高[たか]いですね。もう少[すこ]し安[やす]くできませんか。\nB: 相手[あいて]と交渉[こうしょう]してみましょう。",
    translation: "A: Lawyer, I have a consultation about this contract.\nB: What's wrong? Which part concerns you?\nA: The content of Article 3 is hard to understand.\nB: Here it is. It's about the penalty fee.\nA: How much do I have to pay?\nB: If the contract is broken, it becomes 500,000 yen.\nA: That's expensive. Can it be made a bit cheaper?\nB: Let's try negotiating with the other party.",
    questions: [
      {
        q: "What is the consultation about?",
        choices: ["A traffic accident", "A contract document", "A divorce", "A tax issue"],
        answerIndex: 1,
        explanation: "A is consulting about a contract document (契約書)."
      },
      {
        q: "Which article does A find unclear?",
        choices: ["Article 1", "Article 2", "Article 3", "Article 5"],
        answerIndex: 2,
        explanation: "A says the content of Article 3 is hard to understand (三条の内容)."
      },
      {
        q: "How much is the penalty fee?",
        choices: ["50,000 yen", "100,000 yen", "500,000 yen", "1,000,000 yen"],
        answerIndex: 2,
        explanation: "B says if the contract is broken, the penalty is 500,000 yen (五十万円)."
      },
      {
        q: "What does the lawyer suggest doing?",
        choices: ["Sign immediately", "Negotiate with the other party", "Cancel the contract", "Pay the fee now"],
        answerIndex: 1,
        explanation: "B suggests negotiating with the other party (相手と交渉)."
      }
    ],
    estMinutes: 4,
    tags: ["legal", "business"]
  },
  {
    id: "l-n4-56",
    title: "Planning a Product Launch",
    level: "N4",
    context: "Marketing team members plan a new product launch",
    text: "A: 新[あたら]しいスマートフォンの発売[はつばい]はいつにしましょうか。\nB: 十月[じゅうがつ]の中旬[ちゅうじゅん]がいいと思[おも]います。\nA: では、十日[とおか]に記者会見[きしゃかいけん]を開[ひら]きましょう。\nB: いいですね。広告[こうこく]はいつから始[はじ]めますか。\nA: 会見[かいけん]の一週間前[いっしゅうかんまえ]からお願[ねが]いします。\nB: 分[わ]かりました。予算[よさん]はどれくらいですか。\nA: 全部[ぜんぶ]で三百万[さんびゃくまん]円[えん]まで使[つか]えます。無駄[むだ]なところは省[はぶ]きましょう。",
    translation: "A: When should we launch the new smartphone?\nB: I think mid-October would be good.\nA: Then, let's hold a press conference on the 10th.\nB: Sounds good. When will we start advertising?\nA: Please start it one week before the conference.\nB: Understood. How much is the budget?\nA: We can use up to 3,000,000 yen in total. Let's cut any wasteful areas.",
    questions: [
      {
        q: "When do they plan to launch the smartphone?",
        choices: ["Early October", "Mid-October", "Late October", "Early November"],
        answerIndex: 1,
        explanation: "B suggests mid-October (十月の中旬)."
      },
      {
        q: "When will the press conference be held?",
        choices: ["October 5", "October 10", "October 15", "October 20"],
        answerIndex: 1,
        explanation: "A proposes holding the press conference on the 10th (十日)."
      },
      {
        q: "When will advertising begin?",
        choices: ["Same day as conference", "One week after conference", "One week before conference", "One month before conference"],
        answerIndex: 2,
        explanation: "A says advertising will start one week before the conference (一週間前から)."
      },
      {
        q: "What is the total advertising budget?",
        choices: ["1,000,000 yen", "2,000,000 yen", "3,000,000 yen", "5,000,000 yen"],
        answerIndex: 2,
        explanation: "A says they can use up to 3,000,000 yen in total (三百万円まで)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "marketing"]
  },
  {
    id: "l-n4-57",
    title: "At the Accountant's Office",
    level: "N4",
    context: "A small business owner asks about tax filing",
    text: "A: すみません、確定申告[かくていしんこく]について教[おし]えていただけますか。\nB: はい。個人事業主[こじんじぎょうぬし]ですね。売上[うりあげ]はいくらですか。\nA: 去年[きょねん]は八百万[はっぴゃくまん]円[えん]でした。\nB: では、経費[けいひ]を正[ただ]しく計算[けいさん]しなければなりません。\nA: 何[なに]が経費[けいひ]に含[ふく]まれますか。\nB: 交通費[こうつうひ]、通信費[つうしんひ]、交際費[こうさいひ]などです。領収書[りょうしゅうしょ]は保存[ほぞん]していますか。\nA: はい、全部[ぜんぶ]ファイルに入[い]れてあります。\nB: それでは来週[らいしゅう]までに整理[せいり]して持[も]ってきてください。",
    translation: "A: Excuse me, could you tell me about tax filing?\nB: Yes. You're a sole proprietor, right? How much are your sales?\nA: Last year it was 8,000,000 yen.\nB: Then, we have to calculate expenses correctly.\nA: What is included in expenses?\nB: Transportation, communication, and entertainment expenses, etc. Are you keeping the receipts?\nA: Yes, they're all in a file.\nB: Then please organize them and bring them by next week.",
    questions: [
      {
        q: "What is the client asking about?",
        choices: ["Opening a company", "Tax filing", "A loan", "Hiring staff"],
        answerIndex: 1,
        explanation: "A asks about tax filing (確定申告)."
      },
      {
        q: "What were the sales last year?",
        choices: ["5,000,000 yen", "6,000,000 yen", "8,000,000 yen", "10,000,000 yen"],
        answerIndex: 2,
        explanation: "A says last year's sales were 8,000,000 yen (八百万円)."
      },
      {
        q: "Which is NOT mentioned as an expense?",
        choices: ["Transportation", "Communication", "Entertainment", "Rent"],
        answerIndex: 3,
        explanation: "B lists transportation, communication, and entertainment expenses, but not rent."
      },
      {
        q: "When should A bring the organized receipts?",
        choices: ["Tomorrow", "This weekend", "By next week", "By the end of the month"],
        answerIndex: 2,
        explanation: "B asks A to organize and bring the receipts by next week (来週までに)."
      }
    ],
    estMinutes: 4,
    tags: ["tax", "business"]
  },
  {
    id: "l-n4-58",
    title: "Salary Negotiation",
    level: "N4",
    context: "An employee discusses a raise with their manager",
    text: "A: 部長[ぶちょう]、お時間[じかん]がありますか。給料[きゅうりょう]のことについてお話[はな]しがあります。\nB: いいよ。座[すわ]りなさい。どうしましたか。\nA: 入社[にゅうしゃ]して三年[さんねん]になりますが、今[いま]の給料[きゅうりょう]では生活[せいかつ]が少[すこ]し厳[きび]しいです。\nB: そうか。どれくらい上[あ]げたいんだ。\nA: 月[つき]に二万[にまん]円[えん]ほど上[あ]げていただけないでしょうか。\nB: 今[いま]の成績[せいせき]なら可能[かのう]だと思[おも]う。上[うえ]と相談[そうだん]して返事[へんじ]するよ。\nA: ありがとうございます。結果[けっか]はいつごろわかりますか。\nB: 来週[らいしゅう]の終[お]わりまでには連絡[れんらく]する。",
    translation: "A: Department head, do you have time? I'd like to talk about my salary.\nB: Sure. Have a seat. What's up?\nA: It's been three years since I joined, but my current salary makes life a bit tough.\nB: I see. How much do you want it raised?\nA: Could you raise it by about 20,000 yen per month?\nB: With your current performance, I think it's possible. I'll consult with upper management and reply.\nA: Thank you. When will I know the result?\nB: I'll contact you by the end of next week.",
    questions: [
      {
        q: "How long has A been with the company?",
        choices: ["One year", "Two years", "Three years", "Five years"],
        answerIndex: 2,
        explanation: "A says it's been three years since joining (入社して三年)."
      },
      {
        q: "How much of a raise does A request per month?",
        choices: ["10,000 yen", "15,000 yen", "20,000 yen", "30,000 yen"],
        answerIndex: 2,
        explanation: "A asks for about 20,000 yen per month (二万円ほど)."
      },
      {
        q: "What will the manager do next?",
        choices: ["Refuse immediately", "Approve immediately", "Consult with upper management", "Ask for a report"],
        answerIndex: 2,
        explanation: "B says he will consult with upper management and reply (上と相談して返事)."
      },
      {
        q: "By when will A get a reply?",
        choices: ["Today", "Tomorrow", "By the end of this week", "By the end of next week"],
        answerIndex: 3,
        explanation: "B says he will contact A by the end of next week (来週の終わりまで)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "salary"]
  },
  {
    id: "l-n4-59",
    title: "At the Employment Agency",
    level: "N4",
    context: "A job seeker asks for help at a Hello Work office",
    text: "A: すみません、仕事[しごと]を探[さが]しているのですが、助[たす]けていただけますか。\nB: はい。まず、こちらの申[もう]し込[こ]み用紙[ようし]に記入[きにゅう]してください。\nA: 前[まえ]の仕事[しごと]は工場[こうじょう]で働[はたら]いていました。何[なに]か関連[かんれん]する仕事[しごと]はありますか。\nB: ええ、今[いま]、製造業[せいぞうぎょう]の求人[きゅうじん]がいくつかあります。\nA: 給料[きゅうりょう]はどれくらいですか。\nB: 月[つき]二十万[にじゅうまん]円[えん]から二十五万[にじゅうごまん]円[えん]くらいです。\nA: では、応募[おうぼ]してみたいです。面接[めんせつ]はいつになりますか。\nB: 来週[らいしゅう]の火曜日[かようび]に予約[よやく]を取[と]りましょう。",
    translation: "A: Excuse me, I'm looking for work. Could you help me?\nB: Yes. First, please fill out this application form.\nA: My previous job was working in a factory. Are there any related jobs?\nB: Yes, we currently have several openings in manufacturing.\nA: How much is the salary?\nB: From about 200,000 to 250,000 yen per month.\nA: Then, I'd like to apply. When will the interview be?\nB: Let's book it for next Tuesday.",
    questions: [
      {
        q: "What does A have to fill out first?",
        choices: ["A survey", "An application form", "A contract", "A resume template"],
        answerIndex: 1,
        explanation: "B asks A to fill out an application form (申し込み用紙)."
      },
      {
        q: "What was A's previous job?",
        choices: ["At a restaurant", "At a factory", "At a shop", "At an office"],
        answerIndex: 1,
        explanation: "A worked in a factory before (工場で働いていた)."
      },
      {
        q: "What is the salary range for the available jobs?",
        choices: ["150,000 to 200,000 yen", "200,000 to 250,000 yen", "250,000 to 300,000 yen", "300,000 to 350,000 yen"],
        answerIndex: 1,
        explanation: "B says the salary is from 200,000 to 250,000 yen per month (二十万から二十五万円)."
      },
      {
        q: "When will the interview be booked?",
        choices: ["Next Monday", "Next Tuesday", "Next Wednesday", "Next Friday"],
        answerIndex: 1,
        explanation: "B suggests booking the interview for next Tuesday (来週の火曜日)."
      }
    ],
    estMinutes: 4,
    tags: ["job", "business"]
  },
  {
    id: "l-n4-60",
    title: "Planning a Business Trip Abroad",
    level: "N4",
    context: "Two colleagues plan an overseas business trip",
    text: "A: 来月[らいげつ]、ベトナムに出張[しゅっちょう]に行[い]くことになりました。\nB: そうですか。何日間[なんにちかん]行[い]くんですか。\nA: 五日間[いつかかん]の予定[よてい]です。パスポートは更新[こうしん]しなければなりません。\nB: それは大変[たいへん]ですね。ビザは必要[ひつよう]ですか。\nA: いいえ、十五日間[じゅうごにちかん]以内[いない]なら要[い]りません。\nB: じゃ、ホテルの予約[よやく]を手配[てはい]しましょうか。\nA: ありがとう。会議[かいぎ]の後[あと]、一日[いちにち]観光[かんこう]できればと思[おも]っています。",
    translation: "A: I've been assigned to go on a business trip to Vietnam next month.\nB: I see. For how many days will you go?\nA: Five days are planned. I have to renew my passport.\nB: That's tough. Do you need a visa?\nA: No, it's not required if it's within 15 days.\nB: Then, shall I arrange a hotel reservation?\nA: Thanks. I hope to have one day for sightseeing after the meeting.",
    questions: [
      {
        q: "Where is A going on a business trip?",
        choices: ["Vietnam", "Thailand", "Korea", "Indonesia"],
        answerIndex: 0,
        explanation: "A says he is going to Vietnam (ベトナムに出張)."
      },
      {
        q: "How many days will the trip last?",
        choices: ["Three days", "Four days", "Five days", "Seven days"],
        answerIndex: 2,
        explanation: "A says it's planned for five days (五日間)."
      },
      {
        q: "What does A have to renew?",
        choices: ["His driver's license", "His passport", "His contract", "His visa"],
        answerIndex: 1,
        explanation: "A says he has to renew his passport (パスポートを更新)."
      },
      {
        q: "What does A hope to do after the meeting?",
        choices: ["Rest at the hotel", "Visit another company", "Go sightseeing for a day", "Return immediately"],
        answerIndex: 2,
        explanation: "A hopes to have one day for sightseeing after the meeting (一日観光)."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "business"]
  }
];
