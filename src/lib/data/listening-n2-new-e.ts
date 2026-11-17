import type { ListeningData } from "@/lib/types";

// N2 listening exercises set E (new batch).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N2 grammar targets: 〜に先立って, 〜一方で, 〜とはいうものの, 〜つつある,
// 〜どころか, 〜すら, 〜に基づいて, 〜限り, 〜とはいえ, 〜かねない,
// 〜に伴う, 〜において, 〜次第, 〜に過ぎない, 〜からには, etc.

export const listeningN2NewE: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n2n-81 — A cultural property debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-81",
    title: "Cultural Property Debate",
    level: "N2",
    context: "A cultural agency official and a city council member debating a shrine's preservation",
    text: "A: 来月[らいげつ]の文化財[ぶんかざい]登録[とうろく]に先立[さきだ]って、意見[いけん]を交換[こうかん]したい。\nB: ええ。あの神社[じんじゃ]は保存[ほぞん]すべきだという声[こえ]が多[おお]い一方[いっぽう]で、開発[かいはつ]派[は]も根強[ねづよ]いです。\nA: 歴史的[れきしてき]価値[かち]に鑑[かんが]みれば、登録[とうろく]は当然[とうぜん]と言[い]わざるを得[え]ません。\nB: とは言[い]うものの、維持[いじ]費[ひ]が毎年[まいとし]増[ふ]えつつあるのも事実[じじつ]です。\nA: 補助金[ほじょきん]に頼[たよ]るばかりでは、将来[しょうらい]の維持[いじ]どころか存続[そんぞく]すら危[あぶ]ない。\nB: では、寄付[きふ]を募[つの]る基金[ききん]を新設[しんせつ]することで方向[ほうこう]性[せい]を変[か]えませんか。\nA: 妥当[だとう]です。具体[ぐたい]案[あん]に基[もと]づいて、来週[らいしゅう]までに文書[ぶんしょ]をまとめましょう。\nB: 承知[しょうち]いたしました。",
    translation: "A: Prior to next month's cultural-property registration, I'd like to exchange views. B: Yes. While many voices say the shrine should be preserved, the development faction is also firmly rooted. A: Considering its historical value, we have to say registration is only natural. B: That said, it's also a fact that maintenance costs are increasing year by year. A: Relying solely on subsidies endangers not only future maintenance but even survival itself. B: Then shall we change direction by creating a new fund to solicit donations? A: Reasonable. Based on a concrete plan, let's compile a document by next week. B: Understood.",
    questions: [
      {
        q: "What event is planned for next month?",
        choices: ["A public exhibition", "Cultural-property registration", "A fund-raising gala", "A shrine relocation"],
        answerIndex: 1,
        explanation: "A says 来月[らいげつ]の文化財[ぶんかざい]登録[とうろく]に先立[さきだ]って — prior to next month's cultural-property registration."
      },
      {
        q: "What is happening to maintenance costs?",
        choices: ["Decreasing yearly", "Staying flat", "Increasing yearly", "Already cut in half"],
        answerIndex: 2,
        explanation: "B says 維持[いじ]費[ひ]が毎年[まいとし]増[ふ]えつつある — maintenance costs are increasing year by year."
      },
      {
        q: "What does A warn will be endangered beyond maintenance?",
        choices: ["Tourist numbers", "The shrine's survival", "Government funding", "Local employment"],
        answerIndex: 1,
        explanation: "A says 将来[しょうらい]の維持[いじ]どころか存続[そんぞく]すら危[あぶ]ない — survival itself is in danger."
      },
      {
        q: "What new mechanism do they agree to create?",
        choices: ["A donation fund", "A tourism committee", "An admission fee", "A volunteer network"],
        answerIndex: 0,
        explanation: "B proposes 寄付[きふ]を募[つの]る基金[ききん]を新設[しんせつ]する — creating a new fund to collect donations."
      }
    ],
    estMinutes: 5,
    tags: ["culture", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-82 — Discussing a labor migration
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-82",
    title: "Labor Migration Discussion",
    level: "N2",
    context: "Two policy advisers discussing rural-to-urban labor migration",
    text: "A: 地方[ちほう]から都市[とし]への労働力[ろうどうりょく]移動[いどう]について話[はな]し合[あ]いましょう。\nB: 若者[わかもの]の流出[りゅうしゅつ]が止[と]まらない限[かぎ]り、地方[ちほう]の衰退[すいたい]は避[さ]けられません。\nA: とはいえ、人材[じんざい]の還元[かんげん]を促[うなが]す政策[せいさく]に見[み]える成果[せいか]はまだ乏[とぼ]しい。\nB: リモート勤務[きんむ]が定着[ていちゃく]しつつある今[いま]、定住[ていじゅう]を促[うなが]す余地[よち]はあります。\nA: その場合[ばあい]、子育[こそだ]て環境[かんきょう]の整備[せいび]が前提[ぜんてい]となります。\nB: 当然[とうぜん]です。住宅[じゅうたく]支援[しえん]とあわせて制度[せいど]を設計[せっけい]したい。\nA: 財源[ざいげん]の確保[かくほ]にかけては、来年度[らいねんど]予算[よさん]に盛[も]り込[こ]む予定[よてい]です。\nB: 期待[きたい]しています。地方[ちほう]創生[そうせい]の成否[せいひ]を握[にぎ]る課題[かだい]ですから。",
    translation: "A: Let's discuss the migration of labor from rural areas to cities. B: As long as the outflow of young people doesn't stop, the decline of rural areas is unavoidable. A: Even so, the policies to encourage return of talent show scant visible results. B: With remote work now taking root, there's room to encourage settlement. A: In that case, developing a child-rearing environment is a prerequisite. B: Naturally. I'd like to design the system together with housing support. A: When it comes to securing funding, we plan to include it in next fiscal year's budget. B: I look forward to it. It's an issue that will determine the success or failure of regional revitalization.",
    questions: [
      {
        q: "What cannot be avoided unless youth outflow stops?",
        choices: ["Urban overcrowding", "Rural decline", "Wage stagnation", "Housing shortages"],
        answerIndex: 1,
        explanation: "B says 地方[ちほう]の衰退[すいたい]は避[さ]けられません — rural decline can't be avoided."
      },
      {
        q: "What does A say about current return-talent policies?",
        choices: ["They show ample results", "They show no visible results yet", "They are too costly", "They are widely used"],
        answerIndex: 1,
        explanation: "A says 成果[せいか]はまだ乏[とぼ]しい — results are still scarce."
      },
      {
        q: "What is a prerequisite for encouraging rural settlement?",
        choices: ["Better child-rearing environment", "Lower taxes", "More highways", "Subsidized meals"],
        answerIndex: 0,
        explanation: "A says 子育[こそだ]て環境[かんきょう]の整備[せいび]が前提[ぜんてい] — building a child-rearing environment is a prerequisite."
      },
      {
        q: "Where does A plan to include funding?",
        choices: ["A private donation", "Next fiscal year's budget", "A municipal bond", "An overseas grant"],
        answerIndex: 1,
        explanation: "A says 来年度[らいねんど]予算[よさん]に盛[も]り込[こ]む予定[よてい] — plans to include it in next year's budget."
      }
    ],
    estMinutes: 5,
    tags: ["policy", "demographics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-83 — At the statistics office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-83",
    title: "At the Statistics Office",
    level: "N2",
    context: "Two statisticians reviewing the latest labor-force survey",
    text: "A: 今月[こんげつ]の労働力[ろうどうりょく]調査[ちょうさ]の結果[けっか]が出[で]ました。\nB: 完全[かんぜん]失業率[しつぎょうりつ]は横[よこ]ばいということでよろしいですか。\nA: ええ。ただ、非[ひ]正規[せいき]雇用[こよう]の割合[わりあい]が過去[かこ]最悪[さいあく]を記録[きろく]しました。\nB: 長期[ちょうき]化[か]するにつれて、格差[かくさ]が固定[こてい]化[か]しかねない懸念[けねん]があります。\nA: おっしゃる通[とお]りです。派遣[はけん]労働[ろうどう]に依存[いぞん]する構造[こうぞう]を改[あらた]める必要[ひつよう]があります。\nB: データに基[もと]づいて、政策[せいさく]提言[ていげん]をまとめる時[とき]期[き]ですね。\nA: そうですね。次[つぎ]の四半期[しはんき]報告[ほうこく]に盛[も]り込[こ]む予定[よてい]です。\nB: 恐縮[きょうしゅく]ですが、解説[かいせつ]資料[しりょう]も添付[てんぷ]していただけますか。",
    translation: "A: This month's labor-force survey results are out. B: The fully-unemployed rate is flat, correct? A: Yes. However, the share of non-regular employment has hit a record worst. B: As it drags on, there's concern that inequality could become entrenched. A: Exactly. We need to reform the structure dependent on dispatch labor. B: It's time to compile policy recommendations based on the data. A: Agreed. I plan to include them in next quarter's report. B: I apologize for the trouble, but could you also attach explanatory materials?",
    questions: [
      {
        q: "How did the fully-unemployed rate change this month?",
        choices: ["Rose sharply", "Stayed flat", "Fell slightly", "Hit a record low"],
        answerIndex: 1,
        explanation: "B confirms 完全[かんぜん]失業率[しつぎょうりつ]は横[よこ]ばい — the rate is flat."
      },
      {
        q: "What set a record worst this month?",
        choices: ["Job vacancies", "Wage growth", "Non-regular employment share", "Overtime hours"],
        answerIndex: 2,
        explanation: "A says 非[ひ]正規[せいき]雇用[こよう]の割合[わりあい]が過去[かこ]最悪[さいあく]を記録[きろく] — non-regular employment share is the worst on record."
      },
      {
        q: "What concern does B raise about long-term trends?",
        choices: ["Wage deflation", "Inequality becoming entrenched", "Skill shortages", "Higher taxes"],
        answerIndex: 1,
        explanation: "B says 格差[かくさ]が固定[こてい]化[か]しかねない — inequality could become entrenched."
      },
      {
        q: "What does B request alongside the next quarterly report?",
        choices: ["A press release", "Explanatory materials", "A media interview", "An internal audit"],
        answerIndex: 1,
        explanation: "B asks 解説[かいせつ]資料[しりょう]も添付[てんぷ]して — to attach explanatory materials."
      }
    ],
    estMinutes: 5,
    tags: ["statistics", "labor"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-84 — A pharmaceutical trial
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-84",
    title: "Pharmaceutical Trial Briefing",
    level: "N2",
    context: "A clinical researcher briefing a director on a Phase 3 drug trial",
    text: "A: 新薬[しんやく]の第三相[だいさんそう]治験[ちけん]についてご報告[ほうこく]します。\nB: 有効[ゆうこう]性[せい]と安全性[あんぜんせい]のバランスはいかがでしたか。\nA: 主要[しゅよう]評価[ひょうか]項目[こうもく]において、対象[たいしょう]群[ぐん]は有意[ゆうい]に改善[かいぜん]しました。\nB: 一方[いっぽう]で、重篤[じゅうとく]な副[ふく]作用[さよう]の報告[ほうこく]も3件[けん]ありましたね。\nA: はい。これらは既存[きぞん]の処方[しょほう]薬[やく]との相互作用[そうごさよう]によるものと推測[すいそく]されます。\nB: 投与[とうよ]量[りょう]を減[へ]らすことで、リスクを軽減[けいげん]できる可能性[かのうせい]はありますか。\nA: 検討[けんとう]の価値[かち]があると存[ぞん]じます。次[つぎ]の試験[しけん]で検証[けんしょう]します。\nB: 承知[しょうち]しました。規制[きせい]当局[とうきょく]への届[とど]け出[で]の準備[じゅんび]を進[すす]めてください。",
    translation: "A: I'll report on the Phase 3 clinical trial of the new drug. B: How was the balance between efficacy and safety? A: On the primary endpoint, the treatment group improved significantly. B: On the other hand, there were three reports of serious adverse events, weren't there? A: Yes. These are inferred to result from interactions with existing prescription drugs. B: Is there a possibility of reducing risk by lowering the dose? A: I think it's worth examining. We'll verify it in the next trial. B: Understood. Please proceed with preparations to notify the regulatory authority.",
    questions: [
      {
        q: "What phase of trial is being reported?",
        choices: ["Phase 1", "Phase 2", "Phase 3", "Post-marketing"],
        answerIndex: 2,
        explanation: "A says 第三相[だいさんそう]治験[ちけん] — Phase 3 trial."
      },
      {
        q: "How did the treatment group perform on the primary endpoint?",
        choices: ["No change", "Significantly improved", "Slightly worsened", "Inconclusive"],
        answerIndex: 1,
        explanation: "A says 対象[たいしょう]群[ぐん]は有意[ゆうい]に改善[かいぜん]しました — significantly improved."
      },
      {
        q: "What is the suspected cause of the serious adverse events?",
        choices: ["Manufacturing defects", "Drug-drug interactions", "Patient age", "Diet"],
        answerIndex: 1,
        explanation: "A says 既存[きぞん]の処方[しょほう]薬[やく]との相互作用[そうごさよう]による — caused by interactions with existing prescription drugs."
      },
      {
        q: "What does B ask A to prepare?",
        choices: ["A marketing plan", "Notification to the regulator", "A price proposal", "Patient recruitment"],
        answerIndex: 1,
        explanation: "B says 規制[きせい]当局[とうきょく]への届[とど]け出[で]の準備[じゅんび]を — prepare notification to the regulatory authority."
      }
    ],
    estMinutes: 5,
    tags: ["medicine", "research"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-85 — Discussing an elderly care model
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-85",
    title: "Elderly Care Model",
    level: "N2",
    context: "Two welfare officials reviewing a community-based integrated care pilot",
    text: "A: 地域[ちいき]包括[ほうかつ]ケアシステムの試行[しこう]結果[けっか]を共有[きょうゆう]します。\nB: 在宅[ざいたく]医療[いりょう]と介護[かいご]の連携[れんけい]は円滑[えんかつ]に進[すす]みましたか。\nA: 概[おおむ]ね良好[りょうこう]ですが、夜間[やかん]対応[たいおう]の人手[ひとで]不足[ぶそく]が課題[かだい]です。\nB: 24時間[じかん]体制[たいせい]を維持[いじ]するには、人材[じんざい]確保[かくほ]が不可欠[ふかけつ]ですね。\nA: ええ。訪問[ほうもん]看護[かんご]師[し]の養成[ようせい]に力[ちから]を入[い]れるべきだと考[かんが]えます。\nB: 同意[どうい]します。加[くわ]えて、家族[かぞく]介護[かいご]者[しゃ]の負担[ふたん]軽減[けいげん]も並行[へいこう]して進[すす]めましょう。\nA: 介護[かいご]離職[りしょく]を防[ふせ]ぐためにも、その点[てん]は重要[じゅうよう]です。\nB: 来[く]る月[つき]の会議[かいぎ]で、制度[せいど]設計[せっけい]の骨格[こっかく]を提示[ていじ]します。",
    translation: "A: I'll share the results of the community-based integrated care pilot. B: Did the coordination between home medical care and nursing care proceed smoothly? A: Generally well, but the shortage of staff for nighttime response is an issue. B: To maintain a 24-hour system, securing personnel is essential. A: Yes. I think we should invest in training visiting nurses. B: I agree. In addition, let's proceed in parallel with reducing the burden on family caregivers. A: To prevent care-driven job departure, that point is crucial. B: At next month's meeting, I'll present the framework for the system design.",
    questions: [
      {
        q: "What is the main issue identified in the pilot?",
        choices: ["Daytime overstaffing", "Nighttime staff shortage", "High medication errors", "Poor patient records"],
        answerIndex: 1,
        explanation: "A says 夜間[やかん]対応[たいおう]の人手[ひとで]不足[ぶそく]が課題[かだい] — nighttime staff shortage is an issue."
      },
      {
        q: "What does A say should be invested in?",
        choices: ["Hospital beds", "Visiting nurse training", "Pharmacy systems", "Robot caregivers"],
        answerIndex: 1,
        explanation: "A says 訪問[ほうもん]看護[かんご]師[し]の養成[ようせい]に力[ちから]を入[い]れる — invest in training visiting nurses."
      },
      {
        q: "What should be reduced in parallel?",
        choices: ["Family caregivers' burden", "Hospital visits", "Drug costs", "Insurance premiums"],
        answerIndex: 0,
        explanation: "B says 家族[かぞく]介護[かいご]者[しゃ]の負担[ふたん]軽減[けいげん]も並行[へいこう]して — reduce family caregivers' burden in parallel."
      },
      {
        q: "What does B promise to present next month?",
        choices: ["A cost analysis", "The framework for system design", "A patient survey", "An audit report"],
        answerIndex: 1,
        explanation: "B says 制度[せいど]設計[せっけい]の骨格[こっかく]を提示[ていじ]します — will present the framework for the system design."
      }
    ],
    estMinutes: 6,
    tags: ["welfare", "health"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-86 — At the agriculture ministry
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-86",
    title: "At the Agriculture Ministry",
    level: "N2",
    context: "A ministry official briefing a farmer representative on subsidy policy",
    text: "A: 来年[らいねん]度[ど]の農業[のうぎょう]補助金[ほじょきん]の配分[はいぶん]方針[ほうしん]をご説明[せつめい]します。\nB: 米価[べいか]の下落[げらく]に伴[ともな]う農家[のうか]の負担[ふたん]増[ぞう]は深刻[しんこく]です。\nA: ええ。経営[けいえい]安定[あんてい]対策[たいさく]に重点[じゅうてん]を置[お]く方針[ほうしん]です。\nB: 智能[ちのう]農業[のうぎょう]への投資[とうし]は継続[けいぞく]されるのですか。\nA: もちろんです。後継[こうけい]者[しゃ]不足[ぶそく]を補[おぎな]う意味[いみ]でも重要[じゅうよう]です。\nB: 補助金[ほじょきん]の申請[しんせい]手続[てつづ]きの簡素[かんそ]化[か]もお願[ねが]いしたい。\nA: 既[すで]にデジタル化[か]を進[すす]めており、来月[らいげつ]から運用[うんよう]を始[はじ]めます。\nB: 期待[きたい]しております。現場[げんば]の意見[いけん]を反映[はんえい]していただけると幸[さいわ]いです。",
    translation: "A: I'll explain the distribution policy for next fiscal year's agricultural subsidies. B: The burden on farmers from falling rice prices is serious. A: Yes. Our policy places emphasis on management-stabilization measures. B: Will investment in smart agriculture continue? A: Of course. It's important also to compensate for the shortage of successors. B: I'd also like to request simplification of subsidy application procedures. A: We're already advancing digitalization, and operations will start next month. B: I look forward to it. It would be appreciated if you reflect on-site opinions.",
    questions: [
      {
        q: "What is causing increased burden on farmers?",
        choices: ["Falling rice prices", "Rising fuel costs", "New tariffs", "Drought damage"],
        answerIndex: 0,
        explanation: "B says 米価[べいか]の下落[げらく]に伴[ともな]う農家[のうか]の負担[ふたん]増[ぞう] — burden from falling rice prices."
      },
      {
        q: "What is the focus of next year's policy?",
        choices: ["Export expansion", "Management stabilization", "Land consolidation", "Crop diversification"],
        answerIndex: 1,
        explanation: "A says 経営[けいえい]安定[あんてい]対策[たいさく]に重点[じゅうてん]を置[お]く — focuses on management-stabilization measures."
      },
      {
        q: "Why does A say smart-agriculture investment is important?",
        choices: ["To raise export quality", "To compensate for successor shortage", "To lower rice prices", "To expand acreage"],
        answerIndex: 1,
        explanation: "A says 後継[こうけい]者[しゃ]不足[ぶそく]を補[おぎな]う意味[いみ]でも重要[じゅうよう] — important to compensate for the successor shortage."
      },
      {
        q: "When will the digitalized application system begin?",
        choices: ["This week", "Next month", "Next fiscal year", "After a pilot"],
        answerIndex: 1,
        explanation: "A says 来月[らいげつ]から運用[うんよう]を始[はじ]めます — operations begin next month."
      }
    ],
    estMinutes: 5,
    tags: ["agriculture", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-87 — A disaster prevention drill
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-87",
    title: "Disaster Prevention Drill",
    level: "N2",
    context: "Two municipal officials finalizing a large-scale disaster drill",
    text: "A: 来週[らいしゅう]の大規模[だいきぼ]防災[ぼうさい]訓練[くんれん]の概要[がいよう]を確認[かくにん]します。\nB: 避難[ひなん]経路[けいろ]の変更[へんこう]に伴[ともな]う、住民[じゅうみん]への周知[しゅうち]は済[す]んでいますか。\nA: はい、回覧[かいらん]板[ばん]と放送[ほうそう]を通[つう]じて、全[ぜん]世帯[せたい]に通知[つうち]済[ず]みです。\nB: 外国人[がいこくじん]住民[じゅうみん]に向[む]けた多言語[たげんご]の資料[しりょう]の準備[じゅんび]は。\nA: 英語[えいご]、中国語[ちゅうごくご]、ポルトガル語[ご]の三[みっ]つの言語[げんご]で資料[しりょう]を用意[ようい]しました。\nB: 避難[ひなん]所[しょ]の物資[ぶっし]の再[さい]点検[てんけん]も忘[わす]れずにお願[ねが]いします。\nA: 承知[しょうち]いたしました。不[ふ]測[そく]の事態[じたい]に備[そな]えて、予備[よび]も増[ふ]やしておきます。\nB: ありがとうございます。訓練[くんれん]終了[しゅうりょう]後[ご]には、課題[かだい]を洗[あら]い出[だ]しましょう。",
    translation: "A: Let's confirm the outline of next week's large-scale disaster-prevention drill. B: Has notification to residents about the evacuation-route change, accompanying the change, been completed? A: Yes, through circular boards and broadcasts, all households have been notified. B: What about preparation of multilingual materials for foreign-nationality residents? A: We've prepared materials in three languages: English, Chinese, and Portuguese. B: Please don't forget to re-inspect shelter supplies as well. A: Understood. To prepare for unforeseen circumstances, I'll also increase reserves. B: Thank you. After the drill concludes, let's identify remaining issues.",
    questions: [
      {
        q: "What is happening next week?",
        choices: ["A public lecture", "A large-scale disaster drill", "An evacuation test", "A shelter renovation"],
        answerIndex: 1,
        explanation: "A says 来週[らいしゅう]の大規模[だいきぼ]防災[ぼうさい]訓練[くんれん] — next week's large-scale disaster-prevention drill."
      },
      {
        q: "How were residents notified about the route change?",
        choices: ["By phone only", "Through circular boards and broadcasts", "By email", "Through social media"],
        answerIndex: 1,
        explanation: "A says 回覧[かいらん]板[ばん]と放送[ほうそう]を通[つう]じて — through circular boards and broadcasts."
      },
      {
        q: "How many languages were the foreign-resident materials prepared in?",
        choices: ["Two", "Three", "Four", "Five"],
        answerIndex: 1,
        explanation: "A says 三[みっ]つの言語[げんご]で — in three languages: English, Chinese, and Portuguese."
      },
      {
        q: "What will be done after the drill concludes?",
        choices: ["Issue certificates", "Identify remaining issues", "Distribute rewards", "Hold a press conference"],
        answerIndex: 1,
        explanation: "B says 訓練[くんれん]終了[しゅうりょう]後[ご]には、課題[かだい]を洗[あら]い出[だ]しましょう — identify remaining issues after the drill."
      }
    ],
    estMinutes: 5,
    tags: ["disaster", "public-safety"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-88 — Discussing a cyber attack
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-88",
    title: "Cyber Attack Response",
    level: "N2",
    context: "An IT director and a CISO responding to an overnight ransomware attack",
    text: "A: 昨夜[さくや]、当社[とうしゃ]サーバーに対[たい]するサイバー攻撃[こうげき]がありました。\nB: ええ、ランサムウェア感染[かんせん]の報告[ほうこく]を受[う]けました。範囲[はんい]は。\nA: 顧客[こきゃく]情報[じょうほう]の漏[ろう]洩[えい]は確認[かくにん]されていませんが、社内[しゃない]メールは停止[ていし]中[ちゅう]です。\nB: 影響[えいきょう]が拡大[かくだい]しかねないだけに、早期[そうき]の封鎖[ふうさ]が急務[きゅうむ]です。\nA: セキュリティ会社[がいしゃ]と連携[れんけい]して、復旧[ふっきゅう]を優先[ゆうせん]しています。\nB: 事態[じたい]の経緯[けいい]を公表[こうひょう]する際[さい]には、法務[ほうむ]部[ぶ]の承認[しょうにん]を得[え]てください。\nA: かしこまりました。再発[さいはつ]防止[ぼうし]策[さく]の策定[さくてい]も並行[へいこう]して進[すす]めます。\nB: お願[ねが]いします。被害[ひがい]の全容[ぜんよう]が判明[はんめい]次第[しだい]、私[わたし]に直接[ちょくせつ]報告[ほうこく]を。",
    translation: "A: Last night there was a cyber attack on our servers. B: Yes, I received a report of ransomware infection. What's the scope? A: Customer data leakage is not confirmed, but internal email is suspended. B: Because the impact could expand, early containment is an urgent priority. A: We're coordinating with a security firm and prioritizing restoration. B: When publicly disclosing the course of events, please obtain the legal department's approval. A: Understood. We'll proceed in parallel with formulating recurrence-prevention measures. B: Please. As soon as the full scope of the damage becomes clear, report directly to me.",
    questions: [
      {
        q: "What happened overnight?",
        choices: ["A power outage", "A cyber attack on servers", "A data center flood", "A staff walkout"],
        answerIndex: 1,
        explanation: "A says サイバー攻撃[こうげき]がありました — there was a cyber attack."
      },
      {
        q: "What is the confirmed status of customer data?",
        choices: ["Leaked publicly", "Encryption broken", "No leakage confirmed", "Sold online"],
        answerIndex: 2,
        explanation: "A says 顧客[こきゃく]情報[じょうほう]の漏[ろう]洩[えい]は確認[かくにん]されていません — no leakage is confirmed."
      },
      {
        q: "Why does B stress early containment?",
        choices: ["Customer lawsuits are imminent", "Impact could expand", "Insurance expires soon", "Press has arrived"],
        answerIndex: 1,
        explanation: "B says 影響[えいきょう]が拡大[かくだい]しかねないだけに — because the impact could expand."
      },
      {
        q: "What must be obtained before public disclosure?",
        choices: ["CEO's speech", "Legal department approval", "Customer consent", "Police report"],
        answerIndex: 1,
        explanation: "B says 法務[ほうむ]部[ぶ]の承認[しょうにん]を得[え]てください — obtain the legal department's approval."
      }
    ],
    estMinutes: 5,
    tags: ["cybersecurity", "incident"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-89 — At the education board
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-89",
    title: "At the Education Board",
    level: "N2",
    context: "Education board members deliberating curriculum revisions",
    text: "A: 次年度[じねんど]の学習[がくしゅう]指導[しどう]要領[ようりょう]改定[かいてい]案[あん]を審議[しんぎ]します。\nB: 情報[じょうほう]モラル教育[きょういく]の必修[ひっしゅう]化[か]については、慎重[しんちょう]な議論[ぎろん]が必要[ひつよう]です。\nA: もっともですが、児童[じどう]のスマホ依存[いぞん]が深刻[しんこく]化[か]しつつある事実[じじつ]も看過[かんか]できません。\nB: 学校[がっこう]現場[げんば]の負担[ふたん]を過小[かしょう]評価[ひょうか]してはいけません。\nA: 確[たし]かに、教員[きょういん]の長時間[ちょうじかん]労働[ろうどう]は既[すで]に限界[げんかい]に近[ちか]い。\nB: 校務[こうむ]のデジタル化[か]によって、業務[ぎょうむ]効率[こうりつ]を高[たか]める方針[ほうしん]は変[か]えませんよね。\nA: ええ、維持[いじ]します。但[ただ]し、段階的[だんかいてき]な導入[どうにゅう]を前提[ぜんてい]とします。\nB: 賛成[さんせい]です。来月[らいげつ]の公聴会[こうちょうかい]で、保護者[ほごしゃ]の意見[いけん]も伺[うかが]いましょう。",
    translation: "A: We'll deliberate the draft revision of next year's curriculum guidelines. B: On making information-morality education compulsory, careful discussion is necessary. A: True, but we also can't overlook the fact that children's smartphone addiction is becoming serious. B: We mustn't underestimate the burden on school sites. A: Indeed, teachers' long working hours are already close to the limit. B: The policy of raising operational efficiency through digitalization of school duties won't change, right? A: No, we maintain it. However, it's premised on phased introduction. B: Agreed. At next month's public hearing, let's also hear parents' opinions.",
    questions: [
      {
        q: "What is being deliberated?",
        choices: ["A school budget", "A curriculum revision", "A teacher transfer", "A tuition hike"],
        answerIndex: 1,
        explanation: "A says 学習[がくしゅう]指導[しどう]要領[ようりょう]改定[かいてい]案[あん]を審議[しんぎ] — deliberating the curriculum revision draft."
      },
      {
        q: "What does B say requires careful discussion?",
        choices: ["Making info-morality education compulsory", "Banning smartphones", "Reducing class sizes", "Shortening summer break"],
        answerIndex: 0,
        explanation: "B says 情報[じょうほう]モラル教育[きょういく]の必修[ひっしゅう]化[か]について — on making information-morality education compulsory."
      },
      {
        q: "What condition does A attach to maintaining digitalization?",
        choices: ["Full rollout immediately", "Phased introduction", "External contractor only", "Voluntary participation"],
        answerIndex: 1,
        explanation: "A says 段階的[だんかいてき]な導入[どうにゅう]を前提[ぜんてい]とします — premised on phased introduction."
      },
      {
        q: "What will happen at next month's public hearing?",
        choices: ["A vote on the policy", "Parents' opinions will be heard", "Teachers will protest", "An external audit"],
        answerIndex: 1,
        explanation: "B says 保護者[ほごしゃ]の意見[いけん]も伺[うかが]いましょう — let's hear parents' opinions."
      }
    ],
    estMinutes: 5,
    tags: ["education", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-90 — A gender equality forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-90",
    title: "Gender Equality Forum",
    level: "N2",
    context: "Forum organizers planning initiatives to raise women in management",
    text: "A: 本日[ほんじつ]の女性[じょせい]活躍[かつやく]推進[すいしん]フォーラムを開[ひら]きます。\nB: 管理[かんり]職[しょく]の女性[じょせい]比率[ひりつ]が低[ひく]い現状[げんじょう]を、どう打破[だは]しますか。\nA: まさにそこで、育児[いくじ]と仕事[しごと]の両立[りょうりつ]支援[しえん]制度[せいど]の拡充[かくじゅう]を図[はか]ります。\nB: 育休[いくきゅう]取得[しゅとく]率[りつ]を引[ひ]き上[あ]げるだけでは、本質[ほんしつ]的[てき]な解決[かいけつ]に至[いた]りません。\nA: ご指摘[してき]の通[とお]りです。意識[いしき]改革[かいかく]を促[うなが]す研修[けんしゅう]も並行[へいこう]します。\nB: ロールモデルの可視化[かしか]も有効[ゆうこう]な手段[しゅだん]かと。\nA: 同感[どうかん]です。先輩[せんぱい]の女性[じょせい]社員[しゃいん]のインタビューを社内[しゃない]報[ほう]に掲載[けいさい]します。\nB: 期待[きたい]しております。10年[ねん]後[ご]の変[か]わった姿[すがた]を楽[たの]しみにしています。",
    translation: "A: Today we open the forum on promoting women's participation. B: How will you break the current situation of low female ratios in management? A: Right there, we'll aim to expand work-life balance support systems for child-rearing. B: Merely raising parental-leave take-up rates won't lead to an essential solution. A: As you point out. We'll also run training to spur mindset change in parallel. B: Visualizing role models is also an effective means, I think. A: I agree. We'll publish interviews with senior female employees in the in-house bulletin. B: I look forward to it. I'm eager to see the changed landscape ten years from now.",
    questions: [
      {
        q: "What is the forum's theme?",
        choices: ["Marketing strategy", "Promoting women's participation", "Cost reduction", "Workplace safety"],
        answerIndex: 1,
        explanation: "A says 女性[じょせい]活躍[かつやく]推進[すいしん]フォーラム — forum on promoting women's participation."
      },
      {
        q: "What does B say is insufficient alone?",
        choices: ["Raising parental-leave take-up rates", "Hiring more women", "Setting quotas", "Holding workshops"],
        answerIndex: 0,
        explanation: "B says 育休[いくきゅう]取得[しゅとく]率[りつ]を引[ひ]き上[あ]げるだけでは — merely raising parental-leave take-up rates."
      },
      {
        q: "What will A run in parallel with policy expansion?",
        choices: ["Recruitment drives", "Mindset-change training", "Salary increases", "Office renovations"],
        answerIndex: 1,
        explanation: "A says 意識[いしき]改革[かいかく]を促[うなが]す研修[けんしゅう]も並行[へいこう] — mindset-change training in parallel."
      },
      {
        q: "Where will interviews with senior female employees be published?",
        choices: ["National TV", "An external magazine", "The in-house bulletin", "A government portal"],
        answerIndex: 2,
        explanation: "A says 社内[しゃない]報[ほう]に掲載[けいさい]します — publish in the in-house bulletin."
      }
    ],
    estMinutes: 5,
    tags: ["gender", "workplace"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-91 — Discussing a consumer trend
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-91",
    title: "Consumer Trend Analysis",
    level: "N2",
    context: "Marketing analysts discussing a polarizing consumer trend",
    text: "A: 今期[こんき]の消費[しょうひ]動向[どうこう]調査[ちょうさ]の結果[けっか]を共有[きょうゆう]します。\nB: 若年[じゃくねん]層[そう]のいわゆる「コスパ重視[じゅうし]」の傾向[けいこう]は続[つづ]いているのですか。\nA: ええ。加[くわ]えて、サステナブルな商品[しょうひん]への関心[かんしん]も高[たか]まりつつあります。\nB: 高[たか]価[か]なブランド品[ひん]は売上[うりあげ]が減少[げんしょう]する一方[いっぽう]で、中古[ちゅうこ]市場[しじょう]は伸[の]びている。\nA: その通[とお]りです。消費[しょうひ]行動[こうどう]が二極[にきょく]化[か]しつつあると言[い]えます。\nB: マーケティング戦略[せんりゃく]を見直[みなお]す必要[ひつよう]がありそうですね。\nA: はい。顧客[こきゃく]属性[ぞくせい]に応[おう]じて、アプローチを分[わ]ける予定[よてい]です。\nB: 次回[じかい]の会議[かいぎ]で、具体的[ぐたいてき]な施策[しさく]案[あん]を提示[ていじ]してください。",
    translation: "A: I'll share the results of this quarter's consumer-trend survey. B: Is the so-called 'cost-performance-first' tendency among young people continuing? A: Yes. In addition, interest in sustainable products is also growing. B: While sales of expensive brand goods are decreasing, the second-hand market is expanding. A: That's right. Consumer behavior can be said to be polarizing. B: It seems we need to review our marketing strategy. A: Yes. We plan to differentiate our approach according to customer attributes. B: Please present concrete measure proposals at the next meeting.",
    questions: [
      {
        q: "What is growing among young consumers besides cost-performance focus?",
        choices: ["Interest in luxury goods", "Interest in sustainable products", "Interest in fast food", "Interest in cash payments"],
        answerIndex: 1,
        explanation: "A says サステナブルな商品[しょうひん]への関心[かんしん]も高[たか]まりつつ — interest in sustainable products is growing."
      },
      {
        q: "What is happening to expensive brand goods?",
        choices: ["Sales rising", "Sales decreasing", "Sold out", "Imports halted"],
        answerIndex: 1,
        explanation: "B says 高[たか]価[か]なブランド品[ひん]は売上[うりあげ]が減少[げんしょう]する — sales are decreasing."
      },
      {
        q: "What does A conclude about consumer behavior?",
        choices: ["Stabilizing", "Polarizing", "Recovering", "Simplifying"],
        answerIndex: 1,
        explanation: "A says 消費[しょうひ]行動[こうどう]が二極[にきょく]化[か]しつつある — consumer behavior is polarizing."
      },
      {
        q: "What does A plan to do based on customer attributes?",
        choices: ["Raise prices uniformly", "Differentiate the approach", "Halt some products", "Expand advertising"],
        answerIndex: 1,
        explanation: "A says 顧客[こきゃく]属性[ぞくせい]に応[おう]じて、アプローチを分[わ]ける — differentiate the approach by customer attributes."
      }
    ],
    estMinutes: 5,
    tags: ["consumer", "marketing"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-92 — At the energy commission
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-92",
    title: "At the Energy Commission",
    level: "N2",
    context: "Commission members reviewing renewable energy targets",
    text: "A: 再生[さいせい]可能[かのう]エネルギーの導入[どうにゅう]目標[もくひょう]の見直[みなお]しを審議[しんぎ]します。\nB: 太陽光[たいようこう]発電[はつでん]は目標[もくひょう]達成[たっせい]に向[む]けて順調[じゅんちょう]ですか。\nA: 概[おおむ]ね順調[じゅんちょう]ですが、用地[ようち]の確保[かくほ]がここ数年[すうねん]、ますます困難[こんなん]になっています。\nB: 風力[ふうりょく]発電[はつでん]、特[とく]に洋上[ようじょう]風力[ふうりょく]の推進[すいしん]は重要[じゅうよう]ですね。\nA: 全[まった]くその通[とお]りです。次[つぎ]期[き]計画[けいかく]に重点[じゅうてん]的[てき]に位置[いち]付[づ]ける予定[よてい]です。\nB: 送電[そうでん]網[もう]の整備[せいび]も並行[へいこう]して進[すす]めないと、停滞[ていたい]しかねません。\nA: おっしゃる通[とお]り、基盤[きばん]投資[とうし]が遅[おく]れれば、目標[もくひょう]は絵[え]に描[か]いた餅[もち]に過[す]ぎません。\nB: 来月[らいげつ]の中間[ちゅうかん]報告[ほうこく]で、整備[せいび]計画[けいかく]の詳細[しょうさい]を期待[きたい]しています。",
    translation: "A: We'll deliberate revising renewable-energy introduction targets. B: Is solar power generation progressing smoothly toward the targets? A: Generally smooth, but securing land is becoming more difficult year by year. B: Promoting wind power, especially offshore wind, is important. A: Quite right. We plan to position it with emphasis in the next plan. B: Unless transmission-grid construction proceeds in parallel, things could stagnate. A: As you say, if infrastructure investment is delayed, the targets are merely a pie drawn in a picture. B: I look forward to details of the construction plan in next month's interim report.",
    questions: [
      {
        q: "What is becoming harder each year for solar power?",
        choices: ["Equipment procurement", "Securing land", "Permit approval", "Panel disposal"],
        answerIndex: 1,
        explanation: "A says 用地[ようち]の確保[かくほ]がここ数年[すうねん]、ますます困難[こんなん]に — securing land is becoming harder year by year."
      },
      {
        q: "What does B stress as especially important?",
        choices: ["Offshore wind power", "Biomass plants", "Geothermal energy", "Solar farms"],
        answerIndex: 0,
        explanation: "B says 洋上[ようじょう]風力[ふうりょく]の推進[すいしん]は重要[じゅうよう] — promoting offshore wind is important."
      },
      {
        q: "What does B warn could happen without grid construction in parallel?",
        choices: ["Cost reduction", "Stagnation", "Faster rollout", "Lower prices"],
        answerIndex: 1,
        explanation: "B says 停滞[ていたい]しかねません — could stagnate."
      },
      {
        q: "How does A describe targets if infrastructure investment lags?",
        choices: ["Merely a drawn pie", "Already achievable", "Will triple", "Will be revised upward"],
        answerIndex: 0,
        explanation: "A says 絵[え]に描[か]いた餅[もち]に過[す]ぎません — merely a pie drawn in a picture (an empty promise)."
      }
    ],
    estMinutes: 6,
    tags: ["energy", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-93 — A wildlife protection talk
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-93",
    title: "Wildlife Protection Talk",
    level: "N2",
    context: "A wildlife officer presenting on Asiatic black bear protection",
    text: "A: 特別[とくべつ]天然[てんねん]記念物[きねんぶつ]の保護[ほご]活動[かつどう]について発表[はっぴょう]します。\nB: ツキノワグマの生息[せいそく]域[いき]の縮小[しゅくしょう]は、深刻[しんこく]な問題[もんだい]ですね。\nA: はい。人[ひと]と熊[くま]の接触[せっしょく]事故[じこ]が後[あと]を絶[た]ちません。\nB: 生態[せいたい]系[けい]の保[ほ]全[ぜん]と林業[りんぎょう]の振興[しんこう]を両立[りょうりつ]させる方策[ほうさく]は。\nA: 殺傷[さっしょう]ではなく、追[お]い出[だ]しを優先[ゆうせん]する管理[かんり]方法[ほうほう]を導入[どうにゅう]しました。\nB: 地元[じもと]の理解[りかい]を得[え]るのが前提[ぜんてい]ですが、成果[せいか]はいかがですか。\nA: 過去[かこ]3年[ねん]間[かん]で、事故[じこ]件数[けんすう]は4割[わり]減少[げんしょう]しました。\nB: 著[いちじる]しい改善[かいぜん]ですね。他[ほか]の地域[ちいき]にも展開[てんかい]を期待[きたい]します。",
    translation: "A: I'll present on protection activities for special natural monuments. B: The shrinkage of Asiatic black bear habitat is a serious problem. A: Yes. Incidents of contact between humans and bears continue without end. B: What measures balance ecosystem conservation with forestry promotion? A: We've introduced a management method prioritizing eviction over killing. B: Gaining local understanding is a prerequisite, but what are the results? A: Over the past three years, the number of incidents has decreased by 40 percent. B: A remarkable improvement. I hope it will be expanded to other regions.",
    questions: [
      {
        q: "What serious problem does B mention?",
        choices: ["Poaching increase", "Habitat shrinkage", "Food shortages", "Disease spread"],
        answerIndex: 1,
        explanation: "B says 生息[せいそく]域[いき]の縮小[しゅくしょう]は深刻[しんこく] — habitat shrinkage is serious."
      },
      {
        q: "What management method was introduced?",
        choices: ["Culling bears", "Eviction prioritized over killing", "Fencing only", "Relocation abroad"],
        answerIndex: 1,
        explanation: "A says 殺傷[さっしょう]ではなく、追[お]い出[だ]しを優先[ゆうせん]する — eviction prioritized over killing."
      },
      {
        q: "What is a prerequisite mentioned by B?",
        choices: ["National approval", "Local understanding", "Scientific peer review", "Funding approval"],
        answerIndex: 1,
        explanation: "B says 地元[じもと]の理解[りかい]を得[え]るのが前提[ぜんてい] — local understanding is a prerequisite."
      },
      {
        q: "How much did incidents decrease over three years?",
        choices: ["20%", "30%", "40%", "50%"],
        answerIndex: 2,
        explanation: "A says 事故[じこ]件数[けんすう]は4割[わり]減少[げんしょう] — decreased by 40 percent."
      }
    ],
    estMinutes: 5,
    tags: ["environment", "wildlife"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-94 — Discussing a city branding
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-94",
    title: "City Branding Strategy",
    level: "N2",
    context: "City officials strategizing a new city brand to attract youth",
    text: "A: 本市[ほんし]の新[あら]たな都市[とし]ブランド戦略[せんりゃく]について議論[ぎろん]します。\nB: 観光[かんこう]客[きゃく]数[すう]が伸[の]び悩[なや]んでいる原因[げんいん]は、魅力[みりょく]の発信[はっしん]不足[ぶそく]かと。\nA: おっしゃる通[とお]りです。特[とく]に若者[わかもの]に届[とど]いていないという課題[かだい]があります。\nB: SNSを活用[かつよう]した情報[じょうほう]発信[はっしん]に力[ちから]を入[い]れるべきです。\nA: しかし、発信[はっしん]する内容[ないよう]がなければ、単[たん]なる画像[がぞう]の羅列[られつ]に過[す]ぎません。\nB: 確[たし]かに。地元[じもと]の食[しょく]文化[ぶんか]や伝統[でんとう]工芸[こうげい]を再[さい]発掘[はっくつ]する必要[ひつよう]がありますね。\nA: 同感[どうかん]です。市民[しみん]参加[さんか]型[がた]のイベントを通[つう]じて、物語[ものがたり]を育[はぐく]みたい。\nB: 良[よ]い着想[ちゃくそう]ですね。来[く]る月[つき]までに具体[ぐたい]案[あん]をまとめましょう。",
    translation: "A: Let's discuss the city's new city-brand strategy. B: The cause of stagnant tourist numbers is, I think, insufficient transmission of appeal. A: As you say. There's the challenge of particularly not reaching young people. B: We should invest effort in information transmission using social media. A: However, without content to transmit, it's merely a list of images. B: True. We need to rediscover local food culture and traditional crafts. A: I agree. Through citizen-participation events, I want to nurture a narrative. B: A good idea. Let's compile a concrete plan by next month.",
    questions: [
      {
        q: "What is the cause of stagnant tourist numbers?",
        choices: ["Poor transportation", "Insufficient appeal transmission", "High prices", "Bad weather"],
        answerIndex: 1,
        explanation: "B says 魅力[みりょく]の発信[はっしん]不足[ぶそく] — insufficient appeal transmission."
      },
      {
        q: "What does A caution about social media without content?",
        choices: ["It's merely a list of images", "It attracts too many visitors", "It harms reputation", "It is too costly"],
        answerIndex: 0,
        explanation: "A says 単[たん]なる画像[がぞう]の羅列[られつ]に過[す]ぎません — merely a list of images."
      },
      {
        q: "What does B suggest rediscovering?",
        choices: ["Local food culture and traditional crafts", "Old castle walls", "Ancient ruins", "Forgotten dialects"],
        answerIndex: 0,
        explanation: "B says 地元[じもと]の食[しょく]文化[ぶんか]や伝統[でんとう]工芸[こうげい]を再[さい]発掘[はっくつ] — rediscover local food culture and traditional crafts."
      },
      {
        q: "How does A want to nurture a narrative?",
        choices: ["Through citizen-participation events", "Through TV commercials", "Through a film festival", "Through a mascot"],
        answerIndex: 0,
        explanation: "A says 市民[しみん]参加[さんか]型[がた]のイベントを通[つう]じて — through citizen-participation events."
      }
    ],
    estMinutes: 5,
    tags: ["tourism", "branding"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-95 — At the maritime safety agency
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-95",
    title: "At the Maritime Safety Agency",
    level: "N2",
    context: "A coast guard officer reporting monthly patrol results",
    text: "A: 今月[こんげつ]の海上[かいじょう]保安[ほあん]巡回[じゅんかい]の報告[ほうこく]をいたします。\nB: 領海[りょうかい]付近[ふきん]の不審[ふしん]船舶[せんぱく]の確認[かくにん]件数[けんすう]は。\nA: 先月[せんげつ]比[ひ]で2割[わり]増[ぞう]加[か]しています。領海[りょうかい]侵犯[しんぱん]事案[じあん]も3件[けん]ありました。\nB: 油汚染[ゆおせん]の報告[ほうこく]も一部[いちぶ]受[う]けています。対応[たいおう]は。\nA: 現場[げんば]で回収[かいしゅう]作業[さぎょう]を実施[じっし]し、原因[げんいん]調査[ちょうさ]を並行[へいこう]しています。\nB: 事態[じたい]の拡大[かくだい]を防[ふせ]ぐため、近隣[きんりん]の自治体[じちたい]と連携[れんけい]してください。\nA: かしこまりました。迅速[じんそく]な情報[じょうほう]共有[きょうゆう]体制[たいせい]の強化[きょうか]も図[はか]ります。\nB: 期待[きたい]しております。次[つぎ]の定例[ていれい]会議[かいぎ]で進捗[しんちょく]を報告[ほうこく]してください。",
    translation: "A: I'll report on this month's coast-guard patrol. B: How many suspicious vessels were confirmed near territorial waters? A: It's up 20 percent from last month. There were also three territorial-intrusion incidents. B: We've also received some oil-pollution reports. What's the response? A: We're conducting recovery operations on-site and investigating the cause in parallel. B: To prevent the situation from expanding, please coordinate with neighboring local governments. A: Understood. We'll also aim to strengthen the rapid information-sharing framework. B: I look forward to it. Please report progress at the next regular meeting.",
    questions: [
      {
        q: "How did suspicious-vessel sightings change versus last month?",
        choices: ["Down 10%", "Flat", "Up 20%", "Up 50%"],
        answerIndex: 2,
        explanation: "A says 先月[せんげつ]比[ひ]で2割[わり]増[ぞう]加[か] — up 20 percent from last month."
      },
      {
        q: "How many territorial-intrusion incidents occurred?",
        choices: ["One", "Two", "Three", "Five"],
        answerIndex: 2,
        explanation: "A says 領海[りょうかい]侵犯[しんぱん]事案[じあん]も3件[けん] — three incidents."
      },
      {
        q: "What is A doing in parallel with recovery operations?",
        choices: ["Investigating the cause", "Filing insurance claims", "Holding press briefings", "Training staff"],
        answerIndex: 0,
        explanation: "A says 原因[げんいん]調査[ちょうさ]を並行[へいこう] — investigating the cause in parallel."
      },
      {
        q: "Who does B ask A to coordinate with?",
        choices: ["The navy", "Neighboring local governments", "Foreign embassies", "Fishery associations"],
        answerIndex: 1,
        explanation: "B says 近隣[きんりん]の自治体[じちたい]と連携[れんけい] — coordinate with neighboring local governments."
      }
    ],
    estMinutes: 5,
    tags: ["maritime", "security"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-96 — A social welfare review
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-96",
    title: "Social Welfare Review",
    level: "N2",
    context: "Welfare officials reviewing child-care system reform",
    text: "A: 児童[じどう]福祉[ふくし]制度[せいど]の改正[かいせい]案[あん]について審議[しんぎ]します。\nB: 待機[たいき]児童[じどう]の解消[かいしょう]に向[む]けた取[と]り組[く]みの成果[せいか]は。\nA: 保育[ほいく]所[しょ]の新設[しんせつ]により、待機[たいき]児童[じどう]数[すう]は5割[わり]減[へ]りました。\nB: 大[おお]きな前進[ぜんしん]ですね。一方[いっぽう]で、質的[しつてき]な向上[こうじょう]は十分[じゅうぶん]でしょうか。\nA: ご指摘[してき]の通[とお]り、保育[ほいく]士[し]の待遇[たいぐう]改善[かいぜん]が次[つぎ]の課題[かだい]です。\nB: 処遇[しょぐう]の改善[かいぜん]を怠[おこた]れば、人材[じんざい]の流出[りゅうしゅつ]を招[まね]きかねません。\nA: 防止[ぼうし]策[さく]として、処遇[しょぐう]改善[かいぜん]加算[かさん]の拡充[かくじゅう]を要請[ようせい]します。\nB: 賛成[さんせい]です。来年度[らいねんど]予算[よさん]に反映[はんえい]させましょう。",
    translation: "A: We'll deliberate the draft revision of the child-welfare system. B: What are the results of initiatives to eliminate wait-list children? A: Through new nursery construction, the number of wait-list children has decreased by 50 percent. B: A major advance. On the other hand, is qualitative improvement sufficient? A: As you note, improving nursery-staff treatment is the next issue. B: If we neglect treatment improvement, we could invite talent outflow. A: As a prevention measure, I'll request expansion of treatment-improvement allowances. B: Agreed. Let's reflect it in next fiscal year's budget.",
    questions: [
      {
        q: "What did new nursery construction achieve?",
        choices: ["Eliminated all wait-lists", "Reduced wait-list children by 50%", "Hired 100 new staff", "Cut costs"],
        answerIndex: 1,
        explanation: "A says 待機[たいき]児童[じどう]数[すう]は5割[わり]減[へ]りました — decreased by 50 percent."
      },
      {
        q: "What does B ask about beyond quantitative gains?",
        choices: ["Cost control", "Qualitative improvement", "Site selection", "Operating hours"],
        answerIndex: 1,
        explanation: "B asks 質的[しつてき]な向上[こうじょう]は十分[じゅうぶん]でしょうか — is qualitative improvement sufficient?"
      },
      {
        q: "What could happen if treatment improvement is neglected?",
        choices: ["Higher enrollment", "Talent outflow", "Cost overruns", "Stricter regulations"],
        answerIndex: 1,
        explanation: "B says 人材[じんざい]の流出[りゅうしゅつ]を招[まね]きかねません — could invite talent outflow."
      },
      {
        q: "Where will the treatment-improvement allowance expansion be reflected?",
        choices: ["A private donation", "A special fund", "Next fiscal year's budget", "A municipal loan"],
        answerIndex: 2,
        explanation: "B says 来年度[らいねんど]予算[よさん]に反映[はんえい]させましょう — reflect in next fiscal year's budget."
      }
    ],
    estMinutes: 5,
    tags: ["welfare", "childcare"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-97 — Discussing a start-up ecosystem
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-97",
    title: "Start-up Ecosystem Strategy",
    level: "N2",
    context: "Two policy planners discussing how to build a start-up hub",
    text: "A: 本市[ほんし]のスタートアップ拠点[きょてん]化[か]戦略[せんりゃく]について議論[ぎろん]します。\nB: 既存[きぞん]の大企業[きぎょう]と新興[しんこう]企業[きぎょう]の連携[れんけい]をどう促[うなが]しますか。\nA: オープンイノベーション拠点[きょてん]を新設[しんせつ]し、交流[こうりゅう]の場[ば]を提供[ていきょう]する計画[けいかく]です。\nB: 拠点[きょてん]を設[もう]けるだけでは、持続[じぞく]的[てき]な成長[せいちょう]には繋[つな]がりません。\nA: ええ、その通[とお]りです。資金[しきん]面[めん]でも、官民[かんみん]ファンドを拡充[かくじゅう]します。\nB: 失敗[しっぱい]を許容[きょよう]する風土[ふうど]の醸成[じょうせい]も、不可欠[ふかけつ]な要素[ようそ]ですね。\nA: 同意[どうい]します。失敗[しっぱい]から学[まな]ぶ文化[ぶんか]を根付[ねづ]かせたい。\nB: 長[なが]期的[きてき]な視野[しや]が肝要[かんよう]です。継続[けいぞく]的[てき]な支援[しえん]を続[つづ]けましょう。",
    translation: "A: Let's discuss the strategy to turn our city into a start-up hub. B: How will you encourage collaboration between existing large firms and emerging firms? A: We plan to establish an open-innovation hub and provide a venue for exchange. B: Merely establishing a hub won't lead to sustainable growth. A: Yes, that's right. On the funding side, we'll also expand public-private funds. B: Cultivating a culture that tolerates failure is also an essential element. A: I agree. I want to root a culture of learning from failure. B: A long-term perspective is crucial. Let's continue sustained support.",
    questions: [
      {
        q: "What does A plan to establish?",
        choices: ["An incubator only", "An open-innovation hub", "A venture fund", "A university lab"],
        answerIndex: 1,
        explanation: "A says オープンイノベーション拠点[きょてん]を新設[しんせつ]し — establish an open-innovation hub."
      },
      {
        q: "What does B say about merely establishing a hub?",
        choices: ["It's sufficient", "It won't lead to sustainable growth", "It's too costly", "It's risky"],
        answerIndex: 1,
        explanation: "B says 持続[じぞく]的[てき]な成長[せいちょう]には繋[つな]がりません — won't lead to sustainable growth."
      },
      {
        q: "What does A plan to expand on the funding side?",
        choices: ["Bank loans", "Public-private funds", "Crowdfunding", "Foreign investment"],
        answerIndex: 1,
        explanation: "A says 官民[かんみん]ファンドを拡充[かくじゅう] — expand public-private funds."
      },
      {
        q: "What does B call essential to cultivate?",
        choices: ["A culture tolerating failure", "Strict performance targets", "Risk avoidance", "Export orientation"],
        answerIndex: 0,
        explanation: "B says 失敗[しっぱい]を許容[きょよう]する風土[ふうど]の醸成[じょうせい]も不可欠[ふかけつ] — cultivating a culture that tolerates failure is essential."
      }
    ],
    estMinutes: 6,
    tags: ["startup", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-98 — At the history museum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-98",
    title: "History Museum Exhibition",
    level: "N2",
    context: "Museum curators reviewing plans for a special Edo-science exhibition",
    text: "A: 特別[とくべつ]展[てん]「江戸[えど]の科学[かがく]」の企画[きかく]書[しょ]を審査[しんさ]します。\nB: 所蔵[しょぞう]品[ひん]の点数[てんすう]は、目標[もくひょう]の200点[てん]に達[たっ]しましたか。\nA: 国内[こくない]8館[かん]から協力[きょうりょく]を得[え]、185点[てん]を確保[かくほ]しました。\nB: かなりの規模[きぼ]ですね。展示[てんじ]空間[くうかん]のレイアウトに工夫[くふう]が必要[ひつよう]ですね。\nA: はい、動線[どうせん]の見直[みなお]しを設計[せっけい]事務所[じむしょ]に依頼[いらい]しました。\nB: 来場[らいじょう]者[しゃ]の利便[りべん]性[せい]を損[そこな]わず、かつ安全[あんぜん]を確保[かくほ]できる設計[せっけい]を。\nA: 承知[しょうち]いたしました。開幕[かいまく]に先立[さきだ]って、内覧[ないらん]会[かい]を企画[きかく]します。\nB: 期待[きたい]しております。広報[こうほう]戦略[せんりゃく]の準備[じゅんび]も進[すす]めましょう。",
    translation: "A: We'll review the plan document for the special exhibition 'Edo Science.' B: Has the number of exhibits reached the target of 200? A: We obtained cooperation from eight domestic museums and secured 185 items. B: Quite a scale. The layout of the exhibition space will require ingenuity. A: Yes, I've asked a design firm to review the visitor flow. B: A design that doesn't compromise visitor convenience and ensures safety. A: Understood. Prior to opening, I'll plan a private viewing. B: I look forward to it. Let's also prepare a public-relations strategy.",
    questions: [
      {
        q: "What is the special exhibition's theme?",
        choices: ["Modern art", "Edo science", "Ancient pottery", "Samurai armor"],
        answerIndex: 1,
        explanation: "A mentions 特別[とくべつ]展[てん]「江戸[えど]の科学[かがく]」 — special exhibition 'Edo Science.'"
      },
      {
        q: "How many exhibits did A secure?",
        choices: ["150", "175", "185", "200"],
        answerIndex: 2,
        explanation: "A says 185点[てん]を確保[かくほ]しました — secured 185 items."
      },
      {
        q: "What has A asked a design firm to do?",
        choices: ["Design posters", "Review the visitor flow", "Build display cases", "Translate captions"],
        answerIndex: 1,
        explanation: "A says 動線[どうせん]の見直[みなお]しを設計[せっけい]事務所[じむしょ]に依頼[いらい] — asked a design firm to review the visitor flow."
      },
      {
        q: "What will A plan prior to opening?",
        choices: ["A press tour", "A private viewing", "A school visit", "A ticket lottery"],
        answerIndex: 1,
        explanation: "A says 開幕[かいまく]に先立[さきだ]って、内覧[ないらん]会[かい]を企画[きかく] — plan a private viewing prior to opening."
      }
    ],
    estMinutes: 5,
    tags: ["culture", "museum"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-99 — A public transport modernization
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-99",
    title: "Public Transport Modernization",
    level: "N2",
    context: "Transport bureau officials planning autonomous-bus introduction",
    text: "A: 路線[ろせん]バスの次世[じせい]代[だい]化[か]計画[けいかく]の概要[がいよう]をご説明[せつめい]します。\nB: 自動[じどう]運転[うんてん]バスの導入[どうにゅう]は、どの路線[ろせん]で予定[よてい]されていますか。\nA: まず、過疎[かそ]地[ち]区[く]の3路線[ろせん]で試験[しけん]運行[うんこう]を始[はじ]めます。\nB: 運行[うんこう]コストの削減[さくげん]に加[くわ]えて、運転手[うんてんしゅ]不足[ぶそく]の緩和[かんわ]にも繋[つな]がりますね。\nA: その通[とお]りです。但[ただ]し、法規[ほうき]の整備[せいび]を待[ま]つ必要[ひつよう]があります。\nB: 国[くに]の動[うご]きを注視[ちゅうし]しつつ、準備[じゅんび]を進[すす]めましょう。\nA: はい。住民[じゅうみん]の理解[りかい]を得[え]るための説明会[せつめいかい]も計画[けいかく]しています。\nB: 良[よ]い着手[ちゃくしゅ]ですね。安全[あんぜん]性[せい]の確保[かくほ]を最優先[さいゆうせん]に。",
    translation: "A: I'll explain the outline of the route-bus modernization plan. B: On which routes is autonomous-bus introduction planned? A: First, we'll start trial operations on three routes in depopulated areas. B: In addition to reducing operating costs, it'll also lead to alleviating driver shortages. A: That's right. However, we need to wait for regulatory framework development. B: While watching the national moves, let's proceed with preparations. A: Yes. We're also planning briefing sessions to gain residents' understanding. B: A good starting move. With securing safety as the top priority.",
    questions: [
      {
        q: "Where will autonomous-bus trials begin?",
        choices: ["Central business district", "Tourist areas", "Depopulated areas", "School zones"],
        answerIndex: 2,
        explanation: "A says 過疎[かそ]地[ち]区[く]の3路線[ろせん]で — three routes in depopulated areas."
      },
      {
        q: "Beyond cost reduction, what does B note the plan will alleviate?",
        choices: ["Traffic jams", "Driver shortages", "Air pollution", "Maintenance costs"],
        answerIndex: 1,
        explanation: "B says 運転手[うんてんしゅ]不足[ぶそく]の緩和[かんわ]にも繋[つな]がる — leads to alleviating driver shortages."
      },
      {
        q: "What does A say must be awaited before rollout?",
        choices: ["Public funding", "Regulatory framework development", "Vehicle delivery", "Vendor selection"],
        answerIndex: 1,
        explanation: "A says 法規[ほうき]の整備[せいび]を待[ま]つ必要[ひつよう] — need to wait for regulatory framework development."
      },
      {
        q: "What does A plan to gain from residents?",
        choices: ["Funding contributions", "Understanding through briefing sessions", "Volunteer drivers", "Land offers"],
        answerIndex: 1,
        explanation: "A says 説明会[せつめいかい]も計画[けいかく] — planning briefing sessions to gain understanding."
      }
    ],
    estMinutes: 5,
    tags: ["transport", "technology"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-100 — Discussing a retirement community
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-100",
    title: "Retirement Community Plan",
    level: "N2",
    context: "Planners reviewing a suburban retirement community project",
    text: "A: 郊外[こうがい]に新設[しんせつ]するリタイヤメント・コミュニティの計画[けいかく]を審議[しんぎ]します。\nB: 高齢[こうれい]者[しゃ]の孤立[こりつ]を防[ふせ]ぐためにも、コミュニティ設計[せっけい]が重要[じゅうよう]です。\nA: ええ。医療[いりょう]、介護[かいご]、住居[じゅうきょ]を一箇所[いっかしょ]で提供[ていきょう]する構想[こうそう]です。\nB: 自立[じりつ]度[ど]に応[おう]じた段階[だんかい]的[てき]支援[しえん]体制[たいせい]は整[ととの]いますか。\nA: はい。健常[けんじょう]な方[ほう]から要介護[ようかいご]の方[ほう]まで、継続[けいぞく]的[てき]に住[す]み続[つづ]けられます。\nB: 素晴[すば]らしい理念[りねん]ですね。但[ただ]し、費用[ひよう]の壁[かべ]が高[たか]くないかと。\nA: 心配[しんぱい]ご無用[むよう]です。所得[しょとく]に応[おう]じて、支払[しはら]い額[がく]を調整[ちょうせい]します。\nB: 安心[あんしん]しました。成功[せいこう]すれば、他[ほか]の自治体[じちたい]のモデルとなりますね。",
    translation: "A: We'll deliberate the plan for a new retirement community to be built in the suburbs. B: To prevent isolation of the elderly, community design is also important. A: Yes. The concept is to provide medical care, nursing care, and housing in one location. B: Is there a phased support system matched to the degree of independence? A: Yes. From healthy individuals to those needing nursing care, residents can continue living there continuously. B: A wonderful concept. However, isn't the cost barrier too high? A: No need to worry. We'll adjust payment amounts according to income. B: I'm reassured. If successful, it'll become a model for other local governments.",
    questions: [
      {
        q: "Where will the retirement community be built?",
        choices: ["In the city center", "In the suburbs", "On an island", "Near a factory"],
        answerIndex: 1,
        explanation: "A says 郊外[こうがい]に新設[しんせつ]する — to be built in the suburbs."
      },
      {
        q: "What does A's concept provide in one location?",
        choices: ["Only housing", "Medical, nursing care, and housing", "Only medical care", "Only recreation"],
        answerIndex: 1,
        explanation: "A says 医療[いりょう]、介護[かいご]、住居[じゅうきょ]を一箇所[いっかしょ]で提供[ていきょう] — medical, nursing care, and housing in one location."
      },
      {
        q: "What concern does B raise?",
        choices: ["Cost barrier is too high", "Location is remote", "Design is dated", "Service is limited"],
        answerIndex: 0,
        explanation: "B says 費用[ひよう]の壁[かべ]が高[たか]くないか — isn't the cost barrier too high?"
      },
      {
        q: "How will payments be adjusted?",
        choices: ["By age", "By income", "By family size", "By health"],
        answerIndex: 1,
        explanation: "A says 所得[しょとく]に応[おう]じて、支払[しはら]い額[がく]を調整[ちょうせい] — adjusted according to income."
      }
    ],
    estMinutes: 5,
    tags: ["welfare", "housing"]
  }
];
