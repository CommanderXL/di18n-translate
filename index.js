const DI18n = require('./dist/di18n.min')
const pkg = require('./package.json')

DI18n.__version__ = pkg.version

module.exports = DI18n