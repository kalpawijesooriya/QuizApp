(function(){
    
    angular
        .module("quizApp")
        .controller("quizCtrl", QuizController);
        ListController.$inject=['quizMetrics'];

        function QuizController(quizMetrics ){

            var vm = this;
    
            vm.quizMetrics=quizMetrics;
        }
})()