describe("drinkaboutgame", function() {
    describe("Drinkingage test", function() {
        it("should return -1", function() {
            expect(drinkingage(0, 1)).toBe(-1)
        });
        it("should return 13", function() {
            expect(drinkingage(14, 1)).toBe(13)
        });
        it("should return 17", function() {
            expect(drinkingage(18, 1)).toBe(17)
        });
        it("should return 20", function() {
            expect(drinkingage(21, 1)).toBe(20)
        });
        it("should return 129", function() {
            expect(drinkingage(130, 1)).toBe(129)
        });
    });
});
