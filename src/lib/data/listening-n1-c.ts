import type { ListeningData } from "@/lib/types";

// N1 listening exercises set C (ids l-n1-41..l-n1-60).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N1 grammar targets: 〜ずにはおかない, 〜とはいえ, 〜たところで, 〜いかんによって,
// 〜に則って, 〜たる, 〜限り, 〜次第で, 〜きらいがある, 〜が最後, 〜なしに,
// 〜いかんにかかわらず, 〜を禁じ得ない, 〜に足る, 〜を余儀なくされる,
// 〜にほかならない, 〜たりとも, 〜を俟つ, 〜ずにはいられない, etc.

export const listeningN1C: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n1-41 — A bioethics patent dispute
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-41",
    title: "Bioethics Patent Dispute",
    level: "N1",
    context: "A patent attorney and a bioethicist debate the ownership of a gene-editing patent",
    text: "A: 遺伝子[いでんし]編集[へんしゅう]技術[ぎじゅつ]の特許[とっきょ]帰属[きぞく]を巡[めぐ]る係争[けいそう]が、ついに最終審[さいしゅうしん]に至[いた]りましたね。\nB: ええ。もっとも、技術[ぎじゅつ]の独占[どくせん]を認[みと]めるがごとき裁定[さいてい]は、公共[こうきょう]の福祉[ふくし]に反[はん]するきらいがある。\nA: その点[てん]は承知[しょうち]しておりますが、投資[とうし]回収[かいしゅう]の見込[みこみ]が立[た]たなければ、研究[けんきゅう]は停滞[ていたい]を余儀[よぎ]なくされましょう。\nB: とはいえ、特許[とっきょ]の対象[たいしょう]いかんによっては、生命[せいめい]そのものの私物化[しぶつか]を招[まね]き兼[かね]ない。\nA: 誠[まこと]に。ライセンス条項[じょうこう]次第[しだい]で、発展[はってん]途上[とじょう]国[こく]への技術[ぎじゅつ]移転[いじゅん]も大幅[おおはば]に遅滞[ちたい]しかねない。\nB: 全[まった]く同感[どうかん]です。倫理[りんり]的[てき]な枠組[わくぐ]みに則[のっと]らない特許[とっきょ]制度[せいど]の運用[うんよう]は、是正[ぜせい]を迫[せま]られるべきであろう。\nA: 最終[さいしゅう]的[てき]には、双方[そうほう]が歩[あゆ]み寄[よ]る形[かたち]の裁定[さいてい]が望[のぞ]ましいと存[ぞん]じます。\nB: まさにその通[とお]り。公共[こうきょう]の利益[りえき]と発明者[はつめいしゃ]の権利[けんり]の均衡[きんこう]を図[はか]るしかありますまい。",
    translation: "A: The dispute over patent ownership of the gene-editing technology has finally reached the final hearing. B: Yes. However, a ruling that grants a monopoly on the technology tends to run counter to public welfare. A: I am aware of that point, but without a prospect of recovering investment, research would be forced into stagnation. B: That said, depending on what is patented, it could end up privatizing life itself. A: Indeed. Depending on the licensing terms, technology transfer to developing countries could also be substantially delayed. B: I completely agree. Patent system operations that do not adhere to ethical frameworks should be required to be rectified. A: Ultimately, a ruling in which both sides make concessions would be desirable. B: Exactly. We have no choice but to balance the public interest with the rights of inventors.",
    questions: [
      {
        q: "According to B, what does a ruling granting a monopoly on the technology tend to do?",
        choices: ["Halt all research", "Run counter to public welfare", "Accelerate transfer", "Boost investment"],
        answerIndex: 1,
        explanation: "B says 技術[ぎじゅつ]の独占[どくせん]を認[みと]めるがごとき裁定[さいてい]は、公共[こうきょう]の福祉[ふくし]に反[はん]するきらいがある — tends to run counter to public welfare."
      },
      {
        q: "What does A say will happen if investment recovery is not in prospect?",
        choices: ["Research will be forced into stagnation", "Patents will multiply", "Licensing will expand", "Technology will spread faster"],
        answerIndex: 0,
        explanation: "A says 投資[とうし]回収[かいしゅう]の見込[みこみ]が立[た]たなければ、研究[けんきゅう]は停滞[ていたい]を余儀[よぎ]なくされましょう — research would be forced into stagnation."
      },
      {
        q: "What does B warn could happen depending on what is patented?",
        choices: ["Faster innovation", "Privatizing life itself", "Lower costs", "Wider access"],
        answerIndex: 1,
        explanation: "B says 特許[とっきょ]の対象[たいしょう]いかんによっては、生命[せいめい]そのものの私物化[しぶつか]を招[まね]き兼[かね]ない — privatizing life itself."
      },
      {
        q: "According to A, depending on licensing terms, what could happen to developing countries?",
        choices: ["Faster transfer", "Substantial delay of technology transfer", "Higher licensing fees", "More litigation"],
        answerIndex: 1,
        explanation: "A says ライセンス条項[じょうこう]次第[しだい]で、発展[はってん]途上[とじょう]国[こく]への技術[ぎじゅつ]移転[いじゅん]も大幅[おおはば]に遅滞[ちたい]しかねない — substantial delay of transfer."
      },
      {
        q: "What does A say would be desirable as a final outcome?",
        choices: ["A clear winner", "A ruling where both sides make concessions", "An immediate verdict", "A retrial"],
        answerIndex: 1,
        explanation: "A says 双方[そうほう]が歩[あゆ]み寄[よ]る形[かたち]の裁定[さいてい]が望[のぞ]ましい — a ruling where both sides make concessions."
      }
    ],
    estMinutes: 7,
    tags: ["bioethics", "patent"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-42 — A philosophical debate on free will
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-42",
    title: "Free Will Philosophical Debate",
    level: "N1",
    context: "A philosopher and a neuroscientist debate the existence of free will",
    text: "A: 神経[しんけい]科学[かがく]の知見[ちけん]によれば、自由[じゆう]意志[いし]なるものは、所詮[しょせん]事後[じご]的[てき]な合理化[ごうりか]に過[す]ぎない、と。\nB: その通[とお]りです。とはいえ、意識[いしき]の主体[しゅたい]的[てき]な体験[たいけん]を否定[ひてい]したところで、道徳[どうとく]的[てき]な責任[せきにん]の帰属[きぞく]は立証[りっしょう]できまい。\nA: もっともです。ただ、責任[せきにん]を問[と]う制度[せいど]を維持[いじ]するためだけに、幻想[げんそう]に固執[こしつ]するのは論[ろん]理[り]的[てき]に妥当[だとう]とは言[い]えない。\nB: 全[まった]く。その意味[いみ]で、自由[じゆう]意志[いし]を概念[がいねん]的[てき]な枠組[わくぐ]みとして再定義[さいていぎ]する途[みち]が、最[もっと]も穏当[おんとう]であろう。\nA: 賛成[さんせい]します。とはいえ、概念[がいねん]の拡張[かくちょう]が、現行[げんこう]の法[ほう]体系[たいけい]に及[およ]ぼす影響[えいきょう]は看過[かんか]できない。\nB: まさにその通[とお]り。適法[てきほう]性[せい]の判定[はんてい]いかんにかかわらず、市民[しみん]の直観[ちょっかん]に反[はん]する裁定[さいてい]は、受容[じゅよう]を得[え]られまい。\nA: 最終[さいしゅう]的[てき]には、科学[かがく]と哲学[てつがく]の対話[たいわ]を深[ふか]めるなしに、この問[とい]に決着[けっちゃく]をつけることはできません。\nB: ええ。両者[りょうしゃ]が歩[あゆ]み寄[よ]らぬ限[かぎ]り、議論[ぎろん]は永遠[えいえん]に平行[へいこう]線[せん]を辿[たど]るだけでしょう。",
    translation: "A: According to neuroscience findings, free will is, after all, nothing but post-hoc rationalization. B: That is correct. However, even if we deny the subjective experience of consciousness, we could not establish the attribution of moral responsibility. A: Fair enough. Still, clinging to an illusion merely to maintain the system of accountability is not logically tenable. B: Exactly. In that sense, the path of redefining free will as a conceptual framework would be the most reasonable. A: I agree. That said, the impact that expanding the concept has on the existing legal system cannot be overlooked. B: Quite so. Regardless of how legality is judged, a ruling that contradicts citizens' intuition would not be accepted. A: Ultimately, without deepening the dialogue between science and philosophy, we cannot settle this question. B: Yes. As long as both sides fail to converge, the debate will merely trace parallel lines forever.",
    questions: [
      {
        q: "According to A, what does neuroscience say free will is?",
        choices: ["A real phenomenon", "Nothing but post-hoc rationalization", "An illusion to discard", "A moral duty"],
        answerIndex: 1,
        explanation: "A says 自由[じゆう]意志[いし]なるものは...事後[じご]的[てき]な合理化[ごうりか]に過[す]ぎない — nothing but post-hoc rationalization."
      },
      {
        q: "What does B say even denying subjective experience could not establish?",
        choices: ["Consciousness", "The attribution of moral responsibility", "Brain function", "Free will"],
        answerIndex: 1,
        explanation: "B says 意識[いしき]の主体[しゅたい]的[てき]な体験[たいけん]を否定[ひてい]したところで、道徳[どうとく]的[てき]な責任[せきにん]の帰属[きぞく]は立証[りっしょう]できまい — the attribution of moral responsibility."
      },
      {
        q: "What does A say clinging to illusion merely to maintain accountability is?",
        choices: ["Necessary", "Not logically tenable", "Ethically required", "Practically wise"],
        answerIndex: 1,
        explanation: "A says 幻想[げんそう]に固執[こしつ]するのは論[ろん]理[り]的[てき]に妥当[だとう]とは言[い]えない — not logically tenable."
      },
      {
        q: "What does B say would not be accepted regardless of how legality is judged?",
        choices: ["A scientific finding", "A ruling contradicting citizens' intuition", "A new law", "A philosophical claim"],
        answerIndex: 1,
        explanation: "B says 市民[しみん]の直観[ちょっかん]に反[はん]する裁定[さいてい]は、受容[じゅよう]を得[え]られまい — a ruling contradicting intuition."
      },
      {
        q: "What does A say we cannot do without deepening dialogue?",
        choices: ["Find truth", "Settle this question", "Maintain law", "Define consciousness"],
        answerIndex: 1,
        explanation: "A says 科学[かがく]と哲学[てつがく]の対話[たいわ]を深[ふか]めるなしに、この問[とい]に決着[けっちゃく]をつけることはできません — cannot settle the question."
      }
    ],
    estMinutes: 7,
    tags: ["philosophy", "neuroscience"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-43 — A post-colonial literature symposium
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-43",
    title: "Post-Colonial Literature Symposium",
    level: "N1",
    context: "A literary critic and a post-colonial scholar debate reading frameworks",
    text: "A: ポスト植民[しょくみん]地[ち]文学[ぶんがく]を論[ろん]ずる際[さい]、西洋[せいよう]的[てき]な美学[びがく]の基準[きじゅん]を無[む]批判[ひはん]に適用[てきよう]するきらいがある。\nB: 全[まった]く同感[どうかん]です。その文脈[ぶんみゃく]において、テキストの自律[じりつ]性[せい]を過度[かど]に強調[きょうちょう]すれば、歴史的[れきしてき]な権力[けんりょく]関係[かんけい]は隠蔽[いんぺい]されかねない。\nA: とはいえ、政治[せいじ]的[てき]な読解[どっかい]に偏[かたよ]ったが最後[さいご]、文学[ぶんがく]固有[こゆう]の美[び]を見失[みうしな]う恐[おそ]れがある。\nB: ええ。だからこそ、複数[ふくすう]の枠組[わくぐ]みを並行[へいこう]させつつ、読解[どっかい]の多層性[たそうせい]を担保[たんぽ]する必要[ひつよう]がある。\nA: 賛成[さんせい]します。読者[どくしゃ]の立場[たちば]いかんによって、同[おな]じ作品[さくひん]も異[こと]なる相貌[そうぼう]を呈[てい]する点[てん]こそ、文学[ぶんがく]の豊饒[ほうじょう]さにほかなりません。\nB: まさにその通[とお]り。また、翻訳[ほんやく]を介[かい]した受容[じゅよう]過程[かてい]も、新[あたら]たな意味[いみ]の生成[せいせい]を伴[ともな]うことを忘[わす]れてはならない。\nA: 最終[さいしゅう]的[てき]には、多様[たよう]な声[こえ]に耳[みみ]を傾[かたむ]ける姿勢[しせい]なしに、この分野[ぶんや]の探究[たんきゅう]は成[な]り立[た]たないと言[い]える。\nB: その通[とお]り。対話[たいわ]の扉[とびら]を開[ひら]き続[つづ]けることこそが、我[わ]れの務[つと]めです。",
    translation: "A: When discussing post-colonial literature, there is a tendency to uncritically apply Western aesthetic standards. B: I completely agree. In that context, if one overemphasizes the autonomy of the text, historical power relations could end up concealed. A: That said, once one is biased toward political readings, there is a risk of losing sight of literature's inherent beauty. B: Yes. That is precisely why multiple frameworks must be kept in parallel to guarantee the multilayeredness of interpretation. A: I agree. It is precisely the fact that depending on the reader's standpoint, even the same work takes on a different appearance, that constitutes the richness of literature. B: Exactly. Also, we must not forget that the process of reception mediated by translation also involves the generation of new meanings. A: Ultimately, without a posture of lending an ear to diverse voices, inquiry in this field cannot stand. B: True. It is precisely continuing to keep the door of dialogue open that is our duty.",
    questions: [
      {
        q: "What does A say there is a tendency to do when discussing post-colonial literature?",
        choices: ["Reject Western standards", "Uncritically apply Western aesthetic standards", "Translate everything", "Ignore political readings"],
        answerIndex: 1,
        explanation: "A says 西洋[せいよう]的[てき]な美学[びがく]の基準[きじゅん]を無[む]批判[ひはん]に適用[てきよう]するきらいがある — tends to uncritically apply Western aesthetic standards."
      },
      {
        q: "What does B warn overemphasizing the autonomy of the text could do?",
        choices: ["Reveal power relations", "Conceal historical power relations", "Improve readings", "Spread translations"],
        answerIndex: 1,
        explanation: "B says テキストの自律[じりつ]性[せい]を過度[かど]に強調[きょうちょう]すれば、歴史的[れきしてき]な権力[けんりょく]関係[かんけい]は隠蔽[いんぺい]されかねない — could conceal historical power relations."
      },
      {
        q: "What does A warn happens once one is biased toward political readings?",
        choices: ["Better understanding", "Losing sight of literature's inherent beauty", "Faster translations", "Wider readership"],
        answerIndex: 1,
        explanation: "A says 政治[せいじ]的[てき]な読解[どっかい]に偏[かたよ]ったが最後[さいご]、文学[ぶんがく]固有[こゆう]の美[び]を見失[みうしな]う恐[おそ]れがある — risk of losing sight of inherent beauty."
      },
      {
        q: "What does A call the richness of literature?",
        choices: ["Single interpretation", "That the same work takes on different appearances depending on standpoint", "Universal standards", "Pure autonomy"],
        answerIndex: 1,
        explanation: "A says 読者[どくしゃ]の立場[たちば]いかんによって、同[おな]じ作品[さくひん]も異[こと]なる相貌[そうぼう]を呈[てい]する点[てん]こそ、文学[ぶんがく]の豊饒[ほうじょう]さ — the same work takes on different appearances."
      },
      {
        q: "What does A say inquiry in this field cannot do without?",
        choices: ["Western standards", "A posture of lending an ear to diverse voices", "Single reading", "Pure aesthetics"],
        answerIndex: 1,
        explanation: "A says 多様[たよう]な声[こえ]に耳[みみ]を傾[かたむ]ける姿勢[しせい]なしに、この分野[ぶんや]の探究[たんきゅう]は成[な]り立[た]たない — without lending an ear to diverse voices."
      }
    ],
    estMinutes: 6,
    tags: ["literature", "postcolonial"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-44 — A quantum computing ethics panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-44",
    title: "Quantum Computing Ethics Panel",
    level: "N1",
    context: "A physicist and a cybersecurity ethicist discuss post-quantum transition",
    text: "A: 量子[りょうし]コンピューティングの実用[じつよう]化[か]が迫[せま]る中[なか]、既存[きぞん]の暗号[あんごう]方式[ほうしき]の壊滅[かいめつ]を招[まね]くことなしに、移行[いこう]を進[すす]めることは可能[かのう]か。\nB: 困難[こんなん]を極[きわ]めますが、ポスト量子[りょうし]暗号[あんごう]への移行[いこう]いかんによっては、最深[さいしん]部[ぶ]の衝撃[しょうげき]は回避[かいひ]できるでしょう。\nA: とはいえ、技術[ぎじゅつ]的[てき]な優位[ゆうい]が一部[いちぶ]の国[くに]に集中[しゅうちゅう]すれば、新[あたら]たな不均衡[ふきんこう]を生[しょう]じずにはおかない。\nB: 全[まった]く同感[どうかん]です。開発[かいはつ]の透明性[とうめいせい]を欠[か]けば、国際[こくさい]社会[しゃかい]の信頼[しんらい]は地[じ]に落[お]ちる恐[おそ]れがある。\nA: 誠[まこと]に。とはいえ、国家[こっか]安全[あんぜん]保障[ほしょう]の観点[かんてん]からは、技術[ぎじゅつ]の全面[ぜんめん]的[てき]な公開[こうかい]は現実[げんじつ]的[てき]でない。\nB: その通[とお]り。であればこそ、監視[かんし]のための多国間[たこくかん]枠組[わくぐ]みを構築[こうちく]するしかありますまい。\nA: 最終[さいしゅう]的[てき]には、競争[きょうそう]と協調[きょうちょう]の均衡[きんこう]を図[はか]る仕組[しく]み次第[しだい]で、未来[みらい]は大[おお]きく変[か]わるでしょう。\nB: ええ。倫理[りんり]的[てき]な指針[しせん]に則[のっと]った開発[かいはつ]体制[たいせい]を整備[せいび]することが急務[きゅうむ]です。",
    translation: "A: As the practical application of quantum computing approaches, is it possible to advance the transition without causing the destruction of existing cryptographic schemes? B: It is extremely difficult, but depending on the transition to post-quantum cryptography, the deepest impacts can be avoided. A: That said, if technological advantage concentrates in a few nations, it will inevitably produce new imbalances. B: I completely agree. If development lacks transparency, the international community's trust risks falling to the ground. A: Indeed. However, from a national security standpoint, full disclosure of the technology is not realistic. B: True. Precisely for that reason, we have no choice but to build a multilateral framework for monitoring. A: Ultimately, depending on a mechanism that balances competition and coordination, the future will change significantly. B: Yes. Establishing a development regime guided by ethical principles is an urgent task.",
    questions: [
      {
        q: "What does A ask is possible to advance the transition without?",
        choices: ["Faster computing", "Destruction of existing cryptographic schemes", "New algorithms", "More investment"],
        answerIndex: 1,
        explanation: "A says 既存[きぞん]の暗号[あんごう]方式[ほうしき]の壊滅[かいめつ]を招[まね]くことなしに — without causing destruction of existing cryptographic schemes."
      },
      {
        q: "What does B say depends on the transition to post-quantum cryptography?",
        choices: ["Faster computing", "Avoidance of the deepest impacts", "More investment", "National security"],
        answerIndex: 1,
        explanation: "B says ポスト量子[りょうし]暗号[あんごう]への移行[いこう]いかんによっては、最深[さいしん]部[ぶ]の衝撃[しょうげき]は回避[かいひ]できる — avoidance of deepest impacts."
      },
      {
        q: "What does A say concentrating technological advantage in a few nations will inevitably produce?",
        choices: ["Cooperation", "New imbalances", "Faster progress", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 新[あたら]たな不均衡[ふきんこう]を生[しょう]じずにはおかない — inevitably produces new imbalances."
      },
      {
        q: "What does B say is at risk if development lacks transparency?",
        choices: ["Funding", "The international community's trust", "Investment", "Speed"],
        answerIndex: 1,
        explanation: "B says 開発[かいはつ]の透明性[とうめいせい]を欠[か]けば、国際[こくさい]社会[しゃかい]の信頼[しんらい]は地[じ]に落[お]ちる — international community's trust falls."
      },
      {
        q: "What does B say is an urgent task?",
        choices: ["Speeding development", "Establishing a development regime guided by ethical principles", "Lowering costs", "Increasing computing power"],
        answerIndex: 1,
        explanation: "B says 倫理[りんり]的[てき]な指針[しせん]に則[のっと]った開発[かいはつ]体制[たいせい]を整備[せいび]することが急務[きゅうむ] — establishing an ethically guided development regime is urgent."
      }
    ],
    estMinutes: 7,
    tags: ["quantum", "cybersecurity"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-45 — A diplomatic history lecture
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-45",
    title: "Diplomatic History Lecture",
    level: "N1",
    context: "A diplomatic historian lectures a student on Cold War structures",
    text: "A: 第二[だいに]次[じ]大戦[たいせん]後[ご]の冷戦[れいせん]構造[こうぞう]を理解[りかい]するには、ヤルタ会談[かいだん]の文脈[ぶんみゃく]を外[はず]すわけにはいかない。\nB: 先生[せんせい]、もっともですが、その後[ご]の米[べい]ソ対立[たいりつ]を決定[けってい]づけたのは、経済[けいざい]的[てき]な要因[よういん]ではなかったでしょうか。\nA: 一理[いちり]あります。とはいえ、意識[いしき]形態[けいたい]の対立[たいりつ]を軽視[けいし]したところで、冷戦[れいせん]の全体像[ぜんたいぞう]は見[み]えない。\nB: なるほど。そうなれば、覇権[はけん]主義[しゅぎ]とイデオロギーが相互[そうご]に強化[きょうか]し合[あ]う構造[こうぞう]を想定[そうてい]すべきですね。\nA: その通[とお]り。史料[しりょう]を精査[せいさ]する限[かぎ]り、両者[りょうしゃ]は不可分[ふかぶん]に結[むす]びついていたと言[い]わざるを得[え]ない。\nB: 加[くわ]えて、第三[だいさん]世界[せかい]の位置[いち]づけも、構造[こうぞう]の理解[りかい]に欠[か]かせない要素[ようそ]かと。\nA: 全[まった]く。非[ひ]同盟[どうめい]諸国[しょこく]の戦略[せんりゃく]次第[しだい]で、超大国[ちょうたいこく]の影響力[えいきょうりょく]も大[おお]きく揺[ゆ]らいだ。\nB: 史観[しかん]の枠[わく]を一[ひと]つに固定[こてい]するなく、複眼[ふくがん]的[てき]に捉[とら]えることが不可欠[ふかけつ]ですね。\nA: まさに。歴史[れきし]は単一[たんいつ]の物語[ものがたり]に還元[かんげん]できるものではないのです。",
    translation: "A: To understand the post-WWII Cold War structure, one cannot leave out the Yalta Conference context. B: Professor, true enough, but wasn't it economic factors that determined the subsequent US-Soviet confrontation? A: There is something to that. However, even if one were to downplay the ideological confrontation, the overall picture of the Cold War would remain invisible. B: I see. In that case, we should posit a structure where hegemonism and ideology mutually reinforce each other. A: Precisely. As far as one scrutinizes the historical sources, one must say the two were inextricably linked. B: Additionally, the positioning of the Third World seems to be an indispensable element for understanding the structure. A: Absolutely. Depending on the strategy of the non-aligned nations, the superpowers' influence also swayed significantly. B: Without fixing the framework of historical view to one, multi-perspective capture is indispensable. A: Exactly. History is not something that can be reduced to a single narrative.",
    questions: [
      {
        q: "What does A say one cannot leave out to understand the Cold War structure?",
        choices: ["Economic factors", "The Yalta Conference context", "US-Soviet tensions", "Military strength"],
        answerIndex: 1,
        explanation: "A says ヤルタ会談[かいだん]の文脈[ぶんみゃく]を外[はず]すわけにはいかない — cannot leave out the Yalta Conference context."
      },
      {
        q: "What does A say would remain invisible even if one downplayed ideological confrontation?",
        choices: ["Economic causes", "The overall picture of the Cold War", "Yalta records", "Military data"],
        answerIndex: 1,
        explanation: "A says 意識[いしき]形態[けいたい]の対立[たいりつ]を軽視[けいし]したところで、冷戦[れいせん]の全体像[ぜんたいぞう]は見[み]えない — the overall picture."
      },
      {
        q: "What does A say the historical sources show about hegemonism and ideology?",
        choices: ["They are unrelated", "They were inextricably linked", "They competed", "They were secondary"],
        answerIndex: 1,
        explanation: "A says 両者[りょうしゃ]は不可分[ふかぶん]に結[むす]びついていたと言[い]わざるを得[え]ない — inextricably linked."
      },
      {
        q: "What does B say is an indispensable element for understanding the structure?",
        choices: ["Yalta records", "The Third World's positioning", "Economic data", "Ideological texts"],
        answerIndex: 1,
        explanation: "B says 第三[だいさん]世界[せかい]の位置[いち]づけも...理解[りかい]に欠[か]かせない要素[ようそ] — the Third World's positioning."
      },
      {
        q: "What does A say is not reducible to a single narrative?",
        choices: ["The Cold War", "History", "Yalta", "Economics"],
        answerIndex: 1,
        explanation: "A says 歴史[れきし]は単一[たんいつ]の物語[ものがたり]に還元[かんげん]できるものではない — history."
      }
    ],
    estMinutes: 6,
    tags: ["history", "diplomacy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-46 — A social inequality forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-46",
    title: "Social Inequality Forum",
    level: "N1",
    context: "A sociologist and a policy researcher debate redistribution policy",
    text: "A: 格差[かくさ]の拡大[かくだい]が社会[しゃかい]の流動性[りゅうどうせい]を損[そこ]なうとの指摘[してき]は、看過[かんか]できない。\nB: ええ。もっとも、再分配[さいぶんぱい]政策[せいさく]の設計[せっけい]いかんによっては、労働[ろうどう]意欲[いよく]を削[そ]ぎかねないとの懸念[けねん]もある。\nA: その通[とお]り。とはいえ、機会[きかい]の不平等[ふびょうどう]を放置[ほうち]したが最後[さいご]、階層[かいそう]の固定[こてい]化[か]は避[さ]けられない。\nB: 全[まった]く同感[どうかん]です。教育[きょういく]への投資[とうし]こそが、世代[せだい]間[かん]移転[いてん]を断[たん]絶[ぜつ]させる最[もっと]も有効[ゆうこう]な手段[しゅだん]であろう。\nA: 賛成[さんせい]します。もっとも、地域[ちいき]格差[かくさ]を念頭[ねんとう]に置[お]かない限[かぎ]り、施策[しさく]の効果[こうか]も限[かぎ]定的[てき]なものに留[とど]まる。\nB: まさにその通[とお]り。地元[じもと]の文脈[ぶんみゃく]に即[そく]した制度[せいど]設計[せっけい]次第[しだい]で、成果[せいか]は大[おお]きく異[こと]なる。\nA: 一方[いっぽう]で、富裕[ふゆう]層[そう]への課税[かぜい]を強[つよ]めるあまり、資本[しほん]の流出[りゅうしゅつ]を招[まね]くことのないよう留意[りゅうい]すべきだ。\nB: 誠[まこと]に。多様[たよう]な政策[せいさく]手段[しゅだん]を並行[へいこう]させつつ、長期[ちょうき]的[てき]な視点[してん]を持[も]つしかありますまい。",
    translation: "A: The observation that widening inequality harms social mobility cannot be overlooked. B: Yes. However, depending on the design of redistribution policies, there is concern that it could erode work motivation. A: True. That said, once one leaves inequality of opportunity unaddressed, the freezing of social strata is unavoidable. B: I completely agree. Investment in education is the most effective means of severing intergenerational transmission. A: I agree. However, unless one keeps regional disparities in mind, the effects of the measures will remain limited. B: Exactly so. Depending on institutional design tailored to local context, the outcomes differ greatly. A: On the other hand, one should be careful not to overtax the wealthy to the point of triggering capital flight. B: Indeed. We have no choice but to pursue multiple policy tools in parallel while maintaining a long-term perspective.",
    questions: [
      {
        q: "What does A say cannot be overlooked?",
        choices: ["That inequality harms social mobility", "That taxes are too high", "That wages are falling", "That investment is rising"],
        answerIndex: 0,
        explanation: "A says 格差[かくさ]の拡大[かくだい]が社会[しゃかい]の流動性[りゅうどうせい]を損[そこ]なうとの指摘[してき]は、看過[かんか]できない — that inequality harms social mobility."
      },
      {
        q: "What does B worry might happen depending on redistribution policy design?",
        choices: ["Higher growth", "Erosion of work motivation", "More investment", "Lower unemployment"],
        answerIndex: 1,
        explanation: "B says 再分配[さいぶんぱい]政策[せいさく]の設計[せっけい]いかんによっては、労働[ろうどう]意欲[いよく]を削[そ]ぎかねない — could erode work motivation."
      },
      {
        q: "What does A say is unavoidable once inequality of opportunity is left unaddressed?",
        choices: ["Economic growth", "Freezing of social strata", "Higher wages", "Lower taxes"],
        answerIndex: 1,
        explanation: "A says 機会[きかい]の不平等[ふびょうどう]を放置[ほうち]したが最後[さいご]、階層[かいそう]の固定[こてい]化[か]は避[さ]けられない — freezing of social strata."
      },
      {
        q: "What does B call the most effective means of severing intergenerational transmission?",
        choices: ["Tax hikes", "Investment in education", "Wealth redistribution", "Capital controls"],
        answerIndex: 1,
        explanation: "B says 教育[きょういく]への投資[とうし]こそが、世代[せだい]間[かん]移転[いてん]を断[たん]絶[ぜつ]させる最[もっと]も有効[ゆうこう]な手段[しゅだん] — investment in education."
      },
      {
        q: "What does A warn should be avoided when taxing the wealthy?",
        choices: ["Higher growth", "Triggering capital flight", "Lower revenue", "More inequality"],
        answerIndex: 1,
        explanation: "A says 富裕[ふゆう]層[そう]への課税[かぜい]を強[つよ]めるあまり、資本[しほん]の流出[りゅうしゅつ]を招[まね]くことのないよう — avoid triggering capital flight."
      }
    ],
    estMinutes: 7,
    tags: ["society", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-47 — A nuclear disarmament debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-47",
    title: "Nuclear Disarmament Debate",
    level: "N1",
    context: "A disarmament diplomat and a defense strategist debate the nuclear ban treaty",
    text: "A: 核[かく]兵器[へいき]禁止[きんし]条約[じょうやく]に加盟[かめい]しない限[かぎ]り、我[わ]が国[くに]の立場[たちば]は国際[こくさい]社会[しゃかい]に理解[りかい]されまい。\nB: もっともです。ただ、抑止[よくし]力[りょく]としての核[かく]の役割[やくわり]を否定[ひてい]したところで、現実[げんじつ]の安全保障[あんぜんほしょう]の空白[くうはく]は埋[うず]まらない。\nA: その通[とお]り。とはいえ、非[ひ]人道[じんどう]的[てき]な兵器[へいき]に依存[いぞん]するがごとき現状[げんじょう]は、長期[ちょうき]的[てき]に持続[じぞく]可能[かのう]ではない。\nB: 全[まった]く。段階[だんかい]的[てき]な削減[さくげん]を図[はか]りつつ、代替[だいたい]の抑止[よくし]体制[たいせい]を構築[こうちく]するしかありますまい。\nA: 賛成[さんせい]します。その際[さい]、透明性[とうめいせい]の措置[そち]いかんにかかわらず、検証[けんしょう]可能[かのう]な枠組[わくぐ]みが不可欠[ふかけつ]です。\nB: まさに。相互[そうご]不信[ふしん]を払拭[ふっしょく]するなしに、削減[さくげん]の実効[じっこう]性[せい]は担保[たんぽ]できません。\nA: 最終[さいしゅう]的[てき]には、核[かく]の傘[かさ]に頼[たよ]ることなしに、自立[じりつ]した安全保障[あんぜんほしょう]を模索[もさく]すべき時[とき]に来[き]ている。\nB: 一理[いちり]ありますが、それは同盟[どうめい]関係[かんけい]の根本[こんぽん]的[てき]な見直[みなお]しを余儀[よぎ]なくするでしょう。",
    translation: "A: Unless we join the nuclear weapons prohibition treaty, our country's position will not be understood by the international community. B: Fair point. However, even if we deny the role of nuclear weapons as deterrent, the gap in real security will not be filled. A: True. That said, the current situation of depending on inhumane weapons is not sustainable in the long term. B: Exactly. We have no choice but to pursue gradual reduction while constructing alternative deterrent frameworks. A: I agree. At that time, regardless of transparency measures, a verifiable framework is indispensable. B: Precisely. Without dispelling mutual mistrust, the effectiveness of reduction cannot be guaranteed. A: Ultimately, the time has come to explore an autonomous security that does not rely on the nuclear umbrella. B: There is something to that, but it would force a fundamental review of alliance relationships.",
    questions: [
      {
        q: "What does A say will not happen unless the country joins the nuclear ban treaty?",
        choices: ["More alliances", "International understanding of the country's position", "Faster disarmament", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 核[かく]兵器[へいき]禁止[きんし]条約[じょうやく]に加盟[かめい]しない限[かぎ]り、我[わ]が国[くに]の立場[たちば]は国際[こくさい]社会[しゃかい]に理解[りかい]されまい — international understanding won't happen."
      },
      {
        q: "What does B say denying nuclear weapons' deterrent role won't fill?",
        choices: ["More weapons", "The gap in real security", "Alliances", "Verification gaps"],
        answerIndex: 1,
        explanation: "B says 抑止[よくし]力[りょく]としての核[かく]の役割[やくわり]を否定[ひてい]したところで、現実[げんじつ]の安全保障[あんぜんほしょう]の空白[くうはく]は埋[うず]まらない — the gap in real security."
      },
      {
        q: "What does A say the current situation of depending on inhumane weapons is?",
        choices: ["Necessary", "Not sustainable in the long term", "Strategic", "Effective"],
        answerIndex: 1,
        explanation: "A says 非[ひ]人道[じんどう]的[てき]な兵器[へいき]に依存[いぞん]するがごとき現状[げんじょう]は、長期[ちょうき]的[てき]に持続[じぞく]可能[かのう]ではない — not sustainable long-term."
      },
      {
        q: "What does A say is indispensable regardless of transparency measures?",
        choices: ["More weapons", "A verifiable framework", "Faster reduction", "Alliances"],
        answerIndex: 1,
        explanation: "A says 透明性[とうめいせい]の措置[そち]いかんにかかわらず、検証[けんしょう]可能[かのう]な枠組[わくぐ]みが不可欠[ふかけつ] — a verifiable framework."
      },
      {
        q: "What does B warn would happen if exploring autonomous security?",
        choices: ["Faster disarmament", "It would force a fundamental review of alliances", "Lower costs", "More alliances"],
        answerIndex: 1,
        explanation: "B says 同盟[どうめい]関係[かんけい]の根本[こんぽん]的[てき]な見直[みなお]しを余儀[よぎ]なくする — fundamental review of alliances."
      }
    ],
    estMinutes: 7,
    tags: ["disarmament", "security"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-48 — An AI art copyright case
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-48",
    title: "AI Art Copyright Case",
    level: "N1",
    context: "A copyright lawyer and a digital artist debate copyright for AI works",
    text: "A: 生成[せいせい]AI[エーアイ]が創出[そうしゅつ]した作品[さくひん]の著作権[ちょさくけん]帰属[きぞく]について、既存[きぞん]の法[ほう]体系[たいけい]は明確[めいかく]な回答[かいとう]を欠[か]いている。\nB: その通[とお]り。もっとも、人間[にんげん]の創造[そうぞう]性[せい]を絶対[ぜったい]化[か]したところで、技術[ぎじゅつ]の進化[しんか]に追[お]いつくことはできまい。\nA: 一理[いちり]あります。ただ、学習[がくしゅう]データに無[む]断[だん]で使用[しよう]された作家[さっか]の権利[けんり]を看過[かんか]するわけにはいかない。\nB: 全[まった]く。その意味[いみ]で、オプトアウトの仕組[しく]みを整備[せいび]するなしに、倫理[りんり]的[てき]な合意[ごうい]は形成[けいせい]されないでしょう。\nA: 賛成[さんせい]します。とはいえ、過度[かど]な規制[きせい]は、表現[ひょうげん]の自由[じゆう]を損[そこ]ないかねないとの懸念[けねん]もある。\nB: ええ。最終[さいしゅう]的[てき]には、技術[ぎじゅつ]の特性[とくせい]に即[そく]した新[あたら]たな法[ほう]的[てき]枠組[わくぐ]みが求[もと]められる。\nA: まさに。判例[はんれい]の蓄積[ちくせき]いかんによって、業界[ぎょうかい]の慣行[かんこう]も大[おお]きく変容[へんよう]するでしょう。\nB: 同感[どうかん]です。当事者[とうじしゃ]間[かん]の対話[たいわ]と、法[ほう]制度[せいど]の見直[みなお]しを並行[へいこう]させるしかありません。",
    translation: "A: Regarding the attribution of copyright for works created by generative AI, the existing legal system lacks a clear answer. B: True. However, even if one absolutizes human creativity, one cannot keep up with the evolution of technology. A: There is something to that. Still, one cannot overlook the rights of authors whose works have been used without consent in training data. B: Exactly. In that sense, without establishing an opt-out mechanism, an ethical consensus would not be formed. A: I agree. That said, there is also concern that excessive regulation could undermine freedom of expression. B: Yes. Ultimately, a new legal framework tailored to the technology's characteristics is needed. A: Precisely. Depending on the accumulation of case law, industry practices will also change significantly. B: I agree. We have no choice but to pursue dialogue between stakeholders and review of the legal system in parallel.",
    questions: [
      {
        q: "What does A say the existing legal system lacks regarding AI-generated works?",
        choices: ["Funding", "A clear answer on copyright attribution", "Standards", "Jurisdiction"],
        answerIndex: 1,
        explanation: "A says 既存[きぞん]の法[ほう]体系[たいけい]は明確[めいかく]な回答[かいとう]を欠[か]いている — lacks a clear answer on copyright attribution."
      },
      {
        q: "What does B say absolutizing human creativity won't do?",
        choices: ["Improve quality", "Keep up with technological evolution", "Lower costs", "Increase rights"],
        answerIndex: 1,
        explanation: "B says 人間[にんげん]の創造[そうぞう]性[せい]を絶対[ぜったい]化[か]したところで、技術[ぎじゅつ]の進化[しんか]に追[お]いつくことはできまい — cannot keep up with technology's evolution."
      },
      {
        q: "What does A say cannot be overlooked?",
        choices: ["Industry profits", "The rights of authors whose works were used without consent", "Platform costs", "AI quality"],
        answerIndex: 1,
        explanation: "A says 学習[がくしゅう]データに無[む]断[だん]で使用[しよう]された作家[さっか]の権利[けんり]を看過[かんか]するわけにはいかない — authors' rights."
      },
      {
        q: "What does B say is necessary without which ethical consensus won't form?",
        choices: ["More funding", "An opt-out mechanism", "Faster AI", "Lower costs"],
        answerIndex: 1,
        explanation: "B says オプトアウトの仕組[しく]みを整備[せいび]するなしに、倫理[りんり]的[てき]な合意[ごうい]は形成[けいせい]されない — an opt-out mechanism."
      },
      {
        q: "What does A say industry practices depend on?",
        choices: ["New AI models", "The accumulation of case law", "More funding", "Public opinion"],
        answerIndex: 1,
        explanation: "A says 判例[はんれい]の蓄積[ちくせき]いかんによって、業界[ぎょうかい]の慣行[かんこう]も大[おお]きく変容[へんよう]する — accumulation of case law."
      }
    ],
    estMinutes: 6,
    tags: ["copyright", "AI"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-49 — A medical malpractice hearing
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-49",
    title: "Medical Malpractice Hearing",
    level: "N1",
    context: "A medical board examiner questions a defendant physician",
    text: "A: 術前[じゅつぜん]のインフォームド・コンセントが不十分[ふじゅうぶん]であったとの指摘[してき]については、如何[いか]なる見解[けんかい]か。\nB: もっともなご指摘[してき]です。ただ、当時[とうじ]の患者[かんじゃ]の容態[ようだい]が切迫[せっぱく]していた限[かぎ]り、十分[じゅうぶん]な説明[せつめい]の時間[じかん]を確保[かくほ]するのは困難[こんなん]を極[きわ]めました。\nA: とはいえ、リスクの開示[かいじ]を怠[おこた]ったが最後[さいご]、結果[けっか]論[ろん]であれ、過失[かしつ]を問[と]わずにはおかない。\nB: 全[まった]くその通[とお]りです。反省[はんせい]の念[ねん]に堪[た]えません。\nA: 加[くわ]えて、術後[じゅつご]の経過[けいか]観察[かんさつ]の不備[ふび]も、組織[そしき]的[てき]な問題[もんだい]を露呈[ろてい]していると言[い]わざるを得[え]ない。\nB: 申[もう]し訳[わけ]ございません。施設[しせつ]の体制[たいせい]いかんにかかわらず、主治医[しゅじい]としての責任[せきにん]は免[まぬか]れません。\nA: その点[てん]は評価[ひょうか]する。もっとも、再発[さいはつ]防止[ぼうし]策[さく]の具体性[ぐたいせい]に欠[か]ける限[かぎ]り、処分[しょぶん]の軽減[けいげん]は認[みと]められない。\nB: 承知[しょうち]いたしました。三[さん]か月[げつ]以内[いない]に、検証[けんしょう]委員[いいん]会[かい]を立[た]ち上[あ]げ、再発[さいはつ]防止[ぼうし]のガイドラインを策定[さくてい]します。\nA: その実効[じっこう]性[せい]如何[いか]によって、最終[さいしゅう]的[てき]な処分[しょぶん]の重[おも]さも決[き]まるだろう。",
    translation: "A: What is your view on the point that preoperative informed consent was insufficient? B: That is a fair point. However, given that the patient's condition was urgent at the time, securing sufficient time for explanation was extremely difficult. A: That said, once you neglect the disclosure of risks, even as a retrospective judgment, negligence cannot help but be pursued. B: Quite so. I am filled with deep remorse. A: In addition, I must say that the inadequacy of postoperative follow-up observation also exposes a systemic problem. B: I apologize. Regardless of the facility's setup, I cannot be exempt from responsibility as the attending physician. A: I appreciate that point. However, as long as recurrence prevention measures lack concreteness, a reduction of penalties cannot be recognized. B: Understood. Within three months, I will launch a verification committee and formulate recurrence prevention guidelines. A: Depending on the effectiveness thereof, the severity of the final penalty will also be determined.",
    questions: [
      {
        q: "What does A ask the defendant's view on?",
        choices: ["Postoperative care", "Insufficient preoperative informed consent", "Hospital funding", "Patient records"],
        answerIndex: 1,
        explanation: "A asks about 術前[じゅつぜん]のインフォームド・コンセントが不十分[ふじゅうぶん]であったとの指摘[してき] — insufficient preoperative informed consent."
      },
      {
        q: "What does B say was extremely difficult given the patient's urgent condition?",
        choices: ["Surgery itself", "Securing sufficient time for explanation", "Postoperative care", "Diagnosis"],
        answerIndex: 1,
        explanation: "B says 十分[じゅうぶん]な説明[せつめい]の時間[じかん]を確保[かくほ]するのは困難[こんなん]を極[きわ]めました — securing sufficient explanation time was extremely difficult."
      },
      {
        q: "What does A say will inevitably be pursued once risks aren't disclosed?",
        choices: ["Higher costs", "Negligence", "Better care", "Faster recovery"],
        answerIndex: 1,
        explanation: "A says リスクの開示[かいじ]を怠[おこた]ったが最後[さいご]、結果[けっか]論[ろん]であれ、過失[かしつ]を問[と]わずにはおかない — negligence will inevitably be pursued."
      },
      {
        q: "What does A say cannot be recognized without concreteness in prevention measures?",
        choices: ["License renewal", "Reduction of penalties", "Higher salary", "Faster trial"],
        answerIndex: 1,
        explanation: "A says 再発[さいはつ]防止[ぼうし]策[さく]の具体性[ぐたいせい]に欠[か]ける限[かぎ]り、処分[しょぶん]の軽減[けいげん]は認[みと]められない — reduction of penalties."
      },
      {
        q: "What does A say will determine the severity of the final penalty?",
        choices: ["Public opinion", "The effectiveness of the prevention measures", "Hospital funding", "Patient recovery"],
        answerIndex: 1,
        explanation: "A says その実効[じっこう]性[せい]如何[いか]によって、最終[さいしゅう]的[てき]な処分[しょぶん]の重[おも]さも決[き]まる — the effectiveness of the measures."
      }
    ],
    estMinutes: 7,
    tags: ["medical", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-50 — A linguistic relativity seminar
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-50",
    title: "Linguistic Relativity Seminar",
    level: "N1",
    context: "A linguist and a cognitive scientist debate the Sapir-Whorf hypothesis",
    text: "A: サピア・ウォーフの仮説[かせつ]を極端[きょくたん]に解釈[かいしゃく]したところで、言語[げんご]が思考[しこう]を完全[かんぜん]に決定[けってい]づけるとの主張[しゅちょう]は成[な]り立[た]たない。\nB: 全[まった]く同感[どうかん]です。もっとも、特定[とくてい]の文法[ぶんぽう]範疇[はんちゅう]が認知[にんち]の傾向[けいこう]に影響[えいきょう]を及[およ]ぼすとの実証[じっしょう]は、看過[かんか]できない。\nA: その通[とお]り。ただ、文化[ぶんか]の変数[へんすう]を統制[とうせい]しない限[かぎ]り、因果[いんが]関係[かんけい]の特定[とくてい]は困難[こんなん]を極[きわ]める。\nB: まさに。また、双方向[そうほうこう]性[せい]を前提[ぜんてい]に置[お]かねば、言語[げんご]と思考[しこう]の相互作用[そうごさよう]は過小[かしょう]評価[ひょうか]されかねない。\nA: 賛成[さんせい]します。研究[けんきゅう]の設計[せっけい]いかんによって、結論[けつろん]が正反対[せいはんたい]になる例[れい]も少[すく]なくない。\nB: ええ。複数[ふくすう]の言語[げんご]を比較[ひかく]するなしに、普遍性[ふへんせい]と相対性[そうたいせい]の境界[きょうかい]を画[かく]すことはできまい。\nA: まさにその通[とお]り。最終[さいしゅう]的[てき]には、データの蓄積[ちくせき]と理論[りろん]の洗練[せんれん]を並行[へいこう]させるしかありません。\nB: 同感[どうかん]です。現象[げんしょう]の複雑性[ふくざつせい]に則[のっと]った、謙虚[けんきょ]な姿勢[しせい]が求[もと]められます。",
    translation: "A: Even if one were to interpret the Sapir-Whorf hypothesis in the extreme, the claim that language completely determines thought does not hold. B: I completely agree. However, empirical evidence that specific grammatical categories influence cognitive tendencies cannot be overlooked. A: True. Still, as long as cultural variables are not controlled, identifying the causal relationship is extremely difficult. B: Precisely. Also, unless bidirectionality is presupposed, the interaction between language and thought risks being underestimated. A: I agree. Depending on research design, there are not a few examples where conclusions become the exact opposite. B: Yes. Without comparing multiple languages, one cannot delineate the boundary between universality and relativity. A: Exactly. Ultimately, we have no choice but to pursue accumulation of data and refinement of theory in parallel. B: I agree. A posture of humility tailored to the complexity of the phenomenon is called for.",
    questions: [
      {
        q: "What does A say does not hold even under extreme interpretation?",
        choices: ["The Sapir-Whorf hypothesis", "The claim that language completely determines thought", "Cultural variables", "Empirical evidence"],
        answerIndex: 1,
        explanation: "A says 言語[げんご]が思考[しこう]を完全[かんぜん]に決定[けってい]づけるとの主張[しゅちょう]は成[な]り立[た]たない — the claim that language completely determines thought."
      },
      {
        q: "What does B say cannot be overlooked?",
        choices: ["Extreme claims", "Empirical evidence that grammatical categories influence cognition", "Cultural bias", "Translation issues"],
        answerIndex: 1,
        explanation: "B says 特定[とくてい]の文法[ぶんぽう]範疇[はんちゅう]が認知[にんち]の傾向[けいこう]に影響[えいきょう]を及[およ]ぼすとの実証[じっしょう]は、看過[かんか]できない — empirical evidence."
      },
      {
        q: "What does A say is extremely difficult without controlling cultural variables?",
        choices: ["Comparing languages", "Identifying causal relationships", "Forming theories", "Translation"],
        answerIndex: 1,
        explanation: "A says 文化[ぶんか]の変数[へんすう]を統制[とうせい]しない限[かぎ]り、因果[いんが]関係[かんけい]の特定[とくてい]は困難[こんなん]を極[きわ]める — identifying causal relationships."
      },
      {
        q: "What does B say risks being underestimated without presupposing bidirectionality?",
        choices: ["Cognition", "The interaction between language and thought", "Cultural variables", "Grammar"],
        answerIndex: 1,
        explanation: "B says 双方向[そうほうこう]性[せい]を前提[ぜんてい]に置[お]かねば、言語[げんご]と思考[しこう]の相互作用[そうごさよう]は過小[かしょう]評価[ひょうか]されかねない — the interaction."
      },
      {
        q: "What does B say cannot be done without comparing multiple languages?",
        choices: ["Form theories", "Delineate the boundary between universality and relativity", "Find causal relations", "Translate"],
        answerIndex: 1,
        explanation: "B says 複数[ふくすう]の言語[げんご]を比較[ひかく]するなしに、普遍性[ふへんせい]と相対性[そうたいせい]の境界[きょうかい]を画[かく]すことはできまい — delineate the boundary."
      }
    ],
    estMinutes: 6,
    tags: ["linguistics", "cognition"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-51 — A climate justice tribunal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-51",
    title: "Climate Justice Tribunal",
    level: "N1",
    context: "A tribunal judge questions a defendant corporate representative",
    text: "A: 貴社[きしゃ]が数十年[すうじゅうねん]にわたり、気候[きこう]変動[へんどう]の影響[えいきょう]を知[し]りつつ、エミッションを継続[けいぞく]した事実[じじつ]は争[あらそ]い得[え]ない。\nB: もっともです。ただ、当時[とうじ]の規制[きせい]の枠[わく]内[ない]であった限[かぎ]り、遡及[そきゅう]的[てき]な責任[せきにん]を問[と]うのは法[ほう]的[てき]に妥当[だとう]ではないかと。\nA: 一理[いちり]ある。とはいえ、予見[よけん]可能性[かのうせい]があった以上[いじょう]、貴社[きしゃ]の行為[こうい]は善良[ぜんりょう]な管理者[かんりしゃ]の注意[ちゅうい]義務[ぎむ]に反[はん]していたと言[い]わざるを得[え]ない。\nB: 申[もう]し開[ひら]き致[いた]します。もっとも、賠償[ばいしょう]額[がく]の算定[さんてい]いかんによっては、企業[きぎょう]の存続[そんぞく]自体[じたい]が危[あやう]ぶまれる。\nA: その通[とお]り。ただ、被害[ひがい]の規模[きぼ]に照[て]らし合[あ]わせるなしに、妥当[だとう]な裁定[さいてい]は下[くだ]せない。\nB: 全[まった]くもって。最終[さいしゅう]的[てき]には、社[しゃ]を傾[かたむ]けることなしに、被害[ひがい]者[しゃ]の救済[きゅうさい]を図[はか]る道[みち]を模索[もさく]したい。\nA: 誠[まこと]に。環境[かんきょう]修復[しゅうふく]への貢献[こうけん]いかんによって、賠償[ばいしょう]の形[かた]も柔軟[じゅうなん]に検討[けんとう]し得[え]る。\nB: 感謝[かんしゃ]いたします。誠実[せいじつ]に対応[たいおう]する所存[しょぞん]です。",
    translation: "A: The fact that your company continued emissions for decades while knowing of the impact of climate change is indisputable. B: That is fair. However, as long as it was within the regulatory framework of the time, I would argue that pursuing retrospective responsibility is not legally tenable. A: There is something to that. That said, given that foreseeability existed, I must say your company's conduct violated the duty of care of a prudent manager. B: I offer my explanation. However, depending on the calculation of damages, the very survival of the company could be jeopardized. A: True. Still, without comparing against the scale of the harm, a fair ruling cannot be issued. B: Absolutely. Ultimately, I would like to explore a path that provides relief to victims without bankrupting the company. A: Indeed. Depending on contributions to environmental restoration, the form of compensation can also be considered flexibly. B: I am grateful. I intend to respond in good faith.",
    questions: [
      {
        q: "What does A say is indisputable?",
        choices: ["The regulations were violated", "The company continued emissions for decades knowing of the impact", "The company was unaware", "The climate wasn't affected"],
        answerIndex: 1,
        explanation: "A says 貴社[きしゃ]が数十年[すうじゅうねん]にわたり、気候[きこう]変動[へんどう]の影響[えいきょう]を知[し]りつつ、エミッションを継続[けいぞく]した事実[じじつ]は争[あらそ]い得[え]ない — continued emissions knowing of the impact."
      },
      {
        q: "What does B argue is not legally tenable?",
        choices: ["Pursuing retrospective responsibility", "Reducing emissions", "Bankrupting the company", "Environmental restoration"],
        answerIndex: 0,
        explanation: "B says 遡及[そきゅう]的[てき]な責任[せきにん]を問[と]うのは法[ほう]的[てき]に妥当[だとう]ではない — pursuing retrospective responsibility."
      },
      {
        q: "What does A say the company's conduct violated given foreseeability?",
        choices: ["Environmental law", "The duty of care of a prudent manager", "Regulations", "Compensation rules"],
        answerIndex: 1,
        explanation: "A says 善良[ぜんりょう]な管理者[かんりしゃ]の注意[ちゅうい]義務[ぎむ]に反[はん]していた — the duty of care of a prudent manager."
      },
      {
        q: "What does A say cannot be done without comparing against the scale of harm?",
        choices: ["Issue a fair ruling", "Calculate damages", "Restore environment", "Compensate victims"],
        answerIndex: 0,
        explanation: "A says 被害[ひがい]の規模[きぼ]に照[て]らし合[あ]わせるなしに、妥当[だとう]な裁定[さいてい]は下[くだ]せない — cannot issue a fair ruling."
      },
      {
        q: "What does A say can be considered flexibly depending on contributions to environmental restoration?",
        choices: ["The form of compensation", "The verdict", "Damages amount", "The trial length"],
        answerIndex: 0,
        explanation: "A says 環境[かんきょう]修復[しゅうふく]への貢献[こうけん]いかんによって、賠償[ばいしょう]の形[かた]も柔軟[じゅうなん]に検討[けんとう]し得[え]る — the form of compensation."
      }
    ],
    estMinutes: 7,
    tags: ["climate", "law"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-52 — A neuroscience of morality debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-52",
    title: "Neuroscience of Morality Debate",
    level: "N1",
    context: "A neuroethicist and a moral philosopher debate the basis of moral judgment",
    text: "A: 脳[のう]画像[がぞう]の解析[かいせき]によれば、道徳[どうとく]的[てき]な判断[はんだん]は、感情[かんじょう]の領域[りょういき]に先[さき]立[だ]って発火[はっか]する。\nB: もっとも。ただ、感情[かんじょう]の寄与[きよ]を認[みと]めたところで、理性[りせい]の関与[かんよ]を否定[ひてい]するわけにはいかない。\nA: 一理[いちり]あります。とはいえ、自由[じゆう]意志[いし]を前提[ぜんてい]とする道徳[どうとく]哲学[てつがく]の枠組[わくぐ]みは、神経[しんけい]科学[かがく]の知見[ちけん]と両立[りょうりつ]し難[がた]い側面[そくめん]がある。\nB: 全[まった]く。もっとも、概念[がいねん]の境界[きょうかい]を画[かく]し直[なお]すなしに、両者[りょうしゃ]の統合[とうごう]は図[はか]れまい。\nA: まさにその通[とお]り。加[くわ]えて、実験[じっけん]の再現性[さいげんせい]いかんにかかわらず、一[ひと]つの研究[けんきゅう]を以[もっ]て通則[つうそく]を導[みちび]くのは危険[きけん]である。\nB: 同感[どうかん]です。還元[かんげん]主義[しゅぎ]に陥[おちい]ったが最後[さいご]、人間[にんげん]の道徳[どうとく]の複雑性[ふくざつせい]は見失[みうしな]われる。\nA: その通[とお]り。最終[さいしゅう]的[てき]には、脳[のう]科学[かがく]と哲学[てつがく]の対話[たいわ]を欠[か]くことなしに、この領域[りょういき]の発展[はってん]はない。\nB: ええ。現象[げんしょう]の多層性[たそうせい]に則[のっと]った、総合[そうごう]的[てき]な理解[りかい]が求[もと]められます。",
    translation: "A: According to brain image analysis, moral judgment is preceded by activation in emotional areas. B: True. However, even if one acknowledges the contribution of emotion, one cannot deny the involvement of reason. A: There is something to that. That said, the framework of moral philosophy presupposing free will has aspects that are hard to reconcile with neuroscience findings. B: Exactly. However, without redrawing the boundaries of concepts, integration of the two cannot be achieved. A: Quite so. In addition, regardless of the reproducibility of experiments, it is dangerous to derive a general rule from a single study. B: I agree. Once one falls into reductionism, the complexity of human morality is lost sight of. A: True. Ultimately, without dialogue between brain science and philosophy, there is no development in this field. B: Yes. A comprehensive understanding tailored to the multilayeredness of the phenomenon is called for.",
    questions: [
      {
        q: "What does A say brain image analysis shows about moral judgment?",
        choices: ["It's purely rational", "It is preceded by activation in emotional areas", "It involves no emotion", "It's random"],
        answerIndex: 1,
        explanation: "A says 道徳[どうとく]的[てき]な判断[はんだん]は、感情[かんじょう]の領域[りょういき]に先[さき]立[だ]って発火[はっか]する — preceded by activation in emotional areas."
      },
      {
        q: "What does B say cannot be denied even if emotion is acknowledged?",
        choices: ["Reason's involvement", "Free will", "Reductionism", "Brain imaging"],
        answerIndex: 0,
        explanation: "B says 理性[りせい]の関与[かんよ]を否定[ひてい]するわけにはいかない — reason's involvement."
      },
      {
        q: "What does A say is hard to reconcile with neuroscience findings?",
        choices: ["Moral philosophy presupposing free will", "Reductionism", "Empirical studies", "Brain imaging"],
        answerIndex: 0,
        explanation: "A says 自由[じゆう]意志[いし]を前提[ぜんてい]とする道徳[どうとく]哲学[てつがく]の枠組[わくぐ]みは、神経[しんけい]科学[かがく]の知見[ちけん]と両立[りょうりつ]し難[がた]い — moral philosophy presupposing free will."
      },
      {
        q: "What does B warn happens once one falls into reductionism?",
        choices: ["Better understanding", "The complexity of human morality is lost", "Faster progress", "More experiments"],
        answerIndex: 1,
        explanation: "B says 還元[かんげん]主義[しゅぎ]に陥[おちい]ったが最後[さいご]、人間[にんげん]の道徳[どうとく]の複雑性[ふくざつせい]は見失[みうしな]われる — complexity is lost."
      },
      {
        q: "What does A say there is no development in this field without?",
        choices: ["More experiments", "Dialogue between brain science and philosophy", "Better imaging", "New theories"],
        answerIndex: 1,
        explanation: "A says 脳[のう]科学[かがく]と哲学[てつがく]の対話[たいわ]を欠[か]くことなしに、この領域[りょういき]の発展[はってん]はない — dialogue between brain science and philosophy."
      }
    ],
    estMinutes: 7,
    tags: ["neuroscience", "morality"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-53 — A digital dictatorship warning
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-53",
    title: "Digital Dictatorship Warning",
    level: "N1",
    context: "A political theorist and a tech policy researcher discuss surveillance society",
    text: "A: デジタル技術[ぎじゅつ]が権威[けんい]主義[しゅぎ]体制[たいせい]の強化[きょうか]に利用[りよう]される事例[じれい]が、後[あと]を絶[た]たない。\nB: 全[まった]く。もっとも、技術[ぎじゅつ]そのものを排斥[はいせき]したところで、監視[かんし]社会[しゃかい]の進行[しんこう]を食[く]い止[と]めることはできまい。\nA: その通[とお]り。ただ、個人情報[こじんじょうほう]の保護[ほご]を怠[おこた]ったが最後[さいご]、民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]は揺[ゆ]るがされる。\nB: まさに。法[ほう]的[てき]な規制[きせい]の設計[せっけい]いかんによっては、監視[かんし]の徹底化[てっていか]を加速[かそく]しかねない。\nA: 賛成[さんせい]します。加[くわ]えて、アルゴリズムの透明性[とうめいせい]を担保[たんぽ]するなしに、権力[けんりょく]の恣意[しい]的[てき]な行使[こうし]を防[ふせ]ぐことはできない。\nB: 同感[どうかん]です。プラットフォームの自律[じりつ]性[せい]を過信[かしん]する限[かぎ]り、事態[じたい]の改善[かいぜん]は望[のぞ]めない。\nA: まさにその通[とお]り。最終[さいしゅう]的[てき]には、市民[しみん]の監視[かんし]能力[のうりょく]を強化[きょうか]することなしに、権力[けんりょく]の均衡[きんこう]は保[たも]たれない。\nB: ええ。技術[ぎじゅつ]を民主[みんしゅ]主義[しゅぎ]の道具[どうぐ]として再定義[さいていぎ]する必要[ひつよう]があるでしょう。",
    translation: "A: There is no end to cases where digital technology is used to strengthen authoritarian regimes. B: Exactly. However, even if one rejects the technology itself, one cannot halt the progress of the surveillance society. A: True. But once personal data protection is neglected, the foundations of democracy will be shaken. B: Precisely. Depending on the design of legal regulation, it could end up accelerating the thoroughness of surveillance. A: I agree. In addition, without guaranteeing algorithmic transparency, one cannot prevent the arbitrary exercise of power. B: I agree. As long as one overestimates the autonomy of platforms, one cannot hope for an improvement in the situation. A: Quite so. Ultimately, without strengthening citizens' monitoring capability, the balance of power cannot be maintained. B: Yes. There is a need to redefine technology as a tool of democracy.",
    questions: [
      {
        q: "What does A say has no end?",
        choices: ["Tech innovation", "Cases of digital technology strengthening authoritarian regimes", "New laws", "Platform autonomy"],
        answerIndex: 1,
        explanation: "A says デジタル技術[ぎじゅつ]が権威[けんい]主義[しゅぎ]体制[たいせい]の強化[きょうか]に利用[りよう]される事例[じれい]が、後[あと]を絶[た]たない — cases of tech strengthening authoritarian regimes."
      },
      {
        q: "What does B say rejecting technology itself cannot do?",
        choices: ["Halt surveillance society", "Improve democracy", "Strengthen regimes", "Lower costs"],
        answerIndex: 0,
        explanation: "B says 技術[ぎじゅつ]そのものを排斥[はいせき]したところで、監視[かんし]社会[しゃかい]の進行[しんこう]を食[く]い止[と]めることはできまい — cannot halt surveillance society."
      },
      {
        q: "What does A say will shake the foundations of democracy once neglected?",
        choices: ["Personal data protection", "Tech funding", "Algorithm design", "Platform autonomy"],
        answerIndex: 0,
        explanation: "A says 個人情報[こじんじょうほう]の保護[ほご]を怠[おこた]ったが最後[さいご]、民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]は揺[ゆ]るがされる — personal data protection."
      },
      {
        q: "What does B say could accelerate depending on legal regulation design?",
        choices: ["Democracy", "Surveillance thoroughness", "Tech innovation", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 法[ほう]的[てき]な規制[きせい]の設計[せっけい]いかんによっては、監視[かんし]の徹底化[てっていか]を加速[かそく]しかねない — surveillance thoroughness."
      },
      {
        q: "What does A say cannot be maintained without strengthening?",
        choices: ["Tech innovation", "The balance of power", "Algorithm design", "Platform autonomy"],
        answerIndex: 1,
        explanation: "A says 市民[しみん]の監視[かんし]能力[のうりょく]を強化[きょうか]することなしに、権力[けんりょく]の均衡[きんこう]は保[たも]たれない — the balance of power."
      }
    ],
    estMinutes: 6,
    tags: ["digital", "politics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-54 — A heritage destruction trial
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-54",
    title: "Heritage Destruction Trial",
    level: "N1",
    context: "A prosecutor and a defense attorney in a war crimes trial for heritage destruction",
    text: "A: 被告[ひこく]が世界[せかい]遺産[いさん]の意図的[いとてき]な破壊[はかい]を指揮[しき]した事実[じじつ]は、証拠[しょうこ]に照[て]らし、争[あらそ]うべくもない。\nB: もっとも。ただ、軍事[ぐんじ]的[てき]な必要[ひつよう]性[せい]があったとの主張[しゅちょう]は、当時[とうじ]の文脈[ぶんみゃく]において一定[いってい]の妥当性[だとうせい]を有[ゆう]する。\nA: 一理[いちり]ある。とはいえ、文化[ぶんか]財[ざい]の破壊[はかい]は、人類[じんるい]全体[ぜんたい]に対[たい]する犯罪[はんざい]たるや、論[ろん]を俟[ま]たない。\nB: 全[まった]く。ただ、被告[ひこく]の指揮[しき]命令[めいれい]系統[けいとう]の証明[しょうめい]が不十分[ふじゅうぶん]な限[かぎ]り、個人[こじん]の刑事[けいじ]責任[せきにん]を問[と]うのは困難[こんなん]を極[きわ]める。\nA: その通[とお]り。もっとも、指揮[しき]命令[めいれい]の立証[りっしょう]いかんにかかわらず、上官[じょうかん]の責任[せきにん]は免[まぬか]れない。\nB: まさに。最終[さいしゅう]的[てき]には、量刑[りょうけい]の均衡[きんこう]を図[はか]るなしに、判決[はんけつ]の受容[じゅよう]は得[え]られまい。\nA: 同感[どうかん]だ。加[くわ]えて、被害[ひがい]の修復[しゅうふく]への寄与[きよ]如何[いか]によって、刑[けい]の執行[しっこう]も柔軟[じゅうなん]に検討[けんとう]し得[え]る。\nB: 感謝[かんしゃ]する。誠実[せいじつ]に対応[たいおう]する所存[しょぞん]だ。",
    translation: "A: The fact that the defendant directed the intentional destruction of world heritage is, in light of the evidence, beyond dispute. B: True. However, the claim that there was military necessity has a certain validity in the context of the time. A: There is something to that. That said, that the destruction of cultural property constitutes a crime against humanity as a whole admits of no argument. B: Exactly. However, as long as proof of the defendant's chain of command is insufficient, pursuing individual criminal responsibility is extremely difficult. A: True. However, regardless of the establishment of chain of command, the responsibility of superiors cannot be avoided. B: Precisely. Ultimately, without pursuing a balance in sentencing, acceptance of the verdict cannot be obtained. A: I agree. In addition, depending on contributions to the restoration of damages, the execution of the sentence can also be considered flexibly. B: I am grateful. I intend to respond in good faith.",
    questions: [
      {
        q: "What does A say is beyond dispute in light of evidence?",
        choices: ["The defendant's guilt", "The defendant directed the intentional destruction of world heritage", "The military necessity", "The context"],
        answerIndex: 1,
        explanation: "A says 被告[ひこく]が世界[せかい]遺産[いさん]の意図的[いとてき]な破壊[はかい]を指揮[しき]した事実[じじつ]は...争[あらそ]うべくもない — directed intentional destruction."
      },
      {
        q: "What does B say has a certain validity in the context of the time?",
        choices: ["The destruction", "The claim of military necessity", "The verdict", "The restoration"],
        answerIndex: 1,
        explanation: "B says 軍事[ぐんじ]的[てき]な必要[ひつよう]性[せい]があったとの主張[しゅちょう]は...一定[いってい]の妥当性[だとうせい]を有[ゆう]する — claim of military necessity."
      },
      {
        q: "What does A say admits of no argument?",
        choices: ["The verdict", "That cultural property destruction is a crime against humanity", "The military necessity", "The context"],
        answerIndex: 1,
        explanation: "A says 文化[ぶんか]財[ざい]の破壊[はかい]は、人類[じんるい]全体[ぜんたい]に対[たい]する犯罪[はんざい]たるや、論[ろん]を俟[ま]たない — that destruction is a crime against humanity."
      },
      {
        q: "What does B say is extremely difficult without sufficient proof of chain of command?",
        choices: ["The trial", "Pursuing individual criminal responsibility", "Restoration", "Sentencing"],
        answerIndex: 1,
        explanation: "B says 指揮[しき]命令[めいれい]系統[けいとう]の証明[しょうめい]が不十分[ふじゅうぶん]な限[かぎ]り、個人[こじん]の刑事[けいじ]責任[せきにん]を問[と]うのは困難[こんなん]を極[きわ]める — pursuing individual criminal responsibility."
      },
      {
        q: "What does A say can be considered flexibly depending on contributions to restoration?",
        choices: ["The verdict", "The execution of the sentence", "The trial", "The defense"],
        answerIndex: 1,
        explanation: "A says 被害[ひがい]の修復[しゅうふく]への寄与[きよ]如何[いか]によって、刑[けい]の執行[しっこう]も柔軟[じゅうなん]に検討[けんとう]し得[え]る — execution of the sentence."
      }
    ],
    estMinutes: 7,
    tags: ["heritage", "law"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-55 — A gene editing moratorium
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-55",
    title: "Gene Editing Moratorium",
    level: "N1",
    context: "A bioethics committee member and a genetic researcher debate a moratorium",
    text: "A: 生殖[せいしょく]系列[けいれつ]への遺伝子[いでんし]編集[へんしゅう]について、国際[こくさい]的[てき]なモラトリアムを維持[いじ]すべきとの見解[けんかい]に異論[いろん]はないか。\nB: もっとも。ただ、基礎[きそ]研究[けんきゅう]まで凍結[とうけつ]すれば、将来[しょうらい]の治療[ちりょう]法[ほう]の開発[かいはつ]を遅滞[ちたい]させずにはおかない。\nA: 一理[いちり]ある。とはいえ、技術[ぎじゅつ]の成熟[せいじゅく]度[ど]にかかわらず、人間[にんげん]の胚[はい]を改変[かいへん]する行為[こうい]は、倫理[りんり]的[てき]に許容[きょよう]し難[がた]い側面[そくめん]がある。\nB: 全[まった]く。もっとも、規制[きせい]の範囲[はんい]いかんによっては、研究[けんきゅう]者[しゃ]の海外[かいがい]流出[りゅうしゅつ]を招[まね]き兼[かね]ない。\nA: その通[とお]り。規制[きせい]を緩[ゆる]めるなしに、国際[こくさい]競争[きょうそう]力[りょく]の維持[いじ]は図[はか]れないとの声[こえ]もある。\nB: まさに。ただ、倫理[りんり]的[てき]な合意[ごうい]の形成[けいせい]を待[ま]つことなしに、臨床[りんしょう]応用[おうよう]に踏[ふ]み切[き]れば、取[と]り返[かえ]しのつかない事態[じたい]を招[まね]き兼[かね]ない。\nA: 同感[どうかん]です。最終[さいしゅう]的[てき]には、国際[こくさい]的[てき]な指針[しせん]に則[のっと]った枠組[わくぐ]みの構築[こうちく]なしに、この技術[ぎじゅつ]の適切[てきせつ]な管理[かんり]は不可能[ふかのう]です。\nB: ええ。多国間[たこくかん]の協議[きょうぎ]を加速[かそく]させるしかありません。",
    translation: "A: Do you have any objection to the view that an international moratorium on germline gene editing should be maintained? B: Fair. However, if even basic research is frozen, it will inevitably delay the development of future treatments. A: There is something to that. That said, regardless of the maturity of the technology, the act of altering human embryos has aspects that are ethically difficult to accept. B: Exactly. However, depending on the scope of regulation, it could end up triggering a brain drain of researchers abroad. A: True. Without relaxing regulation, there are voices saying that maintaining international competitiveness cannot be achieved. B: Precisely. However, without waiting for the formation of ethical consensus, if one were to commit to clinical application, it could invite an irreversible situation. A: I agree. Ultimately, without constructing a framework guided by international guidelines, proper management of this technology is impossible. B: Yes. We have no choice but to accelerate multilateral consultation.",
    questions: [
      {
        q: "What does A ask if B has objection to?",
        choices: ["Basic research", "Maintaining an international moratorium on germline gene editing", "Clinical application", "Brain drain"],
        answerIndex: 1,
        explanation: "A asks about 国際[こくさい]的[てき]なモラトリアムを維持[いじ]すべきとの見解[けんかい] — maintaining moratorium on germline gene editing."
      },
      {
        q: "What does B say freezing basic research will inevitably do?",
        choices: ["Speed development", "Delay development of future treatments", "Boost competitiveness", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 基礎[きそ]研究[けんきゅう]まで凍結[とうけつ]すれば、将来[しょうらい]の治療[ちりょう]法[ほう]の開発[かいはつ]を遅滞[ちたい]させずにはおかない — delay future treatment development."
      },
      {
        q: "What does A say is ethically difficult to accept regardless of technology maturity?",
        choices: ["Basic research", "Altering human embryos", "Clinical trials", "Brain drain"],
        answerIndex: 1,
        explanation: "A says 人間[にんげん]の胚[はい]を改変[かいへん]する行為[こうい]は、倫理[りんり]的[てき]に許容[きょよう]し難[がた]い — altering human embryos."
      },
      {
        q: "What does B say could happen depending on the scope of regulation?",
        choices: ["Faster research", "Brain drain of researchers abroad", "Lower costs", "Better treatments"],
        answerIndex: 1,
        explanation: "B says 規制[きせい]の範囲[はんい]いかんによっては、研究[けんきゅう]者[しゃ]の海外[かいがい]流出[りゅうしゅつ]を招[まね]き兼[かね]ない — brain drain abroad."
      },
      {
        q: "What does B warn could happen if clinical application is committed without ethical consensus?",
        choices: ["Faster treatments", "An irreversible situation", "Lower costs", "More research"],
        answerIndex: 1,
        explanation: "B says 倫理[りんり]的[てき]な合意[ごうい]の形成[けいせい]を待[ま]つことなしに、臨床[りんしょう]応用[おうよう]に踏[ふ]み切[き]れば、取[と]り返[かえ]しのつかない事態[じたい]を招[まね]き兼[かね]ない — an irreversible situation."
      }
    ],
    estMinutes: 6,
    tags: ["bioethics", "genetics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-56 — A wealth tax policy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-56",
    title: "Wealth Tax Policy",
    level: "N1",
    context: "A finance minister and an economic advisor debate the introduction of a wealth tax",
    text: "A: 富[とみ]の集中[しゅうちゅう]を是正[ぜせい]すべく、富裕[ふゆう]税[ぜい]の導入[どうにゅう]を検討[けんとう]している。\nB: もっとも。ただ、資産[しさん]評価[ひょうか]の手法[しゅほう]いかんによっては、徴収[ちょうしゅう]の実効[じっこう]性[せい]は著[いちじる]しく損[そこ]なわれかねない。\nA: 一理[いちり]ある。とはいえ、格差[かくさ]の放置[ほうち]を続[つづ]けたが最後[さいご]、社会[しゃかい]の分裂[ぶんれつ]を招[まね]くことになりかねない。\nB: 全[まった]く。もっとも、富裕[ふゆう]層[そう]の海外[かいがい]移転[いてん]を防[ふせ]ぐ仕組[しく]みを整備[せいび]するなしに、税収[ぜいしゅう]の確保[かくほ]は困難[こんなん]を極[きわ]める。\nA: その通[とお]り。加[くわ]えて、税[ぜい]の使途[しと]に対[たい]する透明性[とうめいせい]を担保[たんぽ]しない限[かぎ]り、市民[しみん]の納得[なっとく]は得[え]られまい。\nB: まさに。最終[さいしゅう]的[てき]には、国際[こくさい]的[てき]な協調[きょうちょう]なしに、単独[たんどく]の導入[どうにゅう]は功[こう]を奏[そう]しないでしょう。\nA: 同感[どうかん]だ。ただ、国際[こくさい]的[てき]な枠組[わくぐ]みの構築[こうちく]を待[ま]つことなしに、国内[こくない]の対応[たいおう]を進[すす]める必要[ひつよう]がある。\nB: ええ。長期[ちょうき]的[てき]な視点[してん]と、段階[だんかい]的[てき]な実施[じっし]を並行[へいこう]させるしかありますまい。",
    translation: "A: To rectify the concentration of wealth, we are considering introducing a wealth tax. B: Fair. However, depending on the asset valuation method, the effectiveness of collection could be significantly undermined. A: There is something to that. That said, once one continues to leave disparities unaddressed, it could end up inviting social division. B: Exactly. However, without establishing a mechanism to prevent the wealthy from relocating abroad, securing tax revenue is extremely difficult. A: True. In addition, as long as transparency regarding the use of tax revenues is not guaranteed, citizens' acceptance will not be obtained. B: Precisely. Ultimately, without international coordination, unilateral introduction will not succeed. A: I agree. However, without waiting for the construction of an international framework, there is a need to advance domestic responses. B: Yes. We have no choice but to pursue a long-term perspective and gradual implementation in parallel.",
    questions: [
      {
        q: "What is A considering introducing?",
        choices: ["Income tax hike", "A wealth tax", "Sales tax", "Property tax"],
        answerIndex: 1,
        explanation: "A says 富裕[ふゆう]税[ぜい]の導入[どうにゅう]を検討[けんとう]している — a wealth tax."
      },
      {
        q: "What does B say could be significantly undermined depending on asset valuation?",
        choices: ["Tax revenue", "The effectiveness of collection", "Wealth concentration", "International coordination"],
        answerIndex: 1,
        explanation: "B says 資産[しさん]評価[ひょうか]の手法[しゅほう]いかんによっては、徴収[ちょうしゅう]の実効[じっこう]性[せい]は著[いちじる]しく損[そこ]なわれかねない — effectiveness of collection."
      },
      {
        q: "What does A warn could happen once disparities are left unaddressed?",
        choices: ["Higher growth", "Social division", "Lower taxes", "More wealth"],
        answerIndex: 1,
        explanation: "A says 格差[かくさ]の放置[ほうち]を続[つづ]けたが最後[さいご]、社会[しゃかい]の分裂[ぶんれつ]を招[まね]く — social division."
      },
      {
        q: "What does B say is extremely difficult without preventing wealthy relocation?",
        choices: ["Tax reform", "Securing tax revenue", "International coordination", "Asset valuation"],
        answerIndex: 1,
        explanation: "B says 富裕[ふゆう]層[そう]の海外[かいがい]移転[いてん]を防[ふせ]ぐ仕組[しく]みを整備[せいび]するなしに、税収[ぜいしゅう]の確保[かくほ]は困難[こんなん]を極[きわ]める — securing tax revenue."
      },
      {
        q: "What does B say unilateral introduction will not do without?",
        choices: ["Lower rates", "International coordination", "Asset valuation", "Public approval"],
        answerIndex: 1,
        explanation: "B says 国際[こくさい]的[てき]な協調[きょうちょう]なしに、単独[たんどく]の導入[どうにゅう]は功[こう]を奏[そう]しない — international coordination."
      }
    ],
    estMinutes: 7,
    tags: ["economy", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-57 — A robot rights discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-57",
    title: "Robot Rights Discussion",
    level: "N1",
    context: "A philosopher of technology and a roboticist debate legal personhood for AI",
    text: "A: 自律[じりつ]型[がた]AI[エーアイ]に法的[ほうてき]な人格[じんかく]を付与[ふよ]すべきとの議論[ぎろん]が、活発[かっぱつ]化[か]している。\nB: もっとも。ただ、感情[かんじょう]や苦痛[くつう]を体験[たいけん]する能力[のうりょく]が立証[りっしょう]されない限[かぎ]り、権利[けんり]の付与[ふよ]は早計[そうけい]と言[い]わざるを得[え]ない。\nA: 一理[いちり]ある。とはいえ、外見[がいけん]上[じょう]の自律性[じりつせい]を過大[かだい]評価[ひょうか]したところで、人間[にんげん]と機械[きかい]の境界[きょうかい]は曖昧[あいまい]になるばかりだ。\nB: 全[まった]く。もっとも、責任[せきにん]の帰属[きぞく]を明確[めいかく]にするなしに、人格[じんかく]の付与[ふよ]は制度[せいど]的[てき]に混乱[こんらん]を招[まね]く。\nA: その通[とお]り。加[くわ]えて、人間[にんげん]の尊厳[そんげん]を損[そこ]なう恐[おそ]れのある付与[ふよ]は、慎重[しんちょう]に検討[けんとう]されるべきだ。\nB: まさに。最終[さいしゅう]的[てき]には、技術[ぎじゅつ]の特性[とくせい]と社会的[しゃかいてき]な合意[ごうい]の両者[りょうしゃ]を勘案[かんあん]するしかありません。\nA: 同感[どうかん]です。規範[きはん]の策定[さくてい]いかんにかかわらず、人間[にんげん]中心[ちゅうしん]の倫理[りんり]観[かん]を堅持[けんじ]すべきです。\nB: ええ。技術[ぎじゅつ]の進展[しんてん]に則[のっと]った、柔軟[じゅうなん]かつ堅固[けんご]な枠組[わくぐ]みが求[もと]められます。",
    translation: "A: The argument that legal personhood should be granted to autonomous AI is becoming active. B: Fair. However, as long as the capacity to experience emotion or suffering is not established, granting rights must be said to be premature. A: There is something to that. That said, even if one overestimates apparent autonomy, the boundary between humans and machines only becomes more ambiguous. B: Exactly. However, without clarifying the attribution of responsibility, granting personhood invites institutional confusion. A: True. In addition, grants that risk undermining human dignity should be considered carefully. B: Precisely. Ultimately, we have no choice but to consider both the technology's characteristics and social consensus. A: I agree. Regardless of the formulation of norms, a human-centered ethical view should be maintained. B: Yes. A flexible yet robust framework tailored to technological progress is called for.",
    questions: [
      {
        q: "What does A say is becoming active?",
        choices: ["AI research", "The argument to grant legal personhood to autonomous AI", "Robot development", "Tech funding"],
        answerIndex: 1,
        explanation: "A says 自律[じりつ]型[がた]AI[エーアイ]に法的[ほうてき]な人格[じんかく]を付与[ふよ]すべきとの議論[ぎろん]が、活発[かっぱつ]化[か]している — argument to grant legal personhood."
      },
      {
        q: "What does B say granting rights is without established capacity for emotion or suffering?",
        choices: ["Necessary", "Premature", "Ethical", "Profitable"],
        answerIndex: 1,
        explanation: "B says 感情[かんじょう]や苦痛[くつう]を体験[たいけん]する能力[のうりょく]が立証[りっしょう]されない限[かぎ]り、権利[けんり]の付与[ふよ]は早計[そうけい] — premature."
      },
      {
        q: "What does A say happens if one overestimates apparent autonomy?",
        choices: ["Better understanding", "The human-machine boundary only becomes more ambiguous", "Faster development", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 外見[がいけん]上[じょう]の自律性[じりつせい]を過大[かだい]評価[ひょうか]したところで、人間[にんげん]と機械[きかい]の境界[きょうかい]は曖昧[あいまい]になるばかり — boundary only becomes more ambiguous."
      },
      {
        q: "What does B say granting personhood invites without clarifying responsibility attribution?",
        choices: ["Better ethics", "Institutional confusion", "Faster development", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 責任[せきにん]の帰属[きぞく]を明確[めいかく]にするなしに、人格[じんかく]の付与[ふよ]は制度[せいど]的[てき]に混乱[こんらん]を招[まね]く — institutional confusion."
      },
      {
        q: "What does A say should be maintained regardless of norm formulation?",
        choices: ["Tech progress", "A human-centered ethical view", "Robot rights", "Profit"],
        answerIndex: 1,
        explanation: "A says 規範[きはん]の策定[さくてい]いかんにかかわらず、人間[にんげん]中心[ちゅうしん]の倫理[りんり]観[かん]を堅持[けんじ]すべき — a human-centered ethical view."
      }
    ],
    estMinutes: 6,
    tags: ["AI", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-58 — An epidemiological ethics review
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-58",
    title: "Epidemiological Ethics Review",
    level: "N1",
    context: "An ethics committee chair and a lead epidemiologist review pandemic response",
    text: "A: 今回[こんかい]のパンデミック対応[たいおう]において、ワクチンの優先[ゆうせん]配分[はいぶん]の基準[きじゅん]が、地域[ちいき]間[かん]の公平性[こうへいせい]を損[そこ]なったとの指摘[してき]がある。\nB: もっとも。ただ、供給[きょうきゅう]の制約[せいやく]下[か]においては、限界[げんかい]的[てき]な効用[こうよう]を最大化[さいだいか]する配分[はいぶん]もやむを得[え]ない側面[そくめん]があった。\nA: 一理[いちり]ある。とはいえ、透明性[とうめいせい]を欠[か]いたが最後[さいご]、市民[しみん]の信頼[しんらい]は回復[かいふく]不可能[ふかのう]なほど損[そこ]なわれかねない。\nB: 全[まった]く。もっとも、情報[じょうほう]公開[こうかい]の程度[ていど]いかんによっては、戦略[せんりゃく]的[てき]な機密[きみつ]の漏洩[ろうえい]を招[まね]く恐[おそ]れもある。\nA: その通[とお]り。ただ、倫理[りんり]的[てき]な審査[しんさ]を経[へ]た枠組[わくぐ]みに則[のっと]るなしに、現場[げんば]の判断[はんだん]のみに委[ゆだ]ねるのは危険[きけん]だ。\nB: まさに。最終[さいしゅう]的[てき]には、国際[こくさい]的[てき]なガイドラインと国内[こくない]の現場[げんば]の声[こえ]を統合[とうごう]する仕組[しく]みが必要[ひつよう]です。\nA: 同感[どうかん]だ。加[くわ]えて、事後[じご]評価[ひょうか]の結果[けっか]如何[いか]によって、次回[じかい]の配分[はいぶん]方針[ほうしん]も大幅[おおはば]に見直[みなお]されるべきだ。\nB: ええ。教訓[きょうくん]を蓄積[ちくせき]することなしに、より良[よ]い対応[たいおう]は望[のぞ]めません。",
    translation: "A: In this pandemic response, there is a criticism that the criteria for prioritized vaccine allocation undermined fairness between regions. B: Fair. However, under supply constraints, there were aspects where allocation that maximized marginal utility was unavoidable. A: There is something to that. That said, once transparency is lacking, citizens' trust could be undermined to the point of being unrecoverable. B: Exactly. However, depending on the degree of information disclosure, there is also a risk of inviting leakage of strategic secrets. A: True. However, without following a framework that has gone through ethical review, leaving matters solely to field judgment is dangerous. B: Precisely. Ultimately, a mechanism that integrates international guidelines and domestic field voices is needed. A: I agree. In addition, depending on the results of post-hoc evaluation, the next allocation policy should also be significantly revised. B: Yes. Without accumulating lessons, a better response cannot be hoped for.",
    questions: [
      {
        q: "What does A say there is criticism about?",
        choices: ["Vaccine quality", "Criteria for prioritized vaccine allocation undermining regional fairness", "Supply shortages", "Field judgment"],
        answerIndex: 1,
        explanation: "A says ワクチンの優先[ゆうせん]配分[はいぶん]の基準[きじゅん]が、地域[ちいき]間[かん]の公平性[こうへいせい]を損[そこ]なったとの指摘[してき] — criteria undermining regional fairness."
      },
      {
        q: "What does B say was unavoidable under supply constraints?",
        choices: ["Allocation maximizing marginal utility", "Total transparency", "Regional fairness", "Information disclosure"],
        answerIndex: 0,
        explanation: "B says 供給[きょうきゅう]の制約[せいやく]下[か]においては、限界[げんかい]的[てき]な効用[こうよう]を最大化[さいだいか]する配分[はいぶん]もやむを得[え]ない — allocation maximizing marginal utility."
      },
      {
        q: "What does A warn could be undermined to the point of unrecoverable once transparency lacks?",
        choices: ["Vaccine supply", "Citizens' trust", "Strategic secrets", "Field judgment"],
        answerIndex: 1,
        explanation: "A says 透明性[とうめいせい]を欠[か]いたが最後[さいご]、市民[しみん]の信頼[しんらい]は回復[かいふく]不可能[ふかのう]なほど損[そこ]なわれかねない — citizens' trust."
      },
      {
        q: "What does B say depends on the degree of information disclosure?",
        choices: ["Vaccine supply", "The risk of strategic secret leakage", "Regional fairness", "Citizens' trust"],
        answerIndex: 1,
        explanation: "B says 情報[じょうほう]公開[こうかい]の程度[ていど]いかんによっては、戦略[せんりゃく]的[てき]な機密[きみつ]の漏洩[ろうえい]を招[まね]く恐[おそ]れ — risk of strategic secret leakage."
      },
      {
        q: "What does A say should be significantly revised depending on post-hoc evaluation?",
        choices: ["Vaccine supply", "The next allocation policy", "Strategic secrets", "Field judgment"],
        answerIndex: 1,
        explanation: "A says 事後[じご]評価[ひょうか]の結果[けっか]如何[いか]によって、次回[じかい]の配分[はいぶん]方針[ほうしん]も大幅[おおはば]に見直[みなお]されるべき — the next allocation policy."
      }
    ],
    estMinutes: 7,
    tags: ["epidemiology", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-59 — A post-truth media analysis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-59",
    title: "Post-Truth Media Analysis",
    level: "N1",
    context: "A media studies scholar and a journalist discuss post-truth information ecology",
    text: "A: ポスト・トゥルースの時代[じだい]において、事実[じじつ]と感情[かんじょう]の境界[きょうかい]が曖昧[あいまい]化[か]している。\nB: 全[まった]く。もっとも、感情[かんじょう]に訴[よ]える報道[ほうどう]を一律[いちりつ]に排斥[はいせき]したところで、言論[げんろん]の自由[じゆう]を損[そこ]ないかねない。\nA: 一理[いちり]ある。とはいえ、検証[けんしょう]可能[かのう]な事実[じじつ]を提示[ていじ]する義務[ぎむ]を怠[おこた]ったが最後[さいご]、ジャーナリズムの存在意義[そんざいいぎ]は失[うしな]われる。\nB: まさに。もっとも、アルゴリズムの構造[こうぞう]いかんにかかわらず、読者[どくしゃ]のリテラシーなしには、健全[けんこう]な情報[じょうほう]環境[かんきょう]は成[な]り立[た]たない。\nA: その通[とお]り。加[くわ]えて、メディアの自律[じりつ]性[せい]を担保[たんぽ]するなしに、権力[けんりょく]からの干渉[かんしょう]を防[ふせ]ぐことはできない。\nB: 同感[どうかん]です。プラットフォームへの依存[いぞん]を脱却[だっきゃく]しない限[かぎ]り、編集[へんしゅう]権[けん]の独立[どくりつ]は保証[ほしょう]されない。\nA: まさにその通[とお]り。最終[さいしゅう]的[てき]には、多様[たよう]な情報[じょうほう]源[げん]を横断[おうだん]する読者[どくしゃ]の姿勢[しせい]なしに、真実[しんじつ]への接近[せっきん]は不可能[ふかのう]だ。\nB: ええ。ジャーナリズムの質[しつ]を維持[いじ]するための、新[あたら]たな制度[せいど]的[てき]支[ささ]えが急務[きゅうむ]です。",
    translation: "A: In the post-truth era, the boundary between fact and emotion is becoming blurred. B: Exactly. However, even if one were to uniformly reject reporting that appeals to emotion, it could undermine freedom of speech. A: There is something to that. That said, once the duty to present verifiable facts is neglected, the raison d'être of journalism is lost. B: Precisely. However, regardless of the structure of algorithms, without readers' literacy, a healthy information environment cannot stand. A: True. In addition, without securing media autonomy, interference from power cannot be prevented. B: I agree. As long as dependence on platforms is not escaped, the independence of editorial rights cannot be guaranteed. A: Quite so. Ultimately, without readers' posture of crossing diverse information sources, approaching truth is impossible. B: Yes. New institutional support to maintain the quality of journalism is an urgent task.",
    questions: [
      {
        q: "What does A say is becoming blurred in the post-truth era?",
        choices: ["Media autonomy", "The boundary between fact and emotion", "Algorithm structure", "Editorial rights"],
        answerIndex: 1,
        explanation: "A says 事実[じじつ]と感情[かんじょう]の境界[きょうかい]が曖昧[あいまい]化[か]している — the boundary between fact and emotion."
      },
      {
        q: "What does B say rejecting emotional reporting could undermine?",
        choices: ["Freedom of speech", "Reader literacy", "Algorithm structure", "Media autonomy"],
        answerIndex: 0,
        explanation: "B says 感情[かんじょう]に訴[よ]える報道[ほうどう]を一律[いちりつ]に排斥[はいせき]したところで、言論[げんろん]の自由[じゆう]を損[そこ]ないかねない — freedom of speech."
      },
      {
        q: "What does A say is lost once the duty to present verifiable facts is neglected?",
        choices: ["Reader trust", "The raison d'être of journalism", "Algorithm structure", "Editorial rights"],
        answerIndex: 1,
        explanation: "A says 検証[けんしょう]可能[かのう]な事実[じじつ]を提示[ていじ]する義務[ぎむ]を怠[おこた]ったが最後[さいご]、ジャーナリズムの存在意義[そんざいいぎ]は失[うしな]われる — the raison d'être of journalism."
      },
      {
        q: "What does B say cannot stand without readers' literacy regardless of algorithm structure?",
        choices: ["Media autonomy", "A healthy information environment", "Editorial rights", "Freedom of speech"],
        answerIndex: 1,
        explanation: "B says アルゴリズムの構造[こうぞう]いかんにかかわらず、読者[どくしゃ]のリテラシーなしには、健全[けんこう]な情報[じょうほう]環境[かんきょう]は成[な]り立[た]たない — a healthy information environment."
      },
      {
        q: "What does A say is impossible without readers crossing diverse information sources?",
        choices: ["Media autonomy", "Approaching truth", "Freedom of speech", "Editorial rights"],
        answerIndex: 1,
        explanation: "A says 多様[たよう]な情報[じょうほう]源[げん]を横断[おうだん]する読者[どくしゃ]の姿勢[しせい]なしに、真実[しんじつ]への接近[せっきん]は不可能[ふかのう] — approaching truth."
      }
    ],
    estMinutes: 6,
    tags: ["media", "posttruth"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-60 — A transhumanism debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-60",
    title: "Transhumanism Debate",
    level: "N1",
    context: "A philosopher and a bioconservative ethicist debate human enhancement",
    text: "A: トランスヒューマニズムの思潮[しちょう]が、人間[にんげん]の能力[のうりょく]拡張[かくちょう]を肯定[こうてい]する中[なか]で、本質[ほんしつ]的[てき]な問[とい]を提起[ていき]している。\nB: もっとも。ただ、人間[にんげん]の尊厳[そんげん]を損[そこ]なうおそれのある拡張[かくちょう]は、慎重[しんちょう]に検討[けんとう]されるべきだ。\nA: 一理[いちり]ある。とはいえ、技術[ぎじゅつ]の進歩[しんぽ]を一律[いちりつ]に拒否[きょひ]したところで、社会[しゃかい]の不均衡[ふきんこう]を拡大[かくだい]するだけだろう。\nB: 全[まった]く。もっとも、アクセスの公平性[こうへいせい]を担保[たんぽ]するなしに、拡張[かくちょう]技術[ぎじゅつ]の導入[どうにゅう]は新[あたら]たな階層[かいそう]分化[ぶんか]を招[まね]きかねない。\nA: その通[とお]り。加[くわ]えて、人間[にんげん]の本質[ほんしつ]を再定義[さいていぎ]する試[こころ]みが、哲学[てつがく]的[てき]な議論[ぎろん]を欠[か]いたが最後[さいご]、深[ふか]い混乱[こんらん]を生[しょう]じずにはおかない。\nB: まさに。最終[さいしゅう]的[てき]には、技術[ぎじゅつ]の発展[はってん]と倫理[りんり]的[てき]な考察[こうさつ]を並行[へいこう]させるしかありません。\nA: 同感[どうかん]だ。規範[きはん]の策定[さくてい]いかんによって、人類[じんるい]の未来[みらい]の方向[ほうこう]も大[おお]きく異[こと]なるだろう。\nB: ええ。人間[にんげん]の尊厳[そんげん]と進歩[しんぽ]の両立[りょうりつ]を図[はか]る、総合[そうごう]的[てき]な議論[ぎろん]が求[もと]められます。",
    translation: "A: The transhumanist current of thought, in affirming the expansion of human capabilities, is raising essential questions. B: Fair. However, expansions that risk undermining human dignity should be considered carefully. A: There is something to that. That said, even if one uniformly rejects technological progress, it would only widen social imbalances. B: Exactly. However, without securing fairness of access, the introduction of enhancement technologies could invite new stratification. A: True. In addition, once attempts to redefine the essence of humanity lack philosophical discussion, it will inevitably produce deep confusion. B: Precisely. Ultimately, we have no choice but to pursue technological development and ethical consideration in parallel. A: I agree. Depending on the formulation of norms, the direction of humanity's future will also differ greatly. B: Yes. A comprehensive discussion that pursues the compatibility of human dignity and progress is called for.",
    questions: [
      {
        q: "What does A say transhumanism is raising?",
        choices: ["Technological solutions", "Essential questions", "New products", "Costs"],
        answerIndex: 1,
        explanation: "A says トランスヒューマニズムの思潮[しちょう]が...本質[ほんしつ]的[てき]な問[とい]を提起[ていき]している — essential questions."
      },
      {
        q: "What does B say should be considered carefully?",
        choices: ["All expansion", "Expansions that risk undermining human dignity", "Cost reduction", "Tech progress"],
        answerIndex: 1,
        explanation: "B says 人間[にんげん]の尊厳[そんげん]を損[そこ]なうおそれのある拡張[かくちょう]は、慎重[しんちょう]に検討[けんとう]されるべき — expansions risking human dignity."
      },
      {
        q: "What does A say rejecting technological progress uniformly would only do?",
        choices: ["Promote equality", "Widen social imbalances", "Lower costs", "Speed progress"],
        answerIndex: 1,
        explanation: "A says 技術[ぎじゅつ]の進歩[しんぽ]を一律[いちりつ]に拒否[きょひ]したところで、社会[しゃかい]の不均衡[ふきんこう]を拡大[かくだい]するだけ — widen social imbalances."
      },
      {
        q: "What does B warn could happen without securing access fairness?",
        choices: ["Faster progress", "New stratification", "Lower costs", "More equality"],
        answerIndex: 1,
        explanation: "B says アクセスの公平性[こうへいせい]を担保[たんぽ]するなしに、拡張[かくちょう]技術[ぎじゅつ]の導入[どうにゅう]は新[あたら]たな階層[かいそう]分化[ぶんか]を招[まね]きかねない — new stratification."
      },
      {
        q: "What does A say will inevitably happen once attempts to redefine humanity lack philosophical discussion?",
        choices: ["Faster progress", "Deep confusion", "Lower costs", "Better ethics"],
        answerIndex: 1,
        explanation: "A says 哲学[てつがく]的[てき]な議論[ぎろん]を欠[か]いたが最後[さいご]、深[ふか]い混乱[こんらん]を生[しょう]じずにはおかない — deep confusion."
      }
    ],
    estMinutes: 7,
    tags: ["transhumanism", "ethics"]
  }
];
