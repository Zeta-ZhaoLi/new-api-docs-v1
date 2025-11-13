import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer as createMandarinTokenizer } from '@orama/tokenizers/mandarin';
import { createTokenizer as createJapaneseTokenizer } from '@orama/tokenizers/japanese';

// Statically cached for static export
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    // English
    en: {
      language: 'english',
    },
    // 简体中文 - 使用 Mandarin tokenizer
    zh: {
      components: {
        tokenizer: createMandarinTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
    // 日本語 - 使用 Japanese tokenizer
    ja: {
      components: {
        tokenizer: createJapaneseTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
