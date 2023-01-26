import express from 'express';
import { addResult  } from '../controllers/resultController.js'
const router = express.Router();

// result
router.post("/add-result", addResult)


// canditate


// constituency


//ward


// lga


//party


// polling unit


export default router;