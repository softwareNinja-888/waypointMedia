import { useState } from 'react';
import { motion } from 'framer-motion';

export function AnimatedWord({ word ,secondWord,textColor='text-black',textSize='text-xl',font="font-roboto"}) {

  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(!hovered)}
    >
      <div className="relative h-auto flex flex-col justify-center items-start">
        {/* Top word (default) */}
        <motion.div
          className={`${textColor} ${font} ${textSize} z-10`}
          animate={{ y: hovered ? -24 : 0, opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {word}
        </motion.div>

        {/* Bottom word (hovered state) */}
        <motion.div
          className={`${textColor} ${font} ${textSize} z-20 absolute top-0 left-0`}
          animate={{ y: hovered ? 0 : 24, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {secondWord ? secondWord : word}
        </motion.div>
      </div>
    </div>
  );
}
