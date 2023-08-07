import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import { Template } from './templates/Template';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Template>
        <Template.Header />
        <Template.Body>
          <Template.TimeLine>
            <div>test</div>
          </Template.TimeLine>
        </Template.Body>
      </Template>
    ),
  }
]);

function App() {
  return (
    <>
      <GlobalStyles />
      {
        // Todo: Add routes here or import them from another file
      }
      <RouterProvider router={router} />
    </>
  );
}

export default App;
