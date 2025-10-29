// netlifyActions.js
export async function runAutomation(endpoint, payload) {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return await response.json();
  } catch (err) {
    console.error('Automation error:', err);
    return { success: false, message: err.message };
  }
}
;

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
