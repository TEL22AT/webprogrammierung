function testNamedExportFunction() {
    console.log("Hello World from testNamedExportFunction in exports.js!");
}
let testNamedExportVariable = 'Hello World from testNamedExportVariable in exports.js!';
export { testNamedExportVariable, testNamedExportFunction };