import React from 'react';
import ArticleItem from '../ArticleItem';
import { shallow, mount } from 'enzyme';

describe('<ArticleItem />', () => {
  const minProps = {
    title: 'Lari Pagi',
    summary: 'Lorem ipsum',
    date: '31-01-2017',
  };

  it('show article details', () => {
    // ShallowWrapper
    const subject = shallow(<ArticleItem {...minProps} />);

    // title nya muncul
    expect(subject.find('h2.article-item__title').text()).toBe('Lari Pagi');
    // summary muncul
    // date nya muncul
  });

  it('able change its title to uppercase when its button clicked');

});