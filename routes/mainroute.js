import express from 'express';
<<<<<<< HEAD
import { addResult  } from '../controllers/resultController.js'
import { getAllConstituency } from '../controllers/constituencyController.js';
import { addConstituency } from '../controllers/constituencyController.js';
import { getAllStates } from '../controllers/stateController.js';
import { addState } from '../controllers/stateController.js';
import { getAllParties } from '../controllers/partyController.js';
import { addParty } from '../controllers/partyController.js';
import { addWard } from '../controllers/wardController.js';
import { getAllWards } from '../controllers/wardController.js';
=======
import { addResult  } from '../controllers/resultController.js';
import { addCandidate, getCandidates } from '../controllers/candidateController.js';
import { addPollingUnit, getPollingUnits } from '../controllers/pollingUnit.js';
import { addLocalGovernmentArea, getLocalGovernments } from '../controllers/localGovernmentController.js';
>>>>>>> b337ff2d4309d2a4039d8039f0e984e6fd2e206b
const router = express.Router();

// result
router.post("/add-result", addResult)


// canditate
<<<<<<< HEAD
=======
router.post("/add-candidate", addCandidate)
router.get("/get-candidates", getCandidates)
>>>>>>> b337ff2d4309d2a4039d8039f0e984e6fd2e206b

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