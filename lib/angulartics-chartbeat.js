(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.chartbeat
 * Enables analytics support for Chartbeat (http://chartbeat.com)
 */
angular.module('angulartics.chartbeat', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  angulartics.waitForVendorApi('pSUPERFLY', 500, function (pSUPERFLY) {
    $analyticsProvider.registerPageTrack(function (path) {
      pSUPERFLY.virtualPage(path);
    });
  });

  $analyticsProvider.registerEventTrack(function () {
    console.warn('Chartbeat doesn\'t support event tracking -- silently ignored.');
  });

}]);

})(window, window.angular);
