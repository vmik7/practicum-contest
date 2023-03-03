# Тестовое Задание. Автор программы "Веб-разработчик”.

---

## Задание

С помощью TypeScript и библиотеки React реализуйте компонент DropdownMenu. Используйте только функциональные компоненты.

Контент должен задаваться снаружи компонента. DropdownMenu должен уметь автоматически определять сторону открытия контента и раскрывать его по клику и ховеру в ту сторону, где будет больше места относительно триггера.

Допустимые позиции:

- вниз-вправо,
- вверх-вправо,
- вниз-влево,
- вверх-влево.

Сделайте триггер изменяемым и представьте его любым элементом интерфейса.
Клик внутри контента не должен закрывать дропдаун, тогда как клик снаружи или повторный клик в триггер должны закрывать активный дропдаун.

Может быть только один активный дропдаун. Если открывается другой, текущий должен быть закрыт.

Если при скролле дропдауна не хватает места для отрисовки, то он должен перерисоваться в новое место так, чтобы контент отобразился корректно. При выходе инициирующего элемента из вьюпорта скрывать дропдаун, а про появлении — отображать снова.

Ширина контента дропдауна должна быть ограничена 260 пикселями.

Для иконок (опционально) можно воспользоваться паком `feather-icons`. Избегайте `any` в типах и постарайтесь типизировать весь компонент. Для вёрстки используйте любое удобное решение.

Очень хорошо, если клик на пункт меню будет вызывать соответствующий ему колбэк, а после этого закрывать дропдаун.

Постарайтесь не использовать сторонние библиотеки, ограничьтесь React и react-dom.

Прототип:

![IMG_20210113_193017_888.png](https://praktikum.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4640cdb2-1305-4170-9557-3acbed4f5ed1%2FIMG_20210113_193017_888.png?id=e1d6bf8e-bcfa-47b2-aeb9-5c08bbb422c2&table=block&spaceId=daa3be6d-804a-415d-9112-8c01fba24d73&width=2000&userId=&cache=v2)

Сопроводите код инструкцией по запуску проекта в `[README.md](http://readme.md)` репозитория на GitHub.

---

## Решение

### Запуск

```bash
npm start
```
