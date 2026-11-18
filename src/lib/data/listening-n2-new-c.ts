import type { ListeningData } from "@/lib/types";

// N2 listening exercises set C (new batch).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N2 grammar targets: 〜に富む, 〜あまり, 〜かねない, 〜に基づく, 〜とはいえ,
// 〜を免れない, 〜に伴う, 〜もさることながら, 〜なしには〜ない, 〜に先立って,
// 〜に過ぎない, 〜ざるを得ない, 〜次第, 〜限り, 〜気味, 〜ものの, etc.

export const listeningN2NewC: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n2n-41 — An academic symposium
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-41",
    title: "Academic Symposium",
    level: "N2",
    context: "A researcher and a panel chair discussing a keynote lecture",
    text: "A: 学会[がっかい]の基調講演[きちょうこうえん]を拝聴[はいちょう]いたしました。\nB: ありがとうございます。ご感想[かんそう]はいかがでしたか。\nA: 人工知能[じんこうちのう]の倫理[りんり]に関[かん]する議論[ぎろん]が示唆[しさ]に富[と]んでいました。\nB: おっしゃる通[とお]り、規制[きせい]と技術[ぎじゅつ]のバランスが鍵[かぎ]となっています。\nA: 規制[きせい]を厳[きび]しくするあまり、イノベーションが阻害[そがい]されかねません。\nB: その点[てん]に関[かん]しては、多国籍[たこくせき]の枠組[わくぐ]みに基[もと]づく調整[ちょうせい]が必要[ひつよう]です。\nA: 今後[こんご]の研究[けんきゅう]方針[ほうしん]にも反映[はんえい]されるのでしょうか。\nB: 間[ま]違[ちが]いなく。来年度[らいねんど]の研究[けんきゅう]計画[けいかく]に盛[も]り込[こ]む予定[よてい]です。",
    translation: "A: I attended the keynote lecture at the symposium. B: Thank you. What were your impressions? A: The discussion on AI ethics was rich in insight. B: As you say, the balance between regulation and technology is key. A: Making regulations too strict may end up stifling innovation. B: Regarding that point, coordination based on a multinational framework is necessary. A: Will it also be reflected in future research policy? B: Without a doubt. We plan to incorporate it into next year's research plan.",
    questions: [
      {
        q: "What does A think was valuable about the keynote?",
        choices: ["The rich insights on AI ethics", "The technical demos", "The networking reception", "The statistics on patents"],
        answerIndex: 0,
        explanation: "A says 議論[ぎろん]が示唆[しさ]に富[と]んでいました — the discussion was rich in insight."
      },
      {
        q: "What is the risk of making regulations too strict?",
        choices: ["Higher costs", "Slower review", "Stifling innovation", "Loss of funding"],
        answerIndex: 2,
        explanation: "A says 規制[きせい]を厳[きび]しくするあまり、イノベーションが阻害[そがい]されかねません — too much regulation may stifle innovation."
      },
      {
        q: "What does B say is needed regarding that concern?",
        choices: ["Stricter national laws", "Coordination based on a multinational framework", "A temporary freeze on AI research", "Voluntary industry guidelines"],
        answerIndex: 1,
        explanation: "B says 多国籍[たこくせき]の枠組[わくぐ]みに基[もと]づく調整[ちょうせい]が必要[ひつよう] — coordination based on a multinational framework is necessary."
      },
      {
        q: "When will the ideas be reflected in the research plan?",
        choices: ["This fiscal year", "Next fiscal year", "Within five years", "After a referendum"],
        answerIndex: 1,
        explanation: "B says 来年度[らいねんど]の研究[けんきゅう]計画[けいかく]に盛[も]り込[こ]む — incorporated into next year's research plan."
      }
    ],
    estMinutes: 5,
    tags: ["academic", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-42 — Discussing a housing policy
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-42",
    title: "Housing Policy Reform",
    level: "N2",
    context: "A citizen and a housing bureau official discussing public housing policy",
    text: "A: 公営住宅[こうえいじゅうたく]の新[あたら]しい政策[せいさく]について伺[うかが]いたいのですが。\nB: 今回[こんかい]の改正[かいせい]は、低所得者[ていしょとくしゃ]向[む]けの家賃[やちん]補助[ほじょ]を拡充[かくじゅう]するものです。\nA: なるほど。ただ、申請[しんせい]の要件[ようけん]が厳[きび]しすぎるのではありませんか。\nB: おっしゃる通[とお]りです。現場[げんば]の声[こえ]を反映[はんえい]させつつある段階[だんかい]です。\nA: 審査[しんさ]に要[よう]する期間[きかん]も短縮[たんしゅく]される予定[よてい]ですか。\nB: ええ、来月[らいげつ]よりシステムを改修[かいしゅう]する次第[しだい]です。\nA: それなら、待[ま]ち望[のぞ]んでいた人々[ひとびと]にとって朗報[ろうほう]に違[ちが]いないですね。",
    translation: "A: I'd like to ask about the new public housing policy. B: This revision expands rent subsidies for low-income earners. A: I see. But aren't the application requirements too strict? B: You're right. We're at the stage of reflecting on-site feedback. A: Will the review period also be shortened? B: Yes, we are about to overhaul the system starting next month. A: Then it must be good news for the people who have been waiting for it.",
    questions: [
      {
        q: "What does the new housing policy expand?",
        choices: ["The number of units", "Rent subsidies for low-income earners", "The loan guarantee", "The land supply"],
        answerIndex: 1,
        explanation: "B says 低所得者[ていしょとくしゃ]向[む]けの家賃[やちん]補助[ほじょ]を拡充[かくじゅう] — expanding rent subsidies for low-income earners."
      },
      {
        q: "What concern does A raise about the policy?",
        choices: ["The application requirements are too strict", "The budget is too small", "The locations are inconvenient", "The subsidies are taxable"],
        answerIndex: 0,
        explanation: "A says 申請[しんせい]の要件[ようけん]が厳[きび]しすぎる — the application requirements are too strict."
      },
      {
        q: "What stage is the policy currently in, according to B?",
        choices: ["Already finalized", "Being reviewed based on on-site feedback", "Pending parliamentary approval", "Suspended indefinitely"],
        answerIndex: 1,
        explanation: "B says 現場[げんば]の声[こえ]を反映[はんえい]させつつある段階[だんかい] — at the stage of reflecting on-site feedback."
      },
      {
        q: "When will the system overhaul begin?",
        choices: ["This month", "Next month", "Next fiscal year", "After a public comment period"],
        answerIndex: 1,
        explanation: "B says 来月[らいげつ]よりシステムを改修[かいしゅう]する次第[しだい] — starting next month."
      }
    ],
    estMinutes: 5,
    tags: ["policy", "housing"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-43 — At the patent office
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-43",
    title: "Patent Office Review",
    level: "N2",
    context: "An applicant and a patent examiner discussing a rejected claim",
    text: "A: 特許[とっきょ]出願[しゅつがん]の審査[しんさ]結果[けっか]についてお尋[たず]ねします。\nB: 拝見[はいけん]しました。請求項[せいきゅうこう]が先行技術[せんこうぎじゅつ]と重複[ちょうふく]しているとのことです。\nA: しかし、当方[とうほう]の発明[はつめい]は独自[どくじ]の構造[こうぞう]に基[もと]づいております。\nB: とはいえ、新規性[しんきせい]の立証[りっしょう]が不十分[ふじゅうぶん]であるとの指摘[してき]は免[まぬか]れません。\nA: 反証資料[はんしょうしりょう]を追加[ついか]提出[ていしゅつ]することは可能[かのう]でしょうか。\nB: 期限[きげん]以内[いない]であれば、再審査[さいしんさ]を申請[しんせい]できます。\nA: 承知[しょうち]いたしました。至急[しきゅう]に資料[しりょう]を整備[せいび]いたします。",
    translation: "A: I'd like to ask about the examination result of my patent application. B: I've reviewed it. The claims are said to overlap with prior art. A: However, our invention is based on a unique structure. B: That said, we can't avoid the criticism that proof of novelty is insufficient. A: Is it possible to submit additional counter-evidence? B: If within the deadline, you can apply for a re-examination. A: Understood. I'll prepare the materials urgently.",
    questions: [
      {
        q: "Why was the patent application rejected?",
        choices: ["The claims overlapped with prior art", "The fee was unpaid", "The form was incorrect", "The inventor was underage"],
        answerIndex: 0,
        explanation: "B says 請求項[せいきゅうこう]が先行技術[せんこうぎじゅつ]と重複[ちょうふく]している — the claims overlap with prior art."
      },
      {
        q: "What does A claim about the invention?",
        choices: ["It is cheaper to produce", "It is based on a unique structure", "It was developed abroad", "It is already commercialized"],
        answerIndex: 1,
        explanation: "A says 当方[とうほう]の発明[はつめい]は独自[どくじ]の構造[こうぞう]に基[もと]づいております — based on a unique structure."
      },
      {
        q: "What criticism can the applicant not avoid, according to B?",
        choices: ["Late submission", "Insufficient proof of novelty", "Conflict of interest", "Incomplete drawings"],
        answerIndex: 1,
        explanation: "B says 新規性[しんきせい]の立証[りっしょう]が不十分[ふじゅうぶん]であるとの指摘[してき]は免[まぬか]れません — cannot avoid criticism of insufficient novelty proof."
      },
      {
        q: "Under what condition can a re-examination be requested?",
        choices: ["If filed within the deadline", "If a higher fee is paid", "If a co-inventor joins", "If the examiner agrees"],
        answerIndex: 0,
        explanation: "B says 期限[きげん]以内[いない]であれば、再審査[さいしんさ]を申請[しんせい]できる — if within the deadline."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "patent"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-44 — A diplomatic briefing
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-44",
    title: "Diplomatic Briefing",
    level: "N2",
    context: "A journalist and a foreign ministry spokesperson after a summit",
    text: "A: 今回[こんかい]の首脳会談[しゅのうかいだん]のポイントを簡潔[かんけつ]にまとめてください。\nB: まず、貿易[ぼうえき]不均衡[ふきんこう]の是正[ぜせい]が主要[しゅよう]議題[ぎだい]となりました。\nA: 関税[かんぜい]の引[ひ]き下[さ]げに合意[ごうい]できたのでしょうか。\nB: 段階的[だんかいてき]な見直[みなお]しで合意[ごうい]したものの、即時[そくじ]実施[じっし]は困難[こんなん]です。\nA: 相手側[あいてがわ]が譲歩[じょうほ]する見込[みこ]みはあると判断[はんだん]してよろしいですか。\nB: ええ。ただ、交渉[こうしょう]が長期化[ちょうきか]すれば、合意[ごうい]が水泡[すいほう]に帰[き]すおそれも否定[ひてい]できません。\nA: 今後[こんご]の外交[がいこう]対応[たいおう]に注目[ちゅうもく]したいと思[おも]います。",
    translation: "A: Please briefly summarize the key points of this summit. B: First, correcting trade imbalances was a major agenda item. A: Did they agree to lower tariffs? B: They agreed on a phased review, but immediate implementation is difficult. A: Can we judge that the other side is willing to compromise? B: Yes. However, if negotiations drag on, we can't deny the risk of the agreement falling apart. A: I'll watch the future diplomatic responses closely.",
    questions: [
      {
        q: "What was the main agenda item of the summit?",
        choices: ["Border security", "Correcting trade imbalances", "Cultural exchange", "Climate finance"],
        answerIndex: 1,
        explanation: "B says 貿易[ぼうえき]不均衡[ふきんこう]の是正[ぜせい]が主要[しゅよう]議題[ぎだい] — correcting trade imbalances was a major agenda."
      },
      {
        q: "What did they agree on regarding tariffs?",
        choices: ["Immediate cuts", "A phased review", "A complete freeze", "A unified rate"],
        answerIndex: 1,
        explanation: "B says 段階的[だんかいてき]な見直[みなお]しで合意[ごうい]したものの — agreed on a phased review."
      },
      {
        q: "What risk does B mention if negotiations drag on?",
        choices: ["Public backlash", "The agreement falling apart", "A leadership change", "Sanctions from allies"],
        answerIndex: 1,
        explanation: "B says 合意[ごうい]が水泡[すいほう]に帰[き]すおそれ — risk of the agreement falling apart (going up in smoke)."
      },
      {
        q: "What will A do going forward?",
        choices: ["Travel abroad", "Cover the diplomatic responses", "Write an editorial", "Apply for press credentials"],
        answerIndex: 1,
        explanation: "A says 今後[こんご]の外交[がいこう]対応[たいおう]に注目[ちゅうもく]したい — wants to watch future diplomatic responses."
      }
    ],
    estMinutes: 5,
    tags: ["diplomacy", "trade"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-45 — Discussing a currency crisis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-45",
    title: "Currency Crisis Analysis",
    level: "N2",
    context: "A reporter and an economist discussing a sharp currency depreciation",
    text: "A: 通貨[つうか]危機[きき]の影響[えいきょう]について、専門家[せんもんか]の見解[けんかい]を伺[うかが]います。\nB: 為替[かわせ]レートの急落[きゅうらく]に伴[ともな]って、輸入品[ゆにゅうひん]の価格[かかく]が上昇[じょうしょう]しつつあります。\nA: 金融[きんゆう]当局[とうきょく]の介入[かいにゅう]では不十分[ふじゅうぶん]なのでしょうか。\nB: 介入[かいにゅう]もさることながら、根本的[こんぽんてき]な財政[ざいせい]改革[かいかく]なしには回復[かいふく]は見込[みこ]めません。\nA: 中小企業[ちゅうしょうきぎょう]への影響[えいきょう]が懸念[けねん]されます。\nB: ええ、連鎖的[れんさてき]な倒産[とうさん]が続出[ぞくしゅつ]しかねない状況[じょうきょう]です。\nA: 政府[せいふ]は追加[ついか]の支援[しえん]策[さく]を検討[けんとう]中[ちゅう]と聞[き]いています。",
    translation: "A: I'd like to hear an expert's view on the impact of the currency crisis. B: Along with the sharp fall in the exchange rate, import prices are rising. A: Is intervention by the monetary authorities insufficient? B: Intervention is one thing, but without fundamental fiscal reform, recovery cannot be expected. A: The impact on small and medium enterprises is concerning. B: Yes, we're in a situation where a chain of bankruptcies could well occur. A: I hear the government is considering additional support measures.",
    questions: [
      {
        q: "What is happening to import prices?",
        choices: ["They are stable", "They are rising along with the currency fall", "They are dropping sharply", "They are subsidized"],
        answerIndex: 1,
        explanation: "B says 為替[かわせ]レートの急落[きゅうらく]に伴[ともな]って、輸入品[ゆにゅうひん]の価格[かかく]が上昇[じょうしょう]しつつある — rising along with the rate fall."
      },
      {
        q: "What does B say is necessary for recovery?",
        choices: ["More intervention", "Fundamental fiscal reform", "Higher interest on deposits", "Currency controls"],
        answerIndex: 1,
        explanation: "B says 根本的[こんぽんてき]な財政[ざいせい]改革[かいかく]なしには回復[かいふく]は見込[みこ]めない — without fundamental fiscal reform, recovery is not expected."
      },
      {
        q: "What risk does B see for small and medium enterprises?",
        choices: ["A labor shortage", "A chain of bankruptcies", "A tax hike", "A loss of customers abroad"],
        answerIndex: 1,
        explanation: "B says 連鎖的[れんさてき]な倒産[とうさん]が続出[ぞくしゅつ]しかねない — a chain of bankruptcies could occur."
      },
      {
        q: "What is the government currently doing?",
        choices: ["Cutting interest rates", "Considering additional support measures", "Raising the consumption tax", "Banning capital outflows"],
        answerIndex: 1,
        explanation: "A says 政府[せいふ]は追加[ついか]の支援[しえん]策[さく]を検討[けんとう]中[ちゅう] — considering additional support measures."
      }
    ],
    estMinutes: 6,
    tags: ["economy", "finance"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-46 — At the audit firm
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-46",
    title: "Audit Firm Review",
    level: "N2",
    context: "A junior auditor and a senior partner reviewing a draft audit report",
    text: "A: 監査[かんさ]報告書[ほうこくしょ]の草案[そうあん]を確認[かくにん]しました。\nB: お疲[つか]れ様[さま]です。修正[しゅうせい]すべき点[てん]はありますか。\nA: 収益[しゅうえき]計上[けいじょう]のタイミングに疑義[ぎぎ]が残[のこ]ります。\nB: 追加[ついか]の資料[しりょう]を提出[ていしゅつ]してもらった上[うえ]で再検討[さいけんとう]しましょう。\nA: それでも解決[かいけつ]しない場合[ばあい]、修正[しゅうせい]を余儀[よぎ]なくされるでしょう。\nB: 承知[しょうち]いたしました。早[はや]急[きゅう]に対応[たいおう]いたします。\nA: 期日[きじつ]までに必[かなら]ず整合性[せいごうせい]を取[と]ってください。",
    translation: "A: I've reviewed the draft audit report. B: Thanks for your work. Are there points to revise? A: There remains doubt about the timing of revenue recognition. B: Let's reconsider after obtaining additional materials. A: Even so, if it isn't resolved, we'll be forced to revise it. B: Understood. I'll respond urgently. A: Please ensure consistency by the deadline.",
    questions: [
      {
        q: "What doubt remains in the draft report?",
        choices: ["The timing of revenue recognition", "The inventory count method", "The subsidiary list", "The auditor signature"],
        answerIndex: 0,
        explanation: "A says 収益[しゅうえき]計上[けいじょう]のタイミングに疑義[ぎぎ]が残[のこ]る — doubt about the timing of revenue recognition."
      },
      {
        q: "What will they do before reconsidering the issue?",
        choices: ["Hold a board meeting", "Obtain additional materials", "Consult outside counsel", "Reclassify assets"],
        answerIndex: 1,
        explanation: "B says 追加[ついか]の資料[しりょう]を提出[ていしゅつ]してもらった上[うえ]で再検討[さいけんとう] — reconsider after obtaining additional materials."
      },
      {
        q: "What may happen if the issue isn't resolved?",
        choices: ["They will resign", "They will be forced to revise it", "They will report to regulators", "They will delay the audit"],
        answerIndex: 1,
        explanation: "A says 修正[しゅうせい]を余儀[よぎ]なくされるでしょう — will be forced to revise it."
      },
      {
        q: "What does A ask B to ensure by the deadline?",
        choices: ["A lower audit fee", "Consistency", "A longer extension", "A public statement"],
        answerIndex: 1,
        explanation: "A says 期日[きじつ]までに必[かなら]ず整合性[せいごうせい]を取[と]ってください — ensure consistency by the deadline."
      }
    ],
    estMinutes: 5,
    tags: ["accounting", "audit"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-47 — A medical ethics debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-47",
    title: "Medical Ethics Debate",
    level: "N2",
    context: "Two physicians debating the withdrawal of life-sustaining treatment",
    text: "A: 終末期医療[しゅうまつきいりょう]の在[ざい]り方[かた]について議論[ぎろん]したいと思[おも]います。\nB: 延命[えんめい]治療[ちりょう]の中止[ちゅうし]をめぐって、見解[けんかい]が割[わ]れています。\nA: 患者[かんじゃ]の意思[いし]を尊重[そんちょう]する限[かぎ]り、過度[かど]な介入[かいにゅう]は避[さ]けるべきです。\nB: とはいえ、家族[かぞく]の意向[いこう]と衝突[しょうとつ]するケースも少[すく]なくありません。\nA: 法的[ほうてき]な枠組[わくぐ]みが整備[せいび]されつつあるとはいえ、限界[げんかい]があります。\nB: ええ、倫理[りんり]委員会[いいんかい]の判断[はんだん]に委[ゆだ]ねるしかない部分[ぶぶん]も残[のこ]ります。\nA: ガイドラインの継続的[けいぞくてき]な見直[みなお]しが欠[か]かせませんね。",
    translation: "A: I'd like to discuss the proper approach to end-of-life care. B: Opinions are divided over the discontinuation of life-sustaining treatment. A: As long as we respect the patient's wishes, excessive intervention should be avoided. B: That said, cases that conflict with the family's wishes are not rare. A: Although a legal framework is being developed, there are limits. B: Yes, there remain parts that can only be left to the ethics committee's judgment. A: Continuous review of the guidelines is indispensable.",
    questions: [
      {
        q: "What is the debate mainly about?",
        choices: ["Cost of intensive care", "Discontinuing life-sustaining treatment", "Training new doctors", "Hospital staffing levels"],
        answerIndex: 1,
        explanation: "B says 延命[えんめい]治療[ちりょう]の中止[ちゅうし]をめぐって、見解[けんかい]が割[わ]れている — opinions are divided over discontinuing life-sustaining treatment."
      },
      {
        q: "What does A say should be avoided?",
        choices: ["Excessive intervention", "Family meetings", "Palliative care", "Second opinions"],
        answerIndex: 0,
        explanation: "A says 過度[かど]な介入[かいにゅう]は避[さ]けるべき — excessive intervention should be avoided."
      },
      {
        q: "What does B point out about families?",
        choices: ["They often demand more treatment", "Cases conflicting with family wishes are not rare", "They always agree with patients", "They refuse to attend meetings"],
        answerIndex: 1,
        explanation: "B says 家族[かぞく]の意向[いこう]と衝突[しょうとつ]するケースも少[すく]なくない — cases conflicting with family wishes are not rare."
      },
      {
        q: "What does B say remains unavoidable?",
        choices: ["Court appeals", "Leaving some decisions to the ethics committee", "Public disclosure", "Mandatory counseling"],
        answerIndex: 1,
        explanation: "B says 倫理[りんり]委員会[いいんかい]の判断[はんだん]に委[ゆだ]ねるしかない部分[ぶぶん]も残[のこ]る — parts that can only be left to the ethics committee."
      }
    ],
    estMinutes: 6,
    tags: ["medical", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-48 — Discussing an urban plan
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-48",
    title: "Urban Planning Dialogue",
    level: "N2",
    context: "A resident and a city planner discussing a new urban development plan",
    text: "A: 新[あたら]しい都市計画[としけいかく]の概要[がいよう]をご説明[せつめい]ください。\nB: 公共交通[こうきょうこうつう]網[もう]の拡充[かくじゅう]と緑地[りょくち]の保全[ほぜん]が中心[ちゅうしん]です。\nA: 開発[かいはつ]と保護[ほご]のバランスを取[と]るのは難[むずか]しいのではありませんか。\nB: その通[とお]りです。住民[じゅうみん]の合意[ごうい]形成[けいせい]なしには前進[ぜんしん]できません。\nA: 説明会[せつめいかい]はいつ頃[ごろ]開催[かいさい]される予定[よてい]ですか。\nB: 環境[かんきょう]影響[えいきょう]評価[ひょうか]が終[お]わり次第[しだい]、公募[こうぼ]を始[はじ]めます。\nA: 透明性[とうめいせい]が確保[ほしょう]されるなら安心[あんしん]できます。",
    translation: "A: Please explain the outline of the new urban plan. B: It focuses on expanding the public transit network and preserving green spaces. A: Isn't it difficult to balance development and conservation? B: That's right. Without building consensus among residents, we can't move forward. A: When will the explanatory meetings be held? B: As soon as the environmental impact assessment is complete, we'll begin public consultation. A: If transparency is ensured, I can feel reassured.",
    questions: [
      {
        q: "What are the two main focuses of the urban plan?",
        choices: ["Housing and roads", "Public transit and green spaces", "Industry and tourism", "Schools and hospitals"],
        answerIndex: 1,
        explanation: "B says 公共交通[こうきょうこうつう]網[もう]の拡充[かくじゅう]と緑地[りょくち]の保全[ほぜん]が中心[ちゅうしん] — expanding transit and preserving green spaces."
      },
      {
        q: "What does B say is necessary to move forward?",
        choices: ["Additional funding", "Consensus among residents", "A mayoral election", "Federal approval"],
        answerIndex: 1,
        explanation: "B says 住民[じゅうみん]の合意[ごうい]形成[けいせい]なしには前進[ぜんしん]できない — can't move forward without resident consensus."
      },
      {
        q: "When will public consultation begin?",
        choices: ["After the environmental impact assessment is complete", "After the budget is approved", "Once a contractor is chosen", "After a public referendum"],
        answerIndex: 0,
        explanation: "B says 環境[かんきょう]影響[えいきょう]評価[ひょうか]が終[お]わり次第[しだい]、公募[こうぼ]を始[はじ]める — as soon as the environmental impact assessment is complete."
      },
      {
        q: "What would reassure A?",
        choices: ["A lower tax burden", "Ensured transparency", "Faster construction", "A bigger park"],
        answerIndex: 1,
        explanation: "A says 透明性[とうめいせい]が確保[ほしょう]されるなら安心[あんしん]できる — if transparency is ensured, A can feel reassured."
      }
    ],
    estMinutes: 5,
    tags: ["urban", "planning"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-49 — At the labor court
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-49",
    title: "Labor Court Proceedings",
    level: "N2",
    context: "A company executive and a labor lawyer ahead of a labor tribunal",
    text: "A: 本件[ほんけん]の労働審判[ろうどうしんぱん]について、見通[みとお]しをお聞[き]かせください。\nB: 申立人[もうしたてにん]側[がわ]の未払[みはら]い残業代[ざんぎょうだい]請求[せいきゅう]は一部[いちぶ]認容[にんよう]される見込[みこ]みです。\nA: 会社側[がいしゃがわ]の主張[しゅちょう]は棄却[ききゃく]されるのでしょうか。\nB: 立証[りっしょう]が不十分[ふじゅうぶん]である以上[いじょう]、全面的[ぜんめんてき]な否認[ひにん]は困難[こんなん]です。\nA: 和解[わかい]の可能性[かのうせい]はあるでしょうか。\nB: 双方[そうほう]が歩[あゆ]み寄[よ]る意思[いし]を見[み]せる限[かぎ]り、示談[じだん]成立[せいりつ]の可能性[かのうせい]はあります。\nA: それなら、社内[しゃない]で検討[けんとう]すべき条件[じょうけん]をまとめます。",
    translation: "A: Please give us the outlook for the labor tribunal in this case. B: The applicant's claim for unpaid overtime is expected to be partially upheld. A: Will the company's argument be dismissed? B: As long as the evidence is insufficient, a full denial is difficult. A: Is there any chance of a settlement? B: As long as both sides show willingness to compromise, a settlement is possible. A: In that case, I'll compile the conditions we should consider internally.",
    questions: [
      {
        q: "What is expected to happen to the applicant's claim?",
        choices: ["Fully upheld", "Partially upheld", "Dismissed", "Postponed"],
        answerIndex: 1,
        explanation: "B says 未払[みはら]い残業代[ざんぎょうだい]請求[せいきゅう]は一部[いちぶ]認容[にんよう]される見込[みこ]み — expected to be partially upheld."
      },
      {
        q: "Why is a full denial difficult for the company?",
        choices: ["The testimony is contradictory", "The evidence is insufficient", "The judge is biased", "The statute has expired"],
        answerIndex: 1,
        explanation: "B says 立証[りっしょう]が不十分[ふじゅうぶん]である以上[いじょう]、全面的[ぜんめんてき]な否認[ひにん]は困難[こんなん] — since evidence is insufficient, full denial is difficult."
      },
      {
        q: "Under what condition is a settlement possible?",
        choices: ["If the judge recommends it", "If both sides show willingness to compromise", "If the union calls off the strike", "If the company pays in full"],
        answerIndex: 1,
        explanation: "B says 双方[そうほう]が歩[あゆ]み寄[よ]る意思[いし]を見[み]せる限[かぎ]り — as long as both sides show willingness to compromise."
      },
      {
        q: "What will A do next?",
        choices: ["File an appeal", "Compile conditions to consider internally", "Resign from the board", "Negotiate directly with employees"],
        answerIndex: 1,
        explanation: "A says 社内[しゃない]で検討[けんとう]すべき条件[じょうけん]をまとめる — compile conditions to consider internally."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "labor"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-50 — A cultural heritage meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-50",
    title: "Cultural Heritage Meeting",
    level: "N2",
    context: "A preservation officer and a tourism official at a heritage site",
    text: "A: 史跡[しせき]の保存[ほぞん]と観光[かんこう]開発[かいはつ]について意見[いけん]を交[か]わしましょう。\nB: 登録[とうろく]解除[かいじょ]の危機[きき]に瀕[ひん]している以上[いじょう]、早急[そうきゅう]な対策[たいさく]が必要[ひつよう]です。\nA: 観光客[かんこうきゃく]の急増[きゅうぞう]に伴[ともな]う劣化[れっか]が主[おも]な原因[げんいん]ですね。\nB: ええ、入場[にゅうじょう]制限[せいげん]を設[もう]けることなく保護[ほご]するのは不可能[ふかのう]です。\nA: 地域[ちいき]の理解[りかい]を得[え]つつ、段階的[だんかいてき]に制限[せいげん]を導入[どうにゅう]すべきでしょう。\nB: 賛成[さんせい]です。まずは試験的[しけんてき]な導入[どうにゅう]から始[はじ]めようではありませんか。",
    translation: "A: Let's exchange views on preserving the historic site and developing tourism. B: Since we're on the verge of having it delisted, urgent measures are necessary. A: The deterioration caused by the surge in tourists is the main cause, isn't it. B: Yes, protecting the site without setting entry limits is impossible. A: We should introduce limits gradually while gaining local understanding. B: I agree. Why don't we start with a trial introduction?",
    questions: [
      {
        q: "Why are urgent measures necessary?",
        choices: ["The site is on the verge of being delisted", "A storm damaged the site", "Funding was cut", "A lawsuit is pending"],
        answerIndex: 0,
        explanation: "B says 登録[とうろく]解除[かいじょ]の危機[きき]に瀕[ひん]している以上[いじょう] — since on the verge of being delisted."
      },
      {
        q: "What is the main cause of deterioration?",
        choices: ["Weathering", "A surge in tourists", "Poor maintenance", "Vandalism"],
        answerIndex: 1,
        explanation: "A says 観光客[かんこうきゃく]の急増[きゅうぞう]に伴[ともな]う劣化[れっか]が主[おも]な原因[げんいん] — the surge in tourists."
      },
      {
        q: "What does B say is impossible?",
        choices: ["Protecting the site without entry limits", "Reaching locals this year", "Raising entry fees", "Banning photography"],
        answerIndex: 0,
        explanation: "B says 入場[にゅうじょう]制限[せいげん]を設[もう]けることなく保護[ほご]するのは不可能[ふかのう] — protecting without entry limits is impossible."
      },
      {
        q: "What does B propose they start with?",
        choices: ["A full ban on tourists", "A trial introduction", "A new ticketing system", "An online reservation system"],
        answerIndex: 1,
        explanation: "B says まずは試験的[しけんてき]な導入[どうにゅう]から始[はじ]めよう — start with a trial introduction."
      }
    ],
    estMinutes: 5,
    tags: ["heritage", "tourism"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-51 — Discussing an education reform
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-51",
    title: "Education Reform Discussion",
    level: "N2",
    context: "A teacher and a board of education official discussing a reform proposal",
    text: "A: 新[あたら]しい教育[きょういく]改革[かいかく]案[あん]に対[たい]する評価[ひょうか]はいかがですか。\nB: 詰[つ]め込[こ]み教育[きょういく]から脱却[だっきゃく]する点[てん]は評価[ひょうか]できるものの、現場[げんば]の負担[ふたん]増[ぞう]が懸念[けねん]されます。\nA: 教員[きょういん]の研修[けんしゅう]体制[たいせい]は整備[せいび]されるのでしょうか。\nB: その点[てん]に関[かん]しては、十分[じゅうぶん]とは言[い]い切[き]れません。\nA: カリキュラムの改定[かいてい]に先立[さきだ]って、十分[じゅうぶん]な議論[ぎろん]が必要[ひつよう]です。\nB: おっしゃる通[とお]り、拙速[せっそく]な導入[どうにゅう]は避[さ]けるべきです。\nA: 保護者[ほごしゃ]の声[こえ]も広[ひろ]く集[あつ]める必要[ひつよう]がありますね。",
    translation: "A: How do you evaluate the new education reform proposal? B: While the move away from rote learning is commendable, the increased burden on the front lines is a concern. A: Will the teacher training system be strengthened? B: Regarding that, I can't say it's sufficient. A: Prior to revising the curriculum, sufficient discussion is necessary. B: As you say, a hasty introduction should be avoided. A: We also need to gather parents' voices broadly.",
    questions: [
      {
        q: "What aspect of the reform does B commend?",
        choices: ["More exams", "Moving away from rote learning", "Smaller class sizes", "More homework"],
        answerIndex: 1,
        explanation: "B says 詰[つ]め込[こ]み教育[きょういく]から脱却[だっきゃく]する点[てん]は評価[ひょうか]できる — moving away from rote learning is commendable."
      },
      {
        q: "What is B's concern about the reform?",
        choices: ["Higher costs", "Increased burden on the front lines", "Lower test scores", "Parental backlash"],
        answerIndex: 1,
        explanation: "B says 現場[げんば]の負担[ふたん]増[ぞう]が懸念[けねん]される — increased burden on the front lines is a concern."
      },
      {
        q: "What does A say is necessary before revising the curriculum?",
        choices: ["A pilot program", "Sufficient discussion", "A budget increase", "An external review"],
        answerIndex: 1,
        explanation: "A says カリキュラムの改定[かいてい]に先立[さきだ]って、十分[じゅうぶん]な議論[ぎろん]が必要[ひつよう] — sufficient discussion is necessary beforehand."
      },
      {
        q: "What does A also say they need to gather?",
        choices: ["International case studies", "Parents' voices broadly", "Student test data", "Teacher evaluations"],
        answerIndex: 1,
        explanation: "A says 保護者[ほごしゃ]の声[こえ]も広[ひろ]く集[あつ]める必要[ひつよう] — need to gather parents' voices broadly."
      }
    ],
    estMinutes: 5,
    tags: ["education", "reform"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-52 — At the securities commission
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-52",
    title: "Securities Commission Inquiry",
    level: "N2",
    context: "An investigator and a listed company's compliance officer",
    text: "A: 上場企業[じょうじょうきぎょう]の情報開示[じょうほうかいじ]義務[ぎむ]違反[いはん]について調査[ちょうさ]しています。\nB: ご協力[きょうりょく]いたします。何[なに]か問題[もんだい]でも。\nA: 重要[じゅうよう]事実[じじつ]の公表[こうひょう]遅延[ちえん]が確認[かくにん]されました。\nB: 立証[りっしょう]には至[いた]っていないものの、疑義[ぎぎ]は免[まぬか]れません。\nA: インサイダー取引[とりひき]の疑[うたが]いもあるのでしょうか。\nB: 当時[とうじ]の担当者[たんとうしゃ]から事情[じじょう]を聴取[ちょうしゅ]した上[うえ]で判断[はんだん]します。\nA: 厳正[げんせい]な措置[そち]をもって臨[のぞ]む所存[しょぞん]です。",
    translation: "A: We are investigating a listed company for violation of disclosure obligations. B: We'll cooperate. Is there an issue? A: A delay in disclosing material facts has been confirmed. B: Although it hasn't been proven, we can't avoid suspicion. A: Is there also suspicion of insider trading? B: We'll decide after hearing from the person in charge at the time. A: We intend to respond with strict measures.",
    questions: [
      {
        q: "What violation is being investigated?",
        choices: ["Late payment of dividends", "Delay in disclosing material facts", "False accounting entries", "Unauthorized share buybacks"],
        answerIndex: 1,
        explanation: "A says 重要[じゅうよう]事実[じじつ]の公表[こうひょう]遅延[ちえん]が確認[かくにん]された — delay in disclosing material facts was confirmed."
      },
      {
        q: "What does A note about insider trading?",
        choices: ["It has been proven", "There is suspicion of it", "It has been ruled out", "It is unrelated"],
        answerIndex: 1,
        explanation: "A asks インサイダー取引[とりひき]の疑[うたが]いもあるのでしょうか — asking if there is also suspicion of insider trading."
      },
      {
        q: "What will B do before making a judgment?",
        choices: ["Hire external counsel", "Hear from the person in charge at the time", "Conduct a shareholder vote", "Wait for the next audit"],
        answerIndex: 1,
        explanation: "B says 当時[とうじ]の担当者[たんとうしゃ]から事情[じじょう]を聴取[ちょうしゅ]した上[うえ]で判断[はんだん]する — decide after hearing from the person in charge."
      },
      {
        q: "How does A intend to respond?",
        choices: ["With strict measures", "Through a public apology", "By settling out of court", "By restructuring the board"],
        answerIndex: 0,
        explanation: "A says 厳正[げんせい]な措置[そち]をもって臨[のぞ]む所存[しょぞん] — intends to respond with strict measures."
      }
    ],
    estMinutes: 5,
    tags: ["finance", "compliance"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-53 — A climate summit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-53",
    title: "Climate Summit Outcomes",
    level: "N2",
    context: "A delegate and a minister discussing emission reduction targets",
    text: "A: 気候[きこう]変動[へんどう]対策[たいさく]の国際[こくさい]合意[ごうい]について伺[うかが]います。\nB: 温室[おんしつ]効果[こうか]ガス削減[さくげん]目標[もくひょう]の引[ひ]き上[あ]げが決議[けつぎ]されました。\nA: 先進国[せんしんこく]の責任[せきにん]が過大[かだい]ではないでしょうか。\nB: 歴史的[れきしてき]な排出量[はいしゅつりょう]に照[て]らし合[あ]わせれば、妥当[だとう]と言[い]わざるを得[え]ません。\nA: 発展途上国[はってんとじょうこく]への資金[しきん]支援[しえん]は十分[じゅうぶん]ですか。\nB: 不足[ふそく]気味[ぎみ]であることは否[ひな]めませんが、段階的[だんかいてき]に拡充[かくじゅう]する方針[ほうしん]です。\nA: 次[つぎ]の会合[かいごう]までに国内[こくない]調整[ちょうせい]を進[すす]めます。",
    translation: "A: I'd like to ask about the international agreement on climate change measures. B: A resolution was passed to raise greenhouse gas reduction targets. A: Isn't the responsibility of developed countries excessive? B: Measured against historical emissions, we have to say it's appropriate. A: Is the financial support for developing countries sufficient? B: I can't deny it's a bit insufficient, but we plan to expand it gradually. A: I'll move forward with domestic coordination before the next meeting.",
    questions: [
      {
        q: "What was resolved at the summit?",
        choices: ["A carbon tax", "Raising greenhouse gas reduction targets", "A binding cap on aviation", "A green investment fund"],
        answerIndex: 1,
        explanation: "B says 温室[おんしつ]効果[こうか]ガス削減[さくげん]目標[もくひょう]の引[ひ]き上[あ]げが決議[けつぎ]された — raising reduction targets was resolved."
      },
      {
        q: "How does B justify the responsibility of developed countries?",
        choices: ["By current GDP", "Measured against historical emissions", "By population size", "By technology leadership"],
        answerIndex: 1,
        explanation: "B says 歴史的[れきしてき]な排出量[はいしゅつりょう]に照[て]らし合[あ]わせれば — measured against historical emissions."
      },
      {
        q: "What does B admit about financial support for developing countries?",
        choices: ["It's excessive", "It's a bit insufficient", "It's been cut", "It's fully funded"],
        answerIndex: 1,
        explanation: "B says 不足[ふそく]気味[ぎみ]であることは否[ひな]めない — can't deny it's a bit insufficient."
      },
      {
        q: "What will A do before the next meeting?",
        choices: ["Draft a new treaty", "Move forward with domestic coordination", "Visit developing nations", "Submit a budget plan"],
        answerIndex: 1,
        explanation: "A says 次[つぎ]の会合[かいごう]までに国内[こくない]調整[ちょうせい]を進[すす]める — move forward with domestic coordination."
      }
    ],
    estMinutes: 5,
    tags: ["climate", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-54 — Discussing a vaccine rollout
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-54",
    title: "Vaccine Rollout Strategy",
    level: "N2",
    context: "A public health official and a municipality head discussing rollout progress",
    text: "A: ワクチン接種[せっしゅ]の集団[しゅうだん]免疫[めんえき]効果[こうか]について分析[ぶんせき]しました。\nB: 高齢者[こうれいしゃ]の接種[せっしゅ]率[りつ]が伸[の]び悩[なや]んでいるのが課題[かだい]です。\nA: デマの拡散[かくさん]が影響[えいきょう]しているのでしょうか。\nB: ええ、情報[じょうほう]の正確性[せいかくせい]を欠[か]いたままでは、接種[せっしゅ]意欲[いよく]の向上[こうじょう]は望[のぞ]めません。\nA: 啓発[けいはつ]活動[かつどう]を強化[きょうか]する必要[ひつよう]がありますね。\nB: その通[とお]りです。地域[ちいき]単位[たんい]での働[はたら]き掛[か]けに力[ちから]を入[い]れ次第[しだい]、改善[かいぜん]が見込[みこ]めます。\nA: 医療機関[いりょうきかん]とも連携[れんけい]を深[ふか]めましょう。",
    translation: "A: I analyzed the herd immunity effect of vaccination. B: The challenge is that the inoculation rate among the elderly is stagnating. A: Is the spread of misinformation affecting it? B: Yes, without accurate information, we can't hope to improve willingness to be vaccinated. A: We need to strengthen awareness campaigns. B: That's right. As soon as we put effort into community-level outreach, improvement can be expected. A: Let's also deepen cooperation with medical institutions.",
    questions: [
      {
        q: "What is the current challenge with the rollout?",
        choices: ["Vaccine shortages", "Stagnating inoculation rate among the elderly", "Logistical delays", "Cold-chain failures"],
        answerIndex: 1,
        explanation: "B says 高齢者[こうれいしゃ]の接種[せっしゅ]率[りつ]が伸[の]び悩[なや]んでいるのが課題[かだい] — stagnating inoculation rate among the elderly is the challenge."
      },
      {
        q: "What does A suspect is affecting the rollout?",
        choices: ["Side-effect fears", "The spread of misinformation", "Appointment system issues", "Cost concerns"],
        answerIndex: 1,
        explanation: "A asks デマの拡散[かくさん]が影響[えいきょう]しているのでしょうか — is the spread of misinformation affecting it."
      },
      {
        q: "What can't be expected without accurate information?",
        choices: ["Herd immunity", "Improvement in willingness to be vaccinated", "Faster distribution", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 情報[じょうほう]の正確性[せいかくせい]を欠[か]いたままでは、接種[せっしゅ]意欲[いよく]の向上[こうじょう]は望[のぞ]めない — without accurate info, can't hope for improvement in willingness."
      },
      {
        q: "What does B say will lead to improvement?",
        choices: ["Mandatory vaccination", "Putting effort into community-level outreach", "A national ad campaign", "Free boosters for all"],
        answerIndex: 1,
        explanation: "B says 地域[ちいき]単位[たんい]での働[はたら]き掛[か]けに力[ちから]を入[い]れ次第[しだい]、改善[かいぜん]が見込[みこ]める — as soon as they put effort into community outreach."
      }
    ],
    estMinutes: 5,
    tags: ["health", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-55 — At the anti-corruption bureau
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-55",
    title: "Anti-Corruption Inquiry",
    level: "N2",
    context: "A lead investigator briefing a director on an embezzlement case",
    text: "A: 公金[こうきん]流用[りゅうよう]疑惑[ぎわく]について、調査[ちょうさ]結果[けっか]を報告[ほうこく]します。\nB: ご苦労[くろう]様[さま]です。立件[りっけん]の見込[みこ]みはあるでしょうか。\nA: 証拠[しょうこ]の裏付[うらづ]けが不十分[ふじゅうぶん]であるため、立件[りっけん]は困難[こんなん]です。\nB: とはいえ、不正[ふせい]の疑[うたが]いは晴[は]らせないのではありませんか。\nA: その通[とお]りです。証人[しょうにん]の協力[きょうりょく]を得[え]ない限[かぎ]り、断定[だんてい]は避[さ]けるべきです。\nB: 再調査[さいちょうさ]の予定[よてい]はありますか。\nA: ええ、新[あたら]たな手[て]がかりが見[み]つかり次第[しだい]、再開[さいかい]します。",
    translation: "A: I'll report the investigation results on the suspected misuse of public funds. B: Thanks for your work. Is there a prospect of filing charges? A: Because the evidence is insufficiently corroborated, prosecution is difficult. B: That said, we can't clear the suspicion of wrongdoing, can we? A: That's right. As long as we don't get witness cooperation, we should avoid making firm conclusions. B: Is there a plan to re-investigate? A: Yes, we'll reopen as soon as we find new leads.",
    questions: [
      {
        q: "Why is prosecution difficult?",
        choices: ["The statute has expired", "Evidence is insufficiently corroborated", "The suspect fled abroad", "The case lacks jurisdiction"],
        answerIndex: 1,
        explanation: "A says 証拠[しょうこ]の裏付[うらづ]けが不十分[ふじゅうぶん]であるため、立件[りっけん]は困難[こんなん] — evidence is insufficiently corroborated."
      },
      {
        q: "What can't be cleared, according to B?",
        choices: ["The suspicion of wrongdoing", "The audit trail", "The witness identities", "The budget shortfall"],
        answerIndex: 0,
        explanation: "B says 不正[ふせい]の疑[うたが]いは晴[は]らせない — the suspicion of wrongdoing can't be cleared."
      },
      {
        q: "Under what condition should they avoid firm conclusions?",
        choices: ["Until charges are filed", "As long as they don't get witness cooperation", "Until the audit is done", "Until the media reports"],
        answerIndex: 1,
        explanation: "A says 証人[しょうにん]の協力[きょうりょく]を得[え]ない限[かぎ]り、断定[だんてい]は避[さ]けるべき — as long as no witness cooperation."
      },
      {
        q: "When will the investigation be reopened?",
        choices: ["Next quarter", "As soon as new leads are found", "After a court order", "Once the suspect confesses"],
        answerIndex: 1,
        explanation: "A says 新[あたら]たな手[て]がかりが見[み]つかり次第[しだい]、再開[さいかい]する — as soon as new leads are found."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "investigation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-56 — A trade union dispute
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-56",
    title: "Trade Union Dispute",
    level: "N2",
    context: "A HR director and a labor mediator after failed collective bargaining",
    text: "A: 労働組合[ろうどうくみあい]との団体[だんたい]交渉[こうしょう]が決裂[けつれつ]しました。\nB: 賃上[ちんあ]げ要求[ようきゅう]に対[たい]する経営側[けいえいがわ]の回答[かいとう]が不十分[ふじゅうぶん]だったためです。\nA: ストライキに突入[とつにゅう]するおそれはないでしょうか。\nB: 現時点[げんじてん]では避[さ]けられない可能性[かのうせい]が高[たか]まっています。\nA: 第三者[だいさんしゃ]の仲裁[ちゅうさい]を導入[どうにゅう]してはどうですか。\nB: それも一[ひと]つの手[て]ですが、組合側[くみあいがわ]が合意[ごうい]するかどうかは未知数[みちすう]です。\nA: まずは非公式[ひこうしき]な話[はなし]し合[あ]いの場[ば]を設[もう]けましょう。",
    translation: "A: Collective bargaining with the trade union has broken down. B: It was because the management's response to the wage hike demand was insufficient. A: Is there a risk they'll go on strike? B: At this point, the possibility is growing that it can't be avoided. A: How about bringing in third-party mediation? B: That's one option, but whether the union side will agree is unknown. A: Let's first set up an informal discussion forum.",
    questions: [
      {
        q: "Why did collective bargaining break down?",
        choices: ["The union changed leadership", "Management's response to the wage hike demand was insufficient", "A strike notice was filed", "The mediator resigned"],
        answerIndex: 1,
        explanation: "B says 賃上げ[ちんあげ]要求[ようきゅう]に対[たい]する経営側[けいえいがわ]の回答[かいとう]が不十分[ふじゅうぶん]だった — management's response to the wage hike demand was insufficient."
      },
      {
        q: "What risk does A raise?",
        choices: ["A lockout", "Going on strike", "A lawsuit", "A work-to-rule"],
        answerIndex: 1,
        explanation: "A asks ストライキに突入[とつにゅう]するおそれはないでしょうか — is there a risk of going on strike."
      },
      {
        q: "What does A propose?",
        choices: ["A wage increase", "Bringing in third-party mediation", "Firing the leaders", "Closing the plant"],
        answerIndex: 1,
        explanation: "A says 第三者[だいさんしゃ]の仲裁[ちゅうさい]を導入[どうにゅう]してはどうですか — how about bringing in third-party mediation."
      },
      {
        q: "What does A want to set up first?",
        choices: ["A formal vote", "An informal discussion forum", "A press conference", "A binding arbitration"],
        answerIndex: 1,
        explanation: "A says まずは非公式[ひこうしき]な話[はなし]し合[あ]いの場[ば]を設[もう]けよう — let's first set up an informal discussion forum."
      }
    ],
    estMinutes: 5,
    tags: ["labor", "negotiation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-57 — Discussing a privacy law
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-57",
    title: "Privacy Law Revision",
    level: "N2",
    context: "A lawmaker and a legal affairs official reviewing a privacy bill",
    text: "A: 個人情報[こじんじょうほう]保護[ほご]法[ほう]の改正[かいせい]案[あん]を検討[けんとう]しています。\nB: データ漏洩[ろうえい]時[じ]の企業[きぎょう]の責任[せきにん]が強化[きょうか]されるのですね。\nA: ええ、罰則[ばっそく]の強化[きょうか]なしには、実効性[じっこうせい]を担保[たんぽ]できません。\nB: ただ、過度[かど]な規制[きせい]は産業[さんぎょう]競争力[きょうそうりょく]を削[けず]る恐[おそ]れがあります。\nA: バランスを取[と]るため、段階的[だんかいてき]な導入[どうにゅう]を前提[ぜんてい]としています。\nB: 賢明[けんめい]な判断[はんだん]だと言[い]わざるを得[え]ません。\nA: 次回[じかい]の委員会[いいんかい]で条文[じょうぶん]を詰[つ]めます。",
    translation: "A: We're reviewing the bill to revise the personal information protection law. B: Corporate responsibility for data leaks will be strengthened, right? A: Yes, without strengthening penalties, we can't secure effectiveness. B: However, excessive regulation may erode industrial competitiveness. A: To strike a balance, we're assuming a phased introduction. B: I have to say that's a wise judgment. A: We'll tighten the wording at the next committee meeting.",
    questions: [
      {
        q: "What will be strengthened under the revised law?",
        choices: ["Data export rules", "Corporate responsibility for data leaks", "Cross-border transfers", "Consent forms"],
        answerIndex: 1,
        explanation: "B says データ漏洩[ろうえい]時[じ]の企業[きぎょう]の責任[せきにん]が強化[きょうか]される — corporate responsibility for data leaks will be strengthened."
      },
      {
        q: "What does A say is necessary to secure effectiveness?",
        choices: ["A bigger budget", "Strengthening penalties", "A new agency", "International coordination"],
        answerIndex: 1,
        explanation: "A says 罰則[ばっそく]の強化[きょうか]なしには、実効性[じっこうせい]を担保[たんぽ]できない — without strengthening penalties, can't secure effectiveness."
      },
      {
        q: "What risk does B point out?",
        choices: ["Lower compliance", "Excessive regulation eroding industrial competitiveness", "Slower innovation in privacy tech", "Higher legal costs"],
        answerIndex: 1,
        explanation: "B says 過度[かど]な規制[きせい]は産業[さんぎょう]競争力[きょうそうりょく]を削[けず]る恐[おそ]れがある — excessive regulation may erode industrial competitiveness."
      },
      {
        q: "How does the bill aim to strike a balance?",
        choices: ["Through a phased introduction", "By exempting small firms", "By limiting it to tech firms", "By sunset clauses"],
        answerIndex: 0,
        explanation: "A says 段階的[だんかいてき]な導入[どうにゅう]を前提[ぜんてい]としている — assuming a phased introduction."
      }
    ],
    estMinutes: 5,
    tags: ["legal", "privacy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-58 — At the aviation authority
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-58",
    title: "Aviation Authority Inspection",
    level: "N2",
    context: "An inspector and an airline operations manager after a safety audit",
    text: "A: 航空[こうくう]会社[がいしゃ]の安全[あんぜん]監査[かんさ]結果[けっか]を公表[こうひょう]します。\nB: ご報告[ほうこく]ありがとうございます。問題[もんだい]はありましたか。\nA: 整備[せいび]不良[ふりょう]による事故[じこ]の兆候[ちょうこう]が確認[かくにん]されました。\nB: 改善[かいぜん]命令[めいれい]が出[だ]されるのでしょうか。\nA: ええ、改善[かいぜん]命令[めいれい]を出[だ]した上[うえ]で、再審査[さいしんさ]を実施[じっし]する予定[よてい]です。\nB: 再発[さいはつ]防止[ぼうし]策[さく]は徹底[てってい]いたします。\nA: 安全[あんぜん]にかかわる問題[もんだい]である以上[いじょう]、妥協[だきょう]は許[ゆる]されません。\nB: 重々[おもおも]承知[しょうち]いたしました。",
    translation: "A: We're publishing the results of the airline safety audit. B: Thank you for the report. Were there any issues? A: Signs of an accident due to maintenance defects were confirmed. B: Will an improvement order be issued? A: Yes, we plan to issue an improvement order and then conduct a re-audit. B: We will thoroughly implement measures to prevent recurrence. A: Since this is a safety-related issue, no compromise is allowed. B: I understand fully.",
    questions: [
      {
        q: "What was confirmed in the audit?",
        choices: ["Signs of an accident due to maintenance defects", "Pilot scheduling violations", "Excess baggage handling", "Runway lighting faults"],
        answerIndex: 0,
        explanation: "A says 整備[せいび]不良[ふりょう]による事故[じこ]の兆候[ちょうこう]が確認[かくにん]された — signs of an accident due to maintenance defects were confirmed."
      },
      {
        q: "What does the authority plan to do?",
        choices: ["Issue an improvement order then re-audit", "Revoke the operating license", "Impose a fine only", "Suspend routes"],
        answerIndex: 0,
        explanation: "A says 改善[かいぜん]命令[めいれい]を出[だ]した上[うえ]で、再審査[さいしんさ]を実施[じっし]する — issue an improvement order then re-audit."
      },
      {
        q: "What does B promise?",
        choices: ["To pay the fine", "To thoroughly implement measures to prevent recurrence", "To reduce flights", "To replace the maintenance chief"],
        answerIndex: 1,
        explanation: "B says 再発[さいはつ]防止[ぼうし]策[さく]は徹底[てってい]する — will thoroughly implement measures to prevent recurrence."
      },
      {
        q: "Why does A say no compromise is allowed?",
        choices: ["Because of media scrutiny", "Because it's a safety-related issue", "Because of shareholder pressure", "Because of insurance terms"],
        answerIndex: 1,
        explanation: "A says 安全[あんぜん]にかかわる問題[もんだい]である以上[いじょう]、妥協[だきょう]は許[ゆる]されない — since it's a safety-related issue, no compromise is allowed."
      }
    ],
    estMinutes: 5,
    tags: ["aviation", "safety"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-59 — A media literacy panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-59",
    title: "Media Literacy Panel",
    level: "N2",
    context: "An educator and a panelist at a media literacy discussion event",
    text: "A: 若者[わかもの]のメディアリテラシー教育[きょういく]について議論[ぎろん]しましょう。\nB: 偽情報[ぎじょうほう]の拡散[かくさん]を防[ふせ]ぐには、批判的[ひはんてき]思考[しこう]の育成[いくせい]が不可欠[ふかけつ]です。\nA: 学校[がっこう]現場[げんば]だけでは限界[げんかい]があるのではないでしょうか。\nB: おっしゃる通[とお]り。家庭[かてい]と連携[れんけい]しないことには、効果的[こうかてき]な指導[しどう]は望[のぞ]めません。\nA: カリキュラムへの導入[どうにゅう]時期[じき]はいつ頃[ごろ]ですか。\nB: 来年度[らいねんど]から試験的[しけんてき]に導入[どうにゅう]する予定[よてい]です。\nA: 評価[ひょうか]指標[しひょう]も併[あわ]せて整備[せいび]すべきですね。",
    translation: "A: Let's discuss media literacy education for young people. B: To prevent the spread of misinformation, fostering critical thinking is indispensable. A: Isn't there a limit to what schools alone can do? B: You're right. Without cooperating with families, we can't hope for effective guidance. A: When will it be introduced into the curriculum? B: We plan to introduce it on a trial basis starting next year. A: We should also develop evaluation metrics alongside it.",
    questions: [
      {
        q: "What does B say is indispensable to fight misinformation?",
        choices: ["Stricter platform rules", "Fostering critical thinking", "Media ownership limits", "Algorithm transparency"],
        answerIndex: 1,
        explanation: "B says 批判的[ひはんてき]思考[しこう]の育成[いくせい]が不可欠[ふかけつ] — fostering critical thinking is indispensable."
      },
      {
        q: "What does A worry about schools alone?",
        choices: ["They're underfunded", "There's a limit to what they can do", "Teachers aren't trained", "Curricula are too full"],
        answerIndex: 1,
        explanation: "A says 学校[がっこう]現場[げんば]だけでは限界[げんかい]がある — there's a limit to what schools alone can do."
      },
      {
        q: "What can't be expected without family cooperation?",
        choices: ["Higher test scores", "Effective guidance", "Lower dropout rates", "Better attendance"],
        answerIndex: 1,
        explanation: "B says 家庭[かてい]と連携[れんけい]しないことには、効果的[こうかてき]な指導[しどう]は望[のぞ]めない — without family cooperation, can't hope for effective guidance."
      },
      {
        q: "When will the curriculum introduction begin?",
        choices: ["This semester", "Next year on a trial basis", "After a pilot at three schools", "Once textbooks are approved"],
        answerIndex: 1,
        explanation: "B says 来年度[らいねんど]から試験的[しけんてき]に導入[どうにゅう]する予定[よてい] — next year on a trial basis."
      }
    ],
    estMinutes: 5,
    tags: ["education", "media"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-60 — Discussing a pension gap
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-60",
    title: "Pension Gap Discussion",
    level: "N2",
    context: "A policy researcher and a ministry official on pension finance",
    text: "A: 年金[ねんきん]財政[ざいせい]の長期[ちょうき]見通[みとお]しについて質問[しつもん]があります。\nB: 少子高齢化[しょうしこうれいか]に伴[ともな]い、給付[きゅうふう]水準[すいじゅん]の引[ひ]き下[さ]げが避[さ]けられません。\nA: 受給者[じゅきゅうしゃ]の生活[せいかつ]に与[あた]える影響[えいきょう]は深刻[しんこく]ではありませんか。\nB: その通[とお]りです。制度的[せいどてき]な改革[かいかく]に先立[さきだ]って、議論[ぎろん]を深[ふか]める必要[ひつよう]があります。\nA: 積立金[つみたてきん]の運用[うんよう]収益[しゅうえき]で補填[ほてん]できないでしょうか。\nB: 一時的[いちじてき]な補填[ほてん]に過[す]ぎないため、根本的[こんぽんてき]な解決[かいけつ]にはなりません。\nA: それでは、世代間[せだいかん]の不公平[ふこうへい]を解消[かいしょう]するのは困難[こんなん]ですね。",
    translation: "A: I have a question about the long-term outlook for pension finances. B: Along with the declining birthrate and aging population, a cut in benefit levels can't be avoided. A: Isn't the impact on recipients' lives serious? B: That's right. Before institutional reform, we need to deepen the discussion. A: Can't the investment returns on the reserve fund cover the gap? B: It's no more than a temporary patch, so it doesn't amount to a fundamental solution. A: Then resolving intergenerational unfairness is difficult.",
    questions: [
      {
        q: "Why does B say benefit cuts can't be avoided?",
        choices: ["Due to inflation", "Due to the declining birthrate and aging population", "Due to a stock market crash", "Due to emigration"],
        answerIndex: 1,
        explanation: "B says 少子高齢化[しょうしこうれいか]に伴[ともな]い、給付[きゅうふう]水準[すいじゅん]の引[ひ]き下[さ]げが避[さ]けられない — due to the declining birthrate and aging population."
      },
      {
        q: "What does B say is necessary before institutional reform?",
        choices: ["A referendum", "Deepening the discussion", "A pilot program", "External auditing"],
        answerIndex: 1,
        explanation: "B says 制度的[せいどてき]な改革[かいかく]に先立[さきだ]って、議論[ぎろん]を深[ふか]める必要[ひつよう]がある — need to deepen discussion beforehand."
      },
      {
        q: "What does B say about using investment returns to cover the gap?",
        choices: ["It's a permanent solution", "It's no more than a temporary patch", "It will fully cover the gap", "It requires new legislation"],
        answerIndex: 1,
        explanation: "B says 一時[いちじ]的な補填[ほてん]に過[す]ぎないため、根本的[こんぽんてき]な解決[かいけつ]にはならない — it's no more than a temporary patch."
      },
      {
        q: "What does A conclude is difficult?",
        choices: ["Raising the contribution rate", "Resolving intergenerational unfairness", "Lowering the retirement age", "Expanding coverage"],
        answerIndex: 1,
        explanation: "A says 世代間[せだいかん]の不公平[ふこうへい]を解消[かいしょう]するのは困難[こんなん] — resolving intergenerational unfairness is difficult."
      }
    ],
    estMinutes: 6,
    tags: ["policy", "pension"]
  }
];
