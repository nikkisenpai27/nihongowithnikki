import type { StoryData } from "@/lib/types";

// JLPT N1 stories — chunk G (set sx-n1-61 .. sx-n1-70).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole compound. Kana, katakana, digits,
// and punctuation have no brackets. titleReading is full kana with NO brackets.
// Verb okurigana stays outside the bracket: 食[た]べる, 読[よ]んだり.
// N1 grammar targets woven through: 〜に過ぎない, 〜ずにはいられない,
// 〜ずにはおかない, 〜まい, 〜に足る, 〜限り, 〜とはいえ, 〜ゆえに,
// 〜を余儀なくされる, 〜たる, 〜てやまない, 〜こそ, 〜かねない,
// 〜にほかならない, 〜ごとき, 〜てならない, 〜からこそ, 〜にせよ,
// 〜わけにはいかない, 〜ずにはすまない.
// Topics: a constitutional monarchy debate, a post-human ethics, a genetic
// privacy case, an AI governance summit, a historical memory study, an
// environmental justice trial, a media literacy movement, a linguistic
// revival, a bio-ethics conference, a post-scarcity economy.

export const storiesN1G: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n1-61 — A constitutional monarchy debate (王冠の重み、民の声)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-61",
    title: "王冠[おうかん]の重[おも]み、民[たみ]の声[こえ]",
    titleReading: "おうかんのおもみ、たみのこえ",
    level: "N1",
    summary: "A two-century-old constitutional monarchy faces a historic referendum after a young MP openly challenges the crown's legitimacy.",
    estMinutes: 8,
    tags: ["politics", "monarchy", "democracy"],
    body: [
      "国会[こっかい]前[まえ]の広場[ひろば]に、数千[すうせん]の市民[しみん]が集結[しゅうけつ]していた。彼[かれ]らが問[と]いかけていたのは、二百年[にひゃくねん]続[つづ]いた立憲君主制[りっけんくんしゅせい]の存続[そんざい]か廃止[はいし]かという、この国[くに]の命運[めいうん]を分[わ]ける問[とい]にほかならなかった。",
      "改革派[かいかくは]を率[ひき]いる若[わか]き議員[ぎいん]の藤[ふじ]は、壇上[だんじょう]に立[た]ち、静[しず]かな、しかし確[たし]かな声[こえ]で演説[えんぜつ]を始[はじ]めた。",
      "「君主[くんしゅ]という制度[せいど]は、もはや単[たん]なる象徴[しょうちょう]に過[す]ぎない」と彼[かれ]は断言[だんげん]した。「血縁[けつえん]によって地位[ちい]が決[き]まる仕組[しく]みが、現代[げんだい]の民主主義[みんしゅしゅぎ]の理念[りねん]と両立[りょうりつ]し得[え]まい。」",
      "広場[ひろば]からは割[わ]れんばかりの拍手[はくしゅ]が湧[わ]き起[お]こった。しかし、反対[はんたい]の席[せき]に座[すわ]る老[おい]いた憲法学者[けんぽうがくしゃ]の鷺[さぎ]は、微[かす]かに首[くび]を振[ふ]っていた。",
      "「若[わか]き同僚[どうりょう]の主張[しゅちょう]には一理[いちり]あるとはいえ、君主制[くんしゅせい]がもたらしてきた歴史的[れきしてき]連続性[れんぞくせい]を軽視[けいし]してはならぬ」と鷺[さぎ]は答弁[とうべん]に立[た]った。",
      "「国家[こっか]の統合[とうごう]を象徴[しょうちょう]する器[うつわ]として、君主[くんしゅ]は党派[とうは]を超[こ]えた求心力[きゅうしんりょく]を保[たも]ってきた。それを一朝[いっちょう]にして廃[はい]するは、共同体[きょうどうたい]の記憶[きおく]を断[た]ち切[き]るに等[ひと]しい。」",
      "藤[ふじ]は即座[そくざ]に反論[はんろん]した。「記憶[きおく]の保持[ほじ]と、世襲[せしゅう]の支配[しはい]の正当化[せいとうか]は別[べつ]である。我々[われわれ]は、過去[かこ]に縛[しば]られることなく未来[みらい]を設計[せっけい]する責任[せきにん]を負[お]う者[もの]たるや、民[たみ]の信託[しんたく]に応[こた]えねばならぬ。」",
      "議論[ぎろん]は夜[よる]を徹[てっ]して続[つづ]いた。共和国[きょうわこく]への移行[いこう]を主張[しゅちょう]する声[こえ]と、君主制[くんしゅせい]の温存[おんぞん]を求[もと]める声[こえ]が、激[はげ]しく交[か]わされた。",
      "翌朝[よくあさ]、議会[ぎかい]は史上[しじょう]初[はつ]の国民投票[こくみんとうひょう]の実施[じっし]を可決[かけつ]した。君主[くんしゅ]自[みずか]らが、最終[さいしゅう]判断[はんだん]を民[たみ]に委[ゆだ]ねる意向[いこう]を表明[ひょうめい]したのである。",
      "鷺[さぎ]は去[さ]り際[ぎわ]に藤[ふじ]に語[かた]った。「君[きみ]の信念[しんねん]は尊[とうと]い。だが、いずれ選[えら]ばれた結果[けっか]が何[なに]であれ、それを受[う]け入[い]れる度量[どりょう]を失[うしな]ってはなるまい。」",
      "藤[ふじ]は深[ふか]く頷[うなず]いた。「この議論[ぎろん]そのものが民主主義[みんしゅしゅぎ]の成熟[せいじゅく]を示[しめ]していると言[い]えましょう」彼[かれ]は静[しず]かに返[かえ]した。王冠[おうかん]の行方[ゆくえ]は未[いま]だ定[さだ]まらぬが、民[たみ]が自[みずか]ら決[き]める時代[じだい]が、確実[かくじつ]に幕[まく]を開[あ]けた。"
    ],
    translation: [
      "Tens of thousands of citizens had gathered in the square before the Parliament. The question they posed was nothing other than whether to preserve or abolish the constitutional monarchy that had endured for two centuries — a question that would decide the fate of the nation.",
      "Fuji, the young MP who led the reform faction, took the platform and, in a quiet yet unwavering voice, began his address.",
      "'The institution of the monarch is now no more than a mere symbol,' he declared. 'A system in which rank is determined by bloodline cannot coexist with the ideals of modern democracy.'",
      "Applause that threatened to split the sky erupted from the square. But Sagi, the elderly constitutional scholar seated among the opposition, gave a faint shake of his head.",
      "'Although there is some merit in my young colleague's argument, we must not slight the historical continuity that the monarchy has afforded,' Sagi said, rising to reply.",
      "'As a vessel symbolizing national integration, the monarch has preserved a centripetal force transcending partisan division. To abolish it in a single stroke would be tantamount to severing the memory of the community.'",
      "Fuji countered immediately. 'The preservation of memory and the justification of hereditary rule are two different things. As those of us who bear the responsibility of designing a future unshackled from the past, we must answer the trust of the people.'",
      "The debate continued through the night. Voices advocating transition to a republic and voices demanding retention of the monarchy clashed fiercely.",
      "The following morning, Parliament passed a resolution to hold the first national referendum in history. The monarch himself announced his intention to entrust the final judgment to the people.",
      "As Sagi took his leave, he addressed Fuji. 'Your conviction is admirable. But whatever outcome is chosen, you must not lose the magnanimity to accept it.'",
      "Fuji nodded deeply. 'That said, this very debate demonstrates the maturation of democracy,' he replied quietly. The destination of the crown remains undetermined, but an era in which the people decide for themselves has unmistakably dawned."
    ],
    vocab: [
      { word: "立憲君主制", reading: "りっけんくんしゅせい", meaning: "constitutional monarchy" },
      { word: "存続", reading: "そんざい", meaning: "continuation/preservation" },
      { word: "廃止", reading: "はいし", meaning: "abolition" },
      { word: "命運", reading: "めいうん", meaning: "destiny/fate" },
      { word: "改革派", reading: "かいかくは", meaning: "reform faction" },
      { word: "断言", reading: "だんげん", meaning: "declaration" },
      { word: "血縁", reading: "けつえん", meaning: "blood ties" },
      { word: "象徴", reading: "しょうちょう", meaning: "symbol" },
      { word: "憲法学者", reading: "けんぽうがくしゃ", meaning: "constitutional scholar" },
      { word: "連続性", reading: "れんぞくせい", meaning: "continuity" },
      { word: "求心力", reading: "きゅうしんりょく", meaning: "centripetal force" },
      { word: "世襲", reading: "せしゅう", meaning: "heredity" },
      { word: "正当化", reading: "せいとうか", meaning: "legitimization" },
      { word: "信託", reading: "しんたく", meaning: "trust/mandate" },
      { word: "度量", reading: "どりょう", meaning: "magnanimity" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-62 — A post-human ethics (人を超える者の倫理)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-62",
    title: "人[ひと]を超[こ]える者[もの]の倫理[りんり]",
    titleReading: "ひとをこえるもののりんり",
    level: "N1",
    summary: "A UN advisory committee debates the legal status of the first human whose consciousness was uploaded to a digital substrate.",
    estMinutes: 9,
    tags: ["ethics", "transhumanism", "law"],
    body: [
      "国連[こくれん]の諮問委員会[しこんいいんかい]は、意識[いしき]をデジタル空間[くうかん]に移行[いこう]した最初[さいしょ]の被験者[ひけんしゃ]に対[たい]する法的[ほうてき]地位[ちい]の認定[にんてい]を、三日間[みっかかん]にわたり審議[しんぎ]した。",
      "委員[いいん]の一人[ひとり]である生命倫理学者[せいめいりんりがくしゃ]の礼[れい]は、開会[かいかい]の辞[じ]でこう述[の]べた。「私[わたし]たちが今[いま]問[と]おうとしているのは、人間[にんげん]の定義[ていぎ]そのものである。それは決[けっ]して軽々[かるがる]しく扱[あつか]ってよい主題[しゅだい]ではない。」",
      "審議[しんぎ]の中心[ちゅうしん]となったのは、意識[いしき]を複製[ふくせい]可能[かのう]になった場合[ばあい]、同一性[どういつせい]が保[たも]たれるのかという問[とい]であった。複製[ふくせい]された精神[せいしん]は、もとの人格[じんかく]の連続性[れんぞくせい]を引[ひ]き継[つ]ぐと言[い]えるのか。",
      "「複製[ふくせい]された意識[いしき]が元[もと]の人格[じんかく]に等[ひと]しいごとき存在[そんざい]であっても、それは複製[ふくせい]たる以上[いじょう]、別[べつ]の主体[しゅたい]と見[み]なすべきである」と技術[ぎじゅつ]派[は]の委員[いいん]は主張[しゅちょう]した。",
      "だが、礼[れい]は慎重[しんちょう]に異[い]を唱[とな]えた。「人格[じんかく]の同一性[どういつせい]とは、記憶[きおく]の連続性[れんぞくせい]に支[ささ]えられた主観的[しゅかんてき]体感[たいかん]の積[つ]み重[かさ]ねにほかならない。複製[ふくせい]もまた同[おな]じ記憶[きおく]を持[も]つ以上[いじょう]、同一[どういつ]の人格[じんかく]と認[みと]めないわけにはいかない。」",
      "委員[いいん]たちは、理論[りろん]上[じょう]は何人分[なんにんぶん]もの複製[ふくせい]が可能[かのう]になる未来[みらい]を思[おも]い描[えが]き、戦慄[せんりつ]を禁[きん]じ得[え]なかった。その結果[けっか]、社会[しゃかい]の基盤[きばん]が崩[くず]れ去[さ]る事態[じたい]も招[まね]きかねない。",
      "「死[し]なない存在[そんざい]が法的[ほうてき]人格[じんかく]を持[も]つとなれば、相続[そうぞく]や財産権[ざいさんけん]の制度[せいど]は根底[こんてい]から書[か]き換[か]えられずにはすまない」と一人[ひとり]の法学者[ほうがくしゃ]が指摘[してき]した。",
      "三日目[みっかめ]の深夜[しんや]、礼[れい]は委員[いいん]たちにこう提案[ていあん]した。「完全[かんぜん]な答[こた]えが出[で]ない以上[いじょう]、我々[われわれ]は、被験者[ひけんしゃ]の意思[いし]を最優先[さいゆうせん]に尊重[そんちょう]する原則[げんそく]を置[お]くしかあるまい。」",
      "委員会[いいんかい]は、複製[ふくせい]の数[かず]に上限[じょうげん]を設[もう]け、本人[ほんにん]の明示的[めいじてき]同意[どうい]がない限[かぎ]り複製[ふくせい]を禁[きん]じる暫定的[ざんていてき]勧告[かんこく]を可決[かけつ]した。だが、礼[れい]はそれで問題[もんだい]が解決[かいけつ]されたとは到底[とうてい]信[しん]じられなかった。",
      "彼[かれ]は帰路[きろ]の車[くるま]の中[なか]で、人間[にんげん]という種[しゅ]が自[みずか]らの進化[しんか]を律[りつ]する力[ちから]を失[うしな]う日[ひ]が来[き]るのではないかと、深[ふか]い不安[ふあん]を覚[おぼ]えずにはいられなかった。人[ひと]を超[こ]える者[もの]の倫理[りんり]は、まだ書[か]かれ始[はじ]めたばかりである。"
    ],
    translation: [
      "The UN Advisory Committee deliberated for three days on the recognition of the legal status of the first subject whose consciousness had been migrated into a digital space.",
      "Rei, one of the committee members and a bio-ethicist, said in his opening remarks: 'What we are about to ask is nothing less than the definition of the human being. It is by no means a subject to be treated lightly.'",
      "At the center of the deliberations was the question of whether identity would be preserved when consciousness became replicable. Could one say that a duplicated mind inherited the continuity of the original personality?",
      "'Even if a replicated consciousness is an existence equivalent to the original personality, insofar as it is a duplication, it should be regarded as a separate subject,' argued a committee member of the technological faction.",
      "But Rei cautiously dissented. 'Personal identity is nothing other than an accumulation of subjective experiences supported by the continuity of memory. Since a duplicate also possesses the same memories, we cannot help but recognize it as the same person.'",
      "The committee members envisioned a future in which, in theory, countless duplications would become possible, and they could not suppress a shudder. The consequences might invite a collapse of the very foundations of society.",
      "'If immortal beings were to possess legal personhood, the institutions of inheritance and property rights would inevitably have to be rewritten from the ground up,' one legal scholar pointed out.",
      "Late on the third night, Rei made this proposal to the committee: 'Since no complete answer is forthcoming, we have no choice but to establish the principle that the will of the subject is given the highest priority and respect.'",
      "The committee adopted an interim recommendation capping the number of duplications and prohibiting duplication absent the explicit consent of the original. Yet Rei could not possibly believe that this had resolved the problem.",
      "On the journey home, in his car, he could not help but feel a deep unease that the day might come when the human species would lose the power to govern its own evolution. The ethics of those who surpass humanity has only just begun to be written."
    ],
    vocab: [
      { word: "諮問委員会", reading: "しこんいいんかい", meaning: "advisory committee" },
      { word: "意識", reading: "いしき", meaning: "consciousness" },
      { word: "移行", reading: "いこう", meaning: "migration/transfer" },
      { word: "被験者", reading: "ひけんしゃ", meaning: "subject (of an experiment)" },
      { word: "生命倫理学者", reading: "せいめいりんりがくしゃ", meaning: "bio-ethicist" },
      { word: "複製", reading: "ふくせい", meaning: "duplication" },
      { word: "同一性", reading: "どういつせい", meaning: "identity/sameness" },
      { word: "人格", reading: "じんかく", meaning: "personhood" },
      { word: "連続性", reading: "れんぞくせい", meaning: "continuity" },
      { word: "戦慄", reading: "せんりつ", meaning: "shudder/dread" },
      { word: "相続", reading: "そうぞく", meaning: "inheritance" },
      { word: "財産権", reading: "ざいさんけん", meaning: "property rights" },
      { word: "法学者", reading: "ほうがくしゃ", meaning: "legal scholar" },
      { word: "暫定的", reading: "ざんていてき", meaning: "interim/provisional" },
      { word: "勧告", reading: "かんこく", meaning: "recommendation" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-63 — A genetic privacy case (遺伝の秘密を守る)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-63",
    title: "遺伝[いでん]の秘密[ひみつ]を守[まも]る",
    titleReading: "いでんのひみつをまもる",
    level: "N1",
    summary: "A woman sues a laboratory for selling her genetic data without genuine consent, igniting a national privacy debate.",
    estMinutes: 7,
    tags: ["law", "privacy", "genetics"],
    body: [
      "個人[こじん]の遺伝情報[いでんじょうほう]の取扱[とりあつか]いを巡[めぐ]る前代未聞[ぜんだいみもん]の裁判[さいばん]が、東京地方裁判所[とうきょうちほうさいばんしょ]で始[はじ]まった。",
      "原告[げんこく]の桐生[きりゅう]は、五年前[ごねんまえ]に受[う]けた検査[けんさ]の際[さい]、同意書[どういしょ]の小[ちい]さな文字[もじ]に気[き]づかず、自身[じしん]のDNAデータが製薬会社[せいやくがいしゃ]に売却[ばいきゃく]されることを許[ゆる]してしまった。",
      "「私[わたし]の細胞[さいぼう]の一片[いっぺん]が、私[わたし]の知[し]らぬ間[あいだ]に商品[しょうひん]として流通[りゅうつう]したという事実[じじつ]は、到底[とうてい]受[う]け入[い]れられるものではない」と彼女[かのじょ]は法廷[ほうてい]で訴[うった]えた。",
      "弁護団[べんごだん]は、遺伝情報[いでんじょうほう]が個人[こじん]の尊厳[そんげん]を構成[こうせい]する核心[かくしん]である以上[いじょう]、本人[ほんにん]の明示的[めいじてき]同意[どうい]がない限[かぎ]り、第三者[だいさんしゃ]への提供[ていきょう]は許[ゆる]されないと主張[しゅちょう]した。",
      "一方[いっぽう]、被告[ひこく]の検査機関[けんさきかん]は、「同意書[どういしょ]に署名[しょめい]した以上[いじょう]、契約上[けいやくじょう]の義務[ぎむ]は履行[りこう]されている」と反論[はんろん]した。彼[かれ]らの主張[しゅちょう]は、法的形式[ほうてきけいしき]の遵守[じゅんしゅ]に過[す]ぎなかった。",
      "裁判長[さいばんちょう]は、被告側[ひこくがわ]の形式的[けいしきてき]な反論[はんろん]を聞[き]き、深[ふか]い懸念[けねん]を示[しめ]さずにはおかなかった。「形式[けいしき]が整[ととの]っていても、実質的[じっしつてき]な同意[どうい]が得[え]られていなければ、契約[けいやく]は無効[むこう]となり得[え]る。」",
      "数日後[すうじつご]、判決[はんけつ]が言[い]い渡[わた]された。裁判所[さいばんしょ]は、遺伝情報[いでんじょうほう]の特段[とくだん]の重要性[じゅうようせい]を認定[にんてい]し、被告[ひこく]に賠償[ばいしょう]を命[めい]じた。",
      "だが、桐生[きりゅう]にとって真[しん]の勝利[しょうり]は金銭[きんせん]ではなかった。彼女[かのじょ]が望[のぞ]んだのは、法[ほう]の変革[へんかく]にほかならなかった。何故[なぜ]なら、個人[こじん]の尊厳[そんげん]を護[まも]るのは、法[ほう]の本来的[ほんらいてき]役割[やくわり]だからである。",
      "判決[はんけつ]は、遺伝情報保護法[いでんじょうほうほごほう]の制定[せいてい]を国会[こっかい]に促[うなが]す内容[ないよう]を含[ふく]んでいた。法学者[ほうがくしゃ]たちは、これを二十年来[にじゅうねんらい]の節目[ふしめ]と評価[ひょうか]した。",
      "桐生[きりゅう]は法廷[ほうてい]を出[で]る際[さい]、記者団[きしゃだん]に短[みじか]く語[かた]った。「私[わたし]のDNAは、私[わたし]自身[じしん]です。これからは、誰[だれ]も気[き]づかない内[うち]に奪[うば]われることがないことを願[ねが]ってやみません。」"
    ],
    translation: [
      "An unprecedented trial concerning the handling of personal genetic information began at the Tokyo District Court.",
      "The plaintiff, Kiryu, had failed to notice the small print on a consent form during an examination five years earlier, and had inadvertently permitted her DNA data to be sold to a pharmaceutical company.",
      "'The fact that a fragment of my cells circulated as a commodity without my knowledge is utterly unacceptable,' she asserted in court.",
      "The defense team argued that, since genetic information constitutes the core of personal dignity, its provision to third parties must not be permitted without the explicit consent of the individual concerned.",
      "The defendant, the testing agency, countered: 'Insofar as the consent form was signed, the contractual obligation has been fulfilled.' Their argument amounted to no more than compliance with legal formalities.",
      "The presiding judge could not refrain from expressing deep concern upon hearing the formalistic rebuttal from the defense. 'Even if the formalities are satisfied, if substantive consent has not been obtained, the contract may be rendered void.'",
      "Days later, the verdict was handed down. The court recognized the exceptional importance of genetic information and ordered the defendant to pay damages.",
      "For Kiryu, however, the true victory was not monetary. What she sought was nothing other than legal reform. For safeguarding personal dignity is the inherent role of the law.",
      "The ruling included a recommendation urging the Diet to enact a Genetic Information Protection Act. Legal scholars hailed it as a milestone of the past two decades.",
      "As Kiryu left the courtroom, she briefly addressed the press corps. 'My DNA is myself. I sincerely hope that from now on, no one will have it taken from them unnoticed.'"
    ],
    vocab: [
      { word: "遺伝情報", reading: "いでんじょうほう", meaning: "genetic information" },
      { word: "取扱", reading: "とりあつかい", meaning: "handling" },
      { word: "前代未聞", reading: "ぜんだいみもん", meaning: "unprecedented" },
      { word: "原告", reading: "げんこく", meaning: "plaintiff" },
      { word: "同意書", reading: "どういしょ", meaning: "consent form" },
      { word: "細胞", reading: "さいぼう", meaning: "cell" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "核心", reading: "かくしん", meaning: "core" },
      { word: "明示的", reading: "めいじてき", meaning: "explicit" },
      { word: "検査機関", reading: "けんさきかん", meaning: "testing institution" },
      { word: "履行", reading: "りこう", meaning: "fulfillment" },
      { word: "遵守", reading: "じゅんしゅ", meaning: "compliance" },
      { word: "無効", reading: "むこう", meaning: "void/invalid" },
      { word: "節目", reading: "ふしめ", meaning: "milestone/juncture" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-64 — An AI governance summit (人工知能を統治する夜)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-64",
    title: "人工知能[じんこうちのう]を統治[とうち]する夜[よる]",
    titleReading: "じんこうちのうをとうちするよる",
    level: "N1",
    summary: "An international summit seeks to govern superhuman AI, but the major powers cannot agree on a verification regime.",
    estMinutes: 8,
    tags: ["ai", "governance", "diplomacy"],
    body: [
      "山岳地帯[さんがくちたい]に位置[いち]する古城[こじょう]で、第一次[だいいちじ]AI統治[とうち]サミットが開[ひら]かれた。米欧亜[べいおうあ]の三大経済圏[さんだいけいざいけん]の代表[だいひょう]が、超人的知能[ちょうじんてきちのう]の規制[きせい]を協議[きょうぎ]するため集結[しゅうけつ]したのである。",
      "議長[ぎちょう]の老[おい]いた外交官[がいこうかん]は開会[かいかい]の辞[じ]でこう語[かた]った。「我々[われわれ]がここに集[あつ]まったのは、人類[じんるい]の未来[みらい]を護[まも]るためである。責任[せきにん]の重[おも]みを決[けっ]して忘[わす]れてはならない。」",
      "米国側[べいこくがわ]は、「技術[ぎじゅつ]の発展[はってん]を止[と]めることはできず、むしろ安全[あんぜん]な開発[かいはつ]を前提[ぜんてい]とする国際[こくさい]枠組[わくぐ]みの構築[こうちく]が急務[きゅうむ]である」と主張[しゅちょう]した。",
      "一方[いっぽう]、欧州側[おうしゅうがわ]は「事前[じぜん]の安全性[あんぜんせい]証明[しょうめい]を義務付[ぎむづ]ける予防[よぼう]原則[げんそく]こそが、不可欠[ふかけつ]である」と、強[つよ]い主張[しゅちょう]を展開[てんかい]した。",
      "三日[みっか]にわたる交渉[こうしょう]は難航[なんこう]を極[きわ]めた。各国[かっこく]が自[みずか]らの経済[けいざい]利益[りえき]を優先[ゆうせん]する余[あま]り、合意[ごうい]形成[けいせい]は遅々[ちち]として進[すす]まなかった。",
      "「国家[こっか]の競争力[きょうそうりょく]を犠牲[ぎせい]にしてまで規制[きせい]に従[したが]うわけにはいかない」と亜[あ]側[がわ]の代表[だいひょう]が反発[はんぱつ]する場面[ばめん]もあった。国家主義[こっかしゅぎ]の影[かげ]が会議[かいぎ]に落[お]ちていた。",
      "議長[ぎちょう]は、決裂[けつれつ]を避[さ]けるため、妥協案[だきょうあん]を提示[ていじ]した。それは、透明性[とうめいせい]報告[ほうこく]義務[ぎむ]と監視[かんし]体制[たいせい]の段階的[だんかいてき]導入[どうにゅう]を骨子[こし]とするものであった。",
      "各国[かっこく]の代表[だいひょう]は、最終的[さいしゅうてき]にこの骨子[こし]を受[う]け入[い]れた。だが、監視機関[かんしきかん]の権限[けんげん]に関[かん]する条項[じょうこう]は、後[のち]の協議[きょうぎ]に委[ゆだ]ねられた。",
      "議長[ぎちょう]は閉会[へいかい]に際[さい]し、「完全[かんぜん]な合意[ごうい]とは言[い]えないものの、共通[きょうつう]の第一歩[だいいっぽ]を踏[ふ]み出[だ]せたことは意義深[いぎふか]い」と述[の]べた。その声[こえ]には、安堵[あんど]と共[とも]に疲労[ひろう]が混[ま]じっていた。",
      "城[しろ]を出[で]る代表[だいひょう]たちの背後[はいご]で、夕陽[ゆうひ]が山々[やまやま]を染[そ]めていた。AIという新[あたら]しい主権[しゅけん]を、人類[じんるい]が自[みずか]らの手[て]で律[りつ]し得[え]るかどうか。その答[こた]えは、まだ見[み]えない。"
    ],
    translation: [
      "At an ancient castle nestled in a mountainous region, the First AI Governance Summit was convened. Representatives from the three great economic blocs of America, Europe, and Asia gathered to deliberate on the regulation of superhuman intelligence.",
      "The chair, an elderly diplomat, said in his opening address: 'We have gathered here to safeguard the future of humanity. We must never forget the weight of our responsibility.'",
      "The American delegation argued: 'The march of technology cannot be halted; rather, it is an urgent task to construct an international framework premised on safe development.'",
      "Meanwhile, the European side made a forceful case: 'It is the precautionary principle, mandating prior proof of safety, that is indispensable.'",
      "The three days of negotiations were extraordinarily arduous. Because each nation prioritized its own economic interests, the formation of consensus progressed at a glacial pace.",
      "'We cannot abide by regulations at the expense of national competitiveness,' the Asian representative retorted at one point. The shadow of nationalism fell over the proceedings.",
      "To avert a breakdown, the chair presented a compromise proposal. Its essence was a phased introduction of transparency reporting obligations and a monitoring regime.",
      "The representatives of each nation ultimately accepted this framework. However, the clauses concerning the authority of the monitoring body were left to subsequent negotiations.",
      "At the closing, the chair remarked: 'Although we cannot claim a complete agreement, the fact that we have taken a common first step is profoundly significant.' His voice mingled fatigue with relief.",
      "Behind the delegates departing the castle, the setting sun dyed the mountain ranges. Whether humanity can, by its own hand, govern the new sovereignty called AI — that answer remains unseen."
    ],
    vocab: [
      { word: "山岳地帯", reading: "さんがくちたい", meaning: "mountainous region" },
      { word: "古城", reading: "こじょう", meaning: "ancient castle" },
      { word: "統治", reading: "とうち", meaning: "governance" },
      { word: "超人的知能", reading: "ちょうじんてきちのう", meaning: "superhuman intelligence" },
      { word: "規制", reading: "きせい", meaning: "regulation" },
      { word: "協議", reading: "きょうぎ", meaning: "deliberation" },
      { word: "外交官", reading: "がいこうかん", meaning: "diplomat" },
      { word: "義務付", reading: "ぎむづける", meaning: "to mandate" },
      { word: "予防原則", reading: "よぼうげんそく", meaning: "precautionary principle" },
      { word: "難航", reading: "なんこう", meaning: "rough going" },
      { word: "競争力", reading: "きょうそうりょく", meaning: "competitiveness" },
      { word: "妥協案", reading: "だきょうあん", meaning: "compromise proposal" },
      { word: "骨子", reading: "こし", meaning: "framework/essence" },
      { word: "安堵", reading: "あんど", meaning: "relief" },
      { word: "主権", reading: "しゅけん", meaning: "sovereignty" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-65 — A historical memory study (記憶の考古学)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-65",
    title: "記憶[きおく]の考古学[こうこがく]",
    titleReading: "きおくのこうこがく",
    level: "N1",
    summary: "A historian discovers that a national founding myth was fabricated in the 19th century, igniting a cultural battle.",
    estMinutes: 9,
    tags: ["history", "memory", "academia"],
    body: [
      "史学者[しがくしゃ]の菅[すが]は、二十年[にじゅうねん]にわたる調査[ちょうさ]の末[すえ]、この国[くに]の建国[けんこく]神話[しんわ]が十九世紀[じゅうきゅうせいき]に意図的[いとてき]に捏造[ねつぞう]されたものであるという結論[けつろん]に達[たっ]した。",
      "彼[かれ]が発掘[はっくつ]した古文書[こもんじょ]は、建国[けんこく]の祖[そ]とされる英雄[えいゆう]が、実[じつ]は侵略者[しんりゃくしゃ]であったことを示唆[しさ]していた。",
      "「長年[ながねん]、国民[こくみん]が信[しん]じてきた物語[ものがたり]が虚構[きょこう]であったことを示[しめ]すのは、決[けっ]して容易[ようい]なことではない」と菅[すが]は学会[がっかい]で発表[はっぴょう]した。",
      "発表[はっぴょう]は学界[がっかい]に限[かぎ]らず、社会[しゃかい]全体[ぜんたい]に衝撃[しょうげき]を与[あた]えた。愛国的[あいこくてき]団体[だんたい]からは激[はげ]しい非難[ひなん]が殺到[さっとう]した。",
      "「過去[かこ]を否定[ひてい]することは、現在[げんざい]の国[くに]の正当性[せいとうせい]を損[そこ]なう行為[こうい]だ」という批判[ひはん]が、日[ひ]を追[お]うごとに膨[ふく]らんだ。",
      "だが、菅[すが]は自[みずか]らの立場[たちば]を撤回[てっかい]するつもりは毛頭[もうとう]なかった。彼[かれ]にとって、歴史[れきし]の真実[しんじつ]を隠[かく]すことは、学者[がくしゃ]としての良心[りょうしん]に背[そむ]く行為[こうい]であった。",
      "歴史[れきし]というものは、都合[つごう]の悪[わる]い事実[じじつ]を隠蔽[いんぺい]してまで美化[びか]されるべきではない。美化[びか]された記憶[きおく]は、結局[けっきょく]、未来[みらい]の世代[せだい]に禍根[かこん]を残[のこ]す。",
      "菅[すが]の著書[ちょしょ]が出版[しゅっぱん]されるや否[いな]や、書店[しょてん]から飛[と]ぶように売[う]れた。市民[しみん]の間[あいだ]で、歴史[れきし]を学[まな]び直[なお]す動[うご]きが急速[きゅうそく]に広[ひろ]まった。",
      "しかし、一部[いちぶ]の過激派[かげきは]は菅[すが]の自宅[じたく]に脅迫状[きょうはくじょう]を送[おく]りつけた。彼[かれ]の家族[かぞく]まで標的[ひょうてき]にする卑劣[ひれつ]な行為[こうい]に、学界[がっかい]は怒[いか]りを覚[おぼ]えずにはいられなかった。",
      "三年[さんねん]後[ご]、教育委員会[きょういくいいんかい]は歴史[れきし]教科書[きょうかしょ]の改訂[かいてい]を決定[けってい]した。記憶[きおく]の考古学[こうこがく]は、人[ひと]の心[こころ]に深[ふか]く根[ね]を下[お]ろした神話[しんわ]を、慎重[しんちょう]に、しかし確実[かくじつ]に、問[と]い直[なお]し始[はじ]めたのである。"
    ],
    translation: [
      "After twenty years of research, the historian Suga reached the conclusion that his nation's founding myth had been deliberately fabricated in the nineteenth century.",
      "The ancient documents he had unearthed suggested that the hero revered as the founder of the nation was, in fact, an invader.",
      "'Revealing that the story the people have long believed is a fiction is by no means an easy task,' Suga announced at the academic society.",
      "The announcement sent shockwaves not only through academia but through society at large. Furious condemnation poured in from patriotic organizations.",
      "The criticism — that 'denying the past undermines the legitimacy of the present state' — swelled with each passing day.",
      "Yet Suga had not the slightest intention of retracting his position. To him, concealing the truth of history was an act that betrayed his conscience as a scholar.",
      "History must not be embellished to the point of concealing inconvenient facts. Beautified memory ultimately leaves a legacy of bitterness for future generations.",
      "No sooner was Suga's book published than it flew off bookstore shelves. Among citizens, a movement to re-learn history spread rapidly.",
      "However, a faction of extremists sent threatening letters to Suga's home. The academic community could not help but feel outrage at the despicable act of targeting even his family.",
      "Three years later, the board of education decided to revise the history textbooks. The archaeology of memory had begun, cautiously yet unmistakably, to question the myths deeply rooted in the human heart."
    ],
    vocab: [
      { word: "史学者", reading: "しがくしゃ", meaning: "historian" },
      { word: "建国神話", reading: "けんこくしんわ", meaning: "founding myth" },
      { word: "捏造", reading: "ねつぞう", meaning: "fabrication" },
      { word: "古文書", reading: "こもんじょ", meaning: "ancient document" },
      { word: "侵略者", reading: "しんりゃくしゃ", meaning: "invader" },
      { word: "虚構", reading: "きょこう", meaning: "fiction" },
      { word: "愛国的", reading: "あいこくてき", meaning: "patriotic" },
      { word: "正当性", reading: "せいとうせい", meaning: "legitimacy" },
      { word: "撤回", reading: "てっかい", meaning: "retraction" },
      { word: "毛頭", reading: "もうとう", meaning: "not in the least" },
      { word: "隠蔽", reading: "いんぺい", meaning: "concealment" },
      { word: "過激派", reading: "かげきは", meaning: "extremist faction" },
      { word: "脅迫状", reading: "きょうはくじょう", meaning: "threatening letter" },
      { word: "卑劣", reading: "ひれつ", meaning: "despicable" },
      { word: "禍根", reading: "かこん", meaning: "legacy of bitterness" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-66 — An environmental justice trial (毒の川と沈黙の村)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-66",
    title: "毒[どく]の川[かわ]と沈黙[ちんもく]の村[むら]",
    titleReading: "どくのかわとちんもくのむら",
    level: "N1",
    summary: "A rural village, long silenced by a polluting corporation, finally brings its case to court after a child falls ill.",
    estMinutes: 8,
    tags: ["justice", "environment", "trial"],
    body: [
      "山間[さんかん]の小[ちい]さな村[むら]で、長年[ながねん]にわたり、化学[かがく]工場[こうじょう]の廃液[はいえき]が川[かわ]に流[なが]され続[つづ]けられていた。村民[そんみん]はそれを知[し]りながら、雇用[こよう]を失[うしな]うことを恐[おそ]れて沈黙[ちんもく]を守[まも]っていた。",
      "転機[てんき]が訪[おとず]れたのは、七歳[ななさい]の少女[しょうじょ]が原因[げんいん]不明[ふめい]の病[やまい]で倒[たお]れた時[とき]であった。彼女[かのじょ]の父[ちち]である鉄[てつ]は、ついに沈黙[ちんもく]を破[やぶ]ることを決意[けつい]した。",
      "「子供[こども]が犠牲[ぎせい]になるまで黙[だま]っていれば、それはもはや忍耐[にんたい]ではなく、共謀[きょうぼう]に過[す]ぎない」と鉄[てつ]は村民[そんみん]の前[まえ]で語[かた]った。",
      "多[おお]くの村民[そんみん]は当初[とうしょ]、鉄[てつ]の行動[こうどう]に反発[はんぱつ]した。工場[こうじょう]を敵[てき]に回[まわ]せば、村[むら]の経済[けいざい]が崩壊[ほうかい]しかねないという恐怖[きょうふ]があったからである。",
      "しかし、鉄[てつ]は怯[ひる]むことなく、工場[こうじょう]を相手取[あいてど]って損害賠償[そんがいばいしょう]請求[せいきゅう]訴訟[そしょう]を起[お]こした。彼[かれ]の決意[けつい]は固[かた]かった。",
      "裁判[さいばん]は、巨大企業[きょだいきぎょう]の法務部[ほうむぶ]と、一人[ひとり]の村人[むらびと]という、力量[りきりょう]の隔[へだ]たりを思[おも]わせる構図[こうず]で始[はじ]まった。",
      "弁護士[べんごし]の楓[かえで]は、工場側[こうじょうがわ]が内部[ないぶ]の汚染[おせん]データを隠匿[いんとく]していた証拠[しょうこ]を、原告席[げんこくせき]の前[まえ]に提示[ていじ]した。「このデータが存在[そんざい]した以上[いじょう]、被告[ひこく]が長年[ながねん]にわたり、故意[こい]に危険[きけん]を隠蔽[いんぺい]していたことは明[あき]らかである。」",
      "工場側[こうじょうがわ]は必死[ひっし]に反論[はんろん]を試[こころ]みたが、証拠[しょうこ]の山[やま]は動[うご]かない。裁判長[さいばんちょう]は、企業[きぎょう]の責任[せきにん]を厳[きび]しく問[と]うた。",
      "判決[はんけつ]は、工場[こうじょう]に対[たい]して多額[たがく]の賠償[ばいしょう]支払[しはら]いと、廃液[はいえき]処理[しょり]施設[しせつ]の完全[かんぜん]改修[かいしゅう]を命[めい]じた。村民[そんみん]たちは法廷[ほうてい]で涙[なみだ]を流[なが]した。",
      "鉄[てつ]は判決[はんけつ]後[ご]、記者[きしゃ]に語[かた]った。「正義[せいぎ]は、沈黙[ちんもく]を破[やぶ]る勇気[ゆうき]ある人[ひと]がいる限[かぎ]り、必[かなら]ず勝[か]つ。」毒[どく]の川[かわ]は、今[いま]、少[すこ]しずつ澄[す]み始[はじ]めている。"
    ],
    translation: [
      "In a small village in the mountains, the effluent of a chemical plant had been flowing into the river for years. The villagers knew of it, yet out of fear of losing employment they kept their silence.",
      "The turning point came when a seven-year-old girl collapsed from an illness of unknown cause. Her father, Tetsu, finally resolved to break the silence.",
      "'If we remain silent until a child becomes a victim, it is no longer forbearance but complicity,' Tetsu told the villagers.",
      "Many villagers initially opposed Tetsu's actions. There was fear that making an enemy of the factory might cause the village's economy to collapse.",
      "Yet Tetsu, undaunted, brought a lawsuit for damages against the factory. His resolve was firm.",
      "The trial began with a configuration that recalled the disparity in strength between the legal department of a giant corporation and a single villager.",
      "The attorney Kaede presented before the plaintiff's bench evidence that the factory side had concealed internal pollution data. 'Inasmuch as this data existed, it is clear that the defendant knowingly concealed the danger for years.'",
      "The factory side desperately attempted to rebut, but the mountain of evidence was irrefutable. The presiding judge sternly called the corporation to account.",
      "The judgment ordered the factory to pay substantial damages and to fully renovate its effluent treatment facilities. The villagers wept in the courtroom.",
      "After the verdict, Tetsu told reporters: 'Justice will always prevail, as long as there are those with the courage to break the silence.' The poisoned river is now, little by little, beginning to run clear."
    ],
    vocab: [
      { word: "山間", reading: "さんかん", meaning: "mountain recesses" },
      { word: "廃液", reading: "はいえき", meaning: "effluent/waste liquid" },
      { word: "転機", reading: "てんき", meaning: "turning point" },
      { word: "原因不明", reading: "げんいんふめい", meaning: "of unknown cause" },
      { word: "犠牲", reading: "ぎせい", meaning: "victim/sacrifice" },
      { word: "共謀", reading: "きょうぼう", meaning: "complicity" },
      { word: "崩壊", reading: "ほうかい", meaning: "collapse" },
      { word: "損害賠償", reading: "そんがいばいしょう", meaning: "compensation for damages" },
      { word: "隠匿", reading: "いんとく", meaning: "concealment" },
      { word: "隠蔽", reading: "いんぺい", meaning: "cover-up" },
      { word: "多額", reading: "たがく", meaning: "a large sum" },
      { word: "改修", reading: "かいしゅう", meaning: "renovation" },
      { word: "正義", reading: "せいぎ", meaning: "justice" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-67 — A media literacy movement (偽を透かす目の教育)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-67",
    title: "偽[にせ]を透[す]かす目[め]の教育[きょういく]",
    titleReading: "にせをすかすめのきょういく",
    level: "N1",
    summary: "A high school teacher launches a media literacy movement after her students fall for a viral disinformation campaign.",
    estMinutes: 7,
    tags: ["education", "media", "literacy"],
    body: [
      "高校教師[こうこうきょうし]の柊[ひいらぎ]は、生徒[せいと]たちが偽情報[ぎじょうほう]を信[しん]じて拡散[かくさん]した事件[じけん]を契機[けいき]に、メディア・リテラシー教育[きょういく]の必要性[ひつようせい]を痛感[つうかん]した。",
      "「情報[じょうほう]を鵜呑[うのみ]にする世代[せだい]が、社会[しゃかい]を担[にな]うことになるのは危機[きき]である」と彼女[かのじょ]は同僚[どうりょう]たちに訴[うった]えた。",
      "しかし、学校側[がっこうがわ]は「既存[きぞん]のカリキュラムに追加[ついか]する余裕[よよい]はない」と消極的[しょうきょくてき]であった。柊[ひいらぎ]は、まず自[みずか]らの授業[じゅぎょう]で小[ちい]さな実践[じっせん]を始[はじ]めるしかなかった。",
      "彼女[かのじょ]は生徒[せいと]たちに、一[ひと]つのニュースが、どのように作[つく]られ、どのように拡散[かくさん]されるのかを追跡[ついせき]させた。",
      "生徒[せいと]たちは、見出[みだ]しだけで内容[ないよう]を判断[はんだん]する危険性[きけんせい]を、身[み]を以[もっ]て学[まな]んだ。「いいね」の数[かず]が多[おお]いほど真実[しんじつ]だと思[おも]い込[こ]む傾向[けいこう]にあった。",
      "柊[ひいらぎ]は、生徒[せいと]たちが偽[にせ]情報[じょうほう]を自[みずか]ら見抜[みぬ]く力[ちから]を養[やしな]うための教材[きょうざい]を、毎週[まいしゅう]少[すこ]しずつ作[つく]り上[あ]げていった。",
      "一年後[いちねんご]、生徒[せいと]たちは、地域[ちいき]の大人[おとな]たちに向[む]けてワークショップを開[ひら]くまでに成長[せいちょう]した。若者[わかもの]が大人[おとな]を教[おし]える、逆転[ぎゃくてん]の構図[こうず]であった。",
      "この動[うご]きは、近隣[きんりん]の学校[がっこう]にも波及[はきゅう]した。教育委員会[きょういくいいんかい]は、柊[ひいらぎ]の教材[きょうざい]を公式[こうしき]に採用[さいよう]し、全市[ぜんし]の学校[がっこう]で導入[どうにゅう]を決定[けってい]した。",
      "柊[ひいらぎ]は、この運動[うんどう]が全国[ぜんこく]に広[ひろ]がることを願[ねが]ってやまなかった。彼女[かのじょ]にとって、教育[きょういく]とは、未来[みらい]の市民[しみん]を育[はぐく]む神聖[しんせい]な務[つと]めであった。",
      "「偽[にせ]を透[す]かす目[め]を持[も]った市民[しみん]が増[ふ]える限[かぎ]り、民主主義[みんしゅしゅぎ]は決[けっ]して滅[ほろ]びない」と彼女[かのじょ]は卒業式[そつぎょうしき]の式辞[しきじ]で語[かた]った。その言葉[ことば]は、深[ふか]く生徒[せいと]たちの胸[むね]に刻[きざ]まれた。"
    ],
    translation: [
      "Hiiragi, a high school teacher, was struck by the necessity of media literacy education after an incident in which her students believed and spread disinformation.",
      "'That a generation which swallows information whole should come to bear society is a crisis,' she told her colleagues.",
      "But the school was lukewarm, claiming there was no room to add to the existing curriculum. Hiiragi had no choice but to begin a small experiment within her own classroom.",
      "She had her students trace how a single news item was produced and how it spread.",
      "The students learned, through direct experience, the danger of judging content by headline alone. They had tended to assume that the more 'likes' something had, the truer it was.",
      "Week by week, Hiiragi slowly built up teaching materials to cultivate in her students the power to see through disinformation themselves.",
      "A year later, the students had grown to the point of running workshops for local adults. It was an inverted configuration — the young teaching the grown.",
      "The movement rippled out to neighboring schools. The board of education officially adopted Hiiragi's materials and decided to introduce them in schools across the entire city.",
      "Hiiragi sincerely wished for this movement to spread nationwide. To her, education was a sacred task of nurturing future citizens.",
      "'As long as citizens with eyes that can see through falsehoods increase, democracy will never perish,' she said in her speech at the graduation ceremony. Those words were deeply engraved in the students' hearts."
    ],
    vocab: [
      { word: "偽情報", reading: "ぎじょうほう", meaning: "disinformation" },
      { word: "契機", reading: "けいき", meaning: "occasion/catalyst" },
      { word: "鵜呑", reading: "うのみ", meaning: "swallowing whole" },
      { word: "消極的", reading: "しょうきょくてき", meaning: "passive" },
      { word: "実践", reading: "じっせん", meaning: "practice" },
      { word: "追跡", reading: "ついせき", meaning: "tracing" },
      { word: "見出", reading: "みだし", meaning: "headline" },
      { word: "危険性", reading: "きけんせい", meaning: "risk" },
      { word: "見抜", reading: "みぬく", meaning: "to see through" },
      { word: "波及", reading: "はきゅう", meaning: "ripple effect" },
      { word: "神聖", reading: "しんせい", meaning: "sacred" },
      { word: "式辞", reading: "しきじ", meaning: "ceremonial address" },
      { word: "透かす", reading: "すかす", meaning: "to see through" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-68 — A linguistic revival (消えゆく言葉を救う)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-68",
    title: "消[き]えゆく言葉[ことば]を救[すく]う",
    titleReading: "きえゆくことばをすくう",
    level: "N1",
    summary: "A linguist works to revive a dying indigenous language with only seven elderly speakers left.",
    estMinutes: 8,
    tags: ["linguistics", "culture", "revival"],
    body: [
      "北[きた]の孤島[ことう]で、わずか七人[ななにん]の高齢者[こうれいしゃ]だけが話[はな]す言語[げんご]が消[き]えようとしていた。言語学者[げんごがくしゃ]の榛[はる]は、その言語[げんご]の記録[きろく]と復興[ふっこう]に生涯[しょうがい]を捧[ささ]げた。",
      "彼[かれ]が最初[さいしょ]に島[しま]を訪[おとず]れた時[とき]、高齢者[こうれいしゃ]たちは、自[みずか]らの言葉[ことば]が時代[じだい]遅[おく]れであると思[おも]い込[こ]んでいた。彼[かれ]らは若者[わかもの]に継承[けいしょう]しようとすらしなかった。",
      "榛[はる]は、言葉[ことば]が消[き]えることは、世界観[せかいかん]そのものが消[き]えることを意味[いみ]すると訴[うった]えた。「一[ひと]つの言語[げんご]の喪失[そうしつ]は、人類[じんるい]の記憶[きおく]の一部[いちぶ]の死滅[しめつ]に等[ひと]しい。」",
      "彼[かれ]は、高齢者[こうれいしゃ]たちの発音[はつおん]を録音[ろくおん]し、文法[ぶんぽう]を体系化[たいけいか]し、辞書[じしょ]を編纂[へんさん]した。それは気[き]の遠[とお]くなるような作業[さぎょう]であった。",
      "三年後[さんねんご]、榛[はる]は島[しま]の子供[こども]たちに、祖先[そせん]の言葉[ことば]を教[おし]える教室[きょうしつ]を開[ひら]いた。最初[さいしょ]は数人[すうにん]だった生徒[せいと]は、次第[しだい]に増[ふ]えていった。",
      "「私[わたし]たちの言葉[ことば]が、こんなにも美[うつく]しいものだったなんて」と、一人[ひとり]の少女[しょうじょ]が涙[なみだ]を浮[う]かべて語[かた]った。その瞬間[しゅんかん]、榛[はる]は、長年[ながねん]の苦労[くろう]が報[むく]われる思[おも]いがした。",
      "しかし、復興[ふっこう]の道[みち]は平坦[へいたん]ではなかった。行政[ぎょうせい]の支援[しえん]は不十分[ふじゅうぶん]で、教室[きょうしつ]の維持費[いじひ]は榛[はる]の私財[しざい]を食[く]い潰[つぶ]していった。",
      "それにもかかわらず、榛[はる]は諦[あきら]めることはなかった。彼[かれ]にとって、言葉[ことば]を救[すく]うことこそが、存在[そんざい]の意義[いぎ]であったからだ。",
      "十年後[じゅうねんご]、その言語[げんご]を話[はな]す若者[わかもの]は、百人[ひゃくにん]を超[こ]えた。島[しま]の日常[にちじょう]に、再[ふたた]び祖先[そせん]の言葉[ことば]が響[ひび]き始[はじ]めた。",
      "榛[はる]は、最後[さいご]の話者[わしゃ]であった老[おい]いた女性[じょせい]の手[て]を握[にぎ]り、静[しず]かに語[かた]った。「あなたの言葉[ことば]は、これからも生[い]き続[つづ]けます。永遠[えいえん]に。」涙[なみだ]が、二人[ふたり]の間[あいだ]に橋[はし]を架[か]けた。"
    ],
    translation: [
      "On a remote island in the north, a language spoken by only seven elderly people was on the verge of extinction. Haru, a linguist, devoted his life to recording and reviving it.",
      "When he first visited the island, the elderly believed their own language to be obsolete. They did not even attempt to pass it on to the young.",
      "Haru argued that the death of a language meant the death of a worldview itself. 'The loss of a single language is tantamount to the death of a portion of humanity's memory.'",
      "He recorded the pronunciation of the elderly, systematized the grammar, and compiled a dictionary. It was a task that would make one's head swim.",
      "Three years later, Haru opened a classroom to teach the children of the island the language of their ancestors. What had begun with only a handful of students gradually grew.",
      "'I had no idea our language was so beautiful,' said one girl, with tears in her eyes. At that moment, Haru felt that his years of toil had been rewarded.",
      "Yet the path of revival was not smooth. Administrative support was insufficient, and the cost of maintaining the classroom devoured Haru's personal funds.",
      "Nevertheless, Haru never gave up. For him, saving a language was itself the meaning of his existence.",
      "Ten years later, the number of young people speaking the language exceeded one hundred. In the daily life of the island, the language of the ancestors began to resonate once more.",
      "Haru clasped the hand of the elderly woman, the last of the speakers, and spoke quietly. 'Your words will live on from here. Eternally.' Tears bridged the space between them."
    ],
    vocab: [
      { word: "孤島", reading: "ことう", meaning: "isolated island" },
      { word: "高齢者", reading: "こうれいしゃ", meaning: "elderly people" },
      { word: "言語学者", reading: "げんごがくしゃ", meaning: "linguist" },
      { word: "復興", reading: "ふっこう", meaning: "revival" },
      { word: "生涯", reading: "しょうがい", meaning: "lifetime" },
      { word: "世界観", reading: "せかいかん", meaning: "worldview" },
      { word: "喪失", reading: "そうしつ", meaning: "loss" },
      { word: "死滅", reading: "しめつ", meaning: "extinction" },
      { word: "体系化", reading: "たいけいか", meaning: "systematization" },
      { word: "編纂", reading: "へんさん", meaning: "compilation" },
      { word: "維持費", reading: "いじひ", meaning: "maintenance cost" },
      { word: "私財", reading: "しざい", meaning: "personal funds" },
      { word: "話者", reading: "わしゃ", meaning: "speaker" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-69 — A bio-ethics conference (生命の境界を問う三日間)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-69",
    title: "生命[せいめい]の境界[きょうかい]を問[と]う三日間[みっかかん]",
    titleReading: "せいめいのきょうかいをとうみっかかん",
    level: "N1",
    summary: "An international bio-ethics conference confronts the question of when an engineered brain organoid deserves moral status.",
    estMinutes: 9,
    tags: ["bioethics", "science", "conference"],
    body: [
      "国際生命倫理会議[こくさいせいめいりんりかいぎ]が、京都[きょうと]の旧都[きゅうと]で開[ひら]かれた。脳[のう]オルガノイドの道徳的[どうとくてき]地位[ちい]について、世界中[せかいじゅう]から集[あつ]まった専門家[せんもんか]が議論[ぎろん]を交[か]わした。",
      "議長[ぎちょう]の神経科学者[しんけいかがくしゃ]は、「人[ひと]の脳[のう]の細胞[さいぼう]から育[そだ]てられた組織[そしき]が、一定[いってい]の複雑[ふくざつ]さに達[たっ]した時[とき]、それに道徳的[どうとくてき]配慮[はいりょ]を払[はら]うべきか」と問[と]いを投[な]げた。",
      "一派[いちぱ]は、「オルガノイドは意識[いしき]を持[も]たない以上[いじょう]、単[たん]なる細胞[さいぼう]の塊[かたまり]に過[す]ぎない」と主張[しゅちょう]した。だが、この見方[みかた]に対[たい]する反発[はんぱつ]は強[つよ]かった。",
      "「意識[いしき]の有無[うむ]を証明[しょうめい]することは、現在[げんざい]の技術[ぎじゅつ]では不可能[ふかのう]である。未知[みち]なる可能性[かのうせい]を秘[ひめ]た存在[そんざい]を、軽々[かるがる]しく扱[あつか]うべきではない」と一人[ひとり]の倫理学者[りんりがくしゃ]が反論[はんろん]した。",
      "議論[ぎろん]は、理論的[りろんてき]枠組[わくぐ]みから法的[ほうてき]規制[きせい]、将来的[しょうらいてき]応用[おうよう]まで、多岐[たき]にわたって展開[てんかい]された。各国[かっこく]の専門家[せんもんか]が、自[みずか]らの立場[たちば]を熱[ねつ]く弁護[べんご]した。",
      "三日目[みっかめ]の最終[さいしゅう]セッションで、議長[ぎちょう]は、「完全[かんぜん]な合意[ごうい]には至[いた]らなかったものの、予防[よぼう]原則[げんそく]に基[もと]づく中間[ちゅうかん]報告[ほうこく]を採択[さいたく]する」ことを宣言[せんげん]した。",
      "「我々[われわれ]は、科学[かがく]の発展[はってん]を止[と]めるつもりはない。しかし、それが人間[にんげん]の尊厳[そんげん]を損[そこ]なうおそれがある場合[ばあい]、慎重[しんちょう]な判断[はんだん]が求[もと]められる」と彼[かれ]は語[かた]った。",
      "会議[かいぎ]の閉会[へいかい]後[ご]、一人[ひとり]の若[わか]き研究者[けんきゅうしゃ]が議長[ぎちょう]に近[ちか]づき、こう尋[たず]ねた。「あなた個人[こじん]は、オルガノイドに意識[いしき]があると信[しん]じますか。」",
      "議長[ぎちょう]は一瞬[いっしゅん]、遠[とお]くを見[み]る目[め]をしてから答[こた]えた。「分[わ]からない。だが、分[わ]からないという事実[じじつ]こそが、我々[われわれ]に慎重[しんちょう]さを求[もと]めているように思[おも]えてならない。」",
      "三日間[みっかかん]の議論[ぎろん]は、結局[けっきょく]、明確[めいかく]な答[こた]えを出[だ]さないまま終[お]わった。しかし、その「答[こた]えなき問[とい]」を共有[きょうゆう]したこと自体[じたい]が、人類[じんるい]の知性[ちせい]の成熟[せいじゅく]を示[しめ]しているのかもしれない。"
    ],
    translation: [
      "The International Bioethics Conference was held in the old capital of Kyoto. Experts gathered from around the world to exchange views on the moral status of brain organoids.",
      "The chair, a neuroscientist, posed the question: 'When tissue grown from human brain cells reaches a certain complexity, ought we to extend it moral consideration?'",
      "One faction argued: 'Insofar as an organoid lacks consciousness, it is no more than a mass of cells.' But this view drew strong objection.",
      "'Proving the presence or absence of consciousness is impossible with current technology. We should not treat an existence that harbors unknown possibilities lightly,' one ethicist countered.",
      "The discussion ranged across theoretical frameworks, legal regulation, and future applications. Experts from each nation hotly defended their positions.",
      "In the final session on the third day, the chair declared: 'Although we have not reached full agreement, we adopt an interim report based on the precautionary principle.'",
      "'We have no intention of halting the progress of science. However, when there is a risk that it may undermine human dignity, careful judgment is required,' he said.",
      "After the conference closed, a young researcher approached the chair and asked: 'Do you, personally, believe that organoids possess consciousness?'",
      "The chair, for an instant, looked into the distance, and then answered: 'I do not know. But the very fact that we do not know seems to me to be demanding that we be cautious.'",
      "The three days of discussion concluded, in the end, without producing a clear answer. Yet the very sharing of that 'question without an answer' may itself indicate the maturation of human intellect."
    ],
    vocab: [
      { word: "国際生命倫理会議", reading: "こくさいせいめいりんりかいぎ", meaning: "International Bioethics Conference" },
      { word: "旧都", reading: "きゅうと", meaning: "former capital" },
      { word: "神経科学者", reading: "しんけいかがくしゃ", meaning: "neuroscientist" },
      { word: "道徳的", reading: "どうとくてき", meaning: "moral" },
      { word: "配慮", reading: "はいりょ", meaning: "consideration" },
      { word: "有無", reading: "うむ", meaning: "presence or absence" },
      { word: "倫理学者", reading: "りんりがくしゃ", meaning: "ethicist" },
      { word: "理論的", reading: "りろんてき", meaning: "theoretical" },
      { word: "将来的", reading: "しょうらいてき", meaning: "future" },
      { word: "多岐", reading: "たき", meaning: "many directions" },
      { word: "予防原則", reading: "よぼうげんそく", meaning: "precautionary principle" },
      { word: "採択", reading: "さいたく", meaning: "adoption" },
      { word: "一瞬", reading: "いっしゅん", meaning: "an instant" },
      { word: "知性", reading: "ちせい", meaning: "intellect" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n1-70 — A post-scarcity economy (欠乏の終わり、欲望の行方)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n1-70",
    title: "欠乏[けつぼう]の終[お]わり、欲望[よくぼう]の行方[ゆくえ]",
    titleReading: "けつぼうのおわり、よくぼうのゆくえ",
    level: "N1",
    summary: "A society with near-zero marginal production costs must reimagine meaning, work, and dignity when scarcity disappears.",
    estMinutes: 8,
    tags: ["economy", "future", "society"],
    body: [
      "自動化[じどうか]と合成[ごうせい]生産[せいさん]の技術[ぎじゅつ]が臨界点[りんかいてん]を超[こ]えた結果[けっか]、この社会[しゃかい]は、歴史[れきし]上[じょう]初[はつ]の「欠乏[けつぼう]のない」経済[けいざい]状態[じょうたい]に突入[とつにゅう]した。",
      "物質的[ぶっしつてき]には、誰[だれ]もが十分[じゅうぶん]な生活[せいかつ]を送[おく]れるようになった。しかし、人々[ひとびと]の心[こころ]は、かえって空虚[くうきょ]さを深[ふか]めていた。",
      "「労働[ろうどう]が意義[いぎ]を失[うしな]った社会[しゃかい]で、人[ひと]は何[なに]を拠[よ]り所[どころ]に生[い]きるのか」と哲学者[てつがくしゃ]たちは問[と]い始[はじ]めた。",
      "かつて労働[ろうどう]は、人間[にんげん]の尊厳[そんげん]と自己実現[じこじつげん]の最大[さいだい]の舞台[ぶたい]であった。だが、その舞台[ぶたい]が消[き]えた今[いま]、人々[ひとびと]は新[あたら]しい意義[いぎ]を模索[もさく]せざるを得[え]なかった。",
      "一部[いちぶ]の人々[ひとびと]は、芸術[げいじゅつ]や学問[がくもん]に没頭[ぼっとう]し、創造的[そうぞうてき]活動[かつどう]に新[あたら]しい意義[いぎ]を見[み]出[だ]した。彼[かれ]らは「創造階級[そうぞうかいきゅう]」と呼[よ]ばれた。",
      "しかし、全[すべ]ての人[ひと]が芸術家[げいじゅつか]や学者[がくしゃ]になれるわけではない。多[おお]くの人々[ひとびと]は、目的[もくてき]なき時間[じかん]の海[うみ]に漂[ただよ]うことになった。",
      "「欠乏[けつぼう]があっただけ、人[ひと]は生[い]きる意味[いみ]を見[み]出[だ]しやすかったのかもしれない」と社会学者[しゃかいがくしゃ]の一人[ひとり]が指摘[してき]した。皮肉[ひにく]な逆説[ぎゃくせつ]であった。",
      "政府[せいふ]は、市民[しみん]に「意義[いぎ]ある活動[かつどう]」を提供[ていきょう]するため、公共事業[こうきょうじぎょう]と文化[ぶんか]教育[きょういく]の大規模[だいきぼ]な拡充[かじゅう]を進[すす]めた。それは一種[いっしゅ]の「意義[いぎ]の再分配[さいぶんぱい]」であった。",
      "五年後[ごねんご]、人々[ひとびと]は少[すこ]しずつ新[あたら]しい生[い]き方[かた]に慣[な]れ始[はじ]めた。労働[ろうどう]によらない自己実現[じこじつげん]の形[かたち]が、文化[ぶんか]の中[なか]に根[ね]を下[お]ろし始[はじ]めた。",
      "欠乏[けつぼう]の終[お]わりは、人類[じんるい]にとって最大[さいだい]の試練[しれん]であった。物質[ぶっしつ]の豊[ゆた]かさは、心[こころ]の豊[ゆた]かさを保証[ほしょう]するものではない。だが、それに気[き]づいた社会[しゃかい]は、少[すこ]しずつ、新[あたら]しい豊[ゆた]かさの定義[ていぎ]を書[か]き始[はじ]めている。"
    ],
    translation: [
      "As a result of automation and synthetic production technologies crossing a critical threshold, this society entered, for the first time in history, an economic state 'without scarcity.'",
      "In material terms, anyone could now live sufficiently. Yet people's hearts had, if anything, deepened in emptiness.",
      "'In a society where labor has lost its meaning, on what does a person rely in order to live?' philosophers began to ask.",
      "Labor had once been the greatest stage for human dignity and self-realization. But now that the stage had vanished, people had no choice but to search for new meaning.",
      "Some threw themselves into art and scholarship, finding new meaning in creative activity. They came to be called the 'creative class.'",
      "However, not everyone could become an artist or a scholar. Many people drifted upon a sea of purposeless time.",
      "'Perhaps, precisely because there was scarcity, people found it easier to discover meaning in life,' one sociologist observed. It was an ironic paradox.",
      "In order to offer citizens 'meaningful activity,' the government undertook a massive expansion of public works and cultural education. It was, in a sense, a 'redistribution of meaning.'",
      "Five years later, people were gradually growing accustomed to a new way of life. Forms of self-realization not dependent on labor began to take root in the culture.",
      "The end of scarcity was humanity's greatest trial. Material abundance does not guarantee abundance of heart. Yet the society that realized this is, little by little, beginning to write a new definition of wealth."
    ],
    vocab: [
      { word: "自動化", reading: "じどうか", meaning: "automation" },
      { word: "臨界点", reading: "りんかいてん", meaning: "critical point" },
      { word: "欠乏", reading: "けつぼう", meaning: "scarcity" },
      { word: "突入", reading: "とつにゅう", meaning: "entry/plunge" },
      { word: "物質的", reading: "ぶっしつてき", meaning: "material" },
      { word: "空虚", reading: "くうきょ", meaning: "emptiness" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "自己実現", reading: "じこじつげん", meaning: "self-realization" },
      { word: "模索", reading: "もさく", meaning: "groping/search" },
      { word: "創造階級", reading: "そうぞうかいきゅう", meaning: "creative class" },
      { word: "社会学者", reading: "しゃかいがくしゃ", meaning: "sociologist" },
      { word: "皮肉", reading: "ひにく", meaning: "irony" },
      { word: "逆説", reading: "ぎゃくせつ", meaning: "paradox" },
      { word: "再分配", reading: "さいぶんぱい", meaning: "redistribution" },
      { word: "試練", reading: "しれん", meaning: "trial/ordeal" }
    ]
  }
];
