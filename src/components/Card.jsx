import Button from "@mui/material/Button";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
	const navigate = useNavigate();
	const printDate = (timestamp) => {
		const date = timestamp.toDate().toDateString();
		const formattedDate = new Date(date);
		return new Intl.DateTimeFormat("en-IN", {
			dateStyle: "long",
		}).format(formattedDate);
	};
	return (
		<div className="w-1/4 bg-[#7adeff] pb-5 flex flex-col gap-3 rounded-xl overflow-hidden shadow-lg shadow-slate-600 self-stretch min-w-[300px] md:w-[70%] sm:min-w-full ">
			<div className="w-full flex overflow-hidden ">
				<img
					src={post.url}
					alt="blog post thumbnail"
					className="w-full object-cover object-center h-56 hover:scale-110 transition-all ease-linear hover:brightness-90 md:h-80 xs:h-40"
				/>
			</div>
			<div className="w-full flex flex-col gap-0 relative pt-2 pl-2 md:min-h-[200px] xs:items-center xs:justify-center">
				<h2 className="text-text font-heading font-bold text-2xl px-4 xs:text-center xs:px-2 xs:text-lg">
					{post.title}
				</h2>
				<p className="text-[#095371] font-logo text-sm font-bold p-2 px-4 xs:px-2 xs:text-center">
					Posted by {post.author}
				</p>
				<StyledButton
					variant="contained"
					onClick={() => navigate(`/post/${post.id}`)}
				>
					Read
				</StyledButton>
				<p className="text-base text-[#095371] font-text absolute bottom-2 right-3 font-semibold border-b-2 border-[#095371] xs:relative xs:top-0 xs:right-0 xs:mt-5">
					{printDate(post.createdAt)}
				</p>
			</div>
		</div>
	);
};

export default Card;

const StyledButton = styled(Button)`
	width: 100px !important;
	margin-top: 1rem !important;
	margin-left: 1rem !important;
	color: #f0faff !important;
	background: #06344b !important;
	font-weight: 900 !important;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	@media (width<=400px) {
		margin-left: 0rem !important;
	}
`;
