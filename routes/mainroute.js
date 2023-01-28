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
// import { mapLocalGovernmentId } from '../controllers/stateController.js';
const router = express.Router();

// result
router.post("/add-result", addResult)
router.get("/results", getResults)


// canditate
router.post("/add-candidate", addCandidate)
router.get("/get-candidates", getCandidates)

// constituency
router.post("/add-constituency", addConstituency)
router.get("/get-constituency", getAllConstituency)
router.get("/get-constituency/:id", getConstituencyById)

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

// map local goverment to state
router.get("/lgas/:stateid", getLocalGovernmentsByStateId);

// senatorial district
router.post("/add-senatorial-district", addSenatorialDistrict);
router.get("/senatorial-districts", getSenatorialDistricts);
router.get("/senatorial-district/:id", getSenatorialDistrictById);

export default router;