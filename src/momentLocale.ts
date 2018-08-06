import Locale from './Locale'

export default function (l: Locale): string {
    switch (l) {
        case Locale.EN:
            return 'en-ie'

        case Locale.DE:
            return 'de-ch'

        case Locale.ZH:
            return 'zh-cn'
    }
}
