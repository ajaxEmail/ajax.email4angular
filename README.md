# ajax.email4angular

#### ajax.email service for angular
---

## Get Started

**(1)** Get ajax.email4angular:
- clone this repository
- or via **[Bower](http://bower.io/)**: by running `$ bower install ajax.email4angular` from your console

**(2)** Include `ajaxEmail.js` in your `index.html`, after including Angular itself

**(3)** Add `'ajaxEmail'` to your main module's list of dependencies

When you're done, your setup should look similar to the following:

```html
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
    <script src="js/ajaxEmail.js"></script>
    <script>
        var myApp = angular.module('myApp', ['ajax.email']);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```

**(4)** Configure your apiKey:

```javascript
myApp.config(['ajaxEmailSetup'],function(ajaxEmailSetup) {
	ajaxEmailSetup.setApiKey('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
});
```

**(4)** Use the service to send emails on any point of your app:

```javascript
myApp.controller(['$scope', 'ajaxEmail'],function($scope, ajaxEmail) {
	$scope.onReportError = function() {
  		ajaxEmail.send({
          subject: 'Reporting error directly from app frontend [%id%]'
          text: $scope.appError
		}).then(function(ok) {
          alert('Thanks for submiting the error. Your submited code is: ' + ok.id);
		});
	}
});
```









