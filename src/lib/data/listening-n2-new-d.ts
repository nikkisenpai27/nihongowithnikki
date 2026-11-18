import type { ListeningData } from "@/lib/types";

// N2 listening exercises set D (new batch).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N2 grammar targets: 〜に伴って, 〜にもかかわらず, 〜をめぐって, 〜にすぎない,
// 〜どころか, 〜に違いない, 〜わけにはいかない, 〜おそれがある, 〜次第,
// 〜とはいえ, 〜に先立って, 〜かねない, 〜つつある, 〜上で, 〜たびに,
// 〜を通じて, 〜に応じて, 〜において, 〜にわたって, 〜に基づいて, etc.

export const listeningN2NewD: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n2n-61 — A tech startup pitch
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-61",
    title: "Tech Startup Pitch",
    level: "N2",
    context: "A startup founder pitching to a prospective investor",
    text: "A: 弊社[へいしゃ]の新[あたら]しい技術[ぎじゅつ]について、簡単[かんたん]に説明[せつめい]させていただきます。\nB: ええ、お願[ねが]いします。\nA: このソフトは、データを解析[かいせき]する上[うえ]で、従来[じゅうらい]の十倍[じゅうばい]の速度[そくど]を実現[じつげん]しています。\nB: それは画期的[かっきてき]ですね。競合[きょうごう]との差[さ]はどこにありますか。\nA: 最大[さいだい]の強[つよ]みは、独自[どくじ]のアルゴリズム構造[こうぞう]にあると言[い]えます。\nB: なるほど。市場[しじょう]への導入[どうにゅう]にあたって、何[なに]か課題[かだい]はありますか。\nA: 法規制[ほうきせい]への適合[てきごう]を進[すす]めつつあるところですが、実用化[じつようか]までにはもう少[すこ]し時間[じかん]を要[よう]します。\nB: 投資[とうし]を検討[けんとう]する上[うえ]で、その点[てん]は重要[じゅうよう]ですね。\nA: ご支援[しえん]いただければ、来年度中[らいねんどちゅう]には製品化[せいひんか]できるに違[ちが]いません。",
    translation: "A: Let me briefly explain our new technology. B: Yes, please. A: This software achieves ten times the speed of conventional ones when analyzing data. B: That's groundbreaking. Where's the difference from competitors? A: Our biggest strength lies in our proprietary algorithm structure. B: I see. Are there any challenges for market introduction? A: We're working on regulatory compliance, but it'll take a little more time before practical use. B: That's an important point when considering investment. A: With your support, we can surely commercialize it within next fiscal year.",
    questions: [
      {
        q: "How much faster is the software compared to conventional ones?",
        choices: ["Five times", "Ten times", "Twice", "One hundred times"],
        answerIndex: 1,
        explanation: "A says 従来[じゅうらい]の十倍[じゅうばい]の速度[そくど] — ten times the speed of conventional ones."
      },
      {
        q: "What is the startup's biggest strength?",
        choices: ["Low price", "Large team", "Proprietary algorithm structure", "Existing customer base"],
        answerIndex: 2,
        explanation: "A says 最大[さいだい]の強[つよ]みは、独自[どくじ]のアルゴリズム構造[こうぞう]にある — the proprietary algorithm structure."
      },
      {
        q: "What challenge remains for market introduction?",
        choices: ["Lack of funding", "Regulatory compliance", "Customer acquisition", "Patent disputes"],
        answerIndex: 1,
        explanation: "A says 法規制[ほうきせい]への適合[てきごう]を進[すす]めつつある — working on regulatory compliance."
      },
      {
        q: "When can commercialization be expected if supported?",
        choices: ["Within this year", "Within next fiscal year", "Within three years", "Undecided"],
        answerIndex: 1,
        explanation: "A says 来年度中[らいねんどちゅう]には製品化[せいひんか]できるに違[ちが]いない — within next fiscal year."
      }
    ],
    estMinutes: 5,
    tags: ["business", "technology"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-62 — Discussing a food safety law
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-62",
    title: "Food Safety Law Amendment",
    level: "N2",
    context: "Two officials discussing revisions to a food safety law",
    text: "A: 新[あたら]しい食品安全[しょくひんあんぜん]法[ほう]について意見[いけん]を交[か]わしたいのですが。\nB: ええ。今回[こんかい]の改正[かいせい]の最大[さいだい]の目玉[めだま]は何[なに]でしょうか。\nA: 賞味期限[しょうみきげん]の表示[ひょうじ]義務化[ぎむか]と、原材料[げんざいりょう]の追跡[ついせき]システムの導入[どうにゅう]です。\nB: それに伴[ともな]って、生産者側[せいさんしゃがわ]の負担[ふたん]も増[ふ]えるのではないでしょうか。\nA: 確[たし]かにそのおそれがありますが、消費者[しょうひしゃ]の信頼[しんらい]を守[まも]る上[うえ]では不可欠[ふかけつ]です。\nB: 中小企業[ちゅうしょうきぎょう]への支援策[しえんさく]も同時[どうじ]に進[すす]めないわけにはいきませんね。\nA: その通[とお]りです。補助金[ほじょきん]制度[せいど]を設[もう]ける方向[ほうこう]で調整中[ちょうせいちゅう]です。\nB: 法律[ほうりつ]の施行[しこう]に先立[さきだ]って、研修会[けんしゅうかい]を開[ひら]くべきだと思[おも]います。",
    translation: "A: I'd like to exchange views on the new food safety law. B: Yes. What's the biggest feature of this amendment? A: Mandatory labeling of best-before dates and introduction of a raw-material traceability system. B: That will increase the burden on producers, won't it? A: There is that risk, but it's indispensable for protecting consumer trust. B: We must also push support measures for SMEs at the same time. A: Exactly. We're coordinating to set up a subsidy system. B: I think we should hold training sessions before the law takes effect.",
    questions: [
      {
        q: "What are the main features of the amendment?",
        choices: ["Higher penalties and inspections", "Best-before labeling and traceability system", "Import bans and tariffs", "Tax breaks for producers"],
        answerIndex: 1,
        explanation: "A mentions 賞味期限[しょうみきげん]の表示[ひょうじ]義務化[ぎむか]と原材料[げんざいりょう]の追跡[ついせき]システムの導入[どうにゅう]."
      },
      {
        q: "What concern does B raise about the amendment?",
        choices: ["Higher consumer prices", "Increased burden on producers", "Lower food quality", "Conflicts with international rules"],
        answerIndex: 1,
        explanation: "B says 生産者側[せいさんしゃがわ]の負担[ふたん]も増[ふ]える — burden on producers will increase."
      },
      {
        q: "What is being set up to help SMEs?",
        choices: ["A loan program", "A subsidy system", "A tax exemption", "A training program"],
        answerIndex: 1,
        explanation: "A says 補助金[ほじょきん]制度[せいど]を設[もう]ける方向[ほうこう]で調整中[ちょうせいちゅう] — coordinating to set up a subsidy system."
      },
      {
        q: "What does B want before the law takes effect?",
        choices: ["Public hearings", "Training sessions", "Pilot inspections", "International consultation"],
        answerIndex: 1,
        explanation: "B says 施行[しこう]に先立[さきだ]って、研修会[けんしゅうかい]を開[ひら]くべき — should hold training sessions before enforcement."
      }
    ],
    estMinutes: 5,
    tags: ["policy", "law"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-63 — At the statistics bureau
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-63",
    title: "Statistics Bureau Preparations",
    level: "N2",
    context: "Two statisticians preparing for a national census",
    text: "A: 来月[らいげつ]の国勢調査[こくせいちょうさ]の準備状況[じゅんびじょうきょう]はいかがですか。\nB: 調査員[ちょうさいん]の確保[かくほ]に難航[なんこう]しています。\nA: というと、人員[じんいん]が足[た]りないという意味[いみ]ですか。\nB: ええ、応募者[おうぼしゃ]が想定[そうてい]を下回[したまわ]っており、目標[もくひょう]の七割[ななわり]にとどまっています。\nA: それでは、調査結果[ちょうさけっか]の精度[せいど]に影響[えいきょう]しかねないのではないでしょうか。\nB: そうならないように、地方自治体[ちほうじちたい]にも協力[きょうりょく]を求[もと]めているところです。\nA: 調査方法[ちょうさほうほう]を工夫[くふう]すれば、負担[ふたん]を軽[かる]くできるかもしれません。\nB: ええ。たとえば、オンライン回答[かいとう]を前提[ぜんてい]とすれば、人員[じんいん]の削減[さくげん]が見込[みこ]めます。",
    translation: "A: How are preparations for next month's national census? B: We're struggling to secure surveyors. A: You mean we're short of staff? B: Yes, applicants are below expectations, only reaching 70% of target. A: Then it could affect the accuracy of the results. B: To prevent that, we're asking local governments for cooperation. A: If we improve the survey method, we might reduce the burden. B: Yes. For example, if we assume online responses, we can expect to cut staff.",
    questions: [
      {
        q: "What problem is the bureau facing?",
        choices: ["Budget shortfall", "Outdated equipment", "Shortage of surveyors", "Data security concerns"],
        answerIndex: 2,
        explanation: "B says 調査員[ちょうさいん]の確保[かくほ]に難航[なんこう]している — struggling to secure surveyors."
      },
      {
        q: "What percentage of target has been reached for applicants?",
        choices: ["Fifty percent", "Sixty percent", "Seventy percent", "Eighty percent"],
        answerIndex: 2,
        explanation: "B says 目標[もくひょう]の七割[ななわり]にとどまっています — stuck at 70% of target."
      },
      {
        q: "What risk does A mention?",
        choices: ["Cost overrun", "Reduced accuracy of results", "Public backlash", "System failure"],
        answerIndex: 1,
        explanation: "A says 調査結果[ちょうさけっか]の精度[せいど]に影響[えいきょう]しかねない — could affect accuracy."
      },
      {
        q: "What measure could reduce the staffing burden?",
        choices: ["Outsourcing abroad", "Online responses", "Hiring retirees", "Extending the deadline"],
        answerIndex: 1,
        explanation: "B says オンライン回答[かいとう]を前提[ぜんてい]とすれば — assuming online responses."
      }
    ],
    estMinutes: 4,
    tags: ["government", "statistics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-64 — A geopolitical analysis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-64",
    title: "Geopolitical Tensions Analysis",
    level: "N2",
    context: "Two analysts discussing rising tensions between neighboring states",
    text: "A: 近隣国間[きんりんこくかん]の緊張[きんちょう]が高[たか]まっていますが、どう分析[ぶんせき]しますか。\nB: 資源[しげん]をめぐる利害対立[りがいたいりつ]が、最大[さいだい]の要因[よういん]と言[い]えます。\nA: なるほど。外交的[がいこうてき]な解決[かいけつ]は見込[みこ]めますか。\nB: 現状[げんじょう]では、対話[たいわ]の窓口[まどぐち]さえ閉[と]ざされつつあり、楽観[らっかん]は禁物[きんもつ]です。\nA: 経済制裁[けいざいせいさい]を強化[きょうか]すれば、状況[じょうきょう]は好転[こうてん]するでしょうか。\nB: かえって相手[あいて]の反発[はんぱつ]を招[まね]きかねないリスクもあります。\nA: 国連[こくれん]の仲介[ちゅうかい]に期待[きたい]するしかないというわけですね。\nB: ええ。多国間[たこくかん]の枠組[わくぐ]みを維持[いじ]する限[かぎ]り、対話[たいわ]の余地[よち]は残[のこ]されています。",
    translation: "A: Tensions are rising between neighboring states — how do you analyze it? B: Conflict of interests over resources is the biggest cause. A: I see. Is a diplomatic solution feasible? B: At present, even the window for dialogue is closing, so optimism is risky. A: Would stronger economic sanctions improve things? B: There's a risk they'd provoke backlash instead. A: So we have no choice but to hope for UN mediation. B: Yes. As long as multilateral frameworks are maintained, room for dialogue remains.",
    questions: [
      {
        q: "What is the biggest cause of the tensions?",
        choices: ["Border disputes", "Resource-related conflicts of interest", "Ethnic divisions", "Historical grievances"],
        answerIndex: 1,
        explanation: "B says 資源[しげん]をめぐる利害対立[りがいたいりつ]が最大[さいだい]の要因[よういん]."
      },
      {
        q: "What is the current state of dialogue?",
        choices: ["Active and productive", "Even the window is closing", "Mediated by a third party", "Suspended indefinitely"],
        answerIndex: 1,
        explanation: "B says 対話[たいわ]の窓口[まどぐち]さえ閉[と]ざされつつある — the window for dialogue is closing."
      },
      {
        q: "What risk does B mention about stronger sanctions?",
        choices: ["Lower oil prices", "Provoking backlash", "Domestic instability", "Trade expansion"],
        answerIndex: 1,
        explanation: "B says かえって相手[あいて]の反発[はんぱつ]を招[まね]きかねない — could provoke backlash instead."
      },
      {
        q: "What keeps room for dialogue alive?",
        choices: ["Bilateral treaties", "Multilateral frameworks", "Economic incentives", "Military deterrence"],
        answerIndex: 1,
        explanation: "B says 多国間[たこくかん]の枠組[わくぐ]みを維持[いじ]する限[かぎ]り — as long as multilateral frameworks are maintained."
      }
    ],
    estMinutes: 5,
    tags: ["politics", "analysis"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-65 — Discussing a demographic shift
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-65",
    title: "Demographic Shift Briefing",
    level: "N2",
    context: "A briefing on the aging population and workforce decline",
    text: "A: 少子高齢化[しょうしこうれいか]の現状[げんじょう]について報告[ほうこく]をお願[ねが]いします。\nB: 高齢化率[こうれいかりつ]は三割[さんわり]を超[こ]え、労働力人口[ろうどうりょくじんこう]の減少[げんしょう]が続[つづ]いています。\nA: このままでは、年金制度[ねんきんせいど]の維持[いじ]も困難[こんなん]になるのではないでしょうか。\nB: ええ。現役世代[げんえきせだい]一人[ひとり]あたりの負担[ふたん]が増[ふ]える一方[いっぽう]ですからね。\nA: 外国人労働者[がいこくじんろうどうしゃ]の受[う]け入[い]れを拡大[かくだい]する案[あん]はどうですか。\nB: 有効[ゆうこう]な手段[しゅだん]とはいえ、社会統合[しゃかいとうごう]の課題[かだい]が残[のこ]ります。\nA: 働[はたら]き方[かた]の改革[かいかく]を進[すす]める上[うえ]でも、柔軟[じゅうなん]な対応[たいおう]が求[もと]められますね。\nB: ええ。子育[こそだ]て支援[しえん]と働[はたら]き方[かた]の両立[りょうりつ]を図[はか]るしかありません。",
    translation: "A: Please report on the current state of the declining birthrate and aging population. B: The aging rate has exceeded 30%, and the working-age population continues to decline. A: At this rate, won't maintaining the pension system become difficult? B: Yes. The burden per working-generation person keeps rising. A: How about expanding acceptance of foreign workers? B: It's an effective measure, but social integration challenges remain. A: Even in advancing work-style reform, flexible responses are needed. B: Yes. We have no choice but to balance childcare support and work styles.",
    questions: [
      {
        q: "What is the current aging rate?",
        choices: ["About twenty percent", "Over thirty percent", "About forty percent", "Over fifty percent"],
        answerIndex: 1,
        explanation: "B says 高齢化率[こうれいかりつ]は三割[さんわり]を超[こ]え — over 30%."
      },
      {
        q: "What risk is mentioned regarding pensions?",
        choices: ["Fund mismanagement", "Difficulty maintaining the system", "Reduced benefits for seniors", "Higher contributions only"],
        answerIndex: 1,
        explanation: "A says 年金制度[ねんきんせいど]の維持[いじ]も困難[こんなん]になる — maintaining the pension system will become difficult."
      },
      {
        q: "What challenge remains with foreign workers?",
        choices: ["Language barriers only", "Social integration", "Visa processing", "Wage competition"],
        answerIndex: 1,
        explanation: "B says 社会統合[しゃかいとうごう]の課題[かだい]が残[のこ]ります — social integration challenges remain."
      },
      {
        q: "What must be balanced alongside work-style reform?",
        choices: ["Tax reform", "Immigration policy", "Childcare support", "Healthcare funding"],
        answerIndex: 2,
        explanation: "B says 子育[こそだ]て支援[しえん]と働[はたら]き方[かた]の両立[りょうりつ]を図[はか]る — balance childcare support and work styles."
      }
    ],
    estMinutes: 5,
    tags: ["society", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-66 — At the consumer protection agency
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-66",
    title: "Consumer Complaint Analysis",
    level: "N2",
    context: "Two officials reviewing complaint data at a consumer protection agency",
    text: "A: 今月[こんげつ]受[う]けた苦情[くじょう]件数[けんすう]の概要[がいよう]を教[おし]えてください。\nB: 通販[つうはん]サイト関連[かんれん]が最多[さいた]で、全体[ぜんたい]の四割[よんわり]を占[し]めています。\nA: 内訳[うちわけ]はどうなっていますか。\nB: 配送[はいそう]の遅延[ちえん]や、商品[しょうひん]の不良品[ふりょうひん]に関[かん]するものが多[おお]いです。\nA: 事業者[じぎょうしゃ]に対[たい]して、是正勧告[ぜせいかんこく]を出[だ]す段階[だんかい]でしょうか。\nB: そうですね。再発防止策[さいはつぼうしさく]を提出[ていしゅつ]させるのが先決[せんけつ]です。\nA: 消費者[しょうひしゃ]に賠償[ばいしょう]を請求[せいきゅう]する手続[てつづ]きも周知[しゅうち]しておきましょう。\nB: かしこまりました。HPの更新[こうしん]とあわせて進[すす]めます。",
    translation: "A: Please give me an overview of complaints received this month. B: Online shopping sites are the largest category, accounting for 40% of the total. A: What's the breakdown? B: Many are about delivery delays and defective products. A: Is it at the stage of issuing correction recommendations to businesses? B: Yes. Getting them to submit prevention measures is the first priority. A: Let's also publicize the procedure for consumers to seek compensation. B: Understood. I'll proceed along with updating the website.",
    questions: [
      {
        q: "Which category accounts for the largest share of complaints?",
        choices: ["Telecom services", "Online shopping sites", "Travel agencies", "Financial products"],
        answerIndex: 1,
        explanation: "B says 通販[つうはん]サイト関連[かんれん]が最多[さいた] — online shopping sites are the most."
      },
      {
        q: "What are the common complaints?",
        choices: ["False advertising and overcharging", "Delivery delays and defective products", "Privacy breaches", "Refund refusals"],
        answerIndex: 1,
        explanation: "B mentions 配送[はいそう]の遅延[ちえん]や商品[しょうひん]の不良品[ふりょうひん]."
      },
      {
        q: "What is the first priority before issuing recommendations?",
        choices: ["Public hearings", "Submitting prevention measures", "Fines", "License revocation"],
        answerIndex: 1,
        explanation: "B says 再発防止策[さいはつぼうしさく]を提出[ていしゅつ]させるのが先決[せんけつ] — getting prevention measures submitted is first priority."
      },
      {
        q: "What will be publicized to consumers?",
        choices: ["Business blacklists", "Compensation procedures", "Refund deadlines", "Court schedules"],
        answerIndex: 1,
        explanation: "A says 賠償[ばいしょう]を請求[せいきゅう]する手続[てつづ]きも周知[しゅうち]しておきましょう — publicize compensation procedures."
      }
    ],
    estMinutes: 4,
    tags: ["government", "consumer"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-67 — A renewable energy debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-67",
    title: "Renewable Energy Strategy",
    level: "N2",
    context: "Two energy policy experts debating the renewable energy mix",
    text: "A: 再生可能[さいせいかのう]エネルギーの導入目標[どうにゅうもくひょう]を再考[さいこう]する時期[じき]に来[き]ています。\nB: 現状[げんじょう]では、太陽光発電[たいようこうはつでん]への依存[いぞん]が高[たか]すぎるのではないでしょうか。\nA: その通[とお]りです。地域[ちいき]によっては、送電網[そうでんもう]のキャパシティが限界[げんかい]に達[たっ]しています。\nB: 洋上風力[ようじょうふうりょく]の活用[かつよう]も視野[しや]に入[い]れるべきだと思[おも]います。\nA: コストがかさむとはいえ、長期的[ちょうきてき]には投資[とうし]に見合[みあ]う効果[こうか]が期待[きたい]できます。\nB: 地熱[ちねつ]やバイオマスなど、多様[たよう]な電源[でんげん]を組[く]み合[あ]わせるのが望[のぞ]ましいですね。\nA: 地元住民[じもとじゅうみん]の理解[りかい]を得[え]られなければ、何[なに]も進[すす]まないわけです。\nB: ええ。合意形成[ごういけいせい]のプロセスを透明[とうめい]にする必要[ひつよう]があります。",
    translation: "A: It's time to reconsider renewable energy targets. B: Currently, dependence on solar power is too high, isn't it? A: Exactly. In some regions, grid capacity has reached its limit. B: I think we should also consider offshore wind. A: Although costs pile up, long term we can expect returns worth the investment. B: It's desirable to combine diverse sources like geothermal and biomass. A: Without local residents' understanding, nothing proceeds. B: Yes. The agreement-building process needs to be transparent.",
    questions: [
      {
        q: "What problem does B see in the current approach?",
        choices: ["High dependence on solar", "Lack of funding", "Outdated grid technology", "Weak international cooperation"],
        answerIndex: 0,
        explanation: "B says 太陽光発電[たいようこうはつでん]への依存[いぞん]が高[たか]すぎる — too dependent on solar."
      },
      {
        q: "What new source does B suggest considering?",
        choices: ["Nuclear power", "Offshore wind", "Coal with carbon capture", "Hydroelectric"],
        answerIndex: 1,
        explanation: "B says 洋上風力[ようじょうふうりょく]の活用[かつよう]も視野[しや]に入[い]れるべき — should consider offshore wind."
      },
      {
        q: "What is essential for any project to proceed?",
        choices: ["Government subsidies", "Local residents' understanding", "International backing", "Advanced technology"],
        answerIndex: 1,
        explanation: "A says 地元住民[じもとじゅうみん]の理解[りかい]を得[え]られなければ、何[なに]も進[すす]まない — without local understanding, nothing proceeds."
      },
      {
        q: "What does B say is needed for the agreement process?",
        choices: ["Speed", "Transparency", "Government oversight", "Legal reform"],
        answerIndex: 1,
        explanation: "B says 合意形成[ごういけいせい]のプロセスを透明[とうめい]にする必要[ひつよう]がある — process needs to be transparent."
      }
    ],
    estMinutes: 5,
    tags: ["energy", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-68 — Discussing a military alliance
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-68",
    title: "Defense Agreement Revision",
    level: "N2",
    context: "Two defense officials discussing revisions to a bilateral defense agreement",
    text: "A: 防衛協定[ぼうえいきょうてい]の改定案[かいていあん]について、どう思[おも]われますか。\nB: 共同訓練[きょうどうくんれん]の頻度[ひんど]を増[ふ]やす点[てん]は評価[ひょうか]できますが、装備[そうび]の相互運用性[そうごうんようせい]に懸念[けねん]があります。\nA: 確[たし]かに、通信[つうしん]システムの規格[きかく]が統一[とういつ]されない限[かぎ]り、連携[れんけい]は困難[こんなん]です。\nB: 機密情報[きみつじょうほう]の取[と]り扱[あつか]いに関[かん]しても、基準[きじゅん]のすり合[あ]わせが不可欠[ふかけつ]です。\nA: 改定[かいてい]に先立[さきだ]って、議会[ぎかい]の承認[しょうにん]を得[え]る必要[ひつよう]があります。\nB: 国内世論[こくないせろん]の反発[はんぱつ]も予想[よそう]されますから、慎重[しんちょう]に進[すす]めるしかありません。\nA: とはいえ、地政学的[ちせいがくてき]な環境[かんきょう]を考[かんが]えれば、対応[たいおう]の遅[おく]れは許[ゆる]されません。\nB: 議論[ぎろん]を尽[つ]くした上[うえ]で、結論[けつろん]を出[だ]すべきですね。",
    translation: "A: What do you think of the revised defense agreement draft? B: Increasing joint training frequency is commendable, but I have concerns about equipment interoperability. A: True, unless communication-system standards are unified, coordination is difficult. B: For handling classified information, aligning standards is also indispensable. A: Before revision, parliamentary approval is needed. B: Domestic public backlash is also expected, so we have no choice but to proceed carefully. A: That said, given the geopolitical environment, delay in response isn't acceptable. B: We should reach a conclusion after exhausting the discussion.",
    questions: [
      {
        q: "What does B positively evaluate?",
        choices: ["Higher defense budget", "More frequent joint training", "New weapons systems", "Intelligence sharing"],
        answerIndex: 1,
        explanation: "B says 共同訓練[きょうどうくんれん]の頻度[ひんど]を増[ふ]やす点[てん]は評価[ひょうか]できる — increasing training frequency is commendable."
      },
      {
        q: "What concern does B raise?",
        choices: ["Cost overruns", "Equipment interoperability", "Personnel shortages", "Public opposition"],
        answerIndex: 1,
        explanation: "B says 装備[そうび]の相互運用性[そうごうんようせい]に懸念[けねん]がある — concerns about equipment interoperability."
      },
      {
        q: "What is indispensable for handling classified information?",
        choices: ["New encryption tools", "Aligned standards", "Personnel vetting", "Independent audits"],
        answerIndex: 1,
        explanation: "B says 基準[きじゅん]のすり合[あ]わせが不可欠[ふかけつ] — aligning standards is indispensable."
      },
      {
        q: "What is needed before the revision takes effect?",
        choices: ["A public referendum", "Parliamentary approval", "An international summit", "A pilot exercise"],
        answerIndex: 1,
        explanation: "A says 改定[かいてい]に先立[さきだ]って、議会[ぎかい]の承認[しょうにん]を得[え]る必要[ひつよう]がある — need parliamentary approval."
      }
    ],
    estMinutes: 6,
    tags: ["defense", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-69 — At the transport ministry
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-69",
    title: "Rail Network Construction Delay",
    level: "N2",
    context: "Two officials at the transport ministry reviewing a rail project",
    text: "A: 新[あたら]しい鉄道網[てつどうもう]の整備計画[せいびけいかく]について、進捗[しんちょく]はいかがですか。\nB: 用地[ようち]の取得[しゅとく]が全体[ぜんたい]の六割[ろくわり]程度[ていど]で、予定[よてい]より遅[おく]れています。\nA: 地権者[ちけんしゃ]との交渉[こうしょう]は難航[なんこう]しているという事[こと]ですね。\nB: ええ。補償額[ほしょうがく]をめぐって、折[お]り合[あ]いがつかないケースが続[つづ]いています。\nA: 計画[けいかく]の大幅[おおはば]な見直[みなお]しは避[さ]けられないかもしれません。\nB: 開通時期[かいつうじき]を二年[にねん]延期[えんき]する案[あん]を検討[けんとう]しています。\nA: 地域経済[ちいきけいざい]への影響[えいきょう]も考慮[こうりょ]した上[うえ]で決[き]めましょう。\nB: はい。関係者[かんけいしゃ]との協議[きょうぎ]を重[かさ]ねるにつれて、方向[ほうこう]も見[み]えてくると思[おも]います。",
    translation: "A: How is progress on the new rail network plan? B: Land acquisition is about 60%, behind schedule. A: So negotiations with landowners are stalling. B: Yes. Cases where agreement can't be reached on compensation amounts keep continuing. A: A major plan revision may be unavoidable. B: We're considering postponing the opening by two years. A: Let's decide considering the impact on the local economy too. B: Yes. As we hold more discussions with stakeholders, the direction will become clear.",
    questions: [
      {
        q: "How much land has been acquired?",
        choices: ["About half", "About 60%", "About 70%", "About 90%"],
        answerIndex: 1,
        explanation: "B says 用地[ようち]の取得[しゅとく]が全体[ぜんたい]の六割[ろくわり]程度[ていど] — about 60%."
      },
      {
        q: "What is causing the delay?",
        choices: ["Funding shortages", "Disputes over compensation amounts", "Environmental lawsuits", "Material cost spikes"],
        answerIndex: 1,
        explanation: "B says 補償額[ほしょうがく]をめぐって、折[お]り合[あ]いがつかない — can't reach agreement on compensation amounts."
      },
      {
        q: "What is being considered?",
        choices: ["Canceling the project", "Postponing the opening by two years", "Reducing the route length", "Switching to private funding"],
        answerIndex: 1,
        explanation: "B says 開通時期[かいつうじき]を二年[にねん]延期[えんき]する案[あん] — postponing opening by two years."
      },
      {
        q: "What should also be considered in the decision?",
        choices: ["Tourism potential", "Impact on local economy", "Federal grants", "Carbon emissions"],
        answerIndex: 1,
        explanation: "A says 地域経済[ちいきけいざい]への影響[えいきょう]も考慮[こうりょ]した上[うえ]で — consider impact on local economy."
      }
    ],
    estMinutes: 5,
    tags: ["infrastructure", "government"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-70 — A housing rights campaign
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-70",
    title: "Public Housing Campaign",
    level: "N2",
    context: "Activists discussing a campaign for low-income housing",
    text: "A: 低所得者[ていしょとくしゃ]向[む]け住宅[じゅうたく]の供給拡大[きょうきゅうかくだい]を訴[うた]えていきたいのですが。\nB: 現状[げんじょう]の待機者数[たいきしゃすう]はどのくらいですか。\nA: 全国[ぜんこく]で五万世帯[ごまんせたい]を超[こ]えており、待[ま]ち期間[きかん]は平均五年[へいきんごねん]に上[のぼ]ります。\nB: それほど深刻[しんこく]な状況[じょうきょう]だと、緊急措置[きんきゅうそち]が必要[ひつよう]ですね。\nA: 公営住宅[こうえいじゅうたく]の建設[けんせつ]を加速[かそく]する法案[ほうあん]を提出[ていしゅつ]する予定[よてい]です。\nB: ただし、財源[ざいげん]の確保[かくほ]が最大[さいだい]の壁[かべ]になるでしょう。\nA: 固定資産税[こていさんぜい]の一部[いちぶ]を充当[じゅうとう]する案[あん]を検討[けんとう]しています。\nB: 着実[ちゃくじつ]に実行[じっこう]すれば、住宅不足[じゅうたくぶそく]の解消[かいしょう]につながるに違[ちが]いません。",
    translation: "A: I'd like to push for expanding low-income housing supply. B: How many are on the waiting list now? A: Over 50,000 households nationwide, with an average wait of five years. B: With such a serious situation, emergency measures are needed. A: We plan to submit a bill to accelerate public housing construction. B: But securing funding will be the biggest obstacle. A: We're considering allocating part of property tax. B: If executed steadily, it will surely help resolve the housing shortage.",
    questions: [
      {
        q: "How many households are on the waiting list?",
        choices: ["About 10,000", "Over 50,000", "About 100,000", "Over 200,000"],
        answerIndex: 1,
        explanation: "A says 全国[ぜんこく]で五万世帯[ごまんせたい]を超[こ]えている — over 50,000 households nationwide."
      },
      {
        q: "What is the average waiting period?",
        choices: ["Three years", "Five years", "Seven years", "Ten years"],
        answerIndex: 1,
        explanation: "A says 待[ま]ち期間[きかん]は平均五年[へいきんごねん] — average of five years."
      },
      {
        q: "What is the biggest obstacle?",
        choices: ["Land availability", "Securing funding", "Public opposition", "Regulatory hurdles"],
        answerIndex: 1,
        explanation: "B says 財源[ざいげん]の確保[かくほ]が最大[さいだい]の壁[かべ] — securing funding is the biggest wall."
      },
      {
        q: "What funding source is being considered?",
        choices: ["A new sales tax", "Part of property tax", "Bonds", "Foreign investment"],
        answerIndex: 1,
        explanation: "A says 固定資産税[こていさんぜい]の一部[いちぶ]を充当[じゅうとう]する案[あん] — allocating part of property tax."
      }
    ],
    estMinutes: 5,
    tags: ["society", "campaign"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-71 — Discussing a digital tax
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-71",
    title: "Digital Tax Framework Debate",
    level: "N2",
    context: "Two tax officials debating how to tax digital companies",
    text: "A: デジタル企業[きぎょう]に対[たい]する新[あたら]しい課税方式[かぜいほうしき]について議論[ぎろん]したいのですが。\nB: 売上[うりあげ]を基準[きじゅん]とする案[あん]と、利用者数[りようしゃすう]を基準[きじゅん]とする案[あん]の二[ふた]つがあります。\nA: 売上基準[うりあげきじゅん]では、赤字企業[あかじきぎょう]にも負担[ふたん]をかけるおそれがあるのではないでしょうか。\nB: その点[てん]は懸念[けねん]すべきで、成長期企業[せいちょうききぎょう]を冷[ひ]やすことになりかねません。\nA: 利用者数基準[りようしゃすうきじゅん]にも、計測[けいそく]の難度[なんど]という課題[かだい]があります。\nB: 結局[けっきょく]、複合的[ふくごうてき]な指標[しひょう]を組[く]み合[あ]わせるしかないというわけですね。\nA: 海外事例[かいがいじれい]を参考[さんこう]にしつつ、自国[じこく]に合[あ]った方式[ほうしき]を設計[せっけい]すべきです。\nB: ええ。国際協調[こくさいきょうちょう]を視野[しや]に入[い]れた制度設計[せいどせっけい]が求[もと]められます。",
    translation: "A: I'd like to discuss a new taxation method for digital companies. B: There are two proposals: one based on revenue, one on user count. A: With a revenue basis, loss-making companies could also be burdened. B: That's a concern — it could chill growth-stage companies. A: A user-count basis also has the challenge of measurement difficulty. B: Ultimately we have no choice but to combine composite indicators. A: We should design a method suited to our country, while referencing overseas cases. B: Yes. We need system design with international coordination in mind.",
    questions: [
      {
        q: "What are the two proposed tax bases?",
        choices: ["Revenue and profits", "Revenue and user count", "User count and assets", "Profits and headcount"],
        answerIndex: 1,
        explanation: "B says 売上[うりあげ]を基準[きじゅん]とする案[あん]と、利用者数[りようしゃすう]を基準[きじゅん]とする案[あん]."
      },
      {
        q: "What is A's concern about the revenue-based approach?",
        choices: ["Encourages tax evasion", "Burdens loss-making companies", "Reduces government revenue", "Favors foreign firms"],
        answerIndex: 1,
        explanation: "A says 赤字企業[あかじきぎょう]にも負担[ふたん]をかけるおそれがある — could burden loss-making companies."
      },
      {
        q: "What challenge does the user-count basis have?",
        choices: ["Privacy concerns", "Measurement difficulty", "Cross-border disputes", "High compliance cost"],
        answerIndex: 1,
        explanation: "A says 利用者数基準[りようしゃすうきじゅん]にも、計測[けいそく]の難度[なんど]という課題[かだい]がある — measurement difficulty."
      },
      {
        q: "What approach does B advocate?",
        choices: ["Tax exemptions for startups", "International coordination", "A flat digital levy", "Postponing legislation"],
        answerIndex: 1,
        explanation: "B says 国際協調[こくさいきょうちょう]を視野[しや]に入[い]れた制度設計[せいどせっけい]が求[もと]められる — system design with international coordination in mind."
      }
    ],
    estMinutes: 5,
    tags: ["policy", "economy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-72 — At the science council
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-72",
    title: "Research Funding Policy",
    level: "N2",
    context: "Two council members debating priorities for research grants",
    text: "A: 次期[じき]の研究助成[けんきゅうじょせい]方針[ほうしん]について、ご意見[いけん]をお聞[き]かせください。\nB: 基礎研究[きそけんきゅう]への配分[はいぶん]を減[へ]らす方針[ほうしん]には反対[はんたい]です。\nA: 応用研究[おうようけんきゅう]を優先[ゆうせん]すれば、成果[せいか]が早[はや]く社会[しゃかい]に還元[かんげん]されると考[かんが]えていますが。\nB: しかし、基礎研究[きそけんきゅう]なしには応用[おうよう]も成[な]り立[た]たないに過[す]ぎません。\nA: 確[たし]かに、短期的成果[たんきてきせいか]ばかり追[お]うきらいがあるのは事実[じじつ]です。\nB: 長期的視野[ちょうきてきしや]に立[た]った助成制度[じょせいせいど]を維持[いじ]すべきだと思[おも]います。\nA: 若手研究者[わかてけんきゅうしゃ]の育成[いくせい]にも重点[じゅうてん]を置[お]く必要[ひつよう]がありますね。\nB: ええ。次世代[じせだい]を担[にな]う人材[じんざい]の確保[かくほ]こそが、科学[かがく]の未来[みらい]を決[き]めるのです。",
    translation: "A: Please share your views on next period's research grant policy. B: I oppose the policy of reducing allocations to basic research. A: If we prioritize applied research, results return to society faster, I think. B: However, without basic research, applied research cannot exist either. A: True — there's a tendency to chase only short-term results. B: I think we should maintain a grant system with a long-term perspective. A: Training young researchers must also be emphasized. B: Yes. Securing talent for the next generation is what decides the future of science.",
    questions: [
      {
        q: "What does B oppose?",
        choices: ["Cutting applied research funding", "Reducing basic research allocations", "Increasing grant oversight", "Privatizing research institutes"],
        answerIndex: 1,
        explanation: "B says 基礎研究[きそけんきゅう]への配分[はいぶん]を減[へ]らす方針[ほうしん]には反対[はんたい] — opposes reducing basic research allocations."
      },
      {
        q: "What is A's argument for applied research?",
        choices: ["It is cheaper", "Results return to society faster", "It attracts foreign talent", "It is easier to evaluate"],
        answerIndex: 1,
        explanation: "A says 応用研究[おうようけんきゅう]を優先[ゆうせん]すれば、成果[せいか]が早[はや]く社会[しゃかい]に還元[かんげん]される — results return to society faster."
      },
      {
        q: "What tendency does A admit?",
        choices: ["Over-funding basic research", "Chasing only short-term results", "Ignoring young researchers", "Bypassing peer review"],
        answerIndex: 1,
        explanation: "A says 短期的成果[たんきてきせいか]ばかり追[お]うきらいがある — tendency to chase only short-term results."
      },
      {
        q: "What should be emphasized alongside basic research?",
        choices: ["Patent filings", "Training young researchers", "Industry partnerships", "International conferences"],
        answerIndex: 1,
        explanation: "A says 若手研究者[わかてけんきゅうしゃ]の育成[いくせい]にも重点[じゅうてん]を置[お]く必要[ひつよう]がある — training young researchers."
      }
    ],
    estMinutes: 5,
    tags: ["science", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-73 — A space policy discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-73",
    title: "Space Policy Revision",
    level: "N2",
    context: "Officials revising the national space strategy plan",
    text: "A: 宇宙基本計画[うちゅうきほんけいかく]の改定[かいてい]にあたり、重点分野[じゅうてんぶんや]を見直[みなお]す必要[ひつよう]があります。\nB: 監視衛星[かんしえいせい]の増強[ぞうきょう]は急務[きゅうむ]だと思[おも]います。\nA: 確[たし]かに、安全保障上[あんぜんほしょうじょう]の脅威[きょうい]が増大[ぞうだい]しつつある状況[じょうきょう]では不可欠[ふかけつ]です。\nB: 一方[いっぽう]で、宇宙[うちゅう]ごみの除去技術[じょきょぎじゅつ]にも投資[とうし]すべきです。\nA: 民間企業[みんかんきぎょう]との連携[れんけい]を強化[きょうか]すれば、開発費用[かいはつひよう]を大幅[おおはば]に抑[おさ]えられます。\nB: 宇宙産業[うちゅうさんぎょう]の振興[しんこう]と安全確保[あんぜんかくほ]の両立[りょうりつ]が鍵[かぎ]ですね。\nA: 国際的[こくさいてき]なルールの構築[こうちく]にも主導的[しゅどうてき]な役割[やくわり]を果[はた]したいところです。\nB: ええ。他国[たこく]との協力関係[きょうりょくかんけい]を築[きず]く上[うえ]でも、戦略的[せんりゃくてき]な対応[たいおう]が求[もと]められます。",
    translation: "A: In revising the space basic plan, we need to review priority areas. B: Strengthening surveillance satellites is urgent. A: Indeed, with threats to security growing, it's indispensable. B: On the other hand, we should also invest in space-debris removal technology. A: If we strengthen cooperation with private companies, development costs can be greatly reduced. B: Balancing space-industry promotion and safety assurance is key. A: We'd also like to play a leading role in building international rules. B: Yes. Strategic response is needed to build cooperative relationships with other countries.",
    questions: [
      {
        q: "What does B consider urgent?",
        choices: ["Mars exploration", "Strengthening surveillance satellites", "Lunar bases", "Asteroid mining"],
        answerIndex: 1,
        explanation: "B says 監視衛星[かんしえいせい]の増強[ぞうきょう]は急務[きゅうむ] — strengthening surveillance satellites is urgent."
      },
      {
        q: "What else does B want investment in?",
        choices: ["Manned missions", "Space tourism", "Space debris removal technology", "Reusable rockets"],
        answerIndex: 2,
        explanation: "B says 宇宙[うちゅう]ごみの除去技術[じょきょぎじゅつ]にも投資[とうし]すべき — should invest in debris removal."
      },
      {
        q: "How can development costs be reduced?",
        choices: ["Cutting research staff", "Strengthening cooperation with private companies", "Importing foreign parts", "Delaying projects"],
        answerIndex: 1,
        explanation: "A says 民間企業[みんかんきぎょう]との連携[れんけい]を強化[きょうか]すれば — if cooperation with private companies is strengthened."
      },
      {
        q: "What role does A want to play internationally?",
        choices: ["Funder only", "A leading role in rule-building", "Neutral observer", "Mediator only"],
        answerIndex: 1,
        explanation: "A says 国際的[こくさいてき]なルールの構築[こうちく]にも主導的[しゅどうてき]な役割[やくわり]を果[はた]したい — leading role in building international rules."
      }
    ],
    estMinutes: 5,
    tags: ["science", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-74 — Discussing an AI regulation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-74",
    title: "AI Regulation Bill Discussion",
    level: "N2",
    context: "Lawmakers debating a proposed AI regulation bill",
    text: "A: 人工知能[じんこうちのう]の規制法案[きせいほうあん]について、どのような立場[たちば]ですか。\nB: 行[い]き過[す]ぎた規制[きせい]は、技術革新[ぎじゅつかくしん]を阻害[そがい]しかねないと考[かんが]えています。\nA: とはいえ、プライバシーの侵害[しんがい]や差別[さべつ]のリスクを放置[ほうち]するわけにはいきません。\nB: 確[たし]かに、自律型兵器[じりつがたへいき]への転用[てんよう]などは看過[かんか]できない問題[もんだい]です。\nA: 利用目的[りようもくてき]に応[おう]じて、規制[きせい]の強[つよ]さを変[か]える階層的[かいそうてき]な手法[しゅほう]が望[のぞ]ましいですね。\nB: その上[うえ]で、透明性[とうめいせい]の確保[かくほ]を義務付[ぎむづ]けるべきです。\nA: 国際的[こくさいてき]な枠組[わくぐ]みとの整合性[せいごうせい]も保[たも]つ必要[ひつよう]があります。\nB: ええ。過度[かど]な制限[せいげん]を避[さ]けつつ、安全[あんぜん]を担保[たんぽ]するバランスが大切[たいせつ]です。",
    translation: "A: What's your position on the AI regulation bill? B: I think excessive regulation could stifle technological innovation. A: That said, we can't ignore risks to privacy or discrimination. B: True — conversion to autonomous weapons is a problem we can't overlook. A: A tiered approach that varies regulation strength by use purpose would be desirable. B: On top of that, ensuring transparency should be mandated. A: We also need to maintain consistency with international frameworks. B: Yes. Balancing safety assurance with avoiding excessive restriction is important.",
    questions: [
      {
        q: "What is B's position on AI regulation?",
        choices: ["Supports strict bans", "Excessive regulation could stifle innovation", "Opposes any regulation", "Prefers state-level rules only"],
        answerIndex: 1,
        explanation: "B says 行き過[す]ぎた規制[きせい]は、技術革新[ぎじゅつかくしん]を阻害[そがい]しかねない — excessive regulation could stifle innovation."
      },
      {
        q: "What risk can't be overlooked?",
        choices: ["Job displacement", "Conversion to autonomous weapons", "Copyright violations", "Energy consumption"],
        answerIndex: 1,
        explanation: "B says 自律型兵器[じりつがたへいき]への転用[てんよう]などは看過[かんか]できない — conversion to autonomous weapons can't be overlooked."
      },
      {
        q: "What approach does A suggest?",
        choices: ["A blanket ban", "Tiered regulation by use purpose", "Voluntary guidelines only", "Post-hoc penalties only"],
        answerIndex: 1,
        explanation: "A says 利用目的[りようもくてき]に応[おう]じて、規制[きせい]の強[つよ]さを変[か]える階層的[かいそうてき]な手法[しゅほう] — tiered regulation by purpose."
      },
      {
        q: "What should be mandated alongside tiered regulation?",
        choices: ["Source-code disclosure", "Ensuring transparency", "Mandatory insurance", "Audit by third parties"],
        answerIndex: 1,
        explanation: "B says 透明性[とうめいせい]の確保[かくほ]を義務付[ぎむづ]けるべき — ensuring transparency should be mandated."
      }
    ],
    estMinutes: 5,
    tags: ["technology", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-75 — At the ocean research institute
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-75",
    title: "Deep-Sea Ecosystem Survey",
    level: "N2",
    context: "Researchers reporting findings from a deep-sea expedition",
    text: "A: 深海生態系[しんかいせいたいけい]の調査結果[ちょうさけっか]について報告[ほうこく]してください。\nB: 二千[にせん]メートル以深[いしん]で、新[あたら]しい種[しゅ]の生物[せいぶつ]が複数[ふくすう]確認[かくにん]されました。\nA: それは画期的[かっきてき]な発見[はっけん]ですね。環境変化[かんきょうへんか]の影響[えいきょう]は見[み]られましたか。\nB: 海水温度[かいすいおんど]の上昇[じょうしょう]に伴[ともな]って、分布[ぶんぷ]の変化[へんか]が生[しょう]じつつあります。\nA: そうなると、食物連鎖[しょくもつれんさ]全体[ぜんたい]に影響[えいきょう]が及[およ]ぶおそれがありますね。\nB: ええ。特[とく]に、深海魚[しんかいぎょ]の個体数[こたいすう]減少[げんしょう]が顕著[けんちょ]です。\nA: 世界的[せかいてき]なデータベースと共有[きょうゆう]し、監視体制[かんしたいせい]を強化[きょうか]しましょう。\nB: 賛成[さんせい]です。継続的[けいぞくてき]な観測[かんそく]が、将来[しょうらい]の予測[よそく]に不可欠[ふかけつ]です。",
    translation: "A: Please report on the deep-sea ecosystem survey results. B: Below 2000 meters, several new species were confirmed. A: That's a groundbreaking discovery. Were any effects of environmental change observed? B: Distribution changes are occurring, accompanying rising seawater temperatures. A: Then the entire food chain could be affected. B: Yes. In particular, the decline in deep-sea fish populations is striking. A: Let's share data with global databases and strengthen monitoring. B: Agreed. Continuous observation is indispensable for future predictions.",
    questions: [
      {
        q: "What was found below 2000 meters?",
        choices: ["Ancient ruins", "Several new species", "Mineral deposits", "Underwater vents"],
        answerIndex: 1,
        explanation: "B says 新[あたら]しい種[しゅ]の生物[せいぶつ]が複数[ふくすう]確認[かくにん]された — several new species confirmed."
      },
      {
        q: "What change is accompanying temperature rise?",
        choices: ["Species extinction", "Changes in distribution", "Coral bleaching", "Reduced salinity"],
        answerIndex: 1,
        explanation: "B says 海水温度[かいすいおんど]の上昇[じょうしょう]に伴[ともな]って、分布[ぶんぷ]の変化[へんか]が生[しょう]じつつある — distribution changes accompanying temperature rise."
      },
      {
        q: "What trend is particularly striking?",
        choices: ["Coral reef growth", "Decline in deep-sea fish populations", "Plankton blooms", "Whale migration shifts"],
        answerIndex: 1,
        explanation: "B says 深海魚[しんかいぎょ]の個体数[こたいすう]減少[げんしょう]が顕著[けんちょ] — decline in deep-sea fish populations is striking."
      },
      {
        q: "What is indispensable for future predictions?",
        choices: ["More funding", "Continuous observation", "Computer models only", "International treaties"],
        answerIndex: 1,
        explanation: "B says 継続的[けいぞくてき]な観測[かんそく]が、将来[しょうらい]の予測[よそく]に不可欠[ふかけつ] — continuous observation is indispensable."
      }
    ],
    estMinutes: 5,
    tags: ["science", "environment"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-76 — A forestry management talk
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-76",
    title: "Sustainable Forestry Management",
    level: "N2",
    context: "Officials discussing forest management and forestry revival",
    text: "A: 森林資源[しんりんしげん]の持続可能[じぞくかのう]な管理方針[かんりほうしん]について、議論[ぎろん]を始[はじ]めたいのですが。\nB: 現状[げんじょう]では、人工林[じんこうりん]の手入[てい]れが行[おこな]き届[とど]いていない地域[ちいき]が多[おお]いです。\nA: 後継者不足[こうけいしゃぶそく]が最大[さいだい]の要因[よういん]と言[い]えますね。\nB: ええ。林業[りんぎょう]の収益性[しゅうえきせい]を高[たか]めなければ、若者[わかもの]は定着[ていちゃく]しません。\nA: 木材需要[もくざいじゅよう]を拡大[かくだい]するには、建築業界[けんちくぎょうかい]との連携[れんけい]が鍵[かぎ]になります。\nB: 国産材利用[こくさんざいりよう]を促進[そくしん]する税制優遇[ぜいせいゆうぐう]も有効[ゆうこう]です。\nA: そうした施策[しさく]を組[く]み合[あ]わせるにつれて、林業[りんぎょう]の再生[さいせい]も見込[みこ]めるでしょう。\nB: 森林[しんりん]の保全[ほぜん]と林業[りんぎょう]の振興[しんこう]を両立[りょうりつ]させる道筋[みちすじ]を示[しめ]したいですね。",
    translation: "A: I'd like to start discussing a sustainable management policy for forest resources. B: Currently, many regions have poorly maintained plantations. A: Lack of successors is the biggest cause. B: Yes. Without improving forestry profitability, young people won't settle in. A: To expand timber demand, cooperation with the construction industry is key. B: Tax incentives to promote domestic timber use are also effective. A: By combining such measures, forestry revival can be expected. B: I'd like to show a path that balances forest conservation and forestry promotion.",
    questions: [
      {
        q: "What problem do many plantations face?",
        choices: ["Over-harvesting", "Poor maintenance", "Pest outbreaks", "Wildfire damage"],
        answerIndex: 1,
        explanation: "B says 人工林[じんこうりん]の手入[てい]れが行[おこな]き届[とど]いていない — poorly maintained."
      },
      {
        q: "What is the biggest cause of poor maintenance?",
        choices: ["Lack of funding", "Lack of successors", "Outdated technology", "Strict regulations"],
        answerIndex: 1,
        explanation: "A says 後継者不足[こうけいしゃぶそく]が最大[さいだい]の要因[よういん] — lack of successors is the biggest cause."
      },
      {
        q: "What is key to expanding timber demand?",
        choices: ["Export promotion", "Cooperation with the construction industry", "Government procurement", "Marketing campaigns"],
        answerIndex: 1,
        explanation: "A says 建築業界[けんちくぎょうかい]との連携[れんけい]が鍵[かぎ] — cooperation with the construction industry is key."
      },
      {
        q: "What measure would promote domestic timber use?",
        choices: ["Subsidies", "Tax incentives", "Import tariffs", "Quality standards"],
        answerIndex: 1,
        explanation: "B says 国産材利用[こくさんざいりよう]を促進[そくしん]する税制優遇[ぜいせいゆうぐう]も有効[ゆうこう] — tax incentives are effective."
      }
    ],
    estMinutes: 5,
    tags: ["environment", "economy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-77 — Discussing a water crisis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-77",
    title: "Drought and Water Crisis",
    level: "N2",
    context: "Officials discussing measures against a severe drought",
    text: "A: 渇水[かっすい]の影響[えいきょう]で、複数[ふくすう]の自治体[じちたい]が水道水[すいどうすい]の供給[きょうきゅう]を制限[せいげん]しています。\nB: これまでも渇水[かっすい]はありましたが、今回[こんかい]は深刻[しんこく]さの度合[どあ]いが違[ちが]いますね。\nA: 確[たし]かに、貯水池[ちょすいち]の水位[すいい]が過去最低[かこさいてい]を記録[きろく]しています。\nB: このままでは、農業用水[のうぎょうようすい]の確保[かくほ]さえ困難[こんなん]になりかねません。\nA: 緊急的[きんきゅうてき]な海水淡水化[かいすいたんすいか]プラントの建設[けんせつ]も検討[けんとう]すべきでしょうか。\nB: コストと時間[じかん]を考[かんが]えると、節水[せっすい]の徹底[てってい]が先決[せんけつ]です。\nA: 長期的[ちょうきてき]には、上下水道[じょうげすいどう]の老朽化対策[ろうきゅうかたいさく]も含[ふく]め、抜本的[ばっぽんてき]な見直[みなお]しが必要[ひつよう]ですね。\nB: 水資源[すいしげん]の管理体制[かんりたいせい]そのものを見直[みなお]す時期[じき]に来[き]ていると言[い]えます。",
    translation: "A: Due to drought, multiple municipalities are restricting tap-water supply. B: We've had droughts before, but this time the severity is different. A: Indeed, reservoir water levels have hit record lows. B: At this rate, even securing agricultural water could become difficult. A: Should we also consider emergency construction of desalination plants? B: Considering cost and time, thorough water conservation is the first priority. A: Long term, we need a fundamental review, including aging water-infrastructure countermeasures. B: It's fair to say it's time to review the water-resource management system itself.",
    questions: [
      {
        q: "What are multiple municipalities doing due to the drought?",
        choices: ["Halting industry", "Restricting tap-water supply", "Importing water", "Drilling new wells"],
        answerIndex: 1,
        explanation: "A says 複数[ふくすう]の自治体[じちたい]が水道水[すいどうすい]の供給[きょうきゅう]を制限[せいげん]している — restricting tap-water supply."
      },
      {
        q: "What record has been set?",
        choices: ["Highest temperatures", "Lowest reservoir water levels", "Largest crop losses", "Longest dry spell"],
        answerIndex: 1,
        explanation: "A says 貯水池[ちょすいち]の水位[すいい]が過去最低[かこさいてい]を記録[きろく]している — lowest reservoir water levels."
      },
      {
        q: "What might become difficult to secure?",
        choices: ["Drinking water", "Industrial water", "Agricultural water", "Firefighting water"],
        answerIndex: 2,
        explanation: "B says 農業用水[のうぎょうようすい]の確保[かくほ]さえ困難[こんなん]になりかねない — agricultural water could become difficult to secure."
      },
      {
        q: "What is the first priority according to B?",
        choices: ["Building desalination plants", "Thorough water conservation", "Importing bottled water", "Raising water prices"],
        answerIndex: 1,
        explanation: "B says 節水[せっすい]の徹底[てってい]が先決[せんけつ] — thorough water conservation is the first priority."
      }
    ],
    estMinutes: 6,
    tags: ["environment", "crisis"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-78 — At the meteorological agency
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-78",
    title: "Typhoon Forecast Briefing",
    level: "N2",
    context: "Meteorologists briefing on an approaching typhoon",
    text: "A: 今週末[こんしゅうまつ]に予想[よそう]される台風[たいふう]の進路[しんろ]について、説明[せつめい]をお願[ねが]いします。\nB: 現在[げんざい]、勢力[せいりょく]を強[つよ]めながら北上[ほくじょう]しており、土曜[どよう]の夜[よる]に最[もっと]も接近[せっきん]する見込[みこ]みです。\nA: 以前[いぜん]の予測[よそく]と比[くら]べて、進路[しんろ]は東[ひがし]に寄[よ]っていますね。\nB: ええ。最新[さいしん]の観測[かんそく]データに基[もと]づいて、予報[よほう]を修正[しゅうせい]したところです。\nA: 大型[おおがた]で勢力[せいりょく]も強[つよ]いとのことですが、警戒[けいかい]すべき点[てん]は何[なに]ですか。\nB: 暴風[ぼうふう]と高潮[たかしお]は当然[とうぜん]ですが、線状降水帯[せんじょうこうすいたい]による河川氾濫[かせんはんらん]にも注意[ちゅうい]が必要[ひつよう]です。\nA: 避難勧告[ひなんかんこく]を出[だ]す時期[じき]について、自治体[じちたい]へ助言[じょげん]はありますか。\nB: 早[はや]めの判断[はんだん]を求[もと]めるガイドラインを、もう共有[きょうゆう]しました。",
    translation: "A: Please explain the path of the typhoon expected this weekend. B: It's currently strengthening as it moves north, and is expected to make closest approach Saturday night. A: Compared to the previous forecast, the path has shifted east. B: Yes. We just revised the forecast based on the latest observation data. A: It's large and strong — what should we be alert to? B: Storm winds and storm surges are obvious, but river flooding from linear rainbands also needs attention. A: Any advice to municipalities on when to issue evacuation advisories? B: We've already shared guidelines urging early decisions.",
    questions: [
      {
        q: "When will the typhoon make its closest approach?",
        choices: ["Friday morning", "Saturday night", "Sunday afternoon", "Monday dawn"],
        answerIndex: 1,
        explanation: "B says 土曜[どよう]の夜[よる]に最[もっと]も接近[せっきん]する — Saturday night."
      },
      {
        q: "Why was the forecast revised?",
        choices: ["Public pressure", "Based on latest observation data", "International request", "Satellite malfunction"],
        answerIndex: 1,
        explanation: "B says 最新[さいしん]の観測[かんそく]データに基[もと]づいて、予報[よほう]を修正[しゅうせい]した — based on latest observation data."
      },
      {
        q: "What else needs attention besides wind and surges?",
        choices: ["Landslides only", "River flooding from linear rainbands", "Tornadoes", "Heatstroke"],
        answerIndex: 1,
        explanation: "B says 線状降水帯[せんじょうこうすいたい]による河川氾濫[かせんはんらん]にも注意[ちゅうい]が必要[ひつよう] — river flooding from linear rainbands."
      },
      {
        q: "What advice was given to municipalities?",
        choices: ["Wait 24 hours", "Make early decisions", "Issue only voluntary advisories", "Coordinate with neighbors first"],
        answerIndex: 1,
        explanation: "B says 早[はや]めの判断[はんだん]を求[もと]めるガイドライン — guidelines urging early decisions."
      }
    ],
    estMinutes: 5,
    tags: ["science", "emergency"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-79 — A public health survey
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-79",
    title: "Community Health Survey",
    level: "N2",
    context: "Officials reviewing the results of a community health survey",
    text: "A: 地域住民[ちいきじゅうみん]を対象[たいしょう]とした健康調査[けんこうちょうさ]の結果[けっか]をまとめました。\nB: 全体的[ぜんたいてき]な傾向[けいこう]はいかがですか。\nA: 生活習慣病[せいかつしゅうかんびょう]の有病率[ゆうびょうりつ]が、全国平均[ぜんこくへいきん]を二割[にわり]ほど上回[うわまわ]っています。\nB: それほど高[たか]い数値[すうち]だと、早急[そうきゅう]な対策[たいさく]が必要[ひつよう]ですね。\nA: 特[とく]に、塩分摂取量[えんぶんせっしゅりょう]と運動不足[うんどうぶそく]が目立[めだ]っています。\nB: 健康寿命[けんこうじゅみょう]の延伸[えんしん]を図[はか]るには、予防[よぼう]に重点[じゅうてん]を置[お]くべきです。\nA: 住民[じゅうみん]に直接[ちょくせつ]働[はたら]きかけるワークショップを、月[つき]に一回[いっかい]の頻度[ひんど]で開[ひら]く案[あん]です。\nB: 多[おお]くの住民[じゅうみん]が参加[さんか]できるよう、時間帯[じかんたい]も工夫[くふう]してください。\nA: かしこまりました。夜間[やかん]にも設[もう]けることで、働[はたら]く世代[せだい]の参加[さんか]を見込[みこ]みます。",
    translation: "A: We've compiled results of a health survey of community residents. B: What's the overall trend? A: The prevalence of lifestyle diseases is about 20% above the national average. B: With numbers that high, urgent measures are needed. A: In particular, salt intake and lack of exercise stand out. B: To extend healthy life expectancy, prevention should be emphasized. A: We propose holding workshops to directly engage residents once a month. B: Please also work on time slots so many residents can participate. A: Understood. By setting evening slots too, we expect participation from working generations.",
    questions: [
      {
        q: "How does the lifestyle disease rate compare to the national average?",
        choices: ["About equal", "About 20% higher", "About 20% lower", "About twice as high"],
        answerIndex: 1,
        explanation: "A says 全国平均[ぜんこくへいきん]を二割[にわり]ほど上回[うわまわ]っている — about 20% above national average."
      },
      {
        q: "What issues stand out in the survey?",
        choices: ["Smoking and alcohol", "Salt intake and lack of exercise", "Sleep deprivation", "Mental health"],
        answerIndex: 1,
        explanation: "A says 塩分摂取量[えんぶんせっしゅりょう]と運動不足[うんどうぶそく]が目立[めだ]っている — salt intake and lack of exercise stand out."
      },
      {
        q: "What should be emphasized to extend healthy life expectancy?",
        choices: ["Treatment", "Prevention", "Hospital construction", "Drug development"],
        answerIndex: 1,
        explanation: "B says 健康寿命[けんこうじゅみょう]の延伸[えんしん]を図[はか]るには、予防[よぼう]に重点[じゅうてん]を置[お]くべき — prevention should be emphasized."
      },
      {
        q: "What is done to reach working generations?",
        choices: ["Online sessions only", "Setting evening slots", "Subsidized gym memberships", "Workplace visits"],
        answerIndex: 1,
        explanation: "A says 夜間[やかん]にも設[もう]けることで、働[はたら]く世代[せだい]の参加[さんか]を見込[みこ]む — setting evening slots too."
      }
    ],
    estMinutes: 5,
    tags: ["health", "community"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n2n-80 — Discussing a border dispute
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n2n-80",
    title: "Border Dispute Resolution",
    level: "N2",
    context: "Diplomats analyzing options for resolving a border conflict",
    text: "A: 北部[ほくぶ]の国境[こっきょう]をめぐる紛争[ふんそう]について、現状[げんじょう]を整理[せいり]してください。\nB: 双方[そうほう]が領有権[りょうゆうけん]を主張[しゅちょう]しており、軍事的緊張[ぐんじてききんちょう]が続[つづ]いています。\nA: 国際司法裁判所[こくさいしほうさいばんしょ]への付託[ふたく]は実現[じつげん]しそうですか。\nB: 当事国双方[とうじこくそうほう]の合意[ごうい]が必要[ひつよう]なだけに、簡単[かんたん]ではありません。\nA: 停戦協定[ていせんきょうてい]が結[むす]ばれたとしても、恒久的解決[こうきゅうてきかいけつ]には程遠[ほどとお]いでしょう。\nB: ええ。信頼構築措置[しんらいこうちくそち]を積極的[せっきょくてき]に進[すす]めるしかありません。\nA: 経済協力[けいざいきょうりょく]を通[つう]じて関係改善[かんけいかいぜん]を図[はか]ることも一案[いちあん]です。\nB: そうした柔軟[じゅうなん]な外交[がいこう]が、緊張緩和[きんちょうかんわ]につながるに違[ちが]いないですね。",
    translation: "A: Please summarize the current state of the dispute over the northern border. B: Both sides are claiming sovereignty, and military tensions continue. A: Will referral to the International Court of Justice materialize? B: Since both parties' agreement is required, it won't be easy. A: Even if a ceasefire agreement is signed, we'll be far from a permanent solution. B: Yes. We have no choice but to actively advance confidence-building measures. A: Improving relations through economic cooperation is also an option. B: Such flexible diplomacy will surely lead to tension reduction.",
    questions: [
      {
        q: "What are both sides doing?",
        choices: ["Negotiating directly", "Claiming sovereignty", "Withdrawing troops", "Seeking UN intervention"],
        answerIndex: 1,
        explanation: "B says 双方[そうほう]が領有権[りょうゆうけん]を主張[しゅちょう]している — both sides claim sovereignty."
      },
      {
        q: "What is needed to bring the case to the ICJ?",
        choices: ["UN Security Council action", "Both parties' agreement", "A public referendum", "A mediator's proposal"],
        answerIndex: 1,
        explanation: "B says 当事国双方[とうじこくそうほう]の合意[ごうい]が必要[ひつよう] — both parties' agreement is needed."
      },
      {
        q: "What is the situation even with a ceasefire?",
        choices: ["Permanent peace achieved", "Far from a permanent solution", "Troops fully withdrawn", "Refugees returning"],
        answerIndex: 1,
        explanation: "A says 恒久的解決[こうきゅうてきかいけつ]には程遠[ほどとお]い — far from a permanent solution."
      },
      {
        q: "What approach might ease tensions?",
        choices: ["Military escalation", "Flexible diplomacy through economic cooperation", "Unilateral sanctions", "International isolation"],
        answerIndex: 1,
        explanation: "B says 柔軟[じゅうなん]な外交[がいこう]が、緊張緩和[きんちょうかんわ]につながる — flexible diplomacy will ease tensions."
      }
    ],
    estMinutes: 5,
    tags: ["politics", "diplomacy"]
  }
];
