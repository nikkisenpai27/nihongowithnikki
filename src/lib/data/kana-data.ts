// Hiragana & Katakana reference data for Nihongo with Nikki

export interface KanaItem {
  kana: string;
  romaji: string;
}

export interface KanaGroup {
  title: string;
  jp: string;
  items: KanaItem[];
}

export interface KanaSet {
  name: string;
  jp: string;
  groups: KanaGroup[];
}

// helper: "あ:a い:i" -> [{kana:"あ",romaji:"a"},...]
function mk(pairs: string): KanaItem[] {
  return pairs.trim().split(/\s+/).map((p) => {
    const [kana, romaji] = p.split(":");
    return { kana, romaji };
  });
}

export const hiragana: KanaSet = {
  name: "Hiragana",
  jp: "ひらがな",
  groups: [
    {
      title: "Basic (Gojūon)",
      jp: "清音",
      items: mk(`
        あ:a い:i う:u え:e お:o
        か:ka き:ki く:ku け:ke こ:ko
        さ:sa し:shi す:su せ:se そ:so
        た:ta ち:chi つ:tsu て:te と:to
        な:na に:ni ぬ:nu ね:ne の:no
        は:ha ひ:hi ふ:fu へ:he ほ:ho
        ま:ma み:mi む:mu め:me も:mo
        や:ya ゆ:yu よ:yo
        ら:ra り:ri る:ru れ:re ろ:ro
        わ:wa を:wo ん:n
      `),
    },
    {
      title: "Dakuten (Voiced)",
      jp: "濁音",
      items: mk(`
        が:ga ぎ:gi ぐ:gu げ:ge ご:go
        ざ:za ず:zu ぜ:ze ぞ:zo
        だ:da ぢ:ji づ:zu で:de ど:do
        ば:ba び:bi ぶ:bu べ:be ぼ:bo
      `),
    },
    {
      title: "Handakuten (P-voiced)",
      jp: "半濁音",
      items: mk("ぱ:pa ぴ:pi ぷ:pu ぺ:pe ぽ:po"),
    },
    {
      title: "Yōon (Contracted)",
      jp: "拗音",
      items: mk(`
        きゃ:kya きゅ:kyu きょ:kyo
        しゃ:sha しゅ:shu しょ:sho
        ちゃ:cha ちゅ:chu ちょ:cho
        にゃ:nya にゅ:nyu にょ:nyo
        ひゃ:hya ひゅ:hyu ひょ:hyo
        みゃ:mya みゅ:myu みょ:myo
        りゃ:rya りゅ:ryu りょ:ryo
        ぎゃ:gya ぎゅ:gyu ぎょ:gyo
        じゃ:ja じゅ:ju じょ:jo
        びゃ:bya びゅ:byu びょ:byo
        ぴゃ:pya ぴゅ:pyu ぴょ:pyo
      `),
    },
  ],
};

export const katakana: KanaSet = {
  name: "Katakana",
  jp: "カタカナ",
  groups: [
    {
      title: "Basic (Gojūon)",
      jp: "清音",
      items: mk(`
        ア:a イ:i ウ:u エ:e オ:o
        カ:ka キ:ki ク:ku ケ:ke コ:ko
        サ:sa シ:shi ス:su セ:se ソ:so
        タ:ta チ:chi ツ:tsu テ:te ト:to
        ナ:na ニ:ni ヌ:nu ネ:ne ノ:no
        ハ:ha ヒ:hi フ:fu ヘ:he ホ:ho
        マ:ma ミ:mi ム:mu メ:me モ:mo
        ヤ:ya ユ:yu ヨ:yo
        ラ:ra リ:ri ル:ru レ:re ロ:ro
        ワ:wa ヲ:wo ン:n
      `),
    },
    {
      title: "Dakuten (Voiced)",
      jp: "濁音",
      items: mk(`
        ガ:ga ギ:gi グ:gu ゲ:ge ゴ:go
        ザ:za ズ:zu ゼ:ze ゾ:zo
        ダ:da ヂ:ji ヅ:zu デ:de ド:do
        バ:ba ビ:bi ブ:bu ベ:be ボ:bo
      `),
    },
    {
      title: "Handakuten (P-voiced)",
      jp: "半濁音",
      items: mk("パ:pa ピ:pi プ:pu ペ:pe ポ:po"),
    },
    {
      title: "Yōon (Contracted)",
      jp: "拗音",
      items: mk(`
        キャ:kya キュ:kyu キョ:kyo
        シャ:sha シュ:shu ショ:sho
        チャ:cha チュ:chu チョ:cho
        ニャ:nya ニュ:nyu ニョ:nyo
        ヒャ:hya ヒュ:hyu ヒョ:hyo
        ミャ:mya ミュ:myu ミョ:myo
        リャ:rya リュ:ryu リョ:ryo
        ギャ:gya ギュ:gyu ギョ:gyo
        ジャ:ja ジュ:ju ジョ:jo
        ビャ:bya ビュ:byu ビョ:byo
        ピャ:pya ピュ:pyu ピョ:pyo
      `),
    },
  ],
};

export const kanaSets = [hiragana, katakana];
