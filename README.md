# 🟣 Vanilla JS + Sof Redux Counter App

Ushbu loyiha **Redux kutubxonasi** yordamida Vanilla JavaScript’da Counter (hisoblagich) ilovasini yaratishni ko‘rsatadi. Hech qanday React yoki boshqa framework ishlatilmagan — sof Redux va DOM orqali ishlaydi.

---

## 📚 1. Redux nima?

**Redux** — bu JavaScript ilovalari uchun **state management** (holatni boshqarish) kutubxonasidir.  
Asosiy g‘oya shuki, butun ilovaning holati yagona **store** ichida saqlanadi va o‘zgarishlar faqat **action** yuborish orqali amalga oshiriladi.

Redux 3 ta tamoyilga asoslanadi:

1. **Yagona store** — butun dastur uchun bitta holat ombori.
2. **State faqat o‘qiladi** — uni to‘g‘ridan-to‘g‘ri o‘zgartirib bo‘lmaydi, faqat actionlar orqali.
3. **O‘zgarishlar sof reducerlar orqali boshqariladi** — reducerlar funksiyadir, ular eski holat + action qabul qilib, yangi holatni qaytaradi.

---

## 🧠 2. Loyihaning tuzilishi

redux-counter/
│
├── index.html
├── index.js
├── style.css
└── README.md

php-template
Copy code

---

## 🧰 3. Texnologiyalar

- 🟡 **Vanilla JavaScript**
- 🟣 **Redux (CDN orqali)** — https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.1/redux.min.js
- ✨ CSS (blur + gradient dizayn)
- 🌐 Hech qanday build tool yo‘q — to‘g‘ridan-to‘g‘ri brauzerda ishlaydi.

---

## 🏗️ 4. HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vanilla Redux Counter</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <h1 id="count">0</h1>
      <div class="buttons">
        <button class="btn add" id="plus">+</button>
        <button class="btn remove" id="minus">−</button>
      </div>
    </div>

    <!-- Redux CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.1/redux.min.js"></script>
    <script src="./index.js"></script>
  </body>
</html>
🎨 5. CSS (Purple dizayn, blur + gradient)
css
Copy code
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #5f2c82, #49a09d);
  font-family: "Poppins", sans-serif;
  margin: 0;
}

.container {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

#count {
  font-size: 4rem;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
}

.add {
  background: linear-gradient(135deg, #9d50bb, #6e48aa);
}

.remove {
  background: linear-gradient(135deg, #6e48aa, #9d50bb);
}
🧠 6. JavaScript — Sof Redux bilan ishlash
javascript
Copy code
// 1. Reduxdan createStore olish (CDN orqali global window.Redux)
const { createStore } = window.Redux;

// 2. Boshlang‘ich holat
const initialState = { count: 0 };

// 3. Reducer funksiyasi
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// 4. Store yaratish
const store = createStore(counterReducer);

// 5. DOM elementlarini olish
const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// 6. Render funksiyasi — UI yangilaydi
function render() {
  const state = store.getState();
  countEl.textContent = state.count;
}
store.subscribe(render);
render();

// 7. Tugmalar orqali action yuborish
plusBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

minusBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
🧪 7. Ishlash prinsipi
Boshlanishida → createStore reducer yordamida boshlang‘ich holatni saqlaydi.

Har safar dispatch chaqirilganda → reducer yangi state qaytaradi.

store.subscribe() orqali UI har safar avtomatik yangilanadi.

DOM elementlar state bilan sinxron holatda ishlaydi.

📝 8. Git va .gitignore
Git orqali yuklashdan oldin .gitignore fayli qo‘shish kerak:

gitignore
Copy code
node_modules/
dist/
.env
🚀 9. Ishga tushurish
Fayllarni bir papkaga joylashtiring.

index.html faylini brauzerda oching ✅

Tugmalar yordamida counterni boshqaring.

🌟 10. Keyingi bosqichlar
🔁 Reset tugmasi qo‘shish

🧠 Bir nechta reducerlar bilan ishlash (combineReducers)

💾 State'ni localStorage’da saqlash

🕹️ Actionlarni alohida faylga ajratish

✍️ Muallif
Feruz Gaffarov
Frontend Developer | Mentor | Cybersecurity enthusiast
📧 neyrocoder@gmail.com
🌐 ilmhub.uz

