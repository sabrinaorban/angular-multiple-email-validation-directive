** Angular Multiple Email Validation Directive **

- add 'multiple-emails' directive on input element;
- $rootScope will broadcast the 'valid-email' if at least one email is valid;
- listen for $rootScope.$broadcast('valid-email', true); 
    Example: 
    ```
    $scope.$on('valid-email', function(event, data){
        //do something
    });
    ```


