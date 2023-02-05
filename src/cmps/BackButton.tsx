export const BackButton = () => {
  return (
    <div className="back-button">
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  )
}
