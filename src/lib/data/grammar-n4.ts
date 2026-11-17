import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// This file covers Minna no Nihongo Shokyuu 2 (Book 2), N4 grammar points
// for lessons 26-50 (~70 points). IDs follow the pattern gmn4-L<lesson>-<n>.

export const grammarN4: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // LESSON 26 — casual / polite speech
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L26-01",
    point: "普通体・丁寧体",
    reading: "ふつうたい・ていねいたい",
    level: "N4",
    category: "Modifying",
    lesson: 26,
    meaning: "Plain (casual) and polite (desu/masu) predicate forms",
    structure: "Plain: N/Na-adj + だ, I-adj + い, V-辞書形/ない/た; Polite: 〜です/〜ます",
    explanation:
      "Japanese distinguishes 丁寧体 (polite style with です/ます), used with strangers and superiors, from 普通体 (plain style), used with family and close friends. The plain form is also the form used inside noun-modifying clauses and before quotation particles such as と.",
    formation:
      "Noun: 学生[がくせい]だ / 学生[がくせい]じゃない / 学生[がくせい]だった\nI-adj: 寒[さむ]い / 寒[さむ]くない / 寒[さむ]かった\nNa-adj: 静[しず]かだ / 静[しず]かじゃない / 静[しず]かだった\nVerb: 行[い]く / 行[い]かない / 行[い]った / 行[い]かなかった",
    examples: [
      { jp: "私[わたし]は学生[がくせい]だ。", en: "I am a student. (casual)" },
      { jp: "明日[あした]は暇[ひま]ですか。", en: "Are you free tomorrow? (polite)" },
      { jp: "彼[かれ]は来[こ]ないと言[い]った。", en: "He said he would not come." }
    ],
    notes:
      "Plain form is required before quotation particles (と) and conjecture markers (と思う, と言う, と聞く). Polite です/ます is the safe default when speaking with adults or strangers.",
    related: ["gmn4-L26-02", "gmn4-L26-03"]
  },

  {
    id: "gmn4-L26-02",
    point: "〜と思う",
    reading: "〜とおもう",
    level: "N4",
    category: "Modifying",
    lesson: 26,
    meaning: "I think that... (opinion with plain form)",
    structure: "普通体 + と思う",
    explanation:
      "〜と思う expresses the speaker's opinion or thought. The clause before と must be in the plain form. With first-person subject it is normally omitted; with third person, と思っている is preferred for a continuing state of thinking.",
    formation:
      "Affirmative: V/I-adj 辞書形 + と思う (来[く]ると思う)\nNa-adj/Noun: 〜だ + と思う → 簡単[かんたん]だと思う\nNegative: V-ない / 〜くない + と思う\nPast opinion: 〜と思[おも]った (I thought that...)",
    examples: [
      { jp: "明日[あした]は雨[あめ]が降[ふ]ると思う。", en: "I think it will rain tomorrow." },
      { jp: "この問題[もんだい]は簡単[かんたん]だと思います。", en: "I think this problem is easy." },
      { jp: "彼[かれ]は来[こ]ないと思[おも]った。", en: "I thought he would not come." }
    ],
    notes:
      "Use と思っている for a continuing state of thinking, especially with third-person subjects. The polite form と思います is common in business; と思う is casual.",
    related: ["gmn4-L26-01", "gmn4-L26-03"]
  },

  {
    id: "gmn4-L26-03",
    point: "〜と言う / 〜と聞く",
    reading: "〜という / ときく",
    level: "N4",
    category: "Modifying",
    lesson: 26,
    meaning: "Say that... / hear that... (quoted speech)",
    structure: "普通体 + と言う / と聞く",
    explanation:
      "〜と言う quotes someone's words: 'X says that...'. 〜と聞く reports hearsay: 'I hear that...'. The quoted clause must be in the plain form. In casual speech the particle と may be replaced by って.",
    formation:
      "Quote: 普通体 + と言う (来[く]るという)\nHearsay: 普通体 + と聞く (行[い]くと聞いた)\nPolite: 〜と言[い]います / 〜と聞[き]きました\nPast: 〜と言[い]った / 〜と聞[き]いた",
    examples: [
      { jp: "田中[たなか]さんは明日[あした]来[く]ると言[い]った。", en: "Tanaka said he would come tomorrow." },
      { jp: "会議[かいぎ]は来週[らいしゅう]あると聞[き]きました。", en: "I heard there is a meeting next week." },
      { jp: "彼[かれ]は忙[いそが]しいと言[い]っている。", en: "He says he is busy." }
    ],
    notes:
      "と聞いた focuses on information obtained from someone; と言った reports the very words spoken. Quotation particles (と/って) require a preceding plain-form clause.",
    related: ["gmn4-L26-01", "gmn4-L26-02", "gmn4-L41-01"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 27 — potential form
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L27-01",
    point: "〜られる / 〜れる (potential)",
    reading: "〜られる / 〜れる (かのう)",
    level: "N4",
    category: "Verb forms",
    lesson: 27,
    meaning: "Can do / be able to do (potential form of verbs)",
    structure: "V-潜在形 (Group I: 書く→書ける; Group II: 食べる→食べられる; する→できる; くる→こられる)",
    explanation:
      "The potential form expresses ability or possibility. Group II verbs add られる; Group I verbs change the final vowel (書く → 書ける, 飲む → 飲める); する → できる; くる → こられる. With potential verbs, the object marker を becomes が.",
    formation:
      "Group I: 書[か]く → 書[か]ける, 飲[の]む → 飲[の]める, 話[はな]す → 話[はな]せる\nGroup II: 食[た]べる → 食[た]べられる, 見[み]る → 見[み]られる\nIrregular: する → できる, 来[く]る → 来[こ]られる\nNegative: 〜られない / 〜ない (書[か]けない)",
    examples: [
      { jp: "日本語[にほんご]が話[はな]せます。", en: "I can speak Japanese." },
      { jp: "寿司[すし]が食[た]べられますか。", en: "Can you eat sushi?" },
      { jp: "今[いま]は忙[いそが]しくて、映画[えいが]を見[み]られない。", en: "I am busy now and cannot watch a movie." }
    ],
    notes:
      "With potential verbs the object is usually marked by が, not を (日本語が話せる, not 日本語を話せる). In casual speech られる often contracts to れる (見れる - ら抜き言葉).",
    related: ["gmn4-L27-02", "gmn4-L27-03"]
  },

  {
    id: "gmn4-L27-02",
    point: "〜ことができる",
    reading: "〜ことができる",
    level: "N4",
    category: "Verb forms",
    lesson: 27,
    meaning: "Can do / be able to do (periphrastic potential)",
    structure: "V-辞書形 + ことができる",
    explanation:
      "〜ことができる is a formal alternative to the conjugated potential form. It is preferred in writing, formal speech, and contexts describing acquired skill or general ability.",
    formation:
      "Affirmative: V-辞書形 + ことができる (泳[およ]ぐことができる)\nNegative: V-辞書形 + ことができない\nPast: V-辞書形 + ことができた / できなかった\nFormal: 〜することが可能[かのう]です",
    examples: [
      { jp: "私[わたし]は泳[およ]ぐことができます。", en: "I can swim." },
      { jp: "この機械[きかい]は使[つか]うことができますか。", en: "Can this machine be used?" },
      { jp: "彼[かれ]は漢字[かんじ]を書[か]くことができない。", en: "He cannot write kanji." }
    ],
    notes:
      "ことができる is more formal than the conjugated potential (書ける). It cannot be used with stative verbs like わかる, 見える, 聞こえる which are already potential in meaning.",
    related: ["gmn4-L27-01", "gmn4-L27-03"]
  },

  {
    id: "gmn4-L27-03",
    point: "〜見える / 〜聞こえる",
    reading: "〜みえる / 〜きこえる",
    level: "N4",
    category: "Verb forms",
    lesson: 27,
    meaning: "Can see / can hear (spontaneous perception)",
    structure: "N + が + 見える / 聞こえる",
    explanation:
      "見える and 聞こえる describe spontaneous perception — something comes into view or becomes audible without intentional effort. They contrast with the potential 見られる/聞ける which imply choice or permission.",
    formation:
      "Visible: N + が + 見える (山[やま]が見える)\nAudible: N + が + 聞こえる (音[おと]が聞こえる)\nNegative: 〜が見えない / 〜が聞こえない\nAdverbial: よく見える / よく聞こえる",
    examples: [
      { jp: "窓[まど]から海[うみ]が見える。", en: "I can see the sea from the window." },
      { jp: "隣[となり]の部屋[へや]から声[こえ]が聞こえる。", en: "I can hear a voice from the next room." },
      { jp: "目[め]が悪[わる]くて、字[じ]がよく見えない。", en: "My eyes are bad and I cannot see the letters well." }
    ],
    notes:
      "見える is involuntary (something enters the visual field); 見られる implies you are able to choose to see it. Likewise 聞こえる vs 聞ける. を is rare; が is preferred.",
    related: ["gmn4-L27-01", "gmn4-L27-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 28 — 〜ながら (simultaneous action)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L28-01",
    point: "〜ながら",
    reading: "〜ながら",
    level: "N4",
    category: "Conjunctions",
    lesson: 28,
    meaning: "While doing... / doing two things at the same time",
    structure: "V-ます stem + ながら",
    explanation:
      "〜ながら expresses two actions performed simultaneously by the same subject. The main (more important) action comes after ながら; the secondary action is the one before ながら. Both actions share the same subject.",
    formation:
      "V-ます stem + ながら: 食[た]べる → 食[た]べながら, 歩[ある]く → 歩[ある]きながら\nN + ながら (limited): いつもながら, 残念[ざんねん]ながら\nNegative: V-ない + ながら (rare; e.g., 知[し]らないながら)\nPast: V-ながら + V-た (食[た]べながら歩[ある]いた)",
    examples: [
      { jp: "音楽[おんがく]を聞[き]きながら勉強[べんきょう]します。", en: "I study while listening to music." },
      { jp: "歩[ある]きながら電話[でんわ]するのは危[あぶ]ない。", en: "Talking on the phone while walking is dangerous." },
      { jp: "ご飯[はん]を食[た]べながらテレビを見[み]る。", en: "I watch TV while eating." }
    ],
    notes:
      "The main clause (the more important action) follows ながら. The two actions must be controllable by the same subject, so stative verbs (わかる, ある) cannot precede ながら.",
    related: ["gmn4-L28-02"]
  },

  {
    id: "gmn4-L28-02",
    point: "〜間に / 〜間",
    reading: "〜あいだに / 〜あいだ",
    level: "N4",
    category: "Conjunctions",
    lesson: 28,
    meaning: "During / while (time interval)",
    structure: "N + の間(に) / V-辞書形・ている間(に)",
    explanation:
      "〜間 refers to the whole duration of an event or state ('during'). 〜間に focuses on a point or completed action within that duration ('while / in the middle of'). With verbs, 辞書形 + 間 describes the whole period, ている間 the state in progress.",
    formation:
      "Whole period: N + の間 / V-辞書形 + 間 (夏休[なつやす]みの間, 寝[ね]ている間)\nPoint inside: N + の間に / V-ている間に (寝[ね]ている間に)\nWith action verbs: V-辞書形間に (私[わたし]が外出[がいしゅつ]する間に)",
    examples: [
      { jp: "私[わたし]が寝[ね]ている間[あいだ]に、母[はは]は掃除[そうじ]した。", en: "While I was sleeping, my mother cleaned." },
      { jp: "夏休[なつやす]みの間[あいだ]、毎日[まいにち]プールへ行[い]った。", en: "During summer vacation I went to the pool every day." },
      { jp: "料理[りょうり]の間[あいだ]、テレビを見[み]ていた。", en: "I watched TV while cooking." }
    ],
    notes:
      "間 describes continuous state throughout the period; 間に marks a single completed event happening inside it. ている間に is most common for actions concurrent with another ongoing state.",
    related: ["gmn4-L28-01"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 29 — 〜やすい / 〜にくい
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L29-01",
    point: "〜やすい / 〜にくい",
    reading: "〜やすい / 〜にくい",
    level: "N4",
    category: "Modifying",
    lesson: 29,
    meaning: "Easy to... / hard to... (quality of an action)",
    structure: "V-ます stem + やすい / にくい",
    explanation:
      "Attaching やすい or にくい to a verb stem forms an i-adjective describing whether the action is easy or difficult to perform. They conjugate like i-adjectives (やすかった, にくくない) and can modify nouns (わかりやすい本).",
    formation:
      "Easy: V-ます stem + やすい (わかる → わかりやすい, 使[つか]う → 使[つか]いやすい)\nHard: V-ます stem + にくい (食[た]べる → 食[た]べにくい, 書[か]く → 書[か]きにくい)\nPast: 〜やすかった / 〜にくかった\nNoun modifier: わかりやすい本[ほん]",
    examples: [
      { jp: "この本[ほん]はわかりやすい。", en: "This book is easy to understand." },
      { jp: "この靴[くつ]は履[は]きにくい。", en: "These shoes are hard to put on." },
      { jp: "彼[かれ]の名前[なまえ]は覚[おぼ]えやすい。", en: "His name is easy to remember." }
    ],
    notes:
      "These form i-adjectives and conjugate accordingly (やすくなる, にくくない). わかりやすい is so common it is almost lexicalized. They focus on objective ease/difficulty of the action.",
    related: ["gmn4-L29-02"]
  },

  {
    id: "gmn4-L29-02",
    point: "〜づらい / 〜がたい",
    reading: "〜づらい / 〜がたい",
    level: "N4",
    category: "Modifying",
    lesson: 29,
    meaning: "Hard to do / difficult to (emotional or formal difficulty)",
    structure: "V-ます stem + づらい / がたい",
    explanation:
      "〜づらい describes an action that is psychologically or emotionally painful to perform ('hard to bear doing'). 〜がたい is a formal equivalent of にくい used in writing or set phrases (忘れがたい, 信じがたい).",
    formation:
      "Painful: V-ます stem + づらい (話[はな]す → 話[はな]しづらい, 見[み]る → 見[み]づらい)\nFormal hard: V-ます stem + がたい (信[しん]じる → 信[しん]じがたい, 忘[わす]れる → 忘[わす]れがたい)\nSet phrase: ありがたい (grateful)",
    examples: [
      { jp: "この肉[にく]は硬[かた]くて食[た]べづらい。", en: "This meat is tough and hard to eat." },
      { jp: "彼[かれ]の死[し]は信[しん]じがたい。", en: "His death is hard to believe." },
      { jp: "言[い]いづらいことですが、お伝[つた]えします。", en: "It is hard to say, but I will tell you." }
    ],
    notes:
      "にくい is objective (physically or generally hard); づらい carries a nuance of discomfort or emotional resistance. がたい is literary and used with a limited set of verbs (信じる, 忘れる, 理解[りかい]する, 許[ゆる]す).",
    related: ["gmn4-L29-01"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 30 — 〜ても (even if)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L30-01",
    point: "〜ても",
    reading: "〜ても",
    level: "N4",
    category: "Conditionals",
    lesson: 30,
    meaning: "Even if... / no matter if... (concessive conditional)",
    structure: "V-て + も / 〜くても / 〜でも",
    explanation:
      "〜ても expresses a concessive condition: 'even if X happens, Y still applies'. The result in the main clause is contrary to what one would normally expect from the condition. It attaches to V-て, I-adj くて, Na-adj/Noun で.",
    formation:
      "Verb: V-て + も (降[ふ]っても, 行[い]かなくても)\nI-adj: 〜く + ても (寒[さむ]くても)\nNa-adj/Noun: 〜でも (静[しず]かでも, 子供[こども]でも)\nPast hypothetical: V-た + としても (literary)",
    examples: [
      { jp: "雨[あめ]が降[ふ]っても、試合[しあい]をします。", en: "Even if it rains, the match will be held." },
      { jp: "高[たか]くても買[か]います。", en: "I will buy it even if it is expensive." },
      { jp: "何[なに]度[ど]聞[き]いてもわからない。", en: "No matter how many times I hear it, I don't understand." }
    ],
    notes:
      "〜ても marks the result as unaffected by the condition. With question words it forms 〜ても〜でも meaning 'no matter what/who/when' (いつでも, だれでも, 何[なに]を食べても).",
    related: ["gmn4-L30-02", "gmn4-L30-03"]
  },

  {
    id: "gmn4-L30-02",
    point: "疑問詞 + 〜でも",
    reading: "ぎもんし + 〜でも",
    level: "N4",
    category: "Particles",
    lesson: 30,
    meaning: "Any... / no matter what/who/when",
    structure: "疑問詞 (だれ・なに・いつ・どこ・どれ) + でも",
    explanation:
      "Combining a question word with でも creates a totally inclusive meaning: 'anyone, anything, anytime, anywhere'. It is used in affirmative sentences. In negative sentences, 〜も alone (without で) is more natural.",
    formation:
      "だれでも (anyone), なに[何]でも (anything)\nいつでも (anytime), どこでも (anywhere)\nどれでも (any one), どんな〜でも (any kind of)\nNegative alt: だれも〜ない (nobody)",
    examples: [
      { jp: "だれでも入[はい]れます。", en: "Anyone can enter." },
      { jp: "いつでも来[き]てください。", en: "Please come anytime." },
      { jp: "この店[みせ]は何[なに]でも売[う]っている。", en: "This store sells anything." }
    ],
    notes:
      "でも with question words is for total inclusion. In negative sentences use question word + も + ない (だれも来ない = nobody comes). For selection among options, use 〜か〜か instead.",
    related: ["gmn4-L30-01", "gmn4-L30-03"]
  },

  {
    id: "gmn4-L30-03",
    point: "〜のに (concessive)",
    reading: "〜のに (ゆに)",
    level: "N4",
    category: "Conjunctions",
    lesson: 30,
    meaning: "Even though... / despite the fact that...",
    structure: "普通体 + のに (Na-adj/N: 〜なのに)",
    explanation:
      "〜のに joins two clauses where the second is unexpected or contrary to what the first would suggest ('even though A, B'). Unlike ても (hypothetical concession), のに presupposes the first clause is actually true.",
    formation:
      "Verb: V-普通体 + のに (行[い]ったのに, 来[こ]ないのに)\nI-adj: 〜い + のに (寒[さむ]いのに)\nNa-adj/Noun: 〜な + のに (静[しず]かなのに, 子供[こども]なのに)\nFormal: V-のにもかかわらず",
    examples: [
      { jp: "雨[あめ]が降[ふ]っているのに、外[そと]で遊[あそ]んでいる。", en: "Even though it is raining, they are playing outside." },
      { jp: "薬[くすり]を飲[の]んだのに、治[なお]らない。", en: "Even though I took medicine, I am not getting better." },
      { jp: "子供[こども]なのに、よくわかる。", en: "Even though he is a child, he understands well." }
    ],
    notes:
      "のに often conveys a nuance of complaint, surprise, or reproach. が/けれども are more neutral ('but'); のに adds the speaker's feeling that the second clause should not be the case.",
    related: ["gmn4-L30-01", "gmn4-L30-02", "gmn4-L43-01"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 31 — 〜つもり (intention)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L31-01",
    point: "〜つもりだ",
    reading: "〜つもりだ",
    level: "N4",
    category: "Want-Desire",
    lesson: 31,
    meaning: "I intend to... (current intention)",
    structure: "V-辞書形 + つもりだ / V-ない + つもりだ",
    explanation:
      "〜つもりだ expresses the speaker's firm intention or plan to do (or not do) something. With a third-person subject, 〜つもりだ must be supported by evidence; otherwise 〜つもりらしい/そうだ is used.",
    formation:
      "Affirmative: V-辞書形 + つもりだ (行[い]くつもりだ)\nNegative: V-ない + つもりだ (食[た]べないつもりだ)\nPast intention: V-辞書形 + つもりだった (had intended to)\nPolite: 〜つもりです",
    examples: [
      { jp: "来年[らいねん]日本[にほん]へ行[い]くつもりです。", en: "I intend to go to Japan next year." },
      { jp: "今日[きょう]はもう飲[の]まないつもりだ。", en: "I don't intend to drink anymore today." },
      { jp: "彼[かれ]は会社[かいしゃ]を辞[や]めるつもりらしい。", en: "It seems he intends to quit the company." }
    ],
    notes:
      "つもり indicates an intention held now, even if for a future action. Past つもりだった often implies the plan was not realized. It cannot express another person's direct intention without evidential marking.",
    related: ["gmn4-L31-02", "gmn4-L31-03"]
  },

  {
    id: "gmn4-L31-02",
    point: "〜予定だ",
    reading: "〜よていだ",
    level: "N4",
    category: "Tense",
    lesson: 31,
    meaning: "Scheduled to / plan to (formal schedule)",
    structure: "V-辞書形 + 予定だ / N + の予定だ",
    explanation:
      "〜予定だ indicates a fixed or scheduled plan, often set by an organization or external party. It is more formal and objective than つもり, which is personal intention. Common in business and travel contexts.",
    formation:
      "Affirmative: V-辞書形 + 予定[よてい]だ (出発[しゅっぱつ]する予定[よてい]だ)\nNoun: N + の + 予定[よてい]だ (会議[かいぎ]の予定[よてい]だ)\nPast schedule: V-辞書形 + 予定だった\nPolite: 〜予定[よてい]です",
    examples: [
      { jp: "来週[らいしゅう]大阪[おおさか]へ出張[しゅっちょう]する予定[よてい]です。", en: "I am scheduled to go to Osaka on business next week." },
      { jp: "会議[かいぎ]は明日[あす]の午後[ごご]ある予定[よてい]だ。", en: "The meeting is scheduled for tomorrow afternoon." },
      { jp: "電車[でんしゃ]は三時[さんじ]に着[つ]く予定[よてい]だった。", en: "The train was scheduled to arrive at three." }
    ],
    notes:
      "予定 is more formal and time-definite than つもり. It is common in business emails and schedules. 予定通り means 'as planned'; 予定が変わる means 'the plan changed'.",
    related: ["gmn4-L31-01", "gmn4-L31-03"]
  },

  {
    id: "gmn4-L31-03",
    point: "〜と思う (intention)",
    reading: "〜とおもう (いこう)",
    level: "N4",
    category: "Want-Desire",
    lesson: 31,
    meaning: "I think I will... (softer intention with volitional)",
    structure: "V-意向形 + と思っている / と思う",
    explanation:
      "Combining the volitional form (V-意向形) with と思う softens an intention into 'I think I will...'. With 思っている it indicates a continuing state of intention. Polite form: V-意向形 + と思います.",
    formation:
      "Volitional: V-意向形 (Group I: 行[い]こう, Group II: 食[た]べよう, する→しよう, 来[く]る→来[こ]よう)\nWith 思う: V-意向形 + と思う (行[い]こうと思う)\nWith 思っている: continuing intention (V-意向形 + と思っている)\nPolite: V-意向形 + と思います",
    examples: [
      { jp: "週末[しゅうまつ]は映画[えいが]を見[み]に行[い]こうと思[おも]う。", en: "I think I will go see a movie this weekend." },
      { jp: "明日[あした]は早[はや]く起[お]きようと思[おも]っています。", en: "I am thinking of getting up early tomorrow." },
      { jp: "夏休[なつやす]みに旅行[りょこう]しようと思[おも]った。", en: "I thought I would travel during summer vacation." }
    ],
    notes:
      "V-ようと思う is softer and more natural than the bare volitional (行こう) for stating intention. Use 思っている for a continuing intention; plain 思う for an immediate intention just formed.",
    related: ["gmn4-L31-01", "gmn4-L31-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 32 — 〜なさい / 〜ようにする (instruction)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L32-01",
    point: "〜なさい",
    reading: "〜なさい",
    level: "N4",
    category: "Suggestions",
    lesson: 32,
    meaning: "Do...! (mild command to children or subordinates)",
    structure: "V-ます stem + なさい",
    explanation:
      "〜なさい forms a mild but firm command, used by parents, teachers, or superiors toward children, students, or subordinates. It is stronger than 〜てください but softer than a direct imperative (〜ろ/〜え).",
    formation:
      "Affirmative: V-ます stem + なさい (食[た]べなさい, 書[か]きなさい)\nWith particle: 〜を + V-なさい (ご飯[はん]を食[た]べなさい)\nNegative command: V-辞書形 + な (食[た]べるな)\nSofter: 〜なさいよ / 〜なさいね",
    examples: [
      { jp: "早[はや]く宿題[しゅくだい]をしなさい。", en: "Do your homework quickly." },
      { jp: "野菜[やさい]を食[た]べなさい。", en: "Eat your vegetables." },
      { jp: "もっと勉強[べんきょう]しなさい。", en: "Study more." }
    ],
    notes:
      "なさい is used downward (from superior to subordinate). It is inappropriate in business contexts. For polite requests, use 〜てください instead. Negative commands use V-辞書形 + な.",
    related: ["gmn4-L32-02", "gmn4-L32-03"]
  },

  {
    id: "gmn4-L32-02",
    point: "〜ようにする",
    reading: "〜ようにする",
    level: "N4",
    category: "Suggestions",
    lesson: 32,
    meaning: "Try to... / make sure to... (effort or habit)",
    structure: "V-辞書形 / V-ない + ようにする",
    explanation:
      "〜ようにする means making an effort or establishing a habit to do (or not do) something: 'I will try to / make sure to...'. It emphasizes the speaker's deliberate effort rather than the outcome.",
    formation:
      "Affirmative: V-辞書形 + ようにする (運動[うんどう]するようにする)\nNegative: V-ない + ようにする (甘[あま]いものを食[た]べないようにする)\nPast effort: V-辞書形 + ようにした\nHabitual: V-辞書形 + ようにしている",
    examples: [
      { jp: "毎日[まいにち]運動[うんどう]するようにしています。", en: "I make sure to exercise every day." },
      { jp: "夜[よる]はコーヒーを飲[の]まないようにする。", en: "I try not to drink coffee at night." },
      { jp: "日本語[にほんご]で話[はな]すようにしました。", en: "I made an effort to speak in Japanese." }
    ],
    notes:
      "ようにする focuses on effort, not on actual success. Habitual ようにしている implies the effort has become routine. Contrast with ようになる (L49), which marks an actual change of state.",
    related: ["gmn4-L32-01", "gmn4-L32-03", "gmn4-L49-01"]
  },

  {
    id: "gmn4-L32-03",
    point: "〜ないようにする",
    reading: "〜ないようにする",
    level: "N4",
    category: "Suggestions",
    lesson: 32,
    meaning: "Try not to... / be careful not to...",
    structure: "V-ない + ようにする",
    explanation:
      "The negative form of ようにする expresses a conscious effort to avoid doing something. It is used for warnings to oneself or others, and for breaking undesirable habits.",
    formation:
      "Negative effort: V-ない + ようにする (遅[おく]れないようにする)\nPast: V-ない + ようにした\nHabitual: V-ない + ようにしている\nWith ください: V-ない + ようにしてください",
    examples: [
      { jp: "遅[おく]れないようにしてください。", en: "Please make sure not to be late." },
      { jp: "無理[むり]をしないようにしている。", en: "I try not to overdo things." },
      { jp: "忘[わす]れないようにメモした。", en: "I took notes so as not to forget." }
    ],
    notes:
      "ようにしてください is a polite request asking the listener to make an effort. It is softer than ないでください ('please don't'), which is a direct prohibition. The former focuses on effort, the latter on avoidance.",
    related: ["gmn4-L32-01", "gmn4-L32-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 33 — passive (受身)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L33-01",
    point: "受身の形",
    reading: "うけみのかたち",
    level: "N4",
    category: "Verb forms",
    lesson: 33,
    meaning: "Passive form of verbs (れる/られる)",
    structure: "Group I: V-ない stem + れる; Group II: V-ない stem + られる; する→される; くる→こられる",
    explanation:
      "The passive form (受身) is made by attaching れる to Group I verbs (negative stem) and られる to Group II verbs. する becomes される, くる becomes こられる. The subject of a passive sentence is the patient (the one affected), and the agent is marked by に.",
    formation:
      "Group I: 書[か]く → 書[か]かれる, 飲[の]む → 飲[の]まれる, 話[はな]す → 話[はな]される\nGroup II: 食[た]べる → 食[た]べられる, 見[み]る → 見[み]られる\nする → される, 来[く]る → 来[こ]られる\nNegative: 〜られない / 〜れない",
    examples: [
      { jp: "この手紙[てがみ]は私[わたし]によって書[か]かれた。", en: "This letter was written by me." },
      { jp: "日本[にほん]でこの車[くるま]が作[つく]られる。", en: "This car is made in Japan." },
      { jp: "会議[かいぎ]は明日[あした]開[ひら]かれます。", en: "The meeting will be held tomorrow." }
    ],
    notes:
      "Passive subject = patient; agent = に. The direct passive is common in news, formal writing, and when the agent is unknown or unimportant (そう作られている).",
    related: ["gmn4-L33-02", "gmn4-L33-03"]
  },

  {
    id: "gmn4-L33-02",
    point: "直接受身",
    reading: "ちょくせつうけみ",
    level: "N4",
    category: "Verb forms",
    lesson: 33,
    meaning: "Direct passive (subject becomes patient)",
    structure: "N(患者) + は + N(動作主) + に + V-受身",
    explanation:
      "In the direct passive, the object of the active sentence becomes the subject of the passive one. The agent (doer) is marked by に. This is the closest counterpart to the English passive.",
    formation:
      "Pattern: N1(患者) + は + N2(動作主) + に + V-受身\nActive→Passive: 先生[せんせい]が私[わたし]を褒[ほ]めた → 私[わたし]は先生[せんせい]に褒[ほ]められた\nWith を: 私[わたし]は母[はは]に日記[にっき]を読[よ]まれた",
    examples: [
      { jp: "私[わたし]は母[はは]に褒[ほ]められた。", en: "I was praised by my mother." },
      { jp: "弟[おとうと]は先生[せんせい]に質問[しつもん]された。", en: "My younger brother was asked a question by the teacher." },
      { jp: "この小説[しょうせつ]は多[おお]くの人[ひと]に読[よ]まれている。", en: "This novel is read by many people." }
    ],
    notes:
      "The direct passive shifts the focus from the agent to the patient. It is the typical passive in news and formal writing. Use によって for the agent in literary or formal contexts.",
    related: ["gmn4-L33-01", "gmn4-L33-03"]
  },

  {
    id: "gmn4-L33-03",
    point: "迷惑の受身",
    reading: "めいわくのうけみ",
    level: "N4",
    category: "Verb forms",
    lesson: 33,
    meaning: "Suffering passive (adversely affected by someone's action)",
    structure: "N(被害者) + は + N(動作主) + に + V-受身",
    explanation:
      "The suffering (indirect) passive describes an action by someone else that adversely affects the subject. Often the verb is intransitive (e.g., 泣く, 降る) or already has an object; the subject is not directly the patient but is inconvenienced.",
    formation:
      "Pattern: N1(被害者) + は + N2 + に + V-受身\nIntransitive: 子供[こども]に泣[な]かれた (a child cried and I suffered)\nObject-keeping: 友達[ともだち]に辞書[じしょ]を壊[こわ]された\nWith 降る: 雨[あめ]に降[ふ]られた (I was caught in the rain)",
    examples: [
      { jp: "夜[よる]に赤[あか]ちゃんに泣[な]かれて、寝[ね]られなかった。", en: "The baby cried at night and I couldn't sleep." },
      { jp: "急[きゅう]に雨[あめ]に降[ふ]られて、服[ふく]が濡[ぬ]れた。", en: "It suddenly rained on me and my clothes got wet." },
      { jp: "すりに財布[さいふ]を盗[ぬす]まれた。", en: "I had my wallet stolen by a pickpocket." }
    ],
    notes:
      "The suffering passive often uses intransitive verbs (泣く, 降る, 来る) where the subject is not directly affected by the action but is inconvenienced by its occurrence. The に-marked agent is the source of trouble.",
    related: ["gmn4-L33-01", "gmn4-L33-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 34 — causative (使役)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L34-01",
    point: "使役の形",
    reading: "しえきのかたち",
    level: "N4",
    category: "Verb forms",
    lesson: 34,
    meaning: "Causative form of verbs (せる/させる)",
    structure: "Group I: V-ない stem + せる; Group II: V-ない stem + させる; する→させる; くる→こさせる",
    explanation:
      "The causative form (使役) expresses making or letting someone do something. Group I verbs attach せる to the negative stem; Group II verbs attach させる. する→させる, くる→こさせる. The causee is marked by に.",
    formation:
      "Group I: 書[か]く → 書[か]かせる, 飲[の]む → 飲[の]ませる, 待[ま]つ → 待[ま]たせる\nGroup II: 食[た]べる → 食[た]べさせる, 見[み]る → 見[み]させる\nする → させる, 来[く]る → 来[こ]させる\nNegative: 〜させない",
    examples: [
      { jp: "母[はは]は弟[おとうと]に野菜[やさい]を食[た]べさせた。", en: "My mother made my brother eat vegetables." },
      { jp: "先生[せんせい]は学生[がくせい]に本[ほん]を読[よ]ませた。", en: "The teacher made the students read the book." },
      { jp: "私[わたし]は子供[こども]を早[はや]く寝[ね]させた。", en: "I made my child go to bed early." }
    ],
    notes:
      "With transitive verbs the causee is marked by に (弟に食べさせる). With intransitive verbs the causee can be marked by を (子供を寝させる). The causative implies compulsion or permission.",
    related: ["gmn4-L34-02", "gmn4-L34-03"]
  },

  {
    id: "gmn4-L34-02",
    point: "〜に〜を〜させる",
    reading: "〜に〜を〜させる",
    level: "N4",
    category: "Verb forms",
    lesson: 34,
    meaning: "Make / let someone do something (causative with object)",
    structure: "N(causee) + に + N(object) + を + V-使役",
    explanation:
      "When the causative verb is transitive, the causee (the person made to act) is marked by に, and the object of the action is preserved with を. This construction covers both 'make someone do' (compulsion) and 'let someone do' (permission).",
    formation:
      "Compel: 子供[こども]に宿題[しゅくだい]をさせた (made the child do homework)\nPermit: 子供[こども]にテレビを見[み]させた (let the child watch TV)\nNegative cause: 〜に〜を〜させなかった\nPolite: 〜に〜を〜させます",
    examples: [
      { jp: "医者[いしゃ]は患者[かんじゃ]に薬[くすり]を飲[の]ませた。", en: "The doctor made the patient take the medicine." },
      { jp: "母[はは]は私[わたし]にピアノを習[なら]わせた。", en: "My mother made me learn piano." },
      { jp: "先生[せんせい]は学生[がくせい]に発言[はつげん]させた。", en: "The teacher let the students speak." }
    ],
    notes:
      "Whether the causative means 'make' or 'let' depends on context. With を as object marker, the causee always takes に. This pattern is the standard causative for transitive verbs.",
    related: ["gmn4-L34-01", "gmn4-L34-03"]
  },

  {
    id: "gmn4-L34-03",
    point: "使役受身 (させられる)",
    reading: "しえきうけみ (させられる)",
    level: "N4",
    category: "Verb forms",
    lesson: 34,
    meaning: "Be made to do something (causative-passive)",
    structure: "Group I: V-ない stem + される; Group II/する/くる: V-させる + られる",
    explanation:
      "The causative-passive expresses being forced to do something by someone else. The subject is the causee (the one compelled). Group I verbs contract: 飲まされる (instead of 飲まされる). It often carries a nuance of reluctance or suffering.",
    formation:
      "Group I: V-ない stem + される (書[か]く → 書[か]かされる, 飲[の]む → 飲[の]まされる)\nGroup II: V-させる + られる (食[た]べる → 食[た]べさせられる)\nする → させられる, 来[く]る → 来[こ]させられる\nNegative: 〜させられない",
    examples: [
      { jp: "私[わたし]は母[はは]に勉強[べんきょう]させられた。", en: "I was made to study by my mother." },
      { jp: "学生[がくせい]は長[なが]い文章[ぶんしょう]を暗記[あんき]させられた。", en: "The students were made to memorize a long passage." },
      { jp: "毎日[まいにち]残業[ざんぎょう]させられて疲[つか]れた。", en: "I am made to work overtime every day and am exhausted." }
    ],
    notes:
      "The causative-passive emphasizes being compelled against one's will. The contracted form 飲まされる is normal for Group I verbs. Common in complaints about being forced to do unwanted tasks.",
    related: ["gmn4-L34-01", "gmn4-L34-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 35 — respectful verbs (尊敬語)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L35-01",
    point: "お〜になる",
    reading: "お〜になる",
    level: "N4",
    category: "Honorific",
    lesson: 35,
    meaning: "Respectful (honorific) verb form for another's action",
    structure: "お + V-ます stem + になる / ご + 漢語N + になる",
    explanation:
      "お〜になる is the productive honorific (尊敬語) pattern: prefix お to the verb's ます stem and add になる. It elevates the subject (the respected person who performs the action). For 漢語 nouns, ご〜になる is used (ご連絡になる).",
    formation:
      "Verb: お + V-ます stem + になる (お帰[かえ]りになる, お待[ま]ちになる)\n漢語N: ご + N + になる (ご連絡[れんらく]になる, ご出席[しゅっせき]になる)\nNegative: お + V-ます stem + にならない\nPast: お + V-ます stem + になった",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりましたか。", en: "Has the teacher already gone home?" },
      { jp: "社長[しゃちょう]はこちらでお待[ま]ちになります。", en: "The president will wait here." },
      { jp: "部長[ぶちょう]は明日[あした]ご出張[しゅっちょう]になります。", en: "The department head will go on a business trip tomorrow." }
    ],
    notes:
      "お〜になる raises the subject. The same verb's plain form is used for one's own action. Special suppletive forms (いらっしゃる, おっしゃる) are preferred for common verbs like 行く, 来る, 言う.",
    related: ["gmn4-L35-02", "gmn4-L35-03"]
  },

  {
    id: "gmn4-L35-02",
    point: "特殊な尊敬語 (いらっしゃる etc.)",
    reading: "とくしゅなそんけいご",
    level: "N4",
    category: "Honorific",
    lesson: 35,
    meaning: "Special honorific verbs with dedicated forms",
    structure: "Plain → Honorific: 行く/来る/いる→いらっしゃる; 言う→おっしゃる; する→なさる; 見る→ごらんになる",
    explanation:
      "Common verbs have special suppletive honorific forms instead of the regular お〜になる pattern. These are preferred in business and formal speech: いらっしゃる (be/go/come), おっしゃる (say), なさる (do), ごらんになる (see), 召し上がる (eat/drink).",
    formation:
      "行[い]く/来[く]る/いる → いらっしゃる (いらっしゃいます)\n言[い]う → おっしゃる (おっしゃいます)\nする → なさる (なさいます)\n見[み]る → ごらんになる\n食[た]べる/飲[の]む → 召[め]し上[あ]がる",
    examples: [
      { jp: "田中[たなか]先生[せんせい]はいらっしゃいますか。", en: "Is Professor Tanaka here?" },
      { jp: "先生[せんせい]がそうおっしゃいました。", en: "The teacher said so." },
      { jp: "こちらをごらんください。", en: "Please look at this." }
    ],
    notes:
      "These special forms conjugate as irregular verbs: いらっしゃる → いらっしゃいます (not いらっしゃります). ごらんになる is itself an honorific (お + ます stem + になる applied to 見る).",
    related: ["gmn4-L35-01", "gmn4-L35-03"]
  },

  {
    id: "gmn4-L35-03",
    point: "〜ていらっしゃる",
    reading: "〜ていらっしゃる",
    level: "N4",
    category: "Honorific",
    lesson: 35,
    meaning: "Be doing... (honorific ている)",
    structure: "V-て + いらっしゃる",
    explanation:
      "〜ていらっしゃる is the honorific equivalent of 〜ている. It elevates the subject who is in the middle of an ongoing action or state. Polite form: 〜ていらっしゃいます.",
    formation:
      "Pattern: V-て + いらっしゃる (読[よ]んでいらっしゃる)\nPolite: V-て + いらっしゃいます\nNegative: V-て + いらっしゃらない / いらっしゃいません\nPast: V-て + いらっしゃった",
    examples: [
      { jp: "何[なに]を調[しら]べていらっしゃいますか。", en: "What are you investigating?" },
      { jp: "先生[せんせい]は今[いま]本[ほん]を書[か]いていらっしゃる。", en: "The teacher is currently writing a book." },
      { jp: "お客様[きゃくさま]はもうお待[ま]ちになっていらっしゃいます。", en: "The customer is already waiting." }
    ],
    notes:
      "ていらっしゃる is the polite progressive for respected subjects. For humble speech use ております instead. The いらっしゃる conjugates irregularly: いらっしゃいます (not いらっしゃります).",
    related: ["gmn4-L35-01", "gmn4-L35-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 36 — humble verbs (謙譲語)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L36-01",
    point: "お〜する / ご〜する",
    reading: "お〜する / ご〜する",
    level: "N4",
    category: "Honorific",
    lesson: 36,
    meaning: "Humble verb form for one's own action toward a respected party",
    structure: "お + V-ます stem + する / ご + 漢語N + する",
    explanation:
      "お〜する lowers the speaker's action (謙譲語) when it is directed toward a respected listener or third party. For 漢語 nouns, ご + N + する is used (ご連絡する). The subject of the verb is always the speaker.",
    formation:
      "Verb: お + V-ます stem + する (お持[も]ちする, お待[ま]ちする)\n漢語N: ご + N + する (ご連絡[れんらく]する, ご案内[あんない]する)\nPolite: お + V-ます stem + します (お持[も]ちします)\nNegative: お + V-ます stem + しません",
    examples: [
      { jp: "私[わたし]がお持[も]ちします。", en: "I will carry it (for you)." },
      { jp: "後[あと]でご連絡[れんらく]します。", en: "I will contact you later." },
      { jp: "私[わたし]がご案内[あんない]いたします。", en: "I will show you around." }
    ],
    notes:
      "Humble forms lower the speaker to elevate the listener. They should not be used for actions that don't directly involve the respected party (× 私がお風呂[ふろ]に入[はい]りします is wrong). ご案内いたします is doubly polite (ご〜する + いたします).",
    related: ["gmn4-L36-02", "gmn4-L36-03"]
  },

  {
    id: "gmn4-L36-02",
    point: "特殊な謙譲語 (まいる etc.)",
    reading: "とくしゅなけんじょうご",
    level: "N4",
    category: "Honorific",
    lesson: 36,
    meaning: "Special humble verbs with dedicated forms",
    structure: "Plain → Humble: 行く/来る→まいる; 言う→申す; する→いたす; 食べる/飲む→いただく",
    explanation:
      "Common verbs have suppletive humble forms preferred in formal speech: まいる (go/come), 申す (say), いたす (do), いただく (eat/receive), 拝見する (see), 伺う (visit/ask). These lower the speaker's action to show respect to the listener.",
    formation:
      "行[い]く/来[く]る → 参[まい]る (参[まい]ります)\n言[い]う → 申[もう]す (申[もう]します)\nする → いたす (いたします)\n食[た]べる/飲[の]む → いただく (いただきます)\n見[み]る → 拝見[はいけん]する",
    examples: [
      { jp: "私[わたし]は明日[あした]そちらへ参[まい]ります。", en: "I will go there tomorrow." },
      { jp: "私[わたし]は田中[たなか]と申[もう]します。", en: "My name is Tanaka." },
      { jp: "お手紙[てがみ]を拝見[はいけん]しました。", en: "I have read your letter." }
    ],
    notes:
      "These verbs conjugate as Group I or irregular. いただく also means 'receive' in giving-receiving constructions (V-ていただく). 伺う doubles for 'visit' and 'ask' (質問[しつもん]を伺う).",
    related: ["gmn4-L36-01", "gmn4-L36-03"]
  },

  {
    id: "gmn4-L36-03",
    point: "〜ていただく",
    reading: "〜ていただく",
    level: "N4",
    category: "Honorific",
    lesson: 36,
    meaning: "Humbly receive the favor of someone doing...",
    structure: "V-て + いただく",
    explanation:
      "〜ていただく is the humble form of 〜てもらう: the speaker humbly receives the favor of someone doing something for them (or for someone close to the speaker). It elevates the doer (the one performing the favor).",
    formation:
      "Pattern: N(に) + V-て + いただく (先生[せんせい]に教[おし]えていただく)\nPolite: V-て + いただきます\nPast: V-て + いただいた\nNegative: V-て + いただけない / いただけません",
    examples: [
      { jp: "先生[せんせい]に日本語[にほんご]を教[おし]えていただきました。", en: "I had the teacher teach me Japanese." },
      { jp: "山田[やまだ]さんに案内[あんない]していただいた。", en: "I had Mr. Yamada show me around." },
      { jp: "明日[あした]ご連絡[れんらく]していただけますか。", en: "Could you contact me tomorrow?" }
    ],
    notes:
      "ていただく raises the doer and lowers the receiver. It is the humble counterpart to てもらう. The polite request 〜ていただけませんか (L37) is built on this verb. The doer is marked by に.",
    related: ["gmn4-L36-01", "gmn4-L36-02", "gmn4-L37-01"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 37 — polite request
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L37-01",
    point: "〜ていただけませんか",
    reading: "〜ていただけませんか",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 37,
    meaning: "Could you please...? (very polite request)",
    structure: "V-て + いただけませんか",
    explanation:
      "〜ていただけませんか is the most polite standard request pattern. It is built from 〜ていただく (humbly receive) in the potential negative form: literally 'could I not receive the favor of your doing...?'. It is very respectful and soft.",
    formation:
      "Polite: V-て + いただけませんか (書[か]いていただけませんか)\nEven softer: V-て + いただけないでしょうか\nAffirmative alt: V-て + いただけますか (slightly less polite)\nPast soft: V-て + いただけませんでしたか",
    examples: [
      { jp: "この手紙[てがみ]を書[か]いていただけませんか。", en: "Could you please write this letter for me?" },
      { jp: "もう一度[いちど]説明[せつめい]していただけませんか。", en: "Could you please explain one more time?" },
      { jp: "明日[あした]来[き]ていただけませんか。", en: "Could you please come tomorrow?" }
    ],
    notes:
      "〜ていただけませんか is more polite than 〜てくれませんか. To respond affirmatively: はい、いいですよ / ええ、そうです (sure). To decline: すみません、ちょっと… (sorry, a bit...).",
    related: ["gmn4-L37-02", "gmn4-L36-03"]
  },

  {
    id: "gmn4-L37-02",
    point: "〜てもらえませんか",
    reading: "〜てもらえませんか",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 37,
    meaning: "Could you...? (polite request, slightly less formal)",
    structure: "V-て + もらえませんか",
    explanation:
      "〜てもらえませんか is a polite request built on 〜てもらう in the potential negative. It is slightly less formal than 〜ていただけませんか but still respectful. Common in everyday polite conversation.",
    formation:
      "Polite: V-て + もらえませんか (待[ま]ってもらえませんか)\nWith ください (more direct): V-て + ください\nSofter: V-て + もらえないでしょうか\nPast: V-て + もらえませんでしたか",
    examples: [
      { jp: "ここで少[すこ]し待[ま]ってもらえませんか。", en: "Could you wait here a moment?" },
      { jp: "名前[なまえ]を書[か]いてもらえませんか。", en: "Could you write your name?" },
      { jp: "写真[しゃしん]を撮[と]ってもらえませんか。", en: "Could you take a picture (for me)?" }
    ],
    notes:
      "ていただく (humble) is preferred for superiors; てもらう is acceptable for colleagues and acquaintances. Both patterns use に to mark the doer when needed: 私[わたし]にもう一度[いちど]説明[せつめい]してもらえませんか。",
    related: ["gmn4-L37-01", "gmn4-L36-03"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 38 — 〜ことになる / 〜ことにする
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L38-01",
    point: "〜ことにする",
    reading: "〜ことにする",
    level: "N4",
    category: "Verb forms",
    lesson: 38,
    meaning: "Decide to... (one's own decision)",
    structure: "V-辞書形 / V-ない + ことにする",
    explanation:
      "〜ことにする expresses a personal decision: 'I have decided to (do / not do)...'. The subject is the decision-maker, usually the speaker. The past form ことにした emphasizes the completed act of deciding.",
    formation:
      "Affirmative: V-辞書形 + ことにする (行[い]くことにする)\nNegative: V-ない + ことにする (食[た]べないことにする)\nPast decision: V-辞書形 + ことにした\nHabit/rule: V-辞書形 + ことにしている",
    examples: [
      { jp: "来年[らいねん]日本[にほん]へ行[い]くことにしました。", en: "I decided to go to Japan next year." },
      { jp: "毎日[まいにち]運動[うんどう]することにしている。", en: "I make it a rule to exercise every day." },
      { jp: "お酒[さけ]を飲[の]まないことにした。", en: "I decided not to drink alcohol." }
    ],
    notes:
      "ことにする emphasizes the subjective act of deciding. ことにしている implies the decision has become an ongoing habit. Contrast with ことになる (L38-02), where the decision is external or collective.",
    related: ["gmn4-L38-02", "gmn4-L38-03"]
  },

  {
    id: "gmn4-L38-02",
    point: "〜ことになる",
    reading: "〜ことになる",
    level: "N4",
    category: "Verb forms",
    lesson: 38,
    meaning: "It has been decided that... (external/collective decision)",
    structure: "V-辞書形 / V-ない + ことになる",
    explanation:
      "〜ことになる indicates that a decision has been made externally or collectively and something is now scheduled: 'it has been decided that...'. The speaker is usually not the sole decider.",
    formation:
      "Affirmative: V-辞書形 + ことになる (行[い]くことになる)\nNegative: V-ない + ことになる (行[い]かないことになる)\nPast: V-辞書形 + ことになった (it was decided)\nStanding rule: V-辞書形 + ことになっている",
    examples: [
      { jp: "来月[らいげつ]大阪[おおさか]へ転勤[てんきん]することになりました。", en: "It has been decided that I will be transferred to Osaka next month." },
      { jp: "来週[らいしゅう]会議[かいぎ]があることになっています。", en: "It is arranged that there is a meeting next week." },
      { jp: "この学校[がっこう]では四月[しがつ]に入学式[にゅうがくしき]を行[おこな]うことになっている。", en: "It is the rule of this school to hold an entrance ceremony in April." }
    ],
    notes:
      "ことになる often conveys an externally reached decision. ことになっている implies a standing rule or arrangement. Contrast with ことにする, where the speaker actively chooses.",
    related: ["gmn4-L38-01", "gmn4-L38-03"]
  },

  {
    id: "gmn4-L38-03",
    point: "〜ということだ",
    reading: "〜ということだ",
    level: "N4",
    category: "Modifying",
    lesson: 38,
    meaning: "It means that... / I heard that... (explanation or hearsay)",
    structure: "普通体 + ということだ",
    explanation:
      "〜ということだ has two uses: (1) explanation of meaning ('it means that...'), and (2) hearsay ('I heard that...'). It is more formal than 〜そうだ (hearsay) and often used in written or news-style reports.",
    formation:
      "Meaning: 普通体 + ということだ (つまり、行[い]かないということだ)\nHearsay: 普通体 + ということだ (彼[かれ]が来[く]るということだ)\nFormal alt: 〜とのことです (polite closing in letters)\nNoun phrase: 〜という + N (田中[たなか]という人[ひと])",
    examples: [
      { jp: "彼[かれ]は来年[らいねん]結婚[けっこん]するということだ。", en: "I heard that he is getting married next year." },
      { jp: "「保留[ほりゅう]」は、まだ決[き]まらないということです。", en: "'Pending' means it is not yet decided." },
      { jp: "山田[やまだ]さんは病気[びょうき]で休[やす]むとのことでした。", en: "I was told that Mr. Yamada is taking a day off due to illness." }
    ],
    notes:
      "As hearsay 〜ということだ is more formal/written than 〜そうだ. As explanation, it summarizes the meaning of a preceding statement. 〜とのことです is the standard polite closing in business letters.",
    related: ["gmn4-L38-01", "gmn4-L38-02", "gmn4-L41-01"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 39 — 〜そう / 〜よう / 〜らしい (appearance)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L39-01",
    point: "〜そうだ (conjecture)",
    reading: "〜そうだ (すいそく)",
    level: "N4",
    category: "Modifying",
    lesson: 39,
    meaning: "Looks like... / seems... (based on appearance)",
    structure: "V-ます stem + そうだ / I-adj stem + そうだ / Na-adj stem + そうだ",
    explanation:
      "〜そうだ (conjecture) expresses an inference based on visual or direct impression: 'it looks like...'. It attaches to the stem (ます stem for verbs, 〜く stem for i-adjectives, 〜だ→ for na-adjectives).",
    formation:
      "Verb: V-ます stem + そうだ (降[ふ]りそう, できそう)\nI-adj: I-adj stem + そうだ (寒[さむ]→寒[さむ]そう, 高[たか]→高[たか]そう; いい→よさそう)\nNa-adj: Na-adj stem + そうだ (静[しず]か→静[しず]かそう, 元気[げんき]→元気[げんき]そう)\nNegative: V-そうにない / 〜なさそう",
    examples: [
      { jp: "空[そら]が暗[くら]くなって、雨[あめ]が降[ふ]りそうだ。", en: "The sky is getting dark; it looks like it will rain." },
      { jp: "このケーキは美味[おい]しそうだ。", en: "This cake looks delicious." },
      { jp: "彼[かれ]は元気[げんき]そうに見[み]える。", en: "He looks healthy." }
    ],
    notes:
      "Conjecture そうだ (this lesson) differs from hearsay そうです (L41), which quotes someone else. Conjecture form: stem + そう; hearsay: plain form + そうです. Watch いい→よさそう, ない→なさそう (irregular).",
    related: ["gmn4-L39-02", "gmn4-L39-03", "gmn4-L41-01"]
  },

  {
    id: "gmn4-L39-02",
    point: "〜ようだ (conjecture)",
    reading: "〜ようだ (すいそく)",
    level: "N4",
    category: "Modifying",
    lesson: 39,
    meaning: "It seems that... / it appears that... (inference from evidence)",
    structure: "普通体 + ようだ (N + のようだ, Na-adj + なようだ)",
    explanation:
      "〜ようだ expresses a conjecture or inference based on sensory evidence or objective information: 'it seems that...'. It is more analytical than そうだ (which is based on direct visual impression).",
    formation:
      "Verb/I-adj: 普通体 + ようだ (降[ふ]るようだ, 寒[さむ]いようだ)\nNoun: N + の + ようだ (学生[がくせい]のようだ)\nNa-adj: Na-adj + な + ようだ (静[しず]かなようだ)\nPolite: 〜ようです\nPast conjecture: 〜ようだった",
    examples: [
      { jp: "道[みち]が濡[ぬ]れている。昨夜[ゆうべ]雨[あめ]が降[ふ]ったようだ。", en: "The road is wet. It seems it rained last night." },
      { jp: "あの人[ひと]は学生[がくせい]のようだ。", en: "That person seems to be a student." },
      { jp: "彼[かれ]は忙[いそが]しいようですね。", en: "It seems he is busy." }
    ],
    notes:
      "ようだ is based on inference from evidence (wet road → it rained). そうだ is based on direct appearance (dark sky → it will rain). ようだ also serves for simile: 雪[ゆき]のように白[しろ]い.",
    related: ["gmn4-L39-01", "gmn4-L39-03"]
  },

  {
    id: "gmn4-L39-03",
    point: "〜らしい (conjecture)",
    reading: "〜らしい (すいそく)",
    level: "N4",
    category: "Modifying",
    lesson: 39,
    meaning: "It seems that... / appears to be... (based on hearsay or typicality)",
    structure: "普通体 + らしい (N + らしい, Na-adj stem + らしい)",
    explanation:
      "〜らしい expresses conjecture based on hearsay or objective evidence: 'I heard that... / it appears that...'. It can also express typicality: 'typical of a...' (男らしい, 春らしい).",
    formation:
      "Verb/I-adj: 普通体 + らしい (降[ふ]るらしい, 寒[さむ]いらしい)\nNoun: N + らしい (学生[がくせい]らしい, 春[はる]らしい)\nNa-adj: Na-adj stem + らしい (静[しず]かなりしい — rare)\nPolite: 〜らしいです",
    examples: [
      { jp: "天気[てんき]予報[よほう]によると、明日[あした]は雨[あめ]が降[ふ]るらしい。", en: "According to the forecast, it will rain tomorrow." },
      { jp: "彼[かれ]は先生[せんせい]らしい。", en: "He seems to be a teacher." },
      { jp: "今日[きょう]は春[はる]らしい暖[あたた]かい日[ひ]だ。", en: "Today is a warm day typical of spring." }
    ],
    notes:
      "らしい is based on objective hearsay or characteristic. あの子[こ]は子供[こども]らしい means 'that child behaves like a typical child'. Distinct from ようだ (inference) and そうだ (appearance).",
    related: ["gmn4-L39-01", "gmn4-L39-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 40 — 〜ば / 〜なら (condition)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L40-01",
    point: "〜ば (conditional)",
    reading: "〜ば (じょうけん)",
    level: "N4",
    category: "Conditionals",
    lesson: 40,
    meaning: "If... (general conditional, hypothetical)",
    structure: "Group I: V-え段 + ば; Group II: V-れ + ば; する→すれば; くる→くれば",
    explanation:
      "〜ば forms a general conditional ('if...'). It focuses on the relationship between conditions and outcomes, often for hypothetical or recurrent situations. It cannot be used for commands or invitations in the main clause.",
    formation:
      "Group I: V-え段 + ば (書[か]く→書[か]けば, 飲[の]む→飲[の]めば, 待[ま]つ→待[ま]てば)\nGroup II: V-れ + ば (食[た]べる→食[た]べれば, 見[み]る→見[み]れば)\nする → すれば, 来[く]る → 来[く]れば\nI-adj: 〜けれ + ば (寒[さむ]い→寒[さむ]ければ)\nNoun/Na-adj: 〜なら + ば (学生[がくせい]ならば)",
    examples: [
      { jp: "天気[てんき]がよければ、出[で]かけよう。", en: "If the weather is good, let's go out." },
      { jp: "安[やす]ければ買[か]います。", en: "If it is cheap, I will buy it." },
      { jp: "時間[じかん]があれば、手伝[てつだ]います。", en: "If I have time, I will help." }
    ],
    notes:
      "〜ば is for hypothetical conditions. The main clause cannot be a command or suggestion with V-ば (× 行けば行きなさい). With i-adjectives and ある, use 〜ければ. For nouns and na-adjectives, なら is preferred.",
    related: ["gmn4-L40-02", "gmn4-L40-03"]
  },

  {
    id: "gmn4-L40-02",
    point: "〜なら",
    reading: "〜なら",
    level: "N4",
    category: "Conditionals",
    lesson: 40,
    meaning: "If it is the case that... / as for...",
    structure: "N + なら / V-普通体 + なら / Na-adj + なら",
    explanation:
      "〜なら forms a conditional based on a topic already raised: 'if (you say) it is X, then...'. It takes the presupposition as given and offers a comment. Common in advice: 'if you're going to X, then Y'.",
    formation:
      "Noun: N + なら (学生[がくせい]なら)\nVerb: V-普通体 + なら (行[い]くなら, 行[い]かないなら)\nI-adj: I-adj + なら (寒[さむ]いなら)\nNa-adj: Na-adj + なら (静[しず]かなら)\nPast topic: V-た + なら",
    examples: [
      { jp: "日本[にほん]へ行[い]くなら、新幹線[しんかんせん]が便利[べんり]です。", en: "If you're going to Japan, the shinkansen is convenient." },
      { jp: "飲[の]み物[もの]なら、お茶[ちゃ]があります。", en: "If it's a drink you want, we have tea." },
      { jp: "忙[いそが]しいなら、後[あと]でいい。", en: "If you're busy, later is fine." }
    ],
    notes:
      "なら takes the condition as already established. It is natural for advice (行くなら、これがいい). Unlike ば/たら, なら can be followed by commands or suggestions: 行くなら、早く行きなさい.",
    related: ["gmn4-L40-01", "gmn4-L40-03"]
  },

  {
    id: "gmn4-L40-03",
    point: "〜ば〜ほど",
    reading: "〜ば〜ほど",
    level: "N4",
    category: "Conditionals",
    lesson: 40,
    meaning: "The more... the more... (proportional condition)",
    structure: "V-ば + V-辞書形 + ほど / I-adj-ければ + I-adj + ほど",
    explanation:
      "〜ば〜ほど expresses a proportional relationship: 'the more X, the more Y'. The same verb/adjective appears twice, once in the ば form and once in plain form before ほど. It indicates a parallel increase or decrease.",
    formation:
      "Verb: V-ば + V-辞書形 + ほど (読[よ]めば読[よ]むほど)\nI-adj: I-adj-ければ + I-adj + ほど (高[たか]ければ高[たか]いほど)\nNa-adj: Na-adj + なら + Na-adj + な + ほど (静[しず]かなら静[しず]かなほど)\nNoun: N + なら + N + であるほど",
    examples: [
      { jp: "読[よ]めば読[よ]むほど面白[おもしろ]くなる。", en: "The more I read, the more interesting it becomes." },
      { jp: "高[たか]ければ高[たか]いほどいい。", en: "The more expensive, the better." },
      { jp: "早[はや]ければ早[はや]いほど好[す]きだ。", en: "The faster it is, the more I like it." }
    ],
    notes:
      "The ば and ほど clauses must use the same verb/adjective. In casual speech the ば clause can be omitted: 読むほど面白[おもしろ]くなる. Used for both increasing (more → more) and inverse relationships.",
    related: ["gmn4-L40-01", "gmn4-L40-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 41 — 〜そうだ (hearsay)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L41-01",
    point: "〜そうです (hearsay)",
    reading: "〜そうです (でんぶん)",
    level: "N4",
    category: "Modifying",
    lesson: 41,
    meaning: "I heard that... / they say that... (reported information)",
    structure: "普通体 + そうです",
    explanation:
      "〜そうです (hearsay) reports information obtained from someone else: 'I hear that...'. It attaches to the plain form. Unlike conjecture そうだ (L39), it is based on external information rather than direct impression.",
    formation:
      "Affirmative: 普通体 + そうです (来[く]るそうです, 寒[さむ]いそうです, 学生[がくせい]だそうです)\nNegative: 普通体ない + そうです (来[こ]ないそうです)\nPast: 普通体た + そうです (降[ふ]ったそうです)\nWith source: 〜によると / 〜の話[はなし]では + そうです",
    examples: [
      { jp: "天気[てんき]予報[よほう]によると、明日[あした]は雨[あめ]が降[ふ]るそうです。", en: "According to the forecast, it will rain tomorrow." },
      { jp: "田中[たなか]さんは来週[らいしゅう]大阪[おおさか]へ行[い]くそうです。", en: "I heard Mr. Tanaka is going to Osaka next week." },
      { jp: "彼[かれ]の話[はなし]では、試験[しけん]は難[むずか]しかったそうです。", en: "According to him, the exam was difficult." }
    ],
    notes:
      "Hearsay そうです attaches to the plain form (降るそうです). Conjecture そうだ attaches to the stem (降りそうだ). They are written the same in 漢字仮名 but distinguished by the form: plain+そう vs stem+そう. Hearsay has no negative stem form.",
    related: ["gmn4-L41-02", "gmn4-L39-01", "gmn4-L38-03"]
  },

  {
    id: "gmn4-L41-02",
    point: "〜って (colloquial hearsay)",
    reading: "〜って (かいわ・でんぶん)",
    level: "N4",
    category: "Modifying",
    lesson: 41,
    meaning: "I heard that... / said that... (casual quote marker)",
    structure: "普通体 + って",
    explanation:
      "In casual conversation, って replaces the quotation particle と before 言う, 聞く, 思う, or そうです. It also stands alone at sentence end to mark hearsay: 'I heard that...'. Common in spoken Japanese.",
    formation:
      "Hearsay alone: 普通体 + って (来[く]るって)\nBefore 言う/聞く: 普通体 + って + 言[い]う/聞[き]く (来[く]るって言[い]った)\nAs topic: N + って (田中[たなか]って、誰[だれ]？)\nSofter: 〜って聞[き]いた / 〜ってこと",
    examples: [
      { jp: "田中[たなか]さんは明日[あした]来[く]るって。", en: "I heard Tanaka is coming tomorrow." },
      { jp: "彼[かれ]は忙[いそが]しいって言[い]っていた。", en: "He said he was busy." },
      { jp: "あした雨[あめ]だって聞[き]いたよ。", en: "I heard it will rain tomorrow." }
    ],
    notes:
      "って is the spoken equivalent of と in quotative use. It cannot be used in formal writing. Two distinct roles: (1) hearsay at sentence end, (2) casual topic (cf. という/とは). Often 〜ってこと or 〜って話[はなし] adds emphasis.",
    related: ["gmn4-L41-01", "gmn4-L44-03"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 42 — 〜べき / 〜ばよかった (should/regret)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L42-01",
    point: "〜べきだ / べきではない",
    reading: "〜べきだ / べきではない",
    level: "N4",
    category: "Obligation",
    lesson: 42,
    meaning: "Should... / ought to... (moral or rational obligation)",
    structure: "V-辞書形 + べきだ / する → するべき (or すべき)",
    explanation:
      "〜べきだ expresses an obligation or recommendation based on moral, rational, or general principle: 'one should...'. The negative べきではない means 'should not'. It is more formal and stronger than ほうがいい.",
    formation:
      "Affirmative: V-辞書形 + べきだ (行[い]くべきだ, 考[かんが]えるべきだ)\nする special: するべきだ / すべきだ (both correct; すべき more formal)\nNegative: V-辞書形 + べきではない (行[い]くべきではない)\nNoun modifier: V-辞書形 + べき + N (読[よ]むべき本[ほん])\nPast: べきだった (should have — L47)",
    examples: [
      { jp: "若[わか]い人[ひと]はお年寄[としよ]りを尊敬[そんけい]すべきだ。", en: "Young people should respect the elderly." },
      { jp: "悪[わる]いと思[おも]ったら、謝[あやま]るべきだ。", en: "If you think you are wrong, you should apologize." },
      { jp: "そんなことを言[い]うべきではなかった。", en: "You should not have said such a thing." }
    ],
    notes:
      "べきだ implies a strong sense of what ought to be done based on principle. For softer advice use ほうがいい. べきだった (past) conveys regret: 'should have done'. すべき is the formal variant of するべき.",
    related: ["gmn4-L42-02", "gmn4-L42-03", "gmn4-L47-01"]
  },

  {
    id: "gmn4-L42-02",
    point: "〜ばよかった",
    reading: "〜ばよかった",
    level: "N4",
    category: "Conditionals",
    lesson: 42,
    meaning: "I should have... / it would have been better if... (regret)",
    structure: "V-ば + よかった / I-adj-ければ + よかった",
    explanation:
      "〜ばよかった expresses regret over an unrealized action: 'I should have...'. The conditional ば + past よかった implies that had the condition been met, the outcome would have been better.",
    formation:
      "Verb: V-ば + よかった (行[い]けばよかった, 食[た]べればよかった)\nI-adj: I-adj-ければ + よかった (安[やす]ければよかった)\nNegative regret: V-なければ + よかった (行[い]かなければよかった — shouldn't have)\nNoun: 〜なら + よかった",
    examples: [
      { jp: "もっと勉強[べんきょう]すればよかった。", en: "I wish I had studied more." },
      { jp: "あの時[とき]、医者[いしゃ]に行[い]けばよかった。", en: "I should have gone to the doctor then." },
      { jp: "買[か]わなければよかった。", en: "I shouldn't have bought it." }
    ],
    notes:
      "ばよかった conveys regret: speaker reflects on a past action that was not taken (or was taken) and wishes otherwise. Contrast with べきだった (L47), which is stronger and more judgmental.",
    related: ["gmn4-L42-01", "gmn4-L42-03", "gmn4-L47-02"]
  },

  {
    id: "gmn4-L42-03",
    point: "〜たらよかった",
    reading: "〜たらよかった",
    level: "N4",
    category: "Conditionals",
    lesson: 42,
    meaning: "I should have... (regret, alternative to 〜ばよかった)",
    structure: "V-た + ら + よかった",
    explanation:
      "〜たらよかった is an alternative to 〜ばよかった for expressing regret: 'it would have been better if I had...'. たら emphasizes a specific past moment more strongly than ば, which is more general.",
    formation:
      "Affirmative: V-た + ら + よかった (行[い]ったらよかった)\nNegative: V-なかった + ら + よかった (行[い]かなかったらよかった)\nI-adj: I-adj-かった + ら + よかった (安[やす]かったらよかった)\nPolite regret: 〜たらよかったです / 〜ばよかったです",
    examples: [
      { jp: "昨日[きのう]、もっと早[はや]く起[お]きたらよかった。", en: "I should have woken up earlier yesterday." },
      { jp: "彼[かれ]に相談[そうだん]したらよかった。", en: "I should have consulted him." },
      { jp: "あの仕事[しごと]を受[う]けなかったらよかった。", en: "I shouldn't have accepted that job." }
    ],
    notes:
      "たらよかった is more conversational than べきだった. ばよかった tends to be slightly more formal/general, たらよかった more specific to a particular past event. Both convey regret over past action.",
    related: ["gmn4-L42-01", "gmn4-L42-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 43 — 〜のに / 〜はず (unexpected, expectation)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L43-01",
    point: "〜のに (unexpected)",
    reading: "〜のに (ふきそく)",
    level: "N4",
    category: "Conjunctions",
    lesson: 43,
    meaning: "Even though... (unexpected / contrary to expectation)",
    structure: "普通体 + のに (Na-adj/N: 〜なのに)",
    explanation:
      "〜のに joins two clauses where the second is unexpected given the first ('even though A, B'). It conveys the speaker's feeling of surprise, disappointment, or complaint. The first clause states an actual fact, not a hypothetical.",
    formation:
      "Verb: V-普通体 + のに (降[ふ]っているのに, 来[こ]ないのに)\nI-adj: 〜い + のに (寒[さむ]いのに, 高[たか]いのに)\nNa-adj/Noun: 〜な + のに (静[しず]かなのに, 子供[こども]なのに)\nPast: V-た + のに",
    examples: [
      { jp: "約束[やくそく]したのに、来[こ]なかった。", en: "Even though he promised, he didn't come." },
      { jp: "高[たか]いのに、美味[おい]しくない。", en: "Even though it's expensive, it doesn't taste good." },
      { jp: "毎日[まいにち]練習[れんしゅう]しているのに、上手[じょうず]にならない。", en: "Even though I practice every day, I don't improve." }
    ],
    notes:
      "のに presupposes the truth of the first clause (unlike ば/たら, which are hypothetical). The nuance is one of complaint or surprise. が and けれども are more neutral; のに carries emotive weight.",
    related: ["gmn4-L43-02", "gmn4-L43-03", "gmn4-L30-03"]
  },

  {
    id: "gmn4-L43-02",
    point: "〜はずだ",
    reading: "〜はずだ",
    level: "N4",
    category: "Modifying",
    lesson: 43,
    meaning: "It is expected that... / should be... (logical expectation)",
    structure: "普通体 + はずだ (Na-adj/N: 〜なはずだ, N + のはずだ)",
    explanation:
      "〜はずだ expresses a strong expectation based on logic, evidence, or common knowledge: 'it is supposed to be / should be...'. It implies the speaker is confident in the inference.",
    formation:
      "Verb: 普通体 + はずだ (来[く]るはずだ, 行[い]ったはずだ)\nI-adj: 〜い + はずだ (寒[さむ]いはずだ)\nNa-adj: Na-adj + な + はずだ (静[しず]かなはずだ)\nNoun: N + の + はずだ (学生[がくせい]のはずだ)\nPolite: 〜はずです",
    examples: [
      { jp: "彼[かれ]はもう着[つ]いているはずだ。", en: "He should have arrived by now." },
      { jp: "この料理[りょうり]は辛[から]いはずだ。", en: "This dish should be spicy." },
      { jp: "会議[かいぎ]は三時[さんじ]からのはずです。", en: "The meeting should start at three." }
    ],
    notes:
      "はずだ expresses logical expectation based on reasoning, not direct perception. Contrast with ようだ (inference from appearance) and そうだ (visual conjecture). はずだった (past) often implies the expectation was unfulfilled.",
    related: ["gmn4-L43-01", "gmn4-L43-03"]
  },

  {
    id: "gmn4-L43-03",
    point: "〜はずがない",
    reading: "〜はずがない",
    level: "N4",
    category: "Modifying",
    lesson: 43,
    meaning: "Cannot be... / there is no way that... (strong denial)",
    structure: "普通体 + はずがない",
    explanation:
      "〜はずがない is the negative counterpart of はずだ: 'there is no way that... / it cannot be that...'. It expresses strong confidence that something is not the case.",
    formation:
      "Verb/I-adj: 普通体 + はずがない (来[く]るはずがない, 寒[さむ]いはずがない)\nNa-adj: Na-adj + な + はずがない (静[しず]かなはずがない)\nNoun: N + の + はずがない (学生[がくせい]のはずがない)\nPolite: 〜はずがありません",
    examples: [
      { jp: "彼[かれ]がそんなことを言[い]うはずがない。", en: "There is no way he would say such a thing." },
      { jp: "この時計[とけい]は新[あたら]しいから、壊[こわ]れているはずがない。", en: "This clock is new, so it cannot be broken." },
      { jp: "彼女[かのじょ]はまだ子供[こども]なのに、結婚[けっこん]するはずがない。", en: "She is still a child; there is no way she is getting married." }
    ],
    notes:
      "はずがない is stronger than ないだろう. It implies logical impossibility. For softer denial use わけがない (slightly more emphatic) or simply 〜ないと思います.",
    related: ["gmn4-L43-01", "gmn4-L43-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 44 — conversation flow
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L44-01",
    point: "〜んです / 〜のだ",
    reading: "〜んです / 〜のだ",
    level: "N4",
    category: "Modifying",
    lesson: 44,
    meaning: "Explanatory tone / the situation is that...",
    structure: "普通体 + んだ / のだ (polite: 〜んです / 〜のです)",
    explanation:
      "〜んです (polite) / 〜んだ (casual) is the explanatory form of のだ. It adds an explanatory, emotive, or situation-establishing nuance: 'the fact is that...'. Used to seek understanding, give reasons, or preface an explanation.",
    formation:
      "Verb/I-adj: 普通体 + んだ / のだ (行[い]くんだ, 寒[さむ]いんだ)\nNoun/Na-adj: 〜な + んだ / のだ (学生[がくせい]なんだ, 静[しず]かなんだ)\nPolite: 〜んです / 〜のです (行[い]くんです)\nNegative: 普通体ない + んだ (来[こ]ないんだ)\nQuestion: 〜んですか (seeking explanation)",
    examples: [
      { jp: "すみません、頭[あたま]が痛[いた]いんです。", en: "Sorry, I have a headache. (explaining)" },
      { jp: "どうして遅[おく]れたんですか。", en: "Why were you late? (asking for explanation)" },
      { jp: "明日[あした]は休[やす]みなんだ。", en: "Tomorrow is a day off. (sharing info)" }
    ],
    notes:
      "んです softens statements by establishing shared context. In questions it seeks an explanation (どうして〜んですか = 'why is it that...'). Common in conversation; formal version is のだ in writing.",
    related: ["gmn4-L44-02", "gmn4-L44-03"]
  },

  {
    id: "gmn4-L44-02",
    point: "〜かしら / 〜かな",
    reading: "〜かしら / 〜かな",
    level: "N4",
    category: "Modifying",
    lesson: 44,
    meaning: "I wonder... (casual question to oneself)",
    structure: "普通体 + かしら (female) / かな (male or neutral)",
    explanation:
      "〜かしら (typically female speech) and 〜かな (typically male/neutral) express self-directed wondering or a soft question: 'I wonder if...'. They often replace 〜か in casual conversation.",
    formation:
      "Female: 普通体 + かしら (来[く]るかしら, いいかしら)\nMale/neutral: 普通体 + かな (来[く]るかな, いいかな)\nWith だろう: 〜だろうかな (more wondering)\nSofter: 〜かなあ (with long vowel)",
    examples: [
      { jp: "彼[かれ]、来[く]るかしら。", en: "I wonder if he will come. (female)" },
      { jp: "明日[あした]は天気[てんき]がいいかな。", en: "I wonder if the weather will be good tomorrow." },
      { jp: "どうしようかな。", en: "I wonder what I should do." }
    ],
    notes:
      "かしら is associated with feminine speech, かな with masculine or general. Both can be used rhetorically without expecting an answer. Long vowel かなあ or かしらあ softens the wondering tone.",
    related: ["gmn4-L44-01", "gmn4-L44-03"]
  },

  {
    id: "gmn4-L44-03",
    point: "〜でしょう / 〜だろう (probably)",
    reading: "〜でしょう / 〜だろう (すいそく)",
    level: "N4",
    category: "Modifying",
    lesson: 44,
    meaning: "Probably... / I suppose... (soft conjecture or confirmation)",
    structure: "普通体 + でしょう (polite) / だろう (casual)",
    explanation:
      "〜でしょう (polite) and 〜だろう (casual) express a soft conjecture ('probably, I suppose') or seek confirmation ('..., right?'). They soften assertions in conversation.",
    formation:
      "Polite: 普通体 + でしょう (来[く]るでしょう, 寒[さむ]いでしょう)\nCasual: 普通体 + だろう (来[く]るだろう, 寒[さむ]いだろう)\nNoun/Na-adj: N + でしょう / N + だろう (学生[がくせい]でしょう)\nVolitional: V-意向形 + とする (related)",
    examples: [
      { jp: "明日[あした]は雨[あめ]が降[ふ]るでしょう。", en: "It will probably rain tomorrow." },
      { jp: "彼[かれ]はもう来[き]たでしょう。", en: "He has probably already come." },
      { jp: "この仕事[しごと]は難[むずか]しいだろう。", en: "This work is probably difficult." }
    ],
    notes:
      "でしょう is the polite counterpart of だろう. As a question (〜でしょう?), it seeks agreement. Distinct from conjecture そうだ (visual) and ようだ (evidence-based); でしょう/だろう is a softer judgment.",
    related: ["gmn4-L44-01", "gmn4-L44-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 45 — 〜かもしれない / 〜にちがいない (certainty)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L45-01",
    point: "〜かもしれない",
    reading: "〜かもしれない",
    level: "N4",
    category: "Modifying",
    lesson: 45,
    meaning: "May / might / perhaps (low certainty possibility)",
    structure: "普通体 + かもしれない (N + かもしれない, Na-adj stem + かもしれない)",
    explanation:
      "〜かもしれない expresses a possibility with relatively low certainty: 'might, may, perhaps'. It indicates the speaker thinks something is possible but is not confident. Polite form: かもしれません.",
    formation:
      "Verb/I-adj: 普通体 + かもしれない (来[く]るかもしれない, 寒[さむ]いかもしれない)\nNoun: N + かもしれない (学生[がくせい]かもしれない)\nNa-adj: Na-adj stem + かもしれない (静[しず]かかもしれない)\nPolite: 〜かもしれません\nPast: 普通体た + かもしれない",
    examples: [
      { jp: "明日[あした]は雪[ゆき]が降[ふ]るかもしれない。", en: "It might snow tomorrow." },
      { jp: "彼[かれ]はもう帰[かえ]ったかもしれません。", en: "He might have already gone home." },
      { jp: "あの人[ひと]は医者[いしゃ]かもしれない。", en: "That person might be a doctor." }
    ],
    notes:
      "かもしれない expresses lower certainty than でしょう/だろう. The degree of possibility is roughly 50% or less. Often preceded by もしかすると / ひょっとすると (perhaps) for emphasis.",
    related: ["gmn4-L45-02", "gmn4-L45-03"]
  },

  {
    id: "gmn4-L45-02",
    point: "〜にちがいない",
    reading: "〜にちがいない",
    level: "N4",
    category: "Modifying",
    lesson: 45,
    meaning: "I'm sure that... / definitely... (strong certainty)",
    structure: "普通体 + にちがいない (N + にちがいない, Na-adj stem + にちがいない)",
    explanation:
      "〜にちがいない expresses strong certainty based on reasoning or evidence: 'I'm sure that... / definitely...'. The speaker is confident in the inference. Polite form: 〜にちがいありません.",
    formation:
      "Verb/I-adj: 普通体 + にちがいない (来[く]るにちがいない, 寒[さむ]いにちがいない)\nNoun: N + にちがいない (学生[がくせい]にちがいない)\nNa-adj: Na-adj stem + にちがいない (静[しず]かにちがいない)\nPolite: 〜にちがいありません\nPast: 普通体た + にちがいない",
    examples: [
      { jp: "彼[かれ]は犯人[はんにん]にちがいない。", en: "He is definitely the culprit." },
      { jp: "明日[あした]の試合[しあい]は勝[か]つにちがいない。", en: "They will definitely win tomorrow's match." },
      { jp: "あの二人[ふたり]は夫婦[ふうふ]にちがいありません。", en: "Those two are definitely married." }
    ],
    notes:
      "にちがいない expresses stronger certainty than はずだ (logical expectation). It carries subjective confidence. Often paired with 絶対[ぜったい]に (absolutely) or きっと (surely) for emphasis.",
    related: ["gmn4-L45-01", "gmn4-L45-03"]
  },

  {
    id: "gmn4-L45-03",
    point: "きっと / おそらく (adverbs of certainty)",
    reading: "きっと / おそらく",
    level: "N4",
    category: "Modifying",
    lesson: 45,
    meaning: "Surely / probably (adverbs expressing certainty levels)",
    structure: "きっと / おそらく / たぶん + predicate",
    explanation:
      "Adverbs of certainty modify the predicate to express the speaker's level of confidence. きっと = high certainty (surely); おそらく = mid-high (probably); たぶん = mid (likely); もしかしたら = low (perhaps).",
    formation:
      "High: きっと + ...だろう / ...にちがいない\nMid-high: おそらく + ...だろう\nMid: たぶん + ...だろう\nLow: もしかしたら / ひょっとすると + ...かもしれない",
    examples: [
      { jp: "彼[かれ]はきっと成功[せいこう]するだろう。", en: "He will surely succeed." },
      { jp: "おそらく彼[かれ]は来[こ]ないだろう。", en: "He probably won't come." },
      { jp: "たぶん明日[あした]は晴[は]れるだろう。", en: "It will probably be sunny tomorrow." }
    ],
    notes:
      "These adverbs pair with the matching conjecture form: きっと→にちがいない/だろう, たぶん→だろう, もしかしたら→かもしれない. Mixing them with mismatched endings sounds unnatural.",
    related: ["gmn4-L45-01", "gmn4-L45-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 46 — 〜ておく / 〜てしまう (completion)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L46-01",
    point: "〜ておく",
    reading: "〜ておく",
    level: "N4",
    category: "Verb forms",
    lesson: 46,
    meaning: "Do in advance / leave as is (for future use)",
    structure: "V-て + おく",
    explanation:
      "〜ておく indicates performing an action in advance for future convenience, or leaving a result as is for later use: 'do something in advance / leave something done'. The focus is on preparation or intentional non-restoration.",
    formation:
      "Pattern: V-て + おく (買[か]っておく, 書[か]いておく)\nPolite: V-て + おきます\nPast: V-て + おいた\nNegative: V-て + おかない (didn't do in advance)\nColloquial: V-とく (買[か]っとく)",
    examples: [
      { jp: "お客[きゃく]さんが来[く]る前[まえ]に、部屋[へや]を掃除[そうじ]しておく。", en: "I will clean the room before the guests arrive." },
      { jp: "明日[あした]の資料[しりょう]を準備[じゅんび]しておきました。", en: "I prepared tomorrow's materials in advance." },
      { jp: "電気[でんき]を消[け]さないで、つけておいてください。", en: "Please leave the light on (don't turn it off)." }
    ],
    notes:
      "ておく has two main senses: (1) do something in advance (preparation), (2) leave a state as is for later use. The contracted form とく is common in casual speech (買っとく).",
    related: ["gmn4-L46-02", "gmn4-L46-03"]
  },

  {
    id: "gmn4-L46-02",
    point: "〜てしまう",
    reading: "〜てしまう",
    level: "N4",
    category: "Verb forms",
    lesson: 46,
    meaning: "Finish doing / do completely (often with regret)",
    structure: "V-て + しまう",
    explanation:
      "〜てしまう has two senses: (1) completion of an action ('finish doing, do completely'), and (2) regret over an unintended action ('I ended up doing, unfortunately did'). The second use conveys a sense of loss or regret.",
    formation:
      "Pattern: V-て + しまう (食[た]べてしまう, 忘[わす]れてしまう)\nPolite: V-て + しまいます\nPast: V-て + しまった (regret common in past)\nNegative: V-て + しまわない (won't finish completing)\nColloquial: V-ちゃう (食[た]べちゃう)",
    examples: [
      { jp: "ケーキを全部[ぜんぶ]食[た]べてしまった。", en: "I ate all the cake (regret / completion)." },
      { jp: "財布[さいふ]を忘[わす]れてしまった。", en: "I forgot my wallet (unfortunately)." },
      { jp: "今[いま]のうちに宿題[しゅくだい]をやってしまおう。", en: "Let's finish the homework now while we can." }
    ],
    notes:
      "てしまう often conveys regret when in the past: 忘れてしまった (I unfortunately forgot). In non-past it usually means finishing or completing an action. The casual form ちゃう/じゃう is very common in speech.",
    related: ["gmn4-L46-01", "gmn4-L46-03"]
  },

  {
    id: "gmn4-L46-03",
    point: "〜ちゃう / 〜じゃう (colloquial)",
    reading: "〜ちゃう / 〜じゃう",
    level: "N4",
    category: "Verb forms",
    lesson: 46,
    meaning: "End up doing / finish doing (casual contraction of 〜てしまう)",
    structure: "V-て → 〜ちゃう (Group I: V-て → ちゃう); V-で → 〜じゃう",
    explanation:
      "〜ちゃう / 〜じゃう are colloquial contractions of 〜てしまう / 〜でしまう. They are common in casual speech and retain the two meanings: completion ('finish doing') and regret ('end up doing').",
    formation:
      "Group I (V-て): 飲[の]んでしまう → 飲[の]んじゃう, 書[か]いてしまう → 書[か]いちゃう\nGroup II: 食[た]べてしまう → 食[た]べちゃう\nする → しちゃう, 来[く]る → きちゃう\nPast: 〜ちゃった / 〜じゃった\nNegative: 〜ちゃわない / 〜じゃわない",
    examples: [
      { jp: "ケーキを全部[ぜんぶ]食[た]べちゃった。", en: "I ate all the cake (casual, regret)." },
      { jp: "宿題[しゅくだい]をやっちゃおう。", en: "Let's finish the homework." },
      { jp: "彼[かれ]はもう帰[かえ]っちゃったよ。", en: "He already went home." }
    ],
    notes:
      "ちゃう/じゃう is informal — avoid in business or formal writing. The contraction rule: V-て → ちゃう (i-ending verbs), V-で → じゃう (n/b/m-ending verbs). Past: ちゃった, じゃった.",
    related: ["gmn4-L46-01", "gmn4-L46-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 47 — 〜べきだった (should have)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L47-01",
    point: "〜べきだった / べきではなかった",
    reading: "〜べきだった / べきではなかった",
    level: "N4",
    category: "Obligation",
    lesson: 47,
    meaning: "Should have... / should not have... (past obligation, regret)",
    structure: "V-辞書形 + べきだった / V-辞書形 + べきではなかった",
    explanation:
      "〜べきだった (past of べきだ) expresses regret or judgment about a past action: 'I should have done...'. The negative べきではなかった means 'should not have done...'. It carries a stronger critical tone than 〜ばよかった.",
    formation:
      "Affirmative: V-辞書形 + べきだった (行[い]くべきだった)\nNegative: V-辞書形 + べきではなかった (言[い]うべきではなかった)\nする: するべきだった / すべきだった (both correct)\nPolite: べきでした / べきではありませんでした\nNoun modifier: V-辞書形 + べきだった + N",
    examples: [
      { jp: "もっと早[はや]く医者[いしゃ]に行[い]くべきだった。", en: "I should have gone to the doctor earlier." },
      { jp: "そんなことを言[い]うべきではなかった。", en: "I should not have said such a thing." },
      { jp: "彼[かれ]にも相談[そうだん]するべきでした。", en: "I should have consulted him too." }
    ],
    notes:
      "べきだった is more judgmental and stronger than ばよかった. The negative べきではなかった conveys criticism of one's own or another's past action. Often used with もっと (more) to express missed opportunity.",
    related: ["gmn4-L47-02", "gmn4-L42-01"]
  },

  {
    id: "gmn4-L47-02",
    point: "〜てよかった / 〜なくてよかった (relief)",
    reading: "〜てよかった / 〜なくてよかった",
    level: "N4",
    category: "Conditionals",
    lesson: 47,
    meaning: "I'm glad I... / I'm glad I didn't... (past relief)",
    structure: "V-て + よかった / V-なくて + よかった",
    explanation:
      "〜てよかった expresses relief or satisfaction about a past action: 'I'm glad I did...'. The negative 〜なくてよかった means 'I'm glad I didn't...'. They convey positive evaluation of a past choice.",
    formation:
      "Affirmative: V-て + よかった (行[い]ってよかった)\nNegative: V-なくて + よかった (行[い]かなくてよかった)\nI-adj: I-adj-くて + よかった (安[やす]くてよかった)\nNoun/Na-adj: N + で / Na-adj + で + よかった\nPolite: 〜てよかったです",
    examples: [
      { jp: "早[はや]く起[お]きてよかった。", en: "I'm glad I woke up early." },
      { jp: "傘[かさ]を持[も]ってきてよかった。", en: "I'm glad I brought an umbrella." },
      { jp: "無理[むり]をしなくてよかった。", en: "I'm glad I didn't push myself." }
    ],
    notes:
      "てよかった is the positive counterpart of ばよかった (regret). It expresses relief or satisfaction, often with emotions like ほっとした (relieved). Past tense よかった is essential.",
    related: ["gmn4-L47-01", "gmn4-L42-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 48 — 〜だけ / 〜ばかり / 〜しか (only)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L48-01",
    point: "〜だけ",
    reading: "〜だけ",
    level: "N4",
    category: "Particles",
    lesson: 48,
    meaning: "Only / just (limiting to a quantity or kind)",
    structure: "N + だけ / V-普通体 + だけ / Quantity + だけ",
    explanation:
      "〜だけ limits the scope: 'only, just'. It can follow nouns, quantities, verbs, or adjectives. Unlike 〜しか, 〜だけ is used with affirmative predicates and has a more neutral tone.",
    formation:
      "Noun: N + だけ (これだけ, 私[わたし]だけ)\nQuantity: 数[すう] + だけ (三人[さんにん]だけ, 一つ[ひとつ]だけ)\nVerb: V-辞書形 + だけ (食[た]べるだけ)\nAdj: I-adj + だけ / Na-adj + な + だけ\nParticle combo: 〜だけ + で (just by)",
    examples: [
      { jp: "部屋[へや]には私[わたし]だけがいた。", en: "Only I was in the room." },
      { jp: "一つ[ひとつ]だけ選[えら]んでください。", en: "Please choose just one." },
      { jp: "彼[かれ]は食[た]べるだけして、片付[かたづ]けない。", en: "He only eats and doesn't clean up." }
    ],
    notes:
      "だけ is neutral and used with affirmative verbs. だけ can attach to almost any part of speech. 〜だけに ('all the more because') and 〜だけあって ('as expected of') are advanced extensions.",
    related: ["gmn4-L48-02", "gmn4-L48-03"]
  },

  {
    id: "gmn4-L48-02",
    point: "〜ばかり",
    reading: "〜ばかり",
    level: "N4",
    category: "Particles",
    lesson: 48,
    meaning: "Only / nothing but / just (with nuance of excess)",
    structure: "N + ばかり / V-て + ばかり + いる / V-辞書形 + ばかり",
    explanation:
      "〜ばかり indicates that something is exclusively or excessively of one kind: 'only, nothing but...'. It often implies the speaker's negative judgment or sense of excess. With verbs, 〜てばかりいる means 'doing nothing but...'.",
    formation:
      "Noun: N + ばかり (甘[あま]いものばかり)\nVerb: V-て + ばかり + いる (食[た]べてばかりいる)\nV-辞書形 + ばかり (行[い]くばかり — 'about to')\nQuantity: 数 + ばかり (三日[みっか]ばかり — about)\nParticle: 〜ばかりで (just and only)",
    examples: [
      { jp: "彼[かれ]は毎日[まいにち]遊[あそ]んでばかりいる。", en: "He does nothing but play every day." },
      { jp: "冷蔵庫[れいぞうこ]には甘[あま]いものばかりある。", en: "There's nothing but sweets in the fridge." },
      { jp: "彼女[かのじょ]は文句[もんく]を言[い]ってばかりいる。", en: "She does nothing but complain." }
    ],
    notes:
      "ばかり implies excess or one-sidedness, often with negative judgment. 〜てばかりいる is the verb pattern. The 'about to' sense (V-辞書形 + ばかり) is rare at N4: 出[で]かけるばかりになっている (just about to leave).",
    related: ["gmn4-L48-01", "gmn4-L48-03"]
  },

  {
    id: "gmn4-L48-03",
    point: "〜しか〜ない",
    reading: "〜しか〜ない",
    level: "N4",
    category: "Particles",
    lesson: 48,
    meaning: "Only / nothing but (with negative predicate, limiting)",
    structure: "N + しか + 否定形",
    explanation:
      "〜しか marks exclusivity when paired with a negative predicate: 'only, nothing but'. Although the predicate is negative, the meaning is positive ('there is only X'). しか is slightly more emphatic than だけ.",
    formation:
      "Noun: N + しか + V-ない (これしかない, 私[わたし]しか来[こ]なかった)\nQuantity: 数 + しか (一つ[ひとつ]しかない)\nVerb: V-辞書形 + しか + できない / ない (待[ま]つしかない)\nWith particle: N + しか + (particle) (東京[とうきょう]へしか行[い]けない)",
    examples: [
      { jp: "私[わたし]の財布[さいふ]には五百円[ごひゃくえん]しかない。", en: "There is only 500 yen in my wallet." },
      { jp: "彼[かれ]しか来[こ]なかった。", en: "Only he came." },
      { jp: "もう謝[あやま]るしかない。", en: "There's nothing to do but apologize." }
    ],
    notes:
      "しか must be followed by a negative predicate. The meaning is positive ('only'). これしかない means 'there is only this'. V-辞書形 + しかない means 'the only thing to do is V'.",
    related: ["gmn4-L48-01", "gmn4-L48-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 49 — 〜ようになる / 〜てある (change of state)
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L49-01",
    point: "〜ようになる",
    reading: "〜ようになる",
    level: "N4",
    category: "Verb forms",
    lesson: 49,
    meaning: "Come to... / reach the state of doing (gradual change)",
    structure: "V-辞書形 / V-ない + ようになる",
    explanation:
      "〜ようになる expresses a gradual change of state or ability: 'come to be able to do / come to do...'. It marks a shift from not doing (or not being able to do) something to doing it. The negative form 〜ないようになる is the reverse change.",
    formation:
      "Affirmative: V-辞書形 + ようになる (話[はな]せるようになる, 行[い]くようになる)\nNegative: V-ない + ようになる (食[た]べないようになる)\nPast: V-辞書形 + ようになった (became able to)\nWith potential: V-潜在形 + ようになる (common: became able to V)",
    examples: [
      { jp: "日本語[にほんご]が話[はな]せるようになった。", en: "I have become able to speak Japanese." },
      { jp: "最近[さいきん]野菜[やさい]を食[た]べるようになった。", en: "Recently I have started eating vegetables." },
      { jp: "彼[かれ]はタバコを吸[す]わないようになった。", en: "He has stopped smoking." }
    ],
    notes:
      "ようになる marks an actual change, contrasting with ようにする (deliberate effort, L32). Often used with potential verbs: 飲めるようになった (became able to drink). Also for habits that started or stopped.",
    related: ["gmn4-L49-02", "gmn4-L49-03", "gmn4-L32-02"]
  },

  {
    id: "gmn4-L49-02",
    point: "〜てある",
    reading: "〜てある",
    level: "N4",
    category: "Verb forms",
    lesson: 49,
    meaning: "Has been done (resultant state, intentional)",
    structure: "V-て + ある (他動詞 only)",
    explanation:
      "〜てある describes a state resulting from someone's intentional action: 'has been done / is in place'. Used with transitive verbs, it focuses on the result existing now. The object is marked by が (or を in casual speech).",
    formation:
      "Pattern: N + が + V-て + ある (ドアが閉[し]めてある)\nPolite: V-て + あります\nPast: V-て + あった (was done — still resulting)\nNegative: V-て + ない (not in the state)\nWith を (casual): N + を + V-てある",
    examples: [
      { jp: "壁[かべ]にポスターが貼[は]ってある。", en: "A poster is put up on the wall. (state)" },
      { jp: "お湯[ゆ]が沸[わ]かしてあります。", en: "The hot water has been boiled. (ready)" },
      { jp: "机[つくえ]の上[うえ]に本[ほん]が置[お]いてあった。", en: "A book had been placed on the desk." }
    ],
    notes:
      "てある is for transitive verbs and emphasizes the intentional resulting state. Contrast with ている (ongoing action / state of intransitive verbs): 窓[まど]が割[わ]れている (intransitive, broken state) vs. 窓[まど]が閉[し]めてある (transitive, intentionally closed).",
    related: ["gmn4-L49-01", "gmn4-L49-03"]
  },

  {
    id: "gmn4-L49-03",
    point: "〜ている (state / continuation)",
    reading: "〜ている (じょうたい・けいぞく)",
    level: "N4",
    category: "Verb forms",
    lesson: 49,
    meaning: "Is doing (ongoing) / has been done (resultant state of intransitive)",
    structure: "V-て + いる",
    explanation:
      "〜ている has two main uses: (1) ongoing action with durative verbs (読んでいる = is reading); (2) resultant state with instantaneous-change verbs (死んでいる = is dead). With motion verbs, it can also indicate prior movement and current state (行っている = has gone and is there).",
    formation:
      "Ongoing: V-て + いる (本[ほん]を読[よ]んでいる)\nState: 瞬間動詞[しゅんかんどうし] + ている (結婚[けっこん]している, 死[し]んでいる)\nPolite: V-て + います\nPast: V-て + いた (was doing / had been in state)\nNegative: V-て + いない",
    examples: [
      { jp: "今[いま]、本[ほん]を読[よ]んでいる。", en: "I am reading a book now. (ongoing)" },
      { jp: "あの人[ひと]はもう結婚[けっこん]している。", en: "That person is already married. (state)" },
      { jp: "彼[かれ]はもう東京[とうきょう]に着[つ]いている。", en: "He has already arrived in Tokyo." }
    ],
    notes:
      "ている's interpretation depends on verb type: durative verbs (読む, 食べる) → ongoing; instantaneous verbs (死ぬ, 結婚する) → state; motion verbs (行く, 来る) → result of motion. Distinct from てある (intentional state, transitive verbs).",
    related: ["gmn4-L49-01", "gmn4-L49-02"]
  },

  // ───────────────────────────────────────────────────────────
  // LESSON 50 — review
  // ───────────────────────────────────────────────────────────

  {
    id: "gmn4-L50-01",
    point: "復習: 普通体・丁寧体",
    reading: "ふくしゅう: ふつうたい・ていねいたい",
    level: "N4",
    category: "Modifying",
    lesson: 50,
    meaning: "Review: plain and polite form usage across styles",
    structure: "Plain form + と/そう/と思う/ようだ/らしい; Polite form in formal speech",
    explanation:
      "A consolidation of plain and polite form usage across N4. The plain form is required before quotation particles (と), conjecture markers (と思う, と言う), and inside noun-modifying clauses. The polite form (です/ます) is the safe default in adult conversation and business contexts.",
    formation:
      "Quote: 普通体 + と言[い]う / と聞[き]く\nOpinion: 普通体 + と思[おも]う\nConjecture: 普通体 + ようだ / らしい / そうです(hearsay)\nModifier: 普通体 + N (昨日[きのう]買[か]った本[ほん])\nPolite: です/ます in formal contexts",
    examples: [
      { jp: "彼[かれ]が来[く]ると言[い]った。", en: "He said he would come." },
      { jp: "明日[あした]は忙[いそが]しいと思[おも]います。", en: "I think I will be busy tomorrow." },
      { jp: "あの人[ひと]は学生[がくせい]らしいです。", en: "That person seems to be a student." }
    ],
    notes:
      "Choose plain form when embedded before と/ようだ/らしい/と思う. Use polite form as the matrix predicate in formal settings. Mixing styles is common: 降ると思います (plain inside, polite outside).",
    related: ["gmn4-L26-01", "gmn4-L39-02", "gmn4-L39-03"]
  },

  {
    id: "gmn4-L50-02",
    point: "復習: 条件形 (と/ば/たら/なら)",
    reading: "ふくしゅう: じょうけんけい",
    level: "N4",
    category: "Conditionals",
    lesson: 50,
    meaning: "Review of four conditional forms and their nuances",
    structure: "と (general trigger) / 〜ば (hypothetical) / 〜たら (specific past-aware) / 〜なら (topic-based)",
    explanation:
      "Four conditional patterns are consolidated: と (general/natural consequence, cannot command), 〜ば (hypothetical condition, cannot command with V-ば), 〜たら (specific past-aware condition, can command), 〜なら (topic-based, can command/suggest).",
    formation:
      "と: V-辞書形/た + と (春[はる]になると桜[さくら]が咲[さ]く)\nば: V-え段 + ば (安[やす]ければ買[か]う)\nたら: V-た + ら (雨[あめ]が降[ふ]ったらやめる)\nなら: N/V-普通体 + なら (日本[にほん]へ行[い]くなら)",
    examples: [
      { jp: "春[はる]になると、花[はな]が咲[さ]く。", en: "When spring comes, flowers bloom. (と)" },
      { jp: "安[やす]ければ、買[か]います。", en: "If it's cheap, I'll buy it. (ば)" },
      { jp: "雨[あめ]が降[ふ]ったら、試合[しあい]は中止[ちゅうし]だ。", en: "If it rains, the match is cancelled. (たら)" }
    ],
    notes:
      "と = general/natural law (cannot use for commands); ば = hypothetical (commands/suggestions allowed only with い-adj/N, not V-ば); たら = specific event, can command; なら = topic given, can command/suggest.",
    related: ["gmn4-L40-01", "gmn4-L40-02", "gmn4-L42-02"]
  },

  {
    id: "gmn4-L50-03",
    point: "復習: やりもらい (あげる/くれる/もらう)",
    reading: "ふくしゅう: やりもらい",
    level: "N4",
    category: "Giving-Receiving",
    lesson: 50,
    meaning: "Review of giving and receiving verbs and their direction",
    structure: "私→他: あげる / 他→私: くれる / 私が(他に)〜てもらう: receive",
    explanation:
      "Three giving-receiving verbs: あげる (I/inner party give to outer), くれる (someone gives to me/inner party), もらう (I/inner party receive from someone). All can attach as V-て + あげる/くれる/もらう for favors. Humble and polite equivalents: さしあげる, くださる, いただく.",
    formation:
      "あげる: 私[わたし]は + 誰[だれ]かに + Nを + あげる\nくれる: 誰[だれ]かが私[わたし]に + Nを + くれる\nもらう: 私[わたし]は + 誰[だれ]かに + Nを + もらう\nFavor: V-て + あげる/くれる/もらう\nHumble: さしあげる / いただく (polite: くださる)",
    examples: [
      { jp: "私[わたし]は友達[ともだち]に本[ほん]をあげた。", en: "I gave a book to my friend." },
      { jp: "彼[かれ]は私[わたし]に花[はな]をくれた。", en: "He gave me flowers." },
      { jp: "私[わたし]は先生[せんせい]に英語[えいご]を教[おし]えてもらった。", en: "I had the teacher teach me English." }
    ],
    notes:
      "あげる cannot be used when giving to a superior (use さしあげる). くれる has the respectful form くださる (someone of higher status gives to me). V-てもらう is the structure for receiving a favor (doer marked by に).",
    related: ["gmn4-L36-03", "gmn4-L37-01", "gmn4-L37-02"]
  }
];
