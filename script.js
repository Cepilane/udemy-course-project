"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотели?", ""); // + т.к ответ числового типа данных

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = +prompt("На сколько оцените его?", ""), // + т.к ответ числового типа данных
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = +prompt("На сколько оцените его?", ""); // + т.к ответ числового типа данных

personalMovieDB.movies[a] = b; // Записали свойства a,b в формате - ключ: значение
personalMovieDB.movies[c] = d;
// Когда мы записываем какие-то значения в объект, лучше использовать квадратные скобки
console.log(personalMovieDB);
