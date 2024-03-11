// // // Function to start the timer
// // function startTimer() {
// //     var timerElement = document.querySelector('.timer .time');
// //     var periodNumberElement = document.querySelector('.timer .period-number');
    
// //     // Set initial time
// //     var seconds = 30;
// //     var period = 1;
    
// //     // Update timer display
// //     function updateTimer() {
// //         timerElement.textContent = ('0' + seconds).slice(-2);
// //     }
    
// //     // Update period number display
// //     function updatePeriodNumber() {
// //         periodNumberElement.textContent = ('0' + period).slice(-2);
// //     }
    
// //     // Timer logic
// //     function countdown() {
// //         updateTimer();
// //         seconds--;
        
// //         // When seconds reach 0, reset seconds and increment period number
// //         if (seconds < 0) {
// //             seconds = 30;
// //             period++;
// //             updatePeriodNumber();
// //         }
        
// //         // Recursive call every second
// //         setTimeout(countdown, 1000);
// //     }
    
// //     // Start the countdown
// //     countdown();
// // }

// // // Call the startTimer function to begin countdown
// // startTimer();


// function startTimer() {
//     var timerElement = document.querySelector('.timer .time');
//     var periodNumberElement = document.querySelector('.timer .period-number');

//     var seconds = 30;
//     var period = 1;

//     function countdown() {
//         timerElement.textContent = ('0' + seconds).slice(-2);

//         seconds--;

//         if (seconds < 0) {
//             seconds = 30;
//             period++;
//             periodNumberElement.textContent = ('0' + period).slice(-2);
//         }

//         setTimeout(countdown, 1000);
//     }

//     countdown();
// }

// startTimer();
