import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'container/Layout';

import { Search } from 'pages';

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route index element={<Navigate replace to="/search" />} />
      <Route element={<Layout />}>
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}
