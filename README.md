# Void Farers

This repo hosts the bulk of the web-app aimed at allowing players to track their character stats & inventory, along with communicating together, while playing `Void Farers`.

## How to run locally

1. Clone the repository
2. Insure you have `npm` installed
3. Open the repo and add the `.env` file
4. Populate the `.env` as follow (if you are working with me, just ask me the keys on the side):

```
# Variables have to be prefixed with VITE_ to be accessible in the client side (https://vite.dev/guide/env-and-mode.html#env-files)

VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_URL=your_supabase_project
VITE_SUPABASE_PROJECT_ID=your_supabase_id

VITE_CHAT_SERVER=your_chat_server_address
```

5. Install the required dependencies with by running `npm install` on your terminal
6. You can start the client locally by running `npm run dev`
