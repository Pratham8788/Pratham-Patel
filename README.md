# 🚀 Job Hunt Autopilot (Automation)
> **Challenge:** Automation: Job Hunt Autopilot  
> **Tech Stack:** Google Gemini 2.5 Flash API, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Lucide Icons  
> **Live Deployed App:** [https://helpful-nougat-c9f72c.netlify.app](https://helpful-nougat-c9f72c.netlify.app)  
> **Author:** Pratham Patel  

---

## 📋 Executive Summary & Problem Statement Alignment

College students and fresh graduates apply to dozens of job postings across LinkedIn, Internshala, and university placement portals. This leads to three severe pain points:
1. **Inbox Clutter & Missed Interviews**: Critical interview invites and coding links get buried in chaotic email inboxes.
2. **Stalled Applications**: Candidates fail to send timely, professional follow-ups when recruiters take more than 7 days to reply.
3. **Predatory Recruitment Scams**: Thousands of students fall victim to fraudulent schemes demanding "laptop security deposits" (₹3,000–₹5,000), "AI proctoring exam gate fees", or identity theft (harvesting unmasked Aadhaar and PAN cards before any interview).

**Job Hunt Autopilot** solves this by delivering an end-to-end autonomous triage system that classifies incoming job emails, flags fraud, organizes applications into an interactive Kanban tracker, drafts follow-up communications, and generates instant interview cheat sheets.

---

## 🌟 Key Features

### 1. 🤖 Google Gemini 2.5 Flash Autopilot Triage
- **Batch Processing**: Streams raw email batches to Google Gemini (`gemini-2.5-flash` or `gemini-1.5-flash`) via structured JSON schema output (`responseMimeType: "application/json"`).
- **Dual Engine Architecture (Zero-Downtime)**: Features an **Intelligent Built-in Heuristic NLP Engine** that operates seamlessly offline or without an API key, guaranteeing 100% uptime during demonstrations.

### 2. 🛡️ Dedicated Scam Alert Shield (Fraud Center)
- Quarantines predatory hiring schemes with specific threat vector analysis:
  - **Upfront Financial Extortion**: Laptop courier fees, training certification costs.
  - **Phishing & Free Email Domains**: Impersonation via `@rediffmail.com` or generic `@gmail.com`.
  - **WhatsApp / Telegram Task Scams**: Unofficial messaging funnels promising unrealistic daily earnings (e.g., ₹40,000/week for liking YouTube videos).
  - **Premature Identity Harvesting**: Unlawful collection of Aadhaar / PAN card scans prior to verified interviews.
- 1-click **Share Safety Rules** and copyable warnings for student community groups.

### 3. 📋 Interactive Kanban Tracker Board
- 4 status columns: **Applied**, **Interviews Scheduled**, **Offers Won**, and **Rejections**.
- Dynamic countdown timers: Automatically calculates upcoming interview urgency (`Today!`, `Tomorrow!`, `2d`).
- Drag / Move controls to transition cards across workflow states.

### 4. ⏰ Smart Follow-Up Automation
- Automatically flags applications where no response has been received for 7+ days.
- Generates polite, high-converting follow-up drafts with one-click tone switching (Professional vs. Casual).
- Automatically resets follow-up counters upon dispatch.

### 5. ⚡ AI Interview Intelligence Kit
- Generates instant company-specific briefings:
  - **Company Tech Radar**: Distributed architectures, microservices, and culture.
  - **Top 3 Predicted Technical & Behavioral Questions** with high-signal candidate answering tips.
  - **Strategic Reverse-Interview Questions** to impress hiring managers.
  - **Pre-interview readiness checklist**.

---

## 🔒 Security Architecture
- **Zero Server-Side Storage of Credentials**: Google AI Studio API keys are stored exclusively in the client's isolated `localStorage` and never transmitted to third-party backends.
- **Strict Input Sanitization**: Comprehensive HTML entity encoding (`escapeHtml`) mitigates Cross-Site Scripting (XSS) risks from untrusted email payloads.
- **Privacy-First Processing**: Sensitive candidate data is processed locally or transmitted directly to Google's generative language endpoints over TLS 1.3.

---

## ♿ Accessibility (WCAG 2.1 Compliant)
- **Semantic HTML5 Landmarks**: Strict usage of `<header role="banner">`, `<main role="main">`, `<section>`, `<nav>`, and `<article>`.
- **Full Keyboard Navigation**: Interactive focus states, modal trapping, `Escape` key listeners, and keyboard shortcuts (`Ctrl+K` for intake, `Ctrl+Shift+R` for analysis).
- **ARIA Compatibility**: Dynamic screen-reader live regions (`aria-live="polite"`), modal labeling (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`), and high-contrast color ratios.

---

## 🧪 Automated Testing & Quality Assurance
The codebase includes an automated test suite verifying classification accuracy, scam heuristics, date calculations, and XSS sanitization.

### Run Tests:
```bash
npm test
# or
node tests/test_suite.js
```

### Test Suite Coverage:
| Test Category | Target Component | Status |
|---|---|---|
| **Problem Statement Alignment** | Email parsing & status classification (Applied, Interview, Offer, Rejected) | ✅ 100% Pass |
| **Security & Threat Detection** | Scam pattern matching (Laptop fees, WhatsApp funnels, Aadhaar phishing) | ✅ 100% Pass |
| **XSS Defense** | HTML sanitization and entity escaping | ✅ 100% Pass |
| **Automation Logic** | Follow-up elapsed time threshold (>7 days) | ✅ 100% Pass |
| **Data Integrity** | Null/Empty input error resilience & symbol escaping | ✅ 100% Pass |

---

## ⚡ Performance & Efficiency
- **Sub-100ms Heuristic Execution**: Client-side regex and tokenizer parse 20 complex emails in under 50ms.
- **Zero Heavy Bundles**: Powered by CDN dependencies (Tailwind, Lucide, Canvas Confetti) with zero build overhead.
- **Responsive Layout**: Fluid CSS grid adapting from 320px mobile displays up to 4K monitors.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18+)

### Steps
1. Clone or download the repository:
   ```bash
   cd "D:\GarbaThon\Pratham Patel"
   ```
2. Start the local server:
   ```bash
   npm start
   # or
   node server.js
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```
