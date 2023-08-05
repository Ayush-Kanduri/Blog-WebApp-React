import { ThemeProvider } from "styled-components";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
	Link,
	Outlet,
	useParams,
} from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyles";
import classes from "@/styles/App.module.css";
import { CreatePost, Home, PostDetail, Error } from "@/pages";
import Navbar from "@/components/Navbar";

const App = () => {
	const theme = {
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
			xs: "320px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1380px",
		},
		fonts: {
			logo: `"Montserrat", sans-serif`,
			text: `"Roboto", sans-serif`,
			heading: `"Poppins", sans-serif`,
		},
	};
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div className={`${classes.app} bg-bg font-text flex flex-col`}>
				<Router>
					<Routes>
						<Route
							path="/"
							element={
								<Navbar
									NavLink={NavLink}
									Link={Link}
									Outlet={Outlet}
								/>
							}
						>
							<Route index element={<Home />} />
							<Route path="create-post" element={<CreatePost />} />
							<Route path="post">
								<Route
									path=":postID"
									element={<PostDetail useParams={useParams} />}
								/>
								<Route path="" element={<Error />} />
							</Route>
							<Route path="*" element={<Error />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
};

export default App;

// ----------------
// NOTE:: Normal Routing //
// ----------------
{
	/* 
<Router>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="create-post" element={<CreatePost />} />
		<Route path="post/:postID" element={<PostDetail />} />
		<Route path="*" element={<Error />} />
	</Routes>
</Router> 
*/
}

// -----------------------------------------
// NOTE:: Nested Routing & Outlet (Routing Layout) //
// -----------------------------------------
{
	/* <Router>
	<Routes>
		<Route
			path="/"
			element={<Navbar NavLink={NavLink} Link={Link} Outlet={Outlet} />}
		>
			<Route index element={<Home />} />
			<Route path="create-post" element={<CreatePost />} />
			<Route path="post">
				<Route
					path=":postID"
					element={<PostDetail useParams={useParams} />}
				/>
			</Route>
			<Route path="*" element={<Error />} />
		</Route>
	</Routes>
</Router> */
}

{
	/* NOTE:: Common Layout
<nav>  
	-----------
	-----------
</nav>
<Outlet /> Child Routes 
*/
}
