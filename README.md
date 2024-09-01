## Overview

This project features a collection of reusable and customizable input components built with **React** and **TypeScript**. The components are designed with a focus on accessibility, responsiveness, and ease of integration into any modern web application. 

## Components

- **InputGroup**: Combines input, label, and annotation components to create a cohesive user input element.
- **InputText**: A text input field with support for different sizes, states (default, hover, focus, error), and additional styling options.
- **InputLabel**: A label component that supports tooltips and required field indicators.
- **InputAnnotation**: Displays help text or description below the input field, changing based on the component state.

## Features

- **Theming**: Supports light and dark themes with an intuitive toggle button.
- **State Management**: Externalized state management, ensuring components are purely presentational.
- **Storybook Integration**: Components are documented and displayed in multiple states using **Storybook**.

## Installation

To get started, clone the repository and install the dependencies:
```
git clone https://github.com/Chornei-Olha/testove_initGroup
cd repositoryname
npm install
```

## Usage

After installation, you can start the development server:
`npm start
`
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Storybook

To explore the components in Storybook, use the following command:
`npm run storybook
`

This will start the Storybook server and open the component library in your default browser.

## Customization

### Theming

The theme toggle button allows users to switch between light and dark modes. The current theme is controlled via CSS variables, making it easy to extend or customize.

### Input States

The components handle multiple states including:

- Default
- Hover
- Focus
- Error
- Disabled
  
You can easily modify these states or add new ones as needed.

### Contributing

If you want to contribute to this project:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.

Made with ❤️ by Your Olha
