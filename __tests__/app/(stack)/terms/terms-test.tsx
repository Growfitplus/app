import Terms from '@/app/(stack)/terms/terms';
import { render } from '@testing-library/react-native';

describe('Terms', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<Terms />);

    expect(toJSON).toMatchSnapshot();
  });
});
