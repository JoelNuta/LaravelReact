/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/LatLongFields.jsx":
/*!**************************************!*\
  !*** ./src/client/LatLongFields.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LatLongFields; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass LatLongFields extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n    }\n\n    changeValue(field, value) {\n        this.props.onChange(this.props.id, field, value);\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"label\",\n                null,\n                this.props.title\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Lat:\"\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"number\", value: this.props.value.lat, onChange: e => this.changeValue(\"lat\", e.target.value) })\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Lon:\"\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"number\", value: this.props.value.lng, onChange: e => this.changeValue(\"lng\", e.target.value) })\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0xhdExvbmdGaWVsZHMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvTGF0TG9uZ0ZpZWxkcy5qc3g/ZTU4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXRMb25nRmllbGRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZShmaWVsZCx2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmlkLGZpZWxkLHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGF0Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlLmxhdH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZVZhbHVlKFwibGF0XCIsZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvbjo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZS5sbmd9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VWYWx1ZShcImxuZ1wiLGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFOQTtBQVlBO0FBQ0E7QUExQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/LatLongFields.jsx\n");

/***/ }),

/***/ "./src/client/Map.jsx":
/*!****************************!*\
  !*** ./src/client/Map.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Map extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.markers = [];\n    }\n\n    showMap(elm) {\n        this.map = new google.maps.Map(elm, {\n            zoom: 12,\n            center: { lat: -34.6037, lng: -58.3816 // Bs As\n            } });\n        this.map.addListener(\"click\", event => {\n            const cords = event.latLng;\n            this.props.selectMapPoint({ lat: cords.lat(), lng: cords.lng() });\n        });\n    }\n\n    shouldComponentUpdate(nextProps, nextState) {\n        nextProps.markers.forEach(marker => {});\n        return false;\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { height: 500, width: 500 }, ref: elm => this.showMap(elm) });\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L01hcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9NYXAuanN4Pzg3ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFwKGVsbSl7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsbSx7XHJcbiAgICAgICAgICAgIHpvb206IDEyLFxyXG4gICAgICAgICAgICBjZW50ZXIgOiAge2xhdDogLTM0LjYwMzcsIGxuZzogLTU4LjM4MTZ9IC8vIEJzIEFzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjb3JkcyA9IGV2ZW50LmxhdExuZ1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE1hcFBvaW50KHtsYXQ6Y29yZHMubGF0KCksbG5nIDogY29yZHMubG5nKCl9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgbmV4dFByb3BzLm1hcmtlcnMuZm9yRWFjaCggbWFya2VyID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3toZWlnaHQ6NTAwLHdpZHRoOjUwMH19IHJlZj17ZWxtPT50aGlzLnNob3dNYXAoZWxtKX0+PC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/Map.jsx\n");

/***/ }),

/***/ "./src/client/Result.jsx":
/*!*******************************!*\
  !*** ./src/client/Result.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// borra todas las paradas intermedias\nfunction beautifyRoute(points) {\n    console.log(points);\n    return points.reduce((route, point) => {\n        const resp = route.concat(point);\n\n        if (resp.length < 3) {\n            return resp;\n        }\n\n        if (resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id && resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id) {\n            resp.splice(resp.length - 2, 1);\n            return resp;\n        }\n        return resp;\n    }, []);\n}\n\nfunction Result(props) {\n    if (!props.route || !props.route.length) return null;\n    const route = beautifyRoute(props.route);\n    const lis = route.map((point, i) => {\n        const action = i % 2 == 0 ? \"Caminar hasta \" : \"Bajarse en \";\n        const label = point.name + \" del ramal #\" + point.branch_id;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"li\",\n            { key: i },\n            action + label\n        );\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"ul\",\n        null,\n        lis\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1Jlc3VsdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9SZXN1bHQuanN4P2M0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gYm9ycmEgdG9kYXMgbGFzIHBhcmFkYXMgaW50ZXJtZWRpYXNcclxuZnVuY3Rpb24gYmVhdXRpZnlSb3V0ZSggcG9pbnRzICl7XHJcbiAgICBjb25zb2xlLmxvZyhwb2ludHMpXHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSggKHJvdXRlLHBvaW50KT0+IHtcclxuICAgICAgICBjb25zdCByZXNwID0gcm91dGUuY29uY2F0KHBvaW50KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHJlc3AubGVuZ3RoIDwgMyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggcmVzcFtyZXNwLmxlbmd0aCAtIDJdLmJyYW5jaF9pZCA9PT0gcmVzcFtyZXNwLmxlbmd0aCAtIDFdLmJyYW5jaF9pZCAmJlxyXG4gICAgICAgICAgICByZXNwW3Jlc3AubGVuZ3RoIC0gM10uYnJhbmNoX2lkID09PSByZXNwW3Jlc3AubGVuZ3RoIC0gMl0uYnJhbmNoX2lkICl7XHJcbiAgICAgICAgICAgIHJlc3Auc3BsaWNlKCByZXNwLmxlbmd0aCAtIDIgLCAxIClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BcclxuXHJcbiAgICB9ICxbXSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCAocHJvcHMpe1xyXG4gICAgaWYoISBwcm9wcy5yb3V0ZSB8fCAhcHJvcHMucm91dGUubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBudWxsIFxyXG4gICAgY29uc3Qgcm91dGUgPSBiZWF1dGlmeVJvdXRlKHByb3BzLnJvdXRlKVxyXG4gICAgY29uc3QgbGlzID0gcm91dGUubWFwKCAocG9pbnQsaSkgID0+e1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGkgJSAyID09IDAgPyBcIkNhbWluYXIgaGFzdGEgXCIgOiBcIkJhamFyc2UgZW4gXCIgXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBwb2ludC5uYW1lICsgXCIgZGVsIHJhbWFsICNcIiArIHBvaW50LmJyYW5jaF9pZFxyXG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT57IGFjdGlvbiArIGxhYmVsIH08L2xpPlxyXG4gICAgfSlcclxuICAgIHJldHVybiA8dWw+e2xpc308L3VsPlxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/Result.jsx\n");

/***/ }),

/***/ "./src/client/RouteForm.jsx":
/*!**********************************!*\
  !*** ./src/client/RouteForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouterForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LatLongFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatLongFields */ \"./src/client/LatLongFields.jsx\");\n\n\n\nclass RouterForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            from: { lat: -34.55931882107318, lng: -58.456907455139174 },\n            to: { lat: -34.58049629262017, lng: -58.45130747926478 }\n        };\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(id, field, value) {\n        this.setState(prevState => {\n            const newField = Object.assign({}, prevState[id], { [field]: value });\n            return Object.assign({}, prevState, { [id]: newField });\n        });\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'from',\n                title: 'Desde',\n                value: this.state.from,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'to',\n                title: 'Hasta',\n                value: this.state.to,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'button',\n                { onClick: () => this.props.onFind(this.state) },\n                'Buscar ruta'\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1JvdXRlRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9Sb3V0ZUZvcm0uanN4PzRlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF0TG9uZ0ZpZWxkcyBmcm9tICcuL0xhdExvbmdGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnJvbSA6IHsgbGF0IDogLTM0LjU1OTMxODgyMTA3MzE4ICwgbG5nIDogLTU4LjQ1NjkwNzQ1NTEzOTE3NH0sXHJcbiAgICAgICAgICAgIHRvIDogeyBsYXQgOiAtMzQuNTgwNDk2MjkyNjIwMTcgLCBsbmcgOiAtNTguNDUxMzA3NDc5MjY0Nzh9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShpZCxmaWVsZCx2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggcHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RmllbGQgPSBPYmplY3QuYXNzaWduKHt9LHByZXZTdGF0ZVtpZF0se1tmaWVsZF06dmFsdWV9KVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxwcmV2U3RhdGUse1tpZF06bmV3RmllbGR9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMYXRMb25nRmllbGRzIFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZnJvbVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVzZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mcm9tfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPExhdExvbmdGaWVsZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIYXN0YVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25GaW5kKHRoaXMuc3RhdGUpfT5CdXNjYXIgcnV0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWNBO0FBQ0E7QUFuQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/RouteForm.jsx\n");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ \"./src/client/Map.jsx\");\n/* harmony import */ var _RouteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteForm */ \"./src/client/RouteForm.jsx\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Result */ \"./src/client/Result.jsx\");\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.findRoute = this.findRoute.bind(this);\n        this.updateMarkers = this.updateMarkers.bind(this);\n        this.state = { route: {} };\n        this.markers = [];\n    }\n\n    updateMarkers(stops) {\n        this.markers.forEach(m => m.setMap(null));\n        this.markers = [];\n        const points = stops.map(s => ({ lat: s.latitude, lng: s.longitude, id: s.id, title: s.name }));\n        points.forEach(p => {\n            const marker = new google.maps.Marker({\n                position: p,\n                map: map,\n                draggable: false,\n                label: \"\" + p.id,\n                title: \"\" + p.title\n            });\n            this.markers.push(marker);\n        });\n\n        const waypoints = points.slice(1, -1).map(p => ({ location: p, stopover: false }));\n\n        directionsService.route({\n            origin: points[0],\n            destination: points[points.length - 1],\n            waypoints: waypoints,\n            optimizeWaypoints: true,\n            travelMode: 'DRIVING'\n        }, function (response, status) {\n            if (status === 'OK') {\n                directionsDisplay.setDirections(response);\n                directionsDisplay.setOptions({\n                    suppressMarkers: true\n                });\n            } else {\n                console.error(response);\n            }\n        });\n    }\n\n    findRoute(routeData) {\n        fetch(\"/route\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify(routeData)\n        }).then(resp => resp.json()).then(route => {\n            this.setState({ route });\n            this.updateMarkers(route);\n        })\n        // TODO dibujar la ruta en el mapa\n        .catch(error => console.error(error.response.data));\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'main',\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { onFind: this.findRoute }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { route: this.state.route })\n        );\n    }\n\n}\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n// Mapa de google maps\n\nvar directionsDisplay = new google.maps.DirectionsRenderer();\nvar directionsService = new google.maps.DirectionsService();\n\nvar bsas = { lat: -34.6037, lng: -58.3816 };\n\nvar map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 12,\n    center: bsas\n});\ndirectionsDisplay.setMap(map);\n\n/*\r\nfetch(\"/allRoutes\")\r\n    .then(resp => resp.json())\r\n    .catch(console.error)\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2xpZW50L2luZGV4LmpzeD85OTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBNYXAgZnJvbSAnLi9NYXAnO1xyXG5pbXBvcnQgUm91dGVyRm9ybSBmcm9tICcuL1JvdXRlRm9ybSc7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9SZXN1bHQnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuZmluZFJvdXRlID0gdGhpcy5maW5kUm91dGUuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlTWFya2VycyA9IHRoaXMudXBkYXRlTWFya2Vycy5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgcm91dGU6IHt9IH1cclxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVNYXJrZXJzIChzdG9wcyl7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2gobT0+IG0uc2V0TWFwKG51bGwpKVxyXG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdXHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gc3RvcHMubWFwKCBzID0+ICh7bGF0OnMubGF0aXR1ZGUsbG5nOnMubG9uZ2l0dWRlLCBpZCA6IHMuaWQsIHRpdGxlOiBzLm5hbWV9KSlcclxuICAgICAgICBwb2ludHMuZm9yRWFjaCggcCA9PiB7ICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwLFxyXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIgKyBwLmlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIgKyBwLnRpdGxlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHdheXBvaW50cyA9ICBwb2ludHMuc2xpY2UoMSwgLTEpLm1hcCggcCA9PiAoeyBsb2NhdGlvbiA6IHAgLCBzdG9wb3ZlciA6IGZhbHNlfSkpXHJcblxyXG4gICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHtcclxuICAgICAgICAgICAgb3JpZ2luOiBwb2ludHNbMF0sXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdLFxyXG4gICAgICAgICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcclxuICAgICAgICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRydWUsXHJcbiAgICAgICAgICAgIHRyYXZlbE1vZGU6ICdEUklWSU5HJ1xyXG4gICAgICAgICAgICB9LGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm91dGUocm91dGVEYXRhKSB7XHJcbiAgICAgICAgZmV0Y2goXCIvcm91dGVcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyb3V0ZURhdGEpXHJcbiAgICAgICAgfSkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyb3V0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm91dGUgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFya2Vycyhyb3V0ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gZGlidWphciBsYSBydXRhIGVuIGVsIG1hcGFcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlckZvcm0gb25GaW5kPXt0aGlzLmZpbmRSb3V0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSZXN1bHQgcm91dGU9e3RoaXMuc3RhdGUucm91dGV9IC8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcbi8vIE1hcGEgZGUgZ29vZ2xlIG1hcHNcclxuXHJcbnZhciBkaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXI7XHJcbnZhciBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcclxuXHJcbnZhciBic2FzID0geyBsYXQ6IC0zNC42MDM3LCBsbmc6IC01OC4zODE2IH07XHJcblxyXG52YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgIHpvb206IDEyLFxyXG4gICAgY2VudGVyOiBic2FzXHJcbn0pXHJcbmRpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChtYXApO1xyXG5cclxuLypcclxuZmV0Y2goXCIvYWxsUm91dGVzXCIpXHJcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBdEVBO0FBQ0E7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/index.jsx\n");

/***/ })

/******/ });