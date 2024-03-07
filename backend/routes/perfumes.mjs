import express from 'express'
import { getAllPerfumes } from "../controllers/perfumes.mjs";
const router = express.Router()

router.get('/dama', getAllPerfumes)

export default router