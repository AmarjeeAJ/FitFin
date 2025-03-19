import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const updateScrollProgress = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="fixed bottom-8 right-8">
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="cursor-pointer w-12 h-12 rounded-full bg-[#1a103f] shadow-lg overflow-hidden border-2 border-white relative"
                >
                    {/* Water Fill Effect */}
                    <div
                        className="absolute bottom-0 w-full bg-[#74ccf4] transition-all duration-500 ease-in-out"
                        style={{
                            height: `${scrollProgress}%`,
                            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
                        }}
                    />

                    {/* Arrow Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                        <FaArrowUp size={20} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
