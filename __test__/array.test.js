import {arrayFruits} from '../src/array';

describe('check if the elements exist', () => {
    test('Does the array have a banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('should not contain banana', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('check array size', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    
});
