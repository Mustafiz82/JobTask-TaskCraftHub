import React from 'react';
import { useDrop } from 'react-dnd'


const Ongoin = ({binnedItems}) => {

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
          accept: "ongoing",
        //   canDrop: () => canMoveKnight(x, y),
          drop: () => ({name:"The ongoing bin"}),
          collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
          })
        }),
        []
      )

    return (
        <div ref={drop} className="border-4 w-1/3    border-purple-400  h-[90vh]">{
            binnedItems.map(item => <div>
                <p>{item}</p>
            </div> )
        }</div>
    );
};

export default Ongoin;