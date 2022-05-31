
import db from '../../../aws/dbcon'

export default async function handler (req, res) {
    let id = req.query;
    let queryResult = await db.query(`SELECT * FROM projects WHERE id=${id["id"]};`);
    res.status(200).json({ project: queryResult[0] });
}