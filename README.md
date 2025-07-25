# React + TypeScript# TillDash - Self-Checkout Solution

TillDash is a revolutionary self-checkout application that allows shoppers to scan, pay, and go without waiting in line. The platform consists of:

- **Customer Mobile App**: For scanning products and making payments
- **Merchant Dashboard**: For managing inventory, sales, and analytics
- **Backend API**: Powering the entire platform (this repository)

## Features

### For Shoppers

- 📱 Scan products with your phone
- 💳 Pay securely via M-Pesa and other payment methods
- ⚡ Skip the checkout line
- 📧 Digital receipts

### For Businesses

- 📊 Real-time sales analytics
- 📦 Inventory management
- 🛡️ Theft prevention
- 🚀 Increased customer throughput

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tilldash-landing.git
   cd tilldash-landing
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Routing**: React Router

## Related Repositories

- [TillDash Backend](https://github.com/yourusername/tilldash-backend)
- [TillDash Mobile App](https://github.com/yourusername/tilldash-mobile)
- [TillDash Merchant Dashboard](https://github.com/yourusername/tilldash-merchant)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
