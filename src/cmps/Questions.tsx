import { useState } from 'react'

const Questions: React.FC<QuestionsProp> = ({ answer, question }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="page-container page-questions">
      <button className="page-questions" onClick={() => setShowMore(!showMore)}>
        {showMore ? question : question}
      </button>
      {showMore && <span>{answer}</span>}
    </div>
  )
}

interface QuestionsProp {
  answer: string
  question: string
}

export default Questions
