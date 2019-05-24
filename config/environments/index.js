/**
 * @file  index configuration file for choosing the environment to use
 * from .env file
 * @author Viking
 */

/* eslint no-process-env:0 */
/* eslint import/no-dynamic-require:0 */

const path = require('path')
const _ = require('lodash')

// Get constants module
const constants = {
  environment: {
    default: 'development'
  }
}

// All configurations will extend these options
const all = {
  env: process.env.NODE_ENV || constants.environment.default,

  // Root path of server
  root: path.normalize(`${__dirname}/../..`)
}

// Export the config object based on the NODE_ENV
// ==============================================
const envConfig = require(`./${all.env}.js`)

module.exports = _.merge(
  all,
  envConfig || {})
