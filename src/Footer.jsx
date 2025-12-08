import React from 'react'

export const Footer = () => {
return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-6 mt-12 animate-fade-in">
        <div className="flex justify-center items-center h-20">
            <p className="text-lg font-semibold tracking-wide hover:scale-105 transition-transform duration-300">
                Made with <span className="text-red-500 animate-pulse">❤️</span> by Yash Gupta
            </p>
        </div>
    </footer>
)
}
