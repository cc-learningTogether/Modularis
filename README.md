# Modularis 🌌

## What is Modularis? 
Modularis is a library of reusable React components designed to provide a consistent and flexible UI across multiple web applications.

## Motivation
The goal of Modularis is to:

- Promote consistency in UI design

- Enable code reuse across projects

- Reduce development time and maintenance efforts

By offering a shared set of components, Modularis helps teams avoid rebuilding the same UI elements in every project.

## How to Use
### 1. Install the library

This package is available in npm, [@binarynest/modularis
](https://www.npmjs.com/package/@binarynest/modularis)

```
npm i @binarynest/modularis
```

If you use yarn

```
yarn add @binarynest/modularis
```

### 2. Import CSS file from the package 

```
// In the main entry file of your app (e.g. index.tsx or App.tsx)

import 'my-package/styles.css';
```

Why you need to import CSS file from the package ? 

See:[ Why Tailwind CSS Styles Disappeared After Importing My Component Package](https://hugo.msano.ovh/post/20250602-tailwindcss-styles-disappeared-npm-package/)

## How to contribute

#### 🛠️ Get Started
##### 1. Clone the repository

Download the source code from the Git repository.

##### 2. Install dependencies

Run the following command in the project root to install the necessary packages:

```bash
    npm install
```

##### 3. Start Storybook
Launch [Storybook](https://storybook.js.org/) to preview and interact with the components:

```bash
    npm run storybook
```

## 🔄 Contribution Workflow

#### 1. Check the To-Dos

Visit the [Project backlog](https://github.com/orgs/cc-learningTogether/projects/4/views/1) and browse the available tasks.

Pick a task and assign yourself
Choose a task you’d like to work on and assign it to yourself.

#### 2. Create a new branch

Name your branch using the format:

`<issue-number>-<short-description>`

Example:
If the task is "create icon component #1", your branch name should be:

`1-create-icon-component`

#### 3. Follow commit message conventions
This project uses [Commitlint](https://commitlint.js.org/) and [Husky](https://typicode.github.io/husky/) to enforce consistent commit messages.
Please follow the Conventional Commit format.

#### 4. Open a Pull Request

Base your pull request on the `development` branch. 

Notify an organizer once your PR is ready for review.

`main` and `development` branch is protected. To merge Pull Request, it requires an approval.
