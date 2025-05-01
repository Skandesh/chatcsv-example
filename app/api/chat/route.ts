import { Message, StreamingTextResponse } from 'ai'

import { chatStream } from '@/lib/chatStream'

export const runtime = 'edge'

export async function POST(req: Request) {
  const json = await req.json()
  const { messages } = json as { messages: Message[] }

  const complianceDataset =
    'https://raw.githubusercontent.com/Skandesh/langchain-ask-csv/refs/heads/main/loan_application_testing.csv'

  const testingDataset =
    'https://raw.githubusercontent.com/Skandesh/langchain-ask-csv/refs/heads/main/Loan_Application_Dataset_2.csv'
  const response = await fetch('https://www.chatcsv.co/api/v1/chat', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CHATCSV_API_KEY}`
    },
    body: JSON.stringify({
      messages,
      files: [testingDataset, complianceDataset],
      system_prompt:
        'You are a compliance eligibility assistant that analyzes loan application data. Your purpose is to determine if applicants meet compliance criteria based on their information. Provide clear eligibility assessments and highlight any compliance issues. Be concise and focus on regulatory requirements.'
    })
  })

  if (!response.ok) {
    return new Response(
      JSON.stringify({
        error: 'Failed to process compliance data',
        details: `Status: ${response.status}`
      }),
      {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
  const stream = await chatStream({
    response,
    onEnd: async content => {}
  })

  return new StreamingTextResponse(stream)
}
