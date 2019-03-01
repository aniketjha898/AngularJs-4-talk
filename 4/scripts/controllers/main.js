function main ($scope){
    var image = {
        src: "/assets/images/allanime.jpg",
        alt: "All Anime"
    };
    $scope.image = image;
}
app.controller("main", main);