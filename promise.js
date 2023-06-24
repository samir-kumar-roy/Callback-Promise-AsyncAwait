const marks = 93;
const payment = true;

function enroll() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Enrollment for BSc. course has been started.');
        setTimeout(function () {
            if (payment) {
                resolve();
            } else {
                console.log("Sorry, your payment not completed, enrollment failed");
            }
        }, 1000);
    })
    return promise;
}

function admission() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Admission is in progress...');
        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            } else {
                console.log("Sorry, you could secure atleast 80% marks to get admission");
            }
        }, 1000);
    });
    return promise;
}

function seatBooking() {
    const promise = new Promise(function (resolve) {
        console.log("Date of seatbooking has been published");
        setTimeout(function () {
            resolve("Congrats! You have secured a seat in this Unuversity");
        }, 2000);
    });
    return promise;
}

enroll().then(admission)
    .then(seatBooking)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })