import Image from "next/image";

const Userpic = ({
	height,
	width,
	hash,
}: {
	height: number;
	width: number;
	hash: number | undefined;
}) => {
	return (
		<div>
			<Image
				src={`https://avatars.dicebear.com/api/micah/${hash}.svg`}
				alt="avatar"
				height={height}
				width={width}
				// layout="responsive"
			/>
		</div>
	);
};

export default Userpic;
