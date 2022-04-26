$(function() {
    $("#goal-button").click(function() {
        let input = $("#new-goal");
        let newGoal = $('<li class="list-item">');
        newGoal.text(input.val());
        $("#goal-list").append(newGoal);
        input.val("");
    });
});