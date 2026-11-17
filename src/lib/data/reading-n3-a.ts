import type { ReadingPassage } from "@/lib/types";

// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// A [reading] immediately following a run of kanji attaches to that whole run.
// Adjacent kanji compounds may be split by brackets (e.g. 日本[にほん]語[ご]).
// Kana, katakana, punctuation, and 々 have no brackets. See types.ts & furigana.tsx.
// 10 original N3-level reading passages with comprehension questions.
// Topics: life in modern Tokyo, Japanese cuisine, cultural festival preparation,
// social media impact, work-life balance, a memorable travel experience,
// environmental challenges, the Japanese education system, technology in daily
// life, a community volunteer project.

export const readingN3A: ReadingPassage[] = [
  // ───────────────────────────────────────────────────────────
  // r-n3-01 — Life in modern Tokyo
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-01",
    title: "東京[とうきょう]での暮[く]らし",
    titleReading: "とうきょうでのくらし",
    level: "N3",
    summary: "A look at daily life in modern Tokyo: the convenience of public transport and shopping, the challenges of high costs and loneliness, and the search for balance and community in a vast city.",
    estMinutes: 7,
    tags: ["Tokyo", "modern life", "city", "daily life"],
    body: [
      "東京[とうきょう]は日本[にほん]の首都[しゅと]であり、政治[せいじ]や経済[けいざい]の中心[ちゅうしん]である。約[やく]千[せん]四[よん]百[ひゃく]万[まん]人[にん]が暮[く]らすこの大[おお]きな都市[とし]には、毎年[まいとし]国内外[こくないがい]から多[おお]くの人[ひと]が訪[おとず]れる。高[たか]いビルが並[なら]ぶ商業[しょうぎょう]地[ち]と昔[むかし]からの下町[したまち]が共存[きょうそん]している点[てん]が、東京[とうきょう]の大[おお]きな魅力[みりょく]だ。このような複雑[ふくざつ]な街[まち]で日々[ひび]を送[おく]る人[ひと]たちの生活[せいかつ]とは、どのようなものだろうか。都心[としん]で働[はたら]き、郊外[こうがい]に住[す]むという生活[せいかつ]スタイルが当[あ]たり前[まえ]になっている。",
      "電車[でんしゃ]や地下鉄[ちかてつ]など、公共[こうきょう]交通[こうつう]機関[きかん]が発達[はったつ]しているため、車[くるま]がなくても生活[せいかつ]しやすい。夜[よる]遅[おそ]くても営業[えいぎょう]しているコンビニやレストランがあり、いつでも欲[ほ]しいものが手[て]に入[はい]る。さらに、ネット通販[つうはん]を使[つか]えば、重[おも]い荷物[にもつ]を運[はこ]ぶ必要[ひつよう]もなく、玄関[げんかん]まで届[とど]けてもらえる。便利[べんり]さを求[もと]めるうちに、時間[じかん]を効率[こうりつ]よく使[つか]えるようになった人[ひと]も多[おお]い。その一方[いっぽう]で、便利[べんり]すぎる生活[せいかつ]に慣[な]れると、困難[こんなん]に直面[ちょくめん]した時[とき]に対処[たいしょ]する力[ちから]が弱[よわ]くなるという指摘[してき]もある。",
      "しかし、東京[とうきょう]での暮[く]らしには課題[かだい]も少[すく]なくない。家賃[やちん]や物価[ぶっか]が高[たか]く、収入[しゅうにゅう]の大[おお]きな部分[ぶぶん]を住[す]まいに費[つい]やす人[ひと]が多[おお]い。通勤[つうきん]電車[でんしゃ]の混雑[こんざつ]は深刻[しんこく]で、毎朝[まいあさ]ストレスを感[かん]じるうちに心身[しんしん]の疲労[ひろう]が蓄積[ちくせき]してしまう。また、人[ひと]と人[ひと]の距離[きょり]が近[ちか]い反面[はんめん]、近所[きんじょ]付[つ]き合[あ]いが薄[うす]れ、孤独[こどく]を感[かん]じる人[ひと]も増[ふ]えている。知[し]らない人[ひと]同士[どうし]が隣[となり]に住[す]んでいても、挨拶[あいさつ]を交[か]わさないのは珍[めずら]しくない。",
      "働[はたら]く人[ひと]たちにとって、仕事[しごと]と私[わたくし]生活[せいかつ]のバランスを取[と]ることは簡単[かんたん]ではない。残業[ざんぎょう]が当[あ]たり前[まえ]の職場[しょくば]では、帰宅[きたく]すると寝[ね]るだけの日々[ひび]になりがちだ。しかし、最近[さいきん]は働[はたら]き方[かた]改革[かいかく]の影響[えいきょう]で、定時[ていじ]退社[たいしゃ]を推奨[すいしょう]する企業[きぎょう]も増[ふ]えてきた。休日[きゅうじつ]に趣味[しゅみ]を楽[たの]しんだり、友人[ゆうじん]と会[あ]ったりすることで、心[こころ]のバランスを保[たも]つことが大切[たいせつ]である。時間[じかん]をうまく使[つか]えるかどうかが、充実[じゅうじつ]した生活[せいかつ]を送[おく]るための鍵[かぎ]になる。",
      "孤独[こどく]を解消[かいしょう]するために、地域[ちいき]の活動[かつどう]に参加[さんか]する人[ひと]もいれば、趣味[しゅみ]の集[あつ]まりに通[かよ]う人[ひと]もいる。共通[きょうつう]の興味[きょうみ]を持[も]つ人[ひと]と交流[こうりゅう]することで、新[あたら]しい友人[ゆうじん]ができる機会[きかい]も生[う]まれる。インターネットを通[とお]じて人[ひと]と繋[つな]がることも多[おお]くなったが、画面[がめん]越[ご]しの関係[かんけい]だけでは物足[ものた]りなさを感[かん]じる人[ひと]も少[すく]なくない。やはり、対面[たいめん]での交流[こうりゅう]には、心[こころ]を豊[ゆた]かにする力[ちから]があると言[い]えるだろう。都市[とし]生活[せいかつ]の中[なか]で人[ひと]との繋[つな]がりをどう作[つく]るかは、個人[こじん]の腕[うで]の見[み]せ所[どころ]である。",
      "東京[とうきょう]は機会[きかい]に満[み]ちた街[まち]である反面[はんめん]、競争[きょうそう]も激[はげ]しく、生[い]きるペースを見付[みつ]けるのは容易[ようい]ではない。便利[べんり]さに頼[たよ]りすぎるどころか、時[とき]には立[た]ち止[とど]まって自分[じぶん]の生活[せいかつ]を振[ふ]り返[かえ]る時間[じかん]が必要[ひつよう]である。周囲[しゅうい]の流[なが]れに流[なが]されることなく、自分[じぶん]らしい暮[く]らし方[かた]を探[さが]し続[つづ]けることが大切[たいせつ]だ。人[ひと]との繋[つな]がりや趣味[しゅみ]を大切[たいせつ]にすれば、この巨大[きょだい]な都市[とし]でも居場所[いばしょ]を見付[みつ]けられるだろう。この街[まち]でどう生[い]きるかは、結局[けっきょく]のところ、自分[じぶん]次第[しだい]なのである。"
    ],
    translation: [
      "Tokyo is the capital of Japan and the center of politics and economy. About fourteen million people live in this large city, which is visited by many people from inside and outside the country every year. The fact that commercial districts lined with tall buildings coexist with old downtown areas is a great charm of Tokyo. What is the daily life like for the people who live their days in such a complex city? A lifestyle of working in the city center and living in the suburbs has become the norm.",
      "Because public transportation such as trains and subways is well-developed, it is easy to live without a car. There are convenience stores and restaurants that stay open late at night, so you can get what you want anytime. Furthermore, if you use online shopping, you do not need to carry heavy luggage; it is delivered right to your door. While seeking convenience, many people have also come to use their time efficiently. On the other hand, there is also a point that becoming too used to a convenient life weakens one's ability to cope when facing difficulties.",
      "However, life in Tokyo has no shortage of challenges. Rents and prices are high, and many people spend a large part of their income on housing. Crowding on commuter trains is severe, and as one feels stress every morning, mental and physical fatigue accumulates. Also, while the distance between people is close, neighborhood interactions have weakened, and more people feel lonely. It is not rare for strangers to live next door to each other without exchanging greetings.",
      "For working people, balancing work and private life is not easy. In workplaces where overtime is the norm, days tend to be just about returning home and sleeping. However, recently, influenced by work-style reform, more companies have begun recommending leaving work on time. It is important to maintain mental balance by enjoying hobbies or meeting friends on holidays. Whether one can use time well becomes the key to living a fulfilling life.",
      "To relieve loneliness, some people participate in community activities while others go to hobby gatherings. By interacting with people who share common interests, opportunities to make new friends also arise. While connecting with people through the internet has increased, not a few people feel unsatisfied with screen-mediated relationships alone. After all, face-to-face interaction has the power to enrich the heart. How to create connections with people in urban life is where each individual shows their skill.",
      "Tokyo is a city full of opportunities, but on the other hand, competition is fierce, and finding one's pace to live is not easy. Far from relying too much on convenience, time is needed to occasionally stop and look back on one's life. It is important to keep searching for one's own way of living without being swept away by the flow of surroundings. If you value connections with people and hobbies, you will likely find your place even in this huge city. How to live in this city is, in the end, up to oneself."
    ],
    questions: [
      {
        q: "According to the passage, what is one of Tokyo's main charms?",
        choices: ["The coexistence of tall commercial buildings and old downtown areas", "Its low cost of living", "The absence of crowds", "Its lack of public transportation"],
        answerIndex: 0,
        explanation: "Tokyo's charm is that tall commercial districts coexist with old downtown areas (高いビルが並ぶ商業地と昔からの下町が共存している点が魅力だ)."
      },
      {
        q: "What is a problem caused by crowding on commuter trains?",
        choices: ["Lower rents", "Mental and physical fatigue accumulating from daily stress", "More free time", "Less loneliness"],
        answerIndex: 1,
        explanation: "Crowding causes daily stress, leading to accumulated mental and physical fatigue (ストレスを感じるうちに心身の疲労が蓄積してしまう)."
      },
      {
        q: "How can working people maintain mental balance according to the passage?",
        choices: ["By working longer overtime", "By enjoying hobbies and meeting friends on holidays", "By avoiding all social contact", "By moving to the city center only"],
        answerIndex: 1,
        explanation: "Enjoying hobbies and meeting friends on holidays helps maintain mental balance (休日に趣味を楽しんだり、友人と会ったりすることで心のバランスを保つ)."
      },
      {
        q: "What does the author say about screen-mediated relationships?",
        choices: ["They are completely satisfying", "Not a few people feel unsatisfied with them alone", "They replace all face-to-face interaction", "They are banned in Tokyo"],
        answerIndex: 1,
        explanation: "Not a few people feel unsatisfied with screen-mediated relationships alone (画面越の関係だけでは物足りなさを感じる人も少なくない)."
      },
      {
        q: "What does the author conclude about living in Tokyo?",
        choices: ["It is impossible to find one's place", "How to live is ultimately up to oneself", "One must always follow the crowd", "Convenience should be the only priority"],
        answerIndex: 1,
        explanation: "How to live in Tokyo is ultimately up to oneself (この街でどう生きるかは、結局のところ、自分次第なのである)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-02 — The art of Japanese cuisine
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-02",
    title: "日本[にほん]料[りょう]理[り]の技[わざ]と心[こころ]",
    titleReading: "にほんりょうりのわざとこころ",
    level: "N3",
    summary: "An exploration of Japanese cuisine as a UNESCO intangible heritage: seasonal ingredients, years of artisanal training, the spirit of hospitality, global appreciation, and gratitude toward food.",
    estMinutes: 8,
    tags: ["Japanese cuisine", "food culture", "tradition", "craft"],
    body: [
      "日本[にほん]料[りょう]理[り]は、ユネスコの無形[むけい]文化[ぶんか]遺産[いさん]にも登録[とうろく]されている伝統[でんとう]的[てき]な食[しょく]文化[ぶんか]である。その特徴[とくちょう]は、季節[きせつ]感[かん]を大切[たいせつ]にし、素材[そざい]本来[ほんらい]の味[あじ]を引[ひ]き出[だ]すことにある。見[み]た目[め]の美[うつく]しさも重視[じゅうし]され、器[うつわ]の選[えら]び方[かた]一[ひと]つにも深[ふか]い意味[いみ]が込[こ]められている。これらは、単[たん]なる食事[しょくじ]というどころか、一[ひと]つの芸術[げいじゅつ]と言[い]っても過言[かごん]ではない。では、この日本[にほん]料[りょう]理[り]の背後[はいご]には、どのような精神[せいしん]が宿[やど]っているのだろうか。",
      "日本[にほん]料[りょう]理[り]において、素材[そざい]の選[えら]び方[かた]は極[きわ]めて重要[じゅうよう]である。特[とく]に、季節[きせつ]ごとの食材[しょくざい]を活[いか]すことで、自然[しぜん]の移[うつ]り変[か]わりを皿[さら]の上[うえ]に表現[ひょうげん]する。春[はる]には山菜[さんさい]、夏[なつ]には鰻[うなぎ]、秋[あき]には松茸[まつたけ]、冬[ふゆ]には鍋[なべ]物[もの]というように、季節[きせつ]に対[たい]して敏感[びんかん]に反応[はんのう]する。新[あたら]しい季節[きせつ]の食材[しょくざい]が店[みせ]に並[なら]ぶうちに、料理人[りょうりにん]はその年[とし]ならではの味[あじ]を考[かんが]え出[だ]す。素材[そざい]を知[し]り尽[つ]くすことが、美味[おい]しい料理[りょうり]の第一[だいいち]歩[ぽ]なのである。",
      "職人[しょくにん]の技術[ぎじゅつ]は、短[みじか]い期間[きかん]で身[み]につくものではない。出汁[だし]を取[と]る一[ひと]つにしても、何年[なんねん]もかけて勘[かん]を磨[みが]き続[つづ]ける必要[ひつよう]がある。包丁[ほうちょう]の使[つか]い方[かた]、火[ひ]の通[とお]し方[かた]、盛[も]り付[つ]けのバランスなど、すべてに繊細[せんさい]な工夫[くふう]が求[もと]められる。師匠[ししょう]の技[わざ]を見[み]ながら盗[ぬす]むという伝統[でんとう]的[てき]な修行[しゅぎょう]の仕方[しかた]が、今[いま]も続[つづ]いている。技術[ぎじゅつ]の向上[こうじょう]を怠[おこた]らなければ、料理人[りょうりにん]としての成長[せいちょう]も止[と]まることはない。",
      "日本[にほん]料[りょう]理[り]には、「おもてなし」の精神[せいしん]が欠[か]かせない。客[きゃく]の好[この]みや体調[たいちょう]を気[き]にかけながら、最適[さいてき]な料理[りょうり]を提供[ていきょう]する心[こころ]遣[づか]いが求[もと]められる。食事[しょくじ]をする人[ひと]が心[こころ]から満足[まんぞく]できるようにと願[ねが]う気持[きも]ちが、料理[りょうり]の味[あじ]をより深[ふか]くする。単[たん]に美味[おい]しいものを出[だ]すというよりも、相手[あいて]に対[たい]して思[おも]いやりを示[しめ]す行為[こうい]なのである。このような精神[せいしん]があるからこそ、日本[にほん]料[りょう]理[り]は世界[せかい]中[じゅう]で愛[あい]されるようになった。",
      "日本[にほん]料[りょう]理[り]は、健康[けんこう]面[めん]でも高[たか]く評価[ひょうか]されている。野菜[やさい]や魚[さかな]を中心[ちゅうしん]とした低[てい]カロリーの食事[しょくじ]は、長生[ながい]きの秘訣[ひけつ]の一[ひと]つとされている。近年[きんねん]は、海外[かいがい]でも日本[にほん]料[りょう]理[り]の店[みせ]が増[ふ]え、寿司[すし]や天麩羅[てんぷら]は日常[にちじょう]的[てき]な食[しょく]となりつつある。ただし、本場[ほんば]の味[あじ]を守[まも]りつつ、現地[げんち]の食文化[しょくぶんか]に合[あ]わせた工夫[くふう]も必要[ひつよう]だろう。伝統[でんとう]と革新[かくしん]のバランスを取[と]りながら、日本[にほん]料[りょう]理[り]はこれからも進化[しんか]していくに違[ちが]いない。",
      "食[た]べるという行為[こうい]は、生[い]きるための基本[きほん]であると同時[どうじ]に、文化[ぶんか]を伝[つた]える役割[やくわり]も果[はた]している。日本[にほん]料[りょう]理[り]に込[こ]められた技[わざ]と心[こころ]を知[し]れば、一[ひと]皿[さら]の料理[りょうり]の味[あじ]もより一層[いっそう]深[ふか]く感[かん]じられるだろう。次[つぎ]の世代[せだい]にこの文化[ぶんか]を継[つ]いでいくことは、現代[げんだい]に生[い]きる私[わたし]たちの責任[せきにん]である。食[た]卓[たく]を通[つう]じて日本[にほん]の精神[せいしん]を世界[せかい]に発信[はっしん]し続[つづ]けたいものである。そのためには、作[つく]る側[がわ]も食[た]べる側[がわ]も、食[た]べ物[もの]に対[たい]する感謝[かんしゃ]の気持[きも]ちを忘[わす]れてはならない。"
    ],
    translation: [
      "Japanese cuisine is a traditional food culture that has also been registered as a UNESCO intangible cultural heritage. Its characteristics lie in valuing a sense of the seasons and drawing out the original taste of ingredients. Visual beauty is also emphasized, and even the way of choosing vessels holds deep meaning. These are far from being merely meals; it is no exaggeration to call them a form of art. Then, what kind of spirit dwells behind this Japanese cuisine?",
      "In Japanese cuisine, the way of choosing ingredients is extremely important. Especially by using ingredients for each season, the changing of nature is expressed on a plate. Mountain vegetables in spring, eel in summer, matsutake mushrooms in autumn, and hot pot dishes in winter — it reacts sensitively to the seasons. While seasonal ingredients line the shops, chefs devise flavors unique to that year. Knowing ingredients thoroughly is the first step to delicious cooking.",
      "Artisans' techniques are not acquired in a short period. Even taking broth requires years of polishing one's intuition. The way of using a knife, how heat is applied, the balance of plating — delicate efforts are demanded in everything. The traditional way of training, stealing techniques while watching the master, still continues today. As long as one does not neglect improving technique, growth as a chef will not stop either.",
      "The spirit of hospitality is indispensable in Japanese cuisine. The consideration is required to offer the best dishes while caring for customers' preferences and physical condition. The feeling of wishing that those who eat be truly satisfied makes the taste of the food deeper. Rather than simply serving delicious things, it is an act of showing consideration toward the other person. It is precisely because of such a spirit that Japanese cuisine has come to be loved around the world.",
      "Japanese cuisine is also highly appreciated for its health aspects. A low-calorie diet centered on vegetables and fish is considered one of the secrets to longevity. In recent years, Japanese restaurants have increased overseas, and sushi and tempura are becoming everyday foods. However, while protecting the authentic taste, efforts to suit local food cultures also seem necessary. Balancing tradition and innovation, Japanese cuisine will surely continue to evolve.",
      "The act of eating is a basic necessity for living, while at the same time playing the role of transmitting culture. Knowing the techniques and spirit put into Japanese cuisine, the taste of a single dish will likely be felt even more deeply. Passing this culture to the next generation is the responsibility of us living in the present. We hope to continue communicating the spirit of Japan to the world through the dining table. For that, both those who make and those who eat must not forget gratitude toward food."
    ],
    questions: [
      {
        q: "According to the passage, what is one of the characteristics of Japanese cuisine?",
        choices: ["Valuing a sense of the seasons and drawing out ingredients' original taste", "Using only imported ingredients", "Ignoring visual appearance", "Avoiding seasonal ingredients"],
        answerIndex: 0,
        explanation: "Japanese cuisine values a sense of the seasons and draws out the original taste of ingredients (季節感を大切にし、素材本来の味を引き出す)."
      },
      {
        q: "Why does it take years to master Japanese cuisine techniques?",
        choices: ["Because there are no masters to teach", "Because even taking broth requires polishing one's intuition for years", "Because the laws require long training", "Because ingredients change every day"],
        answerIndex: 1,
        explanation: "Even taking broth requires years of polishing intuition (出汁を取る一つにしても、何年もかけて勘を磨き続ける必要がある)."
      },
      {
        q: "What spirit is indispensable in Japanese cuisine?",
        choices: ["The spirit of competition", "The spirit of hospitality", "The spirit of cost reduction", "The spirit of speed"],
        answerIndex: 1,
        explanation: "The spirit of hospitality is indispensable in Japanese cuisine (おもてなしの精神が欠かせない)."
      },
      {
        q: "Why is Japanese cuisine appreciated from a health perspective?",
        choices: ["It is high-calorie", "Its low-calorie, vegetable- and fish-centered diet is a secret to longevity", "It uses lots of sugar", "It avoids all fish"],
        answerIndex: 1,
        explanation: "A low-calorie diet centered on vegetables and fish is one secret to longevity (野菜や魚を中心とした低カロリーの食事は長生きの秘訣)."
      },
      {
        q: "What does the author say is needed to communicate Japanese cuisine to the world?",
        choices: ["Forgetting gratitude toward food", "Both makers and eaters must not forget gratitude toward food", "Banning all innovation", "Closing all restaurants overseas"],
        answerIndex: 1,
        explanation: "Both those who make and those who eat must not forget gratitude toward food (作る側も食べる側も食べ物に対する感謝の気持ちを忘れてはならない)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-03 — A cultural festival preparation
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-03",
    title: "文化[ぶんか]祭[さい]の準備[じゅんび]日記[にっき]",
    titleReading: "ぶんかさいのじゅんびにっき",
    level: "N3",
    summary: "A high school student's diary of preparing for a cultural festival: choosing a café project, decorations, overcoming schedule conflicts, the excitement before opening day, and reflections on teamwork.",
    estMinutes: 7,
    tags: ["school festival", "preparation", "teamwork", "school life"],
    body: [
      "毎年[まいとし]秋[あき]になると、日本[にほん]の多[おお]くの学校[がっこう]で文化[ぶんか]祭[さい]が開[ひら]かれる。生徒[せいと]たちが自[みずか]ら企画[きかく]し、準備[じゅんび]するこの行事[ぎょうじ]は、学校[がっこう]生活[せいかつ]の最[もっと]も大[おお]きな印象[いんしょう]を残[のこ]すものの一[ひと]つである。私[わたし]が通[かよ]う高校[こうこう]でも、来週[らいしゅう]に迫[せま]った文化[ぶんか]祭[さい]に向[む]けて、全[ぜん]生徒[せいと]が力[ちから]を合[あ]わせている。準備[じゅんび]が進[すす]むにつれて、放課[ほうか]後[ご]の教室[きょうしつ]はいつも賑[にぎ]やかだ。完成[かんせい]した時[とき]の喜[よろこ]びを想像[そうぞう]するだけで、疲[つか]れも吹[ふ]き飛[と]ぶ思[おも]いである。",
      "私[わたし]たちのクラスは、カフェをやることに決[き]めた。メニューは、ドリンク、手作[てづく]りのお菓子[かし]、軽[かる]い食事[しょくじ]を中心[ちゅうしん]に構成[こうせい]する。値段[ねだん]を安[やす]くする一方[いっぽう]で、味[あじ]には妥協[だきょう]しないと全員[ぜんにん]で話[はな]し合[あ]った。材料[ざいりょう]を買[か]うための予算[よさん]も限[かぎ]られているため、無駄[むだ]を省[はぶ]く工夫[くふう]が求[もと]められる。何度[なんど]も試作[しさく]を重[かさ]ねるうちに、少[すこ]しずつ理想[りそう]の味[あじ]に近[ちか]づいている。全員[ぜんにん]の協力[きょうりょく]があれば、きっと良[よ]いカフェができると信[しん]じている。",
      "部屋[へや]の装飾[そうしょく]も、クラスの女子[じょし]たちが中心[ちゅうしん]になって進[すす]めている。手作[てづく]りの飾[かざ]りをつるすだけでなく、壁[かべ]にメッセージを書[か]いたポスターも貼[は]る予定[よてい]だ。使[つか]い捨[す]ての素材[そざい]を再利用[さいりよう]することで、環境[かんきょう]にも優[やさ]しい工夫[くふう]を盛[も]り込[こ]んだ。色[いろ]の組[く]み合[あ]わせに対[たい]して意見[いけん]が割[わ]れることもあったが、最終[さいしゅう]的[てき]にはみんなが納得[なっとく]する案[あん]に落[お]ち着[つ]いた。これが完成[かんせい]すれば、教室[きょうしつ]の雰囲気[ふんいき]が一変[いっぺん]するだろう。",
      "もちろん、準備[じゅんび]は順調[じゅんちょう]なことばかりではない。意見[いけん]の食[く]い違[ちが]いや、作業[さぎょう]の遅[おく]れに悩[なや]むこともある。特[とく]に、テスト期間[きかん]と準備[じゅんび]が重[かさ]なった時[とき]は、時間[じかん]の確保[かくほ]に大[おお]きな苦労[くろう]があった。それでも、仲間[なかま]と協力[きょうりょく]して乗[の]り越[こ]える経験[けいけん]は、授業[じゅぎょう]では学[まな]べない貴重[きちょう]なものだ。困難[こんなん]を共[とも]にするうちに、クラスの結束[けっしゅく]も自然[しぜん]と強[つよ]くなっていく。こうした経験[けいけん]こそ、高校[こうこう]生活[せいかつ]の本当[ほんとう]の価値[かち]なのかもしれない。",
      "いよいよ明日[あす]が本番[ほんばん]である。今夜[こんや]は、最後[さいご]の仕上[しあ]げと確認[かくにん]のために、少[すこ]し遅[おそ]くまで残[のこ]る予定[よてい]だ。不安[ふあん]がないわけではないが、それ以上[いじょう]に期待[きたい]の方[ほう]が大[おお]きい。来[き]てくれる人[ひと]たちに「楽[たの]しかった」と言[い]ってもらえるように、最後[さいご]まで力[ちから]を抜[ぬ]かないつもりだ。多[おお]くの笑顔[えがお]が見[み]られれば、これまでの努力[どりょく]が報[むく]われるだろう。一生[いっしょう]忘[わす]れられない思[おも]い出[で]になることを確[たし]信[しん]している。",
      "文化[ぶんか]祭[さい]が終[お]わった後[あと]には、きっと少[すこ]しの寂[さび]しさも感[かん]じるはずだ。しかし、共[とも]に準備[じゅんび]した仲間[なかま]との思[おも]い出[で]は、ずっと心[こころ]に残[のこ]るだろう。この経験[けいけん]を通[とお]じて、私[わたし]たちは多[おお]くのことを学[まな]んだ。次[つぎ]の年[とし]の文化[ぶんか]祭[さい]に向[む]けて、新[あたら]しい目標[もくひょう]も浮[う]かんできた。今[いま]から少[すこ]しずつ考[かんが]えていくつもりである。高校[こうこう]生活[せいかつ]の残[のこ]り少[すく]ない日々[ひび]を、仲間[なかま]と共[とも]に大切[たいせつ]に過[す]ごしたい。"
    ],
    translation: [
      "Every year when autumn comes, cultural festivals are held at many schools in Japan. This event, which students plan and prepare themselves, is one of the things that leaves the biggest impression in school life. At the high school I attend, too, all students are joining forces for the cultural festival that is approaching next week. As preparations advance, the classroom after school is always lively. Just imagining the joy when it is completed, even fatigue seems to fly away.",
      "Our class decided to run a café. The menu is centered on drinks, handmade sweets, and light meals. While keeping prices low, everyone discussed not compromising on taste. Since the budget for buying ingredients is also limited, efforts to eliminate waste are required. While making many trial versions, we are gradually getting closer to the ideal taste. With everyone's cooperation, I believe we can surely make a good café.",
      "The decoration of the room is also being advanced with the girls in the class at the center. Not only hanging handmade decorations, but posters with messages written on them are also planned to be put on the walls. By reusing disposable materials, eco-friendly efforts were also incorporated. Opinions sometimes divided over color combinations, but eventually it settled on a plan everyone could accept. When this is completed, the atmosphere of the classroom will completely change.",
      "Of course, preparations are not all smooth. There are also troubles that worry us, such as disagreements and delays in work. Especially when the test period overlapped with preparations, securing time was a big struggle. Still, the experience of overcoming difficulties together with comrades is a valuable thing that cannot be learned in class. As we share hardships, the class unity naturally becomes stronger. Such experiences may be the true value of high school life.",
      "Tomorrow is finally the actual day. Tonight, I plan to stay a little late for the final touches and confirmation. It is not that there is no anxiety, but expectation is greater than that. I intend not to slack off until the end so that those who come can say they had fun. If many smiles can be seen, the efforts so far will be rewarded. I am certain it will become an unforgettable memory.",
      "After the cultural festival ends, I am sure I will feel a little loneliness. However, the memories with the comrades who prepared together will remain in my heart forever. Through this experience, we learned many things. New goals for the next year's cultural festival also came to mind. I intend to think about them little by little from now. I want to value the remaining few days of high school life together with my comrades."
    ],
    questions: [
      {
        q: "What does the narrator's class decide to do for the cultural festival?",
        choices: ["Run a café", "Perform a play", "Hold a sports competition", "Sell secondhand books"],
        answerIndex: 0,
        explanation: "The class decided to run a café (クラスは、カフェをやることに決めた)."
      },
      {
        q: "How do they incorporate eco-friendly efforts in the decoration?",
        choices: ["By using disposable materials only once", "By reusing disposable materials", "By buying expensive new decorations", "By avoiding all decorations"],
        answerIndex: 1,
        explanation: "They reuse disposable materials to incorporate eco-friendly efforts (使い捨ての素材を再利用することで環境にも優しい工夫を盛り込んだ)."
      },
      {
        q: "What was a big struggle during preparations?",
        choices: ["Having too much free time", "Securing time when the test period overlapped with preparations", "Having too many volunteers", "Getting too much budget"],
        answerIndex: 1,
        explanation: "When the test period overlapped with preparations, securing time was a big struggle (テスト期間と準備が重なった時は時間の確保に大きな苦労があった)."
      },
      {
        q: "What does the narrator intend to do so visitors enjoy themselves?",
        choices: ["Slack off until the end", "Not slack off until the end", "Charge high prices", "Cancel the event"],
        answerIndex: 1,
        explanation: "The narrator intends not to slack off until the end so visitors can say they had fun (最後まで力を抜かないつもりだ)."
      },
      {
        q: "What will remain in the narrator's heart after the festival?",
        choices: ["Only the budget problems", "Memories with the comrades who prepared together", "Nothing at all", "Only the test results"],
        answerIndex: 1,
        explanation: "Memories with the comrades who prepared together will remain in the heart forever (共に準備した仲間との思い出はずっと心に残る)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-04 — The impact of social media
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-04",
    title: "SNSが変[か]える現代[げんだい]社会[しゃかい]",
    titleReading: "えすえぬえすがかえるげんだいしゃかい",
    level: "N3",
    summary: "How social media has reshaped modern society: connecting people across distances, echo chambers, mental health risks through comparison, fake news, and the need for balanced, mindful use.",
    estMinutes: 8,
    tags: ["social media", "society", "communication", "information"],
    body: [
      "スマートフォンの普及[ふきゅう]に伴[ともな]って、SNSは私[わたし]たちの生活[せいかつ]に欠[か]かせないものになった。LINEで友達[ともだち]と連絡[れんらく]を取[と]る一方[いっぽう]で、Twitterでニュースをチェックしたり、Instagramで写真[しゃしん]を共有[きょうゆう]したりする人[ひと]も多[おお]い。昔[むかし]に比[くら]べて、情報[じょうほう]の伝[つた]わる速[はや]さは比[ひ]較[かく]にならないほど速[はや]くなった。この変化[へんか]に対[たい]して、便利[べんり]さを感[かん]じる人[ひと]が多[おお]い一方[いっぽう]で、懸念[けねん]を抱[いだ]く人[ひと]も少[すく]なくない。SNSが私[わたし]たちの社会[しゃかい]にどのような影響[えいきょう]を与[あた]えているのか、考[かんが]えてみよう。",
      "まず、SNSの最大[さいだい]の利点[りてん]は、距離[きょり]を超[こ]えて人[ひと]と繋[つな]がれる点[てん]である。遠[とお]くに住[す]む家族[かぞく]や友人[ゆうじん]とも、リアルタイムでやり取[と]りができるようになった。また、共通[きょうつう]の趣味[しゅみ]を持[も]つ人[ひと]と出会[であ]う機会[きかい]も増[ふ]え、新[あたら]しいコミュニティが生[う]まれている。小[ちい]さな店[みせ]や個人[こじん]が情報[じょうほう]を発信[はっしん]することで、全国[ぜんこく]の客[きゃく]を集[あつ]めることも可能[かのう]になった。情報[じょうほう]が行[い]き渡[わた]るスピードの速[はや]さは、商売[しょうばい]の形[かたち]までも変[か]えつつある。",
      "しかし、SNSには問題[もんだい]もある。自分[じぶん]と同[おな]じ意見[いけん]の人[ひと]とだけ繋[つな]がっていると、多様[たよう]な視点[してん]に触[ふ]れる機会[きかい]が減[へ]ってしまう。気[き]づかないうちに、自分[じぶん]の信念[しんねん]が強[つよ]くなるどころか、かえって偏[かたよ]った考[かんが]え方[かた]に固[かた]まる危険[きけん]がある。アルゴリズムが好[この]みに合[あ]わせて情報[じょうほう]を提示[ていじ]するため、無意識[むいしき]のうちに狭[せま]い世界[せかい]に閉[と]じ込[こ]められかねない。このような状態[じょうたい]を避[さ]けるには、自[みずか]ら多様[たよう]な情報[じょうほう]に触[ふ]れる努力[どりょく]が必要[ひつよう]だ。",
      "さらに深刻[しんこく]なのは、SNSが心[こころ]の健康[けんこう]に与[あた]える影響[えいきょう]である。他人[たにん]の華[はな]やかな投稿[とうこう]を見[み]るうちに、自分[じぶん]の生活[せいかつ]が物足[ものた]りなく感[かん]じる人[ひと]が増[ふ]えている。比[ひ]較[かく]の対象[たいしょう]が身近[みぢか]な友人[ゆうじん]だけでなく、世界中[せかいじゅう]の人[ひと]に広[ひろ]がったことで、劣[れっ]等[とう]感[かん]を抱[いだ]きやすくなった。自[じ]己[こ]肯定[こうてい]感[かん]が下[さ]がり続[つづ]ければ、うつ状態[じょうたい]に陥[おちい]る恐[おそ]れすらある。見[み]すぎるのではなく、SNSとの距離[きょり]を意識的[いしきてき]に保[たも]つことが大切[たいせつ]である。",
      "情報[じょうほう]の信頼[しんらい]性[せい]という問題[もんだい]も無視[むし]できない。誰[だれ]でも簡単[かんたん]に情報[じょうほう]を発信[はっしん]できる反面[はんめん]、偽[にせ]のニュースや誤[あやま]った知識[ちしき]も瞬[またた]く間[ま]に広[ひろ]がる。確[たし]かな情報源[じょうほうげん]を確[たし]かめる習慣[しゅうかん]がなければ、知[し]らず知[し]らずのうちに誤[あやま]った情報[じょうほう]に左右[さゆう]されることになる。特[とく]に、感情的[かんじょうてき]な投稿[とうこう]は拡散[かくさん]されやすいため、冷静[れいせい]な判断[はんだん]が求[もと]められる。情報[じょうほう]リテラシーを高[たか]める教育[きょういく]が、これからの時代[じだい]には欠[か]かせない。",
      "SNSそのものが悪[わる]いわけではない。使[つか]い方[かた]次第[しだい]で、便利[べんり]な道具[どうぐ]にも凶器[きょうき]にもなり得[う]る。私[わたし]たち一人[ひとり]一人[ひとり]が、自[みずか]らの使[つか]い方[かた]を振[ふ]り返[かえ]る時期[じき]に来[き]ているのではないだろうか。便利[べんり]さに頼[たよ]るばかりではなく、時[とき]にはスマホを置[お]いて現実[げんじつ]の人間[にんげん]関係[かんけい]を大切[たいせつ]にしたい。バランスの取[と]れた使[つか]い方[かた]を心[こころ]がけることが、健全[けんぜん]なSNS生活[せいかつ]の鍵[かぎ]である。"
    ],
    translation: [
      "With the spread of smartphones, social media has become indispensable in our lives. While contacting friends on LINE, many people also check news on Twitter and share photos on Instagram. Compared to the past, the speed at which information spreads has become incomparably faster. While many feel convenience about this change, not a few people also harbor concerns. Let us consider what kind of impact social media has on our society.",
      "First, the greatest advantage of social media is that it can connect people beyond distance. Even with family and friends living far away, real-time communication has become possible. Also, opportunities to meet people with common hobbies have increased, and new communities are born. It has also become possible for small shops and individuals to attract customers nationwide by disseminating information. The speed of information spread is even changing the form of business.",
      "However, social media also has problems. If you only connect with people who share your opinions, opportunities to encounter diverse perspectives decrease. Without noticing, far from your beliefs becoming stronger, there is a danger of falling into biased ways of thinking. Because algorithms present information suited to your preferences, you can be locked into a narrow world unconsciously. To avoid such a state, the effort to encounter diverse information yourself is necessary.",
      "Even more serious is the impact of social media on mental health. While looking at others' brilliant posts, more people come to feel their own lives are unsatisfying. As the objects of comparison spread from close friends to people all over the world, it has become easier to harbor feelings of inferiority. If self-affirmation continues to drop, there is even a risk of falling into a depressive state. Rather than looking too much, it is important to consciously maintain distance from social media.",
      "The problem of information reliability also cannot be ignored. While anyone can easily disseminate information, on the other hand, fake news and incorrect knowledge also spread in the blink of an eye. Without the habit of checking reliable sources, you will end up being swayed by incorrect information without realizing it. Especially, emotional posts are easy to spread, so calm judgment is required. Education to raise information literacy is indispensable for the coming era.",
      "Social media itself is not bad. Depending on how it is used, it can become either a convenient tool or a weapon. Has the time come for each of us to reflect on our own way of using it? Rather than relying only on convenience, I want to sometimes put down the smartphone and value real human relationships. Keeping a balanced way of using is the key to a healthy social media life."
    ],
    questions: [
      {
        q: "What is the greatest advantage of social media according to the passage?",
        choices: ["Connecting people beyond distance", "Reducing real-life conversations", "Spreading fake news faster", "Hiding information from people"],
        answerIndex: 0,
        explanation: "The greatest advantage is connecting people beyond distance (SNSの最大の利点は距離を超えて人と繋がれる点)."
      },
      {
        q: "What is the danger of connecting only with like-minded people?",
        choices: ["Your beliefs become stronger", "You fall into biased ways of thinking", "You meet more diverse people", "You learn multiple perspectives"],
        answerIndex: 1,
        explanation: "Connecting only with like-minded people risks leading to biased thinking rather than stronger beliefs (自分の信念が強くなるどころか、かえって偏った考え方に固まる危険)."
      },
      {
        q: "Why is it easier to feel inferior in the social media age?",
        choices: ["Because comparison objects have spread to people worldwide", "Because everyone is nicer", "Because everyone shares only failures", "Because posts are banned"],
        answerIndex: 0,
        explanation: "Comparison objects spread from close friends to people worldwide, making inferiority easier (比較の対象が世界中の人に広がったことで劣等感を抱きやすくなった)."
      },
      {
        q: "What habit is necessary to avoid being swayed by fake news?",
        choices: ["Posting more often", "Checking reliable information sources", "Avoiding all news completely", "Trusting everything you read"],
        answerIndex: 1,
        explanation: "Without the habit of checking reliable sources, you are swayed by incorrect information (確かな情報源を確かめる習慣がなければ)."
      },
      {
        q: "What does the author conclude is the key to a healthy social media life?",
        choices: ["A balanced way of using it", "Using it all day long", "Banning it entirely", "Relying on it exclusively"],
        answerIndex: 0,
        explanation: "Keeping a balanced way of using is the key to a healthy social media life (バランスの取れた使い方を心がけることが健全なSNS生活の鍵)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-05 — Balancing work and personal life
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-05",
    title: "仕事[しごと]と私[わたくし]生活[せいかつ]のバランス",
    titleReading: "しごととわたくしせいかつのばらんす",
    level: "N3",
    summary: "The challenge of balancing work and private life in modern Japan: the historical culture of overwork, telework's mixed effects, personal time management, corporate responsibility, and rethinking the purpose of work.",
    estMinutes: 7,
    tags: ["work-life balance", "labor", "wellbeing", "modern life"],
    body: [
      "現代[げんだい]社会[しゃかい]において、仕事[しごと]と私[わたくし]生活[せいかつ]のバランスを取[と]ることは、多[おお]くの人[ひと]にとって大[おお]きな課題[かだい]となっている。特[とく]に日本[にほん]では、長[なが]い時間[じかん]働[はたら]くことが美徳[びとく]とされてきた歴史[れきし]がある。しかし、働[はたら]き過[す]ぎが心身[しんしん]の健康[けんこう]を損[そこ]なうことが分[わ]かって以来[いらい]、社会[しゃかい]全体[ぜんたい]の考[かんが]え方[かた]も変[か]わりつつある。では、仕事[しごと]と生活[せいかつ]をどう両立[りょうりつ]させればよいのだろうか。この問題[もんだい]に対[たい]して、個人[こじん]と企業[きぎょう]の双方[そうほう]が工夫[くふう]を求[もと]められている。",
      "かつて日本[にほん]では、残業[ざんぎょう]をすればするほど評価[ひょうか]される風潮[ふうちょう]があった。夜[よる]遅[おそ]くまで会社[かいしゃ]に残[のこ]ることが忠誠[ちゅうせい]の証[あかし]とされ、定時[ていじ]に帰[かえ]る人[ひと]は怠[なま]け者[もの]と見[み]られることもあった。ところが、このような働[はたら]き方[かた]が過労[かろう]死[し]やうつ病[びょう]を引[ひ]き起[お]こすことが判明[はんめい]してきた。働[はたら]けば働[はたら]くほどいいというわけではなく、効率[こうりつ]的[てき]に成果[せいか]を出[だ]すことの方[ほう]が大切[たいせつ]だという認識[にんしき]が広[ひろ]がった。時代[じだい]の変化[へんか]と共[とも]に、働[はたら]き方[かた]の価値観[かちかん]も少[すこ]しずつ変[か]わっている。",
      "テレワークの普及[ふきゅう]は、仕事[しごと]と生活[せいかつ]の両立[りょうりつ]に大[おお]きな変化[へんか]をもたらした。通勤[つうきん]時間[じかん]が減[へ]った分[ぶん]、家族[かぞく]と過[す]ごす時間[じかん]や趣味[しゅみ]の時間[じかん]に充[あ]てることができるようになった。柔軟[じゅうなん]な働[はたら]き方[かた]が認[みと]められる企業[きぎょう]では、従業[じゅうぎょう]員[いん]の満足[まんぞく]度[ど]も高[たか]い傾向[けいこう]にある。一方[いっぽう]で、家[いえ]だと仕事[しごと]と休[やす]みの境界線[きょうかいせん]が曖昧[あいまい]になり、かえって長時間[ちょうじかん]労働[ろうどう]に陥[おちい]る人[ひと]もいる。便利[べんり]な制度[せいど]も使[つか]い方[かた]次第[しだい]で、プラスにもマイナスにもなる。",
      "個人[こじん]の工夫[くふう]も重要[じゅうよう]である。仕事[しごと]の優先[ゆうせん]順位[じゅんい]を明確[めいかく]にし、無駄[むだ]な作業[さぎょう]を省[はぶ]くことで、限[かぎ]られた時間[じかん]を有効[ゆうこう]に使[つか]える。休憩[きゅうけい]をしっかり取[と]り、疲[つか]れを溜[た]めないことも、長[なが]く働[はたら]き続[つづ]けるためには欠[か]かせない。趣味[しゅみ]や運動[うんどう]、家族[かぞく]との時間[じかん]を大切[たいせつ]にすれば、仕事[しごと]への意欲[いよく]も自然[しぜん]と湧[わ]いてくる。自分[じぶん]なりのリズムを見付[みつ]けることが、健全[けんぜん]な生活[せいかつ]の第一[だいいち]歩[ぽ]である。",
      "企業[きぎょう]側[がわ]の役割[やくわり]も見逃[みのが]せない。長時間[ちょうじかん]労働[ろうどう]を減[へ]らすだけでなく、有給[ゆうきゅう]休暇[きゅうか]を取得[しゅとく]しやすい環境[かんきょう]を整[ととの]える必要[ひつよう]がある。上司[じょうし]が部下[ぶか]の体調[たいちょう]や働[はたら]き方[かた]に気[き]を配[くば]ることで、職場[しょくば]の雰囲気[ふんいき]も大[おお]きく変[か]わる。制度[せいど]を作[つく]るだけでなく、それが実際[じっさい]に使[つか]われる文化[ぶんか]を根付[ねづ]かせることが求[もと]められる。従業[じゅうぎょう]員[いん]を大切[たいせつ]にする会社[かいしゃ]は、結果[けっか]的[てき]に競争[きょうそう]力[りょく]も高[たか]くなるだろう。",
      "仕事[しごと]は生活[せいかつ]を支[ささ]えるための手段[しゅだん]であって、人生[じんせい]の全[すべ]てではない。仕事[しごと]に追[お]われるばかりで、私[わたくし]生活[せいかつ]を犠[ぎ]牲[せい]にすれば、結局[けっきょく]のところ幸[しあわ]せから遠[とお]ざかってしまう。働[はたら]く目的[もくてき]を時[とき]折[おり]見直[みなお]し、自分[じぶん]にとって本当[ほんとう]に大切[たいせつ]なものは何[なに]かを考[かんが]えたい。バランスの取[と]れた生活[せいかつ]を送[おく]ることは、個人[こじん]の幸福[こうふく]のみならず、社会[しゃかい]全体[ぜんたい]の健全[けんぜん]さにも直結[ちょっけつ]する。これからの働[はたら]き方[かた]をどう作[つく]るかは、私[わたし]たち自身[じしん]にかかっているのである。"
    ],
    translation: [
      "In modern society, balancing work and private life has become a major challenge for many people. Especially in Japan, there is a history of long working hours being considered a virtue. However, since it became clear that overworking harms mental and physical health, the thinking of society as a whole has also been changing. Then, how should we balance work and life? In response to this problem, both individuals and companies are required to make efforts.",
      "Once in Japan, there was a trend where the more overtime one did, the more one was evaluated. Staying at the company late into the night was regarded as proof of loyalty, and those who went home on time were sometimes seen as lazy. However, it has become clear that such ways of working cause death from overwork and depression. The awareness that it is not necessarily good to work more and that producing results efficiently is more important has spread. With the change of the times, the values of how to work are also gradually changing.",
      "The spread of telework has brought great changes to balancing work and life. The reduced commuting time can now be spent with family or on hobbies. In companies where flexible ways of working are recognized, employee satisfaction also tends to be higher. On the other hand, some people fall into long working hours because the boundary between work and rest becomes blurred at home. Even convenient systems can be either a plus or a minus depending on how they are used.",
      "Individual efforts are also important. By clarifying the priority of work and eliminating wasteful tasks, limited time can be used effectively. Taking proper breaks and not accumulating fatigue is also indispensable for working long. If you value hobbies, exercise, and time with family, motivation for work also naturally arises. Finding your own rhythm is the first step to a healthy life.",
      "The role of companies cannot be overlooked either. It is necessary not only to reduce long working hours but also to arrange environments where paid leave is easy to take. By supervisors caring for subordinates' physical conditions and ways of working, the atmosphere of the workplace also greatly changes. It is required not only to create systems but also to root a culture where they are actually used. Companies that value their employees will likely become more competitive as a result.",
      "Work is a means to support life and is not everything in life. If you are just chased by work and sacrifice private life, you will end up distancing yourself from happiness. I want to occasionally review the purpose of working and consider what is truly important to me. Living a balanced life is directly tied not only to individual happiness but also to the soundness of society as a whole. How to create future ways of working depends on ourselves."
    ],
    questions: [
      {
        q: "What was once considered a virtue in Japan?",
        choices: ["Working long hours", "Going home on time", "Avoiding overtime", "Refusing promotions"],
        answerIndex: 0,
        explanation: "Long working hours were once considered a virtue in Japan (長い時間働くことが美徳とされてきた)."
      },
      {
        q: "What problem has the spread of telework caused for some people?",
        choices: ["Increased commuting time", "The boundary between work and rest becomes blurred, leading to long working hours", "Less time with family", "Higher transportation costs"],
        answerIndex: 1,
        explanation: "For some, the boundary between work and rest becomes blurred at home, leading to long working hours (家だと仕事と休みの境界線が曖昧になり、かえって長時間労働に陥る)."
      },
      {
        q: "What does the author say naturally arises when you value hobbies and family?",
        choices: ["Burnout", "Motivation for work", "Higher salary", "Longer overtime"],
        answerIndex: 1,
        explanation: "Valuing hobbies, exercise, and family naturally brings motivation for work (趣味や運動、家族との時間を大切にすれば仕事への意欲も自然と湧いてくる)."
      },
      {
        q: "What must companies do beyond creating systems?",
        choices: ["Force everyone to work overtime", "Root a culture where systems are actually used", "Ban all paid leave", "Close the company early"],
        answerIndex: 1,
        explanation: "It is required to root a culture where systems are actually used, not just create them (制度を作るだけでなく、それが実際に使われる文化を根付かせることが求められる)."
      },
      {
        q: "What does the author conclude about work?",
        choices: ["Work is everything in life", "Work is a means to support life, not everything", "Happiness comes only from overtime", "Personal life should be sacrificed"],
        answerIndex: 1,
        explanation: "Work is a means to support life and is not everything (仕事は生活を支えるための手段であって、人生のすべてではない)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-06 — A memorable travel experience
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-06",
    title: "思[おも]い出[で]に残[のこ]る京[きょう]都[と]の旅[たび]",
    titleReading: "おもいでにのこるきょうとのたび",
    level: "N3",
    summary: "A three-day trip to Kyoto: visiting temples, exploring Nishiki Market, meeting locals at a machiya café, discovering that travel is about gaining new perspectives, and anticipation of the next journey.",
    estMinutes: 6,
    tags: ["travel", "Kyoto", "memories", "experience"],
    body: [
      "先月[せんげつ]、友人[ゆうじん]と一緒[いっしょ]に京都[きょうと]へ三[さん]日[にち]間[かん]の旅行[りょこう]に行[い]った。京都[きょうと]は日本[にほん]の古[ふる]い都[みやこ]として知[し]られ、歴史[れきし]的[てき]な建物[たてもの]や伝統[でんとう]文化[ぶんか]が色[いろ]濃[こ]く残[のこ]る街[まち]である。私[わたし]たちがこの旅行[りょこう]を計画[けいかく]したのは、日常[にちじょう]の忙[いそが]しさから少[すこ]し離[はな]れて、心[こころ]をリセットしたかったからだ。新幹線[しんかんせん]で東京[とうきょう]を出発[しゅっぱつ]して、約[やく]二[に]時[じ]間[かん]で京都[きょうと]駅[えき]に到着[とうちゃく]した。降[お]り立[た]った瞬間[しゅんかん]、空気[くうき]の違[ちが]いを感[かん]じたような思[おも]いがした。",
      "初日[しょにち]は、金閣[きんかく]寺[じ]と龍安[りょうあん]寺[じ]を訪[おとず]れた。金閣[きんかく]寺[じ]の金色[きんいろ]に輝[かがや]く姿[すがた]は、写真[しゃしん]で見[み]るよりもずっと美[うつく]しかった。池[いけ]に映[うつ]る逆[さか]さの金閣[きんかく]も見事[みごと]で、自然[しぜん]と写真[しゃしん]を撮[と]る手[て]が止[と]まらなかった。一方[いっぽう]、龍安[りょうあん]寺[じ]の石庭[せきてい]は静[しず]けさに満[み]ちており、心[こころ]が洗[あら]われる思[おも]いだった。説明[せつめい]を聞[き]きながら庭[にわ]を見[み]つめているうちに、複雑[ふくざつ]な考[かんが]えが消[き]えていくのを感[かん]じた。",
      "二日[ふつか]目[め]は、朝[あさ]早[はや]くから錦[にしき]市場[いちば]を巡[めぐ]った。色[いろ]とりどりの食材[しょくざい]やお菓子[かし]が並[なら]び、活気[かっき]ある声[こえ]が飛[と]び交[か]っていた。試[ため]食[しょく]を楽[たの]しみながら歩[ある]くうちに、京都[きょうと]の食[しょく]文化[ぶんか]の深[ふか]さを実[じつ]感[かん]した。市場[いちば]の後[あと]は、抹茶[まっちゃ]の店[みせ]で一[ひと]服[ぷく]し、京[きょう]菓子[がし]の繊細[せんさい]な甘[あま]さに感動[かんどう]した。観光[かんこう]地[ち]として有名[ゆうめい]な場所[ばしょ]だけでなく、路地[ろじ]裏[うら]の隠[かく]れ家[が]的[てき]な店[みせ]も楽[たの]しい発見[はっけん]だった。",
      "三日[みっか]目[め]は、市内[しない]の小[ちい]さな町家[まちや]カフェで過[す]ごした。そこで出会[であ]った地元[じもと]の女性[じょせい]が、京都[きょうと]の昔[むかし]の話[はなし]を聞[き]かせてくれた。彼女[かのじょ]の話[はなし]によれば、この界隈[かいかい]はかつて職人[しょくにん]の街[まち]として賑[にぎ]わっていたらしい。観光[かんこう]客[きゃく]として見[み]るだけでは分[わ]からない、地域[ちいき]の歴史[れきし]に触[ふ]れられたのは貴重[きちょう]な経験[けいけん]だった。人[ひと]との出会[であ]いこそ、旅[たび]の最大[さいだい]の収穫[しゅうかく]かもしれない。",
      "今回[こんかい]の旅行[りょこう]を通[とお]じて、多[おお]くのものを見[み]て、感[かん]じて、学[まな]んだ。有名[ゆうめい]な観光[かんこう]名所[めいしょ]の素晴[すば]らしさも当然[とうぜん]だったが、それ以上[いじょう]に心[こころ]に残[のこ]ったのは日常[にちじょう]の小[ちい]さな場面[ばめん]だった。例[たと]えば、通[とお]りを歩[ある]く人[ひと]の丁寧[ていねい]な挨拶[あいさつ]や、店員[てんいん]の温[あたた]かい応対[おうたい]などである。旅行[りょこう]とは、単[たん]に場所[ばしょ]を変[か]えることではなく、新[あたら]しい視点[してん]を得[え]ることなのだと気[き]づいた。日常[にちじょう]に戻[もど]っても、この気持[きも]ちを忘[わす]れたくない。",
      "旅[たび]の終[お]わりはいつも少[すこ]し寂[さび]しいが、同時[どうじ]に次[つぎ]の旅[たび]への期待[きたい]も生[う]まれる。京都[きょうと]は広[ひろ]く、三[さん]日[にち]では到底[てい]見[み]きれないほどの場所[ばしょ]がある。次回[じかい]は、もっとゆっくりと時間[じかん]をかけて、季節[きせつ]の移[うつ]り変[か]わりを楽[たの]しみたい。また、地元[じもと]の人[ひと]との交流[こうりゅう]をより深[ふか]められるような旅行[りょこう]にしたいとも思[おも]う。旅行[りょこう]の思[おも]い出[で]は、これからの生活[せいかつ]を豊[ゆた]かにしてくれるはずだ。"
    ],
    translation: [
      "Last month, I went on a three-day trip to Kyoto with a friend. Kyoto is known as an ancient capital of Japan, a city where historical buildings and traditional culture remain vividly. We planned this trip because we wanted to step away from the busyness of daily life and reset our minds. We departed from Tokyo by Shinkansen and arrived at Kyoto Station in about two hours. The moment we landed, I felt as if the air was different.",
      "On the first day, we visited Kinkaku-ji and Ryoan-ji. The golden figure of Kinkaku-ji was far more beautiful than in photos. The upside-down Kinkaku reflected in the pond was also splendid, and my hand taking photos naturally did not stop. On the other hand, the stone garden of Ryoan-ji was filled with silence, and I felt as if my heart was cleansed. While staring at the garden listening to the explanation, I felt complex thoughts fading away.",
      "On the second day, we toured Nishiki Market from early morning. Colorful ingredients and sweets were lined up, and lively voices flew about. While enjoying tastings as we walked, I realized the depth of Kyoto's food culture. After the market, we had a cup of matcha at a tea shop, and I was moved by the delicate sweetness of Kyoto sweets. Not only famous tourist spots, but hidden shops in back alleys were also fun discoveries.",
      "On the third day, we spent time at a small machiya café in the city. A local woman we met there told us stories of old Kyoto. According to her, this area was once bustling as a town of artisans. It was a valuable experience to encounter regional history that one cannot know just by seeing as a tourist. Encounters with people may be the greatest harvest of travel.",
      "Through this trip, I saw, felt, and learned many things. The splendor of famous tourist attractions was of course great, but what remained more in my heart were small everyday scenes. For example, the polite greetings of people walking on the streets and the warm service of shop staff. I realized that travel is not merely changing places but gaining new perspectives. Even back in daily life, I do not want to forget this feeling.",
      "The end of a trip is always a little lonely, but at the same time, expectation for the next trip also arises. Kyoto is wide, and there are far too many places to see in three days. Next time, I want to spend more time slowly and enjoy the changing of the seasons. Also, I want to make a trip where I can deepen interactions with locals more. The memories of the trip should enrich my life from now on."
    ],
    questions: [
      {
        q: "Why did the narrator and friend plan the trip to Kyoto?",
        choices: ["For work", "To step away from daily busyness and reset their minds", "To study history", "To meet celebrities"],
        answerIndex: 1,
        explanation: "They planned the trip to step away from daily busyness and reset their minds (日常の忙しさから少し離れて心をリセットしたかったから)."
      },
      {
        q: "How did the narrator feel at Ryoan-ji's stone garden?",
        choices: ["Bored", "As if their heart was cleansed", "Angry", "Tired"],
        answerIndex: 1,
        explanation: "Ryoan-ji's stone garden was filled with silence and made them feel as if their heart was cleansed (心が洗われる思いだった)."
      },
      {
        q: "What did the narrator realize at Nishiki Market?",
        choices: ["The shallowness of Kyoto's food culture", "The depth of Kyoto's food culture", "The high prices only", "The lack of variety"],
        answerIndex: 1,
        explanation: "While walking and enjoying tastings, the narrator realized the depth of Kyoto's food culture (京都の食文化の深さを実感した)."
      },
      {
        q: "What does the narrator say may be the greatest harvest of travel?",
        choices: ["Buying souvenirs", "Taking photos", "Encounters with people", "Saving money"],
        answerIndex: 2,
        explanation: "Encounters with people may be the greatest harvest of travel (人との出会いこそ旅の最大の収穫かもしれない)."
      },
      {
        q: "What did the narrator realize travel is?",
        choices: ["Merely changing places", "Gaining new perspectives, not just changing places", "A waste of money", "Only for shopping"],
        answerIndex: 1,
        explanation: "Travel is not merely changing places but gaining new perspectives (旅行とは単に場所を変えることではなく新しい視点を得ることだと気づいた)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-07 — Environmental challenges
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-07",
    title: "環境[かんきょう]問題[もんだい]と私[わたし]たちの責任[せきにん]",
    titleReading: "かんきょうもんだいとわたしたちのせきにん",
    level: "N3",
    summary: "Environmental challenges facing humanity: plastic pollution, renewable energy hurdles, environmental education for children, corporate responsibility and greenwashing, and the need for both systemic and individual action.",
    estMinutes: 9,
    tags: ["environment", "climate change", "recycling", "responsibility"],
    body: [
      "地球[ちきゅう]温暖化[おんだんか]、プラスチック汚染[おせん]、森林[しんりん]破壊[はかい]など、環境[かんきょう]問題[もんだい]は年々[ねんねん]深刻化[しんこくか]している。これらの問題[もんだい]は、特定[とくてい]の国[くに]や地域[ちいき]の問題[もんだい]というどころか、全[ぜん]人類[じんるい]の課題[かだい]である。専門家[せんもんか]の警告[けいこく]によれば、このままのペースで温室[おんしつ]ガスが増[ふ]え続[つづ]ければ、将来[しょうらい]の世代[せだい]は深刻[しんこく]な影響[えいきょう]を被[こうむ]ることになる。私[わたし]たちが今[いま]行動[こうどう]を起[お]こさなければ、取[と]り返[かえ]しのつかない事態[じたい]に陥[おちい]る恐[おそ]れがある。環境[かんきょう]に対[たい]する意識[いしき]を高[たか]めることが急務[きゅうむ]となっている。",
      "特[とく]に深刻[しんこく]なのは、プラスチックごみの問題[もんだい]である。海[うみ]に流[なが]れ出[だ]たプラスチックは、微[び]細[さい]な粒子[りゅうし]になって海洋[かいよう]生物[せいぶつ]に取[と]り込[こ]まれている。最終[さいしゅう]的[てき]には、魚[さかな]を通[とお]じて人間[にんげん]の体内[たいない]にまで入[はい]ってくると言[い]われている。使[つか]い捨[す]てのプラスチックを減[へ]らすだけでは足[た]りず、根本[こんぽん]的[てき]に使[つか]い方[かた]を見直[みなお]す必要[ひつよう]がある。一人[ひとり]一人[ひとり]の小[ちい]さな行動[こうどう]が積[つ]み重[かさ]なれば、大[おお]きな変化[へんか]を生[う]み出[だ]すことができる。",
      "再生[さいせい]可能[かのう]エネルギーの導入[どうにゅう]も重要[じゅうよう]な課題[かだい]である。太陽[たいよう]光[こう]や風力[ふうりょく]を活用[かつよう]することで、化石[かせき]燃料[ねんりょう]への依存[いぞん]を減[へ]らすことができる。しかし、これらの技術[ぎじゅつ]を普及[ふきゅう]させるには、初期[しょき]費用[ひよう]や景観[けいかん]への配慮[はいりょ]など、解決[かいけつ]すべき課題[かだい]が山積[やまづ]みになっている。技術[ぎじゅつ]の進歩[しんぽ]が続[つづ]けば、今後[こんご]はより効率[こうりつ]的[てき]な利用[りよう]が可能[かのう]になるだろう。企業[きぎょう]と政府[せいふ]が連携[れんけい]して、長期[ちょうき]的[てき]な視点[してん]で取[と]り組[く]む必要[ひつよう]がある。",
      "教育[きょういく]の現場[げんば]でも、環境[かんきょう]に対[たい]する意識[いしき]を育[はぐく]む取[と]り組[く]みが進[すす]んでいる。子[こ]どものうちに自然[しぜん]の大切[たいせつ]さを学[まな]べば、大人[おとな]になっても環境[かんきょう]に配慮[はいりょ]した行動[こうどう]をとるようになるだろう。学校[がっこう]でリサイクルや省[しょう]エネを教[おし]えるだけでなく、地域[ちいき]の清掃[せいそう]活動[かつどう]など実[じっ]践[せん]的[てき]な経験[けいけん]を積[つ]むことも大切[たいせつ]だ。体験[たいけん]を通[とお]して学[まな]んだことは、知識[ちしき]として深[ふか]く身[み]につく。次[つぎ]の世代[せだい]を担[にな]う子[こ]どもたちに、健全[けんぜん]な地球[ちきゅう]を引[ひ]き継[つ]ぐ責任[せきにん]がある。",
      "企業[きぎょう]の責任[せきにん]も大[おお]きい。多[おお]くの企業[きぎょう]が環境[かんきょう]負荷[ふか]を減[へ]らすための目標[もくひょう]を掲[かか]げ、再生[さいせい]可能[かのう]な素材[そざい]の活用[かつよう]に取[と]り組[く]み始[はじ]めている。一方[いっぽう]で、グリーンウォッシュと呼[よ]ばれる、見[み]せかけだけの環境[かんきょう]配慮[はいりょ]も問題[もんだい]になっている。消費[しょうひ]者[しゃ]は企業[きぎょう]の主張[しゅちょう]を鵜[う]呑[の]みにするどころか、自[みずか]ら確[たし]かめる目[め]を養[やしな]う必要[ひつよう]がある。本物[ほんもの]の取[と]り組[く]みを支持[しじ]することで、市場[しじょう]全体[ぜんたい]を変[か]える力[ちから]になる。",
      "もちろん、個人[こじん]の努力[どりょく]だけでは限界[げんかい]がある。法律[ほうりつ]や制度[せいど]を整備[せいび]し、社会[しゃかい]全体[ぜんたい]で取[と]り組[く]む仕組[しく]みを作[つく]らなければ、根本[こんぽん]的[てき]な解決[かいけつ]には至[いた]らない。しかし、個[こ]の意識[いしき]の変化[へんか]が社会[しゃかい]を動[うご]かす原動力[げんどうりょく]になることも忘[わす]れてはならない。私[わたし]たちが今[いま]選択[せんたく]する一[ひと]つ一[ひと]つの行動[こうどう]が、未来[みらい]の地球[ちきゅう]を形作[かたちづく]るのである。環境[かんきょう]を守[まも]ることは、私[わたし]たち自身[じしん]を守[まも]ることなのだ。"
    ],
    translation: [
      "Global warming, plastic pollution, deforestation, and other environmental problems are becoming more serious year by year. These problems are not those of specific countries or regions; they are challenges for all humanity. According to specialists' warnings, if greenhouse gases continue to increase at this pace, future generations will suffer serious effects. If we do not take action now, there is a risk of falling into an irrecoverable situation. Raising awareness about the environment has become an urgent task.",
      "Particularly serious is the problem of plastic waste. Plastic that flows into the sea becomes fine particles and is taken in by marine life. It is said that ultimately, through fish, it even enters the human body. Merely reducing disposable plastic is not enough; we need to fundamentally review how we use it. If the small actions of each individual pile up, they can produce great change.",
      "The introduction of renewable energy is also an important challenge. By utilizing solar and wind power, dependence on fossil fuels can be reduced. However, to spread these technologies, problems such as initial costs and consideration for landscapes have piled up and must be solved. If technological progress continues, more efficient use will likely become possible in the future. Companies and governments need to work together with a long-term perspective.",
      "In education too, efforts to foster awareness of the environment are advancing. If children learn the importance of nature while still young, they will likely take environmentally-conscious actions even as adults. Not only teaching recycling and energy saving at school, but also accumulating practical experiences such as community clean-up activities is important. What is learned through experience is acquired deeply as knowledge. We have the responsibility to pass on a sound earth to the children who will bear the next generation.",
      "Companies' responsibilities are also great. Many companies have set goals to reduce environmental impact and have begun efforts to use renewable materials. On the other hand, what is called greenwashing — fake environmental consideration — has also become a problem. Rather than swallowing companies' claims whole, consumers need to develop the eye to verify themselves. By supporting genuine efforts, they can become the power to change the whole market.",
      "Of course, individual efforts alone have limits. Without arranging laws and systems and creating mechanisms for society as a whole to work on, fundamental solutions will not be reached. However, we must not forget that changes in individual awareness become the driving force that moves society. Each action we choose now shapes the future earth. Protecting the environment is protecting ourselves."
    ],
    questions: [
      {
        q: "According to specialists, what will happen if greenhouse gases keep increasing?",
        choices: ["Future generations will suffer serious effects", "The climate will improve", "Plastic waste will disappear", "Energy will become cheaper"],
        answerIndex: 0,
        explanation: "Future generations will suffer serious effects if greenhouse gases continue increasing (将来の世代は深刻な影響を被ることになる)."
      },
      {
        q: "Why is reducing disposable plastic not enough?",
        choices: ["Because plastic is cheap", "Because we need to fundamentally review how we use it", "Because plastic is necessary", "Because recycling is impossible"],
        answerIndex: 1,
        explanation: "Merely reducing disposable plastic is not enough; we need to fundamentally review how we use it (使い捨てのプラスチックを減らすだけでは足りず、根本的に使い方を見直す必要がある)."
      },
      {
        q: "What problems must be solved to spread renewable energy?",
        choices: ["Lack of sunlight and wind", "Initial costs and consideration for landscapes", "Too many specialists", "Children's opposition"],
        answerIndex: 1,
        explanation: "Initial costs and consideration for landscapes have piled up as challenges to spreading renewable energy (初期費用や景観への配慮など解決すべき課題が山積み)."
      },
      {
        q: "What is greenwashing according to the passage?",
        choices: ["Genuine environmental consideration", "Fake environmental consideration", "Planting green trees", "Recycling all plastics"],
        answerIndex: 1,
        explanation: "Greenwashing is fake environmental consideration (グリーンウォッシュと呼ばれる見せかけだけの環境配慮)."
      },
      {
        q: "What does the author conclude about protecting the environment?",
        choices: ["It is someone else's problem", "It is protecting ourselves", "It is unnecessary", "It can wait until later"],
        answerIndex: 1,
        explanation: "Protecting the environment is protecting ourselves (環境を守ることは私たち自身を守ることなのだ)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-08 — The Japanese education system
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-08",
    title: "日本[にほん]の教育[きょういく]制度[せいど]の現在[げんざい]",
    titleReading: "にほんのきょういくせいどのげんざい",
    level: "N3",
    summary: "An overview of Japan's education system today: the 6-3-3-4 structure, exam-focused competition, school refusal and bullying, English education reform, heavy teacher burden, and what true education should be.",
    estMinutes: 8,
    tags: ["education", "school system", "exams", "society"],
    body: [
      "日本[にほん]の教育[きょういく]制度[せいど]は、小[しょう]学[がく]校[こう]六[ろく]年[ねん]、中[ちゅう]学[がく]校[こう]三年[さんねん]、高[こう]等[とう]学[がく]校[こう]三年[さんねん]、大学[だいがく]四年[よねん]という、いわゆる六[ろく]・三[さん]・三[さん]・四[よん]制[せい]を基本[きほん]としている。義務[ぎむ]教育[きょういく]は小[しょう]学[がく]校[こう]から中[ちゅう]学[がく]校[こう]までで、誰[だれ]もが等[ひと]しく教育[きょういく]を受[う]ける機会[きかい]を保障[ほしょう]されている。この制度[せいど]は、戦[せん]後[ご]の日本[にほん]の発展[はってん]を支[ささ]える土台[どだい]として機能[きのう]してきた。しかし、社会[しゃかい]の変化[へんか]と共[とも]に、現在[げんざい]は多[おお]くの課題[かだい]にも直面[ちょくめん]している。教育[きょういく]の在[あ]り方[かた]を問[と]い直[なお]す時期[じき]に来[き]ているのかもしれない。",
      "日本[にほん]の教育[きょういく]の特徴[とくちょう]の一[ひと]つは、入試[にゅうし]の重要性[じゅうようせい]である。高校[こうこう]や大学[だいがく]の入試[にゅうし]に向[む]けて、生徒[せいと]たちは激[はげ]しい競争[きょうそう]に挑[いど]むことになる。偏差[へんさ]値[ち]という数値[すうち]が重視[じゅうし]され、点数[てんすう]で人[ひと]を評価[ひょうか]する風潮[ふうちょう]も生[しょう]じた。一方[いっぽう]で、テストの点数[てんすう]だけでは測[はか]れない能力[のうりょく]や個性[こせい]も当然[とうぜん]存在[そんざい]する。考[かんが]える力[ちから]や協力[きょうりょく]性[せい]など、これからの時代[じだい]に求[もと]められる力[ちから]をどう育[はぐく]むかが問[と]われている。",
      "増[ふ]える不登校[ふとうこう]やいじめの問題[もんだい]も、深刻[しんこく]な課題[かだい]である。学校[がっこう]に行[い]けない子[こ]どもたちに対[たい]して、従来[じゅうらい]の画一[かくいつ]的[てき]な教育[きょういく]では対応[たいおう]しきれていない。多様[たよう]な個性[こせい]やペースに合[あ]わせた、柔軟[じゅうなん]な教育[きょういく]の仕組[しく]みが求[もと]められている。子[こ]どもが安心[あんしん]して学[まな]べる環境[かんきょう]を作[つく]ることは、大人[おとな]の責任[せきにん]である。一人[ひとり]でも多[おお]くの子[こ]どもが、自分[じぶん]らしさを発揮[はっき]できる場[ば]を見[み]つけられるようにしたい。",
      "英語[えいご]教育[きょういく]の改革[かいかく]も進[すす]められている。グローバル化[か]が進[すす]む中[なか]で、外国[がいこく]語[ご]でコミュニケーションを取[と]る力[ちから]はますます重要[じゅうよう]になっている。小[しょう]学[がく]校[こう]から英語[えいご]の授業[じゅぎょう]が始[はじ]まるようになり、早[はや]い段階[だんかい]から学[まな]ぶ機会[きかい]が増[ふ]えた。ただし、文法[ぶんぽう]や単語[たんご]の暗記[あんき]に偏[かたよ]るきらいがあるという指摘[してき]もある。実[じっ]際[さい]に使[つか]える英語[えいご]を身[み]につけるためには、もっと実践[じっせん]的[てき]な授業[じゅぎょう]が必要[ひつよう]だろう。",
      "教師[きょうし]の負担[ふたん]が重[おも]いことも、大[おお]きな問題[もんだい]である。授業[じゅぎょう]の準備[じゅんび]や採点[さいてん]だけでなく、部活[ぶかつ]の顧問[こもん]や事務[じむ]業務[ぎょうむ]まで、多[おお]くの仕事[しごと]を抱[かか]えている。長時間[ちょうじかん]労働[ろうどう]が続[つづ]けば、教師[きょうし]の健康[けんこう]も損[そこ]なわれるし、教育[きょういく]の質[しつ]も下[さ]がりかねない。優秀[ゆうしゅう]な人材[じんざい]が教師[きょうし]という仕事[しごと]を敬遠[けいえん]するようになれば、将来[しょうらい]の教育[きょういく]全体[ぜんたい]に悪[あく]影響[えいきょう]が及[およ]ぶ。教師[きょうし]の働[はたら]き方[かた]を改善[かいぜん]することも急務[きゅうむ]である。",
      "教育[きょういく]とは、単[たん]に知識[ちしき]を伝[つた]えることではない。社会[しゃかい]を生[い]き抜[ぬ]く力[ちから]、他者[たしゃ]を尊[とうと]ぶ心[こころ]、自[みずか]ら学[まな]ぶ態度[たいど]を育[はぐく]むことでもある。制度[せいど]や制度[せいど]の中身[なかみ]だけでなく、家庭[かてい]や地域[ちいき]社会[しゃかい]との連携[れんけい]も不可欠[ふかけつ]である。多[おお]くの人[ひと]が教育[きょういく]の在[あ]り方[かた]に関心[かんしん]を持[も]ち、共[とも]に考[かんが]えることが大切[たいせつ]だ。子[こ]どもたちの未来[みらい]のために、私[わたし]たちは今[いま]何[なに]をすべきかを問[と]い続[つづ]ける必要[ひつよう]がある。"
    ],
    translation: [
      "Japan's education system is based on the so-called 6-3-3-4 system: six years of elementary school, three years of middle school, three years of high school, and four years of university. Compulsory education is from elementary to middle school, and everyone is guaranteed an equal opportunity to receive education. This system has functioned as the foundation supporting Japan's postwar development. However, with the change of society, it is now facing many challenges. It may be the time to question what education should be.",
      "One characteristic of Japanese education is the importance of entrance exams. Toward high school and university entrance exams, students take on fierce competition. A number called deviation value is emphasized, and a trend of evaluating people by scores has also emerged. On the other hand, there are of course also abilities and individualities that cannot be measured by test scores alone. How to nurture the powers required of the coming era, such as thinking ability and cooperativeness, is being questioned.",
      "The increasing problem of school refusal and bullying is also a serious challenge. Conventional uniform education has not been able to fully respond to children who cannot go to school. Flexible education mechanisms that suit diverse individualities and paces are being sought. Creating an environment where children can learn with peace of mind is adults' responsibility. We want even one more child to be able to find a place where they can demonstrate their own individuality.",
      "Reform of English education is also advancing. As globalization progresses, the ability to communicate in foreign languages is becoming increasingly important. English classes have begun from elementary school, and opportunities to learn from an early stage have increased. However, there is also a point that it tends to be biased toward memorizing grammar and vocabulary. To acquire English that can actually be used, more practical classes seem necessary.",
      "The heavy burden on teachers is also a big problem. They carry many tasks, not only preparing classes and grading but also advising club activities and office work. If long working hours continue, teachers' health is also harmed, and the quality of education may decline. If excellent talent begins to avoid the teaching profession, the whole of future education will be adversely affected. Improving teachers' way of working is also an urgent task.",
      "Education is not merely transmitting knowledge. It is also nurturing the power to survive in society, the heart to respect others, and the attitude to learn on one's own. Not only the system and its contents but also cooperation with families and local communities is indispensable. It is important that many people take interest in what education should be and think together. For the sake of children's future, we need to keep asking what we should do now."
    ],
    questions: [
      {
        q: "What is the basic structure of Japan's education system?",
        choices: ["5-3-3-4 system", "6-3-3-4 system", "6-4-3-3 system", "5-4-4-4 system"],
        answerIndex: 1,
        explanation: "Japan's education is based on the 6-3-3-4 system: elementary 6, middle 3, high 3, university 4 (六・三・三・四制を基本としている)."
      },
      {
        q: "What problem has emerged from overemphasizing test scores?",
        choices: ["More creative students", "A trend of evaluating people by scores", "Higher quality education", "More teachers"],
        answerIndex: 1,
        explanation: "A trend of evaluating people by scores has emerged (点数で人を評価する風潮も生じた)."
      },
      {
        q: "What kind of education system is being sought for children who cannot attend school?",
        choices: ["More uniform education", "Stricter rules", "Flexible education that suits diverse individualities and paces", "No education at all"],
        answerIndex: 2,
        explanation: "Flexible education mechanisms that suit diverse individualities and paces are being sought (多様な個性やペースに合わせた柔軟な教育の仕組みが求められている)."
      },
      {
        q: "What is a problem with current English education according to the passage?",
        choices: ["Too practical", "Biased toward memorizing grammar and vocabulary", "Starts too late always", "Has no native teachers"],
        answerIndex: 1,
        explanation: "English education tends to be biased toward memorizing grammar and vocabulary (文法や単語の暗記に偏るきらいがある)."
      },
      {
        q: "Why is the heavy burden on teachers a problem for the future?",
        choices: ["It improves education quality", "Excellent talent may avoid the teaching profession", "It reduces working hours", "It increases teachers' salaries"],
        answerIndex: 1,
        explanation: "If excellent talent avoids teaching, future education as a whole will be adversely affected (優秀な人材が教師という仕事を敬遠するようになれば将来の教育全体に悪影響が及ぶ)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-09 — Technology in daily life
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-09",
    title: "日[にち]常[じょう]生活[せいかつ]を変[か]えるテクノロジー",
    titleReading: "にちじょうせいかつをかえるてくのろじー",
    level: "N3",
    summary: "How technology pervades daily life: smartphone convenience, AI changing work, new risks like privacy and addiction, the digital divide among the elderly, and the need to master technology rather than be mastered by it.",
    estMinutes: 7,
    tags: ["technology", "daily life", "convenience", "AI"],
    body: [
      "スマートフォン、AI、ネット通販[つうはん]など、テクノロジーは私[わたし]たちの日常[にちじょう]に深[ふか]く入[はい]り込[こ]んでいる。十年[じゅうねん]前[まえ]には想像[そうぞう]もできなかった便利[べんり]さが、当[あ]たり前[まえ]のものとして受[う]け入[い]れられている。特[とく]に若[わか]い世代[せだい]は、スマホなしでは一日[いちにち]さえ過[す]ごせないという人[ひと]も少[すく]なくない。この変化[へんか]の速[はや]さは、便利[べんり]さを感[かん]じる一方[いっぽう]で、少[すこ]しの不安[ふあん]も感[かん]じさせる。テクノロジーが私[わたし]たちの生活[せいかつ]に何[なに]をもたらし、何[なに]を奪[うば]っているのかを考[かんが]えてみたい。",
      "スマートフォンの普及[ふきゅう]は、コミュニケーションの在[あ]り方[かた]を大[おお]きく変[か]えた。LINEやSNSを通[とお]じて、遠[とお]くの人[ひと]とも即[そく]座[ざ]に連絡[れんらく]を取[と]れるようになった。地図[ちず]アプリのおかげで、初[はじ]めての場所[ばしょ]でも迷[まよ]わずに移動[いどう]できる。決済[けっさい]もスマホ一[ひと]つで済[す]むようになり、現金[げんきん]を持[も]たない人[ひと]も増[ふ]えている。便利[べんり]さが増[ま]すにつれて、私[わたし]たちはテクノロジーに依存[いぞん]する度合[どあい]も強[つよ]くなっている。",
      "AIの進化[しんか]も、私[わたし]たちの仕事[しごと]や生活[せいかつ]を変[か]えつつある。翻訳[ほんやく]ツールや文章[ぶんしょう]生成[せいせい]AIのおかげで、以前[いぜん]なら時間[じかん]がかかった作業[さぎょう]が瞬[またた]く間[ま]に終[お]わるようになった。カスタマーサポートやデータ分析[ぶんせき]など、AIが人間[にんげん]の代[か]わりに担[にな]う業務[ぎょうむ]も広[ひろ]がっている。一方[いっぽう]で、AIに仕事[しごと]が奪[うば]われるという不安[ふあん]の声[こえ]も絶[た]えない。人間[にんげん]にしかできない力[ちから]とは何[なに]かを、もう一度[いちど]見[み]直[なお]す必要[ひつよう]があるだろう。",
      "テクノロジーの便利[べんり]さの裏[うら]には、課題[かだい]もある。個[こ]人[じん]情報[じょうほう]の漏[も]洩[ろ]、ネット依存[いぞん]、フェイクニュースの拡散[かくさん]など、新[あたら]しい問題[もんだい]が次[つぎ]々[つぎ]と生[しょう]じている。特[とく]に子[こ]どもが早[はや]い段階[だんかい]でスマホに触[ふ]れるようになれば、集中[しゅうちゅう]力[りょく]や対人[たいじん]関係[かんけい]能力[のうりょく]の形成[けいせい]に悪[あく]影響[えいきょう]を及[およ]ぼす恐[おそ]れがある。技術[ぎじゅつ]を導入[どうにゅう]する際[さい]には、使[つか]い方[かた]を慎重[しんちょう]に考[かんが]える必要[ひつよう]がある。便利[べんり]さに飛[と]びつくばかりでなく、リスクも正[ただ]しく理解[りかい]すべきである。",
      "デジタル格差[かくさ]という問題[もんだい]も無視[むし]できない。年齢[ねんれい]や地域[ちいき]、経済[けいざい]状況[じょうきょう]によって、テクノロジーを利用[りよう]できる環境[かんきょう]に大[おお]きな差[さ]がある。高齢者[こうれいしゃ]の中[なか]には、スマホの使[つか]い方[かた]が分[わ]からず、生活[せいかつ]に不便[ふべん]を感[かん]じる人[ひと]も少[すく]なくない。テクノロジーが進化[しんか]する一方[いっぽう]で、取[と]り残[のこ]される人[ひと]が出[で]てしまうのは社会[しゃかい]の課題[かだい]である。誰[だれ]もがテクノロジーの恩恵[おんけい]を受[う]けられる仕組[しく]みを整[ととの]えることが大切[たいせつ]だ。",
      "テクノロジーは、使[つか]い方[かた]次第[しだい]で便利[べんり]な道具[どうぐ]にも、危険[きけん]な武器[ぶき]にもなる。私[わたし]たちはテクノロジーに振[ふ]り回[まわ]されるのではなく、自[みずか]ら使[つか]いこなす側[がわ]でいる必要[ひつよう]がある。時[とき]にはスマホを置[お]いて、家族[かぞく]や友人[ゆうじん]と直接[ちょくせつ]話[はな]す時間[じかん]も大切[たいせつ]にしたい。便利[べんり]さばかりを追[お]い求[もと]めるどころか、人間[にんげん]らしさを忘[わす]れないことが、これからの時代[じだい]には求[もと]められるだろう。テクノロジーと人間[にんげん]の理想的[りそうてき]な関係[かんけい]を、共[とも]に考[かんが]え続[つづ]けたいものである。"
    ],
    translation: [
      "Smartphones, AI, online shopping, and other technologies have deeply entered our daily lives. Convenience that was unimaginable ten years ago is now accepted as the norm. Especially among younger generations, not a few people cannot spend even a day without a smartphone. The speed of this change makes us feel convenience on one hand, but also a little anxiety on the other. I would like to consider what technology brings to and takes from our lives.",
      "The spread of smartphones has greatly changed the way of communication. Through LINE and social media, even people far away can be contacted immediately. Thanks to map apps, we can move without getting lost even in places we visit for the first time. Payment can also be done with just a smartphone, and more people do not carry cash. As convenience increases, the degree to which we depend on technology also strengthens.",
      "The evolution of AI is also changing our work and lives. Thanks to translation tools and text generation AI, tasks that once took time are now done in the blink of an eye. Tasks that AI takes on instead of humans, such as customer support and data analysis, are also spreading. On the other hand, voices of anxiety that jobs will be taken by AI never cease. We need to review once again what abilities only humans have.",
      "Behind the convenience of technology, there are also challenges. New problems arise one after another, such as leakage of personal information, internet addiction, and the spread of fake news. Especially, if children touch smartphones at an early stage, there is a risk of negatively affecting the formation of concentration and interpersonal relationship skills. When introducing technology, it is necessary to carefully consider how to use it. Rather than jumping at convenience, we should also correctly understand the risks.",
      "The problem of the digital divide cannot be ignored either. Depending on age, region, and economic situation, there are great differences in the environments where technology can be used. Among the elderly, not a few people do not know how to use a smartphone and feel inconvenience in life. While technology evolves, it is a social challenge that some people are left behind. It is important to arrange mechanisms so that everyone can receive the benefits of technology.",
      "Technology, depending on how it is used, can become either a convenient tool or a dangerous weapon. We need not to be swayed by technology but to be the side that masters it. I also want to value time to put down the smartphone and talk directly with family and friends. Far from pursuing only convenience, not forgetting human nature will likely be required in the coming era. I want to keep thinking together about the ideal relationship between technology and humans."
    ],
    questions: [
      {
        q: "According to the passage, what has become accepted as the norm that was unimaginable ten years ago?",
        choices: ["Writing letters", "Convenience brought by technology", "Living without smartphones", "Avoiding the internet"],
        answerIndex: 1,
        explanation: "Convenience that was unimaginable ten years ago is now accepted as the norm (十年前には想像もできなかった便利さが当たり前のものとして受け入れられている)."
      },
      {
        q: "As convenience increases, what happens according to the passage?",
        choices: ["We depend less on technology", "We depend more on technology", "We use less smartphones", "We carry more cash"],
        answerIndex: 1,
        explanation: "As convenience increases, the degree of dependence on technology also strengthens (便利さが増すにつれてテクノロジーに依存する度合も強くなっている)."
      },
      {
        q: "What concern is mentioned about AI evolution?",
        choices: ["AI will improve all jobs", "Voices of anxiety that jobs will be taken by AI never cease", "AI will replace all teachers", "AI will reduce productivity"],
        answerIndex: 1,
        explanation: "Voices of anxiety that jobs will be taken by AI never cease (AIに仕事が奪われるという不安の声も絶えない)."
      },
      {
        q: "What risk exists if children touch smartphones at an early stage?",
        choices: ["Better concentration", "Better interpersonal skills", "Negative impact on concentration and interpersonal skills", "Higher grades only"],
        answerIndex: 2,
        explanation: "Early smartphone use risks harming the formation of concentration and interpersonal skills (集中力や対人関係能力の形成に悪影響を及ぼす恐れがある)."
      },
      {
        q: "What does the author say we should be, regarding technology?",
        choices: ["The side that is swayed by technology", "The side that masters technology", "Avoiders of all technology", "Passive users only"],
        answerIndex: 1,
        explanation: "We need to be the side that masters technology, not the side swayed by it (私たちはテクノロジーに振り回されるのではなく、自ら使いこなす側でいる必要がある)."
      }
    ]
  },

  // ───────────────────────────────────────────────────────────
  // r-n3-10 — A community volunteer project
  // ───────────────────────────────────────────────────────────
  {
    id: "r-n3-10",
    title: "地域[ちいき]を支[ささ]えるボランティア活動[かつどう]",
    titleReading: "ちいきをささえるぼらんてぃあかつどう",
    level: "N3",
    summary: "A monthly community cleanup volunteer project: how the narrator joined, the visible impact on the town, friendships with residents across generations, the challenge of attracting young people, and the true value of volunteering.",
    estMinutes: 7,
    tags: ["volunteer", "community", "social contribution", "cooperation"],
    body: [
      "私[わたし]が住[す]む町[まち]では、毎月[まいつき]第[だい]二[に]土[ど]曜[よう]日[び]に地域[ちいき]の清掃[せいそう]ボランティアが行[おこな]われている。公園[こうえん]や道路[どうろ]のごみを拾[ひろ]い、花[はな]壇[だん]の手入[てい]れをするなど、活動[かつどう]の内容[ないよう]は様[さま]々だ。始[はじ]まったのは五年[ごねん]前[まえ]で、最初[さいしょ]は数人[すうにん]だった参加[さんか]者[しゃ]も、今[いま]では毎回[まいかい]二十[にじゅう]人[にん]以上[いじょう]が集[あつ]まるようになった。この活動[かつどう]を通[とお]じて、私[わたし]は多[おお]くのことを学[まな]んだ。小[ちい]さな活動[かつどう]でも、続[つづ]けるうちに大[おお]きな変化[へんか]を生[う]み出[だ]すことを実[じつ]感[かん]している。",
      "私[わたし]がこのボランティアに参加[さんか]したのは、高校[こうこう]時代[じだい]の恩師[おんし]の勧[すす]めがきっかけだった。最初[さいしょ]は面倒[めんどう]くさいと感[かん]じたが、一回[いっかい]参加[さんか]してみると、意外[いがい]に楽[たの]しかった。知[し]らない人[ひと]と協力[きょうりょく]して作業[さぎょう]をするうちに、自然[しぜん]と会話[かいわ]が弾[はず]むようになった。作業[さぎょう]の後[あと]には、参加[さんか]者[しゃ]同士[どうし]でお茶[ちゃ]を飲[の]みながら交流[こうりゅう]する時間[じかん]も設[もう]けられている。今[いま]では、この日[ひ]を毎月[まいつき]の楽[たの]しみに待[ま]つようになった。",
      "活動[かつどう]を続[つづ]けた結果[けっか]、町[まち]の景観[けいかん]が劇的[げきてき]に変[か]わった。昔[むかし]はあちこちに散[ち]らばっていたごみが目立[めだ]たなくなり、花[はな]壇[だん]の花[はな]が町[まち]を彩[いろど]るようになった。地域[ちいき]の人[ひと]たちも「町[まち]がきれいになった」と声[こえ]をかけてくれるようになり、活動[かつどう]の励[はげ]みになっている。小[ちい]さな子供[こども]連[づ]れの家族[かぞく]も安心[あんしん]して公園[こうえん]を使[つか]えるようになったと聞[き]く。こうした変化[へんか]を見[み]ると、やっていてよかったと心[こころ]から思[おも]う。",
      "ボランティアを通[とお]じて得[え]たものは、町[まち]のきれいさだけではない。多[おお]くの地元[じもと]住民[じゅうみん]と知[し]り合[あ]いになれたことが、何[なに]よりの収穫[しゅうかく]だ。年齢[ねんれい]も職業[しょくぎょう]も異[こと]なる人[ひと]たちと交流[こうりゅう]することで、新[あたら]しい視点[してん]を得[え]ることもできた。特[とく]に高齢[こうれい]の参加[さんか]者[しゃ]からは、地域[ちいき]の歴史[れきし]や昔[むかし]の生活[せいかつ]について興味[きょうみ]深[ぶか]い話[はなし]を聞[き]くことができる。こうした交流[こうりゅう]は、日常[にちじょう]生活[せいかつ]ではなかなか得[え]られない貴重[きちょう]な経験[けいけん]である。",
      "もちろん、課題[かだい]もないわけではない。参加[さんか]者[しゃ]は中[なか]高年[こうねん]層[そう]に偏[かたよ]っており、若[わか]い人[ひと]の参加[さんか]が少[すく]ないのが現状[げんじょう]だ。仕事[しごと]や育児[いくじ]で忙[いそが]しい若者[わかもの]にとって、休日[きゅうじつ]をボランティアに使[つか]うのは難[むずか]しいかもしれない。しかし、地域[ちいき]の未来[みらい]を考[かんが]えれば、若[わか]い世代[せだい]の参加[さんか]は不可欠[ふかけつ]である。子[こ]どものうちから地域[ちいき]活動[かつどう]に親[した]しむ機会[きかい]を増[ふ]やすことが、長[なが]期的[てき]な解決[かいけつ]策[さく]になるだろう。",
      "ボランティアは、無償[むしょう]で活動[かつどう]するという意味[いみ]で、見返[みかえ]りを求[もと]めない行為[こうい]である。しかし、実際[じっさい]にやってみると、得[え]られるものの方[ほう]が多[おお]いことに気[き]づく。人[ひと]との繋[つな]がり、達成[たっせい]感[かん]、地域[ちいき]への愛着[あいちゃく]など、お金[かね]では買[か]えない価値[かち]がたくさんある。地域[ちいき]社会[しゃかい]を良[よ]くするのは、結局[けっきょく]のところ、そこに住[す]む人[ひと]たちの意識[いしき]と行動[こうどう]である。私[わたし]たち一人[ひとり]一人[ひとり]が地域[ちいき]に関[かか]わることこそが、豊[ゆた]かな社会[しゃかい]を作[つく]る第一[だいいち]歩[ぽ]なのだ。"
    ],
    translation: [
      "In the town where I live, a community cleanup volunteer activity is held on the second Saturday of every month. The activities vary, such as picking up trash in parks and on roads and tending flowerbeds. It started five years ago, and the participants, who were only a few at first, now gather more than twenty people each time. Through this activity, I have learned many things. I have come to feel that even a small activity can produce great change as it continues.",
      "I joined this volunteer activity because my high school teacher recommended it. At first I felt it was troublesome, but when I participated once, it was unexpectedly fun. While working together with people I did not know, conversation naturally became lively. After the work, a time for participants to interact while drinking tea is also set. Now I have come to look forward to this day every month.",
      "As a result of continuing the activity, the landscape of the town changed dramatically. Trash that used to be scattered here and there is no longer noticeable, and flowers in the beds now color the town. People in the community have come to speak to us saying the town has become beautiful, which encourages the activity. I hear that families with small children have also come to use the park with peace of mind. Seeing such changes, I truly think I am glad I did this.",
      "What I gained through volunteering is not only the beauty of the town. The greatest harvest is that I got to know many local residents. By interacting with people of different ages and occupations, I could also gain new perspectives. Especially from elderly participants, I can hear interesting stories about the region's history and old life. Such interaction is a valuable experience that is hard to gain in daily life.",
      "Of course, it is not that there are no challenges. The participants tend to be middle-aged and elderly, and the reality is that there is little participation by young people. For young people busy with work and childrearing, it may be difficult to use holidays for volunteering. However, if we consider the future of the community, the participation of younger generations is indispensable. Increasing opportunities for children to become familiar with community activities from a young age will likely be a long-term solution.",
      "Volunteering is, in the sense of working without pay, an act that does not seek a return. However, when actually doing it, I realize that what I gain is greater. There are many values that cannot be bought with money, such as connections with people, a sense of achievement, and attachment to the community. In the end, what improves the community is the awareness and actions of the people who live there. Each of us engaging with the community is the first step to creating a rich society."
    ],
    questions: [
      {
        q: "When is the community cleanup volunteer activity held?",
        choices: ["Every first Sunday", "Every second Saturday", "Every third Monday", "Every fourth Friday"],
        answerIndex: 1,
        explanation: "The activity is held on the second Saturday of every month (毎月第二土曜日に地域の清掃ボランティアが行われている)."
      },
      {
        q: "Why did the narrator join the volunteer activity?",
        choices: ["For money", "Because of a high school teacher's recommendation", "For school credit only", "Because forced by parents"],
        answerIndex: 1,
        explanation: "The narrator joined because their high school teacher recommended it (高校時代の恩師の勧めがきっかけだった)."
      },
      {
        q: "What is the greatest harvest the narrator gained through volunteering?",
        choices: ["Money", "Getting to know many local residents", "Free food", "A promotion at work"],
        answerIndex: 1,
        explanation: "The greatest harvest is getting to know many local residents (多くの地元住民と知り合いになれたことが何よりの収穫)."
      },
      {
        q: "What is a challenge with current participants?",
        choices: ["Too many young people", "Participants tend to be middle-aged and elderly, with few young people", "Too many foreigners", "Too many children only"],
        answerIndex: 1,
        explanation: "Participants tend to be middle-aged and elderly, with little participation by young people (参加者は中高年層に偏っており若い人の参加が少ない)."
      },
      {
        q: "What does the author conclude improves the community?",
        choices: ["Government orders only", "The awareness and actions of the people who live there", "Money from outside", "Big companies only"],
        answerIndex: 1,
        explanation: "What improves the community is the awareness and actions of the people who live there (地域社会を良くするのは結局のそこに住む人たちの意識と行動)."
      }
    ]
  }
];
