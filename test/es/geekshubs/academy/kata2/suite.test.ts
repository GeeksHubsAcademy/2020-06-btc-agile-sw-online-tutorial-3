import {palindromo} from "../../../../../src/es/geekshubs/academy/kata2/puzzle";

describe('Testing for kata2', function () {

    test('palindromo - Size: 0 | \"\" === \"\"', function () {
        //Act
        const result = palindromo("");
        //Assert
        expect(result).toBeTruthy();
    });

    test('palindromo - Size: 1 | a === a', function () {
        //Arrange
        //var expected = true;
        //Act
        const result = palindromo("");
        //Assert
        expect(result).toBeTruthy();
    });

    test('palindromo - Size: 2 | aa === aa', function () {
        //Act
        const result = palindromo("aa");
        //Assert
        expect(result).toBeTruthy();
    });

    test('palindromo - Size: 2 | ab != ba', function () {
        //Arrange
       // var expected = false;
        //Act
        const result = palindromo("ab");
        //Assert
        expect(result).toBeFalsy();
    });

     test('palindromo - Size: 2 | ba != ab', function () {
        //Act
         const result = palindromo("ba");
        //Assert
        expect(result).toBeFalsy();
    });

    test('palindromo - Size: 2 | bb === bb', function () {
        //Act
        const result = palindromo("bb");
        //Assert
        expect(result).toBeTruthy();
    });

    test('palindromo - Size: 3 |  aba === aba', function () {
        //Act
        const result = palindromo("aba");
        //Assert
        expect(result).toBeTruthy();
    });

    test('palindromo - Size: 3 | abc != cba', function () {
        //Act
        const result = palindromo("abc");
        //Assert
        expect(result).toBeFalsy();
    });

    test('palindromo - Size: 7 | rotator === rotator', function () {
        //Act
        const result = palindromo("rotator");
        //Assert
        expect(result).toBeTruthy();
    });

    test('palindromo - Size: 7 | rovggatop != potaggvor', function () {
        //Act
        const result = palindromo("rovggatop");
        //Assert
        expect(result).toBeFalsy();
    });

});

