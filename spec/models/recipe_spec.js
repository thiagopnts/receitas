define(function(require) {
	describe('Recipe', function(){

		var Recipe = require('models/recipe');

		beforeEach(function(){
			this.recipe = new Recipe();
			this.validAttrs = {
				name: 'Valid Name',
				preparation: 'Valid preparation',
				description: 'Valid description'
			};
		});

			describe('recipe name should', function(){

				it ('contain between 3 and 30 characters', function(){
					this.recipe.set(this.validAttrs);
					expect(this.recipe.validate(this.recipe.attributes)).toBe(undefined);
					this.validAttrs.name = "a";
					this.recipe.set(this.validAttrs);
					expect(this.recipe.validate(this.recipe.attributes)).toEqual("Nome inválido!");
				});

			});

			describe('recipe preparation should', function() {
        it('contain between 10 and 2000 length', function() {
          this.validAttrs.preparation = "a";
          this.recipe.set(this.validAttrs);
          expect(this.recipe.validate(this.recipe.attributes)).toEqual("Preparação inválida!");
        });
			});

      describe('recipe description should', function() {
        it('contain between 10 and 2000 length', function() {
          this.validAttrs.description = "a";
          this.recipe.set(this.validAttrs);
          expect(this.recipe.validate(this.recipe.attributes)).toEqual("Descrição inválida!");
        });
      });


	});
});