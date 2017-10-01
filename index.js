const Concat = require('concat-with-sourcemaps');
const fs = require('fs');

const distFileName = 'formstone.min.css';
const concat = new Concat(true, distFileName, '\n');

const srcRoot = `${__dirname}/node_modules/formstone/dist/css/`;

concat.add(`${srcRoot}background.css`, fs.readFileSync(`${srcRoot}background.css`));
concat.add(`${srcRoot}carousel.css`, fs.readFileSync(`${srcRoot}carousel.css`));
 
var concatenatedContent = concat.content;
var sourceMapForContent = concat.sourceMap;

const base64 = require('base-64');
const encoded = base64.encode(sourceMapForContent);
fs.writeFileSync(distFileName, `${concatenatedContent}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,${encoded} */
`);