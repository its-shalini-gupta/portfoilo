/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        cream: '#FFFDF4',
        card: '#FFF7E6',
        navbar: '#FFFAF0',
        sectionBg: '#FFF7E6', // Background for sections
        accent: '#FF8C42', // Accent color for buttons and highlights

        // Dark Mode Colors
        darkBg: '#1A120B', // Dark background color for the whole app
        darkCardBg: '#3C2F2F', // Dark card background color
        darkMutedTan: '#BFA98F', // Muted tan for text or accents
        darkButtonBg: '#3C2F2F', // Button background for dark mode
        darkAccent: '#FFB347', // Dark accent color
        darkText: '#FAF5E4', // Light text for dark mode
        darkMuted: '#D9C9B3', // Muted color for elements like borders and text

        // Text Colors
        // Text Colors
        textLight: '#1E1E1E', // Dark text color (light mode)
        textDark: '#FAF5E4',  // Light text color (dark mode)


        // Button Colors
        btnBgLight: '#FF8C42', // Button background (light mode)
        btnBgDark: '#FFB347', // Button background (dark mode)
        btnHoverLight: '#e67617', // Button hover color (light mode)
        btnHoverDark: '#e0a240', // Button hover color (dark mode)

        // Additional Dark Mode Adjustments
        accentLight: '#FF8C42', // Lighter accent color for dark mode
        accentDark: '#FFD07F', // Darker accent color for dark mode
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
