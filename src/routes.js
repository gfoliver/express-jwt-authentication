const { Router } = require('express')
const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')

const routes = Router()


// Register user
routes.post('/users', UserController.create)

// Login and get JWT Token
routes.post('/login', AuthController.login)

// Refresh JWT Token
routes.post('/token/refresh', AuthController.verifyToken, AuthController.refreshToken);

// Route to test authentication
routes.post('/posts', AuthController.verifyToken, (req, res) => {
    const {title, content} = req.body

    return res.json({
        status: true,
        post: {
            title,
            content
        }
    })
})

module.exports = routes