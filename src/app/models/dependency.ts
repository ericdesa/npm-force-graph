
export class Dependency {

    public childrens: Dependency[] = [];

    constructor(public name: string, public parent?: Dependency) { }

}
