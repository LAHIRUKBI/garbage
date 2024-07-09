import express from 'express';
import { deleteUser, test, updateUser, getUserListings } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();


router.get('/test', test);                                  //Defines a GET route at the path /test that calls the test function when accessed.
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)  
router.get('/listings/:id', verifyToken, getUserListings)  

export default router;