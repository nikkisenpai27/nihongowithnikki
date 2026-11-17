import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]みきる.
//
// JLPT N3 grammar points (Shinzaizen Master style), chunk B.
// IDs gn3-51 .. gn3-100. 50 points distributed across 10 categories.
// Chunk A (gn3-01 .. gn3-50) covers a separate set of N3 points.

export const grammarN3B: GrammarData[] = [
  // ──────────────────────────────────────────────────────────────────────
  // CONDITIONALS (gn3-51 .. gn3-55)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-51",
    point: "〜さえ〜ば",
    reading: "sae ~ ba",
    level: "N3",
    category: "Conditionals",
    meaning: "As long as... / If only...",
    structure: "N + さえ + V-ば形 / い-adj 〜ければ / な-adj なら / N なら + (主文)",
    explanation:
      "〜さえ〜ば states that if just one essential condition is satisfied, everything else will work out. It singles out the one indispensable requirement for the desired result.",
    formation:
      "N + さえ + あれば: お金[かね]さえあれば / 健康[けんこう]さえあれば\nV-ば形: 君[きみ]さえ来[く]れば\nい-adj + さえ + ければ: 安[やす]くさえあれば\nな-adj + でさえあれば: 好[す]きでさえあれば",
    examples: [
      { jp: "お金[かね]さえあれば、旅行[りょこう]に行[い]けるのに。", en: "If only I had money, I could go on a trip." },
      { jp: "あなたさえそばにいてくれれば、ほかには何[なに]もいりません。", en: "As long as you stay by my side, I need nothing else." }
    ],
    notes:
      "The pattern is often used with ある (〜さえあれば) to mean 'if only one has N'. The main clause expresses the result that follows once the condition is met.",
    related: []
  },

  {
    id: "gn3-52",
    point: "〜ないことには",
    reading: "nai koto ni wa",
    level: "N3",
    category: "Conditionals",
    meaning: "Unless... / If not..., (cannot)",
    structure: "V-ない形 + ないことには + 〜ない (後件は否定)",
    explanation:
      "〜ないことには means 'unless X happens, Y (negative) will result'. The main clause must be in a negative form, emphasizing that without the first condition, the second cannot be achieved.",
    formation:
      "V-ない形 + ないことには + 〜ない\n例: 見[み]ないことにはわからない\n聞[き]かないことには答[こた]えられない\n行[い]かないことには始[はじ]まらない",
    examples: [
      { jp: "実際[じっさい]に食[た]べてみないことには、美味[おい]しいかどうかわからない。", en: "Unless I actually try eating it, I cannot tell whether it is delicious." },
      { jp: "彼[かれ]に会[あ]わないことには、話[はな]せない。", en: "Unless I meet him, I cannot talk to him." }
    ],
    notes:
      "The clause after 〜ないことには must be negative (e.g., わからない, できない). It emphasizes the necessity of the first action.",
    related: []
  },

  {
    id: "gn3-53",
    point: "〜てからでないと",
    reading: "te kara denai to",
    level: "N3",
    category: "Conditionals",
    meaning: "Unless one does... first, ...cannot",
    structure: "V-て形 + からでないと + 〜ない / 〜できない",
    explanation:
      "〜てからでないと stresses that action A must be completed first before action B becomes possible. The main clause is always negative, indicating that without doing A first, B cannot happen.",
    formation:
      "V-て形 + からでないと + 〜ない\n例: 調[しら]べてからでないと決[き]められない\n休[やす]んでからでないと働[はたら]けない\n見[み]てからでないと買[か]えない",
    examples: [
      { jp: "スケジュール[すけじゅーる]を確認[かくにん]してからでないと、約束[やくそく]できません。", en: "Unless I check my schedule first, I cannot make a promise." },
      { jp: "親[おや]に相談[そうだん]してからでないと、返事[へんじ]できません。", en: "Unless I consult my parents first, I cannot give a reply." }
    ],
    notes:
      "A more emphatic version of 〜てから〜ない. It is often used when refusing or postponing a decision until the prerequisite action is done.",
    related: []
  },

  {
    id: "gn3-54",
    point: "〜としたら / 〜とすると / 〜とすれば",
    reading: "to shitara / to suru to / to sureba",
    level: "N3",
    category: "Conditionals",
    meaning: "If one assumes that... / Supposing that...",
    structure: "普通体 + としたら / とすると / とすれば",
    explanation:
      "〜としたら hypothesizes a situation and considers what one would do or what would follow under that assumption. とすると focuses on the immediate consequence; とすれば is slightly more formal.",
    formation:
      "普通体 + としたら / とすると / とすれば\n例: 雨[あめ]が降[ふ]ったとしたら\n行[い]けないとすれば\n高[たか]いとしたら買[か]わない\nN + だ + としたら: 本物[ほんもの]だとしたら",
    examples: [
      { jp: "もし私[わたし]が鳥[とり]だったとしたら、空[そら]を飛[と]びたい。", en: "If I were a bird, I would want to fly in the sky." },
      { jp: "彼[かれ]の言[い]うことが本当[ほんとう]だとしたら、大変[たいへん]なことだ。", en: "If what he says is true, it would be a serious matter." }
    ],
    notes:
      "Often introduced by もし to mark a hypothetical scenario. The main clause expresses what the speaker would do, feel, or conclude under the assumption.",
    related: []
  },

  {
    id: "gn3-55",
    point: "〜てこそ",
    reading: "te koso",
    level: "N3",
    category: "Conditionals",
    meaning: "Only by doing... can one truly... / It is precisely through... that...",
    structure: "V-て形 + こそ + (初めて) + 〜のだ / 〜ことができる",
    explanation:
      "〜てこそ emphasizes that only after actually experiencing or doing something can one truly understand, achieve, or appreciate what follows. It carries a tone of conviction about the value of that experience.",
    formation:
      "V-て形 + こそ\n例: 失敗[しっぱい]してこそ成長[せいちょう]できる\n苦[くる]しんでこそわかる\n知[し]ってこそ役[やく]に立[た]つ",
    examples: [
      { jp: "苦[くる]しい経験[けいけん]をしてこそ、人[ひと]は強[つよ]くなれるのだ。", en: "Only by going through painful experiences can a person become strong." },
      { jp: "自分[じぶん]で作[つく]ってこそ、楽[たの]しさがわかる。", en: "Only by making it yourself do you understand the joy." }
    ],
    notes:
      "Often paired with 初[はじ]めて or 〜のだ to stress that the experience is the genuine key to the result. It expresses a value judgment, not just a sequence.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // CAUSE / REASON (gn3-56 .. gn3-60)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-56",
    point: "〜あまり",
    reading: "amari",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Due to being too... / Because of excessive...",
    structure: "感情N + の + あまり / な-adj + なあまり / V-辞書形 + あまり",
    explanation:
      "〜あまり indicates that an excess of some feeling or state has produced a result, often extreme or uncontrollable. It is typically used with nouns of emotion such as 驚き, 嬉しさ, 悲しみ.",
    formation:
      "感情N + の + あまり: 驚[おどろ]きのあまり / 嬉[うれ]しさのあまり\nな-adj + なあまり: 静[しず]かなあまり\nV-辞書形 + あまり: 考[かんが]えるあまり",
    examples: [
      { jp: "驚[おどろ]きのあまり、声[こえ]が出[で]なかった。", en: "I was so surprised that I could not speak." },
      { jp: "嬉[うれ]しさのあまり、泣[な]いてしまった。", en: "I was so happy that I ended up crying." }
    ],
    notes:
      "Most commonly used with emotion nouns like 驚[おどろ]き, 嬉[うれ]しさ, 悲[かな]しみ, 怒[いか]り. The main clause typically describes an extreme physical or mental reaction.",
    related: []
  },

  {
    id: "gn3-57",
    point: "〜以上(は)",
    reading: "ijou (wa)",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Since... / Now that... (strong resolve)",
    structure: "V-普通形 + 以上(は) / N + である + 以上(は) / な-adj + である + 以上(は)",
    explanation:
      "〜以上(は) expresses strong resolve or obligation: since the situation in the first clause is now an established fact, the speaker feels bound to act in the way stated in the main clause.",
    formation:
      "V-普通形 + 以上(は): 引[ひ]き受[う]けた以上は\nV-ない + 以上は: やらない以上は\nN + である + 以上: 学生[がくせい]である以上\nな-adj + である以上: 好[す]きである以上",
    examples: [
      { jp: "一度[いちど]引[ひ]き受[う]けた以上[いじょう]、最後[さいご]までやり遂[と]げる。", en: "Since I have taken it on, I will carry it through to the end." },
      { jp: "学生[がくせい]である以上[いじょう]、規則[きそく]を守[まも]らなければならない。", en: "As long as one is a student, one must follow the rules." }
    ],
    notes:
      "The main clause expresses obligation, determination, or necessity (e.g., 〜なければならない, 〜つもりだ). は is often added for emphasis.",
    related: []
  },

  {
    id: "gn3-58",
    point: "〜ことから",
    reading: "koto kara",
    level: "N3",
    category: "Cause/Reason",
    meaning: "From the fact that... / Judging from the fact that...",
    structure: "普通体 + ことから",
    explanation:
      "〜ことから indicates that the speaker draws a conclusion or inference based on the fact stated in the preceding clause. It is common in written, objective reasoning such as reports and explanations.",
    formation:
      "普通体 + ことから\n例: 足音[あしおと]が違[ちが]うことから\n証拠[しょうこ]がないことから\n形[かたち]が似[に]ていることから\nN + だ + ことから: 兄弟[きょうだい]だということから",
    examples: [
      { jp: "二人[ふたり]の名前[なまえ]が同[おな]じことから、兄弟[きょうだい]だとわかった。", en: "From the fact that their names were the same, I realized they were siblings." },
      { jp: "現場[げんば]に指紋[しもん]がなかったことから、犯人[はんにん]は手袋[てぶくろ]をしていたと推測[すいそく]された。", en: "From the absence of fingerprints at the scene, it was inferred that the culprit had worn gloves." }
    ],
    notes:
      "Often used in detective, scientific, or historical explanations. The conclusion in the main clause is typically marked by わかった, 推測[すいそく]される, 考[かんが]えられる.",
    related: []
  },

  {
    id: "gn3-59",
    point: "〜ばかりに",
    reading: "bakari ni",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Just because... (leading to a bad result)",
    structure: "普通体 + ばかりに",
    explanation:
      "〜ばかりに expresses regret or complaint that a single cause led to an undesirable outcome. It emphasizes that only that factor was responsible for the negative result that follows.",
    formation:
      "普通体 + ばかりに\n例: 油[あぶら]断[だん]したばかりに\n嘘[うそ]をついたばかりに\n好[す]きだと言[い]ったばかりに\nい-adj + ばかりに: 高[たか]いばかりに",
    examples: [
      { jp: "油断[ゆだん]したばかりに、試合[しあい]に負[ま]けてしまった。", en: "Just because I let my guard down, I ended up losing the match." },
      { jp: "嘘[うそ]をついたばかりに、信用[しんよう]を失[うしな]ってしまった。", en: "Just because I told a lie, I lost people's trust." }
    ],
    notes:
      "The main clause always expresses a negative or regrettable outcome. It conveys the speaker's sense that the bad result was caused by that one thing alone.",
    related: []
  },

  {
    id: "gn3-60",
    point: "〜のは〜からだ",
    reading: "no wa ~ kara da",
    level: "N3",
    category: "Cause/Reason",
    meaning: "The reason why... is because...",
    structure: "結果 + のは + 理由 + からだ",
    explanation:
      "〜のは〜からだ is a cleft construction that highlights the reason: 'The reason why X happens is Y.' The part before のは states the result, and the part after からだ gives the reason.",
    formation:
      "結果 + のは + 理由 + からだ\n例: 遅[おく]れたのは電車[でんしゃ]が遅[おく]れたからだ\n行[い]かないのは疲[つか]れたからだ\n失敗[しっぱい]したのは準備[じゅんび]が足[た]りなかったからだ",
    examples: [
      { jp: "彼[かれ]が遅[おく]れたのは、電車[でんしゃ]が事故[じこ]で止[と]まったからだ。", en: "The reason he was late is that the train stopped due to an accident." },
      { jp: "私[わたし]が日本[にほん]に来[き]たのは、日本[にほん]の文化[ぶんか]を学[まな]びたかったからだ。", en: "The reason I came to Japan is that I wanted to learn Japanese culture." }
    ],
    notes:
      "Used to focus attention on the reason. Both the result clause and the reason clause are in plain form. Polite version is 〜のは〜からです.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // TIME / SEQUENCE (gn3-61 .. gn3-65)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-61",
    point: "〜うちに",
    reading: "uchi ni",
    level: "N3",
    category: "Time/Sequence",
    meaning: "While... / Before the state changes...",
    structure: "V-辞書形/ない + うちに / い-adj + うちに / な-adj + なうちに / Nの + うちに",
    explanation:
      "〜うちに expresses an action done while a certain state continues, before it changes. With a negative verb it means 'before something happens'; with an affirmative verb it means 'while still doing/being'.",
    formation:
      "V-辞書形 + うちに: 元気[げんき]なうちに\nV-ない + うちに: 忘[わす]れないうちに\nい-adj + うちに: 暗[くら]くならないうちに\nNの + うちに: 若[わか]いうちに",
    examples: [
      { jp: "暗[くら]くならないうちに、帰[かえ]りましょう。", en: "Let's go home before it gets dark." },
      { jp: "熱[あつ]いうちに、召[め]し上[あ]がってください。", en: "Please eat it while it is still hot." }
    ],
    notes:
      "With 〜ないうちに (negative), the focus is on doing something before the state changes. With an affirmative, the focus is on taking advantage of an ongoing state.",
    related: []
  },

  {
    id: "gn3-62",
    point: "〜際に / 〜際は",
    reading: "sai ni / sai wa",
    level: "N3",
    category: "Time/Sequence",
    meaning: "On the occasion of... / When...",
    structure: "V-辞書形/た形 + 際(に) / Nの + 際(に)",
    explanation:
      "〜際に is a formal expression meaning 'on the occasion of' or 'when'. It is used for special or important moments rather than everyday events, and is common in writing, notices, and polite speech.",
    formation:
      "V-辞書形 + 際に: 行[い]く際に\nV-た形 + 際に: 行[い]った際に\nNの + 際に: 帰国[きこく]の際に\nお/ご + N + 際: ご注文[ちゅうもん]の際は",
    examples: [
      { jp: "お帰[かえ]りの際[さい]は、受付[うけつけ]へお声[こえ]がけください。", en: "When leaving, please let the reception desk know." },
      { jp: "旅行[りょこう]の際[さい]は、必[かなら]ずパスポート[ぱすぽーと]を持[も]って行[い]ってください。", en: "When traveling, please make sure to bring your passport." }
    ],
    notes:
      "More formal than 〜時. Often seen in public notices and business writing. With respectful nouns, use お/ご + N + 際, e.g., ご注文[ちゅうもん]の際は.",
    related: []
  },

  {
    id: "gn3-63",
    point: "〜最中に",
    reading: "saichuu ni",
    level: "N3",
    category: "Time/Sequence",
    meaning: "In the middle of... / Right in the midst of...",
    structure: "V-て形 + いる + 最中に / Nの + 最中に",
    explanation:
      "〜最中に expresses that an event happened at the very height or peak of another ongoing activity, often with a sense of interruption or sudden overlap.",
    formation:
      "V-て形 + いる最中に: 食[た]べている最中に\nNの + 最中に: 会議[かいぎ]の最中に\nV-て形 + 最中: 話[はな]している最中",
    examples: [
      { jp: "会議[かいぎ]の最中[さいちゅう]に、電話[でんわ]が鳴[な]った。", en: "Right in the middle of the meeting, the phone rang." },
      { jp: "食事[しょくじ]の最中[さいちゅう]に、停電[ていでん]になった。", en: "In the middle of the meal, the power went out." }
    ],
    notes:
      "Used when an action or event interrupts an ongoing activity. The two events overlap, often with a sense of bad timing.",
    related: []
  },

  {
    id: "gn3-64",
    point: "〜たびに",
    reading: "tabi ni",
    level: "N3",
    category: "Time/Sequence",
    meaning: "Every time... / Whenever...",
    structure: "V-辞書形 + たびに / Nの + たびに",
    explanation:
      "〜たびに indicates that whenever the event in the first clause occurs, the event in the main clause also happens, often with a sense of repetition, regularity, or gradual accumulation.",
    formation:
      "V-辞書形 + たびに: 会[あ]うたびに\nNの + たびに: 出張[しゅっちょう]のたびに\nV-辞書形 + たびに + 感[かん]じる",
    examples: [
      { jp: "彼[かれ]は会[あ]うたびに、大[おお]きくなっている。", en: "Every time I meet him, he has grown bigger." },
      { jp: "この曲[きょく]を聞[き]くたびに、子供[こども]時代[じだい]を思[おも]い出[だ]す。", en: "Every time I hear this song, I am reminded of my childhood." }
    ],
    notes:
      "Implies a repeated, habitual connection between two events. Often used with verbs of perception (見る, 聞く, 会う) and verbs of remembering or feeling.",
    related: []
  },

  {
    id: "gn3-65",
    point: "〜つつある",
    reading: "tsutsu aru",
    level: "N3",
    category: "Time/Sequence",
    meaning: "In the process of... / Currently undergoing... (gradual change)",
    structure: "V-ます形 + つつある",
    explanation:
      "〜つつある expresses an ongoing change or process that is currently in progress, often a gradual shift. It is more formal than 〜ている and emphasizes progression rather than state.",
    formation:
      "V-ます形 + つつある\n例: 変[か]わりつつある\n増[ふ]えつつある\n回復[かいふく]しつつある\n減[へ]りつつある",
    examples: [
      { jp: "この町[まち]は急速[きゅうそく]に変[か]わりつつある。", en: "This town is rapidly changing." },
      { jp: "彼[かれ]の病状[びょうじょう]は少[すこ]しずつ回復[かいふく]しつつある。", en: "His condition is gradually recovering." }
    ],
    notes:
      "Used mainly with verbs of change (変わる, 増える, 減る, 回復する, 発展する). It cannot be used with stative verbs like いる, 知る, ある.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // CONTRAST (gn3-66 .. gn3-70)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-66",
    point: "〜一方(で)",
    reading: "ippou (de)",
    level: "N3",
    category: "Contrast",
    meaning: "On one hand..., on the other hand...",
    structure: "V-辞書形 + 一方(で) / Nの + 一方(で) / い-adj + 一方(で)",
    explanation:
      "〜一方(で) presents two contrasting or coexisting aspects of a situation. The main clause states something that contrasts with, or exists alongside, what is described in the first clause.",
    formation:
      "V-辞書形 + 一方で: 増[ふ]える一方で\nN + である + 一方で: 先生[せんせい]である一方で\nい-adj + 一方で: 高[たか]い一方で",
    examples: [
      { jp: "彼[かれ]は小説家[しょうせつか]である一方[いっぽう]で、大学[だいがく]の先生[せんせい]でもある。", en: "He is a novelist, and on the other hand, he is also a university professor." },
      { jp: "都市[とし]の人口[じんこう]は増[ふ]える一方[いっぽう]で、農村[のうそん]では減[へ]っている。", en: "While the urban population is increasing, in rural areas it is decreasing." }
    ],
    notes:
      "Without で, 一方 alone can mean 'continually increasing/decreasing' (e.g., 強[つよ]くなる一方だ = 'getting stronger and stronger'). With で, it marks contrast.",
    related: []
  },

  {
    id: "gn3-67",
    point: "〜どころか",
    reading: "dokoro ka",
    level: "N3",
    category: "Contrast",
    meaning: "Far from... / Not to mention... (opposite is true)",
    structure: "普通体 + どころか / N + どころか",
    explanation:
      "〜どころか strongly contrasts an expectation with reality: not only is the expected situation not the case, but the opposite (or something even more extreme) is true.",
    formation:
      "普通体 + どころか\n例: 好[す]きなどころか\nできるどころか\n静[しず]かなどころか\nN + どころか: 雨[あめ]どころか",
    examples: [
      { jp: "彼[かれ]は英語[えいご]ができなどころか、自分[じぶん]の名前[なまえ]も書[か]けない。", en: "Far from being able to speak English, he cannot even write his own name." },
      { jp: "休[やす]むどころか、週末[しゅうまつ]も働[はたら]いている。", en: "Far from resting, he is working even on weekends." }
    ],
    notes:
      "Used to deny an expectation and present a contrasting, often stronger, fact. Often used with 〜ない in the main clause to emphasize the negative outcome.",
    related: []
  },

  {
    id: "gn3-68",
    point: "〜にしては",
    reading: "ni shite wa",
    level: "N3",
    category: "Contrast",
    meaning: "For... / Considering that... (unexpected)",
    structure: "V-普通形 + にしては / N + にしては / い-adj + にしては",
    explanation:
      "〜にしては indicates that the result is unexpected or disproportionate given the assumption about the subject. It expresses surprise, evaluation, or judgment based on a standard.",
    formation:
      "V-普通形 + にしては: 初[はじ]めてにしては\nN + にしては: 子供[こども]にしては\nい-adj + にしては: 高[たか]いにしては\nV-た形 + にしては: やったにしては",
    examples: [
      { jp: "初[はじ]めてにしては、上手[じょうず]に話[はな]せている。", en: "For a first attempt, he is speaking quite well." },
      { jp: "彼[かれ]は学生[がくせい]にしては、車[くるま]を持[も]っている。", en: "For a student, he owns a car." }
    ],
    notes:
      "Expresses that something is contrary to expectation based on a standard. Differs from 〜わりに(は) in that 〜にしては focuses on the mismatch between expectation and fact.",
    related: []
  },

  {
    id: "gn3-69",
    point: "〜とはいえ",
    reading: "to wa ie",
    level: "N3",
    category: "Contrast",
    meaning: "Even though... / That said,...",
    structure: "普通体 + とはいえ / N + とはいえ / な-adj + とはいえ",
    explanation:
      "〜とはいえ concedes what was said in the first clause but introduces a contrasting point in the main clause. It is a formal expression meaning 'although one may say that...'.",
    formation:
      "普通体 + とはいえ\n例: 春[はる]とはいえ\n苦[くる]しかったとはいえ\n成功[せいこう]したとはいえ\nN + だ + とはいえ: 子供[こども]だとはいえ",
    examples: [
      { jp: "春[はる]とはいえ、まだ寒[さむ]い日[ひ]がある。", en: "Even though it is spring, there are still cold days." },
      { jp: "試合[しあい]に勝[か]ったとはいえ、反省[はんせい]すべき点[てん]が多[おお]い。", en: "Even though we won the match, there are many points to reflect on." }
    ],
    notes:
      "Used in formal or written contexts to add a caveat or limitation after conceding a point. Similar to 〜けれども but more literary.",
    related: []
  },

  {
    id: "gn3-70",
    point: "〜わりに(は)",
    reading: "wari ni (wa)",
    level: "N3",
    category: "Contrast",
    meaning: "For... / Considering... (disproportionate)",
    structure: "V-普通形 + わりに(は) / Nの + わりに(は) / い-adj + わりに(は) / な-adj + な + わりに(は)",
    explanation:
      "〜わりに(は) indicates that the result does not match the expectation suggested by the first clause. It expresses disproportion between cause, situation, or characteristic and the result.",
    formation:
      "V-普通形 + わりには: 勉強[べんきょう]したわりには\nNの + わりには: 年齢[ねんれい]のわりには\nい-adj + わりには: 高[たか]いわりには\nな-adj + なわりには: 静[しず]かなわりには",
    examples: [
      { jp: "彼[かれ]は勉強[べんきょう]したわりに、成績[せいせき]が悪[わる]い。", en: "Considering how much he studied, his grades are poor." },
      { jp: "このレストラン[れすとらん]は高[たか]いわりには、味[あじ]が普通[ふつう]だ。", en: "For an expensive restaurant, the taste is just average." }
    ],
    notes:
      "Both positive and negative contrasts are possible. It expresses a mismatch between expectation and reality, often implying a slight criticism or surprise.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // ASSUMPTION (gn3-71 .. gn3-75)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-71",
    point: "〜かねない",
    reading: "kanenai",
    level: "N3",
    category: "Assumption",
    meaning: "Might... / Could possibly... (negative outcome)",
    structure: "V-ます形 + かねない",
    explanation:
      "〜かねない indicates that there is a real risk of an undesirable outcome happening. It is used to warn about a possible negative consequence, often based on a hypothetical situation.",
    formation:
      "V-ます形 + かねない\n例: 起[お]こりかねない\n遅[おく]れかねない\n壊[こわ]れかねない\n誤解[ごかい]されかねない",
    examples: [
      { jp: "油断[ゆだん]すると、大[おお]きな事故[じこ]が起[お]こりかねない。", en: "If you let your guard down, a major accident could happen." },
      { jp: "夜[よる]遅[おそ]くまで起[お]きていると、体[からだ]を壊[こわ]しかねない。", en: "Staying up late into the night could ruin your health." }
    ],
    notes:
      "Always used about negative, undesirable outcomes. The opposite form 〜かねる means 'cannot bring oneself to do' and refers to hesitation, not risk.",
    related: []
  },

  {
    id: "gn3-72",
    point: "〜っこない",
    reading: "kkonai",
    level: "N3",
    category: "Assumption",
    meaning: "Absolutely impossible / Never could...",
    structure: "V-ます形 + っこない",
    explanation:
      "〜っこない is a strong colloquial expression meaning 'absolutely impossible' or 'there is no way that...'. It forcefully denies any possibility of the action occurring.",
    formation:
      "V-ます形 + っこない\n例: 分[わ]かりっこない\nできっこない\n勝[か]てっこない\n忘[わす]れっこない",
    examples: [
      { jp: "こんな難[むずか]しい問題[もんだい]、私[わたし]にはできっこない。", en: "I could never solve such a difficult problem." },
      { jp: "あの人[ひと]に頼[たの]んでも、手伝[てつだ]ってくれっこない。", en: "Even if I ask him, he would never help." }
    ],
    notes:
      "Spoken, colloquial, and emphatic. The equivalent formal expression is 〜わけがない or 〜はずがない. Avoid in formal writing or business contexts.",
    related: []
  },

  {
    id: "gn3-73",
    point: "〜に決まっている",
    reading: "ni kimatte iru",
    level: "N3",
    category: "Assumption",
    meaning: "Surely / Definitely / It must be the case that...",
    structure: "普通体 + に決まっている / N + に決まっている",
    explanation:
      "〜に決まっている expresses the speaker's strong conviction that something is definitely the case, based on reasoning or evidence. It is the colloquial counterpart of 〜に違いない.",
    formation:
      "普通体 + に決まっている\n例: 暑[あつ]いに決[き]まっている\n来[く]るに決まっている\n勝[か]つに決まっている\nN + に決まっている: 嘘[うそ]に決まっている",
    examples: [
      { jp: "こんなに勉強[べんきょう]したのだから、試験[しけん]に受[う]かるに決[き]まっている。", en: "Since I studied this much, I will surely pass the exam." },
      { jp: "彼[かれ]のことだから、また遅[おく]れてくるに決[き]まっている。", en: "Knowing him, he will surely be late again." }
    ],
    notes:
      "Used in casual speech; 〜に違いない is more formal and written. Often used with the pattern 〜のことだから when referring to someone's known habits.",
    related: []
  },

  {
    id: "gn3-74",
    point: "〜に違いない",
    reading: "ni chigainai",
    level: "N3",
    category: "Assumption",
    meaning: "Surely / No doubt / Must be...",
    structure: "普通体 + に違いない / N + に違いない / な-adj + に違いない",
    explanation:
      "〜に違いない expresses strong certainty about a judgment based on evidence or reasoning. It conveys the speaker's confidence that the conclusion cannot be otherwise.",
    formation:
      "普通体 + に違いない\n例: 本物[ほんもの]に違[ちが]いない\n来[く]るに違いない\n嬉[うれ]しいに違いない\nN + に違いない: 学生[がくせい]に違いない",
    examples: [
      { jp: "彼[かれ]の顔[かお]を見[み]ると、相当[そうとう]怒[おこ]っているに違[ちが]いない。", en: "Looking at his face, he must be quite angry." },
      { jp: "この設計[せっけい]は天才[てんさい]が作[つく]ったに違[ちが]いない。", en: "This design must have been made by a genius." }
    ],
    notes:
      "Slightly more formal and written than 〜に決まっている. Often used with reasoning based on visible evidence: 見[み]ると〜に違いない, 考[かんが]えると〜に違いない.",
    related: []
  },

  {
    id: "gn3-75",
    point: "〜わけがない",
    reading: "wake ga nai",
    level: "N3",
    category: "Assumption",
    meaning: "There is no way / It is impossible that...",
    structure: "普通体 + わけがない / N + なわけがない / な-adj + なわけがない",
    explanation:
      "〜わけがない expresses the speaker's strong logical denial that something could possibly be the case. It forcefully rules out the possibility based on reason.",
    formation:
      "普通体 + わけがない\n例: できるわけがない\n知[し]っているわけがない\n本当[ほんとう]なわけがない\nい-adj + わけがない: 高[たか]いわけがない",
    examples: [
      { jp: "彼[かれ]が嘘[うそ]をつくわけがない。", en: "There is no way he would lie." },
      { jp: "一度[いちど]も習[なら]っていないのに、上手[じょうず]なわけがない。", en: "There is no way he is good at it, having never learned it before." }
    ],
    notes:
      "Stronger and more logical than 〜ないだろう. It expresses impossibility based on circumstances, not just uncertainty.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // PASSIVE / CAUSATIVE (gn3-76 .. gn3-79)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-76",
    point: "〜(さ)せられる",
    reading: "(sa)serareru",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Be made to do / Be forced to do (causative-passive)",
    structure: "V-使役形 + れる (一-段) / V-使役形 + される (五-段, also short form)",
    explanation:
      "〜(さ)せられる is the causative-passive form, indicating that someone is made or forced to do something by another person. It often implies that the subject suffered the action unwillingly.",
    formation:
      "一-段 V: 見[み]させられる / 食[た]べさせられる\n五-段 V (full): 飲[の]ませられる / 書[か]かせられる\n五-段 V (short): 飲[の]まされる / 立[た]たされる\nする → させられる / 来[く]る → こさせられる",
    examples: [
      { jp: "子供[こども]の時[とき]、毎日[まいにち]ピアノ[ぴあの]を練習[れんしゅう]させられた。", en: "When I was a child, I was made to practice the piano every day." },
      { jp: "会議[かいぎ]で一時間[いちじかん]も立[た]たされた。", en: "I was made to stand for a whole hour at the meeting." }
    ],
    notes:
      "The short form (e.g., 飲[の]まされる) is common in speech for 5-dan verbs. Often conveys a sense of suffering or inconvenience to the subject.",
    related: []
  },

  {
    id: "gn3-77",
    point: "〜を余儀なくされる",
    reading: "o yogi naku sareru",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Be forced to / Be compelled to (against one's will)",
    structure: "N / V-辞書形こと + を余儀なくされる",
    explanation:
      "〜を余儀なくされる is a formal expression meaning one is forced into doing something against one's will due to unavoidable circumstances. It is common in news reports and formal writing.",
    formation:
      "N + を余儀なくされる: 中止[ちゅうし]を余儀[よぎ]なくされる\nV-辞書形こと + を余儀なくされる: 休[やす]むことを余儀なくされる\nN + を余儀なくされた (past): 変更[へんこう]を余儀なくされた",
    examples: [
      { jp: "台風[たいふう]のため、出発[しゅっぱつ]の延期[えんき]を余儀[よぎ]なくされた。", en: "Due to the typhoon, we were forced to postpone our departure." },
      { jp: "大雪[おおゆき]で、電車[でんしゃ]の運休[うんきゅう]を余儀[よぎ]なくされた。", en: "Due to heavy snow, we were forced to suspend train operations." }
    ],
    notes:
      "Used in formal contexts such as news, official statements, and reports. The noun is typically an action noun like 中止, 変更, 延期, 休業.",
    related: []
  },

  {
    id: "gn3-78",
    point: "〜ずにはすまない",
    reading: "zu ni wa sumanai",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Cannot get away without doing / Must do",
    structure: "V-ない形(ず) + にはすまない",
    explanation:
      "〜ずにはすまない expresses that the speaker feels they cannot let the matter pass without doing the action; they are socially or morally obligated to do it. It implies a sense of duty or necessity.",
    formation:
      "V-ない形(ず) + にはすまない\n例: 謝[あやま]らずにはすまない\n払[はら]わずにはすまない\n行[い]かずにはすまない\nする → せずにはすまない",
    examples: [
      { jp: "悪[わる]いことをしたのだから、謝[あやま]らずにはすまない。", en: "Since I did something wrong, I cannot get away without apologizing." },
      { jp: "他人[たにん]の物[もの]を壊[こわ]したのだから、弁償[べんしょう]せずにはすまない。", en: "Since I broke someone else's thing, I cannot get away without compensating them." }
    ],
    notes:
      "Used when the speaker recognizes a social or moral obligation. The action in question is something that cannot be avoided to settle the situation.",
    related: []
  },

  {
    id: "gn3-79",
    point: "〜ずにはおかない",
    reading: "zu ni wa okanai",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Will not fail to / Cannot help but do (strong effect)",
    structure: "V-ない形(ず) + にはおかない",
    explanation:
      "〜ずにはおかない expresses strong determination or inevitability: the speaker will definitely not let the matter pass without doing something, or a situation inevitably produces a strong effect on someone.",
    formation:
      "V-ない形(ず) + にはおかない\n例: 怒[おこ]らずにはおかない\n感動[かんどう]させずにはおかない\n笑[わら]わせずにはおかない\nする → せずにはおかない",
    examples: [
      { jp: "あんな失礼[しつれい]な言[い]い方[かた]をされたら、怒[おこ]らずにはおかない。", en: "If I am spoken to in such a rude way, I cannot help but get angry." },
      { jp: "彼[かれ]のスピーチ[すぴーち]は、聞[き]く者[もの]を感動[かんどう]させずにはおかない。", en: "His speech will inevitably move anyone who listens." }
    ],
    notes:
      "Often used of strong emotions or effects produced on someone (怒る, 感動させる, 笑わせる). More literary than 〜ずにはいられない.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // HONORIFIC (gn3-80 .. gn3-83)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-80",
    point: "〜させていただく",
    reading: "sasete itadaku",
    level: "N3",
    category: "Honorific",
    meaning: "Humbly receive permission to do / Be allowed to do",
    structure: "V-使役形(させて) + いただく",
    explanation:
      "〜させていただく is a humble expression indicating that the speaker humbly receives permission or favor to perform an action themselves. It is widely used in business and formal polite speech.",
    formation:
      "V-使役形(させて) + いただく\n例: 話[はな]させていただく\n休[やす]ませていただく\n説明[せつめい]させていただく\nV-て形 + いただく (without 使役): 見[み]ていただく",
    examples: [
      { jp: "それでは、私[わたし]から説明[せつめい]させていただきます。", en: "Then, allow me to explain." },
      { jp: "明日[あした]は休[やす]ませていただきます。", en: "Please allow me to take the day off tomorrow." }
    ],
    notes:
      "Very common in business Japanese. Some prescriptive grammarians caution against overuse when no actual permission is being sought, but in practice it is standard polite speech.",
    related: []
  },

  {
    id: "gn3-81",
    point: "〜お/ご〜になる",
    reading: "o/go ~ ni naru",
    level: "N3",
    category: "Honorific",
    meaning: "Respectful action (someone of higher status does)",
    structure: "お + V-ます形 + になる / ご + 漢語N + になる",
    explanation:
      "〜お/ご〜になる is a respectful pattern that elevates the action of a superior. With native Japanese verbs it takes お + ます形 + になる; with Sino-Japanese (漢語) nouns it takes ご + N + になる.",
    formation:
      "お + V-ます形 + になる: お待[ま]ちになる / お休[やす]みになる\nご + 漢語N + になる: ご到着[とうちゃく]になる / ご利用[りよう]になる\n特殊: お読[よ]みになる / お書[か]きになる",
    examples: [
      { jp: "先生[せんせい]はもうお帰[かえ]りになりました。", en: "The teacher has already gone home." },
      { jp: "社長[しゃちょう]もこの会議[かいぎ]にご出席[しゅっせき]になります。", en: "The company president will also attend this meeting." }
    ],
    notes:
      "For some verbs, special respectful verbs are preferred (e.g., いる → いらっしゃる, 言う → おっしゃる, 食べる → 召[め]し上[あ]がる). Avoid double honorifics.",
    related: []
  },

  {
    id: "gn3-82",
    point: "〜お/ご〜する",
    reading: "o/go ~ suru",
    level: "N3",
    category: "Honorific",
    meaning: "Humble action (speaker does toward a superior)",
    structure: "お + V-ます形 + する / ご + 漢語N + する",
    explanation:
      "〜お/ご〜する is a humble pattern that lowers the speaker's own action when directed toward a superior. With native Japanese verbs it takes お + ます形 + する; with Sino-Japanese nouns it takes ご + N + する.",
    formation:
      "お + V-ます形 + する: お持[も]ちする / お手伝[てつだ]いする\nご + 漢語N + する: ご案内[あんない]する / ご連絡[れんらく]する\nPolite: 〜いたします / 〜もうしあげます",
    examples: [
      { jp: "私[わたし]が駅[えき]までお送[おく]りします。", en: "I will humbly escort you to the station." },
      { jp: "後[あと]でこちらからご連絡[れんらく]します。", en: "I will contact you from here later." }
    ],
    notes:
      "For some verbs, special humble verbs are preferred (e.g., 行く/来る → 参[まい]る, 言う → 申[もう]す, 見る → 拝見[はいけん]する, 聞く → 伺[うかが]う).",
    related: []
  },

  {
    id: "gn3-83",
    point: "〜てさしあげる",
    reading: "te sashiageru",
    level: "N3",
    category: "Honorific",
    meaning: "Humbly do a favor for a superior",
    structure: "V-て形 + さしあげる",
    explanation:
      "〜てさしあげる is the humble counterpart of 〜てあげる, used when the speaker does a favor for someone of higher status. It expresses respect toward the recipient of the favor.",
    formation:
      "V-て形 + さしあげる\n例: 買[か]ってさしあげる\n持[も]ってさしあげる\n教[おし]えてさしあげる\nV-て形 + さしあげましょう (offer)",
    examples: [
      { jp: "私[わたし]が荷物[にもつ]を持[も]ってさしあげましょう。", en: "Allow me to carry your luggage." },
      { jp: "先生[せんせい]に論文[ろんぶん]を見[み]てさしあげた。", en: "I humbly showed my paper to my teacher." }
    ],
    notes:
      "Can sound patronizing if used toward equals or subordinates, where 〜てあげる is more appropriate. Best reserved for clear superior-inferior contexts.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // PARTICLES (gn3-84 .. gn3-88)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-84",
    point: "〜さえ",
    reading: "sae",
    level: "N3",
    category: "Particles",
    meaning: "Even... (emphasis of an extreme case)",
    structure: "N + さえ / V-て形 + さえ + ある/ない / N + さえ + 〜ば",
    explanation:
      "〜さえ emphasizes an extreme or minimal case: even this surprising or essential thing. It can suggest that if even this is the case, other things certainly follow.",
    formation:
      "N + さえ: 子供[こども]さえ / 君[きみ]さえ\nV-て形 + さえ + ない: 見[み]てさえいない\nN + さえ + あれば: 健康[けんこう]さえあれば\n疑問詞 + さえ: 誰[だれ]さえ (rare; usually 誰でも)",
    examples: [
      { jp: "そこには名前[なまえ]さえ書[か]いてなかった。", en: "There was not even a name written there." },
      { jp: "親友[しんゆう]の君[きみ]さえ、私[わたし]の気持[きも]ちをわかってくれない。", en: "Even you, my best friend, do not understand my feelings." }
    ],
    notes:
      "〜すら is a more literary alternative. When さえ is combined with 〜ば, the pattern 〜さえ〜ば (see gn3-51) means 'as long as'.",
    related: []
  },

  {
    id: "gn3-85",
    point: "〜すら",
    reading: "sura",
    level: "N3",
    category: "Particles",
    meaning: "Even... (formal/literary, like さえ)",
    structure: "N + すら / V-て形 + すら + ある/ない",
    explanation:
      "〜すら is a more literary or formal version of 〜さえ, meaning 'even'. It emphasizes that even an extreme or surprising case applies, often in written or stiff contexts.",
    formation:
      "N + すら: 親[おや]すら / 専門家[せんもんか]すら\nV-て形 + すら + ない: 聞[き]いてすらいない\nN + すら + ない: 名前[なまえ]すらなかった",
    examples: [
      { jp: "親[おや]すら彼[かれ]を信[しん]じなかった。", en: "Even his parents did not believe him." },
      { jp: "専門家[せんもんか]すら解[と]けない問題[もんだい]だ。", en: "It is a problem that even experts cannot solve." }
    ],
    notes:
      "More literary than 〜さえ and somewhat stiff in casual speech. Often used to emphasize that the situation extends even to an extreme case.",
    related: []
  },

  {
    id: "gn3-86",
    point: "〜こそ",
    reading: "koso",
    level: "N3",
    category: "Particles",
    meaning: "Precisely / Exactly / It is... that...",
    structure: "N + こそ / V-て形 + こそ",
    explanation:
      "〜こそ emphasizes the preceding item as the true, essential, or special one: it is precisely this and not something else. With 〜てこそ, it means 'only by doing... can one truly...'.",
    formation:
      "N + こそ: 君[きみ]こそ / 今度[こんど]こそ\nV-て形 + こそ (idiom): 失敗[しっぱい]してこそ\nN + こそ + 〜だ: これこそ本物[ほんもの]だ\n疑問詞 + こそ: 誰[だれ]こそ (rare)",
    examples: [
      { jp: "今回[こんかい]こそ、絶対[ぜったい]に勝[か]つ！", en: "This time for sure, I will definitely win!" },
      { jp: "君[きみ]こそ本当[ほんとう]の友達[ともだち]だ。", en: "It is you who is a true friend." }
    ],
    notes:
      "Strongly singles out and affirms the marked item. Common in greetings: 「お待[ま]たせしました」「こちらこそ」. With 〜てこそ (gn3-55), it forms a separate conditional pattern.",
    related: []
  },

  {
    id: "gn3-87",
    point: "〜など / 〜なんて",
    reading: "nado / nante",
    level: "N3",
    category: "Particles",
    meaning: "Things like... / Such things as... (often belittling or surprised)",
    structure: "N + など / V-普通形 + なんて / い-adj + なんて / N + なんて",
    explanation:
      "〜など and 〜なんて cite examples in a casual or sometimes dismissive way. 〜なんて is more colloquial than 〜など and often conveys surprise, contempt, or modesty about the cited item.",
    formation:
      "N + など: 私[わたし]など / バナナ[ばなな]など\nV-普通形 + なんて: 行[い]くなんて\nい-adj + なんて: 寒[さむ]いなんて\nN + なんて: 彼[かれ]なんて",
    examples: [
      { jp: "私[わたし]など、まだまだ勉強[べんきょう]不足[ぶそく]です。", en: "Someone like me is still lacking in study." },
      { jp: "彼[かれ]が嘘[うそ]をつくなんて、信[しん]じられない。", en: "I cannot believe that he would lie." }
    ],
    notes:
      "〜なんて can quote a whole clause with surprise or disbelief, like 〜とは. 〜など is more neutral but can also be modest or dismissive depending on context.",
    related: []
  },

  {
    id: "gn3-88",
    point: "〜でも",
    reading: "demo",
    level: "N3",
    category: "Particles",
    meaning: "Even... / Or something like...",
    structure: "N + でも / 疑問詞 + でも",
    explanation:
      "〜でも indicates an extreme case or an example: even (this), or something like this. With question words it means 'any' (誰でも = anyone, いつでも = anytime).",
    formation:
      "N + でも: 子供[こども]でも / 一日[いちにち]でも\n疑問詞 + でも: 誰[だれ]でも / 何[なに]でも / いつでも\nN + でも + ない: 子供[こども]でもない",
    examples: [
      { jp: "子供[こども]でもわかる問題[もんだい]だ。", en: "It is a problem that even a child can understand." },
      { jp: "お茶[ちゃ]でも飲[の]みに行[い]きませんか。", en: "Would you like to go for tea or something?" }
    ],
    notes:
      "When offering something (お茶でも), it softens the suggestion by presenting it as just one example. With question words, it expresses 'any' (誰でも = anyone).",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // CONJUNCTIONS (gn3-89 .. gn3-91)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-89",
    point: "〜その代わり / 〜代わりに",
    reading: "sono kawari / kawari ni",
    level: "N3",
    category: "Conjunctions",
    meaning: "Instead / On the other hand / In exchange",
    structure: "Sentence + その代わり / V-普通形 + 代わりに / Nの + 代わりに",
    explanation:
      "〜代わりに / 〜その代わり indicates a substitute, exchange, or compensation: instead of X, Y is done. It can also introduce a contrasting aspect of the same thing.",
    formation:
      "Sentence + その代わり: 行[い]く。その代わり、早[はや]く帰[かえ]る\nV-普通形 + 代わりに: 行[い]く代[か]わりに\nNの + 代わりに: バスの代[か]わりに\nい-adj + 代わりに: 大[おお]きい代わりに",
    examples: [
      { jp: "手伝[てつだ]ってあげる。その代[か]わり、晩[ばん]ご飯[はん]をごちそうしてね。", en: "I will help you. In exchange, treat me to dinner." },
      { jp: "電車[でんしゃ]の代[か]わりに、バスで行[い]った。", en: "Instead of the train, I went by bus." }
    ],
    notes:
      "〜その代わり connects two sentences as a conjunction. 〜代わりに attaches directly to a verb, noun, or adjective. Both can express exchange or substitution.",
    related: []
  },

  {
    id: "gn3-90",
    point: "〜それとも",
    reading: "soretomo",
    level: "N3",
    category: "Conjunctions",
    meaning: "Or (between question options)",
    structure: "Question1 + それとも + Question2",
    explanation:
      "〜それとも is a conjunction used between two alternative questions, like 'or' in English choice or yes/no questions. It is not used to connect statements.",
    formation:
      "Sentence1(疑問) + それとも + Sentence2(疑問)\n例: コーヒー[こーひー]?それとも紅茶[こうちゃ]?\n行[い]く?それとも行[い]かない?\n今日[きょう]?それとも明日[あした]?",
    examples: [
      { jp: "今夜[こんや]、映画[えいが]を見[み]に行[い]きますか。それとも、家[いえ]にいますか。", en: "Are we going to see a movie tonight? Or will you stay home?" },
      { jp: "コーヒー[こーひー]にしますか。それとも、紅茶[こうちゃ]にしますか。", en: "Will you have coffee? Or will you have tea?" }
    ],
    notes:
      "Only used between two questions. For statements (e.g., 'A or B is true'), use 〜または or 〜あるいは instead. Common in casual and polite speech alike.",
    related: []
  },

  {
    id: "gn3-91",
    point: "〜ただし",
    reading: "tadashi",
    level: "N3",
    category: "Conjunctions",
    meaning: "However / Provided that... (formal condition)",
    structure: "Sentence1 + ただし + Sentence2 (条件・例外)",
    explanation:
      "〜ただし is a conjunction used at the start of a sentence to add a condition, exception, or limitation to what was just stated. It is formal and common in notices, rules, and contracts.",
    formation:
      "Sentence1。ただし、Sentence2 (条件/例外)\n例: 自由[じゆう]に参加[さんか]できる。ただし、事前[じぜん]申[もう]し込[こ]みが必要[ひつよう]。\n駐車[ちゅうしゃ]可[か]。ただし、30分[さんじゅっぷん]以内[いない]。",
    examples: [
      { jp: "入場[にゅうじょう]は無料[むりょう]です。ただし、予約[よやく]が必要[ひつよう]です。", en: "Admission is free. However, a reservation is required." },
      { jp: "写真[しゃしん]撮影[さつえい]可[か]。ただし、フラッシュ[ふらっしゅ]は禁止[きんし]です。", en: "Photography is permitted. However, flash is prohibited." }
    ],
    notes:
      "More formal and narrower than しかし or けれども. It introduces a specific condition or exception to a general rule, often in writing such as signs and official announcements.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // MODIFIERS (gn3-92 .. gn3-100)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-92",
    point: "〜上で",
    reading: "ue de",
    level: "N3",
    category: "Modifiers",
    meaning: "After doing... / With the aim of doing...",
    structure: "V-た形 + 上で (after) / V-辞書形 + 上で (when/with the aim of) / Nの + 上で",
    explanation:
      "〜上で has two distinct meanings. With V-た形 it means 'after doing A, then B'; with V-辞書形 it means 'when doing A' or 'with the aim of doing A'. It indicates purposeful, considered action.",
    formation:
      "V-た形 + 上で: 調[しら]べた上で / 考[かんが]えた上で\nV-辞書形 + 上で: 買[か]う上で / 生[い]きる上で\nNの + 上で: 健康[けんこう]の上で / 仕事[しごと]の上で",
    examples: [
      { jp: "詳[くわ]しく調[しら]べた上[うえ]で、決[き]めることにした。", en: "I decided to decide after investigating in detail." },
      { jp: "仕事[しごと]を選[えら]ぶ上[うえ]で、大切[たいせつ]なのは何[なに]か。", en: "What is important when choosing a job?" }
    ],
    notes:
      "V-た上で emphasizes sequence (do A, then do B); V-辞書形上で emphasizes purpose or consideration (when/for doing A). The two cannot be interchanged freely.",
    related: []
  },

  {
    id: "gn3-93",
    point: "〜上に",
    reading: "ue ni",
    level: "N3",
    category: "Modifiers",
    meaning: "In addition to... / Not only... but also...",
    structure: "V-普通形 + 上に / い-adj + 上に / な-adj + な上に / N + の上に",
    explanation:
      "〜上に indicates that in addition to the state or action in the first clause, an additional similar state is added in the main clause. Both clauses typically share the same positive or negative tone.",
    formation:
      "V-普通形 + 上に: 書[か]ける上に\nい-adj + 上に: 高[たか]い上に\nな-adj + な上に: 静[しず]かな上に\nN + の上に: プロの上に",
    examples: [
      { jp: "この店[みせ]は安[やす]い上[うえ]に、美味[おい]しい。", en: "This shop is cheap, and on top of that, delicious." },
      { jp: "彼[かれ]は頭[あたま]がいい上[うえ]に、性格[せいかく]もいい。", en: "He is smart, and on top of that, has a good personality." }
    ],
    notes:
      "Both clauses are usually either positive or negative. Similar to 〜し〜し and 〜ばかりでなく. The two added items are typically of the same evaluative tone.",
    related: []
  },

  {
    id: "gn3-94",
    point: "〜かねる",
    reading: "kaneru",
    level: "N3",
    category: "Modifiers",
    meaning: "Cannot bring oneself to do / Find it hard to do",
    structure: "V-ます形 + かねる",
    explanation:
      "〜かねる indicates that the speaker finds it difficult or impossible to do something, often out of politeness, reluctance, or psychological hesitation. It is a polite way of refusing or expressing hesitation.",
    formation:
      "V-ます形 + かねる\n例: 引[ひ]き受[う]けかねる\nお答[こた]えしかねる\n決[き]めかねる\n理解[りかい]しかねる",
    examples: [
      { jp: "そのお願[ねが]いはお引[ひ]き受[う]けしかねます。", en: "I find it difficult to accept that request." },
      { jp: "色[いろ]が多[おお]すぎて、決[き]めかねている。", en: "There are too many colors, and I cannot decide." }
    ],
    notes:
      "Common in business as a soft refusal: お引[ひ]き受[う]けしかねます ('I am afraid I cannot accept'). The opposite form 〜かねない (gn3-71) means 'might happen' (a risk).",
    related: []
  },

  {
    id: "gn3-95",
    point: "〜きる / 〜きれる",
    reading: "kiru / kireru",
    level: "N3",
    category: "Modifiers",
    meaning: "Do completely / Be able to do completely",
    structure: "V-ます形 + きる / V-ます形 + きれる (potential) / V-ます形 + きれない (negative)",
    explanation:
      "〜きる means to do something completely or to the very end. The potential form 〜きれる means to be able to complete it; its negative 〜きれない means 'cannot finish' or 'cannot fully do'.",
    formation:
      "V-ます形 + きる: 分[わ]かりきる / 読[よ]みきる\nV-ます形 + きれる: 走[はし]りきれる\nV-ます形 + きれない: 食[た]べきれない / 読[よ]みきれない",
    examples: [
      { jp: "長[なが]い小説[しょうせつ]を、ついに読[よ]みきった。", en: "I finally finished reading the long novel." },
      { jp: "こんなにたくさん、一人[ひとり]では食[た]べきれない。", en: "I cannot possibly eat this much by myself." }
    ],
    notes:
      "〜きる often pairs with verbs of understanding or doing fully (分かりきる, 読みきる, やりきる). 〜きれない is common in fixed phrases like 数[かぞ]えきれない (countless).",
    related: []
  },

  {
    id: "gn3-96",
    point: "〜ことなく",
    reading: "koto naku",
    level: "N3",
    category: "Modifiers",
    meaning: "Without doing...",
    structure: "V-辞書形 + ことなく",
    explanation:
      "〜ことなく indicates that an action is performed without doing the action in the first clause. It is the formal version of 〜ないで, common in written and narrative styles.",
    formation:
      "V-辞書形 + ことなく\n例: 諦[あきら]めることなく\n休[やす]むことなく\n変[か]わることなく\nためらうことなく",
    examples: [
      { jp: "彼[かれ]は諦[あきら]めることなく、研究[けんきゅう]を続[つづ]けた。", en: "He continued his research without giving up." },
      { jp: "休[やす]むことなく、働[はたら]き続[つづ]けた。", en: "I continued working without resting." }
    ],
    notes:
      "More formal and written than 〜ないで. Often used in narrative or descriptive contexts to praise someone's persistence or to emphasize continuous action.",
    related: []
  },

  {
    id: "gn3-97",
    point: "〜にすぎない",
    reading: "ni suginai",
    level: "N3",
    category: "Modifiers",
    meaning: "Merely / Nothing more than...",
    structure: "普通体 + にすぎない / N + にすぎない",
    explanation:
      "〜にすぎない emphasizes that something is merely or only what is stated, nothing more. It often downplays importance, value, or scale, and is common in formal writing.",
    formation:
      "普通体 + にすぎない\n例: 嘘[うそ]にすぎない\n推測[すいそく]にすぎない\n挨拶[あいさつ]にすぎない\nN + にすぎない: 子供[こども]にすぎない",
    examples: [
      { jp: "あれは単[たん]なる噂[うわさ]にすぎない。", en: "That is nothing more than a mere rumor." },
      { jp: "私[わたし]の意見[いけん]は一個人[いっこじん]の考[かんが]えにすぎない。", en: "My opinion is nothing more than the thought of one individual." }
    ],
    notes:
      "Used to modestly or critically limit the significance of something. Formal in tone; in casual speech 〜なだけ is similar. Often paired with 単[たん]なる or たかが.",
    related: []
  },

  {
    id: "gn3-98",
    point: "〜にとって",
    reading: "ni totte",
    level: "N3",
    category: "Modifiers",
    meaning: "For / To (perspective or standpoint)",
    structure: "N + にとって(は) / N + にとっての + N",
    explanation:
      "〜にとって marks the standpoint or perspective from which something is evaluated. The following clause typically expresses a judgment of importance, value, difficulty, or relevance.",
    formation:
      "N + にとって(は): 私[わたし]にとって / 学生[がくせい]にとって\nN + にとっての + N: 私[わたし]にとっての夢[ゆめ]\nN + にとって + Adjective: 大切[たいせつ]だ / 難[むずか]しい",
    examples: [
      { jp: "家族[かぞく]にとって、一番[いちばん]大切[たいせつ]なのは健康[けんこう]だ。", en: "For a family, the most important thing is health." },
      { jp: "私[わたし]にとって、この町[まち]は特別[とくべつ]な場所[ばしょ]だ。", en: "To me, this town is a special place." }
    ],
    notes:
      "Differs from 〜に対[たい]して (which marks a target of action). 〜にとって marks the viewpoint from which something is evaluated, so adjectives like 大切, 難しい, 重要[じゅうよう] often follow.",
    related: []
  },

  {
    id: "gn3-99",
    point: "〜を問わず",
    reading: "o towazu",
    level: "N3",
    category: "Modifiers",
    meaning: "Regardless of... / Without regard to...",
    structure: "N + を問わず",
    explanation:
      "〜を問わず indicates that something applies without regard to the distinction mentioned. It is often used with paired nouns such as 男女, 昼夜, 大小, 有無, and is common in formal notices and advertisements.",
    formation:
      "N + を問わず\n例: 男女[だんじょ]を問[と]わず\n昼夜[ちゅうや]を問[と]わず\n年齢[ねんれい]を問[と]わず\n経験[けいけん]の有無[うむ]を問[と]わず",
    examples: [
      { jp: "当店[とうてん]は年齢[ねんれい]を問[と]わず、どなたでも歓迎[かんげい]します。", en: "Our shop welcomes anyone regardless of age." },
      { jp: "この仕事[しごと]は経験[けいけん]の有無[うむ]を問[と]わず、応募[おうぼ]できる。", en: "This job can be applied for regardless of whether one has experience." }
    ],
    notes:
      "Often paired with contrasting noun pairs (男女, 昼夜, 大小, 有無, 老若[ろうにゃく]). Formal in tone; common in recruitment ads, store notices, and official statements.",
    related: []
  },

  {
    id: "gn3-100",
    point: "〜わけだ",
    reading: "wake da",
    level: "N3",
    category: "Modifiers",
    meaning: "Naturally / No wonder / That is why...",
    structure: "普通体 + わけだ / N + なわけだ / な-adj + なわけだ",
    explanation:
      "〜わけだ expresses that the main clause is a natural conclusion or consequence drawn from the preceding information: 'so that's why' or 'it is natural that...'. It indicates reasoned understanding.",
    formation:
      "普通体 + わけだ\n例: 寒[さむ]いわけだ\n疲[つか]れるわけだ\n上手[じょうず]なわけだ\nN + なわけだ: 学生[がくせい]なわけだ",
    examples: [
      { jp: "彼[かれ]は毎日[まいにち]10時間[じゅうじかん]も勉強[べんきょう]している。だから上手[じょうず]なわけだ。", en: "He studies 10 hours every day. So it is no wonder he is good." },
      { jp: "道[みち]が混[こ]んでいた。だから遅[おく]れたわけだ。", en: "The road was congested. So that is why I was late." }
    ],
    notes:
      "Used when the speaker draws a reasoned conclusion or shows understanding of why something is the case. Differs from 〜はずだ (which expresses expectation) in that 〜わけだ states an actual reasoned fact.",
    related: []
  }
];
