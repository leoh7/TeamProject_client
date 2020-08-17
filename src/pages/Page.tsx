import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CommonPage from './CommonPage';
import AccountPage from './AccountPage';
import AdminPage from './AdminPage';
import AccountDetailPage from './AccountDetailPage';
import { StoreSearchProvider } from '../items/context/StoreSearchContext';

const Page = () => {
  return (
    <StoreSearchProvider>
      <Switch>

        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/account">
          <AccountPage />
        </Route>
        <Route path="/mypage">
          <AccountDetailPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route>
          <CommonPage />
        </Route>

      </Switch>
    </StoreSearchProvider>
  );
}

export default Page;
