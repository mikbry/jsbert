/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BertWordPieceTokenizer } from 'tokenizers';

(async () => {
  const wordPieceTokenizer = await BertWordPieceTokenizer.fromOptions({
    vocabFile: './data/multi_cased_L-12_H-768_A-12/vocab.txt',
  });
  const wpEncoded = await wordPieceTokenizer.encode('Who is John?', 'John is a teacher');

  console.log(wpEncoded.getTokens());
  console.log(wpEncoded.getIds());
  console.log(wpEncoded.getAttentionMask());
  console.log(wpEncoded.getOffsets());
  console.log(wpEncoded.getOverflowing());
  console.log(wpEncoded.getSpecialTokensMask());
  console.log(wpEncoded.getTypeIds());
})();
