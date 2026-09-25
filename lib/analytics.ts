// Proptham Analytics Event Tracking System

export type AnalyticsEvent =
  | "homepage_viewed"
  | "search_started"
  | "search_submitted"
  | "intent_selected"
  | "property_opened"
  | "property_analysis_started"
  | "property_analysis_completed"
  | "compare_started"
  | "compare_completed"
  | "ask_question_started"
  | "question_submitted"
  | "assistant_answer_opened"
  | "guide_opened"
  | "tool_started"
  | "tool_completed"
  | "landcheck_started"
  | "landcheck_completed"
  | "report_request_started"
  | "report_request_completed"
  | "expert_consultation_started"
  | "user_returned_to_research"

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, any>) {
  if (typeof window !== "undefined") {
    const timestamp = new Date().toISOString()
    const logData = { event, payload, timestamp }
    
    // In production this connects to your analytics pipeline
    if (process.env.NODE_ENV === "development") {
      console.log(`[Proptham Analytics]`, logData)
    }

    try {
      const history = JSON.parse(sessionStorage.getItem("proptham_analytics_events") || "[]")
      history.push(logData)
      sessionStorage.setItem("proptham_analytics_events", JSON.stringify(history.slice(-50)))
    } catch (e) {
      // Ignore storage quota errors
    }
  }
}
