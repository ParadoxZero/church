import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import { Home } from './pages/home';
import { getWebInfo, WebInfo } from './service/data_service';
import { useState } from 'react';
import { Empty, Flex, Spin } from 'antd';
import { Management } from './pages/management';
import bgUrl from './assets/straws.png'
import { Vicars } from './pages/vicars';
import { MinistriesPage } from './pages/ministries';

function App() {

  const [info, setInfo] = useState<WebInfo | null>(null);
  const [is_error, set_error] = useState(false);

  if (is_error) {
    return <Flex justify="center" align="center" style={{ height: '100vh' }}><Empty description="Failed to load." /></Flex>;
  }

  if (!info) {
    getWebInfo().then((data) => {
      console.log(data);
      setInfo(data);
    }).catch((e) => {
      set_error(true);
      console.error(e);
    });
    return <Spin fullscreen tip="Loading..." />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home title={info.home_title} description={info.home_description} story_title={info.home_story_title} story={info.home_story} />,
    },
    {
      path: "/management",
      element: <Management details={info.current_management} history={info.management_history} />,
    },
    {
      path: "/vicars",
      element: <Vicars vicars={info.vicars} />,
    },
    {
      path: "/ministries",
      element: <MinistriesPage />
    }
  ]);

  return (
    <>
      <div style={{ marginTop: 50, backgroundImage: bgUrl }}>
        <RouterProvider router={router} />
      </div>
      <Header news={info.latest_news} />
    </>
  )
}

export default App
