import type { GrammarData } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
//
// This file covers N2-level grammar points (Shinzaizen Master / try! 文法 style),
// chunk E, IDs gn2-230 .. gn2-259. Includes lesson field (1-30).
// Focuses on harder formal / written-style N2 patterns:
// に即して / に則って / にとどまらず / にひきかえ / にほかならない /
// の極み / のしわざ / のみならず / ばこそ / ばそれまでだ /
// ひとり〜のみならず / もさることながら / ものを / や否や /
// んばかりに / んがため / がてら / が最後 / そばから / たりとも /
// てからというもの / てやまない / と相まって / ところを /
// に至るまで / に限ったことではない etc.

export const grammarN2E: GrammarData[] = [
  // ────────────────────────────────────────────────────────────────
  // BASIS — 基準・即する (acting on a standard / reality)
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-230",
    point: "〜に即して",
    reading: "〜にそくして",
    level: "N2",
    category: "Basis",
    lesson: 1,
    meaning: "in accordance with; based on (a specific reality or fact)",
    structure: "N + に即して / N + に即した + N",
    explanation:
      "Used when acting, judging, or handling something in strict accordance with a specific reality, fact, or rule. More formal and written-style than 〜に従って; emphasizes faithful adherence to concrete facts rather than abstract rules.",
    formation:
      "N + に即して (現実[げんじつ]に即して / 事実[じじつ]に即して)\nN + に即した + N (現実[げんじつ]に即した考[かんが]え方[かた])",
    examples: [
      { jp: "現実[げんじつ]に即[そく]して考[かんが]えるべきだ。", en: "We should think based on reality." },
      { jp: "事実[じじつ]に即[そく]して対処[たいしょ]しなければならない。", en: "We must deal with it in accordance with the facts." },
      { jp: "法律[ほうりつ]に即[そく]した判断[はんだん]が求[もと]められる。", en: "A judgment in accordance with the law is required." }
    ],
    notes:
      "硬い書き言葉で、「〜に従って」より改まった表現。現実[げんじつ]、事実[じじつ]、法律[ほうりつ]、規則[きそく]などと結[むす]びつきやすい。「即」は「則」とも書[か]くが、本項では「事実・現実に忠実[ちゅうじつ]に」の意味で使う。",
    related: ["〜に則って", "〜に従って", "〜に基づいて"]
  },

  {
    id: "gn2-231",
    point: "〜に則って",
    reading: "〜にのっとって",
    level: "N2",
    category: "Basis",
    lesson: 2,
    meaning: "in accordance with; following (a rule, precedent, or tradition)",
    structure: "N + に則って / N + に則った + N",
    explanation:
      "Indicates acting in accordance with a rule, precedent, tradition, or established model. Stronger than 〜に従って in its emphasis on conforming to an established norm. Often interchangeable with 〜に即して but 〜に則って tends to be used for customs, precedents, and rules.",
    formation:
      "N + に則って (慣例[かんれい]に則って / 先例[せんれい]に則って)\nN + に則った + N (伝統[でんとう]に則った作法[さほう])",
    examples: [
      { jp: "慣例[かんれい]に則[のっと]って式典[しきてん]を行[おこな]う。", en: "We hold the ceremony following custom." },
      { jp: "先例[せんれい]に則[のっと]って処理[しょり]する。", en: "We process it in accordance with precedent." },
      { jp: "伝統[でんとう]に則[のっと]った日本建築[にほんけんちく]だ。", en: "It is Japanese architecture built in the traditional style." }
    ],
    notes:
      "「則[のっと]る」は「従[したが]う」と同[おな]じだが、規則[きそく]・先例[せんれい]・慣例[かんれい]・伝統[でんとう]などに従う場面で使う。漢字[かんじ]は「則って」「即って」の両方[りょうほう]が使われるが、本項では「則」を用いる。",
    related: ["〜に即して", "〜に従って", "〜に基づいて"]
  },

  // ────────────────────────────────────────────────────────────────
  // EXTENT — 程度・範囲
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-232",
    point: "〜にとどまらず",
    reading: "〜にとどまらず",
    level: "N2",
    category: "Extent",
    lesson: 3,
    meaning: "not limited to; not only — extending beyond",
    structure: "N + にとどまらず / V辞書形 + にとどまらず",
    explanation:
      "Indicates that something is not confined to the stated scope, but extends beyond it. Used for both concrete (geographic) and abstract extension. Formal, written-style; common in news and analytical writing.",
    formation:
      "N + にとどまらず (国内[こくない]にとどまらず / 子供[こども]にとどまらず)\nV辞書形 + にとどまらず (広[ひろ]がるにとどまらず)",
    examples: [
      { jp: "彼[かれ]の名声[めいせい]は国内[こくない]にとどまらず、世界中[せかいじゅう]に広[ひろ]まっている。", en: "His fame is not limited to Japan; it has spread throughout the world." },
      { jp: "その被害[ひがい]は都市[とし]にとどまらず、農村[のうそん]にも及[およ]んだ。", en: "The damage was not limited to the cities; it reached rural areas as well." },
      { jp: "この問題[もんだい]は子供[こども]にとどまらず、大人[おとな]にも関係[かんけい]する。", en: "This problem is not limited to children; it concerns adults too." }
    ],
    notes:
      "「〜だけでなく／〜ばかりでなく」の硬い書き言葉。名詞[めいし]や動詞[どうし]辞書形[じしょけい]に続[つづ]く。ニュース・論説文[ろんせつぶん]で多用[たよう]される。",
    related: ["〜のみならず", "〜ばかりか", "〜にとどまらない"]
  },

  {
    id: "gn2-233",
    point: "〜にひきかえ",
    reading: "〜にひきかえ",
    level: "N2",
    category: "Contrast",
    lesson: 4,
    meaning: "in contrast to; unlike",
    structure: "N + にひきかえ / V普通形 + の + にひきかえ",
    explanation:
      "Indicates a strong contrast between two things, often highlighting that one is the opposite of the other. More emphatic and literary than 〜と対照的に or 〜と違って. Used to compare two people, times, or situations.",
    formation:
      "N + にひきかえ (兄[あに]にひきかえ / 昨年[さくねん]にひきかえ)\nV普通形 + の + にひきかえ (努力[どりょく]するのにひきかえ)",
    examples: [
      { jp: "兄[あに]にひきかえ、弟[おとうと]は大人[おとな]しい。", en: "In contrast to his older brother, the younger brother is quiet." },
      { jp: "昨年[さくねん]にひきかえ、今年[ことし]は暑[あつ]い夏[なつ]になりそうだ。", en: "In contrast to last year, this year looks like it will be a hot summer." },
      { jp: "彼[かれ]が積極的[せっきょくてき]なのにひきかえ、彼女[かのじょ]は消極的[しょうきょくてき]だ。", en: "Whereas he is proactive, she is passive." }
    ],
    notes:
      "二人[ふたり]の人[ひと]や二つ[ふたつ]の時期[じき]・状況[じょうきょう]を対照[たいしょう]させる表現。「〜と違[ちが]って」より改まった硬い言[い]い方。",
    related: ["〜とは対照的に", "〜とは反対に", "〜に反して"]
  },

  {
    id: "gn2-234",
    point: "〜にほかならない",
    reading: "〜にほかならない",
    level: "N2",
    category: "Emphasis",
    lesson: 5,
    meaning: "nothing but; precisely; exactly; indeed",
    structure: "N + に(は)ほかならない / V普通形 + の + にほかならない",
    explanation:
      "Strongly affirms that something is precisely or certainly the case, often used to emphasize a cause, reason, or essential nature. Formal written-style; conveys conviction.",
    formation:
      "N + にほかならない (親[おや]の愛[あい]にほかならない)\nV普通形 + の + にほかならない (努力[どりょく]した結果[けっか]にほかならない)\n〜からにほかならない (「だから〜なのだ」の強調)",
    examples: [
      { jp: "これこそ親[おや]の愛[あい]にほかならない。", en: "This is nothing but parental love." },
      { jp: "彼[かれ]の成功[せいこう]は日々[ひび]の努力[どりょく]の結果[けっか]にほかならない。", en: "His success is nothing but the result of daily effort." },
      { jp: "この問題[もんだい]の根本[こんぽん]はコミュニケーション不足[ぶそく]にほかならない。", en: "The root of this problem is nothing but a lack of communication." }
    ],
    notes:
      "強い断定[だんてい]を示す。「〜に違[ちが]いない」と近いが、より宣言[せんげん]的[てき]。「〜からにほかならない」の形[かたち]で理由[りゆう]を強調することも。",
    related: ["〜に違いない", "〜に相違ない", "〜からにほかならない"]
  },

  {
    id: "gn2-235",
    point: "〜にもまして",
    reading: "〜にもまして",
    level: "N2",
    category: "Comparison",
    lesson: 6,
    meaning: "more than before / ever; even more than (the comparison point)",
    structure: "N + にもまして",
    explanation:
      "Indicates that something is even more so than a previous state or another reference point. Often used with time words (以前, 昨日, 今) or with explicit comparison targets. Formal.",
    formation:
      "N + にもまして (以前[いぜん]にもまして / 昨日[きのう]にもまして / 今[いま]にもまして)",
    examples: [
      { jp: "彼[かれ]は以前[いぜん]にもまして元気[げんき]になった。", en: "He has become even more energetic than before." },
      { jp: "今日[きょう]は昨日[きのう]にもまして寒[さむ]い。", en: "Today is even colder than yesterday." },
      { jp: "日本[にほん]に来[き]て、今[いま]にもましてこの国[くに]が好[す]きになった。", en: "Since coming to Japan, I have come to like this country even more than before." }
    ],
    notes:
      "以前[いぜん]・昨日[きのう]・昔[むかし]・今[いま]などの時[とき]を表す名詞[めいし]と相性[あいしょう]がいい。「〜よりもっと」の改まった言[い]い方。",
    related: ["〜よりも", "〜にまさって", "〜以上に"]
  },

  {
    id: "gn2-236",
    point: "〜の極み",
    reading: "〜のきわみ",
    level: "N2",
    category: "Extent",
    lesson: 7,
    meaning: "the height / peak of; extremely; the utmost",
    structure: "N + の極み / N + の極み + だ(です)",
    explanation:
      "Indicates the utmost limit or peak of something, often an emotion or state. Expresses 'the ultimate; the height of; extremely...'. Strongly emotive and formal; common in speeches and written expression of feeling.",
    formation:
      "N + の極み (残念[ざんねん]の極み / 感激[かんげき]の極み / 怒[いか]りの極み)\nN + の極み + だ (これこそ感激[かんげき]の極[きわ]みだ)",
    examples: [
      { jp: "全力[ぜんりょく]を尽[つ]くしたが敗[やぶ]れ、残念[ざんねん]の極[きわ]みだ。", en: "I gave it my all but lost — it is the height of regret." },
      { jp: "こんな素晴[すば]らしい賞[しょう]をいただき、感激[かんげき]の極[きわ]みです。", en: "Receiving such a wonderful award, I am at the height of gratitude." },
      { jp: "彼[かれ]の失礼[しつれい]な態度[たいど]には怒[いか]りの極[きわ]みに達[たっ]した。", en: "His rude attitude brought me to the utmost anger." }
    ],
    notes:
      "感情[かんじょう]や状態[じょうたい]を表す名詞[めいし]に付[つ]く。「〜の限[かぎ]り」「〜極[きわ]まりない」と近い。否定的[ひていてき]な名詞にも使える（愚[ぐ]の極[きわ]み／痛[いた]の極[きわ]み）。",
    related: ["〜の限り", "〜極まりない", "〜の至[いた]り"]
  },

  {
    id: "gn2-237",
    point: "〜のこととて",
    reading: "〜のこととて",
    level: "N2",
    category: "Cause/Reason",
    lesson: 8,
    meaning: "because; as it is (offered as a sympathetic excuse)",
    structure: "N + のこととて / V普通形 + のこととて",
    explanation:
      "Indicates a reason or cause, often offered as an excuse or sympathetic explanation for a state of affairs. Slightly old-fashioned, written-style. Common with nouns referring to circumstances (childhood, first time, remote location).",
    formation:
      "N + のこととて (子供[こども]のこととて / 初[はじ]めてのこととて)\nV普通形 + の + こととて (準備[じゅんび]が遅[おく]れたこととて)",
    examples: [
      { jp: "子供[こども]のこととて、大目[おおめ]に見[み]てやってください。", en: "Please overlook it — he is only a child." },
      { jp: "初[はじ]めてのこととて、ご不都合[ふつごう]がありましたらお許[ゆる]しください。", en: "It is our first time, so please forgive any inconveniences." },
      { jp: "山[やま]の上[うえ]のこととて、夜[よる]は寒[さむ]さが厳[きび]しい。", en: "Being up in the mountains, the cold is severe at night." }
    ],
    notes:
      "言い訳[いわけ]や許[ゆる]しを乞[こ]う場面で使うことが多[おお]い。「〜だから／〜なので」のやや古[ふる]く改まった言[い]い方。「〜ことだから」と同義[どうぎ]。",
    related: ["〜ことだから", "〜だけに", "〜こととて"]
  },

  {
    id: "gn2-238",
    point: "〜のしわざ",
    reading: "〜のしわざ",
    level: "N2",
    category: "Cause/Reason",
    lesson: 9,
    meaning: "the doing of; due to the action of (used to assign blame)",
    structure: "N + のしわざ",
    explanation:
      "Indicates that a (usually negative) outcome is the result of someone or something's doing. Used to assign blame or attribute an unfavorable result to a specific cause. Almost always negative.",
    formation:
      "N + のしわざ (酒[さけ]のしわざ / 彼[かれ]のしわざ / 疲[つか]れのしわざ)",
    examples: [
      { jp: "昨夜[さくや]の失態[しったい]は酒[さけ]のしわざだ。", en: "Last night's blunder was the doing of alcohol." },
      { jp: "この混乱[こんらん]はすべて彼[かれ]のしわざだ。", en: "All this chaos is entirely his doing." },
      { jp: "急[きゅう]に泣[な]き出[だ]したのは、疲[つか]れのしわざかもしれない。", en: "Suddenly bursting into tears might be the doing of fatigue." }
    ],
    notes:
      "ほぼ必[かなら]ず否定的[ひていてき]な結果[けっか]に使う。Nには人[ひと]・物質[ぶっしつ]（酒[さけ]・薬[くすり]）・抽象[ちゅうしょう]原因[げんいん]（疲[つか]れ・気[き]の迷[まよ]い）が入る。「〜のせい」より生々[なまなま]しい非難[ひなん]のニュアンス。",
    related: ["〜のせいで", "〜のおかげで", "〜の所為[しょい]"]
  },

  // ────────────────────────────────────────────────────────────────
  // ADDITION — 付加・並立
  // ────────────────────────────────────────────────────────────────

  {
    id: "gn2-239",
    point: "〜のみならず",
    reading: "〜のみならず",
    level: "N2",
    category: "Addition",
    lesson: 10,
    meaning: "not only... but also",
    structure: "N + のみならず / V普通形 + のみならず / Na-adj(である) + のみならず / I-adj + のみならず",
    explanation:
      "Formal equivalent of 〜だけでなく / 〜ばかりでなく. Indicates that the statement applies not only to X but also to Y. Used in written or formal contexts like news, essays, and speeches.",
    formation:
      "N + のみならず (学生[がくせい]のみならず / 日本[にほん]のみならず)\nV普通形 + のみならず (増[ふ]えるのみならず)\nI-adj + のみならず (高[たか]いのみならず)\nNa-adj + である + のみならず (便利[べんり]であるのみならず)",
    examples: [
      { jp: "彼[かれ]は優秀[ゆうしゅう]な学者[がくしゃ]であるのみならず、優[すぐ]れた教育者[きょういくしゃ]でもある。", en: "He is not only an excellent scholar but also a fine educator." },
      { jp: "この問題[もんだい]は日本[にほん]のみならず、世界中[せかいじゅう]で深刻[しんこく]化[か]している。", en: "This problem is worsening not only in Japan but throughout the world." },
      { jp: "被害[ひがい]は拡大[かくだい]するのみならず、複雑[ふくざつ]化[か]している。", en: "The damage is not only spreading but also becoming more complex." }
    ],
    notes:
      "「〜だけでなく」の改まった硬い言[い]い方。各[かく]品詞[ひんし]に付[つ]く。「〜ばかりか」とも近いが、「のみ」の丁寧[ていねい]な響[ひび]きがある。",
    related: ["〜だけでなく", "〜ばかりか", "〜にとどまらず"]
  },

  {
    id: "gn2-24gn2-240",
    point: "〜はもとより",
    reading: "〜はもとより",
    level: "N2",
    category: "Addition",
    lesson: 11,
    meaning: "not only; of course; let alone",
    structure: "N + はもとより",
    explanation:
      "Formal equivalent of 〜はもちろん / 〜は言うまでもなく. Indicates that X is of course the case, and Y is additionally the case. Used in written/formal contexts to enumerate things that all apply.",
    formation:
      "N + はもとより (両親[りょうしん]はもとより / 英語[えいご]はもとより / 経費[けいひ]はもとより)",
    examples: [
      { jp: "彼[かれ]は英語[えいご]はもとより、フランス語[ご]も話[はな]せる。", en: "He can speak not only English but also French." },
      { jp: "両親[りょうしん]はもとより、親戚[しんせき]全員[ぜんいん]が反対[はんたい]した。", en: "Not only my parents but all my relatives opposed it." },
      { jp: "経費[けいひ]はもとより、時間[じかん]の制約[せいやく]もある。", en: "Not only the budget but also time is a constraint." }
    ],
    notes:
      "「〜はもちろん」「〜は言[い]うまでもなく」と同義[どうぎ]。改まった硬い表現で、書[か]き言葉中心。必[かなら]ず後[うし]ろに追加[ついか]の事項[じこう]が続[つづ]く。",
    related: ["〜はもちろん", "〜は言うまでもなく", "〜のみならず"]
  },

  {
    id: "gn2-24gn2-241",
    point: "〜ばこそ",
    reading: "〜ばこそ",
    level: "N2",
    category: "Cause/Reason",
    lesson: 12,
    meaning: "precisely because; exactly because",
    structure: "V-ば形 + こそ / I-adj-ければ + こそ / N + であれば + こそ / Na-adj + であれば + こそ",
    explanation:
      "Emphasizes the reason: 'precisely because' or 'exactly because'. Used to strongly affirm that the stated reason is the true or sole motivation. The main clause often expresses a strong resolution, gratitude, or effort.",
    formation:
      "V-ば + こそ (思[おも]えばこそ / 努力[どりょく]すればこそ)\nI-adj-ければ + こそ (好[す]きならばこそ)\nN + であれば + こそ (親[おや]であればこそ)\nNa-adj + であれば + こそ (元気[げんき]であればこそ)",
    examples: [
      { jp: "あなたのためを思[おも]えばこそ、厳[きび]しく言[い]うのだ。", en: "It is precisely because I think of you that I speak strictly." },
      { jp: "好[す]きであればこそ、続[つづ]けられるのだ。", en: "It is precisely because I like it that I can keep going." },
      { jp: "親[おや]であればこそ、子供[こども]の将来[しょうらい]を心配[しんぱい]する。", en: "It is precisely because I am a parent that I worry about my child's future." }
    ],
    notes:
      "理由[りゆう]を強調[きょうちょう]する。「〜だからこそ」と同じく、理由[りゆう]を一[ひと]つに絞[しば]るニュアンス。後件[こうけん]には強[つよ]い決意[けつい]・感謝[かんしゃ]・努力[どりょく]が来やすい。",
    related: ["〜からこそ", "〜だけに", "〜ばこそ"]
  },

  {
    id: "gn2-24gn2-242",
    point: "〜ばそれまでだ",
    reading: "〜ばそれまでだ",
    level: "N2",
    category: "Conditionals",
    lesson: 13,
    meaning: "once that happens, it's all over; if so, then it's the end",
    structure: "V-ば形 + それまでだ / I-adj-ければ + それまでだ / N + なら(ば) + それまでだ",
    explanation:
      "Indicates that if the stated condition occurs, everything is lost or finished; 'if that happens, then it's all over'. Used to emphasize that a particular condition would render further efforts meaningless.",
    formation:
      "V-ば + それまでだ (失敗[しっぱい]すればそれまでだ / 諦[あきら]めればそれまでだ)\nN + なら + それまでだ (彼[かれ]が来[こ]ないならそれまでだ)\nI-adj-ければ + それまでだ (高[たか]ければそれまでだ)",
    examples: [
      { jp: "どんなに努力[どりょく]しても、結果[けっか]が悪[わる]ければそれまでだ。", en: "No matter how hard you try, if the result is bad, it's all over." },
      { jp: "長年[ながねん]の夢[ゆめ]も、諦[あきら]めてしまえばそれまでだ。", en: "Even a long-held dream, once you give up, is over." },
      { jp: "体[からだ]が壊[こわ]れてしまえばそれまでだ。", en: "Once your body breaks down, it's all over." }
    ],
    notes:
      "条件[じょうけん]を「ば」形で示し、その条件[じょうけん]が成立[せいりつ]すればすべてが無[む]になるという「最終[さいしゅう]的[てき]な結末[けつまつ]」を表す。「〜が最後[さいご]」「〜たら終[お]わり」と近い。",
    related: ["〜が最後", "〜たら最後", "〜ばそれまでだ"]
  },

  {
    id: "gn2-24gn2-243",
    point: "〜ひとり〜のみならず",
    reading: "〜ひとり〜のみならず",
    level: "N2",
    category: "Addition",
    lesson: 14,
    meaning: "not only X but also; not just X but Y as well",
    structure: "ひとり + N + のみならず / ひとり + V普通形 + のみならず",
    explanation:
      "Emphasizes that something is not limited to the stated X, but extends to other things as well. Stronger and more formal than 〜だけでなく. Often used with abstract, far-reaching statements about society, problems, or influence.",
    formation:
      "ひとり + N + のみならず (ひとり日本[にほん]のみならず / ひとり経済[けいざい]のみならず)\nひとり + V普通形 + のみならず (ひとり増[ふ]えるのみならず)",
    examples: [
      { jp: "この問題[もんだい]は、ひとり日本[にほん]のみならず、世界中[せかいじゅう]に共通[きょうつう]する。", en: "This problem is not limited to Japan; it is common throughout the world." },
      { jp: "その政策[せいさく]の影響[えいきょう]は、ひとり経済[けいざい]のみならず、文化[ぶんか]にも及[およ]ぶ。", en: "The policy's impact extends not only to the economy but also to culture." },
      { jp: "彼[かれ]の業績[ぎょうせき]は、ひとり国内[こくない]のみならず、海外[かいがい]でも評価[ひょうか]されている。", en: "His achievements are recognized not only domestically but also abroad." }
    ],
    notes:
      "「ひとり」は「単[たん]に〜だけ」という意味の副詞[ふくし]的[てき]用法[ようほう]。単独[たんどく]の「〜のみならず」より強調[きょうちょう]的[てき]。書き言葉。",
    related: ["〜のみならず", "〜にとどまらず", "〜だけでなく"]
  },

  {
    id: "gn2-24gn2-244",
    point: "〜までもない",
    reading: "〜までもない",
    level: "N2",
    category: "Extent",
    lesson: 15,
    meaning: "no need to; unnecessary to; goes without saying",
    structure: "V辞書形 + までもない / V辞書形 + までもなく + ...",
    explanation:
      "Indicates that something is not necessary to do, or that something is self-evident and need not be done. Common with verbs like 言う, 確かめる, 調べる, 行く. Often appears in the fixed phrase 言うまでもない ('needless to say').",
    formation:
      "V辞書形 + までもない (言[い]うまでもない / 確[たし]かめるまでもない / 行[い]くまでもない)\nV辞書形 + までもなく + ... (言[い]うまでもなく、明白[めいはく]だ)",
    examples: [
      { jp: "言[い]うまでもなく、健康[けんこう]は何より大切[たいせつ]だ。", en: "It goes without saying that health is the most important thing." },
      { jp: "そんな簡単[かんたん]なことは調[しら]べるまでもない。", en: "Such a simple matter needs no investigation." },
      { jp: "わざわざ行[い]くまでもない、電話[でんわ]で済[す]ませよう。", en: "There's no need to go all the way there; let's settle it by phone." }
    ],
    notes:
      "よく使われる定型[ていけい]表現「言[い]うまでもない」。副詞[ふくし]的[てき]に「〜までもなく」も。「〜必要[ひつよう]はない」「〜には及[およ]ばない」と同義[どうぎ]。",
    related: ["〜には及ばない", "〜必要はない", "〜ことはない"]
  },

  {
    id: "gn2-24gn2-245",
    point: "〜もさることながら",
    reading: "〜もさることながら",
    level: "N2",
    category: "Comparison",
    lesson: 16,
    meaning: "A is of course one thing, but B is also; not only A, but B as well",
    structure: "N + もさることながら",
    explanation:
      "Used to acknowledge that A is significant or notable, while emphasizing that B is equally or more important. 'A is a given, but B is also notable'. Formal; common in reviews, evaluation, and balanced commentary.",
    formation:
      "N + もさることながら (才能[さいのう]もさることながら / 見[み]かけもさることながら / 味[あじ]もさることながら)",
    examples: [
      { jp: "彼[かれ]の才能[さいのう]もさることながら、努力[どりょく]が素晴[すば]らしい。", en: "His talent is one thing, but his effort is remarkable." },
      { jp: "この料理[りょうり]は味[あじ]もさることながら、見[み]た目[め]も美[うつく]しい。", en: "This dish's taste is one thing, but its appearance is also beautiful." },
      { jp: "親[おや]の支援[しえん]もさることながら、本人[ほんにん]のやる気[き]が大切[たいせつ]だ。", en: "Parental support matters, but the child's own motivation is crucial." }
    ],
    notes:
      "「さる」は「ある程度[ていど]の／なかなかの」という意味。前件[ぜんけん]を認[みと]めつつ、後件[こうけん]をより強調[きょうちょう]する構文[こうぶん]。「〜もそうだが、〜もまた」と同じ。",
    related: ["〜はもちろん", "〜だけでなく", "〜もさることながら"]
  },

  {
    id: "gn2-24gn2-246",
    point: "〜ものを",
    reading: "〜ものを",
    level: "N2",
    category: "Conditionals",
    lesson: 17,
    meaning: "should have done X, but didn't; if only X had been the case",
    structure: "V普通形 + ものを / V-た形 + ものを",
    explanation:
      "Indicates regret, reproach, or contrary-to-fact complaint: 'should have done X, but didn't' or 'if only X had been the case'. The main clause expresses what actually happened or a complaint. Formal, slightly literary.",
    formation:
      "V普通形 + ものを (言[い]えばいいものを / 行[い]けばいいものを)\nV-た形 + ものを (言[い]ったものを / 行[い]ったものを)",
    examples: [
      { jp: "本当[ほんとう]のことを言[い]えばいいものを、嘘[うそ]をついてしまった。", en: "He should have just told the truth, but he lied." },
      { jp: "早[はや]く準備[じゅんび]すればいいものを、ぎりぎりまで怠[なま]けていた。", en: "She should have prepared earlier, but slacked off until the last minute." },
      { jp: "一言[ひとこと]相談[そうだん]してくれればいいものを。", en: "If only he had just consulted me for a moment..." }
    ],
    notes:
      "非難[ひなん]や後悔[こうかい]を含[ふく]む反事実[はんじじつ]的[てき]表現。「〜ばよかったのに」「〜べきだったのに」の改まった言[い]い方。書き言葉。",
    related: ["〜ばよかったのに", "〜べきだったのに", "〜のに"]
  },

  {
    id: "gn2-24gn2-247",
    point: "〜や否や",
    reading: "〜やいなや",
    level: "N2",
    category: "Time/Sequence",
    lesson: 18,
    meaning: "as soon as; the moment; no sooner than",
    structure: "V辞書形 + や否や",
    explanation:
      "Indicates that something happens immediately after another action. 'As soon as X happened, Y happened'. Written-style, formal; common in narration, news, and literary writing. The second action is often immediate or surprising.",
    formation:
      "V辞書形 + や否や (起[お]きるや否や / 始[はじ]まるや否や / 鳴[な]るや否や)",
    examples: [
      { jp: "ベルが鳴[な]るや否[いな]や、子供[こども]たちは教室[きょうしつ]を飛[と]び出[だ]した。", en: "As soon as the bell rang, the children flew out of the classroom." },
      { jp: "彼[かれ]は家[いえ]に帰[かえ]るや否[いな]や、パソコンに向[む]かった。", en: "As soon as he got home, he turned to his computer." },
      { jp: "試合[しあい]が始[はじ]まるや否[いな]や、大[おお]きな歓声[かんせい]が上[あ]がった。", en: "As soon as the match started, a loud cheer went up." }
    ],
    notes:
      "「〜たとたん(に)」「〜と同時[どうじ]に」より硬い書き言葉。必[かなら]ず動詞[どうし]辞書形[じしょけい]に続[つづ]く。後件[こうけん]は意図[いと]的[てき]な動作[どうさ]（意志[いし]動詞[どうし]）でも無意志[むいし]の出来事[できごと]でも可[か]。",
    related: ["〜が早いか", "〜たとたん(に)", "〜そばから"]
  },

  {
    id: "gn2-24gn2-248",
    point: "〜んばかりに",
    reading: "〜んばかりに",
    level: "N2",
    category: "Manner",
    lesson: 19,
    meaning: "almost as if; about to; on the verge of — as if to",
    structure: "V-ない形(る抜き) + んばかりに / V-ない形 + んばかりの + N / V-ない形 + んばかりだ",
    explanation:
      "Indicates that someone acts in a way that suggests they are about to do X, or that a situation appears as if X is happening. 'Almost as if...; on the verge of...'. Used for dramatic or exaggerated behavior and situations.",
    formation:
      "V-ない形(る抜き) + んばかりに (泣[な]かんばかりに / 飛[と]ばんばかりに / 割[わ]れんばかりに)\nV-ない形 + んばかりの + N (割[わ]れんばかりの拍手[はくしゅ])\nV-ない形 + んばかりだ (今[いま]にも崩[くず]れんばかりだ)",
    examples: [
      { jp: "彼[かれ]は今[いま]にも泣[な]かんばかりの顔[かお]で訴[うった]えた。", en: "He pleaded with a face that looked about to cry." },
      { jp: "会場[かいじょう]は割[わ]れんばかりの拍手[はくしゅ]に包[つつ]まれた。", en: "The hall was wrapped in thunderous applause, as if to split it." },
      { jp: "彼女[かのじょ]は飛[と]び上[あ]がらんばかりの喜[よろこ]びようだ。", en: "She is so overjoyed she looks about to jump up." }
    ],
    notes:
      "動詞[どうし]の「ない形」から「る」を取[と]って「ん」を付[つ]ける。派手[はで]・演劇[えんげき]的[てき]な描写[びょうしゃ]に向[む]く。「〜とばかりに」と近いが、より誇張[こちょう]的[てき]。",
    related: ["〜とばかりに", "〜んばかりの", "〜とみえる"]
  },

  {
    id: "gn2-24gn2-249",
    point: "〜んがため",
    reading: "〜んがため",
    level: "N2",
    category: "Purpose",
    lesson: 20,
    meaning: "for the purpose of; in order to — with strong determination",
    structure: "V-ない形(る抜き) + んがため(に) / V-ない形 + んがための + N",
    explanation:
      "Formal/literary equivalent of 〜ために. Indicates purpose with a tone of strong resolve or sacrifice. 'In order to...; for the purpose of...'. Often used in serious or dramatic contexts involving struggle or effort.",
    formation:
      "V-ない形(る抜き) + んがために (成[な]らんがために / 生[い]きんがために / 勝[か]たんがために)\nV-ない形 + んがための + N (勝[か]たんがための策略[さりゃく])",
    examples: [
      { jp: "彼[かれ]は成[な]らんがために、あらゆる手段[しゅだん]を尽[つ]くした。", en: "In order to succeed, he exhausted every means available." },
      { jp: "生[い]きんがために、必死[ひっし]で働[はたら]いた。", en: "In order to live, he worked desperately." },
      { jp: "勝[か]たんがための厳[きび]しい訓練[くんれん]が続[つづ]いた。", en: "Severe training aimed at winning continued." }
    ],
    notes:
      "動詞[どうし]の「ない形」から「る」を取[と]って「んがため」を付[つ]ける。硬く決意[けつい]的[てき]な表現。現代文[げんだいぶん]でも物語[ものがたり]・伝記[でんき]・論説[ろんせつ]などで使われる。",
    related: ["〜ために", "〜べく", "〜んがため"]
  },

  {
    id: "gn2-250",
    point: "〜がてら",
    reading: "〜がてら",
    level: "N2",
    category: "Time/Sequence",
    lesson: 21,
    meaning: "while doing; on the occasion of (doing two things at once)",
    structure: "V-ます形 + がてら / N + がてら",
    explanation:
      "Indicates doing two actions together: the main action (before がてら) is used as an opportunity to do a secondary action (in the main clause). 'While doing X (also doing Y)'. Slightly more formal than 〜ついでに.",
    formation:
      "V-ます形 + がてら (散歩[さんぽ]しがてら / 買[か]い物[もの]しがてら / 働[はたら]きがてら)\nN + がてら (散歩[さんぽ]がてら / 旅行[りょこう]がてら)",
    examples: [
      { jp: "散歩[さんぽ]しがてら、本屋[ほんや]に寄[よ]った。", en: "While taking a walk, I dropped by a bookstore." },
      { jp: "買[か]い物[もの]がてら、郵便局[ゆうびんきょく]に行[い]く。", en: "While shopping, I'll go to the post office." },
      { jp: "出張[しゅっちょう]がてら、旧友[きゅうゆう]を訪[たず]ねる。", en: "On the occasion of my business trip, I'll visit an old friend." }
    ],
    notes:
      "「〜ついでに」と同義[どうぎ]だが、やや改まった硬い表現。動詞[どうし]のます形[けい]・動作名詞[どうさめいし]に付[つ]く。前件[ぜんけん]が主[おも]目的[もくてき]、後件[こうけん]が副次[ふくじ]。",
    related: ["〜ついでに", "〜かたがた", "〜ながら"]
  },

  {
    id: "gn2-251",
    point: "〜が最後",
    reading: "〜がさいご",
    level: "N2",
    category: "Conditionals",
    lesson: 22,
    meaning: "once... happens, it's all over; once... there is no going back",
    structure: "V-た形 + が最後",
    explanation:
      "Indicates that once a particular action has occurred, an irreversible consequence follows. 'Once X happens, Y inevitably follows (and there's no going back)'. Used for warnings or to emphasize inevitability, often with a negative outcome.",
    formation:
      "V-た形 + が最後 (言[い]ったが最後 / 始[はじ]めたが最後 / 飲[の]んだが最後)",
    examples: [
      { jp: "彼[かれ]に秘密[ひみつ]を言[い]ったが最後[さいご]、会社中[かいしゃじゅう]に広[ひろ]まるだろう。", en: "Once you tell him the secret, it will likely spread throughout the company." },
      { jp: "一度[いちど]お酒[さけ]を飲[の]んだが最後[さいご]、止[と]まらなくなる。", en: "Once he starts drinking, he cannot stop." },
      { jp: "この仕事[しごと]を始[はじ]めたが最後[さいご]、休[やす]む暇[ひま]はないと思[おも]った方[ほう]がいい。", en: "Once you start this job, you had better assume there is no time to rest." }
    ],
    notes:
      "必[かなら]ず動詞[どうし]の「た形[けい]」に付[つ]く。不可逆[ふかぎゃく]的[てき]な結果[けっか]を強調[きょうちょう]。「〜たら最後[さいご]」「〜ばそれまでだ」と近い。後件[こうけん]は通[つう]常[じょう]否定的[ひていてき]。",
    related: ["〜たら最後", "〜ばそれまでだ", "〜が最後だ"]
  },

  {
    id: "gn2-252",
    point: "〜そばから",
    reading: "〜そばから",
    level: "N2",
    category: "Time/Sequence",
    lesson: 23,
    meaning: "as soon as; right after — repeatedly, unable to keep up",
    structure: "V辞書形 + そばから / V-た形 + そばから",
    explanation:
      "Indicates that as soon as one action is completed, another happens — often repeatedly, with a sense of futility or inability to keep up. 'No sooner... than...; as fast as X is done, Y undoes it'.",
    formation:
      "V辞書形 + そばから (聞[き]くそばから / 直[なお]すそばから / 片付[かたづ]けるそばから)\nV-た形 + そばから (聞[き]いたそばから / 直[なお]したそばから)",
    examples: [
      { jp: "覚[おぼ]えるそばから忘[わす]れてしまう。", en: "As soon as I memorize it, I forget it." },
      { jp: "直[なお]したそばからまた壊[こわ]れる。", en: "As soon as it's fixed, it breaks again." },
      { jp: "片付[かたづ]けるそばから子供[こども]が散[ち]らかす。", en: "As soon as I tidy up, the children make a mess." }
    ],
    notes:
      "反復[はんぷく]的[てき]で「追[お]いつかない」「徒労[とろう]に終[お]わる」の否定的[ひていてき]なニュアンス。「〜たとたんに」は単発[たんぱつ]、本項は反復[はんぷく]。書き言葉。",
    related: ["〜たとたん(に)", "〜や否や", "〜が早いか"]
  },

  {
    id: "gn2-253",
    point: "〜たりとも〜ない",
    reading: "〜たりとも〜ない",
    level: "N2",
    category: "Extent",
    lesson: 24,
    meaning: "not even one; not a single (X is absolutely not allowed)",
    structure: "数量N + たりとも + 否定",
    explanation:
      "Emphasizes that not even a single unit of something is allowed, possible, or present. 'Not even one...; not a single...'. Strong, formal; common in negative commands or emphatic denials.",
    formation:
      "数量N + たりとも + 否定 (一日[いちにち]たりとも / 一人[ひとり]たりとも / 一秒[いちびょう]たりとも / 一円[いちえん]たりとも)",
    examples: [
      { jp: "受験[じゅけん]前[まえ]は一日[いちにち]たりとも休[やす]めない。", en: "Before the exam, I cannot rest for even one day." },
      { jp: "戦場[せんじょう]では一秒[いちびょう]たりとも気[き]を抜[ぬ]いてはいけない。", en: "On the battlefield, you must not let your guard down for even a second." },
      { jp: "今回[こんかい]の会議[かいぎ]は一人[ひとり]たりとも欠[か]かせない。", en: "Not a single person can be absent from this meeting." }
    ],
    notes:
      "必[かなら]ず後[うし]ろに否定[ひてい]が来る。「一[いち]〜」など数量[すうりょう]を表す名詞[めいし]と結[むす]びつきやすい。強い強調[きょうちょう]の硬い表現。「〜すら〜ない」と近い。",
    related: ["〜すら〜ない", "〜さえ〜ない", "〜も〜ない"]
  },

  {
    id: "gn2-254",
    point: "〜てからというもの",
    reading: "〜てからというもの",
    level: "N2",
    category: "Time/Sequence",
    lesson: 25,
    meaning: "ever since; since X happened (and the change has continued)",
    structure: "V-て形 + からというもの",
    explanation:
      "Emphasizes that since the time of X, a particular state has continued. 'Ever since X happened, Y has been the case'. Highlights a significant and continuing change brought about by the event.",
    formation:
      "V-て + からというもの (結婚[けっこん]してからというもの / 転職[てんしょく]してからというもの / 入[はい]ってからというもの)",
    examples: [
      { jp: "彼[かれ]と結婚[けっこん]してからというもの、生活[せいかつ]が一変[いっぺん]した。", en: "Ever since I married him, my life has completely changed." },
      { jp: "スマホを買[か]ってからというもの、外[そと]で遊[あそ]ばなくなった。", en: "Ever since I bought a smartphone, I have stopped playing outside." },
      { jp: "転職[てんしょく]してからというもの、毎日[まいにち]が充実[じゅうじつ]している。", en: "Ever since changing jobs, every day feels fulfilling." }
    ],
    notes:
      "「〜てから」より強調[きょうちょう]的[てき]で、変化[へんか]が続[つづ]いていることを示す。後件[こうけん]には「〜ようになった」「〜ている」など状態[じょうたい]の継続[けいぞく]が来る。",
    related: ["〜てから", "〜て以来", "〜以来"]
  },

  {
    id: "gn2-255",
    point: "〜てやまない",
    reading: "〜てやまない",
    level: "N2",
    category: "Manner",
    lesson: 26,
    meaning: "doing X incessantly; sincerely; from the bottom of one's heart",
    structure: "V-て形 + やまない",
    explanation:
      "Indicates that an emotion or feeling continues without ceasing. Used to express sincere, ongoing feelings such as wishing, hoping, expecting, or loving. Formal; common in letters, speeches, and dedications.",
    formation:
      "V-て + やまない (願[ねが]ってやまない / 愛[あい]してやまない / 期待[きたい]してやまない / 祈[いの]ってやまない)",
    examples: [
      { jp: "私[わたし]はあなたの成功[せいこう]を願[ねが]ってやまない。", en: "I sincerely wish for your success, without cease." },
      { jp: "彼[かれ]は故郷[こきょう]を愛[あい]してやまない。", en: "He loves his hometown from the bottom of his heart." },
      { jp: "皆様[みなさま]のご活躍[かつやく]を期待[きたい]してやまない。", en: "We earnestly look forward to everyone's continued success." }
    ],
    notes:
      "継続[けいぞく]的[てき]な感情[かんじょう]を表す動詞[どうし]（願[ねが]う・愛[あい]する・期待[きたい]する・祈[いの]る・慕[した]う）に限[かぎ]る。動作[どうさ]動詞[どうし]（食[た]べる・行[い]く）には不可[ふか]。",
    related: ["〜てならない", "〜てたまらない", "〜ずにはいられない"]
  },

  {
    id: "gn2-256",
    point: "〜と相まって",
    reading: "〜とあいまって",
    level: "N2",
    category: "Cause/Reason",
    lesson: 27,
    meaning: "in combination with; coupled with — producing a synergistic result",
    structure: "N + と(が)相まって / N + と相まって + ...",
    explanation:
      "Indicates that two factors combine to produce a particular (often impressive or notable) result. 'X, coupled with Y, produces Z'. Formal; common in written analysis, reviews, and descriptions of synergy.",
    formation:
      "N + と + 相まって (才能[さいのう]と努力[どりょく]と相まって / 景色[けしき]と好天[こうてん]と相まって)\nN + が + 相まって (好天[こうてん]とが相まって)\nN + と + あいまって + ... (才能[さいのう]と運[うん]と相[あい]まって、成功[せいこう]した)",
    examples: [
      { jp: "才能[さいのう]と努力[どりょく]と相[あい]まって、彼[かれ]は一流[いちりゅう]の選手[せんしゅ]になった。", en: "Talent combined with effort made him a first-rate athlete." },
      { jp: "景色[けしき]の美[うつく]しさと好天[こうてん]とが相[あい]まって、最高[さいこう]の旅行[りょこう]となった。", en: "The beauty of the scenery coupled with fine weather made it the best trip." },
      { jp: "経験[けいけん]と直感[ちょっかん]が相[あい]まって、名案[めいあん]が浮[う]かんだ。", en: "Experience combined with intuition brought a great idea to mind." }
    ],
    notes:
      "二[ふた]つの要素[ようそ]が相乗効果[そうじょうこうか]を生[しょう]じる場面で使う。「〜とともに」「〜に加[くわ]えて」と近いが、相乗[そうじょう]的[てき]な結果[けっか]を強調[きょうちょう]する点[てん]が特徴[とくちょう]。",
    related: ["〜とともに", "〜に加えて", "〜とあいまって"]
  },

  {
    id: "gn2-257",
    point: "〜ところを",
    reading: "〜ところを",
    level: "N2",
    category: "Time/Sequence",
    lesson: 28,
    meaning: "when you were doing; just as; while — at the moment of",
    structure: "V辞書形 + ところを / V-ている + ところを / V-た形 + ところを / Na-adj + な + ところを / N + の + ところを",
    explanation:
      "Indicates the time or situation during which something happens, especially when apologizing, thanking, or interrupting someone. 'When you were doing X; just as you were X'. Formal, polite; common in apologies and greetings.",
    formation:
      "V辞書形 + ところを (お休[やす]みのところを / お考[かんが]えのところを)\nV-ている + ところを (お読[よ]みのところを)\nV-た形 + ところを (お帰[かえ]りのところを)\nN + の + ところを (お忙[いそが]しいのところを / ご多忙[たぼう]のところを)",
    examples: [
      { jp: "お忙[いそが]しいところを、お邪魔[じゃま]して申[もう]し訳[わけ]ありません。", en: "I am sorry to intrude when you are busy." },
      { jp: "お休[やす]みのところを、お呼[よ]び立[た]てしてすみません。", en: "I am sorry to call you away while you were resting." },
      { jp: "逃[に]げようとしているところを、警察[けいさつ]に捕[つか]まった。", en: "He was caught by the police just as he was trying to flee." }
    ],
    notes:
      "謝罪[しゃざい]や依頼[いらい]の定型[ていけい]表現。「お／ご〜のところを」の形[かたち]が多[おお]い。進行中[しんこうちゅう]・特定[とくてい]の状況[じょうきょう]を「ところ」として捉[とら]える。",
    related: ["〜際に", "〜ところに", "〜時に"]
  },

  {
    id: "gn2-258",
    point: "〜に至るまで",
    reading: "〜にいたるまで",
    level: "N2",
    category: "Extent",
    lesson: 29,
    meaning: "up to; as far as; even extending to",
    structure: "N + に至るまで / V辞書形 + に至るまで",
    explanation:
      "Indicates that something extends up to a certain point, often emphasizing the breadth or scope of inclusion. 'Up to...; all the way to...; even extending to...'. Formal; common in writing to emphasize scope.",
    formation:
      "N + に至るまで (子供[こども]に至るまで / 末端[まったん]に至るまで / 山頂[さんちょう]に至るまで)\nV辞書形 + に至るまで (悪化[あっか]するに至るまで / 回復[かいふく]するに至るまで)",
    examples: [
      { jp: "この伝統[でんとう]は子供[こども]に至[いた]るまで、広[ひろ]く知[し]られている。", en: "This tradition is widely known, even among children." },
      { jp: "社長[しゃちょう]から末端[まったん]の社員[しゃいん]に至[いた]るまで、全員[ぜんいん]が参加[さんか]した。", en: "From the president down to frontline employees, everyone participated." },
      { jp: "彼[かれ]の病状[びょうじょう]は悪化[あっか]するに至[いた]った。", en: "His condition reached the point of worsening." }
    ],
    notes:
      "範囲[はんい]や程度[ていど]の広[ひろ]がり・到達点[とうたつてん]を強調[きょうちょう]。「AからBに至[いた]るまで」の形で範囲[はんい]を示すことも多[おお]い。「〜まで」の硬い強調[きょうちょう]形。",
    related: ["〜に至って", "〜に至り", "〜まで"]
  },

  {
    id: "gn2-259",
    point: "〜に限ったことではない",
    reading: "〜にかぎったことではない",
    level: "N2",
    category: "Extent",
    lesson: 30,
    meaning: "not limited to; not the only one — applies more broadly",
    structure: "N + に限ったことではない",
    explanation:
      "Indicates that something is not unique to the stated noun; it applies more broadly. 'It's not just X; it's not limited to X'. Used to broaden the scope of a statement.",
    formation:
      "N + に限ったことではない (この会社[かいしゃ]に限ったことではない / 若者[わかもの]に限ったことではない / 都市[とし]に限ったことではない)",
    examples: [
      { jp: "この問題[もんだい]はこの学校[がっこう]に限[かぎ]ったことではない。", en: "This problem is not limited to this school." },
      { jp: "仕事[しごと]のストレスは若者[わかもの]に限[かぎ]ったことではない。", en: "Work stress is not something limited to young people." },
      { jp: "物価[ぶっか]の上昇[じょうしょう]は都市[とし]に限[かぎ]ったことではない。", en: "Rising prices are not limited to cities." }
    ],
    notes:
      "範囲[はんい]を広[ひろ]げる表現。「〜だけではない」「〜に限[かぎ]らない」と同義[どうぎ]。ニュースや分析[ぶんせき]文[ぶん]で、一般化[いっぱんか]する際[さい]によく使われる。",
    related: ["〜に限らず", "〜だけではない", "〜にとどまらず"]
  }
];
