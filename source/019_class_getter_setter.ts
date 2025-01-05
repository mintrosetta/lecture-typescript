class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    constructor (age: number, firstName: string, lastName: string) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get age() {
        return this._age;
    }

    public set age(age: number) {
        if (age <= 0 || age >= 100) {
            throw new Error("The age is invalid");
        }

        this._age = age;
    }

    public getFullName(): string {
        return `${this._firstName}${this._lastName}`;
    }
}