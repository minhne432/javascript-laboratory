let promise = new Promise((resolve, reject) => {
  console.log("Executor function is running...");
  setTimeout(() => {
    resolve("Done");
  }, 2000);
});
