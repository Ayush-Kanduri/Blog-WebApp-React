import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DB from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BarLoader from "react-spinners/BarLoader";

const PostDetail = () => {
	const [post, setPost] = useState({});
	const [isLoading, setLoading] = useState(true);
	const { postID } = useParams();

	useEffect(() => {
		(async () => {
			try {
				const documentRef = doc(DB, "Posts", postID);
				const documentSnapshot = await getDoc(documentRef);
				if (documentSnapshot.exists()) {
					const documentData = documentSnapshot.data();
					setPost(documentData);
					setLoading(false);
				} else {
					setLoading(false);
				}
			} catch (error) {
				console.log("Error:", error);
			}
		})();
	}, []);

	return (
		<>
			{isLoading && (
				<div className="text-5xl p-10 flex-1">
					<div className="flex flex-col justify-center items-center gap-8 mt-20 min-w-full">
						<h1 className="text-text font-bold font-logo animate-bounce">
							Loading...
						</h1>
						<BarLoader
							color="#06344b"
							height={7}
							loading
							speedMultiplier={1}
							width={300}
						/>
					</div>
				</div>
			)}
			{!isLoading && (
				<div className="text-5xl p-10 w-full">
					{Object.keys(post).length === 0 ? (
						<Post />
					) : (
						<Post flag={true} post={post} />
					)}
				</div>
			)}
		</>
	);
};

const Post = ({ flag, post }) => {
	const printDate = (timestamp) => {
		const date = timestamp.toDate().toDateString();
		const formattedDate = new Date(date);
		return new Intl.DateTimeFormat("en-IN", {
			dateStyle: "long",
		}).format(formattedDate);
	};
	return (
		<>
			{flag && post && (
				<div className="w-full flex flex-col mb-10">
					<h1 className="text-text font-heading text-6xl font-bold sm:text-4xl xs:text-2xl">
						{post.title}
					</h1>
					<h3 className="text-text text-base font-logo font-semibold pl-1 mt-5 flex justify-start items-center sm:text-xs xs:flex-col xs:gap-3 xs:items-start">
						<VerifiedUserIcon />
						&nbsp;Posted by {post.author}&nbsp;&nbsp;&nbsp;&nbsp;
						<CalendarMonthIcon />
						&nbsp;{printDate(post.createdAt)}
					</h3>
					<p className="w-full whitespace-pre-wrap mt-10 font-medium text-text text-lg font-text pl-2 sm:text-base sm:pl-0">
						{post.content}
					</p>
					<img
						src={post.url}
						alt="blog post thumbnail"
						className="rounded-2xl shadow-xl shadow-gray-500 w-full object-cover object-center self-center mt-14"
					/>
				</div>
			)}
			{!flag && !post && (
				<h1 className="text-text font-bold font-logo text-2xl mt-10 ">
					No such post exists!
				</h1>
			)}
		</>
	);
};

export default PostDetail;
