/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/web3-eth-personal"],{

/***/ "./node_modules/web3-eth-personal/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/web3-eth-personal/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*\n    This file is part of web3.js.\n\n    web3.js is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n\n    web3.js is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n\n    You should have received a copy of the GNU Lesser General Public License\n    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.\n*/\n/**\n * @file index.js\n * @author Fabian Vogelsteller <fabian@ethereum.org>\n * @date 2017\n */\n\nvar core = __webpack_require__(/*! web3-core */ \"./node_modules/web3-core/lib/index.js\");\nvar Method = __webpack_require__(/*! web3-core-method */ \"./node_modules/web3-core-method/lib/index.js\");\nvar utils = __webpack_require__(/*! web3-utils */ \"./node_modules/web3-utils/lib/index.js\");\nvar Net = __webpack_require__(/*! web3-net */ \"./node_modules/web3-net/lib/index.js\");\nvar formatters = __webpack_require__(/*! web3-core-helpers */ \"./node_modules/web3-core-helpers/lib/index.js\").formatters;\nvar Personal = function Personal() {\n    var _this = this;\n    // sets _requestmanager\n    core.packageInit(this, arguments);\n    this.net = new Net(this);\n    var defaultAccount = null;\n    var defaultBlock = 'latest';\n    Object.defineProperty(this, 'defaultAccount', {\n        get: function () {\n            return defaultAccount;\n        },\n        set: function (val) {\n            if (val) {\n                defaultAccount = utils.toChecksumAddress(formatters.inputAddressFormatter(val));\n            }\n            // update defaultBlock\n            methods.forEach(function (method) {\n                method.defaultAccount = defaultAccount;\n            });\n            return val;\n        },\n        enumerable: true\n    });\n    Object.defineProperty(this, 'defaultBlock', {\n        get: function () {\n            return defaultBlock;\n        },\n        set: function (val) {\n            defaultBlock = val;\n            // update defaultBlock\n            methods.forEach(function (method) {\n                method.defaultBlock = defaultBlock;\n            });\n            return val;\n        },\n        enumerable: true\n    });\n    var methods = [\n        new Method({\n            name: 'getAccounts',\n            call: 'personal_listAccounts',\n            params: 0,\n            outputFormatter: utils.toChecksumAddress\n        }),\n        new Method({\n            name: 'newAccount',\n            call: 'personal_newAccount',\n            params: 1,\n            inputFormatter: [null],\n            outputFormatter: utils.toChecksumAddress\n        }),\n        new Method({\n            name: 'unlockAccount',\n            call: 'personal_unlockAccount',\n            params: 3,\n            inputFormatter: [formatters.inputAddressFormatter, null, null]\n        }),\n        new Method({\n            name: 'lockAccount',\n            call: 'personal_lockAccount',\n            params: 1,\n            inputFormatter: [formatters.inputAddressFormatter]\n        }),\n        new Method({\n            name: 'importRawKey',\n            call: 'personal_importRawKey',\n            params: 2\n        }),\n        new Method({\n            name: 'sendTransaction',\n            call: 'personal_sendTransaction',\n            params: 2,\n            inputFormatter: [formatters.inputTransactionFormatter, null]\n        }),\n        new Method({\n            name: 'signTransaction',\n            call: 'personal_signTransaction',\n            params: 2,\n            inputFormatter: [formatters.inputTransactionFormatter, null]\n        }),\n        new Method({\n            name: 'sign',\n            call: 'personal_sign',\n            params: 3,\n            inputFormatter: [formatters.inputSignFormatter, formatters.inputAddressFormatter, null]\n        }),\n        new Method({\n            name: 'ecRecover',\n            call: 'personal_ecRecover',\n            params: 2,\n            inputFormatter: [formatters.inputSignFormatter, null]\n        })\n    ];\n    methods.forEach(function (method) {\n        method.attachToObject(_this);\n        method.setRequestManager(_this._requestManager);\n        method.defaultBlock = _this.defaultBlock;\n        method.defaultAccount = _this.defaultAccount;\n    });\n};\ncore.addProviders(Personal);\nmodule.exports = Personal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViMy1ldGgtcGVyc29uYWwvbGliL2luZGV4LmpzP2EyOTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyx3REFBVztBQUM5QixhQUFhLG1CQUFPLENBQUMsc0VBQWtCO0FBQ3ZDLFlBQVksbUJBQU8sQ0FBQywwREFBWTtBQUNoQyxVQUFVLG1CQUFPLENBQUMsc0RBQVU7QUFDNUIsaUJBQWlCLHdHQUF1QztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2ViMy1ldGgtcGVyc29uYWwvbGliL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBUaGlzIGZpbGUgaXMgcGFydCBvZiB3ZWIzLmpzLlxuXG4gICAgd2ViMy5qcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gICAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAgICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gICAgd2ViMy5qcyBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICAgIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gICAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICAgIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gICAgYWxvbmcgd2l0aCB3ZWIzLmpzLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuKi9cbi8qKlxuICogQGZpbGUgaW5kZXguanNcbiAqIEBhdXRob3IgRmFiaWFuIFZvZ2Vsc3RlbGxlciA8ZmFiaWFuQGV0aGVyZXVtLm9yZz5cbiAqIEBkYXRlIDIwMTdcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY29yZSA9IHJlcXVpcmUoJ3dlYjMtY29yZScpO1xudmFyIE1ldGhvZCA9IHJlcXVpcmUoJ3dlYjMtY29yZS1tZXRob2QnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJ3dlYjMtdXRpbHMnKTtcbnZhciBOZXQgPSByZXF1aXJlKCd3ZWIzLW5ldCcpO1xudmFyIGZvcm1hdHRlcnMgPSByZXF1aXJlKCd3ZWIzLWNvcmUtaGVscGVycycpLmZvcm1hdHRlcnM7XG52YXIgUGVyc29uYWwgPSBmdW5jdGlvbiBQZXJzb25hbCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIC8vIHNldHMgX3JlcXVlc3RtYW5hZ2VyXG4gICAgY29yZS5wYWNrYWdlSW5pdCh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMubmV0ID0gbmV3IE5ldCh0aGlzKTtcbiAgICB2YXIgZGVmYXVsdEFjY291bnQgPSBudWxsO1xuICAgIHZhciBkZWZhdWx0QmxvY2sgPSAnbGF0ZXN0JztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRBY2NvdW50Jywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0QWNjb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdEFjY291bnQgPSB1dGlscy50b0NoZWNrc3VtQWRkcmVzcyhmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlcih2YWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBkZWZhdWx0QmxvY2tcbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmRlZmF1bHRBY2NvdW50ID0gZGVmYXVsdEFjY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2RlZmF1bHRCbG9jaycsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdEJsb2NrO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIGRlZmF1bHRCbG9jayA9IHZhbDtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBkZWZhdWx0QmxvY2tcbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmRlZmF1bHRCbG9jayA9IGRlZmF1bHRCbG9jaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRBY2NvdW50cycsXG4gICAgICAgICAgICBjYWxsOiAncGVyc29uYWxfbGlzdEFjY291bnRzJyxcbiAgICAgICAgICAgIHBhcmFtczogMCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogdXRpbHMudG9DaGVja3N1bUFkZHJlc3NcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ25ld0FjY291bnQnLFxuICAgICAgICAgICAgY2FsbDogJ3BlcnNvbmFsX25ld0FjY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiAxLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtudWxsXSxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogdXRpbHMudG9DaGVja3N1bUFkZHJlc3NcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ3VubG9ja0FjY291bnQnLFxuICAgICAgICAgICAgY2FsbDogJ3BlcnNvbmFsX3VubG9ja0FjY291bnQnLFxuICAgICAgICAgICAgcGFyYW1zOiAzLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IFtmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlciwgbnVsbCwgbnVsbF1cbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2xvY2tBY2NvdW50JyxcbiAgICAgICAgICAgIGNhbGw6ICdwZXJzb25hbF9sb2NrQWNjb3VudCcsXG4gICAgICAgICAgICBwYXJhbXM6IDEsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRBZGRyZXNzRm9ybWF0dGVyXVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnaW1wb3J0UmF3S2V5JyxcbiAgICAgICAgICAgIGNhbGw6ICdwZXJzb25hbF9pbXBvcnRSYXdLZXknLFxuICAgICAgICAgICAgcGFyYW1zOiAyXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgTWV0aG9kKHtcbiAgICAgICAgICAgIG5hbWU6ICdzZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICAgICAgY2FsbDogJ3BlcnNvbmFsX3NlbmRUcmFuc2FjdGlvbicsXG4gICAgICAgICAgICBwYXJhbXM6IDIsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRUcmFuc2FjdGlvbkZvcm1hdHRlciwgbnVsbF1cbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ3NpZ25UcmFuc2FjdGlvbicsXG4gICAgICAgICAgICBjYWxsOiAncGVyc29uYWxfc2lnblRyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgIHBhcmFtczogMixcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dFRyYW5zYWN0aW9uRm9ybWF0dGVyLCBudWxsXVxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IE1ldGhvZCh7XG4gICAgICAgICAgICBuYW1lOiAnc2lnbicsXG4gICAgICAgICAgICBjYWxsOiAncGVyc29uYWxfc2lnbicsXG4gICAgICAgICAgICBwYXJhbXM6IDMsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogW2Zvcm1hdHRlcnMuaW5wdXRTaWduRm9ybWF0dGVyLCBmb3JtYXR0ZXJzLmlucHV0QWRkcmVzc0Zvcm1hdHRlciwgbnVsbF1cbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBNZXRob2Qoe1xuICAgICAgICAgICAgbmFtZTogJ2VjUmVjb3ZlcicsXG4gICAgICAgICAgICBjYWxsOiAncGVyc29uYWxfZWNSZWNvdmVyJyxcbiAgICAgICAgICAgIHBhcmFtczogMixcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBbZm9ybWF0dGVycy5pbnB1dFNpZ25Gb3JtYXR0ZXIsIG51bGxdXG4gICAgICAgIH0pXG4gICAgXTtcbiAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBtZXRob2QuYXR0YWNoVG9PYmplY3QoX3RoaXMpO1xuICAgICAgICBtZXRob2Quc2V0UmVxdWVzdE1hbmFnZXIoX3RoaXMuX3JlcXVlc3RNYW5hZ2VyKTtcbiAgICAgICAgbWV0aG9kLmRlZmF1bHRCbG9jayA9IF90aGlzLmRlZmF1bHRCbG9jaztcbiAgICAgICAgbWV0aG9kLmRlZmF1bHRBY2NvdW50ID0gX3RoaXMuZGVmYXVsdEFjY291bnQ7XG4gICAgfSk7XG59O1xuY29yZS5hZGRQcm92aWRlcnMoUGVyc29uYWwpO1xubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25hbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/web3-eth-personal/lib/index.js\n");

/***/ })

}]);