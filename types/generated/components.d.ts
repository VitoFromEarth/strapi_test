import type { Schema, Struct } from '@strapi/strapi';

export interface BlogHeader extends Struct.ComponentSchema {
  collectionName: 'components_blog_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Address: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::address-selection.address'>;
    Country: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::country-select.country'>;
    Docs: Schema.Attribute.String &
      Schema.Attribute.CustomField<
        'plugin::component-docs.component-docs',
        {
          url: '/lololo';
        }
      >;
  };
}

export interface SharedDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_descriptions';
  info: {
    displayName: 'Description';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_blocks';
  info: {
    displayName: 'VideoBlock';
  };
  attributes: {
    Video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.header': BlogHeader;
      'shared.description': SharedDescription;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-block': SharedVideoBlock;
    }
  }
}
