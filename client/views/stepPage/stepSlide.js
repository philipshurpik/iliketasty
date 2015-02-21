Template.stepSlide.events({
    "click .btn-start-timer": function setTimer() {
        var timerTime = this.timerTime;
        Meteor.startup(function () {
            var now = new Date().getTime(),
                stepTimer = 5,
                alarm_time = new Date(now + stepTimer * 1000);

            navigator.plugins.alarm.set(alarm_time,
                function () {
                    setTimeout(function () {
                        Router.go('timerPage');
                        var my_media = new Media('http://soundbible.com/grab.php?id=2061&type=mp3',
//                        // success callback
                            function () {
                                console.log("playAudio():Audio Success");
                            },
                            // error callback
                            function (err) {
                                console.log("playAudio():Audio Error: " + err);
                            }
                        );
//                    // Play audio
                        my_media.play();
                        document.addEventListener("backbutton", function () {
                            my_media.stop();
                            history.go(-1);
                        })
                    }, stepTimer * 1000);

                },
                function () {
                    // ERROR
                    console.log('something is wrong');

                })
        });
    }

});
