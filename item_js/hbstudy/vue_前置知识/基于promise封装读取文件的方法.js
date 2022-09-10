import fs from 'fs';

function getFile(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, datastr) => {
            if (err) return reject(err);
            resolve(datastr)
        })
    })

}

getFile('./1.txt').then((r1) => { console.log(r1) })
    .catch((err) => console.log(err.message))