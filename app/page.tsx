import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { ComplianceHeader } from '@/components/ComplianceHeader'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <div className="flex flex-col min-h-screen">
      <ComplianceHeader />
      <div className="flex-1 flex flex-col px-4">
        <Chat
          id="compliance-chat"
          initialMessages={[
            {
              id: 'welcome-message',
              role: 'assistant',
              content:
                'Welcome to the Compliance Eligibility Checker. I can help you analyze loan applications for regulatory compliance. Please ask me about specific applicants or compliance criteria.'
            }
          ]}
          className="flex-1"
        />
      </div>
    </div>
  )
}
