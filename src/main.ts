let rawURL = `https://blog.ted.com/wp-json/wp/v2/posts?before=2022-07-05T05:10:55Z&per_page=10`;

fetch(rawURL)
    .then(response => {
        return response.text();
    })
    .then(s => {
        console.log(s);
    });
