const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recentMessageSchema = new Schema({
    room: { type: String },
    message: {}
}, { minimize: false, capped: {max: 10, size: 2056} })


const RecentMessage = mongoose.model('RecentMessage', recentMessageSchema)


module.exports = RecentMessage