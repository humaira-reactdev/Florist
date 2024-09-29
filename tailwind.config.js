/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  // Center the container by default
        padding: '50px',  // Add padding around the container
        screens: {
          sm: '100%',     // Full width on small screens
          md: '728px',    // Custom width on medium screens
          lg: '1024px',   // Custom width on large screens
          xl: '1280px',   // Custom width on extra large screens
          '2xl': '1440px', // Custom width on 2XL screens
        },
      },
    },
  },
  plugins: [],
}
