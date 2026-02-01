import React from 'react';
import { CV_DATA } from '../constants';

interface FooterProps {
    t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
    return (
        <footer className="mt-32 border-t-4 border-[#0f172a] bg-[#0f172a] py-16 text-white">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black tracking-tighter">{t.name}</h2>
                    <p className="font-bold text-slate-400 text-lg">{t.footer.role}</p>
                </div>
                <div className="flex gap-8">
                    {CV_DATA.socials.map(social => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-black hover:text-[#FCFCE4] transition-colors decoration-2 underline-offset-4 hover:underline"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-500">
                        © {new Date().getFullYear()} {t.name}.
                    </p>
                    <p className="text-sm font-medium text-slate-500">
                        {t.footer.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
