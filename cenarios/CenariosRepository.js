var fs = require('fs');
var {Cenario} = require('../model/Cenario')
var cenario = new Cenario()

exports.CenariosRepository = class{
   
    cenarioGitHub(){
        cenario.GitHubRepositoriesResponse = githubReposBenedito()
        cenario.GitHubUserModel = githubUserBenedito()
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

function githubUserBenedito(){
    return readJson("./fixtures/github/user_benedito.json");
}

function githubReposBenedito(){
    return readJson("./fixtures/github/repos_benedito.json");
}
