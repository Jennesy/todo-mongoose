const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
const usePassport = require('./config/passport')
require('./config/mongoose')
const routes = require('./routes')
const flash = require('connect-flash')

const port = process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	})
)
usePassport(app)
app.use(flash())
app.use((req, res, next) => {
	res.locals.isAuthenticated = req.isAuthenticated()
	res.locals.user = req.user
	res.locals.success_msg = req.flash('success_msg') // 設定 success_msg 訊息
	res.locals.warning_msg = req.flash('warning_msg') // 設定 warning_msg 訊息
	next()
})

// set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(routes)
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
