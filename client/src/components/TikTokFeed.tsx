import { motion } from "framer-motion";
import { BUSINESS_INFO, TIKTOK_VIDEOS } from "@/lib/constants";
import { useEffect, useState } from "react";

const TikTokVideo = ({ video, index }: { video: typeof TIKTOK_VIDEOS[0], index: number }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-[9/16] bg-gray-100 overflow-hidden relative">
        {/* Placeholder for actual TikTok embed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <i className="fab fa-tiktok text-3xl text-gray-400 mb-2"></i>
            <p className="text-gray-500 text-sm">TikTok Video</p>
          </div>
        </div>
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

const TikTokFeed = () => {
  // State to track if the TikTok script is loaded
  const [tiktokScriptLoaded, setTiktokScriptLoaded] = useState(false);

  useEffect(() => {
    // Load TikTok embed script
    if (!tiktokScriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = () => setTiktokScriptLoaded(true);
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
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
