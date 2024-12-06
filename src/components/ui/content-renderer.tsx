import React from 'react';
import parse, { domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import Image from 'next/image';
import Heading from '@/components/ui/blog/heading';
import Subheading from '@/components/ui/blog/subheading';
import CustomLink from '@/components/ui/custom-links';
import CustomHighlight from '@/components/ui/custom-highlight';
import Intro from '@/components/ui/blog/intro';
import Highlight from '@/components/ui/blog/highlight'
import CustomListItem from '@/components/ui/custom-list'
interface CustomElement extends Element {
  name?: string;
  attribs?: { [key: string]: string };
  children?: CustomElement[];
}

// Props interface
interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        const { name, attribs, children } = domNode as CustomElement;

        switch (name) {
          case 'h2':
            return <Subheading>{domToReact(children, options)}</Subheading>;
          case 'h1':
            return <Heading>{domToReact(children, options)}</Heading>;
          case 'p':
            return <Intro>{domToReact(children, options)}</Intro>;
          case 'a':
            return <CustomLink href={attribs?.href || '#'}>{domToReact(children, options)}</CustomLink>;
          case 'img':
            return (
              <Image
                src={attribs?.src || '/default.jpg'}
                alt={attribs?.alt || 'Blog Image'}
                width={800}
                height={400}
                className='[width: 800px]!'
              />
            );
          case 'ul':
            return <ul className="custom-ul">{domToReact(children, options)}</ul>;
          case 'li':
            return <CustomListItem>{domToReact(children, options)}</CustomListItem>;
          case 'mark':
            return <CustomHighlight>{domToReact(children, options)}</CustomHighlight>;
          case 'span':
            return <CustomHighlight>{domToReact(children,options)}</CustomHighlight>;
          default:
            return undefined; // Leave other elements as they are
        }
      }
    },
  };

  return <div>{parse(content, options)}</div>;
};

export default ContentRenderer;

