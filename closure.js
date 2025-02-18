function createLogger() {
  const messages = [];
  return {
    log(message) {
      messages.push(message);
    },
    getLogs() {
      messages.forEach((message) => console.log(message));
    },
  };
}

function createRandomGenerator(min, max) {
  return () => Math.random() * (max - min) + min;
}
