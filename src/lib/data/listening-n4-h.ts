import type { ListeningData } from "@/lib/types";

export const listeningN4H: ListeningData[] = [
  {
    id: "l-n4-71",
    title: "At the Telecom Shop",
    level: "N4",
    context: "A customer visits a mobile phone shop to change their plan",
    text: "A: すみません、携帯[けいたい]のプランを変[か]えたいんですが。\nB: いらっしゃいませ。今[いま]のプランに何[なに]か不満[ふまん]はありますか。\nA: データが足[た]りなくて、毎月[まいつき]追加料金[ついかりょうきん]を払[はら]っています。\nB: でしたら、この新[あたら]しいプランはいかがですか。データ無制限[むせいげん]で月額[げつがく]四千五百円[よんせんごひゃくえん]です。\nA: 少[すこ]し高[たか]いかもしれませんが、便利[べんり]ですね。\nB: はい。契約[けいやく]を変[か]える場合[ばあい]、本人確認[ほんにんかくにん]が必要[ひつよう]です。\nA: 運転[うんてん]免許証[めんきょしょう]で大丈夫[だいじょうぶ]ですか。\nB: はい、結構[けっこう]です。来月[らいげつ]の一日[ついたち]から新[あたら]しいプランが使[つか]えます。\nA: じゃ、お願[ねが]いします。",
    translation: "A: Excuse me, I'd like to change my mobile plan.\nB: Welcome. Is there anything you're unhappy about with your current plan?\nA: I don't have enough data and I pay extra charges every month.\nB: In that case, how about this new plan? It's unlimited data for 4,500 yen per month.\nA: It might be a little expensive, but it's convenient.\nB: Yes. To change the contract, ID verification is required.\nA: Is a driver's license okay?\nB: Yes, that's fine. The new plan will be available from the first of next month.\nA: Then please go ahead.",
    questions: [
      {
        q: "Why does A want to change plans?",
        choices: ["Calls are too expensive", "Data runs out each month", "The phone is broken", "The signal is weak"],
        answerIndex: 1,
        explanation: "A says data is not enough and pays extra charges every month (データが足りなくて、毎月追加料金を払っています)."
      },
      {
        q: "How much is the new unlimited plan per month?",
        choices: ["3,500 yen", "4,000 yen", "4,500 yen", "5,000 yen"],
        answerIndex: 2,
        explanation: "B says the unlimited plan is 4,500 yen per month (月額四千五百円)."
      },
      {
        q: "What does A provide for verification?",
        choices: ["A passport", "A student ID", "A driver's license", "A health insurance card"],
        answerIndex: 2,
        explanation: "A asks if a driver's license is okay and B confirms it is (運転免許証で大丈夫ですか)."
      },
      {
        q: "When will the new plan start?",
        choices: ["Immediately", "Tomorrow", "The first of next month", "In two weeks"],
        answerIndex: 2,
        explanation: "B says the new plan will be usable from the first of next month (来月の一日から)."
      }
    ],
    estMinutes: 4,
    tags: ["shopping", "phone"]
  },
  {
    id: "l-n4-72",
    title: "A Performance Review",
    level: "N4",
    context: "A manager gives feedback to an employee during a performance review",
    text: "A: 田中[たなか]さん、今日[きょう]は半期[はんき]の評価[ひょうか]のお話[はなし]をします。\nB: はい、よろしくお願[ねが]いします。\nA: プロジェクトの完遂[かんすい]は素晴[すば]らしかったです。特[とく]に報告書[ほうこくしょ]の品質[ひんしつ]が良[よ]かったですよ。\nB: ありがとうございます。頑張[がんば]りました。\nA: 一方[いっぽう]で、チームとの連携[れんけい]に課題[かだい]があります。もう少[すこ]し意見[いけん]を聞[き]いた方[ほう]がいいでしょう。\nB: 反省[はんせい]しています。今後[こんご]は気[き]をつけます。\nA: 来期[らいき]はリーダーを任[まか]せるかもしれません。自信[じしん]はありますか。\nB: はい、責任[せきにん]を持[も]って取[と]り組[く]みます。\nA: 期待[きたい]しています。不明点[ふめいてん]があれば、いつでも相談[そうだん]してください。",
    translation: "A: Tanaka-san, today I'll talk about your half-year evaluation.\nB: Yes, thank you.\nA: Completing the project was excellent. The quality of your report was especially good.\nB: Thank you. I worked hard.\nA: On the other hand, there's an issue with teamwork with your team. You should listen to opinions a bit more.\nB: I'm reflecting on that. I'll be careful from now on.\nA: Next term, we might assign you as leader. Do you have confidence?\nB: Yes, I'll tackle it with responsibility.\nA: I'm looking forward to it. If anything is unclear, please consult me anytime.",
    questions: [
      {
        q: "What did A praise about Tanaka?",
        choices: ["Sales numbers", "The report's quality", "Punctuality", "Language skills"],
        answerIndex: 1,
        explanation: "A says the quality of the report was especially good (報告書の品質が良かった)."
      },
      {
        q: "What is the area Tanaka needs to improve?",
        choices: ["Punctuality", "Sales", "Teamwork", "Coding speed"],
        answerIndex: 2,
        explanation: "A says there's an issue with teamwork (チームとの連携に課題があります)."
      },
      {
        q: "What might happen next term?",
        choices: ["A transfer", "A raise", "A leadership role", "A new project"],
        answerIndex: 2,
        explanation: "A says they might assign Tanaka as leader next term (来期はリーダーを任せるかもしれません)."
      },
      {
        q: "What does A offer at the end?",
        choices: ["A bonus", "To consult anytime", "A vacation", "A new office"],
        answerIndex: 1,
        explanation: "A says if anything is unclear, Tanaka can consult anytime (不明点があれば、いつでも相談してください)."
      }
    ],
    estMinutes: 5,
    tags: ["business", "workplace"]
  },
  {
    id: "l-n4-73",
    title: "At the Optometrist",
    level: "N4",
    context: "A patient has an eye examination at an optometrist's clinic",
    text: "A: 先生[せんせい]、最近[さいきん]目[め]が疲[つか]れやすくて、画面[がめん]が見[み]えにくいんです。\nB: じゃ、検査[けんさ]を始[はじ]めましょう。まずこの機械[きかい]で視力[しりょく]を測[はか]ります。\nA: はい。\nB: 右[みぎ]の目[め]が零点八[れいてんてんはち]、左[ひだり]が零点五[れいてんてんご]ですね。少[すこ]し近視[きんし]が進[すす]んでいます。\nA: スマホを使[つか]いすぎているかもしれません。\nB: その可能性[かのうせい]が高[たか]いです。メガネを作[つく]った方[ほう]がいいでしょう。\nA: 運転[うんてん]する時[とき]だけ使[つか]うのはどうですか。\nB: それでも構[かま]いません。ただ、長時間[ちょうじかん]読[よ]む時[とき]も疲[つか]れやすいですよ。\nA: 分[わ]かりました。このフレームにします。",
    translation: "A: Doctor, lately my eyes tire easily and it's hard to see the screen.\nB: Then let's start the exam. First I'll measure your vision with this machine.\nA: Okay.\nB: Your right eye is 0.8 and your left is 0.5. Your nearsightedness has progressed a little.\nA: I might be using my smartphone too much.\nB: That possibility is high. It would be better to get glasses.\nA: How about using them only when driving?\nB: That's fine too. However, your eyes will tire easily when reading for long periods.\nA: Understood. I'll go with this frame.",
    questions: [
      {
        q: "What is A's main complaint?",
        choices: ["Headaches", "Eye fatigue", "Blurry hearing", "Back pain"],
        answerIndex: 1,
        explanation: "A says their eyes tire easily and screens are hard to see (目が疲れやすくて)."
      },
      {
        q: "What are A's vision scores?",
        choices: ["Both 1.0", "Right 0.8, left 0.5", "Both 0.5", "Right 1.2, left 0.8"],
        answerIndex: 1,
        explanation: "B reports the right eye is 0.8 and the left is 0.5 (右の目が零点八、左が零点五)."
      },
      {
        q: "What does A suspect is the cause?",
        choices: ["Too much TV", "Stress", "Too much smartphone use", "Lack of sleep"],
        answerIndex: 2,
        explanation: "A says they might be using their smartphone too much (スマホを使いすぎているかもしれません)."
      },
      {
        q: "When does A plan to use the glasses?",
        choices: ["Only at work", "Only when driving", "Only at night", "Only outdoors"],
        answerIndex: 1,
        explanation: "A asks how about using them only when driving (運転する時だけ使うのはどうですか)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "medical"]
  },
  {
    id: "l-n4-74",
    title: "Discussing a Sponsorship",
    level: "N4",
    context: "Two coworkers discuss whether to sponsor a local event",
    text: "A: 鈴木[すずき]さん、来月[らいげつ]の市民[しみん]祭[まつ]りのスポンサーについて話[はな]したいです。\nB: はい。提案[ていあん]はありますか。\nA: 二十万円[にじゅうまんえん]を出[だ]せば、広告[こうこく]がパンフレットに載[の]ります。\nB: それは魅力的[みりょくてき]ですが、予算[よさん]が厳[きび]しいかもしれません。\nA: もし断[ことわ]ったら、会社[かいしゃ]の印象[いんしょう]が悪[わる]くなるかもしれませんよ。\nB: 確[たし]かに。じゃ、十万円[じゅうまんえん]なら大丈夫[だいじょうぶ]でしょうか。\nA: 十万円[じゅうまんえん]だと、ロゴだけになりますが。\nB: それで交渉[こうしょう]してみましょう。結果[けっか]は来週[らいしゅう]までに連絡[れんらく]します。",
    translation: "A: Suzuki-san, I'd like to talk about sponsoring next month's citizen festival.\nB: Sure. Do you have a proposal?\nA: If we provide 200,000 yen, our advertisement will appear in the pamphlet.\nB: That's attractive, but the budget might be tight.\nA: If we refuse, the company's impression might worsen.\nB: True. Then would 100,000 yen be okay?\nA: With 100,000 yen, it'll only be the logo.\nB: Let's negotiate with that. I'll contact you with the result by next week.",
    questions: [
      {
        q: "What event are they discussing?",
        choices: ["A trade show", "A citizen festival", "A sports tournament", "A charity auction"],
        answerIndex: 1,
        explanation: "A mentions next month's citizen festival (市民祭り)."
      },
      {
        q: "What happens if they sponsor 200,000 yen?",
        choices: ["A TV ad", "A pamphlet advertisement", "A booth space", "Free tickets"],
        answerIndex: 1,
        explanation: "A says for 200,000 yen their ad will appear in the pamphlet (パンフレットに載ります)."
      },
      {
        q: "What is B concerned about?",
        choices: ["The date", "The budget", "The audience", "The weather"],
        answerIndex: 1,
        explanation: "B says the budget might be tight (予算が厳しいかもしれません)."
      },
      {
        q: "What does 100,000 yen get them?",
        choices: ["A full-page ad", "Only the logo", "Two booths", "Free catering"],
        answerIndex: 1,
        explanation: "A explains that with 100,000 yen it will only be the logo (十万円だと、ロゴだけになります)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "event"]
  },
  {
    id: "l-n4-75",
    title: "At the Veterinarian",
    level: "N4",
    context: "An owner brings their dog to a vet clinic for a checkup",
    text: "A: 先生[せんせい]、うちの犬[いぬ]が昨日[きのう]からご飯[はん]を食[た]べません。\nB: いつからですか。他[ほか]に症状[しょうじょう]はありますか。\nA: 二日前[ふつかまえ]から下痢[げり]をしていて、元気[げんき]がありません。\nB: 少[すこ]し熱[ねつ]もありますね。注射[ちゅうしゃ]を打[う]った方[ほう]がいいでしょう。\nA: 薬[くすり]だけではだめですか。\nB: 状態[じょうたい]が良[よ]くないので、注射[ちゅうしゃ]の方[ほう]が効[き]きやすいです。\nA: 分[わ]かりました。お願[ねが]いします。\nB: 今晩[こんばん]は様子[ようす]を見[み]て、明日[あした]も食[た]べなければまた来[き]てください。",
    translation: "A: Doctor, my dog hasn't eaten since yesterday.\nB: Since when? Are there other symptoms?\nA: He's had diarrhea since two days ago and has no energy.\nB: He also has a slight fever. It would be better to give him an injection.\nA: Is medicine alone not enough?\nB: His condition isn't good, so an injection will be more effective.\nA: Understood. Please do it.\nB: Watch his condition tonight, and if he doesn't eat tomorrow either, please come again.",
    questions: [
      {
        q: "Why did A bring the dog to the vet?",
        choices: ["For vaccines", "For a haircut", "Not eating and diarrhea", "A broken leg"],
        answerIndex: 2,
        explanation: "A says the dog hasn't eaten since yesterday and has had diarrhea since two days ago (ご飯を食べません / 下痢をしていて)."
      },
      {
        q: "What does the vet find during the exam?",
        choices: ["A fever", "A rash", "A broken bone", "An infection"],
        answerIndex: 0,
        explanation: "B says the dog also has a slight fever (少し熱もあります)."
      },
      {
        q: "Why does the vet prefer an injection?",
        choices: ["It's cheaper", "It's more effective given the condition", "The dog won't take pills", "The owner requests it"],
        answerIndex: 1,
        explanation: "B says the condition isn't good so an injection will be more effective (状態が良くないので、注射の方が効きやすいです)."
      },
      {
        q: "When should A come back?",
        choices: ["Tonight", "If the dog still doesn't eat tomorrow", "In one week", "Only if there's a fever"],
        answerIndex: 1,
        explanation: "B says if he doesn't eat tomorrow, please come again (明日も食べなければまた来てください)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "pets"]
  },
  {
    id: "l-n4-76",
    title: "A Volunteer Trip",
    level: "N4",
    context: "Two students discuss joining a volunteer trip during break",
    text: "A: 由美[ゆみ]、春休[はるやす]みにボランティアに行[い]かない?\nB: どこへ行[い]くの?\nA: 北海道[ほっかいどう]で海岸[かいがん]の清掃[せいそう]をするんです。五日間[いつかかん]です。\nB: いいですね。でも、宿泊代[しゅくはくだい]は高[たか]くないですか。\nA: 大丈夫[だいじょうぶ]。費用[ひよう]は半分[はんぶん]が補助[ほじょ]されます。\nB: じゃ、私[わたし]も参加[さんか]したいです。申[もう]し込[こ]みはいつまでですか。\nA: 来週[らいしゅう]の水曜日[すいようび]までです。早[はや]くした方[ほう]がいいですよ。\nB: 分[わ]かりました。今[いま]すぐ書[か]きます。持[も]っていく物[もの]はありますか。\nA: 作業[さぎょう]着[ぎ]と軍手[ぐんて]があれば大丈夫[だいじょうぶ]です。",
    translation: "A: Yumi, want to go on a volunteer trip during spring break?\nB: Where to?\nA: We'll clean the coast in Hokkaido. It's five days.\nB: Sounds nice. But isn't lodging expensive?\nA: It's fine. Half the cost is subsidized.\nB: Then I'd like to join too. Until when is registration?\nA: Until next Wednesday. You'd better do it early.\nB: Understood. I'll write it right now. Is there anything to bring?\nA: Work clothes and work gloves are enough.",
    questions: [
      {
        q: "Where will the volunteer trip take place?",
        choices: ["Okinawa", "Hokkaido", "Kyoto", "Tokyo"],
        answerIndex: 1,
        explanation: "A says the trip is for cleaning the coast in Hokkaido (北海道で海岸の清掃)."
      },
      {
        q: "How long is the trip?",
        choices: ["Three days", "Five days", "A week", "Ten days"],
        answerIndex: 1,
        explanation: "A says the trip is five days (五日間です)."
      },
      {
        q: "How much of the cost is subsidized?",
        choices: ["None", "A quarter", "Half", "All"],
        answerIndex: 2,
        explanation: "A says half the cost is subsidized (費用は半分が補助されます)."
      },
      {
        q: "What should B bring?",
        choices: ["A swimsuit", "Work clothes and gloves", "A sleeping bag", "A camera"],
        answerIndex: 1,
        explanation: "A says work clothes and work gloves are enough (作業着と軍手があれば大丈夫)."
      }
    ],
    estMinutes: 4,
    tags: ["travel", "volunteer"]
  },
  {
    id: "l-n4-77",
    title: "At the Driving Test Center",
    level: "N4",
    context: "A person takes a driving license test at the test center",
    text: "A: すみません、運転[うんてん]免許[めんきょ]の実技[じゅつぎ]試験[しけん]を受[う]けました。\nB: お疲[つか]れ様[さま]でした。結果[けっか]は一時間[いちじかん]後[ご]に出[で]ます。\nA: 不合格[ふごうかく]だった場合[ばあい]、もう一度[いちど]受[う]けられますか。\nB: はい。ただし、次[つぎ]の受験[じゅけん]は十日後[とおかご]以降[いこう]になります。\nA: 分[わ]かりました。合格[ごうかく]すれば、免許証[めんきょしょう]はいつ届[とど]きますか。\nB: 約[やく]二週間後[にしゅうかんご]に郵送[ゆうそう]されます。\nA: 写真[しゃしん]はもう提出[ていしゅつ]しましたが、確認[かくにん]願[ねが]えますか。\nB: はい、こちらに届[とど]いています。安心[あんしん]してください。",
    translation: "A: Excuse me, I took the practical driving test.\nB: Thank you for your effort. The result will come out in one hour.\nA: If I fail, can I take it again?\nB: Yes. However, the next attempt will be ten or more days later.\nA: Understood. If I pass, when will the license arrive?\nB: It will be mailed in about two weeks.\nA: I already submitted a photo, but could you confirm?\nB: Yes, it has arrived here. Don't worry.",
    questions: [
      {
        q: "What kind of test did A take?",
        choices: ["A written test", "A practical driving test", "An eye test", "A language test"],
        answerIndex: 1,
        explanation: "A says they took the practical driving test (運転免許の実技試験)."
      },
      {
        q: "When will the result come out?",
        choices: ["Immediately", "In thirty minutes", "In one hour", "Tomorrow"],
        answerIndex: 2,
        explanation: "B says the result will come out in one hour (一時間後に出ます)."
      },
      {
        q: "If A fails, when can they take it again?",
        choices: ["The next day", "Three days later", "Ten or more days later", "A month later"],
        answerIndex: 2,
        explanation: "B says the next attempt is ten or more days later (十日後以降になります)."
      },
      {
        q: "When will the license arrive if A passes?",
        choices: ["In three days", "In one week", "In about two weeks", "In one month"],
        answerIndex: 2,
        explanation: "B says it will be mailed in about two weeks (約二週間後に郵送されます)."
      }
    ],
    estMinutes: 4,
    tags: ["official", "driving"]
  },
  {
    id: "l-n4-78",
    title: "A University Application",
    level: "N4",
    context: "A high school student asks a teacher about university application documents",
    text: "A: 先生[せんせい]、大学[だいがく]の出願[しゅつがん]について質問[しつもん]があります。\nB: いいですよ。どの大学[だいがく]ですか。\nA: 東京[とうきょう]の私立[しりつ]大学[だいがく]を二校[にこう]受[う]けます。\nB: 志願[しがん]理由[りゆう]書[しょ]はもう書[か]きましたか。\nA: 下書[したが]きは終[お]わりましたが、自信[じしん]がありません。見[み]ていただけますか。\nB: もちろんです。明日[あした]までにメールで送[おく]ってください。\nA: 推薦状[すいせんじょう]は誰[だれ]に頼[たの]めばいいでしょうか。\nB: 担任[たんにん]の先生[せんせい]に頼[たの]むのが普通[ふつう]です。\nA: 分[わ]かりました。期限[きげん]までに全部[ぜんぶ]出[だ]せるように頑張[がんば]ります。",
    translation: "A: Teacher, I have a question about university application.\nB: Sure. Which university?\nA: I'll take two private universities in Tokyo.\nB: Have you written your statement of purpose yet?\nA: I finished a draft, but I'm not confident. Could you look at it?\nB: Of course. Please send it by email by tomorrow.\nA: Who should I ask for a recommendation letter?\nB: It's common to ask your homeroom teacher.\nA: Understood. I'll work hard to submit everything by the deadline.",
    questions: [
      {
        q: "How many universities is A applying to?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 1,
        explanation: "A says they will take two private universities in Tokyo (私立大学を二校受けます)."
      },
      {
        q: "What has A finished regarding the statement of purpose?",
        choices: ["Nothing yet", "A draft", "The final version", "Only the title"],
        answerIndex: 1,
        explanation: "A says they finished a draft but lack confidence (下書きは終わりましたが、自信がありません)."
      },
      {
        q: "By when should A email the draft?",
        choices: ["Today", "By tomorrow", "By Friday", "By next week"],
        answerIndex: 1,
        explanation: "B asks A to send it by email by tomorrow (明日までにメールで送ってください)."
      },
      {
        q: "Who should A ask for a recommendation letter?",
        choices: ["A friend", "A parent", "The homeroom teacher", "A university professor"],
        answerIndex: 2,
        explanation: "B says it's common to ask the homeroom teacher (担任の先生に頼むのが普通です)."
      }
    ],
    estMinutes: 4,
    tags: ["education", "school"]
  },
  {
    id: "l-n4-79",
    title: "At the Recycling Center",
    level: "N4",
    context: "A resident drops off items at a recycling center",
    text: "A: すみません、古[ふる]いテレビと冷蔵庫[れいぞうこ]を捨[す]てたいんですが。\nB: こちらでは家電[かでん]四品目[よんひんもく]の回収[かいしゅう]をしています。\nA: 料金[りょうきん]はいくらですか。\nB: テレビは三千円[さんぜんえん]、冷蔵庫[れいぞうこ]は五千円[ごせんえん]です。\nA: 少[すこ]し高[たか]いですね。もし自分[じぶん]で持[も]って行[い]けば安[やす]くなりますか。\nB: いいえ、同[おな]じです。ただ、お金[かね]を払[はら]えば即日[そくじつ]に引[ひ]き取[と]ります。\nA: じゃ、お願[ねが]いします。領収書[りょうしゅうしょ]をください。\nB: はい。この用紙[ようし]に住所[じゅうしょ]と名前[なまえ]を書[か]いてください。",
    translation: "A: Excuse me, I'd like to dispose of an old TV and refrigerator.\nB: We collect the four major appliance categories here.\nA: How much is the fee?\nB: The TV is 3,000 yen and the refrigerator is 5,000 yen.\nA: That's a bit expensive. If I bring it myself, will it be cheaper?\nB: No, it's the same. However, if you pay, we'll pick it up the same day.\nA: Then please do it. I'd like a receipt.\nB: Sure. Please write your address and name on this form.",
    questions: [
      {
        q: "What items does A want to dispose of?",
        choices: ["A TV and a fridge", "A TV and a washing machine", "A fridge and an AC", "Two TVs"],
        answerIndex: 0,
        explanation: "A says they want to dispose of an old TV and a refrigerator (古いテレビと冷蔵庫)."
      },
      {
        q: "How much is the fee for the TV?",
        choices: ["1,000 yen", "2,000 yen", "3,000 yen", "5,000 yen"],
        answerIndex: 2,
        explanation: "B says the TV is 3,000 yen (テレビは三千円)."
      },
      {
        q: "What does A ask about bringing the items themselves?",
        choices: ["If it's faster", "If it's cheaper", "If it's required", "If it's allowed"],
        answerIndex: 1,
        explanation: "A asks if bringing them personally would be cheaper (自分で持って行けば安くなりますか)."
      },
      {
        q: "What must A fill out at the end?",
        choices: ["A survey", "Address and name on a form", "A payment slip", "An appointment"],
        answerIndex: 1,
        explanation: "B asks A to write address and name on the form (住所と名前を書いてください)."
      }
    ],
    estMinutes: 3,
    tags: ["daily", "services"]
  },
  {
    id: "l-n4-80",
    title: "A Cultural Exchange",
    level: "N4",
    context: "Two students talk about an upcoming cultural exchange event",
    text: "A: マリアさん、来週[らいしゅう]の文化[ぶんか]交流[こうりゅう]会[かい]に出[で]ますか。\nB: 出[で]ます。何[なに]か持[も]って行[い]った方[ほう]がいいですか。\nA: 母国[ぼこく]の料理[りょうり]があると盛[も]り上[あ]がりますよ。\nB: じゃ、タコスを作[つく]って持[も]っていきます。辛[から]いのが好[す]きですか。\nA: 大好[だいす]きです。でも、たくさん作[つく]ると大変[たいへん]じゃないですか。\nB: 友達[ともだち]が手伝[てつだ]ってくれるので、大丈夫[だいじょうぶ]です。\nA: すごい。じゃ、私[わたし]は日本[にほん]のお菓子[かし]を持[も]っていきます。\nB: 楽[たの]しみにしています。会場[かいじょう]はどこでしたか。\nA: 大学[だいがく]の二階[にかい]の多目的[たもくてき]ホールです。六時[ろくじ]に集合[しゅうごう]しましょう。",
    translation: "A: Maria, will you attend next week's cultural exchange gathering?\nB: I will. Should I bring something?\nA: It liven up the event if you bring a dish from your country.\nB: Then I'll make tacos and bring them. Do you like spicy food?\nA: I love it. But isn't it a lot of work to make a lot?\nB: My friends will help, so it's fine.\nA: Wonderful. Then I'll bring Japanese sweets.\nB: I'm looking forward to it. Where was the venue again?\nA: It's the multipurpose hall on the second floor of the university. Let's meet at six.",
    questions: [
      {
        q: "What event is happening next week?",
        choices: ["A sports festival", "A cultural exchange", "A graduation", "A job fair"],
        answerIndex: 1,
        explanation: "A asks about next week's cultural exchange gathering (文化交流会)."
      },
      {
        q: "What does Maria decide to bring?",
        choices: ["Sushi", "Curry", "Tacos", "Cake"],
        answerIndex: 2,
        explanation: "Maria says she'll make tacos and bring them (タコスを作って持っていきます)."
      },
      {
        q: "How does Maria handle the workload?",
        choices: ["She buys it", "Her friends help", "She makes less", "She cancels"],
        answerIndex: 1,
        explanation: "Maria says her friends will help, so it's fine (友達が手伝ってくれるので、大丈夫です)."
      },
      {
        q: "Where and when will they meet?",
        choices: ["The hall on the second floor at six", "The cafeteria at five", "The library at seven", "The park at six"],
        answerIndex: 0,
        explanation: "A says the venue is the multipurpose hall on the second floor and they should meet at six (大学の二階の多目的ホール / 六時に集合しましょう)."
      }
    ],
    estMinutes: 4,
    tags: ["school", "culture"]
  }
];
