const query = require('../../services/dbOperation')('user');
const crypto = require('crypto');

let encrypt = (password) => crypto.createHash('sha256').update(JSON.stringify({ password, key: 'p4NduN4kal' })).digest('hex')

module.exports = {
    addUser: (data = { username, email, password }) => {
        query.insert({ password: encrypt(data.password), ...data})
    },
    editUser: (iduser, data = { username, email, password }) => {
        query.update(data, { iduser })
    },
    listUser: () => {
        return query.read()
    },
    deleteUser: (iduser) => {
        query.delete({ iduser })
    },
    loginUser: (username, password) => {
        query.readWhere({ username }).then(hasil => {
            if (hasil.length > 0) {
                if (hasil[0].password === encrypt(password))
                    return true
                else
                    return false
            } else {
                return false
            }
        })
    }
}