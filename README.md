# ProFile

Demo app for underlying implementation. Built using custom boilerplate: [rgualberto/redux-bp](https://github.com/rgualberto/redux-bp)

### Premise
ProFile would be used by professional researchers to connect and collaborate with one another. Research articles in the form of Wikipedia Entries can be searched for, added, and easily accessed in the profile page. This is in addition to any personal details a researcher might want to share (i.e. education, work location, etc...).

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
Navigation requires a server config to correctly resolve routes. The dev server comes configured. Adjust your route configuration for your production server accordingly.

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

### Credentials
use either of the following logins to edit the appropriate profile:

Sven Motorson
  - **user**: doctor_doge
  - **pass**: verywow123

Alice Mendelson
  - **user**: professor
  - **pass**: iteachstuff2you

### Notes
- Once routes are configured on production server, use the production configuration (webpack.prod.config.babel.js) for the webpack bundler.

## ToDo
- Add ability to edit a few profile fields
- add ability to pull image from github or facebook
- add ability to remove research
- make research search table responsive
