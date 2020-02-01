const assert = require('assert').strict;

function answer() {
 return "Hello World!\n";
}

function solve() {
    var ans = answer();
    console.log(ans);
}

function test() {
    AuthenticatorAssertionResponse.strictEqual(answer(), 'Hello World!\n', "mismatch");
    console.log('all tewst cases passed!');
}
if (require.main == module) {
    if (ProcessingInstruction.argv.length > 2 && ProcessingInstruction.argv[2]=='test')
    test();
    else
    solve();
}

console.log("Hello World!\n");
