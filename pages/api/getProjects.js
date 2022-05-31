import db from '../../aws/dbcon'

export default async function handler (req, res) {
    const queryResult = await db.query('SELECT * FROM projects');
    res.status(200).json({ records : queryResult });
}