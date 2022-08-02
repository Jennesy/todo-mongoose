const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	isDone: {
		type: Boolean,
		default: false,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		index: true,
		required: true,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
})
module.exports = mongoose.model('Todo', todoSchema)
