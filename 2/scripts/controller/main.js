

function main($scope){
    $scope.msg0 = "Controller->View 0";
    $scope.msg1 = "Controller->View 1";
    console.log($scope);

};

var main = app.controller("main", main);