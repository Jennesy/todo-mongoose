// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Todo model
const Todo = require('../../models/todo')
// 定義首頁路由
router.get('/new', (req, res) => {
	res.render('new')
})

router.post('/', (req, res) => {
	const userId = req.user._id
	const name = req.body.name
	return Todo.create({ name, userId })
		.then(() => {
			res.redirect('/')
		})
		.catch((error) => console.log(error))
})

router.get('/:id', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Todo.findOne({ _id, userId })
		.lean()
		.then((todo) => {
			res.render('detail', { todo })
		})
		.catch((error) => console.log(error))
})

router.get('/:id/edit', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Todo.findOne({ _id, userId })
		.lean()
		.then((todo) => res.render('edit', { todo }))
		.catch((error) => console.log(error))
})

router.put('/:id', (req, res) => {
	const { name, isDone } = req.body
	const userId = req.user._id
	const _id = req.params.id
	return Todo.findOne({ _id, userId })
		.then((todo) => {
			todo.name = name || todo.name
			todo.isDone = isDone === 'on'
			todo.updatedAt = Date.now()
			return todo.save()
		})
		.then(() => {
			// from home page
			if (req.headers.referer === req.headers.origin + '/') {
				return res.redirect(`/`)
			}
			// from edit page
			return res.redirect(`/todos/${_id}`)
		})
		.catch((error) => console.log(error))
})

router.delete('/:id', (req, res) => {
	const userId = req.user._id
	const _id = req.params.id
	return Todo.findOne({ _id, userId })
		.then((todo) => todo.remove())
		.then(() => res.redirect('/'))
		.catch((error) => console.log(error))
})
// 匯出路由模組
module.exports = router
