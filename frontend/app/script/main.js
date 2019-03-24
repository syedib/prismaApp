require.config({
    baseUrl: "js",
    
      // alias libraries paths
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min',
    },
  
    shim: {
    },
  
    // kick start application
    deps: ['app']
  
  });