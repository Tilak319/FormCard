import { AlliumProvider } from '@telus-uds/ds-allium'
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from './Dashboard';
import { Box, FlexGrid } from '@telus-uds/components-base';
import MainDashBoard from './components/Overview/Card/MainDashBoard';

function App() {
  
  return (
    <AlliumProvider>
      <FlexGrid ><FlexGrid.Row>
        <FlexGrid.Col lg={12}>
          <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/dashboard" element={<MainDashBoard />} />
        </Routes>
      </BrowserRouter>
      
      </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
      </FlexGrid>
    </AlliumProvider>
  );
}

export default App;
