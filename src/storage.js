const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data.txt');

async function readData() {
    try {
        const data = await fs.readFile(DATA_PATH, 'utf8');
        return data ? JSON.parse(data) : { orders: [] };
    } catch (error) {
        return { orders: [] };
    }
}

async function saveData(data) {
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

module.exports = {
    readData,
    saveData
};