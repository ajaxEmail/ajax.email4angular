/**
 * ajax.email for AngularJS
 * @version v0.1.1
 * @link http://ajax.email/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ajax.email';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

/**
 * @ngdoc overview
 * @name ajax.email
 *
 * @description
 * # ajax.email
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ajax.email script -->
 *   <script src="js/ajaxEmail.min.js"></script>
 *   <script>
 *     // ...and add 'ajax.email' as a dependency
 *     var myApp = angular.module('myApp', ['ajax.email']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ajax.email', []);

/**
 * @ngdoc object
 * @name ajax.email.$send
 *
 * @description
 * Send an email.
 */

function AjaxEmail($http, apiKey, globalOptions) {

  /**
   * @ngdoc function
   * @name ajax.email.ajaxEmail#send
   * @methodOf ajax.email
   *
   * @description
   * Send the email.
   * <pre>
   * ajaxEmail.send(emailOptions)
   * </pre>
   *
   * @param {object} emailOptions
   * @return {promise} the $http promise calling the ajax.email service
   */
  this.send = function (emailOptions) {
    console.log('ajax.email SEND',apiKey,globalOptions,emailOptions, $http);
    return $http({
      method: 'POST',
      url: 'http://ajax.email/v1/send',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': apiKey
      },
      data: angular.extend(globalOptions,emailOptions)
    });
  }
}

/**
 * @ngdoc object
 * @name ajax.email.ajaxEmailSetup
 *
 * @description
 * `ajaxEmailSetup` is used to configure the propper apiKey. 
 */
AjaxEmailProvider.$inject = [];
function AjaxEmailProvider() {
    var apiKey = '';
    var globalOptions = {};
    /**
    * @ngdoc function
    * @name ajax.email.ajaxEmailSetup#setApiKey
    * @methodOf ajax.email.ajaxEmailSetup
    *
    * @description
    * Set the apiKey for this service.
    *
    * @example
    * <pre>
    * var app = angular.module('app', ['ajax.email']);
    *
    * app.config(function (ajaxEmailSetup) {
    *   // Set the apiKey for ajaxEmail
    *   ajaxEmailSetup.setApiKey('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    * </pre>
    *
    * @param {apiKey} the api key get from the ajax.email website for this project.
    *
    * @return {undefined}
    */
    this.setApiKey = function (projectApiKey) {
        apiKey = projectApiKey;
    };

    this.$get = $get;
    $get.$inject = ['$http'];
    function $get(   $http ) {
        return new AjaxEmail($http, apiKey, globalOptions);
    }
}
angular.module('ajax.email').provider('ajaxEmail', AjaxEmailProvider);

})(window, window.angular);