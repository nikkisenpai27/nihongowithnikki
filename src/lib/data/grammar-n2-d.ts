import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// This file covers N2-level grammar points (Shinzaizen Master style),
// chunk D, IDs gn2-151 .. gn2-200. No lesson field. Distinct from chunks A, B, C.
// 50 grammar points across 10 categories: Conditionals, Cause/Reason,
// Time/Sequence, Contrast, Assumption, Passive/Causative, Honorific,
// Particles, Conjunctions, Modifiers.

export const grammarN2D: GrammarData[] = [
  // ────────────────────────────────────────────────────────────────
  // CONDITIONALS — 条件
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-151",
    point: "〜ことなしに",
    reading: "〜ことなしに",
    level: "N2",
    category: "Conditionals",
    meaning: "Without doing X (the main clause cannot be realized)",
    structure: "V辞書形 + ことなしに",
    explanation:
      "Indicates that without doing X, the result in the main clause cannot be achieved. A formal, written-style equivalent of 〜ないで / 〜ずに, often paired with a negative or impossibility statement.",
    formation:
      "V辞書形 + ことなしに (努力[どりょく]することなしに / 理解[りかい]することなしに)",
    examples: [
      { jp: "努力[どりょく]することなしに、成功[せいこう]はおぼつかない。", en: "Without making an effort, success is uncertain." },
      { jp: "相手[あいて]の立場[たちば]を考[かんが]えることなしに、本当[ほんとう]の解決[かいけつ]はできない。", en: "Without considering the other party's standpoint, a true resolution cannot be reached." }
    ],
    notes:
      "硬い書き言葉で、「〜ないで / 〜ずに」とほぼ同じ。後件に不可能・困難を示す表現が来ることが多い。",
    related: ["gn2-156"]
  },

  {
    id: "gn2-152",
    point: "〜にしろ",
    reading: "〜にしろ",
    level: "N2",
    category: "Conditionals",
    meaning: "Even if; whether or not (single form, concessive)",
    structure: "V普通形 + にしろ / N + にしろ / Na-adj + にしろ / I-adj + にしろ",
    explanation:
      "A concessive expression meaning 'even if' or 'even assuming that...'. Used alone to acknowledge a hypothetical case before stating the main point. Distinct from the doubled 〜にしろ〜にしろ pattern (covered in chunk B).",
    formation:
      "V辞書形 + にしろ (行[い]くにしろ)\nV-ない形 + にしろ (行[い]かないにしろ)\nN + にしろ (学生[がくせい]にしろ)\nI-adj + にしろ (忙[いそが]しいにしろ)",
    examples: [
      { jp: "忙[いそが]しいにしろ、毎日[まいにち]少[すこ]しは運動[うんどう]した方[ほう]がいい。", en: "Even if you are busy, it is better to exercise a little every day." },
      { jp: "彼[かれ]の言[い]うことが本当[ほんとう]にしろ、確認[かくにん]なしに信用[しんよう]するわけにはいかない。", en: "Even if what he says is true, I cannot trust him without verification." }
    ],
    notes:
      "単独でも「〜にしろ〜にしろ」の重複形でも使う。本項では単独用法を中心に扱う。「〜にせよ」(D)よりやや口頭的。",
    related: ["gn2-153", "gn2-154"]
  },

  {
    id: "gn2-153",
    point: "〜にせよ",
    reading: "〜にせよ",
    level: "N2",
    category: "Conditionals",
    meaning: "Even if; even assuming that",
    structure: "V普通形 + にせよ / N + にせよ / Na-adj + にせよ / I-adj + にせよ",
    explanation:
      "A concessive expression meaning 'even if' or 'even assuming that...'. Slightly more formal than 〜にしろ; both are largely interchangeable. Used to acknowledge a situation (real or hypothetical) before a contrasting main clause.",
    formation:
      "V辞書形 + にせよ (行[い]くにせよ)\nV-ない形 + にせよ (行[い]かないにせよ)\nN + にせよ (雨[あめ]にせよ)\nI-adj + にせよ (難[むずか]しいにせよ)",
    examples: [
      { jp: "結果[けっか]が悪[わる]かったにせよ、最後[さいご]まで諦[あきら]めなかったことは評価[ひょうか]できる。", en: "Even if the result was bad, the fact that you did not give up until the end deserves appreciation." },
      { jp: "忙[いそが]しいにせよ、連絡[れんらく]くらいはするべきだった。", en: "Even if you were busy, you should have at least contacted me." }
    ],
    notes:
      "「〜にしろ」(D)と同じく譲歩を表すが、やや改まった硬い表現。重複形「〜にせよ〜にせよ」は chunk B で扱う。",
    related: ["gn2-152", "gn2-154"]
  },

  {
    id: "gn2-154",
    point: "〜にしても",
    reading: "〜にしても",
    level: "N2",
    category: "Conditionals",
    meaning: "Even if; even so; whether or not",
    structure: "V普通形 + にしても / N + だ + にしても / Na-adj + だ + にしても / I-adj + にしても",
    explanation:
      "A common concessive meaning 'even if' or 'even so'. Used to acknowledge a situation (real or hypothetical) before stating a contrasting main clause. More conversational than 〜にせよ / 〜にしろ.",
    formation:
      "V辞書形 + にしても (行[い]くにしても)\nV-た形 + にしても (行[い]ったにしても)\nN + にしても (学生[がくせい]にしても)\nI-adj + にしても (高[たか]いにしても)",
    examples: [
      { jp: "雨[あめ]が降[ふ]るにしても、大会[たいかい]は予定[よてい]どおり行[おこな]う。", en: "Even if it rains, the tournament will be held as scheduled." },
      { jp: "高[たか]いにしても、品質[ひんしつ]がよければ買[か]いたい。", en: "Even if it is expensive, I would like to buy it if the quality is good." }
    ],
    notes:
      "「〜ても」よりやや硬い譲歩表現。「〜にしては」(B)は基準との不一致を示す別表現で混同しやすい。",
    related: ["gn2-152", "gn2-153"]
  },

  {
    id: "gn2-155",
    point: "〜とあれば",
    reading: "〜とあれば",
    level: "N2",
    category: "Conditionals",
    meaning: "If it is the case that; since (a special situation calls for it)",
    structure: "V普通形 + とあれば / N + (だ)とあれば / Na-adj + だとあれば / I-adj + とあれば",
    explanation:
      "Used when a special circumstance or request makes the condition necessary: 'if it is the case that..., since... is requested'. Implies willingness to make an exception or take special action because of the situation.",
    formation:
      "V辞書形 + とあれば (行[い]くとあれば)\nN + だとあれば / N + とあれば (子供[こども]のためだとあれば)\nI-adj + とあれば (必要[ひつよう]だとあれば)",
    examples: [
      { jp: "子供[こども]の将来[しょうらい]のためだとあれば、多少[たしょう]の犠牲[ぎせい]は払[はら]うつもりだ。", en: "If it is for the children's future, I intend to make some sacrifices." },
      { jp: "皆[みな]さんがそう望[のぞ]むとあれば、計画[けいかく]を変更[へんこう]しましょう。", en: "If that is what everyone wishes, let us change the plan." }
    ],
    notes:
      "「〜なら」に近いが、特別な事情・要望・条件を提示し、それに応えるというニュアンスを持つ。硬い表現。",
    related: ["gn2-152", "gn2-154"]
  },

  {
    id: "gn2-156",
    point: "〜てからでないと〜ない",
    reading: "〜てからでないと〜ない",
    level: "N2",
    category: "Conditionals",
    meaning: "Unless one does X first, (Y cannot happen)",
    structure: "V-て形 + からでないと + 〜ない / V-て形 + からでなければ + 〜ない",
    explanation:
      "Indicates that an action must be completed before another can take place. The following clause is always negative, expressing that without the prior action, the subsequent one is impossible.",
    formation:
      "V-て + からでないと + 否定 (調[しら]べてからでないと分[わ]からない)\nV-て + からでなければ + 否定 (会[あ]ってからでなければ決[き]められない)",
    examples: [
      { jp: "詳[くわ]しい内容[ないよう]を聞[き]いてからでないと、返事[へんじ]のしようがない。", en: "Unless I hear the details first, I cannot possibly reply." },
      { jp: "現地[げんち]に行[い]ってからでなければ、本当[ほんとう]の状況[じょうきょう]は分[わ]からない。", en: "Unless I actually go to the site, I cannot know the true situation." }
    ],
    notes:
      "「〜てから」に否定が重なり、「〜なければ〜ない」と同じ制約を表す。類義: 〜ないことには(A・B)、〜ことなしに(D)。",
    related: ["gn2-151"]
  },

  // ────────────────────────────────────────────────────────────────
  // CAUSE / REASON — 原因・理由
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-157",
    point: "〜とあって",
    reading: "〜とあって",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Because; since (a special circumstance is producing a noticeable result)",
    structure: "V普通形 + とあって / N + だとあって / Na-adj + だとあって / I-adj + とあって",
    explanation:
      "Indicates a special or notable cause that produces an understandable result. Often used in narration to explain why a particular scene is unfolding, with a nuance of 'as one would expect, given that...'.",
    formation:
      "V辞書形 + とあって (夏[なつ]休[やす]みが始[はじ]まるとあって)\nN + だとあって (祭典[さいてん]だとあって)\nI-adj + とあって (忙[いそが]しいとあって)",
    examples: [
      { jp: "夏休[なつやす]み最初[さいしょ]の週末[しゅうまつ]とあって、遊園地[ゆうえんち]は家族連[かぞくづ]れで賑[にぎ]わっていた。", en: "Because it was the first weekend of summer vacation, the amusement park was crowded with families." },
      { jp: "人気[にんき]歌手[かしゅ]のコンサートとあって、チケットはすぐに売[う]り切[き]れた。", en: "Because it was a popular singer's concert, the tickets sold out immediately." }
    ],
    notes:
      "客観的・第三者的に理由を述べる書き言葉表現。「〜だから」と同義だが、特別な事情を強調するニュアンスがある。",
    related: ["gn2-158", "gn2-159"]
  },

  {
    id: "gn2-158",
    point: "〜ことから",
    reading: "〜ことから",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Because; judging from the fact that...",
    structure: "V普通形 + ことから / Nである + ことから / Na-adj(である) + ことから / I-adj + ことから",
    explanation:
      "Used to state a reason or basis for an inference: 'from the fact that..., it can be concluded that...'. Commonly appears in explanatory or analytical writing.",
    formation:
      "V辞書形 + ことから (証拠[しょうこ]が見[み]つからないことから)\nN + である + ことから (事実[じじつ]であることから)\nI-adj + ことから (大[おお]きいことから)",
    examples: [
      { jp: "現場[げんば]に指紋[しもん]が残[のこ]されていなかったことから、犯人[はんにん]は手袋[てぶくろ]をしていたと推測[すいそく]される。", en: "From the fact that no fingerprints were left at the scene, it is inferred that the culprit wore gloves." },
      { jp: "この地域[ちいき]は地震[じしん]が多[おお]いことから、建物[たてもの]の耐震性[たいしんせい]が高[たか]い。", en: "Because earthquakes are frequent in this area, the buildings have high seismic resistance." }
    ],
    notes:
      "「〜から」と同義だが、客観的な事実を根拠として結論を導くときに使う書き言葉。後件には推量・判断が来る。",
    related: ["gn2-157"]
  },

  {
    id: "gn2-159",
    point: "〜ゆえ(に)",
    reading: "〜ゆえ(に)",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Because; due to (formal/literary)",
    structure: "N + の + ゆえ(に) / Na-adj + な + ゆえ(に) / I-adj + ゆえ(に) / V普通形 + ゆえ(に)",
    explanation:
      "A formal, somewhat literary expression of cause or reason: 'because of, on account of'. Often used in fixed phrases like 貧困ゆえに (because of poverty) or in written/solemn contexts.",
    formation:
      "N + の + ゆえに / N + ゆえに (若[わか]さゆえに / 愛[あい]のゆえに)\nNa-adj + な + ゆえに (静[しず]かなゆえに)\nI-adj + ゆえに (悲[かな]しいゆえに)",
    examples: [
      { jp: "若[わか]さゆえに過[あやま]ちを犯[おか]してしまうことがある。", en: "There are times when one makes mistakes because of youth." },
      { jp: "貧困[ひんこん]ゆえに教育[きょういく]を受[う]けられない子[こ]どもがまだいる。", en: "There are still children who cannot receive education because of poverty." }
    ],
    notes:
      "「〜ため(に)」の古風で硬い表現。詩的・文学的文脈や格言で好まれる。「ゆえ」単独で「理由」の意。",
    related: ["gn2-157", "gn2-160"]
  },

  {
    id: "gn2-160",
    point: "〜こととて",
    reading: "〜こととて",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Because; given that (with a nuance of excuse or asking for understanding)",
    structure: "N + の + こととて / Na-adj + な + こととて / I-adj + こととて / V普通形 + こととて",
    explanation:
      "An old-fashioned expression of reason, often used to excuse or explain a shortcoming: 'since it is the case that...'. Suggests the speaker acknowledges a weakness or limitation inherent in the situation.",
    formation:
      "N + の + こととて (子供[こども]のこととて)\nV辞書形 + こととて (初[はじ]めてのこととて)\nI-adj + こととて (忙[いそが]しいこととて)",
    examples: [
      { jp: "初[はじ]めての経験[けいけん]のこととて、不慣[ふな]れな点[てん]も多々[たた]あると存[ぞん]じます。", en: "Since this is a first experience, there are many points where I am unused to it." },
      { jp: "子供[こども]のこととて、少[すこ]しのことで泣[な]いてしまった。", en: "Because he is a child, he cried over a small thing." }
    ],
    notes:
      "硬い言い訳がましい表現。「〜だから」と同義だが、許しを求めたり事情を察してもらいたいニュアンスがある。手紙文でよく見られる。",
    related: ["gn2-159"]
  },

  {
    id: "gn2-161",
    point: "〜につき",
    reading: "〜につき",
    level: "N2",
    category: "Cause/Reason",
    meaning: "Due to; because of (formal written notices)",
    structure: "N + につき",
    explanation:
      "A formal written expression used in notices, signs, and official announcements to state a cause: 'due to..., because of...'. Commonly seen on store closing signs, suspension notices, and the like.",
    formation: "N + につき (工事[こうじ]につき / 店内[てんない]改装[かいそう]につき)",
    examples: [
      { jp: "店内[てんない]改装[かいそう]につき、月末[げつまつ]まで休業[きゅうぎょう]いたします。", en: "Due to interior renovation, we will be closed until the end of the month." },
      { jp: "台風[たいふう]接近[せっきん]につき、本日[ほんじつ]の試合[しあい]は中止[ちゅうし]となりました。", en: "Due to the approaching typhoon, today's match has been cancelled." }
    ],
    notes:
      "お知らせ・掲示文で使われる硬い理由表現。「〜のため」と同じ。後件は休業・中止・変更など公的なアナウンスが来る。",
    related: ["gn2-157"]
  },

  // ────────────────────────────────────────────────────────────────
  // TIME / SEQUENCE — 時・順序
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-162",
    point: "〜ながら (同時進行)",
    reading: "〜ながら",
    level: "N2",
    category: "Time/Sequence",
    meaning: "While doing; doing X at the same time as Y",
    structure: "V-ます形(幹) + ながら / N + ながら / I-adj + ながら",
    explanation:
      "Indicates two actions performed simultaneously: 'while doing X, also do Y'. The subject of both clauses is the same. Distinct from 〜ながら(も) (chunk A), which means 'although'.",
    formation:
      "V-ます幹 + ながら (食[た]べながら / 歩[ある]きながら)\nN + ながら (昔[むか]しながら / いつもながら)\nI-adj + ながら (悪[わる]いながら)",
    examples: [
      { jp: "テレビを見[み]ながらご飯[はん]を食[た]べるのはよくないと言[い]われている。", en: "It is said that eating while watching television is not good." },
      { jp: "彼[かれ]はいつも音楽[おんがく]を聞[き]きながら勉強[べんきょう]している。", en: "He always studies while listening to music." }
    ],
    notes:
      "同時進行を表す基本表現。主語は同一で、動詞のます形(幹)に接続。「〜ながら(も)」(A)は逆接で別表現。",
    related: ["gn2-163", "gn2-164"]
  },

  {
    id: "gn2-163",
    point: "〜に伴って",
    reading: "〜にともなって",
    level: "N2",
    category: "Time/Sequence",
    meaning: "As; along with; in proportion to (as X changes, Y also changes)",
    structure: "V辞書形 + に伴って / N + に伴って",
    explanation:
      "Indicates that as one change occurs, another change occurs in tandem or proportionally. Common in news and formal writing for describing correlated changes.",
    formation:
      "N + に伴って (時間[じかん]の経過[けいか]に伴って)\nV辞書形 + に伴って (人口[じんこう]が増[ふ]えるに伴って)",
    examples: [
      { jp: "高齢化[こうれいか]の進行[しんこう]に伴[ともな]って、医療[いりょう]費[ひ]の増加[ぞうか]が問題[もんだい]になっている。", en: "As the aging of the population progresses, the increase in medical costs has become a problem." },
      { jp: "都市[とし]の発展[はってん]に伴[ともな]って、周辺[しゅうへん]の自然[しぜん]が失[うしな]われてきた。", en: "As the city developed, the surrounding nature has been lost." }
    ],
    notes:
      "変化が並行して起きることを示す硬い表現。「〜とともに」(D)と類義。「Aに伴ってB」でAの変化に応じてBも変化する。",
    related: ["gn2-164", "gn2-165"]
  },

  {
    id: "gn2-164",
    point: "〜とともに",
    reading: "〜とともに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "Together with; as X happens/changes, Y also happens/changes",
    structure: "V辞書形 + とともに / N + とともに",
    explanation:
      "Indicates two things happening together, or one change occurring in parallel with another. Also used to mean 'along with' (someone/something accompanying) or 'as... at the same time'.",
    formation:
      "N + とともに (時代[じだい]とともに / 家族[かぞく]とともに)\nV辞書形 + とともに (年[とし]をとるとともに)",
    examples: [
      { jp: "時代[じだい]とともに、人々[ひとびと]の価値観[かちかん]も変[か]わってきた。", en: "Along with the times, people's values have also changed." },
      { jp: "彼[かれ]は家族[かぞく]とともに新[あたら]しい国[くに]へ移住[いじゅう]した。", en: "He emigrated to a new country together with his family." }
    ],
    notes:
      "並行・同時・付随を表す。「〜と一緒[いっしょ]に」の硬い言い方でもある。変化以外にも単に「〜と一緒に」も表す。",
    related: ["gn2-163", "gn2-165"]
  },

  {
    id: "gn2-165",
    point: "〜と同時に",
    reading: "〜とどうじに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "At the same time as; simultaneously with",
    structure: "V辞書形 + と同時に / V-た形 + と同時に / N + と同時に",
    explanation:
      "Indicates that two actions or events occur at exactly the same time, or that one thing accompanies another as a simultaneous effect. Emphasizes precise simultaneity.",
    formation:
      "V辞書形 + と同時に (終[お]わると同時に)\nV-た形 + と同時に (着[つ]いたと同時に)\nN + と同時に (開始[かいし]と同時に)",
    examples: [
      { jp: "彼[かれ]は部屋[へや]に入[はい]ると同時[どうじ]に、大[おお]きな声[こえ]で挨拶[あいさつ]した。", en: "As soon as he entered the room, he greeted in a loud voice." },
      { jp: "この薬[くすり]は熱[ねつ]を下[さ]げると同時[どうじ]に、痛[いた]みも和[やわ]らげる。", en: "This medicine lowers fever and at the same time eases pain." }
    ],
    notes:
      "完全な同時性を強調。「〜たとたん(に)」(A・B)と近いが、同時性そのものを問う点が異なる。",
    related: ["gn2-163", "gn2-164"]
  },

  {
    id: "gn2-166",
    point: "〜ついでに",
    reading: "〜ついでに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "While at it; taking the opportunity to; on the occasion of",
    structure: "V辞書形 + ついでに / V-た形 + ついでに / N + の + ついでに",
    explanation:
      "Indicates doing something in passing while doing the main action: 'while I'm at it, I'll also...'. The subsidiary action is not the main purpose but is conveniently done along the way.",
    formation:
      "V辞書形 + ついでに (買[か]い物[もの]に行[い]くついでに)\nV-た形 + ついでに (郵便局[ゆうびんきょく]に行[い]ったついでに)\nN + の + ついでに (出張[しゅっちょう]のついでに)",
    examples: [
      { jp: "スーパーへ買[か]い物[もの]に行[い]くついでに、本屋[ほんや]に寄[よ]って雑誌[ざっし]を買[か]った。", en: "While going to the supermarket to shop, I dropped by a bookstore and bought a magazine." },
      { jp: "出張[しゅっちょう]のついでに、昔[むか]しの友人[ゆうじん]に会[あ]いに行[い]った。", en: "While on a business trip, I went to see an old friend." }
    ],
    notes:
      "主目的のついでに別の用事を済[す]ませることを示す日常的な表現。類義: 〜かたがた、〜がてら(やや硬い)。",
    related: ["gn2-162"]
  },

  {
    id: "gn2-167",
    point: "〜上で",
    reading: "〜うえで",
    level: "N2",
    category: "Time/Sequence",
    meaning: "After doing X (then judge/decide); based on doing X",
    structure: "V-た形 + 上で / V辞書形 + 上で / N + の + 上で",
    explanation:
      "When following the た-form, indicates that an action is completed first before a decision or next step: 'after doing X, [then]...'. When following the dictionary form, it means 'in the process of doing X' or 'for the purpose of X'.",
    formation:
      "V-た形 + 上で (考[かんが]えた上で / 調[しら]べた上で)\nV辞書形 + 上で (買[か]う上で / 考[かんが]える上で)\nN + の + 上で (契約[けいやく]の上で)",
    examples: [
      { jp: "詳[くわ]しく話[はなし]を聞[き]いた上[うえ]で、対応[たいおう]を決[き]めたいと思[おも]います。", en: "After hearing the details, I would like to decide how to respond." },
      { jp: "この仕事[しごと]を引[ひ]き受[う]けるかどうか、家族[かぞく]と相談[そうだん]した上[うえ]で返事[へんじ]します。", en: "I will reply after consulting with my family about whether to take on this work." }
    ],
    notes:
      "「〜てから」と類義。た形接続は「〜した後[のち]に」、辞書形接続は「〜する際[さい]に / 過程[かてい]で」となる。「〜上は」(A)・「〜上」(D)とは別表現。",
    related: ["gn2-168", "gn2-169", "gn2-200"]
  },

  {
    id: "gn2-168",
    point: "〜際 / 〜際に",
    reading: "〜さい / 〜さいに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "On the occasion of; when; at the time of",
    structure: "V辞書形 + 際(に) / V-た形 + 際(に) / N + の + 際(に)",
    explanation:
      "A formal expression indicating a specific occasion or situation in which something happens: 'on the occasion of..., when...'. Common in business and written contexts; somewhat more formal than 〜時.",
    formation:
      "V辞書形 + 際に (お問[と]い合[あ]わせの際に)\nV-た形 + 際に (お越[こ]しの際に)\nN + の + 際に (退院[たいいん]の際に)",
    examples: [
      { jp: "お問[と]い合[あ]わせの際[さい]は、受付番号[うけつけばんごう]をお控[ひか]えください。", en: "When making an inquiry, please note down your reception number." },
      { jp: "非常[ひじょう]の際[さい]には、エレベーターを使[つか]わず階段[かいだん]をご利用[りよう]ください。", en: "In case of emergency, please use the stairs instead of the elevator." }
    ],
    notes:
      "「〜時」の硬い表現。「際」単独は名詞「場合・機会」の意。アナウンス・案内文・マニュアルで好まれる。",
    related: ["gn2-167", "gn2-169", "gn2-170"]
  },

  {
    id: "gn2-169",
    point: "〜場合 / 〜場合に",
    reading: "〜ばあい / 〜ばあいに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "In the case of; when; if",
    structure: "V普通形 + 場合(に) / N + の + 場合(に) / Na-adj + な + 場合(に) / I-adj + 場合(に)",
    explanation:
      "Used to specify a particular situation or condition and what happens in that case: 'in the case of..., when...'. Often followed by instructions, warnings, or alternative actions.",
    formation:
      "V辞書形 + 場合 (雨[あめ]が降[ふ]る場合)\nV-た形 + 場合 (失敗[しっぱい]した場合)\nN + の + 場合 (地震[じしん]の場合)\nNa-adj + な + 場合 (必要[ひつよう]な場合)",
    examples: [
      { jp: "地震[じしん]が起[お]きた場合[ばあい]には、机[つくえ]の下[した]に隠[かく]れてください。", en: "In the event of an earthquake, please hide under a desk." },
      { jp: "商品[しょうひん]に欠陥[けっかん]があった場合[ばあい]は、無料[むりょう]で交換[こうかん]いたします。", en: "In case the product is defective, we will replace it free of charge." }
    ],
    notes:
      "「〜とき」より客観的で、条件・場合分けを示す。「〜場合には」の形も多くなされる。",
    related: ["gn2-167", "gn2-168", "gn2-170"]
  },

  {
    id: "gn2-170",
    point: "〜とき / 〜時に",
    reading: "〜とき / 〜ときに",
    level: "N2",
    category: "Time/Sequence",
    meaning: "When; at the time of",
    structure: "V普通形 + とき(に) / N + の + とき(に) / Na-adj + な + とき(に) / I-adj + とき(に)",
    explanation:
      "The basic expression for 'when' or 'at the time of', indicating temporal coincidence. The に is optional and slightly emphasizes a specific point in time. Used across all registers.",
    formation:
      "V辞書形 + とき (食[た]べるとき)\nV-た形 + とき (食[た]べたとき)\nN + の + とき (学生[がくせい]のとき)\nI-adj + とき (寒[さむ]いとき)",
    examples: [
      { jp: "日本[にほん]に来[き]たとき、最初[さいしょ]は言葉[ことば]の壁[かべ]に困[こま]った。", en: "When I came to Japan, I was at first troubled by the language barrier." },
      { jp: "子供[こども]のときに、よく祖母[そぼ]の家[いえ]へ遊[あそ]びに行[い]ったものだ。", en: "When I was a child, I often used to go to my grandmother's house to play." }
    ],
    notes:
      "基本的な時間表現。「〜時に」はやや硬く、特定の時点を指す。「〜際」(D)・「〜場合」(D)は更に硬い。",
    related: ["gn2-168", "gn2-169"]
  },

  // ────────────────────────────────────────────────────────────────
  // CONTRAST — 対比・逆接
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-171",
    point: "〜にかかわらず",
    reading: "〜にかかわらず",
    level: "N2",
    category: "Contrast",
    meaning: "Regardless of; irrespective of; no matter...",
    structure: "N + にかかわらず / V辞書形 + にかかわらず / [反義ペア] + にかかわらず",
    explanation:
      "Indicates that something applies without regard to a particular factor: 'regardless of, no matter whether or not...'. Often used with opposing pairs (e.g., 有無・男女・昼夜) to state that the outcome is the same.",
    formation:
      "N + にかかわらず (天候[てんこう]にかかわらず)\n反義ペア + にかかわらず (男女[だんじょ]にかかわらず / 有無[うむ]にかかわらず)\nV辞書形 + にかかわらず (賛成[さんせい]するかにかかわらず)",
    examples: [
      { jp: "天候[てんこう]にかかわらず、試合[しあい]は予定[よてい]どおり行[おこな]われます。", en: "Regardless of the weather, the match will be held as scheduled." },
      { jp: "年齢[ねんれい]や性別[せいべつ]にかかわらず、誰[だれ]でも応募[おうぼ]できる。", en: "Anyone can apply, regardless of age or gender." }
    ],
    notes:
      "「〜に関係[かんけい]なく」と同義。条件・状況に関わらず後件が成り立つことを示す。対義語ペアと一緒に使われることが多い。「〜にもかかわらず」(A)とは別表現。",
    related: ["gn2-172"]
  },

  {
    id: "gn2-172",
    point: "〜をよそに",
    reading: "〜をよそに",
    level: "N2",
    category: "Contrast",
    meaning: "Ignoring; disregarding; despite (someone's feelings or wishes)",
    structure: "N + をよそに",
    explanation:
      "Indicates that something is done without regard to, or in defiance of, someone's feelings, concerns, or expectations: 'ignoring..., disregarding...'. Has a critical nuance.",
    formation: "N + をよそに (親[おや]の心配[しんぱい]をよそに / 周囲[しゅうい]の批判[ひはん]をよそに)",
    examples: [
      { jp: "親[おや]の心配[しんぱい]をよそに、彼[かれ]は一人[ひとり]で世界[せかい]旅行[りょこう]に出[で]かけた。", en: "Ignoring his parents' worries, he set off alone on a trip around the world." },
      { jp: "周囲[しゅうい]の反対[はんたい]をよそに、彼女[かのじょ]は自分[じぶん]の夢[ゆめ]を追[お]い続[つづ]けた。", en: "Disregarding the opposition around her, she continued to pursue her dream." }
    ],
    notes:
      "「〜を無視[むし]して」「〜にもかかわらず」(A)に近いが、感情・期待を顧[かえり]みない非難のニュアンスが強い。",
    related: ["gn2-171"]
  },

  {
    id: "gn2-173",
    point: "〜はともかく(として)",
    reading: "〜はともかく(として)",
    level: "N2",
    category: "Contrast",
    meaning: "Setting aside; leaving aside; regardless of",
    structure: "N + はともかく(として)",
    explanation:
      "Used to temporarily put aside a particular point in order to focus on another: 'setting X aside for now, ...'. Implies that X may be important but is not the immediate concern.",
    formation:
      "N + はともかく (見[み]かけはともかく)\nN + はともかくとして (値段[ねだん]はともかくとして)",
    examples: [
      { jp: "味[あじ]はともかく、見[み]た目[め]はとてもいい。", en: "Setting aside the taste, it looks very good." },
      { jp: "値段[ねだん]はともかくとして、品質[ひんしつ]は保証[ほしょう]できる。", en: "Leaving aside the price, I can guarantee the quality." }
    ],
    notes:
      "「〜は別[べつ]として」に同じ。まずある事柄[ことがら]を保留し、別の観点を優先する。",
    related: ["gn2-174", "gn2-175"]
  },

  {
    id: "gn2-174",
    point: "〜はさておき",
    reading: "〜はさておき",
    level: "N2",
    category: "Contrast",
    meaning: "Setting aside; putting aside for now",
    structure: "N + はさておき",
    explanation:
      "Used to set a topic aside in order to move on to the main point: 'leaving X aside, ...'. Slightly more formal and decisive than 〜はともかく(として), with a sense of 'let's not dwell on that and move on'.",
    formation: "N + はさておき (冗談[じょうだん]はさておき / 問題[もんだい]はさておき)",
    examples: [
      { jp: "冗談[じょうだん]はさておき、本題[ほんだい]に入[はい]ろう。", en: "Jokes aside, let's get to the main topic." },
      { jp: "難[むずか]しい話[はなし]はさておき、まずは乾杯[かんぱい]しましょう。", en: "Setting aside the difficult talk, let's first have a toast." }
    ],
    notes:
      "「〜はともかく」(D)より硬い。本題に進む前の保留として使われることが多い。",
    related: ["gn2-173"]
  },

  {
    id: "gn2-175",
    point: "〜もさることながら",
    reading: "〜もさることながら",
    level: "N2",
    category: "Contrast",
    meaning: "...is also significant, but (something else is more so)",
    structure: "N + もさることながら",
    explanation:
      "Acknowledges one thing as important while emphasizing that another is even more so: 'X is also significant, but Y is even more...'. Used to contrast two related items, with the latter receiving more emphasis.",
    formation: "N + もさることながら (才能[さいのう]もさることながら / 見[み]かけもさることながら)",
    examples: [
      { jp: "彼[かれ]は才能[さいのう]もさることながら、努力[どりょく]家[か]でもある。", en: "He has talent, to be sure, but above all he is a hard worker." },
      { jp: "この料理[りょうり]は味[あじ]もさることながら、見[み]た目[め]も素晴[すば]らしい。", en: "This dish has great taste, to be sure, but its appearance is also wonderful." }
    ],
    notes:
      "「〜も確[たし]かにそうだが、それ以上[いじょう]に〜」という譲歩強調構文。「〜はもちろん〜も」(類義)とは強調の方向が逆。",
    related: ["gn2-173", "gn2-174"]
  },

  // ────────────────────────────────────────────────────────────────
  // ASSUMPTION — 推量・推測・可能性
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-176",
    point: "〜得る / 〜得ない",
    reading: "〜うる / 〜えない",
    level: "N2",
    category: "Assumption",
    meaning: "Can happen; is possible / cannot happen; is impossible",
    structure: "V-ます形(幹) + 得る / V-ます形(幹) + 得ない",
    explanation:
      "A formal expression indicating possibility or impossibility: 'can occur, is possible' / 'cannot occur, is impossible'. Often used in written, journalistic, or analytical contexts to evaluate likelihood.",
    formation:
      "V-ます幹 + 得る (起[お]こり得る / あり得る)\nV-ます幹 + 得ない (起[お]こり得ない / あり得ない)",
    examples: [
      { jp: "こんな事故[じこ]は起[お]こり得[え]ないと誰[だれ]も思[おも]っていた。", en: "Everyone thought that such an accident could not happen." },
      { jp: "長期[ちょうき]の不景気[ふけいき]は十分[じゅうぶん]にあり得[う]ることだ。", en: "A long-term recession is fully possible." }
    ],
    notes:
      "読みは辞書形で「うる」、活用形では「える」と読む。書き言葉的で可能性を客観的に評価する。類義: 〜可能性がある(D)。",
    related: ["gn2-177", "gn2-178"]
  },

  {
    id: "gn2-177",
    point: "〜可能性がある",
    reading: "〜かのうせいがある",
    level: "N2",
    category: "Assumption",
    meaning: "There is a possibility that; might (happen)",
    structure: "V普通形 + 可能性がある / N + の + 可能性がある / Na-adj + な + 可能性がある",
    explanation:
      "States that something is possible, often with attention to risk or future outcome: 'there is a possibility that...'. Commonly used in news, analysis, and warnings.",
    formation:
      "V辞書形 + 可能性がある (失敗[しっぱい]する可能性がある)\nV-た形 + 可能性がある (故障[こしょう]していた可能性がある)\nN + の + 可能性がある (地震[じしん]の可能性がある)",
    examples: [
      { jp: "明日[あした]は午後[ごご]から雨[あめ]が降[ふ]る可能性[かのうせい]がある。", en: "There is a possibility that it will rain from tomorrow afternoon." },
      { jp: "この薬[くすり]には副作用[ふくさよう]が出[で]る可能性[かのうせい]がある。", en: "There is a possibility that this medicine may cause side effects." }
    ],
    notes:
      "「〜かもしれない」の硬い表現。客観的可能性を示し、リスク・注意を伝える文脈で好まれる。類義: 〜おそれがある(A)。",
    related: ["gn2-176", "gn2-178"]
  },

  {
    id: "gn2-178",
    point: "〜そうにない / 〜そうもない",
    reading: "〜そうにない / 〜そうもない",
    level: "N2",
    category: "Assumption",
    meaning: "Unlikely to; does not look like it will",
    structure: "V-ます形(幹) + そうにない / V-ます形(幹) + そうもない",
    explanation:
      "Indicates a strong judgment that something is unlikely to happen: 'doesn't look like it will..., is unlikely to...'. そうもない is slightly stronger than そうにない.",
    formation:
      "V-ます幹 + そうにない (降[ふ]りそうにない / 寒[さむ]くなりそうにない)\nV-ます幹 + そうもない (間[ま]に合[あ]いそうもない)",
    examples: [
      { jp: "空[そら]が晴[は]れているので、午後[ごご]から雨[あめ]は降[ふ]りそうにない。", en: "The sky is clear, so it does not look like it will rain in the afternoon." },
      { jp: "準備[じゅんび]が全然[ぜんぜん]できていないから、明日[あした]の試合[しあい]に勝[か]てそうもない。", en: "Since I am not prepared at all, it seems unlikely that I will win tomorrow's match." }
    ],
    notes:
      "「〜そうもない」の方が「〜そうにない」より否定的判断が強い。様態[ようたい]の「〜そうだ」の否定形で可能性の低さを表す。",
    related: ["gn2-176", "gn2-177"]
  },

  {
    id: "gn2-179",
    point: "〜まい",
    reading: "〜まい",
    level: "N2",
    category: "Assumption",
    meaning: "Will not; intend not to; probably will not",
    structure: "V辞書形 + まい / V-ます形(幹) + まい (vowel-stem verbs) / N + ではあるまい",
    explanation:
      "A negative volitional or conjecture form meaning 'will not do X' or 'probably will not do X'. Used to express strong determination not to do something, or a guess that something will not happen.",
    formation:
      "V辞書形 + まい (行[い]くまい / 食[た]べまい)\nV-ます幹 + まい (見[み]まい / 来[こ]まい)\nN + ではあるまい (学生[がくせい]ではあるまい)",
    examples: [
      { jp: "二度[にど]と同[おな]じ過[あやま]ちを繰[く]り返[かえ]すまいと誓[ちか]った。", en: "I vowed never to repeat the same mistake again." },
      { jp: "彼[かれ]の言[い]うことを信用[しんよう]するまい。", en: "I will not trust what he says." }
    ],
    notes:
      "否定意志・否定推量を表す硬い表現。古風で文語的。「〜ないだろう」の推量にも使う。",
    related: ["gn2-176", "gn2-178"]
  },

  {
    id: "gn2-180",
    point: "〜にかたくない",
    reading: "〜にかたくない",
    level: "N2",
    category: "Assumption",
    meaning: "Not hard to [imagine/guess]; it is not difficult to...",
    structure: "V辞書形 + にかたくない / N + にかたくない",
    explanation:
      "Used to state that something is easy to imagine or understand: 'it is not hard to...'. Most commonly appears in fixed expressions like 想像にかたくない and 理解にかたくない.",
    formation:
      "V辞書形 + にかたくない (想像[そうぞう]するにかたくない)\nN + にかたくない (理解[りかい]にかたくない / 想像[そうぞう]にかたくない)",
    examples: [
      { jp: "彼[かれ]がどれほど悲[かな]しんだか、想像[そうぞう]にかたくない。", en: "It is not hard to imagine how sad he was." },
      { jp: "彼女[かのじょ]が怒[おこ]った理由[りゆう]は理解[りかい]にかたくない。", en: "It is not difficult to understand why she got angry." }
    ],
    notes:
      "「〜するのは難[むずか]しくない」の硬い表現。「想像にかたくない」「理解にかたくない」の形で使われることがほとんど。",
    related: ["gn2-176"]
  },

  // ────────────────────────────────────────────────────────────────
  // PASSIVE / CAUSATIVE — 受身・使役
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-181",
    point: "〜(さ)せてもらう",
    reading: "〜(さ)せてもらう",
    level: "N2",
    category: "Passive/Causative",
    meaning: "Have someone let me do; receive permission to do",
    structure: "V-(さ)せて + もらう / V-(さ)せて + いただく (more humble)",
    explanation:
      "A causative + receiving pattern indicating that one receives permission or cooperation to do something: 'have someone let me do X, be allowed to do X'. Often used to express doing something on one's own initiative with implicit permission.",
    formation:
      "V-させ + て + もらう (やらせてもらう / 食[た]べさせてもらう)\nV-せ + て + もらう (来[こ]させてもらう)",
    examples: [
      { jp: "今日[きょう]は早[はや]く帰[かえ]らせてもらいます。", en: "I will be allowed to go home early today." },
      { jp: "私[わたし]にこの仕事[しごと]をやらせてもらえませんか。", en: "Won't you let me do this work?" }
    ],
    notes:
      "使役受給表現で、「人[ひと]に〜してもらう」に使役が入った形。謙譲[けんじょ]の「〜(さ)せていただく」(A・B)はより改まった言い方。",
    related: ["gn2-35", "gn2-79"]
  },

  // ────────────────────────────────────────────────────────────────
  // HONORIFIC — 敬語
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-182",
    point: "〜でございます",
    reading: "〜でございます",
    level: "N2",
    category: "Honorific",
    meaning: "Humble copula; formal 'is/are/am' (polite/humble)",
    structure: "N + でございます / Na-adj + でございます / ご/お + N + でございます",
    explanation:
      "A humble equivalent of です, used by the speaker to refer politely to their own side or to address customers/listeners respectfully. Common in customer service, formal letters, and announcements.",
    formation:
      "N + でございます (私[わたし]でございます / 山田[やまだ]でございます)\nNa-adj + でございます (静[しず]かでございます)\nご/お + N + でございます (ご案内[あんない]でございます)",
    examples: [
      { jp: "はい、田中[たなか]でございます。", en: "Yes, this is Tanaka speaking." },
      { jp: "こちらが新[あたら]しいメニューでございます。", en: "Here is the new menu." }
    ],
    notes:
      "「です」の謙譲[けんじょ]表現で、接客[せっきゃく]・アナウンス・手紙で好まれる。丁寧[ていねい]語[ご]の「です」と謙譲語の両方[りょうほう]の性質[せいしつ]を持[も]つ。",
    related: ["gn2-183"]
  },

  {
    id: "gn2-183",
    point: "〜ております",
    reading: "〜ております",
    level: "N2",
    category: "Honorific",
    meaning: "Humble -te iru; ongoing state or action (humble)",
    structure: "V-て形 + おります",
    explanation:
      "A humble equivalent of 〜ている, used to refer to one's own ongoing action or state in a polite, humble manner toward the listener. Common in business and customer-facing speech.",
    formation:
      "V-て + おります (住[す]んでおります / 待[ま]っております / 存[ぞん]じております)",
    examples: [
      { jp: "私[わたし]は東京[とうきょう]に住[す]んでおります。", en: "I live in Tokyo." },
      { jp: "お客様[きゃくさま]をお待[ま]ちしております。", en: "We are waiting for you (the customer)." }
    ],
    notes:
      "「〜ている」の謙譲[けんじょ]表現。「〜ています」より一段[いちだん]謙虚[けんきょ]で、ビジネス・接客[せっきゃく]で好まれる。",
    related: ["gn2-182"]
  },

  // ────────────────────────────────────────────────────────────────
  // PARTICLES — 助詞・複合助詞・接尾辞
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-184",
    point: "〜気味",
    reading: "〜ぎみ",
    level: "N2",
    category: "Particles",
    meaning: "Slightly; -ish; showing signs of; a touch of",
    structure: "V-ます形(幹) + 気味 / N + 気味",
    explanation:
      "A suffix indicating a slight degree or tendency of something, often an undesirable condition: 'slightly..., a bit -ish, showing signs of...'. Used when the speaker perceives a mild symptom or tendency.",
    formation:
      "V-ます幹 + 気味 (疲[つか]れ気味 / 太[ふと]り気味)\nN + 気味 (風邪[かぜ]気味 / 緊張[きんちょう]気味)",
    examples: [
      { jp: "最近[さいきん]少[すこ]し疲[つか]れ気味[ぎみ]なので、早[はや]く寝[ね]ようと思[おも]っている。", en: "I have been feeling a bit tired lately, so I'm thinking of going to bed early." },
      { jp: "彼[かれ]は少[すこ]し太[ふと]り気味[ぎみ]だ。", en: "He is a bit on the chubby side." }
    ],
    notes:
      "マイナス傾向を微[かす]かに示す接尾辞[せつびじ]。「少し〜の傾向[けいこう]がある」という程度[ていど]の軽[かる]さが特徴[とくちょう]。「〜がち」(D)は頻度[ひんど]を示す。",
    related: ["gn2-185", "gn2-188"]
  },

  {
    id: "gn2-185",
    point: "〜がち",
    reading: "〜がち",
    level: "N2",
    category: "Particles",
    meaning: "Tend to; apt to; often (with negative connotation)",
    structure: "V-ます形(幹) + がち / N + がち",
    explanation:
      "A suffix indicating a tendency or frequency of occurrence, usually of something undesirable: 'tend to..., often..., are prone to...'. Commonly used for bad habits, negative states, or recurring mistakes.",
    formation:
      "V-ます幹 + がち (忘[わす]れがち / 遅[おく]れがち)\nN + がち (病気[びょうき]がち / 遅刻[ちこく]がち)",
    examples: [
      { jp: "彼[かれ]は授業[じゅぎょう]を休[やす]みがちだ。", en: "He tends to be absent from class." },
      { jp: "冬[ふゆ]は風邪[かぜ]をひきがちなので、気[き]をつけてください。", en: "In winter one is prone to catching colds, so please be careful." }
    ],
    notes:
      "マイナス傾向を頻発[ひんぱつ]として示す接尾辞[せつびじ]。「〜気味」(D)が程度の軽さを示すのに対し、「〜がち」は頻度[ひんど]を示す。",
    related: ["gn2-184", "gn2-188"]
  },

  {
    id: "gn2-186",
    point: "〜向き",
    reading: "〜むき",
    level: "N2",
    category: "Particles",
    meaning: "Suitable for; oriented toward; meant for",
    structure: "N + 向き",
    explanation:
      "A suffix indicating that something is suitable for or directed toward a particular group, type, or purpose: 'suitable for..., meant for..., oriented toward...'.",
    formation:
      "N + 向き (初心者[しょしんしゃ]向き / 若者[わかもの]向き / 上級者[じょうきゅうしゃ]向き)",
    examples: [
      { jp: "この本[ほん]は初心者[しょしんしゃ]向[む]きに書[か]かれている。", en: "This book is written for beginners." },
      { jp: "この料理[りょうり]は子供[こども]向[む]きの味付[あじつ]けだ。", en: "This dish is seasoned to suit children." }
    ],
    notes:
      "対象[たいしょう]・目的[もくてき]に適[てき]していることを示す接尾辞[せつびじ]。類義: 〜向け(D)(対象を絞[しば]った意図[いと])。",
    related: ["gn2-187"]
  },

  {
    id: "gn2-187",
    point: "〜向け",
    reading: "〜むけ",
    level: "N2",
    category: "Particles",
    meaning: "Intended for; aimed at; targeted at",
    structure: "N + 向け",
    explanation:
      "A suffix indicating that something has been intentionally designed, produced, or directed for a particular audience or purpose: 'intended for..., aimed at...'. Slightly stronger than 〜向き, implying intent in production.",
    formation:
      "N + 向け (外国人[がいこくじん]向け / 海外[かいがい]向け / 高齢者[こうれいしゃ]向け)",
    examples: [
      { jp: "この製品[せいひん]は海外[かいがい]向[む]けに開発[かいはつ]された。", en: "This product was developed for overseas markets." },
      { jp: "子供[こども]向[む]けのアニメだけど、大人[おとな]も楽しめる。", en: "It is an anime for children, but adults can enjoy it too." }
    ],
    notes:
      "意図的[いとてき]に対象を絞[しば]って作[つく]られたことを示す接尾辞[せつびじ]。「〜向き」(D)は適[てき]しているかどうか、「〜向け」は意図[いと]の有無[うむ]が違う。",
    related: ["gn2-186"]
  },

  {
    id: "gn2-188",
    point: "〜っぱなし",
    reading: "〜っぱなし",
    level: "N2",
    category: "Particles",
    meaning: "Leaving something in a state; doing continuously (often with mild criticism)",
    structure: "V-ます形(幹) + っぱなし",
    explanation:
      "A suffix indicating either (1) leaving something in an unfinished or neglected state, or (2) an action continuing non-stop for a long time. Often carries a nuance of complaint or criticism.",
    formation:
      "V-ます幹 + っぱなし (開[あ]けっぱなし / 立[た]ちっぱなし)\nV-て + っぱなし (開[あ]けてっぱなし - colloquial variant)",
    examples: [
      { jp: "弟[おとうと]はテレビを消[け]さずにつけっぱなしで出[で]かけてしまった。", en: "My younger brother left the television on without turning it off and went out." },
      { jp: "昨日[きのう]は一日中[いちにちじゅう]立[た]ちっぱなしで足[あし]が疲[つか]れた。", en: "Yesterday I stood all day long and my legs got tired." }
    ],
    notes:
      "未完[みかん]の状態[じょうたい]を放置[ほうち]するか、動作[どうさ]が続[つづ]いていることを示す接尾辞[せつびじ]。叱責[しっせき]・不満[ふまん]のニュアンスを含[ふく]むことが多[おお]い。",
    related: ["gn2-184", "gn2-185"]
  },

  // ────────────────────────────────────────────────────────────────
  // CONJUNCTIONS — 接続詞
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-189",
    point: "つまり",
    reading: "つまり",
    level: "N2",
    category: "Conjunctions",
    meaning: "In other words; that is to say; ultimately",
    structure: "(sentence-initial) つまり、...",
    explanation:
      "A conjunction used to restate, summarize, or draw a conclusion from what was just said: 'in other words, that is to say, ultimately'. More conversational than すなわち.",
    formation:
      "つまり + 文 (つまり、こういうことだ / つまり、〜ということだ)",
    examples: [
      { jp: "彼[かれ]は一言[ひとこと]も言[い]わなかった。つまり、反対[はんたい]だという意味[いみ]だ。", en: "He did not say a word. In other words, that means he is opposed." },
      { jp: "つまり、私[わたし]の計画[けいかく]は却下[きゃっか]されたということですか。", en: "In other words, does that mean my plan has been rejected?" }
    ],
    notes:
      "言[い]い換[か]え・結論[けつろん]を導く接続詞。「すなわち」(A・B)の口頭[こうとう]的表現で、話し言葉で好まれる。",
    related: []
  },

  {
    id: "gn2-190",
    point: "いずれにしても / いずれにせよ",
    reading: "いずれにしても / いずれにせよ",
    level: "N2",
    category: "Conjunctions",
    meaning: "In any case; either way; whatever the case",
    structure: "(sentence-initial) いずれにしても / いずれにせよ、...",
    explanation:
      "A conjunction meaning 'in any case, either way, no matter what'. Used to indicate that the conclusion holds regardless of which alternative is chosen.",
    formation:
      "いずれにしても + 文 (いずれにしても、明日[あした]行[い]きます)\nいずれにせよ + 文 (いずれにせよ、結論[けつろん]は同[おな]じだ)",
    examples: [
      { jp: "いずれにしても、明日[あした]の会議[かいぎ]には出席[しゅっせき]しなければならない。", en: "In any case, I must attend tomorrow's meeting." },
      { jp: "賛成[さんせい]するか反対[はんたい]するか、いずれにせよ理由[りゆう]を説明[せつめい]してほしい。", en: "Whether you agree or oppose, either way I want you to explain your reasons." }
    ],
    notes:
      "「どちらにしても」と同義の硬い表現。「いずれにせよ」は更に改まった言い方。",
    related: ["gn2-191"]
  },

  {
    id: "gn2-191",
    point: "それにしても",
    reading: "それにしても",
    level: "N2",
    category: "Conjunctions",
    meaning: "Even so; be that as it may; nevertheless",
    structure: "(sentence-initial) それにしても、...",
    explanation:
      "A conjunction used to acknowledge the previous point while introducing a new, sometimes contrasting, thought: 'even so, be that as it may, that aside'. Often expresses mild surprise or a shift in perspective.",
    formation:
      "それにしても + 文 (それにしても、すごいな)",
    examples: [
      { jp: "天気[てんき]予報[よほう]では雨[あめ]と言[い]っていたが、それにしても降[ふ]りすぎだ。", en: "The forecast said rain, but even so, this is too much." },
      { jp: "彼[かれ]はよく働[はたら]く。それにしても、最近[さいきん]少[すこ]し疲[つか]れ気味[ぎみ]のようだ。", en: "He works hard. Even so, he seems a bit tired lately." }
    ],
    notes:
      "前文[ぜんぶん]を受[う]けつつ新[あたら]しい感想[かんそう]や意外[いがい]性[せい]を示す接続詞。「〜とはいえ」(A)に近いが、より口頭[こうとう]的[てき]。",
    related: ["gn2-190"]
  },

  // ────────────────────────────────────────────────────────────────
  // MODIFIERS — 修飾・複合助詞
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-192",
    point: "〜に応じて / 〜に応じた + N",
    reading: "〜におうじて / 〜におうじた",
    level: "N2",
    category: "Modifiers",
    meaning: "In accordance with; in response to; depending on",
    structure: "N + に応じて / N + に応じた + N",
    explanation:
      "Indicates that an action or state changes in proportion or response to something: 'in accordance with..., in response to..., depending on...'. Common in formal, business, and policy contexts.",
    formation:
      "N + に応じて (状況[じょうきょう]に応じて / 収入[しゅうにゅう]に応じて)\nN + に応じた + N (状況[じょうきょう]に応じた対応[たいおう])",
    examples: [
      { jp: "状況[じょうきょう]に応[おう]じて、計画[けいかく]を柔軟[じゅうなん]に変更[へんこう]する必要[ひつよう]がある。", en: "It is necessary to flexibly change the plan in accordance with the situation." },
      { jp: "売上[うりあげ]に応[おう]じて、ボーナスの額[がく]が決[き]まる。", en: "The bonus amount is decided according to sales." }
    ],
    notes:
      "変化に対応して別[べつ]の変化が起[お]きることを示す。「〜によって」(D)と近いが、応答[おうとう]・比例[ひれい]のニュアンスが強い。",
    related: ["gn2-193"]
  },

  {
    id: "gn2-193",
    point: "〜によって / 〜による + N",
    reading: "〜によって / 〜による",
    level: "N2",
    category: "Modifiers",
    meaning: "By means of; due to; depending on; through",
    structure: "N + によって / N + による + N",
    explanation:
      "A multi-purpose compound particle meaning 'by means of, due to, depending on, through'. による is the attributive (modifying) form used before a noun. Covers means, cause, agent (in passive), and variation depending on a factor.",
    formation:
      "N + によって (インターネットによって / 地震[じしん]によって)\nN + による + N (地震[じしん]による被害[ひがい] / 先生[せんせい]による説明[せつめい])",
    examples: [
      { jp: "この村[むら]は地震[じしん]によって大[おお]きな被害[ひがい]を受[う]けた。", en: "This village suffered great damage due to the earthquake." },
      { jp: "ルールは国[くに]によって違[ちが]う。", en: "Rules differ depending on the country." }
    ],
    notes:
      "手段[しゅだん]・原因[げんいん]・受身[うけみ]の動作主[どうさしゅ]・依拠[いきょ]を表す複合助詞[ふくごうじょし]。「〜により」「〜を通じて」(D)などと類義[るいぎ]の場面あり。",
    related: ["gn2-194", "gn2-192"]
  },

  {
    id: "gn2-194",
    point: "〜を通じて / 〜を通して",
    reading: "〜をつうじて / 〜をとおして",
    level: "N2",
    category: "Modifiers",
    meaning: "Through; via; over (a period/range)",
    structure: "N + を通じて / N + を通して",
    explanation:
      "Indicates a medium, channel, or means by which something is done: 'through, via'. When used with time periods, it means 'throughout, over the whole span of'.",
    formation:
      "N + を通じて (テレビを通じて / 一年[いちねん]を通じて)\nN + を通して (人[ひと]を通して / 一生[いっしょう]を通して)",
    examples: [
      { jp: "彼[かれ]とは仕事[しごと]を通[つう]じて知[し]り合[あ]った。", en: "I got to know him through work." },
      { jp: "この地域[ちいき]は一年[いちねん]を通[つう]じて気候[きこう]が穏[おだ]やかだ。", en: "The climate in this region is mild throughout the year." }
    ],
    notes:
      "媒体[ばいたい]・経路[けいろ]、または期間[きかん]の全範囲[ぜんはんい]を示す。「〜によって」(D)と手段[しゅだん]の用法[ようほう]で重なる。",
    related: ["gn2-193"]
  },

  {
    id: "gn2-195",
    point: "〜に沿って / 〜に沿った + N",
    reading: "〜にそって / 〜にそった",
    level: "N2",
    category: "Modifiers",
    meaning: "Along; in accordance with; following",
    structure: "N + に沿って / N + に沿った + N",
    explanation:
      "Indicates following a line, plan, rule, or guideline: 'along, in accordance with'. Used both for physical paths (along a river) and abstract principles (along the plan).",
    formation:
      "N + に沿って (道[みち]に沿って / 計画[けいかく]に沿って)\nN + に沿った + N (方針[ほうしん]に沿った対応[たいおう])",
    examples: [
      { jp: "この道[みち]に沿[そ]って桜[さくら]の木[き]が植[う]えられている。", en: "Cherry trees are planted along this road." },
      { jp: "政府[せいふ]は法律[ほうりつ]に沿[そ]って対応[たいおう]すると表明[ひょうめい]した。", en: "The government stated that it would respond in accordance with the law." }
    ],
    notes:
      "物理[ぶつり]的[てき]な線[せん]に沿う場合と、方針[ほうしん]・計画[けいかく]などの抽象的[ちゅうしょうてき]な線に沿う場合がある。",
    related: ["gn2-196"]
  },

  {
    id: "gn2-196",
    point: "〜に基づいて / 〜に基づく + N",
    reading: "〜にもとづいて / 〜にもとづく",
    level: "N2",
    category: "Modifiers",
    meaning: "Based on; in accordance with; according to",
    structure: "N + に基づいて / N + に基づく + N",
    explanation:
      "Indicates that something is done based on a particular foundation, rule, evidence, or data: 'based on..., according to...'. Used for objective, evidence-based decisions or actions.",
    formation:
      "N + に基づいて (法律[ほうりつ]に基づいて / データに基づいて)\nN + に基づく + N (事実[じじつ]に基づく報道[ほうどう])",
    examples: [
      { jp: "警察[けいさつ]は証拠[しょうこ]に基[もと]づいて彼[かれ]を逮捕[たいほ]した。", en: "The police arrested him based on evidence." },
      { jp: "この小説[しょうせつ]は史実[しじつ]に基[もと]づいて書[か]かれている。", en: "This novel is written based on historical facts." }
    ],
    notes:
      "根拠[こんきょ]・基準[きじゅん]を示す複合助詞。「〜をもとに」(D)より硬く、「改[あらた]まって〜を土台[どだい]にする」ニュアンス。",
    related: ["gn2-195", "gn2-197"]
  },

  {
    id: "gn2-197",
    point: "〜をもとに / 〜をもとにした + N",
    reading: "〜をもとに / 〜をもとにした",
    level: "N2",
    category: "Modifiers",
    meaning: "Based on; using as material or inspiration",
    structure: "N + をもとに / N + をもとにして + V / N + をもとにした + N",
    explanation:
      "Indicates that something is created, made, or developed using something as material, source, or inspiration: 'based on, using as material'. Softer than 〜に基づいて, often used for creative works derived from a source.",
    formation:
      "N + をもとに (伝説[でんせつ]をもとに / データをもとに)\nN + をもとにした + N (体験[たいけん]をもとにした小説[しょうせつ])",
    examples: [
      { jp: "この映画[えいが]は実[じつ]話[わ]をもとにしている。", en: "This movie is based on a true story." },
      { jp: "先生[せんせい]のアドバイスをもとにして、計画[けいかく]を修正[しゅうせい]した。", en: "Based on the teacher's advice, I revised the plan." }
    ],
    notes:
      "「〜を材料[ざいりょう]・ヒントにして」の意で、創作[そうさく]・改良[かいりょう]の場面で多用[たよう]。「〜に基づいて」(D)より口頭[こうとう]的[てき]。",
    related: ["gn2-196"]
  },

  {
    id: "gn2-198",
    point: "〜を中心に(して) / 〜を中心とする + N",
    reading: "〜をちゅうしんに(して) / 〜をちゅうしんとする",
    level: "N2",
    category: "Modifiers",
    meaning: "Centered on; focusing on; with... as the core",
    structure: "N + を中心に(して) / N + を中心とする + N",
    explanation:
      "Indicates that something is centered on or primarily focused on a particular thing: 'centered on, focusing on, with... as the main element'.",
    formation:
      "N + を中心に (首都[しゅと]を中心に / 若者[わかもの]を中心に)\nN + を中心にして (東京[とうきょう]を中心にして)\nN + を中心とする + N (東京[とうきょう]を中心とする地域[ちいき])",
    examples: [
      { jp: "首都[しゅと]を中心[ちゅうしん]に、経済[けいざい]が発展[はってん]している。", en: "Centered on the capital, the economy is developing." },
      { jp: "今晚[こんばん]の会議[かいぎ]は、環境問題[かんきょうもんだい]を中心[ちゅうしん]に話[はな]し合[あ]う予定[よてい]だ。", en: "Tonight's meeting is planned to discuss environmental issues as the main focus." }
    ],
    notes:
      "中心[ちゅうしん]となる対象[たいしょう]を示す。「〜をはじめ」(D)と一部近いが、中心軸[じく]のニュアンスが強い。",
    related: ["gn2-199"]
  },

  {
    id: "gn2-199",
    point: "〜をはじめ / 〜をはじめとする + N",
    reading: "〜をはじめ / 〜をはじめとする",
    level: "N2",
    category: "Modifiers",
    meaning: "Starting with; including... and others; chief among which is...",
    structure: "N + をはじめ / N + をはじめとする + N",
    explanation:
      "Indicates that something is the foremost or representative example among a group: 'starting with..., including... and others'. The noun before をはじめ is the most prominent or representative member.",
    formation:
      "N + をはじめ (社長[しゃちょう]をはじめ)\nN + をはじめとする + N (社長[しゃちょう]をはじめとする幹部[かんぶ])",
    examples: [
      { jp: "社長[しゃちょう]をはじめ、社員[しゃいん]全員[ぜんいん]が式典[しきてん]に参加[さんか]した。", en: "Starting with the president, all employees participated in the ceremony." },
      { jp: "東京[とうきょう]をはじめとする大都市[だいとし]では、家賃[やちん]が高騰[こうとう]している。", en: "In large cities including Tokyo, rent prices are soaring." }
    ],
    notes:
      "代表例[だいひょうれい]を先[さき]に挙[あ]げ、他[ほか]にも同種[どうしゅ]のものがあることを示す。「〜を中心に」(D)とは異[こと]なる。",
    related: ["gn2-198"]
  },

  {
    id: "gn2-200",
    point: "〜上 / 〜上の + N",
    reading: "〜じょう / 〜じょうの",
    level: "N2",
    category: "Modifiers",
    meaning: "In terms of; from the standpoint of; on",
    structure: "N + 上 / N + 上の + N",
    explanation:
      "A suffix indicating a standpoint, aspect, or domain in which something holds: 'in terms of..., from the standpoint of...'. Common with Sino-Japanese nouns like 経験上, 法律上, 歴史上, 事実上.",
    formation:
      "N + 上 (経験[けいけん]上 / 法律[ほうりつ]上 / 事実[じじつ]上)\nN + 上の + N (法律[ほうりつ]上の問題[もんだい] / 健康[けんこう]上の理由[りゆう])",
    examples: [
      { jp: "経験上[けいけんじょう]、この方法[ほうほう]が一番[いちばん]効率[こうりつ]がいい。", en: "In my experience, this method is the most efficient." },
      { jp: "その計画[けいかく]は法律上[ほうりつじょう]問題[もんだい]がないか確認[かくにん]する必要[ひつよう]がある。", en: "It is necessary to confirm whether the plan has no legal problems." }
    ],
    notes:
      "名詞[めいし]に付[つ]き「〜の観点[かんてん]から」「〜の範囲[はんい]で」を示す。「〜上で」(D)とは別[べつ]表現で混同[こんどう]しやすい。",
    related: ["gn2-167"]
  }
];
