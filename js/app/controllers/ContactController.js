function ContactController($scope) {
  var vm = this;
  
  this.name = 'Bill Gates';
  this.title = 'Founder';
  this.email = 'bill@microsoft.com';
 
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);