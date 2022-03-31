/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/web3-core-subscriptions"],{

/***/ "./node_modules/web3-core-subscriptions/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/web3-core-subscriptions/lib/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.js\n * @author Fabian Vogelsteller <fabian@ethereum.org>\n * @date 2017\n */\n\nvar Subscription = __webpack_require__(/*! ./subscription.js */ \"./node_modules/web3-core-subscriptions/lib/subscription.js\");\nvar Subscriptions = function Subscriptions(options) {\n    this.name = options.name;\n    this.type = options.type;\n    this.subscriptions = options.subscriptions || {};\n    this.requestManager = null;\n};\nSubscriptions.prototype.setRequestManager = function (rm) {\n    this.requestManager = rm;\n};\nSubscriptions.prototype.attachToObject = function (obj) {\n    var func = this.buildCall();\n    var name = this.name.split('.');\n    if (name.length > 1) {\n        obj[name[0]] = obj[name[0]] || {};\n        obj[name[0]][name[1]] = func;\n    }\n    else {\n        obj[name[0]] = func;\n    }\n};\nSubscriptions.prototype.buildCall = function () {\n    var _this = this;\n    return function () {\n        if (!_this.subscriptions[arguments[0]]) {\n            console.warn('Subscription ' + JSON.stringify(arguments[0]) + ' doesn\\'t exist. Subscribing anyway.');\n        }\n        var subscription = new Subscription({\n            subscription: _this.subscriptions[arguments[0]] || {},\n            requestManager: _this.requestManager,\n            type: _this.type\n        });\n        return subscription.subscribe.apply(subscription, arguments);\n    };\n};\nmodule.exports = {\n    subscriptions: Subscriptions,\n    subscription: Subscription\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy1jb3JlLXN1YnNjcmlwdGlvbnMvbGliL2luZGV4LmpzP2MzZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLG1CQUFtQixtQkFBTyxDQUFDLHFGQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy93ZWIzLWNvcmUtc3Vic2NyaXB0aW9ucy9saWIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHdlYjMuanMuXG5cbiAgICB3ZWIzLmpzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAgICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICAgIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAgICB3ZWIzLmpzIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gICAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAgICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gICAgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAgICBhbG9uZyB3aXRoIHdlYjMuanMuICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4qL1xuLyoqXG4gKiBAZmlsZSBpbmRleC5qc1xuICogQGF1dGhvciBGYWJpYW4gVm9nZWxzdGVsbGVyIDxmYWJpYW5AZXRoZXJldW0ub3JnPlxuICogQGRhdGUgMjAxN1xuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBTdWJzY3JpcHRpb24gPSByZXF1aXJlKCcuL3N1YnNjcmlwdGlvbi5qcycpO1xudmFyIFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBTdWJzY3JpcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG9wdGlvbnMuc3Vic2NyaXB0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnJlcXVlc3RNYW5hZ2VyID0gbnVsbDtcbn07XG5TdWJzY3JpcHRpb25zLnByb3RvdHlwZS5zZXRSZXF1ZXN0TWFuYWdlciA9IGZ1bmN0aW9uIChybSkge1xuICAgIHRoaXMucmVxdWVzdE1hbmFnZXIgPSBybTtcbn07XG5TdWJzY3JpcHRpb25zLnByb3RvdHlwZS5hdHRhY2hUb09iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgZnVuYyA9IHRoaXMuYnVpbGRDYWxsKCk7XG4gICAgdmFyIG5hbWUgPSB0aGlzLm5hbWUuc3BsaXQoJy4nKTtcbiAgICBpZiAobmFtZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9ialtuYW1lWzBdXSA9IG9ialtuYW1lWzBdXSB8fCB7fTtcbiAgICAgICAgb2JqW25hbWVbMF1dW25hbWVbMV1dID0gZnVuYztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG9ialtuYW1lWzBdXSA9IGZ1bmM7XG4gICAgfVxufTtcblN1YnNjcmlwdGlvbnMucHJvdG90eXBlLmJ1aWxkQ2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3Vic2NyaXB0aW9uc1thcmd1bWVudHNbMF1dKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1N1YnNjcmlwdGlvbiAnICsgSlNPTi5zdHJpbmdpZnkoYXJndW1lbnRzWzBdKSArICcgZG9lc25cXCd0IGV4aXN0LiBTdWJzY3JpYmluZyBhbnl3YXkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oe1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiBfdGhpcy5zdWJzY3JpcHRpb25zW2FyZ3VtZW50c1swXV0gfHwge30sXG4gICAgICAgICAgICByZXF1ZXN0TWFuYWdlcjogX3RoaXMucmVxdWVzdE1hbmFnZXIsXG4gICAgICAgICAgICB0eXBlOiBfdGhpcy50eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnN1YnNjcmliZS5hcHBseShzdWJzY3JpcHRpb24sIGFyZ3VtZW50cyk7XG4gICAgfTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25zLFxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/web3-core-subscriptions/lib/index.js\n");

/***/ }),

/***/ "./node_modules/web3-core-subscriptions/lib/subscription.js":
/*!******************************************************************!*\
  !*** ./node_modules/web3-core-subscriptions/lib/subscription.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file subscription.js\n * @author Fabian Vogelsteller <fabian@ethereum.org>\n * @date 2017\n */\n\nvar _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\nvar errors = __webpack_require__(/*! web3-core-helpers */ \"./node_modules/web3-core-helpers/lib/index.js\").errors;\nvar EventEmitter = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\nvar formatters = __webpack_require__(/*! web3-core-helpers */ \"./node_modules/web3-core-helpers/lib/index.js\").formatters;\nfunction Subscription(options) {\n    EventEmitter.call(this);\n    this.id = null;\n    this.callback = _.identity;\n    this.arguments = null;\n    this.lastBlock = null; // \"from\" block tracker for backfilling events on reconnection\n    this.options = {\n        subscription: options.subscription,\n        type: options.type,\n        requestManager: options.requestManager\n    };\n}\n// INHERIT\nSubscription.prototype = Object.create(EventEmitter.prototype);\nSubscription.prototype.constructor = Subscription;\n/**\n * Should be used to extract callback from array of arguments. Modifies input param\n *\n * @method extractCallback\n * @param {Array} arguments\n * @return {Function|Null} callback, if exists\n */\nSubscription.prototype._extractCallback = function (args) {\n    if (_.isFunction(args[args.length - 1])) {\n        return args.pop(); // modify the args array!\n    }\n};\n/**\n * Should be called to check if the number of arguments is correct\n *\n * @method validateArgs\n * @param {Array} arguments\n * @throws {Error} if it is not\n */\nSubscription.prototype._validateArgs = function (args) {\n    var subscription = this.options.subscription;\n    if (!subscription)\n        subscription = {};\n    if (!subscription.params)\n        subscription.params = 0;\n    if (args.length !== subscription.params) {\n        throw errors.InvalidNumberOfParams(args.length, subscription.params, subscription.subscriptionName);\n    }\n};\n/**\n * Should be called to format input args of method\n *\n * @method formatInput\n * @param {Array}\n * @return {Array}\n */\nSubscription.prototype._formatInput = function (args) {\n    var subscription = this.options.subscription;\n    if (!subscription) {\n        return args;\n    }\n    if (!subscription.inputFormatter) {\n        return args;\n    }\n    var formattedArgs = subscription.inputFormatter.map(function (formatter, index) {\n        return formatter ? formatter(args[index]) : args[index];\n    });\n    return formattedArgs;\n};\n/**\n * Should be called to format output(result) of method\n *\n * @method formatOutput\n * @param result {Object}\n * @return {Object}\n */\nSubscription.prototype._formatOutput = function (result) {\n    var subscription = this.options.subscription;\n    return (subscription && subscription.outputFormatter && result) ? subscription.outputFormatter(result) : result;\n};\n/**\n * Should create payload from given input args\n *\n * @method toPayload\n * @param {Array} args\n * @return {Object}\n */\nSubscription.prototype._toPayload = function (args) {\n    var params = [];\n    this.callback = this._extractCallback(args) || _.identity;\n    if (!this.subscriptionMethod) {\n        this.subscriptionMethod = args.shift();\n        // replace subscription with given name\n        if (this.options.subscription.subscriptionName) {\n            this.subscriptionMethod = this.options.subscription.subscriptionName;\n        }\n    }\n    if (!this.arguments) {\n        this.arguments = this._formatInput(args);\n        this._validateArgs(this.arguments);\n        args = []; // make empty after validation\n    }\n    // re-add subscriptionName\n    params.push(this.subscriptionMethod);\n    params = params.concat(this.arguments);\n    if (args.length) {\n        throw new Error('Only a callback is allowed as parameter on an already instantiated subscription.');\n    }\n    return {\n        method: this.options.type + '_subscribe',\n        params: params\n    };\n};\n/**\n * Unsubscribes and clears callbacks\n *\n * @method unsubscribe\n * @return {Object}\n */\nSubscription.prototype.unsubscribe = function (callback) {\n    this.options.requestManager.removeSubscription(this.id, callback);\n    this.id = null;\n    this.lastBlock = null;\n    this.removeAllListeners();\n};\n/**\n * Subscribes and watches for changes\n *\n * @method subscribe\n * @param {String} subscription the subscription\n * @param {Object} options the options object with address topics and fromBlock\n * @return {Object}\n */\nSubscription.prototype.subscribe = function () {\n    var _this = this;\n    var args = Array.prototype.slice.call(arguments);\n    var payload = this._toPayload(args);\n    if (!payload) {\n        return this;\n    }\n    // throw error, if provider is not set\n    if (!this.options.requestManager.provider) {\n        setTimeout(function () {\n            var err1 = new Error('No provider set.');\n            _this.callback(err1, null, _this);\n            _this.emit('error', err1);\n        }, 0);\n        return this;\n    }\n    // throw error, if provider doesnt support subscriptions\n    if (!this.options.requestManager.provider.on) {\n        setTimeout(function () {\n            var err2 = new Error('The current provider doesn\\'t support subscriptions: ' +\n                _this.options.requestManager.provider.constructor.name);\n            _this.callback(err2, null, _this);\n            _this.emit('error', err2);\n        }, 0);\n        return this;\n    }\n    // Re-subscription only: continue fetching from the last block we received.\n    // a dropped connection may have resulted in gaps in the logs...\n    if (this.lastBlock && _.isObject(this.options.params)) {\n        payload.params[1] = this.options.params;\n        payload.params[1].fromBlock = formatters.inputBlockNumberFormatter(this.lastBlock + 1);\n    }\n    // if id is there unsubscribe first\n    if (this.id) {\n        this.unsubscribe();\n    }\n    // store the params in the options object\n    this.options.params = payload.params[1];\n    // get past logs, if fromBlock is available\n    if (payload.params[0] === 'logs' && _.isObject(payload.params[1]) && payload.params[1].hasOwnProperty('fromBlock') && isFinite(payload.params[1].fromBlock)) {\n        // send the subscription request\n        // copy the params to avoid race-condition with deletion below this block\n        var blockParams = Object.assign({}, payload.params[1]);\n        this.options.requestManager.send({\n            method: 'eth_getLogs',\n            params: [blockParams]\n        }, function (err, logs) {\n            if (!err) {\n                logs.forEach(function (log) {\n                    var output = _this._formatOutput(log);\n                    _this.callback(null, output, _this);\n                    _this.emit('data', output);\n                });\n                // TODO subscribe here? after the past logs?\n            }\n            else {\n                setTimeout(function () {\n                    _this.callback(err, null, _this);\n                    _this.emit('error', err);\n                }, 0);\n            }\n        });\n    }\n    // create subscription\n    // TODO move to separate function? so that past logs can go first?\n    if (typeof payload.params[1] === 'object')\n        delete payload.params[1].fromBlock;\n    this.options.requestManager.send(payload, function (err, result) {\n        if (!err && result) {\n            _this.id = result;\n            _this.method = payload.params[0];\n            _this.emit('connected', result);\n            // call callback on notifications\n            _this.options.requestManager.addSubscription(_this, function (error, result) {\n                if (!error) {\n                    if (!_.isArray(result)) {\n                        result = [result];\n                    }\n                    result.forEach(function (resultItem) {\n                        var output = _this._formatOutput(resultItem);\n                        // Track current block (for gaps introduced by dropped connections)\n                        _this.lastBlock = _.isObject(output) ? output.blockNumber : null;\n                        if (_.isFunction(_this.options.subscription.subscriptionHandler)) {\n                            return _this.options.subscription.subscriptionHandler.call(_this, output);\n                        }\n                        else {\n                            _this.emit('data', output);\n                        }\n                        // call the callback, last so that unsubscribe there won't affect the emit above\n                        _this.callback(null, output, _this);\n                    });\n                }\n                else {\n                    _this.callback(error, false, _this);\n                    _this.emit('error', error);\n                }\n            });\n        }\n        else {\n            setTimeout(function () {\n                _this.callback(err, false, _this);\n                _this.emit('error', err);\n            }, 0);\n        }\n    });\n    // return an object to cancel the subscription\n    return this;\n};\n/**\n * Resubscribe\n *\n * @method resubscribe\n *\n * @returns {void}\n */\nSubscription.prototype.resubscribe = function () {\n    this.options.requestManager.removeSubscription(this.id); // unsubscribe\n    this.id = null;\n    this.subscribe(this.callback);\n};\nmodule.exports = Subscription;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy1jb3JlLXN1YnNjcmlwdGlvbnMvbGliL3N1YnNjcmlwdGlvbi5qcz9iMjg3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYixRQUFRLG1CQUFPLENBQUMsMkRBQVk7QUFDNUIsYUFBYSxvR0FBbUM7QUFDaEQsbUJBQW1CLG1CQUFPLENBQUMsNERBQWU7QUFDMUMsaUJBQWlCLHdHQUF1QztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy93ZWIzLWNvcmUtc3Vic2NyaXB0aW9ucy9saWIvc3Vic2NyaXB0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gICAgd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gICAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gICAgd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICAgIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gICAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICAgIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gICAgYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuKi9cbi8qKlxuICogQGZpbGUgc3Vic2NyaXB0aW9uLmpzXG4gKiBAYXV0aG9yIEZhYmlhbiBWb2dlbHN0ZWxsZXIgPGZhYmlhbkBldGhlcmV1bS5vcmc+XG4gKiBAZGF0ZSAyMDE3XG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgZXJyb3JzID0gcmVxdWlyZSgnd2ViMy1jb3JlLWhlbHBlcnMnKS5lcnJvcnM7XG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRlbWl0dGVyMycpO1xudmFyIGZvcm1hdHRlcnMgPSByZXF1aXJlKCd3ZWIzLWNvcmUtaGVscGVycycpLmZvcm1hdHRlcnM7XG5mdW5jdGlvbiBTdWJzY3JpcHRpb24ob3B0aW9ucykge1xuICAgIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBfLmlkZW50aXR5O1xuICAgIHRoaXMuYXJndW1lbnRzID0gbnVsbDtcbiAgICB0aGlzLmxhc3RCbG9jayA9IG51bGw7IC8vIFwiZnJvbVwiIGJsb2NrIHRyYWNrZXIgZm9yIGJhY2tmaWxsaW5nIGV2ZW50cyBvbiByZWNvbm5lY3Rpb25cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbjogb3B0aW9ucy5zdWJzY3JpcHRpb24sXG4gICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSxcbiAgICAgICAgcmVxdWVzdE1hbmFnZXI6IG9wdGlvbnMucmVxdWVzdE1hbmFnZXJcbiAgICB9O1xufVxuLy8gSU5IRVJJVFxuU3Vic2NyaXB0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XG5TdWJzY3JpcHRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3Vic2NyaXB0aW9uO1xuLyoqXG4gKiBTaG91bGQgYmUgdXNlZCB0byBleHRyYWN0IGNhbGxiYWNrIGZyb20gYXJyYXkgb2YgYXJndW1lbnRzLiBNb2RpZmllcyBpbnB1dCBwYXJhbVxuICpcbiAqIEBtZXRob2QgZXh0cmFjdENhbGxiYWNrXG4gKiBAcGFyYW0ge0FycmF5fSBhcmd1bWVudHNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufE51bGx9IGNhbGxiYWNrLCBpZiBleGlzdHNcbiAqL1xuU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fZXh0cmFjdENhbGxiYWNrID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpZiAoXy5pc0Z1bmN0aW9uKGFyZ3NbYXJncy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3MucG9wKCk7IC8vIG1vZGlmeSB0aGUgYXJncyBhcnJheSFcbiAgICB9XG59O1xuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIGNoZWNrIGlmIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIGlzIGNvcnJlY3RcbiAqXG4gKiBAbWV0aG9kIHZhbGlkYXRlQXJnc1xuICogQHBhcmFtIHtBcnJheX0gYXJndW1lbnRzXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgaXQgaXMgbm90XG4gKi9cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX3ZhbGlkYXRlQXJncyA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9ucy5zdWJzY3JpcHRpb247XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9IHt9O1xuICAgIGlmICghc3Vic2NyaXB0aW9uLnBhcmFtcylcbiAgICAgICAgc3Vic2NyaXB0aW9uLnBhcmFtcyA9IDA7XG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSBzdWJzY3JpcHRpb24ucGFyYW1zKSB7XG4gICAgICAgIHRocm93IGVycm9ycy5JbnZhbGlkTnVtYmVyT2ZQYXJhbXMoYXJncy5sZW5ndGgsIHN1YnNjcmlwdGlvbi5wYXJhbXMsIHN1YnNjcmlwdGlvbi5zdWJzY3JpcHRpb25OYW1lKTtcbiAgICB9XG59O1xuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIGZvcm1hdCBpbnB1dCBhcmdzIG9mIG1ldGhvZFxuICpcbiAqIEBtZXRob2QgZm9ybWF0SW5wdXRcbiAqIEBwYXJhbSB7QXJyYXl9XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fZm9ybWF0SW5wdXQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvbnMuc3Vic2NyaXB0aW9uO1xuICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cbiAgICBpZiAoIXN1YnNjcmlwdGlvbi5pbnB1dEZvcm1hdHRlcikge1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlZEFyZ3MgPSBzdWJzY3JpcHRpb24uaW5wdXRGb3JtYXR0ZXIubWFwKGZ1bmN0aW9uIChmb3JtYXR0ZXIsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIoYXJnc1tpbmRleF0pIDogYXJnc1tpbmRleF07XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvcm1hdHRlZEFyZ3M7XG59O1xuLyoqXG4gKiBTaG91bGQgYmUgY2FsbGVkIHRvIGZvcm1hdCBvdXRwdXQocmVzdWx0KSBvZiBtZXRob2RcbiAqXG4gKiBAbWV0aG9kIGZvcm1hdE91dHB1dFxuICogQHBhcmFtIHJlc3VsdCB7T2JqZWN0fVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5TdWJzY3JpcHRpb24ucHJvdG90eXBlLl9mb3JtYXRPdXRwdXQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9ucy5zdWJzY3JpcHRpb247XG4gICAgcmV0dXJuIChzdWJzY3JpcHRpb24gJiYgc3Vic2NyaXB0aW9uLm91dHB1dEZvcm1hdHRlciAmJiByZXN1bHQpID8gc3Vic2NyaXB0aW9uLm91dHB1dEZvcm1hdHRlcihyZXN1bHQpIDogcmVzdWx0O1xufTtcbi8qKlxuICogU2hvdWxkIGNyZWF0ZSBwYXlsb2FkIGZyb20gZ2l2ZW4gaW5wdXQgYXJnc1xuICpcbiAqIEBtZXRob2QgdG9QYXlsb2FkXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX3RvUGF5bG9hZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLl9leHRyYWN0Q2FsbGJhY2soYXJncykgfHwgXy5pZGVudGl0eTtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uTWV0aG9kKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uTWV0aG9kID0gYXJncy5zaGlmdCgpO1xuICAgICAgICAvLyByZXBsYWNlIHN1YnNjcmlwdGlvbiB3aXRoIGdpdmVuIG5hbWVcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWJzY3JpcHRpb24uc3Vic2NyaXB0aW9uTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25NZXRob2QgPSB0aGlzLm9wdGlvbnMuc3Vic2NyaXB0aW9uLnN1YnNjcmlwdGlvbk5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLmFyZ3VtZW50cykge1xuICAgICAgICB0aGlzLmFyZ3VtZW50cyA9IHRoaXMuX2Zvcm1hdElucHV0KGFyZ3MpO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUFyZ3ModGhpcy5hcmd1bWVudHMpO1xuICAgICAgICBhcmdzID0gW107IC8vIG1ha2UgZW1wdHkgYWZ0ZXIgdmFsaWRhdGlvblxuICAgIH1cbiAgICAvLyByZS1hZGQgc3Vic2NyaXB0aW9uTmFtZVxuICAgIHBhcmFtcy5wdXNoKHRoaXMuc3Vic2NyaXB0aW9uTWV0aG9kKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuY29uY2F0KHRoaXMuYXJndW1lbnRzKTtcbiAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IGEgY2FsbGJhY2sgaXMgYWxsb3dlZCBhcyBwYXJhbWV0ZXIgb24gYW4gYWxyZWFkeSBpbnN0YW50aWF0ZWQgc3Vic2NyaXB0aW9uLicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtZXRob2Q6IHRoaXMub3B0aW9ucy50eXBlICsgJ19zdWJzY3JpYmUnLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG59O1xuLyoqXG4gKiBVbnN1YnNjcmliZXMgYW5kIGNsZWFycyBjYWxsYmFja3NcbiAqXG4gKiBAbWV0aG9kIHVuc3Vic2NyaWJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9wdGlvbnMucmVxdWVzdE1hbmFnZXIucmVtb3ZlU3Vic2NyaXB0aW9uKHRoaXMuaWQsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLmxhc3RCbG9jayA9IG51bGw7XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbn07XG4vKipcbiAqIFN1YnNjcmliZXMgYW5kIHdhdGNoZXMgZm9yIGNoYW5nZXNcbiAqXG4gKiBAbWV0aG9kIHN1YnNjcmliZVxuICogQHBhcmFtIHtTdHJpbmd9IHN1YnNjcmlwdGlvbiB0aGUgc3Vic2NyaXB0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB0aGUgb3B0aW9ucyBvYmplY3Qgd2l0aCBhZGRyZXNzIHRvcGljcyBhbmQgZnJvbUJsb2NrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciBwYXlsb2FkID0gdGhpcy5fdG9QYXlsb2FkKGFyZ3MpO1xuICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gdGhyb3cgZXJyb3IsIGlmIHByb3ZpZGVyIGlzIG5vdCBzZXRcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5yZXF1ZXN0TWFuYWdlci5wcm92aWRlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlcnIxID0gbmV3IEVycm9yKCdObyBwcm92aWRlciBzZXQuJyk7XG4gICAgICAgICAgICBfdGhpcy5jYWxsYmFjayhlcnIxLCBudWxsLCBfdGhpcyk7XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIGVycjEpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIHRocm93IGVycm9yLCBpZiBwcm92aWRlciBkb2VzbnQgc3VwcG9ydCBzdWJzY3JpcHRpb25zXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucmVxdWVzdE1hbmFnZXIucHJvdmlkZXIub24pIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXJyMiA9IG5ldyBFcnJvcignVGhlIGN1cnJlbnQgcHJvdmlkZXIgZG9lc25cXCd0IHN1cHBvcnQgc3Vic2NyaXB0aW9uczogJyArXG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5yZXF1ZXN0TWFuYWdlci5wcm92aWRlci5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrKGVycjIsIG51bGwsIF90aGlzKTtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZXJyMik7XG4gICAgICAgIH0sIDApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gUmUtc3Vic2NyaXB0aW9uIG9ubHk6IGNvbnRpbnVlIGZldGNoaW5nIGZyb20gdGhlIGxhc3QgYmxvY2sgd2UgcmVjZWl2ZWQuXG4gICAgLy8gYSBkcm9wcGVkIGNvbm5lY3Rpb24gbWF5IGhhdmUgcmVzdWx0ZWQgaW4gZ2FwcyBpbiB0aGUgbG9ncy4uLlxuICAgIGlmICh0aGlzLmxhc3RCbG9jayAmJiBfLmlzT2JqZWN0KHRoaXMub3B0aW9ucy5wYXJhbXMpKSB7XG4gICAgICAgIHBheWxvYWQucGFyYW1zWzFdID0gdGhpcy5vcHRpb25zLnBhcmFtcztcbiAgICAgICAgcGF5bG9hZC5wYXJhbXNbMV0uZnJvbUJsb2NrID0gZm9ybWF0dGVycy5pbnB1dEJsb2NrTnVtYmVyRm9ybWF0dGVyKHRoaXMubGFzdEJsb2NrICsgMSk7XG4gICAgfVxuICAgIC8vIGlmIGlkIGlzIHRoZXJlIHVuc3Vic2NyaWJlIGZpcnN0XG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICAvLyBzdG9yZSB0aGUgcGFyYW1zIGluIHRoZSBvcHRpb25zIG9iamVjdFxuICAgIHRoaXMub3B0aW9ucy5wYXJhbXMgPSBwYXlsb2FkLnBhcmFtc1sxXTtcbiAgICAvLyBnZXQgcGFzdCBsb2dzLCBpZiBmcm9tQmxvY2sgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHBheWxvYWQucGFyYW1zWzBdID09PSAnbG9ncycgJiYgXy5pc09iamVjdChwYXlsb2FkLnBhcmFtc1sxXSkgJiYgcGF5bG9hZC5wYXJhbXNbMV0uaGFzT3duUHJvcGVydHkoJ2Zyb21CbG9jaycpICYmIGlzRmluaXRlKHBheWxvYWQucGFyYW1zWzFdLmZyb21CbG9jaykpIHtcbiAgICAgICAgLy8gc2VuZCB0aGUgc3Vic2NyaXB0aW9uIHJlcXVlc3RcbiAgICAgICAgLy8gY29weSB0aGUgcGFyYW1zIHRvIGF2b2lkIHJhY2UtY29uZGl0aW9uIHdpdGggZGVsZXRpb24gYmVsb3cgdGhpcyBibG9ja1xuICAgICAgICB2YXIgYmxvY2tQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXlsb2FkLnBhcmFtc1sxXSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5yZXF1ZXN0TWFuYWdlci5zZW5kKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9nZXRMb2dzJyxcbiAgICAgICAgICAgIHBhcmFtczogW2Jsb2NrUGFyYW1zXVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyLCBsb2dzKSB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIGxvZ3MuZm9yRWFjaChmdW5jdGlvbiAobG9nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBfdGhpcy5fZm9ybWF0T3V0cHV0KGxvZyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrKG51bGwsIG91dHB1dCwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdkYXRhJywgb3V0cHV0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHN1YnNjcmliZSBoZXJlPyBhZnRlciB0aGUgcGFzdCBsb2dzP1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrKGVyciwgbnVsbCwgX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgc3Vic2NyaXB0aW9uXG4gICAgLy8gVE9ETyBtb3ZlIHRvIHNlcGFyYXRlIGZ1bmN0aW9uPyBzbyB0aGF0IHBhc3QgbG9ncyBjYW4gZ28gZmlyc3Q/XG4gICAgaWYgKHR5cGVvZiBwYXlsb2FkLnBhcmFtc1sxXSA9PT0gJ29iamVjdCcpXG4gICAgICAgIGRlbGV0ZSBwYXlsb2FkLnBhcmFtc1sxXS5mcm9tQmxvY2s7XG4gICAgdGhpcy5vcHRpb25zLnJlcXVlc3RNYW5hZ2VyLnNlbmQocGF5bG9hZCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmICghZXJyICYmIHJlc3VsdCkge1xuICAgICAgICAgICAgX3RoaXMuaWQgPSByZXN1bHQ7XG4gICAgICAgICAgICBfdGhpcy5tZXRob2QgPSBwYXlsb2FkLnBhcmFtc1swXTtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Nvbm5lY3RlZCcsIHJlc3VsdCk7XG4gICAgICAgICAgICAvLyBjYWxsIGNhbGxiYWNrIG9uIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMucmVxdWVzdE1hbmFnZXIuYWRkU3Vic2NyaXB0aW9uKF90aGlzLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gW3Jlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBfdGhpcy5fZm9ybWF0T3V0cHV0KHJlc3VsdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJhY2sgY3VycmVudCBibG9jayAoZm9yIGdhcHMgaW50cm9kdWNlZCBieSBkcm9wcGVkIGNvbm5lY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGFzdEJsb2NrID0gXy5pc09iamVjdChvdXRwdXQpID8gb3V0cHV0LmJsb2NrTnVtYmVyIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oX3RoaXMub3B0aW9ucy5zdWJzY3JpcHRpb24uc3Vic2NyaXB0aW9uSGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5zdWJzY3JpcHRpb24uc3Vic2NyaXB0aW9uSGFuZGxlci5jYWxsKF90aGlzLCBvdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZGF0YScsIG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSBjYWxsYmFjaywgbGFzdCBzbyB0aGF0IHVuc3Vic2NyaWJlIHRoZXJlIHdvbid0IGFmZmVjdCB0aGUgZW1pdCBhYm92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2sobnVsbCwgb3V0cHV0LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2soZXJyb3IsIGZhbHNlLCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsbGJhY2soZXJyLCBmYWxzZSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIGFuIG9iamVjdCB0byBjYW5jZWwgdGhlIHN1YnNjcmlwdGlvblxuICAgIHJldHVybiB0aGlzO1xufTtcbi8qKlxuICogUmVzdWJzY3JpYmVcbiAqXG4gKiBAbWV0aG9kIHJlc3Vic2NyaWJlXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblN1YnNjcmlwdGlvbi5wcm90b3R5cGUucmVzdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlcXVlc3RNYW5hZ2VyLnJlbW92ZVN1YnNjcmlwdGlvbih0aGlzLmlkKTsgLy8gdW5zdWJzY3JpYmVcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnN1YnNjcmliZSh0aGlzLmNhbGxiYWNrKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IFN1YnNjcmlwdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/web3-core-subscriptions/lib/subscription.js\n");

/***/ })

}]);