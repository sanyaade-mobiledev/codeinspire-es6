define(['exports', 'module', './snippet', './constants/urls'], function (exports, module, _snippet, _constantsUrls) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var CssDeck = (function (_Snippet) {
		_inherits(CssDeck, _Snippet);

		function CssDeck() {
			_classCallCheck(this, CssDeck);

			_get(Object.getPrototypeOf(CssDeck.prototype), 'constructor', this).call(this);
		}

		_createClass(CssDeck, [{
			key: 'fetchSnippets',
			value: function fetchSnippets(url, element) {

				//super.fetchSnippets(ajaxUrl.CSSDECK_URL, '.snippets-cssdeck');
				this.sendRequest(_constantsUrls.CSSDECK_URL, '.snippets-cssdeck');
			}
		}, {
			key: 'sendRequest',
			value: function sendRequest(url, element) {
				$.ajax({
					method: "GET",
					url: url,
					beforeSend: _get(Object.getPrototypeOf(CssDeck.prototype), 'ajaxProgress', this).call(this, "start", element),
					success: this.handleResults.bind(this)
				});
			}
		}, {
			key: 'handleResults',
			value: function handleResults(data) {
				var _this = this;

				var results = data.query.results.item;

				var items = results.map(function (r) {
					return _this.createSnippet(r);
				});
			}
		}, {
			key: 'createSnippet',
			value: function createSnippet(r) {
				var pubDate = r.pubDate;
				var origLink = r.origLink;
				var title = r.title;
				var description = r.description;

				var text = $(description).html();

				// YGL returns date string wrapped with u21B5 chars
				var friendlyDate = _get(Object.getPrototypeOf(CssDeck.prototype), 'parseDate', this).call(this, pubDate.replace(/\u21B5/g, "").trim());

				var snippet = '<li class="snippets__item"><div class="test">\n\t\t<div class="snippets__more"><a href="' + origLink + '" class="snippets__codelink">' + title + '</a></div>\n\t\t<h5 class="snippets__creator">By Anon</h5>\n\t\t<p>' + text + '</p>\n\t\t</div></li>';

				_get(Object.getPrototypeOf(CssDeck.prototype), 'insertSnippets', this).call(this, ".snippets-cssdeck", snippet);
				_get(Object.getPrototypeOf(CssDeck.prototype), 'ajaxProgress', this).call(this, "end", ".snippets-cssdeck");
			}
		}, {
			key: 'insertSnippets',
			value: function insertSnippets(snippetArea, snippets) {}
		}, {
			key: 'parseDate',
			value: function parseDate(itemDate) {}
		}, {
			key: 'ajaxProgress',
			value: function ajaxProgress(status, element) {}
		}]);

		return CssDeck;
	})(_snippet);

	module.exports = CssDeck;
});
//# sourceMappingURL=cssdeck-snippets.js.map
