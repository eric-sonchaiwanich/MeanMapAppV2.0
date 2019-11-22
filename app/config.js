module.exports = {

    bitnami:
    {
        name: "MongoDB Service",
        url: "mongodb://" + process.env.DATABASE_USERNAME + ":" + process.env.DATABASE_PASSWORD + "@" + process.env.DATABASE_HOST + "/" + process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT
    }

};