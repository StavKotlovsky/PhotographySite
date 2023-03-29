import loadingGif from '../assets/loading/loadin2.gif'

export function Loader() {
  return (
    <div className="loader">
      <img src={loadingGif} alt="loading gif" />
    </div>
  )
}
