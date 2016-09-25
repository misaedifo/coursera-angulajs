(function () {
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope) {
        $scope.lunches = '';
        $scope.messaje = '';
        $scope.color='';

        $scope.checkIfTooMuch = function () {
            var data = $scope.lunches.split(',');
            if ($scope.lunches.length == 0) {
                $scope.messaje = 'Please entre data first';
                $scope.border='borderred';
                return;
            }
            if (data.length <= 3) {
                $scope.messaje = 'Enjoy!';
                $scope.color='green';
                $scope.border='bordergreen';
            }
            else{
              
                $scope.messaje = 'Too much!';
                $scope.color='red';
                $scope.border='bordergreen';
            }
        }
        //  var lunches=$scope.lunches.split(,);

    }
})();