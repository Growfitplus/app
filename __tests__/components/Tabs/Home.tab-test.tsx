import HomeTab from '@/components/Tabs/Home.tab';
import { render } from '@testing-library/react-native';

describe('Home Tab', () => {
  it('should render without crashing', () => {
    const { toJSON } = render(<HomeTab focused />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should not add bg when not focused', () => {
    const { toJSON } = render(<HomeTab focused={false} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
