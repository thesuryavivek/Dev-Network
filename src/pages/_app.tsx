import "../styles/globals.css";
import Head from "next/head";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import type { AppRouter } from "./api/trpc/[trpc]";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
	return (
		<>
			<Head>
				<title>Social media demo app</title>
			</Head>
			<SessionProvider session={pageProps.session}>
				<div className="w-screen overflow-x-hidden">
					<Component {...pageProps} />
				</div>
			</SessionProvider>
		</>
	);
};

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}/api/trpc`
			: "http://localhost:3000/api/trpc";

		return {
			url,
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		};
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: true,
})(MyApp);
