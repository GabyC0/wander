import { render, screen, getByRole, fireEvent, act, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import {Login} from './components/Login';
import {Nav} from './components/Nav';
import {Search} from './components/Search';
import FaveParks from './components/FaveParks';
import {ParkList} from './components/ParkList';
import {Home} from './components/Home';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Login", () => {
  test("renders my login component", () => {
    render(<Login />);
  });
});

describe("Nav", () => {
  test("renders my nav component", () => {
    render(<MemoryRouter> <Nav /></MemoryRouter>);
  });
});

describe("Search", () => {
  test("renders my search component", () => {
    render(<Search />);
  });
});

describe("FaveParks", () => {
  test("renders my fave parks component", () => {
    render(<FaveParks />);
  });
});

describe("ParkList", () => {
  test("renders my fave park list component", () => {
    render(<ParkList />);
  });
});

test("renders Discover All Button", () => {
  render(<MemoryRouter><Home /></MemoryRouter>);
  screen.getByRole("button", {
    name: /DISCOVER ALL/
  });
});
