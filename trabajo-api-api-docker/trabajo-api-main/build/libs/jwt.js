"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccessToken = createAccessToken;
var _config = _interopRequireDefault(require("../config.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function createAccessToken(payload) {
  return new Promise(function (resolve, reject) {
    var token = _jsonwebtoken["default"].sign(payload, _config["default"].SECRET, {
      expiresIn: 86400
    }, function (err, token) {
      if (err) reject(err);
      resolve(token);
    });
  });
}