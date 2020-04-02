const User = require('../models/User')
const Hash = require('../utils/Hash')

module.exports = {
    async create(req, res) {
        const {email, password} = req.body

        if (! email || ! password) {
            return res.status(400).json({
                status: false,
                message: "Required Fields Missing"
            })
        }

        const passwordHash = await Hash.encrypt(password)

        try {
            const user = await User.create({
                email,
                password: passwordHash
            })
    
            return res.json({
                status: true,
                user
            })
        } catch (e) {
            return res.status(500).json({
                status: false,
                error: e
            })
        }
    }
}