export interface QuizType {
  response_code: number
  results: Question[]
}

export interface Question {
  // type: string
  type: "boolean" | "multiple"
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}
