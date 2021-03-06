module.exports = io => {
    const express = require('express')
    const router = express.Router()
    const passport = require('../config/passport')
    const jwt = passport.authenticate('jwt', { session: false })
    const Controller = require('../controllers/socket.controller')

    router.post('/leave_room', Controller.leaveRoom(io))
    router.get('/get_all_rooms', Controller.getAllRooms(io))
    router.get('/get_room_info/:room', Controller.getRoomInfo(io))
    router.get('/get_random_room', Controller.getRandomRoom(io))
    router.get('/regen_id_token', Controller.regenIdToken(io))
    router.post('/listen_to_recent_messages', jwt, Controller.recentMessagesListener(io))
    router.post('/stop_listen_to_recent_messages', jwt, Controller.removeRecentMessagesListener(io))
    router.get('/get_recent_messages', jwt, Controller.getRecentMessages)

    return router
}