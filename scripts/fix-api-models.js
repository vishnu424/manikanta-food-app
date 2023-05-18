const fs = require('fs');
const path = require('path');

// Loop through all files in models/api directory
// Prepend @ts-nocheck to each file
function prependTsNoCheck() {
  const files = fs.readdirSync('src/models/api');
  const tsNoCheck = '// @ts-nocheck \n';
  files.forEach((file) => {
    const filePath = path.join('src/models/api', file);
    const data = fs.readFileSync(filePath, 'utf8');
    // If file does not already have @ts-nocheck, prepend it
    if (!data.includes(tsNoCheck)) {
      const result = tsNoCheck + data;
      fs.writeFileSync(filePath, result, 'utf8');
    }
  });
}

prependTsNoCheck();
