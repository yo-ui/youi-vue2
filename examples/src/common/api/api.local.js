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
        // apikey:'A9888F50C737359BB8A1F6BDC5ED2FE0',
        apikey:'9C0E825A6D6F450DE7106008DAF91653',//online
    },
    google: {
        ga: ['UA-144546282-1'],
        geo: 'JPVkrM4O_L9s6GHr7PL-8--GCs-u0nkzsBBDwajTn9U'
    },
    routerMode:'history',
    axioTimeout:1000*30,//开发环境超时时间为30s
    lang: '',
    ws: '',
    imageServer:'http://47.91.153.112/imgSource',
    // otcImageServer:'http://47.91.153.112/imgCoinPaySource',
    coinPayHost:'http://10.45.0.222/tp5.1/coinpay/public',
    // // coinPayHost:'http://10.45.0.182:8027',
    webSocket: 'ws://10.45.0.21:8008',
    // webSocket: 'ws://10.45.0.137:8008',
    host: 'http://10.45.0.20:8765/pie/api',
    extion: 'http://10.45.0.20:8765/pie/extion',
    sale: 'http://10.45.0.20:8765/pie/sale',
    offerHost:'http://10.45.0.222/tp5.1/exnet/public',//抽奖相关接口
    // // apiHost:'http://10.45.0.164:8081/api/v1',//本地抓取内容接口
    // // apiHost:'http://localhost:8081/api/v1',//本地抓取内容接口

    // imageServer:'https://mapi.exnet.io/imgSource',
    // otcImageServer:'https://mapi.exnet.io/imgCoinPaySource',
    // coinPayHost:'https://api.coinpay.do',//coinpay api host
    // webSocket: 'wss://stream2.exnet.io',//websocket地址
    // host: 'https://api.exnet.io/pie/api',//后端接口地址
    // extion: 'https://api.exnet.io/pie/extion',//推广链接host
    // sale: 'https://api.exnet.io/pie/sale',
    apiHost:'https://nodeapi.exnet.io/api/v1',//本地抓取内容接口
    // offerHost:'https://activity.exnet.io',//认购相关地址
    debug: false
}
