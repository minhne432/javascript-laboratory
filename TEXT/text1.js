// The following function returns a function:
function returnFunction() {
    return function() {
      return "This is a function that was returned from another function.";
    };
  }
  const a = returnFunction();
  console.log(a());
  console.log(returnFunction()());