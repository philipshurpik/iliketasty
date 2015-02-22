Template.stepSlide.events({
    "click .btn-start-timer": function setTimer(e) {
        var timerTime = this.timerTime,
            popupEl = $(e.target).parents('#stepPage').find('.timerPopup');
        var recipeId = Session.get('recipeId');
        var stepTitle = this.title;

        Meteor.call('addTimer', recipeId, stepTitle, timerTime);

        Meteor.startup(function () {

            var now = new Date().getTime(),
                alarm_time = new Date(now + timerTime * 1000);

            if (Meteor.isCordova) {
                setAlarm();
            }
            else {
                onTimerCallback();
            }

            function setAlarm() {
                navigator.plugins.alarm.set(alarm_time,
                    onTimerCallback,
                    function () {
                        // ERROR
                        console.log('something is wrong');

                    });
            }

        });

        function onTimerCallback() {
            var activeTimer = timerTime;
            Session.set('activeTimer', activeTimer);
            var interval = window.setInterval(function () {
                activeTimer-=1;
                Session.set('activeTimer', activeTimer > 0 ? activeTimer : "");
                if (activeTimer === 0) {
                    window.clearInterval(interval);
                }
            }, 1000);

            setTimeout(function () {
                if (Media) {
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
                }

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
            }, timerTime * 1000);

        }
    }
});
