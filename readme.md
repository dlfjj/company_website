<p align="left"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

<p align="left">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

<p align="left"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>


<p align="left">
   <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://app.saucelabs.com/builds/50f8372d79f743a3b25fb6ca4851ca4c"><img src="https://app.saucelabs.com/buildstatus/vuejs" alt="Build Status"></a>
</p>


[![CircleCI](https://circleci.com/gh/wokes/Laravel-Vue-SPA-template.svg?style=svg&circle-token=298f67655b97cd0e8034777d031d50c11cc707f6)](https://circleci.com/gh/wokes/Laravel-Vue-SPA-template)


# American Dunnage Inc. Website framework
This is simple demonstration of American Dunange Website frameowork. It configures to run on apache server. Make sure you have MySQL installed.

# Installation
```
Set up your .env file

composer install
npm install
npm run dev

php artisan migrate
php artisan key:generate

php artisan serve    <- see 'Worth noting' below
```

## Features included out of the box:
- CircleCI configuration
- Token auth powered by Laravel Passport
- Vue.js frontend with Vuex and Vue Router, utilizing auth API endpoints for registration, login and retrieval of currently logged in user 

## Worth noting
- User IDs are UUIDs instead of integers
- Laravel is configured so that web server accesses base directory, not `/public`. To run it locally with `php artisan serve`, copy `index.php` in base directory and rename it to `server.php`.
- Frontend can be accessed at `localhost:8000`