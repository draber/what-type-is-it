import fs from 'fs';

fs.readdirSync('./docs').forEach(file => {
    if(file.endsWith('.html')) {
        let html = fs.readFileSync(`./docs/${file}`, 'utf8');
        html = html.replace(/<section>/g, `<section class="readme">`);
        html = html.replace('<li class="nav-heading">Tutorials</li>', `<li class="nav-heading">Return values</li>`);
        html = html.replace(/<a href="tutorial-([^"]+)">([^<]+)<\/a>/g, (full, m1, m2) => {
            return `<a href="tutorial-${m1}">${m2.replace(/-/g, ' ')}</a>`;
        });
        html = html.replace(/<h1 class="page-title">([^<]+)<\/h1>/g, (full, m1) => {
            return `<h1 class="page-title">${m1.replace(/-/g, ' ')}</h1>`;
        });
        fs.writeFileSync(`./docs/${file}`, html);
    }
});

let css = fs.readFileSync(`./docs/styles/jsdoc-default.css`, 'utf8');
css = css.replace(/font-size\: 1(3|4)px;/g, '');
css = css.replace(/width\: 250px;/g, 'width: 270px;');
fs.writeFileSync(`./docs/styles/jsdoc-default.css`, css);
