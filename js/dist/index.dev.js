"use strict";

require("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js");

require("https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.1/marked.js");

require("https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js");

var _index = _interopRequireDefault(require("../pages/index.js"));

var _index2 = _interopRequireDefault(require("../items/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Page =
/*#__PURE__*/
function () {
  function Page() {
    _classCallCheck(this, Page);

    this.sName = 'Yutong Wei';
    this.sUrlToEmailer = 'https://limitless-woodland-68108.herokuapp.com/';
    var sBase = document.location.pathname;

    if (sBase[sBase.length - 1] == '/') {
      this.sBase = sBase.substr(0, sBase.length - 1);
    } else {
      var sFile = '/' + document.location.pathname.split('/').pop();
      this.sBase = sBase.substr(0, sBase.length - sFile.length);
    }
  }

  _createClass(Page, [{
    key: "getImageSrc",
    value: function getImageSrc(sImage) {
      if (sImage.match(/\:\/\//)) {
        return sImage;
      } else {
        return this.sBase + sImage;
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log('render called on page');
    }
  }]);

  return Page;
}();

var Items =
/*#__PURE__*/
function (_Page) {
  _inherits(Items, _Page);

  function Items(oItems) {
    var _this;

    _classCallCheck(this, Items);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Items).call(this));
    _this.oItems = oItems;
    _this.nCurrentItem = 0;
    $('article#items').click(function (evt) {
      evt.preventDefault();
      var nItem = evt.target.id[4];

      if (nItem) {
        _this.nCurrentItem = evt.target.id[4];
        $('article#current').html('');
        $('section#itemsInner').html('');

        _this.render();
      }
    });
    return _this;
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {// $.get(
      //   `${this.sBase}/items/${this.oItems[this.nCurrentItem].fname}`,
      //   (sMarkdown) => {
      //     $('article#current').append(`
      //             <div class="markdownItem">${marked(sMarkdown)}</div>
      //         `)
      //   }
      // )
      // for (let n = 0; n < this.oItems.length; n++) {
      //   if (n != this.nCurrentItem) {
      //     $('section#itemsInner').append
      //   }
      // }
    }
  }]);

  return Items;
}(Page);

var Section =
/*#__PURE__*/
function (_Page2) {
  _inherits(Section, _Page2);

  function Section(oOptions) {
    var _this2;

    _classCallCheck(this, Section);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Section).call(this));
    _this2.oOptions = oOptions;
    return _this2;
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      $.get("".concat(this.sBase, "/pages/").concat(this.oOptions.fname), function (sMarkdown) {
        $("#".concat(_this3.oOptions.title)).prepend("\n                <div class=\"markDownPage\">".concat(marked(sMarkdown), "</div>\n            ")); //   if (this.oOptions.specialImage) {
        //     $(`#${this.oOptions.title}`).prepend(`
        //             <div class="pageImage"><img src="${this.getImageSrc(
        //               this.oOptions.specialImage
        //             )}" alt="${this.oOptions.title}"/></div>
        //             `)
        //   }
      });
    }
  }]);

  return Section;
}(Page);

var Article =
/*#__PURE__*/
function (_Page3) {
  _inherits(Article, _Page3);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, _getPrototypeOf(Article).apply(this, arguments));
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      for (var n = 0; n < _index["default"].length; n++) {
        $('article#pages').append("<section id=\"".concat(_index["default"][n].title, "\"></section>"));
        new Section(_index["default"][n]).render();
      }
    }
  }]);

  return Article;
}(Page);

var Footer =
/*#__PURE__*/
function (_Page4) {
  _inherits(Footer, _Page4);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var yToday = new Date().getFullYear();
      $('footer').html("&copy; ".concat(yToday, " ").concat(this.sName));
    }
  }]);

  return Footer;
}(Page);

var Contact =
/*#__PURE__*/
function (_Page5) {
  _inherits(Contact, _Page5);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      $('#Contact').append("\n        <form action=\"".concat(this.sUrlToEmailer, "\" method=\"POST\">\n        <div class=\"form-group\">\n        <div class =\"abc\">\n        <label><span class=\"leftWidth\">Name: </span><input name=\"name\" placeholder=\"name\" class=\"form-control\" required /></label>\n            </div>\n            <div class=\"form-group\">\n            <div class=\"abc\">\n                <!-- Add required to make the user enter something. Add type=\"email\" to make it have an @ symbol-->\n                <label><span class=\"leftWidth\">Email:</span><input name=\"email\" placeholder=\"email\" type=\"email\" class=\"form-control\"\n                        required /></label>\n            </div>\n            <div class=\"form-group\">\n            <div class=\"abc\">\n                <label><span class=\"leftWidth\">Message:</span><textarea name=\"message\" placeholder=\"type your message here\" class=\"form-control\"\n                        required></textarea></label>\n                        </div>\n            <div class =\"abcd\">\n            <button type=\"submit\" style=\"background-color:lightyellow\">Send Message</button>\n            </div>\n            </form>    \n        "));
    }
  }]);

  return Contact;
}(Page);

var Nav =
/*#__PURE__*/
function (_Page6) {
  _inherits(Nav, _Page6);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var sMenu = '';

      for (var n = 0; n < _index["default"].length; n++) {
        var sMenuItem = _index["default"][n].title;

        if (sMenuItem != 'index') {
          sMenu += "<li id=\"".concat(sMenuItem, "Click\"><a href=\"#").concat(sMenuItem, "\">").concat(sMenuItem, "</a></li>");
        }
      }

      $('nav').html("\n        <div class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a id=\"navbar-brand\" class=\"navbar-brand\" href=\"#\">Portfolio of ".concat(this.sName, "</a>\n            </div>\n            <div class=\"navbar-collapse collapse\">\n          </button>\n                <span class=\"inlines\"><input type=\"email\" class=\"form-control inputVal\" id=\"exampleInputEmail2\" placeholder=\"jane.doe@example.com\">\n           <a href=\"#\" class=\"btn btn-primary active Search\" role=\"button\">Search</a></span>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    ").concat(sMenu, "\n                </ul>\n            </div>\n        </div>\n        "));
    }
  }]);

  return Nav;
}(Page);

var ViewProject =
/*#__PURE__*/
function (_Page7) {
  _inherits(ViewProject, _Page7);

  function ViewProject() {
    _classCallCheck(this, ViewProject);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewProject).apply(this, arguments));
  }

  _createClass(ViewProject, [{
    key: "render",
    value: function render() {
      $('#ViewProject').html("\n        <div class=\"container\">\n            <a href=\"#\" class=\"btn btn-primary back\" role=\"button\">back</a>\n            <div class=\"viewProjectText\">\u8FD9\u91CC\u662Ftext</div>\n        </div>\n        ");
    }
  }]);

  return ViewProject;
}(Page);

var listArray = [{
  title: 'Self-introduction',
  start: 'Personal introduction, family members, etc.',
  img: './img/IMG_6854(20200930-023227).jpg',
  text: 'My name is YutongWei, I am 21 years old and I am a sophomore in UX major. I switched from BTM major to UX major because I think the economy is not very suitable for me. The picture shows my sister and I. We grew up together and have a good relationship. She also studied in Canada like me, but she was in Victoria University, BC. Victoria is a beautiful place, I often visit her. We come from the northeast region of China, which is a place with a cold climate. Like Toronto, it will snow heavily. My family members as well as my parents, my grandma and grandfather, we will often travel together.'
}, {
  title: 'Travel debris',
  start: 'Specific memories about my trip.',
  img: './img/748F61FFF5A17E8A710050C9FC597BC3.png',
  text: 'This picture was taken in Vancouver last year. At that time, my family and I went to visit my sister, and then we went to this park, The Butchart Gardens. I remember that the tickets were not very cheap, but I can’t remember the specific numbers. Up. We played here for a long time and then went home after dark. This is a very precious memory for me. It is difficult for family members to get together after adulthood. Every group opportunity or trip makes me remember deeply. This year, because of the epidemic, the school was forced to implement an online lesson mechanism, so I can go back to school in China. Now I stay with my family every day. I feel very happy and cherish my life.'
}, {
  title: 'Leisure time',
  start: 'My leisure time allocation and story.',
  img: './img/119B1D4A36B3636060792418296F6193.png',
  text: 'In my free time, I will choose to play games, and games occupy a part of my life. So I spent my living expenses on a computer with a high configuration, and bought a good keyboard and mouse, in order for me to have a better experience. The games I often play are shooting games, such as PUBG on the steam platform, and I also play many other shooting games. I have a lot of friends who play games together. Games can bring me fun but I don’t want to play alone. These friends have met through different games. Some of them and I have become good friends. Now we are not only communicating about games. I usually talk about the unhappiness in life, and exchange learning. I will manage my time well, and I will not keep playing games to affect my normal life. And I also hope that friends in life can also join my game, I think it will be more interesting.'
}];
var inputValue = '';

var Portfolio =
/*#__PURE__*/
function (_Page8) {
  _inherits(Portfolio, _Page8);

  function Portfolio() {
    var _this4;

    _classCallCheck(this, Portfolio);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).call(this));
    _this4.header = new Page();
    _this4.nav = new Nav();
    _this4.items = new Items(_index2["default"]);
    _this4.article = new Article();
    _this4.footer = new Footer();
    _this4.contact = new Contact();
    _this4.ViewProject = new ViewProject();
    return _this4;
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      this.header.render();
      this.nav.render();
      this.items.render();
      this.article.render();
      this.footer.render();
      this.contact.render();
      this.ViewProject.render();
    }
  }]);

  return Portfolio;
}(Page);

$(document).ready(function () {
  new Portfolio().render();
  $('.right-button').click(function (evt) {
    evt.preventDefault();
    $('section#itemsInner').animate({
      scrollLeft: '+=200px'
    }, 'fast');
  });
  filterFunction(listArray);
  $('.left-button').click(function (evt) {
    evt.preventDefault();
    $('section#itemsInner').animate({
      scrollLeft: '-=200px'
    }, 'fast');
  });
  $('.inputVal').keyup(function (e) {
    // console.log(e.target.value)
    inputValue = e.target.value;
  });
  $('.Search').click(function () {
    console.log(inputValue);
    var arrays = listArray.filter(function (v, i) {
      return v.title.includes(inputValue);
    });
    filterFunction(arrays);
  });
  $('#ContactClick').click(function () {
    $('#About').css('display', 'none');
    $('#ViewProject').css('display', 'none');
    $('#items').css('display', 'none');
    $('#current').css('display', 'none');
    $('#Contact').css('display', 'block');
  });
  $('#AboutClick').click(function () {
    $('#About').css('display', 'block');
    $('#items').css('display', 'none');
    $('#ViewProject').css('display', 'none');
    $('#current').css('display', 'none');
    $('#Contact').css('display', 'none');
  });
  $('#navbar-brand').click(function () {
    $('#About').css('display', 'none');
    $('#ViewProject').css('display', 'none');
    $('#items').css('display', 'block');
    $('#current').css('display', 'block');
    $('#Contact').css('display', 'none');
  });
  $('#Contact').css('display', 'none');
  $('#ViewProject').css('display', 'none');
  $('#About').css('display', 'none');
  console.log(345);
  $('.jumpBtn').click(function () {
    var _this5 = this;

    $('.jumpBtn').map(function (i, v) {
      if (_this5 == v) {
        console.log(v, i);
        $('#About').css('display', 'none');
        $('#ViewProject').css('display', 'block');
        $('#items').css('display', 'none');
        $('#current').css('display', 'none');
        $('#Contact').css('display', 'none');
        $('.viewProjectText').html(listArray[i].text);
      }
    });
  });
  $('.back').click(function () {
    $('#About').css('display', 'none');
    $('#ViewProject').css('display', 'none');
    $('#items').css('display', 'block');
    $('#current').css('display', 'block');
    $('#Contact').css('display', 'none');
  });
});

function filterFunction(listArray) {
  var str = '';
  listArray.forEach(function (v, i) {
    str += " <div class=\"itemList\">\n                    <dl>\n                    <dt><img src=\"".concat(v.img, "\" alt=\"\" /></dt>\n                        <dd>\n                            <h2>").concat(v.title, "</h2>\n                            <p class=\"listP\">").concat(v.start, "</p>\n                            <button\n                            type=\"button\"\n                            class=\"btn btn-primary jumpBtn test\"\n                            onclick=\"\"\n                            >\n                            View Project\n                            </button>\n                        </dd>\n                    </dl>\n                </div>");
  });
  $('.inners').html(str);
}