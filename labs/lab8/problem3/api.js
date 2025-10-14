const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8082;
const HTTPBIN_API = 'https://httpbin.org/ip';

let cachedIP = null;

// Fetch IP address from httpbin.org
async function fetchIPAddress() {
  try {
    console.log('Fetching IP address from httpbin.org...');
    const response = await axios.get(HTTPBIN_API);
    const ipAddress = response.data.origin;
    console.log(`IP address fetched successfully: ${ipAddress}`);
    return ipAddress;
  } catch (error) {
    console.error('Error fetching IP address:', error.message);
    throw new Error(`Failed to fetch IP from external API: ${error.message}`);
  }
}

// Initialize IP address on server startup
async function initializeServer() {
  try {
    cachedIP = await fetchIPAddress();
    console.log('IP address cached successfully');
  } catch (error) {
    console.error('Warning: Could not fetch IP address on startup:', error.message);
    console.log('Server will attempt to fetch IP on first request');
  }
}

// GET /ip endpoint
app.get('/ip', async (req, res) => {
  try {
    console.log(`[${new Date().toISOString()}] GET /ip - Request received`);
    
    // If we don't have cached IP, fetch it now
    if (!cachedIP) {
      cachedIP = await fetchIPAddress();
    }
    
    const response = {
      ip: cachedIP,
      source: 'httpbin.org'
    };
    
    console.log(`[${new Date().toISOString()}] GET /ip - Sending response:`, response);
    res.json(response);
  } catch (error) {
    console.error(`[${new Date().toISOString()}] GET /ip - Error:`, error.message);
    res.status(500).json({
      error: 'Failed to fetch IP address',
      message: error.message
    });
  }
});

// Root endpoint for testing
app.get('/', (req, res) => {
  res.json({
    message: 'IP Address API Server',
    endpoints: {
      '/ip': 'GET - Returns your public IP address'
    }
  });
});

// Start the server
async function startServer() {
  try {
    await initializeServer();
    
    app.listen(PORT, () => {
      console.log('='.repeat(50));
      console.log(`✓ IP Address API Server is running`);
      console.log(`✓ Server listening on port ${PORT}`);
      console.log(`✓ Access the API at: http://localhost:${PORT}/ip`);
      console.log('='.repeat(50));
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server gracefully...');
  process.exit(0);
});

// Start the application
startServer();