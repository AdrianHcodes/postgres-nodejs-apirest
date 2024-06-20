import {Router} from 'express';
import {pool} from '../db.js';
import { actualizarUser, createUSer, deleteUser, getUser, getUsers } from '../controllers/users.controllers.js';

const router = Router();

router.get("/users",getUsers)

router.get("/users/:id",getUser)

router.post("/users",createUSer)

router.delete('/users/:id',deleteUser)

router.put("/users/:id",actualizarUser)

export default router;