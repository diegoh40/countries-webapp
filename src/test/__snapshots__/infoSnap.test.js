import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../../redux/configureStore';
import Info from '../../pages/Details';

/*
test('Info snapshot', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const treee = render
      (
        <Provider store={store}>
          <BrowserRouter>
          <Switch>
            <Route>
            <Info />
            </Route>
            </Switch>
          </BrowserRouter>
        </Provider>,
      )

    expect(treee).toMatchSnapshot();
  });
 */

test('Info snapshot', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route>
            <Info />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
  );
  const linkElement1 = screen.getByText(/Capital/i);
  expect(linkElement1).toMatchSnapshot();
});
