# Патерни програмування на основі бібліотеки axios

Я обрала бібліотеку axios, тому що вона використовується в проекті і мені було цікаво зрозуміти, як реалізуються паретни програмування у великих та складних бібліотеках.
Аналіз частин коду: [репозиторій](https://github.com/axios/axios).

1. **Принцип одиничної відповідальності**

Axios виконує лише одну відповідальність - він здійснює HTTP-запити. Axios не відповідає за збереження даних або їх обробку, це завдання розподіляється між іншими частинами коду. Це дозволяє зберігати Axios досить простим і масштабованим. Також приклад одиничної відповідальності саме в коді бібліотеки, можна навести розділення між функціями з нормалізації заголовків [фрагмент](https://github.com/axios/axios/blob/v1.x/lib/core/AxiosHeaders.js#L8). Кожна функція виконує окрему дію та не пов'язана з іншими.

2. **Принцип заміщення Лісков:**
   Для прикладу використаємо метод axios.create(). Цей метод повертає новий екземпляр Axios зі своїми власними налаштуваннями. Цей метод можна використовувати для створення окремих екземплярів Axios з різними налаштуваннями, такими як базовий URL, інтерсептори запиту та відповіді.
   [фрагмент](https://github.com/axios/axios/blob/v1.x/lib/axios.js#L38)

Цей приклад показує, що метод axios.create() повертає новий екземпляр Axios, з яким можна взаємодіяти окремо від основного екземпляру Axios. Це дозволяє налаштувати кожен екземпляр Axios для конкретної задачі, що дозволяє уникнути змішування налаштувань та зберігати чистоту коду.

3. **Принцип розділення інтерфейсів**
   Axios підтримує різні HTTP-запити, такі як GET, POST, PUT, PATCH та DELETE [фрагмент](https://github.com/axios/axios/blob/2701911260a1faa5cc5e1afe437121b330a3b7bb/lib/core/Axios.js#L85). Усі ці методи можна використовувати у всіх місцях коду, де потрібно виконати HTTP-запит. Завдяки цьому код залишається чистим і зрозумілим, оскільки не потрібно створювати окремі методи для кожного типу HTTP-запиту.
