class Student{
   
    total(){
    sum = 0;
            for(i=0 ; i< $scope.students[0].subjects.length; i++){
                sum = sum + $scope.students[0].subjects[i].marks;
            }
            return sum;
        }

    average(){
        return  $scope.students[0].total() / $scope.students[0].subjects.length;
    }

    comapre(){
        if($scope.students[0].average()>$scope.students[1].average()){
            return $scope.students[0].name;
        }
        else{
            return $scope.students[1].name;
        }
    }
}

module.exports.Student = Student;