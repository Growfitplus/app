import ProfileHeader from '@/components/Headers/Profile.header';
import { render } from '@testing-library/react-native';

describe('Progress Tab', () => {
  it('should render without crashing', () => {
    const { toJSON } = render(<ProfileHeader handleProfile={jest.fn} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
