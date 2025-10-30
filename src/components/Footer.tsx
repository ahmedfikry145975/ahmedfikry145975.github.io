import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left max-w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-words">
                Ahmed Fikry Ghamry
              </h3>
              <p className="text-sm sm:text-base text-gray-400">Software Engineer</p>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:ahmed.fikry.ghamry@gmail.com"
                className="w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed6655fikry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/ahmedfikry145975"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
            <p className="text-gray-400 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-1 px-2">
              © {currentYear} Ahmed Fikry Ghamry. Made with
              <Heart size={14} className="text-emerald-400 fill-emerald-400" />
              by Ahmed Fikry Ghamry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
