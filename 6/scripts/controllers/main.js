var scope;
function main($scope){
    $scope.msg0 = "Msg 0";
    $scope.msg1 = "Msg1";
    console.log($scope);
    scope = $scope;

};

app.controller("main", main);