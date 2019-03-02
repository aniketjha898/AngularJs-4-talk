
function main( $scope, $ajax_factory){
    $scope.serverCall = function(){
    //     $http({
    //         method: "GET",
    //         url: "http://127.0.0.1:5500/11/fake.json"
    //     })
    //     // .get('http://127.0.0.1:5500/11/fake.json')
    //     .then(function(response){
    //         $log.info(response);
    //         console.log(response);
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     });
    

        $ajax_factory
        .withToken({
            method: "GET",
            url: "http://127.0.0.1:5500/11/fake.json"

        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(){
            console.log(response);
        });

    };

};

app.controller("main", main);