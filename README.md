
About the Project
### App Component (`App.jsx`):
- Used `BrowserRouter` from `react-router-dom` to set up routing.
- Wrapped the entire application with `DndProvider` from `react-dnd` to enable drag-and-drop functionality.
- Set up routes for different components using `Routes` and `Route` components.
- Utilized local storage to persist task data across sessions.
- Rendered `StartingPage` and `ProjectBoard` components based on routing.

### StartingPage Component (`StartingPage.jsx`):
- Implemented a form to create new tasks.
- Used `uuid` to generate unique IDs for tasks.
- Utilized `localStorage` to store tasks.
- Displayed a form with an input field for task names and a button to create tasks.

### ProjectBoard Component (`ProjectBoard.jsx`):
- Created different sections for tasks based on their status (e.g., "todo", "inProgress", "closed").
- Utilized the `useDrop` hook from `react-dnd` to handle dropping tasks into sections.
- Displayed tasks within each section.

### Section Component:
- Rendered a section for tasks with a specific status.
- Utilized `useDrop` hook to handle dropping tasks into the section.
- Displayed the section's header with the count of tasks in that section.
- Displayed tasks within the section.

### Task Component:
- Rendered individual task items.
- Utilized `useDrag` hook to make tasks draggable.
- Displayed task names and provided an option to remove tasks.

### TaskDetail Component (`TaskDetail.jsx`):
- Implemented a form to edit task details.
- Used `useNavigate` from `react-router-dom` to navigate back to the main project board after editing or deleting tasks.
- Displayed task details such as title, status, and description.
- Provided options to save or delete tasks.

### Index File (`index.js`):
- Rendered the root component (`App`) within a `React.StrictMode`.
- Utilized `createRoot` from `react-dom/client` to render the app.

Overall, application enables users to create, view, edit, and delete tasks with a user-friendly interface, utilizing features like routing, drag-and-drop, and local storage for persistence.