
app.controller("main", function($scope, $location, $anchorScroll){
    $scope.scrollTo = function(scrollToPt){
        console.log(scrollToPt);
        $location.hash(scrollToPt);
        $anchorScroll();
    }
});