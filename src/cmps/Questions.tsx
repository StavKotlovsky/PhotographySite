import { useState } from 'react'

const Questions: React.FC<QuestionsProp> = ({ answer, question }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="questions">
      <button onClick={() => setShowMore(!showMore)}>
        {question}
        <span>{showMore ? '-' : '+'}</span>
      </button>
      {showMore && <span className="answer">{answer}</span>}
    </div>
  )
}

interface QuestionsProp {
  answer: string
  question: string
}

export default Questions
