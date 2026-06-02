'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  message: string | null
}

export function MicroConfirm({ message }: Props) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          className="micro-confirm"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          style={{ marginBottom: '1rem' }}
        >
          <span style={{ lineHeight: 1.5 }}>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
