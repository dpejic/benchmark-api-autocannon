const autocannon = require('autocannon');

const url = '<api>';
const connections = 10;
const duration = 10;

const headers = {
  Authorization: 'Bearer <token>'
};

const instance = autocannon(
  {
    url,
    connections,
    duration,
    headers,
  },
  (err, result) => {
    if (err) {
      console.error(err);
    }
    console.log(result)
    autocannon.printResult(result);
  }
);

autocannon.track(instance, { renderProgressBar: false })

process.once('SIGINT', () => {
  instance.stop();
});