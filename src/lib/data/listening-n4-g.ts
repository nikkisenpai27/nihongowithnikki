import type { ListeningData } from "@/lib/types";

export const listeningN4G: ListeningData[] = [
  {
    id: "l-n4-61",
    title: "At the Passport Office",
    level: "N4",
    context: "A traveler applies for a new passport at a government office",
    text: "A: すみません、新[あたら]しいパスポートを申[もう]し込[こ]みたいんですが。\nB: はい。まず、この用紙[ようし]に記入[きにゅう]してください。\nA: 写真[しゃしん]は持[も]ってきました。\nB: ありがとうございます。身分[みぶん]証明書[しょうめいしょ]も見[み]せていただけますか。\nA: はい、これです。どのくらい時間[じかん]がかかりますか。\nB: 普通[ふつう]は一週間[いっしゅうかん]くらいかかりますが、急[いそ]ぐ場合は三日間[みっかかん]でできます。\nA: じゃ、急[いそ]ぎでお願[ねが]いします。\nB: 分[わ]かりました。追加料金[ついかりょうきん]がかかりますが、よろしいですか。\nA: はい、構[かま]いません。\nB: では、来週[らいしゅう]の金曜日[きんようび]に取[と]りに来[き]てください。",
    translation: "A: Excuse me, I'd like to apply for a new passport.\nB: Sure. First, please fill out this form.\nA: I brought my photo.\nB: Thank you. Could you also show me an ID?\nA: Yes, here it is. How long does it take?\nB: It usually takes about a week, but if you're in a hurry, we can do it in three days.\nA: Then please make it urgent.\nB: Understood. There's an additional fee, is that okay?\nA: Yes, that's fine.\nB: Then please come pick it up next Friday.",
    questions: [
      {
        q: "What does the applicant want to do?",
        choices: ["Renew a visa", "Apply for a passport", "Report a lost ID", "Change a photo"],
        answerIndex: 1,
        explanation: "A says they want to apply for a new passport (パスポートを申し込みたい)."
      },
      {
        q: "How long does the urgent process take?",
        choices: ["One day", "Three days", "One week", "Two weeks"],
        answerIndex: 1,
        explanation: "B explains the urgent option takes three days (三日間でできます)."
      },
      {
        q: "When should the applicant come to pick up the passport?",
        choices: ["This Friday", "Next Monday", "Next Friday", "In two weeks"],
        answerIndex: 2,
        explanation: "B tells A to come pick it up next Friday (来週の金曜日に取りに来てください)."
      },
      {
        q: "What extra thing is required for the urgent option?",
        choices: ["Another photo", "A second ID", "An additional fee", "A signature"],
        answerIndex: 2,
        explanation: "B mentions an additional fee (追加料金) is required for the urgent process."
      }
    ],
    estMinutes: 4,
    tags: ["official", "travel"]
  },
  {
    id: "l-n4-62",
    title: "Discussing a Quality-Control Issue",
    level: "N4",
    context: "Two colleagues discuss a defect found in a recent product batch",
    text: "A: 山田[やまだ]さん、昨日[きのう]の製品[せいひん]に問題[もんだい]がありました。\nB: どういう問題[もんだい]ですか。\nA: 十個[じゅっこ]のサンプルを検査[けんさ]したら、三個[さんこ]が不良品[ふりょうひん]でした。\nB: それは大変[たいへん]ですね。原因[げんいん]は何[なに]だと思[おも]いますか。\nA: たぶん、組立[くみた]て工程[こうてい]でミスがあったんです。\nB: じゃ、現場[げんば]を確認[かくにん]してみましょう。\nA: はい、私[わたし]も今[いま]から行[い]くところです。\nB: あとで報告書[ほうこくしょ]を出[だ]してください。\nA: 分[わ]かりました。今日[きょう]中[じゅう]に提出[ていしゅつ]します。",
    translation: "A: Yamada-san, there was a problem with yesterday's products.\nB: What kind of problem?\nA: When I inspected ten samples, three were defective.\nB: That's serious. What do you think the cause is?\nA: Probably a mistake happened in the assembly process.\nB: Then let's check the factory floor.\nA: Yes, I'm about to head there now.\nB: Please submit a report afterwards.\nA: Understood. I'll submit it by the end of today.",
    questions: [
      {
        q: "How many of the ten samples were defective?",
        choices: ["One", "Two", "Three", "Five"],
        answerIndex: 2,
        explanation: "A found three defective items out of ten samples (三個が不良品)."
      },
      {
        q: "Where does A think the problem occurred?",
        choices: ["In shipping", "In the assembly process", "In packaging", "In design"],
        answerIndex: 1,
        explanation: "A suspects a mistake in the assembly process (組立工程)."
      },
      {
        q: "What does B ask A to do afterwards?",
        choices: ["Call the client", "Reinspect everything", "Submit a report", "Fix the machine"],
        answerIndex: 2,
        explanation: "B asks A to submit a report (報告書を出してください)."
      },
      {
        q: "By when will A submit the report?",
        choices: ["By noon", "By today", "By tomorrow", "By Friday"],
        answerIndex: 1,
        explanation: "A says they will submit it by the end of today (今日中に提出します)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "quality"]
  },
  {
    id: "l-n4-63",
    title: "At Customs",
    level: "N4",
    context: "A traveler is questioned by a customs officer at the airport",
    text: "A: パスポートを見[み]せてください。\nB: はい、これです。\nA: 旅[たび]の目的[もくてき]は何[なに]ですか。\nB: 観光[かんこう]です。友達[ともだち]に会[あ]いに行[い]きました。\nA: 荷物[にもつ]の中[なか]に申告[しんこく]するものはありますか。\nB: お土産[みやげ]を少[すこ]し買[か]いましたが、全部[ぜんぶ]で五千円[ごせんえん]くらいです。\nA: じゃ、税関[ぜいかん]の枠[わく]を越[こ]えていません。\nB: よかったです。\nA: ここにサインしてください。これで終[お]わりです。\nB: ありがとうございました。",
    translation: "A: Please show me your passport.\nB: Yes, here it is.\nA: What's the purpose of your trip?\nB: Sightseeing. I went to see a friend.\nA: Is there anything to declare in your luggage?\nB: I bought some souvenirs, but they total about 5,000 yen.\nA: Then it doesn't exceed the customs limit.\nB: That's good.\nA: Please sign here. That's it.\nB: Thank you very much.",
    questions: [
      {
        q: "What is the purpose of B's trip?",
        choices: ["Business", "Sightseeing", "Study", "Work"],
        answerIndex: 1,
        explanation: "B says the trip is for sightseeing (観光)."
      },
      {
        q: "How much did the souvenirs cost in total?",
        choices: ["1,000 yen", "3,000 yen", "5,000 yen", "10,000 yen"],
        answerIndex: 2,
        explanation: "B says the souvenirs cost about 5,000 yen (五千円くらい)."
      },
      {
        q: "What does the officer ask B to do at the end?",
        choices: ["Open the bags", "Sign a paper", "Pay a tax", "Show a receipt"],
        answerIndex: 1,
        explanation: "A asks B to sign here (ここにサインしてください)."
      },
      {
        q: "Why is B relieved?",
        choices: ["The bags were light", "The limit wasn't exceeded", "The friend arrived", "The flight was on time"],
        answerIndex: 1,
        explanation: "A confirms the souvenirs don't exceed the customs limit, so B is relieved."
      }
    ],
    estMinutes: 3,
    tags: ["travel", "official"]
  },
  {
    id: "l-n4-64",
    title: "Discussing the Supply Chain",
    level: "N4",
    context: "Two managers talk about a delay in raw materials",
    text: "A: 今月[こんげつ]の原料[げんりょう]がまだ届[とど]いていません。\nB: そうですか。いつ注文[ちゅうもん]しましたか。\nA: 先週[せんしゅう]の月曜日[げつようび]です。三日[みっか]で届[とど]くはずでした。\nB: 供給[きょうきゅう]業者[ぎょうしゃ]に連絡[れんらく]しましたか。\nA: はい、今朝[けさ]電話[でんわ]しましたが、出[で]ませんでした。\nB: じゃ、別[べつ]の業者[ぎょうしゃ]を探[さが]してみましょう。\nA: でも、すぐに見付[みつ]かるかどうか分[わ]かりません。\nB: 来週[らいしゅう]の生産[せいさん]に間[ま]に合[あ]うように頑張[がんば]りましょう。",
    translation: "A: This month's raw materials still haven't arrived.\nB: I see. When did you place the order?\nA: Last Monday. They were supposed to arrive in three days.\nB: Did you contact the supplier?\nA: Yes, I called this morning, but no one answered.\nB: Then let's look for another supplier.\nA: But I'm not sure we'll find one right away.\nB: Let's work hard to make it in time for next week's production.",
    questions: [
      {
        q: "What hasn't arrived yet?",
        choices: ["Products", "Raw materials", "Tools", "Documents"],
        answerIndex: 1,
        explanation: "A says this month's raw materials haven't arrived (原料がまだ届いていません)."
      },
      {
        q: "When was the order placed?",
        choices: ["Last Friday", "Last Monday", "This Monday", "Today"],
        answerIndex: 1,
        explanation: "A placed the order last Monday (先週の月曜日)."
      },
      {
        q: "What happened when A called the supplier this morning?",
        choices: ["They answered", "No one answered", "They promised delivery", "They refused"],
        answerIndex: 1,
        explanation: "A called this morning but no one answered (出ませんでした)."
      },
      {
        q: "What does B suggest doing next?",
        choices: ["Wait one more week", "Cancel production", "Look for another supplier", "Send an email"],
        answerIndex: 2,
        explanation: "B suggests looking for another supplier (別の業者を探してみましょう)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "logistics"]
  },
  {
    id: "l-n4-65",
    title: "Hiring a Moving Company",
    level: "N4",
    context: "A customer calls a moving company to get an estimate",
    text: "A: 来月[らいげつ]の初[はじ]めに引[ひ]っ越[こ]しをしたいんですが。\nB: ありがとうございます。どこからどこへ引[ひ]っ越[こ]しますか。\nA: 東京[とうきょう]から横浜[よこはま]へです。\nB: 荷物[にもつ]はどのくらいありますか。\nA: 家具[かぐ]が少[すこ]しあって、段[だん]ボールが十個[じゅっこ]くらいです。\nB: では、来週[らいしゅう]の火曜日[かようび]に見積[みつ]もりに行[い]きましょうか。\nA: はい、お願[ねが]いします。午後[ごご]の方[ほう]がいいです。\nB: 分[わ]かりました。午後[ごご]三時[さんじ]はいかがですか。\nA: ちょうどいいです。\nB: じゃ、その日[ひ]に伺[うかが]います。",
    translation: "A: I'd like to move at the beginning of next month.\nB: Thank you. Where are you moving from and to?\nA: From Tokyo to Yokohama.\nB: How much stuff do you have?\nA: Some furniture and about ten cardboard boxes.\nB: Then shall we come for an estimate next Tuesday?\nA: Yes, please. Afternoon would be better.\nB: Understood. How about 3 p.m.?\nA: That's perfect.\nB: Then we'll visit you that day.",
    questions: [
      {
        q: "Where is the customer moving from and to?",
        choices: ["Tokyo to Osaka", "Tokyo to Yokohama", "Yokohama to Tokyo", "Osaka to Tokyo"],
        answerIndex: 1,
        explanation: "A is moving from Tokyo to Yokohama (東京から横浜へ)."
      },
      {
        q: "Roughly how many cardboard boxes does A have?",
        choices: ["Five", "Eight", "Ten", "Fifteen"],
        answerIndex: 2,
        explanation: "A mentions about ten cardboard boxes (段ボールが十個くらい)."
      },
      {
        q: "When will the moving company visit for the estimate?",
        choices: ["Next Monday afternoon", "Next Tuesday afternoon", "Next Wednesday morning", "This Friday afternoon"],
        answerIndex: 1,
        explanation: "They agree on next Tuesday at 3 p.m. (来週の火曜日の午後三時)."
      },
      {
        q: "What time did B suggest for the visit?",
        choices: ["1 p.m.", "2 p.m.", "3 p.m.", "4 p.m."],
        answerIndex: 2,
        explanation: "B suggested 3 p.m. (午後三時)."
      }
    ],
    estMinutes: 4,
    tags: ["moving", "service"]
  },
  {
    id: "l-n4-66",
    title: "Discussing a Training Program",
    level: "N4",
    context: "A manager explains a new employee training program",
    text: "A: 新[あたら]しい研修[けんしゅう]プログラムについて話[はな]したいんですが。\nB: はい。いつ始[はじ]まりますか。\nA: 来月[らいげつ]の十五日[じゅうごにち]からで、二週間[にしゅうかん]続[つづ]きます。\nB: 内容[ないよう]は何[なに]ですか。\nA: 基本的[きほんてき]なマナーから、パソコンの操作[そうさ]まで習[なら]います。\nB: 全部[ぜんぶ]の新入社員[しんにゅうしゃいん]が参加[さんか]するんですか。\nA: はい、必修[ひっしゅう]です。欠席[けっせき]は認[みと]められません。\nB: 分[わ]かりました。場所[ばしょ]はどこですか。\nA: 本社[ほんしゃ]の三階[さんがい]の会議室[かいぎしつ]です。",
    translation: "A: I'd like to talk about the new training program.\nB: Sure. When does it start?\nA: From the 15th of next month, and it lasts two weeks.\nB: What's the content?\nA: From basic manners to computer operation.\nB: Do all new employees participate?\nA: Yes, it's mandatory. Absences aren't allowed.\nB: Understood. Where is it held?\nA: In the conference room on the third floor of the head office.",
    questions: [
      {
        q: "When does the training start?",
        choices: ["The 5th of next month", "The 15th of this month", "The 15th of next month", "The 25th of next month"],
        answerIndex: 2,
        explanation: "A says it starts on the 15th of next month (来月の十五日から)."
      },
      {
        q: "How long does the program last?",
        choices: ["One week", "Two weeks", "Three weeks", "One month"],
        answerIndex: 1,
        explanation: "A explains it continues for two weeks (二週間続きます)."
      },
      {
        q: "Who must participate in the training?",
        choices: ["All managers", "All new employees", "Volunteers only", "Part-time staff only"],
        answerIndex: 1,
        explanation: "A confirms it's mandatory for all new employees (全部の新入社員が参加する・必修)."
      },
      {
        q: "Where is the training held?",
        choices: ["A rented hall", "Head office, 3rd floor conference room", "Branch office, 2nd floor", "An outside center"],
        answerIndex: 1,
        explanation: "A says it's held in the third-floor conference room of the head office (本社の三階の会議室)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "training"]
  },
  {
    id: "l-n4-67",
    title: "With Property Management",
    level: "N4",
    context: "A tenant contacts property management about a leak",
    text: "A: すみません、部屋[へや]の天井[てんじょう]から水[みず]が漏[も]れています。\nB: それは困[こま]りましたね。どの部屋[へや]ですか。\nA: 三〇二[さんまるに]号室[ごうしつ]です。昨日[きのう]の夜[よる]から始[はじ]まりました。\nB: 上[うえ]の部屋[へや]からかもしれないので、すぐに確認[かくにん]します。\nA: お願[ねが]いします。家具[かぐ]が濡[ぬ]れてしまいました。\nB: 修理[しゅうり]の業者[ぎょうしゃ]を今日[きょう]中[じゅう]に手配[てはい]します。\nA: いつ直[なお]せるか分[わ]かりますか。\nB: 明日[あした]の午前[ごぜん]には直[なお]る予定[よてい]です。\nA: ありがとうございます。",
    translation: "A: Excuse me, water is leaking from the ceiling of the room.\nB: That's troubling. Which room?\nA: Room 302. It started last night.\nB: It might be from the room above, so I'll check right away.\nA: Please. My furniture got wet.\nB: I'll arrange a repair company by the end of today.\nA: Do you know when it can be fixed?\nB: It's expected to be fixed by tomorrow morning.\nA: Thank you.",
    questions: [
      {
        q: "What problem does A report?",
        choices: ["A broken window", "A noisy neighbor", "A water leak from the ceiling", "A power outage"],
        answerIndex: 2,
        explanation: "A says water is leaking from the ceiling (天井から水が漏れています)."
      },
      {
        q: "Which room has the problem?",
        choices: ["Room 203", "Room 302", "Room 320", "Room 402"],
        answerIndex: 1,
        explanation: "A identifies the room as 302 (三〇二号室)."
      },
      {
        q: "When did the leak start?",
        choices: ["This morning", "Last night", "Two days ago", "Last week"],
        answerIndex: 1,
        explanation: "A says the leak started last night (昨日の夜から始まりました)."
      },
      {
        q: "When is the repair expected to be finished?",
        choices: ["Tonight", "Tomorrow morning", "Tomorrow afternoon", "The day after tomorrow"],
        answerIndex: 1,
        explanation: "B says it's expected to be fixed by tomorrow morning (明日の午前には直る予定)."
      }
    ],
    estMinutes: 4,
    tags: ["housing", "repair"]
  },
  {
    id: "l-n4-68",
    title: "Handling a Customer Complaint",
    level: "N4",
    context: "A store clerk apologizes to a customer who bought a defective item",
    text: "A: この時計[とけい]を昨日[きのう]買[か]ったんですが、動[うご]きません。\nB: そうですか。申[もう]し訳[わけ]ありません。領収書[りょうしゅうしょ]はありますか。\nA: はい、これです。\nB: ありがとうございます。すぐに新[あたら]しいものと交換[こうかん]できます。\nA: そうしてもらえると助[たす]かります。\nB: 在庫[ざいこ]を確認[かくにん]しますので、少[すこ]しお待[ま]ちください。\nA: いくらかかりますか。\nB: いいえ、無料[むりょう]です。ご迷惑[めいわく]をおかけしてすみません。\nA: 分[わ]かりました。待[ま]っています。\nB: お待[ま]たせしました。こちらが新[あたら]しい商品[しょうひん]です。",
    translation: "A: I bought this watch yesterday, but it doesn't work.\nB: I see. I'm very sorry. Do you have the receipt?\nA: Yes, here it is.\nB: Thank you. We can exchange it for a new one right away.\nA: That would help.\nB: Please wait a moment while I check the stock.\nA: Will it cost anything?\nB: No, it's free. Sorry for the inconvenience.\nA: Understood. I'll wait.\nB: Sorry to keep you waiting. Here is the new product.",
    questions: [
      {
        q: "What did the customer buy yesterday?",
        choices: ["A clock", "A watch", "A camera", "A radio"],
        answerIndex: 1,
        explanation: "A bought a watch (時計) that doesn't work."
      },
      {
        q: "What does the clerk offer to do?",
        choices: ["Refund the money", "Exchange for a new one", "Repair it for a fee", "Send it to the maker"],
        answerIndex: 1,
        explanation: "B offers to exchange it for a new one right away (すぐに新しいものと交換できます)."
      },
      {
        q: "How much does the exchange cost?",
        choices: ["500 yen", "1,000 yen", "Half price", "Free"],
        answerIndex: 3,
        explanation: "B says the exchange is free (無料です)."
      },
      {
        q: "What did the clerk check before completing the exchange?",
        choices: ["The warranty", "The stock", "The customer's ID", "The manager's approval"],
        answerIndex: 1,
        explanation: "B checks the stock (在庫を確認します) before completing the exchange."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "service"]
  },
  {
    id: "l-n4-69",
    title: "At the Utility Company",
    level: "N4",
    context: "A new resident sets up electricity and gas service",
    text: "A: 引[ひ]っ越[こ]しの届[とど]け出[で]をしたいんですが。\nB: ありがとうございます。新[あたら]しい住所[じゅうしょ]を教[おし]えてください。\nA: 横浜[よこはま]市[し]青葉[あおば]区[く]の一[いち]二[に]三[さん]番[ばん]です。\nB: 電気[でんき]とガス、両方[りょうほう]お開[ひら]きしますか。\nA: はい、お願[ねが]いします。\nB: いつから使[つか]えるようにしますか。\nA: 来週[らいしゅう]の水曜日[すいようび]からにしてください。\nB: 分[わ]かりました。当日[とうじつ]に立[た]ち会[あ]いは必要[ひつよう]ですか。\nA: はい、午前[ごぜん]に来[き]てもらえると助[たす]かります。\nB: じゃ、午前[ごぜん]の時間帯[じかんたい]で手配[てはい]しておきます。",
    translation: "A: I'd like to register my move.\nB: Thank you. Please tell me your new address.\nA: 123, Aoba-ku, Yokohama City.\nB: Shall we open both electricity and gas?\nA: Yes, please.\nB: When would you like service to start?\nA: From next Wednesday, please.\nB: Understood. Do you need someone present on the day?\nA: Yes, it would help if they come in the morning.\nB: Then I'll arrange the morning time slot.",
    questions: [
      {
        q: "What is the customer setting up?",
        choices: ["Internet and phone", "Electricity and gas", "Water and gas", "Electricity only"],
        answerIndex: 1,
        explanation: "B asks about opening both electricity and gas, and A agrees (電気とガス、両方)."
      },
      {
        q: "Where is the customer's new address?",
        choices: ["Aoba-ku, Yokohama", "Chuo-ku, Tokyo", "Higashi-ku, Osaka", "Naka-ku, Yokohama"],
        answerIndex: 0,
        explanation: "A gives the address as 123, Aoba-ku, Yokohama City (横浜市青葉区)."
      },
      {
        q: "When should the service start?",
        choices: ["This Wednesday", "Next Wednesday", "Next Friday", "Next Monday"],
        answerIndex: 1,
        explanation: "A requests the service to start next Wednesday (来週の水曜日から)."
      },
      {
        q: "When does A want the on-site visit?",
        choices: ["In the morning", "In the afternoon", "In the evening", "At night"],
        answerIndex: 0,
        explanation: "A prefers a morning visit (午前に来てもらえると助かります)."
      }
    ],
    estMinutes: 4,
    tags: ["housing", "service"]
  },
  {
    id: "l-n4-70",
    title: "Discussing Market Research",
    level: "N4",
    context: "Two colleagues review results from a recent customer survey",
    text: "A: 先週[せんしゅう]の市場[しじょう]調査[ちょうさ]の結果[けっか]が出[で]ました。\nB: そうですか。どんなことが分[わ]かりましたか。\nA: 若[わか]い人[ひと]は新[あたら]しいデザインを好[この]むことが分[わ]かりました。\nB: 年上[としうえ]の人[ひと]はどうでしたか。\nA: 便利[べんり]さと価格[かかく]を重視[じゅうし]していました。\nB: じゃ、ターゲットごとに別[べつ]の製品[せいひん]を作[つく]った方[ほう]がいいですね。\nA: そうですね。来月[らいげつ]の会議[かいぎ]で提案[ていあん]しましょう。\nB: 賛成[さんせい]です。データをもう少し詳[くわ]しく分析[ぶんせき]してみます。\nA: お願[ねが]いします。",
    translation: "A: The results of last week's market research are out.\nB: I see. What did you find?\nA: We found that young people prefer new designs.\nB: What about older people?\nA: They valued convenience and price.\nB: Then we should make separate products for each target group.\nA: Right. Let's propose it at next month's meeting.\nB: I agree. I'll analyze the data in more detail.\nA: Please do.",
    questions: [
      {
        q: "What did young people prefer according to the research?",
        choices: ["Low prices", "New designs", "Classic styles", "Bigger sizes"],
        answerIndex: 1,
        explanation: "A says young people prefer new designs (若い人は新しいデザインを好む)."
      },
      {
        q: "What did older people value?",
        choices: ["Design and brand", "Convenience and price", "Color and size", "Quality and warranty"],
        answerIndex: 1,
        explanation: "A says older people valued convenience and price (便利さと価格を重視)."
      },
      {
        q: "What does B suggest doing?",
        choices: ["Lower the price", "Make separate products for each target", "Focus on young people only", "Run the survey again"],
        answerIndex: 1,
        explanation: "B suggests making separate products for each target group (ターゲットごとに別の製品を作った方がいい)."
      },
      {
        q: "What will B do with the data?",
        choices: ["Discard it", "Share it publicly", "Analyze it in more detail", "Send it to the client"],
        answerIndex: 2,
        explanation: "B says they will analyze the data in more detail (データをもう少し詳しく分析してみます)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "research"]
  }
];
