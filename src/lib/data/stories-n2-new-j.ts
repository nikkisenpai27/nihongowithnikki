import type { StoryData } from "@/lib/types";

// N2 short stories set J (new batch).
// Furigana notation: a [reading] immediately following a run of consecutive
// kanji attaches as furigana to that whole run. Kana, katakana, digits, and
// punctuation have no brackets. titleReading is full kana with NO brackets.
// N2 grammar targets: 〜に過ぎない, 〜おそれがある, 〜限り, 〜わけにはいかない,
// 〜かねない, 〜つつある, 〜上で, 〜際, 〜にもかかわらず, 〜に比べ, 〜においては,
// 〜にとって, 〜からこそ, 〜にせよ, 〜とはいえ, 〜うちに, 〜ばかりでなく,
// 〜ずにはいられない, 〜どころか, 〜に違いない, 〜次第, 〜にかけては.
// Topics: a quantum computing breakthrough, a refugee integration program,
// a genetic privacy case, a climate engineering debate, an AI art exhibition,
// a historical revisionism trial, a bio-diversity conservation, a social
// credit system, a post-work society, a consciousness transfer experiment.

export const storiesN2NewJ: StoryData[] = [
  // ───────────────────────────────────────────────────────────
  // sx-n2n-91 — A quantum computing breakthrough (量子コンピュータの夜明け)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-91",
    title: "量子[りょうし]コンピュータの夜明[よあ]け",
    titleReading: "りょうしこんぴゅーたのよあけ",
    level: "N2",
    summary: "A national lab unveils a quantum computer that breaks long-standing cryptographic barriers, igniting both wonder and alarm.",
    estMinutes: 7,
    tags: ["technology", "science", "society"],
    body: [
      "先週[せんしゅう]、東京[とうきょう]の国立[こくりつ]研究所[けんきゅうじょ]が記者会見[きしゃかいけん]を開[ひら]いた。新型[しんがた]の量子[りょうし]コンピュータが、特定[とくてい]の計算[けいさん]において従来[じゅうらい]の十億倍[じゅうおくばい]の速度[そくど]を達成[たっせい]したと発表[はっぴょう]された。",
      "開発[かいはつ]を指導[しどう]した藤原[ふじわら]博士[はかせ]は、これまで解読[かいどく]に数千年[すうせんねん]を要[よう]した暗号[あんごう]が、この装置[そうち]にかかれば数秒[すうびょう]で破[やぶ]れる可能性[かのうせい]があると説明[せつめい]した。まさに計算[けいさん]の歴史[れきし]を変[か]える一歩[いっぽ]である。",
      "この成果[せいか]に対[たい]し、世界各国[せかいかっこく]の専門家[せんもんか]から驚異[きょうい]の声[こえ]が上[あ]がった一方[いっぽう]で、警鐘[けいしょう]を鳴[な]らす者[もの]も少[すく]なくない。暗号[あんごう]技術[ぎじゅつ]の根幹[こんかん]が揺[ゆる]ぐおそれがあるからだ。",
      "銀行[ぎんこう]や政府[せいふ]は、顧客情報[こきゃくじょうほう]や外交機密[がいこうきみつ]を守[まも]るために、これまでの暗号[あんごう]方式[ほうしき]に依存[いぞん]してきた。それが一夜[いちや]で無力[むりょく]になるかもしれないという指摘[してき]は、重大[じゅうだい]な問題[もんだい]を含[ふく]んでいる。",
      "藤原[ふじわら]博士[はかせ]は会見[かいけん]の終[お]わりに、技術[ぎじゅつ]を悪用[あくよう]しない限[かぎ]り、人類[じんるい]の発展[はってん]に寄与[きよ]するはずだと強調[きょうちょう]した。しかし、その言葉[ことば]がすべての不安[ふあん]を消[け]すわけにはいかない。",
      "私[わたし]は専門家[せんもんか]ではないものの、この発表[はっぴょう]の意味[いみ]を自分[じぶん]なりに考[かんが]えずにはいられなかった。便利[べんり]な技術[ぎじゅつ]は、往々[おうおう]にして両刃[もろは]の剣[つるぎ]である。",
      "今後[こんご]、国際的[こくさいてき]な規制[きせい]の枠組[わくぐ]みを整備[せいび]する動[うご]きが加速[かそく]しつつあるという。技術[ぎじゅつ]の進歩[しんぽ]に倫理[りんり]が追[お]いつくかどうかが、これからの鍵[かぎ]を握[にぎ]るだろう。",
      "帰宅[きたく]後[ご]、画面[がめん]に向[む]かい合[あ]う私[わたし]の目[め]には、未来[みらい]への期待[きたい]と微[かす]かな不安[ふあん]が同時[どうじ]に浮[う]かんでいた。新時代[しんじだい]の幕[まく]が、静[しず]かに上[あ]がろうとしている。"
    ],
    translation: [
      "Last week, a national research institute in Tokyo held a press conference. It was announced that a new quantum computer has achieved processing speeds one billion times faster than conventional machines for certain calculations.",
      "Dr. Fujiwara, who led the development, explained that codes which previously required thousands of years to decrypt might be broken by this device in a matter of seconds. It is truly a step that will change the history of computation.",
      "In response to this achievement, voices of astonishment rose from experts around the world, while those sounding the alarm are not few. The foundations of cryptographic technology could be shaken.",
      "Banks and governments have depended on existing encryption methods to protect customer information and diplomatic secrets. The suggestion that these could become powerless overnight contains a serious problem.",
      "At the end of the press conference, Dr. Fujiwara stressed that as long as the technology is not misused, it should contribute to human progress. However, those words cannot erase all anxieties.",
      "Although I am no expert, I could not help but consider the meaning of this announcement in my own way. Convenient technologies are often a double-edged sword.",
      "From now on, moves to establish an international regulatory framework are said to be accelerating. Whether ethics can catch up with technological progress will hold the key to what comes next.",
      "After returning home, as I faced the screen, hope for the future and a faint anxiety surfaced simultaneously in my eyes. The curtain on a new era is about to rise quietly."
    ],
    vocab: [
      { word: "量子", reading: "りょうし", meaning: "quantum" },
      { word: "記者会見", reading: "きしゃかいけん", meaning: "press conference" },
      { word: "従来", reading: "じゅうらい", meaning: "convention" },
      { word: "解読", reading: "かいどく", meaning: "decoding" },
      { word: "暗号", reading: "あんごう", meaning: "cipher" },
      { word: "警鐘", reading: "けいしょう", meaning: "alarm bell" },
      { word: "根幹", reading: "こんかん", meaning: "foundation" },
      { word: "依存", reading: "いぞん", meaning: "dependence" },
      { word: "悪用", reading: "あくよう", meaning: "misuse" },
      { word: "寄与", reading: "きよ", meaning: "contribution" },
      { word: "規制", reading: "きせい", meaning: "regulation" },
      { word: "枠組み", reading: "わくぐみ", meaning: "framework" },
      { word: "両刃の剣", reading: "もろはのつるぎ", meaning: "double-edged sword" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-92 — A refugee integration program (隣人として迎えられた日々)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-92",
    title: "隣人[りんじん]として迎[むか]えられた日々[ひび]",
    titleReading: "りんじんとしてむかえられたひび",
    level: "N2",
    summary: "A port town slowly learns to live with overseas refugees accepted through a municipal integration program, from suspicion to shared meals.",
    estMinutes: 7,
    tags: ["society", "community", "coexistence"],
    body: [
      "三年[さんねん]前[まえ]、私[わたし]が住[す]む港町[みなとまち]に、海外[かいがい]からの難民[なんみん]を受[う]け入[い]れる計画[けいかく]が立[た]てられた。当初[とうしょ]、住民[じゅうみん]の間[あいだ]には不安[ふあん]と反発[はんぱつ]が渦[うず]巻[ま]いていた。",
      "市役所[しやくしょ]は、地域[ちいき]の理解[りかい]を深[ふか]めるため、住民説明会[じゅうみんせつめいかい]を繰[く]り返[かえ]し開[ひら]いた。あるお年寄[としよ]りは「言葉[ことば]も通[つう]じない人[ひと]たちとどう暮[く]らすのか」と率直[そっちょく]に疑問[ぎもん]を投[な]げかけた。",
      "その声[こえ]に応[こた]えるように、難民[なんみん]側[がわ]も日本語[にほんご]の学習[がくしゅう]を始[はじ]め、地元[じもと]の祭[まつ]りに参加[さんか]するなど、共存[きょうそん]の意志[いし]を示[しめ]した。互[たが]いに歩[あゆ]み寄[よ]る姿勢[しせい]が少[すこ]しずつ生[う]まれ始[はじ]めた。",
      "近所[きんじょ]の八百屋[やおや]の主人[しゅじん]は、難民[なんみん]の少年[しょうねん]を店員[てんいん]として雇[やと]い入[い]れた。最初[さいしょ]は言葉[ことば]の壁[かべ]に悩[なや]んだものの、三[みっ]ヶ月[かげつ]後[ご]には笑顔[えがお]で接客[せっきゃく]する姿[すがた]が見[み]られるようになった。",
      "私[わたし]の娘[むすめ]の小学校[しょうがっこう]では、難民[なんみん]の子[こ]どもたちと一緒[いっしょ]に給食[きゅうしょく]を食[た]べる機会[きかい]が設[もう]けられた。異[こと]なる文化[ぶんか]に触[ふ]れることで、子[こ]どもたちの視野[しや]が広[ひろ]がっていくのを私[わたし]は実感[じっかん]した。",
      "もっとも、統合[とうごう]の道[みち]は決[けっ]して平坦[へいたん]ではない。言語[げんご]や習慣[しゅうかん]の差[さ]から、小[ちい]さな衝突[しょうとつ]が起[お]きることもある。それでも、対話[たいわ]を続[つづ]ける限[かぎ]り、壁[かべ]は必[かなら]ずしも越[こ]えられないものではない。",
      "昨年[さくねん]の冬[ふゆ]、難民[なんみん]の家族[かぞく]が手作[てづく]りの料理[りょうり]を振[ふ]る舞[ま]う交流会[こうりゅうかい]が開[ひら]かれた。スパイスの香[かお]りが漂[ただよ]う会場[かいじょう]で、隣[となり]の席[せき]の人[ひと]と自然[しぜん]に笑[わら]い合[あ]えた瞬間[しゅんかん]、私[わたし]は境界線[きょうかいせん]が薄[うす]れたように思[おも]った。",
      "迎[むか]え入[い]れるとは、単[たん]に住[す]む場所[ばしょ]を提供[ていきょう]することに過[す]ぎない。共[とも]に暮[く]らし、共[とも]に未来[みらい]を想[おも]うことこそが、真[まこと]の隣人[りんじん]関係[かんけい]を築[きず]く鍵[かぎ]であると私[わたし]は信[しん]じている。"
    ],
    translation: [
      "Three years ago, a plan was drawn up to accept refugees from overseas in the port town where I live. At first, anxiety and resistance swirled among the residents.",
      "The city hall repeatedly held information sessions for residents to deepen community understanding. An elderly person candidly asked, 'How will we live with people with whom we cannot even communicate?'",
      "As if responding to that voice, the refugees also began studying Japanese and showed their willingness to coexist by participating in local festivals. An attitude of mutual accommodation gradually began to emerge.",
      "The owner of a nearby greengrocer hired a refugee youth as a store clerk. Although he initially struggled with the language barrier, after three months he was seen serving customers with a smile.",
      "At my daughter's elementary school, opportunities were created to eat lunch together with the refugee children. I felt firsthand that the children's horizons were broadening through contact with a different culture.",
      "Of course, the path to integration is by no means flat. Small conflicts sometimes arise from differences in language and customs. Still, as long as dialogue continues, the walls are not necessarily insurmountable.",
      "Last winter, an exchange event was held where a refugee family served homemade cuisine. In the venue drifting with the scent of spices, the moment I naturally shared a laugh with the person next to me, I felt as though the boundary line had thinned.",
      "Welcoming someone is nothing more than providing a place to live. I believe that living together and thinking of the future together is the key to building a true neighborly relationship."
    ],
    vocab: [
      { word: "難民", reading: "なんみん", meaning: "refugee" },
      { word: "港町", reading: "みなとまち", meaning: "port town" },
      { word: "反発", reading: "はんぱつ", meaning: "backlash" },
      { word: "市役所", reading: "しやくしょ", meaning: "city hall" },
      { word: "率直", reading: "そっちょく", meaning: "frankness" },
      { word: "共存", reading: "きょうそん", meaning: "coexistence" },
      { word: "歩み寄る", reading: "あゆみよる", meaning: "to compromise" },
      { word: "雇い入れる", reading: "やといいれる", meaning: "to employ" },
      { word: "給食", reading: "きゅうしょく", meaning: "school lunch" },
      { word: "視野", reading: "しや", meaning: "perspective" },
      { word: "平坦", reading: "へいたん", meaning: "flat" },
      { word: "衝突", reading: "しょうとつ", meaning: "conflict" },
      { word: "振る舞う", reading: "ふるまう", meaning: "to treat/serve" },
      { word: "境界線", reading: "きょうかいせん", meaning: "boundary line" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-93 — A genetic privacy case (遺伝情報は誰のものか)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-93",
    title: "遺伝情報[いでんじょうほう]は誰[だれ]のものか",
    titleReading: "いでんじょうほうはだれのものか",
    level: "N2",
    summary: "A major insurer is taken to court for collecting customers' genetic data without consent, raising the question of who owns our DNA.",
    estMinutes: 7,
    tags: ["law", "ethics", "privacy"],
    body: [
      "先月[せんげつ]、大手[おおて]保険会社[ほけんがいしゃ]が契約者[けいやくしゃ]の遺伝情報[いでんじょうほう]を無断[むだん]で収集[しゅうしゅう]していた事実[じじつ]が発覚[はっかく]した。調査[ちょうさ]によれば、数万人[すうまんにん]のデータが対象[たいしょう]に含[ふく]まれていたという。",
      "遺伝情報[いでんじょうほう]には、病気[びょうき]のリスクや体質[たいしつ]など、個人[こじん]の最[もっと]も機密[きみつ]な情報[じょうほう]が記録[きろく]されている。それを本人[ほんにん]の同意[どうい]なく集[あつ]める行為[こうい]は、プライバシーの侵害[しんがい]に過[す]ぎない。",
      "原告[げんげん]側[がわ]は、会社[かいしゃ]がその情報[じょうほう]を保険料[ほけんりょう]の算定[さんてい]に利用[りよう]していたと主張[しゅちょう]した。これが事実[じじつ]であるなら、遺伝的[いでんてき]な運命[うんめい]によって差別[さべつ]される社会[しゃかい]が到来[とうらい]しかねない。",
      "被告[ひこく]側[がわ]は「医学的[いがくてき]研究[けんきゅう]の目的[もくてき]であった」と反論[はんろん]した。しかし、研究[けんきゅう]という名[な]の下[もと]に個人[こじん]の尊厳[そんげん]を損[そこ]なうことが許[ゆる]されるわけではない。",
      "裁判[さいばん]で注目[ちゅうもく]されたのは、遺伝情報[いでんじょうほう]の所有権[しょゆうけん]が誰[だれ]に帰[き]するかという点[てん]であった。法律[ほうりつ]上[じょう]、自身[じしん]の細胞[さいぼう]から抽出[ちゅうしゅつ]された情報[じょうほう]であっても、ひとたび共有[きょうゆう]されれば管理権[かんりけん]は複雑[ふくざつ]になる。",
      "原告[げんげん]の代理人[だいりにん]は、自己決定権[じこけっていけん]の観点[かんてん]から、個人[こじん]の遺伝情報[いでんじょうほう]は本人[ほんにん]に属[ぞく]すると強[つよ]く訴[うった]えた。この主張[しゅちょう]には、多[おお]くの市民[しみん]が共感[きょうかん]を示[しめ]した。",
      "判決[はんけつ]は「遺伝情報[いでんじょうほう]の無断[むだん]収集[しゅうしゅう]は違法[いほう]」と断定[だんてい]した上[うえ]で、相当額[そうとうがく]の賠償[ばいしょう]を命[めい]じた。同時[どうじ]に、法整備[ほうせいび]の遅[おく]れも指摘[してき]された。",
      "この判決[はんけつ]は、技術[ぎじゅつ]の進歩[しんぽ]が倫理[りんり]や法[ほう]を先行[せんこう]する時代[じだい]において、私[わたし]たちの権利[けんり]を守[まも]る新[あたら]しい枠組[わくぐ]みの必要性[ひつようせい]を浮[う]き彫[ぼ]りにした。遺伝[いでん]の時代[じだい]に生[い]きる私[わたし]たちは、今[いま]こそ自分[じぶん]の情報[じょうほう]と向[む]き合[あ]う必要[ひつよう]がある。"
    ],
    translation: [
      "Last month, it came to light that a major insurance company had been collecting policyholders' genetic information without permission. According to the investigation, the data of tens of thousands of people was included.",
      "Genetic information records an individual's most confidential data, such as disease risks and physical constitution. Collecting it without the person's consent is nothing but an invasion of privacy.",
      "The plaintiffs argued that the company had used that information to calculate insurance premiums. If this is true, a society in which people are discriminated against based on their genetic destiny may well arrive.",
      "The defendants countered that 'the purpose was medical research.' However, violating individual dignity under the name of research must not be permitted.",
      "What drew attention in the trial was the question of who holds the ownership of genetic information. Legally, even information extracted from one's own cells becomes complex in terms of management rights once it is shared.",
      "From the standpoint of the right to self-determination, the plaintiffs' attorney strongly argued that an individual's genetic information belongs to the person. Many citizens expressed sympathy for this argument.",
      "The ruling concluded that 'collecting genetic information without permission is illegal' and ordered a substantial amount of compensation. At the same time, the delay in legal development was also pointed out.",
      "This ruling highlighted the necessity of a new framework to protect our rights in an era where technological progress outpaces ethics and law. Living in the age of genetics, we must now confront our own information."
    ],
    vocab: [
      { word: "遺伝情報", reading: "いでんじょうほう", meaning: "genetic information" },
      { word: "無断", reading: "むだん", meaning: "without permission" },
      { word: "収集", reading: "しゅうしゅう", meaning: "collection" },
      { word: "発覚", reading: "はっかく", meaning: "discovery" },
      { word: "機密", reading: "きみつ", meaning: "confidentiality" },
      { word: "侵害", reading: "しんがい", meaning: "infringement" },
      { word: "算定", reading: "さんてい", meaning: "calculation" },
      { word: "差別", reading: "さべつ", meaning: "discrimination" },
      { word: "尊厳", reading: "そんげん", meaning: "dignity" },
      { word: "所有権", reading: "しょゆうけん", meaning: "ownership" },
      { word: "自己決定権", reading: "じこけっていけん", meaning: "right to self-determination" },
      { word: "違法", reading: "いほう", meaning: "illegality" },
      { word: "賠償", reading: "ばいしょう", meaning: "compensation" },
      { word: "浮き彫り", reading: "うきぼり", meaning: "highlighting" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-94 — A climate engineering debate (空を設計する議論)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-94",
    title: "空[そら]を設計[せっけい]する議論[ぎろん]",
    titleReading: "そらをせっけいするぎろん",
    level: "N2",
    summary: "A proposal to scatter sulfur particles into the stratosphere splits experts, governments, and ethicists at a tense UN climate meeting.",
    estMinutes: 7,
    tags: ["environment", "policy", "ethics"],
    body: [
      "地球温暖化[ちきゅうおんだんか]の進行[しんこう]が止[と]まらない中[なか]、成層圏[せいそうけん]に硫黄[いおう]の粒子[りゅうし]を散布[さんぷ]して太陽光[たいようこう]を遮[さえぎ]るという気候工学[きこうこうがく]の提案[ていあん]が議論[ぎろん]を呼[よ]んでいる。",
      "提唱者[ていしょうしゃ]である気候学者[きこうがくしゃ]のリー博士[はかせ]は、二酸化炭素[にさんかたんそ]の削減[さくげん]だけでは間[ま]に合[あ]わないと主張[しゅちょう]する。彼[かれ]によれば、緊急[きんきゅう]の手段[しゅだん]として、地球[ちきゅう]の温度[おんど]を人為的[じんいてき]に下[さ]げる選択肢[せんたくし]も検討[けんとう]すべきだという。",
      "これに対[たい]し、環境保護団体[かんきょうほごだんたい]からは強[つよ]い反発[はんぱつ]が起[お]きた。「自然[しぜん]を支配[しはい]しようとする傲慢[ごうまん]さだ」という批判[ひはん]が相次[あいつ]いだ。生態系[せいたいけい]に予測[よそく]不能[ふのう]な影響[えいきょう]を与[あた]えるおそれがあるからだ。",
      "一方[いっぽう]、賛成[さんせい]派[は]は「安全[あんぜん]を確[かく]認[にん]した上[うえ]で小規模[しょうきぼ]な実験[じっけん]を始[はじ]めるべきだ」と主張[しゅちょう]する。何[なに]もしないという選択[せんたく]も、リスクを伴[ともな]うという指摘[してき]である。",
      "国連[こくれん]の会議[かいぎ]では、この技術[ぎじゅつ]を国際的[こくさいてき]に管理[かんり]する枠組[わくぐ]み作[づく]りが議題[ぎだい]に上[のぼ]った。一部[いちぶ]の開発途上国[かいはつとじょうこく]は「富裕国[ふゆうこく]が気候[きこう]を操作[そうさ]するのではないか」と警戒[けいかい]した。",
      "気候工学[きこうこうがく]は、根本的[こんぽんてき]な解決策[かいけつさく]ではない。それは対症療法[たいしょうりょうほう]に過[す]ぎず、温室効果[おんしつこうか]ガスの削減[さくげん]という本丸[ほんまる]の取[と]り組[く]みを怠[おこた]る言い訳[いいわけ]になりかねない。",
      "倫理学者[りんりがくしゃ]の白鳥[しらとり]教授[きょうじゅ]は「私[わたし]たちは未来[みらい]の世代[せだい]に対[たい]して、地球[ちきゅう]をどのような状態[じょうたい]で引[ひ]き渡[わた]すのかを決[き]める責任[せきにん]がある」と語[かた]った。",
      "空[そら]を設計[せっけい]する力[ちから]は、人類[じんるい]に与[あた]えられた最後[さいご]の選択肢[せんたくし]かもしれない。それを使[つか]うにせよ使[つか]わないにせよ、慎重[しんちょう]な対話[たいわ]を続[つづ]けることだけは避[さ]けられない。"
    ],
    translation: [
      "As global warming continues unabated, a proposal in climate engineering to scatter sulfur particles in the stratosphere to block sunlight has stirred debate.",
      "The proponent, climatologist Dr. Lee, argues that cutting carbon dioxide alone will not be enough in time. According to him, we should also consider the option of artificially lowering the earth's temperature as an emergency measure.",
      "In response, environmental groups voiced strong opposition. Criticism that 'it is the arrogance of trying to dominate nature' mounted. There is a fear of unpredictable impacts on the ecosystem.",
      "On the other hand, proponents argue that 'small-scale experiments should begin once safety is confirmed.' They point out that choosing to do nothing also carries risk.",
      "At a United Nations conference, the creation of a framework to internationally govern this technology was put on the agenda. Some developing countries were wary that 'wealthy nations might manipulate the climate.'",
      "Climate engineering is not a fundamental solution. It is merely symptomatic treatment, and could well become an excuse for neglecting the core effort of reducing greenhouse gases.",
      "Ethicist Professor Shiratori said, 'We have a responsibility to decide in what state we will hand over the earth to future generations.'",
      "The power to design the sky may be humanity's last option. Whether to use it or not, continuing careful dialogue is the only thing that cannot be avoided."
    ],
    vocab: [
      { word: "地球温暖化", reading: "ちきゅうおんだんか", meaning: "global warming" },
      { word: "成層圏", reading: "せいそうけん", meaning: "stratosphere" },
      { word: "硫黄", reading: "いおう", meaning: "sulfur" },
      { word: "散布", reading: "さんぷ", meaning: "scattering" },
      { word: "気候工学", reading: "きこうこうがく", meaning: "climate engineering" },
      { word: "二酸化炭素", reading: "にさんかたんそ", meaning: "carbon dioxide" },
      { word: "削減", reading: "さくげん", meaning: "reduction" },
      { word: "傲慢", reading: "ごうまん", meaning: "arrogance" },
      { word: "予測不能", reading: "よそくふのう", meaning: "unpredictable" },
      { word: "開発途上国", reading: "かいはつとじょうこく", meaning: "developing country" },
      { word: "警戒", reading: "けいかい", meaning: "vigilance" },
      { word: "対症療法", reading: "たいしょうりょうほう", meaning: "symptomatic treatment" },
      { word: "温室効果", reading: "おんしつこうか", meaning: "greenhouse effect" },
      { word: "引き渡す", reading: "ひきわたす", meaning: "to hand over" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-95 — An AI art exhibition (機械が描いた絵の前で)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-95",
    title: "機械[きかい]が描[えが]いた絵[え]の前[まえ]で",
    titleReading: "きかいがえがいたえのまえで",
    level: "N2",
    summary: "A contemporary museum fills its halls with AI-generated art, prompting visitors to ask what creativity and authorship really mean.",
    estMinutes: 6,
    tags: ["art", "technology", "culture"],
    body: [
      "先週末[せんしゅうまつ]、現代美術館[げんだいびじゅつかん]で「人工知能[じんこうちのう]と美術[びじゅつ]」をテーマにした展覧会[てんらんかい]が開[ひら]かれた。会場[かいじょう]には、AIが生成[せいせい]した絵画[かいが]や彫刻[ちょうこく]が並[なら]んでいた。",
      "最初[さいしょ]の作品[さくひん]は、油絵[あぶらえ]の伝統[でんとう]的な技法[ぎほう]を学[まな]んだAIが一年[いちねん]かけて描[えが]いた風景[ふうけい]であった。筆致[ひっち]や色彩[しきさい]の選[えら]び方[かた]は、まるで熟練[じゅくれん]の画家[がか]のようであった。",
      "ある鑑賞者[かんしょうしゃ]は「人間[にんげん]の心[こころ]がない」と批評[ひひょう]した。しかし、別[べつ]の観客[かんきゃく]は「作者[さくしゃ]が人間[にんげん]か機械[きかい]かは鑑賞[かんしょう]する際[さい]に重要[じゅうよう]なのか」と問[と]い返[かえ]した。",
      "私[わたし]は、AIが描[えが]いた肖像画[しょうぞうが]の前[まえ]で足[あし]を止[と]めた。女性[じょせい]の瞳[ひとみ]に浮[う]かぶ微[かす]かな光[ひかり]は、確[たし]かに感情[かんじょう]を表現[ひょうげん]しているように見[み]えた。",
      "もっとも、その感情[かんじょう]はAI自身[じしん]のものではなく、膨大[ぼうだい]な過去[かこ]の作品[さくひん]から学習[がくしゅう]したパターンに過[す]ぎない。その点[てん]において、人間[にんげん]の創作[そうさく]とは根本的[こんぽんてき]に異[こと]なる。",
      "展覧会[てんらんかい]の監督[かんとく]を務[つと]める野村[のむら]氏[し]は「美術[びじゅつ]とは何[なに]かを問[と]い直[なお]す機会[きかい]にしたかった」と語[かた]った。AIの台頭[たいとう]は、人間[にんげん]の創造性[そうぞうせい]の定義[ていぎ]を揺[ゆる]がしている。",
      "一方[いっぽう]、伝統[でんとう]的な画家[がか]たちからは「技術[ぎじゅつ]の模倣[もほう]にすぎない」と批判[ひはん]の声[こえ]も上[あ]がった。彼[かれ]らの主張[しゅちょう]によれば、真[まこと]の芸術[げいじゅつ]には生身[なまみ]の人間[にんげん]が不可欠[ふかけつ]である。",
      "会場[かいじょう]を出[で]る時[とき]、私[わたし]は機械[きかい]と向[む]き合[あ]った自分[じぶん]自身[じしん]の心[こころ]に気[き]づいた。作品[さくひん]が誰[だれ]の手[て]を経[へ]たかよりも、それが私[わたし]の何[なに]を動[うご]かしたかこそが、美[び]の核心[かくしん]なのかもしれない。"
    ],
    translation: [
      "Last weekend, an exhibition themed 'Artificial Intelligence and Fine Art' was held at the museum of contemporary art. AI-generated paintings and sculptures lined the venue.",
      "The first work was a landscape that an AI, after learning traditional oil painting techniques, took a year to produce. The brushwork and choice of color resembled those of a seasoned painter.",
      "One viewer criticized it as 'lacking a human heart.' Another visitor, however, retorted, 'When appreciating art, does it matter whether the creator is human or machine?'",
      "I stopped in front of a portrait painted by AI. The faint light floating in the woman's eyes seemed to express emotion.",
      "However, that emotion was not the AI's own; it was merely a pattern learned from a vast body of past works. In that respect, it is fundamentally different from human creation.",
      "Curator Nomura, who directed the exhibition, said, 'I wanted it to be an opportunity to reconsider what art is.' The rise of AI is shaking the definition of human creativity.",
      "On the other hand, critical voices rose from traditional painters, calling it 'nothing more than imitation of technique.' According to them, true art requires a living human being.",
      "When leaving the venue, I noticed my own heart that had confronted the machine. Rather than through whose hands the work passed, what it moved within me may be the core of beauty."
    ],
    vocab: [
      { word: "現代美術館", reading: "げんだいびじゅつかん", meaning: "museum of contemporary art" },
      { word: "人工知能", reading: "じんこうちのう", meaning: "artificial intelligence" },
      { word: "展覧会", reading: "てんらんかい", meaning: "exhibition" },
      { word: "生成", reading: "せいせい", meaning: "generation" },
      { word: "筆致", reading: "ひっち", meaning: "brushwork" },
      { word: "色彩", reading: "しきさい", meaning: "coloration" },
      { word: "熟練", reading: "じゅくれん", meaning: "mastery" },
      { word: "鑑賞者", reading: "かんしょうしゃ", meaning: "appreciator" },
      { word: "肖像画", reading: "しょうぞうが", meaning: "portrait" },
      { word: "模倣", reading: "もほう", meaning: "imitation" },
      { word: "創造性", reading: "そうぞうせい", meaning: "creativity" },
      { word: "不可欠", reading: "ふかけつ", meaning: "indispensable" },
      { word: "核心", reading: "かくしん", meaning: "core" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-96 — A historical revisionism trial (歴史を書き換えた代償)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-96",
    title: "歴史[れきし]を書[か]き換[か]えた代償[だいしょう]",
    titleReading: "れきしをかきかえただいしょう",
    level: "N2",
    summary: "A famous historian is sued for deliberately understating massacre victims, and a court weighs academic freedom against the dignity of the dead.",
    estMinutes: 7,
    tags: ["history", "law", "ethics"],
    body: [
      "先月[せんげつ]、著名[ちょめい]な歴史学者[れきしがくしゃ]の矢島[やじま]氏[し]が、著書[ちょしょ]の内容[ないよう]をめぐり名誉毀損[めいよきそん]で起訴[きそ]された。問題[もんだい]となったのは、過去[かこ]の虐殺[ぎゃくさつ]事件[じけん]の犠牲者数[ぎせいしゃすう]を意図的[いとてき]に過少[かしょう]に記述[きじゅつ]した点[てん]である。",
      "原告[げんげん]側[がわ]は、生存[せいぞん]する遺族[いぞく]の証言[しょうげん]や公文書[こうぶんしょ]と照合[しょうごう]した結果[けっか]、著者[ちょしゃ]が事実[じじつ]を知[し]りながら歪曲[わいきょく]したと主張[しゅちょう]した。学問[がくもん]の自由[じゆう]の名[な]の下[もと]に、事実[じじつ]を曲[ま]げることは許[ゆる]されないという立場[たちば]である。",
      "一方[いっぽう]、矢島[やじま]氏[し]の弁護団[べんごだん]は「歴史解釈[れきしかいしゃく]の多様性[たようせい]を認[みと]めるべきだ」と反論[はんろん]した。彼[かれ]らによれば、起訴[きそ]そのものが言論[げんろん]の自由[じゆう]に対[たい]する脅威[きょうい]に過[す]ぎないという。",
      "法廷[ほうてい]では、歴史学者[れきしがくしゃ]や記者[きしゃ]が次々[つぎつぎ]と証人[しょうにん]に立[た]った。彼[かれ]らの証言[しょうげん]は、学問的[がくもんてき]な議論[ぎろん]と意図的[いとてき]な歪曲[わいきょく]との境界線[きょうかいせん]を浮[う]き彫[ぼ]りにした。",
      "ある遺族[いぞく]の女性[じょせい]は「私[わたし]の家族[かぞく]の命[いのち]が数字[すうじ]の遊[あそ]びにされている」と涙[なみだ]を流[なが]した。その言葉[ことば]は法廷[ほうてい]の空気[くうき]を一変[いっぺん]させた。",
      "判決[はんけつ]で裁判長[さいばんちょう]は「学問[がくもん]の自由[じゆう]も、事実[じじつ]を故意[こい]に隠蔽[いんぺい]する行為[こうい]を正当化[せいとうか]する根拠[こんきょ]にはならない」と述[の]べた。歴史[れきし]を書[か]き換[か]える自由[じゆう]は、被害者[ひがいしゃ]の尊厳[そんげん]を侵[おか]す自由[じゆう]ではない。",
      "矢島[やじま]氏[し]は有罪[ゆうざい]となり、著書[ちょしょ]の出版停止[しゅっぱんていし]と賠償金[ばいしょうきん]の支払[しはら]いを命[めい]じられた。この判決[はんけつ]は、表現[ひょうげん]の自由[じゆう]と歴史[れきし]の真実[しんじつ]の関係[かんけい]を問[と]い直[なお]す契機[けいき]となった。",
      "過去[かこ]の痛[いた]みから目[め]を背[そむ]けることは、未来[みらい]への責任[せきにん]を放棄[ほうき]することに等[ひと]しい。私[わたし]たちは、歴史[れきし]という鏡[かがみ]に映[うつ]る自分[じぶん]の姿[すがた]から逃[に]げるわけにはいかない。"
    ],
    translation: [
      "Last month, prominent historian Mr. Yajima was indicted for defamation over the content of his book. The issue was that he had intentionally understated the number of victims in a past massacre.",
      "The plaintiffs argued that, after cross-referencing the testimony of surviving bereaved families and official documents, the author had distorted the facts while knowing the truth. Their position is that distorting facts under the name of academic freedom must not be permitted.",
      "On the other hand, Yajima's defense team countered, 'We should recognize the diversity of historical interpretation.' According to them, the indictment itself is nothing but a threat to freedom of speech.",
      "In court, historians and journalists took the stand one after another. Their testimony highlighted the boundary between academic debate and intentional distortion.",
      "A female bereaved family member shed tears, saying, 'My family's lives are being treated as a play of numbers.' Those words transformed the atmosphere of the courtroom.",
      "In the ruling, the chief judge stated, 'Academic freedom does not serve as grounds to justify acts that deliberately conceal facts.' The freedom to rewrite history is not the freedom to violate the dignity of the victims.",
      "Yajima was found guilty and was ordered to halt publication of the book and pay compensation. This ruling became an opportunity to reconsider the relationship between freedom of expression and historical truth.",
      "Turning our eyes away from the pain of the past is tantamount to abandoning responsibility for the future. We cannot escape from our own reflection in the mirror called history."
    ],
    vocab: [
      { word: "著名", reading: "ちょめい", meaning: "famous" },
      { word: "名誉毀損", reading: "めいよきそん", meaning: "defamation" },
      { word: "起訴", reading: "きそ", meaning: "indictment" },
      { word: "虐殺", reading: "ぎゃくさつ", meaning: "massacre" },
      { word: "犠牲者", reading: "ぎせいしゃ", meaning: "victim" },
      { word: "過少", reading: "かしょう", meaning: "understatement" },
      { word: "歪曲", reading: "わいきょく", meaning: "distortion" },
      { word: "公文書", reading: "こうぶんしょ", meaning: "official document" },
      { word: "隠蔽", reading: "いんぺい", meaning: "concealment" },
      { word: "正当化", reading: "せいとうか", meaning: "justification" },
      { word: "故意", reading: "こい", meaning: "intention" },
      { word: "有罪", reading: "ゆうざい", meaning: "guilty" },
      { word: "出版停止", reading: "しゅっぱんていし", meaning: "publication halt" },
      { word: "放棄", reading: "ほうき", meaning: "abandonment" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-97 — A biodiversity conservation story (森に戻った鳥の声)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-97",
    title: "森[もり]に戻[もど]った鳥[とり]の声[こえ]",
    titleReading: "もりにもどったとりのこえ",
    level: "N2",
    summary: "Young farmers in a mountain village revive a satoyama, and after years of patience an endangered bird returns to nest in their forest.",
    estMinutes: 7,
    tags: ["nature", "community", "conservation"],
    body: [
      "四十年[よんじゅうねん]前[まえ]まで、この山間[さんかん]の村[むら]では春[はる]になると多種多様[たしゅたよう]な鳥[とり]の鳴[な]き声[ごえ]が響[ひび]いていた。しかし、農薬[のうやく]の過剰[かじょう]な使用[しよう]と森林[しんりん]の伐採[ばっさい]により、その声[こえ]は次第[しだい]に消[き]えていった。",
      "十年[じゅうねん]前[まえ]、地元[じもと]の若[わか]い農家[のうか]たちが中心[ちゅうしん]となり、化学肥料[かがかりょう]に頼[たよ]らない農業[のうぎょう]へ転換[てんかん]する運動[うんどう]を始[はじ]めた。同時[どうじ]に、里山[さとやま]の再生[さいせい]計画[けいかく]も立[た]てられた。",
      "最初[さいしょ]の数年[すうねん]は、収穫[しゅうかく]が減[へ]り、経済的[けいざいてき]な苦[くる]しみが続[つづ]いた。それでも、彼[かれ]らの信念[しんねん]を揺[ゆる]がす者[もの]はいなかった。「一度[いちど]失[うしな]った命[いのち]を取[と]り戻[もど]すには、時間[じかん]がかかる」と語[かた]り合[あ]った。",
      "五年[ごねん]ほど前[まえ]から、少[すこ]しずつ変化[へんか]が現[あらわ]れ始[はじ]めた。田[た]んぼにカエルが戻[もど]り、それを追[お]ってヘビやサギが姿[すがた]を見[み]せるようになった。生態系[せいたいけい]の連鎖[れんさ]が回復[かいふく]しつつある証拠[しょうこ]であった。",
      "そして昨春[さくしゅん]、村人[むらびと]は震[ふる]える手[て]で望遠鏡[ぼうえんきょう]を握[にぎ]った。絶滅[ぜつめつ]危惧[きぐ]種[しゅ]とされた鳥[とり]が、数十年[すうじゅうねん]ぶりに営巣[えいそう]しているのが発見[はっけん]されたのだ。",
      "このニュースは全国[ぜんこく]に伝[つた]わり、研究者[けんきゅうしゃ]や自然保護[しぜんほご]団体[だんたい]から視察[しさつ]が相次[あいつ]いだ。彼[かれ]らは口[くち]を揃[そろ]えて「人間[にんげん]が退[しりぞ]いた場所[ばしょ]に、自然[しぜん]は戻[もど]る」と語[かた]った。",
      "もっとも、保護[ほご]活動[かつどう]は依然[いぜん]として困難[こんなん]を極[きわ]める。外来種[がらいしゅ]の侵入[しんにゅう]や気候変動[きこうへんどう]の影響[えいきょう]は、小[ちい]さな村[むら]の力[ちから]だけでは防[ふせ]ぎきれない。",
      "それでも、森[もり]に戻[もど]った鳥[とり]の声[こえ]は、私[わたし]たちに静[しず]かな希望[きぼう]を伝[つた]えている。人間[にんげん]と自然[しぜん]が共存[きょうそん]する道[みち]は、諦[あきら]めない限[かぎ]り、必[かなら]ず存在[そんざい]するのだ。"
    ],
    translation: [
      "Until forty years ago, in this mountain village, the cries of various birds echoed when spring came. However, due to excessive use of pesticides and deforestation, those voices gradually disappeared.",
      "Ten years ago, young local farmers began a movement to convert to agriculture that does not rely on chemical fertilizers. At the same time, a satoyama regeneration plan was drawn up.",
      "For the first few years, harvests decreased and economic hardship continued. Still, no one shook their conviction. They talked among themselves, 'It takes time to recover lives once lost.'",
      "From about five years ago, changes began to appear little by little. Frogs returned to the rice paddies, and snakes and herons followed them, showing their presence. It was evidence that the ecosystem's chain was recovering.",
      "Then last spring, the villagers gripped binoculars with trembling hands. A bird designated as an endangered species was found nesting for the first time in decades.",
      "This news spread nationwide, and inspections by researchers and nature conservation organizations followed one after another. They unanimously said, 'Where humans retreat, nature returns.'",
      "However, conservation activities remain extremely difficult. The invasion of non-native species and the impact of climate change cannot be fully prevented by the power of a small village alone.",
      "Still, the voices of birds that have returned to the forest convey a quiet hope to us. As long as we do not give up, a path for humans and nature to coexist surely exists."
    ],
    vocab: [
      { word: "多種多様", reading: "たしゅたよう", meaning: "wide variety" },
      { word: "農薬", reading: "のうやく", meaning: "pesticide" },
      { word: "伐採", reading: "ばっさい", meaning: "logging" },
      { word: "里山", reading: "さとやま", meaning: "village forest" },
      { word: "連鎖", reading: "れんさ", meaning: "chain" },
      { word: "営巣", reading: "えいそう", meaning: "nesting" },
      { word: "絶滅危惧種", reading: "ぜつめつきぐしゅ", meaning: "endangered species" },
      { word: "望遠鏡", reading: "ぼうえんきょう", meaning: "binoculars" },
      { word: "視察", reading: "しさつ", meaning: "inspection" },
      { word: "依然", reading: "いぜん", meaning: "still" },
      { word: "外来種", reading: "がらいしゅ", meaning: "non-native species" },
      { word: "侵入", reading: "しんにゅう", meaning: "invasion" },
      { word: "諦める", reading: "あきらめる", meaning: "to give up" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-98 — A social credit system (点数で測られる人)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-98",
    title: "点数[てんすう]で測[はか]られる人[ひと]",
    titleReading: "てんすうではかられるひと",
    level: "N2",
    summary: "A trial social-credit system in one city turns civic behavior into scores, and residents start to weigh self-censorship against convenience.",
    estMinutes: 6,
    tags: ["society", "technology", "ethics"],
    body: [
      "昨年[さくねん]から、私[わたし]が住[す]む都市[とし]では社会信用[しゃかいしんよう]システムが試験的[しけんてき]に導入[どうにゅう]されている。市民[しみん]の行動[こうどう]がデータ化[か]され、点数[てんすう]として可視化[かしか]される仕組[しく]みだ。",
      "信号[しんごう]を守[まも]る、ごみを分別[ぶんべつ]する、ボランティアに参加[さんか]する、といった行動[こうどう]には加点[かてん]が与[あた]えられる。逆[ぎゃく]に、反社会的[はんしゃかいてき]な言動[げんど]には減点[げんてん]が科[か]される。",
      "点数[てんすう]が高[たか]い市民[しみん]には、公的[こうてき]施設[しせつ]の無料[むりょう]利用[りよう]や住宅[じゅうたく]優先[ゆうせん]枠[わく]などの特典[とくてん]が与[あた]えられる。一方[いっぽう]、低[ひく]い者[もの]は公共[こうきょう]サービスの制限[せいげん]に直面[ちょくめん]する。",
      "支持者[しじしゃ]は「社会[しゃかい]の規範[きはん]を内面化[ないめんか]する効果[こうか]がある」と主張[しゅちょう]する。実際[じっさい]、交通違反[こうつういはん]や軽犯罪[けいはんざい]の件数[けんすう]は減少[げんしょう]傾向[けいこう]にあるという。",
      "しかし、人権団体[じんけんだんたい]からは強[つよ]い懸念[けねん]が示[しめ]された。「点数[てんすう]という数字[すうじ]で人間[にんげん]の価値[かち]を測[はか]ることは、監視[かんし]社会[しゃかい]への第一歩[だいいっぽ]だ」という批判[ひはん]である。",
      "ある女性[じょせい]は「点数[てんすう]を気[き]にするあまり、自分[じぶん]の意見[いけん]を言[い]えなくなった」と打[う]ち明[あ]けた。言論[げんろん]の自由[じゆう]が形式化[けいしきか]されるおそれが、現実[げんじつ]のものとなりつつある。",
      "心理学者[しんりがくしゃ]の呉[ご]教授[きょうじゅ]は「人間[にんげん]の行動[こうどう]を点数[てんすう]で操作[そうさ]することは、自律[じちつ]を奪[うば]う行為[こうい]に過[す]ぎない」と警告[けいこく]した。善意[ぜんい]までもが点数稼[かせ]ぎの道具[どうぐ]に変[か]わりかねない。",
      "技術[ぎじゅつ]は人間[にんげん]を支[ささ]えるためにあるはずだ。点数[てんすう]で測[はか]られる社会[しゃかい]の先[さき]に、私[わたし]たちは本当に豊[ゆた]かな未来[みらい]を見出[みいだ]せるのだろうか。"
    ],
    translation: [
      "Since last year, a social credit system has been introduced on a trial basis in the city where I live. Citizens' behavior is converted into data and visualized as a score.",
      "Points are awarded for actions such as obeying traffic signals, sorting garbage, and participating in volunteer work. Conversely, antisocial words and actions are penalized with deductions.",
      "Citizens with high scores are given benefits such as free use of public facilities and priority slots for housing. On the other hand, those with low scores face restrictions on public services.",
      "Supporters argue that 'it has the effect of internalizing social norms.' In fact, the number of traffic violations and minor crimes is said to be on the decline.",
      "However, human rights organizations expressed strong concern. The criticism is that 'measuring human value with the number of a score is the first step toward a surveillance society.'",
      "One woman confided, 'I have become unable to express my own opinions because I worry about my score.' The fear that freedom of speech will be formalized is becoming a reality.",
      "Psychologist Professor Go warned, 'Manipulating human behavior with scores is nothing but an act of depriving people of autonomy.' Even goodwill could turn into a tool for scoring points.",
      "Technology is supposed to support human beings. In a society measured by scores, can we truly find a rich future?"
    ],
    vocab: [
      { word: "社会信用", reading: "しゃかいしんよう", meaning: "social credit" },
      { word: "試験的", reading: "しけんてき", meaning: "experimental" },
      { word: "導入", reading: "どうにゅう", meaning: "introduction" },
      { word: "加点", reading: "かてん", meaning: "point addition" },
      { word: "減点", reading: "げんてん", meaning: "point deduction" },
      { word: "特典", reading: "とくてん", meaning: "benefit" },
      { word: "規範", reading: "きはん", meaning: "norm" },
      { word: "内面化", reading: "ないめんか", meaning: "internalization" },
      { word: "監視", reading: "かんし", meaning: "surveillance" },
      { word: "懸念", reading: "けねん", meaning: "concern" },
      { word: "自律", reading: "じちつ", meaning: "autonomy" },
      { word: "警告", reading: "けいこく", meaning: "warning" },
      { word: "善意", reading: "ぜんい", meaning: "goodwill" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-99 — A post-work society (働かない明日が来る)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-99",
    title: "働[はたら]かない明日[あした]が来[く]る",
    titleReading: "はたらかないあしたがくる",
    level: "N2",
    summary: "As automation spreads, a former factory worker, economists, and a philosopher search for new forms of meaning in a society where labor is no longer required.",
    estMinutes: 7,
    tags: ["society", "future", "philosophy"],
    body: [
      "三十年[さんじゅうねん]後[ご]、働[はたら]かなくてよい社会[しゃかい]が到来[とうらい]する――。この予測[よそく]は、もはやSF小説[しょうせつ]の中[なか]だけの話[はなし]ではない。AIとロボットの発展[はってん]により、労働[ろうどう]の概念[がいねん]そのものが揺[ゆる]らいでいる。",
      "経済学者[けいざいがくしゃ]の間[あいだ]では、ベーシックインカムの導入[どうにゅう]が現実的[げんじつてき]な選択肢[せんたくし]として議論[ぎろん]されている。労働[ろうどう]と収入[しゅうにゅう]を切[き]り離[はな]す社会[しゃかい]制度[せいど]を設計[せっけい]し直[なお]す必要[ひつよう]があるからだ。",
      "もっとも、労働[ろうどう]を失[うしな]うことが人間[にんげん]にとって幸福[こうふく]を意味[いみ]するわけではない。仕事[しごと]を通[つう]じて自己[じこ]の価値[かち]を見出[みいだ]す人[ひと]は、今[いま]も少[すく]なくない。",
      "私[わたし]の知人[ちじん]で工場[こうじょう]で働[はたら]いていた男性[だんせい]は、自動化[じどうか]により職[しょく]を失[うしな]った。最初[さいしょ]は解放[かいほう]感[かん]に浸[ひた]ったものの、半年[はんとし]後[ご]には「自分[じぶん]が社会[しゃかい]に必要[ひつよう]とされない人間[にんげん]になったようだ」と語[かた]った。",
      "心理学者[しんりがくしゃ]は、この状態[じょうたい]を「存在[そんざい]の空洞化[くうどうか]」と呼[よ]んでいる。時間[じかん]はあるが、目的[もくてき]がない日々[ひび]は、人間[にんげん]の精神[せいしん]を蝕[むしば]むおそれがある。",
      "地域[ちいき]では、新[あたら]しい形[かた]の「働[はたら]き」を模索[もさく]する動[うご]きが出[で]ている。趣味[しゅみ]の共有[きょうゆう]、他者[たしゃ]の支援[しえん]、知識[ちしき]の伝達[でんたつ]など、金銭[きんせん]を伴[ともな]わない活動[かつどう]が再評価[さいひょうか]され始[はじ]めた。",
      "哲学者[てつがくしゃ]の青山[あおやま]氏[し]は「人間[にんげん]とは、労働[ろうどう]する存在[そんざい]から、意味[いみ]を紡[つむ]ぐ存在[そんざい]へと移行[いこう]しつつある」と語[かた]る。働[はたら]くことの定義[ていぎ]そのものが問[と]い直[なお]されているのだ。",
      "働[はたら]かない明日[あした]が来[く]るとしても、それを孤独[こどく]な虚無[きょむ]にするか、新[あたら]しい繋[つな]がりの時間[じかん]にするかは、私[わたし]たち自身[じしん]の選択[せんたく]に委[ゆだ]ねられている。"
    ],
    translation: [
      "Thirty years from now, a society in which one does not need to work will arrive. This prediction is no longer just talk within science fiction novels. With the development of AI and robots, the very concept of labor is being shaken.",
      "Among economists, the introduction of basic income is being debated as a realistic option. The reason is the need to redesign social institutions that separate labor and income.",
      "Of course, losing work does not necessarily mean happiness for human beings. People who find their own value through work are not few even now.",
      "A male acquaintance who worked at a factory lost his job due to automation. At first he was immersed in a sense of liberation, but six months later, he said, 'It is as if I have become a person no longer needed by society.'",
      "Psychologists call this state 'hollowing out of existence.' Days with time but no purpose can erode the human mind.",
      "In the community, moves have emerged to seek new forms of 'work.' Activities that do not involve money, such as sharing hobbies, supporting others, and transmitting knowledge, have begun to be reappraised.",
      "Philosopher Mr. Aoyama says, 'Human beings are transitioning from beings that work to beings that spin meaning.' The definition of working itself is being reconsidered.",
      "Even if a tomorrow without work arrives, whether it becomes lonely nihilism or a time of new connection is entrusted to our own choices."
    ],
    vocab: [
      { word: "概念", reading: "がいねん", meaning: "concept" },
      { word: "経済学者", reading: "けいざいがくしゃ", meaning: "economist" },
      { word: "切り離す", reading: "きりはなす", meaning: "to separate" },
      { word: "解放", reading: "かいほう", meaning: "liberation" },
      { word: "浸る", reading: "ひたる", meaning: "to be immersed" },
      { word: "空洞化", reading: "くうどうか", meaning: "hollowing out" },
      { word: "蝕む", reading: "むしばむ", meaning: "to erode" },
      { word: "模索", reading: "もさく", meaning: "search" },
      { word: "共有", reading: "きょうゆう", meaning: "sharing" },
      { word: "他者", reading: "たしゃ", meaning: "other person" },
      { word: "支援", reading: "しえん", meaning: "support" },
      { word: "再評価", reading: "さいひょうか", meaning: "reappraisal" },
      { word: "移行", reading: "いこう", meaning: "transition" },
      { word: "虚無", reading: "きょむ", meaning: "nihilism" }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // sx-n2n-100 — A consciousness transfer experiment (意識を移す実験)
  // ───────────────────────────────────────────────────────────
  {
    id: "sx-n2n-100",
    title: "意識[いしき]を移[うつ]す実験[じっけん]",
    titleReading: "いしきをうつすじっけん",
    level: "N2",
    summary: "A neuroscience team transfers a dying patient's consciousness into a digital space, igniting fierce debate about death, dignity, and what it means to be human.",
    estMinutes: 8,
    tags: ["science", "ethics", "future"],
    body: [
      "先週[せんしゅう]、脳神経科学[のうしんけいかがく]の最先端[さいせんたん]を担[にな]う研究[けんきゅう]チームが、人間[にんげん]の意識[いしき]をデジタル空間[くうかん]へ転送[てんそう]する実験[じっけん]に成功[せいこう]したと発表[はっぴょう]した。",
      "被験者[ひけんしゃ]は、末期[まっき]がんの男性[だんせい]であった。彼[かれ]は自[みずか]らの死[し]を目前[もくぜん]に控[ひか]え、「最後[さいご]の瞬間[しゅんかん]まで、意識[いしき]を持続[じぞく]させたい」と志願[しがん]した。",
      "実験[じっけん]では、脳[のう]の神経[しんけい]接続[せつぞく]をデジタル・マップに変換[へんかん]し、意識[いしき]のパターンを再現[さいげん]した。被験者[ひけんしゃ]の心[こころ]は、物理的[ぶつりてき]な肉体[にくたい]を離[はな]れ、仮想[かそう]空間[くうかん]に宿[やど]ったとされる。",
      "公表[こうひょう]後[ご]の会見[かいけん]で、研究者[けんきゅうしゃ]は「移行[いこう]の瞬間[しゅんかん]、被験者[ひけんしゃ]は『視界[しかい]が変[か]わった』と述[の]べた」と語[かた]った。その後[ご]、肉体[にくたい]は静[しず]かに息絶[いき]えた。",
      "この成果[せいか]に対[たい]し、世界[せかい]中[じゅう]から賛否両論[さんぴりょうろん]が巻[ま]き起[お]こった。「死[し]を克服[こくふく]する第一歩[だいいっぽ]」と称賛[しょうさん]する声[こえ]もあれば、「人間[にんげん]の定義[ていぎ]を崩[くず]す」と危惧[きぐ]する声[こえ]も上[あ]がった。",
      "宗教学者[しゅうきょうがくしゃ]は「魂[たましい]の救済[きゅうさい]を科学[かがく]で代替[だいたい]できるか」と問[と]いかけた。一方[いっぽう]、生命倫理学者[せいめいりんりがくしゃ]は「移行[いこう]された意識[いしき]は、もはや人間[にんげん]ではない」と警告[けいこく]した。",
      "私[わたし]はニュースを聞[き]いた時[とき]、複雑[ふくざつ]な感情[かんじょう]を抱[いだ]かずにはいられなかった。死[し]を迎[むか]える人[ひと]に時間[じかん]を与[あた]える技術[ぎじゅつ]は希望[きぼう]である。しかし、それが人間[にんげん]の尊厳[そんげん]を脅[おびや]かすものであってはならない。",
      "意識[いしき]を移[うつ]す実験[じっけん]は、私[わたし]たちに問[と]いを投[な]げかけている。「人間[にんげん]とは何[なに]か」「死[し]とは何[なに]か」。技術[ぎじゅつ]の先[さき]に答[こた]えを探[さが]す旅[たび]は、まだ始[はじ]まったばかりである。"
    ],
    translation: [
      "Last week, a research team at the forefront of neuroscience announced that it had succeeded in an experiment to transfer human consciousness into a digital space.",
      "The subject was a man with terminal cancer. Facing his own death, he volunteered, saying, 'I want to sustain my consciousness until the very last moment.'",
      "In the experiment, the brain's neural connections were converted into a digital map, and the pattern of consciousness was reproduced. The subject's mind is said to have left the physical body and lodged in a virtual space.",
      "At a press conference after the announcement, the researcher said, 'At the moment of transition, the subject stated, \"My field of vision has changed.\"' Afterward, the body quietly breathed its last.",
      "In response to this result, mixed reactions arose from all over the world. There were voices praising it as 'the first step toward overcoming death,' while others voiced fear that 'it breaks the definition of human being.'",
      "A scholar of religion asked, 'Can science substitute for the salvation of the soul?' On the other hand, a bioethicist warned, 'The transferred consciousness is no longer human.'",
      "When I heard the news, I could not help but hold complex emotions. The technology that grants time to those facing death is hope. However, it must not be something that threatens human dignity.",
      "The experiment of transferring consciousness poses questions to us. 'What is a human being?' 'What is death?' The journey to seek answers beyond technology has only just begun."
    ],
    vocab: [
      { word: "脳神経科学", reading: "のうしんけいかがく", meaning: "neuroscience" },
      { word: "最先端", reading: "さいせんたん", meaning: "forefront" },
      { word: "担う", reading: "になう", meaning: "to bear" },
      { word: "転送", reading: "てんそう", meaning: "transfer" },
      { word: "末期", reading: "まっき", meaning: "terminal" },
      { word: "持続", reading: "じぞく", meaning: "continuation" },
      { word: "被験者", reading: "ひけんしゃ", meaning: "subject" },
      { word: "接続", reading: "せつぞく", meaning: "connection" },
      { word: "仮想", reading: "かそう", meaning: "virtual" },
      { word: "宿る", reading: "やどる", meaning: "to lodge" },
      { word: "賛否両論", reading: "さんぴりょうろん", meaning: "mixed opinions" },
      { word: "危惧", reading: "きぐ", meaning: "fear" },
      { word: "救済", reading: "きゅうさい", meaning: "salvation" },
      { word: "脅かす", reading: "おびやかす", meaning: "to threaten" }
    ]
  }
];
