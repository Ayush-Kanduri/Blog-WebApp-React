import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	useEffect(() => {
		// setTimeout(() => navigate("/"), 5000);
		// navigate("/");
	}, [navigate]);

	return (
		<div className="text-5xl p-10">
			<h1 className="text-text font-heading font-bold">Error 404</h1>
			<h2 className="mt-5 font-medium font-text text-text text-4xl sm:text-2xl">
				Oops! We're Lost in Space
			</h2>
			<p className="mt-2 pl-1 text-text text-xl font-text font-medium sm:text-base">
				Sorry, the page you are looking for is floating in a galaxy far, far
				away.
			</p>
			<img
				className="mt-5 ml-1 object-cover object-center rounded-lg shadow-lg max-w-[400px] sm:max-w-[320px] xs:max-w-[230px]"
				src="https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
				alt="error 404 image"
			/>
		</div>
	);
};

export default Error;
