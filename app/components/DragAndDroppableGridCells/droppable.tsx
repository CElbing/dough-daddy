'use client';

import { ReactNode } from "react";
import {useDroppable} from '@dnd-kit/react';


interface Props {
  id: string;
  children?: ReactNode;
}

export default function Droppable({id, children}:Props) {
  const {ref, isDropTarget} = useDroppable({id});

  return (
    <div ref={ref} className={isDropTarget ? "droppable active" : "droppable"}>
      {children}
    </div>
  );
}