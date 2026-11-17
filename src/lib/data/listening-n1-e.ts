import type { ListeningData } from "@/lib/types";

// N1 listening exercises set E (ids l-n1-81..l-n1-100).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N1 grammar targets: 〜ずにはおかない, 〜とはいえ, 〜たところで, 〜いかんによって,
// 〜に則って, 〜たる, 〜限り, 〜次第で, 〜きらいがある, 〜が最後, 〜なしに,
// 〜いかんにかかわらず, 〜にもまして, 〜の極み, 〜まじき, 〜がごとき, 〜とはいえ, etc.

export const listeningN1E: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n1-81 — A biosecurity ethics debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-81",
    title: "Biosecurity Ethics Debate",
    level: "N1",
    context: "A virologist and an ethicist debate gain-of-function pathogen research",
    text: "A: 病原[びょうげん]体[たい]の機能[きのう]獲得[かくとく]研究[けんきゅう]の正当性[せいとうせい]は、いかなる妥協[だきょう]も許[ゆる]さないはずだ。\nB: とはいえ、パンデミック対策[たいさく]に資[し]する可能性[かのうせい]を捨[す]て去[さ]るのは、非[ひ]倫理[りんり]的[てき]ではありませんか。\nA: たとえ有益[ゆうえき]だとしても、漏洩[ろうえい]のリスクを顧[かえり]みず進[すす]めるのは、科学[かがく]者[しゃ]としてあるまじき態度[たいど]だ。\nB: その点[てん]は承知[しょうち]しておりますが、厳格[げんかく]な統制[とうせい]下[か]であれば、リスクは最小限[さいしょうげん]に抑[よく]制[せい]できるはずです。\nA: 統制[とうせい]の網[あみ]の目[め]をくぐり抜[ぬ]ける事例[じれい]が後[のち]を絶[た]たない限[かぎ]り、安易[あんい]な許可[きょか]は却[かく]って災禍[さいか]を招[まね]かずにはおかない。\nB: であれば、国際[こくさい]的[てき]な監視[かんし]体制[たいせい]の構築[こうちく]を急[いそ]ぐのが先決[せんけつ]ですね。\nA: まさにその通[とお]り。リスク評価[ひょうか]の透明性[とうめいせい]いかんによって、研究[けんきゅう]の継続[けいぞく]の可否[かひ]も決[き]まるだろう。\nB: 科学[かがく]界[かい]と市民[しみん]社会[しゃかい]の信頼[しんらい]関係[かんけい]を損[そこ]なう事態[じたい]だけは避[さ]けねばなりません。",
    translation: "A: The legitimacy of pathogen gain-of-function research should permit no compromise. B: That said, isn't abandoning something that could aid pandemic countermeasures unethical? A: Even if beneficial, proceeding without regard for leakage risk is an attitude unworthy of a scientist. B: I understand that, but under strict controls the risk should be minimized. A: As long as cases slipping through the regulatory net persist, easy approval will inevitably invite disaster. B: In that case, the priority is to rush construction of an international monitoring regime. A: Exactly. Depending on the transparency of risk assessment, the continuation of the research will be decided. B: We must avoid any situation that undermines trust between the scientific community and civil society.",
    questions: [
      {
        q: "What does B say would be unethical to discard?",
        choices: ["Strict regulations", "Research that could aid pandemic countermeasures", "Public transparency", "Funding for virologists"],
        answerIndex: 1,
        explanation: "B says パンデミック対策[たいさく]に資[し]する可能性[かのうせい]を捨[す]て去[さ]るのは非[ひ]倫理[りんり]的[てき] — discarding research aiding pandemic countermeasures is unethical."
      },
      {
        q: "How does A characterize proceeding without regard for leakage risk?",
        choices: ["An innovative approach", "An attitude unworthy of a scientist", "A pragmatic choice", "A necessary evil"],
        answerIndex: 1,
        explanation: "A calls it 科学[かがく]者[しゃ]としてあるまじき態度[たいど] — an attitude improper for a scientist (あるまじき)."
      },
      {
        q: "What does A say easy approval will inevitably do?",
        choices: ["Invite disaster", "Reduce costs", "Speed up research", "Build trust"],
        answerIndex: 0,
        explanation: "A says 安易[あんい]な許可[きょか]は災禍[さいか]を招[まね]かずにはおかない — easy approval inevitably invites disaster (ずにはおかない)."
      },
      {
        q: "What does B say should be the priority?",
        choices: ["Drafting new patents", "Building an international monitoring regime", "Reducing research funding", "Banning all virology"],
        answerIndex: 1,
        explanation: "B says 国際[こくさい]的[てき]な監視[かんし]体制[たいせい]の構築[こうちく]を急[いそ]ぐのが先決[せんけつ] — rushing construction of international monitoring."
      },
      {
        q: "What determines whether the research can continue, according to A?",
        choices: ["Public opinion polls", "The transparency of risk assessment", "The number of researchers", "Funding availability"],
        answerIndex: 1,
        explanation: "A says リスク評価[ひょうか]の透明性[とうめいせい]いかんによって — depending on the transparency of risk assessment."
      }
    ],
    estMinutes: 7,
    tags: ["biosecurity", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-82 — A constitutional monarchy discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-82",
    title: "Constitutional Monarchy Discussion",
    level: "N1",
    context: "A political theorist and a constitutional scholar discuss the future of the monarchy",
    text: "A: 立憲[りっけん]君主[くんしゅ]制[せい]の存続[そんぞく]をめぐり、議論[ぎろん]が紛糾[ふんきゅう]していますね。\nB: ええ。象徴[しょうちょう]天皇[てんのう]制[せい]といえども、民主[みんしゅ]主義[しゅぎ]の原則[げんそく]と抵触[ていしょく]する、との批判[ひはん]を免[まぬか]れません。\nA: とはいえ、国民[こくみん]統合[とうごう]の象徴[しょうちょう]たる機能[きのう]は、他[ほか]の制度[せいど]に代[か]え難[がた]い価値[かち]を有[ゆう]する。\nB: その価値[かち]を認[みと]めつつも、世襲[せしゅう]の地位[ちい]を肯定[こうてい]することの非[ひ]合理性[ごうりせい]を看過[かんか]するわけにはゆくまい。\nA: だとしたところで、突然[とつぜん]の廃止[はいし]は国体[こくたい]の混乱[こんらん]を来[きた]さずにはおかない。\nB: であれば、象徴[しょうちょう]的[てき]役割[やくわり]を保[たも]ちつつ、権威[けんい]の源泉[げんせん]を法[ほう]の下[もと]に明確[めいかく]に位置[いち]づけるべきです。\nA: 法[ほう]の支配[しはい]に則[のっと]って運営[うんえい]される限[かぎ]り、君主[くんしゅ]の存在[そんざい]は許容[きょよう]され得[う]るだろう。\nB: 納得[なっとく]できます。最終[さいしゅう]的[てき]には、国民[こくみん]各員[かくいん]の合意[ごうい]形成[けいせい]いかんにかかわらず、丁寧[ていねい]な論議[ろんぎ]が求[もと]められます。",
    translation: "A: Debate over the continuation of the constitutional monarchy is in turmoil. B: Yes. Even a symbolic emperor system cannot escape criticism that it conflicts with democratic principles. A: That said, the function as a symbol of national unity holds irreplaceable value that other institutions cannot substitute. B: While acknowledging that value, we cannot overlook the irrationality of affirming hereditary status. A: Even so, sudden abolition would inevitably throw the national order into chaos. B: In that case, while preserving the symbolic role, the source of authority should be clearly positioned under the law. A: As long as it operates in accordance with the rule of law, the monarch's existence may be tolerated. B: I agree. Ultimately, regardless of how consensus forms among citizens, careful discussion is required.",
    questions: [
      {
        q: "What criticism can't the symbolic emperor system escape, according to B?",
        choices: ["It costs too much", "It conflicts with democratic principles", "It harms diplomacy", "It reduces voter turnout"],
        answerIndex: 1,
        explanation: "B says 民主[みんしゅ]主義[しゅぎ]の原則[げんそく]と抵触[ていしょく]する — it conflicts with democratic principles."
      },
      {
        q: "What does A say the symbolic function holds?",
        choices: ["A short-term value", "An irreplaceable value", "A purely ceremonial value", "A foreign value"],
        answerIndex: 1,
        explanation: "A says 他[ほか]の制度[せいど]に代[か]え難[がた]い価値[かち]を有[ゆう]する — it holds irreplaceable value."
      },
      {
        q: "What must not be overlooked even while acknowledging its value?",
        choices: ["The cost of ceremonies", "The irrationality of hereditary status", "The decline in tourism", "The lack of public interest"],
        answerIndex: 1,
        explanation: "B says 世襲[せしゅう]の地位[ちい]を肯定[こうてい]することの非[ひ]合理性[ごうりせい]を看過[かんか]するわけにはゆくまい — the irrationality of hereditary status cannot be overlooked."
      },
      {
        q: "What would sudden abolition inevitably cause?",
        choices: ["National confusion", "Economic growth", "Diplomatic gains", "Voter enthusiasm"],
        answerIndex: 0,
        explanation: "A says 突然[とつぜん]の廃止[はいし]は国体[こくたい]の混乱[こんらん]を来[きた]さずにはおかない — sudden abolition inevitably invites national confusion (ずにはおかない)."
      },
      {
        q: "What is required regardless of how consensus forms?",
        choices: ["A referendum", "Careful discussion", "International mediation", "Royal approval"],
        answerIndex: 1,
        explanation: "B says 国民[こくみん]各員[かくいん]の合意[ごうい]形成[けいせい]いかんにかかわらず丁寧[ていねい]な論議[ろんぎ]が求[もと]められる — regardless of consensus, careful discussion is required."
      }
    ],
    estMinutes: 7,
    tags: ["politics", "monarchy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-83 — A psychedelic therapy panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-83",
    title: "Psychedelic Therapy Panel",
    level: "N1",
    context: "A psychiatrist and a regulatory official discuss approval of psychedelic-assisted therapy",
    text: "A: 幻覚[げんかく]誘発[ゆうはつ]物質[ぶっしつ]を用[もち]いた精神[せいしん]療法[りょうほう]の臨床[りんしょう]試験[しけん]が、各国[かっこく]で始動[しどう]しましたね。\nB: ええ。もっとも、治療[ちりょう]効果[こうか]が確認[かくにん]されたとはいえ、濫用[らんよう]の危険性[きけんせい]を捨[す]て去[さ]るわけにはいきません。\nA: 厳密[げんみつ]な施設[しせつ]管理[かんり]の下[もと]であれば、画期的[かっきてき]な緩和[かんわ]をもたらし得[え]る、とのデータがあります。\nB: データの信憑[しんぴょう]性[せい]を疑[うたが]うわけではありませんが、被験[ひけん]者[しゃ]の精神[せいしん]的[てき]脆弱[ぜいじゃく]性[せい]を顧[かえり]みず承認[しょうにん]を急[いそ]ぐのは、医師[いし]としてあるまじき所業[しょぎょう]です。\nA: おっしゃる通[とお]り。被験[ひけん]者[しゃ]の自己[じこ]決定[けってい]権[けん]を尊[とうと]ぶ限[かぎ]り、適正[てきせい]な適用[てきよう]は可能[かのう]と信[しん]じます。\nB: 法規[ほうき]の整備[せいび]に遅[おく]れをとれば、違法[いほう]な乱用[らんよう]を誘発[ゆうはつ]しかねない。\nA: まさに。規制[きせい]の網[あみ]の目[め]を強化[きょうか]しつつ、有効[ゆうこう]性[せい]を検証[けんしょう]する仕組[しく]みが急務[きゅうむ]ですね。\nB: 治療[ちりょう]の現場[げんば]と規制[きせい]当局[とうきょく]の密[みつ]な連携[れんけい]が不可欠[ふかけつ]でしょう。",
    translation: "A: Clinical trials of psychedelic-assisted therapy have begun in various countries. B: Yes. Even though therapeutic effects have been confirmed, we cannot discard the danger of abuse. A: There is data suggesting that under strict facility management, it could bring groundbreaking relief. B: I don't doubt the data's credibility, but rushing approval without regard for subjects' mental vulnerability is conduct unworthy of a physician. A: You're right. As long as we honor subjects' right to self-determination, I believe proper application is possible. B: If legal frameworks lag, it could trigger illegal abuse. A: Exactly. While strengthening the regulatory net, a system to verify efficacy is urgent. B: Close collaboration between clinical settings and regulators is indispensable.",
    questions: [
      {
        q: "What can't be discarded even though therapeutic effects are confirmed?",
        choices: ["The high cost", "The danger of abuse", "The need for placebo", "The lengthy approval"],
        answerIndex: 1,
        explanation: "B says 濫用[らんよう]の危険性[きけんせい]を捨[す]て去[さ]るわけにはいきません — the danger of abuse cannot be discarded."
      },
      {
        q: "What does B call rushing approval without considering vulnerability?",
        choices: ["A bold innovation", "Conduct unworthy of a physician", "A pragmatic step", "An administrative necessity"],
        answerIndex: 1,
        explanation: "B calls it 医師[いし]としてあるまじき所業[しょぎょう] — conduct improper for a physician (あるまじき)."
      },
      {
        q: "What does A believe is possible as long as self-determination is honored?",
        choices: ["Lower costs", "Proper application", "Faster approval", "Wider access"],
        answerIndex: 1,
        explanation: "A says 自己[じこ]決定[けってい]権[けん]を尊[とうと]ぶ限[かぎ]り適正[てきせい]な適用[てきよう]は可能[かのう] — proper application is possible as long as self-determination is honored."
      },
      {
        q: "What could happen if legal frameworks lag behind?",
        choices: ["Lower demand", "Illegal abuse could be triggered", "Faster innovation", "Cheaper therapies"],
        answerIndex: 1,
        explanation: "B says 法規[ほうき]の整備[せいび]に遅[おく]れをとれば違法[いほう]な乱用[らんよう]を誘発[ゆうはつ]しかねない — lagging frameworks could trigger illegal abuse."
      },
      {
        q: "What is essential according to B?",
        choices: ["Close collaboration between clinics and regulators", "Independent research only", "Public funding alone", "International patents"],
        answerIndex: 0,
        explanation: "B says 治療[ちりょう]の現場[げんば]と規制[きせい]当局[とうきょく]の密[みつ]な連携[れんけい]が不可欠[ふかけつ] — close collaboration between clinics and regulators is indispensable."
      }
    ],
    estMinutes: 7,
    tags: ["medicine", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-84 — A social credit system critique
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-84",
    title: "Social Credit System Critique",
    level: "N1",
    context: "A human rights advocate and a policy analyst debate a proposed social credit system",
    text: "A: 社会[しゃかい]信用[しんよう]採点[さいてん]制度[せいど]の導入[どうにゅう]を推[お]す声[こえ]が、一部[いちぶ]の自治体[じちたい]で高[たか]まっています。\nB: 安全[あんぜん]に恵[めぐ]まれた社会[しゃかい]を目指[めざ]すとはいえ、個人[こじん]の行動[こうどう]を常時[じょうじ]監視[かんし]するがごときは、自由[じゆう]の根幹[こんかん]を揺[ゆる]がす。\nA: とはいえ、詐欺[さぎ]や犯罪[はんざい]の未然[みぜん]防止[ぼうし]に資[し]する側面[そくめん]は評価[ひょうか]されてよいのでは。\nB: 効率[こうりつ]を追求[ついきゅう]する余[あま]り、人間[にんげん]の尊厳[そんげん]を犠牲[ぎせい]にするがごときは、断固[だんこ]として拒絶[きょぜつ]さるべきです。\nA: ポイントの算定[さんてい]基準[きじゅん]の透明性[とうめいせい]いかんによっては、濫用[らんよう]の温床[おんしょう]と化[か]す恐[おそれ]もありますね。\nB: まさにその通[とお]り。算定[さんてい]アルゴリズムの隠蔽[いんぺい]は、監視[かんし]社会[しゃかい]を固定[こてい]化[か]しかねない。\nA: 個人[こじん]の尊厳[そんげん]を損[そこ]なうが最後[さいご]、市民[しみん]の信頼[しんらい]は回復[かいふく]不能[ふのう]に陥[おちい]るでしょう。\nB: 人民[じんみん]の自由[じゆう]を制約[せいやく]する制度[せいど]の導入[どうにゅう]を、私[わたし]たちは慎[つつし]まねばなりません。",
    translation: "A: Voices promoting the introduction of a social credit scoring system are rising in some local governments. B: Even though it aims for a secure society, constantly monitoring individual behavior shakes the foundations of freedom. A: That said, the aspect of aiding prevention of fraud and crime should be evaluated, shouldn't it? B: Sacrificing human dignity in pursuit of efficiency must be resolutely rejected. A: Depending on the transparency of scoring criteria, it could turn into a hotbed of abuse. B: Exactly. Concealing scoring algorithms could solidify a surveillance society. A: Once personal dignity is impaired, citizens' trust would fall into an unrecoverable state. B: We must refrain from introducing systems that restrict people's freedom.",
    questions: [
      {
        q: "What does B say constant monitoring of behavior does?",
        choices: ["Reduces crime", "Shakes the foundations of freedom", "Boosts efficiency", "Lowers costs"],
        answerIndex: 1,
        explanation: "B says 個人[こじん]の行動[こうどう]を常時[じょうじ]監視[かんし]するがごときは自由[じゆう]の根幹[こんかん]を揺[ゆる]がす — it shakes the foundations of freedom."
      },
      {
        q: "What aspect does A say could be evaluated?",
        choices: ["Cost savings", "Aiding prevention of fraud and crime", "Algorithmic efficiency", "Data accuracy"],
        answerIndex: 1,
        explanation: "A says 詐欺[さぎ]や犯罪[はんざい]の未然[みぜん]防止[ぼうし]に資[し]する側面[そくめん]は評価[ひょうか]されてよい — aiding prevention of fraud and crime should be evaluated."
      },
      {
        q: "What does B say must be resolutely rejected?",
        choices: ["Sacrificing human dignity for efficiency", "Collecting anonymized data", "Auditing algorithms", "Public dashboards"],
        answerIndex: 0,
        explanation: "B says 効率[こうりつ]を追求[ついきゅう]する余[あま]り人間[にんげん]の尊厳[そんげん]を犠牲[ぎせい]にするがごときは断固[だんこ]として拒絶[きょぜつ]さるべき — sacrificing dignity for efficiency must be rejected."
      },
      {
        q: "What depends on the transparency of scoring criteria?",
        choices: ["Public approval ratings", "Whether it becomes a hotbed of abuse", "The cost of implementation", "Algorithm speed"],
        answerIndex: 1,
        explanation: "A says 算定[さんてい]基準[きじゅん]の透明性[とうめいせい]いかんによっては濫用[らんよう]の温床[おんしょう]と化[か]す — depending on transparency it could become a hotbed of abuse."
      },
      {
        q: "What happens once dignity is impaired?",
        choices: ["Trust is quickly restored", "Trust becomes unrecoverable", "Crime drops sharply", "Efficiency rises"],
        answerIndex: 1,
        explanation: "A says 個人[こじん]の尊厳[そんげん]を損[そこ]なうが最後[さいご]、市民[しみん]の信頼[しんらい]は回復[かいふく]不能[ふのう]に陥[おちい]る — once dignity is impaired, trust becomes unrecoverable (が最後)."
      }
    ],
    estMinutes: 7,
    tags: ["privacy", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-85 — An ocean governance summit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-85",
    title: "Ocean Governance Summit",
    level: "N1",
    context: "A marine biologist and a UN negotiator discuss deep-sea mining regulation",
    text: "A: 深海[しんかい]鉱物[こうぶつ]資源[しげん]の開発[かいはつ]をめぐり、国連[こくれん]で調整[ちょうせい]が続[つづ]いていますね。\nB: ええ。もっとも、生態[せいたい]系[けい]への影響[えいきょう]の調査[ちょうさ]が不十分[ふじゅうぶん]な段階[だんかい]で採掘[さいくつ]を認[みと]めるのは、将来[しょうらい]世代[せだい]に対[たい]する背信[はいしん]行為[こうい]です。\nA: 資源[しげん]争奪[そうだつ]の激化[げきか]を看過[かんか]するわけにはゆくまいが、無[む]秩序[ちつじょ]な開発[かいはつ]を放置[ほうち]すれば、海洋[かいよう]環境[かんきょう]は取[と]り返[かえ]しのつかない事態[じたい]に陥[おちい]る。\nB: 全[まった]くです。共有[きょうゆう]財[ざい]たる海洋[かいよう]の保護[ほご]に則[のっと]った規範[きはん]の確立[かくりつ]を急[いそ]ぐべきです。\nA: 利害[りがい]対立[たいりつ]する国家[こっか]間[かん]の合意[ごうい]形成[けいせい]は、困難[こんなん]を極[きわ]めるでしょう。\nB: とはいえ、国際[こくさい]的[てき]な信頼[しんらい]関係[かんけい]を損[そこ]なうが最後[さいご]、後[のち]の交渉[こうしょう]は全[まった]く進[すす]まなくなります。\nA: 持続[じぞく]可能[かのう]な開発[かいはつ]の枠組[わくぐ]みいかんにかかわらず、科学的[かがくてき]知見[ちけん]を最大限[さいだいげん]に反映[はんえい]させる必要[ひつよう]があります。\nB: 人類[じんるい]共有[きょうゆう]の資産[しさん]たる海洋[かいよう]を守[まも]る責務[せきむ]を、私[わたし]たちは共有[きょうゆう]しているのです。",
    translation: "A: Coordination continues at the UN over development of deep-sea mineral resources. B: Yes. Even so, approving mining at a stage when research into ecosystem impact is insufficient is an act of betrayal toward future generations. A: We cannot overlook the intensifying resource scramble, but leaving disorderly development unchecked will plunge the marine environment into an irreparable state. B: Absolutely. We should rush to establish norms based on protection of the oceans as a shared commons. A: Building consensus among nations with conflicting interests will be extremely difficult. B: That said, once international trust is damaged, subsequent negotiations will not proceed at all. A: Regardless of the sustainable development framework, scientific findings must be reflected to the maximum extent. B: We share the duty of protecting the oceans as humanity's common asset.",
    questions: [
      {
        q: "What does B call approving mining with insufficient ecosystem research?",
        choices: ["A pragmatic choice", "Betrayal of future generations", "A diplomatic necessity", "An economic opportunity"],
        answerIndex: 1,
        explanation: "B calls it 将来[しょうらい]世代[せだい]に対[たい]する背信[はいしん]行為[こうい] — betrayal of future generations."
      },
      {
        q: "What happens if disorderly development is left alone?",
        choices: ["Ecosystems recover", "Marine environment becomes irreparable", "Resources multiply", "Coastal cities thrive"],
        answerIndex: 1,
        explanation: "A says 無[む]秩序[ちつじょ]な開発[かいはつ]を放置[ほうち]すれば海洋[かいよう]環境[かんきょう]は取[と]り返[かえ]しのつかない事態[じたい]に陥[おちい]る — the marine environment becomes irreparable."
      },
      {
        q: "What does B say should be rushed?",
        choices: ["Mining permits", "Establishing norms based on protecting shared oceans", "Commercial licensing", "New technology"],
        answerIndex: 1,
        explanation: "B says 共有[きょうゆう]財[ざい]たる海洋[かいよう]の保護[ほご]に則[のっと]った規範[きはん]の確立[かくりつ]を急[いそ]ぐべき — establishing norms based on shared-ocean protection should be rushed."
      },
      {
        q: "What happens once international trust is damaged?",
        choices: ["Negotiations speed up", "Subsequent negotiations won't proceed", "Mining begins immediately", "New treaties form"],
        answerIndex: 1,
        explanation: "B says 国際[こくさい]的[てき]な信頼[しんらい]関係[かんけい]を損[そこ]なうが最後[さいご]、後[のち]の交渉[こうしょう]は全[まった]く進[すす]まなくなる — once trust is damaged, subsequent negotiations won't proceed (が最後)."
      },
      {
        q: "What must be reflected regardless of the sustainable development framework?",
        choices: ["Economic forecasts", "Scientific findings", "Industry demands", "Diplomatic pressures"],
        answerIndex: 1,
        explanation: "A says 枠組[わくぐ]みいかんにかかわらず科学的[かがくてき]知見[ちけん]を最大限[さいだいげん]に反映[はんえい]させる — scientific findings must be reflected regardless of the framework."
      }
    ],
    estMinutes: 7,
    tags: ["environment", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-86 — A gerontology ethics forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-86",
    title: "Gerontology Ethics Forum",
    level: "N1",
    context: "An aging researcher and a public health ethicist discuss life-extension technology",
    text: "A: 寿命[じゅみょう]延長[えんちょう]技術[ぎじゅつ]の進展[しんてん]が、倫理[りんり]的[てき]議論[ぎろん]を呼[よ]んでいますね。\nB: ええ。老[ろう]化[か]を疾患[しっかん]と再定義[さいていぎ]し、根治[ちか]を目指[めざ]す動[うご]きが活発[かっぱつ]です。\nA: 治療[ちりょう]の恩恵[おんけい]が広[ひろ]く普及[ふきゅう]せず、富裕[ふゆう]層[そう]にのみ享受[きょうじゅ]されるがごときでは、社会[しゃかい]の分断[ぶんだん]を激化[げきか]しかねない。\nB: もっともです。技術[ぎじゅつ]革新[かくしん]の成果[せいか]が、格差[かくさ]固定化[こていか]の道具[どうぐ]に転[てん]じる事態[じたい]は避[さ]けねばなりません。\nA: 百[ひゃく]歳[さい]寿命[じゅみょう]社会[しゃかい]の到来[とうらい]にもまして、生[せい]の質[しつ]の確保[かくほ]が急務[きゅうむ]でしょう。\nB: まさに。延命[えんめい]のみを追及[ついきゅう]するが余[あま]り、尊厳[そんげん]ある終末期[しゅうまつき]を奪[うば]うがごときは、倫理[りんり]に反[はん]します。\nA: 公正[こうせい]な分配[ぶんぱい]の仕組[しく]み次第[しだい]で、技術[ぎじゅつ]の恩恵[おんけい]は社会[しゃかい]全体[ぜんたい]に波及[はきゅう]し得[え]る。\nB: 高齢[こうれい]者[しゃ]の尊厳[そんげん]を損[そこ]なうことなく、受[う]け入[い]れ可能[かのう]な未来[みらい]を共[とも]に構築[こうちく]したいものです。",
    translation: "A: Advances in life-extension technology are sparking ethical debate. B: Yes. The movement to redefine aging as a disease and aim for a cure is active. A: If treatment benefits do not spread widely and are enjoyed only by the wealthy, social division could intensify. B: Quite right. We must prevent situations where the fruits of technological innovation become tools for固化 of inequality. A: More than the arrival of a 100-year lifespan society, securing the quality of life is urgent. B: Exactly. Pursuing only life extension to the point of depriving people of a dignified end-of-life is contrary to ethics. A: Depending on the distribution mechanism, the benefits of technology could spread throughout society. B: We want to build together an acceptable future without undermining the dignity of the elderly.",
    questions: [
      {
        q: "What is the active movement trying to do?",
        choices: ["Slow aging naturally", "Redefine aging as disease and aim for a cure", "Ban life-extension research", "Reduce medical costs"],
        answerIndex: 1,
        explanation: "B says 老[ろう]化[か]を疾患[しっかん]と再定義[さいていぎ]し根治[ちか]を目指[めざ]す動[うご]きが活発[かっぱつ] — the movement to redefine aging as disease and aim for a cure is active."
      },
      {
        q: "What could happen if benefits are limited to the wealthy?",
        choices: ["Faster research", "Social division could intensify", "Lower costs", "Better ethics"],
        answerIndex: 1,
        explanation: "A says 富裕[ふゆう]層[そう]にのみ享受[きょうじゅ]されるがごときでは社会[しゃかい]の分断[ぶんだん]を激化[げきか]しかねない — social division could intensify."
      },
      {
        q: "What is more urgent than the arrival of a 100-year lifespan society?",
        choices: ["Securing quality of life", "Building new hospitals", "Lowering retirement age", "Expanding pensions"],
        answerIndex: 0,
        explanation: "A says 百[ひゃく]歳[さい]寿命[じゅみょう]社会[しゃかい]の到来[とうらい]にもまして生[せい]の質[しつ]の確保[かくほ]が急務[きゅうむ] — securing quality of life is more urgent (にもまして)."
      },
      {
        q: "What is contrary to ethics according to B?",
        choices: ["Slowing research", "Pursuing only life extension and depriving dignified end-of-life", "Sharing benefits", "Funding public health"],
        answerIndex: 1,
        explanation: "B says 延命[えんめい]のみを追及[ついきゅう]するが余[あま]り尊厳[そんげん]ある終末期[しゅうまつき]を奪[うば]うがごときは倫理[りんり]に反[はん]する — pursuing only life extension to deprive dignified end-of-life is contrary to ethics."
      },
      {
        q: "What determines whether benefits spread to all society?",
        choices: ["The distribution mechanism", "The price of treatment", "The number of clinics", "Media coverage"],
        answerIndex: 0,
        explanation: "A says 公正[こうせい]な分配[ぶんぱい]の仕組[しく]み次第[しだい]で技術[ぎじゅつ]の恩恵[おんけい]は社会[しゃかい]全体[ぜんたい]に波及[はきゅう]し得[え]る — depending on the distribution mechanism (次第で)."
      }
    ],
    estMinutes: 7,
    tags: ["ethics", "aging"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-87 — A post-human identity debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-87",
    title: "Post-Human Identity Debate",
    level: "N1",
    context: "A philosopher and a cognitive scientist debate mind-uploading and personal identity",
    text: "A: 意識[いしき]のアップロード技術[ぎじゅつ]が現実[げんじつ]味[み]を帯[お]びる中[なか]、人格[じんかく]の同一性[どういつせい]をめぐる議論[ぎろん]が活発[かっぱつ]化[か]しています。\nB: デジタル複製[ふくせい]が本人[ほんにん]の記憶[きおく]を継承[けいしょう]したとはいえ、それは同一[どういつ]の存在[そんざい]とは認[みと]め難[がた]い。\nA: 記憶[きおく]と性格[せいかく]が完全[かんぜん]に複製[ふくせい]されたところで、本来[ほんらい]の自己[じこ]は消滅[しょうめつ]しているがごときだ。\nB: そうですね。肉体[にくたい]を離[はな]れた精神[せいしん]を以[もっ]て人間[にんげん]と見做[みな]すがごときは、伝統[でんとう]的[てき]な人間[にんげん]観[かん]を根底[こんてい]から覆[くつがえ]す。\nA: とはいえ、死[し]の恐怖[きょうふ]から解放[かいほう]される可能性[かのうせい]を否定[ひてい]するわけにはゆくまい。\nB: 死[し]を超越[ちょうえつ]するがごときの願望[がんぼう]は、人間[にんげん]の傲慢[ごうまん]の極[きわ]みと言[い]わざるを得[え]ない。\nA: 技術[ぎじゅつ]の成熟[せいじゅく]度[ど]いかんによっては、人格[じんかく]の連続性[れんぞくせい]を保証[ほしょう]する手段[しゅだん]も生[しょう]まれるかもしれません。\nB: どのみち、人間[にんげん]の尊厳[そんげん]を損[そこ]なうが最後[さいご]、文明[ぶんめい]の根幹[こんかん]そのものが崩壊[ほうかい]しかねない。",
    translation: "A: As mind-uploading technology takes on reality, debate over personal identity is becoming active. B: Even if a digital copy inherits the person's memories, it is hard to recognize it as the same being. A: Even if memory and personality are perfectly copied, the original self would be extinguished. B: Right. Viewing a disembodied mind as human overturns the traditional view of humanity from its foundation. A: That said, we cannot deny the possibility of liberation from the fear of death. B: The desire to transcend death must be called the height of human arrogance. A: Depending on the maturity of the technology, a means to guarantee the continuity of personality might also emerge. B: In any case, once human dignity is impaired, the very foundation of civilization could collapse.",
    questions: [
      {
        q: "What does B say is hard to acknowledge even if memories are inherited?",
        choices: ["That data is valuable", "That it is the same being", "That the technology is safe", "That costs are low"],
        answerIndex: 1,
        explanation: "B says 同一[どういつ]の存在[そんざい]とは認[みと]め難[がた]い — it's hard to recognize it as the same being."
      },
      {
        q: "What does A say happens even if memory and personality are perfectly copied?",
        choices: ["The original survives", "The original self is extinguished", "The copy is inferior", "Costs rise sharply"],
        answerIndex: 1,
        explanation: "A says 完全[かんぜん]に複製[ふくせい]されたところで本来[ほんらい]の自己[じこ]は消滅[しょうめつ]しているがごときだ — even if copied perfectly, the original self is extinguished (たところで)."
      },
      {
        q: "What does B say viewing a disembodied mind as human does?",
        choices: ["Reinforces tradition", "Overturns the traditional view of humanity", "Solves identity issues", "Lifts ethical burdens"],
        answerIndex: 1,
        explanation: "B says 肉体[にくたい]を離[はな]れた精神[せいしん]を以[もっ]て人間[にんげん]と見做[みな]すがごときは伝統[でんとう]的[てき]な人間[にんげん]観[かん]を根底[こんてい]から覆[くつがえ]す — it overturns the traditional view of humanity."
      },
      {
        q: "What does B call the desire to transcend death?",
        choices: ["The hope of humanity", "The height of human arrogance", "A moral duty", "A scientific frontier"],
        answerIndex: 1,
        explanation: "B says 死[し]を超越[ちょうえつ]するがごときの願望[がんぼう]は人間[にんげん]の傲慢[ごうまん]の極[きわ]み — the desire to transcend death is the height of arrogance (の極み)."
      },
      {
        q: "What happens once human dignity is impaired?",
        choices: ["Civilization advances", "The foundation of civilization could collapse", "Ethics improve", "Identity is resolved"],
        answerIndex: 1,
        explanation: "B says 人間[にんげん]の尊厳[そんげん]を損[そこ]なうが最後[さいご]、文明[ぶんめい]の根幹[こんかん]そのものが崩壊[ほうかい]しかねない — once dignity is impaired, the foundation of civilization could collapse (が最後)."
      }
    ],
    estMinutes: 7,
    tags: ["philosophy", "technology"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-88 — A carbon capture policy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-88",
    title: "Carbon Capture Policy",
    level: "N1",
    context: "A climate policy advisor and an environmental economist debate CCS subsidies",
    text: "A: 二酸化[にさんか]炭素[たんそ]回収[かいしゅう]・貯留[ちょりゅう]技術[ぎじゅつ]、いわゆるCCSの政策[せいさく]導入[どうにゅう]が検討[けんとう]されていますね。\nB: ええ。もっとも、画期的[かっきてき]な技術[ぎじゅつ]とはいえ、削減[さくげん]量[りょう]の算定[さんてい]方法[ほうほう]に疑義[ぎぎ]が残[のこ]る。\nA: 算定[さんてい]基準[きじゅん]が曖昧[あいまい]なままで巨額[きょがく]の補助金[ほじょきん]を投入[とうにゅう]すれば、税[ぜい]金[きん]の無駄遣[むだづか]いを招[まね]かずにはおかない。\nB: もっともです。技術[ぎじゅつ]的[てき]実現[じつげん]可能性[かのうせい]の検証[けんしょう]を欠[か]いた政策[せいさく]は、信頼[しんらい]を損[そこ]なうのみです。\nA: 民間[みんかん]企業[きぎょう]の参入[さんにゅう]を促[うなが]すにせよ、環境[かんきょう]影響[えいきょう]評価[ひょうか]を厳格[げんかく]に条件[じょうけん]づけるべきだ。\nB: 賛成[さんせい]します。透明性[とうめいせい]ある検証[けんしょう]体制[たいせい]の確立[かくりつ]なくして、国民[こくみん]の理解[りかい]は得[え]られまい。\nA: 監視[かんし]体制[たいせい]の信頼性[しんらいせい]いかんにかかわらず、技術[ぎじゅつ]の限界[げんかい]は誠実[せいじつ]に開示[かいじ]される必要[ひつよう]がある。\nB: 気候[きこう]危機[きき]の深刻[しんこく]さに鑑[かんが]みれば、早急[そうきゅう]かつ慎重[しんちょう]な判断[はんだん]が求[もと]められます。",
    translation: "A: Policy introduction of carbon capture and storage, so-called CCS, is being considered. B: Yes. Even though it's a groundbreaking technology, doubts remain about the calculation method for reduction amounts. A: Pouring massive subsidies in with ambiguous calculation standards will inevitably invite wasteful spending of tax money. B: Quite right. Policies lacking verification of technical feasibility only undermine trust. A: Even if encouraging private-sector entry, environmental impact assessment should be strictly conditioned. B: I agree. Without establishing a transparent verification system, citizens' understanding cannot be obtained. A: Regardless of the reliability of the monitoring regime, the technology's limits must be honestly disclosed. B: Given the seriousness of the climate crisis, urgent yet careful judgment is required.",
    questions: [
      {
        q: "What remains questionable about CCS despite being groundbreaking?",
        choices: ["Its cost", "The calculation method for reduction amounts", "Its safety", "Its popularity"],
        answerIndex: 1,
        explanation: "B says 削減[さくげん]量[りょう]の算定[さんてい]方法[ほうほう]に疑義[ぎぎ]が残[のこ]る — doubts remain about the reduction calculation method."
      },
      {
        q: "What will inevitably happen if subsidies are poured in with ambiguous standards?",
        choices: ["Faster innovation", "Wasteful spending of tax money", "Lower emissions", "Cheaper technology"],
        answerIndex: 1,
        explanation: "A says 巨額[きょがく]の補助金[ほじょきん]を投入[とうにゅう]すれば税[ぜい]金[きん]の無駄遣[むだづか]いを招[まね]かずにはおかない — wasteful spending of tax money will inevitably be invited (ずにはおかない)."
      },
      {
        q: "What does B say a policy lacking feasibility verification does?",
        choices: ["Builds trust", "Only undermines trust", "Speeds deployment", "Lowers costs"],
        answerIndex: 1,
        explanation: "B says 検証[けんしょう]を欠[か]いた政策[せいさく]は信頼[しんらい]を損[そこ]なうのみ — it only undermines trust."
      },
      {
        q: "What should be strictly conditioned for private companies entering?",
        choices: ["Funding amounts", "Environmental impact assessment", "Marketing strategy", "Patent filings"],
        answerIndex: 1,
        explanation: "A says 環境[かんきょう]影響[えいきょう]評価[ひょうか]を厳格[げんかく]に条件[じょうけん]づけるべき — environmental impact assessment should be strictly conditioned."
      },
      {
        q: "What needs to be honestly disclosed regardless of monitoring reliability?",
        choices: ["Subsidy amounts", "The technology's limits", "Investor names", "Patent details"],
        answerIndex: 1,
        explanation: "A says 監視[かんし]体制[たいせい]の信頼性[しんらいせい]いかんにかかわらず技術[ぎじゅつ]の限界[げんかい]は誠実[せいじつ]に開示[かいじ]される — the technology's limits must be honestly disclosed regardless of monitoring."
      }
    ],
    estMinutes: 7,
    tags: ["climate", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-89 — A digital afterlife ethics panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-89",
    title: "Digital Afterlife Ethics Panel",
    level: "N1",
    context: "A thanatologist and a tech ethicist discuss services recreating the deceased",
    text: "A: 故人[こじん]の記憶[きおく]データを用[もち]いたデジタル幽霊[ゆうれい]の生成[せいせい]サービスが登場[とうじょう]しましたね。\nB: 遺族[いぞく]の慰[なぐさ]めになる側面[そくめん]は認[みと]めますが、故人[こじん]の尊厳[そんげん]を損[そこ]なうがごときは看過[かんか]できません。\nA: 本人[ほんにん]の生前[せいぜん]の同意[どうい]を得[え]た場合[ばあい]にせよ、人格[じんかく]の改竄[かいざん]に繋[つな]がりかねない。\nB: 同意[どうい]の有無[うむ]いかんにかかわらず、死[し]後[ご]の人格[じんかく]の商業[しょうぎょう]的[てき]利用[りよう]は禁止[きんし]さるべきです。\nA: そうでしょうか。遺族[いぞく]の精神[せいしん]的[てき]苦痛[くつう]を和[やわ]らげる手段[しゅだん]を全[すべ]て否定[ひてい]するのも酷[こく]では。\nB: 慰[なぐさ]めを目的[もくてき]とするとはいえ、故人[こじん]を商品[しょうひん]化[か]する行為[こうい]は、倫理[りんり]的[てき]に許容[きょよう]し難[がた]い。\nA: 規制[きせい]の範囲[はんい]を誤[あやま]れば、技術[ぎじゅつ]革新[かくしん]を阻害[そがい]しかねないとの懸念[けねん]もあります。\nB: 規制[きせい]の網[あみ]の目[め]が粗[あら]ければ、悪意[あくい]ある利用[りよう]を招[まね]かずにはおかないでしょう。",
    translation: "A: Services generating digital ghosts using the deceased's memory data have appeared. B: I recognize the aspect of comforting bereaved families, but damaging the dignity of the deceased cannot be overlooked. A: Even if the person's consent was obtained during life, it could lead to personality tampering. B: Regardless of whether consent exists, the commercial use of a posthumous personality should be prohibited. A: Is that so? Denying all means of alleviating the mental anguish of bereaved families seems harsh. B: Even if for comfort, the act of commercializing the deceased is ethically unacceptable. A: There is also concern that misjudging the scope of regulation could hinder technological innovation. B: If the regulatory net is too loose, malicious use will inevitably be invited.",
    questions: [
      {
        q: "What does B say cannot be overlooked?",
        choices: ["Comforting the bereaved", "Damaging the dignity of the deceased", "Using memory data", "Launching new services"],
        answerIndex: 1,
        explanation: "B says 故人[こじん]の尊厳[そんげん]を損[そこ]なうがごときは看過[かんか]できません — damaging the dignity of the deceased cannot be overlooked."
      },
      {
        q: "What could happen even if the person consented during life?",
        choices: ["Total comfort for the family", "Personality tampering", "Lower service costs", "Faster approvals"],
        answerIndex: 1,
        explanation: "A says 同意[どうい]を得[え]た場合[ばあい]にせよ人格[じんかく]の改竄[かいざん]に繋[つな]がりかねない — it could lead to personality tampering."
      },
      {
        q: "What does B say should be prohibited regardless of consent?",
        choices: ["Comforting bereaved families", "Commercial use of posthumous personality", "Using public data", "Archiving memories"],
        answerIndex: 1,
        explanation: "B says 同意[どうい]の有無[うむ]いかんにかかわらず死[し]後[ご]の人格[じんかく]の商業[しょうぎょう]的[てき]利用[りよう]は禁止[きんし]さるべき — commercial use of posthumous personality should be prohibited regardless of consent."
      },
      {
        q: "What does B say is ethically unacceptable?",
        choices: ["Helping bereaved families", "Commercializing the deceased", "Developing new technology", "Archiving public records"],
        answerIndex: 1,
        explanation: "B says 故人[こじん]を商品[しょうひん]化[か]する行為[こうい]は倫理[りんり]的[てき]に許容[きょよう]し難[がた]い — commercializing the deceased is ethically unacceptable."
      },
      {
        q: "What happens if the regulatory net is too loose?",
        choices: ["Malicious use is prevented", "Malicious use will inevitably be invited", "Families are comforted", "Costs drop sharply"],
        answerIndex: 1,
        explanation: "B says 規制[きせい]の網[あみ]の目[め]が粗[あら]ければ悪意[あくい]ある利用[りよう]を招[まね]かずにはおかない — malicious use will inevitably be invited (ずにはおかない)."
      }
    ],
    estMinutes: 7,
    tags: ["ethics", "technology"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-90 — A language extinction crisis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-90",
    title: "Language Extinction Crisis",
    level: "N1",
    context: "A linguist and a UNESCO official discuss the loss of minority languages",
    text: "A: 世界[せかい]の言語[げんご]の半[はん]数[すう]が、今世紀[こんせいき]中[ちゅう]に消滅[しょうめつ]するという推計[すいけい]が公[おおやけ]になりました。\nB: ええ。言語[げんご]の死[し]は、単[たん]なる文化[ぶんか]的[てき]損失[そんしつ]にとどまらず、人類[じんるい]の知的[ちてき]遺産[いさん]の喪失[そうしつ]に他[ほか]ならない。\nA: 少数[しょうすう]言語[げんご]の保存[ほぞん]に多額[たがく]の資金[しきん]を投[とう]じたところで、話者[わしゃ]の減少[げんしょう]を止[と]められるわけではありません。\nB: もっとも、保存[ほぞん]の努力[どりょく]を放棄[ほうき]するがごときは、文化[ぶんか]的[てき]多様性[たようせい]を自[みずか]ら捨[す]て去[さ]るに等[ひと]しい。\nA: 教育[きょういく]制度[せいど]への統合[とうごう]次第[しだい]で、若年[じゃくねん]世代[せだい]への継承[けいしょう]は軌道[きどう]に乗[の]り得[え]る。\nB: 行政[ぎょうせい]の支援[しえん]のみに頼[たよ]るきらいがありますが、地域[ちいき]共同体[きょうどうたい]の主体的[しゅたいてき]取組[とりくみ]が不可欠[ふかけつ]です。\nA: 言語[げんご]消滅[しょうめつ]の危機[きき]に対[たい]する関心[かんしん]の高[たか]まりいかんによって、政策[せいさく]の優先[ゆうせん]順位[じゅんい]も変[か]わるでしょう。\nB: 失[うしな]われた言語[げんご]は二度[にど]と戻[もど]らない。私[わたし]たちはその重[おも]みを直視[ちょくし]すべきです。",
    translation: "A: An estimate was published that half of the world's languages will disappear within this century. B: Yes. The death of a language is not merely a cultural loss; it is nothing other than the loss of humanity's intellectual heritage. A: Even if vast funds are invested in preserving minority languages, it does not mean the decline of speakers can be stopped. B: Even so, abandoning preservation efforts is equivalent to discarding cultural diversity oneself. A: Depending on integration into the education system, transmission to younger generations could get on track. B: There is a tendency to rely only on administrative support, but the proactive efforts of local communities are indispensable. A: Depending on the rise of awareness of the language extinction crisis, policy priorities will also change. B: Lost languages never return. We should face that weight directly.",
    questions: [
      {
        q: "What does B say the death of a language is not limited to?",
        choices: ["Cultural loss only", "Economic loss", "Political change", "Demographic shift"],
        answerIndex: 0,
        explanation: "B says 単[たん]なる文化[ぶんか]的[てき]損失[そんしつ]にとどまらず — it is not limited to mere cultural loss."
      },
      {
        q: "What does A say even if vast funds are invested?",
        choices: ["Speakers will surely increase", "It doesn't mean the decline of speakers can be stopped", "All languages will be saved", "Education will improve"],
        answerIndex: 1,
        explanation: "A says 多額[たがく]の資金[しきん]を投[とう]じたところで話者[わしゃ]の減少[げんしょう]を止[と]められるわけではない — even with vast funds, the decline of speakers cannot necessarily be stopped (たところで)."
      },
      {
        q: "What is abandoning preservation efforts equivalent to?",
        choices: ["Honoring tradition", "Discarding cultural diversity oneself", "Encouraging assimilation", "Promoting literacy"],
        answerIndex: 1,
        explanation: "B says 保存[ほぞん]の努力[どりょく]を放棄[ほうき]するがごときは文化[ぶんか]的[てき]多様性[たようせい]を自[みずか]ら捨[す]て去[さ]るに等[ひと]しい — equivalent to discarding cultural diversity oneself."
      },
      {
        q: "What tendency does B point out?",
        choices: ["Relying only on administrative support", "Ignoring UNESCO reports", "Funding only large languages", "Banning regional dialects"],
        answerIndex: 0,
        explanation: "B says 行政[ぎょうせい]の支援[しえん]のみに頼[たよ]るきらいがある — there's a tendency to rely only on administrative support (きらいがある)."
      },
      {
        q: "What changes depending on rising awareness of the crisis?",
        choices: ["Media coverage", "Policy priority", "Number of speakers", "Funding sources"],
        answerIndex: 1,
        explanation: "A says 関心[かんしん]の高[たか]まりいかんによって政策[せいさく]の優先[ゆうせん]順位[じゅんい]も変[か]わる — policy priority changes depending on awareness (いかんによって)."
      }
    ],
    estMinutes: 6,
    tags: ["linguistics", "culture"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-91 — A gene drive ethics review
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-91",
    title: "Gene Drive Ethics Review",
    level: "N1",
    context: "A geneticist and a biosafety regulator debate gene drive deployment for pest eradication",
    text: "A: 遺伝[いでん]子[し]ドライブ技術[ぎじゅつ]を用[もち]いた害虫[がいちゅう]根絶[こんぜつ]の計画[けいかく]が、各国[かっこく]で検討[けんとう]されていますね。\nB: ええ。もっとも、生態[せいたい]系[けい]への連鎖[れんさ]的[てき]影響[えいきょう]が予測[よそく]不能[ふのう]な技術[ぎじゅつ]を野外[やがい]に放[はな]つのは、極[きわ]めて危険[きけん]です。\nA: 断固[だんこ]として反対[はんたい]するわけではありませんが、効果[こうか]の検証[けんしょう]が不十分[ふじゅうぶん]な段階[だんかい]で実施[じっし]すれば、取[と]り返[かえ]しのつかない事態[じたい]を招[まね]く。\nB: その通[とお]りです。一度[いちど]生態[せいたい]系[けい]に放出[ほうしゅつ]された遺伝[いでん]子[し]は、回収[かいしゅう]不可能[ふかのう]なのが最大[さいだい]の懸念[けねん]です。\nA: 国際[こくさい]的[てき]な規制[きせい]枠組[わくぐ]みの整備[せいび]を欠[か]いたまま推進[すいしん]すれば、地球[ちきゅう]規模[きぼ]の生態[せいたい]破壊[はかい]を招[まね]かずにはおかない。\nB: まさに。予防[よぼう]原則[げんそく]に則[のっと]り、慎重[しんちょう]な審査[しんさ]を経[へ]た案件[あんけん]のみ承認[しょうにん]すべきです。\nA: 生態[せいたい]系[けい]への影響[えいきょう]の深刻[しんこく]さいかんにかかわらず、透明性[とうめいせい]ある議論[ぎろん]が前提[ぜんてい]とされます。\nB: 科学[かがく]技術[ぎじゅつ]の進歩[しんぽ]を人類[じんるい]の福祉[ふくし]に資[し]させるため、私[わたし]たちは冷徹[れいてつ]な判断[はんだん]力[りょく]が求[もと]められます。",
    translation: "A: Plans for pest eradication using gene drive technology are being considered in various countries. B: Yes. However, releasing into the wild a technology whose cascading impact on ecosystems is unpredictable is extremely dangerous. A: I am not resolutely opposed, but implementing it at a stage when efficacy verification is insufficient will invite irreparable situations. B: That's right. The greatest concern is that genes once released into an ecosystem cannot be recovered. A: Promoting it without building an international regulatory framework will inevitably invite global ecological destruction. B: Exactly. In accordance with the precautionary principle, only projects that have undergone careful review should be approved. A: Regardless of the seriousness of ecological impact, transparent discussion is a prerequisite. B: To direct scientific progress toward humanity's welfare, we are required to have dispassionate judgment.",
    questions: [
      {
        q: "What does B say is extremely dangerous?",
        choices: ["Lab research on genes", "Releasing to the wild a technology with unpredictable ecological impact", "Publishing data", "Reviewing protocols"],
        answerIndex: 1,
        explanation: "B says 生態[せいたい]系[けい]への連鎖[れんさ]的[てき]影響[えいきょう]が予測[よそく]不能[ふのう]な技術[ぎじゅつ]を野外[やがい]に放[はな]つのは極[きわ]めて危険[きけん] — releasing unpredictable-impact tech into the wild is extremely dangerous."
      },
      {
        q: "What could happen if implemented with insufficient verification?",
        choices: ["Faster pest control", "Irreparable situations", "Lower costs", "Public approval"],
        answerIndex: 1,
        explanation: "A says 検証[けんしょう]が不十分[ふじゅうぶん]な段階[だんかい]で実施[じっし]すれば取[と]り返[かえ]しのつかない事態[じたい]を招[まね]く — it invites irreparable situations."
      },
      {
        q: "What is the biggest concern about released genes?",
        choices: ["They mutate quickly", "They cannot be recovered", "They are too costly", "They are too weak"],
        answerIndex: 1,
        explanation: "B says 一度[いちど]生態[せいたい]系[けい]に放出[ほうしゅつ]された遺伝[いでん]子[し]は回収[かいしゅう]不可能[ふかのう]なのが最大[さいだい]の懸念[けねん] — once released, genes cannot be recovered."
      },
      {
        q: "What will inevitably happen if promoted without international regulation?",
        choices: ["Ecosystem recovery", "Global ecological destruction", "Faster innovation", "Cost reductions"],
        answerIndex: 1,
        explanation: "A says 国際[こくさい]的[てき]な規制[きせい]枠組[わくぐ]みの整備[せいび]を欠[か]いたまま推進[すいしん]すれば地球[ちきゅう]規模[きぼ]の生態[せいたい]破壊[はかい]を招[まね]かずにはおかない — global ecological destruction will be invited (ずにはおかない)."
      },
      {
        q: "What is required regardless of the seriousness of ecological impact?",
        choices: ["Fast approval", "Transparent discussion", "Commercial deployment", "Public funding"],
        answerIndex: 1,
        explanation: "A says 生態[せいたい]系[けい]への影響[えいきょう]の深刻[しんこく]さいかんにかかわらず透明性[とうめいせい]ある議論[ぎろん]が前提[ぜんてい]とされる — transparent discussion is required regardless of seriousness."
      }
    ],
    estMinutes: 7,
    tags: ["biosafety", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-92 — A wealth inequality tribunal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-92",
    title: "Wealth Inequality Tribunal",
    level: "N1",
    context: "A tax prosecutor and a legal scholar discuss international tax evasion by the ultra-wealthy",
    text: "A: 富裕[ふゆう]層[そう]の税[ぜい]逃[に]れが、国際[こくさい]調査[ちょうさ]で次々[つぎつぎ]と発覚[はっかく]していますね。\nB: ええ。もっとも、適法[てきほう]な節税[せつぜい]と違法[いほう]な脱税[だつぜい]の境界[きょうかい]は、必[かなら]ずしも明確[めいかく]ではありません。\nA: 法[ほう]の不備[ふび]を突[つ]いたがごとき行為[こうい]は、道義[どうぎ]的[てき]に許容[きょよう]し難[がた]いのは論[ろん]を俟[ま]たない。\nB: もっともです。富裕[ふゆう]層[そう]が制度[せいど]を利己[りこ]的[てき]に利用[りよう]するがごときは、社会[しゃかい]の連帯[れんたい]感[かん]を損[そこ]ないます。\nA: 国際[こくさい]的[てき]な課税[かぜい]の標準化[ひょうじゅんか]を急[いそ]がねば、格差[かくさ]の拡大[かくだい]を食[く]い止[と]めることはできまい。\nB: 全[まった]くです。租税[そぜい]条約[じょうやく]の網[あみ]の目[め]をくぐり抜[ぬ]ける仕組[しく]みを放置[ほうち]するが最後[さいご]、税[ぜい]制[ぜい]の信頼[しんらい]は地[ち]に落[お]ちる。\nA: 資産[しさん]の公開[こうかい]義務[ぎむ]化[か]の有無[うむ]いかんによって、税[ぜい]務[む]当局[とうきょく]の把握[はあく]精度[せいど]も大[おお]きく変[か]わるでしょう。\nB: 格差[かくさ]是正[せいせい]を旗印[はたじるし]に掲[かか]げつつ、国際[こくさい]的[てき]な連携[れんけい]を強化[きょうか]するしかありません。",
    translation: "A: Tax evasion by the wealthy is being uncovered one after another in international investigations. B: Yes. However, the boundary between legal tax optimization and illegal tax evasion is not necessarily clear. A: Acts exploiting legal loopholes are morally unacceptable beyond argument. B: Quite right. The wealthy selfishly exploiting the system undermines social solidarity. A: Without rushing international standardization of taxation, the expansion of inequality cannot be halted. B: Absolutely. Once mechanisms slipping through tax treaties are left unchecked, trust in the tax system falls to the ground. A: Depending on whether asset disclosure is mandatory, the tax authority's accuracy of grasp will change greatly. B: While raising the banner of inequality correction, we have no choice but to strengthen international cooperation.",
    questions: [
      {
        q: "What is not necessarily clear, according to B?",
        choices: ["Penalty amounts", "The boundary between legal tax optimization and illegal evasion", "Court procedures", "Public disclosures"],
        answerIndex: 1,
        explanation: "B says 適法[てきほう]な節税[せつぜい]と違法[いほう]な脱税[だつぜい]の境界[きょうかい]は必[かなら]ずしも明確[めいかく]ではない — the boundary is not necessarily clear."
      },
      {
        q: "What does A say about acts exploiting legal loopholes?",
        choices: ["Are legally prudent", "Are morally unacceptable beyond argument", "Are unavoidable", "Are encouraged"],
        answerIndex: 1,
        explanation: "A says 法[ほう]の不備[ふび]を突[つ]いたがごとき行為[こうい]は道義[どうぎ]的[てき]に許容[きょよう]し難[がた]いのは論[ろん]を俟[ま]たない — morally unacceptable beyond argument (論を俟たない)."
      },
      {
        q: "What does B say about the wealthy exploiting the system?",
        choices: ["Boosts the economy", "Undermines social solidarity", "Increases fairness", "Strengthens trust"],
        answerIndex: 1,
        explanation: "B says 富裕[ふゆう]層[そう]が制度[せいど]を利己[りこ]的[てき]に利用[りよう]するがごときは社会[しゃかい]の連帯[れんたい]感[かん]を損[そこ]なう — it undermines social solidarity."
      },
      {
        q: "What happens once mechanisms slipping through tax treaties are left alone?",
        choices: ["Trust rises", "Trust in the tax system falls to the ground", "Inequality drops", "Cooperation improves"],
        answerIndex: 1,
        explanation: "B says 租税[そぜい]条約[じょうやく]の網[あみ]の目[め]をくぐり抜[ぬ]ける仕組[しく]みを放置[ほうち]するが最後[さいご]、税[ぜい]制[ぜい]の信頼[しんらい]は地[ち]に落[お]ちる — once left alone, trust falls to the ground (が最後)."
      },
      {
        q: "What changes depending on whether asset disclosure is mandatory?",
        choices: ["Court rulings", "Tax authority's grasp accuracy", "Wealthy behavior", "Media coverage"],
        answerIndex: 1,
        explanation: "A says 資産[しさん]の公開[こうかい]義務[ぎむ]化[か]の有無[うむ]いかんによって税[ぜい]務[む]当局[とうきょく]の把握[はあく]精度[せいど]も変[か]わる — the tax authority's grasp accuracy changes."
      }
    ],
    estMinutes: 7,
    tags: ["economy", "law"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-93 — A dark web regulation debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-93",
    title: "Dark Web Regulation Debate",
    level: "N1",
    context: "A law enforcement official and a digital rights advocate discuss dark web oversight",
    text: "A: ダークウェブ上[じょう]の違法[いほう]取引[とりひき]の横行[おうこう]を食[く]い止[と]めるため、新[あら]たな法規[ほうき]が提案[ていあん]されました。\nB: もっとも、匿名[とくめい]性[せい]の保護[ほご]と犯罪[はんざい]取締[とりしま]りは、本質[ほんしつ]的[てき]に両立[りょうりつ]し難[がた]い。\nA: プライバシーの権利[けんり]を犠牲[ぎせい]にしてでも、取締[とりしま]りを強化[きょうか]すべきだとの声[こえ]が強[つよ]い。\nB: 効率[こうりつ]を優先[ゆうせん]するが余[あま]り、言論[げんろん]の自由[じゆう]を委縮[いしゅく]させるがごときは、民主[みんしゅ]社会[しゃかい]の根幹[こんかん]を揺[ゆる]がす。\nA: とはいえ、児童[じどう]の搾取[さくしゅ]や麻薬[まやく]取引[とりひき]を放置[ほうち]するがごときは、断固[だんこ]として拒絶[きょぜつ]さるべきです。\nB: 賛成[さんせい]します。捜査[そうさ]機関[きかん]の権限[けんげん]拡大[かくだい]には、厳格[げんかく]な司法[しほう]チェックが伴[ともな]うべきです。\nA: 司法[しほう]の監視[かんし]の目[め]が行[い]き届[とど]く限[かぎ]り、権限[けんげん]の濫用[らんよう]は相当[そうとう]抑[よく]制[せい]できるはずだ。\nB: まさに。法[ほう]の執行[しっこう]いかんにかかわらず、人権[じんけん]保護[ほご]を最優先[さいゆうせん]に置[お]く姿勢[しせい]が求[もと]められます。",
    translation: "A: To curb the rampant illegal trade on the dark web, new regulations have been proposed. B: However, protecting anonymity and cracking down on crime are essentially difficult to reconcile. A: There are strong voices saying enforcement should be strengthened even at the cost of privacy rights. B: Prioritizing efficiency to the point of shrinking freedom of speech shakes the foundations of a democratic society. A: That said, leaving child exploitation and drug trafficking unchecked must be resolutely rejected. B: I agree. Expansion of investigative authority should be accompanied by strict judicial checks. A: As long as judicial oversight reaches thoroughly, abuse of authority should be substantially controlled. B: Exactly. Regardless of law enforcement, an attitude prioritizing human rights protection is required.",
    questions: [
      {
        q: "What does B say is essentially difficult to reconcile?",
        choices: ["Privacy and profit", "Protecting anonymity and cracking down on crime", "Cost and speed", "Local and federal law"],
        answerIndex: 1,
        explanation: "B says 匿名[とくめい]性[せい]の保護[ほご]と犯罪[はんざい]取締[とりしま]りは本質[ほんしつ]的[てき]に両立[りょうりつ]し難[がた]い — anonymity protection and crime crackdown are essentially difficult to reconcile."
      },
      {
        q: "What does B say prioritizing efficiency could do?",
        choices: ["Strengthen democracy", "Shake the foundations of a democratic society", "Reduce crime sharply", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 効率[こうりつ]を優先[ゆうせん]するが余[あま]り言論[げんろん]の自由[じゆう]を委縮[いしゅく]させるがごときは民主[みんしゅ]社会[しゃかい]の根幹[こんかん]を揺[ゆる]がす — it shakes democratic foundations."
      },
      {
        q: "What does A say must be resolutely rejected?",
        choices: ["Stronger encryption", "Leaving child exploitation and drug trafficking unchecked", "Anonymous browsing", "Judicial review"],
        answerIndex: 1,
        explanation: "A says 児童[じどう]の搾取[さくしゅ]や麻薬[まやく]取引[とりひき]を放置[ほうち]するがごときは断固[だんこ]として拒絶[きょぜつ]さるべき — leaving exploitation and trafficking unchecked must be rejected."
      },
      {
        q: "What should accompany expansion of investigative authority?",
        choices: ["Public funding", "Strict judicial checks", "Faster approvals", "Reduced oversight"],
        answerIndex: 1,
        explanation: "B says 権限[けんげん]拡大[かくだい]には厳格[げんかく]な司法[しほう]チェックが伴[ともな]うべき — strict judicial checks should accompany it."
      },
      {
        q: "What is required regardless of law enforcement?",
        choices: ["An attitude prioritizing human rights protection", "Faster prosecution", "Lower budgets", "Broader warrants"],
        answerIndex: 0,
        explanation: "B says 法[ほう]の執行[しっこう]いかんにかかわらず人権[じんけん]保護[ほご]を最優先[さいゆうせん]に置[お]く姿勢[しせい]が求[もと]められる — an attitude prioritizing human rights is required regardless of enforcement."
      }
    ],
    estMinutes: 7,
    tags: ["law", "privacy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-94 — A sleep science symposium
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-94",
    title: "Sleep Science Symposium",
    level: "N1",
    context: "A neuroscientist and an occupational health physician discuss chronic sleep deprivation",
    text: "A: 睡眠[すいみん]の質[しつ]と精神[せいしん]的[てき]健康[けんこう]の因果[いんが]関係[かんけい]について、新[あら]たな研究[けんきゅう]成果[せいか]が発表[はっぴょう]されましたね。\nB: ええ。睡眠[すいみん]不足[ぶそく]が認知[にんち]機能[きのう]の低下[ていか]を招[まね]くことは、疑[うたが]いの余地[よち]がない。\nA: 長期[ちょうき]的[てき]な慢性的[まんせいてき]な睡眠[すいみん]負債[ふさい]が蓄積[ちくせき]すれば、生活[せいかつ]習慣[しゅうかん]病[びょう]のリスクを跳[は]ね上[あ]げかねない。\nB: もっともです。働[はたら]き盛[ざか]りの世代[せだい]に睡眠[すいみん]の重要性[じゅうようせい]を啓発[けいはつ]する仕組[しく]みが急務[きゅうむ]です。\nA: 労働[ろうどう]時間[じかん]の規制[きせい]だけでは解決[かいけつ]しない側面[そくめん]もあるとすれば、企業[きぎょう]側[がわ]の意識[いしき]改革[かいかく]も不可欠[ふかけつ]だ。\nB: まさに。成果[せいか]主義[しゅぎ]を過度[かど]に追求[ついきゅう]するが余[あま]り、社員[しゃいん]の健康[けんこう]を損[そこ]なうがごときは、本末[ほんまつ]転倒[てんとう]です。\nA: 個人[こじん]の自己[じこ]責任[せきにん]に帰[き]する向[む]きもありますが、環境[かんきょう]の整備[せいび]いかんによって、行動[こうどう]の改善[かいぜん]は大[おお]きく変[か]わる。\nB: 良質[りょうしつ]な睡眠[すいみん]は基本[きほん]的人権[じんけん]とすら位置[いち]づけたいものです。",
    translation: "A: New research results on the causal relationship between sleep quality and mental health have been announced. B: Yes. That sleep deprivation causes cognitive decline admits of no doubt. A: If long-term chronic sleep debt accumulates, it could spike the risk of lifestyle diseases. B: Quite right. Mechanisms to educate working-age generations about the importance of sleep are urgent. A: If regulation of working hours alone cannot solve every aspect, corporate mindset reform is also indispensable. B: Exactly. Damaging employees' health by overpursuing meritocracy is putting the cart before the horse. A: Some attribute it to personal responsibility, but depending on environment preparation, behavioral improvement varies greatly. B: I would even position quality sleep as a basic human right.",
    questions: [
      {
        q: "What is beyond doubt according to B?",
        choices: ["Sleep medication is safe", "Sleep deprivation causes cognitive decline", "Insomnia is genetic", "Naps are ineffective"],
        answerIndex: 1,
        explanation: "B says 睡眠[すいみん]不足[ぶそく]が認知[にんち]機能[きのう]の低下[ていか]を招[まね]くことは疑[うたが]いの余地[よち]がない — sleep deprivation causing cognitive decline is beyond doubt."
      },
      {
        q: "What could happen if chronic sleep debt accumulates?",
        choices: ["Sharper cognition", "Risk of lifestyle diseases could spike", "Lower stress", "Longer lifespan"],
        answerIndex: 1,
        explanation: "A says 慢性的[まんせいてき]な睡眠[すいみん]負債[ふさい]が蓄積[ちくせき]すれば生活[せいかつ]習慣[しゅうかん]病[びょう]のリスクを跳[は]ね上[あ]げかねない — risk of lifestyle diseases could spike."
      },
      {
        q: "What does B call putting the cart before the horse?",
        choices: ["Encouraging naps", "Damaging employees' health by overpursuing meritocracy", "Reducing overtime", "Offering sleep seminars"],
        answerIndex: 1,
        explanation: "B says 成果[せいか]主義[しゅぎ]を過度[かど]に追求[ついきゅう]するが余[あま]り社員[しゃいん]の健康[けんこう]を損[そこ]なうがごときは本末[ほんまつ]転倒[てんとう] — damaging employees' health by overpursuing meritocracy is upside down."
      },
      {
        q: "What does A say behavioral improvement depends on?",
        choices: ["Genetics", "Environment preparation", "Work hours alone", "Personal willpower"],
        answerIndex: 1,
        explanation: "A says 環境[かんきょう]の整備[せいび]いかんによって行動[こうどう]の改善[かいぜん]は大[おお]きく変[か]わる — depending on environment preparation (いかんによって)."
      },
      {
        q: "What does B want to position quality sleep as?",
        choices: ["A luxury good", "A basic human right", "A medical treatment", "An employer perk"],
        answerIndex: 1,
        explanation: "B says 良質[りょうしつ]な睡眠[すいみん]は基本[きほん]的人権[じんけん]とすら位置[いち]づけたい — would position quality sleep even as a basic human right."
      }
    ],
    estMinutes: 6,
    tags: ["health", "science"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-95 — A food tech ethics panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-95",
    title: "Food Tech Ethics Panel",
    level: "N1",
    context: "A cellular agriculture entrepreneur and a traditional farming advocate debate cultured meat",
    text: "A: 細胞[さいぼう]培養[ばいよう]肉[にく]の市場[しじょう]投入[とうにゅう]が、各国[かっこく]で承認[しょうにん]され始[はじ]めました。\nB: ええ。もっとも、環境[かんきょう]負荷[ふか]の低減[ていげん]に資[し]する技術[ぎじゅつ]とはいえ、伝統[でんとう]農業[のうぎょう]への打撃[だげき]は看過[かんか]できません。\nA: 旧来[きゅうらい]の産業[さんぎょう]を保護[ほご]するが余[あま]り、技術[ぎじゅつ]革新[かくしん]を阻害[そがい]するがごときは、長期[ちょうき]的[てき]には逆[ぎゃく]効果[こうか]です。\nB: 賛成[さんせい]します。移行[いこう]期[き]の支援[しえん]措置[そち]を講[こう]じつつ、新技術[しんぎじゅつ]の普及[ふきゅう]を進[すす]めるのが適切[てきせつ]でしょう。\nA: 消費者[しょうひしゃ]の受容[じゅよう]度[ど]いかんによっては、市場[しじょう]規模[きぼ]の拡大[かくだい]は予想[よそう]以上[いじょう]に早[はや]まるかもしれません。\nB: 安全性[あんぜんせい]の検証[けんしょう]データを不十分[ふじゅうぶん]なまま普及[ふきゅう]させれば、健康[けんこう]被害[ひがい]を招[まね]かずにはおかない。\nA: 厳格[げんかく]な安全[あんぜん]基準[きじゅん]に則[のっと]った審査[しんさ]を経[へ]た製品[せいひん]のみ、市場[しじょう]に出[だ]すべきです。\nB: 消費者[しょうひしゃ]の知[し]る権利[けんり]を尊[とうと]ぶ限[かぎ]り、食品[しょくひん]システムの持続[じぞく]可能[かのう]化[か]は軌道[きどう]に乗[の]るでしょう。",
    translation: "A: Market introduction of cultured meat has begun to be approved in various countries. B: Yes. However, even though it's a technology that aids reduction of environmental load, the blow to traditional agriculture cannot be overlooked. A: Hindering innovation by protecting legacy industries is counterproductive in the long term. B: I agree. While implementing transitional support measures, advancing adoption of new technology is appropriate. A: Depending on consumer acceptance, market expansion could accelerate faster than expected. B: Spreading adoption with insufficient safety verification data will inevitably invite health damage. A: Only products that have undergone review in accordance with strict safety standards should be put on the market. B: As long as consumers' right to know is respected, the sustainability of the food system will get on track.",
    questions: [
      {
        q: "What cannot be overlooked despite being a technology that reduces environmental load?",
        choices: ["Higher prices", "The blow to traditional agriculture", "Lower yields", "Faster approval"],
        answerIndex: 1,
        explanation: "B says 伝統[でんとう]農業[のうぎょう]への打撃[だげき]は看過[かんか]できません — the blow to traditional agriculture cannot be overlooked."
      },
      {
        q: "What does A say has a counterproductive long-term effect?",
        choices: ["Funding startups", "Hindering innovation by protecting legacy industries", "Subsidizing farmers", "Importing meat"],
        answerIndex: 1,
        explanation: "A says 旧来[きゅうらい]の産業[さんぎょう]を保護[ほご]するが余[あま]り技術[ぎじゅつ]革新[かくしん]を阻害[そがい]するがごときは長期[ちょうき]的[てき]には逆[ぎゃく]効果[こうか] — hindering innovation by protecting legacy industries is counterproductive."
      },
      {
        q: "What should be done while implementing transitional support?",
        choices: ["Halting all new technology", "Advancing adoption of new technology", "Banning cultured meat", "Raising tariffs"],
        answerIndex: 1,
        explanation: "B says 移行[いこう]期[き]の支援[しえん]措置[そち]を講[こう]じつつ新技術[しんぎじゅつ]の普及[ふきゅう]を進[すす]める — advance new technology adoption while implementing transitional support."
      },
      {
        q: "What will inevitably happen if safety verification is insufficient?",
        choices: ["Faster adoption", "Health damage will be invited", "Lower prices", "Better nutrition"],
        answerIndex: 1,
        explanation: "B says 安全性[あんぜんせい]の検証[けんしょう]データを不十分[ふじゅうぶん]なまま普及[ふきゅう]させれば健康[けんこう]被害[ひがい]を招[まね]かずにはおかない — health damage will inevitably be invited (ずにはおかない)."
      },
      {
        q: "What does B say will happen as long as consumers' right to know is respected?",
        choices: ["Prices will fall", "Food system sustainability will get on track", "Cultured meat will be banned", "Traditional farming will vanish"],
        answerIndex: 1,
        explanation: "B says 消費者[しょうひしゃ]の知[し]る権利[けんり]を尊[とうと]ぶ限[かぎ]り食品[しょくひん]システムの持続[じぞく]可能[かのう]化[か]は軌道[きどう]に乗[の]る — sustainability will get on track (限り)."
      }
    ],
    estMinutes: 7,
    tags: ["food", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-96 — A mental privacy law hearing
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-96",
    title: "Mental Privacy Law Hearing",
    level: "N1",
    context: "A neuroethicist and a tech industry lawyer debate regulation of brain-data commercial use",
    text: "A: 脳[のう]波[は]データを用[もち]いた感情[かんじょう]推定[すいてい]技術[ぎじゅつ]の商業[しょうぎょう]利用[りよう]を規制[きせい]する法案[ほうあん]が審議[しんぎ]されています。\nB: ええ。精神[せいしん]的[てき]プライバシーの保護[ほご]は、新[あら]たな基本[きほん]的人権[じんけん]として位置[いち]づけられるべきです。\nA: 脳[のう]内[ない]情報[じょうほう]を無断[むだん]で解析[かいせき]するがごときは、個人[こじん]の尊厳[そんげん]に対[たい]する重大[じゅうだい]な侵害[しんがい]に他[ほか]ならない。\nB: もっともです。法[ほう]規制[きせい]を欠[か]いた状態[じょうたい]で技術[ぎじゅつ]が普及[ふきゅう]すれば、監視[かんし]社会[しゃかい]の深刻[しんこく]化[か]を招[まね]かずにはおかない。\nA: とはいえ、医療[いりょう]診断[しんだん]など有益[ゆうえき]な応用[おうよう]まで一律[いちりつ]に禁止[きんし]するのは行[い]き過[す]ぎでしょう。\nB: 医療[いりょう]目的[もくてき]であれ商業[しょうぎょう]目的[もくてき]であれ、事前[じぜん]の明確[めいかく]な同意[どうい]なくして、脳[のう]データを取得[しゅとく]すべきではありません。\nA: 同意[どうい]の取得[しゅとく]手続[てつづ]きの厳密[げんみつ]さいかんによって、法[ほう]の実効性[じっこうせい]も大[おお]きく異[こと]なるでしょう。\nB: 精神[せいしん]的[てき]自律[じりつ]性[せい]を損[そこ]なうが最後[さいご]、人間[にんげん]の自由[じゆう]の概念[がいねん]そのものが変質[へんしつ]しかねない。",
    translation: "A: A bill regulating the commercial use of emotion-estimation technology using brainwave data is being deliberated. B: Yes. Protection of mental privacy should be positioned as a new basic human right. A: Analyzing brain information without authorization is nothing other than a serious violation of personal dignity. B: Quite right. If technology spreads without legal regulation, it will inevitably invite intensification of the surveillance society. A: That said, uniformly prohibiting even beneficial applications such as medical diagnosis would be going too far. B: Whether for medical or commercial purposes, brain data should not be acquired without prior clear consent. A: Depending on the strictness of consent acquisition procedures, the law's effectiveness will also differ greatly. B: Once mental autonomy is impaired, the very concept of human freedom could change.",
    questions: [
      {
        q: "What does B say should be positioned as a new basic human right?",
        choices: ["Freedom of speech", "Mental privacy protection", "Property rights", "Voting rights"],
        answerIndex: 1,
        explanation: "B says 精神[せいしん]的[てき]プライバシーの保護[ほご]は新[あら]たな基本[きほん]的人権[じんけん]として位置[いち]づけられるべき — mental privacy protection should be positioned as a new basic human right."
      },
      {
        q: "What does A call unauthorized analysis of brain information?",
        choices: ["A useful tool", "A serious violation of personal dignity", "A harmless practice", "A diagnostic aid"],
        answerIndex: 1,
        explanation: "A says 脳[のう]内[ない]情報[じょうほう]を無断[むだん]で解析[かいせき]するがごときは個人[こじん]の尊厳[そんげん]に対[たい]する重大[じゅうだい]な侵害[しんがい]に他[ほか]ならない — a serious violation of personal dignity."
      },
      {
        q: "What will inevitably happen if technology spreads without regulation?",
        choices: ["Better mental health", "Intensification of the surveillance society", "Faster innovation", "Lower data costs"],
        answerIndex: 1,
        explanation: "B says 法[ほう]規制[きせい]を欠[か]いた状態[じょうたい]で技術[ぎじゅつ]が普及[ふきゅう]すれば監視[かんし]社会[しゃかい]の深刻[しんこく]化[か]を招[まね]かずにはおかない — intensification of surveillance society (ずにはおかない)."
      },
      {
        q: "What does B say brain data shouldn't be acquired without?",
        choices: ["Government approval", "Prior clear consent", "Payment", "Anonymization"],
        answerIndex: 1,
        explanation: "B says 事前[じぜん]の明確[めいかく]な同意[どうい]なくして脳[のう]データを取得[しゅとく]すべきではない — brain data shouldn't be acquired without prior clear consent."
      },
      {
        q: "What happens once mental autonomy is impaired?",
        choices: ["Innovation accelerates", "The concept of human freedom itself could change", "Mental health improves", "Regulation becomes easier"],
        answerIndex: 1,
        explanation: "B says 精神[せいしん]的[てき]自律[じりつ]性[せい]を損[そこ]なうが最後人間[にんげん]の自由[じゆう]の概念[がいねん]そのものが変質[へんしつ]しかねない — the concept of human freedom could change (が最後)."
      }
    ],
    estMinutes: 7,
    tags: ["privacy", "neuroethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-97 — A climate migration conference
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-97",
    title: "Climate Migration Conference",
    level: "N1",
    context: "A UN refugee official and a sovereignty-focused diplomat debate climate refugee status",
    text: "A: 気候[きこう]変動[へんどう]による気候[きこう]難民[なんみん]の数[かず]が、年々[ねんねん]増大[ぞうだい]していますね。\nB: ええ。海[うみ]面上昇[めんじょうしょう]に伴[ともなう]住地[じゅうち]の喪失[そうしつ]は、国家[こっか]の存亡[そんぼう]に関[かん]する問題[もんだい]です。\nA: 受入[うけいれ]枠[わく]の拡大[かくだい]を拒[こば]む国[くに]が後[あと]を絶[た]たない限[かぎ]り、人道[じんどう]的[てき]危機[きき]は深刻[しんこく]化[か]する一方[いっぽう]だ。\nB: もっとも、国[くに]の受容[じゅよう]能力[のうりょく]には自[みずか]ら限界[げんかい]があり、無[む]制限[せいげん]の受入[うけいれ]を迫[せま]るのも現実[げんじつ]的[てき]ではありません。\nA: であれば、気候[きこう]難民[なんみん]の地位[ちい]を国際[こくさい]法[ほう]に明文化[めいぶんか]するのが先決[せんけつ]でしょう。\nB: 賛成[さんせい]します。法的[ほうてき]地位[ちい]の不明確[ふめいかく]さを放置[ほうち]するがごときは、責任[せきにん]のなすり合[あ]いを招[まね]くのみです。\nA: 国際[こくさい]協力[きょうりょく]の枠組[わくぐ]みいかんにかかわらず、各国[かっこく]が自[みずか]ら取[と]り組[く]む姿勢[しせい]が試[ため]されます。\nB: 気候[きこう]危機[きき]は特定[とくてい]の国[くに]の問題[もんだい]ではなく、人類[じんるい]共通[きょうつう]の課題[かだい]なのです。",
    translation: "A: The number of climate refugees due to climate change is increasing year by year. B: Yes. The loss of habitat accompanying sea-level rise is an issue concerning national survival. A: As long as countries refusing to expand acceptance quotas persist, the humanitarian crisis will only intensify. B: However, each country's reception capacity has its own limits, and forcing unlimited acceptance is unrealistic. A: In that case, codifying the status of climate refugees in international law should be the priority. B: I agree. Leaving the unclear legal status unaddressed only invites mutual buck-passing. A: Regardless of the international cooperation framework, each country's attitude to tackle the issue itself is tested. B: The climate crisis is not a problem of any specific country; it is a common challenge for humanity.",
    questions: [
      {
        q: "What is the loss of habitat due to sea-level rise?",
        choices: ["A temporary inconvenience", "An issue concerning national survival", "A regional dispute", "An economic setback"],
        answerIndex: 1,
        explanation: "B says 海[うみ]面上昇[めんじょうしょう]に伴[ともなう]住地[じゅうち]の喪失[そうしつ]は国家[こっか]の存亡[そんぼう]に関[かん]する問題[もんだい] — it concerns national survival."
      },
      {
        q: "What will happen as long as countries refusing to expand acceptance persist?",
        choices: ["The crisis eases", "The humanitarian crisis will only intensify", "Refugee numbers drop", "Cooperation improves"],
        answerIndex: 1,
        explanation: "A says 受入[うけいれ]枠[わく]の拡大[かくだい]を拒[こば]む国[くに]が後[あと]を絶[た]たない限[かぎ]り人道[じんどう]的[てき]危機[きき]は深刻[しんこく]化[か]する一方[いっぽう] — the crisis will only intensify (限り)."
      },
      {
        q: "What does B say is unrealistic?",
        choices: ["Codifying refugee status", "Forcing unlimited acceptance", "International cooperation", "Building seawalls"],
        answerIndex: 1,
        explanation: "B says 無[む]制限[せいげん]の受入[うけいれ]を迫[せま]るのも現実[げんじつ]的[てき]ではない — forcing unlimited acceptance is unrealistic."
      },
      {
        q: "What does A say should be the priority?",
        choices: ["Building more camps", "Codifying climate refugee status in international law", "Closing borders", "Reducing emissions only"],
        answerIndex: 1,
        explanation: "A says 気候[きこう]難民[なんみん]の地位[ちい]を国際[こくさい]法[ほう]に明文化[めいぶんか]するのが先決[せんけつ] — codifying climate refugee status is the priority."
      },
      {
        q: "What is tested regardless of the international cooperation framework?",
        choices: ["National budgets", "Each country's attitude to tackle the issue itself", "Refugee numbers", "Border security"],
        answerIndex: 1,
        explanation: "A says 国際[こくさい]協力[きょうりょく]の枠組[わくぐ]みいかんにかかわらず各国[かっこく]が自[みずか]ら取[と]り組[く]む姿勢[しせい]が試[ため]される — each country's own attitude is tested regardless of framework."
      }
    ],
    estMinutes: 7,
    tags: ["climate", "migration"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-98 — A nuclear energy revival debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-98",
    title: "Nuclear Energy Revival Debate",
    level: "N1",
    context: "An energy policy minister and a nuclear safety advocate debate reactor restarts",
    text: "A: 脱[だつ]炭素[たんそ]化[か]の実現[じつげん]に向[む]け、原子[げんし]力[りょく]発電[はつでん]の再稼働[さいかどう]を推[お]す声[こえ]が高[たか]まっていますね。\nB: ええ。もっとも、原発[げんぱつ]の安全性[あんぜんせい]に対[たい]する懸念[けねん]を捨[す]て去[さ]るわけにはゆきません。\nA: 再生[さいせい]可能[かのう]エネルギーだけでは電力[でんりょく]需要[じゅよう]を賄[まか]ない得[え]ないとすれば、原発[げんぱつ]への依存[いぞん]はやむを得[え]まい。\nB: 安全性[あんぜんせい]を犠牲[ぎせい]にしてまで依存[いぞん]を深[ふか]めるがごときは、リスク管理[かんり]の観点[かんてん]から看過[かんか]できません。\nA: 廃棄物[はいきぶつ]の処理[しょり]問題[もんだい]も未解決[みかいけつ]なまま推進[すいしん]すれば、次世代[じせだい]に負債[ふさい]を押[お]し付[つ]けるがごときだ。\nB: もっともです。福島[ふくしま]の事故[じこ]の教訓[きょうくん]を顧[かえり]みず、再稼働[さいかどう]を急[いそ]るがごときは、過[か]去[こ]の歴史[れきし]から学[まな]ばない姿勢[しせい]の表[あらわ]れです。\nA: 透明性[とうめいせい]ある安全[あんぜん]評価[ひょうか]のプロセスいかんによっては、慎重[しんちょう]な再稼働[さいかどう]も選択肢[せんたくし]になり得[え]る。\nB: どのみち、国民[こくみん]の合意[ごうい]形成[けいせい]を欠[か]いた政策[せいさく]は、いずれ破綻[はたん]を来[きた]すでしょう。",
    translation: "A: Toward achieving decarbonization, voices promoting restart of nuclear power generation are rising. B: Yes. However, we cannot discard concerns about nuclear plant safety. A: If renewables alone cannot cover electricity demand, dependence on nuclear is unavoidable. B: Deepening dependence even at the cost of safety cannot be overlooked from a risk management perspective. A: Promoting it with the waste disposal issue unresolved is tantamount to pushing debt onto the next generation. B: Quite right. Rushing restart without reflecting on the lessons of the Fukushima accident shows an attitude that doesn't learn from past history. A: Depending on the transparency of the safety assessment process, cautious restart could also become an option. B: In any case, policy lacking citizens' consensus formation will eventually break down.",
    questions: [
      {
        q: "What can't be discarded according to B?",
        choices: ["Renewable plans", "Concerns about nuclear plant safety", "Old reactors", "Public subsidies"],
        answerIndex: 1,
        explanation: "B says 原発[げんぱつ]の安全性[あんぜんせい]に対[たい]する懸念[けねん]を捨[す]て去[さ]るわけにはゆきません — concerns about safety cannot be discarded."
      },
      {
        q: "What does A say if renewables alone cannot cover demand?",
        choices: ["Reduce demand", "Dependence on nuclear is unavoidable", "Import more power", "Slow decarbonization"],
        answerIndex: 1,
        explanation: "A says 再生[さいせい]可能[かのう]エネルギーだけでは需要[じゅよう]を賄[まか]ない得[え]ないとすれば原発[げんぱつ]への依存[いぞん]はやむを得[え]まい — dependence on nuclear is unavoidable."
      },
      {
        q: "What does A say happens if promoted with unresolved waste issues?",
        choices: ["Faster decarbonization", "Pushing debt onto the next generation", "Lower electricity costs", "Safer reactors"],
        answerIndex: 1,
        explanation: "A says 廃棄物[はいきぶつ]の処理[しょり]問題[もんだい]も未解決[みかいけつ]なまま推進[すいしん]すれば次世代[じせだい]に負債[ふさい]を押[お]し付[つ]けるがごときだ — tantamount to pushing debt onto the next generation."
      },
      {
        q: "What does B say rushing restart without reflecting on Fukushima shows?",
        choices: ["Bold leadership", "An attitude that doesn't learn from past history", "Sound risk management", "Public consensus"],
        answerIndex: 1,
        explanation: "B says 福島[ふくしま]の事故[じこ]の教訓[きょうくん]を顧[かえり]みず再稼働[さいかどう]を急[いそ]るがごときは過[か]去[こ]の歴史[れきし]から学[まな]ばない姿勢[しせい]の表[あらわ]れ — it shows an attitude that doesn't learn from past history."
      },
      {
        q: "What could become an option depending on the transparency of safety assessment?",
        choices: ["Immediate shutdown", "Cautious restart", "Full privatization", "Unlimited expansion"],
        answerIndex: 1,
        explanation: "A says 透明性[とうめいせい]ある安全[あんぜん]評価[ひょうか]のプロセスいかんによっては慎重[しんちょう]な再稼働[さいかどう]も選択肢[せんたくし]になり得[え]る — cautious restart could become an option (いかんによっては)."
      }
    ],
    estMinutes: 7,
    tags: ["energy", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-99 — A deepfake democracy threat
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-99",
    title: "Deepfake Democracy Threat",
    level: "N1",
    context: "An electoral integrity researcher and a free-speech advocate discuss deepfake regulation",
    text: "A: ディープフェイク技術[ぎじゅつ]の進化[しんか]が、選挙[せんきょ]制度[せいど]への脅威[きょうい]となっていますね。\nB: ええ。偽[にせ]の動画[どうが]が拡散[かくさん]されれば、有権者[ゆうけんしゃ]の判断[はんだん]を歪[ゆが]めずにはおかない。\nA: 言論[げんろん]の自由[じゆう]を盾[たて]に取[と]って、規制[きせい]に反対[はんたい]する声[こえ]もあるが、民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]を揺[ゆる]がすがごときは看過[かんか]できません。\nB: もっともです。表現[ひょうげん]の自由[じゆう]と偽[にせ]情報[じょうほう]の規制[きせい]の境界[きょうかい]は、容易[ようい]に引[ひ]けません。\nA: プラットフォームの責任[せきにん]を法的[ほうてき]に明確[めいかく]にするのが先決[せんけつ]でしょう。\nB: 賛成[さんせい]します。技術[ぎじゅつ]的[てき]対抗[たいこう]手段[しゅだん]の開発[かいはつ]も並行[へいこう]して進[すす]める必要[ひつよう]があります。\nA: 偽[にせ]情報[じょうほう]の拡散[かくさん]速度[そくど]いかんにかかわらず、有権者[ゆうけんしゃ]のメディアリテラシー教育[きょういく]が急務[きゅうむ]です。\nB: 選挙[せんきょ]の公正[こうせい]を守[まも]る仕組[しく]みなくして、民主[みんしゅ]主義[しゅぎ]の未来[みらい]はありません。",
    translation: "A: The evolution of deepfake technology has become a threat to electoral systems. B: Yes. If fake videos spread, they will inevitably distort voters' judgment. A: There are voices opposing regulation, citing freedom of speech, but shaking the foundations of democracy cannot be overlooked. B: Quite right. The boundary between freedom of expression and regulation of false information is not easily drawn. A: Legally clarifying the responsibility of platforms should be the priority. B: I agree. Development of technical countermeasures must proceed in parallel. A: Regardless of the speed of false information spread, voter media literacy education is urgent. B: Without mechanisms to protect electoral fairness, there is no future for democracy.",
    questions: [
      {
        q: "What will inevitably happen if fake videos spread?",
        choices: ["Higher turnout", "Voter judgment will be distorted", "Lower costs", "Better regulation"],
        answerIndex: 1,
        explanation: "B says 偽[にせ]の動画[どうが]が拡散[かくさん]されれば有権者[ゆうけんしゃ]の判断[はんだん]を歪[ゆが]めずにはおかない — voter judgment will be distorted (ずにはおかない)."
      },
      {
        q: "What does A say cannot be overlooked?",
        choices: ["Comedy videos", "Shaking the foundations of democracy", "Lower turnout", "Satirical content"],
        answerIndex: 1,
        explanation: "A says 民主[みんしゅ]主義[しゅぎ]の根幹[こんかん]を揺[ゆる]がすがごときは看過[かんか]できません — shaking the foundations of democracy cannot be overlooked."
      },
      {
        q: "What is hard to draw according to B?",
        choices: ["Voter rolls", "The boundary between free expression and regulating false information", "District lines", "Party platforms"],
        answerIndex: 1,
        explanation: "B says 表現[ひょうげん]の自由[じゆう]と偽[にせ]情報[じょうほう]の規制[きせい]の境界[きょうかい]は容易[ようい]に引[ひ]けません — the boundary is not easily drawn."
      },
      {
        q: "What does A say should be the priority?",
        choices: ["Banning all videos", "Legally clarifying platform responsibility", "Censoring satire", "Slowing internet speeds"],
        answerIndex: 1,
        explanation: "A says プラットフォームの責任[せきにん]を法的[ほうてき]に明確[めいかく]にするのが先決[せんけつ] — legally clarifying platform responsibility is the priority."
      },
      {
        q: "What is urgent regardless of false information spread speed?",
        choices: ["Faster video uploads", "Voter media literacy education", "Lower platform fees", "More political ads"],
        answerIndex: 1,
        explanation: "A says 偽[にせ]情報[じょうほう]の拡散[かくさん]速度[そくど]いかんにかかわらず有権者[ゆうけんしゃ]のメディアリテラシー教育[きょういく]が急務[きゅうむ] — media literacy education is urgent regardless of spread speed."
      }
    ],
    estMinutes: 7,
    tags: ["democracy", "technology"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-100 — An AI alignment safety forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-100",
    title: "AI Alignment Safety Forum",
    level: "N1",
    context: "An AI safety researcher and an industry executive debate frontier AI governance",
    text: "A: 人工[じんこう]知能[ちのう]の急速[きゅうそく]な進化[しんか]に伴[ともなう]い、人類[じんるい]との価値[かち]観[かん]のすり合[あ]わせが課題[かだい]となっています。\nB: ええ。汎用[はんよう]人工[じんこう]知能[ちのう]が人間[にんげん]の制御[せいぎょ]を逸[いっ]するがごときは、人類[じんるい]の存続[そんぞく]に関[かん]わる脅威[きょうい]です。\nA: 技術[ぎじゅつ]の進化[しんか]を停滞[ていたい]させるがごときは、経済[けいざい]的[てき]競争[きょうそう]力[りょく]の喪失[そうしつ]を招[まね]くとの懸念[けねん]もあります。\nB: もっとも、安全性[あんぜんせい]の検証[けんしょう]を欠[か]いたまま開発[かいはつ]を競[きそ]うがごときは、破滅[はめつ]的[てき]な結果[けっか]を招[まね]かずにはおかない。\nA: 国際[こくさい]的[てき]なガバナンスの枠組[わくぐ]みを整備[せいび]しない限[かぎ]り、競争[きょうそう]の激化[げきか]は止[と]められまい。\nB: 全[まった]くです。各国[かっこく]が自己[じこ]の利益[りえき]のみを優先[ゆうせん]するが最後[さいご]、人類[じんるい]全体[ぜんたい]の悲劇[ひげき]に直結[ちょっけつ]しかねない。\nA: 安全性[あんぜんせい]の研究[けんきゅう]への投資[とうし]額[がく]いかんによっては、技術[ぎじゅつ]開発[かいはつ]と規制[きせい]の均衡[きんこう]も保[たも]ち得[え]る。\nB: 人類[じんるい]の英知[えいち]を結集[けっしゅう]し、協調[きょうちょう]的[てき]な国際[こくさい]秩序[ちつじょ]を構築[こうちく]するしか道[みち]はありません。",
    translation: "A: As artificial intelligence rapidly evolves, aligning its values with humanity has become a challenge. B: Yes. General AI escaping human control is a threat to humanity's survival. A: There is also concern that stagnating technological evolution would cause loss of economic competitiveness. B: However, racing development without safety verification will inevitably invite catastrophic results. A: Without building an international governance framework, the intensifying competition cannot be stopped. B: Absolutely. Once each country prioritizes only its own interests, it could directly lead to a tragedy for all humanity. A: Depending on the amount of investment in safety research, the balance between technological development and regulation can also be maintained. B: We have no choice but to gather humanity's wisdom and build a cooperative international order.",
    questions: [
      {
        q: "What does B say is a threat to human survival?",
        choices: ["Slower AI progress", "General AI escaping human control", "Lower investment", "Tighter regulation"],
        answerIndex: 1,
        explanation: "B says 汎用[はんよう]人工[じんこう]知能[ちのう]が人間[にんげん]の制御[せいぎょ]を逸[いっ]するがごときは人類[じんるい]の存続[そんぞく]に関[かん]わる脅威[きょうい] — AGI escaping human control is a survival threat."
      },
      {
        q: "What concern does A mention about stagnating technological evolution?",
        choices: ["Loss of safety", "Loss of economic competitiveness", "Greater regulation", "Slower research"],
        answerIndex: 1,
        explanation: "A says 技術[ぎじゅつ]の進化[しんか]を停滞[ていたい]させるがごときは経済[けいざい]的[てき]競争[きょうそう]力[りょく]の喪失[そうしつ]を招[まね]く — it would cause loss of economic competitiveness."
      },
      {
        q: "What will inevitably happen if development races without safety verification?",
        choices: ["Faster innovation", "Catastrophic results", "Lower costs", "Better alignment"],
        answerIndex: 1,
        explanation: "B says 安全性[あんぜんせい]の検証[けんしょう]を欠[か]いたまま開発[かいはつ]を競[きそ]うがごときは破滅[はめつ]的[てき]な結果[けっか]を招[まね]かずにはおかない — catastrophic results (ずにはおかない)."
      },
      {
        q: "What happens once each country prioritizes only its own interests?",
        choices: ["Better cooperation", "It could directly lead to a tragedy for all humanity", "Faster alignment", "Cheaper AI"],
        answerIndex: 1,
        explanation: "B says 各国[かっこく]が自己[じこ]の利益[りえき]のみを優先[ゆうせん]するが最後人類[じんるい]全体[ぜんたい]の悲劇[ひげき]に直結[ちょっけつ]しかねない — it could directly lead to a tragedy (が最後)."
      },
      {
        q: "What can be maintained depending on investment in safety research?",
        choices: ["Public approval", "Balance between development and regulation", "Faster release", "Lower wages"],
        answerIndex: 1,
        explanation: "A says 安全性[あんぜんせい]の研究[けんきゅう]への投資[とうし]額[がく]いかんによっては技術[ぎじゅつ]開発[かいはつ]と規制[きせい]の均衡[きんこう]も保[たも]ち得[え]る — the balance can be maintained (いかんによっては)."
      }
    ],
    estMinutes: 7,
    tags: ["ai", "safety"]
  }
];
