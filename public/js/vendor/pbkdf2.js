/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/pbkdf2"],{

/***/ "./node_modules/pbkdf2/browser.js":
/*!****************************************!*\
  !*** ./node_modules/pbkdf2/browser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.pbkdf2 = __webpack_require__(/*! ./lib/async */ \"./node_modules/pbkdf2/lib/async.js\")\nexports.pbkdf2Sync = __webpack_require__(/*! ./lib/sync */ \"./node_modules/pbkdf2/lib/sync-browser.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGJrZGYyL2Jyb3dzZXIuanM/YTA5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RkFBdUM7QUFDdkMsdUdBQTBDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Bia2RmMi9icm93c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5wYmtkZjIgPSByZXF1aXJlKCcuL2xpYi9hc3luYycpXG5leHBvcnRzLnBia2RmMlN5bmMgPSByZXF1aXJlKCcuL2xpYi9zeW5jJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/pbkdf2/browser.js\n");

/***/ }),

/***/ "./node_modules/pbkdf2/lib/async.js":
/*!******************************************!*\
  !*** ./node_modules/pbkdf2/lib/async.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \"./node_modules/process/browser.js\");\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"./node_modules/safe-buffer/index.js\").Buffer\n\nvar checkParameters = __webpack_require__(/*! ./precondition */ \"./node_modules/pbkdf2/lib/precondition.js\")\nvar defaultEncoding = __webpack_require__(/*! ./default-encoding */ \"./node_modules/pbkdf2/lib/default-encoding.js\")\nvar sync = __webpack_require__(/*! ./sync */ \"./node_modules/pbkdf2/lib/sync-browser.js\")\nvar toBuffer = __webpack_require__(/*! ./to-buffer */ \"./node_modules/pbkdf2/lib/to-buffer.js\")\n\nvar ZERO_BUF\nvar subtle = __webpack_require__.g.crypto && __webpack_require__.g.crypto.subtle\nvar toBrowser = {\n  sha: 'SHA-1',\n  'sha-1': 'SHA-1',\n  sha1: 'SHA-1',\n  sha256: 'SHA-256',\n  'sha-256': 'SHA-256',\n  sha384: 'SHA-384',\n  'sha-384': 'SHA-384',\n  'sha-512': 'SHA-512',\n  sha512: 'SHA-512'\n}\nvar checks = []\nfunction checkNative (algo) {\n  if (__webpack_require__.g.process && !__webpack_require__.g.process.browser) {\n    return Promise.resolve(false)\n  }\n  if (!subtle || !subtle.importKey || !subtle.deriveBits) {\n    return Promise.resolve(false)\n  }\n  if (checks[algo] !== undefined) {\n    return checks[algo]\n  }\n  ZERO_BUF = ZERO_BUF || Buffer.alloc(8)\n  var prom = browserPbkdf2(ZERO_BUF, ZERO_BUF, 10, 128, algo)\n    .then(function () {\n      return true\n    }).catch(function () {\n      return false\n    })\n  checks[algo] = prom\n  return prom\n}\n\nfunction browserPbkdf2 (password, salt, iterations, length, algo) {\n  return subtle.importKey(\n    'raw', password, { name: 'PBKDF2' }, false, ['deriveBits']\n  ).then(function (key) {\n    return subtle.deriveBits({\n      name: 'PBKDF2',\n      salt: salt,\n      iterations: iterations,\n      hash: {\n        name: algo\n      }\n    }, key, length << 3)\n  }).then(function (res) {\n    return Buffer.from(res)\n  })\n}\n\nfunction resolvePromise (promise, callback) {\n  promise.then(function (out) {\n    process.nextTick(function () {\n      callback(null, out)\n    })\n  }, function (e) {\n    process.nextTick(function () {\n      callback(e)\n    })\n  })\n}\nmodule.exports = function (password, salt, iterations, keylen, digest, callback) {\n  if (typeof digest === 'function') {\n    callback = digest\n    digest = undefined\n  }\n\n  digest = digest || 'sha1'\n  var algo = toBrowser[digest.toLowerCase()]\n\n  if (!algo || typeof __webpack_require__.g.Promise !== 'function') {\n    return process.nextTick(function () {\n      var out\n      try {\n        out = sync(password, salt, iterations, keylen, digest)\n      } catch (e) {\n        return callback(e)\n      }\n      callback(null, out)\n    })\n  }\n\n  checkParameters(iterations, keylen)\n  password = toBuffer(password, defaultEncoding, 'Password')\n  salt = toBuffer(salt, defaultEncoding, 'Salt')\n  if (typeof callback !== 'function') throw new Error('No callback provided to pbkdf2')\n\n  resolvePromise(checkNative(algo).then(function (resp) {\n    if (resp) return browserPbkdf2(password, salt, iterations, keylen, algo)\n\n    return sync(password, salt, iterations, keylen, digest)\n  }), callback)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi9hc3luYy5qcz8yMDZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxhQUFhLG9GQUE2Qjs7QUFFMUMsc0JBQXNCLG1CQUFPLENBQUMsaUVBQWdCO0FBQzlDLHNCQUFzQixtQkFBTyxDQUFDLHlFQUFvQjtBQUNsRCxXQUFXLG1CQUFPLENBQUMseURBQVE7QUFDM0IsZUFBZSxtQkFBTyxDQUFDLDJEQUFhOztBQUVwQztBQUNBLGFBQWEscUJBQU0sV0FBVyxxQkFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUJBQU0sYUFBYSxxQkFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxJQUFJLE9BQU87QUFDWDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsSUFBSSxPQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixxQkFBTTtBQUM1QixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Bia2RmMi9saWIvYXN5bmMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXJcblxudmFyIGNoZWNrUGFyYW1ldGVycyA9IHJlcXVpcmUoJy4vcHJlY29uZGl0aW9uJylcbnZhciBkZWZhdWx0RW5jb2RpbmcgPSByZXF1aXJlKCcuL2RlZmF1bHQtZW5jb2RpbmcnKVxudmFyIHN5bmMgPSByZXF1aXJlKCcuL3N5bmMnKVxudmFyIHRvQnVmZmVyID0gcmVxdWlyZSgnLi90by1idWZmZXInKVxuXG52YXIgWkVST19CVUZcbnZhciBzdWJ0bGUgPSBnbG9iYWwuY3J5cHRvICYmIGdsb2JhbC5jcnlwdG8uc3VidGxlXG52YXIgdG9Ccm93c2VyID0ge1xuICBzaGE6ICdTSEEtMScsXG4gICdzaGEtMSc6ICdTSEEtMScsXG4gIHNoYTE6ICdTSEEtMScsXG4gIHNoYTI1NjogJ1NIQS0yNTYnLFxuICAnc2hhLTI1Nic6ICdTSEEtMjU2JyxcbiAgc2hhMzg0OiAnU0hBLTM4NCcsXG4gICdzaGEtMzg0JzogJ1NIQS0zODQnLFxuICAnc2hhLTUxMic6ICdTSEEtNTEyJyxcbiAgc2hhNTEyOiAnU0hBLTUxMidcbn1cbnZhciBjaGVja3MgPSBbXVxuZnVuY3Rpb24gY2hlY2tOYXRpdmUgKGFsZ28pIHtcbiAgaWYgKGdsb2JhbC5wcm9jZXNzICYmICFnbG9iYWwucHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSlcbiAgfVxuICBpZiAoIXN1YnRsZSB8fCAhc3VidGxlLmltcG9ydEtleSB8fCAhc3VidGxlLmRlcml2ZUJpdHMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICB9XG4gIGlmIChjaGVja3NbYWxnb10gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjaGVja3NbYWxnb11cbiAgfVxuICBaRVJPX0JVRiA9IFpFUk9fQlVGIHx8IEJ1ZmZlci5hbGxvYyg4KVxuICB2YXIgcHJvbSA9IGJyb3dzZXJQYmtkZjIoWkVST19CVUYsIFpFUk9fQlVGLCAxMCwgMTI4LCBhbGdvKVxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgY2hlY2tzW2FsZ29dID0gcHJvbVxuICByZXR1cm4gcHJvbVxufVxuXG5mdW5jdGlvbiBicm93c2VyUGJrZGYyIChwYXNzd29yZCwgc2FsdCwgaXRlcmF0aW9ucywgbGVuZ3RoLCBhbGdvKSB7XG4gIHJldHVybiBzdWJ0bGUuaW1wb3J0S2V5KFxuICAgICdyYXcnLCBwYXNzd29yZCwgeyBuYW1lOiAnUEJLREYyJyB9LCBmYWxzZSwgWydkZXJpdmVCaXRzJ11cbiAgKS50aGVuKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc3VidGxlLmRlcml2ZUJpdHMoe1xuICAgICAgbmFtZTogJ1BCS0RGMicsXG4gICAgICBzYWx0OiBzYWx0LFxuICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9ucyxcbiAgICAgIGhhc2g6IHtcbiAgICAgICAgbmFtZTogYWxnb1xuICAgICAgfVxuICAgIH0sIGtleSwgbGVuZ3RoIDw8IDMpXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbShyZXMpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlIChwcm9taXNlLCBjYWxsYmFjaykge1xuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKG91dCkge1xuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgb3V0KVxuICAgIH0pXG4gIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhlKVxuICAgIH0pXG4gIH0pXG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCwgaXRlcmF0aW9ucywga2V5bGVuLCBkaWdlc3QsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgZGlnZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBkaWdlc3RcbiAgICBkaWdlc3QgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGRpZ2VzdCA9IGRpZ2VzdCB8fCAnc2hhMSdcbiAgdmFyIGFsZ28gPSB0b0Jyb3dzZXJbZGlnZXN0LnRvTG93ZXJDYXNlKCldXG5cbiAgaWYgKCFhbGdvIHx8IHR5cGVvZiBnbG9iYWwuUHJvbWlzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvdXRcbiAgICAgIHRyeSB7XG4gICAgICAgIG91dCA9IHN5bmMocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbiwgZGlnZXN0KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZSlcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIG91dClcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tQYXJhbWV0ZXJzKGl0ZXJhdGlvbnMsIGtleWxlbilcbiAgcGFzc3dvcmQgPSB0b0J1ZmZlcihwYXNzd29yZCwgZGVmYXVsdEVuY29kaW5nLCAnUGFzc3dvcmQnKVxuICBzYWx0ID0gdG9CdWZmZXIoc2FsdCwgZGVmYXVsdEVuY29kaW5nLCAnU2FsdCcpXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignTm8gY2FsbGJhY2sgcHJvdmlkZWQgdG8gcGJrZGYyJylcblxuICByZXNvbHZlUHJvbWlzZShjaGVja05hdGl2ZShhbGdvKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgaWYgKHJlc3ApIHJldHVybiBicm93c2VyUGJrZGYyKHBhc3N3b3JkLCBzYWx0LCBpdGVyYXRpb25zLCBrZXlsZW4sIGFsZ28pXG5cbiAgICByZXR1cm4gc3luYyhwYXNzd29yZCwgc2FsdCwgaXRlcmF0aW9ucywga2V5bGVuLCBkaWdlc3QpXG4gIH0pLCBjYWxsYmFjaylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/pbkdf2/lib/async.js\n");

/***/ }),

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
/*!*****************************************************!*\
  !*** ./node_modules/pbkdf2/lib/default-encoding.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var process = __webpack_require__(/*! process/browser */ \"./node_modules/process/browser.js\");\nvar defaultEncoding\n/* istanbul ignore next */\nif (process.browser) {\n  defaultEncoding = 'utf-8'\n} else if (process.version) {\n  var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10)\n\n  defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary'\n} else {\n  defaultEncoding = 'utf-8'\n}\nmodule.exports = defaultEncoding\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi9kZWZhdWx0LWVuY29kaW5nLmpzPzlmOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQSxJQUFJLE9BQU87QUFDWDtBQUNBLENBQUMsVUFBVSxPQUFPO0FBQ2xCLCtCQUErQixPQUFPOztBQUV0QztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi9kZWZhdWx0LWVuY29kaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRFbmNvZGluZ1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZGVmYXVsdEVuY29kaW5nID0gJ3V0Zi04J1xufSBlbHNlIGlmIChwcm9jZXNzLnZlcnNpb24pIHtcbiAgdmFyIHBWZXJzaW9uTWFqb3IgPSBwYXJzZUludChwcm9jZXNzLnZlcnNpb24uc3BsaXQoJy4nKVswXS5zbGljZSgxKSwgMTApXG5cbiAgZGVmYXVsdEVuY29kaW5nID0gcFZlcnNpb25NYWpvciA+PSA2ID8gJ3V0Zi04JyA6ICdiaW5hcnknXG59IGVsc2Uge1xuICBkZWZhdWx0RW5jb2RpbmcgPSAndXRmLTgnXG59XG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRFbmNvZGluZ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/pbkdf2/lib/default-encoding.js\n");

/***/ }),

/***/ "./node_modules/pbkdf2/lib/precondition.js":
/*!*************************************************!*\
  !*** ./node_modules/pbkdf2/lib/precondition.js ***!
  \*************************************************/
/***/ ((module) => {

eval("var MAX_ALLOC = Math.pow(2, 30) - 1 // default in iojs\n\nmodule.exports = function (iterations, keylen) {\n  if (typeof iterations !== 'number') {\n    throw new TypeError('Iterations not a number')\n  }\n\n  if (iterations < 0) {\n    throw new TypeError('Bad iterations')\n  }\n\n  if (typeof keylen !== 'number') {\n    throw new TypeError('Key length not a number')\n  }\n\n  if (keylen < 0 || keylen > MAX_ALLOC || keylen !== keylen) { /* eslint no-self-compare: 0 */\n    throw new TypeError('Bad key length')\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi9wcmVjb25kaXRpb24uanM/N2QyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi9wcmVjb25kaXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTUFYX0FMTE9DID0gTWF0aC5wb3coMiwgMzApIC0gMSAvLyBkZWZhdWx0IGluIGlvanNcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0aW9ucywga2V5bGVuKSB7XG4gIGlmICh0eXBlb2YgaXRlcmF0aW9ucyAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJdGVyYXRpb25zIG5vdCBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoaXRlcmF0aW9ucyA8IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWQgaXRlcmF0aW9ucycpXG4gIH1cblxuICBpZiAodHlwZW9mIGtleWxlbiAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdLZXkgbGVuZ3RoIG5vdCBhIG51bWJlcicpXG4gIH1cblxuICBpZiAoa2V5bGVuIDwgMCB8fCBrZXlsZW4gPiBNQVhfQUxMT0MgfHwga2V5bGVuICE9PSBrZXlsZW4pIHsgLyogZXNsaW50IG5vLXNlbGYtY29tcGFyZTogMCAqL1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBrZXkgbGVuZ3RoJylcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/pbkdf2/lib/precondition.js\n");

/***/ }),

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
/*!*************************************************!*\
  !*** ./node_modules/pbkdf2/lib/sync-browser.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var md5 = __webpack_require__(/*! create-hash/md5 */ \"./node_modules/create-hash/md5.js\")\nvar RIPEMD160 = __webpack_require__(/*! ripemd160 */ \"./node_modules/ripemd160/index.js\")\nvar sha = __webpack_require__(/*! sha.js */ \"./node_modules/sha.js/index.js\")\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"./node_modules/safe-buffer/index.js\").Buffer\n\nvar checkParameters = __webpack_require__(/*! ./precondition */ \"./node_modules/pbkdf2/lib/precondition.js\")\nvar defaultEncoding = __webpack_require__(/*! ./default-encoding */ \"./node_modules/pbkdf2/lib/default-encoding.js\")\nvar toBuffer = __webpack_require__(/*! ./to-buffer */ \"./node_modules/pbkdf2/lib/to-buffer.js\")\n\nvar ZEROS = Buffer.alloc(128)\nvar sizes = {\n  md5: 16,\n  sha1: 20,\n  sha224: 28,\n  sha256: 32,\n  sha384: 48,\n  sha512: 64,\n  rmd160: 20,\n  ripemd160: 20\n}\n\nfunction Hmac (alg, key, saltLen) {\n  var hash = getDigest(alg)\n  var blocksize = (alg === 'sha512' || alg === 'sha384') ? 128 : 64\n\n  if (key.length > blocksize) {\n    key = hash(key)\n  } else if (key.length < blocksize) {\n    key = Buffer.concat([key, ZEROS], blocksize)\n  }\n\n  var ipad = Buffer.allocUnsafe(blocksize + sizes[alg])\n  var opad = Buffer.allocUnsafe(blocksize + sizes[alg])\n  for (var i = 0; i < blocksize; i++) {\n    ipad[i] = key[i] ^ 0x36\n    opad[i] = key[i] ^ 0x5C\n  }\n\n  var ipad1 = Buffer.allocUnsafe(blocksize + saltLen + 4)\n  ipad.copy(ipad1, 0, 0, blocksize)\n  this.ipad1 = ipad1\n  this.ipad2 = ipad\n  this.opad = opad\n  this.alg = alg\n  this.blocksize = blocksize\n  this.hash = hash\n  this.size = sizes[alg]\n}\n\nHmac.prototype.run = function (data, ipad) {\n  data.copy(ipad, this.blocksize)\n  var h = this.hash(ipad)\n  h.copy(this.opad, this.blocksize)\n  return this.hash(this.opad)\n}\n\nfunction getDigest (alg) {\n  function shaFunc (data) {\n    return sha(alg).update(data).digest()\n  }\n  function rmd160Func (data) {\n    return new RIPEMD160().update(data).digest()\n  }\n\n  if (alg === 'rmd160' || alg === 'ripemd160') return rmd160Func\n  if (alg === 'md5') return md5\n  return shaFunc\n}\n\nfunction pbkdf2 (password, salt, iterations, keylen, digest) {\n  checkParameters(iterations, keylen)\n  password = toBuffer(password, defaultEncoding, 'Password')\n  salt = toBuffer(salt, defaultEncoding, 'Salt')\n\n  digest = digest || 'sha1'\n\n  var hmac = new Hmac(digest, password, salt.length)\n\n  var DK = Buffer.allocUnsafe(keylen)\n  var block1 = Buffer.allocUnsafe(salt.length + 4)\n  salt.copy(block1, 0, 0, salt.length)\n\n  var destPos = 0\n  var hLen = sizes[digest]\n  var l = Math.ceil(keylen / hLen)\n\n  for (var i = 1; i <= l; i++) {\n    block1.writeUInt32BE(i, salt.length)\n\n    var T = hmac.run(block1, hmac.ipad1)\n    var U = T\n\n    for (var j = 1; j < iterations; j++) {\n      U = hmac.run(U, hmac.ipad2)\n      for (var k = 0; k < hLen; k++) T[k] ^= U[k]\n    }\n\n    T.copy(DK, destPos)\n    destPos += hLen\n  }\n\n  return DK\n}\n\nmodule.exports = pbkdf2\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi9zeW5jLWJyb3dzZXIuanM/ZTA3YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLG1CQUFPLENBQUMsMERBQWlCO0FBQ25DLGdCQUFnQixtQkFBTyxDQUFDLG9EQUFXO0FBQ25DLFVBQVUsbUJBQU8sQ0FBQyw4Q0FBUTtBQUMxQixhQUFhLG9GQUE2Qjs7QUFFMUMsc0JBQXNCLG1CQUFPLENBQUMsaUVBQWdCO0FBQzlDLHNCQUFzQixtQkFBTyxDQUFDLHlFQUFvQjtBQUNsRCxlQUFlLG1CQUFPLENBQUMsMkRBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixRQUFRO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBLHFCQUFxQixVQUFVO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Bia2RmMi9saWIvc3luYy1icm93c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1kNSA9IHJlcXVpcmUoJ2NyZWF0ZS1oYXNoL21kNScpXG52YXIgUklQRU1EMTYwID0gcmVxdWlyZSgncmlwZW1kMTYwJylcbnZhciBzaGEgPSByZXF1aXJlKCdzaGEuanMnKVxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyXG5cbnZhciBjaGVja1BhcmFtZXRlcnMgPSByZXF1aXJlKCcuL3ByZWNvbmRpdGlvbicpXG52YXIgZGVmYXVsdEVuY29kaW5nID0gcmVxdWlyZSgnLi9kZWZhdWx0LWVuY29kaW5nJylcbnZhciB0b0J1ZmZlciA9IHJlcXVpcmUoJy4vdG8tYnVmZmVyJylcblxudmFyIFpFUk9TID0gQnVmZmVyLmFsbG9jKDEyOClcbnZhciBzaXplcyA9IHtcbiAgbWQ1OiAxNixcbiAgc2hhMTogMjAsXG4gIHNoYTIyNDogMjgsXG4gIHNoYTI1NjogMzIsXG4gIHNoYTM4NDogNDgsXG4gIHNoYTUxMjogNjQsXG4gIHJtZDE2MDogMjAsXG4gIHJpcGVtZDE2MDogMjBcbn1cblxuZnVuY3Rpb24gSG1hYyAoYWxnLCBrZXksIHNhbHRMZW4pIHtcbiAgdmFyIGhhc2ggPSBnZXREaWdlc3QoYWxnKVxuICB2YXIgYmxvY2tzaXplID0gKGFsZyA9PT0gJ3NoYTUxMicgfHwgYWxnID09PSAnc2hhMzg0JykgPyAxMjggOiA2NFxuXG4gIGlmIChrZXkubGVuZ3RoID4gYmxvY2tzaXplKSB7XG4gICAga2V5ID0gaGFzaChrZXkpXG4gIH0gZWxzZSBpZiAoa2V5Lmxlbmd0aCA8IGJsb2Nrc2l6ZSkge1xuICAgIGtleSA9IEJ1ZmZlci5jb25jYXQoW2tleSwgWkVST1NdLCBibG9ja3NpemUpXG4gIH1cblxuICB2YXIgaXBhZCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShibG9ja3NpemUgKyBzaXplc1thbGddKVxuICB2YXIgb3BhZCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShibG9ja3NpemUgKyBzaXplc1thbGddKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrc2l6ZTsgaSsrKSB7XG4gICAgaXBhZFtpXSA9IGtleVtpXSBeIDB4MzZcbiAgICBvcGFkW2ldID0ga2V5W2ldIF4gMHg1Q1xuICB9XG5cbiAgdmFyIGlwYWQxID0gQnVmZmVyLmFsbG9jVW5zYWZlKGJsb2Nrc2l6ZSArIHNhbHRMZW4gKyA0KVxuICBpcGFkLmNvcHkoaXBhZDEsIDAsIDAsIGJsb2Nrc2l6ZSlcbiAgdGhpcy5pcGFkMSA9IGlwYWQxXG4gIHRoaXMuaXBhZDIgPSBpcGFkXG4gIHRoaXMub3BhZCA9IG9wYWRcbiAgdGhpcy5hbGcgPSBhbGdcbiAgdGhpcy5ibG9ja3NpemUgPSBibG9ja3NpemVcbiAgdGhpcy5oYXNoID0gaGFzaFxuICB0aGlzLnNpemUgPSBzaXplc1thbGddXG59XG5cbkhtYWMucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChkYXRhLCBpcGFkKSB7XG4gIGRhdGEuY29weShpcGFkLCB0aGlzLmJsb2Nrc2l6ZSlcbiAgdmFyIGggPSB0aGlzLmhhc2goaXBhZClcbiAgaC5jb3B5KHRoaXMub3BhZCwgdGhpcy5ibG9ja3NpemUpXG4gIHJldHVybiB0aGlzLmhhc2godGhpcy5vcGFkKVxufVxuXG5mdW5jdGlvbiBnZXREaWdlc3QgKGFsZykge1xuICBmdW5jdGlvbiBzaGFGdW5jIChkYXRhKSB7XG4gICAgcmV0dXJuIHNoYShhbGcpLnVwZGF0ZShkYXRhKS5kaWdlc3QoKVxuICB9XG4gIGZ1bmN0aW9uIHJtZDE2MEZ1bmMgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJJUEVNRDE2MCgpLnVwZGF0ZShkYXRhKS5kaWdlc3QoKVxuICB9XG5cbiAgaWYgKGFsZyA9PT0gJ3JtZDE2MCcgfHwgYWxnID09PSAncmlwZW1kMTYwJykgcmV0dXJuIHJtZDE2MEZ1bmNcbiAgaWYgKGFsZyA9PT0gJ21kNScpIHJldHVybiBtZDVcbiAgcmV0dXJuIHNoYUZ1bmNcbn1cblxuZnVuY3Rpb24gcGJrZGYyIChwYXNzd29yZCwgc2FsdCwgaXRlcmF0aW9ucywga2V5bGVuLCBkaWdlc3QpIHtcbiAgY2hlY2tQYXJhbWV0ZXJzKGl0ZXJhdGlvbnMsIGtleWxlbilcbiAgcGFzc3dvcmQgPSB0b0J1ZmZlcihwYXNzd29yZCwgZGVmYXVsdEVuY29kaW5nLCAnUGFzc3dvcmQnKVxuICBzYWx0ID0gdG9CdWZmZXIoc2FsdCwgZGVmYXVsdEVuY29kaW5nLCAnU2FsdCcpXG5cbiAgZGlnZXN0ID0gZGlnZXN0IHx8ICdzaGExJ1xuXG4gIHZhciBobWFjID0gbmV3IEhtYWMoZGlnZXN0LCBwYXNzd29yZCwgc2FsdC5sZW5ndGgpXG5cbiAgdmFyIERLID0gQnVmZmVyLmFsbG9jVW5zYWZlKGtleWxlbilcbiAgdmFyIGJsb2NrMSA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShzYWx0Lmxlbmd0aCArIDQpXG4gIHNhbHQuY29weShibG9jazEsIDAsIDAsIHNhbHQubGVuZ3RoKVxuXG4gIHZhciBkZXN0UG9zID0gMFxuICB2YXIgaExlbiA9IHNpemVzW2RpZ2VzdF1cbiAgdmFyIGwgPSBNYXRoLmNlaWwoa2V5bGVuIC8gaExlbilcblxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBsOyBpKyspIHtcbiAgICBibG9jazEud3JpdGVVSW50MzJCRShpLCBzYWx0Lmxlbmd0aClcblxuICAgIHZhciBUID0gaG1hYy5ydW4oYmxvY2sxLCBobWFjLmlwYWQxKVxuICAgIHZhciBVID0gVFxuXG4gICAgZm9yICh2YXIgaiA9IDE7IGogPCBpdGVyYXRpb25zOyBqKyspIHtcbiAgICAgIFUgPSBobWFjLnJ1bihVLCBobWFjLmlwYWQyKVxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBoTGVuOyBrKyspIFRba10gXj0gVVtrXVxuICAgIH1cblxuICAgIFQuY29weShESywgZGVzdFBvcylcbiAgICBkZXN0UG9zICs9IGhMZW5cbiAgfVxuXG4gIHJldHVybiBES1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBia2RmMlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/pbkdf2/lib/sync-browser.js\n");

/***/ }),

/***/ "./node_modules/pbkdf2/lib/to-buffer.js":
/*!**********************************************!*\
  !*** ./node_modules/pbkdf2/lib/to-buffer.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Buffer = __webpack_require__(/*! safe-buffer */ \"./node_modules/safe-buffer/index.js\").Buffer\n\nmodule.exports = function (thing, encoding, name) {\n  if (Buffer.isBuffer(thing)) {\n    return thing\n  } else if (typeof thing === 'string') {\n    return Buffer.from(thing, encoding)\n  } else if (ArrayBuffer.isView(thing)) {\n    return Buffer.from(thing.buffer)\n  } else {\n    throw new TypeError(name + ' must be a string, a Buffer, a typed array or a DataView')\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGJrZGYyL2xpYi90by1idWZmZXIuanM/OGJlNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG9GQUE2Qjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9wYmtkZjIvbGliL3RvLWJ1ZmZlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGluZywgZW5jb2RpbmcsIG5hbWUpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih0aGluZykpIHtcbiAgICByZXR1cm4gdGhpbmdcbiAgfSBlbHNlIGlmICh0eXBlb2YgdGhpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodGhpbmcpKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHRoaW5nLmJ1ZmZlcilcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG5hbWUgKyAnIG11c3QgYmUgYSBzdHJpbmcsIGEgQnVmZmVyLCBhIHR5cGVkIGFycmF5IG9yIGEgRGF0YVZpZXcnKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/pbkdf2/lib/to-buffer.js\n");

/***/ })

}]);