"use strict";

(function() {
    var customTimerLabel = $("#CustomTimerLabel");
    var timeRemaining = 0;
    var timerInterval;

    function UpdateTimer() {
        customTimerLabel.text = timeRemaining; // Исправлено здесь
    }

    function SetTimeRemaining(newTime) {
        timeRemaining = newTime;
        UpdateTimer();
    }

    function StartTimer() {
        timeRemaining = 90;
        UpdateTimer();
    
        if (timerInterval) {
            $.CancelScheduled(timerInterval);
        }
    
        function timerTick() {
            timeRemaining -= 1;
            UpdateTimer();
    
            if (timeRemaining <= 0) {
                $.CancelScheduled(timerInterval);
            } else {
                timerInterval = $.Schedule(1, timerTick);
            }
        }
    
        timerInterval = $.Schedule(1, timerTick);
    }
    
    GameEvents.Subscribe("set_time_remaining", SetTimeRemaining);
    GameEvents.Subscribe("start_timer", StartTimer);
})();
