import React from "react";
export const Hydrate = ({ children }: { children: React.ReactNode }) => {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if(!hydrated) {
    return null;
  }

  return <>{children}</>;
};
