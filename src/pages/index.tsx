import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Imports from next js
import type { NextPage } from "next";

//Components, stores and types
import Nav from "../components/Nav";
import Body from "../components/Body";

const Home: NextPage = () => {
	// const [user, setUser] = useState<userData | null>(null);

	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				{/* 
					<App>
						<Nav/>
						<Body>
							<Sidebar>
								<Profile/>
								<Footer/>
							</Sidebar>
							<Main>
								<Form/>
								<Feed data-fetching-client-side scrollable={true}/>
							</Main>
							<RightBar/>
						</Body>
					</App>
				*/}
				<div className="w-screen h-screen overflow-x-hidden">
					<Nav />
					<Body />
				</div>

				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default Home;
