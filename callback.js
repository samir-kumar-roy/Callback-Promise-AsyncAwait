const marks = 69;
const payment = true;

function enroll(callback) {
    console.log('Enrollment for BSc. course has been started.');
    setTimeout(function () {
        if (payment) {
            callback();
        } else {
            console.log("Sorry, your payment not completed, enrollment failed");
        }
    }, 1000);
}
function admission(callback) {
    console.log('Admission is in progress...');
    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else {
            console.log("Sorry, you could secure atleast 80% marks to get admission");
        }
    }, 1000);
}

function seatBooking() {
    console.log('Date of Seat booking has been published...');
    setTimeout(function () {
        console.log("Congratulations! you got a seat in this university.");
    }, 1000);
}

enroll(function () {
    admission(seatBooking);
});