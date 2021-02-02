// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()

    switch (event.action) {
        case 'getUrlScheme': {
            return getUrlScheme(event.param)
        }
    }

    return 'action not found'
}

async function getUrlScheme(param) {
    let url = "/pages/home/home";
    let query = "";
    if (param.url) {
        url = param.url;
    }
    if (param.page && param.id) {
        query = `id=${param.id}&page=${param.page}`
    } else if (param.page) {
        query = `page=${param.page}`
    }
    return cloud.openapi.urlscheme.generate({
        jumpWxa: {
            path: url, // <!-- replace -->
            query: query,
        },
        // 如果想不过期则置为 false，并可以存到数据库
        isExpire: false,
        // 一分钟有效期
        expireTime: parseInt(Date.now() / 1000 + 60),
    })
}
