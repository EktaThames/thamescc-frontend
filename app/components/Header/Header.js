export const Header = () => (
    <header className="bg-white border-b border-orange-100 py-3 px-8">

        <div className="w-full mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img src="/images/bulk-bazaar-logo.svg" alt="Bulk Bazaar Logo" className="h-10 logo" />
            </div>

            <div className="flex flex-1 mx-8">
			<div className="w-full flex border border-gray-300 border-1 rounded-lg head-search">
                <input
                    type="text"
                    placeholder="SEARCH FOR PRODUCTS, BRANDS AND MORE"
                    className="w-full border-0 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 border-none outline-none"
                />
                <button className="border-0 px-4 flex items-center justify-center">
                     <img src="/images/search.svg" alt="Bulk Bazaar Logo" className="search" />
                </button>
            </div>
			</div>

            <div className="flex items-center space-x-6 text-sm font-semibold">
                <div className="flex items-center space-x-2">
                    <div className="bg-orange p-2 rounded-full text-white">
                        <img src="/images/call.svg" alt="Call" />
                    </div>
                    <div className="text-xs">
                        <div className="primary-text font-opensans">Need Help?</div>
                        <div className="text-blue-600 font-semibold leading-tight font-opensans"><span className="primary-text">Call Now</span>  <a href="tel:0123456789" className="hover:underline ml-1">0123456789</a></div>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="bg-orange p-2 rounded-full text-white">
                       <img src="/images/profile.svg" alt="profile" />
                    </div>
                    <span className="text-black font-opensans">Kuldeep Rana</span>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="relative bg-orange p-2 rounded-full text-white">
                        <img src="/images/cart.svg" alt="Cart" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full px-1">0</span>
                    </div>
                    <span className="text-black">£0.00</span>
                </div>
            </div>
        </div>
    </header>	
);
