import Image from "next/image";

const Userpic = ({ height, width }: { height: number; width: number }) => {
	return (
		<div>
			<Image
				src={`https://avatars.dicebear.com/api/micah/b.svg`}
				alt="avatar"
				height={height}
				width={width}
				// layout="responsive"
			/>
		</div>
	);
};

export default Userpic;
