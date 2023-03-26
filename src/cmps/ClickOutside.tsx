import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  onOutsideClick: () => void
  children: ReactNode
}

const ClickOutside = ({ onOutsideClick, children }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onOutsideClick])

  return <div ref={wrapperRef}>{children}</div>
}

export default ClickOutside
