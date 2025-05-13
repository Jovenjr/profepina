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
        blockquote.setAttribute('style', 'max-width: 605px; min-width: 325px;');
        
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
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-[9/16] bg-gray-100 overflow-hidden relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <i className="fab fa-tiktok text-3xl text-gray-400 mb-2 animate-pulse"></i>
              <p className="text-gray-500 text-sm">Cargando video...</p>
            </div>
          </div>
        ) : null}
        <div ref={containerRef} className="tiktok-container w-full h-full"></div>
      </div>
      <div className="p-4">
        <h4 className="font-medium text-[#1f2937] mb-1 truncate">{video.title}</h4>
        <p className="text-gray-500 text-sm flex items-center">
          <i className="fas fa-eye mr-1"></i> {video.views}
          <i className="fas fa-heart mx-1 ml-3"></i> {video.likes}
        </p>
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
    <section id="tiktok" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-4">Síguenos en TikTok</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre consejos, ofertas y más en nuestro perfil de TikTok {BUSINESS_INFO.tiktokProfile}
          </p>
          <a 
            href={BUSINESS_INFO.tiktokUrl} 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center mt-4 bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full transition-colors"
          >
            <i className="fab fa-tiktok mr-2"></i> Visitar Perfil
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIKTOK_VIDEOS.map((video, index) => (
            <TikTokVideo key={index} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TikTokFeed;
