const whitelist = ['https://www.yoursite.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];

const corsOptions = { // 2.origin callbackin solundaki asıl kim requestlediyse oluyor
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin /*|| !origin*/) { // origin kısmına full bak /**/ içindekine
      callback(null, true)                            // callback neden callback() buna bak ve 1. parametresi hata olup olmaması 
    } else {                                          // ve 2.si originin geri gönderilip gönderilmemesi durumu
      callback(new Error('not allowed by cors'))
    }
  },
  optionsSuccessStatus: 200 
}

module.exports = corsOptions;