import { useRef, useEffect } from 'react'

export const useFetchEffect = (effectFn: () => void, deps: unknown[]) => {
  const isEffectCalled = useRef(false)
  useEffect(() => {
    if (!isEffectCalled.current) {
      effectFn()
    }
    isEffectCalled.current = true
  }, [deps])
}
