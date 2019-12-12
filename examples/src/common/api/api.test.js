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
      	apikey:'A9888F50C737359BB8A1F6BDC5ED2FE0',
    },
    routerMode:'history',
    google: {
		ga: ['UA-144546282-1'],
		geo: 'JPVkrM4O_L9s6GHr7PL-8--GCs-u0nkzsBBDwajTn9U'
    },
    lang: '',
    axioTimeout:1000*10,//超时时间为10s
    ws: '',
    //测试环境配置
    // coinPayHost:'http://10.45.0.91:8027',
    // webSocket: 'ws://10.45.0.21:8008/api/v1/pie',
    // host: 'http://10.45.0.20:8765/pie/api',
    // apiHost:'http://10.45.0.164:8081/api/v1',//本地抓取内容接口
    // sale: 'http://10.45.0.20:8765/pie/sale',
    // extion: 'http://10.45.0.20:8765/pie/extion',

	//线上配置
	imageServer:'https://imgs.exnet.io/exnetImgs',
	// otcImageServer:'https://api.coinpay.do',
	coinPayHost:'http://10.45.0.222/tp5.1/coinpay/public',
	webSocket: 'wss://stream.exnet.io',//websocket地址
	host: 'https://api.exnet.io/pie/api',//后端接口地址
	extion: 'https://api.exnet.io/pie/extion',//推广链接host
	sale: 'https://api.exnet.io/pie/sale',
	apiHost:'https://nodeapi.exnet.io/api/v1',//本地抓取内容接口
    offerHost:'https://api.exnet.io/webYBApi',//认购相关地址
    debug: false
}
  