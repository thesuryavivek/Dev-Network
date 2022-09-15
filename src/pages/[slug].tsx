import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const User: NextPage = () => {
	const router = useRouter();
	const user = router.query.slug;

	return <div>User: {user}</div>;
};

export default User;
