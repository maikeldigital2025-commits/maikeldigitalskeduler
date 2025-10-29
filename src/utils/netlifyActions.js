// netlifyActions.js
export async function runAutomation(endpoint, payload) {
  try {
    // Call Netlify Function
    const response = await fetch(`/.netlify/functions/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!result.success) {
      console.error('Automation failed:', result.message);
    }
    return result;

  } catch (err) {
    console.error('Automation error:', err);
    return { success: false, message: err.message };
  }
}

// Usage example in dashboard.html:
// import { runAutomation } from './netlifyActions.js';
// const result = await runAutomation('searchJobs', { keywords, location, type });
// Placeholder for src/utils/netlifyActions.js
