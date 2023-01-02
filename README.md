# Overview

Tools to rewind and playback news feeds and podcasts.

# Dev Notes

Initial goals:

Using TypeScript, create a service that takes a WordPress blog and uses this API:

https://blog.ted.com/wp-json/wp/v2/posts?before=2022-07-05T05:10:55Z&per_page=10

To create RSS feeds accessible like so:

http://feedwinder.com/api?started_on=DATE&matching_date=DATE&feed=ENCODEDFEEDURL

# Gotchas

SELF_SIGNED_CERT_IN_CHAIN or UNABLE_TO_GET_ISSUER_CERT error

Use the browser to grab the site's full certificate path, save it to a .crt, and then add it to your NODE_EXTRA_CA_CERTS environment variable.
