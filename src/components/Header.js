// src/components/Header.js
'use client' // Required for useState and event handlers

import Link from 'next/link'
import Image from 'next/image' // 如果您使用图片作为Logo
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Products' }, // 假设您有产品页
    { href: '/', label: 'Catalog' },
    { href: '/', label: 'About Us' }, // 假设您有关于我们页面
    { href: '/', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {/* 如果使用图片Logo，替换下方文字 */}
          {/* <Image src="/images/logo.png" alt="Your Company Logo" width={150} height={40} /> */}
          YourLogo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact" // 或者特定的报价页面
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-icons-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col items-center py-4 space-y-3">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-8 rounded-lg transition-colors w-4/5 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}