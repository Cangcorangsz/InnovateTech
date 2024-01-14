/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1/1': '1 / 1',
        '16/9': '16 / 7',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '8/5': '8 / 5',
        'tech-1': '4256 / 2832',
      },
      backgroundImage: {
        'tech-1': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }
    },
  },
  plugins: [],
}

