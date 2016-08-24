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
            db: '',
            user: '',
            password: '',
            host: 'localhost',
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        },
        production: {
            db: '',
            user: '',
            password: '',
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
            works_core: {
                host: "127.0.0.1",
                port: 8983,
                core: "works"
            },
            designer_core: {
                host: '127.0.0.1',
                port: 8983,
                core: "designer"
            },
            article_core:{
                host: '127.0.0.1',
                port: 8983,
                core: "article"
            }
        },
        development: {
            works_core: {
                host: "127.0.0.1",
                port: 8983,
                core: "works"
            },
            designer_core: {
                host: '127.0.0.1',
                port: 8983,
                core: "designer"
            },
            article_core:{
                host: '127.0.0.1',
                port: 8983,
                core: "article"
            }
        },
        production: {
            works_core: {
                host: "127.0.0.1",
                port: 8983,
                core: "works"
            },
            designer_core: {
                host: '127.0.0.1',
                port: 8983,
                core: "designer"
            },
            article_core:{
                host: '127.0.0.1',
                port: 8983,
                core: "article"
            }
        }
    },
    auth: {
        auth_token_secret: "",//加密session的字符串
        auth_token_name: ""//前端cookie名称(保存登录信息)
    },
    des_3: {//des加密配置
        algorithm: "",
        key: "",
        iv: null,
        autoPad: true
    },
    admin_account: [//简易的后台系统登录权限(固定账户密码)
        {
            user: 'admin',
            pwd: 'A66ABB5684C45962D887564F08346E8D'   //admin123456
        }
    ]
};


