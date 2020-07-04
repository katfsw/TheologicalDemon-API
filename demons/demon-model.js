const db = require('../db/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('demons')
}

function findBy(filter) {
    return db('demons').where(filter);
}

async function add(demon) {
    const [id] = await db('demons').insert(demon);

    return findById(id);
}

function findById(id) {
    return db('demons')
    .where({ id })
    .first();
}

function remove(id) {
    return db('demons')
      .where('id', Number(id))
      .del();
}

function update(changes, id) {
    return db('demons')
      .where({ id })
      .update(changes);
};