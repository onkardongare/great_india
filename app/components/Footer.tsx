"use client";

import { Mail } from "lucide-react";
import { Container } from "./UI";

const Footer = () => (
  <footer className="bg-gray-50 border-t scroll-mt-32">
    <Container className="py-8 pb-20 sm:py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇮🇳</span>
            <span className="font-extrabold text-lg tracking-tight">Viksit Bharat</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">Citizen platform for a developed, inclusive, sustainable India.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><a href="#pillars" className="hover:text-gray-900">Pillars</a></li>
              <li><a href="#act" className="hover:text-gray-900">How to Help</a></li>
              <li><a href="#programs" className="hover:text-gray-900">Missions</a></li>
              <li><a href="#roadmap" className="hover:text-gray-900">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li><a href="#stories" className="hover:text-gray-900">Stories</a></li>
              <li><a href="#faq" className="hover:text-gray-900">FAQ</a></li>
              <li><a href="#pledge" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Stay updated</h4>
          <form className="mt-2 flex gap-2">
            <input className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" placeholder="Email address" type="email" />
            <button className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white font-semibold hover:bg-black"><Mail className="h-4 w-4" />Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Viksit Bharat. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Accessibility</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;