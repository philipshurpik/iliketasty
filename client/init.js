function replaceNavigator(origNavigator) {
    var CordovaNavigator = function() {};
    CordovaNavigator.prototype = origNavigator;
    var newNavigator = new CordovaNavigator();
    // This work-around really only applies to new APIs that are newer than Function.bind.
    // Without it, APIs such as getGamepads() break.
    if (CordovaNavigator.bind) {
        for (var key in origNavigator) {
            if (typeof origNavigator[key] == 'function') {
                newNavigator[key] = origNavigator[key].bind(origNavigator);
            } else {
                (function(k) {
                    Object.defineProperty(newNavigator, k, {
                        get: function() {
                            return origNavigator[k];
                        },
                        configurable: true,
                        enumerable: true
                    });
                })(key);
            }
        }
    }
    return newNavigator;
}
window.navigator = replaceNavigator(window.navigator);