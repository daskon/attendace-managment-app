<h3 align="center">Attendance Tracking APP using Reactjs and Laravel</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---
</p>

## Table of Contents

- [About](#about)
- [Install](#installing)
- [Technology](#built_using)

## About <a name = "about"></a>

Attendance tracking app has developed using latest version of Reactjs 18 along with Laravel 9 back-end.

### .env modifications

# React app (cd app)
```
REACT_APP_API=http://localhost:8000/api
```

# Laravel app (cd api)
```
DB_DATABASE={set the database name}
DB_USERNAME={set DB_USERNAME}
DB_PASSWORD={set DB_PASSWORD}
```

### Installing

```
cd app
npm install
npm start
```
```
cd api
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

```
Front page : http://127.0.0.1:3000
Chalenge 2 : http://127.0.0.1:3000/tasktwo
```

### Testing

Please use the given excel file format for testing. (excel folder)

## Built Using <a name = "built_using"></a>

- [Reactjs 18](https://reactjs.org/blog/2022/03/29/react-v18.html) - Environment

## Authors <a name = "authors"></a>

- [@daskon](https://github.com/daskon)