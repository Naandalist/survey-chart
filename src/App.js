import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Charts from "./components/pages/Charts";
import ChartMahasiswa from "./components/pages/ChartMahasisiwa";
import ChartPenggunaLulusan from "./components/pages/ChartPenggunaLulusan";
import ChartDosenTendik from "./components/pages/ChartDosenTendik";
import ChartVisiMisi from "./components/pages/ChartVisiMisi";
import ChartLulusan from "./components/pages/ChartLulusan";
import NotFound from "./components/pages/NotFound";
// import Demo from "./components/pages/Demo";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/chart' component={Charts} />
        <Route exact path='/mahasiswa' component={ChartMahasiswa} />
        <Route
          exact
          path='/pengguna-lulusan'
          component={ChartPenggunaLulusan}
        />
        <Route
          exact
          path='/dosen-dan-tenaga-kependidikan'
          component={ChartDosenTendik}
        />
        <Route exact path='/pemahaman-visi-misi' component={ChartVisiMisi} />
        <Route exact path='/tracer-studi-lulusan' component={ChartLulusan} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
