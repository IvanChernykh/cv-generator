import { Text, View } from '@react-pdf/renderer';
import { DeltaOperation } from '../../components/ui/textEditor/textEditor';

const showBullet = (nextItem: DeltaOperation): boolean => {
  return !!(
    (nextItem?.insert === '\n' || nextItem?.insert === '\n\n') &&
    nextItem?.attributes?.list?.length
  );
};

export const deltaToJsx = (delta: string) => {
  let parsed: DeltaOperation[];

  try {
    parsed = JSON.parse(delta);
  } catch (e) {
    parsed = [];
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}
    >
      {parsed.map(({ insert }, idx, arr) => {
        const nextItem = arr[idx + 1];
        const withBullet = showBullet(nextItem);

        return (
          <View key={idx} style={{ position: 'relative' }}>
            <View>
              <Text style={{ fontSize: 11 }}>
                {insert?.slice(0, insert?.lastIndexOf('\n') + 1)}
              </Text>
              {withBullet && (
                <View style={{ position: 'relative' }}>
                  <View style={{ position: 'absolute', left: 0, fontSize: 11 }}>
                    <Text>{'  '} &#8226; </Text>
                  </View>
                </View>
              )}
              <Text
                style={{
                  fontSize: 11,
                  marginLeft: withBullet ? 15 : 0,
                }}
              >
                {insert?.slice(insert?.lastIndexOf('\n') + 1, insert.length)}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
