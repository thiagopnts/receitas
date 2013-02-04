define(function(require) {
    describe('Signup', function() {

        var Signup = require('models/signup');

        beforeEach(function() {
            this.signup = new Signup();
            this.attrs = {
                name: "Valid Name",
                email: "valid@email.com",
                password: "password"
            };
        });

        describe('name should', function() {

            it('be > 3', function() {
                this.signup.set(this.attrs);
                expect(this.signup.validate(this.signup.attributes)).toEqual(undefined);
            });

            it('be neither null or undefined', function() {
                this.attrs.name = null;
                this.signup.set(this.attrs);
                expect(this.signup.validate(this.signup.attributes)).toEqual("Nome inválido!");
                this.attrs.name = undefined;
                this.signup.set(this.attrs);
                expect(this.signup.validate(this.signup.attributes)).toEqual("Nome inválido!");
            });

        });

        describe('email', function() {

            it('should be a valid one', function() {
                this.attrs.email = "invalid";
                this.signup.set(this.attrs);
                expect(this.signup.validate(this.signup.attributes)).toEqual("E-mail inválido!");
            });

        });

        describe('password', function() {
            it('should be a valid one', function() {
                this.attrs.password = 'a';
                expect(this.signup.validate(this.attrs)).toBe("Sua senha deve conter mais de 5 caracteres!");
                expect(this.signup._isValidPassword('password')).toBe(true);
            });
        });
    });
});
