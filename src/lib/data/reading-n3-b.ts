import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level reading passages with comprehension questions.
// Topics (chunk B): the changing Japanese family, a career change story,
// traditional arts in modern Japan, the convenience store phenomenon,
// a language learning journey, the four seasons and Japanese culture,
// mental health awareness, a small business story, urban vs rural life,
// the importance of communication.

export const readingN3B: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n3-11 — The changing Japanese family
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-11",
    title: "変[か]わりつつある日本[にほん]の家族[かぞく]",
    titleReading: "かわりつつあるにほんのかぞく",
    level: "N3",
    summary: "How the Japanese family has shifted from large multi-generation households to diverse modern forms, and what truly matters in a family.",
    estMinutes: 7,
    tags: ["family", "society", "demographics"],
    body: [
      "昔[むかし]は、三世代[さんせだい]が一[いっ]緒[しょ]に暮[く]らす大家族[だいかぞく]が普通[ふつう]だったが、今[いま]では親[おや]と子[こ]からなる核家族[かくかぞく]が多[おお]くなっている。家族[かぞく]の形[かたち]は、時代[じだい]とともに大[おお]きく変[か]わりつつある。",
      "少子化[しょうしか]の影響[えいきょう]で、一人[ひとり]暮[ぐ]らしの高齢者[こうれいしゃ]や、子[こ]どものいない夫婦[ふうふ]も増[ふ]えている。かつては「家[いえ]を継[つ]ぐ」という考[かんが]え方[かた]が強[つよ]かったが、今[いま]では個[こ]人[じん]の幸[しあわ]せが重[おも]んじられるようになった。",
      "性別[せいべつ]による役割[やくわり]分担[ぶんたん]も変[か]わりつつある。以前[いぜん]は「男[おとこ]は仕事[しごと]、女[おんな]は家庭[かてい]」という考[かんが]え方[かた]が一般的[いっぱんてき]だったが、今[いま]では男性[だんせい]が育児[いくじ]に参加[さんか]する家庭[かてい]も珍[めずら]しくない。",
      "外国[がいこく]の人[ひと]と結婚[けっこん]する人[ひと]も増[ふ]え、異文化[いぶんか]を持[も]つ家族[かぞく]も増[ふ]えている。そのような家庭[かてい]では、子[こ]どもが複数[ふくすう]の言語[げんご]や文化[ぶんか]に触[ふ]れながら成長[せいちょう]する。",
      "一方[いっぽう]で、地域[ちいき]のつながりが薄[うす]れた分[ぶん]、家族[かぞく]の絆[きずな]を大[おお]切[せつ]にする意識[いしき]も強[つよ]まっている。困[こま]ったときに助[たす]け合[あ]えるのは、結局[けっきょく]、家族[かぞく]だという人[ひと]が多[おお]い。",
      "家族[かぞく]の形[かたち]はこれからも多様化[たようか]していくだろう。しかし、どのような形[かたち]であれ、互[たが]いに支[ささ]え合[あ]う気持[きも]ちこそが、家族[かぞく]の本当[ほんとう]の意義[いぎ]である。"
    ],
    translation: [
      "In the past, large families where three generations lived together were common, but nowadays nuclear families consisting of parents and children have become more numerous. The shape of the family is changing greatly with the times.",
      "Under the influence of the declining birthrate, elderly people living alone and couples without children are also increasing. In the past, the idea of inheriting the household was strong, but nowadays individual happiness has come to be valued.",
      "The division of roles by gender is also changing. Previously, the idea that men work and women handle the home was common, but nowadays households where men participate in child-rearing are not unusual.",
      "People who marry foreigners are also increasing, and families with different cultures are also growing. In such homes, children grow up while being exposed to multiple languages and cultures.",
      "On the other hand, as community ties have weakened, the awareness of valuing family bonds has also strengthened. Many people say that in the end, those who can help each other when in trouble are family.",
      "The shape of the family will likely continue to diversify. However, whatever form it takes, the spirit of supporting one another is the true significance of family."
    ],
    questions: [
      {
        q: "What kind of family was common in the past according to the passage?",
        choices: ["Three-generation large families", "Nuclear families", "Single-person households", "Couples without children"],
        answerIndex: 0,
        explanation: "The passage states that large families where three generations lived together were once common (三世代が一緒に暮らす大家族が普通だった)."
      },
      {
        q: "Why are elderly living alone and childless couples increasing?",
        choices: ["Due to the declining birthrate", "Due to foreign marriages", "Due to telework", "Due to gender equality"],
        answerIndex: 0,
        explanation: "The passage attributes this trend to the influence of the declining birthrate (少子化の影響で)."
      },
      {
        q: "What was the common gender role view in the past?",
        choices: ["Men work, women handle the home", "Men handle the home, women work", "Both share everything equally", "No fixed roles at all"],
        answerIndex: 0,
        explanation: "Previously, the view that men do the work and women handle the home was common (男は仕事、女は家庭という考え方)."
      },
      {
        q: "What strengthened as community ties weakened?",
        choices: ["The idea of inheriting the household", "The awareness of valuing family bonds", "The number of nuclear families", "The declining birthrate"],
        answerIndex: 1,
        explanation: "As regional ties thinned, the awareness of valuing family bonds grew stronger (家族の絆を大切にする意識も強まっている)."
      },
      {
        q: "What does the passage call the true significance of family?",
        choices: ["Inheriting the household", "Living with three generations", "Supporting one another", "Speaking multiple languages"],
        answerIndex: 2,
        explanation: "Whatever form it takes, the spirit of supporting one another is the true significance of family (互いに支え合う気持ちこそが家族の本当の意義である)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-12 — A career change story
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-12",
    title: "キャリアを変[か]える：新[あたら]しい道[みち]を選[えら]ぶ",
    titleReading: "きゃりあをかえる：あたらしいみちをえらぶ",
    level: "N3",
    summary: "The story of Nakamura, who left a stable company job at thirty-five to become a baker, and what he learned from the challenge.",
    estMinutes: 7,
    tags: ["career", "challenge", "life choices"],
    body: [
      "中村[なかむら]さんは三十五歳[さんじゅうごさい]のとき、大[おお]きな決心[けっしん]をした。十年来[じゅうねんらい]の会社[かいしゃ]を辞[や]めて、パン職人[しょくにん]になることにしたのである。",
      "もともと料理[りょうり]が好[す]きだった彼[かれ]は、休[やす]みの日[ひ]にパンを焼[や]くことから始[はじ]めた。趣味[しゅみ]の域[いき]を越[こ]え、本気[ほんき]で技術[ぎじゅつ]を学[まな]びたいと考[かんが]えるようになった。",
      "周囲[しゅうい]は反対[はんたい]した。安定[あんてい]した仕事[しごと]を捨[す]てるなんて無謀[むぼう]だと言[い]う人[ひと]もいた。しかし彼[かれ]は、自分[じぶん]の人生[じんせい]だから後悔[こうかい]したくないと考[かんが]えた。",
      "職人[しょくにん]の世界[せかい]は厳[きび]しかった。毎日[まいにち]朝[あさ]四時[よじ]に起[お]き、生地[きじ]をこね続[つづ]ける日[ひ]々だった。失敗[しっぱい]を繰[く]り返[かえ]しながらも、少[すこ]しずつ技術[ぎじゅつ]が上[あ]がっていった。",
      "三年後[さんねんご]、彼[かれ]は自分[じぶん]の店[みせ]を開[ひら]いた。小[ちい]さな店[みせ]だったが、地元[じもと]の人[ひと]たちに支[ささ]えられ、少[すこ]しずつ客[きゃく]が増[ふ]えた。",
      "今[いま]、彼[かれ]はこう言[い]う。「失敗[しっぱい]を恐[おそ]れて何[なに]もしないより、挑戦[ちょうせん]して失敗[しっぱい]したほうがいい。私[わたし]の選[えら]んだ道[みち]は決[けっ]して楽[らく]ではなかったが、毎日[まいにち]が充実[じゅうじつ]している。」"
    ],
    translation: [
      "At the age of thirty-five, Nakamura-san made a big decision. He left the company he had worked at for ten years and decided to become a baker.",
      "He had originally liked cooking, and started by baking bread on his days off. It went beyond a hobby, and he came to want to learn the craft seriously.",
      "The people around him opposed it. Some said it was reckless to throw away a stable job. However, he thought that since it was his own life, he did not want to have regrets.",
      "The world of craftsmen was harsh. Every day he woke at four in the morning and kept kneading dough. While repeating failures, his skill gradually improved.",
      "Three years later, he opened his own shop. It was a small shop, but supported by local people, customers gradually increased.",
      "Now he says this: Rather than doing nothing for fear of failure, it is better to take on a challenge and fail. The path I chose was by no means easy, but every day is fulfilling."
    ],
    questions: [
      {
        q: "How old was Nakamura when he made his decision?",
        choices: ["Twenty-five", "Thirty-five", "Forty-five", "Thirty"],
        answerIndex: 1,
        explanation: "He made the decision at the age of thirty-five (三十五歳のとき)."
      },
      {
        q: "What did he start doing on his days off?",
        choices: ["Cooking meals for friends", "Baking bread", "Working a part-time job", "Studying languages"],
        answerIndex: 1,
        explanation: "He started by baking bread on his days off (休みの日にパンを焼くことから始めた)."
      },
      {
        q: "What did people around him say?",
        choices: ["It was a wonderful idea", "It was reckless", "He should wait longer", "He should open a shop immediately"],
        answerIndex: 1,
        explanation: "Some said it was reckless to throw away a stable job (安定した仕事を捨てるなんて無謀だ)."
      },
      {
        q: "What did he do every day as a craftsman?",
        choices: ["Woke at four and kneaded dough", "Travelled to sell bread", "Studied business books", "Taught students"],
        answerIndex: 0,
        explanation: "Every day he woke at four and kept kneading dough (毎日朝四時に起き、生地をこね続ける)."
      },
      {
        q: "What does Nakamura say now about his choice?",
        choices: ["He should have stayed at the company", "It is better to challenge and fail than to do nothing", "Opening a shop was a mistake", "He wants to return to his old job"],
        answerIndex: 1,
        explanation: "He says it is better to take on a challenge and fail than to do nothing out of fear (挑戦して失敗したほうがいい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-13 — Traditional arts in modern Japan
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-13",
    title: "現代[げんだい]に生[い]きる伝統[でんとう]芸能[げいのう]",
    titleReading: "げんだいにいきるでんとうげいのう",
    level: "N3",
    summary: "How traditional arts such as Kabuki, tea ceremony, and flower arrangement are being reimagined for modern audiences and the challenge of finding successors.",
    estMinutes: 8,
    tags: ["traditional arts", "culture", "succession"],
    body: [
      "日本[にほん]には、能[のう]、歌舞伎[かぶき]、茶道[さどう]、書道[しょどう]など、古[ふる]くから伝[つた]わる伝統[でんとう]芸能[げいのう]が多[おお]くある。これらは現代[げんだい]においても、新[あたら]しい形[かたち]で生[い]き続[つづ]けている。",
      "例[たと]えば歌舞伎[かぶき]では、若[わか]い人[ひと]にも分[わ]かりやすくするため、字幕[じまく]を入[い]れたり、現代[げんだい]の話題[わだい]を取[と]り入[い]れたりする試[こころ]みが行[おこな]われている。古典[こてん]をそのまま演[えん]じるだけではなく、時代[じだい]に合[あ]わせた変化[へんか]が必要[ひつよう]とされている。",
      "茶道[さどう]や華道[かどう]も、必[かなら]ずしも形式[けいしき]にこだわるだけではなく、生活[せいかつ]の中[なか]で楽[たの]しむものとして見[み]直[なお]されている。自[みずか]分[ぶん]の部屋[へや]で一人[ひとり]で茶[ちゃ]を点[た]てるという人[ひと]も増[ふ]えている。",
      "一方[いっぽう]で、後継者[こうけいしゃ]不足[ぶそく]という問題[もんだい]も深刻[しんこく]だ。若[わか]い人[ひと]が後[あと]を継[つ]がず、技術[ぎじゅつ]や精神[せいしん]が失[うしな]われる危険[きけん]がある。",
      "そこで、学校[がっこう]で伝統[でんとう]芸能[げいのう]を教[おし]える取[と]り組[く]みも始[はじ]まった。子[こ]どもたちが早[はや]くから触[ふ]れることで、興味[きょうみ]を持[も]ち、将来[しょうらい]担[に]う人[ひと]になるかもしれない。",
      "伝統[でんとう]を守[まも]ることは、過去[かこ]をそのまま残[のこ]すことではない。時代[じだい]に合[あ]わせて新[あたら]しい息吹[いぶき]を与[あた]えながら、次[つぎ]の世代[せだい]へ渡[わた]していくことこそが、本当[ほんとう]の継承[けいしょう]である。"
    ],
    translation: [
      "Japan has many traditional performing arts passed down from old times, such as Noh, Kabuki, tea ceremony, and calligraphy. Even in the modern age, these continue to live in new forms.",
      "For example, in Kabuki, efforts are made to add subtitles and incorporate modern topics so that young people can understand more easily. Rather than just performing the classics as they are, change suited to the times is considered necessary.",
      "Tea ceremony and flower arrangement are also being re-evaluated as things to enjoy in daily life, not necessarily just adhering to form. There are also more people who make tea alone in their own rooms.",
      "On the other hand, the problem of a shortage of successors is also serious. There is a risk that skills and spirit will be lost because young people do not take over.",
      "Therefore, efforts have also begun to teach traditional performing arts in schools. By exposing children early, they may become interested and become the people who carry them on in the future.",
      "Protecting tradition is not about leaving the past exactly as it is. Giving new breath while suiting the times and passing it on to the next generation is the true succession."
    ],
    questions: [
      {
        q: "What efforts are being made in Kabuki for young people?",
        choices: ["Shortening the performances", "Adding subtitles and incorporating modern topics", "Lowering ticket prices only", "Holding free performances everywhere"],
        answerIndex: 1,
        explanation: "Subtitles are added and modern topics are incorporated so young people can understand more easily (字幕を入れたり、現代の話題を取り入れたり)."
      },
      {
        q: "How are tea ceremony and flower arrangement being re-evaluated?",
        choices: ["As strict formal arts only", "As things to enjoy in daily life", "As competitive sports", "As tourist attractions only"],
        answerIndex: 1,
        explanation: "They are re-evaluated as things to enjoy within daily life rather than only adhering to form (生活の中で楽しむものとして見直されている)."
      },
      {
        q: "What serious problem do traditional arts face?",
        choices: ["Too many successors", "A shortage of successors", "Too much funding", "A lack of venues"],
        answerIndex: 1,
        explanation: "The shortage of successors is a serious problem, risking the loss of skills and spirit (後継者不足という問題も深刻だ)."
      },
      {
        q: "Why are traditional arts being taught in schools?",
        choices: ["So children can pass exams", "So children become interested and may carry them on in the future", "To replace modern subjects entirely", "To make money for schools"],
        answerIndex: 1,
        explanation: "By exposing children early, they may become interested and become future bearers of the arts (興味を持ち、将来担う人になるかもしれない)."
      },
      {
        q: "What is the true succession according to the passage?",
        choices: ["Leaving the past exactly as it is", "Giving new breath while suiting the times and passing it on", "Performing only the oldest versions", "Refusing any change whatsoever"],
        answerIndex: 1,
        explanation: "True succession is giving new breath suited to the times and passing it to the next generation (時代に合わせて新しい息吹を与えながら、次の世代へ渡していく)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-14 — The convenience store phenomenon
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-14",
    title: "コンビニが日本[にほん]の生活[せいかつ]を支[ささ]える理由[りゆう]",
    titleReading: "こんびにがにほんのせいかつをささえるりゆう",
    level: "N3",
    summary: "Why convenience stores have become indispensable to Japanese life, their appeal to locals and tourists, and the social and environmental costs behind the convenience.",
    estMinutes: 7,
    tags: ["convenience store", "lifestyle", "sustainability"],
    body: [
      "日本[にほん]の街[まち]を歩[ある]けば、必[かなら]ずどこかでコンビニを見[み]かける。二十四時間[にじゅうよじかん]開[ひら]いている店[みせ]は、今[いま]や日本人[にほんじん]の生活[せいかつ]に欠[か]かせない存在[そんざい]となっている。",
      "コンビニの魅力[みりょく]は、何[なに]といっても便利[べんり]さにある。食[た]べ物[もの]から日用品[にちようひん]まで、一[ひと]つの店[みせ]で揃[そろ]ううえに、二十四時間[にじゅうよじかん]いつでも買[か]える。ATMやコピー機[き]も備[そな]わっており、簡単[かんたん]な手続[てつづ]きが済[す]ませられる。",
      "最近[さいきん]では、店員[てんいん]が外国人[がいこくじん]であることも多[おお]い。多[おお]くの店[みせ]で英語[えいご]や中国語[ちゅうごくご]の表示[ひょうじ]があり、観光客[かんこうきゃく]にとっても利用[りよう]しやすい環境[かんきょう]が整[ととの]っている。",
      "一方[いっぽう]で、二十四時間[にじゅうよじかん]営業[えいぎょう]には課題[かだい]もある。深夜[しんや]の労働[ろうどう]は働[はたら]く人[ひと]に負担[ふたん]をかけるし、無駄[むだ]な電気[でんき]を使[つか]うことへの批判[ひはん]もある。人手[ひとで]不足[ぶそく]の中[なか]、営業[えいぎょう]時間[じかん]を見直[みなお]す動[うご]きも出[で]ている。",
      "また、コンビニの弁当[べんとう]は手軽[てがる]だが、廃棄[はいき]される食[た]べ物[もの]も多[おお]いという問題[もんだい]がある。食[た]べ残[のこ]しを減[へ]らす取[と]り組[く]みが始[はじ]まっているが、まだ不十分[ふじゅうぶん]だ。",
      "コンビニは便利[べんり]さという点[てん]では優[すぐ]れているが、その背後[はいご]には働[はたら]く人[ひと]や環境[かんきょう]への影響[えいきょう]がある。便利[べんり]さだけを求[もと]めるのではなく、持続[じぞく]可能[かのう]な形[かたち]を考[かんが]える時[とき]に来[き]ている。"
    ],
    translation: [
      "If you walk through a Japanese town, you will always see a convenience store somewhere. Shops that are open twenty-four hours have now become indispensable to Japanese people's lives.",
      "The appeal of convenience stores is, above all, convenience. From food to daily necessities, everything can be found in one store, and you can buy anything twenty-four hours a day. ATMs and copy machines are also equipped, allowing simple procedures to be completed.",
      "Recently, it is also common for clerks to be foreigners. Many stores have English and Chinese displays, and an environment that is easy for tourists to use has been prepared.",
      "On the other hand, twenty-four-hour operation also has challenges. Late-night labor puts a burden on workers, and there is also criticism of using unnecessary electricity. Amid a labor shortage, moves to review operating hours have also emerged.",
      "Also, convenience store bento boxes are convenient, but there is a problem that a lot of food is discarded. Efforts to reduce leftover food have begun, but are still insufficient.",
      "Convenience stores excel in terms of convenience, but behind that there is an impact on workers and the environment. It is time to think not just about seeking convenience but about a sustainable form."
    ],
    questions: [
      {
        q: "What is the appeal of convenience stores according to the passage?",
        choices: ["Cheap prices", "Convenience", "A large product selection", "Friendly staff"],
        answerIndex: 1,
        explanation: "The appeal is, above all, convenience (何といっても便利さにある)."
      },
      {
        q: "What makes convenience stores easy for tourists to use?",
        choices: ["Free Wi-Fi everywhere", "English and Chinese displays", "Lower prices for tourists", "Tour guides inside the store"],
        answerIndex: 1,
        explanation: "Many stores have English and Chinese displays, making them easy for tourists to use (英語や中国語の表示があり)."
      },
      {
        q: "What challenge does twenty-four-hour operation pose?",
        choices: ["Too many customers", "Burden on workers and wasted electricity", "High rent costs", "A lack of products"],
        answerIndex: 1,
        explanation: "Late-night labor burdens workers and there is criticism of wasted electricity (深夜の労働は働く人に負担をかけ、無駄な電気を使うことへの批判もある)."
      },
      {
        q: "What problem exists with convenience store bento boxes?",
        choices: ["They are too expensive", "A lot of food is discarded", "They are unhealthy", "They sell out too quickly"],
        answerIndex: 1,
        explanation: "A lot of food is discarded even though the bento are convenient (廃棄される食べ物も多いという問題がある)."
      },
      {
        q: "What does the passage say we should think about now?",
        choices: ["How to open more convenience stores", "A sustainable form rather than just convenience", "How to lower prices further", "How to hire more foreign workers"],
        answerIndex: 1,
        explanation: "It is time to think about a sustainable form, not just seek convenience (持続可能な形を考える時に来ている)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-15 — A language learning journey
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-15",
    title: "言葉[ことば]を学[まな]ぶ：私[わたし]の日本語[にほんご]の旅[たび]",
    titleReading: "ことばをまなぶ：わたしのにほんごのたび",
    level: "N3",
    summary: "A personal account of starting to learn Japanese from anime interest, struggling with kanji, finding conversation partners, and gaining confidence in Japan.",
    estMinutes: 6,
    tags: ["language learning", "Japanese", "personal story"],
    body: [
      "三年前[さんねんまえ]、私[わたし]は日本語[にほんご]を学[まな]び始[はじ]めた。きっかけは、日本[にほん]のアニメに興味[きょうみ]を持[も]ったことだった。言葉[ことば]を理解[りかい]すれば、もっと深[ふか]く作品[さくひん]を楽[たの]しめると思[おも]ったからだ。",
      "最初[さいしょ]はひらがなとカタカナから始[はじ]めた。覚[おぼ]えることが多[おお]く、何度[なんど]も挫折[ざせつ]しそうになった。しかし、少[すこ]しずつ読[よ]めるようになると、嬉[うれ]しさがこみ上[あ]げてきた。",
      "漢字[かんじ]は一番[いちばん]難[むずか]しかった。一[ひと]つの字[じ]に複数[ふくすう]の読[よ]み方[かた]があり、文脈[ぶんみゃく]によって使[つか]い分[わ]けなければならない。毎日[まいにち]五[いつ]つずつ覚[おぼ]えることを目標[もくひょう]に、少[すこ]しずつ進[すす]めた。",
      "語学[ごがく]の上達[じょうたつ]には、話[はな]す機会[きかい]が欠[か]かせない。私[わたし]は言語[げんご]交換[こうかん]アプリを使[つか]い、日本人[にほんじん]の友達[ともだち]を作[つく]った。最初[さいしょ]は緊張[きんちょう]したが、間違[まちが]えても恥[は]じずに話[はな]すことが大切[たいせつ]だと分[わ]かった。",
      "日本[にほん]に旅行[りょこう]したとき、自分[じぶん]の言葉[ことば]が通[つう]じた喜[よろこ]びは忘[わす]れられない。コンビニで店員[てんいん]と話[はな]したり、駅[えき]で道[みち]を聞[き]いたりしただけで、自信[じしん]がついた。",
      "言葉[ことば]の学習[がくしゅう]に終[お]わりはない。まだまだ下手[へた]だが、これからも続[つづ]けていきたい。言葉[ことば]を通[つう]じて、世界[せかい]が広[ひろ]がっていく感[かん]じがするからだ。"
    ],
    translation: [
      "Three years ago, I started learning Japanese. The trigger was that I became interested in Japanese anime. I thought that if I understood the language, I could enjoy the works more deeply.",
      "At first, I started with hiragana and katakana. There were many things to memorize, and I was on the verge of giving up many times. However, as I gradually became able to read, joy welled up inside me.",
      "Kanji was the most difficult. A single character has multiple readings, and I had to use them differently depending on the context. Setting a goal of memorizing five a day, I progressed little by little.",
      "For improving language skills, the opportunity to speak is indispensable. I used a language exchange app and made Japanese friends. At first I was nervous, but I learned that it is important to speak without being ashamed even if you make mistakes.",
      "When I traveled to Japan, the joy of my words being understood is unforgettable. Just talking with a clerk at a convenience store or asking for directions at the station gave me confidence.",
      "There is no end to learning a language. I am still not very good, but I want to keep going. This is because I feel that the world expands through language."
    ],
    questions: [
      {
        q: "What was the trigger for starting to learn Japanese?",
        choices: ["A friend's recommendation", "Interest in Japanese anime", "A school requirement", "A job necessity"],
        answerIndex: 1,
        explanation: "The trigger was becoming interested in Japanese anime (日本のアニメに興味を持ったことだった)."
      },
      {
        q: "What did the writer start with?",
        choices: ["Kanji", "Grammar rules", "Hiragana and katakana", "Conversation practice"],
        answerIndex: 2,
        explanation: "The writer started with hiragana and katakana (ひらがなとカタカナから始めた)."
      },
      {
        q: "What was the hardest part of learning Japanese?",
        choices: ["Hiragana", "Katakana", "Kanji", "Pronunciation"],
        answerIndex: 2,
        explanation: "Kanji was the most difficult because one character has multiple readings (漢字は一番難しかった)."
      },
      {
        q: "What did the writer learn is important when speaking?",
        choices: ["Speaking without shame even when making mistakes", "Memorizing everything perfectly first", "Speaking only when certain", "Avoiding all difficult words"],
        answerIndex: 0,
        explanation: "The writer learned it is important to speak without shame even when making mistakes (間違えても恥じずに話すことが大切だと分かった)."
      },
      {
        q: "Why does the writer want to continue learning?",
        choices: ["To pass an exam", "To get a job in Japan", "Because the world expands through language", "To translate anime professionally"],
        answerIndex: 2,
        explanation: "The writer feels the world expands through language and wants to continue (言葉を通じて、世界が広がっていく感じがするからだ)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-16 — The four seasons and Japanese culture
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-16",
    title: "四季[しき]と日本[にほん]の文化[ぶんか]",
    titleReading: "しきとにほんのぶんか",
    level: "N3",
    summary: "How Japan's four distinct seasons shape its culture, from cherry blossoms in spring to winter nabe dishes, and the aesthetic sensibility they have fostered.",
    estMinutes: 7,
    tags: ["seasons", "culture", "nature"],
    body: [
      "日本[にほん]には、春[はる]、夏[なつ]、秋[あき]、冬[ふゆ]という四[よ]つの季節[きせつ]がはっきりとある。この四季[しき]は、日本[にほん]の文化[ぶんか]や人[ひと]の生活[せいかつ]に深[ふか]く根[ね]を下[お]ろしている。",
      "春[はる]には桜[さくら]が咲[さ]き、人[ひと]々は花見[はなみ]を楽[たの]しむ。桜[さくら]は日本[にほん]を代表[だいひょう]する花[はな]であり、その短[みじか]い花期[かき]は、人生[じんせい]のはかなさを人[ひと]々に思[おも]い出[だ]させる。",
      "夏[なつ]は祭[まつ]りの季節[きせつ]だ。全国各地[ぜんこくかくち]で花火[はなび]大会[たいかい]や盆踊[ぼんおど]りが行[おこな]われ、人[ひと]々は夜[よる]を徹[て]して楽[たの]しむ。暑[あつ]さを忘[わす]れさせる熱気[ねっき]がある。",
      "秋[あき]になると、葉[は]が赤[あか]や黄色[きいろ]に色[いろ]づく紅葉[もみじ]が人[ひと]々を魅了[みりょう]する。また、食欲[しょくよく]の秋[あき]と言[い]われ、新[あたら]しい米[こめ]や果物[くだもの]が食卓[しょくたく]を飾[かざ]る。",
      "冬[ふゆ]は静[しず]かな季節[きせつ]だ。雪[ゆき]が降[ふ]る地方[ちほう]では、人[ひと]々は暖炉[だんろ]を囲[かこ]み、鍋[なべ]料理[りょうり]を楽[たの]しむ。寒[さむ]さが厳[きび]しいからこそ、温[あたた]かいものの価値[かち]が分[わ]かる。",
      "このように、四季[しき]は日本人[にほんじん]の感覚[かんかく]や美意識[びいしき]を形[かたち]作[づく]ってきた。自然[しぜん]の変化[へんか]を愛[あい]し、それを生活[せいかつ]に取[と]り入[い]れる心[こころ]こそが、日本[にほん]の文化[ぶんか]の根底[こんてい]にある。"
    ],
    translation: [
      "Japan has four distinct seasons: spring, summer, autumn, and winter. These four seasons are deeply rooted in Japanese culture and people's lives.",
      "In spring, cherry blossoms bloom, and people enjoy flower viewing. The cherry blossom is a flower representing Japan, and its short flowering season reminds people of the transience of life.",
      "Summer is the season of festivals. Fireworks displays and Bon dances are held in various places across the country, and people enjoy themselves all through the night. There is a heat that makes people forget the heat.",
      "When autumn comes, leaves turn red and yellow, and the autumn colors fascinate people. Also, it is said to be the autumn of appetite, and new rice and fruit decorate the dining table.",
      "Winter is a quiet season. In regions where snow falls, people gather around the hearth and enjoy nabe dishes. It is precisely because the cold is severe that one understands the value of warm things.",
      "In this way, the four seasons have shaped Japanese people's sensibility and aesthetic sense. The heart of loving changes in nature and incorporating them into life is at the foundation of Japanese culture."
    ],
    questions: [
      {
        q: "What blooms in spring according to the passage?",
        choices: ["Plum blossoms", "Cherry blossoms", "Sunflowers", "Maple leaves"],
        answerIndex: 1,
        explanation: "In spring, cherry blossoms bloom and people enjoy flower viewing (春には桜が咲き、人々は花見を楽しむ)."
      },
      {
        q: "What does the cherry blossom's short flowering season remind people of?",
        choices: ["The beauty of summer", "The transience of life", "The arrival of winter", "The harvest season"],
        answerIndex: 1,
        explanation: "The short flowering season reminds people of the transience of life (人生のはかなさを思い出させる)."
      },
      {
        q: "What happens in summer across the country?",
        choices: ["Snow festivals", "Fireworks displays and Bon dances", "Cherry blossom viewing", "Autumn leaf viewing"],
        answerIndex: 1,
        explanation: "Fireworks displays and Bon dances are held across the country in summer (全国各地で花火大会や盆踊りが行われる)."
      },
      {
        q: "Why do people understand the value of warm things in winter?",
        choices: ["Because they spend more time at home", "Because the cold is severe", "Because warm things are expensive", "Because they get sick easily"],
        answerIndex: 1,
        explanation: "It is precisely because the cold is severe that one understands the value of warm things (寒さが厳しいからこそ、温かいものの価値が分かる)."
      },
      {
        q: "What is at the foundation of Japanese culture according to the passage?",
        choices: ["Loving nature's changes and incorporating them into life", "Modern technology and growth", "Western values and ideas", "Economic competition"],
        answerIndex: 0,
        explanation: "The heart of loving nature's changes and incorporating them into life is the foundation of Japanese culture (自然の変化を愛し、それを生活に取り入れる心こそが、日本の文化の根底にある)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-17 — Mental health awareness
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-17",
    title: "心[こころ]の健康[けんこう]：見逃[みのが]せない課題[かだい]",
    titleReading: "こころのけんこう：みのがせないかだい",
    level: "N3",
    summary: "The rising awareness of mental health in Japan, the impact of social media on young people, and why listening to one's own heart matters.",
    estMinutes: 7,
    tags: ["mental health", "society", "wellbeing"],
    body: [
      "近年[きんねん]、日本[にほん]でも心[こころ]の健康[けんこう]に対[たい]する関心[かんしん]が高[たか]まっている。ストレスや不安[ふあん]を抱[かか]える人[ひと]が増[ふ]え、社会[しゃかい]全体[ぜんたい]で対応[たいおう]が求[もと]められている。",
      "以前[いぜん]は、心[こころ]の問題[もんだい]は個[こ]人[じん]の弱[よわ]さだと思[おも]われがちだった。しかし今[いま]では、誰[だれ]でもかかる可能性[かのうせい]のある病気[びょうき]として理解[りかい]されるようになってきた。",
      "特[とく]に若者[わかもの]の間[あいだ]で、SNSが原因[げんいん]のストレスが問題[もんだい]になっている。他人[たにん]と比[くら]べる機会[きかい]が増[ふ]え、自[みずか]分[ぶん]を否[ひ]定[てい]的[てき]に見[み]てしまう人[ひと]が少[すく]なくない。",
      "一方[いっぽう]で、相談[そうだん]できる場[ば]が増[ふ]えたことも事実[じじつ]だ。学校[がっこう]にはカウンセラーが置[お]かれ、企業[きぎょう]でもメンタルヘルス対策[たいさく]が進[すす]んでいる。しかし、まだ利用[りよう]に抵抗[ていこう]を感[かん]じる人[ひと]も多[おお]い。",
      "大切[たいせつ]なのは、早[はや]く気[き]づくことだ。異変[いへん]を感[かん]じたら、無理[むり]をせずに誰[だれ]かに話[はな]すことが回復[かいふく]への第一歩[だいいっぽ]である。一人[ひとり]で抱[かか]え込[こ]む必要[ひつよう]はない。",
      "心[こころ]の健康[けんこう]は、体[からだ]の健康[けんこう]と同[おな]じくらい大切[たいせつ]だ。互[たが]いに支[ささ]え合[あ]える社会[しゃかい]を作[つく]るためには、まず私[わたし]たち一人[ひとり]ひとりが、心[こころ]の声[こえ]に耳[みみ]を傾[かたむ]けることから始[はじ]めたい。"
    ],
    translation: [
      "In recent years, interest in mental health has been rising in Japan too. The number of people suffering from stress and anxiety is increasing, and society as a whole is required to respond.",
      "In the past, mental problems tended to be thought of as an individual's weakness. However, nowadays they have come to be understood as illnesses that anyone can develop.",
      "Especially among young people, stress caused by social media has become a problem. Opportunities to compare with others have increased, and not a few people look at themselves negatively.",
      "On the other hand, it is also a fact that places to consult have increased. Counselors are placed in schools, and mental health measures are advancing in companies as well. However, there are still many people who feel resistance to using them.",
      "What is important is to notice early. If you feel something wrong, talking to someone without overdoing it is the first step toward recovery. There is no need to hold it in alone.",
      "Mental health is just as important as physical health. In order to create a society where we can support one another, I would like to start by each of us listening to the voice of our hearts."
    ],
    questions: [
      {
        q: "What has been rising in Japan in recent years?",
        choices: ["Interest in physical fitness", "Interest in mental health", "Interest in dieting", "Interest in wealth"],
        answerIndex: 1,
        explanation: "Interest in mental health has been rising in recent years (心の健康に対する関心が高まっている)."
      },
      {
        q: "How were mental problems thought of in the past?",
        choices: ["As illnesses anyone can develop", "As an individual's weakness", "As a genetic issue", "As a seasonal problem"],
        answerIndex: 1,
        explanation: "In the past, mental problems tended to be seen as an individual's weakness (個人の弱さだと思われがちだった)."
      },
      {
        q: "What causes stress among young people according to the passage?",
        choices: ["School exams", "Social media", "Part-time jobs", "Family expectations"],
        answerIndex: 1,
        explanation: "Stress caused by social media has become a problem among young people (SNSが原因のストレスが問題になっている)."
      },
      {
        q: "What is the first step toward recovery?",
        choices: ["Taking medicine", "Taking a long rest", "Talking to someone without overdoing it when feeling something wrong", "Changing jobs immediately"],
        answerIndex: 2,
        explanation: "If you feel something wrong, talking to someone without overdoing it is the first step toward recovery (異変を感じたら、無理をせずに誰かに話すことが回復への第一歩である)."
      },
      {
        q: "What does the writer want to start with?",
        choices: ["Exercising more often", "Each of us listening to the voice of our hearts", "Reading more books", "Saving more money"],
        answerIndex: 1,
        explanation: "The writer wants to start by each of us listening to the voice of our hearts (心の声に耳を傾けることから始めたい)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-18 — A small business story
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-18",
    title: "小[ちい]さな町[まち]の洋服店[ようふくてん]",
    titleReading: "ちいさなまちのようふくてん",
    level: "N3",
    summary: "The story of an eighty-two-year-old woman who has kept her small clothing shop open for decades, the warmth it offers, and the people it still serves.",
    estMinutes: 6,
    tags: ["small business", "community", "story"],
    body: [
      "山[やま]のふもとにある小[ちい]さな町[まち]に、一[ひと]つの洋服店[ようふくてん]がある。八十二歳[はちじゅうにさい]の山田[やまだ]おばあちゃんが、一人[ひとり]で切[き]り盛[もり]している店[みせ]だ。",
      "この店[みせ]は、戦後[せんご]まもなく開[ひら]かれた。当時[とうじ]は服[ふく]を作[つく]る人[ひと]が少[すく]なく、町[まち]の人[ひと]たちの頼[たよ]れる存在[そんざい]だった。おばあちゃんの手[て]を通[つう]った服[ふく]は数[かず]え切[き]れない。",
      "時代[じだい]が変[か]わるにつれて、大型[おおがた]店[てん]やネット通販[つうはん]が増[ふ]え、客[きゃく]は減[へ]っていった。それでもおばあちゃんは店[みせ]を閉[と]じなかった。「誰[だれ]かが困[こま]ったときに、ここで買[か]えると思[おも]ってくれているから」と言[い]う。",
      "実[じつ]際[さい]、特別[とくべつ]な服[ふく]の修繕[しゅうぜん]や、体[からだ]に合[あ]わせて作[つく]るオーダーメイドは、どこでもできない。そういう細[こま]かい仕事[しごと]を頼[たの]む人[ひと]が、今[いま]も足[あし]を運[はこ]ぶ。",
      "ある日[ひ]、若[わか]い女[おんな]の子[こ]が店[みせ]に来[き]た。亡[な]くなったおばあさんの着物[きもの]を直[なお]してほしいと言[い]う。涙[なみだ]を浮[う]かべる彼女[かのじょ]を見[み]て、山田[やまだ]おばあちゃんは無償[むしょう]で引[ひ]き受[う]けた。",
      "店[みせ]の利益[りえき]は少[すく]ないかもしれない。しかし、そこにはお金[かね]では買[か]えない温[あたた]かさがある。小[ちい]さな店[みせ]の灯[あか]りは、町[まち]の人[ひと]たちの心[こころ]を少[すこ]しずつ照[て]らし続[つづ]けている。"
    ],
    translation: [
      "In a small town at the foot of a mountain, there is a clothing store. It is a shop run single-handedly by Yamada obaachan, who is eighty-two years old.",
      "This shop was opened shortly after the war. At that time, there were few people who made clothes, and it was a reliable presence for the townspeople. Countless clothes passed through the old woman's hands.",
      "As times changed, large stores and online shopping increased, and customers decreased. Even so, the old woman did not close the shop. She says it is because someone thinks they can buy here when they are in trouble.",
      "In fact, special clothing repairs and custom-made clothes fitted to the body cannot be done just anywhere. People who ask for such detailed work still visit the shop.",
      "One day, a young girl came to the shop. She said she wanted her late grandmother's kimono fixed. Seeing her with tears in her eyes, Yamada obaachan took it on for free.",
      "The shop's profits may be small. However, there is a warmth there that cannot be bought with money. The light of the small shop continues to illuminate the hearts of the townspeople little by little."
    ],
    questions: [
      {
        q: "How old is Yamada obaachan?",
        choices: ["Seventy-two", "Eighty-two", "Ninety-two", "Sixty-two"],
        answerIndex: 1,
        explanation: "Yamada obaachan is eighty-two years old (八十二歳の山田おばあちゃん)."
      },
      {
        q: "When was the shop opened?",
        choices: ["Shortly after the war", "Recently", "During the Edo period", "About ten years ago"],
        answerIndex: 0,
        explanation: "The shop was opened shortly after the war (戦後まもなく開かれた)."
      },
      {
        q: "Why didn't she close the shop even as customers decreased?",
        choices: ["Because she had no other skills", "Because someone thinks they can buy there when in trouble", "Because her family forced her to", "Because it was still very profitable"],
        answerIndex: 1,
        explanation: "She says someone thinks they can buy there when in trouble (誰かが困ったときに、ここで買えると思ってくれているから)."
      },
      {
        q: "What did the young girl want fixed?",
        choices: ["Her own dress", "Her late grandmother's kimono", "A school uniform", "A wedding dress"],
        answerIndex: 1,
        explanation: "The young girl wanted her late grandmother's kimono fixed (亡くなったおばあさんの着物を直してほしい)."
      },
      {
        q: "What does the shop have that cannot be bought with money?",
        choices: ["Cheap prices", "Warmth", "Famous brands", "Fast service"],
        answerIndex: 1,
        explanation: "There is a warmth there that cannot be bought with money (お金では買えない温かさがある)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-19 — Urban vs rural life
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-19",
    title: "都会[とかい]と田舎[いなか]：二[ふた]つの生活[せいかつ]",
    titleReading: "とかいといなか：ふたつのせいかつ",
    level: "N3",
    summary: "A comparison of city and countryside life in Japan, the appeal and challenges of each, and how remote work is changing where people choose to live.",
    estMinutes: 7,
    tags: ["urban", "rural", "lifestyle", "migration"],
    body: [
      "日本[にほん]で暮[く]らす場所[ばしょ]を選[えら]ぶとき、都会[とかい]と田舎[いなか]のどちらがいいかは、人[ひと]によって大[おお]きく分[わ]かれる。それぞれに魅力[みりょく]もあれば、課題[かだい]もある。",
      "都会[とかい]の最大[さいだい]の魅力[みりょく]は、便利[べんり]さだ。交通[こうつう]機関[きかん]が発達[はったつ]し、店[みせ]や病院[びょういん]も近[ちか]くにある。仕事[しごと]の選択肢[せんたくし]も広[ひろ]く、文化[ぶんか]施設[しせつ]も充実[じゅうじつ]している。",
      "一方[いっぽう]で、都会[とかい]は人[ひと]が多[おお]く、騒[さわ]がしい。家賃[やちん]も高[たか]く、自然[しぜん]に触[ふ]れる機会[きかい]が少[すく]ない。人[ひと]との関[かか]わりが浅[あさ]くなりがちで、孤独[こどく]を感[かん]じる人[ひと]もいる。",
      "田舎[いなか]では、自然[しぜん]に囲[かこ]まれ、ゆったりとした生活[せいかつ]が送[おく]れる。家賃[やちん]も安[やす]く、地元[じもと]の人[ひと]との関[かか]わりも深[ふか]い。四季[しき]を肌[はだ]で感[かん]じながら暮[く]らせるのは、田舎[いなか]ならではだ。",
      "ただし、田舎[いなか]には不便[ふべん]さもある。車[くるま]がないと生活[せいかつ]できない場合[ばあい]が多[おお]く、仕事[しごと]の選択肢[せんたくし]も限[かぎ]られる。若[わか]い人[ひと]が都会[とかい]へ出[で]ていき、過疎化[かそか]が進[すす]む問題[もんだい]も深刻[しんこく]だ。",
      "最近[さいきん]は、リモートワークの普及[ふきゅう]で、都会[とかい]を離[はな]れて田舎[いなか]に移住[いじゅう]する人[ひと]も増[ふ]えている。どちらがいいとは言[い]えないが、自[みずか]分[ぶん]のライフスタイルに合[あ]った場所[ばしょ]を選[えら]ぶことが大切[たいせつ]だ。"
    ],
    translation: [
      "When choosing a place to live in Japan, whether the city or the countryside is better differs greatly from person to person. Each has its appeal and its challenges.",
      "The biggest appeal of the city is convenience. Transportation is developed, and shops and hospitals are nearby. The choices for work are also wide, and cultural facilities are substantial.",
      "On the other hand, cities have many people and are noisy. Rent is also high, and opportunities to touch nature are few. Ties with people tend to become shallow, and some people feel loneliness.",
      "In the countryside, surrounded by nature, one can live a relaxed life. Rent is also cheap, and ties with local people are deep. Being able to live while feeling the four seasons on one's skin is something only the countryside can offer.",
      "However, the countryside also has inconveniences. In many cases one cannot live without a car, and choices for work are limited. The problem that young people leave for the city and depopulation advances is also serious.",
      "Recently, with the spread of remote work, people leaving the city to migrate to the countryside are also increasing. It is impossible to say which is better, but it is important to choose a place that suits one's lifestyle."
    ],
    questions: [
      {
        q: "What is the biggest appeal of the city?",
        choices: ["Cheap rent", "Convenience", "Abundant nature", "Quiet surroundings"],
        answerIndex: 1,
        explanation: "The biggest appeal of the city is convenience (都会の最大の魅力は、便利さだ)."
      },
      {
        q: "What problem do some people feel in the city?",
        choices: ["Too much nature", "Loneliness due to shallow ties with people", "Too few shops nearby", "A lack of transportation"],
        answerIndex: 1,
        explanation: "Ties tend to be shallow and some people feel loneliness in the city (人との関わりが浅くなりがちで、孤独を感じる人もいる)."
      },
      {
        q: "What is something only the countryside can offer according to the passage?",
        choices: ["Cheap restaurants", "Feeling the four seasons on one's skin", "Many job choices", "Big hospitals nearby"],
        answerIndex: 1,
        explanation: "Feeling the four seasons on one's skin is something only the countryside can offer (四季を肌で感じながら暮らせるのは、田舎ならではだ)."
      },
      {
        q: "What serious problem does the countryside face?",
        choices: ["Too many young people", "Young people leaving and depopulation advancing", "High rent everywhere", "Too many shops opening"],
        answerIndex: 1,
        explanation: "Young people leave for the city and depopulation advances, which is a serious problem (若い人が都会へ出ていき、過疎化が進む問題も深刻だ)."
      },
      {
        q: "Why are more people migrating to the countryside recently?",
        choices: ["Higher salaries there", "The spread of remote work", "Government orders", "Cheaper food prices"],
        answerIndex: 1,
        explanation: "With the spread of remote work, more people are migrating to the countryside (リモートワークの普及で、都会を離れて田舎に移住する人も増えている)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-20 — The importance of communication
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-20",
    title: "コミュニケーションの力[ちから]",
    titleReading: "こみゅにけーしょんのちから",
    level: "N3",
    summary: "Why communication is essential to human life, how smartphones have changed face-to-face interaction, and what true communication requires of the heart.",
    estMinutes: 6,
    tags: ["communication", "relationships", "society"],
    body: [
      "人[ひと]は一人[ひとり]では生[い]きられない。誰[だれ]かと関[かか]わり、支[ささ]え合[あ]いながら生[い]きていくためには、コミュニケーションの力[ちから]が欠[か]かせない。",
      "言葉[ことば]は、思[おも]いを伝[つた]えるための最[もっと]も基本的[きほんてき]な手段[しゅだん]だ。しかし、ただ話[はな]すだけでは足[た]りない。相手[あいて]の立場[たちば]に立[た]ち、相手[あいて]の気持[きも]ちに耳[みみ]を傾[かたむ]けることが本当[ほんとう]のコミュニケーションである。",
      "近年[きんねん]、スマートフォンの普及[ふきゅう]により、面[おも]と向[む]かって話[はな]す機会[きかい]が減[へ]ったという人[ひと]が多[おお]い。文字[もじ]ばかりやり取[と]りするうちに、相手[あいて]の表情[ひょうじょう]や声[こえ]のトーンから読[よ]み取[と]れる情報[じょうほう]を見逃[みのが]している。",
      "コミュニケーションがうまくいかないと、誤解[ごかい]が生[しょう]じる。職場[しょくば]でも家庭[かてい]でも、ちゃんと話[はな]し合[あ]わないことが、関係[かんけい]を悪[わる]くする原因[げんいん]になることが少[すく]なくない。",
      "大切[たいせつ]なのは、まず自[みずか]分[ぶん]から心[こころ]を開[ひら]くことだ。弱[よわ]い部分[ぶぶん]を見[み]せることを恥[は]じず、素直[すなお]に感[かん]じたことを伝[つた]えることで、相手[あいて]も心[こころ]を開[ひら]いてくれる。",
      "コミュニケーションは技術[ぎじゅつ]であると同時[どうじ]に、心[こころ]の問題[もんだい]でもある。相手[あいて]を尊[とうと]ぶ気持[きも]ちを忘[わす]れないかぎり、言葉[ことば]は必[かなら]ず私[わたし]たちを結[むす]びつける力[ちから]となるだろう。"
    ],
    translation: [
      "People cannot live alone. In order to live while connecting with someone and supporting each other, the power of communication is indispensable.",
      "Words are the most basic means to convey feelings. However, just speaking is not enough. Standing in the other person's position and listening to their feelings is true communication.",
      "In recent years, with the spread of smartphones, many people say that opportunities to talk face-to-face have decreased. While exchanging mostly text, they miss information that can be read from the other person's facial expression and tone of voice.",
      "When communication does not go well, misunderstandings arise. Whether at the workplace or at home, it is not uncommon that not properly talking with each other becomes the cause of worsening relationships.",
      "What is important is to open one's heart first. By not being ashamed to show weak parts and conveying honestly what one feels, the other person also opens their heart.",
      "Communication is a technique and at the same time a matter of the heart. As long as we do not forget the feeling of respecting the other person, words will surely become a power that connects us."
    ],
    questions: [
      {
        q: "What is indispensable for people to live while supporting each other?",
        choices: ["Money", "The power of communication", "Modern technology", "Free time"],
        answerIndex: 1,
        explanation: "The power of communication is indispensable to live while supporting each other (コミュニケーションの力が欠かせない)."
      },
      {
        q: "What is true communication according to the passage?",
        choices: ["Speaking a lot", "Standing in the other person's position and listening to their feelings", "Using difficult words", "Sending many messages"],
        answerIndex: 1,
        explanation: "True communication is standing in the other's position and listening to their feelings (相手の立場に立ち、相手の気持ちに耳を傾けること)."
      },
      {
        q: "What do people miss by exchanging mostly text via smartphones?",
        choices: ["The latest news", "Information from facial expression and tone of voice", "Money transfers", "Free time"],
        answerIndex: 1,
        explanation: "They miss information that can be read from facial expression and tone of voice (相手の表情や声のトーンから読み取れる情報を見逃している)."
      },
      {
        q: "What is a cause of worsening relationships at workplace and home?",
        choices: ["Talking too much", "Not properly talking with each other", "Working too hard", "Living apart"],
        answerIndex: 1,
        explanation: "Not properly talking with each other often worsens relationships (ちゃんと話し合わないことが関係を悪くする原因になる)."
      },
      {
        q: "What is important to do first in communication?",
        choices: ["Wait for the other person to speak", "Open one's own heart first", "Use only formal language", "Hide all weak parts"],
        answerIndex: 1,
        explanation: "What is important is to open one's heart first (まず自分から心を開くことだ)."
      }
    ]
  }
];
