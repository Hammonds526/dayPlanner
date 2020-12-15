$(document).ready(function () {

    /* save text
    onclick for button
    save to local storage*/

    $('.saveBtn').on("click", function () {
        const time = $(this).attr('id');
        const value = $(this).siblings('.description').val()

        // Add inputs to local storage
        localStorage.setItem(time, value)
    })

    // pulls value out of local storage and puts it in text area
    for (let i = 8; i <= 17; i++) {
        $(`#${i}`).siblings('textarea').val(localStorage.getItem(i));
    };

    // Function changes color of rows based on current hour
    function checkHour() {
        // Variable to hold current houur in Military time
        const currentHour = moment().hours();

        $("button").each(function() {
            const elementHour = $(this).attr('id');
            if (currentHour == elementHour) {
                $(this).siblings("textarea").removeClass("past future")
                $(this).siblings("textarea").addClass("present")
                console.log("present");
            }
            else if (currentHour > elementHour) {
                $(this).siblings("textarea").removeClass("present future")
                $(this).siblings("textarea").addClass("past")
                console.log("past");
            }
            else if (currentHour < elementHour) {
                $(this).siblings("textarea").removeClass("past present")
                $(this).siblings("textarea").addClass("future")
                console.log("future");
            }
        })
    }
    checkHour()
    $('#current-day').text(moment().format('dddd, MMMM Do'))
})
