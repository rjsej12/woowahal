/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/pages/store_list/index.js":
/*!******************************************!*\
  !*** ./src/js/pages/store_list/index.js ***!
  \******************************************/
/***/ (() => {

eval("\nconst categorys = document.querySelector(\".st-list-category\");\nconst scrolList = document.querySelector(\".st-list-scroll\");\nconst sortbys = document.querySelector(\".st-list-sortbys\");\n\n(()=>{\n    console.log(\"asdasd\");\n    categorys.addEventListener(\"wheel\",(e)=>{\n        const direction = e.deltaY;\n        if(direction > 0){\n            categorys.scrollLeft += 10;\n            \n        }else{\n            categorys.scrollLeft -= 10;\n        }\n    });\n\n    categorys.addEventListener(\"keydown\",(e)=>{\n       const keyCode = e.keyCode;\n       const focused = categorys.querySelector(\":focus\");\n\n       if(keyCode === 9){\n        sortbys.focus();\n       }\n\n       if(focused){\n           if(focused.tagName === \"BUTTON\"){\n               if(keyCode===37){\n                   focused.parentElement.previousElementSibling.firstChild.focus();\n                }\n            if(keyCode==39){\n                    focused.parentElement.nextElementSibling.firstChild.focus();\n\n               }\n           }\n       }\n\n\n    });\n\n    scrolList.addEventListener(\"keydown\",(e)=>{\n        const keyCode = e.keyCode;\n        const focused = scrolList.querySelector(\":focus\");\n        \n        // console.log(focused);\n        // if(focused){\n        //     if(focused.tagName === \"BUTTON\"){\n        //         if(keyCode===37){\n        //             console.log(focused);\n        //             focused.parentElement.previousElementSibling.firstChild.focus();\n        //         }\n        //      if(keyCode==39){\n        //              focused.parentElement.nextElementSibling.firstChild.focus();\n \n        //         }\n        //     }\n        // }\n \n     });\n\n})();\n\n//# sourceURL=webpack:///./src/js/pages/store_list/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pages/store_list/index.js"]();
/******/ 	
/******/ })()
;