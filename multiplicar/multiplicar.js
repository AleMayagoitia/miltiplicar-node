const fs = require('fs');
const colors = require('colors');

let data = "";

let listarTabla = (base, limite = 10) => {

    console.log("********************************************".magenta);
    console.log(`****tabla del ${base} hasta el ${limite}****`.red);
    console.log("********************************************".magenta);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("No es un numero");
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}