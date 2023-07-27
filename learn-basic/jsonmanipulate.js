// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop != 'tracks' && value.trim().length > 0) {
        console.log('If 1');
        records[id][prop] = value;
    } else if (prop == 'tracks' && !records[id].hasOwnProperty(prop)) {
        console.log('If 2');
        records[id].tracks = [value];
    } else if (prop == 'tracks' && value.trim().length > 0) {
        console.log('If 3');
        records[id].tracks.push(value);
    } else if (!value.trim().length > 0) {
        console.log('If 4');
        delete records[id][prop]
    }

    return records;
}

const result = updateRecords(recordCollection, 2548, "tracks", "");
console.log(result);
