const connection = require('./dbConnection');

module.exports = (table) => {
    return {
        insert: (data) =>
            new Promise((res, rej) => {
                connection.query(`INSERT INTO ${table} SET ?`, data, err => !err ? res(true) : rej(err))
            }),
        read: () =>
            new Promise((res, rej) => {
                connection.query(`SELECT * FROM ${table}`, (err, rows) => !err ? res(rows) : rej(err))
            }),
        readWhere: (where) =>
            new Promise((res, rej) => {
                connection.query(`SELECT * FROM ${table} where ?`, where, (err, rows) => !err ? res(rows) : rej(err))
            }),
        update: (data, id) =>
            new Promise((res, rej) => {
                connection.query(`UPDATE ${table} SET ? WHERE ?`, [data, id], err => err ? !res(true) : rej(err))
            }),
        delete: (id) =>
            new Promise((res, rej) => {
                connection.query(`DELETE FROM ${table} WHERE ?`, id, err => !err ? res(true) : rej(err))
            }),
    }
}