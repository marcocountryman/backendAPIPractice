import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [

]

// all routes are already starting with /users!!!!!
router.get('/', (req,res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId };
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the Database`);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);
    res.send(user);
})

router.delete('/:id', (req,res) => {
    const id = req.params.id;

    const newUsers = users.filter(user => user.id !== id);
    res.send(newUsers);
})
export default router;