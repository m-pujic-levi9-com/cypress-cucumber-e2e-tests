// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using CommonJS syntax:
require('./commands');
require('@cypress/xpath');

// allure-cypress@3.12.0 still stores its internal state via Cypress.env('allure'), which Cypress 16 removed.
// Shim it until upstream fixes this: https://github.com/allure-framework/allure-js/issues/1401
const cypressEnv = Cypress.env;
let allureState;
Cypress.env = (key, value) => {
  if (key !== 'allure') return cypressEnv.call(Cypress, key, value);
  if (value !== undefined) allureState = value;
  return allureState;
};

require('allure-cypress');

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Alternatively import commands.js using ES2015 syntax:
// import './commands';
