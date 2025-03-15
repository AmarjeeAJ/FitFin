import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Show/hide button logic
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Calculate scroll progress
    const updateScrollProgress = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 cursor-pointer w-12 h-12 rounded-full bg-[#1a103f] shadow-lg overflow-hidden border-2 border-white"
                >
                    {/* Progress Bar */}
                    <div
                        className="absolute bottom-0 left-0 h-full bg-[#A855F7]"
                        style={{ height: `${scrollProgress}%` }}
                    />
                    {/* Arrow Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        <FaArrowUp size={20} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
