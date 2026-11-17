import type { GrammarData } from "@/lib/types";

// JLPT N1 grammar — Shinzaizen Master style, chunk C.
// Furigana notation: kanji readings inline as 漢字[かんじ].
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// Each contiguous kanji run is given one bracket with its full reading.
// Total: 50 points across 8 categories.
// IDs: gn1-101 .. gn1-150.
// All points are NEW — distinct from chunks A, B, and D.

export const grammarN1C: GrammarData[] = [
  // ───────────────────────────────────────────────────────────
  // CONDITIONALS — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-101",
    point: "〜ものを",
    reading: "mono o",
    level: "N1",
    category: "Conditionals",
    meaning: "If only...; would that...; (regretful) although one should have...",
    structure: "普通体 + ものを",
    explanation:
      "Expresses regret or lament that an expected or desirable action was not taken. Often conveys 'if only (X) had been done, the outcome would have been different'.",
    formation:
      "普通体 + ものを\n例: 連絡[れんらく]してくれればよかったものを / 行[い]けばよかったものを",
    examples: [
      { jp: "一言[ひとこと]連絡[れんらく]してくれればよかったものを、彼[かれ]は何[なに]も言[い]わなかった。", en: "If only he had let me know with a single word, but he said nothing." },
      { jp: "もう少[すこ]し勉強[べんきょう]していれば合格[ごうかく]できたものを、遊[あそ]んでばかりいた。", en: "If only I had studied a little more I could have passed, but I just fooled around." }
    ],
    notes:
      "Carries strong regret and reproach, often toward oneself or another. The unrealized action is presented as a missed opportunity. Slightly literary; common in written or formal complaint.",
    related: ["gn1-102", "gn1-105", "gn1-121"]
  },
  {
    id: "gn1-102",
    point: "〜ないものでもない",
    reading: "nai mono demo nai",
    level: "N1",
    category: "Conditionals",
    meaning: "It is not impossible to...; one might...; could possibly...",
    structure: "V-ない形 + ないものでもない",
    explanation:
      "Indicates that something is not entirely impossible, leaving open the possibility. Conveys a reserved or reluctant affirmation, like 'I might just...'.",
    formation:
      "V-ない形 + ないものでもない\n例: 行[い]かないものでもない / 引[ひ]き受[う]けないものでもない",
    examples: [
      { jp: "条件[じょうけん]次第[しだい]では、引[ひ]き受[う]けないものでもない。", en: "Depending on the conditions, I might not refuse to take it on." },
      { jp: "美味[おい]しそうなら、食[た]べないものでもない。", en: "If it looks tasty, I might just eat it." }
    ],
    notes:
      "Used to express a hesitant or qualified possibility. The double negative (not impossible) softens the assertion. Common in negotiations and tentative responses.",
    related: ["gn1-101", "gn1-103", "gn1-105"]
  },
  {
    id: "gn1-103",
    point: "〜わけにはいかない",
    reading: "wake ni wa ikanai",
    level: "N1",
    category: "Conditionals",
    meaning: "Cannot (for moral, social, or practical reasons); must not",
    structure: "V-辞書形 + わけにはいかない",
    explanation:
      "Expresses that one cannot do something, not because it is physically impossible, but because of social, moral, or situational constraints. 'I am not in a position to...'.",
    formation:
      "V-辞書形 + わけにはいかない\n例: 休[やす]むわけにはいかない / 断[ことわ]るわけにはいかない",
    examples: [
      { jp: "明日[あした]は重要[じゅうよう]な会議[かいぎ]があるので、休[やす]むわけにはいかない。", en: "I cannot take the day off because there is an important meeting tomorrow." },
      { jp: "先輩[せんぱい]の頼[たの]みだから、断[ことわ]るわけにはいかない。", en: "Since it is a request from my senior, I cannot very well refuse." }
    ],
    notes:
      "Differs from 〜できない (cannot) in that the obstacle is social or circumstantial rather than physical ability. Often implies an obligation not to act.",
    related: ["gn1-101", "gn1-104", "gn1-139"]
  },
  {
    id: "gn1-104",
    point: "〜ないわけにはいかない",
    reading: "nai wake ni wa ikanai",
    level: "N1",
    category: "Conditionals",
    meaning: "Cannot avoid doing; have to (out of obligation)",
    structure: "V-ない形 + ないわけにはいかない",
    explanation:
      "Expresses that one cannot refrain from doing something due to social or moral obligation. The double negative conveys 'I have no choice but to...'.",
    formation:
      "V-ない形 + ないわけにはいかない\n例: 行[い]かないわけにはいかない / 言[い]わないわけにはいかない",
    examples: [
      { jp: "親[おや]として、子[こ]の進路[しんろ]に口[くち]を出[だ]さないわけにはいかない。", en: "As a parent, I cannot help but have a say in my child's future path." },
      { jp: "約束[やくそく]した以上[いじょう]、行[い]かないわけにはいかない。", en: "Having promised, I cannot avoid going." }
    ],
    notes:
      "Emphasizes that the action is unavoidable due to obligation or duty. Common in formal contexts. Mirrors 〜ざるを得[え]ない in meaning.",
    related: ["gn1-103", "gn1-110", "gn1-139"]
  },
  {
    id: "gn1-105",
    point: "〜にしても",
    reading: "ni shite mo",
    level: "N1",
    category: "Conditionals",
    meaning: "Even if...; even though...; assuming that...",
    structure: "N + にしても / V-普通体 + にしても / イAdj + にしても / Na-adj + である + にしても",
    explanation:
      "Concedes a hypothetical or actual condition, then states that the conclusion holds regardless. Used to set up an extreme or contrasting case before the main clause.",
    formation:
      "N / V-普通体 / イAdj + にしても\n例: 忙[いそが]しいにしても / 行[い]くにしても / 雨[あめ]だにしても",
    examples: [
      { jp: "忙[いそが]しいにしても、連絡[れんらく]くらいはできるはずだ。", en: "Even if you are busy, you should at least be able to get in touch." },
      { jp: "参加[さんか]するにしてもしないにしても、早[はや]く返事[へんじ]をしてほしい。", en: "Whether you participate or not, please reply promptly." }
    ],
    notes:
      "Often pairs two extremes (XにしてもYにしても) to mean 'whether X or Y'. Softens the condition while preserving the main assertion.",
    related: ["gn1-101", "gn1-117", "gn1-121"]
  },

  // ───────────────────────────────────────────────────────────
  // CAUSE / REASON — 6 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-106",
    point: "〜てならない",
    reading: "te naranai",
    level: "N1",
    category: "Cause/Reason",
    meaning: "...extremely; cannot help but feel... (emotion or sensation overwhelming one)",
    structure: "V-て形 / イAdj-くて / Na-adj-で + ならない",
    explanation:
      "Expresses a feeling or sensation that arises spontaneously and cannot be suppressed. The emotion is so strong that one cannot help feeling it.",
    formation:
      "V-て形 / イAdj-くて / Na-adj-で + ならない\n例: 悲[かな]しくてならない / 気[き]になってならない",
    examples: [
      { jp: "故郷[こきょう]の家族[かぞく]のことが思[おも]い出[だ]されてならない。", en: "I cannot help thinking of my family back in my hometown." },
      { jp: "将来[しょうらい]のことが不安[ふあん]でならない。", en: "I cannot help feeling anxious about the future." }
    ],
    notes:
      "Used only for spontaneous emotions or sensations of the first person. More formal and literary than 〜てしょうがない. Cannot be used for volitional actions.",
    related: ["gn1-107", "gn1-108", "gn1-109"]
  },
  {
    id: "gn1-107",
    point: "〜てたまらない",
    reading: "te tamaranai",
    level: "N1",
    category: "Cause/Reason",
    meaning: "...unbearably; ...intolerably (emotion or sensation overwhelming)",
    structure: "V-て形 / イAdj-くて / Na-adj-で + たまらない",
    explanation:
      "Expresses a feeling or sensation so intense that it cannot be borne. Conveys 'I cannot stand how...'.",
    formation:
      "V-て形 / イAdj-くて / Na-adj-で + たまらない\n例: 暑[あつ]くてたまらない / 悔[くや]しくてたまらない",
    examples: [
      { jp: "のどが渇[かわ]いてたまらないので、冷[つめ]たい水[みず]が欲[ほ]しい。", en: "I am unbearably thirsty, so I want cold water." },
      { jp: "試合[しあい]に負[ま]けて悔[くや]しくてたまらない。", en: "I cannot stand the frustration of losing the match." }
    ],
    notes:
      "Limited to first-person feelings or direct quotations of others. Stronger than 〜てならない in conveying overwhelming intensity. Cannot describe third-person emotions directly.",
    related: ["gn1-106", "gn1-108", "gn1-109"]
  },
  {
    id: "gn1-108",
    point: "〜てしょうがない",
    reading: "te shou ga nai",
    level: "N1",
    category: "Cause/Reason",
    meaning: "...so much that I cannot help it; unbearably...",
    structure: "V-て形 / イAdj-くて / Na-adj-で + しょうがない",
    explanation:
      "Colloquial expression of a feeling so intense one cannot suppress it. Equivalent to 〜てたまらない in meaning but more informal and conversational.",
    formation:
      "V-て形 / イAdj-くて / Na-adj-で + しょうがない\n例: 眠[ねむ]くてしょうがない / 悲[かな]しくてしょうがない",
    examples: [
      { jp: "今日[きょう]は眠[ねむ]くてしょうがないので、早[はや]く帰[かえ]りたい。", en: "I am so sleepy I cannot help it today, so I want to go home early." },
      { jp: "あの映画[えいが]を思[おも]い出[だ]すと笑[わら]ってしょうがない。", en: "Whenever I remember that movie, I cannot stop laughing." }
    ],
    notes:
      "Spoken-style only. Common in casual conversation among friends or family. Avoid in formal writing; use 〜てならない or 〜てたまらない instead.",
    related: ["gn1-106", "gn1-107", "gn1-109"]
  },
  {
    id: "gn1-109",
    point: "〜てしかたがない",
    reading: "te shikata ga nai",
    level: "N1",
    category: "Cause/Reason",
    meaning: "...cannot help but feel...; ...so... that nothing can be done about it",
    structure: "V-て形 / イAdj-くて / Na-adj-で + しかたがない",
    explanation:
      "Expresses a feeling so strong it cannot be controlled. Functionally identical to 〜てしょうがない but more formal and acceptable in polite contexts.",
    formation:
      "V-て形 / イAdj-くて / Na-adj-で + しかたがない\n例: 心配[しんぱい]でしかたがない / 悔[くや]しくてしかたがない",
    examples: [
      { jp: "息子[むすこ]の将来[しょうらい]が心配[しんぱい]でしかたがない。", en: "I cannot help worrying about my son's future." },
      { jp: "努力[どりょく]が無駄[むだ]になって悔[くや]しくてしかたがない。", en: "I cannot help my frustration that my efforts were wasted." }
    ],
    notes:
      "More formal than 〜てしょうがない; acceptable in business and polite contexts. Like its counterparts, restricted to first-person feelings or quoted speech.",
    related: ["gn1-106", "gn1-107", "gn1-108"]
  },
  {
    id: "gn1-110",
    point: "〜ことなく",
    reading: "koto naku",
    level: "N1",
    category: "Cause/Reason",
    meaning: "Without doing...; not doing... (and proceeding regardless)",
    structure: "V-辞書形 + ことなく",
    explanation:
      "Indicates that an action is not performed, yet the main action proceeds. A formal, written-style counterpart to 〜ないで.",
    formation:
      "V-辞書形 + ことなく\n例: 諦[あきら]めることなく / 休[やす]むことなく",
    examples: [
      { jp: "彼[かれ]は一度[いちど]も諦[あきら]めることなく、研究[けんきゅう]を続[つづ]けた。", en: "He continued his research without ever giving up." },
      { jp: "休[やす]むことなく働[はたら]き続[つづ]けた結果[けっか]、体調[たいちょう]を崩[くず]した。", en: "As a result of working without rest, he ruined his health." }
    ],
    notes:
      "More formal and literary than 〜ないで. Often found in biographies, reports, and narratives to emphasize the absence of an action against expectation.",
    related: ["gn1-104", "gn1-111", "gn1-139"]
  },
  {
    id: "gn1-111",
    point: "〜にちがいない",
    reading: "ni chigai nai",
    level: "N1",
    category: "Cause/Reason",
    meaning: "Surely...; definitely...; there is no doubt that...",
    structure: "N / Na-adj（な/である） / V-普通体 / イAdj-普通体 + にちがいない",
    explanation:
      "Expresses strong conviction or confident inference about a fact. The speaker is certain that the stated proposition is true.",
    formation:
      "N / V-普通体 + にちがいない\n例: 彼[かれ]の犯行[はんこう]にちがいない / 失敗[しっぱい]するにちがいない",
    examples: [
      { jp: "あの表情[ひょうじょう]からすると、彼[かれ]は嘘[うそ]をついているにちがいない。", en: "Judging from his expression, he must be lying." },
      { jp: "これだけ準備[じゅんび]したのだから、成功[せいこう]するにちがいない。", en: "With this much preparation, it will surely succeed." }
    ],
    notes:
      "Conveys the speaker's firm conviction based on reasoning or evidence. Stronger than 〜はずだ in subjective certainty. Often paired with きっと.",
    related: ["gn1-110", "gn1-121", "gn1-126"]
  },

  // ───────────────────────────────────────────────────────────
  // TIME / SEQUENCE — 5 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-112",
    point: "〜あげく",
    reading: "ageku",
    level: "N1",
    category: "Time/Sequence",
    meaning: "After a long process of...; in the end, after doing...",
    structure: "V-た形 / N + の + あげく",
    explanation:
      "Indicates that after a prolonged or complicated process, a final (often undesirable) result was reached. Stresses the difficulty or duration of the preceding action.",
    formation:
      "V-た形 / Nの + あげく\n例: 悩[なや]んだあげく / 言[い]い争[あらそ]ったあげく",
    examples: [
      { jp: "さんざん悩[なや]んだあげく、転職[てんしょく]を決意[けつい]した。", en: "After agonizing for a long time, I finally decided to change jobs." },
      { jp: "両者[りょうしゃ]は激[はげ]しく言[い]い争[あらそ]ったあげく、結局[けっきょく]和解[わかい]した。", en: "After arguing fiercely, the two parties ultimately reconciled." }
    ],
    notes:
      "Implies the process was lengthy or troublesome, and the outcome often (but not always) undesirable. Common in narrative writing. Avoid for simple sequential actions.",
    related: ["gn1-113", "gn1-114", "gn1-116"]
  },
  {
    id: "gn1-113",
    point: "〜に際して",
    reading: "ni sai shite",
    level: "N1",
    category: "Time/Sequence",
    meaning: "On the occasion of...; when...; at the time of...",
    structure: "N + に際して / V-辞書形 + に際して",
    explanation:
      "Marks a significant occasion or moment, indicating the action that occurs at that time. Formal expression used in ceremonies, official documents, and important events.",
    formation:
      "N + に際して\n例: 出発[しゅっぱつ]に際して / 入学[にゅうがく]に際して",
    examples: [
      { jp: "出国[しゅっこく]に際して、パスポートの提示[ていじ]が求[もと]められる。", en: "Upon leaving the country, you are required to present your passport." },
      { jp: "開会[かいかい]に際して、会長[かいちょう]から挨拶[あいさつ]があった。", en: "On the occasion of opening the meeting, the chairperson gave an address." }
    ],
    notes:
      "Formal register, common in announcements, contracts, and ceremonial contexts. Similar to 〜にあたって but more focused on the specific moment of an event.",
    related: ["gn1-112", "gn1-114", "gn1-115"]
  },
  {
    id: "gn1-114",
    point: "〜に至って",
    reading: "ni itatte",
    level: "N1",
    category: "Time/Sequence",
    meaning: "When it reaches the point of...; now that it has come to...",
    structure: "V-辞書形 / N + に至って",
    explanation:
      "Marks a critical point or stage being reached, often implying that action should have been taken earlier. 'When it finally comes to... / only when it reached...'.",
    formation:
      "V-辞書形 / N + に至って\n例: 事[こと]ここに至って / 破産[はさん]に至って",
    examples: [
      { jp: "事[こと]ここに至っては、もはや引[ひ]き返[かえ]すわけにはいかない。", en: "Now that things have come to this point, we can no longer turn back." },
      { jp: "会社[かいしゃ]が倒産[とうさん]するに至って、ようやく彼[かれ]は経営[けいえい]の甘[あま]さに気[き]づいた。", en: "Only when the company went bankrupt did he finally realize how lax his management had been." }
    ],
    notes:
      "Often carries the nuance 'too late' or 'finally at this extreme stage'. The follow-up clause typically expresses a belated reaction or unavoidable conclusion.",
    related: ["gn1-112", "gn1-113", "gn1-115"]
  },
  {
    id: "gn1-115",
    point: "〜に至っては",
    reading: "ni itatte wa",
    level: "N1",
    category: "Time/Sequence",
    meaning: "As for...; when it comes to...; especially in the case of...",
    structure: "N + に至っては",
    explanation:
      "Singled out an extreme or notable case among several, indicating that for this case something special applies. Used to highlight a particular item from a set.",
    formation:
      "N + に至っては\n例: 彼[かれ]に至っては / 今[いま]に至っては",
    examples: [
      { jp: "他[ほか]のメンバーは少[すこ]しずつ成果[せいか]が出[で]ているが、彼[かれ]に至ってはまったく進展[しんてん]がない。", en: "Other members are showing gradual results, but as for him, there is no progress at all." },
      { jp: "今[いま]に至っては、どうしようもない。", en: "As things stand now, there is nothing that can be done." }
    ],
    notes:
      "Often appears after mentioning several lesser cases to introduce the most extreme. Highlights a specific item for emphasis. Distinct from 〜に至って (reaching the point of).",
    related: ["gn1-113", "gn1-114", "gn1-119"]
  },
  {
    id: "gn1-116",
    point: "〜ところ",
    reading: "tokoro",
    level: "N1",
    category: "Time/Sequence",
    meaning: "Just about to...; in the middle of...; just finished...",
    structure: "V-辞書形 + ところ / V-ている + ところ / V-た形 + ところ",
    explanation:
      "Specifies the temporal stage of an action: just before starting, currently in progress, or just completed. Pinpoints the moment relative to the action's progression.",
    formation:
      "V-辞書形 + ところ（直前） / V-ている + ところ（進行中） / V-た + ところ（直後）\n例: 出[で]かけるところ / 考[かんが]えているところ / 帰[かえ]ってきたところ",
    examples: [
      { jp: "今[いま]から出[で]かけるところなので、後[あと]で電話[でんわ]してください。", en: "I am just about to go out, so please call later." },
      { jp: "お疲[つか]れ様[さま]でした。今[いま]帰[かえ]ってきたところです。", en: "Thank you for your hard work. I just got home." }
    ],
    notes:
      "The form of the verb before ところ determines the timing. Frequently used in service and business settings to convey the precise stage of an action.",
    related: ["gn1-112", "gn1-114", "gn1-117"]
  },

  // ───────────────────────────────────────────────────────────
  // CONTRAST — 4 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-117",
    point: "〜であれ",
    reading: "de are",
    level: "N1",
    category: "Contrast",
    meaning: "Whatever it is...; be it...; regardless of...",
    structure: "N + であれ",
    explanation:
      "Marks a noun as an unconditional case, indicating that regardless of what it is, the statement holds. Often used with interrogatives such as 何[なに]であれ / 誰[だれ]であれ.",
    formation:
      "N + であれ\n例: 何[なに]であれ / 誰[だれ]であれ / 理由[りゆう]であれ",
    examples: [
      { jp: "理由[りゆう]が何[なに]であれ、暴力[ぼうりょく]は許[ゆる]されない。", en: "Whatever the reason, violence is unforgivable." },
      { jp: "相手[あいて]が誰[だれ]であれ、礼儀[れいぎ]を忘[わす]れてはいけない。", en: "No matter who the other party is, you must not forget your manners." }
    ],
    notes:
      "A more formal, literary equivalent of 〜でも. Often used with question words (何, 誰, どこ) for absolute inclusiveness. Common in proclamations and rules.",
    related: ["gn1-105", "gn1-118", "gn1-120"]
  },
  {
    id: "gn1-118",
    point: "〜であれ〜であれ",
    reading: "de are de are",
    level: "N1",
    category: "Contrast",
    meaning: "Whether... or...; both A and B (equally applies)",
    structure: "N + であれ + N + であれ",
    explanation:
      "Lists two (or more) nouns to indicate that the statement applies regardless of which one is chosen. Exhausts the alternatives in a contrastive set.",
    formation:
      "N + であれ + N + であれ\n例: 男性[だんせい]であれ女性[じょせい]であれ / 親[おや]であれ子[こ]であれ",
    examples: [
      { jp: "男性[だんせい]であれ女性[じょせい]であれ、能力[のうりょく]があれば採用[さいよう]する。", en: "Whether male or female, we hire anyone with ability." },
      { jp: "賛成[さんせい]であれ反対[はんたい]であれ、意見[いけん]は尊重[そんちょう]される。", en: "Whether for or against, all opinions will be respected." }
    ],
    notes:
      "Pairs contrasting nouns to show both fall under the same rule. Formal register. Often followed by a statement applying equally to both cases.",
    related: ["gn1-117", "gn1-119", "gn1-120"]
  },
  {
    id: "gn1-119",
    point: "〜とは限らない",
    reading: "to wa kagiranai",
    level: "N1",
    category: "Contrast",
    meaning: "It is not necessarily the case that...; not always...",
    structure: "普通体 + とは限らない",
    explanation:
      "Refutes a general assumption by indicating that the stated case is not always true. 'Just because X is true, it doesn't mean that Y follows'.",
    formation:
      "N / V-普通体 + とは限らない\n例: 高[たか]いとは限らない / 有名[ゆうめい]だとは限らない",
    examples: [
      { jp: "値段[ねだん]が高[たか]いものが必[かなら]ずしも良[よ]いとは限らない。", en: "It is not necessarily the case that expensive things are always good." },
      { jp: "親[おや]が優秀[ゆうしゅう]だからといって、子[こ]も優秀[ゆうしゅう]だとは限らない。", en: "Just because the parents are outstanding does not mean the child will be too." }
    ],
    notes:
      "Commonly used to temper generalizations or correct overstatements. Often follows 〜だからといって to explicitly deny a logical inference.",
    related: ["gn1-117", "gn1-120", "gn1-121"]
  },
  {
    id: "gn1-120",
    point: "〜に限らず",
    reading: "ni kagirazu",
    level: "N1",
    category: "Contrast",
    meaning: "Not only...; not limited to...; not just...",
    structure: "N + に限らず",
    explanation:
      "Indicates that something is not restricted to the stated noun, but applies more broadly. Adds scope rather than restricting it.",
    formation:
      "N + に限らず\n例: 日本[にほん]に限らず / 男性[だんせい]に限らず",
    examples: [
      { jp: "この習慣[しゅうかん]は日本[にほん]に限らず、東南[とうなん]アジア各地[かくち]に見[み]られる。", en: "This custom is found not only in Japan but throughout Southeast Asia." },
      { jp: "最近[さいきん]は若[わか]い人[ひと]に限らず、年配[ねんぱい]の人[ひと]もスマートフォンを使[つか]うようになった。", en: "Recently it is not only young people but older people too who have come to use smartphones." }
    ],
    notes:
      "Used to broaden a statement beyond its initially stated scope. Common in journalism and explanatory writing. Often followed by も to indicate the additional cases.",
    related: ["gn1-117", "gn1-118", "gn1-119"]
  },

  // ───────────────────────────────────────────────────────────
  // ASSUMPTION — 12 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-121",
    point: "〜はず",
    reading: "hazu",
    level: "N1",
    category: "Assumption",
    meaning: "Should be; is expected to (based on logic or prior knowledge)",
    structure: "N + の + はず / Na-adj（な） + はず / V-普通体 + はず / イAdj + はず",
    explanation:
      "Expresses a strong expectation based on objective reasoning, evidence, or prior arrangements. The speaker believes the stated proposition to be true.",
    formation:
      "N-の / Na-な / V-普通体 / イAdj + はず\n例: 来[く]るはず / 大変[たいへん]なはず / 有名[ゆうめい]なはず",
    examples: [
      { jp: "彼[かれ]は約束[やくそく]を守[まも]る人[ひと]だから、時間[じかん]通[どお]りに来[く]るはずだ。", en: "He is the kind of person who keeps promises, so he should arrive on time." },
      { jp: "こんなに準備[じゅんび]したのだから、試験[しけん]はうまくいくはずだ。", en: "With this much preparation, the exam should go well." }
    ],
    notes:
      "Differs from 〜にちがいない in being grounded in logical expectation rather than subjective conviction. The negation 〜はずがない means 'there is no way that...'.",
    related: ["gn1-111", "gn1-119", "gn1-125"]
  },
  {
    id: "gn1-122",
    point: "〜べき",
    reading: "beki",
    level: "N1",
    category: "Assumption",
    meaning: "Should; ought to (moral obligation or proper action)",
    structure: "V-辞書形 + べき / する → するべき / すべき",
    explanation:
      "Expresses the speaker's strong opinion about what is the right or proper course of action. Conveys moral obligation or correct conduct.",
    formation:
      "V-辞書形 + べき（する → すべき / するべき）\n例: 行[い]くべき / 考[かんが]えるべき / すべき",
    examples: [
      { jp: "環境[かんきょう]問題[もんだい]にもっと真剣[しんけん]に取[と]り組[く]むべきだ。", en: "We ought to tackle environmental issues more seriously." },
      { jp: "若[わか]いうちに、多[おお]くの経験[けいけん]を積[つ]むべきだ。", en: "While young, you should accumulate a wide range of experiences." }
    ],
    notes:
      "Carries strong judgmental nuance. Suggests the action is the right thing to do, often implying criticism of those who fail to do it. すべき is more formal than するべき.",
    related: ["gn1-121", "gn1-123", "gn1-126"]
  },
  {
    id: "gn1-123",
    point: "〜つもり",
    reading: "tsumori",
    level: "N1",
    category: "Assumption",
    meaning: "Intend to; plan to; (with past tense) one's self-perception of having done...",
    structure: "V-辞書形 + つもり / V-た形 + つもり",
    explanation:
      "Expresses one's intention or plan to perform an action. With past-tense verbs, indicates one's self-perception: 'I consider myself to have done...' (regardless of others' view).",
    formation:
      "V-辞書形 + つもり（意向） / V-た + つもり（自認）\n例: 行[い]くつもり / やったつもり",
    examples: [
      { jp: "来年[らいねん]の春[はる]に留学[りゅうがく]するつもりだ。", en: "I intend to study abroad next spring." },
      { jp: "十分[じゅうぶん]に説明[せつめい]したつもりだが、伝[つた]わらなかったようだ。", en: "I believe I explained thoroughly, but it seems the message did not get across." }
    ],
    notes:
      "With V-辞書形 it denotes intention. With V-た it expresses self-assessment that may differ from how others see things. Common in casual speech but also acceptable in polite form (つもりです).",
    related: ["gn1-121", "gn1-122", "gn1-124"]
  },
  {
    id: "gn1-124",
    point: "〜そうにない",
    reading: "sou ni nai",
    level: "N1",
    category: "Assumption",
    meaning: "Looks unlikely to...; shows no sign of...",
    structure: "V-ます形（語幹） + そうにない",
    explanation:
      "Expresses a strong judgment that something is unlikely to happen, based on outward appearance or current signs. 'There is no indication that...'.",
    formation:
      "V-ます形（語幹） + そうにない\n例: 来[き]そうにない / できそうにない / 降[ふ]りそうにない",
    examples: [
      { jp: "彼[かれ]は仕事[しごと]が多[おお]すぎて、今夜[こんや]は来[き]そうにない。", en: "He has too much work, so he is unlikely to come tonight." },
      { jp: "空[そら]が晴[は]れてきたので、雨[あめ]は降[ふ]りそうにない。", en: "The sky has cleared, so it does not look like it will rain." }
    ],
    notes:
      "Negative conjecture based on visible signs. Distinct from 〜ないだろう (general inference) in being based on observation. Used with verbs of change or action.",
    related: ["gn1-121", "gn1-127", "gn1-129"]
  },
  {
    id: "gn1-125",
    point: "〜わけがない",
    reading: "wake ga nai",
    level: "N1",
    category: "Assumption",
    meaning: "There is no way that...; impossible that...",
    structure: "V-普通形 / N / Na-adj（な） + わけがない",
    explanation:
      "Strongly denies a possibility based on logic or common sense. The speaker is convinced that the stated proposition cannot be true.",
    formation:
      "V-普通形 / N（な） + わけがない\n例: できるわけがない / 嘘[うそ]なわけがない / 来[く]るわけがない",
    examples: [
      { jp: "彼[かれ]がそんな嘘[うそ]をつくわけがない。", en: "There is no way he would tell such a lie." },
      { jp: "一度[いちど]も練習[れんしゅう]していないのだから、うまくできるわけがない。", en: "Having never practiced, there is no way he can do it well." }
    ],
    notes:
      "Stronger than 〜ないはずだ in expressive denial. Often used to refute an assertion or dismiss an assumption. Conveys firm conviction that the contrary is true.",
    related: ["gn1-103", "gn1-121", "gn1-126"]
  },
  {
    id: "gn1-126",
    point: "〜にきまっている",
    reading: "ni kimatte iru",
    level: "N1",
    category: "Assumption",
    meaning: "Definitely; surely; it goes without saying that...",
    structure: "V-普通形 / N / Na-adj（な） / イAdj + にきまっている",
    explanation:
      "Expresses the speaker's strong, confident judgment that something is definitely the case. Conveys an assured inference based on obvious evidence.",
    formation:
      "V-普通形 / N / Na-な / イAdj + にきまっている\n例: うまくいくにきまっている / 彼[かれ]にきまっている / 寒[さむ]いにきまっている",
    examples: [
      { jp: "あんなに努力[どりょく]したのだから、成功[せいこう]するにきまっている。", en: "Having worked that hard, he will definitely succeed." },
      { jp: "こんな夜遅[よるおそ]くに来[く]るのは、彼[かれ]にきまっている。", en: "The one coming this late at night must be him." }
    ],
    notes:
      "More colloquial and assertive than 〜にちがいない. Common in spoken Japanese. Often used when the conclusion seems obvious to the speaker.",
    related: ["gn1-111", "gn1-121", "gn1-125"]
  },
  {
    id: "gn1-127",
    point: "〜かねる",
    reading: "kaneru",
    level: "N1",
    category: "Assumption",
    meaning: "Cannot bring oneself to...; find it difficult to... (out of hesitation or propriety)",
    structure: "V-ます形（語幹） + かねる",
    explanation:
      "Expresses that one cannot do something, not because it is impossible, but because of psychological, social, or propriety-related hesitation. A polite way to refuse or decline.",
    formation:
      "V-ます形（語幹） + かねる\n例: 引[ひ]き受[う]けかねる / お答[こた]えしかねる / 決[き]めかねる",
    examples: [
      { jp: "そのお願[ねが]いについては、お引[ひ]き受[う]けしかねます。", en: "I find it difficult to accept that request." },
      { jp: "個人的[こじんてき]なことなので、お答[こた]えしかねます。", en: "As it is personal, I am unable to answer." }
    ],
    notes:
      "Polite refusal formula common in business Japanese. Softer and more diplomatic than direct negation. The unrelated form 〜かねない means 'might (cause something undesirable)'.",
    related: ["gn1-103", "gn1-128", "gn1-129"]
  },
  {
    id: "gn1-128",
    point: "〜得る / 〜うる",
    reading: "eru / uru",
    level: "N1",
    category: "Assumption",
    meaning: "Can; is possible; might happen",
    structure: "V-ます形（語幹） + 得る / うる",
    explanation:
      "Expresses that an action or event is possible or could potentially occur. The うる form is literary; 得る is more common in writing and formal speech.",
    formation:
      "V-ます形（語幹） + 得る / うる（否定形は 〜得ない / 〜えない）\n例: あり得る / ありうる / 起こし得る / し得る",
    examples: [
      { jp: "そのような事態[じたい]も起こり得ることを想定[そうてい]しておくべきだ。", en: "One should anticipate that such a situation could also arise." },
      { jp: "彼[かれ]は十分[じゅうぶん]にその任[にん]を果[は]たし得る人物[じんぶつ]だ。", en: "He is someone fully capable of fulfilling that duty." }
    ],
    notes:
      "More formal and literary than 〜ことができる. The うる form is read 'uru' not 'eru'. The negative is 〜得ない / 〜えない, as in あり得ない (impossible).",
    related: ["gn1-121", "gn1-127", "gn1-129"]
  },
  {
    id: "gn1-129",
    point: "〜そう（様態）",
    reading: "sou (youtai)",
    level: "N1",
    category: "Assumption",
    meaning: "Looks like...; seems about to...; appears to be...",
    structure: "V-ます形（語幹） + そう / イAdj（い抜き） + そう / Na-adj-語幹 + そう",
    explanation:
      "Expresses conjecture based on direct visual or sensory observation. Indicates that something appears to be in a certain state or about to happen.",
    formation:
      "V-ます形（語幹） / イAdj（い抜き） / Na-adj-語幹 + そう\n例: 降[ふ]りそう / 美味[おい]しそう / 元気[げんき]そう / なさそう",
    examples: [
      { jp: "空[そら]が暗[くら]くなってきたので、もうすぐ雨[あめ]が降[ふ]りそうだ。", en: "The sky has grown dark, so it looks like it will rain soon." },
      { jp: "このケーキ、見[み]るからに美味[おい]しそうですね。", en: "This cake looks delicious just from seeing it." }
    ],
    notes:
      "Based on sensory evidence, not hearsay. いい → よさそう, ない → なさそう are irregular. Often followed by に / だ / な to modify nouns or adverbs.",
    related: ["gn1-124", "gn1-130", "gn1-131"]
  },
  {
    id: "gn1-130",
    point: "〜よう（推量）",
    reading: "you (suiryou)",
    level: "N1",
    category: "Assumption",
    meaning: "Appears to be...; seems like... (conjecture based on indirect evidence)",
    structure: "V-普通形 + よう（だ/に/な） / N + の + よう / Na-adj + な + よう / イAdj + よう",
    explanation:
      "Expresses inference or conjecture based on circumstantial evidence rather than direct observation. The speaker concludes 'it seems that... / it appears as if...'.",
    formation:
      "V-普通形 / N-の / Na-な / イAdj + よう（だ / に / な）\n例: 来[く]るようだ / 雨[あめ]のようだ / 静[しず]かなようだ",
    examples: [
      { jp: "道[みち]が混[こ]んでいるところを見[み]ると、前[まえ]で事故[じこ]があったようだ。", en: "Seeing the road congested, it seems there was an accident ahead." },
      { jp: "彼[かれ]の話[はな]しぶりからすると、相当[そうとう]自信[じしん]があるようだ。", en: "Judging from how he speaks, he seems to have considerable confidence." }
    ],
    notes:
      "More objective and inferential than 〜そう. 〜ように modifies verbs, 〜ようだ ends the sentence, 〜ような modifies nouns. Used in formal writing and news.",
    related: ["gn1-129", "gn1-131", "gn1-132"]
  },
  {
    id: "gn1-131",
    point: "〜らしい",
    reading: "rashii",
    level: "N1",
    category: "Assumption",
    meaning: "It seems that...; I hear that...; appears to be (typical of)",
    structure: "V-普通形 / N / Na-adj-語幹 / イAdj + らしい",
    explanation:
      "Expresses conjecture based on hearsay or typical behavior. When attached to a noun, it conveys 'characteristic of that noun' (e.g. 男[おとこ]らしい). Otherwise it indicates inference.",
    formation:
      "V-普通形 / N / Na-adj-語幹 / イAdj + らしい\n例: 来[く]るらしい / 雨[あめ]らしい / 学生[がくせい]らしい / 春[はる]らしい",
    examples: [
      { jp: "天気予報[てんきよほう]によると、明日[あした]は雪[ゆき]になるらしい。", en: "According to the weather forecast, it seems it will snow tomorrow." },
      { jp: "彼[かれ]はとても勇気[ゆうき]がある男[おとこ]らしい人[ひと]だ。", en: "He is a very brave and manly person." }
    ],
    notes:
      "Two distinct uses: (1) conjecture or hearsay, (2) typicality (N + らしい = befitting that N). For hearsay, often preceded by 〜によると.",
    related: ["gn1-129", "gn1-130", "gn1-132"]
  },
  {
    id: "gn1-132",
    point: "〜みたい",
    reading: "mitai",
    level: "N1",
    category: "Assumption",
    meaning: "Looks like...; seems like...; as if...",
    structure: "V-普通形 / N / Na-adj-語幹 / イAdj + みたい（だ/に/な）",
    explanation:
      "Colloquial expression of conjecture based on appearance or circumstances. Equivalent in meaning to 〜ようだ but more casual and conversational.",
    formation:
      "V-普通形 / N / Na-adj-語幹 / イAdj + みたい（だ / に / な）\n例: 来[く]るみたいだ / 雨[あめ]みたい / 元気[げんき]みたい / 暑[あつ]いみたい",
    examples: [
      { jp: "彼[かれ]の様子[ようす]を見[み]ると、とても疲[つか]れているみたいだ。", en: "Judging from how he looks, he seems very tired." },
      { jp: "隣[となり]の部屋[へや]から楽[たの]しそうな声[こえ]が聞[き]こえる。パーティーみたいだ。", en: "I hear cheerful voices from the next room. It seems like a party." }
    ],
    notes:
      "Spoken, casual counterpart of 〜ようだ. Avoid in formal writing or business contexts. Can be used as 〜みたいに (adverbial) or 〜みたいな (adnominal).",
    related: ["gn1-129", "gn1-130", "gn1-131"]
  },

  // ───────────────────────────────────────────────────────────
  // PARTICLES — 7 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-133",
    point: "〜やら",
    reading: "yara",
    level: "N1",
    category: "Particles",
    meaning: "Uncertainty about...; or something; mixing A and B (vague listing)",
    structure: "疑問詞 + やら / V-普通形 + やら / N + やら + N + やら",
    explanation:
      "Expresses vagueness or uncertainty about a content, often with a tinge of confusion. Also used to list items vaguely as 'such things as A and B'.",
    formation:
      "疑問詞 + やら / V-普通形 + やら / N + やら + N + やら\n例: どうするやら / 何[なに]やら / 泣[な]くやら笑[わら]うやら",
    examples: [
      { jp: "彼[かれ]がこの件[けん]をどう思[おも]っているか、全[まった]く分[わ]からないやら。", en: "I have no idea what he thinks about this matter." },
      { jp: "引[ひ]っ越[こ]しの準備[じゅんび]で、片付[かたづ]けるやら捨[す]てるやら、大変[たいへん]だ。", en: "With moving preparations, I'm putting things away and throwing things out — it's exhausting." }
    ],
    notes:
      "Conveys a sense of confusion or being overwhelmed. As a question word + やら, expresses puzzlement. As AやらBやら, indicates a jumble of items.",
    related: ["gn1-117", "gn1-118", "gn1-134"]
  },
  {
    id: "gn1-134",
    point: "〜がる",
    reading: "garu",
    level: "N1",
    category: "Particles",
    meaning: "Shows signs of feeling...; appears to be... (third-person emotion)",
    structure: "イAdj-語幹 + がる / Na-adj-語幹 + がる / ほしい + がる",
    explanation:
      "Describes observable behavior indicating someone else's emotion or desire. Used to express third-person feelings, which cannot be directly perceived.",
    formation:
      "イAdj-語幹 / Na-adj-語幹 / ほしい + がる\n例: 嬉[うれ]しがる / 悲[かな]しがる / ほしがる / 怖[こわ]がる",
    examples: [
      { jp: "子供[こども]はみんな、あのおもちゃをほしがっている。", en: "All the children want that toy." },
      { jp: "彼[かれ]は試合[しあい]に負[ま]けて、とても悔[くや]しがっていた。", en: "He looked really frustrated after losing the match." }
    ],
    notes:
      "Used mainly for third-person emotions, since one cannot directly assert others' feelings. Forms adjectives like 〜がる / 〜がっている. The 〜たがる form specifically expresses others' desires.",
    related: ["gn1-135", "gn1-130", "gn1-131"]
  },
  {
    id: "gn1-135",
    point: "〜たがる",
    reading: "tagaru",
    level: "N1",
    category: "Particles",
    meaning: "Shows signs of wanting to... (third-person desire)",
    structure: "V-ます形（語幹） + たがる",
    explanation:
      "Describes observable behavior indicating someone else's desire to perform an action. Used to express third-person volition, which cannot be stated directly.",
    formation:
      "V-ます形（語幹） + たがる\n例: 行[い]きたがる / 食[た]べたがる / 見[み]たがる",
    examples: [
      { jp: "彼[かれ]はいつも新[あたら]しいレストランへ行[い]きたがる。", en: "He always wants to go to new restaurants." },
      { jp: "猫[ねこ]は熱[あつ]い場所[ばしょ]を避[さ]けたがる習性[しゅうせい]がある。", en: "Cats have an instinct to avoid hot places." }
    ],
    notes:
      "Used to describe third-person desires based on behavior, not first-person (which uses 〜たい). Past tense: 〜たがった / 〜たがっていた. Polite form: 〜たがります.",
    related: ["gn1-134", "gn1-123", "gn1-130"]
  },
  {
    id: "gn1-136",
    point: "〜もの（文末）",
    reading: "mono (bunmatsu)",
    level: "N1",
    category: "Particles",
    meaning: "Because...; after all... (emotive, often feminine or childlike justification)",
    structure: "普通体 + もの",
    explanation:
      "Sentence-final particle giving an emotive, often childish or feminine, justification for an action or feeling. Equivalent in meaning to 〜のだ / 〜から but softer and more feeling-based.",
    formation:
      "普通体 + もの\n例: まだ子[こ]どもだもの / 好[す]きだもの / 知[し]らないもの",
    examples: [
      { jp: "「どうして泣[な]いているの？」「まだ小[ちい]さい子供[こども]だもの。」", en: "'Why are you crying?' 'I'm still a small child, after all.'" },
      { jp: "そんなこと言[い]われても、私[わたし]は好[す]きだもの。", en: "Even if you say that, I still like it." }
    ],
    notes:
      "Casual and emotive; traditionally feminine or childish in tone. Often used to express simple, sincere justification. 〜もん is an even more casual variant.",
    related: ["gn1-137", "gn1-138", "gn1-139"]
  },
  {
    id: "gn1-137",
    point: "〜こと（文末）",
    reading: "koto (bunmatsu)",
    level: "N1",
    category: "Particles",
    meaning: "How...!; ...should (emotive exclamation or formal directive)",
    structure: "V-辞書形 / V-ない形 + こと / イAdj + こと / Na-adj + な + こと",
    explanation:
      "Two distinct sentence-final uses: (1) an emotive exclamation of admiration or surprise (typically feminine), and (2) a formal directive in written notices meaning 'one should...'.",
    formation:
      "V-辞書形 / V-ない形 / イAdj / Na-な + こと\n例: 美[うつく]しいこと！ / 早[はや]く来[く]ること / 静[しず]かにすること",
    examples: [
      { jp: "あの夕焼[ゆうや]け、なんと美[うつく]しいこと。", en: "How beautiful that sunset is!" },
      { jp: "図書館[としょかん]では静[しず]かにすること。", en: "Please be quiet in the library." }
    ],
    notes:
      "Use (1) is emotive, often feminine. Use (2) is impersonal and formal, common in instruction manuals and official notices. Distinguished from 〜ことだ (which is a soft assertion).",
    related: ["gn1-136", "gn1-138", "gn1-110"]
  },
  {
    id: "gn1-138",
    point: "〜の（文末・解説）",
    reading: "no (bunmatsu/kaisetsu)",
    level: "N1",
    category: "Particles",
    meaning: "The fact is that...; (I tell you) the reason is...",
    structure: "V-普通形 / N + な + の / Na-adj + な + の / イAdj + の",
    explanation:
      "Sentence-final explanatory particle that provides background, reason, or emphasis. Softens the assertion and often invites the listener's understanding.",
    formation:
      "V-普通形 / N-な / Na-な / イAdj + の（だ / です）\n例: 来[く]るの / 雨[あめ]なの / 寒[さむ]いの / 暇[ひま]なの",
    examples: [
      { jp: "「どうして休[やす]んだの？」「少[すこ]し熱[ねつ]があったの。」", en: "'Why did you take the day off?' 'I had a slight fever.'" },
      { jp: "彼[かれ]は来[こ]ないの？明日[あした]は大事[だいじ]な会議[かいぎ]なのに。", en: "He's not coming? Tomorrow is an important meeting." }
    ],
    notes:
      "Softer and more explanatory than 〜だ. In casual speech often becomes 〜ん (e.g. 〜んだ). Frequently used by women and in inquiries seeking clarification.",
    related: ["gn1-136", "gn1-137", "gn1-139"]
  },
  {
    id: "gn1-139",
    point: "〜わけ（解説）",
    reading: "wake (kaisetsu)",
    level: "N1",
    category: "Particles",
    meaning: "That is why...; it means that...; naturally...",
    structure: "V-普通形 / N + な + わけ / Na-adj + な + わけ / イAdj + わけ",
    explanation:
      "Sentence-final particle that explains, concludes, or emphasizes a logical consequence. Conveys 'that means... / naturally... / no wonder...'.",
    formation:
      "V-普通形 / N-な / Na-な / イAdj + わけ（だ / です）\n例: 来[く]るわけだ / 遅[おく]れるわけだ / 無理[むり]なわけだ",
    examples: [
      { jp: "彼[かれ]は毎日[まいにち]遅[おそ]くまで働[はたら]いている。疲[つか]れるわけだ。", en: "He works late every day. No wonder he is tired." },
      { jp: "これだけ資料[しりょう]が揃[そろ]っているなら、自信[じしん]がつくわけだ。", en: "With this much material gathered, it is only natural that one gains confidence." }
    ],
    notes:
      "Used to draw a logical conclusion or show understanding ('so that's why...'). 〜わけだ affirms a reasoned outcome. Distinct from 〜わけがない (cannot) and 〜わけにはいかない (must not).",
    related: ["gn1-103", "gn1-110", "gn1-138"]
  },

  // ───────────────────────────────────────────────────────────
  // CONJUNCTIONS — 2 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-140",
    point: "〜ように",
    reading: "you ni",
    level: "N1",
    category: "Conjunctions",
    meaning: "So that...; in order to...; like / as...",
    structure: "V-辞書形 / V-ない形 + ように / N + の + ように / Na-adj + な + ように / イAdj + ように",
    explanation:
      "Marks purpose, manner, or content of a command or wish. As purpose, indicates an action done to achieve a goal. As manner, indicates how something is or should be done.",
    formation:
      "V-辞書形 / V-ない形 + ように / N-の / Na-な / イAdj + ように\n例: 見[み]えるように / 忘[わす]れないように / 子供[こども]のように",
    examples: [
      { jp: "後[あと]で見[み]直[なお]せるように、メモを取[と]っておこう。", en: "Let's take notes so that we can review them later." },
      { jp: "彼[かれ]はまるで鳥[とり]のように空[そら]を飛[と]んでいるようだった。", en: "He looked as though he were flying through the sky like a bird." }
    ],
    notes:
      "Used for purpose, manner, or content. Often paired with verbs of effort (〜ようにする) or perception (〜ように見[み]える). For purpose, the main clause expresses an action taken toward the goal.",
    related: ["gn1-141", "gn1-142", "gn1-143"]
  },
  {
    id: "gn1-141",
    point: "〜如く",
    reading: "gotoku",
    level: "N1",
    category: "Conjunctions",
    meaning: "Like...; as...; in the manner of... (literary, kanji form)",
    structure: "N + が + 如く / V-辞書形 + 如く",
    explanation:
      "Literary, classical equivalent of 〜のように. Indicates manner or comparison. Found in classical poetry, religious, or highly formal written Japanese, often with imagery.",
    formation:
      "N + が + 如く / V-辞書形 + 如く\n例: 前[まえ]述[じゅつ]したごとく / 予期[よき]せぬ事態[じたい]にも不動[ふどう]ごとく / 計画[けいかく]のごとく",
    examples: [
      { jp: "前[まえ]述[じゅつ]したごとく、本[ほん]計画[けいかく]は来年度[らいねんど]より実施[じっし]する。", en: "As stated earlier, this plan will be implemented from the next fiscal year." },
      { jp: "彼[かれ]は予期[よき]せぬ事態[じたい]にも、不動[ふどう]ごとく立[た]ち向[む]かった。", en: "Even in an unforeseen situation, he confronted it as if immovable." }
    ],
    notes:
      "Highly literary and formal, almost exclusive to written registers such as academic, religious, or legal text. The 〜がごとく pattern is classical. Read as 'gotoku' regardless of orthography.",
    related: ["gn1-140", "gn1-142", "gn1-143"]
  },

  // ───────────────────────────────────────────────────────────
  // MODIFIERS — 9 points
  // ───────────────────────────────────────────────────────────

  {
    id: "gn1-142",
    point: "〜ごとき",
    reading: "gotoki",
    level: "N1",
    category: "Modifiers",
    meaning: "Like...; such as...; just as... (literary adnominal)",
    structure: "N + が + ごとき / N + の + ごとき / V-辞書形 + ごとき",
    explanation:
      "Literary adnominal form meaning 'like... / such as...'. Modifies a following noun. The humble form 私[わたし]ごとき is used to humbly refer to oneself.",
    formation:
      "N + が / の + ごとき / V-辞書形 + ごとき + N\n例: 私[わたし]ごとき / 前[まえ]述[じゅつ]したごとき / 夢[ゆめ]ごとき",
    examples: [
      { jp: "私[わたし]ごとき若輩[じゃくはい]が、この大役[たいやく]を務[つと]められるか不安[ふあん]だ。", en: "I am anxious whether someone as junior as myself can fulfill this great responsibility." },
      { jp: "前[まえ]述[じゅつ]したごとき事情[じじょう]により、延期[えんき]する。", en: "Due to the circumstances as described above, it will be postponed." }
    ],
    notes:
      "Formal, written-style. Used for humble self-reference (私ごとき) or to refer back to prior content. Equivalent in meaning to 〜ような but more literary.",
    related: ["gn1-141", "gn1-143", "gn1-144"]
  },
  {
    id: "gn1-143",
    point: "〜ごとく",
    reading: "gotoku",
    level: "N1",
    category: "Modifiers",
    meaning: "Like...; as...; as if... (literary adverbial)",
    structure: "N + が + ごとく / V-辞書形 + ごとく",
    explanation:
      "Literary adverbial form meaning 'like... / as...'. Modifies a following verb. Equivalent to 〜ように but in formal written register.",
    formation:
      "N + が + ごとく / V-辞書形 + ごとく + V\n例: 上述[じょうじゅつ]したごとく / 前[まえ]述[じゅつ]したごとく / 光[ひかり]のごとく",
    examples: [
      { jp: "上述[じょうじゅつ]したごとく、本件[ほんけん]は来月[らいげつ]審議[しんぎ]される。", en: "As described above, this matter will be deliberated next month." },
      { jp: "光[ひかり]のごとく速[はや]く駆[か]け抜[ぬ]けていった。", en: "He dashed away as fast as light." }
    ],
    notes:
      "The adverbial counterpart of 〜ごとき (adnominal). Both are formal, written-style equivalents of 〜ようだ forms. Common in academic, legal, and official writing.",
    related: ["gn1-140", "gn1-141", "gn1-142"]
  },
  {
    id: "gn1-144",
    point: "〜にひとしい",
    reading: "ni hitoshii",
    level: "N1",
    category: "Modifiers",
    meaning: "Is equal to...; is the same as...; is equivalent to...",
    structure: "N + に + ひとしい",
    explanation:
      "Expresses that something is equal or equivalent to a stated noun in degree, value, or meaning. Common in formal, evaluative writing.",
    formation:
      "N + にひとしい\n例: 犯罪[はんざい]にひとしい / 侮辱[ぶじょく]にひとしい / 成功[せいこう]にひとしい",
    examples: [
      { jp: "無断[むだん]で他人[たにん]の作品[さくひん]を使[つか]うのは、盗[ぬす]みにひとしい行為[こうい]だ。", en: "Using another person's work without permission is an act tantamount to theft." },
      { jp: "その発言[はつげん]は、私[わたし]に対[たい]する侮辱[ぶじょく]にひとしい。", en: "That remark is equivalent to an insult to me." }
    ],
    notes:
      "Often written in kanji as 等しい. Used in formal, evaluative statements. Suggests equivalence in nature or gravity, not strict numerical equality.",
    related: ["gn1-145", "gn1-146", "gn1-147"]
  },
  {
    id: "gn1-145",
    point: "〜に等しい",
    reading: "ni hitoshii",
    level: "N1",
    category: "Modifiers",
    meaning: "Is equal to...; amounts to...; is equivalent to...",
    structure: "N + に + 等しい",
    explanation:
      "Expresses that something amounts to or is essentially equivalent to a stated noun. Functionally identical to 〜にひとしい but more commonly written in kanji in formal contexts.",
    formation:
      "N + に等しい\n例: 拒絶[きょぜつ]に等しい / 失敗[しっぱい]に等しい / 全勝[ぜんしょう]に等しい",
    examples: [
      { jp: "彼[かれ]の態度[たいど]は、事実[じじつ]上[じょう]の拒絶[きょぜつ]に等しい。", en: "His attitude is tantamount to a de facto refusal." },
      { jp: "全試合[ぜんしあい]に勝[か]ったのは、奇跡[きせき]に等しい出来事[できごと]だ。", en: "Winning every match is an event equivalent to a miracle." }
    ],
    notes:
      "Used in formal writing to make a strong evaluative comparison. Differs subtly from 〜にひとしい in tending toward figurative equivalence (amounts to) rather than strict equality.",
    related: ["gn1-144", "gn1-146", "gn1-147"]
  },
  {
    id: "gn1-146",
    point: "〜極まりない",
    reading: "kiwamarinai",
    level: "N1",
    category: "Modifiers",
    meaning: "Extremely...; utterly...; to the utmost (negative evaluation)",
    structure: "Na-adj-語幹 / イAdj-語幹 + 極まりない",
    explanation:
      "Expresses that something is of the utmost degree, almost always used with negative evaluation. Conveys strong judgment: 'unbelievably... / to the extreme of...'.",
    formation:
      "Na-adj-語幹 / イAdj-語幹 + 極まりない\n例: 失礼[しつれい]極まりない / 危険[きけん]極まりない / 愚[おろか]極まりない",
    examples: [
      { jp: "あのような振[ふ]る舞[ま]いは、失礼[しつれい]極まりない。", en: "Such behavior is utterly rude." },
      { jp: "夜道[よるみち]を一人[ひとり]で歩[ある]くのは危険[きけん]極まりない。", en: "Walking alone on a night road is extremely dangerous." }
    ],
    notes:
      "Always used with negative evaluative adjectives. Cannot be used with positive qualities. Synonymous with 〜の極み but more critical in tone.",
    related: ["gn1-145", "gn1-147", "gn1-148"]
  },
  {
    id: "gn1-147",
    point: "〜極まる",
    reading: "kiwamaru",
    level: "N1",
    category: "Modifiers",
    meaning: "Extremely...; reaches the extreme of...",
    structure: "Na-adj-語幹 + 極まる",
    explanation:
      "Expresses that something has reached the extreme degree of a quality. Used formally and most often with negative-evaluative adjectives.",
    formation:
      "Na-adj-語幹 + 極まる\n例: 危険[きけん]極まる / 不愉快[ふゆかい]極まる / 失礼[しつれい]極まる",
    examples: [
      { jp: "そんな発言[はつげん]は無責任[むせきにん]極まる。", en: "Such a remark is utterly irresponsible." },
      { jp: "相手[あいて]を欺[あざむ]くような行為[こうい]は、不道徳[ふどうとく]極まる。", en: "An act of deceiving one's counterpart is utterly immoral." }
    ],
    notes:
      "Like 〜極まりない, mainly used with negative-evaluative adjectives. The noun form 〜の極み conveys a similar extreme, often with emotional (sometimes positive) force.",
    related: ["gn1-145", "gn1-146", "gn1-148"]
  },
  {
    id: "gn1-148",
    point: "〜まみれ",
    reading: "mamire",
    level: "N1",
    category: "Modifiers",
    meaning: "Covered in...; smeared with... (something unpleasant)",
    structure: "N（液体・汚物など） + まみれ",
    explanation:
      "Indicates that something is covered with a liquid, dirt, sweat, or other undesirable substance. Used to describe a thoroughly dirty or contaminated state.",
    formation:
      "N + まみれ\n例: 血[ち]まみれ / 汗[あせ]まみれ / 泥[どろ]まみれ",
    examples: [
      { jp: "事故[じこ]の現場[げんば]には、血[ち]まみれの衣服[いふく]が散乱[さんらん]していた。", en: "At the accident scene, bloodstained clothes were scattered about." },
      { jp: "一日中[いちにちじゅう]畑仕事[はたけしごと]をして、汗[あせ]まみれになった。", en: "After working in the fields all day, I became covered in sweat." }
    ],
    notes:
      "Used only with substances that dirty or stain: 血 (blood), 汗 (sweat), 泥 (mud), 埃 (dust). Cannot be used for pleasant things like jewelry. Compare 〜だらけ (which also covers abstract things).",
    related: ["gn1-149", "gn1-150", "gn1-146"]
  },
  {
    id: "gn1-149",
    point: "〜だらけ",
    reading: "darake",
    level: "N1",
    category: "Modifiers",
    meaning: "Covered all over with...; full of... (often undesirable)",
    structure: "N + だらけ",
    explanation:
      "Indicates that something is covered with or full of an undesirable thing, either physical (dirt, mistakes) or abstract (lies, debts). Conveys being thoroughly beset.",
    formation:
      "N + だらけ\n例: 泥[どろ]だらけ / 傷[きず]だらけ / 借金[しゃっきん]だらけ / 間違[まちが]いだらけ",
    examples: [
      { jp: "あの子供[こども]は転[ころ]んで、服[ふく]が泥[どろ]だらけになってしまった。", en: "That child fell and got his clothes covered in mud." },
      { jp: "彼[かれ]のレポートは間違[まちが]いだらけで、読[よ]む気[き]が失[うしな]われる。", en: "His report is so full of mistakes that I lose the will to read it." }
    ],
    notes:
      "Broader in scope than 〜まみれ: can be used for both physical substances (mud, scratches) and abstract nouns (mistakes, debts, lies). Always conveys a negative evaluation.",
    related: ["gn1-148", "gn1-150", "gn1-146"]
  },
  {
    id: "gn1-150",
    point: "〜めく",
    reading: "meku",
    level: "N1",
    category: "Modifiers",
    meaning: "Has a touch of...; gives an air of...; looks slightly...",
    structure: "N + めく",
    explanation:
      "Indicates that something has a touch or air of a certain quality. Conveys 'has a hint of... / shows signs of...'. Often attached to nouns denoting seasons or moods.",
    formation:
      "N + めく\n例: 春[はる]めく / 謎[なぞ]めく / 色気[いろけ]めく / 皮肉[ひにく]めく",
    examples: [
      { jp: "最近[さいきん]は日[ひ]が長[なが]くなり、すっかり春[はる]めいてきた。", en: "Recently the days have grown longer, and it has taken on a definite air of spring." },
      { jp: "彼[かれ]の言[い]い方[かた]はいつも少し皮肉[ひにく]めいている。", en: "His way of speaking always has a slightly sarcastic tinge." }
    ],
    notes:
      "Conveys a subtle or emerging quality. The て-form 〜めいて + なる / くる (e.g. 春めいてきた) is common for change. Cannot be attached to all nouns; only those with qualitative content.",
    related: ["gn1-148", "gn1-149", "gn1-142"]
  }
];
