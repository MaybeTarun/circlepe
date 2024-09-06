import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Progress = () => {
  const { scrollYProgress } = useScroll();
  const [barWidth, setBarWidth] = useState(240);
  const [color, setColor] = useState('#6BAFFF');
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress > 0.95) {
        setColor('#84F15E');
      } else {
        setColor('#6BAFFF');
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const x = useTransform(scrollYProgress, [0, 1], [0, barWidth]);

  return (
    <div 
      className={`fixed p-10 z-50 ${
        isWideScreen ? 'top-1/2 right-0 transform -translate-y-1/2 rotate-90' : 'top-0 left-1/2 transform -translate-x-1/2'
      }`}
    >
      <div className="relative">
        <motion.div
          className="bg-[#424242] h-[3px]"
          style={{ width: barWidth }}
        >
          <motion.div
            className="h-[3px]"
            style={{
              width: x,
              backgroundColor: color
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              x,
              width: '15px',
              height: '15px',
              translateX: '-50%',
              translateY: '-50%',
              top: '50%',
              left: '0',
              transform: 'translate(-50%, -50%)',
              backgroundColor: color
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;
