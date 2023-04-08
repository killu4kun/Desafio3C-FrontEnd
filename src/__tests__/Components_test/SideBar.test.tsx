import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SimpleSidebar from '@components/SideBar';

describe('SimpleSidebar', () => {
  it('renders children and mobile nav', () => {
    render(
      <MemoryRouter>
        <SimpleSidebar>
          <div>Test Child</div>
        </SimpleSidebar>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Menu')[0]).toBeInTheDocument();
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();
  });

  it('opens and closes the sidebar on mobile', () => {
    render(
      <MemoryRouter>
        <SimpleSidebar>
          <div>Test Child</div>
        </SimpleSidebar>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('mobile-nav'));

    expect(screen.getByText('Lista')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Home'));

    expect(screen.queryByLabelText('Sidebar Content')).not.toBeInTheDocument();
  });

  it('opens and closes the sidebar on desktop', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SimpleSidebar>
          <div>Test Child</div>
        </SimpleSidebar>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('menu'));

    expect(screen.getByText('Lista')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Home'));

    expect(screen.queryByLabelText('Sidebar Content')).not.toBeInTheDocument();
  });
});
