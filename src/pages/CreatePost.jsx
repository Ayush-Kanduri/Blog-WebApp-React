const CreatePost = () => {
	return (
		<div className="text-5xl p-10 flex-1">
			<h1 className="text-text font-heading font-bold">Create Post</h1>
			<form
				action=""
				method="post"
				className="mt-7 w-full flex flex-col rounded-lg"
			>
				<div className="w-full flex flex-col p-7 gap-4">
					<label
						htmlFor="title"
						className="text-text font-bold text-4xl font-heading uppercase"
					>
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						required
						placeholder="Enter the Blog Title"
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg"
					/>
				</div>
				<div className="w-full flex flex-col p-7 gap-4">
					<label
						htmlFor="author"
						className="text-text font-bold text-4xl font-heading uppercase"
					>
						Author
					</label>
					<input
						type="text"
						name="author"
						id="author"
						required
						placeholder="Enter the Author Name"
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg"
					/>
				</div>
				<div className="w-full flex flex-col p-7 gap-4">
					<label
						htmlFor="content"
						className="text-text font-bold text-4xl font-heading uppercase"
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
						className="bg-post text-text font-text font-semibold p-2 px-3 rounded-md shadow-lg border-0 focus:outline-none focus:ring-0 focus:border-0 placeholder:text-text placeholder:opacity-30 text-lg resize-none "
					></textarea>
				</div>
				<div className=" p-7 gap-4">
					<button
						type="submit"
						className="bg-btn hover:bg-btnHover text-post rounded-md transition-all  ease-linear p-3 px-5 text-xl shadow-lg hover:text-bg"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePost;
