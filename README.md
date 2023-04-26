# Патерни програмування на основі бібліотеки axios

Я обрала бібліотеку axios, тому що вона використовується в проекті і мені було цікаво зрощуміти, як реалізуються паретни програмування у великих та складних бібліотеках.
Аналіз частин коду: [репозиторій](https://github.com/axios/axios), [фрагмент](https://github.com/axios/axios/blob/v1.x/lib/axios.js)

1. **Принцип одиничної відповідальності**

Axios виконує лише одну відповідальність - він здійснює HTTP-запити. Axios не відповідає за збереження даних або їх обробку, це завдання розподіляється між іншими частинами коду. Це дозволяє зберігати Axios досить простим і масштабованим

2. **Принцип заміщення Лісков:**
   Для прикладу використаємо метод axios.create(). Цей метод повертає новий екземпляр Axios зі своїми власними налаштуваннями. Цей метод можна використовувати для створення окремих екземплярів Axios з різними налаштуваннями, такими як базовий URL, інтерсептори запиту та відповіді.
   [фрагмент](https://github.com/axios/axios/blob/v1.x/lib/axios.js)

Цей приклад показує, що метод axios.create() повертає новий екземпляр Axios, з яким можна взаємодіяти окремо від основного екземпляру Axios. Це дозволяє налаштувати кожен екземпляр Axios для конкретної задачі, що дозволяє уникнути змішування налаштувань та зберігати чистоту коду.

Що стосується принципу заміщення Лісков, то Axios повністю дотримується цього принципу. Axios підтримує різні HTTP-запити, такі як GET, POST, PUT, PATCH та DELETE. Усі ці методи можна використовувати у всіх місцях коду, де потрібно виконати HTTP-запит. Завдяки цьому код залишається чистим і зрозумілим, оскільки не потрібно створювати окремі методи для кожного типу HTTP-запиту.
