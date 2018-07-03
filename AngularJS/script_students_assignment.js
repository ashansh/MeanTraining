var app = angular.module("Objfunc" , [])
Student = module.import("./class_student_assignments.js");
app.controller("studentController", function($scope){
    $scope.students =  [{
        name : 'Ashansh',
        subjects :[
            {name : 'Java',marks :70},
            {name : 'English' , marks :90},
            {name : 'Maths', marks :80}
        ]
    },
    {
        name : 'Anims',
        subjects :[
            {name : 'Java',marks :95},
            {name : 'English' , marks :60},
            {name : 'Maths', marks :70}
        ],
      }]  
});