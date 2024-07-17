import Tasks from "../pages/Tasks/Tasks";
import Welcome from "../pages/Welcome/Welcome";

const routes = [
  {
    path: '/welcome',
    component: <Welcome />
  },
  {
    path: '/tasks',
    component: <Tasks />
  }
];

export default routes;