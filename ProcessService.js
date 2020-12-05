const { spawn } = require("child_process");
const { dataProcess } = require("./CounterService");
const childProcess = spawn("./new");

const initProcess = () => {
  childProcess.stdout.on("data", (data) => {
    dataProcess(data);
  });

  childProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
};

const stopProcess = () => {
  childProcess.kill();
  childProcess.on("close", () => {});
};

module.exports = {
  initProcess,
  stopProcess,
};
