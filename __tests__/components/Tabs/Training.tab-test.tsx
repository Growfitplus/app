import TrainingTab from '@/components/Tabs/Training.tab';
import { render } from '@testing-library/react-native';

describe('Training Tab', () => {
  it('should render without crashing', () => {
    const { toJSON } = render(<TrainingTab focused />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should not add bg when not focused', () => {
    const { toJSON } = render(<TrainingTab focused={false} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
