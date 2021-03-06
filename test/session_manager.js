/*globals chrome: true, module, ok, strictEqual, test, URI */

(function() {
    var sessionId = 'sessionId';
    var cookie = {
        value: sessionId
    };

    var stubChromeAPI = function() {
        chrome = {};
        chrome.cookies = {};
        chrome.cookies.get = function(options, callback) {
            callback(cookie);
        };

    };

    $(document).ready(function() {
        // get local reference to sessionManager
        var sessionManager = window.philanthropist.sessionManager;
        sessionManager.init();

        module('Background Session Manager', {
            setup: function() {
                sessionManager.clearSessionMap();
                stubChromeAPI();
            }
        });

        test('first visit in session', function() {
            sessionManager.registerCurrentSession(function(session) {
                ok(!session.isAssociated);
            });
        });

        test('visit after session is associated', function() {
            sessionManager.associateSession(sessionId);
            sessionManager.registerCurrentSession(function(session) {
                ok(session.isAssociated);
            });
        });
    });
})();
