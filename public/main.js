const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev'); // To check if electron is in development mode
const path = require('path');
//const sqlite3 = require('sqlite3');
const knex = require('./db/db.js');
//const { channels } = require('../src/shared/constants');


function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Savvy Budget",
    //frame: false,
    webPreferences: {
      // The preload file where we will perform our app communication
      preload: isDev 
        ? path.join(app.getAppPath(), './public/preload.js') // Loading it from the public folder for dev
        : path.join(app.getAppPath(), './build/preload.js'), // Loading it from the build folder for production
      worldSafeExecuteJavaScript: true, // If you're using Electron 12+, this should be enabled by default and does not need to be added here.
      contextIsolation: true, // Isolating context so our app is not exposed to random javascript executions making it safer.
      nodeIntegration: true,
      enableRemoteModule:true,
    }
  })

  win.removeMenu()
  
  //load the index.html from a url
  win.loadURL(
    isDev
      ? 'http://localhost:3000' // Loading localhost if dev mode
      : `file://${path.join(__dirname, '../build/index.html')}` // Loading build file if in production
  );  

  win.webContents.openDevTools();

  knex.setup_db();
  
}



// ((OPTIONAL)) Setting the location for the userdata folder created by an Electron app. It default to the AppData folder if you don't set it.
app.setPath(
  'userData',
  isDev
    ? path.join(app.getAppPath(), 'userdata/') // In development it creates the userdata folder where package.json is
    : path.join(process.resourcesPath, 'userdata/') // In production it creates userdata folder in the resources folder
);


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});

// Logging any exceptions
process.on('uncaughtException', (error) => {
  console.log(`Exception: ${error}`);
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('add_category', (event, name) => {
  //console.log(name);

  const dbPath = path.resolve(__dirname, 'db/db.sqlite');

  // Create connection to SQLite database
  const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  });

  knex('category').insert({
    'category': name,
  })
  .then(() => {
    console.log('Added category: ' + name);
  })
  .catch(err => {
    console.log('Error: ' + err);
  })
});

ipcMain.on('del_category', (event, id) => {
  //console.log(id);

  const dbPath = path.resolve(__dirname, 'db/db.sqlite');

  // Create connection to SQLite database
  const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  });

  knex('category').where({id: id}).del()
  .then(() => {
    console.log('Deleted category: ' + id);
  })
  .catch(err => {
    console.log('Error: ' + err);
  })
});

ipcMain.on('rename_category', (event, {id, name}) => {
  //console.log(id, name);

  const dbPath = path.resolve(__dirname, 'db/db.sqlite');

  // Create connection to SQLite database
  const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  });

  knex('category').where({id: id}).update({
    category: name
  })
  .then(() => {
    console.log('Renamed category: ' + name);
  })
  .catch(err => {
    console.log('Error: ' + err);
  })
});


ipcMain.on('get_data', (event, arg) => {
  //console.log('Main: get_data');

  const dbPath = path.resolve(__dirname, 'db/db.sqlite');

  // Create connection to SQLite database
  const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: dbPath,
    },
    useNullAsDefault: true
  });

  //console.log(arg);
  switch (arg) {

    case 'category_list':
      knex.select('*').from('category')
        .then(data => {
            //console.log('data:', data);
            //console.log('calling renderer: list_data');
            event.sender.send('list_data', data);
        })
        .catch(err => console.log(err))
      break;

    default:
  }
})

// Youtube: https://www.youtube.com/watch?v=vBjCbYgyznM&list=PLkZU2rKh1mT8cML-VNcUHF3vB8qzzgxuA&index=7