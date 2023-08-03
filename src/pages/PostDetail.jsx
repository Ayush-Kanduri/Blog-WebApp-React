const PostDetail = ({ useParams }) => {
	const { postID } = useParams();
	return (
		<>
			<div className="text-5xl p-10">
				<h1 className="text-text font-heading font-semibold">
					Post {postID} Detail
				</h1>
			</div>
		</>
	);
};

export default PostDetail;
