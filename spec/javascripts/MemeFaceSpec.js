describe("using the MemeFaces", function() {

    beforeEach(function() {
        this.meme = new MemeGlue('s.glbimg.com/es/ge/f/original/2012/08/22/adriano_richard_gcom.jpg');
    });

    it("simple meme", function() {
        expect(this.meme).toBeTruthy();
    });
    

});
