export function logAPICall(method, url, payload) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${method} ${url} Payload: ${JSON.stringify(payload)}`;

  const logs = JSON.parse(localStorage.getItem('appLogs') || '[]');
  logs.push(logMessage);
  localStorage.setItem('appLogs', JSON.stringify(logs));
}
