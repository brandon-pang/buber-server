import { ConnectionOptions } from "typeorm"
const conectionOptions: ConnectionOptions={
    type: "postgres",
    database:"buber",
    synchronize:true,
    logging:true,
    entities:["entities/**/*.*"],
    host:process.env.DB_ENDPOINT,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
}

export default conectionOptions;