import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/extensions
import store from '../redux/configureStore';
// eslint-disable-next-line import/extensions
import Countries from '../pages/Countries';

test('Countries snapshot', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route>
            <Countries />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
