import express from 'express';
import { addResult, getResults  } from '../controllers/resultController.js'
import { getAllConstituency, addConstituency, getConstituencyById } from '../controllers/constituencyController.js';
import { getAllStates, addState } from '../controllers/stateController.js';
import { addParty, getAllParties } from '../controllers/partyController.js';
import { addWard, getAllWards } from '../controllers/wardController.js';
import { addCandidate, getCandidates } from '../controllers/candidateController.js';
import { addPollingUnit, getPollingUnits } from '../controllers/pollingUnitController.js';
import { addLocalGovernmentArea, getLocalGovernments, getLocalGovernmentsByStateId } from '../controllers/localGovernmentController.js';
import { addSenatorialDistrict, getSenatorialDistricts, getSenatorialDistrictById } from '../controllers/senatorialDistrictController.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

// result
router.post("/add-result", verifyToken, addResult)
router.get("/results", verifyToken, getResults)


// canditate
router.post("/add-candidate", verifyToken, addCandidate)
router.get("/get-candidates", verifyToken, getCandidates)

// constituency
router.post("/add-constituency", verifyToken, addConstituency)
router.get("/get-constituency", verifyToken, getAllConstituency)
router.get("/get-constituency/:id", verifyToken,getConstituencyById)

//ward
router.post("/add-ward", verifyToken, addWard)
router.get("/get-wards", verifyToken, getAllWards)

// lga
router.post("/add-local-government", verifyToken, addLocalGovernmentArea)
router.get("/get-local-government", verifyToken, getLocalGovernments)

//state
router.post("/add-state", verifyToken, addState)
router.get("/get-states", verifyToken, getAllStates)

//party
router.post("/add-party", verifyToken, addParty)
router.get("/get-parties", verifyToken, getAllParties)

// polling unit
router.post("/add-polling-unit", verifyToken, addPollingUnit)
router.get("/get-candidates", verifyToken, getPollingUnits)

// map local goverment to state
router.get("/lgas/:stateid", verifyToken, getLocalGovernmentsByStateId);

// senatorial district
router.post("/add-senatorial-district", verifyToken, addSenatorialDistrict);
router.get("/senatorial-districts", verifyToken, getSenatorialDistricts);
router.get("/senatorial-district/:id", verifyToken, getSenatorialDistrictById);

export default router;