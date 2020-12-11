$(document).ready(function() {

        /* save text
        onclick for button
        save to local storage*/

    $('.saveBtn').on("click", function() {
        const time = $(this).attr('id');
        const value = $(this).siblings('.description').val()
        
        // Add inputs to local storage
        localStorage.setItem(time, value)
    })   


    for (let i = 8; i <= 17; i++) {
        $(`#${i}`).siblings('textarea').val(localStorage.getItem(i));
    };


    function checkHour() {
        // Military
        const currentHour = moment().hours();

        // Compare that current hour, to each hour block
        // Change the backgorund color accordingly
        // Hint: its already in the css file
        // You will add / remove class based on <, =, > 
        // .removeclass()
        // .addCLass()

    
    }




    $('#current-day').text(moment().format('dddd, MMMM Do'))


})
