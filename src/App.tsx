/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import CreateJob from './pages/CreateJob';
import Services from './pages/Services';
import ProfessionalDetail from './pages/ProfessionalDetail';
import CreateService from './pages/CreateService';
import CreateFlyer from './pages/CreateFlyer';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/create" element={<CreateJob />} />
          <Route path="job/:id" element={<JobDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="services/create" element={<CreateService />} />
          <Route path="professional/:id" element={<ProfessionalDetail />} />
          <Route path="flyers" element={<CreateFlyer />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
