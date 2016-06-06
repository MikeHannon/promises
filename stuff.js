"use strict"
let myPromise = new Promise(
  function(resolve,reject){
    let myNumber = 7;
    if (myNumber == 7){
      resolve();
    }
    else {
      reject();
    }
  }
)

myPromise
.then(function(){console.log("it's a seven");})
.catch(function(){console.log('its not a seven');});

let anotherPromise = new Promise(
  function(resolve,reject){
    let x = setTimeout(function(){
      resolve();
    }, 4500);
    // reject();
  }
)

anotherPromise
.then(function(){
  console.log("I've resolved");
})
// if catch fires before, then the promise stops
// .catch(function(){
//   console.log("not resolved yet");
// })
function goForth(a,b){
  let myValue = 9;
  if (myValue == 9){
    a();
  }
  else{
    b();
  }
}

let aThirdPromise = new Promise(
  goForth
)

aThirdPromise
.then(function(){
  console.log("niner!");
})
.catch(function(){
  console.log("miner");
})

let myPromises = Promise.all([aThirdPromise, anotherPromise]);
myPromises
.then(
  function(){
    console.log(" I think we've all resolved!"
  );
  }
).
catch(
  function(){console.log("failure");}
)

function myDataBaseResult(a,b){
  let x = setTimeout(
    function(){
      a("a bunch of information");
    }, 3200
  );
  let y = setTimeout(
    function(){
      b("failure");
    },
    2500
  )
  // b("failure");
}

let lastPromiseForToday = new Promise(
  myDataBaseResult
)

lastPromiseForToday.then(
  function(data){
    console.log(data);
  }
)
.catch(
  function(data){
    console.log(data);
  }
)
