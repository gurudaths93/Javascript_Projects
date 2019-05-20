/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Models/Answer.js":
/*!**************************!*\
  !*** ./Models/Answer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Answer; });\nclass Answer{\n    constructor(){\n       this.qids =[];\n       this.optionsSelected = [];\n       this.size = 0;\n    }\n\n    addAnswer(qid,option){\n        if(this.qids.indexOf(qid) == -1){\n            this.qids.push(qid);\n            this.size++;\n            this.optionsSelected.push(option);\n        }else{\n            this.optionsSelected[this.qids.indexOf(qid)] = option;\n        }\n        console.log(this.qids);\n        console.log(this.optionsSelected);\n    }\n\n     getAnswerId(qid){\n         let index = this.qids.indexOf(qid);\n         if (index !== \"-1\"){\n             return this.optionsSelected[index];\n         }else{\n             this.qids.push(qid);\n             this.optionsSelected(\"\");\n             return this.optionsSelected[index];\n         }\n    }\n\n     getAnsweredQuestionsCount(){\n         return this.size;\n    }\n\n\n\n} \n\n//# sourceURL=webpack:///./Models/Answer.js?");

/***/ }),

/***/ "./Models/Question.js":
/*!****************************!*\
  !*** ./Models/Question.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/QuestionBank.json */ \"./data/QuestionBank.json\");\nvar _data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/QuestionBank.json */ \"./data/QuestionBank.json\", 1);\n/* harmony import */ var _Views_QuestionView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Views/QuestionView */ \"./Views/QuestionView.js\");\n\n\n\nclass Question {\n     \n\n    constructor(){\n        this.allQuestions = [];\n        this.curQuestion = 0;\n    \n    }\n    \n    addQuestion(id,title,type,options){\n    let question =new Question();   \n    question.id =id;\n    question.title = title;\n    question.type = type;\n    question.options = [options];\n    return question;\n    }\n\n    static showQuestion(pos=0){\n       let qus =new Question(pos);\n       qus.loadQuestions();\n       _Views_QuestionView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showQuestion(qus.allQuestions,pos);\n\n    }\n     loadQuestions() {\n        document.getElementById('total_questions').innerText = _data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__[\"questions\"].length;\n\n        for(let i=0;i<_data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__[\"questions\"].length;i++){\n            this.allQuestions[i] = this.addQuestion(_data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__[\"questions\"][i].id,\n                _data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__[\"questions\"][i].title,\n                _data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__[\"questions\"][i].type,\n                _data_QuestionBank_json__WEBPACK_IMPORTED_MODULE_0__[\"questions\"][i].options);\n        }\n        \n    }\n    \n}\n\n//# sourceURL=webpack:///./Models/Question.js?");

/***/ }),

/***/ "./Views/QuestionView.js":
/*!*******************************!*\
  !*** ./Views/QuestionView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuestionView; });\n/* harmony import */ var _Models_Answer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Answer */ \"./Models/Answer.js\");\n\nlet ans = new _Models_Answer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); \nlet num = \"\";\n\nclass QuestionView{\n    static disableNextButton(){\n        document.querySelector('.button_next').disabled = true;\n        document.querySelector('.button_next').style.backgroundColor = 'grey';\n    }\n\n    static enableNextButton(){\n        document.querySelector('.button_next').disabled = false;\n        document.querySelector('.button_next').style.backgroundColor = 'blue';\n    }\n\n    static enablePrevButton(){\n        document.querySelector('.button_prev').disabled = false;\n        document.querySelector('.button_prev').style.backgroundColor = 'orange';\n    }\n\n    static disablePrevButton(){\n        document.querySelector('.button_prev').disabled = true;\n        document.querySelector('.button_prev').style.backgroundColor = 'grey';\n    }\n\n    \n    static showQuestion(questions,pos){\n        let qstnsAnswered = ans.getAnsweredQuestionsCount();\n        document.getElementById(\"ques_attempted\").innerHTML= qstnsAnswered;\n        num=ans.getAnswerId(questions[pos].id);\n       if((pos!== 0 && ans.getAnswerId(questions[pos-1].id) == undefined)){\n        this.disableNextButton();\n        alert(\"please choose an option\");\n       }else{\n        this.enableNextButton();\n        document.getElementById(\"question\").innerHTML=\"\";\n        if(document.getElementById(\"answer\")){\n            document.getElementById(\"answer\").innerHTML=\"\";\n        }\n        document.getElementById(\"question\").innerHTML =`<h1> ${questions[pos].title}</h1>`;\n        \n        if(questions[pos].type === \"radiogroup\"){\n            let radioElement = document.createRange().createContextualFragment(\n                this.createRadioGroupElements(questions[pos].options[0],questions[pos].id,num), \n            );\n            document.getElementById(\"question\").appendChild(radioElement);\n\n        }else{\n            let dropdownElement = document.createRange().createContextualFragment(\n                this.createDropdownElements(questions[pos].options[0],questions[pos].id,num), \n            );\n            document.getElementById(\"question\").appendChild(dropdownElement);        }\n\n            document.querySelector('#answer').addEventListener('change',event =>{\n            \n            ans.addAnswer(event.target.name,event.target.value);\n            qstnsAnswered = ans.getAnsweredQuestionsCount();\n            document.getElementById(\"ques_attempted\").innerHTML= qstnsAnswered;\n            if(qstnsAnswered == questions.length){\n                this.disableNextButton();\n                document.querySelector('.submit').style.display = 'block';\n            }\n            if (!(pos == questions.length -1)){\n                this.enableNextButton();\n            }\n            \n        });\n        document.querySelector('.submit').style.display = 'none';\n        this.enablePrevButton();\n        if(pos === 0 && questions.length > 1){\n            document.querySelector('.submit').style.display = 'none';\n            this.disablePrevButton();\n            document.querySelector('.button_next').disabled = false;\n        }else{\n            if(pos === questions.length-1 && qstnsAnswered == questions.length){\n                this.disableNextButton();\n                document.querySelector('.submit').style.display = 'block';\n        }\n            this.enablePrevButton();\n        }\n        document.querySelector('.button_prev').id=pos-1;\n        document.querySelector('.button_next').id=pos+1;\n    }\n\n    }\n    \n    \n    static createRadioGroupElements(options,qid,num){\n\n        if (num == -1 || num == undefined || num == null){\n            this.disableNextButton();\n        }else{\n            this.enableNextButton();\n        }\n\n        let ele='<div id=\"answer\">';\n        for(let i=0;i<options.length;i++){\n            ele += `<input type=\"radio\" name =\"${qid}\" value=\"${i}\"`;\n            if (num == i) {\n                ele+=`checked=\"true\"`;\n            }\n            ele+=`>${options[i]}</input>`;\n\n        }  \n        ele+='</div>';\n        return ele;\n\n\n    }\n\n    static createDropdownElements(options,qid,num){\n        if (num == -1 || num == undefined || num == null ){\n                this.disableNextButton();\n            }else{\n                this.enableNextButton();\n            }\n        let ele=`<div id=\"answer\"><select name=${qid}>`;\n        for(let i=0;i<options.length;i++){\n            ele += `<option value=\"${i}\"`;\n            if (num == -1 && i==0) {\n                ele+=`selected=\"selected\"`;\n            }else if(num == i && i!= 0){\n                ele+=`selected=\"selected\"`;\n            }\n            ele+=`>${options[i]}</option>`;\n        }\n        ele+='</select></div>';\n        return ele;\n\n    }\n\n}\n\n//# sourceURL=webpack:///./Views/QuestionView.js?");

/***/ }),

/***/ "./data/QuestionBank.json":
/*!********************************!*\
  !*** ./data/QuestionBank.json ***!
  \********************************/
/*! exports provided: questions, default */
/***/ (function(module) {

eval("module.exports = {\"questions\":[{\"id\":\"Q-101\",\"title\":\"What is India's Capital\",\"type\":\"radiogroup\",\"options\":[\"Delhi\",\"Mumbai\",\"Kolkatta\",\"Pune\"]},{\"id\":\"Q-103\",\"title\":\"Entomology is the science that studies\",\"type\":\"dropdown\",\"options\":[\"Behavior of human beings\",\"Insects\",\"The origin and history of technical and scientific terms\",\"The formation of rocks\"]},{\"id\":\"Q-104\",\"title\":\"I love\",\"type\":\"radiogroup\",\"options\":[\"Computer\",\"Nature\",\"Books\",\"All of the above\"]}]};\n\n//# sourceURL=webpack:///./data/QuestionBank.json?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Models/Question */ \"./Models/Question.js\");\n\nwindow.addEventListener('load',() =>{\n    _Models_Question__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showQuestion(0);\n\n\n    document.querySelector('.button_next').addEventListener('click',event =>{\n            event.preventDefault();\n            _Models_Question__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showQuestion(parseInt(event.target.id));\n       \n    });\n\n    document.querySelector('.button_prev').addEventListener('click',event =>{\n        event.preventDefault();\n        _Models_Question__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showQuestion(parseInt(event.target.id));\n    });\n\n    \n\n    \n    \n    \n   \n    \n})\n\n\n\n    \n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });