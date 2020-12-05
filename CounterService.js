let events = new Map();
let words = new Map();

let stats = [];

const dataProcess = (stdout) => {
  let serielizedData = serielizeData(stdout);

  serielizedData.map((dataItem) => {
    let validDataItem = isValidJSON(dataItem);

    if (validDataItem) {
      const { event_type, data, timestamp } = validDataItem;
      updateData(event_type, events);
      updateData(data, words);
      stats.push(validDataItem);
    }
  });
};

const serielizeData = (stdout) => {
  let stdoutToString = stdout.toString();
  let inputArray = stdoutToString.split("\n");
  return inputArray;
};

const isValidJSON = (item) => {
  try {
    let object = JSON.parse(item);
    return object;
  } catch (error) {
    return false;
  }
};

const updateData = (itemToCount, items) => {
  let count = items.get(itemToCount);
  count ? items.set(itemToCount, ++count) : items.set(itemToCount, 1);
};

module.exports = {
  dataProcess,
  events,
  words,
};
