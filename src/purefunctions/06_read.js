function dataLength(filename) {
  const data = readFileSync(filename);

  return data.length;
}

// IO
