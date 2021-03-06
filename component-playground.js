function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { defaultCode } from '../utils/playground.default-code';
import FullscreenButton from './fullscreen-button';
import { requestFullscreen as _requestFullscreen, exitFullscreen, getFullscreenElement } from '../utils/fullscreen';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
export var PlaygroundProvider =
/*#__PURE__*/
styled(LiveProvider, {
  target: "e177gi4f0"
})("border-radius:0 0 6px 6px;height:100%;width:100%;border-radius:6px;overflow:hidden;");
var PlaygroundPreview =
/*#__PURE__*/
styled(function (_ref) {
  var className = _ref.className;
  return React.createElement(LivePreview, {
    className: className
  });
}, {
  target: "e177gi4f1"
})("padding:0.5rem;min-height:100%;background:", function (p) {
  return p.previewBackgroundColor || '#fff';
}, ";");
var PlaygroundEditor =
/*#__PURE__*/
styled(function (_ref2) {
  var _ = _ref2.syntaxStyles,
      __ = _ref2.prismTheme,
      rest = _objectWithoutProperties(_ref2, ["syntaxStyles", "prismTheme"]);

  return React.createElement(LiveEditor, rest);
}, {
  target: "e177gi4f2"
})("&&{", function (props) {
  return props.syntaxStyles;
}, " min-height:100%;font-size:1.25vw;&.builtin-prism-theme{", function (props) {
  return props.prismTheme;
}, ";}}");
var PlaygroundRow =
/*#__PURE__*/
styled("div", {
  target: "e177gi4f3"
})("display:flex;justify-content:stretch;align-items:center;width:100%;&:-webkit-full-screen{height:100%;}&:-moz-full-screen{height:100%;}&:-ms-fullscreen{height:100%;}&:fullscreen{height:100%;}&:-webkit-full-screen > *{height:100%;}&:-moz-full-screen > *{height:100%;}&:-ms-fullscreen > *{height:100%;}&:fullscreen > *{height:100%;}");
var Title =
/*#__PURE__*/
styled("div", {
  target: "e177gi4f4"
})("position:relative;flex:1;background:#ddd;border-bottom:1px solid #999;color:#424242;display:block;font-family:'Roboto Mono','Menlo','Andale Mono',monospace;font-size:1.15vw;padding:0.4rem 0;text-transform:uppercase;&:last-child{border-left:1px solid #999;}> button{position:absolute;right:1em;margin-top:-0.1em;}", function (props) {
  return props.useDarkTheme &&
  /*#__PURE__*/
  css("background:#272822;border-bottom:1px solid #000;color:#fff;");
}, ";");
var PlaygroundColumn =
/*#__PURE__*/
styled("div", {
  target: "e177gi4f5"
})("flex:1;font-size:1.25vw;margin:0;position:relative;height:60vh;overflow-y:scroll;&:last-child{border-left:1px solid #999;}");
var PlaygroundError =
/*#__PURE__*/
styled(LiveError, {
  target: "e177gi4f6"
})("position:absolute;bottom:0;width:100%;text-align:left;white-space:pre-wrap;background:rgba(255,35,36,0.8);color:white;padding:0.5rem;");
var STORAGE_KEY = 'spectacle-playground';

function getEnhancedScope() {
  var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    Component: Component
  }, scope);
}

var ComponentPlayground =
/*#__PURE__*/
function (_Component) {
  _inherits(ComponentPlayground, _Component);

  function ComponentPlayground() {
    var _this;

    _classCallCheck(this, ComponentPlayground);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComponentPlayground).apply(this, arguments));
    _this.onRef = _this.onRef.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEditorChange = _this.onEditorChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestFullscreen = _this.requestFullscreen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.syncCode = _this.syncCode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      code: (_this.props.code || defaultCode).trim(),
      scope: getEnhancedScope(_this.props.scope)
    };
    return _this;
  }

  _createClass(ComponentPlayground, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      localStorage.setItem(STORAGE_KEY, this.state.code);
      window.addEventListener('storage', this.syncCode);
      this.playgroundSetState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('storage', this.syncCode);
    }
  }, {
    key: "playgroundSetState",
    value: function playgroundSetState() {
      if (this.props.code) {
        var code = (this.props.code || defaultCode).trim();
        this.setState({
          code: code
        });
      }

      if (this.props.scope) {
        var scope = getEnhancedScope(this.props.scope);
        this.setState({
          scope: scope
        });
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(evt) {
      evt.stopPropagation(); // Esc: When entering the editor or an input element the default esc-to-exit might not work anymore

      if (evt.keyCode === 27 && getFullscreenElement()) {
        exitFullscreen();
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(evt) {
      evt.stopPropagation();
    }
  }, {
    key: "onRef",
    value: function onRef(node) {
      this.node = node;
    }
  }, {
    key: "onEditorChange",
    value: function onEditorChange(event) {
      this.setState({
        code: event.target.value
      });
      localStorage.setItem(STORAGE_KEY, event.target.value);
    }
  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      _requestFullscreen(this.node);
    }
  }, {
    key: "syncCode",
    value: function syncCode(_ref3) {
      var key = _ref3.key,
          newValue = _ref3.newValue;

      if (key === STORAGE_KEY) {
        this.setState({
          code: newValue
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          previewBackgroundColor = _this$props.previewBackgroundColor,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? 'dark' : _this$props$theme,
          transformCode = _this$props.transformCode;
      var useDarkTheme = theme === 'dark';
      var externalPrismTheme = this.props.theme === 'external';
      var className = "language-jsx ".concat(externalPrismTheme ? '' : 'builtin-prism-theme');
      return React.createElement(PlaygroundProvider, {
        mountStylesheet: false,
        code: this.state.code,
        scope: this.state.scope,
        transformCode: transformCode,
        noInline: true
      }, React.createElement(PlaygroundRow, {
        useDarkTheme: useDarkTheme
      }, React.createElement(Title, { useDarkTheme: useDarkTheme }, "Source Code"), React.createElement(Title, null, "Live Preview", React.createElement(FullscreenButton, {
        onClick: this.requestFullscreen
      }))), React.createElement(PlaygroundRow, {
        innerRef: this.onRef,
        onKeyUp: this.onKeyUp,
        onKeyDown: this.onKeyDown
      }, React.createElement(PlaygroundColumn, null, React.createElement(PlaygroundEditor, {
        className: className,
        syntaxStyles: this.context.styles.components.syntax,
        prismTheme: this.context.styles.prism[useDarkTheme ? 'dark' : 'light'],
        onChange: this.onEditorChange
      }), React.createElement(PlaygroundError, null)), React.createElement(PlaygroundColumn, null, React.createElement(PlaygroundPreview, {
        previewBackgroundColor: previewBackgroundColor
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var updatedState = {};

      if (nextProps.code !== prevState.code) {
        var code = (nextProps.code || defaultCode).trim();
        updatedState.code = code;
      }

      if (nextProps.scope !== prevState.scope) {
        var scope = getEnhancedScope(nextProps.scope);
        updatedState.scope = scope;
      }

      return isEmpty(updatedState) ? null : updatedState;
    }
  }]);

  return ComponentPlayground;
}(Component);

ComponentPlayground.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object
};
ComponentPlayground.propTypes = {
  code: PropTypes.string,
  previewBackgroundColor: PropTypes.string,
  scope: PropTypes.object,
  theme: PropTypes.oneOf(['dark', 'light', 'external']),
  transformCode: PropTypes.func
};
ComponentPlayground.defaultProps = {
  theme: 'dark'
};
export default ComponentPlayground;