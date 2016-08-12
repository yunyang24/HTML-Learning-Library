module.exports = {
    database: {
        local: {
            db: 'devpozoarts',
            user: 'root',
            password: 'admin666',
            host: 'localhost',
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        },
        development: {
            db: 'devpozoarts',
            user: 'root',
            password: 'admin666',
            host: 'localhost',
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        },
        production: {
            db: 'pozoarts',
            user: 'feiyang',
            password: 'BJnj!@#2016',
            host: '',
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        }
    },
    redis: {
        local: {
            port: 6379,
            host: '127.0.0.1'
        },
        development: {
            port: 6379,
            host: '127.0.0.1'
        },
        production: {
            port: 6379,
            host: '127.0.0.1'
        }
    },
    solr: {
        local: {
            job_core: {
                host: '115.159.72.42',
                port: 8983,
                core: "internbird"
            },
            resume_core: {
                host: '115.159.72.42',
                port: 8983,
                core: "talentPool"
            },
            company_core:{
                host: '115.159.72.42',
                port: 8983,
                core: "company"
            }
        },
        development: {
            job_core: {
                host: "127.0.0.1",
                port: 8983,
                core: "internbird"
            },
            resume_core: {
                host: '127.0.0.1',
                port: 8983,
                core: "talentPool"
            },
            company_core:{
                host: '127.0.0.1',
                port: 8983,
                core: "company"
            }
        },
        production: {
            job_core: {
                host: "127.0.0.1",
                port: 8983,
                core: "internbird"
            },
            resume_core: {
                host: '127.0.0.1',
                port: 8983,
                core: "talentPool"
            },
            company_core:{
                host: '127.0.0.1',
                port: 8983,
                core: "company"
            }
        }
    },
    wechat: {
        mp: [
            {//实习鸟微信公众账号(订阅号)
                AppID: "wxb2182e3727f1cacc",
                AppSecret: "9a2c8b9ff388553d3885523827e021de"
            }
        ],
        client: [
            {
                AppID: "wx889314279b7ab2bb",
                AppSecret: "e40354221cdc5b4a6fd1e9cbee35870b"
            }
        ],
        web: [
            {
                AppID: "wxc2b11caf7d004589",
                AppSecret: "64493bc1bc9c251c634eed522e0373e8"
            }
        ]
    },
    auth: {
        auth_token_secret: "internbird",//加密session的字符串
        auth_token_name: "_internbird"//前端cookie名称(保存登录信息)
    },
    admin_account: [//简易的后台系统登录权限(固定账户密码)
        {
            user: 'admin',
            pwd: '2464b94ceb49c2115c4238f51be98d8b'
        }
    ],
    mail: {//邮箱配置
        host: "smtpdm.aliyun.com",
        port: 25,
        user: 'noreply@mail.internbird.com',
        pass: 'internbird123454321'
    },
    des_3: {//des加密配置
        algorithm: "des-ede3",
        key: "QWERTY#$%ZXCa!!!florence",
        iv: null,
        autoPad: true
    },
    yunpian: {//yunpian短信平台key
        apiKey: "8caba82f126a303c4433cabbc3cd0aad",
        apiSecret: "51fb4766"
    },
    fileUpload: {//qiniu文件存储的key-secret
        ACCESS_KEY: 'cRTmicw7kKnkIzV5HzxevcoyAMdb6NbzZlN4Htgb',
        SECRET_KEY: '1G7afdA5bXLTNvUR4XWrPP6lrirb4OdviT9JaD72'
    },
    client_app_key_secret: {
        "c9cf00f37cf4c72d": "cb59828044605fb27f6021f7f078c115",//安卓
        "876afac49275605a": "569c34b0b4e63d9fd9e42480367c9af6"//ios
    },
    getui_push: {//个推平台
        local: {//开发证书账户
            appId: "z2NyZbKTy0Acfqpqy0h4n4",
            appSecret: "0HuRT5uE7x7ehMkzufGvdA",
            appKey: "MbS53h6Ktr5TRSlmdhOmv9",
            masterSecret: "ImmVRWvBdxAgUzFQg7MoR7"
        },
        development: {
            appId: "z2NyZbKTy0Acfqpqy0h4n4",
            appSecret: "0HuRT5uE7x7ehMkzufGvdA",
            appKey: "MbS53h6Ktr5TRSlmdhOmv9",
            masterSecret: "ImmVRWvBdxAgUzFQg7MoR7"
        },
        prod: {
            appId: "woqT7eLnU3A78FRoLVj5B2",
            appSecret: "9egvFTpmvQ7jPmxd7Y8Wa2",
            appKey: "eoRdZspI5A7op6Ul7A39T7",
            masterSecret: "y884WMLPnw7sd9FpgcYOs6"
        }
    }
};


