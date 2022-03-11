import express from 'express';

const router = express.Router();


// all routes are already starting with /users!!!!!
router.get('/users', (req,res) => {
    res.send('User Route')
})
export default router;