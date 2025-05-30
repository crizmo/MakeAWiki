#!/bin/bash

# This script sets up the deployment environment and tests the update scripts locally

echo "Setting up deployment environment for MakeAWiki..."

# Verify Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install it before continuing."
    exit 1
fi

# Verify npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install it before continuing."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Create necessary directories if they don't exist
mkdir -p pages/guides

# Test the update scripts
echo "Testing update scripts..."
echo "Verifying project structure..."
node scripts/verify-structure.js

echo "Setup complete!"
echo "To deploy to Vercel, follow the instructions in DEPLOYMENT.md"
