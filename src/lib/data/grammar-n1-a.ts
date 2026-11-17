import type { GrammarData } from "@/lib/types";

// JLPT N1 grammar — Shinzaizen Master style, chapter-wise by category.
// Furigana notation: kanji readings inline as 漢字[かんじ].
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// Total: 50 points across 10 categories.
// IDs: gn1-01 .. gn1-50.

export const grammarN1A: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // CONDITIONALS — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-01",
    point: "〜たところで",
    reading: "ta tokoro de",
    level: "N1",
    category: "Conditionals",
    meaning: "even if... (the result is unsatisfactory or pointless)",
    structure: "V（た形）+ ところで",
    explanation:
      "Indicates that even if an action is taken, the outcome will be unsatisfactory, limited, or futile. Often paired with quantitative or negative main clauses to imply that the effort is wasted.",
    formation:
      "V-た + ところで\n例: 行[い]ったところで / 言[い]ったところで / 待[ま]ったところで",
    examples: [
      { jp: "今[いま]さら謝[あやま]ったところで、もう遅[おく]い。", en: "Even if you apologize now, it's already too late." },
      { jp: "いくら悩[なや]んだところで、答[こた]えは出[で]ないだろう。", en: "No matter how much you worry, you probably won't find an answer." }
    ],
    notes:
      "Differs from 〜ても in that it strongly implies the result is pointless, limited, or already lost. Often paired with いくら or 疑問詞 + 〜う/〜ようと.",
    related: ["gn1-04", "gn1-05"]
  },

  {
    id: "gn1-02",
    point: "〜うとも〜まいとも",
    reading: "...to mo...mai to mo",
    level: "N1",
    category: "Conditionals",
    meaning: "whether one does... or does not... (either way, the same holds)",
    structure: "V（意向形）+ とも、V（辞書形）+ まい + とも",
    explanation:
      "Lists two opposing actions as a fixed pair, asserting that the result holds regardless of which is chosen. A literary, emphatic counterpart to 〜ても〜なくても.",
    formation:
      "V-意向形 + とも、V-辞書形 + まい + とも\n例: 行[い]こうとも行[い]くまいとも / 来[こ]ようとも来[こ]るまいとも",
    examples: [
      { jp: "彼[かれ]が行[い]こうとも行[い]くまいとも、私[わたし]には関係[かんけい]ない。", en: "Whether he goes or not, it doesn't matter to me." },
      { jp: "雨[あめ]が降[ふ]ろうとも降[ふ]るまいとも、試合[しあい]は決行[けっこう]する。", en: "Whether it rains or not, the match will go on." }
    ],
    notes:
      "More literary and emphatic than 〜ても〜なくても. Often appears in written N1 texts. The volitional + とも form can also stand alone: 行[い]こうとも.",
    related: ["gn1-31"]
  },

  {
    id: "gn1-03",
    point: "〜ずにはいられない",
    reading: "...zu ni wa irarenai",
    level: "N1",
    category: "Conditionals",
    meaning: "cannot help but...; cannot resist doing...",
    structure: "V（ない形，去掉ない）+ ずにはいられない",
    explanation:
      "Expresses an irresistible urge or unavoidable emotion—an action the speaker cannot refrain from despite wanting to. Usually used for involuntary reactions such as laughter, tears, or anger.",
    formation:
      "V-ない → V-ず + にはいられない\n例: 笑[わら]わずにはいられない / 泣[な]かずにはいられない / 怒[いか]らずにはいられない",
    examples: [
      { jp: "あの動画[どうが]を見[み]ると、笑[わら]わずにはいられない。", en: "Whenever I watch that video, I can't help laughing." },
      { jp: "その悲[かな]しい話[はなし]を聞[き]いて、泣[な]かずにはいられなかった。", en: "Hearing that sad story, I couldn't help crying." }
    ],
    notes:
      "Always negative in form, always expresses an involuntary reaction. Differs from 〜ずにはおかない (deliberate, gn1-29); this pattern is more about involuntary emotion.",
    related: ["gn1-29"]
  },

  {
    id: "gn1-04",
    point: "〜ないことには",
    reading: "...nai koto ni wa",
    level: "N1",
    category: "Conditionals",
    meaning: "unless...; without... (the next step cannot follow)",
    structure: "V（ない形）+ ことには / N・Na-adj（でない）+ ことには",
    explanation:
      "Indicates a necessary precondition—if the condition is not met, the expected result cannot follow. The main clause is almost always negative, emphasizing that nothing can begin without it.",
    formation:
      "V-ない + ことには\nN + でない + ことには\n例: 話[はな]さないことには / お金[かね]がないことには / 元気[げんき]でないことには",
    examples: [
      { jp: "詳[くわ]しい話[はなし]を聞[き]かないことには、助[たす]けられない。", en: "Unless I hear the details, I can't help you." },
      { jp: "実際[じっさい]に会[あ]ってみないことには、本当[ほんとう]のところは分[わ]からない。", en: "Without actually meeting, I can't know the truth." }
    ],
    notes:
      "Strongly conditional; the main clause is almost always negative. Similar to 〜なければ but more emphatic about preconditions and missing information.",
    related: ["gn1-01", "gn1-05"]
  },

  {
    id: "gn1-05",
    point: "〜ものなら",
    reading: "...mono nara",
    level: "N1",
    category: "Conditionals",
    meaning: "if one could...; if it were somehow possible to...",
    structure: "V（可能形 / 意向形）+ ものなら",
    explanation:
      "Expresses a hypothetical—'if it were somehow possible, I would.' Suggests the action is unlikely or difficult. With potential verbs it implies a challenge; with volitional it implies a remote 'what if.'",
    formation:
      "V-可能形 + ものなら\nV-意向形 + ものなら\n例: やれるものなら / 戻[もど]れるものなら / 飛[と]ぼうものなら",
    examples: [
      { jp: "戻[もど]れるものなら、あの頃[ころ]に戻[もど]りたい。", en: "If I could go back, I'd want to return to those days." },
      { jp: "一度[いちど]でいいから、空[そら]を飛[と]べるものなら飛[と]んでみたい。", en: "If I could fly, even once, I'd love to try." }
    ],
    notes:
      "Often conveys longing or challenge. With volitional form (飛[と]ぼうものなら) it means 'if one were to...,' often with a strong consequential main clause.",
    related: ["gn1-01", "gn1-04"]
  },

  // ───────────────────────────────────────────────────────────
  // CAUSE / REASON — 6 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-06",
    point: "〜ばこそ",
    reading: "...ba koso",
    level: "N1",
    category: "Cause/Reason",
    meaning: "precisely because...; exactly for that reason",
    structure: "V（ば形）/ イ-adj（〜ければ）/ N・Na-adj（〜であれば）+ こそ",
    explanation:
      "Emphasizes the sole or most important reason—'it is exactly because... that I do this.' The speaker stresses that the cause justifies the action, often a tough or unpopular one.",
    formation:
      "V-ば + こそ / イ-adj + ければ + こそ / N + であれば + こそ\n例: あるばこそ / 難[むずか]しければこそ / 親[おや]であればこそ",
    examples: [
      { jp: "子[こ]どものためを思[おも]えばこそ、厳[きび]しく言[い]ったのだ。", en: "It was precisely out of concern for my child that I spoke strictly." },
      { jp: "好[す]きであればこそ、続[つづ]けられるのだ。", en: "It is exactly because I love it that I can keep going." }
    ],
    notes:
      "Strongly emphatic, often used to justify a first-person volitional action. Literary tone. Differs from plain 〜 because it stresses that this is THE reason.",
    related: ["gn1-07", "gn1-08"]
  },

  {
    id: "gn1-07",
    point: "〜だけあって / 〜だけに",
    reading: "...dake atte / ...dake ni",
    level: "N1",
    category: "Cause/Reason",
    meaning: "as expected of...; precisely because of that, all the more",
    structure: "N / V（普通形）+ だけあって / だけに",
    explanation:
      "〜だけあって means 'as expected, given the reputation or quality.' 〜だけに means 'because of that very fact, all the more so.' Both show the result is natural given the cause.",
    formation:
      "N + だけあって / だけに\nV（普通形）+ だけあって / だけに\n例: さすがだけあって / 住[す]んでいただけあって / 成功[せいこう]しただけに",
    examples: [
      { jp: "パリに住[す]んでいただけあって、彼[かれ]はフランス料理[りょうり]に詳[くわ]しい。", en: "As expected of someone who lived in Paris, he knows French cuisine well." },
      { jp: "期待[きたい]されただけに、落第[らくだい]の知[し]らせは辛[つら]かった。", en: "All the more because of the high expectations, the news of failing was painful." }
    ],
    notes:
      "だけあって implies a positive expectation fulfilled. だけに implies 'precisely because of that... all the more so,' and can be used for negative or positive emphasis.",
    related: ["gn1-06"]
  },

  {
    id: "gn1-08",
    point: "〜こととて",
    reading: "...koto tote",
    level: "N1",
    category: "Cause/Reason",
    meaning: "because...; since... (literary, often apologetic)",
    structure: "N + の + こととて / V（普通形）+ こととて",
    explanation:
      "A literary causal conjunction—'since it is the case that...' Often used to excuse or explain a lapse, softening blame or asking for understanding.",
    formation:
      "N + の + こととて\nV（普通形）+ こととて\n例: 初[はじ]めてのこととて / 何[なに]も知[し]らぬこととて / 不慣[ふな]れなこととて",
    examples: [
      { jp: "初[はじ]めてのこととて、ご迷惑[めいわく]をおかけしました。", en: "Because this is my first time, I have caused you trouble." },
      { jp: "何[なに]も知[し]らぬこととて、お許[ゆる]しください。", en: "Please forgive me, as I knew nothing about it." }
    ],
    notes:
      "Formal and somewhat archaic, often used in letters or apologies. Implies 'please understand and excuse.' Similar in function to 〜ので but more humble.",
    related: ["gn1-06", "gn1-09"]
  },

  {
    id: "gn1-09",
    point: "〜とあって",
    reading: "...to atte",
    level: "N1",
    category: "Cause/Reason",
    meaning: "because of the special circumstance that...; as it is...",
    structure: "N / V（普通形）+ とあって",
    explanation:
      "Indicates a special or notable circumstance that naturally causes the result. 'Because it's such a situation, naturally...' Used for objective, observable facts, not personal reasons.",
    formation:
      "N + とあって\nV（普通形）+ とあって\n例: 夏休[なつやす]みとあって / 人気[にんき]とあって / 連休[れんきゅう]とあって",
    examples: [
      { jp: "夏休[なつやす]みとあって、海[うみ]は家族連[かぞくづ]れで賑[にぎ]わっている。", en: "Because it's summer vacation, the beach is crowded with families." },
      { jp: "限定[げんてい]商品[しょうひん]とあって、店[みせ]の前[まえ]に長[なが]い列[れつ]ができた。", en: "Since it's a limited item, a long line formed in front of the store." }
    ],
    notes:
      "Used for objective, observable circumstances—often in news or descriptive writing. Not for personal subjective reasons or excuses.",
    related: ["gn1-06", "gn1-08"]
  },

  {
    id: "gn1-10",
    point: "〜あまり",
    reading: "...amari",
    level: "N1",
    category: "Cause/Reason",
    meaning: "due to excessive...; out of sheer (emotion)",
    structure: "N + の + あまり / V（辞書形 / た形）+ あまり",
    explanation:
      "Indicates a cause involving excess—an extreme feeling or state leads to an unexpected or extreme result. Usually takes abstract nouns expressing degree.",
    formation:
      "N + の + あまり\nV（辞書形 / た形）+ あまり\n例: 喜[よろこ]びのあまり / 驚[おどろ]きのあまり / 忙[いそが]しさのあまり",
    examples: [
      { jp: "喜[よろこ]びのあまり、涙[なみだ]が出[で]た。", en: "Out of sheer joy, tears came out." },
      { jp: "忙[いそが]しさのあまり、健康[けんこう]を損[そこ]ねてしまった。", en: "Due to being so busy, I ended up damaging my health." }
    ],
    notes:
      "Always implies an extreme degree. Usually takes abstract nouns like 喜[よろこ]び, 驚[おどろ]き, 悲[かな]しみ, 忙[いそが]しさ, 緊張[きんちょう].",
    related: ["gn1-06"]
  },

  {
    id: "gn1-11",
    point: "〜ではあるまいし",
    reading: "...de wa arumai shi",
    level: "N1",
    category: "Cause/Reason",
    meaning: "it's not as if you're...; you're not... so don't act like it",
    structure: "N + ではあるまいし",
    explanation:
      "Used to dismiss an excessive or dramatic reaction: 'It's not as if you're a child, so why act like one?' Implies the listener should behave according to their actual status.",
    formation:
      "N + ではあるまいし\n例: 子供[こども]ではあるまいし / 初心者[しょしんしゃ]ではあるまいし / 他人[たにん]ではあるまいし",
    examples: [
      { jp: "子供[こども]ではあるまいし、泣[な]くことはないだろう。", en: "You're not a child, so there's no need to cry." },
      { jp: "初心者[しょしんしゃ]ではあるまいし、もっと上手[じょうず]にできるはずだ。", en: "You're not a beginner, so you should be able to do better." }
    ],
    notes:
      "Often a mild reproach or encouragement. Implies the listener should behave according to their actual status. Colloquial but firmly N1.",
    related: ["gn1-06"]
  },

  // ───────────────────────────────────────────────────────────
  // TIME / SEQUENCE — 6 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-12",
    point: "〜が早いか",
    reading: "...ga hayai ka",
    level: "N1",
    category: "Time/Sequence",
    meaning: "as soon as...; no sooner... than...",
    structure: "V（辞書形）+ が早いか、V（た形）",
    explanation:
      "Two actions occur in immediate succession—the moment the first happens, the second follows. The second verb is in the past tense and is something done without pause or reflection.",
    formation:
      "V（辞書形）+ が早いか、V（た形）\n例: ベルが鳴[な]るが早いか / 家[いえ]に帰[かえ]るが早いか",
    examples: [
      { jp: "ベルが鳴[な]るが早いか、生徒[せいと]たちは教室[きょうしつ]を飛[と]び出[だ]した。", en: "As soon as the bell rang, the students dashed out of the classroom." },
      { jp: "父[ちち]は家[いえ]に帰[かえ]るが早いか、パソコンに向[む]かった。", en: "No sooner did my father get home than he sat at the computer." }
    ],
    notes:
      "Stresses instantaneous succession. The second action is something spontaneous, not premeditated. Similar to 〜や否[いな]や (gn1-13) but slightly more spoken-style.",
    related: ["gn1-13", "gn1-14", "gn1-15"]
  },

  {
    id: "gn1-13",
    point: "〜や否や",
    reading: "...ya ina ya",
    level: "N1",
    category: "Time/Sequence",
    meaning: "as soon as...; no sooner... than... (literary)",
    structure: "V（辞書形）+ や / や否や、V（た形）",
    explanation:
      "Literary pattern meaning the moment the first action occurs, the second follows immediately. More formal and written-style than 〜が早いか.",
    formation:
      "V（辞書形）+ や / や否や\n例: 起[お]きるや否や / 着[つ]くや否や / 入[はい]るや否や",
    examples: [
      { jp: "先生[せんせい]が教室[きょうしつ]に入[はい]るや否や、子供[こども]たちは静[しず]かになった。", en: "As soon as the teacher entered the classroom, the children fell silent." },
      { jp: "電車[でんしゃ]が止[と]まるや否や、乗客[じょうきゃく]は一斉[いっせい]に立[た]ち上[あ]がった。", en: "The moment the train stopped, passengers rose all at once." }
    ],
    notes:
      "Written style; common in novels, news, and essays. や alone is also acceptable: 着[つ]くや、走[はし]り出[だ]した. The second verb is in the past tense.",
    related: ["gn1-12", "gn1-14"]
  },

  {
    id: "gn1-14",
    point: "〜次第",
    reading: "...shidai",
    level: "N1",
    category: "Time/Sequence",
    meaning: "as soon as...; immediately upon...",
    structure: "V（ます形，去掉ます）+ 次第 / N + 次第",
    explanation:
      "Indicates that once the first action is completed, the next will follow promptly. Common in business and formal contexts for prompt action or reporting.",
    formation:
      "V-ます形 + 次第\nN + 次第\n例: 分[わ]かり次第 / 到着[とうちゃく]次第 / 見[み]つけ次第",
    examples: [
      { jp: "詳細[しょうさい]が分[わ]かり次第、ご連絡[れんらく]いたします。", en: "As soon as I know the details, I will contact you." },
      { jp: "現場[げんば]に到着[とうちゃく]次第、お知[し]らせします。", en: "I will let you know immediately upon arriving at the site." }
    ],
    notes:
      "Cannot be used for past events—only for future/present intentions. Polite and businesslike. Often followed by いたします / お知[し]らせします / ご報告[ほうこく]します.",
    related: ["gn1-12", "gn1-13"]
  },

  {
    id: "gn1-15",
    point: "〜そばから",
    reading: "...soba kara",
    level: "N1",
    category: "Time/Sequence",
    meaning: "as soon as... [but undone]; no sooner... than (repeatedly)",
    structure: "V（辞書形 / た形）+ そばから",
    explanation:
      "Indicates a frustrating cycle: as soon as one thing is done, it is undone or another arises, repeatedly. Conveys exasperation at the recurring pattern.",
    formation:
      "V（辞書形 / た形）+ そばから\n例: 片付[かたづ]けるそばから / 教[おし]えるそばから / 覚[おぼ]えるそばから",
    examples: [
      { jp: "子供[こども]は片付[かたづ]けるそばから、またおもちゃを出[だ]す。", en: "As soon as I tidy up, the child takes out the toys again." },
      { jp: "覚[おぼ]えるそばから忘[わす]れてしまう。", en: "No sooner do I memorize it than I forget it." }
    ],
    notes:
      "Implies repetition and frustration. Differs from 〜が早いか in that it describes a recurring, bothersome cycle rather than a single event.",
    related: ["gn1-12", "gn1-13"]
  },

  {
    id: "gn1-16",
    point: "〜に至るまで",
    reading: "...ni itaru made",
    level: "N1",
    category: "Time/Sequence",
    meaning: "up to...; even reaching as far as...",
    structure: "N + に至るまで",
    explanation:
      "Indicates the extent or final point reached, often emphasizing thoroughness—'all the way up to, and even.' Used to show that a process or scope extends fully to a notable endpoint.",
    formation:
      "N + に至[いた]るまで\n例: 子供[こども]に至[いた]るまで / 細部[さいぶ]に至[いた]るまで / 末端[まったん]に至[いた]るまで",
    examples: [
      { jp: "そのニュースは子供[こども]に至[いた]るまで知[し]っている。", en: "Even children know that news." },
      { jp: "細部[さいぶ]に至[いた]るまで丁寧[ていねい]に検査[けんさ]された。", en: "It was inspected carefully right down to the finest details." }
    ],
    notes:
      "Emphasizes extent or thoroughness. Often follows nouns like 子供, 老人, 細部, 末端. Differs from 〜まで in implying a notable or surprising endpoint.",
    related: ["gn1-12"]
  },

  {
    id: "gn1-17",
    point: "〜た途端（に）",
    reading: "...ta totan (ni)",
    level: "N1",
    category: "Time/Sequence",
    meaning: "the moment...; just as...",
    structure: "V（た形）+ 途端（に）",
    explanation:
      "Indicates an immediate, often surprising consequence triggered the instant the action happens. Used for sudden, unanticipated events rather than planned sequences.",
    formation:
      "V-た + 途端 / 途端に\n例: 立[た]ち上[あ]がった途端 / 見[み]た途端 / 触[さわ]った途端",
    examples: [
      { jp: "立[た]ち上[あ]がった途端に、めまいがした。", en: "The moment I stood up, I felt dizzy." },
      { jp: "彼[かれ]は私[わたし]の顔[かお]を見[み]た途端、逃[に]げ出[だ]した。", en: "As soon as he saw my face, he ran off." }
    ],
    notes:
      "The second event is usually involuntary, surprising, or unintended. Differs from 〜が早いか in that it focuses on a single surprising trigger, not intentional action.",
    related: ["gn1-12", "gn1-13"]
  },

  // ───────────────────────────────────────────────────────────
  // CONTRAST — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-18",
    point: "〜にひきかえ",
    reading: "...ni hikikae",
    level: "N1",
    category: "Contrast",
    meaning: "in contrast to...; unlike...",
    structure: "N + にひきかえ / V（普通形）+ の + にひきかえ",
    explanation:
      "Compares two contrasting items, highlighting how the second differs sharply from the first. 'In contrast to A, B is...'",
    formation:
      "N + にひきかえ\nV（普通形）+ の + にひきかえ\n例: 兄[にい]にひきかえ / 昔[むかし]にひきかえ / 努力[どりょく]したのひきかえ",
    examples: [
      { jp: "兄[にい]にひきかえ、弟[おとうと]はとても静[しず]かだ。", en: "In contrast to his older brother, the younger brother is very quiet." },
      { jp: "昔[むかし]にひきかえ、今[いま]は便利[べんり]な世[よ]の中[なか]になった。", en: "Compared to the past, today's world is much more convenient." }
    ],
    notes:
      "Strong contrast—usually two extremes. Often used to compare people, time periods, or qualities. More literary than 〜と比[くら]べて.",
    related: ["gn1-19", "gn1-22"]
  },

  {
    id: "gn1-19",
    point: "〜とはいえ",
    reading: "...to wa ie",
    level: "N1",
    category: "Contrast",
    meaning: "although...; even so...",
    structure: "N / V（普通形）/ イ-adj / Na-adj（普通形）+ とはいえ",
    explanation:
      "Acknowledges a fact but introduces a contrasting idea—'even though that may be true, still...'. Concedes the prior statement before pivoting.",
    formation:
      "N + である + とはいえ / N + だ + とはいえ\nV・イ-adj（普通形）+ とはいえ\nNa-adj + だ / である + とはいえ\n例: 春[はる]とはいえ / 努力[どりょく]したとはいえ / 簡単[かんたん]だとはいえ",
    examples: [
      { jp: "春[はる]とはいえ、朝[あさ]はまだ寒[さむ]い。", en: "Even though it's spring, mornings are still cold." },
      { jp: "努力[どりょく]したとはいえ、結果[けっか]が出[で]ないのは悔[くや]しい。", en: "Even though I tried hard, it's frustrating that there are no results." }
    ],
    notes:
      "Concedes the prior statement but pivots to a contrasting reality. More formal and literary than 〜けれども. Often appears in essays and criticism.",
    related: ["gn1-18", "gn1-20", "gn1-21"]
  },

  {
    id: "gn1-20",
    point: "〜ながらも",
    reading: "...nagara mo",
    level: "N1",
    category: "Contrast",
    meaning: "although...; even while... (yet)",
    structure: "V（ます形，去掉ます）/ N / イ-adj + ながらも",
    explanation:
      "Expresses a contrast within a continuing state—'even while doing X, Y (which seems contradictory).' Acknowledges a contradiction between an action or state and a result.",
    formation:
      "V-ます形 + ながらも\nN + ながらも\nイ-adj + ながらも\n例: 知[し]りながらも / 子供[こども]ながらも / 悪[わる]ながらも",
    examples: [
      { jp: "彼[かれ]は危険[きけん]を知[し]りながらも、飛[と]び込[こ]んだ。", en: "Although knowing the danger, he dove in." },
      { jp: "子供[こども]ながらも、しっかりとした意見[いけん]を持[も]っている。", en: "Though still a child, he holds firm opinions." }
    ],
    notes:
      "Differs from 〜ながら (simultaneous): 〜ながらも emphasizes a contrastive 'although.' Often used with nouns for 'despite being X,' e.g., 子供ながらも, 初心者ながらも.",
    related: ["gn1-19", "gn1-21"]
  },

  {
    id: "gn1-21",
    point: "〜ものの",
    reading: "...mono no",
    level: "N1",
    category: "Contrast",
    meaning: "although...; but (in reality)...",
    structure: "V（普通形）+ ものの / イ-adj + ものの / Na-adj・N（である）+ ものの",
    explanation:
      "Concedes a fact while introducing a conflicting reality—'even though X is true, in reality Y.' Often signals an unmet expectation or unresolved difficulty.",
    formation:
      "V（普通形）+ ものの\nN + である + ものの\n例: 引[ひ]き受[う]けたものの / 買[か]ったものの / 簡単[かんたん]であるものの",
    examples: [
      { jp: "引[ひ]き受[う]けたものの、自信[じしん]がない。", en: "Although I took it on, I'm not confident." },
      { jp: "新[あたら]しいスマホを買[か]ったものの、使い方[つかいかた]が分[わ]からない。", en: "Although I bought a new smartphone, I don't know how to use it." }
    ],
    notes:
      "The main clause often expresses difficulty, regret, or an unmet expectation. Softer than 〜のに. Very common in N1 reading comprehension passages.",
    related: ["gn1-19", "gn1-20", "gn1-22"]
  },

  {
    id: "gn1-22",
    point: "〜にもかかわらず",
    reading: "...ni mo kakawarazu",
    level: "N1",
    category: "Contrast",
    meaning: "despite...; in spite of...",
    structure: "N + にもかかわらず / V（普通形）+ にもかかわらず",
    explanation:
      "Indicates that the result is contrary to expectation—'despite X, still Y.' Stronger and more formal than 〜のに or 〜けれども.",
    formation:
      "N + にもかかわらず\nV（普通形）+ にもかかわらず\n例: 雨[あめ]にもかかわらず / 病気[びょうき]にもかかわらず / 努力[どりょく]したにもかかわらず",
    examples: [
      { jp: "雨[あめ]にもかかわらず、多[おお]くの観客[かんきゃく]が集[あつ]まった。", en: "Despite the rain, many spectators gathered." },
      { jp: "努力[どりょく]したにもかかわらず、合格[ごうかく]できなかった。", en: "In spite of his efforts, he couldn't pass." }
    ],
    notes:
      "Formal and emphatic. Often used in news, reports, and essays. Can also stand as a conjunction at the start of a sentence: にもかかわらず、...",
    related: ["gn1-19", "gn1-21"]
  },

  // ───────────────────────────────────────────────────────────
  // ASSUMPTION — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-23",
    point: "〜としたら / 〜とすれば",
    reading: "...to shitara / ...to sureba",
    level: "N1",
    category: "Assumption",
    meaning: "if we assume...; supposing that...",
    structure: "N / V（普通形）/ イ-adj / Na-adj（普通形）+ としたら / とすれば",
    explanation:
      "Sets up a hypothetical scenario—'if it is the case that..., what would happen?' Used for speculation and conditional reasoning about uncertain situations.",
    formation:
      "N + だ / である + としたら\nV・イ-adj（普通形）+ としたら\nNa-adj + だ / である + としたら\n例: 雨[あめ]だとしたら / 行[い]くとしたら / 暇[ひま]だとしたら",
    examples: [
      { jp: "もし彼[かれ]の話[はなし]が本当[ほんとう]だとしたら、大変[たいへん]な事[こと]だ。", en: "If his story is true, it's a serious matter." },
      { jp: "海外[かいがい]へ行[い]くとしたら、どこへ行[い]きたいですか。", en: "Supposing you go abroad, where would you like to go?" }
    ],
    notes:
      "Often paired with もし for hypothetical emphasis. The main clause usually asks 'what would you do' or expresses the consequence. 〜とすれば is slightly more formal.",
    related: ["gn1-24", "gn1-25", "gn1-27"]
  },

  {
    id: "gn1-24",
    point: "〜とあれば",
    reading: "...to areba",
    level: "N1",
    category: "Assumption",
    meaning: "if it is the case that...; given that...",
    structure: "N / V（普通形）+ とあれば",
    explanation:
      "Indicates that under such a circumstance, one is willing or obligated to act—'if that's the situation, then I will.' Often expresses a sense of duty or willingness.",
    formation:
      "N + とあれば\nV（普通形）+ とあれば\n例: 必要[ひつよう]とあれば / 頼[たの]まれるとあれば / 子供[こども]のためとあれば",
    examples: [
      { jp: "必要[ひつよう]とあれば、いつでも協力[きょうりょく]する。", en: "If it's needed, I'll cooperate anytime." },
      { jp: "子供[こども]のためとあれば、喜[よろこ]んで引き受[う]ける。", en: "If it's for the children, I'll gladly accept." }
    ],
    notes:
      "Conveys strong willingness or duty. Often used in offers of help or commitments. Formal tone. Differs from 〜としたら in implying a felt obligation to act.",
    related: ["gn1-23"]
  },

  {
    id: "gn1-25",
    point: "〜にしてみれば / 〜にしてみると",
    reading: "...ni shite mireba / ...ni shite miru to",
    level: "N1",
    category: "Assumption",
    meaning: "from the standpoint of...; if seen from X's perspective",
    structure: "N + にしてみれば / にしてみると",
    explanation:
      "Adopts a perspective—'from X's point of view, the situation looks different.' Used to empathize with or contrast viewpoints.",
    formation:
      "N + にしてみれば / にしてみると\n例: 親[おや]にしてみれば / 学生[がくせい]にしてみれば / 経営者[けいえいしゃ]にしてみれば",
    examples: [
      { jp: "親[おや]にしてみれば、子[こ]どもの安全[あんぜん]が一番[いちばん]だ。", en: "From a parent's standpoint, a child's safety comes first." },
      { jp: "学生[がくせい]にしてみれば、宿題[しゅくだい]は少[すく]ない方[ほう]がいい。", en: "From a student's perspective, less homework is better." }
    ],
    notes:
      "Similar to 〜から見[み]れば but with stronger empathy—'putting oneself in X's shoes.' Often followed by a clause showing how X's view differs from the speaker's.",
    related: ["gn1-23"]
  },

  {
    id: "gn1-26",
    point: "〜とでもいうべき",
    reading: "...to demo iu beki",
    level: "N1",
    category: "Assumption",
    meaning: "what one might call...; as it were",
    structure: "N + とでもいうべき (+ N)",
    explanation:
      "Introduces an approximate label for something difficult to describe exactly—'one might almost call it...'. Often modifies a noun to give a vivid description.",
    formation:
      "N + とでもいうべき (+ N)\n例: 奇跡[きせき]とでもいうべき / 天才[てんさい]とでもいうべき / 運命[うんめい]とでもいうべき",
    examples: [
      { jp: "それは奇跡[きせき]とでもいうべき出来事[できごと]だった。", en: "It was an event one might call a miracle." },
      { jp: "彼[かれ]は天才[てんさい]とでもいうべき才能[さいのう]を持[も]っている。", en: "He has a talent one might call genius." }
    ],
    notes:
      "Used when the speaker struggles to find an exact word. Softens or elevates the description. Often followed by a noun it modifies, or used predicatively.",
    related: ["gn1-23"]
  },

  {
    id: "gn1-27",
    point: "〜まい",
    reading: "...mai",
    level: "N1",
    category: "Assumption",
    meaning: "will not...; intend not to... / probably will not...",
    structure: "V（辞書形）+ まい / V（ます形，去掉ます）+ まい（例外: する→しまい, 来る→こまい）",
    explanation:
      "Expresses strong negative intention—'I will not do X.' Also used for negative conjecture: 'probably will not.' A formal counterpart to 〜ないだろう.",
    formation:
      "V（辞書形）+ まい\n例: 言[い]うまい / 行[い]くまい / する→しまい / 来[く]る→こまい / 書[か]くまい",
    examples: [
      { jp: "二度[にど]とあんな失敗[しっぱい]はすまいと誓[ちか]った。", en: "I swore I would never make such a mistake again." },
      { jp: "彼[かれ]のことだから、もう来[こ]るまい。", en: "Knowing him, he probably won't come again." }
    ],
    notes:
      "Two main uses: (1) strong resolution not to do (1st person); (2) negative conjecture 'probably won't' (often third person). Can be paired with と誓[ちか]う or と思[おも]う.",
    related: ["gn1-23"]
  },

  // ───────────────────────────────────────────────────────────
  // PASSIVE / CAUSATIVE — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-28",
    point: "〜を余儀なくされる",
    reading: "...o yogyo nakusareru",
    level: "N1",
    category: "Passive/Causative",
    meaning: "to be forced to...; to be compelled into...",
    structure: "N（動作名詞）+ を余儀なくされる",
    explanation:
      "Passive expression indicating one is compelled to do something against one's will, often due to unavoidable circumstances—'to be forced into a change of plans.'",
    formation:
      "N（動作名詞）+ を余儀なくされる\n例: 出発[しゅっぱつ]を余儀なくされる / 退去[たいきょ]を余儀なくされる / 変更[へんこう]を余儀なくされる",
    examples: [
      { jp: "悪天候[あくてんこう]のため、出発[しゅっぱつ]の延期[えんき]を余儀なくされた。", en: "Due to bad weather, we were forced to postpone our departure." },
      { jp: "彼[かれ]は会社[かいしゃ]の倒産[とうさん]で転職[てんしょく]を余儀なくされた。", en: "With his company's bankruptcy, he was forced to change jobs." }
    ],
    notes:
      "The noun before を is usually an action noun (変更, 退去, 中断, 延期). The active counterpart 余儀なくする means 'to force someone into...'.",
    related: ["gn1-29"]
  },

  {
    id: "gn1-29",
    point: "〜ずにはおかない",
    reading: "...zu ni wa okanai",
    level: "N1",
    category: "Passive/Causative",
    meaning: "will definitely...; cannot fail to...",
    structure: "V（ない形，去掉ない）+ ずにはおかない",
    explanation:
      "Strong expression of inevitable action—'I will not leave it undone' or 'it inevitably causes.' Indicates firm intention or an unavoidable social/emotional reaction.",
    formation:
      "V-ない → V-ず + にはおかない\n例: 言[い]わずにはおかない / 抗議[こうぎ]せずにはおかない / 怒[いか]らずにはおかない",
    examples: [
      { jp: "こんな仕打[しう]ちを受[う]ければ、誰[だれ]も抗議[こうぎ]せずにはおかない。", en: "Treated like this, no one would fail to protest." },
      { jp: "彼[かれ]の発言[はつげん]は人々[ひとびと]を怒[いか]らせずにはおかない。", en: "His remarks inevitably anger people." }
    ],
    notes:
      "Strongly volitional or inevitable. Often used for emotional or social reactions. Differs from 〜ずにはいられない (involuntary gn1-03); this pattern is more deliberate and forceful.",
    related: ["gn1-03", "gn1-28"]
  },

  {
    id: "gn1-30",
    point: "〜てやまない",
    reading: "...te yamanai",
    level: "N1",
    category: "Passive/Causative",
    meaning: "earnestly, unceasingly; with all one's heart",
    structure: "V（て形）+ やまない",
    explanation:
      "Expresses a strong, enduring emotion—'I never stop X-ing.' Used for sincere wishes, hopes, or admiration toward someone. Limited to emotion or desire verbs.",
    formation:
      "V-て形 + やまない\n例: 願[ねが]ってやまない / 愛[あい]してやまない / 尊敬[そんけい]してやまない",
    examples: [
      { jp: "彼女[かのじょ]の成功[せいこう]を願[ねが]ってやまない。", en: "I earnestly wish for her success." },
      { jp: "彼[かれ]は尊敬[そんけい]してやまない先輩[せんぱい]だ。", en: "He is a senior I unceasingly respect." }
    ],
    notes:
      "Limited to emotions and desires (願[ねが]う, 愛[あい]する, 尊敬[そんけい]する, 期待[きたい]する). Cannot be used with ordinary action verbs like 食[た]べる or 行[い]く.",
    related: ["gn1-29"]
  },

  {
    id: "gn1-31",
    point: "〜にしろ〜にしろ / 〜にせよ〜にせよ",
    reading: "...ni shiro ...ni shiro / ...ni seyo ...ni seyo",
    level: "N1",
    category: "Passive/Causative",
    meaning: "whether... or...; both... and... (the same applies)",
    structure: "N / V（辞書形）+ にしろ、N / V + にしろ",
    explanation:
      "Lists alternatives, asserting that the statement applies to both—'whether A or B, the same holds.' Often used with opposite or related items.",
    formation:
      "N + にしろ、N + にしろ\nV（辞書形）+ にしろ、V + にしろ\n例: 行[い]くにしろ行[い]かないにしろ / 雨[あめ]にしろ雪[ゆき]にしろ / 賛成[さんせい]にしろ反対[はんたい]にしろ",
    examples: [
      { jp: "行[い]くにしろ行[い]かないにしろ、早[はや]く決[き]めてほしい。", en: "Whether you go or not, please decide soon." },
      { jp: "雨[あめ]にしろ雪[ゆき]にしろ、準備[じゅんび]は必要[ひつよう]だ。", en: "Whether rain or snow, preparation is needed." }
    ],
    notes:
      "〜にせよ is the more formal variant. The listed items are usually opposites or related alternatives. Can extend to three or more: 〜にしろ、〜にしろ、〜にしろ.",
    related: ["gn1-02"]
  },

  {
    id: "gn1-32",
    point: "〜ずくめ",
    reading: "...zukume",
    level: "N1",
    category: "Passive/Causative",
    meaning: "entirely...; all...; full of nothing but...",
    structure: "N + ずくめ",
    explanation:
      "Indicates that something is composed entirely or predominantly of the noun—'full of nothing but X.' Used for situations, periods, or appearances.",
    formation:
      "N + ずくめ\n例: いいことずくめ / 黒[くろ]ずくめ / 幸[しあわ]せずくめ",
    examples: [
      { jp: "今年[ことし]はいいことずくめの一年[いちねん]だった。", en: "This year was full of nothing but good things." },
      { jp: "彼[かれ]はいつも黒[くろ]ずくめの服装[ふくそう]だ。", en: "He always dresses all in black." }
    ],
    notes:
      "Mostly used with abstract nouns like いいこと, 悪[わる]いこと, or colors. Compare: 〜だらけ (negative connotation, physical) vs 〜まみれ (covered in, physical).",
    related: ["gn1-30"]
  },

  // ───────────────────────────────────────────────────────────
  // HONORIFIC — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-33",
    point: "お / ご〜になる",
    reading: "o / go-...-ni naru",
    level: "N1",
    category: "Honorific",
    meaning: "respectful form of another person's action (sonkeigo)",
    structure: "お + V（ます形，去掉ます）+ になる / ご + 漢語N + になる",
    explanation:
      "Sonkeigo (respectful) form—elevates the subject's action. Used to show respect to a superior's or customer's action. The ご + 漢語 pattern is the formal N1-level extension.",
    formation:
      "お + V-ます形 + になる\nご + 漢語N + になる\n例: お読[よ]みになる / ご到着[とうちゃく]になる / ご利用[りよう]になる",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりました。", en: "The teacher has already gone home." },
      { jp: "社長[しゃちょう]がご到着[とうちゃく]になりました。", en: "The president has arrived." }
    ],
    notes:
      "Cannot be used for one's own actions. For する-verbs, the pattern is ご + 漢語 + になる (ご案内[あんない]になる). More formal than the N4 お〜になる alone.",
    related: ["gn1-34", "gn1-36"]
  },

  {
    id: "gn1-34",
    point: "お / ご〜する / お / ご〜いたす",
    reading: "o / go-...-suru / o / go-...-itasu",
    level: "N1",
    category: "Honorific",
    meaning: "humble form of one's own action toward a superior (kenjougo)",
    structure: "お + V（ます形，去掉ます）+ する / いたす / ご + 漢語N + する / いたす",
    explanation:
      "Kenjougo (humble) form—lowers the speaker's action to elevate the listener. Used when the speaker does something for or toward a superior. 〜いたす is the more humble, N1-level variant.",
    formation:
      "お + V-ます形 + する / いたす\nご + 漢語N + する / いたす\n例: お持[も]ちする / お持[も]ちいたす / ご案内[あんない]する / ご案内[あんない]いたす",
    examples: [
      { jp: "私[わたし]がお荷物[にもつ]をお持[も]ちいたします。", en: "I will carry your luggage." },
      { jp: "応接室[おうせつしつ]へご案内[あんない]いたします。", en: "I will show you to the reception room." }
    ],
    notes:
      "Only for actions directed toward a superior. 〜いたす is more humble than 〜する. For する-verbs, attach ご + 漢語 + する/いたす (ご説明[せつめい]いたします).",
    related: ["gn1-33", "gn1-35", "gn1-36"]
  },

  {
    id: "gn1-35",
    point: "〜て（いただけると）ありがたい / 〜て幸いです",
    reading: "...te (itadakeru to) arigatai / ...te saiwai desu",
    level: "N1",
    category: "Honorific",
    meaning: "I would appreciate it if you could...; it would be a blessing if...",
    structure: "V（て形）+ いただけるとありがたい / V（て形）+ いただけると幸い（さいわい）です",
    explanation:
      "Polite request form—'it would be appreciated if you could...'. Very soft and respectful, common in business emails. 〜て幸いです is the more formal N1-level variant.",
    formation:
      "V-て形 + いただけるとありがたい\nV-て形 + いただけると幸[さいわい]です\n例: 教[おし]えていただけるとありがたい / ご返信[へんしん]いただけると幸[さいわい]です",
    examples: [
      { jp: "明日[あした]までにご返信[へんしん]いただけるとありがたいです。", en: "I would appreciate it if you could reply by tomorrow." },
      { jp: "ご出席[しゅっせき]いただけると幸[さいわい]です。", en: "It would be a blessing if you could attend." }
    ],
    notes:
      "More polite than 〜てください. Variants: 〜ていただけませんか, 〜ていただけると幸[さいわい]です. Often with ご for 漢語 verbs (ご返信, ご出席).",
    related: ["gn1-33", "gn1-34", "gn1-36"]
  },

  {
    id: "gn1-36",
    point: "〜せていただく",
    reading: "...sete itadaku",
    level: "N1",
    category: "Honorific",
    meaning: "allow me to...; let me do... (humble causative)",
    structure: "V（使役形 — せる / させる）+ ていただく",
    explanation:
      "Humble causative—'I humbly receive permission to do X.' Used to ask for or state permission for one's own action politely. Very common in business.",
    formation:
      "V-使役形（せる / させる）→ V-せていただく / V-させていただく\n例: 参加[さんか]させていただく / 説明[せつめい]させていただく / 休[やす]ませていただく",
    examples: [
      { jp: "本日[ほんじつ]より休業[きゅうぎょう]させていただきます。", en: "From today, we will be closed." },
      { jp: "自己紹介[じこしょうかい]させていただきます。", en: "Allow me to introduce myself." }
    ],
    notes:
      "Very common in business and customer-facing language. Slightly verbose but maximally polite. To ask permission: 〜させていただけますか ('may I...?').",
    related: ["gn1-33", "gn1-34", "gn1-35"]
  },

  {
    id: "gn1-37",
    point: "〜でございます",
    reading: "...de gozaimasu",
    level: "N1",
    category: "Honorific",
    meaning: "polite copula (very formal 'is / am')",
    structure: "N + でございます / Na-adj（語幹）+ でございます",
    explanation:
      "Highly polite form of です—'is / am.' Used in customer service, formal speech, and business contexts to show deference to the listener.",
    formation:
      "N + でございます\nNa-adj（語幹）+ でございます\n例: 田中[たなか]でございます / 静[しず]かでございます / 満席[まんせき]でございます",
    examples: [
      { jp: "はい、田中[たなか]でございます。", en: "Yes, this is Tanaka." },
      { jp: "当店[とうてん]は毎週火曜日[まいしゅうかようび]が定休日[ていきゅうび]でございます。", en: "Our store is closed every Tuesday." }
    ],
    notes:
      "Politer than です. For イ-adj, attach 〜うございます: 寒[さむ]うございます. Common in retail, hotels, formal letters, and phone calls.",
    related: ["gn1-33", "gn1-34"]
  },

  // ───────────────────────────────────────────────────────────
  // PARTICLES — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-38",
    point: "〜たりとも〜ない",
    reading: "...tari tomo...nai",
    level: "N1",
    category: "Particles",
    meaning: "not even one...; not a single...",
    structure: "N（単数）+ たりとも + （否定述語）",
    explanation:
      "Strong emphatic negative—'not even a single X.' Emphasizes that not even the smallest amount can be spared, wasted, or accepted.",
    formation:
      "N（単数）+ たりとも + V-ない / イ-adj-ない\n例: 一日[いちにち]たりとも / 一円[いちえん]たりとも / 一人[ひとり]たりとも",
    examples: [
      { jp: "受験[じゅけん]前[まえ]は一日[いちにち]たりとも休[やす]めない。", en: "Before the exam, I can't rest even one day." },
      { jp: "無駄遣[むだづ]いは一円[いちえん]たりともしたくない。", en: "I don't want to waste even a single yen." }
    ],
    notes:
      "Stronger than 〜も〜ない. Often used with units: 一日, 一円, 一人, 一秒. Literary tone, common in essays and resolutions.",
    related: ["gn1-39", "gn1-42"]
  },

  {
    id: "gn1-39",
    point: "〜すら / 〜ですら",
    reading: "...sura / ...de sura",
    level: "N1",
    category: "Particles",
    meaning: "even; even to the extent of... (literary)",
    structure: "N + すら / N + ですら",
    explanation:
      "Indicates an extreme case—'even X,' suggesting surprise that even this case applies. More literary and emphatic than 〜も; interchangeable with 〜さえ.",
    formation:
      "N + すら\nN + ですら（やや丁寧）\n例: 子供[こども]すら / 先生[せんせい]ですら / 専門家[せんもんか]ですら",
    examples: [
      { jp: "彼[かれ]は自分[じぶん]の名前[なまえ]すら書[か]けない。", en: "He can't even write his own name." },
      { jp: "専門家[せんもんか]ですら解[と]けない問題[もんだい]だ。", en: "It's a problem even experts can't solve." }
    ],
    notes:
      "Slightly more formal than 〜さえ and leans literary. Cannot follow verbs directly—use V-こと + すら (走[はし]ることすら). Often interchangeable with 〜だに (gn1-42).",
    related: ["gn1-38", "gn1-42"]
  },

  {
    id: "gn1-40",
    point: "〜なり",
    reading: "...nari",
    level: "N1",
    category: "Particles",
    meaning: "as soon as...; just when... (single immediate event)",
    structure: "V（辞書形）+ なり",
    explanation:
      "Indicates immediate succession—the moment the action happens, another follows. Similar to 〜が早いか but more literary and used for a single, vivid event.",
    formation:
      "V（辞書形）+ なり\n例: 立[た]ち上[あ]がるなり / 戻[もど]るなり / 入[はい]るなり",
    examples: [
      { jp: "彼[かれ]は教室[きょうしつ]に入[はい]るなり、叫[さけ]んだ。", en: "As soon as he entered the classroom, he shouted." },
      { jp: "母[はは]は帰[かえ]るなり、キッチンへ向[む]かった。", en: "As soon as my mother got home, she headed to the kitchen." }
    ],
    notes:
      "Used for a single, immediate event. The second verb is in the past. Differs from 〜や否[いな]や in tone but usage is similar; 〜なり is slightly more narrative.",
    related: ["gn1-12", "gn1-13"]
  },

  {
    id: "gn1-41",
    point: "〜やら〜やら",
    reading: "...yara...yara",
    level: "N1",
    category: "Particles",
    meaning: "things like... and...; ...and so on (overwhelming)",
    structure: "N / V（辞書形）/ イ-adj + やら、N / V / イ-adj + やら",
    explanation:
      "Lists multiple items vaguely—'things like A and B and so on.' Implies abundance, confusion, or being overwhelmed by the items listed.",
    formation:
      "N + やら、N + やら\nV（辞書形）+ やら、V + やら\nイ-adj + やら、イ-adj + やら\n例: 涙[なみだ]やら汗[あせ]やら / 泣[な]くやら叫[さけ]ぶやら / 嬉[うれ]しいやら恥[は]ずかしいやら",
    examples: [
      { jp: "引[ひ]っ越[こ]しで涙[なみだ]やら汗[あせ]やらが出[で]た。", en: "With the move, there were tears and sweat." },
      { jp: "試験[しけん]に合格[ごうかく]して、嬉[うれ]しいやら恥[は]ずかしいやらだ。", en: "Passing the exam, I'm both happy and embarrassed." }
    ],
    notes:
      "Implies the speaker is overwhelmed or the situation is chaotic. More emotive than 〜や〜や or 〜とか〜とか. Often used with emotion adjectives.",
    related: ["gn1-38"]
  },

  {
    id: "gn1-42",
    point: "〜だに",
    reading: "...dani",
    level: "N1",
    category: "Particles",
    meaning: "even; even the slightest... (literary negative)",
    structure: "N + だに + （否定述語）",
    explanation:
      "Literary emphatic particle—'even (the thought of) X.' Usually with negative predicates to mean 'not even' or 'never even.'",
    formation:
      "N + だに\n例: 夢[ゆめ]にだに / 思[おも]いだに / 微塵[みじん]だに / 想像[そうぞう]だに",
    examples: [
      { jp: "そんなことは夢[ゆめ]にだに思[おも]わなかった。", en: "I never even dreamed of such a thing." },
      { jp: "子供[こども]の頃[ころ]、映画館[えいがかん]になんて思[おも]いだにしなかった。", en: "As a child, I wouldn't even think of going to a movie theater." }
    ],
    notes:
      "Mostly literary and archaic. Common collocations: 夢[ゆめ]にだに, 微塵[みじん]だに, 思[おも]いだに, 想像[そうぞう]だに. Stronger and more poetic than 〜すら.",
    related: ["gn1-38", "gn1-39"]
  },

  // ───────────────────────────────────────────────────────────
  // CONJUNCTIONS — 3 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-43",
    point: "〜というものは",
    reading: "...to iu mono wa",
    level: "N1",
    category: "Conjunctions",
    meaning: "the thing called...; ...in general (universal statement)",
    structure: "N + というものは",
    explanation:
      "Presents a noun as a general concept to make a universal statement—'the thing called X is essentially...'. Often paired with proverbs or truisms in the main clause.",
    formation:
      "N + というものは\n例: 愛[あい]というものは / 時間[じかん]というものは / 幸福[こうふく]というものは",
    examples: [
      { jp: "時間[じかん]というものは、あっという間[ま]に過[す]ぎ去[さ]るものだ。", en: "Time passes in the blink of an eye." },
      { jp: "幸福[こうふく]というものは、人[ひと]それぞれだ。", en: "Happiness is different for each person." }
    ],
    notes:
      "Used to generalize about abstract nouns (愛, 時間, 人生, 幸福). Often appears with ものだ in the main clause to express a perceived truth.",
    related: ["gn1-44", "gn1-45"]
  },

  {
    id: "gn1-44",
    point: "〜に即して / 〜に即した",
    reading: "...ni soku shite / ...ni soku shita",
    level: "N1",
    category: "Conjunctions",
    meaning: "in accordance with...; based on...",
    structure: "N + に即して / N + に即した + N",
    explanation:
      "Indicates acting or judging in conformity with a standard, law, or reality—'in line with, based on.' Used when something must be handled according to actual facts or rules.",
    formation:
      "N + に即[そく]して\nN + に即[そく]した + N\n例: 法律[ほうりつ]に即[そく]して / 実際[じっさい]に即[そく]して / 現実[げんじつ]に即[そく]した",
    examples: [
      { jp: "法律[ほうりつ]に即[そく]して、厳正[げんせい]に対処[たいしょ]する。", en: "We will deal with it strictly in accordance with the law." },
      { jp: "実際[じっさい]に即[そく]した対策[たいさく]が必要[ひつよう]だ。", en: "Practical, reality-based measures are needed." }
    ],
    notes:
      "即 here means 'conform to, fit.' Used in formal, legal, or analytical contexts. Differs from 〜に沿[そ]って (more general 'along, following').",
    related: ["gn1-43", "gn1-45"]
  },

  {
    id: "gn1-45",
    point: "〜にもまして",
    reading: "...ni mo mashite",
    level: "N1",
    category: "Conjunctions",
    meaning: "more than ever; more than...; even more than...",
    structure: "N + にもまして / V（普通形）+ の + にもまして",
    explanation:
      "Indicates that something exceeds even a notable comparison—'even more than X (which was already significant).' Emphasizes degree beyond an already high baseline.",
    formation:
      "N + にもまして\nV（普通形）+ の + にもまして\n例: 昨年[さくねん]にもまして / 予想[よそう]していたのにもまして / 常[つね]にもまして",
    examples: [
      { jp: "今年[ことし]は昨年[さくねん]にもまして暑[あつ]い夏[なつ]になりそうだ。", en: "This year looks to be an even hotter summer than last." },
      { jp: "彼[かれ]の成長[せいちょう]は予想[よそう]していたのにもまして凄[すご]い。", en: "His growth is even more amazing than I expected." }
    ],
    notes:
      "Implies that the comparison point was already significant. Common with time expressions: 昨年, 以前, 普段, 今回. More literary than 〜より.",
    related: ["gn1-43", "gn1-44"]
  },

  // ───────────────────────────────────────────────────────────
  // MODIFIERS — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-46",
    point: "〜たるもの",
    reading: "...taru mono",
    level: "N1",
    category: "Modifiers",
    meaning: "one who is... (role / identity); that which is...",
    structure: "N + たるもの",
    explanation:
      "Emphasizes the responsibility or essential nature of someone in a role—'being a [N], one must...'. Used to assert duty or proper behavior for those in a position.",
    formation:
      "N + たるもの\n例: 教師[きょうし]たるもの / 大人[おとな]たるもの / リーダーたるもの / 公僕[こうぼく]たるもの",
    examples: [
      { jp: "教師[きょうし]たるもの、学生[がくせい]の手本[てほん]でなければならない。", en: "Being a teacher, one must be a model for students." },
      { jp: "大人[おとな]たるもの、自分[じぶん]の行動[こうどう]に責任[せきにん]を持[も]て。", en: "Being an adult, take responsibility for your actions." }
    ],
    notes:
      "Often followed by 〜べきだ, 〜なければならない, 〜はずだ. Reserved for roles or identities (教師, 大人, リーダー, 公僕). Literary and assertive tone.",
    related: ["gn1-47", "gn1-48"]
  },

  {
    id: "gn1-47",
    point: "〜が最後",
    reading: "...ga saigo",
    level: "N1",
    category: "Modifiers",
    meaning: "once you..., there's no going back; once... it's all over",
    structure: "V（た形）+ が最後",
    explanation:
      "Indicates that once the action is done, an irreversible or extreme consequence follows—'once X happens, it's all over / you're stuck.'",
    formation:
      "V-た + が最後\n例: 始[はじ]めたが最後 / 言[い]ったが最後 / 寝[ね]たが最後 / 飲[の]んだが最後",
    examples: [
      { jp: "この秘密[ひみつ]を誰[だれ]かに言[い]ったが最後、皆[みな]に知[し]られてしまう。", en: "Once you tell someone this secret, everyone will find out." },
      { jp: "あの人[ひと]は寝[ね]たが最後、朝[あさ]まで起[お]きない。", en: "Once that person falls asleep, they won't wake until morning." }
    ],
    notes:
      "Implies irreversibility or strong inevitability. Stronger than 〜たら. Often used for negative consequences, but can also describe habit (寝[ね]たが最後).",
    related: ["gn1-46", "gn1-48"]
  },

  {
    id: "gn1-48",
    point: "〜の極み",
    reading: "...no kiwami",
    level: "N1",
    category: "Modifiers",
    meaning: "the height of...; the extreme of...",
    structure: "N + の極み",
    explanation:
      "Indicates the highest degree of an abstract state—'the very peak of, the utmost.' Often emotional or experiential, expressing an extreme.",
    formation:
      "N + の極[きわ]み\n例: 感謝[かんしゃ]の極[きわ]み / 不幸[ふこう]の極[きわ]み / 喜[よろこ]びの極[きわ]み / 興奮[こうふん]の極[きわ]み",
    examples: [
      { jp: "皆様[みなさま]のお力添[ちからぞ]えをいただき、感謝[かんしゃ]の極[きわ]みです。", en: "With everyone's support, I am at the height of gratitude." },
      { jp: "その光景[こうけい]は惨憺[さんたん]たる極[きわ]みだった。", en: "That scene was the very extreme of misery." }
    ],
    notes:
      "Limited to abstract nouns (感謝, 不幸, 喜び, 悲しみ, 興奮). Formal and emphatic. Often with です / だった / に達[たっ]する.",
    related: ["gn1-46", "gn1-49"]
  },

  {
    id: "gn1-49",
    point: "〜た末に / 〜末（に）",
    reading: "...ta sue ni / ...sue ni",
    level: "N1",
    category: "Modifiers",
    meaning: "after a long process of...; in the end, after...",
    structure: "V（た形）+ 末に / N + の + 末に",
    explanation:
      "Indicates that after a prolonged or difficult process, a final result emerged—'after much X-ing, finally...'. Emphasizes the length and difficulty of the lead-up.",
    formation:
      "V-た + 末[すえ]に\nN + の + 末[すえ]に\n例: 考[かんが]えた末[すえ]に / 議論[ぎろん]の末[すえ]に / 苦労[くろう]の末[すえ]に",
    examples: [
      { jp: "長[なが]く悩[なや]んだ末[すえ]に、会社[かいしゃ]を辞[や]めることにした。", en: "After long deliberation, I decided to quit the company." },
      { jp: "激[はげ]しい議論[ぎろん]の末[すえ]に、法案[ほうあん]が可決[かけつ]された。", en: "After fierce debate, the bill was passed." }
    ],
    notes:
      "Stresses the length or difficulty of the process. Differs from 〜た結果[けっか] in emphasizing the struggle, deliberation, or endurance leading up to it.",
    related: ["gn1-48", "gn1-50"]
  },

  {
    id: "gn1-50",
    point: "〜かぎり / 〜ないかぎり",
    reading: "...kagiri / ...nai kagiri",
    level: "N1",
    category: "Modifiers",
    meaning: "as long as...; as far as... / unless... (negative)",
    structure: "V（普通形）+ かぎり / N + である + かぎり / V-ない + かぎり",
    explanation:
      "Sets a limit or condition—'as long as X holds, Y follows.' With 〜ないかぎり means 'unless X, Y won't happen.' Strong conditional with a clear boundary.",
    formation:
      "V（普通形）+ かぎり\nN + である + かぎり\nV-ない + かぎり\n例: 生[い]きているかぎり / 元気[げんき]であるかぎり / 雨[あめ]が降[ふ]らないかぎり",
    examples: [
      { jp: "私[わたし]が生[い]きているかぎり、あなたを守[まも]る。", en: "As long as I live, I will protect you." },
      { jp: "雨[あめ]が降[ふ]らないかぎり、試合[しあい]は予定通[よていどお]り行[おこな]う。", en: "Unless it rains, the match will go on as scheduled." }
    ],
    notes:
      "Affirmative form: as long as → consequence (usually positive). Negative form: unless → negative main clause. Strong conditional, often with abstractions like 限[かぎ]りない or 憲法[けんぽう]に限[かぎ]り.",
    related: ["gn1-04", "gn1-23"]
  }
];
