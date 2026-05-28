document.getElementById('greeting').textContent = "Deployed successfully at 28th May, 2026!";
const apiKey = process.env.API_KEY;
const isFeatureOn = process.env.FEATURE_FLAG === 'true';
