import type { GrammarData } from "@/lib/types";

// JLPT N1 grammar — Shinzaizen Master style, chunk E.
// Furigana notation: kanji readings inline as 漢字[かんじ].
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// Each contiguous kanji run is given one bracket with its full reading.
// Total: 14 formal / written-style points.
// IDs: gn1-201 .. gn1-214.
// All points are NEW — distinct from chunks A–D.

export const grammarN1E: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // EXTENT — formal written expressions
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-201",
    point: "〜の極まりない",
    reading: "〜のきわまりない",
    level: "N1",
    category: "Extent",
    lesson: 1,
    meaning: "extremely, beyond bounds (formal written)",
    structure: "N / Na-adj stem + の極まりない",
    explanation:
      "Expresses that something has reached an extreme degree and cannot possibly be exceeded. A formal, written-style expression with a strongly negative or critical tone, typically used to evaluate conduct, attitudes, or situations negatively.",
    formation:
      "N / Na-adj stem + の極まりない\n例: 横暴[おうぼう]の極[きわ]まりない / 失礼[しつれい]の極[きわ]まりない / 危険[きけん]の極[きわ]まりない",
    examples: [
      { jp: "彼[かれ]の横暴[おうぼう]の極[きわ]まりない態度[たいど]に、誰[だれ]もが呆[あき]れた。", en: "Everyone was dumbfounded by his extremely tyrannical attitude." },
      { jp: "あのような発言[はつげん]は失礼[しつれい]の極[きわ]まりないと言[い]わざるを得[え]ない。", en: "I have to say that such a remark is beyond rude." }
    ],
    notes:
      "Very formal and literary. Almost always carries a negative, critical nuance. The variant 〜極まりない (without の) is also common after Na-adj stems. Closely related to 〜の至り (positive extreme) and 〜に極まる (verb form).",
    related: ["〜の至り", "〜に極まる"]
  },

  {
    id: "gn1-202",
    point: "〜の至り",
    reading: "〜のいたり",
    level: "N1",
    category: "Extent",
    lesson: 2,
    meaning: "to the extreme, to the utmost (formal, often positive)",
    structure: "N + の至り",
    explanation:
      "Expresses that something has reached the utmost degree of a given (usually positive) state. Used in formal, polite speech to express deep gratitude, honor, joy, or — in negative idioms — extreme embarrassment or chagrin.",
    formation:
      "N + の至り\n例: 光栄[こうえい]の至[いた]り / 感謝[かんしゃ]の至[いた]り / 恐縮[きょうしゅく]の至[いた]り",
    examples: [
      { jp: "このような栄誉[えいよ]に与[あず]かれますことは、光栄[こうえい]の至[いた]りでございます。", en: "It is the utmost honor to be granted such a distinction." },
      { jp: "お褒[ほ]めの言葉[ことば]をいただき、恐縮[きょうしゅく]の至[いた]りに存[ぞん]じます。", en: "I am utterly overwhelmed with gratitude and humility at your kind words of praise." }
    ],
    notes:
      "Formal and literary; commonly appears in set phrases such as 光栄の至り, 感謝の至り, 恐縮の至り. Whereas 〜の極まりない is negative, 〜の至り is typically positive or self-deprecating. Often paired with でございます / に存じます.",
    related: ["〜の極まりない", "〜に足る"]
  },

  // ───────────────────────────────────────────────────────────
  // EMPHASIS / ADDITION
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-203",
    point: "〜もさることながら",
    reading: "〜もさることながら",
    level: "N1",
    category: "Emphasis",
    lesson: 3,
    meaning: "not only... but also; A is considerable, but B is even more so",
    structure: "N + もさることながら",
    explanation:
      "Concedes that the first item is significant or noteworthy, then asserts that what follows is even more so. A formal way of saying 'A is true/important, but B is the more important point.' Used to draw attention to the latter item.",
    formation:
      "N + もさることながら\n例: 才能[さいのう]もさることながら / 規模[きぼ]もさることながら / 実績[じっせき]もさることながら",
    examples: [
      { jp: "彼[かれ]の才能[さいのう]もさることながら、その努力[どりょく]が際立[きわだ]っている。", en: "His talent is impressive, but it is his effort that truly stands out." },
      { jp: "この施設[しせつ]はデザインの美[うつく]しさもさることながら、機能性[きのうせい]の高[たか]さが秀逸[しゅういつ]だ。", en: "The beauty of the design is considerable, but it is the high functionality of this facility that is truly outstanding." }
    ],
    notes:
      "Formal. The noun before もさることながら is the lesser / conceded item; what follows is the focus. Often paired with 際立つ, 目立つ, 優れる. Closely related to 〜はもちろん and 〜にとどまらず.",
    related: ["〜はもちろん", "〜にとどまらず"]
  },

  // ───────────────────────────────────────────────────────────
  // POSSIBILITY — double negative
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-204",
    point: "〜ないものでもない",
    reading: "〜ないものでもない",
    level: "N1",
    category: "Possibility",
    lesson: 4,
    meaning: "it is not that... not; it is not impossible to; one might possibly...",
    structure: "V-ない + ものでもない",
    explanation:
      "A double-negative construction indicating that something is not impossible — there is some possibility of doing/being it, though usually with reluctance or reservation. Used to soften an assertion and concede a possibility rather than state it outright.",
    formation:
      "V-ない + ものでもない\n例: 行[い]かないものでもない / 引[ひ]き受[う]けないものでもない / 解[と]けないものでもない",
    examples: [
      { jp: "条件[じょうけん]次第[しだい]では、引[ひ]き受[う]けないものでもない。", en: "Depending on the conditions, it's not that I wouldn't take it on." },
      { jp: "かなり難[むずか]しいが、時間[じかん]をかければ解[と]けないものでもない。", en: "It's quite difficult, but given enough time it isn't impossible to solve." }
    ],
    notes:
      "Hedging, often used to avoid outright refusal or to leave room for negotiation. More indirect than 〜可能性がある. Closely related to 〜ないこともない and 〜ないわけではない.",
    related: ["〜ないこともない", "〜ないわけではない"]
  },

  // ───────────────────────────────────────────────────────────
  // NECESSITY / INEVITABILITY
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-205",
    point: "〜ずにはすまない",
    reading: "〜ずにはすまない",
    level: "N1",
    category: "Necessity",
    lesson: 5,
    meaning: "cannot get away without doing; cannot help but do (social / moral obligation)",
    structure: "V-ない（ず） + にはすまない",
    explanation:
      "Indicates that, given the circumstances, one cannot settle matters without taking a certain action — social convention, morality, or external pressure compels it. Carries a sense of 'it won't do unless one does X.'",
    formation:
      "V-ない stem (replace ない with ず) + にはすまない\n例: 謝[あやま]らずにはすまない / 取[と]らずにはすまない / 返[かえ]さずにはすまない",
    examples: [
      { jp: "自分[じぶん]の過[あやま]ちなら、謝[あやま]らずにはすまないだろう。", en: "If it is one's own mistake, one cannot get away without apologizing." },
      { jp: "重大[じゅうだい]なミスを犯[おか]した以上[いじょう]、責任[せきにん]を取[と]らずにはすまない。", en: "Having committed such a serious mistake, he cannot get away without taking responsibility." }
    ],
    notes:
      "Formal and slightly literary. Often implies social or moral duty rather than physical impossibility. すまない here is 済む（すむ）— 'to be settled / OK'. Closely related to 〜ずにはおかない (stronger — agent actively insists) and 〜ないわけにはいかない.",
    related: ["〜ずにはおかない", "〜ないわけにはいかない"]
  },

  {
    id: "gn1-206",
    point: "〜ずにはおかない",
    reading: "〜ずにはおかない",
    level: "N1",
    category: "Necessity",
    lesson: 6,
    meaning: "will definitely do; cannot fail to do (strong volition / inevitability)",
    structure: "V-ない（ず） + にはおかない",
    explanation:
      "Expresses the speaker's (or a third party's) strong volition or the inevitability that a certain action will be performed — 'one will not let the matter rest without doing X.' Stronger and more agentive than 〜ずにはすまない, often implying emotional drive or unavoidable consequence.",
    formation:
      "V-ない stem (replace ない with ず) + にはおかない\n例: 怒[いか]らずにはおかない / 抗議[こうぎ]せずにはおかない / 訴[うった]えずにはおかない",
    examples: [
      { jp: "あれほど失礼[しつれい]な言葉[ことば]を吐[は]かれたら、怒[いか]らずにはおかないだろう。", en: "Spoken to with such rudeness, one would certainly not let it pass without getting angry." },
      { jp: "その映画[えいが]は観客[かんきゃく]を深[ふか]く感動[かんどう]させずにはおかない。", en: "That film cannot fail to move its audience deeply." }
    ],
    notes:
      "Formal / written-style. The subject is usually an agent (person or powerful cause), not a passive experiencer. おかない = 置く（おく）— 'will not leave the matter at rest without...'. Distinct from 〜ずにはすまない, which frames the action as socially/morally unavoidable.",
    related: ["〜ずにはすまない", "〜ないではおかない"]
  },

  // ───────────────────────────────────────────────────────────
  // CONDITIONAL — status / scale
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-207",
    point: "〜ともなると",
    reading: "〜ともなると",
    level: "N1",
    category: "Conditional",
    lesson: 7,
    meaning: "when it comes to...; once it reaches the level/status of...",
    structure: "N + ともなると / ともなれば",
    explanation:
      "Indicates that, once a certain level, status, season, or scale is reached, the situation naturally takes on a different character — one with heightened expectations, responsibility, or scale. Used to highlight a qualitative change that comes with reaching a threshold.",
    formation:
      "N + ともなると / ともなれば\n例: 春[はる]ともなると / 一流[いちりゅう]ともなると / 大企業[だいきぎょう]ともなれば",
    examples: [
      { jp: "春[はる]ともなると、町中[まちじゅう]に桜[さくら]の花[はな]が咲[さ]き乱[みだ]れる。", en: "Once spring arrives, cherry blossoms bloom in profusion all over the town." },
      { jp: "一流選手[いちりゅうせんしゅ]ともなると、練習[れんしゅう]の量[りょう]も質[しつ]も全[まった]く違[ちが]う。", en: "When it comes to top-tier athletes, both the quantity and quality of their training are entirely different." }
    ],
    notes:
      "The noun is typically a season, time, status, or scale. ともなれば is somewhat more hypothetical than ともなると. Related to 〜ともなれば and 〜となれば; contrast with 〜にしては (judging from a standard).",
    related: ["〜となれば", "〜にしては"]
  },

  // ───────────────────────────────────────────────────────────
  // UNIQUENESS / CHARACTERISTIC
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-208",
    point: "〜ならでは",
    reading: "〜ならでは",
    level: "N1",
    category: "Uniqueness",
    lesson: 8,
    meaning: "unique to; characteristic of; possible only with...",
    structure: "N + ならでは（の / だ / である）",
    explanation:
      "Expresses that a quality, product, or behavior is something that could only come from that particular person, place, or organization — it is uniquely theirs. Used to praise distinctive craftsmanship, regional specialties, or inimitable style.",
    formation:
      "N + ならでは + の + N / ならでは + だ\n例: 京都[きょうと]ならではの / 当店[とうてん]ならではの / あの作家[さっか]ならではの",
    examples: [
      { jp: "薄[うす]暗[ぐら]い路地[ろじ]に灯[あか]る提灯[ちょうちん]——これこそ京都[きょうと]ならではの景色[けしき]だ。", en: "Paper lanterns glowing in dim alleys — a scene unique to Kyoto." },
      { jp: "地元[じもと]の食材[しょくざい]を生[い]かした、当店[とうてん]ならではの味[あじ]わいをお楽[たの]しみください。", en: "Please enjoy a flavor distinctive to our restaurant, brought out by our use of local ingredients." }
    ],
    notes:
      "Praising tone; emphasizes singularity and craftsmanship. Frequently used in advertising, travel writing, and reviews. The full form 〜ならではの〜だ is most common; 〜ならでは occurs in compliments like 「さすがプロの仕事、君ならではだ」.",
    related: ["〜特有", "〜しかない"]
  },

  // ───────────────────────────────────────────────────────────
  // APPEARANCE / MANNER — as if about to
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-209",
    point: "〜んばかりに",
    reading: "〜んばかりに",
    level: "N1",
    category: "Appearance",
    lesson: 9,
    meaning: "as if about to...; almost on the verge of... (vivid description of manner)",
    structure: "V-意向形 + ん + ばかりに / V-ない + ん + ばかりに",
    explanation:
      "Describes a manner or appearance so intense that the subject seems just about to perform the action — though they do not actually do so. Vividly paints a scene through exaggerated near-action; used in narrative and descriptive writing.",
    formation:
      "V-意向形 + ん + ばかりに\n例: 泣[な]き出[だ]さんばかりに / 飛[と]び上[あ]がらんばかりに / 言[い]わんばかりに",
    examples: [
      { jp: "迷子[まいご]は泣[な]き出[だ]さんばかりに母[はは]の腕[うで]にしがみついた。", en: "As if about to burst into tears, the lost child clung to his mother's arm." },
      { jp: "合格[ごうかく]を知[し]らされ、彼[かれ]は飛[と]び上[あ]がらんばかりの喜[よろこ]びようだった。", en: "Told he had passed, he showed a joy as if he were about to leap into the air." }
    ],
    notes:
      "Formal / literary. The ん is the classical negative/volitional ending attached to the意向形 (V-ou/you form minus the final う). Distinguish from 〜ばかり (limiting/just), 〜とばかりに (as if to say). Often appears as 〜んばかりの + N or 〜んばかりだ at sentence end.",
    related: ["〜とばかりに", "〜んばかりの"]
  },

  // ───────────────────────────────────────────────────────────
  // ROLE / OBLIGATION — formal
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-210",
    point: "〜たるもの",
    reading: "〜たるもの",
    level: "N1",
    category: "Role",
    lesson: 10,
    meaning: "as a...; one who holds the role of... (formal, expected conduct)",
    structure: "N (role / profession) + たるもの",
    explanation:
      "Used to set a high standard of conduct for someone who holds a particular role, status, or profession: 'as a ___, one ought to ___.' Formal and somewhat lofty, often invoking professional duty, dignity, or moral responsibility.",
    formation:
      "N (role/profession) + たるもの\n例: 教師[きょうし]たるもの / 医者[いしゃ]たるもの / 公務員[こうむいん]たるもの / リーダーたるもの",
    examples: [
      { jp: "教師[きょうし]たる者[もの]、常に生徒[せいと]の手本[てほん]たるべきだ。", en: "As a teacher, one ought always to serve as a model for one's students." },
      { jp: "医者[いしゃ]たるもの、患者[かんじゃ]の命[いのち]を何[なに]より第一[だいいち]に考[かんが]えなければならない。", en: "As a physician, one must consider the patient's life above all else." }
    ],
    notes:
      "Very formal; emphasizes duty and dignity of a role. Frequently followed by べきだ, なければならない, べし. たる is the literary copula (attributive form of たり). Variants: 〜たる者, 〜たる身. Common with roles like 教師, 医者, 公務員, 親, リーダー.",
    related: ["〜たる身", "〜べき"]
  },

  // ───────────────────────────────────────────────────────────
  // EXTENT — formal written verb form
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-211",
    point: "〜に極まり",
    reading: "〜にきわまり",
    level: "N1",
    category: "Extent",
    lesson: 11,
    meaning: "extremely, reaches the extreme of... (formal written)",
    structure: "N + に極まり + だ / そうだ / ない",
    explanation:
      "A formal written expression meaning that something has reached the extreme of a given (usually abstract, often negative) quality — 'is the very extreme of ___.' The pattern takes a noun (often an abstract quality such as 危険, 無礼, 残酷) and typically appears in written criticism or formal judgment.",
    formation:
      "N + に極まり（だ / そうだ / ない）\n例: 危険[きけん]に極[きわ]まる / 残酷[ざんこく]に極[きわ]まりだ / 無礼[ぶれい]に極[きわ]まりない",
    examples: [
      { jp: "子供[こども]を標的[ひょうてき]にするような犯罪[はんざい]は、残酷[ざんこく]に極[きわ]まる。", en: "Crimes that target children reach the extreme of cruelty." },
      { jp: "証拠[しょうこ]隠滅[いんめつ]を図[はか]った行為[こうい]は、悪質[あくしつ]に極[きわ]まりだと言[い]える。", en: "The act of attempting to destroy evidence can be said to be the very extreme of malice." }
    ],
    notes:
      "Formal / literary written style. The verb form 〜に極まる is most common; 〜に極まりだ treats 極まり as a noun and is used in formal judgments. The negative form 〜に極まりない is interchangeable with 〜の極まりない. Closely related to 〜の極まりない and 〜の至り.",
    related: ["〜の極まりない", "〜の至り"]
  },

  // ───────────────────────────────────────────────────────────
  // EMOTION — involuntary
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-212",
    point: "〜を禁じ得ない",
    reading: "〜をきんじえない",
    level: "N1",
    category: "Emotion",
    lesson: 12,
    meaning: "cannot help but (feel); cannot suppress (an involuntary emotion)",
    structure: "N (emotion) + を禁じ得ない",
    explanation:
      "Expresses that an emotion arises so strongly that one cannot suppress it — 'cannot help but feel ___.' Formal and written-style; restricted to nouns of emotion (涙, 怒り, 驚き, 同情, 失笑). The verb 禁じ得る is literary for 'can restrain'.",
    formation:
      "N (emotion) + を禁じ得ない\n例: 涙[なみだ]を禁[きん]じ得[え]ない / 怒[いか]りを禁[きん]じ得[え]ない / 驚[おどろ]きを禁[きん]じ得[え]ない",
    examples: [
      { jp: "戦場[せんじょう]で暮[く]らす子[こ]どもたちの映像[えいぞう]を見[み]て、涙[なみだ]を禁[きん]じ得[え]なかった。", en: "Watching footage of children living on the battlefield, I could not hold back my tears." },
      { jp: "無責任[むせきにん]な対応[たいおう]を繰[く]り返[かえ]す会社[かいしゃ]に、怒[いか]りを禁[きん]じ得[え]ない。", en: "I cannot suppress my anger toward a company that repeats irresponsible responses." }
    ],
    notes:
      "Formal / literary. Restricted to involuntary emotions; not used for actions or decisions. The verb form 禁じ得なかった (past) is common in narration. Closely related to 〜の念に堪えない (cannot bear a feeling) and 〜ずにはいられない (cannot help doing).",
    related: ["〜の念に堪えない", "〜ずにはいられない"]
  },

  // ───────────────────────────────────────────────────────────
  // EVALUATION — worth / sufficiency
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-213",
    point: "〜に足る",
    reading: "〜にたる",
    level: "N1",
    category: "Evaluation",
    lesson: 13,
    meaning: "worth doing; sufficient; worthy of",
    structure: "N / V辞書形 + に足る",
    explanation:
      "Indicates that something is of sufficient quality, value, or importance to merit the following noun or action — 'worth ___.' Formal written expression used to evaluate the worthiness of a person, achievement, or result.",
    formation:
      "N / V辞書形 + に足る + N\n例: 信頼[しんらい]に足[た]る / 評価[ひょうか]に足[た]る / 注目[ちゅうもく]に足[た]る / 満足[まんぞく]するに足[た]る",
    examples: [
      { jp: "彼[かれ]は周囲[しゅうい]からの信頼[しんらい]に足[た]る人物[じんぶつ]だ。", en: "He is a person worthy of the trust of those around him." },
      { jp: "この研究[けんきゅう]は、学術界[がくじゅつかい]で高[たか]い評価[ひょうか]に足[た]る成果[せいか]を挙[あ]げた。", en: "This research has produced results worthy of high evaluation in the academic world." }
    ],
    notes:
      "Formal / written-style. Almost always modifies a following noun (〜に足るN). Common collocations: 信頼に足る, 評価に足る, 注目に足る, 満足に足る. The negative 〜に足りない ('not worth ___') is more everyday. Closely related to 〜に値する and 〜に堪える（たえる）.",
    related: ["〜に値する", "〜に堪える"]
  },

  // ───────────────────────────────────────────────────────────
  // EMOTION — unbearable thought
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-214",
    point: "〜の念に堪えない",
    reading: "〜のねんにたえない",
    level: "N1",
    category: "Emotion",
    lesson: 14,
    meaning: "cannot bear the thought/feeling of...; overwhelmed with a feeling of...",
    structure: "N (feeling) + の念 + に堪えない",
    explanation:
      "A formal written expression indicating that a strong feeling — typically 悲痛, 憂慮, 遺憾, 恐怖, or 敬畏 — is so overwhelming that one cannot endure it. Used in serious, dignified statements such as condolences, official apologies, or formal appraisals.",
    formation:
      "N (feeling) + の念[ねん] + に堪[た]えない\n例: 悲痛[ひつう]の念[ねん]に堪[た]えない / 憂慮[ゆうりょ]の念[ねん]に堪[た]えない / 遺憾[いかん]の念[ねん]に堪[た]えない",
    examples: [
      { jp: "突然[とつぜん]の訃報[ふほう]に接[せっ]し、悲痛[ひつう]の念[ねん]に堪[た]えません。", en: "On receiving the sudden news of the death, I cannot bear the depth of my grief." },
      { jp: "将来[しょうらい]の環境[かんきょう]を思[おも]い、憂慮[ゆうりょ]の念[ねん]に堪[た]えない次第[しだい]です。", en: "Thinking of the environment of the future, I am overwhelmed with a feeling of grave concern." }
    ],
    notes:
      "Very formal / written-style. Restricted to dignified, abstract feelings (〜の念): 悲痛, 憂慮, 遺憾, 恐怖, 敬畏, 感謝. Often paired with polite endings (〜に堪えません, 〜次第です) in official statements, condolences, and apologies. 念 here = 'thought, feeling'. Closely related to 〜を禁じ得ない and 〜の極み.",
    related: ["〜を禁じ得ない", "〜の極み"]
  }
];
