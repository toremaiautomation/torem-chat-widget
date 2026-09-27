import { createRoot } from "react-dom/client";
import ChatWidget from "./ChatWidget.jsx";

const container = document.getElementById("torem-chat");

if (container) {
  const d = container.dataset;

  const config = {
    clientId:       d.clientId    || "",
    businessName:   d.name        || "Chat Assistant",
    logoUrl:        d.logo        || "",
    primaryColor:   d.color       || "#007AE3",
    navyColor:      d.navColor    || "#0B1F3A",
    contactEmail:   d.email       || "",
    greeting:       d.greeting    || null,

    enabledWorkflows: {
      booking:          d.booking         !== "false",
      reviewGeneration: d.reviewGeneration === "true",
      leadFollowUp:     d.leadFollowUp     === "true",
      crmTracking:      d.crmTracking      === "true",
    },

    defaultSuggestions: d.suggestions
      ? JSON.parse(d.suggestions)
      : [
          "How does your AI agent work?",
          "What industries do you support?",
          "Can I schedule a strategy call?",
        ],

    followUpSuggestions: d.followUpSuggestions
      ? JSON.parse(d.followUpSuggestions)
      : null,

    postBookingSuggestions: d.postBookingSuggestions
      ? JSON.parse(d.postBookingSuggestions)
      : null,
  };

  createRoot(container).render(<ChatWidget config={config} />);
} else {
  console.warn("[ToremChatWidget] No element with id='torem-chat' found on this page.");
}
