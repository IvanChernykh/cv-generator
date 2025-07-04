import { Text, View } from '@react-pdf/renderer';

type Fragment = {
  text: string;
  bold?: boolean;
};

type Block = {
  fragments: Fragment[];
  listType?: 'ordered' | 'bullet';
};

type DeltaOperation = {
  insert?: string;
  attributes?: {
    bold?: boolean;
    list?: 'ordered' | 'bullet';
  };
};

export const deltaToJsx = (delta: string) => {
  let parsed: DeltaOperation[] = [];

  try {
    parsed = JSON.parse(delta);
  } catch (e) {
    parsed = [];
  }

  const blocks: Block[] = [];

  let currentBlock: Block = { fragments: [] };

  for (let i = 0; i < parsed.length; i++) {
    const { insert, attributes } = parsed[i];

    if (typeof insert !== 'string') continue;

    const parts = insert.split('\n');

    for (let j = 0; j < parts.length; j++) {
      const textPart = parts[j];
      const isLast = j === parts.length - 1;

      if (textPart.length > 0) {
        currentBlock.fragments.push({ text: textPart, bold: attributes?.bold });
      }

      if (!isLast) {
        // end of block
        currentBlock.listType = attributes?.list;
        blocks.push(currentBlock);
        currentBlock = { fragments: [] };
      }
    }
  }

  // last block
  if (currentBlock.fragments.length > 0) {
    blocks.push(currentBlock);
  }

  return (
    <View>
      {blocks.map((block, idx) => (
        <View
          key={idx}
          style={{
            flexDirection: 'row',
            marginLeft: block.listType ? 15 : 0,
            marginBottom: 4,
          }}
        >
          {block.listType && (
            <Text style={{ fontSize: 11, marginRight: 5 }}>{'\u2022'}</Text>
          )}
          <Text style={{ fontSize: 11, flexWrap: 'wrap' }}>
            {block.fragments.map((frag, i) => (
              <Text
                key={i}
                style={{
                  fontWeight: frag.bold ? 700 : 400,
                  fontSize: 11,
                }}
              >
                {frag.text}
              </Text>
            ))}
          </Text>
        </View>
      ))}
    </View>
  );
};
