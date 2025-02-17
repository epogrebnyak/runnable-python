import { defineConfig } from "vitepress";
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/runnable-python/",
  title: "The Python Starter 2025",
  description: "Interactive excercises for beginners",
  ignoreDeadLinks: true,
  vite: {
    plugins: [vitepressPythonEditor()],
    clearScreen: false
  },
  themeConfig: {
    // footer does not display on the usual page, just on the home page    
    footer: {
      message: 'All rights reverved.',
      copyright: 'Copyright © 2025 Evgeniy Pogrebnyak.'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Start", link: "/task" },
      { text: "Resources", link: "/resources/student-checklist" },
      { text: "Feedback", link: "/feedback" },
      { text: "Events", link: "/events" },
      { text: "About", link: "/" },

    ],
    sidebar: [
      {
        text: "Practice Tasks in Python",
        items: [
          { text: "1. Greet ⭐", link: "/task/" },
          { text: "2. Motivate 🏓", link: "/task/motivate" },
          { text: "3. Count 🗿", link: "/task/count" },
          { text: "4. Write a text 🗿", link: "/task/write-text" },
          { text: "5. Print 🏓", link: "/task/print" },
          { text: "6. Guess 🗿", link: "/task/guess" },
          { text: "7. Assess 🗿", link: "/task/assess" },
        ],
      },
      {
        text: "Resources",
        items: [
          { text: "Student checklist", link: "/resources/student-checklist" },
          { text: "Teaching ideas", link: "/resources/teaching-ideas" },
          { text: "Books, blogs and talks", link: "/resources/books-and-talks" },
          { text: "Terms of use", link: "/terms-of-use" },
        ]
      },    
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/epogrebnyak/runnable-python" },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    kg: {
      label: "кыргызча",
      lang: "kg",
      link: "/kg/",
    },
    ru: {
      label: "Русский",
      lang: "ru",
      link: "/ru/",
    },
  },
});
