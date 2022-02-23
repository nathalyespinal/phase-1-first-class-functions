function receivesAFunction(callback){
    return callback ();
}

receivesAFunction(function () {return "Hello Everybody"});

function returnsANamedFunction(param1){
    return function cb(param2) {
        return "I'm a cb function"
    }
}


function returnsAnAnonymousFunction(param1){
    return  function() {
        return "I'm an anonymous cb function"
    }
}




