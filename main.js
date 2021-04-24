import { writeFile } from 'fs'; 

function logIn() {  
let data = "Hello world 2."
   
    writeFile('data.txt', data, (error) => { 
       
    if (error) throw err; 
}) 
}