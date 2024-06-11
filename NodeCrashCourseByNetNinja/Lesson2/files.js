const { error } = require("console");
const fs = require("fs");

//reading files

//writing files
// fs.writeFile("./docs/blog2.txt", "Lakhwinder, God will find you a beautiful girl soon", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("First write completed");

//     fs.appendFile("./docs/blog2.txt", " But have some patience", (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log("Second write completed");
//     });
// });

// fs.readFile("./docs/blog2.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir("./assets", err => {
        console.log(err)
    })
}else{
    fs.rmdir('./assets', err => {
        console.log(err)
    })
}

//deleting files
if(fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt', err => {
        if(err){
            console.log(err);
        }console.log('file deleted')
    })
}
