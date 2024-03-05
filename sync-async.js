
function thirdFunc() {
    console.log("Greetings from thirdFunc()");
  }
  
  function secondFunc() {
    thirdFunc();
    console.log("Greetings from secondFunc()");
  }
  
  function firstFunc() {
    secondFunc();
    console.log("Greetings from firstFunc()");
  }
  
  firstFunc();