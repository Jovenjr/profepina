import { motion } from "framer-motion";
import { BUSINESS_INFO, TIKTOK_VIDEOS } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";

const TikTokVideo = ({ video, index }: { video: typeof TIKTOK_VIDEOS[0], index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if TikTok embed script exists and is ready
    if (window.tiktokEmbedsArray && containerRef.current) {
      const blockquote = document.createElement('blockquote');
      blockquote.className = 'tiktok-embed';
      
      // Extract video ID from URL
      const videoIdMatch = video.embedUrl.match(/\/video\/(\d+)/);
      const videoId = videoIdMatch ? videoIdMatch[1] : '';
      
      if (videoId) {
        blockquote.setAttribute('cite', video.embedUrl);
        blockquote.setAttribute('data-video-id', videoId);
        blockquote.setAttribute('style', 'max-width: 605px; min-width: 280px;');
        
        // Add required attribution section
        blockquote.innerHTML = `
          <section>
            <a target="_blank" href="${video.embedUrl}"></a>
          </section>
        `;
        
        // Clear container and add the blockquote
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
          containerRef.current.appendChild(blockquote);
          
          // Reload TikTok embeds
          if (window.tiktokEmbedsArray && typeof window.tiktokEmbedsArray.forEach === 'function') {
            window.tiktokEmbedsArray = [];
          }
          
          if (typeof window.TiktokPlayer !== 'undefined') {
            window.TiktokPlayer.reload();
          } else {
            // If TikTok script is already loaded but Player is not defined
            const existingScript = document.querySelector('script[src*="tiktok.com/embed.js"]');
            if (existingScript) {
              document.body.removeChild(existingScript);
            }
            
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
          }
          
          setLoading(false);
        }
      }
    }
  }, [video.embedUrl, window.tiktokEmbedsArray]);

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mx-2 md:mx-0 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-3 mx-auto animate-pulse">
                <i className="fab fa-tiktok text-white text-xl"></i>
              </div>
              <p className="text-gray-600 text-sm font-medium">Cargando video...</p>
              <div className="mt-2 w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        ) : null}
        <div ref={containerRef} className="tiktok-container w-full h-full"></div>
      </div>
      <div className="p-3 md:p-4">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base leading-tight group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">{video.title}</h4>
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
          <div className="flex items-center">
            <i className="fas fa-eye mr-1 text-pink-500"></i> 
            <span className="font-medium">{video.views}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-heart mr-1 text-red-500"></i> 
            <span className="font-medium">{video.likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Add TikTok embed script type definition
declare global {
  interface Window {
    tiktokEmbedsArray: any[];
    TiktokPlayer: {
      reload: () => void;
    };
  }
}

const TikTokFeed = () => {
  // State to track if the TikTok script is loaded
  const [tiktokScriptLoaded, setTiktokScriptLoaded] = useState(false);

  useEffect(() => {
    // Initialize the tiktokEmbedsArray if it doesn't exist
    if (!window.tiktokEmbedsArray) {
      window.tiktokEmbedsArray = [];
    }
    
    // Load TikTok embed script
    if (!tiktokScriptLoaded) {
      const existingScript = document.querySelector('script[src*="tiktok.com/embed.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        script.onload = () => setTiktokScriptLoaded(true);
        document.body.appendChild(script);
        
        return () => {
          document.body.removeChild(script);
        };
      } else {
        setTiktokScriptLoaded(true);
      }
    }
  }, [tiktokScriptLoaded]);

  return (
    <section id="tiktok" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 md:top-20 md:left-20 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 md:bottom-20 md:right-20 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 md:px-6 md:py-2 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 animate-pulse"></span>
            <p className="text-white font-semibold text-xs md:text-sm uppercase tracking-wide">Contenido Viral</p>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-gray-900 mb-4 md:mb-6 leading-tight px-2">
            Síguenos en{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              TikTok
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed">
            Descubre consejos, ofertas exclusivas y contenido divertido en nuestro perfil {BUSINESS_INFO.tiktokProfile}
          </p>
          
          <motion.a 
            href={BUSINESS_INFO.tiktokUrl} 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-tiktok mr-2 md:mr-3 text-lg"></i> 
            Visitar Perfil
            <i className="fas fa-external-link-alt ml-2 md:ml-3 text-xs"></i>
          </motion.a>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {TIKTOK_VIDEOS.map((video, index) => (
            <TikTokVideo key={index} video={video} index={index} />
          ))}
        </div>

        {/* Call to action adicional */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl mx-2 md:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              ¿Te gustó nuestro contenido?
            </h3>
            <p className="text-white/90 mb-6 md:mb-8 text-base md:text-lg px-2">
              Síguenos para más tips, ofertas exclusivas y entretenimiento automotriz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={BUSINESS_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-pink-600 font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
              >
                <i className="fab fa-tiktok mr-2 md:mr-3"></i>
                Seguir en TikTok
              </a>
              <a
                href="#membresia"
                className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl transition-all duration-300 hover:bg-white hover:text-pink-600 text-sm md:text-base"
              >
                <i className="fas fa-crown mr-2 md:mr-3"></i>
                Ver Membresía
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TikTokFeed;
