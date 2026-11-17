import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N4-level reading passages with comprehension questions.

export const readingN4D: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n4-31 — 就職の面接の経験 (A job interview experience)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-31",
    title: "就職[しゅうしょく]の面接[めんせつ]の経験[けいけん]",
    titleReading: "しゅうしょくのめんせつのけいけん",
    level: "N4",
    summary: "A university student prepares for and attends their first real job interview at a Tokyo company.",
    estMinutes: 7,
    tags: ["work", "job interview", "experience"],
    body: [
      "私[わたし]は来年[らいねん]大学[だいがく]を卒業[そつぎょう]するので、今年[ことし]の秋[あき]から就職活動[しゅうしょくかつどう]を始[はじ]めました。多[おお]くの会社[かいしゃ]の説明会[せつめいかい]に行[い]きました。その中[なか]の一[ひと]つの会社[かいしゃ]から、面接[めんせつ]の案内[あんない]が来[き]ました。とても嬉[うれ]しかったですが、同時[どうじ]に緊張[きんちょう]しました。",
      "面接[めんせつ]の前[まえ]に、会社[かいしゃ]についてよく調[しら]べました。ホームページを見[み]たり、先輩[せんぱい]に話[はなし]を聞[き]いたりしました。自分[じぶん]の強[つよ]みや弱[よわ]みを紙[かみ]に書[か]いて、整理[せいり]しました。履歴書[りれきしょ]も何度[なんど]も直[なお]しました。服装[ふくそう]も新[あたら]しく準備[じゅんび]して、鏡[かがみ]の前[まえ]で挨拶[あいさつ]の練習[れんしゅう]をしました。",
      "面接[めんせつ]の日[ひ]、私[わたし]は三十分[さんじゅっぷん]ぐらい前[まえ]に会社[かいしゃ]に着[つ]きました。受付[うけつけ]で名前[なまえ]を言[い]って、待合室[まちあいしつ]で待[ま]ちました。他[ほか]の学生[がくせい]もたくさんいて、みんな緊張[きんちょう]しているようでした。私[わたし]の番[ばん]が来[き]た時[とき]、心[こころ]がドキドキしました。深[ふか]く息[いき]を吸[す]って、部屋[へや]に入[はい]りました。",
      "面接官[めんせつかん]は三人[さんにん]いて、丁寧[ていねい]に質問[しつもん]してくれました。「自己紹介[じこしょうかい]をしてください」と言[い]われたので、練習[れんしゅう]した通[とお]りに話[はな]しました。志望動機[しぼうどうき]や学生時代[がくせいじだい]の経験[けいけん]についても聞[き]かれました。うまく答[こた]えられなかった部分[ぶぶん]もありましたが、正直[しょうじき]に話[はな]しました。",
      "一週間[いっしゅうかん]後[ご]、会社[かいしゃ]から採用[さいよう]の連絡[れんらく]が来[き]ました。とても嬉[うれ]しかったです。面接[めんせつ]は緊張[きんちょう]するものですが、準備[じゅんび]をすることで自信[じしん]がつくことが分[わ]かりました。この経験[けいけん]は、これからの社会人[しゃかいじん]生活[せいかつ]に役立[やくだ]つと思[おも]います。"
    ],
    translation: [
      "I will graduate from university next year, so I started job hunting this autumn. I went to information sessions at many companies. Among them, one company sent me an interview invitation. I was very happy, but at the same time nervous.",
      "Before the interview, I researched the company thoroughly. I looked at their website and asked seniors about their experiences. I wrote my strengths and weaknesses on paper and organized them. I revised my resume many times. I also prepared new clothes and practiced greetings in front of a mirror.",
      "On the day of the interview, I arrived at the company about thirty minutes early. I told the receptionist my name and waited in the waiting room. There were many other students, and everyone seemed nervous. When my turn came, my heart was pounding. I took a deep breath and entered the room.",
      "There were three interviewers, and they asked questions politely. They told me to introduce myself, so I spoke just as I had practiced. They also asked about my motivation for applying and my experiences as a student. There were parts I could not answer well, but I spoke honestly.",
      "A week later, the company contacted me to say I was hired. I was very happy. Interviews are nerve-wracking, but I learned that preparation gives confidence. I think this experience will be useful in my working life ahead."
    ],
    questions: [
      {
        q: "When did the writer start job hunting?",
        choices: ["This spring", "This autumn", "Last year", "Next year"],
        answerIndex: 1,
        explanation: "The writer started job hunting this autumn (今年の秋から就職活動を始めました)."
      },
      {
        q: "What did the writer do before the interview?",
        choices: ["Only bought new clothes", "Researched the company and revised the resume many times", "Traveled to the company hometown", "Asked family to attend"],
        answerIndex: 1,
        explanation: "The writer researched the company, wrote strengths/weaknesses, revised the resume many times, and prepared clothes."
      },
      {
        q: "How early did the writer arrive on the interview day?",
        choices: ["About 10 minutes", "About 30 minutes", "About 1 hour", "About 5 minutes"],
        answerIndex: 1,
        explanation: "The writer arrived about thirty minutes early (三十分ぐらい前に着きました)."
      },
      {
        q: "How many interviewers were there?",
        choices: ["One", "Two", "Three", "Four"],
        answerIndex: 2,
        explanation: "There were three interviewers (面接官は三人いて)."
      },
      {
        q: "What did the writer learn from this experience?",
        choices: ["Interviews are easy", "Preparation gives confidence", "Companies never hire students", "Clothes do not matter"],
        answerIndex: 1,
        explanation: "The writer learned that preparation gives confidence (準備をすることで自信がつく)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-32 — 日本の教育制度 (The Japanese education system)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-32",
    title: "日本[にほん]の教育[きょういく]制度[せいど]",
    titleReading: "にほんのきょういくせいど",
    level: "N4",
    summary: "An overview of the 6-3-3-4 Japanese school system, its good points and its exam-focused challenges.",
    estMinutes: 8,
    tags: ["culture", "education", "school"],
    body: [
      "日本[にほん]の教育[きょういく]制度[せいど]は、六・三・三・四制[ろくさんさんよんせい]という仕組[しく]みになっています。小学校[しょうがっこう]が六年[ろくねん]、中学校[ちゅうがっこう]が三年[さんねん]、高校[こうこう]が三年[さんねん]、大学[だいがく]が四年[よねん]です。小学校[しょうがっこう]と中学校[ちゅうがっこう]の九年[きゅうねん]間[かん]は義務教育[ぎむきょういく]で、誰[だれ]でも無償[むしょう]で学[まな]ぶことができます。",
      "小学校[しょうがっこう]では、国語[こくご]や算数[さんすう]などの基礎[きそ]を学[まな]びます。また、給食[きゅうしょく]という昼[ひる]ご飯[はん]が学校[がっこう]から出[で]されます。栄養[えいよう]のバランスが考[かんが]えられていて、とても健康的[けんこうてき]です。掃除[そうじ]も子[こ]どもたちが自分[じぶん]でするのが日本[にほん]の特徴[とくちょう]です。こうした習慣[しゅうかん]が、協力[きょうりょく]心[しん]を育[そだ]てます。",
      "中学校[ちゅうがっこう]では、勉強[べんきょう]が少[すこ]し難[むずか]しくなります。英語[えいご]が本格的[ほんかくてき]に始[はじ]まるのもこの時期[じき]です。また、部活動[ぶかつどう]が盛[さか]んです。体育会系[たいいくかいけい]や文化系[ぶんかけい]など、様々[さまざま]なクラブがあります。部活[ぶかつ]を通[とお]して、礼儀[れいぎ]や協調性[きょうちょうせい]を学[まな]びます。",
      "高校[こうこう]は義務教育[ぎむきょういく]ではありませんが、約[やく]九十八[きゅうじゅうはち]パーセントの学生[がくせい]が進学[しんがく]します。そして、三年[さんねん]間[かん]勉強[べんきょう]した後[あと]、大学[だいがく]入試[にゅうし]を受[う]けます。競争[きょうそう]が激[はげ]しいので、塾[じゅく]に通[かよ]う学生[がくせい]が多[おお]いです。受験[じゅけん]の準備[じゅんび]は大変[たいへん]ですが、目標[もくひょう]に向[む]かって努力[どりょく]する大切[たいせつ]さも学[まな]べます。",
      "日本[にほん]の教育[きょういく]制度[せいど]には良[よ]い点[てん]と課題[かだい]があります。全員[ぜんいん]が平等[びょうどう]に教育[きょういく]を受[う]けられるのは素晴[すば]らしいです。しかし、試験[しけん]ばかりに気[き]を取[と]られると、創造力[そうぞうりょく]が育[そだ]たないかもしれません。これからの教育[きょういく]には、もっと多様[たよう]な学[まな]び方[かた]が必要[ひつよう]だと思[おも]います。"
    ],
    translation: [
      "Japan's education system is structured as a 6-3-3-4 system. Elementary school is six years, junior high is three years, high school is three years, and university is four years. The nine years of elementary and junior high school are compulsory education, and anyone can study for free.",
      "In elementary school, students learn basics such as Japanese and arithmetic. Also, a lunch called kyushoku is provided by the school. Nutrition is balanced, and it is very healthy. Cleaning done by the children themselves is a characteristic of Japan. Such habits foster a spirit of cooperation.",
      "In junior high school, studying becomes a little harder. English also begins in earnest at this time. Also, club activities are popular. There are various clubs, such as sports and culture clubs. Through clubs, students learn etiquette and cooperation.",
      "High school is not compulsory, but about ninety-eight percent of students go on to high school. Then, after studying for three years, they take university entrance exams. Because competition is fierce, many students go to cram schools. Exam preparation is hard, but students also learn the importance of working hard toward a goal.",
      "Japan's education system has good points and challenges. It is wonderful that everyone can receive education equally. However, if we focus only on exams, creativity might not develop. I think education in the future needs more diverse ways of learning."
    ],
    questions: [
      {
        q: "How many years is compulsory education in Japan?",
        choices: ["6 years", "9 years", "12 years", "16 years"],
        answerIndex: 1,
        explanation: "Elementary (6) plus junior high (3) makes 9 years of compulsory education."
      },
      {
        q: "What is special about lunch at Japanese elementary schools?",
        choices: ["Students bring their own bento", "The school provides a balanced lunch called kyushoku", "There is no lunch time", "Only rice is served"],
        answerIndex: 1,
        explanation: "Schools provide a nutritionally balanced lunch called kyushoku (給食)."
      },
      {
        q: "What begins in earnest in junior high school?",
        choices: ["Calligraphy", "English", "Cooking", "Driving"],
        answerIndex: 1,
        explanation: "English begins in earnest at this time (英語が本格的に始まる)."
      },
      {
        q: "Approximately what percentage of students go to high school?",
        choices: ["About 50%", "About 70%", "About 98%", "About 30%"],
        answerIndex: 2,
        explanation: "About ninety-eight percent of students go on to high school (約九十八パーセント)."
      },
      {
        q: "What does the writer think is needed for future education?",
        choices: ["More exams", "Longer school hours", "More diverse ways of learning", "Higher tuition"],
        answerIndex: 2,
        explanation: "The writer thinks more diverse ways of learning are needed (もっと多様な学び方が必要)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-33 — ボランティア活動の経験 (A volunteer activity)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-33",
    title: "ボランティア活動[かつどう]の経験[けいけん]",
    titleReading: "ぼらんていかつどうのけいけん",
    level: "N4",
    summary: "A high schooler joins a local volunteer group cleaning parks and visiting a nursing home, and learns the joy of helping.",
    estMinutes: 6,
    tags: ["community", "volunteering", "experience"],
    body: [
      "私[わたし]は高校[こうこう]生[せい]の時[とき]から、地元[じもと]のボランティア活動[かつどう]に参加[さんか]しています。きっかけは、駅[えき]の掲示板[けいじばん]に貼[は]ってあったポスターでした。「町[まち]をきれいにしよう」と書[か]いてありました。最初[さいしょ]は一度[いちど]だけのつもりでしたが、楽[たの]しくて続[つづ]けています。",
      "毎月[まいつき]一回[いっかい]、日曜[にちよう]の朝[あさ]に公園[こうえん]の掃除[そうじ]をします。ゴミ袋[ぶくろ]と手袋[てぶくろ]を持[も]って集[あつ]まります。最初[さいしょ]は、こんなにゴミが落[お]ちているとは思[おも]いませんでした。缶[かん]やビン、たばこの吸殻[すいがら]など、色[いろ]いろなものを見[み]つけます。皆[みな]で協力[きょうりょく]すると、一時間[いちじかん]ぐらいで公園[こうえん]がきれいになります。",
      "掃除[そうじ]だけではなく、月[つき]に二回[にかい]、老人[ろうじん]ホームにも行[い]きます。お年[とし]寄[より]りと話[はな]したり、ゲームを一緒[いっしょ]にしたりします。あるおばあちゃんは、毎回[まいかい]私[わたし]の話[はなし]を楽[たの]しそうに聞[き]いてくれます。昔[むかし]の話[はなし]や戦争[せんそう]の体験[たいけん]を教[おし]えてもらうこともあります。とても勉強[べんきょう]になります。",
      "ボランティアを始[はじ]めて、色[いろ]いろなことを学[まな]びました。自分[じぶん]の住[す]む町[まち]を良[よ]くするのは、誰[だれ]かの仕事[しごと]ではなく、自分[じぶん]のことだと気[き]がつきました。また、人[ひと]のために時間[じかん]を使[つか]うと、自分[じぶん]も幸[しあわ]せになれることが分[わ]かりました。",
      "今[いま]では、友達[ともだち]も二人[ふたり]一緒[いっしょ]に参加[さんか]するようになりました。これからも続[つづ]けていきたいです。将来[しょうらい]、大[おお]きな会社[かいしゃ]に入[はい]っても、地域[ちいき]のために何[なに]かをしたいです。ボランティアは、人[ひと]と人[ひと]を繋[つな]ぐ大切[たいせつ]な活動[かつどう]だと思[おも]います。"
    ],
    translation: [
      "Since I was a high school student, I have been participating in local volunteer activities. The trigger was a poster on the station bulletin board. It said \"Let's make our town clean.\" At first I intended to do it only once, but it was fun so I continued.",
      "Once a month, on Sunday morning, we clean the park. We gather with trash bags and gloves. At first, I did not think there was so much litter. We find cans, bottles, cigarette butts, and various things. When everyone cooperates, the park becomes clean in about an hour.",
      "Not only cleaning, but twice a month I also go to a nursing home. I talk with the elderly and play games together. One old lady happily listens to my stories every time. Sometimes she tells me about the past and her war experiences. It is very educational.",
      "By starting volunteering, I learned many things. I realized that improving one's town is not someone's job but one's own. Also, I learned that using time for others makes oneself happy too.",
      "Now, two of my friends have also started participating. I want to continue from now on. In the future, even if I enter a big company, I want to do something for the community. I think volunteering is an important activity that connects people."
    ],
    questions: [
      {
        q: "What was the trigger for starting volunteering?",
        choices: ["A friend's invitation", "A poster at the station", "A school assignment", "A TV program"],
        answerIndex: 1,
        explanation: "The trigger was a poster on the station bulletin board (駅の掲示板のポスター)."
      },
      {
        q: "How often do they clean the park?",
        choices: ["Every day", "Once a week", "Once a month", "Twice a year"],
        answerIndex: 2,
        explanation: "They clean the park once a month on Sunday morning (毎月一回、日曜の朝に)."
      },
      {
        q: "What does the writer do at the nursing home?",
        choices: ["Cook meals only", "Clean the rooms only", "Talk and play games with the elderly", "Teach English"],
        answerIndex: 2,
        explanation: "The writer talks with the elderly and plays games together (お年寄りと話したり、ゲームを一緒にしたり)."
      },
      {
        q: "What did the writer realize about improving the town?",
        choices: ["It is the government's job", "It is one's own responsibility", "It is impossible", "It costs too much"],
        answerIndex: 1,
        explanation: "The writer realized that improving the town is one's own responsibility (自分のことだと気がつきました)."
      },
      {
        q: "How many friends joined later?",
        choices: ["One", "Two", "Three", "None"],
        answerIndex: 1,
        explanation: "Two friends have also started participating (友達も二人一緒に参加するようになりました)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-34 — 現代の家族の形 (Modern family life)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-34",
    title: "現代[げんだい]の家族[かぞく]の形[かたち]",
    titleReading: "げんだいのかぞくのかたち",
    level: "N4",
    summary: "How Japanese family structures, gender roles, and communication habits have changed in modern times.",
    estMinutes: 7,
    tags: ["society", "family", "modern life"],
    body: [
      "昔[むかし]と比[くら]べると、日本[にほん]の家族[かぞく]の形[かたち]は変[か]わってきました。以前[いぜん]は三世代[さんせだい]で一緒[いっしょ]に暮[く]らす家族[かぞく]が多[おお]かったです。でも、今[いま]は核家族[かくかぞく]が一般的[いっぱんてき]です。独身[どくしん]で暮[く]らす人[ひと]や、子[こ]どものいない夫婦[ふうふ]も増[ふ]えています。",
      "現代[げんだい]では、父[ちち]と母[はは]両方[りょうほう]が働[はたら]く共働[ともばたら]きの家庭[かてい]が多[おお]いです。子[こ]どもは保育園[ほいくえん]や学童保育[がくどうほいく]に預[あず]けられます。親[おや]は仕事[しごと]と育児[いくじ]の両立[りょうりつ]に苦労[くろう]しています。特[とく]に帰[かえ]りが遅[おそ]い日[ひ]は、夕[ゆう]ご飯[はん]の準備[じゅんび]が大変[たいへん]です。",
      "コミュニケーションの方法[ほうほう]も変[か]わりました。家族[かぞく]が一緒[いっしょ]に食事[しょくじ]をする時間[じかん]は減[へ]っています。それぞれがスマートフォンを見[み]ながら過[す]ごすことも多[おお]いです。しかし、週末[しゅうまつ]にだけは、家族[かぞく]で食事[しょくじ]をする家庭[かてい]もあります。一緒[いっしょ]に食[た]べることで、会話[かいわ]が生[う]まれます。",
      "性別[せいべつ]の役割[やくわり]も変[か]わってきました。昔[むかし]は家事[かじ]は女性[じょせい]の仕事[しごと]とされていました。今[いま]は、男性[だんせい]も料理[りょうり]や掃除[そうじ]をするのが普通[ふつう]です。育児休業[いくじきゅうぎょう]を取[と]る父[ちち]親[おや]も増[ふ]えています。家族[かぞく]で協力[きょうりょく]し合[あ]うことが大切[たいせつ]です。",
      "家族[かぞく]の形[かたち]は変[か]わっても、家族[かぞく]の大切[たいせつ]さは変[か]わりません。お互[たが]いを支[ささ]え合[あ]う関係[かんけい]が最[もっと]も重要[じゅうよう]です。忙[いそが]しくても、時間[じかん]を作[つく]って家族[かぞく]と話[はな]すようにしたいです。小[ちい]さな会話[かいわ]の積[つ]み重[かさ]ねが、強[つよ]い家族[かぞく]を作[つく]ります。"
    ],
    translation: [
      "Compared to the past, the shape of Japanese families has changed. Previously, families where three generations lived together were common. But now, nuclear families are common. People living single and couples without children are also increasing.",
      "In modern times, families where both father and mother work are common. Children are placed in daycare or after-school care. Parents struggle to balance work and child-rearing. Especially on days when they return late, preparing dinner is hard.",
      "The way of communication has also changed. Time for families to eat together is decreasing. Each person often spends time looking at their smartphone. However, some families eat together on weekends. By eating together, conversation is born.",
      "Gender roles have also changed. In the past, housework was considered women's work. Now, it is normal for men to cook and clean. Fathers who take childcare leave are also increasing. Cooperating as a family is important.",
      "Even if the shape of families changes, the importance of family does not change. A relationship of supporting each other is most important. Even if busy, I want to make time to talk with my family. The accumulation of small conversations makes a strong family."
    ],
    questions: [
      {
        q: "What kind of family was common in the past in Japan?",
        choices: ["Nuclear families", "Single-person households", "Three-generation families", "Couples without children"],
        answerIndex: 2,
        explanation: "Three-generation families were common in the past (三世代で一緒に暮らす家族が多かった)."
      },
      {
        q: "What is common in modern Japanese families?",
        choices: ["Only the father works", "Both parents work (dual-income)", "Grandparents raise the children", "Children live alone"],
        answerIndex: 1,
        explanation: "Dual-income families where both parents work are common now (共働きの家庭が多い)."
      },
      {
        q: "What is decreasing in modern families?",
        choices: ["Smartphone use", "Time for families to eat together", "Daycare enrollment", "Work hours"],
        answerIndex: 1,
        explanation: "Time for families to eat together is decreasing (一緒に食事をする時間は減っています)."
      },
      {
        q: "What is increasing among fathers?",
        choices: ["Quitting jobs to stay home", "Taking childcare leave", "Refusing housework", "Working abroad"],
        answerIndex: 1,
        explanation: "Fathers taking childcare leave are increasing (育児休業を取る父親も増えています)."
      },
      {
        q: "What does the writer want to do even when busy?",
        choices: ["Work more overtime", "Make time to talk with family", "Buy a bigger house", "Move abroad"],
        answerIndex: 1,
        explanation: "The writer wants to make time to talk with family (時間を作って家族と話すようにしたい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-35 — 日本のコンビニ文化 (The convenience store culture in Japan)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-35",
    title: "日本[にほん]のコンビニ文化[ぶんか]",
    titleReading: "にほんのこんびにぶんか",
    level: "N4",
    summary: "Why Japanese convenience stores are special: products, services, recent trends, and concerns for 24-hour staff.",
    estMinutes: 6,
    tags: ["culture", "convenience store", "daily life"],
    body: [
      "日本[にほん]の町[まち]を歩[ある]くと、至[いた]る所[ところ]にコンビニがあります。全国[ぜんこく]に五万[ごまん]店以上[てんいじょう]あると言[い]われています。ほとんどの店[みせ]は二十四時間[にじゅうよじかん]営業[えいぎょう]しています。夜[よる]遅[おそ]くても、朝[あさ]早[はや]くても、必要[ひつよう]なものが買[か]えます。",
      "商品[しょうひん]の種類[しゅるい]がとても豊富[ほうふ]です。おにぎりやお弁当[べんとう]、パンなどの食[た]べ物[もの]から、飲[の]み物[もの]、雑誌[ざっし]、化粧品[けしょうひん]まで揃[そろ]っています。季節[きせつ]の商品[しょうひん]も人気[にんき]です。夏[なつ]はかき氷[ごおり]、冬[ふゆ]はおでんやホットスナックがあります。新[あたら]しい商品[しょうひん]が次[つぎ]々と登場[とうじょう]します。",
      "コンビニは買[か]い物[もの]だけではなく、色[いろ]いろなサービスを提供[ていきょう]しています。ATMでお金[かね]を出[だ]したり、コピーを取[と]ったりできます。公共[こうきょう]料金[りょうきん]の支払[しはら]いもできます。チケットの予約[よやく]や、宅配便[たくはいびん]の受取[うけと]りも可能[かのう]です。まるで小[ちい]さい役所[やくしょ]のようです。",
      "最近[さいきん]はさらに便利[べんり]になりました。ネット注文[ちゅうもん]した商品[しょうひん]をコンビニで受取[うけと]る人[ひと]が増[ふ]えています。また、セルフレジを導入[どうにゅう]する店[みせ]も多[おお]くなりました。カフェスペースを設[もう]けた店[みせ]もあります。お客[きゃく]さんは、そこでコーヒーを飲[の]みながら休[やす]むことができます。",
      "コンビニはとても便利[べんり]ですが、一[ひと]つ心配[しんぱい]があります。それは、二十四時間[にじゅうよじかん]働[はたら]く店員[てんいん]のことです。夜[よる]のシフトは大変[たいへん]そうです。人手[ひとで]不足[ぶそく]も問題[もんだい]です。便利[べんり]さを維持[いじ]しながら、働[はたら]く人[ひと]にも優[やさ]しい仕組[しく]みが必要[ひつよう]だと思[おも]います。"
    ],
    translation: [
      "When you walk in a Japanese town, there are convenience stores everywhere. It is said there are more than fifty thousand stores nationwide. Most stores are open twenty-four hours. Even late at night or early in the morning, you can buy what you need.",
      "The variety of products is very rich. From food like onigiri, bento, and bread, to drinks, magazines, and cosmetics, everything is available. Seasonal products are also popular. In summer there is shaved ice, and in winter there is oden and hot snacks. New products appear one after another.",
      "Convenience stores offer not only shopping but various services. You can withdraw money at the ATM or make copies. You can also pay public utility bills. Ticket reservations and parcel pickup are also possible. It is like a small government office.",
      "Recently it has become even more convenient. More people pick up online orders at convenience stores. Also, more stores have introduced self-checkout. Some stores have a cafe space. Customers can drink coffee and rest there.",
      "Convenience stores are very convenient, but there is one concern. That is the store clerks who work twenty-four hours. The night shift seems hard. Labor shortage is also a problem. I think a system that is kind to workers while maintaining convenience is necessary."
    ],
    questions: [
      {
        q: "About how many convenience stores are there in Japan?",
        choices: ["About 5,000", "About 50,000 or more", "About 500", "About 500,000"],
        answerIndex: 1,
        explanation: "There are more than fifty thousand stores nationwide (五万店以上)."
      },
      {
        q: "What seasonal items are sold in winter?",
        choices: ["Shaved ice", "Oden and hot snacks", "Cold drinks", "Ice cream"],
        answerIndex: 1,
        explanation: "In winter there is oden and hot snacks (おでんやホットスナック)."
      },
      {
        q: "Which is NOT a service mentioned at convenience stores?",
        choices: ["ATM withdrawals", "Copying", "Paying public utility bills", "Medical checkups"],
        answerIndex: 3,
        explanation: "ATM, copying, and bill payment are mentioned; medical checkups are not."
      },
      {
        q: "What has been introduced recently in many stores?",
        choices: ["Self-checkout", "Free meals", "Movie theaters", "Barber shops"],
        answerIndex: 0,
        explanation: "Many stores have introduced self-checkout (セルフレジを導入)."
      },
      {
        q: "What is the writer's concern about convenience stores?",
        choices: ["Prices are too high", "Products are low quality", "Clerks working 24 hours and labor shortage", "There are too few stores"],
        answerIndex: 2,
        explanation: "The writer is concerned about clerks working 24 hours and labor shortage (働く店員のこと、人手不足)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-36 — 田舎への電車の旅 (A train journey to the countryside)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-36",
    title: "田舎[いなか]への電車[でんしゃ]の旅[たび]",
    titleReading: "いなかへのでんしゃのたび",
    level: "N4",
    summary: "A family takes local trains to visit grandparents in a rural village and rediscovers slow countryside life.",
    estMinutes: 6,
    tags: ["travel", "countryside", "family"],
    body: [
      "先週[せんしゅう]、私[わたし]は両親[りょうしん]と一緒[いっしょ]に田舎[いなか]へ行[い]きました。祖父母[そふぼ]が住[す]む村[むら]を訪[たず]ねるためです。新幹線[しんかんせん]で二時間[にじかん]、そこからローカル線[せん]に乗[の]り換[か]えました。電車[でんしゃ]は一両[いちりょう]だけの小[ちい]さいものでした。田舎[いなか]へ行[い]くだけで、ワクワクしました。",
      "駅[えき]を出[で]ると、すぐに景色[けしき]が変[か]わりました。ビルの代[か]わりに、田[た]んぼや畑[はたけ]が広[ひろ]がっていました。電車[でんしゃ]はゆっくり進[すす]みました。途中[とちゅう]の駅[えき]には、誰[だれ]も降[お]りませんでした。窓[まど]の外[そと]で、鳥[とり]が飛[と]んでいるのが見[み]えました。都会[とかい]とは全[まった]く違[ちが]う時間[じかん]が流[なが]れていました。",
      "三十分[さんじゅっぷん]後[ご]、小[ちい]さい駅[えき]に着[つ]きました。改札[かいさつ]はありませんでした。ホームで、祖父[そふ]が笑顔[えがお]で待[ま]ってくれました。空気[くうき]がとても澄[す]んでいて、おいしかったです。家[いえ]までは車[くるま]で十五分[じゅうごふん]でした。道[みち]の両側[りょうがわ]に、色[いろ]いろな花[はな]が咲[さ]いていました。",
      "祖母[そぼ]の手作[てづく]りの昼[ひる]ご飯[はん]はとても美味[おい]しかったです。特[とく]に、自家製[じかせい]の漬物[つけもの]が印象的[いんしょうてき]でした。午後[ごご]、祖父[そふ]と一緒[いっしょ]に野菜[やさい]畑[はたけ]を散歩[さんぽ]しました。夜[よる]は、蛍[ほたる]がたくさん飛[と]んでいて、まるで魔法[まほう]のようでした。",
      "田舎[いなか]の生活[せいかつ]は都会[とかい]と違[ちが]います。便利[べんり]さは少[すく]ないかもしれませんが、心[こころ]が穏[おだ]やかになります。自然[しぜん]に囲[かこ]まれて過[す]ごす時間[じかん]は、とても貴重[きちょう]でした。来年[らいねん]の夏[なつ]も、また祖父母[そふぼ]の家[いえ]を訪[たず]ねたいです。"
    ],
    translation: [
      "Last week, I went to the countryside with my parents. It was to visit the village where my grandparents live. We took the shinkansen for two hours, and from there we transferred to a local line. The train was small with only one car. Just going to the countryside made me excited.",
      "After leaving the station, the scenery changed immediately. Instead of buildings, rice fields and farms spread out. The train moved slowly. At stations along the way, no one got off. Outside the window, I could see birds flying. A completely different time flowed than in the city.",
      "Thirty minutes later, we arrived at a small station. There was no ticket gate. On the platform, my grandfather was waiting with a smile. The air was very clear and tasted good. It was fifteen minutes by car to the house. On both sides of the road, various flowers were blooming.",
      "Grandma's handmade lunch was very delicious. Especially her homemade pickles were impressive. In the afternoon, I walked around the vegetable field with my grandfather. At night, many fireflies were flying, like magic.",
      "Country life is different from the city. It may be less convenient, but it calms the heart. Time spent surrounded by nature was very precious. Next summer I want to visit my grandparents' house again."
    ],
    questions: [
      {
        q: "Who does the writer visit in the countryside?",
        choices: ["Friends", "Grandparents", "Teachers", "Coworkers"],
        answerIndex: 1,
        explanation: "The writer visits grandparents who live in a village (祖父母が住む村を訪ねる)."
      },
      {
        q: "What was the local train like?",
        choices: ["A large express train", "Small with only one car", "A bullet train", "A sleeper train"],
        answerIndex: 1,
        explanation: "The train was small with only one car (一両だけの小さいもの)."
      },
      {
        q: "What spread out instead of buildings?",
        choices: ["Factories", "Shopping malls", "Rice fields and farms", "Parking lots"],
        answerIndex: 2,
        explanation: "Rice fields and farms spread out instead of buildings (田んぼや畑が広がっていました)."
      },
      {
        q: "What did the writer see at night?",
        choices: ["Fireworks", "Fireflies", "Stars only", "Street lights"],
        answerIndex: 1,
        explanation: "At night, many fireflies were flying (蛍がたくさん飛んでいて)."
      },
      {
        q: "How does the writer feel about country life?",
        choices: ["Too inconvenient and boring", "Less convenient but it calms the heart", "Same as the city", "More stressful than Tokyo"],
        answerIndex: 1,
        explanation: "Country life is less convenient but calms the heart (便利さは少ないかもしれないが、心が穏やかになる)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-37 — ストレスとの向き合い方 (Dealing with stress)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-37",
    title: "ストレスとの向[む]き合[あ]い方[かた]",
    titleReading: "すとれすとのむきあいかた",
    level: "N4",
    summary: "A busy worker notices the physical signs of stress and tries exercise, talking, journaling, and sleep.",
    estMinutes: 5,
    tags: ["health", "stress", "self-care"],
    body: [
      "最近[さいきん]、私[わたし]は仕事[しごと]と勉強[べんきょう]が忙[いそが]しくて、ストレスを感[かん]じていました。夜[よる]になっても眠[ねむ]れなくなりました。毎日[まいにち]疲[つか]れているのに、ベッドの中[なか]で考[かんが]え事[ごと]ばかりしてしまいます。こういう状態[じょうたい]が続[つづ]くと、体[からだ]にも良[よ]くないと思[おも]いました。",
      "ストレスがたまると、体[からだ]に色[いろ]いろなサインが出[で]ます。私[わたし]の場合[ばあい]、頭[あたま]が痛[いた]くなったり、胃[い]が痛[いた]くなったりしました。また、小[ちい]さいことでイライラするようになりました。家族[かぞく]に当[あ]たってしまうこともありました。これはいけないと気[き]がつきました。",
      "ストレスを減[へ]らすために、色[いろ]いろな方法[ほうほう]を試[ため]しました。まず運動[うんどう]をすることにしました。毎朝[まいあさ]、近[ちか]くの公園[こうえん]を三十分[さんじゅっぷん]歩[ある]くことにしました。また、友達[ともだち]に話[はなし]を聞[き]いてもらうことも大切[たいせつ]です。悩[なや]みを口[くち]に出[だ]すと、気持[きも]ちが軽[かる]くなります。",
      "一番[いちばん]効果[こうか]があったのは、日記[にっき]を書[か]くことでした。毎晩[まいばん]、その日[ひ]にあったことや感[かん]じたことを書[か]きます。書[か]いているうちに、自分[じぶん]の本当[ほんとう]の気持[きも]ちが分[わ]かってきます。それから、夜[よる]は携帯[けいたい]を見[み]ずに早[はや]く寝[ね]るようにしました。睡眠[すいみん]は最[もっと]も大切[たいせつ]な休息[きゅうそく]です。",
      "ストレスは悪[わる]いものではありません。自分[じぶん]の心[こころ]からのメッセージです。ただし、無視[むし]すると大[おお]きな問題[もんだい]になります。今[いま]は、無理[むり]をせず、助[たす]けを求[もと]めることもできました。皆[みな]さんも、自分[じぶん]なりの方法[ほうほう]を見[み]つけてください。"
    ],
    translation: [
      "Recently, I felt stressed because work and study were busy. I could not sleep even at night. Although I was tired every day, I kept thinking in bed. I thought that if this condition continued, it would not be good for my body.",
      "When stress accumulates, the body shows various signs. In my case, I got headaches and stomachaches. Also, I became irritable about small things. I sometimes took it out on my family. I realized this was not good.",
      "To reduce stress, I tried various methods. First I decided to exercise. Every morning, I decided to walk in a nearby park for thirty minutes. Also, having a friend listen to me is important. Putting worries into words lightens the mood.",
      "The most effective method was writing a journal. Every night, I write what happened that day and how I felt. While writing, I come to understand my true feelings. Then, I started going to bed early without looking at my phone. Sleep is the most important rest.",
      "Stress is not a bad thing. It is a message from your heart. However, ignoring it becomes a big problem. Now I can avoid pushing myself and ask for help. Everyone, please find your own method."
    ],
    questions: [
      {
        q: "What was the writer's first sign of stress?",
        choices: ["Could not sleep at night", "Lost appetite", "Gained weight", "Broke a leg"],
        answerIndex: 0,
        explanation: "The writer could not sleep even at night (夜になっても眠れなくなりました)."
      },
      {
        q: "What physical signs did stress cause for the writer?",
        choices: ["Back pain and fever", "Headaches and stomachaches", "Sore throat", "Skin rash"],
        answerIndex: 1,
        explanation: "The writer got headaches and stomachaches (頭が痛くなったり、胃が痛くなったり)."
      },
      {
        q: "What did the writer decide to do every morning?",
        choices: ["Run 10 km", "Walk in the park for 30 minutes", "Swim", "Do yoga for an hour"],
        answerIndex: 1,
        explanation: "Every morning the writer walks in a nearby park for thirty minutes (三十分歩く)."
      },
      {
        q: "What was the most effective method for the writer?",
        choices: ["Watching TV", "Drinking alcohol", "Writing a journal", "Shopping"],
        answerIndex: 2,
        explanation: "Writing a journal was the most effective method (日記を書くことが一番効果があった)."
      },
      {
        q: "What does the writer say stress is?",
        choices: ["A bad thing to avoid", "A message from your heart", "A disease", "Always a sign of illness"],
        answerIndex: 1,
        explanation: "Stress is a message from your heart (自分の心からのメッセージ)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-38 — 初めての料理の挑戦 (A cooking challenge)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-38",
    title: "初[はじ]めての料理[りょうり]の挑戦[ちょうせん]",
    titleReading: "はじめてのりょうりのちょうせん",
    level: "N4",
    summary: "A beginner cook tries to make hamburger steak for a girlfriend's birthday and learns cooking is hard but rewarding.",
    estMinutes: 6,
    tags: ["cooking", "challenge", "experience"],
    body: [
      "先週[せんしゅう]、私[わたし]は彼女[かのじょ]の誕生日[たんじょうび]に、手作[てづく]りのディナーをプレゼントすることにしました。いつもは店[みせ]で食事[しょくじ]をしていましたが、今年[ことし]は特別[とくべつ]なことにしたかったです。でも、私[わたし]は料理[りょうり]が苦手[にがて]です。とても大変[たいへん]な挑戦[ちょうせん]でした。",
      "何[なに]を作[つく]るか、ネットで調[しら]べました。色[いろ]いろ考[かんが]えた結果[けっか]、ハンバーグにしました。見[み]た目[め]が良[よ]さそうで、美味[おい]しそうだからです。レシピの動画[どうが]を十回[じゅっかい]ぐらい見[み]ました。それから、材料[ざいりょう]を買[か]いにスーパーへ行[い]きました。肉[にく]も野菜[やさい]も新[あたら]しくて、新鮮[しんせん]なものを選[えら]びました。",
      "いざ調理[ちょうり]を始[はじ]めると、意外[いがい]に難[むずか]しかったです。まず、タマネギを切[き]っている時[とき]、涙[なみだ]が出[で]ました。次[つぎ]に、肉[にく]をこねました。手[て]が汚[よご]れて大変[たいへん]でした。フライパンで焼[や]く時[とき]、油[あぶら]が飛[と]んで、驚[おどろ]きました。形[かたち]も少[すこ]しへんになってしまいました。",
      "最終的[さいしゅうてき]に、皿[さら]に盛[も]り付[つ]けました。見[み]た目[め]はレシピの動画[どうが]と少[すこ]し違[ちが]いました。しかし、味[あじ]は意外[いがい]と悪[わる]くなかったです。彼女[かのじょ]が「美味[おい]しい」と言[い]ってくれた時[とき]、とても嬉[うれ]しかったです。一生懸命[いっしょうけんめい]作[つく]った甲斐[かい]がありました。",
      "今回[こんかい]の経験[けいけん]で、料理[りょうり]の大変[たいへん]さがよく分[わ]かりました。毎日[まいにち]家族[かぞく]の食事[しょくじ]を作[つく]ってくれる人[ひと]に、感謝[かんしゃ]の気持[きも]ちが湧[わ]きました。料理[りょうり]は難[むずか]しいですが、完成[かんせい]した時[とき]の喜[よろこ]びは大[おお]きいです。これからも、少[すこ]しずつ練習[れんしゅう]して上達[じょうたつ]したいです。"
    ],
    translation: [
      "Last week, for my girlfriend's birthday, I decided to give her a handmade dinner as a present. We usually ate at a restaurant, but this year I wanted to do something special. But I am not good at cooking. It was a very hard challenge.",
      "I looked on the internet for what to make. After considering various things, I chose hamburger steak. It looked good and seemed delicious. I watched the recipe video about ten times. Then I went to the supermarket to buy ingredients. I chose fresh meat and vegetables.",
      "When I started cooking, it was unexpectedly difficult. First, while cutting onions, tears came out. Next, I kneaded the meat. My hands got dirty and it was hard. When I fried it in the pan, oil splattered and I was surprised. The shape also became a little strange.",
      "Finally, I plated it. The appearance was a little different from the recipe video. However, the taste was not bad surprisingly. When my girlfriend said \"delicious,\" I was very happy. The effort of cooking hard was worth it.",
      "Through this experience, I understood the difficulty of cooking well. I felt gratitude toward people who cook family meals every day. Cooking is hard, but the joy when it is completed is great. From now on, I want to practice little by little and improve."
    ],
    questions: [
      {
        q: "Why did the writer decide to cook?",
        choices: ["For a cooking contest", "For his girlfriend's birthday", "To save money", "For a school assignment"],
        answerIndex: 1,
        explanation: "The writer decided to cook for his girlfriend's birthday (彼女の誕生日に)."
      },
      {
        q: "What did the writer decide to make?",
        choices: ["Sushi", "Curry", "Hamburger steak", "Ramen"],
        answerIndex: 2,
        explanation: "The writer chose hamburger steak (ハンバーグにしました)."
      },
      {
        q: "What happened while cutting onions?",
        choices: ["Cut his finger", "Tears came out", "Nothing happened", "The knife broke"],
        answerIndex: 1,
        explanation: "While cutting onions, tears came out (タマネギを切っている時、涙が出ました)."
      },
      {
        q: "What was different from the recipe video?",
        choices: ["The taste", "The ingredients", "The appearance (shape)", "The cooking time"],
        answerIndex: 2,
        explanation: "The appearance was a little different from the recipe video (見た目は少し違いました)."
      },
      {
        q: "What did the writer feel gratitude for?",
        choices: ["Cheap ingredients", "People who cook family meals every day", "Recipe videos", "The girlfriend's praise only"],
        answerIndex: 1,
        explanation: "The writer felt gratitude toward people who cook family meals every day (毎日家族の食事を作ってくれる人に感謝)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-39 — 日本の贈り物の文化 (The art of gift-giving in Japan)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-39",
    title: "日本[にほん]の贈[おく]り物[もの]の文化[ぶんか]",
    titleReading: "にほんのおくりもののぶんか",
    level: "N4",
    summary: "Seasonal gifts, manners of numbers and wrapping, and the meaning behind Japanese gift-giving.",
    estMinutes: 7,
    tags: ["culture", "gift-giving", "customs"],
    body: [
      "日本[にほん]では、贈[おく]り物[もの]の文化[ぶんか]がとても発達[はったつ]しています。一年[いちねん]に二回[にかい]、お中元[ちゅうげん]とお歳暮[せいぼ]という習慣[しゅうかん]があります。夏[なつ]と年末[ねんまつ]に、お世話[せわ]になった人[ひと]に贈[おく]り物[もの]をします。これらは、感謝[かんしゃ]の気持[きも]ちを伝[つた]える大切[たいせつ]な文化[ぶんか]です。",
      "贈[おく]り物[もの]には色[いろ]いろな種類[しゅるい]があります。お礼[れい]の品[しな]、結婚[けっこん]や出産[しゅっさん]の内祝[うちいわ]い、お見舞[みま]いの品[しな]などがあります。また、旅行[りょこう]から帰[かえ]った時[とき]のお土産[みやげ]も大切[たいせつ]です。日本[にほん]では、職場[しょくば]や家族[かぞく]にお土産[みやげ]を買[か]うのが一般的[いっぱんてき]です。",
      "贈[おく]り物[もの]には細[こま]かいマナーがあります。数[かず]は、四[よっ]や九[きゅう]を避[さ]けます。四[よっ]は「死[し]」、九[きゅう]は「苦[く]」を連想[れんそう]させるからです。逆[ぎゃく]に、二[に]、八[はち]などの偶数[ぐうすう]は好[この]まれます。包装[ほうそう]も丁寧[ていねい]にします。のしという飾[かざ]りをつけるのが伝統[でんとう]です。",
      "私[わたし]も、この文化[ぶんか]を体験[たいけん]しました。隣[となり]の夫婦[ふうふ]が旅行[りょこう]のお土産[みやげ]を持[も]ってきてくれました。私[わたし]は喜[よろこ]びましたが、お返[かえ]しをしなければと気[き]になりました。母[はは]に相談[そうだん]すると、「半分[はんぶん]返[かえ]すのがマナーだよ」と教[おし]えてくれました。",
      "贈[おく]り物[もの]は物質[ぶっしつ]だけではありません。気持[きも]ちが大切[たいせつ]です。高[たか]いものよりも、相手[あいて]を思[おも]う気持[きも]ちが伝[つた]わる贈[おく]り物[もの]の方[ほう]が嬉[うれ]しいです。これからも、大切[たいせつ]な人[ひと]に感謝[かんしゃ]の気持[きも]ちを伝[つた]えていきたいです。"
    ],
    translation: [
      "In Japan, the culture of gift-giving is very developed. Twice a year, there are customs called ochugen and oseibo. In summer and at year-end, gifts are given to people who have helped you. These are important cultures to convey gratitude.",
      "There are various types of gifts. Thank-you gifts, wedding and baby celebration gifts, get-well gifts, and so on. Also, souvenirs brought back from travel are important. In Japan, it is common to buy souvenirs for the workplace and family.",
      "Gifts have detailed manners. Numbers avoid four and nine. This is because four is associated with \"death\" and nine with \"suffering.\" Conversely, even numbers like two and eight are preferred. Wrapping is done carefully. Putting on a decoration called noshi is traditional.",
      "I also experienced this culture. The couple next door brought me a souvenir from their trip. I was happy, but I felt I had to give something in return. When I consulted my mother, she taught me \"returning half is the manner.\"",
      "Gifts are not only material. The feeling is important. A gift that conveys consideration for the other person is more pleasing than an expensive one. From now on, I want to convey gratitude to important people."
    ],
    questions: [
      {
        q: "How many times a year are ochugen and oseibo given?",
        choices: ["Once a year", "Twice a year", "Four times a year", "Every month"],
        answerIndex: 1,
        explanation: "Twice a year, ochugen in summer and oseibo at year-end (一年に二回)."
      },
      {
        q: "Which numbers are avoided in gifts?",
        choices: ["Two and eight", "Four and nine", "One and ten", "Six and seven"],
        answerIndex: 1,
        explanation: "Four and nine are avoided (四や九を避けます)."
      },
      {
        q: "Why is the number four avoided?",
        choices: ["It is unlucky in China", "It is associated with death", "It is too small", "It sounds like pain"],
        answerIndex: 1,
        explanation: "Four is associated with \"death\" (四は「死」を連想させる)."
      },
      {
        q: "What did the mother say about returning a gift?",
        choices: ["Return double", "Return half", "Do not return anything", "Return after one year"],
        answerIndex: 1,
        explanation: "The mother taught that returning half is the manner (半分返すのがマナー)."
      },
      {
        q: "What does the writer think is most important in a gift?",
        choices: ["High price", "Famous brand", "The feeling and consideration for the other person", "Large size"],
        answerIndex: 2,
        explanation: "A gift conveying consideration is more pleasing than an expensive one (相手を思う気持ちが伝わる贈り物)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n4-40 — 故郷への帰省 (A nostalgic hometown visit)
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n4-40",
    title: "故郷[こきょう]への帰省[きせい]",
    titleReading: "こきょうへのきせい",
    level: "N4",
    summary: "During obon, a Tokyo worker returns to a rural hometown for the first time in a year and reconnects with family and old friends.",
    estMinutes: 6,
    tags: ["hometown", "family", "nostalgia"],
    body: [
      "今[こん]月[げつ]、お盆[ぼん]の休[やす]みに、一年[いちねん]ぶりに故郷[こきょう]へ帰[かえ]りました。東京[とうきょう]で働[はたら]いているので、なかなか帰[かえ]れません。今回[こんかい]は五日間[いつかかん]の休[やす]みが取[と]れました。両親[りょうしん]に会[あ]えるのが楽[たの]しみでした。新幹線[しんかんせん]に乗[の]る前[まえ]に、駅[えき]で好物[こうぶつ]のお菓子[かし]を買[か]いました。",
      "新幹線[しんかんせん]で三時間[さんじかん]、さらに在来線[ざいらいせん]で一時間[いちじかん]です。久[ひさ]しぶりに降[お]り立[た]った駅[えき]は、昔[むかし]と変[か]わりませんでした。改札[かいさつ]を出[で]ると、父[ちち]が迎[むか]えに来[き]てくれました。「大[おお]きくなったな」と言[い]われて、少[すこ]し恥[は]ずかしかったです。駅[えき]の前[まえ]の店[みせ]も、昔[むかし]のままでした。",
      "家[いえ]に着[つ]くと、母[はは]が好物[こうぶつ]の料理[りょうり]を作[つく]って待[ま]ってくれました。家族[かぞく]三人[さんにん]で、久[ひさ]しぶりに一緒[いっしょ]に食事[しょくじ]をしました。父[ちち]の髪[かみ]が白[しろ]くなっていたので、少[すこ]し驚[おどろ]きました。夜[よる]は、昔[むかし]の話[はなし]をして、遅[おそ]くまで話[はな]し合[あ]いました。",
      "次[つぎ]の日[ひ]、私[わたし]は一人[ひとり]で町[まち]を歩[ある]きました。通[かよ]っていた小学校[しょうがっこう]は、新[あたら]しくなっていました。でも、裏[うら]の公園[こうえん]は変[か]わっていませんでした。そこで、偶然[ぐうぜん]小学校[しょうがっこう]の時[とき]の友達[ともだち]に会[あ]いました。十[じゅう]年[ねん]ぶりでしたが、すぐに分[わ]かりました。二人[ふたり]で、昔[むかし]の思[おも]い出[で]を語[かた]り合[あ]いました。",
      "故郷[こきょう]は、離[はな]れてみて初[はじ]めて、その大切[たいせつ]さが分[わ]かります。私[わたし]を育[そだ]ててくれた場所[ばしょ]です。両親[りょうしん]も、もう年[とし]を取[と]っています。もっと頻繁[ひんぱん]に帰[かえ]るようにしたいです。東京[とうきょう]の生活[せいかつ]も大切[たいせつ]ですが、故郷[こきょう]との繋[つな]がりは忘[わす]れたくありません。"
    ],
    translation: [
      "This month, during the obon holiday, I went back to my hometown for the first time in a year. Because I work in Tokyo, I cannot easily go back. This time I got five days off. I was looking forward to seeing my parents. Before boarding the shinkansen, I bought my favorite snacks at the station.",
      "Three hours by shinkansen, plus one hour by local train. The station where I landed after a long time had not changed from before. When I left the ticket gate, my father had come to pick me up. He said \"you've grown bigger\" and I was a little embarrassed. The shop in front of the station was also the same as before.",
      "When I arrived home, my mother had prepared my favorite dishes and was waiting. The three of us in the family ate together for the first time in a while. My father's hair had turned white, which surprised me a little. At night, we talked about old times and chatted until late.",
      "The next day, I walked around the town alone. The elementary school I attended had become new. But the park behind it had not changed. There, I happened to meet a friend from elementary school. It had been ten years, but I recognized him immediately. The two of us talked about old memories.",
      "You understand the importance of a hometown only after leaving it. It is the place that raised me. My parents are also getting older. I want to go back more often. Life in Tokyo is also important, but I do not want to forget my connection with my hometown."
    ],
    questions: [
      {
        q: "When did the writer go back to the hometown?",
        choices: ["During New Year", "During obon holiday", "During Golden Week", "At Christmas"],
        answerIndex: 1,
        explanation: "The writer went back during the obon holiday (お盆の休みに)."
      },
      {
        q: "How long was the break?",
        choices: ["Three days", "Five days", "One week", "Ten days"],
        answerIndex: 1,
        explanation: "The writer got five days off (五日間の休み)."
      },
      {
        q: "What surprised the writer about the father?",
        choices: ["He had grown taller", "His hair had turned white", "He had moved", "He had a new car"],
        answerIndex: 1,
        explanation: "The father's hair had turned white (父の髪が白くなっていた)."
      },
      {
        q: "Who did the writer meet at the park?",
        choices: ["A teacher", "A friend from elementary school", "A cousin", "A coworker"],
        answerIndex: 1,
        explanation: "The writer happened to meet a friend from elementary school (小学校の時の友達に会った)."
      },
      {
        q: "What does the writer want to do from now on?",
        choices: ["Move back to the hometown", "Stop working in Tokyo", "Go back more often", "Bring parents to Tokyo"],
        answerIndex: 2,
        explanation: "The writer wants to go back more often (もっと頻繁に帰るようにしたい)."
      }
    ]
  }
];
