import { Parallax } from 'react-scroll-parallax'
import { ParallaxBanner } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax'

export const Component = () => {
  return (
    <ParallaxProvider>
      <Parallax speed={10}>
        <h1>Hello</h1>
      </Parallax>
    </ParallaxProvider>
  )
}
