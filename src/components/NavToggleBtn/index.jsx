import { HiMenu, HiX } from "react-icons/hi";

const OpenNavBtn = ({ onClick }) => (
	<div className="flex lg:hidden md:hidden">
		<button
			type="button"
			className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			onClick={onClick}>
			<HiMenu className="h-6 w-6" aria-hidden="true" />
		</button>
	</div>
);

const CloseNavBtn = ({ onClick }) => (
	<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={onClick}>
		<HiX className="h-6 w-6" aria-hidden="true" />
	</button>
);

export { OpenNavBtn, CloseNavBtn };
