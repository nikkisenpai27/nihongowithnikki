import type { ListeningData } from "@/lib/types";

// N1 listening exercises set B (ids l-n1-21..l-n1-40).
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole run. Kana, katakana, digits, punctuation, and 々
// have no brackets. Every kanji has inline furigana. text is read aloud by
// TTS AND shown as the transcript.
// N1 grammar targets: 〜ずにはおかない, 〜とはいえ, 〜たところで, 〜いかんによって,
// 〜に則って, 〜たる, 〜限り, 〜次第で, 〜きらいがある, 〜が最後, 〜なしに,
// 〜いかんにかかわらず, 〜を禁じ得ない, 〜に足る, 〜を余儀なくされる, etc.

export const listeningN1B: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n1-21 — A judicial reform discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-21",
    title: "Judicial Reform Debate",
    level: "N1",
    context: "A legal scholar and a policy advisor debate expanding the lay judge system",
    text: "A: 審判[しんぱん]制度[せいど]の拡大[かくだい]法案[ほうあん]が可決[かけつ]される見込[みこみ]ですね。\nB: ええ、もっとも、裁判[さいばん]の迅速[じんそく]化[か]を図[はか]るとはいえ、陪審[ばいしん]員[いん]への負担[ふたん]を軽視[けいし]してはならないでしょう。\nA: 専門[せんもん]的[てき]な判断[はんだん]を要[よう]する事件[じけん]にまで適用[てきよう]を広[ひろ]げれば、冤罪[えんざい]を招[まね]かずにはおかない。\nB: 同意[どうい]します。その点[てん]、上級[じょうきゅう]裁判所[さいばんしょ]の判断[はんだん]を仰[あお]ぐ仕組[しく]み次第[しだい]では、リスクは相当[そうとう]抑[よく]制[せい]できるはずです。\nA: とはいえ、何[なに]よりも、国民[こくみん]の司法[しほう]参加[さんか]に対[たい]する信頼[しんらい]を損[そこ]なう事態[じたい]だけは避[さ]けねばなりません。\nB: 全[まった]くです。誠実[せいじつ]に議論[ぎろん]を尽[つ]くす限[かぎ]り、制度[せいど]の軌道[きどう]修正[しゅうせい]は可能[かのう]と信[しん]じています。\nA: 最終[さいしゅう]的[てき]には、法案[ほうあん]の内容[ないよう]いかんによって決[けっちゃく]をみるでしょう。\nB: 今後[こんご]の動[うご]きを見守[みまも]るしかありませんね。",
    translation: "A: The bill to expand the lay judge system is expected to pass. B: Yes. Even so, while aiming to speed up trials, we must not overlook the burden on jurors. A: If the scope is extended even to cases requiring expert judgment, wrongful convictions will inevitably result. B: I agree. Depending on a mechanism allowing review by higher courts, the risk should be substantially controlled. A: That said, above all, we must avoid any situation that undermines public trust in civic participation in justice. B: Absolutely. As long as we exhaust the discussion in good faith, I believe course correction of the system is possible. A: Ultimately, the outcome will depend on the content of the bill. B: We have no choice but to watch how things unfold.",
    questions: [
      {
        q: "According to B, what must not be overlooked even while speeding up trials?",
        choices: ["The burden on jurors", "The cost of trials", "The number of judges", "The length of appeals"],
        answerIndex: 0,
        explanation: "B says 陪審[ばいしん]員[いん]への負担[ふたん]を軽視[けいし]してはならない — the burden on jurors must not be overlooked."
      },
      {
        q: "What does A say extending the system to expert cases will inevitably cause?",
        choices: ["A surge in trial costs", "Wrongful convictions", "A shortage of jurors", "Delays in higher courts"],
        answerIndex: 1,
        explanation: "A says 冤罪[えんざい]を招[まね]かずにはおかない — wrongful convictions will inevitably be invited."
      },
      {
        q: "What mechanism does B say could control the risk?",
        choices: ["A faster appeal process", "Allowing review by higher courts", "Reducing the number of cases", "Appointing more expert judges"],
        answerIndex: 1,
        explanation: "B says 上級[じょうきゅう]裁判所[さいばんしょ]の判断[はんだん]を仰[あお]ぐ仕組[しく]み次第[しだい]では — depending on a mechanism for higher-court review."
      },
      {
        q: "What does A say must absolutely be avoided?",
        choices: ["Overburdening jurors", "Undermining public trust in civic participation", "Slowing the trial process", "Ignoring expert opinions"],
        answerIndex: 1,
        explanation: "A says 国民[こくみん]の司法[しほう]参加[さんか]に対[たい]する信頼[しんらい]を損[そこ]なう事態[じたい]だけは避[さ]けねば — only a situation undermining trust in civic participation must be avoided."
      },
      {
        q: "What does A say will determine the ultimate outcome?",
        choices: ["Public opinion polls", "The content of the bill", "The number of appeals", "International pressure"],
        answerIndex: 1,
        explanation: "A says 法案[ほうあん]の内容[ないよう]いかんによって決[けっちゃく]をみる — the outcome depends on the content of the bill."
      }
    ],
    estMinutes: 7,
    tags: ["judicial", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-22 — A climate ethics debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-22",
    title: "Climate Ethics Debate",
    level: "N1",
    context: "An environmental ethicist and an industry representative debate carbon offsets",
    text: "A: 排出[はいしゅつ]権[けん]取引[とりひき]に頼[たよ]るばかりでは、温暖[おんたん]化[か]対策[たいさく]の根本[こんぽん]的[てき]な解決[かいけつ]になり得[え]ない。\nB: その点[てん]は承知[しょうち]しておりますが、産業[さんぎょう]の競争[きょうそう]力[りょく]を損[そこ]なうことなく削減[さくげん]を進[すす]めるには、過渡[かと]期[き]の措置[そち]が不可欠[ふかけつ]です。\nA: だとしたところで、先進[せんしん]国[こく]が責任[せきにん]を免[まぬか]れるがごときでは、途上[とじょう]国[こく]の納得[なっとく]を得[え]られまい。\nB: もっともです。ただ、即刻[そっこく]に全廃[ぜんぱい]を迫[せま]れば、経済[けいざい]の混乱[こんらん]を来[きた]さずにはおかないでしょう。\nA: いずれにせよ、世代[せだい]間[かん]の公正[こうせい]に則[のっと]って行動[こうどう]するが企業[きぎょう]の義務[ぎむ]たるや、論[ろん]を俟[ま]たない。\nB: 賛成[さんせい]します。長期[ちょうき]的[てき]には、技術[ぎじゅつ]革新[かくしん]への投資[とうし]に勝[まさ]る策[さく]はありません。\nA: まさにその通[とお]り。今世紀[こんせいき]半[はん]ばまでを正念場[しょうねんば]と位置[いち]づけ、軌道[きどう]に乗[の]れるかどうかが問[と]われている。\nB: 国民[こくみん]各員[かくいん]の理解[りかい]を得[え]つつ、着実[ちゃくじつ]に前進[ぜんしん]するしかありません。",
    translation: "A: Relying solely on emissions trading cannot be a fundamental solution to global warming. B: I understand that point, but to advance reductions without harming industrial competitiveness, transitional measures are indispensable. A: Even so, if developed nations were to evade responsibility, we could never gain the understanding of developing nations. B: Quite right. However, demanding immediate abolition would inevitably throw the economy into chaos. A: In any case, that acting in accordance with intergenerational equity is a corporate duty admits of no argument. B: I agree. In the long term, there is no better measure than investment in technological innovation. A: Exactly. We are being tested on whether we can get on track, positioning the first half of this century as the critical juncture. B: While securing the understanding of every citizen, we have no choice but to advance steadily.",
    questions: [
      {
        q: "Why does B say transitional measures are necessary?",
        choices: ["To harm competitiveness", "To reduce emissions while preserving competitiveness", "To abolish emissions trading", "To slow economic growth"],
        answerIndex: 1,
        explanation: "B says 産業[さんぎょう]の競争[きょうそう]力[りょく]を損[そこ]なうことなく削減[さくげん]を進[すす]めるには — to advance reductions without harming competitiveness."
      },
      {
        q: "According to A, what would happen if developed nations evaded responsibility?",
        choices: ["Emissions would drop", "Developing nations wouldn't accept it", "Trade would expand", "The economy would boom"],
        answerIndex: 1,
        explanation: "A says 先進[せんしん]国[こく]が責任[せきにん]を免[まぬか]れるがごときでは、途上[とじょう]国[こく]の納得[なっとく]を得[え]られまい — developing nations wouldn't accept it."
      },
      {
        q: "What does B say demanding immediate abolition would inevitably cause?",
        choices: ["Lower emissions", "Economic chaos", "Faster innovation", "Trade growth"],
        answerIndex: 1,
        explanation: "B says 経済[けいざい]の混乱[こんらん]を来[きた]さずにはおかない — economic chaos would inevitably result."
      },
      {
        q: "What does A call an inarguable corporate duty?",
        choices: ["Pursuing profit", "Acting in accordance with intergenerational equity", "Expanding trade", "Abolishing regulations"],
        answerIndex: 1,
        explanation: "A says 世代[せだい]間[かん]の公正[こうせい]に則[のっと]って行動[こうどう]するが企業[きぎょう]の義務[ぎむ]たるや、論[ろん]を俟[ま]たない — acting per intergenerational equity is an inarguable corporate duty."
      },
      {
        q: "According to B, what is the best long-term measure?",
        choices: ["Emissions trading", "Investment in technological innovation", "Immediate abolition", "Reducing industrial output"],
        answerIndex: 1,
        explanation: "B says 技術[ぎじゅつ]革新[かくしん]への投資[とうし]に勝[まさ]る策[さく]はありません — no better measure than investment in innovation."
      }
    ],
    estMinutes: 7,
    tags: ["environment", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-23 — A technology assessment
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-23",
    title: "Technology Assessment",
    level: "N1",
    context: "A tech analyst and a sociologist assess the societal impact of generative AI",
    text: "A: 生成[せいせい]AI[エーアイ]の普及[ふきゅう]に伴[ともな]い、雇用[こよう]構造[こうぞう]が根底[こんてい]から覆[くつがえ]されつつある。\nB: そうですね。もっとも、技術[ぎじゅつ]そのものを排斥[はいせき]したところで、進歩[しんぽ]の歯止[はど]めにはなり得[え]ない。\nA: その通[とお]りです。問題[もんだい]は、労働[ろうどう]力[りょく]の再編[さいへん]を円滑[えんかつ]に進[すす]める仕組[しく]みが欠如[けつじょ]している点[てん]にあります。\nB: 教育[きょういく]的[てき]な投資[とうし]が追[お]いつかないが現状[げんじょう]の最大[さいだい]の瓶頸[びんけい]ですね。\nA: まさに。かといって、技術[ぎじゅつ]の進展[しんてん]を待[ま]つことなしに対策[たいさく]を講[こう]じないわけにはいきません。\nB: そうなれば、政府[せいふ]と企業[きぎょう]が連携[れんけい]して再訓練[さいくんれん]の枠組[わくぐ]みを整備[せいび]するしかありますまい。\nA: 一社[いっしゃ]の努力[どりょく]のみでは、到底[とうてい]足[た]りないことは論[ろん]を俟[ま]たない。\nB: 加[くわ]えて、技術[ぎじゅつ]的[てき]失業[しつぎょう]を生[しょう]じさせたものの、新[あたら]たな職種[しょくしゅ]も創出[そうしゅつ]される側面[そくめん]も見逃[みのが]せません。",
    translation: "A: With the spread of generative AI, employment structures are being overturned from the ground up. B: Indeed. However, even if we reject the technology itself, it cannot halt progress. A: Exactly. The problem is that mechanisms to smoothly restructure the labor force are lacking. B: The fact that educational investment cannot keep up is the biggest bottleneck of the current situation. A: Precisely. That said, we cannot help but devise countermeasures without waiting for technological progress. B: In that case, there is nothing for it but for government and companies to collaborate and build a retraining framework. A: That the efforts of a single company are far from sufficient admits of no argument. B: In addition, although technological unemployment has been generated, the aspect that new occupations are also being created must not be overlooked.",
    questions: [
      {
        q: "What does A say is happening to employment structures?",
        choices: ["Stabilizing slowly", "Being overturned from the ground up", "Expanding rapidly", "Remaining unchanged"],
        answerIndex: 1,
        explanation: "A says 雇用[こよう]構造[こうぞう]が根底[こんてい]から覆[くつがえ]されつつある — being overturned from the ground up."
      },
      {
        q: "According to B, what can't rejecting the technology do?",
        choices: ["Create new jobs", "Halt progress", "Speed up reform", "Reduce costs"],
        answerIndex: 1,
        explanation: "B says 排斥[はいせき]したところで、進歩[しんぽ]の歯止[はど]めにはなり得[え]ない — even if rejected, it cannot halt progress."
      },
      {
        q: "What does A identify as the core problem?",
        choices: ["AI is too expensive", "Mechanisms for labor restructuring are lacking", "Companies resist change", "Workers refuse retraining"],
        answerIndex: 1,
        explanation: "A says 労働[ろうどう]力[りょく]の再編[さいへん]を...進[すす]める仕組[しく]みが欠如[けつじょ]している — mechanisms for restructuring are lacking."
      },
      {
        q: "What does B call the biggest bottleneck?",
        choices: ["Slow AI adoption", "Educational investment not keeping up", "Worker resistance", "Government regulation"],
        answerIndex: 1,
        explanation: "B says 教育[きょういく]的[てき]な投資[とうし]が追[お]いつかないが...最大[さいだい]の瓶頸[びんけい] — educational investment not keeping up is the biggest bottleneck."
      },
      {
        q: "What aspect does B say must not be overlooked despite technological unemployment?",
        choices: ["Rising wages", "New occupations also being created", "Lower productivity", "Fewer startups"],
        answerIndex: 1,
        explanation: "B says 新[あたら]たな職種[しょくしゅ]も創出[そうしゅつ]される側面[そくめん]も見逃[みのが]せません — new occupations are also being created."
      }
    ],
    estMinutes: 6,
    tags: ["technology", "society"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-24 — A cultural diplomacy forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-24",
    title: "Cultural Diplomacy Forum",
    level: "N1",
    context: "A diplomat and a cultural anthropologist discuss soft power strategy",
    text: "A: 文化[ぶんか]外交[がいこう]を単[たん]なる宣伝[せんでん]に堕[だ]するなら、かえって反発[はんぱつ]を買[か]うきらいがある。\nB: 全[まった]く同感[どうかん]です。相手[あいて]国[こく]の文脈[ぶんみゃく]に即[そく]して発信[はっしん]しない限[かぎ]り、共感[きょうかん]は生[しょう]じ得[え]ない。\nA: そのためには、文化[ぶんか]の多様性[たようせい]を損[そこ]なうことなく、普遍[ふへん]的[てき]な価値[かち]を伝[つた]える工夫[くふう]が要[よう]される。\nB: 誠[まこと]にその通[とお]り。文化[ぶんか]交流[こうりゅう]を通[つう]じて信頼[しんらい]関係[かんけい]を築[きず]くことが、長期[ちょうき]的[てき]な戦略[せんりゃく]の要[かなめ]です。\nA: とはいえ、成果[せいか]を急[いそ]ぐ余[あま]り、短期[たんき]的[てき]な指標[しひょう]のみに固執[こしつ]すれば、本質[ほんしつ]を見失[みうしな]う恐[おそ]れがある。\nB: ええ。文化[ぶんか]の浸透[しんとう]は、一朝[いっちょう]一夕[いっせき]では図[はか]れるものではありませんから。\nA: 地道[じみち]な対話[たいわ]の積[つ]み重[かさ]ねに勝[まさ]る近道[ちかみち]はない、と言[い]わざるを得[え]ない。\nB: それが、真[しん]の相互[そうご]理解[りかい]に至[いた]る唯一[ゆいいつ]の道[みち]であることを確[たし]めています。",
    translation: "A: If cultural diplomacy degenerates into mere propaganda, it tends to invite backlash instead. B: I completely agree. Unless we disseminate in accordance with the context of the partner country, empathy cannot arise. A: To do so, ingenuity is required to convey universal values without undermining cultural diversity. B: Quite true. Building trust through cultural exchange is the crux of a long-term strategy. A: That said, in our haste for results, if we cling only to short-term indicators, we risk losing sight of the essence. B: Yes. Cultural infiltration, after all, cannot be achieved overnight. A: I must say there is no shortcut superior to the steady accumulation of dialogue. B: I am certain that is the only path to true mutual understanding.",
    questions: [
      {
        q: "What does A say happens if cultural diplomacy becomes mere propaganda?",
        choices: ["It gains support", "It tends to invite backlash", "It reduces costs", "It speeds results"],
        answerIndex: 1,
        explanation: "A says 反発[はんぱつ]を買[か]うきらいがある — it tends to invite backlash."
      },
      {
        q: "According to B, what is necessary for empathy to arise?",
        choices: ["More funding", "Disseminating in line with the partner country's context", "Larger audiences", "Faster delivery"],
        answerIndex: 1,
        explanation: "B says 相手[あいて]国[こく]の文脈[ぶんみゃく]に即[そく]して発信[はっしん]しない限[かぎ]り、共感[きょうかん]は生[しょう]じ得[え]ない — unless disseminating per the partner's context, empathy cannot arise."
      },
      {
        q: "What does B call the crux of a long-term strategy?",
        choices: ["Rapid outreach", "Building trust through cultural exchange", "Lowering costs", "Broadcasting widely"],
        answerIndex: 1,
        explanation: "B says 文化[ぶんか]交流[こうりゅう]を通[つう]じて信頼[しんらい]関係[かんけい]を築[きず]くことが...要[かなめ] — building trust through exchange is the crux."
      },
      {
        q: "What does A say we risk if we cling only to short-term indicators?",
        choices: ["Higher costs", "Losing sight of the essence", "Faster results", "Wider reach"],
        answerIndex: 1,
        explanation: "A says 本質[ほんしつ]を見失[みうしな]う恐[おそ]れがある — risk of losing sight of the essence."
      }
    ],
    estMinutes: 6,
    tags: ["diplomacy", "culture"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-25 — A public health emergency meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-25",
    title: "Public Health Emergency",
    level: "N1",
    context: "A health minister and an epidemiologist coordinate during an outbreak",
    text: "A: 感染[かんせん]拡大[かくだい]の兆候[ちょうこう]が見受[みう]けられます。直[ただ]ちに対応[たいおう]体制[たいせい]を強化[きょうか]すべきかと。\nB: 同意[どうい]します。ただ、措置[そち]の規模[きぼ]いかんにかかわらず、情報[じょうほう]の透明性[とうめいせい]を欠[か]けば、市民[しみん]の協力[きょうりょく]は得[え]られまい。\nA: 誠[まこと]に。情報[じょうほう]公開[こうかい]を怠[おこた]ったが最後[さいご]、信頼[しんらい]の回復[かいふく]は困難[こんなん]を極[きわ]めるでしょう。\nB: その点[てん]を踏[ふ]まえ、専門[せんもん]家[か]会議[かいぎ]を都度[つど]開[ひら]き、根拠[こんきょ]を明示[めいじ]して判断[はんだん]を示[しめ]す必要[ひつよう]があります。\nA: 賛成[さんせい]します。あわせて、誤報[ごほう]の拡散[かくさん]を防[ふせ]ぐため、公式[こうしき]チャンネルを通[つう]じて一律[いちりつ]に発信[はっしん]しましょう。\nB: もっとも、過度[かど]な規制[きせい]は、かえって情報[じょうほう]の潜行[せんこう]化[か]を招[まね]き兼[かね]ません。\nA: その折[おり]には、情報[じょうほう]リテラシーの啓発[けいはつ]にも力[ちから]を入[い]れる必要[ひつよう]があろうかと。\nB: 全[まった]くもってその通[とお]り。総合[そうごう]的[てき]な対応[たいおう]が不可欠[ふかけつ]です。",
    translation: "A: There are signs of the infection spreading. I believe we should strengthen our response system immediately. B: I agree. However, regardless of the scale of measures, lacking transparency in information, we would not obtain citizens' cooperation. A: Indeed. Once we neglect information disclosure, restoring trust would be extremely difficult. B: With that in mind, we need to convene expert panels each time and present judgments with clearly stated evidence. A: Agreed. Additionally, to prevent the spread of misinformation, let us disseminate uniformly through official channels. B: However, excessive regulation could conversely drive information underground. A: In that case, we should also invest in promoting information literacy. B: Absolutely. A comprehensive response is indispensable.",
    questions: [
      {
        q: "What does A say should be done immediately?",
        choices: ["Reduce staff", "Strengthen the response system", "Close borders fully", "Lift restrictions"],
        answerIndex: 1,
        explanation: "A says 対応[たいおう]体制[たいせい]を強化[きょうか]すべき — strengthen the response system."
      },
      {
        q: "According to B, what happens if information lacks transparency?",
        choices: ["Citizens cooperate more", "Citizens won't cooperate", "Costs drop", "Speed increases"],
        answerIndex: 1,
        explanation: "B says 情報[じょうほう]の透明性[とうめいせい]を欠[か]けば、市民[しみん]の協力[きょうりょく]は得[え]られまい — citizens won't cooperate."
      },
      {
        q: "What does A say would happen once information disclosure is neglected?",
        choices: ["Trust returns quickly", "Restoring trust becomes extremely difficult", "Citizens comply", "Costs decrease"],
        answerIndex: 1,
        explanation: "A says 情報[じょうほう]公開[こうかい]を怠[おこた]ったが最後[さいご]、信頼[しんらい]の回復[かいふく]は困難[こんなん]を極[きわ]める — restoring trust becomes extremely difficult."
      },
      {
        q: "What does B propose to do each time?",
        choices: ["Hold press conferences", "Convene expert panels and present evidence-based judgments", "Reduce meetings", "Lift regulations"],
        answerIndex: 1,
        explanation: "B says 専門[せんもん]家[か]会議[かいぎ]を都度[つど]開[ひら]き、根拠[こんきょ]を明示[めいじ]して判断[はんだん]を示[しめ]す — convene expert panels and present evidence-based judgments."
      },
      {
        q: "What does B warn excessive regulation could cause?",
        choices: ["Faster reporting", "Information going underground", "Better compliance", "Lower costs"],
        answerIndex: 1,
        explanation: "B says 過度[かど]な規制[きせい]は...情報[じょうほう]の潜行[せんこう]化[か]を招[まね]き兼[かね]ません — excessive regulation could drive information underground."
      }
    ],
    estMinutes: 6,
    tags: ["public-health", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-26 — A genetic engineering ethics panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-26",
    title: "Genetic Engineering Ethics",
    level: "N1",
    context: "A bioethicist and a geneticist debate germline editing",
    text: "A: 生殖[せいしょく]細胞[さいぼう]の遺伝子[いでんし]編集[へんしゅう]は、人類[じんるい]の未来[みらい]を左右[さゆう]しかねない重大[じゅうだい]な技術[ぎじゅつ]だ。\nB: そのとおりです。とはいえ、難病[なんびょう]の根絶[こんぜつ]に寄与[きよ]する可能[かのう]性[せい]を捨[す]てるわけにもいきません。\nA: もっとも、治療[ちりょう]目的[もくてき]にせよ、強化[きょうか]目的[もくてき]にせよ、不可逆[ふかぎゃく]な変容[へんよう]を後世[こうせい]に押[お]し付[つ]ける倫理[りんり]的[てき]責任[せきにん]を忘[わす]れてはならない。\nB: まさに。そのため、厳格[げんかく]なガイドラインを敷[し]き、国際[こくさい]的[てき]な合意[ごうい]形成[けいせい]を急[いそ]ぐべきでしょう。\nA: それにしても、一部[いちぶ]の国[くに]で規制[きせい]の緩和[かんわ]が先行[せんこう]しているのは懸念[けねん]に堪[た]えない。\nB: 同感[どうかん]です。規制[きせい]の足並[あしなみ]みが揃[そろ]わない限[かぎ]り、倫理[りんり]的[てき]な低地[ていち]への堕落[だらく]は避[さ]け得[え]ない。\nA: 最終[さいしゅう]的[てき]には、科学[かがく]の進歩[しんぽ]と人間[にんげん]の尊厳[そんげん]の調和[ちょうわ]如何[いかん]にかかっていると言[い]えよう。\nB: その調和[ちょうわ]を実現[じつげん]する枠組[わくぐ]みを構築[こうちく]することこそ、我々[われわれ]の使命[しめい]です。",
    translation: "A: Editing the genes of reproductive cells is a technology serious enough to sway the future of humanity. B: That's right. Still, we cannot simply abandon the possibility that it could contribute to eradicating intractable diseases. A: However, whether for therapeutic or enhancement purposes, we must not forget the ethical responsibility of imposing irreversible changes on future generations. B: Exactly. For that reason, we should lay down strict guidelines and hasten the formation of international consensus. A: Even so, that some countries are moving ahead with deregulation is unbearably worrying. B: I agree. As long as regulations remain unaligned, a descent into ethical low ground is unavoidable. A: Ultimately, it hinges on whether scientific progress and human dignity can be harmonized. B: Building the framework to realize that harmony is precisely our mission.",
    questions: [
      {
        q: "What does A call germline gene editing?",
        choices: ["A trivial tool", "A technology serious enough to sway humanity's future", "A cost-cutting measure", "A short-term experiment"],
        answerIndex: 1,
        explanation: "A says 人類[じんるい]の未来[みらい]を左右[さゆう]しかねない重大[じゅうだい]な技術[ぎじゅつ] — a technology serious enough to sway humanity's future."
      },
      {
        q: "According to B, what can't be simply abandoned?",
        choices: ["Profit opportunities", "The possibility of eradicating intractable diseases", "Patent rights", "Public funding"],
        answerIndex: 1,
        explanation: "B says 難病[なんびょう]の根絶[こんぜつ]に寄与[きよ]する可能[かのう]性[せい]を捨[す]てるわけにもいきません — the possibility of eradicating intractable diseases."
      },
      {
        q: "What does A say must not be forgotten regardless of purpose?",
        choices: ["Cost control", "The ethical responsibility of imposing irreversible changes on future generations", "Patent deadlines", "Publication timing"],
        answerIndex: 1,
        explanation: "A says 不可逆[ふかぎゃく]な変容[へんよう]を後世[こうせい]に押[お]し付[つ]ける倫理[りんり]的[てき]責任[せきにん]を忘[わす]れてはならない — the ethical responsibility to future generations."
      },
      {
        q: "What does A find unbearably worrying?",
        choices: ["Slow research", "Some countries moving ahead with deregulation", "High costs", "Public opposition"],
        answerIndex: 1,
        explanation: "A says 一部[いちぶ]の国[くに]で規制[きせい]の緩和[かんわ]が先行[せんこう]しているのは懸念[けねん]に堪[た]えない — deregulation moving ahead in some countries is unbearably worrying."
      },
      {
        q: "What does A say the issue ultimately hinges on?",
        choices: ["Funding levels", "Whether scientific progress and human dignity can be harmonized", "Patent counts", "Number of researchers"],
        answerIndex: 1,
        explanation: "A says 科学[かがく]の進歩[しんぽ]と人間[にんげん]の尊厳[そんげん]の調和[ちょうわ]如何[いかん]にかかっている — it hinges on harmonizing progress and dignity."
      }
    ],
    estMinutes: 7,
    tags: ["bioethics", "genetics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-27 — A financial regulation debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-27",
    title: "Financial Regulation Debate",
    level: "N1",
    context: "A central bank official and a fintech entrepreneur debate crypto regulation",
    text: "A: 仮想[かそう]通貨[つうか]の規制[きせい]を巡[めぐ]り、議論[ぎろん]が平行[へいこう]線[せん]を辿[たど]っている。\nB: ええ。厳格[げんかく]な規制[きせい]は、技術[ぎじゅつ]革新[かくしん]の芽[め]を摘[つ]む恐[おそ]れがあると我々[われわれ]は懸念[けねん]しております。\nA: その懸念[けねん]は分[わ]からなくもない。ただ、投資家[とうしか]保護[ほご]の観点[かんてん]からすれば、一定[いってい]の敷居[しきい]を設[もう]けないわけにはいかない。\nB: もっともです。とはいえ、規制[きせい]の内容[ないよう]如何[いかん]によっては、産業[さんぎょう]全体[ぜんたい]が壊滅[かいめつ]しかねない。\nA: そこで、サンドボックス制度[せいど]を導入[どうにゅう]し、実験[じっけん]的[てき]な運用[うんよう]を許容[きょよう]するのは如何[いかが]でしょう。\nB: 妥当[だとう]な折衷[せっちゅう]案[あん]と言[い]えましょう。ただ、透明性[とうめいせい]を担保[たんぽ]する仕組[しく]みが前提[ぜんてい]となります。\nA: 当然[とうぜん]です。消費者[しょうひしゃ]に不測[ふそく]の事態[じたい]を招[まね]くが最後[さいご]、制度[せいど]自体[じたい]の信頼[しんらい]は失墜[しっつい]しかねない。\nB: 合意[ごうい]形成[けいせい]に向[む]けて、関係[かんけい]者[しゃ]間[かん]の協議[きょうぎ]を加速[かそく]させましょう。",
    translation: "A: Debate over virtual currency regulation is going in circles. B: Yes. We are concerned that strict regulation could nip technological innovation in the bud. A: I can somewhat understand that concern. However, from the standpoint of investor protection, we cannot avoid setting a certain threshold. B: Fair enough. That said, depending on the content of regulation, the entire industry could face collapse. A: To that end, how about introducing a sandbox system and permitting experimental operation? B: That could be called a reasonable compromise. However, a mechanism guaranteeing transparency would be a prerequisite. A: Naturally. Once an unforeseen situation is brought upon consumers, the credibility of the system itself could collapse. B: Let us accelerate consultations among stakeholders toward consensus-building.",
    questions: [
      {
        q: "What does B fear strict regulation could do?",
        choices: ["Boost innovation", "Nip technological innovation in the bud", "Lower costs", "Speed adoption"],
        answerIndex: 1,
        explanation: "B says 技術[ぎじゅつ]革新[かくしん]の芽[め]を摘[つ]む恐[おそ]れ — could nip innovation in the bud."
      },
      {
        q: "From what standpoint does A say a threshold must be set?",
        choices: ["Profit maximization", "Investor protection", "Speed of innovation", "Market expansion"],
        answerIndex: 1,
        explanation: "A says 投資家[とうしか]保護[ほご]の観点[かんてん] — from the standpoint of investor protection."
      },
      {
        q: "What does B warn could happen depending on the regulation's content?",
        choices: ["Faster growth", "Collapse of the entire industry", "Lower prices", "More startups"],
        answerIndex: 1,
        explanation: "B says 産業[さんぎょう]全体[ぜんたい]が壊滅[かいめつ]しかねない — the entire industry could collapse."
      },
      {
        q: "What does A propose to permit experimental operation?",
        choices: ["A complete ban", "A sandbox system", "Lower taxes", "Full deregulation"],
        answerIndex: 1,
        explanation: "A says サンドボックス制度[せいど]を導入[どうにゅう]し...実験[じっけん]的[てき]な運用[うんよう]を許容[きょよう]する — introduce a sandbox system."
      },
      {
        q: "What does B say is a prerequisite for the compromise?",
        choices: ["Lower fees", "A mechanism guaranteeing transparency", "Faster approval", "More staff"],
        answerIndex: 1,
        explanation: "B says 透明性[とうめいせい]を担保[たんぽ]する仕組[しく]みが前提[ぜんてい] — a transparency mechanism is a prerequisite."
      }
    ],
    estMinutes: 6,
    tags: ["finance", "regulation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-28 — A refugee policy hearing
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-28",
    title: "Refugee Policy Hearing",
    level: "N1",
    context: "A legislator questions an immigration official on asylum policy",
    text: "A: 難民[なんみん]認定[にんてい]の厳格[げんかく]化[か]が、結果[けっか]として迫害[はくがい]を受[う]ける人々[ひとびと]を見捨[みす]てる結果[けっか]を招[まね]いていると指摘[してき]する声[こえ]があります。\nB: 誠[まこと]に重[おも]い指摘[してき]です。もっとも、審査[しんさ]の厳格[げんかく]化[か]は、不正[ふせい]申請[しんせい]を排除[はいじょ]する趣旨[しゅし]であり、決[けっ]して門前[もんぜん]払[ばら]いを目的[もくてき]とするものではありません。\nA: とはいえ、審査[しんさ]の過程[かてい]で人道[じんどう]的[てき]配慮[はいりょ]が疎[おろそ]かになっているとすれば、看過[かんか]できる問題[もんだい]ではありません。\nB: 全[まった]く。関係[かんけい]機関[きかん]と連携[れんけい]し、脆弱[ぜいじゃく]な立場[たちば]にある申請[しんせい]者[しゃ]に手厚[てあつ]い支援[しえん]を届[とど]ける仕組[しく]みを整備[せいび]し直[なお]します。\nA: 加[くわ]えて、認定[にんてい]基準[きじゅん]の透明性[とうめいせい]を高[たか]め、申請[しんせい]者[しゃ]側[がわ]にも納得[なっとく]のいく説明[せつめい]を義務付[ぎむづ]けるべきです。\nB: 賛同[さんどう]いたします。手続[てつづ]きの在[あ]り方[かた]を見直[みなお]し、運用[うんよう]面[めん]での改善[かいぜん]を急[いそ]ぎましょう。\nA: なにより、迫害[はくがい]から逃[のが]れる人々[ひとびと]の人権[じんけん]を最優先[さいゆうせん]に置[お]く姿勢[しせい]を示[しめ]さねば、国際社会[こくさいしゃかい]からの信用[しんよう]を損[そこ]ないかねない。\nB: 肝[きも]に銘[めい]じ、誠実[せいじつ]に対応[たいおう]してまいります。",
    translation: "A: There are voices pointing out that the tightening of refugee recognition has, as a result, led to abandoning people facing persecution. B: That is a grave point. However, the tightening of screening is intended to eliminate fraudulent applications, and is by no means aimed at turning people away. A: That said, if humanitarian consideration is neglected during screening, it is not a problem we can overlook. B: Absolutely. We will collaborate with relevant agencies and rebuild a mechanism to deliver generous support to vulnerable applicants. A: In addition, we should raise the transparency of recognition criteria and mandate explanations that applicants can accept. B: I concur. Let us review how procedures should be and hasten operational improvements. A: Above all, unless we demonstrate a stance of prioritizing the human rights of those fleeing persecution, we risk losing the trust of the international community. B: I will bear that in mind and respond in good faith.",
    questions: [
      {
        q: "What does A say the tightening of recognition has led to?",
        choices: ["Faster processing", "Abandoning people facing persecution", "More approvals", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 迫害[はくがい]を受[う]ける人々[ひとびと]を見捨[みす]てる結果[けっか]を招[まね]いている — abandoning people facing persecution."
      },
      {
        q: "According to B, what is the purpose of tightening screening?",
        choices: ["Turning people away", "Eliminating fraudulent applications", "Reducing staff", "Cutting budgets"],
        answerIndex: 1,
        explanation: "B says 不正[ふせい]申請[しんせい]を排除[はいじょ]する趣旨[しゅし] — to eliminate fraudulent applications."
      },
      {
        q: "What does A say cannot be overlooked if neglected during screening?",
        choices: ["Cost efficiency", "Humanitarian consideration", "Processing speed", "Staff numbers"],
        answerIndex: 1,
        explanation: "A says 人道[じんどう]的[てき]配慮[はいりょ]が疎[おろそ]かになっているとすれば、看過[かんか]できる問題[もんだい]ではありません — humanitarian consideration."
      },
      {
        q: "What does B promise to rebuild a mechanism for?",
        choices: ["Faster rejection", "Delivering generous support to vulnerable applicants", "Higher fees", "Fewer reviews"],
        answerIndex: 1,
        explanation: "B says 脆弱[ぜいじゃく]な立場[たちば]にある申請[しんせい]者[しゃ]に手厚[てあつ]い支援[しえん]を届[とど]ける — delivering support to vulnerable applicants."
      },
      {
        q: "What does A say we risk losing unless we prioritize human rights?",
        choices: ["Domestic votes", "The trust of the international community", "Funding", "Staff"],
        answerIndex: 1,
        explanation: "A says 国際社会[こくさいしゃかい]からの信用[しんよう]を損[そこ]ないかねない — risk losing international trust."
      }
    ],
    estMinutes: 7,
    tags: ["refugees", "human-rights"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-29 — A post-war reconciliation dialogue
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-29",
    title: "Post-war Reconciliation",
    level: "N1",
    context: "A historian and a former diplomat discuss historical reconciliation",
    text: "A: 戦争[せんそう]の記憶[きおく]が風化[ふうか]するにつれ、過去[かこ]の教訓[きょうくん]を見失[みうしな]う危惧[きぐ]が募[つの]る。\nB: 全[まった]く同感[どうかん]です。加害[かがい]の事実[じじつ]に向[む]き合[あ]うことなしに、真[しん]の和解[わかい]は成立[せいりつ]し得[え]ない。\nA: そのとおり。もっとも、一[いっ]方[ぽう]的[てき]な謝罪[しゃざい]の要求[ようきゅう]が永続[えいぞく]すれば、かえって反感[はんかん]を醸成[ようせい]しかねない。\nB: ええ。過去[かこ]を直視[ちょくし]しつつ、未来[みらい]志向[しこう]の対話[たいわ]を重[かさ]ねるのが筋[すじ]というものです。\nA: 誠[まこと]に。歴史[れきし]教育[きょういく]の在[あ]り方[かた]を再考[さいこう]し、偏[かたよ]りない視点[してん]を養[やしな]う必要[ひつよう]があろうかと。\nB: その際[さい]、複数[ふくすう]の史観[しかん]を並列[へいれつ]して提示[ていじ]するのが、成熟[せいじゅく]した市民[しみん]を育[はぐく]む近道[ちかみち]です。\nA: 双方[そうほう]が痛[いた]みを分[わ]かち合[あ]う努力[どりょく]を怠[おこた]ったが最後[さいご]、和解[わかい]の道[みち]は閉[とざ]されよう。\nB: それを忘[わす]れず、着実[ちゃくじつ]に対話[たいわ]の輪[わ]を広[ひろ]げてまいります。",
    translation: "A: As memories of war fade, the fear of losing sight of past lessons grows. B: I completely agree. Without facing the facts of perpetration, true reconciliation cannot be established. A: True. However, if demands for one-sided apology persist, they could conversely breed resentment. B: Yes. It is the right course to face the past squarely while accumulating future-oriented dialogue. A: Indeed. I believe we need to reconsider how history education should be and foster unbiased perspectives. B: On that occasion, presenting multiple historical views side by side is the shortcut to cultivating mature citizens. A: Once both sides neglect the effort to share each other's pain, the path to reconciliation will be closed. B: Without forgetting that, we will steadily widen the circle of dialogue.",
    questions: [
      {
        q: "What does A fear as memories of war fade?",
        choices: ["More tourism", "Losing sight of past lessons", "Higher spending", "Faster growth"],
        answerIndex: 1,
        explanation: "A says 過去[かこ]の教訓[きょうくん]を見失[みうしな]う危惧[きぐ]が募[つの]る — fear of losing sight of past lessons."
      },
      {
        q: "According to B, what is necessary for true reconciliation?",
        choices: ["Economic aid", "Facing the facts of perpetration", "Military alliances", "Cultural exports"],
        answerIndex: 1,
        explanation: "B says 加害[かがい]の事実[じじつ]に向[む]き合[あ]うことなしに、真[しん]の和解[わかい]は成立[せいりつ]し得[え]ない — facing perpetration facts."
      },
      {
        q: "What does A warn could happen if one-sided apology demands persist?",
        choices: ["Faster reconciliation", "Breeding resentment", "Lower costs", "More trade"],
        answerIndex: 1,
        explanation: "A says 反感[はんかん]を醸成[ようせい]しかねない — could breed resentment."
      },
      {
        q: "What does B call the shortcut to cultivating mature citizens?",
        choices: ["Larger budgets", "Presenting multiple historical views side by side", "Fewer classes", "Standardized tests"],
        answerIndex: 1,
        explanation: "B says 複数[ふくすう]の史観[しかん]を並列[へいれつ]して提示[ていじ]するのが...近道[ちかみち] — presenting multiple views side by side."
      },
      {
        q: "What does A say will close the path to reconciliation?",
        choices: ["More dialogue", "Neglecting the effort to share each other's pain", "Economic growth", "Cultural exchange"],
        answerIndex: 1,
        explanation: "A says 痛[いた]みを分[わ]かち合[あ]う努力[どりょく]を怠[おこた]ったが最後[さいご]、和解[わかい]の道[みち]は閉[とざ]されよう — neglecting shared-pain effort closes the path."
      }
    ],
    estMinutes: 7,
    tags: ["history", "reconciliation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-30 — An educational philosophy seminar
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-30",
    title: "Educational Philosophy Seminar",
    level: "N1",
    context: "A professor and a curriculum designer debate rote versus inquiry learning",
    text: "A: 詰[つ]め込[こ]み教育[きょういく]の弊害[へいがい]は、創造[そうぞう]力[りょく]の枯渇[こかつ]という形[かたち]で現[あらわ]れていると言[い]えよう。\nB: ええ。知識[ちしき]の暗記[あんき]に終始[しゅうし]したところで、応用[おうよう]力[りょく]は育[はぐく]ちません。\nA: その点[てん]、探究[たんきゅう]型[がた]学習[がくしゅう]を導入[どうにゅう]するのは妥当[だとう]と言[い]わざるを得[え]ない。\nB: もっとも、教員[きょういん]の指導[しどう]力[りょく]が追[お]いつかないが現場[げんば]の最大[さいだい]の障壁[しょうへき]です。\nA: であれば、教員[きょういん]研修[けんしゅう]の抜本[ばっぽん]的[てき]な改革[かいかく]が先決[せんけつ]だろう。\nB: 全[まった]く。加[くわ]えて、評価[ひょうか]の尺度[しゃくど]を見直[みなお]さない限[かぎ]り、画一[かくいつ]化[か]した教育[きょういく]からの脱却[だっきゃく]は叶[かな]わない。\nA: 誠[まこと]に。多様[たよう]な才能[さいのう]を伸[の]ばす仕組[しく]みを欠[か]く教育[きょういく]は、結局[けっきょく]のところ社会[しゃかい]全体[ぜんたい]の損失[そんしつ]に他[ほか]ならない。\nB: 次世代[じせだい]を担[にな]う子[こ]どもたちのため、腰[こし]を据[す]えて改革[かいかく]に取[と]り組[く]むしかありません。",
    translation: "A: The harm of cram-style education is manifesting in the form of creative exhaustion. B: Yes. Even if students do nothing but memorize knowledge, applied skills will not develop. A: In that respect, introducing inquiry-based learning is something we must call appropriate. B: However, that teachers' instructional capacity cannot keep up is the biggest barrier on the ground. A: If so, fundamental reform of teacher training would take priority. B: Absolutely. In addition, unless we review the measures of evaluation, escape from uniform education will not be possible. A: Indeed. Education lacking mechanisms to cultivate diverse talents is, in the end, nothing but a loss for society as a whole. B: For the children who will shoulder the next generation, we have no choice but to settle down and tackle reform.",
    questions: [
      {
        q: "In what form does A say the harm of cram education is manifesting?",
        choices: ["Higher test scores", "Creative exhaustion", "Faster learning", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 創造[そうぞう]力[りょく]の枯渇[こかつ]という形[かたち]で現[あらわ]れている — manifesting as creative exhaustion."
      },
      {
        q: "According to B, what won't develop from rote memorization?",
        choices: ["Test scores", "Applied skills", "Discipline", "Memory"],
        answerIndex: 1,
        explanation: "B says 応用[おうよう]力[りょく]は育[はぐく]ちません — applied skills won't develop."
      },
      {
        q: "What does B call the biggest barrier on the ground?",
        choices: ["Lack of funding", "Teachers' instructional capacity not keeping up", "Old buildings", "Too few textbooks"],
        answerIndex: 1,
        explanation: "B says 教員[きょういん]の指導[しどう]力[りょく]が追[お]いつかないが...最大[さいだい]の障壁[しょうへき] — teachers' capacity not keeping up."
      },
      {
        q: "What does A say should take priority?",
        choices: ["Building schools", "Fundamental reform of teacher training", "Buying tablets", "Hiring more staff"],
        answerIndex: 1,
        explanation: "A says 教員[きょういん]研修[けんしゅう]の抜本[ばっぽん]的[てき]な改革[かいかく]が先決[せんけつ] — fundamental reform of teacher training takes priority."
      },
      {
        q: "What does B say is impossible without reviewing evaluation measures?",
        choices: ["Higher scores", "Escape from uniform education", "Lower costs", "Faster learning"],
        answerIndex: 1,
        explanation: "B says 評価[ひょうか]の尺度[しゃくど]を見直[みなお]さない限[かぎ]り、画一[かくいつ]化[か]した教育[きょういく]からの脱却[だっきゃく]は叶[かな]わない — escape from uniform education."
      }
    ],
    estMinutes: 6,
    tags: ["education", "philosophy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-31 — A privacy vs security debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-31",
    title: "Privacy vs Security Debate",
    level: "N1",
    context: "A civil liberties advocate and a security official debate surveillance",
    text: "A: 監視[かんし]カメラの遍在[へんざい]化[か]は、プライバシーの権利[けんり]を著[いちじる]しく侵[おか]すと危惧[きぐ]しております。\nB: もっともな懸念[けねん]です。ただ、公衆[こうしゅう]の安全[あんぜん]を担保[たんぽ]する責務[せきむ]に鑑[かんが]みれば、一定[いってい]の監視[かんし]は不可欠[ふかけつ]と言[い]わざるを得[え]ない。\nA: とはいえ、監視[かんし]の範囲[はんい]や目的[もくてき]が不明確[ふめいかく]なままでは、権力[けんりょく]の乱用[らんよう]を招[まね]く恐[おそ]れがある。\nB: 賛成[さんせい]します。そのため、監視[かんし]の対象[たいしょう]と期間[きかん]を厳格[げんかく]に規定[きてい]し、第三者[だいさんしゃ]の監査[かんさ]を義務付[ぎむづ]けるべきでしょう。\nA: その上[うえ]で、データの取[と]り扱[あつか]いに関[かん]する透明性[とうめいせい]を確保[かくほ]しない限[かぎ]り、市民[しみん]の合意[ごうい]は得[え]られまい。\nB: ええ。監視[かんし]社会[しゃかい]に抗[あらが]うこと自体[じたい]が目的[もくてき]化[か]されては本末[ほんまつ]転倒[てんとう]です。\nA: 全[まった]く。安全[あんぜん]と自由[じゆう]の均衡[きんこう]を図[はか]る仕組[しく]みこそ、成熟[せいじゅく]した民主[みんしゅ]主義[しゅぎ]の試練[しれん]と言[い]えよう。\nB: その試練[しれん]に耐[た]えうる制度[せいど]設計[せっけい]を、共[とも]に模索[もさく]してまいりましょう。",
    translation: "A: I fear that the ubiquity of surveillance cameras significantly infringes the right to privacy. B: That is a fair concern. However, considering the duty to guarantee public safety, we must say that some surveillance is indispensable. A: That said, if the scope and purpose of surveillance remain unclear, there is a risk of inviting abuse of power. B: I agree. For that reason, we should strictly define the targets and duration of surveillance and mandate third-party audits. A: On top of that, unless transparency in data handling is secured, citizens' consent will not be obtained. B: Yes. Making opposition to a surveillance society an end in itself would put the cart before the horse. A: Exactly. Mechanisms to balance security and liberty can be called the test of mature democracy. B: Let us together explore an institutional design that can withstand that test.",
    questions: [
      {
        q: "What does A fear surveillance camera ubiquity does?",
        choices: ["Improves safety", "Significantly infringes the right to privacy", "Lowers costs", "Boosts tourism"],
        answerIndex: 1,
        explanation: "A says プライバシーの権利[けんり]を著[いちじる]しく侵[おか]す — significantly infringes privacy."
      },
      {
        q: "According to B, what makes some surveillance indispensable?",
        choices: ["Cost savings", "The duty to guarantee public safety", "Tourism needs", "Economic growth"],
        answerIndex: 1,
        explanation: "B says 公衆[こうしゅう]の安全[あんぜん]を担保[たんぽ]する責務[せきむ]に鑑[かんが]みれば — considering the duty to guarantee public safety."
      },
      {
        q: "What does A warn could happen if surveillance scope and purpose are unclear?",
        choices: ["Better safety", "Abuse of power", "Lower costs", "Faster response"],
        answerIndex: 1,
        explanation: "A says 権力[けんりょく]の乱用[らんよう]を招[まね]く恐[おそ]れ — risk of abuse of power."
      },
      {
        q: "What does B propose to mandate for surveillance?",
        choices: ["Lower costs", "Third-party audits", "More cameras", "Faster review"],
        answerIndex: 1,
        explanation: "B says 第三者[だいさんしゃ]の監査[かんさ]を義務付[ぎむづ]けるべき — mandate third-party audits."
      },
      {
        q: "What does B warn would be putting the cart before the horse?",
        choices: ["More surveillance", "Making opposition to surveillance society an end in itself", "Less funding", "Slower review"],
        answerIndex: 1,
        explanation: "B says 監視[かんし]社会[しゃかい]に抗[あらが]うこと自体[じたい]が目的[もくてき]化[か]されては本末[ほんまつ]転倒[てんとう] — making opposition an end in itself."
      }
    ],
    estMinutes: 6,
    tags: ["privacy", "security"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-32 — A space exploration ethics discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-32",
    title: "Space Exploration Ethics",
    level: "N1",
    context: "An astrophysicist and a policy ethicist debate space colonization",
    text: "A: 宇宙[うちゅう]開拓[かいたく]は、人類[じんるい]の生存[せいぞん]を保障[ほしょう]する最終[さいしゅう]手段[しゅだん]たり得[え]る。\nB: ええ。もっとも、他[た]天体[てんたい]の資源[しげん]を搾取[さくしゅう]することが、新[あたら]たな帝国主義[ていこくしゅぎ]を生[しょう]じさせないとは限[かぎ]らない。\nA: その懸念[けねん]は尤[もっと]もです。それ故[ゆえ]に、宇宙[うちゅう]法[ほう]の整備[せいび]が急務[きゅうむ]と言[い]えよう。\nB: 全[まった]く。現行[げんこう]の条約[じょうやく]では、民間[みんかん]企業[きぎょう]の権利[けんり]義務[ぎむ]が曖昧[あいまい]なままであり、看過[かんか]できない。\nA: 加[くわ]えて、地球[ちきゅう]の環境[かんきょう]問題[もんだい]を逃避[とうひ]の材料[ざいりょう]にしてはならない。本末[ほんまつ]転倒[てんとう]というものです。\nB: 同感[どうかん]です。宇宙[うちゅう]は地球[ちきゅう]を補完[ほかん]するものであって、代替[だいたい]するものではありません。\nA: まさに。倫理[りんり]的[てき]な枠組[わくぐ]みを欠[か]いたまま開拓[かいたく]を進[すす]めれば、人類[じんるい]の尊厳[そんげん]を損[そこ]ないかねない。\nB: 多国間[たこくかん]の協議[きょうぎ]を通[つう]じて、持続[じぞく]可能[かのう]な宇宙[うちゅう]利用[りよう]の原則[げんそく]を確立[かくりつ]しましょう。",
    translation: "A: Space development can be the ultimate means to secure humanity's survival. B: Yes. However, exploiting the resources of other celestial bodies does not necessarily prevent the emergence of a new imperialism. A: That concern is reasonable. For that reason, the development of space law can be called an urgent task. B: Absolutely. Under current treaties, the rights and obligations of private companies remain ambiguous, which cannot be overlooked. A: In addition, environmental problems on Earth must not be used as material for escapism. That would put the cart before the horse. B: I agree. Space complements Earth; it does not replace it. A: Exactly. Proceeding with development without an ethical framework could undermine human dignity. B: Let us, through multilateral consultation, establish principles for sustainable use of space.",
    questions: [
      {
        q: "What does A call space development capable of being?",
        choices: ["A costly hobby", "The ultimate means to secure humanity's survival", "A tourist industry", "A short-term project"],
        answerIndex: 1,
        explanation: "A says 人類[じんるい]の生存[せいぞん]を保障[ほしょう]する最終[さいしゅう]手段[しゅだん]たり得[え]る — the ultimate means to secure survival."
      },
      {
        q: "According to B, what might exploiting other celestial bodies cause?",
        choices: ["Lower costs", "A new imperialism", "Faster growth", "More tourism"],
        answerIndex: 1,
        explanation: "B says 新[あたら]たな帝国主義[ていこくしゅぎ]を生[しょう]じさせないとは限[かぎ]らない — a new imperialism."
      },
      {
        q: "What does A call an urgent task?",
        choices: ["Building rockets", "The development of space law", "Lowering costs", "Training astronauts"],
        answerIndex: 1,
        explanation: "A says 宇宙[うちゅう]法[ほう]の整備[せいび]が急務[きゅうむ] — development of space law is urgent."
      },
      {
        q: "What does A warn must not be used as escapism material?",
        choices: ["Space funding", "Earth's environmental problems", "Rocket launches", "Tourist trips"],
        answerIndex: 1,
        explanation: "A says 地球[ちきゅう]の環境[かんきょう]問題[もんだい]を逃避[とうひ]の材料[ざいりょう]にしてはならない — Earth's environmental problems."
      },
      {
        q: "What does B say space does to Earth?",
        choices: ["Replaces it", "Complements it", "Destroys it", "Ignores it"],
        answerIndex: 1,
        explanation: "B says 宇宙[うちゅう]は地球[ちきゅう]を補完[ほかん]するものであって、代替[だいたい]するものではありません — space complements Earth, doesn't replace it."
      }
    ],
    estMinutes: 6,
    tags: ["space", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-33 — A demographic transition analysis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-33",
    title: "Demographic Transition Analysis",
    level: "N1",
    context: "A demographer and a labor economist analyze population aging",
    text: "A: 少子[しょうし]高齢化[こうれいか]の進行[しんこう]は、もはや待[ま]ってはくれない。抜本[ばっぽん]的[てき]な対策[たいさく]が要[よう]される。\nB: その通[とお]り。もっとも、移民[いみん]受[う]け入[い]れの拡大[かくだい]は、社会[しゃかい]の合意[ごうい]形成[けいせい]を要[よう]する難題[なんだい]だ。\nA: とはいえ、労働[ろうどう]力[りょく]不足[ぶそく]を放置[ほうち]したところで、経済[けいざい]の縮小[しゅくしょう]は避[さ]け得[え]ない。\nB: ええ。我々[われわれ]は、生産年齢[せいさんねんれい]人口[じんこう]の減少[げんしょう]を補填[ほてん]する複合[ふくごう]的[てき]な策[さく]を講[こう]じねばなりません。\nA: それには、女性[じょせい]と高齢者[こうれいしゃ]の参画[さんかく]を促[うなが]す労働[ろうどう]環境[かんきょう]の整備[せいび]が欠[か]かせない。\nB: 全[まった]く。労働[ろうどう]方式[ほうしき]の柔軟[じゅうなん]化[か]を図[はか]り、多様[たよう]な人材[じんざい]を活用[かつよう]する仕組[しく]みを構築[こうちく]しましょう。\nA: その上[うえ]で、社会保障[しゃかいほしょう]の持続性[じぞくせい]を担保[たんぽ]する改革[かいかく]が並行[へいこう]して進[すす]められねばならない。\nB: 次世代[じせだい]に負債[ふさい]を押[お]し付[つ]けるがごときは、断固[だんこ]として避[さ]けねばなりません。",
    translation: "A: The progression of declining birthrates and aging population will no longer wait for us. Fundamental countermeasures are required. B: True. However, expanding immigration acceptance is a difficult task requiring the formation of social consensus. A: That said, even if we leave labor shortages unaddressed, economic contraction is unavoidable. B: Yes. We must devise composite measures to compensate for the decline in the working-age population. A: For that, building work environments that promote the participation of women and the elderly is indispensable. B: Absolutely. Let us build mechanisms that flexibilize work arrangements and utilize diverse talent. A: On top of that, reforms to guarantee the sustainability of social security must proceed in parallel. B: Anything like pushing debt onto the next generation must be firmly avoided.",
    questions: [
      {
        q: "What does A say will no longer wait?",
        choices: ["Economic growth", "The progression of declining birthrates and aging", "Immigration reform", "Tax cuts"],
        answerIndex: 1,
        explanation: "A says 少子[しょうし]高齢化[こうれいか]の進行[しんこう]は、もはや待[ま]ってはくれない — demographic aging won't wait."
      },
      {
        q: "According to B, what does expanding immigration require?",
        choices: ["Lower costs", "Formation of social consensus", "More funding", "Faster processing"],
        answerIndex: 1,
        explanation: "B says 社会[しゃかい]の合意[ごうい]形成[けいせい]を要[よう]する難題[なんだい] — requires social consensus formation."
      },
      {
        q: "What does A say is unavoidable even if labor shortages are left unaddressed?",
        choices: ["Higher wages", "Economic contraction", "Lower prices", "More jobs"],
        answerIndex: 1,
        explanation: "A says 経済[けいざい]の縮小[しゅくしょう]は避[さ]け得[え]ない — economic contraction is unavoidable."
      },
      {
        q: "What does A call indispensable for compensating population decline?",
        choices: ["Higher taxes", "Work environments promoting women and elderly participation", "Fewer workers", "Lower wages"],
        answerIndex: 1,
        explanation: "A says 女性[じょせい]と高齢者[こうれいしゃ]の参画[さんかく]を促[うなが]す労働[ろうどう]環境[かんきょう]の整備[せいび]が欠[か]かせない — work environments for women and elderly."
      },
      {
        q: "What does B say must be firmly avoided?",
        choices: ["Higher wages", "Pushing debt onto the next generation", "More immigration", "Faster reform"],
        answerIndex: 1,
        explanation: "B says 次世代[じせだい]に負債[ふさい]を押[お]し付[つ]けるがごときは、断固[だんこ]として避[さ]けねば — pushing debt onto the next generation."
      }
    ],
    estMinutes: 7,
    tags: ["demographics", "economy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-34 — A media manipulation inquiry
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-34",
    title: "Media Manipulation Inquiry",
    level: "N1",
    context: "A media literacy advocate and a platform executive discuss disinformation",
    text: "A: 偽情報[ぎじょうほう]の拡散[かくさん]は、民主[みんしゅ]主義[しゅぎ]の基盤[きばん]を揺[ゆる]がす深刻[しんこく]な事態[じたい]だ。\nB: 重[おも]く受[う]け止[と]めております。もっとも、プラットフォーム側[がわ]のみに責任[せきにん]を帰[き]するのは適正[てきせい]とは言[い]えまい。\nA: そのとおり。とはいえ、アルゴリズムが誇張[こちょう]を優遇[ゆうぐう]する構造[こうぞう]にある以上[いじょう]、自[みずか]らも省[かえり]みる必要[ひつよう]がある。\nB: 賛同[さんどう]します。誇張[こちょう]された情報[じょうほう]の拡散[かくさん]を抑制[よくせい]する仕組[しく]みを整備[せいび]し、透明性[とうめいせい]を高[たか]めます。\nA: 加[くわ]えて、ユーザーの情報[じょうほう]リテラシー向上[こうじょう]に資[し]する取[と]り組[く]みが、根本[こんぽん]的[てき]な解決[かいけつ]に資[し]しよう。\nB: 全[まった]く。私[わたし]どもも、教育[きょういく]機関[きかん]やNPO[エヌピーオー]と連携[れんけい]し、啓発[けいはつ]活動[かつどう]を強化[きょうか]してまいります。\nA: 期待[きたい]しております。情報[じょうほう]の真偽[しんぎ]を峻別[しゅんべつ]する能力[のうりょく]こそ、これからの市民[しみん]に要[よう]される素養[そよう]です。\nB: 誠実[せいじつ]に取[と]り組[く]む所存[しょぞん]です。どうかご監視[かんし]とご指導[しどう]を賜[たまわ]りたく。",
    translation: "A: The spread of disinformation is a serious situation that shakes the foundations of democracy. B: We take it seriously. However, attributing responsibility solely to the platform side cannot be called fair. A: True. Still, as long as algorithms structurally favor exaggeration, you yourselves need to reflect. B: I concur. We will build mechanisms to curb the spread of exaggerated information and raise transparency. A: In addition, initiatives that contribute to improving users' information literacy will contribute to a fundamental solution. B: Absolutely. We too will collaborate with educational institutions and NPOs and strengthen awareness activities. A: I look forward to it. The ability to rigorously distinguish the truth of information is precisely the literacy required of citizens going forward. B: We intend to engage sincerely. We kindly ask for your continued monitoring and guidance.",
    questions: [
      {
        q: "What does A say the spread of disinformation does?",
        choices: ["Boosts engagement", "Shakes the foundations of democracy", "Lowers costs", "Increases revenue"],
        answerIndex: 1,
        explanation: "A says 民主[みんしゅ]主義[しゅぎ]の基盤[きばん]を揺[ゆる]がす — shakes democracy's foundations."
      },
      {
        q: "According to B, what can't be called fair?",
        choices: ["More regulation", "Attributing responsibility solely to the platform", "Higher fines", "Faster review"],
        answerIndex: 1,
        explanation: "B says プラットフォーム側[がわ]のみに責任[せきにん]を帰[き]するのは適正[てきせい]とは言[い]えまい — attributing responsibility solely to platforms."
      },
      {
        q: "What does A say algorithms structurally favor?",
        choices: ["Truth", "Exaggeration", "Lower costs", "Diverse views"],
        answerIndex: 1,
        explanation: "A says アルゴリズムが誇張[こちょう]を優遇[ゆうぐう]する構造[こうぞう]にある — algorithms favor exaggeration."
      },
      {
        q: "What does B promise to build to curb exaggerated information?",
        choices: ["Lower fees", "Mechanisms to curb the spread of exaggerated information", "More ads", "Faster posts"],
        answerIndex: 1,
        explanation: "B says 誇張[こちょう]された情報[じょうほう]の拡散[かくさん]を抑制[よくせい]する仕組[しく]みを整備[せいび]し — mechanisms to curb exaggerated information."
      },
      {
        q: "What does A call the literacy required of future citizens?",
        choices: ["Faster typing", "The ability to rigorously distinguish information truth", "More followers", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 情報[じょうほう]の真偽[しんぎ]を峻別[しゅんべつ]する能力[のうりょく] — the ability to distinguish truth."
      }
    ],
    estMinutes: 6,
    tags: ["media", "disinformation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-35 — An indigenous rights forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-35",
    title: "Indigenous Rights Forum",
    level: "N1",
    context: "An indigenous representative and a government liaison discuss land rights",
    text: "A: 先住民[せんじゅうみん]の土地[とち]に対[たい]する権利[けんり]は、条約[じょうやく]に明記[めいき]された義務[ぎむ]に基[もと]づくものだ。\nB: 重[おも]く受[う]け止[と]めております。歴史[れきし]的[てき]な経緯[けいい]を踏[ふ]まえ、誠実[せいじつ]に協議[きょうぎ]を進[すす]める所存[しょぞん]です。\nA: もっとも、協議[きょうぎ]が形骸化[けいがいか]しては、信頼[しんらい]の回復[かいふく]は覚束[おぼつか]ない。\nB: 全[まった]く。具体[ぐたい]的[てき]な権利[けんり]の内容[ないよう]を文書[ぶんしょ]化[か]し、実効性[じっこうせい]を担保[たんぽ]する仕組[しく]みを整備[せいび]します。\nA: それにしても、開発[かいはつ]事業[じぎょう]が権利[けんり]行使[こうし]を妨[さまた]げている現状[げんじょう]は、看過[かんか]できない。\nB: 申[もう]し訳[わけ]ありません。当該[とうがい]事業[じぎょう]の見直[みなお]しを含[ふく]め、抜本[ばっぽん]的[てき]な検討[けんとう]を行[おこな]います。\nA: 期待[きたい]しております。我々[われわれ]の文化[ぶんか]的[てき]な存続[そんぞく]は、土地[とち]と不可分[ふかぶん]であることをご理解[りかい]いただきたい。\nB: 肝[きも]に銘[めい]じます。共生[きょうせい]の理念[りねん]に則[のっと]り、関係[かんけい]構築[こうちく]に努[つと]めてまいります。\nA: 双方[そうほう]が歩[あゆ]み寄[よ]る努力[どりょく]を怠[おこた]らなければ、未来[みらい]は開[ひら]かれよう。",
    translation: "A: Indigenous rights to land are based on obligations spelled out in treaties. B: We take this seriously. Mindful of the historical circumstances, we intend to proceed with consultations in good faith. A: However, if consultations become a mere formality, restoring trust will be uncertain. B: Absolutely. We will document the specific content of rights and build mechanisms to guarantee effectiveness. A: Even so, the current situation where development projects hinder the exercise of rights cannot be overlooked. B: We apologize. We will conduct a fundamental review, including reconsidering the projects in question. A: I look forward to it. Please understand that our cultural survival is inseparable from the land. B: I will bear it in mind. In accordance with the principle of coexistence, we will strive to build relations. A: As long as both sides do not neglect the effort to compromise, the future will open up.",
    questions: [
      {
        q: "What does A say indigenous land rights are based on?",
        choices: ["Custom alone", "Obligations spelled out in treaties", "Recent laws", "Economic value"],
        answerIndex: 1,
        explanation: "A says 条約[じょうやく]に明記[めいき]された義務[ぎむ]に基[もと]づく — based on treaty obligations."
      },
      {
        q: "According to A, what happens if consultations become a mere formality?",
        choices: ["Trust returns quickly", "Restoring trust becomes uncertain", "Costs drop", "Rights expand"],
        answerIndex: 1,
        explanation: "A says 協議[きょうぎ]が形骸化[けいがいか]しては、信頼[しんらい]の回復[かいふく]は覚束[おぼつか]ない — restoring trust becomes uncertain."
      },
      {
        q: "What does B promise to document and guarantee?",
        choices: ["Lower fees", "The specific content of rights and mechanisms guaranteeing effectiveness", "Faster processing", "More funding"],
        answerIndex: 1,
        explanation: "B says 具体[ぐたい]的[てき]な権利[けんり]の内容[ないよう]を文書[ぶんしょ]化[か]し、実効性[じっこうせい]を担保[たんぽ]する — document rights and guarantee effectiveness."
      },
      {
        q: "What does A say cannot be overlooked about development projects?",
        choices: ["They create jobs", "They hinder the exercise of rights", "They lower costs", "They boost tourism"],
        answerIndex: 1,
        explanation: "A says 開発[かいはつ]事業[じぎょう]が権利[けんり]行使[こうし]を妨[さまた]げている — they hinder the exercise of rights."
      },
      {
        q: "What does A ask B to understand?",
        choices: ["Land has high value", "Cultural survival is inseparable from the land", "Tourism brings revenue", "Development is needed"],
        answerIndex: 1,
        explanation: "A says 文化[ぶんか]的[てき]な存続[そんぞく]は、土地[とち]と不可分[ふかぶん] — cultural survival is inseparable from land."
      }
    ],
    estMinutes: 7,
    tags: ["indigenous", "rights"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-36 — A mental health policy review
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-36",
    title: "Mental Health Policy Review",
    level: "N1",
    context: "A psychiatrist and a health ministry official review mental health support",
    text: "A: 精神[せいしん]保健[ほけん]施策[しさく]は、依然[いぜん]として消費[しょうひ]的[てき]な扱[あつか]いを受[う]けていると言[い]わざるを得[え]ない。\nB: 反省[はんせい]しております。もっとも、予算[よさん]の制約[せいやく]も相[あい]まって、抜本[ばっぽん]的[てき]な改革[かいかく]が遅[おく]れているのは事実[じじつ]です。\nA: とはいえ、労働[ろうどう]環境[かんきょう]に起因[きいん]する疾患[しっかん]の増加[ぞうか]を放置[ほうち]したところで、社会[しゃかい]的[てき]費用[ひよう]は増大[ぞうだい]するばかりだ。\nB: その通[とお]り。早期[そうき]介入[かいにゅう]の体制[たいせい]を拡充[かじゅう]し、予防[よぼう]的[てき]な取[と]り組[く]みに注力[ちゅうりょく]する必要[ひつよう]があります。\nA: 加[くわ]えて、受診[じゅしん]の障壁[しょうへき]を低[ひく]くする仕組[しく]み、とりわけ職場[しょくば]での相談[そうだん]窓口[まどぐち]が欠[か]かせない。\nB: 全[まった]く。企業[きぎょう]と連携[れんけい]し、メンタルヘルス支援[しえん]を制度化[せいどか]する方針[ほうしん]です。\nA: なにより、患者[かんじゃ]の尊厳[そんげん]を損[そこ]なう斯様[かよう]な偏見[へんけん]の払拭[ふっしょく]が先決[せんけつ]だろう。\nB: 肝[きも]に銘[めい]じ、啓発[けいはつ]活動[かつどう]と制度[せいど]設計[せっけい]を両輪[りょうりん]で進[すす]めてまいります。",
    translation: "A: I must say that mental health policies are still treated in a consumable fashion. B: We are reflecting on this. However, compounded by budget constraints, it is a fact that fundamental reform has been delayed. A: That said, even if we leave the increase in disorders caused by work environments unaddressed, social costs will only grow. B: True. We need to expand the early-intervention system and focus efforts on preventive initiatives. A: In addition, mechanisms to lower barriers to seeking consultation, especially consultation desks in workplaces, are indispensable. B: Absolutely. We plan to institutionalize mental-health support in collaboration with companies. A: Above all, dispelling such prejudice that undermines patients' dignity would take priority. B: I will bear it in mind and proceed with awareness activities and institutional design as twin wheels.",
    questions: [
      {
        q: "What does A say mental health policies are still treated as?",
        choices: ["Top priority", "A consumable fashion", "High funding", "Cutting edge"],
        answerIndex: 1,
        explanation: "A says 消費[しょうひ]的[てき]な扱[あつか]いを受[う]けている — treated in a consumable fashion."
      },
      {
        q: "According to B, what has compounded the delay of fundamental reform?",
        choices: ["More staff", "Budget constraints", "Higher demand", "Faster growth"],
        answerIndex: 1,
        explanation: "B says 予算[よさん]の制約[せいやく]も相[あい]まって — budget constraints compounded it."
      },
      {
        q: "What does A say will only grow if work-related disorders are left unaddressed?",
        choices: ["Productivity", "Social costs", "Wages", "Employment"],
        answerIndex: 1,
        explanation: "A says 社会[しゃかい]的[てき]費用[ひよう]は増大[ぞうだい]するばかり — social costs will only grow."
      },
      {
        q: "What does B say needs to be expanded and focused on?",
        choices: ["Lower fees", "Early-intervention systems and preventive initiatives", "More hospitals", "Higher wages"],
        answerIndex: 1,
        explanation: "B says 早期[そうき]介入[かいにゅう]の体制[たいせい]を拡充[かじゅう]し、予防[よぼう]的[てき]な取[と]り組[く]みに注力[ちゅうりょく] — early intervention and preventive initiatives."
      },
      {
        q: "What does A call the top priority?",
        choices: ["Higher budgets", "Dispelling prejudice that undermines patients' dignity", "More staff", "Faster processing"],
        answerIndex: 1,
        explanation: "A says 患者[かんじゃ]の尊厳[そんげん]を損[そこ]なう...偏見[へんけん]の払拭[ふっしょく]が先決[せんけつ] — dispelling prejudice undermining dignity."
      }
    ],
    estMinutes: 7,
    tags: ["mental-health", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-37 — A labor automation debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-37",
    title: "Labor Automation Debate",
    level: "N1",
    context: "A labor union leader and a robotics executive debate automation",
    text: "A: 自動化[じどうか]の波[なみ]は、労働[ろうどう]者[しゃ]の雇用[こよう]を脅[おびや]かすと同時[どうじ]に、質[しつ]の低下[ていか]を招[まね]いている。\nB: もっともな懸念[けねん]です。ただ、反[はん]自動化[じどうか]に終始[しゅうし]したところで、競争[きょうそう]力[りょく]の喪失[そうしつ]は免[まぬか]れまい。\nA: とはいえ、人[ひと]を機械[きかい]に置[お]き換[か]えるがごときは、人間[にんげん]の尊厳[そんげん]を損[そこ]ないかねない。\nB: 賛同[さんどう]します。我々[われわれ]は、機械[きかい]と人間[にんげん]の協調[きょうちょう]を図[はか]る設計[せっけい]を目指[めざ]しております。\nA: その方針[ほうしん]が徹底[てってい]されない限[かぎ]り、現場[げんば]の不信感[ふしんかん]は解消[かいしょう]されえない。\nB: 全[まった]く。再訓練[さいくんれん]の機会[きかい]を提供[ていきょう]し、雇用[こよう]の安定[あんてい]を担保[たんぽ]する仕組[しく]みを強化[きょうか]します。\nA: なにより、自動化[じどうか]の果実[かじつ]が一部[いちぶ]に集中[しゅうちゅう]するがごときは、断固[だんこ]として拒否[きょひ]せねばならない。\nB: 誠実[せいじつ]に受[う]け止[と]め、利益[りえき]の適正[てきせい]な分配[ぶんぱい]に取[と]り組[く]む所存[しょぞん]です。\nA: その覚悟[かくご]があるか否[いな]かが、企業[きぎょう]の社会[しゃかい]的[てき]責任[せきにん]を量[はか]る尺度[しゃくど]と言[い]えよう。",
    translation: "A: The wave of automation threatens workers' employment while also causing a decline in job quality. B: That is a fair concern. However, if we do nothing but oppose automation, the loss of competitiveness will be unavoidable. A: That said, replacing humans with machines as such could undermine human dignity. B: I concur. We aim for designs that achieve coordination between machines and humans. A: Unless that policy is thoroughly implemented, distrust on the ground cannot be dispelled. B: Absolutely. We will provide retraining opportunities and strengthen mechanisms guaranteeing employment stability. A: Above all, anything like the fruits of automation concentrating in a few hands must be firmly rejected. B: I take this sincerely and intend to work on fair distribution of profits. A: Whether you have that resolve or not can be called the measure of a company's social responsibility.",
    questions: [
      {
        q: "What does A say automation threatens while causing quality decline?",
        choices: ["Wages only", "Workers' employment", "Profits", "Product quality"],
        answerIndex: 1,
        explanation: "A says 労働[ろうどう]者[しゃ]の雇用[こよう]を脅[おびや]かす — threatens workers' employment."
      },
      {
        q: "According to B, what is unavoidable if automation is only opposed?",
        choices: ["Lower costs", "Loss of competitiveness", "More jobs", "Higher wages"],
        answerIndex: 1,
        explanation: "B says 競争[きょうそう]力[りょく]の喪失[そうしつ]は免[まぬか]れまい — loss of competitiveness."
      },
      {
        q: "What does A warn replacing humans with machines could undermine?",
        choices: ["Profits", "Human dignity", "Productivity", "Sales"],
        answerIndex: 1,
        explanation: "A says 人間[にんげん]の尊厳[そんげん]を損[そこ]ないかねない — could undermine human dignity."
      },
      {
        q: "What does B say is necessary to dispel distrust on the ground?",
        choices: ["Higher wages", "Thorough implementation of the human-machine coordination policy", "More machines", "Faster production"],
        answerIndex: 1,
        explanation: "B says その方針[ほうしん]が徹底[てってい]されない限[かぎ]り、現場[げんば]の不信感[ふしんかん]は解消[かいしょう]されえない — the policy must be thoroughly implemented."
      },
      {
        q: "What does A say must be firmly rejected?",
        choices: ["Higher wages", "The fruits of automation concentrating in a few hands", "More training", "Slower automation"],
        answerIndex: 1,
        explanation: "A says 自動化[じどうか]の果実[かじつ]が一部[いちぶ]に集中[しゅうちゅう]するがごときは、断固[だんこ]として拒否[きょひ]せねば — fruits concentrating in few hands."
      }
    ],
    estMinutes: 7,
    tags: ["labor", "automation"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-38 — A food security summit
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-38",
    title: "Food Security Summit",
    level: "N1",
    context: "An agricultural economist and a policy planner discuss food security",
    text: "A: 食糧[しょくりょう]自給[じきゅう]率[りつ]の低迷[ていめい]は、国家[こっか]の安全保障[あんぜんほしょう]に直結[ちょっけつ]する問題[もんだい]だ。\nB: 重[おも]く受[う]け止[と]めております。もっとも、輸入[ゆにゅう]依存[いぞん]からの脱却[だっきゃく]は一朝[いっちょう]一夕[いっせき]では叶[かな]わない。\nA: そのとおり。とはいえ、農業[のうぎょう]の担[にな]い手[て]不足[ぶそく]を放置[ほうち]したところで、自給[じきゅう]力[りょく]の回復[かいふく]は覚束[おぼつか]ない。\nB: 全[まった]く。若者[わかもの]の参入[さんにゅう]を促[うなが]す支援[しえん]制度[せいど]を拡充[かじゅう]し、農業[のうぎょう]の魅力[みりょく]を高[たか]める必要[ひつよう]があります。\nA: 加[くわ]えて、気候[きこう]変動[へんどう]が収穫[しゅうかく]に与[あた]える影響[えいきょう]を踏[ふ]まえ、品種[ひんしゅ]改良[かいりょう]への投資[とうし]が急務[きゅうむ]だ。\nB: 賛同[さんどう]します。持続[じぞく]可能[かのう]な農業[のうぎょう]技術[ぎじゅつ]の確立[かくりつ]に、国[くに]を挙[あ]げて取[と]り組[く]む所存[しょぞん]です。\nA: なにより、農業[のうぎょう]を戦略[せんりゃく]産業[さんぎょう]と位置[いち]づける政治[せいじ]的[てき]意志[いし]が欠[か]かせない。\nB: 肝[きも]に銘[めい]じ、次期[じき]農業[のうぎょう]基本[きほん]計画[けいかく]に反映[はんえい]させてまいります。",
    translation: "A: The stagnation of the food self-sufficiency rate is a problem directly linked to national security. B: We take it seriously. However, escaping import dependence cannot be achieved overnight. A: True. Still, if we leave the shortage of agricultural successors unaddressed, recovery of self-sufficiency capacity will be uncertain. B: Absolutely. We need to expand support systems that encourage young people's entry and raise agriculture's appeal. A: In addition, given the impact of climate change on harvests, investment in variety improvement is an urgent task. B: I concur. We intend to tackle the establishment of sustainable agricultural technology with the whole nation behind it. A: Above all, the political will to position agriculture as a strategic industry is indispensable. B: I will bear it in mind and reflect it in the next Basic Agricultural Plan.",
    questions: [
      {
        q: "What does A say the stagnation of food self-sufficiency is directly linked to?",
        choices: ["Tourism", "National security", "Trade revenue", "Population growth"],
        answerIndex: 1,
        explanation: "A says 国家[こっか]の安全保障[あんぜんほしょう]に直結[ちょっけつ]する — directly linked to national security."
      },
      {
        q: "According to B, what cannot be achieved overnight?",
        choices: ["Higher yields", "Escaping import dependence", "Lower costs", "More exports"],
        answerIndex: 1,
        explanation: "B says 輸入[ゆにゅう]依存[いぞん]からの脱却[だっきゃく]は一朝[いっちょう]一夕[いっせき]では叶[かな]わない — escaping import dependence."
      },
      {
        q: "What does A say makes recovery of self-sufficiency uncertain?",
        choices: ["More funding", "Leaving the shortage of agricultural successors unaddressed", "Higher wages", "More exports"],
        answerIndex: 1,
        explanation: "A says 農業[のうぎょう]の担[にな]い手[て]不足[ぶそく]を放置[ほうち]したところで、自給[じきゅう]力[りょく]の回復[かいふく]は覚束[おぼつか]ない — leaving successor shortage unaddressed."
      },
      {
        q: "What does B say is an urgent task given climate change?",
        choices: ["More exports", "Investment in variety improvement", "Higher tariffs", "Lower wages"],
        answerIndex: 1,
        explanation: "B says 品種[ひんしゅ]改良[かいりょう]への投資[とうし]が急務[きゅうむ] — investment in variety improvement."
      },
      {
        q: "What does A call indispensable above all?",
        choices: ["Higher budgets", "The political will to position agriculture as a strategic industry", "More imports", "Faster processing"],
        answerIndex: 1,
        explanation: "A says 農業[のうぎょう]を戦略[せんりゃく]産業[さんぎょう]と位置[いち]づける政治[せいじ]的[てき]意志[いし]が欠[か]かせない — political will to position agriculture strategically."
      }
    ],
    estMinutes: 7,
    tags: ["agriculture", "food-security"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-39 — An art authentication case
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-39",
    title: "Art Authentication Case",
    level: "N1",
    context: "An art historian and a forensic analyst verify a disputed painting",
    text: "A: この絵画[かいが]の真贋[しんがん]をめぐり、専門[せんもん]家[か]の間[あいだ]でも見解[けんかい]が割[わ]れている。\nB: ええ。筆致[ひっち]の分析[ぶんせき]に基[もと]づけば、作者[さくしゃ]の特長[とくちょう]と符合[ふごう]する点[てん]は少[すく]なくない。\nA: もっとも、絵[え]の具[ぐ]の成分[せいぶん]分析[ぶんせき]によれば、当時[とうじ]存在[そんざい]しなかった顔料[がんりょう]が検出[けんしゅつ]された。\nB: その点[てん]は懸念[けねん]材料[ざいりょう]です。ただ、後世[こうせい]の修復[しゅうふく]による混入[こんにゅう]の可能[かのう]性[せい]も否定[ひてい]できない。\nA: となれば、複数[ふくすう]の鑑定[かんてい]手法[しゅほう]を併用[へいよう]し、総合[そうごう]的[てき]に判断[はんだん]するしかありますまい。\nB: 全[まった]く。放射線[ほうしゃせん]分析[ぶんせき]や年代[ねんだい]測定[そくてい]を加[くわ]え、科学的[かがくてき]な裏付[うらづ]けを強化[きょうか]しましょう。\nA: なにより、偽作[ぎさく]と断定[だんてい]するには、疑[うたが]いを差[さ]し挟[はさ]む余地[よち]を残[のこ]さぬほどの証拠[しょうこ]が要[よう]される。\nB: 誠実[せいじつ]に鑑定[かんてい]を進[すす]め、客観的[きゃっかんてき]な結論[けつろん]を提示[ていじ]する所存[しょぞん]です。\nA: 期待[きたい]しております。真贋[しんがん]如何[いかん]によって、美術[びじゅつ]史[し]の記述[きじゅつ]も書[か]き換[か]わらねばならない。",
    translation: "A: Regarding the authenticity of this painting, opinions are divided even among experts. B: Yes. Based on analysis of brushwork, there are quite a few points matching the artist's characteristics. A: However, according to pigment composition analysis, pigments that did not exist at the time were detected. B: That is a cause for concern. Still, the possibility of contamination from later restoration cannot be ruled out. A: In that case, there is nothing for it but to use multiple authentication methods in combination and judge comprehensively. B: Absolutely. Let us add radiographic analysis and age measurement and strengthen scientific backing. A: Above all, to declare it a forgery requires evidence that leaves no room for doubt. B: We will proceed with authentication in good faith and present an objective conclusion. A: I look forward to it. Depending on the authenticity, the account of art history itself may need to be rewritten.",
    questions: [
      {
        q: "What does A say is divided even among experts?",
        choices: ["The price", "Opinions on the painting's authenticity", "The buyer", "The restoration cost"],
        answerIndex: 1,
        explanation: "A says 真贋[しんがん]をめぐり、専門[せんもん]家[か]の間[あいだ]でも見解[けんかい]が割[わ]れている — opinions on authenticity are divided."
      },
      {
        q: "According to B, what do brushwork analyses match?",
        choices: ["The frame", "The artist's characteristics", "The buyer's taste", "The gallery style"],
        answerIndex: 1,
        explanation: "B says 作者[さくしゃ]の特長[とくちょう]と符合[ふごう]する — match the artist's characteristics."
      },
      {
        q: "What did pigment analysis detect?",
        choices: ["Cheap materials", "Pigments that did not exist at the time", "Gold dust", "Modern glue"],
        answerIndex: 1,
        explanation: "A says 当時[とうじ]存在[そんざい]しなかった顔料[がんりょう]が検出[けんしゅつ]された — pigments not existing at the time."
      },
      {
        q: "What possibility does B say cannot be ruled out?",
        choices: ["Faster sale", "Contamination from later restoration", "Higher price", "More buyers"],
        answerIndex: 1,
        explanation: "B says 後世[こうせい]の修復[しゅうふく]による混入[こんにゅう]の可能[かのう]性[せい]も否定[ひてい]できない — contamination from later restoration."
      },
      {
        q: "What does A say is required to declare it a forgery?",
        choices: ["A guess", "Evidence leaving no room for doubt", "A lower price", "Faster sale"],
        answerIndex: 1,
        explanation: "A says 疑[うたが]いを差[さ]し挟[はさ]む余地[よち]を残[のこ]さぬほどの証拠[しょうこ]が要[よう]される — evidence leaving no room for doubt."
      }
    ],
    estMinutes: 6,
    tags: ["art", "authentication"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-40 — A constitutional amendment discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-40",
    title: "Constitutional Amendment Discussion",
    level: "N1",
    context: "A constitutional scholar and a legislator debate amendment procedures",
    text: "A: 憲法[けんぽう]改正[かいせい]は、国民[こくみん]の熟議[じゅくぎ]を経[へ]てこそ正当性[せいとうせい]を獲得[かくとく]し得[え]る。\nB: 全[まった]く同感[どうかん]です。もっとも、時代[じだい]の要請[ようせい]に即[そく]した改正[かいせい]も、国会[こっかい]の責務[せきむ]と言[い]わざるを得[え]ない。\nA: そのとおり。ただ、手続[てつづ]きの正当性[せいとうせい]を欠[か]いた改正[かいせい]は、法[ほう]的[てき]安定性[あんていせい]を損[そこ]ないかねない。\nB: 賛同[さんどう]します。発議[はつぎ]から国民[こくみん]投票[とうひょう]までの過程[かてい]を、透明性[とうめいせい]を以[もっ]て進[すす]めるべきでしょう。\nA: 加[くわ]えて、争点[そうてん]を過度[かど]に単純[たんじゅん]化[か]する言説[げんせつ]は、熟議[じゅくぎ]を妨[さまた]げるきらいがある。\nB: 重[おも]く受[う]け止[と]めます。多様[たよう]な意見[いけん]を提示[ていじ]する場[ば]を設[もう]け、議論[ぎろん]の質[しつ]を高[たか]めます。\nA: なにより、少数[しょうすう]派[は]の権利[けんり]を保護[ほご]する仕組[しく]みを欠[か]く改正[かいせい]は、民主[みんしゅ]主義[しゅぎ]の理念[りねん]に反[はん]する。\nB: 肝[きも]に銘[めい]じ、慎重[しんちょう]かつ誠実[せいじつ]に審議[しんぎ]を重[かさ]ねる所存[しょぞん]です。",
    translation: "A: Constitutional amendment can gain legitimacy only after going through public deliberation. B: I completely agree. However, amendment in line with the demands of the times is also a duty of the Diet that we must acknowledge. A: True. But an amendment lacking procedural legitimacy could undermine legal stability. B: I concur. The process from initiation to referendum should proceed with transparency. A: In addition, discourse that overly simplifies the issues tends to hinder deliberation. B: I take that seriously. We will set up forums presenting diverse views and raise the quality of debate. A: Above all, an amendment lacking mechanisms to protect minority rights runs counter to the ideals of democracy. B: I will bear it in mind and deliberate carefully and sincerely.",
    questions: [
      {
        q: "What does A say amendment can gain only through public deliberation?",
        choices: ["Speed", "Legitimacy", "Lower cost", "More votes"],
        answerIndex: 1,
        explanation: "A says 国民[こくみん]の熟議[じゅくぎ]を経[へ]てこそ正当性[せいとうせい]を獲得[かくとく]し得[え]る — legitimacy through deliberation."
      },
      {
        q: "According to B, what is also a duty of the Diet?",
        choices: ["Lowering taxes", "Amendment in line with the demands of the times", "Faster elections", "More spending"],
        answerIndex: 1,
        explanation: "B says 時代[じだい]の要請[ようせい]に即[そく]した改正[かいせい]も、国会[こっかい]の責務[せきむ] — amendment per the times' demands is a Diet duty."
      },
      {
        q: "What does A warn an amendment lacking procedural legitimacy could undermine?",
        choices: ["Speed", "Legal stability", "Votes", "Funding"],
        answerIndex: 1,
        explanation: "A says 法[ほう]的[てき]安定性[あんていせい]を損[そこ]ないかねない — could undermine legal stability."
      },
      {
        q: "What does A say tends to hinder deliberation?",
        choices: ["More forums", "Discourse that overly simplifies the issues", "Higher turnout", "More funding"],
        answerIndex: 1,
        explanation: "A says 争点[そうてん]を過度[かど]に単純[たんじゅん]化[か]する言説[げんせつ]は、熟議[じゅくぎ]を妨[さまた]げるきらいがある — overly simplifying discourse."
      },
      {
        q: "What does A say an amendment lacking minority-rights protection runs counter to?",
        choices: ["Economic growth", "The ideals of democracy", "Faster voting", "Lower costs"],
        answerIndex: 1,
        explanation: "A says 民主[みんしゅ]主義[しゅぎ]の理念[りねん]に反[はん]する — runs counter to democracy's ideals."
      }
    ],
    estMinutes: 7,
    tags: ["constitution", "politics"]
  }
];
