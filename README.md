# Blog Management System

A comprehensive blog management system built with Next.js and TypeScript. This application allows users to manage blog posts, import RSS feeds, and configure website settings, including database connection parameters. It provides an intuitive interface for administrators to oversee content and ensure quality.

## Features

- **Post Management**: Approve, reject, and preview blog posts.
- **RSS Feed Importer**: Import posts from external RSS feeds with a simple URL input.
- **Validation Criteria**: Automatically checks posts for images, excerpts, authors, word count, and keywords.
- **Database Configuration**: Admins can configure database connection parameters directly from the admin panel.
- **Responsive Design**: The application is designed to be responsive and user-friendly across devices.

## Installation

To install this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/aminus007/blog-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the project, use the following command:
```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` to see the application in action.

### Admin Panel

The admin panel allows you to manage blog posts and configure settings. You can:

- Import posts from an RSS feed by entering the feed URL.
- Approve or reject pending posts.
- View validation criteria for each post.
- Configure database settings, including host, port, username, password, and database name.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.