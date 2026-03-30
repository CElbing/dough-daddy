'use client';

import { ReactNode } from "react";
import { useState } from "react";
import {DragDropProvider} from '@dnd-kit/react';
import Draggable from './draggable';
import Droppable from './droppable';


interface Props {
    children?: ReactNode;
}

export default function GridCellContainer() {
  const [parent, setParent] = useState<string | undefined>(undefined);
  const draggable = <Draggable id="draggable" />;

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;
        setParent(event.operation.target?.id as string);
      }}
    >
      <section className="drop-layout">
        {parent == null ? draggable : null}
        <Droppable id="droppable">
          {parent === 'droppable' ? draggable : null}
        </Droppable>
      </section>
    </DragDropProvider>
  );
}