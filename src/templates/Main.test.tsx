import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    // We can use the same test for all the different scenarios
    it('should render the nav', () => {
      render(<Main meta={null}>{null}</Main>);

      const nav = screen.getByRole('navigation');

      expect(nav).toBeInTheDocument();
    });
  });
});
