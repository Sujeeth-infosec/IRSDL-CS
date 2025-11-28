import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

const PageTransition = ({ children }: PropsWithChildren) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -24 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="px-4 sm:px-6 lg:px-12"
  >
    {children}
  </motion.div>
)

export default PageTransition

