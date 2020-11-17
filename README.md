# jobsity-challenge

[![Action Status](https://github.com/WarleyGabriel/jobsity-challenge/workflows/CI/badge.svg)](https://github.com/WarleyGabriel/jobsity-challenge/actions)

This is a project of integration tests (end-to-end).
These tests are developed in JavaScript with [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/)

## Index

- [Features](#Features)
- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Running tests](#Running-tests)
- [Report](#Report) on [GitHub Pages](https://warleygabriel.github.io/jobsity-challenge/)

## Features

- Page Object Pattern
- [Visual regression tests](https://github.com/meinaart/cypress-plugin-snapshots)
- Github Actions
- Report

## Requirements

- node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
- npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
npm install
```

## Running tests

Run e2e tests in headless mode (Electron):

```bash
npm run cy:run
```

```bash
Send a contact
    ✓ The system should show a successful message (16103ms)

  Visual regression on homepage
    ✓ The homepage should display visually correct (8634ms)

  Searching products
    ✓ The system should display only products related to the search (4554ms)


  3 passing (29s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     29 seconds                                                                       │
  │ Spec Ran:     features/all.features                                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Open Cypress and select what test do you want to run and what browser:

```bash
npm run cy:open
```

## Report

Run this command to generate the report in the directory `./results/report/index.html`:

```bash
npm run cy:report:generate
```

You can see the report on [GitHub Pages](https://warleygabriel.github.io/jobsity-challenge/)
