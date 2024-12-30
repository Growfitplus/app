import NotFoundScreen from '@/app/+not-found';
import { render } from '@testing-library/react-native';

describe('Not Found', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<NotFoundScreen />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(<NotFoundScreen />);

    // eslint-disable-next-line quotes
    expect(getByText("This screen doesn't exist.")).toBeTruthy();
  });

  it('contains a link to the home screen', () => {
    const { getByText } = render(<NotFoundScreen />);

    expect(getByText('Go to home screen!')).toBeTruthy();
  });
});
