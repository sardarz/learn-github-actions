const github = require("@actions/github")
const exec = require("@actions/exec")

let myOutput = ''
let myError = ''
const options = {}
options.listeners = {
  stdout: (data) => {
    myOutput += data.toString();
  },
  stderr: (data) => {
    myError += data.toString();
  }
}
// options.cwd = './lib';
 exec.exec('ls', ['-1'], options).then(() => {
   console.log("OUTPUT", myOutput)

 })

