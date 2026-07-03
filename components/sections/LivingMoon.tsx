'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function LivingMoon() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '180px']);
  const x = useTransform(scrollYProgress, [0, 1], ['0px', '-90px']);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.16, 0.86]);
  const opacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.84, 0.38]);

  return (
    <motion.div style={{ x, y, scale, opacity }} className="pointer-events-none fixed left-1/2 top-24 z-0 -translate-x-1/2">
      <motion.div
        animate={{ rotate: 360, scale: [0.985, 1.025, 0.985] }}
        transition={{ rotate: { duration: 120, repeat: Infinity, ease: 'linear' }, scale: { duration: 14, repeat: Infinity, ease: 'easeInOut' } }}
        className="relative h-[310px] w-[310px] rounded-full bg-[radial-gradient(circle_at_32%_26%,#fff8d9_0%,#f7e7b4_18%,#d4af37_48%,#7b6230_72%,#16120b_100%)] opacity-90 shadow-[0_0_120px_rgba(212,175,55,0.28)] md:h-[460px] md:w-[460px]"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_68%_40%,transparent_0%,transparent_42%,rgba(5,7,6,0.36)_58%,rgba(5,7,6,0.78)_100%)]" />
        <div className="absolute -bottom-20 left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-[50%] hm-water opacity-35" />
      </motion.div>
    </motion.div>
  );
}
