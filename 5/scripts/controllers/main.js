

function main($scope){
    // var students = [
    //     { name: "Aniket", branch:"CSE" },
    //     { name: "Arpit", branch: "IT" },
    //     { name: "Avirup", branch: "ECE" },
    //     { name: "Mayank", branch: "CSE" },
    //     { name: "Nishutosh", branch: "CSE" }
    // ];

    var studentsWithTechStack = [
        { userId: "102", name: "Aniket", branch:"CSE", techStack:["web", "mobile", "java", "blockchain", "etc."] },
        { userId: "103", name: "Arpit", branch: "IT" , techStack:["web", "mobile","etc."]},
        { userId: "104", name: "Avirup", branch: "ECE", techStack:["web", "ml", "etc."]},
        { userId: "105", name: "Mayank", branch: "CSE", techStack:["web", "mobile", "ml", "etc."] },
        { userId: "106", name: "Nishutosh", branch: "CSE", techStack:["web", "mobile", "java", "blockchain", "etc.1", "etc.2" ] },
        { userId: "107", name: "Nikhil", branch: "CSE", techStack:["web", "mobile","etc.", "etc.",] },

    ];

    $scope.students = studentsWithTechStack;

    console.log($scope);
}
app.controller("main", main);