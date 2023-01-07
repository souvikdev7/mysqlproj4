const fs = require('fs');
let r = fs.createReadStream('/myProjects/mysqlproj4/folderNo1/a1.txt');
let w = fs.createWriteStream('/myProjects/mysqlproj4/folderNo1/mm2.txt');
r.pipe(w);
