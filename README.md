
# Игры разума

## Описание
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

## Установка игр
```bash
make install
```

## Игра: "Проверка на чётность":
Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное

 ```bash
 brain-even
 ```

[![asciicast](https://asciinema.org/a/lTczgzt4uio2sRwNARmoHhhyu.svg)](https://asciinema.org/a/lTczgzt4uio2sRwNARmoHhhyu)

## Игра: "Калькулятор"
Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

```bash
brain-calc:
```
[![asciicast](https://asciinema.org/a/ZsGIs05dlFnB69mrsFv3BNXha.svg)](https://asciinema.org/a/ZsGIs05dlFnB69mrsFv3BNXha)

## Игра "НОД"
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

```bash
brain-gcd:
```
[![asciicast](https://asciinema.org/a/hVOXCbLXMxktaFG9qBJhcqdSX.svg)](https://asciinema.org/a/hVOXCbLXMxktaFG9qBJhcqdSX)

## Игра "Арифметическая прогрессия"
Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

```bash
brain-progression:
```
[![asciicast](https://asciinema.org/a/OCThgFsLoPlKGWZzf63EPhySE.svg)](https://asciinema.org/a/OCThgFsLoPlKGWZzf63EPhySE)

## Игра "Простое ли число?"
Пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no — если нет.

```bash
brain-prime:
```
[![asciicast](https://asciinema.org/a/0rltS2ZakUVNO06rSfyKqs9wx.svg)](https://asciinema.org/a/0rltS2ZakUVNO06rSfyKqs9wx)

#### Hexlet tests and linter status:
[![Actions Status](https://github.com/UotanKlein/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/TominVadim/frontend-project-44/actions)

#### Code Climate:
[![Maintainability](https://api.codeclimate.com/v1/badges/5d33056c21c633166a6a/maintainability)](https://codeclimate.com/github/TominVadim/frontend-project-44/maintainability)