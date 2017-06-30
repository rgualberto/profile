# Outline

1. ProFile
  - Use Facebook api to prefill fields
  - add location - geolocate/localize with bing or google api
  - Add sections/categories/etc... if time
2. Research Entries/Interests (Wikipedia Articles)
  - Use Wikimedia api
  - Search wikipedia articles (returns page titles?)
  - query page (action=parse to get raw markup)
  - save page
    - give option to save subcategory (table of contents id=toc class=toc) url (anchored link)
    - give link to page to check against (can’t reliably parse page other than that)
  - share links
3. Nice to have
  - Use twilio api
    - contact list - sms at will


## Installation

Using npm:

```shell
$ npm install
```

Alternatively, using yarn:

```shell
$ yarn
```

## Usage

Run local dev server (http://localhost:8080):

```shell
$ npm run dev
```

Run jest specs:

```shell
$ npm run tests
```

Run eslint:

```shell
$ npm run lint:js
```
