import express from 'express';
import { addResult  } from '../controllers/resultController.js'
import { getAllConstituency } from '../controllers/constituencyController.js';
import { addConstituency } from '../controllers/constituencyController.js';
import { getAllStates } from '../controllers/stateController.js';
import { addState } from '../controllers/stateController.js';
import { getAllParties } from '../controllers/partyController.js';
import { addParty } from '../controllers/partyController.js';
import { addWard } from '../controllers/wardController.js';
import { getAllWards } from '../controllers/wardController.js';
const router = express.Router();

// result
router.post("/add-result", addResult)


// canditate

// constituency
router.post("/add-constituency", addConstituency)
router.get("/get-constituency", getAllConstituency)


//ward
router.post("/add-ward", addWard)
router.get("/get-wards", getAllWards)

// lga

//state
router.post("/add-state", addState)
router.get("/get-states", getAllStates)

//party
router.post("/add-party", addParty)
router.get("/get-parties", getAllParties)

// polling unit


export default router;