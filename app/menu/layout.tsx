"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    // State to manage the visibility of the dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex h-screen">
            <nav className="w-1/8 h-full bg-navy-blue p-4">
                <div className="text-white text-center">Masters</div>
                <div
                    className="text-white text-center p-4 cursor-pointer relative"
                    onClick={toggleDropdown}
                >
                    Courses
                    {isDropdownOpen && (
                        <div className="absolute left-0 bg-white text-black mt-2 rounded shadow-lg w-full">
                            <Link href="/courses/btech" legacyBehavior>
                                <a className="block px-4 py-2 hover:bg-gray-200">BTech</a>
                            </Link>
                            <Link href="/courses/mtech" legacyBehavior>
                                <a className="block px-4 py-2 hover:bg-gray-200">MTech</a>
                            </Link>
                            <Link href="/courses/mba" legacyBehavior>
                                <a className="block px-4 py-2 hover:bg-gray-200">MBA</a>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
            <main className="w-7/8 p-4">
                {children}
            </main>
        </div>
    );
}


