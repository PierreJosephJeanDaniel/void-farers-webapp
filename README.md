# Void Farers ![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg)

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

## How to contribute

If you wish to contribute, please follow the protocol bellow:

1. Checkout `dev` and make sure latest changes are pulled (`git checkout dev && git fetch && git pull`)
2. Branch out of dev and name your branch according to what your PR is going to bring:
   - `feature/YOUR_FEATURE` if you are adding a new feature (tests are considered a feature if standing alone)
   - `fix/WHAT_YOU_FIXED` for bugs you might correct
   - `lint/WHAT_YOU_CHANGED` if you add comments or lint parts of the code
   - `refactor/WHAT_IS_AFFECTED` if you do refactoring
3. Make sure that your PR description is as thorough as possible and follows the checks needed for validation.
4. Assign me to the review. If not changes are needed I will tag you, merge and delete the branch myself.
