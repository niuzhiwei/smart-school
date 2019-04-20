const mockdata = require('./src/assets/vuetable.json')
const persondata = require('./src/assets/personlist.json')
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index.html", // 这里用来区分加载那个 html
            // 在 dist/index.html 的输出
            filename: "index.html",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        before: (app) => {
            app.post('/api/table', function (req, res, next) {
                res.json(mockdata)
            })
            app.post('/api/person', function (req, res, next) {
                res.json(persondata)
            })
        }
    }
}