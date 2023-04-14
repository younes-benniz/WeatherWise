import { Dialog } from "@headlessui/react";
import Brand from "../Brand";
import { CloseNavBtn } from "../NavToggleBtn";

const MobileMenu = ({ NavMenu, mobileMenuOpen, setMobileMenuOpen }) => {
	return (
		<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
			<div className="fixed inset-0 z-10" />
			<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
				<div className="flex items-center justify-between">
					<Brand />
					<CloseNavBtn onClick={() => setMobileMenuOpen(false)} />
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className="space-y-2 py-6">
							{NavMenu.map((item, index) => (
								<a
									key={index}
									href={item.link}
									className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									{item.name}
								</a>
							))}
						</div>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
};

export default MobileMenu;
