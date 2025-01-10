import React, { JSXElementConstructor, ReactNode } from 'react';

export interface RootProviderProps {
  children: ReactNode;
  providers: JSXElementConstructor<React.PropsWithChildren<unknown>>[];
}

const RootProvider: React.FC<RootProviderProps> = ({ providers, children }) =>
  providers.reduceRight((next, Provider) => <Provider>{next}</Provider>, children);

export default RootProvider;
