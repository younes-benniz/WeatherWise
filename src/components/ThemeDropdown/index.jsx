import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiOutlineSun, HiOutlineMoon, HiDesktopComputer } from "react-icons/hi";

const themes = [
	{ name: "System", icon: HiDesktopComputer },
	{ name: "Light", icon: HiOutlineSun },
	{ name: "Dark", icon: HiOutlineMoon },
];

const ThemeDropdown = () => {
	const [selected, setSelected] = useState(themes[0]);

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className="relative mt-1">
				<Listbox.Button className="relative p-1.5 mb-1 cursor-pointer rounded-full border-2 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
					<span className="block truncate">
						<selected.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Listbox.Options className="absolute mt-1 right-0 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{themes.map((person, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
										active ? "bg-gray-100 text-blue-500" : "text-gray-900"
									}`
								}
								value={person}>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected
													? "font-medium text-blue-500"
													: "font-normal"
											}`}>
											<span className="absolute inset-y-0 left-0 flex items-center pl-3">
												<person.icon
													className="h-5 w-5"
													aria-hidden="true"
												/>
											</span>
											{person.name}
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default ThemeDropdown;
