import bdTips from '../Infra/bd.js'
import Tips from '../Models/tips.js'

const create = (app) => {
    app.post('/create', (req, res) => {
        const data = new Tips(req.body.text)
        bdTips.push(data)
        res.send('Dica armazenada no banco de dados com sucesso!')
    })
}

export default create