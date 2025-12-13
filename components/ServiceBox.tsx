import { COLORS } from '@/theme/colors'
import { useMemo } from 'react'
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

export default function ServiceBox({
    id,
    name,
    volume,
    onPress,
}: {
    id: string
    name: string
    volume?: {
        name: string
    }
    onPress: () => void
}) {
    const { width: windowWidth } = useWindowDimensions()

    const boxWidth = useMemo(() => {
        return windowWidth < 700 ? '22%' : '18%'
    }, [windowWidth])

    return (
        <TouchableOpacity
            style={{
                width: boxWidth,
                height: volume ? 110 : 80,
                flexDirection: 'column',
                borderRadius: 10,
                backgroundColor: COLORS.gray100,
                overflow: 'hidden',
                position: 'relative',
            }}
            onPress={onPress}
        >
            <View
                style={{
                    height: 80,
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                    borderColor: COLORS.gray200,
                    borderWidth: 1,
                    borderRadius: 10,

                    backgroundColor: COLORS.gray100,
                    zIndex: 10,

                    padding: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{ fontSize: 12, color: COLORS.gray950, textAlign: 'center' }}
                    numberOfLines={2}
                >
                    {name}
                </Text>
            </View>
            {volume && (
                <View
                    style={{
                        height: 50,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        // padding: 1,
                        paddingTop: 15,

                        // for text
                        paddingHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center',

                        // backgroundColor: 'red',

                        borderColor: COLORS.gray200,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderTopWidth: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,

                        overflow: 'hidden',

                        gap: 5,
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 35,
                            width: 15,
                            backgroundColor: '#ffffff20',
                            // marginBottom: 0.5,
                            // borderBottomStartRadius: 8,
                        }}
                    />
                    <Text
                        style={{
                            width: '100%',
                            fontSize: 8.5,
                            color: COLORS.gray900,
                            paddingTop: 5,
                        }}
                        numberOfLines={2}
                    >
                        {volume.name}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    )
}
