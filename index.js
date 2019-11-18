#!/usr/bin/env node
"use strict";

const Path = require("path");    
const PlanReviewer = require("./lib/PlanReviewer");

function main() {
    const [, , _fileName] = process.argv;

    let fileName = Path.resolve(_fileName);
    let reviewer = new PlanReviewer();
    reviewer.process(fileName);
}

main();