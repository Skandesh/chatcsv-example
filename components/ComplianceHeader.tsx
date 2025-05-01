import React from 'react'
import { Badge } from '@/components/ui/badge'

export function ComplianceHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-4 border-b mb-4">
      <h1 className="text-2xl font-bold text-primary">
        Compliance Eligibility Checker
      </h1>
      <p className="text-sm text-muted-foreground mt-1 mb-3">
        Analyze loan applications for regulatory compliance
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        <Badge variant="outline" className="bg-blue-50 text-black">
          Loan Eligibility
        </Badge>
        <Badge variant="outline" className="bg-green-50 text-black">
          Regulatory Compliance
        </Badge>
        <Badge variant="outline" className="bg-amber-50 text-black">
          Risk Assessment
        </Badge>
      </div>
    </div>
  )
}
