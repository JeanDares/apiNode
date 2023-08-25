import mysql, { OkPacket } from "mysql2"
import { Connection } from "mysql2/typings/mysql/lib/Connection"
import { _DB_CONFIG } from "../../constantes"

export interface DBConfig {
    host: string
    user: string
    password: string
    database: string
    port?: 3306
}

export function getConnection(dbConfig: DBConfig = _DB_CONFIG) {
    return mysql.createConnection(dbConfig);
}

export async function executaSql(cmdSQL: string, con?: Connection, params?:any[]) {
    let fechaCon = false;
    if(!con) {
        con = getConnection()
        fechaCon = true;
    }

    const [rows] = await con.promise().query(cmdSQL, params) as OkPacket[];

    if(fechaCon) con.end()

    return rows
}

export async function filtraTabela(cmdSQL: string, con?: Connection, params?:any[]) {
    let fechaCon = false;
    if(!con) {
        con = getConnection()
        fechaCon = true;
    }

    const rows = await con.promise().query(cmdSQL, params);

    if(fechaCon) con.end()

    return rows
}