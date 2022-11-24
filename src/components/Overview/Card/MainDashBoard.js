import React from "react";
import { AlliumProvider, Spacer, Box, FlexGrid } from "@telus-uds/ds-allium";
import "./App.css";
import Tracker from "./stepTracker";
import Headings from "./Headings";
import Notifications from "./Notifications";
import PlanCard from "./PlanCard";
import '@telus-uds/palette-public-mobile/build/web/fonts/fonts-cdn.css'

const MainDashBoard = () => {
  return (
    <AlliumProvider>
        <Box>
          <Spacer space={7} />
          <Tracker />
          <Headings address=' 4201 777 Richards Street, Vancouver, BC' />
          <Box>
            <Spacer space={3} />
            <Notifications notify1='These base prices don’t include add-ons and discounts you may
                have on your account. Your total monthly charges will be shown
                in the ‘Review and submit’ step. Note: taxes have not yet been
                applied.'/>
          </Box>
          <Spacer space={3} />
          <FlexGrid outsideGutter={false}>
            <FlexGrid.Row>
              <FlexGrid.Col lg={3}>
                <PlanCard />
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        </Box>

    </AlliumProvider>
  );
};

export default MainDashBoard;
