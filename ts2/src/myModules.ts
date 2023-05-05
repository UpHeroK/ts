export const PI = 3.1416;

export interface Person {
    name: string;
    age: number;
    dateOfBirth: Date;
}

export function gen():number {
    return Math.random();
}
