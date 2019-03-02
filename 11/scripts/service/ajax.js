
app.factory("$ajax_factory",["$http","$q", function($http, $q){
        var ajaxObj = {};

        function withToken(config){
            var httpConfig = config;
            console.log("withToken Call...");
            var defer = $q.defer();
            var token = "hjkahjfhkak";
            httpConfig["headers"] = {
                "authorization": token
            };
            $http(httpConfig)
            .then(function(response){
                defer.resolve(response);
            })
            .catch(function(error){
                defer.reject(error);
            });

            return defer.promise;
        };

        function withoutToken(config){
            console.log("without Token Call...");
            var defer = $q.defer;
            $http(config)
            .then(function(response){
                defer.resolve(repsonse);
            })
            .catch(function(error){
                defer.reject(error);
            });
            return defer.promise;
        }


        // Attach properties
        ajaxObj["withToken"] = withToken;
        ajaxObj["withoutToken"] = withoutToken;


        return ajaxObj;
    }

]);