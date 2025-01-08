import {
  ArrowBackIcon,
  ArrowNextIcon,
  CameraIcon,
  ChevronNextIcon,
  LogOutIcon,
} from '@/components/Icons';
import { render } from '@testing-library/react-native';

describe('Icons', () => {
  it('should render ArrowBackIcon component', () => {
    const { toJSON } = render(<ArrowBackIcon />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render ArrowNextIcon component', () => {
    const { toJSON } = render(<ArrowNextIcon />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render ChevronNextIcon component', () => {
    const { toJSON } = render(<ChevronNextIcon />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render LogOutIcon component', () => {
    const { toJSON } = render(<LogOutIcon />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render CameraIcon component', () => {
    const { toJSON } = render(<CameraIcon />);

    expect(toJSON).toMatchSnapshot();
  });
});
