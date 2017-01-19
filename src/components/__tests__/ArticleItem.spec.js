import React from 'react';
import ArticleItem from '../ArticleItem';
import { shallow, mount } from 'enzyme';

describe('<ArticleItem />', () => {
  const minProps = {
    title: 'Lari Pagi',
    summary: 'Lorem ipsum',
    date: '2017-12-31', // 31 Desember 2017
  };

  it('show article details', () => {
    // ShallowWrapper
    const subject = shallow(<ArticleItem {...minProps} />);

    // title nya muncul
    expect(subject.find('.article-item__title').text()).toBe('Lari Pagi');
    // summary muncul
    expect(subject.find('.article-item__summary').text()).toBe('Lorem ipsum');
    // date nya muncul
    expect(subject.find('.article-item__date').text()).toBe('Date: 31 Dec 17');
  });

  it('able change its title to uppercase when its button clicked', () => {
    // ShallowWrapper
    const subject = shallow(<ArticleItem {...minProps} />);

    expect(subject.find('.article-item__title').text()).toBe('Lari Pagi');

    // simulate event click
    subject.find('.article-item__title-to-uppercase').simulate('click', { preventDefault: () => {} });

    expect(subject.find('.article-item__title').text()).toBe('LARI PAGI');
  });

});