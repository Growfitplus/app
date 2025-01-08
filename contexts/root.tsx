import React from 'react';

interface ProvidersProps {
  providers: React.JSXElementConstructor<React.PropsWithChildren<unknown>>[];
  children: React.ReactNode;
}

const RootProvider: React.FC<ProvidersProps> = ({ providers, children }) =>
  providers.reduceRight((next, Provider) => <Provider>{next}</Provider>, children);

export default RootProvider;
