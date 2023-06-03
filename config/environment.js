const development = {
    db: "TodoAPI",
    secretOrKey: "secret",
}

const production = {
    db: process.env.DB,
    secretOrKey: process.env.SECRETORKEY,
}

// module.exports = production;
module.exports = eval(process.env.NODE_ENV) == undefined ? development : eval(process.env.NODE_ENV);