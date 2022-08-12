import React, { useEffect, useState } from 'react';
import { Stage, Text, Layer, Rect, Group } from 'react-konva';
import Image from '../message-wall-2022/common/Image';
import contentTypes from '../message-wall-2022/lib/ContentTypes';
import Page from '../message-wall-2022/pages/Page';
import JoiningMclAcmContent from '../message-wall-2022/content/JoiningMclAcmContent';

import MessageToAspiringMembersContent from '../message-wall-2022/content/MessageToAspiringMembersContent';
import MostMemorableMomentContent from '../message-wall-2022/content/MostMemorableMomentContent';
import QuestionHeader from '../message-wall-2022/common/QuestionHeader';
import DesktopMessageToAspiringMembersContent from '../message-wall-2022/content/DesktopMessageToAspiringMembersContent';
import DesktopJoiningMclAcmContent from '../message-wall-2022/content/DesktopJoiningMclAcmContent';
import DesktopMostMemorableMomentContent from '../message-wall-2022/content/DesktopMostMemorableMomentContent';
import SplashPageContent from '../message-wall-2022/content/SplashPageContent';
import DesktopSplashPageContent from '../message-wall-2022/content/DesktopSplashPageContent';
import EndGalleryContent from '../message-wall-2022/content/EndGalleryContent';
import DesktopEndGalleryContent from '../message-wall-2022/content/DesktopEndGalleryContent';

export default function MessageWallMaker() {
  const [items, setItems] = useState([]);
  const initialFormState = {
    scale: 1,
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
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const [selectedItemId, setSelectedItemId] = useState(null);
  const selectedItem =
    selectedItemId && items.find((item) => item.id === selectedItemId);
  useEffect(() => {
    setFormValues((oldFormValues) => ({ ...oldFormValues, ...selectedItem }));
  }, [selectedItem]);

  const updateItem = (id, value) => {
    console.log('Updating item', id, value);
    console.log(items.map((e) => e.id));
    setItems((oldItems) => oldItems.map((e) => (e.id === id ? value : e)));
  };

  const submitItemInformation = () => {
    const itemInformation = {
      ...selectedItem,
      x: formValues.x,
      y: formValues.y,
      width: formValues.width,
      height: formValues.height,
      scale: formValues.scale,
    };
    updateItem(selectedItemId, itemInformation);
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
    updateItem(selectedItemId, textInformation);
    console.log(textInformation);
  };

  const submitImageInformation = () => {
    const imageInformation = {
      ...selectedItem,
      image: formValues.image,
      rotation: formValues.rotation,
    };
    updateItem(selectedItemId, imageInformation);
    console.log(imageInformation);
  };

  const updateFormValue = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const onItemDragEnd = (event) => {
    const { x, y } = event.target.position();
    event.target.position({ x: selectedItem.x, y: selectedItem.y });
    console.log(`${x} ${y} ${selectedItemId}`);

    if (Number.isNaN(x) || Number.isNaN(y)) {
      console.log('ERROR: NOT A NUMBER');
      updateItem(selectedItemId, {
        ...selectedItem,
        x: selectedItem.x + 0.01,
        y: selectedItem.y + 0.01,
      });
    } else {
      const newPosition = {
        x: Math.floor(x),
        y: Math.floor(y),
      };
      updateItem(selectedItemId, { ...selectedItem, ...newPosition });
      setFormValues((oldFormValues) => ({ ...oldFormValues, ...newPosition }));
    }
  };

  const [exportModelVisible, setExportModelVisible] = useState(false);

  const onExportClicked = () => setExportModelVisible(true);

  const onAddTextClicked = () => {
    const id = Math.floot(Math.random() * 10000000);
    setItems((oldItems) => [
      ...oldItems,
      {
        id,
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
    setSelectedItemId(id);
  };

  const onAddImageClicked = () => {
    const id = Math.floot(Math.random() * 10000000);
    setItems((oldItems) => [
      ...oldItems,
      {
        id,
        contentType: contentTypes.ImageContentType,
        image: '/anniversary/2022/moments/momentsImage1.png',
        rotation: 0,
        x: 100,
        y: 100,
        width: 21.08,
        height: 19.69,
      },
    ]);
    setSelectedItemId(id);
  };
  const onDelesectClicked = () => {
    setSelectedItemId(null);
  };

  const onDeleteClicked = () => {
    setItems(items.filter((item) => item.id !== selectedItemId));
    setSelectedItemId(null);
  };

  const presetContent = {
    Empty: [],
    '[M] Splash Page': SplashPageContent,
    '[M] Most Memorable Moment': MostMemorableMomentContent,
    '[M] Joining MCL-ACM': JoiningMclAcmContent,
    '[M] Message to Aspiring Members': MessageToAspiringMembersContent,
    '[M] End Gallery': EndGalleryContent,
    '[D] Splash Page': DesktopSplashPageContent,
    '[D] Most Memorable Moment': DesktopMostMemorableMomentContent,
    '[D] Joining MCL-ACM': DesktopJoiningMclAcmContent,
    '[D] Message to Aspiring Members': DesktopMessageToAspiringMembersContent,
    '[D] End Gallery': DesktopEndGalleryContent,
  };

  const onPresetSelected = (preset) => {
    setItems(preset);
  };

  const renderNonGroup = (content) =>
    content.contentType === contentTypes.QuestionHeaderContentType ? (
      <QuestionHeader
        text={content.text}
        x={content.x}
        y={content.y}
        rotation={content.rotation}
      />
    ) : (
      <Group
        key={content.id}
        width={content.width}
        height={content.height}
        x={content.x}
        y={content.y}
        onClick={() => setSelectedItemId(content.id)}
        draggable={content.id === selectedItemId}
        onDragEnd={(e) => onItemDragEnd(e)}
        scaleX={content.scale}
        scaleY={content.scale}
      >
        <Rect
          width={content.width}
          height={content.height}
          stroke='red'
          strokeWidth={content.id === selectedItemId ? 1 : 0}
        />
        {content.contentType === contentTypes.TextContentType && (
          <Text
            fontFamily={content.fontFamily}
            fontSize={content.fontSize}
            text={content.text}
            width={content.width}
            height={content.height + 20}
            fill='white'
            lineHeight={content.lineHeight}
            align={content.align}
            fontStyle={content.fontStyle}
          />
        )}
        {content.contentType === contentTypes.ImageContentType && (
          <Image
            width={content.width}
            height={content.height}
            imagePath={content.image}
            rotation={content.rotation}
            _useStrictMode
          />
        )}
      </Group>
    );

  const renderGroupContent = (content) =>
    content.contentType === contentTypes.QuestionHeaderContentType ? (
      <QuestionHeader
        text={content.text}
        x={content.x}
        y={content.y}
        rotation={content.rotation}
      />
    ) : (
      <Group
        key={content.id}
        width={content.width}
        height={content.height}
        x={content.x}
        y={content.y}
      >
        <Rect
          width={content.width}
          height={content.height}
          stroke='red'
          strokeWidth={content.id === selectedItemId ? 1 : 0}
        />
        {content.contentType === contentTypes.TextContentType && (
          <Text
            fontFamily={content.fontFamily}
            fontSize={content.fontSize}
            text={content.text}
            width={content.width}
            height={content.height + 20}
            fill='white'
            lineHeight={content.lineHeight}
            align={content.align}
            fontStyle={content.fontStyle}
          />
        )}
        {content.contentType === contentTypes.ImageContentType && (
          <Image
            width={content.width}
            height={content.height}
            imagePath={content.image}
            _useStrictMode
          />
        )}
      </Group>
    );

  return (
    <>
      {exportModelVisible && (
        <div className='absolute w-screen h-screen flex z-30 bg-white/50'>
          <div className='mx-auto w-[500px] flex flex-col bg-white m-14 opacity-100 p-8'>
            <p className='font-bold mb-3'>
              Copy and Paste this JSON Object to your code
            </p>
            <textarea
              className='border-2 rounded p-2 w-full h-full whitespace-pre-wrap overflow-scroll font-mono'
              value={JSON.stringify(items, null, 2)}
            />

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
          <select
            className='border-2 rounded px-8 py-2'
            onChange={(e) => onPresetSelected(presetContent[e.target.value])}
          >
            {Object.keys(presetContent).map((preset) => (
              <option key={preset} value={preset}>
                {preset}
              </option>
            ))}
          </select>
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
                    onChange={(e) =>
                      updateFormValue('x', Number.parseFloat(e.target.value))
                    }
                  />
                </div>
                <div>
                  <p>y</p>
                  <input
                    type='number'
                    className='border-2 rounded w-full'
                    value={formValues.y}
                    onChange={(e) =>
                      updateFormValue('y', Number.parseFloat(e.target.value))
                    }
                  />
                </div>
                <div>
                  <p>width</p>
                  <input
                    type='number'
                    className='border-2 rounded w-full'
                    value={formValues.width}
                    onChange={(e) =>
                      updateFormValue(
                        'width',
                        Number.parseFloat(e.target.value),
                      )
                    }
                  />
                </div>
                <div>
                  <p>height</p>
                  <input
                    type='number'
                    name='height'
                    className='border-2 rounded w-full'
                    value={formValues.height}
                    onChange={(e) =>
                      updateFormValue(
                        'height',
                        Number.parseFloat(e.target.value),
                      )
                    }
                  />
                </div>
                <div>
                  <p>scale</p>
                  <input
                    type='number'
                    className='border-2 rounded w-full'
                    value={formValues.scale}
                    onChange={(e) =>
                      updateFormValue(
                        'scale',
                        Number.parseFloat(e.target.value),
                      )
                    }
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
                        updateFormValue(
                          'fontSize',
                          Number.parseFloat(e.target.value),
                        )
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
                        updateFormValue(
                          'lineHeight',
                          Number.parseFloat(e.target.value),
                        )
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
                        updateFormValue(
                          'rotation',
                          Number.parseFloat(e.target.value),
                        )
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
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Page color='#003D52'>
              <Rect width={640} height={360} stroke='red' strokeWidth={2} />
              {items.map((content) =>
                content.contentType === contentTypes.GroupContentType ? (
                  <Group
                    key={content.id}
                    width={content.width}
                    height={content.height}
                    x={content.x}
                    y={content.y}
                    onClick={() => setSelectedItemId(content.id)}
                    draggable={content.id === selectedItemId}
                    onDragEnd={(e) => onItemDragEnd(e)}
                    scaleX={content.scale}
                    scaleY={content.scale}
                  >
                    {content.children.map((subContent) =>
                      renderGroupContent(subContent),
                    )}
                  </Group>
                ) : (
                  renderNonGroup(content)
                ),
              )}
            </Page>
          </Layer>
        </Stage>
      </div>
    </>
  );
}
