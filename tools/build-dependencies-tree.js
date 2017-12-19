#!/usr/bin/env node
/* jslint node: true, es6, this */
"use strict";

var flatDependencies = {};

function explorePackage(root = '..', depth = 0) {
    try {
        var json = require(root + '/package.json');
        var dependenciesNames = Object.keys(json.dependencies || {});
        var devDependenciesNames = Object.keys(json.devDependencies || {});

        dependenciesNames.concat(devDependenciesNames)
            .forEach((name) => {
                console.log('   '.repeat(depth) + ' | ' + name);

                if (flatDependencies[name] === undefined) {
                    flatDependencies[name] = true;
                    explorePackage('../node_modules/' + name, depth + 1);
                }
            });
    } catch (ex) { }
}

explorePackage();
