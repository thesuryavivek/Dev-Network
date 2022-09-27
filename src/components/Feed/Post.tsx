import React from "react";

const Post = ({ title }: { title: string }) => {
	return <div className="px-8 py-4">{title}</div>;
};

export default Post;
