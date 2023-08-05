const Navbar = ({ NavLink, Link, Outlet }) => {
	return (
		<>
			<nav className="bg-border w-full p-7 shadow-md">
				<ul className="flex w-full gap-7 justify-start items-center xs:flex-col">
					<li className="xs:order-2">
						<NavLink
							to="/"
							className="hover:text-post text-text font-bold transition-all ease-in-out duration-150 text-xl tracking-wide sm:text-sm "
						>
							Home
						</NavLink>
					</li>
					<li className="xs:order-2">
						<NavLink
							to="/create-post"
							className="hover:text-post text-text font-bold transition-all ease-in-out duration-150 text-xl tracking-wide sm:text-sm "
						>
							Create Post
						</NavLink>
					</li>
					<li className="ml-auto xs:mr-auto xs:order-1">
						<Link
							to="/"
							className="text-text font-bold text-5xl font-logo drop-shadow-md sm:text-2xl "
						>
							Blogster Hub
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
