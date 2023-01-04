/// <reference types="node" />

import * as cmdline from 'ts-command-line-args';
let WPAPI = require('wpapi');

interface ICopyFilesArguments{
    url: string;
    feedStartDate: Date;
    matchingDate: Date;
    help?: boolean;
}

function parseDate(value: any) {
    return new Date(Date.parse(value));
}

let commands = cmdline.parse<ICopyFilesArguments>({
    url: { type: String, alias: "u", optional: true },
    feedStartDate: { type: parseDate, optional: true },
    matchingDate: { type: parseDate, optional: true },
    help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
},
{
    helpArg: 'help',
    headerContentSections: [{ header: 'Feed Winder', content: 'A tool for time-shifting feeds, starting with any WordPress site.' }],
    // footerContentSections: [{ header: 'Footer', content: `Copyright: Big Faceless Corp. inc.` }],
});

console.log('Commands:', commands);

/*

let s = commands.feedStartDate.toISOString();
let rawURL = `${commands.url}/wp-json/wp/v2/posts?before=${s}&per_page=10`;

console.log('URL:', rawURL);

fetch(rawURL)
    .then(response => {
        return response.text();
    })
    .then(s => {
        console.log(s);
    });

*/

var wp = new WPAPI({ endpoint: commands.url });
wp.posts().get()
    .then(posts => {
        console.log(posts);
    });

// TODO: Use feed to turn this into a rss feed - https://github.com/jpmonette/feed
