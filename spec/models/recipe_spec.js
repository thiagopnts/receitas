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

    describe('can receive likes', function() {

      it('likes comes from user id', function() {
        this.recipe.likeIt(1);
        this.recipe.likeIt(2);
        this.recipe.likeIt(3);
        this.recipe.likeIt(5);
        this.recipe.likeIt(6);
        expect(this.recipe.get('likes').length).toEqual(5);
      });
      it('each user should like just once', function() {
        this.recipe.likeIt(3);
        this.recipe.likeIt(4);
        this.recipe.likeIt(4);
        this.recipe.likeIt(3);
        this.recipe.likeIt(1);
        expect(this.recipe.get('likes').length).toEqual(3);
      });
    });

  describe('has ingredients', function() {

    it('can add as an array of ingredients', function() {
      this.recipe.addIngredient([
      {
        name: "Feijão",
        quantity: "1 KG"
      },
      {
        name: "Arroz",
        quantity: "meio quilo"
      }
        ]);
      expect(this.recipe.get('ingredients').length).toEqual(2);
    });

    it('can be added individually', function() {
      this.recipe.addIngredient({name: "Macarrão", quantity: "2 xícaras"});
      this.recipe.addIngredient({name: "Molho de tomate", quantity: "1 pacote"});
      expect(this.recipe.get('ingredients').length).toEqual(2);
    });

    it('merges current ingredients to new ones', function() {
      this.recipe.addIngredient({name: "Macarrão", quantity: "2 xícaras"});
      this.recipe.addIngredient([
      {
        name: "Feijão",
        quantity: "1 KG"
      },
      {
        name: "Arroz",
        quantity: "meio quilo"
      }
        ]);
      expect(this.recipe.get('ingredients').length).toEqual(3);
    });

  });


	});
});