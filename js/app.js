var RegistrationController = function RegistrationController($scope) {
    var self = this;

    self.user = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };

    self.register = function register() {
        self.message = 'Welcome ' + self.user.firstname + self.user.lastname;
    };

};


RegistrationController.$inject = ['$scope'];


angular.module('myApp', [])
    .controller('RegistrationController', RegistrationController);
