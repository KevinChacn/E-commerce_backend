const fs = require('fs').promises;
const path = require('path');
const config = require('./config');

const DATA_PATH = path.resolve(__dirname, config.DATA_FILE);

async function readData() {
    try {
        await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
        const data = await fs.readFile(DATA_PATH, 'utf8');
        return JSON.parse(data || '{"users":[]}');
    } catch (error) {
        return { users: [] };
    }
}

async function saveData(data) {
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

module.exports = { readData, saveData };


