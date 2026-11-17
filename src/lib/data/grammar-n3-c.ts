import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]みきる.
//
// JLPT N3 grammar points (Shinzaizen Master style), chunk C.
// IDs gn3-101 .. gn3-150. 50 points distributed across 10 categories.
// Chunk A (gn3-01 .. gn3-50) and chunk B (gn3-51 .. gn3-100) cover separate sets of N3 points.
// Chunk C focuses on NEW points (〜向き, 〜気味, 〜がち, 〜に沿って, 〜に基づいて, 〜を中心に,
// 〜を込めて, 〜に伴って, 〜とともに, 〜と同時に, 〜上, 〜にしても, 〜にしろ, 〜にせよ,
// 〜ものの, 〜ながら, 〜つつ, 〜きり, 〜っぱなし, 〜得る, etc.) plus honorific humble verbs.

export const grammarN3C: GrammarData[] = [
  // ──────────────────────────────────────────────────────────────────────
  // CONDITIONALS (gn3-101 .. gn3-104)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-101",
    point: "〜にしても",
    reading: "ni shite mo",
    level: "N3",
    category: "Conditionals",
    meaning: "Even if / whether ~ or / no matter how",
    structure: "V-辞書形 / V-た形 / い-adj / な-adj / N + にしても",
    explanation:
      "〜にしても indicates that the stated condition does not change the outcome—roughly 'even if' or 'whether or not.' Paired twice (〜にしても〜にしても) it means 'whether A or B.'",
    formation:
      "V-辞書形 + にしても: 行[い]くにしても\nV-た形 + にしても: 行[い]ったにしても\nい-adj + にしても: 忙[いそが]しいにしても\nな-adj + にしても: 好[す]きにしても\nN + にしても: 学生[がくせい]にしても\n〜にしても〜にしても: 行[い]くにしても行[い]かないにしても",
    examples: [
      { jp: "忙[いそが]しいにしても、毎日[まいにち]少[すこ]しは本[ほん]を読[よ]んだ方[ほう]がいい。", en: "Even if you are busy, you should read a little every day." },
      { jp: "買[か]うにしても買[か]わないにしても、一度[いちど]店[みせ]に行[い]ってみよう。", en: "Whether I buy it or not, let's go to the store once to take a look." }
    ],
    notes:
      "When expressing 'whether A or B', repeat 〜にしても after each alternative; the main clause then applies regardless of which one occurs.",
    related: []
  },

  {
    id: "gn3-102",
    point: "〜にしろ",
    reading: "ni shiro",
    level: "N3",
    category: "Conditionals",
    meaning: "Whether ~ or / even if",
    structure: "V-辞書形 / V-ない形 / い-adj / な-adj / N + にしろ",
    explanation:
      "〜にしろ is the imperative form of する used as a conjunction meaning 'even if' or 'whether ~ or.' It carries the same meaning as 〜にしても but sounds slightly more formal and written.",
    formation:
      "V-辞書形 + にしろ: 行[い]くにしろ\nV-ない形 + にしろ: 行[い]かないにしろ\nい-adj + にしろ: 高[たか]いにしろ\nな-adj + にしろ: 静[しず]か(な)にしろ\nN + にしろ: 雨[あめ]にしろ\n〜にしろ〜にしろ: 行[い]くにしろ行[い]かないにしろ",
    examples: [
      { jp: "部長[ぶちょう]にしろ課長[かちょう]にしろ、もっと早[はや]く知[し]らせてほしかった。", en: "Whether it was the department head or the section chief, I wish they had let me know sooner." },
      { jp: "忙[いそが]しいにしろ、連絡[れんらく]くらいはできるはずだ。", en: "Even if he is busy, he should at least be able to contact me." }
    ],
    notes:
      "〜にしろ and 〜にせよ are interchangeable; 〜にせよ tends to appear in slightly more formal or written contexts.",
    related: []
  },

  {
    id: "gn3-103",
    point: "〜にせよ",
    reading: "ni seyo",
    level: "N3",
    category: "Conditionals",
    meaning: "Whether ~ or / even if",
    structure: "V-辞書形 / V-ない形 / い-adj / な-adj / N + にせよ",
    explanation:
      "〜にせよ means 'even if' or 'whether ~ or' and is the more formal, written-style equivalent of 〜にしても / 〜にしろ. It often appears in formal writing, speeches, or newspaper articles.",
    formation:
      "V-辞書形 + にせよ: 行[い]くにせよ\nV-ない形 + にせよ: 行[い]かないにせよ\nい-adj + にせよ: 高[たか]いにせよ\nN + にせよ: 学生[がくせい]にせよ\n〜にせよ〜にせよ: 行[い]くにせよ行[い]かないにせよ",
    examples: [
      { jp: "どこに住[す]むにせよ、通勤[つうきん]の便[べん]をよく考[かんが]えることだ。", en: "Wherever you live, you should think carefully about commuting convenience." },
      { jp: "賛成[さんせい]するにせよ反対[はんたい]するにせよ、理由[りゆう]をはっきり言[い]うべきだ。", en: "Whether you agree or disagree, you should clearly state your reasons." }
    ],
    notes:
      "〜にせよ is interchangeable with 〜にしろ but is preferred in formal and written contexts; it is rarely used in casual speech.",
    related: []
  },

  {
    id: "gn3-104",
    point: "〜ことはない",
    reading: "koto wa nai",
    level: "N3",
    category: "Conditionals",
    meaning: "There is no need to / no reason to",
    structure: "V-辞書形 + ことはない",
    explanation:
      "〜ことはない reassures the listener that the action in question is unnecessary—there is no need to do it. It often conveys comfort, advice, or encouragement.",
    formation:
      "V-辞書形 + ことはない: 心配[しんぱい]することはない\nV-辞書形 + ことはない: 無理[むり]することはない\nV-辞書形 + ことはない: 一人[ひとり]でやることはない",
    examples: [
      { jp: "そんなに心配[しんぱい]することはない。きっと大丈夫[だいじょうぶ]だよ。", en: "There is no need to worry so much. I'm sure it will be fine." },
      { jp: "一人[ひとり]で全部[ぜんぶ]やることはない。手伝[てつだ]うよ。", en: "There is no need to do everything by yourself. I'll help you." }
    ],
    notes:
      "〜ことはない conveys reassurance, while 〜なくてもいい simply states permission not to do something; the nuance differs.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // CAUSE / REASON (gn3-105 .. gn3-109)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-105",
    point: "〜からこそ",
    reading: "kara koso",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Precisely because / exactly because",
    structure: "V-普通形 / い-adj / な-adj + な / N + だ / な + からこそ",
    explanation:
      "〜からこそ emphasizes the reason, stressing that this is exactly why the result holds—often used to highlight a positive or strong motivation that the speaker wants to underline.",
    formation:
      "V-普通形 + からこそ: 好[す]きだからこそ\nい-adj + からこそ: 難[むずか]しいからこそ\nな-adj + な + からこそ: 大切[たいせつ]だからこそ\nN + だからこそ: 君[きみ]だからこそ",
    examples: [
      { jp: "あなたのことが好[す]きだからこそ、厳[きび]しいことを言[い]うんです。", en: "It is precisely because I care about you that I say harsh things." },
      { jp: "忙[いそが]しいからこそ、運動[うんどう]する時間[じかん]を作[つく]るべきだ。", en: "Precisely because you are busy, you should make time to exercise." }
    ],
    notes:
      "Because からこそ itself emphasizes the reason, the main clause is usually a positive or strong opinion; it is not used for simple objective causation.",
    related: []
  },

  {
    id: "gn3-106",
    point: "〜ことだから",
    reading: "koto dakara",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Given that ~ (it must be) / since it is ~",
    structure: "N + の + ことだから",
    explanation:
      "〜ことだから is used when the speaker knows the character or nature of the person or thing named, and infers a likely result—'given that it is X, this is to be expected.' The noun is typically a person whose tendencies are known.",
    formation:
      "N + の + ことだから: 彼[かれ]のことだから\nN + の + ことだから: 母[はは]のことだから\nN + の + ことだから: 田中[たなか]さんのことだから",
    examples: [
      { jp: "彼[かれ]のことだから、もうこのニュースを知[し]っているに違[ちが]いない。", en: "Knowing him, he must already know this news." },
      { jp: "あの慎重[しんちょう]な山田[やまだ]さんのことだから、準備[じゅんび]は完璧[かんぺき]なはずだ。", en: "Given that it's the cautious Yamada-san, the preparations must be perfect." }
    ],
    notes:
      "The noun before のことだから is someone or something whose habits or character the speaker is familiar with, allowing a confident inference about the outcome.",
    related: []
  },

  {
    id: "gn3-107",
    point: "〜をきっかけに(して)",
    reading: "o kikkake ni (shite)",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Taking ~ as an opportunity / with ~ as a trigger",
    structure: "N + を + きっかけに(して) / をきっかけとして",
    explanation:
      "〜をきっかけに marks an event as the trigger or opportunity that started a new action or change—'taking X as the occasion.' It emphasizes that X was the starting point of something new.",
    formation:
      "N + をきっかけに: 病気[びょうき]をきっかけに\nN + をきっかけにして: 出会[であ]いをきっかけにして\nN + をきっかけとして: 定年[ていねん]をきっかけとして",
    examples: [
      { jp: "病気[びょうき]をきっかけに、お酒[さけ]を飲[の]むのをやめた。", en: "Taking my illness as the opportunity, I quit drinking alcohol." },
      { jp: "あの映画[えいが]をきっかけにして、日本[にほん]の歴史[れきし]に興味[きょうみ]を持[も]った。", en: "With that movie as the trigger, I became interested in Japanese history." }
    ],
    notes:
      "〜をきっかけに focuses on the trigger event itself; 〜を契機に is more formal and stresses a major turning point rather than a casual trigger.",
    related: []
  },

  {
    id: "gn3-108",
    point: "〜を契機に(して)",
    reading: "o keiki ni (shite)",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Taking ~ as a turning point / on the occasion of ~",
    structure: "N + を + 契機に(して) / を契機として",
    explanation:
      "〜を契機に is a formal expression meaning 'taking X as a turning point'—it marks a significant event that brought about a major change. Common in news, business, and written contexts.",
    formation:
      "N + を契機に: 入社[にゅうしゃ]を契機に\nN + を契機にして: 結婚[けっこん]を契機にして\nN + を契機として: 円高[えんだか]を契機として",
    examples: [
      { jp: "会社[かいしゃ]の設立[せつりつ]50周年[ごじゅっしゅうねん]を契機に、新[あたら]しい事業[じぎょう]を始[はじ]めた。", en: "Taking the company's 50th anniversary as a turning point, we started a new business." },
      { jp: "結婚[けっこん]を契機にして、仕事[しごと]を辞[や]めることにした。", en: "Taking marriage as the turning point, I decided to quit my job." }
    ],
    notes:
      "〜を契機に is more formal than 〜をきっかけに and is often used in news, business, or written Japanese to mark a major turning point.",
    related: []
  },

  {
    id: "gn3-109",
    point: "〜を機に",
    reading: "o ki ni",
    level: "N3",
    category: "Cause/Reason",
    meaning: "Taking ~ as an opportunity / on the occasion of ~",
    structure: "N + を + 機に",
    explanation:
      "〜を機に means 'taking X as the opportunity' and indicates that an event was used as a good chance to start something new. It sits between 〜をきっかけに (casual) and 〜を契機に (formal) in register.",
    formation:
      "N + を機に: 退院[たいいん]を機に\nN + を機に: 卒業[そつぎょう]を機に\nN + を機に: 定年[ていねん]退職[たいしょく]を機に",
    examples: [
      { jp: "退院[たいいん]を機に、タバコをやめることにした。", en: "Taking my discharge from hospital as the opportunity, I decided to quit smoking." },
      { jp: "定年[ていねん]退職[たいしょく]を機に、田舎[いなか]に引[ひ]っ越[こ]した。", en: "Taking retirement as the opportunity, I moved to the countryside." }
    ],
    notes:
      "〜を機に is often used for life events and personal turning points, with a register slightly more formal than 〜をきっかけに but lighter than 〜を契機に.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // TIME / SEQUENCE (gn3-110 .. gn3-114)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-110",
    point: "〜次第",
    reading: "shidai",
    level: "N3",
    category: "Time/Sequence",
    meaning: "As soon as / immediately upon doing",
    structure: "V-ます形(stem) + 次第 / N + 次第",
    explanation:
      "〜次第 means 'as soon as' and indicates that the action in the main clause will happen immediately after the action or event before 次第. It is common in formal or business contexts to express prompt action.",
    formation:
      "V-ます形(stem) + 次第: 分[わ]かり次第\nV-ます形(stem) + 次第: 届[とど]き次第\nN + 次第: 返事[へんじ]次第",
    examples: [
      { jp: "詳[くわ]しいことが分[わ]かり次第、ご連絡[れんらく]します。", en: "As soon as I know the details, I will contact you." },
      { jp: "荷物[にもつ]が届[とど]き次第、すぐに確認[かくにん]してください。", en: "Please check it as soon as the package arrives." }
    ],
    notes:
      "The main clause after 〜次第 expresses the speaker's own volitional action or instruction, so it cannot describe a past event or another person's spontaneous action.",
    related: []
  },

  {
    id: "gn3-111",
    point: "〜にかけて(は)",
    reading: "ni kakete (wa)",
    level: "N3",
    category: "Time/Sequence",
    meaning: "Over / during (a period) / when it comes to ~ (with は)",
    structure: "N (time or field) + にかけて / にかけては",
    explanation:
      "〜にかけて indicates a span of time or space over which something continues or happens—'over / through.' With は (〜にかけては), it means 'when it comes to ~' and praises someone's skill or strong point in a particular area.",
    formation:
      "N(時間) + にかけて: 夜[よる]にかけて\nN(期間) + にかけて: 今週末[こんしゅうまつ]にかけて\nN(分野) + にかけては: 科学[かがく]にかけては\nN(分野) + にかけては: 営業[えいぎょう]にかけては",
    examples: [
      { jp: "今夜[こんや]から明日[あした]の朝[あさ]にかけて、雨[あめ]が降[ふ]るでしょう。", en: "Rain is expected from tonight through tomorrow morning." },
      { jp: "彼[かれ]は英語[えいご]にかけては、クラスで誰[だれ]にも負[ま]けない。", en: "When it comes to English, no one in the class can beat him." }
    ],
    notes:
      "Without は, 〜にかけて spans a time or space range; with は, it singles out a field where someone excels.",
    related: []
  },

  {
    id: "gn3-112",
    point: "〜と同時に",
    reading: "to douji ni",
    level: "N3",
    category: "Time/Sequence",
    meaning: "At the same time as / simultaneously with",
    structure: "V-辞書形 / N + と同時に",
    explanation:
      "〜と同時に indicates that two actions or states occur at the same time—'at the same time as.' It can also show that two facts or qualities hold simultaneously.",
    formation:
      "V-辞書形 + と同時に: 笑[わら]うと同時に\nN + と同時に: 開会[かいかい]と同時に\nV-辞書形 + と同時に: 始[はじ]まると同時に",
    examples: [
      { jp: "彼[かれ]は部屋[へや]に入[はい]ると同時に、大[おお]きな声[こえ]で挨拶[あいさつ]をした。", en: "As soon as he entered the room, he greeted us in a loud voice." },
      { jp: "この仕事[しごと]はやりがいがあると同時に、プレッシャーも大[おお]きい。", en: "This job is rewarding, and at the same time it carries a lot of pressure." }
    ],
    notes:
      "〜と同時に can express both literal simultaneity and the coexistence of two contrasting qualities or facts in one subject.",
    related: []
  },

  {
    id: "gn3-113",
    point: "〜にあたって / 〜にあたり",
    reading: "ni atatte / ni atari",
    level: "N3",
    category: "Time/Sequence",
    meaning: "On the occasion of / when doing ~",
    structure: "V-辞書形 / N + にあたって (formal) / にあたり",
    explanation:
      "〜にあたって is a formal expression meaning 'on the occasion of doing ~' or 'when undertaking ~.' It is used before important events such as starting a new job, getting married, or making a significant decision.",
    formation:
      "V-辞書形 + にあたって: 出発[しゅっぱつ]するにあたって\nN + にあたって: 開会[かいかい]にあたって\nV-辞書形 + にあたり: 開始[かいし]するにあたり",
    examples: [
      { jp: "新[あたら]しい仕事[しごと]を始[はじ]めるにあたって、いろいろ準備[じゅんび]をした。", en: "On the occasion of starting my new job, I made various preparations." },
      { jp: "開会[かいかい]にあたり、社長[しゃちょう]から挨拶[あいさつ]がありました。", en: "On the occasion of the opening, the president gave a greeting." }
    ],
    notes:
      "〜にあたり is the more concise formal form of 〜にあたって, often used in speeches, ceremonies, and written announcements.",
    related: []
  },

  {
    id: "gn3-114",
    point: "〜に限って",
    reading: "ni kagitte",
    level: "N3",
    category: "Time/Sequence",
    meaning: "Of all times / precisely when / only with ~",
    structure: "N + に限って",
    explanation:
      "〜に限って singles out a particular time or case, often with a nuance of 'of all times, at that moment偏偏' or 'precisely with ~.' It can express either a reassuring guarantee ('only with this') or an unlucky coincidence.",
    formation:
      "N(時) + に限って: 忙[いそが]しい時に限って\nN(人) + に限って: あの人[ひと]に限って\nN(日) + に限って: 日曜日[にちようび]に限って",
    examples: [
      { jp: "忙[いそが]しい時に限って、機械[きかい]が故障[こしょう]する。", en: "Precisely when I'm busy, the machine breaks down." },
      { jp: "あの真面目[まじめ]な彼[かれ]に限って、嘘[うそ]をつくはずがない。", en: "That serious person—he of all people—would never tell a lie." }
    ],
    notes:
      "〜に限って often carries the nuance that precisely the named case is the one where something unexpected happens, or, with people, that the speaker trusts them exclusively.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // CONTRAST (gn3-115 .. gn3-118)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-115",
    point: "〜ものの",
    reading: "mono no",
    level: "N3",
    category: "Contrast",
    meaning: "Although / though (it is true that ~, but)",
    structure: "V-普通形 / い-adj / な-adj + である / N + である + ものの",
    explanation:
      "〜ものの means 'although'—it concedes that the first clause is true but introduces a contrary result or feeling in the main clause. It is a formal, written-style equivalent of 〜けれども.",
    formation:
      "V-普通形 + ものの: 買[か]ったものの\nい-adj + ものの: 高[たか]いものの\nな-adj + である + ものの: 静[しず]かであるものの\nN + である + ものの: 学生[がくせい]であるものの",
    examples: [
      { jp: "パソコンを買[か]ったものの、使[つか]い方[かた]がよく分[わ]からない。", en: "Although I bought a computer, I don't really understand how to use it." },
      { jp: "体[からだ]は大[おお]きいものの、力[ちから]はあまりない。", en: "Although his body is large, he doesn't have much strength." }
    ],
    notes:
      "〜ものの acknowledges the fact in the first clause but signals that the expected consequence did not follow.",
    related: []
  },

  {
    id: "gn3-116",
    point: "〜ながら(も)",
    reading: "nagara (mo)",
    level: "N3",
    category: "Contrast",
    meaning: "Although / while ~ (contrary to expectation)",
    structure: "V-ます形(stem) / い-adj / N + ながら(も)",
    explanation:
      "〜ながら(も) means 'although'—it expresses that despite the situation in the first clause, the main clause presents a contrary result. With も it adds emphasis to the contrast.",
    formation:
      "V-ます形 + ながら: 笑[わら]いながら\nい-adj + ながら: 悲[かな]しいながら\nN + ながら(も): 子供[こども]ながら(も)\nい-adj 〜い + ながらも: 小[ちい]さいながらも",
    examples: [
      { jp: "彼[かれ]は子供[こども]ながらも、大人[おとな]のような考[かんが]え方[かた]をする。", en: "Although he is a child, he thinks like an adult." },
      { jp: "この部屋[へや]は狭[せま]いながらも、日当[ひあ]たりがいい。", en: "Although this room is small, it gets good sunlight." }
    ],
    notes:
      "When indicating contrast (although), 〜ながら often attaches to a noun or い-adj; the も is added to strengthen the concessive sense.",
    related: []
  },

  {
    id: "gn3-117",
    point: "〜つつ(も)",
    reading: "tsutsu (mo)",
    level: "N3",
    category: "Contrast",
    meaning: "Although / while ~ (contrary action)",
    structure: "V-ます形(stem) + つつ / つつも",
    explanation:
      "〜つつ(も) is a formal written-style expression meaning 'although'—it indicates that the speaker does the action in the first clause while feeling or doing something contrary. It often conveys a sense of internal conflict.",
    formation:
      "V-ます形 + つつ: 知[し]りつつ\nV-ます形 + つつも: 悪[わる]いと知[し]りつつも\nV-ます形 + つつ: 考[かんが]えつつ",
    examples: [
      { jp: "体[からだ]に悪[わる]いと知[し]りつつも、甘[あま]いものを食[た]べてしまう。", en: "Although I know it's bad for my health, I end up eating sweets." },
      { jp: "あきらめようと思[おも]いつつ、まだ彼[かれ]を待[ま]っている。", en: "Although I think I should give up, I am still waiting for him." }
    ],
    notes:
      "〜つつ(も) is formal and often expresses the speaker's guilty awareness of doing something contrary to better judgment.",
    related: []
  },

  {
    id: "gn3-118",
    point: "〜反面 / 〜半面",
    reading: "hanmen / hanmen",
    level: "N3",
    category: "Contrast",
    meaning: "On the other hand / while on one hand ~",
    structure: "V-普通形 / い-adj / な-adj + な / N + の + 反面 / 半面",
    explanation:
      "〜反面 / 〜半面 means 'on the other hand'—it presents a contrasting aspect of the same subject. It shows that while the first quality is true, an opposite quality also exists.",
    formation:
      "V-普通形 + 反面: 厳[きび]しい反面\nい-adj + 反面: 高[たか]い反面\nな-adj + な + 反面: 静[しず]かな反面\nN + の + 反面: 都会[とかい]の反面",
    examples: [
      { jp: "この仕事[しごと]はきつい反面、給料[きゅうりょう]がいい。", en: "This job is tough, but on the other hand the pay is good." },
      { jp: "彼[かれ]は厳[きび]しい半面[はんめん]、優[やさ]しいところもある。", en: "He is strict, but on the other hand he also has a gentle side." }
    ],
    notes:
      "〜反面 and 〜半面 are interchangeable; they always describe two contrasting facets of the same thing or person.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // ASSUMPTION (gn3-119 .. gn3-121)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-119",
    point: "〜かのようだ",
    reading: "ka no you da",
    level: "N3",
    category: "Assumption",
    meaning: "As if / as though",
    structure: "V-普通形 / い-adj / な-adj / N + かのようだ / かのような + N",
    explanation:
      "〜かのようだ means 'as if / as though'—it describes a situation that resembles something else, even though it is not actually the case. It emphasizes the similarity or illusion.",
    formation:
      "V-普通形 + かのようだ: 起[お]きたかのようだ\nい-adj + かのようだ: 深[ふか]いかのようだ\nN + かのようだ: 夢[ゆめ]かのようだ\n〜かのような + N: 夢[ゆめ]かのような話[はなし]",
    examples: [
      { jp: "彼[かれ]の話[はなし]を聞[き]いていると、自分[じぶん]もそこにいたかのように感[かん]じる。", en: "Listening to his story, I feel as if I had been there myself." },
      { jp: "まるで夢[ゆめ]を見[み]ているかのようだった。", en: "It was as if I were dreaming." }
    ],
    notes:
      "〜かのようだ is often preceded by まるで to strengthen the 'as if' sense; it expresses an illusion rather than a real situation.",
    related: []
  },

  {
    id: "gn3-120",
    point: "〜にほかならない",
    reading: "ni hoka naranai",
    level: "N3",
    category: "Assumption",
    meaning: "It is nothing but ~ / precisely ~",
    structure: "N + にほかならない",
    explanation:
      "〜にほかならない strongly affirms that something is nothing other than the stated thing—'it is precisely / nothing but ~.' It is formal and used to emphasize the identity or essence of something.",
    formation:
      "N + にほかならない: 努力[どりょく]の結果[けっか]にほかならない\nN + にほかならない: 偶然[ぐうぜん]にほかならない\nN + にほかならない: 愛情[あいじょう]にほかならない",
    examples: [
      { jp: "この成功[せいこう]は、みんなの努力[どりょく]の結果[けっか]にほかならない。", en: "This success is nothing but the result of everyone's effort." },
      { jp: "彼[かれ]が怒[おこ]ったのは、あなたを心配[しんぱい]しているからにほかならない。", en: "The reason he got angry is nothing other than that he is worried about you." }
    ],
    notes:
      "〜にほかならない is a strong formal assertion used in writing or speeches to emphasize that something is exactly one thing and no other.",
    related: []
  },

  {
    id: "gn3-121",
    point: "〜まい",
    reading: "mai",
    level: "N3",
    category: "Assumption",
    meaning: "Will not ~ / probably not ~ / intend not to",
    structure: "V-辞書形 + まい (五段) / V-ます形(stem) + まい (一段) / するまい / こまい",
    explanation:
      "〜まい is the negative volitional, meaning 'will not ~' (strong intention) or 'probably will not ~' (guess). In formal or literary style it expresses a firm resolution not to do something.",
    formation:
      "V-辞書形 + まい: 言[い]うまい\nV-ます形 + まい: 見[み]るまい\nする + まい: するまい / すまい\nくる + まい: くるまい / こまい",
    examples: [
      { jp: "二度[にど]とあんな失敗[しっぱい]はすまいと誓[ちか]った。", en: "I swore that I would never make such a mistake again." },
      { jp: "彼[かれ]のことだから、そんな簡単[かんたん]には諦[あきら]めまい。", en: "Knowing him, he probably won't give up so easily." }
    ],
    notes:
      "〜まい has two readings: as negative volition ('I will not') it is firm resolve; as conjecture ('probably won't') it is a formal guess about someone else.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // PASSIVE / CAUSATIVE (gn3-122 .. gn3-124)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-122",
    point: "〜てもらう / 〜ていただく",
    reading: "te morau / te itadaku",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Have someone do ~ (for me) / receive the favor of ~",
    structure: "V-て形 + もらう (casual) / いただく (humble); doer marked by に",
    explanation:
      "〜てもらう indicates that the speaker (or someone) receives the favor of someone doing an action for them—the agent marked by に performs the action. 〜ていただく is the humble form used toward superiors.",
    formation:
      "V-て形 + もらう: 直[なお]してもらう\nV-て形 + いただく: 教[おし]えていただく\n人 + に + V-て + もらう: 先生[せんせい]に直[なお]してもらう",
    examples: [
      { jp: "友達[ともだち]にパソコンを直[なお]してもらった。", en: "I had my friend fix my computer." },
      { jp: "先生[せんせい]に論文[ろんぶん]の書[か]き方[かた]を教[おし]えていただいた。", en: "I had the teacher teach me how to write a thesis." }
    ],
    notes:
      "The person receiving the favor is the subject; the doer is marked by に. 〜ていただく is the humble version used with superiors.",
    related: []
  },

  {
    id: "gn3-123",
    point: "〜てやる / 〜てあげる / 〜てさしあげる",
    reading: "te yaru / te ageru / te sashiageru",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Do ~ for someone (giving a favor)",
    structure: "V-て形 + やる (to inferior/close) / あげる (peer) / さしあげる (superior)",
    explanation:
      "These verbs indicate that the subject does an action as a favor for someone else. 〜てやる is used toward inferiors, animals, or plants; 〜てあげる toward peers; 〜てさしあげる is the humble form toward superiors.",
    formation:
      "V-て形 + やる: 買[か]ってやる\nV-て形 + あげる: 教[おし]えてあげる\nV-て形 + さしあげる: 持[も]ってさしあげる\n人 + に + V-て + やる: 弟[おとうと]に読[よ]んでやる",
    examples: [
      { jp: "弟[おとうと]に自転車[じてんしゃ]の乗[の]り方[かた]を教[おし]えてやった。", en: "I taught my little brother how to ride a bicycle." },
      { jp: "お年寄[としよ]りに席[せき]を譲[ゆず]ってあげた。", en: "I gave up my seat for an elderly person." }
    ],
    notes:
      "〜てやる can sound rough or condescending if used toward equals; use 〜てあげる for peers and 〜てさしあげる for superiors.",
    related: []
  },

  {
    id: "gn3-124",
    point: "〜せる・させる (使役)",
    reading: "seru / saseru (shieki)",
    level: "N3",
    category: "Passive/Causative",
    meaning: "Make / let someone do ~ (causative)",
    structure: "V-ます形(stem) + せる (五段) / させる (一段) / させる (する) / こさせる (くる)",
    explanation:
      "〜せる / 〜させる is the causative form, meaning 'to make or let someone do ~.' It indicates that someone is caused or allowed to perform an action—either compulsory or permissive depending on context.",
    formation:
      "五段 V-ます形 + せる: 書[か]かせる\n一段 V-ます形 + させる: 食[た]べさせる\nする → させる: 勉強[べんきょう]させる\nくる → こさせる: 来[こ]させる",
    examples: [
      { jp: "母[はは]は子供[こども]に野菜[やさい]を食[た]べさせた。", en: "The mother made the child eat vegetables." },
      { jp: "先生[せんせい]は学生[がくせい]にレポートを書[か]かせた。", en: "The teacher had the students write a report." }
    ],
    notes:
      "The causative person is marked by に; the nuance can be 'force to do' (compulsory) or 'allow to do' (permissive), inferred from context.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // HONORIFIC (gn3-125 .. gn3-129) — humble verbs (謙譲語)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-125",
    point: "伺う (謙譲語)",
    reading: "ukagau (kenjougo)",
    level: "N3",
    category: "Honorific",
    meaning: "Humble: to visit / to ask / to hear",
    structure: "伺う (replaces 行く / 来る / 聞く / 尋ねる in humble speech)",
    explanation:
      "伺う is the humble (謙譲語) form of 行く, 来る, 聞く, and 尋ねる. It is used to lower the speaker's own action when visiting or asking someone of higher status, showing respect to the listener.",
    formation:
      "伺う (行く/来る): 明日[あした]伺[うかが]います\n伺う (聞く): 意見[いけん]を伺[うかが]う\n伺う (尋ねる): お名前[なまえ]を伺[うかが]う",
    examples: [
      { jp: "明日[あした]の午後[ごご]、お宅[たく]へ伺[うかが]ってもよろしいでしょうか。", en: "May I visit your house tomorrow afternoon?" },
      { jp: "先生[せんせい]のご意見[いけん]を伺[うかが]いたいのですが。", en: "I would like to ask for your opinion, Sensei." }
    ],
    notes:
      "伺う is humble—the speaker lowers their own action of going or asking; it should not be used for the listener's actions (use いらっしゃる instead).",
    related: []
  },

  {
    id: "gn3-126",
    point: "申す (謙譲語)",
    reading: "mousu (kenjougo)",
    level: "N3",
    category: "Honorific",
    meaning: "Humble: to say / to be called (named)",
    structure: "申す (replaces 言う / 〜と呼ぶ in humble speech)",
    explanation:
      "申す is the humble (謙譲語) form of 言う and means 'to say' or 'to be called.' It lowers the speaker's own action of saying or naming in formal speech.",
    formation:
      "〜と申す (言う): 山田[やまだ]と申[もう]します\nN + と申す (呼ばれる): 田中[たなか]と申[もう]す者[もの]\n〜と申す: そう申[もう]します",
    examples: [
      { jp: "私[わたし]は山田[やまだ]と申[もう]します。はじめまして。", en: "My name is Yamada. Nice to meet you." },
      { jp: "何[なに]かお手伝[てつだ]いできることがございましたら、お申[もう]しつけください。", en: "If there is anything I can help with, please tell me." }
    ],
    notes:
      "申す is humble and used for the speaker's own saying or naming; for the listener's words use おっしゃる (respectful).",
    related: []
  },

  {
    id: "gn3-127",
    point: "拝見する (謙譲語)",
    reading: "haiken suru (kenjougo)",
    level: "N3",
    category: "Honorific",
    meaning: "Humble: to look at / to see (someone's thing)",
    structure: "拝見する (replaces 見る in humble speech)",
    explanation:
      "拝見する is the humble (謙譲語) form of 見る, used when the speaker looks at or views something belonging to a superior. It lowers the speaker's action to show respect to the owner.",
    formation:
      "拝見する: 書類[しょるい]を拝見[はいけん]する\n拝見する: 写真[しゃしん]を拝見[はいけん]する\nお/ご〜を拝見する: ご本[ほん]を拝見[はいけん]する",
    examples: [
      { jp: "いただいた資料[しりょう]は、後[のち]ほど拝見[はいけん]いたします。", en: "I will look at the materials you gave me later." },
      { jp: "すてきな写真[しゃしん]ですね。拝見[はいけん]させていただきました。", en: "What a wonderful photo. I had the pleasure of viewing it." }
    ],
    notes:
      "拝見する is humble—the speaker's viewing of another's item; never use it for one's own things or for the listener's viewing (use ご覧[らん]になる).",
    related: []
  },

  {
    id: "gn3-128",
    point: "存じる / 存じ上げる (謙譲語)",
    reading: "zonjiru / zonjiageru (kenjougo)",
    level: "N3",
    category: "Honorific",
    meaning: "Humble: to know / to think / to remember",
    structure: "存じる / 存じ上げる (replaces 知る / 思う / 覚える in humble speech)",
    explanation:
      "存じる (and the more polite 存じ上げる) is the humble (謙譲語) form of 知る, 思う, and 覚える. It lowers the speaker's act of knowing, thinking, or remembering in formal speech.",
    formation:
      "存じる (知る): 存[ぞん]じております\n存じる (思う): そう存[ぞん]じます\n存じ上げる: 存[ぞん]じ上げております",
    examples: [
      { jp: "そのお名前[なまえ]はかねてから存[ぞん]じております。", en: "I have known your name for some time." },
      { jp: "大変[たいへん]お手数[てすう]をおかけしたと存[ぞん]じます。", en: "I think I have caused you a great deal of trouble." }
    ],
    notes:
      "存じる is humble—used for the speaker's own knowing or thinking; for the listener's knowledge or thoughts, use ご存知[ぞんじ](です).",
    related: []
  },

  {
    id: "gn3-129",
    point: "参る (謙譲語)",
    reading: "mairu (kenjougo)",
    level: "N3",
    category: "Honorific",
    meaning: "Humble: to go / to come",
    structure: "参る (replaces 行く / 来る in humble speech)",
    explanation:
      "参る is the humble (謙譲語) form of 行く and 来る, used when the speaker goes to or comes from a place related to a superior. It lowers the speaker's own movement.",
    formation:
      "参る (行く): 会社[かいしゃ]に参[まい]る\n参る (来る): こちらへ参[まい]る\n参る: すぐに参[まい]ります",
    examples: [
      { jp: "すぐにそちらへ参[まい]りますので、少々[しょうしょう]お待[ま]ちください。", en: "I will come there immediately, so please wait a moment." },
      { jp: "明日[あした]は社長[しゃちょう]のところへ参[まい]ります。", en: "Tomorrow I will go to the president's place." }
    ],
    notes:
      "参る is humble—used for the speaker's own going or coming; for the superior's movement, use いらっしゃる.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // PARTICLES (gn3-130 .. gn3-133)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-130",
    point: "〜にしたら / 〜にすれば",
    reading: "ni shitara / ni sureba",
    level: "N3",
    category: "Particles",
    meaning: "From ~'s point of view / if you take ~'s position",
    structure: "N (person) + にしたら / にすれば",
    explanation:
      "〜にしたら / 〜にすれば means 'from ~'s point of view' or 'for ~'—it indicates the perspective or standpoint of the person named, who would naturally feel or think a certain way.",
    formation:
      "N(人) + にしたら: 親[おや]にしたら\nN(人) + にすれば: 子供[こども]にすれば\nN(人) + にしたら: 先生[せんせい]にしたら",
    examples: [
      { jp: "親[おや]にしたら、子供[こども]の将来[しょうらい]が一番[いちばん]心配[しんぱい]だろう。", en: "From a parent's point of view, their child's future must be the biggest worry." },
      { jp: "学生[がくせい]にすれば、もっと休[やす]みが欲[ほ]しいに違[ちが]いない。", en: "From the students' standpoint, they surely want more days off." }
    ],
    notes:
      "〜にしたら / 〜にすれば takes a person as the standpoint; the main clause expresses what that person would feel, think, or find natural.",
    related: []
  },

  {
    id: "gn3-131",
    point: "〜からすると / 〜からすれば",
    reading: "kara suru to / kara sureba",
    level: "N3",
    category: "Particles",
    meaning: "Judging from ~ / from the standpoint of ~",
    structure: "N + からすると / からすれば",
    explanation:
      "〜からすると / 〜からすれば means 'judging from ~'—it indicates a basis or perspective used to make a judgment or inference about something.",
    formation:
      "N + からすると: 状況[じょうきょう]からすると\nN + からすると: 彼[かれ]の性格[せいかく]からすると\nN + からすれば: 話[はなし]ぶりからすれば",
    examples: [
      { jp: "あの様子[ようす]からすると、彼[かれ]は相当[そうとう]怒[おこ]っているようだ。", en: "Judging from how he looks, he seems quite angry." },
      { jp: "彼[かれ]の性格[せいかく]からすれば、そんな嘘[うそ]はつかないはずだ。", en: "Given his personality, he should not tell such a lie." }
    ],
    notes:
      "〜からすると / 〜からすれば presents a basis for a judgment or conjecture; the main clause states the conclusion drawn from that basis.",
    related: []
  },

  {
    id: "gn3-132",
    point: "〜からして",
    reading: "kara shite",
    level: "N3",
    category: "Particles",
    meaning: "Even ~ / judging from ~ (let alone)",
    structure: "N + からして",
    explanation:
      "〜からして means 'even ~' or 'judging from ~'—it singles out one striking example as a basis to infer the rest. It implies 'if even this is so, then the rest must be even more so.'",
    formation:
      "N + からして: 名前[なまえ]からして\nN + からして: あの態度[たいど]からして\nN + からして: 服装[ふくそう]からして",
    examples: [
      { jp: "あの態度[たいど]からして、全然[ぜんぜん]反省[はんせい]していないようだ。", en: "Judging from that attitude alone, he doesn't seem to reflect on it at all." },
      { jp: "このレストランは、メニューからしてほかとは違[ちが]う。", en: "This restaurant is different from others starting even from the menu." }
    ],
    notes:
      "〜からして picks one element and uses it as the basis for a broader judgment, with a nuance of 'even this, let alone the rest.'",
    related: []
  },

  {
    id: "gn3-133",
    point: "〜に関して / 〜に関する",
    reading: "ni kanshite / ni kansuru",
    level: "N3",
    category: "Particles",
    meaning: "Concerning / regarding / about ~",
    structure: "N + に関して (adverbial) / に関する + N (modifier)",
    explanation:
      "〜に関して is a formal expression meaning 'concerning / regarding ~'—used to introduce the topic about which something is said, thought, or done. 〜に関する modifies a noun.",
    formation:
      "N + に関して: 問題[もんだい]に関して\nN + に関して: 環境[かんきょう]に関して\nN + に関する + N: 健康問題[けんこうもんだい]に関する本[ほん]",
    examples: [
      { jp: "この問題[もんだい]に関して、みんなの意見[いけん]を聞[き]きたい。", en: "I want to hear everyone's opinions concerning this problem." },
      { jp: "環境[かんきょう]に関することがらは、今[いま]の世界[せかい]で重要[じゅうよう]だ。", en: "Matters regarding the environment are important in today's world." }
    ],
    notes:
      "〜に関して is the formal written equivalent of 〜について; 〜に関する is the attributive form modifying a noun.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // CONJUNCTIONS (gn3-134 .. gn3-138)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-134",
    point: "〜に応じて / 〜に応じた",
    reading: "ni oujite / ni oujita",
    level: "N3",
    category: "Conjunctions",
    meaning: "According to / in response to / in accordance with ~",
    structure: "N + に応じて (adverbial) / に応じた + N (modifier)",
    explanation:
      "〜に応じて means 'according to / in response to ~'—the action in the main clause changes according to the situation or condition named. It implies flexibility or adaptation to circumstances.",
    formation:
      "N + に応じて: 収入[しゅうにゅう]に応じて\nN + に応じて: 状況[じょうきょう]に応じて\nN + に応じた + N: 能力[のうりょく]に応じた給料[きゅうりょう]",
    examples: [
      { jp: "収入[しゅうにゅう]に応じて、税金[ぜいきん]の額[がく]が変[か]わる。", en: "The amount of tax changes according to one's income." },
      { jp: "状況[じょうきょう]に応じて、計画[けいかく]を変[か]える必要[ひつよう]がある。", en: "It is necessary to change the plan according to the situation." }
    ],
    notes:
      "〜に応じて shows that the outcome varies in response to the named factor; 〜に応じた modifies a noun that adapts to that factor.",
    related: []
  },

  {
    id: "gn3-135",
    point: "〜を通じて / 〜を通じる",
    reading: "o tsuujite",
    level: "N3",
    category: "Conjunctions",
    meaning: "Through / via / throughout (a period)",
    structure: "N (person / medium / period) + を通じて",
    explanation:
      "〜を通じて means 'through ~' (a medium or intermediary) or 'throughout ~' (a period). It is slightly more formal and written than 〜を通して, and can also express something that holds throughout an entire span.",
    formation:
      "N(人) + を通じて: 弁護士[べんごし]を通じて\nN(媒体) + を通じて: テレビを通じて\nN(期間) + を通じて: 一年[いちねん]を通じて",
    examples: [
      { jp: "弁護士[べんごし]を通じて、交渉[こうしょう]を行[おこな]った。", en: "We negotiated through a lawyer." },
      { jp: "この地方[ちほう]は一年[いちねん]を通じて雨[あめ]が多[おお]い。", en: "This region has a lot of rain throughout the year." }
    ],
    notes:
      "〜を通じて covers both 'through an intermediary' and 'throughout a whole period'; it is more formal than 〜を通して.",
    related: []
  },

  {
    id: "gn3-136",
    point: "〜を通して",
    reading: "o tooshite",
    level: "N3",
    category: "Conjunctions",
    meaning: "Through / via (medium or experience)",
    structure: "N + を通して",
    explanation:
      "〜を通して means 'through ~'—it emphasizes the medium or experience that one goes through to gain something. It is commonly used when describing learning, understanding, or transmission via a process.",
    formation:
      "N(媒体) + を通して: テレビを通して\nN(経験) + を通して: 経験[けいけん]を通して\nN(人) + を通して: 友人[ゆうじん]を通して",
    examples: [
      { jp: "経験[けいけん]を通して、人間[にんげん]は成長[せいちょう]するものだ。", en: "People grow through experience." },
      { jp: "この映画[えいが]を通して、戦争[せんそう]の残酷[ざんこく]さを知[し]った。", en: "Through this movie, I learned the cruelty of war." }
    ],
    notes:
      "〜を通して emphasizes the process of passing through a medium or experience; it is generally interchangeable with 〜を通じて but more common in speech.",
    related: []
  },

  {
    id: "gn3-137",
    point: "〜に伴って / 〜に伴い",
    reading: "ni tomonatte / ni tomonai",
    level: "N3",
    category: "Conjunctions",
    meaning: "Along with / as ~ changes, ~ also changes",
    structure: "V-辞書形 / N + に伴って (adverbial) / に伴い (formal)",
    explanation:
      "〜に伴って means 'along with / accompanying'—it indicates that as one change happens, another change occurs in parallel. It is formal and common in news or written Japanese describing correlated changes.",
    formation:
      "N + に伴って: 経済[けいざい]の発展[はってん]に伴って\nV-辞書形 + に伴って: 人口[じんこう]が増[ふ]えるに伴って\nN + に伴い: 時代[じだい]の変化[へんか]に伴い",
    examples: [
      { jp: "経済[けいざい]の発展[はってん]に伴って、人々[ひとびと]の生活[せいかつ]も豊[ゆた]かになった。", en: "Along with economic development, people's lives became richer." },
      { jp: "高齢化[こうれいか]に伴い、医療[いりょう]問題[もんだい]が深刻[しんこく]になっている。", en: "Along with the aging of the population, medical issues are becoming serious." }
    ],
    notes:
      "〜に伴って describes two changes happening together; 〜に伴い is the more concise written form used in formal contexts.",
    related: []
  },

  {
    id: "gn3-138",
    point: "〜とともに",
    reading: "to tomo ni",
    level: "N3",
    category: "Conjunctions",
    meaning: "Along with / together with / as ~ happens, ~ also",
    structure: "V-辞書形 / N + とともに",
    explanation:
      "〜とともに means 'along with / together with ~'—it indicates that two things occur together, or that as one change takes place, another happens simultaneously. It can also mean 'together with (a person).'",
    formation:
      "N + とともに: 家族[かぞく]とともに\nV-辞書形 + とともに: 年[とし]をとるとともに\nN + とともに: 時代[じだい]とともに",
    examples: [
      { jp: "年[とし]をとるとともに、健康[けんこう]が大切[たいせつ]だと感[かん]じるようになった。", en: "As I grow older, I have come to feel that health is important." },
      { jp: "春[はる]とともに、新[あたら]しい生活[せいかつ]が始[はじ]まる。", en: "Along with spring, a new life begins." }
    ],
    notes:
      "〜とともに can express both 'together with (a person or thing)' and 'as X changes, Y changes'; it is broader and slightly less formal than 〜に伴って.",
    related: []
  },

  // ──────────────────────────────────────────────────────────────────────
  // MODIFIERS (gn3-139 .. gn3-150)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "gn3-139",
    point: "〜向き / 〜向け",
    reading: "muki / muke",
    level: "N3",
    category: "Modifiers",
    meaning: "Suitable for ~ / intended for ~",
    structure: "N + 向き (suitable for) / N + 向け (aimed / intended for)",
    explanation:
      "〜向き means 'suitable for ~'—something fits or is appropriate for the named group. 〜向け means 'intended for / aimed at ~'—something is produced or designed targeting that group.",
    formation:
      "N + 向き: 若者[わかもの]向き\nN + 向き: 初心者[しょしんしゃ]向き\nN + 向け: 海外[かいがい]向け\nN + 向け: 子供[こども]向け",
    examples: [
      { jp: "この本[ほん]は内容[ないよう]が難[むずか]しく、大人[おとな]向[む]きだ。", en: "The content of this book is difficult, so it is suitable for adults." },
      { jp: "これは子供[こども]向[む]けに作[つく]られたアニメだ。", en: "This is an anime made for children." }
    ],
    notes:
      "〜向き judges suitability (this fits ~), while 〜向け indicates the producer's target (this is made for ~); the two are not always interchangeable.",
    related: []
  },

  {
    id: "gn3-140",
    point: "〜気味",
    reading: "gimi",
    level: "N3",
    category: "Modifiers",
    meaning: "Slightly ~ / -ish / a touch of ~",
    structure: "V-ます形(stem) / N + 気味",
    explanation:
      "〜気味 means 'slightly ~' or 'a little ~'—it describes a mild tendency or slight condition, often about one's physical or mental state. It conveys 'I feel a bit ~.'",
    formation:
      "V-ます形 + 気味: 疲[つか]れ気味[ぎみ]\nN + 気味: 風邪[かぜ]気味[ぎみ]\nV-ます形 + 気味: 太[ふと]り気味[ぎみ]",
    examples: [
      { jp: "最近[さいきん]少[すこ]し疲[つか]れ気味[ぎみ]だから、今日[きょう]は早[はや]く寝[ね]る。", en: "I've been feeling a bit tired lately, so I'll go to bed early today." },
      { jp: "朝[あさ]から少[すこ]し風邪[かぜ]気味[ぎみ]で、のどが痛[いた]い。", en: "I've felt slightly like I'm catching a cold since morning, and my throat hurts." }
    ],
    notes:
      "〜気味 expresses a slight or mild degree of a state; it is often used with words about health, fatigue, or weight.",
    related: []
  },

  {
    id: "gn3-141",
    point: "〜がち / 〜がちな",
    reading: "gachi / gachi na",
    level: "N3",
    category: "Modifiers",
    meaning: "Tends to ~ / prone to ~ (with negative nuance)",
    structure: "V-ます形(stem) / N + がち (adverbial / noun) / がちな + N",
    explanation:
      "〜がち means 'tends to ~ / prone to ~'—it describes something that happens frequently, usually with an undesirable or negative nuance. It is used for habits or recurring negative states.",
    formation:
      "V-ます形 + がち: 忘[わす]れがち\nN + がち: 雪[ゆき]がち\nV-ます形 + がちな + N: 遅[おく]れがちな人[ひと]\nN + がち: 病気[びょうき]がち",
    examples: [
      { jp: "彼[かれ]は最近[さいきん]遅刻[ちこく]しがちだ。", en: "He tends to be late often lately." },
      { jp: "冬[ふゆ]は体調[たいちょう]を崩[くず]しがちなので、気[き]をつけてください。", en: "In winter one tends to get sick, so please take care." }
    ],
    notes:
      "〜がち carries a negative connotation and is used for things that occur frequently but are undesirable; it is not used for positive habits.",
    related: []
  },

  {
    id: "gn3-142",
    point: "〜勝ち",
    reading: "gachi",
    level: "N3",
    category: "Modifiers",
    meaning: "Tends to ~ / liable to ~ (habitual tendency)",
    structure: "V-ます形(stem) + 勝ち",
    explanation:
      "〜勝ち means 'tends to ~'—it describes a habitual tendency to do something, often slightly negative. It is similar to 〜がち but more literary and focused on recurring actions.",
    formation:
      "V-ます形 + 勝ち: 忘[わす]れ勝[が]ち\nV-ます形 + 勝ち: 遅[おく]れ勝[が]ち\nV-ます形 + 勝ち: 怒[おこ]り勝[が]ち",
    examples: [
      { jp: "忙[いそが]しいと、つい食事[しょくじ]を抜[ぬ]き勝[が]ちになる。", en: "When busy, one tends to skip meals." },
      { jp: "昔[むかし]は病気[びょうき]しがちだったが、今[いま]は元気[げんき]だ。", en: "I used to get sick often, but now I am healthy." }
    ],
    notes:
      "〜勝ち is a slightly literary version of 〜がち, both indicating a tendency; modern speech prefers 〜がち, but 〜勝ち still appears in writing.",
    related: []
  },

  {
    id: "gn3-143",
    point: "〜に沿って / 〜に沿った",
    reading: "ni sotte / ni sotta",
    level: "N3",
    category: "Modifiers",
    meaning: "Along / in accordance with / following ~",
    structure: "N + に沿って (adverbial) / に沿った + N (modifier)",
    explanation:
      "〜に沿って means 'along ~' or 'in accordance with ~'—it indicates following a path, plan, principle, or rule. It can be physical (along a river) or abstract (following a policy).",
    formation:
      "N + に沿って: 川[かわ]に沿って\nN + に沿って: 計画[けいかく]に沿って\nN + に沿った + N: 法律[ほうりつ]に沿った判断[はんだん]\nN + に沿って: 方針[ほうしん]に沿って",
    examples: [
      { jp: "この道[みち]は川[かわ]に沿って続[つづ]いている。", en: "This road continues along the river." },
      { jp: "当初[とうしょ]の計画[けいかく]に沿って、仕事[しごと]を進[すす]めている。", en: "We are proceeding with the work in accordance with the original plan." }
    ],
    notes:
      "〜に沿って can describe physical 'along' or abstract 'in accordance with a plan or rule'; 〜に沿った modifies a noun that follows that principle.",
    related: []
  },

  {
    id: "gn3-144",
    point: "〜に基づいて / 〜に基づいた",
    reading: "ni motoduite / ni motoduita",
    level: "N3",
    category: "Modifiers",
    meaning: "Based on / on the basis of ~",
    structure: "N + に基づいて (adverbial) / に基づいた + N (modifier)",
    explanation:
      "〜に基づいて means 'based on ~'—it indicates that an action or judgment is grounded in some data, rule, fact, or principle. The basis is treated as the foundation for what follows.",
    formation:
      "N + に基づいて: データに基づいて\nN + に基づいて: 法律[ほうりつ]に基づいて\nN + に基づいた + N: 事実[じじつ]に基づいた報告[ほうこく]\nN + に基づいて: 経験[けいけん]に基づいて",
    examples: [
      { jp: "この記事[きじ]は事実[じじつ]に基づいて書[か]かれている。", en: "This article is written based on facts." },
      { jp: "調査[ちょうさ]の結果[けっか]に基づいて、新[あたら]しい計画[けいかく]を立[た]てた。", en: "Based on the survey results, we made a new plan." }
    ],
    notes:
      "〜に基づいて stresses that the action is grounded in a concrete basis (data, law, fact); 〜に基づいた modifies a noun grounded in that basis.",
    related: []
  },

  {
    id: "gn3-145",
    point: "〜を中心に(して)",
    reading: "o chuushin ni (shite)",
    level: "N3",
    category: "Modifiers",
    meaning: "Centered on ~ / mainly ~ / with ~ at the center",
    structure: "N + を中心に(して) / を中心として",
    explanation:
      "〜を中心に means 'centered on ~' or 'mainly ~'—it indicates that the named thing is the focus or core around which other things revolve or are organized.",
    formation:
      "N + を中心に: 東京[とうきょう]を中心に\nN + を中心にして: 都市[とし]を中心にして\nN + を中心として: グループを中心として",
    examples: [
      { jp: "この会社[かいしゃ]は東京[とうきょう]を中心[ちゅうしん]に活動[かつどう]している。", en: "This company operates mainly centered on Tokyo." },
      { jp: "議論[ぎろん]は環境問題[かんきょうもんだい]を中心[ちゅうしん]に行[おこな]われた。", en: "The discussion was held mainly around environmental issues." }
    ],
    notes:
      "〜を中心に indicates the focal point or main subject; 〜を中心として is more formal and emphasizes the structured centering.",
    related: []
  },

  {
    id: "gn3-146",
    point: "〜を込めて",
    reading: "o komete",
    level: "N3",
    category: "Modifiers",
    meaning: "Putting ~ into (with feeling or effort infused)",
    structure: "N (feeling / effort) + を込めて",
    explanation:
      "〜を込めて means 'putting ~ into'—it indicates that the speaker pours a feeling, thought, or effort into an action. It expresses sincerity or strong feeling behind what is done.",
    formation:
      "N + を込めて: 愛[あい]を込めて\nN + を込めて: 思[おも]いを込めて\nN + を込めて: 祈[いの]りを込めて\nN + を込めて: 感謝[かんしゃ]を込めて",
    examples: [
      { jp: "母[はは]は愛[あい]を込めて、毎朝[まいあさ]お弁当[べんとう]を作[つく]ってくれる。", en: "My mother puts love into making my lunch box every morning." },
      { jp: "彼[かれ]は感謝[かんしゃ]を込めて、手紙[てがみ]を書[か]いた。", en: "He wrote the letter with gratitude." }
    ],
    notes:
      "〜を込めて takes a noun of feeling or effort and shows it is infused into the action; common with 愛, 思い, 感謝, 祈り.",
    related: []
  },

  {
    id: "gn3-147",
    point: "〜上 (じょう)",
    reading: "jou",
    level: "N3",
    category: "Modifiers",
    meaning: "In terms of ~ / from the standpoint of ~ / on ~",
    structure: "N + 上 (じょう) — forms compounds like 法律上, 事実上, 健康上",
    explanation:
      "〜上(じょう) means 'in terms of ~' or 'on the ~ level'—it attaches to nouns to form compounds indicating a standpoint or domain (e.g., 法律上 'legally,' 事実上 'in fact,' 健康上 'in terms of health').",
    formation:
      "N + 上: 法律[ほうりつ]上[じょう]\nN + 上: 事実[じじつ]上[じょう]\nN + 上: 健康[けんこう]上[じょう]\nN + 上: 教育[きょういく]上[じょう]",
    examples: [
      { jp: "この契約[けいやく]は法律上[ほうりつじょう]、何[なに]の問題[もんだい]もない。", en: "This contract has no legal problems whatsoever." },
      { jp: "事実上[じじつじょう]、この計画[けいかく]はもう終[お]わったも同然[どうぜん]だ。", en: "In fact, this plan is as good as over." }
    ],
    notes:
      "〜上(じょう) forms compounds indicating a domain or standpoint; it differs from 〜上で, which means 'after doing' or 'on the basis of.'",
    related: []
  },

  {
    id: "gn3-148",
    point: "〜きり / 〜っきり",
    reading: "kiri / kkiri",
    level: "N3",
    category: "Modifiers",
    meaning: "Only / just ~ (and nothing else) / ~ since (no change since)",
    structure: "V-た形 / N + きり (〜っきり colloquial)",
    explanation:
      "〜きり means 'only ~' or 'just ~'—it indicates that something is the only case, or that an action happened once and has not been repeated since. With V-た形 it means 'has not ~ since.'",
    formation:
      "N + きり: 一人[ひとり]きり\nV-た形 + きり: 行[い]ったきり\nN + っきり: 一人[ひとり]っきり\nV-た形 + きり: 寝[ね]たきり",
    examples: [
      { jp: "彼[かれ]は家[いえ]を出[で]たきり、もう5年[ごねん]も帰[かえ]ってこない。", en: "He left home and has not returned for five years." },
      { jp: "部屋[へや]には私[わたし]一人[ひとり]きりだった。", en: "I was all alone in the room." }
    ],
    notes:
      "〜きり with V-た形 means the action happened once and the expected follow-up never occurred; with a noun it means 'only ~ (and no other).'",
    related: []
  },

  {
    id: "gn3-149",
    point: "〜っぱなし",
    reading: "ppanashi",
    level: "N3",
    category: "Modifiers",
    meaning: "Leaving ~ on / leaving ~ as is / doing ~ continuously",
    structure: "V-ます形(stem) + っぱなし / V-て形 + っぱなし",
    explanation:
      "〜っぱなし means 'leaving something on / open / as is' or 'doing something continuously without a break.' It carries a nuance of negligence (something left undone) or endurance (doing something nonstop).",
    formation:
      "V-ます形 + っぱなし: 立[た]ちっぱなし\nV-ます形 + っぱなし: 開[あ]けっぱなし\nV-て形 + っぱなし: 開[あ]けてっぱなし\nV-ます形 + っぱなし: 使[つか]いっぱなし",
    examples: [
      { jp: "テレビをつけっぱなしにしたまま出[で]かけてしまった。", en: "I went out leaving the TV on." },
      { jp: "電車[でんしゃ]の中[なか]で3時間[さんじかん]も立[た]ちっぱなしだった。", en: "I stood for three hours straight in the train." }
    ],
    notes:
      "〜っぱなし has two senses: leaving a state unchanged (negligence) and continuing an action without rest (endurance); context determines which.",
    related: []
  },

  {
    id: "gn3-150",
    point: "〜得る / 〜得ない",
    reading: "eru / enai",
    level: "N3",
    category: "Modifiers",
    meaning: "Can happen / possible / able to ~ (and its negative: impossible)",
    structure: "V-ます形(stem) + 得る / 得ない (する → しうる / し得る)",
    explanation:
      "〜得る means 'can happen' or 'is possible'—a formal way to express possibility, often used in written Japanese. Its negative 〜得ない means 'cannot happen / impossible.'",
    formation:
      "V-ます形 + 得る: 起[お]こり得[え]る\nV-ます形 + 得ない: 考[かんが]え得[え]ない\nする → しうる / し得る: しうる\nV-ます形 + 得る: あり得[え]る",
    examples: [
      { jp: "こんなことが起[お]こり得[え]るなんて、思[おも]わなかった。", en: "I never thought such a thing could happen." },
      { jp: "そんなことはあり得[え]ない話[はなし]だ。", en: "Such a thing is impossible." }
    ],
    notes:
      "〜得る is a formal written-style equivalent of 〜ことができる; する becomes しうる, and くる is rare. The negative 〜得ない means 'impossible.'",
    related: []
  }
];
