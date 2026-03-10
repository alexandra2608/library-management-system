# Library Management System

Веб-приложение для управления библиотекой, реализованное с использованием микросервисной архитектуры и GraphQL.

Система состоит из нескольких микросервисов, объединённых через единый API Gateway. Клиентская часть приложения взаимодействует с сервером через Apollo Client.

## Технологический стек

Backend

* Node.js
* GraphQL
* Apollo Server
* Apollo Federation
* PostgreSQL

Frontend

* React
* Apollo Client

## Архитектура

Приложение построено на основе микросервисной архитектуры.

Каждый микросервис отвечает за свою доменную область и реализует CRUD-операции над соответствующей сущностью.

Микросервисы объединяются через единый GraphQL Gateway.

Схема взаимодействия:

Frontend (React + Apollo Client)
→ GraphQL Gateway (Apollo Gateway)
→ Микросервисы (Books, Members, Loans)
→ База данных (PostgreSQL)

## Микросервисы

### Books Service

Отвечает за управление книгами в библиотеке.

Основные операции:

* добавление книги
* редактирование информации о книге
* удаление книги
* получение списка книг

### Members Service

Отвечает за управление пользователями библиотеки.

Основные операции:

* добавление пользователя
* редактирование информации о пользователе
* удаление пользователя
* получение списка пользователей

### Loans Service

Отвечает за управление выдачами книг.

Основные операции:

* оформление выдачи книги
* возврат книги
* получение списка выдач

## Структура проекта

library-management-system

* books-service — микросервис управления книгами
* members-service — микросервис управления пользователями
* loans-service — микросервис управления выдачами
* gateway — GraphQL API Gateway (Apollo Gateway)
* library-frontend — клиентская часть приложения на React

## Установка и запуск

### 1. Установка зависимостей

Установить зависимости в каждой части проекта.

`cd library-service && npm install`

`cd gateway && npm install`

`cd ../books-service && npm install`

`cd ../members-service && npm install`

`cd ../loans-service && npm install`

`cd ../library-frontend && npm install`

### 2. Настройка базы данных

Создать базу данных PostgreSQL и таблицы:

* members
* books
* loans

(структура таблиц приведена в проекте)

Параметры подключения к базе данных необходимо указать в `.env` или `db.js`.

### 3. Запуск микросервисов

Запустить каждый сервис в отдельном терминале:

`cd ../books-service && node index.js`

`cd ../members-service && node index.js`

`cd ../loans-service && node index.js`

### 4. Запуск GraphQL Gateway

`cd gateway && node index.js`

### 5. Запуск клиентского приложения

`cd ../library-frontend && npm start`

## Возможности системы

* управление книгами библиотеки
* управление пользователями
* управление выдачами книг
* GraphQL API с использованием Apollo Federation
* взаимодействие микросервисов через единый Gateway

## Демонстрация

Видео демонстрации работы системы:
https://drive.google.com/file/d/1vxMlRH2uY47xELbGEXjifUOqKWOPnkJc/view
