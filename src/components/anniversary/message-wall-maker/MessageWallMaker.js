import React, { useEffect, useState } from 'react';
import { Stage, Text, Layer, Group, Rect } from 'react-konva';
import Image from '../message-wall-2022/common/Image';
import {
  contentTypes,
  mostMemorableMomentContent,
} from '../message-wall-2022/lib/MessageWallContent';
import Page from '../message-wall-2022/pages/Page';

export default function MessageWallMaker() {
  const [items, setItems] = useState(mostMemorableMomentContent);
  const [formValues, setFormValues] = useState({
    text: '',
    fontFamily: '',
    fontSize: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    lineHeight: 0,
    image: '',
    rotation: '',
  });

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const selectedItem = selectedItemIndex && items[selectedItemIndex];
  useEffect(() => {
    setItems(items);
    setFormValues({ ...formValues, ...selectedItem });
  }, [selectedItem]);

  const updateItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const submitItemInformation = () => {
    const itemInformation = {
      ...selectedItem,
      x: formValues.x,
      y: formValues.y,
      width: formValues.width,
      height: formValues.height,
    };
    updateItem(selectedItemIndex, itemInformation);
    console.log(itemInformation);
  };
  const submitTextInformation = () => {
    const textInformation = {
      ...selectedItem,
      text: formValues.text,
      fontSize: formValues.fontSize,
      fontFamily: formValues.fontFamily,
      lineHeight: formValues.lineHeight,
    };
    updateItem(selectedItemIndex, textInformation);
    console.log(textInformation);
  };

  const submitImageInformation = () => {
    const imageInformation = {
      ...selectedItem,
      image: formValues.image,
      rotation: formValues.rotation,
    };
    updateItem(selectedItemIndex, imageInformation);
    console.log(imageInformation);
  };

  const updateFormValue = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const onItemDragEnd = (event) => {
    setFormValues({ ...formValues, x: event.target.x(), y: event.target.y() });
  };

  const [exportModelVisible, setExportModelVisible] = useState(false);

  const onExportClicked = () => setExportModelVisible(true);

  const onAddTextClicked = () => {
    setItems([
      ...items,
      {
        contentType: contentTypes.TextContentType,
        text: 'Sample Text',
        fontFamily: 'Arial',
        fontSize: 10,
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        lineHeight: 1,
      },
    ]);
    setSelectedItemIndex(items.length - 1);
  };

  const onAddImageClicked = () => {
    setItems([
      ...items,
      {
        contentType: contentTypes.ImageContentType,
        image: '/anniversary/2022/moments/momentsImage1.png',
        rotation: 0,
        x: 100,
        y: 100,
        width: 21.08,
        height: 19.69,
      },
    ]);
    setSelectedItemIndex(items.length - 1);
  };
  const onDelesectClicked = () => {
    setSelectedItemIndex(null);
  };

  const onDeleteClicked = () => {
    const newItems = [...items];
    newItems.splice(selectedItemIndex, 1);
    setItems(newItems);
    setSelectedItemIndex(null);
  };

  return (
    <>
      {exportModelVisible && (
        <div className='absolute w-screen h-screen flex z-30 bg-white/50'>
          <div className='mx-auto w-[500px] flex flex-col bg-white m-14 opacity-100 p-8'>
            <p className='font-bold mb-3'>
              Copy and Paste this JSON Object to your code
            </p>
            <pre className='border-2 rounded p-2 w-full h-full whitespace-pre-wrap overflow-scroll'>
              {JSON.stringify(items, null, 2)}
            </pre>
            <div className='flex flex-row items-center mt-4 w-full'>
              <button
                type='button'
                className='border-2 rounded px-8 py-2 mx-auto'
                onClick={() => setExportModelVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='absolute right-10 top-10 max-w-[250px] z-20'>
        <div className='flex flex-col gap-4 w-[250px]'>
          <button
            type='button'
            onClick={onExportClicked}
            className='border-2 rounded bg-white w-[250px]'
          >
            Export
          </button>
          {selectedItem === null && (
            <div className='flex flex-row gap-4'>
              <button
                type='button'
                onClick={onAddTextClicked}
                className='border-2 rounded bg-white grow'
              >
                Add Text
              </button>

              <button
                type='button'
                onClick={onAddImageClicked}
                className='border-2 rounded bg-white grow'
              >
                Add Image
              </button>
            </div>
          )}
          {selectedItem !== null && (
            <>
              <button
                type='button'
                onClick={onDelesectClicked}
                className='border-2 rounded bg-white w-[250px]'
              >
                Deselect
              </button>
              <div className='flex flex-col shadow p-4 bg-white rounded'>
                <h5 className='font-bold text-lg text-center'>Item</h5>
                <hr className='mb-3' />
                <div>
                  <p>x</p>
                  <input
                    type='number'
                    className='border-2 rounded w-full'
                    value={formValues.x}
                    onChange={(e) => updateFormValue('x', e.target.value)}
                  />
                </div>
                <div>
                  <p>y</p>
                  <input
                    type='number'
                    className='border-2 rounded w-full'
                    value={formValues.y}
                    onChange={(e) => updateFormValue('y', e.target.value)}
                  />
                </div>
                <div>
                  <p>width</p>
                  <input
                    type='number'
                    className='border-2 rounded w-full'
                    value={formValues.width}
                    onChange={(e) => updateFormValue('width', e.target.value)}
                  />
                </div>
                <div>
                  <p>height</p>
                  <input
                    type='number'
                    name='height'
                    className='border-2 rounded w-full'
                    value={formValues.height}
                    onChange={(e) => updateFormValue('height', e.target.value)}
                  />
                </div>
                <button
                  type='button'
                  onClick={submitItemInformation}
                  className='border-2 rounded mt-3'
                >
                  Submit
                </button>
              </div>

              {selectedItem.contentType === contentTypes.TextContentType && (
                <div className='flex flex-col  shadow p-4  bg-white rounded'>
                  <h5 className='font-bold text-lg text-center'>Text</h5>
                  <hr className='mb-3' />
                  <div>
                    <p>text</p>
                    <textarea
                      className='border-2 rounded w-full'
                      value={formValues.text}
                      onChange={(e) => updateFormValue('text', e.target.value)}
                    />
                  </div>
                  <div>
                    <p>font Size</p>
                    <input
                      type='number'
                      className='border-2 rounded w-full'
                      value={formValues.fontSize}
                      onChange={(e) =>
                        updateFormValue('fontSize', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <p>font family</p>
                    <input
                      type='text'
                      className='border-2 rounded w-full'
                      value={formValues.fontFamily}
                      onChange={(e) =>
                        updateFormValue('fontFamily', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <p>line height</p>
                    <input
                      type='number'
                      name='width'
                      className='border-2 rounded w-full'
                      value={formValues.lineHeight}
                      onChange={(e) =>
                        updateFormValue('lineHeight', e.target.lineHeight)
                      }
                    />
                  </div>
                  <button
                    type='button'
                    onClick={submitTextInformation}
                    className='border-2 rounded mt-3'
                  >
                    Submit
                  </button>
                </div>
              )}
              {selectedItem.contentType === contentTypes.ImageContentType && (
                <div className='flex flex-col  shadow p-4  bg-white rounded'>
                  <h5 className='font-bold text-lg text-center'>Image</h5>
                  <hr className='mb-3' />
                  <div>
                    <p>image path</p>
                    <input
                      type='text'
                      name='x'
                      className='border-2 rounded w-full'
                      value={formValues.image}
                      onChange={(e) => updateFormValue('image', e.target.value)}
                    />
                  </div>
                  <div>
                    <p>rotation</p>
                    <input
                      type='number'
                      name='x'
                      className='border-2 rounded w-full'
                      value={formValues.rotation}
                      onChange={(e) =>
                        updateFormValue('rotation', e.target.value)
                      }
                    />
                  </div>
                  <button
                    type='button'
                    onClick={submitImageInformation}
                    className='border-2 rounded mt-3 w-full'
                  >
                    Submit
                  </button>
                </div>
              )}

              <button
                type='button'
                onClick={onDeleteClicked}
                className='border-2 border-red-400 rounded bg-red-400 w-[250px]'
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight} draggable>
          <Layer>
            <Page color='#003D52'>
              {items.map((content, index) => {
                switch (content.contentType) {
                  case contentTypes.TextContentType:
                    return (
                      <Group
                        x={content.x}
                        y={content.y}
                        onClick={() => setSelectedItemIndex(index)}
                        draggable={index === selectedItemIndex}
                        onDragEnd={(e) => onItemDragEnd(e)}
                      >
                        <Text
                          fontFamily={content.fontFamily}
                          fontSize={content.fontSize}
                          text={content.text}
                          width={content.width}
                          height={content.height}
                          fill='white'
                          lineHeight={content.lineHeight}
                        />
                        <Rect
                          width={content.width}
                          height={content.height}
                          stroke='red'
                          strokeWidth={index === selectedItemIndex ? 1 : 0}
                        />
                      </Group>
                    );
                  case contentTypes.ImageContentType:
                    return (
                      <Group
                        x={content.x}
                        y={content.y}
                        onClick={() => setSelectedItemIndex(index)}
                        draggable={index === selectedItemIndex}
                        onDragEnd={(e) => onItemDragEnd(e)}
                      >
                        <Image
                          width={content.width}
                          height={content.height}
                          imagePath={content.image}
                          onClick={() => setSelectedItemIndex(index)}
                        />
                        <Rect
                          width={content.width}
                          height={content.height}
                          stroke='red'
                          strokeWidth={index === selectedItemIndex ? 1 : 0}
                        />
                      </Group>
                    );
                  default:
                    return null;
                }
              })}
            </Page>
          </Layer>
        </Stage>
      </div>
    </>
  );
}
