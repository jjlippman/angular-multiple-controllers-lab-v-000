function StaffController($scope) {
  this.name = 'JIm';
  this.phone = 'boss';
  this.email = 'Jim@microsoft.com';
}

angular
  .module('app')
  .controller('ContactController', ContactController);