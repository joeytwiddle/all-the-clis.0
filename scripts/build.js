const registry = require('package-stream')({
  db: 'https://replicate.npmjs.com'
})
const ora = require('ora')
const spinner = ora('Loading').start()
var clis = {}
var totalPackages = 0

registry
  .on('package', function (pkg) {
    spinner.text = String(++totalPackages)
    if (pkg && pkg.bin) {
      Object.keys(pkg.bin).forEach(cli => {
        clis[cli] = clis[cli] || []
        clis[cli].push(pkg.name)
      })
    }
  })
  .on('up-to-date', function () {
    process.stdout.write(JSON.stringify(clis, null, 2))
    process.exit()
  })
