import express from 'express';
import { User } from '../db/entities/User.js';
import Users from '../types/user.js';

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        console.log(users)
        res.status(200).send({
            "all users": users
        })
    } catch (error) {
        console.log('error')
        res.send('something went wrong ')
    }
});



router.post('/', async (req: Users.Request, res) => {
    try {
        const { fullName, password } = req.body
        const newUser = new User()
        newUser.fullName = fullName
        newUser.password = password
        await newUser.save()
        res.status(200).send('User added successfully')
    } catch (error) {
        console.error(error)
        res.status(500).send('something went wrong ')
    }
})

export default router;

