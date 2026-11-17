import type { VocabData } from "@/lib/types";

// JLPT N3 vocabulary — Shinzaizen Master style, chapter-wise by part of speech.
// Furigana notation: kanji readings inline as 漢字[かんじ] (compound runs).
// Total: 180 words (60 Nouns, 40 Verbs, 25 Adjectives, 15 Adverbs, 5 Particles,
// 10 Conjunctions, 15 Onomatopoeia, 10 Idioms).
// IDs: vn3-901 .. vn3-1080.
// Deliberately avoids duplicating any word taught in vocabN3A..vocabN3E.

export const vocabN3F: VocabData[] = [
  // ============================================================
  // Nouns — 60 words (vn3-901 .. vn3-960)
  // ============================================================
  {
    id: "vn3-901",
    word: "旅券",
    reading: "りょけん",
    romaji: "ryoken",
    meaning: "passport",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "旅券[りょけん]を見[み]せる。",
      en: "Show the passport."
    }
  },
  {
    id: "vn3-902",
    word: "査証",
    reading: "さしょう",
    romaji: "sashou",
    meaning: "visa",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "査証[さしょう]を受[う]ける。",
      en: "Receive a visa."
    }
  },
  {
    id: "vn3-903",
    word: "税関",
    reading: "ぜいかん",
    romaji: "zeikan",
    meaning: "customs",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "税関[ぜいかん]を通[とお]る。",
      en: "Pass through customs."
    }
  },
  {
    id: "vn3-904",
    word: "手荷物",
    reading: "てにもつ",
    romaji: "tenimotsu",
    meaning: "hand luggage",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "手荷物[てにもつ]を預[あず]ける。",
      en: "Check in hand luggage."
    }
  },
  {
    id: "vn3-905",
    word: "搭乗",
    reading: "とうじょう",
    romaji: "toujou",
    meaning: "boarding",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "搭乗[とうじょう]ゲートに向[む]く。",
      en: "Head to the boarding gate."
    }
  },
  {
    id: "vn3-906",
    word: "出発",
    reading: "しゅっぱつ",
    romaji: "shuppatsu",
    meaning: "departure",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "出発[しゅっぱつ]時刻[じこく]を確認[かくにん]する。",
      en: "Confirm the departure time."
    }
  },
  {
    id: "vn3-907",
    word: "到着",
    reading: "とうちゃく",
    romaji: "touchaku",
    meaning: "arrival",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "到着[とうちゃく]が遅[おく]れる。",
      en: "Arrival is delayed."
    }
  },
  {
    id: "vn3-908",
    word: "運賃",
    reading: "うんちん",
    romaji: "unchin",
    meaning: "fare",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "運賃[うんちん]を払[はら]う。",
      en: "Pay the fare."
    }
  },
  {
    id: "vn3-909",
    word: "片道",
    reading: "かたみち",
    romaji: "katamichi",
    meaning: "one-way",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "片道[かたみち]切符[きっぷ]を買[か]う。",
      en: "Buy a one-way ticket."
    }
  },
  {
    id: "vn3-910",
    word: "往復",
    reading: "おうふく",
    romaji: "oufuku",
    meaning: "round trip",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "往復[おうふく]で行[い]く。",
      en: "Go on a round trip."
    }
  },
  {
    id: "vn3-911",
    word: "連休",
    reading: "れんきゅう",
    romaji: "renkyuu",
    meaning: "consecutive holidays",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "連休[れんきゅう]に旅行[りょこう]する。",
      en: "Travel during the holidays."
    }
  },
  {
    id: "vn3-912",
    word: "滞在",
    reading: "たいざい",
    romaji: "taizai",
    meaning: "stay",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "海外[かいがい]に滞在[たいざい]する。",
      en: "Stay overseas."
    }
  },
  {
    id: "vn3-913",
    word: "信号",
    reading: "しんごう",
    romaji: "shingou",
    meaning: "traffic signal",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "信号[しんごう]で止[と]まる。",
      en: "Stop at the traffic light."
    }
  },
  {
    id: "vn3-914",
    word: "交差点",
    reading: "こうさてん",
    romaji: "kousaten",
    meaning: "intersection",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "交差点[こうさてん]を渡[わた]る。",
      en: "Cross the intersection."
    }
  },
  {
    id: "vn3-915",
    word: "歩道",
    reading: "ほどう",
    romaji: "hodou",
    meaning: "sidewalk",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "歩道[ほどう]を歩[ある]く。",
      en: "Walk on the sidewalk."
    }
  },
  {
    id: "vn3-916",
    word: "車道",
    reading: "しゃどう",
    romaji: "shadou",
    meaning: "roadway",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "車道[しゃどう]に出[で]る。",
      en: "Step onto the roadway."
    }
  },
  {
    id: "vn3-917",
    word: "横断歩道",
    reading: "おうだんほどう",
    romaji: "oudanhodou",
    meaning: "pedestrian crossing",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "横断歩道[おうだんほどう]を渡[わた]る。",
      en: "Cross at the pedestrian crossing."
    }
  },
  {
    id: "vn3-918",
    word: "標識",
    reading: "ひょうしき",
    romaji: "hyoushiki",
    meaning: "sign",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "標識[ひょうしき]に従[したが]う。",
      en: "Follow the sign."
    }
  },
  {
    id: "vn3-919",
    word: "救急車",
    reading: "きゅうきゅうしゃ",
    romaji: "kyuukyuusha",
    meaning: "ambulance",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "救急車[きゅうきゅうしゃ]を呼[よ]ぶ。",
      en: "Call an ambulance."
    }
  },
  {
    id: "vn3-920",
    word: "消防車",
    reading: "しょうぼうしゃ",
    romaji: "shoubousha",
    meaning: "fire engine",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "消防車[しょうぼうしゃ]が通[とお]り過[す]ぎる。",
      en: "A fire engine passes by."
    }
  },
  {
    id: "vn3-921",
    word: "消防署",
    reading: "しょうぼうしょ",
    romaji: "shoubousho",
    meaning: "fire station",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "消防署[しょうぼうしょ]に勤[つと]める。",
      en: "Work at a fire station."
    }
  },
  {
    id: "vn3-922",
    word: "警察署",
    reading: "けいさつしょ",
    romaji: "keisatsusho",
    meaning: "police station",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "警察署[けいさつしょ]に行[い]く。",
      en: "Go to the police station."
    }
  },
  {
    id: "vn3-923",
    word: "交番",
    reading: "こうばん",
    romaji: "kouban",
    meaning: "police box",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "交番[こうばん]で聞[き]く。",
      en: "Ask at the police box."
    }
  },
  {
    id: "vn3-924",
    word: "容疑者",
    reading: "ようぎしゃ",
    romaji: "yougisha",
    meaning: "suspect",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "容疑者[ようぎしゃ]を逮捕[たいほ]する。",
      en: "Arrest the suspect."
    }
  },
  {
    id: "vn3-925",
    word: "証拠",
    reading: "しょうこ",
    romaji: "shouko",
    meaning: "evidence",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "証拠[しょうこ]を集[あつ]める。",
      en: "Gather evidence."
    }
  },
  {
    id: "vn3-926",
    word: "裁判",
    reading: "さいばん",
    romaji: "saiban",
    meaning: "trial",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "裁判[さいばん]に勝[か]つ。",
      en: "Win the trial."
    }
  },
  {
    id: "vn3-927",
    word: "弁護士",
    reading: "べんごし",
    romaji: "bengoshi",
    meaning: "lawyer",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "弁護士[べんごし]に相談[そうだん]する。",
      en: "Consult a lawyer."
    }
  },
  {
    id: "vn3-928",
    word: "検察",
    reading: "けんさつ",
    romaji: "kensatsu",
    meaning: "prosecution",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "検察[けんさつ]が捜査[そうさ]する。",
      en: "The prosecution investigates."
    }
  },
  {
    id: "vn3-929",
    word: "裁判官",
    reading: "さいばんかん",
    romaji: "saibankan",
    meaning: "judge",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "裁判官[さいばんかん]が判決[はんけつ]を下[くだ]す。",
      en: "The judge hands down a verdict."
    }
  },
  {
    id: "vn3-930",
    word: "証人",
    reading: "しょうにん",
    romaji: "shounin",
    meaning: "witness",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "証人[しょうにん]として出廷[しゅってい]する。",
      en: "Appear in court as a witness."
    }
  },
  {
    id: "vn3-931",
    word: "判決",
    reading: "はんけつ",
    romaji: "hanketsu",
    meaning: "verdict",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "判決[はんけつ]を待[ま]つ。",
      en: "Await the verdict."
    }
  },
  {
    id: "vn3-932",
    word: "罰金",
    reading: "ばっきん",
    romaji: "bakkin",
    meaning: "fine",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "罰金[ばっきん]を払[はら]う。",
      en: "Pay a fine."
    }
  },
  {
    id: "vn3-933",
    word: "犯行",
    reading: "はんこう",
    romaji: "hankou",
    meaning: "offense",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "犯行[はんこう]を自白[じはく]する。",
      en: "Confess to the offense."
    }
  },
  {
    id: "vn3-934",
    word: "犯罪",
    reading: "はんざい",
    romaji: "hanzai",
    meaning: "crime",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "犯罪[はんざい]を防[ふせ]ぐ。",
      en: "Prevent crime."
    }
  },
  {
    id: "vn3-935",
    word: "被害者",
    reading: "ひがいしゃ",
    romaji: "higaisha",
    meaning: "victim",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "被害者[ひがいしゃ]を救[すく]う。",
      en: "Rescue the victim."
    }
  },
  {
    id: "vn3-936",
    word: "加害者",
    reading: "かがいしゃ",
    romaji: "kagaisha",
    meaning: "perpetrator",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "加害者[かがいしゃ]を特定[とくてい]する。",
      en: "Identify the perpetrator."
    }
  },
  {
    id: "vn3-937",
    word: "救助",
    reading: "きゅうじょ",
    romaji: "kyuujo",
    meaning: "rescue",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "救助[きゅうじょ]を求[もと]める。",
      en: "Call for rescue."
    }
  },
  {
    id: "vn3-938",
    word: "警報",
    reading: "けいほう",
    romaji: "keihou",
    meaning: "warning",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "警報[けいほう]が出[で]る。",
      en: "A warning is issued."
    }
  },
  {
    id: "vn3-939",
    word: "注意報",
    reading: "ちゅういほう",
    romaji: "chuuihou",
    meaning: "advisory",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "注意報[ちゅういほう]が発表[はっぴょう]される。",
      en: "An advisory is issued."
    }
  },
  {
    id: "vn3-940",
    word: "台風",
    reading: "たいふう",
    romaji: "taifuu",
    meaning: "typhoon",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "台風[たいふう]が接近[せっきん]する。",
      en: "A typhoon approaches."
    }
  },
  {
    id: "vn3-941",
    word: "津波",
    reading: "つなみ",
    romaji: "tsunami",
    meaning: "tsunami",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "津波[つなみ]に警戒[けいかい]する。",
      en: "Beware of a tsunami."
    }
  },
  {
    id: "vn3-942",
    word: "地震",
    reading: "じしん",
    romaji: "jishin",
    meaning: "earthquake",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "地震[じしん]が起[お]きる。",
      en: "An earthquake occurs."
    }
  },
  {
    id: "vn3-943",
    word: "震度",
    reading: "しんど",
    romaji: "shindo",
    meaning: "seismic intensity",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "震度[しんど]を測[はか]る。",
      en: "Measure seismic intensity."
    }
  },
  {
    id: "vn3-944",
    word: "被害",
    reading: "ひがい",
    romaji: "higai",
    meaning: "damage",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "被害[ひがい]が広[ひろ]がる。",
      en: "Damage spreads."
    }
  },
  {
    id: "vn3-945",
    word: "災害",
    reading: "さいがい",
    romaji: "saigai",
    meaning: "disaster",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "災害[さいがい]に備[そな]える。",
      en: "Prepare for a disaster."
    }
  },
  {
    id: "vn3-946",
    word: "復興",
    reading: "ふっこう",
    romaji: "fukkou",
    meaning: "reconstruction",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "復興[ふっこう]を支援[しえん]する。",
      en: "Support reconstruction."
    }
  },
  {
    id: "vn3-947",
    word: "義援金",
    reading: "ぎえんきん",
    romaji: "gienkin",
    meaning: "donation",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "義援金[ぎえんきん]を送[おく]る。",
      en: "Send a donation."
    }
  },
  {
    id: "vn3-948",
    word: "避難",
    reading: "ひなん",
    romaji: "hinan",
    meaning: "evacuation",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "避難[ひなん]する。",
      en: "Evacuate."
    }
  },
  {
    id: "vn3-949",
    word: "避難所",
    reading: "ひなんじょ",
    romaji: "hinanjo",
    meaning: "shelter",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "避難所[ひなんじょ]に集[あつ]まる。",
      en: "Gather at the shelter."
    }
  },
  {
    id: "vn3-950",
    word: "防災",
    reading: "ぼうさい",
    romaji: "bousai",
    meaning: "disaster prevention",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "防災[ぼうさい]の訓練[くんれん]をする。",
      en: "Conduct disaster-prevention training."
    }
  },
  {
    id: "vn3-951",
    word: "防犯",
    reading: "ぼうはん",
    romaji: "bouhan",
    meaning: "crime prevention",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "防犯[ぼうはん]カメラを設置[せっち]する。",
      en: "Install a crime-prevention camera."
    }
  },
  {
    id: "vn3-952",
    word: "警備",
    reading: "けいび",
    romaji: "keibi",
    meaning: "security",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "警備[けいび]を強化[きょうか]する。",
      en: "Strengthen security."
    }
  },
  {
    id: "vn3-953",
    word: "警備員",
    reading: "けいびいん",
    romaji: "keibiin",
    meaning: "security guard",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "警備員[けいびいん]が夜[よる]を見張[みは]る。",
      en: "A security guard keeps watch at night."
    }
  },
  {
    id: "vn3-954",
    word: "施設",
    reading: "しせつ",
    romaji: "shisetsu",
    meaning: "facility",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "施設[しせつ]を利用[りよう]する。",
      en: "Use a facility."
    }
  },
  {
    id: "vn3-955",
    word: "公園",
    reading: "こうえん",
    romaji: "kouen",
    meaning: "park",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "公園[こうえん]を散歩[さんぽ]する。",
      en: "Stroll in a park."
    }
  },
  {
    id: "vn3-956",
    word: "広場",
    reading: "ひろば",
    romaji: "hiroba",
    meaning: "plaza",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "広場[ひろば]に集[あつ]まる。",
      en: "Gather at the plaza."
    }
  },
  {
    id: "vn3-957",
    word: "遊歩道",
    reading: "ゆうほどう",
    romaji: "yuuhodou",
    meaning: "promenade",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "遊歩道[ゆうほどう]を歩[ある]く。",
      en: "Walk along the promenade."
    }
  },
  {
    id: "vn3-958",
    word: "景色",
    reading: "けしき",
    romaji: "keshiki",
    meaning: "scenery",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "景色[けしき]を楽[たの]しむ。",
      en: "Enjoy the scenery."
    }
  },
  {
    id: "vn3-959",
    word: "展望台",
    reading: "てんぼうだい",
    romaji: "tenboudai",
    meaning: "observatory",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "展望台[てんぼうだい]に登[のぼ]る。",
      en: "Climb the observatory."
    }
  },
  {
    id: "vn3-960",
    word: "展覧会",
    reading: "てんらんかい",
    romaji: "tenrankai",
    meaning: "exhibition",
    level: "N3",
    theme: "Nouns",
    partOfSpeech: "noun",
    example: {
      jp: "展覧会[てんらんかい]に行[い]く。",
      en: "Go to an exhibition."
    }
  },
  // ============================================================
  // Verbs — 40 words (vn3-961 .. vn3-1000)
  // ============================================================
  {
    id: "vn3-961",
    word: "引き下がる",
    reading: "ひきさがる",
    romaji: "hikisagaru",
    meaning: "to back down",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "議論[ぎろん]から引[ひ]き下[さ]がる。",
      en: "Back down from the discussion."
    }
  },
  {
    id: "vn3-962",
    word: "引き継ぐ",
    reading: "ひきつぐ",
    romaji: "hikitsugu",
    meaning: "to take over",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]を引[ひ]き継[つ]ぐ。",
      en: "Take over the work."
    }
  },
  {
    id: "vn3-963",
    word: "引き起こす",
    reading: "ひきおこす",
    romaji: "hikiokosu",
    meaning: "to cause",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "問題[もんだい]を引[ひ]き起[お]こす。",
      en: "Cause a problem."
    }
  },
  {
    id: "vn3-964",
    word: "引き落とす",
    reading: "ひきおとす",
    romaji: "hikiotosu",
    meaning: "to withdraw (money)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "口座[こうざ]から引[ひ]き落[お]とす。",
      en: "Withdraw from the account."
    }
  },
  {
    id: "vn3-965",
    word: "取り立てる",
    reading: "とりたてる",
    romaji: "toritateru",
    meaning: "to collect",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "借金[しゃっきん]を取[と]り立[た]てる。",
      en: "Collect a debt."
    }
  },
  {
    id: "vn3-966",
    word: "取り残す",
    reading: "とりのこす",
    romaji: "torinokosu",
    meaning: "to leave behind",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "友[とも]を取[と]り残[のこ]す。",
      en: "Leave a friend behind."
    }
  },
  {
    id: "vn3-967",
    word: "取り壊す",
    reading: "とりこわす",
    romaji: "torikowasu",
    meaning: "to demolish",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "古[ふる]い建物[たてもの]を取[と]り壊[こわ]す。",
      en: "Demolish an old building."
    }
  },
  {
    id: "vn3-968",
    word: "取り巻く",
    reading: "とりまく",
    romaji: "torimaku",
    meaning: "to surround",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "記者[きしゃ]が取[と]り巻[ま]く。",
      en: "Reporters surround."
    }
  },
  {
    id: "vn3-969",
    word: "取り入れる",
    reading: "とりいれる",
    romaji: "toriireru",
    meaning: "to adopt",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "新[あたら]しい技術[ぎじゅつ]を取[と]り入[い]れる。",
      en: "Adopt new technology."
    }
  },
  {
    id: "vn3-970",
    word: "受け止める",
    reading: "うけとめる",
    romaji: "uketomeru",
    meaning: "to catch, accept",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "ボールを受[う]け止[と]める。",
      en: "Catch the ball."
    }
  },
  {
    id: "vn3-971",
    word: "受け流す",
    reading: "うけながす",
    romaji: "ukenagasu",
    meaning: "to parry, brush off",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "冗談[じょうだん]を受[う]け流[なが]す。",
      en: "Brush off a joke."
    }
  },
  {
    id: "vn3-972",
    word: "見極める",
    reading: "みきわめる",
    romaji: "mikiwameru",
    meaning: "to ascertain",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "真実[しんじつ]を見[み]極[きわ]める。",
      en: "Ascertain the truth."
    }
  },
  {
    id: "vn3-973",
    word: "見込む",
    reading: "みこむ",
    romaji: "mikomu",
    meaning: "to expect, anticipate",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "成功[せいこう]を見[み]込[こ]む。",
      en: "Expect success."
    }
  },
  {
    id: "vn3-974",
    word: "見出す",
    reading: "みいだす",
    romaji: "miidasu",
    meaning: "to discover",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "解決策[かいけつさく]を見[み]出[だ]す。",
      en: "Find a solution."
    }
  },
  {
    id: "vn3-975",
    word: "見渡す",
    reading: "みわたす",
    romaji: "miwatasu",
    meaning: "to look out over",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "全体[ぜんたい]を見[み]渡[わた]す。",
      en: "Look over the whole."
    }
  },
  {
    id: "vn3-976",
    word: "思いやる",
    reading: "おもいやる",
    romaji: "omoiyaru",
    meaning: "to be considerate of",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "人[ひと]を思[おも]いやる。",
      en: "Be considerate of others."
    }
  },
  {
    id: "vn3-977",
    word: "思い当たる",
    reading: "おもいあたる",
    romaji: "omoiataru",
    meaning: "to think of (a possibility)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "理由[りゆう]が思[おも]い当[あ]たる。",
      en: "Think of a reason."
    }
  },
  {
    id: "vn3-978",
    word: "思い浮かぶ",
    reading: "おもいうかぶ",
    romaji: "omoiukabu",
    meaning: "to come to mind",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "昔[むかし]が思[おも]い浮[うか]ぶ。",
      en: "Old times come to mind."
    }
  },
  {
    id: "vn3-979",
    word: "打ち明ける",
    reading: "うちあける",
    romaji: "uchiakeru",
    meaning: "to confide",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "秘密[ひみつ]を打[う]ち明[あ]ける。",
      en: "Confide a secret."
    }
  },
  {
    id: "vn3-980",
    word: "打ち消す",
    reading: "うちけす",
    romaji: "uchikesu",
    meaning: "to deny",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "噂[うわさ]を打[う]ち消[け]す。",
      en: "Deny a rumor."
    }
  },
  {
    id: "vn3-981",
    word: "打ち込む",
    reading: "うちこむ",
    romaji: "uchikomu",
    meaning: "to be absorbed in",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]に打[う]ち込[こ]む。",
      en: "Be absorbed in work."
    }
  },
  {
    id: "vn3-982",
    word: "打ち勝つ",
    reading: "うちかつ",
    romaji: "uchikatsu",
    meaning: "to overcome",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "困難[こんなん]に打[う]ち勝[か]つ。",
      en: "Overcome difficulty."
    }
  },
  {
    id: "vn3-983",
    word: "立ち去る",
    reading: "たちさる",
    romaji: "tachisaru",
    meaning: "to walk away",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "現場[げんば]から立[た]ち去[さ]る。",
      en: "Leave the scene."
    }
  },
  {
    id: "vn3-984",
    word: "立ち入る",
    reading: "たちいる",
    romaji: "tachiiru",
    meaning: "to step in",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "他人[たにん]の領域[りょういき]に立[た]ち入[い]る。",
      en: "Step into others' territory."
    }
  },
  {
    id: "vn3-985",
    word: "立ち向かう",
    reading: "たちむかう",
    romaji: "tachimukau",
    meaning: "to confront",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "敵[てき]に立[た]ち向[むか]う。",
      en: "Confront the enemy."
    }
  },
  {
    id: "vn3-986",
    word: "立ち振る舞う",
    reading: "たちふるまう",
    romaji: "tachifurumau",
    meaning: "to behave",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "礼儀[れいぎ]正[ただ]しく立[た]ち振[ふる]舞[ま]う。",
      en: "Behave politely."
    }
  },
  {
    id: "vn3-987",
    word: "切り替える",
    reading: "きりかえる",
    romaji: "kirikaeru",
    meaning: "to switch over",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "考[かんが]えを切[き]り替[か]える。",
      en: "Switch one's thinking."
    }
  },
  {
    id: "vn3-988",
    word: "切り上げる",
    reading: "きりあげる",
    romaji: "kiriageru",
    meaning: "to wrap up, close",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "仕事[しごと]を切[き]り上[あ]げる。",
      en: "Wrap up work."
    }
  },
  {
    id: "vn3-989",
    word: "切り出す",
    reading: "きりだす",
    romaji: "kiridasu",
    meaning: "to begin to say",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "挨拶[あいさつ]から切[き]り出[だ]す。",
      en: "Start with a greeting."
    }
  },
  {
    id: "vn3-990",
    word: "切り下げる",
    reading: "きりさげる",
    romaji: "kirisageru",
    meaning: "to lower, reduce",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "価格[かかく]を切[き]り下[さ]げる。",
      en: "Lower the price."
    }
  },
  {
    id: "vn3-991",
    word: "組み立てる",
    reading: "くみたてる",
    romaji: "kumitateru",
    meaning: "to assemble",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "棚[たな]を組[く]み立[た]てる。",
      en: "Assemble a shelf."
    }
  },
  {
    id: "vn3-992",
    word: "組み込む",
    reading: "くみこむ",
    romaji: "kumikomu",
    meaning: "to incorporate",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "計画[けいかく]に組[く]み込[こ]む。",
      en: "Incorporate into the plan."
    }
  },
  {
    id: "vn3-993",
    word: "組み合わせる",
    reading: "くみあわせる",
    romaji: "kumiawaseru",
    meaning: "to combine",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "部品[ぶひん]を組[く]み合[あ]わせる。",
      en: "Combine the parts."
    }
  },
  {
    id: "vn3-994",
    word: "書き込む",
    reading: "かきこむ",
    romaji: "kakikomu",
    meaning: "to write in",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "欄[らん]に書[か]き込[こ]む。",
      en: "Write in the column."
    }
  },
  {
    id: "vn3-995",
    word: "書き留める",
    reading: "かきとめる",
    romaji: "kakitomeru",
    meaning: "to write down",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "日記[にっき]に書[か]き留[と]める。",
      en: "Write down in a diary."
    }
  },
  {
    id: "vn3-996",
    word: "書き直す",
    reading: "かきなおす",
    romaji: "kakinaosu",
    meaning: "to rewrite",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "文章[ぶんしょう]を書[か]き直[なお]す。",
      en: "Rewrite the text."
    }
  },
  {
    id: "vn3-997",
    word: "書き抜く",
    reading: "かきぬく",
    romaji: "kakinuku",
    meaning: "to extract (a passage)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "句[く]を書[か]き抜[ぬ]く。",
      en: "Extract a phrase."
    }
  },
  {
    id: "vn3-998",
    word: "読み上げる",
    reading: "よみあげる",
    romaji: "yomiageru",
    meaning: "to read aloud",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "名前[なまえ]を読[よ]み上[あ]げる。",
      en: "Read aloud the names."
    }
  },
  {
    id: "vn3-999",
    word: "読み取る",
    reading: "よみとる",
    romaji: "yomitoru",
    meaning: "to comprehend by reading",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "意図[いと]を読[よ]み取[と]る。",
      en: "Read the intent."
    }
  },
  {
    id: "vn3-1000",
    word: "読み込む",
    reading: "よみこむ",
    romaji: "yomikomu",
    meaning: "to load (data)",
    level: "N3",
    theme: "Verbs",
    partOfSpeech: "verb",
    example: {
      jp: "データを読[よ]み込[こ]む。",
      en: "Load data."
    }
  },
  // ============================================================
  // Adjectives — 25 words (vn3-1001 .. vn3-1025)
  // ============================================================
  {
    id: "vn3-1001",
    word: "穏やか",
    reading: "おだやか",
    romaji: "odayaka",
    meaning: "calm, gentle",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "海[うみ]が穏[おだ]やかだ。",
      en: "The sea is calm."
    }
  },
  {
    id: "vn3-1002",
    word: "和やか",
    reading: "なごやか",
    romaji: "nagoyaka",
    meaning: "harmonious",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "雰囲気[ふんいき]が和[なご]やかだ。",
      en: "The atmosphere is harmonious."
    }
  },
  {
    id: "vn3-1003",
    word: "賑やか",
    reading: "にぎやか",
    romaji: "nigiyaka",
    meaning: "lively",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "町[まち]が賑[にぎ]やかだ。",
      en: "The town is lively."
    }
  },
  {
    id: "vn3-1004",
    word: "鮮やか",
    reading: "あざやか",
    romaji: "azayaka",
    meaning: "vivid, bright",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "色[いろ]が鮮[あざ]やかだ。",
      en: "The color is vivid."
    }
  },
  {
    id: "vn3-1005",
    word: "滑らか",
    reading: "なめらか",
    romaji: "nameraka",
    meaning: "smooth",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "肌[はだ]が滑[なめ]らかだ。",
      en: "The skin is smooth."
    }
  },
  {
    id: "vn3-1006",
    word: "豪華",
    reading: "ごうか",
    romaji: "gouka",
    meaning: "gorgeous",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "料理[りょうり]が豪華[ごうか]だ。",
      en: "The cuisine is gorgeous."
    }
  },
  {
    id: "vn3-1007",
    word: "上品",
    reading: "じょうひん",
    romaji: "jouhin",
    meaning: "elegant, refined",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "振[ふる]舞[ま]いが上品[じょうひん]だ。",
      en: "The behavior is elegant."
    }
  },
  {
    id: "vn3-1008",
    word: "下品",
    reading: "げひん",
    romaji: "gehin",
    meaning: "vulgar, coarse",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "言[い]葉[ことば]が下品[げひん]だ。",
      en: "The words are vulgar."
    }
  },
  {
    id: "vn3-1009",
    word: "大雑把",
    reading: "おおざっぱ",
    romaji: "oozappa",
    meaning: "rough, approximate",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "説明[せつめい]が大雑把[おおざっぱ]だ。",
      en: "The explanation is rough."
    }
  },
  {
    id: "vn3-1010",
    word: "大幅",
    reading: "おおはば",
    romaji: "oohaba",
    meaning: "large-scale",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "改善[かいぜん]が大幅[おおはば]だ。",
      en: "The improvement is large-scale."
    }
  },
  {
    id: "vn3-1011",
    word: "膨大",
    reading: "ぼうだい",
    romaji: "boudai",
    meaning: "enormous, vast",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "量[りょう]が膨大[ぼうだい]だ。",
      en: "The amount is enormous."
    }
  },
  {
    id: "vn3-1012",
    word: "巨大",
    reading: "きょだい",
    romaji: "kyodai",
    meaning: "huge",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "建物[たてもの]が巨大[きょだい]だ。",
      en: "The building is huge."
    }
  },
  {
    id: "vn3-1013",
    word: "繊細",
    reading: "せんさい",
    romaji: "sensai",
    meaning: "delicate, sensitive",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "神経[しんけい]が繊細[せんさい]だ。",
      en: "The nerves are delicate."
    }
  },
  {
    id: "vn3-1014",
    word: "愚か",
    reading: "おろか",
    romaji: "oroka",
    meaning: "foolish",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "行[おこな]いが愚[おろ]かだ。",
      en: "The behavior is foolish."
    }
  },
  {
    id: "vn3-1015",
    word: "無邪気",
    reading: "むじゃき",
    romaji: "mujaki",
    meaning: "innocent, naive",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "笑顔[えがお]が無邪気[むじゃき]だ。",
      en: "The smile is innocent."
    }
  },
  {
    id: "vn3-1016",
    word: "残酷",
    reading: "ざんこく",
    romaji: "zankoku",
    meaning: "cruel",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "戦争[せんそう]が残酷[ざんこく]だ。",
      en: "War is cruel."
    }
  },
  {
    id: "vn3-1017",
    word: "冷酷",
    reading: "れいこく",
    romaji: "reikoku",
    meaning: "cold-hearted",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "彼[かれ]は冷酷[れいこく]だ。",
      en: "He is cold-hearted."
    }
  },
  {
    id: "vn3-1018",
    word: "厳格",
    reading: "げんかく",
    romaji: "genkaku",
    meaning: "strict",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "父[ちち]は厳格[げんかく]だ。",
      en: "Father is strict."
    }
  },
  {
    id: "vn3-1019",
    word: "寛大",
    reading: "かんだい",
    romaji: "kandai",
    meaning: "generous",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "彼[かれ]は寛大[かんだい]だ。",
      en: "He is generous."
    }
  },
  {
    id: "vn3-1020",
    word: "柔軟",
    reading: "じゅうなん",
    romaji: "juunan",
    meaning: "flexible",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "考[かんが]えが柔軟[じゅうなん]だ。",
      en: "The thinking is flexible."
    }
  },
  {
    id: "vn3-1021",
    word: "単調",
    reading: "たんちょう",
    romaji: "tanchou",
    meaning: "monotonous",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "声[こえ]が単調[たんちょう]だ。",
      en: "The voice is monotonous."
    }
  },
  {
    id: "vn3-1022",
    word: "粗末",
    reading: "そまつ",
    romaji: "somatsu",
    meaning: "shabby, poor",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "部屋[へや]が粗末[そまつ]だ。",
      en: "The room is shabby."
    }
  },
  {
    id: "vn3-1023",
    word: "誠実",
    reading: "せいじつ",
    romaji: "seijitsu",
    meaning: "sincere",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "na-adjective",
    example: {
      jp: "態度[たいど]が誠実[せいじつ]だ。",
      en: "The attitude is sincere."
    }
  },
  {
    id: "vn3-1024",
    word: "望ましい",
    reading: "のぞましい",
    romaji: "nozomashii",
    meaning: "desirable",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "結果[けっか]が望[のぞ]ましい。",
      en: "The result is desirable."
    }
  },
  {
    id: "vn3-1025",
    word: "恋しい",
    reading: "こいしい",
    romaji: "koishii",
    meaning: "longed-for, missed",
    level: "N3",
    theme: "Adjectives",
    partOfSpeech: "i-adjective",
    example: {
      jp: "故郷[こきょう]が恋[こい]しい。",
      en: "I miss my hometown."
    }
  },
  // ============================================================
  // Adverbs — 15 words (vn3-1026 .. vn3-1040)
  // ============================================================
  {
    id: "vn3-1026",
    word: "かつて",
    reading: "かつて",
    romaji: "katsute",
    meaning: "once, formerly",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "かつてここに住[す]んでいた。",
      en: "I once lived here."
    }
  },
  {
    id: "vn3-1027",
    word: "かえって",
    reading: "かえって",
    romaji: "kaette",
    meaning: "rather, on the contrary",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "かえって悪[わる]くなる。",
      en: "It rather gets worse."
    }
  },
  {
    id: "vn3-1028",
    word: "極めて",
    reading: "きわめて",
    romaji: "kiwamete",
    meaning: "extremely",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "極[きわ]めて大[おお]きい。",
      en: "Extremely big."
    }
  },
  {
    id: "vn3-1029",
    word: "くれぐれも",
    reading: "くれぐれも",
    romaji: "kureguremo",
    meaning: "earnestly, repeatedly",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "くれぐれも宜[よろ]しく。",
      en: "Please take care."
    }
  },
  {
    id: "vn3-1030",
    word: "先ほど",
    reading: "さきほど",
    romaji: "sakihodo",
    meaning: "a while ago",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "先[さき]ほど来[き]た客[きゃく]。",
      en: "A guest who came a while ago."
    }
  },
  {
    id: "vn3-1031",
    word: "さしあたり",
    reading: "さしあたり",
    romaji: "sashiatari",
    meaning: "for the present",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "さしあたり困[こま]らない。",
      en: "I have no trouble for now."
    }
  },
  {
    id: "vn3-1032",
    word: "しばしば",
    reading: "しばしば",
    romaji: "shibashiba",
    meaning: "often, repeatedly",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "しばしば起[お]こる。",
      en: "It happens often."
    }
  },
  {
    id: "vn3-1033",
    word: "じきに",
    reading: "じきに",
    romaji: "jikini",
    meaning: "soon, before long",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "じきに春[はる]が来[く]る。",
      en: "Spring will come soon."
    }
  },
  {
    id: "vn3-1034",
    word: "じわじわ",
    reading: "じわじわ",
    romaji: "jiwajiwa",
    meaning: "gradually, slowly",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "じわじわと進[すす]む。",
      en: "Progress gradually."
    }
  },
  {
    id: "vn3-1035",
    word: "直ちに",
    reading: "ただちに",
    romaji: "tadachini",
    meaning: "immediately",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "直[ただ]ちに実行[じっこう]する。",
      en: "Execute immediately."
    }
  },
  {
    id: "vn3-1036",
    word: "たちまち",
    reading: "たちまち",
    romaji: "tachimachi",
    meaning: "in an instant",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "たちまち集[あつ]まる。",
      en: "Gather in an instant."
    }
  },
  {
    id: "vn3-1037",
    word: "たびたび",
    reading: "たびたび",
    romaji: "tabitabi",
    meaning: "repeatedly, often",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "たびたび訪[おとず]れる。",
      en: "Visit repeatedly."
    }
  },
  {
    id: "vn3-1038",
    word: "近頃",
    reading: "ちかごろ",
    romaji: "chikagoro",
    meaning: "recently",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "近頃[ちかごろ]寒[さむ]い。",
      en: "It is cold lately."
    }
  },
  {
    id: "vn3-1039",
    word: "とっくに",
    reading: "とっくに",
    romaji: "tokkuni",
    meaning: "long ago",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "とっくに終[お]わった。",
      en: "It finished long ago."
    }
  },
  {
    id: "vn3-1040",
    word: "なんとか",
    reading: "なんとか",
    romaji: "nantoka",
    meaning: "somehow, one way or another",
    level: "N3",
    theme: "Adverbs",
    partOfSpeech: "adverb",
    example: {
      jp: "なんとか成[な]り立[た]つ。",
      en: "It somehow works."
    }
  },
  // ============================================================
  // Particles — 5 words (vn3-1041 .. vn3-1045)
  // ============================================================
  {
    id: "vn3-1041",
    word: "すら",
    reading: "すら",
    romaji: "sura",
    meaning: "even (more formal than さえ)",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "子[こ]供[ども]ですら知[し]っている。",
      en: "Even a child knows."
    }
  },
  {
    id: "vn3-1042",
    word: "ぐらい",
    reading: "ぐらい",
    romaji: "gurai",
    meaning: "about, at least",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "一[いっ]時間[じかん]ぐらい待[ま]つ。",
      en: "Wait about an hour."
    }
  },
  {
    id: "vn3-1043",
    word: "とか",
    reading: "とか",
    romaji: "toka",
    meaning: "such as, among other things",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "リンゴとかバナナを食[た]べる。",
      en: "Eat things like apples and bananas."
    }
  },
  {
    id: "vn3-1044",
    word: "きり",
    reading: "きり",
    romaji: "kiri",
    meaning: "only, just",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "一[いっ]度[ど]きり会[あ]う。",
      en: "Meet only once."
    }
  },
  {
    id: "vn3-1045",
    word: "ずつ",
    reading: "ずつ",
    romaji: "zutsu",
    meaning: "each, per",
    level: "N3",
    theme: "Particles",
    partOfSpeech: "particle",
    example: {
      jp: "一人[ひとり]ずつ話[はな]す。",
      en: "Speak one by one."
    }
  },
  // ============================================================
  // Conjunctions — 10 words (vn3-1046 .. vn3-1055)
  // ============================================================
  {
    id: "vn3-1046",
    word: "あるいは",
    reading: "あるいは",
    romaji: "aruiwa",
    meaning: "or, alternatively",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "電話[でんわ]あるいは手紙[てがみ]で連絡[れんらく]する。",
      en: "Contact by phone or letter."
    }
  },
  {
    id: "vn3-1047",
    word: "および",
    reading: "および",
    romaji: "oyobi",
    meaning: "and (formal)",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "社長[しゃちょう]および副社長[ふくしゃちょう]。",
      en: "The president and vice president."
    }
  },
  {
    id: "vn3-1048",
    word: "かつ",
    reading: "かつ",
    romaji: "katsu",
    meaning: "and, moreover",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "安全[あんぜん]かつ便利[べんり]だ。",
      en: "Safe and convenient."
    }
  },
  {
    id: "vn3-1049",
    word: "したがって",
    reading: "したがって",
    romaji: "shitagatte",
    meaning: "therefore (formal)",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "したがって結論[けつろん]が違[ちが]う。",
      en: "Therefore, the conclusion differs."
    }
  },
  {
    id: "vn3-1050",
    word: "そのかわり",
    reading: "そのかわり",
    romaji: "sonokawari",
    meaning: "instead",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "そのかわり休[やす]みを取[と]る。",
      en: "Instead, take a break."
    }
  },
  {
    id: "vn3-1051",
    word: "それに",
    reading: "それに",
    romaji: "soreni",
    meaning: "besides, in addition",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それに時[じ]間[かん]もかかる。",
      en: "Besides, it takes time."
    }
  },
  {
    id: "vn3-1052",
    word: "それなら",
    reading: "それなら",
    romaji: "sorenara",
    meaning: "if so, in that case",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それなら行[い]こう。",
      en: "Then let's go."
    }
  },
  {
    id: "vn3-1053",
    word: "それにしても",
    reading: "それにしても",
    romaji: "sorenishitemo",
    meaning: "even so",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "それにしてもすごい。",
      en: "Even so, it's amazing."
    }
  },
  {
    id: "vn3-1054",
    word: "ゆえに",
    reading: "ゆえに",
    romaji: "yueni",
    meaning: "therefore (formal)",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "ゆえに認[みと]める。",
      en: "Therefore, acknowledge."
    }
  },
  {
    id: "vn3-1055",
    word: "とりわけ",
    reading: "とりわけ",
    romaji: "toriwake",
    meaning: "especially",
    level: "N3",
    theme: "Conjunctions",
    partOfSpeech: "conjunction",
    example: {
      jp: "とりわけ優[すぐ]れる。",
      en: "Especially excellent."
    }
  },
  // ============================================================
  // Onomatopoeia — 15 words (vn3-1056 .. vn3-1070)
  // ============================================================
  {
    id: "vn3-1056",
    word: "うずうず",
    reading: "うずうず",
    romaji: "uzuuzu",
    meaning: "itching to do something",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "うずうずして待[ま]つ。",
      en: "Wait restlessly eager."
    }
  },
  {
    id: "vn3-1057",
    word: "うろうろ",
    reading: "うろうろ",
    romaji: "urouro",
    meaning: "pacing about, roaming",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "うろうろ歩[ある]き回[まわ]る。",
      en: "Pace around."
    }
  },
  {
    id: "vn3-1058",
    word: "がみがみ",
    reading: "がみがみ",
    romaji: "gamigami",
    meaning: "scolding harshly",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "がみがみと叱[しか]る。",
      en: "Scold harshly."
    }
  },
  {
    id: "vn3-1059",
    word: "きびきび",
    reading: "きびきび",
    romaji: "kibikibi",
    meaning: "briskly, vigorously",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "きびきび動[うご]く。",
      en: "Move briskly."
    }
  },
  {
    id: "vn3-1060",
    word: "くたくた",
    reading: "くたくた",
    romaji: "kutakuta",
    meaning: "exhausted",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "くたくたに疲[つか]れる。",
      en: "Be exhausted."
    }
  },
  {
    id: "vn3-1061",
    word: "こそこそ",
    reading: "こそこそ",
    romaji: "kosokoso",
    meaning: "sneakily",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "こそこそ逃[に]げる。",
      en: "Slip away sneakily."
    }
  },
  {
    id: "vn3-1062",
    word: "ごろごろ",
    reading: "ごろごろ",
    romaji: "gorogoro",
    meaning: "idling about",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "家[いえ]でごろごろする。",
      en: "Idle about at home."
    }
  },
  {
    id: "vn3-1063",
    word: "さくさく",
    reading: "さくさく",
    romaji: "sakusaku",
    meaning: "smoothly, efficiently",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "さくさく進[すす]む。",
      en: "Progress smoothly."
    }
  },
  {
    id: "vn3-1064",
    word: "じたばた",
    reading: "じたばた",
    romaji: "jitabata",
    meaning: "flailing about, panicking",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "じたばた騒[さわ]ぐ。",
      en: "Fuss around."
    }
  },
  {
    id: "vn3-1065",
    word: "じろじろ",
    reading: "じろじろ",
    romaji: "jirojiro",
    meaning: "staring rudely",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "じろじろ見[み]る。",
      en: "Stare rudely."
    }
  },
  {
    id: "vn3-1066",
    word: "すいすい",
    reading: "すいすい",
    romaji: "suisui",
    meaning: "smoothly, easily",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "すいすい泳[およ]ぐ。",
      en: "Swim smoothly."
    }
  },
  {
    id: "vn3-1067",
    word: "そわそわ",
    reading: "そわそわ",
    romaji: "sowasowa",
    meaning: "fidgety, restless",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "そわそわ落[おち]着[つ]かない。",
      en: "Be fidgety and restless."
    }
  },
  {
    id: "vn3-1068",
    word: "ぴったり",
    reading: "ぴったり",
    romaji: "pittari",
    meaning: "exactly, tightly",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "ぴったり合[あ]う。",
      en: "Fit exactly."
    }
  },
  {
    id: "vn3-1069",
    word: "ふらふら",
    reading: "ふらふら",
    romaji: "furafura",
    meaning: "dizzy, unsteady",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "ふらふらと歩[ある]く。",
      en: "Walk dizzily."
    }
  },
  {
    id: "vn3-1070",
    word: "ぺらぺら",
    reading: "ぺらぺら",
    romaji: "perapera",
    meaning: "fluent (in a language)",
    level: "N3",
    theme: "Onomatopoeia",
    partOfSpeech: "adverb",
    example: {
      jp: "英[えい]語[ご]がぺらぺらだ。",
      en: "Be fluent in English."
    }
  },
  // ============================================================
  // Idioms — 10 words (vn3-1071 .. vn3-1080)
  // ============================================================
  {
    id: "vn3-1071",
    word: "頭を下げる",
    reading: "あたまをさげる",
    romaji: "atamaosageru",
    meaning: "to bow, to apologize",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "先[せん]生[せい]に頭[あたま]を下[さ]げる。",
      en: "Apologize to the teacher."
    }
  },
  {
    id: "vn3-1072",
    word: "頭が切れる",
    reading: "あたまがきれる",
    romaji: "atamagakireru",
    meaning: "to be sharp-minded",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "彼[かれ]は頭[あたま]が切[き]れる。",
      en: "He is sharp-minded."
    }
  },
  {
    id: "vn3-1073",
    word: "顔を立てる",
    reading: "かおをたてる",
    romaji: "kaootateru",
    meaning: "to save someone's face",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "上[じょう]司[し]の顔[かお]を立[た]てる。",
      en: "Save the boss's face."
    }
  },
  {
    id: "vn3-1074",
    word: "耳を貸す",
    reading: "みみをかす",
    romaji: "mimiokasu",
    meaning: "to lend an ear",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "愚痴[ぐち]に耳[みみ]を貸[か]す。",
      en: "Lend an ear to complaints."
    }
  },
  {
    id: "vn3-1075",
    word: "口を滑らす",
    reading: "くちをすべらす",
    romaji: "kuchiosuberasu",
    meaning: "to let something slip",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "言[い]わないつもりが口[くち]を滑[すべ]らす。",
      en: "Meant not to say it but let it slip."
    }
  },
  {
    id: "vn3-1076",
    word: "手を焼く",
    reading: "てをやく",
    romaji: "teoyaku",
    meaning: "to have trouble with",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "子[こ]供[ども]に手[て]を焼[や]く。",
      en: "Have trouble with a child."
    }
  },
  {
    id: "vn3-1077",
    word: "足を運ぶ",
    reading: "あしをはこぶ",
    romaji: "ashiohakobu",
    meaning: "to make the effort to go",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "何[なん]度[ど]も足[あし]を運[はこ]ぶ。",
      en: "Visit multiple times."
    }
  },
  {
    id: "vn3-1078",
    word: "目を通す",
    reading: "めをとおす",
    romaji: "meotoosu",
    meaning: "to skim, look over",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "資[し]料[りょう]に目[め]を通[とお]す。",
      en: "Skim the materials."
    }
  },
  {
    id: "vn3-1079",
    word: "歯が立たない",
    reading: "はがたたない",
    romaji: "hagatatanai",
    meaning: "to be no match for",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "強[つよ]すぎて歯[は]が立[た]たない。",
      en: "Too strong to match."
    }
  },
  {
    id: "vn3-1080",
    word: "骨が折れる",
    reading: "ほねがおれる",
    romaji: "honegaoreru",
    meaning: "to be hard work",
    level: "N3",
    theme: "Idioms",
    partOfSpeech: "expression",
    example: {
      jp: "骨[ほね]が折[お]れる仕事[しごと]だ。",
      en: "It is a demanding job."
    }
  }
];
