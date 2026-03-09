# ExampleAngular21App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.1.

```shell
ng new example-angular-21-app
✔ Which stylesheet system would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
✔ Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai None, GitHub Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ]
CREATE example-angular-21-app/.prettierrc (161 bytes)
CREATE example-angular-21-app/README.md (1472 bytes)
CREATE example-angular-21-app/.editorconfig (314 bytes)
CREATE example-angular-21-app/.gitignore (622 bytes)
CREATE example-angular-21-app/angular.json (2081 bytes)
CREATE example-angular-21-app/package.json (797 bytes)
CREATE example-angular-21-app/tsconfig.json (957 bytes)
CREATE example-angular-21-app/tsconfig.app.json (429 bytes)
CREATE example-angular-21-app/tsconfig.spec.json (441 bytes)
CREATE example-angular-21-app/.vscode/extensions.json (130 bytes)
CREATE example-angular-21-app/.vscode/launch.json (470 bytes)
CREATE example-angular-21-app/.vscode/mcp.json (179 bytes)
CREATE example-angular-21-app/.vscode/tasks.json (978 bytes)
CREATE example-angular-21-app/src/main.ts (222 bytes)
CREATE example-angular-21-app/src/index.html (305 bytes)
CREATE example-angular-21-app/src/styles.scss (80 bytes)
CREATE example-angular-21-app/src/app/app.scss (0 bytes)
CREATE example-angular-21-app/src/app/app.spec.ts (689 bytes)
CREATE example-angular-21-app/src/app/app.ts (305 bytes)
CREATE example-angular-21-app/src/app/app.html (20144 bytes)
CREATE example-angular-21-app/src/app/app.config.ts (313 bytes)
CREATE example-angular-21-app/src/app/app.routes.ts (77 bytes)
CREATE example-angular-21-app/public/favicon.ico (15086 bytes)
CREATE example-angular-21-app/.github/copilot-instructions.md (2277 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```

## Adding @angular/material

```shell
npm run ng -- add @angular/material

> example-angular-21-app@0.0.0 ng
> ng add @angular/material


Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics.

   No
Global setting: enabled
Local setting: disabled
Effective status: disabled
✔ Determining Package Manager
  › Using package manager: npm
✔ Searching for compatible package version
  › Found compatible package version: 21.2.1.
✔ Loading package information
✔ Confirming installation
✔ Installing package
✔ Select a pair of starter prebuilt color palettes for your Angular Material theme Azure/Blue         [Preview: https://material.angular.dev?theme=azure-blue]
UPDATE package.json (864 bytes)
✔ Packages installed successfully.
UPDATE src/styles.scss (1259 bytes)
UPDATE src/index.html (638 bytes)
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
