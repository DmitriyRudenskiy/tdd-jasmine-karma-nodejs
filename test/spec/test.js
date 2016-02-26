(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
                expect(true).toBe(true);
            });
        });
    });

    describe("The 'toBe' matcher compares with ===", function () {
        it("and has a positive case", function () {
            expect(true).toBe(true);
        });

        it("and can have a negative case", function () {
            expect(false).not.toBe(true);
        });
    });

})();
