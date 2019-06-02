//-----------COURSE ROUTES-------------//
//Get Home
app.get('/',(req, res)=>{
    res.send('Home');
});

//Get all course route
app.get('/api/course', (req, res) => {
    res.send(testcase)
});

//Get specific course route
app.get('/api/course/:name/:age/:sex', (req, res) => {
    req.params.id
    res.send(req.params)
});
