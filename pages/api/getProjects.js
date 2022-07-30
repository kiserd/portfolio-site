import { readAll } from '../../db/dao'

// export default async function handler (req, res) {
//     const queryResult = await db.query('SELECT * FROM projects');
//     res.status(200).json({ records : queryResult });
// }


export default async function handler (req, res) {
    const queryResult = await readAll('projects');
    res.status(200).json({ records : queryResult });
}