
function main($scope){
    var student = {
        firstName: "Aniket",
        lastName: "Jha",
        age: 21,
        branch: "CSE"
    };
    $scope.student = student;
};

app.controller("main", main);