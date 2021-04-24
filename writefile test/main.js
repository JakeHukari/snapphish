const fs = require('fs');
  
let data = "This is a file containing a collection of movies.";
  
fs.writeFile("data.txt", data,
  {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
  },
  (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("movies.txt", "utf8"));
    }
});