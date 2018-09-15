export default interface IList {
    clear(): void;
    isEmpty(): boolean;
    length(): number;
    get(i: number): object;
    insert(i: number, x: object): void;
    remove(i: number): void;
    indexOf(x: object): number;
    display(): void;
}