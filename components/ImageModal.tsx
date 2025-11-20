import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrevious: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrevious,
}) => {
    // Fechar com tecla ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleArrowKeys = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                onPrevious();
            } else if (e.key === 'ArrowRight') {
                onNext();
            }
        };

        window.addEventListener('keydown', handleEscape);
        window.addEventListener('keydown', handleArrowKeys);

        // Prevenir scroll do body quando modal está aberto
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEscape);
            window.removeEventListener('keydown', handleArrowKeys);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrevious]);

    const showNavigation = images.length > 1;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                onClick={onClose}
            >
                {/* Botão Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Fechar"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Contador de Imagens */}
                {showNavigation && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}

                {/* Botão Anterior */}
                {showNavigation && currentIndex > 0 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                        className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                )}

                {/* Botão Próximo */}
                {showNavigation && currentIndex < images.length - 1 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Próxima imagem"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                )}

                {/* Imagem */}
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="relative max-w-7xl max-h-[90vh] mx-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Imagem ${currentIndex + 1}`}
                        className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageModal;
