

function directive(){
    var directiveObj = {};

    // directiveObj["restrict"] = "A";

    // directiveObj["scope"] = {};
    // directiveObj.scope["items"] = [];

    directiveObj["templateUrl"] = "views/directive/list.html";
    console.log(directiveObj);

    return directiveObj;
};

app.directive("listItems", directive);