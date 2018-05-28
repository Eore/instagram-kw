const router = require('express').Router();
const user = require('./UserController');

router.route('/')
    .get((req, res) => {
        user.listUser().then(hasil => res.json(hasil))
    })

    .post((req, res) => {
        user.addUser({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'insert user sukses' })
    })

router.route('/:idUser')
    .put((req, res) => {
        user.editUser(req.params.iduser, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'update user sukses'})
    })

    .delete((req, res) => {
        user.deleteUser(req.params.iduser )
        res.json({ status: 'delete user sukses'})
    })

module.exports = router;