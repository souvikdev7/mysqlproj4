


const dns = require('dns');

//let uri = "nodejs.org";
let uri = "mongodb.com";

/*
dns.lookup(uri, (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
*/





//===================================================================================//







const { mkdir,appendFileSync,stat,appendFile,readFile,unlink,
    copyFile,readdir,chmod,exists,rename
} = require('fs');

let dirPath = '/myProjects/mysqlproj4/folderNo1';
/*
mkdir(dirPath, { recursive: true }, (err) => {
  if (err) throw err;
});
*/

let filePath = '/myProjects/mysqlproj4/folderNo1/a1.txt';

/*
stat(filePath, (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});
*/

/*
readFile(filePath,'utf-8',(err,data)=> {
    if (err) throw err;
    console.log(data);
});
*/

//let str = '78Hello , data to append888';
//appendFile(filePath, ' '+str,'utf8');
//appendFileSync(filePath, ' '+str, 'utf8');

/*
unlink('/myProjects/mysqlproj4/folderNo1/pp.js',(err) => {
    if (err) throw err;
    console.log('successfully deleted file');
});
*/

/*
copyFile('/myProjects/mysqlproj4/folderNo1/a1.txt', '/myProjects/mysqlproj4/folderNo1/m1.txt',(err) => {
    if (err) throw err;
    console.log('successful');
});
*/


/*
readdir('/myProjects/mysqlproj4/folderNo1',(err,dir) => {
    if (err) throw err;  
    for (const dirent of dir)
        console.log(dirent);      

});
*/

/*
chmod('/myProjects/mysqlproj4/folderNo1/a1.txt', 0o775, (err) => {
    if (err) throw err;
        console.log('The permissions for file "my_file.txt" have been changed!');
  });

*/

/*
exists('/myProjects/mysqlproj4/folderNo1/h6.txt', (e) => {
    console.log(e ? 'it exists' : 'not found!');
});
*/

/*
rename('/myProjects/mysqlproj4/folderNo1/m1.txt', '/myProjects/mysqlproj4/folderNo1/h6.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});*/

//https://nodejs.org/api/fs.html


