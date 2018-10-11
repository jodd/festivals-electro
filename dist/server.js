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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postJSON = exports.loadScript = exports.DateRange = exports.DateSticker = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']; /* ==========================================================================
                                                                                                                                           Utilities
                                                                                                                                           ========================================================================== */

var shortMonths = ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'];

/* DateSticker
   -------------------------------------------------------------------------- */
var DateSticker = function DateSticker(_ref) {
  var datetime = _ref.datetime;


  var date = new Date(datetime);

  return _react2.default.createElement(
    'time',
    { dateTime: datetime, className: 'DateSticker' },
    _react2.default.createElement(
      'span',
      { className: 'DateSticker-day' },
      date.getDate()
    ),
    _react2.default.createElement(
      'span',
      { className: 'DateSticker-month' },
      shortMonths[date.getMonth()]
    )
  );
};

/* DateRange
   -------------------------------------------------------------------------- */
var DateRange = function DateRange(_ref2) {
  var start_time = _ref2.start_time,
      end_time = _ref2.end_time;


  var start_date = new Date(start_time);
  var end_date = new Date(end_time);
  var startDate = start_date.getDate();
  var endDate = end_date.getDate();
  var startMonth = start_date.getMonth();
  var endMonth = end_date.getMonth();

  if (startDate === endDate && startMonth === endMonth) {
    return _react2.default.createElement(
      'span',
      { className: 'DateRange' },
      _react2.default.createElement(
        'time',
        { dateTime: end_time },
        startDate + ' ' + months[startMonth]
      )
    );
  } else if (startMonth === endMonth) {
    return _react2.default.createElement(
      'span',
      { className: 'DateRange' },
      _react2.default.createElement(
        'time',
        { dateTime: start_time },
        startDate
      ),
      ' au ',
      _react2.default.createElement(
        'time',
        { dateTime: end_time },
        endDate + ' ' + months[endMonth]
      )
    );
  } else {
    return _react2.default.createElement(
      'span',
      { className: 'DateRange' },
      _react2.default.createElement(
        'time',
        { dateTime: start_time },
        startDate + ' ' + months[startMonth]
      ),
      ' au ',
      _react2.default.createElement(
        'time',
        { dateTime: end_time },
        endDate + ' ' + months[endMonth]
      )
    );
  }
};

/* loadScript
   -------------------------------------------------------------------------- */
function loadScript(url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    document.body.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = url;
  });
}

/* postJSON
   -------------------------------------------------------------------------- */
function postJSON(url, obj) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(function (res) {
    return res.json();
  });
}

/* Export components
   -------------------------------------------------------------------------- */
exports.DateSticker = DateSticker;
exports.DateRange = DateRange;
exports.loadScript = loadScript;
exports.postJSON = postJSON;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(months, 'months', '/Users/jod/Sites/festivals-electro.fr/site/src/utils.js');

  __REACT_HOT_LOADER__.register(shortMonths, 'shortMonths', '/Users/jod/Sites/festivals-electro.fr/site/src/utils.js');

  __REACT_HOT_LOADER__.register(DateSticker, 'DateSticker', '/Users/jod/Sites/festivals-electro.fr/site/src/utils.js');

  __REACT_HOT_LOADER__.register(DateRange, 'DateRange', '/Users/jod/Sites/festivals-electro.fr/site/src/utils.js');

  __REACT_HOT_LOADER__.register(loadScript, 'loadScript', '/Users/jod/Sites/festivals-electro.fr/site/src/utils.js');

  __REACT_HOT_LOADER__.register(postJSON, 'postJSON', '/Users/jod/Sites/festivals-electro.fr/site/src/utils.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/Cover.css');
}

/* Component definition
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Cover
   ========================================================================== */

var _default = function _default(props) {
  var ratio = props.ratio,
      _props$alt = props.alt,
      alt = _props$alt === undefined ? "" : _props$alt,
      _props$cover = props.cover,
      source = _props$cover.source,
      offset_y = _props$cover.offset_y;


  function imageLoaded(e) {
    // reset
    e.target.parentNode.classList.remove('fitHeight');
    e.target.style = '';

    if (e.target.naturalHeight / e.target.naturalWidth < ratio) {
      e.target.parentNode.classList.add('fitHeight');
    } else {
      var offset = Math.ceil((e.target.clientHeight - e.target.parentNode.clientHeight) * Math.min(offset_y * 0.01, 1));
      e.target.style = 'top: -' + offset + 'px';
    }
  }

  var style = {
    paddingTop: ratio * 100 + '%'
  };

  return _react2.default.createElement(
    'div',
    { className: 'Cover', style: style },
    _react2.default.createElement('img', { src: source, onLoad: imageLoaded, alt: alt })
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Cover.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("secure-password");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _Cover = __webpack_require__(8);

var _Cover2 = _interopRequireDefault(_Cover);

var _PerformerMinicard = __webpack_require__(13);

var _PerformerMinicard2 = _interopRequireDefault(_PerformerMinicard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Event
   ========================================================================== */

if (false) {
  require('../css/Event.css');
}

/* Component definition
   -------------------------------------------------------------------------- */

var _default = function _default(_ref) {
  var event = _ref.event;
  var name = event.name,
      cover = event.cover,
      start_time = event.start_time,
      end_time = event.end_time,
      place = event.place,
      lineup = event.lineup,
      links = event.links;

  var location = place ? place.location : null;
  var gmapsQuery = null;

  if (location) {
    if (location.city && location.country) {
      gmapsQuery = location.street ? escape(location.street + ' ' + location.city + ' ' + location.country) : escape(place.name + ' ' + location.city + ' ' + location.country);
    } else if (location.latitude && location.longitude) {
      gmapsQuery = location.latitude + "," + location.longitude;
    }
  } else if (place) {
    gmapsQuery = escape(place.name);
  }

  var pastEvent = new Date(end_time) < new Date();

  // sort lineup in alphabetical order
  lineup.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return _react2.default.createElement(
    'div',
    { className: 'Page' },
    _react2.default.createElement(
      _reactMetaTags2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        name
      ),
      _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: name }),
      cover && _react2.default.createElement('meta', { id: 'meta_image', property: 'og:image', content: cover.source })
    ),
    _react2.default.createElement(
      'main',
      { role: 'main' },
      _react2.default.createElement(
        'div',
        { className: 'Event' },
        _react2.default.createElement(
          'section',
          { className: 'Event-description' },
          cover.source && _react2.default.createElement(
            'div',
            { className: 'Event-picture' },
            _react2.default.createElement(_Cover2.default, { cover: cover, ratio: 0.524,
              alt: "Photo de présentation de l'événement " + name })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Event-content' },
            _react2.default.createElement(
              'div',
              { className: 'Event-title' },
              _react2.default.createElement(
                'h1',
                null,
                name
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Event-meta' },
              _react2.default.createElement(
                'div',
                { className: 'Event-date' },
                _react2.default.createElement(
                  'svg',
                  { className: 'icon-calendar', viewBox: '0 0 416 448', 'aria-hidden': 'true' },
                  _react2.default.createElement('path', { d: 'M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z' })
                ),
                _react2.default.createElement(_utils.DateRange, { start_time: start_time, end_time: end_time })
              ),
              place && _react2.default.createElement(
                'div',
                { className: 'Event-place' },
                _react2.default.createElement(
                  'svg',
                  { className: 'icon-location', viewBox: '0 0 512 512', 'aria-hidden': 'true' },
                  _react2.default.createElement('path', { d: 'M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  place.name,
                  location && location.city && location.country && _react2.default.createElement(
                    'span',
                    null,
                    (location.street ? location.street + ', ' : '') + (location.zip ? location.zip + ' ' : '') + location.city + ', ' + location.country
                  )
                ),
                gmapsQuery && _react2.default.createElement(
                  'a',
                  { href: "https://www.google.com/maps/search/?api=1&query=" + gmapsQuery,
                    className: 'Event-place-link' },
                  'Voir la carte'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Event-links' },
              _react2.default.createElement(
                'span',
                null,
                'Ailleurs sur le web\xA0:'
              ),
              _react2.default.createElement(
                'ul',
                null,
                links.ws && _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: links.ws, title: "Site internet de l'événement " + name },
                    _react2.default.createElement(
                      'svg',
                      { className: 'icon-earth', viewBox: '0 0 512 512', 'aria-hidden': 'true' },
                      _react2.default.createElement('path', { d: 'M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 480.001c-31.479 0-61.436-6.506-88.615-18.226L283.959 330.63A16.002 16.002 0 0 0 288 320v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.07-4.687-11.313-4.687H80c-8.836 0-16 7.164-16 16v96a15.999 15.999 0 0 0 8.845 14.311L128 345.889v93.943C69.974 399.354 32 332.116 32 256c0-34.357 7.745-66.903 21.569-96H112c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.07 4.686-11.314V41.294C212.281 35.257 233.759 32 256 32c35.203 0 68.502 8.13 98.141 22.6a97.187 97.187 0 0 0-6.023 5.518C329.985 78.25 320 102.357 320 128s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-.04 4.759-.118 6.907 25.901 19.376 93.328-4.202 186.167a15.957 15.957 0 0 0-.421 2.612c-40.662 41.54-97.35 67.328-160.071 67.328z' })
                    ),
                    'Site web'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: "https://www.facebook.com/events/" + event.facebook_id, title: "Page Facebook de l'événement " + name },
                    _react2.default.createElement(
                      'svg',
                      { className: 'icon-facebook', viewBox: '0 0 32 32', 'aria-hidden': 'true' },
                      _react2.default.createElement('path', { d: 'M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z', fill: '#3B5998' }),
                      _react2.default.createElement('path', { d: 'M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z', fill: '#FFF' })
                    ),
                    'Ev\xE9nement Facebook'
                  )
                ),
                links.ra && _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: links.ra, title: "Page Resident Advisor de l'événement " + name },
                    _react2.default.createElement('img', { className: 'icon-ra', src: '/assets/img/ra.png', alt: '' }),
                    'Ev\xE9nement Resident Advisor'
                  )
                )
              )
            )
          )
        ),
        lineup.length > 0 && _react2.default.createElement(
          'section',
          { className: 'Event-lineup' },
          _react2.default.createElement(
            'strong',
            null,
            'Line-up'
          ),
          _react2.default.createElement(
            'ul',
            null,
            lineup.map(function (performer) {
              return _react2.default.createElement(
                'li',
                { key: performer.id },
                _react2.default.createElement(_PerformerMinicard2.default, { performer: performer })
              );
            })
          )
        )
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Event.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Performer Minicard
   ========================================================================== */

if (false) {
  require('../css/PerformerMinicard.css');
}

var _default = function _default(_ref) {
  var performer = _ref.performer;

  return _react2.default.createElement(
    'div',
    { className: 'PerformerMinicard' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/performers/' + performer.id },
      _react2.default.createElement('img', { src: performer.picture.data.url,
        alt: "Photo de profil de " + performer.name,
        className: 'PerformerMinicard-picture' }),
      _react2.default.createElement(
        'strong',
        { className: 'PerformerMinicard-info' },
        _react2.default.createElement(
          'span',
          null,
          performer.name
        )
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/PerformerMinicard.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _Cover = __webpack_require__(8);

var _Cover2 = _interopRequireDefault(_Cover);

var _EventMinicard = __webpack_require__(15);

var _EventMinicard2 = _interopRequireDefault(_EventMinicard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Performer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Performer.css');
}

/* Component definition
   -------------------------------------------------------------------------- */

var Performer = function (_React$Component) {
  _inherits(Performer, _React$Component);

  function Performer(props) {
    _classCallCheck(this, Performer);

    return _possibleConstructorReturn(this, (Performer.__proto__ || Object.getPrototypeOf(Performer)).call(this, props));
  }

  _createClass(Performer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      // exit if Soundcloud account not found
      if (!this.props.performer.links.sc) return;

      // if (window.SC && window.SC.Widget) {
      //   this.initPlayer.call(this)
      // } else {
      //   loadScript("https://w.soundcloud.com/player/api.js")
      //     .then(this.initPlayer.bind(this))
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$performer = this.props.performer,
          id = _props$performer.id,
          name = _props$performer.name,
          picture = _props$performer.picture,
          cover = _props$performer.cover,
          links = _props$performer.links,
          events = _props$performer.events;


      var pastEvents = events.filter(function (e) {
        return new Date(e.end_time) < new Date();
      });
      var nextEvents = events.filter(function (e) {
        return new Date(e.end_time) >= new Date();
      });

      // sort upcoming events by date ascending
      nextEvents.sort(function (a, b) {
        return new Date(a.start_time) - new Date(b.start_time);
      });

      // sort past events by date descending
      pastEvents.sort(function (a, b) {
        return new Date(b.start_time) - new Date(a.start_time);
      });

      return _react2.default.createElement(
        'div',
        { className: 'Page Page-performer' },
        _react2.default.createElement(
          _reactMetaTags2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            name
          ),
          _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: name }),
          cover && _react2.default.createElement('meta', { id: 'meta_image', property: 'og:image', content: cover.source })
        ),
        _react2.default.createElement(
          'main',
          { role: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'Performer' },
            _react2.default.createElement(
              'h1',
              { className: 'noCover' },
              _react2.default.createElement('img', { src: picture.data.url, alt: "Photo de profil de " + name }),
              name
            ),
            _react2.default.createElement(
              'div',
              { className: 'Performer-content' },
              _react2.default.createElement(
                'div',
                { className: 'Performer-links' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Ailleurs sur le web\xA0:'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  links.ws && _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: links.ws, title: "Site internet de " + name },
                      _react2.default.createElement(
                        'svg',
                        { className: 'icon-earth', viewBox: '0 0 512 512', 'aria-hidden': 'true' },
                        _react2.default.createElement('path', { d: 'M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 480.001c-31.479 0-61.436-6.506-88.615-18.226L283.959 330.63A16.002 16.002 0 0 0 288 320v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.07-4.687-11.313-4.687H80c-8.836 0-16 7.164-16 16v96a15.999 15.999 0 0 0 8.845 14.311L128 345.889v93.943C69.974 399.354 32 332.116 32 256c0-34.357 7.745-66.903 21.569-96H112c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.07 4.686-11.314V41.294C212.281 35.257 233.759 32 256 32c35.203 0 68.502 8.13 98.141 22.6a97.187 97.187 0 0 0-6.023 5.518C329.985 78.25 320 102.357 320 128s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-.04 4.759-.118 6.907 25.901 19.376 93.328-4.202 186.167a15.957 15.957 0 0 0-.421 2.612c-40.662 41.54-97.35 67.328-160.071 67.328z' })
                      ),
                      'Site web'
                    )
                  ),
                  links.fb && _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: links.fb, title: "Page Facebook de " + name },
                      _react2.default.createElement(
                        'svg',
                        { className: 'icon-facebook', viewBox: '0 0 32 32', 'aria-hidden': 'true' },
                        _react2.default.createElement('path', { d: 'M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z', fill: '#3B5998' }),
                        _react2.default.createElement('path', { d: 'M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z', fill: '#FFF' })
                      ),
                      'Profil Facebook'
                    )
                  ),
                  links.sc && _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: links.sc, title: "Profil SoundCloud de " + name },
                      _react2.default.createElement(
                        'svg',
                        { className: 'icon-soundcloud', viewBox: '0 0 1024 1024', 'aria-hidden': 'true' },
                        _react2.default.createElement('path', { fill: '#f30', d: 'M50.133 521.6c-2.176 0-4.011 1.963-4.309 4.267l-9.941 91.904 9.941 89.813c.299 2.475 2.133 4.181 4.309 4.181 2.133 0 3.84-1.707 4.224-4.181l10.88-89.813-11.52-91.904c0-2.432-1.92-4.267-3.84-4.267zM11.52 556.928c-2.56 0-3.883 1.579-4.437 4.011L0 617.771l7.04 55.808c0 2.347 1.92 4.011 3.84 4.011s3.797-1.92 4.437-4.437l8.96-56.277-8.96-56.917c0-2.603-1.877-3.84-3.84-3.84zm78.037-53.248c-2.603 0-5.12 1.92-5.12 4.437l-8.96 109.355 9.6 104.875c0 2.56 1.92 5.12 5.077 5.12 2.603 0 4.48-2.603 5.163-5.12l10.837-105.557-10.837-108.715c-.683-2.56-2.603-5.12-5.163-5.12zm40.918-4.523c-3.2 0-5.76 2.56-6.4 5.76l-8.235 112.64 8.96 108.544c.683 3.285 3.2 5.888 6.357 5.888 3.2 0 5.76-2.603 6.4-6.4l10.24-108.032-10.24-111.915c0-3.2-2.56-5.76-5.76-5.76l-1.323-.725zm49.28 15.36c-.213-3.84-3.2-6.357-6.784-6.357-3.84 0-6.741 2.56-6.997 6.357l-9.259 103.68 8.533 109.355c0 3.84 3.2 6.699 6.784 6.699 3.157 0 6.315-2.901 6.315-6.741l9.685-109.355-9.685-104.277 1.408.64zm34.517-72.917c-4.309 0-7.68 3.84-7.68 7.723l-8.96 168.832 7.979 109.355c0 3.84 3.413 6.997 7.68 6.997 4.011 0 7.424-3.84 7.68-7.68l8.917-109.355L220.971 448c-.341-4.437-3.755-7.68-7.68-7.68zm39.936-40.277c-4.48 0-8.32 3.84-8.661 8.277l-7.68 207.872 7.04 108.715c0 5.12 3.84 8.917 8.32 8.917 4.437 0 8.277-3.797 8.96-8.917l8.235-108.715-8.192-207.189c-.683-5.12-4.48-8.96-8.96-8.96zm41.259-19.158c-5.163 0-9.003 3.797-9.6 8.917l-7.04 225.067 7.04 107.52c.597 5.077 4.437 9.6 9.6 9.6 5.077 0 9.6-4.48 9.6-9.6l8.32-107.52-8.363-225.067c0-5.12-4.48-9.6-9.6-9.6zm53.077 1.238c0-5.76-4.48-10.24-10.24-10.24-5.077 0-10.24 4.48-10.24 10.24l-6.357 232.149 6.357 106.795c.683 5.76 5.163 10.24 10.923 10.24s10.24-4.48 10.24-10.24l6.997-106.795-6.997-232.789-.683.64zm31.957-5.718c-5.76 0-10.88 5.077-10.88 10.837l-6.4 227.072 6.4 105.515c0 6.4 5.12 10.88 10.88 10.88s10.88-5.12 10.88-11.52l6.4-105.557-7.04-226.432c0-6.315-5.12-11.52-11.563-11.52zm41.558 6.358c-6.997 0-12.117 5.76-12.117 12.16l-4.395 219.435 5.76 105.557c0 6.357 5.077 11.819 12.117 11.819 6.357 0 11.563-5.12 12.117-12.16l5.163-104.235-5.76-218.112c-.512-6.997-5.76-12.16-12.16-12.16zm51.242-38.016c-1.92-1.237-4.48-1.877-7.04-1.877s-5.077.64-7.04 1.877c-3.84 2.304-6.357 6.4-6.357 10.88v2.603l-4.437 258.048 4.907 104.491v.341c.341 2.56 1.28 5.76 3.157 7.68 2.475 2.603 6.059 4.437 9.984 4.437 3.413 0 6.741-1.877 8.917-3.84 2.475-2.56 3.883-5.76 3.883-9.6l.64-10.24 4.992-93.995-5.76-259.669c0-4.437-2.603-8.235-5.76-10.197l-.085-.939zm42.923-23.339c-1.92-1.92-3.84-2.603-6.4-2.603-3.157 0-6.357.683-8.917 2.603-3.2 2.603-5.077 6.4-5.077 10.24v1.237l-5.845 281.984 3.243 51.84 2.603 50.56c0 6.997 6.315 13.397 13.995 13.397 7.723 0 14.08-6.4 14.08-14.037l6.4-102.997-6.4-283.179c0-5.12-3.157-9.429-7.04-11.819zm381.824 158.379c-17.28 0-33.92 3.669-48.597 9.899-10.24-113.237-104.96-202.069-221.355-202.069-28.117 0-55.68 5.76-80.597 15.317-9.6 3.84-11.52 7.68-12.16 15.317v399.701c.683 7.68 6.4 14.08 14.08 14.72h349.227c69.077.683 125.355-54.955 125.355-124.672s-56.277-125.952-125.355-125.952z' })
                      ),
                      'Profil SoundCloud'
                    )
                  ),
                  links.mc && _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: links.mc, title: "Profil Mixcloud de " + name },
                      _react2.default.createElement(
                        'svg',
                        { className: 'icon-mixcloud', viewBox: '0 0 1024 1024', 'aria-hidden': 'true' },
                        _react2.default.createElement('path', { fill: '#314359', d: 'M936.533 813.312a34.29 34.29 0 0 1-18.987-5.76c-15.744-10.667-19.84-32-9.6-47.36 31.488-46.677 48-101.589 48-158.677s-16.512-112-48-158.763c-10.624-15.701-6.187-36.949 9.216-47.189 16-10.624 37.12-6.229 47.275 9.131 39.125 58.24 59.563 126.72 59.563 197.12 0 70.315-20.437 138.837-59.563 197.077-5.76 10.197-16.64 15.317-27.52 15.317l-.384-.896z' }),
                        _react2.default.createElement('path', { fill: '#314359', d: 'M838.827 758.101c-6.528 0-13.141-1.92-18.987-5.931-15.744-10.197-19.755-31.317-9.173-46.677 20.864-30.763 31.872-65.92 31.872-103.68 0-36.48-11.008-72.32-31.872-103.723-10.581-15.36-6.571-36.437 9.173-46.72s36.565-6.4 47.189 9.6c28.544 42.24 43.563 91.52 43.563 141.397 0 51.243-15.019 99.84-43.563 141.44-6.229 10.24-17.323 15.36-28.203 15.36V758.1zM679.68 452.907C666.283 316.502 550.997 209.75 410.88 209.75c-116.096 0-218.88 74.581-255.787 182.741C67.754 405.376 0 480.811 0 571.734c0 100.011 81.579 181.504 181.76 181.504h465.408c83.797 0 152.149-68.011 152.149-151.765 0-72.789-51.2-133.504-119.68-148.48v-.085zm-32.512 232.362h-465.28c-62.549 0-113.877-50.816-113.877-113.408 0-62.507 50.901-113.408 113.877-113.408 30.293 0 58.923 12.16 80.469 33.323 12.8 13.397 34.603 13.397 48 0 12.8-12.843 12.8-34.603 0-48-23.68-23.125-52.523-39.723-83.84-47.403 32-71.04 103.68-118.357 183.68-118.357 111.317 0 202.24 90.837 202.24 202.155 0 21.845-3.2 42.923-10.24 63.403-5.76 17.92 3.84 37.077 21.76 43.52 3.157 1.28 7.04 1.92 10.24 1.92 14.08 0 27.52-9.003 32-23.04 4.48-13.44 7.68-26.88 9.6-40.96 31.317 12.16 53.76 42.88 53.76 78.08 0 46.763-37.76 84.437-83.84 84.437l1.451-2.261z' })
                      ),
                      'Profil Mixcloud'
                    )
                  ),
                  links.ra && _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: links.ra, title: "Page Resident Advisor de " + name },
                      _react2.default.createElement('img', { className: 'icon-ra', src: '/assets/img/ra.png', alt: '' }),
                      'Resident Advisor'
                    )
                  )
                )
              )
            ),
            nextEvents.length > 0 && _react2.default.createElement(
              'div',
              { className: 'Performer-events' },
              _react2.default.createElement(
                'h2',
                null,
                'Prochains festivals (',
                nextEvents.length,
                ')'
              ),
              _react2.default.createElement(
                'ul',
                null,
                nextEvents.map(function (e) {
                  return _react2.default.createElement(_EventMinicard2.default, { key: e.id, event: e });
                })
              )
            ),
            pastEvents.length > 0 && _react2.default.createElement(
              'div',
              { className: 'Performer-events pastEvents' },
              _react2.default.createElement(
                'h2',
                null,
                'Festivals pass\xE9s'
              ),
              _react2.default.createElement(
                'ul',
                null,
                pastEvents.map(function (e) {
                  return _react2.default.createElement(_EventMinicard2.default, { key: e.id, event: e });
                })
              )
            )
          )
        ),
        links.sc && _react2.default.createElement(
          'aside',
          { role: 'complementary' },
          _react2.default.createElement('iframe', { className: 'Performer-player', id: 'SCPlayer',
            src: "https://w.soundcloud.com/player/?url=" + encodeURIComponent(links.sc) + "&buying=false&show_comments=false",
            scrolling: 'no', frameBorder: 'no' })
        )
      );
    }
  }]);

  return Performer;
}(_react2.default.Component);

var _default = Performer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Performer, 'Performer', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Performer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Performer.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/EventMinicard.css');
} /* ==========================================================================
     EventMinicard
     ========================================================================== */

var _default = function _default(_ref) {
  var event = _ref.event;
  var id = event.id,
      name = event.name,
      start_time = event.start_time,
      place = event.place;

  return _react2.default.createElement(
    'li',
    { className: 'EventMinicard' },
    _react2.default.createElement(_utils.DateSticker, { datetime: start_time }),
    _react2.default.createElement(
      'div',
      { className: 'EventMinicard-content' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/events/' + id, className: 'EventMinicard-title' },
        name
      ),
      place && _react2.default.createElement(
        'div',
        { className: 'EventMinicard-place' },
        _react2.default.createElement(
          'svg',
          { className: 'icon-location', viewBox: '0 0 512 512', 'aria-hidden': 'true' },
          _react2.default.createElement('path', { d: 'M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z' })
        ),
        place.location && place.location.city && place.location.country ? _react2.default.createElement(
          'span',
          null,
          place.location.city + ', ' + place.location.country
        ) : _react2.default.createElement(
          'span',
          null,
          place.name
        )
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/EventMinicard.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _https = __webpack_require__(44);

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app_id = '***REMOVED***'; /* ==========================================================================
                                   Facebook utilities
                                   ========================================================================== */

var app_secret = '***REMOVED***';
var client_token = '***REMOVED***';
var access_token = app_id + '|' + app_secret;
var token_param = '&access_token=' + access_token;
// const token_param = '&access_token=' + client_token

var _default = {

  fetch: function fetch(path) {
    return new Promise(function (resolve, reject) {

      var req = _https2.default.request({
        hostname: 'graph.facebook.com',
        path: '/v2.12/' + path + token_param
      }, function (res) {
        var buffer = [];
        res.on('data', function (chunk) {
          return buffer.push(chunk);
        });
        res.on('end', function () {
          return resolve(JSON.parse(buffer.join('')));
        });
      });

      req.on('error', function (error) {
        console.error('problem with request: ' + error.message);
      });

      req.end();
    });
  },

  /* Batch request
   * make multiple, potentially unrelated, Graph API calls in a single request
   * https://developers.facebook.com/docs/graph-api/making-multiple-requests/
   */
  batch: function batch(params) {
    return new Promise(function (resolve, reject) {

      var batch = [];

      for (var i = params.length, param; param = params[i--];) {
        batch.push({
          method: 'GET',
          relative_url: 'v2.12/?ids=' + param.ids.join() + param.fields
        });
      }

      var req = _https2.default.request({
        method: 'POST',
        hostname: 'graph.facebook.com'
      }, function (res) {
        var buffer = [];
        res.on('data', function (chunk) {
          return buffer.push(chunk);
        });
        res.on('end', function () {
          return resolve(JSON.parse(buffer.join('')));
        });
      });

      req.on('error', function (error) {
        console.error('problem with request: ' + error.message);
      });

      req.write(querystring.stringify({
        access_token: access_token,
        batch: JSON.stringify(batch)
      }));

      req.end();
    });
  }

  // const FBAccessTokenRequest = new Promise((resolve, reject) => {
  //   https.request({
  //     hostname: 'graph.facebook.com',
  //     path: '/oauth/acess_token?client_id' + FBAppId + '&client_secret' + FBAppSecret + '&grant_type=client_credentials',
  //     headers: { 'content-type': 'application/json' }
  //   },
  //   response => {
  //     console.log('FBAccessTokenRequest response', response)
  //     const buffer = []
  //     response.on('data', chunk => buffer.push(chunk))
  //     response.on('end', () => {
  //       const foo = JSON.parse(buffer.join(''))
  //       // console.log(foo)
  //       resolve(foo)
  //     })
  //   }).end()
  // })

};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app_id, 'app_id', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/fb.js');

  __REACT_HOT_LOADER__.register(app_secret, 'app_secret', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/fb.js');

  __REACT_HOT_LOADER__.register(client_token, 'client_token', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/fb.js');

  __REACT_HOT_LOADER__.register(access_token, 'access_token', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/fb.js');

  __REACT_HOT_LOADER__.register(token_param, 'token_param', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/fb.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/fb.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(18);

var _passport2 = _interopRequireDefault(_passport);

var _securePassword = __webpack_require__(9);

var _securePassword2 = _interopRequireDefault(_securePassword);

var _passportLocal = __webpack_require__(19);

var _webpack = __webpack_require__(7);

var _webpack2 = _interopRequireDefault(_webpack);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(20);

var _index2 = _interopRequireDefault(_index);

var _users = __webpack_require__(42);

var _users2 = _interopRequireDefault(_users);

var _events = __webpack_require__(43);

var _events2 = _interopRequireDefault(_events);

var _performers = __webpack_require__(45);

var _performers2 = _interopRequireDefault(_performers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* server config */
/* ==========================================================================
   Server
   ========================================================================== */

var app = (0, _express2.default)();

var ENV = process.env.NODE_ENV || 'production';
var PORT = process.env.PORT || 8080;

if (ENV === 'development') {

  var config = __webpack_require__(46);
  var compiler = (0, _webpack2.default)(config);

  app.use(__webpack_require__(49)(compiler, {
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }));

  app.use(__webpack_require__(50)(compiler, {
    log: console.log,
    reload: true
  }));
} else if (ENV === 'production') {
  app.use('/assets', _express2.default.static((0, _path.resolve)(__dirname, '../dist')));
}

app.use('/assets', _express2.default.static((0, _path.resolve)(__dirname, '../public')));
//app.use(favicon(__dirname + '/public/favicon.ico'))

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));

app.use(__webpack_require__(51)({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

/* Passport config (authentication) */
_passport2.default.use(new _passportLocal.Strategy(function (username, password, done) {

  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'db/users.json'), 'utf8');
  var users = data ? JSON.parse(data) : {};

  // Initialise our password policy
  var pwd = (0, _securePassword2.default)();
  var userPassword = Buffer.from(password);

  if (users[username]) {
    var user = { username: username, password: password };
    var hash = Buffer.from(users[username].password);
    pwd.verify(userPassword, hash, function (err, result) {
      if (err) return done(err);
      if (result === _securePassword2.default.INVALID) return done(null, false, { message: 'Incorrect password.' });
      if (result === _securePassword2.default.VALID) return done(null, user);
    });
  } else {
    return done(null, false, { message: 'Incorrect username.' });
  }
}));

_passport2.default.serializeUser(function (user, done) {
  done(null, user.username);
});

_passport2.default.deserializeUser(function (username, done) {
  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'db/users.json'), 'utf8');
  var users = data ? JSON.parse(data) : {};

  if (users[username]) {
    done(null, { username: username, password: Buffer.from(users[username].password) });
  } else {
    done(Error('User with username ' + username + ' not found.'));
  }
});

/* handle requests */
app.get('/admin', __webpack_require__(52).ensureLoggedIn(), function (req, res, next) {
  next();
});

app.post('/login', _passport2.default.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login'
}));

app.use('/', _index2.default);
app.use('/users', _users2.default);
app.use('/events', _events2.default);
app.use('/performers', _performers2.default);

/* start server */
app.listen(PORT, '0.0.0.0', function (err) {
  if (err) {
    return console.error(err);
  }
  return console.info('Server running on http://localhost:' + PORT + ' [' + ENV + ']');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/jod/Sites/festivals-electro.fr/site/server/index.js');

  __REACT_HOT_LOADER__.register(ENV, 'ENV', '/Users/jod/Sites/festivals-electro.fr/site/server/index.js');

  __REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/jod/Sites/festivals-electro.fr/site/server/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(10);

var _server2 = __webpack_require__(22);

var _server3 = _interopRequireDefault(_server2);

var _reactMetaTags = __webpack_require__(2);

var _db = __webpack_require__(23);

var _db2 = _interopRequireDefault(_db);

var _routes = __webpack_require__(24);

var _template = __webpack_require__(41);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Index
   ========================================================================== */

var router = _express2.default.Router();

function loadBranchData(location) {

  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.routes, location.path);

  var promises = branch.map(function (_ref) {
    var route = _ref.route,
        match = _ref.match;

    var fetchData = _db2.default[route.dataType];
    return fetchData instanceof Function ? fetchData(match.params) : Promise.resolve(null);
  });

  return Promise.all(promises).then(function (data) {
    return data.reduce(function (acc, value) {
      return Object.assign({}, acc, value);
    });
  });
}

router.get('*', function (req, res) {

  var metaTagsInstance = (0, _server3.default)();

  return loadBranchData(req).then(function (data) {

    var context = data.hasOwnProperty('status') ? { status: data.status } : {};

    var location = context.status === 404 ? '/error' : req.url;

    // update data obj with user info (if available)
    data.user = {
      username: req.user ? req.user.username : null

      // handle async json requests
    };if (req.xhr) {
      return res.json(data);
    }

    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactMetaTags.MetaTagsContext,
      { extract: metaTagsInstance.extract },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: location, context: context },
        (0, _reactRouterConfig.renderRoutes)(_routes.routes, data)
      )
    ));

    if (context.status === 404) {
      res.status(404);
    }

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    res.write((0, _template2.default)({
      meta: metaTagsInstance.renderToString(),
      body: html,
      data: JSON.stringify(data)
    }));

    res.end();
  }).catch(function (err) {
    throw err;
  });
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/index.js');

  __REACT_HOT_LOADER__.register(loadBranchData, 'loadBranchData', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/index.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags/server");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Database module
   ========================================================================== */

function upcoming(event) {
  return new Date(event.end_time) >= new Date();
}

function past(event) {
  return new Date(event.end_time) < new Date();
}

var DB = {

  get: function get(table) {
    return new Promise(function (resolve) {
      _fs2.default.readFile((0, _path.resolve)(__dirname, '../db/data.json'), 'utf8', function (err, data) {
        if (err) throw err;
        resolve(JSON.parse(data)[table]);
      });
    });
  },

  getData: function getData() {
    return new Promise(function (resolve) {
      _fs2.default.readFile((0, _path.resolve)(__dirname, '../db/data.json'), 'utf8', function (err, data) {
        if (err) throw err;
        resolve(JSON.parse(data));
      });
    });
  },

  getUser: function getUser(username) {
    return new Promise(function (resolve) {
      _fs2.default.readFile((0, _path.resolve)(__dirname, '../db/users.json'), 'utf8', function (err, data) {
        if (err) throw err;
        resolve({
          username: username,
          password: JSON.parse(data)[username].password
        });
      });
    });
  }

};

var _default = {

  search: function search() {
    return DB.getData();
  },

  events: function events() {
    return DB.get('events').then(function (data) {
      return { events: data };
    });
  },

  upcomingEvents: function upcomingEvents() {
    return DB.get('events').then(function (data) {
      return {
        events: data.filter(upcoming)
      };
    });
  },

  pastEvents: function pastEvents() {
    return DB.get('events').then(function (data) {
      return {
        events: data.filter(past)
      };
    });
  },

  event: function event(params) {
    return DB.getData().then(function (data) {

      var event = Object.assign({}, data.events.find(function (e) {
        return e.id === params.id;
      }));

      if (!Object.keys(event).length) {
        return { status: 404 };
      }

      event.lineup = event.lineup.map(function (id) {
        return data.performers.find(function (p) {
          return p.id === id;
        });
      });

      return { event: event };
    });
  },

  performers: function performers() {
    return DB.get('performers').then(function (data) {
      return {
        performers: data
      };
    });
  },

  performer: function performer(params) {
    return DB.getData().then(function (data) {

      var performer = Object.assign({}, data.performers.find(function (p) {
        return p.id === params.id;
      }));

      if (!Object.keys(performer).length) {
        return { status: 404 };
      }

      performer.events = performer.events.map(function (id) {
        return data.events.find(function (e) {
          return e.id === id;
        });
      });

      return { performer: performer };
    });
  }
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(upcoming, 'upcoming', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/db.js');

  __REACT_HOT_LOADER__.register(past, 'past', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/db.js');

  __REACT_HOT_LOADER__.register(DB, 'DB', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/db.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/modules/db.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "server/modules"))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(28);

var _Home2 = _interopRequireDefault(_Home);

var _Events = __webpack_require__(30);

var _Events2 = _interopRequireDefault(_Events);

var _Event = __webpack_require__(12);

var _Event2 = _interopRequireDefault(_Event);

var _Performer = __webpack_require__(14);

var _Performer2 = _interopRequireDefault(_Performer);

var _Performers = __webpack_require__(32);

var _Performers2 = _interopRequireDefault(_Performers);

var _NotFound = __webpack_require__(33);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Map = __webpack_require__(35);

var _Map2 = _interopRequireDefault(_Map);

var _Login = __webpack_require__(36);

var _Login2 = _interopRequireDefault(_Login);

var _Admin = __webpack_require__(37);

var _Admin2 = _interopRequireDefault(_Admin);

var _Search = __webpack_require__(40);

var _Search2 = _interopRequireDefault(_Search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = [{
  path: "/admin",
  exact: true,
  component: _Admin2.default,
  dataType: 'search'
}, {
  component: _App2.default,
  routes: [{
    path: "/",
    exact: true,
    component: _Home2.default
  }, {
    path: "/login",
    exact: true,
    component: _Login2.default
  }, {
    path: "/events",
    exact: true,
    component: _Events2.default,
    // dataType: 'upcomingEvents'
    dataType: 'events'
  }, {
    path: "/events/past",
    exact: true,
    component: _Events2.default,
    dataType: 'pastEvents'
  }, {
    path: "/search",
    exact: true,
    component: _Search2.default,
    dataType: 'search'
  }, {
    path: "/performers",
    exact: true,
    component: _Performers2.default,
    dataType: 'performers'
  }, {
    path: '/events/:id',
    exact: true,
    component: _Event2.default,
    dataType: 'event'
  }, {
    path: '/performers/:id',
    exact: true,
    component: _Performer2.default,
    dataType: 'performer'
  }, {
    path: '/map',
    exact: true,
    component: _Map2.default,
    dataType: 'events'
  }, {
    component: _NotFound2.default
  }]
}]; /* ==========================================================================
       Routing
       ========================================================================== */

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/jod/Sites/festivals-electro.fr/site/src/routes.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(10);

var _Header = __webpack_require__(26);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* ==========================================================================
                                                                                                                                                                                                                                App
                                                                                                                                                                                                                                ========================================================================== */

// local modules


if (false) {
  require('./css/index.css');
  require('./css/App.css');
}

var _default = function _default(_ref) {
  var route = _ref.route,
      extraProps = _objectWithoutProperties(_ref, ['route']);

  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(_Header2.default, extraProps),
    (0, _reactRouterConfig.renderRoutes)(route.routes, extraProps)
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/App.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Searchbox = __webpack_require__(27);

var _Searchbox2 = _interopRequireDefault(_Searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/Header.css');
}

/* Sub Components
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Header
   ========================================================================== */

var Nav = function Nav(props) {
  return _react2.default.createElement(
    'nav',
    { role: 'navigation' },
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        { className: 'Nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { exact: true, to: '/events' },
          _react2.default.createElement(
            'svg',
            { className: 'icon-calendar', viewBox: '0 0 416 448', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z' })
          ),
          _react2.default.createElement(
            'span',
            null,
            'Festivals'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'Nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { exact: true, to: '/performers' },
          _react2.default.createElement(
            'svg',
            { className: 'icon-group', viewBox: '0 0 30 30', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M15.649 21.044C14.091 20.498 12.477 20.431 12 19v-2c.45-.223 1.736-1.755 1.872-2.952.08-.283.142-1.295.142-1.523 0-1.249-.019-3.831.763-5.852-.273-1.358-.986-2.502-2.515-2.653C11.853 3.343 10.805 3 9.442 3c-5.451.094-6.008 3.873-4.914 8.214-.212.122-.562.51-.474 1.198.164 1.283.72 1.608 1.074 1.635C5.263 15.245 6.55 16.777 7 17v2c-1 3-7 0-7 8h12c0-3.548 1.99-5.077 3.649-5.956z' }),
            _react2.default.createElement('path', { d: 'M14 27c0-5 5-4 6-6.707v-1.275c-3.621 0-4.626-1.491-4.626-1.491C17.266 15.953 13.688 5 20.13 5c0 0 .87-1 1.994-1C30 4 26.446 15.893 28.483 17.565c0 0-.844 1.44-4.483 1.44v1.288C25 23 30 22 30 27H14z' })
          ),
          _react2.default.createElement(
            'span',
            null,
            'Artistes'
          )
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'Nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { exact: true, to: '/map' },
          _react2.default.createElement(
            'svg',
            { className: 'icon-map', viewBox: '0 0 512 512', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M336 96L176 32 0 96v384l176-64 160 64 176-64V32L336 96zM192 72.865l128 51.2v315.069l-128-51.199V72.865zM32 118.414l128-46.545v315.9L32 434.313V118.414zm448 275.172l-128 46.546v-315.9l128-46.545v315.899z' })
          ),
          _react2.default.createElement(
            'span',
            null,
            'Carte'
          )
        )
      )
    )
  );
};

/* Component definition
   -------------------------------------------------------------------------- */

var _default = function _default(props) {
  return _react2.default.createElement(
    'header',
    { className: 'Header', role: 'banner', id: 'header' },
    _react2.default.createElement(
      'div',
      { className: 'Header-content' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'Header-logo' },
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 560 420', 'aria-hidden': 'true' },
          _react2.default.createElement('path', { d: 'M550.489 8.021l-300.337-.666v119.987L130.165 7.355 54.84 82.013l75.325 75.326-120.654-.667v105.99h120.654l-74.659 73.991 75.326 75.326 119.32-119.988v120.654h299.969L347.476 210 550.489 8.021z' })
        )
      ),
      _react2.default.createElement(Nav, null),
      _react2.default.createElement(_Searchbox2.default, { query: props.location.search })
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Nav, 'Nav', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Header.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _queryString = __webpack_require__(11);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Searchbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Searchbox.css');
}

/* Sub Components
   -------------------------------------------------------------------------- */
var Item = function Item(_ref) {
  var item = _ref.item,
      close = _ref.close;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: (item.events ? '/performers/' : '/events/') + item.id,
        onClick: close },
      item.name
    )
  );
};

/* Component definition
   -------------------------------------------------------------------------- */

var SearchBox = function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox(_ref2) {
    var query = _ref2.query,
        data = _ref2.data;

    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this));

    _this.state = {
      query: _queryString2.default.parse(query)['q'],
      data: data
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(SearchBox, [{
    key: 'onChange',
    value: function onChange() {
      var _this2 = this;

      var query = this.searchInput.value.trim();

      if (query) {
        this.resetBtn.classList.remove('hidden');
        this.searchResults.classList.remove('hidden');
      } else {
        this.searchResults.classList.add('hidden');
        this.resetBtn.classList.add('hidden');
      }

      if (!this.state.data) {
        fetch(this.searchInput.form.action, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          return _this2.setState({
            query: query,
            data: data
          });
        }).catch(function (err) {
          throw err;
        });
      } else {
        this.setState({ query: query });
      }
    }
  }, {
    key: 'onReset',
    value: function onReset(e) {
      e.preventDefault();
      this.searchInput.value = "";
      this.searchInput.focus();
      this.onChange();
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var isOpen = this.searchboxContent.getAttribute('aria-expanded') === 'true';

      if (isOpen) this.close();else this.open();
    }
  }, {
    key: 'open',
    value: function open() {
      this.btnOpen.classList.add('active');
      this.searchboxContent.setAttribute('aria-expanded', 'true');
      this.searchInput.focus();
      this.searchResults.classList.remove('hidden');
    }
  }, {
    key: 'close',
    value: function close(e) {
      this.btnOpen.classList.remove('active');
      this.searchboxContent.setAttribute('aria-expanded', 'false');
      this.searchInput.blur();
      this.searchResults.classList.add('hidden');
      e && (this.searchInput.value = e.target.textContent);
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      if (!this.searchbox.contains(e.target)) {
        this.close();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.documentElement.addEventListener('click', this.onClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.documentElement.removeEventListener('click', this.onClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          query = _state.query,
          data = _state.data;

      var result = { events: [], performers: [] };

      if (data && query) {
        var regex = new RegExp(query, "i");
        for (var i = 0, e; e = data.events[i]; i++) {
          regex.test(e.name) && result.events.push(e);
        }
        for (var j = 0, p; p = data.performers[j]; j++) {
          regex.test(p.name) && result.performers.push(p);
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'Searchbox', ref: function ref(el) {
            return _this3.searchbox = el;
          } },
        _react2.default.createElement(
          'button',
          { className: 'Searchbox-btnOpen', 'aria-label': 'Rechercher',
            'aria-controls': 'Searchbox', onClick: this.toggle.bind(this),
            ref: function ref(el) {
              return _this3.btnOpen = el;
            } },
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 24 24', className: 'icon-magnifier', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z' })
          ),
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 32 32', className: 'icon-cross', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'searchbox', className: 'Searchbox-content', 'aria-expanded': 'false',
            ref: function ref(el) {
              return _this3.searchboxContent = el;
            } },
          _react2.default.createElement(
            'form',
            { role: 'search', action: '/search', method: 'get' },
            _react2.default.createElement('input', { type: 'search', name: 'q', id: 'search', 'aria-label': 'Recherche',
              placeholder: 'Recherche', autoComplete: 'off',
              onFocus: this.onChange.bind(this),
              onChange: this.onChange.bind(this),
              onSubmit: this.onSubmit.bind(this),
              ref: function ref(el) {
                return _this3.searchInput = el;
              },
              defaultValue: query }),
            _react2.default.createElement(
              'button',
              { type: 'reset', className: 'hidden',
                'aria-label': 'Vider le champ de recherche',
                onClick: this.onReset.bind(this),
                ref: function ref(el) {
                  return _this3.resetBtn = el;
                } },
              _react2.default.createElement(
                'svg',
                { viewBox: '0 0 32 32', className: 'icon-cross', 'aria-hidden': 'true' },
                _react2.default.createElement('path', { d: 'M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z' })
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', 'aria-label': 'Rechercher' },
              _react2.default.createElement(
                'svg',
                { viewBox: '0 0 24 24', className: 'icon-magnifier', 'aria-hidden': 'true' },
                _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Searchbox-results hidden', ref: function ref(el) {
                return _this3.searchResults = el;
              } },
            query && _react2.default.createElement(
              'div',
              { className: 'Searchbox-results-events' },
              _react2.default.createElement(
                'span',
                null,
                'Festivals'
              ),
              result.events.length === 0 && _react2.default.createElement(
                'div',
                { className: 'Searchbox-results-events-noResult' },
                'Aucun r\xE9sultat'
              ),
              result.events.length > 0 && _react2.default.createElement(
                'ul',
                null,
                result.events.map(function (item) {
                  return _react2.default.createElement(Item, { key: item.id, item: item, close: _this3.close.bind(_this3) });
                })
              )
            ),
            query && _react2.default.createElement(
              'div',
              { className: 'Searchbox-results-performers' },
              _react2.default.createElement(
                'span',
                null,
                'Artistes'
              ),
              result.performers.length === 0 && _react2.default.createElement(
                'div',
                { className: 'Searchbox-results-performers-noResult' },
                'Aucun r\xE9sultat'
              ),
              result.performers.length > 0 && _react2.default.createElement(
                'ul',
                null,
                result.performers.map(function (item) {
                  return _react2.default.createElement(Item, { key: item.id, item: item, close: _this3.close.bind(_this3) });
                })
              )
            )
          )
        )
      );
    }
  }]);

  return SearchBox;
}(_react2.default.Component);

var _default = SearchBox;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Searchbox.js');

  __REACT_HOT_LOADER__.register(SearchBox, 'SearchBox', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Searchbox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Searchbox.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component definition
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Home
   ========================================================================== */

var Home = function Home() {
   return _react2.default.createElement(_reactRouter.Redirect, { to: '/events' });
};

var _default = Home;
exports.default = _default;
;

var _temp = function () {
   if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
   }

   __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Home.js');

   __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Home.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _reactRouterDom = __webpack_require__(1);

var _EventCard = __webpack_require__(31);

var _EventCard2 = _interopRequireDefault(_EventCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Events
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Events.css');
}

/* Component definition
   -------------------------------------------------------------------------- */

var Events = function (_Component) {
  _inherits(Events, _Component);

  function Events(_ref) {
    var events = _ref.events,
        pathname = _ref.location.pathname;

    _classCallCheck(this, Events);

    var _this = _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this));

    if (pathname === '/events/past') {
      events.sort(function (a, b) {
        return new Date(b.start_time) - new Date(a.start_time);
      });
    } else {
      events.sort(function (a, b) {
        return new Date(a.start_time) - new Date(b.start_time);
      });
    }

    _this.state = {
      events: events,
      displayedEvents: events.slice(0, 10 + Events.pageNumber * 5)
    };
    return _this;
  }

  _createClass(Events, [{
    key: 'loadMore',
    value: function loadMore() {
      var _state = this.state,
          events = _state.events,
          displayedEvents = _state.displayedEvents;

      Events.pageNumber += 1;
      this.setState({
        displayedEvents: events.slice(0, 10 + Events.pageNumber * 5)
      });
      if (displayedEvents.length === events.length) {
        window.removeEventListener('scroll', this.scrollHandler);
      }
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      if (window.pageYOffset > document.body.clientHeight - 2 * window.innerHeight) this.loadMore();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.displayedEvents.length < this.state.events.length) {
        this.scrollHandler = throttle(this.onScroll.bind(this), 30);
        window.addEventListener('scroll', this.scrollHandler);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var events = this.state.displayedEvents;
      var title = this.props.location.pathname === '/events/past' ? "Festivals passés" : "Prochains festivals";

      return _react2.default.createElement(
        'div',
        { className: 'Page' },
        _react2.default.createElement(
          _reactMetaTags2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
        ),
        _react2.default.createElement(
          'main',
          { role: 'main' },
          _react2.default.createElement(
            'section',
            { className: 'Events' },
            events.map(function (item) {
              return _react2.default.createElement(_EventCard2.default, { key: item.id, event: item });
            })
          )
        )
      );
    }
  }]);

  return Events;
}(_react.Component);

Events.pageNumber = 0;
var _default = Events;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Events, 'Events', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Events.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Events.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(3);

var _Cover = __webpack_require__(8);

var _Cover2 = _interopRequireDefault(_Cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Event Card
   ========================================================================== */

if (false) {
  require('../css/EventCard.css');
}

/* Component definition
   -------------------------------------------------------------------------- */

var _default = function _default(_ref) {
  var event = _ref.event;
  var id = event.id,
      name = event.name,
      cover = event.cover,
      place = event.place,
      start_time = event.start_time,
      end_time = event.end_time;

  var pastEvent = new Date(end_time) < new Date();

  return _react2.default.createElement(
    'div',
    { className: "EventCard" + (pastEvent ? " pastEvent" : "") },
    cover.source && _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/events/' + id, className: 'EventCard-picture' },
      _react2.default.createElement(_Cover2.default, { cover: cover, ratio: 0.524 })
    ),
    _react2.default.createElement(
      'div',
      { className: 'EventCard-content' },
      _react2.default.createElement(_utils.DateSticker, { datetime: start_time }),
      _react2.default.createElement(
        'div',
        { className: 'EventCard-title' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/events/' + id },
          name
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'EventCard-meta' },
        place && _react2.default.createElement(
          'div',
          { className: 'EventCard-place' },
          _react2.default.createElement(
            'svg',
            { className: 'icon-location', viewBox: '0 0 512 512', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M256 0C167.634 0 96 71.634 96 160c0 160 160 352 160 352s160-192 160-352C416 71.634 344.365 0 256 0zm0 256c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z' })
          ),
          place.name,
          place.location && place.location.city && place.location.country && _react2.default.createElement(
            'span',
            null,
            place.location.city + ', ' + place.location.country
          )
        )
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/EventCard.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/Performers.css');
}

/* Sub Components
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Performers
   ========================================================================== */

var PerformerCard = function PerformerCard(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    'li',
    { className: 'PerformerCard' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/performers/' + item.id },
      _react2.default.createElement('img', { src: item.picture.data.url, alt: '' }),
      _react2.default.createElement(
        'span',
        null,
        item.name
      )
    )
  );
};

/* Component definition
   -------------------------------------------------------------------------- */

var _default = function _default(_ref2) {
  var performers = _ref2.performers;


  var title = "Tous les artistes";
  var list = performers || [];

  // sort list in alphabetical order
  list.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return _react2.default.createElement(
    'div',
    { className: 'Page' },
    _react2.default.createElement(
      _reactMetaTags2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        title
      ),
      _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
    ),
    _react2.default.createElement(
      'main',
      { role: 'main' },
      _react2.default.createElement(
        'section',
        { className: 'Performers' },
        _react2.default.createElement(
          'ul',
          null,
          list.map(function (item) {
            return _react2.default.createElement(PerformerCard, { key: item.id, item: item });
          })
        )
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PerformerCard, 'PerformerCard', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Performers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Performers.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _Status = __webpack_require__(34);

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/NotFound.css');
} /* ==========================================================================
     Error
     ========================================================================== */

var NotFound = function NotFound() {
  var title = "Festic - Erreur : page non trouvée :(";
  return _react2.default.createElement(
    _Status2.default,
    { code: 404 },
    _react2.default.createElement(
      'div',
      { className: 'Page' },
      _react2.default.createElement(
        _reactMetaTags2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          title
        ),
        _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
      ),
      _react2.default.createElement(
        'main',
        { role: 'main' },
        _react2.default.createElement(
          'section',
          { className: 'Error' },
          _react2.default.createElement(
            'h1',
            null,
            'Page non trouv\xE9e',
            _react2.default.createElement(
              'span',
              null,
              ':('
            )
          )
        )
      )
    )
  );
};

var _default = NotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFound, 'NotFound', '/Users/jod/Sites/festivals-electro.fr/site/src/components/NotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/NotFound.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Status component
   ========================================================================== */

var Status = function Status(_ref) {
  var code = _ref.code,
      children = _ref.children;
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      if (staticContext) {
        staticContext.status = code;
      }
      return children;
    } });
};

var _default = Status;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Status, 'Status', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Status.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Status.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Map
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Map.css');
}

var infowindowTpl = function infowindowTpl(data) {
  return '\n  <div class="Map-infowindow">\n    <a class="Map-infowindow-link"\n      href="' + data.url + '" onclick="event.preventDefault()"\n      style="display: block;\n        margin-top: 3px;\n        font-size: 15px;\n        line-height: 1.1;\n        font-weight: bold;\n        color: rgb(60, 60, 60);"\n    >\n      <img src="' + data.image.source + '" alt=""\n        style="max-width: 100%;\n          margin-bottom: 3px;" />\n      ' + data.title + '\n    </a>\n  </div>';
};

function hasLocation(e) {
  return e.place && e.place.location && e.place.location.latitude && e.place.location.longitude;
}

function currentOrigin() {
  return window.location.protocol + '//' + window.location.host;
}

function closest(el, cls) {
  while (!el.classList.contains(cls) && (el = el.parentElement)) {}
  return el;
}

/* Component definition
   -------------------------------------------------------------------------- */

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

    _this.state = {
      events: props.events
    };
    _this.onEventClick = _this.onEventClick.bind(_this);
    return _this;
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.google) {
        this.initMap.call(this);
      } else {
        var scripts = ["https://maps.googleapis.com/maps/api/js?key=" + Map.key, "/assets/markerclusterer.js"];
        var promises = scripts.map(function (url) {
          return (0, _utils.loadScript)(url);
        });

        Promise.all(promises).then(this.initMap.bind(this));
      }
    }
  }, {
    key: 'initMap',
    value: function initMap() {
      var events = this.state.events;

      var _events$find = events.find(function (e) {
        return hasLocation(e);
      }),
          location = _events$find.place.location;

      var locatedEvents = [];

      var map = new google.maps.Map(this.map, {
        center: { lat: location.latitude, lng: location.longitude },
        zoom: 5
      });

      for (var i = 0, e; e = events[i]; i++) {
        hasLocation(e) && locatedEvents.push({
          title: e.name,
          image: { source: e.cover ? e.cover.source : '' },
          url: '/events/' + e.id,
          position: {
            lat: e.place.location.latitude,
            lng: e.place.location.longitude
          },
          map: map
        });
      }

      var infowindow = new google.maps.InfoWindow({
        maxWidth: 120
      });

      var markers = locatedEvents.map(function (e) {
        var marker = new google.maps.Marker(e);

        marker.addListener('click', function () {
          infowindow.setContent(infowindowTpl(e));
          infowindow.open(map, marker);
        });
        return marker;
      });

      var markerCluster = new MarkerClusterer(map, markers, { imagePath: '/assets/img/markerclusterer/m' });

      this.map.addEventListener('click', this.onEventClick);
    }
  }, {
    key: 'onEventClick',
    value: function onEventClick(e) {
      var link = closest(e.target, 'Map-infowindow-link');
      if (link) {
        this.props.history.push(link.pathname);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.map.removeEventListener('click', this.onEventClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var title = "Carte des festivals electro";
      return _react2.default.createElement(
        'div',
        { className: 'Page Page-map' },
        _react2.default.createElement(
          _reactMetaTags2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
        ),
        _react2.default.createElement(
          'main',
          { role: 'main' },
          _react2.default.createElement(
            'section',
            { className: 'Map' },
            _react2.default.createElement('div', { id: 'map', ref: function ref(el) {
                return _this2.map = el;
              } })
          )
        )
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

Map.key = 'AIzaSyCucHvhHuMe0ErcBwFbkk798Ob7tndRUQs';
var _default = Map;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(infowindowTpl, 'infowindowTpl', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Map.js');

  __REACT_HOT_LOADER__.register(hasLocation, 'hasLocation', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Map.js');

  __REACT_HOT_LOADER__.register(currentOrigin, 'currentOrigin', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Map.js');

  __REACT_HOT_LOADER__.register(closest, 'closest', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Map.js');

  __REACT_HOT_LOADER__.register(Map, 'Map', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Map.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Map.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/Login.css');
} /* ==========================================================================
     Login
     ========================================================================== */

var _default = function _default(props) {
  var title = "Festivals Electro - Admin login";
  return _react2.default.createElement(
    'div',
    { className: 'Page' },
    _react2.default.createElement(
      _reactMetaTags2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        title
      ),
      _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
    ),
    _react2.default.createElement(
      'main',
      { role: 'main' },
      _react2.default.createElement(
        'section',
        { className: 'Login' },
        _react2.default.createElement(
          'form',
          { action: '/login', method: 'post' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'username' },
              'Username:'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'username', id: 'username' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'password' },
              'Password:'
            ),
            _react2.default.createElement('input', { type: 'password', name: 'password', id: 'password' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { type: 'submit', value: 'Log In' })
          )
        )
      )
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Login.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _Event = __webpack_require__(12);

var _Event2 = _interopRequireDefault(_Event);

var _Performer = __webpack_require__(14);

var _Performer2 = _interopRequireDefault(_Performer);

var _User = __webpack_require__(38);

var _User2 = _interopRequireDefault(_User);

var _AddPerformer = __webpack_require__(39);

var _AddPerformer2 = _interopRequireDefault(_AddPerformer);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Admin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Admin.css');
}

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));

    _this.state = { item: props.item };
    return _this;
  }

  _createClass(Item, [{
    key: 'addEventLink',
    value: function addEventLink(e) {
      var _this2 = this;

      e.preventDefault();
      var form = e.target;
      (0, _utils.postJSON)('/events/' + this.props.item.id, {
        cover: { source: this.eventCover.value },
        links: {
          ws: form.elements['ws'].value,
          ra: form.elements['ra'].value
        }
      }).then(function (data) {
        _this2.setState({
          item: data.item
        });
        _this2.props.onAdd(data);
      }).catch(function (error) {});
    }
  }, {
    key: 'addPerformerLink',
    value: function addPerformerLink(e) {
      var _this3 = this;

      e.preventDefault();
      (0, _utils.postJSON)('/performers/' + this.props.item.id, {
        picture: {
          data: { url: this.performerPIC.value }
        },
        links: {
          ws: this.performerLinkWS.value,
          sc: this.performerLinkSC.value,
          mc: this.performerLinkMC.value,
          ra: this.performerLinkRA.value
        }
      }).then(function (data) {
        _this3.setState({
          item: data.item
        });
        _this3.props.onAdd(data);
      }).catch(function (err) {
        throw err;
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var item = this.props.item;

      if (item.lineup) {
        this.eventLinkWS.value = item.links.ws || '';
        this.eventLinkRA.value = item.links.ra || '';
      } else if (item.events) {
        this.performerPIC.value = item.picture.data.url || '';
        this.performerLinkWS.value = item.links.ws || '';
        this.performerLinkSC.value = item.links.sc || '';
        this.performerLinkMC.value = item.links.mc || '';
        this.performerLinkRA.value = item.links.ra || '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var item = this.props.item;


      return _react2.default.createElement(
        'section',
        { className: 'Admin-item' },
        item.start_time ? _react2.default.createElement(_Event2.default, { event: item }) : _react2.default.createElement(_Performer2.default, { performer: item }),
        item.lineup && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Liens'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.addEventLink.bind(this) },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'cover', placeholder: 'Photo de pr\xE9sentation',
                ref: function ref(el) {
                  return _this4.eventCover = el;
                },
                defaultValue: item.cover.source })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'ws', placeholder: 'Site web',
                ref: function ref(el) {
                  return _this4.eventLinkWS = el;
                },
                defaultValue: item.links.ws })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'ra', placeholder: 'Resident Advisor',
                ref: function ref(el) {
                  return _this4.eventLinkRA = el;
                },
                defaultValue: item.links.ra })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'submit', className: 'hidden' })
            )
          ),
          _react2.default.createElement(_AddPerformer2.default, _extends({}, this.props, { onSubmit: this.props.onAdd }))
        ),
        item.events && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Liens'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.addPerformerLink.bind(this) },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'pic', placeholder: 'Photo de profil',
                ref: function ref(el) {
                  return _this4.performerPIC = el;
                },
                defaultValue: item.picture.data.url })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'ws', placeholder: 'Site web',
                ref: function ref(el) {
                  return _this4.performerLinkWS = el;
                },
                defaultValue: item.links.ws })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'sc', placeholder: 'SoundCloud',
                ref: function ref(el) {
                  return _this4.performerLinkSC = el;
                },
                defaultValue: item.links.sc })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'mc', placeholder: 'Mixcloud',
                ref: function ref(el) {
                  return _this4.performerLinkMC = el;
                },
                defaultValue: item.links.mc })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'ra', placeholder: 'Resident Advisor',
                ref: function ref(el) {
                  return _this4.performerLinkRA = el;
                },
                defaultValue: item.links.ra })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'submit', className: 'hidden' })
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

var Admin = function (_React$Component2) {
  _inherits(Admin, _React$Component2);

  function Admin(props) {
    _classCallCheck(this, Admin);

    var _this5 = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

    _this5.state = {
      events: props.events,
      performers: props.performers,
      item: null
    };
    return _this5;
  }

  _createClass(Admin, [{
    key: 'showEvent',
    value: function showEvent(event, e) {
      var _this6 = this;

      e && e.preventDefault();
      if (event.lineup.length && typeof event.lineup[0] === "string") {
        event.lineup = event.lineup.map(function (id) {
          return _this6.state.performers.find(function (p) {
            return p.id === id;
          });
        });
      }
      this.setState({ item: event });
    }
  }, {
    key: 'showPerformer',
    value: function showPerformer(performer, e) {
      var _this7 = this;

      e && e.preventDefault();
      if (performer.events.length && typeof performer.events[0] === "string") {
        performer.events = performer.events.map(function (id) {
          return _this7.state.events.find(function (e) {
            return e.id === id;
          });
        });
      }
      this.setState({ item: performer });
    }
  }, {
    key: 'addEvent',
    value: function addEvent(e) {
      var _this8 = this;

      e.preventDefault();
      var event_fb_id = e.target.elements['event'].value;
      (0, _utils.postJSON)('/events', {
        event: event_fb_id
      }).then(function (data) {
        return _this8.setState({
          item: data.events.find(function (e) {
            return e.facebook_id === event_fb_id;
          }),
          events: data.events
        });
      }).catch(function (error) {
        _this8.setState({
          error: error,
          item: null
        });
      });
    }
  }, {
    key: 'addPerformer',
    value: function addPerformer(e) {
      var _this9 = this;

      e.preventDefault();
      var performer_fb_id = e.target.elements['performer'].value;
      (0, _utils.postJSON)('/performers', {
        performer: performer_fb_id
      }).then(function (data) {
        return _this9.setState({
          item: data.performers.find(function (p) {
            return p.facebook_id === performer_fb_id;
          }),
          performers: data.performers
        });
      }).catch(function (error) {
        _this9.setState({
          error: error,
          item: null
        });
      });
    }
  }, {
    key: 'onAdd',
    value: function onAdd(data) {
      this.setState({
        events: data.events,
        performers: data.performers
      });
      data.item.lineup && this.showEvent(data.item);
      data.item.events && this.showPerformer(data.item);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.eventList.style.height = this.eventList.parentNode.getBoundingClientRect().bottom - this.eventList.getBoundingClientRect().top + 'px';
      this.performerList.style.height = this.performerList.parentNode.getBoundingClientRect().bottom - this.performerList.getBoundingClientRect().top + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      var _state = this.state,
          events = _state.events,
          performers = _state.performers,
          item = _state.item,
          error = _state.error;
      var username = this.props.user.username;

      var title = "Festivals Electro - Admin";

      // sort events in alphabetical order
      events.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });

      // sort performers in alphabetical order
      performers.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });

      return _react2.default.createElement(
        'main',
        { role: 'main', className: 'Admin' },
        _react2.default.createElement(
          _reactMetaTags2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
        ),
        _react2.default.createElement(_User2.default, { username: username }),
        _react2.default.createElement(
          'section',
          { className: 'Admin-list' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Ev\xE9nements (',
              events.length,
              ')'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.addEvent.bind(this) },
              _react2.default.createElement('input', { type: 'text', name: 'event' })
            ),
            _react2.default.createElement(
              'ul',
              { ref: function ref(el) {
                  return _this10.eventList = el;
                } },
              events.map(function (event) {
                return _react2.default.createElement(
                  'li',
                  { key: event.id },
                  _react2.default.createElement(
                    'a',
                    { href: "/events/" + event.id, onClick: _this10.showEvent.bind(_this10, event) },
                    event.name
                  )
                );
              })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Artistes (',
              performers.length,
              ')'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.addPerformer.bind(this) },
              _react2.default.createElement('input', { type: 'text', name: 'performer' })
            ),
            _react2.default.createElement(
              'ul',
              { ref: function ref(el) {
                  return _this10.performerList = el;
                } },
              performers.map(function (performer) {
                return _react2.default.createElement(
                  'li',
                  { key: performer.id },
                  _react2.default.createElement(
                    'a',
                    { href: "/performers/" + performer.id, onClick: _this10.showPerformer.bind(_this10, performer) },
                    performer.name
                  )
                );
              })
            )
          )
        ),
        item ? _react2.default.createElement(Item, _extends({ item: item }, this.props, { onAdd: this.onAdd.bind(this) })) : error && _react2.default.createElement(
          'div',
          { className: 'errorMessage' },
          error.message
        )
      );
    }
  }]);

  return Admin;
}(_react2.default.Component);

var _default = Admin;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Admin.js');

  __REACT_HOT_LOADER__.register(Admin, 'Admin', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Admin.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Admin.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  User
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/User.css');
}

var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User(props) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

    _this.state = {
      username: props.username
    };
    return _this;
  }

  _createClass(User, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var form = e.target;
      (0, _utils.postJSON)(form.action, {
        username: form.elements['username'].value,
        password: form.elements['password'].value
      }).then(function (data) {
        return _this2.setState({
          username: data.username
        });
      }).catch(function (error) {
        console.error(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          username = _state.username,
          password = _state.password;

      return _react2.default.createElement(
        'section',
        { className: 'User' },
        _react2.default.createElement(
          'form',
          { action: '/users', method: 'post', onSubmit: this.onSubmit.bind(this) },
          _react2.default.createElement(
            'label',
            { htmlFor: 'username' },
            'Username:'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'username', id: 'username', defaultValue: username }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'password' },
            'Password:'
          ),
          _react2.default.createElement('input', { type: 'password', name: 'password', id: 'password' }),
          _react2.default.createElement('input', { type: 'submit', value: 'Save' })
        )
      );
    }
  }]);

  return User;
}(_react2.default.Component);

var _default = User;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(User, 'User', '/Users/jod/Sites/festivals-electro.fr/site/src/components/User.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/User.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Admin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../../css/AddPerformer.css');
}

/* Component definition
   -------------------------------------------------------------------------- */

var AddPerformer = function (_React$Component) {
  _inherits(AddPerformer, _React$Component);

  function AddPerformer(props) {
    _classCallCheck(this, AddPerformer);

    var _this = _possibleConstructorReturn(this, (AddPerformer.__proto__ || Object.getPrototypeOf(AddPerformer)).call(this, props));

    _this.focusedIndex = null;
    _this.listenInput = false;
    _this.state = {
      query: ''
    };
    _this.onKeydown = _this.onKeydown.bind(_this);
    return _this;
  }

  _createClass(AddPerformer, [{
    key: 'onChange',
    value: function onChange() {
      var query = this.performerInput.value.trim();

      this.performerList && this.performerList.classList.remove('hidden');

      this.focusedIndex = null;

      if (query) {
        !this.listenInput && this.performerInput.addEventListener('keydown', this.onKeydown);
        this.listenInput = true;
      } else {
        this.performerInput.removeEventListener('keydown', this.onKeydown);
        this.performerList && this.performerList.removeEventListener('keydown', this.onKeydown);
        this.listenInput = false;
      }

      this.setState({ query: query });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      (0, _utils.postJSON)('/events/' + this.props.item.id, {
        performer: this.performerInput.value
      }).then(function (data) {
        return _this2.props.onSubmit(data);
      }).catch(function (err) {
        throw err;
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.performerList.classList.add('hidden');
    }
  }, {
    key: 'onKeydown',
    value: function onKeydown(e) {
      if (/ArrowUp|ArrowDown/.test(e.key)) {
        e.preventDefault();
        var items = this.performerList.childNodes;

        if (this.focusedIndex === null) {
          this.focusedIndex = e.key === 'ArrowUp' ? items.length - 1 : 0;
        } else {
          if (e.key === 'ArrowUp') {
            this.focusedIndex = this.focusedIndex === 0 ? items.length - 1 : this.focusedIndex - 1;
          } else {
            this.focusedIndex = this.focusedIndex === items.length - 1 ? 0 : this.focusedIndex + 1;
          }
        }

        items.item(this.focusedIndex).childNodes[0].focus();
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      this.performerInput.value = e.target.textContent;
      this.performerInput.focus();
      this.close();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.performerList && this.performerList.addEventListener('keydown', this.onKeydown);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var query = this.state.query;

      var result = [];

      if (query) {
        var regex = new RegExp(query, "i");
        for (var i = 0, p; p = this.props.performers[i]; i++) {
          regex.test(p.name) && result.push(p);
        }
      }

      return _react2.default.createElement(
        'form',
        { onSubmit: this.onSubmit.bind(this), className: 'AddPerformer' },
        _react2.default.createElement(
          'h3',
          null,
          'Line-up'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { type: 'text', name: 'performer', placeholder: 'Ajouter un artiste',
            autoComplete: 'off',
            onChange: this.onChange.bind(this),
            ref: function ref(el) {
              return _this3.performerInput = el;
            } }),
          result.length > 0 && _react2.default.createElement(
            'ul',
            { className: 'AddPerformer-list', ref: function ref(el) {
                return _this3.performerList = el;
              } },
            result.map(function (p) {
              return _react2.default.createElement(
                'li',
                { key: p.id },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/performers/' + p.id, onClick: _this3.onClick.bind(_this3) },
                  p.name
                )
              );
            })
          )
        )
      );
    }
  }]);

  return AddPerformer;
}(_react2.default.Component);

var _default = AddPerformer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddPerformer, 'AddPerformer', '/Users/jod/Sites/festivals-electro.fr/site/src/components/admin/AddPerformer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/admin/AddPerformer.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMetaTags = __webpack_require__(2);

var _reactMetaTags2 = _interopRequireDefault(_reactMetaTags);

var _reactRouterDom = __webpack_require__(1);

var _queryString = __webpack_require__(11);

var _queryString2 = _interopRequireDefault(_queryString);

var _EventMinicard = __webpack_require__(15);

var _EventMinicard2 = _interopRequireDefault(_EventMinicard);

var _PerformerMinicard = __webpack_require__(13);

var _PerformerMinicard2 = _interopRequireDefault(_PerformerMinicard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Search
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Search.css');
}

/* Component definition
   -------------------------------------------------------------------------- */

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(_ref) {
    var events = _ref.events,
        performers = _ref.performers;

    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    _this.state = {
      events: events,
      performers: performers
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var data = { events: this.props.events, performers: this.props.performers };
      var result = { events: [], performers: [] };
      var parsed = _queryString2.default.parse(this.props.location.search);
      var query = parsed.q;

      // populate results
      if (data && query) {
        var regex = new RegExp(query, "i");
        for (var i = 0, e; e = data.events[i]; i++) {
          regex.test(e.name) && result.events.push(e);
        }
        for (var j = 0, p; p = data.performers[j]; j++) {
          regex.test(p.name) && result.performers.push(p);
        }
      }

      var title = (query ? query + " - " : "") + "Recherche Festivals Electro";

      return _react2.default.createElement(
        'div',
        { className: 'Page' },
        _react2.default.createElement(
          _reactMetaTags2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { id: 'meta_title', property: 'og:title', content: title })
        ),
        _react2.default.createElement(
          'main',
          { role: 'main' },
          _react2.default.createElement(
            'div',
            { className: 'Search' },
            _react2.default.createElement(
              'section',
              { className: 'Search-results' },
              _react2.default.createElement(
                'div',
                { className: 'Search-results-events' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Festivals'
                ),
                !result.events.length && _react2.default.createElement(
                  'div',
                  null,
                  'Aucun r\xE9sultat'
                ),
                result.events.length > 0 && _react2.default.createElement(
                  'ul',
                  null,
                  result.events.map(function (item) {
                    return _react2.default.createElement(_EventMinicard2.default, { key: item.id, event: item });
                  })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Search-results-performers' },
                _react2.default.createElement(
                  'span',
                  null,
                  'Artistes'
                ),
                !result.performers.length && _react2.default.createElement(
                  'div',
                  null,
                  'Aucun r\xE9sultat'
                ),
                result.performers.length > 0 && _react2.default.createElement(
                  'ul',
                  null,
                  result.performers.map(function (item) {
                    return _react2.default.createElement(
                      'li',
                      { key: item.id },
                      _react2.default.createElement(_PerformerMinicard2.default, { performer: item })
                    );
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

var _default = Search;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Search, 'Search', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Search.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/src/components/Search.js');
}();

;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(_ref) {
  var meta = _ref.meta,
      body = _ref.body,
      data = _ref.data;

  return process.env.NODE_ENV === 'production' ? '\n    <!DOCTYPE html>\n    <html lang="fr">\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        ' + meta + '\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">\n        <link rel="stylesheet" href="/assets/styles.css">\n      </head>\n      <body>\n        <div id="root">' + body + '</div>\n        <script>window.__INITIAL_STATE__ = { data: ' + data + ' }</script>\n        <script defer src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  ' : '\n    <!DOCTYPE html>\n    <html lang="fr">\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        ' + meta + '\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">\n      </head>\n      <body>\n        <div id="root"></div>\n        <script>window.__INITIAL_STATE__ = { data: ' + data + ' }</script>\n        <script defer src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  ';
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/template.js');
}();

;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _securePassword = __webpack_require__(9);

var _securePassword2 = _interopRequireDefault(_securePassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Users
   ========================================================================== */

var router = _express2.default.Router();

router.post('/', function (req, res) {
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../db/users.json'), 'utf8');
  var users = data ? JSON.parse(data) : {};

  // Initialise our password policy
  var pwd = (0, _securePassword2.default)();
  var userPassword = Buffer.from(password);

  pwd.hash(userPassword, function (err, hash) {
    if (err) throw err;

    if (users[username]) {
      users[username].password = hash;
    } else {
      users[username] = { password: hash };
    }

    _fs2.default.writeFileSync((0, _path.resolve)(__dirname, '../db/users.json'), JSON.stringify(users));
  });

  res.send({ username: username, password: users[username].password });
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/users.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/users.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "server/routes"))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _fb = __webpack_require__(16);

var _fb2 = _interopRequireDefault(_fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Events
   ========================================================================== */

var router = _express2.default.Router();

router.post('/', function (req, res) {
  var event = req.body.event;

  var event_fb_id = event.toString();

  _fb2.default.fetch(event_fb_id + '?fields=name,place,start_time,end_time,cover').then(function (fb_res) {

    if (fb_res.error) {
      return res.status(fb_res.error.code).send(fb_res.error.message);
    }

    var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../db/data.json'), 'utf8');

    var _JSON$parse = JSON.parse(data),
        events = _JSON$parse.events,
        performers = _JSON$parse.performers;

    if (event = events.find(function (e) {
      return e.facebook_id === event_fb_id;
    })) {
      Object.assign(event, fb_res, {
        id: event.id,
        facebook_id: event_fb_id
      });
    } else {
      events.push(Object.assign(fb_res, {
        id: events.length ? (parseInt(events[events.length - 1].id) + 1).toString() : "0",
        facebook_id: event_fb_id,
        lineup: [],
        links: {}
      }));
    }

    data = {
      events: events,
      performers: performers
    };

    _fs2.default.writeFileSync((0, _path.resolve)(__dirname, '../db/data.json'), JSON.stringify(data, null, 2));

    res.send(data);
  });
});

router.post('/:id', function (req, res) {

  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../db/data.json'), 'utf8');

  var _JSON$parse2 = JSON.parse(data),
      events = _JSON$parse2.events,
      performers = _JSON$parse2.performers;

  var event = events.find(function (e) {
    return e.id === req.params.id;
  });
  var performer = req.body.performer ? performers.find(function (p) {
    return p.name.toLowerCase() === req.body.performer.toLowerCase();
  }) : null;
  var links = req.body.links;
  var cover = req.body.cover;

  if (links && Object.keys(links).length) {
    Object.assign(event.links, links);
  }

  if (cover && Object.keys(cover).length) {
    Object.assign(event.cover, cover);
  }

  if (performer) {

    if (event.lineup.find(function (id) {
      return id === performer.id;
    })) {
      return res.send('Performer ' + performer.name + ' already stored');
    }

    event.lineup.push(performer.id);
    performer.events.push(event.id);
  }

  data = {
    events: events,
    performers: performers
  };

  _fs2.default.writeFileSync((0, _path.resolve)(__dirname, '../db/data.json'), JSON.stringify(data, null, 2));

  res.send(Object.assign({ item: event }, data));
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/events.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/events.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "server/routes"))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _fb = __webpack_require__(16);

var _fb2 = _interopRequireDefault(_fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ==========================================================================
   Performers
   ========================================================================== */

var router = _express2.default.Router();

router.post('/', function (req, res) {
  var performer = req.body.performer;

  var performer_fb_id = performer.toString();

  _fb2.default.fetch(performer_fb_id + '?fields=name,genre,link,cover,picture.type(large),events.limit(100)').then(function (fb_res) {
    if (fb_res.error) {
      return res.status(fb_res.error.code).send(fb_res.error.message);
    }

    var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../db/data.json'), 'utf8');

    var _JSON$parse = JSON.parse(data),
        events = _JSON$parse.events,
        performers = _JSON$parse.performers;

    // check if the performer is already stored


    performer = performers.find(function (p) {
      return p.facebook_id === performer_fb_id;
    });

    var performer_id = performer ? performer.id : performers.length ? (parseInt(performers[performers.length - 1].id) + 1).toString() : "0";

    // check if any of the performer events matches against any of ours
    var performerEvents = [];
    if (fb_res.events && fb_res.events.data && fb_res.events.data.length) {
      fb_res.events.data.forEach(function (event) {
        if (event = events.find(function (e) {
          return e.facebook_id === event.id;
        })) {
          performerEvents.push(event.id);
          !event.lineup.includes(performer_id) && event.lineup.push(performer_id);
        }
      });
    }

    // update existing performer or create new entry
    if (performer) {
      Object.assign(performer, {
        picture: fb_res.picture,
        cover: fb_res.cover,
        events: performerEvents
      });
    } else {
      performers.push({
        id: performer_id,
        name: fb_res.name,
        facebook_id: performer_fb_id,
        picture: fb_res.picture,
        cover: fb_res.cover,
        events: performerEvents,
        links: {
          fb: fb_res.link
        },
        genre: fb_res.genre
      });
    }

    data = {
      events: events,
      performers: performers
    };

    _fs2.default.writeFileSync((0, _path.resolve)(__dirname, '../db/data.json'), JSON.stringify(data, null, 2));

    res.send(data);
  });
});

router.post('/:id', function (req, res) {

  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, '../db/data.json'), 'utf8');

  var _JSON$parse2 = JSON.parse(data),
      events = _JSON$parse2.events,
      performers = _JSON$parse2.performers;

  var performer = performers.find(function (p) {
    return p.id === req.params.id;
  });
  var links = req.body.links;
  var picture = req.body.picture;

  if (links && Object.keys(links).length) {
    Object.assign(performer.links, links);
  }

  if (picture && Object.keys(picture).length) {
    Object.assign(performer.picture, picture);
  }

  data = {
    events: events,
    performers: performers
  };

  _fs2.default.writeFileSync((0, _path.resolve)(__dirname, '../db/data.json'), JSON.stringify(data, null, 2));

  res.send(Object.assign({
    item: performer
  }, data));
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/performers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festivals-electro.fr/site/server/routes/performers.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "server/routes"))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* =====================================
    Webpack development config
   ===================================== */

var merge = __webpack_require__(47);
var common = __webpack_require__(48);
var webpack = __webpack_require__(7);

module.exports = merge(common, {
  entry: {
    app: ["react-hot-loader/patch", "webpack-hot-middleware/client?noInfo=false", "./src/index"]
  },
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", {
        loader: "css-loader",
        options: {
          importLoaders: 1
        }
      }, "postcss-loader"]
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.EnvironmentPlugin({
    NODE_ENV: "development",
    WEBPACK: true
  })]
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/* =====================================
    Webpack commmon config
   ===================================== */

var path = __webpack_require__(4);
var webpack = __webpack_require__(7);

module.exports = {
  entry: {
    app: "./src/index"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.ProvidePlugin({
    debounce: ["lodash", "debounce"],
    throttle: ["lodash", "throttle"]
  })],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/"
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("connect-ensure-login");

/***/ })
/******/ ]);