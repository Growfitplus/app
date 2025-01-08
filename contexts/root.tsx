import React from 'react';

interface ProvidersProps {
  providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

const RootProvider: React.FC<ProvidersProps> = ({ providers, children }) =>
  providers.reduceRight((next, Provider) => <Provider>{next}</Provider>, children);

export default RootProvider;
