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

/***/ "./src/js/pages/store_list/index.js":
/*!******************************************!*\
  !*** ./src/js/pages/store_list/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mock_stores_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mock/stores.json */ \"./src/js/mock/stores.json\");\n/* harmony import */ var _utils_Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Slide */ \"./src/js/utils/Slide.js\");\n\n\n\nconst categorys = document.querySelector(\".st-list-category\");\nconst scrolList = document.querySelector(\".st-list-scroll\");\nconst sortbys = document.querySelector(\".st-list-sortbys\");\nconst list = document.querySelector(\".st-list-scroll\");\n\nconst makeList = (store) =>{\n    const res = document.createElement(\"li\");\n    res.className =\"scroll-item container-img-info left\";\n    const anchor = document.createElement(\"a\");\n    anchor.href = `/store_detail.html?id=${store.id}`;\n    anchor.innerHTML =`\n        <img src=\"${store.url}\" alt=\"${store.alt}\" />\n        <ul>\n            <li class=\"scroll-item-name\">${store.title}</li>\n            <li class=\"scroll-item-menu\"><i class=\"fa-solid fa-star-sharp\"></i>5.0(100+) 대부 가래떡 떡볶이, 부산꼬지어묵, 치즈세트</li>\n            <li>최소주문 ${store.minprice}원, 배달팁 ${store.deliverytip}원</li>\n        </ul>\n        <div class=\"scroll-item-time\" aria-label=\"소요 시간\"><i class=\"fa-light fa-clock\"></i>38~53분</div>\n    `;\n    res.appendChild(anchor);\n    return res;\n}\n\n(()=>{\n    categorys.addEventListener(\"wheel\",(e)=>{\n        const direction = e.deltaY;\n        if(direction > 0){\n            console.log(categorys.scrollLeft);\n            categorys.scrollTo({left: 50, behavior:smooth});\n            \n        }else{\n            categorys.scrollLeft -= 10;\n        }\n    });\n\n\n    (0,_utils_Slide__WEBPACK_IMPORTED_MODULE_1__.slideEffect)(categorys);\n\n    categorys.addEventListener(\"keydown\",(e)=>{\n       const keyCode = e.keyCode;\n       const focused = categorys.querySelector(\":focus\");\n\n       if(keyCode === 9){\n        sortbys.focus();\n       }\n\n       if(focused){\n           if(focused.tagName === \"BUTTON\"){\n               if(keyCode===37){\n                   focused.parentElement.previousElementSibling.firstChild.focus();\n                }\n            if(keyCode==39){\n                    focused.parentElement.nextElementSibling.firstChild.focus();\n\n               }\n           }\n       }\n\n\n    });\n\n    scrolList.addEventListener(\"keydown\",(e)=>{\n        const keyCode = e.keyCode;\n        const focused = scrolList.querySelector(\":focus\");\n        \n        // console.log(focused);\n        // if(focused){\n        //     if(focused.tagName === \"BUTTON\"){\n        //         if(keyCode===37){\n        //             console.log(focused);\n        //             focused.parentElement.previousElementSibling.firstChild.focus();\n        //         }\n        //      if(keyCode==39){\n        //              focused.parentElement.nextElementSibling.firstChild.focus();\n \n        //         }\n        //     }\n        // }\n \n     });\n\n     for(let i of _mock_stores_json__WEBPACK_IMPORTED_MODULE_0__.stores){\n        list.appendChild(makeList(i));\n     }\n\n})();\n\n//# sourceURL=webpack:///./src/js/pages/store_list/index.js?");

/***/ }),

/***/ "./src/js/utils/Slide.js":
/*!*******************************!*\
  !*** ./src/js/utils/Slide.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setSlideEffect\": () => (/* binding */ setSlideEffect),\n/* harmony export */   \"slideEffect\": () => (/* binding */ slideEffect)\n/* harmony export */ });\n\nconst slideEffect = (con)=>{\n    let downX, upX;\n    con.addEventListener(\"mousedown\",(e)=>{\n        downX = e.x;\n    });\n    con.addEventListener(\"mouseup\",(e)=>{\n        upX = e.x;\n\n        let left = con.scrollLeft;\n        con.scrollBehavior = \"smooth\";\n        if(downX > upX + 5){\n            con.scrollTo({left: left + 50, behavior:\"smooth\"});\n        }else{\n            con.scrollTo({left: left - 50, behavior:\"smooth\"});\n        }\n    });\n    \n};\n\nconst setSlideEffect=(carousel, toggleActive)=>{\n    let start;\n   \n    carousel.addEventListener(\"dragstart\",(e)=>{\n        start = e.x;\n    });\n    carousel.addEventListener(\"touchstart\",(e)=>{\n        start = e.x;\n    });\n    function process(e){\n        const currentActive = carousel.querySelector(\".is-active\");\n        if(start + 120 < e.x ){\n            const nextActive = currentActive.nextSibling;\n            toggleActive(currentActive,nextActive,\"is-active\");\n        }\n        \n        if(start - 120 > e.x){\n            const prevActive = currentActive.previousSibling;\n            toggleActive(currentActive,prevActive,\"is-active\");\n        }\n    }\n    carousel.addEventListener(\"dragend\",(e)=>{\n        process(e);\n    });\n    carousel.addEventListener(\"touchend\",(e)=>{\n        process(e);\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/Slide.js?");

/***/ }),

/***/ "./src/js/mock/stores.json":
/*!*********************************!*\
  !*** ./src/js/mock/stores.json ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"stores\":[{\"title\":\"제로베이스 떡볶이\",\"id\":1,\"url\":\"/asset/webp/store/떡볶이.webp\",\"rating\":70,\"minprice\":12000,\"deliverytip\":3000,\"distance\":3.2,\"alt\":\"제로베이스 떡볶이 가게의 썸네일 이미지\",\"category\":\"np분식\"},{\"title\":\"피자헛\",\"id\":100,\"url\":\"/asset/webp/store/pizzahut/logo.webp\",\"rating\":65,\"minprice\":20000,\"deliverytip\":3500,\"distance\":1.7,\"alt\":\"피자헛 가게의 로고 이미지\",\"category\":\"피자\"},{\"title\":\"덩기덕쿵떡국\",\"id\":2,\"url\":\"/asset/webp/store/덩기덕쿵떡국.webp\",\"rating\":73,\"minprice\":10000,\"deliverytip\":1500,\"distance\":1.1,\"alt\":\"덩기덕쿵떡국 가게의 썸네일 이미지\",\"category\":\"백반 죽 국수\"},{\"title\":\"뱃살삼겹살\",\"id\":3,\"url\":\"/asset/webp/store/뱃살삼겹살.webp\",\"rating\":72,\"minprice\":18000,\"deliverytip\":2500,\"distance\":1.9,\"alt\":\"뱃살삼결살 가게의 썸네일 이미지\",\"category\":\"고기 구이\"},{\"title\":\"비둘기치킨\",\"id\":4,\"url\":\"/asset/webp/store/비둘기치킨.webp\",\"rating\":88,\"minprice\":21000,\"deliverytip\":2300,\"distance\":2.5,\"alt\":\"비둘기치킨 가게의 썸네일 이미지\",\"category\":\"치킨\"},{\"title\":\"알라딘피자\",\"id\":5,\"url\":\"/asset/webp/store/알라딘피자.webp\",\"rating\":91,\"minprice\":19900,\"deliverytip\":3000,\"distance\":1.9,\"alt\":\"알라딘피자 가게의 썸네일 이미지\",\"category\":\"피자\"},{\"title\":\"어머니도좋아하는짜장면\",\"id\":6,\"url\":\"/asset/webp/store/어머니도좋아하는짜장면.webp\",\"rating\":83,\"minprice\":11000,\"deliverytip\":1000,\"distance\":0.4,\"alt\":\"어머니도좋아하는짜장면 가게의 썸네일 이미지\",\"category\":\"중식\"},{\"title\":\"힘쎈장어\",\"id\":7,\"url\":\"/asset/webp/store/오늘밤힘내장어.webp\",\"rating\":79,\"minprice\":30000,\"deliverytip\":4000,\"distance\":3.7,\"alt\":\"힘쎈장어 가게의 썸네일 이미지\",\"category\":\"돈까스 회 일식\"},{\"title\":\"울라비빔밥\",\"id\":8,\"url\":\"/asset/webp/store/울라비빔밥.webp\",\"rating\":77,\"minprice\":15000,\"deliverytip\":2900,\"distance\":2.2,\"alt\":\"울라비빔밥 가게의 썸네일 이미지\",\"category\":\"아시안\"},{\"title\":\"전주콩나물국밥\",\"id\":9,\"url\":\"/asset/webp/store/전주콩나물국밥.webp\",\"rating\":94,\"minprice\":12000,\"deliverytip\":1500,\"distance\":1.2,\"alt\":\"전주콩나물국밥 가게의 썸네일 이미지\",\"category\":\"아시안\"},{\"title\":\"제육대가\",\"id\":10,\"url\":\"/asset/webp/store/제육대가.webp\",\"rating\":89,\"minprice\":10000,\"deliverytip\":2000,\"distance\":1.5,\"alt\":\"제육대가 가게의 썸네일 이미지\",\"category\":\"백반 죽 국수\"},{\"title\":\"평양냉면\",\"id\":11,\"url\":\"/asset/webp/store/평양냉면.webp\",\"rating\":87,\"minprice\":20000,\"deliverytip\":2500,\"distance\":2.3,\"alt\":\"평양냉면 가게의 썸네일 이미지\",\"category\":\"아시안\"},{\"title\":\"홀라닭백숙\",\"id\":12,\"url\":\"/asset/webp/store/홀라닭백숙.webp\",\"rating\":76,\"minprice\":30000,\"deliverytip\":3000,\"distance\":2.4,\"alt\":\"훌라닭백숙 가게의 썸네일 이미지\",\"category\":\"아시안\"},{\"title\":\"홍콩라면\",\"id\":13,\"url\":\"/asset/webp/store/홍콩라면.webp\",\"rating\":81,\"minprice\":10000,\"deliverytip\":2000,\"distance\":1.7,\"alt\":\"홍콩라면 가게의 썸네일 이미지\",\"category\":\"중식\"}]}');\n\n//# sourceURL=webpack:///./src/js/mock/stores.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/pages/store_list/index.js");
/******/ 	
/******/ })()
;