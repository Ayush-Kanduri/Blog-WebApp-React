const Navbar = ({ NavLink, Link }) => {
	return (
		<nav className="bg-border w-full p-7 shadow-xl">
			<ul className="flex w-full gap-7 justify-start items-center">
				<li>
					<NavLink
						to="/"
						className="hover:text-post text-text font-bold transition-all ease-in-out duration-150 text-xl tracking-wide"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/create-post"
						className="hover:text-post text-text font-bold transition-all ease-in-out duration-150 text-xl tracking-wide"
					>
						Create Post
					</NavLink>
				</li>
				<li className="ml-auto">
					<Link
						to="/"
						className="text-text font-bold text-5xl font-logo drop-shadow-xl"
					>
						Blogster Hub
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
