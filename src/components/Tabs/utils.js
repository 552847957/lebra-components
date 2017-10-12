import React from 'react';

export function toArray(children) {
  // allow [c,[a,b]]
  const c = [];
  React.Children.forEach(children, child => {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

export function getActiveIndex(children, activeKey) {
  const c = toArray(children);
  for (let i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

export function getActiveKey(children, index) {
  const c = toArray(children);
  return c[index].key;
}

export function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

export function isTransformSupported(style) {
  return 'transform' in style ||
    'webkitTransform' in style ||
    'MozTransform' in style;
}

export function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
export function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v,
  };
}

export function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

export function getTransformByIndex(index, tabBarPosition) {
  const translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return `${translate}(${-index * 100}%) translateZ(0)`;
}

export function getMarginStyle(index, tabBarPosition) {
  const marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return {
    [marginDirection]: `${-index * 100}%`,
  };
}

export function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

export function setPxStyle(el, value, vertical) {
  value = vertical ? `0px, ${value}px, 0px` : `${value}px, 0px, 0px`;
  setTransform(el.style, `translate3d(${value})`);
}
/**
 * 
 * @param {*} props 都是自定义属性
 * object.keys(props)，获取所有的可枚举的属性，返回一个数组
 * reduce() 方法接收一个函数作为累加器，数组中的每个值key（从左到右）开始缩减，最终计算为一个值prev。
 * 返回的prev是一个对象
 */
export function getDataAttr(props) {
  return Object.keys(props).reduce((prev, key) => {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}
