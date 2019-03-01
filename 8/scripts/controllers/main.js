
function main($scope){
    var employees = [
        { name: "aniket 0", dob: new Date(1998, 06, 08), salary: 55000.788 },
        { name: "aniket 1", dob: new Date(1997, 06, 08), salary: 55000.788 },
        { name: "aniket 2", dob: new Date(1996, 06, 08), salary: 55000.788 },
        { name: "aniket 3", dob: new Date(1995, 06, 08), salary: 55000.788 },
        { name: "aniket 4", dob: new Date(1994, 06, 08), salary: 55000.788 },
        { name: "aniket 5", dob: new Date(1993, 06, 08), salary: 55000.788 },
        { name: "aniket 6", dob: new Date(1992, 06, 08), salary: 55000.788 },
        { name: "aniket 7", dob: new Date(1991, 06, 08), salary: 55000.788 },
        { name: "aniket 8", dob: new Date(1990, 06, 08), salary: 55000.788 }
    ];

    $scope.employees = employees;
    $scope.rowsLimit = 3;
    $scope.startIndex = 0;

    $scope.sortCriteria = "Name";
    $scope.orderIorD = "Inc";
};

app.controller("main", main);