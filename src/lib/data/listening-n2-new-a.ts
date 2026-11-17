import type { ListeningData } from "@/lib/types";

// N2 listening exercises set A (new batch).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N2 grammar targets: 〜どころか, 〜に違いない, 〜限り, 〜次第, 〜に基づいて,
// 〜に伴う, 〜に過ぎない, 〜かねない, 〜つつある, 〜に先立って, 〜向きの, etc.

export const listeningN2NewA: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n2n-01 — A business negotiation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-01",
    title: "Business Negotiation",
    level: "N2",
    context: "A vendor and a buyer negotiating contract terms",
    text: "A: 契約[けいやく]の条件[じょうけん]について話[はな]し合[あ]いたいのですが。\nB: ええ、単価[たんか]の引[ひ]き下[さ]げが先方[せんぽう]の最大[さいだい]の条件[じょうけん]ですね。\nA: 10パーセントの値下[ねさ]げどころか、5パーセントでも採算[さいさん]が合[あ]いません。\nB: それでも、受注[じゅちゅう]を勝[か]ち取[と]る限[かぎ]り、何[なに]とかするしかありません。\nA: 契約期間[けいやくきかん]を延[の]ばすことにすれば、多少[たしょう]は譲歩[じょうほ]できるかもしれません。\nB: では、社内[しゃない]で承認[しょうにん]が取[と]れ次第[しだい]、ご連絡[れんらく]します。\nA: ありがとうございます。今回[こんかい]の提案[ていあん]が両社[りょうしゃ]にプラスになるに違[ちが]いないですね。\nB: そうですね。成功[せいこう]を信[しん]じています。",
    translation: "A: I'd like to discuss the contract terms. B: Yes, a unit-price reduction is the other party's biggest condition. A: Let alone a 10% cut, even 5% won't be profitable. B: Still, as long as we win the order, we have no choice but to manage somehow. A: If we extend the contract period, we might be able to make some concessions. B: Then, I'll contact you as soon as I get internal approval. A: Thank you. I'm sure this proposal will benefit both companies. B: Yes. I believe in success.",
    questions: [
      {
        q: "What is the buyer's main condition?",
        choices: ["Longer contract period", "Lower unit price", "Faster delivery", "Higher quality"],
        answerIndex: 1,
        explanation: "B says 単価[たんか]の引[ひ]き下[さ]げが先方[せんぽう]の最大[さいだい]の条件 — reducing the unit price is the biggest condition."
      },
      {
        q: "How much of a discount does A say is unprofitable even at the lower bound?",
        choices: ["Even 1%", "Even 3%", "Even 5%", "Even 10%"],
        answerIndex: 2,
        explanation: "A says 5パーセントでも採算[さいさん]が合[あ]いません — even 5% won't be profitable."
      },
      {
        q: "What would allow A to make concessions?",
        choices: ["Extending the contract period", "Increasing order volume", "Paying in advance", "Reducing delivery time"],
        answerIndex: 0,
        explanation: "A says 契約期間[けいやくきかん]を延[の]ばすことにすれば、多少[たしょう]は譲歩[じょうほ]できる — extending the contract period allows some concessions."
      },
      {
        q: "When will B contact A again?",
        choices: ["Within one week", "After the next meeting", "As soon as internal approval is obtained", "After the contract is signed"],
        answerIndex: 2,
        explanation: "B says 承認[しょうにん]が取[と]れ次第[しだい]、ご連絡[れんらく]します — contact as soon as approval is obtained."
      }
    ],
    estMinutes: 5,
    tags: ["business", "negotiation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-02 — Discussing a legal contract
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-02",
    title: "Legal Contract Review",
    level: "N2",
    context: "A client and a legal adviser reviewing a contract clause",
    text: "A: 契約書[けいやくしょ]の第三条[だいさんじょう]を確認[かくにん]させていただきました。\nB: ありがとうございます。何[なに]か問題[もんだい]でも。\nA: 損害賠償[そんがいばいしょう]の条項[じょうこう]が法律[ほうりつ]に基[もと]づいていないように見[み]えます。\nB: 確[たし]かに、現行[げんこう]の法規[ほうき]とは乖離[かいり]しつつある部分[ぶぶん]がありますね。\nA: これでは、紛争[ふんそう]が起[お]きた際[さい]に対処[たいしょ]しようがありません。\nB: 承知[しょうち]いたしました。弁護士[べんごし]と協議[きょうぎ]した上[うえ]で修正[しゅうせい]案[あん]を提出[ていしゅつ]します。\nA: 期日[きじつ]に関[かん]わらず、早[はや]めに見直[みなお]していただきたいです。\nB: かしこまりました。今週末[こんしゅうまつ]までにはご提示[ていじ]します。\nA: この条項[じょうこう]次第[しだい]では、署名[しょめい]を見送[みおく]る可能性[かのうせい]があります。\nB: 必[かなら]ずや改善[かいぜん]いたしますので、ご安心[あんしん]ください。",
    translation: "A: I've reviewed Article 3 of the contract. B: Thank you. Is there a problem? A: The damages clause doesn't appear to be based on the law. B: True, some parts are diverging from current regulations. A: With this, we have no way to respond if a dispute arises. B: Understood. I'll submit a revised draft after consulting with a lawyer. A: Regardless of the deadline, I'd like it reviewed early. B: Understood. I'll present it by the end of this week. A: Depending on this clause, we may hold off on signing. B: We will certainly improve it, so please don't worry.",
    questions: [
      {
        q: "Which article did A review?",
        choices: ["Article 1", "Article 2", "Article 3", "Article 4"],
        answerIndex: 2,
        explanation: "A mentions 第三条[だいさんじょう] — Article 3."
      },
      {
        q: "What is the problem with the damages clause?",
        choices: ["It is missing entirely", "It isn't based on the law", "It is too vague", "It is too strict"],
        answerIndex: 1,
        explanation: "A says 損害賠償[そんがいばいしょう]の条項[じょうこう]が法律[ほうりつ]に基[もと]づいていない — not based on the law."
      },
      {
        q: "What will B do before submitting a revised draft?",
        choices: ["Consult with a lawyer", "Hold a board meeting", "Ask the client directly", "Hire a new auditor"],
        answerIndex: 0,
        explanation: "B says 弁護士[べんごし]と協議[きょうぎ]した上[うえ]で修正[しゅうせい]案[あん]を提出[ていしゅつ] — after consulting a lawyer."
      },
      {
        q: "When will B present the revised clause?",
        choices: ["By tomorrow", "By the end of this week", "Within two weeks", "By next month"],
        answerIndex: 1,
        explanation: "B says 今週末[こんしゅうまつ]までにはご提示[ていじ]します — by the end of this week."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "contract"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-03 — At the immigration office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-03",
    title: "At the Immigration Office",
    level: "N2",
    context: "An applicant and an immigration officer discussing residence renewal",
    text: "A: 在留資格[ざいりゅうしかく]の更新[こうしん]についてお伺[うかが]いしたいのですが。\nB: はい、申請書[しんせいしょ]と必要[ひつよう]書類[しょるい]はご用意[ようい]でしょうか。\nA: はい。ただ、この半年間[はんとしかん]の収入[しゅうにゅう]が少[すく]ないのが心配[しんぱい]です。\nB: 収入[しゅうにゅう]要件[ようけん]はあくまで目安[めやす]に過[す]ぎません。活動[かつどう]の実態[じったい]が重視[じゅうし]されます。\nA: つまり、副業[ふくぎょう]を始[はじ]めたことをきっかけに審査[しんさ]が厳[きび]しくなるかねませんか。\nB: 許可[きょか]の範囲[はんい]内[ない]であれば、問題[もんだい]になりません。ただ、虚偽[きょぎ]の申告[しんこく]は却下[きゃっか]の対象[たいしょう]です。\nA: 現在[げんざい]の仕事[しごと]の契約[けいやく]も更新[こうしん]しつつあるので、書類[しょるい]に追加[ついか]します。\nB: 承知[しょうち]いたしました。結果[けっか]は三週間[さんしゅうかん]以内[いない]に通知[つうち]されます。\nA: 申請[しんせい]が却下[きゃっか]される限[かぎ]りは帰国[きこく]しなければなりませんか。\nB: いいえ。異議申立[いぎもうしたて]の制度[せいど]がありますので、焦[あせ]らなくて大丈夫[だいじょうぶ]です。",
    translation: "A: I'd like to ask about renewing my residence status. B: Yes, do you have the application form and required documents ready? A: Yes. But I'm worried that my income over the past six months has been low. B: The income requirement is merely a guideline. The actual activity is emphasized. A: In other words, starting a side job could trigger stricter screening, couldn't it? B: If it's within the permitted scope, there's no problem. But a false declaration is subject to rejection. A: My current work contract is being renewed too, so I'll add it to the documents. B: Understood. The result will be notified within three weeks. A: If my application is rejected, will I have to return home? B: No. There's an appeal system, so no need to panic.",
    questions: [
      {
        q: "What is A worried about?",
        choices: ["Missing documents", "Low income over six months", "An expired passport", "A false declaration"],
        answerIndex: 1,
        explanation: "A says 半年間[はんとしかん]の収入[しゅうにゅう]が少[すく]ないのが心配[しんぱい] — worried about low income over six months."
      },
      {
        q: "How does B describe the income requirement?",
        choices: ["A strict rule", "Just a guideline", "An absolute minimum", "A new regulation"],
        answerIndex: 1,
        explanation: "B says 収入[しゅうにゅう]要件[ようけん]はあくまで目安[めやす]に過[す]ぎません — merely a guideline."
      },
      {
        q: "What could lead to rejection?",
        choices: ["A side job", "A short contract", "A false declaration", "Low income"],
        answerIndex: 2,
        explanation: "B says 虚偽[きょぎ]の申告[しんこく]は却下[きゃっか]の対象[たいしょう] — a false declaration is subject to rejection."
      },
      {
        q: "When will the result be notified?",
        choices: ["Within one week", "Within two weeks", "Within three weeks", "Within one month"],
        answerIndex: 2,
        explanation: "B says 三週間[さんしゅうかん]以内[いない]に通知[つうち]されます — within three weeks."
      }
    ],
    estMinutes: 5,
    tags: ["immigration", "official"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-04 — A corporate strategy meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-04",
    title: "Corporate Strategy Meeting",
    level: "N2",
    context: "Two executives discussing market entry strategy",
    text: "A: 新[あたら]しい市場[しじょう]への参入[さんにゅう]について議論[ぎろん]したいのですが。\nB: ええ、前期[ぜんき]の売上[うりあげ]が予想[よそう]を下回[したまわ]ったにもかかわらず、成長[せいちょう]市場[しじょう]への投資[とうし]は欠[か]かせません。\nA: 競合[きょうごう]他社[たしゃ]の動[うご]きを見[み]たところ、東南[とうなん]アジアが有望[ゆうぼう]です。\nB: ただ、現地[げんち]法規[ほうき]に詳[くわ]しい顧問[こもん]弁護士[べんごし]と契約[けいやく]する際[さい]に、リスクを洗[あら]い出[だ]す必要[ひつよう]があります。\nA: 私[わたし]の部門[ぶもん]では、すでに候補[こうほ]を三[みっ]つ絞[しぼ]り込[こ]んでいます。\nB: 良[よ]かったです。正式[せいしき]に決定[けってい]するに先[さき]立[だ]って、取締役[とりしまりやく]会[かい]の承認[しょうにん]を取[と]りましょう。\nA: 資金[しきん]の配分[はいぶん]はどうしましょうか。\nB: まずは試験的[しけんてき]な投資[とうし]から始[はじ]め、成果[せいか]次第[しだい]で増額[ぞうがく]します。\nA: 承知[しょうち]いたしました。来週[らいしゅう]の取締役会[とりしまりやくかい]に向[む]けて資料[しりょう]を準備[じゅんび]します。\nB: お願[ねが]いします。市場調査[しじょうちょうさ]の結果[けっか]も必[かなら]ず含[ふく]めてください。",
    translation: "A: I'd like to discuss entering a new market. B: Yes, despite last period's sales falling below expectations, investment in growth markets is essential. A: Looking at competitors' moves, Southeast Asia looks promising. B: However, when contracting a local-law-savvy advisor, we need to identify risks. A: My department has already narrowed it down to three candidates. B: Good. Before formally deciding, let's get board approval. A: How should we allocate the funds? B: Let's start with a trial investment and increase the amount depending on the results. A: Understood. I'll prepare materials for next week's board meeting. B: Please. Be sure to include the market research results too.",
    questions: [
      {
        q: "Why is investment still needed despite weak sales?",
        choices: ["Sales will recover soon", "Growth markets are essential", "Competitors are weak", "Funds are abundant"],
        answerIndex: 1,
        explanation: "B says 成長[せいちょう]市場[しじょう]への投資[とうし]は欠[か]かせません — investment in growth markets is essential."
      },
      {
        q: "Which region is considered promising?",
        choices: ["Europe", "North America", "Southeast Asia", "The Middle East"],
        answerIndex: 2,
        explanation: "A says 東南[とうなん]アジアが有望[ゆうぼう] — Southeast Asia is promising."
      },
      {
        q: "What must be done before the formal decision?",
        choices: ["Hire a new advisor", "Conduct a market survey", "Get board approval", "Increase the budget"],
        answerIndex: 2,
        explanation: "B says 正式[せいしき]に決定[けってい]するに先立って、取締役[とりしまりやく]会[かい]の承認[しょうにん]を取[と]りましょう — get board approval before deciding."
      },
      {
        q: "How will the investment start?",
        choices: ["With a large initial investment", "With a trial investment", "With a partnership", "With a loan"],
        answerIndex: 1,
        explanation: "B says まずは試験的[しけんてき]な投資[とうし]から始[はじ]め — start with a trial investment."
      }
    ],
    estMinutes: 6,
    tags: ["business", "strategy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-05 — Discussing a merger
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-05",
    title: "Merger Discussion",
    level: "N2",
    context: "Two managers finalizing details of an upcoming merger",
    text: "A: 来月[らいげつ]の合併[がっぺい]について、最終[さいしゅう]確認[かくにん]をしたいのですが。\nB: ええ。現状[げんじょう]を踏[ふ]まえると、統合[とうごう]に伴[ともな]う人員[じんいん]削減[さくげん]は避[さ]けられません。\nA: そうですね。ただ、優秀[ゆうしゅう]な人材[じんざい]まで失[うしな]っては元[もと]も子[こ]もありません。\nB: 同意[どうい]します。経営[けいえい]統合[とうごう]の効果[こうか]が出[で]るどころか、組織[そしき]が弱体化[じゃくたいか]しかねません。\nA: 人事[じんじ]部[ぶ]と連携[れんけい]して、キーマンを残留[ざんりゅう]させる案[あん]を作[つく]りましょう。\nB: お願[ねが]いします。早急[そうきゅう]に進[すす]めないと、競合[きょうごう]に人材[じんざい]を引[ひ]かれかねません。\nA: 統合[とうごう]後[ご]のブランド名[めい]も決[き]めなければなりません。\nB: 両社[りょうしゃ]の資産[しさん]を活[いか]かす限[かぎ]り、新[あたら]しい名前[なまえ]が望[のぞ]ましいです。\nA: 承知[しょうち]いたしました。今週末[こんしゅうまつ]までに方針[ほうしん]をまとめます。\nB: ありがとうございます。株主[かぶぬし]への説明[せつめい]も忘[わす]れないでください。",
    translation: "A: I'd like to do a final check on next month's merger. B: Yes. Based on the current situation, the staff cuts accompanying the integration cannot be avoided. A: True. But losing even our talented people would defeat the whole purpose. B: I agree. Rather than producing the effects of management integration, it could weaken the organization. A: Let's work with HR to create a plan to retain key people. B: Please. If we don't move quickly, competitors may poach our talent. A: We also need to decide the post-merger brand name. B: As long as we leverage both companies' assets, a new name would be desirable. A: Understood. I'll put together the policy by the end of this week. B: Thank you. Don't forget to explain it to shareholders too.",
    questions: [
      {
        q: "What cannot be avoided in the integration?",
        choices: ["Staff cuts", "A brand rename", "A board reshuffle", "A price increase"],
        answerIndex: 0,
        explanation: "B says 人員[じんいん]削減[さくげん]は避[さ]けられません — staff cuts cannot be avoided."
      },
      {
        q: "What is A's concern about losing talented people?",
        choices: ["It raises costs", "It defeats the purpose", "It delays the merger", "It angers clients"],
        answerIndex: 1,
        explanation: "A says 優秀[ゆうしゅう]な人材[じんざい]まで失[うしな]っては元も子[こ]もありません — losing talent defeats the purpose."
      },
      {
        q: "What could happen if key people are lost?",
        choices: ["Sales would double", "The organization could weaken", "Costs would drop", "The brand would strengthen"],
        answerIndex: 1,
        explanation: "B says 組織[そしき]が弱体化[じゃくたいか]しかねません — the organization could weaken."
      },
      {
        q: "What does A promise to do by the end of the week?",
        choices: ["Hold a press conference", "Put together the policy", "Sign the contract", "Notify employees"],
        answerIndex: 1,
        explanation: "A says 今週末[こんしゅうまつ]までに方針[ほうしん]をまとめます — put together the policy by the end of the week."
      }
    ],
    estMinutes: 5,
    tags: ["business", "merger"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-06 — At the customs office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-06",
    title: "At the Customs Office",
    level: "N2",
    context: "A traveler and a customs officer reviewing declared goods",
    text: "A: 税関[ぜいかん]申告[しんこく]について質問[しつもん]がございます。\nB: はい、何[なに]をお調[しら]べしましょうか。\nA: 持[も]ち込[こ]んだ電子[でんし]機器[きき]に課税[かぜい]されるか知[し]りたいです。\nB: 個人[こじん]使用[しよう]向[む]きのものは免税[めんぜい]の対象[たいしょう]ですが、販売[はんばい]目的[もくてき]であれば課税[かぜい]されます。\nA: サンプル商品[しょうひん]は、商用[しょうよう]にもとづくものとして扱[あつか]われますか。\nB: はい。ただし、書類[しょるい]に基[もと]づいて商業[しょうぎょう]価値[かち]を証明[しょうめい]する必要[ひつよう]があります。\nA: 食品[しょくひん]を除[のぞ]いて、他[ほか]の荷物[にもつ]は問題[もんだい]ないでしょうか。\nB: ええ。ただ、新[あたら]しい規制[きせい]に当[あ]たって、リチウム電池[でんち]の申告[しんこく]も必須[ひっす]になりました。\nA: 承知[しょうち]いたしました。では、税関[ぜいかん]検査[けんさ]を受[う]けます。\nB: はい、こちらの窓口[まどぐち]で手続[てつづ]きを行[おこな]ってください。\nA: 書類[しょるい]に不備[ふび]があった際[さい]は、どうすればよいですか。\nB: その場[ば]で修正[しゅうせい]できますので、焦[あせ]らなくて結構[けっこう]です。",
    translation: "A: I have a question about customs declaration. B: Yes, what would you like to check? A: I'd like to know whether the electronic devices I brought in will be taxed. B: Items for personal use are exempt from tax, but if they're for sale they'll be taxed. A: Are sample goods treated as based on commercial use? B: Yes. However, you need to prove the commercial value based on documents. A: Setting aside food, are my other belongings fine? B: Yes. But, with the new regulation, lithium battery declaration has also become mandatory. A: Understood. Then I'll go through customs inspection. B: Yes, please complete the procedure at this counter. A: What should I do if there's an error in the documents? B: You can correct it on the spot, so there's no need to worry.",
    questions: [
      {
        q: "Which items are tax-exempt?",
        choices: ["Items for personal use", "Sample goods", "Electronic devices", "All food"],
        answerIndex: 0,
        explanation: "B says 個人[こじん]使用[しよう]向[む]きのものは免税[めんぜい]の対象[たいしょう] — items for personal use are tax-exempt."
      },
      {
        q: "What is required to prove commercial value for samples?",
        choices: ["A witness", "Documents", "A receipt from abroad", "A verbal statement"],
        answerIndex: 1,
        explanation: "B says 書類[しょるい]に基[もと]づいて商業[しょうぎょう]価値[かち]を証明[しょうめい]する必要[ひつよう] — must prove commercial value based on documents."
      },
      {
        q: "What new declaration became mandatory under the new regulation?",
        choices: ["Food items", "Clothing", "Lithium batteries", "Books"],
        answerIndex: 2,
        explanation: "B says リチウム電池[でんち]の申告[しんこく]も必須[ひっす]になりました — lithium battery declaration is now mandatory."
      },
      {
        q: "What can be done if there's an error in the documents?",
        choices: ["Request a resubmission", "Pay a fine", "Correct it on the spot", "Cancel the declaration"],
        answerIndex: 2,
        explanation: "B says その場[ば]で修正[しゅうせい]できます — can be corrected on the spot."
      }
    ],
    estMinutes: 5,
    tags: ["customs", "official"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-07 — A research presentation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-07",
    title: "Research Presentation",
    level: "N2",
    context: "A researcher presenting results to a senior examiner",
    text: "A: 本日[ほんじつ]は研究[けんきゅう]成果[せいか]を発表[はっぴょう]する機会[きかい]をいただき、感謝[かんしゃ]いたします。\nB: それでは、データに沿[そう]ってご説明[せつめい]ください。\nA: はい。今回[こんかい]の実験[じっけん]では、新手法[しんしゅほう]の有効性[ゆうこうせい]を検証[けんしょう]しました。\nB: 従来[じゅうらい]の手法[しゅほう]と比[くら]べて、どの程度[ていど]の改善[かいぜん]が見[み]られましたか。\nA: 処理[しょり]速度[そくど]が二倍[にばい]になったどころか、精度[せいど]も15パーセント向上[こうじょう]しました。\nB: それは素晴[すば]らしい。ただ、再現性[さいげんせい]を確保[かくほ]する際[さい]に、サンプルサイズは十分[じゅうぶん]でしたか。\nA: はい、千件[せんけん]以上[いじょう]のデータで検証[けんしょう]しております。\nB: 倫理[りんり]的[てき]な配慮[はいりょ]についても、説明[せつめい]をお願[ねが]いします。\nA: 個人情報[こじんじょうほう]は匿名[とくめい]化[か]した上[うえ]で使用[しよう]しており、規定[きてい]に沿[そう]って管理[かんり]しています。\nB: 承知[しょうち]いたしました。論文[ろんぶん]の提出[ていしゅつ]を楽[たの]しみにしています。",
    translation: "A: Thank you for giving me the opportunity to present my research results today. B: Then, please explain along with the data. A: Yes. In this experiment, we verified the effectiveness of the new method. B: Compared to the conventional method, how much improvement was observed? A: Not only did processing speed double, accuracy also improved by 15%. B: That's wonderful. But when ensuring reproducibility, was the sample size sufficient? A: Yes, we verified with data of over 1,000 cases. B: Please also explain your ethical considerations. A: Personal information was used after anonymization, and managed in accordance with regulations. B: Understood. I look forward to the submission of your paper.",
    questions: [
      {
        q: "What did A verify in this experiment?",
        choices: ["The cost reduction", "The effectiveness of the new method", "The market demand", "The user interface"],
        answerIndex: 1,
        explanation: "A says 新手法[しんしゅほう]の有効性[ゆうこうせい]を検証[けんしょう]しました — verified the effectiveness of the new method."
      },
      {
        q: "How much did accuracy improve?",
        choices: ["5%", "10%", "15%", "20%"],
        answerIndex: 2,
        explanation: "A says 精度[せいど]も15パーセント向上[こうじょう]しました — accuracy improved by 15%."
      },
      {
        q: "How many cases of data were used for verification?",
        choices: ["Over 100", "Over 500", "Over 1,000", "Over 10,000"],
        answerIndex: 2,
        explanation: "A says 千件[せんけん]以上[いじょう]のデータで検証[けんしょう] — verified with over 1,000 cases."
      },
      {
        q: "How was personal information handled?",
        choices: ["Deleted immediately", "Anonymized before use", "Sold to third parties", "Published openly"],
        answerIndex: 1,
        explanation: "A says 個人情報[こじんじょうほう]は匿名[とくめい]化[か]した上[うえ]で使用[しよう] — personal info was anonymized before use."
      }
    ],
    estMinutes: 6,
    tags: ["research", "presentation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-08 — Discussing a policy change
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-08",
    title: "Policy Change Discussion",
    level: "N2",
    context: "Two colleagues discussing a sudden workplace policy change",
    text: "A: 来月[らいげつ]から新[あたら]しい勤務[きんむ]制度[せいど]が導入[どうにゅう]されるそうですね。\nB: ええ。ただ、従業員[じゅうぎょういん]の意見[いけん]を聞[き]かずに決[き]めた点[てん]は問題[もんだい]だと思[おも]います。\nA: 私[わたし]も同感[どうかん]です。急[きゅう]な変更[へんこう]に従[したが]って、現場[げんば]が混乱[こんらん]しかねません。\nB: ええ。生産性[せいさんせい]が上[あ]がるどころか、一時的[いちじてき]に下[さ]がる恐[おそ]れがあります。\nA: 経営陣[けいえいじん]に再考[さいこう]を求[もと]めるべきでしょうか。\nB: はい。新制度[しんせいど]の実施[じっし]に先[さき]立[だ]って、説明会[せつめいかい]を開[ひら]くよう提案[ていあん]しましょう。\nA: 賛成[さんせい]です。少[すく]なくとも一[いっ]ヶ月[かげつ]の準備[じゅんび]期間[きかん]が必要[ひつよう]です。\nB: そうですね。パンフレットを作成[さくせい]して、全社員[ぜんしゃいん]に配[くば]りましょう。\nA: お願[ねが]いします。労働[ろうどう]組合[くみあい]とも連携[れんけい]します。\nB: ありがとうございます。団結[だんけつ]すれば、経営陣[けいえいじん]も無視[むし]できません。",
    translation: "A: I hear a new work system will be introduced from next month. B: Yes. But deciding without hearing employees' opinions is a problem, I think. A: I agree. Following the sudden change, the workplace could fall into confusion. B: Yes. Rather than productivity rising, it might temporarily drop. A: Should we ask management to reconsider? B: Yes. Before implementing the new system, let's propose holding an explanatory meeting. A: I'm for it. At least one month of preparation is needed. B: Right. Let's make a pamphlet and distribute it to all employees. A: Please. I'll also coordinate with the labor union. B: Thank you. If we unite, management can't ignore us.",
    questions: [
      {
        q: "What is the concern about the new system?",
        choices: ["It is too expensive", "It was decided without employee input", "It is too similar to the old one", "It only benefits managers"],
        answerIndex: 1,
        explanation: "B says 従業員[じゅうぎょういん]の意見[いけん]を聞[き]かずに決[き]めた点[てん]は問題[もんだい] — deciding without employee input is a problem."
      },
      {
        q: "What might happen due to the sudden change?",
        choices: ["Productivity will rise sharply", "The workplace could fall into confusion", "Costs will drop", "Employees will quit en masse"],
        answerIndex: 1,
        explanation: "A says 現場[げんば]が混乱[こんらん]しかねません — the workplace could fall into confusion."
      },
      {
        q: "What does B propose before implementing the new system?",
        choices: ["Hold an explanatory meeting", "Hire a consultant", "Cancel the system", "Delay it by a year"],
        answerIndex: 0,
        explanation: "B says 説明会[せつめいかい]を開[ひら]くよう提案[ていあん]しましょう — propose holding an explanatory meeting."
      },
      {
        q: "How long of a preparation period does A say is needed?",
        choices: ["At least one week", "At least two weeks", "At least one month", "At least three months"],
        answerIndex: 2,
        explanation: "A says 少[すく]なくとも一ヶ月[いっかげつ]の準備[じゅんび]期間[きかん]が必要[ひつよう] — at least one month is needed."
      }
    ],
    estMinutes: 5,
    tags: ["policy", "workplace"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-09 — A diplomatic conversation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-09",
    title: "Diplomatic Conversation",
    level: "N2",
    context: "Two diplomats coordinating an upcoming summit agenda",
    text: "A: 次回[じかい]の首脳[しゅのう]会談[かいだん]に向[む]けて、議題[ぎだい]を調整[ちょうせい]したいと思[おも]います。\nB: ええ。両国[りょうこく]の利益[りえき]を損[そこ]なわない限[かぎ]り、合意[ごうい]は可能[かのう]だと信[しん]じています。\nA: 経済[けいざい]協力[きょうりょく]を通[つう]じて、信頼[しんらい]関係[かんけい]を強化[きょうか]しましょう。\nB: 同意[どうい]します。ただ、領土[りょうど]問題[もんだい]は慎重[しんちょう]に扱[あつか]うべきです。\nA: もちろんです。今回[こんかい]の会談[かいだん]に当[あ]たっては、その点[てん]を最優先[さいゆうせん]にします。\nB: ありがとうございます。記者[きしゃ]団[だん]への対応[たいおう]も重要[じゅうよう]です。\nA: お任[まか]せください。共同[きょうどう]声明[せいめい]の文案[ぶんあん]は準備[じゅんび]済[ず]みです。\nB: それは助[たす]かります。成功[せいこう]すれば、両国[りょうこく]関係[かんけい]は新[あたら]たな段階[だんかい]に入[はい]るに違[ちが]いないですね。\nA: そうですね。互[たが]いに歩[あゆ]み寄[よ]る姿勢[しせい]が鍵[かぎ]です。\nB: ええ。友好[ゆうこう]の絆[きずな]を深[ふか]めていきましょう。",
    translation: "A: Toward the next summit, I'd like to coordinate the agenda. B: Yes. As long as it doesn't harm either country's interests, I believe agreement is possible. A: Let's strengthen trust through economic cooperation. B: I agree. However, the territorial issue should be handled carefully. A: Of course. On the occasion of this summit, I'll make that point the top priority. B: Thank you. Handling the press corps is also important. A: Leave it to me. The draft of the joint statement is ready. B: That helps. If it succeeds, relations between our countries will surely enter a new stage. A: Indeed. A mutual spirit of compromise is the key. B: Yes. Let's deepen the bonds of friendship.",
    questions: [
      {
        q: "What does B say agreement depends on?",
        choices: ["A public apology", "Not harming either country's interests", "An economic sanction", "A territorial concession"],
        answerIndex: 1,
        explanation: "B says 両国[りょうこく]の利益[りえき]を損[そこ]なわない限[かぎ]り、合意[ごうい]は可能[かのう] — as long as neither country's interests are harmed."
      },
      {
        q: "How does A propose strengthening trust?",
        choices: ["Through cultural exchange", "Through economic cooperation", "Through military alliance", "Through a joint press release"],
        answerIndex: 1,
        explanation: "A says 経済[けいざい]協力[きょうりょく]を通[つう]じて、信頼[しんらい]関係[かんけい]を強化[きょうか] — through economic cooperation."
      },
      {
        q: "Which issue does B say should be handled carefully?",
        choices: ["The trade deficit", "The territorial issue", "The visa policy", "The climate accord"],
        answerIndex: 1,
        explanation: "B says 領土[りょうど]問題[もんだい]は慎重[しんちょう]に扱[あつか]うべき — the territorial issue should be handled carefully."
      },
      {
        q: "What is ready according to A?",
        choices: ["The venue", "The press list", "The draft of the joint statement", "The security plan"],
        answerIndex: 2,
        explanation: "A says 共同[きょうどう]声明[せいめい]の文案[ぶんあん]は準備[じゅんび]済[ず]み — the joint statement draft is ready."
      }
    ],
    estMinutes: 6,
    tags: ["diplomacy", "politics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-10 — At the tax accountant
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-10",
    title: "At the Tax Accountant",
    level: "N2",
    context: "A business owner consulting a tax accountant about a tax return",
    text: "A: 今年[ことし]の確定[かくてい]申告[しんこく]について相談[そうだん]に来[き]ました。\nB: はい。売上[うりあげ]の増加[ぞうか]に伴[ともな]う経費[けいひ]の処理[しょり]が課題[かだい]ですね。\nA: ええ。新[あたら]しく設備[せつび]投資[とうし]を行[おこな]ったのですが、減価[げんか]償却[しょうきゃく]はどうなりますか。\nB: 税法[ぜいほう]に基[もと]づいて、法定[ほうてい]耐用[たいよう]年数[ねんすう]で按分[あんぶん]します。\nA: 分割[ぶんかつ]払[ばらい]の契約[けいやく]も終[お]わらせましたが、全額[ぜんがく]を一度[いちど]に計上[けいじょう]すべきでしょうか。\nB: いいえ。支払[しはらい]の状況[じょうきょう]に応[おう]じて、分割[ぶんかつ]で処理[しょり]するのが原則[げんそく]です。\nA: 扶養[ふよう]控除[こうじょ]の対象[たいしょう]になる家族[かぞく]が増[ふ]えたのですが。\nB: では、書類[しょるい]を提出[ていしゅつ]次第[しだい]、確実[かくじつ]に反映[はんえい]させましょう。\nA: ありがとうございます。節税[せつぜい]の方法[ほうほう]も教[おし]えていただけますか。\nB: もちろんです。法[ほう]の範囲[はんい]内[ない]で最大限[さいだいげん]の効果[こうか]を出[だ]します。",
    translation: "A: I've come to consult about this year's tax return. B: Yes. Handling expenses accompanying the rise in sales is the challenge. A: Yes. We made new equipment investments; how does depreciation work? B: Based on tax law, it's apportioned by the statutory useful life. A: We also finished the installment contract — should we record the full amount at once? B: No. As a rule, it's handled in installments according to the payment status. A: The family members eligible for dependent deductions have increased. B: Then, as soon as you submit the documents, we'll be sure to reflect it. A: Thank you. Could you also teach me tax-saving methods? B: Of course. We'll produce the maximum effect within the scope of the law.",
    questions: [
      {
        q: "What is the main challenge this year?",
        choices: ["Filing late", "Handling expenses tied to rising sales", "Hiring a new accountant", "Paying back taxes"],
        answerIndex: 1,
        explanation: "B says 売上[うりあげ]の増加[ぞうか]に伴[ともな]う経費[けいひ]の処理[しょり]が課題[かだい] — handling expenses accompanying rising sales."
      },
      {
        q: "How is depreciation handled?",
        choices: ["Recorded all at once", "Apportioned by statutory useful life", "Ignored for small items", "Capped at a flat rate"],
        answerIndex: 1,
        explanation: "B says 法定[ほうてい]耐用[たいよう]年数[ねんすう]で按分[あんぶん]します — apportioned by statutory useful life."
      },
      {
        q: "How should the installment contract be recorded?",
        choices: ["All at once", "In installments based on payment status", "Only at year-end", "As a single deduction"],
        answerIndex: 1,
        explanation: "B says 支払[しはらい]の状況[じょうきょう]に応[おう]じて、分割[ぶんかつ]で処理[しょり] — handled in installments according to payment status."
      },
      {
        q: "When will the dependent deduction be reflected?",
        choices: ["At the next fiscal year", "After an audit", "As soon as documents are submitted", "Within 90 days"],
        answerIndex: 2,
        explanation: "B says 書類[しょるい]を提出[ていしゅつ]次第[しだい]、確実[かくじつ]に反映[はんえい] — as soon as documents are submitted."
      }
    ],
    estMinutes: 5,
    tags: ["tax", "finance"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-11 — Discussing a patent
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-11",
    title: "Patent Discussion",
    level: "N2",
    context: "An inventor and a patent adviser discussing a new product filing",
    text: "A: 新製品[しんせいひん]の特許[とっきょ]出願[しゅつがん]について相談[そうだん]があります。\nB: はい。競合[きょうごう]他社[たしゃ]に先[さき]を越[こ]される恐[おそ]れがある限[かぎ]り、出願[しゅつがん]は急[いそ]ぐべきです。\nA: ええ。ただ、技術[ぎじゅつ]的[てき]な新規性[しんきせい]が十分[じゅうぶん]か心配[しんぱい]です。\nB: 先[さき]に調査[ちょうさ]を済[す]ませたところ、類似[るいじ]の特許[とっきょ]は見[み]つかりませんでした。\nA: それは安心[あんしん]しました。でも、権利[けんり]範囲[はんい]が狭[せま]すぎると効果的[こうかてき]どころか無意味[むいみ]になります。\nB: おっしゃる通[とお]りです。特許[とっきょ]弁理士[べんりし]と協議[きょうぎ]して範囲[はんい]を広[ひろ]げましょう。\nA: 海外[かいがい]への出願[しゅつがん]も視野[しや]に入[い]れたいのですが。\nB: ええ。PCT出願[しゅつがん]に先[さき]立[だ]って、戦略[せんりゃく]を立[た]てる必要[ひつよう]があります。\nA: 分[わ]かりました。来週[らいしゅう]までに資料[しりょう]をまとめます。\nB: ありがとうございます。特許[とっきょ]が認[みと]められれば、市場[しじょう]での優位[ゆうい]性[せい]は揺[ゆる]がないに違[ちが]いないですね。",
    translation: "A: I have a consultation about the patent application for the new product. B: Yes. As long as there's a risk of being overtaken by a competitor, we should hurry the application. A: Yes. But I'm worried whether the technical novelty is sufficient. B: I completed a search beforehand, and no similar patents were found. A: That's a relief. But if the claim scope is too narrow, rather than being effective it becomes meaningless. B: You're right. Let's consult a patent attorney and broaden the scope. A: I'd also like to consider overseas filings. B: Yes. Before a PCT filing, we need to set a strategy. A: Understood. I'll put together the materials by next week. B: Thank you. If the patent is granted, our market advantage will surely be unshakable.",
    questions: [
      {
        q: "Why should the patent application be hurried?",
        choices: ["Risk of being beaten by a competitor", "The product launch is near", "The lawyer is retiring", "The filing fee will rise"],
        answerIndex: 0,
        explanation: "B says 競合[きょうごう]他社[たしゃ]に先[さき]を越[こ]される恐[おそ]れがある限[かぎ]り、出願[しゅつがん]は急[いそ]ぐべき — should hurry due to the risk of being overtaken."
      },
      {
        q: "What did B's prior search find?",
        choices: ["Many similar patents", "One similar patent", "No similar patents", "A pending challenge"],
        answerIndex: 2,
        explanation: "B says 類似[るいじ]の特許[とっきょ]は見[み]つかりませんでした — no similar patents found."
      },
      {
        q: "What happens if the claim scope is too narrow?",
        choices: ["It becomes meaningless", "It becomes too broad", "It becomes free to use", "It becomes invalid immediately"],
        answerIndex: 0,
        explanation: "A says 範囲[はんい]が狭[せま]すぎると効果的[こうかてき]どころか無意味[むいみ]になります — if too narrow, it becomes meaningless."
      },
      {
        q: "What is needed before a PCT filing?",
        choices: ["A strategy", "A marketing campaign", "A factory tour", "A press release"],
        answerIndex: 0,
        explanation: "B says PCT出願[しゅつがん]に先[さき]立[だ]って、戦略[せんりゃく]を立[た]てる必要[ひつよう] — a strategy must be set before a PCT filing."
      }
    ],
    estMinutes: 5,
    tags: ["patent", "legal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-12 — A marketing analysis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-12",
    title: "Marketing Analysis",
    level: "N2",
    context: "A marketing analyst presenting quarterly results to a manager",
    text: "A: 今四半期[こんしはんき]のマーケティング結果[けっか]を分析[ぶんせき]しました。\nB: ありがとうございます。データに基[もと]づいて結論[けつろん]を聞[き]かせてください。\nA: 若者[わかもの]向[む]きのキャンペーンが最[もっと]も効果的[こうかてき]でした。\nB: なるほど。SNSの活用[かつよう]が鍵[かぎ]だったと言[い]えますね。\nA: ええ。ただ、中高年[ちゅうこうねん]の反応[はんのう]は鈍[にぶ]く、売上[うりあげ]に結[むす]びつき切[き]っていません。\nB: その層[そう]に届[とど]くには、テレビCMがまだ有効[ゆうこう]に違[ちが]いないですね。\nA: 私[わたし]もそう思[おも]います。来期[らいき]は予算[よさん]の配分[はいぶん]を見直[みなお]すべきです。\nB: 賛成[さんせい]です。少[すく]なくとも2割[わり]をテレビCMに回[まわ]しましょう。\nA: 承知[しょうち]いたしました。新[あたら]しい戦略[せんりゃく]案[あん]を来週[らいしゅう]提出[ていしゅつ]します。\nB: お願[ねが]いします。ROIの計測[けいそく]も忘[わす]れないでください。",
    translation: "A: I've analyzed this quarter's marketing results. B: Thank you. Tell me your conclusions based on the data. A: The campaign aimed at young people was the most effective. B: I see. We can say SNS use was the key. A: Yes. But middle-aged and older people's response was sluggish, and it hasn't fully translated into sales. B: To reach that segment, TV commercials must still be effective. A: I think so too. Next quarter we should review the budget allocation. B: I agree. Let's shift at least 20% to TV commercials. A: Understood. I'll submit a new strategy proposal next week. B: Please. Don't forget to measure ROI either.",
    questions: [
      {
        q: "Which campaign was most effective?",
        choices: ["One aimed at seniors", "One aimed at young people", "One aimed at children", "One aimed at businesses"],
        answerIndex: 1,
        explanation: "A says 若者[わかもの]向[む]きのキャンペーンが最[もっと]も効果的[こうかてき] — the youth-oriented campaign was most effective."
      },
      {
        q: "What was the key to the success?",
        choices: ["TV commercials", "Print ads", "SNS use", "Discount coupons"],
        answerIndex: 2,
        explanation: "B says SNSの活用[かつよう]が鍵[かぎ] — SNS use was the key."
      },
      {
        q: "What problem did A note about middle-aged/older customers?",
        choices: ["They unsubscribed en masse", "Sluggish response, not fully linked to sales", "They filed complaints", "They preferred rival brands"],
        answerIndex: 1,
        explanation: "A says 中高年[ちゅうこうねん]の反応[はんのう]は鈍[にぶ]く、売上[うりあげ]に結[むす]びつき切[き]っていません — sluggish response, not fully tied to sales."
      },
      {
        q: "How much budget should shift to TV commercials?",
        choices: ["At least 5%", "At least 10%", "At least 20%", "At least 50%"],
        answerIndex: 2,
        explanation: "B says 少[すく]なくとも2割[わり]をテレビCMに回[まわ]しましょう — shift at least 20% to TV commercials."
      }
    ],
    estMinutes: 5,
    tags: ["marketing", "analysis"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-13 — At the employment tribunal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-13",
    title: "At the Employment Tribunal",
    level: "N2",
    context: "A dismissed worker and an arbitrator at a labor hearing",
    text: "A: 解雇[かいこ]の無効[むこう]を訴[うった]えて仲裁[ちゅうさい]を申請[しんせい]しました。\nB: はい。労働[ろうどう]契約[けいやく]法[ほう]に基[もと]づいて審理[しんり]を行[おこな]います。\nA: 解雇[かいこ]の理由[りゆう]として、会社[かいしゃ]は業績[ぎょうせき]悪化[あっか]を主張[しゅちょう]しています。\nB: ただ、その根拠[こんきょ]は一部[いちぶ]の資料[しりょう]に過[す]ぎません。\nA: 私[わたし]の業績評価[ぎょうせきひょうか]は良好[りょうこう]でした。\nB: その点[てん]を立証[りっしょう]する際[さい]に、評価[ひょうか]シートは有力[ゆうりょく]な証拠[しょうこ]になります。\nA: 同僚[どうりょう]の証言[しょうげん]も得[え]られましたが、十分[じゅうぶん]でしょうか。\nB: はい。ただ、心情[しんじょう]的[てき]な訴[うった]えだけでは納得[なっとく]しきれない可能性[かのうせい]があります。\nA: 分[わ]かりました。客観的[きゃっかんてき]なデータを追加[ついか]して提出[ていしゅつ]します。\nB: 結構[けっこう]です。次回[じかい]の審理[しんり]は来月[らいげつ]の十五日[じゅうごにち]です。",
    translation: "A: I'm seeking arbitration to claim my dismissal is invalid. B: Yes. We'll conduct the hearing based on the Labor Contract Act. A: As the reason for dismissal, the company claims deteriorating performance. B: However, that basis is no more than a portion of the documents. A: My performance evaluations were favorable. B: When proving that point, the evaluation sheets become strong evidence. A: I also obtained a colleague's testimony — is that enough? B: Yes. But an emotional appeal alone may not be fully convincing. A: Understood. I'll add objective data and submit it. B: That's fine. The next hearing is the 15th of next month.",
    questions: [
      {
        q: "What is A seeking?",
        choices: ["A salary raise", "Arbitration to invalidate the dismissal", "A transfer to another dept", "An apology letter"],
        answerIndex: 1,
        explanation: "A says 解雇[かいこ]の無効[むこう]を訴[うった]えて仲裁[ちゅうさい]を申請[しんせい] — seeking arbitration to invalidate the dismissal."
      },
      {
        q: "What reason does the company give for dismissal?",
        choices: ["Misconduct", "Deteriorating performance", "Restructuring", "Absence"],
        answerIndex: 1,
        explanation: "A says 会社[かいしゃ]は業績[ぎょうせき]悪化[あっか]を主張[しゅちょう] — the company claims deteriorating performance."
      },
      {
        q: "What does B say about the company's basis?",
        choices: ["It's rock solid", "It's only part of the documents", "It's fabricated", "It's confidential"],
        answerIndex: 1,
        explanation: "B says その根拠[こんきょ]は一部[いちぶ]の資料[しりょう]に過[す]ぎません — no more than part of the documents."
      },
      {
        q: "When is the next hearing?",
        choices: ["The 5th of next month", "The 10th of next month", "The 15th of next month", "The 25th of next month"],
        answerIndex: 2,
        explanation: "B says 次回[じかい]の審理[しんり]は来月[らいげつ]の十五日[じゅうごにち] — next hearing is the 15th of next month."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "employment"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-14 — Discussing a stock investment
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-14",
    title: "Stock Investment Discussion",
    level: "N2",
    context: "An investor and an adviser discussing a new stock pick",
    text: "A: 次[つぎ]の投資[とうし]先[さき]について相談[そうだん]したいのですが。\nB: ええ。ただ、市場[しじょう]の不安[ふあん]が続[つづ]く限[かぎ]り、慎重[しんちょう]に進[すす]めるべきです。\nA: この技術[ぎじゅつ]株[かぶ]は将来[しょうらい]性[せい]が高[たか]いと思[おも]います。\nB: たしかに。ただ、決算[けっさん]次第[しだい]で株価[かぶか]が急落[きゅうらく]する恐[おそ]れもあります。\nA: リスクを分散[ぶんさん]させるため、複数[ふくすう]の銘柄[めいがら]に分[わ]けましょう。\nB: 賛成[さんせい]です。一[ひと]つの銘柄[めいがら]に集中[しゅうちゅう]するのは危険[きけん]どころか致命的[ちめいてき]です。\nA: 配当[はいとう]利回[りまわ]りも重視[じゅうし]したいのですが。\nB: もちろんです。長期[ちょうき]保有[ほゆう]を前提[ぜんてい]に選[えら]べば、安定[あんてい]収入[しゅうにゅう]になるに違[ちが]いないですね。\nA: 分[わ]かりました。来週[らいしゅう]、詳細[しょうさい]なポートフォリオを提案[ていあん]します。\nB: ありがとうございます。感情[かんじょう]に流[なが]されず、データで判断[はんだん]しましょう。",
    translation: "A: I'd like to consult about the next investment target. B: Yes. But as long as market unease continues, we should proceed cautiously. A: I think this tech stock has high growth potential. B: True. But depending on earnings, the share price could plunge. A: To diversify risk, let's split across multiple issues. B: I agree. Concentrating on one issue isn't just risky, it's fatal. A: I'd also like to emphasize dividend yield. B: Of course. If we choose assuming long-term holding, it'll surely become stable income. A: Understood. I'll propose a detailed portfolio next week. B: Thank you. Let's judge with data, not swayed by emotion.",
    questions: [
      {
        q: "How should they proceed given market unease?",
        choices: ["Aggressively", "Cautiously", "Passively", "Immediately"],
        answerIndex: 1,
        explanation: "B says 市場[しじょう]の不安[ふあん]が続[つづ]く限[かぎ]り、慎重[しんちょう]に進[すす]めるべき — should proceed cautiously."
      },
      {
        q: "What could happen depending on earnings?",
        choices: ["The dividend could double", "The share price could plunge", "The company could be acquired", "The stock could be delisted"],
        answerIndex: 1,
        explanation: "B says 決算[けっさん]次第[しだい]で株価[かぶか]が急落[きゅうらく]する恐[おそ]れ — the share price could plunge."
      },
      {
        q: "Why split across multiple issues?",
        choices: ["To maximize returns", "To diversify risk", "To lower fees", "To follow trends"],
        answerIndex: 1,
        explanation: "A says リスクを分散[ぶんさん]させるため — to diversify risk."
      },
      {
        q: "What assumption makes a stock stable income?",
        choices: ["Short-term trading", "Long-term holding", "Margin buying", "Frequent selling"],
        answerIndex: 1,
        explanation: "B says 長期[ちょうき]保有[ほゆう]を前提[ぜんてい]に選[えら]べば、安定[あんてい]収入[しゅうにゅう]になる — if chosen assuming long-term holding."
      }
    ],
    estMinutes: 4,
    tags: ["finance", "investment"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-15 — A real estate deal
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-15",
    title: "Real Estate Deal",
    level: "N2",
    context: "A buyer and a real-estate agent finalizing a property purchase",
    text: "A: この物件[ぶっけん]の購入[こうにゅう]を検討[けんとう]しています。\nB: ありがとうございます。ただ、現行[げんこう]の法規[ほうき]に基[もと]づいて、耐震[たいしん]基準[きじゅん]を確認[かくにん]する必要[ひつよう]があります。\nA: もちろんです。物件[ぶっけん]の瑕疵[かし]担保[たんぽ]保険[ほけん]には加入[かにゅう]済[ず]みです。\nB: 結構[けっこう]です。購入[こうにゅう]に先[さき]立[だ]って、土地[とち]の境界[きょうかい]確認[かくにん]も行[おこな]いましょう。\nA: ええ。境界[きょうかい]に問題[もんだい]がない限[かぎ]り、契約[けいやく]に進[すす]めます。\nB: 承知[しょうち]いたしました。融資[ゆうし]の承認[しょうにん]が下[お]り次第[しだい]、手続[てつづ]きを完了[かんりょう]します。\nA: ローンの金利[きんり]が上[あ]がりそうで心配[しんぱい]です。\nB: ええ。固定[こてい]金利[きんり]にすれば、将来[しょうらい]の負担[ふたん]を防[ふせ]げるに違[ちが]いないですね。\nA: では、固定[こてい]金利[きんり]で申請[しんせい]します。\nB: かしこまりました。来週中[らいしゅうちゅう]に仮審査[かりしんさ]の結果[けっか]が出[で]ます。",
    translation: "A: I'm considering purchasing this property. B: Thank you. But based on current regulations, we need to confirm the seismic standards. A: Of course. The property is already covered by defect insurance. B: Good. Before purchase, let's also confirm the land boundary. A: Yes. As long as there's no boundary problem, we'll proceed to the contract. B: Understood. As soon as loan approval comes through, I'll complete the procedure. A: I'm worried that mortgage rates may rise. B: Yes. If you switch to a fixed rate, it'll surely prevent future burden. A: Then I'll apply with a fixed rate. B: Understood. The pre-screening result will come out within next week.",
    questions: [
      {
        q: "What must be confirmed based on current regulations?",
        choices: ["Property tax", "Seismic standards", "Boundary lines", "Insurance coverage"],
        answerIndex: 1,
        explanation: "B says 耐震[たいしん]基準[きじゅん]を確認[かくにん]する必要[ひつよう] — need to confirm seismic standards."
      },
      {
        q: "What is already done for the property?",
        choices: ["Boundary survey", "Defect insurance is enrolled", "Loan approval", "Title transfer"],
        answerIndex: 1,
        explanation: "A says 瑕疵[かし]担保[たんぽ]保険[ほけん]には加入[かにゅう]済[ず]み — defect insurance is enrolled."
      },
      {
        q: "When will the contract proceed?",
        choices: ["Once the loan is approved", "As long as there's no boundary problem", "After the rate is fixed", "Once insurance is bought"],
        answerIndex: 1,
        explanation: "A says 境界[きょうかい]に問題[もんだい]がない限[かぎ]り、契約[けいやく]に進[すす]めます — as long as there's no boundary problem."
      },
      {
        q: "When will the pre-screening result come out?",
        choices: ["Within this week", "Within next week", "Within two weeks", "Within one month"],
        answerIndex: 1,
        explanation: "B says 来週中[らいしゅうちゅう]に仮審査[かりしんさ]の結果[けっか]が出[で]ます — within next week."
      }
    ],
    estMinutes: 5,
    tags: ["realestate", "finance"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-16 — At the notary office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-16",
    title: "At the Notary Office",
    level: "N2",
    context: "A client and a notary preparing a notarized will",
    text: "A: 遺言[ゆいごん]書[しょ]の公正[こうせい]証書[しょうしょ]を作成[さくせい]したいのですが。\nB: はい。民法[みんぽう]に基[もと]づいて手続[てつづ]きを進[すす]めます。\nA: 必要[ひつよう]な書類[しょるい]は何[なに]でしょうか。\nB: 戸籍[こせき]謄本[とうほん]と印鑑[いんかん]証明[しょうめい]書[しょ]が必要[ひつよう]です。\nA: 財産[ざいさん]を分配[ぶんぱい]する際[さい]、特別[とくべつ]受益[じゅえき]はどう扱[あつか]われますか。\nB: それは遺言[ゆいごん]の一部[いちぶ]に過[す]ぎず、全体[ぜんたい]の調整[ちょうせい]が必要[ひつよう]です。\nA: 公正[こうせい]証書[しょうしょ]にする利益[りえき]は何[なに]ですか。\nB: ええ。後[のち]の紛争[ふんそう]を防[ふせ]ぐのに極[きわ]めて有効[ゆうこう]です。\nA: 分[わ]かりました。証人[しょうにん]二人[ふたり]の立会[たちあ]いも必要[ひつよう]ですね。\nB: はい。署名[しょめい]に先[さき]立[だ]って、本人[ほんにん]確認[かくにん]を行[おこな]います。\nA: 来週[らいしゅう]、全[すべ]ての書類[しょるい]を持[も]って来[き]ます。\nB: ありがとうございます。当日[とうじつ]は三十分[さんじゅっぷん]ほどで完了[かんりょう]する予定[よてい]です。",
    translation: "A: I'd like to create a notarized will. B: Yes. We'll proceed based on the Civil Code. A: What documents are required? B: A family register copy and a registered-seal certificate are needed. A: When distributing assets, how are special benefits treated? B: That is no more than part of the will; overall adjustment is needed. A: What's the benefit of making it a notarized document? B: Well. It's extremely effective for preventing later disputes. A: Understood. Two witnesses are also required, right? B: Yes. Before signing, we'll verify identity. A: I'll bring all the documents next week. B: Thank you. It should be completed in about 30 minutes on the day.",
    questions: [
      {
        q: "What does A want to create?",
        choices: ["A power of attorney", "A notarized will", "A marriage contract", "A land deed"],
        answerIndex: 1,
        explanation: "A says 遺言[ゆいごん]書[しょ]の公正[こうせい]証書[しょうしょ]を作成[さくせい]したい — wants to create a notarized will."
      },
      {
        q: "Which two documents are required?",
        choices: ["Passport and driver's license", "Family register copy and registered-seal certificate", "Tax return and bank statement", "Birth certificate and ID"],
        answerIndex: 1,
        explanation: "B says 戸籍[こせき]謄本[とうほん]と印鑑[いんかん]証明[しょうめい]書[しょ]が必要[ひつよう] — family register copy and registered-seal certificate."
      },
      {
        q: "How does B describe the special benefits clause?",
        choices: ["The whole will", "No more than part of the will", "An invalid clause", "An optional note"],
        answerIndex: 1,
        explanation: "B says それは遺言[ゆいごん]の一部[いちぶ]に過[す]ぎず — no more than part of the will."
      },
      {
        q: "How long will it take on the day?",
        choices: ["About 10 minutes", "About 30 minutes", "About 1 hour", "About 2 hours"],
        answerIndex: 1,
        explanation: "B says 当日[とうじつ]は三十分[さんじゅっぷん]ほどで完了[かんりょう]する — about 30 minutes."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "notary"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-17 — Discussing a quality audit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-17",
    title: "Quality Audit Discussion",
    level: "N2",
    context: "A quality manager and an auditor preparing for ISO recertification",
    text: "A: 来週[らいしゅう]の品質[ひんしつ]監査[かんさ]に向[む]けて、準備[じゅんび]を進[すす]めています。\nB: ありがとうございます。ISO規格[きかく]に基[もと]づいて、全[すべ]ての工程[こうてい]を見直[みなお]しました。\nA: 不適合[ふてきごう]件数[けんすう]は昨年度[さくねんど]比[ひ]3割[わり]減[げん]です。\nB: それは素晴[すば]らしい。ただ、文書[ぶんしょ]管理[かんり]がまだ不十分[ふじゅうぶん]な箇所[かしょ]があります。\nA: 承知[しょうち]いたしました。監査[かんさ]に先[さき]立[だ]って、修正[しゅうせい]します。\nB: ええ。指摘[してき]事項[じこう]の対応[たいおう]次第[しだい]で、認証[にんしょう]の更新[こうしん]が決[き]まります。\nA: 現場[げんば]の研修[けんしゅう]も強化[きょうか]しました。\nB: 良[よ]かったです。ただ、一部[いちぶ]の社員[しゃいん]は理解[りかい]しきれていないかもしれません。\nA: では、追加[ついか]研修[けんしゅう]を今週末[こんしゅうまつ]に実施[じっし]します。\nB: お願[ねが]いします。完璧[かんぺき]な状態[じょうたい]で監査[かんさ]に臨[のぞ]みましょう。",
    translation: "A: We're preparing for next week's quality audit. B: Thank you. Based on ISO standards, we've reviewed all processes. A: Non-conformity cases are down 30% year-on-year. B: That's wonderful. But document management is still insufficient in some areas. A: Understood. Before the audit, we'll correct them. B: Yes. Depending on how we address the points raised, certification renewal will be decided. A: We've also strengthened on-site training. B: Good. But some employees may not fully understand it. A: Then I'll conduct additional training at the end of this week. B: Please. Let's face the audit in a perfect state.",
    questions: [
      {
        q: "What did B review based on ISO standards?",
        choices: ["All processes", "Only the assembly line", "Only the packaging", "Only the shipping"],
        answerIndex: 0,
        explanation: "B says ISO規格[きかく]に基[もと]づいて、全[すべ]ての工程[こうてい]を見直[みなお]しました — reviewed all processes."
      },
      {
        q: "By how much did non-conformity cases decrease?",
        choices: ["10%", "20%", "30%", "50%"],
        answerIndex: 2,
        explanation: "A says 不適合[ふてきごう]件数[けんすう]は昨年度[さくねんど]比[ひ]3割[わり]減[げん] — down 30% year-on-year."
      },
      {
        q: "What is still insufficient?",
        choices: ["On-site training", "Document management in some areas", "ISO certification", "Equipment calibration"],
        answerIndex: 1,
        explanation: "B says 文書[ぶんしょ]管理[かんり]がまだ不十分[ふじゅうぶん]な箇所[かしょ]があります — document management is still insufficient in some areas."
      },
      {
        q: "What will certification renewal depend on?",
        choices: ["The audit fee", "How points raised are addressed", "The auditor's mood", "The company's size"],
        answerIndex: 1,
        explanation: "B says 指摘[してき]事項[じこう]の対応[たいおう]次第[しだい]で、認証[にんしょう]の更新[こうしん]が決[き]まります — depends on how points are addressed."
      }
    ],
    estMinutes: 5,
    tags: ["audit", "quality"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-18 — A PR crisis meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-18",
    title: "PR Crisis Meeting",
    level: "N2",
    context: "A PR director and a communications lead handling a scandal",
    text: "A: 昨夜[さくや]の報道[ほうどう]に関[かん]する緊急[きんきゅう]会議[かいぎ]を始[はじ]めます。\nB: ええ。否定的[ひていてき]な報道[ほうどう]に伴[ともな]う株価[かぶか]の下落[げらく]は深刻[しんこく]です。\nA: SNSでの拡散[かくさん]も止[と]まらず、炎上[えんじょう]状態[じょうたい]が続[つづ]いています。\nB: このままでは、ブランドイメージが崩壊[ほうかい]するどころか、倒産[とうさん]しかねません。\nA: まずは事実[じじつ]関係[かんけい]を調査[ちょうさ]し、公式[こうしき]に発表[はっぴょう]しましょう。\nB: 賛成[さんせい]です。発表[はっぴょう]内容[ないよう]次第[しだい]で、世論[よろん]の反応[はんのう]が変[か]わります。\nA: CEOからの謝罪[しゃざい]も必要[ひつよう]でしょうか。\nB: はい。誠意[せいい]を示[しめ]す限[かぎ]り、信頼[しんらい]回復[かいふく]の道[みち]はあります。\nA: 分[わ]かりました。今夜中[こんやちゅう]に声明[せいめい]文[ぶん]を起草[きそう]します。\nB: お願[ねが]いします。記者[きしゃ]会見[かいけん]は明日[あした]の午後[ごご]に設定[せってい]しました。",
    translation: "A: Let's begin the emergency meeting regarding last night's news coverage. B: Yes. The stock price drop accompanying the negative coverage is serious. A: The spread on SNS hasn't stopped, and the firestorm continues. B: At this rate, rather than just the brand image collapsing, the company could go bankrupt. A: Let's first investigate the facts and make an official announcement. B: I agree. Depending on the announcement content, public opinion's response will change. A: Is an apology from the CEO also needed? B: Yes. As long as we show sincerity, there's a path to restoring trust. A: Understood. I'll draft a statement by tonight. B: Please. The press conference is set for tomorrow afternoon.",
    questions: [
      {
        q: "What is serious according to B?",
        choices: ["The CEO's health", "The stock price drop from negative coverage", "A competitor's move", "A supplier delay"],
        answerIndex: 1,
        explanation: "B says 否定的[ひていてき]な報道[ほうどう]に伴[ともな]う株価[かぶか]の下落[げらく]は深刻[しんこく] — the stock drop from negative coverage is serious."
      },
      {
        q: "What could happen at this rate?",
        choices: ["The CEO could resign", "The company could go bankrupt", "Sales could triple", "The brand could strengthen"],
        answerIndex: 1,
        explanation: "B says ブランドイメージが崩壊[ほうかい]するどころか、倒産[とうさん]しかねません — the company could go bankrupt."
      },
      {
        q: "What will public response depend on?",
        choices: ["The CEO's tone of voice", "The announcement content", "The stock price that day", "The number of reporters"],
        answerIndex: 1,
        explanation: "B says 発表[はっぴょう]内容[ないよう]次第[しだい]で、世論[よろん]の反応[はんのう]が変[か]わります — depends on announcement content."
      },
      {
        q: "When is the press conference?",
        choices: ["Tonight", "Tomorrow morning", "Tomorrow afternoon", "Next week"],
        answerIndex: 2,
        explanation: "B says 記者[きしゃ]会見[かいけん]は明日[あした]の午後[ごご]に設定[せってい]しました — tomorrow afternoon."
      }
    ],
    estMinutes: 4,
    tags: ["PR", "crisis"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-19 — At the compliance office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-19",
    title: "At the Compliance Office",
    level: "N2",
    context: "An internal reporter and a compliance officer reviewing a violation",
    text: "A: 社内[しゃない]のコンプライアンス違反[いはん]について報告[ほうこく]します。\nB: ありがとうございます。事実[じじつ]に基[もと]づいて、詳[くわ]しく話[はな]してください。\nA: 営業[えいぎょう]部[ぶ]が接待[せったい]費[ひ]を過大[かだい]に計上[けいじょう]していました。\nB: それは重大[じゅうだい]な問題[もんだい]です。ただ、発覚[はっかく]したのは一部[いちぶ]に過[す]ぎません。\nA: 調査[ちょうさ]を進[すす]める限[かぎ]り、他[ほか]の部門[ぶもん]にも及[およ]んでいます。\nB: では、全社的[ぜんしゃてき]な監査[かんさ]を行[おこな]いましょう。\nA: 内部[ないぶ]通報[つうほう]者[しゃ]の保護[ほご]も徹底[てってい]すべきです。\nB: もちろんです。報告[ほうこく]内容[ないよう]次第[しだい]で、懲戒[ちょうかい]処分[しょぶん]を決[き]定[てい]します。\nA: 法執行[ほうしっこう]機関[きかん]への通報[つうほう]も視野[しや]に入[い]れますか。\nB: ええ。社内[しゃない]処理[しょり]だけでは不十分[ふじゅうぶん]な場合[ばあい]は、外部[がいぶ]に委[ゆだ]ねます。\nA: 分[わ]かりました。来週[らいしゅう]、詳細[しょうさい]な報告書[ほうこくしょ]を提出[ていしゅつ]します。\nB: お願[ねが]いします。再発[さいはつ]防止[ぼうし]策[さく]も忘[わす]れないでください。",
    translation: "A: I'm reporting an internal compliance violation. B: Thank you. Please speak in detail based on the facts. A: The sales department overstated entertainment expenses. B: That's a serious problem. But what's come to light is no more than a part. A: As far as the investigation goes, it extends to other departments too. B: Then let's conduct a company-wide audit. A: Protection of internal whistleblowers should also be thorough. B: Of course. Depending on the report content, disciplinary action will be decided. A: Should we also consider notifying law-enforcement agencies? B: Yes. If internal handling alone is insufficient, we'll entrust it externally. A: Understood. I'll submit a detailed report next week. B: Please. Don't forget measures to prevent recurrence.",
    questions: [
      {
        q: "What did the sales department do?",
        choices: ["Underreported sales", "Overstated entertainment expenses", "Falsified contracts", "Hired without approval"],
        answerIndex: 1,
        explanation: "A says 営業[えいぎょう]部[ぶ]が接待[せったい]費[ひ]を過大[かだい]に計上[けいじょう] — overstated entertainment expenses."
      },
      {
        q: "How does B describe what's come to light so far?",
        choices: ["The entire violation", "No more than a part", "A false rumor", "An isolated error"],
        answerIndex: 1,
        explanation: "B says 発覚[はっかく]したのは一部[いちぶ]に過[す]ぎません — no more than a part."
      },
      {
        q: "What does A say the investigation shows?",
        choices: ["It's limited to sales", "It extends to other departments", "It's already resolved", "It's a minor issue"],
        answerIndex: 1,
        explanation: "A says 他[ほか]の部門[ぶもん]にも及[およ]んでいます — it extends to other departments."
      },
      {
        q: "What will disciplinary action depend on?",
        choices: ["The CEO's decision", "The report content", "The stock price", "External media"],
        answerIndex: 1,
        explanation: "B says 報告[ほうこく]内容[ないよう]次第[しだい]で、懲戒[ちょうかい]処分[しょぶん]を決[き]定[てい]します — depends on report content."
      }
    ],
    estMinutes: 5,
    tags: ["compliance", "legal"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-20 — Discussing a supply chain
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-20",
    title: "Supply Chain Discussion",
    level: "N2",
    context: "A procurement lead and a manager addressing supply delays",
    text: "A: 供給[きょうきゅう]連鎖[れんさ]の遅延[ちえん]について協議[きょうぎ]したいのですが。\nB: ええ。原材料[げんざいりょう]の高騰[こうとう]に伴[ともな]うコスト上昇[じょうしょう]は深刻[しんこく]です。\nA: 現在[げんざい]、代替[だいたい]サプライヤーを探[さが]しています。\nB: 良[よ]かったです。ただ、品質[ひんしつ]が保[たも]てる限[かぎ]り、安易[あんい]に変[か]えるべきではありません。\nA: もちろんです。サンプル検査[けんさ]の結果[けっか]次第[しだい]で決定[けってい]します。\nB: ええ。現行[げんこう]の契約[けいやく]を更新[こうしん]するどころか、見直[みなお]す必要[ひつよう]があります。\nA: 在庫[ざいこ]管理[かんり]の最適化[さいてきか]も並行[へいこう]して進[すす]めましょう。\nB: 賛成[さんせい]です。需要[じゅよう]予測[よそく]の精度[せいど]を上[あ]げれば、無駄[むだ]を減[へ]らせるに違[ちが]いないですね。\nA: 来月[らいげつ]までに新[あたら]しい調達[ちょうたつ]戦略[せんりゃく]を提示[ていじ]します。\nB: ありがとうございます。顧客[こきゃく]への影響[えいきょう]も最小限[さいしょうげん]に留[とど]めましょう。",
    translation: "A: I'd like to discuss the delay in the supply chain. B: Yes. The cost rise accompanying the soaring raw-material prices is serious. A: We're currently searching for alternative suppliers. B: Good. But as long as quality can be maintained, we shouldn't change easily. A: Of course. We'll decide based on the sample-inspection results. B: Yes. Rather than just renewing the current contract, we need to review it. A: Let's also optimize inventory management in parallel. B: I agree. If we improve demand-forecast accuracy, we'll surely cut waste. A: I'll present a new procurement strategy by next month. B: Thank you. Let's also minimize the impact on customers.",
    questions: [
      {
        q: "What is serious according to B?",
        choices: ["A labor shortage", "The cost rise from soaring raw-material prices", "A delivery error", "A quality defect"],
        answerIndex: 1,
        explanation: "B says 原材料[げんざいりょう]の高騰[こうとう]に伴[ともな]うコスト上昇[じょうしょう]は深刻[しんこく] — the cost rise from soaring raw-material prices is serious."
      },
      {
        q: "What is A currently doing?",
        choices: ["Cutting production", "Searching for alternative suppliers", "Raising prices", "Laying off staff"],
        answerIndex: 1,
        explanation: "A says 代替[だいたい]サプライヤーを探[さが]しています — searching for alternative suppliers."
      },
      {
        q: "What will the decision depend on?",
        choices: ["The CEO's opinion", "Sample-inspection results", "The exchange rate", "Customer surveys"],
        answerIndex: 1,
        explanation: "A says サンプル検査[けんさ]の結果[けっか]次第[しだい]で決定[けってい]します — based on sample-inspection results."
      },
      {
        q: "What will surely happen if demand-forecast accuracy improves?",
        choices: ["Waste will be cut", "Costs will double", "Suppliers will quit", "Quality will drop"],
        answerIndex: 0,
        explanation: "B says 需要[じゅよう]予測[よそく]の精度[せいど]を上[あ]げれば、無駄[むだ]を減[へ]らせるに違[ちが]いない — waste will surely be cut."
      }
    ],
    estMinutes: 5,
    tags: ["supplychain", "business"]
  }
];
