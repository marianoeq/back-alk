import query from "../index.js";

export async function dropTable(){
    const dropTable = await query(`DROP TABLE IF EXISTS expenses`);
    console.log("Table deleted", dropTable);
}

dropTable();