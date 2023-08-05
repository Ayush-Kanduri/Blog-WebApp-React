import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
	return (
		<ToastContainer
			className="font-heading font-light text-sm flex justify-center items-center p-4"
			position="top-right"
			autoClose={5000}
			limit={1}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
		/>
	);
};

export default Toast;
