// src/components/Footer.js
import Link from 'next/link'
import Image from 'next/image' // 如果您使用图片作为Logo

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and About */}
          <div>
            <Link href="/" className="text-xl font-bold text-white mb-4 inline-block">
              {/* <Image src="/images/logo-white.png" alt="Your Company Logo" width={150} height={40} /> */}
              YourLogo
            </Link>
            <p className="text-sm">
              Providing innovative shelf pusher solutions to enhance retail display and organization.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link href="/catalog" className="hover:text-yellow-400 transition-colors">Download Catalog</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog/News</Link></li> {/* 假设有博客页 */}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@example.com" className="hover:text-yellow-400 transition-colors">info@example.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-yellow-400 transition-colors">+1 234 567 890</a></li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons (Placeholder) */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-yellow-400 transition-colors">
            {/* Replace with actual SVG icons or FontAwesome */}
            <span className="material-icons-outlined">facebook</span>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <span className="material-icons-outlined">flutter_dash</span> {/* Placeholder for Twitter/X */}
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-yellow-400 transition-colors">
            <span className="material-icons-outlined">group</span> {/* Placeholder for LinkedIn */}
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} YourCompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}