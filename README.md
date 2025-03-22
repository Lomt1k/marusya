# Маруся
### Онлайн-платформа Маруся позволяет искать фильмы, добавлять их в избранное и просматривать трейлеры.

### [ОТКРЫТЬ В БРАУЗЕРЕ](https://lomt1k.github.io/marusya)

### Приложение выполнено на React с типизацией Typescript, а также с использованием MobX для управления состояниями. Для стилизации используется препроцессор SASS (SCSS). Кроме того, использованы такие библиотеки, как axios и tanstack-query для взаимодействия с API и react-router для маршрутизации в приложении. За валидацию отвечает react-hook-form. Сборку приложения обеспечивает Vite.
<div align="center">
  <img src="https://img.shields.io/badge/React-0B0B0B?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/MobX-764ABC?style=for-the-badge&logo=mobx&logoColor=white" alt="MobX"/>
  <img src="https://img.shields.io/badge/Sass-C69?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/>
  <img src="https://img.shields.io/badge/REST%20API-67C8F7?style=for-the-badge&logo=axios&logoColor=white" alt="REST API Badge"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
</div>

## Описание
### В приложении два основных экрана - главная и жанры: на главной пользователю предлагается случайный фильм, который он может обновить, и список из 10 самых популярных фильмов, а на странице жанров пользователь может выбрать любой жанр и посмотреть фильмы, которые относятся именно к нему.

<div align="center">
  <img align="top" src="https://i.imgur.com/m0NUCqC.png" alt="Главный экран приложения" width="48%" />
  <img align="top" src="https://i.imgur.com/zWqWiTE.png" alt="Экран приложения - жанры" width="48%" />
</div>

### На платформе реализован функционал регистрации и входа, так что залогиненный пользователь может перейти в личный кабинет, где он может посмотреть свою коллекцию избранного или данные об аккаунте, а также выйти из него.

<div align="center">
  <img src="https://i.imgur.com/6JjLdV6.png" alt="Профиль - избранное" width="48%" />
  <img src="https://i.imgur.com/6jamAd7.png" alt="Профиль - настройки" width="48%" />
</div>

### Для обеспечения корректности вводимых данных реализована валидация.
<div align="center">
  <img src="https://i.imgur.com/Hn6UVDv.gif" alt="Регистрация" width="40%" />
</div>

### Основной функционал приложения позволяет:
#### - Получать случайный фильм и обновлять его
<div align="center">
  <img src="https://i.imgur.com/cyxqDya.gif" alt="Обновление случайного фильма" width="60%" />
</div>

#### - Просматривать фильмы по жанрам
<div align="center">
  <img src="https://i.imgur.com/kazApRj.png" alt="Обновление случайного фильма" width="48%" />
  <img src="https://i.imgur.com/5vJuSQ7.png" alt="Обновление случайного фильма" width="48%" />
</div>

#### - Просматривать информацию о фильме в карточке фильма
<div align="center">
  <img src="https://i.imgur.com/Qdadg0F.png" alt="Обновление случайного фильма" width="60%" />
</div>

#### - Смотреть трейлер фильма
<div align="center">
  <img src="https://i.imgur.com/kn8e9Pi.png" alt="Обновление случайного фильма" width="60%" />
</div>

#### - Добавлять фильм в избранное и просматривать список избранных фильмов.

### Приложение адаптировано для работы на различных устройствах, что обеспечивает удобство и гибкость в его использовании.
<div align="center">
  <img align="top" src="https://i.imgur.com/cZgQR5d.png" alt="Демо 1024" width="30%">
  <img align="top" src="https://i.imgur.com/pfEihZ3.png" alt="Демо 768" width="30%">
  <img align="top" src="https://i.imgur.com/JcVCqRM.png" alt="Демо 360" width="30%">
</div>

## Запуск
#### - Установите зависимости командой `npm i`;
#### - Введите команду `npm run dev` для запуска проекта.
