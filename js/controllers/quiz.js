(function(){
    
    angular
        .module("quizApp")
        .controller("quizCtrl", QuizController);
        QuizController.$inject=['quizMetrics','Dataservice'];

        function QuizController(quizMetrics,Dataservice){

            var vm = this;
    
            vm.quizMetrics=quizMetrics;
        }

        
})();