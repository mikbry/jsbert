'use strict';

var tokenizers = require('tokenizers');

/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(async () => {
  const wordPieceTokenizer = await tokenizers.BertWordPieceTokenizer.fromOptions({ vocabFile: './vocab.txt' });
  const wpEncoded = await wordPieceTokenizer.encode('Who is John?', 'John is a teacher');

  console.log(wpEncoded.getTokens());
  console.log(wpEncoded.getIds());
  console.log(wpEncoded.getAttentionMask());
  console.log(wpEncoded.getOffsets());
  console.log(wpEncoded.getOverflowing());
  console.log(wpEncoded.getSpecialTokensMask());
  console.log(wpEncoded.getTypeIds());
})();
//# sourceMappingURL=index.js.map
