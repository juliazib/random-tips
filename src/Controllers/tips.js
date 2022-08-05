import bdTips from '../Infra/bd.js'

const tips = (app) => {
    app.get('/tips', (req, res) => {
        let item = bdTips[Math.floor(Math.random()*bdTips.length)]
        res.send(item)
    })
}

export default tips