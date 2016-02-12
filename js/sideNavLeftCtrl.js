
politify.controller('SideNavLeftCtrl', function ($scope, $mdSidenav) {
    $scope.close = function () {
        $mdSidenav('left').close();
    };
});
