
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns)*200;
}

const totalCost = costOfMonitors(5, 4);
console.log (totalCost);

/* I learned that we can return value of a function inside another function.
 These functions being called within another function are often referred to as helper functions */
