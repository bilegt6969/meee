"use client";

import ApolloProvider from "./ApolloProvider";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};