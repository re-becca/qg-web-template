(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[51],{

/***/ "./node_modules/@storybook/components/dist/esm/syntaxhighlighter-b07b042a.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@storybook/components/dist/esm/syntaxhighlighter-b07b042a.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxHighlighter": () => (/* binding */ SyntaxHighlighter),
/* harmony export */   "createCopyToClipboardFunction": () => (/* binding */ createCopyToClipboardFunction),
/* harmony export */   "default": () => (/* binding */ SyntaxHighlighter)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.from-code-point.js */ "./node_modules/core-js/modules/es.string.from-code-point.js");
/* harmony import */ var core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.global-this.js */ "./node_modules/core-js/modules/esnext.global-this.js");
/* harmony import */ var core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./index-681e4b07.js */ "./node_modules/@storybook/components/dist/esm/index-681e4b07.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @storybook/client-logger */ "./node_modules/@storybook/client-logger/dist/esm/index.js");
/* harmony import */ var _storybook_theming__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @storybook/theming */ "./node_modules/@storybook/theming/dist/esm/index.js");
/* harmony import */ var memoizerific__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! memoizerific */ "./node_modules/memoizerific/memoizerific.js");
/* harmony import */ var memoizerific__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _storybook_csf__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @storybook/csf */ "./node_modules/@storybook/csf/dist/index.js");
/* harmony import */ var _storybook_csf__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_storybook_csf__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_38__);


function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen); }

function _arrayLikeToArray2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }










































var jsx_1 = jsx;
jsx.displayName = 'jsx';
jsx.aliases = [];

function jsx(Prism) {
  (function (Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript);
    var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
    var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
    var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    /**
     * @param {string} source
     * @param {string} [flags]
     */

    function re(source, flags) {
      source = source.replace(/<S>/g, function () {
        return space;
      }).replace(/<BRACES>/g, function () {
        return braces;
      }).replace(/<SPREAD>/g, function () {
        return spread;
      });
      return RegExp(source, flags);
    }

    spread = re(spread).source;
    Prism.languages.jsx = Prism.languages.extend('markup', javascript);
    Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
    Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
    Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
    Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
    Prism.languages.insertBefore('inside', 'attr-name', {
      spread: {
        pattern: re(/<SPREAD>/.source),
        inside: Prism.languages.jsx
      }
    }, Prism.languages.jsx.tag);
    Prism.languages.insertBefore('inside', 'special-attr', {
      script: {
        // Allow for two levels of nesting
        pattern: re(/=<BRACES>/.source),
        alias: 'language-javascript',
        inside: {
          'script-punctuation': {
            pattern: /^=(?=\{)/,
            alias: 'punctuation'
          },
          rest: Prism.languages.jsx
        }
      }
    }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

    var stringifyToken = function stringifyToken(token) {
      if (!token) {
        return '';
      }

      if (typeof token === 'string') {
        return token;
      }

      if (typeof token.content === 'string') {
        return token.content;
      }

      return token.content.map(stringifyToken).join('');
    };

    var walkTokens = function walkTokens(tokens) {
      var openedTags = [];

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        var notTagNorBrace = false;

        if (typeof token !== 'string') {
          if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                // Pop matching opening tag
                openedTags.pop();
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') ;else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                });
              }
            }
          } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++;
          } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--;
          } else {
            notTagNorBrace = true;
          }
        }

        if (notTagNorBrace || typeof token === 'string') {
          if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token); // And merge text with adjacent text

            if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
              plainText += stringifyToken(tokens[i + 1]);
              tokens.splice(i + 1, 1);
            }

            if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
              plainText = stringifyToken(tokens[i - 1]) + plainText;
              tokens.splice(i - 1, 1);
              i--;
            }

            tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
          }
        }

        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content);
        }
      }
    };

    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return;
      }

      walkTokens(env.tokens);
    });
  })(Prism);
}

var jsx$1 = jsx_1;
var bash_1 = bash;
bash.displayName = 'bash';
bash.aliases = ['shell'];

function bash(Prism) {
  (function (Prism) {
    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
    // + LC_ALL, RANDOM, REPLY, SECONDS.
    // + make sure PS1..4 are here as they are not always set,
    // - some useless things.
    var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
    var commandAfterHeredoc = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: true,
      alias: 'punctuation',
      // this looks reasonably well in all themes
      inside: null // see below

    };
    var insideString = {
      bash: commandAfterHeredoc,
      environment: {
        pattern: RegExp('\\$' + envVars),
        alias: 'constant'
      },
      variable: [// [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: true,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [{
            pattern: /(^\$\(\([\s\S]+)\)\)/,
            lookbehind: true
          }, /^\$\(\(/],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      }, // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: true,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      }, // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: true,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp('(\\{)' + envVars),
            lookbehind: true,
            alias: 'constant'
          }
        }
      }, /\$(?:\w+|[#?*!@$])/],
      // Escape sequences from echo and printf's manuals, and escaped quotes.
      entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    };
    Prism.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: 'important'
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      'function-name': [// a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: true,
        alias: 'function'
      }, {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: 'function'
      }],
      // Highlight variable names as variables in for and select beginnings.
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: true
      },
      // Highlight variable names as variables in the left-hand part
      // of assignments (“=” and “+=”).
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
            lookbehind: true,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: true
      },
      string: [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      }, // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: true,
        greedy: true,
        inside: {
          bash: commandAfterHeredoc
        }
      }, // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      }, {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: true,
        greedy: true
      }, {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: true,
        inside: {
          entity: insideString.entity
        }
      }],
      environment: {
        pattern: RegExp('\\$?' + envVars),
        alias: 'constant'
      },
      variable: insideString.variable,
      function: {
        pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      keyword: {
        pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      builtin: {
        pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: true,
        // Alias added to make those easier to distinguish from strings.
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      'file-descriptor': {
        pattern: /\B&\d\b/,
        alias: 'important'
      },
      operator: {
        // Lots of redirections here, but not just that.
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          'file-descriptor': {
            pattern: /^\d/,
            alias: 'important'
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    };
    commandAfterHeredoc.inside = Prism.languages.bash;
    /* Patterns in command substitution. */

    var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
    var inside = insideString.variable[1].inside;

    for (var i = 0; i < toBeCopied.length; i++) {
      inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
    }

    Prism.languages.shell = Prism.languages.bash;
  })(Prism);
}

var bash$1 = bash_1;
var css_1 = css$1;
css$1.displayName = 'css';
css$1.aliases = [];

function css$1(Prism) {
  (function (Prism) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          } // See rest below

        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      selector: {
        pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
        lookbehind: true
      },
      string: {
        pattern: string,
        greedy: true
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      punctuation: /[(){};:,]/
    };
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;

    if (markup) {
      markup.tag.addInlined('style', 'css');
      markup.tag.addAttribute('style', 'css');
    }
  })(Prism);
}

var css$2 = css_1;
var jsExtras_1 = jsExtras;
jsExtras.displayName = 'jsExtras';
jsExtras.aliases = [];

function jsExtras(Prism) {
  (function (Prism) {
    Prism.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
        lookbehind: true,
        alias: ['function-variable', 'method', 'function', 'property-access']
      }
    });
    Prism.languages.insertBefore('javascript', 'function', {
      method: {
        pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
        lookbehind: true,
        alias: ['function', 'property-access']
      }
    });
    Prism.languages.insertBefore('javascript', 'constant', {
      'known-class-name': [{
        // standard built-ins
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
        alias: 'class-name'
      }, {
        // errors
        pattern: /\b(?:[A-Z]\w*)Error\b/,
        alias: 'class-name'
      }]
    });
    /**
     * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
     *
     * @param {string} source
     * @param {string} [flags]
     * @returns {RegExp}
     */

    function withId(source, flags) {
      return RegExp(source.replace(/<ID>/g, function () {
        return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
      }), flags);
    }

    Prism.languages.insertBefore('javascript', 'keyword', {
      imports: {
        // https://tc39.es/ecma262/#sec-imports
        pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      exports: {
        // https://tc39.es/ecma262/#sec-exports
        pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    });
    Prism.languages.javascript['keyword'].unshift({
      pattern: /\b(?:as|default|export|from|import)\b/,
      alias: 'module'
    }, {
      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
      alias: 'control-flow'
    }, {
      pattern: /\bnull\b/,
      alias: ['null', 'nil']
    }, {
      pattern: /\bundefined\b/,
      alias: 'nil'
    });
    Prism.languages.insertBefore('javascript', 'operator', {
      spread: {
        pattern: /\.{3}/,
        alias: 'operator'
      },
      arrow: {
        pattern: /=>/,
        alias: 'operator'
      }
    });
    Prism.languages.insertBefore('javascript', 'punctuation', {
      'property-access': {
        pattern: withId(/(\.\s*)#?<ID>/.source),
        lookbehind: true
      },
      'maybe-class-name': {
        pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
        lookbehind: true
      },
      dom: {
        // this contains only a few commonly used DOM variables
        pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
        alias: 'variable'
      },
      console: {
        pattern: /\bconsole(?=\s*\.)/,
        alias: 'class-name'
      }
    }); // add 'maybe-class-name' to tokens which might be a class name

    var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

    for (var i = 0; i < maybeClassNameTokens.length; i++) {
      var token = maybeClassNameTokens[i];
      var value = Prism.languages.javascript[token]; // convert regex to object

      if (Prism.util.type(value) === 'RegExp') {
        value = Prism.languages.javascript[token] = {
          pattern: value
        };
      } // keep in mind that we don't support arrays


      var inside = value.inside || {};
      value.inside = inside;
      inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
    }
  })(Prism);
}

var jsExtras$1 = jsExtras_1;
var json_1 = json;
json.displayName = 'json';
json.aliases = ['webmanifest'];

function json(Prism) {
  // https://www.json.org/json-en.html
  Prism.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    }
  };
  Prism.languages.webmanifest = Prism.languages.json;
}

var json$1 = json_1;
var graphql_1 = graphql;
graphql.displayName = 'graphql';
graphql.aliases = [];

function graphql(Prism) {
  Prism.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: true,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: Prism.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
      pattern: /@[a-z_]\w*/i,
      alias: 'function'
    },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: true
    },
    'atom-input': {
      pattern: /\b[A-Z]\w*Input\b/,
      alias: 'class-name'
    },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: true
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: 'function'
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: 'function'
    },
    'definition-query': {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: true,
      alias: 'function'
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
  };
  Prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
    if (env.language !== 'graphql') {
      return;
    }
    /**
     * get the graphql token stream that we want to customize
     *
     * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
     * @type {Token[]}
     */


    var validTokens = env.tokens.filter(function (token) {
      return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
    });
    var currentIndex = 0;
    /**
     * Returns whether the token relative to the current index has the given type.
     *
     * @param {number} offset
     * @returns {Token | undefined}
     */

    function getToken(offset) {
      return validTokens[currentIndex + offset];
    }
    /**
     * Returns whether the token relative to the current index has the given type.
     *
     * @param {readonly string[]} types
     * @param {number} [offset=0]
     * @returns {boolean}
     */


    function isTokenType(types, offset) {
      offset = offset || 0;

      for (var i = 0; i < types.length; i++) {
        var token = getToken(i + offset);

        if (!token || token.type !== types[i]) {
          return false;
        }
      }

      return true;
    }
    /**
     * Returns the index of the closing bracket to an opening bracket.
     *
     * It is assumed that `token[currentIndex - 1]` is an opening bracket.
     *
     * If no closing bracket could be found, `-1` will be returned.
     *
     * @param {RegExp} open
     * @param {RegExp} close
     * @returns {number}
     */


    function findClosingBracket(open, close) {
      var stackHeight = 1;

      for (var i = currentIndex; i < validTokens.length; i++) {
        var token = validTokens[i];
        var content = token.content;

        if (token.type === 'punctuation' && typeof content === 'string') {
          if (open.test(content)) {
            stackHeight++;
          } else if (close.test(content)) {
            stackHeight--;

            if (stackHeight === 0) {
              return i;
            }
          }
        }
      }

      return -1;
    }
    /**
     * Adds an alias to the given token.
     *
     * @param {Token} token
     * @param {string} alias
     * @returns {void}
     */


    function addAlias(token, alias) {
      var aliases = token.alias;

      if (!aliases) {
        token.alias = aliases = [];
      } else if (!Array.isArray(aliases)) {
        token.alias = aliases = [aliases];
      }

      aliases.push(alias);
    }

    for (; currentIndex < validTokens.length;) {
      var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

      if (startToken.type === 'keyword' && startToken.content === 'mutation') {
        // any array of the names of all input variables (if any)
        var inputVariables = [];

        if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
          // definition
          currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

          var definitionEnd = findClosingBracket(/^\($/, /^\)$/);

          if (definitionEnd === -1) {
            continue;
          } // find all input variables


          for (; currentIndex < definitionEnd; currentIndex++) {
            var t = getToken(0);

            if (t.type === 'variable') {
              addAlias(t, 'variable-input');
              inputVariables.push(t.content);
            }
          }

          currentIndex = definitionEnd + 1;
        }

        if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
          currentIndex++; // skip opening bracket

          addAlias(getToken(0), 'property-mutation');

          if (inputVariables.length > 0) {
            var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);

            if (mutationEnd === -1) {
              continue;
            } // give references to input variables a special alias


            for (var i = currentIndex; i < mutationEnd; i++) {
              var varToken = validTokens[i];

              if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
                addAlias(varToken, 'variable-input');
              }
            }
          }
        }
      }
    }
  });
}

var graphql$1 = graphql_1;
var markup_1 = markup$1;
markup$1.displayName = 'markup';
markup$1.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'];

function markup$1(Prism) {
  Prism.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null // see below

        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: 'named-entity'
    }, /&#x?[\da-f]{1,8};/i]
  };
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
  Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&');
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      };
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
          return tagName;
        }), 'i'),
        lookbehind: true,
        greedy: true,
        inside: inside
      };
      Prism.languages.insertBefore('markup', 'cdata', def);
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function value(attrName, lang) {
      Prism.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
        lookbehind: true,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, 'language-' + lang],
                inside: Prism.languages[lang]
              },
              punctuation: [{
                pattern: /^=/,
                alias: 'attr-equals'
              }, /"|'/]
            }
          }
        }
      });
    }
  });
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;
  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.ssml = Prism.languages.xml;
  Prism.languages.atom = Prism.languages.xml;
  Prism.languages.rss = Prism.languages.xml;
}

var markup$2 = markup_1;
var markdown_1 = markdown;
markdown.displayName = 'markdown';
markdown.aliases = ['md'];

function markdown(Prism) {
  (function (Prism) {
    // Allow only one line break
    var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    /**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @returns {RegExp}
     */

    function createInline(pattern) {
      pattern = pattern.replace(/<inner>/g, function () {
        return inner;
      });
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
    }

    var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
    var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
      return tableCell;
    });
    var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    Prism.languages.markdown = Prism.languages.extend('markup', {});
    Prism.languages.insertBefore('markdown', 'prolog', {
      'front-matter-block': {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^---|---$/,
          'front-matter': {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ['yaml', 'language-yaml'],
            inside: Prism.languages.yaml
          }
        }
      },
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      table: {
        pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
        inside: {
          'table-data-rows': {
            pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
            lookbehind: true,
            inside: {
              'table-data': {
                pattern: RegExp(tableCell),
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          'table-header-row': {
            pattern: RegExp('^' + tableRow + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(tableCell),
                alias: 'important',
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [{
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: true,
        alias: 'keyword'
      }, {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: true,
        inside: {
          'code-block': {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: true
          },
          'code-language': {
            pattern: /^(```).+/,
            lookbehind: true
          },
          punctuation: /```/
        }
      }],
      title: [{
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: 'important',
        inside: {
          punctuation: /==+$|--+$/
        }
      }, {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: true,
        alias: 'important',
        inside: {
          punctuation: /^#+|#+$/
        }
      }],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        // **strong**
        // __strong__
        // allow one nested instance of italic text using the same delimiter
        pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {} // see below

          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_
        // allow one nested instance of bold text using the same delimiter
        pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {} // see below

          },
          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        // eslint-disable-next-line regexp/strict
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {} // see below

          },
          punctuation: /~~?/
        }
      },
      'code-snippet': {
        // `code`
        // ``code``
        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: true,
        greedy: true,
        alias: ['code', 'keyword']
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {} // see below

          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: true
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: true
          }
        }
      }
    });
    ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
      ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
        if (token !== inside) {
          Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
        }
      });
    });
    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'markdown' && env.language !== 'md') {
        return;
      }

      function walkTokens(tokens) {
        if (!tokens || typeof tokens === 'string') {
          return;
        }

        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i];

          if (token.type !== 'code') {
            walkTokens(token.content);
            continue;
          }
          /*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */


          var codeLang = token.content[1];
          var codeBlock = token.content[3];

          if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
            // this might be a language that Prism does not support
            // do some replacements to support C++, C#, and F#
            var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

            lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
            var alias = 'language-' + lang; // add alias

            if (!codeBlock.alias) {
              codeBlock.alias = [alias];
            } else if (typeof codeBlock.alias === 'string') {
              codeBlock.alias = [codeBlock.alias, alias];
            } else {
              codeBlock.alias.push(alias);
            }
          }
        }
      }

      walkTokens(env.tokens);
    });
    Prism.hooks.add('wrap', function (env) {
      if (env.type !== 'code-block') {
        return;
      }

      var codeLang = '';

      for (var i = 0, l = env.classes.length; i < l; i++) {
        var cls = env.classes[i];
        var match = /language-(.+)/.exec(cls);

        if (match) {
          codeLang = match[1];
          break;
        }
      }

      var grammar = Prism.languages[codeLang];

      if (!grammar) {
        if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
          var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
          env.attributes['id'] = id;
          Prism.plugins.autoloader.loadLanguages(codeLang, function () {
            var ele = document.getElementById(id);

            if (ele) {
              ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
            }
          });
        }
      } else {
        env.content = Prism.highlight(textContent(env.content.value), grammar, codeLang);
      }
    });
    var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
    /**
     * A list of known entity names.
     *
     * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
     *
     * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
     */

    var KNOWN_ENTITY_NAMES = {
      amp: '&',
      lt: '<',
      gt: '>',
      quot: '"'
    }; // IE 11 doesn't support `String.fromCodePoint`

    var fromCodePoint = String.fromCodePoint || String.fromCharCode;
    /**
     * Returns the text content of a given HTML source code string.
     *
     * @param {string} html
     * @returns {string}
     */

    function textContent(html) {
      // remove all tags
      var text = html.replace(tagPattern, ''); // decode known entities

      text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
        code = code.toLowerCase();

        if (code[0] === '#') {
          var value;

          if (code[1] === 'x') {
            value = parseInt(code.slice(2), 16);
          } else {
            value = Number(code.slice(1));
          }

          return fromCodePoint(value);
        } else {
          var known = KNOWN_ENTITY_NAMES[code];

          if (known) {
            return known;
          } // unable to decode


          return m;
        }
      });
      return text;
    }

    Prism.languages.md = Prism.languages.markdown;
  })(Prism);
}

var markdown$1 = markdown_1;
var yaml_1 = yaml;
yaml.displayName = 'yaml';
yaml.aliases = ['yml'];

function yaml(Prism) {
  (function (Prism) {
    // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
    // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
    var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

    var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

    var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
    // This is a simplified version that doesn't support "#" and multiline keys
    // All these long scarry character classes are simplified versions of YAML's characters

    var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
      return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
    });
    var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    /**
     *
     * @param {string} value
     * @param {string} [flags]
     * @returns {RegExp}
     */

    function createValuePattern(value, flags) {
      flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

      var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<value>>/g, function () {
        return value;
      });
      return RegExp(pattern, flags);
    }

    Prism.languages.yaml = {
      scalar: {
        pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
          return properties;
        })),
        lookbehind: true,
        alias: 'string'
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
          return properties;
        }).replace(/<<key>>/g, function () {
          return '(?:' + plainKey + '|' + string + ')';
        })),
        lookbehind: true,
        greedy: true,
        alias: 'atrule'
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: true,
        alias: 'important'
      },
      datetime: {
        pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
        lookbehind: true,
        alias: 'number'
      },
      boolean: {
        pattern: createValuePattern(/false|true/.source, 'i'),
        lookbehind: true,
        alias: 'important'
      },
      null: {
        pattern: createValuePattern(/null|~/.source, 'i'),
        lookbehind: true,
        alias: 'important'
      },
      string: {
        pattern: createValuePattern(string),
        lookbehind: true,
        greedy: true
      },
      number: {
        pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
        lookbehind: true
      },
      tag: tag,
      important: anchorOrAlias,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    };
    Prism.languages.yml = Prism.languages.yaml;
  })(Prism);
}

var yaml$1 = yaml_1;
var typescript_1 = typescript;
typescript.displayName = 'typescript';
typescript.aliases = ['ts'];

function typescript(Prism) {
  (function (Prism) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      'class-name': {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }); // The keywords TypeScript adds to JavaScript

    Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/); // doesn't work with TS because TS is too complex

    delete Prism.languages.typescript['parameter'];
    delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

    var typeInside = Prism.languages.extend('typescript', {});
    delete typeInside['class-name'];
    Prism.languages.typescript['class-name'].inside = typeInside;
    Prism.languages.insertBefore('typescript', 'function', {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: 'operator'
          },
          function: /^[\s\S]+/
        }
      },
      'generic-function': {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: 'class-name',
            inside: typeInside
          }
        }
      }
    });
    Prism.languages.ts = Prism.languages.typescript;
  })(Prism);
}

var typescript$1 = typescript_1;
var refractorJsx = jsx_1;
var refractorTypescript = typescript_1;
var tsx_1 = tsx;
tsx.displayName = 'tsx';
tsx.aliases = [];

function tsx(Prism) {
  Prism.register(refractorJsx);
  Prism.register(refractorTypescript);

  (function (Prism) {
    var typescript = Prism.util.clone(Prism.languages.typescript);
    Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

    delete Prism.languages.tsx['parameter'];
    delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
    // Idea by https://github.com/karlhorky
    // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

    var tag = Prism.languages.tsx.tag;
    tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
    tag.lookbehind = true;
  })(Prism);
}

var tsx$1 = tsx_1;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = (0,_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__._)(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
} //
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 4


function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;

  if (arrLength === 2) {
    // prettier-ignore
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }

  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }

  if (arrLength >= 4) {
    // Currently does not support more than 4 extra
    // class names (after `.token` has been removed)
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}

var classNameCombinations = {};

function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join('.');

  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }

  return classNameCombinations[key];
}

function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  var nonTokenClassNames = classNames.filter(function (className) {
    return className !== 'token';
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function (styleObject, className) {
    return _objectSpread({}, styleObject, stylesheet[className]);
  }, elementStyle);
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}

function createElement(_ref) {
  var node = _ref.node,
      stylesheet = _ref.stylesheet,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      useInlineStyles = _ref.useInlineStyles,
      key = _ref.key;
  var properties = node.properties,
      type = node.type,
      TagName = node.tagName,
      value = node.value;

  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;

    if (!useInlineStyles) {
      props = _objectSpread({}, properties, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function (classes, selector) {
        selector.split('.').forEach(function (className) {
          if (!classes.includes(className)) classes.push(className);
        });
        return classes;
      }, []); // For compatibility with older versions of react-syntax-highlighter

      var startingClassName = properties.className && properties.className.includes('token') ? ['token'] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function (className) {
        return !allStylesheetSelectors.includes(className);
      }));
      props = _objectSpread({}, properties, {
        className: createClassNameString(className) || undefined,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }

    var children = childrenCreator(node.children);
    return react__WEBPACK_IMPORTED_MODULE_35__.createElement(TagName, (0,_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.a)({
      key: key
    }, props), children);
  }
}

var checkForListedLanguage = function checkForListedLanguage(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};

var newLineRegex = /\n/g;

function getNewLines(str) {
  return str.match(newLineRegex);
}

function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
      startingLineNumber = _ref.startingLineNumber,
      style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return react__WEBPACK_IMPORTED_MODULE_35__.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === 'function' ? style(number) : style
    }, "".concat(number, "\n"));
  });
}

function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
      codeStyle = _ref2.codeStyle,
      _ref2$containerStyle = _ref2.containerStyle,
      containerStyle = _ref2$containerStyle === void 0 ? {
    float: 'left',
    paddingRight: '10px'
  } : _ref2$containerStyle,
      _ref2$numberStyle = _ref2.numberStyle,
      numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
      startingLineNumber = _ref2.startingLineNumber;
  return react__WEBPACK_IMPORTED_MODULE_35__.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    style: numberStyle,
    startingLineNumber: startingLineNumber
  }));
}

function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}

function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: inlineLineNumberStyle
    },
    children: [{
      type: 'text',
      value: lineNumber
    }]
  };
}

function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  // minimally necessary styling for line numbers
  var defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  }; // prep custom styling

  var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle; // combine

  var assembledStyle = _objectSpread({}, defaultLineNumberStyle, customLineNumberStyle);

  return assembledStyle;
}

function createLineElement(_ref3) {
  var children = _ref3.children,
      lineNumber = _ref3.lineNumber,
      lineNumberStyle = _ref3.lineNumberStyle,
      largestLineNumber = _ref3.largestLineNumber,
      showInlineLineNumbers = _ref3.showInlineLineNumbers,
      _ref3$lineProps = _ref3.lineProps,
      lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? [] : _ref3$className,
      showLineNumbers = _ref3.showLineNumbers,
      wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;

  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }

  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread({}, properties.style, {
      display: 'flex'
    });
  }

  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}

function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      newTree = newTree.concat(flattenCodeTree(node.children, classNames));
    }
  }

  return newTree;
}

function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;

  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;

  function createWrappedLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return createLineElement({
      children: children,
      lineNumber: lineNumber,
      lineNumberStyle: lineNumberStyle,
      largestLineNumber: largestLineNumber,
      showInlineLineNumbers: showInlineLineNumbers,
      lineProps: lineProps,
      className: className,
      showLineNumbers: showLineNumbers,
      wrapLongLines: wrapLongLines
    });
  }

  function createUnwrappedLine(children, lineNumber) {
    if (showLineNumbers && lineNumber && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
      children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
    }

    return children;
  }

  function createLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
  }

  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);

    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        }; // if it's the first line

        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));

          var _line = createLine(_children, lineNumber);

          newTree.push(_line); // if it's the last line
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];

          if (stringChild) {
            var lastLineInPreviousSpan = {
              type: 'text',
              value: "".concat(text)
            };
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [newChild];

            var _line2 = createLine(_children2, lineNumber, node.properties.className);

            newTree.push(_line2);
          } // if it's neither the first nor the last line

        } else {
          var _children3 = [newChild];

          var _line3 = createLine(_children3, lineNumber, node.properties.className);

          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }

    index++;
  };

  while (index < tree.length) {
    _loop();
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);

    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }

  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}

function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
      stylesheet = _ref5.stylesheet,
      useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function (node, i) {
    return createElement({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
} // only highlight.js has the highlightAuto method


function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}

function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
      language = _ref6.language,
      code = _ref6.code,
      defaultCodeValue = _ref6.defaultCodeValue; // figure out whether we're using lowlight/highlight or refractor/prism
  // then attempt highlighting accordingly
  // lowlight/highlight?

  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage(astGenerator, language);

    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  } // must be refractor/prism, then


  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}

function highlight$1(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref7) {
    var language = _ref7.language,
        children = _ref7.children,
        _ref7$style = _ref7.style,
        style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
        _ref7$customStyle = _ref7.customStyle,
        customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
        _ref7$codeTagProps = _ref7.codeTagProps,
        codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : undefined,
      style: _objectSpread({}, style['code[class*="language-"]'], style["code[class*=\"language-".concat(language, "\"]")])
    } : _ref7$codeTagProps,
        _ref7$useInlineStyles = _ref7.useInlineStyles,
        useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles,
        _ref7$showLineNumbers = _ref7.showLineNumbers,
        showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers,
        _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
        showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN,
        _ref7$startingLineNum = _ref7.startingLineNumber,
        startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
        lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
        _ref7$lineNumberStyle = _ref7.lineNumberStyle,
        lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
        wrapLines = _ref7.wrapLines,
        _ref7$wrapLongLines = _ref7.wrapLongLines,
        wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines,
        _ref7$lineProps = _ref7.lineProps,
        lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
        renderer = _ref7.renderer,
        _ref7$PreTag = _ref7.PreTag,
        PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
        _ref7$CodeTag = _ref7.CodeTag,
        CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
        _ref7$code = _ref7.code,
        code = _ref7$code === void 0 ? Array.isArray(children) ? children[0] : children : _ref7$code,
        astGenerator = _ref7.astGenerator,
        rest = _objectWithoutProperties(_ref7, ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"]);

    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? react__WEBPACK_IMPORTED_MODULE_35__.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });

    if (!astGenerator) {
      return react__WEBPACK_IMPORTED_MODULE_35__.createElement(PreTag, preProps, allLineNumbers, react__WEBPACK_IMPORTED_MODULE_35__.createElement(CodeTag, codeTagProps, code));
    }
    /*
     * Some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined.
     */


    if (wrapLines === undefined && renderer || wrapLongLines) wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });

    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    } // determine largest line number so that we can force minWidth on all linenumber elements


    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);

    if (wrapLongLines) {
      codeTagProps.style = _objectSpread({}, codeTagProps.style, {
        whiteSpace: 'pre-wrap'
      });
    } else {
      codeTagProps.style = _objectSpread({}, codeTagProps.style, {
        whiteSpace: 'pre'
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_35__.createElement(PreTag, preProps, react__WEBPACK_IMPORTED_MODULE_35__.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows: rows,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}

var immutable = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

var schema$1 = Schema$2;
var proto$1 = Schema$2.prototype;
proto$1.space = null;
proto$1.normal = {};
proto$1.property = {};

function Schema$2(property, normal, space) {
  this.property = property;
  this.normal = normal;

  if (space) {
    this.space = space;
  }
}

var xtend = immutable;
var Schema$1 = schema$1;
var merge_1 = merge$1;

function merge$1(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index = -1;
  var info;
  var space;

  while (++index < length) {
    info = definitions[index];
    property.push(info.property);
    normal.push(info.normal);
    space = info.space;
  }

  return new Schema$1(xtend.apply(null, property), xtend.apply(null, normal), space);
}

var normalize_1 = normalize$3;

function normalize$3(value) {
  return value.toLowerCase();
}

var info = Info$2;
var proto = Info$2.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto.boolean = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;

function Info$2(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}

var types$3 = {};
var powers = 0;
types$3.boolean = increment();
types$3.booleanish = increment();
types$3.overloadedBoolean = increment();
types$3.number = increment();
types$3.spaceSeparated = increment();
types$3.commaSeparated = increment();
types$3.commaOrSpaceSeparated = increment();

function increment() {
  return Math.pow(2, ++powers);
}

var Info$1 = info;
var types$2 = types$3;
var definedInfo = DefinedInfo$2;
DefinedInfo$2.prototype = new Info$1();
DefinedInfo$2.prototype.defined = true;
var checks = ['boolean', 'booleanish', 'overloadedBoolean', 'number', 'commaSeparated', 'spaceSeparated', 'commaOrSpaceSeparated'];
var checksLength = checks.length;

function DefinedInfo$2(property, attribute, mask, space) {
  var index = -1;
  var check;
  mark(this, 'space', space);
  Info$1.call(this, property, attribute);

  while (++index < checksLength) {
    check = checks[index];
    mark(this, check, (mask & types$2[check]) === types$2[check]);
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

var normalize$2 = normalize_1;
var Schema = schema$1;
var DefinedInfo$1 = definedInfo;
var create_1 = create$5;

function create$5(definition) {
  var space = definition.space;
  var mustUseProperty = definition.mustUseProperty || [];
  var attributes = definition.attributes || {};
  var props = definition.properties;
  var transform = definition.transform;
  var property = {};
  var normal = {};
  var prop;
  var info;

  for (prop in props) {
    info = new DefinedInfo$1(prop, transform(attributes, prop), props[prop], space);

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true;
    }

    property[prop] = info;
    normal[normalize$2(prop)] = prop;
    normal[normalize$2(info.attribute)] = prop;
  }

  return new Schema(property, normal, space);
}

var create$4 = create_1;
var xlink$1 = create$4({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase();
}

var create$3 = create_1;
var xml$1 = create$3({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase();
}

var caseSensitiveTransform_1 = caseSensitiveTransform$1;

function caseSensitiveTransform$1(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

var caseSensitiveTransform = caseSensitiveTransform_1;
var caseInsensitiveTransform_1 = caseInsensitiveTransform$2;

function caseInsensitiveTransform$2(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

var create$2 = create_1;
var caseInsensitiveTransform$1 = caseInsensitiveTransform_1;
var xmlns$1 = create$2({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform$1,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});
var types$1 = types$3;
var create$1 = create_1;
var booleanish$1 = types$1.booleanish;
var number$1 = types$1.number;
var spaceSeparated$1 = types$1.spaceSeparated;
var aria$1 = create$1({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish$1,
    ariaAutoComplete: null,
    ariaBusy: booleanish$1,
    ariaChecked: booleanish$1,
    ariaColCount: number$1,
    ariaColIndex: number$1,
    ariaColSpan: number$1,
    ariaControls: spaceSeparated$1,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated$1,
    ariaDetails: null,
    ariaDisabled: booleanish$1,
    ariaDropEffect: spaceSeparated$1,
    ariaErrorMessage: null,
    ariaExpanded: booleanish$1,
    ariaFlowTo: spaceSeparated$1,
    ariaGrabbed: booleanish$1,
    ariaHasPopup: null,
    ariaHidden: booleanish$1,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated$1,
    ariaLevel: number$1,
    ariaLive: null,
    ariaModal: booleanish$1,
    ariaMultiLine: booleanish$1,
    ariaMultiSelectable: booleanish$1,
    ariaOrientation: null,
    ariaOwns: spaceSeparated$1,
    ariaPlaceholder: null,
    ariaPosInSet: number$1,
    ariaPressed: booleanish$1,
    ariaReadOnly: booleanish$1,
    ariaRelevant: null,
    ariaRequired: booleanish$1,
    ariaRoleDescription: spaceSeparated$1,
    ariaRowCount: number$1,
    ariaRowIndex: number$1,
    ariaRowSpan: number$1,
    ariaSelected: booleanish$1,
    ariaSetSize: number$1,
    ariaSort: null,
    ariaValueMax: number$1,
    ariaValueMin: number$1,
    ariaValueNow: number$1,
    ariaValueText: null,
    role: null
  }
});

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase();
}

var types = types$3;
var create = create_1;
var caseInsensitiveTransform = caseInsensitiveTransform_1;
var boolean = types.boolean;
var overloadedBoolean = types.overloadedBoolean;
var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
var html$2 = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: boolean,
    // `<frame>`
    noHref: boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});
var merge = merge_1;
var xlink = xlink$1;
var xml = xml$1;
var xmlns = xmlns$1;
var aria = aria$1;
var html$1 = html$2;
var html_1$1 = merge([xml, xlink, xmlns, aria, html$1]);
var normalize$1 = normalize_1;
var DefinedInfo = definedInfo;
var Info = info;
var data = 'data';
var find_1 = find$1;
var valid = /^data[-\w.:]+$/i;
var dash$1 = /-[a-z]/g;
var cap$1 = /[A-Z]/g;

function find$1(schema, value) {
  var normal = normalize$1(value);
  var prop = value;
  var Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }

    Type = DefinedInfo;
  }

  return new Type(prop, value);
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash$1, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}

function datasetToAttribute(property) {
  var value = property.slice(4);

  if (dash$1.test(value)) {
    return property;
  }

  value = value.replace(cap$1, kebab);

  if (value.charAt(0) !== '-') {
    value = '-' + value;
  }

  return data + value;
}

function kebab($0) {
  return '-' + $0.toLowerCase();
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

var hastUtilParseSelector = parse$3;
var search = /[#.]/g; // Create a hast element from a simple CSS selector.

function parse$3(selector, defaultTagName) {
  var value = selector || '';
  var name = defaultTagName || 'div';
  var props = {};
  var start = 0;
  var subvalue;
  var previous;
  var match;

  while (start < value.length) {
    search.lastIndex = start;
    match = search.exec(value);
    subvalue = value.slice(start, match ? match.index : value.length);

    if (subvalue) {
      if (!previous) {
        name = subvalue;
      } else if (previous === '#') {
        props.id = subvalue;
      } else if (props.className) {
        props.className.push(subvalue);
      } else {
        props.className = [subvalue];
      }

      start += subvalue.length;
    }

    if (match) {
      previous = match[0];
      start++;
    }
  }

  return {
    type: 'element',
    tagName: name,
    properties: props,
    children: []
  };
}

var spaceSeparatedTokens = {};
spaceSeparatedTokens.parse = parse$2;
spaceSeparatedTokens.stringify = stringify$2;
var empty$2 = '';
var space$2 = ' ';
var whiteSpace = /[ \t\n\r\f]+/g;

function parse$2(value) {
  var input = String(value || empty$2).trim();
  return input === empty$2 ? [] : input.split(whiteSpace);
}

function stringify$2(values) {
  return values.join(space$2).trim();
}

var commaSeparatedTokens = {};
commaSeparatedTokens.parse = parse$1;
commaSeparatedTokens.stringify = stringify$1;
var comma$1 = ',';
var space$1 = ' ';
var empty$1 = ''; // Parse comma-separated tokens to an array.

function parse$1(value) {
  var values = [];
  var input = String(value || empty$1);
  var index = input.indexOf(comma$1);
  var lastIndex = 0;
  var end = false;
  var val;

  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }

    val = input.slice(lastIndex, index).trim();

    if (val || !end) {
      values.push(val);
    }

    lastIndex = index + 1;
    index = input.indexOf(comma$1, lastIndex);
  }

  return values;
} // Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.


function stringify$1(values, options) {
  var settings = options || {};
  var left = settings.padLeft === false ? empty$1 : space$1;
  var right = settings.padRight ? space$1 : empty$1; // Ensure the last empty entry is seen.

  if (values[values.length - 1] === empty$1) {
    values = values.concat(empty$1);
  }

  return values.join(right + comma$1 + left).trim();
}

var find = find_1;
var normalize = normalize_1;
var parseSelector = hastUtilParseSelector;
var spaces = spaceSeparatedTokens.parse;
var commas = commaSeparatedTokens.parse;
var factory_1 = factory$1;
var own$3 = {}.hasOwnProperty;

function factory$1(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
  return h; // Hyperscript compatible DSL for creating virtual hast trees.

  function h(selector, properties) {
    var node = parseSelector(selector, defaultTagName);
    var children = Array.prototype.slice.call(arguments, 2);
    var name = node.tagName.toLowerCase();
    var property;
    node.tagName = adjust && own$3.call(adjust, name) ? adjust[name] : name;

    if (properties && isChildren(properties, node)) {
      children.unshift(properties);
      properties = null;
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property]);
      }
    }

    addChild(node.children, children);

    if (node.tagName === 'template') {
      node.content = {
        type: 'root',
        children: node.children
      };
      node.children = [];
    }

    return node;
  }

  function addProperty(properties, key, value) {
    var info;
    var property;
    var result; // Ignore nullish and NaN values.

    if (value === null || value === undefined || value !== value) {
      return;
    }

    info = find(schema, key);
    property = info.property;
    result = value; // Handle list values.

    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result);
      } else if (info.commaSeparated) {
        result = commas(result);
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '));
      }
    } // Accept `object` on style.


    if (property === 'style' && typeof value !== 'string') {
      result = style(result);
    } // Class-names (which can be added both on the `selector` and here).


    if (property === 'className' && properties.className) {
      result = properties.className.concat(result);
    }

    properties[property] = parsePrimitives(info, property, result);
  }
}

function isChildren(value, node) {
  return typeof value === 'string' || 'length' in value || isNode(node.tagName, value);
}

function isNode(tagName, value) {
  var type = value.type;

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false;
  }

  if (_typeof(value.children) === 'object' && 'length' in value.children) {
    return true;
  }

  type = type.toLowerCase();

  if (tagName === 'button') {
    return type !== 'menu' && type !== 'submit' && type !== 'reset' && type !== 'button';
  }

  return 'value' in value;
}

function addChild(nodes, value) {
  var index;
  var length;

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({
      type: 'text',
      value: String(value)
    });
    return;
  }

  if (_typeof(value) === 'object' && 'length' in value) {
    index = -1;
    length = value.length;

    while (++index < length) {
      addChild(nodes, value[index]);
    }

    return;
  }

  if (_typeof(value) !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`');
  }

  nodes.push(value);
} // Parse a (list of) primitives.


function parsePrimitives(info, name, value) {
  var index;
  var length;
  var result;

  if (_typeof(value) !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value);
  }

  length = value.length;
  index = -1;
  result = [];

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index]);
  }

  return result;
} // Parse a single primitives.


function parsePrimitive(info, name, value) {
  var result = value;

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result);
    }
  } else if (info.boolean || info.overloadedBoolean) {
    // Accept `boolean` and `string`.
    if (typeof result === 'string' && (result === '' || normalize(value) === normalize(name))) {
      result = true;
    }
  }

  return result;
}

function style(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push([key, value[key]].join(': '));
  }

  return result.join('; ');
}

function createAdjustMap(values) {
  var length = values.length;
  var index = -1;
  var result = {};
  var value;

  while (++index < length) {
    value = values[index];
    result[value.toLowerCase()] = value;
  }

  return result;
}

var schema = html_1$1;
var factory = factory_1;
var html = factory(schema, 'div');
html.displayName = 'html';
var html_1 = html;
var hastscript = html_1;
var AElig$1 = "Æ";
var AMP$1 = "&";
var Aacute$1 = "Á";
var Acirc$1 = "Â";
var Agrave$1 = "À";
var Aring$1 = "Å";
var Atilde$1 = "Ã";
var Auml$1 = "Ä";
var COPY$1 = "©";
var Ccedil$1 = "Ç";
var ETH$1 = "Ð";
var Eacute$1 = "É";
var Ecirc$1 = "Ê";
var Egrave$1 = "È";
var Euml$1 = "Ë";
var GT$1 = ">";
var Iacute$1 = "Í";
var Icirc$1 = "Î";
var Igrave$1 = "Ì";
var Iuml$1 = "Ï";
var LT$1 = "<";
var Ntilde$1 = "Ñ";
var Oacute$1 = "Ó";
var Ocirc$1 = "Ô";
var Ograve$1 = "Ò";
var Oslash$1 = "Ø";
var Otilde$1 = "Õ";
var Ouml$1 = "Ö";
var QUOT$1 = "\"";
var REG$1 = "®";
var THORN$1 = "Þ";
var Uacute$1 = "Ú";
var Ucirc$1 = "Û";
var Ugrave$1 = "Ù";
var Uuml$1 = "Ü";
var Yacute$1 = "Ý";
var aacute$1 = "á";
var acirc$1 = "â";
var acute$1 = "´";
var aelig$1 = "æ";
var agrave$1 = "à";
var amp$1 = "&";
var aring$1 = "å";
var atilde$1 = "ã";
var auml$1 = "ä";
var brvbar$1 = "¦";
var ccedil$1 = "ç";
var cedil$1 = "¸";
var cent$1 = "¢";
var copy$1 = "©";
var curren$1 = "¤";
var deg$1 = "°";
var divide$1 = "÷";
var eacute$1 = "é";
var ecirc$1 = "ê";
var egrave$1 = "è";
var eth$1 = "ð";
var euml$1 = "ë";
var frac12$1 = "½";
var frac14$1 = "¼";
var frac34$1 = "¾";
var gt$1 = ">";
var iacute$1 = "í";
var icirc$1 = "î";
var iexcl$1 = "¡";
var igrave$1 = "ì";
var iquest$1 = "¿";
var iuml$1 = "ï";
var laquo$1 = "«";
var lt$1 = "<";
var macr$1 = "¯";
var micro$1 = "µ";
var middot$1 = "·";
var nbsp$1 = " ";
var not$1 = "¬";
var ntilde$1 = "ñ";
var oacute$1 = "ó";
var ocirc$1 = "ô";
var ograve$1 = "ò";
var ordf$1 = "ª";
var ordm$1 = "º";
var oslash$1 = "ø";
var otilde$1 = "õ";
var ouml$1 = "ö";
var para$1 = "¶";
var plusmn$1 = "±";
var pound$1 = "£";
var quot$1 = "\"";
var raquo$1 = "»";
var reg$1 = "®";
var sect$1 = "§";
var shy$1 = "­";
var sup1$1 = "¹";
var sup2$1 = "²";
var sup3$1 = "³";
var szlig$1 = "ß";
var thorn$1 = "þ";
var times$1 = "×";
var uacute$1 = "ú";
var ucirc$1 = "û";
var ugrave$1 = "ù";
var uml$1 = "¨";
var uuml$1 = "ü";
var yacute$1 = "ý";
var yen$1 = "¥";
var yuml$1 = "ÿ";
var require$$0$1 = {
  AElig: AElig$1,
  AMP: AMP$1,
  Aacute: Aacute$1,
  Acirc: Acirc$1,
  Agrave: Agrave$1,
  Aring: Aring$1,
  Atilde: Atilde$1,
  Auml: Auml$1,
  COPY: COPY$1,
  Ccedil: Ccedil$1,
  ETH: ETH$1,
  Eacute: Eacute$1,
  Ecirc: Ecirc$1,
  Egrave: Egrave$1,
  Euml: Euml$1,
  GT: GT$1,
  Iacute: Iacute$1,
  Icirc: Icirc$1,
  Igrave: Igrave$1,
  Iuml: Iuml$1,
  LT: LT$1,
  Ntilde: Ntilde$1,
  Oacute: Oacute$1,
  Ocirc: Ocirc$1,
  Ograve: Ograve$1,
  Oslash: Oslash$1,
  Otilde: Otilde$1,
  Ouml: Ouml$1,
  QUOT: QUOT$1,
  REG: REG$1,
  THORN: THORN$1,
  Uacute: Uacute$1,
  Ucirc: Ucirc$1,
  Ugrave: Ugrave$1,
  Uuml: Uuml$1,
  Yacute: Yacute$1,
  aacute: aacute$1,
  acirc: acirc$1,
  acute: acute$1,
  aelig: aelig$1,
  agrave: agrave$1,
  amp: amp$1,
  aring: aring$1,
  atilde: atilde$1,
  auml: auml$1,
  brvbar: brvbar$1,
  ccedil: ccedil$1,
  cedil: cedil$1,
  cent: cent$1,
  copy: copy$1,
  curren: curren$1,
  deg: deg$1,
  divide: divide$1,
  eacute: eacute$1,
  ecirc: ecirc$1,
  egrave: egrave$1,
  eth: eth$1,
  euml: euml$1,
  frac12: frac12$1,
  frac14: frac14$1,
  frac34: frac34$1,
  gt: gt$1,
  iacute: iacute$1,
  icirc: icirc$1,
  iexcl: iexcl$1,
  igrave: igrave$1,
  iquest: iquest$1,
  iuml: iuml$1,
  laquo: laquo$1,
  lt: lt$1,
  macr: macr$1,
  micro: micro$1,
  middot: middot$1,
  nbsp: nbsp$1,
  not: not$1,
  ntilde: ntilde$1,
  oacute: oacute$1,
  ocirc: ocirc$1,
  ograve: ograve$1,
  ordf: ordf$1,
  ordm: ordm$1,
  oslash: oslash$1,
  otilde: otilde$1,
  ouml: ouml$1,
  para: para$1,
  plusmn: plusmn$1,
  pound: pound$1,
  quot: quot$1,
  raquo: raquo$1,
  reg: reg$1,
  sect: sect$1,
  shy: shy$1,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  szlig: szlig$1,
  thorn: thorn$1,
  times: times$1,
  uacute: uacute$1,
  ucirc: ucirc$1,
  ugrave: ugrave$1,
  uml: uml$1,
  uuml: uuml$1,
  yacute: yacute$1,
  yen: yen$1,
  yuml: yuml$1
};
var require$$1 = {
  "0": "�",
  "128": "€",
  "130": "‚",
  "131": "ƒ",
  "132": "„",
  "133": "…",
  "134": "†",
  "135": "‡",
  "136": "ˆ",
  "137": "‰",
  "138": "Š",
  "139": "‹",
  "140": "Œ",
  "142": "Ž",
  "145": "‘",
  "146": "’",
  "147": "“",
  "148": "”",
  "149": "•",
  "150": "–",
  "151": "—",
  "152": "˜",
  "153": "™",
  "154": "š",
  "155": "›",
  "156": "œ",
  "158": "ž",
  "159": "Ÿ"
};
var isDecimal = decimal$2; // Check if the given character code, or the character code at the first
// character, is decimal.

function decimal$2(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 48 && code <= 57;
  /* 0-9 */
}

var isHexadecimal = hexadecimal$1; // Check if the given character code, or the character code at the first
// character, is hexadecimal.

function hexadecimal$1(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 97
  /* a */
  && code <= 102
  /* z */
  || code >= 65
  /* A */
  && code <= 70
  /* Z */
  || code >= 48
  /* A */
  && code <= 57
  /* Z */
  ;
}

var isAlphabetical = alphabetical$1; // Check if the given character code, or the character code at the first
// character, is alphabetical.

function alphabetical$1(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 122
  /* a-z */
  || code >= 65 && code <= 90
  /* A-Z */
  ;
}

var alphabetical = isAlphabetical;
var decimal$1 = isDecimal;
var isAlphanumerical = alphanumerical$1; // Check if the given character code, or the character code at the first
// character, is alphanumerical.

function alphanumerical$1(character) {
  return alphabetical(character) || decimal$1(character);
}

var AEli = "Æ";
var AElig = "Æ";
var AM = "&";
var AMP = "&";
var Aacut = "Á";
var Aacute = "Á";
var Abreve = "Ă";
var Acir = "Â";
var Acirc = "Â";
var Acy = "А";
var Afr = "𝔄";
var Agrav = "À";
var Agrave = "À";
var Alpha = "Α";
var Amacr = "Ā";
var And = "⩓";
var Aogon = "Ą";
var Aopf = "𝔸";
var ApplyFunction = "⁡";
var Arin = "Å";
var Aring = "Å";
var Ascr = "𝒜";
var Assign = "≔";
var Atild = "Ã";
var Atilde = "Ã";
var Aum = "Ä";
var Auml = "Ä";
var Backslash = "∖";
var Barv = "⫧";
var Barwed = "⌆";
var Bcy = "Б";
var Because = "∵";
var Bernoullis = "ℬ";
var Beta = "Β";
var Bfr = "𝔅";
var Bopf = "𝔹";
var Breve = "˘";
var Bscr = "ℬ";
var Bumpeq = "≎";
var CHcy = "Ч";
var COP = "©";
var COPY = "©";
var Cacute = "Ć";
var Cap = "⋒";
var CapitalDifferentialD = "ⅅ";
var Cayleys = "ℭ";
var Ccaron = "Č";
var Ccedi = "Ç";
var Ccedil = "Ç";
var Ccirc = "Ĉ";
var Cconint = "∰";
var Cdot = "Ċ";
var Cedilla = "¸";
var CenterDot = "·";
var Cfr = "ℭ";
var Chi = "Χ";
var CircleDot = "⊙";
var CircleMinus = "⊖";
var CirclePlus = "⊕";
var CircleTimes = "⊗";
var ClockwiseContourIntegral = "∲";
var CloseCurlyDoubleQuote = "”";
var CloseCurlyQuote = "’";
var Colon = "∷";
var Colone = "⩴";
var Congruent = "≡";
var Conint = "∯";
var ContourIntegral = "∮";
var Copf = "ℂ";
var Coproduct = "∐";
var CounterClockwiseContourIntegral = "∳";
var Cross = "⨯";
var Cscr = "𝒞";
var Cup = "⋓";
var CupCap = "≍";
var DD = "ⅅ";
var DDotrahd = "⤑";
var DJcy = "Ђ";
var DScy = "Ѕ";
var DZcy = "Џ";
var Dagger = "‡";
var Darr = "↡";
var Dashv = "⫤";
var Dcaron = "Ď";
var Dcy = "Д";
var Del = "∇";
var Delta = "Δ";
var Dfr = "𝔇";
var DiacriticalAcute = "´";
var DiacriticalDot = "˙";
var DiacriticalDoubleAcute = "˝";
var DiacriticalGrave = "`";
var DiacriticalTilde = "˜";
var Diamond = "⋄";
var DifferentialD = "ⅆ";
var Dopf = "𝔻";
var Dot = "¨";
var DotDot = "⃜";
var DotEqual = "≐";
var DoubleContourIntegral = "∯";
var DoubleDot = "¨";
var DoubleDownArrow = "⇓";
var DoubleLeftArrow = "⇐";
var DoubleLeftRightArrow = "⇔";
var DoubleLeftTee = "⫤";
var DoubleLongLeftArrow = "⟸";
var DoubleLongLeftRightArrow = "⟺";
var DoubleLongRightArrow = "⟹";
var DoubleRightArrow = "⇒";
var DoubleRightTee = "⊨";
var DoubleUpArrow = "⇑";
var DoubleUpDownArrow = "⇕";
var DoubleVerticalBar = "∥";
var DownArrow = "↓";
var DownArrowBar = "⤓";
var DownArrowUpArrow = "⇵";
var DownBreve = "̑";
var DownLeftRightVector = "⥐";
var DownLeftTeeVector = "⥞";
var DownLeftVector = "↽";
var DownLeftVectorBar = "⥖";
var DownRightTeeVector = "⥟";
var DownRightVector = "⇁";
var DownRightVectorBar = "⥗";
var DownTee = "⊤";
var DownTeeArrow = "↧";
var Downarrow = "⇓";
var Dscr = "𝒟";
var Dstrok = "Đ";
var ENG = "Ŋ";
var ET = "Ð";
var ETH = "Ð";
var Eacut = "É";
var Eacute = "É";
var Ecaron = "Ě";
var Ecir = "Ê";
var Ecirc = "Ê";
var Ecy = "Э";
var Edot = "Ė";
var Efr = "𝔈";
var Egrav = "È";
var Egrave = "È";
var Element = "∈";
var Emacr = "Ē";
var EmptySmallSquare = "◻";
var EmptyVerySmallSquare = "▫";
var Eogon = "Ę";
var Eopf = "𝔼";
var Epsilon = "Ε";
var Equal = "⩵";
var EqualTilde = "≂";
var Equilibrium = "⇌";
var Escr = "ℰ";
var Esim = "⩳";
var Eta = "Η";
var Eum = "Ë";
var Euml = "Ë";
var Exists = "∃";
var ExponentialE = "ⅇ";
var Fcy = "Ф";
var Ffr = "𝔉";
var FilledSmallSquare = "◼";
var FilledVerySmallSquare = "▪";
var Fopf = "𝔽";
var ForAll = "∀";
var Fouriertrf = "ℱ";
var Fscr = "ℱ";
var GJcy = "Ѓ";
var G = ">";
var GT = ">";
var Gamma = "Γ";
var Gammad = "Ϝ";
var Gbreve = "Ğ";
var Gcedil = "Ģ";
var Gcirc = "Ĝ";
var Gcy = "Г";
var Gdot = "Ġ";
var Gfr = "𝔊";
var Gg = "⋙";
var Gopf = "𝔾";
var GreaterEqual = "≥";
var GreaterEqualLess = "⋛";
var GreaterFullEqual = "≧";
var GreaterGreater = "⪢";
var GreaterLess = "≷";
var GreaterSlantEqual = "⩾";
var GreaterTilde = "≳";
var Gscr = "𝒢";
var Gt = "≫";
var HARDcy = "Ъ";
var Hacek = "ˇ";
var Hat = "^";
var Hcirc = "Ĥ";
var Hfr = "ℌ";
var HilbertSpace = "ℋ";
var Hopf = "ℍ";
var HorizontalLine = "─";
var Hscr = "ℋ";
var Hstrok = "Ħ";
var HumpDownHump = "≎";
var HumpEqual = "≏";
var IEcy = "Е";
var IJlig = "Ĳ";
var IOcy = "Ё";
var Iacut = "Í";
var Iacute = "Í";
var Icir = "Î";
var Icirc = "Î";
var Icy = "И";
var Idot = "İ";
var Ifr = "ℑ";
var Igrav = "Ì";
var Igrave = "Ì";
var Im = "ℑ";
var Imacr = "Ī";
var ImaginaryI = "ⅈ";
var Implies = "⇒";
var Int = "∬";
var Integral = "∫";
var Intersection = "⋂";
var InvisibleComma = "⁣";
var InvisibleTimes = "⁢";
var Iogon = "Į";
var Iopf = "𝕀";
var Iota = "Ι";
var Iscr = "ℐ";
var Itilde = "Ĩ";
var Iukcy = "І";
var Ium = "Ï";
var Iuml = "Ï";
var Jcirc = "Ĵ";
var Jcy = "Й";
var Jfr = "𝔍";
var Jopf = "𝕁";
var Jscr = "𝒥";
var Jsercy = "Ј";
var Jukcy = "Є";
var KHcy = "Х";
var KJcy = "Ќ";
var Kappa = "Κ";
var Kcedil = "Ķ";
var Kcy = "К";
var Kfr = "𝔎";
var Kopf = "𝕂";
var Kscr = "𝒦";
var LJcy = "Љ";
var L = "<";
var LT = "<";
var Lacute = "Ĺ";
var Lambda = "Λ";
var Lang = "⟪";
var Laplacetrf = "ℒ";
var Larr = "↞";
var Lcaron = "Ľ";
var Lcedil = "Ļ";
var Lcy = "Л";
var LeftAngleBracket = "⟨";
var LeftArrow = "←";
var LeftArrowBar = "⇤";
var LeftArrowRightArrow = "⇆";
var LeftCeiling = "⌈";
var LeftDoubleBracket = "⟦";
var LeftDownTeeVector = "⥡";
var LeftDownVector = "⇃";
var LeftDownVectorBar = "⥙";
var LeftFloor = "⌊";
var LeftRightArrow = "↔";
var LeftRightVector = "⥎";
var LeftTee = "⊣";
var LeftTeeArrow = "↤";
var LeftTeeVector = "⥚";
var LeftTriangle = "⊲";
var LeftTriangleBar = "⧏";
var LeftTriangleEqual = "⊴";
var LeftUpDownVector = "⥑";
var LeftUpTeeVector = "⥠";
var LeftUpVector = "↿";
var LeftUpVectorBar = "⥘";
var LeftVector = "↼";
var LeftVectorBar = "⥒";
var Leftarrow = "⇐";
var Leftrightarrow = "⇔";
var LessEqualGreater = "⋚";
var LessFullEqual = "≦";
var LessGreater = "≶";
var LessLess = "⪡";
var LessSlantEqual = "⩽";
var LessTilde = "≲";
var Lfr = "𝔏";
var Ll = "⋘";
var Lleftarrow = "⇚";
var Lmidot = "Ŀ";
var LongLeftArrow = "⟵";
var LongLeftRightArrow = "⟷";
var LongRightArrow = "⟶";
var Longleftarrow = "⟸";
var Longleftrightarrow = "⟺";
var Longrightarrow = "⟹";
var Lopf = "𝕃";
var LowerLeftArrow = "↙";
var LowerRightArrow = "↘";
var Lscr = "ℒ";
var Lsh = "↰";
var Lstrok = "Ł";
var Lt = "≪";
var Mcy = "М";
var MediumSpace = " ";
var Mellintrf = "ℳ";
var Mfr = "𝔐";
var MinusPlus = "∓";
var Mopf = "𝕄";
var Mscr = "ℳ";
var Mu = "Μ";
var NJcy = "Њ";
var Nacute = "Ń";
var Ncaron = "Ň";
var Ncedil = "Ņ";
var Ncy = "Н";
var NegativeMediumSpace = "​";
var NegativeThickSpace = "​";
var NegativeThinSpace = "​";
var NegativeVeryThinSpace = "​";
var NestedGreaterGreater = "≫";
var NestedLessLess = "≪";
var NewLine = "\n";
var Nfr = "𝔑";
var NoBreak = "⁠";
var NonBreakingSpace = " ";
var Nopf = "ℕ";
var Not = "⫬";
var NotCongruent = "≢";
var NotCupCap = "≭";
var NotDoubleVerticalBar = "∦";
var NotElement = "∉";
var NotEqual = "≠";
var NotEqualTilde = "≂̸";
var NotExists = "∄";
var NotGreater = "≯";
var NotGreaterEqual = "≱";
var NotGreaterFullEqual = "≧̸";
var NotGreaterGreater = "≫̸";
var NotGreaterLess = "≹";
var NotGreaterSlantEqual = "⩾̸";
var NotGreaterTilde = "≵";
var NotHumpDownHump = "≎̸";
var NotHumpEqual = "≏̸";
var NotLeftTriangle = "⋪";
var NotLeftTriangleBar = "⧏̸";
var NotLeftTriangleEqual = "⋬";
var NotLess = "≮";
var NotLessEqual = "≰";
var NotLessGreater = "≸";
var NotLessLess = "≪̸";
var NotLessSlantEqual = "⩽̸";
var NotLessTilde = "≴";
var NotNestedGreaterGreater = "⪢̸";
var NotNestedLessLess = "⪡̸";
var NotPrecedes = "⊀";
var NotPrecedesEqual = "⪯̸";
var NotPrecedesSlantEqual = "⋠";
var NotReverseElement = "∌";
var NotRightTriangle = "⋫";
var NotRightTriangleBar = "⧐̸";
var NotRightTriangleEqual = "⋭";
var NotSquareSubset = "⊏̸";
var NotSquareSubsetEqual = "⋢";
var NotSquareSuperset = "⊐̸";
var NotSquareSupersetEqual = "⋣";
var NotSubset = "⊂⃒";
var NotSubsetEqual = "⊈";
var NotSucceeds = "⊁";
var NotSucceedsEqual = "⪰̸";
var NotSucceedsSlantEqual = "⋡";
var NotSucceedsTilde = "≿̸";
var NotSuperset = "⊃⃒";
var NotSupersetEqual = "⊉";
var NotTilde = "≁";
var NotTildeEqual = "≄";
var NotTildeFullEqual = "≇";
var NotTildeTilde = "≉";
var NotVerticalBar = "∤";
var Nscr = "𝒩";
var Ntild = "Ñ";
var Ntilde = "Ñ";
var Nu = "Ν";
var OElig = "Œ";
var Oacut = "Ó";
var Oacute = "Ó";
var Ocir = "Ô";
var Ocirc = "Ô";
var Ocy = "О";
var Odblac = "Ő";
var Ofr = "𝔒";
var Ograv = "Ò";
var Ograve = "Ò";
var Omacr = "Ō";
var Omega = "Ω";
var Omicron = "Ο";
var Oopf = "𝕆";
var OpenCurlyDoubleQuote = "“";
var OpenCurlyQuote = "‘";
var Or = "⩔";
var Oscr = "𝒪";
var Oslas = "Ø";
var Oslash = "Ø";
var Otild = "Õ";
var Otilde = "Õ";
var Otimes = "⨷";
var Oum = "Ö";
var Ouml = "Ö";
var OverBar = "‾";
var OverBrace = "⏞";
var OverBracket = "⎴";
var OverParenthesis = "⏜";
var PartialD = "∂";
var Pcy = "П";
var Pfr = "𝔓";
var Phi = "Φ";
var Pi = "Π";
var PlusMinus = "±";
var Poincareplane = "ℌ";
var Popf = "ℙ";
var Pr = "⪻";
var Precedes = "≺";
var PrecedesEqual = "⪯";
var PrecedesSlantEqual = "≼";
var PrecedesTilde = "≾";
var Prime = "″";
var Product = "∏";
var Proportion = "∷";
var Proportional = "∝";
var Pscr = "𝒫";
var Psi = "Ψ";
var QUO = "\"";
var QUOT = "\"";
var Qfr = "𝔔";
var Qopf = "ℚ";
var Qscr = "𝒬";
var RBarr = "⤐";
var RE = "®";
var REG = "®";
var Racute = "Ŕ";
var Rang = "⟫";
var Rarr = "↠";
var Rarrtl = "⤖";
var Rcaron = "Ř";
var Rcedil = "Ŗ";
var Rcy = "Р";
var Re = "ℜ";
var ReverseElement = "∋";
var ReverseEquilibrium = "⇋";
var ReverseUpEquilibrium = "⥯";
var Rfr = "ℜ";
var Rho = "Ρ";
var RightAngleBracket = "⟩";
var RightArrow = "→";
var RightArrowBar = "⇥";
var RightArrowLeftArrow = "⇄";
var RightCeiling = "⌉";
var RightDoubleBracket = "⟧";
var RightDownTeeVector = "⥝";
var RightDownVector = "⇂";
var RightDownVectorBar = "⥕";
var RightFloor = "⌋";
var RightTee = "⊢";
var RightTeeArrow = "↦";
var RightTeeVector = "⥛";
var RightTriangle = "⊳";
var RightTriangleBar = "⧐";
var RightTriangleEqual = "⊵";
var RightUpDownVector = "⥏";
var RightUpTeeVector = "⥜";
var RightUpVector = "↾";
var RightUpVectorBar = "⥔";
var RightVector = "⇀";
var RightVectorBar = "⥓";
var Rightarrow = "⇒";
var Ropf = "ℝ";
var RoundImplies = "⥰";
var Rrightarrow = "⇛";
var Rscr = "ℛ";
var Rsh = "↱";
var RuleDelayed = "⧴";
var SHCHcy = "Щ";
var SHcy = "Ш";
var SOFTcy = "Ь";
var Sacute = "Ś";
var Sc = "⪼";
var Scaron = "Š";
var Scedil = "Ş";
var Scirc = "Ŝ";
var Scy = "С";
var Sfr = "𝔖";
var ShortDownArrow = "↓";
var ShortLeftArrow = "←";
var ShortRightArrow = "→";
var ShortUpArrow = "↑";
var Sigma = "Σ";
var SmallCircle = "∘";
var Sopf = "𝕊";
var Sqrt = "√";
var Square = "□";
var SquareIntersection = "⊓";
var SquareSubset = "⊏";
var SquareSubsetEqual = "⊑";
var SquareSuperset = "⊐";
var SquareSupersetEqual = "⊒";
var SquareUnion = "⊔";
var Sscr = "𝒮";
var Star = "⋆";
var Sub = "⋐";
var Subset = "⋐";
var SubsetEqual = "⊆";
var Succeeds = "≻";
var SucceedsEqual = "⪰";
var SucceedsSlantEqual = "≽";
var SucceedsTilde = "≿";
var SuchThat = "∋";
var Sum = "∑";
var Sup = "⋑";
var Superset = "⊃";
var SupersetEqual = "⊇";
var Supset = "⋑";
var THOR = "Þ";
var THORN = "Þ";
var TRADE = "™";
var TSHcy = "Ћ";
var TScy = "Ц";
var Tab = "\t";
var Tau = "Τ";
var Tcaron = "Ť";
var Tcedil = "Ţ";
var Tcy = "Т";
var Tfr = "𝔗";
var Therefore = "∴";
var Theta = "Θ";
var ThickSpace = "  ";
var ThinSpace = " ";
var Tilde = "∼";
var TildeEqual = "≃";
var TildeFullEqual = "≅";
var TildeTilde = "≈";
var Topf = "𝕋";
var TripleDot = "⃛";
var Tscr = "𝒯";
var Tstrok = "Ŧ";
var Uacut = "Ú";
var Uacute = "Ú";
var Uarr = "↟";
var Uarrocir = "⥉";
var Ubrcy = "Ў";
var Ubreve = "Ŭ";
var Ucir = "Û";
var Ucirc = "Û";
var Ucy = "У";
var Udblac = "Ű";
var Ufr = "𝔘";
var Ugrav = "Ù";
var Ugrave = "Ù";
var Umacr = "Ū";
var UnderBar = "_";
var UnderBrace = "⏟";
var UnderBracket = "⎵";
var UnderParenthesis = "⏝";
var Union = "⋃";
var UnionPlus = "⊎";
var Uogon = "Ų";
var Uopf = "𝕌";
var UpArrow = "↑";
var UpArrowBar = "⤒";
var UpArrowDownArrow = "⇅";
var UpDownArrow = "↕";
var UpEquilibrium = "⥮";
var UpTee = "⊥";
var UpTeeArrow = "↥";
var Uparrow = "⇑";
var Updownarrow = "⇕";
var UpperLeftArrow = "↖";
var UpperRightArrow = "↗";
var Upsi = "ϒ";
var Upsilon = "Υ";
var Uring = "Ů";
var Uscr = "𝒰";
var Utilde = "Ũ";
var Uum = "Ü";
var Uuml = "Ü";
var VDash = "⊫";
var Vbar = "⫫";
var Vcy = "В";
var Vdash = "⊩";
var Vdashl = "⫦";
var Vee = "⋁";
var Verbar = "‖";
var Vert = "‖";
var VerticalBar = "∣";
var VerticalLine = "|";
var VerticalSeparator = "❘";
var VerticalTilde = "≀";
var VeryThinSpace = " ";
var Vfr = "𝔙";
var Vopf = "𝕍";
var Vscr = "𝒱";
var Vvdash = "⊪";
var Wcirc = "Ŵ";
var Wedge = "⋀";
var Wfr = "𝔚";
var Wopf = "𝕎";
var Wscr = "𝒲";
var Xfr = "𝔛";
var Xi = "Ξ";
var Xopf = "𝕏";
var Xscr = "𝒳";
var YAcy = "Я";
var YIcy = "Ї";
var YUcy = "Ю";
var Yacut = "Ý";
var Yacute = "Ý";
var Ycirc = "Ŷ";
var Ycy = "Ы";
var Yfr = "𝔜";
var Yopf = "𝕐";
var Yscr = "𝒴";
var Yuml = "Ÿ";
var ZHcy = "Ж";
var Zacute = "Ź";
var Zcaron = "Ž";
var Zcy = "З";
var Zdot = "Ż";
var ZeroWidthSpace = "​";
var Zeta = "Ζ";
var Zfr = "ℨ";
var Zopf = "ℤ";
var Zscr = "𝒵";
var aacut = "á";
var aacute = "á";
var abreve = "ă";
var ac = "∾";
var acE = "∾̳";
var acd = "∿";
var acir = "â";
var acirc = "â";
var acut = "´";
var acute = "´";
var acy = "а";
var aeli = "æ";
var aelig = "æ";
var af = "⁡";
var afr = "𝔞";
var agrav = "à";
var agrave = "à";
var alefsym = "ℵ";
var aleph = "ℵ";
var alpha = "α";
var amacr = "ā";
var amalg = "⨿";
var am = "&";
var amp = "&";
var and = "∧";
var andand = "⩕";
var andd = "⩜";
var andslope = "⩘";
var andv = "⩚";
var ang = "∠";
var ange = "⦤";
var angle = "∠";
var angmsd = "∡";
var angmsdaa = "⦨";
var angmsdab = "⦩";
var angmsdac = "⦪";
var angmsdad = "⦫";
var angmsdae = "⦬";
var angmsdaf = "⦭";
var angmsdag = "⦮";
var angmsdah = "⦯";
var angrt = "∟";
var angrtvb = "⊾";
var angrtvbd = "⦝";
var angsph = "∢";
var angst = "Å";
var angzarr = "⍼";
var aogon = "ą";
var aopf = "𝕒";
var ap = "≈";
var apE = "⩰";
var apacir = "⩯";
var ape = "≊";
var apid = "≋";
var apos = "'";
var approx = "≈";
var approxeq = "≊";
var arin = "å";
var aring = "å";
var ascr = "𝒶";
var ast = "*";
var asymp = "≈";
var asympeq = "≍";
var atild = "ã";
var atilde = "ã";
var aum = "ä";
var auml = "ä";
var awconint = "∳";
var awint = "⨑";
var bNot = "⫭";
var backcong = "≌";
var backepsilon = "϶";
var backprime = "‵";
var backsim = "∽";
var backsimeq = "⋍";
var barvee = "⊽";
var barwed = "⌅";
var barwedge = "⌅";
var bbrk = "⎵";
var bbrktbrk = "⎶";
var bcong = "≌";
var bcy = "б";
var bdquo = "„";
var becaus = "∵";
var because = "∵";
var bemptyv = "⦰";
var bepsi = "϶";
var bernou = "ℬ";
var beta = "β";
var beth = "ℶ";
var between = "≬";
var bfr = "𝔟";
var bigcap = "⋂";
var bigcirc = "◯";
var bigcup = "⋃";
var bigodot = "⨀";
var bigoplus = "⨁";
var bigotimes = "⨂";
var bigsqcup = "⨆";
var bigstar = "★";
var bigtriangledown = "▽";
var bigtriangleup = "△";
var biguplus = "⨄";
var bigvee = "⋁";
var bigwedge = "⋀";
var bkarow = "⤍";
var blacklozenge = "⧫";
var blacksquare = "▪";
var blacktriangle = "▴";
var blacktriangledown = "▾";
var blacktriangleleft = "◂";
var blacktriangleright = "▸";
var blank = "␣";
var blk12 = "▒";
var blk14 = "░";
var blk34 = "▓";
var block = "█";
var bne = "=⃥";
var bnequiv = "≡⃥";
var bnot = "⌐";
var bopf = "𝕓";
var bot = "⊥";
var bottom = "⊥";
var bowtie = "⋈";
var boxDL = "╗";
var boxDR = "╔";
var boxDl = "╖";
var boxDr = "╓";
var boxH = "═";
var boxHD = "╦";
var boxHU = "╩";
var boxHd = "╤";
var boxHu = "╧";
var boxUL = "╝";
var boxUR = "╚";
var boxUl = "╜";
var boxUr = "╙";
var boxV = "║";
var boxVH = "╬";
var boxVL = "╣";
var boxVR = "╠";
var boxVh = "╫";
var boxVl = "╢";
var boxVr = "╟";
var boxbox = "⧉";
var boxdL = "╕";
var boxdR = "╒";
var boxdl = "┐";
var boxdr = "┌";
var boxh = "─";
var boxhD = "╥";
var boxhU = "╨";
var boxhd = "┬";
var boxhu = "┴";
var boxminus = "⊟";
var boxplus = "⊞";
var boxtimes = "⊠";
var boxuL = "╛";
var boxuR = "╘";
var boxul = "┘";
var boxur = "└";
var boxv = "│";
var boxvH = "╪";
var boxvL = "╡";
var boxvR = "╞";
var boxvh = "┼";
var boxvl = "┤";
var boxvr = "├";
var bprime = "‵";
var breve = "˘";
var brvba = "¦";
var brvbar = "¦";
var bscr = "𝒷";
var bsemi = "⁏";
var bsim = "∽";
var bsime = "⋍";
var bsol = "\\";
var bsolb = "⧅";
var bsolhsub = "⟈";
var bull = "•";
var bullet = "•";
var bump = "≎";
var bumpE = "⪮";
var bumpe = "≏";
var bumpeq = "≏";
var cacute = "ć";
var cap = "∩";
var capand = "⩄";
var capbrcup = "⩉";
var capcap = "⩋";
var capcup = "⩇";
var capdot = "⩀";
var caps = "∩︀";
var caret = "⁁";
var caron = "ˇ";
var ccaps = "⩍";
var ccaron = "č";
var ccedi = "ç";
var ccedil = "ç";
var ccirc = "ĉ";
var ccups = "⩌";
var ccupssm = "⩐";
var cdot = "ċ";
var cedi = "¸";
var cedil = "¸";
var cemptyv = "⦲";
var cen = "¢";
var cent = "¢";
var centerdot = "·";
var cfr = "𝔠";
var chcy = "ч";
var check = "✓";
var checkmark = "✓";
var chi = "χ";
var cir = "○";
var cirE = "⧃";
var circ = "ˆ";
var circeq = "≗";
var circlearrowleft = "↺";
var circlearrowright = "↻";
var circledR = "®";
var circledS = "Ⓢ";
var circledast = "⊛";
var circledcirc = "⊚";
var circleddash = "⊝";
var cire = "≗";
var cirfnint = "⨐";
var cirmid = "⫯";
var cirscir = "⧂";
var clubs = "♣";
var clubsuit = "♣";
var colon = ":";
var colone = "≔";
var coloneq = "≔";
var comma = ",";
var commat = "@";
var comp = "∁";
var compfn = "∘";
var complement = "∁";
var complexes = "ℂ";
var cong = "≅";
var congdot = "⩭";
var conint = "∮";
var copf = "𝕔";
var coprod = "∐";
var cop = "©";
var copy = "©";
var copysr = "℗";
var crarr = "↵";
var cross = "✗";
var cscr = "𝒸";
var csub = "⫏";
var csube = "⫑";
var csup = "⫐";
var csupe = "⫒";
var ctdot = "⋯";
var cudarrl = "⤸";
var cudarrr = "⤵";
var cuepr = "⋞";
var cuesc = "⋟";
var cularr = "↶";
var cularrp = "⤽";
var cup = "∪";
var cupbrcap = "⩈";
var cupcap = "⩆";
var cupcup = "⩊";
var cupdot = "⊍";
var cupor = "⩅";
var cups = "∪︀";
var curarr = "↷";
var curarrm = "⤼";
var curlyeqprec = "⋞";
var curlyeqsucc = "⋟";
var curlyvee = "⋎";
var curlywedge = "⋏";
var curre = "¤";
var curren = "¤";
var curvearrowleft = "↶";
var curvearrowright = "↷";
var cuvee = "⋎";
var cuwed = "⋏";
var cwconint = "∲";
var cwint = "∱";
var cylcty = "⌭";
var dArr = "⇓";
var dHar = "⥥";
var dagger = "†";
var daleth = "ℸ";
var darr = "↓";
var dash = "‐";
var dashv = "⊣";
var dbkarow = "⤏";
var dblac = "˝";
var dcaron = "ď";
var dcy = "д";
var dd = "ⅆ";
var ddagger = "‡";
var ddarr = "⇊";
var ddotseq = "⩷";
var de = "°";
var deg = "°";
var delta = "δ";
var demptyv = "⦱";
var dfisht = "⥿";
var dfr = "𝔡";
var dharl = "⇃";
var dharr = "⇂";
var diam = "⋄";
var diamond = "⋄";
var diamondsuit = "♦";
var diams = "♦";
var die = "¨";
var digamma = "ϝ";
var disin = "⋲";
var div = "÷";
var divid = "÷";
var divide = "÷";
var divideontimes = "⋇";
var divonx = "⋇";
var djcy = "ђ";
var dlcorn = "⌞";
var dlcrop = "⌍";
var dollar = "$";
var dopf = "𝕕";
var dot = "˙";
var doteq = "≐";
var doteqdot = "≑";
var dotminus = "∸";
var dotplus = "∔";
var dotsquare = "⊡";
var doublebarwedge = "⌆";
var downarrow = "↓";
var downdownarrows = "⇊";
var downharpoonleft = "⇃";
var downharpoonright = "⇂";
var drbkarow = "⤐";
var drcorn = "⌟";
var drcrop = "⌌";
var dscr = "𝒹";
var dscy = "ѕ";
var dsol = "⧶";
var dstrok = "đ";
var dtdot = "⋱";
var dtri = "▿";
var dtrif = "▾";
var duarr = "⇵";
var duhar = "⥯";
var dwangle = "⦦";
var dzcy = "џ";
var dzigrarr = "⟿";
var eDDot = "⩷";
var eDot = "≑";
var eacut = "é";
var eacute = "é";
var easter = "⩮";
var ecaron = "ě";
var ecir = "ê";
var ecirc = "ê";
var ecolon = "≕";
var ecy = "э";
var edot = "ė";
var ee = "ⅇ";
var efDot = "≒";
var efr = "𝔢";
var eg = "⪚";
var egrav = "è";
var egrave = "è";
var egs = "⪖";
var egsdot = "⪘";
var el = "⪙";
var elinters = "⏧";
var ell = "ℓ";
var els = "⪕";
var elsdot = "⪗";
var emacr = "ē";
var empty = "∅";
var emptyset = "∅";
var emptyv = "∅";
var emsp13 = " ";
var emsp14 = " ";
var emsp = " ";
var eng = "ŋ";
var ensp = " ";
var eogon = "ę";
var eopf = "𝕖";
var epar = "⋕";
var eparsl = "⧣";
var eplus = "⩱";
var epsi = "ε";
var epsilon = "ε";
var epsiv = "ϵ";
var eqcirc = "≖";
var eqcolon = "≕";
var eqsim = "≂";
var eqslantgtr = "⪖";
var eqslantless = "⪕";
var equals = "=";
var equest = "≟";
var equiv = "≡";
var equivDD = "⩸";
var eqvparsl = "⧥";
var erDot = "≓";
var erarr = "⥱";
var escr = "ℯ";
var esdot = "≐";
var esim = "≂";
var eta = "η";
var et = "ð";
var eth = "ð";
var eum = "ë";
var euml = "ë";
var euro = "€";
var excl = "!";
var exist = "∃";
var expectation = "ℰ";
var exponentiale = "ⅇ";
var fallingdotseq = "≒";
var fcy = "ф";
var female = "♀";
var ffilig = "ﬃ";
var fflig = "ﬀ";
var ffllig = "ﬄ";
var ffr = "𝔣";
var filig = "ﬁ";
var fjlig = "fj";
var flat = "♭";
var fllig = "ﬂ";
var fltns = "▱";
var fnof = "ƒ";
var fopf = "𝕗";
var forall = "∀";
var fork = "⋔";
var forkv = "⫙";
var fpartint = "⨍";
var frac1 = "¼";
var frac12 = "½";
var frac13 = "⅓";
var frac14 = "¼";
var frac15 = "⅕";
var frac16 = "⅙";
var frac18 = "⅛";
var frac23 = "⅔";
var frac25 = "⅖";
var frac3 = "¾";
var frac34 = "¾";
var frac35 = "⅗";
var frac38 = "⅜";
var frac45 = "⅘";
var frac56 = "⅚";
var frac58 = "⅝";
var frac78 = "⅞";
var frasl = "⁄";
var frown = "⌢";
var fscr = "𝒻";
var gE = "≧";
var gEl = "⪌";
var gacute = "ǵ";
var gamma = "γ";
var gammad = "ϝ";
var gap = "⪆";
var gbreve = "ğ";
var gcirc = "ĝ";
var gcy = "г";
var gdot = "ġ";
var ge = "≥";
var gel = "⋛";
var geq = "≥";
var geqq = "≧";
var geqslant = "⩾";
var ges = "⩾";
var gescc = "⪩";
var gesdot = "⪀";
var gesdoto = "⪂";
var gesdotol = "⪄";
var gesl = "⋛︀";
var gesles = "⪔";
var gfr = "𝔤";
var gg = "≫";
var ggg = "⋙";
var gimel = "ℷ";
var gjcy = "ѓ";
var gl = "≷";
var glE = "⪒";
var gla = "⪥";
var glj = "⪤";
var gnE = "≩";
var gnap = "⪊";
var gnapprox = "⪊";
var gne = "⪈";
var gneq = "⪈";
var gneqq = "≩";
var gnsim = "⋧";
var gopf = "𝕘";
var grave = "`";
var gscr = "ℊ";
var gsim = "≳";
var gsime = "⪎";
var gsiml = "⪐";
var g = ">";
var gt = ">";
var gtcc = "⪧";
var gtcir = "⩺";
var gtdot = "⋗";
var gtlPar = "⦕";
var gtquest = "⩼";
var gtrapprox = "⪆";
var gtrarr = "⥸";
var gtrdot = "⋗";
var gtreqless = "⋛";
var gtreqqless = "⪌";
var gtrless = "≷";
var gtrsim = "≳";
var gvertneqq = "≩︀";
var gvnE = "≩︀";
var hArr = "⇔";
var hairsp = " ";
var half = "½";
var hamilt = "ℋ";
var hardcy = "ъ";
var harr = "↔";
var harrcir = "⥈";
var harrw = "↭";
var hbar = "ℏ";
var hcirc = "ĥ";
var hearts = "♥";
var heartsuit = "♥";
var hellip = "…";
var hercon = "⊹";
var hfr = "𝔥";
var hksearow = "⤥";
var hkswarow = "⤦";
var hoarr = "⇿";
var homtht = "∻";
var hookleftarrow = "↩";
var hookrightarrow = "↪";
var hopf = "𝕙";
var horbar = "―";
var hscr = "𝒽";
var hslash = "ℏ";
var hstrok = "ħ";
var hybull = "⁃";
var hyphen = "‐";
var iacut = "í";
var iacute = "í";
var ic = "⁣";
var icir = "î";
var icirc = "î";
var icy = "и";
var iecy = "е";
var iexc = "¡";
var iexcl = "¡";
var iff = "⇔";
var ifr = "𝔦";
var igrav = "ì";
var igrave = "ì";
var ii = "ⅈ";
var iiiint = "⨌";
var iiint = "∭";
var iinfin = "⧜";
var iiota = "℩";
var ijlig = "ĳ";
var imacr = "ī";
var image = "ℑ";
var imagline = "ℐ";
var imagpart = "ℑ";
var imath = "ı";
var imof = "⊷";
var imped = "Ƶ";
var incare = "℅";
var infin = "∞";
var infintie = "⧝";
var inodot = "ı";
var int = "∫";
var intcal = "⊺";
var integers = "ℤ";
var intercal = "⊺";
var intlarhk = "⨗";
var intprod = "⨼";
var iocy = "ё";
var iogon = "į";
var iopf = "𝕚";
var iota = "ι";
var iprod = "⨼";
var iques = "¿";
var iquest = "¿";
var iscr = "𝒾";
var isin = "∈";
var isinE = "⋹";
var isindot = "⋵";
var isins = "⋴";
var isinsv = "⋳";
var isinv = "∈";
var it = "⁢";
var itilde = "ĩ";
var iukcy = "і";
var ium = "ï";
var iuml = "ï";
var jcirc = "ĵ";
var jcy = "й";
var jfr = "𝔧";
var jmath = "ȷ";
var jopf = "𝕛";
var jscr = "𝒿";
var jsercy = "ј";
var jukcy = "є";
var kappa = "κ";
var kappav = "ϰ";
var kcedil = "ķ";
var kcy = "к";
var kfr = "𝔨";
var kgreen = "ĸ";
var khcy = "х";
var kjcy = "ќ";
var kopf = "𝕜";
var kscr = "𝓀";
var lAarr = "⇚";
var lArr = "⇐";
var lAtail = "⤛";
var lBarr = "⤎";
var lE = "≦";
var lEg = "⪋";
var lHar = "⥢";
var lacute = "ĺ";
var laemptyv = "⦴";
var lagran = "ℒ";
var lambda = "λ";
var lang = "⟨";
var langd = "⦑";
var langle = "⟨";
var lap = "⪅";
var laqu = "«";
var laquo = "«";
var larr = "←";
var larrb = "⇤";
var larrbfs = "⤟";
var larrfs = "⤝";
var larrhk = "↩";
var larrlp = "↫";
var larrpl = "⤹";
var larrsim = "⥳";
var larrtl = "↢";
var lat = "⪫";
var latail = "⤙";
var late = "⪭";
var lates = "⪭︀";
var lbarr = "⤌";
var lbbrk = "❲";
var lbrace = "{";
var lbrack = "[";
var lbrke = "⦋";
var lbrksld = "⦏";
var lbrkslu = "⦍";
var lcaron = "ľ";
var lcedil = "ļ";
var lceil = "⌈";
var lcub = "{";
var lcy = "л";
var ldca = "⤶";
var ldquo = "“";
var ldquor = "„";
var ldrdhar = "⥧";
var ldrushar = "⥋";
var ldsh = "↲";
var le = "≤";
var leftarrow = "←";
var leftarrowtail = "↢";
var leftharpoondown = "↽";
var leftharpoonup = "↼";
var leftleftarrows = "⇇";
var leftrightarrow = "↔";
var leftrightarrows = "⇆";
var leftrightharpoons = "⇋";
var leftrightsquigarrow = "↭";
var leftthreetimes = "⋋";
var leg = "⋚";
var leq = "≤";
var leqq = "≦";
var leqslant = "⩽";
var les = "⩽";
var lescc = "⪨";
var lesdot = "⩿";
var lesdoto = "⪁";
var lesdotor = "⪃";
var lesg = "⋚︀";
var lesges = "⪓";
var lessapprox = "⪅";
var lessdot = "⋖";
var lesseqgtr = "⋚";
var lesseqqgtr = "⪋";
var lessgtr = "≶";
var lesssim = "≲";
var lfisht = "⥼";
var lfloor = "⌊";
var lfr = "𝔩";
var lg = "≶";
var lgE = "⪑";
var lhard = "↽";
var lharu = "↼";
var lharul = "⥪";
var lhblk = "▄";
var ljcy = "љ";
var ll = "≪";
var llarr = "⇇";
var llcorner = "⌞";
var llhard = "⥫";
var lltri = "◺";
var lmidot = "ŀ";
var lmoust = "⎰";
var lmoustache = "⎰";
var lnE = "≨";
var lnap = "⪉";
var lnapprox = "⪉";
var lne = "⪇";
var lneq = "⪇";
var lneqq = "≨";
var lnsim = "⋦";
var loang = "⟬";
var loarr = "⇽";
var lobrk = "⟦";
var longleftarrow = "⟵";
var longleftrightarrow = "⟷";
var longmapsto = "⟼";
var longrightarrow = "⟶";
var looparrowleft = "↫";
var looparrowright = "↬";
var lopar = "⦅";
var lopf = "𝕝";
var loplus = "⨭";
var lotimes = "⨴";
var lowast = "∗";
var lowbar = "_";
var loz = "◊";
var lozenge = "◊";
var lozf = "⧫";
var lpar = "(";
var lparlt = "⦓";
var lrarr = "⇆";
var lrcorner = "⌟";
var lrhar = "⇋";
var lrhard = "⥭";
var lrm = "‎";
var lrtri = "⊿";
var lsaquo = "‹";
var lscr = "𝓁";
var lsh = "↰";
var lsim = "≲";
var lsime = "⪍";
var lsimg = "⪏";
var lsqb = "[";
var lsquo = "‘";
var lsquor = "‚";
var lstrok = "ł";
var l = "<";
var lt = "<";
var ltcc = "⪦";
var ltcir = "⩹";
var ltdot = "⋖";
var lthree = "⋋";
var ltimes = "⋉";
var ltlarr = "⥶";
var ltquest = "⩻";
var ltrPar = "⦖";
var ltri = "◃";
var ltrie = "⊴";
var ltrif = "◂";
var lurdshar = "⥊";
var luruhar = "⥦";
var lvertneqq = "≨︀";
var lvnE = "≨︀";
var mDDot = "∺";
var mac = "¯";
var macr = "¯";
var male = "♂";
var malt = "✠";
var maltese = "✠";
var map = "↦";
var mapsto = "↦";
var mapstodown = "↧";
var mapstoleft = "↤";
var mapstoup = "↥";
var marker = "▮";
var mcomma = "⨩";
var mcy = "м";
var mdash = "—";
var measuredangle = "∡";
var mfr = "𝔪";
var mho = "℧";
var micr = "µ";
var micro = "µ";
var mid = "∣";
var midast = "*";
var midcir = "⫰";
var middo = "·";
var middot = "·";
var minus = "−";
var minusb = "⊟";
var minusd = "∸";
var minusdu = "⨪";
var mlcp = "⫛";
var mldr = "…";
var mnplus = "∓";
var models = "⊧";
var mopf = "𝕞";
var mp = "∓";
var mscr = "𝓂";
var mstpos = "∾";
var mu = "μ";
var multimap = "⊸";
var mumap = "⊸";
var nGg = "⋙̸";
var nGt = "≫⃒";
var nGtv = "≫̸";
var nLeftarrow = "⇍";
var nLeftrightarrow = "⇎";
var nLl = "⋘̸";
var nLt = "≪⃒";
var nLtv = "≪̸";
var nRightarrow = "⇏";
var nVDash = "⊯";
var nVdash = "⊮";
var nabla = "∇";
var nacute = "ń";
var nang = "∠⃒";
var nap = "≉";
var napE = "⩰̸";
var napid = "≋̸";
var napos = "ŉ";
var napprox = "≉";
var natur = "♮";
var natural = "♮";
var naturals = "ℕ";
var nbs = " ";
var nbsp = " ";
var nbump = "≎̸";
var nbumpe = "≏̸";
var ncap = "⩃";
var ncaron = "ň";
var ncedil = "ņ";
var ncong = "≇";
var ncongdot = "⩭̸";
var ncup = "⩂";
var ncy = "н";
var ndash = "–";
var ne = "≠";
var neArr = "⇗";
var nearhk = "⤤";
var nearr = "↗";
var nearrow = "↗";
var nedot = "≐̸";
var nequiv = "≢";
var nesear = "⤨";
var nesim = "≂̸";
var nexist = "∄";
var nexists = "∄";
var nfr = "𝔫";
var ngE = "≧̸";
var nge = "≱";
var ngeq = "≱";
var ngeqq = "≧̸";
var ngeqslant = "⩾̸";
var nges = "⩾̸";
var ngsim = "≵";
var ngt = "≯";
var ngtr = "≯";
var nhArr = "⇎";
var nharr = "↮";
var nhpar = "⫲";
var ni = "∋";
var nis = "⋼";
var nisd = "⋺";
var niv = "∋";
var njcy = "њ";
var nlArr = "⇍";
var nlE = "≦̸";
var nlarr = "↚";
var nldr = "‥";
var nle = "≰";
var nleftarrow = "↚";
var nleftrightarrow = "↮";
var nleq = "≰";
var nleqq = "≦̸";
var nleqslant = "⩽̸";
var nles = "⩽̸";
var nless = "≮";
var nlsim = "≴";
var nlt = "≮";
var nltri = "⋪";
var nltrie = "⋬";
var nmid = "∤";
var nopf = "𝕟";
var no = "¬";
var not = "¬";
var notin = "∉";
var notinE = "⋹̸";
var notindot = "⋵̸";
var notinva = "∉";
var notinvb = "⋷";
var notinvc = "⋶";
var notni = "∌";
var notniva = "∌";
var notnivb = "⋾";
var notnivc = "⋽";
var npar = "∦";
var nparallel = "∦";
var nparsl = "⫽⃥";
var npart = "∂̸";
var npolint = "⨔";
var npr = "⊀";
var nprcue = "⋠";
var npre = "⪯̸";
var nprec = "⊀";
var npreceq = "⪯̸";
var nrArr = "⇏";
var nrarr = "↛";
var nrarrc = "⤳̸";
var nrarrw = "↝̸";
var nrightarrow = "↛";
var nrtri = "⋫";
var nrtrie = "⋭";
var nsc = "⊁";
var nsccue = "⋡";
var nsce = "⪰̸";
var nscr = "𝓃";
var nshortmid = "∤";
var nshortparallel = "∦";
var nsim = "≁";
var nsime = "≄";
var nsimeq = "≄";
var nsmid = "∤";
var nspar = "∦";
var nsqsube = "⋢";
var nsqsupe = "⋣";
var nsub = "⊄";
var nsubE = "⫅̸";
var nsube = "⊈";
var nsubset = "⊂⃒";
var nsubseteq = "⊈";
var nsubseteqq = "⫅̸";
var nsucc = "⊁";
var nsucceq = "⪰̸";
var nsup = "⊅";
var nsupE = "⫆̸";
var nsupe = "⊉";
var nsupset = "⊃⃒";
var nsupseteq = "⊉";
var nsupseteqq = "⫆̸";
var ntgl = "≹";
var ntild = "ñ";
var ntilde = "ñ";
var ntlg = "≸";
var ntriangleleft = "⋪";
var ntrianglelefteq = "⋬";
var ntriangleright = "⋫";
var ntrianglerighteq = "⋭";
var nu = "ν";
var num = "#";
var numero = "№";
var numsp = " ";
var nvDash = "⊭";
var nvHarr = "⤄";
var nvap = "≍⃒";
var nvdash = "⊬";
var nvge = "≥⃒";
var nvgt = ">⃒";
var nvinfin = "⧞";
var nvlArr = "⤂";
var nvle = "≤⃒";
var nvlt = "<⃒";
var nvltrie = "⊴⃒";
var nvrArr = "⤃";
var nvrtrie = "⊵⃒";
var nvsim = "∼⃒";
var nwArr = "⇖";
var nwarhk = "⤣";
var nwarr = "↖";
var nwarrow = "↖";
var nwnear = "⤧";
var oS = "Ⓢ";
var oacut = "ó";
var oacute = "ó";
var oast = "⊛";
var ocir = "ô";
var ocirc = "ô";
var ocy = "о";
var odash = "⊝";
var odblac = "ő";
var odiv = "⨸";
var odot = "⊙";
var odsold = "⦼";
var oelig = "œ";
var ofcir = "⦿";
var ofr = "𝔬";
var ogon = "˛";
var ograv = "ò";
var ograve = "ò";
var ogt = "⧁";
var ohbar = "⦵";
var ohm = "Ω";
var oint = "∮";
var olarr = "↺";
var olcir = "⦾";
var olcross = "⦻";
var oline = "‾";
var olt = "⧀";
var omacr = "ō";
var omega = "ω";
var omicron = "ο";
var omid = "⦶";
var ominus = "⊖";
var oopf = "𝕠";
var opar = "⦷";
var operp = "⦹";
var oplus = "⊕";
var or = "∨";
var orarr = "↻";
var ord = "º";
var order = "ℴ";
var orderof = "ℴ";
var ordf = "ª";
var ordm = "º";
var origof = "⊶";
var oror = "⩖";
var orslope = "⩗";
var orv = "⩛";
var oscr = "ℴ";
var oslas = "ø";
var oslash = "ø";
var osol = "⊘";
var otild = "õ";
var otilde = "õ";
var otimes = "⊗";
var otimesas = "⨶";
var oum = "ö";
var ouml = "ö";
var ovbar = "⌽";
var par = "¶";
var para = "¶";
var parallel = "∥";
var parsim = "⫳";
var parsl = "⫽";
var part = "∂";
var pcy = "п";
var percnt = "%";
var period = ".";
var permil = "‰";
var perp = "⊥";
var pertenk = "‱";
var pfr = "𝔭";
var phi = "φ";
var phiv = "ϕ";
var phmmat = "ℳ";
var phone = "☎";
var pi = "π";
var pitchfork = "⋔";
var piv = "ϖ";
var planck = "ℏ";
var planckh = "ℎ";
var plankv = "ℏ";
var plus = "+";
var plusacir = "⨣";
var plusb = "⊞";
var pluscir = "⨢";
var plusdo = "∔";
var plusdu = "⨥";
var pluse = "⩲";
var plusm = "±";
var plusmn = "±";
var plussim = "⨦";
var plustwo = "⨧";
var pm = "±";
var pointint = "⨕";
var popf = "𝕡";
var poun = "£";
var pound = "£";
var pr = "≺";
var prE = "⪳";
var prap = "⪷";
var prcue = "≼";
var pre = "⪯";
var prec = "≺";
var precapprox = "⪷";
var preccurlyeq = "≼";
var preceq = "⪯";
var precnapprox = "⪹";
var precneqq = "⪵";
var precnsim = "⋨";
var precsim = "≾";
var prime = "′";
var primes = "ℙ";
var prnE = "⪵";
var prnap = "⪹";
var prnsim = "⋨";
var prod = "∏";
var profalar = "⌮";
var profline = "⌒";
var profsurf = "⌓";
var prop = "∝";
var propto = "∝";
var prsim = "≾";
var prurel = "⊰";
var pscr = "𝓅";
var psi = "ψ";
var puncsp = " ";
var qfr = "𝔮";
var qint = "⨌";
var qopf = "𝕢";
var qprime = "⁗";
var qscr = "𝓆";
var quaternions = "ℍ";
var quatint = "⨖";
var quest = "?";
var questeq = "≟";
var quo = "\"";
var quot = "\"";
var rAarr = "⇛";
var rArr = "⇒";
var rAtail = "⤜";
var rBarr = "⤏";
var rHar = "⥤";
var race = "∽̱";
var racute = "ŕ";
var radic = "√";
var raemptyv = "⦳";
var rang = "⟩";
var rangd = "⦒";
var range = "⦥";
var rangle = "⟩";
var raqu = "»";
var raquo = "»";
var rarr = "→";
var rarrap = "⥵";
var rarrb = "⇥";
var rarrbfs = "⤠";
var rarrc = "⤳";
var rarrfs = "⤞";
var rarrhk = "↪";
var rarrlp = "↬";
var rarrpl = "⥅";
var rarrsim = "⥴";
var rarrtl = "↣";
var rarrw = "↝";
var ratail = "⤚";
var ratio = "∶";
var rationals = "ℚ";
var rbarr = "⤍";
var rbbrk = "❳";
var rbrace = "}";
var rbrack = "]";
var rbrke = "⦌";
var rbrksld = "⦎";
var rbrkslu = "⦐";
var rcaron = "ř";
var rcedil = "ŗ";
var rceil = "⌉";
var rcub = "}";
var rcy = "р";
var rdca = "⤷";
var rdldhar = "⥩";
var rdquo = "”";
var rdquor = "”";
var rdsh = "↳";
var real = "ℜ";
var realine = "ℛ";
var realpart = "ℜ";
var reals = "ℝ";
var rect = "▭";
var re = "®";
var reg = "®";
var rfisht = "⥽";
var rfloor = "⌋";
var rfr = "𝔯";
var rhard = "⇁";
var rharu = "⇀";
var rharul = "⥬";
var rho = "ρ";
var rhov = "ϱ";
var rightarrow = "→";
var rightarrowtail = "↣";
var rightharpoondown = "⇁";
var rightharpoonup = "⇀";
var rightleftarrows = "⇄";
var rightleftharpoons = "⇌";
var rightrightarrows = "⇉";
var rightsquigarrow = "↝";
var rightthreetimes = "⋌";
var ring = "˚";
var risingdotseq = "≓";
var rlarr = "⇄";
var rlhar = "⇌";
var rlm = "‏";
var rmoust = "⎱";
var rmoustache = "⎱";
var rnmid = "⫮";
var roang = "⟭";
var roarr = "⇾";
var robrk = "⟧";
var ropar = "⦆";
var ropf = "𝕣";
var roplus = "⨮";
var rotimes = "⨵";
var rpar = ")";
var rpargt = "⦔";
var rppolint = "⨒";
var rrarr = "⇉";
var rsaquo = "›";
var rscr = "𝓇";
var rsh = "↱";
var rsqb = "]";
var rsquo = "’";
var rsquor = "’";
var rthree = "⋌";
var rtimes = "⋊";
var rtri = "▹";
var rtrie = "⊵";
var rtrif = "▸";
var rtriltri = "⧎";
var ruluhar = "⥨";
var rx = "℞";
var sacute = "ś";
var sbquo = "‚";
var sc = "≻";
var scE = "⪴";
var scap = "⪸";
var scaron = "š";
var sccue = "≽";
var sce = "⪰";
var scedil = "ş";
var scirc = "ŝ";
var scnE = "⪶";
var scnap = "⪺";
var scnsim = "⋩";
var scpolint = "⨓";
var scsim = "≿";
var scy = "с";
var sdot = "⋅";
var sdotb = "⊡";
var sdote = "⩦";
var seArr = "⇘";
var searhk = "⤥";
var searr = "↘";
var searrow = "↘";
var sec = "§";
var sect = "§";
var semi = ";";
var seswar = "⤩";
var setminus = "∖";
var setmn = "∖";
var sext = "✶";
var sfr = "𝔰";
var sfrown = "⌢";
var sharp = "♯";
var shchcy = "щ";
var shcy = "ш";
var shortmid = "∣";
var shortparallel = "∥";
var sh = "­";
var shy = "­";
var sigma = "σ";
var sigmaf = "ς";
var sigmav = "ς";
var sim = "∼";
var simdot = "⩪";
var sime = "≃";
var simeq = "≃";
var simg = "⪞";
var simgE = "⪠";
var siml = "⪝";
var simlE = "⪟";
var simne = "≆";
var simplus = "⨤";
var simrarr = "⥲";
var slarr = "←";
var smallsetminus = "∖";
var smashp = "⨳";
var smeparsl = "⧤";
var smid = "∣";
var smile = "⌣";
var smt = "⪪";
var smte = "⪬";
var smtes = "⪬︀";
var softcy = "ь";
var sol = "/";
var solb = "⧄";
var solbar = "⌿";
var sopf = "𝕤";
var spades = "♠";
var spadesuit = "♠";
var spar = "∥";
var sqcap = "⊓";
var sqcaps = "⊓︀";
var sqcup = "⊔";
var sqcups = "⊔︀";
var sqsub = "⊏";
var sqsube = "⊑";
var sqsubset = "⊏";
var sqsubseteq = "⊑";
var sqsup = "⊐";
var sqsupe = "⊒";
var sqsupset = "⊐";
var sqsupseteq = "⊒";
var squ = "□";
var square = "□";
var squarf = "▪";
var squf = "▪";
var srarr = "→";
var sscr = "𝓈";
var ssetmn = "∖";
var ssmile = "⌣";
var sstarf = "⋆";
var star = "☆";
var starf = "★";
var straightepsilon = "ϵ";
var straightphi = "ϕ";
var strns = "¯";
var sub = "⊂";
var subE = "⫅";
var subdot = "⪽";
var sube = "⊆";
var subedot = "⫃";
var submult = "⫁";
var subnE = "⫋";
var subne = "⊊";
var subplus = "⪿";
var subrarr = "⥹";
var subset = "⊂";
var subseteq = "⊆";
var subseteqq = "⫅";
var subsetneq = "⊊";
var subsetneqq = "⫋";
var subsim = "⫇";
var subsub = "⫕";
var subsup = "⫓";
var succ = "≻";
var succapprox = "⪸";
var succcurlyeq = "≽";
var succeq = "⪰";
var succnapprox = "⪺";
var succneqq = "⪶";
var succnsim = "⋩";
var succsim = "≿";
var sum = "∑";
var sung = "♪";
var sup = "⊃";
var sup1 = "¹";
var sup2 = "²";
var sup3 = "³";
var supE = "⫆";
var supdot = "⪾";
var supdsub = "⫘";
var supe = "⊇";
var supedot = "⫄";
var suphsol = "⟉";
var suphsub = "⫗";
var suplarr = "⥻";
var supmult = "⫂";
var supnE = "⫌";
var supne = "⊋";
var supplus = "⫀";
var supset = "⊃";
var supseteq = "⊇";
var supseteqq = "⫆";
var supsetneq = "⊋";
var supsetneqq = "⫌";
var supsim = "⫈";
var supsub = "⫔";
var supsup = "⫖";
var swArr = "⇙";
var swarhk = "⤦";
var swarr = "↙";
var swarrow = "↙";
var swnwar = "⤪";
var szli = "ß";
var szlig = "ß";
var target = "⌖";
var tau = "τ";
var tbrk = "⎴";
var tcaron = "ť";
var tcedil = "ţ";
var tcy = "т";
var tdot = "⃛";
var telrec = "⌕";
var tfr = "𝔱";
var there4 = "∴";
var therefore = "∴";
var theta = "θ";
var thetasym = "ϑ";
var thetav = "ϑ";
var thickapprox = "≈";
var thicksim = "∼";
var thinsp = " ";
var thkap = "≈";
var thksim = "∼";
var thor = "þ";
var thorn = "þ";
var tilde = "˜";
var time = "×";
var times = "×";
var timesb = "⊠";
var timesbar = "⨱";
var timesd = "⨰";
var tint = "∭";
var toea = "⤨";
var top = "⊤";
var topbot = "⌶";
var topcir = "⫱";
var topf = "𝕥";
var topfork = "⫚";
var tosa = "⤩";
var tprime = "‴";
var trade = "™";
var triangle = "▵";
var triangledown = "▿";
var triangleleft = "◃";
var trianglelefteq = "⊴";
var triangleq = "≜";
var triangleright = "▹";
var trianglerighteq = "⊵";
var tridot = "◬";
var trie = "≜";
var triminus = "⨺";
var triplus = "⨹";
var trisb = "⧍";
var tritime = "⨻";
var trpezium = "⏢";
var tscr = "𝓉";
var tscy = "ц";
var tshcy = "ћ";
var tstrok = "ŧ";
var twixt = "≬";
var twoheadleftarrow = "↞";
var twoheadrightarrow = "↠";
var uArr = "⇑";
var uHar = "⥣";
var uacut = "ú";
var uacute = "ú";
var uarr = "↑";
var ubrcy = "ў";
var ubreve = "ŭ";
var ucir = "û";
var ucirc = "û";
var ucy = "у";
var udarr = "⇅";
var udblac = "ű";
var udhar = "⥮";
var ufisht = "⥾";
var ufr = "𝔲";
var ugrav = "ù";
var ugrave = "ù";
var uharl = "↿";
var uharr = "↾";
var uhblk = "▀";
var ulcorn = "⌜";
var ulcorner = "⌜";
var ulcrop = "⌏";
var ultri = "◸";
var umacr = "ū";
var um = "¨";
var uml = "¨";
var uogon = "ų";
var uopf = "𝕦";
var uparrow = "↑";
var updownarrow = "↕";
var upharpoonleft = "↿";
var upharpoonright = "↾";
var uplus = "⊎";
var upsi = "υ";
var upsih = "ϒ";
var upsilon = "υ";
var upuparrows = "⇈";
var urcorn = "⌝";
var urcorner = "⌝";
var urcrop = "⌎";
var uring = "ů";
var urtri = "◹";
var uscr = "𝓊";
var utdot = "⋰";
var utilde = "ũ";
var utri = "▵";
var utrif = "▴";
var uuarr = "⇈";
var uum = "ü";
var uuml = "ü";
var uwangle = "⦧";
var vArr = "⇕";
var vBar = "⫨";
var vBarv = "⫩";
var vDash = "⊨";
var vangrt = "⦜";
var varepsilon = "ϵ";
var varkappa = "ϰ";
var varnothing = "∅";
var varphi = "ϕ";
var varpi = "ϖ";
var varpropto = "∝";
var varr = "↕";
var varrho = "ϱ";
var varsigma = "ς";
var varsubsetneq = "⊊︀";
var varsubsetneqq = "⫋︀";
var varsupsetneq = "⊋︀";
var varsupsetneqq = "⫌︀";
var vartheta = "ϑ";
var vartriangleleft = "⊲";
var vartriangleright = "⊳";
var vcy = "в";
var vdash = "⊢";
var vee = "∨";
var veebar = "⊻";
var veeeq = "≚";
var vellip = "⋮";
var verbar = "|";
var vert = "|";
var vfr = "𝔳";
var vltri = "⊲";
var vnsub = "⊂⃒";
var vnsup = "⊃⃒";
var vopf = "𝕧";
var vprop = "∝";
var vrtri = "⊳";
var vscr = "𝓋";
var vsubnE = "⫋︀";
var vsubne = "⊊︀";
var vsupnE = "⫌︀";
var vsupne = "⊋︀";
var vzigzag = "⦚";
var wcirc = "ŵ";
var wedbar = "⩟";
var wedge = "∧";
var wedgeq = "≙";
var weierp = "℘";
var wfr = "𝔴";
var wopf = "𝕨";
var wp = "℘";
var wr = "≀";
var wreath = "≀";
var wscr = "𝓌";
var xcap = "⋂";
var xcirc = "◯";
var xcup = "⋃";
var xdtri = "▽";
var xfr = "𝔵";
var xhArr = "⟺";
var xharr = "⟷";
var xi = "ξ";
var xlArr = "⟸";
var xlarr = "⟵";
var xmap = "⟼";
var xnis = "⋻";
var xodot = "⨀";
var xopf = "𝕩";
var xoplus = "⨁";
var xotime = "⨂";
var xrArr = "⟹";
var xrarr = "⟶";
var xscr = "𝓍";
var xsqcup = "⨆";
var xuplus = "⨄";
var xutri = "△";
var xvee = "⋁";
var xwedge = "⋀";
var yacut = "ý";
var yacute = "ý";
var yacy = "я";
var ycirc = "ŷ";
var ycy = "ы";
var ye = "¥";
var yen = "¥";
var yfr = "𝔶";
var yicy = "ї";
var yopf = "𝕪";
var yscr = "𝓎";
var yucy = "ю";
var yum = "ÿ";
var yuml = "ÿ";
var zacute = "ź";
var zcaron = "ž";
var zcy = "з";
var zdot = "ż";
var zeetrf = "ℨ";
var zeta = "ζ";
var zfr = "𝔷";
var zhcy = "ж";
var zigrarr = "⇝";
var zopf = "𝕫";
var zscr = "𝓏";
var zwj = "‍";
var zwnj = "‌";
var require$$0 = {
  AEli: AEli,
  AElig: AElig,
  AM: AM,
  AMP: AMP,
  Aacut: Aacut,
  Aacute: Aacute,
  Abreve: Abreve,
  Acir: Acir,
  Acirc: Acirc,
  Acy: Acy,
  Afr: Afr,
  Agrav: Agrav,
  Agrave: Agrave,
  Alpha: Alpha,
  Amacr: Amacr,
  And: And,
  Aogon: Aogon,
  Aopf: Aopf,
  ApplyFunction: ApplyFunction,
  Arin: Arin,
  Aring: Aring,
  Ascr: Ascr,
  Assign: Assign,
  Atild: Atild,
  Atilde: Atilde,
  Aum: Aum,
  Auml: Auml,
  Backslash: Backslash,
  Barv: Barv,
  Barwed: Barwed,
  Bcy: Bcy,
  Because: Because,
  Bernoullis: Bernoullis,
  Beta: Beta,
  Bfr: Bfr,
  Bopf: Bopf,
  Breve: Breve,
  Bscr: Bscr,
  Bumpeq: Bumpeq,
  CHcy: CHcy,
  COP: COP,
  COPY: COPY,
  Cacute: Cacute,
  Cap: Cap,
  CapitalDifferentialD: CapitalDifferentialD,
  Cayleys: Cayleys,
  Ccaron: Ccaron,
  Ccedi: Ccedi,
  Ccedil: Ccedil,
  Ccirc: Ccirc,
  Cconint: Cconint,
  Cdot: Cdot,
  Cedilla: Cedilla,
  CenterDot: CenterDot,
  Cfr: Cfr,
  Chi: Chi,
  CircleDot: CircleDot,
  CircleMinus: CircleMinus,
  CirclePlus: CirclePlus,
  CircleTimes: CircleTimes,
  ClockwiseContourIntegral: ClockwiseContourIntegral,
  CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
  CloseCurlyQuote: CloseCurlyQuote,
  Colon: Colon,
  Colone: Colone,
  Congruent: Congruent,
  Conint: Conint,
  ContourIntegral: ContourIntegral,
  Copf: Copf,
  Coproduct: Coproduct,
  CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
  Cross: Cross,
  Cscr: Cscr,
  Cup: Cup,
  CupCap: CupCap,
  DD: DD,
  DDotrahd: DDotrahd,
  DJcy: DJcy,
  DScy: DScy,
  DZcy: DZcy,
  Dagger: Dagger,
  Darr: Darr,
  Dashv: Dashv,
  Dcaron: Dcaron,
  Dcy: Dcy,
  Del: Del,
  Delta: Delta,
  Dfr: Dfr,
  DiacriticalAcute: DiacriticalAcute,
  DiacriticalDot: DiacriticalDot,
  DiacriticalDoubleAcute: DiacriticalDoubleAcute,
  DiacriticalGrave: DiacriticalGrave,
  DiacriticalTilde: DiacriticalTilde,
  Diamond: Diamond,
  DifferentialD: DifferentialD,
  Dopf: Dopf,
  Dot: Dot,
  DotDot: DotDot,
  DotEqual: DotEqual,
  DoubleContourIntegral: DoubleContourIntegral,
  DoubleDot: DoubleDot,
  DoubleDownArrow: DoubleDownArrow,
  DoubleLeftArrow: DoubleLeftArrow,
  DoubleLeftRightArrow: DoubleLeftRightArrow,
  DoubleLeftTee: DoubleLeftTee,
  DoubleLongLeftArrow: DoubleLongLeftArrow,
  DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
  DoubleLongRightArrow: DoubleLongRightArrow,
  DoubleRightArrow: DoubleRightArrow,
  DoubleRightTee: DoubleRightTee,
  DoubleUpArrow: DoubleUpArrow,
  DoubleUpDownArrow: DoubleUpDownArrow,
  DoubleVerticalBar: DoubleVerticalBar,
  DownArrow: DownArrow,
  DownArrowBar: DownArrowBar,
  DownArrowUpArrow: DownArrowUpArrow,
  DownBreve: DownBreve,
  DownLeftRightVector: DownLeftRightVector,
  DownLeftTeeVector: DownLeftTeeVector,
  DownLeftVector: DownLeftVector,
  DownLeftVectorBar: DownLeftVectorBar,
  DownRightTeeVector: DownRightTeeVector,
  DownRightVector: DownRightVector,
  DownRightVectorBar: DownRightVectorBar,
  DownTee: DownTee,
  DownTeeArrow: DownTeeArrow,
  Downarrow: Downarrow,
  Dscr: Dscr,
  Dstrok: Dstrok,
  ENG: ENG,
  ET: ET,
  ETH: ETH,
  Eacut: Eacut,
  Eacute: Eacute,
  Ecaron: Ecaron,
  Ecir: Ecir,
  Ecirc: Ecirc,
  Ecy: Ecy,
  Edot: Edot,
  Efr: Efr,
  Egrav: Egrav,
  Egrave: Egrave,
  Element: Element,
  Emacr: Emacr,
  EmptySmallSquare: EmptySmallSquare,
  EmptyVerySmallSquare: EmptyVerySmallSquare,
  Eogon: Eogon,
  Eopf: Eopf,
  Epsilon: Epsilon,
  Equal: Equal,
  EqualTilde: EqualTilde,
  Equilibrium: Equilibrium,
  Escr: Escr,
  Esim: Esim,
  Eta: Eta,
  Eum: Eum,
  Euml: Euml,
  Exists: Exists,
  ExponentialE: ExponentialE,
  Fcy: Fcy,
  Ffr: Ffr,
  FilledSmallSquare: FilledSmallSquare,
  FilledVerySmallSquare: FilledVerySmallSquare,
  Fopf: Fopf,
  ForAll: ForAll,
  Fouriertrf: Fouriertrf,
  Fscr: Fscr,
  GJcy: GJcy,
  G: G,
  GT: GT,
  Gamma: Gamma,
  Gammad: Gammad,
  Gbreve: Gbreve,
  Gcedil: Gcedil,
  Gcirc: Gcirc,
  Gcy: Gcy,
  Gdot: Gdot,
  Gfr: Gfr,
  Gg: Gg,
  Gopf: Gopf,
  GreaterEqual: GreaterEqual,
  GreaterEqualLess: GreaterEqualLess,
  GreaterFullEqual: GreaterFullEqual,
  GreaterGreater: GreaterGreater,
  GreaterLess: GreaterLess,
  GreaterSlantEqual: GreaterSlantEqual,
  GreaterTilde: GreaterTilde,
  Gscr: Gscr,
  Gt: Gt,
  HARDcy: HARDcy,
  Hacek: Hacek,
  Hat: Hat,
  Hcirc: Hcirc,
  Hfr: Hfr,
  HilbertSpace: HilbertSpace,
  Hopf: Hopf,
  HorizontalLine: HorizontalLine,
  Hscr: Hscr,
  Hstrok: Hstrok,
  HumpDownHump: HumpDownHump,
  HumpEqual: HumpEqual,
  IEcy: IEcy,
  IJlig: IJlig,
  IOcy: IOcy,
  Iacut: Iacut,
  Iacute: Iacute,
  Icir: Icir,
  Icirc: Icirc,
  Icy: Icy,
  Idot: Idot,
  Ifr: Ifr,
  Igrav: Igrav,
  Igrave: Igrave,
  Im: Im,
  Imacr: Imacr,
  ImaginaryI: ImaginaryI,
  Implies: Implies,
  Int: Int,
  Integral: Integral,
  Intersection: Intersection,
  InvisibleComma: InvisibleComma,
  InvisibleTimes: InvisibleTimes,
  Iogon: Iogon,
  Iopf: Iopf,
  Iota: Iota,
  Iscr: Iscr,
  Itilde: Itilde,
  Iukcy: Iukcy,
  Ium: Ium,
  Iuml: Iuml,
  Jcirc: Jcirc,
  Jcy: Jcy,
  Jfr: Jfr,
  Jopf: Jopf,
  Jscr: Jscr,
  Jsercy: Jsercy,
  Jukcy: Jukcy,
  KHcy: KHcy,
  KJcy: KJcy,
  Kappa: Kappa,
  Kcedil: Kcedil,
  Kcy: Kcy,
  Kfr: Kfr,
  Kopf: Kopf,
  Kscr: Kscr,
  LJcy: LJcy,
  L: L,
  LT: LT,
  Lacute: Lacute,
  Lambda: Lambda,
  Lang: Lang,
  Laplacetrf: Laplacetrf,
  Larr: Larr,
  Lcaron: Lcaron,
  Lcedil: Lcedil,
  Lcy: Lcy,
  LeftAngleBracket: LeftAngleBracket,
  LeftArrow: LeftArrow,
  LeftArrowBar: LeftArrowBar,
  LeftArrowRightArrow: LeftArrowRightArrow,
  LeftCeiling: LeftCeiling,
  LeftDoubleBracket: LeftDoubleBracket,
  LeftDownTeeVector: LeftDownTeeVector,
  LeftDownVector: LeftDownVector,
  LeftDownVectorBar: LeftDownVectorBar,
  LeftFloor: LeftFloor,
  LeftRightArrow: LeftRightArrow,
  LeftRightVector: LeftRightVector,
  LeftTee: LeftTee,
  LeftTeeArrow: LeftTeeArrow,
  LeftTeeVector: LeftTeeVector,
  LeftTriangle: LeftTriangle,
  LeftTriangleBar: LeftTriangleBar,
  LeftTriangleEqual: LeftTriangleEqual,
  LeftUpDownVector: LeftUpDownVector,
  LeftUpTeeVector: LeftUpTeeVector,
  LeftUpVector: LeftUpVector,
  LeftUpVectorBar: LeftUpVectorBar,
  LeftVector: LeftVector,
  LeftVectorBar: LeftVectorBar,
  Leftarrow: Leftarrow,
  Leftrightarrow: Leftrightarrow,
  LessEqualGreater: LessEqualGreater,
  LessFullEqual: LessFullEqual,
  LessGreater: LessGreater,
  LessLess: LessLess,
  LessSlantEqual: LessSlantEqual,
  LessTilde: LessTilde,
  Lfr: Lfr,
  Ll: Ll,
  Lleftarrow: Lleftarrow,
  Lmidot: Lmidot,
  LongLeftArrow: LongLeftArrow,
  LongLeftRightArrow: LongLeftRightArrow,
  LongRightArrow: LongRightArrow,
  Longleftarrow: Longleftarrow,
  Longleftrightarrow: Longleftrightarrow,
  Longrightarrow: Longrightarrow,
  Lopf: Lopf,
  LowerLeftArrow: LowerLeftArrow,
  LowerRightArrow: LowerRightArrow,
  Lscr: Lscr,
  Lsh: Lsh,
  Lstrok: Lstrok,
  Lt: Lt,
  "Map": "⤅",
  Mcy: Mcy,
  MediumSpace: MediumSpace,
  Mellintrf: Mellintrf,
  Mfr: Mfr,
  MinusPlus: MinusPlus,
  Mopf: Mopf,
  Mscr: Mscr,
  Mu: Mu,
  NJcy: NJcy,
  Nacute: Nacute,
  Ncaron: Ncaron,
  Ncedil: Ncedil,
  Ncy: Ncy,
  NegativeMediumSpace: NegativeMediumSpace,
  NegativeThickSpace: NegativeThickSpace,
  NegativeThinSpace: NegativeThinSpace,
  NegativeVeryThinSpace: NegativeVeryThinSpace,
  NestedGreaterGreater: NestedGreaterGreater,
  NestedLessLess: NestedLessLess,
  NewLine: NewLine,
  Nfr: Nfr,
  NoBreak: NoBreak,
  NonBreakingSpace: NonBreakingSpace,
  Nopf: Nopf,
  Not: Not,
  NotCongruent: NotCongruent,
  NotCupCap: NotCupCap,
  NotDoubleVerticalBar: NotDoubleVerticalBar,
  NotElement: NotElement,
  NotEqual: NotEqual,
  NotEqualTilde: NotEqualTilde,
  NotExists: NotExists,
  NotGreater: NotGreater,
  NotGreaterEqual: NotGreaterEqual,
  NotGreaterFullEqual: NotGreaterFullEqual,
  NotGreaterGreater: NotGreaterGreater,
  NotGreaterLess: NotGreaterLess,
  NotGreaterSlantEqual: NotGreaterSlantEqual,
  NotGreaterTilde: NotGreaterTilde,
  NotHumpDownHump: NotHumpDownHump,
  NotHumpEqual: NotHumpEqual,
  NotLeftTriangle: NotLeftTriangle,
  NotLeftTriangleBar: NotLeftTriangleBar,
  NotLeftTriangleEqual: NotLeftTriangleEqual,
  NotLess: NotLess,
  NotLessEqual: NotLessEqual,
  NotLessGreater: NotLessGreater,
  NotLessLess: NotLessLess,
  NotLessSlantEqual: NotLessSlantEqual,
  NotLessTilde: NotLessTilde,
  NotNestedGreaterGreater: NotNestedGreaterGreater,
  NotNestedLessLess: NotNestedLessLess,
  NotPrecedes: NotPrecedes,
  NotPrecedesEqual: NotPrecedesEqual,
  NotPrecedesSlantEqual: NotPrecedesSlantEqual,
  NotReverseElement: NotReverseElement,
  NotRightTriangle: NotRightTriangle,
  NotRightTriangleBar: NotRightTriangleBar,
  NotRightTriangleEqual: NotRightTriangleEqual,
  NotSquareSubset: NotSquareSubset,
  NotSquareSubsetEqual: NotSquareSubsetEqual,
  NotSquareSuperset: NotSquareSuperset,
  NotSquareSupersetEqual: NotSquareSupersetEqual,
  NotSubset: NotSubset,
  NotSubsetEqual: NotSubsetEqual,
  NotSucceeds: NotSucceeds,
  NotSucceedsEqual: NotSucceedsEqual,
  NotSucceedsSlantEqual: NotSucceedsSlantEqual,
  NotSucceedsTilde: NotSucceedsTilde,
  NotSuperset: NotSuperset,
  NotSupersetEqual: NotSupersetEqual,
  NotTilde: NotTilde,
  NotTildeEqual: NotTildeEqual,
  NotTildeFullEqual: NotTildeFullEqual,
  NotTildeTilde: NotTildeTilde,
  NotVerticalBar: NotVerticalBar,
  Nscr: Nscr,
  Ntild: Ntild,
  Ntilde: Ntilde,
  Nu: Nu,
  OElig: OElig,
  Oacut: Oacut,
  Oacute: Oacute,
  Ocir: Ocir,
  Ocirc: Ocirc,
  Ocy: Ocy,
  Odblac: Odblac,
  Ofr: Ofr,
  Ograv: Ograv,
  Ograve: Ograve,
  Omacr: Omacr,
  Omega: Omega,
  Omicron: Omicron,
  Oopf: Oopf,
  OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
  OpenCurlyQuote: OpenCurlyQuote,
  Or: Or,
  Oscr: Oscr,
  Oslas: Oslas,
  Oslash: Oslash,
  Otild: Otild,
  Otilde: Otilde,
  Otimes: Otimes,
  Oum: Oum,
  Ouml: Ouml,
  OverBar: OverBar,
  OverBrace: OverBrace,
  OverBracket: OverBracket,
  OverParenthesis: OverParenthesis,
  PartialD: PartialD,
  Pcy: Pcy,
  Pfr: Pfr,
  Phi: Phi,
  Pi: Pi,
  PlusMinus: PlusMinus,
  Poincareplane: Poincareplane,
  Popf: Popf,
  Pr: Pr,
  Precedes: Precedes,
  PrecedesEqual: PrecedesEqual,
  PrecedesSlantEqual: PrecedesSlantEqual,
  PrecedesTilde: PrecedesTilde,
  Prime: Prime,
  Product: Product,
  Proportion: Proportion,
  Proportional: Proportional,
  Pscr: Pscr,
  Psi: Psi,
  QUO: QUO,
  QUOT: QUOT,
  Qfr: Qfr,
  Qopf: Qopf,
  Qscr: Qscr,
  RBarr: RBarr,
  RE: RE,
  REG: REG,
  Racute: Racute,
  Rang: Rang,
  Rarr: Rarr,
  Rarrtl: Rarrtl,
  Rcaron: Rcaron,
  Rcedil: Rcedil,
  Rcy: Rcy,
  Re: Re,
  ReverseElement: ReverseElement,
  ReverseEquilibrium: ReverseEquilibrium,
  ReverseUpEquilibrium: ReverseUpEquilibrium,
  Rfr: Rfr,
  Rho: Rho,
  RightAngleBracket: RightAngleBracket,
  RightArrow: RightArrow,
  RightArrowBar: RightArrowBar,
  RightArrowLeftArrow: RightArrowLeftArrow,
  RightCeiling: RightCeiling,
  RightDoubleBracket: RightDoubleBracket,
  RightDownTeeVector: RightDownTeeVector,
  RightDownVector: RightDownVector,
  RightDownVectorBar: RightDownVectorBar,
  RightFloor: RightFloor,
  RightTee: RightTee,
  RightTeeArrow: RightTeeArrow,
  RightTeeVector: RightTeeVector,
  RightTriangle: RightTriangle,
  RightTriangleBar: RightTriangleBar,
  RightTriangleEqual: RightTriangleEqual,
  RightUpDownVector: RightUpDownVector,
  RightUpTeeVector: RightUpTeeVector,
  RightUpVector: RightUpVector,
  RightUpVectorBar: RightUpVectorBar,
  RightVector: RightVector,
  RightVectorBar: RightVectorBar,
  Rightarrow: Rightarrow,
  Ropf: Ropf,
  RoundImplies: RoundImplies,
  Rrightarrow: Rrightarrow,
  Rscr: Rscr,
  Rsh: Rsh,
  RuleDelayed: RuleDelayed,
  SHCHcy: SHCHcy,
  SHcy: SHcy,
  SOFTcy: SOFTcy,
  Sacute: Sacute,
  Sc: Sc,
  Scaron: Scaron,
  Scedil: Scedil,
  Scirc: Scirc,
  Scy: Scy,
  Sfr: Sfr,
  ShortDownArrow: ShortDownArrow,
  ShortLeftArrow: ShortLeftArrow,
  ShortRightArrow: ShortRightArrow,
  ShortUpArrow: ShortUpArrow,
  Sigma: Sigma,
  SmallCircle: SmallCircle,
  Sopf: Sopf,
  Sqrt: Sqrt,
  Square: Square,
  SquareIntersection: SquareIntersection,
  SquareSubset: SquareSubset,
  SquareSubsetEqual: SquareSubsetEqual,
  SquareSuperset: SquareSuperset,
  SquareSupersetEqual: SquareSupersetEqual,
  SquareUnion: SquareUnion,
  Sscr: Sscr,
  Star: Star,
  Sub: Sub,
  Subset: Subset,
  SubsetEqual: SubsetEqual,
  Succeeds: Succeeds,
  SucceedsEqual: SucceedsEqual,
  SucceedsSlantEqual: SucceedsSlantEqual,
  SucceedsTilde: SucceedsTilde,
  SuchThat: SuchThat,
  Sum: Sum,
  Sup: Sup,
  Superset: Superset,
  SupersetEqual: SupersetEqual,
  Supset: Supset,
  THOR: THOR,
  THORN: THORN,
  TRADE: TRADE,
  TSHcy: TSHcy,
  TScy: TScy,
  Tab: Tab,
  Tau: Tau,
  Tcaron: Tcaron,
  Tcedil: Tcedil,
  Tcy: Tcy,
  Tfr: Tfr,
  Therefore: Therefore,
  Theta: Theta,
  ThickSpace: ThickSpace,
  ThinSpace: ThinSpace,
  Tilde: Tilde,
  TildeEqual: TildeEqual,
  TildeFullEqual: TildeFullEqual,
  TildeTilde: TildeTilde,
  Topf: Topf,
  TripleDot: TripleDot,
  Tscr: Tscr,
  Tstrok: Tstrok,
  Uacut: Uacut,
  Uacute: Uacute,
  Uarr: Uarr,
  Uarrocir: Uarrocir,
  Ubrcy: Ubrcy,
  Ubreve: Ubreve,
  Ucir: Ucir,
  Ucirc: Ucirc,
  Ucy: Ucy,
  Udblac: Udblac,
  Ufr: Ufr,
  Ugrav: Ugrav,
  Ugrave: Ugrave,
  Umacr: Umacr,
  UnderBar: UnderBar,
  UnderBrace: UnderBrace,
  UnderBracket: UnderBracket,
  UnderParenthesis: UnderParenthesis,
  Union: Union,
  UnionPlus: UnionPlus,
  Uogon: Uogon,
  Uopf: Uopf,
  UpArrow: UpArrow,
  UpArrowBar: UpArrowBar,
  UpArrowDownArrow: UpArrowDownArrow,
  UpDownArrow: UpDownArrow,
  UpEquilibrium: UpEquilibrium,
  UpTee: UpTee,
  UpTeeArrow: UpTeeArrow,
  Uparrow: Uparrow,
  Updownarrow: Updownarrow,
  UpperLeftArrow: UpperLeftArrow,
  UpperRightArrow: UpperRightArrow,
  Upsi: Upsi,
  Upsilon: Upsilon,
  Uring: Uring,
  Uscr: Uscr,
  Utilde: Utilde,
  Uum: Uum,
  Uuml: Uuml,
  VDash: VDash,
  Vbar: Vbar,
  Vcy: Vcy,
  Vdash: Vdash,
  Vdashl: Vdashl,
  Vee: Vee,
  Verbar: Verbar,
  Vert: Vert,
  VerticalBar: VerticalBar,
  VerticalLine: VerticalLine,
  VerticalSeparator: VerticalSeparator,
  VerticalTilde: VerticalTilde,
  VeryThinSpace: VeryThinSpace,
  Vfr: Vfr,
  Vopf: Vopf,
  Vscr: Vscr,
  Vvdash: Vvdash,
  Wcirc: Wcirc,
  Wedge: Wedge,
  Wfr: Wfr,
  Wopf: Wopf,
  Wscr: Wscr,
  Xfr: Xfr,
  Xi: Xi,
  Xopf: Xopf,
  Xscr: Xscr,
  YAcy: YAcy,
  YIcy: YIcy,
  YUcy: YUcy,
  Yacut: Yacut,
  Yacute: Yacute,
  Ycirc: Ycirc,
  Ycy: Ycy,
  Yfr: Yfr,
  Yopf: Yopf,
  Yscr: Yscr,
  Yuml: Yuml,
  ZHcy: ZHcy,
  Zacute: Zacute,
  Zcaron: Zcaron,
  Zcy: Zcy,
  Zdot: Zdot,
  ZeroWidthSpace: ZeroWidthSpace,
  Zeta: Zeta,
  Zfr: Zfr,
  Zopf: Zopf,
  Zscr: Zscr,
  aacut: aacut,
  aacute: aacute,
  abreve: abreve,
  ac: ac,
  acE: acE,
  acd: acd,
  acir: acir,
  acirc: acirc,
  acut: acut,
  acute: acute,
  acy: acy,
  aeli: aeli,
  aelig: aelig,
  af: af,
  afr: afr,
  agrav: agrav,
  agrave: agrave,
  alefsym: alefsym,
  aleph: aleph,
  alpha: alpha,
  amacr: amacr,
  amalg: amalg,
  am: am,
  amp: amp,
  and: and,
  andand: andand,
  andd: andd,
  andslope: andslope,
  andv: andv,
  ang: ang,
  ange: ange,
  angle: angle,
  angmsd: angmsd,
  angmsdaa: angmsdaa,
  angmsdab: angmsdab,
  angmsdac: angmsdac,
  angmsdad: angmsdad,
  angmsdae: angmsdae,
  angmsdaf: angmsdaf,
  angmsdag: angmsdag,
  angmsdah: angmsdah,
  angrt: angrt,
  angrtvb: angrtvb,
  angrtvbd: angrtvbd,
  angsph: angsph,
  angst: angst,
  angzarr: angzarr,
  aogon: aogon,
  aopf: aopf,
  ap: ap,
  apE: apE,
  apacir: apacir,
  ape: ape,
  apid: apid,
  apos: apos,
  approx: approx,
  approxeq: approxeq,
  arin: arin,
  aring: aring,
  ascr: ascr,
  ast: ast,
  asymp: asymp,
  asympeq: asympeq,
  atild: atild,
  atilde: atilde,
  aum: aum,
  auml: auml,
  awconint: awconint,
  awint: awint,
  bNot: bNot,
  backcong: backcong,
  backepsilon: backepsilon,
  backprime: backprime,
  backsim: backsim,
  backsimeq: backsimeq,
  barvee: barvee,
  barwed: barwed,
  barwedge: barwedge,
  bbrk: bbrk,
  bbrktbrk: bbrktbrk,
  bcong: bcong,
  bcy: bcy,
  bdquo: bdquo,
  becaus: becaus,
  because: because,
  bemptyv: bemptyv,
  bepsi: bepsi,
  bernou: bernou,
  beta: beta,
  beth: beth,
  between: between,
  bfr: bfr,
  bigcap: bigcap,
  bigcirc: bigcirc,
  bigcup: bigcup,
  bigodot: bigodot,
  bigoplus: bigoplus,
  bigotimes: bigotimes,
  bigsqcup: bigsqcup,
  bigstar: bigstar,
  bigtriangledown: bigtriangledown,
  bigtriangleup: bigtriangleup,
  biguplus: biguplus,
  bigvee: bigvee,
  bigwedge: bigwedge,
  bkarow: bkarow,
  blacklozenge: blacklozenge,
  blacksquare: blacksquare,
  blacktriangle: blacktriangle,
  blacktriangledown: blacktriangledown,
  blacktriangleleft: blacktriangleleft,
  blacktriangleright: blacktriangleright,
  blank: blank,
  blk12: blk12,
  blk14: blk14,
  blk34: blk34,
  block: block,
  bne: bne,
  bnequiv: bnequiv,
  bnot: bnot,
  bopf: bopf,
  bot: bot,
  bottom: bottom,
  bowtie: bowtie,
  boxDL: boxDL,
  boxDR: boxDR,
  boxDl: boxDl,
  boxDr: boxDr,
  boxH: boxH,
  boxHD: boxHD,
  boxHU: boxHU,
  boxHd: boxHd,
  boxHu: boxHu,
  boxUL: boxUL,
  boxUR: boxUR,
  boxUl: boxUl,
  boxUr: boxUr,
  boxV: boxV,
  boxVH: boxVH,
  boxVL: boxVL,
  boxVR: boxVR,
  boxVh: boxVh,
  boxVl: boxVl,
  boxVr: boxVr,
  boxbox: boxbox,
  boxdL: boxdL,
  boxdR: boxdR,
  boxdl: boxdl,
  boxdr: boxdr,
  boxh: boxh,
  boxhD: boxhD,
  boxhU: boxhU,
  boxhd: boxhd,
  boxhu: boxhu,
  boxminus: boxminus,
  boxplus: boxplus,
  boxtimes: boxtimes,
  boxuL: boxuL,
  boxuR: boxuR,
  boxul: boxul,
  boxur: boxur,
  boxv: boxv,
  boxvH: boxvH,
  boxvL: boxvL,
  boxvR: boxvR,
  boxvh: boxvh,
  boxvl: boxvl,
  boxvr: boxvr,
  bprime: bprime,
  breve: breve,
  brvba: brvba,
  brvbar: brvbar,
  bscr: bscr,
  bsemi: bsemi,
  bsim: bsim,
  bsime: bsime,
  bsol: bsol,
  bsolb: bsolb,
  bsolhsub: bsolhsub,
  bull: bull,
  bullet: bullet,
  bump: bump,
  bumpE: bumpE,
  bumpe: bumpe,
  bumpeq: bumpeq,
  cacute: cacute,
  cap: cap,
  capand: capand,
  capbrcup: capbrcup,
  capcap: capcap,
  capcup: capcup,
  capdot: capdot,
  caps: caps,
  caret: caret,
  caron: caron,
  ccaps: ccaps,
  ccaron: ccaron,
  ccedi: ccedi,
  ccedil: ccedil,
  ccirc: ccirc,
  ccups: ccups,
  ccupssm: ccupssm,
  cdot: cdot,
  cedi: cedi,
  cedil: cedil,
  cemptyv: cemptyv,
  cen: cen,
  cent: cent,
  centerdot: centerdot,
  cfr: cfr,
  chcy: chcy,
  check: check,
  checkmark: checkmark,
  chi: chi,
  cir: cir,
  cirE: cirE,
  circ: circ,
  circeq: circeq,
  circlearrowleft: circlearrowleft,
  circlearrowright: circlearrowright,
  circledR: circledR,
  circledS: circledS,
  circledast: circledast,
  circledcirc: circledcirc,
  circleddash: circleddash,
  cire: cire,
  cirfnint: cirfnint,
  cirmid: cirmid,
  cirscir: cirscir,
  clubs: clubs,
  clubsuit: clubsuit,
  colon: colon,
  colone: colone,
  coloneq: coloneq,
  comma: comma,
  commat: commat,
  comp: comp,
  compfn: compfn,
  complement: complement,
  complexes: complexes,
  cong: cong,
  congdot: congdot,
  conint: conint,
  copf: copf,
  coprod: coprod,
  cop: cop,
  copy: copy,
  copysr: copysr,
  crarr: crarr,
  cross: cross,
  cscr: cscr,
  csub: csub,
  csube: csube,
  csup: csup,
  csupe: csupe,
  ctdot: ctdot,
  cudarrl: cudarrl,
  cudarrr: cudarrr,
  cuepr: cuepr,
  cuesc: cuesc,
  cularr: cularr,
  cularrp: cularrp,
  cup: cup,
  cupbrcap: cupbrcap,
  cupcap: cupcap,
  cupcup: cupcup,
  cupdot: cupdot,
  cupor: cupor,
  cups: cups,
  curarr: curarr,
  curarrm: curarrm,
  curlyeqprec: curlyeqprec,
  curlyeqsucc: curlyeqsucc,
  curlyvee: curlyvee,
  curlywedge: curlywedge,
  curre: curre,
  curren: curren,
  curvearrowleft: curvearrowleft,
  curvearrowright: curvearrowright,
  cuvee: cuvee,
  cuwed: cuwed,
  cwconint: cwconint,
  cwint: cwint,
  cylcty: cylcty,
  dArr: dArr,
  dHar: dHar,
  dagger: dagger,
  daleth: daleth,
  darr: darr,
  dash: dash,
  dashv: dashv,
  dbkarow: dbkarow,
  dblac: dblac,
  dcaron: dcaron,
  dcy: dcy,
  dd: dd,
  ddagger: ddagger,
  ddarr: ddarr,
  ddotseq: ddotseq,
  de: de,
  deg: deg,
  delta: delta,
  demptyv: demptyv,
  dfisht: dfisht,
  dfr: dfr,
  dharl: dharl,
  dharr: dharr,
  diam: diam,
  diamond: diamond,
  diamondsuit: diamondsuit,
  diams: diams,
  die: die,
  digamma: digamma,
  disin: disin,
  div: div,
  divid: divid,
  divide: divide,
  divideontimes: divideontimes,
  divonx: divonx,
  djcy: djcy,
  dlcorn: dlcorn,
  dlcrop: dlcrop,
  dollar: dollar,
  dopf: dopf,
  dot: dot,
  doteq: doteq,
  doteqdot: doteqdot,
  dotminus: dotminus,
  dotplus: dotplus,
  dotsquare: dotsquare,
  doublebarwedge: doublebarwedge,
  downarrow: downarrow,
  downdownarrows: downdownarrows,
  downharpoonleft: downharpoonleft,
  downharpoonright: downharpoonright,
  drbkarow: drbkarow,
  drcorn: drcorn,
  drcrop: drcrop,
  dscr: dscr,
  dscy: dscy,
  dsol: dsol,
  dstrok: dstrok,
  dtdot: dtdot,
  dtri: dtri,
  dtrif: dtrif,
  duarr: duarr,
  duhar: duhar,
  dwangle: dwangle,
  dzcy: dzcy,
  dzigrarr: dzigrarr,
  eDDot: eDDot,
  eDot: eDot,
  eacut: eacut,
  eacute: eacute,
  easter: easter,
  ecaron: ecaron,
  ecir: ecir,
  ecirc: ecirc,
  ecolon: ecolon,
  ecy: ecy,
  edot: edot,
  ee: ee,
  efDot: efDot,
  efr: efr,
  eg: eg,
  egrav: egrav,
  egrave: egrave,
  egs: egs,
  egsdot: egsdot,
  el: el,
  elinters: elinters,
  ell: ell,
  els: els,
  elsdot: elsdot,
  emacr: emacr,
  empty: empty,
  emptyset: emptyset,
  emptyv: emptyv,
  emsp13: emsp13,
  emsp14: emsp14,
  emsp: emsp,
  eng: eng,
  ensp: ensp,
  eogon: eogon,
  eopf: eopf,
  epar: epar,
  eparsl: eparsl,
  eplus: eplus,
  epsi: epsi,
  epsilon: epsilon,
  epsiv: epsiv,
  eqcirc: eqcirc,
  eqcolon: eqcolon,
  eqsim: eqsim,
  eqslantgtr: eqslantgtr,
  eqslantless: eqslantless,
  equals: equals,
  equest: equest,
  equiv: equiv,
  equivDD: equivDD,
  eqvparsl: eqvparsl,
  erDot: erDot,
  erarr: erarr,
  escr: escr,
  esdot: esdot,
  esim: esim,
  eta: eta,
  et: et,
  eth: eth,
  eum: eum,
  euml: euml,
  euro: euro,
  excl: excl,
  exist: exist,
  expectation: expectation,
  exponentiale: exponentiale,
  fallingdotseq: fallingdotseq,
  fcy: fcy,
  female: female,
  ffilig: ffilig,
  fflig: fflig,
  ffllig: ffllig,
  ffr: ffr,
  filig: filig,
  fjlig: fjlig,
  flat: flat,
  fllig: fllig,
  fltns: fltns,
  fnof: fnof,
  fopf: fopf,
  forall: forall,
  fork: fork,
  forkv: forkv,
  fpartint: fpartint,
  frac1: frac1,
  frac12: frac12,
  frac13: frac13,
  frac14: frac14,
  frac15: frac15,
  frac16: frac16,
  frac18: frac18,
  frac23: frac23,
  frac25: frac25,
  frac3: frac3,
  frac34: frac34,
  frac35: frac35,
  frac38: frac38,
  frac45: frac45,
  frac56: frac56,
  frac58: frac58,
  frac78: frac78,
  frasl: frasl,
  frown: frown,
  fscr: fscr,
  gE: gE,
  gEl: gEl,
  gacute: gacute,
  gamma: gamma,
  gammad: gammad,
  gap: gap,
  gbreve: gbreve,
  gcirc: gcirc,
  gcy: gcy,
  gdot: gdot,
  ge: ge,
  gel: gel,
  geq: geq,
  geqq: geqq,
  geqslant: geqslant,
  ges: ges,
  gescc: gescc,
  gesdot: gesdot,
  gesdoto: gesdoto,
  gesdotol: gesdotol,
  gesl: gesl,
  gesles: gesles,
  gfr: gfr,
  gg: gg,
  ggg: ggg,
  gimel: gimel,
  gjcy: gjcy,
  gl: gl,
  glE: glE,
  gla: gla,
  glj: glj,
  gnE: gnE,
  gnap: gnap,
  gnapprox: gnapprox,
  gne: gne,
  gneq: gneq,
  gneqq: gneqq,
  gnsim: gnsim,
  gopf: gopf,
  grave: grave,
  gscr: gscr,
  gsim: gsim,
  gsime: gsime,
  gsiml: gsiml,
  g: g,
  gt: gt,
  gtcc: gtcc,
  gtcir: gtcir,
  gtdot: gtdot,
  gtlPar: gtlPar,
  gtquest: gtquest,
  gtrapprox: gtrapprox,
  gtrarr: gtrarr,
  gtrdot: gtrdot,
  gtreqless: gtreqless,
  gtreqqless: gtreqqless,
  gtrless: gtrless,
  gtrsim: gtrsim,
  gvertneqq: gvertneqq,
  gvnE: gvnE,
  hArr: hArr,
  hairsp: hairsp,
  half: half,
  hamilt: hamilt,
  hardcy: hardcy,
  harr: harr,
  harrcir: harrcir,
  harrw: harrw,
  hbar: hbar,
  hcirc: hcirc,
  hearts: hearts,
  heartsuit: heartsuit,
  hellip: hellip,
  hercon: hercon,
  hfr: hfr,
  hksearow: hksearow,
  hkswarow: hkswarow,
  hoarr: hoarr,
  homtht: homtht,
  hookleftarrow: hookleftarrow,
  hookrightarrow: hookrightarrow,
  hopf: hopf,
  horbar: horbar,
  hscr: hscr,
  hslash: hslash,
  hstrok: hstrok,
  hybull: hybull,
  hyphen: hyphen,
  iacut: iacut,
  iacute: iacute,
  ic: ic,
  icir: icir,
  icirc: icirc,
  icy: icy,
  iecy: iecy,
  iexc: iexc,
  iexcl: iexcl,
  iff: iff,
  ifr: ifr,
  igrav: igrav,
  igrave: igrave,
  ii: ii,
  iiiint: iiiint,
  iiint: iiint,
  iinfin: iinfin,
  iiota: iiota,
  ijlig: ijlig,
  imacr: imacr,
  image: image,
  imagline: imagline,
  imagpart: imagpart,
  imath: imath,
  imof: imof,
  imped: imped,
  "in": "∈",
  incare: incare,
  infin: infin,
  infintie: infintie,
  inodot: inodot,
  int: int,
  intcal: intcal,
  integers: integers,
  intercal: intercal,
  intlarhk: intlarhk,
  intprod: intprod,
  iocy: iocy,
  iogon: iogon,
  iopf: iopf,
  iota: iota,
  iprod: iprod,
  iques: iques,
  iquest: iquest,
  iscr: iscr,
  isin: isin,
  isinE: isinE,
  isindot: isindot,
  isins: isins,
  isinsv: isinsv,
  isinv: isinv,
  it: it,
  itilde: itilde,
  iukcy: iukcy,
  ium: ium,
  iuml: iuml,
  jcirc: jcirc,
  jcy: jcy,
  jfr: jfr,
  jmath: jmath,
  jopf: jopf,
  jscr: jscr,
  jsercy: jsercy,
  jukcy: jukcy,
  kappa: kappa,
  kappav: kappav,
  kcedil: kcedil,
  kcy: kcy,
  kfr: kfr,
  kgreen: kgreen,
  khcy: khcy,
  kjcy: kjcy,
  kopf: kopf,
  kscr: kscr,
  lAarr: lAarr,
  lArr: lArr,
  lAtail: lAtail,
  lBarr: lBarr,
  lE: lE,
  lEg: lEg,
  lHar: lHar,
  lacute: lacute,
  laemptyv: laemptyv,
  lagran: lagran,
  lambda: lambda,
  lang: lang,
  langd: langd,
  langle: langle,
  lap: lap,
  laqu: laqu,
  laquo: laquo,
  larr: larr,
  larrb: larrb,
  larrbfs: larrbfs,
  larrfs: larrfs,
  larrhk: larrhk,
  larrlp: larrlp,
  larrpl: larrpl,
  larrsim: larrsim,
  larrtl: larrtl,
  lat: lat,
  latail: latail,
  late: late,
  lates: lates,
  lbarr: lbarr,
  lbbrk: lbbrk,
  lbrace: lbrace,
  lbrack: lbrack,
  lbrke: lbrke,
  lbrksld: lbrksld,
  lbrkslu: lbrkslu,
  lcaron: lcaron,
  lcedil: lcedil,
  lceil: lceil,
  lcub: lcub,
  lcy: lcy,
  ldca: ldca,
  ldquo: ldquo,
  ldquor: ldquor,
  ldrdhar: ldrdhar,
  ldrushar: ldrushar,
  ldsh: ldsh,
  le: le,
  leftarrow: leftarrow,
  leftarrowtail: leftarrowtail,
  leftharpoondown: leftharpoondown,
  leftharpoonup: leftharpoonup,
  leftleftarrows: leftleftarrows,
  leftrightarrow: leftrightarrow,
  leftrightarrows: leftrightarrows,
  leftrightharpoons: leftrightharpoons,
  leftrightsquigarrow: leftrightsquigarrow,
  leftthreetimes: leftthreetimes,
  leg: leg,
  leq: leq,
  leqq: leqq,
  leqslant: leqslant,
  les: les,
  lescc: lescc,
  lesdot: lesdot,
  lesdoto: lesdoto,
  lesdotor: lesdotor,
  lesg: lesg,
  lesges: lesges,
  lessapprox: lessapprox,
  lessdot: lessdot,
  lesseqgtr: lesseqgtr,
  lesseqqgtr: lesseqqgtr,
  lessgtr: lessgtr,
  lesssim: lesssim,
  lfisht: lfisht,
  lfloor: lfloor,
  lfr: lfr,
  lg: lg,
  lgE: lgE,
  lhard: lhard,
  lharu: lharu,
  lharul: lharul,
  lhblk: lhblk,
  ljcy: ljcy,
  ll: ll,
  llarr: llarr,
  llcorner: llcorner,
  llhard: llhard,
  lltri: lltri,
  lmidot: lmidot,
  lmoust: lmoust,
  lmoustache: lmoustache,
  lnE: lnE,
  lnap: lnap,
  lnapprox: lnapprox,
  lne: lne,
  lneq: lneq,
  lneqq: lneqq,
  lnsim: lnsim,
  loang: loang,
  loarr: loarr,
  lobrk: lobrk,
  longleftarrow: longleftarrow,
  longleftrightarrow: longleftrightarrow,
  longmapsto: longmapsto,
  longrightarrow: longrightarrow,
  looparrowleft: looparrowleft,
  looparrowright: looparrowright,
  lopar: lopar,
  lopf: lopf,
  loplus: loplus,
  lotimes: lotimes,
  lowast: lowast,
  lowbar: lowbar,
  loz: loz,
  lozenge: lozenge,
  lozf: lozf,
  lpar: lpar,
  lparlt: lparlt,
  lrarr: lrarr,
  lrcorner: lrcorner,
  lrhar: lrhar,
  lrhard: lrhard,
  lrm: lrm,
  lrtri: lrtri,
  lsaquo: lsaquo,
  lscr: lscr,
  lsh: lsh,
  lsim: lsim,
  lsime: lsime,
  lsimg: lsimg,
  lsqb: lsqb,
  lsquo: lsquo,
  lsquor: lsquor,
  lstrok: lstrok,
  l: l,
  lt: lt,
  ltcc: ltcc,
  ltcir: ltcir,
  ltdot: ltdot,
  lthree: lthree,
  ltimes: ltimes,
  ltlarr: ltlarr,
  ltquest: ltquest,
  ltrPar: ltrPar,
  ltri: ltri,
  ltrie: ltrie,
  ltrif: ltrif,
  lurdshar: lurdshar,
  luruhar: luruhar,
  lvertneqq: lvertneqq,
  lvnE: lvnE,
  mDDot: mDDot,
  mac: mac,
  macr: macr,
  male: male,
  malt: malt,
  maltese: maltese,
  map: map,
  mapsto: mapsto,
  mapstodown: mapstodown,
  mapstoleft: mapstoleft,
  mapstoup: mapstoup,
  marker: marker,
  mcomma: mcomma,
  mcy: mcy,
  mdash: mdash,
  measuredangle: measuredangle,
  mfr: mfr,
  mho: mho,
  micr: micr,
  micro: micro,
  mid: mid,
  midast: midast,
  midcir: midcir,
  middo: middo,
  middot: middot,
  minus: minus,
  minusb: minusb,
  minusd: minusd,
  minusdu: minusdu,
  mlcp: mlcp,
  mldr: mldr,
  mnplus: mnplus,
  models: models,
  mopf: mopf,
  mp: mp,
  mscr: mscr,
  mstpos: mstpos,
  mu: mu,
  multimap: multimap,
  mumap: mumap,
  nGg: nGg,
  nGt: nGt,
  nGtv: nGtv,
  nLeftarrow: nLeftarrow,
  nLeftrightarrow: nLeftrightarrow,
  nLl: nLl,
  nLt: nLt,
  nLtv: nLtv,
  nRightarrow: nRightarrow,
  nVDash: nVDash,
  nVdash: nVdash,
  nabla: nabla,
  nacute: nacute,
  nang: nang,
  nap: nap,
  napE: napE,
  napid: napid,
  napos: napos,
  napprox: napprox,
  natur: natur,
  natural: natural,
  naturals: naturals,
  nbs: nbs,
  nbsp: nbsp,
  nbump: nbump,
  nbumpe: nbumpe,
  ncap: ncap,
  ncaron: ncaron,
  ncedil: ncedil,
  ncong: ncong,
  ncongdot: ncongdot,
  ncup: ncup,
  ncy: ncy,
  ndash: ndash,
  ne: ne,
  neArr: neArr,
  nearhk: nearhk,
  nearr: nearr,
  nearrow: nearrow,
  nedot: nedot,
  nequiv: nequiv,
  nesear: nesear,
  nesim: nesim,
  nexist: nexist,
  nexists: nexists,
  nfr: nfr,
  ngE: ngE,
  nge: nge,
  ngeq: ngeq,
  ngeqq: ngeqq,
  ngeqslant: ngeqslant,
  nges: nges,
  ngsim: ngsim,
  ngt: ngt,
  ngtr: ngtr,
  nhArr: nhArr,
  nharr: nharr,
  nhpar: nhpar,
  ni: ni,
  nis: nis,
  nisd: nisd,
  niv: niv,
  njcy: njcy,
  nlArr: nlArr,
  nlE: nlE,
  nlarr: nlarr,
  nldr: nldr,
  nle: nle,
  nleftarrow: nleftarrow,
  nleftrightarrow: nleftrightarrow,
  nleq: nleq,
  nleqq: nleqq,
  nleqslant: nleqslant,
  nles: nles,
  nless: nless,
  nlsim: nlsim,
  nlt: nlt,
  nltri: nltri,
  nltrie: nltrie,
  nmid: nmid,
  nopf: nopf,
  no: no,
  not: not,
  notin: notin,
  notinE: notinE,
  notindot: notindot,
  notinva: notinva,
  notinvb: notinvb,
  notinvc: notinvc,
  notni: notni,
  notniva: notniva,
  notnivb: notnivb,
  notnivc: notnivc,
  npar: npar,
  nparallel: nparallel,
  nparsl: nparsl,
  npart: npart,
  npolint: npolint,
  npr: npr,
  nprcue: nprcue,
  npre: npre,
  nprec: nprec,
  npreceq: npreceq,
  nrArr: nrArr,
  nrarr: nrarr,
  nrarrc: nrarrc,
  nrarrw: nrarrw,
  nrightarrow: nrightarrow,
  nrtri: nrtri,
  nrtrie: nrtrie,
  nsc: nsc,
  nsccue: nsccue,
  nsce: nsce,
  nscr: nscr,
  nshortmid: nshortmid,
  nshortparallel: nshortparallel,
  nsim: nsim,
  nsime: nsime,
  nsimeq: nsimeq,
  nsmid: nsmid,
  nspar: nspar,
  nsqsube: nsqsube,
  nsqsupe: nsqsupe,
  nsub: nsub,
  nsubE: nsubE,
  nsube: nsube,
  nsubset: nsubset,
  nsubseteq: nsubseteq,
  nsubseteqq: nsubseteqq,
  nsucc: nsucc,
  nsucceq: nsucceq,
  nsup: nsup,
  nsupE: nsupE,
  nsupe: nsupe,
  nsupset: nsupset,
  nsupseteq: nsupseteq,
  nsupseteqq: nsupseteqq,
  ntgl: ntgl,
  ntild: ntild,
  ntilde: ntilde,
  ntlg: ntlg,
  ntriangleleft: ntriangleleft,
  ntrianglelefteq: ntrianglelefteq,
  ntriangleright: ntriangleright,
  ntrianglerighteq: ntrianglerighteq,
  nu: nu,
  num: num,
  numero: numero,
  numsp: numsp,
  nvDash: nvDash,
  nvHarr: nvHarr,
  nvap: nvap,
  nvdash: nvdash,
  nvge: nvge,
  nvgt: nvgt,
  nvinfin: nvinfin,
  nvlArr: nvlArr,
  nvle: nvle,
  nvlt: nvlt,
  nvltrie: nvltrie,
  nvrArr: nvrArr,
  nvrtrie: nvrtrie,
  nvsim: nvsim,
  nwArr: nwArr,
  nwarhk: nwarhk,
  nwarr: nwarr,
  nwarrow: nwarrow,
  nwnear: nwnear,
  oS: oS,
  oacut: oacut,
  oacute: oacute,
  oast: oast,
  ocir: ocir,
  ocirc: ocirc,
  ocy: ocy,
  odash: odash,
  odblac: odblac,
  odiv: odiv,
  odot: odot,
  odsold: odsold,
  oelig: oelig,
  ofcir: ofcir,
  ofr: ofr,
  ogon: ogon,
  ograv: ograv,
  ograve: ograve,
  ogt: ogt,
  ohbar: ohbar,
  ohm: ohm,
  oint: oint,
  olarr: olarr,
  olcir: olcir,
  olcross: olcross,
  oline: oline,
  olt: olt,
  omacr: omacr,
  omega: omega,
  omicron: omicron,
  omid: omid,
  ominus: ominus,
  oopf: oopf,
  opar: opar,
  operp: operp,
  oplus: oplus,
  or: or,
  orarr: orarr,
  ord: ord,
  order: order,
  orderof: orderof,
  ordf: ordf,
  ordm: ordm,
  origof: origof,
  oror: oror,
  orslope: orslope,
  orv: orv,
  oscr: oscr,
  oslas: oslas,
  oslash: oslash,
  osol: osol,
  otild: otild,
  otilde: otilde,
  otimes: otimes,
  otimesas: otimesas,
  oum: oum,
  ouml: ouml,
  ovbar: ovbar,
  par: par,
  para: para,
  parallel: parallel,
  parsim: parsim,
  parsl: parsl,
  part: part,
  pcy: pcy,
  percnt: percnt,
  period: period,
  permil: permil,
  perp: perp,
  pertenk: pertenk,
  pfr: pfr,
  phi: phi,
  phiv: phiv,
  phmmat: phmmat,
  phone: phone,
  pi: pi,
  pitchfork: pitchfork,
  piv: piv,
  planck: planck,
  planckh: planckh,
  plankv: plankv,
  plus: plus,
  plusacir: plusacir,
  plusb: plusb,
  pluscir: pluscir,
  plusdo: plusdo,
  plusdu: plusdu,
  pluse: pluse,
  plusm: plusm,
  plusmn: plusmn,
  plussim: plussim,
  plustwo: plustwo,
  pm: pm,
  pointint: pointint,
  popf: popf,
  poun: poun,
  pound: pound,
  pr: pr,
  prE: prE,
  prap: prap,
  prcue: prcue,
  pre: pre,
  prec: prec,
  precapprox: precapprox,
  preccurlyeq: preccurlyeq,
  preceq: preceq,
  precnapprox: precnapprox,
  precneqq: precneqq,
  precnsim: precnsim,
  precsim: precsim,
  prime: prime,
  primes: primes,
  prnE: prnE,
  prnap: prnap,
  prnsim: prnsim,
  prod: prod,
  profalar: profalar,
  profline: profline,
  profsurf: profsurf,
  prop: prop,
  propto: propto,
  prsim: prsim,
  prurel: prurel,
  pscr: pscr,
  psi: psi,
  puncsp: puncsp,
  qfr: qfr,
  qint: qint,
  qopf: qopf,
  qprime: qprime,
  qscr: qscr,
  quaternions: quaternions,
  quatint: quatint,
  quest: quest,
  questeq: questeq,
  quo: quo,
  quot: quot,
  rAarr: rAarr,
  rArr: rArr,
  rAtail: rAtail,
  rBarr: rBarr,
  rHar: rHar,
  race: race,
  racute: racute,
  radic: radic,
  raemptyv: raemptyv,
  rang: rang,
  rangd: rangd,
  range: range,
  rangle: rangle,
  raqu: raqu,
  raquo: raquo,
  rarr: rarr,
  rarrap: rarrap,
  rarrb: rarrb,
  rarrbfs: rarrbfs,
  rarrc: rarrc,
  rarrfs: rarrfs,
  rarrhk: rarrhk,
  rarrlp: rarrlp,
  rarrpl: rarrpl,
  rarrsim: rarrsim,
  rarrtl: rarrtl,
  rarrw: rarrw,
  ratail: ratail,
  ratio: ratio,
  rationals: rationals,
  rbarr: rbarr,
  rbbrk: rbbrk,
  rbrace: rbrace,
  rbrack: rbrack,
  rbrke: rbrke,
  rbrksld: rbrksld,
  rbrkslu: rbrkslu,
  rcaron: rcaron,
  rcedil: rcedil,
  rceil: rceil,
  rcub: rcub,
  rcy: rcy,
  rdca: rdca,
  rdldhar: rdldhar,
  rdquo: rdquo,
  rdquor: rdquor,
  rdsh: rdsh,
  real: real,
  realine: realine,
  realpart: realpart,
  reals: reals,
  rect: rect,
  re: re,
  reg: reg,
  rfisht: rfisht,
  rfloor: rfloor,
  rfr: rfr,
  rhard: rhard,
  rharu: rharu,
  rharul: rharul,
  rho: rho,
  rhov: rhov,
  rightarrow: rightarrow,
  rightarrowtail: rightarrowtail,
  rightharpoondown: rightharpoondown,
  rightharpoonup: rightharpoonup,
  rightleftarrows: rightleftarrows,
  rightleftharpoons: rightleftharpoons,
  rightrightarrows: rightrightarrows,
  rightsquigarrow: rightsquigarrow,
  rightthreetimes: rightthreetimes,
  ring: ring,
  risingdotseq: risingdotseq,
  rlarr: rlarr,
  rlhar: rlhar,
  rlm: rlm,
  rmoust: rmoust,
  rmoustache: rmoustache,
  rnmid: rnmid,
  roang: roang,
  roarr: roarr,
  robrk: robrk,
  ropar: ropar,
  ropf: ropf,
  roplus: roplus,
  rotimes: rotimes,
  rpar: rpar,
  rpargt: rpargt,
  rppolint: rppolint,
  rrarr: rrarr,
  rsaquo: rsaquo,
  rscr: rscr,
  rsh: rsh,
  rsqb: rsqb,
  rsquo: rsquo,
  rsquor: rsquor,
  rthree: rthree,
  rtimes: rtimes,
  rtri: rtri,
  rtrie: rtrie,
  rtrif: rtrif,
  rtriltri: rtriltri,
  ruluhar: ruluhar,
  rx: rx,
  sacute: sacute,
  sbquo: sbquo,
  sc: sc,
  scE: scE,
  scap: scap,
  scaron: scaron,
  sccue: sccue,
  sce: sce,
  scedil: scedil,
  scirc: scirc,
  scnE: scnE,
  scnap: scnap,
  scnsim: scnsim,
  scpolint: scpolint,
  scsim: scsim,
  scy: scy,
  sdot: sdot,
  sdotb: sdotb,
  sdote: sdote,
  seArr: seArr,
  searhk: searhk,
  searr: searr,
  searrow: searrow,
  sec: sec,
  sect: sect,
  semi: semi,
  seswar: seswar,
  setminus: setminus,
  setmn: setmn,
  sext: sext,
  sfr: sfr,
  sfrown: sfrown,
  sharp: sharp,
  shchcy: shchcy,
  shcy: shcy,
  shortmid: shortmid,
  shortparallel: shortparallel,
  sh: sh,
  shy: shy,
  sigma: sigma,
  sigmaf: sigmaf,
  sigmav: sigmav,
  sim: sim,
  simdot: simdot,
  sime: sime,
  simeq: simeq,
  simg: simg,
  simgE: simgE,
  siml: siml,
  simlE: simlE,
  simne: simne,
  simplus: simplus,
  simrarr: simrarr,
  slarr: slarr,
  smallsetminus: smallsetminus,
  smashp: smashp,
  smeparsl: smeparsl,
  smid: smid,
  smile: smile,
  smt: smt,
  smte: smte,
  smtes: smtes,
  softcy: softcy,
  sol: sol,
  solb: solb,
  solbar: solbar,
  sopf: sopf,
  spades: spades,
  spadesuit: spadesuit,
  spar: spar,
  sqcap: sqcap,
  sqcaps: sqcaps,
  sqcup: sqcup,
  sqcups: sqcups,
  sqsub: sqsub,
  sqsube: sqsube,
  sqsubset: sqsubset,
  sqsubseteq: sqsubseteq,
  sqsup: sqsup,
  sqsupe: sqsupe,
  sqsupset: sqsupset,
  sqsupseteq: sqsupseteq,
  squ: squ,
  square: square,
  squarf: squarf,
  squf: squf,
  srarr: srarr,
  sscr: sscr,
  ssetmn: ssetmn,
  ssmile: ssmile,
  sstarf: sstarf,
  star: star,
  starf: starf,
  straightepsilon: straightepsilon,
  straightphi: straightphi,
  strns: strns,
  sub: sub,
  subE: subE,
  subdot: subdot,
  sube: sube,
  subedot: subedot,
  submult: submult,
  subnE: subnE,
  subne: subne,
  subplus: subplus,
  subrarr: subrarr,
  subset: subset,
  subseteq: subseteq,
  subseteqq: subseteqq,
  subsetneq: subsetneq,
  subsetneqq: subsetneqq,
  subsim: subsim,
  subsub: subsub,
  subsup: subsup,
  succ: succ,
  succapprox: succapprox,
  succcurlyeq: succcurlyeq,
  succeq: succeq,
  succnapprox: succnapprox,
  succneqq: succneqq,
  succnsim: succnsim,
  succsim: succsim,
  sum: sum,
  sung: sung,
  sup: sup,
  sup1: sup1,
  sup2: sup2,
  sup3: sup3,
  supE: supE,
  supdot: supdot,
  supdsub: supdsub,
  supe: supe,
  supedot: supedot,
  suphsol: suphsol,
  suphsub: suphsub,
  suplarr: suplarr,
  supmult: supmult,
  supnE: supnE,
  supne: supne,
  supplus: supplus,
  supset: supset,
  supseteq: supseteq,
  supseteqq: supseteqq,
  supsetneq: supsetneq,
  supsetneqq: supsetneqq,
  supsim: supsim,
  supsub: supsub,
  supsup: supsup,
  swArr: swArr,
  swarhk: swarhk,
  swarr: swarr,
  swarrow: swarrow,
  swnwar: swnwar,
  szli: szli,
  szlig: szlig,
  target: target,
  tau: tau,
  tbrk: tbrk,
  tcaron: tcaron,
  tcedil: tcedil,
  tcy: tcy,
  tdot: tdot,
  telrec: telrec,
  tfr: tfr,
  there4: there4,
  therefore: therefore,
  theta: theta,
  thetasym: thetasym,
  thetav: thetav,
  thickapprox: thickapprox,
  thicksim: thicksim,
  thinsp: thinsp,
  thkap: thkap,
  thksim: thksim,
  thor: thor,
  thorn: thorn,
  tilde: tilde,
  time: time,
  times: times,
  timesb: timesb,
  timesbar: timesbar,
  timesd: timesd,
  tint: tint,
  toea: toea,
  top: top,
  topbot: topbot,
  topcir: topcir,
  topf: topf,
  topfork: topfork,
  tosa: tosa,
  tprime: tprime,
  trade: trade,
  triangle: triangle,
  triangledown: triangledown,
  triangleleft: triangleleft,
  trianglelefteq: trianglelefteq,
  triangleq: triangleq,
  triangleright: triangleright,
  trianglerighteq: trianglerighteq,
  tridot: tridot,
  trie: trie,
  triminus: triminus,
  triplus: triplus,
  trisb: trisb,
  tritime: tritime,
  trpezium: trpezium,
  tscr: tscr,
  tscy: tscy,
  tshcy: tshcy,
  tstrok: tstrok,
  twixt: twixt,
  twoheadleftarrow: twoheadleftarrow,
  twoheadrightarrow: twoheadrightarrow,
  uArr: uArr,
  uHar: uHar,
  uacut: uacut,
  uacute: uacute,
  uarr: uarr,
  ubrcy: ubrcy,
  ubreve: ubreve,
  ucir: ucir,
  ucirc: ucirc,
  ucy: ucy,
  udarr: udarr,
  udblac: udblac,
  udhar: udhar,
  ufisht: ufisht,
  ufr: ufr,
  ugrav: ugrav,
  ugrave: ugrave,
  uharl: uharl,
  uharr: uharr,
  uhblk: uhblk,
  ulcorn: ulcorn,
  ulcorner: ulcorner,
  ulcrop: ulcrop,
  ultri: ultri,
  umacr: umacr,
  um: um,
  uml: uml,
  uogon: uogon,
  uopf: uopf,
  uparrow: uparrow,
  updownarrow: updownarrow,
  upharpoonleft: upharpoonleft,
  upharpoonright: upharpoonright,
  uplus: uplus,
  upsi: upsi,
  upsih: upsih,
  upsilon: upsilon,
  upuparrows: upuparrows,
  urcorn: urcorn,
  urcorner: urcorner,
  urcrop: urcrop,
  uring: uring,
  urtri: urtri,
  uscr: uscr,
  utdot: utdot,
  utilde: utilde,
  utri: utri,
  utrif: utrif,
  uuarr: uuarr,
  uum: uum,
  uuml: uuml,
  uwangle: uwangle,
  vArr: vArr,
  vBar: vBar,
  vBarv: vBarv,
  vDash: vDash,
  vangrt: vangrt,
  varepsilon: varepsilon,
  varkappa: varkappa,
  varnothing: varnothing,
  varphi: varphi,
  varpi: varpi,
  varpropto: varpropto,
  varr: varr,
  varrho: varrho,
  varsigma: varsigma,
  varsubsetneq: varsubsetneq,
  varsubsetneqq: varsubsetneqq,
  varsupsetneq: varsupsetneq,
  varsupsetneqq: varsupsetneqq,
  vartheta: vartheta,
  vartriangleleft: vartriangleleft,
  vartriangleright: vartriangleright,
  vcy: vcy,
  vdash: vdash,
  vee: vee,
  veebar: veebar,
  veeeq: veeeq,
  vellip: vellip,
  verbar: verbar,
  vert: vert,
  vfr: vfr,
  vltri: vltri,
  vnsub: vnsub,
  vnsup: vnsup,
  vopf: vopf,
  vprop: vprop,
  vrtri: vrtri,
  vscr: vscr,
  vsubnE: vsubnE,
  vsubne: vsubne,
  vsupnE: vsupnE,
  vsupne: vsupne,
  vzigzag: vzigzag,
  wcirc: wcirc,
  wedbar: wedbar,
  wedge: wedge,
  wedgeq: wedgeq,
  weierp: weierp,
  wfr: wfr,
  wopf: wopf,
  wp: wp,
  wr: wr,
  wreath: wreath,
  wscr: wscr,
  xcap: xcap,
  xcirc: xcirc,
  xcup: xcup,
  xdtri: xdtri,
  xfr: xfr,
  xhArr: xhArr,
  xharr: xharr,
  xi: xi,
  xlArr: xlArr,
  xlarr: xlarr,
  xmap: xmap,
  xnis: xnis,
  xodot: xodot,
  xopf: xopf,
  xoplus: xoplus,
  xotime: xotime,
  xrArr: xrArr,
  xrarr: xrarr,
  xscr: xscr,
  xsqcup: xsqcup,
  xuplus: xuplus,
  xutri: xutri,
  xvee: xvee,
  xwedge: xwedge,
  yacut: yacut,
  yacute: yacute,
  yacy: yacy,
  ycirc: ycirc,
  ycy: ycy,
  ye: ye,
  yen: yen,
  yfr: yfr,
  yicy: yicy,
  yopf: yopf,
  yscr: yscr,
  yucy: yucy,
  yum: yum,
  yuml: yuml,
  zacute: zacute,
  zcaron: zcaron,
  zcy: zcy,
  zdot: zdot,
  zeetrf: zeetrf,
  zeta: zeta,
  zfr: zfr,
  zhcy: zhcy,
  zigrarr: zigrarr,
  zopf: zopf,
  zscr: zscr,
  zwj: zwj,
  zwnj: zwnj
};
var characterEntities = require$$0;
var decodeEntity_1 = decodeEntity$1;
var own$2 = {}.hasOwnProperty;

function decodeEntity$1(characters) {
  return own$2.call(characterEntities, characters) ? characterEntities[characters] : false;
}

var legacy = require$$0$1;
var invalid = require$$1;
var decimal = isDecimal;
var hexadecimal = isHexadecimal;
var alphanumerical = isAlphanumerical;
var decodeEntity = decodeEntity_1;
var parseEntities_1 = parseEntities;
var own$1 = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype; // Default settings.

var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}; // Characters.

var tab = 9; // '\t'

var lineFeed = 10; // '\n'

var formFeed = 12; // '\f'

var space = 32; // ' '

var ampersand = 38; // '&'

var semicolon = 59; // ';'

var lessThan = 60; // '<'

var equalsTo = 61; // '='

var numberSign = 35; // '#'

var uppercaseX = 88; // 'X'

var lowercaseX = 120; // 'x'

var replacementCharacter = 65533; // '�'
// Reference types.

var name = 'named';
var hexa = 'hexadecimal';
var deci = 'decimal'; // Map of bases.

var bases = {};
bases[hexa] = 16;
bases[deci] = 10; // Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).

var tests = {};
tests[name] = alphanumerical;
tests[deci] = decimal;
tests[hexa] = hexadecimal; // Warning types.

var namedNotTerminated = 1;
var numericNotTerminated = 2;
var namedEmpty = 3;
var numericEmpty = 4;
var namedUnknown = 5;
var numericDisallowed = 6;
var numericProhibited = 7; // Warning messages.

var messages = {};
messages[namedNotTerminated] = 'Named character references must be terminated by a semicolon';
messages[numericNotTerminated] = 'Numeric character references must be terminated by a semicolon';
messages[namedEmpty] = 'Named character references cannot be empty';
messages[numericEmpty] = 'Numeric character references cannot be empty';
messages[namedUnknown] = 'Named character references must be known';
messages[numericDisallowed] = 'Numeric character references cannot be disallowed';
messages[numericProhibited] = 'Numeric character references cannot be outside the permissible Unicode range'; // Wrap to ensure clean parameters are given to `parse`.

function parseEntities(value, options) {
  var settings = {};
  var option;
  var key;

  if (!options) {
    options = {};
  }

  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === undefined ? defaults[key] : option;
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }

  return parse(value, settings);
} // Parse entities.
// eslint-disable-next-line complexity


function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = '';
  var result = [];
  var entityCharacters;
  var namedEntity;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type;
  var test;
  var prev;
  var next;
  var diff;
  var end;

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0);
  } // Cache the current point.


  prev = now(); // Wrap `handleWarning`.

  warning = handleWarning ? parseError : noop; // Ensure the algorithm walks over the first character and the end
  // (inclusive).

  index--;
  length++;

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1;
    }

    character = value.charCodeAt(index);

    if (character === ampersand) {
      following = value.charCodeAt(index + 1); // The behaviour depends on the identity of the next character.

      if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character);
        column++;
        continue;
      }

      start = index + 1;
      begin = start;
      end = start;

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin; // The behaviour further depends on the next character.

        following = value.charCodeAt(end);

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa;
          end = ++begin;
        } else {
          // ASCII digits.
          type = deci;
        }
      } else {
        // Named entity.
        type = name;
      }

      entityCharacters = '';
      entity = '';
      characters = '';
      test = tests[type];
      end--;

      while (++end < length) {
        following = value.charCodeAt(end);

        if (!test(following)) {
          break;
        }

        characters += fromCharCode(following); // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.

        if (type === name && own$1.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }

      terminated = value.charCodeAt(end) === semicolon;

      if (terminated) {
        end++;
        namedEntity = type === name ? decodeEntity(characters) : false;

        if (namedEntity) {
          entityCharacters = characters;
          entity = namedEntity;
        }
      }

      diff = 1 + end - start;
      if (!terminated && !nonTerminated) ;else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff);
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1);
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          } // If the reference is not terminated, warn.


          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty;

            if (settings.attribute) {
              following = value.charCodeAt(end);

              if (following === equalsTo) {
                warning(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }

        reference = entity;
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff);
        } // When terminated and number, parse as either hexadecimal or decimal.


        reference = parseInt(characters, bases[type]); // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.

        if (prohibited(reference)) {
          warning(numericProhibited, diff);
          reference = fromCharCode(replacementCharacter);
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff);
          reference = invalid[reference];
        } else {
          // Parse the number.
          output = ''; // Trigger a warning when the parsed number should not be used.

          if (disallowed(reference)) {
            warning(numericDisallowed, diff);
          } // Stringify the number.


          if (reference > 0xffff) {
            reference -= 0x10000;
            output += fromCharCode(reference >>> (10 & 0x3ff) | 0xd800);
            reference = 0xdc00 | reference & 0x3ff;
          }

          reference = output + fromCharCode(reference);
        }
      } // Found it!
      // First eat the queued characters as normal text, then eat an entity.

      if (reference) {
        flush();
        prev = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now();
        next.offset++;

        if (handleReference) {
          handleReference.call(referenceContext, reference, {
            start: prev,
            end: next
          }, value.slice(start - 1, end));
        }

        prev = next;
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index = end - 1;
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (character === 10 // Line feed
      ) {
        line++;
        lines++;
        column = 0;
      }

      if (character === character) {
        queue += fromCharCode(character);
        column++;
      } else {
        flush();
      }
    }
  } // Return the reduced nodes.


  return result.join(''); // Get current position.

  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    };
  } // “Throw” a parse-error: a warning.


  function parseError(code, offset) {
    var position = now();
    position.column += offset;
    position.offset += offset;
    handleWarning.call(warningContext, messages[code], position, code);
  } // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.


  function flush() {
    if (queue) {
      result.push(queue);

      if (handleText) {
        handleText.call(textContext, queue, {
          start: prev,
          end: now()
        });
      }

      queue = '';
    }
  }
} // Check if `character` is outside the permissible unicode range.


function prohibited(code) {
  return code >= 0xd800 && code <= 0xdfff || code > 0x10ffff;
} // Check if `character` is disallowed.


function disallowed(code) {
  return code >= 0x0001 && code <= 0x0008 || code === 0x000b || code >= 0x000d && code <= 0x001f || code >= 0x007f && code <= 0x009f || code >= 0xfdd0 && code <= 0xfdef || (code & 0xffff) === 0xffff || (code & 0xffff) === 0xfffe;
}

var prismCore = {
  exports: {}
};

(function (module) {
  /// <reference lib="WebWorker"/>
  var _self = typeof window !== 'undefined' ? window // if in browser
  : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
  : {} // if in node js
  ;
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */


  var Prism = function (_self) {
    // Private helper vars
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0; // The grammar object for plaintext

    var plainTextGrammar = {};
    var _ = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: _self.Prism && _self.Prism.manual,

      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
          }
        },

        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function type(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },

        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function objId(obj) {
          if (!obj['__id']) {
            Object.defineProperty(obj, '__id', {
              value: ++uniqueId
            });
          }

          return obj['__id'];
        },

        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;

          switch (_.util.type(o)) {
            case 'Object':
              id = _.util.objId(o);

              if (visited[id]) {
                return visited[id];
              }

              clone =
              /** @type {Record<string, any>} */
              {};
              visited[id] = clone;

              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }

              return (
                /** @type {any} */
                clone
              );

            case 'Array':
              id = _.util.objId(o);

              if (visited[id]) {
                return visited[id];
              }

              clone = [];
              visited[id] = clone;
              /** @type {Array} */

              /** @type {any} */

              o.forEach(function (v, i) {
                clone[i] = deepClone(v, visited);
              });
              return (
                /** @type {any} */
                clone
              );

            default:
              return o;
          }
        },

        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function getLanguage(element) {
          while (element) {
            var m = lang.exec(element.className);

            if (m) {
              return m[1].toLowerCase();
            }

            element = element.parentElement;
          }

          return 'none';
        },

        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function setLanguage(element, language) {
          // remove all `language-xxxx` classes
          // (this might leave behind a leading space)
          element.className = element.className.replace(RegExp(lang, 'gi'), ''); // add the new `language-xxxx` class
          // (using `classList` will automatically clean up spaces for us)

          element.classList.add('language-' + language);
        },

        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function currentScript() {
          if (typeof document === 'undefined') {
            return null;
          }

          if ('currentScript' in document && 1 < 2
          /* hack to trip TS' flow analysis */
          ) {
            return (
              /** @type {any} */
              document.currentScript
            );
          } // IE11 workaround
          // we'll get the src of the current script by parsing IE11's error stack trace
          // this will not work for inline scripts


          try {
            throw new Error();
          } catch (err) {
            // Get file src url from stack. Specifically works with the format of stack traces in IE.
            // A stack will look like this:
            //
            // Error
            //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
            //    at Global code (http://localhost/components/prism-core.js:606:1)
            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];

            if (src) {
              var scripts = document.getElementsByTagName('script');

              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }

            return null;
          }
        },

        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function isActive(element, className, defaultActivation) {
          var no = 'no-' + className;

          while (element) {
            var classList = element.classList;

            if (classList.contains(className)) {
              return true;
            }

            if (classList.contains(no)) {
              return false;
            }

            element = element.parentElement;
          }

          return !!defaultActivation;
        }
      },

      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,

        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function extend(id, redef) {
          var lang = _.util.clone(_.languages[id]);

          for (var key in redef) {
            lang[key] = redef[key];
          }

          return lang;
        },

        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function insertBefore(inside, before, insert, root) {
          root = root ||
          /** @type {any} */
          _.languages;
          var grammar = root[inside];
          /** @type {Grammar} */

          var ret = {};

          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              } // Do not insert token which also occur in insert. See #1525


              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }

          var old = root[inside];
          root[inside] = ret; // Update references in other language definitions

          _.languages.DFS(_.languages, function (key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });

          return ret;
        },
        // Traverse a language definition with Depth First Search
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;

          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];

              var propertyType = _.util.type(property);

              if (propertyType === 'Object' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === 'Array' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},

      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function highlightAll(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },

      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function highlightAllUnder(container, async, callback) {
        var env = {
          callback: callback,
          container: container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };

        _.hooks.run('before-highlightall', env);

        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

        _.hooks.run('before-all-elements-highlight', env);

        for (var i = 0, element; element = env.elements[i++];) {
          _.highlightElement(element, async === true, env.callback);
        }
      },

      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function highlightElement(element, async, callback) {
        // Find language
        var language = _.util.getLanguage(element);

        var grammar = _.languages[language]; // Set language on the element, if not present

        _.util.setLanguage(element, language); // Set language on the parent, for styling


        var parent = element.parentElement;

        if (parent && parent.nodeName.toLowerCase() === 'pre') {
          _.util.setLanguage(parent, language);
        }

        var code = element.textContent;
        var env = {
          element: element,
          language: language,
          grammar: grammar,
          code: code
        };

        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;

          _.hooks.run('before-insert', env);

          env.element.innerHTML = env.highlightedCode;

          _.hooks.run('after-highlight', env);

          _.hooks.run('complete', env);

          callback && callback.call(env.element);
        }

        _.hooks.run('before-sanity-check', env); // plugins may change/add the parent/element


        parent = env.element.parentElement;

        if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
          parent.setAttribute('tabindex', '0');
        }

        if (!env.code) {
          _.hooks.run('complete', env);

          callback && callback.call(env.element);
          return;
        }

        _.hooks.run('before-highlight', env);

        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }

        if (async && _self.Worker) {
          var worker = new Worker(_.filename);

          worker.onmessage = function (evt) {
            insertHighlightedCode(evt.data);
          };

          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },

      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function highlight(text, grammar, language) {
        var env = {
          code: text,
          grammar: grammar,
          language: language
        };

        _.hooks.run('before-tokenize', env);

        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }

        env.tokens = _.tokenize(env.code, env.grammar);

        _.hooks.run('after-tokenize', env);

        return Token.stringify(_.util.encode(env.tokens), env.language);
      },

      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function tokenize(text, grammar) {
        var rest = grammar.rest;

        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }

          delete grammar.rest;
        }

        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },

      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},

        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function add(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },

        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function run(name, env) {
          var callbacks = _.hooks.all[name];

          if (!callbacks || !callbacks.length) {
            return;
          }

          for (var i = 0, callback; callback = callbacks[i++];) {
            callback(env);
          }
        }
      },
      Token: Token
    };
    _self.Prism = _; // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */

    function Token(type, content, alias, matchedStr) {
      /**
       * The type of the token.
       *
       * This is usually the key of a pattern in a {@link Grammar}.
       *
       * @type {string}
       * @see GrammarToken
       * @public
       */
      this.type = type;
      /**
       * The strings or tokens contained by this token.
       *
       * This will be a token stream if the pattern matched also defined an `inside` grammar.
       *
       * @type {string | TokenStream}
       * @public
       */

      this.content = content;
      /**
       * The alias(es) of the token.
       *
       * @type {string|string[]}
       * @see GrammarToken
       * @public
       */

      this.alias = alias; // Copy of the full string this token was created from

      this.length = (matchedStr || '').length | 0;
    }
    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */


    Token.stringify = function stringify(o, language) {
      if (typeof o == 'string') {
        return o;
      }

      if (Array.isArray(o)) {
        var s = '';
        o.forEach(function (e) {
          s += stringify(e, language);
        });
        return s;
      }

      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: 'span',
        classes: ['token', o.type],
        attributes: {},
        language: language
      };
      var aliases = o.alias;

      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }

      _.hooks.run('wrap', env);

      var attributes = '';

      for (var name in env.attributes) {
        attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
      }

      return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };
    /**
     * @param {RegExp} pattern
     * @param {number} pos
     * @param {string} text
     * @param {boolean} lookbehind
     * @returns {RegExpExecArray | null}
     */


    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);

      if (match && lookbehind && match[1]) {
        // change the match to remove the text matched by the Prism lookbehind group
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }

      return match;
    }
    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */


    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + ',' + j) {
            return;
          }

          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;

          if (greedy && !patternObj.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
          }
          /** @type {RegExp} */


          var pattern = patternObj.pattern || patternObj;

          for ( // iterate the token list and keep track of the current token/string position
          var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }

            var str = currentNode.value;

            if (tokenList.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            var removeCount = 1; // this is the to parameter of removeBetween

            var match;

            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);

              if (!match || match.index >= text.length) {
                break;
              }

              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos; // find the node that contains the match

              p += currentNode.value.length;

              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              } // adjust pos (and p)


              p -= currentNode.value.length;
              pos = p; // the current node is a Token, then the match starts inside another Token, which is invalid

              if (currentNode.value instanceof Token) {
                continue;
              } // find the last node which is affected by this match


              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
                removeCount++;
                p += k.value.length;
              }

              removeCount--; // replace with the new match

              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);

              if (!match) {
                continue;
              }
            } // eslint-disable-next-line no-redeclare


            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;

            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }

            var removeFrom = currentNode.prev;

            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }

            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);

            if (after) {
              addAfter(tokenList, currentNode, after);
            }

            if (removeCount > 1) {
              // at least one Token object was removed, so we have to do some rematching
              // this can only happen if the current pattern is greedy

              /** @type {RematchOptions} */
              var nestedRematch = {
                cause: token + ',' + j,
                reach: reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch); // the reach might have been extended because of the rematching

              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }
    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */


    function LinkedList() {
      /** @type {LinkedListNode<T>} */
      var head = {
        value: null,
        prev: null,
        next: null
      };
      /** @type {LinkedListNode<T>} */

      var tail = {
        value: null,
        prev: head,
        next: null
      };
      head.next = tail;
      /** @type {LinkedListNode<T>} */

      this.head = head;
      /** @type {LinkedListNode<T>} */

      this.tail = tail;
      this.length = 0;
    }
    /**
     * Adds a new node with the given value to the list.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */


    function addAfter(list, node, value) {
      // assumes that node != list.tail && values.length >= 0
      var next = node.next;
      var newNode = {
        value: value,
        prev: node,
        next: next
      };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */


    function removeRange(list, node, count) {
      var next = node.next;

      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }

      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */


    function toArray(list) {
      var array = [];
      var node = list.head.next;

      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }

      return array;
    }

    if (!_self.document) {
      if (!_self.addEventListener) {
        // in Node.js
        return _;
      }

      if (!_.disableWorkerMessageHandler) {
        // In worker
        _self.addEventListener('message', function (evt) {
          var message = JSON.parse(evt.data);
          var lang = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;

          _self.postMessage(_.highlight(code, _.languages[lang], lang));

          if (immediateClose) {
            _self.close();
          }
        }, false);
      }

      return _;
    } // Get current script and highlight


    var script = _.util.currentScript();

    if (script) {
      _.filename = script.src;

      if (script.hasAttribute('data-manual')) {
        _.manual = true;
      }
    }

    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }

    if (!_.manual) {
      // If the document state is "loading", then we'll use DOMContentLoaded.
      // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
      // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
      // might take longer one animation frame to execute which can create a race condition where only some plugins have
      // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
      // See https://github.com/PrismJS/prism/issues/2102
      var readyState = document.readyState;

      if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
        document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }

    return _;
  }(_self);

  if (module.exports) {
    module.exports = Prism;
  } // hack for components to work correctly in node.js


  if (typeof _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.c !== 'undefined') {
    _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.c.Prism = Prism;
  } // some additional documentation/types

  /**
   * The expansion of a simple `RegExp` literal to support additional properties.
   *
   * @typedef GrammarToken
   * @property {RegExp} pattern The regular expression of the token.
   * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
   * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
   * @property {boolean} [greedy=false] Whether the token is greedy.
   * @property {string|string[]} [alias] An optional alias or list of aliases.
   * @property {Grammar} [inside] The nested grammar of this token.
   *
   * The `inside` grammar will be used to tokenize the text value of each token of this kind.
   *
   * This can be used to make nested and even recursive language definitions.
   *
   * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
   * each another.
   * @global
   * @public
   */

  /**
   * @typedef Grammar
   * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
   * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
   * @global
   * @public
   */

  /**
   * A function which will invoked after an element was successfully highlighted.
   *
   * @callback HighlightCallback
   * @param {Element} element The element successfully highlighted.
   * @returns {void}
   * @global
   * @public
   */

  /**
   * @callback HookCallback
   * @param {Object<string, any>} env The environment variables of the hook.
   * @returns {void}
   * @global
   * @public
   */

})(prismCore);

var clike_1 = clike$1;
clike$1.displayName = 'clike';
clike$1.aliases = [];

function clike$1(Prism) {
  Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}

var javascript_1 = javascript;
javascript.displayName = 'javascript';
javascript.aliases = ['js'];

function javascript(Prism) {
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [Prism.languages.clike['class-name'], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: true
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: true
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + '(?:' + ( // constant
      /NaN|Infinity/.source + '|' + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
      /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
      lookbehind: true
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: true,
      greedy: true,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function'
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism.languages.insertBefore('javascript', 'string', {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: 'comment'
    },
    'template-string': {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    'string-property': {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: 'property'
    }
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: 'property'
    }
  });

  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

    Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
  }

  Prism.languages.js = Prism.languages.javascript;
}
/* global window, self */
// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.


var ctx = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object' ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' ? self : (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window : _typeof(_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.c) === 'object' ? _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.c : {};
var restore = capture();
ctx.Prism = {
  manual: true,
  disableWorkerMessageHandler: true
}; // Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.

var h = hastscript;
var decode = parseEntities_1;
var Prism = prismCore.exports;
var markup = markup_1;
var css = css_1;
var clike = clike_1;
var js = javascript_1;
restore();
var own = {}.hasOwnProperty; // Inherit.

function Refractor() {}

Refractor.prototype = Prism; // Construct.

var refract = new Refractor(); // Expose.

var core = refract; // Create.

refract.highlight = highlight;
refract.register = register;
refract.alias = alias;
refract.registered = registered;
refract.listLanguages = listLanguages; // Register bundled grammars.

register(markup);
register(css);
register(clike);
register(js);
refract.util.encode = encode;
refract.Token.stringify = stringify;

function register(grammar) {
  if (typeof grammar !== 'function' || !grammar.displayName) {
    throw new Error('Expected `function` for `grammar`, got `' + grammar + '`');
  } // Do not duplicate registrations.


  if (refract.languages[grammar.displayName] === undefined) {
    grammar(refract);
  }
}

function alias(name, alias) {
  var languages = refract.languages;
  var map = name;
  var key;
  var list;
  var length;
  var index;

  if (alias) {
    map = {};
    map[name] = alias;
  }

  for (key in map) {
    list = map[key];
    list = typeof list === 'string' ? [list] : list;
    length = list.length;
    index = -1;

    while (++index < length) {
      languages[list[index]] = languages[key];
    }
  }
}

function highlight(value, name) {
  var sup = Prism.highlight;
  var grammar;

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for `value`, got `' + value + '`');
  } // `name` is a grammar object.


  if (refract.util.type(name) === 'Object') {
    grammar = name;
    name = null;
  } else {
    if (typeof name !== 'string') {
      throw new Error('Expected `string` for `name`, got `' + name + '`');
    }

    if (own.call(refract.languages, name)) {
      grammar = refract.languages[name];
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered');
    }
  }

  return sup.call(this, value, grammar, name);
}

function registered(language) {
  if (typeof language !== 'string') {
    throw new Error('Expected `string` for `language`, got `' + language + '`');
  }

  return own.call(refract.languages, language);
}

function listLanguages() {
  var languages = refract.languages;
  var list = [];
  var language;

  for (language in languages) {
    if (own.call(languages, language) && _typeof(languages[language]) === 'object') {
      list.push(language);
    }
  }

  return list;
}

function stringify(value, language, parent) {
  var env;

  if (typeof value === 'string') {
    return {
      type: 'text',
      value: value
    };
  }

  if (refract.util.type(value) === 'Array') {
    return stringifyAll(value, language);
  }

  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language: language,
    parent: parent
  };

  if (value.alias) {
    env.classes = env.classes.concat(value.alias);
  }

  refract.hooks.run('wrap', env);
  return h(env.tag + '.' + env.classes.join('.'), attributes(env.attributes), env.content);
}

function stringifyAll(values, language) {
  var result = [];
  var length = values.length;
  var index = -1;
  var value;

  while (++index < length) {
    value = values[index];

    if (value !== '' && value !== null && value !== undefined) {
      result.push(value);
    }
  }

  index = -1;
  length = result.length;

  while (++index < length) {
    value = result[index];
    result[index] = refract.Token.stringify(value, language, result);
  }

  return result;
}

function encode(tokens) {
  return tokens;
}

function attributes(attrs) {
  var key;

  for (key in attrs) {
    attrs[key] = decode(attrs[key]);
  }

  return attrs;
}

function capture() {
  var defined = ('Prism' in ctx);
  /* istanbul ignore next */

  var current = defined ? ctx.Prism : undefined;
  return restore;

  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      ctx.Prism = current;
    } else {
      delete ctx.Prism;
    }

    defined = undefined;
    current = undefined;
  }
}

var SyntaxHighlighter$1 = highlight$1(core, {});

SyntaxHighlighter$1.registerLanguage = function (_, language) {
  return core.register(language);
};

var ReactSyntaxHighlighter = SyntaxHighlighter$1;
var navigator = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.w.navigator,
    document$1 = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.w.document,
    globalWindow = _index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.w.window;
ReactSyntaxHighlighter.registerLanguage('jsextra', jsExtras$1);
ReactSyntaxHighlighter.registerLanguage('jsx', jsx$1);
ReactSyntaxHighlighter.registerLanguage('json', json$1);
ReactSyntaxHighlighter.registerLanguage('yml', yaml$1);
ReactSyntaxHighlighter.registerLanguage('md', markdown$1);
ReactSyntaxHighlighter.registerLanguage('bash', bash$1);
ReactSyntaxHighlighter.registerLanguage('css', css$2);
ReactSyntaxHighlighter.registerLanguage('html', markup$2);
ReactSyntaxHighlighter.registerLanguage('tsx', tsx$1);
ReactSyntaxHighlighter.registerLanguage('typescript', typescript$1);
ReactSyntaxHighlighter.registerLanguage('graphql', graphql$1);
var themedSyntax = memoizerific__WEBPACK_IMPORTED_MODULE_36___default()(2)(function (theme) {
  return Object.entries(theme.code || {}).reduce(function (acc, _ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        key = _ref9[0],
        val = _ref9[1];

    return Object.assign(Object.assign({}, acc), _defineProperty2({}, "* .".concat(key), val));
  }, {});
});
var copyToClipboard = createCopyToClipboardFunction();

function createCopyToClipboardFunction() {
  var _this = this;

  if (navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) {
    return function (text) {
      return navigator.clipboard.writeText(text);
    };
  }

  return function (text) {
    return (0,_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.b)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var tmp, focus;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tmp = document$1.createElement('TEXTAREA');
              focus = document$1.activeElement;
              tmp.value = text;
              document$1.body.appendChild(tmp);
              tmp.select();
              document$1.execCommand('copy');
              document$1.body.removeChild(tmp);
              focus.focus();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };
}

var Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_40__.styled.div(function (_ref10) {
  var theme = _ref10.theme;
  return {
    position: 'relative',
    overflow: 'hidden',
    color: theme.color.defaultText
  };
}, function (_ref11) {
  var theme = _ref11.theme,
      bordered = _ref11.bordered;
  return bordered ? {
    border: "1px solid ".concat(theme.appBorderColor),
    borderRadius: theme.borderRadius,
    background: theme.background.content
  } : {};
});
var Scroller = (0,_storybook_theming__WEBPACK_IMPORTED_MODULE_40__.styled)(function (_ref12) {
  var children = _ref12.children,
      className = _ref12.className;
  return react__WEBPACK_IMPORTED_MODULE_35__.createElement(_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.S, {
    horizontal: true,
    vertical: true,
    className: className
  }, children);
})({
  position: 'relative'
}, function (_ref13) {
  var theme = _ref13.theme;
  return themedSyntax(theme);
});
var Pre = _storybook_theming__WEBPACK_IMPORTED_MODULE_40__.styled.pre(function (_ref14) {
  var theme = _ref14.theme,
      padded = _ref14.padded;
  return {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 0,
    padding: padded ? theme.layoutMargin : 0
  };
});
/*
We can't use `code` since PrismJS races for it.
See https://github.com/storybookjs/storybook/issues/18090
 */

var Code = _storybook_theming__WEBPACK_IMPORTED_MODULE_40__.styled.div(function (_ref15) {
  var theme = _ref15.theme;
  return {
    flex: 1,
    paddingLeft: 2,
    paddingRight: theme.layoutMargin,
    opacity: 1
  };
}); // copied from @types/react-syntax-highlighter/index.d.ts

var SyntaxHighlighter = function SyntaxHighlighter(_a) {
  var children = _a.children,
      _a$language = _a.language,
      language = _a$language === void 0 ? 'jsx' : _a$language,
      _a$copyable = _a.copyable,
      copyable = _a$copyable === void 0 ? false : _a$copyable,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? false : _a$bordered,
      _a$padded = _a.padded,
      padded = _a$padded === void 0 ? false : _a$padded,
      _a$format = _a.format,
      format = _a$format === void 0 ? true : _a$format,
      _a$formatter = _a.formatter,
      formatter = _a$formatter === void 0 ? null : _a$formatter,
      _a$className = _a.className,
      className = _a$className === void 0 ? null : _a$className,
      _a$showLineNumbers = _a.showLineNumbers,
      showLineNumbers = _a$showLineNumbers === void 0 ? false : _a$showLineNumbers,
      rest = (0,_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.d)(_a, ["children", "language", "copyable", "bordered", "padded", "format", "formatter", "className", "showLineNumbers"]);

  if (typeof children !== 'string' || !children.trim()) {
    return null;
  }

  var highlightableCode = formatter ? formatter(format, children) : children.trim();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_35__.useCallback)(function (e) {
    e.preventDefault();
    var selectedText = globalWindow.getSelection().toString();
    var textToCopy = e.type !== 'click' && selectedText ? selectedText : highlightableCode;
    copyToClipboard(textToCopy).then(function () {
      setCopied(true);
      globalWindow.setTimeout(function () {
        return setCopied(false);
      }, 1500);
    }).catch(_storybook_client_logger__WEBPACK_IMPORTED_MODULE_41__.logger.error);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_35__.createElement(Wrapper, {
    bordered: bordered,
    padded: padded,
    className: className,
    onCopyCapture: onClick
  }, react__WEBPACK_IMPORTED_MODULE_35__.createElement(Scroller, null, react__WEBPACK_IMPORTED_MODULE_35__.createElement(ReactSyntaxHighlighter, Object.assign({
    padded: padded || bordered,
    language: language,
    showLineNumbers: showLineNumbers,
    showInlineLineNumbers: showLineNumbers,
    useInlineStyles: false,
    PreTag: Pre,
    CodeTag: Code,
    lineNumberContainerStyle: {}
  }, rest), highlightableCode)), copyable ? react__WEBPACK_IMPORTED_MODULE_35__.createElement(_index_681e4b07_js__WEBPACK_IMPORTED_MODULE_39__.A, {
    actionItems: [{
      title: copied ? 'Copied' : 'Copy',
      onClick: onClick
    }]
  }) : null);
};




/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.flags.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.flags.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.from-code-point.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.from-code-point.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw $RangeError(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join(elements, '');
  }
});


/***/ })

}]);
//# sourceMappingURL=51.e27cfa24.iframe.bundle.js.map