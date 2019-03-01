
function add(){
    return function(appiledOn, param1=1, param2=3){
        console.log(param1,param2,appiledOn);
        return appiledOn + param1 + param2;
    }
};

app.filter("add", add);