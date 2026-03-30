'use client';

import {useDraggable} from '@dnd-kit/react';

interface Props{
    id : string;
}

export default function Draggable({id}:Props) {
  const {ref} = useDraggable({id});

  return <button ref={ref} className="btn">Draggable</button>;
}