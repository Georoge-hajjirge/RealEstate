import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const Footer = () => {
    return (

        <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="container mx-auto px-16 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            We are a trusted real estate company helping you find your dream home.
                            With years of experience, we make the process seamless and efficient.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-white">Our Services</a></li>
                            <li><a href="/properties" className="text-gray-400 hover:text-white">Properties</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400 mb-2">123 Real Estate St, City, Country</p>
                        <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
                        <p className="text-gray-400 mb-2">Email: info@realestate.com</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Linkedin size={24} />
                            </a>

                        </div>
                    </div>

                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    <p>&copy; 2025 RealEstate Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )

}
export default Footer;