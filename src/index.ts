import { add } from './add.js';
import { sum } from './sum.js';

console.log('Renderer meta framework initialized');

export const printHello = (name: string = 'World'): void => {
    console.log(`Hello ${name}`);
};

export { add, sum };

export const subtract = (a: number, b: number): number => a - b;
