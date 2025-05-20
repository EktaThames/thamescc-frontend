import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
    <footer className="bg-footer text-gray-300 py-10 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center space-x-2 mb-3">
                    <img src="/bulk-bazaar-logo.svg" alt="Bulk Bazaar Logo" className="h-10 logo" />
                    
                </div>
                <p className="text-gray-500">We Leading Independent Wholesaler</p>
                <p className="text-gray-500">Established In Business Since 2005.</p>




                <div className="space-x-4 mt-4">
				
				<h4 className="text-lg">Socials</h4>
				
				 <div className="flex items-center gap-6 mt-4">
                    <a href="#" aria-label="Twitter" className="hover:text-white">
                        <img src="/twitter.svg" alt="X" />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-white">
                        <img src="/insta.svg" alt="X" />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-white">
                        <img src="/facebook.svg" alt="X" />
                    </a>
					</div>
                </div>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-3">Help</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Payments</a></li>
                    <li><a href="#" className="hover:underline">Shipping</a></li>
                    <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
                    <li><a href="#" className="hover:underline">FAQ</a></li>
                    <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-3">Important Information</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">My Account</a></li>
                    <li><a href="#" className="hover:underline">All Categories</a></li>
                    <li><a href="#" className="hover:underline">Promotion</a></li>
                    <li><a href="#" className="hover:underline">New Arrivals</a></li>
                    <li><a href="#" className="hover:underline">Special Offers</a></li>
                    <li><a href="#" className="hover:underline">Wallet Points</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-3">Contacts</h4>
                <p className="mb-2 flex gap-2 mb-5"> <img src="/location.svg" alt="Location" className="h-5" /> <span>Unit 6 Commerce park, 19 Commerce way, Croydon. CR0 4YL</span></p>
                <p className="mb-2 flex gap-2 mb-5"><img src="/phone.svg" alt="Phone" className="h-5" /> <span>+44 7464 085266</span></p>
                <p className="mb-2 flex gap-2 mb-5"><img src="/email.svg" alt="Email" className="h-5" /> <span>sales@thamescc.com</span></p>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 max-w-7xl mx-auto">
			<p className="text-white">Privacy & Policy</p>
            <p className="text-white">©2005-2025 bulk bazaar.co.uk</p>
            <div className="flex space-x-2 mt-2 md:mt-0">
                <img src="/visa.svg" alt="Visa" className="h-5" />
                <img src="/master-card.svg" alt="master-card" className="h-5" />
				<img src="/visa-c.svg" alt="Visa" className="h-5" />
				<img src="/american-exp.svg" alt="American Express" className="h-5" />
				<img src="/n-card.svg" alt="n-card" className="h-5" />
				<img src="/discover.svg" alt="Discover" className="h-5" />
				<img src="/rupay.svg" alt="Rupay" className="h-5" />
				<img src="/net-banking.svg" alt="net-banking" className="h-5" />
				<img src="/cash-on-delivery.svg" alt="cash-on-delivery" className="h-5" />
				<img src="/easy-emi.svg" alt="easy-emi" className="h-5" />
            </div>
        </div>
    </footer>
);
