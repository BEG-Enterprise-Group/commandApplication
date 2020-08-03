/**
 * TIPOS DE REQUIRES
 * 1- QUE YA EXISTEN EN NODE
 * 2- CUANDO SE INSTALA EL PAQUETE QUE NO ES NATIVO DE NODE
 * 3- ARCHIVOS QUE NOSOTROS CREAMOS EN EL PROYECTO 
 */

const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            let operacion = base * i;
            data += `${base} X ${i} = ${operacion}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
};

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`el valor introducido ${base} no es un numero`);
    } else {
        console.log('=============================='.green);
        console.log(`======== Tabla del ${base} ========`.green);
        console.log('=============================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${colors.red(base)} ${colors.white('X')} ${ colors.red(i)} ${colors.white('=')} ${ colors.yellow(base * i )}`);
        }
    }
};


module.exports = {
    crearArchivo,
    listarTabla
}