import { render } from '@testing-library/react-native';

import { ClockSVG, HomeSVG, InfoSVG, LogoLogInSVG, LogoSVG, UserSVG } from '@/components/SVG';

describe('SVG', () => {
  it('should render ClockSVG component', () => {
    const { toJSON } = render(<ClockSVG />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render HomeSVG component', () => {
    const { toJSON } = render(<HomeSVG />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render InfoSVG component', () => {
    const { toJSON } = render(<InfoSVG />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render LogoSVG component', () => {
    const { toJSON } = render(<LogoSVG />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render LogoLogInSVG component', () => {
    const { toJSON } = render(<LogoLogInSVG />);

    expect(toJSON).toMatchSnapshot();
  });

  it('should render UserSVG component', () => {
    const { toJSON } = render(<UserSVG />);

    expect(toJSON).toMatchSnapshot();
  });
});
