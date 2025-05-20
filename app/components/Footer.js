import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <div className="flex items-center space-x-2 mb-3">
                    <img src="/logo.png" alt="Bulk Bazaar Logo" className="h-10" />
                    <span className="text-xl font-bold text-white">Bulk Bazaar</span>
                </div>
                <p>We Leading Independent Wholesaler</p>
                <p>Established In Business Since 2005.</p>

                <div className="flex space-x-4 mt-4">
                    <a href="#" aria-label="Twitter" className="hover:text-white">
                        <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-white">
                        <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-white">
                        <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                    </a>
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
                <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i>Unit 6 Commerce park, 19 Commerce way, Croydon. CR0 4YL</p>
                <p className="mb-2"><i className="fas fa-phone mr-2"></i>+44 7464 085266</p>
                <p><i className="fas fa-envelope mr-2"></i>sales@thamescc.com</p>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
            <p>©2005–2025 Bulk Bazaar.Co.Uk</p>
            <div className="flex space-x-2 mt-2 md:mt-0">
                <img src="/visa.svg" alt="Visa" className="h-5" />
                <img src="/mastercard.svg" alt="Mastercard" className="h-5" />
                <img src="/paypal.svg" alt="PayPal" className="h-5" />
                <img src="/dinners-club.svg" alt="Dinners Club" className="h-5" />
                <img src="/rupay.svg" alt="Rupay" className="h-5" />
                <img src="/amex.svg" alt="Amex" className="h-5" />
            </div>
        </div>
    </footer>
);
