
const express = require('express')
const router = express.Router()
const { Course, Lesson } = require('../models/index')

router.get('/', async (req, res, next) => {
    try {
        const data = await Course.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                { model: Lesson, as: 'Lessons', through: { attributes: [] }},
            ]
        })
        if(data === null) {
            next({
                name: '404 Not Found',
                error: 'User not found'
            })
        } else {
            res.status(200).json(data)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router