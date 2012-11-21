define(function(require) {
    var IndexView = require('views/index');

    describe("IndexView page", function() {
        beforeEach(function() {
            this.index = new IndexView();
        });
        it("renders subviews topbar, footer and content", function() {
            expect(this.index.topbar).toNotBe(null);
            expect(this.index.content).toNotBe(null);
            expect(this.index.footer).toNotBe(null);
        });

        it("should have a header element attached to topbar view", function() {
            expect(this.index.topbar.$el).toNotBe(null);
            expect(this.index.topbar.$el.selector).toBe('header');
        });

        it("should have a footer element attached to footer view", function() {
            expect(this.index.footer.$el).toNotBe(null);
            expect(this.index.footer.$el.selector).toBe('footer');
        });

        it("should have a section element with id 'main' attached to content view", function() {
            expect(this.index.content.$el).toNotBe(null);
            expect(this.index.content.$el.selector).toBe('#main');
        });
        
    });
});
