import mysql from "mysql2"; // import library of mysql tools
import { dbConnection } from "./secrets.js";

const db = mysql.createConnection(dbConnection)

console.log('we are connected...')

db.query("SELECT * FROM dishes_and_cuisines", (err, results) => {
    if (err) console.log("ERROR ->", err);
    console.table(results);
})

db.end()

