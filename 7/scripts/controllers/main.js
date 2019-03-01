
function main($scope){
    var technologies = [
        { name: "AngularJs", likes: 0, dislikes: 0 },
        { name: "React.js", likes: 0, dislikes: 0 },
        { name: "Node.js", likes: 0, dislikes: 0 },
        { name: "Angular 2", likes: 0, dislikes: 0 },
    ];

    $scope.technologies = technologies;
    // Behavour
    $scope.likeOrDislike = function(technology, like){
        if(like === -1){
            technology.dislikes = technology.dislikes + 1;
        }
        else if(like === 1){
            technology.likes = technology.likes + 1;
        }
    }
};

app.controller("main", main);