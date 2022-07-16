import { readAll } from '../../db/dao'
import db from '../../db/db';

export default async function handler (req, res) {
    const data = await readAll('projects');
    console.log('data: ', data);
    res.status(200).json({records: data});
}
