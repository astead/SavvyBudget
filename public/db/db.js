// db/db.js
//const sqlite3 = require('sqlite3');

const path = require('path');
//const { ipcRenderer, contextBridge, ipcMain } = require('electron');

const dbPath = path.resolve(__dirname, './db.sqlite');

// Create connection to SQLite database
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true,
});


function setup_db() {
    // Create a table in the database called "books"
    knex.schema
        // Make sure no "books" table exists
        // before trying to create new
        .hasTable('category')
            .then((exists) => {
                if (!exists) {
                    return knex.schema.createTable('category', (table)  => {
                        table.increments('id').primary()
                        table.integer('category')
                    })
                    .then(() => {
                        // Log success message
                        console.log('Table \'Category\' created')
                    })
                    .catch((error) => {
                        console.error(`There was an error creating table: ${error}`)
                    })
                }
            })
            .then(() => {
                console.log('done')
            })
            .catch((error) => {
                console.error(`There was an error setting up the database: ${error}`)
            })
}


// Export the database
module.exports = knex;