// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Todo = require('../../models/todo')
// 定義首頁路由
router.get('/', (req, res) => {
	const userId = req.user._id // 變數設定
	Todo.find({ userId })
		.lean()
		.sort({ isDone: 'asc', updatedAt: 'desc', _id: 'asc' })
		.then((todos) => {
			return res.render('index', { todos })
		})
		.catch((error) => console.log('error'))
})
// 匯出路由模組
module.exports = router
