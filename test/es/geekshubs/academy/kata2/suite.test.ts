import { palindromo } from "../../../../../src/es/geekshubs/academy/kata2/puzzle";

describe('Testing for kata2', function (){

    test('Palindromo - Size: 0', function () {
        //Arrange
        var expected = null;
        //Act
        var result = palindromo("");
        //Assert
        expect(result).toBe(expected);
    });

});

