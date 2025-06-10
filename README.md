This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


##install node_modules

  npm i




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 How to Login or Sign Up in KEEP Notes

KEEP Notes uses local storage for handling user authentication in a simple and lightweight way. Here's how it works:

### 📝 1. Registration First
- A user **must register** first using the Sign Up form.
- Registration stores the user's data in the browser's `localStorage`.

### 🔓 2. Login After Registration
- Once registered, the user can **log in** using their credentials.
- The app verifies the login data against what's stored in `localStorage`.

### 🚪 3. What Happens on Logout?
- If the user **logs out**, their session is cleared from memory.
- Since KEEP Notes relies on `localStorage` only (no backend or database),
  the user will need to **register again** if the data is cleared from storage or if accessed from a different browser or device.

> ⚠️ Note: This is a client-side only demo — do not use for real credentials or production authentication.




![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/fa6a6eefaa96761202fbcf686e778fd5c49f6de5/Screenshot%202025-06-10%20200409.png)
![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/80bbc09e9c7e474434174a33551ae99527eae465/Screenshot%202025-06-10%20200420.png)
![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/80bbc09e9c7e474434174a33551ae99527eae465/Screenshot%202025-06-10%20200449.png)
![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/80bbc09e9c7e474434174a33551ae99527eae465/Screenshot%202025-06-10%20200500.png)
![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/80bbc09e9c7e474434174a33551ae99527eae465/Screenshot%202025-06-10%20200528.png)
![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/80bbc09e9c7e474434174a33551ae99527eae465/Screenshot%202025-06-10%20200544.png)
![image alt](https://github.com/vignesh-vic/Keep_notes-Ass/blob/80bbc09e9c7e474434174a33551ae99527eae465/Screenshot%202025-06-10%20200557.png)


