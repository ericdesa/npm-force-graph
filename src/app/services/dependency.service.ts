import { Injectable } from '@angular/core';

import { Dependency } from '../models/dependency';

@Injectable()
export class DependencyService {

    public dependencies: Dependency[] = [];

    constructor() {
        this.load();
    }

    public async load() {
    }

}
