define(function(require) {
    describe('Signup', function() {

        var Signup = require('models/signup');

        beforeEach(function() {
            this.signup = new Signup();
        });

        describe('name should', function() {

            it('be > 3', function() {
                expect(this.signup.set({name: 'a'})).toBe(false);
            });

            it('be neither null or undefined', function() {
                expect(this.signup.set({name: null})).toBe(false);
                expect(this.signup.set({name: undefined})).toBe(false);
            });
            
        });

        describe('email', function() {

            it('should be a valid one', function() {
                var attrs = {name: 'thiago', email: 'invalid', password: 'password'};
                expect(this.signup.set(attrs)).toBe(false);
                expect(this.signup._isValidEmail('invalid')).toBe(false);
                expect(this.signup.validate(attrs)).toBe("E-mail inválido!");
                expect(this.signup._isValidEmail('valid@email.com')).toBe(true);
                attrs.email = 'valid@email.com';
                expect(!!this.signup.set(attrs)).toBe(true);
            });

        });

        describe('password', function() {
            it('should be a valid one', function() {
                var attrs = {name: 'thiago', email: 'valid@email.com', password: ''};
                expect(this.signup.set(attrs)).toBe(false);
                expect(this.signup._isValidPassword('no')).toBe(false);
                expect(this.signup.validate(attrs)).toBe("Sua senha deve conter mais de 5 caracteres!");
                expect(this.signup._isValidPassword('password')).toBe(true);
                attrs.password = 'password';
                expect(!!this.signup.set(attrs)).toBe(true);
            });
        });
    });
});
