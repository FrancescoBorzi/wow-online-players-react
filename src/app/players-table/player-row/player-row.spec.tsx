import { render } from '@testing-library/react';

import PlayerRow from './player-row';
import { MOCK_PLAYER } from '../../test-utils';

describe('PlayerRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerRow player={MOCK_PLAYER} />);
    expect(baseElement).toBeTruthy();
  });
});
