import mongoose from 'mongoose'
import userService from '../services/user.service.js'

const create = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message: "preencha todos os campos" })
        }

        const user = await userService.createService(req.body)

        if (!user) {
            return res.status(400).send({ message: "Error creating user" })
        }

        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background,
            }
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService()

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuarios cadastrados" })
        }

        res.send(users)
    } catch (err) { res.status(500).send({ message: err.message }) }

}

const findById = async (req, res) => {
    try {
        const user = req.user

        res.send(user)
    } catch (err) { res.status(500).send({ message: err.message }) }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;

        if (!name && !username && !email && !password && !avatar && !background) {
            return res.status(400).send({ message: "submit at least one field for update" })
        }

        const { id, user } = req

        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        )

        res.send({ message: "user successfully updated" })
    } catch (err) { res.status(500).send({ message: err.message }) }
}

export default { create, findAll, findById, update } 