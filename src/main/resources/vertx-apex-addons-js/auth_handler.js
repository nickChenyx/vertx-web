/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-apex-addons-js/auth_handler */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JAuthHandler = io.vertx.ext.apex.addons.AuthHandler;

/**

 @class
*/
var AuthHandler = function(j_val) {

  var j_authHandler = j_val;
  var that = this;

  /**

   @public
   @param role {string} 
   @return {AuthHandler}
   */
  this.addRole = function(role) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new AuthHandler(j_authHandler.addRole(role));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param permission {string} 
   @return {AuthHandler}
   */
  this.addPermission = function(permission) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new AuthHandler(j_authHandler.addPermission(permission));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param roles {Array.<string>} 
   @return {AuthHandler}
   */
  this.addRoles = function(roles) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return new AuthHandler(j_authHandler.addRoles(utils.convParamSetBasicOther(roles)));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param permissions {Array.<string>} 
   @return {AuthHandler}
   */
  this.addPermissions = function(permissions) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return new AuthHandler(j_authHandler.addPermissions(utils.convParamSetBasicOther(permissions)));
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_authHandler;
};

// We export the Constructor function
module.exports = AuthHandler;