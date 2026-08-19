export const easeOut = [0.22, 1, 0.36, 1]
export const easeSpring = { type: 'spring', stiffness: 120, damping: 18 }

export const fadeUp = {
  hidden: { opacity: 0, y: 56 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: easeOut },
  }),
}

export const blurUp = {
  hidden: { opacity: 0, y: 48, filter: 'blur(14px)' },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay, ease: easeOut },
  }),
}

export const blurUpChild = {
  hidden: { opacity: 0, y: 48, filter: 'blur(14px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeOut },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay, ease: easeOut },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.82, rotate: -3 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, delay, ...easeSpring },
  }),
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -64, filter: 'blur(8px)' },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, delay, ease: easeOut },
  }),
}

export const slideInLeftChild = {
  hidden: { opacity: 0, x: -64, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: easeOut },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 64, filter: 'blur(8px)' },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, delay, ease: easeOut },
  }),
}

export const slideInRightChild = {
  hidden: { opacity: 0, x: 64, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: easeOut },
  },
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.5 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, ...easeSpring },
  }),
}

export const popInChild = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: easeSpring,
  },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1, rotate: 0 },
  hover: {
    y: -10,
    scale: 1.02,
    rotate: 0.5,
    transition: { duration: 0.35, ease: easeOut },
  },
}

export const viewportOnce = { once: true, amount: 0.12 }
