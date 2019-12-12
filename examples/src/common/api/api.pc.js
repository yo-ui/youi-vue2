module.exports = {
    aliyun: {
        nocaptcha: {
            // feng-qun ali-yun captcha appkey
            // 500,000 times per year
            appkey: 'FFFF0N00000000005EE7',
            h5appkey: 'FFFF00000000017CFA78'
        }
    },
    pizza:{
        apikey:'9C0E825A6D6F450DE7106008DAF91653',
    },
    google: {
        ga: ['UA-144546282-1'],
        geo: 'JPVkrM4O_L9s6GHr7PL-8--GCs-u0nkzsBBDwajTn9U'
    },
    routerMode:'',
    axioTimeout:1000*10,//超时时间为10s
    lang: '',
    ws: '',
    imageServer:'https://imgs.exnet.io/exnetImgs',
    // otcImageServer:'https://api.coinpay.do',
    coinPayHost:'https://api.coinpay.do',
    webSocket: 'wss://stream.exnet.io/api/v1/pie',//websocket地址
    host: 'https://api.exnet.io/pie/api',//后端接口地址
    extion: 'https://api.exnet.io/pie/extion',//推广链接host
    sale: 'https://api.exnet.io/pie/sale',
    apiHost:'https://nodeapi.exnet.io/api/v1',//本地抓取内容接口
    offerHost:'https://activity.exnet.io',//认购相关地址
    debug: false
}
