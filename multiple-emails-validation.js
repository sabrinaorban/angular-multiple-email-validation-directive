angular.module('app')
.directive('multipleEmails', function ($rootScope) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {

            var emails = viewValue.split(',');
            var re = /\S+@\S+\.\S+/;

                var validityArr = emails.map(function(str){
                    return re.test(str.trim());
                });

                var atLeastOneInvalid = false;
                angular.forEach(validityArr, function(value) {
                    console.log(value, 'value');
                if(value === false) {
                    atLeastOneInvalid = true;
                }

                });
                if(!atLeastOneInvalid) {
                $rootScope.$broadcast('valid-email', true);
                ctrl.$setValidity('multipleEmails', true);
                return viewValue;
                } else {
                ctrl.$setValidity('multipleEmails', false);
                $rootScope.$broadcast('valid-email', false);
                return undefined;
                }
            });
        }
    };
});