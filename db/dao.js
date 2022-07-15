// db
import db from './db'


const create = async (table, data) => {
    const params = {
        TableName: table,
        Item: data,
    }
    db.put(params, (err, data) => {
        if (err) console.log(err);
        else {
            console.log(data);
            return data;
        }
    });
}

export {
    create,
}