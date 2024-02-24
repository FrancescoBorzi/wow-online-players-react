import { render } from '@testing-library/react';

import PlayersTable from './players-table';
import { MOCK_PLAYER } from '../test-utils';

describe('PlayersTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayersTable players={[MOCK_PLAYER]} />);
    expect(baseElement).toBeTruthy();
  });
});
