import React, { Suspense } from "react";
import {  Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import {  publicRoutesData } from "./routes/RoutingData";
import { rootName } from "./utils/constant";
import PublicRoute from "./routes/PublicRoute";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { Landing } from "./routes/LazyRoute";

const App = () => {
  const location = useLocation();

   const hideHeader = ["/login", "/register", "/emailVerify", "/confirmDetails", "/confimOtp"].includes(location.pathname)
  const isAuthenticate = false;
  return (
    <>
      {/* <Loader loading={isloading} /> */}

      {!hideHeader && <Header />}
      <Suspense fallback={<>Loading</>}>
        <Routes>
          {/* Public routes */}

          <Route element={<PublicRoute isAuthenticated={isAuthenticate} />}>
            {publicRoutesData?.map((item, idx) => {
              return (
                <Route
                  key={idx}
                  index
                  path={`${rootName}${item.path}`}
                  element={item.component}
                />
              );
            })}

          </Route>
          {/* Public routes end */}
<Route path="/" element={<Landing />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
