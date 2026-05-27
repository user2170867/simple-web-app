import { createController } from './controller.js';

test('controller вызывает IO и calculator', () => {
    const mockIO = {
        getA: () => 2,
        getB: () => 3,
        showResult: jest.fn()
    };
    const controller = createController(mockIO);
    controller.performOperation('multiply');
    expect(mockIO.showResult).toHaveBeenCalledWith(6);
});
