# WANGSTUDIO

A modern Next.js web application for WANGSTUDIO featuring about, contact, product features, and workshop sections.

## Tech Stack

- React
- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI

## Project Structure

```
app/
├── components/         # React components organized by feature
    ├── about/          # About page components
    ├── contactnewsletter/ # Contact and newsletter components
    ├── featureproduct/ # Product feature components
    ├── footer/         # Footer components
    ├── herosection/    # Hero section components
    ├── livesession/    # Live session components
    ├── navbar/         # Navigation components
    ├── privacypolicy/  # Privacy policy components
    ├── terms/          # Terms components
    ├── workshoppromo/  # Workshop promotion components
    └── workshop/       # Workshop components
├── lib/                # Shared libraries and utilities
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── types/              # TypeScript types
├── styles/             # Global styles (globals.css)
└── pages/              # Page components (for pages router) or routes (for app router)
public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ear-Essence/wangstudio.git
   cd wangstudio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Workflow

1. Create a new branch for each feature or bug fix
2. Make your changes
3. Submit a pull request
4. After code review, merge to main

## Commit Message Format

- "fix:" for bug fixes
- "feat:" for new features
- "perf:" for performance improvements
- "docs:" for documentation changes
- "style:" for formatting changes
- "refactor:" for code refactoring
- "test:" for adding missing tests
- "chore:" for maintenance tasks

## License

[MIT](LICENSE)