moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

//create variable for current hour
var currentHour = moment().hour();


//function checks current hour against each hour in the scheduler and applies appropriate class for color code
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

//when page is refreshed or loaded function retrieves and renders saved appointments to page

    function renderSaved(){
        $(".plan").each(function(){
            var input = $(this).parent().attr('id');
            $(this).val(localStorage.getItem(input));
        });
    };

    //on save button click, value of input saved with key corresponding to time of day in local storage 
    $(".saveBtn").click(function (event) {
        event.preventDefault();
     
        var savedPlan = $(this).siblings(".plan").val();
        var timeOf = $(this).parent().attr('id');
  
        localStorage.setItem(timeOf, savedPlan)

    });
//call functions
    checkHour();
    renderSaved();