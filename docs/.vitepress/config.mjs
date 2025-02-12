import { defineConfig } from "vitepress";
import { vitepressPythonEditor } from "vitepress-python-editor/vite-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Python Starter 2025",
  description: "A quick path to start coding",
  ignoreDeadLinks: true,
  vite: {
    plugins: [vitepressPythonEditor()],
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
      { text: "About", link: "/introduction" },

    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Who is this for?", link: "/introduction/index" },
          { text: "Can I use an LLM?", link: "/introduction/llm" },
        ],
      },
      {
        text: "Seven Tasks in Python",
        items: [
          { text: "1. Greet ⭐", link: "/task/" },
          { text: "2. Motivate 🏓", link: "/task/motivate" },
          { text: "3. Count 🗿", link: "/task/count" },
          { text: "4. Write text 🗿", link: "/task/write-text" },
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
          { text: "Provide feedback", link: "/feedback"},
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
