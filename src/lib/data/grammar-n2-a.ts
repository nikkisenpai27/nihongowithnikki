import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// This file covers Shinzaizen Master N2 Bunpou, chapter-wise (chunk A).
// 50 grammar points across 10 categories: Conditionals, Cause/Reason,
// Time/Sequence, Contrast, Assumption, Passive/Causative, Honorific,
// Particles, Conjunctions, Modifiers. IDs follow the pattern gn2-01..gn2-50.

export const grammarN2A: GrammarData[] = [
  // ────────────────────────────────────────────────────────────────
  // CONDITIONALS — 条件
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-01",
    point: "〜とすれば / 〜としたら",
    reading: "〜とすれば / 〜としたら",
    level: "N2",
    category: "Conditionals",
    meaning: "If we assume that... / supposing that...",
    structure: "普通体 + とすれば / としたら",
    explanation:
      "Used to set up a hypothetical assumption: 'if we suppose that...'. としたら is slightly more emphatic than とすれば but the two are largely interchangeable.",
    formation:
      "V辞書形/タ形 + とすれば (行くとすれば / 行ったとすれば)\nイ形容詞 + とすれば (高[たか]いとすれば)\nナ形容詞・名詞 + だ + とすれば (学生[がくせい]だとすれば)",
    examples: [
      {
        jp: "もし彼[かれ]の話[はなし]が本当[ほんとう]だとしたら、大変[たいへん]なことだ。",
        en: "If his story is true, it is a serious matter."
      },
      {
        jp: "留学[りゅうがく]するとしたら、どこの国[くに]に行[い]きたいですか。",
        en: "If you were to study abroad, which country would you like to go to?"
      }
    ],
    notes:
      "仮定の条件を導く表現で、現実に起きうる条件にも純粋な仮定にも使われる。",
    related: []
  },

  {
    id: "gn2-02",
    point: "〜ないことには",
    reading: "〜ないことには",
    level: "N2",
    category: "Conditionals",
    meaning: "Unless... / without doing X, (Y cannot happen)",
    structure: "V-ない形 + ないことには + 〜ない",
    explanation:
      "Indicates that unless a condition is fulfilled, the desired result cannot be achieved. The following clause is always negative.",
    formation:
      "V-ない形 + ないことには + 否定的結果\n例: 行[い]かないことには始[はじ]まらない\n実際[じっさい]に会[あ]わないことには分[わ]からない",
    examples: [
      {
        jp: "実際[じっさい]に会[あ]ってみないことには、本当[ほんとう]のことは分[わ]からない。",
        en: "Unless you actually meet in person, you cannot know the truth."
      },
      {
        jp: "資金[しきん]がないことには、事業[じぎょう]を始[はじ]められない。",
        en: "Without funds, we cannot start the business."
      }
    ],
    notes:
      "「〜なければ」とほぼ同じだが、条件が満たされない限り結果も起きないという強調を含む。",
    related: []
  },

  {
    id: "gn2-03",
    point: "〜ものなら",
    reading: "〜ものなら",
    level: "N2",
    category: "Conditionals",
    meaning: "If you can (manage to)... / if it were possible to...",
    structure: "V可能形 + ものなら / V辞書形 + ものなら",
    explanation:
      "With potential verbs it expresses a wish or challenge: 'if you can do X, then do it'. With the dictionary form it implies a challenge or strong rebuff.",
    formation:
      "V可能形 + ものなら (やれるものならやってみろ)\nV辞書形 + ものなら (行[い]くものなら行[い]ってみろ)\n〜たい + ものなら (帰[かえ]りたいものなら...)",
    examples: [
      {
        jp: "やれるものなら、やってみろ。",
        en: "Try doing it if you can."
      },
      {
        jp: "帰[かえ]れるものなら帰[かえ]りたいが、仕事[しごと]が残[のこ]っている。",
        en: "I would go home if I could, but I have work left."
      }
    ],
    notes:
      "可能形とともに使い、「できるならしてみたい」という願望や挑戦を表す。",
    related: []
  },

  {
    id: "gn2-04",
    point: "〜たところで",
    reading: "〜たところで",
    level: "N2",
    category: "Conditionals",
    meaning: "Even if one does X, (it will not help / the result is limited)",
    structure: "V-た形 + ところで + 〜ない / 疑問詞 + 〜",
    explanation:
      "Indicates that even if an action is taken, the expected result will not follow or the outcome is meaningless. Used with negative or limited results.",
    formation:
      "V-た形 + ところで + 否定/限定的結果\n例: 今[いま]さら謝[あやま]ったところで遅[おそ]い\nいくら食[た]べたところでも腹[はら]は膨[ふく]れない",
    examples: [
      {
        jp: "今[いま]さら謝[あやま]ったところで、もう遅[おそ]い。",
        en: "Even if you apologize now, it is already too late."
      },
      {
        jp: "いくら急[いそ]いだところで、間[ま]に合[あ]わないだろう。",
        en: "No matter how much you hurry, you probably will not make it in time."
      }
    ],
    notes:
      "「〜ても」に似るが、結果が無駄になる、あるいは限られるという話者の判断を含む。",
    related: []
  },

  {
    id: "gn2-05",
    point: "〜ないかぎり(は)",
    reading: "〜ないかぎり(は)",
    level: "N2",
    category: "Conditionals",
    meaning: "As long as one does not... / unless...",
    structure: "V-ない形 + ないかぎり + 〜ない",
    explanation:
      "Expresses that unless a condition is met, the result in the main clause will not occur. Stronger and more emphatic than 〜なければ.",
    formation:
      "V-ない形 + ないかぎり + 否定的結果\n例: 努力[どりょく]しないかぎり成功[せいこう]しない\n雨[あめ]が降[ふ]らないかぎり試合[しあい]は続行[ぞっこう]する",
    examples: [
      {
        jp: "努力[どりょく]しないかぎり、成功[せいこう]はできない。",
        en: "Unless you make an effort, you cannot succeed."
      },
      {
        jp: "彼[かれ]が謝[あやま]らないかぎり、許[ゆる]さない。",
        en: "As long as he does not apologize, I will not forgive him."
      }
    ],
    notes:
      "条件の範囲を限定し、その条件が満たされない限り結果も起きないと断定する。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // CAUSE/REASON — 原因・理由
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-06",
    point: "〜だけあって / 〜だけに",
    reading: "〜だけあって / 〜だけに",
    level: "N2",
    category: "Cause/Reason",
    meaning: "As expected of... / worthy of... / precisely because...",
    structure: "N / V普通形 / イ形容詞 + だけあって / だけに",
    explanation:
      "Indicates that a result is natural or worthy given the quality or situation. だけに emphasizes that precisely because of X, a notable (often unexpected) result followed.",
    formation:
      "N + だけあって (専門家[せんもんか]だけあって詳[くわ]しい)\nイ形容詞 + だけあって (高[たか]いだけあっていい品[しな])\nV普通形 + だけに (優勝[ゆうしょう]しただけに喜[よろこ]びも大[おお]きい)",
    examples: [
      {
        jp: "専門家[せんもんか]だけあって、説明[せつめい]が分[わ]かりやすい。",
        en: "As expected of an expert, his explanation is easy to understand."
      },
      {
        jp: "長[なが]い間[あいだ]準備[じゅんび]しただけに、完成[かんせい]した時[とき]の喜[よろこ]びも大[おお]きかった。",
        en: "Precisely because they prepared for a long time, the joy upon completion was great."
      }
    ],
    notes:
      "だけあっては「さすが」という感嘆を表し、だけには「〜だから一層」という強調を表す。",
    related: []
  },

  {
    id: "gn2-07",
    point: "〜ばかりに",
    reading: "〜ばかりに",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Just because... (with an undesirable result)",
    structure: "N + である/だった + ばかりに / V普通形 / イ形容詞 + ばかりに",
    explanation:
      "Expresses that something unfortunate happened solely because of the reason mentioned. The result clause typically conveys regret or dissatisfaction.",
    formation:
      "N + である/だった + ばかりに (子供[こども]であるばかりに)\nV普通形 + ばかりに (油断[ゆだん]したばかりに)\nイ形容詞 + ばかりに (高[たか]すぎるばかりに)",
    examples: [
      {
        jp: "油断[ゆだん]したばかりに、試合[しあい]に負[ま]けてしまった。",
        en: "Just because I let my guard down, I ended up losing the match."
      },
      {
        jp: "お金[かね]がないばかりに、大学[だいがく]に行[い]けなかった。",
        en: "Just because I had no money, I could not go to university."
      }
    ],
    notes:
      "悪い結果が起きた原因を「〜だけが理由で」と強調し、後件は話者の後悔や不満を表す。",
    related: []
  },

  {
    id: "gn2-08",
    point: "〜ことだから",
    reading: "〜ことだから",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Knowing X, naturally... / since it is X (with a known nature)",
    structure: "N + の + ことだから",
    explanation:
      "Used when the speaker knows the character or typical behavior of someone or something, and predicts a natural outcome based on that knowledge.",
    formation:
      "N + の + ことだから\n例: あの慎重[しんちょう]な人[ひと]のことだから...\n時間[じかん]に正確[せいかく]な彼[かれ]のことだから...",
    examples: [
      {
        jp: "時間[じかん]に正確[せいかく]な彼[かれ]のことだから、もうすぐ来[く]るだろう。",
        en: "Knowing him to be punctual, he will probably come soon."
      },
      {
        jp: "あの勤勉[きんべん]な学生[がくせい]のことだから、きっと合格[ごうかく]する。",
        en: "Given that diligent student, he will surely pass."
      }
    ],
    notes:
      "人物や事物の性質から当然の結果を推量する表現で、人の名前によく使われる。",
    related: []
  },

  {
    id: "gn2-09",
    point: "〜以上(は)",
    reading: "〜いじょう(は)",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Now that... / since... (with a sense of obligation or resolve)",
    structure: "V辞書形 / V-た形 / N + である + 以上(は)",
    explanation:
      "Indicates that since a situation has come to pass, one must or should do something. Carries a strong sense of resolve, obligation, or natural consequence.",
    formation:
      "V辞書形 + 以上 (約束[やくそく]する以上[いじょう]は守[まも]る)\nV-た形 + 以上 (決心[けっしん]した以上[いじょう]は)\nN + である + 以上 (学生[がくせい]である以上[いじょう]は)",
    examples: [
      {
        jp: "約束[やくそく]した以上[いじょう]は、守[まも]らなければならない。",
        en: "Now that I have made a promise, I must keep it."
      },
      {
        jp: "学生[がくせい]である以上[いじょう]、真面目[まじめ]に勉強[べんきょう]すべきだ。",
        en: "As long as you are a student, you should study seriously."
      }
    ],
    notes:
      "「〜だから当然」という義務・決意・当然の結果を表す、書き言葉的でやや硬い表現。",
    related: []
  },

  {
    id: "gn2-10",
    point: "〜上は",
    reading: "〜うえは",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Now that... / since... (formal, with resolve)",
    structure: "V辞書形 / V-た形 + 上は",
    explanation:
      "A formal written expression meaning 'now that X has happened, one must...'. Similar to 以上(は) but more literary and resolute.",
    formation:
      "V辞書形 + 上は (引[ひ]き受[う]ける上[うえ]は)\nV-た形 + 上は (決心[けっしん]した上[うえ]は)\nN + である + 上は",
    examples: [
      {
        jp: "引[ひ]き受[う]けた上[うえ]は、最後[さいご]まで責任[せきにん]を持[も]つ。",
        en: "Now that I have accepted it, I will take responsibility to the end."
      },
      {
        jp: "覚悟[かくご]を決[き]めた上[うえ]は、逃[に]げられない。",
        en: "Having made up my mind, I cannot run away."
      }
    ],
    notes:
      "「〜以上」とほぼ同じだが、より書き言葉的で硬く、強い決意を表す。",
    related: []
  },

  {
    id: "gn2-11",
    point: "〜手前",
    reading: "〜てまえ",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Because of (one's position / appearances / what others expect)",
    structure: "V辞書形 / V-た形 / N + の + 手前",
    explanation:
      "Indicates that because of one's public position or what others have seen or expect, one cannot do otherwise (e.g., cannot back down or refuse).",
    formation:
      "V-た形 + 手前 (宣言[せんげん]した手前[てまえ])\nV辞書形 + 手前 (やる手前[てまえ])\nN + の + 手前 (子供[こども]の手前[てまえ])",
    examples: [
      {
        jp: "大[おお]きな宣言[せんげん]をした手前[てまえ]、簡単[かんたん]には断[ことわ]れない。",
        en: "Having made a big declaration, I cannot easily refuse for appearance's sake."
      },
      {
        jp: "子供[こども]の手前[てまえ]、怒[おこ]るのを我慢[がまん]した。",
        en: "In front of the children, I held back my anger."
      }
    ],
    notes:
      "周囲の目や立場を気にして「そうしないわけにはいかない」という事情を表す。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // TIME/SEQUENCE — 時間・順序
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-12",
    point: "〜うちに",
    reading: "〜うちに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "While... / before the state changes",
    structure: "V辞書形 / V-ている / イ形容詞 / N + の + うちに",
    explanation:
      "Indicates an action or state that continues during a certain period, often implying one should do something before the situation changes.",
    formation:
      "V辞書形 + うちに (元気[げんき]なうちに)\nV-ている + うちに (寝[ね]ているうちに)\nイ形容詞 + うちに (若[わか]いうちに)\nN + の + うちに (昼[ひる]のうちに)",
    examples: [
      {
        jp: "元気[げんき]なうちに、いろいろな所[ところ]へ旅行[りょこう]したい。",
        en: "While I am still healthy, I want to travel to many places."
      },
      {
        jp: "子供[こども]が寝[ね]ているうちに、掃除[そうじ]をしてしまおう。",
        en: "Let us finish cleaning while the children are asleep."
      }
    ],
    notes:
      "状態が変化する前の時間帯を示し、「今のうちに」という促しのニュアンスを含む。",
    related: []
  },

  {
    id: "gn2-13",
    point: "〜ないうちに",
    reading: "〜ないうちに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Before... happens / while X has not yet occurred",
    structure: "V-ない形 + ないうちに",
    explanation:
      "Indicates doing something before a certain (usually undesirable) event or change takes place.",
    formation:
      "V-ない形 + ないうちに\n例: 忘[わす]れないうちにメモする\n雨[あめ]が降[ふ]らないうちに帰[かえ]る",
    examples: [
      {
        jp: "忘[わす]れないうちに、メモしておこう。",
        en: "Let me write it down before I forget."
      },
      {
        jp: "雨[あめ]が降[ふ]らないうちに、帰[かえ]った方[ほう]がいい。",
        en: "You had better go home before it rains."
      }
    ],
    notes:
      "「〜する前[まえ]に」と置き換え可能だが、状態の変化を避けるための急ぎのニュアンスがある。",
    related: []
  },

  {
    id: "gn2-14",
    point: "〜次第",
    reading: "〜しだい",
    level: "N2",
    category: "Time/Sequence",
    meaning: "As soon as... / immediately upon...",
    structure: "V-ます形(去掉ます) / N + 次第",
    explanation:
      "Indicates that as soon as the previous action or event occurs, the next action follows immediately. Common in formal and business contexts.",
    formation:
      "V-ます形(去掉ます) + 次第 (着[つ]き次第[しだい])\nN + 次第 (資料[しりょう]到着[とうちゃく]次第[しだい])\n後件は「〜する」「〜いたします」など",
    examples: [
      {
        jp: "資料[しりょう]が到着[とうちゃく]し次第[しだい]、ご連絡[れんらく]いたします。",
        en: "As soon as the materials arrive, I will contact you."
      },
      {
        jp: "会議[かいぎ]が終[お]わり次第[しだい]、お知[し]らせします。",
        en: "As soon as the meeting ends, I will let you know."
      }
    ],
    notes:
      "ビジネス文書や改まった場面でよく使われ、「〜したらすぐ」という即時性を表す。",
    related: []
  },

  {
    id: "gn2-15",
    point: "〜が早いか",
    reading: "〜がはやいか",
    level: "N2",
    category: "Time/Sequence",
    meaning: "No sooner than... / as soon as X happened, Y happened (almost simultaneously)",
    structure: "V辞書形 / V-た形 + が早いか + V-た形",
    explanation:
      "Indicates that one action follows another almost immediately, often with a sense of surprise or speed. The second verb is normally in the past tense.",
    formation:
      "V辞書形/タ形 + が早いか + V-タ形\n例: ベルが鳴[な]るが早[はや]いか、飛[と]び出[だ]した\n座[すわ]るが早[はや]いか、食[た]べ始[はじ]めた",
    examples: [
      {
        jp: "ベルが鳴[な]るが早[はや]いか、彼[かれ]は教室[きょうしつ]を飛[と]び出[だ]した。",
        en: "As soon as the bell rang, he dashed out of the classroom."
      },
      {
        jp: "椅子[いす]に座[すわ]るが早[はや]いか、彼[かれ]は食[た]べ始[はじ]めた。",
        en: "No sooner had he sat on the chair than he started eating."
      }
    ],
    notes:
      "二つの動作がほぼ同時に起きたことを強調し、後件は必ず過去形で驚きや素早さを表す。",
    related: []
  },

  {
    id: "gn2-16",
    point: "〜たとたん(に)",
    reading: "〜たとたん(に)",
    level: "N2",
    category: "Time/Sequence",
    meaning: "The moment... / just as X happened, Y happened",
    structure: "V-た形 + とたん(に)",
    explanation:
      "Indicates that immediately after one action or event occurred, another followed, often unexpectedly. The second clause typically expresses something surprising.",
    formation:
      "V-た形 + とたん(に)\n例: ドアを開[あ]けたとたんに猫[ねこ]が逃[に]げた\n立[た]ち上[あ]がったとたんにめまいがした",
    examples: [
      {
        jp: "ドアを開[あ]けたとたんに、猫[ねこ]が逃[に]げ出[だ]した。",
        en: "The moment I opened the door, the cat ran away."
      },
      {
        jp: "立[た]ち上[あ]がったとたんに、めまいがした。",
        en: "The moment I stood up, I felt dizzy."
      }
    ],
    notes:
      "直後の出来事を表し、後件は話者の予期しない出来事や驚きが多く、意志的動作には使えない。",
    related: []
  },

  {
    id: "gn2-17",
    point: "〜にあたって / 〜に際して",
    reading: "〜にあたって / 〜にさいして",
    level: "N2",
    category: "Time/Sequence",
    meaning: "On the occasion of... / when doing something special",
    structure: "N / V辞書形 + にあたって / に際して",
    explanation:
      "Used on special or important occasions, such as starting a new venture, getting married, or moving. に際して is slightly more formal and written-style.",
    formation:
      "N + にあたって (新年[しんねん]にあたって)\nV辞書形 + にあたって (出発[しゅっぱつ]するにあたって)\nに際[さい]しても同様[どうよう]",
    examples: [
      {
        jp: "新年[しんねん]にあたって、皆様[みなさま]のご健康[けんこう]をお祈[いの]りします。",
        en: "On the occasion of the New Year, I pray for everyone's good health."
      },
      {
        jp: "試合[しあい]に際[さい]して、選手[せんしゅ]たちは緊張[きんちょう]していた。",
        en: "On the occasion of the match, the athletes were nervous."
      }
    ],
    notes:
      "特別な行事や重大な場面に直面した時の挨拶や心構えを述べる改まった表現。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // CONTRAST — 逆接
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-18",
    point: "〜にもかかわらず",
    reading: "〜にもかかわらず",
    level: "N2",
    category: "Contrast",
    meaning: "Despite... / in spite of...",
    structure: "N / V普通形 / イ形容詞 + にもかかわらず",
    explanation:
      "Indicates that something happens despite the stated condition or expectation. Formal and used in both speech and writing.",
    formation:
      "N + にもかかわらず (雨[あめ]にもかかわらず)\nV普通形 + にもかかわらず (努力[どりょく]したにもかかわらず)\nイ形容詞 + にもかかわらず (高[たか]いにもかかわらず)",
    examples: [
      {
        jp: "努力[どりょく]したにもかかわらず、試験[しけん]に合格[ごうかく]できなかった。",
        en: "Despite making an effort, I could not pass the exam."
      },
      {
        jp: "雨[あめ]にもかかわらず、多[おお]くの人[ひと]が集[あつ]まった。",
        en: "Despite the rain, a large number of people gathered."
      }
    ],
    notes:
      "「〜のに」の改まった言い方で、予想に反する結果を強調する。",
    related: []
  },

  {
    id: "gn2-19",
    point: "〜くせに",
    reading: "〜くせに",
    level: "N2",
    category: "Contrast",
    meaning: "Even though... (with criticism or complaint)",
    structure: "N + な / V普通形 / イ形容詞 / ナ形容詞 + な + くせに",
    explanation:
      "Expresses blame, complaint, or dissatisfaction about someone doing something despite being in a certain situation. Casual and slightly rough; never used toward superiors.",
    formation:
      "N + な + くせに (子供[こども]のくせに)\nV普通形 + くせに (知[し]っているくせに)\nイ形容詞 + くせに (忙[いそが]しいくせに)",
    examples: [
      {
        jp: "子供[こども]のくせに、大人[おとな]みたいなことを言[い]う。",
        en: "Even though he is a child, he says things like an adult."
      },
      {
        jp: "知[し]っているくせに、教[おし]えてくれない。",
        en: "Even though he knows, he will not tell me."
      }
    ],
    notes:
      "「〜のに」に似るが、非難や不満の気持ちを強く含み、目上の人には使わない。",
    related: []
  },

  {
    id: "gn2-20",
    point: "〜ものの",
    reading: "〜ものの",
    level: "N2",
    category: "Contrast",
    meaning: "Although... / but...",
    structure: "V普通形 / イ形容詞 / N + である + ものの",
    explanation:
      "Indicates that although the first clause is true, there is a reservation, exception, or contrast in the second clause. Formal written style.",
    formation:
      "V普通形 + ものの (買[か]ったものの)\nイ形容詞 + ものの (難[むずか]しいものの)\nN + である + ものの",
    examples: [
      {
        jp: "買[か]ったものの、使[つか]う機会[きかい]がない。",
        en: "Although I bought it, I have no opportunity to use it."
      },
      {
        jp: "難[むずか]しいものの、やりがいのある仕事[しごと]だ。",
        en: "Although it is difficult, it is a rewarding job."
      }
    ],
    notes:
      "「〜けれども」の書き言葉的表現で、前件を認めた上で後件に留保や逆接を置く。",
    related: []
  },

  {
    id: "gn2-21",
    point: "〜とはいえ",
    reading: "〜とはいえ",
    level: "N2",
    category: "Contrast",
    meaning: "Although one says that... / even so...",
    structure: "N / V普通形 / イ形容詞 + とはいえ",
    explanation:
      "Concedes that the previous statement is true, but introduces a contrary fact or limitation. Formal written expression.",
    formation:
      "N + とはいえ (春[はる]とはいえまだ寒[さむ]い)\nV普通形 + とはいえ (近[ちか]いとはいえ車[くるま]が必要[ひつよう])\nイ形容詞 + とはいえ",
    examples: [
      {
        jp: "春[はる]とはいえ、まだ寒[さむ]い日[ひ]が続[つづ]いている。",
        en: "Although it is spring, cold days continue."
      },
      {
        jp: "小[ちい]さいとはいえ、立派[りっぱ]な宝石[ほうせき]だ。",
        en: "Although small, it is a splendid jewel."
      }
    ],
    notes:
      "「〜とはいうものの」の短い形で、前件を一応認めつつ反対の事実を強調する。",
    related: []
  },

  {
    id: "gn2-22",
    point: "〜ながら(も)",
    reading: "〜ながら(も)",
    level: "N2",
    category: "Contrast",
    meaning: "While... / although... (contrary to expectation)",
    structure: "V-ます形(去掉ます) / N / イ形容詞(去い) / ナ形容詞 + ながら(も)",
    explanation:
      "Indicates that despite the state or quality mentioned, the opposite also holds. Different from the simultaneous-action ながら.",
    formation:
      "V-ます形(去掉ます) + ながら (残念[ざんねん]ながら)\nN + ながら (子供[こども]ながら)\nイ形容詞(去い) + ながら (狭[せま]いながら)\nナ形容詞 + ながら",
    examples: [
      {
        jp: "狭[せま]いながらも、楽[たの]しい我[わ]が家[や]だ。",
        en: "Although small, it is my happy home."
      },
      {
        jp: "子供[こども]ながらも、立派[りっぱ]な判断[はんだん]をした。",
        en: "Although a child, he made an admirable judgment."
      }
    ],
    notes:
      "逆接の「ながら」は「〜であるが、それでも」という意味で、性質に反する事実を表す。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // ASSUMPTION — 推量・仮定
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-23",
    point: "〜に違いない",
    reading: "〜にちがいない",
    level: "N2",
    category: "Assumption",
    meaning: "Surely... / must be... (strong conviction)",
    structure: "N / V普通形 / イ形容詞 / ナ形容詞 + に違いない",
    explanation:
      "Expresses strong conviction that something is definitely the case based on evidence or reasoning.",
    formation:
      "N + に違いない (学生[がくせい]に違いない)\nV普通形 + に違いない (来[く]るに違いない)\nイ形容詞 + に違いない (面白[おもしろ]いに違いない)",
    examples: [
      {
        jp: "あの声[こえ]は田中[たなか]さんに違[ちが]いない。",
        en: "That voice must be Tanaka's."
      },
      {
        jp: "彼[かれ]は絶対[ぜったい]に成功[せいこう]するに違[ちが]いない。",
        en: "He will surely succeed."
      }
    ],
    notes:
      "「〜はずだ」より確信が強く、話者の根拠に基づく断定的な推量を表す。",
    related: []
  },

  {
    id: "gn2-24",
    point: "〜に決まっている",
    reading: "〜にきまっている",
    level: "N2",
    category: "Assumption",
    meaning: "Definitely... / it is certain that...",
    structure: "N / V普通形 / イ形容詞 / ナ形容詞 + に決まっている",
    explanation:
      "Expresses the speaker's strong conviction that something is definitely the case, often based on intuition or common sense.",
    formation:
      "N + に決まっている (嘘[うそ]に決まっている)\nV普通形 + に決まっている (怒[おこ]るに決まっている)\nイ形容詞 + に決まっている",
    examples: [
      {
        jp: "そんなことを言[い]えば、彼[かれ]は怒[おこ]るに決[き]まっている。",
        en: "If you say such a thing, he will definitely get angry."
      },
      {
        jp: "あの二人[ふたり]はいつか結婚[けっこん]するに決[き]まっている。",
        en: "Those two will definitely get married someday."
      }
    ],
    notes:
      "「〜に違いない」とほぼ同じだが、より口語的で、話者の確信や当然の帰結を表す。",
    related: []
  },

  {
    id: "gn2-25",
    point: "〜にすぎない",
    reading: "〜にすぎない",
    level: "N2",
    category: "Assumption",
    meaning: "Merely... / nothing more than...",
    structure: "N / V普通形 + にすぎない",
    explanation:
      "Indicates that something is nothing more than what is stated, often downplaying its importance or extent.",
    formation:
      "N + にすぎない (一度[いちど]の失敗[しっぱい]にすぎない)\nV普通形 + にすぎない (思[おも]ったにすぎない)\n形式名詞も可 (〜というのにすぎない)",
    examples: [
      {
        jp: "これは一度[いちど]の失敗[しっぱい]にすぎない。",
        en: "This is merely a single failure."
      },
      {
        jp: "彼[かれ]の発言[はつげん]は個人的[こじんてき]な意見[いけん]にすぎない。",
        en: "His statement is nothing more than a personal opinion."
      }
    ],
    notes:
      "「ただ〜だけだ」という限定・強調で、価値や程度が低いことを表す。",
    related: []
  },

  {
    id: "gn2-26",
    point: "〜恐れがある",
    reading: "〜おそれがある",
    level: "N2",
    category: "Assumption",
    meaning: "There is a risk/fear that... / might (undesirable)",
    structure: "V辞書形 / N + の + 恐れがある",
    explanation:
      "Indicates a risk or possibility of an undesirable outcome. Used in formal warnings, news, and announcements.",
    formation:
      "V辞書形 + 恐れがある (台風[たいふう]が来[く]る恐[おそれ]がある)\nN + の + 恐れがある (津波[つなみ]の恐[おそれ]がある)\n否定形はない",
    examples: [
      {
        jp: "今夜[こんや]、大雪[おおゆき]になる恐[おそれ]がある。",
        en: "There is a risk of heavy snow tonight."
      },
      {
        jp: "この薬[くすり]には副作用[ふくさよう]の恐[おそれ]がある。",
        en: "There is a risk of side effects with this medicine."
      }
    ],
    notes:
      "好ましくない事態が起きる可能性を警告する表現で、ニュースや注意喚起でよく使う。",
    related: []
  },

  {
    id: "gn2-27",
    point: "〜ようがない / 〜ようもない",
    reading: "〜ようがない / 〜ようもない",
    level: "N2",
    category: "Assumption",
    meaning: "There is no way to... / impossible to...",
    structure: "V-ます形(去掉ます) + ようがない / ようもない",
    explanation:
      "Indicates that there is no method or means to do something. ようもない is a slightly stronger version of the same pattern.",
    formation:
      "V-ます形(去掉ます) + ようがない\n例: 調[しら]べようがない\n説明[せつめい]しようがない\n連絡[れんらく]の取[と]りようがない",
    examples: [
      {
        jp: "連絡先[れんらくさき]がないので、連絡[れんらく]の取[と]りようがない。",
        en: "Since there is no contact info, there is no way to contact them."
      },
      {
        jp: "あまりにも複雑[ふくざつ]で、説明[せつめい]しようがない。",
        en: "It is so complicated that there is no way to explain it."
      }
    ],
    notes:
      "「〜する方法がない」という不可能を表し、ようもないはやや強い言い方。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // PASSIVE/CAUSATIVE — 受身・使役
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-28",
    point: "〜(さ)せられる (使役受身)",
    reading: "〜(さ)せられる",
    level: "N2",
    category: "Passive/Causative",
    meaning: "To be made to do something (causative-passive)",
    structure: "一類V: V-あ段 + される/せられる / 二類V: ます形 + させられる / 三類V: する→させられる, くる→こさせられる",
    explanation:
      "Indicates being forced or compelled to do something by someone else. A combination of the causative and passive voices, often conveying the sufferer's perspective.",
    formation:
      "一類V: V-あ段 + される (書[か]かされる / 行[い]かされる)\n二類V: V-ます形 + させられる (食[た]べさせられる)\n三類V: する→させられる / くる→こさせられる",
    examples: [
      {
        jp: "子供[こども]の頃[ころ]、毎日[まいにち]野菜[やさい]を食[た]べさせられた。",
        en: "When I was a child, I was made to eat vegetables every day."
      },
      {
        jp: "先生[せんせい]に長[なが]い文章[ぶんしょう]を暗記[あんき]させられた。",
        en: "I was made to memorize a long passage by the teacher."
      }
    ],
    notes:
      "「誰かに強制的に〜させられる」という使役受身で、被害や不満のニュアンスを含む。",
    related: []
  },

  {
    id: "gn2-29",
    point: "迷惑[めいわく]の受身 (間接受身)",
    reading: "めいわくのうけみ",
    level: "N2",
    category: "Passive/Causative",
    meaning: "Suffering passive: someone does X and it troubles the subject",
    structure: "(N1が) N2に + V-られる形",
    explanation:
      "Indirect passive where the subject is adversely affected by someone else's action. Even intransitive verbs that normally have no passive form can be used here.",
    formation:
      "自動詞も受身可能: (私[わたし]が)子供[こども]に泣[な]かれた\n他動詞: (私[わたし]が)泥棒[どろぼう]に財布[さいふ]を盗[ぬす]まれた\n所有物: 足[あし]を踏[ふ]まれた",
    examples: [
      {
        jp: "夜[よる]遅[おそ]く、隣[となり]の人[ひと]に騒[さわ]がれて眠[ねむ]れなかった。",
        en: "I was troubled by the neighbor making noise late at night and could not sleep."
      },
      {
        jp: "急[いそ]いでいる時[とき]に、雨[あめ]に降[ふ]られて困[こま]った。",
        en: "It rained when I was in a hurry and I was troubled."
      }
    ],
    notes:
      "直接被害を受けるわけではないが、他人の動作や事態に迷惑を被る日本語特有の受身。",
    related: []
  },

  {
    id: "gn2-30",
    point: "〜に〜られる (持ち主の受身)",
    reading: "〜に〜られる",
    level: "N2",
    category: "Passive/Causative",
    meaning: "To have one's body part or possession affected by someone's action",
    structure: "N1(持ち主)は + N2(動作主)に + 体の一部/所有物 + V-られる",
    explanation:
      "A passive construction where the subject has a body part or possession affected by another's action, often expressing annoyance or inconvenience.",
    formation:
      "N1は + N2に + 体の一部/所有物 + V-られる\n例: 足[あし]を踏[ふ]まれた / 財布[さいふ]を盗[ぬす]まれた\nカバンを引[ひ]っ張[ぱ]られた",
    examples: [
      {
        jp: "満員[まんいん]電車[でんしゃ]で足[あし]を踏[ふ]まれた。",
        en: "I had my foot stepped on in a crowded train."
      },
      {
        jp: "スリに財布[さいふ]を盗[ぬす]まれた。",
        en: "I had my wallet stolen by a pickpocket."
      }
    ],
    notes:
      "被害の対象が体の一部や持ち物の場合に使い、動作主は「に」で示される。",
    related: []
  },

  {
    id: "gn2-31",
    point: "自発[じはつ]の受身",
    reading: "じはつのうけみ",
    level: "N2",
    category: "Passive/Causative",
    meaning: "Spontaneous passive: a feeling or thought arises naturally",
    structure: "思考・感情の動詞 + れる / られる",
    explanation:
      "Expresses that a thought, feeling, or memory arises naturally without conscious effort. Common with verbs of thinking or feeling.",
    formation:
      "思考動詞 + れる/られる: 思[おも]われる / 考[かんが]えられる\n感情動詞: 案[あん]じられる / 偲[しの]ばれる\n記憶: 思[おも]い出[だ]される",
    examples: [
      {
        jp: "昔[むかし]の友達[ともだち]のことが思[おも]い出[だ]される。",
        en: "I am naturally reminded of my old friends."
      },
      {
        jp: "この計画[けいかく]には無理[むり]があると思[おも]われる。",
        en: "It is naturally thought that this plan is unreasonable."
      }
    ],
    notes:
      "自然とそう思える、感じられるという自発の受身で、動作主を明示せず客観的な判断を表す。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // HONORIFIC — 敬語
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-32",
    point: "お/ご〜になる (尊敬語)",
    reading: "お/ご〜になる",
    level: "N2",
    category: "Honorific",
    meaning: "Respectful form: to do (someone else's action)",
    structure: "お + V-ます形(去掉ます) + になる / ご + 漢語N + になる",
    explanation:
      "Sonkeigo (respectful language) used to elevate the action of a respected person. The doer is the respected subject of the sentence.",
    formation:
      "和語V: お + ます形(去ます) + になる (お書[か]きになる)\n漢語N: ご + N + になる (ご到着[とうちゃく]になる)\n可能形: お + 〜になる (お読[よ]みになれる)",
    examples: [
      {
        jp: "先生[せんせい]はもうお帰[かえ]りになりました。",
        en: "The teacher has already gone home."
      },
      {
        jp: "社長[しゃちょう]がご到着[とうちゃく]になりました。",
        en: "The company president has arrived."
      }
    ],
    notes:
      "相手の動作を高める尊敬語で、動作主を主語に立てて敬意を表す。",
    related: []
  },

  {
    id: "gn2-33",
    point: "お/ご〜する (謙譲語)",
    reading: "お/ご〜する",
    level: "N2",
    category: "Honorific",
    meaning: "Humble form: I (humbly) do for someone",
    structure: "お + V-ます形(去掉ます) + する / ご + 漢語N + する",
    explanation:
      "Kenjougo (humble language) used to lower the speaker's own action when addressing a respected person, indirectly elevating the listener.",
    formation:
      "和語V: お + ます形(去ます) + する (お持[も]ちする)\n漢語N: ご + N + する (ご連絡[れんらく]する)\n丁寧: お〜します / お〜いたします",
    examples: [
      {
        jp: "私[わたし]が荷物[にもつ]をお持[も]ちします。",
        en: "I will carry the luggage for you."
      },
      {
        jp: "後[のち]ほどご連絡[れんらく]いたします。",
        en: "I will contact you later."
      }
    ],
    notes:
      "自分の動作を低めて相手を高める謙譲語で、動作主は話者自身。",
    related: []
  },

  {
    id: "gn2-34",
    point: "お/ご〜ください (尊敬の依頼)",
    reading: "お/ご〜ください",
    level: "N2",
    category: "Honorific",
    meaning: "Please do... (respectful request)",
    structure: "お + V-ます形(去掉ます) + ください / ご + 漢語N + ください",
    explanation:
      "A respectful request form that elevates the listener's action. Politer and more formal than 〜てください.",
    formation:
      "和語V: お + ます形(去ます) + ください (お待[ま]ちください)\n漢語N: ご + N + ください (ご利用[りよう]ください)\n否定依頼: お + 〜 + にならないでください",
    examples: [
      {
        jp: "こちらでお待[ま]ちください。",
        en: "Please wait here."
      },
      {
        jp: "エスカレーターをご利用[りよう]ください。",
        en: "Please use the escalator."
      }
    ],
    notes:
      "「〜てください」の尊敬表現で、改まった場や接客で相手に丁寧に依頼する。",
    related: []
  },

  {
    id: "gn2-35",
    point: "〜(さ)せていただく",
    reading: "〜(さ)せていただく",
    level: "N2",
    category: "Honorific",
    meaning: "Allow me to... / I humbly do (with permission)",
    structure: "V-使役形(させて) + いただく",
    explanation:
      "A humble expression indicating that the speaker receives permission to do something, thereby elevating the listener. Common in business contexts.",
    formation:
      "V-使役形 + いただく (説明[せつめい]させていただく)\nV-使役形 + いただけますか (お願[ねが]いさせていただけますか)\nより丁寧: 〜させていただけませんか",
    examples: [
      {
        jp: "自己[じこ]紹介[しょうかい]させていただきます。",
        en: "Allow me to introduce myself."
      },
      {
        jp: "明日[あした]お休[やす]みさせていただきます。",
        en: "Please allow me to take the day off tomorrow."
      }
    ],
    notes:
      "自分の動作を「相手の許可を得て行う」という形でへりくだり、ビジネスで頻用される。",
    related: []
  },

  {
    id: "gn2-36",
    point: "謙譲語の特別動詞 (参る・申し上げる・伺う・拝見する)",
    reading: "けんじょうごのとくべつどうし",
    level: "N2",
    category: "Honorific",
    meaning: "Special humble verbs that replace regular verbs entirely",
    structure: "行く→参る / 言う→申し上げる / 聞く・訪ねる→伺う / 見る→拝見する",
    explanation:
      "A set of irregular humble verbs that completely replace the regular verb, used when the speaker's action affects a respected person.",
    formation:
      "行[い]く→参[まい]る (私[わたし]が参[まい]ります)\n言[い]う→申[もう]し上[あ]げる (申[もう]し上[あ]げます)\n聞[き]く・訪[たず]ねる→伺[うかが]う (伺[うかが]います)\n見[み]る→拝見[はいけん]する (拝見[はいけん]します)\n知[し]る→存[ぞん]じる (存[ぞん]じております)",
    examples: [
      {
        jp: "私[わたし]が明日[あした]参[まい]ります。",
        en: "I will go tomorrow (humbly)."
      },
      {
        jp: "お手紙[てがみ]を拝見[はいけん]いたしました。",
        en: "I have respectfully read your letter."
      }
    ],
    notes:
      "規則的な「お〜する」に対し、動詞そのものが入れ替わる特殊謙譲語で、ビジネスや改まった場で使う。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // PARTICLES — 助詞
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-37",
    point: "〜さえ〜ば",
    reading: "〜さえ〜ば",
    level: "N2",
    category: "Particles",
    meaning: "If only... / as long as...",
    structure: "N + さえ + V-ば形 / イ形容詞ければ / あれば / いれば",
    explanation:
      "Indicates a sufficient condition: as long as X is satisfied, the result follows regardless of other factors.",
    formation:
      "名詞 + さえ + 〜ば (お金[かね]さえあれば)\n動詞ます形 + さえすれば (食[た]べさえすれば)\n動詞て形 + さえいれば (読[よ]んでさえいれば)\nイ形容詞 + さえければ (よさえければ)",
    examples: [
      {
        jp: "お金[かね]さえあれば、何[なに]でもできるというわけではない。",
        en: "It is not the case that you can do anything if only you have money."
      },
      {
        jp: "君[きみ]さえいれば、他[ほか]には何[なに]もいらない。",
        en: "As long as you are here, I need nothing else."
      }
    ],
    notes:
      "「〜だけあれば十分」という必要十分条件を表し、「だけで」より強調的。",
    related: []
  },

  {
    id: "gn2-38",
    point: "〜すら",
    reading: "〜すら",
    level: "N2",
    category: "Particles",
    meaning: "Even... (more formal than さえ)",
    structure: "N + すら(+助詞) / V-て形 + すら",
    explanation:
      "Indicates that even an extreme case applies, used in formal written style. Similar to さえ but more literary.",
    formation:
      "N + すら (親[おや]ですら知[し]らない)\nN + ですら (専門家[せんもんか]ですら)\nV-て + すら (見[み]てすらいない)",
    examples: [
      {
        jp: "簡単[かんたん]な計算[けいさん]ですら、間違[まちが]えてしまった。",
        en: "I even made a mistake on a simple calculation."
      },
      {
        jp: "親[おや]ですら、彼[かれ]のことを理解[りかい]できない。",
        en: "Even his parents cannot understand him."
      }
    ],
    notes:
      "「〜さえ」の硬い書き言葉的表現で、極端な例を挙げて強調する。",
    related: []
  },

  {
    id: "gn2-39",
    point: "〜きり(は)",
    reading: "〜きり(は)",
    level: "N2",
    category: "Particles",
    meaning: "Only... / just... / since doing X (and nothing has happened since)",
    structure: "N + きり / V-た形 + きり",
    explanation:
      "Indicates limitation ('only') or, with the past tense, that something has not happened since the action mentioned.",
    formation:
      "N + きり (これきり)\nV-た形 + きり (行[い]ったきり)\n〜きり〜ない (一度[いちど]きりしかない)",
    examples: [
      {
        jp: "彼[かれ]は家[いえ]を出[で]たきり、帰[かえ]ってこない。",
        en: "He left home and has not returned since."
      },
      {
        jp: "これきりにして、もう二度[にど]と会[あ]わないでくれ。",
        en: "Let this be the last; do not meet me ever again."
      }
    ],
    notes:
      "「〜だけ」の限定用法と「〜したまま」という未解決の状態用法の二つがある。",
    related: []
  },

  {
    id: "gn2-40",
    point: "〜だの〜だの",
    reading: "〜だの〜だの",
    level: "N2",
    category: "Particles",
    meaning: "Things like... and... / such things as...",
    structure: "N + だの + N + だの / V普通形 + だの",
    explanation:
      "Used to list examples, often implying the list is endless or that the speaker is somewhat negative or overwhelmed.",
    formation:
      "N + だの + N + だの (ジュースだのコーヒーだの)\nイ形容詞 + だの (暑[あつ]いだの寒[さむ]いだの)\nV普通形 + だの",
    examples: [
      {
        jp: "ジュースだのコーヒーだの、甘[あま]いものばかり飲[の]んでいる。",
        en: "He is always drinking sweet things—juice, coffee, and so on."
      },
      {
        jp: "痛[いた]いだのかゆいだの、文句[もんく]ばかり言[い]っている。",
        en: "He is always complaining—about pain, itchiness, and so on."
      }
    ],
    notes:
      "「〜や〜など」と例示し、列挙が続く不満や煩わしさを含むことが多い。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // CONJUNCTIONS — 接続詞
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-41",
    point: "あるいは",
    reading: "あるいは",
    level: "N2",
    category: "Conjunctions",
    meaning: "Or... / alternatively... / perhaps",
    structure: "A + あるいは + B (並列・選択)",
    explanation:
      "Connects two options or possibilities, indicating 'or' in a formal written style. Also used as an adverb to express possibility ('perhaps').",
    formation:
      "名詞 + あるいは + 名詞 (電車[でんしゃ]あるいはバス)\n文 + あるいは + 文 (行[い]く、あるいは行[い]かない)\n副詞的: あるいはそうかもしれない",
    examples: [
      {
        jp: "電車[でんしゃ]あるいはバスで行[い]ける。",
        en: "You can get there by train or by bus."
      },
      {
        jp: "あるいは、別[べつ]の方法[ほうほう]を考[かんが]える必要[ひつよう]があるかもしれない。",
        en: "Or perhaps, we may need to consider another method."
      }
    ],
    notes:
      "「または」より改まった書き言葉で、選択や可能性を示す接続詞。",
    related: []
  },

  {
    id: "gn2-42",
    point: "ならびに",
    reading: "ならびに",
    level: "N2",
    category: "Conjunctions",
    meaning: "And... / as well as (very formal)",
    structure: "A + ならびに + B",
    explanation:
      "A formal conjunction meaning 'and' or 'as well as', used in legal, official, or written documents to combine items.",
    formation:
      "名詞 + ならびに + 名詞 (氏名[しめい]ならびに住所[じゅうしょ])\n句 + ならびに + 句\n極めて硬い文脈で使用",
    examples: [
      {
        jp: "氏名[しめい]ならびに住所[じゅうしょ]を書[か]いてください。",
        en: "Please write your name and address."
      },
      {
        jp: "個人情報[こじんじょうほう]の収集[しゅうしゅう]ならびに利用[りよう]について説明[せつめい]する。",
        en: "I will explain the collection and use of personal information."
      }
    ],
    notes:
      "「及び」よりさらに硬く、公文書・契約書・法令などで使われる。",
    related: []
  },

  {
    id: "gn2-43",
    point: "しかも",
    reading: "しかも",
    level: "N2",
    category: "Conjunctions",
    meaning: "Moreover... / besides / and what is more",
    structure: "文 / 句 + しかも + 文 / 句",
    explanation:
      "Adds information, often emphasizing an additional surprising or notable point. Used in both speech and writing.",
    formation:
      "文 + しかも + 文 (安[やす]い、しかも品[しな]がいい)\n句の追加: 〜、しかも〜\n書き言葉・話し言葉両用",
    examples: [
      {
        jp: "この店[みせ]の料理[りょうり]は安[やす]い、しかも美味[おい]しい。",
        en: "The food at this restaurant is cheap, and moreover delicious."
      },
      {
        jp: "彼[かれ]は頭[あたま]がいい、しかも親切[しんせつ]だ。",
        en: "He is smart, and what is more, kind."
      }
    ],
    notes:
      "「〜だけでなく、その上」という追加・強調で、好ましいことも好ましくないことも導ける。",
    related: []
  },

  {
    id: "gn2-44",
    point: "すなわち",
    reading: "すなわち",
    level: "N2",
    category: "Conjunctions",
    meaning: "That is to say... / in other words / namely",
    structure: "文/句 + すなわち + 文/句",
    explanation:
      "Indicates that what follows restates or explains what came before in different words. Formal written style.",
    formation:
      "文 + すなわち + 文 (X、すなわちY)\n名詞の定義付けにも使用\n極めて硬い書き言葉",
    examples: [
      {
        jp: "彼[かれ]は私[わたし]の母[はは]の兄[あに]、すなわち私[わたし]の伯父[おじ]です。",
        en: "He is my mother's older brother, that is to say, my uncle."
      },
      {
        jp: "日本[にほん]の首都[しゅと]、すなわち東京[とうきょう]に住[す]んでいる。",
        en: "I live in Japan's capital, namely Tokyo."
      }
    ],
    notes:
      "「つまり」の硬い言い方で、言い換え・定義付け・同定を示す接続詞。",
    related: []
  },

  {
    id: "gn2-45",
    point: "要するに",
    reading: "ようするに",
    level: "N2",
    category: "Conjunctions",
    meaning: "In short... / to sum up / in a word",
    structure: "文 + 要するに + 文",
    explanation:
      "Used to summarize what has been said into a short conclusion. Formal but common in both speech and writing.",
    formation:
      "文のまとめに使用\n要[よう]するに + 結論\n〜、要[よう]するに〜だ。",
    examples: [
      {
        jp: "彼[かれ]は何度[なんど]も遅刻[ちこく]し、宿題[しゅくだい]もしない。要[よう]するに、やる気[き]がないのだ。",
        en: "He is repeatedly late and does not do his homework. In short, he has no motivation."
      },
      {
        jp: "要[よう]するに、私[わたし]の意見[いけん]に反対[はんたい]だということですね。",
        en: "In short, you mean that you oppose my opinion, right?"
      }
    ],
    notes:
      "長い説明や議論の結論を短くまとめる表現で、「つまり」より改まった言い方。",
    related: []
  },

  // ────────────────────────────────────────────────────────────────
  // MODIFIERS — 修飾
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-46",
    point: "〜という + N",
    reading: "〜という",
    level: "N2",
    category: "Modifiers",
    meaning: "Called... / the N called / the fact that...",
    structure: "N + という + N / 文 + という + N",
    explanation:
      "Used to name, define, or quote. Names a thing by its content, or introduces a quoted clause as a modifier.",
    formation:
      "N1 + という + N2 (田中[たなか]という人[ひと])\n文 + という + N (彼[かれ]が来[く]るという噂[うわさ])\n定義: AとはBということ",
    examples: [
      {
        jp: "田中[たなか]という人[ひと]から電話[でんわ]がありました。",
        en: "I got a phone call from a person called Tanaka."
      },
      {
        jp: "彼[かれ]が転職[てんしょく]するという噂[うわさ]を聞[き]いた。",
        en: "I heard a rumor that he is changing jobs."
      }
    ],
    notes:
      "名称・内容・伝聞などを名詞の前に置いて説明する修飾表現で、引用の「と」に同じ。",
    related: []
  },

  {
    id: "gn2-47",
    point: "〜といった + N",
    reading: "〜といった",
    level: "N2",
    category: "Modifiers",
    meaning: "Such things as... / like... (giving examples)",
    structure: "N + といった + N",
    explanation:
      "Gives examples to modify a noun, meaning 'such things as N1, N2, ...'. Softer and more example-based than という.",
    formation:
      "N + といった + N (寿司[すし]といった日本料理[にほんりょうり])\n複数列挙可: A、BといったN\n〜といった + N (総称名詞)",
    examples: [
      {
        jp: "寿司[すし]や天[てん]ぷらといった日本[にほん]料理[りょうり]が好[す]きだ。",
        en: "I like Japanese dishes such as sushi and tempura."
      },
      {
        jp: "東京[とうきょう]や大阪[おおさか]といった大[おお]きな都市[とし]に住[す]みたい。",
        en: "I want to live in big cities like Tokyo and Osaka."
      }
    ],
    notes:
      "複数の例を挙げて総称名詞を修飾し、「〜のような」と近い意味でより具体例を強調する。",
    related: []
  },

  {
    id: "gn2-48",
    point: "〜とおり(に) / 〜どおり",
    reading: "〜とおり(に) / 〜どおり",
    level: "N2",
    category: "Modifiers",
    meaning: "As... / in the way that... / according to...",
    structure: "N + の + とおり / V辞書形・た形 + とおり / N + どおり",
    explanation:
      "Indicates that something is done exactly as stated, predicted, or instructed. どおり is the rendaku form attached to native nouns.",
    formation:
      "N + の + とおり (計画[けいかく]のとおりに)\nV辞書形/タ形 + とおり (書[か]いたとおりに)\nN + どおり (予定[よてい]どおり)",
    examples: [
      {
        jp: "説明書[せつめいしょ]のとおりに組[く]み立[た]ててください。",
        en: "Please assemble it according to the manual."
      },
      {
        jp: "予想[よそう]どおり、彼[かれ]が優勝[ゆうしょう]した。",
        en: "As expected, he won."
      }
    ],
    notes:
      "「〜と同じように・そのまま」という意味で、指示・予想・計画通りに事が進むことを表す。",
    related: []
  },

  {
    id: "gn2-49",
    point: "〜ばかりか / 〜ばかりでなく",
    reading: "〜ばかりか / 〜ばかりでなく",
    level: "N2",
    category: "Modifiers",
    meaning: "Not only... but also...",
    structure: "N / V普通形 / イ形容詞 / ナ形容詞 + ばかりか",
    explanation:
      "Indicates that not only the first item but also an additional (often more extreme) item applies. Formal written style.",
    formation:
      "N + ばかりか (英語[えいご]ばかりか)\nV普通形 + ばかりか (話[はな]せるばかりか)\nイ形容詞 + ばかりか\n後件は「〜も」を伴う",
    examples: [
      {
        jp: "彼[かれ]は英語[えいご]ばかりか、フランス語[ご]も話[はな]せる。",
        en: "He can speak not only English but also French."
      },
      {
        jp: "その料理[りょうり]は美味[おい]しいばかりか、見[み]た目[め]も美[うつく]しい。",
        en: "That dish is not only delicious but also beautiful in appearance."
      }
    ],
    notes:
      "「〜だけでなく」と同じで、後件には「も」を伴い、前件以上の事柄を付け加える。",
    related: []
  },

  {
    id: "gn2-50",
    point: "〜どころか",
    reading: "〜どころか",
    level: "N2",
    category: "Modifiers",
    meaning: "Far from... / on the contrary, ... (rather than)",
    structure: "N / V普通形 / イ形容詞 / ナ形容詞 + どころか",
    explanation:
      "Indicates that not only is the expected thing not the case, but the opposite or something more extreme is true. Used to deny or strengthen an expectation.",
    formation:
      "N + どころか (静[しず]かどころか)\nV普通形 + どころか (休[やす]むどころか)\nイ形容詞 + どころか\n後件は逆の事実",
    examples: [
      {
        jp: "彼[かれ]は静[しず]かどころか、とても騒[さわ]がしい人[ひと]だ。",
        en: "He is far from quiet; he is actually a very noisy person."
      },
      {
        jp: "休[やす]むどころか、毎日[まいにち]残業[ざんぎょう]している。",
        en: "Far from resting, I am working overtime every day."
      }
    ],
    notes:
      "予想や期待に反し、反対の事態やさらに極端な状況が起きることを強調する。",
    related: []
  }
];
