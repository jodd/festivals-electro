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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScript = exports.DateRange = exports.DateSticker = undefined;

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

/* Export components
   -------------------------------------------------------------------------- */
exports.DateSticker = DateSticker;
exports.DateRange = DateRange;
exports.loadScript = loadScript;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(months, 'months', '/Users/jod/Sites/festitek/site/src/client/utils.js');

  __REACT_HOT_LOADER__.register(shortMonths, 'shortMonths', '/Users/jod/Sites/festitek/site/src/client/utils.js');

  __REACT_HOT_LOADER__.register(DateSticker, 'DateSticker', '/Users/jod/Sites/festitek/site/src/client/utils.js');

  __REACT_HOT_LOADER__.register(DateRange, 'DateRange', '/Users/jod/Sites/festitek/site/src/client/utils.js');

  __REACT_HOT_LOADER__.register(loadScript, 'loadScript', '/Users/jod/Sites/festitek/site/src/client/utils.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/Event.css');
}

/* -------------------------------------------------------------------------- */

/* sub-component: performer */
/* ==========================================================================
   Event
   ========================================================================== */

var Item = function Item(_ref) {
  var performer = _ref.performer;

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/performers/' + performer.id },
      _react2.default.createElement('img', { src: performer.picture.data.url, alt: "Photo de profil de " + performer.name }),
      _react2.default.createElement(
        'span',
        null,
        performer.name
      )
    )
  );
};

/* export stateless component
   -------------------------------------------------------------------------- */

var _default = function _default(_ref2) {
  var event = _ref2.event;
  var name = event.name,
      cover = event.cover,
      start_time = event.start_time,
      end_time = event.end_time,
      place = event.place,
      lineup = event.lineup,
      links = event.links;
  var location = place.location;

  var gmapsQuery = null;

  if (location) {
    if (location.city && location.country) {
      gmapsQuery = location.street ? escape(location.street + ' ' + location.city + ' ' + location.country) : escape(place.name + ' ' + location.city + ' ' + location.country);
    } else if (location.latitude && location.longitude) {
      gmapsQuery = location.latitude + "," + location.longitude;
    }
  } else {
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
    'section',
    { className: 'Event' },
    cover && _react2.default.createElement('img', { src: cover.source, className: 'Event-picture', alt: "Photo de présentation de l'événement " + name }),
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
        ),
        pastEvent && _react2.default.createElement(
          'span',
          { className: 'sticker' },
          'Pass\xE9'
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
            { className: 'icon-calendar', viewBox: '0 0 416 448', width: '416', height: '448', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z' })
          ),
          _react2.default.createElement(_utils.DateRange, { start_time: start_time, end_time: end_time })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Event-place' },
          _react2.default.createElement(
            'svg',
            { className: 'icon-location', viewBox: '0 0 512 512', width: '512', height: '512', 'aria-hidden': 'true' },
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
                { className: 'icon-earth', viewBox: '0 0 512 512', width: '512', height: '512', 'aria-hidden': 'true' },
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
                { className: 'icon-facebook', viewBox: '0 0 32 32', height: '32', width: '32', 'aria-hidden': 'true' },
                _react2.default.createElement('path', { d: 'M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z', fill: '#3B5998' }),
                _react2.default.createElement('path', { d: 'M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z', fill: '#FFF' })
              ),
              'Facebook'
            )
          ),
          links.ra && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: links.ra, title: "Page Resident Advisor de l'événement " + name },
              _react2.default.createElement('img', { className: 'icon-ra', src: '/assets/ra.png', alt: '' }),
              'Resident Advisor'
            )
          )
        )
      )
    ),
    lineup.length > 0 && _react2.default.createElement(
      'div',
      { className: 'Event-lineup' },
      _react2.default.createElement(
        'h2',
        null,
        'Line-up'
      ),
      _react2.default.createElement(
        'ul',
        null,
        lineup.map(function (performer) {
          return _react2.default.createElement(Item, { key: performer.id, performer: performer });
        })
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

  __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/jod/Sites/festitek/site/src/client/components/Event.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Event.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/Performer.css');
}

/* Sub Components
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Performer
   ========================================================================== */

function EventCard(_ref) {
  var event = _ref.event;
  var id = event.id,
      name = event.name,
      start_time = event.start_time,
      place = event.place;

  return _react2.default.createElement(
    'li',
    { className: 'Performer-event' },
    _react2.default.createElement(_utils.DateSticker, { datetime: start_time }),
    _react2.default.createElement(
      'div',
      { className: 'Performer-event-content' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/events/' + id, className: 'Performer-event-title' },
        name
      ),
      _react2.default.createElement(
        'div',
        { className: 'Performer-event-place' },
        _react2.default.createElement(
          'svg',
          { className: 'icon-location', viewBox: '0 0 512 512', width: '512', height: '512', 'aria-hidden': 'true' },
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
}

/* Component definition
   -------------------------------------------------------------------------- */

var _default = function _default(_ref2) {
  var performer = _ref2.performer;
  var name = performer.name,
      picture = performer.picture,
      cover = performer.cover,
      links = performer.links,
      events = performer.events;


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
    { className: 'Performer' },
    cover && _react2.default.createElement('img', { src: cover.source, alt: '' }),
    _react2.default.createElement(
      'h1',
      null,
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
                { className: 'icon-earth', viewBox: '0 0 512 512', width: '512', height: '512', 'aria-hidden': 'true' },
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
                { className: 'icon-facebook', viewBox: '0 0 32 32', height: '32', width: '32', 'aria-hidden': 'true' },
                _react2.default.createElement('path', { d: 'M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z', fill: '#3B5998' }),
                _react2.default.createElement('path', { d: 'M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z', fill: '#FFF' })
              ),
              'Profil Facebook'
            )
          ),
          links.ra && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: links.ra, title: "Page Resident Advisor de " + name },
              _react2.default.createElement('img', { className: 'icon-ra', src: '/assets/ra.png', alt: '' }),
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
        'Prochains \xE9v\xE9nements'
      ),
      _react2.default.createElement(
        'ul',
        null,
        nextEvents.map(function (e) {
          return _react2.default.createElement(EventCard, { key: e.id, event: e });
        })
      )
    ),
    pastEvents.length > 0 && _react2.default.createElement(
      'div',
      { className: 'Performer-events pastEvents' },
      _react2.default.createElement(
        'h2',
        null,
        'Ev\xE9nements pass\xE9s'
      ),
      _react2.default.createElement(
        'ul',
        null,
        pastEvents.map(function (e) {
          return _react2.default.createElement(EventCard, { key: e.id, event: e });
        })
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

  __REACT_HOT_LOADER__.register(EventCard, 'EventCard', '/Users/jod/Sites/festitek/site/src/client/components/Performer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Performer.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _fs = __webpack_require__(9);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(3);

var _webpack2 = _interopRequireDefault(_webpack);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(5);

var _routes = __webpack_require__(12);

var _template = __webpack_require__(24);

var _template2 = _interopRequireDefault(_template);

var _fb = __webpack_require__(25);

var _fb2 = _interopRequireDefault(_fb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* server config
   -------------------------------------------------------------------------- */

var app = (0, _express2.default)(); /* ==========================================================================
                                       Server
                                       ========================================================================== */

var ENV = process.env.NODE_ENV || 'production';
var PORT = process.env.PORT || 8080;

if (ENV === 'development') {

  var config = __webpack_require__(27);
  var compiler = (0, _webpack2.default)(config);

  app.use(__webpack_require__(30)(compiler, {
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

  app.use(__webpack_require__(31)(compiler, {
    log: console.log,
    reload: true
  }));
} else if (ENV === 'production') {
  app.use('/assets', _express2.default.static((0, _path.resolve)(__dirname, '../../dist')));
}

app.use('/assets', _express2.default.static((0, _path.resolve)(__dirname, '../../static')));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded());

/* handle requests
   -------------------------------------------------------------------------- */

app.get('*', function (req, res) {

  var branch = (0, _reactRouterConfig.matchRoutes)(_routes.routes, req.url);
  var promises = branch.map(function (_ref) {
    var match = _ref.match;
    return loadData(match);
  });

  Promise.all(promises).then(function (values) {

    values = values.reduce(function (acc, value) {
      return Object.assign(acc, value);
    });

    var _Object$assign = Object.assign({
      context: { status: 200 },
      meta: {
        title: 'Festik',
        url: req.protocol + '://' + req.hostname + req.originalUrl,
        image: req.protocol + '://' + req.hostname + '/static/logo.svg'
      }
    }, values),
        context = _Object$assign.context,
        meta = _Object$assign.meta,
        data = _Object$assign.data;

    // handle async json requests


    if (req.headers.accept === 'application/json') {
      return res.status(context.status).json({
        meta: meta,
        data: data
      });
    }

    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: context.status === 404 ? '/error' : req.url,
        context: context },
      (0, _reactRouterConfig.renderRoutes)(_routes.routes, data)
    ));

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      context.status = 307;
      return res.redirect(context.status, context.url);
    }

    res.status(context.status);

    res.write((0, _template2.default)({
      status: context.status,
      meta: meta,
      body: html,
      data: JSON.stringify(data)
    }));

    res.end();
  }).catch(function (err) {
    console.log(err);
  });
});

app.post('/events', function (req, res) {
  var event = req.body.event;

  var event_fb_id = event.toString();

  _fb2.default.fetch(event_fb_id + '?fields=name,place,start_time,end_time,cover').then(function (response) {
    if (response.error) {
      return res.status(response.error.code).send(response.error.message);
    }

    var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'data.json'), 'utf8');

    var _JSON$parse = JSON.parse(data),
        events = _JSON$parse.events,
        performers = _JSON$parse.performers;

    if (event = events.find(function (e) {
      return e.facebook_id === event_fb_id;
    })) {
      Object.assign(event, response, {
        id: event.id,
        facebook_id: event_fb_id
      });
    } else {
      events.push(Object.assign(response, {
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
    _fs2.default.writeFileSync((0, _path.resolve)(__dirname, 'data.json'), JSON.stringify(data, null, 2));
    res.send(data);
  });
});

app.post('/performers', function (req, res) {
  var performer = req.body.performer;

  var performer_fb_id = performer.toString();

  _fb2.default.fetch(performer_fb_id + '?fields=name,genre,link,cover,picture.type(large),events.limit(100)').then(function (fb_res) {
    if (fb_res.error) {
      return res.status(fb_res.error.code).send(fb_res.error.message);
    }

    var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'data.json'), 'utf8');

    var _JSON$parse2 = JSON.parse(data),
        events = _JSON$parse2.events,
        performers = _JSON$parse2.performers;

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
    _fs2.default.writeFileSync((0, _path.resolve)(__dirname, 'data.json'), JSON.stringify(data, null, 2));
    res.send(data);
  });
});

app.post('/events/:id', function (req, res) {
  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'data.json'), 'utf8');

  var _JSON$parse3 = JSON.parse(data),
      events = _JSON$parse3.events,
      performers = _JSON$parse3.performers;

  var event = events.find(function (e) {
    return e.id === req.params.id;
  });
  var performer = req.body.performer ? performers.find(function (p) {
    return p.name.toLowerCase() === req.body.performer.toLowerCase();
  }) : null;
  var links = req.body.links;

  if (links && Object.keys(links).length) {
    Object.assign(event.links, req.body.links);
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

  _fs2.default.writeFileSync((0, _path.resolve)(__dirname, 'data.json'), JSON.stringify(data, null, 2));
  res.send(Object.assign({
    item: event
  }, data));
});

app.post('/performers/:id', function (req, res) {
  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'data.json'), 'utf8');

  var _JSON$parse4 = JSON.parse(data),
      events = _JSON$parse4.events,
      performers = _JSON$parse4.performers;

  var performer = performers.find(function (p) {
    return p.id === req.params.id;
  });
  var links = req.body.links;

  if (links && Object.keys(links).length) {
    Object.assign(performer.links, req.body.links);
  }

  data = {
    events: events,
    performers: performers
  };

  _fs2.default.writeFileSync((0, _path.resolve)(__dirname, 'data.json'), JSON.stringify(data, null, 2));
  res.send(Object.assign({
    item: performer
  }, data));
});

/* start server
   -------------------------------------------------------------------------- */
app.listen(PORT, '0.0.0.0', function (err) {
  if (err) {
    return console.error(err);
  }
  return console.info('Server running on http://localhost:' + PORT + ' [' + ENV + ']');
});

/* -------------------------------------------------------------------------- */
/* mock the API (to be removed)
   -------------------------------------------------------------------------- */

function filterNext(events) {
  return events.filter(function (e) {
    return new Date(e.end_time) >= new Date();
  });
}

function filterPast(events) {
  return events.filter(function (e) {
    return new Date(e.end_time) < new Date();
  });
}

function loadData(match) {

  var params = {};

  Object.keys(match.params).forEach(function (key) {
    return params[key] = match.params[key].split('?')[0];
  });

  var data = _fs2.default.readFileSync((0, _path.resolve)(__dirname, 'data.json'), 'utf8');

  var _JSON$parse5 = JSON.parse(data),
      _events = _JSON$parse5.events,
      _performers = _JSON$parse5.performers;

  var dispatcher = {

    "/": function _() {
      return match.isExact ? new Promise(function (resolve, reject) {
        resolve({
          meta: { title: "Prochains événements" },
          data: { events: filterNext(_events) }
        });
      }) : {
        // status: 404,
        meta: { title: "Festik - Erreur : page non trouvée :(" }
      };
    },

    "/events": function events() {
      return new Promise(function (resolve, reject) {

        resolve({
          meta: { title: "Prochains événements" },
          data: {
            events: filterNext(_events)
          }
        });
      });
    },

    "/events/past": function eventsPast() {
      return new Promise(function (resolve, reject) {

        resolve({
          meta: { title: "Evénements passés" },
          data: {
            events: filterPast(_events)
          }
        });
      });
    },

    "/search": function search() {
      return new Promise(function (resolve, reject) {
        resolve({
          meta: { title: "Recherche" },
          data: {
            events: _events,
            performers: _performers
          }
        });
      });
    },

    "/events/:id": function eventsId() {
      return new Promise(function (resolve, reject) {

        var event = Object.assign({}, _events.find(function (e) {
          return e.id === params.id;
        }));

        if (!Object.keys(event).length) {
          resolve({
            status: 404,
            meta: { title: "Festik - Erreur : page non trouvée :(" }
          });
        }

        event.lineup = event.lineup.map(function (id) {
          return _performers.find(function (p) {
            return p.id === id;
          });
        });

        resolve({
          meta: { title: event.name },
          data: { event: event }
        });
      });
    },

    "/performers": function performers() {
      return new Promise(function (resolve, reject) {
        resolve({
          meta: { title: "Tous les artistes" },
          data: { performers: _performers }
        });
      });
    },

    "/performers/:id": function performersId() {
      return new Promise(function (resolve, reject) {
        var performer = Object.assign({}, _performers.find(function (p) {
          return p.id === params.id;
        }));

        if (!Object.keys(performer).length) {
          resolve({
            status: 404,
            meta: { title: "Festik - Erreur : page non trouvée :(" }
          });
        }

        performer.events = performer.events.map(function (id) {
          return _events.find(function (e) {
            return e.id === id;
          });
        });

        resolve({
          meta: { title: performer.name },
          data: { performer: performer }
        });
      });
    },

    "/map": function map() {
      return new Promise(function (resolve, reject) {
        resolve({
          meta: { title: 'Carte des festivals' },
          data: {
            events: _events
          }
        });
      });
    },

    "/admin": function admin() {
      return new Promise(function (resolve, reject) {
        resolve({
          meta: { title: 'Festik admin' },
          data: {
            events: _events,
            performers: _performers
          }
        });
      });
    }
  };

  return dispatcher[match.path]();
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/jod/Sites/festitek/site/src/server/index.js');

  __REACT_HOT_LOADER__.register(ENV, 'ENV', '/Users/jod/Sites/festitek/site/src/server/index.js');

  __REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/jod/Sites/festitek/site/src/server/index.js');

  __REACT_HOT_LOADER__.register(filterNext, 'filterNext', '/Users/jod/Sites/festitek/site/src/server/index.js');

  __REACT_HOT_LOADER__.register(filterPast, 'filterPast', '/Users/jod/Sites/festitek/site/src/server/index.js');

  __REACT_HOT_LOADER__.register(loadData, 'loadData', '/Users/jod/Sites/festitek/site/src/server/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "src/server"))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _Events = __webpack_require__(18);

var _Events2 = _interopRequireDefault(_Events);

var _Event = __webpack_require__(6);

var _Event2 = _interopRequireDefault(_Event);

var _Performer = __webpack_require__(7);

var _Performer2 = _interopRequireDefault(_Performer);

var _Performers = __webpack_require__(20);

var _Performers2 = _interopRequireDefault(_Performers);

var _Error = __webpack_require__(21);

var _Error2 = _interopRequireDefault(_Error);

var _Map = __webpack_require__(22);

var _Map2 = _interopRequireDefault(_Map);

var _Admin = __webpack_require__(23);

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = [{
  path: "/admin",
  exact: true,
  component: _Admin2.default
}, {
  component: _App2.default,
  routes: [{
    path: "/",
    exact: true,
    component: _Home2.default
  }, {
    path: "/events",
    exact: true,
    component: _Events2.default
  }, {
    path: "/events/past",
    exact: true,
    component: _Events2.default
  }, {
    path: "/search",
    exact: true
  }, {
    path: "/performers",
    exact: true,
    component: _Performers2.default
  }, {
    path: '/events/:id',
    exact: true,
    component: _Event2.default
  }, {
    path: '/performers/:id',
    exact: true,
    component: _Performer2.default
  }, {
    path: '/map',
    exact: true,
    component: _Map2.default
  }, {
    component: _Error2.default
  }]
}];

// export const routes = [{
//     path: "/admin",
//     exact: true,
//     component: require('./components/Admin'),
//   }, {
//     component: require('./App'),
//     routes: [{
//       path: "/",
//       exact: true,
//       component: require('./components/Home')
//     }, {
//       path: "/events",
//       exact: true,
//       component: require('./components/Events')
//     }, {
//       path: "/events/past",
//       exact: true,
//       component: require('./components/Events')
//     }, {
//       path: "/search",
//       exact: true
//     }, {
//       path: "/performers",
//       exact: true,
//       component: require('./components/Performers')
//     }, {
//       path: '/events/:id',
//       exact: true,
//       component: require('./components/Event')
//     }, {
//       path: '/performers/:id',
//       exact: true,
//       component: require('./components/Performer')
//     }, {
//       path: '/map',
//       exact: true,
//       component: Map
//     }, {
//       component: require('./components/Error')
//     }]
//   }
// ]
/* ==========================================================================
   Routing
   ========================================================================== */

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/jod/Sites/festitek/site/src/client/routes.js');
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

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(14);

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
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'main',
      { role: 'main' },
      (0, _reactRouterConfig.renderRoutes)(route.routes, extraProps)
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/App.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Searchbox = __webpack_require__(15);

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
            { className: 'icon-calendar', viewBox: '0 0 416 448', width: '416', height: '448', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { d: 'M32 416h72v-72H32v72zm88 0h80v-72h-80v72zm-88-88h72v-80H32v80zm88 0h80v-80h-80v80zm-88-96h72v-72H32v72zm184 184h80v-72h-80v72zm-96-184h80v-72h-80v72zm192 184h72v-72h-72v72zm-96-88h80v-80h-80v80zm-88-216V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm184 216h72v-80h-72v80zm-96-96h80v-72h-80v72zm96 0h72v-72h-72v72zm8-120V40c0-4.25-3.75-8-8-8h-16c-4.25 0-8 3.75-8 8v72c0 4.25 3.75 8 8 8h16c4.25 0 8-3.75 8-8zm96-16v320c0 17.5-14.5 32-32 32H32c-17.5 0-32-14.5-32-32V96c0-17.5 14.5-32 32-32h32V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h96V40c0-22 18-40 40-40h16c22 0 40 18 40 40v24h32c17.5 0 32 14.5 32 32z' })
          ),
          _react2.default.createElement(
            'span',
            null,
            'Ev\xE9nements'
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
            { className: 'icon-map', viewBox: '0 0 512 512', width: '512', height: '512', 'aria-hidden': 'true' },
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
    { className: 'Header', role: 'banner' },
    _react2.default.createElement(
      'div',
      { className: 'Header-content' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'Header-logo' },
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 560 420', width: '560', height: '420', 'aria-hidden': 'true' },
          _react2.default.createElement('path', { d: 'M550.489 8.021l-300.337-.666v119.987L130.165 7.355 54.84 82.013l75.325 75.326-120.654-.667v105.99h120.654l-74.659 73.991 75.326 75.326 119.32-119.988v120.654h299.969L347.476 210 550.489 8.021z' })
        )
      ),
      _react2.default.createElement(Nav, null),
      _react2.default.createElement(_Searchbox2.default, null)
    )
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Nav, 'Nav', '/Users/jod/Sites/festitek/site/src/client/components/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Header.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

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

  function SearchBox() {
    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this));

    _this.query = '';
    _this.state = {
      data: undefined
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onReset = _this.onReset.bind(_this);
    _this.close = _this.close.bind(_this);
    return _this;
  }

  _createClass(SearchBox, [{
    key: 'onChange',
    value: function onChange() {
      var _this2 = this;

      this.query = this.searchInput.value.trim();

      if (this.query) this.resetBtn.classList.remove('hidden');else this.resetBtn.classList.add('hidden');

      if (!this.state.data) {
        fetch(this.searchInput.form.action, {
          headers: { 'Accept': 'application/json' },
          credentials: 'same-origin'
        }).then(function (res) {
          return res.json();
        }).then(function (resObj) {
          return _this2.setState({ data: resObj.data });
        }).catch(function (error) {});
      } else {
        this.forceUpdate();
      }
    }
  }, {
    key: 'onReset',
    value: function onReset() {
      this.searchInput.value = "";
      this.searchInput.focus();
      this.onChange();
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
    }
  }, {
    key: 'close',
    value: function close() {
      this.btnOpen.classList.remove('active');
      this.searchboxContent.setAttribute('aria-expanded', 'false');
      this.searchInput.blur();
      this.searchInput.value = '';
      this.resetBtn.classList.add('hidden');
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
      document.body.addEventListener('click', this.onClick.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // TODO : this isnt working..
      document.body.removeEventListener('click', this.onClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var data = this.state.data;

      var result = { events: [], performers: [] };

      if (data && this.query) {
        var regex = new RegExp(this.query, "i");
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
            { height: '24', width: '24', viewBox: '0 0 24 24', className: 'icon-magnifier', 'aria-hidden': 'true' },
            _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z' })
          ),
          _react2.default.createElement(
            'svg',
            { height: '32', width: '32', viewBox: '0 0 32 32', className: 'icon-cross', 'aria-hidden': 'true' },
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
            _react2.default.createElement('input', { type: 'search', id: 'search', 'aria-label': 'Recherche',
              placeholder: 'Recherche', autoComplete: 'off', onChange: this.onChange,
              ref: function ref(el) {
                return _this3.searchInput = el;
              } }),
            _react2.default.createElement(
              'button',
              { type: 'reset', className: 'hidden',
                'aria-label': 'Vider le champ de recherche', onClick: this.onReset,
                ref: function ref(el) {
                  return _this3.resetBtn = el;
                } },
              _react2.default.createElement(
                'svg',
                { height: '32', width: '32', viewBox: '0 0 32 32', className: 'icon-cross', 'aria-hidden': 'true' },
                _react2.default.createElement('path', { d: 'M4 8l4-4 8 8 8-8 4 4-8 8 8 8-4 4-8-8-8 8-4-4 8-8z' })
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', 'aria-label': 'Rechercher' },
              _react2.default.createElement(
                'svg',
                { height: '24', width: '24', viewBox: '0 0 24 24', className: 'icon-magnifier', 'aria-hidden': 'true' },
                _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M16.477 14.356a8.5 8.5 0 1 0-2.122 2.122l6.304 6.303c.117.117.303.12.423 0l1.7-1.699a.304.304 0 0 0-.001-.423l-6.304-6.303zM9.5 16a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Searchbox-results' },
            !result.events.length && !result.performers.length && _react2.default.createElement(
              'div',
              { className: 'Searchbox-results-nope' },
              'Rechercher un \xE9v\xE9nement ou un artiste'
            ),
            result.events.length > 0 && _react2.default.createElement(
              'div',
              { className: 'Searchbox-results-events' },
              _react2.default.createElement(
                'span',
                null,
                'Ev\xE9nements'
              ),
              _react2.default.createElement(
                'ul',
                null,
                result.events.map(function (item) {
                  return _react2.default.createElement(Item, { key: item.id, item: item, close: _this3.close });
                })
              )
            ),
            result.performers.length > 0 && _react2.default.createElement(
              'div',
              { className: 'Searchbox-results-performers' },
              _react2.default.createElement(
                'span',
                null,
                'Artistes'
              ),
              _react2.default.createElement(
                'ul',
                null,
                result.performers.map(function (item) {
                  return _react2.default.createElement(Item, { key: item.id, item: item, close: _this3.close });
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

  __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/jod/Sites/festitek/site/src/client/components/Searchbox.js');

  __REACT_HOT_LOADER__.register(SearchBox, 'SearchBox', '/Users/jod/Sites/festitek/site/src/client/components/Searchbox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Searchbox.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Component definition
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Home
   ========================================================================== */

var _default = function _default(props) {
   return _react2.default.createElement(_reactRouter.Redirect, { to: '/events' });
};

exports.default = _default;
;

var _temp = function () {
   if (typeof __REACT_HOT_LOADER__ === 'undefined') {
      return;
   }

   __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Home.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _EventCard = __webpack_require__(19);

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

var Events = function (_React$Component) {
  _inherits(Events, _React$Component);

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
      var title = this.props.route.title;

      var events = this.state.displayedEvents;

      return _react2.default.createElement(
        'section',
        { className: 'Events' },
        _react2.default.createElement(
          'nav',
          { role: 'navigation' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { exact: true, to: '/events' },
            'Prochains'
          ),
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { exact: true, to: '/events/past' },
            'Pass\xE9s'
          )
        ),
        events.map(function (item) {
          return _react2.default.createElement(_EventCard2.default, { key: item.id, event: item });
        })
      );
    }
  }]);

  return Events;
}(_react2.default.Component);

Events.pageNumber = 0;
var _default = Events;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Events, 'Events', '/Users/jod/Sites/festitek/site/src/client/components/Events.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Events.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {
  require('../css/EventCard.css');
}

/* Component definition
   -------------------------------------------------------------------------- */
/* ==========================================================================
   Event Card
   ========================================================================== */

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
    cover && _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/events/' + id, className: 'EventCard-picture' },
      _react2.default.createElement('img', { src: cover.source, alt: '' })
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
        ),
        pastEvent && _react2.default.createElement(
          'span',
          { className: 'sticker' },
          'Pass\xE9'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'EventCard-meta' },
        _react2.default.createElement(
          'div',
          { className: 'EventCard-place' },
          _react2.default.createElement(
            'svg',
            { className: 'icon-location', viewBox: '0 0 512 512', width: '512', height: '512', 'aria-hidden': 'true' },
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

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/EventCard.js');
}();

;

/***/ }),
/* 20 */
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
   Performers
   ========================================================================== */

if (false) {
  require('../css/Performers.css');
}

/* Sub Components
   -------------------------------------------------------------------------- */
var PerformerCard = function PerformerCard(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    'div',
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


  var title = 'Tous les artistes';
  var list = performers || [];

  // sort list in alphabetical order
  list.sort(function (a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });

  return _react2.default.createElement(
    'section',
    { className: 'Performers' },
    list.map(function (item) {
      return _react2.default.createElement(PerformerCard, { key: item.id, item: item });
    })
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PerformerCard, 'PerformerCard', '/Users/jod/Sites/festitek/site/src/client/components/Performers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Performers.js');
}();

;

/***/ }),
/* 21 */
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
   Error
   ========================================================================== */

if (false) {
  require('../css/Error.css');
}

var Status = function Status(_ref) {
  var code = _ref.code,
      children = _ref.children;
  return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      if (staticContext) staticContext.status = code;
      return children;
    } });
};

/* export stateless component
   -------------------------------------------------------------------------- */

var _default = function _default(props) {
  return _react2.default.createElement(
    Status,
    { code: 404 },
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
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Status, 'Status', '/Users/jod/Sites/festitek/site/src/client/components/Error.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Error.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(2);

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
  return '\n  <div class="Map-infowindow">\n    <img src="' + data.image.source + '" alt="" style="max-width: 100%;" />\n    <a href="' + data.url + '" onclick="event.preventDefault()"\n      style="display: block;\n        margin-top: 3px;\n        font-size: 15px;\n        line-height: 1.1;\n        font-weight: bold;\n        color: rgb(60, 60, 60);"\n    >' + data.title + '</a>\n  </div>';
};

function hasLocation(e) {
  return e.place && e.place.location && e.place.location.latitude && e.place.location.longitude;
}

function currentOrigin() {
  return window.location.protocol + '//' + window.location.host;
}

/* Component definition
   -------------------------------------------------------------------------- */

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(_ref) {
    var events = _ref.events;

    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

    _this.state = {
      events: events
    };
    return _this;
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.google) {
        this.initMap.call(this);
      } else {
        (0, _utils.loadScript)("https://maps.googleapis.com/maps/api/js?key=" + Map.key).then(this.initMap.bind(this));
      }
    }
  }, {
    key: 'initMap',
    value: function initMap() {
      var _this2 = this;

      var events = this.state.events;

      var _events$find = events.find(function (e) {
        return hasLocation(e);
      }),
          location = _events$find.place.location;

      var locatedEvents = [];

      var map = new google.maps.Map(document.getElementById('map'), {
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

      var markers = locatedEvents.map(function (e) {
        var marker = new google.maps.Marker(e);
        var infowindow = new google.maps.InfoWindow({
          content: infowindowTpl(e, _this2.props.history),
          maxWidth: 120
        });
        marker.addListener('click', function () {
          return infowindow.open(map, marker);
        });
        return marker;
      });

      window.addEventListener('click', function (e) {
        if (_this2.map.contains(e.target) && e.target.tagName === 'A') {
          _this2.props.history.push(e.target.pathname);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'section',
        { className: 'Map' },
        _react2.default.createElement('div', { id: 'map', ref: function ref(el) {
            return _this3.map = el;
          } })
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

  __REACT_HOT_LOADER__.register(infowindowTpl, 'infowindowTpl', '/Users/jod/Sites/festitek/site/src/client/components/Map.js');

  __REACT_HOT_LOADER__.register(hasLocation, 'hasLocation', '/Users/jod/Sites/festitek/site/src/client/components/Map.js');

  __REACT_HOT_LOADER__.register(currentOrigin, 'currentOrigin', '/Users/jod/Sites/festitek/site/src/client/components/Map.js');

  __REACT_HOT_LOADER__.register(Map, 'Map', '/Users/jod/Sites/festitek/site/src/client/components/Map.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Map.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Event = __webpack_require__(6);

var _Event2 = _interopRequireDefault(_Event);

var _Performer = __webpack_require__(7);

var _Performer2 = _interopRequireDefault(_Performer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* ==========================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Admin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ========================================================================== */

if (false) {
  require('../css/Admin.css');
}

function postJSON(url, obj) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(function (res) {
    return res.json();
  });
}

var AddPerformer = function (_React$Component) {
  _inherits(AddPerformer, _React$Component);

  function AddPerformer(props) {
    _classCallCheck(this, AddPerformer);

    var _this = _possibleConstructorReturn(this, (AddPerformer.__proto__ || Object.getPrototypeOf(AddPerformer)).call(this));

    _this.state = {
      event: props.event
    };
    return _this;
  }

  _createClass(AddPerformer, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      postJSON('/events/' + this.props.event.id, {
        performer: e.target.elements['performer'].value
      }).then(function (data) {
        return _this2.props.onSubmit(data);
      }).catch(function (error) {});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.onSubmit.bind(this) },
        _react2.default.createElement(
          'h3',
          null,
          'Line-up'
        ),
        _react2.default.createElement('input', { type: 'text', name: 'performer', placeholder: 'Ajouter un artiste' })
      );
    }
  }]);

  return AddPerformer;
}(_react2.default.Component);

var Item = function (_React$Component2) {
  _inherits(Item, _React$Component2);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this3 = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this3.state = {
      item: props.item
    };
    return _this3;
  }

  _createClass(Item, [{
    key: 'addEventLink',
    value: function addEventLink(e) {
      var _this4 = this;

      e.preventDefault();
      var form = e.target;
      postJSON('/events/' + this.props.item.id, {
        links: {
          ws: form.elements['ws'].value,
          ra: form.elements['ra'].value
        }
      }).then(function (data) {
        _this4.setState({
          item: data.item
        });
        _this4.props.onAdd(data);
      }).catch(function (error) {});
    }
  }, {
    key: 'addPerformerLink',
    value: function addPerformerLink(e) {
      var _this5 = this;

      e.preventDefault();
      postJSON('/performers/' + this.props.item.id, {
        links: {
          ws: this.performerLinkWS.value,
          sc: this.performerLinkSC.value,
          ra: this.performerLinkRA.value
        }
      }).then(function (data) {
        _this5.setState({
          item: data.item
        });
        _this5.props.onAdd(data);
      }).catch(function (error) {});
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var item = this.props.item;

      if (item.lineup) {
        this.eventLinkWS.value = item.links.ws || '';
        this.eventLinkRA.value = item.links.ra || '';
      } else if (item.events) {
        this.performerLinkWS.value = item.links.ws || '';
        this.performerLinkSC.value = item.links.sc || '';
        this.performerLinkRA.value = item.links.ra || '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

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
              _react2.default.createElement('input', { type: 'url', name: 'ws', placeholder: 'Site web',
                ref: function ref(el) {
                  return _this6.eventLinkWS = el;
                },
                defaultValue: item.links.ws })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'ra', placeholder: 'Resident Advisor',
                ref: function ref(el) {
                  return _this6.eventLinkRA = el;
                },
                defaultValue: item.links.ra })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'submit', className: 'hidden' })
            )
          ),
          _react2.default.createElement(AddPerformer, { event: item,
            onSubmit: this.props.onAdd })
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
              _react2.default.createElement('input', { type: 'url', name: 'ws', placeholder: 'Site web',
                ref: function ref(el) {
                  return _this6.performerLinkWS = el;
                },
                defaultValue: item.links.ws })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'sc', placeholder: 'Soundcloud',
                ref: function ref(el) {
                  return _this6.performerLinkSC = el;
                },
                defaultValue: item.links.sc })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('input', { type: 'url', name: 'ra', placeholder: 'Resident Advisor',
                ref: function ref(el) {
                  return _this6.performerLinkRA = el;
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

var Admin = function (_React$Component3) {
  _inherits(Admin, _React$Component3);

  function Admin(props) {
    _classCallCheck(this, Admin);

    var _this7 = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this));

    _this7.state = {
      events: props.events,
      performers: props.performers,
      item: null
    };
    return _this7;
  }

  _createClass(Admin, [{
    key: 'showEvent',
    value: function showEvent(event, e) {
      var _this8 = this;

      e && e.preventDefault();
      if (event.lineup.length && typeof event.lineup[0] === "string") {
        event.lineup = event.lineup.map(function (id) {
          return _this8.state.performers.find(function (p) {
            return p.id === id;
          });
        });
      }
      this.setState({
        item: event
      });
    }
  }, {
    key: 'showPerformer',
    value: function showPerformer(performer, e) {
      var _this9 = this;

      e && e.preventDefault();
      if (performer.events.length && typeof performer.events[0] === "string") {
        performer.events = performer.events.map(function (id) {
          return _this9.state.events.find(function (e) {
            return e.id === id;
          });
        });
      }
      this.setState({
        item: performer
      });
    }
  }, {
    key: 'addEvent',
    value: function addEvent(e) {
      var _this10 = this;

      e.preventDefault();
      var event_fb_id = e.target.elements['event'].value;
      postJSON('/events', {
        event: event_fb_id
      }).then(function (data) {
        return _this10.setState({
          item: data.events.find(function (e) {
            return e.facebook_id === event_fb_id;
          }),
          events: data.events
        });
      }).catch(function (error) {
        _this10.setState({
          error: error,
          item: null
        });
      });
    }
  }, {
    key: 'addPerformer',
    value: function addPerformer(e) {
      var _this11 = this;

      e.preventDefault();
      var performer_fb_id = e.target.elements['performer'].value;
      postJSON('/performers', {
        performer: performer_fb_id
      }).then(function (data) {
        return _this11.setState({
          item: data.performers.find(function (p) {
            return p.facebook_id === performer_fb_id;
          }),
          performers: data.performers
        });
      }).catch(function (error) {
        _this11.setState({
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
      var _this12 = this;

      var _state = this.state,
          events = _state.events,
          performers = _state.performers,
          item = _state.item,
          error = _state.error;

      // sort events and performers in alphabetical order

      events.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });

      performers.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });

      return _react2.default.createElement(
        'main',
        { role: 'main', className: 'Admin' },
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
                  return _this12.eventList = el;
                } },
              events.map(function (event) {
                return _react2.default.createElement(
                  'li',
                  { key: event.id },
                  _react2.default.createElement(
                    'a',
                    { href: "/events/" + event.id, onClick: _this12.showEvent.bind(_this12, event) },
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
                  return _this12.performerList = el;
                } },
              performers.map(function (performer) {
                return _react2.default.createElement(
                  'li',
                  { key: performer.id },
                  _react2.default.createElement(
                    'a',
                    { href: "/performers/" + performer.id, onClick: _this12.showPerformer.bind(_this12, performer) },
                    performer.name
                  )
                );
              })
            )
          )
        ),
        item ? _react2.default.createElement(Item, { item: item, onAdd: this.onAdd.bind(this) }) : error && _react2.default.createElement(
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

  __REACT_HOT_LOADER__.register(postJSON, 'postJSON', '/Users/jod/Sites/festitek/site/src/client/components/Admin.js');

  __REACT_HOT_LOADER__.register(AddPerformer, 'AddPerformer', '/Users/jod/Sites/festitek/site/src/client/components/Admin.js');

  __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/jod/Sites/festitek/site/src/client/components/Admin.js');

  __REACT_HOT_LOADER__.register(Admin, 'Admin', '/Users/jod/Sites/festitek/site/src/client/components/Admin.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/client/components/Admin.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(_ref) {
  var status = _ref.status,
      meta = _ref.meta,
      body = _ref.body,
      data = _ref.data;

  return process.env.NODE_ENV === 'production' ? '\n    <!DOCTYPE html>\n    <html lang="fr">\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <title>' + meta.title + '</title>\n        <meta name="description" content="">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <meta property="og:title" content="' + meta.title + '">\n        <meta property="og:url" content="' + meta.url + '">\n        <meta property="og:image" content="' + meta.image + '">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">\n        <link rel="stylesheet" href="/assets/styles.css">\n      </head>\n      <body>\n        <div id="root">' + body + '</div>\n        <script>window.__INITIAL_STATE__ = { status: ' + status + ', data: ' + data + ' }</script>\n        <script defer src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  ' : '\n    <!DOCTYPE html>\n    <html lang="fr">\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <title>' + meta.title + '</title>\n        <meta name="description" content="">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <meta property="og:title" content="' + meta.title + '">\n        <meta property="og:url" content="' + meta.url + '">\n        <meta property="og:image" content="' + meta.image + '">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css">\n      </head>\n      <body>\n        <div id="root"></div>\n        <script>window.__INITIAL_STATE__ = { status: ' + status + ', data: ' + data + ' }</script>\n        <script defer src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  ';
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/server/template.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _https = __webpack_require__(26);

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app_id = '***REMOVED***'; /* ==========================================================================
                                   Facebook utilities
                                   ========================================================================== */

var app_secret = '93376e348e73ea9d6b874db0d01f60d5';
var access_token = app_id + '|' + app_secret;
var token_param = '&access_token=' + access_token;

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

  __REACT_HOT_LOADER__.register(app_id, 'app_id', '/Users/jod/Sites/festitek/site/src/server/fb.js');

  __REACT_HOT_LOADER__.register(app_secret, 'app_secret', '/Users/jod/Sites/festitek/site/src/server/fb.js');

  __REACT_HOT_LOADER__.register(access_token, 'access_token', '/Users/jod/Sites/festitek/site/src/server/fb.js');

  __REACT_HOT_LOADER__.register(token_param, 'token_param', '/Users/jod/Sites/festitek/site/src/server/fb.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jod/Sites/festitek/site/src/server/fb.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* =====================================
    Webpack development config
   ===================================== */

var merge = __webpack_require__(28);
var common = __webpack_require__(29);
var webpack = __webpack_require__(3);

module.exports = merge(common, {
  entry: {
    app: ["react-hot-loader/patch", "webpack-hot-middleware/client?noInfo=false", "./src/client/index"]
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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

/* =====================================
    Webpack commmon config
   ===================================== */

var path = __webpack_require__(4);
var webpack = __webpack_require__(3);

module.exports = {
  entry: {
    app: "./src/client/index"
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
/* 30 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);