function ContactController($scope) {
  var vm = this;
  
  vm.name = 'Steve Jobs';
  vm.email = 'steve@apple.com';
  vm.phone = '0987654321';
 
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);