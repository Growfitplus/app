import ProgressTab from '@/components/Tabs/Progress.tab';
import { render } from '@testing-library/react-native';

describe('Progress Tab', () => {
  it('should render without crashing', () => {
    const { toJSON } = render(<ProgressTab focused />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should not add bg when not focused', () => {
    const { toJSON } = render(<ProgressTab focused={false} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
