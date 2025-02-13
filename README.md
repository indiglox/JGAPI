# 🐾 Pet Store API Testing Project

A comprehensive API testing suite for the Petstore Swagger API built with Playwright. This project showcases API testing best practices with a focus on CRUD operations. Whether you're just starting out with API testing or looking to level up your existing skills, this project provides a solid foundation to work from.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Test Scenarios](#test-scenarios)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before diving in, make sure you have the following installed on your machine:

- Node.js (v18 or higher)
- npm (Node Package Manager) or Yarn
- A basic understanding of TypeScript and API testing concepts

---

## Setup

Getting started is straightforward. Follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/indiglox/JGAPI.git
cd JGAPI
```

2. Install dependencies using your preferred package manager:
```bash
npm install  # or yarn install
```

3. Set up environment variables (if needed):
   - Create a `.env` file in the root directory
   - Add required variables (e.g., `API_KEY`)

---

## Project Structure

Here’s how the project is organized:

```
├── tests/
│   ├── specs/           # Test specifications
│   │   ├── create.spec.ts  # Create operations
│   │   ├── read.spec.ts    # Read operations
│   │   ├── update.spec.ts  # Update operations
│   │   └── delete.spec.ts  # Delete operations
│   └── utils/           # Utility files
│       ├── fixtures.ts  # Custom fixtures
│       └── helper.ts    # API client helper
├── playwright.config.ts # Playwright configuration
└── package.json
```

---

## Test Scenarios

This project includes a variety of test scenarios to cover CRUD operations comprehensively:

### Create Pet API Tests
✅ Create pet with valid data  
✅ Create pet with missing required fields (photoUrls)  
✅ Create pet with invalid data types  
✅ Create pet with duplicate ID  

### Read Pet API Tests
✅ Get pet by valid ID  
✅ Get pet by invalid ID  
✅ Get non-existent pet  
✅ Find pets by valid status  
✅ Find pets by invalid status  

### Update Pet API Tests
✅ Update pet with valid data  
✅ Update pet with invalid ID  
✅ Update pet with missing required fields  
✅ Update non-existent pet  

### Delete Pet API Tests
✅ Delete pet with valid ID  
✅ Delete pet with invalid ID  
✅ Delete non-existent pet  

---

## Running Tests

Playwright makes it easy to run your tests. Here are some useful commands:

- Run all tests:
```bash
npx playwright test
```

- Run specific test files:
```bash
npx playwright test create.spec.ts
npx playwright test read.spec.ts
npx playwright test update.spec.ts
npx playwright test delete.spec.ts
```

- Run tests in debug mode:
```bash
npx playwright test --debug
```

- Generate and view a test report:
```bash
npx playwright show-report
```

---

## Configuration

The project configuration is defined in `playwright.config.ts - project`. Here’s a quick overview of the settings:

```typescript
    {
      name: 'API',
      testDir: './tests/specs',
      use: {
        baseURL: 'https://petstore.swagger.io/v2',
        extraHTTPHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.API_KEY || '',
        },
      },
      timeout: 20_000,
    },
```

---

## Best Practices

This project follows several API testing best practices:
- **Separation of Concerns**: Tests are organized by CRUD operations.
- **Environment Variables**: Sensitive data like API keys are stored securely.
- **Fixtures and Helpers**: Reusable utilities are provided for consistent test data and API interactions.
- **Parallel Execution**: Tests run in parallel for faster execution.

---

## Troubleshooting

### Common Issues

1. **Missing Dependencies**: If tests fail to run, ensure you’ve installed all dependencies.
2. **Network Issues**: Double-check your internet connection.
3. **API Key Errors**: Verify that your API key is correctly set in the `.env` file.

---