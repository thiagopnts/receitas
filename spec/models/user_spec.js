define(function(require) {
    describe('User', function() {

        var User = require('models/user');
        var Storage = require('models/storage');

        beforeEach(function() {
            Storage.clear();
        });

        it('should be a singleton', function() {
            var u1 = User.getInstance();
            var u2 = User.getInstance();
            expect(u1).toBe(u2);
        });

        it('should set and get current user from storage', function() {
            var user = User.getInstance();
            expect(Storage.getCurrentUser()).toBe(null);
            var data = {
                name: 'Thiago',
                email: 'thiagopnts@gmail.com',
                id: '3'
            };
            user.set(data);
            Storage.setCurrentUser(user);
            expect(Storage.getCurrentUser()).toEqual(data);
            var u2 = User.getInstance();
            expect(u2.set(Storage.getCurrentUser())).toEqual(user);
        });
    });
});
