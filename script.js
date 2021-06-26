moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();

var currentHour = moment().hour();
//console.log(currentHour);

function checkHour() {
$(".time-block").each(function () {
    var thisHour = parseInt($(this).attr("id"));
    console.log(thisHour)

    if (thisHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (thisHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }})};
    

  function renderSaved(){
    $(".plan").each(function(){
        var saved = $(this).attr("id");
        $(this).val(localStorage.getItem(saved));
    });
};
 

    $(".saveBtn").click(function (event) {
        event.preventDefault();
     
        var savedPlan = $(this).siblings(".plan").val();
        var timeOf = $(this).parent().attr('id');
        

      console.log(savedPlan);
      console.log(timeOf);

      

        localStorage.setItem(timeOf, savedPlan);


    });

    renderSaved();
    checkHour();