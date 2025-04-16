![Tests Passing](https://github.com/NicolaWealth/chan_log/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fchan_log%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `chan_log` package provides functionality for dynamic message logging based on provided channels (or flags).

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `chan_log` package with npm:

`npm install @nicolawealth/chan_log`

# Usage
The `chan_log` package is useful for selectively logging messages based on predefined categories and can be applied to the following cases:
* Debugging
* Error tracking
* Performance monitoring
* User activity tracking
* Audit trails
* Etc.

# Interface
The package exports function `chanLog(enabledFlags)` and it's type `chanLogType`. A `chanLogType` object should be created with the provided exported function where parameter `enabledFlags` is passed one of three things:
1) An array of strings which correspond to the enabled flags of messages to be logged. 
2) An empty array
3) Undefined

The `chanLogType` object consumes arguments of the form: `chanLogObject(flag, message)`, where both `flag` and `message` are string values. 
The logged messages can be accessed via the `log` property of the `chanLogType` object (`chanLogObject.log`). 
Initializing `chanLogObject` with either of `2)` or `3)` will result in a disabled logger such that `chanLogObject.log` is always an empty array regardless of messages passed to it. 
If `1)` is provided, any subsequent `message` provided to `chanLogObject(flag, message)` such that `flag` corresponds to an element of `enabledFlags` used to initialize `chanLogObject` will be added to `chanLogObject.log` as an array element. Any other `message` provided will be ignored.

# Testing
Tests can be found in `chan_log.test.ts` located in `chan_log/src` and should be run with sinon, mocha and nyc.
