var fs = require('fs');
var {Cenario} = require('../model/Cenario')
var cenario = new Cenario()

exports.CenariosRepository = class{
   
    cenarioGitHub(){
        cenario.GitHubRepositoriesResponse = githubReposGoogle()
        cenario.GitHubUserModel = githubUserGoogle()
        cenario.GitHubPullRequestModel = githubPulls()
        return cenario;
    }   

}

function readJson(file){
    try {
        var data = fs.readFileSync(file, 'ascii');
        //console.log(data.toString());
        return JSON.parse(data);
    }
    catch (err) {
        console.error("There was an error opening the file:");
        console.log(err);
    }
}

function githubPulls(){
    return readJson("./fixtures/github/pulls.json");
}

function githubUserGoogle(){
    return readJson("./fixtures/github/user_google.json");
}

function githubReposGoogle(){
    return readJson("./fixtures/github/repos_google.json");
}
