# Egnition

A Phoenix application with Inertia.js and React integration.

## Prerequisites

- Elixir 1.14 or later
- Erlang 24 or later
- Node.js 18 or later
- PostgreSQL 12 or later

## Setup Instructions

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd egnition
   ```

2. Install Elixir dependencies
   ```bash
   mix deps.get
   ```

3. Setup the database
   ```bash
   mix ecto.setup
   ```

4. Install Node.js dependencies
   ```bash
   cd assets
   npm install
   cd ..
   ```

5. Setup and build assets
   ```bash
   mix assets.setup
   mix assets.build
   ```

6. Start the Phoenix server
   ```bash
   mix phx.server
   ```

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Development

- The React components are located in `assets/src/pages`
- Phoenix controllers are in `lib/egnition_web/controllers`
- Database schemas are in `lib/egnition/`

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Inertia.js: https://inertiajs.com/
