import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// JLPT N1 grammar points (Shinzaizen Master style), chunk B.
// IDs gn1-51 .. gn1-100. Advanced structures across all major categories.
// Distributes: Conditionals / Cause-Reason / Time-Sequence / Contrast /
// Assumption / Passive-Causative / Honorific / Particles / Conjunctions / Modifiers.

export const grammarN1B: GrammarData[] = [
  // ───────────────────────── Conditionals ─────────────────────────
  {
    id: "gn1-51",
    point: "〜う（よう）ものなら",
    reading: "~ou (you) mono nara",
    level: "N1",
    category: "Conditionals",
    meaning: "If one were to (do something undesirable), serious consequences would follow",
    structure: "V-意向形 + ものなら",
    explanation:
      "Describes a hypothetical situation that, if it were to occur, would trigger a serious or undesirable outcome. Often carries the nuance of a warning or anxiety.",
    formation:
      "V-意向形 + ものなら\n例: 言[い]おうものなら / しようものなら / 漏[も]らそうものなら",
    examples: [
      { jp: "彼[かれ]に秘密[ひみつ]を漏[も]らそうものなら、大変[たいへん]なことになる。", en: "If you were to leak the secret to him, it would be a disaster." },
      { jp: "一度[いちど]でも失敗[しっぱい]しようものなら、信頼[しんらい]を失[うしな]ってしまう。", en: "If you fail even once, you will lose their trust." }
    ],
    notes:
      "The consequence is invariably negative and serious. Usually paired with verbs of undesirable actions. The pattern implies the action has not yet happened.",
    related: ["gn1-52", "gn1-54", "gn1-56"]
  },
  {
    id: "gn1-52",
    point: "〜とあれば",
    reading: "to areba",
    level: "N1",
    category: "Conditionals",
    meaning: "If it is the case that / given that (special circumstances)",
    structure: "普通体 + とあれば",
    explanation:
      "Used when a special condition or circumstance holds, justifying an exceptional action. Carries the nuance 'if that is the situation, then...'.",
    formation:
      "N + とあれば / V-辞書形 + とあれば\n例: 子供[こども]のためとあれば / 頼[たの]まれたとあれば",
    examples: [
      { jp: "子供[こども]のためとあれば、多少[たしょう]の出費[しゅっぴ]は惜[お]しまない。", en: "If it is for the children, I will not hesitate to spend a little." },
      { jp: "頼[たの]まれたとあれば、断[ことわ]るわけにはいかない。", en: "If I have been asked, I cannot very well refuse." }
    ],
    notes:
      "Often expresses willingness to take exceptional action under special conditions. Formal and slightly literary tone. Common in reasoned statements.",
    related: ["gn1-51", "gn1-53"]
  },
  {
    id: "gn1-53",
    point: "〜ないことには",
    reading: "nai koto ni wa",
    level: "N1",
    category: "Conditionals",
    meaning: "Unless one does... / without doing... (something cannot happen)",
    structure: "V-ない形 + ないことには + 〜ない",
    explanation:
      "Expresses that unless a certain action is taken, the desired result cannot be achieved. The main clause is always negative.",
    formation:
      "V-ない形 + ないことには + 〜ない\n例: 会[あ]わないことには始[はじ]まらない / 読[よ]まないことには分[わ]からない",
    examples: [
      { jp: "実際[じっさい]に会[あ]って話[はな]さないことには、本当[ほんとう]のことは分[わ]からない。", en: "Unless we meet and talk in person, I cannot understand the truth." },
      { jp: "資料[しりょう]を読[よ]まないことには、コメントのしようがない。", en: "Without reading the materials, I cannot really comment." }
    ],
    notes:
      "Emphasizes that the condition is indispensable. The following clause is always negative (cannot / will not). Stresses the necessity of the prerequisite action.",
    related: ["gn1-52", "gn1-54", "gn1-56"]
  },
  {
    id: "gn1-54",
    point: "〜たところで",
    reading: "ta tokoro de",
    level: "N1",
    category: "Conditionals",
    meaning: "Even if one does... (it will not help / it is futile)",
    structure: "V-た形 + ところで",
    explanation:
      "Expresses that even if an action is carried out, the result will be unsatisfactory, limited, or futile. The main clause is usually negative or states a small degree.",
    formation:
      "V-た形 + ところで + 〜ない / 〜程度[ていど]だ\n例: 言[い]ったところで無駄[むだ]だ / 急[いそ]いだところで間[ま]に合[あ]わない",
    examples: [
      { jp: "今[いま]更[さら]謝[あやま]ったところで、許[ゆる]してはもらえない。", en: "Apologizing at this point will not get me forgiven." },
      { jp: "急[いそ]いだところで、間[ま]に合[あ]うわけではない。", en: "Even if I hurry, it does not mean I will make it in time." }
    ],
    notes:
      "Implies the action is pointless or yields only a small result. Stronger sense of futility than the neutral 〜ても. Often used with verbs of effort.",
    related: ["gn1-53", "gn1-51", "gn1-55"]
  },
  {
    id: "gn1-55",
    point: "〜にしろ〜にしろ / 〜にせよ〜にせよ",
    reading: "ni shiro ni shiro / ni seyo ni seyo",
    level: "N1",
    category: "Conditionals",
    meaning: "Whether A or B / no matter which (the conclusion holds for both)",
    structure: "N + にしろ + N + にしろ / V-辞書形 + にしろ + V-辞書形 + にしろ",
    explanation:
      "Lists two items (often contrasting) and states that the conclusion applies equally to both. Equivalent to 'whether... or...'.",
    formation:
      "N/V + にしろ + N/V + にしろ\n例: 行[い]くにしろ行[い]かないにしろ / 犬[いぬ]にしろ猫[ねこ]にしろ",
    examples: [
      { jp: "進[すす]むにしろ退[しりぞ]くにしろ、早[はや]く決[き]めるべきだ。", en: "Whether you advance or retreat, you should decide quickly." },
      { jp: "犬[いぬ]にしろ猫[ねこ]にしろ、ペットを飼[か]うには責任[せきにん]が伴[ともな]う。", en: "Whether a dog or a cat, keeping a pet comes with responsibility." }
    ],
    notes:
      "にせよ is slightly more formal than にしろ. More than two items may be listed. Used to make a comprehensive statement covering alternatives.",
    related: ["gn1-54", "gn1-51"]
  },
  {
    id: "gn1-56",
    point: "〜てからでないと〜ない / 〜てからでなければ〜ない",
    reading: "te kara de nai to ~ nai / te kara de nakereba ~ nai",
    level: "N1",
    category: "Conditionals",
    meaning: "Not unless one first does / only after doing (can something happen)",
    structure: "V-て形 + からでないと + 〜ない / V-て形 + からでなければ + 〜ない",
    explanation:
      "Expresses that an action must be completed first before something else becomes possible. 'Cannot do... unless one first does...'.",
    formation:
      "V-て形 + からでないと(からでなければ) + 〜ない\n例: 読[よ]んでからでないと / 確認[かくにん]してからでなければ",
    examples: [
      { jp: "内容[ないよう]をよく読[よ]んでからでないと、契約[けいやく]できない。", en: "You cannot sign the contract unless you read the contents carefully first." },
      { jp: "本人[ほんにん]に確認[かくにん]してからでなければ、お答[こた]えできません。", en: "I cannot answer unless I confirm with the person in question first." }
    ],
    notes:
      "The main clause is always negative. Emphasizes that the prior action is a strict precondition. からでなければ is slightly more formal than からでないと.",
    related: ["gn1-53", "gn1-51"]
  },

  // ───────────────────────── Cause / Reason ─────────────────────────
  {
    id: "gn1-57",
    point: "〜あまり（に）",
    reading: "~amari (ni)",
    level: "N1",
    category: "Cause/Reason",
    meaning: "Due to excessive... / so... that (it caused a result)",
    structure: "N + の + あまり / V-辞書形 + あまり / Na-adj + な + あまり / I-adj + あまり",
    explanation:
      "Indicates that an extreme degree of some feeling or state caused an (often unexpected or undesirable) result. 'Because of too much...'.",
    formation:
      "Nのあまり / V-辞書形あまり / な-adjなあまり\n例: 驚[おどろ]きのあまり / 働[はたら]きすぎのあまり / 嬉[うれ]しさのあまり",
    examples: [
      { jp: "彼[かれ]は嬉[うれ]しさのあまり、涙[なみだ]を流[なが]した。", en: "He was so overjoyed that he shed tears." },
      { jp: "焦[あせ]りのあまり、ミスをしてしまった。", en: "Out of impatience, I ended up making a mistake." }
    ],
    notes:
      "The cause is an excess of emotion or state. Often, though not always, followed by an undesirable result. あまりに can also act as an adverb ('too...').",
    related: ["gn1-58", "gn1-61"]
  },
  {
    id: "gn1-58",
    point: "〜ことから",
    reading: "koto kara",
    level: "N1",
    category: "Cause/Reason",
    meaning: "From the fact that / judging from (one draws a conclusion)",
    structure: "普通体 + ことから",
    explanation:
      "States the basis for a judgment or conclusion: 'from the fact that..., one can infer...'. Commonly used in deductive reasoning.",
    formation:
      "普通体 + ことから\n例: 足跡[あしあと]があることから / 無言[むごん]だったことから",
    examples: [
      { jp: "現場[げんば]に足跡[あしあと]が残[のこ]されていたことから、犯人[はんにん]は複数[ふくすう]いると推測[すいそく]された。", en: "From the footprints left at the scene, it was inferred that there were multiple culprits." },
      { jp: "彼[かれ]が無言[むごん]だったことから、賛成[さんせい]ではないことが分[わ]かった。", en: "From his silence, I could tell he did not agree." }
    ],
    notes:
      "Introduces the evidence or grounds for a conclusion. Common in written and expository Japanese. Different from 〜から (simple cause): focuses on inference.",
    related: ["gn1-57", "gn1-59"]
  },
  {
    id: "gn1-59",
    point: "〜こととて",
    reading: "koto tote",
    level: "N1",
    category: "Cause/Reason",
    meaning: "Because / since (formal, often used to make an excuse)",
    structure: "普通体 + こととて",
    explanation:
      "A formal, somewhat old-fashioned expression of reason. Frequently used to make excuses or soften a request by giving a reason.",
    formation:
      "普通体 + こととて\n例: 初[はじ]めてのこととて / 若[わか]かったこととて",
    examples: [
      { jp: "初[はじ]めてのこととて、ご不自由[ふじゆう]をおかけします。", en: "As this is my first time, I apologize for any inconvenience I may cause." },
      { jp: "若[わか]かったこととて、大目[おおめ]に見[み]ていただけないか。", en: "I was young; could you perhaps overlook it?" }
    ],
    notes:
      "Literary and polite. Frequently used in letters or formal apologies to excuse one's behavior. The modern casual equivalent is 〜だから / 〜なので.",
    related: ["gn1-58", "gn1-60"]
  },
  {
    id: "gn1-60",
    point: "〜のことだから",
    reading: "no koto dakara",
    level: "N1",
    category: "Cause/Reason",
    meaning: "Since it is (someone/something of that nature), naturally...",
    structure: "N + の + ことだから",
    explanation:
      "Used when the speaker, knowing the nature or character of the noun, draws a natural conclusion. 'Given that it is X, of course...'.",
    formation:
      "N + のことだから\n例: 彼[かれ]のことだから / 姉[あね]のことだから",
    examples: [
      { jp: "時間[じかん]に厳[きび]しい彼[かれ]のことだから、もうすぐ来[く]るだろう。", en: "Given that he is strict about time, he will probably be here soon." },
      { jp: "頑張[がんば]り屋[や]の姉[あね]のことだから、きっと合格[ごうかく]する。", en: "Knowing my hard-working sister, she will surely pass." }
    ],
    notes:
      "Usually refers to a person whose character the speaker knows well. The conclusion is a natural expectation based on that known character. Not used for strangers.",
    related: ["gn1-59", "gn1-61"]
  },
  {
    id: "gn1-61",
    point: "〜ゆえ（に）",
    reading: "yue (ni)",
    level: "N1",
    category: "Cause/Reason",
    meaning: "Because of / due to (formal, literary)",
    structure: "N + ゆえ（に） / 普通体 + ゆえ（に）",
    explanation:
      "A formal, somewhat literary equivalent of 〜ため（に） or 〜から. Common in proverbs, set phrases, and written Japanese.",
    formation:
      "N + ゆえ(に) / V-普通体 + ゆえ(に)\n例: 貧[まず]しさゆえに / 若[わか]さゆえに / 信[しん]じるゆえに",
    examples: [
      { jp: "若[わか]さゆえに犯[おか]した過[あやま]ちもある。", en: "There are mistakes one commits due to youth." },
      { jp: "信[しん]じるゆえに、強[つよ]くなれるのだ。", en: "It is because I believe that I can become strong." }
    ],
    notes:
      "More literary and solemn than ため. Often seen in fixed expressions and classical-style writing. The ほど-formal nuance fits ceremonies, proverbs, and essays.",
    related: ["gn1-60", "gn1-57"]
  },

  // ───────────────────────── Time / Sequence ─────────────────────────
  {
    id: "gn1-62",
    point: "〜が早いか",
    reading: "ga hayai ka",
    level: "N1",
    category: "Time/Sequence",
    meaning: "As soon as / no sooner than (two actions in rapid succession)",
    structure: "V-辞書形 / V-た形 + が早いか + V-た形",
    explanation:
      "Describes two actions happening in immediate succession: the moment one action occurs, another follows. The second verb is in the past tense.",
    formation:
      "V-辞書形 + が早いか + V-た形\n例: 起[お]きるが早いか、飛[と]び出[だ]した / ベルが鳴[な]るが早いか",
    examples: [
      { jp: "ベルが鳴[な]るが早いか、彼[かれ]は教室[きょうしつ]を飛[と]び出[だ]していった。", en: "As soon as the bell rang, he dashed out of the classroom." },
      { jp: "家[いえ]に着[つ]くが早いか、すぐにパソコンを開[ひら]いた。", en: "No sooner had I arrived home than I opened my computer." }
    ],
    notes:
      "Both verbs share the same subject. The second verb cannot express intention or volition (no 〜よう / 〜つもり). Describes spontaneous, instantaneous succession.",
    related: ["gn1-63", "gn1-67"]
  },
  {
    id: "gn1-63",
    point: "〜やいなや",
    reading: "ya ina ya",
    level: "N1",
    category: "Time/Sequence",
    meaning: "As soon as / the moment that",
    structure: "V-辞書形 + やいなや + V-た形",
    explanation:
      "Indicates that the moment one action occurs, another follows almost simultaneously. More literary than 〜たとたん（に）.",
    formation:
      "V-辞書形 + やいなや + V-た形\n例: 起[お]きるやいなや / 見[み]るやいなや",
    examples: [
      { jp: "彼[かれ]の姿[すがた]を見[み]るやいなや、彼女[かのじょ]は泣[な]き出[だ]した。", en: "The moment she saw him, she burst into tears." },
      { jp: "発表[はっぴょう]が終[お]わるやいなや、会場[かいじょう]は拍手[はくしゅ]に包[つつ]まれた。", en: "As soon as the announcement ended, the venue filled with applause." }
    ],
    notes:
      "Written and literary style. The second clause describes an unexpected or spontaneous event, not an intentional action by the subject of the first verb.",
    related: ["gn1-62", "gn1-64", "gn1-67"]
  },
  {
    id: "gn1-64",
    point: "〜てからというもの",
    reading: "te kara to iu mono",
    level: "N1",
    category: "Time/Sequence",
    meaning: "Ever since (doing)... (a state has continued up to now)",
    structure: "V-て形 + からというもの",
    explanation:
      "Emphasizes that since a certain event occurred, a state or situation has continued unchanged up to the present. 'Ever since...'.",
    formation:
      "V-て形 + からというもの\n例: 会[あ]ってからというもの / 読[よ]んでからというもの",
    examples: [
      { jp: "彼[かれ]と別[わか]れてからというもの、彼女[かのじょ]は一度[いちど]も笑顔[えがお]を見[み]せていない。", en: "Ever since she broke up with him, she has not shown a smile once." },
      { jp: "あの本[ほん]を読[よ]んでからというもの、私[わたし]の考[かんが]え方[かた]が変[か]わった。", en: "Ever since I read that book, my way of thinking has changed." }
    ],
    notes:
      "Stresses a lasting change after the trigger event. The main clause describes a continuing state, not a one-time action. Stronger than simple 〜てから.",
    related: ["gn1-63", "gn1-65"]
  },
  {
    id: "gn1-65",
    point: "〜にあたって / 〜にあたり",
    reading: "ni atatte / ni atari",
    level: "N1",
    category: "Time/Sequence",
    meaning: "On the occasion of / when undertaking (something important)",
    structure: "N + にあたって / V-辞書形 + にあたって",
    explanation:
      "Used at the point of undertaking something significant or special, often with a sense of resolution or importance. 'On the occasion of...'.",
    formation:
      "N/V-辞書形 + にあたって(にあたり)\n例: 開会[かいかい]にあたって / 出発[しゅっぱつ]にあたり / 始[はじ]めるにあたって",
    examples: [
      { jp: "新[あたら]しい仕事[しごと]を始[はじ]めるにあたって、誓[ちか]いを新[あら]たにした。", en: "On starting my new job, I renewed my resolve." },
      { jp: "結婚[けっこん]にあたり、両親[りょうしん]に深[ふか]く感謝[かんしゃ]した。", en: "On the occasion of my marriage, I expressed deep gratitude to my parents." }
    ],
    notes:
      "Formal. Used for momentous occasions such as ceremonies or new endeavors. にあたり is the conjunctive form, even more formal and written in style.",
    related: ["gn1-64", "gn1-66"]
  },
  {
    id: "gn1-66",
    point: "〜に先立って / 〜に先立ち",
    reading: "ni sakidatte / ni sakidachi",
    level: "N1",
    category: "Time/Sequence",
    meaning: "Prior to / before (doing something important)",
    structure: "N + に先立って / V-辞書形 + に先立って",
    explanation:
      "Indicates that something is done in advance before a major event. 'Prior to... / in advance of...'.",
    formation:
      "N/V-辞書形 + に先立って(に先立ち)\n例: 開会[かいかい]式[しき]に先立って / 調査[ちょうさ]に先立ち",
    examples: [
      { jp: "開会[かいかい]式[しき]に先立って、関係者[かんけいしゃ]の挨拶[あいさつ]があった。", en: "Prior to the opening ceremony, there were greetings from those involved." },
      { jp: "調査[ちょうさ]を始[はじ]めるに先立って、計画[けいかく]を入[い]念[ねん]に立[た]てた。", en: "Before starting the survey, I carefully drew up a plan." }
    ],
    notes:
      "Formal. The prior action is usually preparatory. に先立ち is the conjunctive form. Often used with important events (ceremonies, large-scale actions).",
    related: ["gn1-65", "gn1-62"]
  },
  {
    id: "gn1-67",
    point: "〜そばから",
    reading: "soba kara",
    level: "N1",
    category: "Time/Sequence",
    meaning: "As soon as / no sooner than (often repeating or futile)",
    structure: "V-辞書形 / V-た形 + そばから",
    explanation:
      "Indicates that as soon as one action is done, another follows, often repeatedly or in a way that frustrates the speaker. 'No sooner... than... / as fast as...'.",
    formation:
      "V-辞書形 / V-た形 + そばから\n例: 片付[かたづ]けるそばから / 聞[き]いたそばから",
    examples: [
      { jp: "子供[こども]がおもちゃを散[ち]らかすので、片付[かたづ]けるそばからまた汚[よご]される。", en: "The children scatter toys, so no sooner do I tidy up than it gets messy again." },
      { jp: "彼[かれ]は聞[き]いたそばから忘[わす]れてしまう。", en: "He forgets things as soon as he hears them." }
    ],
    notes:
      "Implies repetition or futility: the action is undone as fast as it is done. Often conveys frustration. Cannot describe a single one-time event.",
    related: ["gn1-62", "gn1-63"]
  },

  // ───────────────────────── Contrast ─────────────────────────
  {
    id: "gn1-68",
    point: "〜にひきかえ",
    reading: "ni hikikae",
    level: "N1",
    category: "Contrast",
    meaning: "In contrast to / as opposed to",
    structure: "N + にひきかえ / 普通体 + のにひきかえ",
    explanation:
      "Compares two things, highlighting that the second is strikingly different (often opposite) from the first. 'In contrast to...'.",
    formation:
      "N + にひきかえ / V-普通体 + のにひきかえ\n例: 昨日[きのう]のにひきかえ / 兄[あに]なのにひきかえ",
    examples: [
      { jp: "昨日[きのう]の好調[こうちょう]にひきかえ、今日[きょう]は全[まった]く調子[ちょうし]が出[で]ない。", en: "In contrast to yesterday's good form, today I cannot get into the groove at all." },
      { jp: "兄[あに]が真面目[まじめ]なのにひきかえ、弟[おとうと]は遊[あそ]び好[ず]きだ。", en: "Whereas the older brother is serious, the younger one loves to play." }
    ],
    notes:
      "Strong contrast, often between two people or two situations. The two items compared are usually of the same category. Literary/formal tone.",
    related: ["gn1-69", "gn1-70"]
  },
  {
    id: "gn1-69",
    point: "〜とはいうものの",
    reading: "to wa iu mono no",
    level: "N1",
    category: "Contrast",
    meaning: "Although one says / be that as it may",
    structure: "普通体 + とはいうものの",
    explanation:
      "Concedes a point but then presents a contrasting reality. 'Although it is said that... / be that as it may...'.",
    formation:
      "普通体 + とはいうものの\n例: 春[はる]になったとはいうものの / 万端[ばんたん]とはいうものの",
    examples: [
      { jp: "春[はる]になったとはいうものの、朝[あさ]はまだ寒[さむ]い。", en: "Although it has become spring, the mornings are still cold." },
      { jp: "準備[じゅんび]は万端[ばんたん]とはいうものの、不安[ふあん]は残[のこ]る。", en: "Be that as it may the preparations are complete, anxiety remains." }
    ],
    notes:
      "A more emphatic version of 〜とはいえ. Used to admit something before introducing a caveat. Formal and slightly literary.",
    related: ["gn1-68", "gn1-70"]
  },
  {
    id: "gn1-70",
    point: "〜とはいえ",
    reading: "to wa ie",
    level: "N1",
    category: "Contrast",
    meaning: "Although / even so / granted that",
    structure: "普通体 + とはいえ",
    explanation:
      "Concedes that the preceding statement is true, yet introduces a contrary fact. 'Even so / although...'.",
    formation:
      "普通体 + とはいえ\n例: 子供[こども]とはいえ / 春[はる]とはいえ",
    examples: [
      { jp: "子供[こども]とはいえ、彼[かれ]はよく分[わ]かっている。", en: "Even though he is a child, he understands well." },
      { jp: "春[はる]とはいえ、風[かぜ]はまだ冷[つめ]たい。", en: "Even though it is spring, the wind is still cold." }
    ],
    notes:
      "More formal and literary than 〜のに or 〜けれども. The conceded point is something one would expect to lead to a different conclusion, hence the contrast is striking.",
    related: ["gn1-69", "gn1-68"]
  },
  {
    id: "gn1-71",
    point: "〜はおろか",
    reading: "wa oroka",
    level: "N1",
    category: "Contrast",
    meaning: "Let alone / not to mention (not even the lesser thing)",
    structure: "N + はおろか + (さえ / すら / も) + 〜ない",
    explanation:
      "Used to say that even a lesser or more basic thing does not happen, so the greater thing is out of the question. 'Let alone A, not even B'.",
    formation:
      "N + はおろか + (さえ/すら/も) + 〜ない\n例: 自転車[じてんしゃ]はおろか / 漢字[かんじ]はおろか",
    examples: [
      { jp: "車[くるま]はおろか、自転車[じてんしゃ]さえ買[か]えない。", en: "Let alone a car, I cannot even afford a bicycle." },
      { jp: "彼[かれ]は漢字[かんじ]はおろか、ひらがなも読[よ]めない。", en: "He cannot even read hiragana, let alone kanji." }
    ],
    notes:
      "Always followed by a negative expression. The order is: greater item + はおろか + lesser item + も/さえ + negative. Emphasizes inadequacy.",
    related: ["gn1-72", "gn1-68"]
  },
  {
    id: "gn1-72",
    point: "〜もさることながら",
    reading: "mo saru koto nagara",
    level: "N1",
    category: "Contrast",
    meaning: "...is also true, but (more importantly)...",
    structure: "N + もさることながら + N",
    explanation:
      "Acknowledges that the first item is considerable or important, but emphasizes that the second is even more so. 'A is true, but even more so B'.",
    formation:
      "N + もさることながら + N\n例: 才能[さいのう]もさることながら / 味[あじ]もさることながら",
    examples: [
      { jp: "彼[かれ]は才能[さいのう]もさることながら、努力[どりょく]が素晴[すば]らしい。", en: "His talent is considerable, but his effort is even more remarkable." },
      { jp: "味[あじ]もさることながら、見[み]た目[め]が鮮[あざ]やかだ。", en: "The taste is good, but the appearance is even more striking." }
    ],
    notes:
      "Acknowledges A before highlighting B as more noteworthy. Polite and formal tone. さることながら amounts to 'that being said / however'.",
    related: ["gn1-71", "gn1-69"]
  },

  // ───────────────────────── Assumption ─────────────────────────
  {
    id: "gn1-73",
    point: "〜おそれがある",
    reading: "osore ga aru",
    level: "N1",
    category: "Assumption",
    meaning: "There is a risk/fear that (something undesirable may happen)",
    structure: "V-辞書形 / V-ない形 + おそれがある / N + の + おそれがある",
    explanation:
      "Expresses concern that an undesirable outcome may occur. 'There is a danger/fear that...'.",
    formation:
      "V-辞書形 / Nの + おそれがある\n例: 洪水[こうずい]のおそれがある / 失敗[しっぱい]するおそれがある",
    examples: [
      { jp: "今夜[こんや]は大雪[おおゆき]になるおそれがある。", en: "There is a risk of heavy snow tonight." },
      { jp: "この薬[くすり]には副作用[ふくさよう]が出[で]るおそれがある。", en: "There is a danger that this medicine may cause side effects." }
    ],
    notes:
      "Always refers to a negative possibility. Common in news, warnings, and forecasts. Carries a 〜かもしれない nuance focused specifically on undesirable outcomes.",
    related: ["gn1-74", "gn1-76"]
  },
  {
    id: "gn1-74",
    point: "〜かねない",
    reading: "kanenai",
    level: "N1",
    category: "Assumption",
    meaning: "Might / there is a danger that (an undesirable result could occur)",
    structure: "V-ます形 + かねない",
    explanation:
      "Indicates that an action or state might lead to an undesirable result. 'There is a chance it could (bad outcome)...'.",
    formation:
      "V-ます形 + かねない\n例: 怒[おこ]りかねない / 忘[わす]れかねない / 起[お]こしかねない",
    examples: [
      { jp: "あんなにスピードを出[だ]しては、事故[じこ]を起[お]こしかねない。", en: "Driving that fast, he might cause an accident." },
      { jp: "無理[むり]をすれば、体[からだ]を壊[こわ]しかねない。", en: "If you overdo it, you might ruin your health." }
    ],
    notes:
      "Always implies a negative possibility, unlike the neutral 〜かもしれない. Contrast with 〜かねる (cannot / find it difficult to do).",
    related: ["gn1-73", "gn1-75"]
  },
  {
    id: "gn1-75",
    point: "〜まい",
    reading: "mai",
    level: "N1",
    category: "Assumption",
    meaning: "Will not (intention) / probably not (conjecture)",
    structure: "V-辞書形 + まい / V-ます形 + まい（exception: する→するまい/すまい, くる→くるまい/こまい）",
    explanation:
      "Expresses negative volition ('I will not do...') or negative conjecture ('probably will not...'). Formal and literary.",
    formation:
      "V-辞書形 + まい\n例: 二[に]度[ど]と言[い]うまい / 起[お]こるまい / 来[こ]まい",
    examples: [
      { jp: "二[に]度[ど]と彼[かれ]を裏切[うらぎ]るまいと誓[ちか]った。", en: "I swore I would never betray him again." },
      { jp: "彼[かれ]がそんな嘘[うそ]をつくことはあるまい。", en: "He surely would not tell such a lie." }
    ],
    notes:
      "Two readings exist for する and くる (するまい/すまい, くるまい/こまい). For conjecture use, the subject is usually third person. For volition use, the subject is the speaker.",
    related: ["gn1-74", "gn1-76"]
  },
  {
    id: "gn1-76",
    point: "〜とみえる / 〜とみえて",
    reading: "to mieru / to miete",
    level: "N1",
    category: "Assumption",
    meaning: "It seems that / it appears that (based on observed evidence)",
    structure: "普通体 + とみえる / とみえて",
    explanation:
      "Expresses a conjecture based on observed evidence. 'It appears that... / one can infer that...'. More objective than 〜ようだ.",
    formation:
      "普通体 + とみえる / とみえて\n例: 忙[いそが]しいとみえる / 降[ふ]ったとみえて",
    examples: [
      { jp: "彼[かれ]は相当[そうとう]忙[いそが]しいとみえる、電話[でんわ]に出[で]ない。", en: "He must be quite busy; he does not answer the phone." },
      { jp: "昨夜[さくや]雨[あめ]が降[ふ]ったとみえて、地面[じめん]が濡[ぬ]れている。", en: "It seems it rained last night; the ground is wet." }
    ],
    notes:
      "とみえて connects to a following clause; とみえる ends a sentence. Based on objective observation rather than mere guess. The conclusion explains the observed evidence.",
    related: ["gn1-73", "gn1-77"]
  },
  {
    id: "gn1-77",
    point: "〜んばかりに / 〜んばかりの",
    reading: "n bakari ni / n bakari no",
    level: "N1",
    category: "Assumption",
    meaning: "As if about to / on the verge of (doing)",
    structure: "V-ない形（去「ない」留「ん」） + んばかりに",
    explanation:
      "Describes an action or state so intense it looks as if the person is about to do something. 'Almost as if... / on the verge of...'.",
    formation:
      "V-ない形(〜ん) + ばかりに(ばかりの)\n例: 泣[な]かんばかりに / 言[い]わんばかりに",
    examples: [
      { jp: "彼[かれ]は今[いま]にも泣[な]き出[だ]さんばかりの顔[かお]で訴[うった]えた。", en: "He pleaded with a face that looked about to burst into tears." },
      { jp: "まるで私[わたし]が犯人[はんにん]だとでも言[い]わんばかりの態度[たいど]だった。", en: "He acted almost as if to say I was the culprit." }
    ],
    notes:
      "The form is V-ない stem + ん (e.g. 言わない → 言わん). Hyperbolic. Often used to describe visible emotion or attitude. Different from plain 〜ばかり (just/only).",
    related: ["gn1-76", "gn1-74"]
  },

  // ───────────────────────── Passive / Causative ─────────────────────────
  {
    id: "gn1-78",
    point: "〜を余儀なくされる",
    reading: "o yogi nakusareru",
    level: "N1",
    category: "Passive/Causative",
    meaning: "To be forced / compelled to (do something against one's will)",
    structure: "N + を + 余儀なくされる",
    explanation:
      "Passive construction meaning one is forced into a course of action with no alternative. 'To be obliged to... / forced to...'.",
    formation:
      "N + を余儀なくされる\n例: 変更[へんこう]を余儀なくされる / 退去[たいきょ]を余儀なくされる",
    examples: [
      { jp: "台風[たいふう]の接近[せっきん]で、旅行[りょこう]の中止[ちゅうし]を余儀なくされた。", en: "Due to the approaching typhoon, we were forced to cancel the trip." },
      { jp: "会社[かいしゃ]の倒産[とうさん]で、転職[てんしょく]を余儀なくされた。", en: "The company's bankruptcy forced me to change jobs." }
    ],
    notes:
      "Formal, written style. The subject has no alternative. The noun is usually an action noun such as 変更 / 中止 / 出発 / 退去. Pairs with を余儀なくさせる (causative).",
    related: ["gn1-79", "gn1-80"]
  },
  {
    id: "gn1-79",
    point: "〜を余儀なくさせる",
    reading: "o yogi nakusaseru",
    level: "N1",
    category: "Passive/Causative",
    meaning: "To force / compel (someone) to (do something)",
    structure: "N + を + 余儀なくさせる",
    explanation:
      "Causative counterpart of 余儀なくされる: an event or person forces another party into a course of action against their will.",
    formation:
      "N + を余儀なくさせる\n例: 出発[しゅっぱつ]の遅延[ちえん]を余儀なくさせる / 縮小[しゅくしょう]を余儀なくさせる",
    examples: [
      { jp: "突然[とつぜん]の故障[こしょう]が、出発[しゅっぱつ]の遅延[ちえん]を余儀なくさせた。", en: "A sudden breakdown forced the departure to be delayed." },
      { jp: "新[あたら]しい法律[ほうりつ]が、企業[きぎょう]に事業[じぎょう]の縮小[しゅくしょう]を余儀なくさせた。", en: "The new law forced companies to scale back their operations." }
    ],
    notes:
      "The subject (the cause) forces an action noun onto someone or something. Formal, news/writing register. Often appears with abstract causes like 天災 / 法律 / 事故.",
    related: ["gn1-78", "gn1-80"]
  },
  {
    id: "gn1-80",
    point: "〜ずにはおかない / 〜ないではおかない",
    reading: "zu ni wa okanai / nai de wa okanai",
    level: "N1",
    category: "Passive/Causative",
    meaning: "Will surely (make something happen) / cannot leave undone",
    structure: "V-ない形 + ずにはおかない / V-ない形 + ないではおかない",
    explanation:
      "Expresses strong inevitability: a cause will inevitably produce a certain effect, or the speaker will definitely carry out an action. 'Cannot fail to / will not let it pass'.",
    formation:
      "V-ない形 + ずにはおかない\n例: 怒[おこ]らずにはおかない / 感動[かんどう]させずにはおかない",
    examples: [
      { jp: "彼[かれ]のスピーチは聴衆[ちょうしゅう]を感動[かんどう]させずにはおかない。", en: "His speech will surely move the audience." },
      { jp: "あんな失礼[しつれい]な態度[たいど]には、抗議[こうぎ]せずにはおかない。", en: "I will not let such rude behavior pass without protest." }
    ],
    notes:
      "When the subject is a person, it expresses strong volition; when the subject is an event, it expresses inevitable causation. Formal. Often used of strong emotional reactions.",
    related: ["gn1-78", "gn1-81"]
  },
  {
    id: "gn1-81",
    point: "〜ずにはすまない / 〜ないではすまない",
    reading: "zu ni wa sumanai / nai de wa sumanai",
    level: "N1",
    category: "Passive/Causative",
    meaning: "Cannot get away without doing / must do (to settle the matter)",
    structure: "V-ない形 + ずにはすまない / V-ない形 + ないではすまない",
    explanation:
      "Expresses that one cannot resolve or settle a situation without doing something; one is socially or morally obligated to act. 'Cannot get away without... / must...'.",
    formation:
      "V-ない形 + ずにはすまない\n例: 謝[あやま]らずにはすまない / 受[う]けずにはすまない",
    examples: [
      { jp: "迷惑[めいわく]をかけたのだから、謝[あやま]らずにはすまない。", en: "Since I caused trouble, I cannot get away without apologizing." },
      { jp: "約束[やくそく]を破[やぶ]った以上[いじょう]、罰[ばつ]を受[う]けずにはすまない。", en: "Having broken the promise, I must accept the punishment." }
    ],
    notes:
      "Implies a sense of social or moral obligation. すむ here means 'to be settled / to suffice'. Formal. Distinguished from ずにはおかない (which implies causing an effect).",
    related: ["gn1-80", "gn1-78"]
  },

  // ───────────────────────── Honorific ─────────────────────────
  {
    id: "gn1-82",
    point: "お〜になる / ご〜になる",
    reading: "o ~ ni naru / go ~ ni naru",
    level: "N1",
    category: "Honorific",
    meaning: "Respectful (尊敬語) form: to do (elevating the subject's action)",
    structure: "お + V-ます形 + になる / ご + 漢語N + になる",
    explanation:
      "A productive 尊敬語 (sonkeigo) pattern that elevates the actions of a respected person. Used toward someone of higher status.",
    formation:
      "お + V-ます形 + になる / ご + 漢語[かんご]N + になる\n例: お読[よ]みになる / ご覧[らん]になる / ご利用[りよう]になる",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりましたか。", en: "Has the teacher already gone home?" },
      { jp: "社長[しゃちょう]がこちらをご覧[らん]になりました。", en: "The president looked at this." }
    ],
    notes:
      "ご is used with Sino-Japanese nouns (漢語). Special forms exist: いる→おいでになる, 言う→おっしゃる, 食べる→召し上がる, 見る→ご覧になる, 来る→おいでになる / 見[み]える.",
    related: ["gn1-83", "gn1-84"]
  },
  {
    id: "gn1-83",
    point: "お〜する / ご〜する",
    reading: "o ~ suru / go ~ suru",
    level: "N1",
    category: "Honorific",
    meaning: "Humble (謙譲語) form: to do (lowering one's own action toward a respected person)",
    structure: "お + V-ます形 + する / ご + 漢語N + する",
    explanation:
      "A productive 謙譲語 (kenjougo) pattern used when the speaker humbles their own action toward someone of higher status.",
    formation:
      "お + V-ます形 + する / ご + 漢語[かんご]N + する\n例: お持[も]ちする / ご案内[あんない]する / ご説明[せつめい]する",
    examples: [
      { jp: "私[わたし]が明日[あした]のお時間[じかん]をお伝[つた]えします。", en: "I will convey tomorrow's schedule." },
      { jp: "新製品[しんせいひん]についてご説明[せつめい]します。", en: "I will explain about the new product." }
    ],
    notes:
      "ご is used with Sino-Japanese nouns. More polite variant: お/ご〜いたします. Never use this pattern for the listener's own actions (use 尊敬語 instead).",
    related: ["gn1-82", "gn1-85"]
  },
  {
    id: "gn1-84",
    point: "お〜ください / ご〜ください",
    reading: "o ~ kudasai / go ~ kudasai",
    level: "N1",
    category: "Honorific",
    meaning: "Please do (respectful request)",
    structure: "お + V-ます形 + ください / ご + 漢語N + ください",
    explanation:
      "A polite request pattern asking a respected person to perform an action. Respectful and softer than a direct command.",
    formation:
      "お + V-ます形 + ください / ご + 漢語[かんご]N + ください\n例: お待[ま]ちください / ご利用[りよう]ください / ご覧[らん]ください",
    examples: [
      { jp: "こちらでお待[ま]ちください。", en: "Please wait here." },
      { jp: "詳[くわ]しくはこちらの資料[しりょう]をご覧[らん]ください。", en: "For details, please look at these materials." }
    ],
    notes:
      "Special form for 見る: ご覧[らん]ください. Avoid with overly casual verbs. A politer alternative is お/ご〜くださいませ. Forms respectful requests to superiors.",
    related: ["gn1-82", "gn1-85"]
  },
  {
    id: "gn1-85",
    point: "ご〜願えませんか",
    reading: "go ~ negaemasen ka",
    level: "N1",
    category: "Honorific",
    meaning: "Could I ask you to (very polite humble request)",
    structure: "ご + 漢語N + 願えませんか / お + V-ます形 + いただけませんか",
    explanation:
      "A very polite humble request pattern using 願う or いただく. Asks the listener to perform an action with deference.",
    formation:
      "ご + 漢語[かんご]N + 願[ねが]えませんか / お + V-ます形 + いただけませんか\n例: ご検討[けんとう]願えませんか / お越[こ]しいただけませんか",
    examples: [
      { jp: "今後[こんご]の対応[たいおう]について、ご検討[けんとう]願えませんか。", en: "Could I ask you to consider how to respond going forward?" },
      { jp: "明日[あした]、弊社[へいしゃ]までお越[こ]しいただけませんか。", en: "Could we ask you to come to our office tomorrow?" }
    ],
    notes:
      "Very formal, used in business. 願えませんか is slightly softer than 願います. Avoid with verbs that already have established humble forms. Common in customer-facing correspondence.",
    related: ["gn1-83", "gn1-84", "gn1-86"]
  },
  {
    id: "gn1-86",
    point: "参る・申す・伺う・拝見する",
    reading: "mairu / mōsu / ukagau / haiken suru",
    level: "N1",
    category: "Honorific",
    meaning: "Special humble verbs: to go/come, to say, to ask/visit, to look at",
    structure: "参る（行く・来る）, 申す（言う）, 伺う（聞く・訪[たず]ねる）, 拝見[はいけん]する（見る）",
    explanation:
      "Irregular humble verbs that replace common verbs when the speaker acts toward a respected person. Each maps to a specific plain verb.",
    formation:
      "行[い]く・来[く]る → 参[まい]る\n言[い]う → 申[もう]す\n聞[き]く・訪[たず]ねる → 伺[うかが]う\n見[み]る → 拝見[はいけん]する",
    examples: [
      { jp: "私[わたし]は明日[あした]、先生[せんせい]のお宅[たく]に参[まい]ります。", en: "I will go to the teacher's house tomorrow." },
      { jp: "私[わたし]は山田[やまだ]と申[もう]します。", en: "My name is Yamada." }
    ],
    notes:
      "These verbs lower the speaker, not the listener. Never use them for the listener's actions. 申す is also used in fixed humble phrases such as 〜と申します. 拝見する is the humble of 見る.",
    related: ["gn1-83", "gn1-82"]
  },

  // ───────────────────────── Particles ─────────────────────────
  {
    id: "gn1-87",
    point: "〜をめぐって / 〜をめぐる",
    reading: "o megutte / o meguru",
    level: "N1",
    category: "Particles",
    meaning: "Concerning / around the issue of (a focus of debate or conflict)",
    structure: "N + をめぐって + V / N + をめぐる + N",
    explanation:
      "Indicates that an issue is the focus of discussion, dispute, or various opinions. 'Around / concerning (the issue of)...'.",
    formation:
      "N + をめぐって(をめぐる)\n例: 環境[かんきょう]問題[もんだい]をめぐって / 遺産[いさん]をめぐる",
    examples: [
      { jp: "新[あたら]しい法律[ほうりつ]をめぐって、激[はげ]しい議論[ぎろん]が続[つづ]いている。", en: "A fierce debate continues over the new law." },
      { jp: "遺産[いさん]をめぐる争[あらそ]いが家族[かぞく]の間[あいだ]で起[お]きた。", en: "A dispute over the inheritance broke out among the family." }
    ],
    notes:
      "をめぐって precedes a verb (typically of discussion or conflict); をめぐる modifies a noun. Focuses on a multifaceted issue with multiple viewpoints or stakeholders.",
    related: ["gn1-88", "gn1-89"]
  },
  {
    id: "gn1-88",
    point: "〜をもって",
    reading: "o motte",
    level: "N1",
    category: "Particles",
    meaning: "By means of / with / as of (a time or limit)",
    structure: "N + をもって",
    explanation:
      "A formal particle indicating means, method, or a point in time or limit. 'By means of... / as of... / with...'.",
    formation:
      "N + をもって\n例: 本日[ほんじつ]をもって / 身[み]をもって / 誠意[せいい]をもって",
    examples: [
      { jp: "本日[ほんじつ]をもって、営業[えいぎょう]を終了[しゅうりょう]いたします。", en: "As of today, we will cease operations." },
      { jp: "誠意[せいい]をもって対応[たいおう]いたします。", en: "We will respond with sincerity." }
    ],
    notes:
      "Multiple uses: means (身をもって), time or limit (本日をもって), degree (これをもって). Formal, written/business register. Not used for ordinary tools (use で instead).",
    related: ["gn1-87", "gn1-89"]
  },
  {
    id: "gn1-89",
    point: "〜にわたって / 〜にわたり",
    reading: "ni watatte / ni watari",
    level: "N1",
    category: "Particles",
    meaning: "Over / spanning (a wide range or long period)",
    structure: "N（数量・期間・範囲） + にわたって",
    explanation:
      "Indicates that something extends over a wide range, long period, or large number. Emphasizes breadth or duration.",
    formation:
      "N + にわたって(にわたり)\n例: 数年[すうねん]にわたって / 広[ひろ]範囲[はんい]にわたって / 三日間[みっかかん]にわたって",
    examples: [
      { jp: "会議[かいぎ]は三日間[みっかかん]にわたって行[おこな]われた。", en: "The conference was held over three days." },
      { jp: "広[ひろ]い範囲[はんい]にわたって被害[ひがい]が出[で]た。", en: "Damage extended over a wide area." }
    ],
    notes:
      "Stresses the scale (long time, wide area, many items). にわたり is the conjunctive/written form. Common in news and reports where breadth matters.",
    related: ["gn1-88", "gn1-87"]
  },
  {
    id: "gn1-90",
    point: "〜だに",
    reading: "dani",
    level: "N1",
    category: "Particles",
    meaning: "Even (just) / with merely... (one feels something)",
    structure: "N + だに / V-辞書形 + だに",
    explanation:
      "A literary particle meaning 'even just' or 'merely'. Often used to emphasize that even the slightest trigger produces a strong reaction.",
    formation:
      "N + だに / V-辞書形 + だに\n例: 夢[ゆめ]にだに / 思[おも]い出[だ]すだに / 考[かんが]えだに",
    examples: [
      { jp: "あの事故[じこ]のことは、思[おも]い出[だ]すだに怖[こわ]い。", en: "Just recalling that accident is frightening." },
      { jp: "夢[ゆめ]にだに見[み]なかった栄光[えいこう]を手[て]にした。", en: "He attained a glory he had not even seen in his dreams." }
    ],
    notes:
      "Fixed expressions are common: 夢[ゆめ]にだに（見[み]ない）, 思[おも]いだに（及[およ]ばない）. Literary and formal; in modern Japanese it survives mostly in set phrases.",
    related: ["gn1-91", "gn1-87"]
  },
  {
    id: "gn1-91",
    point: "〜やら〜やら",
    reading: "yara yara",
    level: "N1",
    category: "Particles",
    meaning: "Things like... and... (this and that, a jumbled mix)",
    structure: "N + やら + N + やら / V-辞書形 + やら + V-辞書形 + やら",
    explanation:
      "Lists two (or more) items to convey a sense of variety or of being overwhelmed by a mixture. '... and... (and so on)'.",
    formation:
      "N/V/adj + やら + N/V/adj + やら\n例: 泣[な]くやら笑[わら]うやら / 本[ほん]やらノートやら",
    examples: [
      { jp: "荷物[にもつ]は本[ほん]やら服[ふく]やらでいっぱいだ。", en: "The luggage is stuffed with books, clothes, and so on." },
      { jp: "合格[ごうかく]を知[し]って、嬉[うれ]しいやら驚[おどろ]いたやらだ。", en: "Learning I had passed, I was a mix of happy and surprised." }
    ],
    notes:
      "Suggests an unmanageable variety. Unlike 〜や〜や, both listed items are actually present, and the nuance is 'this and that, all at once'. Often conveys emotional overwhelm.",
    related: ["gn1-90", "gn1-88"]
  },

  // ───────────────────────── Conjunctions ─────────────────────────
  {
    id: "gn1-92",
    point: "〜ひいては",
    reading: "hiite wa",
    level: "N1",
    category: "Conjunctions",
    meaning: "And eventually / and even / extending to (a greater consequence)",
    structure: "Phrase + ひいては",
    explanation:
      "Used to extend an idea from a smaller or immediate scope to a larger or further one. '...and what is more, eventually / extending to...'.",
    formation:
      "句 + ひいては + 句\n例: 個人[こじん]の、ひいては社会[しゃかい]の / 小[ちい]さな努力[どりょく]が、ひいては",
    examples: [
      { jp: "これは地域[ちいき]の、ひいては国[くに]の問題[もんだい]だ。", en: "This is a problem for the region, and by extension, for the country." },
      { jp: "小[ちい]さな努力[どりょく]が、ひいては大[おお]きな成果[せいか]につながる。", en: "Small efforts will eventually lead to great results." }
    ],
    notes:
      "Connects a smaller-scale item to a larger-scale one. Formal. Often pairs with 〜のみならず or 〜はもとより to broaden the scope of impact.",
    related: ["gn1-93", "gn1-95"]
  },
  {
    id: "gn1-93",
    point: "〜とあいまって / 〜と相まって",
    reading: "to aimatte / to aimatte",
    level: "N1",
    category: "Conjunctions",
    meaning: "Along with / in conjunction with (producing a combined effect)",
    structure: "N + と（が）あいまって",
    explanation:
      "Indicates that two factors combine to produce a particular (often amplified) result. 'Combined with... / together with...'.",
    formation:
      "N + と(が)あいまって\n例: 才能[さいのう]と努力[どりょく]があいまって / 好天[こうてん]とあいまって",
    examples: [
      { jp: "才能[さいのう]と努力[どりょく]とがあいまって、彼[かれ]は成功[せいこう]を収[おさ]めた。", en: "Talent and effort combined to bring him success." },
      { jp: "好天[こうてん]とあいまって、行楽[こうらく]客[きゃく]が急増[きゅうぞう]した。", en: "Combined with fine weather, the number of sightseers surged." }
    ],
    notes:
      "The two factors usually reinforce each other to produce the result. Also written と相まって. The result clause describes an outcome of the synergy, often positive or amplified.",
    related: ["gn1-92", "gn1-94"]
  },
  {
    id: "gn1-94",
    point: "〜とあって",
    reading: "to atte",
    level: "N1",
    category: "Conjunctions",
    meaning: "Because / as / since (a special circumstance leads to a result)",
    structure: "普通体 + とあって",
    explanation:
      "Indicates that because of a special or notable circumstance, a particular (often expected) result follows. 'Because / as...'.",
    formation:
      "普通体 + とあって\n例: 夏[なつ]休[やす]みとあって / 人気[にんき]俳優[はいゆう]の登場[とうじょう]とあって",
    examples: [
      { jp: "夏[なつ]休[やす]みとあって、海水浴場[かいすいよくじょう]は人[ひと]で賑[にぎ]わっていた。", en: "Because it was summer vacation, the beach was crowded with people." },
      { jp: "人気[にんき]俳優[はいゆう]の登場[とうじょう]とあって、会場[かいじょう]は騒然[そうぜん]とした。", en: "With a popular actor appearing, the venue was in an uproar." }
    ],
    notes:
      "Explains a cause that produces an understandable result. Slightly literary or journalistic. Unlike 〜だから, it focuses on the special situation itself as the cause.",
    related: ["gn1-93", "gn1-92"]
  },
  {
    id: "gn1-95",
    point: "〜のみならず",
    reading: "nomi narazu",
    level: "N1",
    category: "Conjunctions",
    meaning: "Not only... but also",
    structure: "N + のみならず / 普通体 + のみならず",
    explanation:
      "A formal way to add additional information, expanding beyond what was just stated. 'Not only... but (also)...'.",
    formation:
      "N / 普通体 + のみならず\n例: 国内[こくない]のみならず / 若者[わかもの]のみならず",
    examples: [
      { jp: "この問題[もんだい]は国内[こくない]のみならず、海外[かいがい]にも影響[えいきょう]を及[およ]ぼしている。", en: "This problem affects not only the domestic situation but also overseas." },
      { jp: "彼[かれ]は優[すぐ]れた科学者[かがくしゃ]であるのみならず、教育者[きょういくしゃ]でもある。", en: "He is not only an excellent scientist but also an educator." }
    ],
    notes:
      "Formal equivalent of 〜だけで（は）なく. Often followed by 〜も or 〜さえ to introduce the additional item. Common in written and formal speech.",
    related: ["gn1-92", "gn1-96"]
  },
  {
    id: "gn1-96",
    point: "〜にとどまらず",
    reading: "ni todomarazu",
    level: "N1",
    category: "Conjunctions",
    meaning: "Not limited to / not stopping at (extending beyond)",
    structure: "N + にとどまらず / V-辞書形 + にとどまらず",
    explanation:
      "Indicates that something is not confined to one area or domain but extends to others. 'Not limited to... / extending beyond...'.",
    formation:
      "N / V-辞書形 + にとどまらず\n例: 国内[こくない]にとどまらず / 一[ひと]つの街[まち]にとどまらず",
    examples: [
      { jp: "その人気[にんき]は国内[こくない]にとどまらず、世界[せかい]中[じゅう]に広[ひろ]がった。", en: "Its popularity was not limited to the country but spread worldwide." },
      { jp: "被害[ひがい]は一[ひと]つの街[まち]にとどまらず、隣[となり]の県[けん]にも及[およ]んだ。", en: "The damage did not stop at one town but reached the neighboring prefecture." }
    ],
    notes:
      "Focuses on expansion beyond a boundary. Formal and written. Often paired with 〜ばかりか or 〜のみならず for emphasis on the breadth of impact.",
    related: ["gn1-95", "gn1-92"]
  },

  // ───────────────────────── Modifiers ─────────────────────────
  {
    id: "gn1-97",
    point: "〜にかたくない",
    reading: "ni katakunai",
    level: "N1",
    category: "Modifiers",
    meaning: "Not difficult to (imagine / understand)",
    structure: "N + にかたくない",
    explanation:
      "Used to say that something is easy to imagine or understand given the circumstances. 'It is not hard to...'.",
    formation:
      "N + にかたくない\n例: 想像[そうぞう]にかたくない / 理解[りかい]にかたくない / 察[さっ]するにかたくない",
    examples: [
      { jp: "彼[かれ]がどれほど悔[くや]しかったか、想像[そうぞう]に難[かた]くない。", en: "It is not hard to imagine how frustrated he was." },
      { jp: "両親[りょうしん]が喜[よろこ]んだ理由[りゆう]は理解[りかい]にかたくない。", en: "It is not difficult to understand why the parents were delighted." }
    ],
    notes:
      "Almost always used with nouns such as 想像[そうぞう], 理解[りかい], 察[さっ]する. Formal and literary. The kanji 難 is read かた here, not むずか.",
    related: ["gn1-98", "gn1-99"]
  },
  {
    id: "gn1-98",
    point: "〜にたえる / 〜にたえない",
    reading: "ni taeru / ni taenai",
    level: "N1",
    category: "Modifiers",
    meaning: "Worth (doing) / cannot bear to (do)",
    structure: "N / V-辞書形 + にたえる (worth) / にたえない (cannot bear)",
    explanation:
      "Two opposite uses: にたえる means 'is worth -ing' (praiseworthy); にたえない means 'cannot bear / is too much to -' (often of emotions or poor quality).",
    formation:
      "N / V-辞書形 + にたえる / にたえない\n例: 賞[しょう]にたえる / 鑑賞[かんしょう]にたえる / 感謝[かんしゃ]にたえない",
    examples: [
      { jp: "彼[かれ]の作品[さくひん]は鑑賞[かんしょう]にたえる優[すぐ]れたものだ。", en: "His work is excellent, worth appreciating." },
      { jp: "お気[き]遣[づか]いいただき、感謝[かんしゃ]にたえません。", en: "I cannot sufficiently express my gratitude for your kindness." }
    ],
    notes:
      "にたえる is positive ('worth'), にたえない is negative ('unbearable / cannot fully'). Common fixed phrase: 感謝[かんしゃ]にたえない (deeply grateful). にたえない also with 見る / 聞く for poor quality.",
    related: ["gn1-97", "gn1-99"]
  },
  {
    id: "gn1-99",
    point: "〜を禁じ得ない",
    reading: "o kinji enai",
    level: "N1",
    category: "Modifiers",
    meaning: "Cannot suppress / cannot help (feeling)",
    structure: "N（感情） + を禁じ得ない",
    explanation:
      "Expresses that an emotion is so strong it cannot be held back. 'Cannot help but feel... / cannot suppress...'.",
    formation:
      "N(感情[かんじょう]) + を禁[きん]じ得[え]ない\n例: 涙[なみだ]を禁[きん]じ得ない / 驚[おどろ]きを禁[きん]じ得ない / 怒[いか]りを禁[きん]じ得ない",
    examples: [
      { jp: "彼[かれ]の言葉[ことば]に、涙[なみだ]を禁[きん]じ得なかった。", en: "His words brought tears I could not suppress." },
      { jp: "突然[とつぜん]の知[し]らせに、驚[おどろ]きを禁[きん]じ得ない。", en: "I cannot suppress my surprise at the sudden news." }
    ],
    notes:
      "The noun is always an emotion noun (涙, 驚き, 怒り, 感動). Formal and literary. A fixed idiom expressing an overwhelming feeling that defies suppression.",
    related: ["gn1-98", "gn1-100"]
  },
  {
    id: "gn1-100",
    point: "〜にすぎない",
    reading: "ni suginai",
    level: "N1",
    category: "Modifiers",
    meaning: "Merely / nothing more than / just",
    structure: "N / V-普通体 / Na-adj（な） + にすぎない",
    explanation:
      "Emphasizes that something is no more than what is stated, often downplaying its importance. 'It is nothing more than... / merely...'.",
    formation:
      "N / 普通体 + にすぎない\n例: 言[い]い訳[わけ]にすぎない / 一[ひと]つの例[れい]にすぎない",
    examples: [
      { jp: "それは単[たん]なる言[い]い訳[わけ]にすぎない。", en: "That is nothing more than a mere excuse." },
      { jp: "私[わたし]は一人[ひとり]の学生[がくせい]にすぎないが、意見[いけん]を言[い]わせてほしい。", en: "I am just one student, but please let me state my opinion." }
    ],
    notes:
      "Carries a tone of belittlement or modesty. Used to downplay one's own role or to dismiss something as insignificant. Formal. Often contrasts with grander claims.",
    related: ["gn1-99", "gn1-97"]
  }
];
