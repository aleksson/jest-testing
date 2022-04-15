const packagejson = require('./package.json');
const { scripts, devDependencies } = packagejson;
const expecting = { tool: 'jest' , version : '^27.5.1' };

test('jest is assigned as test-tool in package.json', () => {
    const jest = scripts.test.includes('jest');
    expect(jest).toBe(true);
});

test('jest installed under "devDependencies" in package.json', ()=>{
    const devDependency = (devDependencies['jest'] ? true : false);
    expect(devDependency).toBe(true);
});

test(`check jest "devDependency" version`, () => {
    const version = devDependencies['jest'];
    expect(version).toBe(expecting.version);
});

test('jest has "--watch" or "--watchAll" parameter', () => {
    const watchAll = scripts.test === 'jest --watch' || scripts.test === 'jest --watchAll' ;
    expect(watchAll).toBe(true)
});