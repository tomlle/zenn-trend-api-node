const fetchZennTrend = require("./_fetchZennTrend");

async function handler(request, response) {
  try {
    // Zenn公式サイトから情報を抽出
    const raw = await fetchZennTrend();
    if (raw === '')  {
      response.status(500).json({
        message: 'fetch error from Zenn corporate site',
        data: {}
      });
    }
    response.status(200).json(JSON.parse(raw).props.pageProps.dailyBooks);
  } catch (error) {
    response.status(500).json({
      message: 'server error',
      data: error
    });
  }
}

module.exports = handler;