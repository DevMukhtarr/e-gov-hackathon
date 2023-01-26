import express from 'express';
import { addResult  } from '../controllers/resultController.js';
import { addCandidate, getCandidates } from '../controllers/candidateController.js';
import { addPollingUnit, getPollingUnits } from '../controllers/pollingUnit.js';
import { addLocalGovernmentArea, getLocalGovernments } from '../controllers/localGovernmentController.js';
const router = express.Router();

// result
router.post("/add-result", addResult)


// canditate
router.post("/add-candidate", addCandidate)
router.get("/get-candidates", getCandidates)

// constituency


//ward


// lga
router.post("/add-local-government", addLocalGovernmentArea)
router.get("/get-local-government", getLocalGovernments)


//party


// polling unit
router.post("/add-polling-unit", addPollingUnit)
router.get("/get-candidates", getPollingUnits)

export default router;