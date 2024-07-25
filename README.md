# BlogPost App

This is a BlogPost application built using React, Appwrite, and deployed on Vercel. The app allows users to create, read, update, and delete blog posts.

## Demo

Check out the live demo of the application: [BlogPost App](https://blog-post-opal.vercel.app)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Features

- User Authentication (Sign Up, Login, Logout)
- Create, Read, Update, and Delete blog posts
- WYSIWYG editor for creating and editing posts
- Responsive design
- Image upload and display

## Technologies Used

- Frontend: React, Redux, Tailwind CSS
- Backend: Appwrite
- Deployment: Vercel
- Rich Text Editor: TinyMCE

## Installation

### Prerequisites

- Node.js (v14.x or later)
- Appwrite instance setup

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/blogpost-app.git
    cd blogpost-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-instance/v1
    REACT_APP_APPWRITE_PROJECT_ID=your_project_id
    REACT_APP_APPWRITE_API_KEY=your_api_key
    REACT_APP_TINYMCE_API_KEY=your_tinymce_api_key
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

### Running Locally

- Ensure your Appwrite server is running and the environment variables are set correctly.
- Run `npm start` to start the application.
- Open `http://localhost:3000` in your browser.

### Deployment

#### Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and create a new project.
3. Import your repository and configure the build settings:

    - Framework Preset: `Create React App`
    - Build Command: `npm run build`
    - Output Directory: `build`

4. Add the environment variables in the Vercel dashboard under the "Environment Variables" section:

    ```plaintext
    REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-instance/v1
    REACT_APP_APPWRITE_PROJECT_ID=your_project_id
    REACT_APP_APPWRITE_API_KEY=your_api_key
    REACT_APP_TINYMCE_API_KEY=your_tinymce_api_key
    ```

5. Deploy the project. Vercel will automatically build and deploy your application.


## Contact

For any questions or inquiries, please contact [musab](mailto:musab.khurram@gmail.com).
