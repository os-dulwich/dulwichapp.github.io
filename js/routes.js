angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.ernestShackleton', {
    url: '/shackleton page',
    views: {
      'tab4': {
        templateUrl: 'templates/ernestShackleton.html',
        controller: 'ernestShackletonCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.dulwichCollege'
      2) Using $state.go programatically:
        $state.go('tabsController.dulwichCollege');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/dulwich college
      /page1/tab2/dulwich college
  */
  .state('tabsController.dulwichCollege', {
    url: '/dulwich college',
    views: {
      'tab3': {
        templateUrl: 'templates/dulwichCollege.html',
        controller: 'dulwichCollegeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/dulwichCollege.html',
        controller: 'dulwichCollegeCtrl'
      }
    }
  })

  .state('tabsController.dulwichVillage', {
    url: '/dulwich village',
    views: {
      'tab3': {
        templateUrl: 'templates/dulwichVillage.html',
        controller: 'dulwichVillageCtrl'
      }
    }
  })

  .state('tabsController.restaurantes', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/restaurantes.html',
        controller: 'restaurantesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.schools', {
    url: '/schools',
    views: {
      'tab3': {
        templateUrl: 'templates/schools.html',
        controller: 'schoolsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/dulwich village')


});