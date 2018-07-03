 var app = angular.module("Objfunc" , [])
        app.controller("studentController", function($scope){
            $scope.student = {
                name : 'Ashansh',
                subjects :[
                    {name : 'Java',marks :70},
                    {name : 'English' , marks :90},
                    {name : 'Maths', marks :80}
                ],

                total : function(){
                    sum = 0;
                    for(i=0 ; i< $scope.student.subjects.length; i++){
                        sum = sum + $scope.student.subjects[i].marks;
                    }
                    return sum;
                },

                average : function(){
                    return  $scope.student.total() / $scope.student.subjects.length;
                }
            };
        });