'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  PORT: 8081,
  NODE_ENV: '"development"'
})
