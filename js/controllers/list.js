(function() {

    angular
        .module("quizApp", [])
        .controller("listCtrl", ListController);

        ListController.$inject=['quizMetrics','Dataservice'];

    function ListController(quizMetrics,Dataservice) {
        var vm = this;
        vm.quizMetrics=quizMetrics;
        vm.data = Dataservice.turtlesData;
        vm.activeturtle = {};
        vm.showturtleInfo = showturtleInfo;
        vm.activateQuiz=activateQuiz;
        vm.search = "";
        
        
        function showturtleInfo(index) {
            vm.activeturtle = index;
        }

        function  activateQuiz()
        { 
         quizMetrics.changeState(true)
        }
    }

    

})();