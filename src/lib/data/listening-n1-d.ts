import type { ListeningData } from "@/lib/types";

// N1 listening exercises set D (ids l-n1-61..l-n1-80).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N1 grammar targets: 〜ずにはおかない, 〜とはいえ, 〜いかんによって,
// 〜に則って, 〜限り, 〜次第で, 〜を禁じ得ない, 〜に足る, 〜まい,
// 〜にかかわらず, 〜べく, 〜しかねない, 〜に即して, etc.

export const listeningN1D: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n1-61 — A prison reform debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-61",
    title: "Prison Reform Debate",
    level: "N1",
    context: "A criminologist and a victim advocate debate a recidivism-reduction bill",
    text: "A: 再犯[さいはん]率[りつ]の抑制[よくせい]を目的[もくてき]とする改正[かいせい]法案[ほうあん]が審議[しんぎ]に付[ふ]されたそうだ。\nB: ええ、刑罰[けいばつ]の厳罰[げんばつ]化[か]を図[はか]るとはいえ、社会[しゃかい]復帰[ふっき]の道筋[みちすじ]を閉[と]ざすことにならぬよう、慎重[しんちょう]な運用[うんよう]が求[もと]められます。\nA: 受刑者[じゅけいしゃ]の教育的[きょういくてき]矯正[きょうせい]に資[し]する施策[しさく]の充実[じゅうじつ]いかんによっては、再犯[さいはん]の抑止[よくし]は相当[そうとう]な効果[こうか]を挙[あ]げ得[え]るでしょう。\nB: 全[まった]くです。もっとも、更生[こうせい]を促[うなが]す環境[かんきょう]を整備[せいび]せずに厳罰[げんばつ]化[か]だけを進[すす]めれば、かえって受刑者[じゅけいしゃ]の反発[はんぱつ]を招[まね]かずにはおかない。\nA: 国際的[こくさいてき]な人権[じんけん]基準[きじゅん]に則[のっと]った処遇[しょぐう]を担保[たんぽ]する限[かぎ]り、立法的[りっぽうてき]妥当性[だとうせい]も確保[かくほ]できるはずです。\nB: ご指摘[してき]のとおりです。ただ、被害者[ひがいしゃ]の感情[かんじょう]との均衡[きんこう]を欠[か]いた改革[かいかく]は、いかなる理屈[りくつ]をもってしても正当[せいとう]化[か]しがたいでしょう。\nA: 最終的[さいしゅうてき]には、運用[うんよう]体制[たいせい]の整備[せいび]次第[しだい]で成果[せいか]のほども大[おお]きく変[か]わるはずです。\nB: 被害者[ひがいしゃ]救済[きゅうさい]と更生[こうせい]支援[しえん]の両立[りょうりつ]を目指[めざ]すべく、議論[ぎろん]を深[ふか]めたいと存[ぞん]じます。",
    translation: "A: I hear the bill aimed at curbing recidivism has been submitted for deliberation. B: Yes. While tightening penalties, we must operate it carefully so as not to close off pathways to social reintegration. A: Depending on how thoroughly we enrich measures supporting inmates' educational rehabilitation, recidivism deterrence could yield substantial results. B: Quite so. However, if we push only for harsher penalties without building environments that encourage rehabilitation, we will inevitably provoke backlash from inmates. A: As long as we guarantee treatment that accords with international human rights standards, we can also secure the bill's legislative legitimacy. B: You are right. That said, any reform that ignores the balance with victims' sentiments could not be justified by any reasoning. A: Ultimately, the results will depend greatly on how well we build the operational framework. B: Let us deepen this discussion with the aim of balancing victim relief and rehabilitation support.",
    questions: [
      {
        q: "According to B, what must be done even while tightening penalties?",
        choices: ["Operate carefully so as not to close off reintegration pathways", "Expand prison capacity", "Reduce sentences uniformly", "Eliminate parole entirely"],
        answerIndex: 0,
        explanation: "B says 社会復帰の道筋を閉ざすことにならぬよう、慎重な運用が求められる — careful operation is required so as not to close off reintegration."
      },
      {
        q: "What does A say will inevitably happen if only harsher penalties are pushed without rehabilitation environments?",
        choices: ["Lower costs", "Inmate backlash", "Faster parole", "Higher conviction rates"],
        answerIndex: 1,
        explanation: "B says 反発を招かずにはおかない — backlash will inevitably be provoked."
      },
      {
        q: "What does A say can secure the bill's legislative legitimacy, as long as it is guaranteed?",
        choices: ["Faster trials", "Treatment in line with international human rights standards", "More funding", "Longer sentences"],
        answerIndex: 1,
        explanation: "A says 国際的な人権基準に則った処遇を担保する限り — as long as treatment per international human rights standards is guaranteed."
      },
      {
        q: "What does B say cannot be justified by any reasoning?",
        choices: ["Harsher penalties", "Reform that ignores balance with victims' sentiments", "Foreign models", "Shorter trials"],
        answerIndex: 1,
        explanation: "B says 被害者の感情との均衡を欠いた改革は、いかなる理屈をもってしても正当化しがたい — reform ignoring the balance with victims' feelings."
      },
      {
        q: "What does A say the results ultimately depend on?",
        choices: ["Public opinion", "How well the operational framework is built", "Foreign pressure", "Budget size"],
        answerIndex: 1,
        explanation: "A says 運用体制の整備次第で成果のほども大きく変わる — depends on how the operational framework is built."
      }
    ],
    estMinutes: 7,
    tags: ["criminal-justice", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-62 — A neurolaw conference
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-62",
    title: "Neurolaw Conference",
    level: "N1",
    context: "A legal philosopher and a forensic psychiatrist discuss neuroscience in criminal responsibility",
    text: "A: 神経科学[しんけいかがく]の知見[ちけん]を刑事責任[けいじせきにん]の判断[はんだん]に援用[えんよう]する試[こころ]みについて、懸念[けねん]を禁[きん]じ得[え]ない。\nB: もっとも、被告人[ひこくにん]の心身状態[しんしんじょうたい]を客観的[きゃっかんてき]に提示[ていじ]し得[え]る点[てん]では、証拠法務[しょうこほうむ]の進展[しんてん]として評価[ひょうか]すべき側面[そくめん]もある。\nA: しかし、脳画像[のうがぞう]の過度[かど]な解釈[かいしゃく]は、裁判官[さいばんかん]の心証[しんしょう]を不当[ふとう]に左右[さゆう]しかねない。\nB: その通[とお]りです。もっとも、専門家[せんもんか]の証言[しょうげん]を厳格[げんかく]に審査[しんさ]する仕組[しく]みがあれば、誤謬[ごびゅう]の混入[こんにゅう]は相応[そうおう]に防[ふせ]げるはずです。\nA: とはいえ、自由意志[じゆういし]の存在[そんざい]そのものが問[と]われる事態[じたい]になれば、法体系[ほうたいけい]の根幹[こんかん]が揺[ゆる]ぎかねない。\nB: 慎重[しんちょう]な議論[ぎろん]が不可欠[ふかけつ]ですね。証拠能力[しょうこのうりょく]の基準[きじゅん]を改[あらた]めて整備[せいび]する必要[ひつよう]も出[で]てきましょう。\nA: 最終的[さいしゅうてき]には、科学的知見[かがくてきちけん]の法的適用[ほうてきてきよう]の範囲[はんい]いかんによって、結論[けつろん]も大[おお]きく異[こと]なるでしょう。\nB: 学際的[がくさいてき]対話[たいわ]を続[つづ]ける限[かぎ]り、妥当[だとう]な落[お]ち所[どころ]は見出[みだ]せるはずです。",
    translation: "A: I cannot help but feel concern about the attempt to incorporate neuroscientific findings into judgments of criminal responsibility. B: However, the fact that it can objectively present the defendant's mental and physical state is an aspect that should be appreciated as progress in evidence jurisprudence. A: But excessive interpretation of brain images could unduly influence the judge's impression. B: That is correct. However, with a mechanism to rigorously scrutinize expert testimony, the introduction of errors should be preventable to a reasonable degree. A: That said, if the very existence of free will comes into question, the foundation of the legal system could be shaken. B: Careful discussion is indispensable. There may also be a need to newly establish standards for evidentiary admissibility. A: Ultimately, the conclusion will differ greatly depending on the scope of legal application of scientific findings. B: As long as we continue interdisciplinary dialogue, we should be able to find an appropriate resolution.",
    questions: [
      {
        q: "What does A say he cannot help but feel about incorporating neuroscience into criminal responsibility?",
        choices: ["Excitement", "Concern", "Indifference", "Approval"],
        answerIndex: 1,
        explanation: "A says 懸念を禁じ得ない — cannot help but feel concern."
      },
      {
        q: "What does B say should be appreciated as progress in evidence jurisprudence?",
        choices: ["Faster trials", "The ability to objectively present the defendant's mental state", "Lower costs", "More judges"],
        answerIndex: 1,
        explanation: "B says 心身状態を客観的に提示し得る点では...評価すべき側面 — the ability to objectively present mental state."
      },
      {
        q: "What does A warn excessive interpretation of brain images could do?",
        choices: ["Reduce costs", "Unduly influence the judge's impression", "Speed up trials", "Increase transparency"],
        answerIndex: 1,
        explanation: "A says 裁判官の心証を不当に左右しかねない — could unduly influence the judge's impression."
      },
      {
        q: "What does A say could be shaken if the existence of free will comes into question?",
        choices: ["The economy", "The foundation of the legal system", "Public trust", "Foreign relations"],
        answerIndex: 1,
        explanation: "A says 法体系の根幹が揺ぎかねない — the foundation of the legal system could be shaken."
      },
      {
        q: "What does A say the conclusion ultimately depends on?",
        choices: ["The number of experts", "The scope of legal application of scientific findings", "The judge's background", "Public opinion"],
        answerIndex: 1,
        explanation: "A says 科学的知見の法的適用の範囲いかんによって、結論も大きく異なる — depends on the scope of legal application of scientific findings."
      }
    ],
    estMinutes: 7,
    tags: ["neurolaw", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-63 — A cultural appropriation panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-63",
    title: "Cultural Appropriation Panel",
    level: "N1",
    context: "A cultural anthropologist and a creative industries representative debate the ethics of cultural borrowing",
    text: "A: 少数文化[しょうすうぶんか]の要素[ようそ]を、権限[けんげん]なく商業的[しょうぎょうてき]に流用[りゅうよう]する行為[こうい]を巡[めぐ]り、議論[ぎろん]が続[つづ]いています。\nB: ええ。もっとも、文化交流[ぶんかこうりゅう]そのものを否定[ひてい]しては、創造性[そうぞうせい]の源泉[げんせん]を絶[た]つことにもなりかねない。\nA: とはいえ、文脈[ぶんみゃく]を欠[か]した模倣[もほう]は、当該共同体[とうがいきょうどうたい]の尊厳[そんげん]を損[そこ]ないかねない。\nB: 全[まった]くです。もっとも、当事者[とうじしゃ]の同意[どうい]を得[え]た上[うえ]での共有[きょうゆう]であれば、非難[ひなん]に値[あたい]しない例[れい]もあるでしょう。\nA: 被害[ひがい]の程度[ていど]いかんにかかわらず、一律[いちりつ]に禁止[きんし]を求[もと]める声[こえ]もあるが、現実的[げんじつてき]とは言[い]えない。\nB: おっしゃる通[とお]りです。個別事案[こべつじあん]の文脈[ぶんみゃく]に即[そく]した判断[はんだん]が求[もと]められるでしょう。\nA: 最終的[さいしゅうてき]には、当事者間[とうじしゃかん]の対話[たいわ]を欠[か]かさない限[かぎ]り、本質的[ほんしつてき]な解決[かいけつ]は望[のぞ]めない。\nB: 敬意[けいい]と理解[りかい]を前提[ぜんてい]とした関係構築[かんけいこうちく]こそが不可欠[ふかけつ]ですね。",
    translation: "A: Debate continues over the act of commercially appropriating elements of minority cultures without permission. B: Yes. However, denying cultural exchange itself could end up cutting off the source of creativity. A: That said, context-stripped imitation could undermine the dignity of the community in question. B: Quite so. That said, there are cases of sharing with the consent of those involved that are not worthy of criticism. A: Regardless of the degree of harm, voices demanding blanket prohibition are unrealistic. B: You are right. Judgments that accord with the context of individual cases will be required. A: Ultimately, without continuous dialogue between those involved, fundamental resolution cannot be hoped for. B: Relationship-building premised on respect and understanding is what is truly indispensable.",
    questions: [
      {
        q: "What does B warn denying cultural exchange itself could cut off?",
        choices: ["Trade", "The source of creativity", "Tourism", "Funding"],
        answerIndex: 1,
        explanation: "B says 創造性の源泉を絶つことにもなりかねない — could cut off the source of creativity."
      },
      {
        q: "What does A say context-stripped imitation could undermine?",
        choices: ["The economy", "The dignity of the community", "Tourism revenue", "Brand value"],
        answerIndex: 1,
        explanation: "A says 当該共同体の尊厳を損ないかねない — could undermine the community's dignity."
      },
      {
        q: "According to B, what kind of sharing is not worthy of criticism?",
        choices: ["Unauthorized commercial use", "Sharing with the consent of those involved", "Mass reproduction", "Anonymized sampling"],
        answerIndex: 1,
        explanation: "B says 当事者の同意を得た上での共有であれば、非難に値しない — sharing with the parties' consent is not blameworthy."
      },
      {
        q: "What does A call the voices demanding blanket prohibition regardless of harm degree?",
        choices: ["Progressive", "Unrealistic", "Necessary", "Popular"],
        answerIndex: 1,
        explanation: "A says 一律に禁止を求める声もあるが、現実的とは言えない — blanket prohibition demands are unrealistic."
      },
      {
        q: "What does A say cannot be hoped for without continuous dialogue?",
        choices: ["More sales", "Fundamental resolution", "Lower costs", "Faster production"],
        answerIndex: 1,
        explanation: "A says 当事者間の対話を欠かさない限り、本質的な解決は望めない — without dialogue, fundamental resolution is unattainable."
      }
    ],
    estMinutes: 6,
    tags: ["culture", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-64 — A surveillance capitalism critique
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-64",
    title: "Surveillance Capitalism Critique",
    level: "N1",
    context: "A digital rights advocate and a tech executive debate data-extraction business models",
    text: "A: 個人[こじん]データの無断収集[むだんしゅうしゅう]を前提[ぜんてい]としたビジネスモデルを、放置[ほうち]してはならない。\nB: ええ、もっとも、テクノロジーそのものを排斥[はいせき]すれば、経済効率[けいざいこうりつ]の向上[こうじょう]をも逸[いっ]することになろう。\nA: とはいえ、ユーザーの選択[せんたく]の自由[じゆう]が形骸化[けいがいか]している現状[げんじょう]では、契約[けいやく]の実質的公正[じっしつてきこうせい]は担保[たんぽ]されない。\nB: 全[まった]くです。もっとも、情報[じょうほう]の非対称性[ひたいしょうせい]を放置[ほうち]したままでは、いかなる規制[きせい]も形式[けいしき]にとどまりかねない。\nA: 監視[かんし]の常態化[じょうたいか]が個人[こじん]の自律性[じりつせい]を蝕[むしば]むことは、看過[かんか]し得[え]ない事態[じたい]です。\nB: そのとおりです。透明性[とうめいせい]の確保[かくほ]いかんによって、信頼[しんらい]の回復[かいふく]も果[はた]たせるか否[いな]かが決[き]まりましょう。\nA: 取引[とりひき]の条件[じょうけん]を一方的[いっぽうてき]に提示[ていじ]する企業[きぎょう]には、罰則[ばっそく]を科[か]さずにはおかないでしょう。\nB: 法的枠組[ほうてきわくぐみ]の整備[せいび]が急務[きゅうむ]ですね。引[ひ]き続[つづ]き議論[ぎろん]を深[ふか]めたいと存[ぞん]じます。",
    translation: "A: We must not leave unaddressed business models premised on the unauthorized collection of personal data. B: Yes. However, rejecting technology itself would also forfeit improvements in economic efficiency. A: That said, given the current state in which users' freedom of choice has become hollowed out, the substantive fairness of contracts is not guaranteed. B: Quite so. However, leaving information asymmetry unaddressed means any regulation risks remaining merely formal. A: That the normalization of surveillance erodes individual autonomy is a situation we cannot overlook. B: That is correct. Whether trust can be restored will depend on whether transparency is secured. A: Companies that unilaterally present transaction conditions will inevitably be penalized. B: Establishing a legal framework is an urgent task. I would like to continue deepening this discussion.",
    questions: [
      {
        q: "What does B warn rejecting technology itself would also forfeit?",
        choices: ["Market share", "Improvements in economic efficiency", "User base", "Brand value"],
        answerIndex: 1,
        explanation: "B says 経済効率の向上をも逸することになろう — would forfeit efficiency improvements."
      },
      {
        q: "What does A say is not guaranteed given users' freedom of choice has hollowed out?",
        choices: ["Profit", "Substantive fairness of contracts", "Data accuracy", "Server uptime"],
        answerIndex: 1,
        explanation: "A says 契約の実質的公正は担保されない — substantive fairness of contracts is not guaranteed."
      },
      {
        q: "According to B, what does leaving information asymmetry unaddressed make any regulation risk?",
        choices: ["More costly", "Merely formal", "Faster", "Stricter"],
        answerIndex: 1,
        explanation: "B says いかなる規制も形式にとどまりかねない — any regulation risks remaining merely formal."
      },
      {
        q: "What does A say is a situation that cannot be overlooked?",
        choices: ["Lower revenue", "The normalization of surveillance eroding individual autonomy", "More regulation", "Slower growth"],
        answerIndex: 1,
        explanation: "A says 監視の常態化が個人の自律性を蝕むことは、看過し得ない事態 — surveillance normalization eroding autonomy."
      },
      {
        q: "What does A say will inevitably happen to companies that unilaterally present transaction conditions?",
        choices: ["Profit more", "Be penalized", "Lose users", "Gain trust"],
        answerIndex: 1,
        explanation: "A says 罰則を科さずにはおかない — they will inevitably be penalized."
      }
    ],
    estMinutes: 7,
    tags: ["technology", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-65 — An animal consciousness symposium
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-65",
    title: "Animal Consciousness Symposium",
    level: "N1",
    context: "A philosopher and a neuroscientist debate whether animals have subjective experience",
    text: "A: 動物[どうぶつ]の意識[いしき]の有無[うむ]をめぐり、哲学者[てつがくしゃ]と神経科学者[しんけいかがくしゃ]の間[あいだ]で見解[けんかい]が割[わ]れている。\nB: ええ。もっとも、脳波[のは]や行動[こうどう]パターンを根拠[こんきょ]とすれば、一定[いってい]の推論[すいろん]は可能[かのう]だ。\nA: とはいえ、主観的体験[しゅかんてきたいけん]の存否[そんぴ]は、人間[にんげん]の認識[にんしき]の枠[わく]を超[こ]えた問題[もんだい]である。\nB: そのとおりです。とはいえ、経験的証拠[けいけんてきしょうこ]を蓄積[ちくせき]し続[つづ]ける限[かぎ]り、間接的[かんせつてき]な裏付[うらづ]けは増[ふ]えましょう。\nA: もっとも、倫理的配慮[りんりてきはいりょ]を先送[さきおく]りすれば、動物実験[どうぶつじっけん]の正当性[せいとうせい]は問[と]われずにはおかない。\nB: 全[まった]くです。政策[せいさく]の方向[ほうこう]いかんにかかわらず、慎重[しんちょう]な議論[ぎろん]が求[もと]められます。\nA: 最終的[さいしゅうてき]には、概念的[がいねんてき]な境界[きょうかい]を再[ふたた]び定義[ていぎ]し直[なお]す作業[さぎょう]が避[さ]けられない。\nB: 学際的[がくさいてき]な知見[ちけん]を統合[とうごう]しつつ、議論[ぎろん]を深[ふか]めて参[まい]りましょう。",
    translation: "A: Views are divided between philosophers and neuroscientists over whether animals possess consciousness. B: Yes. However, if we rely on brain waves and behavioral patterns as evidence, a certain degree of inference is possible. A: That said, the existence or non-existence of subjective experience is a problem beyond the framework of human cognition. B: That is correct. That said, as long as we continue accumulating empirical evidence, indirect corroboration will grow. A: However, if we postpone ethical consideration, the legitimacy of animal experimentation will inevitably be called into question. B: Quite so. Regardless of policy direction, careful discussion is required. A: Ultimately, the task of redefining conceptual boundaries is unavoidable. B: Let us deepen the discussion while integrating interdisciplinary findings.",
    questions: [
      {
        q: "What does B say a certain degree of inference is possible from, if used as evidence?",
        choices: ["Self-reports", "Brain waves and behavioral patterns", "Interviews", "Historical data"],
        answerIndex: 1,
        explanation: "B says 脳波や行動パターンを根拠とすれば、一定の推論は可能 — brain waves and behavioral patterns allow some inference."
      },
      {
        q: "What does A call a problem beyond the framework of human cognition?",
        choices: ["Brain anatomy", "The existence of subjective experience", "Behavioral patterns", "Language ability"],
        answerIndex: 1,
        explanation: "A says 主観的体験の存否は、人間の認識の枠を超えた問題 — the existence of subjective experience."
      },
      {
        q: "What does A say will inevitably happen if ethical consideration is postponed?",
        choices: ["Faster research", "The legitimacy of animal experiments will be questioned", "Lower costs", "More funding"],
        answerIndex: 1,
        explanation: "A says 動物実験の正当性は問われずにはおかない — animal experiment legitimacy will inevitably be questioned."
      },
      {
        q: "What does B say is required regardless of policy direction?",
        choices: ["More funding", "Careful discussion", "Faster experiments", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 政策の方向いかんにかかわらず、慎重な議論が求められる — careful discussion is required regardless."
      },
      {
        q: "What does A say is ultimately unavoidable?",
        choices: ["More experiments", "Redefining conceptual boundaries", "Banning all research", "Lowering budgets"],
        answerIndex: 1,
        explanation: "A says 概念的な境界を再び定義し直す作業が避けられない — redefining conceptual boundaries is unavoidable."
      }
    ],
    estMinutes: 6,
    tags: ["philosophy", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-66 — A decolonization curriculum debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-66",
    title: "Decolonization Curriculum Debate",
    level: "N1",
    context: "A historian and an education ministry official debate how to teach colonial history",
    text: "A: 植民地主義[しょくみんちしゅぎ]の歴史[れきし]を教科書[きょうかしょ]に盛[も]り込[こ]むか否[いな]か、意見[いけん]が割[わ]れている。\nB: ええ。もっとも、過去[かこ]の過[あやま]ちを直視[ちょくし]しない限[かぎ]り、真[しん]の和解[わかい]は望[のぞ]めない。\nA: とはいえ、一方的[いっぽうてき]な告発[こくはつ]に終[お]われば、歴史教育[れきしきょういく]がイデオロギー化[か]しかねない。\nB: 全[まった]くです。複眼的[ふくがんてき]な視点[してん]を担保[たんぽ]する限[かぎ]り、多角的[たかくてき]な理解[りかい]が促[うなが]されよう。\nA: もっとも、指導者[しどうしゃ]の政治的立場[せいじてきたちば]いかんによっては、記述[きじゅつ]の偏向[へんこう]を招[まね]かずにはおかない。\nB: ご懸念[けねん]は尤[もっと]もです。複数[ふくすう]の専門家[せんもんか]による査読体制[さどうたいせい]を整備[せいび]すべきでしょう。\nA: 最終的[さいしゅうてき]には、地域[ちいき]の文脈[ぶんみゃく]に即[そく]した教材[きょうざい]開発[かいはつ]が不可欠[ふかけつ]です。\nB: 次世代[じせだい]に批判的思考[ひはんてきしこう]を継承[けいしょう]するためにも、地道[じみち]に取[と]り組[く]みたいものです。",
    translation: "A: Opinions are divided over whether to incorporate the history of colonialism into textbooks. B: Yes. However, without directly confronting past wrongs, true reconciliation cannot be hoped for. A: That said, if it ends in one-sided denunciation, history education could become ideologized. B: Quite so. As long as multifaceted perspectives are secured, multifaceted understanding will be encouraged. A: However, depending on the political stance of instructors, biased descriptions will inevitably be invited. B: Your concern is reasonable. A peer-review system involving multiple experts should be established. A: Ultimately, developing teaching materials that accord with regional context is indispensable. B: To pass critical thinking on to the next generation, we wish to engage in this steadily.",
    questions: [
      {
        q: "What does B say cannot be hoped for without confronting past wrongs?",
        choices: ["Economic growth", "True reconciliation", "Higher test scores", "Faster reform"],
        answerIndex: 1,
        explanation: "B says 過去の過ちを直視しない限り、真の和解は望めない — without confronting past wrongs, true reconciliation is impossible."
      },
      {
        q: "What does A warn one-sided denunciation could turn history education into?",
        choices: ["More popular", "Ideologized", "Cheaper", "Faster"],
        answerIndex: 1,
        explanation: "A says 一方的な告発に終われば、歴史教育がイデオロギー化しかねない — history education could become ideologized."
      },
      {
        q: "What does A say will inevitably happen depending on instructors' political stance?",
        choices: ["Better materials", "Biased descriptions", "Faster learning", "More students"],
        answerIndex: 1,
        explanation: "A says 指導者の政治的立場いかんによっては、記述の偏向を招かずにはおかない — biased descriptions will inevitably be invited."
      },
      {
        q: "What does B say should be established to address concerns about bias?",
        choices: ["A single expert reviewer", "A peer-review system with multiple experts", "Fewer textbooks", "More funding"],
        answerIndex: 1,
        explanation: "B says 複数の専門家による査読体制を整備すべき — a peer-review system with multiple experts should be set up."
      },
      {
        q: "What does A call indispensable ultimately?",
        choices: ["More funding", "Developing materials that accord with regional context", "Foreign models", "Standardized tests"],
        answerIndex: 1,
        explanation: "A says 地域の文脈に即した教材開発が不可欠 — materials matching regional context are indispensable."
      }
    ],
    estMinutes: 7,
    tags: ["education", "history"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-67 — A pharmaceutical pricing hearing
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-67",
    title: "Pharmaceutical Pricing Hearing",
    level: "N1",
    context: "A health ministry official and an industry representative debate new drug pricing reform",
    text: "A: 新薬[しんやく]の薬価算定[やっかさんてい]方式[ほうしき]の見直[みなお]しについて、関係者[かんけいしゃ]の意見[いけん]が対立[たいりつ]しています。\nB: ええ。もっとも、革新的治療薬[かくしんてきちりょうやく]の開発費[かいはつひ]を回収[かいしゅう]できなければ、企業[きぎょう]の投資意欲[とうしいよく]は失[うしな]われよう。\nA: とはいえ、患者[かんじゃ]の支払能力[しはらのうりょく]を超[こ]える価格設定[かかくせってい]は、医療[いりょう]の公平性[こうへいせい]を損[そこ]なう。\nB: その通[とお]りです。公共的視点[こうきょうてきしてん]の導入[どうにゅう]いかんによっては、両立[りょうりつ]も可能[かのう]でしょう。\nA: もっとも、海外[かいがい]との価格差[かかくさ]を放置[ほうち]すれば、並行輸入[へいこうゆにゅう]の蔓延[まんえん]を招[まね]かずにはおかない。\nB: 全[まった]くです。特許期間[とっきょきかん]の柔軟[じゅうなん]な運用[うんよう]も視野[しや]に入[い]れるべきでしょう。\nA: 最終的[さいしゅうてき]には、価格交渉[かかくこうしょう]の透明性[とうめいせい]次第[しだい]で、制度[せいど]の信頼度[しんらいど]も変[か]わるはずです。\nB: 患者団体[かんじゃだんたい]の声[こえ]にも耳[みみ]を傾[かたむ]けつつ、制度設計[せいどせっけい]を練[ね]り直[なお]したいと存[ぞん]じます。",
    translation: "A: Stakeholders are divided over revising the formula for calculating new drug prices. B: Yes. However, if development costs for innovative therapeutics cannot be recovered, companies' investment appetite will be lost. A: That said, pricing that exceeds patients' ability to pay undermines the fairness of healthcare. B: That is correct. Depending on whether a public-interest perspective is introduced, both goals could be balanced. A: However, leaving the price gap with overseas markets unaddressed will inevitably invite the spread of parallel imports. B: Quite so. Flexible operation of patent periods should also be considered. A: Ultimately, the credibility of the system will depend on the transparency of price negotiations. B: While listening to patient groups' voices, we wish to redesign the system.",
    questions: [
      {
        q: "What does B say will be lost if development costs cannot be recovered?",
        choices: ["Market share", "Companies' investment appetite", "Brand value", "Patient trust"],
        answerIndex: 1,
        explanation: "B says 企業の投資意欲は失われよう — companies' investment appetite will be lost."
      },
      {
        q: "What does A say pricing that exceeds patients' ability to pay undermines?",
        choices: ["Innovation", "The fairness of healthcare", "Profit", "Drug quality"],
        answerIndex: 1,
        explanation: "A says 医療の公平性を損なう — undermines the fairness of healthcare."
      },
      {
        q: "What does A say will inevitably happen if the overseas price gap is left unaddressed?",
        choices: ["Lower prices", "The spread of parallel imports", "More innovation", "Faster approvals"],
        answerIndex: 1,
        explanation: "A says 並行輸入の蔓延を招かずにはおかない — parallel imports will inevitably spread."
      },
      {
        q: "What does B say should also be considered?",
        choices: ["Lower taxes", "Flexible operation of patent periods", "Higher tariffs", "Fewer regulations"],
        answerIndex: 1,
        explanation: "B says 特許期間の柔軟な運用も視野に入れるべき — flexible patent period operation should be considered."
      },
      {
        q: "What does A say the credibility of the system ultimately depends on?",
        choices: ["More funding", "Transparency of price negotiations", "Faster approvals", "Foreign pressure"],
        answerIndex: 1,
        explanation: "A says 価格交渉の透明性次第で、制度の信頼度も変わる — depends on transparency of price negotiations."
      }
    ],
    estMinutes: 7,
    tags: ["healthcare", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-68 — A space law treaty negotiation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-68",
    title: "Space Law Treaty Negotiation",
    level: "N1",
    context: "A diplomat and a space industry lawyer negotiate a multilateral asteroid-mining treaty",
    text: "A: 宇宙資源[うちゅうしげん]の採掘権[さいくつけん]をめぐり、多国間条約[たこくかんじょうやく]の締結[ていけつ]に向[む]けた交渉[こうしょう]が難航[なんこう]しています。\nB: ええ。もっとも、先発国[せんぱつこく]が既得権[きとっけん]を主張[しゅちょう]し続[つづ]ける限[かぎ]り、合意形成[ごういけいせい]は困難[こんなん]です。\nA: とはいえ、開発[かいはつ]リスクを負[お]った主体[しゅたい]の利益[りえき]を保護[ほご]しなければ、技術革新[ぎじゅつかくしん]は停滞[ていたい]しかねない。\nB: その通[とお]りです。もっとも、利益配分[りえきはいぶん]の基準[きじゅん]いかんによっては、衡平[こうへい]な解決[かいけつ]も望[のぞ]めましょう。\nA: もっとも、途上国[とじょうこく]の参入[さんにゅう]を阻害[そがい]する条項[じょうこう]は、国際連帯[こくさいれんたい]の理念[りねん]に反[はん]する。\nB: 全[まった]くです。共同管理機関[きょうどうかんりきかん]の設置[せっち]を前提[ぜんてい]とすれば、透明性[とうめいせい]は担保[たんぽ]されよう。\nA: 最終的[さいしゅうてき]には、条約[じょうやく]の履行体制[りこうたいせい]次第[しだい]で、実効性[じっこうせい]も左右[さゆう]される。\nB: 多国間協議[たこくかんきょうぎ]を重[かさ]ね、包摂的枠組[ほうせつてきわくぐみ]を構築[こうちく]して参[まい]りましょう。",
    translation: "A: Negotiations toward concluding a multilateral treaty over asteroid-mining rights are struggling. B: Yes. However, as long as early-mover nations continue claiming acquired rights, consensus-building will be difficult. A: That said, if we do not protect the interests of actors who bore development risk, technological innovation could stagnate. B: That is correct. That said, depending on the criteria for benefit distribution, an equitable resolution could be hoped for. A: However, provisions that impede developing nations' participation run counter to the ideal of international solidarity. B: Quite so. If we presuppose the establishment of a joint management body, transparency will be secured. A: Ultimately, the effectiveness will depend on the treaty's implementation framework. B: Let us hold further multilateral consultations and build an inclusive framework.",
    questions: [
      {
        q: "What does B say makes consensus-building difficult?",
        choices: ["Slow negotiations", "Early-mover nations continuing to claim acquired rights", "Lack of funding", "Too few participants"],
        answerIndex: 1,
        explanation: "B says 先発国が既得権を主張し続ける限り、合意形成は困難 — early movers claiming acquired rights makes consensus difficult."
      },
      {
        q: "What does A say could stagnate if development-risk-bearers' interests are not protected?",
        choices: ["Trade", "Technological innovation", "Tourism", "Diplomacy"],
        answerIndex: 1,
        explanation: "A says 技術革新は停滞しかねない — technological innovation could stagnate."
      },
      {
        q: "What does A say provisions that impede developing nations' participation run counter to?",
        choices: ["Free trade", "The ideal of international solidarity", "Efficiency", "Profit"],
        answerIndex: 1,
        explanation: "A says 途上国の参入を阻害する条項は、国際連帯の理念に反する — runs counter to international solidarity."
      },
      {
        q: "What does B say will secure transparency, if presupposed?",
        choices: ["More funding", "The establishment of a joint management body", "Faster approvals", "Lower fees"],
        answerIndex: 1,
        explanation: "B says 共同管理機関の設置を前提とすれば、透明性は担保されよう — a joint management body would secure transparency."
      },
      {
        q: "What does A say the treaty's effectiveness ultimately depends on?",
        choices: ["Signatory count", "The treaty's implementation framework", "Funding levels", "Foreign pressure"],
        answerIndex: 1,
        explanation: "A says 条約の履行体制次第で、実効性も左右される — depends on the implementation framework."
      }
    ],
    estMinutes: 7,
    tags: ["space-law", "diplomacy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-69 — A migration ethics forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-69",
    title: "Migration Ethics Forum",
    level: "N1",
    context: "A humanitarian policy scholar and a domestic security advisor debate refugee intake expansion",
    text: "A: 難民[なんみん]受入枠[うけいれわく]の拡大[かくだい]について、賛否両論[さんぴりょうろん]が交[まじ]わされています。\nB: ええ。もっとも、人道的義務[じんどうてきぎむ]を怠[おこた]れば、国際社会[こくさいしゃかい]からの信用[しんよう]を失[うしな]いかねない。\nA: とはいえ、受入側[うけいれがわ]の経済的負担[けいざいてきふたん]を無視[むし]すれば、国内[こくない]の反発[はんぱつ]を招[まね]かずにはおかない。\nB: 全[まった]くです。もっとも、統合政策[とうごうせいさく]の充実[じゅうじつ]いかんによっては、懸念[けねん]も和[やわ]らげられよう。\nA: もっとも、文化的摩擦[ぶんかてきまさつ]の解決[かいけつ]を先送[さきおく]りすれば、分断[ぶんだん]の長期化[ちょうきか]は避[さ]けられない。\nB: ご指摘[してき]のとおりです。地域社会[ちいきしゃかい]との対話[たいわ]を欠[か]かさない限[かぎ]り、共生[きょうせい]は定着[ていちゃく]しまい。\nA: 最終的[さいしゅうてき]には、制度設計[せいどせっけい]の柔軟性[じゅうなんせい]いかんにかかわらず、運用[うんよう]の現場[げんば]が鍵[かぎ]を握[にぎ]るでしょう。\nB: 持続的[じぞくてき]な受入体制[うけいれたいせい]を整備[せいび]すべく、取[と]り組[く]みを加速[かそく]させたいと存[ぞん]じます。",
    translation: "A: Both pros and cons are being voiced on the expansion of refugee intake quotas. B: Yes. However, neglecting humanitarian obligations could lose the trust of the international community. A: That said, ignoring the economic burden on the receiving side will inevitably invite domestic backlash. B: Quite so. That said, depending on how thoroughly integration policy is fleshed out, concerns could be eased. A: However, postponing resolution of cultural friction will make the prolongation of division unavoidable. B: You are right. Without continuous dialogue with local communities, coexistence will not take root. A: Ultimately, regardless of how flexible the institutional design is, the operational front line will hold the key. B: We wish to accelerate our efforts to build a sustainable intake framework.",
    questions: [
      {
        q: "What does B say could be lost if humanitarian obligations are neglected?",
        choices: ["Trade deals", "The trust of the international community", "Domestic support", "Funding"],
        answerIndex: 1,
        explanation: "B says 国際社会からの信用を失いかねない — could lose international trust."
      },
      {
        q: "What does A say will inevitably be invited if the receiving side's economic burden is ignored?",
        choices: ["Lower costs", "Domestic backlash", "More funding", "Faster intake"],
        answerIndex: 1,
        explanation: "A says 国内の反発を招かずにはおかない — domestic backlash will inevitably be invited."
      },
      {
        q: "What does A say is unavoidable if resolution of cultural friction is postponed?",
        choices: ["Faster integration", "The prolongation of division", "Lower costs", "More funding"],
        answerIndex: 1,
        explanation: "A says 分断の長期化は避けられない — the prolongation of division is unavoidable."
      },
      {
        q: "What does B say will not take root without continuous dialogue with local communities?",
        choices: ["Economy", "Coexistence", "Tourism", "Trade"],
        answerIndex: 1,
        explanation: "B says 地域社会との対話を欠かさない限り、共生は定着しまい — coexistence will not take root."
      },
      {
        q: "What does A say will hold the key ultimately, regardless of how flexible institutional design is?",
        choices: ["More funding", "The operational front line", "Public opinion", "Foreign pressure"],
        answerIndex: 1,
        explanation: "A says 制度設計の柔軟性いかんにかかわらず、運用の現場が鍵を握る — the operational front line holds the key."
      }
    ],
    estMinutes: 7,
    tags: ["migration", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-70 — A data sovereignty summit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-70",
    title: "Data Sovereignty Summit",
    level: "N1",
    context: "A national security advisor and a cloud industry strategist debate cross-border data rules",
    text: "A: クラウドサービスの海外依存[かいがいぞん]をめぐり、データ主権[しゅけん]の確立[かくりつ]が急務[きゅうむ]となっています。\nB: ええ。もっとも、外国法[がいこくほう]の管轄下[かんかつか]に置[お]かれれば、国内情報[こくないじょうほう]の保護[ほご]は困難[こんなん]です。\nA: とはいえ、技術的自給[ぎじゅつてきじきゅう]を急[いそ]げば、コスト増大[ぞうだい]で産業競争力[さんぎょうきょうそうりょく]を損[そこ]ないかねない。\nB: 全[まった]くです。もっとも、相互運用性[そうごうんようせい]を担保[たんぽ]する限[かぎ]り、閉鎖的体制[へいさてきたいせい]には陥[おちい]るまい。\nA: 監視当局[かんしとうきょく]への無制限[むせいげん]のデータ提供[ていきょう]は、個人[こじん]のプライバシーを侵[おか]しかねない。\nB: おっしゃる通[とお]りです。法的枠組[ほうてきわくぐみ]の整備[せいび]いかんによって、利用者[りようしゃ]の信頼[しんらい]も保[たも]たれよう。\nA: 最終的[さいしゅうてき]には、データの越境移転[えっきょういてん]ルール次第[しだい]で、経済安全保障[けいざいあんぜんほしょう]も左右[さゆう]されよう。\nB: 国益[こくえき]と自由貿易[じゆうぼうえき]の均衡[きんこう]を図[はか]りつつ、ルール形成[けいせい]を主導[しゅどう]して参[まい]りましょう。",
    translation: "A: With reliance on overseas cloud services, establishing data sovereignty has become urgent. B: Yes. However, if placed under foreign legal jurisdiction, protecting domestic information becomes difficult. A: That said, rushing technological self-sufficiency could harm industrial competitiveness through cost increases. B: Quite so. However, as long as interoperability is secured, we will not fall into a closed regime. A: Unlimited data provision to surveillance authorities could infringe on individual privacy. B: You are right. Depending on the establishment of a legal framework, users' trust may also be maintained. A: Ultimately, economic security will also be influenced by the rules on cross-border data transfer. B: While balancing national interest and free trade, let us lead rule-making.",
    questions: [
      {
        q: "What does A say has become urgent given reliance on overseas cloud services?",
        choices: ["Lower prices", "Establishing data sovereignty", "Faster servers", "More storage"],
        answerIndex: 1,
        explanation: "A says データ主権の確立が急務 — establishing data sovereignty is urgent."
      },
      {
        q: "What does B say becomes difficult if placed under foreign legal jurisdiction?",
        choices: ["Trade", "Protecting domestic information", "Profit", "Storage"],
        answerIndex: 1,
        explanation: "B says 国内情報の保護は困難 — protecting domestic information is difficult."
      },
      {
        q: "What does A warn rushing technological self-sufficiency could harm through cost increases?",
        choices: ["Quality", "Industrial competitiveness", "Privacy", "Speed"],
        answerIndex: 1,
        explanation: "A says コスト増大で産業競争力を損ないかねない — could harm industrial competitiveness."
      },
      {
        q: "What does B say we will not fall into as long as interoperability is secured?",
        choices: ["Higher costs", "A closed regime", "More regulation", "Slower speeds"],
        answerIndex: 1,
        explanation: "B says 相互運用性を担保する限り、閉鎖的体制には陥るまい — will not fall into a closed regime."
      },
      {
        q: "What does A say economic security will ultimately be influenced by?",
        choices: ["Server location", "Rules on cross-border data transfer", "Storage costs", "User count"],
        answerIndex: 1,
        explanation: "A says データの越境移転ルール次第で、経済安全保障も左右されよう — depends on cross-border data transfer rules."
      }
    ],
    estMinutes: 6,
    tags: ["data-policy", "security"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-71 — A psychiatric ethics case
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-71",
    title: "Psychiatric Ethics Case",
    level: "N1",
    context: "An ethics committee chair and a treating psychiatrist debate extending involuntary admission",
    text: "A: 重度[じゅうど]の統合失調症[とうごうしっちょうしょう]患者[かんじゃ]に対[たい]する強制入院[きょうせいにゅういん]の延長[えんちょう]が、倫理委員会[りんりいいんかい]で審査[しんさ]されています。\nB: ええ。もっとも、患者[かんじゃ]の意思表示能力[いしひょうじのうりょく]いかんによっては、本人[ほんにん]の同意[どうい]を要件[ようけん]とする原則[げんそく]は適用[てきよう]しがたい。\nA: とはいえ、最小限制原則[さいしょうげんせいげんそく]を怠[おこた]れば、人格権[じんかくけん]の侵害[しんがい]を免[まぬが]れまい。\nB: 全[まった]くです。もっとも、代替療法[だいたいりょうほう]の有無[うむ]次第[しだい]で、強制措置[きょうせいそち]の相当性[そうとうせい]も変[か]わるはずです。\nA: もっとも、処遇[しょぐう]の透明性[とうめいせい]を欠[か]けば、濫用[らんよう]の温床[おんしょう]となりかねない。\nB: ご指摘[してき]のとおりです。定期的審査[ていきてきしんさ]を義務付[ぎむづ]ける限[かぎ]り、人権[じんけん]の担保[たんぽ]は保[たも]たれよう。\nA: 最終的[さいしゅうてき]には、医療[いりょう]チームの判断[はんだん]いかんにかかわらず、第三者機関[だいさんしゃきかん]の監督[かんとく]が欠[か]かせない。\nB: 患者[かんじゃ]の尊厳[そんげん]と公共安全[こうきょうあんぜん]の両立[りょうりつ]を図[はか]りつつ、適正[てきせい]な運用[うんよう]を模索[もさく]して参[まい]りましょう。",
    translation: "A: The extension of involuntary admission for a patient with severe schizophrenia is under review by the ethics committee. B: Yes. However, depending on the patient's capacity to express intent, the principle requiring the person's own consent is hard to apply. A: That said, if we neglect the least-restriction principle, we will not escape infringement of personality rights. B: Quite so. That said, depending on whether alternative therapies exist, the proportionality of coercive measures should also differ. A: However, lacking transparency in treatment could become a breeding ground for abuse. B: You are right. As long as periodic review is mandated, the guarantee of human rights will be maintained. A: Ultimately, regardless of the medical team's judgment, oversight by a third-party body is indispensable. B: While balancing patient dignity and public safety, let us explore proper operation.",
    questions: [
      {
        q: "What does B say is hard to apply, depending on the patient's capacity to express intent?",
        choices: ["Medication", "The principle requiring the person's consent", "Therapy sessions", "Discharge"],
        answerIndex: 1,
        explanation: "B says 本人の同意を要件とする原則は適用しがたい — the consent-based principle is hard to apply."
      },
      {
        q: "What does A say we will not escape if we neglect the least-restriction principle?",
        choices: ["Higher costs", "Infringement of personality rights", "Longer stays", "More medication"],
        answerIndex: 1,
        explanation: "A says 最小限制原則を怠れば、人格権の侵害を免れまい — cannot escape personality rights infringement."
      },
      {
        q: "What does A warn lacking transparency in treatment could become?",
        choices: ["More efficient", "A breeding ground for abuse", "Faster", "Cheaper"],
        answerIndex: 1,
        explanation: "A says 処遇の透明性を欠けば、濫用の温床となりかねない — could become a breeding ground for abuse."
      },
      {
        q: "What does B say will maintain the guarantee of human rights, as long as it is mandated?",
        choices: ["More funding", "Periodic review", "Faster discharge", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 定期的審査を義務付ける限り、人権の担保は保たれよう — periodic review maintains human rights guarantees."
      },
      {
        q: "What does A call indispensable ultimately, regardless of the medical team's judgment?",
        choices: ["More beds", "Oversight by a third-party body", "Higher budgets", "More staff"],
        answerIndex: 1,
        explanation: "A says 医療チームの判断いかんにかかわらず、第三者機関の監督が欠かせない — third-party oversight is indispensable."
      }
    ],
    estMinutes: 7,
    tags: ["psychiatry", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-72 — A labor union history lecture
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-72",
    title: "Labor Union History Lecture",
    level: "N1",
    context: "A labor historian and a sociology professor discuss postwar union movement lessons",
    text: "A: 戦後[せんご]の労働組合運動[ろうどうくみあいうんどう]の歴史[れきし]を振[ふ]り返[かえ]ると、制度的抑圧[せいどてきよくあつ]との闘争[とうそう]が浮[う]かび上[あ]がります。\nB: ええ。もっとも、過激闘争[かげきとうそう]に固埢[こしつ]すれば、大衆[たいしゅう]の支持[しじ]を失[うしな]いかねない。\nA: とはいえ、団体交渉権[だんたいこうしょうけん]の行使[こうし]を制限[せいげん]すれば、民主社会[みんしゅしゃかい]の基盤[きばん]が揺[ゆる]ぎかねない。\nB: 全[まった]くです。もっとも、組合側[くみあいがわ]の戦略[せんりゃく]いかんによっては、社会的合意形成[しゃかいてきごういけいせい]も進[すす]みましょう。\nA: もっとも、政党[せいとう]との過度[かど]な癒着[ゆちゃく]は、組合[くみあい]の独立性[どくりつせい]を損[そこ]ないかねない。\nB: ご指摘[してき]のとおりです。組合員[くみあいいん]の意思[いし]を反映[はんえい]し続[つづ]ける限[かぎ]り、組織[そしき]の正統性[せいとうせい]は保[たも]たれよう。\nA: 最終的[さいしゅうてき]には、制度的変革[せいどてきへんかく]の遂行[すいこう]いかんにかかわらず、地道[じみち]な啓蒙活動[けいもうかつどう]が欠[か]かせない。\nB: 次世代[じせだい]に連帯精神[れんたいせいしん]を継承[けいしょう]すべく、歴史[れきし]の教訓[きょうくん]を語[かた]り継[つ]いで参[まい]りましょう。",
    translation: "A: Looking back at the history of the postwar labor union movement, what emerges is a struggle against institutional oppression. B: Yes. However, clinging to radical struggle could lose mass support. A: That said, restricting the exercise of collective bargaining rights could shake the foundations of a democratic society. B: Quite so. That said, depending on the union side's strategy, social consensus-building could also advance. A: However, excessive collusion with political parties could undermine the union's independence. B: You are right. As long as union members' intent continues to be reflected, the organization's legitimacy will be maintained. A: Ultimately, regardless of whether institutional reform is carried out, steady enlightenment activity is indispensable. B: To pass on the spirit of solidarity to the next generation, let us hand down the lessons of history.",
    questions: [
      {
        q: "What does A say emerges from looking back at postwar union history?",
        choices: ["Economic growth", "A struggle against institutional oppression", "Political dominance", "Cultural shifts"],
        answerIndex: 1,
        explanation: "A says 制度的抑圧との闘争が浮かび上がる — a struggle against institutional oppression emerges."
      },
      {
        q: "What does B warn clinging to radical struggle could lose?",
        choices: ["Funding", "Mass support", "Leadership", "Membership"],
        answerIndex: 1,
        explanation: "B says 大衆の支持を失いかねない — could lose mass support."
      },
      {
        q: "What does A say could shake the foundations of a democratic society?",
        choices: ["Lower wages", "Restricting collective bargaining rights", "Higher taxes", "Faster elections"],
        answerIndex: 1,
        explanation: "A says 団体交渉権の行使を制限すれば、民主社会の基盤が揺ぎかねない — restricting collective bargaining."
      },
      {
        q: "What does A warn excessive collusion with political parties could undermine?",
        choices: ["Wages", "The union's independence", "Membership", "Funding"],
        answerIndex: 1,
        explanation: "A says 組合の独立性を損ないかねない — could undermine the union's independence."
      },
      {
        q: "What does A call indispensable ultimately, regardless of institutional reform?",
        choices: ["More members", "Steady enlightenment activity", "Higher dues", "Bigger offices"],
        answerIndex: 1,
        explanation: "A says 制度的変革の遂行いかんにかかわらず、地道な啓蒙活動が欠かせない — steady enlightenment activity is indispensable."
      }
    ],
    estMinutes: 7,
    tags: ["labor", "history"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-73 — A renewable energy transition debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-73",
    title: "Renewable Energy Transition Debate",
    level: "N1",
    context: "A climate policy advisor and an energy industry executive debate the speed of decarbonization",
    text: "A: 再生可能[さいせいかのう]エネルギーへの移行[いこう]を加速[かそく]させる法案[ほうあん]について、産業界[さんぎょうかい]の反発[はんぱつ]が強[つよ]まっています。\nB: ええ。もっとも、段階的移行計画[だんかいてきいこうけいかく]を欠[か]けば、電力供給[でんりょくきょうきゅう]の不安定化[ふあんていか]を招[まね]かずにはおかない。\nA: とはいえ、化石燃料[かせきねんりょう]への依存[いぞん]を放置[ほうち]すれば、気候危機[きこうきき]の深刻化[しんこくか]は免[まぬが]れまい。\nB: 全[まった]くです。もっとも、技術開発[ぎじゅつかいはつ]の速度[そくど]いかんによっては、コスト削減[さくげん]も図[はか]れましょう。\nA: もっとも、地域雇用[ちいきこよう]の喪失[そうしつ]を補填[ほてん]する仕組[しく]みがなければ、社会的合意[しゃかいてきごうい]は得[え]られまい。\nB: ご指摘[してき]のとおりです。公正[こうせい]な移行[いこう]の原則[げんそく]に則[のっと]る限[かぎ]り、産業界[さんぎょうかい]の協力[きょうりょく]も得[え]られよう。\nA: 最終的[さいしゅうてき]には、送電網[そうでんもう]の整備[せいび]次第[しだい]で、導入[どうにゅう]の速度[そくど]も大[おお]きく変[か]わるはずです。\nB: 長期的視点[ちょうきてきしてん]を維持[いじ]しつつ、政策[せいさく]の抜本改革[ばっぽんかいかく]を推[お]し進[すす]めて参[まい]りましょう。",
    translation: "A: Industry backlash is growing against the bill to accelerate the transition to renewable energy. B: Yes. However, without a phased transition plan, power supply destabilization will inevitably result. A: That said, if we leave reliance on fossil fuels unaddressed, we will not escape the deepening of the climate crisis. B: Quite so. That said, depending on the speed of technological development, cost reduction could also be achieved. A: However, without a mechanism to compensate for regional job losses, social consensus will not be obtained. B: You are right. As long as we follow the principle of a just transition, industry cooperation could also be secured. A: Ultimately, the speed of introduction will depend greatly on how well the power grid is built out. B: While maintaining a long-term perspective, let us push forward fundamental policy reform.",
    questions: [
      {
        q: "What does B say will inevitably result without a phased transition plan?",
        choices: ["Lower costs", "Power supply destabilization", "Faster adoption", "More jobs"],
        answerIndex: 1,
        explanation: "B says 電力供給の不安定化を招かずにはおかない — power supply destabilization will inevitably result."
      },
      {
        q: "What does A say we will not escape if reliance on fossil fuels is left unaddressed?",
        choices: ["Higher costs", "The deepening of the climate crisis", "Lower growth", "Job losses"],
        answerIndex: 1,
        explanation: "A says 気候危機の深刻化は免れまい — cannot escape the deepening of the climate crisis."
      },
      {
        q: "What does A say will not be obtained without a mechanism to compensate for regional job losses?",
        choices: ["More funding", "Social consensus", "Faster reform", "Lower prices"],
        answerIndex: 1,
        explanation: "A says 社会的合意は得られまい — social consensus will not be obtained."
      },
      {
        q: "What does B say could be secured as long as the principle of a just transition is followed?",
        choices: ["More funding", "Industry cooperation", "Faster approval", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 公正な移行の原則に則る限り、産業界の協力も得られよう — industry cooperation could be secured."
      },
      {
        q: "What does A say the speed of introduction will depend on ultimately?",
        choices: ["Foreign pressure", "How well the power grid is built out", "Public opinion", "Fuel prices"],
        answerIndex: 1,
        explanation: "A says 送電網の整備次第で、導入の速度も大きく変わる — depends on power grid buildout."
      }
    ],
    estMinutes: 7,
    tags: ["energy", "climate"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-74 — A memory manipulation ethics panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-74",
    title: "Memory Manipulation Ethics Panel",
    level: "N1",
    context: "A bioethicist and a memory-research neuroscientist debate the limits of memory editing",
    text: "A: 記憶[きおく]の改[かい]ざんを可能[かのう]にする技術[ぎじゅつ]について、倫理的限界[りんりてきげんかい]をめぐる議論[ぎろん]が続[つづ]いています。\nB: ええ。もっとも、外傷性記憶[がいしょうせいきおく]の軽減[けいげん]に資[し]する側面[そくめん]は、医学的貢献[いがくてきこうけん]として認[みと]められるべきだ。\nA: とはいえ、本人[ほんにん]の自伝的記憶[じでんてききおく]を勝手[かって]に書[か]き換[か]えれば、人格[じんかく]の同一性[どういつせい]を損[そこ]ないかねない。\nB: その通[とお]りです。もっとも、適応範囲[てきおうはんい]を厳格[げんかく]に管理[かんり]する限[かぎ]り、乱用[らんよう]は防[ふせ]げよう。\nA: もっとも、第三者[だいさんしゃ]の誘導[ゆうどう]による記憶[きおく]の偽造[ぎぞう]は、自由意志[じゆういし]の根幹[こんかん]を揺[ゆる]るがしかねない。\nB: 全[まった]くです。インフォームド・コンセントの確保[かくほ]いかんにかかわらず、厳格[げんかく]な監視体制[かんしたいせい]が欠[か]かせない。\nA: 最終的[さいしゅうてき]には、技術[ぎじゅつ]の適用対象[てきようたいしょう]いかんによって、許容[きょよう]される範囲[はんい]も変[か]わるはずです。\nB: 議論[ぎろん]の成熟[せいじゅく]を待[ま]ちつつ、慎重[しんちょう]な規制枠組[きせいわくぐみ]を構築[こうちく]して参[まい]りましょう。",
    translation: "A: Debate continues over the ethical limits of technologies that enable memory alteration. B: Yes. However, the aspect of contributing to reducing traumatic memories should be recognized as a medical contribution. A: That said, arbitrarily rewriting one's autobiographical memories could undermine the identity of personality. B: That is correct. However, as long as the scope of application is strictly controlled, abuse can be prevented. A: However, forging memories through third-party inducement could shake the very foundation of free will. B: Quite so. Regardless of whether informed consent is secured, a strict monitoring framework is indispensable. A: Ultimately, the permissible scope will depend on the technology's target of application. B: While awaiting the maturation of debate, let us build a cautious regulatory framework.",
    questions: [
      {
        q: "What does B say should be recognized as a medical contribution?",
        choices: ["Faster procedures", "The aspect of reducing traumatic memories", "Lower costs", "More subjects"],
        answerIndex: 1,
        explanation: "B says 外傷性記憶の軽減に資する側面は、医学的貢献として認められるべき — reducing traumatic memories."
      },
      {
        q: "What does A say arbitrarily rewriting autobiographical memories could undermine?",
        choices: ["Memory speed", "The identity of personality", "Cost savings", "Patient count"],
        answerIndex: 1,
        explanation: "A says 人格の同一性を損ないかねない — could undermine personality identity."
      },
      {
        q: "What does A say forging memories through third-party inducement could shake?",
        choices: ["Research funding", "The very foundation of free will", "Patient trust", "Medical ethics boards"],
        answerIndex: 1,
        explanation: "A says 自由意志の根幹を揺るがしかねない — could shake the foundation of free will."
      },
      {
        q: "What does B call indispensable regardless of whether informed consent is secured?",
        choices: ["More funding", "A strict monitoring framework", "Faster approvals", "Lower costs"],
        answerIndex: 1,
        explanation: "B says インフォームド・コンセントの確保いかんにかかわらず、厳格な監視体制が欠かせない — strict monitoring is indispensable."
      },
      {
        q: "What does A say the permissible scope will ultimately depend on?",
        choices: ["Funding levels", "The technology's target of application", "Patient count", "Research speed"],
        answerIndex: 1,
        explanation: "A says 技術の適用対象いかんによって、許容される範囲も変わる — depends on the application target."
      }
    ],
    estMinutes: 7,
    tags: ["neuroethics", "technology"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-75 — A linguistic preservation summit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-75",
    title: "Linguistic Preservation Summit",
    level: "N1",
    context: "A linguist and a UNESCO cultural policy officer debate preserving endangered languages",
    text: "A: 消滅[しょうめつ]の危機[きき]に瀕[ひん]した言語[げんご]の保護[ほご]について、国際的枠組[こくさいてきわくぐみ]が模索[もさく]されています。\nB: ええ。もっとも、話者[わしゃ]の高齢化[こうれいか]が進行[しんこう]する限[かぎ]り、自然[しぜん]な伝承[でんしょう]は困難[こんなん]です。\nA: とはいえ、デジタルアーカイブの活用[かつよう]を欠[か]けば、貴重[きちょう]な記録[きろく]が散逸[さんいつ]しかねない。\nB: 全[まった]くです。もっとも、教育現場[きょういくげんば]での導入[どうにゅう]いかんによっては、若年層[じゃくねんそう]への普及[ふきゅう]も図[はか]れましょう。\nA: もっとも、経済的便益[けいざいてきべんえき]と結[むす]びつかなければ、学習動機[がくしゅうどうき]の維持[いじ]は困難[こんなん]だ。\nB: ご指摘[してき]のとおりです。文化的価値[ぶんかてきかち]の提示[ていじ]を欠[か]かさない限[かぎ]り、関心[かんしん]は持続[じぞく]しまい。\nA: 最終的[さいしゅうてき]には、自治体[じちたい]の財政支援[ざいせいしえん]次第[しだい]で、保存活動[ほぞんかつどう]の成否[せいひ]も決[き]まろう。\nB: 言語多様性[げんごたようせい]の維持[いじ]を普遍的課題[ふはんてきかだい]と見[み]なすべく、国際連携[こくさいれんけい]を強化[きょうか]して参[まい]りましょう。",
    translation: "A: An international framework is being explored for protecting languages facing extinction. B: Yes. However, as long as the aging of speakers progresses, natural intergenerational transmission is difficult. A: That said, without the use of digital archives, precious records could be lost. B: Quite so. That said, depending on introduction in educational settings, dissemination to younger generations could also be achieved. A: However, unless tied to economic benefit, maintaining learning motivation is difficult. B: You are right. Without continuously presenting cultural value, interest will not persist. A: Ultimately, the success or failure of preservation activities will hinge on local government fiscal support. B: Let us strengthen international cooperation, treating the maintenance of linguistic diversity as a universal task.",
    questions: [
      {
        q: "What does B say is difficult as long as the aging of speakers progresses?",
        choices: ["More funding", "Natural intergenerational transmission", "Higher enrollment", "Faster archiving"],
        answerIndex: 1,
        explanation: "B says 話者の高齢化が進行する限り、自然な伝承は困難 — natural transmission is difficult."
      },
      {
        q: "What does A warn could be lost without the use of digital archives?",
        choices: ["Funding", "Precious records", "Public interest", "Government support"],
        answerIndex: 1,
        explanation: "A says 貴重な記録が散逸しかねない — precious records could be lost."
      },
      {
        q: "What does A say is difficult unless tied to economic benefit?",
        choices: ["Faster archiving", "Maintaining learning motivation", "Lower costs", "Higher enrollment"],
        answerIndex: 1,
        explanation: "A says 経済的便益と結びつかなければ、学習動機の維持は困難 — maintaining learning motivation is difficult."
      },
      {
        q: "What does B say will not persist without continuously presenting cultural value?",
        choices: ["Funding", "Interest", "Enrollment", "Archives"],
        answerIndex: 1,
        explanation: "B says 文化的価値の提示を欠かさない限り、関心は持続しまい — interest will not persist."
      },
      {
        q: "What does A say the success of preservation activities will ultimately hinge on?",
        choices: ["Foreign pressure", "Local government fiscal support", "Public opinion", "International treaties"],
        answerIndex: 1,
        explanation: "A says 自治体の財政支援次第で、保存活動の成否も決まろう — hinges on local fiscal support."
      }
    ],
    estMinutes: 6,
    tags: ["linguistics", "culture"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-76 — A global health inequality forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-76",
    title: "Global Health Inequality Forum",
    level: "N1",
    context: "A public health expert and a trade diplomat debate closing cross-border medical gaps",
    text: "A: 国境[こっきょう]を越[こ]えた医療格差[いりょうかくさ]の是正[ぜせい]について、多国間協議[たこくかんきょうぎ]が続[つづ]いています。\nB: ええ。もっとも、特許制度[とっきょせいど]の運用[うんよう]いかんによっては、低所得国[ていしょとくこく]での薬剤[やくざい]アクセスが制限[せいげん]されよう。\nA: とはいえ、製薬企業[せいやくきぎょう]の収益[しゅうえき]を損[そこ]なえば、新薬開発[しんやくかいはつ]の停滞[ていたい]を招[まね]かずにはおかない。\nB: 全[まった]くです。もっとも、技術移転[ぎじゅついてん]の促進[そくしん]いかんにかかわらず、現地生産体制[げんちせいさんたいせい]の整備[せいび]が鍵[かぎ]です。\nA: もっとも、人的資源[じんてきしげん]の流出[りゅうしゅつ]を放置[ほうち]すれば、自律的医療体制[じりつてきいりょうたいせい]の構築[こうちく]は望[のぞ]めまい。\nB: ご指摘[してき]のとおりです。国際協調体制[こくさいきょうちょうたいせい]を維持[いじ]する限[かぎ]り、技術支援[ぎじゅつしえん]の効果[こうか]も増[ま]しましょう。\nA: 最終的[さいしゅうてき]には、資金援助[しきんえんじょ]の透明性[とうめいせい]次第[しだい]で、成果[せいか]の持続性[じぞくせい]も変[か]わるはずです。\nB: 健康権[けんこうけん]を普遍的権利[ふはんてきけんり]と位置付[いちづ]けつつ、格差解消[かくさかいしょう]に向[む]けた取[と]り組[く]みを強化[きょうか]して参[まい]りましょう。",
    translation: "A: Multilateral consultations continue on correcting cross-border healthcare disparities. B: Yes. However, depending on how the patent system is operated, drug access in low-income countries could be restricted. A: That said, if we undermine pharmaceutical companies' revenues, we will inevitably invite stagnation in new drug development. B: Quite so. That said, regardless of whether technology transfer is promoted, building local production capacity is the key. A: However, leaving the outflow of human resources unaddressed means autonomous medical systems cannot be hoped for. B: You are right. As long as an international coordination framework is maintained, the effectiveness of technical assistance will also grow. A: Ultimately, the sustainability of outcomes will depend on the transparency of financial aid. B: While positioning the right to health as a universal right, let us strengthen efforts to close the gaps.",
    questions: [
      {
        q: "What does B say could be restricted depending on how the patent system is operated?",
        choices: ["Drug access in low-income countries", "Trade volumes", "Funding levels", "Research output"],
        answerIndex: 1,
        explanation: "B says 低所得国での薬剤アクセスが制限されよう — drug access in low-income countries could be restricted."
      },
      {
        q: "What does A say will inevitably be invited if pharmaceutical revenues are undermined?",
        choices: ["Faster approvals", "Stagnation in new drug development", "Lower prices", "More competition"],
        answerIndex: 1,
        explanation: "A says 新薬開発の停滞を招かずにはおかない — stagnation in new drug development."
      },
      {
        q: "What does B call the key regardless of whether technology transfer is promoted?",
        choices: ["More funding", "Building local production capacity", "Faster approvals", "Lower tariffs"],
        answerIndex: 1,
        explanation: "B says 現地生産体制の整備が鍵 — local production capacity is the key."
      },
      {
        q: "What does A say cannot be hoped for if the outflow of human resources is left unaddressed?",
        choices: ["More funding", "Autonomous medical systems", "Lower costs", "Faster training"],
        answerIndex: 1,
        explanation: "A says 自律的医療体制の構築は望めまい — autonomous medical systems cannot be hoped for."
      },
      {
        q: "What does A say the sustainability of outcomes will depend on ultimately?",
        choices: ["Foreign pressure", "The transparency of financial aid", "Public opinion", "Drug prices"],
        answerIndex: 1,
        explanation: "A says 資金援助の透明性次第で、成果の持続性も変わる — depends on transparency of financial aid."
      }
    ],
    estMinutes: 7,
    tags: ["global-health", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-77 — A post-growth economics seminar
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-77",
    title: "Post-Growth Economics Seminar",
    level: "N1",
    context: "An ecological economist and a labor policy scholar debate moving beyond GDP growth",
    text: "A: GDP[ジーディーピー]成長至上主義[せいちょうしじょうしゅぎ]からの脱却[だっきゃく]をめぐり、経済学者[けいざいがくしゃ]の間[あいだ]で議論[ぎろん]が沸[わ]き起[お]こっています。\nB: ええ。もっとも、成長[せいちょう]を放棄[ほうき]すれば、雇用維持[こよういじ]の道筋[みちすじ]が見出[みだ]せずにはおかない。\nA: とはいえ、資源[しげん]の有限性[ゆうげんせい]を無視[むし]した持続的成長論[じぞくてきせいちょうろん]は、理念的矛盾[りねんてきむじゅん]を孕[はら]んでいる。\nB: 全[まった]くです。もっとも、富[とみ]の再分配[さいぶんぱい]を設計[せっけい]し直[なお]す限[かぎ]り、福祉水準[ふくしすいじゅん]の維持[いじ]は可能[かのう]でしょう。\nA: もっとも、消費削減[しょうひさくげん]を個人[こじん]にのみ押[お]し付[つ]ければ、社会的反発[しゃかいてきはんぱつ]を招[まね]かずにはおかない。\nB: ご指摘[してき]のとおりです。制度的枠組[せいどてきわくぐみ]の転換[てんかん]いかんにかかわらず、長期的合意形成[ちょうきてきごういけいせい]が不可欠[ふかけつ]です。\nA: 最終的[さいしゅうてき]には、労働時間[ろうどうじかん]の短縮[たんしゅく]次第[しだい]で、生活[せいかつ]の質[しつ]も大[おお]きく変[か]わるはずです。\nB: 経済的繁栄[けいざいてきはんえい]と環境保全[かんきょうほぜん]の両立[りょうりつ]を模索[もさく]すべく、政策設計[せいさくせっけい]を練[ね]り直[なお]して参[まい]りましょう。",
    translation: "A: Debate is brewing among economists over moving beyond GDP-growth supremacism. B: Yes. However, abandoning growth will inevitably leave us unable to find a path to maintaining employment. A: That said, sustainable-growth theory that ignores the finitude of resources harbors an ideological contradiction. B: Quite so. That said, as long as we redesign wealth redistribution, maintaining welfare levels should be possible. A: However, pushing consumption reduction only onto individuals will inevitably invite social backlash. B: You are right. Regardless of whether institutional frameworks are transformed, long-term consensus-building is indispensable. A: Ultimately, the quality of life will depend greatly on reducing working hours. B: Let us redesign policy to seek a balance between economic prosperity and environmental conservation.",
    questions: [
      {
        q: "What does B say abandoning growth will inevitably leave us unable to find?",
        choices: ["More funding", "A path to maintaining employment", "Lower costs", "Faster reform"],
        answerIndex: 1,
        explanation: "B says 雇用維持の道筋が見出せずにはおかない — cannot find a path to maintaining employment."
      },
      {
        q: "What does A say sustainable-growth theory that ignores resource finitude harbors?",
        choices: ["More profit", "An ideological contradiction", "Faster growth", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 理念的矛盾を孕んでいる — harbors an ideological contradiction."
      },
      {
        q: "What does A say will inevitably be invited if consumption reduction is pushed only onto individuals?",
        choices: ["More savings", "Social backlash", "Lower prices", "Faster reform"],
        answerIndex: 1,
        explanation: "A says 社会的反発を招かずにはおかない — social backlash will be invited."
      },
      {
        q: "What does B call indispensable regardless of whether institutional frameworks are transformed?",
        choices: ["More funding", "Long-term consensus-building", "Faster reform", "Lower taxes"],
        answerIndex: 1,
        explanation: "B says 制度的枠組の転換いかんにかかわらず、長期的合意形成が不可欠 — long-term consensus-building is indispensable."
      },
      {
        q: "What does A say the quality of life will depend on ultimately?",
        choices: ["GDP growth", "Reducing working hours", "More consumption", "Faster reform"],
        answerIndex: 1,
        explanation: "A says 労働時間の短縮次第で、生活の質も大きく変わる — depends on reducing working hours."
      }
    ],
    estMinutes: 7,
    tags: ["economics", "environment"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-78 — A digital divide policy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-78",
    title: "Digital Divide Policy",
    level: "N1",
    context: "A digital inclusion officer and a regional revitalization official debate closing digital gaps",
    text: "A: 情報格差[じょうほうかくさ]の解消[かいしょう]に向[む]けた政策案[せいさくあん]について、論点[ろんてん]が整理[せいり]されています。\nB: ええ。もっとも、都市部[としぶ]と地方[ちほう]のインフラ整備[せいび]の格差[かくさ]を放置[ほうち]すれば、分断[ぶんだん]は深刻化[しんこくか]しかねない。\nA: とはいえ、端末[たんまつ]の無償配布[むしょうはいふ]だけでは、根本的解決[こんぽんてきかいけつ]には至[いた]らない。\nB: 全[まった]くです。もっとも、情報[じょうほう]リテラシー教育[きょういく]の充実[じゅうじつ]いかんによっては、利用者[りようしゃ]の自律性[じりつせい]は高[たか]まりましょう。\nA: もっとも、高齢者[こうれいしゃ]に対[たい]する支援[しえん]を欠[か]けば、社会参加[しゃかいさんか]の機会[きかい]を奪[うば]いかねない。\nB: ご指摘[してき]のとおりです。継続的支援体制[けいぞくてきしえんたいせい]を維持[いじ]する限[かぎ]り、孤立防止[こりつぼうし]も図[はか]れましょう。\nA: 最終的[さいしゅうてき]には、自治体[じちたい]の予算配分[よさんはいぶん]いかんにかかわらず、民間協働[みんかんきょうどう]が鍵[かぎ]を握[にぎ]るでしょう。\nB: 誰[だれ]もがデジタル社会[でじたるしゃかい]の恩恵[おんけい]を受[う]けられるよう、包摂的政策[ほうせつてきせいさく]を推[お]し進[すす]めて参[まい]りましょう。",
    translation: "A: Talking points have been organized for the policy proposal aimed at closing information gaps. B: Yes. However, leaving the gap in infrastructure buildout between urban and rural areas unaddressed could deepen division. A: That said, free device distribution alone will not lead to a fundamental solution. B: Quite so. That said, depending on how thoroughly information-literacy education is enriched, users' autonomy could be raised. A: However, lacking support for the elderly could deprive them of opportunities for social participation. B: You are right. As long as a continuous support framework is maintained, isolation prevention could also be achieved. A: Ultimately, regardless of how local governments allocate budgets, private-sector collaboration will hold the key. B: So that everyone can enjoy the benefits of digital society, let us push forward inclusive policies.",
    questions: [
      {
        q: "What does B warn could deepen if the urban-rural infrastructure gap is left unaddressed?",
        choices: ["Trade deficits", "Division", "Costs", "Inflation"],
        answerIndex: 1,
        explanation: "B says 分断は深刻化しかねない — division could deepen."
      },
      {
        q: "What does A say free device distribution alone will not lead to?",
        choices: ["More users", "A fundamental solution", "Faster adoption", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 根本的解決には至らない — will not lead to a fundamental solution."
      },
      {
        q: "What does A warn lacking support for the elderly could deprive them of?",
        choices: ["Devices", "Opportunities for social participation", "Funding", "Internet access"],
        answerIndex: 1,
        explanation: "A says 社会参加の機会を奪いかねない — could deprive them of social participation opportunities."
      },
      {
        q: "What does B say could be achieved as long as a continuous support framework is maintained?",
        choices: ["Faster growth", "Isolation prevention", "Lower costs", "Higher enrollment"],
        answerIndex: 1,
        explanation: "B says 継続的支援体制を維持する限り、孤立防止も図れましょう — isolation prevention."
      },
      {
        q: "What does A say will hold the key ultimately, regardless of local budget allocation?",
        choices: ["Foreign aid", "Private-sector collaboration", "Public opinion", "More funding"],
        answerIndex: 1,
        explanation: "A says 民間協働が鍵を握る — private-sector collaboration holds the key."
      }
    ],
    estMinutes: 6,
    tags: ["digital-policy", "inequality"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-79 — An indigenous land rights case
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-79",
    title: "Indigenous Land Rights Case",
    level: "N1",
    context: "A legal scholar and a government negotiator discuss a Supreme Court ruling on indigenous land",
    text: "A: 先住民[せんじゅうみん]の土地権[とちけん]をめぐる最高裁判所[さいこうさいばんしょ]の判決[はんけつ]について、専門家[せんもんか]の分析[ぶんせき]が続[つづ]いています。\nB: ええ。もっとも、慣習法[かんしゅうほう]の承認[しょうにん]いかんによっては、先住民[せんじゅうみん]の権利保護[けんりほご]は大[おお]きく前進[ぜんしん]するでしょう。\nA: とはいえ、資源開発企業[しげんかいはつきぎょう]の既得権[きとっけん]を過度[かど]に保護[ほご]すれば、裁判[さいばん]の意義[いぎ]が形骸化[けいがいか]しかねない。\nB: 全[まった]くです。もっとも、事前同意権[じぜんどういけん]の行使[こうし]を担保[たんぽ]する限[かぎ]り、不当[ふとう]な開発[かいはつ]は抑制[よくせい]されよう。\nA: もっとも、補償基準[ほしょうきじゅん]の不十分[ふじゅうぶん]なまま合意[ごうい]を急[いそ]げば、新[あら]たな紛争[ふんそう]を招[まね]かずにはおかない。\nB: ご指摘[してき]のとおりです。文化的遺産[ぶんかてきいさん]の保護[ほご]を視野[しや]に入[い]れる限[かぎ]り、総合的解決[そうごうてきかいけつ]も望[のぞ]めましょう。\nA: 最終的[さいしゅうてき]には、国[くに]の法体系[ほうたいけい]と先住民[せんじゅうみん]の慣習法[かんしゅうほう]との調和[ちょうわ]次第[しだい]で、法的安定性[ほうてきあんていせい]も保[たも]たれる。\nB: 歴史的不義[れきしてきふぎ]の是正[ぜせい]を念頭[ねんとう]に置[お]きつつ、共生[きょうせい]に向[む]けた法的枠組[ほうてきわくぐみ]を整備[せいび]して参[まい]りましょう。",
    translation: "A: Expert analysis continues on the Supreme Court ruling on indigenous land rights. B: Yes. However, depending on whether customary law is recognized, indigenous rights protection could advance significantly. A: That said, over-protecting resource-development companies' acquired rights could hollow out the significance of the ruling. B: Quite so. That said, as long as the exercise of prior-consent rights is guaranteed, unjust development could be curbed. A: However, rushing agreement with insufficient compensation standards will inevitably invite new disputes. B: You are right. As long as protection of cultural heritage is in view, a comprehensive resolution could be hoped for. A: Ultimately, legal stability will be maintained depending on the harmony between the national legal system and indigenous customary law. B: Keeping the rectification of historical injustice in mind, let us build a legal framework for coexistence.",
    questions: [
      {
        q: "What does B say could advance significantly depending on whether customary law is recognized?",
        choices: ["Trade", "Indigenous rights protection", "Tourism", "Resource extraction"],
        answerIndex: 1,
        explanation: "B says 先住民の権利保護は大きく前進する — indigenous rights protection could advance."
      },
      {
        q: "What does A warn over-protecting resource companies' acquired rights could do to the ruling?",
        choices: ["Strengthen it", "Hollow out its significance", "Speed it up", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 裁判の意義が形骸化しかねない — could hollow out the ruling's significance."
      },
      {
        q: "What does B say could be curbed as long as the exercise of prior-consent rights is guaranteed?",
        choices: ["More funding", "Unjust development", "Faster approvals", "Higher costs"],
        answerIndex: 1,
        explanation: "B says 不当な開発は抑制されよう — unjust development could be curbed."
      },
      {
        q: "What does A say will inevitably be invited if agreement is rushed with insufficient compensation?",
        choices: ["Faster resolution", "New disputes", "Lower costs", "More funding"],
        answerIndex: 1,
        explanation: "A says 新たな紛争を招かずにはおかない — new disputes will inevitably be invited."
      },
      {
        q: "What does A say legal stability will depend on ultimately?",
        choices: ["Foreign pressure", "Harmony between the national legal system and indigenous customary law", "More funding", "Public opinion"],
        answerIndex: 1,
        explanation: "A says 国の法体系と先住民の慣習法との調和次第で、法的安定性も保たれる — depends on harmony between legal systems."
      }
    ],
    estMinutes: 7,
    tags: ["indigenous-rights", "law"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-80 — An AI weapon system ethics debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-80",
    title: "AI Weapon System Ethics Debate",
    level: "N1",
    context: "A military ethicist and a defense ministry policy director debate autonomous weapons",
    text: "A: 自動殺傷兵器[じどうさっしょうへいき]の開発[かいはつ]をめぐり、国際的規制枠組[こくさいてききせいわくぐみ]の構築[こうちく]が急務[きゅうむ]となっています。\nB: ええ。もっとも、人間[にんげん]の判断[はんだん]を介[かい]さずに発射[はっしゃ]を許可[きょか]すれば、戦争[せんそう]の倫理的限界[りんりてきげんかい]は消失[しょうしつ]しかねない。\nA: とはいえ、防衛能力[ぼうえいのうりょく]の向上[こうじょう]を図[はか]る限[かぎ]り、技術開発[ぎじゅつかいはつ]の完全禁止[かんぜんきんし]は現実的[げんじつてき]とは言[い]えない。\nB: 全[まった]くです。もっとも、責任[せきにん]の所在[しょざい]を明確[めいかく]にする限[かぎ]り、濫用[らんよう]の防止[ぼうし]は担保[たんぽ]されよう。\nA: もっとも、アルゴリズムの予測不可能性[よそくふかのうせい]を過小評価[かしょうひょうか]すれば、深刻[しんこく]な事態[じたい]を招[まね]かずにはおかない。\nB: ご指摘[してき]のとおりです。第三者機関[だいさんしゃきかん]による監査体制[かんさたいせい]を維持[いじ]する限[かぎ]り、透明性[とうめいせい]は保[たも]たれよう。\nA: 最終的[さいしゅうてき]には、運用[うんよう]の現場[げんば]での判断権[はんだんけん]の所在[しょざい]いかんにかかわらず、国際人道法[こくさいじんどうほう]の遵守[じゅんしゅ]が鍵[かぎ]です。\nB: 人間[にんげん]の尊厳[そんげん]を守[まも]るためにも、規制[きせい]の妥当性[だとうせい]を慎重[しんちょう]に検証[けんしょう]して参[まい]りましょう。",
    translation: "A: With the development of autonomous lethal weapons, building an international regulatory framework has become urgent. B: Yes. However, permitting launch without human judgment could eliminate the ethical limits of warfare. A: That said, as long as we seek to improve defense capability, a complete ban on technological development is unrealistic. B: Quite so. That said, as long as responsibility is clearly located, abuse prevention could be secured. A: However, underestimating the unpredictability of algorithms will inevitably invite serious situations. B: You are right. As long as an audit framework by third-party bodies is maintained, transparency will be preserved. A: Ultimately, regardless of where decision authority lies at the operational front line, compliance with international humanitarian law is the key. B: To protect human dignity as well, let us carefully verify the appropriateness of regulation.",
    questions: [
      {
        q: "What does B warn permitting launch without human judgment could eliminate?",
        choices: ["Costs", "The ethical limits of warfare", "Defense capability", "Trade"],
        answerIndex: 1,
        explanation: "B says 戦争の倫理的限界は消失しかねない — could eliminate the ethical limits of warfare."
      },
      {
        q: "What does A say is unrealistic as long as defense capability improvement is sought?",
        choices: ["More funding", "A complete ban on technological development", "Faster approvals", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 技術開発の完全禁止は現実的とは言えない — a complete ban is unrealistic."
      },
      {
        q: "What does A warn underestimating algorithm unpredictability will inevitably invite?",
        choices: ["Faster decisions", "Serious situations", "Lower costs", "More funding"],
        answerIndex: 1,
        explanation: "A says 深刻な事態を招かずにはおかない — serious situations will be invited."
      },
      {
        q: "What does B say will be preserved as long as a third-party audit framework is maintained?",
        choices: ["More funding", "Transparency", "Faster approvals", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 第三者機関による監査体制を維持する限り、透明性は保たれよう — transparency will be preserved."
      },
      {
        q: "What does A call the key ultimately, regardless of where decision authority lies?",
        choices: ["More funding", "Compliance with international humanitarian law", "Faster decisions", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 国際人道法の遵守が鍵 — compliance with international humanitarian law is the key."
      }
    ],
    estMinutes: 7,
    tags: ["ai-ethics", "military"]
  }
];
