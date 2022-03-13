const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://zenn.dev/";

/**
 * Zenn公式サイトからTechトレンド情報を取得
 */
async function fetchZennTrend() {
  // Zenn公式サイトのTOPページ取得
  const html = await axios
    .get(url, {headers: {'Access-Control-Allow-Origin': '*'}})
    .then(({ data }) => {
      return data;
  });
  // スクレイピングライブラリでTOPページ情報読み込み
  const $ = cheerio.load(html);
  // トレンドデータの抽出
  const raw = $('script[id=__NEXT_DATA__]').html() ?? '';

  return raw;
}

module.exports = fetchZennTrend;