import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const OpenNavBtn = ({ onClick }) => (
	<div className="flex lg:hidden">
		<button
			type="button"
			className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
			onClick={onClick}>
			<Bars3Icon className="h-6 w-6" aria-hidden="true" />
		</button>
	</div>
);

const CloseNavBtn = ({ onClick }) => (
	<button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={onClick}>
		<XMarkIcon className="h-6 w-6" aria-hidden="true" />
	</button>
);

export { OpenNavBtn, CloseNavBtn };
