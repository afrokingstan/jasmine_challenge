describe("drinkaboutgame", function() {
    describe("Drinkingage test", function() {
        it("should return -1", function() {
            expect(drinkingage(0, 1)).toBe(-1)
        });
        it("should return 13", function() {
            expect(drinkingage(14, 1).toBe(13))
        });

    });
});
