const query = require('../../services/dbOperation')('user');
const crypto = require('crypto');

let encrypt = (password) => crypto.createHash('sha256').update(JSON.stringify({ password, key: 'p4NduN4kal' })).digest('hex')

module.exports = {
    addUser: (data = { email, passwordUser, name, phoneNumber, address }) => {
        query.insert({ passwordUser: encrypt(data.passwordUser), ...data})
    },
    editUser: (idUser, data = { email, passwordUser, name, phoneNumber, address }) => {
        query.update(data, { idUser })
    },
    listUser: () => {
        return query.read()
    },
    deleteUser: (idUser) => {
        query.delete({ idUser })
    },
    loginUser: (email, passwordUser) => {
        query.readWhere({ email }).then(hasil => {
            if (hasil.length > 0) {
                if (hasil[0].passwordUser === encrypt(passwordUser))
                    return true
                else
                    return false
            } else {
                return false
            }
        })
    }
}