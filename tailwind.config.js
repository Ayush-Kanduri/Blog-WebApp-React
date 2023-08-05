/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bg: "#b8ecff",
				border: "#24cbfd",
				text: "#06344b",
				textHover: "#0077a5",
				post: "#f0faff",
				btn: "#08b9ef",
				btnHover: "#0096cc",
				btnActive: "#0077a5",
				btnDisabled: "#b8ecff",
			},
			screens: {
				// Desktop First Approach
				xs: { max: "400px" },
				sm: { max: "640px" },
				md: { max: "766px" },
				lg: { max: "1024px" },
				xl: { max: "1380px" },
			},
			fontFamily: {
				text: `"Roboto", sans-serif`,
				heading: `"Poppins", sans-serif`,
				logo: `"Montserrat", sans-serif`,
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
