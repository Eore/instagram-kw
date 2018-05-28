var mysql = require("mysql");
var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({ secret: 'ssshhhhh' }));
var sess;

var uniqid = require('uniqid');
const fileUpload = require('express-fileupload');
app.use(fileUpload())
app.use(express.static(__dirname + '/images'))

const crypto = require('crypto');
const secret = 'abcdefg';

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
var url = bodyParser.urlencoded({ extended: false })



var connection = mysql.createConnection
    ({
        host: "localhost",
        port: 8889,
        database: "simple_instagram",
        user: "root",
        password: "root",
    });

/* =========================================================== register =========================================================== */

app.post('/register', url, function (req, res) {
    var sql = 'SELECT * FROM user WHERE username = ?';
    connection.query(sql, [req.body.username], function (err, rows) {

        let notifRegist;

        if (rows.length > 0) {
            notifRegist = 'Username sudah terdaftar !'
        }
        else {
            // const password = crypto.createHmac('sha256', secret)
            //     .update(req.body.password)
            //     .digest('hex');

            connection.query("INSERT INTO user SET ? ",
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });
            notifRegist = 'register success';
        }
        res.json(notifRegist)
    });
})

/* =========================================================== login =========================================================== */

app.post('/login', url, function (req, res) {

    let login_status;
    let user_name;
    let user_id;
    let notifLogin;
    // const password = crypto.createHmac('sha256', secret)
    //     .update(req.body.password)
    //     .digest('hex');

    var sql = 'SELECT * FROM user WHERE username = ? and password = ?';
    connection.query(sql, [req.body.username, req.body.password], function (err, rows) {
        if (rows.length > 0) {
            sess = req.session;
            sess.iduser = rows[0].iduser;
            sess.username = rows[0].username;
            user_id = rows[0].iduser,
            user_name = req.body.username,
            login_status = true,
            notifLogin = 'login success'
        }
        else {
            login_status = false,
            user_id = null,
            user_name = null,
            notifLogin= 'Username atau Password salah !'

        }
        res.json({login_status, notifLogin, user_id, user_name})
    });
})

/* =========================================================== timeline =========================================================== */
/*  */

app.get('/timeline', function(req, res)
{
    sess = req.session;
    if(sess.idUser == null)
    {
        res.redirect('/login')
    }
    else
    {
        connection.query("SELECT * FROM timeline WHERE ?" , function(err,rows,field) {
            if(err) throw err;
            res.render('DataSeason', 
            {
                data : rows,
                userAdmin : sess.userAdmin
            });
        });
    }
})

app.get("/timeline", function(req,res)
{
    connection.query(`SELECT * FROM timeline WHERE ?`,
    {
        idUser : req.params.idUser,
    },
    function(err,rows1)
    {
        connection.query(`SELECT * FROM user WHERE ?`,
        {
            season_id : req.params.id,
        },
        function(err,rows2)
        {
            if (err) throw err;
            res.json({rows1,rows2});
        });
    })
});

app.listen(3001, () => console.log('server run'))