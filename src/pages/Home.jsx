import Card from "@/components/Card";
import DB from "@/utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const unsubscribeRef = useRef(null);
	useEffect(() => {
		try {
			const collectionRef = collection(DB, "Posts");
			unsubscribeRef.current = onSnapshot(
				collectionRef,
				(snapshot) => {
					const posts = [];
					if (snapshot.empty) {
						setPosts(posts);
						setIsLoading(false);
						return;
					}
					snapshot.forEach((doc) => posts.push(doc.data()));
					setPosts(posts);
					setIsLoading(false);
				},
				(error) => {
					console.log("Encountered an Error! Detaching the Listener...");
					console.log(error);
				}
			);
		} catch (error) {
			console.log("Error:", error);
		}
		return () => {
			unsubscribeRef.current();
			console.log("Unmounting & Unsubscribing!");
		};
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
				<div className="text-5xl p-10 flex-1">
					<h1 className="text-text font-heading font-bold xs:text-center ">
						Your Posts
					</h1>
					<div className="mt-7 w-full flex flex-wrap gap-16 p-3 justify-between items-center transition-all ease-linear lg:justify-center ">
						{posts.length > 0 ? (
							posts.map((post) => <Card key={post.id} post={post} />)
						) : (
							<h1 className="text-text font-bold font-logo text-2xl mt-10 ">
								You haven't posted anything!
							</h1>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
