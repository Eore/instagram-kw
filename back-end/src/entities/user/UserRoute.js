const router = require('express').Router();
const user = require('./UserController');

router.route('/')
    .get((req, res) => {
        user.listUser().then(hasil => res.json(hasil))
    })

    .post((req, res) => {
        user.addUser({
            email: req.body.email,
            passwordUser: req.body.passwordUser,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        })
        res.json({ status: 'insert user sukses' })
    })

router.route('/:idUser')
    .put((req, res) => {
        user.editUser(req.params.idUser, {
            email: req.body.email,
            passwordUser: req.body.passwordUser,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        })
        res.json({ status: 'update user sukses'})
    })

    .delete((req, res) => {
        user.deleteUser(req.params.idUser )
        res.json({ status: 'delete user sukses'})
    })

module.exports = router;