import Image from "next/image";

const Userpic = () => {
	return (
		<div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-blue-200">
			<Image
				src={`https://avatars.dicebear.com/api/micah/b.svg`}
				alt="avatar"
				height={50}
				width={50}
				// layout="responsive"
			/>
		</div>
	);
};

export default Userpic;
