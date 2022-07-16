// db
import db from './db'


const create = async (table, data) => {
    const params = {
        TableName: table,
        Item: data,
    }
    try {
        const data = db.put(params).promise();
        return data;
    }
    catch (err) {
        console.log('Failure: ', err.message);
        return null;
    }
}

const readAll = async (table) => {
    const params = {
        TableName: table,
    }
    try {
        const data = await db.scan(params).promise();
        return data.Items;
    }
    catch (err) {
        console.log('Failed: ', err.message);
        return null;
    }
}

export {
    create,
    readAll,
}