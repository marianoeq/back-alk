import db from "../index.js";

export async function dropTable(){
    const dropTable = await db.query(`DROP TABLE IF EXISTS expenses`);
    console.log("Table deleted", dropTable);
}

dropTable();