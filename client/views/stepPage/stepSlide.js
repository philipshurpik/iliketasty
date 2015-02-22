Template.stepSlide.events({
    "click .btn-start-timer": function setTimer(e) {
        var timerTime = this.timerTime,
            popupEl = $(e.target).parents('#stepPage').find('.timerPopup');

        Meteor.startup(function () {

            var now = new Date().getTime(),
                stepTimer = 5,
                alarm_time = new Date(now + stepTimer * 1000);

            navigator.plugins.alarm.set(alarm_time,
                function () {
                    $('.tab-timer').css('display', 'table-cell');
                    $('.tab-timer').find('p').html(stepTimer);

                    var interval = window.setInterval(function () {
                        stepTimer--;
                        $('.tab-timer').find('p').html(stepTimer);
                        if (stepTimer === 0) {
                            window.clearInterval(interval);
                        }
                    }, 1000);

                    setTimeout(function () {
                        window.my_media = new Media('http://soundbible.com/grab.php?id=2061&type=mp3',
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
                        window.my_media.play();
                        popupEl.css('display', 'block');

                        popupEl.find('.btn-end-timer').on('click', function () {
                            popupEl.css('display', 'none');
                            window.my_media.stop();
                            var cur_scroll = parseInt($('.slide-group')[0].style.webkitTransform.match(/translate3d\(([^,]*)/)[1], 10),
                                new_scroll = -(Math.abs(cur_scroll) + document.body.offsetWidth);
                            $('.slide-group')[0].style.webkitTransform = 'translate3d(' + new_scroll + 'px,0,0)';

                            $('.tab-timer').css('display', 'none');
                        });

                        document.addEventListener("backbutton", function () {
                            window.my_media.stop();
                            history.go(-1);
                        })
                    }, stepTimer * 1000);

                },
                function () {
                    // ERROR
                    console.log('something is wrong');

                })
        });
    },
});
