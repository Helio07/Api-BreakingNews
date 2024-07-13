import { createService, findAllService } from '../services/news.service.js'
import { ObjectId } from 'mongoose'


const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body

        if(!title || !text || !banner) {
            res.status(400).send({ message: "preencha todos os campos" })
        }
        await createService({
            title,
            text,
            banner,
            user: { _id: "668432664fd211aa47978cf3"}
        })

        res.status(201).send(201)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => {
    try {
        const news = await findAllService();
        if (news.length === 0) {
            return res.status(400).send({ message: "Não há noticias cadastrados" })
        }

        res.send(news)
    } catch (err) { res.status(500).send({ message: err.message }) }

}

export { create, findAll } 