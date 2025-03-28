# Маруся
Онлайн-платформа Маруся позволяет искать фильмы, добавлять их в избранное и просматривать трейлеры.

#### <div align="center"> [>>> ЗАПУСТИТЬ В БРАУЗЕРЕ <<<](https://lomt1k.github.io/marusya) </div>

Приложение выполнено на React с типизацией Typescript, а также с использованием MobX для управления состояниями. Для стилизации используется препроцессор SASS (SCSS). Кроме того, использованы такие библиотеки, как axios и tanstack-query для взаимодействия с API и react-router для маршрутизации в приложении. За валидацию отвечает react-hook-form. Сборку приложения обеспечивает Vite.
<div align="center">
  <img src="https://img.shields.io/badge/React-0B0B0B?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/MobX-764ABC?style=for-the-badge&logo=mobx&logoColor=white" alt="MobX"/>
  <img src="https://img.shields.io/badge/Sass-C69?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/>
  <img src="https://img.shields.io/badge/REST%20API-67C8F7?style=for-the-badge&logo=axios&logoColor=white" alt="REST API Badge"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
</div>

## Описание
В приложении два основных экрана - главная и жанры. На главной пользователю предлагается случайный фильм, который он может обновить, и список из 10 самых популярных фильмов. А на странице жанров пользователь может выбрать любой жанр и посмотреть фильмы, которые относятся именно к нему.

<div align="center">
  <img align="top" src="https://i.ibb.co/yFFLn0qg/mainPage.webp" alt="Главная страница" width="48%" />
  <img align="top" src="https://i.ibb.co/zV0MR43p/genres-Page.webp" alt="Страница жанров" width="48%" />
</div>

### Личный кабинет

На платформе реализован функционал регистрации и входа. Авторизованный пользователь может перейти в личный кабинет, в котором он может посмотреть свою коллекцию избранного или данные об аккаунте, а также выйти из него.

<div align="center">
  <img src="https://i.ibb.co/7xvJBjW4/3.webp" alt="Профиль - избранное" width="48%" />
  <img src="https://i.ibb.co/m5QvxC2V/4.webp" alt="Профиль - настройки" width="48%" />
</div>

### Валидация форм

Для обеспечения корректности вводимых данных реализована валидация.
<div align="center">
  <img src="https://i.ibb.co/hJnZhWM9/5.webp" alt="Авторизация" width="32%" />
  <img src="https://i.ibb.co/vFMGJ3G/6.webp" alt="Регистрация" width="32%" />
  <img src="https://i.ibb.co/LDR43KtJ/sucReg.webp" alt="Успешная регистрация" width="32%" />
</div>

### Основной функционал приложения позволяет:
- Получать случайный фильм и обновлять его
<div align="center">
  <img src="https://i.imgur.com/cyxqDya.gif" alt="Обновление случайного фильма" width="60%" />
</div>

- Просматривать фильмы по жанрам
<div align="center">
  <img src="https://i.ibb.co/fGn1NRxL/8.webp" alt="Список фильмов по жанру" width="60%" />
</div>

- Просматривать информацию о фильме
<div align="center">
  <img src="https://i.ibb.co/Z6z8QSfQ/9.webp" alt="Страница конкретного фильма" width="60%" />
</div>

- Смотреть трейлер фильма
<div align="center">
  <img src="https://i.ibb.co/s9p7zThM/10.webp" alt="Трейлер фильма" width="60%" />
</div>

- Находить нужный фильм через форму поиска
<div align="center">
  <img src="https://i.ibb.co/zCXhyG8/search.webp" alt="Поиск фильма" width="60%" />
</div>

### Адаптировано для разных устройств
Приложение адаптировано для работы на различных устройствах, что обеспечивает удобство и гибкость в его использовании.
<div align="center">
  <img align="top" src="https://i.ibb.co/JWvy7V7h/12d.webp" alt="Desktop" width="56%">
  <img align="top" src="https://i.ibb.co/fdgpwvZL/12a.webp" alt="Tablet" width="28%">
  <img align="top" src="https://i.ibb.co/1ttNtsxJ/12c.webp" alt="Mobile" width="14%">
</div>

## Запуск
- Установите зависимости командой `npm i`
- Введите команду `npm run dev` для запуска проекта

### Сборка
- Установите зависимости командой `npm i`
- Введите команду `npm run build` для сборки проекта
- Собранный проект находится в папке dist
