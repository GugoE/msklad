export interface Product {
    meta: Meta,
    id: string,
    accountId: string,
    owner: {
        meta: Meta
    },
    shared: boolean,
    group: {
        meta: Meta
    },
    updated: Date,
    name: string,
    description: string,
    code: string,
    externalCode: string,
    archived: false,
    pathName: '',
    useParentVat: true,
    uom: {
        meta: Meta
    },
    images: {
        meta: Meta
    },
    minPrice: MinPrice,
    salePrices: SalePrices[],
    buyPrice: MinPrice,
    barcodes: ProductBardcode[],
    supplier: {
        meta: Meta
    },
    paymentItemType: string,
    discountProhibited: boolean,
    country: {
        meta: Meta
    },
    article: string,
    weight: number,
    volume: number,
    variantsCount: number,
    isSerialTrackable: boolean,
    trackingType: string
    files: {
        meta: Meta
    }
}

export interface Meta {
    href: string
    metadataHref?: string
    type: string
    mediaType: string
    uuidHref?: string
    size?: number,
    limit?: number,
    offset?: number
}

export type ProductBardcode =
    { ean13: string } |
    { ean8: string } |
    { code128: string } |
    { gtin: string } |
    { upc: string }

export interface PriceType {
    meta: Meta
    id: string
    name: string
    externalCode: string
}

export type SalePrices = {
    value: number
    currency: Meta
    priceType: PriceType
}

export type MinPrice = {
    value: number
    currency: Meta
}