import { useFormInput } from "@/utils/hooks";
import DB from "@/utils/firebase";
import Toast from "@/components/Toast";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const CreatePost = () => {
	const title = useFormInput("");
	const author = useFormInput("");
	const content = useFormInput("");
	const url = useFormInput("");

	const validateUrl = (url) => {
		const regex = /^(ftp|http|https):\/\/[^ "]+$/;
		return regex.test(url);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			e.stopPropagation();

			if (!title.value || !author.value || !url.value || !content.value) {
				toast.error("Please fill all the fields! 🚩");
				return;
			}
			if (!validateUrl(url.value)) {
				toast.error("Please enter a valid URL! 🚩");
				return;
			}

			const collectionRef = collection(DB, "Posts");
			const newDocumentRef = await addDoc(collectionRef, {
				title: title.value,
				author: author.value,
				content: content.value,
				url: url.value,
				createdAt: new Date(),
			});
			await updateDoc(newDocumentRef, { id: newDocumentRef.id });
			scrollToTop();
			toast.success("Post Created Successfully! 🎉");
			title.reset();
			author.reset();
			content.reset();
			url.reset();
		} catch (error) {
			console.log("Error in adding the document:", error);
		}
	};

	return (
		<div className="text-5xl p-10 flex-1">
			<h1 className="text-text font-heading font-bold xs:text-center">
				Create Post
			</h1>
			<Toast />
			<form
				action=""
				method="post"
				onSubmit={handleSubmit}
				className="mt-7 w-full flex flex-col rounded-lg gap-2 bg-border p-3 shadow-md"
			>
				<div className="w-full flex flex-col p-4 gap-4">
					<label
						htmlFor="title"
						className="text-text font-bold text-4xl font-heading uppercase xs:text-2xl"
					>
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						required
						placeholder="Enter the Blog Title"
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg xs:text-sm"
						value={title.value}
						onChange={title.onChange}
					/>
				</div>
				<div className="w-full flex flex-col p-4 gap-4">
					<label
						htmlFor="author"
						className="text-text font-bold text-4xl font-heading uppercase xs:text-2xl"
					>
						Author
					</label>
					<input
						type="text"
						name="author"
						id="author"
						required
						placeholder="Enter the Author Name"
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg xs:text-sm"
						value={author.value}
						onChange={author.onChange}
					/>
				</div>
				<div className="w-full flex flex-col p-4 gap-4">
					<label
						htmlFor="content"
						className="text-text font-bold text-4xl font-heading uppercase xs:text-2xl"
					>
						Content
					</label>
					<textarea
						name="content"
						id="content"
						cols="30"
						rows="15"
						placeholder="Enter the Blog Content"
						required
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg resize-none whitespace-pre-wrap sm:h-52 xs:text-sm"
						value={content.value}
						onChange={content.onChange}
					></textarea>
				</div>
				<div className="w-full flex flex-col p-4 gap-4">
					<label
						htmlFor="url"
						className="text-text font-bold text-4xl font-heading uppercase xs:text-2xl"
					>
						Thumbnail URL
					</label>
					<input
						type="url"
						name="url"
						id="url"
						required
						placeholder="Enter the Thumbnail URL"
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg xs:text-sm"
						value={url.value}
						onChange={url.onChange}
					/>
				</div>
				<div className=" p-4 gap-4">
					<StyledButton
						variant="contained"
						type="submit"
						startIcon={<AssignmentTurnedInIcon />}
					>
						Submit
					</StyledButton>
				</div>
			</form>
		</div>
	);
};

export default CreatePost;

const StyledButton = styled(Button)`
	background-color: #06344b !important;
	color: #f0faff !important;
	font-weight: 900 !important;
	font-family: "Montserrat", sans-serif !important;
	text-transform: uppercase !important;
	padding: 15px 30px !important;
	border-radius: 8px !important;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) !important;
	font-size: 1rem !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important ;
	text-align: center !important;
	@media (width<=400px) {
		font-size: 0.3rem !important;
		padding: 10px 20px !important;
	}
`;

//NOTE:: This function checks for a new line character and adds a new line character if it is not present//
// const checkNewLineCharacter = () => {
// 	const linesArray = content.current.value.split("\n");
// 	let result = "";
// 	for (const line of linesArray) {
// 		if (line === "") result += `\n`;
// 		else {
// 			if (linesArray.indexOf(line) === 0) result += line;
// 			else result += `\n` + line;
// 		}
// 	}
// 	setVal(result);
// };

{
	/* <p className="text-text text-base font-text whitespace-pre-wrap">{Val}</p> */
}
