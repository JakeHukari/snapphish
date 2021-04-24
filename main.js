import { writeFile } from 'fs'; 

function logIn() {  
// Data which will need to add in a file. 
let data = "Hello world 2."
  
// Write data in 'newfile.txt' . 
    writeFile('data.txt', data, (error) => { 
      
    // In case of a error throw err exception. 
    if (error) throw err; 
}) 
}