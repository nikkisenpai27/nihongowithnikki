import type { ListeningData } from "@/lib/types";

export const listeningN5B: ListeningData[] = [
  {
    id: "l-n5-11",
    title: "病院[びょういん]で",
    level: "N5",
    context: "At the clinic",
    text:
      "A: 先生[せんせい]、頭[あたま]が痛[いた]いです。\n" +
      "B: いつから痛[いた]いですか。\n" +
      "A: 昨日[きのう]の夜[よる]から痛[いた]いです。\n" +
      "B: 熱[ねつ]もありますか。\n" +
      "A: はい、少[すこ]しあります。\n" +
      "B: じゃ、この薬[くすり]を飲[の]んでください。今日[きょう]は家[いえ]で休[やす]んでください。",
    translation:
      "A: Doctor, I have a headache.\n" +
      "B: Since when does it hurt?\n" +
      "A: It has hurt since last night.\n" +
      "B: Do you also have a fever?\n" +
      "A: Yes, a little.\n" +
      "B: Then please take this medicine. Please rest at home today.",
    questions: [
      {
        q: "What is the patient's problem?",
        choices: ["A headache", "A stomachache", "A toothache", "A sore throat"],
        answerIndex: 0,
        explanation: "The patient says 頭が痛いです (I have a headache)."
      },
      {
        q: "When did the pain start?",
        choices: ["This morning", "Two days ago", "Last night", "Right now"],
        answerIndex: 2,
        explanation: "The patient says 昨日の夜から痛いです (it has hurt since last night)."
      },
      {
        q: "What does the doctor tell the patient to do?",
        choices: ["Go to work", "Take a walk", "Eat a lot", "Take medicine and rest at home"],
        answerIndex: 3,
        explanation: "The doctor says 薬を飲んでください and 今日は家で休んでください."
      }
    ],
    estMinutes: 2,
    tags: ["health", "clinic"]
  },
  {
    id: "l-n5-12",
    title: "予定[よてい]をキャンセルする電話[でんわ]",
    level: "N5",
    context: "On the phone",
    text:
      "A: もしもし、田中[たなか]さん、私[わたし]です。\n" +
      "B: あ、こんにちは。\n" +
      "A: 今度[こんど]の土曜日[どようび]の映画[えいが]ですが、行[い]けません。\n" +
      "B: どうしてですか。\n" +
      "A: 仕事[しごと]があります。すみません。\n" +
      "B: 大丈夫[だいじょうぶ]ですよ。また今度[こんど]。",
    translation:
      "A: Hello, Tanaka-san, it's me.\n" +
      "B: Oh, hello.\n" +
      "A: About the movie this Saturday, I can't go.\n" +
      "B: Why?\n" +
      "A: I have work. I'm sorry.\n" +
      "B: It's fine. Let's go another time.",
    questions: [
      {
        q: "Why can't the speaker go to the movie?",
        choices: ["He is sick", "He has a meeting", "He forgot", "He has work"],
        answerIndex: 3,
        explanation: "The speaker says 仕事があります (I have work)."
      },
      {
        q: "What day was the movie planned for?",
        choices: ["Sunday", "Saturday", "Friday", "Monday"],
        answerIndex: 1,
        explanation: "The speaker mentions 今度の土曜日の映画 (the movie this Saturday)."
      },
      {
        q: "How does the friend respond?",
        choices: ["He is angry", "He cancels too", "It's fine, another time", "He goes alone"],
        answerIndex: 2,
        explanation: "The friend says 大丈夫ですよ。また今度 (It's fine. Another time)."
      }
    ],
    estMinutes: 2,
    tags: ["phone", "plans"]
  },
  {
    id: "l-n5-13",
    title: "忘[わす]れ物[もの]を尋[たず]ねる",
    level: "N5",
    context: "At a lost-and-found desk",
    text:
      "A: すみません、鞄[かばん]を忘[わす]れました。\n" +
      "B: どんな鞄[かばん]ですか。\n" +
      "A: 黒[くろ]い鞄[かばん]です。\n" +
      "B: 中[なか]に何[なに]が入[はい]っていますか。\n" +
      "A: 本[ほん]と財布[さいふ]が入[はい]っています。\n" +
      "B: じゃ、ここに書[か]いてください。",
    translation:
      "A: Excuse me, I forgot my bag.\n" +
      "B: What kind of bag is it?\n" +
      "A: It's a black bag.\n" +
      "B: What is inside it?\n" +
      "A: A book and a wallet are inside.\n" +
      "B: Then please write here.",
    questions: [
      {
        q: "What did the person forget?",
        choices: ["A bag", "A phone", "A wallet", "A book"],
        answerIndex: 0,
        explanation: "The person says 鞄を忘れました (I forgot my bag)."
      },
      {
        q: "What color is the bag?",
        choices: ["White", "Black", "Red", "Blue"],
        answerIndex: 1,
        explanation: "The person says 黒い鞄です (It's a black bag)."
      },
      {
        q: "What is inside the bag?",
        choices: ["A phone and a card", "A book and a wallet", "Money and keys", "A book and a phone"],
        answerIndex: 1,
        explanation: "The person says 本と財布が入っています (A book and a wallet are inside)."
      }
    ],
    estMinutes: 2,
    tags: ["lost-item", "shopping"]
  },
  {
    id: "l-n5-14",
    title: "図書館[としょかん]で本[ほん]を借[か]りる",
    level: "N5",
    context: "At the library",
    text:
      "A: この本[ほん]を借[か]りたいです。\n" +
      "B: はい。カードを見[み]せてください。\n" +
      "A: これです。\n" +
      "B: ありがとうございます。本[ほん]は二週間[にしゅうかん]借[か]りられます。\n" +
      "A: 二週間[にしゅうかん]ですか。\n" +
      "B: はい。長[なが]く借[か]りたい時[とき]は、もう一度[いちど]来[き]てください。",
    translation:
      "A: I want to borrow this book.\n" +
      "B: Sure. Please show me your card.\n" +
      "A: Here it is.\n" +
      "B: Thank you. You can borrow the book for two weeks.\n" +
      "A: Two weeks?\n" +
      "B: Yes. If you want to borrow it longer, please come once more.",
    questions: [
      {
        q: "What does the person want to do?",
        choices: ["Borrow a book", "Buy a book", "Return a book", "Read a book"],
        answerIndex: 0,
        explanation: "The person says この本を借りたいです (I want to borrow this book)."
      },
      {
        q: "What must the person show?",
        choices: ["A passport", "A card", "Money", "A bag"],
        answerIndex: 1,
        explanation: "The librarian says カードを見せてください (Please show me your card)."
      },
      {
        q: "How long can the book be borrowed?",
        choices: ["One week", "Two weeks", "Three weeks", "One month"],
        answerIndex: 1,
        explanation: "The librarian says 本は二週間借りられます (You can borrow the book for two weeks)."
      }
    ],
    estMinutes: 3,
    tags: ["library", "books"]
  },
  {
    id: "l-n5-15",
    title: "カフェでコーヒーを注文[ちゅうもん]する",
    level: "N5",
    context: "At a café",
    text:
      "A: いらっしゃいませ。\n" +
      "B: コーヒーをください。\n" +
      "A: ホットですか、アイスですか。\n" +
      "B: アイスをください。\n" +
      "A: かしこまりました。他[ほか]に何[なに]か？\n" +
      "B: ケーキもお願[ねが]いします。",
    translation:
      "A: Welcome.\n" +
      "B: A coffee, please.\n" +
      "A: Hot or iced?\n" +
      "B: Iced, please.\n" +
      "A: Certainly. Anything else?\n" +
      "B: A cake too, please.",
    questions: [
      {
        q: "What does the customer order first?",
        choices: ["Tea", "Coffee", "Cake", "Water"],
        answerIndex: 1,
        explanation: "The customer says コーヒーをください (A coffee, please)."
      },
      {
        q: "Hot or iced?",
        choices: ["Hot", "Cold", "Iced", "Warm"],
        answerIndex: 2,
        explanation: "The customer says アイスをください (Iced, please)."
      },
      {
        q: "What else does the customer order?",
        choices: ["A cake", "Tea", "Water", "Bread"],
        answerIndex: 0,
        explanation: "The customer says ケーキもお願いします (A cake too, please)."
      }
    ],
    estMinutes: 2,
    tags: ["café", "ordering"]
  },
  {
    id: "l-n5-16",
    title: "家族[かぞく]について話[はな]す",
    level: "N5",
    context: "Talking with a friend",
    text:
      "A: ご家族[かぞく]は何人[なんにん]ですか。\n" +
      "B: 四人[よにん]です。父[ちち]、母[はは]、私[わたし]、妹[いもうと]です。\n" +
      "A: お父[とう]さんは何[なに]をしていますか。\n" +
      "B: 会社[かいしゃ]で働[はたら]いています。\n" +
      "A: 妹[いもうと]さんは学生[がくせい]ですか。\n" +
      "B: はい、高校生[こうこうせい]です。",
    translation:
      "A: How many people are in your family?\n" +
      "B: Four. My father, mother, me, and a younger sister.\n" +
      "A: What does your father do?\n" +
      "B: He works at a company.\n" +
      "A: Is your sister a student?\n" +
      "B: Yes, she's a high school student.",
    questions: [
      {
        q: "How many people are in the family?",
        choices: ["Three", "Five", "Two", "Four"],
        answerIndex: 3,
        explanation: "The friend says 四人です (Four people)."
      },
      {
        q: "Where does the father work?",
        choices: ["At a company", "At a school", "At a hospital", "At a shop"],
        answerIndex: 0,
        explanation: "The friend says 会社で働いています (He works at a company)."
      },
      {
        q: "What is the sister?",
        choices: ["A teacher", "A junior high student", "A high school student", "A university student"],
        answerIndex: 2,
        explanation: "The friend says 高校生です (She's a high school student)."
      }
    ],
    estMinutes: 2,
    tags: ["family", "daily-life"]
  },
  {
    id: "l-n5-17",
    title: "郵便局[ゆうびんきょく]で荷物[にもつ]を送[おく]る",
    level: "N5",
    context: "At the post office",
    text:
      "A: すみません、これを郵便[ゆうびん]したいです。\n" +
      "B: はい。どこへ送[おく]りますか。\n" +
      "A: 日本[にほん]へ送[おく]りたいです。\n" +
      "B: 船便[ふなびん]ですか、航空便[こうくうびん]ですか。\n" +
      "A: 航空便[こうくうびん]をください。いくらですか。\n" +
      "B: 千二百円[せんにひゃくえん]です。",
    translation:
      "A: Excuse me, I'd like to mail this.\n" +
      "B: Sure. Where are you sending it?\n" +
      "A: I want to send it to Japan.\n" +
      "B: Surface mail or airmail?\n" +
      "A: Airmail, please. How much is it?\n" +
      "B: 1,200 yen.",
    questions: [
      {
        q: "Where does the person want to send it?",
        choices: ["To Japan", "To Korea", "To America", "To China"],
        answerIndex: 0,
        explanation: "The person says 日本へ送りたいです (I want to send it to Japan)."
      },
      {
        q: "Which mail does the person choose?",
        choices: ["Surface mail", "Airmail", "Express mail", "Email"],
        answerIndex: 1,
        explanation: "The person says 航空便をください (Airmail, please)."
      },
      {
        q: "How much is it?",
        choices: ["1,000 yen", "1,200 yen", "1,500 yen", "2,000 yen"],
        answerIndex: 1,
        explanation: "The clerk says 千二百円です (It's 1,200 yen)."
      }
    ],
    estMinutes: 3,
    tags: ["post-office", "mail"]
  },
  {
    id: "l-n5-18",
    title: "先生[せんせい]に質問[しつもん]する",
    level: "N5",
    context: "In a classroom",
    text:
      "A: 先生[せんせい]、質問[しつもん]があります。\n" +
      "B: はい、何[なに]ですか。\n" +
      "A: この漢字[かんじ]の読[よ]み方[かた]がわかりません。\n" +
      "B: ああ、これですか。「山[やま]」と読[よ]みます。\n" +
      "A: ありがとうございます。\n" +
      "B: わかりましたか。\n" +
      "A: はい、わかりました。",
    translation:
      "A: Teacher, I have a question.\n" +
      "B: Yes, what is it?\n" +
      "A: I don't understand how to read this kanji.\n" +
      "B: Ah, this one? It's read \"yama\".\n" +
      "A: Thank you.\n" +
      "B: Did you understand?\n" +
      "A: Yes, I understood.",
    questions: [
      {
        q: "What is the student's question about?",
        choices: ["The kanji meaning", "How to read a kanji", "How to write a kanji", "A grammar point"],
        answerIndex: 1,
        explanation: "The student says 漢字の読み方がわかりません (I don't understand how to read the kanji)."
      },
      {
        q: "How is the kanji read?",
        choices: ["Yama", "Kawa", "Mizu", "Sora"],
        answerIndex: 0,
        explanation: "The teacher says 「山」と読みます (It's read 'yama')."
      },
      {
        q: "Did the student understand?",
        choices: ["Yes", "No", "A little", "Not yet"],
        answerIndex: 0,
        explanation: "The student says はい、わかりました (Yes, I understood)."
      }
    ],
    estMinutes: 2,
    tags: ["school", "kanji"]
  },
  {
    id: "l-n5-19",
    title: "誕生日[たんじょうび]パーティーの計画[けいかく]",
    level: "N5",
    context: "Planning with a friend",
    text:
      "A: 来週[らいしゅう]の土曜日[どようび]、田中[たなか]さんの誕生日[たんじょうび]です。\n" +
      "B: そうですね。パーティーをしましょう。\n" +
      "A: いいですね。何[なに]をあげますか。\n" +
      "B: 本[ほん]はどうですか。\n" +
      "A: いいですね。私[わたし]はケーキを作[つく]ります。\n" +
      "B: じゃ、六時[ろくじ]に私[わたし]の家[いえ]で会[あ]いましょう。",
    translation:
      "A: Next Saturday is Tanaka-san's birthday.\n" +
      "B: That's right. Let's have a party.\n" +
      "A: Sounds good. What should we give?\n" +
      "B: How about a book?\n" +
      "A: Good idea. I'll make a cake.\n" +
      "B: Then let's meet at my house at six.",
    questions: [
      {
        q: "Whose birthday is it next Saturday?",
        choices: ["Yamamoto's", "Tanaka's", "Sato's", "The speaker's"],
        answerIndex: 1,
        explanation: "The speaker says 田中さんの誕生日です (It's Tanaka-san's birthday)."
      },
      {
        q: "What will they give as a present?",
        choices: ["A book", "A bag", "A cake", "A pen"],
        answerIndex: 0,
        explanation: "The friend suggests 本はどうですか (How about a book?)."
      },
      {
        q: "What will the first speaker make?",
        choices: ["Sushi", "A cake", "Tea", "A card"],
        answerIndex: 1,
        explanation: "The speaker says ケーキを作ります (I'll make a cake)."
      },
      {
        q: "Where will they meet?",
        choices: ["At a café", "At school", "At a park", "At the friend's house"],
        answerIndex: 3,
        explanation: "The friend says 私の家で会いましょう (Let's meet at my house)."
      }
    ],
    estMinutes: 3,
    tags: ["birthday", "plans"]
  },
  {
    id: "l-n5-20",
    title: "明日[あした]の天気[てんき]予報[よほう]",
    level: "N5",
    context: "Talking about tomorrow's weather",
    text:
      "A: 明日[あした]の天気[てんき]はどうですか。\n" +
      "B: 雨[あめ]が降[ふ]るそうです。\n" +
      "A: そうですか。傘[かさ]が要[い]りますね。\n" +
      "B: はい。朝[あさ]は強[つよ]いです。\n" +
      "A: じゃ、早[はや]く出[で]かけましょう。\n" +
      "B: そうしましょう。",
    translation:
      "A: How is tomorrow's weather?\n" +
      "B: I heard it will rain.\n" +
      "A: I see. We'll need an umbrella.\n" +
      "B: Yes. The rain is strong in the morning.\n" +
      "A: Then let's leave early.\n" +
      "B: Let's do that.",
    questions: [
      {
        q: "What will the weather be like tomorrow?",
        choices: ["Sunny", "Rain", "Cloudy", "Snow"],
        answerIndex: 1,
        explanation: "The friend says 雨が降るそうです (I heard it will rain)."
      },
      {
        q: "What do they need?",
        choices: ["A coat", "An umbrella", "A bag", "A hat"],
        answerIndex: 1,
        explanation: "The speaker says 傘が要りますね (We'll need an umbrella)."
      },
      {
        q: "When is the rain strong?",
        choices: ["At night", "In the morning", "In the afternoon", "All day"],
        answerIndex: 1,
        explanation: "The friend says 朝は強いです (The rain is strong in the morning)."
      },
      {
        q: "What will they do?",
        choices: ["Stay home", "Cancel the plan", "Bring a friend", "Leave early"],
        answerIndex: 3,
        explanation: "The speaker says 早く出かけましょう (Let's leave early)."
      }
    ],
    estMinutes: 2,
    tags: ["weather", "daily-life"]
  }
];
