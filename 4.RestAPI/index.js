const Joi = require('joi')
const express = require('express')
const app = express();

app.use(express.json());
const testcase = [
    {id:1, tcname:'CC_Smoke', tcstatus:'Active'},
    {id:2, tcname:'BT_Smoke', tcstatus:'Active'},
    {id:3, tcname:'COD_Smoke', tcstatus:'Active'},
    {id:4, tcname:'PPC_Smoke', tcstatus:'Active'}
]

//-----------TESTCASE ROUTES-------------//

//Get all test case route
app.get('/api/testcase/', (req, res) => {
    res.send(testcase)
});

//Get specific test case route
app.get('/api/testcase/:id', (req, res) => {
    let tc = testcase.find(tc=>tc.id === parseInt(req.params.id))
    console.log(typeof(tc));
    if(!tc) return res.status(404).send('Not found');
    
    else if(tc) {
        res.status(200);
        res.send(tc)
        return;
    }
});

//Create new test case route
app.post('/api/testcase', (req, res) => { 
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
        res.send(tc);
        return;
    }
    else{
        res.status(400).send(`Something is missing with your request`)
        return;
    }
    //---Validation without JOI---

    // if(!req.body.tcname || !req.body.tcstatus)
    // {
    //     res.status(400)
    //     res.send(`invalid json body ${req.body}`)
    //     return;
    // };
    // testcase.push(tc);
    // if(testcase.filter(tc=>{return tc.id === length})){
    //     res.status(200);
    //     res.send(tc);
    //     return;
    // }  
});

//Update specific test case route
app.put('/api/testcase/:id', (req, res)=> {
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
app.delete('/api/testcase/:id', (req, res)=>{
    let tc = testcase.find(tc => tc.id === parseInt(req.params.id));
    if(!tc) return res.status(404).send(`${req.params.id} is not a valid resource`)
    else{
        const index = testcase.indexOf(tc)
        testcase.splice(index, 1)
        res.status(200).send(`Deleted \n ${tc.tcname}`)
        return
    }
});

console.log(process.env.PORT);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`))

//-------------JOI SCHEMA VALIDATOR-------------//
function tcschemavalidator(req){
    const schema = Joi.object({
        tcname: Joi.string().min(3).required(),
        tcstatus: Joi.string().not(null).required()
    });
    //const joivalidate = Joi.validate(req.body, schema)
    const { error } = Joi.validate(req.body, schema)
    return error 
}