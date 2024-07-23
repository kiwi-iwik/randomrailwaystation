const fs = require('fs');
const path = require('path');

// Read the JSON file
const filePath = path.join(__dirname, 'RailwayStation.json');
const jsonData = fs.readFileSync(filePath, 'utf8');
const stations = JSON.parse(jsonData);

// Create a new array to store the modified data
const newStations = stations.map(station => {
    const addressParts = station.stationAddrTw.split('');
    const firstThreeWords = addressParts.slice(0, 3).join('');
    return {stationName: station.stationName, stationAddrTw: firstThreeWords, stationEName: station.stationEName};
});

// Write the new JSON data to a new file
const newFilePath = path.join(__dirname, 'NewRailwayStation.json');
fs.writeFileSync(newFilePath, JSON.stringify(newStations, null, 2), 'utf8');

console.log('New JSON file created successfully!');
