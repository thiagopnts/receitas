define(function(require) {
	describe('Recipe', function(){
		
		var Recipe = require('models/recipe');

		beforeEach(function(){
			this.recipe = new Recipe();
		});

			describe('name of recipe should', function(){

				it ('contain between 3 and 30 characters', function(){
					/*expect(this.recipe.set({name: 'My Recipe'})).toBe(true);*/
					expect(this.recipe.set({name: 'My'})).toBe(false);								
				});						

				it ('not contain space only', function(){			
					expect(this.recipe.set({name: '    '})).toBe(false);									
				});		

				it('be neither null or undefined', function() {
	                expect(this.recipe.set({name: null})).toBe(false);
	                expect(this.recipe.set({name: undefined})).toBe(false);
	            });	
				
			});

			describe('method of preparation should', function(){

				it ('contain between 10 and 2000 characters', function(){
					/*expect(this.recipe.set({preparation: 'Modo de preparo XXX'})).not.toBe(false);*/
					expect(this.recipe.set({preparation: 'modo'})).toBe(false);								
				});						

				it ('not contain space only', function(){			
					expect(this.recipe.set({preparation: '    '})).toBe(false);									
				});		

				it('be neither null or undefined', function() {
	                expect(this.recipe.set({preparation: null})).toBe(false);
	                expect(this.recipe.set({preparation: undefined})).toBe(false);
	            });
		});

			describe('description should', function(){

				it ('contain between 10 and 1000 characters', function(){
					/*expect(this.recipe.set({description: 'Modo de preparo XXX'})).not.toBe(false);*/
					expect(this.recipe.set({description: 'Desc1'})).toBe(false);
				});						

				it ('not contain space only', function(){			
					expect(this.recipe.set({description: '    '})).toBe(false);									
				});		

				it('be neither null or undefined', function() {
	                expect(this.recipe.set({description: null})).toBe(false);
	                expect(this.recipe.set({description: undefined})).toBe(false);
	            });
		});

			describe('description should', function(){

				it ('contain between 10 and 1000 characters', function(){
					/*expect(this.recipe.set({description: 'Modo de preparo XXX'})).not.toBe(false);*/
					expect(this.recipe.set({description: 'Desc1'})).toBe(false);
				});						

				it ('not contain space only', function(){			
					expect(this.recipe.set({description: '    '})).toBe(false);									
				});		

				it('be neither null or undefined', function() {
	                expect(this.recipe.set({description: null})).toBe(false);
	                expect(this.recipe.set({description: undefined})).toBe(false);
	            });
		});
	});
});