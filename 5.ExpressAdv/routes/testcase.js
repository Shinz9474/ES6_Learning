const dbDebugger = require('debug')('app:db')
const config = require('config')
const morgan = require('morgan')
const logger = require('../middleware/logger')
const express = require('express')
const Joi = require('joi')
const router = express.Router();//In index.js we called express as a function and got an app object. 
//This approach doesnot work when we have the routes in seperate module. Hence we call Router() in express that return router object


const testcase = [
    {id:1, tcname:'CC_Smoke', tcstatus:'Active'},
    {id:2, tcname:'BT_Smoke', tcstatus:'Active'},
    {id:3, tcname:'COD_Smoke', tcstatus:'Active'},
    {id:4, tcname:'PPC_Smoke', tcstatus:'Active'}
]

//-----------TESTCASE ROUTES-------------//
//Get all test case route
router.get('/', (req, res) => {
    res.send(testcase)
});

//Get specific test case route
router.get('/:id', (req, res) => {
    let tc = testcase.find(tc=>tc.id === parseInt(req.params.id))
    if(!tc) return res.status(404).send('Not found');
    
    else if(tc) {
        res.status(200);
        res.send(tc)
        return;
    }
});

//Create new test case route
router.post('/', (req, res) => { 
    const error = tcschemavalidator(req)
    let length = testcase.length+1;
    let tc = {
        id: length, 
        tcname: req.body.tcname, 
        tcstatus: req.body.tcstatus
    };
    //---Validation with JOI---
    if(!error){
        res.status(200);
        testcase.push(tc);
        res.send(tc);
        return;
    }
    else{
        res.status(400).send(`Something is missing with your request`)
        return;
    }
});

//Update specific test case route
router.put('/:id', (req, res)=> {
    //Look up for the tc, If not existing 404
    let tc = testcase.find(tc=>tc.id === parseInt(req.params.id))
    if(!tc){
        res.status(404).send(`Test case ${req.param.id} missing`)
    }
    //If invalid 400
    const error = tcschemavalidator(req)
    if(error)return res.status(400).send(`Bad request ${joivalidate.error.details[0].message}`)

    //If valid return 200 and the test cases
    else{
        tc.tcname = req.body.tcname;
        tc.tcstatus = req.body.tcstatus;
        res.status(200).send(tc)
        return;
    }
});

//Delete specific test case route
router.delete('/:id', (req, res)=>{
    let tc = testcase.find(tc => tc.id === parseInt(req.params.id));
    if(!tc) return res.status(404).send(`${req.params.id} is not a valid resource`)
    else{
        const index = testcase.indexOf(tc)
        testcase.splice(index, 1)
        res.status(200).send(`Deleted \n ${tc.tcname}`)
        return
    }
});

module.exports = router;