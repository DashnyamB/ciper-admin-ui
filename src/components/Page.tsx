import type { FunctionComponent, PropsWithChildren } from 'react';

export const Page: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <main className="p-2">{children}</main>;
};
