const Concat = require('concat-with-sourcemaps');
const fs = require('fs');

const distFileName = 'formstone.min.css';
const concat = new Concat(true, distFileName, '\n');

const srcRoot = `${__dirname}/node_modules/formstone/dist/css/`;

concat.add(`background.css`, fs.readFileSync(`${srcRoot}background.css`));
concat.add(`carousel.css`, fs.readFileSync(`${srcRoot}carousel.css`));
 
var concatenatedContent = concat.content;
var sourceMapForContent = concat.sourceMap;

fs.writeFileSync(distFileName, concatenatedContent);