// app/components/FullScreenContainer.tsx
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function FullScreenContainer({ children }: Props) {
  return (
    <div className="relative rounded 
        w-full z-10 p-6 sm:p-8 flex flex-col sm:flex-row 
        items-stretch sm:items-center justify-between gap-6">
      {children}
    </div>
  );
}