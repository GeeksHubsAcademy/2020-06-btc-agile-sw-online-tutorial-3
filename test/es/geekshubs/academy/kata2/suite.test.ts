import { palindromo } from "../../../../../src/es/geekshubs/academy/kata2/puzzle";

describe('Testing for kata2', function (){

    test('Palindromo - Size: 0 | \"\" === \"\"', function () {
        //Arrange
        var expected = true;
        //Act
        var result = palindromo("");
        //Assert
        expect(result).toBe(expected);
    });


    test('Palindromo - Size: 1 | a === a', function () {
        //Arrange
        var expected = true;
        //Act
        var result = palindromo("");
        //Assert
        expect(result).toBe(expected);
    });

    
    test('Palindromo - Size: 2 | aa === aa', function () {
        //Arrange
        var expected = true;
        //Act
        var result = palindromo("aa");
        //Assert
        expect(result).toBe(expected);
    });

    test('Palindromo - Size: 2 | ab != ba', function () {
        //Arrange
        var expected = false;
        //Act
        var result = palindromo("ab");
        //Assert
        expect(result).toBe(expected);
    });

     test('Palindromo - Size: 2 | ba != ab', function () {
        //Arrange
        var expected = false;
        //Act
        var result = palindromo("ba");
        //Assert
        expect(result).toBe(expected);
    });

    test('Palindromo - Size: 2 | bb === bb', function () {
        //Arrange
        var expected = true;
        //Act
        var result = palindromo("bb");
        //Assert
        expect(result).toBe(expected);
    });

    test('Palindromo - Size: 3 |  aba === aba', function () {
        //Arrange
        var expected = true;
        //Act
        var result = palindromo("aba");
        //Assert
        expect(result).toBe(expected);
    });

    test('Palindromo - Size: 3 | abc != cba', function () {
        //Arrange
        var expected = false;
        //Act
        var result = palindromo("abc");
        //Assert
        expect(result).toBe(expected);
    });
});

