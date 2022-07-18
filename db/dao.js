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
    };
    try {
        const data = await db.scan(params).promise();
        return data.Items;
    }
    catch (err) {
        console.log('Failed: ', err.message);
        return null;
    }
}

const read = async (table, key) => {
    const params = {
        TableName: table,
        Key: {'id': key}
    };
    try {
        const data = await db.get(params).promise();
        return data;
    }
    catch (err) {
        console.log('Failed: ', err.message);
        return null;
    }
}

const deleteRecord = async (table, key) => {
    const params = {
        TableName: table,
        Key: {'id': key}
    };
    try {
        const data = await db.delete(params).promise();
        return data;
    }
    catch (err) {
        console.log('Failed: ', err.message);
        return null;
    }
}

export {
    create,
    readAll,
    read,
    deleteRecord,
}