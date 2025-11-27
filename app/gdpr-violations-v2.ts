

// ❌ REAL VIOLATION: Hardcoded credentials in plain text
const dbConfig = {
  host: 'localhost',
  user: 'admin',
  password: 'SuperSecret123!', // Real violation - hardcoded password
  api_key: 'sk_live_abc123xyz789', // Real violation - hardcoded API key
};

// ❌ REAL VIOLATION: Storing user email without encryption
function storeUserData(user: any) {
  const userEmail = 'john.doe@example.com'; // Real violation - storing PII
  localStorage.setItem('email', userEmail);
}

// ✅ FALSE POSITIVE: Email in a comment or documentation
/**
 * Contact us at support@example.com for help
 * This is just documentation, not actual data storage
 */

// ✅ FALSE POSITIVE: Email validation regex pattern
const EMAIL_VALIDATION_REGEX =
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

// ✅ FALSE POSITIVE: IP address in a constant for testing
const LOCALHOST_IP = '127.0.0.1'; // This is a non-sensitive local IP

// ✅ FALSE POSITIVE: Password field name (not actual password)
interface LoginForm {
  username: string;
  password: string; // Field definition, not a hardcoded value
}

// ❌ REAL VIOLATION: Hardcoded token
const authToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.test';
const token = 'ghp_1234567890abcdefghijklmnop'; // GitHub token

// ✅ FALSE POSITIVE: Token parameter in function signature
function validateToken(token: string) {
  return token.length > 0;
}

// =============================================================================
// SECTION 2: gdpr-consent-enforcement
// =============================================================================

// ❌ REAL VIOLATION: Data collection without consent check
function collectAnalytics(userId: string) {
  // Missing consent check before collecting data
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ userId, timestamp: Date.now() }),
  });
}

// ✅ FALSE POSITIVE: Consent check is present (good code)
function collectAnalyticsWithConsent(userId: string) {
  if (user.consent == true) {
    // This is proper consent enforcement
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    });
  }
}

// ✅ FALSE POSITIVE: Function that checks consent (utility function)
function hasConsent() {
  // This is a utility function, not a violation
  return localStorage.getItem('consent') === 'true';
}

// ❌ REAL VIOLATION: Assumed consent without explicit check
function trackUserBehavior(userId: string) {
  // No consent check at all
  const consent_given = true; // Hardcoded assumption
  sendToThirdParty(userId);
}

// =============================================================================
// SECTION 3: gdpr-data-minimization
// =============================================================================

// ❌ REAL VIOLATION: Excessive data collection
function collectUserData(user: any) {
  // Collecting way more data than needed
  const userData = {
    email: user.email,
    phone: user.phone,
    address: user.address,
    ssn: user.ssn, // Definitely not needed
    mothersMaidenName: user.mothersMaidenName,
    browsing_history: user.browsing_history,
    location_history: user.location_history,
  };
  saveCustomerData(userData);
}

// ✅ FALSE POSITIVE: Code documentation mention
/**
 * This function should collect user data only when necessary
 * and follow data minimization principles
 */

// ❌ REAL VIOLATION: Gathering personal information excessively
async function gatherPersonalInformation(userId: string) {
  const response = await fetch(`/api/users/${userId}/complete-profile`);
  // Collecting entire profile when only name is needed
  return response.json();
}

// ✅ FALSE POSITIVE: Minimal data collection (good code)
function storeUserProfile(name: string) {
  // Only storing necessary field
  return { name };
}

// =============================================================================
// SECTION 4: gdpr-data-retention
// =============================================================================

// ❌ REAL VIOLATION: Infinite retention
const sessionConfig = {
  retention: -1, // Keep forever - violation
  expiry: null, // Never expires - violation
};

// ❌ REAL VIOLATION: No deletion policy
function archiveUserData(userData: any) {
  // delete never - just keep accumulating
  database.archive(userData, { keepForever: true });
}

// ✅ FALSE POSITIVE: Variable name contains "retention" but has proper value
const LOG_RETENTION_DAYS = 30; // Proper retention period

// ❌ REAL VIOLATION: Hardcoded infinite retention
const BACKUP_POLICY = {
  retainIndefinitely: true,
  description: 'Keep user data forever for historical purposes',
};

// ✅ FALSE POSITIVE: Documentation about retention
/**
 * Note: We used to have retention = -1 but that was fixed
 * Now we properly delete old data
 */

// =============================================================================
// SECTION 5: gdpr-logging-audit
// =============================================================================

// ❌ REAL VIOLATION: Logging sensitive information
function loginUser(username: string, password: string) {
  console.log('User login attempt:', username, password); // Logging password!

  const apiResponse = authenticateUser(username, password);
  logger.debug('API response token:', apiResponse.token); // Logging token!
}

// ❌ REAL VIOLATION: Debugging with secrets
function debugApiCall() {
  const api_key = getApiKey();
  console.log('Making API call with key:', api_key); // Logging API key!
}

// ✅ FALSE POSITIVE: Logging that password is missing (not the actual password)
function validateCredentials(creds: any) {
  if (!creds.password) {
    console.log('Password is missing'); // Just mentioning field name, not value
  }
}

// ✅ FALSE POSITIVE: Logger utility function name
function loggerTokenGenerator() {
  // Function name contains "logger" and "token" but doesn't log sensitive data
  return Math.random().toString(36);
}

// ❌ REAL VIOLATION: Printing credentials in error messages
function handleAuthError(credential: string) {
  console.error('Authentication failed with credential:', credential);
  printCredentialDetails(credential);
}

// ✅ FALSE POSITIVE: Safe logging without sensitive data
function logUserActivity(userId: string) {
  logger.info('User activity', {
    userId,
    action: 'login',
    timestamp: Date.now(),
  });
}

// =============================================================================
// SECTION 6: Mixed scenarios for complex testing
// =============================================================================

// ❌ REAL VIOLATION: Multiple issues in one function
function processUserRegistration(userData: any) {
  // Issue 1: No consent check
  // Issue 2: Excessive data collection
  const profile = {
    email: userData.email,
    password: userData.password, // Storing plain password
    ssn: '123-45-6789', // Hardcoded SSN
    ip: '192.168.1.100',
  };

  // Issue 3: Logging sensitive data
  console.log('New user registered:', profile);

  // Issue 4: Infinite retention
  saveCustomerData(profile, { expiry: null });
}

// ✅ FALSE POSITIVE: Well-written code with proper practices
function processUserRegistrationSecure(userData: any) {
  if (!checkConsent()) {
    throw new Error('User consent required');
  }

  // Minimal data collection
  const profile = {
    userId: generateId(),
    timestamp: Date.now(),
  };

  // Safe logging
  logger.info('User registered', { userId: profile.userId });

  // Proper retention
  saveCustomerData(profile, { retention: 365 });
}

// =============================================================================
// Helper functions (referenced above)
// =============================================================================

function saveCustomerData(data: any, options?: any) {
  // Mock implementation
}

function sendToThirdParty(userId: string) {
  // Mock implementation
}

function authenticateUser(username: string, password: string) {
  return { token: 'mock-token' };
}

function getApiKey() {
  return process.env.API_KEY || '';
}

function printCredentialDetails(cred: string) {
  // Mock implementation
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const user = { consent: false };
const logger = {
  info: console.log,
  debug: console.log,
  error: console.error,
};
const database = {
  archive: (data: any, opts: any) => {},
};
const localStorage = {
  setItem: (key: string, val: string) => {},
  getItem: (key: string) => '',
};
