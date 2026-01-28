export const incidents = [
  {
    id: "INC-1001",
    user: "finance_user_12",
    severity: "High",
    anomalyScore: 0.84,
    summary: "Multiple failed logins and off-hours access",
    llm: {
      intent: "Credential Compromise",
      confidence: 0.82,
      explanation:
        "Repeated authentication failures followed by off-hours access indicate possible credential misuse.",
      actions: [
        "Disable user account",
        "Force password reset",
        "Audit recent privileged actions"
      ]
    }
  },
  {
    id: "INC-1002",
    user: "it_admin_04",
    severity: "Medium",
    anomalyScore: 0.62,
    summary: "Unusual lateral movement detected",
    llm: {
      intent: "Lateral Movement",
      confidence: 0.68,
      explanation:
        "Access to multiple internal hosts in a short period suggests potential lateral movement.",
      actions: [
        "Review accessed systems",
        "Enable enhanced monitoring"
      ]
    }
  }
];
