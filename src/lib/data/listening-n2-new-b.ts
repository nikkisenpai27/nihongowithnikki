import type { ListeningData } from "@/lib/types";

// N2 listening exercises set B (new batch).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N2 grammar targets: 〜に基づいて, 〜に伴う, 〜に過ぎない, 〜次第(で),
// 〜限り(では), 〜に先立って, 〜上で, 〜どころか, 〜に違いない, 〜かねない,
// 〜つつある, 〜に際して, 〜を通じて, 〜に応じて, 〜まい, 〜上は, etc.

export const listeningN2NewB: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n2n-21 — A union negotiation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-21",
    title: "Union Negotiation",
    level: "N2",
    context: "A union representative and a manager negotiating wages",
    text: "A: 労働組合[ろうどうくみあい]の代表[だいひょう]として、賃金[ちんぎん]の引[ひ]き上[あ]げを要求[ようきゅう]したいのですが。\nB: 経営[けいえい]側[がわ]としても、誠意[せいい]を持[も]って対応[たいおう]する所存[しょぞん]です。\nA: 現行[げんこう]のベースアップは物価[ぶっか]高騰[こうとう]に追[お]いつくに過[す]ぎません。\nB: 会社[かいしゃ]の業績[ぎょうせき]に基[もと]づいて判断[はんだん]せざるを得[え]ません。\nA: 労使[ろうし]協議[きょうぎ]の結果[けっか]次第[しだい]では、ストライキも辞[じ]さない構[かま]えです。\nB: それだけは避[さ]けたいです。対立[たいりつ]を深[ふか]めるどころか、妥協[だきょう]点[てん]を探[さが]しましょう。\nA: 来週[らいしゅう]の団体[だんたい]交渉[こうしょう]に先立[さきだ]って、試算[しさん]資料[しりょう]を提出[ていしゅつ]してください。\nB: 承知[しょうち]いたしました。数字[すうじ]を出[だ]した上[うえ]で、改[あらた]めて話[はな]し合[あ]いましょう。\nA: 労働[ろうどう]者[しゃ]の生活[せいかつ]を守[まも]る限[かぎ]り、譲[ゆず]れない線[せん]があります。\nB: 経営[けいえい]陣[じん]も全[すべ]てを投[な]げ出[だ]すわけにはいきません。",
    translation: "A: As a union representative, I'd like to demand a wage increase. B: As management, we intend to respond in good faith. A: The current base-up merely keeps up with soaring prices. B: We have no choice but to judge based on the company's performance. A: Depending on the result of labor-management talks, we're prepared to strike. B: I want to avoid that at all costs. Rather than deepening the conflict, let's find a compromise. A: Then please submit trial-calculation materials ahead of next week's collective bargaining. B: Understood. After presenting the figures, let's discuss again. A: As long as we protect workers' livelihoods, there's a line we can't cross. B: Management can't throw everything away either.",
    questions: [
      {
        q: "What does A demand?",
        choices: ["A shorter work week", "A wage increase", "Better benefits", "Job security"],
        answerIndex: 1,
        explanation: "A says 賃金[ちんぎん]の引[ひ]き上[あ]げを要求[ようきゅう]したい — demands a wage increase."
      },
      {
        q: "How does A characterize the current base-up?",
        choices: ["It's overly generous", "It only keeps up with prices", "It exceeds inflation", "It's unrelated to performance"],
        answerIndex: 1,
        explanation: "A says 現行[げんこう]のベースアップは物価[ぶっか]高騰[こうとう]に追[お]いつくに過[す]ぎません — only keeps up with price increases."
      },
      {
        q: "What does B say management must do?",
        choices: ["Approve the demand immediately", "Judge based on company performance", "Ignore the union's claims", "Borrow money to fund raises"],
        answerIndex: 1,
        explanation: "B says 業績[ぎょうせき]に基[もと]づいて判断[はんだん]せざるを得[え]ません — must judge based on performance."
      },
      {
        q: "What does A ask B to submit before next week's talks?",
        choices: ["Trial-calculation materials", "A formal apology", "Last year's tax return", "A strike notice"],
        answerIndex: 0,
        explanation: "A asks 試算[しさん]資料[しりょう]を提出[ていしゅつ]してください ahead of 団体[だんたい]交渉[こうしょう]."
      }
    ],
    estMinutes: 5,
    tags: ["labor", "negotiation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-22 — Discussing a privacy policy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-22",
    title: "Privacy Policy Discussion",
    level: "N2",
    context: "A privacy officer and an executive reviewing a new privacy policy",
    text: "A: 新[あたら]しいプライバシーポリシーについて協議[きょうぎ]したいのですが。\nB: ええ。法改正[ほうかいせい]に伴[ともな]う変更[へんこう]が必[かなら]ず必要[ひつよう]ですね。\nA: 個人[こじん]情報[じょうほう]の取[と]り扱[あつか]いを見直[みなお]す上[うえ]で、同意[どうい]の取得[しゅとく]方法[ほうほう]が課題[かだい]です。\nB: ユーザーに分[わ]かりやすく示[しめ]さないと、訴訟[そしょう]に発展[はってん]しかねません。\nA: 現在[げんざい]、法務[ほうむ]チームと連携[れんけい]しつつあるところです。\nB: 良[よ]いですね。社内[しゃない]規定[きてい]に基[もと]づいた形[かたち]に仕上[しあ]げてください。\nA: 第三者[だいさんしゃ]への提供[ていきょう]を明記[めいき]するかどうか迷[まよ]っています。\nB: 透明性[とうめいせい]を持[も]たせる限[かぎ]り、記載[きさい]すべきに違[ちが]いないです。\nA: 承知[しょうち]いたしました。最終[さいしゅう]案[あん]が固[かた]まり次第[しだい]、ご持参[じさん]します。\nB: ありがとうございます。公布[こうふ]に先立[さきだ]って、私[わたし]にも最終[さいしゅう]確認[かくにん]を。",
    translation: "A: I'd like to discuss the new privacy policy. B: Yes. Changes accompanying the legal revision are definitely needed. A: In reviewing how we handle personal data, the method of obtaining consent is an issue. B: If we don't show it clearly to users, it could develop into a lawsuit. A: We're currently coordinating with the legal team. B: Good. Please finalize it in a form based on internal regulations. A: I'm torn on whether to explicitly state third-party provision. B: As long as we maintain transparency, it should definitely be stated. A: Understood. As soon as the final draft is set, I'll bring it in. B: Thank you. Before publication, give me a final check too.",
    questions: [
      {
        q: "Why are changes to the privacy policy needed?",
        choices: ["A new product launch", "A legal revision", "User complaints", "A merger"],
        answerIndex: 1,
        explanation: "B says 法改正[ほうかいせい]に伴[ともな]う変更[へんこう] — changes accompanying the legal revision."
      },
      {
        q: "What could happen if the policy isn't clear?",
        choices: ["Users will leave", "Sales will drop", "A lawsuit could develop", "Regulators will investigate"],
        answerIndex: 2,
        explanation: "B says 訴訟[そしょう]に発展[はってん]しかねません — could develop into a lawsuit."
      },
      {
        q: "What is A currently doing?",
        choices: ["Coordinating with the legal team", "Surveying users", "Drafting alone", "Hiring a consultant"],
        answerIndex: 0,
        explanation: "A says 法務[ほうむ]チームと連携[れんけい]しつつある — currently coordinating with the legal team."
      },
      {
        q: "When will A bring in the final draft?",
        choices: ["Within a week", "After legal review", "As soon as it's finalized", "Before next month"],
        answerIndex: 2,
        explanation: "A says 最終[さいしゅう]案[あん]が固[かた]まり次第[しだい]、ご持参[じさん]します — as soon as the final draft is set."
      }
    ],
    estMinutes: 5,
    tags: ["privacy", "legal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-23 — At the embassy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-23",
    title: "At the Embassy",
    level: "N2",
    context: "A visa applicant and an embassy staff member",
    text: "A: ビザの申請[しんせい]に際[さい]して、確認[かくにん]したいことがあります。\nB: はい。必要[ひつよう]書類[しょるい]はすべてご用意[ようい]でしょうか。\nA: はい。ただ、私[わたし]の調[しら]べた限[かぎ]りでは、滞在[たいざい]目的[もくてき]の証明[しょうめい]が不十分[ふじゅうぶん]かもしれません。\nB: 招聘[しょうへい]状[じょう]に基[もと]づいて審査[しんさ]を進[すす]めますので、原本[げんぽん]をご提示[ていじ]ください。\nA: コピーでは不可[ふか]でしょうか。\nB: 原則[げんそく]として原本[げんぽん]に限[かぎ]ります。コピーは参考[さんこう]に過[す]ぎません。\nA: 分[わ]かりました。本国[ほんこく]から取[と]り寄[よ]せるには二週間[にしゅうかん]ほどかかります。\nB: 緊急[きんきゅう]の場合[ばあい]は、特例[とくれい]措置[そち]を取[と]ることも可能[かのう]です。\nA: では、その手続[てつづ]きについて教[おし]えていただけますか。\nB: 申請書[しんせいしょ]に理由[りゆう]を明記[めいき]の上[うえ]、窓口[まどぐち]でご相談[そうだん]ください。",
    translation: "A: When applying for the visa, I have something to confirm. B: Yes. Do you have all the required documents ready? A: Yes. But as far as I've researched, the proof of stay purpose may be insufficient. B: We proceed with screening based on the letter of invitation, so please present the original. A: Is a copy unacceptable? B: As a rule, only the original is accepted. A copy is merely a reference. A: Understood. It takes about two weeks to have it sent from my home country. B: In urgent cases, special measures can be taken. A: Then could you tell me about that procedure? B: After stating the reason on the application form, please consult at the counter.",
    questions: [
      {
        q: "When does A want to confirm something?",
        choices: ["After the visa is issued", "When applying for the visa", "Before booking a flight", "After arriving abroad"],
        answerIndex: 1,
        explanation: "A says ビザの申請[しんせい]に際[さい]して — when applying for the visa."
      },
      {
        q: "What does A worry may be insufficient?",
        choices: ["Financial proof", "The proof of stay purpose", "The passport validity", "The photo quality"],
        answerIndex: 1,
        explanation: "A says 滞在[たいざい]目的[もくてき]の証明[しょうめい]が不十分[ふじゅうぶん] — proof of stay purpose may be insufficient."
      },
      {
        q: "What is required for screening?",
        choices: ["The original invitation letter", "A copy of the passport", "A bank statement", "A hotel reservation"],
        answerIndex: 0,
        explanation: "B says 招聘[しょうへい]状[じょう]に基[もと]づいて審査[しんさ]を進[すす]めます — screening based on the invitation letter, original required."
      },
      {
        q: "What can be done in urgent cases?",
        choices: ["The visa is granted automatically", "Special measures can be taken", "The fee is waived", "The interview is skipped"],
        answerIndex: 1,
        explanation: "B says 緊急[きんきゅう]の場合[ばあい]は、特例[とくれい]措置[そち]を取[と]ることも可能[かのう] — special measures in urgent cases."
      }
    ],
    estMinutes: 4,
    tags: ["embassy", "visa"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-24 — A board meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-24",
    title: "Board Meeting",
    level: "N2",
    context: "A CEO and a director discussing overseas expansion",
    text: "A: 取締役会[とりしまりやくかい]に先立[さきだ]って、新[あたら]しい事業[じぎょう]計画[けいかく]を提示[ていじ]します。\nB: ええ。前期[ぜんき]の決算[けっさん]に基[もと]づいて判断[はんだん]したいと思[おも]います。\nA: 海外[かいがい]市場[しじょう]への進出[しんしゅつ]は避[さ]けられない方向[ほうこう]です。\nB: とは言[い]え、リスクを伴[ともな]う投資[とうし]どころか、慎重[しんちょう]に検討[けんとう]すべきです。\nA: もちろんです。現地[げんち]法人[ほうじん]の設立[せつりつ]に先立[さきだ]って、現地[げんち]調査[ちょうさ]を実施[じっし]します。\nB: 良[よ]い手順[てじゅん]です。ただ、株主[かぶぬし]の理解[りかい]が得[え]られない限[かぎ]り、承認[しょうにん]は難[むずか]しいです。\nA: 説明[せつめい]責任[せきにん]を果[は]たした上[うえ]では、必[かなら]ず賛同[さんどう]が得[え]られるに違[ちが]いないです。\nB: そう願[ねが]います。決定[けってい]次第[しだい]、対外[たいがい]発表[はっぴょう]の準備[じゅんび]を進[すす]めましょう。\nA: 来月[らいげつ]の定例[ていれい]会議[かいぎ]までに、具体的[ぐたいてき]な案[あん]をまとめます。\nB: 期待[きたい]しています。失敗[しっぱい]は許[ゆる]されませんので。",
    translation: "A: Before the board meeting, I'll present a new business plan. B: Yes. I'd like to judge based on last term's financial results. A: Expanding into overseas markets is an unavoidable direction. B: That said, rather than a risk-bearing investment, we should consider it carefully. A: Of course. Ahead of establishing a local subsidiary, we'll conduct a local survey. B: Good procedure. However, as long as we can't get shareholder understanding, approval is difficult. A: After fulfilling our accountability, we'll surely get agreement. B: I hope so. As soon as it's decided, let's prepare the external announcement. A: By next month's regular meeting, I'll put together a concrete plan. B: I look forward to it. Failure isn't forgiven, you know.",
    questions: [
      {
        q: "What does A present before the board meeting?",
        choices: ["The financial results", "A new business plan", "A personnel change", "A merger proposal"],
        answerIndex: 1,
        explanation: "A says 新[あたら]しい事業[じぎょう]計画[けいかく]を提示[ていじ] — presents a new business plan."
      },
      {
        q: "What is the unavoidable direction?",
        choices: ["Cutting costs", "Entering overseas markets", "Restructuring the company", "Closing domestic branches"],
        answerIndex: 1,
        explanation: "A says 海外[かいがい]市場[しじょう]への進出[しんしゅつ]は避[さ]けられない — entering overseas markets is unavoidable."
      },
      {
        q: "What will happen before establishing a local subsidiary?",
        choices: ["A fundraising round", "A local survey", "A PR campaign", "A management reshuffle"],
        answerIndex: 1,
        explanation: "A says 設立[せつりつ]に先立[さきだ]って、現地[げんち]調査[ちょうさ]を実施[じっし] — local survey before establishment."
      },
      {
        q: "When will A present a concrete plan?",
        choices: ["By next week", "By next month's regular meeting", "By the next fiscal year", "Within this quarter"],
        answerIndex: 1,
        explanation: "A says 来月[らいげつ]の定例[ていれい]会議[かいぎ]までに — by next month's regular meeting."
      }
    ],
    estMinutes: 5,
    tags: ["business", "board"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-25 — Discussing a trade deal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-25",
    title: "Trade Deal Discussion",
    level: "N2",
    context: "A trade minister and a negotiator discussing a free-trade agreement",
    text: "A: 新[あたら]しい自由貿易[じゆうぼうえき]協定[きょうてい]について、意見[いけん]を伺[うかが]いたいのですが。\nB: 現行[げんこう]の関税[かんぜい]制度[せいど]に基[もと]づくと、輸出[ゆしゅつ]業者[ぎょうしゃ]には厳[きび]しい状況[じょうきょう]です。\nA: 交渉[こうしょう]を通[つう]じて、関税[かんぜい]の引[ひ]き下[さ]げを目指[めざ]すつもりです。\nB: 相手国[あいてこく]の対応[たいおう]次第[しだい]では、大幅[おおはば]な譲歩[じょうほ]も余儀[よぎ]なくされるかもしれません。\nA: 農業[のうぎょう]分野[ぶんや]の保護[ほご]に固執[こしつ]する限[かぎ]り、合意[ごうい]は困難[こんなん]です。\nB: その通[とお]りです。国内[こくない]産業[さんぎょう]の振興[しんこう]に応[おう]じて、段階[だんかい]的[てき]な開放[かいほう]を提案[ていあん]しましょう。\nA: 賢明[けんめい]な判断[はんだん]に違[ちが]いない。議会[ぎかい]の承認[しょうにん]も必要[ひつよう]です。\nB: 承知[しょうち]いたしました。文書[ぶんしょ]を準備[じゅんび]した上[うえ]で、公表[こうひょう]に先立[さきだ]って共有[きょうゆう]します。\nA: お願[ねが]いします。国民[こくみん]への説明[せつめい]も怠[おこた]らないように。\nB: かしこまりました。透明性[とうめいせい]を保[たも]ちつつ進[すす]めます。",
    translation: "A: I'd like to hear your opinion about the new free-trade agreement. B: Based on the current tariff system, exporters face a tough situation. A: I intend to lower tariffs through negotiation. B: Depending on the counterpart's response, large concessions may be forced. A: As long as we cling to protecting the agricultural sector, agreement is difficult. B: That's right. Let's propose phased opening in line with domestic-industry promotion. A: That's surely a wise judgment. Parliamentary approval is also needed. B: Understood. After preparing the documents, I'll share them before publication. A: Please. Don't neglect explaining to the public. B: Understood. I'll proceed while maintaining transparency.",
    questions: [
      {
        q: "What is the situation for exporters?",
        choices: ["Improving", "Tough", "Stable", "Unclear"],
        answerIndex: 1,
        explanation: "B says 輸出[ゆしゅつ]業者[ぎょうしゃ]には厳[きび]しい状況[じょうきょう] — tough situation for exporters."
      },
      {
        q: "What does A intend to do through negotiation?",
        choices: ["Raise tariffs", "Lower tariffs", "Set quotas", "Ban imports"],
        answerIndex: 1,
        explanation: "A says 関税[かんぜい]の引[ひ]き下[さ]げを目指[めざ]す — aims to lower tariffs."
      },
      {
        q: "What makes agreement difficult?",
        choices: ["Clinging to agricultural protection", "Lack of funding", "Diplomatic tensions", "Public opposition"],
        answerIndex: 0,
        explanation: "A says 農業[のうぎょう]分野[ぶんや]の保護[ほご]に固執[こしつ]する限[かぎ]り、合意[ごうい]は困難[こんなん]."
      },
      {
        q: "What else is needed besides the counterpart's response?",
        choices: ["Parliamentary approval", "A public referendum", "Industry consent", "Court authorization"],
        answerIndex: 0,
        explanation: "A says 議会[ぎかい]の承認[しょうにん]も必要[ひつよう] — parliamentary approval is also needed."
      }
    ],
    estMinutes: 5,
    tags: ["trade", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-26 — At the labor bureau
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-26",
    title: "At the Labor Bureau",
    level: "N2",
    context: "A worker and a labor officer consulting about unpaid overtime",
    text: "A: 未払[みはら]い残業代[ざんぎょうだい]について、相談[そうだん]に乗[の]っていただきたいのですが。\nB: はい。労働基準法[ろうどうきじゅんほう]に基[もと]づいて対応[たいおう]いたします。\nA: 会社[かいしゃ]は契約[けいやく]外[がい]の仕事[しごと]だと言[い]って、支払[しはら]いを拒[こば]んでいます。\nB: 事実[じじつ]関係[かんけい]を確認[かくにん]した上[うえ]で、勧告[かんこく]を出[だ]すことも可能[かのう]です。\nA: ただ、会社[かいしゃ]に訴[うった]えられたら困[こま]ります。\nB: 法[ほう]に基[もと]づいた申立[もうしたて]に過[す]ぎませんので、不利[ふり]な扱[あつか]いを受[う]けることはありません。\nA: 証拠[しょうこ]として、タイムカードの記録[きろく]を取[と]っておくべきでしたか。\nB: ええ。証拠[しょうこ]がある限[かぎ]り、会社[かいしゃ]側[がわ]も否認[ひにん]できません。\nA: 同僚[どうりょう]の証言[しょうげん]も参考[さんこう]になりますか。\nB: もちろんです。申立[もうしたて]書[しょ]を提出[ていしゅつ]する際[さい]に、添付[てんぷ]してください。",
    translation: "A: I'd like to consult about unpaid overtime pay. B: Yes. We'll respond based on the Labor Standards Act. A: The company refuses to pay, saying it's work outside the contract. B: After confirming the facts, we can also issue a recommendation. A: But I'd be troubled if the company sued me. B: It's merely a legally-based filing, so you won't be treated disadvantageously. A: Should I have kept the time-card records as evidence? B: Yes. As long as there's evidence, the company side can't deny it. A: Will my colleague's testimony also be useful? B: Of course. Please attach it when submitting the complaint form.",
    questions: [
      {
        q: "What is the issue?",
        choices: ["Unpaid overtime", "Wrongful termination", "Workplace harassment", "Contract violation"],
        answerIndex: 0,
        explanation: "A mentions 未払[みはら]い残業代[ざんぎょうだい] — unpaid overtime pay."
      },
      {
        q: "On what basis does B respond?",
        choices: ["The employment contract", "The Labor Standards Act", "Company regulations", "Past precedents"],
        answerIndex: 1,
        explanation: "B says 労働基準法[ろうどうきじゅんほう]に基[もと]づいて — based on the Labor Standards Act."
      },
      {
        q: "Why does the company refuse to pay?",
        choices: ["The work is outside the contract", "The employee was late", "The work was poor quality", "The pay period is over"],
        answerIndex: 0,
        explanation: "A says 契約[けいやく]外[がい]の仕事[しごと]だと言[い]って — saying the work is outside the contract."
      },
      {
        q: "What can the bureau do after confirming facts?",
        choices: ["File criminal charges", "Issue a recommendation", "Force the company to pay", "Close the case immediately"],
        answerIndex: 1,
        explanation: "B says 勧告[かんこく]を出[だ]すことも可能[かのう] — can issue a recommendation."
      }
    ],
    estMinutes: 5,
    tags: ["labor", "legal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-27 — A scientific debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-27",
    title: "Scientific Debate",
    level: "N2",
    context: "A researcher and a critic discussing a climate-model prediction",
    text: "A: 新[あたら]しい気候[きこう]モデルの予測[よそく]結果[けっか]を発表[はっぴょう]しました。\nB: 興味[きょうみ]深[ぶか]いですが、サンプル数[すう]が少[すく]ないわりには、断言[だんげん]が多[おお]すぎます。\nA: 確[たし]かに、現段階[げんだんかい]では推測[すいそく]に過[す]ぎません。しかし、傾向[けいこう]は明確[めいかく]です。\nB: 傾向[けいこう]どころか、因果[いんが]関係[かんけい]まで証明[しょうめい]したと言[い]うのは飛躍[ひやく]があります。\nA: ご指摘[してき]の通[とお]りです。検証[けんしょう]を重[かさ]ねる上[うえ]で、修正[しゅうせい]していくつもりです。\nB: データの公開[こうかい]に先立[さきだ]って、査読[さどく]を受[う]けるべきでしたね。\nA: ええ。次[つぎ]回[かい]は必[かなら]ずそうします。早期[そうき]発表[はっぴょう]を急[いそ]いだ結果[けっか]です。\nB: 科学[かがく]は信用[しんよう]を失[うしな]うどころか、積[つ]み上[あ]げるものです。慎重[しんちょう]に。\nA: 反省[はんせい]しています。今回[こんかい]の指摘[してき]に基[もと]づいて、論文[ろんぶん]を書[か]き直[なお]します。\nB: 期待[きたい]しています。正確[せいかく]なデータ次第[しだい]で、説得力[せっとくりょく]も増[ま]すでしょう。",
    translation: "A: I've announced the prediction results of the new climate model. B: It's interesting, but for such a small sample size, there are too many assertions. A: Indeed, at this stage it's merely speculation. However, the trend is clear. B: Rather than a trend, claiming you've proven causation is a leap. A: You're right. I intend to revise as I accumulate verifications. B: You should have undergone peer review before publishing the data. A: Yes. I'll definitely do so next time. It was the result of rushing an early announcement. B: Science is something you build up, not lose credibility. Be careful. A: I'm reflecting. Based on your point, I'll rewrite the paper. B: I look forward to it. Depending on accurate data, persuasiveness will increase.",
    questions: [
      {
        q: "What did A announce?",
        choices: ["A new climate model's predictions", "A new theory of gravity", "A medical breakthrough", "An economic forecast"],
        answerIndex: 0,
        explanation: "A announces 気候[きこう]モデルの予測[よそく]結果[けっか] — climate model prediction results."
      },
      {
        q: "What does B criticize?",
        choices: ["The conclusion is wrong", "Too many assertions for a small sample", "The data is fabricated", "The methodology is outdated"],
        answerIndex: 1,
        explanation: "B says サンプル数[すう]が少[すく]ないわりには、断言[だんげん]が多[おお]すぎる — too many assertions for a small sample."
      },
      {
        q: "What did A skip?",
        choices: ["Data collection", "Peer review", "Statistical analysis", "Lab verification"],
        answerIndex: 1,
        explanation: "B says 査読[さどく]を受[う]けるべきでした — should have undergone peer review."
      },
      {
        q: "What will A do based on B's criticism?",
        choices: ["Withdraw the announcement", "Rewrite the paper", "Conduct a new experiment", "Apologize publicly"],
        answerIndex: 1,
        explanation: "A says 論文[ろんぶん]を書[か]き直[なお]します — will rewrite the paper."
      }
    ],
    estMinutes: 5,
    tags: ["science", "debate"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-28 — Discussing a constitutional issue
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-28",
    title: "Constitutional Issue Discussion",
    level: "N2",
    context: "A legal scholar and a journalist discussing Article 9",
    text: "A: 憲法[けんぽう]第[だい]九[きゅう]条[じょう]の解釈[かいしゃく]について、論議[ろんぎ]を始[はじ]めましょう。\nB: 学者[がくしゃ]の間[あいだ]でも意見[いけん]が分[わ]かれているようですね。\nA: 現行[げんこう]の解釈[かいしゃく]は歴史[れきし]的[てき]経緯[けいい]に基[もと]づいています。\nB: しかし、時代[じだい]の変化[へんか]に伴[ともな]う見直[みなお]しも必要[ひつよう]ではないでしょうか。\nA: 改憲[かいけん]を急[いそ]ぐどころか、国民[こくみん]的[てき]合意[ごうい]形成[けいせい]が先[さき]です。\nB: 確[たし]かに、議論[ぎろん]を尽[つ]くした上[うえ]でなければ、賛成[さんせい]も反対[はんたい]もあり得[え]ません。\nA: 国民[こくみん]の理解[りかい]が深[ふか]まる限[かぎ]りは、急激[きゅうげき]な変更[へんこう]は避[さ]けるべきです。\nB: 政治家[せいじか]が主導[しゅどう]するまいという姿勢[しせい]も示[しめ]すべきですね。\nA: 法律[ほうりつ]の専門[せんもん]家[か]として、慎重[しんちょう]な判断[はんだん]を求[もと]めたいです。\nB: 分[わ]かりました。記事[きじ]にする際[さい]には、バランスを保[たも]ちます。",
    translation: "A: Let's begin discussion on the interpretation of Article 9 of the Constitution. B: It seems opinions differ even among scholars. A: The current interpretation is based on historical background. B: However, isn't a review accompanying the change of times also necessary? A: Rather than rushing constitutional revision, forming national consensus comes first. B: Indeed, without exhausting debate, neither agreement nor opposition is possible. A: As long as the public's understanding deepens, abrupt changes should be avoided. B: Politicians should also show a stance of not taking the lead. A: As a legal expert, I'd like to call for careful judgment. B: Understood. When writing the article, I'll maintain balance.",
    questions: [
      {
        q: "What is the topic of discussion?",
        choices: ["Article 9 interpretation", "Constitutional Article 1", "The amendment process", "The Preamble"],
        answerIndex: 0,
        explanation: "A says 憲法[けんぽう]第[だい]九[きゅう]条[じょう]の解釈[かいしゃく] — interpretation of Article 9."
      },
      {
        q: "What does A say comes first?",
        choices: ["Constitutional revision", "Forming national consensus", "International discussion", "Parliamentary debate"],
        answerIndex: 1,
        explanation: "A says 国民[こくみん]的[てき]合意[ごうい]形成[けいせい]が先[さき] — forming national consensus comes first."
      },
      {
        q: "What does A want to avoid?",
        choices: ["Public debate", "Abrupt changes", "Scholar opinions", "Historical context"],
        answerIndex: 1,
        explanation: "A says 急激[きゅうげき]な変更[へんこう]は避[さ]けるべき — abrupt changes should be avoided."
      },
      {
        q: "What does B promise in the article?",
        choices: ["To advocate a position", "To maintain balance", "To delay publication", "To focus only on A's views"],
        answerIndex: 1,
        explanation: "B says バランスを保[たも]ちます — will maintain balance."
      }
    ],
    estMinutes: 6,
    tags: ["law", "politics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-29 — A journalistic interview
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-29",
    title: "Journalistic Interview",
    level: "N2",
    context: "A journalist interviewing an author about a new work",
    text: "A: 本日の取材[しゅざい]に応[おう]じていただき、ありがとうございます。\nB: こちらこそ。新[あたら]しい作品[さくひん]について語[かた]る機会[きかい]をいただけて嬉[うれ]しいです。\nA: 執筆[しっぴつ]に先立[さきだ]って、どのような準備[じゅんび]をなさるのですか。\nB: 現地[げんち]を訪[たず]ねるたびに、新[あたら]しい発見[はっけん]があります。\nA: 前作[ぜんさく]は読者[どくしゃ]の反響[はんきょう]が大[おお]きかったですね。\nB: ええ。思[おも]いがけない反応[はんのう]の多[おお]さに驚[おどろ]くと同時[どうじ]に、励[はげ]みになりました。\nA: 執筆[しっぴつ]活動[かつどう]を続[つづ]ける中[なか]で、変[か]わった部分[ぶぶん]はありますか。\nB: 年齢[ねんれい]を重[かさ]ねるに伴[ともな]って、視点[してん]が少[すこ]しずつ変[か]わりつつあります。\nA: 次[つぎ]回作[かいさく]の構想[こうそう]はもうおありですか。\nB: まだ漠然[ばくぜん]としていますが、歴史[れきし]物語[ものがたり]に挑戦[ちょうせん]するに違[ちが]いないですね。",
    translation: "A: Thank you for agreeing to today's interview. B: Likewise. I'm glad to have an opportunity to talk about the new work. A: What kind of preparation do you do before writing? B: Every time I visit the site, I make new discoveries. A: The previous work had a big response from readers, didn't it? B: Yes. I was surprised at the many unexpected reactions, but it also encouraged me. A: Are there any changes as you continue your writing activities? B: As I age, my viewpoint is gradually changing. A: Do you already have a concept for the next work? B: It's still vague, but I'll surely challenge a historical narrative.",
    questions: [
      {
        q: "What is the interview about?",
        choices: ["The author's previous work", "The author's new work", "The author's childhood", "The author's awards"],
        answerIndex: 1,
        explanation: "B says 新[あたら]しい作品[さくひん]について語[かた]る — about the new work."
      },
      {
        q: "When does B make new discoveries?",
        choices: ["Every time visiting the site", "While writing", "When discussing with editors", "During book tours"],
        answerIndex: 0,
        explanation: "B says 現地[げんち]を訪[たず]ねるたびに、新[あたら]しい発見[はっけん]がある — every time visiting the site."
      },
      {
        q: "How is B's viewpoint changing?",
        choices: ["Suddenly", "Gradually", "Drastically", "Temporarily"],
        answerIndex: 1,
        explanation: "B says 視点[してん]が少[すこ]しずつ変[か]わりつつある — viewpoint is gradually changing."
      },
      {
        q: "What will B surely challenge in the next work?",
        choices: ["A historical narrative", "A science-fiction story", "A memoir", "A romance novel"],
        answerIndex: 0,
        explanation: "B says 歴史[れきし]物語[ものがたり]に挑戦[ちょうせん]するに違[ちが]いない — surely challenge a historical narrative."
      }
    ],
    estMinutes: 4,
    tags: ["interview", "literature"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-30 — At the copyright office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-30",
    title: "At the Copyright Office",
    level: "N2",
    context: "A creator and an officer discussing copyright registration",
    text: "A: 著作権[ちょさくけん]の登録[とうろく]に際[さい]して、確認[かくにん]したいことがあります。\nB: はい。作品[さくひん]の種類[しゅるい]と創作[そうさく]日[び]を教[おし]えてください。\nA: 小説[しょうせつ]で、創作[そうさく]は昨年[さくねん]の三[さん]月[がつ]です。\nB: 著作権[ちょさくけん]法[ほう]に基[もと]づいて、自動的[じどうてき]に発生[はっせい]していますが、登録[とうろく]により証明[しょうめい]力[りょく]が増[ま]します。\nA: 他[た]の人[ひと]が類似[るいじ]作品[さくひん]を出[だ]した場合[ばあい]、対処[たいしょ]できますか。\nB: 私[わたし]の確認[かくにん]した限[かぎ]りでは、先[さき]に登録[とうろく]した方[ほう]が優先[ゆうせん]されます。\nA: 第三者[だいさんしゃ]への権利[けんり]譲渡[じょうと]も可能[かのう]ですか。\nB: ええ。譲渡[じょうと]契約[けいやく]書[しょ]を提出[ていしゅつ]次第[しだい]、登録[とうろく]簿[ぼ]に反映[はんえい]されます。\nA: 分[わ]かりました。必要[ひつよう]書類[しょるい]は窓口[まどぐち]でも受[う]け取[と]れますか。\nB: はい。ただ、提出[ていしゅつ]に先立[さきだ]って、オンラインでも申請[しんせい]可能[かのう]です。",
    translation: "A: I'd like to confirm something regarding copyright registration. B: Yes. Please tell me the type of work and the creation date. A: A novel, created last March. B: Based on the Copyright Act, it arises automatically, but registration strengthens the proof. A: If someone else publishes a similar work, can I respond? B: As far as I've confirmed, the one registered first is prioritized. A: Is it possible to transfer the rights to a third party? B: Yes. As soon as you submit the transfer contract, it's reflected in the registry. A: Understood. Can I receive the required documents at the counter? B: Yes. However, you can also apply online before submitting.",
    questions: [
      {
        q: "What is the work type?",
        choices: ["A short story", "A novel", "An academic paper", "A song"],
        answerIndex: 1,
        explanation: "A says 小説[しょうせつ]で — a novel."
      },
      {
        q: "What does registration strengthen?",
        choices: ["Economic value", "Proof", "Public recognition", "International protection"],
        answerIndex: 1,
        explanation: "B says 登録[とうろく]により証明[しょうめい]力[りょく]が増[ま]す — proof strengthens."
      },
      {
        q: "When someone publishes a similar work, who is prioritized?",
        choices: ["The famous author", "The one registered first", "The one with more sales", "The one who published first"],
        answerIndex: 1,
        explanation: "B says 先[さき]に登録[とうろく]した方[ほう]が優先[ゆうせん]される — the one registered first is prioritized."
      },
      {
        q: "When is the transfer reflected in the registry?",
        choices: ["As soon as the transfer contract is submitted", "After 30 days", "Only with court approval", "When the rights expire"],
        answerIndex: 0,
        explanation: "B says 譲渡[じょうと]契約[けいやく]書[しょ]を提出[ていしゅつ]次第[しだい]、登録[とうろく]簿[ぼ]に反映[はんえい]される — reflected as soon as the transfer contract is submitted."
      }
    ],
    estMinutes: 4,
    tags: ["copyright", "legal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-31 — Discussing a market crash
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-31",
    title: "Market Crash Discussion",
    level: "N2",
    context: "An analyst and an investor discussing a stock-price crash",
    text: "A: 株価[かぶか]の急落[きゅうらく]について、どう分析[ぶんせき]しますか。\nB: 金利[きんり]の引[ひ]き上[あ]げに伴[ともな]う資金[しきん]の流出[りゅうしゅつ]が原因[げんいん]でしょう。\nA: 私[わたし]の見方[みかた]でも、パニック売[う]りが連鎖[れんさ]しているに過[す]ぎません。\nB: 短期[たんき]回復[かいふく]を期待[きたい]するどころか、長期[ちょうき]戦[せん]の構[かま]えです。\nA: 追証[ついしょう]が発生[はっせい]する投資家[とうしか]も多[おお]いとか。\nB: ええ。レバレッジを効[き]かせすぎた人[ひと]は破産[はさん]しかねない状況[じょうきょう]です。\nA: 私[わたし]の調[しら]べた限[かぎ]りでは、ファンダメンタルズに問題[もんだい]はありません。\nB: そうですね。しかし、心理[しんり]的[てき]な不安[ふあん]が続[つづ]く限[かぎ]り、戻[もど]りは難[むずか]しいです。\nA: 残[のこ]された資産[しさん]を守[まも]るために、どう動[うご]くべきでしょうか。\nB: 分散[ぶんさん]投資[とうし]を徹底[てってい]するしかありません。急[いそ]な判断[はんだん]は避[さ]けて。",
    translation: "A: How do you analyze the stock-price crash? B: The cause is probably capital outflow accompanying the rate hike. A: In my view too, it's merely panic-selling cascading. B: Rather than expecting a short-term recovery, I'm prepared for a long battle. A: I hear many investors face margin calls. B: Yes. People who used too much leverage are in a situation where they could go bankrupt. A: As far as I've researched, there's no problem with fundamentals. B: Right. However, as long as psychological anxiety continues, recovery is difficult. A: To protect remaining assets, how should I act? B: There's nothing but to thoroughly diversify investments. Avoid hasty judgments.",
    questions: [
      {
        q: "What does B say caused the crash?",
        choices: ["Capital outflow from rate hikes", "A corporate scandal", "Geopolitical tension", "A natural disaster"],
        answerIndex: 0,
        explanation: "B says 金利[きんり]の引[ひ]き上[あ]げに伴[ともな]う資金[しきん]の流出[りゅうしゅつ]が原因[げんいん] — capital outflow accompanying rate hikes."
      },
      {
        q: "What is the crash, in A's view?",
        choices: ["A structural problem", "Merely panic-selling cascading", "An overdue correction", "A long-term trend"],
        answerIndex: 1,
        explanation: "A says パニック売[う]りが連鎖[れんさ]しているに過[す]ぎない — merely panic-selling cascading."
      },
      {
        q: "What could happen to over-leveraged investors?",
        choices: ["They could go bankrupt", "They could profit big", "They will get bailed out", "They will lose their jobs"],
        answerIndex: 0,
        explanation: "B says 破産[はさん]しかねない — could go bankrupt."
      },
      {
        q: "What does B recommend?",
        choices: ["Buy more stock", "Sell everything", "Diversify investments", "Wait and do nothing"],
        answerIndex: 2,
        explanation: "B says 分散[ぶんさん]投資[とうし]を徹底[てってい]するしかない — nothing but thorough diversification."
      }
    ],
    estMinutes: 5,
    tags: ["finance", "markets"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-32 — A HR mediation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-32",
    title: "HR Mediation",
    level: "N2",
    context: "An HR rep and a manager mediating a subordinate dispute",
    text: "A: 部下[ぶか]との間[あいだ]で問題[もんだい]があると伺[うかが]いましたが。\nB: ええ。私[わたし]の指導[しどう]が厳[きび]しすぎるという不満[ふまん]があるようです。\nA: 双方[そうほう]の話[はなし]を聞[き]いた上[うえ]で、対応[たいおう]を考[かんが]えましょう。\nB: 反省[はんせい]する点[てん]は多[おお]いかもしれません。私[わたし]の指導[しどう]は感情[かんじょう]に基[もと]づく部分[ぶぶん]があると自覚[じかく]しています。\nA: 部下[ぶか]側[がわ]の主張[しゅちょう]は、一[ひと]つの意見[いけん]に過[す]ぎないと割[わ]り切[き]ることも大事[だいじ]です。\nB: ええ。ただ、コミュニケーション不足[ぶそく]が原因[げんいん]なのは間違[まちが]いないです。\nA: 改善[かいぜん]案[あん]を合意[ごうい]する次第[しだい]で、双方[そうほう]の関係[かんけい]も好転[こうてん]するでしょう。\nB: 定期[ていき]的[てき]な面談[めんだん]を設[もう]けるのが先決[せんけつ]ですね。\nA: 賛成[さんせい]です。評価[ひょうか]基準[きじゅん]を明確[めいかく]にする限[かぎ]り、誤解[ごかい]も減[へ]るはずです。\nB: ありがとうございます。新[あたら]しい方針[ほうしん]を文書[ぶんしょ]にして、共有[きょうゆう]します。",
    translation: "A: I heard there's a problem with your subordinate. B: Yes. There seems to be a complaint that my guidance is too strict. A: After hearing both sides, let's consider how to respond. B: I might have many points to reflect on. I'm aware that part of my guidance is based on emotion. A: It's also important to cut it off as merely one opinion. B: Yes. However, lack of communication is definitely the cause. A: Depending on agreeing on an improvement plan, the relationship between both sides will likely improve. B: Setting regular interviews is the first priority. A: I agree. As long as we clarify evaluation criteria, misunderstandings should decrease. B: Thank you. I'll put the new policy in writing and share it.",
    questions: [
      {
        q: "What is the subordinate's complaint?",
        choices: ["The work is too easy", "The manager's guidance is too strict", "The pay is too low", "The hours are too long"],
        answerIndex: 1,
        explanation: "B says 指導[しどう]が厳[きび]しすぎるという不満[ふまん] — complaint that guidance is too strict."
      },
      {
        q: "What does B admit about his own guidance?",
        choices: ["It's based on emotion", "It's too lenient", "It's outdated", "It's too theoretical"],
        answerIndex: 0,
        explanation: "B says 感情[かんじょう]に基[もと]づく部分[ぶぶん]がある — part is based on emotion."
      },
      {
        q: "What does B say is the cause?",
        choices: ["Personality clash", "Communication shortage", "Workload imbalance", "Unclear roles"],
        answerIndex: 1,
        explanation: "B says コミュニケーション不足[ぶそく]が原因[げんいん] — communication shortage is the cause."
      },
      {
        q: "What is the first priority?",
        choices: ["Setting regular interviews", "Reassigning the subordinate", "Hiring a coach", "Reducing workload"],
        answerIndex: 0,
        explanation: "B says 定期[ていき]的[てき]な面談[めんだん]を設[もう]けるのが先決[せんけつ] — setting regular interviews is first."
      }
    ],
    estMinutes: 5,
    tags: ["hr", "workplace"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-33 — At the environmental agency
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-33",
    title: "At the Environmental Agency",
    level: "N2",
    context: "A citizen and an officer reporting abnormal factory emissions",
    text: "A: 近所[きんじょ]の工場[こうじょう]から異常[いじょう]な排気[はいき]があるのですが。\nB: ご報告[ほうこく]ありがとうございます。環境[かんきょう]基準[きじゅん]に基[もと]づいて調査[ちょうさ]します。\nA: 子供[こども]の健康[けんこう]への影響[えいきょう]が心配[しんぱい]でたまりません。\nB: お気持[きも]ちよく分[わ]かります。健康[けんこう]被害[ひがい]の発生[はっせい]に伴[ともな]う措置[そち]も準備[じゅんび]しています。\nA: 工場[こうじょう]側[がわ]は改善[かいぜん]する気[き]があるのでしょうか。\nB: 改善[かいぜん]計画[けいかく]の提出[ていしゅつ]に先立[さきだ]って、是正[ぜせい]命令[めいれい]を出[だ]す予定[よてい]です。\nA: 周辺[しゅうへん]住民[じゅうみん]への通知[つうち]はいつ頃[ころ]になりますか。\nB: 調査[ちょうさ]結果[けっか]が出[で]次第[しだい]、速[すみ]やかに通知[つうち]します。\nA: 第三者[だいさんしゃ]機関[きかん]の検査[けんさ]結果[けっか]も参考[さんこう]になりますか。\nB: ええ。提出[ていしゅつ]されれば、審査[しんさ]資料[しりょう]として扱[あつか]います。",
    translation: "A: There's abnormal exhaust from a nearby factory. B: Thank you for reporting. We'll investigate based on environmental standards. A: I'm extremely worried about the impact on children's health. B: I understand your feeling well. We're also preparing measures for any health-damage occurrence. A: Does the factory side intend to improve? B: Before they submit an improvement plan, we plan to issue a correction order. A: When will nearby residents be notified? B: As soon as the investigation results come out, we'll notify promptly. A: Will third-party inspection results also be useful? B: Yes. If submitted, we'll treat them as review materials.",
    questions: [
      {
        q: "What is the citizen reporting?",
        choices: ["A noise problem", "Abnormal factory exhaust", "A water leak", "Bad smells"],
        answerIndex: 1,
        explanation: "A says 異常[いじょう]な排気[はいき] — abnormal exhaust."
      },
      {
        q: "What is the agency preparing for?",
        choices: ["Health-damage occurrence", "Factory closure", "Resident relocation", "Public protest"],
        answerIndex: 0,
        explanation: "B says 健康[けんこう]被害[ひがい]の発生[はっせい]に伴[ともな]う措置[そち] — measures for health-damage occurrence."
      },
      {
        q: "What will the agency issue before the factory submits a plan?",
        choices: ["A fine", "A license revocation", "A correction order", "A warning letter"],
        answerIndex: 2,
        explanation: "B says 是正[ぜせい]命令[めいれい]を出[だ]す — will issue a correction order."
      },
      {
        q: "When will residents be notified?",
        choices: ["Within a week", "After investigation results come out", "At the next community meeting", "After the factory responds"],
        answerIndex: 1,
        explanation: "B says 調査[ちょうさ]結果[けっか]が出[で]次第[しだい]、通知[つうち] — as soon as results come out."
      }
    ],
    estMinutes: 5,
    tags: ["environment", "civic"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-34 — Discussing a data breach
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-34",
    title: "Data Breach Discussion",
    level: "N2",
    context: "A CISO and a CEO responding to a possible system intrusion",
    text: "A: 昨夜[さくや]、当社[とうしゃ]のシステムに不正[ふせい]アクセスがあった可能性[かのうせい]があります。\nB: 重大[じゅうだい]ですね。被害[ひがい]の規模[きぼ]はどの程度[ていど]ですか。\nA: 私[わたし]の把握[はあく]した限[かぎ]りでは、顧客[こきゃく]情報[じょうほう]の漏洩[ろうえい]に至[いた]る恐[おそ]れがあります。\nB: 公表[こうひょう]に先立[さきだ]って、専門[せんもん]チームに調査[ちょうさ]を依頼[いらい]してください。\nA: はい。すでに外部[がいぶ]機関[きかん]と契約[けいやく]して、分析[ぶんせき]を進[すす]めているところです。\nB: 再発[さいはつ]防止[ぼうし]の策[さく]も急[いそ]いで。信頼[しんらい]を失[うしな]うどころか、構築[こうちく]し直[なお]す必要[ひつよう]があります。\nA: もちろんです。原因[げんいん]が判明[はんめい]次第[しだい]、即時[そくじ]に報告[ほうこく]します。\nB: 株主[かぶぬし]や顧客[こきゃく]への対応[たいおう]は私[わたし]が直接[ちょくせつ]に当[あ]たります。\nA: お願[ねが]いいたします。法務[ほうむ]とも連携[れんけい]しつつあるので、安心[あんしん]してください。\nB: 今回[こんかい]の件[けん]が波紋[はもん]を呼[よ]ぶに違[ちが]いない。全力[ぜんりょく]で対応[たいおう]を。",
    translation: "A: Last night, there may have been unauthorized access to our systems. B: That's serious. What's the scale of damage? A: As far as I've grasped, there's a risk of customer-information leakage. B: Before announcing, please commission an investigation by a specialist team. A: Yes. I've already contracted an external organization and am proceeding with analysis. B: Hurry with recurrence-prevention measures too. Rather than losing trust, we need to rebuild it. A: Of course. As soon as the cause is identified, I'll report immediately. B: I'll directly handle responses to shareholders and customers. A: Please. We're also coordinating with Legal, so please rest assured. B: This case will surely send ripples. Respond with full effort.",
    questions: [
      {
        q: "What may have happened last night?",
        choices: ["A server crash", "Unauthorized system access", "A power outage", "A phishing email"],
        answerIndex: 1,
        explanation: "A says 不正[ふせい]アクセスがあった — there was unauthorized access."
      },
      {
        q: "What's the risk according to A?",
        choices: ["Customer-information leakage", "A second attack", "System downtime", "Financial loss"],
        answerIndex: 0,
        explanation: "A says 顧客[こきゃく]情報[じょうほう]の漏洩[ろうえい]に至[いた]る恐[おそ]れ — risk of customer-information leakage."
      },
      {
        q: "What did A already do?",
        choices: ["Contracted an external organization", "Filed a police report", "Sent a public notice", "Shut down systems"],
        answerIndex: 0,
        explanation: "A says 外部[がいぶ]機関[きかん]と契約[けいやく]して — contracted an external organization."
      },
      {
        q: "What does B say about trust?",
        choices: ["It's already lost", "Rather than losing it, they need to rebuild it", "It's not a concern", "It will recover naturally"],
        answerIndex: 1,
        explanation: "B says 信頼[しんらい]を失[うしな]うどころか、構築[こうちく]し直[なお]す — rather than losing trust, need to rebuild it."
      }
    ],
    estMinutes: 5,
    tags: ["security", "corporate"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-35 — A legal consultation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-35",
    title: "Legal Consultation",
    level: "N2",
    context: "A client and a lawyer consulting on inheritance",
    text: "A: 遺産相続[いさんそうぞく]の件[けん]で、相談[そうだん]に乗[の]っていただきたいのですが。\nB: はい。まずは現状[げんじょう]をお聞[き]かせください。\nA: 父[ちち]が亡[な]くなり、遺言[ゆいごん]書[しょ]の有無[うむ]を確認[かくにん]したいのです。\nB: 私[わたし]の調査[ちょうさ]した限[かぎ]りでは、公証人[こうしょうにん]役場[やくば]に登録[とうろく]があります。\nA: 遺言[ゆいごん]の内容[ないよう]は法的[ほうてき]に有効[ゆうこう]ですか。\nB: 民法[みんぽう]に基[もと]づいて審査[しんさ]した上[うえ]で、判断[はんだん]します。\nA: 兄[あに]と私[わたし]で分[わ]け方[かた]が揉[も]めています。\nB: 調停[ちょうてい]を申請[しんせい]するかどうかは、協議[きょうぎ]の結果[けっか]次第[しだい]です。\nA: 調停[ちょうてい]になれば、時間[じかん]も費用[ひよう]もかさみますね。\nB: ええ。話[はな]し合[あ]いでの解決[かいけつ]に越[こ]したことはありません。",
    translation: "A: I'd like to consult about inheritance. B: Yes. First, please tell me the current situation. A: My father passed away, and I want to confirm whether there's a will. B: As far as I've investigated, there's a registration at the notary office. A: Is the will's content legally valid? B: After reviewing based on the Civil Code, I'll judge. A: My brother and I are quarreling over the division. B: Whether to file for mediation depends on the result of discussions. A: If it goes to mediation, both time and costs pile up, right? B: Yes. There's nothing better than resolving through discussion.",
    questions: [
      {
        q: "What does A want to confirm?",
        choices: ["Whether there's a will", "The estate's value", "The heirs' identities", "The tax liability"],
        answerIndex: 0,
        explanation: "A wants to confirm 遺言[ゆいごん]書[しょ]の有無[うむ] — whether there's a will."
      },
      {
        q: "Where is there a registration?",
        choices: ["At the city office", "At the notary office", "At the court", "At the bank"],
        answerIndex: 1,
        explanation: "B says 公証人[こうしょうにん]役場[やくば]に登録[とうろく]がある — registration at the notary office."
      },
      {
        q: "On what basis will B judge the will's validity?",
        choices: ["The Civil Code", "Past precedents", "Family agreement", "Court rulings"],
        answerIndex: 0,
        explanation: "B says 民法[みんぽう]に基[もと]づいて審査[しんさ] — based on the Civil Code."
      },
      {
        q: "What does B say is best?",
        choices: ["Mediation", "Going to court", "Resolving through discussion", "Following tradition"],
        answerIndex: 2,
        explanation: "B says 話[はな]し合[あ]いでの解決[かいけつ]に越[こ]したことはない — nothing better than resolving through discussion."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "inheritance"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-36 — At the immigration appeal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-36",
    title: "At the Immigration Appeal",
    level: "N2",
    context: "An appellant and an officer at the immigration appeal counter",
    text: "A: 在留資格[ざいりゅうしかく]の不許可[ふきょか]処分[しょぶん]に対[たい]して、異議申立[いぎもうしたて]をしたいのですが。\nB: はい。申立[もうしたて]に際[さい]して、理由[りゆう]を明確[めいかく]に示[しめ]してください。\nA: 審査[しんさ]が不十分[ふじゅうぶん]だったと思[おも]う根拠[こんきょ]を記載[きさい]しました。\nB: この資料[しりょう]に基[もと]づいて、審査[しんさ]を再開[さいかい]します。\nA: どのくらいの期間[きかん]がかかりますか。\nB: 通常[つうじょう]、三[さん]カ月[かげつ]以内[いない]に結果[けっか]を通知[つうち]するのが原則[げんそく]です。\nA: 申立[もうしたて]中[ちゅう]の在留[ざいりゅう]は認[みと]められますか。\nB: はい。特別[とくべつ]在留[ざいりゅう]資格[しかく]が与[あた]えられるに違[ちが]いないです。\nA: 分[わ]かりました。追加[ついか]資料[しりょう]は後[のち]ほど提出[ていしゅつ]可能[かのう]ですか。\nB: はい。審査[しんさ]が終[お]わらない限[かぎ]りは、いつでも受[う]け付[づ]けます。",
    translation: "A: I'd like to file an appeal against the refusal of my residence status. B: Yes. When filing, please clearly state the reason. A: I've written the grounds for thinking the screening was insufficient. B: Based on these materials, we'll resume screening. A: How long will it take? B: As a rule, we notify the result within three months normally. A: Will my stay during the appeal be recognized? B: Yes. A special residence status will surely be granted. A: Understood. Can I submit additional materials later? B: Yes. As long as screening isn't finished, we accept anytime.",
    questions: [
      {
        q: "What does A want to file?",
        choices: ["A new application", "An appeal against refusal", "A complaint", "A renewal request"],
        answerIndex: 1,
        explanation: "A says 異議申立[いぎもうしたて]をしたい — wants to file an appeal."
      },
      {
        q: "What did A write?",
        choices: ["The reason for refusal", "The grounds for thinking screening was insufficient", "An apology", "A financial statement"],
        answerIndex: 1,
        explanation: "A says 審査[しんさ]が不十分[ふじゅうぶん]だったと思[おも]う根拠[こんきょ]を記載[きさい] — grounds for thinking screening was insufficient."
      },
      {
        q: "What will surely be granted during the appeal?",
        choices: ["A work permit", "Special residence status", "A travel document", "Financial aid"],
        answerIndex: 1,
        explanation: "B says 特別[とくべつ]在留[ざいりゅう]資格[しかく]が与[あた]えられるに違[ちが]いない — special residence status will surely be granted."
      },
      {
        q: "When can additional materials be submitted?",
        choices: ["Within 30 days", "As long as screening isn't finished", "Only at the start", "With court approval"],
        answerIndex: 1,
        explanation: "B says 審査[しんさ]が終[お]わらない限[かぎ]りは、いつでも受[う]け付[づ]ける — accepts anytime as long as screening isn't finished."
      }
    ],
    estMinutes: 5,
    tags: ["immigration", "appeal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-37 — Discussing a corporate scandal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-37",
    title: "Corporate Scandal Discussion",
    level: "N2",
    context: "A journalist and an executive discussing an accounting-fraud case",
    text: "A: 最近[さいきん]の会計[かいけい]不正[ふせい]の件[けん]について、お話[はなし]を伺[うかが]いたいのですが。\nB: 誠[まこと]に遺憾[いかん]に存[ぞん]じます。現在[げんざい]、外部[がいぶ]調査[ちょうさ]が進[すす]んでいます。\nA: 不正[ふせい]が発覚[はっかく]したのは偶然[ぐうぜん]だったと聞[き]きましたが。\nB: いいえ。内部[ないぶ]通報[つうほう]に基[もと]づいて発覚[はっかく]したに過[す]ぎません。\nA: 経営[けいえい]責任[せきにん]を問[と]う声[こえ]が強[つよ]まっています。\nB: 重[おも]く受[う]け止[と]めています。事実[じじつ]関係[かんけい]が判明[はんめい]次第[しだい]、公表[こうひょう]します。\nA: 再発[さいはつ]防止[ぼうし]の策[さく]はあるのでしょうか。\nB: ガバナンスの強化[きょうか]を進[すす]める上[うえ]で、社外[しゃがい]取締役[とりしまりやく]を増員[ぞういん]する予定[よてい]です。\nA: 今回[こんかい]の件[けん]が連鎖[れんさ]する他社[たしゃ]への影響[えいきょう]も心配[しんぱい]です。\nB: 業界[ぎょうかい]全体[ぜんたい]の信認[しんにん]失墜[しっつい]に至[いた]るかねない状況[じょうきょう]です。",
    translation: "A: I'd like to hear about the recent accounting-fraud case. B: We sincerely regret it. Currently, an external investigation is proceeding. A: I heard the fraud was discovered by chance. B: No. It was merely discovered based on an internal report. A: Voices calling for management responsibility are growing. B: We take it seriously. As soon as the facts are clear, we'll announce. A: Are there measures to prevent recurrence? B: In strengthening governance, we plan to increase outside directors. A: I'm also worried about the chain-reaction impact on other companies. B: It's a situation that could lead to loss of trust across the entire industry.",
    questions: [
      {
        q: "How was the fraud discovered?",
        choices: ["By chance", "Based on an internal report", "During an audit", "By a customer complaint"],
        answerIndex: 1,
        explanation: "B says 内部[ないぶ]通報[つうほう]に基[もと]づいて発覚[はっかく]したに過[す]ぎない — merely discovered based on an internal report."
      },
      {
        q: "What will the company do as soon as facts are clear?",
        choices: ["Hold a press conference", "Make a public announcement", "Suspend executives", "File a lawsuit"],
        answerIndex: 1,
        explanation: "B says 事実[じじつ]関係[かんけい]が判明[はんめい]次第[しだい]、公表[こうひょう]する — will announce as soon as facts are clear."
      },
      {
        q: "What does the company plan to increase?",
        choices: ["Audits", "Outside directors", "Capital", "Employees"],
        answerIndex: 1,
        explanation: "B says 社外[しゃがい]取締役[とりしまりやく]を増員[ぞういん]する予定[よてい] — plans to increase outside directors."
      },
      {
        q: "What could happen according to B?",
        choices: ["Industry-wide trust loss", "Stock price recovery", "Government bailout", "New product launch"],
        answerIndex: 0,
        explanation: "B says 業界[ぎょうかい]全体[ぜんたい]の信認[しんにん]失墜[しっつい]に至[いた]るかねない — could lead to industry-wide trust loss."
      }
    ],
    estMinutes: 5,
    tags: ["corporate", "scandal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-38 — A pension reform debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-38",
    title: "Pension Reform Debate",
    level: "N2",
    context: "A policy maker and a critic debating pension-system reform",
    text: "A: 年金[ねんきん]制度[せいど]の改革[かいかく]案[あん]について、意見[いけん]を伺[うかが]いたいのですが。\nB: 現行[げんこう]の制度[せいど]に基[もと]づく試算[しさん]では、2040年[にせんよんじゅうねん]に破綻[はたん]すると聞[き]きました。\nA: その通[とお]りです。少子[しょうし]高齢化[こうれいか]に伴[ともな]う給付[きゅうふつ]負担[ふたん]の増大[ぞうだい]が原因[げんいん]です。\nB: では、給付[きゅうふつ]削減[さくげん]が中心[ちゅうしん]なのでしょうか。\nA: いいえ。給付[きゅうふつ]の削減[さくげん]どころか、保険料[ほけんりょう]の引[ひ]き上[あ]げを検討[けんとう]しています。\nB: 現役[げんえき]世代[せだい]の負担[ふたん]を増[ふや]すだけでは、反発[はんぱつ]は避[さ]けられません。\nA: ですから、積立[つみたて]方式[ほうしき]への移行[いこう]も選択肢[せんたくし]の一[ひと]つです。\nB: 急激[きゅうげき]な移行[いこう]は現場[げんば]の混乱[こんらん]を招[まね]くに違[ちが]いないです。\nA: ご指摘[してき]の通[とお]りです。段階[だんかい]的[てき]な移行[いこう]を前提[ぜんてい]としています。\nB: 議会[ぎかい]での合意[ごうい]形成[けいせい]が先[さき]ですね。国民[こくみん]の理解[りかい]を得[え]られない限[かぎ]り、改革[かいかく]は進[すす]みません。",
    translation: "A: I'd like to hear opinions about the pension-system reform plan. B: Based on the current system's calculations, I heard it'll go bankrupt in 2040. A: That's right. The cause is the increase in benefit burdens accompanying the declining birthrate and aging population. B: Then is benefit reduction the focus? A: No. Rather than reducing benefits, we're considering raising insurance premiums. B: Simply increasing the burden on the working generation won't avoid backlash. A: Therefore, transitioning to a funded system is also one option. B: A sudden transition will surely invite on-site confusion. A: You're right. We assume a phased transition. B: Forming consensus in parliament comes first. As long as we can't get public understanding, reform won't proceed.",
    questions: [
      {
        q: "When will the current pension system go bankrupt?",
        choices: ["2030", "2040", "2050", "2060"],
        answerIndex: 1,
        explanation: "B says 2040年[にせんよんじゅうねん]に破綻[はたん]する — bankrupt in 2040."
      },
      {
        q: "What is the cause of bankruptcy?",
        choices: ["Inflation", "Burden increase from declining birthrate and aging", "Government mismanagement", "Investment losses"],
        answerIndex: 1,
        explanation: "A says 少子[しょうし]高齢化[こうれいか]に伴[ともな]う給付[きゅうふつ]負担[ふたん]の増大[ぞうだい]が原因[げんいん]."
      },
      {
        q: "What is A considering rather than benefit reduction?",
        choices: ["Raising insurance premiums", "Increasing the retirement age", "Privatising the system", "Cutting administrative costs"],
        answerIndex: 0,
        explanation: "A says 給付[きゅうふつ]の削減[さくげん]どころか、保険料[ほけんりょう]の引[ひ]き上[あ]げ — rather than reduction, raising premiums."
      },
      {
        q: "What will a sudden transition surely cause?",
        choices: ["On-site confusion", "Quick recovery", "Lower costs", "Better compliance"],
        answerIndex: 0,
        explanation: "B says 急激[きゅうげき]な移行[いこう]は現場[げんば]の混乱[こんらん]を招[まね]くに違[ちが]いない — will surely invite on-site confusion."
      }
    ],
    estMinutes: 6,
    tags: ["policy", "pension"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-39 — At the health ministry
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-39",
    title: "At the Health Ministry",
    level: "N2",
    context: "A citizen and an official discussing a new vaccine",
    text: "A: 新型[しんがた]ワクチンの接種[せっしゅ]について、確認[かくにん]したいことがあります。\nB: はい。厚生[こうせい]労働[ろうどう]省[しょう]の指針[しせん]に基[もと]づいて、実施[じっし]しています。\nA: 副作用[ふくさよう]のリスクが心配[しんぱい]です。\nB: 私[わたし]の把握[はあく]した限[かぎ]りでは、重大[じゅうだい]な副作用[ふくさよう]は極[きわ]めて稀[まれ]です。\nA: 接種[せっしゅ]後[ご]の健康[けんこう]異常[いじょう]があった場合[ばあい]、どうすればよいですか。\nB: 医療[いりょう]機関[きかん]を受診[じゅしん]した上[うえ]で、報告[ほうこく]するようお願[ねが]いします。\nA: 接種[せっしゅ]証明[しょうめい]の発行[はっこう]はいつ頃[ころ]になりますか。\nB: 申請[しんせい]してから二[に]週間[しゅうかん]以内[いない]に郵送[ゆうそう]します。\nA: 海外[かいがい]渡航[とこう]の際[さい]にも使[つか]えますか。\nB: ええ。現在[げんざい]、国際[こくさい]的[てき]な互換性[ごかんせい]が確保[かくほ]されつつあります。",
    translation: "A: I'd like to confirm something about the new-type vaccine. B: Yes. We're implementing it based on Ministry of Health guidelines. A: I'm worried about side-effect risks. B: As far as I've grasped, serious side effects are extremely rare. A: If there's a health abnormality after inoculation, what should I do? B: After visiting a medical institution, please report it. A: When will the inoculation certificate be issued? B: We'll mail it within two weeks of application. A: Can it be used for overseas travel too? B: Yes. International compatibility is currently being secured.",
    questions: [
      {
        q: "What is the implementation based on?",
        choices: ["Hospital guidelines", "Ministry of Health guidelines", "WHO recommendations", "City regulations"],
        answerIndex: 1,
        explanation: "B says 厚生[こうせい]労働[ろうどう]省[しょう]の指針[しせん]に基[もと]づいて — based on Ministry of Health guidelines."
      },
      {
        q: "What does B say about serious side effects?",
        choices: ["They are common", "They are extremely rare", "They are unknown", "They are increasing"],
        answerIndex: 1,
        explanation: "B says 重大[じゅうだい]な副作用[ふくさよう]は極[きわ]めて稀[まれ] — extremely rare."
      },
      {
        q: "When is the certificate mailed?",
        choices: ["Within a week", "Within two weeks", "Within a month", "Within three months"],
        answerIndex: 1,
        explanation: "B says 申請[しんせい]してから二[に]週間[しゅうかん]以内[いない]に郵送[ゆうそう] — within two weeks."
      },
      {
        q: "What is currently being secured?",
        choices: ["Domestic distribution", "International compatibility", "Vaccine supply", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 国際[こくさい]的[てき]な互換性[ごかんせい]が確保[かくほ]されつつある — international compatibility is being secured."
      }
    ],
    estMinutes: 4,
    tags: ["health", "vaccine"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-40 — Discussing a telecom regulation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-40",
    title: "Telecom Regulation Discussion",
    level: "N2",
    context: "A regulator and a telecom executive discussing new rules",
    text: "A: 新[あたら]しい通信[つうしん]規制[きせい]の案[あん]について、ご意見[いけん]を伺[うかが]いたいのですが。\nB: 業界[ぎょうかい]の意見[いけん]を反映[はんえい]していただければ幸[さいわ]いです。\nA: もちろんです。公聴会[こうちょうかい]を通[つう]じて、幅広[はばひろ]く意見[いけん]を集[あつ]めました。\nB: 現行[げんこう]の電波[でんぱ]法[ほう]に基[もと]く運用[うんよう]を見直[みなお]すのですね。\nA: はい。技術[ぎじゅつ]の進歩[しんぽ]に応[おう]じて、柔軟[じゅうなん]な規制[きせい]にします。\nB: しかし、過度[かど]な規制[きせい]は投資[とうし]を冷[ひ]やしかねないと懸念[けねん]しています。\nA: ご指摘[してき]の通[とお]りです。バランスを保[たも]つ上[うえ]で、慎重[しんちょう]に進[すす]めます。\nB: 中小[ちゅうしょう]事業者[じぎょうしゃ]への配慮[はいりょ]もお願[ねが]いします。\nA: ええ。負担[ふたん]軽減[けいげん]措置[そち]を設[もう]ける予定[よてい]です。\nB: 規制[きせい]が確定[かくてい]するまでは、大[おお]きな投資[とうし]は見送[みおく]るつもりです。",
    translation: "A: I'd like to hear your opinion about the new telecom-regulation plan. B: We'd appreciate it if you reflected industry opinions. A: Of course. We gathered broad opinions through public hearings. B: You're reviewing the operation based on the current Radio Act, right? A: Yes. In line with technological progress, we'll make flexible regulations. B: However, I'm concerned that excessive regulation could chill investment. A: You're right. In maintaining balance, we'll proceed carefully. B: Please also consider small and medium operators. A: Yes. We plan to set up burden-reduction measures. B: Until the regulation is finalized, we intend to forgo major investments.",
    questions: [
      {
        q: "How did A gather broad opinions?",
        choices: ["Through online surveys", "Through public hearings", "Through internal review", "Through international consultation"],
        answerIndex: 1,
        explanation: "A says 公聴会[こうちょうかい]を通[つう]じて — through public hearings."
      },
      {
        q: "What is B concerned about?",
        choices: ["Lower profits", "Investment being chilled", "Job losses", "Higher costs"],
        answerIndex: 1,
        explanation: "B says 過度[かど]な規制[きせい]は投資[とうし]を冷[ひ]やしかねない — excessive regulation could chill investment."
      },
      {
        q: "What does A plan to set up?",
        choices: ["New licenses", "Burden-reduction measures", "Compliance audits", "Training programs"],
        answerIndex: 1,
        explanation: "A says 負担[ふたん]軽減[けいげん]措置[そち]を設[もう]ける — set up burden-reduction measures."
      },
      {
        q: "What will B do until regulation is finalized?",
        choices: ["Make major investments", "Forgo major investments", "Reduce staff", "Switch markets"],
        answerIndex: 1,
        explanation: "B says 大[おお]きな投資[とうし]は見送[みおく]る — will forgo major investments."
      }
    ],
    estMinutes: 5,
    tags: ["telecom", "regulation"]
  }
];
