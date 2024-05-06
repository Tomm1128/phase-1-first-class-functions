
function receivesAFunction(callbackFunction){
    return callbackFunction();
}

function returnsANamedFunction(){
    return function namedFunction(){
        return 1;
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        return 0;
    }
}
