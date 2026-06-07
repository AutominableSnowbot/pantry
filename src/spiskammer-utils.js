function splitShoppingInputLines(text) {
  return String(text || '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(function(line) { return line.trim(); })
    .filter(Boolean);
}

export {
  splitShoppingInputLines
};
