import { Injectable } from '@angular/core';

import { Dependency } from '../models/dependency';

import { readFile } from 'nicer-fs';

@Injectable()
export class DependencyService {

    public dependencies: Dependency[] = [];

    constructor() {
        this.load();
    }

    public async load() {
        debugger
        let result = await readFile('./package.json');
        console.log(result);
    }

}
