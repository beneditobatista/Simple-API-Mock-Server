var express = require('express');
var router = express.Router();
var cenarios = require('../../cenarios/Cenarios.js')
var {Cenario} = require('../../model/Cenario')
var cenario = new Cenario()

function log(strReq, req) { 
    console.log("----------------------------------");
    console.log("req: " + strReq);
    console.log("Body");
    console.log(req.body);
    console.log("Params");
    console.log(req.params);
    console.log("Query");
    console.log(req.query);
 } 

cenario = cenarios.montacenario(process.argv[2])     

router.get('/search/repositories', (req, res) => {
    log("/search/repositories",req)    
    return res.send(cenario.GitHubRepositoriesResponse);
}); 

router.get('/users/google', (req, res) => {
    log("/users/google",req)    
    return res.send(cenario.GitHubUserModel);
}); 

router.get('/repos/google/guava/pulls', (req, res) => {
    log("/repos/google/guava/pulls",req)    
    return res.send(cenario.GitHubPullRequestModel);
}); 

module.exports = router;