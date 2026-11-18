import type { ListeningData } from "@/lib/types";

export const listeningN3B: ListeningData[] = [
  {
    id: "l-n3-21",
    title: "Discussing a Marketing Plan",
    level: "N3",
    context: "Two colleagues plan a new advertising campaign",
    text: "A: 来月[らいげつ]から始[はじ]める新[あたら]しいキャンペーンについて、意見[いけん]を聞[き]かせてください。\nB: ターゲットを二十代[にじゅうだい]から三十代[さんじゅうだい]に絞[しぼ]ったらどうでしょうか。\nA: なるほど。SNSの広告[こうこく]を中心[ちゅうしん]に考[かんが]えます。\nB: 予算[よさん]はどのくらい割[わ]り当[あ]てられますか。\nA: せいぜい五十万円[ごじゅうまんえん]ぐらいだと思[おも]います。\nB: それなら、インフルエンサーとタイアップするのが効果的[こうかてき]でしょう。\nA: 良[よ]い考[かんが]えですね。来週[らいしゅう]までに企画書[きかくしょ]をまとめましょう。",
    translation: "A: Please share your opinions about the new campaign starting next month.\nB: How about narrowing the target to people in their twenties and thirties?\nA: I see. We will focus mainly on social media ads.\nB: How much budget can be allocated?\nA: I think at most about five hundred thousand yen.\nB: In that case, partnering with influencers would be effective.\nA: That's a good idea. Let's put together a proposal by next week.",
    questions: [
      {
        q: "Who is the campaign's target audience?",
        choices: ["Teenagers", "People in their 20s to 30s", "Seniors", "Foreign tourists"],
        answerIndex: 1,
        explanation: "B suggests narrowing the target to people in their 20s to 30s (二十代から三十代)."
      },
      {
        q: "How does A plan to focus the advertising?",
        choices: ["On TV commercials", "In newspapers", "Centered on SNS ads", "On the radio"],
        answerIndex: 2,
        explanation: "A says they will focus mainly on SNS ads (SNSの広告を中心に)."
      },
      {
        q: "About how much budget does A mention?",
        choices: ["One hundred thousand yen", "Three hundred thousand yen", "Five hundred thousand yen", "One million yen"],
        answerIndex: 2,
        explanation: "A says at most about five hundred thousand yen (五十万円ぐらい)."
      },
      {
        q: "What does B recommend doing?",
        choices: ["Hiring a designer", "Partnering with influencers", "Running TV ads", "Cutting the budget"],
        answerIndex: 1,
        explanation: "B recommends partnering with influencers (インフルエンサーとタイアップする)."
      }
    ],
    estMinutes: 4,
    tags: ["business", "marketing"]
  },
  {
    id: "l-n3-22",
    title: "At the Post Office",
    level: "N3",
    context: "A customer sends a parcel overseas",
    text: "A: すみません、この小包[こづつみ]をフランスへ送[おく]りたいんですが。\nB: はい。航空便[こうくうびん]と船便[ふなびん]のどちらになさいますか。\nA: 早[はや]く届[とど]けたいので、航空便[こうくうびん]でお願[ねが]いします。\nB: かしこまりました。中身[なかみ]は何[なに]ですか。\nA: 本[ほん]が三冊[さんさつ]と小[ちい]さいお土産[みやげ]です。\nB: 二十[にじゅう]キロ以内[いない]ですので、三千円[さんぜんえん]になります。\nA: 書留[かきとめ]にもできますか。\nB: はい、別途[べっと]五百円[ごひゃくえん]追加[ついか]すれば可能[かのう]です。",
    translation: "A: Excuse me, I'd like to send this parcel to France.\nB: Sure. Will you choose airmail or surface mail?\nA: I want it to arrive quickly, so airmail please.\nB: Understood. What are the contents?\nA: Three books and a small souvenir.\nB: It's within twenty kilograms, so it will be three thousand yen.\nA: Can I also register it?\nB: Yes, it's possible for an additional five hundred yen.",
    questions: [
      {
        q: "Where is the parcel being sent?",
        choices: ["To America", "To France", "To China", "To Italy"],
        answerIndex: 1,
        explanation: "A wants to send the parcel to France (フランスへ送りたい)."
      },
      {
        q: "Which mail service does A choose?",
        choices: ["Surface mail", "Airmail", "Express mail", "Registered mail"],
        answerIndex: 1,
        explanation: "A chooses airmail because they want it to arrive quickly (航空便でお願いします)."
      },
      {
        q: "What are the contents of the parcel?",
        choices: ["Clothes and food", "Three books and a small souvenir", "Five books", "Only souvenirs"],
        answerIndex: 1,
        explanation: "A says the contents are three books and a small souvenir (本が三冊と小さいお土産)."
      },
      {
        q: "How much extra is needed for registration?",
        choices: ["Three hundred yen", "Five hundred yen", "One thousand yen", "Free"],
        answerIndex: 1,
        explanation: "B says registration is possible for an additional five hundred yen (五百円追加すれば)."
      }
    ],
    estMinutes: 4,
    tags: ["post office", "mail"]
  },
  {
    id: "l-n3-23",
    title: "Talking About a Sports Event",
    level: "N3",
    context: "Friends discuss attending a town sports festival",
    text: "A: 来週[らいしゅう]の日曜日[にちようび]、町[まち]の体育祭[たいいくさい]に行[い]かない？\nB: いいですね。何[なに]が見[み]られますか。\nA: マラソンや綱引[つなひ]きなどがありますよ。\nB: 子供[こども]も参加[さんか]できますか。\nA: ええ、家族[かぞく]向[む]けの種目[しゅもく]も用意[ようい]されています。\nB: じゃあ、家族[かぞく]みんなで出[で]ましょう。何時[なんじ]から始[はじ]まりますか。\nA: 午前[ごぜん]九時[くじ]です。早[はや]めに来[き]た方[ほう]がいいですよ。",
    translation: "A: Shall we go to the town sports festival next Sunday?\nB: Sounds good. What can we watch?\nA: There are marathons, tug-of-war, and so on.\nB: Can children participate too?\nA: Yes, events aimed at families are also prepared.\nB: Then let's all go as a family. What time does it start?\nA: Nine in the morning. It's better to come a bit early.",
    questions: [
      {
        q: "When is the sports festival?",
        choices: ["This Sunday", "Next Sunday", "Next Saturday", "This Saturday"],
        answerIndex: 1,
        explanation: "A mentions the sports festival is next Sunday (来週の日曜日)."
      },
      {
        q: "What events are mentioned?",
        choices: ["Soccer and baseball", "Marathons and tug-of-war", "Swimming and running", "Tennis and basketball"],
        answerIndex: 1,
        explanation: "A says there are marathons and tug-of-war (マラソンや綱引き)."
      },
      {
        q: "Who can participate according to A?",
        choices: ["Only adults", "Only children", "Families, including children", "Only athletes"],
        answerIndex: 2,
        explanation: "A confirms family-oriented events are prepared, so children can join too (家族向けの種目も用意)."
      },
      {
        q: "What time does the event start?",
        choices: ["Eight in the morning", "Nine in the morning", "Ten in the morning", "One in the afternoon"],
        answerIndex: 1,
        explanation: "A says it starts at nine in the morning (午前九時)."
      }
    ],
    estMinutes: 4,
    tags: ["sports", "community"]
  },
  {
    id: "l-n3-24",
    title: "At the Library",
    level: "N3",
    context: "A visitor borrows a book at the library counter",
    text: "A: すみません、この本[ほん]を借[か]りたいんですが。\nB: 会員証[かいいんしょう]はお持[も]ちですか。\nA: あ、忘[わす]れてしまいました。免許証[めんきょしょう]でも大丈夫[だいじょうぶ]ですか。\nB: はい、身分[みぶん]確認[かくにん]できれば構[かま]いません。\nA: 借[か]りられる期間[きかん]はどのくらいですか。\nB: 二週間[にしゅうかん]です。延長[えんちょう]は一回[いっかい]だけ可能[かのう]です。\nA: 分[わ]かりました。では、お願[ねが]いします。",
    translation: "A: Excuse me, I'd like to borrow this book.\nB: Do you have your membership card?\nA: Ah, I forgot it. Is a driver's license OK?\nB: Yes, as long as we can confirm your identity, it's fine.\nA: How long can I borrow it for?\nB: Two weeks. Extension is possible only once.\nA: Understood. Then please.",
    questions: [
      {
        q: "What did A forget to bring?",
        choices: ["The book", "The membership card", "A driver's license", "Money"],
        answerIndex: 1,
        explanation: "A forgot the membership card (会員証を忘れてしまった)."
      },
      {
        q: "What does A show instead?",
        choices: ["A passport", "A student card", "A driver's license", "A health insurance card"],
        answerIndex: 2,
        explanation: "A asks whether a driver's license is OK (免許証でも大丈夫ですか)."
      },
      {
        q: "How long can the book be borrowed?",
        choices: ["One week", "Two weeks", "Three weeks", "One month"],
        answerIndex: 1,
        explanation: "B says the borrowing period is two weeks (二週間)."
      },
      {
        q: "How many times can the loan be extended?",
        choices: ["Not at all", "Once", "Twice", "Three times"],
        answerIndex: 1,
        explanation: "B says extension is possible only once (延長は一回だけ可能)."
      }
    ],
    estMinutes: 3,
    tags: ["library", "books"]
  },
  {
    id: "l-n3-25",
    title: "A Conversation About Online Learning",
    level: "N3",
    context: "Two friends talk about studying a language online",
    text: "A: 最近[さいきん]、オンラインで語学[ごがく]を勉強[べんきょう]し始[はじ]めたんです。\nB: そうですか。どのくらい続[つづ]いていますか。\nA: もう三[さん]か月[げつ]になります。毎日[まいにち]三十分[さんじゅっぷん]だけです。\nB: 効果[こうか]はありましたか。\nA: ええ、少[すこ]しずつ聞[き]き取[と]れるようになりました。\nB: 私[わたし]も試[ため]してみたいです。教材[きょうざい]は高[たか]かったですか。\nA: いえ、無料[むりょう]のアプリが便利[べんり]でしたよ。",
    translation: "A: I recently started studying a language online.\nB: Is that so. How long has it been?\nA: It's been three months now. Just thirty minutes every day.\nB: Has there been any effect?\nA: Yes, I've gradually come to understand what I hear.\nB: I'd like to try it too. Were the materials expensive?\nA: No, a free app was convenient.",
    questions: [
      {
        q: "What did A recently start?",
        choices: ["Studying a language online", "Working online", "Teaching online", "Reading news online"],
        answerIndex: 0,
        explanation: "A says they recently started studying a language online (語学を勉強し始めた)."
      },
      {
        q: "How long does A study every day?",
        choices: ["Ten minutes", "Twenty minutes", "Thirty minutes", "An hour"],
        answerIndex: 2,
        explanation: "A studies for thirty minutes every day (毎日三十分だけ)."
      },
      {
        q: "What effect has A noticed?",
        choices: ["Speaking fluently", "Reading faster", "Gradually understanding spoken language", "Writing better"],
        answerIndex: 2,
        explanation: "A says they've gradually come to understand what they hear (聞き取れるようになった)."
      },
      {
        q: "What material does A recommend?",
        choices: ["A paid textbook", "A free app", "An online tutor", "A video course"],
        answerIndex: 1,
        explanation: "A says a free app was convenient (無料のアプリが便利)."
      }
    ],
    estMinutes: 4,
    tags: ["learning", "technology"]
  },
  {
    id: "l-n3-26",
    title: "At the Bus Terminal",
    level: "N3",
    context: "A traveler asks about a long-distance bus",
    text: "A: すみません、京都[きょうと]行[ゆ]きのバスはどこから出[で]ますか。\nB: 三番[さんばん]のりばです。出発[しゅっぱつ]は十五時[じゅうごじ]です。\nA: まだ時間[じかん]がありますが、乗[の]る前[まえ]に切符[きっぷ]を買[か]わないといけませんか。\nB: いいえ、バスの中[なか]で現金[げんきん]かカードで支払[しはら]えます。\nA: 京都[きょうと]まではどのくらいかかりますか。\nB: 順調[じゅんちょう]なら、二時間[にじかん]半[はん]ぐらいです。\nA: どうもありがとうございます。",
    translation: "A: Excuse me, where does the bus to Kyoto leave from?\nB: From platform three. Departure is at three o'clock.\nA: I still have time, but do I have to buy a ticket before boarding?\nB: No, you can pay with cash or card on the bus.\nA: How long does it take to Kyoto?\nB: If things go smoothly, about two and a half hours.\nA: Thank you very much.",
    questions: [
      {
        q: "Where does the Kyoto bus leave from?",
        choices: ["Platform one", "Platform two", "Platform three", "Platform four"],
        answerIndex: 2,
        explanation: "B says the bus leaves from platform three (三番のりば)."
      },
      {
        q: "When does the bus depart?",
        choices: ["Two o'clock", "Three o'clock", "Four o'clock", "Five o'clock"],
        answerIndex: 1,
        explanation: "B says departure is at three o'clock (十五時)."
      },
      {
        q: "How can the passenger pay?",
        choices: ["Only cash before boarding", "Only a prepaid ticket", "Cash or card on the bus", "By mobile app only"],
        answerIndex: 2,
        explanation: "B says payment can be made with cash or card on the bus (現金かカードで支払える)."
      },
      {
        q: "How long is the trip to Kyoto?",
        choices: ["About one hour", "About two hours", "About two and a half hours", "About three hours"],
        answerIndex: 2,
        explanation: "B says it takes about two and a half hours if things go smoothly (二時間半ぐらい)."
      }
    ],
    estMinutes: 4,
    tags: ["transport", "travel"]
  },
  {
    id: "l-n3-27",
    title: "Discussing a Community Garden",
    level: "N3",
    context: "Neighbors plan to turn an empty lot into a garden",
    text: "A: 近所[きんじょ]の空地[あきち]をみんなで畑[はたけ]にする計画[けいかく]があるんです。\nB: それは素晴[すば]らしいですね。いつ始[はじ]まるんですか。\nA: 来月[らいげつ]の初[はじ]めに、まず土[つち]を耕[たがや]すところから始[はじ]めます。\nB: 私[わたし]も手伝[てつだ]いたいんですが、経験[けいけん]がなくても大丈夫[だいじょうぶ]ですか。\nA: もちろんです。初心者[しょしんしゃ]歓迎[かんげい]です。\nB: 野菜[やさい]は何[なに]を育[そだ]てる予定[よてい]ですか。\nA: トマトや大根[だいこん]など、育[そだ]てやすいものにするつもりです。",
    translation: "A: There's a plan to turn the nearby empty lot into a field together.\nB: That's wonderful. When does it start?\nA: At the beginning of next month, we'll start by tilling the soil.\nB: I'd like to help too, but is it OK even without experience?\nA: Of course. Beginners are welcome.\nB: What vegetables do you plan to grow?\nA: We intend to grow easy ones like tomatoes and daikon.",
    questions: [
      {
        q: "What is the plan for the empty lot?",
        choices: ["Build a park", "Turn it into a field", "Make a parking lot", "Construct a house"],
        answerIndex: 1,
        explanation: "A says there's a plan to turn the empty lot into a field (畑にする計画)."
      },
      {
        q: "When will the project begin?",
        choices: ["This week", "This weekend", "The beginning of next month", "Next year"],
        answerIndex: 2,
        explanation: "A says it starts at the beginning of next month (来月の初め)."
      },
      {
        q: "What does A say about beginners?",
        choices: ["They cannot join", "They are welcome", "They must pay a fee", "They need training first"],
        answerIndex: 1,
        explanation: "A says beginners are welcome (初心者歓迎)."
      },
      {
        q: "What vegetables will they grow?",
        choices: ["Tomatoes and daikon", "Carrots and onions", "Cabbages and lettuce", "Potatoes and corn"],
        answerIndex: 0,
        explanation: "A plans to grow easy ones like tomatoes and daikon (トマトや大根)."
      }
    ],
    estMinutes: 4,
    tags: ["community", "gardening"]
  },
  {
    id: "l-n3-28",
    title: "Talking About Mental Health",
    level: "N3",
    context: "A friend offers support to someone stressed by work",
    text: "A: 最近[さいきん]、仕事[しごと]のストレスでよく眠[ねむ]れないんです。\nB: それは大変[たいへん]ですね。誰[だれ]かに相談[そうだん]した方[ほう]がいいですよ。\nA: そうですね。でも、誰[だれ]に話[はな]せばいいか分[わ]からなくて。\nB: 会社[かいしゃ]のカウンセラーに話[はな]してみたらどうですか。\nA: それも考[かんが]えます。まずは少[すこ]し休[やす]もうと思[おも]っています。\nB: 無理[むり]をしないでくださいね。健康[けんこう]が一番[いちばん]ですから。",
    translation: "A: Recently, I can't sleep well due to work stress.\nB: That's tough. You'd better talk to someone.\nA: You're right. But I don't know who to talk to.\nB: How about trying to talk to the company counselor?\nA: I'll consider that too. First, I'm thinking of resting a little.\nB: Please don't push yourself. Health comes first.",
    questions: [
      {
        q: "What problem is A experiencing?",
        choices: ["A headache", "Trouble sleeping due to stress", "A stomachache", "A sore throat"],
        answerIndex: 1,
        explanation: "A says they can't sleep well due to work stress (ストレスでよく眠れない)."
      },
      {
        q: "Who does B suggest A talk to?",
        choices: ["A family member", "A friend", "The company counselor", "A doctor"],
        answerIndex: 2,
        explanation: "B suggests talking to the company counselor (会社のカウンセラー)."
      },
      {
        q: "What does A plan to do first?",
        choices: ["See a doctor", "Rest a little", "Quit the job", "Take medicine"],
        answerIndex: 1,
        explanation: "A says they are thinking of resting a little first (まずは少し休もう)."
      },
      {
        q: "What is B's final advice?",
        choices: ["Work harder", "Don't push yourself", "Take a long trip", "Change jobs"],
        answerIndex: 1,
        explanation: "B tells A not to push themselves, as health comes first (無理をしないでください)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "work"]
  },
  {
    id: "l-n3-29",
    title: "At the Optician",
    level: "N3",
    context: "A customer gets an eye exam and chooses glasses",
    text: "A: いらっしゃいませ。眼鏡[めがね]をお探[さが]しですか。\nB: はい、最近[さいきん]文字[もじ]が見[み]えにくくなったんです。\nA: では、まず視力[しりょく]検査[けんさ]をいたしましょう。\nB: お願[ねが]いします。遠[とお]くも見[み]えにくいんですが。\nA: なら、遠近[えんきん]両用[りょうよう]のレンズをお勧[すす]めします。\nB: 費用[ひよう]はどのくらいですか。\nA: フレーム込[こ]みで、二万円[にまんえん]から三万円[さんまんえん]ぐらいです。",
    translation: "A: Welcome. Are you looking for glasses?\nB: Yes, recently it's become hard to see letters.\nA: Then let's first do an eyesight test.\nB: Please. I also have trouble seeing far away.\nA: In that case, I recommend progressive lenses.\nB: About how much does it cost?\nA: Including the frame, from twenty to thirty thousand yen.",
    questions: [
      {
        q: "Why does B want glasses?",
        choices: ["For fashion", "It's become hard to see letters", "To protect from the sun", "For reading only at night"],
        answerIndex: 1,
        explanation: "B says it's recently become hard to see letters (文字が見えにくくなった)."
      },
      {
        q: "What does A suggest doing first?",
        choices: ["Choosing frames", "An eyesight test", "Buying contact lenses", "Getting sunglasses"],
        answerIndex: 1,
        explanation: "A suggests doing an eyesight test first (視力検査をいたしましょう)."
      },
      {
        q: "What kind of lenses does A recommend?",
        choices: ["Single-vision lenses", "Reading glasses", "Progressive lenses", "Contact lenses"],
        answerIndex: 2,
        explanation: "A recommends progressive lenses since B has trouble both near and far (遠近両用のレンズ)."
      },
      {
        q: "About how much will it cost?",
        choices: ["From five to ten thousand yen", "From ten to twenty thousand yen", "From twenty to thirty thousand yen", "From thirty to fifty thousand yen"],
        answerIndex: 2,
        explanation: "A says it costs from twenty to thirty thousand yen including the frame (二万円から三万円)."
      }
    ],
    estMinutes: 4,
    tags: ["health", "shopping"]
  },
  {
    id: "l-n3-30",
    title: "A Conversation About Pet Care",
    level: "N3",
    context: "A friend offers to watch a dog during a business trip",
    text: "A: 来週[らいしゅう]から出張[しゅっちょう]で三日間[みっかかん]家[いえ]を空[あ]けるんです。\nB: その間[あいだ]、犬[いぬ]はどうしますか。\nA: ペットホテルに預[あず]けようと思[おも]っているんですが。\nB: うちで預[あず]かってもいいですよ。犬[いぬ]も慣[な]れているし。\nA: それは助[たす]かります。でも、餌[えさ]や散歩[さんぽ]の世話[せわ]が大変[たいへん]では？\nB: 全然[ぜんぜん]問題[もんだい]ないですよ。楽[たの]しみにしています。",
    translation: "A: From next week I'll be away from home for three days on a business trip.\nB: What will you do with your dog during that time?\nA: I'm thinking of leaving him at a pet hotel.\nB: I can take care of him at my place. The dog is used to me too.\nA: That would be a help. But isn't feeding and walking him a lot of work?\nB: No problem at all. I'm looking forward to it.",
    questions: [
      {
        q: "Why does A need help with the dog?",
        choices: ["A family trip", "A business trip for three days", "Moving house", "A hospital stay"],
        answerIndex: 1,
        explanation: "A will be away for three days on a business trip (出張で三日間家を空ける)."
      },
      {
        q: "What does A originally plan to do?",
        choices: ["Leave the dog with family", "Leave the dog at a pet hotel", "Take the dog along", "Hire a sitter at home"],
        answerIndex: 1,
        explanation: "A is thinking of leaving the dog at a pet hotel (ペットホテルに預けよう)."
      },
      {
        q: "What does B offer to do?",
        choices: ["Pay for the pet hotel", "Take care of the dog at B's place", "Find another pet hotel", "Walk the dog only"],
        answerIndex: 1,
        explanation: "B offers to take care of the dog at their own place (うちで預かってもいい)."
      },
      {
        q: "How does B feel about the work involved?",
        choices: ["Worried", "Reluctant", "No problem at all", "Annoyed"],
        answerIndex: 2,
        explanation: "B says there's no problem at all and is looking forward to it (全然問題ない、楽しみにしている)."
      }
    ],
    estMinutes: 4,
    tags: ["pets", "friends"]
  },
  {
    id: "l-n3-31",
    title: "Discussing a Home Renovation",
    level: "N3",
    context: "A homeowner consults a contractor about renovating an old house",
    text: "A: 古[ふる]い家[いえ]を改築[かいちく]しようと思[おも]っているんですが。\nB: どのくらい古[ふる]いんですか。\nA: 築[ちく]四十年[よんじゅうねん]で、壁[かべ]や屋根[やね]が傷[いた]んでいます。\nB: まず、専門家[せんもんか]に調査[ちょうさ]してもらった方[ほう]がいいですね。\nA: そうですね。費用[ひよう]はどのくらいかかるでしょうか。\nB: 状態[じょうたい]によりますが、三百万円[さんびゃくまんえん]以上[いじょう]は覚悟[かくご]が必要[ひつよう]です。",
    translation: "A: I'm thinking of renovating an old house.\nB: How old is it?\nA: It's forty years old, and the walls and roof are damaged.\nB: You'd better first have an expert inspect it.\nA: You're right. About how much will it cost?\nB: It depends on the condition, but you should be prepared for at least three million yen.",
    questions: [
      {
        q: "What does A want to do?",
        choices: ["Build a new house", "Sell an old house", "Renovate an old house", "Rent out a house"],
        answerIndex: 2,
        explanation: "A is thinking of renovating an old house (古い家を改築しよう)."
      },
      {
        q: "How old is the house?",
        choices: ["Twenty years", "Thirty years", "Forty years", "Fifty years"],
        answerIndex: 2,
        explanation: "A says the house is forty years old (築四十年)."
      },
      {
        q: "What does B suggest doing first?",
        choices: ["Tearing down the house", "Having an expert inspect it", "Replacing the roof immediately", "Buying new materials"],
        answerIndex: 1,
        explanation: "B suggests having an expert inspect it first (専門家に調査してもらった方がいい)."
      },
      {
        q: "About how much does B estimate the cost?",
        choices: ["At least one million yen", "At least two million yen", "At least three million yen", "At least five million yen"],
        answerIndex: 2,
        explanation: "B says A should be prepared for at least three million yen (三百万円以上は覚悟が必要)."
      }
    ],
    estMinutes: 4,
    tags: ["home", "renovation"]
  },
  {
    id: "l-n3-32",
    title: "At the Gas Station",
    level: "N3",
    context: "A customer gets gas and requests some services",
    text: "A: いらっしゃいませ。満[まん]タンでよろしいですか。\nB: はい、お願[ねが]いします。あと、エンジンオイルも交換[こうかん]できますか。\nA: はい、可能[かのう]です。何[なん]番[ばん]のオイルを使[つか]いますか。\nB: いつものやつでいいです。タイヤの空気[くうき]も入[い]れてください。\nA: かしこまりました。洗車[せんしゃ]はいかがですか。\nB: 今日[きょう]はいいです。",
    translation: "A: Welcome. A full tank, please?\nB: Yes, please. Also, can you change the engine oil?\nA: Yes, that's possible. What number of oil will you use?\nB: The usual one is fine. Please also put air in the tires.\nA: Understood. How about a car wash?\nB: Not today.",
    questions: [
      {
        q: "What does A ask first?",
        choices: ["A car wash", "A full tank", "An oil change", "A tire check"],
        answerIndex: 1,
        explanation: "A asks whether a full tank is OK (満タンでよろしいですか)."
      },
      {
        q: "What does B want changed?",
        choices: ["The tires", "The wipers", "The engine oil", "The air filter"],
        answerIndex: 2,
        explanation: "B asks whether the engine oil can be changed (エンジンオイルも交換できますか)."
      },
      {
        q: "What else does B request?",
        choices: ["A car wash", "Air in the tires", "Wiper replacement", "A battery check"],
        answerIndex: 1,
        explanation: "B asks to have air put in the tires (タイヤの空気も入れてください)."
      },
      {
        q: "Does B want a car wash?",
        choices: ["Yes, today", "No, not today", "Yes, but later", "Yes, with wax"],
        answerIndex: 1,
        explanation: "B declines a car wash today (今日はいいです)."
      }
    ],
    estMinutes: 3,
    tags: ["car", "service"]
  },
  {
    id: "l-n3-33",
    title: "Talking About a Festival",
    level: "N3",
    context: "Friends plan to attend a local festival",
    text: "A: 来週[らいしゅう]の土曜日[どようび]、町[まち]のお祭[まつ]りがあるんですよ。\nB: それは楽[たの]しそうですね。何[なに]がありますか。\nA: 屋台[やたい]がたくさん並[なら]んで、夜[よる]は花火[はなび]もあがります。\nB: 子供[こども]も連[つ]れて行[い]ってもいいですか。\nA: もちろんです。神輿[みこし]を担[かつ]ぐ体験[たいけん]もできますよ。\nB: では、夕方[ゆうがた]から家族[かぞく]で行[い]きましょう。",
    translation: "A: There's a town festival next Saturday.\nB: That sounds fun. What is there?\nA: Many stalls line up, and fireworks go off at night.\nB: Can I bring my children too?\nA: Of course. You can also experience carrying a portable shrine.\nB: Then let's go as a family from the evening.",
    questions: [
      {
        q: "When is the festival?",
        choices: ["This Saturday", "Next Saturday", "Next Sunday", "This Sunday"],
        answerIndex: 1,
        explanation: "A says the festival is next Saturday (来週の土曜日)."
      },
      {
        q: "What can be seen at the festival?",
        choices: ["Stalls and fireworks", "Parade and music", "Dance and food", "Sports and games"],
        answerIndex: 0,
        explanation: "A mentions many stalls and fireworks at night (屋台が並んで、花火もあがる)."
      },
      {
        q: "What experience does A mention for children?",
        choices: ["Riding a float", "Carrying a portable shrine", "Setting off fireworks", "Dancing in the parade"],
        answerIndex: 1,
        explanation: "A says you can experience carrying a portable shrine (神輿を担ぐ体験もできる)."
      },
      {
        q: "When will B go to the festival?",
        choices: ["In the morning", "Around noon", "From the evening", "Late at night"],
        answerIndex: 2,
        explanation: "B says they'll go as a family from the evening (夕方から家族で行きましょう)."
      }
    ],
    estMinutes: 4,
    tags: ["festival", "culture"]
  },
  {
    id: "l-n3-34",
    title: "At the Print Shop",
    level: "N3",
    context: "A customer orders copies and binding",
    text: "A: すみません、この資料[しりょう]を五十部[ごじゅうぶ]コピーしたいんですが。\nB: はい。カラーでよろしいですか。\nA: いえ、白黒[しろくろ]でお願[ねが]いします。製本[せいほん]もできますか。\nB: はい、左[ひだり]側[がわ]をホッチキスで留[と]めるか、製本[せいほん]テープを使[つか]うことができます。\nA: では、ホッチキスでお願[ねが]いします。いつ仕上[しあ]がりますか。\nB: 三十分[さんじゅっぷん]後[ご]には仕上[しあ]がります。",
    translation: "A: Excuse me, I'd like to copy these materials fifty times.\nB: Sure. Color is fine?\nA: No, black and white please. Can you also bind them?\nB: Yes, we can either staple on the left side or use binding tape.\nA: Then please staple. When will it be ready?\nB: It will be finished in thirty minutes.",
    questions: [
      {
        q: "How many copies does A want?",
        choices: ["Twenty", "Thirty", "Fifty", "One hundred"],
        answerIndex: 2,
        explanation: "A wants fifty copies (五十部コピーしたい)."
      },
      {
        q: "Color or black and white?",
        choices: ["Color", "Black and white", "Both", "Sepia tone"],
        answerIndex: 1,
        explanation: "A asks for black and white (白黒でお願いします)."
      },
      {
        q: "Which binding method does A choose?",
        choices: ["Binding tape", "Stapling on the left", "Glue binding", "Spiral binding"],
        answerIndex: 1,
        explanation: "A chooses stapling on the left (ホッチキスでお願いします)."
      },
      {
        q: "When will the copies be ready?",
        choices: ["In ten minutes", "In twenty minutes", "In thirty minutes", "In an hour"],
        answerIndex: 2,
        explanation: "B says it will be finished in thirty minutes (三十分後には仕上がる)."
      }
    ],
    estMinutes: 3,
    tags: ["shop", "printing"]
  },
  {
    id: "l-n3-35",
    title: "Discussing a Scholarship",
    level: "N3",
    context: "A student asks a teacher about applying for a scholarship",
    text: "A: 留学[りゅうがく]したいんですが、費用[ひよう]が足[た]りなくて。\nB: 奨学金[しょうがくきん]に申請[しんせい]してみたらどうですか。\nA: それは考[かんが]えていますが、条件[じょうけん]が厳[きび]しいと聞[き]きました。\nB: 確[たし]かに難[むずか]しいですが、成績[せいせき]が良[よ]ければ可能性[かのうせい]がありますよ。\nA: 申請[しんせい]の締切[しめきり]はいつですか。\nB: 来月[らいげつ]の十五日[じゅうごにち]です。早[はや]めに準備[じゅんび]した方[ほう]がいいですよ。",
    translation: "A: I want to study abroad, but I don't have enough money.\nB: How about applying for a scholarship?\nA: I'm considering that, but I heard the conditions are strict.\nB: It's certainly difficult, but if your grades are good, there's a chance.\nA: When is the application deadline?\nB: The fifteenth of next month. You'd better prepare early.",
    questions: [
      {
        q: "Why does A need a scholarship?",
        choices: ["Wants to study abroad but lacks money", "Wants to buy books", "Needs to pay tuition fees", "Wants to travel"],
        answerIndex: 0,
        explanation: "A wants to study abroad but doesn't have enough money (留学したいが費用が足りない)."
      },
      {
        q: "What did A hear about the scholarship conditions?",
        choices: ["They are easy", "They are strict", "They are unclear", "They changed recently"],
        answerIndex: 1,
        explanation: "A heard the conditions are strict (条件が厳しいと聞いた)."
      },
      {
        q: "What increases the chance of getting the scholarship?",
        choices: ["A recommendation letter", "Good grades", "A long essay", "Volunteer experience"],
        answerIndex: 1,
        explanation: "B says if grades are good, there's a chance (成績が良ければ可能性がある)."
      },
      {
        q: "When is the application deadline?",
        choices: ["The fifth of next month", "The tenth of next month", "The fifteenth of next month", "The twentieth of next month"],
        answerIndex: 2,
        explanation: "B says the deadline is the fifteenth of next month (来月の十五日)."
      }
    ],
    estMinutes: 4,
    tags: ["education", "scholarship"]
  },
  {
    id: "l-n3-36",
    title: "At the Driving School",
    level: "N3",
    context: "A new student asks about enrolling in driving lessons",
    text: "A: すみません、教習[きょうしゅう]の申込[もうしこ]みをしたいんですが。\nB: はい。普通[ふつう]の自動車[じどうしゃ]でよろしいですか。\nA: はい。期間[きかん]はどのくらいかかりますか。\nB: 最短[さいたん]で一[いっ]か月[げつ]ですが、平均的[へいきんてき]には二[に]か月[げつ]ぐらいです。\nA: 夜[よる]の授業[じゅぎょう]も受[う]けられますか。\nB: はい、夜間[やかん]教習[きょうしゅう]もございます。ただ、追加[ついか]料金[りょうきん]が発生[はっせい]します。\nA: 分[わ]かりました。では、お願[ねが]いします。",
    translation: "A: Excuse me, I'd like to enroll in driving lessons.\nB: Sure. A regular automobile, please?\nA: Yes. How long does it take?\nB: At minimum one month, but on average about two months.\nA: Can I also take classes at night?\nB: Yes, we have night lessons too. However, an additional fee applies.\nA: Understood. Then please.",
    questions: [
      {
        q: "What does A want to enroll in?",
        choices: ["Language lessons", "Driving lessons", "Cooking classes", "Music lessons"],
        answerIndex: 1,
        explanation: "A wants to enroll in driving lessons (教習の申込みをしたい)."
      },
      {
        q: "What kind of vehicle will A learn on?",
        choices: ["A motorcycle", "A truck", "A regular automobile", "A bus"],
        answerIndex: 2,
        explanation: "B confirms a regular automobile (普通の自動車)."
      },
      {
        q: "On average, how long does it take?",
        choices: ["About one month", "About two months", "About three months", "About six months"],
        answerIndex: 1,
        explanation: "B says on average it takes about two months (平均的には二か月ぐらい)."
      },
      {
        q: "What about night lessons?",
        choices: ["They are not available", "They are free", "They are available with an extra fee", "They are only on weekends"],
        answerIndex: 2,
        explanation: "B says night lessons are available, but an additional fee applies (夜間教習もある、ただ追加料金が発生)."
      }
    ],
    estMinutes: 4,
    tags: ["driving", "education"]
  },
  {
    id: "l-n3-37",
    title: "Talking About a Podcast",
    level: "N3",
    context: "Two colleagues discuss a Japanese podcast one of them listens to",
    text: "A: 最近[さいきん]、日本語[にほんご]のポッドキャストを聞[き]くようになりました。\nB: そうですか。どのくらい聞[き]いていますか。\nA: 毎朝[まいあさ]、通勤[つうきん]中[ちゅう]に三十分[さんじゅっぷん]ぐらいです。\nB: どんな内容[ないよう]を扱[あつか]っていますか。\nA: ニュースや文化[ぶんか]について話[はな]す番組[ばんぐみ]が多[おお]いです。\nB: 私[わたし]も聞[き]いてみたいですね。名前[なまえ]を教[おし]えてもらえますか。\nA: もちろんです。あとでメールします。",
    translation: "A: Recently, I've started listening to a Japanese podcast.\nB: Is that so. How much do you listen?\nA: Every morning, about thirty minutes during my commute.\nB: What kind of content does it cover?\nA: Many programs talk about news and culture.\nB: I'd like to try listening too. Could you tell me the name?\nA: Of course. I'll email you later.",
    questions: [
      {
        q: "What did A start doing recently?",
        choices: ["Watching Japanese dramas", "Reading Japanese books", "Listening to a Japanese podcast", "Studying with a tutor"],
        answerIndex: 2,
        explanation: "A says they've started listening to a Japanese podcast (日本語のポッドキャストを聞くようになった)."
      },
      {
        q: "When does A listen to the podcast?",
        choices: ["Every evening", "Every morning during the commute", "On weekends", "During lunch breaks"],
        answerIndex: 1,
        explanation: "A listens every morning during the commute (毎朝、通勤中に)."
      },
      {
        q: "What kind of content does the podcast cover?",
        choices: ["Comedy and music", "News and culture", "Sports and games", "Travel and food"],
        answerIndex: 1,
        explanation: "A says many programs talk about news and culture (ニュースや文化について話す番組)."
      },
      {
        q: "How will A share the podcast name?",
        choices: ["By phone", "In person", "By email", "By text message"],
        answerIndex: 2,
        explanation: "A says they will email it later (あとでメールします)."
      }
    ],
    estMinutes: 4,
    tags: ["technology", "learning"]
  },
  {
    id: "l-n3-38",
    title: "At the Music Store",
    level: "N3",
    context: "A customer buys guitar strings at a music shop",
    text: "A: すみません、ギターの弦[げん]を買[か]いたいんですが。\nB: はい。アコースティック用[よう]ですか、エレキ用[よう]ですか。\nA: アコースティック用[よう]です。六本[ろっぽん]セットのやつをください。\nB: このメーカーでよろしいですか。\nA: あまり高[たか]くないのがいいんですが。\nB: では、こちらは二千円[にせんえん]で、コスパもいいですよ。\nA: じゃあ、それにします。",
    translation: "A: Excuse me, I'd like to buy guitar strings.\nB: Sure. Acoustic or electric?\nA: Acoustic. A set of six, please.\nB: Is this brand OK?\nA: I'd prefer something not too expensive.\nB: Then this one is two thousand yen, and it's good value.\nA: I'll take that one.",
    questions: [
      {
        q: "What does A want to buy?",
        choices: ["A guitar", "Guitar strings", "A guitar pick", "An amplifier"],
        answerIndex: 1,
        explanation: "A wants to buy guitar strings (ギターの弦を買いたい)."
      },
      {
        q: "What kind of guitar are the strings for?",
        choices: ["Electric", "Acoustic", "Classical", "Bass"],
        answerIndex: 1,
        explanation: "A says acoustic strings (アコースティック用です)."
      },
      {
        q: "How many strings are in the set?",
        choices: ["Four", "Five", "Six", "Twelve"],
        answerIndex: 2,
        explanation: "A asks for a set of six (六本セット)."
      },
      {
        q: "Which set does A choose?",
        choices: ["The most expensive one", "A famous brand", "The 2,000 yen good-value one", "An electric set"],
        answerIndex: 2,
        explanation: "A chooses the 2,000 yen good-value one B recommends (二千円でコスパもいい)."
      }
    ],
    estMinutes: 3,
    tags: ["shopping", "music"]
  },
  {
    id: "l-n3-39",
    title: "Discussing a New Year Plan",
    level: "N3",
    context: "Two colleagues talk about their year-end and New Year plans",
    text: "A: 今年[ことし]の年末[ねんまつ]年始[ねんし]はどう過[す]ごす予定[よてい]ですか。\nB: 実[じつ]は、実家[じっか]へ帰[かえ]ろうと思[おも]っています。\nA: それはいいですね。何日[なんにち]ぐらい行[い]きますか。\nB: 三[さん]が日[にち]は両親[りょうしん]と過[す]ごすつもりです。\nA: うちも家族[かぞく]で初詣[はつもうで]に行[い]く予定[よてい]です。\nB: じゃあ、年明[としあ]けにまた会[あ]いましょう。",
    translation: "A: How do you plan to spend the year-end and New Year this year?\nB: Actually, I'm thinking of going back to my parents' house.\nA: That's nice. About how many days will you go?\nB: I plan to spend the first three days with my parents.\nA: My family also plans to go to the first shrine visit of the year.\nB: Then let's meet again after the New Year.",
    questions: [
      {
        q: "What is B's plan?",
        choices: ["Traveling overseas", "Staying home alone", "Going back to B's parents' house", "Working through the holidays"],
        answerIndex: 2,
        explanation: "B is thinking of going back to their parents' house (実家へ帰ろう)."
      },
      {
        q: "How long does B plan to spend with their parents?",
        choices: ["One day", "Two days", "The first three days of the New Year", "A full week"],
        answerIndex: 2,
        explanation: "B plans to spend the first three days with their parents (三が日は両親と過ごす)."
      },
      {
        q: "What will A's family do?",
        choices: ["Travel abroad", "Go to the first shrine visit", "Host a party", "Visit friends"],
        answerIndex: 1,
        explanation: "A's family plans to go to the first shrine visit (初詣に行く予定)."
      },
      {
        q: "When will A and B meet again?",
        choices: ["Before New Year's Eve", "On New Year's Day", "After the New Year", "Next month at work"],
        answerIndex: 2,
        explanation: "B suggests meeting again after the New Year (年明けにまた会いましょう)."
      }
    ],
    estMinutes: 4,
    tags: ["new-year", "family"]
  },
  {
    id: "l-n3-40",
    title: "A Conversation About Climate Change",
    level: "N3",
    context: "Two friends discuss what they can do about climate change",
    text: "A: 最近[さいきん]、夏[なつ]がますます暑[あつ]くなっていますね。\nB: ええ、気候[きこう]変動[へんどう]の影響[えいきょう]だと言[い]われています。\nA: 何[なに]かできることはありますか。\nB: まず、省電力[しょうでんりょく]やゴミの分別[ぶんべつ]から始[はじ]めましょう。\nA: 再生[さいせい]可能[かのう]エネルギーを使[つか]うのもいいですね。\nB: そうですね。小[ちい]さなことでも続[つづ]けることが大切[たいせつ]です。",
    translation: "A: Recently, summers are getting hotter and hotter.\nB: Yes, it's said to be the effect of climate change.\nA: Is there anything we can do?\nB: First, let's start with saving electricity and separating garbage.\nA: Using renewable energy is also good.\nB: That's right. Even small things, keeping at it is important.",
    questions: [
      {
        q: "What is happening to summers recently?",
        choices: ["Getting cooler", "Getting shorter", "Getting hotter", "Staying the same"],
        answerIndex: 2,
        explanation: "A says summers are getting hotter and hotter (夏がますます暑くなっている)."
      },
      {
        q: "What does B say is the cause?",
        choices: ["Air pollution alone", "Climate change", "Sunspot activity", "Natural cycles"],
        answerIndex: 1,
        explanation: "B says it's said to be the effect of climate change (気候変動の影響)."
      },
      {
        q: "What does B suggest starting with?",
        choices: ["Planting trees", "Saving electricity and separating garbage", "Riding bicycles", "Buying electric cars"],
        answerIndex: 1,
        explanation: "B suggests starting with saving electricity and separating garbage (省電力やゴミの分別から)."
      },
      {
        q: "What does A suggest?",
        choices: ["Using renewable energy", "Stopping factory production", "Reducing meat consumption", "Traveling less"],
        answerIndex: 0,
        explanation: "A suggests using renewable energy (再生可能エネルギーを使うのもいい)."
      }
    ],
    estMinutes: 4,
    tags: ["environment", "climate"]
  }
];
