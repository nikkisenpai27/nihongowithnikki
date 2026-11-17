import type { ListeningData } from "@/lib/types";

// N1 listening exercises set A.
// Furigana notation: a [reading] immediately following a run of kanji
// attaches to that whole contiguous run. Kana, katakana, digits, punctuation,
// and 々 have no brackets. Every kanji has inline furigana. text is read aloud
// by TTS AND shown as the transcript.
// N1 grammar targets: 〜たるもの, 〜ずにはいられない, 〜を余儀なくされる,
// 〜極まりない, 〜ずにはすまない, 〜に越したことはない, 〜とはいえ,
// 〜次第では, 〜かねない, 〜にしては, etc.

export const listeningN1A: ListeningData[] = [
  // ───────────────────────────────────────────────────────────
  // l-n1-01 — A philosophical debate on consciousness
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-01",
    title: "Debate on Consciousness",
    level: "N1",
    context: "Two philosophers debating whether consciousness is reducible to neural processes",
    text: "A: 意識[いしき]を神経過程[しんけいかてい]に還元[かんげん]できるという主張[しゅちょう]には、賛成[さんせい]しかねる。\nB: しかしながら、物理的[ぶつりてき]な基盤[きばん]を欠[か]いた心[こころ]という概念[がいねん]は、近代科学[きんだいかがく]の枠組[わくぐ]みに適合[てきごう]しない。\nA: それを言[い]ったら、主観的[しゅかんてき]体験[たいけん]、いわゆる「クオリア」を説明[せつめい]する手立[てだ]てが残[のこ]されなくなる。\nB: とはいえ、説明[せつめい]が困難[こんなん]であるという理由[りゆう]だけで、還元主義[かんげんしゅぎ]を葬[ほうむ]るには無理[むり]がある。\nA: 思索[しさく]する主体[しゅたい]たるものが、自[みずか]らの意識[いしき]の起源[きげん]を客観的[きゃっかんてき]に記述[きじゅつ]できるとは、私[わたし]には思[おも]えない。\nB: だが、現象的[げんしょうてき]な記述[きじゅつ]と因果律[いんがりつ]の説明[せつめい]を同一視[どういつし]するのは、議論[ぎろん]の筋[すじ]を違[たが]える。\nA: 確[たし]かに、概念[がいねん]の不整合[ふせいごう]を指摘[してき]するに越[こ]したことはない。\nB: であれば、言語[げんご]の限界[げんかい]を念頭[ねんとう]に置[お]きつつ、慎重[しんちょう]に論[ろん]を進[すす]めよう。",
    translation: "A: I find it hard to agree with the claim that consciousness can be reduced to neural processes. B: However, the concept of a mind lacking any physical foundation does not fit the framework of modern science. A: That said, it would leave us with no means to explain subjective experience, the so-called qualia. B: Nevertheless, the difficulty of explanation alone is not enough to bury reductionism. A: A subject that engages in thought, as such, cannot, I believe, objectively describe the origin of its own consciousness. B: But to equate a phenomenological description with a causal explanation is to misdirect the argument. A: True; it's best to point out conceptual inconsistencies. B: In that case, keeping in mind the limits of language, let us advance the argument carefully.",
    questions: [
      {
        q: "What does A find hard to accept?",
        choices: ["That the mind lacks physical foundation", "That consciousness can be reduced to neural processes", "That language has limits", "That qualia are subjective"],
        answerIndex: 1,
        explanation: "A says 意識[いしき]を神経過程[しんけいかてい]に還元[かんげん]できるという主張[しゅちょう]には賛成[さんせい]しかねる — the reduction of consciousness to neural processes."
      },
      {
        q: "What concern does A raise if reductionism is discarded?",
        choices: ["No means to explain qualia", "Modern science would collapse", "Language would become useless", "Causal explanations would vanish"],
        answerIndex: 0,
        explanation: "A warns that discarding reductionism leaves no 手立[てだ]て to explain クオリア (qualia)."
      },
      {
        q: "What does B say is insufficient reason to abandon reductionism?",
        choices: ["The cost of research", "The difficulty of explanation alone", "The limits of language", "The lack of data"],
        answerIndex: 1,
        explanation: "B says 説明[せつめい]が困難[こんなん]であるという理由[りゆう]だけで...葬[ほうむ]るには無理[むり]がある — difficulty alone is insufficient."
      },
      {
        q: "What does B warn against in the latter part?",
        choices: ["Equating phenomenological description with causal explanation", "Ignoring modern science", "Rejecting all conceptual analysis", "Trusting subjective experience"],
        answerIndex: 0,
        explanation: "B warns that 同一視[どういつし] of phenomenological description and causal explanation misdirects the argument."
      },
      {
        q: "What does B propose at the end?",
        choices: ["To abandon reductionism immediately", "To advance the argument carefully, aware of the limits of language", "To rely solely on modern science", "To redefine the concept of mind"],
        answerIndex: 1,
        explanation: "B says 言語[げんご]の限界[げんかい]を念頭[ねんとう]に置[お]きつつ、慎重[しんちょう]に論[ろん]を進[すす]めよう."
      }
    ],
    estMinutes: 7,
    tags: ["philosophy", "consciousness"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-02 — A legal expert testimony
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-02",
    title: "Expert Witness Testimony",
    level: "N1",
    context: "An expert witness testifying before a court about a corporate liability case",
    text: "A: 証人[しょうにん]、被告企業[ひこくきぎょう]の注意義務違反[ちゅういぎむいはん]について、専門的[せんもんてき]見解[けんかい]を述[の]べてください。\nB: 裁判長[さいばんちょう]、本件[ほんけん]においては、予見可能性[よけんかのうせい]の有無[うむ]が争点[そうてん]となります。\nA: 当時[とうじ]の技術水準[ぎじゅつすいじゅん]をもってしても、事故[じこ]を予測[よそく]できなかったのではないか、という主張[しゅちょう]ですか。\nB: その通[とお]りです。もっとも、業界標準[ぎょうかいひょうじゅん]を満[み]たしていたというだけでは、注意義務[ちゅういぎむ]を尽[つ]くしたとは言[い]えません。\nA: ということは、結果回避義務[けっかかいひぎむ]まで問[と]われる可能性[かのうせい]があるということですか。\nB: ええ。被害[ひがい]の重大性[じゅうだいせい]に照[て]らし合[あわ]わせれば、安全装置[あんぜんそうち]の導入[どうにゅう]を怠[おこた]ったことは、過失[かしつ]と言[い]わずにはすまない。\nA: 被告側[ひこくがわ]は、コストの制約[せいやく]を理由[りゆう]に反論[はんろん]すると思[おも]われますが。\nB: コストを理由[りゆう]に安全[あんぜん]を犠牲[ぎせい]にするとは、企業[きぎょう]たるものの態度[たいど]として不適切極[ふてきせつきわ]まりない。",
    translation: "A: Witness, please give your expert opinion on whether the defendant company breached its duty of care. B: Your Honor, in this case, the point of dispute is whether the harm was foreseeable. A: Is it your claim that, even given the technical standards of the time, the accident could not have been predicted? B: That's correct. However, merely meeting industry standards cannot be said to fulfill the duty of care. A: Does that mean the duty to avoid the outcome may also be called into question? B: Yes. Weighing the gravity of the harm, the failure to introduce safety devices cannot be called anything other than negligence. A: The defense is expected to counter by citing cost constraints. B: To sacrifice safety on grounds of cost is utterly improper for a company.",
    questions: [
      {
        q: "What is the point of dispute in this case?",
        choices: ["The amount of damages", "The foreseeability of the harm", "The identity of the defendant", "The validity of the contract"],
        answerIndex: 1,
        explanation: "B says 予見可能性[よけんかのうせい]の有無[うむ]が争点[そうてん] — foreseeability is the dispute."
      },
      {
        q: "What does B say is insufficient to fulfill the duty of care?",
        choices: ["Hiring experts", "Merely meeting industry standards", "Consulting lawyers", "Documenting procedures"],
        answerIndex: 1,
        explanation: "B says 業界標準[ぎょうかいひょうじゅん]を満[み]たしていたというだけでは注意義務[ちゅういぎむ]を尽[つ]くしたとは言[い]えない."
      },
      {
        q: "What duty may additionally be called into question?",
        choices: ["The duty to disclose", "The duty to avoid the outcome", "The duty to compensate", "The duty to report"],
        answerIndex: 1,
        explanation: "A asks whether 結果回避義務[けっかかいひぎむ] may also be at issue."
      },
      {
        q: "How does B characterize sacrificing safety for cost?",
        choices: ["A necessary tradeoff", "Utterly improper for a company", "A common practice", "Legally permissible"],
        answerIndex: 1,
        explanation: "B calls it 企業[きぎょう]たるものの態度[たいど]として不適切極[ふてきせつきわ]まりない — utterly improper."
      },
      {
        q: "What reason is the defense expected to cite?",
        choices: ["Cost constraints", "Lack of regulations", "Employee error", "Supplier failure"],
        answerIndex: 0,
        explanation: "A says 被告側[ひこくがわ]はコストの制約[せいやく]を理由[りゆう]に反論[はんろん]する."
      }
    ],
    estMinutes: 6,
    tags: ["law", "testimony"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-03 — A diplomatic negotiation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-03",
    title: "Tariff Negotiation",
    level: "N1",
    context: "Two diplomats negotiating a phased tariff-abolition framework",
    text: "A: 関税撤廃[かんぜいてっぱい]の段階的[だんかいてき]実施[じっし]に関[かん]して、貴国[きこく]の立場[たちば]を改[あらた]めて伺[うかが]いたい。\nB: 我[わ]が国[くに]としては、国内産業[こくないさんぎょう]への影響[えいきょう]を最小限[さいしょうげん]に留[とど]めることを前提[ぜんてい]として、協議[きょうぎ]に応[おう]じる用意[ようい]がある。\nA: しかし、保護主義的[ほごしゅぎてき]な措置[そち]を維持[いじ]したままでは、合意[ごうい]には至[いた]らないのは自明[じめい]だ。\nB: もちろんだ。だが、途上国[とじょうこく]の事情[じじょう]を斟酌[しんしゃく]せずにはすまないだろう。\nA: 移行期間[いこうきかん]を設[もう]けることで、柔軟性[じゅうなんせい]を持[も]たせられないか。\nB: 一定[いってい]の条件[じょうけん]の下[もと]であれば、移行期間[いこうきかん]の導入[どうにゅう]もやむを得[え]ない。\nA: 両国[りょうこく]の首脳[しゅのう]が政治的責任[せいじてきせきにん]を負[お]う覚悟[かくご]を示[しめ]してこそ、合意[ごうい]は実[みの]る。\nB: 全[まった]くその通[とお]りだ。相互信頼関係[そうごしんらいかんけい]を損[そこ]なう行為[こうい]は、断固[だんこう]として避[さ]けなければならない。",
    translation: "A: I'd like to hear your country's position again regarding the phased abolition of tariffs. B: My country is prepared to enter talks, on the condition that the impact on domestic industry is kept to a minimum. A: However, it is self-evident that no agreement will be reached while protectionist measures are maintained. B: Of course. But we cannot help but take into account the circumstances of developing countries. A: Couldn't we introduce a transition period to allow some flexibility? B: Under certain conditions, introducing a transition period would be unavoidable. A: Only when the leaders of both countries show readiness to bear political responsibility will an agreement bear fruit. B: Exactly. We must resolutely avoid any act that undermines mutual trust.",
    questions: [
      {
        q: "What is the precondition for B's country to enter talks?",
        choices: ["Immediate tariff abolition", "Minimizing impact on domestic industry", "A longer transition period", "Foreign investment guarantees"],
        answerIndex: 1,
        explanation: "B says 国内産業[こくないさんぎょう]への影響[えいきょう]を最小限[さいしょうげん]に留[とど]めることを前提[ぜんてい]."
      },
      {
        q: "What does A say is self-evident?",
        choices: ["That protectionism helps industry", "That no agreement will be reached while protectionist measures are maintained", "That tariffs must be cut immediately", "That developing countries need help"],
        answerIndex: 1,
        explanation: "A says 保護主義的[ほごしゅぎてき]な措置[そち]を維持[いじ]したままでは合意[ごうい]には至[いた]らないのは自明[じめい]."
      },
      {
        q: "What flexibility mechanism does A propose?",
        choices: ["A transition period", "A quota system", "A subsidies fund", "A dispute panel"],
        answerIndex: 0,
        explanation: "A asks whether 移行期間[いこうきかん]を設[もう]けることで柔軟性[じゅうなんせい]を持[も]たせられる."
      },
      {
        q: "What does A say is necessary for an agreement to materialize?",
        choices: ["Leaders showing readiness to bear political responsibility", "Lower tariffs across the board", "A stronger dispute mechanism", "External mediation"],
        answerIndex: 0,
        explanation: "A says 首脳[しゅのう]が政治的責任[せいじてきせきにん]を負[お]う覚悟[かくご]を示[しめ]してこそ合意[ごうい]は実[みの]る."
      },
      {
        q: "What must be avoided, per B?",
        choices: ["Acts undermining mutual trust", "Long negotiations", "Public statements", "Bilateral meetings"],
        answerIndex: 0,
        explanation: "B says 相互信頼関係[そうごしんらいかんけい]を損[そこ]なう行為[こうい]は断固[だんこう]として避[さ]けなければならない."
      }
    ],
    estMinutes: 7,
    tags: ["diplomacy", "trade"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-04 — An academic peer review
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-04",
    title: "Manuscript Peer Review",
    level: "N1",
    context: "Two reviewers discussing a submitted journal manuscript",
    text: "A: 投稿論文[とうこうろんぶん]の査読結果[さどくけっか]について、意見[いけん]を交換[こうかん]したい。\nB: 結論自体[けつろんじたい]は妥当[だとう]だが、方法論[ほうほうろん]に重大欠陥[じゅうだいけっかん]がある。\nA: 具体的[ぐたいてき]には、標本抽出[ひょうほんちゅうしゅつ]に偏[かたよ]りがあるという指摘[してき]かね。\nB: そうだ。サンプルが都市部[としぶ]に偏[かたよ]っている以上[いじょう]、結果[けっか]の一般化[いっぱんか]には限界[げんかい]がある。\nA: 著者[ちょしゃ]は、限定的[げんていてき]な知見[ちけん]として位置[いち]づけているが、それでは論文[ろんぶん]としての価値[かち]が半減[はんげん]する。\nB: さらに、先行研究[せんこうけんきゅう]の引用[いんよう]が不十分[ふじゅうぶん]で、独善的[どくぜんてき]な論考[ろんこう]になっている。\nA: 改訂[かいてい]の余地[よち]はあるとしても、そのまま掲載[けいさい]するわけにはいかない。\nB: 賛成[さんせい]だ。著者[ちょしゃ]たるもの、自身[じしん]の研究[けんきゅう]の限界[げんかい]を率直[そっちょく]に認[みと]める義務[ぎむ]がある。",
    translation: "A: I'd like to exchange opinions on the peer review results of the submitted paper. B: The conclusion itself is sound, but the methodology has a serious flaw. A: You mean the point that the sampling is biased? B: Yes. As long as the sample is skewed toward urban areas, there are limits to generalizing the results. A: The author positions it as a limited finding, but that halves the paper's value. B: Furthermore, the citations of prior research are insufficient, making the argument self-righteous. A: Even if there's room for revision, we can't publish it as is. B: Agreed. An author, as such, has a duty to candidly acknowledge the limits of their own research.",
    questions: [
      {
        q: "What is the reviewers' verdict on the paper's conclusion?",
        choices: ["It is flawed", "It is sound", "It is unverifiable", "It is revolutionary"],
        answerIndex: 1,
        explanation: "B says 結論自体[けつろんじたい]は妥当[だとう] — the conclusion itself is sound."
      },
      {
        q: "What serious flaw does B identify?",
        choices: ["Insufficient citations", "Biased sampling in the methodology", "A weak conclusion", "Poor writing style"],
        answerIndex: 1,
        explanation: "B says 方法論[ほうほうろん]に重大欠陥[じゅうだいけっかん] — biased 標本抽出[ひょうほんちゅうしゅつ]."
      },
      {
        q: "Why can't the results be generalized?",
        choices: ["The sample is skewed toward urban areas", "The conclusion is weak", "The citations are missing", "The data is fabricated"],
        answerIndex: 0,
        explanation: "B says サンプルが都市部[としぶ]に偏[かたよ]っている以上[いじょう]、結果[けっか]の一般化[いっぱんか]には限界[げんかい]がある."
      },
      {
        q: "What other issue does B raise?",
        choices: ["Insufficient citation of prior research", "Excessive length", "Lack of originality", "Statistical errors"],
        answerIndex: 0,
        explanation: "B says 先行研究[せんこうけんきゅう]の引用[いんよう]が不十分[ふじゅうぶん]."
      },
      {
        q: "What duty does an author have, per B?",
        choices: ["To defend their conclusion", "To candidly acknowledge the limits of their research", "To cite all prior work", "To shorten the paper"],
        answerIndex: 1,
        explanation: "B says 著者[ちょしゃ]たるもの、自身[じしん]の研究[けんきゅう]の限界[げんかい]を率直[そっちょく]に認[みと]める義務[ぎむ]がある."
      }
    ],
    estMinutes: 6,
    tags: ["academia", "peer-review"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-05 — A corporate ethics hearing
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-05",
    title: "Corporate Ethics Hearing",
    level: "N1",
    context: "An ethics committee hearing about accounting irregularities at a company",
    text: "A: 会計[かいけい]の不適切処理[ふてきせつしょり]が判明[はんめい]した経緯[けいい]について、説明[せつめい]を求[もと]める。\nB: 決算期末[けっさんきまつ]に売上[うりあげ]を計上[けいじょう]することで、目標達成[もくひょうたっせい]を装[よそお]った。\nA: 取締役会[とりしまりやくかい]の承認[しょうにん]を得[え]ずに、そのような処理[しょり]を行[おこな]ったのか。\nB: 業績悪化[ぎょうせきあっか]が発覚[はっかく]するのを恐[おそ]れ、独断[どくだん]で進[すす]めたのは事実[じじつ]だ。\nA: 投資家[とうしか]を欺[あざむ]くような行為[こうい]は、犯罪[はんざい]にも匹敵[ひってき]する重大[じゅうだい]な背信行為[はいしんこうい]だ。\nB: 反省[はんせい]しております。ただ、上層部[じょうそうぶ]の暗黙[あんもく]の了解[りょうかい]があったとの指摘[してき]もなされている。\nA: それは事実[じじつ]であれ推測[すいそく]であれ、経営陣[けいえいじん]たるものが責任[せきにん]を免[まぬが]れることはできない。\nB: 会社[かいしゃ]の存続[そんぞく]が危[あぶ]ぶまれる事態[じたい]に至[いた]ったことは、痛感[つうかん]する次第[しだい]だ。",
    translation: "A: I ask for an explanation of how the improper accounting came to light. B: At the end of the fiscal period, we recorded sales in advance to disguise goal achievement. A: Did you carry out such treatment without board approval? B: It is a fact that I proceeded on my own initiative, fearing the deterioration in performance would be discovered. A: An act that deceives investors is a serious breach of trust comparable to a crime. B: I deeply reflect. However, it has also been pointed out that upper management gave tacit approval. A: Whether that is fact or speculation, the management team, as such, cannot escape responsibility. B: I keenly feel that we've reached a situation where the company's survival is in jeopardy.",
    questions: [
      {
        q: "What did the accused do to disguise goal achievement?",
        choices: ["Falsified expense reports", "Recorded sales at the fiscal period-end", "Hid liabilities off-book", "Inflated inventory values"],
        answerIndex: 1,
        explanation: "B says 決算期末[けっさんきまつ]に売上[うりあげ]を計上[けいじょう]することで目標達成[もくひょうたっせい]を装[よそお]った."
      },
      {
        q: "Why did B proceed alone?",
        choices: ["Fearing performance deterioration would be discovered", "Lacking time for approval", "Disagreeing with the board", "Following industry custom"],
        answerIndex: 0,
        explanation: "B says 業績悪化[ぎょうせきあっか]が発覚[はっかく]するのを恐[おそ]れ、独断[どくだん]で進[すす]めた."
      },
      {
        q: "How does A characterize deceiving investors?",
        choices: ["A minor irregularity", "A serious breach of trust comparable to a crime", "An unavoidable error", "A technical violation"],
        answerIndex: 1,
        explanation: "A says 投資家[とうしか]を欺[あざむ]くような行為[こうい]は犯罪[はんざい]にも匹敵[ひってき]する重大[じゅうだい]な背信行為[はいしんこうい]."
      },
      {
        q: "What does B claim was also present?",
        choices: ["External pressure", "Tacit approval by upper management", "A board resolution", "Auditor negligence"],
        answerIndex: 1,
        explanation: "B mentions 上層部[じょうそうぶ]の暗黙[あんもく]の了解[りょうかい]."
      },
      {
        q: "What does A say about the management team?",
        choices: ["They must resign immediately", "They cannot escape responsibility, whether the claim is fact or speculation", "They were unaware of the issue", "They bear no legal liability"],
        answerIndex: 1,
        explanation: "A says 経営陣[けいえいじん]たるものが責任[せきにん]を免[まぬが]れることはできない."
      }
    ],
    estMinutes: 7,
    tags: ["ethics", "corporate"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-06 — A literary criticism discussion
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-06",
    title: "Literary Criticism",
    level: "N1",
    context: "Two critics discussing the merits of a newly published novel",
    text: "A: 今回[こんかい]の小説[しょうせつ]は、伝統的[でんとうてき]な物語[ものがたり]の枠[わく]を壊[こわ]す野心[やしん]に満[み]ちている。\nB: だが、形式[けいしき]の革新[かくしん]だけでは、読者[どくしゃ]を感動[かんどう]させるには至[いた]らない。\nA: 登場人物[とうじょうじんぶつ]の内面描写[ないめんびょうしゃ]には、息[いき]を呑[の]むほどの深[ふか]みがある。\nB: 認[みと]めよう。しかし、結末[けつまつ]の唐突[とうとつ]さは、作者[さくしゃ]の工夫不足[くふうぶそく]を露呈[ろてい]している。\nA: だとしても、当代[とうだい]の作家[さっか]の中[なか]で、これほど言語[げんご]にこだわる者[もの]は稀[まれ]だ。\nB: 確[たし]かに、言語[げんご]への執着[しゅうちゃく]は際立[きわだ]っているが、それが物語[ものがたり]を支[ささ]えきれているかは疑問[ぎもん]だ。\nA: 文体[ぶんたい]の実験[じっけん]を厭[いと]わない作家[さっか]たるもの、一定[いってい]の犠牲[ぎせい]を払[はら]うのは宿命[しゅくめい]かもしれない。\nB: 評価[ひょうか]は分[わ]かれるだろうが、中傷[ちゅうしょう]に過[す]ぎない批判[ひはん]だけは避[さ]けたいものだ。",
    translation: "A: This novel is full of ambition to break the framework of the traditional narrative. B: But formal innovation alone cannot move readers. A: The inner portrayal of the characters has a depth that takes one's breath away. B: I concede that. However, the abruptness of the ending reveals the author's lack of ingenuity. A: Even so, among contemporary writers, few are so devoted to language. B: Indeed, the obsession with language stands out, but whether it sustains the narrative is in question. A: A writer who does not shy away from stylistic experiment may, as such, be destined to pay a certain price. B: Assessments will differ, but we should at least avoid criticism that is mere slander.",
    questions: [
      {
        q: "What is the novel full of?",
        choices: ["Clichés and conventions", "Ambition to break the traditional narrative framework", "Sentimental language", "Minimalist prose"],
        answerIndex: 1,
        explanation: "A says 伝統的[でんとうてき]な物語[ものがたり]の枠[わく]を壊[こわ]す野心[やしん]に満[み]ちている."
      },
      {
        q: "What does B say is insufficient for moving readers?",
        choices: ["Formal innovation alone", "Strong characters", "Emotional scenes", "Beautiful prose"],
        answerIndex: 0,
        explanation: "B says 形式[けいしき]の革新[かくしん]だけでは読者[どくしゃ]を感動[かんどう]させるには至[いた]らない."
      },
      {
        q: "What does B think reveals the author's lack of ingenuity?",
        choices: ["The weak opening", "The abruptness of the ending", "The flat characters", "The short length"],
        answerIndex: 1,
        explanation: "B says 結末[けつまつ]の唐突[とうとつ]さは作者[さくしゃ]の工夫不足[くふうぶそく]を露呈[ろてい]している."
      },
      {
        q: "What stands out about the author, per B?",
        choices: ["Obsession with language", "Skill at plotting", "Use of dialogue", "Historical accuracy"],
        answerIndex: 0,
        explanation: "B says 言語[げんご]への執着[しゅうちゃく]は際立[きわだ]っている."
      },
      {
        q: "What kind of criticism does B want to avoid?",
        choices: ["Criticism that is mere slander", "Criticism focused on style", "Historical criticism", "Comparative criticism"],
        answerIndex: 0,
        explanation: "B says 中傷[ちゅうしょう]に過[す]ぎない批判[ひはん]だけは避[さ]けたい."
      }
    ],
    estMinutes: 7,
    tags: ["literature", "criticism"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-07 — A medical ethics committee
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-07",
    title: "Medical Ethics Committee",
    level: "N1",
    context: "A hospital ethics committee reviewing the use of an experimental drug",
    text: "A: 末期患者[まっきかんじゃ]に対[たい]する未承認薬[みしょうにんやく]の使用[しよう]について、議論[ぎろん]を始[はじ]める。\nB: 患者本人[かんじゃほんにん]の強[つよ]い希望[きぼう]があるとはいえ、安全性[あんぜんせい]の確認[かくにん]されていない薬剤[やくざい]を投与[とうよ]するのは躊躇[ちゅうちょ]される。\nA: だが、既存[きぞん]の治療[ちりょう]では、延命[えんめい]の見込[みこ]みが立[た]たない状況[じょうきょう]だ。\nB: それでも、未知[みち]の副作用[ふくさよう]が患者[かんじゃ]を苦[くる]しめる結果[けっか]を招[まね]く恐[おそ]れがある。\nA: 仮[かり]に承認[しょうにん]するとしても、厳密[げんみつ]な監視体制[かんしたいせい]が不可欠[ふかけつ]だ。\nB: 当然[とうぜん]だ。患者[かんじゃ]の同意[どうい]を得[え]たからといって、すべてを許容[きょよう]するわけではない。\nA: 医療従事者[いりょうじゅうじしゃ]たるもの、生命[せいめい]の尊厳[そんげん]を損[そこ]なう決定[けってい]をしてはならない。\nB: インフォームド・コンセントの原則[げんそく]を踏[ふ]まえつつ、慎重[しんちょう]に判断[はんだん]したい。",
    translation: "A: Let's begin discussing the use of an unapproved drug for a terminally ill patient. B: Even though the patient strongly wishes it, I hesitate to administer a drug whose safety has not been confirmed. A: However, with existing treatments, we are in a situation where prolongation of life cannot be expected. B: Still, there is a risk that unknown side effects may end up causing the patient suffering. A: Even if we approve it, a rigorous monitoring system is indispensable. B: Naturally. Just because we have the patient's consent does not mean everything is permissible. A: Medical professionals, as such, must not make decisions that undermine the dignity of life. B: While respecting the principle of informed consent, I wish to judge carefully.",
    questions: [
      {
        q: "What are they discussing?",
        choices: ["A new surgical technique", "Use of an unapproved drug for a terminally ill patient", "Hospital staffing levels", "End-of-life counseling"],
        answerIndex: 1,
        explanation: "A opens with 末期患者[まっきかんじゃ]に対[たい]する未承認薬[みしょうにんやく]の使用[しよう]について."
      },
      {
        q: "Why does B hesitate?",
        choices: ["The drug is too expensive", "Safety has not been confirmed", "The patient refused consent", "The hospital lacks facilities"],
        answerIndex: 1,
        explanation: "B says 安全性[あんぜんせい]の確認[かくにん]されていない薬剤[やくざい]を投与[とうよ]するのは躊躇[ちゅうちょ]される."
      },
      {
        q: "What situation exists with current treatments?",
        choices: ["They are too costly", "Prolonging life cannot be expected", "They cause severe side effects", "They require long stays"],
        answerIndex: 1,
        explanation: "A says 既存[きぞん]の治療[ちりょう]では延命[えんめい]の見込[みこ]みが立[た]たない."
      },
      {
        q: "What is indispensable even if approved?",
        choices: ["A second opinion", "A rigorous monitoring system", "Family consent", "A larger dose"],
        answerIndex: 1,
        explanation: "A says 厳密[げんみつ]な監視体制[かんしたいせい]が不可欠[ふかけつ]."
      },
      {
        q: "What principle does B want to uphold?",
        choices: ["Cost-effectiveness", "Informed consent", "Therapeutic privilege", "Clinical priority"],
        answerIndex: 1,
        explanation: "B says インフォームド・コンセントの原則[げんそく]を踏[ふ]まえつつ慎重[しんちょう]に判断[はんだん]したい."
      }
    ],
    estMinutes: 7,
    tags: ["medical", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-08 — A constitutional law seminar
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-08",
    title: "Constitutional Law Seminar",
    level: "N1",
    context: "A professor and a student discussing constitutional interpretation",
    text: "A: 憲法第九条[けんぽうだいきゅうじょう]の解釈[かいしゃく]に関[かん]して、君[きみ]の見解[けんかい]を聞[き]かせてほしい。\nB: 戦力保持[せんりょくほじ]を禁[きん]じた条項[じょうこう]は、時代[じだい]の変化[へんか]とともに見直[みなお]すべきではないかと考[かんが]えます。\nA: しかし、解釈[かいしゃく]によって条文[じょうもん]の意味[いみ]を変[か]えることは、法的安定性[ほうてきあんていせい]を損[そこ]なう。\nB: もっともですが、国際情勢[こくさいじょうせい]の変容[へんよう]を無視[むし]する固定的[こていてき]解釈[かいしゃく]にも限界[げんかい]があります。\nA: だが、改憲[かいけん]という手段[しゅだん]があるにもかかわらず、解釈改憲[かいしゃくかいけん]に頼[たよ]るのは論理飛躍[ろんりひやく]だ。\nB: 立法府[りっぽうふ]の機能不全[きのうふぜん]が、司法[しほう]に判断[はんだん]を押[お]し付[つ]けている側面[そくめん]は否[いな]めません。\nA: 法学者[ほうがくしゃ]たるもの、時代[じだい]の要請[ようせい]と条文[じょうもん]の忠実[ちゅうじつ]な解釈[かいしゃく]の狭間[はざま]で苦悩[くのう]するものだ。\nB: お言葉[ことば]の重[おも]み、痛[いた]いほど分[わ]かります。",
    translation: "A: I'd like to hear your view on the interpretation of Article 9 of the Constitution. B: I think the clause prohibiting the maintenance of war potential should be reconsidered in light of changing times. A: But changing the meaning of the article through interpretation undermines legal stability. B: True, but a rigid interpretation that ignores shifts in the international situation also has its limits. A: Yet relying on interpretive revision when the means of formal amendment exists is a leap in logic. B: It cannot be denied that dysfunction in the legislature has pushed judgments onto the judiciary. A: A legal scholar, as such, agonizes between the demands of the age and faithful interpretation of the article. B: I keenly understand the weight of your words.",
    questions: [
      {
        q: "What does B think should be reconsidered?",
        choices: ["The amendment procedure", "The clause prohibiting the maintenance of war potential", "The role of the judiciary", "The voting age"],
        answerIndex: 1,
        explanation: "B says 戦力保持[せんりょくほじ]を禁[きん]じた条項[じょうこう]は見直[みなお]すべき."
      },
      {
        q: "What does A say is undermined by interpretive changes?",
        choices: ["Legislative authority", "Legal stability", "Judicial independence", "Public trust"],
        answerIndex: 1,
        explanation: "A says 解釈[かいしゃく]によって条文[じょうもん]の意味[いみ]を変[か]えることは法的安定性[ほうてきあんていせい]を損[そこ]なう."
      },
      {
        q: "What does A call relying on interpretive revision when amendment exists?",
        choices: ["A pragmatic choice", "A leap in logic", "An urgent necessity", "A constitutional duty"],
        answerIndex: 1,
        explanation: "A says 解釈改憲[かいしゃくかいけん]に頼[たよ]るのは論理飛躍[ろんりひやく]だ."
      },
      {
        q: "What does B say cannot be denied?",
        choices: ["That the amendment process is broken", "That legislature dysfunction has pushed judgments onto the judiciary", "That public opinion favors revision", "That the courts are overreaching"],
        answerIndex: 1,
        explanation: "B says 立法府[りっぽうふ]の機能不全[きのうふぜん]が司法[しほう]に判断[はんだん]を押[お]し付[つ]けている側面[そくめん]は否[いな]めない."
      },
      {
        q: "What does A say a legal scholar agonizes between?",
        choices: ["Theory and practice", "Demands of the age and faithful interpretation", "Politics and law", "Tradition and reform"],
        answerIndex: 1,
        explanation: "A says 時代[じだい]の要請[ようせい]と条文[じょうもん]の忠実[ちゅうじつ]な解釈[かいしゃく]の狭間[はざま]で苦悩[くのう]する."
      }
    ],
    estMinutes: 7,
    tags: ["law", "constitution"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-09 — An economic policy forum
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-09",
    title: "Monetary Policy Forum",
    level: "N1",
    context: "Economists debating prolonged monetary easing at a policy forum",
    text: "A: 金融緩和[きんゆうかんわ]の長期化[ちょうきか]がもたらす副作用[ふくさよう]を、改[あらた]めて評価[ひょうか]すべきだ。\nB: 確[たし]かに、資産価格[しさんかかく]の上昇[じょうしょう]が格差[かくさ]を拡大[かくだい]している点[てん]は否[いな]めない。\nA: だが、デフレ脱却[だっきゃく]を達成[たっせい]するまでは、緩和[かんわ]を維持[いじ]せずにはいられない。\nB: それでも、出口戦略[でぐちせんりゃく]を先送[さきおく]りすれば、市場[しじょう]の歪[ゆが]みは増幅[ぞうふく]する。\nA: 実質金利[じっしつきんり]が低[ひく]すぎる状態[じょうたい]が続[つづ]けば、投資[とうし]の非効率化[ひこうりつか]を招[まね]く。\nB: 期待[きたい]インフレ率[りつ]が目標[もくひょう]に届[とど]かない以上[いじょう]、政策的手段[せいさくてきしゅだん]は限[かぎ]られる。\nA: 中央銀行[ちゅうおうぎんこう]たるもの、短期的[たんきてき]な市場[しちょう]の反応[はんのう]に振[ふ]り回[まわ]されてはならない。\nB: 同意[どうい]する。一方[いっぽう]で、財政[ざいせい]との連動[れんどう]も視野[しや]に入[い]れる必要[ひつよう]がある。",
    translation: "A: We should reassess the side effects brought about by prolonged monetary easing. B: Indeed, the point that rising asset prices are widening inequality cannot be denied. A: But until deflation is overcome, we cannot help but maintain easing. B: Still, if the exit strategy is postponed, market distortions will be amplified. A: If real interest rates remain too low, investment becomes inefficient. B: As long as the expected inflation rate falls short of the target, policy tools are limited. A: A central bank, as such, must not be swayed by short-term market reactions. B: I agree. At the same time, we need to bring its interplay with fiscal policy into view.",
    questions: [
      {
        q: "What does A want reassessed?",
        choices: ["Inflation targets", "Side effects of prolonged monetary easing", "Fiscal stimulus packages", "Exchange rate policy"],
        answerIndex: 1,
        explanation: "A says 金融緩和[きんゆうかんわ]の長期化[ちょうきか]がもたらす副作用[ふくさよう]を評価[ひょうか]すべき."
      },
      {
        q: "What does B concede is widening inequality?",
        choices: ["Tax burdens", "Rising asset prices", "Wage stagnation", "Public debt"],
        answerIndex: 1,
        explanation: "B says 資産価格[しさんかかく]の上昇[じょうしょう]が格差[かくさ]を拡大[かくだい]している."
      },
      {
        q: "Why does A say easing must be maintained?",
        choices: ["Until employment recovers", "Until deflation is overcome", "Until wages rise", "Until the yen stabilizes"],
        answerIndex: 1,
        explanation: "A says デフレ脱却[だっきゃく]を達成[たっせい]するまでは緩和[かんわ]を維持[いじ]せずにはいられない."
      },
      {
        q: "What happens if the exit strategy is postponed, per B?",
        choices: ["Markets stabilize", "Market distortions amplify", "Inflation surges", "The yen appreciates sharply"],
        answerIndex: 1,
        explanation: "B says 出口戦略[でぐちせんりゃく]を先送[さきおく]りすれば市場[しじょう]の歪[ゆが]みは増幅[ぞうふく]する."
      },
      {
        q: "What must a central bank not be swayed by?",
        choices: ["Political pressure", "Short-term market reactions", "International criticism", "Academic opinion"],
        answerIndex: 1,
        explanation: "A says 中央銀行[ちゅうおうぎんこう]たるもの、短期的[たんきてき]な市場[しちょう]の反応[はんのう]に振[ふ]り回[まわ]されてはならない."
      }
    ],
    estMinutes: 6,
    tags: ["economics", "policy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-10 — A scientific research presentation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-10",
    title: "Research Presentation",
    level: "N1",
    context: "A researcher presenting experimental results with a questioner at a conference",
    text: "A: 本実験[ほんじっけん]では、新[あたら]しい触媒[しょくばい]が反応効率[はんのうこうりつ]を30パーセント向上[こうじょう]させることを確認[かくにん]した。\nB: 興味深[きょうみぶか]い結果[けっか]だが、再現性[さいげんせい]についての検証[けんしょう]は十分[じゅうぶん]だろうか。\nA: 御指摘[ごしてき]の通[とお]り、現段階[げんだんかい]ではサンプル数[かず]が限[かぎ]られている。\nB: であれば、結論[けつろん]を一般化[いっぱんか]するのは時期尚早[じきしょうそう]ではないか。\nA: その点[てん]は承知[しょうち]している。ただ、初期[しょき]データは有意[ゆうい]な傾向[けいこう]を示[しめ]している。\nB: 統計的有意性[とうけいてきゆいせい]を確認[かくにん]するまでは、慎重[しんちょう]な表現[ひょうげん]に留[とど]めるべきだ。\nA: 研究者[けんきゅうしゃ]たるもの、過度[かど]な断定[だんてい]を避[さ]け、謙虚[けんきょ]に事実[じじつ]を報告[ほうこく]する。\nB: 今後[こんご]の追加実験[ついかじっけん]の計画[けいかく]について、後[のち]ほど伺[うかが]いたい。",
    translation: "A: In this experiment, we confirmed that a new catalyst improves reaction efficiency by 30 percent. B: An intriguing result, but is verification of reproducibility sufficient? A: As you point out, at this stage the sample size is limited. B: Then generalizing the conclusion would be premature. A: I'm aware of that. However, the initial data shows a significant trend. B: Until statistical significance is confirmed, you should stick to cautious phrasing. A: A researcher, as such, should avoid excessive assertion and report facts humbly. B: I'd like to hear about plans for additional experiments later.",
    questions: [
      {
        q: "What did the experiment confirm?",
        choices: ["A new side effect", "The new catalyst improves efficiency by 30%", "A flaw in prior methods", "A cost reduction"],
        answerIndex: 1,
        explanation: "A says 触媒[しょくばい]が反応効率[はんのうこうりつ]を30パーセント向上[こうじょう]させることを確認[かくにん]した."
      },
      {
        q: "What concern does B raise?",
        choices: ["Funding limits", "Reproducibility verification", "Ethical issues", "Patent conflicts"],
        answerIndex: 1,
        explanation: "B asks 再現性[さいげんせい]についての検証[けんしょう]は十分[じゅうぶん]だろうか."
      },
      {
        q: "What does B call generalizing the conclusion?",
        choices: ["A bold step", "Premature", "Necessary", "Untimely but useful"],
        answerIndex: 1,
        explanation: "B says 結論[けつろん]を一般化[いっぱんか]するのは時期尚早[じきしょうそう]ではないか."
      },
      {
        q: "What should be done until statistical significance is confirmed?",
        choices: ["Publish immediately", "Stick to cautious phrasing", "Increase the catalyst dose", "Apply for a patent"],
        answerIndex: 1,
        explanation: "B says 統計的有意性[とうけいてきゆいせい]を確認[かくにん]するまでは慎重[しんちょう]な表現[ひょうげん]に留[とど]めるべき."
      },
      {
        q: "How should a researcher report facts?",
        choices: ["Confidently and decisively", "Humbly, avoiding excessive assertion", "Quickly and broadly", "Only when complete"],
        answerIndex: 1,
        explanation: "A says 研究者[けんきゅうしゃ]たるもの、過度[かど]な断定[だんてい]を避[さ]け、謙虚[けんきょ]に事実[じじつ]を報告[ほうこく]する."
      }
    ],
    estMinutes: 6,
    tags: ["science", "research"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-11 — A historical revisionism debate
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-11",
    title: "Historical Revisionism Debate",
    level: "N1",
    context: "Two historians debating a reinterpretation of a medieval uprising",
    text: "A: 中世[ちゅうせい]の農民一揆[のうみんいっき]を、階級闘争[かいきゅうとうそう]の観点[かんてん]から再評価[さいひょうか]する試[こころ]みには疑問[ぎもん]がある。\nB: だが、従来[じゅうらい]の英雄史観[えいゆうしかん]が民衆[みんしゅう]の役割[やくわり]を軽視[けいし]してきたのは事実[じじつ]だ。\nA: とはいえ、現代[げんだい]の概念[がいねん]を過去[かこ]に投影[とうえい]するのは、歴史歪曲[れきしわいきょく]に他[ほか]ならない。\nB: 資料[しりょう]の精査[せいさ]を怠[おこた]らずに行[おこな]えば、時代錯誤[じだいさご]を避[さ]けられる。\nA: 史料批判[しりょうひはん]を欠[か]いた解釈[かいしゃく]は、政治的意図[せいじてきいと]に利用[りよう]されかねない。\nB: その危惧[きぐ]は共有[きょうゆう]する。歴史家[れきしか]たるもの、中立[ちゅうりつ]の立場[たちば]を保[たも]つべきだ。\nA: 歴史[れきし]の複雑[ふくざつ]さを認[みと]めた上[うえ]で、多元的[たげんてき]な視点[してん]を導入[どうにゅう]したい。\nB: 賛成[さんせい]だ。一面的[いちめんてき]な結論[けつろん]に飛[と]び付[つ]くのは禁物[きんもつ]だ。",
    translation: "A: I have doubts about the attempt to re-evaluate medieval peasant uprisings from the perspective of class struggle. B: But it is a fact that the conventional heroic view of history has marginalized the role of the people. A: That said, projecting modern concepts onto the past is nothing but a distortion of history. B: If we conduct a careful examination of the materials, we can avoid anachronism. A: Interpretation without source criticism may be exploited for political purposes. B: I share that concern. A historian, as such, should maintain a neutral stance. A: Acknowledging the complexity of history, I'd like to introduce multiple perspectives. B: Agreed. We must not rush to one-sided conclusions.",
    questions: [
      {
        q: "What does A doubt?",
        choices: ["The validity of medieval sources", "The attempt to re-evaluate medieval uprisings from a class-struggle perspective", "The role of peasants in revolts", "The existence of peasant uprisings"],
        answerIndex: 1,
        explanation: "A says 農民一揆[のうみんいっき]を階級闘争[かいきゅうとうそう]の観点[かんてん]から再評価[さいひょうか]する試[こころ]みには疑問[ぎもん]."
      },
      {
        q: "What does B say has marginalized the people's role?",
        choices: ["Modern historiography", "The conventional heroic view of history", "Class-struggle theory", "Source criticism"],
        answerIndex: 1,
        explanation: "B says 英雄史観[えいゆうしかん]が民衆[みんしゅう]の役割[やくわり]を軽視[けいし]してきた."
      },
      {
        q: "What does A call projecting modern concepts onto the past?",
        choices: ["A necessary reinterpretation", "A distortion of history", "A scholarly convention", "An inevitable bias"],
        answerIndex: 1,
        explanation: "A says 現代[げんだい]の概念[がいねん]を過去[かこ]に投影[とうえい]するのは歴史歪曲[れきしわいきょく]に他[ほか]ならない."
      },
      {
        q: "What may happen to interpretation without source criticism?",
        choices: ["It may win awards", "It may be exploited for political purposes", "It may simplify teaching", "It may overturn prior views"],
        answerIndex: 1,
        explanation: "A says 史料批判[しりょうひはん]を欠[か]いた解釈[かいしゃく]は政治的意図[せいじてきいと]に利用[りよう]されかねない."
      },
      {
        q: "What must be avoided?",
        choices: ["Using multiple sources", "Rushing to one-sided conclusions", "Citing foreign scholarship", "Re-evaluating old sources"],
        answerIndex: 1,
        explanation: "B says 一面的[いちめんてき]な結論[けつろん]に飛[と]び付[つ]くのは禁物[きんもつ]だ."
      }
    ],
    estMinutes: 7,
    tags: ["history", "revisionism"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-12 — A sociological field study
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-12",
    title: "Sociological Field Study",
    level: "N1",
    context: "Two sociologists discussing findings from a rural field study",
    text: "A: 今回[こんかい]の調査[ちょうさ]では、農村部[のうそんぶ]の高齢化[こうれいか]が地域[ちいき]の連帯感[れんたいかん]を逆[ぎゃく]に強[つよ]めている実態[じったい]が浮[う]き彫[ぼ]りになった。\nB: それは興味深[きょうみぶか]い。一般的[いっぱんてき]な通念[つうねん]とは逆行[ぎゃっこう]する現象[げんしょう]だ。\nA: 共同作業[きょうどうさぎょう]の必要性[ひつようせい]が、住民間[じゅうみんかん]の互助[ごじょ]ネットワークを再構築[さいこうちく]しているようだ。\nB: だが、外部介入[がいぶかいにゅう]なしには持続可能[じぞくかのう]かどうか、疑[うたが]わしい。\nA: 確[たし]かに、次世代[じせだい]の担[に]い手[て]不足[ぶそく]は、回避困難[かいひこんなん]な課題[かだい]だ。\nB: 社会学者[しゃかいがくしゃ]たるもの、現場[げんば]の声[こえ]を等閑視[とうかんし]してはならない。\nA: その通[とお]り。政策提言[せいさくていげん]に反映[はんえい]させる責務[せきむ]がある。\nB: 定量的[ていりょうてき]データと質的記述[しつてききじゅつ]の統合[とうごう]を、今後[こんご]の課題[かだい]としよう。",
    translation: "A: In this survey, the reality that aging in rural areas is, conversely, strengthening the community's sense of solidarity has come to the fore. B: That's intriguing. It's a phenomenon that runs counter to the common notion. A: The necessity of joint labor appears to be rebuilding mutual-aid networks among residents. B: But whether it can be sustained without outside intervention is doubtful. A: True. The shortage of successors for the next generation is a problem that's hard to avoid. B: A sociologist, as such, must not neglect the voices from the field. A: Exactly. We have a duty to reflect them in policy proposals. B: Let's set the integration of quantitative data and qualitative description as our future task.",
    questions: [
      {
        q: "What did the survey reveal about rural aging?",
        choices: ["It weakens community ties", "It is conversely strengthening community solidarity", "It has no measurable effect", "It accelerates outmigration"],
        answerIndex: 1,
        explanation: "A says 農村部[のうそんぶ]の高齢化[こうれいか]が地域[ちいき]の連帯感[れんたいかん]を逆[ぎゃく]に強[つよ]めている実態[じったい]が浮[う]き彫[ぼ]りになった."
      },
      {
        q: "How does this compare to the common notion?",
        choices: ["It confirms it", "It runs counter to it", "It refines it", "It extends it"],
        answerIndex: 1,
        explanation: "B says 一般的[いっぱんてき]な通念[つうねん]とは逆行[ぎゃっこう]する現象[げんしょう]だ."
      },
      {
        q: "What is rebuilding mutual-aid networks?",
        choices: ["Government programs", "The necessity of joint labor", "Religious institutions", "Technology adoption"],
        answerIndex: 1,
        explanation: "A says 共同作業[きょうどうさぎょう]の必要性[ひつようせい]が互助[ごじょ]ネットワークを再構築[さいこうちく]している."
      },
      {
        q: "What problem is hard to avoid?",
        choices: ["Funding cuts", "Shortage of next-generation successors", "Urban migration", "Cultural loss"],
        answerIndex: 1,
        explanation: "A says 次世代[じせだい]の担[に]い手[て]不足[ぶそく]は回避困難[かいひこんなん]な課題[かだい]だ."
      },
      {
        q: "What is the future task per B?",
        choices: ["Expanding the survey area", "Integrating quantitative data and qualitative description", "Recruiting more researchers", "Publishing a book"],
        answerIndex: 1,
        explanation: "B says 定量的[ていりょうてき]データと質的記述[しつてききじゅつ]の統合[とうごう]を今後[こんご]の課題[かだい]としよう."
      }
    ],
    estMinutes: 7,
    tags: ["sociology", "fieldwork"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-13 — An AI ethics conference
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-13",
    title: "AI Ethics Conference",
    level: "N1",
    context: "Panelists discussing autonomous AI decision-making at a conference",
    text: "A: 自律的[じりつてき]な判断[はんだん]を下[くだ]すAIシステムの導入[どうにゅう]は、責任[せきにん]の所在[しょざい]を曖昧[あいまい]にする。\nB: その通[とお]り。意思決定[いしけってい]のプロセスが不透明[ふとうめい]なのは、説明責任[せつめいせきにん]を果[は]たせない。\nA: アルゴリズムの学習[がくしゅう]データに偏見[へんけん]が含[ふく]まれていれば、差別[さべつ]を再生産[さいせいさん]しかねない。\nB: 開発者[かいはつしゃ]たるもの、倫理的影響[りんりてきえいきょう]を予[あらかじ]め評価[ひょうか]する義務[ぎむ]がある。\nA: とはいえ、規制[きせい]が厳格[げんかく]すぎれば、技術革新[ぎじゅつかくしん]が停滞[ていたい]する。\nB: バランスを取[と]るのが至難[しなん]の業[わざ]だが、放置[ほうち]するわけにはいかない。\nA: 透明性[とうめいせい]を担保[たんぽ]する機構[きこう]の設計[せっけい]を、最優先課題[さいゆうせんかだい]とすべきだ。\nB: 同意[どうい]する。人間[にんげん]の監視[かんし]を前提[ぜんてい]とした設計[せっけい]が望[のぞ]ましい。",
    translation: "A: Introducing AI systems that make autonomous decisions blurs the locus of responsibility. B: That's right. An opaque decision-making process makes it impossible to fulfill accountability. A: If the algorithm's training data contains bias, it may reproduce discrimination. B: Developers, as such, have a duty to assess ethical impacts in advance. A: That said, if regulations are too strict, technological innovation will stagnate. B: Striking a balance is a formidable task, but we can't just leave it alone. A: Designing a mechanism that secures transparency should be our top priority. B: I agree. A design premised on human oversight is preferable.",
    questions: [
      {
        q: "What does A say is blurred by autonomous AI?",
        choices: ["The cost of deployment", "The locus of responsibility", "The training data", "The user base"],
        answerIndex: 1,
        explanation: "A says 責任[せきにん]の所在[しょざい]を曖昧[あいまい]にする."
      },
      {
        q: "What does an opaque decision process prevent?",
        choices: ["Faster deployment", "Fulfilling accountability", "Data collection", "Cost reduction"],
        answerIndex: 1,
        explanation: "B says 意思決定[いしけってい]のプロセスが不透明[ふとうめい]なのは説明責任[せつめいせきにん]を果[は]たせない."
      },
      {
        q: "What may happen if training data contains bias?",
        choices: ["Faster training", "Discrimination may be reproduced", "Lower accuracy", "Higher cost"],
        answerIndex: 1,
        explanation: "A says 学習[がくしゅう]データに偏見[へんけん]が含[ふく]まれていれば差別[さべつ]を再生産[さいせいさん]しかねない."
      },
      {
        q: "What duty do developers have?",
        choices: ["To publish source code", "To assess ethical impacts in advance", "To reduce costs", "To open APIs"],
        answerIndex: 1,
        explanation: "B says 開発者[かいはつしゃ]たるもの倫理的影響[りんりてきえいきょう]を予[あらかじ]め評価[ひょうか]する義務[ぎむ]がある."
      },
      {
        q: "What should be the top priority?",
        choices: ["Cutting training costs", "Designing a mechanism that secures transparency", "Expanding the user base", "Reducing model size"],
        answerIndex: 1,
        explanation: "A says 透明性[とうめいせい]を担保[たんぽ]する機構[きこう]の設計[せっけい]を最優先課題[さいゆうせんかだい]とすべき."
      }
    ],
    estMinutes: 7,
    tags: ["AI", "ethics"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-14 — A cultural anthropology lecture
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-14",
    title: "Anthropology Lecture",
    level: "N1",
    context: "A professor lecturing on ritual symbolism with a student question",
    text: "A: 儀礼[ぎれい]に見[み]られる象徴[しょうちょう]は、社会[しゃかい]の価値体系[かちたいけい]を可視化[かしか]する装置[そうち]である。\nB: 教授[きょうじゅ]、では、儀礼[ぎれい]の衰退[すいたい]は価値体系[かちたいけい]の崩壊[ほうかい]を意味[いみ]するのでしょうか。\nA: 一概[いちがい]には言[い]えない。儀礼[ぎれい]が形[かたち]を変[か]えて存続[そんぞく]することもある。\nB: 現代[げんだい]の消費行動[しょうひこうどう]が新[あたら]しい儀礼[ぎれい]に置[お]き換[か]わっているという見方[みかた]ですね。\nA: その通[とお]り。人類学者[じんるいがくしゃ]たるもの、既存[きぞん]の枠[わく]に囚[とら]われず現象[げんしょう]を捉[とら]える必要[ひつよう]がある。\nB: 象徴[しょうちょう]の解読[かいどく]には、文化的文脈[ぶんかてきぶんみゃく]の理解[りかい]が欠[か]かせないと理解[りかい]しました。\nA: 正[ただ]しい。表層的[ひょうそうてき]な類似[るいじ]に騙[だま]されてはならない。\nB: 比較研究[ひかくけんきゅう]の際[さい]、自[みずか]らの文化的[ぶんかてき]バイアスを意識[いしき]することが肝要[かんよう]ですね。\nA: まさにその通[とお]り。反省的態度[はんせいてきたいど]が研究[けんきゅう]を支[ささ]える柱[はしら]だ。",
    translation: "A: Symbols seen in rituals are devices that visualize a society's value system. B: Professor, does the decline of rituals then mean the collapse of the value system? A: It cannot be said categorically. Rituals sometimes persist in altered forms. B: So modern consumption behavior is being replaced as a new ritual. A: Exactly. An anthropologist, as such, must grasp phenomena without being trapped in existing frameworks. B: I understood that decoding symbols requires an understanding of the cultural context. A: Correct. You must not be deceived by superficial similarities. B: When conducting comparative research, being aware of one's own cultural bias is crucial. A: Exactly. A reflective attitude is the pillar that supports research.",
    questions: [
      {
        q: "What do ritual symbols do, per the professor?",
        choices: ["Preserve traditions unchanged", "Visualize a society's value system", "Justify hierarchy", "Encrypt sacred knowledge"],
        answerIndex: 1,
        explanation: "A says 象徴[しょうちょう]は社会[しゃかい]の価値体系[かちたいけい]を可視化[かしか]する装置[そうち]."
      },
      {
        q: "What does B ask about ritual decline?",
        choices: ["Whether it means the collapse of the value system", "Whether it can be reversed", "Whether it is inevitable", "Whether it is recent"],
        answerIndex: 0,
        explanation: "B asks 儀礼[ぎれい]の衰退[すいたい]は価値体系[かちたいけい]の崩壊[ほうかい]を意味[いみ]するのでしょうか."
      },
      {
        q: "What does the professor say about rituals sometimes?",
        choices: ["They vanish entirely", "They persist in altered forms", "They revive unchanged", "They lose meaning"],
        answerIndex: 1,
        explanation: "A says 儀礼[ぎれい]が形[かたち]を変[か]えて存続[そんぞく]することもある."
      },
      {
        q: "What must an anthropologist avoid?",
        choices: ["Fieldwork in remote areas", "Being trapped in existing frameworks", "Comparative methods", "Using native languages"],
        answerIndex: 1,
        explanation: "A says 人類学者[じんるいがくしゃ]たるもの、既存[きぞん]の枠[わく]に囚[とら]われず現象[げんしょう]を捉[とら]える."
      },
      {
        q: "What supports research, per the professor?",
        choices: ["Funding", "A reflective attitude", "Large datasets", "Famous mentors"],
        answerIndex: 1,
        explanation: "A says 反省的態度[はんせいてきたいど]が研究[けんきゅう]を支[ささ]える柱[はしら]だ."
      }
    ],
    estMinutes: 7,
    tags: ["anthropology", "culture"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-15 — A political strategy meeting
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-15",
    title: "Campaign Strategy Meeting",
    level: "N1",
    context: "Campaign strategists discussing election tactics for a district",
    text: "A: この選挙区[せんきょく]での支持基盤[しききばん]の拡大[かくだい]を、最優先課題[さいゆうせんかだい]とする。\nB: 現状[げんじょう]では、都市部[としぶ]の浮動票[ふどうひょう]の取[と]り込[こ]みが急務[きゅうむ]だ。\nA: だが、従来[じゅうらい]の組織型選挙[そしきがたせんきょ]だけでは、限界[げんかい]がある。\nB: SNSを活用[かつよう]した情報発信[じょうほうはっしん]も、並行[へいこう]して進[すす]める必要[ひつよう]がある。\nA: 候補者[こうほしゃ]たるもの、理念[りねん]を明確[めいかく]に示[しめ]さずに支持[しじ]を集[あつ]めることはできない。\nB: もちろんだ。有権者[ゆうけんしゃ]の信頼[しんらい]を損[そこ]なう発言[はつげん]は厳[きび]しく慎[つつし]まなければならない。\nA: 政策論争[せいさくろんそう]を深[ふか]めることで、他候補[たこうほ]との差異[さい]を際立[きわだ]たせたい。\nB: 負[ま]け戦[いくさ]になるかもしれないが、最後[さいご]まで諦[あきら]めずに戦[たたか]う。",
    translation: "A: Expanding the support base in this electoral district will be our top priority. B: Currently, capturing the floating vote in urban areas is an urgent task. A: But relying solely on the conventional organization-based campaign has its limits. B: We also need to push forward with information dissemination via social media in parallel. A: A candidate, as such, cannot gather support without clearly presenting their principles. B: Of course. Any statement that undermines voters' trust must be strictly avoided. A: I'd like to highlight differences from other candidates by deepening policy debate. B: It may become an uphill battle, but we'll fight without giving up until the end.",
    questions: [
      {
        q: "What is the top priority?",
        choices: ["Reducing campaign costs", "Expanding the support base", "Attacking rivals", "Increasing TV ads"],
        answerIndex: 1,
        explanation: "A says 支持基盤[しききばん]の拡大[かくだい]を最優先課題[さいゆうせんかだい]とする."
      },
      {
        q: "What is an urgent task in urban areas?",
        choices: ["Recruiting volunteers", "Capturing the floating vote", "Holding rallies", "Distributing flyers"],
        answerIndex: 1,
        explanation: "B says 都市部[としぶ]の浮動票[ふどうひょう]の取[と]り込[こ]みが急務[きゅうむ]だ."
      },
      {
        q: "What does A say has limits?",
        choices: ["Social media outreach", "Relying solely on organization-based campaigning", "TV advertising", "Door-to-door visits"],
        answerIndex: 1,
        explanation: "A says 従来[じゅうらい]の組織型選挙[そしきがたせんきょ]だけでは限界[げんかい]がある."
      },
      {
        q: "What must a candidate do to gather support?",
        choices: ["Promise lower taxes", "Clearly present their principles", "Avoid public debates", "Endorse celebrities"],
        answerIndex: 1,
        explanation: "A says 候補者[こうほしゃ]たるもの理念[りねん]を明確[めいかく]に示[しめ]さずに支持[しじ]を集[あつ]めることはできない."
      },
      {
        q: "What must be strictly avoided?",
        choices: ["Public debates", "Statements undermining voters' trust", "Social media use", "Policy details"],
        answerIndex: 1,
        explanation: "B says 有権者[ゆうけんしゃ]の信頼[しんらい]を損[そこ]なう発言[はつげん]は厳[きび]しく慎[つつし]まなければならない."
      }
    ],
    estMinutes: 6,
    tags: ["politics", "strategy"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-16 — An environmental law panel
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-16",
    title: "Environmental Law Panel",
    level: "N1",
    context: "Legal experts on a panel about regulating industrial wastewater",
    text: "A: 工場[こうじょう]の排水規制[はいすいきせい]の強化[きょうか]は、待[ま]ったなしの課題[かだい]だ。\nB: だが、地元経済[じもとけいざい]への打撃[だげき]を懸念[けねん]する声[こえ]も強[つよ]い。\nA: 環境保護[かんきょうほご]を犠牲[ぎせい]にしてまで、経済成長[けいざいせいちょう]を優先[ゆうせん]すべきではない。\nB: 確[たし]かに。ただ、過渡期[かとき]の支援策[しえんさく]を整備[せいび]せずにはすまない。\nA: 段階的[だんかいてき]な規制[きせい]の導入[どうにゅう]と、企業[きぎょう]への助成[じょせい]を両立[りょうりつ]させる必要[ひつよう]がある。\nB: 法的枠組[ほうてきわくぐ]みの整備[せいび]には、時間[じかん]がかかるが放置[ほうち]するわけにはいかない。\nA: 未来[みらい]の世代[せだい]への責任[せきにん]を思[おも]えば、今[いま]ここで行動[こうどう]を起[おこ]こさずにはいられない。\nB: 法学者[ほうがくしゃ]たるもの、現実[げんじつ]と理念[りねん]の狭間[はざま]で知恵[ちえ]を絞[しぼ]るしかない。",
    translation: "A: Strengthening regulations on factory wastewater is a task that admits of no delay. B: But voices concerned about the impact on the local economy are also strong. A: We should not prioritize economic growth at the expense of protecting the environment. B: True. However, we cannot help but establish support measures for the transition period. A: We need to balance the phased introduction of regulations with subsidies to companies. B: Establishing the legal framework takes time, but we can't just leave it alone. A: Considering our responsibility to future generations, we cannot help but take action here and now. B: A legal scholar, as such, has no choice but to wrack their brains in the gap between reality and ideals.",
    questions: [
      {
        q: "What is described as a task admitting no delay?",
        choices: ["Subsidizing factories", "Strengthening wastewater regulations", "Building new plants", "Cutting taxes"],
        answerIndex: 1,
        explanation: "A says 排水規制[はいすいきせい]の強化[きょうか]は待[ま]ったなしの課題[かだい]だ."
      },
      {
        q: "What concern is raised about the local economy?",
        choices: ["Inflation", "The impact of regulation", "Labor shortages", "Declining demand"],
        answerIndex: 1,
        explanation: "B says 地元経済[じもとけいざい]への打撃[だげき]を懸念[けねん]する声[こえ]も強[つよ]い."
      },
      {
        q: "What does A say should not be sacrificed?",
        choices: ["Economic growth", "Environmental protection", "Local jobs", "Industrial output"],
        answerIndex: 1,
        explanation: "A says 環境保護[かんきょうほご]を犠牲[ぎせい]にしてまで経済成長[けいざいせいちょう]を優先[ゆうせん]すべきではない."
      },
      {
        q: "What support is needed during the transition?",
        choices: ["Tax cuts for all", "Support measures for companies", "Public works projects", "Import subsidies"],
        answerIndex: 1,
        explanation: "B says 過渡期[かとき]の支援策[しえんさく]を整備[せいび]せずにはすまない."
      },
      {
        q: "Why must they take action now?",
        choices: ["Election pressure", "Responsibility to future generations", "Industrial lobbying", "Court deadlines"],
        answerIndex: 1,
        explanation: "A says 未来[みらい]の世代[せだい]への責任[せきにん]を思[おも]えば行動[こうどう]を起[おこ]こさずにはいられない."
      }
    ],
    estMinutes: 7,
    tags: ["environment", "law"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-17 — A neuroscience symposium
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-17",
    title: "Neuroscience Symposium",
    level: "N1",
    context: "Two neuroscientists discussing hippocampal function and memory consolidation",
    text: "A: 海馬[かいば]の役割[やくわり]が、記憶定着[きおくていちゃく]にとどまらないという仮説[かせつ]を提示[ていじ]したい。\nB: 興味深[きょうみぶか]い。だが、既存[きぞん]のモデルとの整合性[せいごうせい]をどう説明[せつめい]するのか。\nA: 神経可塑性[しんけいかそせい]の新[あたら]しいデータが、従来理論[じゅうらいりろん]を修正[しゅうせい]する必要性[ひつようせい]を示唆[しさ]している。\nB: 反証可能性[はんしょうかのうせい]を明示[めいじ]しない理論[りろん]は、科学[かがく]とは言[い]えない。\nA: もちろんだ。実験設計[じっけんせっけい]を精緻[せいち]にし、反証可能[はんしょうかのう]な予言[よげん]を設[もう]ける。\nB: 神経科学者[しんけいかがくしゃ]たるもの、データに忠実[ちゅうじつ]であることを厳[きび]しく自[みずか]らに課[か]すべきだ。\nA: 直近[ちょっきん]の論文[ろんぶん]で報告[ほうこく]された相反結果[そうはんけっか]にも、目[め]を背[そむ]けてはならない。\nB: 議論[ぎろん]を尽[つ]くした上[うえ]で、共通理解[きょうつうりかい]を形成[けいせい]していきたい。",
    translation: "A: I'd like to present the hypothesis that the role of the hippocampus is not limited to memory consolidation. B: Intriguing. But how do you explain its compatibility with existing models? A: New data on neural plasticity suggests the need to revise the conventional theory. B: A theory that does not explicitly state its falsifiability cannot be called science. A: Of course. I will refine the experimental design and set falsifiable predictions. B: A neuroscientist, as such, should strictly impose on themselves fidelity to data. A: We must not turn away from the contradictory results reported in a recent paper either. B: After exhausting the discussion, I'd like to form a shared understanding.",
    questions: [
      {
        q: "What hypothesis does A present?",
        choices: ["That the hippocampus controls emotion", "That the hippocampus's role is not limited to memory consolidation", "That memory is stored in the cortex", "That neural plasticity is negligible"],
        answerIndex: 1,
        explanation: "A says 海馬[かいば]の役割[やくわり]が記憶定着[きおくていちゃく]にとどまらないという仮説[かせつ]."
      },
      {
        q: "What does B ask about?",
        choices: ["The funding for the study", "Compatibility with existing models", "The age of subjects", "The lab's reputation"],
        answerIndex: 1,
        explanation: "B asks 既存[きぞん]のモデルとの整合性[せいごうせい]をどう説明[せつめい]するのか."
      },
      {
        q: "What does new data on neural plasticity suggest?",
        choices: ["That old theories are fully correct", "The need to revise conventional theory", "That the hippocampus is irrelevant", "That memory cannot be measured"],
        answerIndex: 1,
        explanation: "A says 神経可塑性[しんけいかそせい]のデータが従来理論[じゅうらいりろん]を修正[しゅうせい]する必要性[ひつようせい]を示唆[しさ]している."
      },
      {
        q: "What can a theory without falsifiability not be called?",
        choices: ["Scientific", "Useful", "Theoretical", "Novel"],
        answerIndex: 0,
        explanation: "B says 反証可能性[はんしょうかのうせい]を明示[めいじ]しない理論[りろん]は科学[かがく]とは言[い]えない."
      },
      {
        q: "What must they not turn away from?",
        choices: ["Criticism from peers", "Contradictory results from a recent paper", "Funding cuts", "Public opinion"],
        answerIndex: 1,
        explanation: "A says 直近[ちょっきん]の論文[ろんぶん]で報告[ほうこく]された相反結果[そうはんけっか]にも目[め]を背[そむ]けてはならない."
      }
    ],
    estMinutes: 7,
    tags: ["neuroscience", "science"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-18 — A bioethics consultation
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-18",
    title: "Bioethics Consultation",
    level: "N1",
    context: "A consultant and a researcher discussing the ethics of embryo gene editing",
    text: "A: 胚[はい]の遺伝子編集[いでんしへんしゅう]について、倫理的境界線[りんりてききょうかいせん]を明確[めいかく]にしたい。\nB: 治療目的[ちりょうもくてき]であれば許容[きょよう]されるが、能力向上[のうりょくこうじょう]を目的[もくてき]とするのは危険[きけん]だ。\nA: その境界線[きょうかいせん]は、技術[ぎじゅつ]の進歩[しんぽ]とともに曖昧[あいまい]になりつつある。\nB: だからこそ、国際的合意形成[こくさいてきごういけいせい]が急務[きゅうむ]となる。\nA: だが、文化[ぶんか]や宗教[しゅうきょう]の違[ちが]いが、合意[ごうい]を阻[はば]む要因[よういん]になる。\nB: それでも、最低限[さいていげん]の規範[きはん]を設[もう]けずにはすまないだろう。\nA: 科学者[かがくしゃ]たるもの、自[みずか]らの研究[けんきゅう]が社会[しゃかい]に与[あた]える影響[えいきょう]を直視[ちょくし]する義務[ぎむ]がある。\nB: その自覚[じかく]の上[うえ]に立[た]って、慎重[しんちょう]な議論[ぎろん]を続[つづ]けたい。",
    translation: "A: I'd like to clarify the ethical boundary regarding gene editing of embryos. B: It's permissible if for therapeutic purposes, but aiming for enhancement is dangerous. A: That boundary is becoming blurred with the progress of technology. B: That's exactly why forming international consensus is an urgent task. A: But differences in culture and religion become factors that hinder consensus. B: Still, we cannot help but set minimum norms. A: A scientist, as such, has a duty to face squarely the impact their research has on society. B: Standing on that awareness, I'd like to continue careful discussion.",
    questions: [
      {
        q: "What does A want clarified?",
        choices: ["The cost of gene editing", "The ethical boundary on embryo gene editing", "The legal status of embryos", "The patent rights involved"],
        answerIndex: 1,
        explanation: "A says 胚[はい]の遺伝子編集[いでんしへんしゅう]について倫理的境界線[りんりてききょうかいせん]を明確[めいかく]にしたい."
      },
      {
        q: "What is permissible, per B?",
        choices: ["Editing for therapeutic purposes", "Editing for enhancement", "Editing without consent", "Editing for profit"],
        answerIndex: 0,
        explanation: "B says 治療目的[ちりょうもくてき]であれば許容[きょよう]される."
      },
      {
        q: "What is dangerous?",
        choices: ["Therapeutic editing", "Aiming for enhancement", "International oversight", "Public debate"],
        answerIndex: 1,
        explanation: "B says 能力向上[のうりょくこうじょう]を目的[もくてき]とするのは危険[きけん]だ."
      },
      {
        q: "What is hindering international consensus?",
        choices: ["Lack of data", "Cultural and religious differences", "Patent disputes", "Cost barriers"],
        answerIndex: 1,
        explanation: "A says 文化[ぶんか]や宗教[しゅうきょう]の違[ちが]いが合意[ごうい]を阻[はば]む要因[よういん]になる."
      },
      {
        q: "What duty does a scientist have?",
        choices: ["To publish quickly", "To face squarely the impact of their research on society", "To seek funding", "To train students"],
        answerIndex: 1,
        explanation: "A says 科学者[かがくしゃ]たるもの自[みずか]らの研究[けんきゅう]が社会[しゃかい]に与[あた]える影響[えいきょう]を直視[ちょくし]する義務[ぎむ]がある."
      }
    ],
    estMinutes: 7,
    tags: ["bioethics", "science"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-19 — A foreign policy analysis
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-19",
    title: "Foreign Policy Analysis",
    level: "N1",
    context: "Two analysts discussing a regional security alliance",
    text: "A: 同盟国[どうめいこく]との安保体制[あんぽたいせい]の再構築[さいこうちく]は、避[さ]けて通[とお]れない課題[かだい]だ。\nB: だが、過度[かど]な依存[いぞん]は、我[わ]が国[くに]の外交的主体性[がいこうてきしゅたいせい]を損[そこ]なう。\nA: 確[たし]かに、独自防衛力[どくじぼうえいりょく]の強化[きょうか]が前提[ぜんてい]となる。\nB: その上[うえ]で、多国間協調体制[たこくかんきょうちょうたいせい]を構築[こうちく]すべきだ。\nA: 隣国[りんこく]の動向[どうこう]次第[しだい]では、抑止力[よくしりょく]の見直[みなお]しを余儀[よぎ]なくされる。\nB: 緊張[きんちょう]の高[たか]まりを招[まね]くような対応[たいおう]は、極[きわ]めて危険[きけん]だ。\nA: 外交官[がいこうかん]たるもの、長期的視野[ちょうきてきしや]を持[も]ちつつ、冷静[れいせい]に判断[はんだん]する。\nB: 同意[どうい]する。短期的利益[たんきてきりえき]に囚[とら]われてはならない。",
    translation: "A: Rebuilding the security framework with our ally is a task we cannot avoid. B: But excessive dependence undermines our country's diplomatic autonomy. A: True. Strengthening our own defense capability becomes the premise. B: On that basis, we should build a multilateral coordination framework. A: Depending on our neighbor's moves, we may be forced to review our deterrence. B: Any response that heightens tensions is extremely dangerous. A: A diplomat, as such, must judge calmly while maintaining a long-term perspective. B: I agree. We must not be trapped by short-term interests.",
    questions: [
      {
        q: "What is unavoidable?",
        choices: ["Cutting defense spending", "Rebuilding the security framework with an ally", "Withdrawing from treaties", "Reducing troop levels"],
        answerIndex: 1,
        explanation: "A says 同盟国[どうめいこく]との安保体制[あんぽたいせい]の再構築[さいこうちく]は避[さ]けて通[とお]れない."
      },
      {
        q: "What does excessive dependence undermine?",
        choices: ["Military readiness", "The country's diplomatic autonomy", "Economic growth", "Public support"],
        answerIndex: 1,
        explanation: "B says 過度[かど]な依存[いぞん]は外交的主体性[がいこうてきしゅたいせい]を損[そこ]なう."
      },
      {
        q: "What becomes the premise?",
        choices: ["Foreign aid", "Strengthening our own defense capability", "Alliance expansion", "Arms reduction"],
        answerIndex: 1,
        explanation: "A says 独自防衛力[どくじぼうえいりょく]の強化[きょうか]が前提[ぜんてい]となる."
      },
      {
        q: "What may force a review of deterrence?",
        choices: ["Election outcomes", "The neighbor's moves", "Trade deficits", "Public opinion polls"],
        answerIndex: 1,
        explanation: "A says 隣国[りんこく]の動向[どうこう]次第[しだい]では抑止力[よくしりょく]の見直[みなお]しを余儀[よぎ]なくされる."
      },
      {
        q: "What must a diplomat maintain?",
        choices: ["A short-term focus", "A long-term perspective", "Strict secrecy", "Public approval"],
        answerIndex: 1,
        explanation: "A says 外交官[がいこうかん]たるもの長期的視野[ちょうきてきしや]を持[も]ちつつ冷静[れいせい]に判断[はんだん]する."
      }
    ],
    estMinutes: 7,
    tags: ["diplomacy", "security"]
  },
  // ───────────────────────────────────────────────────────────
  // l-n1-20 — A media ethics inquiry
  // ───────────────────────────────────────────────────────────
  {
    id: "l-n1-20",
    title: "Media Ethics Inquiry",
    level: "N1",
    context: "An inquiry into a broadcaster's coverage standards",
    text: "A: 報道機関[ほうどうきかん]として、公平性[こうへいせい]を欠[か]いた報道[ほうどう]は許容[きょよう]されない。\nB: 認[みと]める。だが、速報性[そくほうせい]と正確性[せいかくせい]の両立[りょうりつ]は困難[こんなん]を極[きわ]める。\nA: とはいえ、未確認情報[みかくにんじょうほう]を垂[た]れ流[なが]すのは、重大問題[じゅうだいもんだい]だ。\nB: 編集方針[へんしゅうほうしん]の見直[みなお]しは必要[ひつよう]だが、表現[ひょうげん]の自由[じゆう]への配慮[はいりょ]も欠[か]かせない。\nA: 取材源秘匿[しゅざいげんひとく]という原則[げんそく]を守[まも]りつつ、情報[じょうほう]の信憑性[しんぴょうせい]を担保[たんぽ]する必要[ひつよう]がある。\nB: もちろんだ。視聴者[しちょうしゃ]の信頼[しんらい]を損[そこ]なう報道[ほうどう]は、自[みずか]らの首[くび]を絞[し]める。\nA: ジャーナリストたるもの、権力[けんりょく]に媚[こ]びることなく、真実[しんじつ]を追及[ついきゅう]すべきだ。\nB: 議論[ぎろん]を整理[せいり]した上[うえ]で、新[あたら]しいガイドラインを策定[さくてい]したい。",
    translation: "A: As a media organization, reporting that lacks fairness is not tolerated. B: I concede that. But balancing speed and accuracy is extremely difficult. A: That said, churning out unverified information is a serious problem. B: A review of editorial policy is necessary, but consideration for freedom of expression is also indispensable. A: While protecting the principle of source confidentiality, we need to secure the credibility of information. B: Of course. Reporting that undermines viewers' trust is strangling oneself. A: A journalist, as such, should pursue truth without flattering power. B: After organizing the discussion, I'd like to formulate new guidelines.",
    questions: [
      {
        q: "What is not tolerated for a media organization?",
        choices: ["Slow reporting", "Reporting lacking fairness", "Investigative pieces", "Editorial opinions"],
        answerIndex: 1,
        explanation: "A says 公平性[こうへいせい]を欠[か]いた報道[ほうどう]は許容[きょよう]されない."
      },
      {
        q: "What is extremely difficult to balance?",
        choices: ["Cost and quality", "Speed and accuracy", "Reach and depth", "Profit and integrity"],
        answerIndex: 1,
        explanation: "B says 速報性[そくほうせい]と正確性[せいかくせい]の両立[りょうりつ]は困難[こんなん]を極[きわ]める."
      },
      {
        q: "What is a serious problem, per A?",
        choices: ["Slow verification", "Churning out unverified information", "Excessive editing", "Long broadcasts"],
        answerIndex: 1,
        explanation: "A says 未確認情報[みかくにんじょうほう]を垂[た]れ流[なが]すのは重大問題[じゅうだいもんだい]だ."
      },
      {
        q: "What must be protected while securing credibility?",
        choices: ["Editorial independence", "Source confidentiality", "Advertising revenue", "Staff anonymity"],
        answerIndex: 1,
        explanation: "A says 取材源秘匿[しゅざいげんひとく]という原則[げんそく]を守[まも]りつつ情報[じょうほう]の信憑性[しんぴょうせい]を担保[たんぽ]する."
      },
      {
        q: "What should a journalist pursue?",
        choices: ["Sensational stories", "Truth without flattering power", "High ratings", "Celebrity gossip"],
        answerIndex: 1,
        explanation: "A says ジャーナリストたるもの権力[けんりょく]に媚[こ]びることなく真実[しんじつ]を追及[ついきゅう]すべきだ."
      }
    ],
    estMinutes: 7,
    tags: ["media", "ethics"]
  }
];
