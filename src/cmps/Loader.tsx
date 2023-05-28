import loadingGif from '../assets/loading/myloading.gif'

export function Loader() {
  return (
    <div className="loader">
      <img src={loadingGif} alt="loading gif" />
    </div>
  )
}
