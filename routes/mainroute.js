import express from 'express';
import { addResult, getResults  } from '../controllers/resultController.js'
import { getAllConstituency, addConstituency } from '../controllers/constituencyController.js';
import { getAllStates, addState } from '../controllers/stateController.js';
import { addParty, getAllParties } from '../controllers/partyController.js';
import { addWard, getAllWards } from '../controllers/wardController.js';
import { addCandidate, getCandidates } from '../controllers/candidateController.js';
import { addPollingUnit, getPollingUnits } from '../controllers/pollingUnit.js';
import { addLocalGovernmentArea, getLocalGovernments } from '../controllers/localGovernmentController.js';
const router = express.Router();

// result
router.post("/add-result", addResult)
router.get("/get-result", getResults)


// canditate
router.post("/add-candidate", addCandidate)
router.get("/get-candidates", getCandidates)

// constituency
router.post("/add-constituency", addConstituency)
router.get("/get-constituency", getAllConstituency)


//ward
router.post("/add-ward", addWard)
router.get("/get-wards", getAllWards)

// lga
router.post("/add-local-government", addLocalGovernmentArea)
router.get("/get-local-government", getLocalGovernments)

//state
router.post("/add-state", addState)
router.get("/get-states", getAllStates)

//party
router.post("/add-party", addParty)
router.get("/get-parties", getAllParties)

// polling unit
router.post("/add-polling-unit", addPollingUnit)
router.get("/get-candidates", getPollingUnits)

export default router;