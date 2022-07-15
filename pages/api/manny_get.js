import { createItem } from '../../db/dao'
import { db, db_docClient } from '../../db/db';

export default async function handler (req, res) {
    const params = {
      TableName: 'projects',
      Select: 'ALL_ATTRIBUTES',
    };
    var qryResult = null
    await db_docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
        }
        else {
            console.log(data);
            qryResult = data['Items']
            res.status(200).json({data: qryResult});
        }
    });
}
