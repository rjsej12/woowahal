/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/pages/main/index.js":
/*!************************************!*\
  !*** ./src/js/pages/main/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/ClassListHandler.js */ \"./src/js/utils/ClassListHandler.js\");\n/* harmony import */ var _utils_Carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Carousel.js */ \"./src/js/utils/Carousel.js\");\n/* harmony import */ var _utils_Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Storage.js */ \"./src/js/utils/Storage.js\");\n\n\n\n\nconst carousels = document.querySelectorAll(\".carousel\");\nconst infoBtn = document.querySelector(\".more-info-btn\");\n\nconst addr = (0,_utils_Storage_js__WEBPACK_IMPORTED_MODULE_2__.getAddr)();\n\n(()=>{\n\n    (0,_utils_Carousel_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(carousels);\n\n    document.querySelector(\".order-address\").innerText = addr;\n\n    infoBtn.addEventListener(\"click\", (e)=>{\n        (0,_utils_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.toggleClassList)(infoBtn.querySelector(\"i\"),\"fa-chevron-down\");\n        (0,_utils_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.toggleClassList)(infoBtn.querySelector(\"i\"),\"fa-chevron-up\");\n        (0,_utils_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.toggleClassList)(document.querySelector(\".company-more-info\"), \"is-visible\")\n    });\n\n})();\n\n//# sourceURL=webpack:///./src/js/pages/main/index.js?");

/***/ }),

/***/ "./src/js/utils/Carousel.js":
/*!**********************************!*\
  !*** ./src/js/utils/Carousel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassListHandler.js */ \"./src/js/utils/ClassListHandler.js\");\n/* harmony import */ var _Slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slide.js */ \"./src/js/utils/Slide.js\");\n/* harmony import */ var _mock_carousel_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/carousel.json */ \"./src/js/mock/carousel.json\");\n\n\n\n\nconst makeSlide = (slider, item, idx) => {\n    \n    const slide = document.createElement(\"li\");\n    const slideAncher = document.createElement(\"a\");\n        const slideTitle = document.createElement(\"h3\");\n        const slideContent = document.createElement(\"p\");\n\n        slideAncher.appendChild(slideTitle);\n        slideAncher.appendChild(slideContent);\n        slideTitle.innerText = item.title;\n        slideContent.innerText = item.content;\n        slideAncher.style.backgroundImage = `url(${item.url})`;\n        slideAncher.href=\"#\";\n\n    slide.appendChild(slideAncher);\n\n    (0,_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.addClassList)(slide, \"carousel-slide\");\n    if(idx === 0 ) {(0,_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.addClassList)(slide, \"is-active\");}\n    \n    slider.appendChild(slide);\n}\nconst makeOffscreen = (carousel, urls) => {\n    try{\n        \n        const offscreen = carousel.querySelector(\".offscreen-text\");\n        offscreen.innerText = `1 / ${urls.length}`;\n    }catch (e){\n        console.error(\"ss\");\n    }finally{\n    }\n}\nconst toggleActive = (curr, comp, str) => {\n    if(comp.tagName === 'LI'){\n        (0,_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.toggleClassList)(curr, str);\n        (0,_ClassListHandler_js__WEBPACK_IMPORTED_MODULE_0__.toggleClassList)(comp, str);\n        comp.querySelector(\"a\").focus();\n    }\n}\n\nconst Carousel = (carousels) => {\n\n    for(let carousel of carousels){\n        const slider = carousel.querySelector(\".carousel-slider\");\n        if(carousel.classList.contains(\"promotion\")){\n\n            const promotion = _mock_carousel_json__WEBPACK_IMPORTED_MODULE_2__.promotion;\n            promotion.map((item,idx)=>{\n                makeSlide(slider, item, idx);\n            });\n\n            makeOffscreen(carousel, promotion);\n        }\n        if(carousel.classList.contains(\"advertisement\")){\n            const advertisement = _mock_carousel_json__WEBPACK_IMPORTED_MODULE_2__.advertisement;\n            advertisement.map((item,idx)=>{\n                makeSlide(slider, item, idx);\n            });\n\n            makeOffscreen(carousel, advertisement);\n        }\n\n        carousel.addEventListener(\"keydown\",(e)=>{\n            const keyCode = e.keyCode;\n            const currentActive = carousel.querySelector(\".is-active\");\n            //right\n            if(keyCode === 39){\n                const nextActive = currentActive.nextSibling;\n                toggleActive(currentActive,nextActive,\"is-active\");\n            }\n            // LEFT\n            if(keyCode === 37){\n                const prevActive = currentActive.previousSibling;\n                toggleActive(currentActive,prevActive,\"is-active\");\n            }\n\n           \n        });\n\n        (0,_Slide_js__WEBPACK_IMPORTED_MODULE_1__.setSlideEffect)(carousel, toggleActive);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\n\n\n//# sourceURL=webpack:///./src/js/utils/Carousel.js?");

/***/ }),

/***/ "./src/js/utils/ClassListHandler.js":
/*!******************************************!*\
  !*** ./src/js/utils/ClassListHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClassList\": () => (/* binding */ addClassList),\n/* harmony export */   \"ctrlChevron\": () => (/* binding */ ctrlChevron),\n/* harmony export */   \"ctrlIsactive\": () => (/* binding */ ctrlIsactive),\n/* harmony export */   \"removeClassList\": () => (/* binding */ removeClassList),\n/* harmony export */   \"toggleClassList\": () => (/* binding */ toggleClassList)\n/* harmony export */ });\n\nconst addClassList = (obj, str) => {\n    obj.classList.add(str);\n}\n\nconst removeClassList = (obj, str) => {\n    obj.classList.remove(str);\n}\n\nconst toggleClassList = (obj, str) => {\n    obj.classList.toggle(str);\n}\n\nconst ctrlIsactive = (obj) =>{\n    toggleClassList(obj, \"is-active\");\n}\n\nconst ctrlChevron = (ico) =>{\n    toggleClassList(ico, \"fa-chevron-down\");\n    toggleClassList(ico, \"fa-chevron-up\");\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/ClassListHandler.js?");

/***/ }),

/***/ "./src/js/utils/Slide.js":
/*!*******************************!*\
  !*** ./src/js/utils/Slide.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setSlideEffect\": () => (/* binding */ setSlideEffect),\n/* harmony export */   \"slideEffect\": () => (/* binding */ slideEffect)\n/* harmony export */ });\n\nconst slideEffect = (con)=>{\n    let downX, upX;\n    con.addEventListener(\"mousedown\",(e)=>{\n        downX = e.x;\n    });\n    con.addEventListener(\"mouseup\",(e)=>{\n        upX = e.x;\n\n        let left = con.scrollLeft;\n        con.scrollBehavior = \"smooth\";\n        if(downX > upX + 5){\n            con.scrollTo({left: left + 50, behavior:\"smooth\"});\n        }else{\n            con.scrollTo({left: left - 50, behavior:\"smooth\"});\n        }\n    });\n    \n};\n\nconst setSlideEffect=(carousel, toggleActive)=>{\n    let start;\n   \n    carousel.addEventListener(\"dragstart\",(e)=>{\n        start = e.x;\n    });\n    carousel.addEventListener(\"touchstart\",(e)=>{\n        start = e.x;\n    });\n    function process(e){\n        const currentActive = carousel.querySelector(\".is-active\");\n        if(start + 120 < e.x ){\n            const nextActive = currentActive.nextSibling;\n            toggleActive(currentActive,nextActive,\"is-active\");\n        }\n        \n        if(start - 120 > e.x){\n            const prevActive = currentActive.previousSibling;\n            toggleActive(currentActive,prevActive,\"is-active\");\n        }\n    }\n    carousel.addEventListener(\"dragend\",(e)=>{\n        process(e);\n    });\n    carousel.addEventListener(\"touchend\",(e)=>{\n        process(e);\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/Slide.js?");

/***/ }),

/***/ "./src/js/utils/Storage.js":
/*!*********************************!*\
  !*** ./src/js/utils/Storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAddr\": () => (/* binding */ getAddr),\n/* harmony export */   \"getCartStorage\": () => (/* binding */ getCartStorage),\n/* harmony export */   \"setCartStorage\": () => (/* binding */ setCartStorage)\n/* harmony export */ });\n\nconst setCartStorage = (obj) => {\n    localStorage.setItem(\"cart\",JSON.stringify(obj));\n}\nconst getCartStorage = () => {\n    const res = localStorage.getItem(\"cart\");\n    if(!res){\n        location.href = \"/category.html\"\n    }\n\n    return JSON.parse(res);\n}\n\nconst setAddr = () => {\n    localStorage.setItem(\"addr\", \"서울시 동대문구 XX동 어디어디 땡땡호\");\n\n}\nconst getAddr = () => {\n    let res = localStorage.getItem(\"addr\");\n    if(!res){\n        setAddr();\n        res = getAddr();\n    }\n    return res;\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/Storage.js?");

/***/ }),

/***/ "./src/js/mock/carousel.json":
/*!***********************************!*\
  !*** ./src/js/mock/carousel.json ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"promotion\":[{\"url\":\"/asset/webp/배너1.webp\",\"title\":\"당신의 마음을 전해보세요\",\"content\":\"배민 첫 이용시 5000원 할인\"},{\"url\":\"/asset/webp/메인광고배너.webp\",\"title\":\"당신의 마음을 전해보세요\",\"content\":\"배민 첫 이용시 5000원 할인\"}],\"advertisement\":[{\"url\":\"/asset/webp/메인광고배너.webp\",\"title\":\"당신의 마음을 전해보세요\",\"content\":\"배민 첫 이용시 5000원 할인\"},{\"url\":\"/asset/webp/배너1.webp\",\"title\":\"당신의 마음을 전해보세요\",\"content\":\"배민 첫 이용시 5000원 할인\"}]}');\n\n//# sourceURL=webpack:///./src/js/mock/carousel.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/main/index.js");
/******/ 	
/******/ })()
;