const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}



const argv = require('yargs')
    .command(['listar', 'crear'], 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla y el limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}