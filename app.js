// const argv = require('yargs')
//     .command(['listar', 'crear'], 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: "b"
//         },
//         limite: {
//             alias: "l",
//             default: 10
//         }
//     })
//     .command('crear', 'Crea un archivo con la tabla y el limite', {
//         base: {
//             demand: true,
//             alias: "b"
//         },
//         limite: {
//             alias: "l",
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
const argv = require("./config/yargs.js").argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se creó el archivo ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log("comando no reconocido");
        break;
}



//let base = "1";

//console.log(process.argv);
console.log("Limite: ", argv.limite, " Base: ", argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// crearArchivo(base)
//     .then(archivo => console.log(archivo))
//     .catch(err => console.log(err));