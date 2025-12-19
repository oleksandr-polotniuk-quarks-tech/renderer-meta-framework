console.log('Renderer meta framework initialized');

export const printHello = (name: string = 'World'): void => {
    console.log(`Hello ${name}`);
};

export const sum = (a: number, b: number): number => a + b;

export const subtract = (a: number, b: number): number => a - b;
