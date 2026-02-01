
import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >


            <div
                className="max-w-5xl w-full h-full flex items-center justify-center pointer-events-none"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageSrc}
                    alt="Preview"
                    className="max-w-full max-h-[90vh] object-contain border-8 border-white rounded-xl neo-shadow pointer-events-auto"
                />
            </div>
        </div>
    );
};

export default ImageModal;
