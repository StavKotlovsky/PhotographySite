import React, { useState, useEffect } from 'react'

function ScrollBottom() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <span
      className={`scroll-to-bottom ${isVisible ? 'visible' : ''}`}
      onClick={handleScrollToBottom}
    >
      <br />
      לשאלות ותשובות
    </span>
  )
}

export default ScrollBottom
