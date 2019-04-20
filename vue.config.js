const mockdata = require('./src/assets/vuetable.json')
const persondata = require('./src/assets/personlist.json')
module.exports = {
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