import React from 'react';
import './styles.css';
import { publicApiType } from './createApi';
import { observerOptions as defaultObserverOptions } from './settings';
import * as constants from './constants';
import type { ItemType } from './types';
import slidingWindow from './slidingWindow';
declare type ArrowType = React.FC | React.ReactNode;
export interface Props {
    /**
     Component for left arrow
  
     e.g. LeftArrow={Arrow}
  
     or LeftArrow={<Arrow {...props />}}
     */
    LeftArrow?: ArrowType;
    /**
     Component for right arrow
  
     e.g. RightArrow={Arrow}
  
     or RightArrow={<Arrow {...props />}}
     */
    RightArrow?: ArrowType;
    /**
      Every child should has unique `itemId` prop
     */
    children: ItemType | ItemType[];
    /**
      Duration of transition
     */
    transitionDuration?: number;
    /**
      Ease function for transition
  
      Example -  t => t*(2-t)
  
      Full list at https://gist.github.com/gre/1650294#file-easing-js
     */
    transitionEase?: (t: number) => number;
    /**
      Transition behavior can be 'smooth', 'auto' or custom function
  
      Example:
  
      (instructions) => {
        const [{ el, left }] = instructions;
        const styler = Styler(el);
  
        animate({
          from: el.scrollLeft,
          to: left,
          type: 'spring',
          onUpdate: (left) => styler.set('scrollLeft', left),
        });
      }
     */
    transitionBehavior?: string | Function;
    /**
     Callback that fire once on init
     */
    onInit?: (api: publicApiType) => void;
    /**
     Callback that fire every time when visibility of items change
     */
    onUpdate?: (api: publicApiType) => void;
    /**
     Callback that fire on scroll event
     */
    onScroll?: (api: publicApiType, ev: React.UIEvent) => void;
    /**
     Handler for mouse wheel
     */
    onWheel?: (api: publicApiType, ev: React.WheelEvent) => void;
    /**
      Options for intersection observer
     */
    options?: Partial<typeof defaultObserverOptions>;
    onMouseDown?: (arg0: publicApiType) => React.MouseEventHandler;
    onMouseUp?: (arg0: publicApiType) => React.MouseEventHandler;
    onMouseMove?: (arg0: publicApiType) => React.MouseEventHandler;
    /**
      For add custom className for item
     */
    itemClassName?: string;
    /**
      For add custom className for item separator
     */
    separatorClassName?: string;
    /**
      For add custom className for scroll container
     */
    scrollContainerClassName?: string;
    /**
      For add custom className for wrapper
     */
    wrapperClassName?: string;
    /**
      Ref object for access VisibilityContextApi outside of context
  
      e.g. apiRef.current.scrollToItem(...)
     */
    apiRef?: React.MutableRefObject<publicApiType>;
}
/**
  See docs and examples at

  https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
 */
declare function ScrollMenu({ LeftArrow: _LeftArrow, RightArrow: _RightArrow, children, transitionDuration, transitionEase, transitionBehavior, onInit, onUpdate, onMouseDown, onMouseUp, onMouseMove, onScroll, onWheel, options, scrollContainerClassName, itemClassName, separatorClassName, wrapperClassName, apiRef, }: Props): JSX.Element;
declare const _default: {
    constants: typeof constants;
    getItemsPos: (items: import("./types").visibleItems) => {
        first: string;
        center: string;
        last: string;
    };
    slidingWindow: typeof slidingWindow;
    ScrollMenu: typeof ScrollMenu;
    VisibilityContext: React.Context<publicApiType>;
};
export default _default;