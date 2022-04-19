import React, { ReactNode } from 'react';

type Price = {
  currency?: string;
  currencysymbol?: string;
  price?: number;
  priceFormatted?: string;
};

type Brand = {
  name?: string;
};

type Options = {
  imageNode?: ReactNode;
  brandNode?: ReactNode;
  priceNode?: ReactNode;
  labelsNode?: ReactNode;
};

type Props = {
  name?: string;
  brand?: Brand;
  price?: Price;
  priceOriginal?: Price;
  [key: string]: any;
  linkRender: any;
  options?: Options;
  children?: ReactNode;
};

type LinkRendererType = (props: {
  children: React.ReactNode;
}) => React.ReactElement;

type CardLinkProps = {
  linkRender: LinkRendererType;
  children: React.ReactNode;
  [key: string]: any;
};

const CardLink = ({
  linkRender,
  children,
}: CardLinkProps): React.ReactElement => {
  return linkRender({ children });
};

const Version01 = ({
  name,
  price,
  priceOriginal,
  brand,
  linkRender,
  options,
  children,
}: Props): JSX.Element => {
  const isPriceOriginalVisible =
    (price?.price ?? 0) < (priceOriginal?.price ?? 0);
  return (
    <div data-testid="card-product-version-01">
      <CardLink linkRender={linkRender}>
        <section className={'image'}>
          {options?.imageNode}
          {options?.labelsNode ? options?.labelsNode : ''}
        </section>
      </CardLink>

      <section className={'content'}>
        <section className={'actions'}>
          {options?.brandNode ? options?.brandNode : brand?.name}
        </section>
        <section className={'title'}>{name}</section>
        <section className={'prices'}>
          {options?.priceNode ? (
            options?.priceNode
          ) : (
            <>
              <span>{price?.priceFormatted}</span>
              {isPriceOriginalVisible && (
                <del>{priceOriginal?.priceFormatted}</del>
              )}
            </>
          )}
        </section>
      </section>
      {children}
    </div>
  );
};

export default Version01;
