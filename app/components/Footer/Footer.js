import Link from "next/link";
export const Footer = () => (
    <footer className="bg-footer text-gray-300 py-10 px-8 text-sm">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center space-x-2 mb-3">
                    <img src="/images/bulk-bazaar-logo.svg" alt="Bulk Bazaar Logo" className="h-10 logo" />

                </div>
                <p className="text-gray-500">We Leading Independent Wholesaler</p>
                <p className="text-gray-500">Established In Business Since 2005.</p>

                <div className="space-x-4 mt-4">

                    <h4 className="text-lg">Socials</h4>

                    <div className="flex items-center gap-6 mt-4">
                        <Link href="#" aria-label="Twitter" className="hover:text-white">
                            <img src="/images/twitter.svg" alt="X" />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="hover:text-white">
                            <img src="/images/insta.svg" alt="X" />
                        </Link>
                        <Link href="#" aria-label="Facebook" className="hover:text-white">
                            <img src="/images/facebook.svg" alt="X" />
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-3">Help</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:underline">Payments</Link></li>
                    <li><Link href="#" className="hover:underline">Shipping</Link></li>
                    <li><Link href="#" className="hover:underline">Cancellation & Returns</Link></li>
                    <li><Link href="#" className="hover:underline">FAQ</Link></li>
                    <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-3">Important Information</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:underline">My Account</Link></li>
                    <li><Link href="#" className="hover:underline">All Categories</Link></li>
                    <li><Link href="#" className="hover:underline">Promotion</Link></li>
                    <li><Link href="#" className="hover:underline">New Arrivals</Link></li>
                    <li><Link href="#" className="hover:underline">Special Offers</Link></li>
                    <li><Link href="#" className="hover:underline">Wallet Points</Link></li>
                    <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-3">Contacts</h4>
                <p className="mb-2 flex gap-2 mb-5"> <img src="/images/location.svg" alt="Location" className="h-5" /> <span>Unit 6 Commerce park, 19 Commerce way, Croydon. CR0 4YL</span></p>
                <p className="mb-2 flex gap-2 mb-5">
                    <img src="/images/phone.svg" alt="Phone" className="h-5" />
                    <Link href="tel:+447464085266" className="text-blue-600 hover:underline">+44 7464 085266</Link>
                </p>
                <p className="mb-2 flex gap-2 mb-5">
                    <img src="/images/email.svg" alt="Email" className="h-5" />
                    <Link href="mailto:sales@thamescc.com" className="text-blue-600 hover:underline">sales@thamescc.com</Link>
                </p>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-10 px-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 w-full mx-auto">
            <p className="text-white">Privacy & Policy</p>
            <p className="text-white">©2005-2025 bulk bazaar.co.uk</p>
            <div className="flex space-x-2 mt-2 md:mt-0">
                <img src="/images/visa.svg" alt="Visa" className="h-5" />
                <img src="/images/master-card.svg" alt="master-card" className="h-5" />
                <img src="/images/visa-c.svg" alt="Visa" className="h-5" />
                <img src="/images/american-exp.svg" alt="American Express" className="h-5" />
                <img src="/images/n-card.svg" alt="n-card" className="h-5" />
                <img src="/images/discover.svg" alt="Discover" className="h-5" />
                <img src="/images/rupay.svg" alt="Rupay" className="h-5" />
                <img src="/images/net-banking.svg" alt="net-banking" className="h-5" />
                <img src="/images/cash-on-delivery.svg" alt="cash-on-delivery" className="h-5" />
                <img src="/images/easy-emi.svg" alt="easy-emi" className="h-5" />
            </div>
        </div>
    </footer>
);
