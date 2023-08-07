import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FlexBox from './theme/atoms/box/FlexBox';
import Header from './theme/organisms/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FlexBox
      
    >
      <Header />
    </FlexBox>,
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
