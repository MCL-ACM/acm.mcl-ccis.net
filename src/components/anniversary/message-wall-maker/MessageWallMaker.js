import React from 'react';
import { Stage, Text, Layer } from 'react-konva';

export default function MessageWallMaker() {
  return (
    <div className='mb-2'>
      <div className='flex flex row'>
        <select>
          <option value='volvo'>Volvo</option>
          <option value='volvo'>Volvo</option>
          <option value='volvo'>Volvo</option>
        </select>
      </div>
      <div style={{ backGroundColor: '003D52' }}>
        <Stage width={window.innerWidth} height={window.innerHeight} draggable>
          <Layer>
            <Text text='Hello World' />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}
