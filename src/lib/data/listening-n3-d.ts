import type { ListeningData } from "@/lib/types";

// N3 listening exercises set D (ids l-n3-61 .. l-n3-80).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana and punctuation have no brackets.
// Every kanji has inline furigana. text is read aloud by TTS AND shown
// as the transcript.

export const listeningN3D: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n3-61 — At the dry cleaner
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-61",
    title: "At the Dry Cleaner",
    level: "N3",
    context: "A customer and a clerk at a dry cleaning shop",
    text: "A: いらっしゃいませ。お預[あず]かりしたお洋服[ようふく]はこちらです。\nB: すみません、このコートのシミを落[お]としてもらえますか。\nA: はい、拝見[はいけん]します。こちらのシミは少[すこ]し難[むずか]しいかもしれません。\nB: いつ頃[ごろ]に上[あ]がりますか。\nA: 来週[らいしゅう]の水曜日[すいようび]には仕上[しあ]がります。\nB: 分[わ]かりました。お願[ねが]いします。\nA: ありがとうございます。",
    translation: "A: Welcome. The clothes we took in are here. B: Excuse me, can you remove the stain on this coat? A: Yes, let me take a look. This stain may be a little difficult. B: Around when will it be ready? A: It will be finished by next Wednesday. B: Understood. Please take care of it. A: Thank you.",
    questions: [
      {
        q: "What does the customer ask the clerk to do?",
        choices: ["Fix a button", "Remove a stain", "Shorten the sleeves", "Press the coat"],
        answerIndex: 1,
        explanation: "The customer says シミを落[お]としてもらえますか — please remove the stain.",
      },
      {
        q: "How does the clerk describe the stain?",
        choices: ["Very easy", "A little difficult", "Impossible", "Already gone"],
        answerIndex: 1,
        explanation: "The clerk says 少[すこ]し難[むずか]しいかもしれません — it may be a little difficult.",
      },
      {
        q: "When will the coat be ready?",
        choices: ["Today", "Tomorrow", "Next Wednesday", "Next month"],
        answerIndex: 2,
        explanation: "The clerk says 来週[らいしゅう]の水曜日[すいようび]には仕上[しあ]がります — it will be done by next Wednesday.",
      },
    ],
    estMinutes: 4,
    tags: ["shopping", "services"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-62 — Discussing a volunteer trip
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-62",
    title: "Discussing a Volunteer Trip",
    level: "N3",
    context: "Two coworkers discussing a weekend volunteer activity",
    text: "A: 今度[こんど]の週末[しゅうまつ]、ボランティアに行[い]きませんか。\nB: どこで行[おこな]われるんですか。\nA: 隣[となり]の町[まち]の公園[こうえん]を掃除[そうじ]します。\nB: いいですね。何[なに]を持[も]っていけばいいですか。\nA: 手袋[てぶくろ]と水[みず]だけあれば大丈夫[だいじょうぶ]です。\nB: 分[わ]かりました。参加[さんか]します。\nA: ありがとうございます。楽[たの]しみましょう。",
    translation: "A: This weekend, won't you go on a volunteer trip? B: Where will it be held? A: We will clean the park in the next town. B: Sounds nice. What should I bring? A: Just gloves and water is fine. B: Understood. I will join. A: Thank you. Let's enjoy it.",
    questions: [
      {
        q: "What will the volunteers do?",
        choices: ["Plant trees", "Clean a park", "Cook meals", "Guide tourists"],
        answerIndex: 1,
        explanation: "A says 公園[こうえん]を掃除[そうじ]します — they will clean the park.",
      },
      {
        q: "What does A suggest bringing?",
        choices: ["A camera and snacks", "Gloves and water", "A shovel and seeds", "Nothing at all"],
        answerIndex: 1,
        explanation: "A says 手袋[てぶくろ]と水[みず]だけあれば大丈夫[だいじょうぶ]です — gloves and water are enough.",
      },
      {
        q: "What is B's final decision?",
        choices: ["Declines politely", "Will think about it", "Joins the activity", "Will go next time"],
        answerIndex: 2,
        explanation: "B says 参加[さんか]します — I will participate.",
      },
    ],
    estMinutes: 4,
    tags: ["volunteer", "community"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-63 — At the gym
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-63",
    title: "At the Gym",
    level: "N3",
    context: "A new member and a gym staff member at registration",
    text: "A: ようこそ。今日[きょう]から会員[かいいん]ですね。\nB: はい。まず何[なに]をすればいいですか。\nA: トレーナーが体[からだ]の状態[じょうたい]をチェックします。\nB: どのくらい週[しゅう]に来[き]ればいいですか。\nA: 二[ふた]回[かい]ぐらいが目安[めやす]です。\nB: 分[わ]かりました。頑張[がんば]ります。",
    translation: "A: Welcome. You are a member starting today. B: Yes. What should I do first? A: A trainer will check your physical condition. B: How many times a week should I come? A: About twice is a good guideline. B: Understood. I will do my best.",
    questions: [
      {
        q: "What happens first for the new member?",
        choices: ["A tour of machines", "A trainer checks his condition", "Payment of fees", "A fitness test video"],
        answerIndex: 1,
        explanation: "A says トレーナーが体[からだ]の状態[じょうたい]をチェックします — a trainer will check the body's condition.",
      },
      {
        q: "How often does A suggest coming per week?",
        choices: ["Once", "About twice", "Three times", "Every day"],
        answerIndex: 1,
        explanation: "A says 二[ふた]回[かい]ぐらいが目安[めやす]です — about two times is a guide.",
      },
      {
        q: "What does B say at the end?",
        choices: ["I will rest", "I will do my best", "I will quit soon", "I am worried"],
        answerIndex: 1,
        explanation: "B says 頑張[がんば]ります — I will do my best / work hard.",
      },
    ],
    estMinutes: 3,
    tags: ["health", "sports"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-64 — Talking about a movie recommendation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-64",
    title: "Talking About a Movie Recommendation",
    level: "N3",
    context: "Two friends chatting about a film one of them watched",
    text: "A: 昨日[きのう]見[み]た映[えい]画[が]が面[おも]白[しろ]かったですよ。\nB: どんな話[はなし]だったんですか。\nA: 太[ふと]った男[おとこ]の人[ひと]が旅[たび]に出[で]る話[はなし]です。\nB: 私[わたし]も見[み]たいです。\nA: 来週[らいしゅう]の金曜日[きんようび]にまた行[い]きましょう。\nB: いいですね。一[いっ]緒[しょ]に行[い]きましょう。",
    translation: "A: The movie I saw yesterday was interesting. B: What kind of story was it? A: It's about a fat man who goes on a journey. B: I want to see it too. A: Let's go again next Friday. B: Sounds good. Let's go together.",
    questions: [
      {
        q: "How did A feel about the movie?",
        choices: ["Boring", "Interesting", "Confusing", "Too long"],
        answerIndex: 1,
        explanation: "A says 映[えい]画[が]が面[おも]白[しろ]かったですよ — the movie was interesting.",
      },
      {
        q: "What is the movie about?",
        choices: ["A fat man on a journey", "A young woman traveling", "A family trip", "A dog's adventure"],
        answerIndex: 0,
        explanation: "A says 太[ふと]った男[おとこ]の人[ひと]が旅[たび]に出[で]る話[はなし] — a story of a fat man going on a trip.",
      },
      {
        q: "When will they go to see it together?",
        choices: ["Tonight", "Tomorrow", "Next Friday", "Next month"],
        answerIndex: 2,
        explanation: "A suggests 来週[らいしゅう]の金曜日[きんようび]にまた行[い]きましょう — let's go again next Friday.",
      },
    ],
    estMinutes: 3,
    tags: ["entertainment", "friends"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-65 — At the dentist
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-65",
    title: "At the Dentist",
    level: "N3",
    context: "A patient and a dentist in the examination room",
    text: "A: どうされましたか。\nB: 左[ひだり]の奥[おく]の歯[は]が痛[いた]いんです。\nA: しばらく冷[つめ]たいものがしみますか。\nB: はい、特[とく]に冷[つめ]たい水[みず]が痛[いた]いです。\nA: 虫[むし]歯[ば]かもしれませんね。レントゲンを撮[と]りましょう。\nB: お願[ねが]いします。",
    translation: "A: What seems to be the problem? B: The back tooth on the left hurts. A: Have cold things been bothering it lately? B: Yes, especially cold water hurts. A: It might be a cavity. Let's take an X-ray. B: Please do.",
    questions: [
      {
        q: "Which tooth is hurting?",
        choices: ["Front right", "Back left", "Front left", "Back right"],
        answerIndex: 1,
        explanation: "B says 左[ひだり]の奥[おく]の歯[は]が痛[いた]い — the back tooth on the left hurts.",
      },
      {
        q: "What particularly bothers the tooth?",
        choices: ["Hot tea", "Sweet candy", "Cold water", "Hard nuts"],
        answerIndex: 2,
        explanation: "B says 特[とく]に冷[つめ]たい水[みず]が痛[いた]い — especially cold water hurts.",
      },
      {
        q: "What does the dentist suspect and plan to do?",
        choices: ["A cavity; take an X-ray", "Gum disease; prescribe medicine", "A cracked tooth; pull it", "Nothing serious; just clean it"],
        answerIndex: 0,
        explanation: "The dentist says 虫[むし]歯[ば]かもしれません and レントゲンを撮[と]りましょう — possibly a cavity and will take an X-ray.",
      },
    ],
    estMinutes: 4,
    tags: ["health", "medical"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-66 — Discussing a product return
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-66",
    title: "Discussing a Product Return",
    level: "N3",
    context: "A customer and a shop clerk at the returns counter",
    text: "A: すみません、この服[ふく]を返[へん]品[ぴん]したいんですが。\nB: 何[なに]か不[ぶ]具[ぐ]合[あい]がありましたか。\nA: サイズが合[あ]わなかったんです。\nB: レシートはお持[も]ちですか。\nA: はい、これです。\nB: では、ご対[たい]応[おう]します。少[しょう]々[しょう]お待[ま]ちください。",
    translation: "A: Excuse me, I'd like to return this clothing. B: Was there any problem with it? A: The size didn't fit. B: Do you have the receipt? A: Yes, here it is. B: Then I will handle it. Please wait a moment.",
    questions: [
      {
        q: "Why does the customer want to return the item?",
        choices: ["It was torn", "The size didn't fit", "It was the wrong color", "It was too expensive"],
        answerIndex: 1,
        explanation: "A says サイズが合[あ]わなかったんです — the size didn't fit.",
      },
      {
        q: "What does the clerk ask for?",
        choices: ["The original bag", "An ID card", "The receipt", "A return reason form"],
        answerIndex: 2,
        explanation: "B asks レシートはお持[も]ちですか — do you have the receipt?",
      },
      {
        q: "What happens at the end?",
        choices: ["The return is refused", "The customer leaves immediately", "The clerk will handle it shortly", "A new item is exchanged"],
        answerIndex: 2,
        explanation: "B says ご対[たい]応[おう]します and 少[しょう]々[しょう]お待[ま]ちください — will handle it and asks to wait briefly.",
      },
    ],
    estMinutes: 4,
    tags: ["shopping", "services"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-67 — At the bookstore
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-67",
    title: "At the Bookstore",
    level: "N3",
    context: "A customer and a clerk looking for a book",
    text: "A: いらっしゃいませ。何[なに]かお探[さが]しですか。\nB: 新[あたら]しい小[しょう]説[せつ]を探[さが]しています。\nA: この著[ちょ]者[しゃ]の本[ほん]ですか。\nB: はい、そうですが見[み]つかりません。\nA: 二[に]階[かい]の文[ぶん]庫[こ]コーナーにあるかもしれません。\nB: ありがとうございます。行[い]ってみます。",
    translation: "A: Welcome. Are you looking for something? B: I'm looking for a new novel. A: A book by this author? B: Yes, but I can't find it. A: It might be in the paperback corner on the second floor. B: Thank you. I'll go and check.",
    questions: [
      {
        q: "What is the customer looking for?",
        choices: ["A magazine", "A new novel", "A textbook", "A comic book"],
        answerIndex: 1,
        explanation: "B says 新[あたら]しい小[しょう]説[せつ]を探[さが]しています — looking for a new novel.",
      },
      {
        q: "Why does B need help?",
        choices: ["The store is closing", "He cannot find the book", "The book is sold out", "He forgot the title"],
        answerIndex: 1,
        explanation: "B says 見[み]つかりません — cannot find it.",
      },
      {
        q: "Where does the clerk suggest the book may be?",
        choices: ["First floor entrance", "Second floor paperback corner", "Third floor café", "Behind the counter"],
        answerIndex: 1,
        explanation: "A says 二[に]階[かい]の文[ぶん]庫[こ]コーナーにあるかもしれません — it may be on the second-floor paperback corner.",
      },
    ],
    estMinutes: 3,
    tags: ["shopping", "books"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-68 — Talking about a festival preparation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-68",
    title: "Talking About a Festival Preparation",
    level: "N3",
    context: "Two committee members discussing an upcoming festival",
    text: "A: お祭[まつ]りの準[じゅん]備[び]はどうですか。\nB: 屋[や]台[たい]がまだ足[た]りません。\nA: 近[ちか]くの店[みせ]に頼[たの]んでみましょう。\nB: いいですね。お神[みこ]輿[し]の順[じゅん]番[ばん]も決[き]めないといけません。\nA: 来週[らいしゅう]の会[かい]議[ぎ]で話[はな]しましょう。\nB: 分[わ]かりました。",
    translation: "A: How is the festival preparation going? B: We still don't have enough stalls. A: Let's ask the nearby shops. B: Good idea. We also have to decide the order of the portable shrine. A: Let's talk about it at next week's meeting. B: Understood.",
    questions: [
      {
        q: "What is still lacking for the festival?",
        choices: ["Volunteers", "Stalls", "Money", "Time"],
        answerIndex: 1,
        explanation: "B says 屋[や]台[たい]がまだ足[た]りません — stalls are still insufficient.",
      },
      {
        q: "What else still needs to be decided?",
        choices: ["The date of the festival", "The number of guests", "The order of the portable shrine", "The food menu"],
        answerIndex: 2,
        explanation: "B says お神[みこ]輿[し]の順[じゅん]番[ばん]も決[き]めないといけません — the order of the portable shrine must be decided.",
      },
      {
        q: "When will they discuss it further?",
        choices: ["Tonight", "Tomorrow morning", "Next week's meeting", "After the festival"],
        answerIndex: 2,
        explanation: "A says 来週[らいしゅう]の会[かい]議[ぎ]で話[はな]しましょう — let's talk at next week's meeting.",
      },
    ],
    estMinutes: 4,
    tags: ["festival", "community"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-69 — At the vet
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-69",
    title: "At the Vet",
    level: "N3",
    context: "A pet owner and a veterinarian examining a dog",
    text: "A: ワンちゃんの様[よう]子[す]はどうですか。\nB: 昨日[きのう]からご飯[はん]を食[た]べないんです。\nA: 少[すこ]し熱[ねつ]がありますね。\nB: 何[なに]か病[びょう]気[き]でしょうか。\nA: 詳[くわ]しくは検[けん]査[さ]が必要[ひつよう]です。\nB: じゃあ、お願[ねが]いします。",
    translation: "A: How is the dog doing? B: Since yesterday it hasn't been eating. A: It has a slight fever. B: Could it be some illness? A: For details, a check-up is necessary. B: Then please do it.",
    questions: [
      {
        q: "What is the problem with the dog?",
        choices: ["It is limping", "It isn't eating", "It is barking a lot", "It lost hair"],
        answerIndex: 1,
        explanation: "B says 昨日[きのう]からご飯[はん]を食[た]べないんです — it hasn't been eating since yesterday.",
      },
      {
        q: "What symptom does the vet find?",
        choices: ["A slight fever", "A broken leg", "A skin rash", "A cough"],
        answerIndex: 0,
        explanation: "The vet says 少[すこ]し熱[ねつ]がありますね — it has a slight fever.",
      },
      {
        q: "What does the vet recommend?",
        choices: ["Rest at home", "A change of food", "A detailed examination", "Medicine only"],
        answerIndex: 2,
        explanation: "The vet says 詳[くわ]しくは検[けん]査[さ]が必要[ひつよう]です — a detailed check-up is needed.",
      },
    ],
    estMinutes: 4,
    tags: ["pets", "medical"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-70 — Discussing a job offer
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-70",
    title: "Discussing a Job Offer",
    level: "N3",
    context: "A friend congratulating another who has a job offer",
    text: "A: 内[ない]定[てい]出[だ]しでした。おめでとうございます。\nB: ありがとうございます。でも迷[まよ]っています。\nA: どうしてですか。\nB: 給[きゅう]料[りょう]はいいんですが、転[てん]勤[きん]が多[おお]いんです。\nA: ご家[か]族[ぞく]のことも考[かんが]えますよね。\nB: はい、もう少[すこ]し考[かんが]えます。",
    translation: "A: It was an unofficial offer. Congratulations. B: Thank you. But I'm hesitating. A: Why is that? B: The salary is good, but transfers are frequent. A: You also have to think of your family. B: Yes, I'll think a little more.",
    questions: [
      {
        q: "What news did B receive?",
        choices: ["A job offer", "A salary cut", "A transfer order", "A promotion"],
        answerIndex: 0,
        explanation: "A says 内[ない]定[てい]出[だ]しでした — it was an unofficial job offer.",
      },
      {
        q: "Why is B hesitating?",
        choices: ["Low salary", "Long commute", "Frequent transfers", "Bad coworkers"],
        answerIndex: 2,
        explanation: "B says 転[てん]勤[きん]が多[おお]いんです — transfers are frequent.",
      },
      {
        q: "What does A point out?",
        choices: ["Money is everything", "Family must be considered", "Transfers are good", "The job is perfect"],
        answerIndex: 1,
        explanation: "A says ご家[か]族[ぞく]のことも考[かんが]えますよね — one must also consider family.",
      },
    ],
    estMinutes: 4,
    tags: ["work", "career"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-71 — At the photo studio
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-71",
    title: "At the Photo Studio",
    level: "N3",
    context: "A customer and a photographer taking an ID photo",
    text: "A: 今日[きょう]は証[しょう]明[めい]写[しゃ]真[しん]をお撮[と]りですね。\nB: はい。就[しゅう]職[しょく]活[かつ]動[どう]で使[つか]います。\nA: 笑[え]顔[がお]を少[すこ]し意[い]識[しき]してください。\nB: こうですか。\nA: はい。では撮[と]ります。\nB: お願[ねが]いします。",
    translation: "A: You're here to take an ID photo today. B: Yes. I'll use it for job hunting. A: Please be a little conscious of your smile. B: Like this? A: Yes. I'll take it now. B: Please go ahead.",
    questions: [
      {
        q: "What kind of photo is being taken?",
        choices: ["Family portrait", "ID photo", "Wedding photo", "Passport baby photo"],
        answerIndex: 1,
        explanation: "A says 証[しょう]明[めい]写[しゃ]真[しん]をお撮[と]り — taking an ID/official photo.",
      },
      {
        q: "What will the photo be used for?",
        choices: ["A passport renewal", "Job hunting", "A school yearbook", "A magazine cover"],
        answerIndex: 1,
        explanation: "B says 就[しゅう]職[しょく]活[かつ]動[どう]で使[つか]います — will use it for job hunting.",
      },
      {
        q: "What does the photographer ask the customer to do?",
        choices: ["Look down", "Be aware of a smile", "Close the eyes", "Turn sideways"],
        answerIndex: 1,
        explanation: "A says 笑[え]顔[がお]を少[すこ]し意[い]識[しき]してください — please be conscious of smiling a little.",
      },
    ],
    estMinutes: 3,
    tags: ["services", "photo"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-72 — Talking about a cooking class
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-72",
    title: "Talking About a Cooking Class",
    level: "N3",
    context: "Two friends discussing starting a cooking class together",
    text: "A: 来[ら]週[しゅう]から料[りょう]理[り]教[きょう]室[しつ]に通[かよ]うんです。\nB: どんな料[りょう]理[り]を習[なら]うんですか。\nA: 和[わ]食[しょく]を基[き]本[ほん]から習[なら]います。\nB: 私[わたし]も興[きょう]味[み]があります。\nA: じゃあ、一[いっ]緒[しょ]にどうですか。\nB: ええ、ぜひお願[ねが]いします。",
    translation: "A: Starting next week I'll attend a cooking class. B: What kind of cooking will you learn? A: I'll learn Japanese food from the basics. B: I'm also interested. A: Then how about joining together? B: Yes, please let me.",
    questions: [
      {
        q: "When will A start the cooking class?",
        choices: ["This week", "Next week", "Next month", "Already started"],
        answerIndex: 1,
        explanation: "A says 来[ら]週[しゅう]から通[かよ]うんです — starting next week.",
      },
      {
        q: "What kind of cuisine will be taught?",
        choices: ["French cuisine", "Italian pasta", "Japanese food basics", "Chinese stir-fry"],
        answerIndex: 2,
        explanation: "A says 和[わ]食[しょく]を基[き]本[ほん]から習[なら]います — will learn Japanese food from basics.",
      },
      {
        q: "What does A propose to B?",
        choices: ["To teach B at home", "To join together", "To skip the class", "To switch teachers"],
        answerIndex: 1,
        explanation: "A says 一[いっ]緒[しょ]にどうですか — how about joining together.",
      },
    ],
    estMinutes: 3,
    tags: ["hobby", "cooking"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-73 — At the security office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-73",
    title: "At the Security Office",
    level: "N3",
    context: "A resident reporting a stolen car to security staff",
    text: "A: すみません、車[くるま]が盗[ぬす]まれたんです。\nB: いつ気[き]づきましたか。\nA: 今朝[けさ]駐[ちゅう]車[しゃ]場[じょう]に行[い]ったときです。\nB: 盗[とう]難[なん]届[とどけ]を作[つく]りましょう。\nA: どんな書[しょ]類[るい]が要[い]りますか。\nB: 運[うん]転[てん]免[めん]許[きょ]証[しょう]と車[しゃ]検[けん]証[しょう]です。",
    translation: "A: Excuse me, my car was stolen. B: When did you notice? A: This morning when I went to the parking lot. B: Let's file a theft report. A: What documents are needed? B: A driver's license and the vehicle inspection certificate.",
    questions: [
      {
        q: "What is the resident reporting?",
        choices: ["A lost wallet", "A stolen car", "A broken window", "A noisy neighbor"],
        answerIndex: 1,
        explanation: "A says 車[くるま]が盗[ぬす]まれたんです — the car was stolen.",
      },
      {
        q: "When did A notice the theft?",
        choices: ["Last night", "This morning", "Yesterday afternoon", "Just now"],
        answerIndex: 1,
        explanation: "A says 今朝[けさ]駐[ちゅう]車[しゃ]場[じょう]に行[い]ったとき — when going to the parking lot this morning.",
      },
      {
        q: "Which documents does B ask for?",
        choices: ["A passport and ID", "A license and vehicle inspection certificate", "An insurance card and receipt", "A lease contract"],
        answerIndex: 1,
        explanation: "B says 運[うん]転[てん]免[めん]許[きょ]証[しょう]と車[しゃ]検[けん]証[しょう] — a driver's license and vehicle inspection certificate.",
      },
      {
        q: "What will B prepare?",
        choices: ["A repair estimate", "A theft report", "A parking ticket", "A new key"],
        answerIndex: 1,
        explanation: "B says 盗[とう]難[なん]届[とどけ]を作[つく]りましょう — let's make a theft report.",
      },
    ],
    estMinutes: 5,
    tags: ["emergency", "report"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-74 — Discussing a neighborhood watch
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-74",
    title: "Discussing a Neighborhood Watch",
    level: "N3",
    context: "Two neighbors talking about safety in their area",
    text: "A: この辺[へん]は夜[よる]が暗[くら]いですね。\nB: そうですね。街[がい]灯[とう]が少[すく]ないです。\nA: 防[ぼう]犯[はん]パトロールを始[はじ]めませんか。\nB: いい考[かんが]えですね。\nA: 月[つき]に二[ふた]回[かい]ぐらいでどうですか。\nB: 賛[さん]成[せい]です。住[じゅう]民[みん]に声[こえ]をかけましょう。",
    translation: "A: It's dark around here at night. B: Yes. There are few street lights. A: Shall we start a crime-prevention patrol? B: That's a good idea. A: How about around twice a month? B: I agree. Let's call out to the residents.",
    questions: [
      {
        q: "What problem do they mention about the area?",
        choices: ["Too much trash", "Few street lights", "Heavy traffic", "Loud music"],
        answerIndex: 1,
        explanation: "B says 街[がい]灯[とう]が少[すく]ないです — there are few street lights.",
      },
      {
        q: "What does A propose?",
        choices: ["Installing new lights", "A crime-prevention patrol", "Hiring a guard", "Moving away"],
        answerIndex: 1,
        explanation: "A says 防[ぼう]犯[はん]パトロールを始[はじ]めませんか — shall we start a crime-prevention patrol.",
      },
      {
        q: "How often does A suggest the patrol?",
        choices: ["Once a week", "Twice a month", "Once a month", "Every night"],
        answerIndex: 1,
        explanation: "A says 月[つき]に二[ふた]回[かい]ぐらいでどうですか — about twice a month.",
      },
      {
        q: "What will they do next?",
        choices: ["Call the police", "Talk to the residents", "Buy flashlights", "Hold a festival"],
        answerIndex: 1,
        explanation: "B says 住[じゅう]民[みん]に声[こえ]をかけましょう — let's reach out to the residents.",
      },
    ],
    estMinutes: 4,
    tags: ["community", "safety"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-75 — At the wedding planner
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-75",
    title: "At the Wedding Planner",
    level: "N3",
    context: "A couple and a planner discussing wedding venue options",
    text: "A: 披[ひ]宴[えん]の予[よ]算[さん]はどのくらいですか。\nB: 百[ひゃく]万[まん]円[えん]ぐらいを考[かんが]えています。\nA: 招[しょう]待[たい]客[きゃく]はおよそ何[なん]名[めい]ですか。\nB: 八[はち]十[じゅう]名[めい]ぐらいです。\nA: では、この会[かい]場[じょう]がお勧[すす]めです。\nB: とても良[よ]さそうです。",
    translation: "A: About how much is your reception budget? B: We're thinking around one million yen. A: Roughly how many guests? B: About eighty. A: Then I recommend this venue. B: It looks very nice.",
    questions: [
      {
        q: "What is the couple's budget?",
        choices: ["About 500,000 yen", "About 1,000,000 yen", "About 3,000,000 yen", "About 5,000,000 yen"],
        answerIndex: 1,
        explanation: "B says 百[ひゃく]万[まん]円[えん]ぐらい — around one million yen.",
      },
      {
        q: "How many guests are expected?",
        choices: ["About 30", "About 50", "About 80", "About 120"],
        answerIndex: 2,
        explanation: "B says 八[はち]十[じゅう]名[めい]ぐらい — about eighty people.",
      },
      {
        q: "What does the planner do at the end?",
        choices: ["Asks for more money", "Recommends a venue", "Cancels the booking", "Suggests fewer guests"],
        answerIndex: 1,
        explanation: "A says この会[かい]場[じょう]がお勧[すす]めです — I recommend this venue.",
      },
    ],
    estMinutes: 4,
    tags: ["event", "planning"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-76 — Talking about a fitness goal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-76",
    title: "Talking About a Fitness Goal",
    level: "N3",
    context: "Two friends chatting about a daily exercise routine",
    text: "A: 今[こん]月[げつ]から腹[ふっ]筋[きん]を毎[まい]日[にち]やっています。\nB: すごいですね。どのくらい続[つづ]いていますか。\nA: もう二[に]週[しゅう]間[かん]です。\nB: 何[なに]か変[か]わりましたか。\nA: 少[すこ]しお腹[なか]が引[ひ]き締[し]まりました。\nB: 私[わたし]も始[はじ]めようかな。",
    translation: "A: Since this month I do sit-ups every day. B: That's great. How long have you kept it up? A: Already two weeks. B: Has anything changed? A: My stomach has tightened a little. B: Maybe I should start too.",
    questions: [
      {
        q: "What exercise does A do daily?",
        choices: ["Running", "Sit-ups", "Push-ups", "Stretching"],
        answerIndex: 1,
        explanation: "A says 腹[ふっ]筋[きん]を毎[まい]日[にち]やっています — doing sit-ups every day.",
      },
      {
        q: "How long has A been doing it?",
        choices: ["Three days", "One week", "Two weeks", "One month"],
        answerIndex: 2,
        explanation: "A says もう二[に]週[しゅう]間[かん]です — already two weeks.",
      },
      {
        q: "What result has A noticed?",
        choices: ["Lost weight overall", "Stomach tightened a little", "Arms got stronger", "Nothing at all"],
        answerIndex: 1,
        explanation: "A says 少[すこ]しお腹[なか]が引[ひ]き締[し]まりました — the stomach tightened a little.",
      },
    ],
    estMinutes: 3,
    tags: ["health", "goal"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-77 — At the art gallery
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-77",
    title: "At the Art Gallery",
    level: "N3",
    context: "Two visitors discussing a piece of modern art",
    text: "A: この作[さく]品[ひん]は現[げん]代[だい]美[び]術[じゅつ]ですね。\nB: 作者[さくしゃ]はどなたですか。\nA: 山[やま]田[だ]先[せん]生[せい]です。\nB: 色[いろ]の使[つか]い方[かた]が面[おも]白[しろ]いですね。\nA: 特[とく]にこの青[あお]が目[め]を引[ひ]きます。\nB: 私[わたし]も好[す]きです。",
    translation: "A: This work is modern art. B: Who is the artist? A: Professor Yamada. B: The use of color is interesting. A: Especially this blue catches the eye. B: I like it too.",
    questions: [
      {
        q: "What kind of work are they viewing?",
        choices: ["Classical sculpture", "Modern art", "A traditional painting", "An ancient pot"],
        answerIndex: 1,
        explanation: "A says 現[げん]代[だい]美[び]術[じゅつ]ですね — it is modern art.",
      },
      {
        q: "Who is the artist?",
        choices: ["Professor Tanaka", "Professor Yamada", "Professor Sato", "Professor Suzuki"],
        answerIndex: 1,
        explanation: "A says 山[やま]田[だ]先[せん]生[せい]です — Professor Yamada.",
      },
      {
        q: "What does A find especially striking?",
        choices: ["The frame", "The blue color", "The size", "The price"],
        answerIndex: 1,
        explanation: "A says 特[とく]にこの青[あお]が目[め]を引[ひ]きます — especially this blue catches the eye.",
      },
    ],
    estMinutes: 3,
    tags: ["art", "culture"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-78 — Discussing a savings plan
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-78",
    title: "Discussing a Savings Plan",
    level: "N3",
    context: "Two friends talking about saving for a trip",
    text: "A: 来[らい]年[ねん]の旅[たび]行[こう]のために貯[ちょ]金[きん]しようと思[おも]います。\nB: 毎[まい]月[つき]いくら貯[た]めるんですか。\nA: 三[さん]万[まん]円[えん]ぐらいです。\nB: 大[たい]変[へん]じゃないですか。\nA: 昼[ひる]ご飯[はん]を節[せつ]約[やく]すれば大丈夫[だいじょうぶ]です。\nB: そうですね。私[わたし]も真[ま]似[ね]してみます。",
    translation: "A: I'm thinking of saving money for next year's trip. B: How much do you save each month? A: Around 30,000 yen. B: Isn't that tough? A: It's fine if I cut back on lunch. B: True. I'll try to copy you.",
    questions: [
      {
        q: "What is A saving for?",
        choices: ["A new car", "Next year's trip", "A wedding", "A house"],
        answerIndex: 1,
        explanation: "A says 来[らい]年[ねん]の旅[たび]行[こう]のため — for next year's trip.",
      },
      {
        q: "How much does A save per month?",
        choices: ["10,000 yen", "30,000 yen", "50,000 yen", "100,000 yen"],
        answerIndex: 1,
        explanation: "A says 三[さん]万[まん]円[えん]ぐらいです — about 30,000 yen.",
      },
      {
        q: "How will A manage the saving?",
        choices: ["Working a second job", "Cutting back on lunch", "Selling old clothes", "Borrowing from family"],
        answerIndex: 1,
        explanation: "A says 昼[ひる]ご飯[はん]を節[せつ]約[やく]すれば大丈夫[だいじょうぶ] — fine if lunch is economized.",
      },
      {
        q: "What does B decide at the end?",
        choices: ["To lend A money", "To try the same approach", "To skip the trip", "To save less"],
        answerIndex: 1,
        explanation: "B says 私[わたし]も真[ま]似[ね]してみます — I'll try imitating it too.",
      },
    ],
    estMinutes: 4,
    tags: ["money", "planning"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-79 — At the phone shop
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-79",
    title: "At the Phone Shop",
    level: "N3",
    context: "A customer and a technician discussing a broken phone",
    text: "A: このスマホは壊[こわ]れたんですか。\nB: 画面[がめん]が映[うつ]らないんです。\nA: 中[なか]を確[たし]かめてみましょう。\nB: データは消[け]えませんか。\nA: 大[だい]丈[じょう]夫[ぶ]です。そのまま残[のこ]ります。\nB: じゃあ、お願[ねが]いします。",
    translation: "A: Is this smartphone broken? B: The screen doesn't display anything. A: Let me check inside. B: Will the data not disappear? A: It's fine. It will remain as is. B: Then please go ahead.",
    questions: [
      {
        q: "What is the problem with the phone?",
        choices: ["No sound", "Screen won't display", "Battery drains fast", "Camera is broken"],
        answerIndex: 1,
        explanation: "B says 画面[がめん]が映[うつ]らないんです — the screen doesn't show anything.",
      },
      {
        q: "What is B worried about?",
        choices: ["The cost", "The wait time", "Losing the data", "A replacement phone"],
        answerIndex: 2,
        explanation: "B asks データは消[け]えませんか — will the data not disappear.",
      },
      {
        q: "What does A reassure B about?",
        choices: ["Free repair", "Same-day service", "Data will remain", "A free case"],
        answerIndex: 2,
        explanation: "A says そのまま残[のこ]ります — the data will remain as is.",
      },
    ],
    estMinutes: 4,
    tags: ["technology", "services"],
  },
  // ───────────────────────────────────────────────────────────
  // l-n3-80 — Talking about a cultural exchange
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n3-80",
    title: "Talking About a Cultural Exchange",
    level: "N3",
    context: "Two students discussing an upcoming cultural exchange event",
    text: "A: 来週[らいしゅう]、文[ぶん]化[か]交[こう]流[りゅう]会[かい]があるんです。\nB: どこの国[くに]の人[ひと]が来[き]ますか。\nA: ブラジルやフランスからです。\nB: 楽[たの]しそうですね。\nA: 是[ぜ]非[ひ]参[さん]加[か]してください。\nB: ええ、行[い]きたいです。",
    translation: "A: Next week there is a cultural exchange gathering. B: People from which countries are coming? A: From Brazil and France. B: Sounds fun. A: Please definitely join. B: Yes, I want to go.",
    questions: [
      {
        q: "What event is happening next week?",
        choices: ["A sports festival", "A cultural exchange gathering", "A school trip", "A graduation ceremony"],
        answerIndex: 1,
        explanation: "A says 文[ぶん]化[か]交[こう]流[りゅう]会[かい]がある — there is a cultural exchange gathering.",
      },
      {
        q: "Which countries are mentioned as sending people?",
        choices: ["Brazil and France", "China and Korea", "Italy and Spain", "America and Canada"],
        answerIndex: 0,
        explanation: "A says ブラジルやフランスからです — from Brazil and France.",
      },
      {
        q: "What does A ask B to do?",
        choices: ["Bring food", "Translate a speech", "Definitely participate", "Take photos"],
        answerIndex: 2,
        explanation: "A says 是[ぜ]非[ひ]参[さん]加[か]してください — please definitely participate.",
      },
    ],
    estMinutes: 3,
    tags: ["culture", "event"],
  },
];
