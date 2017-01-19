import { add } from '../index';

describe('index.js', () => {

    describe('add', () => {

        it('sum arguments', () => {

            expect(add(2, 4)).toBe(6);

        });

    });

});

