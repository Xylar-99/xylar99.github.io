const fs = require('fs');
const path = require('path');

// Simple HTML wrapper for the SVG
const svgPath = '/goinfre/abquaoub/portfolio/public/resume_ats_optimized_90.svg';
const svgContent = fs.readFileSync(svgPath, 'utf8');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { margin: 0; padding: 0; }
        svg { width: 100%; height: 100vh; }
    </style>
</head>
<body>
    ${svgContent}
</body>
</html>
`;

fs.writeFileSync('/goinfre/abquaoub/portfolio/public/resume.html', htmlContent);
console.log('HTML wrapper created: resume.html');
console.log('Now you can:');
console.log('1. Open resume.html in a browser');
console.log('2. Press Ctrl+P to print to PDF');
console.log('3. Select A4 paper size and minimum margins');