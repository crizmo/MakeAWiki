# Deploying MakeAWiki to Vercel

This guide will walk you through the process of deploying your MakeAWiki instance to Vercel, providing free hosting with excellent performance and reliability.

## Prerequisites

Before you start, you'll need:

1. A [GitHub](https://github.com/) account
2. A [Vercel](https://vercel.com/) account (you can sign up with your GitHub account)
3. Your MakeAWiki project pushed to a GitHub repository

## Steps to Deploy

### 1. Prepare Your Project for Deployment

Your MakeAWiki project comes with a `vercel.json` file that configures the build process. If you've made any changes to the project structure, make sure to update this file accordingly.

The default `vercel.json` should look like this:

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.js" }
  ]
}
```

### 2. Push Your Project to GitHub

If you haven't already, push your MakeAWiki project to a GitHub repository:

```bash
# Initialize Git repository if needed
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourrepository.git

# Push to GitHub
git push -u origin main
```

### 3. Connect to Vercel

1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account
2. Click on "Import Project"
3. Select "Import Git Repository"
4. Choose the GitHub repository that contains your MakeAWiki project

### 4. Configure Your Project

On the project configuration screen:

1. Project Name: Enter a name for your project (this will be part of your deployment URL)
2. Framework Preset: Select "Other" or "Node.js"
3. Root Directory: Leave as default if your MakeAWiki is in the repository root
4. Build and Output Settings: The `vercel.json` file should handle this automatically

### 5. Deploy

Click the "Deploy" button and wait for the deployment to complete.

### 6. Custom Domain (Optional)

To use your own domain instead of the default `.vercel.app` domain:

1. Go to your project dashboard on Vercel
2. Click on "Settings" and then "Domains"
3. Add your custom domain and follow the instructions to configure DNS

## Environment Variables

If you need to set environment variables for your deployment:

1. Go to your project settings on Vercel
2. Navigate to the "Environment Variables" section
3. Add any required variables (e.g., `NODE_ENV=production`)

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository. Any changes pushed to your main branch will trigger a new deployment.

## Managing Content

There are several ways to manage your wiki content on Vercel:

1. **Direct Git Updates**: Edit files in your repository and push changes
2. **CMS Integration**: Connect a headless CMS like Netlify CMS
3. **Admin Interface**: Create a custom admin interface that commits changes to GitHub

## Troubleshooting Common Issues

### Build Failures

If your build fails, check:
- The Vercel build logs for specific errors
- Your `vercel.json` configuration
- Any dependencies that might be missing

### Missing Content

If content is missing:
- Make sure your `pages` directory is included in your repository
- Check that paths are correctly referenced in your code

## Next Steps

Now that your MakeAWiki is deployed, you might want to:

1. [Customize your wiki appearance](/customization)
2. [Set up a custom domain](https://vercel.com/docs/domain-configuration)