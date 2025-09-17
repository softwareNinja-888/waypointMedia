import { Logo } from './helper/Logo'
import { Btn } from './helper/Btn'
import { Menu, X } from 'lucide-react';
import { AnimatedWord } from './helper/AnimatedWord'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Header({content}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    return (
        <header className="relative z-50">
            <div className="flex justify-between items-center bg-white/90 backdrop-blur-lg px-3 md:px-10 w-11/12 rounded-2xl mx-auto py-2">
                {/* LOGO */}
                <Logo name={content.name} textColor="text-black text-2xl" img={content.logoImg}/>
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:space-x-10 text-sm">        
                    {content.links.map((link, index) => (
                        <Link 
                            to={link.href.toLowerCase()} 
                            key={index} 
                            className="flex gap-1.5 no-underline relative cursor-pointer text-black"
                        >
                            <AnimatedWord 
                                word={link.name} 
                                textColor='text-black' 
                                font='font-Roboto' 
                                textSize="text-md"
                            />
                        </Link>
                    ))}
                </nav> 
                
                {/* Desktop CTA */}
                <Link to='/contact' className="hidden lg:block">
                    <Btn 
                        text="Schedule Meeting" 
                        bg="bg-mainGreen border-none" 
                        textColor="text-black text-sm transition-all duration-500 hover:rounded-xl hover:scale-105" 
                        font="font-Roboto" 
                        width='h-11 w-36'
                    />
                </Link>
                
                {/* Mobile menu toggle */}
                <button 
                    onClick={toggleMenu} 
                    className="lg:hidden text-black hover:text-black/70 transition-colors duration-300 z-50 relative" 
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    
                    {/* Mobile Menu */}
                    <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col h-full">
                            {/* Menu Header */}
                            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                                <Logo name={content.name} textColor="text-black text-xl" img={content.logoImg}/>
                                <button 
                                    onClick={toggleMenu} 
                                    className="text-black hover:text-black/70 transition-colors duration-300"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            
                            {/* Navigation Links */}
                            <nav className="flex-1 py-8">
                                {content.links.map((link, index) => (
                                    <Link
                                        key={link.id || index}
                                        to={link.href.toLowerCase()}
                                        className="block px-6 py-4 text-lg font-Roboto text-black hover:text-mainGreen hover:bg-gray-50 transition-all duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                            
                            {/* Mobile CTA */}
                            <div className="p-6 border-t border-gray-100">
                                <Link 
                                    to='/contact' 
                                    className="block w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Btn 
                                        text="Schedule Meeting" 
                                        bg="bg-mainGreen border-none" 
                                        textColor="text-black text-sm transition-all duration-500 hover:rounded-xl hover:scale-105" 
                                        font="font-Roboto" 
                                        width='h-12 w-full'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    )
}