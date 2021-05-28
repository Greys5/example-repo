const suma = require('./suma.test');

TextDecoderStream('2 + 5 = 7' () =>{
    expect(suma(2,5)).toBe(7);
});

TextDecoderStream('a + 5 = NaN', () =>{
    expect(suma('a',5)).toBe(NaN);
});